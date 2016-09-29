var b = require('bobril');
var h = require('./bobrilHelpers');
(function (ValidationState) {
    ValidationState[ValidationState["Warning"] = 0] = "Warning";
    ValidationState[ValidationState["Error"] = 1] = "Error";
    ValidationState[ValidationState["Success"] = 2] = "Success";
})(exports.ValidationState || (exports.ValidationState = {}));
var ValidationState = exports.ValidationState;
exports.default = b.createComponent({
    render(ctx, me) {
        me.className = 'form-group';
        if (ctx.data.validationState == ValidationState.Error)
            me.className += ' has-error';
        if (ctx.data.validationState == ValidationState.Success)
            me.className += ' has-success';
        if (ctx.data.validationState == ValidationState.Warning)
            me.className += ' has-warning';
        me.children = [
            ctx.data.content,
            ctx.data.help && h.styledDiv(ctx.data.help, 'help-block')
        ];
    }
});
