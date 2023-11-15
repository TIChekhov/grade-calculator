/*
  Warnings:

  - You are about to drop the `ElectiveExamSubjectsOnLearningProfiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MandatoryExamSubjectsOnLearningProfiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" DROP CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_examId_fkey";

-- DropForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" DROP CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_learningProfileId_fkey";

-- DropForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" DROP CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_examId_fkey";

-- DropForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" DROP CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_learningProfileId_fkey";

-- DropTable
DROP TABLE "ElectiveExamSubjectsOnLearningProfiles";

-- DropTable
DROP TABLE "MandatoryExamSubjectsOnLearningProfiles";

-- CreateTable
CREATE TABLE "ExamSubjectsOnLearningProfiles" (
    "examId" INTEGER NOT NULL,
    "learningProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamSubjectsOnLearningProfiles_pkey" PRIMARY KEY ("examId","learningProfileId")
);

-- AddForeignKey
ALTER TABLE "ExamSubjectsOnLearningProfiles" ADD CONSTRAINT "ExamSubjectsOnLearningProfiles_examId_fkey" FOREIGN KEY ("examId") REFERENCES "ExamSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubjectsOnLearningProfiles" ADD CONSTRAINT "ExamSubjectsOnLearningProfiles_learningProfileId_fkey" FOREIGN KEY ("learningProfileId") REFERENCES "LearningProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
