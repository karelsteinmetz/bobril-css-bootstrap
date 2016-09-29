var b = require('bobril');
var cb = require("../index");
const mainPage = b.createComponent({
    render(ctx, me, oldMe) {
        me.children = [
            cb.buttonGroup({
                buttons: [
                    cb.button({
                        contextualState: cb.ContextualState.primary,
                        label: "Primary",
                        onClick: () => { console.log("Primary was clicked..."); return true; }
                    }),
                    cb.button({
                        contextualState: cb.ContextualState.success,
                        label: "Success",
                        onClick: () => { console.log("Success was clicked..."); return true; }
                    })
                ]
            })
        ];
    }
});
b.routes(b.route({
    url: '/',
    handler: mainPage
}));
