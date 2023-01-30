import { Dish } from "@prisma/client";

export type TypeDishData = Omit<Dish, "id">;
