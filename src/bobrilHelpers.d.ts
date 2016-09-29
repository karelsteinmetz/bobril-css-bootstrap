import * as b from 'bobril';
export declare function styledDiv(children: b.IBobrilChildren, className: string): b.IBobrilNode;
export declare function styledUl(content: b.IBobrilChildren, className: string): b.IBobrilChildren;
export interface ILiData {
    content: b.IBobrilChildren;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
}
export declare const styledLi: (data?: ILiData, children?: boolean | string | b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren | b.IBobrilChildArray) => b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
