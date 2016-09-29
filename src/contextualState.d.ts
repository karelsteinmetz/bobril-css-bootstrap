export declare enum ContextualState {
    primary = 0,
    success = 1,
    info = 2,
    warning = 3,
    danger = 4,
}
export declare function handleWithPrefix(state: ContextualState, prefix: string): string;
export declare function handle(state: ContextualState): string;
