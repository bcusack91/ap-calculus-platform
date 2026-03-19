/**
 * Entrance Quiz — Observational Learning & Cognition (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'olc-ent-1a',
    question: 'In Bandura\'s Bobo doll experiment, children who watched an adult act aggressively toward the doll:',
    options: ['Showed no change in behavior', 'Were less aggressive than the control group', 'Imitated the aggressive behavior they observed', 'Only imitated if they were directly rewarded'],
    correctIndex: 2,
    explanation: 'Children who observed an adult behaving aggressively toward the Bobo doll imitated the aggressive behavior, demonstrating that behavior can be learned through observation.',
    partNumber: 1,
    partTitle: "Bandura's Bobo Doll"
  },
  {
    id: 'olc-ent-1b',
    question: 'According to Bandura, the four key processes required for observational learning are:',
    options: ['Stimulus, response, reinforcement, extinction', 'Attention, retention, reproduction, motivation', 'Encoding, storage, retrieval, forgetting', 'Acquisition, extinction, generalization, discrimination'],
    correctIndex: 1,
    explanation: 'Observational learning requires attention (noticing the behavior), retention (remembering it), reproduction (ability to perform it), and motivation (reason to do it) — ARRM.',
    partNumber: 1,
    partTitle: "Bandura's Bobo Doll"
  },
  {
    id: 'olc-ent-2a',
    question: 'Mirror neurons are brain cells that fire both when:',
    options: ['Sleeping and waking', 'Eating and feeling hungry', 'Performing an action and observing someone else perform that same action', 'Experiencing pain and taking medication'],
    correctIndex: 2,
    explanation: 'Mirror neurons fire both when an individual performs an action and when they observe another person performing the same action, providing a neural basis for observational learning.',
    partNumber: 2,
    partTitle: 'Mirror Neurons'
  },
  {
    id: 'olc-ent-2b',
    question: 'Mirror neurons are believed to play a role in:',
    options: ['Classical conditioning of fear responses', 'Empathy and understanding others\' intentions', 'Sensory memory storage', 'The fight-or-flight response'],
    correctIndex: 1,
    explanation: 'Mirror neurons may underlie our ability to empathize with others and understand their intentions by internally simulating their actions and emotions.',
    partNumber: 2,
    partTitle: 'Mirror Neurons'
  },
  {
    id: 'olc-ent-3a',
    question: 'Tolman\'s research demonstrated that rats formed cognitive maps, which are:',
    options: ['Physical maps placed in the maze', 'Mental representations of spatial layouts', 'Conditioned responses to maze stimuli', 'Genetic instincts for navigation'],
    correctIndex: 1,
    explanation: 'Cognitive maps are mental representations of spatial layouts. Tolman showed that rats developed internal maps of mazes, allowing them to find shortcuts when available.',
    partNumber: 3,
    partTitle: 'Cognitive Maps'
  },
  {
    id: 'olc-ent-3b',
    question: 'The formation of cognitive maps challenged strict behaviorism because:',
    options: ['It required punishment to develop', 'The maps were formed without direct reinforcement', 'It only worked with human subjects', 'It proved classical conditioning was incorrect'],
    correctIndex: 1,
    explanation: 'Cognitive maps developed without reinforcement, suggesting internal mental processes influence learning — challenging the strict behaviorist view that all learning requires reinforcement.',
    partNumber: 3,
    partTitle: 'Cognitive Maps'
  },
  {
    id: 'olc-ent-4a',
    question: 'Latent learning is best defined as learning that:',
    options: ['Occurs only through direct reinforcement', 'Occurs but is not demonstrated until there is motivation to do so', 'Cannot be measured by any means', 'Is always immediately visible in behavior'],
    correctIndex: 1,
    explanation: 'Latent learning occurs without reinforcement and is not demonstrated in behavior until the organism has a motivation (incentive) to display it.',
    partNumber: 4,
    partTitle: 'Latent Learning'
  },
  {
    id: 'olc-ent-4b',
    question: 'In Tolman\'s latent learning experiment, rats that explored a maze without food reward:',
    options: ['Never learned the maze layout', 'Learned the maze but only showed it when food was introduced', 'Performed worse than rats who were always rewarded', 'Required twice as many trials to learn the maze'],
    correctIndex: 1,
    explanation: 'Unrewarded rats had learned the maze layout (formed cognitive maps) but only demonstrated this knowledge when food was introduced as motivation — they quickly matched rewarded rats.',
    partNumber: 4,
    partTitle: 'Latent Learning'
  },
  {
    id: 'olc-ent-5a',
    question: 'Köhler\'s apes demonstrated insight learning when they:',
    options: ['Gradually learned through trial and error over many attempts', 'Suddenly realized they could stack boxes to reach bananas', 'Were conditioned to press a lever for food', 'Imitated a researcher solving the problem'],
    correctIndex: 1,
    explanation: 'Insight learning involves a sudden realization of a solution. Köhler\'s apes suddenly figured out they could stack boxes to reach hanging bananas, without gradual trial-and-error.',
    partNumber: 5,
    partTitle: 'Insight Learning'
  },
  {
    id: 'olc-ent-5b',
    question: 'How does insight learning differ from trial-and-error learning?',
    options: ['Insight learning requires reinforcement; trial-and-error does not', 'In insight learning, the solution comes all at once rather than gradually', 'Trial-and-error learning is faster than insight', 'Insight learning only occurs in humans'],
    correctIndex: 1,
    explanation: 'Insight learning is characterized by a sudden "aha!" moment where the solution appears all at once, unlike trial-and-error learning where solutions emerge gradually through repeated attempts.',
    partNumber: 5,
    partTitle: 'Insight Learning'
  },
  {
    id: 'olc-ent-6a',
    question: 'According to observational learning theory, exposure to media violence may increase aggression because:',
    options: ['It provides direct reinforcement for aggressive acts', 'Viewers model the aggressive behavior they observe', 'It triggers an unconditioned aggressive reflex', 'Media violence causes physical brain damage'],
    correctIndex: 1,
    explanation: 'Observational learning theory predicts that viewers will model (imitate) aggressive behavior observed in media, especially if the aggression appears rewarded or goes unpunished.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'olc-ent-6b',
    question: 'Vicarious reinforcement occurs when:',
    options: ['An observer is directly rewarded for imitating a model', 'An observer is more likely to imitate a model who was rewarded', 'A conditioned stimulus triggers a conditioned response', 'Punishment decreases the model\'s behavior'],
    correctIndex: 1,
    explanation: 'Vicarious reinforcement means the observer sees the model being rewarded, making the observer more likely to imitate the behavior — even without being directly reinforced themselves.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'olc-ent-7a',
    question: 'Bandura\'s social learning theory is significant because it:',
    options: ['Proved that only reinforcement drives learning', 'Bridges behaviorism and cognitive psychology', 'Showed that learning cannot occur without direct experience', 'Disproved all forms of classical conditioning'],
    correctIndex: 1,
    explanation: 'Social learning theory bridges behaviorism (learning through environment) and cognitive psychology (mental processes) by showing that cognitive processes like attention and memory mediate observational learning.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'olc-ent-7b',
    question: 'Observational learning can lead to the development of:',
    options: ['Only aggressive behaviors', 'Only behaviors that are directly reinforced', 'Both prosocial and antisocial behaviors', 'Only reflexive responses'],
    correctIndex: 2,
    explanation: 'Observational learning can produce both prosocial behaviors (helping, sharing) and antisocial behaviors (aggression). Modeling positive behavior is just as powerful as modeling negative behavior.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Bandura's Bobo Doll" },
    { partNumber: 2, partTitle: 'Mirror Neurons' },
    { partNumber: 3, partTitle: 'Cognitive Maps' },
    { partNumber: 4, partTitle: 'Latent Learning' },
    { partNumber: 5, partTitle: 'Insight Learning' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
