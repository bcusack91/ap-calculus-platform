/**
 * Entrance Quiz — Observational & Cognitive Learning (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Bandura's Bobo Doll
  {
    id: 'olc-ent-1a',
    question: 'A boy watches his older brother get caught and grounded for hiding a phone under his mattress. The boy never tries it himself. Months later, a friend offers him five dollars to show how the trick works, and he demonstrates it perfectly. What does this show?',
    options: ['He never learned the trick until he was paid', 'The punishment he saw curbed doing, not learning', 'Being paid produced a sudden insight into it', 'Direct reinforcement is required for learning'],
    correctIndex: 1,
    explanation: 'He learned the behavior by observation, but vicarious punishment kept him from performing it until an incentive appeared. Learning and performance are different.',
    partNumber: 1,
    partTitle: 'Bandura\'s Bobo Doll',
  },
  {
    id: 'olc-ent-1b',
    question: 'In a study modeled on Bandura\'s, preschoolers are randomly assigned to watch an aggressive adult, a calm adult or no adult before playing in a room with a large inflatable doll. What is the main purpose of the no-adult group?',
    options: ['To give a baseline for comparison', 'To reward children for calm play with the doll', 'To make sure every child sees an aggressive model', 'To measure how similar the models are to the children'],
    correctIndex: 0,
    explanation: 'A control group with no model shows how much aggression children display on their own, so researchers can tell whether watching a model changed behavior.',
    partNumber: 1,
    partTitle: 'Bandura\'s Bobo Doll',
  },

  // Part 2: Models, Similarity, and Vicarious Conditioning
  {
    id: 'olc-ent-2a',
    question: 'A school wants to reduce vaping among its 10th graders. According to social learning theory, which message is most likely to work?',
    options: ['A doctor lists the chemicals found in vapor', 'A video of a classmate suspended for it', 'A retired athlete urging teens to stay healthy', 'A poster of statistics about lung damage'],
    correctIndex: 1,
    explanation: 'A similar model (a same-grade student) who receives a consequence (suspension) combines model similarity with vicarious punishment, both of which make imitation, or avoidance, more likely.',
    partNumber: 2,
    partTitle: 'Models, Similarity, and Vicarious Conditioning',
  },
  {
    id: 'olc-ent-2b',
    question: 'Researchers randomly assign 80 preschoolers to watch a puppet show in which a puppet who cleans up is given a prize, or one in which the same puppet cleans up and is ignored. They then count how many toys each child puts away. What is the dependent variable?',
    options: ['Whether the puppet received a prize', 'How similar the puppet is to the children', 'Random assignment of the preschoolers', 'The number of toys each child puts away'],
    correctIndex: 3,
    explanation: 'The dependent variable is what researchers measure: toys put away. Whether the puppet was rewarded is the manipulated independent variable.',
    partNumber: 2,
    partTitle: 'Models, Similarity, and Vicarious Conditioning',
  },

  // Part 3: Cognitive Factors in Learning
  {
    id: 'olc-ent-3a',
    question: 'Maya aced three practice tests, says "I can handle this," and studies extra for a hard final. Leo failed several tests despite studying and has stopped studying, saying nothing he does matters. Which concepts describe Maya and Leo, in order?',
    options: ['Latent learning; insight learning', 'Learned helplessness; self-efficacy', 'Self-efficacy; learned helplessness', 'Vicarious reinforcement; shaping'],
    correctIndex: 2,
    explanation: 'Maya\'s confidence from past success is high self-efficacy. Leo\'s belief that his efforts have no effect, after uncontrollable failure, is learned helplessness.',
    partNumber: 3,
    partTitle: 'Cognitive Factors in Learning',
  },
  {
    id: 'olc-ent-3b',
    question: 'According to Bandura, which experience would most strongly raise a student\'s self-efficacy for public speaking?',
    options: ['Watching a famous speaker on video', 'Being told by a parent she will do great', 'Noticing her heart pound before she speaks', 'Giving several short talks well in class'],
    correctIndex: 3,
    explanation: 'Mastery experiences, actual past successes, are the strongest source of self-efficacy. Watching others, encouragement and reading one\'s arousal are weaker sources.',
    partNumber: 3,
    partTitle: 'Cognitive Factors in Learning',
  },

  // Part 4: Insight Learning vs. Trial and Error
  {
    id: 'olc-ent-4a',
    question: 'A participant\'s times to solve a puzzle on six trials are 300, 290, 310, 20, 18 and 19 seconds. No feedback or rewards were given between trials. Which kind of learning do these data suggest?',
    options: ['Insight learning', 'Trial-and-error learning', 'Latent learning', 'Shaping'],
    correctIndex: 0,
    explanation: 'Performance stays flat and then improves suddenly and stays improved, a step-shaped curve that signals insight. Trial and error would show gradual improvement.',
    partNumber: 4,
    partTitle: 'Insight Learning vs. Trial and Error',
  },
  {
    id: 'olc-ent-4b',
    question: 'Which situation best illustrates insight learning?',
    options: ['A boy opens a stuck drawer after his sister shows him how', 'A boy jiggles a stuck drawer randomly until it finally opens', 'A boy stares at a stuck drawer, then thinks to slide a ruler under it', 'A boy flinches whenever he hears the stuck drawer squeak'],
    correctIndex: 2,
    explanation: 'Insight is a sudden solution that appears without a model to copy, reinforcement for partial attempts or a paired stimulus. The other options describe observational learning, trial and error and classical conditioning.',
    partNumber: 4,
    partTitle: 'Insight Learning vs. Trial and Error',
  },

  // Part 5: Biological Constraints on Learning
  {
    id: 'olc-ent-5a',
    question: 'Rats and quail drink water that is both sour-tasting and dyed blue, and then are made mildly ill. Later, the rats avoid sour water of any color, while the quail avoid blue water of any taste. Which conclusion is best supported?',
    options: ['Quail cannot form aversions to anything they eat', 'Illness produces only operant learning in birds', 'The two species copied what the other avoided', 'Each species links illness to its main food cue'],
    correctIndex: 3,
    explanation: 'Rats find food mainly by taste and quail mainly by sight, and each linked illness to that cue. Some pairings are learned more readily than others, depending on what a species evolved to rely on, which is biological preparedness.',
    partNumber: 5,
    partTitle: 'Biological Constraints on Learning',
  },
  {
    id: 'olc-ent-5b',
    question: 'Phobias of snakes, spiders and heights are far more common than phobias of cars or electrical outlets, even though cars and outlets cause more injuries today. Which concept best explains this pattern?',
    options: ['Instinctive drift', 'Learned helplessness', 'Biological preparedness', 'Latent learning'],
    correctIndex: 2,
    explanation: 'Humans are predisposed to learn fears of threats that endangered our ancestors, so those fears are acquired more easily than fears of modern dangers.',
    partNumber: 5,
    partTitle: 'Biological Constraints on Learning',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'olc-ent-6a',
    question: 'A boy sees his sister praised for setting the dinner table and starts setting it too. Later, his parents give him extra dessert each time he sets it, and he sets it more often. Which concepts explain the two changes, in order?',
    options: ['Positive reinforcement, then vicarious reinforcement', 'Latent learning, then negative reinforcement', 'Vicarious reinforcement, then positive reinforcement', 'Classical conditioning, then insight learning'],
    correctIndex: 2,
    explanation: 'First he copied a model whose behavior was rewarded (vicarious reinforcement). Then a pleasant consequence was added to his own behavior, strengthening it (positive reinforcement).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'olc-ent-6b',
    question: 'For months a girl rides in the back seat to her friend\'s house and never pays attention to directions. When she gets her license, she drives there correctly on her first try without a map. Which concept best explains this?',
    options: ['Insight learning', 'Latent learning', 'Instinctive drift', 'Vicarious punishment'],
    correctIndex: 1,
    explanation: 'She learned the route without reinforcement, and the learning did not show until she had a reason to use it. That is latent learning, often described as forming a cognitive map.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'olc-ent-7a',
    question: 'Researchers randomly assigned 90 teens to watch a video of either a same-age peer or an adult donating part of a payment to charity and being thanked. Afterward, 62% of the peer-video group and 38% of the adult-video group donated part of their own payment. Which conclusion do the results support?',
    options: ['Similar models are imitated more', 'Direct rewards are required for learning', 'Teens learn mainly from adult role models', 'Nothing, since the study is correlational'],
    correctIndex: 0,
    explanation: 'Random assignment makes this an experiment, and teens copied the same-age model more often, supporting the idea that the more similar a model is, the more likely the behavior is learned.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'olc-ent-7b',
    question: 'An EBQ claim says peer mentors help struggling students. Source 1: students copied the study habits of same-age mentors more than those of teachers. Source 2: students who had stopped trying began working again after mentors helped them succeed at small tasks. Which concepts best explain Sources 1 and 2, in order?',
    options: ['Self-efficacy, then model similarity', 'Insight learning, then taste aversion', 'Instinctive drift, then latent learning', 'Model similarity, then self-efficacy'],
    correctIndex: 3,
    explanation: 'Copying same-age mentors more than teachers reflects model similarity. Small successes rebuilding effort reflects self-efficacy built through mastery experiences.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Bandura\'s Bobo Doll' },
    { partNumber: 2, partTitle: 'Models, Similarity, and Vicarious Conditioning' },
    { partNumber: 3, partTitle: 'Cognitive Factors in Learning' },
    { partNumber: 4, partTitle: 'Insight Learning vs. Trial and Error' },
    { partNumber: 5, partTitle: 'Biological Constraints on Learning' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
