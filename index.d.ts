import * as React from "react";

import "./src/pca";

export interface ICanadaAddressSearchProps {
    apiKey: string;
    fieldId: string;
    value: string;
    country?: string;
    disabled?: boolean;
    errorMessage?: string;
    required?: boolean;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onPlaceSelect?(address: pca.IPopulatedAddress): void;
}

declare function CanadaAddressSearch(props: ICanadaAddressSearchProps): JSX.Element;

declare module 'react-canada-address-search' {
}

export default CanadaAddressSearch;