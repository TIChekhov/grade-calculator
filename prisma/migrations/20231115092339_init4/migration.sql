/*
  Warnings:

  - You are about to drop the `_Elective` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Mandatory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Elective" DROP CONSTRAINT "_Elective_A_fkey";

-- DropForeignKey
ALTER TABLE "_Elective" DROP CONSTRAINT "_Elective_B_fkey";

-- DropForeignKey
ALTER TABLE "_Mandatory" DROP CONSTRAINT "_Mandatory_A_fkey";

-- DropForeignKey
ALTER TABLE "_Mandatory" DROP CONSTRAINT "_Mandatory_B_fkey";

-- DropTable
DROP TABLE "_Elective";

-- DropTable
DROP TABLE "_Mandatory";

-- CreateTable
CREATE TABLE "MandatoryExamSubjectsOnLearningProfiles" (
    "examId" INTEGER NOT NULL,
    "learningProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_pkey" PRIMARY KEY ("examId","learningProfileId")
);

-- CreateTable
CREATE TABLE "ElectiveExamSubjectsOnLearningProfiles" (
    "examId" INTEGER NOT NULL,
    "learningProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_pkey" PRIMARY KEY ("examId","learningProfileId")
);

-- AddForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" ADD CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_examId_fkey" FOREIGN KEY ("examId") REFERENCES "ExamSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" ADD CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_learningProfileId_fkey" FOREIGN KEY ("learningProfileId") REFERENCES "LearningProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" ADD CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_examId_fkey" FOREIGN KEY ("examId") REFERENCES "ExamSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" ADD CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_learningProfileId_fkey" FOREIGN KEY ("learningProfileId") REFERENCES "LearningProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
