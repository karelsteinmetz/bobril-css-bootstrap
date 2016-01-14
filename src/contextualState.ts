export enum ContextualState {
    primary,
    success,
    info,
    warning,
    danger
}

export function handleWithPrefix(state: ContextualState, prefix: string): string {
    let handled = handle(state);
    return handled === null ? '' : ' ' + prefix + '-' + handled;
}

export function handle(state: ContextualState): string {
    if (state === ContextualState.primary)
        return 'primary';
    if (state === ContextualState.success)
        return 'success';
    if (state === ContextualState.info)
        return 'info';
    if (state === ContextualState.warning)
        return 'warning';
    if (state === ContextualState.danger)
        return 'danger';
    return '';
}