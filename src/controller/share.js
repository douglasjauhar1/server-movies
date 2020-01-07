const shareModel = require('../model/share')
const { response } = require('../helper/index')
const moment = require('moment')

module.exports = {
    readMovie: async(req, res) => {
        try{
            const result = await shareModel.readMovie();
            response(res, 200, {movies: result})
        }catch(error){
            response(res, 500, {message: "the server is error", error:error})
        }
    },
    addMovie: async(req, res) => {
        try{
            const {
                link,
                id,
                title,
                description
            } = req.body;

            const body = {
                link,
                user_id: id,
                created_date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                update_date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                likes: 0,
                unlikes: 0,
                title,
                description
            };
            console.log(body);
            
            const result = await shareModel.addMovie(body);
            response(res, 200, {message: "the user is added"})
        }catch(error){
            response(res, 200, {message: "the user was there", error:error})
        }
    },
    updateMovie: async(req, res) => {
        try{
            const {
                data,
                movie_id
            } = req.body;
            const result = await shareModel.updateMovie(data, movie_id);
            response(res, 200, {message: "the data is updated"})
        }catch(error){
            response(res, 500, {message: "the server is error", error: error})
        }
    },
}