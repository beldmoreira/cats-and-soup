import joi from "joi";
import { TypeDishData } from "../types/DishesTypes.js";

export const dishesSchema = joi.object<TypeDishData>({
  name: joi.string().required(),
  genre: joi.string().required(),
});
