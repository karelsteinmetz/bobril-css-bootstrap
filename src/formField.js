var b = require('bobril');
var fg = require('./formGroup');
var i = require('./input');
var s = require('./select');
function input(label, value, onChange, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', children: label },
            i.default({ value: value, onChange: onChange, placeHolder: label }),
        ],
        help: help
    });
}
exports.input = input;
function date(label, value, onChange, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', children: label },
            i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.Date }),
        ],
        help: help
    });
}
exports.date = date;
function time(label, value, onChange, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', children: label },
            i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.Time }),
        ],
        help: help
    });
}
exports.time = time;
function dateTime(label, value, onChange, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', children: label },
            i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.DateTime }),
        ],
        help: help
    });
}
exports.dateTime = dateTime;
function numeric(label, value, onChange, validatiors = [], help = undefined) {
    validatiors = [{
            validate: (value) => {
                let numeric = parseFloat(value);
                return numeric || numeric === 0 ? true : false;
            }
        }, ...validatiors];
    return b.createComponent({
        render(ctx, me) {
            me.children = fg.default({
                content: [
                    { tag: 'label', children: ctx.data.label },
                    i.default({
                        value: ctx.data.value,
                        onChange: (value) => {
                            if (isValueInvalid(ctx.data.validatiors, value))
                                b.invalidate(ctx);
                            else
                                ctx.data.onChange(parseFloat(value));
                        },
                        placeHolder: ctx.data.label
                    }),
                ],
                help: help,
                validationState: isValueInvalid(ctx.data.validatiors, ctx.data.value.toString()) && fg.ValidationState.Error
            });
        }
    })({ label: label, value: value, onChange: onChange, validatiors: validatiors });
}
exports.numeric = numeric;
function isValueInvalid(validatiors, value) {
    return validatiors.filter(v => !v.validate(value)).length > 0;
}
function password(label, value, onChange, error, shouldHaveFocus = false, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', children: label },
            i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.Password, shouldHaveFocus: shouldHaveFocus }),
        ],
        help: help,
        validationState: error && fg.ValidationState.Error
    });
}
exports.password = password;
function select(label, items, selectedItemKey, onChange, isDisabled = false, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', children: label },
            s.default({ items: items, selectedItem: selectedItemKey, isDisabled: isDisabled, onChange: onChange })
        ],
        help: help
    });
}
exports.select = select;
function readOnly(label, value, help = undefined) {
    return fg.default({
        content: [
            { tag: 'label', className: 'control-label', children: label },
            { tag: 'div', children: { tag: 'p', className: 'form-control-static', children: value } }
        ],
        help: help
    });
}
exports.readOnly = readOnly;
