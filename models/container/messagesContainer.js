const { dbsqlite3 } = require('../conection')

class dbmensajes {
    constructor() {
        dbsqlite3.schema.hasTable('Mensajes').then((exist) => {
            if (!exist) {
                dbsqlite3.schema.createTable('Mensajes', (table) => {
                    table.increments('id')
                    table.string('nombre')
                    table.string('mensaje')
                    table.string('timestamp')
                }).then(() => {
                    console.log('Tabla creada con exito')
                })
            }
        })
    }

    async save(object) {

        await dbsqlite3('Mensajes')
            .insert({
                nombre: object.nombre,
                mensaje: object.mensaje,
                timestamp: object.time
            }).then((e) => {
                return e
            })
    }
    async getAll() {
        let data = await dbsqlite3.from('Mensajes')
        return data

    }
}
module.exports = dbmensajes