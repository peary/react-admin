const axios = require('axios')

const headers = {
    'Cookie': 'nginx_proxy_session=i3YwlVF-50vnnX48V0JMzA..|1533845083|iXP7rLvLexIRrUxDJ_GNAZniv2o.'
}

const hostname = 'http://star.dev.yiducloud.cn'

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
