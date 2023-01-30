/*
  Warnings:

  - You are about to drop the column `employeeId` on the `facilities` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "facilities" DROP CONSTRAINT "facilities_employeeId_fkey";

-- AlterTable
ALTER TABLE "cats" ADD COLUMN     "facilityId" INTEGER;

-- AlterTable
ALTER TABLE "facilities" DROP COLUMN "employeeId";

-- AddForeignKey
ALTER TABLE "cats" ADD CONSTRAINT "cats_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
