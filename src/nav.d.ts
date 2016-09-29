import * as b from 'bobril';
export interface IRoute {
    label: string;
    value: string;
    onClick: () => void;
}
export interface IData {
    items: IRoute[];
    activeRoute?: string;
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
