import * as facilitiesRepository from "../repositories/facilitiesRepository.js";
import { TypeFacilityData } from "../types/FacilityTypes.js";

export async function insert(createFacilityData: TypeFacilityData) {
  const existingFacility = await facilitiesRepository.findByName(
    createFacilityData.name
  );
  if (existingFacility) {
    throw { type: "conflict" };
  }

  await facilitiesRepository.createFacility(createFacilityData);
}

export async function getFacilityById(id: number) {
  const facility = await facilitiesRepository.findById(id);
  if (!facility) {
    throw { type: "not_found" };
  }

  return facility;
}

export async function deleteFacility(id: number) {
  await getFacilityById(id);
  await facilitiesRepository.deleteFacility(id);
}

export async function findFacilities() {
  return facilitiesRepository.findAll();
}
