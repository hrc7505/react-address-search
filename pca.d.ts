/* eslint-disable max-classes-per-file, @typescript-eslint/naming-convention */

type Func = () => void;

declare namespace pca {
    class Eventable {
        listen: (event: string, action: (param: any) => void) => void;
        setCountry: (countryName: string) => void;
        setCountryByIP: Func;
        setHeight: (height: number) => void;
        setWidth: (width: number) => void;
        setCulture: (culture: string) => void;
        disable: Func;
        enable: Func;
        destory: Func;

        constructor(source: any);
    }

    class AddressComplete extends Eventable {
        controls: unknown[];
        bindings: { fields: Address.Binding[]; options: Address.Options }[];

        constructor();
    }

    const addressComplete: AddressComplete;

    /**
     * This is where the `AddressComplete` instance is initiated
     */
    class Address extends Eventable {
        /**
         * This array is where the fields that `AddressComplete` uses are defined: element is the id of the element
         * you want to use, field is the `AddressComplete` field to associate with that element, and mode allows
         * you to select the mode the field will operate in.
         */
        fields?: Address.Binding[];

        /**
         * This is where the options for the `AddressComplete` control are defined.
         */
        options?: Address.Options;

        manualEntry: Func;
        newSearch: Func;
        load: Func;
        hide: Func;
        visible: Func;
        clear: Func;
        detectLangauge: Func;
        populate: Func;
        reload: Func;
        reposition: Func;
        reset: Func;
        switchToSearchMode: Func;
        switchToCountrySelect: Func;
        showFooterMessage: Func;
        showFooterLogo: Func;
        setCursorText: (text: string) => void;
        searchFromField: Func;

        private readonly country: string;
        private readonly filteringMode: string;
        private readonly orderingMode: string;
        private readonly initialSearch: boolean;
        private readonly key: string;
        private readonly language: string;
        private readonly loaded: boolean;
        private readonly messageBoc: HTMLDivElement;

        constructor(
            /**
             * This array is where the fields that `AddressComplete` uses are defined: element is the id of the element
             * you want to use, field is the `AddressComplete` field to associate with that element, and mode allows
             * you to select the mode the field will operate in.
             */
            fields?: Address.Binding[],

            /**
             * This is where the options for the `AddressComplete` control are defined.
             */
            options?: Address.Options,
        );
    }

    const fieldMode: {
        /**
         * This field will be ignored.
         */
        NONE: number;

        /**
         * This sets the field to an `AddressComplete` search field. 
         * Typing in this field will trigger searching via the `AddressComplete` control.
         */
        SEARCH: number;

        /**
         * This mode will populate the element with the `AddressComplete` field when a user selects an address.
         * Typing in this field will not trigger an `AddressComplete` search.
         */
        POPULATE: number;

        /**
         * This is the default mode and combines the actions of SEARCH and POPULATE.
         */
        DEFAULT: number;

        /**
         * This prevents the field from being overwritten by `AddressComplete`.
         */
        PRESERVE: number;

        /**
         * This mode indicates a country selector. 
         * This can be used to select the country for `AddressComplete` to search in.
         */
        COUNTRY: number;
    };

    enum FieldMode {
        NONE = 0,
        SEARCH = 1,
        POPULATE = 2,
        DEFAULT = 3,
        PRESERVE = 4,
        COUNTRY = 8,
    }

    namespace Address {
        interface Binding {
            /**
             * And `id` of the element you want to use.
             */
            element?: string;

            /**
             * `AddressComplete` field to associate with that element.
             * @possibleValues
             * `""` | `"Line1"` | `"Line2"` | `"City"` | `"ProvinceName"` | 
             * `"PostalCode"` | `"CountryName"` | `"{AcMua}"` | `"{AcRbdi}"`
             */
            field: string;

            /**
             * allows you to select the mode the field will operate in.
             */
            mode: FieldMode;
        }

        interface Options {
            /**
             * The key used to authenticate the request.
             * This can be copied from the code sample of an `AddressComplete` installation.
             */
            key: string;

            /**
             * A reference for the control used as an id to provide ARIA support.
             */
            name?: string;

            /**
             * Used to enable or disable population of all fields.
             * @defaultValue `true`
             */
            populate?: boolean;

            /**
             * Only input fields will be populated.
             * @defaultValue `false`
             */
            onlyInputs?: boolean;

            /**
             * Search will be triggered on field focus.
             * @defaultValue `false`
             */
            autoSearch?: boolean;

            preselect?: boolean;

            /**
             * Shows a message to prompt the user for more detail.
             * @defaultValue `false`
             */
            prompt?: boolean;

            /**
             * The time in milliseconds before the control will prompt the user for more detail.
             * @defaultValue `0`
             */
            promptDelay?: number;


            inlineMessages?: boolean;

            /**
             * Updates the input field with the current search text.
             * @defaultValue `false`
             */
            setCursor?: boolean;

            matchCount?: boolean;

            /**
             * Search will be triggered on field focus.
             * @defaultValue `1`
             */
            minSearch?: number;

            /**
             * The minimum number of items to show (0 = disabled).
             * @defaultValue `0`
             */
            minItems?: number;

            /**
             * The maximum number of items to show (0 = disabled).
             * @defaultValue `0`
             */
            maxItems?: number;

            /**
             * If no results are found, the message can be clicked to disable the control.
             * @defaultValue `false`
             */
            manualEntry?: boolean;

            manualEntryItem?: boolean;

            /**
             * The time in milliseconds to disable the control for manual entry.
             * @defaultValue `6000`
             */
            disableTime?: number;

            /**
             * Suppress the default browser field autocomplete on search fields.
             * @defaultValue `true`
             */
            suppressAutocomplete?: boolean;

            /**
             * Automatically set the country based upon the user IP address.
             * @defaultValue `false`
             */
            setCountryByIP?: boolean;

            /**
             * Force set the culture for labels, e.g. "en-us", "fr-ca".
             */
            culture?: string;

            /**
             * The preferred language for the selected address, e.g. "eng", "fra".
             */
            languagePreference?: string;

            /**
             * @possibleValues 
             * "Companies" | "Everything" | "Places" | "PostalCodes" | "Residential"
             */
            filteringMode?: string;

            orderingMode?: any; // pca.orderingMode;

            countries?: any; // pca.CountryList.Options;

            list?: any; // pca.AutoComplete.Options;

            bar?: any; // pca.Address.BarOptions;

            search?: any; // pca.Address.SearchOptions;
        }
    }

    interface IPopulatedAddress {
        AdminAreaCode: string;
        AdminAreaName: string;
        Barcode: string;
        Block: string;
        BuildingName: string;
        BuildingNumber: string;
        City: string;
        Company: string;
        CountryIso2: string;
        CountryIso3: string;
        CountryIsoNumber: number;
        CountryName: string;
        DataLevel: string;
        Department: string;
        District: string;
        DomesticId: string;
        Field1: string;
        Field2: string;
        Field3: string;
        Field4: string;
        Field5: string;
        Field6: string;
        Field7: string;
        Field8: string;
        Field9: string;
        Field10: string;
        Field11: string;
        Field12: string;
        Field13: string;
        Field14: string;
        Field15: string;
        Field16: string;
        Field17: string;
        Field18: string;
        Field19: string;
        Field20: string;
        FormattedLine1: string;
        FormattedLine2: string;
        FormattedLine3: string;
        FormattedLine4: string;
        FormattedLine5: string;
        Id: string;
        Label: string;
        Language: string;
        LanguageAlternatives: string;
        Line1: string;
        Line2: string;
        Line3: string;
        Line4: string;
        Line5: string;
        Neighbourhood: string;
        POBoxNumber: string;
        PostalCode: string;
        Province: string;
        ProvinceCode: string;
        ProvinceName: string;
        SecondaryStreet: string;
        SortingNumber1: string;
        SortingNumber2: string;
        Street: string;
        SubBuilding: string;
        Type: string;
    }
}