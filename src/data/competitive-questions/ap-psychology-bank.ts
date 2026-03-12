// AP Psychology question bank for competitive mode

export interface ApPsychologyQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ApPsychologyQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'Which psychologist is known as the father of psychoanalysis?',
    options: ['Sigmund Freud', 'B.F. Skinner', 'Carl Rogers', 'Ivan Pavlov'],
    correctAnswer: 0,
    explanation: 'Freud founded psychoanalysis, emphasizing the unconscious mind and childhood experiences.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Classical conditioning was first demonstrated by:',
    options: ['Ivan Pavlov', 'John Watson', 'B.F. Skinner', 'Edward Thorndike'],
    correctAnswer: 0,
    explanation: 'Pavlov discovered classical conditioning through his famous experiments with dogs and salivation.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Which part of the brain is responsible for regulating basic life functions like breathing?',
    options: ['Brainstem (medulla)', 'Cerebral cortex', 'Hippocampus', 'Amygdala'],
    correctAnswer: 0,
    explanation: 'The medulla oblongata in the brainstem controls vital autonomic functions including breathing and heart rate.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What does the term "nature vs. nurture" refer to?',
    options: ['Genetics vs. environment debate', 'Conscious vs. unconscious mind', 'Classical vs. operant conditioning', 'Short-term vs. long-term memory'],
    correctAnswer: 0,
    explanation: 'The nature vs. nurture debate examines how much biology (genetics) vs. experience (environment) shapes behavior.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What neurotransmitter is associated with pleasure and reward?',
    options: ['Dopamine', 'Serotonin', 'GABA', 'Acetylcholine'],
    correctAnswer: 0,
    explanation: 'Dopamine plays a key role in the brain\'s reward pathway and motivation.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Which lobe of the brain is primarily responsible for vision?',
    options: ['Occipital lobe', 'Frontal lobe', 'Temporal lobe', 'Parietal lobe'],
    correctAnswer: 0,
    explanation: 'The occipital lobe, located at the back of the brain, processes visual information.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Abraham Maslow is best known for:',
    options: ['Hierarchy of needs', 'Stages of psychosocial development', 'Cognitive development theory', 'Operant conditioning'],
    correctAnswer: 0,
    explanation: 'Maslow\'s hierarchy of needs ranks human needs from physiological to self-actualization.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What is the independent variable in an experiment?',
    options: ['The variable the researcher manipulates', 'The variable being measured', 'The variable held constant', 'The variable that changes randomly'],
    correctAnswer: 0,
    explanation: 'The independent variable (IV) is deliberately changed by the researcher to observe its effect on the dependent variable.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'In Piaget\'s stages of cognitive development, at what stage do children develop object permanence?',
    options: ['Sensorimotor (0-2 years)', 'Preoperational (2-7 years)', 'Concrete operational (7-11 years)', 'Formal operational (12+ years)'],
    correctAnswer: 0,
    explanation: 'Object permanence — understanding objects exist when not visible — develops during the sensorimotor stage.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is the difference between negative reinforcement and punishment?',
    options: ['Negative reinforcement increases behavior; punishment decreases it', 'Both decrease behavior', 'Both increase behavior', 'Punishment increases behavior; negative reinforcement decreases it'],
    correctAnswer: 0,
    explanation: 'Negative reinforcement removes an unpleasant stimulus to increase behavior, while punishment adds an unpleasant consequence to decrease behavior.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What does Broca\'s area primarily control?',
    options: ['Speech production', 'Language comprehension', 'Visual processing', 'Motor coordination'],
    correctAnswer: 0,
    explanation: 'Broca\'s area (left frontal lobe) controls speech production. Damage causes Broca\'s aphasia (fluent understanding, broken speech).',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'Which defense mechanism involves redirecting emotions toward a less threatening target?',
    options: ['Displacement', 'Projection', 'Sublimation', 'Rationalization'],
    correctAnswer: 0,
    explanation: 'Displacement involves shifting emotions from a threatening target to a safer one (e.g., yelling at family after a bad day at work).',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the cocktail party effect?',
    options: ['Ability to focus on one voice in a noisy environment', 'Tendency to conform in social settings', 'Improved memory when intoxicated', 'Groupthink in party-like settings'],
    correctAnswer: 0,
    explanation: 'The cocktail party effect describes selective attention — focusing on one conversation while filtering out background noise.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Which theory of emotion suggests we experience physiological arousal and emotion simultaneously?',
    options: ['Cannon-Bard theory', 'James-Lange theory', 'Schachter-Singer theory', 'Lazarus theory'],
    correctAnswer: 0,
    explanation: 'The Cannon-Bard theory proposes that emotional and physiological responses occur simultaneously, not sequentially.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What is confirmation bias?',
    options: ['Seeking information that supports existing beliefs', 'Overconfidence in one\'s judgments', 'Tendency to follow the crowd', 'Blaming others for our failures'],
    correctAnswer: 0,
    explanation: 'Confirmation bias is the tendency to search for, interpret, and remember information that confirms preexisting beliefs.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'In Erikson\'s psychosocial stages, what is the crisis of adolescence?',
    options: ['Identity vs. role confusion', 'Intimacy vs. isolation', 'Industry vs. inferiority', 'Trust vs. mistrust'],
    correctAnswer: 0,
    explanation: 'Adolescents struggle with identity formation — developing a sense of self and personal values.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'What did Milgram\'s obedience study demonstrate?',
    options: ['People obey authority figures even when asked to harm others', 'People conform to group norms', 'Prisoners become aggressive in confined spaces', 'Bystanders are less likely to help in groups'],
    correctAnswer: 0,
    explanation: 'Milgram showed that 65% of participants administered maximum "shocks" when instructed by an authority figure.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is anterograde amnesia?',
    options: ['Inability to form new memories after brain damage', 'Loss of memories formed before brain damage', 'Temporary memory loss after trauma', 'Inability to recall procedural memories'],
    correctAnswer: 0,
    explanation: 'Anterograde amnesia (e.g., patient H.M.) prevents formation of new declarative memories while old memories remain intact.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'In the DSM-5, which disorder is characterized by at least two weeks of depressed mood or loss of interest?',
    options: ['Major depressive disorder', 'Persistent depressive disorder (dysthymia)', 'Bipolar I disorder', 'Generalized anxiety disorder'],
    correctAnswer: 0,
    explanation: 'MDD requires 5+ symptoms including depressed mood or anhedonia for at least 2 weeks.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What is the Garcia effect (taste aversion)?',
    options: ['Learning to avoid a food that caused illness, even with long delay', 'Preference for sweet foods', 'Pavlovian conditioning only works with immediate pairing', 'Rats cannot learn food aversions'],
    correctAnswer: 0,
    explanation: 'Garcia showed that taste aversion can form with a single pairing and long delay, challenging classical conditioning assumptions.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'What is the difference between proactive and retroactive interference?',
    options: ['Proactive: old info blocks new; Retroactive: new info blocks old', 'Both refer to old info blocking new', 'Proactive: new blocks old; Retroactive: old blocks new', 'They are the same phenomenon'],
    correctAnswer: 0,
    explanation: 'Proactive interference is when old memories interfere with learning new material; retroactive is when new learning disrupts old memories.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What neurotransmitter deficiency is most associated with Alzheimer\'s disease?',
    options: ['Acetylcholine', 'Dopamine', 'Serotonin', 'Norepinephrine'],
    correctAnswer: 0,
    explanation: 'Alzheimer\'s disease involves degeneration of acetylcholine-producing neurons, leading to memory and cognitive decline.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'In Kohlberg\'s theory of moral development, which level involves reasoning based on abstract ethical principles?',
    options: ['Postconventional', 'Conventional', 'Preconventional', 'Formal operational'],
    correctAnswer: 0,
    explanation: 'Postconventional morality (stages 5-6) involves reasoning based on universal ethical principles and social contracts.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'What is the fundamental attribution error?',
    options: ['Attributing others\' behavior to internal traits while ignoring situational factors', 'Blaming yourself for all failures', 'Attributing success to luck', 'Assuming everyone thinks like you'],
    correctAnswer: 0,
    explanation: 'The fundamental attribution error is overemphasizing dispositional (personality) factors for others\' behavior while underestimating situational factors.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What is the function of mirror neurons?',
    options: ['Fire both when performing and observing an action', 'Reflect light in the visual cortex', 'Store mirror-image memories', 'Control bilateral symmetry of movement'],
    correctAnswer: 0,
    explanation: 'Mirror neurons fire both when performing an action and when observing someone else perform it, possibly underlying empathy and imitation.',
    difficulty: 'hard',
  },
]

export function getApPsychologyQuestions(count: number = 10): ApPsychologyQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
