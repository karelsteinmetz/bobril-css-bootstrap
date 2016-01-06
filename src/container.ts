import * as b from 'bobril';

export interface IData {
    content: b.IBobrilNode
    isFluid?: boolean
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.className = 'container'
        if (ctx.data.isFluid)
            me.className += '-fluid';
        me.children = ctx.data.content;
    }
})
