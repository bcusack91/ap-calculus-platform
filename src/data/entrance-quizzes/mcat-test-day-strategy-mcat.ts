/**
 * Entrance Quiz — MCAT Test Day Strategy (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

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
    explanation: 'Each of the four sections scores 118–132, so the total MCAT score ranges from 472 (4 × 118) to 528 (4 × 132), with a midpoint of 500. The median score for applicants accepted to medical school is typically around 511–512. 400–1600 is the SAT scale and 1–45 the pre-2015 MCAT scale.',
    partNumber: 1,
    partTitle: 'MCAT Structure Overview'
  },

  // Part 2: Section Order
  {
    id: 'mtds-ent-2a',
    question: 'The MCAT is administered in a fixed section order (you cannot choose the order). Knowing the section order in advance is strategically important because:',
    options: [
      'You may leave a difficult section and return to it later on.',
      'You can plan pacing and breaks around the day\'s demands.',
      'The AAMC requires retesting any section below the 50th percentile.',
      'Later sections are weighted more heavily.'
    ],
    correctIndex: 1,
    explanation: 'Because the order is fixed you know in advance where the cognitive mode changes — CARS after a science section, then the long biology section as fatigue builds — so pacing, breaks, and food can be rehearsed around it. Sections cannot be skipped or reordered, the AAMC never requires a retake for a low section, and every scored question counts the same no matter where it falls.',
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
    explanation: 'CARS is answered exclusively from information in the passage, and letting outside knowledge override a passage-supported answer is one of the most common CARS errors. The three science sections work the other way: they require you to combine passage data WITH content you already know, which is what makes CARS unique in demanding pure text-based reasoning.',
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
      'About 30 seconds per question',
      'About 1 minute 36 seconds',
      'About 3 minutes per question',
      'About 5 minutes per question'
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
      'Flag every question you answer.',
      'Flag only the questions you are unsure of or skipped.',
      'Never flag anything, since revisiting invites second-guessing.',
      'Flag the first and last question of each passage set.'
    ],
    correctIndex: 1,
    explanation: 'Flags are a triage tool: mark the questions you guessed on or skipped, keep moving to protect your pace, and spend whatever time is left only on those. Flagging everything destroys the signal the flag was supposed to carry, refusing to flag leaves you no way back to a question you rushed, and flagging by position rather than by uncertainty tracks nothing useful.',
    partNumber: 4,
    partTitle: 'Flagging & Review'
  },
  {
    id: 'mtds-ent-4b',
    question: 'Research on answer changing on standardized tests suggests that:',
    options: [
      'First instincts are correct, so answers should never change.',
      'Considered changes, made for a specific reason, more often help.',
      'Any change to an answer tends to lower the final score.',
      'Reviewers should change answers to counter confirmation bias.'
    ],
    correctIndex: 1,
    explanation: 'Studies of answer changing find that deliberate revisions — you caught a misread, you spotted data you had skipped, you applied the concept correctly on the second pass — improve scores more often than they hurt, while anxiety-driven changes do not. So change an answer when you can state the new reason, not merely because doubt has set in; the "never change" folklore and a policy of changing on principle both ignore that distinction.',
    partNumber: 4,
    partTitle: 'Flagging & Review'
  },

  // Part 5: Managing Fatigue
  {
    id: 'mtds-ent-5a',
    question: 'The MCAT is approximately 7.5 hours long (including check-in and breaks). Which of the following strategies best helps maintain cognitive performance across the full test day?',
    options: [
      'Skip the optional breaks so you finish sooner and stay fresher.',
      'Eat one large high-carbohydrate meal right before the test.',
      'Use breaks for small balanced snacks, water, and movement.',
      'Keep caffeine coming steadily through all four sections.'
    ],
    correctIndex: 2,
    explanation: 'Across a seven-hour day the limiting resource is stable energy and attention, which small protein-balanced snacks, hydration, and a minute of movement protect. Skipping breaks spends working memory you will need in section 4, one heavy carbohydrate meal invites a post-prandial slump, and stacked caffeine buys alertness early at the price of jitteriness and a crash later.',
    partNumber: 5,
    partTitle: 'Managing Fatigue'
  },
  {
    id: 'mtds-ent-5b',
    question: 'A student finds that her performance on the fourth MCAT section (Psych/Soc) is consistently lower than her practice averages, despite knowing the content well. The most likely explanation and appropriate intervention is:',
    options: [
      'Psych/Soc is inherently harder, so she needs more content review.',
      'Fatigue is the cause; full-length practice will build stamina.',
      'She should skip the break before section 4 to bank review time.',
      'Psych/Soc is scored differently and matters less overall.'
    ],
    correctIndex: 1,
    explanation: 'A section-4 drop with content knowledge intact is the signature of cumulative cognitive fatigue, and the remedy is training the endurance: full-lengths under real timing and break conditions, reviewed for where attention slipped. Extra content review treats a problem she does not have, skipping the break makes the fatigue worse, and all four sections contribute equally to the total score.',
    partNumber: 5,
    partTitle: 'Managing Fatigue'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mtds-ent-6a',
    question: 'A student has 5 minutes remaining in a science section with 8 questions unanswered. The best strategy is to:',
    options: [
      'Work each remaining question fully, choice by choice.',
      'Make a quick educated guess on each; leave none blank.',
      'Answer only the two she feels surest about, skipping the rest.',
      'Select answers at random to save the remaining time.'
    ],
    correctIndex: 1,
    explanation: 'The MCAT carries no penalty for a wrong answer, so a blank is a guaranteed zero while a guess is at least a one-in-four chance — better still once an obviously wrong choice is eliminated. Five minutes is enough to scan eight stems for something recognizable and commit to an answer on each. Working carefully through even two of them leaves six blank, and clicking at random throws away the eliminations you could have made.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mtds-ent-6b',
    question: 'A student encounters a difficult passage topic she has never seen before. The most effective immediate response is to:',
    options: [
      'Stop and search memory for anything you know on the topic.',
      'Treat the passage as self-contained and reason from it.',
      'Skip the passage and every question attached to it.',
      'Assume the questions are traps and answer against instinct.'
    ],
    correctIndex: 1,
    explanation: 'MCAT passages carry the information their questions need, and unfamiliar topics are deliberate: the exam is measuring whether you can reason from given data, not whether you have met the subject before. Straining after half-remembered content burns time you do not have, abandoning the set forfeits five to seven questions, and treating the questions as tricks replaces reasoning with superstition.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mtds-ent-7a',
    question: 'The most evidence-based MCAT preparation strategy involves:',
    options: [
      'Read every review book cover to cover before doing questions.',
      'Take a full-length test every day without reviewing misses.',
      'Spaced review, active recall, and full-lengths with error analysis.',
      'Work only on your weakest subject for the entire prep period.'
    ],
    correctIndex: 2,
    explanation: 'The evidence favors distributing review over time, retrieving rather than re-reading, rehearsing the full-length format to build stamina and expose timing problems, and mining each wrong answer for the specific gap behind it. Reading straight through before testing yourself delays retrieval practice, daily full-lengths generate data nobody analyzes, and single-subject tunnel vision lets the rest of the exam decay.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mtds-ent-7b',
    question: 'Which of the following best describes how to handle test anxiety on MCAT test day?',
    options: [
      'Suppress every anxious thought and focus only on content.',
      'Accept mild arousal, use practiced calming tools, and refocus.',
      'Reschedule the exam if you feel any anxiety at all.',
      'Take an anxiolytic for the first time on test day.'
    ],
    correctIndex: 1,
    explanation: 'The Yerkes-Dodson law describes an inverted U: moderate arousal helps performance, so the aim is to bring anxiety down to a workable level rather than to zero. Tools rehearsed during practice — paced breathing, a brief grounding routine — do that without sedation. Suppression tends to amplify the thought it targets, rescheduling over ordinary nerves postpones the problem indefinitely, and an untried medication on test day risks sedation exactly when clarity matters most.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
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
