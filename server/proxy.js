const axios = require('axios')

const hostname = 'http://star.dev.yiducloud.cn'

class DevProxy {
    get_cookie() {
        return axios.request({
            url: 'http://proxy-auth.yiducloud.cn/sso/cookies'
        }).then(function (response) {
            let cookie = response.data;
            return {
                'Cookie': 'nginx_proxy_session=' + cookie.nginx_proxy_session
            }
        }).catch(function (error) {
            console.log(error);
            return {}
        })
    };

    async pp_list(ctx, next){
        console.log(this.get_cookie());
        let headers = this.get_cookie();
        const {data} = await axios.request({
            url: hostname + '/api/pp/list',
            method: 'GET',
            headers: headers
        })
        ctx.body=data
    };

    async hospital_list(ctx, next){
        let headers = this.get_cookie();
        const {data} = await axios.request({
            url: hostname + '/api/hospital/list',
            method: 'GET',
            headers: headers
        })
        ctx.body=data
    }
}
module.exports = DevProxy
