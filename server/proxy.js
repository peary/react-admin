const axios = require('axios')

const hostname = 'http://star.dev.yiducloud.cn'

// const headers = axios.request({
//     url: 'http://proxy-auth.yiducloud.cn/sso/cookies'
// }).then(function (response) {
//     let cookie = response.data;
//     console.log(cookie.nginx_proxy_session);
//     return {
//         'Cookie': 'nginx_proxy_session=' + cookie.nginx_proxy_session
//     }
// }).catch(function (error) {
//     console.log(error);
//     return {}
// });
//
// console.log(headers);

const headers = {
    'Cookie': 'nginx_proxy_session=qk020rfRuSMNHBTlYJrTsQ..|1533870560|jnye9oWedpgyJlWoVR0oAwdPYhU.'
}

class DevProxy {
    static async pp_list(ctx, next){
        const {data} = await axios.request({
            url: hostname + '/api/pp/list',
            method: 'GET',
            headers: headers
        })
        ctx.body=data
    };

    static async hospital_list(ctx, next){
        const {data} = await axios.request({
            url: hostname + '/api/hospital/list',
            method: 'GET',
            headers: headers
        })
        ctx.body=data
    }
}
module.exports = DevProxy
