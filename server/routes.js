const compose = require('koa-compose');
const Router = require('koa-router');
const Proxy = require('./proxy');

var router = new Router();
var proxy = new Proxy();

router.get('/api/pp/list', proxy.pp_list)
router.get('/api/hospital/list', proxy.hospital_list)

// app.use(router.routes()).use(router.allowedMethods());
module.exports = (ctx, next) => compose([router.routes(), router.allowedMethods()]);
