/**
 * Entrance Quiz — MCAT Science Passage Strategy (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Passage Types Overview
  {
    id: 'msps-ent-1a',
    question: 'MCAT science sections contain three types of passages. An "information-presentation" passage is best characterized by:',
    options: [
      'A series of experiments with explicit hypotheses and data tables requiring analysis.',
      'A persuasive argument advocating a particular scientific viewpoint with supporting evidence.',
      'Descriptive text presenting established scientific knowledge—concepts, mechanisms, or phenomena—followed by questions testing comprehension and application.',
      'A clinical case study with patient data and diagnostic questions.'
    ],
    correctIndex: 2,
    explanation: 'Information-presentation passages present factual or conceptual content (e.g., explaining oxidative phosphorylation or the complement system). Questions test whether students can understand, apply, or extrapolate the information—often combining passage content with outside knowledge.',
    partNumber: 1,
    partTitle: 'Passage Types Overview'
  },
  {
    id: 'msps-ent-1b',
    question: 'In a "research study" passage, the most critical step before answering questions is to:',
    options: [
      'Memorize all numerical values in every data table.',
      'Identify the research question, experimental design, independent/dependent variables, and control conditions.',
      'Skip the passage and answer all questions from content knowledge alone.',
      'Focus exclusively on the conclusion paragraph and ignore methodology.'
    ],
    correctIndex: 1,
    explanation: 'For research study passages, strategic reading means identifying: (1) the research question/hypothesis, (2) what was manipulated (IV) and measured (DV), (3) control groups, and (4) major results. This framework lets you answer design, interpretation, and "strengthen/weaken" questions efficiently.',
    partNumber: 1,
    partTitle: 'Passage Types Overview'
  },

  // Part 2: Reading Figures & Tables
  {
    id: 'msps-ent-2a',
    question: 'When encountering a graph in an MCAT science passage, which step should you complete FIRST?',
    options: [
      'Identify the numerical values of all data points for precise recall.',
      'Read the figure legend/caption and identify what is on each axis, including units.',
      'Calculate the slope of any linear portions of the graph.',
      'Compare the graph to similar graphs from your content review materials.'
    ],
    correctIndex: 1,
    explanation: 'Always orient yourself to a graph before interpreting it: read the title/caption, identify x- and y-axes, note units, and identify what each line or bar represents. Without this orientation, data interpretation is prone to error. Specific numerical values are rarely needed—trends and relationships matter most.',
    partNumber: 2,
    partTitle: 'Reading Figures & Tables'
  },
  {
    id: 'msps-ent-2b',
    question: 'A table in an MCAT passage shows enzyme activity (nmol/min) at various pH levels (4, 6, 7, 8, 10). Activity peaks at pH 7 and drops sharply at pH 4 and 10. The best interpretation is:',
    options: [
      'The enzyme is denatured irreversibly at all pH values except 7.',
      'The enzyme has an optimal pH of approximately 7, consistent with cytoplasmic enzyme activity, and activity decreases at extreme pH values.',
      'The enzyme cannot function in any acidic environment.',
      'The data proves the enzyme is located in the lysosome (pH 4.5–5).'
    ],
    correctIndex: 1,
    explanation: 'A bell-shaped pH-activity curve indicates an optimal pH. Peak at pH 7 suggests a cytoplasmic or extracellular enzyme (e.g., not pepsin at pH 2, or lysosomal enzymes at pH 5). Decreased activity at extremes reflects protonation/deprotonation of active site residues—not necessarily irreversible denaturation at mild deviations.',
    partNumber: 2,
    partTitle: 'Reading Figures & Tables'
  },

  // Part 3: Hypothesis & Experiment Analysis
  {
    id: 'msps-ent-3a',
    question: 'A researcher hypothesizes that drug X inhibits tumor growth by blocking VEGF receptors. An appropriate negative control for an in vitro cell growth experiment would be:',
    options: [
      'Cancer cells treated with drug X at the highest dose tested.',
      'Cancer cells treated with the drug vehicle (solvent) alone, with no drug X.',
      'Cancer cells treated with a known tumor promoter.',
      'Normal (non-cancer) cells treated with drug X.'
    ],
    correctIndex: 1,
    explanation: 'A negative control establishes baseline behavior in the absence of the treatment of interest. Using the vehicle (solvent) without drug X ensures that any observed effect is due to the drug, not to the solvent or experimental manipulation. The vehicle control is standard in pharmacological experiments.',
    partNumber: 3,
    partTitle: 'Hypothesis & Experiment Analysis'
  },
  {
    id: 'msps-ent-3b',
    question: 'Which of the following experimental designs provides the strongest evidence for a causal relationship between an intervention and an outcome?',
    options: [
      'A retrospective case-control study comparing exposed and unexposed groups.',
      'A cross-sectional survey measuring both the exposure and outcome at the same point in time.',
      'A randomized controlled trial (RCT) with blinding, appropriate controls, and sufficient sample size.',
      'An observational cohort study following participants over time.'
    ],
    correctIndex: 2,
    explanation: 'The RCT is the gold standard for causal inference. Random assignment distributes confounds equally between groups; blinding reduces bias; controls allow comparison. Observational studies (cohorts, case-controls) cannot fully control confounding, limiting causal claims.',
    partNumber: 3,
    partTitle: 'Hypothesis & Experiment Analysis'
  },

  // Part 4: Data Interpretation
  {
    id: 'msps-ent-4a',
    question: 'A study reports p < 0.05 for the difference between a treatment and control group. This means:',
    options: [
      'There is less than a 5% chance the null hypothesis is true.',
      'There is less than a 5% probability of observing results this extreme (or more extreme) if the null hypothesis were true.',
      'The treatment effect is clinically meaningful in medical practice.',
      'The study has a 95% chance of being replicated with the same result.'
    ],
    correctIndex: 1,
    explanation: 'The p-value is the probability of obtaining results at least as extreme as observed, assuming the null hypothesis is true. p < 0.05 does NOT mean the null is 5% likely to be true, nor does it guarantee clinical significance or replicability. Statistical vs. clinical significance is an important MCAT distinction.',
    partNumber: 4,
    partTitle: 'Data Interpretation'
  },
  {
    id: 'msps-ent-4b',
    question: 'An experiment shows that blocking receptor A reduces cell migration by 40%, while blocking receptor B reduces it by 15%. Blocking both A and B together reduces migration by 42%. What can be concluded about the interaction of A and B?',
    options: [
      'The receptors act synergistically because dual blockade exceeds the effect of blocking B alone.',
      'Receptor A is the primary driver; receptor B may share the same pathway as A, as dual blockade adds little beyond blocking A alone.',
      'Both receptors are equally important for cell migration.',
      'Blocking both receptors is always more effective than blocking either alone.'
    ],
    correctIndex: 1,
    explanation: 'If dual blockade (42%) barely exceeds blocking A alone (40%), B likely acts through A\'s pathway (or its contribution is captured when A is blocked). True synergy would produce an effect greater than the sum (>55%). The data suggests A dominates the pathway and B has minimal independent contribution.',
    partNumber: 4,
    partTitle: 'Data Interpretation'
  },

  // Part 5: Question Prioritization
  {
    id: 'msps-ent-5a',
    question: 'In the MCAT science sections, "discrete questions" (standalone questions not attached to a passage) are best approached by:',
    options: [
      'Spending more time on them than on passage-based questions because they require deeper synthesis.',
      'Treating them as pure content knowledge questions and answering from memory without reference to any passage.',
      'Skipping them entirely and returning only if time remains.',
      'Treating them like passage questions and searching for passage context.'
    ],
    correctIndex: 1,
    explanation: 'Discrete (standalone) questions are not associated with a passage—they test content knowledge directly. No passage context exists to reference. Approach them efficiently by answering from content knowledge. They often test high-yield concepts and can be completed faster than passage-based questions.',
    partNumber: 5,
    partTitle: 'Question Prioritization'
  },
  {
    id: 'msps-ent-5b',
    question: 'When should you flag a science passage question and move on during the MCAT?',
    options: [
      'Only when you have no idea what the question is asking.',
      'When the question requires lengthy calculations or deep analysis and you can return to it after answering faster questions in the section.',
      'Whenever a question involves a topic you find difficult, to avoid wasting emotional energy.',
      'Never—once you start a question, you must answer it before moving forward.'
    ],
    correctIndex: 1,
    explanation: 'Strategic flagging preserves time. Flag questions that are time-intensive (multi-step calculations, complex data interpretation) when you have a reasonable handle on the passage—return after answering faster questions. Avoid flagging purely from topic-based anxiety; base the decision on time cost.',
    partNumber: 5,
    partTitle: 'Question Prioritization'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'msps-ent-6a',
    question: 'A passage describes an experiment where a new drug reduces inflammation in a mouse model. A question asks: "Which of the following would most weaken the conclusion that the drug reduces inflammation by inhibiting COX-2?" The best approach is to:',
    options: [
      'Choose the answer that shows the drug is ineffective, regardless of mechanism.',
      'Identify what evidence would suggest the drug works through a mechanism OTHER than COX-2 inhibition, or that COX-2 inhibition is not responsible for the anti-inflammatory effect.',
      'Select the answer that most strongly supports the drug\'s effectiveness.',
      'Choose the answer with the most technical pharmacological detail.'
    ],
    correctIndex: 1,
    explanation: 'Weakening a mechanistic conclusion requires challenging the proposed mechanism. The correct answer would provide evidence the drug works through a different pathway (alternative mechanism), or that COX-2 is not actually inhibited. Eliminating the connection between the drug and COX-2 undermines the causal claim.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'msps-ent-6b',
    question: 'A passage presents a graph showing a linear relationship between enzyme concentration and reaction rate. A question asks about what would happen at very high enzyme concentrations. Based on enzyme kinetics principles, the correct prediction is:',
    options: [
      'The reaction rate will continue to increase linearly indefinitely.',
      'The reaction rate will plateau because substrate becomes the limiting factor at high enzyme concentrations.',
      'The reaction rate will decrease because excess enzyme inhibits itself.',
      'The Km will increase proportionally with enzyme concentration.'
    ],
    correctIndex: 1,
    explanation: 'At low enzyme concentrations, rate is proportional to enzyme concentration (linear region). At very high enzyme concentrations, all substrate molecules are bound; adding more enzyme has no effect—substrate is limiting. Reaction rate plateaus. Km is a property of the enzyme-substrate affinity and does not change with enzyme concentration.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'msps-ent-7a',
    question: 'When applying the "read strategically, not word-for-word" approach to MCAT science passages, what information should you ALWAYS note during your initial read?',
    options: [
      'The exact numerical values in every table and the name of every researcher cited.',
      'The main topic, the structure of experiments (what was done and why), the major results, and the location of specific details for reference.',
      'The definition of every technical term used in the passage.',
      'The complete methodology of each experiment in sequential order.'
    ],
    correctIndex: 1,
    explanation: 'Strategic reading means building a passage map: (1) main topic/purpose, (2) experimental structure (what, why, how), (3) key results/trends, and (4) where to find specific details if a question asks. You do not need to memorize numbers or terminology—you can return to the passage for specifics.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'msps-ent-7b',
    question: 'A question asks: "Based on the passage and your knowledge of biochemistry, which of the following is MOST consistent with the data?" This question type requires:',
    options: [
      'Selecting the answer supported only by outside content knowledge, ignoring passage data.',
      'Synthesizing both passage-specific data and foundational content knowledge to identify the answer that fits all available evidence.',
      'Choosing the most complex answer to demonstrate advanced understanding.',
      'Selecting the answer that appears most frequently in similar MCAT questions.'
    ],
    correctIndex: 1,
    explanation: 'Hybrid questions require integration of passage data AND outside knowledge. Neither alone is sufficient. First, use the passage to set context; then apply relevant content knowledge (biochemical principles, mechanisms). Eliminate answers inconsistent with either source. This is a high-frequency MCAT question type.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Passage Types Overview' },
    { partNumber: 2, partTitle: 'Reading Figures & Tables' },
    { partNumber: 3, partTitle: 'Hypothesis & Experiment Analysis' },
    { partNumber: 4, partTitle: 'Data Interpretation' },
    { partNumber: 5, partTitle: 'Question Prioritization' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
