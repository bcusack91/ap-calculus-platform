import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

/* ── 4-Week Sprint ── */
const sprint: StudyPlanTemplate = {
  id: '4-week-physics2-sprint',
  title: '4-Week AP Physics 2 Sprint',
  description: 'Rapid review of all AP Physics 2 topics — fluids, thermodynamics, electricity, magnetism, optics, and modern physics — for students needing a final exam push.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Physics 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Fluid Pressure & Buoyancy', type: 'LESSON', topicSlug: 'fluid-pressure', dayOfWeek: 1 },
      { title: 'Fluid Dynamics & Continuity', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 3 },
      { title: 'Fluids Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Thermodynamics & Kinetic Theory', type: 'LESSON', topicSlug: 'thermodynamic-laws', dayOfWeek: 0 },
      { title: 'Electric Fields & Forces', type: 'LESSON', topicSlug: 'electric-fields', dayOfWeek: 2 },
      { title: 'DC Circuits & Capacitance', type: 'LESSON', topicSlug: 'dc-circuits', dayOfWeek: 4 },
      { title: 'E&M Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Magnetic Fields & Electromagnetic Induction', type: 'LESSON', topicSlug: 'magnetic-fields', dayOfWeek: 0 },
      { title: 'Geometric & Wave Optics', type: 'LESSON', topicSlug: 'geometric-optics', dayOfWeek: 2 },
      { title: 'Quantum & Nuclear Physics', type: 'LESSON', topicSlug: 'quantum-mechanics', dayOfWeek: 4 },
      { title: 'Modern Physics Quiz', type: 'QUIZ', topicSlug: 'quantum-mechanics', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full AP Physics 2 Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 10-Week Standard ── */
const standard: StudyPlanTemplate = {
  id: '10-week-physics2-standard',
  title: '10-Week AP Physics 2 Plan',
  description: 'Balanced study schedule covering all AP Physics 2 units systematically — fluids, thermodynamics, electricity, magnetism, optics, and modern physics — with conceptual lessons, problem solving, and quizzes.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Physics 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Fluid Pressure & Pascal\'s Principle', type: 'LESSON', topicSlug: 'fluid-pressure', dayOfWeek: 1 },
      { title: 'Buoyancy & Archimedes\' Principle', type: 'LESSON', topicSlug: 'buoyancy', dayOfWeek: 3 },
      { title: 'Fluids Quiz', type: 'QUIZ', topicSlug: 'fluid-pressure', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Fluid Dynamics & Continuity Equation', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 0 },
      { title: 'Bernoulli\'s Equation & Applications', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 2 },
      { title: 'Fluids Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Fluid Dynamics Practice', type: 'PRACTICE', topicSlug: 'fluid-dynamics', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Temperature, Heat & Thermal Expansion', type: 'LESSON', topicSlug: 'temperature-and-heat', dayOfWeek: 0 },
      { title: 'Kinetic Theory of Gases', type: 'LESSON', topicSlug: 'kinetic-theory', dayOfWeek: 2 },
      { title: 'Laws of Thermodynamics', type: 'LESSON', topicSlug: 'thermodynamic-laws', dayOfWeek: 4 },
      { title: 'Thermodynamics Quiz', type: 'QUIZ', topicSlug: 'thermodynamic-laws', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Electric Charge & Coulomb\'s Law', type: 'LESSON', topicSlug: 'electric-charge-and-force', dayOfWeek: 0 },
      { title: 'Electric Fields & Field Lines', type: 'LESSON', topicSlug: 'electric-fields', dayOfWeek: 2 },
      { title: 'Electric Potential & Voltage', type: 'LESSON', topicSlug: 'electric-potential', dayOfWeek: 4 },
      { title: 'Electrostatics Quiz', type: 'QUIZ', topicSlug: 'electric-charge-and-force', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Capacitance & Capacitors', type: 'LESSON', topicSlug: 'capacitance', dayOfWeek: 0 },
      { title: 'DC Circuits & Ohm\'s Law', type: 'LESSON', topicSlug: 'dc-circuits', dayOfWeek: 2 },
      { title: 'RC Circuits', type: 'LESSON', topicSlug: 'rc-circuits', dayOfWeek: 4 },
      { title: 'Circuits Quiz', type: 'QUIZ', topicSlug: 'dc-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Mid-Course Practice Exam (MC)', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Magnetic Fields & Forces', type: 'LESSON', topicSlug: 'magnetic-fields', dayOfWeek: 4 },
      { title: 'Magnetism Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Electromagnetic Induction & Faraday\'s Law', type: 'LESSON', topicSlug: 'electromagnetic-induction', dayOfWeek: 0 },
      { title: 'Induction Practice', type: 'PRACTICE', topicSlug: 'electromagnetic-induction', dayOfWeek: 2 },
      { title: 'Magnetism & Induction Quiz', type: 'QUIZ', topicSlug: 'magnetic-fields', dayOfWeek: 4 },
      { title: 'E&M Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Geometric Optics: Mirrors & Lenses', type: 'LESSON', topicSlug: 'geometric-optics', dayOfWeek: 0 },
      { title: 'Wave Optics: Interference & Diffraction', type: 'LESSON', topicSlug: 'wave-optics', dayOfWeek: 2 },
      { title: 'Optics Practice', type: 'PRACTICE', topicSlug: 'geometric-optics', dayOfWeek: 4 },
      { title: 'Optics Quiz', type: 'QUIZ', topicSlug: 'wave-optics', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Quantum Mechanics & Photoelectric Effect', type: 'LESSON', topicSlug: 'quantum-mechanics', dayOfWeek: 0 },
      { title: 'Atomic Structure & Bohr Model', type: 'LESSON', topicSlug: 'atomic-structure', dayOfWeek: 2 },
      { title: 'Nuclear Physics & Radioactive Decay', type: 'LESSON', topicSlug: 'nuclear-physics', dayOfWeek: 4 },
      { title: 'Modern Physics Quiz', type: 'QUIZ', topicSlug: 'quantum-mechanics', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full AP Physics 2 Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 16-Week Comprehensive ── */
const comprehensive: StudyPlanTemplate = {
  id: '16-week-physics2-comprehensive',
  title: '16-Week AP Physics 2 Mastery',
  description: 'Complete, in-depth preparation for AP Physics 2 covering every unit with conceptual understanding, quantitative problem solving, lab analysis, and multiple full-length practice exams. Ideal for students aiming for a 5.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Physics 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Math Review: Algebra & Proportional Reasoning', type: 'LESSON', dayOfWeek: 2 },
      { title: 'Physics 1 Rapid Review: Mechanics', type: 'LESSON', dayOfWeek: 4 },
      { title: 'Goal Setting & Study Plan Orientation', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Fluid Statics: Pressure & Depth', type: 'LESSON', topicSlug: 'fluid-pressure', dayOfWeek: 0 },
      { title: 'Pascal\'s Principle & Hydraulics', type: 'LESSON', topicSlug: 'fluid-pressure', dayOfWeek: 2 },
      { title: 'Fluid Pressure Practice', type: 'PRACTICE', topicSlug: 'fluid-pressure', dayOfWeek: 4 },
      { title: 'Fluid Pressure Quiz', type: 'QUIZ', topicSlug: 'fluid-pressure', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Buoyancy & Archimedes\' Principle', type: 'LESSON', topicSlug: 'buoyancy', dayOfWeek: 0 },
      { title: 'Buoyancy Problems: Floating & Submerged', type: 'PRACTICE', topicSlug: 'buoyancy', dayOfWeek: 2 },
      { title: 'Fluid Dynamics: Continuity Equation', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 4 },
      { title: 'Buoyancy Quiz', type: 'QUIZ', topicSlug: 'buoyancy', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Bernoulli\'s Equation & Applications', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 0 },
      { title: 'Fluid Dynamics Practice', type: 'PRACTICE', topicSlug: 'fluid-dynamics', dayOfWeek: 2 },
      { title: 'Fluids Comprehensive Quiz', type: 'QUIZ', topicSlug: 'fluid-dynamics', dayOfWeek: 4 },
      { title: 'Fluids Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Temperature, Thermal Expansion & Heat Transfer', type: 'LESSON', topicSlug: 'temperature-and-heat', dayOfWeek: 0 },
      { title: 'Calorimetry & Phase Changes', type: 'LESSON', topicSlug: 'temperature-and-heat', dayOfWeek: 2 },
      { title: 'Kinetic Theory & Ideal Gas Law', type: 'LESSON', topicSlug: 'kinetic-theory', dayOfWeek: 4 },
      { title: 'Heat & Kinetic Theory Quiz', type: 'QUIZ', topicSlug: 'kinetic-theory', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'First Law of Thermodynamics', type: 'LESSON', topicSlug: 'thermodynamic-laws', dayOfWeek: 0 },
      { title: 'Second Law & Entropy', type: 'LESSON', topicSlug: 'thermodynamic-laws', dayOfWeek: 2 },
      { title: 'Thermodynamic Processes & PV Diagrams', type: 'PRACTICE', topicSlug: 'thermodynamic-laws', dayOfWeek: 4 },
      { title: 'Thermodynamics Quiz', type: 'QUIZ', topicSlug: 'thermodynamic-laws', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Electric Charge, Conductors & Insulators', type: 'LESSON', topicSlug: 'electric-charge-and-force', dayOfWeek: 0 },
      { title: 'Coulomb\'s Law & Superposition', type: 'LESSON', topicSlug: 'electric-charge-and-force', dayOfWeek: 2 },
      { title: 'Electric Fields: Point Charges & Distributions', type: 'LESSON', topicSlug: 'electric-fields', dayOfWeek: 4 },
      { title: 'Electrostatics Quiz', type: 'QUIZ', topicSlug: 'electric-charge-and-force', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Electric Potential Energy & Potential', type: 'LESSON', topicSlug: 'electric-potential', dayOfWeek: 0 },
      { title: 'Equipotential Surfaces & Field Relationships', type: 'LESSON', topicSlug: 'electric-potential', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Mid-Course Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Capacitors: Energy Storage & Geometry', type: 'LESSON', topicSlug: 'capacitance', dayOfWeek: 0 },
      { title: 'Capacitors in Series & Parallel', type: 'LESSON', topicSlug: 'capacitance', dayOfWeek: 2 },
      { title: 'Capacitance Practice', type: 'PRACTICE', topicSlug: 'capacitance', dayOfWeek: 4 },
      { title: 'Capacitance Quiz', type: 'QUIZ', topicSlug: 'capacitance', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'DC Circuits: Ohm\'s Law & Resistance', type: 'LESSON', topicSlug: 'dc-circuits', dayOfWeek: 0 },
      { title: 'Series & Parallel Resistors', type: 'LESSON', topicSlug: 'dc-circuits', dayOfWeek: 2 },
      { title: 'Kirchhoff\'s Laws & Complex Circuits', type: 'LESSON', topicSlug: 'dc-circuits', dayOfWeek: 4 },
      { title: 'DC Circuits Quiz', type: 'QUIZ', topicSlug: 'dc-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'RC Circuits: Charging & Discharging', type: 'LESSON', topicSlug: 'rc-circuits', dayOfWeek: 0 },
      { title: 'RC Circuits Practice', type: 'PRACTICE', topicSlug: 'rc-circuits', dayOfWeek: 2 },
      { title: 'Magnetic Fields: Forces on Charges & Currents', type: 'LESSON', topicSlug: 'magnetic-fields', dayOfWeek: 4 },
      { title: 'Circuits & Magnetism Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Magnetic Force on Current-Carrying Wires', type: 'LESSON', topicSlug: 'magnetic-fields', dayOfWeek: 0 },
      { title: 'Electromagnetic Induction & Faraday\'s Law', type: 'LESSON', topicSlug: 'electromagnetic-induction', dayOfWeek: 2 },
      { title: 'Lenz\'s Law & Induced Currents', type: 'LESSON', topicSlug: 'electromagnetic-induction', dayOfWeek: 4 },
      { title: 'Magnetism & Induction Quiz', type: 'QUIZ', topicSlug: 'electromagnetic-induction', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'Geometric Optics: Reflection & Mirrors', type: 'LESSON', topicSlug: 'geometric-optics', dayOfWeek: 0 },
      { title: 'Geometric Optics: Refraction & Lenses', type: 'LESSON', topicSlug: 'geometric-optics', dayOfWeek: 2 },
      { title: 'Wave Optics: Interference & Double Slit', type: 'LESSON', topicSlug: 'wave-optics', dayOfWeek: 4 },
      { title: 'Optics Quiz', type: 'QUIZ', topicSlug: 'geometric-optics', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Wave Optics: Diffraction & Thin Films', type: 'LESSON', topicSlug: 'wave-optics', dayOfWeek: 0 },
      { title: 'Quantum Mechanics & Photoelectric Effect', type: 'LESSON', topicSlug: 'quantum-mechanics', dayOfWeek: 2 },
      { title: 'Atomic Structure & Energy Levels', type: 'LESSON', topicSlug: 'atomic-structure', dayOfWeek: 4 },
      { title: 'Optics & Quantum Quiz', type: 'QUIZ', topicSlug: 'quantum-mechanics', dayOfWeek: 5 },
    ]),
    ...weekTasks(14, [
      { title: 'Nuclear Physics: Decay & Binding Energy', type: 'LESSON', topicSlug: 'nuclear-physics', dayOfWeek: 0 },
      { title: 'Nuclear Physics Practice', type: 'PRACTICE', topicSlug: 'nuclear-physics', dayOfWeek: 2 },
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Practice Exam #2', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(15, [
      { title: 'FRQ Practice: Fluids & Thermodynamics', type: 'PRACTICE', topicSlug: 'fluid-dynamics', dayOfWeek: 0 },
      { title: 'FRQ Practice: E&M & Circuits', type: 'PRACTICE', topicSlug: 'dc-circuits', dayOfWeek: 2 },
      { title: 'Full Practice Exam #3', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Marathon & Exam Tips', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_PHYSICS2_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Physics 2',
  description: 'Choose a pre-built study schedule covering fluids, thermodynamics, electricity and magnetism, optics, and modern physics — automatically scheduled for you.',
  backLink: { href: '/ap-physics-2', label: 'AP Physics 2' },
  apiEndpoint: '/api/ap-physics2-study-plans',
  diagnosticPrefix: 'ap-physics2-diagnostic',
  accent: 'cyan',
  examLabel: 'AP Exam Date',
  plans: AP_PHYSICS2_PLANS,
}
