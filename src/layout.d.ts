import * as b from 'bobril';
export interface IColumn {
    content: b.IBobrilChildren;
    md?: number;
}
export interface IData {
    leftContent?: b.IBobrilChildren;
    leftMd?: number;
    rightContent?: b.IBobrilChildren;
    rightMd?: number;
    columns?: IColumn[];
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
