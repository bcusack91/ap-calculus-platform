import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-physics-c-mech-sprint',
  title: '4-Week AP Physics C: Mechanics Sprint',
  description: 'Rapid calculus-based review of kinematics, Newton\'s laws, energy, momentum, rotation, and oscillations for students who need a final push before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Physics C Mech Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Calculus Kinematics Review', type: 'LESSON', topicSlug: 'physics-c-position-velocity-acceleration', dayOfWeek: 1 },
      { title: 'Variable Acceleration & Forces', type: 'LESSON', topicSlug: 'physics-c-variable-acceleration', dayOfWeek: 3 },
      { title: 'Kinematics Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Work-Energy & Power', type: 'LESSON', topicSlug: 'physics-c-work-power', dayOfWeek: 0 },
      { title: 'Momentum & Collisions', type: 'LESSON', topicSlug: 'physics-c-momentum-collisions', dayOfWeek: 2 },
      { title: 'Energy & Momentum Quiz', type: 'QUIZ', topicSlug: 'physics-c-work-power', dayOfWeek: 4 },
      { title: 'Work-Energy Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Rotational Dynamics & Inertia', type: 'LESSON', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 0 },
      { title: 'Angular Momentum & SHM', type: 'LESSON', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 2 },
      { title: 'Gravitation Review', type: 'LESSON', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 4 },
      { title: 'Rotation Quiz', type: 'QUIZ', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 5 },
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
  id: '10-week-physics-c-mech-standard',
  title: '10-Week AP Physics C: Mechanics Plan',
  description: 'Systematic coverage of all Physics C: Mechanics topics with calculus-heavy problem solving, derivations, and practice exams.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Physics C Mech Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Position, Velocity & Acceleration', type: 'LESSON', topicSlug: 'physics-c-position-velocity-acceleration', dayOfWeek: 1 },
      { title: 'Variable Acceleration (Calculus)', type: 'LESSON', topicSlug: 'physics-c-variable-acceleration', dayOfWeek: 3 },
      { title: 'Kinematics Quiz', type: 'QUIZ', topicSlug: 'physics-c-position-velocity-acceleration', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Circular Motion (Calculus)', type: 'LESSON', topicSlug: 'physics-c-circular-motion', dayOfWeek: 0 },
      { title: 'Newton\'s Laws with Calculus', type: 'LESSON', topicSlug: 'physics-c-newtons-laws-calculus', dayOfWeek: 2 },
      { title: 'Friction & Inclines', type: 'LESSON', topicSlug: 'physics-c-friction-inclines', dayOfWeek: 4 },
      { title: 'Forces Quiz', type: 'QUIZ', topicSlug: 'physics-c-newtons-laws-calculus', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Work & Power', type: 'LESSON', topicSlug: 'physics-c-work-power', dayOfWeek: 0 },
      { title: 'Conservative Forces & PE', type: 'LESSON', topicSlug: 'physics-c-conservative-forces', dayOfWeek: 2 },
      { title: 'Work-Energy Practice', type: 'PRACTICE', topicSlug: 'physics-c-work-power', dayOfWeek: 4 },
      { title: 'Energy Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Momentum & Collisions', type: 'LESSON', topicSlug: 'physics-c-momentum-collisions', dayOfWeek: 0 },
      { title: 'Center of Mass', type: 'LESSON', topicSlug: 'physics-c-center-of-mass', dayOfWeek: 2 },
      { title: 'Momentum Quiz', type: 'QUIZ', topicSlug: 'physics-c-momentum-collisions', dayOfWeek: 4 },
      { title: 'Momentum Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Gaps', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Re-study Weak Topics', type: 'LESSON', dayOfWeek: 4 },
      { title: 'Flashcard Drill', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Rotational Kinematics & Dynamics', type: 'LESSON', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 0 },
      { title: 'Moment of Inertia (Integration)', type: 'LESSON', topicSlug: 'physics-c-moment-of-inertia', dayOfWeek: 2 },
      { title: 'Rolling Motion Practice', type: 'PRACTICE', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 4 },
      { title: 'Rotation Quiz', type: 'QUIZ', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Angular Momentum', type: 'LESSON', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 0 },
      { title: 'Angular Momentum Practice', type: 'PRACTICE', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 2 },
      { title: 'Rotation Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Angular Momentum Quiz', type: 'QUIZ', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Simple Harmonic Motion', type: 'LESSON', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 0 },
      { title: 'Damped & Driven Oscillations', type: 'LESSON', topicSlug: 'physics-c-damped-driven-oscillations', dayOfWeek: 2 },
      { title: 'SHM Practice', type: 'PRACTICE', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 4 },
      { title: 'Oscillations Quiz', type: 'QUIZ', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Universal Gravitation', type: 'LESSON', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 0 },
      { title: 'Orbits & Kepler\'s Laws', type: 'PRACTICE', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 2 },
      { title: 'Gravitation Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Deep Dive', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '16-week-physics-c-mech-comprehensive',
  title: '16-Week AP Physics C: Mechanics Mastery',
  description: 'In-depth preparation with calculus derivations, advanced problem sets, lab-style analysis, and multiple full-length practice exams.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Physics C Mech Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Calculus Review for Physics', type: 'LESSON', dayOfWeek: 1 },
      { title: 'Position & Velocity (Derivatives)', type: 'LESSON', topicSlug: 'physics-c-position-velocity-acceleration', dayOfWeek: 3 },
      { title: 'Kinematics Practice', type: 'PRACTICE', topicSlug: 'physics-c-position-velocity-acceleration', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Variable Acceleration', type: 'LESSON', topicSlug: 'physics-c-variable-acceleration', dayOfWeek: 0 },
      { title: 'Velocity-Dependent Forces', type: 'PRACTICE', topicSlug: 'physics-c-variable-acceleration', dayOfWeek: 2 },
      { title: 'Kinematics Quiz', type: 'QUIZ', topicSlug: 'physics-c-variable-acceleration', dayOfWeek: 4 },
      { title: 'Kinematics Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Circular Motion (Calculus)', type: 'LESSON', topicSlug: 'physics-c-circular-motion', dayOfWeek: 0 },
      { title: 'Newton\'s Laws with Calculus', type: 'LESSON', topicSlug: 'physics-c-newtons-laws-calculus', dayOfWeek: 2 },
      { title: 'Force Problems Practice', type: 'PRACTICE', topicSlug: 'physics-c-newtons-laws-calculus', dayOfWeek: 4 },
      { title: 'Forces Quiz', type: 'QUIZ', topicSlug: 'physics-c-newtons-laws-calculus', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Friction & Inclined Planes', type: 'LESSON', topicSlug: 'physics-c-friction-inclines', dayOfWeek: 0 },
      { title: 'Non-Constant Friction', type: 'PRACTICE', topicSlug: 'physics-c-friction-inclines', dayOfWeek: 2 },
      { title: 'Forces Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Friction Quiz', type: 'QUIZ', topicSlug: 'physics-c-friction-inclines', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Work & Power (Integrals)', type: 'LESSON', topicSlug: 'physics-c-work-power', dayOfWeek: 0 },
      { title: 'Conservative Forces & PE', type: 'LESSON', topicSlug: 'physics-c-conservative-forces', dayOfWeek: 2 },
      { title: 'Energy Conservation Practice', type: 'PRACTICE', topicSlug: 'physics-c-conservative-forces', dayOfWeek: 4 },
      { title: 'Energy Quiz', type: 'QUIZ', topicSlug: 'physics-c-work-power', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Impulse & Momentum', type: 'LESSON', topicSlug: 'physics-c-momentum-collisions', dayOfWeek: 0 },
      { title: 'Collisions (1D & 2D)', type: 'PRACTICE', topicSlug: 'physics-c-momentum-collisions', dayOfWeek: 2 },
      { title: 'Center of Mass Motion', type: 'LESSON', topicSlug: 'physics-c-center-of-mass', dayOfWeek: 4 },
      { title: 'Momentum Quiz', type: 'QUIZ', topicSlug: 'physics-c-momentum-collisions', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Rocket Propulsion & Variable Mass', type: 'PRACTICE', topicSlug: 'physics-c-center-of-mass', dayOfWeek: 0 },
      { title: 'Momentum Flashcards', type: 'FLASHCARD', dayOfWeek: 2 },
      { title: 'Mid-Course FRQ Set', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Rotational Kinematics', type: 'LESSON', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 0 },
      { title: 'Torque & Angular Acceleration', type: 'PRACTICE', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 2 },
      { title: 'Rotation Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Rotation Quiz', type: 'QUIZ', topicSlug: 'physics-c-rotational-kinematics-dynamics', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Moment of Inertia (Integration)', type: 'LESSON', topicSlug: 'physics-c-moment-of-inertia', dayOfWeek: 0 },
      { title: 'Parallel Axis Theorem Practice', type: 'PRACTICE', topicSlug: 'physics-c-moment-of-inertia', dayOfWeek: 2 },
      { title: 'Rolling Motion', type: 'PRACTICE', topicSlug: 'physics-c-moment-of-inertia', dayOfWeek: 4 },
      { title: 'Moment of Inertia Quiz', type: 'QUIZ', topicSlug: 'physics-c-moment-of-inertia', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Angular Momentum', type: 'LESSON', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 0 },
      { title: 'Conservation of Ang. Momentum', type: 'PRACTICE', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 2 },
      { title: 'Angular Momentum Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Angular Momentum Quiz', type: 'QUIZ', topicSlug: 'physics-c-angular-momentum', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Simple Harmonic Motion', type: 'LESSON', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 0 },
      { title: 'SHM Differential Equations', type: 'PRACTICE', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 2 },
      { title: 'Pendulums & Springs', type: 'PRACTICE', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 4 },
      { title: 'SHM Quiz', type: 'QUIZ', topicSlug: 'physics-c-simple-harmonic-motion', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Damped & Driven Oscillations', type: 'LESSON', topicSlug: 'physics-c-damped-driven-oscillations', dayOfWeek: 0 },
      { title: 'Resonance & Quality Factor', type: 'PRACTICE', topicSlug: 'physics-c-damped-driven-oscillations', dayOfWeek: 2 },
      { title: 'Oscillations Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Oscillations Quiz', type: 'QUIZ', topicSlug: 'physics-c-damped-driven-oscillations', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'Universal Gravitation', type: 'LESSON', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 0 },
      { title: 'Orbits & Kepler\'s Laws', type: 'PRACTICE', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 2 },
      { title: 'Gravitational PE & Escape Velocity', type: 'PRACTICE', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 4 },
      { title: 'Gravitation Quiz', type: 'QUIZ', topicSlug: 'physics-c-universal-gravitation', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Gravitation Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
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

export const AP_PHYSICS_C_MECH_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Physics C: Mechanics',
  description: 'Choose a pre-built study schedule for AP Physics C: Mechanics. Each plan balances calculus-based lessons, problem sets, and timed practice.',
  backLink: { href: '/ap-physics-c-mechanics', label: 'AP Physics C: Mechanics' },
  apiEndpoint: '/api/ap-physics-c-mech-study-plans',
  accent: 'amber',
  examLabel: 'AP Exam Date',
  plans: AP_PHYSICS_C_MECH_PLANS,
}
