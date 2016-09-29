var b = require('bobril');
var cs = require('./contextualState');
exports.default = b.createComponent({
    render(ctx, me) {
        me.tag = 'table';
        me.className = 'table';
        (ctx.data.enableHovering === undefined || ctx.data.enableHovering) && (me.className += ' table-hover');
        ctx.data.isStriped && (me.className += ' table-striped');
        me.children = [
            {
                tag: 'thead',
                children: { tag: 'tr', children: ctx.data.headers.map(h => { return { tag: 'th', children: h.label }; }) }
            },
            {
                tag: 'tbody',
                children: ctx.data.rows.map(r => {
                    return {
                        tag: 'tr',
                        className: r.contextualState && cs.handle(r.contextualState),
                        children: r.columns
                            .map(cc => {
                            return {
                                tag: 'td',
                                children: cc,
                            };
                        }),
                        component: r.onSelect && {
                            onClick: () => { r.onSelect(); return true; }
                        }
                    };
                })
            },
            ctx.data.footers &&
                {
                    tag: 'tfoot',
                    children: ctx.data.footers.map(f => {
                        return {
                            tag: 'tr',
                            children: f.map(f => {
                                return {
                                    tag: 'td',
                                    attrs: { colspan: f.colSpan },
                                    children: f.label
                                };
                            })
                        };
                    })
                },
        ];
    }
});
