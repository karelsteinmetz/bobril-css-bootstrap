import * as b from 'bobril';

export interface IColumn {
  content: b.IBobrilNode
  md?: number
}

export interface IData {
  leftContent?: b.IBobrilNode;
  leftMd?: number;
  rightContent?: b.IBobrilNode;
  rightMd?: number;

  columns?: IColumn[]
}

interface ICtx extends b.IBobrilCtx {
  data: IData;
}

export default b.createComponent<IData>({
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.className = 'row';
    if (ctx.data.columns)
      me.children = ctx.data.columns.map(c => { return { 
        tag: 'div',
        className: `col-xs-${c.md || (12/ctx.data.columns.length)} col-md-${c.md || (12/ctx.data.columns.length)}`,
        children: c.content 
      }});
    else
      me.children = [
        { tag: 'div', className: 'col-xs-12 col-md-' + ctx.data.leftMd || 12, children: ctx.data.leftContent },
        ctx.data.rightContent && { tag: 'div', className: 'col-xs-6 col-md-' + ctx.data.rightMd, children: ctx.data.rightContent }
      ]
  }
});
