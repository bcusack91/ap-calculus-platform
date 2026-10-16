/**
 * Entrance Quiz — Perception & Attention (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Perceptual Organization
  {
    id: 'pa-ent-1a',
    question: 'Participants shown a smudged word on its own cannot identify it. Participants who see the same smudge at the end of "The farmer milked the ___" read it instantly as "cow." Which process explains the difference?',
    options: ['Bottom-up processing', 'Figure-ground organization', 'Top-down processing', 'Sensory adaptation'],
    correctIndex: 2,
    explanation: 'The sentence supplies knowledge and expectations that guide interpretation of the unclear input, which is top-down processing. Bottom-up processing would work from the smudged marks alone.',
    partNumber: 1,
    partTitle: 'Perceptual Organization',
  },
  {
    id: 'pa-ent-1b',
    question: 'In a marching band formation, everyone stands evenly spaced, but the members in red uniforms are seen as forming a large letter S among the members in white. Which Gestalt principle explains this?',
    options: ['Proximity', 'Closure', 'Figure-ground', 'Similarity'],
    correctIndex: 3,
    explanation: 'Because spacing is even, grouping cannot come from nearness. The red uniforms are grouped because they look alike, which is the principle of similarity.',
    partNumber: 1,
    partTitle: 'Perceptual Organization',
  },

  // Part 2: Depth Perception
  {
    id: 'pa-ent-2a',
    question: 'Special glasses at a 3D movie send a slightly different image to each eye, and objects seem to leap out of the screen. Which depth cue does this technology exploit?',
    options: ['Retinal disparity', 'Interposition', 'Texture gradient', 'Relative clarity'],
    correctIndex: 0,
    explanation: 'The brain judges depth from the difference between the two eyes\' images, the binocular cue of retinal disparity. The other cues work with one eye.',
    partNumber: 2,
    partTitle: 'Depth Perception',
  },
  {
    id: 'pa-ent-2b',
    question: 'On the visual cliff, most crawling infants refuse to cross onto the "deep" side even when their mothers call to them. Which conclusion do these results justify?',
    options: ['Depth perception depends entirely on two eyes', 'Depth perception is fully innate in humans', 'Human infants fear heights from the day of birth', 'Infants this age already perceive depth'],
    correctIndex: 3,
    explanation: 'Infants could not be tested until they crawled, by which time they may have learned from experience. The study shows depth perception exists by crawling age but cannot prove it is innate.',
    partNumber: 2,
    partTitle: 'Depth Perception',
  },

  // Part 3: Visual Illusions
  {
    id: 'pa-ent-3a',
    question: 'As a friend walks away down a long hallway, her image on your retina shrinks to a fraction of its original size, yet she does not seem to be getting smaller. Which concept explains this?',
    options: ['Relative size', 'Size constancy', 'Shape constancy', 'Perceptual set'],
    correctIndex: 1,
    explanation: 'Perceiving an object\'s size as stable despite a changing retinal image is size constancy. Relative size is a depth cue used to judge how far away something is.',
    partNumber: 3,
    partTitle: 'Visual Illusions',
  },
  {
    id: 'pa-ent-3b',
    question: 'In the Ponzo illusion, two identical bars sit between two lines that converge toward the top, and the upper bar looks longer. Which explanation fits best?',
    options: ['Retinal disparity makes the upper bar look nearer', 'Perspective cues distance, and size constancy enlarges it', 'Closure fills in a gap that lengthens the upper bar', 'Adaptation shrinks the lower bar over several seconds'],
    correctIndex: 1,
    explanation: 'The converging lines act as linear perspective, so the upper bar seems farther away. Because it casts the same retinal image, size constancy makes it look larger.',
    partNumber: 3,
    partTitle: 'Visual Illusions',
  },

  // Part 4: Attention
  {
    id: 'pa-ent-4a',
    question: 'Participants study a photo of a kitchen. The screen blanks for a split second, and when it returns a large clock is missing from the wall. Most participants fail to notice. Which concept does this demonstrate?',
    options: ['Change blindness', 'Inattentional blindness', 'Cocktail party effect', 'Selective attention'],
    correctIndex: 0,
    explanation: 'Failing to detect a change to an existing scene, especially across a brief disruption, is change blindness. Inattentional blindness is missing a new, unexpected object while attention is elsewhere.',
    partNumber: 4,
    partTitle: 'Attention',
  },
  {
    id: 'pa-ent-4b',
    question: 'On a long highway trip, a hungry driver notices every fast-food sign, while her passenger, who has just eaten, notices none of them. What does this show about attention?',
    options: ['It is captured by an internal factor, her current need', 'It is captured by an external factor, sign brightness', 'It fails because of a brief visual disruption', 'It relies only on bottom-up sensory data'],
    correctIndex: 0,
    explanation: 'The signs were the same for both people; the driver\'s hunger, a feature of the perceiver, directed her attention. That is an internal factor rather than a property of the stimulus.',
    partNumber: 4,
    partTitle: 'Attention',
  },

  // Part 5: Selective Attention
  {
    id: 'pa-ent-5a',
    question: 'Before hearing a song played backward, one group is told it contains a hidden message and is shown the supposed words. That group reports hearing the words clearly; a group told nothing hears only gibberish. Which concept explains this?',
    options: ['Perceptual constancy', 'Perceptual set', 'Bottom-up processing', 'Change blindness'],
    correctIndex: 1,
    explanation: 'Being told what to expect created a mental predisposition to hear particular words in ambiguous sounds, which is a perceptual set.',
    partNumber: 5,
    partTitle: 'Selective Attention',
  },
  {
    id: 'pa-ent-5b',
    question: 'The same ambiguous shape is read as the letter B in the sequence "A _ C" and as the number 13 in the sequence "12 _ 14." Which explanation fits best?',
    options: ['Set built from long prior experience', 'Constancy across changing viewing angles', 'Closure that fills in a missing part', 'Context from the characters around it'],
    correctIndex: 3,
    explanation: 'The surrounding characters in the current display determine how the shape is read, which is a context effect. A perceptual set comes from earlier experience or expectations.',
    partNumber: 5,
    partTitle: 'Selective Attention',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'pa-ent-6a',
    question: 'A pilot approaching at night judges that one runway light is farther away than the others because its image looks smaller than theirs. Which concept is the pilot using?',
    options: ['Size constancy, a perceptual constancy', 'Linear perspective, a depth cue', 'Relative size, a depth cue', 'Interposition, a depth cue'],
    correctIndex: 2,
    explanation: 'Using a smaller image to judge greater distance is relative size, a monocular depth cue. Size constancy would be perceiving the light as staying the same size as distance changes.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pa-ent-6b',
    question: 'In an experiment, 60 participants watched a video and counted passes. Half were randomly assigned to also track bounce passes, a harder task. A woman with an umbrella walked through the scene; 30% of the hard-task group noticed her, compared with 60% of the easy-task group. Which conclusion is best supported?',
    options: ['The difference cannot be due to the task, as it was correlational', 'Change blindness rose because the scene was disrupted', 'Bottom-up processing was stronger in the hard-task group', 'A heavier attentional load made her easier to miss'],
    correctIndex: 3,
    explanation: 'Because participants were randomly assigned, the harder counting task likely caused more inattentional blindness. Nothing in the scene changed, so this is not change blindness.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'pa-ent-7a',
    question: 'Which pair of findings best supports the claim that both inborn tendencies and experience shape perception?',
    options: ['Newborn goats avoid the visual cliff; the Müller-Lyer effect varies by culture', 'Infants prefer faces to other patterns; adults also prefer faces to other patterns', 'People miss a gorilla while counting passes; people miss a swapped clock in a photo', 'Hungry people notice food signs; tired people notice beds and pillows in ads'],
    correctIndex: 0,
    explanation: 'Animals avoiding the cliff from birth suggests an inborn component, while cultural differences in the Müller-Lyer illusion show that experience with rectangular buildings shapes perception.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'pa-ent-7b',
    question: 'While the audience watches a magician\'s raised right hand, an assistant carrying a tall ladder walks slowly across the back of the stage in full view; few people see her. Later, during a puff of smoke, the magician swaps a red scarf for a blue one, and again few notice. Which concepts explain these two moments, in order?',
    options: ['Change blindness, then inattentional blindness', 'Selective attention, then perceptual set', 'Inattentional blindness, then change blindness', 'Cocktail party effect, then size constancy'],
    correctIndex: 2,
    explanation: 'Missing a fully visible, unexpected person because attention was drawn elsewhere is inattentional blindness. Missing a change to the scene during a disruption is change blindness.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Perceptual Organization' },
    { partNumber: 2, partTitle: 'Depth Perception' },
    { partNumber: 3, partTitle: 'Visual Illusions' },
    { partNumber: 4, partTitle: 'Attention' },
    { partNumber: 5, partTitle: 'Selective Attention' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
