import { Request, Response } from "express";
import { catSchema } from "../schemas/catsSchema.js";
import { wrongSchemaError } from "../util/errorUtils.js";
import * as catsService from "../services/catsService.js";

export async function createCat(req: Request, res: Response) {
  const validation = catSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await catsService.insert(req.body);

  res.sendStatus(201);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const cat = await catsService.getCatById(+id);
  res.send(cat);
}

export async function deleteCat(req: Request, res: Response) {
  const catId = parseInt(req.params.id);
  if (isNaN(catId)) {
    res.sendStatus(422);
  }
  await catsService.deleteCat(catId);
  res.sendStatus(200);
}

export async function getAllCats(req: Request, res: Response) {
  const cats = await catsService.findCats();
  res.send(cats);
}

export async function updateFriends(req: Request, res: Response) {
  const { id } = req.params;

  await catsService.updateFriend(+id);
  res.sendStatus(200);
}
