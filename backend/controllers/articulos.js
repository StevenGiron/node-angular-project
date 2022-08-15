const axios = require('axios');

class Articulos {

    async getArticulos() {
        try {

            const resp = await axios.get('https://newsapi.org/v2/everything?q=tesla&pageSize=5&from=2022-07-15&sortBy=publishedAt&apiKey=7741903ff69d4edc9746579e3b289a72');
            return resp.data;

        } catch (error) {
            return error;
        }

    }
    async getArticulosTitle(title) {
        try {

            const resp = await axios.get(`https://newsapi.org/v2/everything?q=${title}&pageSize=5&from=2022-07-15&sortBy=publishedAt&apiKey=7741903ff69d4edc9746579e3b289a72`);
            return resp.data;

        } catch (error) {
            return error;
        }

    }
}

module.exports = Articulos;