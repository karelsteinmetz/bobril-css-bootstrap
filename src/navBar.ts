import * as b from 'bobril';
import container from './container';
import toggleButton from './toggleButton';
import * as h from './bobrilHelpers';

export interface IRoute {
  label: string;
  value: string;
  onRoute: () => void;
}

export interface IData {
  header: string
  routes: IRoute[]
  activeRoute?: string
  userName: string,
  onLogout: () => boolean
}

interface ICtx extends b.IBobrilCtx {
  data: IData;
}

/*
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
*/

export default b.createComponent<IData>({
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = 'nav';
    me.className = 'navbar navbar-default navbar-fixed-top';
    me.children = container({
      isFluid: true,
      content: [
        styledDiv([
          toggleButton({}),
          styledDiv([ctx.data.header], 'navbar-brand')
        ], 'navbar-header'),
        styledDiv([
          styledUl(
            ctx.data.routes.map(r => h.styledLi({ content: r.label, onClick: r.onRoute, isActive: b.isActive(r.value) || r.value === ctx.data.activeRoute }))
            , 'nav navbar-nav'),
          styledUl([
            h.styledLi({ content: ctx.data.userName }),
            h.styledLi({ content: 'Odhlasit', onClick: ctx.data.onLogout })
          ], 'nav navbar-nav navbar-right')
        ], 'navbar-collapse collapse')
      ]
    });
  }
});

function styledDiv(content: b.IBobrilNode, className: string) {
  return {
    tag: 'div',
    className: className,
    children: content
  }
}

function styledUl(content: b.IBobrilNode, className: string) {
  return {
    tag: 'ul',
    className: className,
    children: content
  }
}
