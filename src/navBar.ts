import * as b from 'bobril';
import container from './container';
import toggleButton from './toggleButton';
import * as h from './bobrilHelpers';

export interface IRoute {
    label: string;
    value: string;
    onRoute: () => void;
}

export interface IData {
    header: string
    routes: IRoute[]
    activeRoute?: string
    userName: string,
    onLogout: () => boolean
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'nav';
        me.className = 'navbar navbar-default navbar-fixed-top';
        me.children = container({
            isFluid: true,
            content: [
                h.styledDiv([
                    toggleButton({}),
                    h.styledDiv(ctx.data.header, 'navbar-brand')
                ], 'navbar-header'),
                h.styledDiv([
                    h.styledUl(
                        ctx.data.routes.map(r => h.styledLi({ content: r.label, onClick: r.onRoute, isActive: b.isActive(r.value) || r.value === ctx.data.activeRoute }))
                        , 'nav navbar-nav'),
                    h.styledUl([
                        h.styledLi({ content: ctx.data.userName }),
                        h.styledLi({ content: 'Odhlasit', onClick: ctx.data.onLogout })
                    ], 'nav navbar-nav navbar-right')
                ], 'navbar-collapse collapse')
            ]
        });
    }
});