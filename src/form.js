var b = require('bobril');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'form';
        if (ctx.data.isInlined)
            me.className = 'form-inline';
        me.children = ctx.data.content;
    }
});
