/**
 * Entrance Quiz — Sociology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Social Structures
  {
    id: 'msoc-ent-1a',
    question: 'Max Weber distinguished class, status, and party as three dimensions of social stratification. Which scenario best illustrates high status but low economic class?',
    options: [
      'A wealthy hedge fund manager who donates to charity.',
      'A highly respected community elder with little income or wealth.',
      'A politician with both financial resources and political power.',
      'A lower-income worker who holds no social prestige.'
    ],
    correctIndex: 1,
    explanation: 'Weber argued that class (economic position), status (social honor/prestige), and party (political power) are analytically distinct. A community elder with great respect but modest income exemplifies high status independent of class—a key Weberian insight that challenged purely economic stratification models.',
    partNumber: 1,
    partTitle: 'Social Structures'
  },
  {
    id: 'msoc-ent-1b',
    question: 'A social institution is best defined as:',
    options: [
      'A formal government building where laws are enacted.',
      'An established set of norms, roles, and relationships that persists over time and fulfills essential social functions.',
      'Any informal group of individuals who share common interests.',
      'A single organization, such as a hospital or school.'
    ],
    correctIndex: 1,
    explanation: 'Social institutions (family, religion, education, economy, medicine) are stable, organized patterns of beliefs and behaviors that address fundamental societal needs. They are distinct from specific organizations (e.g., "the family" as an institution vs. "the Johnson family" as a group).',
    partNumber: 1,
    partTitle: 'Social Structures'
  },

  // Part 2: Social Interaction
  {
    id: 'msoc-ent-2a',
    question: 'Erving Goffman\'s dramaturgical theory compares social interaction to theatrical performance. The concept of "impression management" refers to:',
    options: [
      'The unconscious behavioral responses that arise from early childhood conditioning.',
      'The deliberate effort to control how others perceive us through our presentation of self in social situations.',
      'The societal pressure to conform to gender norms in public spaces.',
      'The process by which media shapes public opinion about political events.'
    ],
    correctIndex: 1,
    explanation: 'Goffman argued we perform different roles in "front stage" (public) and "back stage" (private) settings. Impression management is the active, strategic control of self-presentation—selecting words, gestures, and props to shape others\' impressions. This is central to MCAT sociology.',
    partNumber: 2,
    partTitle: 'Social Interaction'
  },
  {
    id: 'msoc-ent-2b',
    question: 'Social norms are most accurately described as:',
    options: [
      'Written laws enforced by state authorities through formal sanctions.',
      'Shared expectations about appropriate behavior that guide social interaction, enforced through both formal and informal sanctions.',
      'Individual preferences that vary entirely from person to person within a society.',
      'Biological drives that determine behavior across all human cultures.'
    ],
    correctIndex: 1,
    explanation: 'Norms are shared social expectations (not necessarily written law). Mores are norms with strong moral significance; folkways are informal conventions. Violations are sanctioned positively (rewards) or negatively (punishment), formally (legal consequences) or informally (social disapproval).',
    partNumber: 2,
    partTitle: 'Social Interaction'
  },

  // Part 3: Identity & Culture
  {
    id: 'msoc-ent-3a',
    question: 'The Thomas theorem states: "If men define situations as real, they are real in their consequences." This principle best explains:',
    options: [
      'Why genetic factors override social learning in shaping behavior.',
      'How subjective beliefs and perceptions can produce real social outcomes, even if those beliefs are factually incorrect.',
      'The relationship between social class and objective economic outcomes.',
      'Why cultural practices are biologically determined.'
    ],
    correctIndex: 1,
    explanation: 'The Thomas theorem highlights the social construction of reality. If a bank is perceived as failing (even falsely), depositors will withdraw money, causing the bank to actually fail. In medicine, a "nocebo effect" or stereotype threat are examples: perceived stigma can produce real performance decrements.',
    partNumber: 3,
    partTitle: 'Identity & Culture'
  },
  {
    id: 'msoc-ent-3b',
    question: 'Cultural relativism, as a methodological principle in sociology, suggests that researchers should:',
    options: [
      'Rank cultures on a universal scale of moral development.',
      'Evaluate cultural practices strictly by Western scientific standards.',
      'Understand cultural practices within their own cultural context without imposing external moral judgments.',
      'Avoid studying cultures other than their own to prevent bias.'
    ],
    correctIndex: 2,
    explanation: 'Cultural relativism (not moral relativism) means describing and analyzing cultural practices within their own context. This methodological stance reduces ethnocentrism—judging other cultures by one\'s own standards. It is essential for valid cross-cultural research and is distinct from claiming all practices are morally equivalent.',
    partNumber: 3,
    partTitle: 'Identity & Culture'
  },

  // Part 4: Health Disparities
  {
    id: 'msoc-ent-4a',
    question: 'Social determinants of health are best described as:',
    options: [
      'Genetic factors that predispose individuals to specific diseases.',
      'The conditions in which people are born, grow, live, work, and age—including income, education, and access to healthcare.',
      'Individual lifestyle choices such as diet and exercise habits.',
      'The biological mechanisms through which stress damages organ systems.'
    ],
    correctIndex: 1,
    explanation: 'The WHO defines social determinants of health (SDOH) as the non-medical factors influencing health outcomes: socioeconomic status, education, neighborhood environment, employment, social support, and access to care. These upstream factors explain much of the variation in health outcomes across populations.',
    partNumber: 4,
    partTitle: 'Health Disparities'
  },
  {
    id: 'msoc-ent-4b',
    question: 'Implicit bias in healthcare refers to:',
    options: [
      'Deliberately discriminatory treatment based on a patient\'s race or ethnicity.',
      'Unconscious attitudes or stereotypes that influence clinical decisions and patient interactions without the clinician\'s awareness.',
      'Policies that intentionally exclude minority groups from clinical trials.',
      'Statistical disparities in disease prevalence that are caused entirely by genetic factors.'
    ],
    correctIndex: 1,
    explanation: 'Implicit bias operates unconsciously. Studies show that clinicians with higher implicit racial bias provide less pain medication to Black patients and spend less time explaining diagnoses to minority patients—without realizing they are doing so. IAT (Implicit Association Test) measures such biases and their health consequences are well-documented.',
    partNumber: 4,
    partTitle: 'Health Disparities'
  },

  // Part 5: Social Influence
  {
    id: 'msoc-ent-5a',
    question: 'Solomon Asch\'s conformity experiments demonstrated that:',
    options: [
      'People are highly resistant to social pressure when the task has an objectively correct answer.',
      'A significant proportion of individuals will give an obviously wrong answer when unanimous group members give that wrong answer.',
      'Conformity occurs only when the task is ambiguous and lacks a clear correct answer.',
      'Authority figures are required to produce conformity behavior.'
    ],
    correctIndex: 1,
    explanation: 'Asch showed that ~75% of participants conformed at least once and ~32% conformed on average, even when the correct line length was unambiguous. The presence of even one dissenting confederate dramatically reduced conformity. This illustrates normative social influence: conforming to avoid social rejection.',
    partNumber: 5,
    partTitle: 'Social Influence'
  },
  {
    id: 'msoc-ent-5b',
    question: 'Stanley Milgram\'s obedience experiments revealed that:',
    options: [
      'People consistently refused to administer shocks when told to do so by an authority figure.',
      'The majority of ordinary participants administered what they believed to be dangerous or lethal electric shocks when instructed by an authority figure in a legitimate institutional context.',
      'Obedience was only observed in participants with pre-existing authoritarian personalities.',
      'Physical proximity to the victim increased obedience to authority.'
    ],
    correctIndex: 1,
    explanation: 'Milgram found that ~65% of participants administered the maximum 450-volt shock when instructed by a Yale experimenter. Obedience was situational, not dispositional. Key factors: authority legitimacy, proximity of authority (↑obedience) vs. proximity to victim (↓obedience), institutional context.',
    partNumber: 5,
    partTitle: 'Social Influence'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'msoc-ent-6a',
    question: 'A researcher studying the relationship between income inequality (Gini coefficient) and population health (life expectancy) finds a strong negative correlation (r = −0.75). Which conclusion is most appropriate?',
    options: [
      'Income inequality directly causes decreased life expectancy through biological mechanisms.',
      'Countries with higher income inequality tend to have lower life expectancy, but correlation does not establish causation.',
      'Life expectancy differences are fully explained by income inequality.',
      'The negative correlation proves that redistributive taxation improves health outcomes.'
    ],
    correctIndex: 1,
    explanation: 'Correlation describes a statistical relationship but does not establish causation (third variables, reverse causation may operate). A strong correlation (r = −0.75) suggests a meaningful association: higher Gini → lower life expectancy. However, confounds (healthcare systems, cultural factors) must be addressed before claiming causation.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'msoc-ent-6b',
    question: 'Medicalization refers to:',
    options: [
      'The process by which physicians gain greater political influence over healthcare policy.',
      'The expansion of medical jurisdiction to define, treat, and control human conditions or behaviors previously not considered medical problems.',
      'The privatization of healthcare systems in developing countries.',
      'The development of new pharmaceuticals to treat previously untreatable diseases.'
    ],
    correctIndex: 1,
    explanation: 'Medicalization (Conrad, Zola) is the social process by which non-medical conditions are redefined as medical problems requiring medical intervention. Examples: ADHD, obesity, alcoholism, childbirth. Medicalization can expand access to care but may also pathologize normal variation and increase pharmaceutical dependence.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'msoc-ent-7a',
    question: 'Intersectionality (Crenshaw) holds that:',
    options: [
      'Social identities (race, gender, class, sexuality) operate independently and their effects can be simply added together.',
      'Social identities overlap and interact to create unique systems of privilege and oppression that cannot be reduced to the sum of individual identity effects.',
      'Race is the primary axis of inequality that determines all other forms of social disadvantage.',
      'Oppression is experienced equally by all members of any stigmatized group.'
    ],
    correctIndex: 1,
    explanation: 'Intersectionality holds that race, gender, class, sexuality, and other identities intersect to create qualitatively distinct experiences of privilege and oppression. A Black woman\'s experience of discrimination cannot be separated into "race" and "gender" components—their interaction creates unique conditions not captured by analyzing each alone.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'msoc-ent-7b',
    question: 'The sick role (Parsons) describes the social expectations placed on ill individuals, including:',
    options: [
      'The expectation that patients will resist medical authority to advocate for themselves.',
      'Temporary exemption from normal social duties AND the obligation to seek competent medical care and work toward recovery.',
      'Permanent disability status that replaces all previous social roles.',
      'The requirement that ill individuals pay for their own healthcare to avoid social stigma.'
    ],
    correctIndex: 1,
    explanation: 'Parsons\'s sick role has four elements: (1) exemption from normal duties, (2) reduced personal responsibility for illness, (3) obligation to seek medical care, and (4) obligation to cooperate with treatment and try to recover. It is a temporary, legitimized deviance from normal social functioning.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
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
