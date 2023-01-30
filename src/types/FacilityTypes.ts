import { Facility } from "@prisma/client";

export type TypeFacilityData = Omit<Facility, "id">;
