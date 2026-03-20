/**
 * Entrance Quiz — Psychology and Behavior (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Biological Bases of Behavior
  {
    id: 'mpb-ent-1a',
    question: 'Damage to the amygdala most commonly results in:',
    options: [
      'Impaired procedural memory and motor skill learning.',
      'Deficits in fear conditioning, emotional memory, and recognition of emotional stimuli.',
      'Loss of language comprehension (Wernicke\'s aphasia).',
      'Inability to form new explicit (declarative) memories.'
    ],
    correctIndex: 1,
    explanation: 'The amygdala (limbic system) is critical for fear learning, emotional memory consolidation (via interactions with the hippocampus), and recognizing emotional expressions. Bilateral amygdala damage (Urbach-Wiethe disease) produces the classic triad: fearlessness, impaired fear conditioning, and emotional recognition deficits.',
    partNumber: 1,
    partTitle: 'Biological Bases of Behavior'
  },
  {
    id: 'mpb-ent-1b',
    question: 'The neurotransmitter dopamine is most associated with which brain pathway and behavioral function?',
    options: [
      'Raphe nuclei pathway; regulation of sleep-wake cycles.',
      'Nigrostriatal and mesolimbic/mesocortical pathways; reward, motivation, and motor control.',
      'Locus coeruleus pathway; modulation of attention and stress response.',
      'Basal forebrain pathway; cholinergic modulation of learning and memory.'
    ],
    correctIndex: 1,
    explanation: 'Dopamine is central to the reward circuit (nucleus accumbens, ventral tegmental area—mesolimbic). The nigrostriatal pathway controls voluntary movement (degeneration → Parkinson\'s). Mesocortical dopamine affects executive function and is implicated in schizophrenia. Serotonin comes from raphe nuclei; NE from locus coeruleus.',
    partNumber: 1,
    partTitle: 'Biological Bases of Behavior'
  },

  // Part 2: Sensation & Perception
  {
    id: 'mpb-ent-2a',
    question: 'Signal detection theory suggests that the ability to detect a stimulus depends on:',
    options: [
      'Only the physical intensity of the stimulus relative to the absolute threshold.',
      'Both the sensitivity of the sensory system and the observer\'s response bias (criteria/willingness to say "yes").',
      'Only the observer\'s prior expectations and not the actual stimulus intensity.',
      'The just noticeable difference (JND) between two stimuli.'
    ],
    correctIndex: 1,
    explanation: 'Signal detection theory (SDT) separates sensitivity (d′) from response bias (criterion, β). A radiologist may miss a tumor (miss) or over-report (false alarm) based on their threshold, not just physical signal intensity. SDT explains why detection varies across individuals and contexts even with identical stimuli.',
    partNumber: 2,
    partTitle: 'Sensation & Perception'
  },
  {
    id: 'mpb-ent-2b',
    question: 'Weber\'s Law states that the just noticeable difference (JND) is a constant proportion of the original stimulus intensity (ΔI/I = k). Which scenario is consistent with Weber\'s Law?',
    options: [
      'A 1 kg weight feels heavier than a 1 kg weight added to a 100 kg barbell—you can detect both equally.',
      'Detecting a 1-gram difference is equally easy whether holding 10 grams or 1,000 grams.',
      'You need a larger absolute difference to detect a change when the background stimulus is stronger.',
      'The threshold for detecting light decreases linearly as ambient light increases.'
    ],
    correctIndex: 2,
    explanation: 'Weber\'s Law: ΔI/I = k (constant). This means the JND increases proportionally with stimulus magnitude. You need a much larger absolute difference to detect a change against a strong background than a weak one. Lifting an extra 10g is noticeable when holding 100g, but not when holding 10 kg.',
    partNumber: 2,
    partTitle: 'Sensation & Perception'
  },

  // Part 3: Learning & Memory
  {
    id: 'mpb-ent-3a',
    question: 'A dog salivates at the sound of a bell after the bell has been repeatedly paired with food. The bell is best described as:',
    options: [
      'An unconditioned stimulus (UCS) that naturally elicits the response.',
      'A conditioned stimulus (CS) that elicits a conditioned response after associative learning.',
      'A neutral stimulus that has not yet been paired with any biologically significant event.',
      'A discriminative stimulus controlling operant behavior.'
    ],
    correctIndex: 1,
    explanation: 'In Pavlov\'s classical conditioning: UCS = food (naturally elicits salivation = UCR). After repeated pairing with the bell (originally neutral), the bell becomes a CS that elicits the conditioned response (CR = salivation). The CS → CR relationship is the acquired reflex.',
    partNumber: 3,
    partTitle: 'Learning & Memory'
  },
  {
    id: 'mpb-ent-3b',
    question: 'The hippocampus is essential for the formation of:',
    options: [
      'Procedural (implicit) memories, such as riding a bicycle.',
      'Emotional responses, particularly conditioned fear.',
      'New explicit (declarative) memories, including episodic and semantic memories.',
      'Short-term working memory held in the prefrontal cortex.'
    ],
    correctIndex: 2,
    explanation: 'H.M. (Henry Molaison), who had bilateral hippocampal removal, had severe anterograde amnesia—he could not form new explicit memories but retained procedural learning (implicit, cerebellum/basal ganglia-dependent). The hippocampus is critical for encoding new episodic and semantic memories and spatial navigation.',
    partNumber: 3,
    partTitle: 'Learning & Memory'
  },

  // Part 4: Motivation & Emotion
  {
    id: 'mpb-ent-4a',
    question: 'Maslow\'s hierarchy of needs suggests that self-actualization can only be pursued when:',
    options: [
      'Cognitive and aesthetic needs have been fully satisfied.',
      'Lower-order needs (physiological, safety, belonging, esteem) are sufficiently met.',
      'An individual has achieved complete financial independence.',
      'Social recognition and fame have been achieved.'
    ],
    correctIndex: 1,
    explanation: 'Maslow\'s hierarchy (bottom to top): physiological → safety → love/belonging → esteem → self-actualization. Higher needs motivate behavior only once lower needs are sufficiently met. Self-actualization (realizing one\'s full potential) is at the apex and requires prior need satisfaction.',
    partNumber: 4,
    partTitle: 'Motivation & Emotion'
  },
  {
    id: 'mpb-ent-4b',
    question: 'The James-Lange theory of emotion proposes that:',
    options: [
      'Emotions occur simultaneously with physiological arousal, triggered by the same stimulus.',
      'We experience emotion as a result of perceiving our own physiological responses to a stimulus.',
      'A cognitive appraisal of a stimulus precedes both arousal and the conscious emotional experience.',
      'The thalamus simultaneously sends signals to the cortex (emotion) and the amygdala (fear) independently.'
    ],
    correctIndex: 1,
    explanation: 'James-Lange: stimulus → physiological response → emotion. "We are afraid because we tremble." Cannon-Bard: stimulus simultaneously triggers both arousal and emotion. Schachter-Singer (two-factor): physiological arousal + cognitive label = emotion. Lazarus: cognitive appraisal first.',
    partNumber: 4,
    partTitle: 'Motivation & Emotion'
  },

  // Part 5: Psychological Disorders
  {
    id: 'mpb-ent-5a',
    question: 'The diathesis-stress model of psychological disorders suggests that:',
    options: [
      'Psychological disorders are caused solely by genetic predispositions.',
      'Environmental stress alone is sufficient to cause any psychological disorder.',
      'Disorders arise from the interaction of a biological or psychological vulnerability (diathesis) and environmental stressors.',
      'Stress strengthens psychological resilience, preventing disorders.'
    ],
    correctIndex: 2,
    explanation: 'The diathesis-stress model is a biopsychosocial framework: a pre-existing vulnerability (genetic, neurobiological, or psychological) interacts with environmental stressors to produce a disorder. Neither diathesis alone nor stress alone is typically sufficient—both must combine to exceed a threshold.',
    partNumber: 5,
    partTitle: 'Psychological Disorders'
  },
  {
    id: 'mpb-ent-5b',
    question: 'Positive symptoms of schizophrenia include:',
    options: [
      'Flat affect, alogia, avolition, and social withdrawal.',
      'Hallucinations, delusions, disorganized speech, and disorganized behavior.',
      'Cognitive decline, memory deficits, and motor rigidity.',
      'Excessive anxiety, phobias, and compulsive rituals.'
    ],
    correctIndex: 1,
    explanation: 'Positive symptoms are excesses of normal function: hallucinations (typically auditory), delusions, disorganized thought/speech, and bizarre behavior. Negative symptoms are deficits: flat affect, alogia (poverty of speech), avolition, anhedonia. Cognitive symptoms are a third category. Positive symptoms respond better to antipsychotics.',
    partNumber: 5,
    partTitle: 'Psychological Disorders'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mpb-ent-6a',
    question: 'A researcher studies the effect of music tempo on studying efficiency. Participants in the fast-tempo condition score higher on a subsequent test than those in the slow-tempo condition. The researcher concludes that fast-tempo music causes better learning. A significant confound is:',
    options: [
      'The researcher used a control group.',
      'Participants who prefer fast-tempo music may self-select into conditions differently and have pre-existing differences in study habits.',
      'The test was administered immediately after studying.',
      'Both groups studied for the same duration of time.'
    ],
    correctIndex: 1,
    explanation: 'If assignment is not random (or if preference influences condition), systematic differences between groups (study habits, baseline ability) could explain the result—a selection bias/confound. Without random assignment and controlling for pre-existing differences, causality cannot be inferred from the study design.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mpb-ent-6b',
    question: 'Observational learning (modeling) is best illustrated by Bandura\'s Bobo doll experiments because:',
    options: [
      'Children learned aggressive behavior by being rewarded with candy for hitting the doll.',
      'Children reproduced aggressive behaviors they observed in a model, even without direct reinforcement.',
      'Children extinguished aggressive behavior after watching the model be punished.',
      'Classical conditioning of fear responses occurred through repeated pairings.'
    ],
    correctIndex: 1,
    explanation: 'Bandura demonstrated that children imitated aggressive acts toward the Bobo doll after simply observing an adult model do so—no direct reinforcement required. This established observational learning (social learning theory). The vicarious reinforcement condition showed that watching the model be rewarded increased imitation.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mpb-ent-7a',
    question: 'The concept of cognitive dissonance (Festinger) predicts that when a person holds two contradictory beliefs simultaneously, they will:',
    options: [
      'Ignore both beliefs until one naturally fades from memory.',
      'Experience psychological discomfort and be motivated to reduce the inconsistency by changing a belief, behavior, or perception.',
      'Amplify the stronger belief and completely suppress the weaker one.',
      'Seek social support to confirm the belief that produces less discomfort.'
    ],
    correctIndex: 1,
    explanation: 'Cognitive dissonance theory: holding inconsistent cognitions creates psychological tension (dissonance). To reduce discomfort, people change an attitude or belief, change behavior, rationalize the inconsistency, or minimize the importance of one cognition. Classic example: smokers rationalizing their habit despite knowing health risks.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mpb-ent-7b',
    question: 'Freud\'s defense mechanism of reaction formation involves:',
    options: [
      'Attributing one\'s own unacceptable impulses to other people.',
      'Reverting to behaviors characteristic of an earlier developmental stage under stress.',
      'Expressing the opposite of one\'s true feelings or impulses to conceal them.',
      'Channeling unacceptable impulses into socially acceptable activities.'
    ],
    correctIndex: 2,
    explanation: 'Reaction formation: unconscious impulse → conscious expression of the opposite attitude (e.g., expressing excessive affection toward a person you unconsciously resent). Projection = attributing own impulses to others. Regression = reverting to earlier behaviors. Sublimation = channeling impulses constructively.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Biological Bases of Behavior' },
    { partNumber: 2, partTitle: 'Sensation & Perception' },
    { partNumber: 3, partTitle: 'Learning & Memory' },
    { partNumber: 4, partTitle: 'Motivation & Emotion' },
    { partNumber: 5, partTitle: 'Psychological Disorders' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
