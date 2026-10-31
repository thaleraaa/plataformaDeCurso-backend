import { Router, Request, Response } from "express";
import { CreateAlunoController } from "./controller/aluno/CreateAlunoController";

const router = Router();

router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

router.post("/cadastro", new CreateAlunoController().handle);

export { router };