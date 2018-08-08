/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';
import { get } from './tools';
import * as config from './config';

const pp_data = {
    'data': {
        'body': [
            {"#":1,"结束时间":"2018-04-11 05:22:16","pp标签":"","结构化代码版本":"engine_9_02_v20180205","医院名称":"厦门大学附属中山医院","创建人":"张黎","开始时间":"2018-04-10 22:05:32","是否现场":0,"耗时":26204,"是否发布":0,"schema版本":"xmzsh_20171204_3.0_3_schema","pp版本":"xmzsh_20171204_3.0_1.21_9_pp","流程结果":"完成","归一代码版本":"norm_9_02_v20180408","操作":""}
        ],
        'header': ["#","pp版本","pp标签","是否发布","是否现场","医院名称","schema版本","创建人","开始时间","结束时间","流程结果","耗时","归一代码版本","结构化代码版本","操作"]
    }
}

export const getPros = () => axios.post('http://api.xitu.io/resources/github', {
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
}).then(function (response) {
    return response.data;
}).catch(function (error) {
    console.log(error);
});

export const axiosGET = (uri, payload) => axios.get(uri, payload).then(function (response) {
    return response.data;
}).catch(function (error) {
    console.log(error);
});

export const axiosPost = (uri, payload) => axios.post(uri, payload).then(function (response) {
    alert(uri)
    return response.data;
}).catch(function (error) {
    console.log(error);
});

export const axiosRequest = (uri, method, payload) => axios.request({
    'url': uri,
    'method': method,
    'data': payload
}).then(function (response) {
    alert(uri);
    return response.data;
}).catch(function (error) {
    console.log(error);
});

export const axiosStar = (uri, method, payload) => axios.request({
    'url': uri,
    'method': method,
    'data': payload,
    'withCredentials': true,
    'headers': {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true,
        'Cookie': {
            'nginx_proxy_session': "Il2x2HAMQIpRkSq7LXO_uA..|1533784146|eWsIl6Dpw4K7Fz84C2H0a7hAyyM."
        }
    }
}).then(function (response) {
    alert(uri);
    var res = response.data;
    // var res = pp_data;
    var rs = {
        'data': res.data.body,
        'columns': [...res.data.header.map(val => {
            return {
                title: val,
                dataIndex: val,
                width: 150
            };
        })]
    }
    console.log(rs);
    return rs
}).catch(function (error) {
    console.log(error);
});

export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

const GIT_OAUTH = 'https://github.com/login/oauth';
export const gitOauthLogin = () => axios.get(`${GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin`);
export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', {...{client_id: '792cdcd244e98dcd2dee',
        client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059', redirect_uri: 'http://localhost:3006/', state: 'reactAdmin'}, code: code}, {headers: {Accept: 'application/json'}})
    .then(res => res.data).catch(err => console.log(err));
export const gitOauthInfo = access_token => axios({
    method: 'get',
    url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(err => console.log(err));

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({url: config.MOCK_AUTH_ADMIN});

// 访问权限获取
export const guest = () => get({url: config.MOCK_AUTH_VISITOR});