import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Organic Chemistry 2 (verified via getAllInteractiveSlugs):
//   aromatic-compounds-benzene, electrophilic-aromatic-substitution, aldehydes-ketones-reactions,
//   carboxylic-acids-derivatives, enolate-chemistry, amines-nitrogen-compounds,
//   amino-acids-proteins, carbohydrates-biochemistry, lipids-nucleic-acids, nmr-spectroscopy

const sprint: StudyPlanTemplate = {
  id: '6-week-ochem2-sprint',
  title: '6-Week Organic Chemistry 2 Sprint',
  description: 'A fast pass through the second-semester core — aromatics, carbonyl chemistry, enolates, and amines — for students reviewing before a final or the MCAT.',
  durationWeeks: 6, targetImprovement: '1 letter grade', weeklyHours: '6–9 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Organic Chemistry 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Aromaticity & Hückel\'s Rule', type: 'LESSON', topicSlug: 'aromatic-compounds-benzene', dayOfWeek: 1 },
      { title: 'Electrophilic Aromatic Substitution', type: 'LESSON', topicSlug: 'electrophilic-aromatic-substitution', dayOfWeek: 3 },
      { title: 'Aromatic Reagent Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Substituent Effects & Directing Groups', type: 'LESSON', topicSlug: 'electrophilic-aromatic-substitution', dayOfWeek: 0 },
      { title: 'Multi-Step Aromatic Synthesis', type: 'PRACTICE', topicSlug: 'electrophilic-aromatic-substitution', dayOfWeek: 2 },
      { title: 'Unit 1 Test: Aromatic Chemistry', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Unit 1 Errors', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Nucleophilic Addition to Carbonyls', type: 'LESSON', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 0 },
      { title: 'Acetals, Imines & Enamines', type: 'LESSON', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 2 },
      { title: 'Carbonyl Practice Set', type: 'PRACTICE', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 4 },
      { title: 'Unit 2 Test: Aldehydes & Ketones', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Carboxylic Acid Derivative Reactivity', type: 'LESSON', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 0 },
      { title: 'Esterification & Hydrolysis', type: 'LESSON', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 2 },
      { title: 'Acyl Substitution Practice', type: 'PRACTICE', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 4 },
      { title: 'Unit 3 Test: Acids & Derivatives', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Enols, Enolates & Tautomerization', type: 'LESSON', topicSlug: 'enolate-chemistry', dayOfWeek: 0 },
      { title: 'Aldol & Claisen Condensations', type: 'LESSON', topicSlug: 'enolate-chemistry', dayOfWeek: 2 },
      { title: 'Michael Addition & Robinson Annulation', type: 'PRACTICE', topicSlug: 'enolate-chemistry', dayOfWeek: 4 },
      { title: 'Unit 4 Test: Enols & Condensations', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Amine Basicity & Synthesis', type: 'LESSON', topicSlug: 'amines-nitrogen-compounds', dayOfWeek: 0 },
      { title: 'Advanced NMR Interpretation', type: 'LESSON', topicSlug: 'nmr-spectroscopy', dayOfWeek: 1 },
      { title: 'Full Organic Chemistry 2 Practice Test', type: 'PRACTICE', dayOfWeek: 3 },
      { title: 'Review Missed Mechanisms', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '12-week-ochem2-standard',
  title: '12-Week Organic Chemistry 2 Plan',
  description: 'A full-semester pace through Organic Chemistry 2, with a unit test after each block, weekly synthesis practice, and a biomolecules and spectroscopy finish.',
  durationWeeks: 12, targetImprovement: '1–2 letter grades', weeklyHours: '7–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Organic Chemistry 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Benzene & the Criteria for Aromaticity', type: 'LESSON', topicSlug: 'aromatic-compounds-benzene', dayOfWeek: 3 },
      { title: 'Aromaticity Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Hückel\'s Rule & Heterocycles', type: 'LESSON', topicSlug: 'aromatic-compounds-benzene', dayOfWeek: 0 },
      { title: 'Aromatic vs Antiaromatic vs Nonaromatic', type: 'PRACTICE', topicSlug: 'aromatic-compounds-benzene', dayOfWeek: 2 },
      { title: 'The EAS Mechanism', type: 'LESSON', topicSlug: 'electrophilic-aromatic-substitution', dayOfWeek: 4 },
      { title: 'EAS Reagent Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Activating & Deactivating Substituents', type: 'LESSON', topicSlug: 'electrophilic-aromatic-substitution', dayOfWeek: 0 },
      { title: 'Ordering Steps in Aromatic Synthesis', type: 'PRACTICE', topicSlug: 'electrophilic-aromatic-substitution', dayOfWeek: 2 },
      { title: 'Unit 1 Test: Aromatic Chemistry', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Unit 1 Errors', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Nucleophilic Addition & Carbonyl Reactivity', type: 'LESSON', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 0 },
      { title: 'Grignard, Hydride & Wittig Reactions', type: 'LESSON', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 2 },
      { title: 'Carbonyl Addition Practice', type: 'PRACTICE', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 4 },
      { title: 'Carbonyl Reagent Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Acetals & Protecting Group Strategy', type: 'LESSON', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 0 },
      { title: 'Imines, Enamines & Reductive Amination', type: 'LESSON', topicSlug: 'aldehydes-ketones-reactions', dayOfWeek: 2 },
      { title: 'Unit 2 Test: Aldehydes & Ketones', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Unit 2 Errors', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'The Reactivity Ladder of Acid Derivatives', type: 'LESSON', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 0 },
      { title: 'Nucleophilic Acyl Substitution', type: 'LESSON', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 2 },
      { title: 'Acyl Substitution Practice', type: 'PRACTICE', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 4 },
      { title: 'Derivative Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Fischer Esterification & Saponification', type: 'LESSON', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 0 },
      { title: 'Nitriles, Amides & Decarboxylation', type: 'LESSON', topicSlug: 'carboxylic-acids-derivatives', dayOfWeek: 2 },
      { title: 'Unit 3 Test: Acids & Derivatives', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Unit 3 Errors', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Keto-Enol Tautomerization & Alpha Acidity', type: 'LESSON', topicSlug: 'enolate-chemistry', dayOfWeek: 0 },
      { title: 'Kinetic vs Thermodynamic Enolates', type: 'LESSON', topicSlug: 'enolate-chemistry', dayOfWeek: 2 },
      { title: 'Enolate Practice Set', type: 'PRACTICE', topicSlug: 'enolate-chemistry', dayOfWeek: 4 },
      { title: 'Enolate Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'The Aldol Reaction & Condensation', type: 'LESSON', topicSlug: 'enolate-chemistry', dayOfWeek: 0 },
      { title: 'Claisen & Dieckmann Condensations', type: 'LESSON', topicSlug: 'enolate-chemistry', dayOfWeek: 2 },
      { title: 'Michael Addition & Robinson Annulation', type: 'PRACTICE', topicSlug: 'enolate-chemistry', dayOfWeek: 4 },
      { title: 'Unit 4 Test: Enols & Condensations', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Amine Basicity & Structure', type: 'LESSON', topicSlug: 'amines-nitrogen-compounds', dayOfWeek: 0 },
      { title: 'Amine Synthesis: Gabriel, Reduction & Reductive Amination', type: 'LESSON', topicSlug: 'amines-nitrogen-compounds', dayOfWeek: 2 },
      { title: 'Amine Practice Set', type: 'PRACTICE', topicSlug: 'amines-nitrogen-compounds', dayOfWeek: 4 },
      { title: 'Amine Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Amino Acids & Peptide Structure', type: 'LESSON', topicSlug: 'amino-acids-proteins', dayOfWeek: 0 },
      { title: 'Carbohydrates & Anomeric Chemistry', type: 'LESSON', topicSlug: 'carbohydrates-biochemistry', dayOfWeek: 1 },
      { title: 'Lipids & Nucleic Acids', type: 'LESSON', topicSlug: 'lipids-nucleic-acids', dayOfWeek: 3 },
      { title: 'Unit 5 Test: Amines & Biomolecules', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Advanced NMR: Splitting, DEPT & COSY', type: 'LESSON', topicSlug: 'nmr-spectroscopy', dayOfWeek: 0 },
      { title: 'Structure Elucidation Problem Set', type: 'PRACTICE', topicSlug: 'nmr-spectroscopy', dayOfWeek: 1 },
      { title: 'Full Organic Chemistry 2 Practice Test', type: 'PRACTICE', dayOfWeek: 3 },
      { title: 'Retrosynthesis Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const OCHEM2_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Organic Chemistry 2',
  description: 'Choose a study schedule for Organic Chemistry 2 covering aromatics, carbonyl chemistry, carboxylic acid derivatives, enolate condensations, amines, and biomolecules.',
  backLink: { href: '/courses/organic-chemistry-2', label: 'Organic Chemistry 2' },
  apiEndpoint: '/api/ochem2-study-plans',
  accent: 'amber',
  examLabel: 'Target Exam Date',
  plans: OCHEM2_PLANS,
  diagnosticPrefix: 'ochem2-diagnostic',
}
