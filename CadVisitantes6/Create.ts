import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function create(nome, doc, id)  {
    let visitantes: Prisma.visitantesCreateInput;
  
    // Check if posts should be included in the query
    visitantes = {
        nome: nome,
        doc: doc,
        id: id
      }
    // Pass 'user' object into query
    const createVisitantes = await prisma.visitantes.create({ data: visitantes })
}

export{create}