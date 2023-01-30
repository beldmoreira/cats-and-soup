import { Request, Response } from "express";
import { facilitiesSchema } from "../schemas/facilitiesSchema.js";
import { wrongSchemaError } from "../util/errorUtils.js";
import * as facilitiesService from "../services/facilitiesService.js";

export async function createFacility(req: Request, res: Response) {
  const validation = facilitiesSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await facilitiesService.insert(req.body);

  res.sendStatus(201);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const facility = await facilitiesService.getFacilityById(+id);
  res.send(facility);
}

export async function deleteFacility(req: Request, res: Response) {
  const facilityId = parseInt(req.params.id);
  if (isNaN(facilityId)) {
    res.sendStatus(422);
  }
  await facilitiesService.deleteFacility(facilityId);
  res.sendStatus(200);
}

export async function getAllFacilities(req: Request, res: Response) {
  const facilities = await facilitiesService.findFacilities();
  res.send(facilities);
}
