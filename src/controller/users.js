const modelUsers = require('../model/users')
const {response} = require('../helper/index')
const moment = require('moment')

module.exports = {
    userStatus : async(req, res) => {
        try{
            const {
                email,
                password
            } = req.body;
            
            const body = {
                email,
                password,
                created_at: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                updated_at: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                status: 1
            };
            const result = await modelUsers.verifyUser(body.status, email, password);
            let match = result.message.split(' ')[2];
            let change = result.message.split(' ')[5]
            if(match == 1) {
                if(change == 1){
                    const result = await modelUsers.readById(email, password)
                    response(res, 200, {data: result})
                }else{
                    response(res, 200, {message: "the user is login"})
                }
                
            }else{
                await modelUsers.addUser(body);
                const result = await modelUsers.readById(email, password)
                console.log(result)
                response(res, 200, {data: result}) 
            }
        }catch(error){
            response(res, 500, {message: "the server is error", error: error})
        }
    },
    userLogout : async(req, res) => {
        try{
            const {
                email,
                id
            } = req.body;

            const body = {
                updated_at: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                status: 0
            };
            const result = await modelUsers.logoutUser(body, email, id);
            console.log(result.message.split(' ')[2]);
            let match = result.message.split(' ')[2];
            if(match == 1){
                response(res, 200, {message: "the user is logout"}) 
            }else{
                response(res, 406, {message: "the user is not found"})
            }
        }catch(error){
            response(res, 500, {message: "the server is error", error: error})
        }
    },
}