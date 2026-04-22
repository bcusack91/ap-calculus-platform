import type { EntranceQuizQuestion } from './moles-molar-mass'

const allQuestions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'govpubli-ent-1',
    question: "What are the THREE DIMENSIONS of PUBLIC OPINION?",
    options: [
      'Salience (importance), intensity (strength), stability (durability)',
      'Height, weight, color',
      'Left, right, center',
      'Past, present, future'
    ],
    correctIndex: 0,
    explanation: 'PUBLIC OPINION = aggregate of individual attitudes; THREE DIMENSIONS: SALIENCE (importance to respondents), INTENSITY (strength of feeling), STABILITY (durability over time).'
  },
  {
    id: 'govpubli-ent-2',
    question: "Which AGENT of POLITICAL SOCIALIZATION is STRONGEST, accounting for ~70% of children sharing parents' party identification?",
    options: [
      'Family',
      'Media',
      'Peers',
      'Religion'
    ],
    correctIndex: 0,
    explanation: 'FAMILY is the STRONGEST agent of political socialization — ~70% of children share parents\' party identification by age 12; transmits party ID + religious affiliation + basic political identification through childhood.'
  },
  // Part 2 — Key Processes
  {
    id: 'govpubli-ent-3',
    question: "Which BRITISH POLITICAL THINKER articulated the TRUSTEE MODEL of representation in his 1774 SPEECH TO ELECTORS OF BRISTOL?",
    options: [
      'Edmund Burke',
      'John Locke',
      'Thomas Hobbes',
      'John Stuart Mill'
    ],
    correctIndex: 0,
    explanation: 'EDMUND BURKE 1774 SPEECH TO ELECTORS OF BRISTOL articulated the TRUSTEE MODEL — "Your representative owes you, not his industry only, but his judgment"; rejected delegate model; Burke lost his next election (1780) for independent voting on Catholic emancipation + Irish trade.'
  },
  {
    id: 'govpubli-ent-4',
    question: "Which AMENDMENT lowered the VOTING AGE from 21 to 18 during the Vietnam War?",
    options: [
      '26th Amendment (1971)',
      '24th Amendment (1964)',
      '19th Amendment (1920)',
      '15th Amendment (1870)'
    ],
    correctIndex: 0,
    explanation: '26th AMENDMENT (1971) lowered voting age from 21 to 18 during Vietnam War ("old enough to fight, old enough to vote"); ratified in fastest amendment process in US history (3 months 8 days); expanded electorate by ~11M young voters.'
  },
  // Part 3 — Patterns & Examples
  {
    id: 'govpubli-ent-5',
    question: "Which DEMOGRAPHIC GROUP has been the MOST LOYAL Democratic constituency since the 1964 Civil Rights Act, voting ~85-90% Democratic in presidential elections?",
    options: [
      'Black Americans',
      'Hispanic Americans',
      'Asian Americans',
      'White Americans'
    ],
    correctIndex: 0,
    explanation: 'BLACK AMERICANS — most loyal Dem constituency since Civil Rights Act 1964 + Voting Rights Act 1965 (LBJ); ~85-90% Dem in presidential elections; Trump made gains with Black men 2024 (~22%) but Black women 90%+ Dem.'
  },
  {
    id: 'govpubli-ent-6',
    question: "What is the DIPLOMA DIVIDE in modern American politics?",
    options: [
      'White college graduates increasingly Democratic + White non-college increasingly Republican',
      'College graduates always Republican + non-graduates always Democratic',
      'Education has no effect on vote choice',
      'College students vote at higher rates than non-students'
    ],
    correctIndex: 0,
    explanation: 'DIPLOMA DIVIDE = sorting by 4-year college degree central to modern alignment; White college → Dem (Harris 56-42 2024); White non-college → Rep (Trump 67-32 2024); ~37 pt swing among White non-college since 1992; central to Trump GOP coalition; suburban college women fled GOP under Trump.'
  },
  // Part 4 — Connections
  {
    id: 'govpubli-ent-7',
    question: "What is the 1972 theory by McCombs + Shaw that media tells us 'WHAT TO THINK ABOUT' (issue salience)?",
    options: [
      'Agenda-setting',
      'Framing',
      'Priming',
      'Cultivation theory'
    ],
    correctIndex: 0,
    explanation: 'AGENDA-SETTING (McCombs + Shaw 1972 Chapel Hill Study) — media tells us WHAT TO THINK ABOUT (issue salience); doesn\'t necessarily change opinions but determines which issues voters consider important; foundational media effects research.'
  },
  {
    id: 'govpubli-ent-8',
    question: "Which podcast became central to TRUMP's 2024 victory, hosting a 3-hour Trump interview late October + endorsing Trump night before election?",
    options: [
      'The Joe Rogan Experience',
      'Pod Save America',
      'The Daily',
      'This American Life'
    ],
    correctIndex: 0,
    explanation: 'JOE ROGAN EXPERIENCE — #1 Spotify podcast worldwide (~50M listeners); hosted 3-hour Trump interview late October 2024; Rogan endorsed Trump night before election; Trump did manosphere podcast circuit (Theo Von, Andrew Schulz, Lex Fridman, Shawn Ryan); central to Trump young men gains (won 18-29 men by ~14 pts vs Biden +13 in 2020 = ~27 pt swing).'
  },
  // Part 5 — Change Over Time
  {
    id: 'govpubli-ent-9',
    question: "What 2000 Robert Putnam book documented the DECLINE in CIVIC ENGAGEMENT + SOCIAL CAPITAL alongside trust decline?",
    options: [
      'Bowling Alone',
      'The Federalist Papers',
      'The American Voter',
      'The Affluent Society'
    ],
    correctIndex: 0,
    explanation: 'BOWLING ALONE (Putnam 2000) — used dramatic image of declining bowling LEAGUES (more bowling than ever but fewer leagues) as metaphor for declining civic engagement; documented decline in PTA + Elks + Rotary + church + voting + family meals + bridge clubs; argued TV + suburbanization + women workforce + generational change drove decline.'
  },
  {
    id: 'govpubli-ent-10',
    question: "Which 2015 Supreme Court case established the CONSTITUTIONAL RIGHT to SAME-SEX MARRIAGE nationwide?",
    options: [
      'Obergefell v. Hodges',
      'Lawrence v. Texas',
      'United States v. Windsor',
      'Bowers v. Hardwick'
    ],
    correctIndex: 0,
    explanation: 'OBERGEFELL v. HODGES (2015) — Justice Anthony Kennedy 5-4 majority opinion struck down state same-sex marriage bans; established 14th Amendment Due Process + Equal Protection requires marriage equality; followed Goodridge 2003 (Massachusetts), Lawrence 2003 (sodomy), Windsor 2013 (DOMA federal definition); same-sex marriage support transformed 12% (1988) → 71% (2024).'
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'govpubli-ent-11',
    question: "Which FEDERALIST PAPER (Madison 1787) defends the EXTENDED REPUBLIC + REPRESENTATION + DIVERSITY as remedy for FACTIONS?",
    options: [
      'Federalist 10',
      'Federalist 51',
      'Federalist 70',
      'Federalist 78'
    ],
    correctIndex: 0,
    explanation: 'FEDERALIST 10 (Madison 1787) — defines FACTION = "citizens united by common impulse of passion or interest adversed to rights of other citizens or aggregate interests"; rejects eliminating factions (would destroy liberty); argues large republic + representation + diversity controls faction effects; representatives "REFINE AND ENLARGE the public views."'
  },
  {
    id: 'govpubli-ent-12',
    question: "What is MOTIVATED REASONING in political psychology (Kunda 1990; Lodge + Taber 2000)?",
    options: [
      'Tendency to process information in ways that confirm prior beliefs/identities',
      'Logical analysis of all available evidence',
      'Random information processing without bias',
      'Mathematical computation of probabilities'
    ],
    correctIndex: 0,
    explanation: 'MOTIVATED REASONING (Kunda 1990; Lodge + Taber 2000) — tendency to process information in ways that confirm prior beliefs/identities; differential standards for accepting vs rejecting info; explains why partisans see same data differently (61% Reps still doubt 2020 election; climate denial concentrated among Reps; COVID vaccine refusal correlated with Rep ID; hostile media perception both sides).'
  },
  // Part 7 — AP Review
  {
    id: 'govpubli-ent-13',
    question: "What is the AP FRQ TEMPLATE for PUBLIC OPINION + POLLING questions?",
    options: [
      'SCAR (Specifics + Concepts + Application + Reasoning)',
      'BCEF (Background + Context + Evidence + Fact)',
      'PIES (Physical + Intellectual + Emotional + Social)',
      'PEMDAS (Parentheses + Exponents + Multiplication + Division + Addition + Subtraction)'
    ],
    correctIndex: 0,
    explanation: 'SCAR TEMPLATE for AP Public Opinion FRQ: S = SPECIFICS (dates, names, percentages, examples, polls); C = CONCEPTS (3-5 relevant concepts EXPLICITLY by name); A = APPLICATION (apply concepts to specific situation); R = REASONING (causal chain, counterarguments, broader context, predict consequences).'
  },
  {
    id: 'govpubli-ent-14',
    question: "What is Alexander Bickel's CONCEPT for the tension between LIFETIME-TENURED unelected JUDGES striking down DEMOCRATICALLY-ENACTED LAWS?",
    options: [
      'Counter-majoritarian difficulty',
      'Bully pulpit',
      'Permanent campaign',
      'Negative partisanship'
    ],
    correctIndex: 0,
    explanation: 'COUNTER-MAJORITARIAN DIFFICULTY (Bickel THE LEAST DANGEROUS BRANCH 1962) — tension between lifetime-tenured unelected judges striking down democratically-enacted laws + claim that judiciary is "least dangerous branch" per Federalist 78; Roberts Court partly motivated by legitimacy concerns (NFIB v. Sebelius 2012 protected ACA partly to preserve legitimacy; Dobbs 2022 reversed Roe DESPITE ~60% public support).'
  },
]

export const generateEntranceQuiz = (): EntranceQuizQuestion[] => {
  const shuffled = [...allQuestions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const getEntranceQuizParts = () => [
  { partTitle: 'Part 1: Core Concepts' },
  { partTitle: 'Part 2: Key Processes' },
  { partTitle: 'Part 3: Patterns & Examples' },
  { partTitle: 'Part 4: Connections & Interactions' },
  { partTitle: 'Part 5: Change Over Time' },
  { partTitle: 'Part 6: Problem-Solving Workshop' },
  { partTitle: 'Part 7: AP Review' },
]
