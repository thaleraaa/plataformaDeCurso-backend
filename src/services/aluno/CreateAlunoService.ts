import prismaClient from "../../prisma";
import { AlunoRequest } from "../../models/aluno/AlunoRequest";
import { hash } from "bcryptjs";
import { Prisma } from "../../generated/prisma/client";

class CreateAlunoService {
    async execute ({nome, email, senha, confirmeSenha}:AlunoRequest) {
        if(!nome || !email || !senha || !confirmeSenha) {
            throw new Error ("Dados faltantes");
        }

        if(senha!==confirmeSenha) {
            throw new Error ("As senhas não são iguais");
        }

        const senhaNova = await hash(senha, 8);

        try {
            const user = await prismaClient.usuario.create({
                data: {
                    email: email,
                    nome: nome,
                    senha: senhaNova,
                    role: 'ALUNO'
                },
                omit: {
                    senha: true
                }
            });
            return user;
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002"
            ) {
                throw new Error("Este e-mail já está cadastrado");
            }

            throw error;
        }

    }
}

export { CreateAlunoService }