var b = require('bobril');
exports.createInput = b.createComponent({
    render(ctx, me) {
        me.tag = 'input';
        me.attrs = {
            type: 'checkbox',
            value: ctx.data.value,
            disabled: ctx.data.isDisabled
        };
    },
    onChange(ctx, value) {
        ctx.data.onChange(value);
    }
});
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'div';
        me.className = 'checkbox';
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = {
            tag: 'label',
            children: [
                exports.createInput(ctx.data),
                ctx.data.label
            ]
        };
    }
});
