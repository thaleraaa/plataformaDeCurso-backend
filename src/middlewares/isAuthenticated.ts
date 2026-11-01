import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../models/auth/Payload";

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const token = request.cookies.token;
    
    if(!token) {
        return response.status(401).end();
    }

    try {
        const { sub, role } = verify(token, process.env.JWT_SECRET as string) as Payload;

        response.locals.userId = sub;
        response.locals.role = role;

        return next();
    } catch {
        return response.status(401).json({
            error: "Token inválido ou expirado",
        });
    }
}