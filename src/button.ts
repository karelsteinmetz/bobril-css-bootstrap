import * as b from 'bobril';
import * as cs from './contextualState';
import * as pull from './pull';

export interface IData {
    label: string;
    onClick: () => boolean;
    isDisabled?: boolean;
    contextualState?: cs.ContextualState;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'button';
        me.className = 'btn';
        me.className += cs.handleWithPrefix(ctx.data.contextualState, 'btn');
        ctx.data.isDisabled && (me.className += ' disabled');
        me.children = ctx.data.label;
    },
    onClick(ctx: ICtx, event: b.IBobrilMouseEvent): boolean {
        return !ctx.data.isDisabled && ctx.data.onClick();
    }
});

export interface IGroupData {
    pull?: pull.Pull
    buttons: b.IBobrilNode[]
}

interface IGroupCtx extends b.IBobrilCtx {
    data: IGroupData
}

export let group = b.createComponent<IGroupData>({
    render(ctx: IGroupCtx, me: b.IBobrilNode) {
        me.className = 'btn-group';
        if (ctx.data.pull === pull.Pull.Right)
            me.className += ' pull-right'
        me.children = ctx.data.buttons;
    }
})