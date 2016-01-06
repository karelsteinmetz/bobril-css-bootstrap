import * as b from 'bobril';

interface ICtx extends b.IBobrilCtx {
}

export default b.createComponent({
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = 'button';
    me.className = 'navbar-toggle collapsed';
    me.attrs = {
      dataToggle: 'collapse',
      dataTarget: '#navbar',
      ariaExpanded: 'false',
      ariaControls: 'navbar'
    }
    me.children = [
      { tag: 'span', className: 'sr-only', children: 'Toggle navigation' },
      { tag: 'span', className: 'icon-bar' },
      { tag: 'span', className: 'icon-bar' },
      { tag: 'span', className: 'icon-bar' }
    ]
  }
});
