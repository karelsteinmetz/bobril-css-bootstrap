import * as b from 'bobril';
import * as cs from './contextualState';
import * as pull from './pull';
export interface IData {
    label: string;
    onClick: () => boolean;
    isDisabled?: boolean;
    contextualState?: cs.ContextualState;
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
export interface IGroupData {
    pull?: pull.Pull;
    buttons: b.IBobrilNode[];
}
export declare let group: (data?: IGroupData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
