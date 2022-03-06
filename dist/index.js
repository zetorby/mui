import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function cx(...args) {
    let classes = [];
    args.forEach((item) => {
        if (typeof item === 'string' && item) {
            classes.push(item);
        }
        if (typeof item === 'object' && item) {
            if (!Array.isArray(item)) {
                Object.keys(item).forEach((key) => {
                    if (item[key]) {
                        classes.push(key);
                    }
                });
            }
            else if (Array.isArray(item) && item.length) {
                classes.push(cx.apply(null, item));
            }
        }
    });
    classes = classes.filter((item, index) => classes.indexOf(item) === index).join(' ');
    return classes;
}

var ButtonVariantsEnum;
(function (ButtonVariantsEnum) {
    ButtonVariantsEnum["PRIMARY"] = "primary";
    ButtonVariantsEnum["SECOND"] = "second";
    ButtonVariantsEnum["TEXT"] = "text";
})(ButtonVariantsEnum || (ButtonVariantsEnum = {}));

function Button(_a) {
    var { children, variant, fullWidth, className } = _a, props = __rest(_a, ["children", "variant", "fullWidth", "className"]);
    const classNames = cx('mui-button', className, {
        [`mui-button--full`]: fullWidth,
        [`mui-button--${variant}`]: variant,
    });
    return (React.createElement("button", Object.assign({ className: classNames, type: "button" }, props), children));
}
Button.defaultProps = {
    variant: ButtonVariantsEnum.PRIMARY,
};

function TextField({ className, id, name, label, value, onChange, placeholder, disabled, type, error }) {
    const classNames = cx('mui-text-field', className, {
        [`text-field--${name}`]: name,
        [`text-field--${disabled}`]: disabled,
        [`text-field--error`]: error,
    });
    return (React.createElement("div", { className: classNames },
        label ? React.createElement("span", { className: "mui-text-field__label" }, label) : null,
        React.createElement("input", { id: id, name: name, className: "mui-text-field__input", value: value, onChange: onChange, placeholder: placeholder, disabled: disabled, type: type })));
}

export { Button, TextField };
