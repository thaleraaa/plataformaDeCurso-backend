import prismaClient from "../../prisma";

class DetailAlunoService {
    async execute(id: string) {
        if(!id) {
            throw new Error("O ID é necessário");
        }

        return await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            omit: {
                senha: true
            }
        });
    }
}

export { DetailAlunoService }