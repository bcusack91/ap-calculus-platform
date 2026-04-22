import type { EntranceQuizQuestion } from './moles-molar-mass'

const allQuestions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'govvotin-ent-1',
    partNumber: 1,
    partTitle: 'Core Concepts',
    question: 'Which AMENDMENT lowered the VOTING AGE from 21 to 18 in 1971 during the VIETNAM WAR?',
    options: ['15th Amendment', '19th Amendment', '24th Amendment', '26th Amendment'],
    correctIndex: 3,
    explanation: '26TH AMENDMENT (1971) lowered voting age from 21 to 18 during Vietnam War; "old enough to fight, old enough to vote"; FASTEST amendment ratification in US history (3 months 8 days); expanded electorate by ~11M young voters; 15th 1870 (race), 19th 1920 (women), 24th 1964 (poll tax).'
  },
  {
    id: 'govvotin-ent-2',
    partNumber: 1,
    partTitle: 'Core Concepts',
    question: 'How many ELECTORAL VOTES are needed to WIN the PRESIDENCY?',
    options: ['250', '270', '300', '538'],
    correctIndex: 1,
    explanation: '270 electoral votes needed to win (majority of 538); 538 = 435 House + 100 Senate + 3 DC (per 23rd Amendment 1961); winner-take-all in 48 states + DC; district method in ME + NE; 5 popular vote losses (1824/1876/1888/2000/2016); Chiafalo v. Washington 2020 unanimous upheld faithless elector laws.'
  },
  // Part 2 — Key Processes
  {
    id: 'govvotin-ent-3',
    partNumber: 2,
    partTitle: 'Key Processes',
    question: 'Which 2010 SCOTUS DECISION held CORPORATIONS HAVE 1ST AMENDMENT RIGHTS for INDEPENDENT POLITICAL EXPENDITURES?',
    options: ['Buckley v. Valeo', 'McConnell v. FEC', 'Citizens United v. FEC', 'McCutcheon v. FEC'],
    correctIndex: 2,
    explanation: 'CITIZENS UNITED v. FEC (2010) — 5-4 Kennedy majority held corporations have 1st Amendment speech rights for independent political expenditures; reversed Austin v. Michigan Chamber 1990; struck BCRA Section 203; SpeechNow v. FEC 2010 (DC Circuit) followed creating Super PACs; McCutcheon 2014 struck aggregate individual limits; 2024 ~$15B + Musk $300M+ to Trump.'
  },
  {
    id: 'govvotin-ent-4',
    partNumber: 2,
    partTitle: 'Key Processes',
    question: 'Who was the MASSACHUSETTS GOVERNOR (1812) whose name became associated with PARTISAN DISTRICT MANIPULATION (salamander-shaped district)?',
    options: ['John Hancock', 'Samuel Adams', 'Elbridge Gerry', 'John Adams'],
    correctIndex: 2,
    explanation: 'ELBRIDGE GERRY — Massachusetts governor 1812; salamander-shaped district drawn during his tenure; Boston Gazette cartoonist combined "Gerry" + "salamander" = "gerrymander"; Gerry was Founding Father + signer of Declaration + VP under Madison; PACKING (concentrating) + CRACKING (splitting); Shaw v. Reno 1993 + Rucho v. Common Cause 2019 + Allen v. Milligan 2023 + Moore v. Harper 2023.'
  },
  // Part 3 — Patterns & Examples
  {
    id: 'govvotin-ent-5',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
    question: 'Which 1932 PRESIDENT created the NEW DEAL COALITION that dominated American politics until 1968?',
    options: ['Herbert Hoover', 'Franklin D. Roosevelt', 'Harry Truman', 'Woodrow Wilson'],
    correctIndex: 1,
    explanation: 'FDR 1932 — created NEW DEAL COALITION combining urban workers + Catholics + Jews + African Americans (shifted from Republican post-Reconstruction) + Southern whites + farmers + intellectuals + labor; dominated American politics 1932-1968 (36 years); won 4 presidential elections (1932/36/40/44); died April 12 1945; coalition fractured over civil rights + Vietnam culminating in 1968 Nixon victory + Sun Belt realignment.'
  },
  {
    id: 'govvotin-ent-6',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
    question: 'In 2024, what was the GENDER GAP pattern in the presidential election?',
    options: ['Men +13 Harris; Women +12 Trump', 'Women +13 Harris; Men +12 Trump', 'No gender gap', 'Both genders supported Trump equally'],
    correctIndex: 1,
    explanation: '2024 GENDER GAP — Women +13 Harris; Men +12 Trump; ~25 pt total gap; consistent with historic pattern (women lean Democratic since 1980; men lean Republican); diploma divide expanded — White college Harris 56-42; non-college Trump 67-32; Latino 46% Trump historic high; Black men 22% Trump highest since 1960; ~27 pt young men shift toward Trump 2020-2024.'
  },
  // Part 4 — Connections
  {
    id: 'govvotin-ent-7',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
    question: 'Whose famous 1992 CAMPAIGN SLOGAN — "It\'s the economy, stupid" — captured RETROSPECTIVE ECONOMIC VOTING?',
    options: ['George H.W. Bush', 'Ross Perot', 'James Carville', 'Bill Clinton'],
    correctIndex: 2,
    explanation: 'JAMES CARVILLE — Bill Clinton\'s 1992 campaign strategist; coined "It\'s the economy, stupid" as one of three campaign focus points (along with "Change vs. more of the same" + "Don\'t forget health care"); captured RETROSPECTIVE ECONOMIC VOTING per V.O. Key 1966 + Morris Fiorina 1981; Bush lost 1992 despite Gulf War victory due to recession; Clinton won 43% (Perot 19% third party); Carville became famous Democratic strategist.'
  },
  {
    id: 'govvotin-ent-8',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
    question: 'When ONE PARTY controls the WHITE HOUSE + SENATE + HOUSE, this is called a:',
    options: ['Divided government', 'Parliamentary majority', 'Trifecta', 'Coalition government'],
    correctIndex: 2,
    explanation: 'TRIFECTA — when ONE PARTY controls the WHITE HOUSE + SENATE + HOUSE simultaneously; enables passage of partisan legislation; recent trifectas — Bush 2003-07 (R; tax cuts + Medicare Part D + Iraq War); Obama 2009-11 (D; ACA + Dodd-Frank); Trump 2017-19 (R; tax cuts + Gorsuch); Biden 2021-23 (D; ARP + IIJA + IRA + CHIPS); TRUMP 2025-? (R; second trifecta); typically lost in midterm "shellacking" pattern.'
  },
  // Part 5 — Change Over Time
  {
    id: 'govvotin-ent-9',
    partNumber: 5,
    partTitle: 'Change Over Time',
    question: 'Which 1965 LANDMARK LEGISLATION restored BLACK VOTING ACCESS by banning literacy tests + creating PRECLEARANCE?',
    options: ['Civil Rights Act 1957', 'Civil Rights Act 1964', 'Voting Rights Act 1965', 'Help America Vote Act 2002'],
    correctIndex: 2,
    explanation: 'VOTING RIGHTS ACT 1965 — signed by LBJ Aug 6 1965 after Selma Bloody Sunday March 7 1965 + LBJ "We Shall Overcome" speech March 15 1965; Section 2 vote dilution nationwide; Section 5 preclearance; Section 4(b) coverage formula; reauthorized 1970/75/82/2006; impact: Black voter registration in MS rose 6.7% (1964) → 59.8% (1967); Shelby County 2013 gutted Section 4(b); Allen v. Milligan 2023 preserved Section 2.'
  },
  {
    id: 'govvotin-ent-10',
    partNumber: 5,
    partTitle: 'Change Over Time',
    question: 'In what year was the 26TH AMENDMENT (lowering voting age to 18) RATIFIED?',
    options: ['1965', '1968', '1971', '1976'],
    correctIndex: 2,
    explanation: '26TH AMENDMENT (1971) — lowered voting age from 21 to 18; FASTEST amendment ratification in US history (3 months 8 days from Congress passage to ratification); Vietnam War context ("old enough to fight, old enough to vote"); followed Oregon v. Mitchell 1970 SCOTUS that Congress could lower age for federal but not state elections; expanded electorate by ~11M young voters; 18-29 turnout has historically been LOWEST.'
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'govvotin-ent-11',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
    question: 'Which FEDERALIST PAPER (Madison 1787) defended the EXTENDED REPUBLIC + REPRESENTATION as remedy for FACTIONS?',
    options: ['Federalist 10', 'Federalist 51', 'Federalist 70', 'Federalist 78'],
    correctIndex: 0,
    explanation: 'FEDERALIST 10 (Madison 1787) — defended EXTENDED REPUBLIC + REPRESENTATION + DIVERSITY as remedy for FACTIONS; representatives "refine and enlarge the public views" via deliberation; rejected eliminating factions (would destroy liberty); argued large republic safer than small (more diverse interests + harder for single faction to dominate); defies Montesquieu small-republic theory; THE central document on Madisonian institutional filtering of public opinion.'
  },
  {
    id: 'govvotin-ent-12',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
    question: 'Which FEDERALIST PAPER (Hamilton 1788) argued the SENATE should be INSULATED FROM POPULAR PASSIONS because PEOPLE DON\'T ALWAYS REASON RIGHT?',
    options: ['Federalist 10', 'Federalist 51', 'Federalist 71', 'Federalist 78'],
    correctIndex: 2,
    explanation: 'FEDERALIST 71 (Hamilton 1788) — argued Senate should be INSULATED from popular passions; "people commonly intend the public good but they do not always reason right about the means of promoting it"; defended Senate\'s 6-year terms + indirect election (then by state legislatures pre-17th Amendment 1913) + smaller size; central to Madisonian institutional filtering theory; relevant to modern debates about Senate filibuster + EC + judicial review serving counter-majoritarian functions.'
  },
  // Part 7 — AP Review
  {
    id: 'govvotin-ent-13',
    partNumber: 7,
    partTitle: 'AP Review',
    question: 'Which JURIST coined the term "COUNTER-MAJORITARIAN DIFFICULTY" to describe judicial review tension with democracy?',
    options: ['Earl Warren', 'Antonin Scalia', 'Alexander Bickel', 'John Marshall'],
    correctIndex: 2,
    explanation: 'ALEXANDER BICKEL — Yale Law professor; coined "COUNTER-MAJORITARIAN DIFFICULTY" in The Least Dangerous Branch (1962); argued judicial review creates fundamental tension with democratic principle (unelected judges overturning democratic decisions); central concept in debates over judicial review + JUDICIAL ACTIVISM vs RESTRAINT; Federalist 78 Hamilton defended judicial independence + lifetime tenure as "least dangerous branch"; relevant to all SCOTUS voting rights decisions.'
  },
  {
    id: 'govvotin-ent-14',
    partNumber: 7,
    partTitle: 'AP Review',
    question: 'In the SCAR template for AP FRQ writing, what does the "C" stand for?',
    options: ['Compare alternatives', 'Cite evidence', 'Connect to context', 'Critique the question'],
    correctIndex: 1,
    explanation: 'SCAR template — S = STATE the claim; C = CITE evidence (specific data + cases + amendments + dates + people); A = ANALYZE/APPLY (connect evidence to claim; explain HOW + WHY); R = REASONING/RESPONSE (counterarguments + deeper analysis + future implications); use for ALL AP FRQs to ensure complete + organized responses; never just state claim without evidence; never just list evidence without analysis; never end without addressing counterarguments + deeper implications.'
  }
]

function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffle(allQuestions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
