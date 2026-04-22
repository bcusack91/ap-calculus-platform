import type { EntranceQuizQuestion } from './moles-molar-mass'

const allQuestions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'govparti-ent-1',
    partTitle: 'Core Concepts',
    question: "Which 1951 LAW formulated by MAURICE DUVERGER predicts that SINGLE-MEMBER DISTRICT PLURALITY (SMDP) electoral systems FAVOR a TWO-PARTY system?",
    options: ["Olson's Law", "Madison's Law", "Duverger's Law", "Dahl's Law"],
    correctIndex: 2,
    explanation: "DUVERGER'S LAW (Maurice Duverger 1951) — political science principle predicting SINGLE-MEMBER DISTRICT PLURALITY (SMDP) electoral systems FAVOR TWO-PARTY SYSTEMS; mechanism — voters strategic; don't waste votes on third parties unlikely to win; US system (SMDP for House + presidential Electoral College) produces 2 major parties (Democratic + Republican); contrast with PROPORTIONAL REPRESENTATION (PR) systems (Germany + Israel + Netherlands) which produce multi-party systems; THIRD PARTIES chronically underperform — Bull Moose 1912 + Wallace 1968 + Anderson 1980 + Perot 1992 + Nader 2000 + RFK Jr 2024."
  },
  {
    id: 'govparti-ent-2',
    partTitle: 'Core Concepts',
    question: "Which 1965 BOOK by MANCUR OLSON established the COLLECTIVE ACTION PROBLEM + FREE RIDER + SELECTIVE BENEFITS framework for understanding INTEREST GROUP formation?",
    options: ['Who Governs?', 'The Logic of Collective Action', 'The Power Elite', 'Bowling Alone'],
    correctIndex: 1,
    explanation: 'THE LOGIC OF COLLECTIVE ACTION: Public Goods and the Theory of Groups (Mancur Olson 1965) — landmark book; argued RATIONAL INDIVIDUALS would NOT contribute to COLLECTIVE ACTION without (1) SELECTIVE BENEFITS (member-only benefits like AAA roadside assistance + AARP magazine + Sierra Club outings + NRA insurance) or (2) SMALL GROUP coordination; FREE RIDER PROBLEM — beneficiaries who do not contribute; explains why CONCENTRATED INTERESTS (small + business + producers) better organized than DIFFUSE INTERESTS (consumers + taxpayers + public); foundation for interest group politics; Janus v. AFSCME 2018 created free rider problem for public sector unions.'
  },
  // Part 2 — Key Processes
  {
    id: 'govparti-ent-3',
    partTitle: 'Key Processes',
    question: "Which 2008 BOOK by COHEN, KAROL, NOEL + ZALLER argued that PARTY ELITES (not voters) effectively CONTROL PRESIDENTIAL NOMINATIONS through the INVISIBLE PRIMARY?",
    options: ['Why Parties?', 'The Party Decides', 'Polarized America', 'Off Center'],
    correctIndex: 1,
    explanation: 'THE PARTY DECIDES: Presidential Nominations Before and After Reform (Marty Cohen + David Karol + Hans Noel + John Zaller 2008) — landmark book; argued PARTY ELITES (officeholders + activists + donors + party officials + interest group leaders) effectively CONTROL PRESIDENTIAL NOMINATIONS through the INVISIBLE PRIMARY (pre-primary endorsements + fundraising + media coverage + organizational support); challenged narrative that primaries democratized nominations post-McGovern-Fraser 1972 reforms; CHALLENGED by Trump 2016 (won despite GOP elite opposition) + Biden 2020 (party elite consolidation behind Biden after SC primary); modified theory — PARTY DECIDES applies less reliably in modern fragmented + polarized + media-driven environment.'
  },
  {
    id: 'govparti-ent-4',
    partTitle: 'Key Processes',
    question: "Which 2010 DC CIRCUIT COURT decision created SUPER PACs by allowing UNLIMITED INDIVIDUAL CONTRIBUTIONS to INDEPENDENT EXPENDITURE-ONLY PACs?",
    options: ['Buckley v. Valeo', 'Citizens United v. FEC', 'SpeechNow.org v. FEC', 'McCutcheon v. FEC'],
    correctIndex: 2,
    explanation: 'SPEECHNOW.org v. FEC (2010 DC Circuit) — followed Citizens United 2010 by 2 months; HELD INDIVIDUALS can give UNLIMITED CONTRIBUTIONS to PACs that make ONLY INDEPENDENT EXPENDITURES (no direct candidate contributions); CREATED SUPER PAC structure; reasoning — extending Citizens United logic that independent expenditures pose no corruption risk; IMPACT — Super PACs now dominant force in modern campaigns ($2B+ each side 2024); examples — American Crossroads (R) + Senate Majority PAC (D) + Future Forward (D) + MAGA Inc. (R) + America PAC (Musk for Trump 2024 ~$300M+); not formally a SCOTUS case but functionally treated as one given DC Circuit influence + government did not appeal.'
  },
  // Part 3 — Patterns & Examples
  {
    id: 'govparti-ent-5',
    partTitle: 'Patterns & Examples',
    question: "Which 1969 BOOK by THEODORE LOWI argued that the EXPLOSION of INTEREST GROUPS produced HYPERPLURALISM + IRON TRIANGLES that PARALYZE government and undermine DEMOCRATIC ACCOUNTABILITY?",
    options: ['The End of Liberalism', 'Who Governs?', 'The Power Elite', 'The Semisovereign People'],
    correctIndex: 0,
    explanation: 'THE END OF LIBERALISM: The Second Republic of the United States (Theodore Lowi 1969) — landmark critique of modern American interest group politics; argued post-New Deal explosion of interest groups produced INTEREST GROUP LIBERALISM (Lowi term) + HYPERPLURALISM (too many groups paralyze) + IRON TRIANGLES (committee + agency + interest group sub-governments capturing policy areas); CHALLENGED Dahl 1961 pluralist optimism; argued Congress increasingly delegates authority to bureaucracy + interest groups + courts undermining democratic accountability; foundation for ISSUE NETWORK concept (Heclo 1978 expanded with looser groupings of experts + advocates) + AGENCY CAPTURE (Stigler 1971); REQUIRED reading for understanding modern interest group politics + bureaucratic governance.'
  },
  {
    id: 'govparti-ent-6',
    partTitle: 'Patterns & Examples',
    question: 'Which 1956 BOOK by C. WRIGHT MILLS argued that AMERICAN POLITICS is dominated by an INTERLOCKING ELITE of CORPORATE + MILITARY + POLITICAL leaders rather than COMPETING INTEREST GROUPS?',
    options: ['Who Governs?', 'The Power Elite', 'The End of Liberalism', 'The Semisovereign People'],
    correctIndex: 1,
    explanation: 'THE POWER ELITE (C. Wright Mills 1956) — landmark sociological critique; argued American politics dominated by INTERLOCKING ELITE of (1) CORPORATE leaders (top business executives), (2) MILITARY leaders (Pentagon top brass), (3) POLITICAL leaders (top federal officials); CHALLENGED Dahl 1961 pluralist view; argued elite shares similar background (Ivy League + upper-class + WASP historically) + circulates between sectors; foundation for ELITISM theory; CONFIRMED empirically by Gilens + Page 2014 Testing Theories (~1,800 policy outcomes; economic elite + business interests have substantial impact; average citizens + mass public have near-zero independent influence); modern manifestation — wealthy mega-donors (Adelson + Soros + Mercer + Koch + Bloomberg + Musk) + 0.01% provide 70%+ of political money.'
  },
  // Part 4 — Connections & Interactions
  {
    id: 'govparti-ent-7',
    partTitle: 'Connections & Interactions',
    question: "Which 2012 STUDY by IYENGAR, SOOD + LELKES established AFFECTIVE POLARIZATION (emotional dislike of out-party) as more powerful than IDEOLOGICAL POLARIZATION in modern American politics?",
    options: ['Affect, Not Ideology', 'The Big Sort', 'Asymmetric Politics', 'Off Center'],
    correctIndex: 0,
    explanation: 'AFFECT, NOT IDEOLOGY: A Social Identity Perspective on Polarization (Shanto Iyengar + Gaurav Sood + Yphtach Lelkes 2012) — landmark study establishing AFFECTIVE POLARIZATION (emotional dislike of out-party + warmth toward in-party) as MORE POWERFUL than IDEOLOGICAL POLARIZATION; OUT-PARTY FEELING THERMOMETERS — ~50° in 1980 → ~20° in 2024 (lower than racial out-groups); IN-PARTY FEELING ~75° steady; SOCIAL DISTANCE INCREASING — partisans don\'t want children to marry across party lines (5% in 1960 → ~50% in 2020s); foundation for understanding modern partisan dynamics; related to LEVENDUSKY 2009 PARTISAN SORTING + MASON 2018 MEGA-IDENTITY (Uncivil Agreement combining race + religion + region + culture into 2 mega-coalitions).'
  },
  {
    id: 'govparti-ent-8',
    partTitle: 'Connections & Interactions',
    question: "Which 1971 ARTICLE by GEORGE STIGLER established AGENCY CAPTURE — the theory that REGULATORY AGENCIES come to serve the INTERESTS of REGULATED INDUSTRIES rather than the PUBLIC?",
    options: ['The Theory of Economic Regulation', 'Iron Triangles in Action', 'The Captured Economy', 'Public Choice'],
    correctIndex: 0,
    explanation: 'THE THEORY OF ECONOMIC REGULATION (George Stigler 1971) — landmark article establishing AGENCY CAPTURE; argued REGULATORY AGENCIES come to serve INTERESTS of REGULATED INDUSTRIES rather than PUBLIC INTEREST; mechanism — concentrated industry interests have stronger incentive + resources to influence agencies than diffuse public; REVOLVING DOOR — officials move between agency + industry; INDUSTRY EXPERTISE — agencies depend on industry information + technical staff; INFORMATION ASYMMETRY; modern examples — FAA + Boeing 737 MAX certification scandal + FDA + pharmaceutical industry + SEC + Wall Street + EPA + chemical industry; FOUNDATION for public choice theory + connects to LOWI 1969 iron triangles + HECLO 1978 issue networks; LOPER BRIGHT 2024 reduced Chevron deference partly motivated by capture concerns.'
  },
  // Part 5 — Change Over Time
  {
    id: 'govparti-ent-9',
    partTitle: 'Change Over Time',
    question: "Which 2010 SCOTUS DECISION fundamentally TRANSFORMED CAMPAIGN FINANCE by holding CORPORATIONS have 1ST AMENDMENT speech rights for INDEPENDENT POLITICAL EXPENDITURES?",
    options: ['Buckley v. Valeo (1976)', 'McConnell v. FEC (2003)', 'Citizens United v. FEC (2010)', 'McCutcheon v. FEC (2014)'],
    correctIndex: 2,
    explanation: 'CITIZENS UNITED v. FEC (2010) — landmark 5-4 SCOTUS Kennedy majority decision; HELD CORPORATIONS have 1st Amendment speech rights for INDEPENDENT POLITICAL EXPENDITURES; reasoning — government cannot restrict political speech based on speaker identity; STRUCK BCRA Section 203 (electioneering communications by corporations + unions in 30/60 days before election); REVERSED Austin v. Michigan Chamber of Commerce 1990; PRESERVED — direct contributions banned (Tillman Act 1907) + disclosure requirements; FOLLOWED 2 months later by SpeechNow.org v. FEC 2010 DC Circuit creating Super PACs (unlimited individual contributions to independent expenditure-only PACs); MCCUTCHEON v. FEC 2014 struck aggregate individual limits; transformed campaign finance into ~$15B 2024 cycle + 0.01% provide 70%+ of political money + mega-donor era.'
  },
  {
    id: 'govparti-ent-10',
    partTitle: 'Change Over Time',
    question: 'Which 2000 BOOK by ROBERT PUTNAM documented the DECLINE of CIVIC ENGAGEMENT + SOCIAL CAPITAL in America since the 1960s?',
    options: ['The Great Disruption', 'Bowling Alone', 'Diminished Democracy', 'Coming Apart'],
    correctIndex: 1,
    explanation: 'BOWLING ALONE: The Collapse and Revival of American Community (Robert Putnam 2000) — landmark book documenting DECLINE of CIVIC ENGAGEMENT + SOCIAL CAPITAL in America since 1960s; bowling league participation collapsed (people still bowl but alone, not in leagues); declining membership in PTAs + Rotary + Elks + League of Women Voters + labor unions + churches + community organizations; INTEREST GROUP UNIVERSE simultaneously EXPLODED (~5,000 groups 1960 → ~25,000+ today); but new groups are PROFESSIONAL ADVOCACY (Skocpol 2003 Diminished Democracy) — federated grassroots organizations replaced by DC-based professional advocacy with paid staff + minimal member engagement; transformation of American civic life with implications for democratic participation + interest group representation.'
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'govparti-ent-11',
    partTitle: 'Problem-Solving Workshop',
    question: "In FEDERALIST 10 (1787), MADISON argued the CURE for the MISCHIEFS of FACTION is creating a LARGE, EXTENDED REPUBLIC because:",
    options: [
      'A small republic eliminates faction by enforcing unity through religious establishment + censorship laws.',
      'An extended republic encompasses MULTIPLE COMPETING FACTIONS that CHECK EACH OTHER + REPRESENTATION refines public views through chosen body of citizens.',
      "Direct democracy is the only safeguard against majority tyranny because every citizen votes on every law.",
      "The federal government should ban factions outright through constitutional amendment + criminal prosecution of organizers.",
    ],
    correctIndex: 1,
    explanation: 'FEDERALIST 10 (Madison 1787) — landmark argument; defined FACTION as "a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens, or to the permanent and aggregate interests of the community"; ARGUED the CURE for MISCHIEFS of FACTION is creating a LARGE, EXTENDED REPUBLIC because (1) ENCOMPASSES MULTIPLE COMPETING FACTIONS that CHECK EACH OTHER (no single faction can dominate); (2) REPRESENTATION refines public views "through the medium of a chosen body of citizens, whose wisdom may best discern the true interest of their country"; rejected REMOVING CAUSES of faction (would require eliminating liberty or enforcing unity — both unacceptable); FOUNDATION for American pluralist tradition + checks + balances + extended republic theory.'
  },
  {
    id: 'govparti-ent-12',
    partTitle: 'Problem-Solving Workshop',
    question: "In FEDERALIST 51 (1788), MADISON's most famous principle for CONSTITUTIONAL DESIGN is:",
    options: [
      "'The accumulation of all powers, legislative, executive, and judiciary, in the same hands... may justly be pronounced the very definition of tyranny.'",
      "'Ambition must be made to counteract ambition.'",
      "'The judiciary is beyond comparison the weakest of the three departments of power.'",
      "'Energy in the executive is a leading character in the definition of good government.'",
    ],
    correctIndex: 1,
    explanation: 'FEDERALIST 51 (Madison 1788) — most famous principle: "AMBITION MUST BE MADE TO COUNTERACT AMBITION"; argued for SEPARATION OF POWERS + CHECKS + BALANCES as means of preventing tyranny; full quote: "the great security against a gradual concentration of the several powers in the same department, consists in giving to those who administer each department the necessary constitutional means and personal motives to resist encroachments of the others. The provision for defense must in this, as in all other cases, be made commensurate to the danger of attack. Ambition must be made to counteract ambition"; also articulated DOUBLE SECURITY of FEDERALISM ("a double security arises to the rights of the people. The different governments will control each other, at the same time that each will be controlled by itself"); foundation of American constitutional design; (A) is from Federalist 47; (C) is from Federalist 78 (Hamilton); (D) is from Federalist 70 (Hamilton).'
  },
  // Part 7 — AP Review
  {
    id: 'govparti-ent-13',
    partTitle: 'AP Review',
    question: 'Which 2018 SCOTUS DECISION held PUBLIC EMPLOYEES CANNOT be required to PAY UNION DUES — overruled Abood v. Detroit BoE 1977 + significantly weakened public sector unions?',
    options: ['Abood v. Detroit BoE', 'Friedrichs v. CTA', 'Janus v. AFSCME', 'Harris v. Quinn'],
    correctIndex: 2,
    explanation: 'JANUS v. AFSCME (2018) — 5-4 SCOTUS Alito majority (joined by Roberts + Kennedy + Thomas + Gorsuch); HELD PUBLIC EMPLOYEES CANNOT be required to PAY UNION DUES (or "agency fees" / "fair share fees" for non-union members); reasoning — compelling speech violation under 1st AMENDMENT (forcing non-members to pay for union political speech they disagree with); OVERRULED Abood v. Detroit Board of Education (1977) which had upheld agency fees for non-union members covering collective bargaining costs (not political activity); IMPACT — significantly weakened public sector unions (~32% public density vs ~6% private); union density continued decline (1955 ~35% → 2024 ~10%); ~$100M+ dues revenue lost; brought by Mark Janus IL state employee + funded by National Right to Work Legal Defense Foundation; followed earlier Friedrichs v. CTA 2016 (4-4 after Scalia death) + Harris v. Quinn 2014; REQUIRED AP Government case.'
  },
  {
    id: 'govparti-ent-14',
    partTitle: 'AP Review',
    question: 'Which 1976 SCOTUS DECISION established the "MONEY = SPEECH" framework — struck SPENDING LIMITS as 1st Amendment violation but UPHELD CONTRIBUTION LIMITS as anti-corruption measure?',
    options: ['Buckley v. Valeo (1976)', 'First National Bank v. Bellotti (1978)', 'McConnell v. FEC (2003)', 'Citizens United v. FEC (2010)'],
    correctIndex: 0,
    explanation: 'BUCKLEY v. VALEO (1976) — landmark per curiam SCOTUS decision establishing MODERN CAMPAIGN FINANCE FRAMEWORK; STRUCK SPENDING LIMITS as unconstitutional under 1st Amendment ("MONEY = SPEECH" framework — restricting spending restricts speech); UPHELD CONTRIBUTION LIMITS as constitutional (anti-corruption interest justifies); STRUCK individual independent expenditure limits; FOUNDATION for 50 years of campaign finance jurisprudence; followed by First National Bank v. Bellotti 1978 (corporate political speech rights) + McConnell v. FEC 2003 (upheld BCRA 2002) + Citizens United 2010 (struck BCRA Section 203 + corporate independent expenditures) + SpeechNow 2010 (Super PACs) + McCutcheon 2014 (struck aggregate individual limits); REQUIRED AP Government case.'
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

export function getEntranceQuizParts() {
  return [
    { partTitle: 'Core Concepts' },
    { partTitle: 'Key Processes' },
    { partTitle: 'Patterns & Examples' },
    { partTitle: 'Connections & Interactions' },
    { partTitle: 'Change Over Time' },
    { partTitle: 'Problem-Solving Workshop' },
    { partTitle: 'AP Review' }
  ]
}
