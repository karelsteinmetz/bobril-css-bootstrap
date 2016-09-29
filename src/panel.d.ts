import * as b from 'bobril';
import * as cs from './contextualState';
export interface IData {
    header?: b.IBobrilChildren;
    content: b.IBobrilChildren;
    footer?: b.IBobrilChildren;
    contextualState?: cs.ContextualState;
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
