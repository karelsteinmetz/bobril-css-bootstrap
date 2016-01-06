import * as b from 'bobril';

export interface IKeyValue<TKey, TValue> {
  key: TKey
  value: TValue    
}

export type onChange = (key: string) => void

export interface IData {
    items: IKeyValue<string, string>[]
    selectedItem: string
    isDisabled?: boolean
    onChange: onChange
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'select';
        me.className = 'form-control';
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = ctx.data.items.map(i => { return { tag: 'option', attrs: { value: i.key }, children: i.value } });
    },
    onChange(ctx: ICtx, v: string) {
        ctx.data.onChange(v);
    }
})
