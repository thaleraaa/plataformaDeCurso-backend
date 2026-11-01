import prismaClient from "../../prisma";
import { AuthRequest } from "../../models/auth/AuthRequest";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class AuthService {
    async execute({email, senha}:AuthRequest) {
        if(!email || !senha) {
            throw new Error ("Dados faltandos");
        }

        const emailExiste = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        });

        if(!emailExiste) {
            throw new Error ("Dados invalidos");
        }

        const senhaValida = await compare(senha, emailExiste.senha);

        if(!senhaValida) {
            throw new Error ("Dados invalidos");
        }

        const token = sign(
            {
                role: emailExiste.role
            },  
                process.env.JWT_SECRET as string,
            {
                subject: emailExiste.id,
                expiresIn: '30d'
            }
        );

        return {
            id: emailExiste.id,
            email: emailExiste.email,
            role: emailExiste.role,
            token
        }

    }
}

export { AuthService }