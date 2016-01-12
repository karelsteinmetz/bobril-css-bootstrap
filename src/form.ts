import * as b from 'bobril';

export interface IData {
    content: b.IBobrilChildren;
    isInlined?: boolean
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'form';
        if (ctx.data.isInlined)
            me.className = 'form-inline';
        me.children = ctx.data.content;
    }
});
