var b = require('bobril');
(function (Type) {
    Type[Type["Text"] = 0] = "Text";
    Type[Type["Password"] = 1] = "Password";
    Type[Type["Date"] = 2] = "Date";
    Type[Type["Time"] = 3] = "Time";
    Type[Type["DateTime"] = 4] = "DateTime";
})(exports.Type || (exports.Type = {}));
var Type = exports.Type;
exports.default = b.createComponent({
    init(ctx, me) {
        ctx.hasFocus = ctx.data.shouldHaveFocus || false;
    },
    postInitDom(ctx, me, element) {
        if (ctx.data.shouldHaveFocus) {
            ctx.hasFocus = true;
            b.focus(ctx.me);
            b.invalidate(ctx);
        }
    },
    render(ctx, me) {
        me.tag = 'input';
        me.className = 'form-control';
        me.attrs = {
            type: recognizeType(ctx.data.type),
            value: ctx.data.value,
            placeholder: ctx.data.placeHolder && ctx.data.placeHolder
        };
    },
    onChange(ctx, v) {
        ctx.data.onChange(v);
    },
    onClick(ctx, event) {
        if (!ctx.hasFocus) {
            ctx.hasFocus = true;
            b.invalidate(ctx);
        }
        return true;
    },
});
function recognizeType(type) {
    switch (type) {
        case Type.Password:
            return 'password';
        case Type.Date:
            return 'date';
        case Type.Date:
            return 'time';
        case Type.Text:
        default:
            return undefined;
    }
}
