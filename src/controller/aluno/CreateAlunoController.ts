import { Request, Response } from "express";
import { AlunoRequest } from "../../models/aluno/AlunoRequest";
import { CreateAlunoService } from "../../services/aluno/CreateAlunoService";

class CreateAlunoController {
    async handle (request: Request, response: Response) {
        const {nome, email, senha, confirmeSenha} : AlunoRequest = request.body;
        const createAlunoService = new CreateAlunoService();
        const novoAluno = await createAlunoService.execute({nome, email, senha, confirmeSenha});
        return response.status(201).json(novoAluno);
    }
}

export { CreateAlunoController }