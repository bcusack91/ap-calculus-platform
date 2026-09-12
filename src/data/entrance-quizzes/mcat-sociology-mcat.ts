/**
 * Entrance Quiz — Sociology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Social Structures
  {
    id: 'msoc-ent-1a',
    question: 'Max Weber distinguished class, status, and party as three dimensions of social stratification. Which scenario best illustrates high status but low economic class?',
    options: [
      'A hedge fund manager who also chairs the city arts board.',
      'A revered village elder who lives on a small pension.',
      'A party boss who commands votes but draws a modest salary.',
      'A day laborer with low wages and no social honor.'
    ],
    correctIndex: 1,
    explanation: 'Weber argued that class (economic position), status (social honor/prestige), and party (political power) are analytically distinct. The revered elder has great prestige but little income — high status, low class. The hedge fund manager is high on both class and status; the party boss illustrates the party dimension (organized political power) rather than status; the day laborer is low on all three.',
    partNumber: 1,
    partTitle: 'Social Structures'
  },
  {
    id: 'msoc-ent-1b',
    question: 'A social institution is best defined as:',
    options: [
      'A government building in which laws are drafted and enacted.',
      'Any informal group whose members happen to share an interest.',
      'A single organization, such as one particular hospital or school district.',
      'An enduring pattern of norms and roles that meets a basic social need.'
    ],
    correctIndex: 3,
    explanation: 'Social institutions (family, religion, education, economy, medicine) are stable, organized patterns of beliefs, norms, and roles that address fundamental societal needs and persist over time. They are distinct from any specific organization that enacts them ("the family" as an institution vs. "the Johnson family"; "medicine" as an institution vs. one hospital), and distinct from informal interest groups, which lack that durable normative structure.',
    partNumber: 1,
    partTitle: 'Social Structures'
  },

  // Part 2: Social Interaction
  {
    id: 'msoc-ent-2a',
    question: 'Erving Goffman\'s dramaturgical theory compares social interaction to theatrical performance. The concept of "impression management" refers to:',
    options: [
      'The deliberate effort to control how others perceive us.',
      'Unconscious habits carried over from early childhood conditioning.',
      'The pressure to conform to gender norms while in public spaces.',
      'The way mass media shapes public opinion about political events.'
    ],
    correctIndex: 0,
    explanation: 'Goffman argued we perform different roles "front stage" (public) and "back stage" (private). Impression management is the active, strategic control of self-presentation — selecting words, gestures, dress, and props to shape the impression an audience forms. It is conscious and situational, not a conditioned reflex, and it is a property of face-to-face interaction rather than of media or gender norms specifically.',
    partNumber: 2,
    partTitle: 'Social Interaction'
  },
  {
    id: 'msoc-ent-2b',
    question: 'Social norms are most accurately described as:',
    options: [
      'Written statutes that state authorities enforce through formal sanctions.',
      'Individual preferences that vary entirely from one person to the next.',
      'Shared expectations about appropriate behavior in a given setting.',
      'Biological drives that dictate behavior in every human culture.'
    ],
    correctIndex: 2,
    explanation: 'Norms are shared social expectations, not necessarily codified law. Mores are norms carrying strong moral weight; folkways are informal conventions. Violations are sanctioned positively (rewards) or negatively (punishment), formally (legal penalties) or informally (gossip, disapproval) — so norms are broader than statutes, more shared than personal taste, and cultural rather than biologically fixed.',
    partNumber: 2,
    partTitle: 'Social Interaction'
  },

  // Part 3: Identity & Culture
  {
    id: 'msoc-ent-3a',
    question: 'The Thomas theorem states: "If men define situations as real, they are real in their consequences." This principle best explains:',
    options: [
      'Why genetic predispositions override social learning in shaping behavior.',
      'How beliefs can create real outcomes even when they are false.',
      'Why a person\'s objective economic position determines their life chances.',
      'Why cultural practices are ultimately determined by human biology.'
    ],
    correctIndex: 1,
    explanation: 'The Thomas theorem highlights the social construction of reality: a definition of the situation drives behavior, and behavior produces material consequences. If a solvent bank is rumored to be failing, depositors withdraw and the bank actually fails. In medicine, the nocebo effect and stereotype threat work the same way — a perception, accurate or not, produces a measurable outcome.',
    partNumber: 3,
    partTitle: 'Identity & Culture'
  },
  {
    id: 'msoc-ent-3b',
    question: 'Cultural relativism, as a methodological principle in sociology, suggests that researchers should:',
    options: [
      'Rank cultures along a single universal scale of moral development.',
      'Judge every cultural practice against Western scientific standards.',
      'Interpret a practice within its own cultural context before judging it.',
      'Study only their own culture, since outsiders cannot avoid bias.'
    ],
    correctIndex: 2,
    explanation: 'Cultural relativism is a methodological stance: describe and analyze a practice in terms of the meanings it holds for its own participants rather than imposing outside standards. It counteracts ethnocentrism (judging others by one\'s own culture) and is essential to valid cross-cultural research. It is not moral relativism — it does not claim all practices are ethically equivalent — and it does not forbid studying other cultures.',
    partNumber: 3,
    partTitle: 'Identity & Culture'
  },

  // Part 4: Health Disparities
  {
    id: 'msoc-ent-4a',
    question: 'Social determinants of health are best described as:',
    options: [
      'Inherited genetic variants that predispose individuals to specific diseases.',
      'The conditions in which people are born, grow, live, work, and age.',
      'Individual lifestyle choices such as diet, exercise, and smoking.',
      'The biological pathways by which chronic stress damages organ systems.'
    ],
    correctIndex: 1,
    explanation: 'The WHO defines social determinants of health as the non-medical conditions of daily life that shape health outcomes: income, education, housing and neighborhood, employment, social support, and access to care. They are upstream and structural, which is what distinguishes them from genetics, from downstream individual behaviors, and from the biological mechanisms (such as allostatic load) through which they eventually act on the body.',
    partNumber: 4,
    partTitle: 'Health Disparities'
  },
  {
    id: 'msoc-ent-4b',
    question: 'Implicit bias in healthcare refers to:',
    options: [
      'Deliberately discriminatory treatment chosen because of a patient\'s race or ethnicity.',
      'Written policies that intentionally exclude minorities from clinical trials.',
      'Disease-prevalence differences that are entirely genetic in origin.',
      'Unconscious attitudes that shape clinical decisions without awareness.'
    ],
    correctIndex: 3,
    explanation: 'Implicit bias operates below conscious awareness, which is exactly what separates it from explicit discrimination or deliberately exclusionary policy. Studies find that clinicians scoring higher on implicit racial bias measures prescribe less analgesia to Black patients and spend less time explaining diagnoses to minority patients, without intending or noticing the difference. The Implicit Association Test is the standard instrument.',
    partNumber: 4,
    partTitle: 'Health Disparities'
  },

  // Part 5: Social Influence
  {
    id: 'msoc-ent-5a',
    question: 'Solomon Asch\'s conformity experiments demonstrated that:',
    options: [
      'People reliably resist group pressure when the correct answer is unambiguous.',
      'Many people will endorse an obviously wrong answer that a unanimous group gives.',
      'Conformity appears only when the judgment task is genuinely ambiguous.',
      'Conformity requires an authority figure who instructs the participant.'
    ],
    correctIndex: 1,
    explanation: 'Asch used an unambiguous line-length judgment: about 75% of participants conformed to the wrong unanimous majority at least once, and roughly a third of critical trials produced conformity. A single dissenting confederate sharply reduced it. This is normative social influence — conforming to avoid standing out. The ambiguity-only claim describes Sherif\'s autokinetic studies, and the authority claim describes Milgram.',
    partNumber: 5,
    partTitle: 'Social Influence'
  },
  {
    id: 'msoc-ent-5b',
    question: 'Stanley Milgram\'s obedience experiments revealed that:',
    options: [
      'Most ordinary participants obeyed to the maximum shock level.',
      'Participants almost always refused once the learner began to protest.',
      'Only people with pre-existing authoritarian personalities obeyed.',
      'Placing the learner closer to the participant increased obedience.'
    ],
    correctIndex: 0,
    explanation: 'Roughly 65% of participants went to the full 450 volts when prodded by the experimenter at Yale. Obedience was situational rather than dispositional: it rose with the legitimacy and physical proximity of the authority, and it FELL as the learner became closer and more visible — which is why the proximity option is backwards.',
    partNumber: 5,
    partTitle: 'Social Influence'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'msoc-ent-6a',
    question: 'A researcher studying the relationship between income inequality (Gini coefficient) and population health (life expectancy) finds a strong negative correlation (r = −0.75). Which conclusion is most appropriate?',
    options: [
      'Inequality directly causes shorter lifespans through a known biological pathway.',
      'Differences in life expectancy are fully explained by income inequality.',
      'More unequal countries tend to have lower life expectancy, but cause is unproven.',
      'The result proves that redistributive taxation would improve health outcomes.'
    ],
    correctIndex: 2,
    explanation: 'A correlation describes an association, not a cause: third variables, reverse causation, and selection can all produce it. An r of −0.75 is strong enough to report the pattern (higher Gini goes with lower life expectancy), but confounds such as healthcare systems, education, and history must be addressed before asserting a mechanism, a complete explanation, or a policy effect.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'msoc-ent-6b',
    question: 'Medicalization refers to:',
    options: [
      'Physicians acquiring greater political influence over national health policy.',
      'Redefining nonmedical conditions as illnesses requiring medical treatment.',
      'Shifting public health systems into private, for-profit ownership.',
      'Developing new drugs for conditions that were previously untreatable.'
    ],
    correctIndex: 1,
    explanation: 'Medicalization (Conrad, Zola) is the social process by which behaviors or conditions once treated as moral, legal, or simply ordinary come under medical jurisdiction — ADHD, obesity, alcoholism, shyness, childbirth, aging. It can expand access to treatment, but it also risks pathologizing normal variation and expanding professional and pharmaceutical control.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'msoc-ent-7a',
    question: 'Intersectionality (Crenshaw) holds that:',
    options: [
      'Identities act independently, so their disadvantages simply add together.',
      'Race is the master axis from which all other social disadvantage follows.',
      'Everyone within a stigmatized group experiences oppression in the same way.',
      'Overlapping identities interact to create distinct experiences of oppression.'
    ],
    correctIndex: 3,
    explanation: 'Crenshaw\'s argument is specifically against the additive model: race, gender, class, and sexuality intersect to produce qualitatively new positions, not a sum of separate effects. A Black woman\'s experience of discrimination cannot be decomposed into a "race" part and a "gender" part, which is also why neither a single master axis nor a uniform within-group experience fits the theory.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'msoc-ent-7b',
    question: 'The sick role (Parsons) describes the social expectations placed on ill individuals, including:',
    options: [
      'An expectation that patients resist medical authority and self-advocate.',
      'Temporary release from normal duties plus a duty to seek care and recover.',
      'A permanent disability status that replaces all of the person\'s prior roles.',
      'An obligation to pay for one\'s own care in order to avoid social stigma.'
    ],
    correctIndex: 1,
    explanation: 'Parsons described two rights and two obligations: exemption from normal social duties and from blame for the illness, paired with an obligation to want to get well and to seek and cooperate with competent help. The role is a temporary, legitimized form of deviance, which is why a permanent replacement of social roles does not describe it.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Social Structures' },
    { partNumber: 2, partTitle: 'Social Interaction' },
    { partNumber: 3, partTitle: 'Identity & Culture' },
    { partNumber: 4, partTitle: 'Health Disparities' },
    { partNumber: 5, partTitle: 'Social Influence' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
