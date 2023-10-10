import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { Cidade } from "./Cidade";

const bodyValidation: yup.Schema<Cidade> = yup.object().shape({
    Nome: yup.string().required().min(3),
    Estado: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, Cidade>, res: Response) => {
    let validatedData: Cidade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body, {abortEarly: false});
    } catch (error) {
      const yupError = error as yup.ValidationError;
      const errors: Record<string, string> = {};


        yupError.inner.forEach(error => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        });


        return res.status(StatusCodes.BAD_REQUEST).json({
            errors
        });
    }

    // if (req.body.nome === undefined) {
    //     return res.status(StatusCodes.BAD_REQUEST).send('Informe o nome atributo nome');
    // }

console.log(validatedData);

    // console.log(req.body.Nome);
    // console.log(req.body.Estado)

    
    return res.send('Create!');
};
