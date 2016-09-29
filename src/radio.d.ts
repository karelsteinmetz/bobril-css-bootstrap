import * as b from 'bobril';
export interface IData {
    label: string;
    value: boolean;
    groupName: string;
    isDisabled?: boolean;
    onChange: (v: boolean) => void;
}
declare var _default: (data?: {}, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
