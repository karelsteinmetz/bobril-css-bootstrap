import * as b from 'bobril';

let mainPage = b.createComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode, oldMe?: b.IBobrilCacheNode) {
        me.children = "I'm example";
    }
})

b.routes(
    b.route({
        url: '/',
        handler: mainPage
    })
);
