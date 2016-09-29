import * as b from 'bobril';
export interface IInputData {
    value: boolean;
    onChange: (boolean) => void;
    isDisabled?: boolean;
}
export interface IInputCtx extends b.IBobrilCtx {
    data: IInputData;
}
export declare let createInput: (data?: {}, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export interface IData extends IInputData {
    label: string;
    isDisabled?: boolean;
}
export interface ICtx extends b.IBobrilCtx {
    data: IData;
}
declare var _default: (data?: {}, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
