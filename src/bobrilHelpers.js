var b = require('bobril');
function styledDiv(children, className) {
    return b.style({ tag: 'div', children, className }, {});
}
exports.styledDiv = styledDiv;
function styledUl(content, className) {
    return {
        tag: 'ul',
        className: className,
        children: content
    };
}
exports.styledUl = styledUl;
exports.styledLi = b.createComponent({
    render(ctx, me) {
        me.tag = 'li';
        me.className = ctx.data.isActive && 'active';
        me.children = {
            tag: 'a',
            children: ctx.data.content,
        };
    },
    onClick(ctx, event) {
        if (ctx.data.isDisabled || !ctx.data.onClick)
            return false;
        ctx.data.onClick();
        return true;
    }
});
