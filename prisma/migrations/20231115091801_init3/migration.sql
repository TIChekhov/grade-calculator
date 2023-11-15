/*
  Warnings:

  - You are about to drop the `ElectiveExamSubjectsOnLearningProfiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MandatoryExamSubjectsOnLearningProfiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" DROP CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_electiveExamId_fkey";

-- DropForeignKey
ALTER TABLE "ElectiveExamSubjectsOnLearningProfiles" DROP CONSTRAINT "ElectiveExamSubjectsOnLearningProfiles_electiveLearningPro_fkey";

-- DropForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" DROP CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_mandatoryExamId_fkey";

-- DropForeignKey
ALTER TABLE "MandatoryExamSubjectsOnLearningProfiles" DROP CONSTRAINT "MandatoryExamSubjectsOnLearningProfiles_mandatoryLearningP_fkey";

-- DropTable
DROP TABLE "ElectiveExamSubjectsOnLearningProfiles";

-- DropTable
DROP TABLE "MandatoryExamSubjectsOnLearningProfiles";

-- CreateTable
CREATE TABLE "_Mandatory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Elective" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Mandatory_AB_unique" ON "_Mandatory"("A", "B");

-- CreateIndex
CREATE INDEX "_Mandatory_B_index" ON "_Mandatory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Elective_AB_unique" ON "_Elective"("A", "B");

-- CreateIndex
CREATE INDEX "_Elective_B_index" ON "_Elective"("B");

-- AddForeignKey
ALTER TABLE "_Mandatory" ADD CONSTRAINT "_Mandatory_A_fkey" FOREIGN KEY ("A") REFERENCES "ExamSubject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Mandatory" ADD CONSTRAINT "_Mandatory_B_fkey" FOREIGN KEY ("B") REFERENCES "LearningProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Elective" ADD CONSTRAINT "_Elective_A_fkey" FOREIGN KEY ("A") REFERENCES "ExamSubject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Elective" ADD CONSTRAINT "_Elective_B_fkey" FOREIGN KEY ("B") REFERENCES "LearningProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
