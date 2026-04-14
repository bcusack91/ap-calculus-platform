import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-physics-c-em-sprint',
  title: '4-Week AP Physics C: E&M Sprint',
  description: 'Fast-paced review of electrostatics, circuits, magnetism, and electromagnetic induction for students needing a final push before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Physics C E&M Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Electric Fields & Coulomb\'s Law', type: 'LESSON', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 1 },
      { title: 'Gauss\'s Law', type: 'LESSON', topicSlug: 'physics-c-gauss-law', dayOfWeek: 3 },
      { title: 'Electrostatics Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Electric Potential', type: 'LESSON', topicSlug: 'physics-c-electric-potential', dayOfWeek: 0 },
      { title: 'Capacitors & Dielectrics', type: 'LESSON', topicSlug: 'physics-c-capacitors-dielectrics', dayOfWeek: 2 },
      { title: 'DC Circuits & RC Circuits', type: 'LESSON', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 4 },
      { title: 'Circuits Quiz', type: 'QUIZ', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Magnetic Forces & Fields', type: 'LESSON', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 0 },
      { title: 'Sources of Magnetic Fields', type: 'LESSON', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 2 },
      { title: 'Faraday\'s & Lenz\'s Law', type: 'LESSON', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 4 },
      { title: 'Magnetism Quiz', type: 'QUIZ', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-physics-c-em-standard',
  title: '10-Week AP Physics C: E&M Plan',
  description: 'Thorough coverage of all E&M topics with calculus-based problem solving, Gauss/Ampère/Faraday law applications, and circuit analysis.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Physics C E&M Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Electric Charge & Coulomb\'s Law', type: 'LESSON', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 1 },
      { title: 'Electric Field Calculations', type: 'PRACTICE', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 3 },
      { title: 'Coulomb\'s Law Quiz', type: 'QUIZ', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Gauss\'s Law', type: 'LESSON', topicSlug: 'physics-c-gauss-law', dayOfWeek: 0 },
      { title: 'Gauss\'s Law Applications', type: 'PRACTICE', topicSlug: 'physics-c-gauss-law', dayOfWeek: 2 },
      { title: 'Gauss\'s Law Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Gauss\'s Law Quiz', type: 'QUIZ', topicSlug: 'physics-c-gauss-law', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Electric Potential (Calculus)', type: 'LESSON', topicSlug: 'physics-c-electric-potential', dayOfWeek: 0 },
      { title: 'Potential & Field Relationship', type: 'PRACTICE', topicSlug: 'physics-c-electric-potential', dayOfWeek: 2 },
      { title: 'Electrostatics Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Potential Quiz', type: 'QUIZ', topicSlug: 'physics-c-electric-potential', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Capacitors & Dielectrics', type: 'LESSON', topicSlug: 'physics-c-capacitors-dielectrics', dayOfWeek: 0 },
      { title: 'Capacitor Circuits Practice', type: 'PRACTICE', topicSlug: 'physics-c-capacitors-dielectrics', dayOfWeek: 2 },
      { title: 'DC Circuits', type: 'LESSON', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 4 },
      { title: 'Circuits Quiz', type: 'QUIZ', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'RC Circuits (Calculus)', type: 'LESSON', topicSlug: 'physics-c-rc-circuits', dayOfWeek: 0 },
      { title: 'RC Circuit Practice', type: 'PRACTICE', topicSlug: 'physics-c-rc-circuits', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Magnetic Forces on Charges & Wires', type: 'LESSON', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 0 },
      { title: 'Magnetic Force Practice', type: 'PRACTICE', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 2 },
      { title: 'Magnetism Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Magnetic Forces Quiz', type: 'QUIZ', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Sources of Magnetic Fields', type: 'LESSON', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 0 },
      { title: 'Biot-Savart & Ampère\'s Law', type: 'PRACTICE', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 2 },
      { title: 'Magnetic Sources Quiz', type: 'QUIZ', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 4 },
      { title: 'Magnetic Sources Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Faraday\'s & Lenz\'s Law', type: 'LESSON', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 0 },
      { title: 'Induction Practice', type: 'PRACTICE', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 2 },
      { title: 'Inductance & RL Circuits', type: 'LESSON', topicSlug: 'physics-c-inductance-rl-circuits', dayOfWeek: 4 },
      { title: 'Induction Quiz', type: 'QUIZ', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Maxwell\'s Equations Overview', type: 'LESSON', topicSlug: 'physics-c-maxwell-equations', dayOfWeek: 0 },
      { title: 'Electromagnetic Waves', type: 'LESSON', topicSlug: 'physics-c-electromagnetic-waves', dayOfWeek: 2 },
      { title: 'Maxwell Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final FRQ Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '16-week-physics-c-em-comprehensive',
  title: '16-Week AP Physics C: E&M Mastery',
  description: 'Complete preparation with calculus-heavy derivations, advanced circuit analysis, and extensive problem solving across electrostatics, magnetism, and EM induction.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Physics C E&M Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Calculus for E&M Review', type: 'LESSON', dayOfWeek: 1 },
      { title: 'Coulomb\'s Law & Superposition', type: 'LESSON', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 3 },
      { title: 'Electric Field Practice', type: 'PRACTICE', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Continuous Charge Distributions', type: 'PRACTICE', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 0 },
      { title: 'Electric Field Lines & Dipoles', type: 'LESSON', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 2 },
      { title: 'Coulomb Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Electric Fields Quiz', type: 'QUIZ', topicSlug: 'physics-c-electric-field-coulomb', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Gauss\'s Law Theory', type: 'LESSON', topicSlug: 'physics-c-gauss-law', dayOfWeek: 0 },
      { title: 'Gauss\'s Law: Spheres & Cylinders', type: 'PRACTICE', topicSlug: 'physics-c-gauss-law', dayOfWeek: 2 },
      { title: 'Gauss\'s Law: Planes & Conductors', type: 'PRACTICE', topicSlug: 'physics-c-gauss-law', dayOfWeek: 4 },
      { title: 'Gauss\'s Law Quiz', type: 'QUIZ', topicSlug: 'physics-c-gauss-law', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Electric Potential (Integration)', type: 'LESSON', topicSlug: 'physics-c-electric-potential', dayOfWeek: 0 },
      { title: 'V from E, E from V (Gradient)', type: 'PRACTICE', topicSlug: 'physics-c-electric-potential', dayOfWeek: 2 },
      { title: 'Potential Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Potential Quiz', type: 'QUIZ', topicSlug: 'physics-c-electric-potential', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Conductors & Charge Distribution', type: 'LESSON', topicSlug: 'physics-c-electric-potential', dayOfWeek: 0 },
      { title: 'Equipotential Surfaces', type: 'PRACTICE', topicSlug: 'physics-c-electric-potential', dayOfWeek: 2 },
      { title: 'Electrostatics FRQ Set', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Electrostatics Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Capacitors & Energy Storage', type: 'LESSON', topicSlug: 'physics-c-capacitors-dielectrics', dayOfWeek: 0 },
      { title: 'Dielectrics & Capacitor Combos', type: 'PRACTICE', topicSlug: 'physics-c-capacitors-dielectrics', dayOfWeek: 2 },
      { title: 'Capacitor Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Capacitors Quiz', type: 'QUIZ', topicSlug: 'physics-c-capacitors-dielectrics', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'DC Circuits & Kirchhoff\'s Laws', type: 'LESSON', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 0 },
      { title: 'Multi-Loop Circuit Practice', type: 'PRACTICE', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 2 },
      { title: 'RC Circuits (Differential Eqs)', type: 'LESSON', topicSlug: 'physics-c-rc-circuits', dayOfWeek: 4 },
      { title: 'Circuits Quiz', type: 'QUIZ', topicSlug: 'physics-c-dc-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'RC Charging & Discharging', type: 'PRACTICE', topicSlug: 'physics-c-rc-circuits', dayOfWeek: 0 },
      { title: 'Circuit Flashcards', type: 'FLASHCARD', dayOfWeek: 2 },
      { title: 'Circuits FRQ Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Review Mid-Course Results', type: 'CUSTOM', dayOfWeek: 0 },
      { title: 'Magnetic Forces on Charges', type: 'LESSON', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 2 },
      { title: 'Charged Particles in B Fields', type: 'PRACTICE', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 4 },
      { title: 'Magnetic Forces Quiz', type: 'QUIZ', topicSlug: 'physics-c-magnetic-forces', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Biot-Savart Law', type: 'LESSON', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 0 },
      { title: 'Ampère\'s Law', type: 'PRACTICE', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 2 },
      { title: 'B Field Calculations', type: 'PRACTICE', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 4 },
      { title: 'Magnetic Sources Quiz', type: 'QUIZ', topicSlug: 'physics-c-magnetic-field-sources', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Faraday\'s Law (Calculus)', type: 'LESSON', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 0 },
      { title: 'Lenz\'s Law & Applications', type: 'PRACTICE', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 2 },
      { title: 'Induction Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Induction Quiz', type: 'QUIZ', topicSlug: 'physics-c-faraday-lenz', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Inductance & Self-Inductance', type: 'LESSON', topicSlug: 'physics-c-inductance-rl-circuits', dayOfWeek: 0 },
      { title: 'RL Circuits (Differential Eqs)', type: 'PRACTICE', topicSlug: 'physics-c-inductance-rl-circuits', dayOfWeek: 2 },
      { title: 'LC Oscillations', type: 'PRACTICE', topicSlug: 'physics-c-inductance-rl-circuits', dayOfWeek: 4 },
      { title: 'Inductance Quiz', type: 'QUIZ', topicSlug: 'physics-c-inductance-rl-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'Maxwell\'s Equations', type: 'LESSON', topicSlug: 'physics-c-maxwell-equations', dayOfWeek: 0 },
      { title: 'Displacement Current', type: 'PRACTICE', topicSlug: 'physics-c-maxwell-equations', dayOfWeek: 2 },
      { title: 'EM Waves', type: 'LESSON', topicSlug: 'physics-c-electromagnetic-waves', dayOfWeek: 4 },
      { title: 'Maxwell Quiz', type: 'QUIZ', topicSlug: 'physics-c-maxwell-equations', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Magnetism FRQ Set', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Magnetism Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(14, [
      { title: 'Cross-Topic Problem Set', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Timed FRQ Practice', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'All-Topics Flashcard Review', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Practice Exam #3', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(15, [
      { title: 'Final Full Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review & Target Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final FRQ Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_PHYSICS_C_EM_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Physics C: Electricity & Magnetism',
  description: 'Choose a pre-built study schedule for AP Physics C: E&M. Each plan covers electrostatics, circuits, magnetism, and EM induction with calculus.',
  backLink: { href: '/ap-physics-c-em', label: 'AP Physics C: E&M' },
  apiEndpoint: '/api/ap-physics-c-em-study-plans',
  accent: 'violet',
  examLabel: 'AP Exam Date',
  plans: AP_PHYSICS_C_EM_PLANS,
}
