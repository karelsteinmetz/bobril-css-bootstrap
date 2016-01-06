import * as b from 'bobril';
import * as h from './bobrilHelpers';

export enum ValidationState {
    Warning,
    Error,
    Success
}

export interface IData {
    content: b.IBobrilNode,
    help?: string,
    validationState?: ValidationState
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.className = 'form-group';
        if (ctx.data.validationState == ValidationState.Error)
            me.className += ' has-error';
        if (ctx.data.validationState == ValidationState.Success)
            me.className += ' has-success';
        if (ctx.data.validationState == ValidationState.Warning)
            me.className += ' has-warning'
        me.children = [
            ctx.data.content,
            ctx.data.help && h.styledDiv(ctx.data.help, 'help-block')
        ];
    }
})


