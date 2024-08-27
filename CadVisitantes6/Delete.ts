import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

export async function deleteX(id: number) {
    return await prisma.visitantes.delete({
        where: { id: id }
    })
}