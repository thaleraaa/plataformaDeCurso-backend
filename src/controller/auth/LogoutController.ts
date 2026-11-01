import { Request, Response } from "express";
import { COOKIE_NAME, cookieOptions } from "../../config/cookie";

class LogoutController {
    async handle(request: Request, response: Response) {
        response.clearCookie(COOKIE_NAME, cookieOptions);
        return response.json({ success: true });
    }
}

export { LogoutController };