import * as dishesRepository from "../repositories/dishesRepository.js";
import { TypeDishData } from "../types/DishesTypes.js";

export async function insert(createDishData: TypeDishData) {
  const existingDish = await dishesRepository.findByName(createDishData.name);
  if (existingDish) {
    throw { type: "conflict" };
  }

  await dishesRepository.createDish(createDishData);
}

export async function getDishById(id: number) {
  const dish = await dishesRepository.findById(id);
  if (!dish) {
    throw { type: "not_found" };
  }

  return dish;
}

export async function deleteDish(id: number) {
  await getDishById(id);
  await dishesRepository.deleteDish(id);
}

export async function findDishes() {
  return dishesRepository.findAll();
}
