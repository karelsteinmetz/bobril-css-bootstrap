import * as b from 'bobril';
export interface IKeyValue<TKey, TValue> {
    key: TKey;
    value: TValue;
}
export declare type onChange = (key: string) => void;
export interface IData {
    items: IKeyValue<string, string>[];
    selectedItem: string;
    isDisabled?: boolean;
    onChange: onChange;
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
