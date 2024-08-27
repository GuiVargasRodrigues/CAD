import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

  export async function update(nome: any, doc: any, id: number) {
    return await prisma.visitantes.update({
        where: { id },
        data: {nome, doc, id}
    })
}