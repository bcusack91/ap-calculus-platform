/**
 * Entrance Quiz — MCAT CARS Reasoning (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Reasoning About the Text
  {
    id: 'mcr-ent-1a',
    question: 'A CARS passage argues that "the rise of digital media has democratized information, but it has also diluted expert authority." Which of the following best captures the author\'s central tension?',
    options: [
      'Technology has been harmful to intellectual progress overall.',
      'Wider access to information has come at the cost of expert authority.',
      'Digital media has surpassed print media in nearly every respect.',
      'Experts are no longer needed now that information is free.'
    ],
    correctIndex: 1,
    explanation: 'The sentence joins a benefit (democratized information) to a drawback (diluted expert authority) with "but it has also," so the central tension has to keep both halves. Each other choice drops one half and hardens what is left into a claim the author never makes: a blanket condemnation of technology, a comparison of media formats, or the dismissal of experts altogether.',
    partNumber: 1,
    partTitle: 'Reasoning About the Text'
  },
  {
    id: 'mcr-ent-1b',
    question: 'In a CARS passage, the author states: "While critics dismiss reality television as escapism, its narratives frequently mirror authentic social anxieties." The word "while" most likely signals:',
    options: [
      'A shift in the chronological sequence of events.',
      'A concession to critics, followed by the author\'s contrary view.',
      'Agreement between the author and the critics being quoted.',
      'An analogy drawn between two otherwise unlike phenomena.'
    ],
    correctIndex: 1,
    explanation: '"While" here grants the critics their point (reality television as escapism) before the author pivots to a contrary claim (the narratives mirror real anxieties). Reading contrast signals is fundamental to Reasoning About the Text: the word cannot mark agreement, and neither a time sequence nor an analogy is being set up.',
    partNumber: 1,
    partTitle: 'Reasoning About the Text'
  },

  // Part 2: Reasoning Beyond the Text
  {
    id: 'mcr-ent-2a',
    question: 'A passage argues that punitive incarceration increases recidivism compared to rehabilitative approaches. Which new finding, if true, would most WEAKEN this argument?',
    options: [
      'Countries with rehabilitative prison systems have higher GDP per capita.',
      'A 20-year study found no recidivism gap once confounds were controlled.',
      'Rehabilitative programs cost more per inmate than punitive programs do.',
      'Recidivism is measured by re-arrest, which undercounts unreported crime.'
    ],
    correctIndex: 1,
    explanation: 'The argument is causal and comparative: punitive systems produce more reoffending than rehabilitative ones. A rigorous study finding no difference once socioeconomic confounds are controlled removes the very effect the argument rests on. National wealth and per-inmate cost say nothing about reoffending, and a measurement flaw in re-arrest data distorts both systems equally, so it favors neither side.',
    partNumber: 2,
    partTitle: 'Reasoning Beyond the Text'
  },
  {
    id: 'mcr-ent-2b',
    question: 'An author concludes that standardized testing is an inadequate measure of student potential because it favors students from high-income families. Which scenario, if true, would most STRENGTHEN this conclusion?',
    options: [
      'High-income students score higher and also buy more test prep.',
      'Some low-income students still score in the top percentile nationally.',
      'Many universities have recently made submitting test scores optional.',
      'Test scores correlate with first-year GPA at most universities studied.'
    ],
    correctIndex: 0,
    explanation: 'The conclusion rests on socioeconomic bias, so the strongest support shows the score advantage tracking purchasable preparation rather than underlying potential. Top-scoring low-income students cut against the claim, test-optional admissions policies say nothing about what the exam measures, and predictive validity for first-year GPA would defend the test rather than undermine it.',
    partNumber: 2,
    partTitle: 'Reasoning Beyond the Text'
  },

  // Part 3: Logical Inference
  {
    id: 'mcr-ent-3a',
    question: 'A CARS author writes: "Every society that has suppressed free expression has, eventually, faced significant internal upheaval." Based solely on this statement, which inference is best supported?',
    options: [
      'Free expression is the only thing preventing internal upheaval.',
      'Societies that suppressed free expression later faced upheaval.',
      'Societies that permit free expression never face internal upheaval.',
      'Suppression of free expression is always a deliberate state policy.'
    ],
    correctIndex: 1,
    explanation: 'The sentence makes a one-way claim: every suppressing society eventually met upheaval. That supports the credited restatement and nothing stronger. Treating suppression as the sole cause overextends it, reading the converse (free societies stay stable) reverses it, and the sentence says nothing at all about intent.',
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
    explanation: 'The author says technology does not "inherently" produce progress and that deliberate policy is required, which makes technology insufficient on its own. The first two choices invert or overstate that relationship, and the last compares the difficulty of policy and innovation, a comparison the passage never makes.',
    partNumber: 3,
    partTitle: 'Logical Inference'
  },

  // Part 4: Authorial Intent
  {
    id: 'mcr-ent-4a',
    question: 'An author uses the phrase "so-called experts" when referring to economists who predict market crashes. This language choice most likely suggests the author:',
    options: [
      'Deeply respects those economists\' predictive track record.',
      'Doubts that those economists deserve the title.',
      'Regards economists as the most reliable forecasters of crashes.',
      'Is presenting both sides of the debate without judgment.'
    ],
    correctIndex: 1,
    explanation: '"So-called" is a distancing device: it flags the label as one the author declines to accept, signaling skepticism or mild contempt. It cannot convey respect or endorsement, and a neutral author reporting both sides would simply write "economists" without the qualifier.',
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
    explanation: 'Asymmetric language — warm for one side, flat and passive for the other — is a rhetorical choice that steers the reader\'s sympathies, which marks persuasive rather than neutral intent. Balanced reporting and a stance-free summary would use parallel language for both sides, and detached phrasing is the opposite of what a writer aiming to entertain would choose.',
    partNumber: 4,
    partTitle: 'Authorial Intent'
  },

  // Part 5: Counterarguments
  {
    id: 'mcr-ent-5a',
    question: 'An author argues that universal basic income (UBI) will reduce poverty. A critic responds: "UBI payments will cause inflation, erasing any purchasing-power gains for recipients." The author would most likely counter that:',
    options: [
      'A government issuing its own currency cannot generate inflation.',
      'The inflation risk is real but manageable with targeted fiscal policy.',
      'UBI recipients spend outside consumer markets, so prices hold steady.',
      'Poverty statistics are too unreliable to settle the dispute.'
    ],
    correctIndex: 1,
    explanation: 'A strong counter concedes what is true in the objection — new transfers can push prices up — and then shows the harm is avoidable, which is exactly what the credited answer does. Denying that a currency issuer can ever cause inflation and claiming recipients stay out of consumer markets are both false, and attacking poverty statistics abandons the author\'s own conclusion instead of defending it.',
    partNumber: 5,
    partTitle: 'Counterarguments'
  },
  {
    id: 'mcr-ent-5b',
    question: 'Which of the following represents the strongest counterargument to the claim: "Social media has made political discourse more polarized"?',
    options: [
      'Social media companies are headquartered in politically diverse cities.',
      'Social media exposure increases cross-partisan contact in some studies.',
      'Younger voters use social media much more heavily than older voters do.',
      'Political polarization was first measured long before social media.'
    ],
    correctIndex: 1,
    explanation: 'The claim is causal, so the strongest counter attacks the mechanism: evidence that exposure broadens contact across party lines points the causal arrow the other way. Where the companies sit and which age group posts most are irrelevant to the effect, and the fact that polarization was measurable earlier shows only that it predates the platforms, not that the platforms fail to intensify it.',
    partNumber: 5,
    partTitle: 'Counterarguments'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mcr-ent-6a',
    question: 'A passage presents four separate studies on mindfulness meditation. Studies 1 and 2 show significant stress reduction; studies 3 and 4 show no significant effect. The author concludes: "Mindfulness meditation robustly reduces stress." This conclusion is best described as:',
    options: [
      'Fully supported, since two independent studies confirmed the effect.',
      'Overstated, because half the studies found no effect.',
      'Supported, because studies 1 and 2 used the larger sample sizes.',
      'Correct, because mindfulness is very widely practiced worldwide.'
    ],
    correctIndex: 1,
    explanation: '"Robustly" asserts a consistent effect, yet two of the four studies found none, so the conclusion ignores half of its own evidence. Counting only the confirming studies assumes the point at issue, the passage never reports sample sizes, and how widely a practice has been adopted is not evidence that it works.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mcr-ent-6b',
    question: 'In a CARS passage, the author\'s argument depends on the assumption that "readers of literary fiction develop greater empathy than readers of genre fiction." Which question would most directly test this assumption?',
    options: [
      'Are literary fiction books typically longer than genre fiction books?',
      'Do literary fiction readers score higher on validated empathy measures?',
      'Is literary fiction taught in universities more often?',
      'Do genre fiction readers spend more hours per week reading?'
    ],
    correctIndex: 1,
    explanation: 'Testing an assumption means checking whether the assumed fact actually holds, and the assumption here is a comparative empathy claim — which only a validated empathy measure, with baseline empathy controlled, can check. Book length, university syllabi, and weekly reading time each measure something other than empathy.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mcr-ent-7a',
    question: 'Which CARS strategy is most useful when a question asks "The author would most likely agree with which of the following"?',
    options: [
      'Read only the opening and closing paragraphs of the passage.',
      'Anchor the answer to the author\'s thesis and tone.',
      'Pick the choice that adds the most new information.',
      'Pick the most extreme choice, to match a strong opinion.'
    ],
    correctIndex: 1,
    explanation: '"Would most likely agree" asks you to extend a position the passage already established, so each choice should be tested against the thesis and tone you identified while reading. Skimming only the frame paragraphs skips where the position is developed, and choices that add new information or push to an extreme go past what the author committed to.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mcr-ent-7b',
    question: 'When two CARS answer choices both seem correct, what is the most effective elimination strategy?',
    options: [
      'Choose whichever answer sounds more academic and sophisticated.',
      'Choose the longer answer, since it likely carries more nuance.',
      'Check which answer the passage itself supports directly.',
      'Eliminate both and pick from the two remaining choices.'
    ],
    correctIndex: 2,
    explanation: 'When two choices both look defensible, the tiebreaker in CARS is always textual support: one of them requires a step the passage never takes. Register and length are properties of the writing rather than evidence for it, and discarding both finalists throws away the answer you had already narrowed to.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
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
