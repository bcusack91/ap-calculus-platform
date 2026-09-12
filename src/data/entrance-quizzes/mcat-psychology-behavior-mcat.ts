/**
 * Entrance Quiz — Psychology and Behavior (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Biological Bases of Behavior
  {
    id: 'mpb-ent-1a',
    question: 'Damage to the amygdala most commonly results in:',
    options: [
      'Impaired procedural memory and motor-skill learning.',
      'Deficits in fear learning and emotion recognition.',
      'Loss of language comprehension (Wernicke\'s aphasia).',
      'Inability to form new explicit (declarative) memories.'
    ],
    correctIndex: 1,
    explanation: 'The amygdala drives fear conditioning, the emotional tagging of memories it consolidates with the hippocampus, and the reading of emotional expressions; bilateral damage (as in Urbach-Wiethe disease) produces the classic triad of fearlessness, impaired fear conditioning, and emotion-recognition deficits. Procedural learning depends on the cerebellum and basal ganglia, comprehension on Wernicke\'s area, and new declarative memories on the hippocampus.',
    partNumber: 1,
    partTitle: 'Biological Bases of Behavior'
  },
  {
    id: 'mpb-ent-1b',
    question: 'The neurotransmitter dopamine is most associated with which brain pathway and behavioral function?',
    options: [
      'Raphe nuclei; regulation of the sleep-wake cycle.',
      'Nigrostriatal and mesolimbic pathways; reward and movement.',
      'Locus coeruleus; arousal, attention, and stress response.',
      'Basal forebrain; cholinergic support of memory.'
    ],
    correctIndex: 1,
    explanation: 'Dopaminergic projections run nigrostriatally, where degeneration produces the motor signs of Parkinson\'s disease, and mesolimbically and mesocortically, where they carry reward, motivation, and executive function (the mesocortical branch is implicated in schizophrenia). The other three pathways belong to different transmitters: serotonin from the raphe nuclei, norepinephrine from the locus coeruleus, and acetylcholine from the basal forebrain.',
    partNumber: 1,
    partTitle: 'Biological Bases of Behavior'
  },

  // Part 2: Sensation & Perception
  {
    id: 'mpb-ent-2a',
    question: 'Signal detection theory suggests that the ability to detect a stimulus depends on:',
    options: [
      'The physical intensity of the stimulus, and nothing else.',
      'Sensory sensitivity together with the observer\'s bias.',
      'The observer\'s expectations rather than the stimulus itself.',
      'The just noticeable difference between two stimuli.'
    ],
    correctIndex: 1,
    explanation: 'Signal detection theory splits performance into sensitivity (d-prime) and criterion — how much evidence the observer demands before answering "yes." A radiologist reading the same image can miss a tumor or call a false alarm depending on where that criterion sits, which is why detection varies across people and settings with the physical signal held constant. Intensity alone and expectation alone each capture only one of the two factors, and the just noticeable difference belongs to Weber\'s law.',
    partNumber: 2,
    partTitle: 'Sensation & Perception'
  },
  {
    id: 'mpb-ent-2b',
    question: 'Weber\'s Law states that the just noticeable difference (JND) is a constant proportion of the original stimulus intensity (ΔI/I = k). Which scenario is consistent with Weber\'s Law?',
    options: [
      'Adding 1 g is as noticeable on a 10 g load as on a 100 kg load.',
      'Detecting a 1 g change is equally easy at 10 g and at 1,000 g.',
      'A stronger background requires a larger absolute change to notice.',
      'The threshold for detecting light falls as ambient light rises.'
    ],
    correctIndex: 2,
    explanation: 'Weber\'s law fixes the JND as a constant fraction of the baseline, so the absolute change you need grows with the baseline: an extra 10 g is obvious while holding 100 g and undetectable while holding 10 kg. The first two choices describe a constant absolute threshold, which is precisely what the law denies, and light adaptation raises rather than lowers the detection threshold as ambient light increases.',
    partNumber: 2,
    partTitle: 'Sensation & Perception'
  },

  // Part 3: Learning & Memory
  {
    id: 'mpb-ent-3a',
    question: 'A dog salivates at the sound of a bell after the bell has been repeatedly paired with food. The bell is best described as:',
    options: [
      'An unconditioned stimulus that innately elicits salivation.',
      'A conditioned stimulus eliciting a conditioned response.',
      'A neutral stimulus not yet paired with a meaningful event.',
      'A discriminative stimulus signaling when a response pays off.'
    ],
    correctIndex: 1,
    explanation: 'Food is the unconditioned stimulus and salivation to food the unconditioned response. The bell began as a neutral stimulus, but repeated pairing made it a conditioned stimulus, and the salivation it now produces is the conditioned response. The bell has therefore stopped being neutral, it never elicited salivation innately, and discriminative stimuli belong to operant rather than classical conditioning.',
    partNumber: 3,
    partTitle: 'Learning & Memory'
  },
  {
    id: 'mpb-ent-3b',
    question: 'The hippocampus is essential for the formation of:',
    options: [
      'Procedural memories such as riding a bicycle.',
      'Conditioned fear and other emotional responses.',
      'New explicit memories, episodic and semantic.',
      'Working memory maintained by the prefrontal cortex.'
    ],
    correctIndex: 2,
    explanation: 'After bilateral hippocampal removal, H.M. (Henry Molaison) could no longer form new declarative memories yet still acquired new motor skills, which localizes episodic and semantic encoding — along with spatial navigation — to the hippocampus. Procedural learning runs through the cerebellum and basal ganglia, conditioned fear through the amygdala, and working memory through prefrontal cortex.',
    partNumber: 3,
    partTitle: 'Learning & Memory'
  },

  // Part 4: Motivation & Emotion
  {
    id: 'mpb-ent-4a',
    question: 'Maslow\'s hierarchy of needs suggests that self-actualization can only be pursued when:',
    options: [
      'Self-transcendence needs have already been fully satisfied.',
      'Physiological, safety, belonging, and esteem needs are met.',
      'The person has reached complete financial independence.',
      'Social recognition and public admiration have been earned.'
    ],
    correctIndex: 1,
    explanation: 'Maslow orders needs physiological, safety, love and belonging, esteem, and then self-actualization, and a level motivates behavior only once the levels beneath it are sufficiently met. Financial independence and public admiration are particular routes to safety or esteem rather than prerequisites in the model, and in Maslow\'s later expanded version self-transcendence sits ABOVE self-actualization, so it cannot be a prerequisite for it.',
    partNumber: 4,
    partTitle: 'Motivation & Emotion'
  },
  {
    id: 'mpb-ent-4b',
    question: 'The James-Lange theory of emotion proposes that:',
    options: [
      'Arousal and emotion arise together from one stimulus.',
      'Emotion follows from perceiving our own bodily response.',
      'Cognitive appraisal precedes both arousal and emotion.',
      'The thalamus signals cortex and amygdala independently.'
    ],
    correctIndex: 1,
    explanation: 'James-Lange runs stimulus to bodily response to felt emotion — "we are afraid because we tremble." Cannon-Bard has arousal and emotion arising at the same time, with the thalamus relaying separately to cortex and amygdala; Lazarus puts cognitive appraisal first; and Schachter-Singer requires arousal plus a cognitive label before an emotion is experienced.',
    partNumber: 4,
    partTitle: 'Motivation & Emotion'
  },

  // Part 5: Psychological Disorders
  {
    id: 'mpb-ent-5a',
    question: 'The diathesis-stress model of psychological disorders suggests that:',
    options: [
      'Disorders are caused entirely by inherited genetic risk.',
      'Severe environmental stress alone is enough to cause them.',
      'A pre-existing vulnerability interacts with stress.',
      'Stress builds resilience and so protects against disorder.'
    ],
    correctIndex: 2,
    explanation: 'The model is biopsychosocial: a predisposition — genetic, neurobiological, or psychological — has to meet environmental stress before the combined load crosses the threshold for a disorder. Neither a purely genetic nor a purely environmental account captures that interaction, and the resilience claim inverts the relationship the model describes.',
    partNumber: 5,
    partTitle: 'Psychological Disorders'
  },
  {
    id: 'mpb-ent-5b',
    question: 'Positive symptoms of schizophrenia include:',
    options: [
      'Flat affect, alogia, avolition, and social withdrawal.',
      'Hallucinations, delusions, and disorganized thinking.',
      'Memory decline, disorientation, and motor rigidity.',
      'Persistent anxiety, phobias, and compulsive rituals.'
    ],
    correctIndex: 1,
    explanation: 'Positive symptoms are additions to normal experience — hallucinations, most often auditory, along with delusions and disorganized thought, speech, or behavior — and they respond best to antipsychotics. Flat affect, alogia, and avolition are the negative symptoms (losses of normal function), attention and memory problems form the separate cognitive cluster, and anxiety with compulsive rituals belongs to a different diagnosis entirely.',
    partNumber: 5,
    partTitle: 'Psychological Disorders'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mpb-ent-6a',
    question: 'A researcher studies the effect of music tempo on studying efficiency. Participants in the fast-tempo condition score higher on a subsequent test than those in the slow-tempo condition. The researcher concludes that fast-tempo music causes better learning. A significant confound is:',
    options: [
      'The researcher included a comparison control group.',
      'Fast-tempo listeners may differ in prior study habits.',
      'The test came immediately after the study session ended.',
      'Both conditions were allotted exactly the same study time.'
    ],
    correctIndex: 1,
    explanation: 'A confound is a difference between the groups other than the manipulated variable. If tempo preference shapes who ends up in which condition, the groups already differ in study habits and baseline ability before any music plays, so the score gap has a second explanation and causality cannot be inferred. Including a control group, testing both groups at the same delay, and equating study time are features of sound design, not confounds.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mpb-ent-6b',
    question: 'Observational learning (modeling) is best illustrated by Bandura\'s Bobo doll experiments because:',
    options: [
      'Children hit the doll after being given candy for doing so.',
      'Children copied aggression they had merely watched a model perform.',
      'Children imitated only after they were praised for doing so.',
      'Fear of the doll was conditioned by repeated pairings.'
    ],
    correctIndex: 1,
    explanation: 'Bandura\'s children reproduced the model\'s aggressive acts after only watching them, with no reinforcement of their own, which is exactly what observational learning means and is the foundation of social learning theory. Candy for hitting or praise for imitating would make the demonstration ordinary operant conditioning, and fear acquired through repeated pairings is classical conditioning, a different paradigm altogether.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mpb-ent-7a',
    question: 'The concept of cognitive dissonance (Festinger) predicts that when a person holds two contradictory beliefs simultaneously, they will:',
    options: [
      'Ignore both beliefs until one fades from memory on its own.',
      'Feel discomfort and change a belief or behavior.',
      'Strengthen the stronger belief and suppress the weaker one.',
      'Grow steadily more confident in both beliefs alike.'
    ],
    correctIndex: 1,
    explanation: 'Dissonance is the tension inconsistent cognitions produce, and people relieve it by changing an attitude, changing the behavior, rationalizing the conflict, or downgrading the importance of one cognition — the smoker who decides the health evidence is overstated. Waiting for a belief to fade, simply suppressing one, and growing more confident in both describe no motivated resolution at all, which is the core of what the theory predicts.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mpb-ent-7b',
    question: 'Freud\'s defense mechanism of reaction formation involves:',
    options: [
      'Attributing one\'s own forbidden impulses to other people.',
      'Reverting to an earlier developmental stage under stress.',
      'Outwardly expressing the opposite of one\'s true feelings.',
      'Redirecting unacceptable impulses into acceptable outlets.'
    ],
    correctIndex: 2,
    explanation: 'In reaction formation an unconscious impulse surfaces as its conscious opposite, as when someone lavishes affection on a person they privately resent. The other three name different mechanisms: projection assigns one\'s impulses to others, regression retreats to an earlier developmental stage, and sublimation channels the impulse into socially valued activity.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
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
