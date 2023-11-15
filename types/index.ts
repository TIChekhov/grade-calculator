import { $Enums } from "@prisma/client";

export interface Exam {
  id: number;
  title: string;
  description: string | null;
  minScore: number;
  type: $Enums.ExamSubjectType | null;
}

export interface LinkingExamsLearningProfiles {
  type: $Enums.ExamSubjectsOnLearningProfilesType;
  exam: Exam;
}

export interface LearningProfile {
  id: number;
  title: string;
  description: string | null;
  exams: LinkingExamsLearningProfiles[];
}

export interface LearningDirection {
  title: string;
  id: number;
  description: string | null;
  learningProfile: LearningProfile[];
}
