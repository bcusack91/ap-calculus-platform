/**
 * Entrance Quiz — Operant Conditioning (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'oc-ent-1a',
    question: 'Thorndike\'s Law of Effect states that behaviors followed by satisfying consequences are:',
    options: ['Extinguished over time', 'More likely to be repeated', 'Reflexive and involuntary', 'Unrelated to future behavior'],
    correctIndex: 1,
    explanation: 'The Law of Effect states that behaviors followed by satisfying (positive) consequences are more likely to be repeated, while those followed by unpleasant consequences are less likely.',
    partNumber: 1,
    partTitle: 'Thorndike & Skinner'
  },
  {
    id: 'oc-ent-1b',
    question: 'A Skinner box is a controlled environment used to study operant conditioning. It typically contains:',
    options: ['A maze with food at the end', 'A lever or key that the animal can press to receive reinforcement', 'A mirror for self-recognition studies', 'A treadmill to measure activity levels'],
    correctIndex: 1,
    explanation: 'The Skinner box (operant conditioning chamber) contains a lever or key the animal can press and a mechanism to deliver reinforcement (food pellets), allowing precise measurement of behavior.',
    partNumber: 1,
    partTitle: 'Thorndike & Skinner'
  },
  {
    id: 'oc-ent-2a',
    question: 'A teacher gives a student a sticker for completing homework. The student does homework more often. This is an example of:',
    options: ['Negative reinforcement', 'Positive punishment', 'Positive reinforcement', 'Negative punishment'],
    correctIndex: 2,
    explanation: 'Positive reinforcement involves adding something pleasant (sticker) after a behavior, which increases the likelihood of that behavior being repeated.',
    partNumber: 2,
    partTitle: 'Reinforcement Types'
  },
  {
    id: 'oc-ent-2b',
    question: 'Taking aspirin to relieve a headache is an example of negative reinforcement because:',
    options: ['Something pleasant is added', 'Something unpleasant is removed, increasing the behavior', 'Something unpleasant is added to decrease behavior', 'Something pleasant is taken away'],
    correctIndex: 1,
    explanation: 'Negative reinforcement removes something unpleasant (headache pain), which increases the behavior (taking aspirin). It is NOT punishment — it increases behavior.',
    partNumber: 2,
    partTitle: 'Reinforcement Types'
  },
  {
    id: 'oc-ent-3a',
    question: 'A parent spanks a child for misbehaving. This is an example of:',
    options: ['Negative reinforcement', 'Positive punishment', 'Negative punishment', 'Positive reinforcement'],
    correctIndex: 1,
    explanation: 'Positive punishment adds something unpleasant (spanking) after the behavior to decrease the likelihood of that behavior occurring again.',
    partNumber: 3,
    partTitle: 'Punishment'
  },
  {
    id: 'oc-ent-3b',
    question: 'A teenager loses phone privileges for breaking curfew. This is an example of:',
    options: ['Positive reinforcement', 'Positive punishment', 'Negative reinforcement', 'Negative punishment'],
    correctIndex: 3,
    explanation: 'Negative punishment removes something pleasant (phone privileges) after an undesired behavior to decrease that behavior.',
    partNumber: 3,
    partTitle: 'Punishment'
  },
  {
    id: 'oc-ent-4a',
    question: 'A factory worker is paid for every 10 widgets produced. This is a _____ schedule of reinforcement.',
    options: ['Variable-ratio', 'Fixed-interval', 'Fixed-ratio', 'Variable-interval'],
    correctIndex: 2,
    explanation: 'A fixed-ratio schedule provides reinforcement after a set number of responses — in this case, every 10 widgets produced.',
    partNumber: 4,
    partTitle: 'Schedules of Reinforcement'
  },
  {
    id: 'oc-ent-4b',
    question: 'Slot machines use a variable-ratio schedule of reinforcement. This schedule produces:',
    options: ['The slowest response rate of all schedules', 'A high, consistent response rate that is highly resistant to extinction', 'Rapid extinction once reinforcement stops', 'Responses only near the expected reinforcement time'],
    correctIndex: 1,
    explanation: 'Variable-ratio schedules produce the highest, most consistent response rates and are highly resistant to extinction because the organism never knows when the next reinforcement will come.',
    partNumber: 4,
    partTitle: 'Schedules of Reinforcement'
  },
  {
    id: 'oc-ent-5a',
    question: 'Shaping involves reinforcing:',
    options: ['Only the final desired behavior', 'Random behaviors until the correct one appears', 'Successive approximations toward the desired behavior', 'Every behavior the organism performs'],
    correctIndex: 2,
    explanation: 'Shaping is the process of reinforcing successive approximations — behaviors that are increasingly closer to the desired target behavior.',
    partNumber: 5,
    partTitle: 'Shaping'
  },
  {
    id: 'oc-ent-5b',
    question: 'In behavioral chaining, each behavior in a sequence:',
    options: ['Must be reinforced independently every time', 'Serves as a cue for the next behavior in the chain', 'Is performed simultaneously', 'Requires a separate Skinner box'],
    correctIndex: 1,
    explanation: 'Chaining links a sequence of behaviors together, where each step serves as a discriminative stimulus (cue) for the next step in the chain.',
    partNumber: 5,
    partTitle: 'Shaping'
  },
  {
    id: 'oc-ent-6a',
    question: 'A child cleans their room to stop their parent from nagging. This is best described as:',
    options: ['Positive punishment', 'Negative punishment', 'Positive reinforcement', 'Negative reinforcement'],
    correctIndex: 3,
    explanation: 'The child\'s behavior (cleaning) removes an aversive stimulus (nagging), which increases the likelihood of cleaning in the future. This is negative reinforcement.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'oc-ent-6b',
    question: 'Which reinforcement schedule leads to the fastest acquisition of a new behavior but is also the least resistant to extinction?',
    options: ['Variable-ratio', 'Fixed-interval', 'Continuous reinforcement', 'Variable-interval'],
    correctIndex: 2,
    explanation: 'Continuous reinforcement (reinforcing every correct response) produces the fastest learning but behaviors extinguish quickly once reinforcement stops. Partial schedules are more resistant to extinction.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'oc-ent-7a',
    question: 'In a token economy, tokens function as _____ reinforcers that can be exchanged for _____ reinforcers.',
    options: ['Primary; secondary', 'Secondary; primary', 'Unconditioned; neutral', 'Negative; positive'],
    correctIndex: 1,
    explanation: 'Tokens are secondary (conditioned) reinforcers — they have no inherent value but can be exchanged for primary (unconditioned) reinforcers like food, privileges, or other rewards.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'oc-ent-7b',
    question: 'The key distinction between operant and classical conditioning is that operant conditioning involves:',
    options: ['Involuntary reflexive responses', 'Associations between two stimuli', 'Voluntary behaviors shaped by consequences', 'Responses that cannot be extinguished'],
    correctIndex: 2,
    explanation: 'Operant conditioning involves voluntary behaviors that are shaped by their consequences (reinforcement or punishment). Classical conditioning involves involuntary, reflexive responses.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Thorndike & Skinner' },
    { partNumber: 2, partTitle: 'Reinforcement Types' },
    { partNumber: 3, partTitle: 'Punishment' },
    { partNumber: 4, partTitle: 'Schedules of Reinforcement' },
    { partNumber: 5, partTitle: 'Shaping' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
