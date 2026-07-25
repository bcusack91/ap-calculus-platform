import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Organic Chemistry 1 (verified via getAllInteractiveSlugs):
//   atomic-structure-bonding-ochem, acids-bases-organic, stereochemistry-chirality,
//   nucleophilic-substitution, elimination-reactions, alkenes-reactions,
//   alkynes-synthesis, radical-reactions, alcohols-ethers, infrared-mass-spectrometry

const sprint: StudyPlanTemplate = {
  id: '6-week-ochem1-sprint',
  title: '6-Week Organic Chemistry 1 Sprint',
  description: 'A fast pass through the first-semester core — bonding and resonance, stereochemistry, substitution and elimination, and alkene chemistry — for students reviewing before a final or placement exam.',
  durationWeeks: 6, targetImprovement: '1 letter grade', weeklyHours: '6–9 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Organic Chemistry 1 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Structure, Bonding & Hybridization', type: 'LESSON', topicSlug: 'atomic-structure-bonding-ochem', dayOfWeek: 1 },
      { title: 'Resonance & Formal Charge', type: 'LESSON', topicSlug: 'atomic-structure-bonding-ochem', dayOfWeek: 3 },
      { title: 'Bonding Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Organic Acids & Bases', type: 'LESSON', topicSlug: 'acids-bases-organic', dayOfWeek: 0 },
      { title: 'Unit 1 Test: Structure & Bonding', type: 'QUIZ', dayOfWeek: 2 },
      { title: 'Chirality & R/S Configuration', type: 'LESSON', topicSlug: 'stereochemistry-chirality', dayOfWeek: 4 },
      { title: 'Stereochemistry Practice', type: 'PRACTICE', topicSlug: 'stereochemistry-chirality', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Conformational Analysis', type: 'LESSON', topicSlug: 'stereochemistry-chirality', dayOfWeek: 0 },
      { title: 'Unit 2 Test: Stereochemistry', type: 'QUIZ', dayOfWeek: 2 },
      { title: 'SN1 vs SN2', type: 'LESSON', topicSlug: 'nucleophilic-substitution', dayOfWeek: 4 },
      { title: 'Substitution Practice', type: 'PRACTICE', topicSlug: 'nucleophilic-substitution', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'E1 vs E2 Elimination', type: 'LESSON', topicSlug: 'elimination-reactions', dayOfWeek: 0 },
      { title: 'Choosing Between SN1/SN2/E1/E2', type: 'PRACTICE', topicSlug: 'elimination-reactions', dayOfWeek: 2 },
      { title: 'Unit 3 Test: Substitution & Elimination', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Mechanism Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Alkene Addition Reactions', type: 'LESSON', topicSlug: 'alkenes-reactions', dayOfWeek: 0 },
      { title: 'Alkyne Chemistry', type: 'LESSON', topicSlug: 'alkynes-synthesis', dayOfWeek: 2 },
      { title: 'Radical Reactions', type: 'LESSON', topicSlug: 'radical-reactions', dayOfWeek: 4 },
      { title: 'Unit 4 Test: Alkenes & Alkynes', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Alcohols, Ethers & Epoxides', type: 'LESSON', topicSlug: 'alcohols-ethers', dayOfWeek: 0 },
      { title: 'IR & Mass Spectrometry', type: 'LESSON', topicSlug: 'infrared-mass-spectrometry', dayOfWeek: 1 },
      { title: 'Full Organic Chemistry 1 Practice Test', type: 'PRACTICE', dayOfWeek: 3 },
      { title: 'Review Missed Mechanisms', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '12-week-ochem1-standard',
  title: '12-Week Organic Chemistry 1 Plan',
  description: 'A full-semester pace through Organic Chemistry 1, with a unit test after each block and weekly mechanism practice — built for students taking the course rather than cramming for it.',
  durationWeeks: 12, targetImprovement: '1–2 letter grades', weeklyHours: '7–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Organic Chemistry 1 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Lewis Structures & Hybridization', type: 'LESSON', topicSlug: 'atomic-structure-bonding-ochem', dayOfWeek: 3 },
      { title: 'Bonding Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Resonance & Curved Arrows', type: 'LESSON', topicSlug: 'atomic-structure-bonding-ochem', dayOfWeek: 0 },
      { title: 'Formal Charge Practice', type: 'PRACTICE', topicSlug: 'atomic-structure-bonding-ochem', dayOfWeek: 2 },
      { title: 'Functional Group Recognition', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Bonding Quiz', type: 'QUIZ', topicSlug: 'atomic-structure-bonding-ochem', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Acid-Base Theory in Organic Chemistry', type: 'LESSON', topicSlug: 'acids-bases-organic', dayOfWeek: 0 },
      { title: 'Ranking Acidity & Predicting Equilibria', type: 'PRACTICE', topicSlug: 'acids-bases-organic', dayOfWeek: 2 },
      { title: 'Unit 1 Test: Structure & Bonding', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Unit 1 Errors', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Chirality & Stereocenters', type: 'LESSON', topicSlug: 'stereochemistry-chirality', dayOfWeek: 0 },
      { title: 'Assigning R/S Configuration', type: 'PRACTICE', topicSlug: 'stereochemistry-chirality', dayOfWeek: 2 },
      { title: 'Enantiomers vs Diastereomers', type: 'LESSON', topicSlug: 'stereochemistry-chirality', dayOfWeek: 4 },
      { title: 'Stereochemistry Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Newman Projections & Conformations', type: 'LESSON', topicSlug: 'stereochemistry-chirality', dayOfWeek: 0 },
      { title: 'Cyclohexane Chair Analysis', type: 'PRACTICE', topicSlug: 'stereochemistry-chirality', dayOfWeek: 2 },
      { title: 'Unit 2 Test: Stereochemistry', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Unit 2 Errors', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'The SN2 Mechanism', type: 'LESSON', topicSlug: 'nucleophilic-substitution', dayOfWeek: 0 },
      { title: 'The SN1 Mechanism & Carbocations', type: 'LESSON', topicSlug: 'nucleophilic-substitution', dayOfWeek: 2 },
      { title: 'Substitution Practice Set', type: 'PRACTICE', topicSlug: 'nucleophilic-substitution', dayOfWeek: 4 },
      { title: 'Nucleophile & Leaving Group Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'The E2 Mechanism & Anti-Periplanar Geometry', type: 'LESSON', topicSlug: 'elimination-reactions', dayOfWeek: 0 },
      { title: 'The E1 Mechanism & Zaitsev\'s Rule', type: 'LESSON', topicSlug: 'elimination-reactions', dayOfWeek: 2 },
      { title: 'Deciding Among SN1/SN2/E1/E2', type: 'PRACTICE', topicSlug: 'elimination-reactions', dayOfWeek: 4 },
      { title: 'Unit 3 Test: Substitution & Elimination', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Markovnikov & Anti-Markovnikov Addition', type: 'LESSON', topicSlug: 'alkenes-reactions', dayOfWeek: 0 },
      { title: 'Hydroboration & Oxymercuration', type: 'LESSON', topicSlug: 'alkenes-reactions', dayOfWeek: 2 },
      { title: 'Alkene Reaction Practice', type: 'PRACTICE', topicSlug: 'alkenes-reactions', dayOfWeek: 4 },
      { title: 'Alkene Reagent Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Alkyne Acidity & Acetylide Chemistry', type: 'LESSON', topicSlug: 'alkynes-synthesis', dayOfWeek: 0 },
      { title: 'Alkyne Reduction: Lindlar vs Na/NH₃', type: 'LESSON', topicSlug: 'alkynes-synthesis', dayOfWeek: 2 },
      { title: 'Radical Halogenation', type: 'LESSON', topicSlug: 'radical-reactions', dayOfWeek: 4 },
      { title: 'Unit 4 Test: Alkenes & Alkynes', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Alcohol Synthesis & Oxidation', type: 'LESSON', topicSlug: 'alcohols-ethers', dayOfWeek: 0 },
      { title: 'Ethers & Epoxide Ring Opening', type: 'LESSON', topicSlug: 'alcohols-ethers', dayOfWeek: 2 },
      { title: 'Alcohol & Ether Practice', type: 'PRACTICE', topicSlug: 'alcohols-ethers', dayOfWeek: 4 },
      { title: 'Oxidation State Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'IR Spectroscopy: Reading Functional Groups', type: 'LESSON', topicSlug: 'infrared-mass-spectrometry', dayOfWeek: 0 },
      { title: 'Mass Spectrometry & Isotope Patterns', type: 'LESSON', topicSlug: 'infrared-mass-spectrometry', dayOfWeek: 2 },
      { title: 'Spectroscopy Problem Set', type: 'PRACTICE', topicSlug: 'infrared-mass-spectrometry', dayOfWeek: 4 },
      { title: 'Unit 5 Test: Alcohols & Spectroscopy', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Full Organic Chemistry 1 Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Missed Mechanisms', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Reagent Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Synthesis Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const OCHEM1_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Organic Chemistry 1',
  description: 'Choose a study schedule for Organic Chemistry 1 covering structure and bonding, stereochemistry, substitution and elimination, alkenes and alkynes, and introductory spectroscopy.',
  backLink: { href: '/organic-chemistry-1', label: 'Organic Chemistry 1' },
  apiEndpoint: '/api/ochem1-study-plans',
  accent: 'emerald',
  examLabel: 'Target Exam Date',
  plans: OCHEM1_PLANS,
  diagnosticPrefix: 'ochem1-diagnostic',
}
