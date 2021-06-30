import * as React from "react";

import "./pca";

export interface ICanadaAddressSearchProps {
    /**
     * Used to access AddressComplete.
     */
    apiKey: string;

    /**
     * Used to make the field to a search field.
     * This value will be passed to the core library to set the search mode for the input.
     */
    fieldId: string;

    /**
     * Displays a label within a search input.
     */
    label?: string;

    /**
     * The value to be displayed in the input. 
     * This is the controlled input so parent component need to manage a state for this value.
     */
    value: string;

    /**
     * If passed, the API will return the addresses for the passed country only.
     */
    country?: string;

    /**
     * Used to disable input.
     */
    disabled?: boolean;

    /**
     * Used to display a error message below the input.
     */
    errorMessage?: string;

    /**
     * To make the field required in terms of design.
     */
    required?: boolean;

    /**
     * A CSS class for root.
     */
    rootClassName?: string;

    /**
     * A CSS class for label.
     */
    labelClassName?: string;

    /**
     * A CSS class for input.
     */
    inputClassName?: string;

    /**
     * A CSS class for errorMessage div.
     */
    errorMessageClassName?: string;

    onChange(e: React.ChangeEvent<HTMLInputElement>): void;

    /**
     * Returns the address object of a selected place.
     * @param address Selected address.
     */
    onPlaceSelect?(address: pca.IPopulatedAddress): void;
}

declare function CanadaAddressSearch(props: ICanadaAddressSearchProps): JSX.Element;

declare module "react-canada-address-search" { }

export default CanadaAddressSearch;