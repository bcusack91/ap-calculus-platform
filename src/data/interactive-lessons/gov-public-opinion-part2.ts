export const govPublicOpinionPart2Data = {
  topicSlug: 'gov-public-opinion',
  sections: [
    {
      id: 'govpubli2-intro',
      type: 'text' as const,
      content: `
# 📊 Public Opinion & Political Socialization

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Political socialization lifecycle (childhood → adolescence → early adulthood → middle adulthood → later adulthood) |
| Polling methodology in detail (random digit dial → cellphone → online panels → post-stratification weighting) |
| Question wording + framing effects + house effects |
| Aggregate processing of polls (RealClearPolitics, FiveThirtyEight, Silver Bulletin, Polymarket) |
| Public opinion + policymaking linkages (delegate, trustee, politico models) |

> 🔑 Key idea: Public opinion is FORMED through SOCIALIZATION (lifelong process with stages from childhood through later adulthood), MEASURED through POLLING (evolving methodology from face-to-face → RDD → cellphone → online panels), AGGREGATED + ANALYZED (RealClearPolitics, FiveThirtyEight averages, Silver Bulletin model, Polymarket prediction markets), and TRANSLATED INTO POLICY through representative behavior under different theoretical models (DELEGATE = vote constituent preferences; TRUSTEE = vote informed judgment per Burke; POLITICO = situational mix). Polling METHODOLOGY matters enormously — QUESTION WORDING ('welfare' vs 'assistance to the poor') + FRAMING EFFECTS + HOUSE EFFECTS (pollsters' systematic methodological biases) all shift results. POLL AGGREGATORS reduce variance via averaging; PROBABILISTIC FORECASTING MODELS (Silver, Economist) combine polls + fundamentals; PREDICTION MARKETS (Polymarket, Kalshi) aggregate decentralized betting. Modern polling FAILURES (2016 + 2020 underestimating Trump) reflect non-response bias + state-level methodology issues; 2024 polling more accurate after methodological reforms.
      `
    },
    {
      id: 'govpubli2-content',
      type: 'text' as const,
      content: `
## Political Socialization Lifecycle

POLITICAL SOCIALIZATION operates throughout the LIFESPAN with different agents dominant at different stages:

### Childhood (0-12 years)

- **FAMILY** transmits party identification + religious affiliation + basic political identification
- ~70% of children share parents' party identification by age 12
- **SCHOOL** introduces civic education + American government basics + Pledge of Allegiance + national symbols
- **PRIMARY ORIENTATIONS** form: nation, president, parties as basic categories
- Most children believe president is benevolent + government works for citizens (Easton + Hess "BENEVOLENT LEADER" research 1960s)

### Adolescence (13-17)

- Refinement + first independent political thinking
- **PEER INFLUENCE** grows; can challenge family beliefs
- **CURRENT EVENTS AWARENESS** increases (high school history + AP US Gov + media exposure)
- First political opinions on specific issues form
- Generational differences emerge (Gen Z's experience with COVID + Trump + climate + social media shapes worldview)

### Early Adulthood (18-29)

- **VOTING ELIGIBILITY** at 18 (26th Am 1971); first voting opportunity
- **COLLEGE/WORK/MILITARY** experiences expose to new perspectives
- Party identification often LOOSENS in college then RE-STABILIZES
- Marriage + children often correlate with conservative shift
- "EMERGING ADULTHOOD" psychological stage (Arnett) — extended exploration of identity + ideology
- Lowest TURNOUT — only ~50% of 18-29 vote in presidential elections (vs 70%+ for 65+)

### Middle Adulthood (30-64)

- Beliefs STABILIZE
- **OCCUPATIONAL/PROFESSIONAL** identity reinforces party identification (lawyers + academics → Dem; small business + ranchers + military → Rep)
- **HOME OWNERSHIP + CHILDREN** correlate with conservative shift
- Family + workplace + community reinforce existing beliefs
- Major events can shift but baseline stable
- Highest middle-class income → moderate centrism in some studies

### Later Adulthood (65+)

- MOST STABLE beliefs; most resistant to change
- **HIGHEST TURNOUT** — ~70%+ in presidential elections; age gap even wider in midterms
- ACTIVE POLITICAL ENGAGEMENT — phone calls + town halls + AARP + religious community
- Generational events that shaped them (Depression, WWII, 1960s) continue to color worldview
- Older voters disproportionately Republican since Reagan; Boomers split

## Polling Methodology Evolution

### Generation 1: Face-to-Face (1936-1970s)

- George Gallup + Elmo Roper + Archibald Crossley pioneered scientific polling 1935-1936
- Field interviewers conducted in-person interviews at random addresses
- High response rates (60-80%) + careful sampling
- Slow + expensive + geographically limited
- Used through 1970s for major academic + commissioned polls

### Generation 2: Random Digit Dial (RDD) Phone (1970s-2000s)

- Computer-generated random phone numbers covered all listed + unlisted households
- Faster + cheaper + nationwide
- High response rates initially (50-60% in 1980s)
- DECLINING response rates over time (10-15% by 2010s)
- CELLPHONE PROBLEM emerged 2000s — landline-only sampling missed younger + minority + lower-income households
- Federal Communications Act + TCPA restricted automated calls to cellphones (1991, 2002, 2012)

### Generation 3: Cellphone-Inclusive Phone (2000s-2010s)

- Pollsters began calling BOTH landlines + cellphones (dual-frame samples)
- Required additional cost (cellphone numbers more expensive to acquire)
- Manual dialing required by TCPA for cellphones
- Response rates continued declining as caller ID + spam filters proliferated
- 2016 + 2020 polling failures partly reflect challenges of this transition + non-response bias

### Generation 4: Online Probability Panels (2010s-Present)

- Pew RESEARCH CENTER American Trends Panel (ATP) — recruited via address-based sampling, surveyed online
- NORC AmeriSpeak — University of Chicago probability-based panel
- IPSOS KnowledgePanel — original online probability panel
- HIGHER RESPONSE RATES + faster + cheaper than RDD
- Industry standard for HIGH-QUALITY polls

### Generation 5: Online Opt-In + Weighted (2010s-Present)

- ONLINE OPT-IN PANELS (YouGov, Morning Consult, Civiqs, Lucid) — convenience samples + post-stratification weighting
- Cheap + fast + large samples
- LOWER QUALITY but rapidly improving methodology
- Common in election polling + commercial market research
- Combined with calibration to Census + voter file data

## Question Wording + Framing + House Effects

### Question Wording

Subtle phrasing differences shift responses dramatically:
- **"WELFARE" vs "ASSISTANCE TO THE POOR"** — same policy, different responses (welfare reads as wasteful; assistance reads as compassionate)
- **"DEATH TAX" vs "ESTATE TAX"** — Frank Luntz GOP polling guru renamed to make estate tax less popular
- **"BUREAUCRACY" vs "GOVERNMENT AGENCIES"** — bureaucracy negative
- **"OBAMACARE" vs "AFFORDABLE CARE ACT"** — many polls showed people opposed Obamacare but supported ACA (same law)
- **"RIGHT TO LIFE" vs "RIGHT TO CHOOSE"** — abortion polling deeply sensitive to wording
- **"TAX BREAKS FOR THE WEALTHY" vs "TAX RELIEF FOR JOB CREATORS"** — same policy, opposite responses
- **"CLIMATE CHANGE" vs "GLOBAL WARMING"** — Republicans more accepting of "climate change" (perceived as natural variation)

### Framing Effects

How an issue is FRAMED shapes responses:
- **GAIN frame vs LOSS frame** — "this policy will save 200 lives" (gain) vs "this policy will let 800 die" (loss); same outcome, different responses (Tversky + Kahneman 1981 prospect theory)
- **EPISODIC vs THEMATIC framing** — individual story vs systemic analysis
- **PRIMING** — what issues respondents think about before answering

### House Effects

Pollsters' methodology choices SYSTEMATICALLY tilt results:
- **WEIGHTING** — how pollsters weight by party ID, education, race, religious affiliation
- **TURNOUT MODELS** — likely voter screens vs registered voters vs all adults
- **MODE EFFECTS** — phone vs online vs in-person produce different responses (especially on sensitive topics)
- **PARTY-WEIGHTING DEBATE** — should pollsters weight by party identification (a CHANGEABLE attitude) or only stable demographics? Most don't but some do

### Famous House Effects

- **RASMUSSEN REPORTS** consistently lean Republican (3-5 pts more GOP than average)
- **CIVIQS + DATA FOR PROGRESS + PUBLIC POLICY POLLING** lean Democratic (some auto-lean ~3-4 pts more Dem)
- **NEW YORK TIMES/SIENA + ABC/Washington Post** generally considered high-quality reference standards
- **SUFFOLK + EMERSON + UMASS LOWELL + Marist** also generally high-quality
- TRUMP-ERA polling: emergence of Trump-friendly pollsters (Trafalgar, Insider Advantage, McLaughlin) often closer to actual Trump margins in 2016 + 2020 (controversial — possibly reflecting "shy Trump voter" phenomenon, possibly reflecting selective methodology)

## Poll Aggregation + Forecasting

### Poll Aggregators

- **REALCLEARPOLITICS (RCP)** — simple average of recent polls; widely cited; doesn't weight for quality
- **FIVETHIRTYEIGHT (Nate Silver, originally; ABC News post-2023)** — weighted average accounting for pollster quality + recency + sample size; pioneered probabilistic forecasting; absorbed by ABC after Silver departed 2023; closed 2025
- **SILVER BULLETIN** — Nate Silver's post-538 forecasting Substack
- **NEW YORK TIMES UPSHOT** — quality polling + analysis
- **THE ECONOMIST FORECAST** — Andrew Gelman + Merlin Heidemanns probabilistic model
- **DECISION DESK HQ + RACE TO THE WH** — newer entrants

### Probabilistic Forecasting

Combines polls + FUNDAMENTALS (economy, incumbency, approval) into probabilistic forecast:
- "70% chance Biden wins" type predictions
- 538 famously gave Trump 28.6% chance of winning 2016 (most aggregators gave 1-15%); Trump won
- 2020 forecasts more confident in Biden (~89% 538) — Biden won but narrower than expected
- 2024 forecasts close to coin-flip (~50-60% Harris); Trump won decisively

### Prediction Markets

- **POLYMARKET** (crypto-based; long barred to U.S. residents) + **KALSHI** (CFTC-regulated US legal as of 2024)
- Real-money betting on election outcomes
- Aggregate decentralized information
- 2024: Polymarket consistently higher Trump probability than poll aggregators; Trump won
- Controversial: subject to manipulation by large bettors + insider information advantages

## Public Opinion → Policymaking: Three Models

| Model | Theory | Behavior | Example |
|---|---|---|---|
| **DELEGATE** | Representatives should vote CONSTITUENT PREFERENCES even if disagreeing | Survey district + vote majority view | Members in safe partisan districts; populist candidates |
| **TRUSTEE** | Representatives should use INFORMED JUDGMENT per Burke 1774 SPEECH TO ELECTORS OF BRISTOL | Vote per own analysis + values + expertise | Senate (longer terms, broader perspective); judiciary; foreign policy votes |
| **POLITICO** | Representatives BLEND delegate + trustee depending on issue salience + information levels | High-salience issue = delegate; low-salience = trustee | Most members in practice; situational |

### Edmund Burke's Speech to Electors of Bristol (1774)

Burke famously rejected delegate model: "Your representative owes you, not his industry only, but his judgment; and he betrays, instead of serving you, if he sacrifices it to your opinion." Foundational TRUSTEE doctrine. Burke lost his next election (1780) — voters rejected his independent voting on issues like Catholic emancipation + free trade with Ireland.

### Modern American Practice

- **POLITICO MODEL** is most common in practice
- Members face TRADE-OFFS between constituent + leadership + interest groups + personal conviction
- DESCRIPTIVE REPRESENTATION (members reflecting demographic identity) vs SUBSTANTIVE REPRESENTATION (members advocating for group interests)
- INSTRUCTED DELEGATE position — strict delegate even on personal moral issues — extreme rare
- INDEPENDENT TRUSTEE position — strict trustee independence — also rare
- Most members emphasize CONSTITUENT SERVICE + RESPONSIVENESS while exercising judgment on technical/non-salient votes

> 🔑 Key takeaway: POLITICAL SOCIALIZATION operates across LIFECYCLE — childhood (family + school primary), adolescence (peers + first opinions), early adulthood (college + voting begins, beliefs loosen + restabilize), middle adulthood (stabilization), later adulthood (most stable + highest turnout). POLLING METHODOLOGY EVOLVED — Gen 1 face-to-face (Gallup 1936-1970s) → Gen 2 RDD phone (1970s-2000s) → Gen 3 cellphone-inclusive (2000s-2010s) → Gen 4 online probability panels (Pew ATP, NORC AmeriSpeak — current high-quality standard) + Gen 5 online opt-in weighted (YouGov, Morning Consult). QUESTION WORDING + FRAMING + HOUSE EFFECTS all shift results — "welfare" vs "assistance," "death tax" vs "estate tax," "Obamacare" vs "ACA," gain vs loss framing (Tversky + Kahneman). POLL AGGREGATION: RealClearPolitics (simple average), 538 (weighted, closed 2025), Silver Bulletin, NYT Upshot, Economist Forecast, Decision Desk HQ; PREDICTION MARKETS Polymarket + Kalshi. THREE MODELS of representation: DELEGATE (vote constituent preferences), TRUSTEE (vote informed judgment per Burke 1774), POLITICO (situational mix — most common in practice).
      `
    },
    {
      id: 'govpubli2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "How does POLITICAL SOCIALIZATION operate across the LIFECYCLE (childhood → adolescence → early adulthood → middle adulthood → later adulthood), and which AGENTS are dominant at each stage?",
            options: [
              "Family and school dominate childhood, peers and media grow in adolescence, college and work reshape early adulthood, and views harden with age as turnout rises.",
              "Media and peers dominate childhood, family takes over in early adulthood, and views become least stable after 65 as turnout falls among older voters at every level of government.",
              "Family dominates every stage equally, so schools, peers, media and jobs have no measurable effect on political views at any point in life.",
              "School and church dominate adolescence, family matters most after retirement, and political views are fixed permanently by age 12 for nearly everyone.",
            ],
            correctAnswer: 0,
            explanation: 'POLITICAL SOCIALIZATION LIFECYCLE: (1) CHILDHOOD (0-12) — FAMILY (most children who adopt a party share their parents\' party) + SCHOOL civic education + Pledge; primary orientations form; "benevolent leader" research (Easton + Hess 1960s — weakened in polarized era). (2) ADOLESCENCE (13-17) — peers grow + can challenge family; current events awareness; first opinions; generational differences emerge (Gen Z = COVID + Trump + climate + social media). (3) EARLY ADULTHOOD (18-29) — 26th Am 1971 voting at 18 ("old enough to fight"); college/work/military expose; party ID loosens then restabilizes; marriage + children → conservative shift; "emerging adulthood" (Arnett); LOWEST TURNOUT ~50% vs 70%+ for 65+. (4) MIDDLE ADULTHOOD (30-64) — beliefs stabilize; occupation reinforces (lawyers + academics Dem; small business + military Rep); home + children → conservative shift; baseline stable. (5) LATER ADULTHOOD (65+) — MOST STABLE; HIGHEST TURNOUT (~70%+ pres; age gap widest in midterms); active engagement (phone + town halls + AARP); generational events continue coloring; older Rep since Reagan + Boomers split.'
          }
        ]
      }
    },
    {
      id: 'govpubli2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Role conception in which a representative votes on issues based on their own knowledge and judgment rather than constituent opinion (EK 2.3.A.4).",
            answer: 'trustee',
            acceptableAnswers: ['trustee', 'Trustee', 'trustee model', 'trustee role'],
            hint: 'Contrast with the delegate (votes constituents\' interests) and the politico (a mix of both).'
          },
          {
            prompt: "Amendment ratified 1971 lowering voting age from 21 to 18 during Vietnam War; argued 'old enough to fight, old enough to vote.'",
            answer: '26th Amendment',
            acceptableAnswers: ['26th Amendment', '26th Am', 'Twenty-Sixth Amendment', '26th', 'Twenty-sixth Amendment'],
            hint: 'Ratified July 1 1971 in fastest amendment ratification in US history (3 months 8 days); came amid Vietnam War draft + youth protest movement; expanded electorate by ~11M young voters; followed Oregon v. Mitchell 1970 SCOTUS ruling.'
          },
          {
            prompt: "Type of poll taken early in a campaign to create a baseline view of a candidate (EK 4.5.A.1).",
            answer: 'benchmark poll',
            acceptableAnswers: ['benchmark poll', 'Benchmark poll', 'benchmark', 'Benchmark'],
            hint: 'Later tracking polls measure change against this starting point.'
          }
        ]
      }
    },
    {
      id: 'govpubli2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each REPRESENTATION MODEL to its description.**`,
      exercise: {
        dropdowns: [
          {
            label: "DELEGATE MODEL — representatives should vote CONSTITUENT PREFERENCES even if personally disagreeing: ___",
            options: ['Vote constituent preferences via polling/contacts', 'Vote informed judgment per Burke 1774', 'Blend delegate + trustee depending on issue salience', 'Vote party leadership preferences', 'Vote campaign donor preferences']
          },
          {
            label: "TRUSTEE MODEL — representatives should use INFORMED JUDGMENT per Burke 1774 SPEECH TO ELECTORS OF BRISTOL: ___",
            options: ['Vote constituent preferences via polling/contacts', 'Vote informed judgment per Burke 1774', 'Blend delegate + trustee depending on issue salience', 'Vote party leadership preferences', 'Vote campaign donor preferences']
          },
          {
            label: "POLITICO MODEL — representatives BLEND delegate + trustee depending on issue salience + information levels (most common in practice): ___",
            options: ['Vote constituent preferences via polling/contacts', 'Vote informed judgment per Burke 1774', 'Blend delegate + trustee depending on issue salience', 'Vote party leadership preferences', 'Vote campaign donor preferences']
          }
        ],
        correctAnswers: ['Vote constituent preferences via polling/contacts', 'Vote informed judgment per Burke 1774', 'Blend delegate + trustee depending on issue salience'],
        hint1: 'DELEGATE — populist/Jeffersonian/Anti-Federalist tradition; representatives surveys district preferences + votes accordingly; close to PURE DEMOCRACY ideal; common in safe partisan districts where representative\'s own preferences align with constituents; populist candidates like 2016 Trump claimed to be delegate of "forgotten" voters.',
        hint2: 'TRUSTEE — Federalist/Hamiltonian/Madisonian tradition; represented in Federalist 10 (Madison rejected pure democracy + favored REPRESENTATIVE REPUBLIC where representatives "refine and enlarge" public views); Burke 1774 rejected delegate model; lost re-election 1780 over independent votes; Senate (6-year terms, broader perspective) more often trustee than House.',
        hint3: 'POLITICO — most common in practice; situational mix; HIGH-SALIENCE local issue (e.g., votes on military bases, agricultural subsidies in farm districts) → DELEGATE; LOW-SALIENCE technical issue (e.g., obscure regulatory matters) → TRUSTEE; depends on issue + visibility + electoral pressure + member\'s confidence in own expertise + party leadership pressure.'
      }
    },
    {
      id: 'govpubli2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How do QUESTION WORDING + FRAMING EFFECTS + HOUSE EFFECTS shape POLLING RESULTS, and what implications does this have for interpreting public opinion data?",
            options: [
              "Wording and framing can shift answers on the same policy, and house effects make pollsters differ, so readers should compare wording, methods and averages.",
              "Framing and wording change answers only in online polls, and house effects disappear once a sample passes 1,000, so any single large poll can be trusted as accurate.",
              "House effects are the margin of error for House races, and framing applies only to focus groups, so wording never matters in national polls.",
              "Question wording affects only uninformed respondents, and house effects come from interviewers' accents, so the most recent poll is always the best one to read.",
            ],
            correctAnswer: 0,
            explanation: 'POLLING METHODOLOGY: (1) QUESTION WORDING — "welfare" vs "assistance to poor" (opposite responses); "death tax" vs "estate tax" (Frank Luntz GOP renamed); "Obamacare" vs "ACA" (same law different responses); "right to life" vs "right to choose"; "tax breaks for wealthy" vs "tax relief for job creators"; "climate change" vs "global warming." (2) FRAMING — gain frame ("save 200 lives") vs loss frame ("let 800 die") same outcome but loss more compelling (Tversky + Kahneman 1981 PROSPECT THEORY 2002 Nobel); episodic vs thematic; priming. (3) HOUSE EFFECTS — weighting by party ID vs stable demographics; turnout models; mode effects (phone/online/in-person); RASMUSSEN leans Rep; CIVIQS + DFP + PPP lean Dem; NYT/Siena + ABC/WaPo reference standards; Suffolk + Emerson + UMass Lowell + Marist quality; Trump-era TRAFALGAR + INSIDER ADVANTAGE + McLAUGHLIN closer to Trump margins 2016 + 2020 (controversial — "shy Trump voter" or selective methodology). (4) IMPLICATIONS — don\'t trust single polls; check wording + sample + house effects; use AGGREGATORS (RCP, 538, Silver Bulletin, NYT Upshot, Economist); be skeptical of dramatic changes (statistical noise + wording); pollsters/media/politicians use polling strategically. (5) REFORMS post-2016 + 2020 underestimating Trump — better cellphone/mobile inclusion + non-college White representation + voter file calibration + recall checks; 2024 more accurate (Trump +1.5% popular; close race within MOE).'
          }
        ]
      }
    }
  ]
}
