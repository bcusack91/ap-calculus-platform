/**
 * Entrance Quiz — MCAT CARS Reasoning (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Reasoning About the Text
  {
    id: 'mcr-ent-1a',
    question: 'A CARS passage argues that "the rise of digital media has democratized information, but it has also diluted expert authority." Which of the following best captures the author\'s central tension?',
    options: [
      'Technology is inherently harmful to intellectual progress.',
      'Broader access to information comes at the cost of reducing the influence of credentialed expertise.',
      'Digital media is superior to print media in all respects.',
      'Experts are no longer necessary in a connected world.'
    ],
    correctIndex: 1,
    explanation: 'The author presents a tension between democratization (a benefit) and dilution of expert authority (a drawback). Option B captures both sides without overstating either, matching the nuanced phrasing "but it has also."',
    partNumber: 1,
    partTitle: 'Reasoning About the Text'
  },
  {
    id: 'mcr-ent-1b',
    question: 'In a CARS passage, the author states: "While critics dismiss reality television as escapism, its narratives frequently mirror authentic social anxieties." The word "while" most likely signals:',
    options: [
      'Chronological sequence of events.',
      'A concession followed by a counterargument.',
      'Agreement between the author and the critics.',
      'An analogy between two unlike phenomena.'
    ],
    correctIndex: 1,
    explanation: '"While" here introduces a concession to critics (dismissal as escapism) before pivoting to the author\'s own view (it mirrors social anxieties). Recognizing contrast signals is fundamental to Reasoning About the Text.',
    partNumber: 1,
    partTitle: 'Reasoning About the Text'
  },

  // Part 2: Reasoning Beyond the Text
  {
    id: 'mcr-ent-2a',
    question: 'A passage argues that punitive incarceration increases recidivism compared to rehabilitative approaches. Which new finding, if true, would most WEAKEN this argument?',
    options: [
      'Countries with rehabilitative prison systems have higher GDP per capita.',
      'A 20-year longitudinal study found no statistically significant difference in recidivism rates between punitive and rehabilitative systems after controlling for socioeconomic factors.',
      'Rehabilitative programs cost more per inmate than punitive ones.',
      'Prison guards prefer working in rehabilitative facilities.'
    ],
    correctIndex: 1,
    explanation: 'The argument claims punitive systems increase recidivism relative to rehabilitative ones. A rigorous study showing no significant difference after controlling for confounds directly undermines the causal claim.',
    partNumber: 2,
    partTitle: 'Reasoning Beyond the Text'
  },
  {
    id: 'mcr-ent-2b',
    question: 'An author concludes that standardized testing is an inadequate measure of student potential because it favors students from high-income families. Which scenario, if true, would most STRENGTHEN this conclusion?',
    options: [
      'High-income students score higher on standardized tests and also have access to more test-preparation resources than low-income peers.',
      'Some low-income students score in the top percentile on standardized tests.',
      'Many universities have made standardized testing optional.',
      'Standardized test scores correlate with first-year college GPA.'
    ],
    correctIndex: 0,
    explanation: 'The conclusion hinges on a socioeconomic bias. Showing that high-income students have greater access to test prep—a confounding advantage—directly supports the claim that the test advantages them, strengthening the argument.',
    partNumber: 2,
    partTitle: 'Reasoning Beyond the Text'
  },

  // Part 3: Logical Inference
  {
    id: 'mcr-ent-3a',
    question: 'A CARS author writes: "Every society that has suppressed free expression has, eventually, faced significant internal upheaval." Based solely on this statement, which inference is best supported?',
    options: [
      'Free expression is the only factor that prevents internal upheaval.',
      'Societies that suppressed free expression experienced some form of destabilization at some point.',
      'Societies that allow free expression never face upheaval.',
      'The suppression of free expression is always intentional.'
    ],
    correctIndex: 1,
    explanation: 'The statement says suppression eventually leads to upheaval—this directly supports option B. Options A and C make absolute claims not implied by the passage, and option D adds unsupported information about intent.',
    partNumber: 3,
    partTitle: 'Logical Inference'
  },
  {
    id: 'mcr-ent-3b',
    question: 'The author of a passage states: "Rapid technological change does not inherently produce social progress; progress requires deliberate, equitable policy." What can be logically inferred?',
    options: [
      'Technology always hinders social progress.',
      'Social progress is impossible without technology.',
      'Technology alone is insufficient to guarantee social progress.',
      'Equitable policy is easier to achieve than technological innovation.'
    ],
    correctIndex: 2,
    explanation: 'The author says technology does not "inherently" produce progress—it is necessary but not sufficient. Option C correctly reflects this; the others either invert the claim or introduce unsupported comparisons.',
    partNumber: 3,
    partTitle: 'Logical Inference'
  },

  // Part 4: Authorial Intent
  {
    id: 'mcr-ent-4a',
    question: 'An author uses the phrase "so-called experts" when referring to economists who predict market crashes. This language choice most likely suggests the author:',
    options: [
      'Deeply respects economists\' predictive capabilities.',
      'Is skeptical of or dismissive toward those economists\' credibility.',
      'Believes economists are the most reliable predictors of crashes.',
      'Is objectively presenting both sides of the debate.'
    ],
    correctIndex: 1,
    explanation: '"So-called" is a distancing device that signals skepticism or sarcasm toward the label being applied. The author implies these individuals do not deserve the title of expert.',
    partNumber: 4,
    partTitle: 'Authorial Intent'
  },
  {
    id: 'mcr-ent-4b',
    question: 'A CARS author describes a historical event using overwhelmingly positive language for one side and passive, detached language for the other. The author\'s primary intent is most likely to:',
    options: [
      'Present a balanced, objective historical account.',
      'Persuade the reader to favor the side described in positive terms.',
      'Entertain the reader with dramatic narrative.',
      'Summarize competing historical interpretations without taking a stance.'
    ],
    correctIndex: 1,
    explanation: 'Asymmetric language—positive for one side, passive/detached for the other—is a rhetorical technique designed to shape the reader\'s sympathies. This signals a persuasive, not neutral, authorial intent.',
    partNumber: 4,
    partTitle: 'Authorial Intent'
  },

  // Part 5: Counterarguments
  {
    id: 'mcr-ent-5a',
    question: 'An author argues that universal basic income (UBI) will reduce poverty. A critic responds: "UBI payments will cause inflation, erasing any purchasing-power gains for recipients." The author would most likely counter that:',
    options: [
      'Inflation is impossible when a government issues its own currency.',
      'The poverty-reducing effects of UBI are contingent on offsetting inflation, which can be managed through targeted fiscal policy.',
      'Recipients of UBI do not participate in consumer markets.',
      'Poverty statistics are inherently unreliable measures of wellbeing.'
    ],
    correctIndex: 1,
    explanation: 'A strong counterargument acknowledges the critic\'s concern (inflation is a real risk) while defending the original claim (it can be managed). Option B is the only answer that directly engages and rebuts the inflation critique.',
    partNumber: 5,
    partTitle: 'Counterarguments'
  },
  {
    id: 'mcr-ent-5b',
    question: 'Which of the following represents the strongest counterargument to the claim: "Social media has made political discourse more polarized"?',
    options: [
      'Social media companies are headquartered in politically diverse cities.',
      'Some studies find that social media exposure increases cross-partisan contact and can moderate extreme views.',
      'Younger voters are more active on social media than older voters.',
      'Political polarization was first measured before social media existed.'
    ],
    correctIndex: 1,
    explanation: 'A strong counterargument directly challenges the causal mechanism. Option B presents empirical evidence that social media may moderate views—directly opposing the polarization claim—making it the most effective counterargument.',
    partNumber: 5,
    partTitle: 'Counterarguments'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mcr-ent-6a',
    question: 'A passage presents four separate studies on mindfulness meditation. Studies 1 and 2 show significant stress reduction; studies 3 and 4 show no significant effect. The author concludes: "Mindfulness meditation robustly reduces stress." This conclusion is best described as:',
    options: [
      'Fully supported because two studies confirmed the effect.',
      'Overstated because the evidence is mixed and the conclusion ignores contradictory findings.',
      'Supported because the sample sizes of studies 1 and 2 were larger.',
      'Correct because mindfulness is widely practiced.'
    ],
    correctIndex: 1,
    explanation: 'When exactly half the evidence contradicts the conclusion, using the word "robustly" is an overstatement. A well-reasoned conclusion would acknowledge the mixed evidence, making option B the correct critique.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mcr-ent-6b',
    question: 'In a CARS passage, the author\'s argument depends on the assumption that "readers of literary fiction develop greater empathy than readers of genre fiction." Which question would most directly test this assumption?',
    options: [
      'Are literary fiction books longer than genre fiction books?',
      'Do readers of literary fiction actually demonstrate higher empathy scores on validated measures compared to genre fiction readers, controlling for baseline empathy?',
      'Is literary fiction more frequently taught in universities than genre fiction?',
      'Do genre fiction readers spend more time reading per week?'
    ],
    correctIndex: 1,
    explanation: 'Testing an assumption requires checking whether the assumed fact is actually true. Option B directly tests the comparative empathy claim using valid measures with appropriate controls—making it the most targeted test.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mcr-ent-7a',
    question: 'Which CARS strategy is most useful when a question asks "The author would most likely agree with which of the following"?',
    options: [
      'Focus only on the first and last paragraphs of the passage.',
      'Identify the author\'s central thesis and tone, then select the answer most consistent with those throughout.',
      'Choose the answer that introduces the most new information.',
      'Select the most extreme answer to match the author\'s strong opinion.'
    ],
    correctIndex: 1,
    explanation: '"Would most likely agree" questions require predicting the author\'s view from established evidence. The best strategy is to anchor the answer to the central thesis and tone—extreme options and new information are typically wrong.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mcr-ent-7b',
    question: 'When two CARS answer choices both seem correct, what is the most effective elimination strategy?',
    options: [
      'Choose the answer that sounds most academic or sophisticated.',
      'Choose the longer answer, as it likely contains more nuance.',
      'Return to the passage to determine which answer is directly supported by textual evidence versus which requires external assumptions.',
      'Eliminate both and choose one of the remaining options.'
    ],
    correctIndex: 2,
    explanation: 'CARS rewards answers grounded in the passage. When two choices seem correct, the deciding factor is always textual support. The answer requiring outside knowledge or assumptions beyond the passage is wrong.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reasoning About the Text' },
    { partNumber: 2, partTitle: 'Reasoning Beyond the Text' },
    { partNumber: 3, partTitle: 'Logical Inference' },
    { partNumber: 4, partTitle: 'Authorial Intent' },
    { partNumber: 5, partTitle: 'Counterarguments' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
