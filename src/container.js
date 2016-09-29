var b = require('bobril');
exports.default = b.createComponent({
    render(ctx, me) {
        me.className = 'container';
        if (ctx.data.isFluid)
            me.className += '-fluid';
        me.children = ctx.data.content;
    }
});
