import { Cat } from "@prisma/client";

export type TypeCatData = Omit<Cat, "id">;
