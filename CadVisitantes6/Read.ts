import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()
var visitantes: Prisma.visitantesFindUniqueArgs

export async function read(id: number) {
  return await prisma.visitantes.findUnique({
    where: {
      id: id
    }
  })}