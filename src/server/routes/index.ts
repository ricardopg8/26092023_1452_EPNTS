import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';


const router = Router();


    router.get('/', (_, res) => {
        return res.send('Olá, DEV!');
} ); 


    router.post('/Teste', (req, res) => {
        console.log(req.body); // Aqui no console pode ser utilizado body ou header e muitos outros parametros ex.: token, numerico, params, cookies, query(usa interrogação), etc.
        return res.status(StatusCodes.ACCEPTED).json(req.body); // Aqui no retorno do JSon pode ser usado o método json ou send
} ); 


export { router }