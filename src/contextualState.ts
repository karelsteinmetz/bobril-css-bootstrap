export enum ContextualState {
  primary,
  success,
  info,
  warning,
  danger
}

export function handle(state: ContextualState, prefix: string): string {
  if (state === ContextualState.primary)
    return ' ' + prefix + '-primary';
  if (state === ContextualState.success)
    return ' ' + prefix + '-success';
  if (state === ContextualState.info)
    return ' ' + prefix + '-info';
  if (state === ContextualState.warning)
    return ' ' + prefix + '-warning';
  if (state === ContextualState.danger)
    return ' ' + prefix + '-danger';
  return '';
}
