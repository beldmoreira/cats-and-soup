import joi from "joi";
import { TypeFacilityData } from "../types/FacilityTypes.js";

export const facilitiesSchema = joi.object<TypeFacilityData>({
  name: joi.string().required(),
});
