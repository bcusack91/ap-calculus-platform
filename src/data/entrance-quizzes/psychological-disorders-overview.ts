/**
 * Entrance Quiz — Psychological Disorders Overview (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What Counts as a Disorder?
  {
    id: 'pdo-ent-1a',
    question: 'A graduate student rereads every email up to 15 times for typos before sending it. She meets every deadline, keeps up with friends and says the habit does not bother her. Which conclusion fits how psychologists identify disorders?',
    options: ['The rereading is unusual, so on its own it qualifies as a disorder', 'Without dysfunction or distress, a disorder label is not justified', 'Since she is not upset, no clinician could ever diagnose anything', 'Any statistically rare habit counts as a psychological disorder'],
    correctIndex: 1,
    explanation: 'Clinicians weigh dysfunction, distress and deviation together. Her habit is unusual, but it does not impair her life or cause her suffering, so deviation alone does not justify a label.',
    partNumber: 1,
    partTitle: 'What Counts as a Disorder?',
  },
  {
    id: 'pdo-ent-1b',
    question: 'A teenager eats nothing from sunrise to sunset for several weeks during a religious observance that most adults in her community also keep. Why should a clinician be cautious about calling this disordered eating?',
    options: ['Fasting can never be a symptom of any psychological disorder', 'Distress is the only factor that matters in deciding on a diagnosis', 'Deviation must be judged against the norms of her own setting', 'Any pattern that limits eating counts as a dysfunction'],
    correctIndex: 2,
    explanation: 'The fasting is expected in her community, so it does not deviate from her own social norms. Behavior must be judged in its cultural context, and fasting is not ruled out as a symptom in every case.',
    partNumber: 1,
    partTitle: 'What Counts as a Disorder?',
  },

  // Part 2: Classifying Disorders: DSM and ICD
  {
    id: 'pdo-ent-2a',
    question: 'Ten clinicians use a new checklist and agree almost perfectly on which clients have "disorder X." Follow-up studies show the label predicts nothing about the clients\' later course or response to treatment. How is the label best described?',
    options: ['Reliable but not valid', 'Neither reliable nor valid', 'Valid but not reliable', 'Both reliable and valid'],
    correctIndex: 0,
    explanation: 'Agreement among clinicians shows reliability. A label that tells us nothing true about the people who receive it lacks validity, so the category is reliable but not valid.',
    partNumber: 2,
    partTitle: 'Classifying Disorders: DSM and ICD',
  },
  {
    id: 'pdo-ent-2b',
    question: 'Which practice best meets the CED\'s standard for diagnosing a psychological disorder?',
    options: ['A teacher sees a student worry in class and records a diagnosis', 'A student scores high on an online quiz and diagnoses herself', 'A trained clinician uses a structured interview and a medical exam', 'A friend matches symptoms to a list shared on social media'],
    correctIndex: 2,
    explanation: 'Diagnosis requires specialized training and evidence-based tools, such as structured interviews and medical evaluation to rule out physical causes. Casual observation and online checklists meet neither standard.',
    partNumber: 2,
    partTitle: 'Classifying Disorders: DSM and ICD',
  },

  // Part 3: Perspectives on Disorders and the Eclectic Approach
  {
    id: 'pdo-ent-3a',
    question: 'A psychologist explains a client\'s depression as the result of years without acceptance from her family, which left her unable to grow toward her potential. Which perspective does this explanation reflect?',
    options: ['Psychodynamic', 'Sociocultural', 'Cognitive', 'Humanistic'],
    correctIndex: 3,
    explanation: 'The humanistic perspective traces disorders to a lack of social support and an inability to fulfill one\'s potential. A sociocultural account would focus on broader dynamics such as poverty or discrimination.',
    partNumber: 3,
    partTitle: 'Perspectives on Disorders and the Eclectic Approach',
  },
  {
    id: 'pdo-ent-3b',
    question: 'Which explanation of a man\'s repeated panic attacks reflects the cognitive perspective?',
    options: ['He reads his racing heart as proof that he is dying', 'Avoiding crowded stores is reinforced by the relief it brings', 'The attacks stem from childhood conflicts kept unconscious', 'He inherited a highly reactive fear system from his parents'],
    correctIndex: 0,
    explanation: 'The cognitive perspective locates the cause in maladaptive thoughts and interpretations, such as reading normal arousal as a catastrophe. Reinforced avoidance is behavioral, hidden conflict is psychodynamic, and inheritance is biological.',
    partNumber: 3,
    partTitle: 'Perspectives on Disorders and the Eclectic Approach',
  },

  // Part 4: Interaction Models and Data
  {
    id: 'pdo-ent-4a',
    question: 'In a practice study, the rate of a disorder was 3% for people with no family history and low stress, 5% with no family history and high stress, 4% with a family history and low stress, and 19% with a family history and high stress. Which statement best describes the pattern?',
    options: ['Stress raises risk far more for the vulnerable group', 'Family history alone explains nearly all of the cases', 'Stress raises risk by the same amount in both groups', 'Stress raises risk only for those with no family history'],
    correctIndex: 0,
    explanation: 'High stress adds 2 points without a family history but 15 points with one, so the effect of stress depends on vulnerability. That interaction is what the diathesis-stress model predicts.',
    partNumber: 4,
    partTitle: 'Interaction Models and Data',
  },
  {
    id: 'pdo-ent-4b',
    question: 'A clinician\'s plan for a client reviews her medication and sleep and teaches her to challenge her catastrophic thoughts. According to the biopsychosocial model, which family of factors has the plan left out?',
    options: ['Biological factors such as genes and brain chemistry', 'Sociocultural factors such as relationships and income', 'Psychological factors such as beliefs and coping', 'Evolutionary factors such as inherited survival instincts'],
    correctIndex: 1,
    explanation: 'Medication and sleep address biological factors, and challenging thoughts addresses psychological ones. Nothing in the plan addresses her relationships, community or finances, the sociocultural family.',
    partNumber: 4,
    partTitle: 'Interaction Models and Data',
  },

  // Part 5: Labels, Stigma, and Bias in Diagnosis
  {
    id: 'pdo-ent-5a',
    question: 'A veteran avoids seeking therapy because he believes that needing help would prove he is weak, a view he absorbed from the people around him. Which concept does this illustrate?',
    options: ['Structural stigma', 'Public stigma', 'Ageism', 'Self-stigma'],
    correctIndex: 3,
    explanation: 'He has applied a public stereotype to himself, which is self-stigma, and it discourages him from seeking help. Structural stigma would be built into laws or institutional policies.',
    partNumber: 5,
    partTitle: 'Labels, Stigma, and Bias in Diagnosis',
  },
  {
    id: 'pdo-ent-5b',
    question: 'Research suggests that depression in men is often missed when it shows up as irritability and heavy drinking rather than as sadness. Which description fits this problem best?',
    options: ['Age stereotypes causing overdiagnosis', 'Gender bias causing underdiagnosis', 'Racial stereotypes causing underdiagnosis', 'Cultural norms causing overdiagnosis'],
    correctIndex: 1,
    explanation: 'Expectations about how men show distress lead clinicians to overlook real, impairing symptoms. That is gender bias producing underdiagnosis.',
    partNumber: 5,
    partTitle: 'Labels, Stigma, and Bias in Diagnosis',
  },

  // Part 6: AP Exam Practice: AAQ and EBQ
  {
    id: 'pdo-ent-6a',
    question: 'In a practice study, 200 college students were randomly assigned to read about a classmate described either as having schizophrenia or as having diabetes. Each then rated, from 1 to 7, how willing they would be to work on a group project with the classmate. What is the operational definition of the dependent variable?',
    options: ['The condition named in the description of the classmate', 'Each student\'s number on the 1-to-7 rating scale', 'Students\' general attitudes toward mental illness', 'Random assignment of students to the two descriptions'],
    correctIndex: 1,
    explanation: 'The dependent variable was measured as each student\'s 1-to-7 willingness rating. The condition named in the description is the independent variable, and random assignment is part of the design.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: AAQ and EBQ',
  },
  {
    id: 'pdo-ent-6b',
    question: 'An EBQ asks whether psychological disorders are best explained by a single cause or by interacting factors. Which source would best support the "interacting factors" claim through the diathesis-stress model?',
    options: ['Twins sharing a vulnerability fall ill mainly after major losses', 'Rates of a disorder are about the same in every country surveyed', 'A new manual edition adds clearer descriptions of symptoms', 'Most people with serious mental illness are not violent'],
    correctIndex: 0,
    explanation: 'When people who share a genetic vulnerability differ in outcomes depending on their stress, vulnerability and stress are interacting. The other sources do not speak to how causes combine.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: AAQ and EBQ',
  },

  // Part 7: Synthesis Review
  {
    id: 'pdo-ent-7a',
    question: 'A doctor dismisses a 74-year-old man\'s months of hopelessness and withdrawal as "part of getting older." Later, a psychologist documents clear impairment, suffering and a pattern unusual for his community. Which pairing describes the doctor\'s error and the psychologist\'s approach?',
    options: ['Self-stigma, then relying on a single biological perspective', 'Sexism leading to overdiagnosis, then weighing deviation alone', 'Ageism leading to underdiagnosis, then weighing all three factors', 'Structural stigma, then diagnosing with an online checklist'],
    correctIndex: 2,
    explanation: 'Attributing real symptoms to normal aging is ageism, which risks underdiagnosis. The psychologist weighs dysfunction, distress and deviation together, as the CED describes.',
    partNumber: 7,
    partTitle: 'Synthesis Review',
  },
  {
    id: 'pdo-ent-7b',
    question: 'To understand a teen\'s social anxiety, a clinician explores her family history of anxiety, her belief that classmates are always judging her and the bullying she faces at school, then builds one explanation from all three. Which pairing names her approach and the model her explanation most resembles?',
    options: ['Biological approach; diathesis-stress model', 'Cognitive approach; diathesis-stress model', 'Psychodynamic approach; biopsychosocial model', 'Eclectic approach; biopsychosocial model'],
    correctIndex: 3,
    explanation: 'Combining biological, cognitive and sociocultural lenses for the same client is an eclectic approach, and sorting causes into biological, psychological and sociocultural families is the biopsychosocial model. The diathesis-stress model is narrower, pairing genetic vulnerability with stress.',
    partNumber: 7,
    partTitle: 'Synthesis Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Counts as a Disorder?' },
    { partNumber: 2, partTitle: 'Classifying Disorders: DSM and ICD' },
    { partNumber: 3, partTitle: 'Perspectives on Disorders and the Eclectic Approach' },
    { partNumber: 4, partTitle: 'Interaction Models and Data' },
    { partNumber: 5, partTitle: 'Labels, Stigma, and Bias in Diagnosis' },
    { partNumber: 6, partTitle: 'AP Exam Practice: AAQ and EBQ' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
