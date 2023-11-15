/*
  Warnings:

  - Changed the type of `type` on the `ExamSubject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `ExamSubjectsOnLearningProfiles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ExamSubjectType" AS ENUM ('main', 'additional');

-- CreateEnum
CREATE TYPE "ExamSubjectsOnLearningProfilesType" AS ENUM ('mandatory', 'elective');

-- AlterTable
ALTER TABLE "ExamSubject" DROP COLUMN "type",
ADD COLUMN     "type" "ExamSubjectType" NOT NULL;

-- AlterTable
ALTER TABLE "ExamSubjectsOnLearningProfiles" DROP COLUMN "type",
ADD COLUMN     "type" "ExamSubjectsOnLearningProfilesType" NOT NULL;
