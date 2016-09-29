import * as b from 'bobril';
export declare enum Type {
    Text = 0,
    Password = 1,
    Date = 2,
    Time = 3,
    DateTime = 4,
}
export interface IData<TValue> {
    value: TValue;
    type?: Type;
    onChange: (v: TValue) => void;
    placeHolder?: string;
    shouldHaveFocus?: boolean;
}
declare var _default: (data?: IData<any>, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
