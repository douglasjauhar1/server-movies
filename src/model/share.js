const conn = require('../config/index')

module.exports = {
    readMovie: async() => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT sh.id, sh.title, sh.description, sh.link, sh.likes, sh.unlikes, us.email FROM share AS sh 
            LEFT JOIN user AS us ON sh.user_id = us.id 
            ORDER BY sh.update_date DESC LIMIT 50;`,
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            });
        })
    },
    addMovie: async(body) => {
        return new Promise ((resolve, reject) => {
            conn.query(`INSERT INTO share SET ?`, body, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    updateMovie: async(data, movie_id) => {
        return new Promise ((resolve, reject) => {
            conn.query(`UPDATE share 
            SET ${data} = ${data} + 1
            WHERE id = ?`, movie_id, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}