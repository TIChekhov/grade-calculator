-- AlterTable
ALTER TABLE "ExamSubject" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LearningDirection" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LearningProfile" ALTER COLUMN "description" DROP NOT NULL;
