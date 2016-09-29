var b = require('bobril');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = b.createComponent({
    render: function (ctx, me) {
        me.tag = 'form';
        me.className = 'form-inline';
        me.children = ctx.data.content;
    }
});
