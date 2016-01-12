import * as b from 'bobril';

export interface IInputData {
    value: boolean;
    onChange: (boolean) => void;
    isDisabled?: boolean;
}

export interface IInputCtx extends b.IBobrilCtx {
    data: IInputData;
}

export let createInput = b.createComponent<IInputData>({
    render(ctx: IInputCtx, me: b.IBobrilNode) {
        me.tag = 'input';
        me.attrs = {
            type: 'checkbox',
            value: ctx.data.value,
            disabled: ctx.data.isDisabled
        }
    },
    onChange(ctx: IInputCtx, value: boolean) {
        ctx.data.onChange(value);
    }
})

export interface IData extends IInputData {
    label: string
    isDisabled?: boolean
}

export interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.className = 'checkbox';
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = {
            tag: 'label',
            children: [
                createInput(ctx.data)
                , ctx.data.label
            ]
        };
    }
})
