/**
 * Entrance Quiz — Motivation Theories (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What Motivates Behavior: Instincts and Drives
  {
    id: 'mot-ent-1a',
    question: 'After a long hike in the desert sun, a hiker drinks from her bottle until her thirst fades, then stops even though water is left. Which explanation fits her behavior best?',
    options: ['An instinct set off by a specific cue', 'A search for an optimal level of arousal', 'The pull of an attractive outside reward', 'Drive reduction restoring homeostasis'],
    correctIndex: 3,
    explanation: 'A physical need (low fluids) created a drive (thirst), and drinking removed it. Once balance returned, the drive faded and so did the behavior, which is drive-reduction theory.',
    partNumber: 1,
    partTitle: 'What Motivates Behavior: Instincts and Drives',
  },
  {
    id: 'mot-ent-1b',
    question: 'A magazine writer claims that people gossip because humans have a "gossip instinct," and offers as proof the fact that people everywhere gossip a great deal. What is the main weakness of this explanation?',
    options: ['It ignores how physical needs produce drives', 'It just relabels the behavior it describes', 'It relies on far too small a sample of gossip', 'It mistakes gossip for a simple newborn reflex'],
    correctIndex: 1,
    explanation: 'The only evidence for the "instinct" is the behavior it is meant to explain, so the reasoning is circular. Human social behavior also varies too much across people and cultures to be a fixed, species-typical pattern.',
    partNumber: 1,
    partTitle: 'What Motivates Behavior: Instincts and Drives',
  },

  // Part 2: Arousal Theory and the Yerkes-Dodson Law
  {
    id: 'mot-ent-2a',
    question: 'Four people each drink a large energy drink just before a task. According to the Yerkes-Dodson law, whose performance is most likely to suffer from the extra arousal?',
    options: ['A sprinter running a race she has run many times', 'A mover lifting heavy boxes onto a truck', 'A student working an unfamiliar logic proof', 'A typist copying a phrase he has memorized'],
    correctIndex: 2,
    explanation: 'Performance peaks at a lower arousal level for complex or new tasks, so high arousal pushes the student past the peak. Simple, well-practiced tasks like sprinting, lifting and typing a memorized phrase peak at higher arousal.',
    partNumber: 2,
    partTitle: 'Arousal Theory and the Yerkes-Dodson Law',
  },
  {
    id: 'mot-ent-2b',
    question: 'On a long, empty highway, a well-rested and well-fed driver turns up loud music and opens the window to feel the wind. Which theory explains her behavior best?',
    options: ['Arousal theory, because she raises stimulation to a good level', 'Drive-reduction theory, because she lowers tension created by a need', 'Incentive theory, because an outside reward is pulling her behavior', 'Instinct theory, because a fixed pattern is set off by a specific cue'],
    correctIndex: 0,
    explanation: 'She has no physical need to reduce; she is under-stimulated and acts to increase arousal. Only arousal theory predicts behavior that raises stimulation as well as behavior that lowers it.',
    partNumber: 2,
    partTitle: 'Arousal Theory and the Yerkes-Dodson Law',
  },

  // Part 3: Sensation-Seeking Theory
  {
    id: 'mot-ent-3a',
    question: 'Marco loses interest in jobs and friendships as soon as they become predictable, refuses to rewatch movies and gets restless eating the same lunch two days in a row. He has no interest in dangerous sports, wild parties or travel. Which type of sensation seeking does he show most clearly?',
    options: ['Thrill and adventure seeking', 'Boredom susceptibility', 'Experience seeking', 'Disinhibition'],
    correctIndex: 1,
    explanation: 'His pattern centers on what he cannot tolerate, sameness and routine, rather than on actively seeking danger, social loosening or new experiences. That is boredom susceptibility.',
    partNumber: 3,
    partTitle: 'Sensation-Seeking Theory',
  },
  {
    id: 'mot-ent-3b',
    question: 'In a survey of 250 adults, scores on a sensation-seeking questionnaire correlate +0.35 with the number of extreme sports each person has tried. Which conclusion is best supported?',
    options: ['Sensation seeking causes people to take up extreme sports', 'The two variables show no meaningful relationship at all', 'Trying extreme sports raises a person\'s questionnaire score', 'Higher scores tend to go with trying more extreme sports'],
    correctIndex: 3,
    explanation: 'A moderate positive correlation means higher scores are associated with more extreme sports. Because the study is correlational, it cannot show which variable causes the other or rule out a third variable such as age.',
    partNumber: 3,
    partTitle: 'Sensation-Seeking Theory',
  },

  // Part 4: Self-Determination and Incentive Theory
  {
    id: 'mot-ent-4a',
    question: 'Two piano teachers have students of similar skill. Teacher A picks every piece, checks practice logs nightly and criticizes mistakes in front of others. Teacher B lets students choose some pieces, points out how they are improving and shows real interest in each student. A year later, more of Teacher B\'s students practice on their own when no lessons are required. Which explanation fits best?',
    options: ['Teacher A offered rewards that deepened intrinsic interest', 'Teacher B reduced a physical drive by lowering tension', 'Teacher A kept students at an optimal level of arousal', 'Teacher B met needs for autonomy, competence and relatedness'],
    correctIndex: 3,
    explanation: 'Choice supports autonomy, feedback on improvement supports competence and caring attention supports relatedness, the conditions self-determination theory links to intrinsic motivation. Tight control, surveillance and public criticism make an activity feel controlled from outside.',
    partNumber: 4,
    partTitle: 'Self-Determination and Incentive Theory',
  },
  {
    id: 'mot-ent-4b',
    question: 'A factory starts paying workers a bonus for each unit they assemble beyond their quota. Output rises sharply, then drops back to its old level when the bonus program ends. Which theory accounts for this pattern most directly?',
    options: ['Incentive theory', 'Drive-reduction theory', 'Sensation-seeking theory', 'Arousal theory'],
    correctIndex: 0,
    explanation: 'An outside reward pulled the extra work, and the behavior faded when the reward was removed. Incentive theory explains behavior pulled by external rewards, a form of extrinsic motivation.',
    partNumber: 4,
    partTitle: 'Self-Determination and Incentive Theory',
  },

  // Part 5: Lewin's Motivational Conflicts
  {
    id: 'mot-ent-5a',
    question: 'Jae wants to run for student council president for the chance to lead, but he dreads giving speeches and losing in front of the school. He fills out the form, then nearly withdraws as the deadline nears. Which conflict is he experiencing?',
    options: ['Approach-approach, with two attractive goals and room for one', 'Avoidance-avoidance, with two unpleasant options to pick from', 'Approach-avoidance, with one goal that has good and bad features', 'Instinctive drift, with behavior sliding back to natural habits'],
    correctIndex: 2,
    explanation: 'Running for office is a single goal with an attractive feature (leading) and unattractive ones (speeches, possible loss). Moving toward it and then wavering as it nears is typical of approach-avoidance conflict.',
    partNumber: 5,
    partTitle: 'Lewin\'s Motivational Conflicts',
  },
  {
    id: 'mot-ent-5b',
    question: 'An employee must either confront a coworker about repeated mistakes or quietly redo the coworker\'s work himself, and he dislikes both options. What behavior does Lewin\'s theory predict is most likely?',
    options: ['Delaying and wavering, hoping to escape both', 'Choosing quickly and feeling pleased either way', 'Raising his arousal by seeking new stimulation', 'Acting on an instinct to avoid social conflict'],
    correctIndex: 0,
    explanation: 'Two unattractive options make an avoidance-avoidance conflict, which typically produces procrastination, wavering and attempts to leave the field. Quick, happy choices fit approach-approach conflicts instead.',
    partNumber: 5,
    partTitle: 'Lewin\'s Motivational Conflicts',
  },

  // Part 6: Eating and Belongingness
  {
    id: 'mot-ent-6a',
    question: 'Researchers inject a hormone into rats that have just eaten their fill, and within minutes the rats start eating again. Which hormone best fits this result?',
    options: ['Leptin, a fullness signal released by fat cells', 'Ghrelin, a hunger signal from the stomach', 'Melatonin, a hormone that regulates sleep cycles', 'Oxytocin, a hormone tied to bonding and trust'],
    correctIndex: 1,
    explanation: 'Ghrelin increases hunger and normally rises when the stomach is empty, so adding it can restart eating in full animals. Leptin does the opposite, promoting fullness.',
    partNumber: 6,
    partTitle: 'Eating and Belongingness',
  },
  {
    id: 'mot-ent-6b',
    question: 'In a hypothetical experiment, moviegoers who had all just eaten dinner are randomly given free popcorn in either a medium or a very large container. The large-container group eats 40% more. What does this result best demonstrate?',
    options: ['Eating is driven solely by internal signals of hunger', 'Leptin rose faster in the large-container group', 'Ghrelin makes people prefer larger food containers', 'Outside cues can drive eating beyond any energy need'],
    correctIndex: 3,
    explanation: 'Everyone had just eaten and the groups were formed by random assignment, so the extra eating reflects an external factor, the amount of food present, rather than a physical need.',
    partNumber: 6,
    partTitle: 'Eating and Belongingness',
  },

  // Part 7: Synthesis and EBQ Practice
  {
    id: 'mot-ent-7a',
    question: 'At a holiday party, Omar has already eaten a full dinner but keeps taking snacks because everyone is gathered around the food table. Later he laughs at jokes he does not find funny so the group will accept him. Which pair of explanations fits these two behaviors, in order?',
    options: ['Drive reduction, then incentive theory', 'External eating cues, then the need to belong', 'Ghrelin release, then sensation seeking', 'The need to belong, then drive reduction'],
    correctIndex: 1,
    explanation: 'With no energy need left, the food and the social gathering around it are external cues for eating. Going along with the group to be accepted reflects the need to belong.',
    partNumber: 7,
    partTitle: 'Synthesis and EBQ Practice',
  },
  {
    id: 'mot-ent-7b',
    question: 'An EBQ source reports that participants randomly assigned to be left out of an online ball-tossing game reported lower mood afterward than participants randomly assigned to be included. Which explanation of this source is most accurate?',
    options: ['Exclusion lowered a drive and restored homeostasis', 'The design is correlational, so it shows no effect', 'Exclusion thwarted the need to belong, lowering mood', 'Inclusion pushed arousal well past its optimal level'],
    correctIndex: 2,
    explanation: 'Being excluded threatens the fundamental need to form and keep social bonds, so mood drops. Because participants were randomly assigned, the study is an experiment and supports a causal link.',
    partNumber: 7,
    partTitle: 'Synthesis and EBQ Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Motivates Behavior: Instincts and Drives' },
    { partNumber: 2, partTitle: 'Arousal Theory and the Yerkes-Dodson Law' },
    { partNumber: 3, partTitle: 'Sensation-Seeking Theory' },
    { partNumber: 4, partTitle: 'Self-Determination and Incentive Theory' },
    { partNumber: 5, partTitle: 'Lewin\'s Motivational Conflicts' },
    { partNumber: 6, partTitle: 'Eating and Belongingness' },
    { partNumber: 7, partTitle: 'Synthesis and EBQ Practice' },
  ]
}
