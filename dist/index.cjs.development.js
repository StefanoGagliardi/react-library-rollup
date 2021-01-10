'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactHookForm = require('react-hook-form');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// Import core
// Import custom
const InputCheckbox = (props) => {
    // const [invalid, setInvalid] = useState<boolean>(true);
    var _a, _b, _c;
    const { register, errors, setValue, trigger } = reactHookForm.useFormContext(); // retrieve all hook methods
    const [validation, setValidation] = React.useState({});
    const [checkboxValue, setCheckboxValue] = React.useState(false);
    // Build Validation Object
    React.useEffect(() => {
        // Copy reference props
        const rawValidation = props.validation;
        // Add regex for validate email pattern
        setValidation(rawValidation);
    }, []);
    const handleCheckboxValue = () => {
        // console.log('!checkboxValue', !checkboxValue);
        setValue(props.name, !checkboxValue);
        setCheckboxValue(!checkboxValue);
        trigger();
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "fg__checkbox-wrapper" },
            React__default['default'].createElement("input", { id: props.id, type: "checkbox", className: 'form-control ' + (errors[props.name] ? 'is-invalid ' : ' '), name: props.name, checked: checkboxValue, onChange: (_value) => {
                    // console.log('Checkbox onChange value:', value);
                }, autoComplete: props.autocomplete ? props.autocomplete : 'off', ref: register(validation) }),
            React__default['default'].createElement("span", { className: "checkmark", onClick: handleCheckboxValue }),
            React__default['default'].createElement("div", { className: "fg__checkbox-text", dangerouslySetInnerHTML: { __html: props.placeholder } })),
        React__default['default'].createElement("div", { className: "invalid-feedback" }, ((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'required' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_b = errors[props.name]) === null || _b === void 0 ? void 0 : _b.message) === '' ? (React__default['default'].createElement("span", null, "Il campo \u00E8 richiesto")) : (React__default['default'].createElement("span", null, (_c = errors[props.name]) === null || _c === void 0 ? void 0 : _c.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)))));
};

// Import core
// Ract.FC<InputEmailProps>
const InputEmail = (props) => {
    // const [invalid, setInvalid] = useState<boolean>(true);
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const { register, errors, watch, setError, clearErrors } = reactHookForm.useFormContext(); // retrieve all hook methods
    const [validation, setValidation] = React.useState({});
    const [minLength, setMinLength] = React.useState(0);
    const [maxLength, setMaxLength] = React.useState(0);
    // Build Validation Object
    React.useEffect(() => {
        // Copy reference props
        const rawValidation = props.validation;
        // If exists set minLength state for error message
        if (props.validation.minLength) {
            if (props.validation.minLength.value) {
                setMinLength(parseInt(props.validation.minLength
                    .value));
            }
            else {
                setMinLength(parseInt(props.validation.minLength));
            }
        }
        // If exists set maxLength state for error message
        if (props.validation.maxLength) {
            if (props.validation.maxLength.value) {
                setMaxLength(parseInt(props.validation.maxLength
                    .value));
            }
            else {
                setMaxLength(parseInt(props.validation.maxLength));
            }
        }
        // Normalize equalTo validation with validate method
        if (props.validation.equalTo !== undefined &&
            props.validation.equalTo.value) {
            const equalToField = props.validation.equalTo
                .value;
            rawValidation.validate = (value) => value === watch(equalToField);
        }
        // Add regex for validate email pattern
        setValidation(Object.assign(Object.assign({}, rawValidation), { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }));
    }, []);
    // Update error object message for equalTo
    React.useEffect(() => {
        var _a;
        // console.log('useEFfect errors: ', errors);
        if (((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'validate' &&
            props.validation.equalTo.value) {
            // console.log('useEFfect errors: ', errors);
            setError('repeatEmail', {
                type: 'equalTo',
                message: 'I due indirizzi email devono coincidere',
            });
            clearErrors('validate');
        }
    }, [errors]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("input", { id: props.id, type: "email", className: 'form-control ' + (errors[props.name] ? 'is-invalid ' : ' '), placeholder: props.placeholder, name: props.name, autoComplete: props.autocomplete ? props.autocomplete : 'off', ref: register(validation) }),
        React__default['default'].createElement("div", { className: "invalid-feedback" },
            ((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'required' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_b = errors[props.name]) === null || _b === void 0 ? void 0 : _b.message) === '' ? (React__default['default'].createElement("span", null, "Il campo email \u00E8 richiesto")) : (React__default['default'].createElement("span", null, (_c = errors[props.name]) === null || _c === void 0 ? void 0 : _c.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_d = errors[props.name]) === null || _d === void 0 ? void 0 : _d.type) == 'minLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_e = errors[props.name]) === null || _e === void 0 ? void 0 : _e.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza minima \u00E8 ",
                minLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_f = errors[props.name]) === null || _f === void 0 ? void 0 : _f.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_g = errors[props.name]) === null || _g === void 0 ? void 0 : _g.type) == 'maxLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_h = errors[props.name]) === null || _h === void 0 ? void 0 : _h.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza massima \u00E8 ",
                maxLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_j = errors[props.name]) === null || _j === void 0 ? void 0 : _j.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_k = errors[props.name]) === null || _k === void 0 ? void 0 : _k.type) == 'pattern' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_l = errors[props.name]) === null || _l === void 0 ? void 0 : _l.message) === '' ? (React__default['default'].createElement("span", null, "Inserire un&aposindirizzo email valido")) : (React__default['default'].createElement("span", null, (_m = errors[props.name]) === null || _m === void 0 ? void 0 : _m.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_o = errors[props.name]) === null || _o === void 0 ? void 0 : _o.type) == 'validate' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_p = errors[props.name]) === null || _p === void 0 ? void 0 : _p.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di validazione")) : (React__default['default'].createElement("span", null, (_q = errors[props.name]) === null || _q === void 0 ? void 0 : _q.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_r = errors[props.name]) === null || _r === void 0 ? void 0 : _r.type) == 'equalTo' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_s = errors[props.name]) === null || _s === void 0 ? void 0 : _s.message) === '' ? (React__default['default'].createElement("span", null, "I due campi devono essere uguali")) : (React__default['default'].createElement("span", null, (_t = errors[props.name]) === null || _t === void 0 ? void 0 : _t.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)))));
};

// Import core
const InputPassword = (props) => {
    // const [invalid, setInvalid] = useState<boolean>(true);
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const { register, errors, watch } = reactHookForm.useFormContext(); // retrieve all hook methods
    const [validation, setValidation] = React.useState({});
    const [minLength, setMinLength] = React.useState(0);
    const [maxLength, setMaxLength] = React.useState(0);
    // Build Validation Object
    // TODO Fare un custom hook per uesta serie di operazioni?
    React.useEffect(() => {
        // Copy reference props
        const rawValidation = props.validation;
        // If exists set minLength state for error message
        if (props.validation.minLength) {
            if (props.validation.minLength.value) {
                setMinLength(parseInt(props.validation.minLength
                    .value));
            }
            else {
                setMinLength(parseInt(props.validation.minLength));
            }
        }
        // If exists set maxLength state for error  message
        if (props.validation.maxLength) {
            if (props.validation.maxLength.value) {
                setMaxLength(parseInt(props.validation.maxLength
                    .value));
            }
            else {
                setMaxLength(parseInt(props.validation.maxLength));
            }
        }
        // Normalize equalTo validation with validate method
        if (props.validation.equalTo !== undefined &&
            props.validation.equalTo.value) {
            const equalToField = props.validation.equalTo
                .value;
            rawValidation.validate = (value) => value === watch(equalToField);
        }
        // Add regex for validate email pattern
        setValidation(Object.assign({}, rawValidation));
    }, []);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("input", { id: props.id, type: "password", className: 'form-control ' + (errors[props.name] ? 'is-invalid ' : ' '), placeholder: props.placeholder, name: props.name, autoComplete: props.autocomplete ? props.autocomplete : 'off', ref: register(validation) }),
        React__default['default'].createElement("div", { className: "invalid-feedback" },
            ((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'required' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_b = errors[props.name]) === null || _b === void 0 ? void 0 : _b.message) === '' ? (React__default['default'].createElement("span", null, "Il campo password \u00E8 richiesto")) : (React__default['default'].createElement("span", null, (_c = errors[props.name]) === null || _c === void 0 ? void 0 : _c.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_d = errors[props.name]) === null || _d === void 0 ? void 0 : _d.type) == 'minLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_e = errors[props.name]) === null || _e === void 0 ? void 0 : _e.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza minima \u00E8 ",
                minLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_f = errors[props.name]) === null || _f === void 0 ? void 0 : _f.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_g = errors[props.name]) === null || _g === void 0 ? void 0 : _g.type) == 'maxLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_h = errors[props.name]) === null || _h === void 0 ? void 0 : _h.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza massima \u00E8 ",
                maxLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_j = errors[props.name]) === null || _j === void 0 ? void 0 : _j.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_k = errors[props.name]) === null || _k === void 0 ? void 0 : _k.type) == 'pattern' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_l = errors[props.name]) === null || _l === void 0 ? void 0 : _l.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di formattazione")) : (React__default['default'].createElement("span", null, (_m = errors[props.name]) === null || _m === void 0 ? void 0 : _m.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_o = errors[props.name]) === null || _o === void 0 ? void 0 : _o.type) == 'validate' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_p = errors[props.name]) === null || _p === void 0 ? void 0 : _p.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di validazione")) : (React__default['default'].createElement("span", null, (_q = errors[props.name]) === null || _q === void 0 ? void 0 : _q.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_r = errors[props.name]) === null || _r === void 0 ? void 0 : _r.type) == 'equalTo' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_s = errors[props.name]) === null || _s === void 0 ? void 0 : _s.message) === '' ? (React__default['default'].createElement("span", null, "I due campi devono essere uguali")) : (React__default['default'].createElement("span", null, (_t = errors[props.name]) === null || _t === void 0 ? void 0 : _t.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)))));
};

// Get layout class by props
const getLayoutValue = (layout) => {
    switch (layout) {
        case '1':
            return 1;
        case '1/2':
            return 0.5;
        case '1/3':
            return 0.33;
        case '1/4':
            return 0.25;
        default:
            return 1;
    }
};
const getLayoutColClass = (layout) => {
    switch (layout) {
        case '1':
            return 'fg__col-full';
        case '1/2':
            return 'fg__col-half';
        case '1/3':
            return 'fg__col-third';
        case '1/4':
            return 'fg__col-fourth';
        default:
            return 'fg__col-full';
    }
};
// Get default value from Select option list and return value
const getSelectDefaultValue = (_data) => {
    return 'CO';
};
const fetchData = async (url) => {
    const options = {};
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const res = {
            status: true,
            data: result,
        };
        return res;
    }
    catch (error) {
        const response = {
            status: false,
            data: [],
        };
        return response;
    }
};
const onSubmitBackendCall = async (url, method, data) => {
    const getParams = new URLSearchParams(data);
    let options = {};
    if (method == 'GET') {
        options = {
            method: method,
        };
    }
    else {
        options = {
            method: method,
            body: data,
        };
    }
    try {
        const response = await fetch(url + '?' + getParams, options);
        const result = await response.json();
        const res = {
            status: true,
            data: result,
        };
        return res;
    }
    catch (error) {
        const response = {
            status: false,
            data: [],
        };
        return response;
    }
};

// Import core
const InputSelect = (props) => {
    // Get <Select> data
    var _a, _b, _c, _d, _e;
    // Form core
    const { register, errors } = reactHookForm.useFormContext(); // retrieve all hook methods
    // State
    const [validation, setValidation] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [optionData, setOptionData] = React.useState([]);
    const [defaultValue, setDefaultValue] = React.useState('');
    React.useEffect(() => {
        let flag = false;
        // console.log('props.validation.required', props.validation.required);
        if (props.validation.required.value) {
            flag = true;
        }
        if (props.validation.required === true) {
            flag = true;
        }
        if (flag) {
            // console.log('Here select Name: ', props.name);
            setValidation({
                validate: (value) => {
                    if (value) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
            });
        }
    }, [props.validation]);
    React.useEffect(() => {
        var _a, _b;
        // No data: infinite loading
        if (((_a = props.data) === null || _a === void 0 ? void 0 : _a.length) === 0 && !props.fetchDataFromUrl) {
            // console.warn('MagicFormGenerator: nessuna opzione fornita per il Select');
            return;
        }
        // Static data
        if (props.data && ((_b = props.data) === null || _b === void 0 ? void 0 : _b.length) > 0 && !props.fetchDataFromUrl) {
            setOptionData(props.data);
            setLoading(false);
            return;
        }
        // Fetch data from url
        if (props.fetchDataFromUrl) {
            const fetchEffectData = async () => {
                const res = await fetchData(props.fetchDataFromUrl);
                if (res.status) {
                    setOptionData(res.data);
                    setLoading(false);
                }
                return res;
            };
            fetchEffectData();
        }
        // NB: If both data and url are set. Merge arrays:
        // Dynamic data with fetch
        // NB:
        setOptionData(props.data);
        const getDefaultValue = getSelectDefaultValue(props.data);
        // console.log('getDefaultValue', getDefaultValue);
        setDefaultValue(getDefaultValue);
    }, [props.data]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "fg__select-wrapper" },
            React__default['default'].createElement("select", { id: props.id, className: 'form-control ' +
                    'fg__input-select ' +
                    (errors[props.name] ? 'is-invalid ' : ' '), name: props.name, ref: register(validation), autoComplete: props.autocomplete ? props.autocomplete : 'off', disabled: loading, defaultValue: defaultValue },
                props.placeholder ? (React__default['default'].createElement("option", { value: "" }, props.placeholder)) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                optionData.map((option, index) => {
                    return (React__default['default'].createElement("option", { key: index, value: option.value, disabled: option.disabled ? true : false }, option.label));
                })),
            React__default['default'].createElement("div", { className: 'loader ' + 'fg__input-select ' + (loading ? 'loader-active ' : ' ') },
                React__default['default'].createElement("span", null))),
        React__default['default'].createElement("div", { className: "invalid-feedback" }, ((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'validate' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_c = (_b = props === null || props === void 0 ? void 0 : props.validation) === null || _b === void 0 ? void 0 : _b.required) === null || _c === void 0 ? void 0 : _c.message) === '' ? (React__default['default'].createElement("span", null, "Selezionare un opzione")) : (React__default['default'].createElement("span", null, (_e = (_d = props === null || props === void 0 ? void 0 : props.validation) === null || _d === void 0 ? void 0 : _d.required) === null || _e === void 0 ? void 0 : _e.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)))));
};

// Import core
const InputText = (props) => {
    // const [invalid, setInvalid] = useState<boolean>(true);
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const { register, errors, watch, setError, clearErrors } = reactHookForm.useFormContext(); // retrieve all hook methods
    const [validation, setValidation] = React.useState({});
    const [minLength, setMinLength] = React.useState(0);
    const [maxLength, setMaxLength] = React.useState(0);
    // Build Validation Object
    React.useEffect(() => {
        // Copy reference props
        const rawValidation = props.validation;
        // If exists set minLength state for error message
        if (props.validation.minLength) {
            if (props.validation.minLength.value) {
                setMinLength(parseInt(props.validation.minLength
                    .value));
            }
            else {
                setMinLength(parseInt(props.validation.minLength));
            }
        }
        // If exists set maxLength state for error message
        if (props.validation.maxLength) {
            if (props.validation.maxLength.value) {
                setMaxLength(parseInt(props.validation.maxLength
                    .value));
            }
            else {
                setMaxLength(parseInt(props.validation.maxLength));
            }
        }
        // Normalize equalTo validation with validate method
        if (props.validation.equalTo !== undefined &&
            props.validation.equalTo.value) {
            const equalToField = props.validation.equalTo
                .value;
            rawValidation.validate = (value) => value === watch(equalToField);
        }
        // Add regex for validate email pattern
        setValidation(rawValidation);
    }, []);
    // Update error object message for equalTo
    React.useEffect(() => {
        var _a;
        if (((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'validate' &&
            props.validation.equalTo.value) {
            setError('repeatEmail', {
                type: 'equalTo',
                message: 'I due indirizzi email devono coincidere',
            });
            clearErrors('validate');
        }
    }, [errors]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("input", { id: props.id, type: "text", className: 'form-control ' + (errors[props.name] ? 'is-invalid ' : ' '), placeholder: props.placeholder, name: props.name, autoComplete: props.autocomplete ? props.autocomplete : 'off', ref: register(validation) }),
        React__default['default'].createElement("div", { className: "invalid-feedback" },
            ((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'required' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_b = errors[props.name]) === null || _b === void 0 ? void 0 : _b.message) === '' ? (React__default['default'].createElement("span", null, "Il campo \u00E8 richiesto")) : (React__default['default'].createElement("span", null, (_c = errors[props.name]) === null || _c === void 0 ? void 0 : _c.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_d = errors[props.name]) === null || _d === void 0 ? void 0 : _d.type) == 'minLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_e = errors[props.name]) === null || _e === void 0 ? void 0 : _e.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza minima \u00E8 ",
                minLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_f = errors[props.name]) === null || _f === void 0 ? void 0 : _f.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_g = errors[props.name]) === null || _g === void 0 ? void 0 : _g.type) == 'maxLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_h = errors[props.name]) === null || _h === void 0 ? void 0 : _h.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza massima \u00E8 ",
                maxLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_j = errors[props.name]) === null || _j === void 0 ? void 0 : _j.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_k = errors[props.name]) === null || _k === void 0 ? void 0 : _k.type) == 'pattern' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_l = errors[props.name]) === null || _l === void 0 ? void 0 : _l.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di formattazione")) : (React__default['default'].createElement("span", null, (_m = errors[props.name]) === null || _m === void 0 ? void 0 : _m.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_o = errors[props.name]) === null || _o === void 0 ? void 0 : _o.type) == 'validate' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_p = errors[props.name]) === null || _p === void 0 ? void 0 : _p.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di validazione")) : (React__default['default'].createElement("span", null, (_q = errors[props.name]) === null || _q === void 0 ? void 0 : _q.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_r = errors[props.name]) === null || _r === void 0 ? void 0 : _r.type) == 'equalTo' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_s = errors[props.name]) === null || _s === void 0 ? void 0 : _s.message) === '' ? (React__default['default'].createElement("span", null, "I due campi devono essere uguali")) : (React__default['default'].createElement("span", null, (_t = errors[props.name]) === null || _t === void 0 ? void 0 : _t.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)))));
};

// Import core
const InputTextarea = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const { register, errors, watch, setError, clearErrors } = reactHookForm.useFormContext(); // retrieve all hook methods
    const [validation, setValidation] = React.useState({});
    const [minLength, setMinLength] = React.useState(0);
    const [maxLength, setMaxLength] = React.useState(0);
    // Build Validation Object
    React.useEffect(() => {
        // Copy reference props
        const rawValidation = props.validation;
        // If exists set minLength state for error message
        if (props.validation.minLength) {
            if (props.validation.minLength.value) {
                setMinLength(parseInt(props.validation.minLength
                    .value));
            }
            else {
                setMinLength(parseInt(props.validation.minLength));
            }
        }
        // If exists set maxLength state for error message
        if (props.validation.maxLength) {
            if (props.validation.maxLength.value) {
                setMaxLength(parseInt(props.validation.maxLength
                    .value));
            }
            else {
                setMaxLength(parseInt(props.validation.maxLength));
            }
        }
        // Normalize equalTo validation with validate method
        if (props.validation.equalTo !== undefined &&
            props.validation.equalTo.value) {
            const equalToField = props.validation.equalTo
                .value;
            rawValidation.validate = (value) => value === watch(equalToField);
        }
        // Add regex for validate email pattern
        setValidation(rawValidation);
    }, []);
    // Update error object message for equalTo
    React.useEffect(() => {
        var _a;
        if (((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'validate' &&
            props.validation.equalTo.value) {
            setError('repeatEmail', {
                type: 'equalTo',
                message: 'I due campi devono coincidere',
            });
            clearErrors('validate');
        }
    }, [errors]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("textarea", { id: props.id, className: 'form-control ' + (errors[props.name] ? 'is-invalid ' : ' '), placeholder: props.placeholder, name: props.name, autoComplete: props.autocomplete ? props.autocomplete : 'off', ref: register(validation) }),
        React__default['default'].createElement("div", { className: "invalid-feedback" },
            ((_a = errors[props.name]) === null || _a === void 0 ? void 0 : _a.type) == 'required' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_b = errors[props.name]) === null || _b === void 0 ? void 0 : _b.message) === '' ? (React__default['default'].createElement("span", null, "Il campo \u00E8 richiesto")) : (React__default['default'].createElement("span", null, (_c = errors[props.name]) === null || _c === void 0 ? void 0 : _c.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_d = errors[props.name]) === null || _d === void 0 ? void 0 : _d.type) == 'minLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_e = errors[props.name]) === null || _e === void 0 ? void 0 : _e.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza minima \u00E8 ",
                minLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_f = errors[props.name]) === null || _f === void 0 ? void 0 : _f.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_g = errors[props.name]) === null || _g === void 0 ? void 0 : _g.type) == 'maxLength' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_h = errors[props.name]) === null || _h === void 0 ? void 0 : _h.message) === '' ? (React__default['default'].createElement("span", null,
                "La lunghezza massima \u00E8 ",
                maxLength,
                " caratteri")) : (React__default['default'].createElement("span", null, (_j = errors[props.name]) === null || _j === void 0 ? void 0 : _j.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_k = errors[props.name]) === null || _k === void 0 ? void 0 : _k.type) == 'pattern' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_l = errors[props.name]) === null || _l === void 0 ? void 0 : _l.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di formattazione")) : (React__default['default'].createElement("span", null, (_m = errors[props.name]) === null || _m === void 0 ? void 0 : _m.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_o = errors[props.name]) === null || _o === void 0 ? void 0 : _o.type) == 'validate' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_p = errors[props.name]) === null || _p === void 0 ? void 0 : _p.message) === '' ? (React__default['default'].createElement("span", null, "Rispettare le regole di validazione")) : (React__default['default'].createElement("span", null, (_q = errors[props.name]) === null || _q === void 0 ? void 0 : _q.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            ((_r = errors[props.name]) === null || _r === void 0 ? void 0 : _r.type) == 'equalTo' ? (React__default['default'].createElement(React__default['default'].Fragment, null, ((_s = errors[props.name]) === null || _s === void 0 ? void 0 : _s.message) === '' ? (React__default['default'].createElement("span", null, "I due campi devono essere uguali")) : (React__default['default'].createElement("span", null, (_t = errors[props.name]) === null || _t === void 0 ? void 0 : _t.message)))) : (React__default['default'].createElement(React__default['default'].Fragment, null)))));
};

// Import core
const FormFields = (props) => {
    const { fields } = props;
    const [rowFields, setRowFields] = React.useState(null);
    React.useEffect(() => {
        const row = [];
        let val = 0;
        let fieldsTemp = [];
        fields.map((field, index) => {
            let fieldLayout = '';
            if (!field.layout) {
                fieldLayout = '1/2';
            }
            else {
                fieldLayout = field.layout;
            }
            const currentVal = getLayoutValue(fieldLayout);
            val = val + currentVal;
            fieldsTemp.push(field);
            if (index > 0) {
                const nextFieldVal = getLayoutValue(fields[index - 1].layout);
                if (val < 1 && val + nextFieldVal > 1) {
                    val = val + 1;
                }
            }
            if (val >= 1) {
                row.push(fieldsTemp);
                fieldsTemp = [];
                val = 0;
            }
            if (index === fields.length - 1) {
                row.push(fieldsTemp);
            }
        });
        setRowFields(row);
    }, []);
    return (React__default['default'].createElement("div", { className: "fg__fields fg__body" }, rowFields &&
        rowFields.map((fields, index) => {
            return (React__default['default'].createElement("div", { className: "row", key: index }, fields.map((field, index) => {
                const colName = getLayoutColClass(field.layout);
                return (React__default['default'].createElement("div", { className: colName, key: index },
                    React__default['default'].createElement("div", { className: "fg__fields-field" },
                        React__default['default'].createElement(React__default['default'].Fragment, null,
                            field.type == 'text' ? (React__default['default'].createElement(InputText, { name: field.name, id: field.id, placeholder: field.placeholder, validation: field.validation, autocomplete: field.autocomplete, label: field.label })) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                            field.type == 'email' ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement("label", null, field.label),
                                React__default['default'].createElement(InputEmail, { name: field.name, id: field.id, placeholder: field.placeholder, validation: field.validation, autocomplete: field.autocomplete }))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                            field.type == 'password' ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement("label", null, field.label),
                                React__default['default'].createElement(InputPassword, { name: field.name, id: field.id, placeholder: field.placeholder, validation: field.validation, autocomplete: field.autocomplete }))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                            field.type == 'select' ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement("label", null, field.label),
                                React__default['default'].createElement(InputSelect, { name: field.name, id: field.id, placeholder: field.placeholder, validation: field.validation, autocomplete: field.autocomplete, data: field.data, fetchDataFromUrl: field.fetchDataFromUrl }))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                            field.type == 'textarea' ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement("label", null, field.label),
                                React__default['default'].createElement(InputTextarea, { name: field.name, id: field.id, placeholder: field.placeholder, validation: field.validation, autocomplete: field.autocomplete }))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                            field.type == 'checkbox' ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                                React__default['default'].createElement("label", null, field.label),
                                React__default['default'].createElement(InputCheckbox, { name: field.name, id: field.id, placeholder: field.placeholder, validation: field.validation, autocomplete: field.autocomplete }))) : (React__default['default'].createElement(React__default['default'].Fragment, null))))));
            })));
        })));
};

const FormHeading = (props) => {
    const { title, subTitle } = props;
    const newLine = (string) => {
        if (!string) {
            return [React__default['default'].createElement(React__default['default'].Fragment, null)];
        }
        const ret = string
            .split('\n')
            .map((str, index) => React__default['default'].createElement("p", { key: index }, str));
        return ret;
    };
    if (title === '' && subTitle === '') {
        return React__default['default'].createElement(React__default['default'].Fragment, null);
    }
    if (title === '') {
        return (React__default['default'].createElement("div", { className: "row" },
            React__default['default'].createElement("h3", { className: "fg__subtitle" }, newLine(subTitle))));
    }
    if (subTitle === '') {
        return (React__default['default'].createElement("div", { className: "row" },
            React__default['default'].createElement("h3", { className: "fg__title" }, title)));
    }
    return (React__default['default'].createElement("header", null,
        React__default['default'].createElement("h3", { className: "fg__title" }, title),
        React__default['default'].createElement("p", { className: "fg__subtitle" }, subTitle)));
};

// Core
const FormButonSubmit = (props) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setLoading(true);
    }, [loading]);
    const rowClass = getLayoutColClass((props === null || props === void 0 ? void 0 : props.layout) ? props.layout : '1/4');
    const btnText = (props === null || props === void 0 ? void 0 : props.text) ? props.text : 'Invia';
    const btnClasses = 'fg__button-submit ' + (props === null || props === void 0 ? void 0 : props.class) ? props.class : ' ';
    const btnId = (props === null || props === void 0 ? void 0 : props.id) ? props.id : '';
    return (React__default['default'].createElement("div", { className: "row" },
        React__default['default'].createElement("div", { className: rowClass },
            React__default['default'].createElement("div", { className: 'fg__button-submit-wrapper ' + (loading ? 'with-loader ' : ' ') },
                !(props === null || props === void 0 ? void 0 : props.dom) ? (React__default['default'].createElement("input", { type: "submit", id: btnId, className: btnClasses, value: btnText })) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                (props === null || props === void 0 ? void 0 : props.dom) && props.dom == 'input' ? (React__default['default'].createElement("input", { type: "submit", id: btnId, className: btnClasses, value: btnText })) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                (props === null || props === void 0 ? void 0 : props.dom) && props.dom == 'button' ? (React__default['default'].createElement("button", { type: "submit", id: btnId, className: btnClasses }, btnText)) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                (props === null || props === void 0 ? void 0 : props.loading) == false ? (React__default['default'].createElement(React__default['default'].Fragment, null)) : (React__default['default'].createElement("div", { className: 'loader ' + (loading ? 'loader-active ' : ' ') },
                    React__default['default'].createElement("span", null)))))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/**\r\n * Generate bootstrap container\r\n *\r\n * version -  0.1.0\r\n * @todo - implementarlo come mixins (studiare bootsrtrap\r\n */\n/**\r\n * Generate section style for dev\r\n *\r\n * version -  0.1.0\r\n */\n/**\r\n * Generate background color helper classes\r\n *\r\n * version -  0.1.0\r\n */\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.repo-link {\n  color: #9017ff;\n  font-weight: 700;\n  font-size: 22px;\n  text-decoration: none !important; }\n\n.debug {\n  border: 1px solid red; }\n\n#navigation {\n  background: #eee; }\n  #navigation ul {\n    display: flex;\n    list-style-type: none;\n    margin-top: 0px !important;\n    margin-bottom: 0px !important;\n    padding-left: 0px; }\n    #navigation ul li {\n      padding: 10px;\n      margin: 0 30px 0 0; }\n      #navigation ul li a {\n        text-decoration: none;\n        color: #222;\n        text-transform: uppercase;\n        font-weight: 700;\n        opacity: 1; }\n        #navigation ul li a:hover {\n          opacity: 0.7; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px; } }\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px; } }\n\n@media (min-width: 1400px) {\n  .container {\n    max-width: 1400px; } }\n\n.section {\n  padding: 40px 0px; }\n  .section:nth-of-type(even) {\n    background: #eee; }\n\n.bg-white {\n  background: #fff;\n  background-color: #fff; }\n\n.bg-light {\n  background: #f9f9f9;\n  background-color: #f9f9f9; }\n\n/**\r\n * SASS styles for React Form Generator module\r\n *\r\n * @vesion 0.1.0\r\n * @author Stefano Gagliardi <stefano.gagliardi@sitisrl.it>\r\n */\n/**\r\n * Form Generator configuration style file.\r\n * Ovveride in your style var\r\n */\n#MagicFormGenerator header {\n  text-align: center; }\n\n#MagicFormGenerator .fg__body {\n  margin-top: 40px; }\n  #MagicFormGenerator .fg__body .fg__select-wrapper {\n    position: relative; }\n\n#MagicFormGenerator .row {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n  #MagicFormGenerator .row .fg__col-full,\n  #MagicFormGenerator .row .fg__col-half,\n  #MagicFormGenerator .row .fg__col-third,\n  #MagicFormGenerator .row .fg__col-fourth {\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px; }\n  #MagicFormGenerator .row .fg__col-full {\n    display: inline-block;\n    width: 100%;\n    padding-left: 15px;\n    padding-right: 15px; }\n  #MagicFormGenerator .row .fg__col-half {\n    display: inline-block;\n    width: 50%;\n    padding-left: 15px;\n    padding-right: 15px; }\n  #MagicFormGenerator .row .fg__col-third {\n    display: inline-block;\n    width: 33.3333333333%;\n    padding-left: 15px;\n    padding-right: 15px; }\n  #MagicFormGenerator .row .fg__col-fourth {\n    display: inline-block;\n    width: 25%;\n    padding-left: 15px;\n    padding-right: 15px; }\n\n#MagicFormGenerator .fg__fields .fg__fields-field {\n  flex-grow: 1;\n  padding: 10px 0px; }\n  #MagicFormGenerator .fg__fields .fg__fields-field label {\n    display: block;\n    font-weight: 600;\n    margin-bottom: 10px; }\n  #MagicFormGenerator .fg__fields .fg__fields-field .invalid-feedback > span {\n    display: block;\n    font-size: 12px;\n    margin-top: 5px;\n    color: crimson; }\n\n#MagicFormGenerator .fg__fields input[type=\"text\"],\n#MagicFormGenerator .fg__fields input[type=\"email\"],\n#MagicFormGenerator .fg__fields input[type=\"password\"],\n#MagicFormGenerator .fg__fields select {\n  position: relative;\n  margin-bottom: 0;\n  display: block;\n  width: 100%;\n  padding: 10px 0px 10px 10px;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  z-index: 2; }\n  #MagicFormGenerator .fg__fields input[type=\"text\"].is-invalid,\n  #MagicFormGenerator .fg__fields input[type=\"email\"].is-invalid,\n  #MagicFormGenerator .fg__fields input[type=\"password\"].is-invalid,\n  #MagicFormGenerator .fg__fields select.is-invalid {\n    border: 1px solid crimson; }\n    #MagicFormGenerator .fg__fields input[type=\"text\"].is-invalid:focus,\n    #MagicFormGenerator .fg__fields input[type=\"email\"].is-invalid:focus,\n    #MagicFormGenerator .fg__fields input[type=\"password\"].is-invalid:focus,\n    #MagicFormGenerator .fg__fields select.is-invalid:focus {\n      outline: none;\n      box-shadow: 0px 0px 6px rgba(237, 20, 61, 0.65); }\n  #MagicFormGenerator .fg__fields input[type=\"text\"]:focus,\n  #MagicFormGenerator .fg__fields input[type=\"email\"]:focus,\n  #MagicFormGenerator .fg__fields input[type=\"password\"]:focus,\n  #MagicFormGenerator .fg__fields select:focus {\n    outline: none; }\n\n#MagicFormGenerator .fg__fields textarea {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  overflow: auto;\n  resize: vertical;\n  z-index: 2; }\n  #MagicFormGenerator .fg__fields textarea.is-invalid {\n    border: 1px solid crimson; }\n    #MagicFormGenerator .fg__fields textarea.is-invalid:focus {\n      outline: none;\n      box-shadow: 0px 0px 6px rgba(237, 20, 61, 0.65); }\n  #MagicFormGenerator .fg__fields textarea:focus {\n    outline: none; }\n\n#MagicFormGenerator .fg__fields .fg__checkbox-wrapper {\n  position: relative;\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n  /* When the checkbox is checked, add a blue background */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Show the checkmark when checked */\n  /* Style the checkmark/indicator */ }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0; }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee; }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper:hover input ~ .checkmark {\n    background-color: #ccc; }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper input:checked ~ .checkmark {\n    background-color: #2563EB; }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none; }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper input:checked ~ .checkmark:after {\n    display: block; }\n  #MagicFormGenerator .fg__fields .fg__checkbox-wrapper .checkmark:after {\n    left: 11px;\n    top: 7px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg); }\n\n#MagicFormGenerator .fg__fields .fg__checkbox-text {\n  padding-left: 45px; }\n\n#MagicFormGenerator .fg__button-submit-wrapper {\n  display: flex;\n  position: relative;\n  width: fit-content; }\n  #MagicFormGenerator .fg__button-submit-wrapper .fg__button-submit {\n    border-radius: 2px;\n    background-color: #DC2626;\n    border-color: #DC2626;\n    color: #fff;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    -ms-transition: 0.3s;\n    -o-transition: 0.3s;\n    transition: 0.3s;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n    -moz-box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n    position: relative;\n    display: block;\n    margin: 0px 0px;\n    padding: 0.375rem 0.75rem;\n    font-size: 0.8rem;\n    line-height: 1.5;\n    font-weight: 300;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    text-decoration: none;\n    border: 1 px solid #666;\n    border-radius: 0px;\n    white-space: nowrap;\n    vertical-align: middle;\n    overflow: hidden;\n    outline: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: inherit !important;\n    opacity: 1;\n    cursor: pointer; }\n    #MagicFormGenerator .fg__button-submit-wrapper .fg__button-submit:hover {\n      background-color: #DC2626;\n      border-color: #DC2626;\n      opacity: 0.8;\n      color: #fff; }\n    #MagicFormGenerator .fg__button-submit-wrapper .fg__button-submit:focus, #MagicFormGenerator .fg__button-submit-wrapper .fg__button-submit:active, #MagicFormGenerator .fg__button-submit-wrapper .fg__button-submit:hover {\n      border: inherit !important; }\n  #MagicFormGenerator .fg__button-submit-wrapper.with-loader .fg__button-submit {\n    color: #DC2626; }\n  #MagicFormGenerator .fg__button-submit-wrapper .loader {\n    left: calc(50% - 22px / 2);\n    top: calc(50% - 22px   / 2);\n    position: absolute;\n    width: 22px;\n    height: 22px; }\n    #MagicFormGenerator .fg__button-submit-wrapper .loader span, #MagicFormGenerator .fg__button-submit-wrapper .loader span::after, #MagicFormGenerator .fg__button-submit-wrapper .loader span::before {\n      width: 22px;\n      height: 22px; }\n\n#MagicFormGenerator .fg__fields .loader {\n  position: absolute;\n  top: 5px;\n  left: calc(50% - 45px / 2);\n  z-index: 5;\n  display: none; }\n  #MagicFormGenerator .fg__fields .loader.loader-active {\n    display: block; }\n\n#MagicFormGenerator .fg__fields select:disabled {\n  background: rgba(0, 0, 0, 0.5); }\n\n/**\r\n * Input loader spinnig overlay\r\n */\n#MagicFormGenerator {\n  /* Loader 2 */ }\n  #MagicFormGenerator .loader {\n    display: block;\n    height: 32px;\n    width: 32px;\n    -webkit-animation: loader-1 3s linear infinite;\n    animation: loader-1 3s linear infinite; }\n\n@-webkit-keyframes loader-1 {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loader-1 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  #MagicFormGenerator .loader span {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px;\n    clip: rect(16px, 32px, 32px, 0);\n    -webkit-animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n\n@-webkit-keyframes loader-2 {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loader-2 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  #MagicFormGenerator .loader span::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px;\n    border: 3px solid transparent;\n    border-top: 3px solid white;\n    border-radius: 50%;\n    -webkit-animation: loader-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n\n@-webkit-keyframes loader-3 {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loader-3 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  #MagicFormGenerator .loader span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px;\n    border: 3px solid rgba(255, 255, 255, 0.7);\n    border-radius: 50%; }\n\n*,\n::after,\n::before {\n  box-sizing: border-box; }\n\n#MagicFormGenerator a {\n  color: #DC2626;\n  opacity: 1;\n  text-decoration: none; }\n  #MagicFormGenerator a:hover {\n    opacity: .8; }\n";
styleInject(css_248z);

const MagicFormGenerator = (props) => {
    const { form } = props;
    const { submit, buttonSubmit } = form;
    // const [loading, setLoading] = useState<boolean>(false);
    const methods = reactHookForm.useForm();
    // NB: Visto che la callback del form è sempre uguale posso memorizzarla
    const handleSubmit = React.useCallback(async (data) => {
        // If callbck exists edit data in callback
        const dataBeforeSubmit = submit.onSubmit ? submit.onSubmit(data) : data;
        // If submitbackend is enabled send ajax data
        if (submit.backend) {
            // const res =
            await onSubmitBackendCall(submit.endpoint, submit.method, dataBeforeSubmit);
        }
    }, []);
    return (React__default['default'].createElement(reactHookForm.FormProvider, Object.assign({}, methods),
        React__default['default'].createElement("div", { id: "MagicFormGenerator" },
            React__default['default'].createElement("form", { onSubmit: methods.handleSubmit(handleSubmit), noValidate: true },
                React__default['default'].createElement(FormHeading, { title: form.title, subTitle: form.subTitle }),
                React__default['default'].createElement(FormFields, { fields: form.fields }),
                React__default['default'].createElement(FormButonSubmit, Object.assign({}, buttonSubmit))))));
};

exports.MagicFormGenerator = MagicFormGenerator;
//# sourceMappingURL=index.cjs.development.js.map
