import * as b from 'bobril';
export declare enum ValidationState {
    Warning = 0,
    Error = 1,
    Success = 2,
}
export interface IData {
    content: b.IBobrilChildren;
    help?: string;
    validationState?: ValidationState;
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
