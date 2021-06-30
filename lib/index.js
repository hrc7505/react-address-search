var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
function CanadaAddressSearch(props) {
    var controlRef = React.useRef();
    var apiKey = props.apiKey, disabled = props.disabled, country = props.country, errorMessage = props.errorMessage, fieldId = props.fieldId, onPlaceSelect = props.onPlaceSelect;
    var handlePopulate = React.useCallback(function (address) {
        onPlaceSelect === null || onPlaceSelect === void 0 ? void 0 : onPlaceSelect(address);
    }, [onPlaceSelect]);
    React.useEffect(function () {
        function loadStyleAndScript() {
            return __awaiter(this, void 0, void 0, function () {
                var fields, options;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, loadScript(apiKey)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, loadStyle(apiKey)];
                        case 2:
                            _a.sent();
                            if (!controlRef.current) {
                                fields = [
                                    { element: fieldId, mode: pca.fieldMode.SEARCH, field: "Line1" }
                                ];
                                options = {
                                    key: apiKey,
                                };
                                controlRef.current = new pca.Address(fields, options);
                                controlRef.current.listen("populate", handlePopulate);
                            }
                            return [2 /*return*/, function () { var _a; return (_a = controlRef.current) === null || _a === void 0 ? void 0 : _a.destory(); }];
                    }
                });
            });
        }
        void loadStyleAndScript();
    }, [fieldId, handlePopulate, apiKey]);
    React.useEffect(function () {
        if (controlRef.current && country) {
            controlRef.current.setCountry(country);
        }
    }, [country]);
    return (_jsx("input", { disabled: disabled, "data-error": errorMessage ? true : false, id: fieldId, value: props.value, onChange: props.onChange }, void 0));
}
export default React.memo(CanadaAddressSearch);
var BASE_URL_CSS = "https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=";
var BASE_URL_JS = "https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js?key=";
function loadStyle(apiKey) {
    var linkElements = document.querySelectorAll("link[href*=\"" + BASE_URL_CSS + "\"]");
    if (linkElements && linkElements.length) {
        return new Promise(function (resolve) {
            // in case we already have a script on the page and it's loaded we resolve
            if (typeof pca !== "undefined")
                return resolve(undefined);
            // otherwise we wait until it's loaded and resolve
            linkElements[0].addEventListener("load", function () { return resolve(undefined); });
        });
    }
    var newLinkElement = document.createElement("link");
    newLinkElement.href = "" + BASE_URL_CSS + apiKey;
    newLinkElement.rel = "stylesheet";
    newLinkElement.type = "text/css";
    document.head.appendChild(newLinkElement);
    return new Promise(function (resolve) {
        newLinkElement.addEventListener("load", function () { return resolve(undefined); });
    });
}
function loadScript(apiKey) {
    var scriptElements = document.querySelectorAll("script[src*=\"" + BASE_URL_JS + "\"]");
    if (scriptElements && scriptElements.length) {
        return new Promise(function (resolve) {
            // in case we already have a script on the page and it's loaded we resolve
            if (typeof pca !== "undefined")
                return resolve(undefined);
            // otherwise we wait until it's loaded and resolve
            scriptElements[0].addEventListener("load", function () { return resolve(undefined); });
        });
    }
    var newScriptElement = document.createElement("script");
    newScriptElement.src = "" + BASE_URL_JS + apiKey;
    document.body.appendChild(newScriptElement);
    return new Promise(function (resolve) {
        newScriptElement.addEventListener("load", function () { return resolve(undefined); });
    });
}
