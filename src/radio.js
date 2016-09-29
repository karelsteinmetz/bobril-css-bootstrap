var b = require('bobril');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'div';
        me.className = 'radio';
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = {
            tag: 'label',
            children: [
                createInput(ctx.data),
                ctx.data.label
            ]
        };
    }
});
function createInput(data) {
    return b.style({
        tag: 'input', attrs: {
            type: 'radio', name: data.groupName, value: data.value,
            disabled: data.isDisabled ? 'disabled' : null
        },
        data: data,
        component: {
            onChange(inputCtx, v) {
                inputCtx.data.onChange(v);
            }
        }
    });
}
