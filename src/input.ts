import * as b from 'bobril';

export enum Type {
    Text,
    Password,
    Date,
    Time,
    DateTime
}

export interface IData<TValue> {
    value: TValue
    type?: Type
    onChange: (v: TValue) => void
    placeHolder?: string
    shouldHaveFocus?: boolean
}

interface ICtx<TValue> extends b.IBobrilCtx {
    data: IData<TValue>
    hasFocus: boolean
}

export default b.createComponent<IData<any>>({
    init(ctx: ICtx<any>, me: b.IBobrilCacheNode) {
        ctx.hasFocus = ctx.data.shouldHaveFocus || false;
    },
    postInitDom(ctx: ICtx<any>, me: b.IBobrilCacheNode, element: HTMLElement) {
        if (ctx.data.shouldHaveFocus) {
            ctx.hasFocus = true;
            b.focus(ctx.me);
            b.invalidate(ctx);
        }
    },
    render(ctx: ICtx<any>, me: b.IBobrilNode) {
        me.tag = 'input';
        me.className = 'form-control';
        me.attrs = {
            type: recognizeType(ctx.data.type),
            value: ctx.data.value,
            placeholder: ctx.data.placeHolder && ctx.data.placeHolder
        }
    },
    onChange(ctx: ICtx<any>, v: string) {
        ctx.data.onChange(v);
    },
    onClick(ctx: ICtx<any>, event: b.IBobrilMouseEvent) {
        if (!ctx.hasFocus) {
            ctx.hasFocus = true;
            b.invalidate(ctx);
        }
        return true;
    },
});


function recognizeType(type: Type): string {
    switch (type) {
        case Type.Password:
            return 'password';
        case Type.Date:
            return 'date';
        case Type.Date:
            return 'time';
        case Type.Text:
        default:
            return undefined;
    }
}