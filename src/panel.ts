import * as b from 'bobril';
import * as cs from './contextualState';

export interface IData {
  header?: b.IBobrilNode
  content: b.IBobrilNode
  footer?: b.IBobrilNode
  contextualState?: cs.ContextualState
}

interface ICtx extends b.IBobrilCtx {
  data: IData
}

export default b.createComponent<IData>({
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.className = 'panel' + cs.handle(ctx.data.contextualState, 'panel');
    me.children = [
      ctx.data.header && { tag: 'div', className: 'panel-heading', children: ctx.data.header },
      { tag: 'div', className: 'panel-body', children: ctx.data.content },
      ctx.data.footer && { tag: 'div', className: 'panel-footer', children: ctx.data.footer }
    ]
  }
});
