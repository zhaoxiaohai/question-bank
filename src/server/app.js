// const Koa = require('koa');
// const Router = require('koa-router');
// const app = new Koa();
// const router = new Router();
// var gets = [{
//     'judgment': {
//         'qid': 0,
//         'title': '题干',
//         'subject': '详细说明',
//         'answer': false,
//         'analysis': '题目解析'
//     }
// }];
// var posts = [{
//    'result':{
//    	  'uid':123,
//    	  'qid':123,
//    },
//    'status':0,
//    'msg':'状态描述'
// }];


// router.get('/exam/question/judgment', (ctx, next) => {
//     ctx.body = gets;
// }).post('/exam/question/add', (ctx, next) => {
//         var uid = ctx.request.body.uid || ``;
//         var qtype = ctx.request.body.qtype || ``;
//         var titleStructureName=ctx.request.body.qtype || ``;
//         console.log(`uid为${uid},qtype为${qtype},titleStructureName为${titleStructureName}`)
//         if (uid === `123` && qtype === `123` && titleStructureName ===`123`) {
//             ctx.response.body = posts;
//         } else {
//             ctx.response.body = `哈哈，报错`
//         }
    
// });
// app.use(router.routes()).use(router.allowedMethods());
// app.listen(3000);
const koa=require('koa');
const router = require('koa-simple-router');
const render = require('koa-swig');
const co = require('co');
const serve = require('koa-static');
const initController = require('./controller/initController');
const config = require('./config/config');
const app=new koa();
initController.init(app,router);



app.context.render = co.wrap(render({
    root:config.get('viewDir'),
    autoescape:true,
    cache:'memory',
    ext:'html'
}));
app.use(serve(config.get('staticDir')));

app.listen(config.get('port'),function(){
    console.log('3000')
});

