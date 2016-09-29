(function (ContextualState) {
    ContextualState[ContextualState["primary"] = 0] = "primary";
    ContextualState[ContextualState["success"] = 1] = "success";
    ContextualState[ContextualState["info"] = 2] = "info";
    ContextualState[ContextualState["warning"] = 3] = "warning";
    ContextualState[ContextualState["danger"] = 4] = "danger";
})(exports.ContextualState || (exports.ContextualState = {}));
var ContextualState = exports.ContextualState;
function handleWithPrefix(state, prefix) {
    let handled = handle(state);
    return handled === null ? '' : ' ' + prefix + '-' + handled;
}
exports.handleWithPrefix = handleWithPrefix;
function handle(state) {
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
exports.handle = handle;
