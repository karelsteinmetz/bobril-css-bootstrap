var b = require('bobril');
exports.default = b.createComponent({
    render(ctx, me) {
        me.className = 'row';
        if (ctx.data.columns)
            me.children = ctx.data.columns.map(c => {
                return {
                    tag: 'div',
                    className: `col-xs-${c.md || (12 / ctx.data.columns.length)} col-md-${c.md || (12 / ctx.data.columns.length)}`,
                    children: c.content
                };
            });
        else
            me.children = [
                { tag: 'div', className: 'col-xs-12 col-md-' + (ctx.data.leftMd || 12), children: ctx.data.leftContent },
                ctx.data.rightContent && { tag: 'div', className: 'col-xs-6 col-md-' + ctx.data.rightMd, children: ctx.data.rightContent }
            ];
    }
});
