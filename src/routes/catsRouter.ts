import { Router } from "express";
import {
  createCat,
  deleteCat,
  getAllCats,
  getById,
  updateFriends,
} from "../controllers/catsController.js";

const catsRouter = Router();
catsRouter.post("/cats", createCat);
catsRouter.get("/cats", getAllCats);
catsRouter.get("/cats/:id", getById);
catsRouter.delete("/cats/:id", deleteCat);
catsRouter.post("/cats/:id/update", updateFriends);

export default catsRouter;
