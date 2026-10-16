/**
 * Entrance Quiz — Treatment and Therapy (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Treatment Landscape: Trends, Formats, and Ethics
  {
    id: 'tt-ent-1a',
    question: 'A therapist bills a client\'s insurance company for four weekly sessions in a month when the client attended only two. Which APA ethical principle does this most directly violate?',
    options: ['Integrity', 'Respect for rights and dignity', 'Fidelity', 'Nonmaleficence'],
    correctIndex: 0,
    explanation: 'Integrity requires honesty and accuracy, including accurate billing. Charging for sessions that never happened is a dishonest statement of the services provided.',
    partNumber: 1,
    partTitle: 'The Treatment Landscape: Trends, Formats, and Ethics',
  },
  {
    id: 'tt-ent-1b',
    question: 'A school clinic with a small budget is planning treatment for six teens with social anxiety who all want to practice talking with peers. Which advantage and limitation of group therapy apply most directly?',
    options: ['Stronger privacy for each teen, but at a higher cost per client', 'More individual attention, but fewer chances to practice skills', 'Peer practice at lower cost, but weaker privacy', 'A plan tailored to each teen, but no feedback from other teens'],
    correctIndex: 2,
    explanation: 'Group therapy costs less per person and lets members practice social skills with real peers. Its limits include less individual attention and the fact that the therapist cannot guarantee other members will keep what is said private.',
    partNumber: 1,
    partTitle: 'The Treatment Landscape: Trends, Formats, and Ethics',
  },

  // Part 2: Insight Therapies: Psychodynamic and Humanistic
  {
    id: 'tt-ent-2a',
    question: 'A client tells his person-centered therapist that he cheated on an exam last week and feels ashamed. Which response best shows unconditional positive regard?',
    options: ['"I can hear how bad you feel, and I\'m glad you told me."', '"Cheating is never acceptable, so you must confess to your teacher today."', '"That\'s fine; everyone cheats, so it doesn\'t really matter at all."', '"Tell me whatever comes to mind when you picture that exam room."'],
    correctIndex: 0,
    explanation: 'Unconditional positive regard accepts and values the person without judging, while still reflecting his feelings. It does not mean approving of the cheating, and steering or free association belong to other approaches.',
    partNumber: 2,
    partTitle: 'Insight Therapies: Psychodynamic and Humanistic',
  },
  {
    id: 'tt-ent-2b',
    question: 'A stage hypnotist claims to "regress" an adult volunteer to age 5. The volunteer speaks in a childlike voice and describes her kindergarten classroom in detail. What does research suggest about this performance?',
    options: ['She is reliving her memories exactly as they were stored', 'She is acting out beliefs about childhood, not reliving it', 'Her childhood memories became more accurate in hypnosis', 'Hypnosis has no proven use for any problem at all'],
    correctIndex: 1,
    explanation: 'Research does not support hypnotic age regression: people act out their beliefs about how a child behaves, often mixing in adult knowledge. Hypnosis does have support for reducing pain and anxiety.',
    partNumber: 2,
    partTitle: 'Insight Therapies: Psychodynamic and Humanistic',
  },

  // Part 3: Behavior Therapies: Applied Behavior Analysis
  {
    id: 'tt-ent-3a',
    question: 'A client with tension headaches watches a screen showing a line that tracks the tension in her forehead muscles. She tries different breathing strategies and keeps the ones that make the line drop. What is happening in this treatment?',
    options: ['Reinforcing feedback that lowers sympathetic arousal', 'Aversive pairing that lowers parasympathetic activity', 'Token rewards that raise sympathetic arousal', 'Classical pairing that raises sympathetic arousal'],
    correctIndex: 0,
    explanation: 'This is biofeedback: each drop in the line immediately reinforces the strategy she just used, an operant principle. The goal is to reduce sympathetic arousal and shift toward parasympathetic calm.',
    partNumber: 3,
    partTitle: 'Behavior Therapies: Applied Behavior Analysis',
  },
  {
    id: 'tt-ent-3b',
    question: 'A therapist teaches a client slow breathing. Together they rank height-related situations from looking at a photo taken from a balcony up to standing at a rooftop railing, and the client works up the list one step at a time while staying relaxed. Which treatment is this?',
    options: ['Flooding', 'Aversion therapy', 'Systematic desensitization', 'Token economy'],
    correctIndex: 2,
    explanation: 'Relaxation training, an anxiety hierarchy and gradual exposure while relaxed define systematic desensitization, which replaces fear with relaxation. Flooding would expose the client to the most feared situation all at once.',
    partNumber: 3,
    partTitle: 'Behavior Therapies: Applied Behavior Analysis',
  },

  // Part 4: Cognitive and Cognitive-Behavioral Therapies
  {
    id: 'tt-ent-4a',
    question: 'A therapist bluntly challenges a client\'s belief that "I must be liked by everyone, or I am worthless," calling the demand irrational and assigning homework that tests it in real life. Which therapy is this?',
    options: ['Person-centered therapy', 'Rational-emotive behavior therapy', 'Dialectical behavior therapy', 'Systematic desensitization'],
    correctIndex: 1,
    explanation: 'Directly disputing absolute "must" beliefs, often in a confrontational style, is the hallmark of rational-emotive behavior therapy (REBT).',
    partNumber: 4,
    partTitle: 'Cognitive and Cognitive-Behavioral Therapies',
  },
  {
    id: 'tt-ent-4b',
    question: 'Which client statement best illustrates Beck\'s cognitive triad?',
    options: ['"My heart races, my hands shake, and I can\'t stop sweating."', '"I wash my hands, check the locks, and count every stair."', '"I\'m a failure, people are cold, and it won\'t get better."', '"I hear voices, I feel watched, and I can\'t sleep at night."'],
    correctIndex: 2,
    explanation: 'Beck\'s cognitive triad is a pattern of negative thoughts about oneself, the world and the future. The other statements describe physical arousal, compulsions and psychotic symptoms.',
    partNumber: 4,
    partTitle: 'Cognitive and Cognitive-Behavioral Therapies',
  },

  // Part 5: Biomedical Treatments
  {
    id: 'tt-ent-5a',
    question: 'A woman taking a benzodiazepine for panic attacks asks whether she can drink wine with dinner. Why would her doctor warn against it?',
    options: ['Alcohol blocks the drug from reaching its receptors', 'The drug is a stimulant that alcohol speeds up further', 'Mixing them causes tardive dyskinesia within days', 'Each slows neural activity, so effects add up'],
    correctIndex: 3,
    explanation: 'Benzodiazepines enhance GABA\'s calming effect, and alcohol is also a depressant, so together they can slow neural activity dangerously. Tardive dyskinesia is linked to long-term use of dopamine-blocking antipsychotics.',
    partNumber: 5,
    partTitle: 'Biomedical Treatments',
  },
  {
    id: 'tt-ent-5b',
    question: 'A woman\'s depression has not improved with two medications. She now sits awake in a chair, with no anesthesia, while a coil held against her scalp sends repeated pulses that activate neurons in one brain region. Which treatment is she receiving?',
    options: ['Electroconvulsive therapy', 'Transcranial magnetic stimulation', 'Psychosurgery that lesions tissue', 'Lithium given to stabilize mood'],
    correctIndex: 1,
    explanation: 'Magnetic pulses from a scalp coil, with the person awake and no seizure intended, describe TMS. ECT uses an electric current to trigger a controlled seizure under general anesthesia.',
    partNumber: 5,
    partTitle: 'Biomedical Treatments',
  },

  // Part 6: Does Therapy Work? Evidence and AP Exam Practice
  {
    id: 'tt-ent-6a',
    question: 'In a practice drug trial, adults with depression are randomly given an antidepressant or an identical-looking sugar pill, and neither the patients nor the clinicians rating their symptoms know who got which. What is the main purpose of this design?',
    options: ['To rule out improvement from expectations alone', 'To make sure every patient gets an active drug', 'To measure regression toward the mean directly', 'To let patients choose the treatment they prefer most'],
    correctIndex: 0,
    explanation: 'The placebo group shows how much people improve simply from expecting help, and the double-blind procedure keeps patients\' and raters\' expectations from biasing the results, so the drug\'s effect can be judged beyond them.',
    partNumber: 6,
    partTitle: 'Does Therapy Work? Evidence and AP Exam Practice',
  },
  {
    id: 'tt-ent-6b',
    question: 'In a survey of 300 therapy clients, those who rated their working relationship with their therapist as stronger after the third session showed larger drops in symptoms by the end (r = +0.35). Which concept and caution fit this finding best?',
    options: ['Cultural humility; the link proves that warmth heals', 'Therapeutic alliance; the link does not prove causation', 'Meta-analysis; the link shows therapy is ineffective', 'Spontaneous remission; the link rules out placebo effects'],
    correctIndex: 1,
    explanation: 'A trusting, collaborative client-therapist relationship is the therapeutic alliance, which is linked to better outcomes. Because this is a correlational survey, it shows an association rather than proof of cause.',
    partNumber: 6,
    partTitle: 'Does Therapy Work? Evidence and AP Exam Practice',
  },

  // Part 7: Synthesis: Matching Perspectives, Techniques, and Disorders
  {
    id: 'tt-ent-7a',
    question: 'Which therapist is using an insight therapy?',
    options: ['One who builds a fear hierarchy with a client', 'One who disputes a client\'s irrational beliefs', 'One who prescribes lithium for mood episodes', 'One who interprets a client\'s dreams and slips'],
    correctIndex: 3,
    explanation: 'Insight therapies, such as psychodynamic therapy, aim at self-understanding; interpreting dreams is a psychodynamic technique. Fear hierarchies, disputing beliefs and medication change behavior, thoughts or biology directly.',
    partNumber: 7,
    partTitle: 'Synthesis: Matching Perspectives, Techniques, and Disorders',
  },
  {
    id: 'tt-ent-7b',
    question: 'Which pairing of an assumed cause of a problem with a treatment technique is consistent with a single perspective?',
    options: ['Unconscious conflict: token economy', 'Blocked growth: cognitive restructuring', 'Distorted thinking: free association', 'Learned avoidance: exposure therapy'],
    correctIndex: 3,
    explanation: 'The behavioral perspective assumes problems are learned, so it treats avoidance with exposure. Each other pairing mixes a cause from one perspective with a technique from another.',
    partNumber: 7,
    partTitle: 'Synthesis: Matching Perspectives, Techniques, and Disorders',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Treatment Landscape: Trends, Formats, and Ethics' },
    { partNumber: 2, partTitle: 'Insight Therapies: Psychodynamic and Humanistic' },
    { partNumber: 3, partTitle: 'Behavior Therapies: Applied Behavior Analysis' },
    { partNumber: 4, partTitle: 'Cognitive and Cognitive-Behavioral Therapies' },
    { partNumber: 5, partTitle: 'Biomedical Treatments' },
    { partNumber: 6, partTitle: 'Does Therapy Work? Evidence and AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis: Matching Perspectives, Techniques, and Disorders' },
  ]
}
