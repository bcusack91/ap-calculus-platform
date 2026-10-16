/**
 * Entrance Quiz — Mood and Psychotic Disorders (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Depressive Disorders
  {
    id: 'mpd-ent-1a',
    question: 'A 15-year-old has been irritable and down on more days than not for 14 months, with poor appetite, low energy and trouble concentrating. Her symptoms have never been severe enough for a major depressive episode, and she has never had a period of unusually elevated mood. Which diagnosis fits best?',
    options: ['Persistent depressive disorder', 'Major depressive disorder', 'Bipolar II disorder', 'Generalized anxiety disorder'],
    correctIndex: 0,
    explanation: 'Chronic low or irritable mood on more days than not for at least one year in a child or adolescent, with a few accompanying symptoms and no mania or hypomania, fits persistent depressive disorder. In adults the minimum is two years.',
    partNumber: 1,
    partTitle: 'Depressive Disorders',
  },
  {
    id: 'mpd-ent-1b',
    question: 'After failing one quiz, a student thinks, "I\'m stupid, I\'ll always fail, and this ruins everything." Which possible cause of depression, and which kind of source, does this thinking illustrate?',
    options: ['Learned helplessness, a genetic source', 'Reduced social support, a cultural source', 'Explanatory style, a cognitive source', 'Altered serotonin activity, a behavioral source'],
    correctIndex: 2,
    explanation: 'Explaining a setback as internal ("I\'m stupid"), stable ("always") and global ("ruins everything") is a pessimistic explanatory style, a cognitive source of risk for depression.',
    partNumber: 1,
    partTitle: 'Depressive Disorders',
  },

  // Part 2: Bipolar I and Bipolar II Disorders
  {
    id: 'mpd-ent-2a',
    question: 'A student says her roommate "is so bipolar" because the roommate\'s mood shifts from cheerful to annoyed several times a day. Which response is most accurate?',
    options: ['Shifts within a single day define mania', 'Bipolar II means frequent daily mood swings', 'Any irritable mood counts as a bipolar episode', 'Bipolar episodes last for days, not mere hours'],
    correctIndex: 3,
    explanation: 'Bipolar disorders involve mood episodes that last days or longer: at least four days for hypomania and a week for mania. Ordinary ups and downs within one day are not manic or hypomanic episodes.',
    partNumber: 2,
    partTitle: 'Bipolar I and Bipolar II Disorders',
  },
  {
    id: 'mpd-ent-2b',
    question: 'A person has an episode of elevated mood, rapid speech and little need for sleep. Which added detail would make the episode manic rather than hypomanic?',
    options: ['Lasting four days and noticed by friends', 'Feeling energized after very little sleep', 'Requiring a hospital stay to prevent harm', 'Talking faster than usual for several days'],
    correctIndex: 2,
    explanation: 'Hospitalization, marked impairment or psychotic features make an episode manic. Hypomania involves the same kinds of symptoms for at least four days, noticeable to others but without marked impairment or hospitalization.',
    partNumber: 2,
    partTitle: 'Bipolar I and Bipolar II Disorders',
  },

  // Part 3: Schizophrenia Spectrum Disorders
  {
    id: 'mpd-ent-3a',
    question: 'Which observation describes a negative symptom of schizophrenia?',
    options: ['Sitting idle for hours without starting any task', 'Hearing a voice that comments on everything one does', 'Believing a neighbor is broadcasting one\'s thoughts', 'Pacing and gesturing wildly without any purpose'],
    correctIndex: 0,
    explanation: 'Negative symptoms are the absence of typical behavior, such as reduced motivation to start activities. Hallucinations, delusions and catatonic excitement add something that should not be there, so they are positive symptoms.',
    partNumber: 3,
    partTitle: 'Schizophrenia Spectrum Disorders',
  },
  {
    id: 'mpd-ent-3b',
    question: 'Which finding provides the most direct support for the dopamine hypothesis of schizophrenia?',
    options: ['Identical twins are often not both affected', 'Drugs that block its receptors reduce hallucinations', 'Rates rise slightly after flu seasons during pregnancy', 'Negative symptoms respond poorly to most medications'],
    correctIndex: 1,
    explanation: 'If lowering dopamine activity reduces positive symptoms such as hallucinations, excess dopamine activity may contribute to them. The twin and flu findings bear on genetic and prenatal causes, and the weak effect on negative symptoms is a limit of the hypothesis.',
    partNumber: 3,
    partTitle: 'Schizophrenia Spectrum Disorders',
  },

  // Part 4: Anxiety, Obsessive-Compulsive, and Trauma-Related Disorders
  {
    id: 'mpd-ent-4a',
    question: 'A Japanese college student avoids crowded trains and classrooms because she fears that her appearance and body odor are offensive to the people around her. Which culture-bound condition does this describe, and which disorder is it linked to?',
    options: ['Ataque de nervios, linked to panic disorder', 'Taijin kyofusho, linked to social anxiety', 'Agoraphobia, a fear of being trapped in crowds', 'Specific phobia, an intense fear of trains'],
    correctIndex: 1,
    explanation: 'Taijin kyofusho, experienced mainly by Japanese people, is a fear that one\'s body or appearance offends others, and it is linked to social anxiety disorder. Ataque de nervios is linked to panic disorder.',
    partNumber: 4,
    partTitle: 'Anxiety, Obsessive-Compulsive, and Trauma-Related Disorders',
  },
  {
    id: 'mpd-ent-4b',
    question: 'A man fears he has left the stove on and checks it 25 times before leaving home, which makes him late for work every day. Each check calms him for a few minutes. Which explanation best accounts for why the checking keeps happening?',
    options: ['Being late punishes the checking, which strengthens it', 'The checking is a fixed instinct triggered by stoves', 'Relief after each check negatively reinforces it', 'The checking reflects a lifelong perfectionist style'],
    correctIndex: 2,
    explanation: 'Each check removes the anxiety the intrusive thought creates, so the compulsion is negatively reinforced and becomes more likely. A lifelong perfectionist style without anxiety-driven rituals would describe obsessive-compulsive personality disorder instead.',
    partNumber: 4,
    partTitle: 'Anxiety, Obsessive-Compulsive, and Trauma-Related Disorders',
  },

  // Part 5: Dissociative, Eating, Personality, and Neurodevelopmental Disorders
  {
    id: 'mpd-ent-5a',
    question: 'Since her teens, a woman has had intense, unstable relationships, swinging between idealizing and devaluing her partners. She acts impulsively, her sense of herself shifts often and she is terrified of being abandoned. Which diagnosis and cluster fit best?',
    options: ['Avoidant personality disorder, Cluster C', 'Bipolar II disorder, a mood disorder', 'Schizotypal personality disorder, Cluster A', 'Borderline personality disorder, in Cluster B'],
    correctIndex: 3,
    explanation: 'A lasting pattern of unstable relationships, self-image and emotions, with impulsivity and fear of abandonment, is borderline personality disorder, one of the dramatic, emotional or erratic Cluster B disorders.',
    partNumber: 5,
    partTitle: 'Dissociative, Eating, Personality, and Neurodevelopmental Disorders',
  },
  {
    id: 'mpd-ent-5b',
    question: 'After a violent robbery at her store, a cashier cannot remember the robbery or the hours before and after it. She has no head injury and does not relive the event in flashbacks. Which diagnosis fits best?',
    options: ['Dissociative amnesia', 'Posttraumatic stress disorder', 'Dissociative identity disorder', 'Schizophrenia'],
    correctIndex: 0,
    explanation: 'Losing memory for a traumatic event, beyond ordinary forgetting and without a brain injury, is dissociative amnesia. In PTSD the trauma is relived through flashbacks rather than forgotten.',
    partNumber: 5,
    partTitle: 'Dissociative, Eating, Personality, and Neurodevelopmental Disorders',
  },

  // Part 6: Research on Disorders and AP Exam Practice
  {
    id: 'mpd-ent-6a',
    question: 'A practice twin study reports that when one identical twin has a disorder, the other has it in 40% of pairs; for fraternal twins the figure is 10%. Which conclusion fits these data best?',
    options: ['Genes contribute, and the environment matters too', 'Genes alone determine who develops the disorder', 'Shared home life is the only meaningful influence', 'The disorder shows no tendency to run in families'],
    correctIndex: 0,
    explanation: 'Higher concordance in identical twins, who share more genes, points to a genetic contribution. Because 60% of identical pairs are not concordant, the environment must matter too.',
    partNumber: 6,
    partTitle: 'Research on Disorders and AP Exam Practice',
  },
  {
    id: 'mpd-ent-6b',
    question: 'Researchers want to know whether heavy cannabis use in adolescence raises the later risk of psychotic symptoms. Which design is ethical, and what can it show?',
    options: ['An experiment assigning teens to use it, showing cause', 'A case study of one patient, showing population rates', 'A longitudinal study, tracking if use came before psychosis', 'A twin study, proving that cannabis causes psychosis'],
    correctIndex: 2,
    explanation: 'Assigning teens to use a drug would be unethical, so researchers follow people over time and measure use and symptoms. A longitudinal design can show whether use comes before symptoms, but it remains correlational and cannot prove cause.',
    partNumber: 6,
    partTitle: 'Research on Disorders and AP Exam Practice',
  },

  // Part 7: Synthesis: Telling Disorders Apart
  {
    id: 'mpd-ent-7a',
    question: 'A client has been diagnosed with bipolar II disorder. Which newly discovered detail from her history would change the diagnosis to bipolar I?',
    options: ['A second major depressive episode lasting a month', 'A past 10-day elevated period needing hospitalization', 'A four-day stretch of elevated mood with no impairment', 'A history of depression in two of her close relatives'],
    correctIndex: 1,
    explanation: 'One lifetime manic episode, such as an elevated period lasting at least a week that required hospitalization, is enough for bipolar I. More depression, another hypomanic episode or family history would not change the category.',
    partNumber: 7,
    partTitle: 'Synthesis: Telling Disorders Apart',
  },
  {
    id: 'mpd-ent-7b',
    question: 'Which pairing of a case detail with a type of possible cause is accurate?',
    options: ['Pressure toward a thin ideal: biological', 'Self-talk that failure is permanent: social', 'Avoidance that relieves anxiety: cognitive', 'A twin who has the same disorder: genetic'],
    correctIndex: 3,
    explanation: 'A twin with the same disorder points to a genetic predisposition. A thin ideal is cultural, relief-driven avoidance is behavioral, and self-talk about permanent failure is cognitive.',
    partNumber: 7,
    partTitle: 'Synthesis: Telling Disorders Apart',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Depressive Disorders' },
    { partNumber: 2, partTitle: 'Bipolar I and Bipolar II Disorders' },
    { partNumber: 3, partTitle: 'Schizophrenia Spectrum Disorders' },
    { partNumber: 4, partTitle: 'Anxiety, Obsessive-Compulsive, and Trauma-Related Disorders' },
    { partNumber: 5, partTitle: 'Dissociative, Eating, Personality, and Neurodevelopmental Disorders' },
    { partNumber: 6, partTitle: 'Research on Disorders and AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis: Telling Disorders Apart' },
  ]
}
