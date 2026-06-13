import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-physics1-sprint',
  title: '4-Week AP Physics 1 Sprint',
  description: 'Quick review of mechanics, energy, momentum, rotation, and SHM for students with strong math foundations needing a final push before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Physics 1 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Kinematics Review', type: 'LESSON', topicSlug: 'one-dimensional-motion', dayOfWeek: 1 },
      { title: 'Forces & Newton\'s Laws', type: 'LESSON', topicSlug: 'newtons-first-second-laws', dayOfWeek: 3 },
      { title: 'Kinematics Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Work, Energy & Power', type: 'LESSON', topicSlug: 'work-and-kinetic-energy', dayOfWeek: 0 },
      { title: 'Momentum & Collisions', type: 'LESSON', topicSlug: 'momentum-and-impulse', dayOfWeek: 2 },
      { title: 'Energy & Momentum Quiz', type: 'QUIZ', topicSlug: 'work-and-kinetic-energy', dayOfWeek: 4 },
      { title: 'Energy Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Rotational Motion & Torque', type: 'LESSON', topicSlug: 'rotational-kinematics', dayOfWeek: 0 },
      { title: 'Angular Momentum', type: 'LESSON', topicSlug: 'angular-momentum', dayOfWeek: 2 },
      { title: 'Simple Harmonic Motion', type: 'LESSON', topicSlug: 'introduction-to-shm', dayOfWeek: 4 },
      { title: 'Rotation & SHM Quiz', type: 'QUIZ', topicSlug: 'rotational-kinematics', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full AP Physics 1 Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-physics1-standard',
  title: '10-Week AP Physics 1 Plan',
  description: 'Systematic coverage of all AP Physics 1 units with conceptual lessons, problem-solving practice, and lab-style analysis.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [{ title: 'Take AP Physics 1 Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: '1D Kinematics', type: 'LESSON', topicSlug: 'one-dimensional-motion', dayOfWeek: 1 }, { title: '2D Kinematics & Projectiles', type: 'LESSON', topicSlug: 'two-dimensional-motion', dayOfWeek: 3 }, { title: 'Kinematics Quiz', type: 'QUIZ', topicSlug: 'one-dimensional-motion', dayOfWeek: 5 }]),
    ...weekTasks(1, [{ title: 'Newton\'s First & Second Laws', type: 'LESSON', topicSlug: 'newtons-first-second-laws', dayOfWeek: 0 }, { title: 'Newton\'s Third Law & Free-Body Diagrams', type: 'LESSON', topicSlug: 'newtons-third-law', dayOfWeek: 2 }, { title: 'Friction & Inclined Planes', type: 'LESSON', topicSlug: 'friction', dayOfWeek: 4 }, { title: 'Forces Quiz', type: 'QUIZ', topicSlug: 'newtons-first-second-laws', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Circular Motion', type: 'LESSON', topicSlug: 'uniform-circular-motion', dayOfWeek: 0 }, { title: 'Centripetal Force & Gravitation', type: 'LESSON', topicSlug: 'centripetal-force', dayOfWeek: 1 }, { title: 'Universal Gravitation', type: 'LESSON', topicSlug: 'universal-gravitation', dayOfWeek: 2 }, { title: 'Forces Flashcards', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Circular Motion Quiz', type: 'QUIZ', topicSlug: 'uniform-circular-motion', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Work & Kinetic Energy', type: 'LESSON', topicSlug: 'work-and-kinetic-energy', dayOfWeek: 0 }, { title: 'Potential Energy & Conservation', type: 'LESSON', topicSlug: 'conservation-of-energy', dayOfWeek: 2 }, { title: 'Gravitational & Elastic PE', type: 'LESSON', topicSlug: 'gravitational-potential-energy', dayOfWeek: 4 }, { title: 'Energy Quiz', type: 'QUIZ', topicSlug: 'work-and-kinetic-energy', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Linear Momentum', type: 'LESSON', topicSlug: 'momentum-and-impulse', dayOfWeek: 0 }, { title: 'Impulse & Collisions', type: 'LESSON', topicSlug: 'collisions', dayOfWeek: 2 }, { title: 'Conservation of Momentum', type: 'PRACTICE', topicSlug: 'conservation-of-momentum', dayOfWeek: 4 }, { title: 'Momentum Quiz', type: 'QUIZ', topicSlug: 'momentum-and-impulse', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Rotational Kinematics', type: 'LESSON', topicSlug: 'rotational-kinematics', dayOfWeek: 0 }, { title: 'Torque & Rotational Equilibrium', type: 'LESSON', topicSlug: 'torque-and-equilibrium', dayOfWeek: 2 }, { title: 'Angular Momentum', type: 'LESSON', topicSlug: 'angular-momentum', dayOfWeek: 4 }, { title: 'Rotation Quiz', type: 'QUIZ', topicSlug: 'rotational-kinematics', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Simple Harmonic Motion', type: 'LESSON', topicSlug: 'introduction-to-shm', dayOfWeek: 4 }, { title: 'Energy in SHM', type: 'PRACTICE', topicSlug: 'energy-in-shm', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Fluids: Density & Pressure', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 0 }, { title: 'Buoyancy & Fluid Flow', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 2 }, { title: 'Fluids Quiz', type: 'QUIZ', topicSlug: 'fluid-dynamics', dayOfWeek: 4 }, { title: 'Fluids Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'SHM & Rotation Review', type: 'LESSON', topicSlug: 'energy-in-shm', dayOfWeek: 0 }, { title: 'Mixed Mechanics Practice', type: 'PRACTICE', topicSlug: 'conservation-of-energy', dayOfWeek: 2 }, { title: 'Torque & Equilibrium Drill', type: 'PRACTICE', topicSlug: 'torque-and-equilibrium', dayOfWeek: 4 }, { title: 'Mechanics Quiz', type: 'QUIZ', topicSlug: 'angular-momentum', dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Full AP Physics 1 Practice Exam', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 }]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '16-week-physics1-comprehensive',
  title: '16-Week AP Physics 1 Mastery',
  description: 'Complete preparation covering every AP Physics 1 concept in depth with extensive problem solving, lab analysis, and multiple full-length practice exams.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'Math Review: Vectors & Trig', type: 'LESSON', dayOfWeek: 2 }, { title: 'Units & Dimensional Analysis', type: 'LESSON', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: '1D Motion & Graphs', type: 'LESSON', topicSlug: 'one-dimensional-motion', dayOfWeek: 0 }, { title: 'Kinematic Equations', type: 'LESSON', topicSlug: 'one-dimensional-motion', dayOfWeek: 2 }, { title: 'Free Fall', type: 'LESSON', topicSlug: 'one-dimensional-motion', dayOfWeek: 4 }, { title: 'Kinematics Practice', type: 'PRACTICE', topicSlug: 'one-dimensional-motion', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: '2D Motion & Projectiles', type: 'LESSON', topicSlug: 'two-dimensional-motion', dayOfWeek: 0 }, { title: 'Relative Motion', type: 'LESSON', topicSlug: 'two-dimensional-motion', dayOfWeek: 2 }, { title: 'Kinematics Quiz', type: 'QUIZ', topicSlug: 'two-dimensional-motion', dayOfWeek: 4 }, { title: 'Kinematics Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Newton\'s First Law & Inertia', type: 'LESSON', topicSlug: 'newtons-first-second-laws', dayOfWeek: 0 }, { title: 'Newton\'s Second Law (F=ma)', type: 'LESSON', topicSlug: 'newtons-first-second-laws', dayOfWeek: 2 }, { title: 'Free-Body Diagrams', type: 'PRACTICE', topicSlug: 'newtons-first-second-laws', dayOfWeek: 4 }, { title: 'Forces Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Newton\'s Third Law', type: 'LESSON', topicSlug: 'newtons-third-law', dayOfWeek: 0 }, { title: 'Friction (Static & Kinetic)', type: 'LESSON', topicSlug: 'friction', dayOfWeek: 2 }, { title: 'Inclined Planes & Pulleys', type: 'PRACTICE', topicSlug: 'friction', dayOfWeek: 4 }, { title: 'Forces Quiz', type: 'QUIZ', topicSlug: 'newtons-third-law', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Circular Motion', type: 'LESSON', topicSlug: 'uniform-circular-motion', dayOfWeek: 0 }, { title: 'Centripetal Force', type: 'LESSON', topicSlug: 'centripetal-force', dayOfWeek: 2 }, { title: 'Gravity & Orbits', type: 'LESSON', topicSlug: 'universal-gravitation', dayOfWeek: 4 }, { title: 'Circular Motion Quiz', type: 'QUIZ', topicSlug: 'uniform-circular-motion', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Work & Work-Energy Theorem', type: 'LESSON', topicSlug: 'work-and-kinetic-energy', dayOfWeek: 0 }, { title: 'Kinetic & Potential Energy', type: 'LESSON', topicSlug: 'gravitational-potential-energy', dayOfWeek: 2 }, { title: 'Conservation of Energy', type: 'LESSON', topicSlug: 'conservation-of-energy', dayOfWeek: 4 }, { title: 'Energy Quiz', type: 'QUIZ', topicSlug: 'work-and-kinetic-energy', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Elastic Potential Energy', type: 'LESSON', topicSlug: 'elastic-potential-energy', dayOfWeek: 0 }, { title: 'Energy Practice Problems', type: 'PRACTICE', topicSlug: 'conservation-of-energy', dayOfWeek: 2 }, { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Linear Momentum', type: 'LESSON', topicSlug: 'momentum-and-impulse', dayOfWeek: 0 }, { title: 'Impulse-Momentum Theorem', type: 'LESSON', topicSlug: 'momentum-and-impulse', dayOfWeek: 2 }, { title: 'Elastic & Inelastic Collisions', type: 'LESSON', topicSlug: 'collisions', dayOfWeek: 4 }, { title: 'Momentum Quiz', type: 'QUIZ', topicSlug: 'conservation-of-momentum', dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Rotational Kinematics', type: 'LESSON', topicSlug: 'rotational-kinematics', dayOfWeek: 0 }, { title: 'Torque', type: 'LESSON', topicSlug: 'torque-and-equilibrium', dayOfWeek: 2 }, { title: 'Rotational Dynamics', type: 'LESSON', topicSlug: 'rotational-kinematics', dayOfWeek: 4 }, { title: 'Rotation Practice', type: 'PRACTICE', topicSlug: 'torque-and-equilibrium', dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Angular Momentum', type: 'LESSON', topicSlug: 'angular-momentum', dayOfWeek: 0 }, { title: 'Rotation Quiz', type: 'QUIZ', topicSlug: 'angular-momentum', dayOfWeek: 2 }, { title: 'SHM: Springs', type: 'LESSON', topicSlug: 'introduction-to-shm', dayOfWeek: 4 }, { title: 'SHM: Energy & Pendulums', type: 'LESSON', topicSlug: 'energy-in-shm', dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Fluids: Density & Pressure', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 0 }, { title: 'Buoyancy & Archimedes', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 2 }, { title: 'Continuity & Bernoulli', type: 'LESSON', topicSlug: 'fluid-dynamics', dayOfWeek: 4 }, { title: 'Fluids Quiz', type: 'QUIZ', topicSlug: 'fluid-dynamics', dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'SHM Deep Dive', type: 'LESSON', topicSlug: 'energy-in-shm', dayOfWeek: 0 }, { title: 'Rotational Energy', type: 'LESSON', topicSlug: 'rotational-kinematics', dayOfWeek: 2 }, { title: 'Mixed Mechanics Drill', type: 'PRACTICE', topicSlug: 'conservation-of-energy', dayOfWeek: 4 }, { title: 'Mechanics Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Momentum & Energy Synthesis', type: 'LESSON', topicSlug: 'collisions', dayOfWeek: 0 }, { title: 'Force & Motion Synthesis', type: 'LESSON', topicSlug: 'friction', dayOfWeek: 2 }, { title: 'Synthesis Practice', type: 'PRACTICE', topicSlug: 'momentum-and-impulse', dayOfWeek: 4 }, { title: 'Synthesis Quiz', type: 'QUIZ', topicSlug: 'conservation-of-energy', dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Final Review', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Exam Tips', type: 'CUSTOM', dayOfWeek: 5 }]),
  ],
}

export const AP_PHYSICS1_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Physics 1',
  description: 'Choose a pre-built study schedule covering kinematics, forces, energy, momentum, rotation, SHM, and fluids — automatically scheduled for you.',
  backLink: { href: '/ap-physics-1', label: 'AP Physics 1' },
  apiEndpoint: '/api/ap-physics1-study-plans',
  diagnosticPrefix: 'ap-physics1-diagnostic',
  accent: 'cyan',
  examLabel: 'AP Exam Date',
  plans: AP_PHYSICS1_PLANS,
}
