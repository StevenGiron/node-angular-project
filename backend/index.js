const express = require('express');
var cors = require('cors');
const app = express();
require('./config/conexion');
const Articulos = require('./controllers/articulos');
const mysql = require('mysql');
let log = require('minilog')('app');
require('minilog').enable();
var Minilog = require('minilog');

Minilog
// formatter
    .pipe(Minilog.backends.console.formatClean)
    // backend
    .pipe(Minilog.backends.console);



log = Minilog('app');
Minilog.enable();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios',
    port: 3306
});

connection.connect((err) => {
    if (err) log.error('Error al conectar a la base de datos', err);
    log.info('conectado a la base de datos');

});



function validarUsusario(connection, callback) {
    let query = 'SELECT * FROM users';
    connection.query(query, function(err, result) {
        if (err) log.error('Error al validar usuario');
        callback(result);
    });
}

const main = async() => {

    const articulos = new Articulos();


    app.use(cors());
    app.get('/noticias', async(req, res) => {
        await articulos.getArticulos()
            .then(resp => res.send(resp.articles))
            .catch(log.warn('Error al consultar las noticias'));

    });
    app.get('/noticias/:title', async(req, res) => {
        let title = req.params.title;
        await articulos.getArticulosTitle(title)
            .then(resp => res.send(resp.articles))
            .catch(log.warn('Error al consultar la noticia por titulo'));
    });
    app.get('/usuarios', async(req, res) => {
        validarUsusario(connection, result => {
            res.json(result);

        });
    });

    app.listen(8080);
};

main();