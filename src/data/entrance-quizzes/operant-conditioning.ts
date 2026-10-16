/**
 * Entrance Quiz — Operant Conditioning (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Thorndike & Skinner
  {
    id: 'oc-ent-1a',
    question: 'A cat in a puzzle box needs 160 seconds to escape on its first trial, 90 seconds by the fifth trial and 10 seconds by the twentieth. Which principle best explains the steady decline?',
    options: ['Law of effect', 'Classical conditioning', 'Insight learning', 'Instinctive drift'],
    correctIndex: 0,
    explanation: 'Actions that led to escape and food were followed by satisfying consequences, so they were gradually "stamped in." The slow, steady decline fits the law of effect rather than a sudden insight.',
    partNumber: 1,
    partTitle: 'Thorndike & Skinner',
  },
  {
    id: 'oc-ent-1b',
    question: 'Which behavior is best explained by operant conditioning?',
    options: ['A diner feels queasy at the smell of a food that once made him ill', 'A worker arrives early more often after being praised for it', 'A child flinches at balloons after one popped in her face', 'A dog drools at the clink of its food bowl before dinner'],
    correctIndex: 1,
    explanation: 'Arriving early is a voluntary behavior strengthened by its consequence (praise). The other examples are involuntary responses to stimuli paired with something else, which is classical conditioning.',
    partNumber: 1,
    partTitle: 'Thorndike & Skinner',
  },

  // Part 2: Reinforcement Types
  {
    id: 'oc-ent-2a',
    question: 'Whenever a test feels hard, a student with test anxiety asks to leave for a bathroom break. Her anxiety drops each time she steps out, and she asks to leave more and more often. Which process is strengthening her leaving?',
    options: ['Positive reinforcement', 'Negative punishment', 'Negative reinforcement', 'Positive punishment'],
    correctIndex: 2,
    explanation: 'Leaving removes an unpleasant feeling (anxiety), and the behavior increases. Removing something aversive to strengthen a behavior is negative reinforcement.',
    partNumber: 2,
    partTitle: 'Reinforcement Types',
  },
  {
    id: 'oc-ent-2b',
    question: 'A trainer sounds a clicker just before giving a dolphin a fish. After many sessions, the click alone keeps the dolphin performing its tricks. What has the click become?',
    options: ['A primary reinforcer', 'A negative reinforcer', 'A positive punishment', 'A secondary reinforcer'],
    correctIndex: 3,
    explanation: 'The click gained its power through association with food, a primary reinforcer, so it is a secondary (conditioned) reinforcer.',
    partNumber: 2,
    partTitle: 'Reinforcement Types',
  },

  // Part 3: Punishment
  {
    id: 'oc-ent-3a',
    question: 'A soccer player who argues with the referee is benched for the next quarter, missing playing time she enjoys. Afterward, she argues with referees less often. Which consequence is this?',
    options: ['Positive punishment', 'Negative punishment', 'Negative reinforcement', 'Extinction'],
    correctIndex: 1,
    explanation: 'Something pleasant (playing time) was removed, and the behavior decreased. That is negative punishment.',
    partNumber: 3,
    partTitle: 'Punishment',
  },
  {
    id: 'oc-ent-3b',
    question: 'A father yells at and spanks his son whenever the boy hits his younger sister. The hitting stops when the father is home but continues when he is away, and the boy begins hitting classmates at school. Which conclusion is best supported?',
    options: ['The punishment ended the urge to hit everywhere', 'The father was shaping kinder behavior in steps', 'The spanking worked as negative reinforcement', 'Punishment only suppressed the behavior'],
    correctIndex: 3,
    explanation: 'Punishment tends to suppress a behavior only when the punisher is present, does not teach what to do instead, and can model aggression. The boy\'s pattern shows all of these limits.',
    partNumber: 3,
    partTitle: 'Punishment',
  },

  // Part 4: Schedules of Reinforcement
  {
    id: 'oc-ent-4a',
    question: 'Two rats learn to press a lever. Rat A gets food for every press. Rat B gets food after an unpredictable number of presses, about 10 on average. When food stops entirely, which outcome is most likely?',
    options: ['Rat A keeps pressing far longer than Rat B', 'Both rats stop pressing at the same moment', 'Neither rat ever stops pressing the lever', 'Rat B keeps pressing much longer than Rat A does'],
    correctIndex: 3,
    explanation: 'Rat B was on a variable-ratio schedule, which produces the greatest resistance to extinction. Continuous reinforcement, as Rat A received, extinguishes fastest.',
    partNumber: 4,
    partTitle: 'Schedules of Reinforcement',
  },
  {
    id: 'oc-ent-4b',
    question: 'A graph of a rat\'s lever pressing shows almost no presses right after each food pellet, then faster and faster pressing until the next pellet. Food comes for the first press after each 2-minute period. Which schedule produced this pattern?',
    options: ['Fixed-ratio', 'Variable-ratio', 'Fixed-interval', 'Variable-interval'],
    correctIndex: 2,
    explanation: 'Reinforcement for the first response after a set time produces the "scalloped" pattern: a pause after reinforcement, then accelerating responses as the time approaches. That is a fixed-interval schedule.',
    partNumber: 4,
    partTitle: 'Schedules of Reinforcement',
  },

  // Part 5: Shaping
  {
    id: 'oc-ent-5a',
    question: 'Trainers reinforce a chicken with grain for standing still on a platform. Instead, the chicken scratches at the floor more and more over the weeks, even though reinforcement continues. Which concept explains this?',
    options: ['Learned helplessness', 'Superstitious behavior', 'Instinctive drift', 'Shaping'],
    correctIndex: 2,
    explanation: 'The chicken\'s innate food-seeking behavior (scratching) is overriding the trained behavior. Instinctive drift shows that only certain behaviors can be shaped through reinforcement.',
    partNumber: 5,
    partTitle: 'Shaping',
  },
  {
    id: 'oc-ent-5b',
    question: 'A coach wants a nervous swimmer to dive from the high board. Which plan uses shaping?',
    options: ['Praise each step from edge jumps up to high dives', 'Praise her only when she finally dives from the high board', 'Scold her each time she refuses to climb up the ladder', 'Let her watch an expert dive from the high board many times'],
    correctIndex: 0,
    explanation: 'Shaping reinforces successive approximations: each step closer to the target behavior is rewarded until the full behavior appears.',
    partNumber: 5,
    partTitle: 'Shaping',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'oc-ent-6a',
    question: 'A driver once sat in a three-hour traffic jam on the highway. Now she takes a longer back road every day and never sits in that jam again. How is her route choice best classified?',
    options: ['Positive punishment, since the back road is longer', 'Negative punishment, since she gives up time each day', 'Negative reinforcement, since she avoids that jam', 'Positive reinforcement, since the new road is scenic'],
    correctIndex: 2,
    explanation: 'Taking the back road prevents an aversive experience, and the behavior keeps occurring. Avoidance of something unpleasant is negative reinforcement.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'oc-ent-6b',
    question: 'After being bitten, a boy feels his heart race whenever he sees a dog. He crosses the street when one approaches, which calms him, and he crosses more and more often. Which pairing explains the two responses?',
    options: ['Racing heart: operant; crossing: classical', 'Racing heart: classical; crossing: negative reinforcement', 'Racing heart: positive punishment; crossing: shaping', 'Racing heart: negative reinforcement; crossing: classical'],
    correctIndex: 1,
    explanation: 'The racing heart is an involuntary response to a stimulus paired with the bite (classical conditioning). Crossing the street is voluntary and is strengthened because it removes fear (negative reinforcement).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'oc-ent-7a',
    question: 'For months, an employee\'s requests for help were ignored no matter how she phrased them. When a new, responsive manager arrives, she no longer asks for help at all. Which concept best explains her behavior?',
    options: ['Latent learning', 'Insight learning', 'Instinctive drift', 'Learned helplessness'],
    correctIndex: 3,
    explanation: 'Repeated experience with having no control over an outcome led her to stop trying, even after control became possible. That is learned helplessness.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'oc-ent-7b',
    question: 'In a practice study, rats were randomly assigned to two groups. Group A found food at the end of a maze every day. Group B explored the maze with no food for 10 days, then found food from day 11 on. By day 12, Group B made as few errors as Group A. Which conclusion is best supported?',
    options: ['Group B learned without reward but did not show it', 'Group B learned only after food appeared, so reward is required', 'Group B showed instinctive drift toward the food at the end', 'Group A\'s reinforcement somehow taught Group B the maze'],
    correctIndex: 0,
    explanation: 'Group B could not have learned the whole maze in one day, so it must have learned the layout during the unrewarded days without showing it. That is latent learning, often demonstrated with cognitive maps.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Thorndike & Skinner' },
    { partNumber: 2, partTitle: 'Reinforcement Types' },
    { partNumber: 3, partTitle: 'Punishment' },
    { partNumber: 4, partTitle: 'Schedules of Reinforcement' },
    { partNumber: 5, partTitle: 'Shaping' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
