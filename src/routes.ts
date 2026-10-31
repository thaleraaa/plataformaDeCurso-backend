import { Router, Request, Response } from "express";
import multer from "multer";

const router = Router();

router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

export { router };