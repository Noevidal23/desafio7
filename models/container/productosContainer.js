const { dbmysql } = require('../conection')

class dbproductos {
    constructor() {
        dbmysql.schema.hasTable('Productos').then((exist) => {
            if (!exist) {
                dbmysql.schema.createTable('Productos', (table) => {
                    table.increments('id')
                    table.string('nombre')
                    table.integer('precio')
                    table.string('url')

                }).then(() => {
                    console.log('Tabla creada con exito')
                })
            }
        })
    }
    sayHello() {
        console.log('Hola Mundo');
    }

    async save(object) {

        await dbmysql('Productos')
            .insert({
                nombre: object.nombre,
                precio: object.precio,
                url: object.url
            }).then((e) => {
                return e
            })
    }
    async getAll() {
        let data = await dbmysql.from('Productos')
        return data

    }
}
module.exports = dbproductos