import { Request, Response } from "express";
import { DetailAlunoService } from "../../services/aluno/DetailAlunoService";

class DetailAlunoController {
    async handle(request: Request, response: Response) {
        const id = response.locals.userId;
        const detailAlunoService = new DetailAlunoService();
        const aluno = await detailAlunoService.execute(id);
        return response.status(200).json(aluno);
    }
}

export { DetailAlunoController }