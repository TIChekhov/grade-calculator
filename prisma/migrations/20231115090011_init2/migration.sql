/*
  Warnings:

  - You are about to drop the `ExamSubjectsOnLearningProfiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExamSubjectsOnLearningProfiles" DROP CONSTRAINT "ExamSubjectsOnLearningProfiles_examId_fkey";

-- DropForeignKey
ALTER TABLE "ExamSubjectsOnLearningProfiles" DROP CONSTRAINT "ExamSubjectsOnLearningProfiles_learningProfileId_fkey";

-- AlterTable
ALTER TABLE "LearningProfile" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "ExamSubjectsOnLearningProfiles";

-- CreateTable
CREATE TABLE "MandatoryExamSubjectsOnLearningProfiles" (
    "mandatoryExamId" INTEGER NOT NULL,
    "mandatoryLearningProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_pkey" PRIMARY KEY ("mandatoryExamId","mandatoryLearningProfileId")
);

-- CreateTable
CREATE TABLE "ElectiveExamSubjectsOnLearningProfiles" (
    "electiveExamId" INTEGER NOT NULL,
    "electiveLearningProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_pkey" PRIMARY KEY ("electiveExamId","electiveLearningProfileId")
);

-- AddForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" ADD CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_mandatoryExamId_fkey" FOREIGN KEY ("mandatoryExamId") REFERENCES "ExamSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" ADD CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_mandatoryLearningP_fkey" FOREIGN KEY ("mandatoryLearningProfileId") REFERENCES "LearningProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" ADD CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_electiveExamId_fkey" FOREIGN KEY ("electiveExamId") REFERENCES "ExamSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" ADD CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_electiveLearningPro_fkey" FOREIGN KEY ("electiveLearningProfileId") REFERENCES "LearningProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
