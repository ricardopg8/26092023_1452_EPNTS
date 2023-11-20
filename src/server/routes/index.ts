/*
src/index:
import { server } from './server/server';

server.listen(process.env.PORT || 3333,  () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});
*/

import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

import { CidadesController } from './../controllers';


const router = Router();


    router.get('/', (_, res) => {
        return res.send('Funcinoando, sem altenticações!');
} ); 


    router.post('/cidades', CidadesController.create); //CidadesController.createBodyValidator,
    
    


export { router }