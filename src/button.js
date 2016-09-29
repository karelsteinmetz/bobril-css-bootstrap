var b = require('bobril');
var cs = require('./contextualState');
var pull = require('./pull');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'button';
        me.className = 'btn';
        me.className += cs.handleWithPrefix(ctx.data.contextualState, 'btn');
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = ctx.data.label;
    },
    onClick(ctx, event) {
        return !ctx.data.isDisabled && ctx.data.onClick();
    }
});
exports.group = b.createComponent({
    render(ctx, me) {
        me.className = 'btn-group';
        if (ctx.data.pull === pull.Pull.Right)
            me.className += ' pull-right';
        me.children = ctx.data.buttons;
    }
});
