const isProduction = process.env.NODE_ENV === "production";

export const COOKIE_NAME = "token";

export const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 1000 * 60 * 60 * 24, 
};