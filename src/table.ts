import * as b from 'bobril';

export interface IHeader {
    label: b.IBobrilChildren;
    type?: any;
}

export interface IFooter {
    label: b.IBobrilChildren;
    type?: any;
    colSpan?: number;
}

export interface IRow {
    onSelect?: () => void
    columns: b.IBobrilChildren[]
}

export interface IData {
    isStriped?: boolean;
    isHover?: boolean
    headers: IHeader[];
    rows: IRow[];
    footers?: IFooter[][];
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'table';
        me.className = 'table';
        (ctx.data.isHover === undefined || ctx.data.isHover) && (me.className += ' table-hover')
        ctx.data.isStriped && (me.className += ' table-striped');
        me.children = [
            {
                tag: 'thead',
                children: { tag: 'tr', children: ctx.data.headers.map(h => { return { tag: 'th', children: h.label } }) }
            },
            {
                tag: 'tbody',
                children: ctx.data.rows.map(r => {
                    return {
                        tag: 'tr',
                        children: r.columns
                            .map(cc => {
                                return {
                                    tag: 'td',
                                    children: cc,
                                };
                            }),
                        component: r.onSelect && {
                            onDoubleClick: () => { r.onSelect(); return true; }
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
                            }
                        })
                    }
                })
            },
        ];
    }
})
