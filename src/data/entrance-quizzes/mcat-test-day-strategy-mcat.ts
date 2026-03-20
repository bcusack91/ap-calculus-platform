/**
 * Entrance Quiz — MCAT Test Day Strategy (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: MCAT Structure Overview
  {
    id: 'mtds-ent-1a',
    question: 'The MCAT consists of four sections. Which of the following correctly lists them in the standard order?',
    options: [
      'CARS → Chemical and Physical Foundations → Biological and Biochemical Foundations → Psychological, Social, and Biological Foundations',
      'Chemical and Physical Foundations → CARS → Biological and Biochemical Foundations → Psychological, Social, and Biological Foundations',
      'Biological and Biochemical Foundations → Chemical and Physical Foundations → CARS → Psychological, Social, and Biological Foundations',
      'Psychological, Social, and Biological Foundations → CARS → Biological and Biochemical Foundations → Chemical and Physical Foundations'
    ],
    correctIndex: 1,
    explanation: 'The standard MCAT section order is: (1) Chemical and Physical Foundations of Biological Systems, (2) Critical Analysis and Reasoning Skills (CARS), (3) Biological and Biochemical Foundations of Living Systems, (4) Psychological, Social, and Biological Foundations of Behavior. Total testing time is ~6 hours 15 minutes with breaks.',
    partNumber: 1,
    partTitle: 'MCAT Structure Overview'
  },
  {
    id: 'mtds-ent-1b',
    question: 'Each scored MCAT section is scored on a scale of 118–132. The total score range is:',
    options: [
      '400–1600',
      '1–45',
      '472–528',
      '0–100'
    ],
    correctIndex: 2,
    explanation: 'Each of the four sections scores 118–132, so the total MCAT score ranges from 472 (4 × 118) to 528 (4 × 132), with a midpoint of 500. The median score for applicants accepted to medical school is typically around 511–512. Understanding the scoring scale helps set realistic target scores.',
    partNumber: 1,
    partTitle: 'MCAT Structure Overview'
  },

  // Part 2: Section Order
  {
    id: 'mtds-ent-2a',
    question: 'The MCAT is administered in a fixed section order (you cannot choose the order). Knowing the section order in advance is strategically important because:',
    options: [
      'You can choose to skip sections you find difficult and return to them later.',
      'You can mentally prepare for shifts in subject matter and cognitive demand across the day, optimizing your pacing and break strategy.',
      'The AAMC requires students to re-take sections scored below the 50th percentile.',
      'Section order determines which questions are weighted more heavily in scoring.'
    ],
    correctIndex: 1,
    explanation: 'The fixed order matters for stamina planning. CARS (section 2) requires a different cognitive mode than science sections. The long biology section (section 3) comes after CARS when fatigue is building. Knowing the order allows you to plan breaks, nutrition, and mental shifts between sections.',
    partNumber: 2,
    partTitle: 'Section Order'
  },
  {
    id: 'mtds-ent-2b',
    question: 'Which MCAT section is strategically unique in that outside knowledge is NOT helpful and may actually be harmful if over-applied?',
    options: [
      'Chemical and Physical Foundations of Biological Systems',
      'Critical Analysis and Reasoning Skills (CARS)',
      'Biological and Biochemical Foundations of Living Systems',
      'Psychological, Social, and Biological Foundations of Behavior'
    ],
    correctIndex: 1,
    explanation: 'CARS is answered exclusively from information in the passage. Applying outside knowledge to override passage-supported answers is a common CARS error. Science sections require integrating passage data WITH outside content knowledge—making CARS unique in requiring pure text-based reasoning.',
    partNumber: 2,
    partTitle: 'Section Order'
  },

  // Part 3: Time Management
  {
    id: 'mtds-ent-3a',
    question: 'The CARS section contains 53 questions in 90 minutes. Approximately how many minutes per passage + questions is available, assuming 9 passages?',
    options: [
      'About 5 minutes per passage set',
      'About 10 minutes per passage set',
      'About 15 minutes per passage set',
      'About 20 minutes per passage set'
    ],
    correctIndex: 1,
    explanation: '90 minutes ÷ 9 passages = 10 minutes per passage set (passage + ~5–7 questions). This includes reading time (~3–4 min) and question answering (~1–1.5 min per question). Practicing to this pace is essential—running over budget on early passages leaves insufficient time for later ones.',
    partNumber: 3,
    partTitle: 'Time Management'
  },
  {
    id: 'mtds-ent-3b',
    question: 'In the science sections of the MCAT (59 questions in 95 minutes), the recommended average time per question is approximately:',
    options: [
      '30 seconds per question',
      '1 minute 36 seconds per question',
      '3 minutes per question',
      '5 minutes per question'
    ],
    correctIndex: 1,
    explanation: '95 min ÷ 59 questions ≈ 1 min 36 sec per question. However, science sections include 10 passages (each requiring 3–5 min reading time) plus 15 discrete questions. An effective strategy is ~7–8 minutes per passage set and ~1 minute per discrete—bank time on discretes to spend on harder passages.',
    partNumber: 3,
    partTitle: 'Time Management'
  },

  // Part 4: Flagging & Review
  {
    id: 'mtds-ent-4a',
    question: 'The MCAT interface allows you to flag questions for review. The optimal use of the flag feature is to:',
    options: [
      'Flag every question you answer to review all of them at the end.',
      'Flag questions where you are uncertain or skipped, then return during remaining time to revisit those specific questions.',
      'Never flag questions, as returning to questions introduces second-guessing errors.',
      'Flag only the first and last question of each passage for boundary reference.'
    ],
    correctIndex: 1,
    explanation: 'Flags help you track questions needing review without losing your place. Flag uncertain answers or skipped questions; move forward to maintain pacing. Return to flagged questions with remaining time. Avoid flagging every question—it defeats the purpose of triage.',
    partNumber: 4,
    partTitle: 'Flagging & Review'
  },
  {
    id: 'mtds-ent-4b',
    question: 'Research on answer changing on standardized tests suggests that:',
    options: [
      'First instincts are always correct and answers should never be changed.',
      'Answer changes from wrong to right are more common than right to wrong when changes are based on careful re-reading and a specific new reason.',
      'Any answer change inevitably reduces the final score.',
      'Students should always change their first answer during review to avoid confirmation bias.'
    ],
    correctIndex: 1,
    explanation: 'Studies show that deliberate answer changes (based on finding new information, correcting a misread, or applying a concept correctly) more often improve than decrease scores. However, random changes driven by anxiety lower performance. Change an answer only when you have a specific reason—not just because you feel uncertain.',
    partNumber: 4,
    partTitle: 'Flagging & Review'
  },

  // Part 5: Managing Fatigue
  {
    id: 'mtds-ent-5a',
    question: 'The MCAT is approximately 7.5 hours long (including check-in and breaks). Which of the following strategies best helps maintain cognitive performance across the full test day?',
    options: [
      'Skip optional breaks to finish the test as quickly as possible and reduce overall fatigue.',
      'Eat a large, high-carbohydrate meal immediately before the test to maximize brain fuel.',
      'Use optional breaks to eat small, protein-balanced snacks, hydrate, and perform brief physical movement to restore alertness.',
      'Drink multiple caffeinated beverages throughout the day for sustained stimulation.'
    ],
    correctIndex: 2,
    explanation: 'Optimal test-day physiology: use breaks (even optional ones) to hydrate, eat small balanced snacks (protein + complex carbs for stable blood glucose), and move briefly. Excessive caffeine → jitteriness and crash. Skipping breaks → depleted working memory. Large meals → post-prandial fatigue. Consistent energy management is key.',
    partNumber: 5,
    partTitle: 'Managing Fatigue'
  },
  {
    id: 'mtds-ent-5b',
    question: 'A student finds that her performance on the fourth MCAT section (Psych/Soc) is consistently lower than her practice averages, despite knowing the content well. The most likely explanation and appropriate intervention is:',
    options: [
      'Psych/Soc is inherently more difficult than other sections; she should spend more time on content review.',
      'Cumulative mental fatigue by section 4 impairs performance; she should practice full-length tests under real conditions to build stamina and develop fatigue management strategies.',
      'She should skip breaks between sections 3 and 4 to save time for reviewing her answers.',
      'The Psych/Soc section is scored differently and lower scores there do not affect her total.'
    ],
    correctIndex: 1,
    explanation: 'Section 4 performance drops are a known phenomenon caused by cumulative cognitive fatigue—not necessarily content gaps. The solution is full-length practice under realistic conditions to build mental stamina, identify fatigue patterns, and develop coping strategies (e.g., brief mental reset techniques between sections).',
    partNumber: 5,
    partTitle: 'Managing Fatigue'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mtds-ent-6a',
    question: 'A student has 5 minutes remaining in a science section with 8 questions unanswered. The best strategy is to:',
    options: [
      'Read each remaining question fully and attempt to work through every answer choice carefully.',
      'Quickly scan each question for familiar content, make the best educated guess on all 8, and submit—never leave questions blank on the MCAT.',
      'Focus on only the 2 questions she feels most confident about and skip the others.',
      'Close her eyes and randomly select answers to conserve remaining time for a final review.'
    ],
    correctIndex: 1,
    explanation: 'The MCAT has NO penalty for wrong answers (unlike older standardized tests). Never leave a question blank. With 5 minutes and 8 questions, scan each for context and make an educated guess. Even a 25% chance on a guess is better than 0% for blank. Elimination of obviously wrong answers improves odds further.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mtds-ent-6b',
    question: 'A student encounters a difficult passage topic she has never seen before. The most effective immediate response is to:',
    options: [
      'Panic and spend extra time trying to recall any related content from memory.',
      'Recognize that the passage itself contains the information needed to answer most questions, and apply general reasoning skills to the given data.',
      'Skip the entire passage and all associated questions.',
      'Assume all questions for that passage are trick questions and choose opposite-seeming answers.'
    ],
    correctIndex: 1,
    explanation: 'MCAT passages are self-contained: most passage-based questions can be answered using the passage text and data, even for unfamiliar topics. Unfamiliar content is intentional—it tests reasoning ability, not encyclopedic memory. Treat unfamiliar passages as reading comprehension exercises and apply your analytical framework.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mtds-ent-7a',
    question: 'The most evidence-based MCAT preparation strategy involves:',
    options: [
      'Reading all content review materials cover-to-cover before attempting any practice questions.',
      'Doing full-length practice tests daily for one month without reviewing incorrect answers.',
      'Integrating content review with spaced repetition, active recall, and regular full-length practice tests with thorough error analysis.',
      'Focusing exclusively on your weakest subject for the entire preparation period.'
    ],
    correctIndex: 2,
    explanation: 'Evidence-based study: (1) spaced repetition distributes practice over time for long-term retention, (2) active recall (practice questions) is more effective than re-reading, (3) full-length tests build stamina and reveal timing issues, and (4) error analysis identifies knowledge gaps and reasoning errors for targeted remediation.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mtds-ent-7b',
    question: 'Which of the following best describes how to handle test anxiety on MCAT test day?',
    options: [
      'Suppress anxious thoughts entirely and focus only on the content.',
      'Accept mild anxiety as performance-enhancing arousal (Yerkes-Dodson law), use pre-tested calming techniques (deep breathing, brief grounding), and refocus on the current question.',
      'Reschedule the test if you feel any anxiety at all.',
      'Take anxiolytic medication on test day for the first time to ensure calm performance.'
    ],
    correctIndex: 1,
    explanation: 'The Yerkes-Dodson law: moderate arousal optimizes performance. Complete suppression of anxiety is counterproductive and impossible. Pre-practiced stress management tools (box breathing, brief grounding exercises) reduce arousal to an optimal level without sedation. Introducing new medications on test day is dangerous and inadvisable.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'MCAT Structure Overview' },
    { partNumber: 2, partTitle: 'Section Order' },
    { partNumber: 3, partTitle: 'Time Management' },
    { partNumber: 4, partTitle: 'Flagging & Review' },
    { partNumber: 5, partTitle: 'Managing Fatigue' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
