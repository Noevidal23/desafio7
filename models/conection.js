const dbmysql = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'secret',
        database: 'clases'
    }
})

const dbsqlite3 = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./db/mensajes.sqlite"
    },
    useNullAsDefault: true
});

module.exports = {
    dbmysql,
    dbsqlite3
}