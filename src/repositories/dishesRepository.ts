import { prisma } from "../config/database.js";
import { TypeDishData } from "../types/DishesTypes.js";

export async function createDish(createDishData: TypeDishData) {
  await prisma.dish.create({
    data: createDishData,
  });
}

export async function findByName(name: string) {
  return prisma.dish.findFirst({ where: { name } });
}

export async function findById(id: number) {
  return prisma.dish.findUnique({
    where: { id },
  });
}

export async function deleteDish(id: number) {
  return prisma.dish.delete({ where: { id } });
}

export async function findAll() {
  return prisma.dish.findMany({
    orderBy: { id: "asc" },
  });
}
