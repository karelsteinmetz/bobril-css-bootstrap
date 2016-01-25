import * as b from 'bobril';
import container from './container';
import toggleButton from './toggleButton';
import * as h from './bobrilHelpers';

export interface IItem {
    label: string;
    value: string;
    onSelect: () => void;
}

export interface IData {
    header: string
    leftItems?: IItem[]
    rightItems?: IItem[]
    activeItem?: string
    isFixedOnTop?: boolean
    isFluid?: boolean
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'nav';
        me.className = 'navbar navbar-default';
        if (ctx.data.isFixedOnTop)
            me.className += ' navbar-fixed-top';
        me.children = container({
            isFluid: !!ctx.data.isFluid,
            content: [
                h.styledDiv([
                    toggleButton({}),
                    h.styledDiv(ctx.data.header, 'navbar-brand')
                ], 'navbar-header'),
                h.styledDiv([
                    ctx.data.leftItems && h.styledUl(
                        ctx.data.leftItems.map(r => h.styledLi({ content: r.label, onClick: r.onSelect, isActive: b.isActive(r.value) || r.value === ctx.data.activeItem }))
                        , 'nav navbar-nav'),
                    ctx.data.rightItems && h.styledUl([
                        ctx.data.rightItems.map(r => h.styledLi({ content: r.label, onClick: r.onSelect, isActive: b.isActive(r.value) || r.value === ctx.data.activeItem }))
                    ], 'nav navbar-nav navbar-right')
                ], 'navbar-collapse collapse')
            ]
        });
    }
});