const axios = require('axios')
class Home {
    static async index(ctx,next){
        const {info,userId} =ctx.request.query
        const {data} = await  axios.post('http://www.tuling123.com/openapi/api',{
            key:'c9d1eb9811e648a49ece24b7cb1065e9',
            info:info,
            userId:userId
        })
        console.log(data)
        ctx.body=data
    }
}
module.exports = Home
