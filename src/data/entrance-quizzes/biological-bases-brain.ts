/**
 * Entrance Quiz — Biological Bases of Behavior & the Brain (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Neurons and Neural Firing
  {
    id: 'bbb-ent-1a',
    question: 'A researcher gives a neuron brief electrical pulses of increasing strength: 5, 10, 15 and 20 units. The neuron does not fire at 5 or 10 units, but at 15 and at 20 units it fires action potentials of exactly the same height. Which explanation fits best?',
    options: ['The neuron tired out after the first two pulses', 'Threshold came at 15, and firing is all-or-none', 'Stronger pulses shrink the refractory period to zero', 'Myelin blocked the weaker pulses from reaching it'],
    correctIndex: 1,
    explanation: 'Below threshold the neuron does not fire; once threshold is reached, every action potential is the same size, because firing is all-or-none. Stimulus strength is coded by firing rate, not by the height of each spike.',
    partNumber: 1,
    partTitle: 'Neurons and Neural Firing',
  },
  {
    id: 'bbb-ent-1b',
    question: 'A woman\'s weakness worsens the more she exerts herself: her eyelids droop by evening and chewing a meal tires her jaw. Her sense of touch and her vision are normal. Tests are most likely to reveal a problem with which of the following?',
    options: ['Myelin wrapped around axons in the brain', 'Dopamine-producing neurons in the midbrain', 'Glial cells that clear waste from the cord', 'Acetylcholine receptors on muscle fibers'],
    correctIndex: 3,
    explanation: 'Weakness that worsens with use, with normal sensation, points to myasthenia gravis, in which the immune system blocks acetylcholine receptors where motor neurons meet muscle. Damaged myelin (multiple sclerosis) would also disrupt sensation and vision.',
    partNumber: 1,
    partTitle: 'Neurons and Neural Firing',
  },

  // Part 2: Neurotransmitters and Psychoactive Drugs
  {
    id: 'bbb-ent-2a',
    question: 'A lab creates a compound that fits into serotonin receptors but does not activate them, so serotonin released into the synapse can no longer bind there. How is the compound best classified?',
    options: ['As an antagonist', 'As a reuptake inhibitor', 'As an agonist of serotonin', 'As a stimulant of the brain'],
    correctIndex: 0,
    explanation: 'A substance that occupies a receptor without activating it, blocking the natural neurotransmitter, is an antagonist. An agonist would activate the receptor, and a reuptake inhibitor would keep serotonin in the synapse longer.',
    partNumber: 2,
    partTitle: 'Neurotransmitters and Psychoactive Drugs',
  },
  {
    id: 'bbb-ent-2b',
    question: 'A woman who has had three cups of coffee every morning for a year skips it on a Saturday. By noon she has a headache and feels sluggish and irritable. Which concept best explains these symptoms?',
    options: ['Tolerance, because she needs more caffeine for any effect', 'Withdrawal, because her brain had adapted to the drug', 'Addiction, because she uses coffee despite harm to her', 'Depression, because caffeine slows activity in the brain'],
    correctIndex: 1,
    explanation: 'Discomfort after stopping a drug the brain has adjusted to is withdrawal, and its symptoms are often the opposite of the drug\'s effects: a stimulant\'s alertness gives way to fatigue.',
    partNumber: 2,
    partTitle: 'Neurotransmitters and Psychoactive Drugs',
  },

  // Part 3: The Nervous System and the Endocrine System
  {
    id: 'bbb-ent-3a',
    question: 'In a study, participants watch a frightening film clip while researchers record heart rate, pupil size and stomach activity. If the clip triggers the sympathetic division of the autonomic nervous system, which pattern should the recordings show?',
    options: ['Heart speeds up, pupils widen, digestion slows', 'Heart slows, pupils narrow, digestion resumes', 'Pupils narrow, heart speeds up, digestion resumes', 'Digestion speeds up, heart slows, pupils widen'],
    correctIndex: 0,
    explanation: 'The sympathetic division arouses the body for action: it speeds the heart, dilates the pupils and slows digestion. A slower heart, narrower pupils and resumed digestion are the calming parasympathetic pattern.',
    partNumber: 3,
    partTitle: 'The Nervous System and the Endocrine System',
  },
  {
    id: 'bbb-ent-3b',
    question: 'In a study, students who skipped breakfast reported stronger hunger before lunch than students who ate, and blood tests showed higher levels of a hormone released by the empty stomach. Which hormone was most likely measured?',
    options: ['Leptin', 'Oxytocin', 'Ghrelin', 'Melatonin'],
    correctIndex: 2,
    explanation: 'Ghrelin is released by an empty stomach and signals hunger. Leptin, released by fat cells, signals fullness.',
    partNumber: 3,
    partTitle: 'The Nervous System and the Endocrine System',
  },

  // Part 4: Brain Structures and Their Functions
  {
    id: 'bbb-ent-4a',
    question: 'After brain surgery, a man can still describe his childhood and play the piano as skillfully as before, but he cannot remember people he has met since the operation, even after many visits. Which structure was most likely damaged?',
    options: ['The cerebellum', 'The hippocampus', 'The amygdala', 'The medulla'],
    correctIndex: 1,
    explanation: 'The hippocampus forms new explicit memories, so damage leaves old memories but blocks new ones. His piano skill, a procedural memory supported by the cerebellum, is unaffected.',
    partNumber: 4,
    partTitle: 'Brain Structures and Their Functions',
  },
  {
    id: 'bbb-ent-4b',
    question: 'On the somatosensory cortex, the area serving the lips is far larger than the area serving the middle of the back. Which prediction follows most directly?',
    options: ['The lips can move with more precision than the back', 'The back will feel pain more strongly than the lips', 'Touch on the lips will be noticed in finer detail', 'Both areas are equal in sensitivity despite size'],
    correctIndex: 2,
    explanation: 'Body parts with more somatosensory cortex are more sensitive to touch. Precise movement depends on the motor cortex, not the somatosensory cortex.',
    partNumber: 4,
    partTitle: 'Brain Structures and Their Functions',
  },

  // Part 5: Hemispheres, Plasticity and Brain Research Methods
  {
    id: 'bbb-ent-5a',
    question: 'A split-brain patient stares at a dot in the center of a screen while a picture of an apple flashes briefly in her right visual field. Asked what she saw, how will she most likely respond?',
    options: ['She will say that she saw an apple', 'She will say "nothing" but point to an apple', 'She will draw an apple but be unable to name it', 'She will be unable to name or point to an apple'],
    correctIndex: 0,
    explanation: 'The right visual field goes to the left hemisphere, which in most people controls speech, so she can name the apple. Pictures in the left visual field reach only the nonverbal right hemisphere.',
    partNumber: 5,
    partTitle: 'Hemispheres, Plasticity and Brain Research Methods',
  },
  {
    id: 'bbb-ent-5b',
    question: 'Researchers want to test whether a small region of the hypothalamus is necessary for rats to stop eating once they are full. Which approach can best answer that question?',
    options: ['Scanning rats with fMRI while they eat a meal', 'Recording EEG from rats as they finish eating', 'Lesioning the area, then observing later meals', 'Studying one unusually heavy rat in close detail'],
    correctIndex: 2,
    explanation: 'Destroying the region and seeing whether rats overeat shows whether it is necessary for the behavior. fMRI and EEG only show activity that accompanies eating, and a single case cannot be generalized.',
    partNumber: 5,
    partTitle: 'Hemispheres, Plasticity and Brain Research Methods',
  },

  // Part 6: Sleep, Dreams and Sleep Disorders
  {
    id: 'bbb-ent-6a',
    question: 'A student who usually sleeps from 11 p.m. to 7 a.m. sets her alarm for 5 a.m. to cram for a test. Which kind of sleep will she lose the most of?',
    options: ['NREM-3 deep sleep, which fills the last cycles', 'NREM-1 light sleep, which fills most of the night', 'NREM-2 sleep, which happens only at sleep onset', 'REM sleep, which grows longer as morning approaches'],
    correctIndex: 3,
    explanation: 'Deep NREM-3 sleep dominates the early cycles and shrinks across the night, while REM periods grow longer toward morning, so cutting the last two hours mostly cuts REM. NREM-2, not NREM-1, makes up the largest share of a night.',
    partNumber: 6,
    partTitle: 'Sleep, Dreams and Sleep Disorders',
  },
  {
    id: 'bbb-ent-6b',
    question: 'At 1 a.m., a 9-year-old walks to the kitchen with his eyes open, does not respond when his mother speaks, and remembers nothing in the morning. Which disorder, in which sleep stage, best fits?',
    options: ['Narcolepsy, in NREM-1', 'Sleep apnea, in REM', 'Somnambulism, in NREM-3', 'REM sleep behavior disorder, in REM'],
    correctIndex: 2,
    explanation: 'Sleepwalking (somnambulism) occurs during deep NREM-3 sleep, which is why the child is hard to rouse and has no memory of it. In REM sleep behavior disorder, people act out dreams during REM.',
    partNumber: 6,
    partTitle: 'Sleep, Dreams and Sleep Disorders',
  },

  // Part 7: AP Practice and Synthesis
  {
    id: 'bbb-ent-7a',
    question: 'Fifty adults learned 30 word pairs and were randomly assigned to take a 20-minute nap or watch a 20-minute video. Two hours later, the nap group recalled a mean of 21.4 pairs (SD = 3.0) and the video group 17.9 (SD = 3.2), p = .01. How do the results bear on the hypothesis that sleep aids memory consolidation?',
    options: ['Refuted, since the video group had the larger spread', 'Untestable, since memory was never operationally defined', 'Proven for all adults, since p fell below .05', 'Supported, since the nap group averaged 3.5 more'],
    correctIndex: 3,
    explanation: 'Participants randomly assigned to nap recalled about 3.5 more pairs, a statistically significant difference, which supports the hypothesis. One sample of 50 cannot prove the effect for all adults.',
    partNumber: 7,
    partTitle: 'AP Practice and Synthesis',
  },
  {
    id: 'bbb-ent-7b',
    question: 'A student scrolls on a bright phone in bed until 1 a.m. on school nights and struggles to stay alert in her first-period class. Which explanation links the biology correctly?',
    options: ['Bright light raises ghrelin, so hunger keeps her awake', 'Light delays melatonin and shifts her sleep cycle later', 'Late nights add deep sleep, so she wakes overly rested', 'Screen use raises GABA, which overexcites the brain'],
    correctIndex: 1,
    explanation: 'Bright light at night delays the rise of melatonin and pushes the circadian rhythm later, so she falls asleep late and loses sleep before an early start.',
    partNumber: 7,
    partTitle: 'AP Practice and Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Neurons and Neural Firing' },
    { partNumber: 2, partTitle: 'Neurotransmitters and Psychoactive Drugs' },
    { partNumber: 3, partTitle: 'The Nervous System and the Endocrine System' },
    { partNumber: 4, partTitle: 'Brain Structures and Their Functions' },
    { partNumber: 5, partTitle: 'Hemispheres, Plasticity and Brain Research Methods' },
    { partNumber: 6, partTitle: 'Sleep, Dreams and Sleep Disorders' },
    { partNumber: 7, partTitle: 'AP Practice and Synthesis' },
  ]
}
