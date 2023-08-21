import mongoose from "mongoose"

export class Database {
  server:string = '127.0.0.1'
  port:string = '27017'
  db:string = 'paraya'

  constructor() {
    mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
    .then(()=>{
      console.log('Conexión a MongoDB exitosa.')
    }).catch((error) => {
      console.error('Algo inesperado ha ocurrido...', error)
    })
  }
}