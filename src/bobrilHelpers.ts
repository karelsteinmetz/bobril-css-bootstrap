import * as b from 'bobril';

export function styledDiv(children: b.IBobrilChildren, className: string): b.IBobrilNode {
    return b.style({ tag: 'div', children, className }, {});
}

export function styledUl(content: b.IBobrilChildren, className: string): b.IBobrilChildren {
    return {
        tag: 'ul',
        className: className,
        children: content
    };
}

export interface ILiData {
  content: b.IBobrilChildren
  isActive?: boolean
  isDisabled?: boolean
  onClick?: () => void
}

interface ILiCtx extends b.IBobrilCtx {
  data: ILiData
}

export const styledLi = b.createComponent<ILiData>({
  render(ctx: ILiCtx, me: b.IBobrilNode) {
    me.tag = 'li';
    me.className = ctx.data.isActive && 'active';
    me.children = {
      tag: 'a',
      children: ctx.data.content,
    };
  },
  onClick(ctx: ILiCtx, event: b.IBobrilMouseEvent): boolean {
    if (ctx.data.isDisabled || !ctx.data.onClick)
      return false;
    ctx.data.onClick()
    return true;
  }
});