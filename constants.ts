import { ResearchField, ResearchPaper, Announcement, SemesterSyllabus, PracticalProcedure, FacultyMember } from './types';

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: '1',
    title: 'Catalytic Activation of C-H Bonds using Iridium Complexes',
    authors: ['Dr. A. Smith', 'J. Doe'],
    abstract: 'This study explores the efficiency of novel iridium pincer complexes in the activation of unreactive C-H bonds in alkanes at room temperature.',
    field: ResearchField.INORGANIC,
    date: '2023-11-15',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Machine Learning Models for Predicting Protein Folding Pathways',
    authors: ['Prof. R. Turing', 'K. West'],
    abstract: 'We apply deep neural networks to simulate and predict folding pathways of complex proteins, reducing computational cost by 40%.',
    field: ResearchField.COMPUTATIONAL,
    date: '2024-01-20',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'Synthesis of novel Alkaloids via Ring-Closing Metathesis',
    authors: ['Dr. S. O-Neil'],
    abstract: 'A concise total synthesis of bioactive alkaloids using Grubbs II catalyst.',
    field: ResearchField.ORGANIC,
    date: '2023-09-10',
    downloadUrl: '#'
  },
  {
    id: '4',
    title: 'Spectroscopic Analysis of Microplastics in Marine Environments',
    authors: ['L. Green', 'Dr. P. Blue'],
    abstract: 'Using FTIR and Raman spectroscopy to quantify microplastic pollution in coastal waters.',
    field: ResearchField.ANALYTICAL,
    date: '2024-02-05',
    downloadUrl: '#'
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'a1',
    title: 'Spring 2024 Seminar Series: Green Chemistry',
    date: '2024-03-01',
    content: 'Join us every Wednesday for guest lectures on sustainable chemical practices.',
    important: true
  },
  {
    id: 'a2',
    title: 'Lab Safety Certification Renewal',
    date: '2024-02-28',
    content: 'All postgraduate students must renew their safety certification by end of month.',
    important: true
  },
  {
    id: 'a3',
    title: 'New NMR Machine Installation',
    date: '2024-02-15',
    content: 'The new 600 MHz NMR is now operational in Lab 304. Booking required.',
    important: false
  }
];

export const SYLLABUS_DATA: SemesterSyllabus[] = [
  {
    semester: 1,
    modules: [
      { id: 'CH101', code: 'CH101', name: 'General Chemistry I', credits: 4, description: 'Atomic structure, periodic trends, and bonding.' },
      { id: 'CH102', code: 'CH102', name: 'Introductory Lab', credits: 2, description: 'Basic techniques: titration, filtration, and safety.' },
    ]
  },
  {
    semester: 2,
    modules: [
      { id: 'CH103', code: 'CH103', name: 'Organic Chemistry I', credits: 4, description: 'Alkanes, alkenes, alkynes, and stereochemistry.' },
      { id: 'CH104', code: 'CH104', name: 'Physical Chemistry I', credits: 4, description: 'Thermodynamics and kinetics.' },
    ]
  },
  {
    semester: 3,
    modules: [
      { id: 'CH201', code: 'CH201', name: 'Inorganic Chemistry', credits: 4, description: 'Coordination chemistry and solid state structure.' },
      { id: 'CH202', code: 'CH202', name: 'Analytical Methods', credits: 3, description: 'Spectroscopy, chromatography, and electrochemistry.' },
    ]
  }
];

export const PRACTICALS: PracticalProcedure[] = [
  {
    id: 'p1',
    title: 'Synthesis of Aspirin',
    difficulty: 'Beginner',
    duration: '3 hours',
    safetyLevel: 'Medium',
    description: 'Esterification of salicylic acid with acetic anhydride using phosphoric acid catalyst.',
    chemicals: ['Salicylic Acid', 'Acetic Anhydride', 'Phosphoric Acid', 'Ethanol']
  },
  {
    id: 'p2',
    title: 'Iodometric Titration of Copper',
    difficulty: 'Intermediate',
    duration: '2 hours',
    safetyLevel: 'Low',
    description: 'Determination of copper content in a brass sample via redox titration.',
    chemicals: ['Sodium Thiosulfate', 'Potassium Iodide', 'Starch Indicator', 'Brass Sample']
  },
  {
    id: 'p3',
    title: 'Computational Modelling of Water',
    difficulty: 'Advanced',
    duration: '4 hours',
    safetyLevel: 'Low',
    description: 'Using Gaussian software to calculate bond angles and vibrational frequencies.',
    chemicals: ['None (Computer Lab)']
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Prof. Eleanor Vance',
    role: 'Department Head',
    specialization: 'Organic Synthesis',
    email: 'e.vance@etheria.edu',
    imageUrl: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: 'f2',
    name: 'Dr. Marcus Webb',
    role: 'Senior Lecturer',
    specialization: 'Quantum Chemistry',
    email: 'm.webb@etheria.edu',
    imageUrl: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: 'f3',
    name: 'Dr. Sarah Li',
    role: 'Research Fellow',
    specialization: 'Nanomaterials',
    email: 's.li@etheria.edu',
    imageUrl: 'https://picsum.photos/200/200?random=3'
  }
];