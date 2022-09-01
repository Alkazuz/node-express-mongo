import {Request, Response} from 'express';

import {User} from '../models/Users'

export default{
    async create(request:Request, response:Response){
        const { name, email, cpf} = request.body;
        const existing = await User.findOne({email});

        if(!existing){
            const user = await User.create({name, email, cpf})
            return response.status(200).json({message: 'Usuário criado com sucesso', user})
        }

        return response.status(201).json({message: 'Usuário já existe'})
    }
}