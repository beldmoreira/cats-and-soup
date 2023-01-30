import { Request, Response } from "express";
import { dishesSchema } from "../schemas/dishesSchema.js";
import { wrongSchemaError } from "../util/errorUtils.js";
import * as dishesService from "../services/dishesService.js";

export async function createDish(req: Request, res: Response) {
  const validation = dishesSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await dishesService.insert(req.body);

  res.sendStatus(201);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const dish = await dishesService.getDishById(+id);
  res.send(dish);
}

export async function deleteDish(req: Request, res: Response) {
  const dishId = parseInt(req.params.id);
  if (isNaN(dishId)) {
    res.sendStatus(422);
  }
  await dishesService.deleteDish(dishId);
  res.sendStatus(200);
}

export async function getAllDishes(req: Request, res: Response) {
  const dishes = await dishesService.findDishes();
  res.send(dishes);
}
