import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';



interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
        nome: yup.string().required().min(3),

});

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
    if (req.body.nome === undefined) {
        return res.status(StatusCodes.BAD_REQUEST).send('Informe o atributo nome');
    }

    console.log(req.body.nome);










    return res.send('Create!');
};