import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";
import { AuthRequest } from "../../models/auth/AuthRequest";
import { COOKIE_NAME, cookieOptions } from "../../config/cookie";

class AuthController {
    async handle (request: Request, response: Response) {
        const {email, senha} : AuthRequest = request.body;
        const authService = new AuthService();
        const auth = await authService.execute({email, senha});
        response.cookie(COOKIE_NAME, auth.token, cookieOptions)
        return response.status(201).json({
            id: auth.id,
            email: auth.email,
            role: auth.role
        })
    }
}

export { AuthController }