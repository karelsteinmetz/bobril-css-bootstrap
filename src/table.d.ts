import * as b from 'bobril';
import * as cs from './contextualState';
export interface IHeader {
    label: b.IBobrilChildren;
    type?: any;
}
export interface IFooter {
    label: b.IBobrilChildren;
    type?: any;
    colSpan?: number;
}
export interface IRow {
    columns: b.IBobrilChildren[];
    onSelect?: () => void;
    contextualState?: cs.ContextualState;
}
export interface IData {
    isStriped?: boolean;
    enableHovering?: boolean;
    headers: IHeader[];
    rows: IRow[];
    footers?: IFooter[][];
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
