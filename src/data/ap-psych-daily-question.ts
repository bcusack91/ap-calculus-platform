/**
 * AP Psychology — Question of the Day
 *
 * Self-contained question pool covering all 11 AP Psychology units.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'Which neurotransmitter is most directly involved in reward and motivation pathways?', options: ['Serotonin', 'GABA', 'Dopamine', 'Acetylcholine'], correctAnswer: 2, explanation: 'Dopamine is the primary neurotransmitter in the brain\'s reward system (mesolimbic pathway). It reinforces behaviors that produce pleasure and drives motivation.' },
  { question: 'According to Piaget, during which stage do children develop object permanence?', options: ['Preoperational', 'Sensorimotor', 'Concrete operational', 'Formal operational'], correctAnswer: 1, explanation: 'Object permanence — the understanding that objects continue to exist when out of sight — develops during the sensorimotor stage (birth to ~2 years).' },
  { question: 'What is the primary function of the myelin sheath?', options: ['Produces neurotransmitters', 'Speeds up neural impulse transmission', 'Connects neurons at synapses', 'Removes waste from the brain'], correctAnswer: 1, explanation: 'The myelin sheath is a fatty insulating layer around axons that speeds up action potential transmission through saltatory conduction.' },
  { question: 'In classical conditioning, what is the unconditioned response (UCR)?', options: ['A learned reaction to a neutral stimulus', 'An automatic reaction to a stimulus that does not require learning', 'A voluntary behavior reinforced by consequences', 'A response that only occurs after pairing'], correctAnswer: 1, explanation: 'The UCR is an unlearned, naturally occurring response to the unconditioned stimulus (e.g., salivating when food is placed in the mouth).' },
  { question: 'Which brain structure plays a key role in forming new explicit memories?', options: ['Amygdala', 'Hippocampus', 'Cerebellum', 'Thalamus'], correctAnswer: 1, explanation: 'The hippocampus is essential for consolidating new explicit (declarative) memories. Damage to it (as in patient H.M.) prevents forming new long-term memories.' },
  { question: 'What does Erikson\'s stage of "identity vs. role confusion" primarily occur during?', options: ['Early childhood', 'Adolescence', 'Middle adulthood', 'Late adulthood'], correctAnswer: 1, explanation: 'Identity vs. role confusion is Erikson\'s fifth psychosocial stage, occurring during adolescence (~12-18 years), when individuals explore who they are.' },
  { question: 'Which perspective in psychology focuses on how mental processes influence behavior?', options: ['Behavioral', 'Cognitive', 'Psychodynamic', 'Humanistic'], correctAnswer: 1, explanation: 'The cognitive perspective emphasizes internal mental processes — thinking, memory, perception, problem-solving — and how they influence behavior.' },
  { question: 'A researcher wants to study the effect of sleep deprivation on test performance. What is the independent variable?', options: ['Test performance', 'Amount of sleep deprivation', 'Number of participants', 'Type of test given'], correctAnswer: 1, explanation: 'The independent variable is what the researcher manipulates — in this case the amount of sleep deprivation. Test performance is the dependent variable (what is measured).' },
  { question: 'In operant conditioning, what is negative reinforcement?', options: ['Punishing an unwanted behavior', 'Removing something unpleasant to increase a behavior', 'Adding something unpleasant to decrease a behavior', 'Ignoring a behavior to make it stop'], correctAnswer: 1, explanation: 'Negative reinforcement strengthens a behavior by removing an aversive stimulus. For example, taking aspirin (behavior) removes a headache (aversive stimulus).' },
  { question: 'Which disorder is characterized by alternating episodes of mania and depression?', options: ['Major depressive disorder', 'Bipolar disorder', 'Generalized anxiety disorder', 'Schizophrenia'], correctAnswer: 1, explanation: 'Bipolar disorder (formerly manic-depressive disorder) features cycles of manic episodes (elevated mood, energy) and depressive episodes.' },
  { question: 'What is the cocktail party effect an example of?', options: ['Divided attention', 'Selective attention', 'Inattentional blindness', 'Change blindness'], correctAnswer: 1, explanation: 'The cocktail party effect — hearing your name in a noisy room — demonstrates selective attention: the ability to focus on one stimulus while filtering out others.' },
  { question: 'Wernicke\'s area is primarily responsible for:', options: ['Motor speech production', 'Language comprehension', 'Visual processing', 'Emotional regulation'], correctAnswer: 1, explanation: 'Wernicke\'s area (left temporal lobe) is involved in language comprehension. Damage causes fluent but nonsensical speech (Wernicke\'s aphasia).' },
  { question: 'According to Maslow\'s hierarchy of needs, which need must be met first?', options: ['Safety', 'Belonging', 'Physiological', 'Esteem'], correctAnswer: 2, explanation: 'Maslow proposed that basic physiological needs (food, water, shelter) must be satisfied before higher-level needs (safety, belonging, esteem, self-actualization) can be pursued.' },
  { question: 'What is the fundamental attribution error?', options: ['Blaming yourself for others\' failures', 'Overestimating situational factors for others\' behavior', 'Overestimating dispositional factors for others\' behavior', 'Ignoring the role of personality in behavior'], correctAnswer: 2, explanation: 'The fundamental attribution error is the tendency to overattribute others\' behavior to internal dispositions (personality) while underestimating situational influences.' },
  { question: 'Which type of memory has the shortest duration?', options: ['Long-term memory', 'Short-term memory', 'Sensory memory', 'Working memory'], correctAnswer: 2, explanation: 'Sensory memory holds raw sensory information for fractions of a second (iconic memory ~0.5s, echoic memory ~3-4s) before it\'s processed or lost.' },
  { question: 'REM sleep is associated with:', options: ['Sleepwalking', 'Dreaming and memory consolidation', 'The deepest stage of sleep', 'Sleep spindles'], correctAnswer: 1, explanation: 'REM (rapid eye movement) sleep is when most vivid dreaming occurs. It plays a crucial role in memory consolidation and emotional processing.' },
  { question: 'A child who calls all four-legged animals "doggy" is demonstrating:', options: ['Accommodation', 'Assimilation', 'Object permanence', 'Conservation'], correctAnswer: 1, explanation: 'Assimilation is fitting new information into existing schemas. The child\'s existing "dog" schema is being applied to all similar-looking animals.' },
  { question: 'Which defense mechanism involves reverting to behaviors characteristic of an earlier stage of development?', options: ['Projection', 'Regression', 'Rationalization', 'Sublimation'], correctAnswer: 1, explanation: 'Regression is a Freudian defense mechanism where a person retreats to behaviors from an earlier developmental stage when facing stress or anxiety.' },
  { question: 'What does a z-score of +2.0 indicate?', options: ['The score is average', 'The score is 2 standard deviations above the mean', 'The score is in the bottom 2%', 'The score equals 2% of the population'], correctAnswer: 1, explanation: 'A z-score of +2.0 means the score is exactly 2 standard deviations above the mean, placing it approximately at the 97.7th percentile.' },
  { question: 'Which brain scan technique measures changes in blood flow to determine brain activity?', options: ['EEG', 'CT scan', 'fMRI', 'PET scan'], correctAnswer: 2, explanation: 'fMRI (functional magnetic resonance imaging) detects changes in blood oxygenation (BOLD signal) to map brain activity with high spatial resolution.' },
  { question: 'Stanley Milgram\'s obedience study demonstrated that:', options: ['People rarely obey authority', 'Conformity only occurs in groups', 'Ordinary people can follow orders that cause harm', 'Bystander effect prevents intervention'], correctAnswer: 2, explanation: 'Milgram\'s experiment showed that ~65% of participants administered maximum "shocks" when instructed by an authority figure, revealing the power of obedience.' },
  { question: 'Which type of schizophrenia symptom includes hallucinations and delusions?', options: ['Negative symptoms', 'Positive symptoms', 'Cognitive symptoms', 'Affective symptoms'], correctAnswer: 1, explanation: 'Positive symptoms are excesses or distortions of normal function (hallucinations, delusions, disorganized speech). Negative symptoms are reductions (flat affect, avolition).' },
  { question: 'What is the difference between fluid and crystallized intelligence?', options: ['Fluid is verbal; crystallized is spatial', 'Fluid is reasoning ability; crystallized is accumulated knowledge', 'Both decline equally with age', 'Crystallized peaks in adolescence'], correctAnswer: 1, explanation: 'Fluid intelligence is the ability to reason and solve novel problems (peaks early, declines with age). Crystallized intelligence is accumulated knowledge and verbal skills (increases throughout life).' },
  { question: 'The Garcia effect (taste aversion) is notable because it demonstrates:', options: ['Classical conditioning always requires many trials', 'Learning can occur in a single trial with long delays', 'Operant conditioning is stronger than classical', 'Biological preparedness plays no role in learning'], correctAnswer: 1, explanation: 'Garcia showed that taste aversions can form in a single trial and with delays of hours between the CS (taste) and US (illness), violating traditional conditioning principles.' },
  { question: 'Which theory of emotion proposes that physiological arousal and emotional experience occur simultaneously?', options: ['James-Lange theory', 'Cannon-Bard theory', 'Schachter-Singer theory', 'Lazarus theory'], correctAnswer: 1, explanation: 'The Cannon-Bard theory proposes that the thalamus simultaneously sends signals to the cortex (emotional experience) and the body (physiological arousal).' },
  { question: 'Conformity increases under which of the following conditions?', options: ['When the group is small', 'When responses are made privately', 'When the group is unanimous', 'When the individual has high status'], correctAnswer: 2, explanation: 'Asch\'s conformity experiments showed that conformity increases when group responses are unanimous. Even one dissenter significantly reduces conformity.' },
  { question: 'What is the primary purpose of the DSM-5?', options: ['Prescribing medications for mental disorders', 'Classifying and diagnosing mental disorders', 'Developing therapy techniques', 'Conducting psychological research'], correctAnswer: 1, explanation: 'The DSM-5 (Diagnostic and Statistical Manual) is the standard classification system for diagnosing mental disorders, using specific criteria for each condition.' },
  { question: 'Which lobe of the brain is primarily responsible for processing visual information?', options: ['Frontal lobe', 'Temporal lobe', 'Parietal lobe', 'Occipital lobe'], correctAnswer: 3, explanation: 'The occipital lobe, located at the back of the brain, contains the primary visual cortex and is primarily responsible for processing visual information.' },
  { question: 'What concept does Bandura\'s Bobo doll experiment best illustrate?', options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Latent learning'], correctAnswer: 2, explanation: 'Bandura\'s Bobo doll study demonstrated observational learning (modeling): children who watched an adult act aggressively toward the doll imitated that behavior.' },
  { question: 'In signal detection theory, a "hit" occurs when:', options: ['A person correctly identifies a stimulus as present', 'A person says a stimulus is present when it is not', 'A person fails to detect a stimulus that is present', 'A person correctly identifies no stimulus is present'], correctAnswer: 0, explanation: 'A hit is a correct detection — saying "yes, the signal is there" when the signal is actually present. The other outcomes are false alarm, miss, and correct rejection.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PsychDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): PsychDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'ap-psychology', question: q, dayNumber: day }]
}
