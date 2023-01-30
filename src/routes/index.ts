import { Router } from "express";
import catsRouter from "./catsRouter.js";
import dishesRouter from "./dishesRouter.js";
import facilitiesRouter from "./facilitiesRouter.js";

const router = Router();
router.use(catsRouter);
router.use(dishesRouter);
router.use(facilitiesRouter);
export default router;
