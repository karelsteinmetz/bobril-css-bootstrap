import * as b from 'bobril';

export interface IData {
    content: b.IBobrilNode;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'form';
        me.className = 'form-inline';
        me.children = ctx.data.content;
    }
});
