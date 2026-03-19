/**
 * Entrance Quiz — Classical Conditioning (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cc-ent-1a',
    question: 'In Pavlov\'s experiment, the bell was initially a neutral stimulus. After repeated pairings with food, the bell became a:',
    options: ['Unconditioned stimulus', 'Conditioned stimulus', 'Unconditioned response', 'Neutral response'],
    correctIndex: 1,
    explanation: 'After repeated pairings with food (UCS), the bell changed from a neutral stimulus to a conditioned stimulus (CS) that could elicit salivation (CR) on its own.',
    partNumber: 1,
    partTitle: "Pavlov's Experiments"
  },
  {
    id: 'cc-ent-1b',
    question: 'In classical conditioning, the unconditioned stimulus (UCS) automatically triggers the:',
    options: ['Conditioned response', 'Neutral stimulus', 'Unconditioned response', 'Conditioned stimulus'],
    correctIndex: 2,
    explanation: 'The UCS automatically triggers the unconditioned response (UCR) without any learning. After conditioning, the CS triggers the conditioned response (CR).',
    partNumber: 1,
    partTitle: "Pavlov's Experiments"
  },
  {
    id: 'cc-ent-2a',
    question: 'During the acquisition phase of classical conditioning, which timing produces the strongest learning?',
    options: ['CS presented after the UCS', 'CS and UCS presented simultaneously', 'CS presented shortly before the UCS', 'UCS presented alone repeatedly'],
    correctIndex: 2,
    explanation: 'Acquisition is strongest when the CS is presented shortly before the UCS (forward conditioning), allowing the organism to learn the predictive relationship.',
    partNumber: 2,
    partTitle: 'Acquisition & Extinction'
  },
  {
    id: 'cc-ent-2b',
    question: 'A dog was conditioned to salivate to a bell. After the bell was presented alone many times, salivation stopped. Days later, the dog salivated again when hearing the bell. This is called:',
    options: ['Reconditioning', 'Generalization', 'Spontaneous recovery', 'Higher-order conditioning'],
    correctIndex: 2,
    explanation: 'Spontaneous recovery occurs when a conditioned response reappears after a rest period following extinction. The CR returns temporarily without additional CS-UCS pairings.',
    partNumber: 2,
    partTitle: 'Acquisition & Extinction'
  },
  {
    id: 'cc-ent-3a',
    question: 'A child is bitten by a golden retriever and becomes afraid of all dogs. This is an example of:',
    options: ['Discrimination', 'Extinction', 'Stimulus generalization', 'Higher-order conditioning'],
    correctIndex: 2,
    explanation: 'Stimulus generalization occurs when an organism responds to stimuli similar to the CS. The child generalizes fear from one dog to all dogs.',
    partNumber: 3,
    partTitle: 'Generalization & Discrimination'
  },
  {
    id: 'cc-ent-3b',
    question: 'A dog learns to salivate only when it hears a 1000 Hz tone and not when it hears a 500 Hz tone. This demonstrates:',
    options: ['Stimulus generalization', 'Spontaneous recovery', 'Stimulus discrimination', 'Acquisition'],
    correctIndex: 2,
    explanation: 'Stimulus discrimination is learning to respond only to the specific CS and not to similar stimuli. The dog distinguishes between the two tones.',
    partNumber: 3,
    partTitle: 'Generalization & Discrimination'
  },
  {
    id: 'cc-ent-4a',
    question: 'In higher-order conditioning, what happens?',
    options: ['A UCS is paired with a new UCS', 'An established CS is paired with a new neutral stimulus to create a second CS', 'Two UCRs are combined into one', 'The CR becomes stronger than the UCR'],
    correctIndex: 1,
    explanation: 'Higher-order (second-order) conditioning occurs when an already established conditioned stimulus is paired with a new neutral stimulus, turning the new stimulus into a second CS.',
    partNumber: 4,
    partTitle: 'Higher-Order Conditioning'
  },
  {
    id: 'cc-ent-4b',
    question: 'A bell has been conditioned to trigger salivation. Now a light is repeatedly paired with the bell (without food). Eventually the light alone triggers salivation. The light has become a:',
    options: ['Unconditioned stimulus', 'Neutral stimulus', 'Second-order conditioned stimulus', 'Unconditioned response'],
    correctIndex: 2,
    explanation: 'Through higher-order conditioning, the light was paired with the bell (existing CS) and became a second-order conditioned stimulus that can trigger salivation on its own.',
    partNumber: 4,
    partTitle: 'Higher-Order Conditioning'
  },
  {
    id: 'cc-ent-5a',
    question: 'Taste aversion is unique in classical conditioning because it:',
    options: ['Requires many pairings to develop', 'Can be learned in a single trial', 'Only works with visual stimuli', 'Cannot be extinguished'],
    correctIndex: 1,
    explanation: 'Taste aversion demonstrates one-trial learning — a single pairing of a food with nausea can produce a lasting conditioned aversion, even with a long delay between CS and UCS.',
    partNumber: 5,
    partTitle: 'Applications'
  },
  {
    id: 'cc-ent-5b',
    question: 'Which of the following is best explained by classical conditioning?',
    options: ['A student studies harder after receiving praise', 'A person feels anxious when seeing a dentist\'s office', 'A child learns to say "please" to get a cookie', 'A monkey learns to use a stick by watching another monkey'],
    correctIndex: 1,
    explanation: 'Phobias and emotional responses to associated stimuli (like anxiety at a dentist\'s office) are explained by classical conditioning. The office becomes a CS associated with pain (UCS).',
    partNumber: 5,
    partTitle: 'Applications'
  },
  {
    id: 'cc-ent-6a',
    question: 'A dog salivates when it hears a whistle that has been repeatedly paired with food. In this scenario, the whistle is the _____ and salivation to the whistle is the _____.',
    options: ['UCS; UCR', 'CS; CR', 'NS; UCR', 'CS; UCS'],
    correctIndex: 1,
    explanation: 'After conditioning, the whistle is the conditioned stimulus (CS) and salivation in response to the whistle is the conditioned response (CR).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'cc-ent-6b',
    question: 'Classical conditioning is considered involuntary because:',
    options: ['The organism chooses to respond based on consequences', 'The organism deliberately pairs the stimuli', 'The response is reflexive — the organism does not choose it', 'It requires conscious effort to maintain'],
    correctIndex: 2,
    explanation: 'Classical conditioning involves reflexive, involuntary responses. The organism does not choose to respond — the CR is automatically triggered by the CS after conditioning.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'cc-ent-7a',
    question: 'Watson and Rayner\'s "Little Albert" experiment demonstrated that:',
    options: ['Phobias are always genetic in origin', 'Emotional responses such as fear can be classically conditioned', 'Children cannot be conditioned before age 2', 'Extinction is impossible in young children'],
    correctIndex: 1,
    explanation: 'Watson conditioned Little Albert to fear a white rat by pairing it with a loud noise (UCS). This demonstrated that emotional responses like fear can be classically conditioned.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'cc-ent-7b',
    question: 'Biological preparedness in classical conditioning refers to the idea that:',
    options: ['All stimuli are equally likely to become conditioned', 'Organisms are predisposed to form certain conditioned associations more easily than others', 'Conditioning only works with biological stimuli like food', 'Preparedness eliminates the need for CS-UCS pairings'],
    correctIndex: 1,
    explanation: 'Biological preparedness means organisms are evolutionarily predisposed to develop certain conditioned responses more easily (e.g., food aversions over visual associations with nausea).',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Pavlov's Experiments" },
    { partNumber: 2, partTitle: 'Acquisition & Extinction' },
    { partNumber: 3, partTitle: 'Generalization & Discrimination' },
    { partNumber: 4, partTitle: 'Higher-Order Conditioning' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
