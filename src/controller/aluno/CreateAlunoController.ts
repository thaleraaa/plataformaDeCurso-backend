import { Request, Response } from "express";
import { AlunoRequest } from "../../models/aluno/AlunoRequest";
import { CreateUserService } from "../../services/aluno/CreateUserService";

class CreateAlunoController {
    async handle (request: Request, response: Response) {
        const {nome, email, senha, confirmeSenha} : AlunoRequest = request.body;
        const createUserService = new CreateUserService();
        const novoAluno = await createUserService.execute({nome, email, senha, confirmeSenha});
        return response.status(201).json(novoAluno);
    }
}

export { CreateAlunoController }