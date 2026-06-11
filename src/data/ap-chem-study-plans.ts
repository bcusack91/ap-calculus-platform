import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-chem-sprint',
  title: '4-Week AP Chemistry Sprint',
  description: 'Rapid review of core AP Chemistry concepts — atoms, bonding, stoichiometry, equilibrium, and thermodynamics — for students who need a quick refresh before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Chemistry Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Atomic Structure & Periodicity Review', type: 'LESSON', topicSlug: 'electron-configuration', dayOfWeek: 1 },
      { title: 'Chemical Bonding Review', type: 'LESSON', topicSlug: 'types-of-chemical-bonds', dayOfWeek: 3 },
      { title: 'Atomic Structure Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Stoichiometry & Reactions', type: 'LESSON', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 0 },
      { title: 'Gas Laws', type: 'LESSON', topicSlug: 'ideal-gas-law', dayOfWeek: 2 },
      { title: 'Stoichiometry Quiz', type: 'QUIZ', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 4 },
      { title: 'Reaction Types Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Thermodynamics & Enthalpy', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 0 },
      { title: 'Chemical Kinetics', type: 'LESSON', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 2 },
      { title: 'Equilibrium', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 4 },
      { title: 'Thermo & Kinetics Quiz', type: 'QUIZ', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Acids, Bases & pH', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 0 },
      { title: 'Full AP Chemistry Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-chem-standard',
  title: '10-Week AP Chemistry Plan',
  description: 'Systematic coverage of all AP Chemistry units with quizzes, practice problems, and flashcard drills. Great for steady, consistent preparation.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Chemistry Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Atomic Structure Lesson', type: 'LESSON', topicSlug: 'electron-configuration', dayOfWeek: 1 },
      { title: 'Electron Configuration', type: 'LESSON', topicSlug: 'electron-configuration', dayOfWeek: 3 },
      { title: 'Periodicity Trends', type: 'LESSON', topicSlug: 'periodic-trends', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Ionic & Covalent Bonding', type: 'LESSON', topicSlug: 'types-of-chemical-bonds', dayOfWeek: 0 },
      { title: 'Lewis Structures & VSEPR', type: 'LESSON', topicSlug: 'lewis-structures-formal-charge', dayOfWeek: 2 },
      { title: 'Intermolecular Forces', type: 'LESSON', topicSlug: 'types-intermolecular-forces', dayOfWeek: 4 },
      { title: 'Bonding Quiz', type: 'QUIZ', topicSlug: 'types-of-chemical-bonds', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Stoichiometry Fundamentals', type: 'LESSON', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 0 },
      { title: 'Limiting Reagents & Percent Yield', type: 'LESSON', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 2 },
      { title: 'Stoichiometry Practice', type: 'PRACTICE', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 4 },
      { title: 'Stoichiometry Quiz', type: 'QUIZ', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Chemical Reactions & Types', type: 'LESSON', topicSlug: 'reaction-types', dayOfWeek: 0 },
      { title: 'Redox Reactions', type: 'LESSON', topicSlug: 'oxidation-reduction-reactions', dayOfWeek: 2 },
      { title: 'Reactions Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Reaction Types Practice', type: 'PRACTICE', topicSlug: 'reaction-types', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Gas Laws & Ideal Gas Equation', type: 'LESSON', topicSlug: 'ideal-gas-law', dayOfWeek: 0 },
      { title: 'Solutions & Concentration', type: 'LESSON', topicSlug: 'solutions-solubility', dayOfWeek: 2 },
      { title: 'Gas Laws Quiz', type: 'QUIZ', topicSlug: 'ideal-gas-law', dayOfWeek: 4 },
      { title: 'Mid-Course Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Thermodynamics: Enthalpy', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 0 },
      { title: 'Hess\'s Law & Calorimetry', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 2 },
      { title: 'Entropy & Gibbs Free Energy', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 4 },
      { title: 'Thermodynamics Quiz', type: 'QUIZ', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Chemical Kinetics: Rates', type: 'LESSON', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 0 },
      { title: 'Rate Laws & Reaction Order', type: 'LESSON', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 2 },
      { title: 'Kinetics Practice', type: 'PRACTICE', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 4 },
      { title: 'Kinetics Quiz', type: 'QUIZ', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Chemical Equilibrium', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 0 },
      { title: 'Le Chatelier\'s Principle', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 2 },
      { title: 'Equilibrium Practice', type: 'PRACTICE', topicSlug: 'intro-equilibrium', dayOfWeek: 4 },
      { title: 'Equilibrium Quiz', type: 'QUIZ', topicSlug: 'intro-equilibrium', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Acids & Bases', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 0 },
      { title: 'pH Calculations & Buffers', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 2 },
      { title: 'Electrochemistry Basics', type: 'LESSON', topicSlug: 'galvanic-cells-potentials', dayOfWeek: 4 },
      { title: 'Acids/Bases Quiz', type: 'QUIZ', topicSlug: 'acid-base-theories-ph', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full AP Chemistry Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Target Weak Topics', type: 'CUSTOM', dayOfWeek: 3 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Second Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '18-week-chem-comprehensive',
  title: '18-Week AP Chemistry Mastery',
  description: 'Comprehensive study plan covering every AP Chemistry unit in depth, with lab-style problem solving, multiple practice exams, and detailed review cycles.',
  durationWeeks: 18, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Chemistry Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review: Math for Chemistry', type: 'LESSON', dayOfWeek: 1 },
      { title: 'Review: Scientific Notation & Sig Figs', type: 'LESSON', dayOfWeek: 3 },
      { title: 'Set Study Goals', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Atomic Theory & Models', type: 'LESSON', topicSlug: 'electron-configuration', dayOfWeek: 0 },
      { title: 'Quantum Numbers & Orbitals', type: 'LESSON', topicSlug: 'electron-configuration', dayOfWeek: 2 },
      { title: 'Electron Configuration', type: 'LESSON', topicSlug: 'electron-configuration', dayOfWeek: 4 },
      { title: 'Atomic Structure Quiz', type: 'QUIZ', topicSlug: 'electron-configuration', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Periodic Trends', type: 'LESSON', topicSlug: 'periodic-trends', dayOfWeek: 0 },
      { title: 'Ionic Bonding & Lattice Energy', type: 'LESSON', topicSlug: 'types-of-chemical-bonds', dayOfWeek: 2 },
      { title: 'Covalent Bonding', type: 'LESSON', topicSlug: 'types-of-chemical-bonds', dayOfWeek: 4 },
      { title: 'Bonding Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Lewis Structures', type: 'LESSON', topicSlug: 'lewis-structures-formal-charge', dayOfWeek: 0 },
      { title: 'VSEPR Theory', type: 'LESSON', topicSlug: 'lewis-structures-formal-charge', dayOfWeek: 2 },
      { title: 'Molecular Polarity', type: 'LESSON', topicSlug: 'types-intermolecular-forces', dayOfWeek: 4 },
      { title: 'Structure & Bonding Quiz', type: 'QUIZ', topicSlug: 'types-of-chemical-bonds', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Intermolecular Forces', type: 'LESSON', topicSlug: 'types-intermolecular-forces', dayOfWeek: 0 },
      { title: 'Properties of Solids, Liquids, Gases', type: 'LESSON', topicSlug: 'types-intermolecular-forces', dayOfWeek: 2 },
      { title: 'IMF Practice Problems', type: 'PRACTICE', topicSlug: 'types-intermolecular-forces', dayOfWeek: 4 },
      { title: 'IMF Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Moles & Molar Mass', type: 'LESSON', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 0 },
      { title: 'Balancing Equations', type: 'LESSON', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 2 },
      { title: 'Stoichiometry Calculations', type: 'PRACTICE', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 4 },
      { title: 'Stoichiometry Quiz', type: 'QUIZ', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Limiting Reagent & Percent Yield', type: 'LESSON', topicSlug: 'stoichiometry-limiting-reactants', dayOfWeek: 0 },
      { title: 'Solution Stoichiometry', type: 'LESSON', topicSlug: 'solutions-solubility', dayOfWeek: 2 },
      { title: 'Types of Reactions', type: 'LESSON', topicSlug: 'reaction-types', dayOfWeek: 4 },
      { title: 'Reactions Practice', type: 'PRACTICE', topicSlug: 'reaction-types', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Redox Reactions & Balancing', type: 'LESSON', topicSlug: 'oxidation-reduction-reactions', dayOfWeek: 0 },
      { title: 'Gas Laws (Boyle, Charles, Avogadro)', type: 'LESSON', topicSlug: 'ideal-gas-law', dayOfWeek: 2 },
      { title: 'Ideal Gas Law', type: 'LESSON', topicSlug: 'ideal-gas-law', dayOfWeek: 4 },
      { title: 'Gas Laws Quiz', type: 'QUIZ', topicSlug: 'ideal-gas-law', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Kinetic Molecular Theory', type: 'LESSON', topicSlug: 'ideal-gas-law', dayOfWeek: 4 },
      { title: 'Gas Laws Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Energy & Enthalpy', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 0 },
      { title: 'Calorimetry', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 2 },
      { title: 'Hess\'s Law', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 4 },
      { title: 'Thermodynamics Quiz', type: 'QUIZ', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Entropy & Spontaneity', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 0 },
      { title: 'Gibbs Free Energy', type: 'LESSON', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 2 },
      { title: 'Thermodynamics Practice', type: 'PRACTICE', topicSlug: 'enthalpy-calorimetry', dayOfWeek: 4 },
      { title: 'Thermo Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Reaction Rates & Factors', type: 'LESSON', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 0 },
      { title: 'Rate Laws', type: 'LESSON', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 2 },
      { title: 'Reaction Mechanisms', type: 'LESSON', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 4 },
      { title: 'Kinetics Quiz', type: 'QUIZ', topicSlug: 'reaction-rates-and-rate-laws', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'Equilibrium Expressions', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 0 },
      { title: 'ICE Tables', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 2 },
      { title: 'Le Chatelier\'s Principle', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 4 },
      { title: 'Equilibrium Quiz', type: 'QUIZ', topicSlug: 'intro-equilibrium', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Acids & Bases: Definitions', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 0 },
      { title: 'pH, pOH & Ka/Kb', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 2 },
      { title: 'Buffers', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 4 },
      { title: 'Acids/Bases Practice', type: 'PRACTICE', topicSlug: 'acid-base-theories-ph', dayOfWeek: 5 },
    ]),
    ...weekTasks(14, [
      { title: 'Titrations & Titration Curves', type: 'LESSON', topicSlug: 'acid-base-theories-ph', dayOfWeek: 0 },
      { title: 'Solubility Equilibria (Ksp)', type: 'LESSON', topicSlug: 'intro-equilibrium', dayOfWeek: 2 },
      { title: 'Acids & Bases Quiz', type: 'QUIZ', topicSlug: 'acid-base-theories-ph', dayOfWeek: 4 },
      { title: 'Acid-Base Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(15, [
      { title: 'Electrochemistry: Voltaic Cells', type: 'LESSON', topicSlug: 'galvanic-cells-potentials', dayOfWeek: 0 },
      { title: 'Electrolytic Cells & Faraday\'s Law', type: 'LESSON', topicSlug: 'galvanic-cells-potentials', dayOfWeek: 2 },
      { title: 'Electrochemistry Quiz', type: 'QUIZ', topicSlug: 'galvanic-cells-potentials', dayOfWeek: 4 },
      { title: 'Electrochemistry Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(16, [
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice: Equilibrium & Acid-Base', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Comprehensive Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(17, [
      { title: 'Full Practice Exam #3', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Final Topic Review', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Strategy & Tips', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_CHEM_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Chemistry',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-chemistry', label: 'AP Chemistry' },
  apiEndpoint: '/api/ap-chem-study-plans',
  diagnosticPrefix: 'ap-chem-diagnostic',
  accent: 'emerald',
  examLabel: 'AP Exam Date',
  plans: AP_CHEM_PLANS,
}
