export enum ResearchField {
  ORGANIC = 'Organic Chemistry',
  INORGANIC = 'Inorganic Chemistry',
  PHYSICAL = 'Physical Chemistry',
  ANALYTICAL = 'Analytical Chemistry',
  COMPUTATIONAL = 'Computational Chemistry'
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  field: ResearchField;
  date: string;
  downloadUrl: string; // Mock URL
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  important: boolean;
}

export interface SyllabusModule {
  id: string;
  code: string;
  name: string;
  credits: number;
  description: string;
}

export interface SemesterSyllabus {
  semester: number;
  modules: SyllabusModule[];
}

export interface PracticalProcedure {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  safetyLevel: 'Low' | 'Medium' | 'High';
  description: string;
  chemicals: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  email: string;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}