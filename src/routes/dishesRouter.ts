import {
  createDish,
  deleteDish,
  getAllDishes,
  getById,
} from "../controllers/dishesController.js";
import { Router } from "express";

const dishesRouter = Router();
dishesRouter.post("/dishes", createDish);
dishesRouter.get("/dishes", getAllDishes);
dishesRouter.get("/dishes/:id", getById);
dishesRouter.delete("/dishes/:id", deleteDish);

export default dishesRouter;
