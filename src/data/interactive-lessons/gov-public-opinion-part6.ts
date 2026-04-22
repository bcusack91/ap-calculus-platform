export const govPublicOpinionPart6Data = {
  topicSlug: 'gov-public-opinion',
  sections: [
    {
      id: 'govpubli6-intro',
      type: 'text' as const,
      content: `
# 📊 Public Opinion & Political Socialization

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| 5-step framework for analyzing public opinion + polling questions |
| Worked example: Why polls underestimated Trump 2016 + 2020 |
| Worked example: How to evaluate poll quality + read a poll |
| Worked example: How to interpret partisan opinion gap on contested issue (climate change) |
| Foundational documents: Federalist 10 (factions); Federalist 49 (constitutional change deliberation); Madison letters on public opinion |

> 🔑 Key idea: AP FRQ questions on PUBLIC OPINION + POLLING require systematic ANALYSIS — first IDENTIFY the question type (factual interpretation? methodological evaluation? policy implication?), then IDENTIFY relevant CONCEPTS (random sampling, MOE, sources of error, motivated reasoning, agenda-setting, etc.), then APPLY to specific situation, then CONNECT to broader institutional + political context, then PREDICT impact on policymaking + elections + democratic accountability. WORKED EXAMPLES of polling failures (2016 + 2020 Trump underestimation) + poll quality evaluation (sample size + MOE + methodology + dates + sponsor + question wording) + partisan opinion gaps (climate change as case study) demonstrate the framework. FOUNDATIONAL DOCUMENTS connect public opinion to constitutional design — Federalist 10 on factions, Federalist 49 on constitutional change requiring deliberation, Federalist 71 on senatorial check on popular passions.
      `
    },
    {
      id: 'govpubli6-content',
      type: 'text' as const,
      content: `
## 5-Step Framework for Public Opinion Analysis

When analyzing AP FRQ questions about public opinion + polling, work through:

### Step 1 — IDENTIFY the question type

| Question Type | Approach |
|---|---|
| **FACTUAL INTERPRETATION** (poll data presented) | Read carefully + identify central trend/gap; compute percentages + differences; identify any baseline comparison |
| **METHODOLOGICAL EVALUATION** (poll quality assessment) | Apply criteria: sample size, MOE, methodology, dates, sponsor, question wording, weighting |
| **POLICY IMPLICATION** (how does opinion affect policy?) | Apply linkage frameworks: presidential responsiveness, congressional voting, judicial constraint, electoral feedback |
| **POLITICAL CONSEQUENCES** (how does opinion affect parties/coalitions/elections?) | Apply party identification + motivated reasoning + sorting + negative partisanship frameworks |
| **CONSTITUTIONAL/DEMOCRATIC** (how does opinion fit democratic theory?) | Apply Madisonian institutional design + delegate vs trustee + counter-majoritarian considerations |

### Step 2 — IDENTIFY relevant CONCEPTS

Common AP-relevant concepts:
- **POLLING METHODOLOGY** — random sampling, MOE, sources of error (sampling, selection, non-response, social desirability, question wording)
- **POLL TYPES** — benchmark, tracking, exit, focus group, push polls
- **POLITICAL SOCIALIZATION** — agents (family, education, religion, peers, media, generational events, geography, race/gender)
- **PARTY IDENTIFICATION** — perceptual screen, motivated reasoning, partisan sorting, negative partisanship
- **MEDIA EFFECTS** — agenda-setting, framing, priming, hostile media perception, partisan media ecosystem
- **REPRESENTATION MODELS** — delegate, trustee, politico
- **OPINION-POLICY LINKAGE** — responsiveness, intensity vs numbers, institutional filters

### Step 3 — APPLY to specific situation

- Use FACTS provided in question + bring in OUTSIDE EVIDENCE from coursework
- Apply concepts EXPLICITLY (don't assume reader knows what you mean)
- Be SPECIFIC about which agent/concept/effect operates here

### Step 4 — CONNECT to broader institutional + political context

- How does this fit MADISONIAN DESIGN (filtering opinion through institutions)?
- How does this affect ELECTORAL ACCOUNTABILITY?
- How does this interact with FEDERALISM + SEPARATION OF POWERS + JUDICIAL REVIEW?
- How does this connect to CIVIL LIBERTIES + CIVIL RIGHTS?

### Step 5 — PREDICT impact on POLICYMAKING + ELECTIONS + DEMOCRATIC ACCOUNTABILITY

- Will opinion translate into POLICY CHANGE? Through what channels? With what intensity gap?
- Will opinion shift VOTING BEHAVIOR? In which direction? Among which groups?
- Will opinion strengthen or weaken DEMOCRATIC LEGITIMACY + INSTITUTIONAL TRUST?

## Worked Example 1: Why Polls Underestimated Trump 2016 + 2020

### Step 1 — Question type
Methodological evaluation + factual interpretation of polling failures across two elections.

### Step 2 — Relevant concepts
NON-RESPONSE BIAS, education weighting, sampling methodology, house effects, "shy Trump voter" phenomenon, voter file calibration.

### Step 3 — Apply
**2016 results**: National polls showed Clinton +3; she actually won popular vote +2.1 (within MOE). State polls in Rust Belt failed dramatically — MI + PA + WI all called for Clinton; Trump won all three by ~1 pt; Trump won Electoral College 304-227.
**2020 results**: National polls showed Biden +8; he actually won by +4.5 (outside MOE). State polls again underestimated Trump in FL + IA + OH + TX + NC. Biden won 306-232 narrowly.
**Causes**:
- **NON-RESPONSE BIAS** — Trump voters less likely to participate in polls (distrust of media/establishment)
- **EDUCATION WEIGHTING** — pollsters historically didn't weight by education; non-college Whites became central to Trump coalition + were underrepresented in samples
- **"SHY TRUMP VOTER" / SOCIAL DESIRABILITY** — some Trump voters reluctant to admit support to pollsters (controversial; empirical research mixed on magnitude)
- **COVID-ERA effects 2020** — Trump voters less likely to be home + answering pollsters during stay-at-home orders
- **STATE POLLING POOR QUALITY** — academic + media organizations cut state polling investment
- **HOUSE EFFECTS** visible

### Step 4 — Broader context
Polling failures eroded TRUST IN POLLING + MEDIA institutions; reinforced Trump narrative of "fake news" + "fake polls"; produced mistaken expectations among Dems leading to election shock + post-election processing difficulties; raised questions about whether journalism + analytical industry can effectively serve democratic accountability if they fail to predict outcomes.

### Step 5 — Predict
- POLLING INDUSTRY would adopt reforms (and did by 2024)
- COMPETITION from PREDICTION MARKETS (Polymarket + Kalshi) would intensify
- Political analysts more cautious about probabilistic forecasts
- 2024 polling more accurate (Trump +1.5% popular vote within MOE for most aggregators)

## Worked Example 2: How to Evaluate Poll Quality

When evaluating any poll, check:

### Critical Quality Indicators

| Criterion | What to Check |
|---|---|
| **POLLSTER REPUTATION** | Pew + NYT/Siena + ABC/WaPo + Marquette + Quinnipiac + Marist = high-quality reference standards; AAPOR membership; transparent methodology |
| **SAMPLE SIZE (n)** | Larger n = smaller MOE; n=1000 → MOE ≈ ±3.1%; n=500 → ±4.4%; n=100 → ±9.8% |
| **MARGIN OF ERROR (MOE)** | At what confidence level (typically 95%); only accounts for sampling error; does NOT account for non-sampling error |
| **METHODOLOGY** | Phone (RDD) vs cellphone-included vs online probability panel (Pew ATP, NORC AmeriSpeak, Ipsos KnowledgePanel) vs online opt-in with weighting |
| **SAMPLE COMPOSITION** | All adults vs registered voters vs likely voters; demographic weighting transparency |
| **DATES (FIELD PERIOD)** | Recent (last 1-2 weeks) vs old; events between field period + reading change context |
| **QUESTION WORDING** | Exact wording matters enormously ("welfare" vs "assistance"; "death tax" vs "estate tax") |
| **QUESTION ORDER** | Earlier questions can prime later responses |
| **SPONSOR** | Independent academic/media vs partisan/advocacy groups (different incentives) |
| **HOUSE EFFECTS** | Does this pollster systematically lean (Rasmussen → GOP; Civiqs → Dem; etc.) |

### Red Flags

- **PUSH POLLS** (disguised negative campaigning) — banned by AAPOR
- **TINY SAMPLES** (<300) with implausibly precise claims
- **SPONSOR-FRIENDLY RESULTS** (poll commissioned by candidate/group + showing them ahead) — treat skeptically
- **OUTDATED FIELD PERIOD** (poll from weeks ago presented as current)
- **CHERRY-PICKED CROSSTABS** (presenting only favorable subgroups)
- **OPT-IN INTERNET POLLS** without weighting (Drudge online polls)
- **SINGLE OUTLIER POLLS** — wait for confirmation; trust AGGREGATORS over individual polls

### Use Aggregators

- **REALCLEARPOLITICS** — simple average
- **FIVETHIRTYEIGHT** (closed 2025) — weighted by quality
- **SILVER BULLETIN** (Nate Silver post-538)
- **NYT UPSHOT** — quality polling + analysis
- **THE ECONOMIST FORECAST** — Andrew Gelman + Merlin Heidemanns probabilistic
- **DECISION DESK HQ + RACE TO THE WH**
- **POLYMARKET + KALSHI** — prediction markets

## Worked Example 3: Climate Change Partisan Opinion Gap

### Background
2024: 78% Dem urgent climate action vs 23% Rep urgent climate action (largest partisan gap of any major issue).

### Step 1 — Question type
Factual interpretation + political consequences of partisan opinion gap on contested scientific/policy issue.

### Step 2 — Relevant concepts
PARTY IDENTIFICATION as perceptual screen + motivated reasoning + partisan sorting + agenda-setting + framing + asymmetric polarization.

### Step 3 — Apply
**HOW DID GAP EMERGE?**
- 1988 GHW Bush ran promising climate action (cap-and-trade + Kyoto-like framework)
- 2008 McCain favored cap-and-trade as GOP nominee
- 2010 cap-and-trade died in Senate filibuster (Lieberman + ConservaDems opposed)
- 2010+ Tea Party + Koch network mobilized GOP rightward on climate (oil + gas industry funding climate skepticism)
- Trump 2017 withdrew US from Paris Agreement
- IRA 2022 (Biden) Largest climate investment in US history but partisan
- 2024 GOP Project 2025 + Trump rolled back Biden climate policy

**WHAT DRIVES THE GAP?**
- PARTISAN MOTIVATED REASONING — Reps process climate science through GOP-rejection lens
- ELITE CUES — Rep elites (Trump + GOP leaders + conservative media) signal skepticism; Dem elites + scientists signal urgency
- INTEREST GROUP ALLIANCES — oil + gas industry GOP-aligned + funds climate skepticism (Koch, Exxon historical campaigns); environmental groups + green energy + scientists Dem-aligned
- IDEOLOGICAL ASSOCIATION — climate action requires GOVERNMENT REGULATION (anathema to free-market conservatism); even though conservatives could support nuclear + technology + market solutions
- CULTURAL/IDENTITY — climate associated with progressive coastal urban elite (CA + NY + TX college campuses); rural + working-class + heartland Reps reject as outside cultural identity
- FEDERALISM PATCHWORK — California climate leadership; red states resist

### Step 4 — Broader context
Climate is largest example of ASYMMETRIC POLARIZATION — once bipartisan issue (1988 + 2008), now polarized along party lines. Affects US ability to act on global problem requiring sustained policy commitment across administrations. Affects democratic accountability — Reps don't pay political price for climate stance among Rep base; Dems vulnerable to Rep attacks on energy costs from green policies.

### Step 5 — Predict
- Climate policy will continue OSCILLATING with administration changes (Obama-Trump-Biden-Trump cycle)
- STATE-LEVEL climate action (CA + NY + WA) will outpace federal
- Subnational coalitions (US Climate Alliance) emerged
- Generational replacement may eventually shift Rep position (Gen Z more concerned even within GOP)
- International leadership challenge — China + EU + others lead while US wavers
- Adaptation challenge intensifies (climate disasters, insurance crisis, agriculture)

## Foundational Documents on Public Opinion

### Federalist 10 (Madison, 1787)

**On factions + majority tyranny:**
- DEFINED FACTION = "a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adversed to the rights of other citizens, or to the permanent and aggregate interests of the community"
- IDENTIFIED CAUSES OF FACTION = "sown in the nature of man" — different opinions, attachments, interests
- REJECTED ELIMINATING FACTIONS (would require destroying liberty)
- ARGUED LARGE REPUBLIC + REPRESENTATION + DIVERSITY would CONTROL faction effects
- Multiple factions in extended republic CHECK each other — no single majority can dominate
- REPRESENTATIVES "REFINE AND ENLARGE" public views via deliberation

**Connection to public opinion**: Madison saw public opinion as POTENTIALLY DANGEROUS (passions could overwhelm interests) + designed institutions to FILTER + DELIBERATE rather than directly implement.

### Federalist 49 (Madison)

**On constitutional change requiring careful deliberation rather than passions:**
- REJECTED frequent appeals to public to amend Constitution
- "VENERATION which time bestows on every thing" provides STABILITY
- POPULAR PASSIONS without REASON would be dangerous
- Constitutional change should require DELIBERATION + SUSTAINED MAJORITY across institutions (Article V supermajorities)

### Federalist 71 (Hamilton)

**On senatorial check on popular passions:**
- 6-year Senate terms designed to insulate from immediate public passions
- Senate should provide STABILITY + DELIBERATION
- Hamilton famously: "the people commonly INTEND the PUBLIC GOOD" but "do not always REASON RIGHT about the means of promoting it"
- Senate should help correct momentary errors in public sentiment

### Federalist 78 (Hamilton)

**On judicial independence from public opinion:**
- LIFETIME TENURE for judges
- COUNTER-MAJORITARIAN role to protect rights against majorities
- Judiciary "least dangerous branch" but must be insulated to perform constitutional duty

### Madison's Letters on Public Opinion

- Madison continued writing on public opinion throughout his life
- Argued for REFINED public opinion through education + deliberation + free press
- Concerned about both MAJORITY TYRANNY + DEMAGOGUERY
- Foundational TENSION in American democracy: respect for popular sovereignty vs need for institutional filters

> 🔑 Key takeaway: AP FRQ on PUBLIC OPINION requires 5-step ANALYSIS — identify question type (factual interpretation, methodological evaluation, policy implication, political consequences, constitutional/democratic), identify relevant concepts (polling methodology + sources of error + party ID + motivated reasoning + media effects + representation models + opinion-policy linkage), apply to specific situation, connect to broader context (Madisonian design + electoral accountability + federalism + civil liberties/rights), predict impact on policymaking + elections + democratic accountability. WORKED EXAMPLES: (1) Trump polling underestimation 2016+2020 (non-response bias + education weighting + shy Trump + COVID + state polling cuts → reforms by 2024); (2) poll quality evaluation (pollster reputation + sample size + MOE + methodology + dates + question wording + sponsor + house effects + use aggregators not individual polls); (3) climate change partisan gap (78 vs 23 Dem-Rep largest gap; emerged 2010+ via Tea Party + Koch + GOP elite cues + interest group alliances + ideological + cultural identity + federalism patchwork). FOUNDATIONAL DOCUMENTS: Federalist 10 (factions + extended republic + representation refines + enlarges), Federalist 49 (constitutional change requires deliberation not passions), Federalist 71 (senatorial check on popular passions), Federalist 78 (judicial independence + counter-majoritarian); Madison letters on need for refined public opinion through education + deliberation + free press.
      `
    },
    {
      id: 'govpubli6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "How does the 5-STEP FRAMEWORK for analyzing public opinion + polling questions help you APPROACH AP FRQ questions, and what CONCEPTS should you have ready to apply?",
            options: [
              "5-STEP FRAMEWORK FOR PUBLIC OPINION FRQ ANALYSIS: (1) IDENTIFY QUESTION TYPE — FACTUAL INTERPRETATION (poll data presented; identify central trend/gap; compute percentages + differences), METHODOLOGICAL EVALUATION (poll quality assessment using sample size + MOE + methodology + dates + sponsor + question wording + weighting), POLICY IMPLICATION (how does opinion affect policy via presidential responsiveness + congressional voting + judicial constraint + electoral feedback), POLITICAL CONSEQUENCES (how does opinion affect parties/coalitions/elections via party ID + motivated reasoning + sorting + negative partisanship), CONSTITUTIONAL/DEMOCRATIC (how does opinion fit democratic theory via Madisonian institutional design + delegate vs trustee + counter-majoritarian considerations); (2) IDENTIFY RELEVANT CONCEPTS — POLLING METHODOLOGY (random sampling, MOE, sources of error: sampling, selection, non-response, social desirability, question wording, question order, house effects), POLL TYPES (benchmark, tracking, exit, focus group, push polls — banned by AAPOR), POLITICAL SOCIALIZATION (8 agents: family ~70% strongest → education → religion → peers → media → generational events → geography → race/gender), PARTY IDENTIFICATION (perceptual screen, motivated reasoning per Kunda 1990 + Lodge + Taber 2000, partisan sorting per Levendusky 2009 + Mason 2018, negative partisanship per Abramowitz), MEDIA EFFECTS (agenda-setting per McCombs + Shaw 1972, framing per Tversky + Kahneman 1981, priming per Iyengar + Kinder NEWS THAT MATTERS 1987, hostile media perception per Vallone + Ross + Lepper 1985, partisan media ecosystem), REPRESENTATION MODELS (delegate, trustee per Burke 1774 SPEECH TO ELECTORS OF BRISTOL, politico — most common in practice), OPINION-POLICY LINKAGE (responsiveness, intensity vs numbers, institutional filters: filibuster + Electoral College + gerrymandering + judicial independence + federalism); (3) APPLY TO SPECIFIC SITUATION — use FACTS provided in question + bring in OUTSIDE EVIDENCE from coursework; apply concepts EXPLICITLY (don't assume reader knows what you mean); be SPECIFIC about which agent/concept/effect operates here; cite specific examples (Literary Digest 1936, Truman-Dewey 1948, 2016 + 2020 polling failures, Brown v. Board, Obergefell, Dobbs, etc.); (4) CONNECT TO BROADER CONTEXT — how does this fit MADISONIAN DESIGN (Federalist 10 + 49 + 71 + 78 — institutions filter + refine + delay public opinion; Senate insulates from popular passions; judiciary counter-majoritarian; Article V supermajority for constitutional change)? how does this affect ELECTORAL ACCOUNTABILITY (retrospective voting per Fiorina; party brand effects)? how does this interact with FEDERALISM + SEPARATION OF POWERS + JUDICIAL REVIEW (state divergence from national majority on abortion + guns + drugs; Supreme Court overruling popular preferences)? how does this connect to CIVIL LIBERTIES + CIVIL RIGHTS (e.g., gay marriage opinion shift + Obergefell; abortion opinion + Dobbs)?; (5) PREDICT IMPACT — WILL OPINION TRANSLATE INTO POLICY CHANGE? through what channels? with what intensity gap (NRA + AIPAC + AARP + evangelicals + PhRMA + teachers unions winning despite lukewarm majorities)? WILL OPINION SHIFT VOTING BEHAVIOR? in which direction? among which groups? WILL OPINION STRENGTHEN OR WEAKEN DEMOCRATIC LEGITIMACY + INSTITUTIONAL TRUST? (post-Watergate + Iraq + financial crisis + COVID + Trump-era trust collapse). KEY EVIDENCE TO HAVE READY: APUSH-related — civil rights opinion evolution (32%→90%+ school integration; 4%→94% interracial marriage); gay marriage revolution (12%→71% in 35 years); abortion stable then post-Dobbs reaction; trust in government 75% 1958 → 16-22%; polling history (Literary Digest 1936 + Gallup + Truman-Dewey 1948 + 2016/2020 underestimation + 2024 reforms); media ecosystem (Joe Rogan + manosphere podcasts + Trump 2024 victory); demographic patterns (gender gap + diploma divide + racial/ethnic + religious + generational + regional + income).",
              "There is no 5-step framework of any kind during the entire period in any region of the United States with no question type identification (factual interpretation + methodological evaluation + policy implication + political consequences + constitutional/democratic), no relevant concepts (polling methodology + poll types + political socialization + party identification + media effects + representation models + opinion-policy linkage), no application to specific situation, no connection to broader context (Madisonian design + electoral accountability + federalism + separation + judicial review + civil liberties/rights), no prediction of impact, and no FRQ analysis framework of any kind during the entire period in any region",
              "AP FRQ questions can be answered without ANALYSIS — just LIST any vaguely related vocabulary words of any kind under any circumstance with no 5-step framework (identify type + identify concepts + apply + connect + predict), no specific application of polling methodology + party ID + media effects + representation models, no Madisonian design + Federalist 10/49/71/78, no foundational documents, no civil rights + gay marriage + abortion + trust evolution evidence, and no proper FRQ approach of any kind during the entire period in any region of the United States during the period",
              "POLLING METHODOLOGY + PARTY IDENTIFICATION + MEDIA EFFECTS + REPRESENTATION MODELS + OPINION-POLICY LINKAGE are NOT relevant to AP Public Opinion FRQ questions of any kind under any circumstance with no random sampling + MOE + sources of error, no perceptual screen + motivated reasoning + partisan sorting + negative partisanship, no agenda-setting + framing + priming, no delegate + trustee + politico, no responsiveness + intensity vs numbers + institutional filters, and no proper relevant concepts of any kind during the entire period in any region of the United States during the period",
            ],
            correctAnswer: 0,
            explanation: '5-STEP PUBLIC OPINION FRQ FRAMEWORK: (1) IDENTIFY TYPE — factual interpretation (poll data + percentages/differences), methodological evaluation (sample size + MOE + methodology + dates + sponsor + wording + weighting), policy implication (presidential responsiveness + congressional voting + judicial constraint + electoral feedback), political consequences (party ID + motivated reasoning + sorting + negative partisanship), constitutional/democratic (Madisonian + delegate vs trustee + counter-majoritarian). (2) IDENTIFY CONCEPTS — polling methodology (random sampling, MOE, sources of error: sampling/selection/non-response/social desirability/wording/order/house), poll types (benchmark/tracking/exit/focus/push banned by AAPOR), political socialization (8 agents: family ~70% → education → religion → peers → media → generational → geography → race/gender), party ID (perceptual screen + motivated reasoning per Kunda 1990 + Lodge + Taber 2000 + partisan sorting per Levendusky 2009 + Mason 2018 + negative partisanship per Abramowitz), media effects (agenda-setting per McCombs + Shaw 1972, framing per Tversky + Kahneman 1981, priming per Iyengar + Kinder 1987, hostile media per Vallone + Ross + Lepper 1985), representation models (delegate, trustee per Burke 1774, politico most common), opinion-policy linkage (responsiveness, intensity vs numbers, institutional filters: filibuster + EC + gerrymandering + judicial independence + federalism). (3) APPLY — facts + outside evidence; concepts EXPLICITLY; specific examples (Literary Digest 1936, Truman-Dewey 1948, 2016 + 2020 polling failures, Brown, Obergefell, Dobbs). (4) CONNECT — Madisonian design (Federalist 10/49/71/78); electoral accountability (retrospective voting per Fiorina); federalism + separation + judicial review interaction; civil liberties/rights connections. (5) PREDICT — policy change channels + intensity gap; voting shifts; democratic legitimacy + institutional trust. EVIDENCE TO HAVE READY — civil rights opinion (32%→90%+ school integration; 4%→94% interracial marriage); gay marriage (12%→71% in 35 years); abortion stable + Dobbs reaction; trust 75% 1958 → 16-22%; polling history; media ecosystem (Rogan + manosphere); demographic patterns.'
          }
        ]
      }
    },
    {
      id: 'govpubli6-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Madison's Federalist essay (1787) on FACTIONS, MAJORITY TYRANNY, and the EXTENDED REPUBLIC remedy through representation + diversity.",
            answer: 'Federalist 10',
            acceptableAnswers: ['Federalist 10', 'Federalist No. 10', 'Federalist No 10', 'Federalist Number 10', 'Federalist Paper 10', 'Federalist Paper No. 10', 'F10'],
            hint: 'Famous defense of large republic; defined faction = "number of citizens... united and actuated by some common impulse of passion, or of interest, adversed to the rights of other citizens, or to the permanent and aggregate interests of the community"; rejected eliminating factions (would require destroying liberty); argued large republic + representation + diversity controls faction effects via multiple checking factions.'
          },
          {
            prompt: "Hamilton's Federalist essay arguing for SENATORIAL CHECK on popular passions via 6-year terms; quote: 'the people commonly INTEND the PUBLIC GOOD' but 'do not always REASON RIGHT about the means.'",
            answer: 'Federalist 71',
            acceptableAnswers: ['Federalist 71', 'Federalist No. 71', 'Federalist No 71', 'Federalist Number 71', 'F71', 'Federalist Paper 71'],
            hint: 'Hamilton arguing for executive (presidency in actual essay context); discussed need for institutional check on momentary passions; Senate provides STABILITY + DELIBERATION; 6-year terms insulate Senate from immediate public passions; quote about people intending public good but not always reasoning right about means.'
          },
          {
            prompt: "Cognitive psychology framework by Kunda 1990 + Lodge + Taber 2000 — TENDENCY TO PROCESS INFORMATION in ways that confirm prior BELIEFS or IDENTITIES.",
            answer: 'motivated reasoning',
            acceptableAnswers: ['motivated reasoning', 'Motivated reasoning', 'Motivated Reasoning'],
            hint: 'Differential standards for accepting vs rejecting information; central to political psychology; explains why partisans see same data differently (economic perceptions through partisan lens); explains 61% Reps still doubt 2020 election; explains climate denial concentrated among Reps; explains COVID vaccine refusal correlated with Rep ID; explains hostile media perception (both sides see media as biased against them).'
          }
        ]
      }
    },
    {
      id: 'govpubli6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each FOUNDATIONAL DOCUMENT to its CONNECTION TO PUBLIC OPINION.**`,
      exercise: {
        dropdowns: [
          {
            label: "FEDERALIST 10 (Madison) — controlling FACTIONS via EXTENDED REPUBLIC + REPRESENTATION + DIVERSITY: ___",
            options: ['Large republic + representation refines + enlarges public views; multiple factions check each other', 'Constitutional change requires sustained deliberation not popular passions', '6-year Senate terms insulate from immediate public passions; people intend good but not always reason right', 'Lifetime tenure for judges; counter-majoritarian role protecting rights against majorities', 'Bill of Rights specifically enumerates limits on government action against individuals']
          },
          {
            label: "FEDERALIST 49 (Madison) — CONSTITUTIONAL CHANGE requires careful deliberation rather than popular passions: ___",
            options: ['Large republic + representation refines + enlarges public views; multiple factions check each other', 'Constitutional change requires sustained deliberation not popular passions', '6-year Senate terms insulate from immediate public passions; people intend good but not always reason right', 'Lifetime tenure for judges; counter-majoritarian role protecting rights against majorities', 'Bill of Rights specifically enumerates limits on government action against individuals']
          },
          {
            label: "FEDERALIST 78 (Hamilton) — JUDICIAL INDEPENDENCE from public opinion via LIFETIME TENURE; COUNTER-MAJORITARIAN role: ___",
            options: ['Large republic + representation refines + enlarges public views; multiple factions check each other', 'Constitutional change requires sustained deliberation not popular passions', '6-year Senate terms insulate from immediate public passions; people intend good but not always reason right', 'Lifetime tenure for judges; counter-majoritarian role protecting rights against majorities', 'Bill of Rights specifically enumerates limits on government action against individuals']
          }
        ],
        correctAnswers: ['Large republic + representation refines + enlarges public views; multiple factions check each other', 'Constitutional change requires sustained deliberation not popular passions', 'Lifetime tenure for judges; counter-majoritarian role protecting rights against majorities'],
        hint1: 'FEDERALIST 10 — Madison\'s most famous essay; defines FACTION; rejects eliminating (would require destroying liberty); identifies CAUSES "sown in the nature of man"; argues LARGE REPUBLIC + REPRESENTATION (not direct democracy) + DIVERSITY OF INTERESTS solves problem; "REFINE AND ENLARGE the public views"; multiple factions in extended republic CHECK each other.',
        hint2: 'FEDERALIST 49 — Madison rejected frequent appeals to public to amend Constitution; "VENERATION which time bestows on every thing" provides STABILITY; popular PASSIONS without REASON would be dangerous; constitutional change should require DELIBERATION + SUSTAINED MAJORITY across institutions; Article V supermajority requirements (2/3 + 3/4) reflect this principle.',
        hint3: 'FEDERALIST 78 — Hamilton on judiciary; LIFETIME TENURE for federal judges; COUNTER-MAJORITARIAN role to protect RIGHTS against MAJORITIES; "LEAST DANGEROUS BRANCH" (judges have no purse + no sword) but must be INSULATED from public opinion to perform constitutional duty; foundational for judicial independence; explains Marshall Court self-aware of public opinion (Marbury 1803) vs Roberts protection of ACA (NFIB 2012) to preserve legitimacy vs Dobbs 2022 reversed Roe DESPITE ~60% public support.'
      }
    },
    {
      id: 'govpubli6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "Apply the 5-STEP PUBLIC OPINION ANALYSIS FRAMEWORK to evaluate why GUN CONTROL POLICY OFTEN FAILS DESPITE 80%+ PUBLIC SUPPORT for UNIVERSAL BACKGROUND CHECKS.",
            options: [
              "GUN CONTROL POLICY FAILURE DESPITE 80%+ SUPPORT FOR UNIVERSAL BACKGROUND CHECKS — apply 5-STEP FRAMEWORK: (1) IDENTIFY QUESTION TYPE — POLICY IMPLICATION question (how does opinion fail to translate to policy) + POLITICAL CONSEQUENCES (interest group power) + CONSTITUTIONAL/DEMOCRATIC (institutional filters); (2) RELEVANT CONCEPTS — INTENSITY vs NUMBERS (small intense minorities vs lukewarm majorities), INTEREST GROUP POWER (NRA + Gun Owners of America mobilization), INSTITUTIONAL FILTERS (Senate filibuster requiring 60 votes), FEDERALISM (state-level variation), JUDICIAL INTERPRETATION (DC v. Heller 2008 individual right + McDonald 2010 incorporation + Bruen 2022 public carry expansion), CONGRESSIONAL RESPONSIVENESS to organized constituencies, PARTY POLARIZATION on guns; (3) APPLY TO SITUATION — KEY FACTS: Universal background checks supported by 80%+ across both parties consistently for decades; assault weapons ban supported by ~60%; red flag laws ~70%; YET legislative action consistently fails. WHY? (a) INTENSITY MISMATCH — supporters of gun control are MAJORITY but DIFFUSE + LUKEWARM; opponents (NRA + Gun Owners of America + concealed-carry advocates) are MINORITY but INTENSELY MOBILIZED — single-issue voters who threaten primary challenges + general election defeat for Republicans (and some Dems in red districts); NRA scorecard rates members + endorses + spends + mobilizes; (b) FILIBUSTER 60-VOTE REQUIREMENT — Senate cannot pass gun control legislation without 60 votes; even with 51 Dem majority + 49 Rep majority, gun control bills fail (e.g., Manchin-Toomey expanded background checks failed 2013 despite Newtown Sandy Hook elementary school shooting public outrage); (c) CONGRESSIONAL DISTRICT GEOGRAPHY — gerrymandered safe Republican districts have Rep voters who lean pro-gun + Republican primary voters even more pro-gun; Republican members face primary threat from gun rights challengers if they support gun control; (d) FEDERALISM PATCHWORK — SOME STATES (CA, NY, NJ, IL, MA, CT) have strict gun control; OTHER STATES (TX, FL, AZ, AL, MS) have permissive concealed/constitutional carry + stand-your-ground laws; STATE-LEVEL action substitutes for federal in some cases but creates uneven enforcement; (e) JUDICIAL INTERPRETATION — DC v. HELLER (2008 Scalia majority) established INDIVIDUAL right to bear arms (overturning previous militia interpretation); MCDONALD v. CHICAGO (2010) incorporated 2nd Am to states; NEW YORK STATE RIFLE & PISTOL ASSOC v. BRUEN (2022 Thomas) expanded public carry rights + established 'history + tradition' test for gun regulation; SCOTUS jurisprudence increasingly restricts gun regulation; (f) PARTY POLARIZATION — Dems near-uniform gun control; Reps near-uniform gun rights; previously bipartisan issue (Reagan personally + Brady Act 1993); polarized in 1990s+; cross-pressured legislators rare; (g) MEDIA POLARIZATION — Fox/Newsmax/OAN amplify gun rights framing + 2nd Am defense; MSNBC/CNN amplify gun control after mass shootings; partisan ecosystems reinforce existing views; (h) CONSTITUTIONAL ARGUMENTS — gun rights advocates frame Second Amendment as fundamental + non-negotiable; gun control advocates emphasize public safety + reasonable restrictions; constitutional debate elevates issue beyond ordinary policy debate; (4) BROADER CONTEXT — illustrates MADISONIAN DESIGN working partly as INTENDED — institutions filter + delay + sometimes DEFEAT majority preferences; Federalist 10 + 51 + 71 explicit goal was preventing direct popular implementation; intensity-mobilization politics + filibuster + federalism + judicial review all combine to filter gun control opinion; (5) PREDICT — UNIVERSAL BACKGROUND CHECKS unlikely to pass federal Senate with 60-vote requirement absent dramatic mass shooting + sustained public mobilization; STATE-LEVEL action will continue diverging (red states permissive + blue states restrictive); SUPREME COURT will continue restricting state-level gun regulation under Bruen 'history + tradition' test; BIPARTISAN SAFER COMMUNITIES ACT 2022 (post-Uvalde school shooting) was modest reform passed only after intense crisis; long-term prospects depend on whether intensity gap closes (e.g., gun control advocates becoming single-issue voters too — March for Our Lives 2018 attempted but limited durability).",
              "There is no gun control policy failure of any kind during the entire period in any region of the United States with no 80%+ public support for universal background checks, no Senate filibuster 60-vote requirement, no NRA + Gun Owners of America intense minority mobilization, no DC v. Heller 2008 individual right + McDonald 2010 incorporation + Bruen 2022 public carry expansion, no Manchin-Toomey 2013 failure post-Newtown, no Bipartisan Safer Communities Act 2022 post-Uvalde, no federalism patchwork (CA + NY + IL + MA strict vs TX + FL + AZ permissive), no party polarization on guns, no media polarization, and no gun control policy of any kind during the entire period in any region",
              "GUN CONTROL POLICY easily passes Congress because 80%+ public support translates DIRECTLY into legislation (rather than failing) of any kind under any circumstance with no Senate filibuster 60-vote barrier, no intensity mismatch between diffuse majority + intense NRA minority, no Manchin-Toomey 2013 failure, no judicial restriction via Heller + McDonald + Bruen, no federalism patchwork, no party polarization, and no proper analysis of policy failure of any kind during the entire period in any region of the United States during the period",
              "INTENSE MINORITIES NEVER outweigh LUKEWARM MAJORITIES (rather than often beating them via mobilization + lobbying + electoral threats) of any kind under any circumstance with no NRA + Gun Owners of America winning despite 80%+ background check support, no AIPAC sustaining Israel aid despite divided opinion, no AARP blocking Social Security/Medicare cuts, no evangelicals winning post-Dobbs despite ~60% pro-choice opinion, no PhRMA resisting drug pricing reform, no oil + gas industry slowing climate legislation, and no proper intensity vs numbers framework of any kind during the entire period in any region of the United States during the period",
            ],
            correctAnswer: 0,
            explanation: 'GUN CONTROL FAILURE DESPITE 80%+ BACKGROUND CHECK SUPPORT — 5-STEP FRAMEWORK: (1) TYPE — policy implication + political consequences + constitutional/democratic. (2) CONCEPTS — intensity vs numbers; interest group power (NRA + GOA); institutional filters (Senate filibuster); federalism (state variation); judicial interpretation (Heller 2008 + McDonald 2010 + Bruen 2022); congressional responsiveness to organized constituencies; party polarization. (3) APPLY — universal background checks 80%+ both parties decades; assault weapons ban ~60%; red flag laws ~70%; legislative action fails. WHY: (a) INTENSITY MISMATCH — supporters majority + diffuse + lukewarm; NRA + GOA minority + intensely mobilized + single-issue voters threatening primary defeats; NRA scorecard rates + endorses + spends + mobilizes. (b) FILIBUSTER 60-vote — Manchin-Toomey 2013 failed despite Newtown public outrage. (c) CONGRESSIONAL DISTRICT GEOGRAPHY — gerrymandered safe Rep districts pro-gun; Rep primary threats from gun rights challengers. (d) FEDERALISM — CA + NY + NJ + IL + MA + CT strict; TX + FL + AZ + AL + MS permissive concealed/constitutional carry + stand-your-ground; uneven enforcement. (e) JUDICIAL — Heller 2008 Scalia individual right (overturned militia interpretation); McDonald 2010 incorporated 2nd Am to states; Bruen 2022 Thomas expanded public carry + "history + tradition" test; SCOTUS increasingly restricts gun regulation. (f) PARTY POLARIZATION — previously bipartisan (Reagan personally + Brady Act 1993) → now polarized; cross-pressured rare. (g) MEDIA POLARIZATION — Fox/Newsmax/OAN amplify gun rights vs MSNBC/CNN amplify gun control. (h) CONSTITUTIONAL ARGUMENTS elevate beyond ordinary policy. (4) BROADER CONTEXT — illustrates MADISONIAN DESIGN working as INTENDED; Federalist 10 + 51 + 71 explicitly designed to filter + delay + sometimes defeat majority preferences. (5) PREDICT — universal background checks unlikely federal Senate 60-vote absent dramatic crisis + sustained mobilization; state-level diverging; SCOTUS restricting state regulation under Bruen "history + tradition"; Bipartisan Safer Communities Act 2022 post-Uvalde modest reform required intense crisis; long-term depends on intensity gap closing (March for Our Lives 2018 attempted limited durability).'
          }
        ]
      }
    }
  ]
}
