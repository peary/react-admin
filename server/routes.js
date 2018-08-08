const compose = require('koa-compose');
const Router = require('koa-router');
var router = new Router();
const Proxy = require('./proxy');

router.get('/api/pp/list', Proxy.pp_list)
router.get('/api/hospital/list', Proxy.hospital_list)

// app.use(router.routes()).use(router.allowedMethods());
module.exports = (ctx, next) => compose([router.routes(), router.allowedMethods()]);
