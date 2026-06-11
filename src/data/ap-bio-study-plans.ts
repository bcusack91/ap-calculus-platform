import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-bio-sprint',
  title: '4-Week AP Biology Sprint',
  description: 'Fast review of core AP Biology topics — cells, genetics, evolution, and ecology — perfect for students with a solid biology background.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Biology Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Cell Structure & Function Review', type: 'LESSON', topicSlug: 'cell-organelles', dayOfWeek: 1 },
      { title: 'Cellular Respiration & Photosynthesis', type: 'LESSON', topicSlug: 'cellular-respiration', dayOfWeek: 3 },
      { title: 'Cell Biology Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'DNA, RNA & Protein Synthesis', type: 'LESSON', topicSlug: 'dna-replication', dayOfWeek: 0 },
      { title: 'Genetics & Heredity', type: 'LESSON', topicSlug: 'mendelian-genetics', dayOfWeek: 2 },
      { title: 'Genetics Quiz', type: 'QUIZ', topicSlug: 'mendelian-genetics', dayOfWeek: 4 },
      { title: 'Molecular Bio Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Evolution & Natural Selection', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 0 },
      { title: 'Ecology & Ecosystems', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 2 },
      { title: 'Evolution & Ecology Quiz', type: 'QUIZ', topicSlug: 'natural-selection', dayOfWeek: 4 },
      { title: 'Ecology Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full AP Biology Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Target Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-bio-standard',
  title: '10-Week AP Biology Plan',
  description: 'Balanced study schedule covering all four Big Ideas with lessons, labs-style practice, quizzes, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Biology Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Chemistry of Life Review', type: 'LESSON', topicSlug: 'water-properties', dayOfWeek: 1 },
      { title: 'Water & Macromolecules', type: 'LESSON', topicSlug: 'water-properties', dayOfWeek: 3 },
      { title: 'Biochemistry Quiz', type: 'QUIZ', topicSlug: 'water-properties', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Cell Structure & Organelles', type: 'LESSON', topicSlug: 'cell-organelles', dayOfWeek: 0 },
      { title: 'Membrane Transport', type: 'LESSON', topicSlug: 'cell-organelles', dayOfWeek: 2 },
      { title: 'Cell Biology Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Cell Biology Quiz', type: 'QUIZ', topicSlug: 'cell-organelles', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Cellular Respiration', type: 'LESSON', topicSlug: 'cellular-respiration', dayOfWeek: 0 },
      { title: 'Photosynthesis', type: 'LESSON', topicSlug: 'photosynthesis', dayOfWeek: 2 },
      { title: 'Energy Practice Problems', type: 'PRACTICE', topicSlug: 'cellular-respiration', dayOfWeek: 4 },
      { title: 'Respiration & Photosynthesis Quiz', type: 'QUIZ', topicSlug: 'cellular-respiration', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Cell Cycle & Mitosis', type: 'LESSON', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 0 },
      { title: 'Meiosis & Genetic Variation', type: 'LESSON', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 2 },
      { title: 'Cell Division Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Cell Division Quiz', type: 'QUIZ', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'DNA Replication', type: 'LESSON', topicSlug: 'dna-replication', dayOfWeek: 0 },
      { title: 'Transcription & Translation', type: 'LESSON', topicSlug: 'dna-replication', dayOfWeek: 2 },
      { title: 'Gene Regulation', type: 'LESSON', topicSlug: 'gene-regulation', dayOfWeek: 4 },
      { title: 'Molecular Biology Quiz', type: 'QUIZ', topicSlug: 'dna-replication', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Mendelian Genetics', type: 'LESSON', topicSlug: 'mendelian-genetics', dayOfWeek: 0 },
      { title: 'Non-Mendelian Inheritance', type: 'LESSON', topicSlug: 'mendelian-genetics', dayOfWeek: 2 },
      { title: 'Genetics Practice Problems', type: 'PRACTICE', topicSlug: 'mendelian-genetics', dayOfWeek: 4 },
      { title: 'Genetics Quiz', type: 'QUIZ', topicSlug: 'mendelian-genetics', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Biotechnology & Applications', type: 'LESSON', topicSlug: undefined, dayOfWeek: 0 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Genetics Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Evolution: Evidence & Mechanisms', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 0 },
      { title: 'Speciation & Hardy-Weinberg', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 2 },
      { title: 'Evolution Quiz', type: 'QUIZ', topicSlug: 'natural-selection', dayOfWeek: 4 },
      { title: 'Evolution Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Ecology: Populations & Communities', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 0 },
      { title: 'Ecosystems & Energy Flow', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 2 },
      { title: 'Animal Physiology Overview', type: 'LESSON', topicSlug: undefined, dayOfWeek: 4 },
      { title: 'Ecology Quiz', type: 'QUIZ', topicSlug: 'population-ecology', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full AP Biology Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice', type: 'PRACTICE', dayOfWeek: 3 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Second Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '16-week-bio-comprehensive',
  title: '16-Week AP Biology Mastery',
  description: 'In-depth study plan covering all AP Biology units with lab analysis, data interpretation, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take AP Biology Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Chemistry of Life', type: 'LESSON', topicSlug: 'water-properties', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Water Properties & Macromolecules', type: 'LESSON', topicSlug: 'water-properties', dayOfWeek: 0 }, { title: 'Enzymes', type: 'LESSON', topicSlug: 'water-properties', dayOfWeek: 2 }, { title: 'Biochemistry Quiz', type: 'QUIZ', topicSlug: 'water-properties', dayOfWeek: 4 }, { title: 'Biochemistry Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Cell Structure', type: 'LESSON', topicSlug: 'cell-organelles', dayOfWeek: 0 }, { title: 'Membrane Transport', type: 'LESSON', topicSlug: 'cell-organelles', dayOfWeek: 2 }, { title: 'Cell Signaling', type: 'LESSON', topicSlug: 'cell-signaling', dayOfWeek: 4 }, { title: 'Cell Biology Quiz', type: 'QUIZ', topicSlug: 'cell-organelles', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Cellular Respiration Deep Dive', type: 'LESSON', topicSlug: 'cellular-respiration', dayOfWeek: 0 }, { title: 'Photosynthesis Deep Dive', type: 'LESSON', topicSlug: 'photosynthesis', dayOfWeek: 2 }, { title: 'Energy Conversion Practice', type: 'PRACTICE', topicSlug: 'cellular-respiration', dayOfWeek: 4 }, { title: 'Energy Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Cell Cycle & Mitosis', type: 'LESSON', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 0 }, { title: 'Meiosis', type: 'LESSON', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 2 }, { title: 'Cell Division Practice', type: 'PRACTICE', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 4 }, { title: 'Cell Division Quiz', type: 'QUIZ', topicSlug: 'cell-cycle-mitosis', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'DNA Structure & Replication', type: 'LESSON', topicSlug: 'dna-replication', dayOfWeek: 0 }, { title: 'Transcription', type: 'LESSON', topicSlug: 'dna-replication', dayOfWeek: 2 }, { title: 'Translation', type: 'LESSON', topicSlug: 'dna-replication', dayOfWeek: 4 }, { title: 'Central Dogma Quiz', type: 'QUIZ', topicSlug: 'dna-replication', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Gene Regulation (Prokaryotes)', type: 'LESSON', topicSlug: 'gene-regulation', dayOfWeek: 0 }, { title: 'Gene Regulation (Eukaryotes)', type: 'LESSON', topicSlug: 'gene-regulation', dayOfWeek: 2 }, { title: 'Mutations & Biotechnology', type: 'LESSON', topicSlug: undefined, dayOfWeek: 4 }, { title: 'Gene Expression Quiz', type: 'QUIZ', topicSlug: 'gene-regulation', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Mendelian Genetics', type: 'LESSON', topicSlug: 'mendelian-genetics', dayOfWeek: 0 }, { title: 'Chi-Square & Probability', type: 'LESSON', topicSlug: 'mendelian-genetics', dayOfWeek: 2 }, { title: 'Non-Mendelian Genetics', type: 'LESSON', topicSlug: 'mendelian-genetics', dayOfWeek: 4 }, { title: 'Genetics Practice', type: 'PRACTICE', topicSlug: 'mendelian-genetics', dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM', dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Evidence for Evolution', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 0 }, { title: 'Natural Selection & Adaptation', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 2 }, { title: 'Speciation', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 4 }, { title: 'Evolution Quiz', type: 'QUIZ', topicSlug: 'natural-selection', dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Hardy-Weinberg & Population Genetics', type: 'LESSON', topicSlug: 'natural-selection', dayOfWeek: 0 }, { title: 'Phylogenetics & Cladograms', type: 'LESSON', topicSlug: 'phylogeny-classification', dayOfWeek: 2 }, { title: 'Evolution Practice', type: 'PRACTICE', topicSlug: 'natural-selection', dayOfWeek: 4 }, { title: 'Evolution Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Population Ecology', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 0 }, { title: 'Community Ecology', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 2 }, { title: 'Ecosystems & Energy Flow', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 4 }, { title: 'Ecology Quiz', type: 'QUIZ', topicSlug: 'population-ecology', dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Biogeochemical Cycles', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 0 }, { title: 'Biodiversity & Conservation', type: 'LESSON', topicSlug: 'population-ecology', dayOfWeek: 2 }, { title: 'Ecology Practice', type: 'PRACTICE', topicSlug: 'population-ecology', dayOfWeek: 4 }, { title: 'Ecology Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Animal Physiology: Nervous System', type: 'LESSON', topicSlug: undefined, dayOfWeek: 0 }, { title: 'Animal Physiology: Immune System', type: 'LESSON', topicSlug: undefined, dayOfWeek: 2 }, { title: 'Plant Biology', type: 'LESSON', topicSlug: undefined, dayOfWeek: 4 }, { title: 'Physiology Quiz', type: 'QUIZ', topicSlug: undefined, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM', dayOfWeek: 5 }]),
  ],
}

export const AP_BIO_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Biology',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-biology', label: 'AP Biology' },
  apiEndpoint: '/api/ap-bio-study-plans',
  diagnosticPrefix: 'ap-bio-diagnostic',
  accent: 'green',
  examLabel: 'AP Exam Date',
  plans: AP_BIO_PLANS,
}
