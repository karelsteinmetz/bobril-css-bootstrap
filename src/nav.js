var b = require('bobril');
var h = require('./bobrilHelpers');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'ul';
        me.className = 'nav nav-tabs';
        me.children = ctx.data.items.map(i => h.styledLi({
            content: i.label,
            onClick: i.onClick,
            isActive: b.isActive(i.value) || ctx.data.activeRoute === i.value
        }));
    }
});
