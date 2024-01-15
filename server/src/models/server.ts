import express, { Application } from 'express';
import routesPersonas from '../routes/persona.routes';
import routesUser from '../routes/user.routes';
import connection from '../db/connection';
import cors from 'cors';


class Server {
    private app: Application; //Aplicacion de Express almacenada en la variable global
    private port: string; //Por donde vamos a correr nuestra aplicacion


    constructor () {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto ' + this.port);
        })
    }
    routes() {
        this.app.use('/api/personas', routesPersonas);
        this.app.use('/api/user', routesUser);
    }
    
    middlewares() {

        //Parseo del body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    conectarDB() {
        connection.connect((err) => {
            if(err) throw err;
            console.log('Conectado a la Base de Datos')
        })
    }

}

export default Server;