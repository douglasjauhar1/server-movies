const db = require('../config/index')

module.exports = {
    addUser : (body) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO user SET ?', body, (err, result)=>{
            if(err) reject(err)
            resolve(result)
            })
        })
    },
    readById : (email, password)=> {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT id, email,status FROM user WHERE email = ? AND password = ?', [email, password], (err, result)=>{
                if(err) reject('error')
                resolve(result)
            })
        })
    },
    verifyUser : (status, email, password) =>{
        return new Promise((resolve, reject)=>{
            db.query(`UPDATE user SET status = ? WHERE email = ? AND password = ?`, [status, email, password], (err, result) => {
                if(err) reject('error')
                resolve(result)
            }) 
        })
    },
    logoutUser :  (body, email, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE user SET ? WHERE email = ? AND id = ?`, [body, email, id], (err, result) => {
                if(err) reject('error')
                resolve(result)
            })
        })
    }
}