/**
 * Entrance Quiz — Classical Conditioning (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Pavlov's Experiments
  {
    id: 'cc-ent-1a',
    question: 'Which scenario is an example of classical conditioning?',
    options: ['A student studies harder after praise for a high grade', 'A toddler cries more each time crying gets her a cookie', 'A teen learns a dance by watching a video of it', 'A student\'s heart races at a bell that once signaled quizzes'],
    correctIndex: 3,
    explanation: 'An involuntary response (a racing heart) now occurs to a once-neutral stimulus (the bell) because it was paired with something stressful. The other examples involve consequences or imitation.',
    partNumber: 1,
    partTitle: 'Pavlov\'s Experiments',
  },
  {
    id: 'cc-ent-1b',
    question: 'A puppy jumps and yelps the very first time it hears a firecracker. Why is this reaction not an example of classical conditioning?',
    options: ['It is unlearned, not built by pairing', 'It is voluntary and shaped by its consequences', 'Puppies are too young for any conditioning', 'Loud noises cannot act as unconditioned stimuli'],
    correctIndex: 0,
    explanation: 'Startling at a sudden loud noise is a natural, unlearned reaction to an unconditioned stimulus. Classical conditioning requires an association formed through pairing.',
    partNumber: 1,
    partTitle: 'Pavlov\'s Experiments',
  },

  // Part 2: Key Terminology: UCS, UCR, CS, CR
  {
    id: 'cc-ent-2a',
    question: 'Whenever a toddler\'s older brother pops a balloon, the bang makes her startle and cry. He always says "Watch this!" right before popping it. Now she cries as soon as she hears "Watch this!" Her crying at the words is the',
    options: ['Unconditioned response', 'Conditioned stimulus', 'Conditioned response', 'Unconditioned stimulus'],
    correctIndex: 2,
    explanation: 'The words were neutral until they were paired with the bang, so crying at the words is a learned response to a conditioned stimulus: a conditioned response. Crying at the bang itself is the unconditioned response.',
    partNumber: 2,
    partTitle: 'Key Terminology: UCS, UCR, CS, CR',
  },
  {
    id: 'cc-ent-2b',
    question: 'A coach blows a whistle just before every grueling sprint drill, and the sprints leave players gasping with pounding hearts. After a few weeks, the whistle alone makes their hearts pound. What is the unconditioned stimulus?',
    options: ['The coach\'s whistle', 'The sprints themselves', 'Pounding hearts at the whistle', 'Pounding hearts during sprints'],
    correctIndex: 1,
    explanation: 'The sprint naturally produces a pounding heart without any learning, so it is the unconditioned stimulus. The whistle became the conditioned stimulus through pairing.',
    partNumber: 2,
    partTitle: 'Key Terminology: UCS, UCR, CS, CR',
  },

  // Part 3: Acquisition & Extinction
  {
    id: 'cc-ent-3a',
    question: 'Practice data: a rat\'s freezing to a tone rose over 10 pairings of the tone with a mild shock, then fell to near zero over 15 tone-alone trials. After a 24-hour rest, the first tone produced moderate freezing again. Which conclusion is best supported?',
    options: ['Extinction erased the original association entirely', 'The association outlasted the extinction phase', 'The rest period created higher-order conditioning', 'The renewed freezing shows stimulus generalization'],
    correctIndex: 1,
    explanation: 'The return of freezing after rest is spontaneous recovery, which shows that extinction suppressed the conditioned response rather than erasing the association.',
    partNumber: 3,
    partTitle: 'Acquisition & Extinction',
  },
  {
    id: 'cc-ent-3b',
    question: 'A child has learned to fear the sound of a dentist\'s drill, which was paired with pain. The receptionist always says, "The doctor is ready for you," just before the drill starts. Soon that phrase alone makes the child anxious, though it was never paired with pain. Which process is this?',
    options: ['Spontaneous recovery', 'Stimulus discrimination', 'Higher-order conditioning', 'Extinction'],
    correctIndex: 2,
    explanation: 'A new neutral stimulus (the phrase) was paired with an existing conditioned stimulus (the drill sound) rather than with pain itself. That is higher-order conditioning.',
    partNumber: 3,
    partTitle: 'Acquisition & Extinction',
  },

  // Part 4: Generalization & Discrimination
  {
    id: 'cc-ent-4a',
    question: 'A dog conditioned to salivate to a 1,000 Hz tone is tested with other tones. It salivates most to 1,000 Hz, less to 900 Hz and least to 600 Hz. What does this pattern show?',
    options: ['Generalization that weakens as pitches differ', 'Discrimination that is perfect at every tone', 'Extinction that deepens with each new tone', 'Spontaneous recovery following a rest period'],
    correctIndex: 0,
    explanation: 'The response spreads to similar tones but weakens as they become less like the original conditioned stimulus, a generalization gradient.',
    partNumber: 4,
    partTitle: 'Generalization & Discrimination',
  },
  {
    id: 'cc-ent-4b',
    question: 'After being knocked down by a large dog, a girl feared every dog. Following many calm visits with her aunt\'s tiny terrier, she now stays relaxed around small dogs but still tenses up near large ones. Which concept describes her current pattern?',
    options: ['Stimulus generalization', 'Higher-order conditioning', 'Spontaneous recovery', 'Stimulus discrimination'],
    correctIndex: 3,
    explanation: 'She now responds with fear to stimuli like the original (large dogs) but not to different ones (small dogs). Learning to tell them apart is stimulus discrimination.',
    partNumber: 4,
    partTitle: 'Generalization & Discrimination',
  },

  // Part 5: Applications
  {
    id: 'cc-ent-5a',
    question: 'A hiker eats trail mix with dried mango. Six hours later she becomes ill from a stomach virus. Afterward she cannot stand dried mango, even though she knows the virus caused her illness. What makes this case unusual compared with typical classical conditioning?',
    options: ['It formed in one pairing despite a long delay', 'It needed many pairings close together in time', 'Its response is voluntary and is kept up by reward', 'The mango acted as the unconditioned stimulus'],
    correctIndex: 0,
    explanation: 'Taste aversions often form after a single pairing even when illness follows hours later, reflecting a biological preparedness to link taste with nausea.',
    partNumber: 5,
    partTitle: 'Applications',
  },
  {
    id: 'cc-ent-5b',
    question: 'A series of ads repeatedly shows a new sports drink alongside a famous, well-liked athlete and upbeat music. In classical conditioning terms, what is the company trying to make the drink become?',
    options: ['A trigger for good feelings', 'A reflex that needs no learning', 'A reward given after people buy it', 'A response to seeing the athlete'],
    correctIndex: 0,
    explanation: 'The athlete and music naturally produce positive feelings. Pairing them with the drink is meant to make the drink a conditioned stimulus that triggers those feelings on its own.',
    partNumber: 5,
    partTitle: 'Applications',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'cc-ent-6a',
    question: 'A researcher pairs a tone with a mild puff of air to the eye for one group of rabbits, and the rabbits begin blinking at the tone. Which comparison group would best show that the blinking results from the pairing?',
    options: ['Rabbits given the pairing twice as often', 'Rabbits that hear the tone but never the puff', 'Rabbits trained with a louder tone and puff', 'No group, since trained rabbits are enough'],
    correctIndex: 1,
    explanation: 'A control group that hears the tone without the unconditioned stimulus shows whether the tone alone produces blinking. If only the paired group blinks, the pairing caused the learning.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'cc-ent-6b',
    question: 'In a conditioning study, fear of a tone was measured as the number of seconds a rat stayed motionless during a 30-second presentation of the tone. What is this measure?',
    options: ['The independent variable of the study', 'A confounding variable in the design', 'The unconditioned stimulus in the study', 'An operational definition of the CR'],
    correctIndex: 3,
    explanation: 'It specifies exactly how the conditioned fear response was measured, which makes it an operational definition of the dependent variable, the conditioned response.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'cc-ent-7a',
    question: 'A child who gets a sticker each time she uses the toilet starts using it more often. She also begins to feel calm whenever she hears the song her father hums while handing out stickers. Which concepts explain each change?',
    options: ['Toilet use: classical; calm: operant', 'Toilet use: operant; calm: classical', 'Toilet use: classical; calm: classical', 'Toilet use: operant; calm: operant'],
    correctIndex: 1,
    explanation: 'Toilet use is a voluntary behavior strengthened by its consequence, which is operant conditioning. Feeling calm at the song is an automatic response to a stimulus paired with something pleasant, which is classical conditioning.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'cc-ent-7b',
    question: 'An EBQ source reports that patients who received nausea-inducing chemotherapy in the same clinic for several weeks began to feel queasy as soon as they walked into its waiting room, before any treatment. Which explanation of the source would earn credit?',
    options: ['Nausea was reinforced because it drew attention from nurses', 'Patients imitated others who looked sick in the room', 'The clinic became a CS for nausea when paired with drugs', 'The drugs became a conditioned stimulus for the clinic'],
    correctIndex: 2,
    explanation: 'The clinic setting (once neutral) was paired with drugs that naturally cause nausea (UCS), so it became a conditioned stimulus that now triggers nausea as a conditioned response.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Pavlov\'s Experiments' },
    { partNumber: 2, partTitle: 'Key Terminology: UCS, UCR, CS, CR' },
    { partNumber: 3, partTitle: 'Acquisition & Extinction' },
    { partNumber: 4, partTitle: 'Generalization & Discrimination' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
