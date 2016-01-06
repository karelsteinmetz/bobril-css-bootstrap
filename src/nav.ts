import * as b from 'bobril';
import * as h from './bobrilHelpers';

export interface IRoute {
    label: string;
    value: string;
    onClick: () => void;
}

export interface IData {
    items: IRoute[]
    activeRoute?: string
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'ul';
        me.className = 'nav nav-tabs';
        me.children = ctx.data.items.map(i =>
            h.styledLi({
                content: i.label,
                onClick: i.onClick,
                isActive: b.isActive(i.value) || ctx.data.activeRoute === i.value
            })
        )
    }
});