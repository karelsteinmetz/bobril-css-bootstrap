var b = require('bobril');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'button';
        me.className = 'navbar-toggle collapsed';
        me.attrs = {
            dataToggle: 'collapse',
            dataTarget: '#navbar',
            ariaExpanded: 'false',
            ariaControls: 'navbar'
        };
        me.children = [
            { tag: 'span', className: 'sr-only', children: 'Toggle navigation' },
            { tag: 'span', className: 'icon-bar' },
            { tag: 'span', className: 'icon-bar' },
            { tag: 'span', className: 'icon-bar' }
        ];
    }
});
