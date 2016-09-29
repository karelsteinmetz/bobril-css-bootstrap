import * as b from 'bobril';
export interface IItem {
    label: string;
    value: string;
    onSelect: () => void;
}
export interface IData {
    header: b.IBobrilChildren;
    leftItems?: IItem[];
    centerItems?: b.IBobrilChildren[];
    rightItems?: IItem[];
    activeItem?: string;
    isFixedOnTop?: boolean;
    isFluid?: boolean;
}
declare var _default: (data?: IData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export default _default;
