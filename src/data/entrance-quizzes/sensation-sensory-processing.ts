/**
 * Entrance Quiz — Sensation & Sensory Processing (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Thresholds, Weber's Law, and Adaptation
  {
    id: 'ssp-ent-1a',
    question: 'A person can just tell that a 255 g package is heavier than a 250 g package. By Weber\'s law, about how much heavier than a 1,000 g package must another package be for the difference to be just noticeable?',
    options: ['5 g', '10 g', '20 g', '50 g'],
    correctIndex: 2,
    explanation: 'The just-noticeable difference is a constant proportion of the starting weight: 5 ÷ 250 = 0.02. For 1,000 g, 0.02 × 1,000 = 20 g.',
    partNumber: 1,
    partTitle: 'Thresholds, Weber\'s Law, and Adaptation',
  },
  {
    id: 'ssp-ent-1b',
    question: 'Ever since childhood, a woman has tasted chocolate whenever she hears the word "Tuesday," and the pairing never changes. Most of her friends have no such experience. Which concept describes this?',
    options: ['Sensory interaction', 'Synesthesia', 'Sensory adaptation', 'Transduction'],
    correctIndex: 1,
    explanation: 'One sense automatically and consistently triggering an experience in another, in a minority of people, is synesthesia. Sensory interaction happens in everyone, when one sense shapes the experience of another.',
    partNumber: 1,
    partTitle: 'Thresholds, Weber\'s Law, and Adaptation',
  },

  // Part 2: Vision: From Light to the Brain
  {
    id: 'ssp-ent-2a',
    question: 'An eye disease damages the fovea of both eyes but leaves the rest of the retina healthy. Which difficulty is the patient most likely to have?',
    options: ['Seeing anything at all in a dim room', 'Adjusting to a dark theater over time', 'Noticing movement at the edge of vision', 'Reading fine print at the center of gaze'],
    correctIndex: 3,
    explanation: 'The fovea is packed with cones, which provide fine detail and color at the center of gaze. Dim-light vision, peripheral motion and dark adaptation depend mostly on rods outside the fovea.',
    partNumber: 2,
    partTitle: 'Vision: From Light to the Brain',
  },
  {
    id: 'ssp-ent-2b',
    question: 'After a stroke damages her primary visual cortex, a woman insists she sees nothing on her left side. Yet when asked to guess, she reaches accurately for objects placed there. Which conclusion is best supported?',
    options: ['Some sight is processed outside awareness', 'Her retinas no longer transduce light from that side', 'She can see faces but cannot recognize whose they are', 'Her lenses can no longer change shape to focus'],
    correctIndex: 0,
    explanation: 'This is blindsight: her eyes still send information to other brain areas that guide her reaching, but damage to the visual cortex keeps it from conscious experience.',
    partNumber: 2,
    partTitle: 'Vision: From Light to the Brain',
  },

  // Part 3: Color Vision: Two Theories, Two Stages
  {
    id: 'ssp-ent-3a',
    question: 'A student stares for 30 seconds at a flag with green, black and yellow stripes, then looks at a plain white wall. Which afterimage will she most likely see, and which theory explains it?',
    options: ['Trichromatic theory predicts green, black and yellow stripes', 'Trichromatic theory predicts red, white and blue stripes', 'Sensory adaptation predicts plain gray stripes', 'Opponent-process theory predicts red, white and blue stripes'],
    correctIndex: 3,
    explanation: 'The opponent pairs are red-green, yellow-blue and black-white. Staring fatigues the green, yellow and black sides, so white light then produces their opposites: red, blue and white.',
    partNumber: 3,
    partTitle: 'Color Vision: Two Theories, Two Stages',
  },
  {
    id: 'ssp-ent-3b',
    question: 'A researcher records from retinal ganglion cells and finds cells that fire faster than baseline to red light and slower than baseline to green light. Which statement best fits this finding?',
    options: ['Each cone type codes only a single color', 'Opponent coding follows the cones', 'Trichromatic theory has been disproved', 'Afterimages begin inside the cornea'],
    correctIndex: 1,
    explanation: 'Ganglion cells come after the cones, and cells excited by one member of a pair and inhibited by the other show opponent-process coding at that later stage. Trichromatic theory still describes the cones themselves.',
    partNumber: 3,
    partTitle: 'Color Vision: Two Theories, Two Stages',
  },

  // Part 4: Hearing: From Sound Waves to Pitch
  {
    id: 'ssp-ent-4a',
    question: 'A researcher finds that no single fiber in a listener\'s auditory nerve fires more than about 800 times per second, yet the nerve\'s combined bursts keep pace with a 2,400 Hz tone. Which idea explains this?',
    options: ['Place theory', 'Frequency theory', 'Volley principle', 'Gate control theory'],
    correctIndex: 2,
    explanation: 'In the volley principle, groups of neurons fire in alternation, so their combined output can match frequencies faster than any one neuron can fire.',
    partNumber: 4,
    partTitle: 'Hearing: From Sound Waves to Pitch',
  },
  {
    id: 'ssp-ent-4b',
    question: 'A swimmer\'s ear canal becomes packed with wax, and sounds of every pitch are muffled on that side. Her hearing returns once a doctor clears the canal. Which type of hearing loss did she have?',
    options: ['Conduction loss, from a mechanical blockage', 'Sensorineural loss, from damaged hair cells', 'Sensorineural loss, from auditory nerve damage', 'Age-related loss of only the high pitches'],
    correctIndex: 0,
    explanation: 'A blocked ear canal keeps sound from reaching the cochlea efficiently, a mechanical problem in the outer ear. That is conduction hearing loss, and it is reversed once the blockage is removed.',
    partNumber: 4,
    partTitle: 'Hearing: From Sound Waves to Pitch',
  },

  // Part 5: Chemical and Body Senses
  {
    id: 'ssp-ent-5a',
    question: 'With her eyes closed, a gymnast can tell exactly how far each elbow is bent and where her hands are. Which sense provides this information?',
    options: ['Kinesthesis', 'Vestibular sense', 'Gate control', 'Sensory adaptation'],
    correctIndex: 0,
    explanation: 'Kinesthesis tracks the position and movement of body parts through receptors in muscles, tendons and joints. The vestibular sense tracks balance and head movement.',
    partNumber: 5,
    partTitle: 'Chemical and Body Senses',
  },
  {
    id: 'ssp-ent-5b',
    question: 'A firefighter cuts his leg while carrying a child out of a burning house and does not notice the wound until he is safely outside. Which explanation fits best?',
    options: ['The wound destroyed every pain receptor in the leg', 'His thalamus blocked all touch signals from skin', 'Pain is processed only in the injured tissue', 'Signals from the brain closed a spinal pain gate'],
    correctIndex: 3,
    explanation: 'Gate control theory holds that messages from the brain, such as intense focus on a task, can close a gate in the spinal cord so fewer pain signals reach awareness. Pain depends on the brain as well as the body.',
    partNumber: 5,
    partTitle: 'Chemical and Body Senses',
  },

  // Part 6: Data Analysis and AP Exam Practice
  {
    id: 'ssp-ent-6a',
    question: 'Practice data: a faint light was flashed at four intensities. In a dark room, detection was 10%, 50%, 90% and 100%. In a bright room, it was 0%, 20%, 50% and 85%. Which interpretation is correct?',
    options: ['The bright room has the lower threshold and greater sensitivity', 'The dark room has the lower threshold and greater sensitivity', 'Sensitivity is equal, since both rooms reach 50% at some point', 'Both rooms have an absolute threshold of 50 percent'],
    correctIndex: 1,
    explanation: 'In the dark room, 50% detection is reached at the second intensity; in the bright room, only at the third. A lower absolute threshold means greater sensitivity.',
    partNumber: 6,
    partTitle: 'Data Analysis and AP Exam Practice',
  },
  {
    id: 'ssp-ent-6b',
    question: 'Practice data: a participant\'s just-noticeable differences for starting weights of 50, 100, 200 and 400 g are 2, 2, 2 and 2 g. What do these data show?',
    options: ['They support Weber\'s law, since the JND never changes', 'They show an absolute threshold of exactly 2 g', 'They show sensory adaptation to the heavier weights', 'They contradict Weber\'s law, since the ratio shrinks'],
    correctIndex: 3,
    explanation: 'Weber\'s law predicts a constant ratio of JND to starting weight, so the JND should grow as the weight grows. A fixed 2 g JND makes the ratio shrink, which contradicts the law.',
    partNumber: 6,
    partTitle: 'Data Analysis and AP Exam Practice',
  },

  // Part 7: Synthesis: One Model for Every Sense
  {
    id: 'ssp-ent-7a',
    question: 'A passenger reading a map in the back seat of a winding car begins to feel nauseated, though she feels fine when she looks out the window. Which explanation fits best?',
    options: ['Vision and the vestibular sense send conflicting signals', 'Kinesthetic receptors in her joints stop firing', 'Smell bypasses the thalamus and reaches the amygdala', 'Rods in her periphery adapt to the moving scenery'],
    correctIndex: 0,
    explanation: 'Her inner ear signals motion while her eyes, fixed on the map, signal stillness. That conflict between senses produces motion sickness, a case of sensory interaction.',
    partNumber: 7,
    partTitle: 'Synthesis: One Model for Every Sense',
  },
  {
    id: 'ssp-ent-7b',
    question: 'A nurse stops noticing the smell of hospital disinfectant an hour into her shift. At lunch, with a stuffy nose from a cold, her soup tastes bland. Which pair of concepts explains these two observations, in order?',
    options: ['Habituation, then synesthesia', 'Transduction, then gate control', 'Adaptation, then sensory interaction', 'Synesthesia, then adaptation'],
    correctIndex: 2,
    explanation: 'A constant odor fading from notice is sensory adaptation. A blocked nose dulling flavor shows sensory interaction, since smell supplies much of what we experience as taste.',
    partNumber: 7,
    partTitle: 'Synthesis: One Model for Every Sense',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Thresholds, Weber\'s Law, and Adaptation' },
    { partNumber: 2, partTitle: 'Vision: From Light to the Brain' },
    { partNumber: 3, partTitle: 'Color Vision: Two Theories, Two Stages' },
    { partNumber: 4, partTitle: 'Hearing: From Sound Waves to Pitch' },
    { partNumber: 5, partTitle: 'Chemical and Body Senses' },
    { partNumber: 6, partTitle: 'Data Analysis and AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis: One Model for Every Sense' },
  ]
}
