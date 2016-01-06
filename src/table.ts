import * as b from 'bobril';

export interface IHeader {
  label: string;
  type?: any;
}

export interface IDataCell {
  value: string;
}

export interface IFooter {
  label: string;
  type?: any;
  colSpan?: number;
}

export interface IData {
  isStriped?: boolean;
  isHover?: boolean
  headers: IHeader[];
  rows: Object[][];
  footers?: IFooter[][];
}

interface ICtx extends b.IBobrilCtx {
  data: IData;
}

export default b.createComponent<IData>({
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = 'table';
    me.className = 'table';
    (ctx.data.isHover === undefined || ctx.data.isHover) && (me.className += ' table-hover')
    ctx.data.isStriped && (me.className += ' table-striped');
    me.children = [
      { tag: 'thead', children: { tag: 'tr', children: ctx.data.headers.map(h => { return { tag: 'th', children: h.label } }) } },
      {
        tag: 'tbody',
         children: ctx.data.rows.map(c => { return { tag: 'tr', children: c.map(cc => { return { tag: 'td', children: cc } }) } }) },
      ctx.data.footers && { tag: 'tfoot', children: ctx.data.footers.map(f => { return { tag: 'tr', children: f.map(f => { return { tag: 'td', attrs: { colspan: f.colSpan }, children: f.label } }) } }) },
    ];
  }
})
