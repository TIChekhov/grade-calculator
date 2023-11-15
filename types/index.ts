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

export interface MetaConfig {
  title: string;
  description: string;
  image: string;
  openGraph: {
    site_name: string;
    type: string;
    url: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
}
