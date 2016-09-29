var b = require('bobril');
var cs = require('./contextualState');
exports.default = b.createComponent({
    render(ctx, me) {
        me.className = 'panel' + cs.handleWithPrefix(ctx.data.contextualState, 'panel');
        me.children = [
            ctx.data.header && { tag: 'div', className: 'panel-heading', children: ctx.data.header },
            { tag: 'div', className: 'panel-body', children: ctx.data.content },
            ctx.data.footer && { tag: 'div', className: 'panel-footer', children: ctx.data.footer }
        ];
    }
});
