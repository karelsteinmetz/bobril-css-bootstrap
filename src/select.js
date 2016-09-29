var b = require('bobril');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'select';
        me.className = 'form-control';
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = ctx.data.items.map(i => { return { tag: 'option', attrs: { value: i.key }, children: i.value }; });
    },
    onChange(ctx, v) {
        ctx.data.onChange(v);
    }
});
