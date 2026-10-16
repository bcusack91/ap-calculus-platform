/**
 * Entrance Quiz — Emotion & Stress (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Theories of Emotion
  {
    id: 'es-ent-1a',
    question: 'Participants who have just pedaled hard on an exercise bike, and whose hearts are still racing, rate a comedian as funnier than participants who rested beforehand. Which idea about emotion do these results support?',
    options: ['A quick appraisal always comes before any arousal', 'Arousal and feeling happen at once, independently', 'Arousal is labeled using cues from the setting', 'The body plays no part in what people feel'],
    correctIndex: 2,
    explanation: 'Leftover arousal from exercise was read as amusement because the comedian supplied the context. The same arousal taking on an emotional label from the setting supports the cognitive-label view.',
    partNumber: 1,
    partTitle: 'Theories of Emotion',
  },
  {
    id: 'es-ent-1b',
    question: 'Over a school year, students who report frequent positive emotions such as joy and interest try more new activities, and by June they have joined more clubs and made more new friends than students who report few positive emotions. Which idea does this pattern fit best?',
    options: ['Tend-and-befriend response', 'Facial-feedback hypothesis', 'General adaptation syndrome', 'Broaden-and-build theory'],
    correctIndex: 3,
    explanation: 'Positive emotions broaden awareness and encourage new actions, and over time those actions build skills, relationships and resources. That is the broaden-and-build theory.',
    partNumber: 1,
    partTitle: 'Theories of Emotion',
  },

  // Part 2: Emotional Expression
  {
    id: 'es-ent-2a',
    question: 'At funerals in one community, mourners weep and wail loudly; in another, mourners keep calm faces. In private interviews, both groups describe equally intense grief. Which conclusion is best supported?',
    options: ['The calm mourners feel less grief than the wailing ones', 'Display rules shape expression, not the felt emotion', 'Grief expressions are fixed and identical everywhere', 'Calm faces stop the mourners from feeling any sadness'],
    correctIndex: 1,
    explanation: 'Both groups feel similar grief but show it differently, so learned display rules are shaping the outward expression rather than the inner experience.',
    partNumber: 2,
    partTitle: 'Emotional Expression',
  },
  {
    id: 'es-ent-2b',
    question: 'Participants told to hold a slight frown while reading neutral news stories rate the stories as more upsetting than participants who keep relaxed faces. Which idea does this test, and what is the overall state of the evidence for it?',
    options: ['Cognitive labeling, which says a cause must be found for arousal', 'Display rules, which explain differences between cultures', 'Facial feedback, which has mixed support across many replications', 'Tend-and-befriend, which concerns seeking social support'],
    correctIndex: 2,
    explanation: 'The study tests whether facial expressions influence felt emotion, the facial-feedback hypothesis. Some studies find small effects and some large replications find none, so the evidence is mixed.',
    partNumber: 2,
    partTitle: 'Emotional Expression',
  },

  // Part 3: Stress & Health
  {
    id: 'es-ent-3a',
    question: 'Researchers make a small, harmless skin wound on the same dental students once during summer vacation and once during exam week. The wounds heal much more slowly during exam week. Which conclusion is best supported?',
    options: ['Stress is linked to suppressed immune functioning', 'Stress produces high blood pressure in every student', 'Exam stress is a form of eustress that speeds healing', 'Daily hassles have little to do with physical health'],
    correctIndex: 0,
    explanation: 'Slower healing under exam stress points to weaker immune responses, one of the physiological problems research links to stress.',
    partNumber: 3,
    partTitle: 'Stress & Health',
  },
  {
    id: 'es-ent-3b',
    question: 'Which finding best illustrates that daily hassles matter for health?',
    options: ['Hurricane survivors report lasting symptoms of trauma', 'Runners describe the stress of race training as energizing', 'People with more small weekly irritations report more headaches', 'Adults abused as children report later health problems'],
    correctIndex: 2,
    explanation: 'Daily hassles are small, everyday irritations that build up over time and predict everyday symptoms such as headaches. The other findings concern traumatic stressors, eustress and adverse childhood experiences.',
    partNumber: 3,
    partTitle: 'Stress & Health',
  },

  // Part 4: Coping Strategies
  {
    id: 'es-ent-4a',
    question: 'A flood destroys a family\'s home. For six weeks the father handles insurers, contractors and temporary housing; he is tired and keyed up but keeps functioning. Which description of these six weeks fits the general adaptation syndrome?',
    options: ['Alarm, with illness risk falling after adrenaline is released', 'Resistance, with illness risk rising if resources run out', 'Exhaustion, with illness risk at its lowest after adapting', 'Recovery, with illness risk ending once he begins to cope'],
    correctIndex: 1,
    explanation: 'He is still confronting the stressor and appears to cope, which is the resistance phase. If the stress continues and his resources are spent, he moves into exhaustion, where susceptibility to illness is greatest.',
    partNumber: 4,
    partTitle: 'Coping Strategies',
  },
  {
    id: 'es-ent-4b',
    question: 'When a tornado warning sounds, a woman gathers her own children and two neighbor children into her basement, comforts them and phones her sisters to make sure they are safe. Which stress response does she show?',
    options: ['Tend-and-befriend', 'Freeze response', 'Learned helplessness', 'Exhaustion phase'],
    correctIndex: 0,
    explanation: 'Caring for others and reaching out for connection under stress is tend-and-befriend, a reaction seen mostly in women, rather than fighting, fleeing or freezing.',
    partNumber: 4,
    partTitle: 'Coping Strategies',
  },

  // Part 5: Positive Psychology
  {
    id: 'es-ent-5a',
    question: 'In which situation is emotion-focused coping most likely to be the more adaptive choice?',
    options: ['Falling behind in a class that offers free tutoring', 'Waiting for medical test results that cannot be changed', 'Getting a parking ticket that can still be contested', 'Overspending on a budget that can still be cut back'],
    correctIndex: 1,
    explanation: 'Emotion-focused coping fits best when the situation cannot be controlled. Each of the other situations can be changed, so problem-focused coping would work better there.',
    partNumber: 5,
    partTitle: 'Positive Psychology',
  },
  {
    id: 'es-ent-5b',
    question: 'Two years after surviving a house fire, a woman says she values her relationships more deeply, has reordered her priorities and now volunteers to help disaster victims. Which concept from positive psychology does she illustrate?',
    options: ['Learned helplessness', 'Posttraumatic growth', 'External locus of control', 'Pessimistic explanatory style'],
    correctIndex: 1,
    explanation: 'Positive change that follows trauma, such as deeper relationships and a new sense of purpose, is posttraumatic growth.',
    partNumber: 5,
    partTitle: 'Positive Psychology',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'es-ent-6a',
    question: 'In a practice study, 90 employees are randomly assigned to a daily 10-minute breathing exercise or a daily 10-minute reading break for four weeks. Stress is measured as each employee\'s blood pressure at rest at the end. What is the operational definition of the dependent variable?',
    options: ['The daily 10-minute breathing exercise', 'Blood pressure taken before the study began', 'Random assignment to one of two groups', 'Resting blood pressure once training ended'],
    correctIndex: 3,
    explanation: 'The dependent variable, stress, was measured as resting blood pressure at the end of the study. The breathing exercise is the independent variable, and random assignment is part of the design.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'es-ent-6b',
    question: 'A hiker hears a rustle in the bushes, judges in an instant that it could be a snake, and only then feels afraid as her heart begins to race. Which sequence does this describe?',
    options: ['Arousal and feeling at the same instant, neither causing the other', 'A racing heart that is itself experienced as the fear', 'Arousal that gets a label from a search for its cause', 'A quick appraisal first, then the feeling and arousal'],
    correctIndex: 3,
    explanation: 'Her judgment of danger came before both the fear and the racing heart. That is a succession that puts a quick cognitive appraisal first.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'es-ent-7a',
    question: 'Before each final exam, a student\'s heart pounds and her breathing quickens. She tells herself the tests are a chance to show what she has learned, and she feels energized and focused. Which pair of concepts fits best?',
    options: ['Sympathetic activation and eustress', 'Parasympathetic calming and distress', 'Tend-and-befriend and daily hassles', 'Learned helplessness and exhaustion'],
    correctIndex: 0,
    explanation: 'A pounding heart and quick breathing reflect sympathetic activation. Because she views the exams as a challenge that energizes her, the stress is eustress rather than distress.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'es-ent-7b',
    question: 'A survey of 500 adults finds that people who report more daily hassles have higher blood pressure (r = +0.30). A headline announces, "Hassles cause hypertension." Which critique is strongest?',
    options: ['A third variable like poor sleep might raise both', 'The correlation is negative, so hassles lower pressure', 'Surveys can never measure stress in any useful way', 'An r of +0.30 means hassles explain all blood pressure'],
    correctIndex: 0,
    explanation: 'A correlational survey cannot establish causation, because another factor such as poor sleep or poverty could raise both hassles and blood pressure. The correlation is positive and moderate, not perfect.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Theories of Emotion' },
    { partNumber: 2, partTitle: 'Emotional Expression' },
    { partNumber: 3, partTitle: 'Stress & Health' },
    { partNumber: 4, partTitle: 'Coping Strategies' },
    { partNumber: 5, partTitle: 'Positive Psychology' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
