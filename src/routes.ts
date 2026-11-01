import { Router, Request, Response } from "express";
import { CreateAlunoController } from "./controller/aluno/CreateAlunoController";
import { AuthController } from "./controller/auth/AuthController";
import { DetailAlunoController } from "./controller/aluno/DetailAlunoController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { LogoutController } from "./controller/auth/LogoutController";

const router = Router();

router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

router.post("/cadastro", new CreateAlunoController().handle);
router.post("/login", new AuthController().handle);
router.post("/logout", new LogoutController().handle);
router.get("/me", isAuthenticated ,new DetailAlunoController().handle);

export { router };