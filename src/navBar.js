var b = require('bobril');
var container_1 = require('./container');
var toggleButton_1 = require('./toggleButton');
var h = require('./bobrilHelpers');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'nav';
        me.className = 'navbar navbar-default';
        if (ctx.data.isFixedOnTop)
            me.className += ' navbar-fixed-top';
        me.children = container_1.default({
            isFluid: !!ctx.data.isFluid,
            content: [
                h.styledDiv([
                    toggleButton_1.default({}),
                    h.styledDiv(ctx.data.header, 'navbar-brand')
                ], 'navbar-header'),
                h.styledDiv([
                    ctx.data.leftItems && h.styledUl(ctx.data.leftItems.map(r => h.styledLi({ content: r.label, onClick: r.onSelect, isActive: b.isActive(r.value) || r.value === ctx.data.activeItem })), 'nav navbar-nav'),
                    ctx.data.rightItems && h.styledUl([
                        ctx.data.rightItems.map(r => h.styledLi({ content: r.label, onClick: r.onSelect, isActive: b.isActive(r.value) || r.value === ctx.data.activeItem }))
                    ], 'nav navbar-nav navbar-right')
                ], 'navbar-collapse collapse')
            ]
        });
    }
});
