import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.cat.deleteMany({});
  await prisma.facility.deleteMany({});
  await prisma.dish.deleteMany({});
}
