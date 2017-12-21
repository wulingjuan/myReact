var app = require('koa')();
var router = require('koa-router')();
// var kaBoby = require('koa-body');


// router.post('/api/post', koaBody, function* (next) {
//     console.log(this.request.body)
//     this.body = JSON.stringify(this.request.body)
// });

// 优惠广告
var homeData = require('./home/ad');
router.get('/api/homead',function*(next){
    this.body = homeData;
})

// 推荐列表
var homeList = require('./home/list');
router.get('/api/homelist/:city/:page', function* (next) {
    this.body = homeList;
    const params = this.params;
    const city = params.city;
    const page = params.page;
})


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
