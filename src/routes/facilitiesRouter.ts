import {
  createFacility,
  deleteFacility,
  getAllFacilities,
  getById,
} from "../controllers/facilitiesController.js";
import { Router } from "express";

const facilitiesRouter = Router();
facilitiesRouter.post("/facilities", createFacility);
facilitiesRouter.get("/facilities", getAllFacilities);
facilitiesRouter.get("/facilities/:id", getById);
facilitiesRouter.delete("/facilities/:id", deleteFacility);

export default facilitiesRouter;
