import { prisma } from "../config/database.js";
import { TypeFacilityData } from "../types/FacilityTypes.js";

export async function createFacility(createFacilityData: TypeFacilityData) {
  await prisma.facility.create({
    data: createFacilityData,
  });
}

export async function findByName(name: string) {
  return prisma.facility.findFirst({ where: { name } });
}

export async function findById(id: number) {
  return prisma.facility.findUnique({
    where: { id },
  });
}

export async function deleteFacility(id: number) {
  return prisma.facility.delete({ where: { id } });
}

export async function findAll() {
  return prisma.facility.findMany({
    orderBy: { id: "asc" },
  });
}
