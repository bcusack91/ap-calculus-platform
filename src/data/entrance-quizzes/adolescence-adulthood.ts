/**
 * Entrance Quiz — Adolescence & Adulthood (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Adolescent Development
  {
    id: 'aa-ent-1a',
    question: 'A 15-year-old vapes every day despite health warnings. She explains that lung damage happens to people who smoke for decades, not to someone like her. Which concept best explains her reasoning?',
    options: ['Imaginary audience', 'Identity foreclosure', 'Personal fable', 'Role confusion'],
    correctIndex: 2,
    explanation: 'Believing that the usual risks do not apply to oneself is the personal fable, the sense of being unique and invulnerable. The imaginary audience is the belief that everyone is watching and judging.',
    partNumber: 1,
    partTitle: 'Adolescent Development',
  },
  {
    id: 'aa-ent-1b',
    question: 'Teens and adults score equally well on a written test about the dangers of speeding. Yet in a timed driving game that awards points for speed, the teens take far more risks. Which explanation fits these results best?',
    options: ['Thrill-seeking circuits mature before the prefrontal cortex', 'Teens do not understand the dangers that the driving game presents', 'The prefrontal cortex matures before the emotional limbic system', 'Puberty delays growth in the brain areas that respond to excitement'],
    correctIndex: 0,
    explanation: 'The teens know the risks as well as adults do, so ignorance is ruled out. The limbic system matures during puberty while the prefrontal cortex, which supports impulse control, keeps maturing into the mid-twenties.',
    partNumber: 1,
    partTitle: 'Adolescent Development',
  },

  // Part 2: Identity Formation
  {
    id: 'aa-ent-2a',
    question: 'A high school senior has committed to joining the Coast Guard. He made the choice after job-shadowing a paramedic, an electrician and a teacher and talking at length with recruiters and veterans. According to Marcia, which status describes him?',
    options: ['Identity achievement', 'Identity foreclosure', 'Identity moratorium', 'Identity diffusion'],
    correctIndex: 0,
    explanation: 'He explored several options and then made a commitment, the combination that defines identity achievement. Foreclosure also involves commitment, but without exploring alternatives.',
    partNumber: 2,
    partTitle: 'Identity Formation',
  },
  {
    id: 'aa-ent-2b',
    question: 'A 52-year-old says his job feels pointless, he has lost interest in his children\'s lives and his community, and he spends most evenings alone feeling he has given nothing to anyone. In Erikson\'s theory, which conflict is he struggling to resolve?',
    options: ['Identity vs. role confusion', 'Generativity vs. stagnation', 'Intimacy vs. isolation', 'Integrity vs. despair'],
    correctIndex: 1,
    explanation: 'Middle adulthood centers on contributing to the next generation through family, work or community. Feeling stuck, self-absorbed and unproductive is the stagnation pole of generativity vs. stagnation.',
    partNumber: 2,
    partTitle: 'Identity Formation',
  },

  // Part 3: Peers, Identity Domains, and Gender Socialization
  {
    id: 'aa-ent-3a',
    question: 'For two years, a 17-year-old has read family letters, interviewed her grandparents and joined cultural events, and she now feels settled and proud of her Korean American heritage. She also plans to take over her parents\' dry-cleaning business, a path she has never questioned or compared with any other. How is her identity best described?',
    options: ['Ethnic achievement with occupational foreclosure', 'Ethnic moratorium with occupational achievement', 'A single overall status of identity foreclosure', 'A single overall status of identity achievement'],
    correctIndex: 0,
    explanation: 'Identity statuses apply domain by domain. She explored and then committed in the racial/ethnic domain (achievement), but committed to a career without exploring alternatives (foreclosure).',
    partNumber: 3,
    partTitle: 'Peers, Identity Domains, and Gender Socialization',
  },
  {
    id: 'aa-ent-3b',
    question: 'In a practice study, adults watch the same video of an infant startled by a jack-in-the-box. Adults told the infant is a boy tend to describe the reaction as anger; adults told it is a girl tend to describe it as fear. Which conclusion do these findings best support?',
    options: ['Infant boys and girls show fear in different ways', 'Gender roles are fixed by biological sex alone', 'Only peers, not adults, pass on gender roles', 'Adults read one act through gender expectations'],
    correctIndex: 3,
    explanation: 'Every adult saw the same infant, so the different labels came from the adults\' gender expectations. Expectations like these shape how adults respond to children, one route of gender socialization.',
    partNumber: 3,
    partTitle: 'Peers, Identity Domains, and Gender Socialization',
  },

  // Part 4: Physical and Cognitive Change in Adulthood
  {
    id: 'aa-ent-4a',
    question: 'Early cross-sectional studies suggested that intelligence falls steadily after young adulthood. Later longitudinal studies of the same adults found vocabulary and knowledge holding steady into their 60s. What best explains the difference?',
    options: ['Longitudinal studies randomly assign people to different ages', 'Vocabulary declines faster than any other ability in old age', 'Cross-sectional studies retest the same people for many years', 'Older cross-sectional groups had received less schooling'],
    correctIndex: 3,
    explanation: 'Comparing different age groups at one time mixes age with generation. Older cohorts had received less education, so part of the apparent decline was a cohort effect rather than aging.',
    partNumber: 4,
    partTitle: 'Physical and Cognitive Change in Adulthood',
  },
  {
    id: 'aa-ent-4b',
    question: 'Which observation about a 74-year-old most suggests dementia rather than normal aging?',
    options: ['She needs much longer than before to learn a new phone app', 'She can no longer follow the soup recipe she has made for decades', 'She briefly forgets a neighbor\'s name and recalls it an hour later', 'She asks people to repeat themselves in loud, crowded restaurants'],
    correctIndex: 1,
    explanation: 'Losing a long-familiar routine is a decline that disrupts daily life, a sign of dementia. Slower learning of new technology, brief name lapses and hearing loss in noise are typical of normal aging.',
    partNumber: 4,
    partTitle: 'Physical and Cognitive Change in Adulthood',
  },

  // Part 5: Social Development
  {
    id: 'aa-ent-5a',
    question: 'In one country most people marry by 22; in another the typical age is 31. A single 27-year-old feels "behind" while visiting relatives in the first country but "right on schedule" at home in the second. Which concept explains her shifting feelings?',
    options: ['Adult attachment style', 'Emerging adulthood', 'Social clock', 'Identity diffusion'],
    correctIndex: 2,
    explanation: 'Each culture sets its own expected timing for major life events such as marriage. Being early or late is judged against that cultural social clock, not against biology.',
    partNumber: 5,
    partTitle: 'Social Development',
  },
  {
    id: 'aa-ent-5b',
    question: 'A long-term study finds that adults who were insecurely attached as toddlers report anxious romantic relationships more often than others, but many of them describe secure relationships after years with a supportive partner. Which conclusion fits best?',
    options: ['Early attachment shapes adult patterns without fixing them', 'Early attachment has no connection to adult relationships', 'Early attachment fully determines adult relationship patterns', 'Adult relationships produce the attachment seen in toddlers'],
    correctIndex: 0,
    explanation: 'The link between toddler and adult attachment shows influence, while the shift toward security after supportive relationships shows that the pattern is a tendency, not a destiny.',
    partNumber: 5,
    partTitle: 'Social Development',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'aa-ent-6a',
    question: 'In a practice study, researchers survey the same 400 adults about volunteering at ages 40, 50 and 60. By age 60, 30% have dropped out, mostly people in poor health, and volunteering appears to rise with age. Which limitation matters most?',
    options: ['Cohort effects, since the age groups grew up in different eras', 'Attrition, since sicker adults left the sample over time', 'Placebo effects, since the volunteers expected a benefit', 'Order effects, since every adult heard the survey questions'],
    correctIndex: 1,
    explanation: 'The same adults were followed over time, so this is a longitudinal design and cohort effects do not apply. Healthier adults, who can volunteer more, stayed in the study, so attrition may inflate the apparent rise.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'aa-ent-6b',
    question: 'A 66-year-old retired engineer mentors young designers. She is slower than they are at mastering new software but better at spotting flaws in a design. Which pair of concepts fits her best?',
    options: ['Stagnation and declining fluid intelligence', 'Intimacy and preserved fluid intelligence', 'Integrity and declining crystallized intelligence', 'Generativity and preserved crystallized intelligence'],
    correctIndex: 3,
    explanation: 'Mentoring the next generation reflects generativity. Her slower learning of new software fits declining fluid intelligence, while her experienced judgment draws on crystallized intelligence, which stays relatively stable.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'aa-ent-7a',
    question: 'For an evidence-based question, a student claims that the social environment strongly shapes adolescent risk-taking. Which pairing of evidence and concept best supports this claim?',
    options: ['The prefrontal cortex matures around 25, explained by maturation', 'Older adults keep their vocabulary, explained by crystallized intelligence', 'Teens drive more riskily with friends, explained by peer influence', 'Puberty starts earlier for girls, explained by hormonal change'],
    correctIndex: 2,
    explanation: 'The claim is about the social environment, so the evidence must show a social factor changing behavior. Riskier driving with peers present, explained by peer influence, does that; the brain and hormone evidence points to biology.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'aa-ent-7b',
    question: 'Which finding best illustrates stability rather than change across adulthood?',
    options: ['Reaction times slowing gradually from age 25 onward', 'Vocabulary scores holding steady from age 30 to age 65', 'Identity statuses shifting after a career change', 'Fluid reasoning scores falling in late adulthood'],
    correctIndex: 1,
    explanation: 'Vocabulary is a crystallized ability that stays relatively stable through adulthood. Slowing reaction time, falling fluid reasoning and identity shifts are all forms of change.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Adolescent Development' },
    { partNumber: 2, partTitle: 'Identity Formation' },
    { partNumber: 3, partTitle: 'Peers, Identity Domains, and Gender Socialization' },
    { partNumber: 4, partTitle: 'Physical and Cognitive Change in Adulthood' },
    { partNumber: 5, partTitle: 'Social Development' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
