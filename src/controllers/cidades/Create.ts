import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { Cidade } from "./Cidade";

const bodyValidation: yup.Schema<Cidade> = yup.object().shape({
    Nome: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, Cidade>, res: Response) => {
    let validatedData: Cidade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError;

        return res.json({
            errors: {
                default: yupError.message,
            }

        });
    }

    // if (req.body.nome === undefined) {
    //     return res.status(StatusCodes.BAD_REQUEST).send('Informe o nome atributo nome');
    // }

    console.log(req.body.Nome);





    
    return res.send('Create!');
};
