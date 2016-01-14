import * as b from 'bobril';
import * as cs from './contextualState';

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
    columns: b.IBobrilChildren[]
    onSelect?: () => void
    contextualState?: cs.ContextualState
}

export interface IData {
    isStriped?: boolean
    enableHovering?: boolean
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
        (ctx.data.enableHovering === undefined || ctx.data.enableHovering) && (me.className += ' table-hover')
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
                        className: r.contextualState && cs.handle(r.contextualState),
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
