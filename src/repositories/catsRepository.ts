import { prisma } from "../config/database.js";
import { TypeCatData } from "../types/CatsTypes.js";

export async function createCat(createCatData: TypeCatData) {
  await prisma.cat.create({
    data: createCatData,
  });
}

export async function findByName(name: string) {
  return prisma.cat.findFirst({ where: { name } });
}

export async function findById(id: number) {
  return prisma.cat.findUnique({
    where: { id },
  });
}

export async function deleteCat(id: number) {
  return prisma.cat.delete({ where: { id } });
}

export async function findAll() {
  return prisma.cat.findMany({
    orderBy: { id: "asc" },
  });
}

export async function updateFriend(id: number) {
  return prisma.cat.update({
    where: { id },
    data: {
      friend: {
        set: true,
      },
    },
  });
}
