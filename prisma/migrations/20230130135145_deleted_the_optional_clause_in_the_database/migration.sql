/*
  Warnings:

  - Made the column `facilityId` on table `cats` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cats" DROP CONSTRAINT "cats_facilityId_fkey";

-- AlterTable
ALTER TABLE "cats" ALTER COLUMN "facilityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "cats" ADD CONSTRAINT "cats_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
