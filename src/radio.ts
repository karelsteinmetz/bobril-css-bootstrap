import * as b from 'bobril';


export interface IData {
    label: string
    value: boolean
    groupName: string
    isDisabled?: boolean
    onChange: (v: boolean) => void
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.className = 'radio';
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = {
            tag: 'label',
            children: [
                createInput(ctx.data),
                ctx.data.label
            ]
        };
    }
})

function createInput(data: IData): b.IBobrilNode {
    return b.style({
        tag: 'input', attrs: {
            type: 'radio', name: data.groupName, value: data.value,
            disabled: data.isDisabled ? 'disabled' : null
        },
        data: data,
        component: {
            onChange(inputCtx: ICtx, v: boolean) {
                inputCtx.data.onChange(v);
            }
        }
    });
}