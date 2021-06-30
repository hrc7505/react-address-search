import * as React from "react";

import { ICanadaAddressSearchProps } from '../index';

function CanadaAddressSearch(props: ICanadaAddressSearchProps): JSX.Element {
    const controlRef = React.useRef<pca.Address>();
    const { apiKey, disabled, country, errorMessage, fieldId, onPlaceSelect } = props;

    const handlePopulate = React.useCallback((address: pca.IPopulatedAddress) => {
        onPlaceSelect?.(address);
    }, [onPlaceSelect]);

    React.useEffect(() => {
        async function loadStyleAndScript() {
            await loadScript(apiKey);
            await loadStyle(apiKey);

            if (!controlRef.current) {
                const fields: pca.Address.Binding[] = [
                    { element: fieldId, mode: pca.fieldMode.SEARCH, field: "Line1" }
                ];

                const options: pca.Address.Options = {
                    key: apiKey,
                };

                controlRef.current = new pca.Address(fields, options);
                controlRef.current.listen("populate", handlePopulate);
            }

            return () => controlRef.current?.destory();
        }

        void loadStyleAndScript();
    }, [fieldId, handlePopulate, apiKey]);

    React.useEffect(() => {
        if (controlRef.current && country) {
            controlRef.current.setCountry(country);
        }
    }, [country]);

    return (
        <input
            disabled={disabled}
            data-error={errorMessage ? true : false}
            id={fieldId}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default React.memo(CanadaAddressSearch);

const BASE_URL_CSS = "https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=";
const BASE_URL_JS = "https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js?key=";

function loadStyle(apiKey: string): Promise<void> {
    const linkElements = document.querySelectorAll(`link[href*="${BASE_URL_CSS}"]`);

    if (linkElements && linkElements.length) {
        return new Promise((resolve) => {
            // in case we already have a script on the page and it's loaded we resolve
            if (typeof pca !== "undefined") return resolve(undefined);

            // otherwise we wait until it's loaded and resolve
            linkElements[0].addEventListener("load", () => resolve(undefined));
        });
    }

    const newLinkElement = document.createElement("link");
    newLinkElement.href = `${BASE_URL_CSS}${apiKey}`;
    newLinkElement.rel = "stylesheet";
    newLinkElement.type = "text/css";
    document.head.appendChild(newLinkElement);

    return new Promise((resolve) => {
        newLinkElement.addEventListener("load", () => resolve(undefined));
    });
}

function loadScript(apiKey: string): Promise<void> {
    const scriptElements = document.querySelectorAll(`script[src*="${BASE_URL_JS}"]`);

    if (scriptElements && scriptElements.length) {
        return new Promise((resolve) => {
            // in case we already have a script on the page and it's loaded we resolve
            if (typeof pca !== "undefined") return resolve(undefined);

            // otherwise we wait until it's loaded and resolve
            scriptElements[0].addEventListener("load", () => resolve(undefined));
        });
    }

    const newScriptElement = document.createElement("script");
    newScriptElement.src = `${BASE_URL_JS}${apiKey}`;
    document.body.appendChild(newScriptElement);

    return new Promise((resolve) => {
        newScriptElement.addEventListener("load", () => resolve(undefined));
    });
}