export const govVotingElectionsPart1Data = {
  topicSlug: 'gov-voting-elections',
  sections: [
    {
      id: 'govvotin1-intro',
      type: 'text' as const,
      content: `
# 🗳️ Voting & Elections

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Suffrage expansion (15th + 19th + 23rd + 24th + 26th Amendments + VRA 1965 + reauthorizations + Shelby County 2013) |
| Voter turnout patterns (~60-67% presidential + ~40% midterm + 25% local; demographic patterns by age + education + income + race + gender + region) |
| Rational + sociological + psychological models of voting (Downs 1957 + Columbia + Michigan schools) |
| Election types (general + primary — open/closed/blanket + caucus + runoff + recall + initiative + referendum) |
| Electoral College (538 electors = 435 House + 100 Senate + 3 DC; winner-take-all 48 states + Maine/Nebraska district; 270 to win; faithless electors + Chiafalo 2020) |

> 🔑 Key idea: ELECTIONS = central mechanism translating PUBLIC OPINION into POLICY through INSTITUTIONAL DESIGN that reflects MADISONIAN FILTERING. SUFFRAGE has expanded dramatically through 5 constitutional amendments (15th 1870 race + 19th 1920 sex + 23rd 1961 DC + 24th 1964 poll tax + 26th 1971 age 18) + VOTING RIGHTS ACT 1965 (Section 5 preclearance + Section 2 vote dilution + 1970/1975/1982/2006 reauthorizations) — but Shelby County v. Holder 2013 gutted preclearance + state restrictions followed. VOTER TURNOUT varies by election type (~60-67% presidential 2020/2024 vs ~40% midterm vs 25% local) + correlates with EDUCATION (strongest) + AGE + INCOME + party mobilization. THREE MODELS of voting behavior: RATIONAL CHOICE (Downs 1957 — voter cost-benefit + paradox of voting); SOCIOLOGICAL (Columbia school 1940s Lazarsfeld THE PEOPLE'S CHOICE — group memberships predict vote); PSYCHOLOGICAL (Michigan school THE AMERICAN VOTER 1960 Campbell+Converse+Miller+Stokes — party ID + funnel of causality). Multiple ELECTION TYPES — general (Nov 1st Tuesday after Mon); primary (closed/open/blanket — Washington/California top-two); caucus (Iowa famous; declining); runoff (Georgia 50%+1); recall (CA Davis 2003 + Newsom 2021); initiative + referendum (24 states; CA Prop 13 1978/Prop 8 2008/Prop 187 1994). ELECTORAL COLLEGE — 538 electors (435 House + 100 Senate + 3 DC per 23rd Am); 270 to win; winner-take-all 48 states + ME/NE district; mismatch with popular vote 5 times (1824 + 1876 + 1888 + 2000 Bush/Gore + 2016 Trump/Clinton); Chiafalo v. Washington 2020 upheld faithless elector laws; ECRA 2022 reformed counting after Jan 6 2021.
      `
    },
    {
      id: 'govvotin1-content',
      type: 'text' as const,
      content: `
## Suffrage Expansion

The American electorate has expanded dramatically over 235 years through CONSTITUTIONAL AMENDMENTS + LEGISLATION + COURT DECISIONS — but expansion has been UNEVEN + REVERSIBLE.

### Original Constitution (1787)

- **NO NATIONAL VOTING STANDARD** — states set qualifications (Article I §2: House electors must have qualifications "requisite for Electors of the most numerous Branch of the State Legislature")
- **STATE PRACTICE** — most states required WHITE + MALE + PROPERTY-OWNING + ADULT (21+); some New England/mid-Atlantic states allowed free Black men (NY required higher property qualification for Black voters); some allowed property-owning widows briefly
- **NJ 1776-1807** — only state allowing women to vote (allowed "all inhabitants" worth £50; rescinded 1807 due to alleged fraud)
- **PROPERTY QUALIFICATIONS DROPPED** — gradually eliminated 1790s-1850s; complete by Civil War (Jacksonian democracy)
- **POPULATION** — fewer than 100,000 voters in 1789 election; only ~6% of adult population

### Suffrage Expansion Amendments

| Amendment | Year | Expansion |
|---|---|---|
| **15th Amendment** | 1870 | Vote cannot be denied based on RACE, COLOR, or PREVIOUS CONDITION OF SERVITUDE; Reconstruction-era; effectively suspended 1877-1965 by Jim Crow (poll taxes + literacy tests + grandfather clauses + white primaries + violence) |
| **17th Amendment** | 1913 | DIRECT ELECTION OF SENATORS (replaced state legislature selection); Progressive Era democratization |
| **19th Amendment** | 1920 | Vote cannot be denied based on SEX; women's suffrage; ratified after 72-year campaign Seneca Falls 1848 → Susan B. Anthony + Elizabeth Cady Stanton + Carrie Chapman Catt + Alice Paul + NAWSA + NWP |
| **23rd Amendment** | 1961 | DC residents vote in PRESIDENTIAL ELECTIONS (3 electoral votes — minimum of any state); DC still has no voting representation in Congress |
| **24th Amendment** | 1964 | POLL TAXES PROHIBITED in federal elections; Harper v. Virginia Board of Elections 1966 extended ban to state elections via 14th Amendment Equal Protection |
| **26th Amendment** | 1971 | Vote cannot be denied based on AGE for those 18+; Vietnam War context ("old enough to fight, old enough to vote"); fastest amendment process in US history (3 months 8 days); expanded electorate by ~11M young voters |

### Voting Rights Act of 1965 (VRA)

THE most important VOTING RIGHTS LAW in US history; signed by LBJ Aug 6 1965 after Selma Bloody Sunday (March 7 1965) + LBJ's "We Shall Overcome" speech (March 15 1965).

- **SECTION 2** — bans VOTE DILUTION nationwide; permanent provision; basis for racial gerrymandering challenges (Shaw v. Reno 1993; Allen v. Milligan 2023 upheld Section 2 + ordered Alabama to draw second Black-majority district)
- **SECTION 5 (PRECLEARANCE)** — required jurisdictions with HISTORY OF DISCRIMINATION (most of South + parts of NY/CA/NH/MI/SD/AK) to get federal approval before changing voting laws; covered by SECTION 4(b) FORMULA
- **SECTION 4(b) (COVERAGE FORMULA)** — identified covered jurisdictions based on 1964/1968/1972 voting practices + low turnout
- **REAUTHORIZATIONS** — 1970, 1975, 1982 (Reagan signed; banned VOTE DILUTION practices intentionally OR by RESULT/EFFECT), 2006 (Bush signed 25-year extension)
- **IMPACT** — Black voter registration in MS rose 6.7% (1964) → 59.8% (1967); transformed Southern politics; created MAJORITY-MINORITY DISTRICTS

### Shelby County v. Holder (2013) — VRA Gutted

- **5-4 decision** Chief Justice ROBERTS struck down Section 4(b) coverage formula as UNCONSTITUTIONAL
- **REASONING** — formula based on "decades-old data" + "current burdens must be justified by current needs"; states' equal sovereignty
- **EFFECT** — Section 5 preclearance UNUSABLE without coverage formula (Congress hasn't passed new formula despite repeated bills — John Lewis Voting Rights Advancement Act, Freedom to Vote Act)
- **IMMEDIATE AFTERMATH** — Texas implemented voter ID law within hours; NC passed sweeping voter restrictions; multiple states closed polling places (especially in Black + Hispanic areas)

### Post-Shelby Voting Restrictions

- **VOTER ID LAWS** — 36 states have ID requirements (some strict like GA + IN + KS + MS + ND + TN + TX + WI; some less strict like AZ + LA + MO + OH); Crawford v. Marion County 2008 upheld photo ID
- **VOTER REGISTRATION REQUIREMENTS** — purges (Husted v. APRI 2018 upheld Ohio purge); same-day registration in some states; automatic registration via DMV in 22 states + DC
- **EARLY VOTING** — expanded in many states; restricted in others (NC after 2013)
- **MAIL VOTING** — exploded during 2020 COVID (61% mail/early); subsequent restrictions (Georgia SB 202 2021); Trump 2024 reversed GOP opposition + encouraged GOP mail voting
- **FELON DISENFRANCHISEMENT** — 4.6M Americans cannot vote due to felony conviction (2022 Sentencing Project); FL Amendment 4 2018 restored voting rights to ~1.4M felons (legislature limited via Senate Bill 7066 requiring all fines/fees paid)
- **ELECTION ADMINISTRATION** — partisan election officials (secretaries of state) controversial post-2020

### Voter Turnout Patterns

| Election Type | Typical Turnout |
|---|---|
| **PRESIDENTIAL** | ~60-67% of voting-age population (66.6% 2020 highest since 1900; 65% 2024) |
| **MIDTERM CONGRESSIONAL** | ~40-50% (47% 2018 highest in century; ~46% 2022) |
| **PRIMARY** | ~15-25% |
| **MUNICIPAL/LOCAL** | ~15-25% |
| **SPECIAL ELECTIONS** | Highly variable (5-30%) |

### Demographic Turnout Patterns

| Group | Pattern |
|---|---|
| **AGE** | Older vote MORE (65+ ~75% in 2020; 18-29 ~52%); 18-29 voters 47% in 2024 vs 50% 2020 |
| **EDUCATION** | College graduates vote MUCH MORE (~80%) than non-college (~55%) — strongest single predictor |
| **INCOME** | Higher income votes more (top quintile ~80%; bottom quintile ~50%) |
| **RACE/ETHNICITY** | White (~71%) > Black (~63%) > Hispanic (~54%) > Asian (~60%) in 2020 |
| **GENDER** | Women vote slightly more than men (~3-5 pt advantage); +63% women in 2024 |
| **MARITAL STATUS** | Married vote more than single |
| **PARTY ID + STRENGTH** | Strong partisans vote much more than weak partisans/independents |

### Why Don't Americans Vote?

- **REGISTRATION BARRIERS** — only US among advanced democracies requires VOTER REGISTRATION (most are automatic); 30-day cutoffs in some states
- **TUESDAY VOTING** — 1845 law set first Tuesday after first Monday in November; not weekend (most other democracies vote Sunday) or holiday
- **ALIENATION** — distrust government/parties; "doesn't matter" (especially in safe states/districts)
- **APATHY** — too busy + don't care + don't follow politics
- **IGNORANCE** — don't know candidates/issues
- **STRUCTURAL** — gerrymandering makes most House districts uncompetitive; Electoral College makes most states irrelevant ("safe states")
- **PARADOX OF VOTING** — Downs 1957: rational individual benefit ≈ 0 (one vote rarely decisive); cost > benefit; vote anyway due to civic duty/expressive value

## Three Models of Voting Behavior

### 1. Rational Choice (Downs 1957)

- **AN ECONOMIC THEORY OF DEMOCRACY** (1957) — Anthony Downs
- **VOTERS** maximize utility by choosing party/candidate closest to their preferences
- **PARADOX OF VOTING** — rational individual benefit nearly zero; explained by EXPRESSIVE VOTING + CIVIC DUTY
- **MEDIAN VOTER THEOREM** — in 2-party majoritarian system, parties converge on median voter to maximize votes (challenged by polarization data)
- **RETROSPECTIVE VOTING** — V.O. Key Jr THE RESPONSIBLE ELECTORATE (1966) — voters reward/punish incumbents based on PERFORMANCE (especially economy); Fiorina 1981 confirmed; "It's the economy, stupid" (Carville 1992 Clinton campaign)

### 2. Sociological Model (Columbia School 1940s)

- **THE PEOPLE'S CHOICE** (1944) — Lazarsfeld + Berelson + Gaudet — Erie County OH 1940 study
- **VOTERS PREDICTABLE** by SOCIAL CHARACTERISTICS — religion + class + region + ethnicity
- **TWO-STEP FLOW** — media → opinion leaders → mass public; INTERPERSONAL INFLUENCE more important than direct media exposure
- **CROSS-PRESSURED VOTERS** — those with conflicting group memberships vote later/turn out less

### 3. Psychological Model (Michigan School 1960)

- **THE AMERICAN VOTER** (1960) — Campbell + Converse + Miller + Stokes
- **PARTY IDENTIFICATION** — psychological attachment formed via socialization; STRONGEST predictor of vote choice
- **FUNNEL OF CAUSALITY** — long-term factors (PID + group identity) → mid-term (issues + ideology) → short-term (candidates + events) → vote
- **MOST INFLUENTIAL VOTING THEORY** in political science; modified by sorting + polarization

## Election Types

| Type | Description | Examples |
|---|---|---|
| **GENERAL** | Final election; first Tuesday after first Monday in November | Presidential, congressional, state, local |
| **PRIMARY (CLOSED)** | Only registered party members vote | Florida + Pennsylvania + most states |
| **PRIMARY (OPEN)** | Any registered voter can vote in either party's primary | ~15 states |
| **PRIMARY (BLANKET/TOP-TWO)** | All candidates on single ballot; top 2 advance | California + Washington + Louisiana |
| **CAUCUS** | In-person meetings to select candidates | Iowa famous (Dem caucus 2024 → primary; Rep retained); Nevada + ND + WY; declining |
| **RUNOFF** | Required when no candidate gets majority | Georgia (50%+1 for federal/state; created 1964 to prevent Black candidate plurality wins); Louisiana |
| **RECALL** | Voters remove elected official before term ends | CA Davis 2003 (Schwarzenegger); CA Newsom 2021 (failed); 19 states allow |
| **INITIATIVE** | Voters propose + pass laws/amendments directly | 24 states; CA Prop 13 1978 (property tax cap), Prop 8 2008 (gay marriage ban — overturned), Prop 187 1994 (immigrant services) |
| **REFERENDUM** | Voters approve/reject legislature actions | All 50 states for some matters |
| **SPECIAL ELECTION** | Fill vacancies + decide ballot measures | High variability |

## Electoral College

THE most distinctive + controversial American electoral institution.

### Structure

- **538 ELECTORS** = 435 House + 100 Senate + 3 DC (per 23rd Amendment 1961)
- **270 to win** — majority required; if no candidate gets 270, election goes to House (each state delegation gets 1 vote — Tied 1800 Jefferson/Burr → 12th Amendment 1804 separated President + VP ballots; 1824 Adams/Jackson/Crawford/Clay → House chose Adams "corrupt bargain")
- **WINNER-TAKE-ALL** in 48 states + DC — winner of state's popular vote gets ALL electors
- **MAINE + NEBRASKA** — 2 electors statewide + 1 per House district (split possible — Obama 2008 NE-2 + Trump 2020 NE-2 + Biden 2020 NE-2; ME-2 split 2016/2020/2024)

### Faithless Electors

- **HISTORICAL** — 165 faithless electors in US history (most votes for losing candidates)
- **2016 RECORD** — 7 faithless electors (4 WA Clinton → Powell 3 + Faith Spotted Eagle 1; 2 TX Trump → Kasich/Paul; 1 HI Clinton → Sanders)
- **CHIAFALO v. WASHINGTON (2020)** — Supreme Court UNANIMOUSLY upheld state laws penalizing faithless electors; states can require electors to vote per popular vote winner

### Mismatch with Popular Vote

PRESIDENT WON ELECTORAL COLLEGE BUT LOST POPULAR VOTE 5 TIMES:
- **1824** — John Quincy Adams (House decision; Andrew Jackson won plurality popular + electoral)
- **1876** — Rutherford B. Hayes vs Samuel Tilden (Compromise of 1877 ended Reconstruction)
- **1888** — Benjamin Harrison vs Grover Cleveland
- **2000** — George W. Bush vs Al Gore (Bush won EC 271-266 after Bush v. Gore SCOTUS 5-4 stopped FL recount)
- **2016** — Donald Trump vs Hillary Clinton (Clinton won popular by 2.9M; Trump won EC 304-227)

### Electoral College Reform Proposals

- **NATIONAL POPULAR VOTE INTERSTATE COMPACT (NPVIC)** — states agree to give electors to national popular vote winner once states totaling 270 EVs join; currently 17 states + DC = 209 EVs; would not require constitutional amendment but would face SCOTUS challenge
- **CONSTITUTIONAL AMENDMENT** — never gained 2/3 each chamber + 3/4 states; defenders cite federalism + small state protection + need for broad geographic coalition

### Electoral Count Reform Act (ECRA) 2022

After Jan 6 2021 Capitol attack + attempts to overturn election:
- Clarified VP role at counting is CEREMONIAL (cannot reject electors)
- Raised threshold for objections from 1 House + 1 Senate to 1/5 each chamber
- Set CONCLUSIVE date for state certification (6 days before electors meet)
- Limited grounds for objection
- Bipartisan bill signed by Biden Dec 2022

> 🔑 Key takeaway: ELECTIONS = central mechanism translating PUBLIC OPINION into POLICY through INSTITUTIONAL DESIGN reflecting MADISONIAN FILTERING. SUFFRAGE expanded through 5 amendments (15th 1870 race + 19th 1920 sex + 23rd 1961 DC + 24th 1964 poll tax + 26th 1971 age 18) + VRA 1965 (Section 5 preclearance + Section 2 vote dilution + reauthorizations 1970/1975/1982 RESULTS test/2006) — but Shelby County 2013 gutted preclearance + voter restrictions followed (TX/NC/GA SB 202 2021); Allen v. Milligan 2023 upheld Section 2. VOTER TURNOUT varies (~60-67% pres + 40-50% midterm + 15-25% primary/local); EDUCATION strongest predictor + age + income + race + gender; non-voting due to registration barriers + Tuesday voting + alienation + apathy + paradox of voting (Downs 1957). THREE MODELS: RATIONAL CHOICE (Downs 1957 + median voter theorem + retrospective voting per V.O. Key 1966 + Fiorina 1981 + "economy stupid"); SOCIOLOGICAL (Columbia school Lazarsfeld THE PEOPLE'S CHOICE 1944 + two-step flow + cross-pressured voters); PSYCHOLOGICAL (Michigan school THE AMERICAN VOTER 1960 + party ID + funnel of causality). ELECTION TYPES — general (Tuesday after Monday Nov 1845 law); primary (closed/open/blanket — CA + WA + LA top-two); caucus (Iowa famous + declining); runoff (Georgia 50%+1); recall (CA Davis 2003 + Newsom 2021); initiative + referendum (24 states; CA Prop 13/8/187). ELECTORAL COLLEGE — 538 (435 House + 100 Senate + 3 DC); 270 to win; winner-take-all 48 states + ME/NE district; popular vote mismatch 5 times (1824 + 1876 + 1888 + 2000 Bush v. Gore + 2016); Chiafalo 2020 upheld faithless elector penalties; ECRA 2022 reformed counting after Jan 6.
      `
    },
    {
      id: 'govvotin1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which 2013 Supreme Court decision struck down the COVERAGE FORMULA of the VOTING RIGHTS ACT, effectively ending PRECLEARANCE?",
            options: [
              "SHELBY COUNTY v. HOLDER (2013) — 5-4 decision Chief Justice ROBERTS struck down Section 4(b) coverage formula as UNCONSTITUTIONAL; reasoning: formula based on 'decades-old data' + 'current burdens must be justified by current needs' + 'states' equal sovereignty'; effect: Section 5 preclearance UNUSABLE without coverage formula (Congress hasn't passed new formula despite John Lewis Voting Rights Advancement Act + Freedom to Vote Act); IMMEDIATE AFTERMATH — Texas implemented voter ID law within hours; NC passed sweeping voter restrictions; multiple states closed polling places (especially Black + Hispanic areas); Georgia SB 202 2021 added restrictions; ongoing impact on access to ballot in formerly covered jurisdictions",
              "There is no Shelby County v. Holder of any kind during the entire period in any region of the United States with no 5-4 ROBERTS decision striking down Section 4(b) coverage formula, no decades-old data argument, no states' equal sovereignty reasoning, no Section 5 preclearance unusability, no Texas voter ID/NC voter restrictions/poll closures aftermath, no Georgia SB 202 2021, no John Lewis Voting Rights Advancement Act + Freedom to Vote Act unable to pass new formula, and no VRA gutting of any kind during the entire period in any region",
              "BUSH v. GORE (2000) gutted the VRA preclearance regime (rather than Shelby County 2013) of any kind under any circumstance with no Florida recount + 5-4 SCOTUS decision halt, no equal protection reasoning, no Section 4(b) coverage formula gutting, and no proper 2013 VRA decision of any kind during the entire period in any region of the United States during the period",
              "CITIZENS UNITED (2010) gutted the VRA preclearance regime (rather than Shelby County 2013) of any kind under any circumstance with no campaign finance + corporate political spending decision focus, no Section 4(b) coverage formula gutting, and no proper 2013 VRA decision of any kind during the entire period in any region of the United States during the period",
            ],
            correctAnswer: 0,
            explanation: 'SHELBY COUNTY v. HOLDER (2013) — 5-4 Roberts struck down Section 4(b) coverage formula as unconstitutional; reasoning: decades-old data + current burdens must be justified by current needs + states\' equal sovereignty; effect: Section 5 preclearance unusable without coverage formula (Congress hasn\'t passed new formula despite John Lewis VRA + Freedom to Vote Act); aftermath: TX voter ID within hours; NC sweeping restrictions; poll closures (Black + Hispanic areas); GA SB 202 2021; ongoing access impact in formerly covered jurisdictions.'
          }
        ]
      }
    },
    {
      id: 'govvotin1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Number of ELECTORS in the ELECTORAL COLLEGE = 435 House + 100 Senate + ___ DC (per 23rd Amendment 1961).",
            answer: '3',
            acceptableAnswers: ['3', 'three', 'Three'],
            hint: 'DC has 3 electoral votes — the MINIMUM number of any state (DC pop ~700K is bigger than VT/WY but gets only 3 EV vs VT/WY 3 EV); 23rd Amendment ratified 1961 gave DC residents PRESIDENTIAL VOTE (still no voting representation in Congress); statehood proposals would expand DC representation but require Congress to admit; total 538 electoral votes; 270 needed to win.'
          },
          {
            prompt: "Anthony Downs's 1957 book established RATIONAL CHOICE THEORY of voting; title includes 'AN ECONOMIC THEORY OF ___'.",
            answer: 'democracy',
            acceptableAnswers: ['democracy', 'Democracy', 'DEMOCRACY'],
            hint: 'AN ECONOMIC THEORY OF DEMOCRACY (1957) — Downs applied economic logic to voting; voters maximize utility by choosing party closest to preferences; PARADOX OF VOTING (rational individual benefit ≈ 0 since one vote rarely decisive — explained by expressive voting + civic duty); MEDIAN VOTER THEOREM (in 2-party majoritarian system, parties converge on median voter); foundational text.'
          },
          {
            prompt: "1965 federal law that BANNED RACIAL DISCRIMINATION in voting + required PRECLEARANCE in covered jurisdictions; signed by LBJ after Selma Bloody Sunday.",
            answer: 'Voting Rights Act',
            acceptableAnswers: ['Voting Rights Act', 'VRA', 'voting rights act', 'Voting Rights Act of 1965', 'Voting Rights Act 1965', 'voting rights act of 1965'],
            hint: 'VOTING RIGHTS ACT 1965 — THE most important voting rights law in US history; signed by LBJ Aug 6 1965 after Selma Bloody Sunday March 7 1965 + LBJ "We Shall Overcome" speech March 15 1965; SECTION 2 bans vote dilution nationwide (permanent; basis for Allen v. Milligan 2023); SECTION 5 required preclearance in covered jurisdictions per SECTION 4(b) coverage formula (gutted by Shelby County 2013); REAUTHORIZED 1970, 1975, 1982 (results test), 2006 (25 years).'
          }
        ]
      }
    },
    {
      id: 'govvotin1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each VOTING-EXPANSION AMENDMENT to its EXPANSION + DATE.**`,
      exercise: {
        dropdowns: [
          {
            label: "15th AMENDMENT — vote cannot be denied based on RACE/COLOR/PREVIOUS CONDITION OF SERVITUDE: ___",
            options: ['1870 (Reconstruction Era; effectively suspended 1877-1965 by Jim Crow)', '1920 (women\'s suffrage; ratified after 72-year campaign Seneca Falls 1848)', '1971 (lowered voting age to 18 during Vietnam War; fastest amendment ever)', '1964 (banned poll taxes in federal elections; extended to states by Harper 1966)', '1961 (DC residents vote in presidential elections; 3 electoral votes)']
          },
          {
            label: "19th AMENDMENT — vote cannot be denied based on SEX: ___",
            options: ['1870 (Reconstruction Era; effectively suspended 1877-1965 by Jim Crow)', '1920 (women\'s suffrage; ratified after 72-year campaign Seneca Falls 1848)', '1971 (lowered voting age to 18 during Vietnam War; fastest amendment ever)', '1964 (banned poll taxes in federal elections; extended to states by Harper 1966)', '1961 (DC residents vote in presidential elections; 3 electoral votes)']
          },
          {
            label: "26th AMENDMENT — vote cannot be denied based on AGE for those 18+: ___",
            options: ['1870 (Reconstruction Era; effectively suspended 1877-1965 by Jim Crow)', '1920 (women\'s suffrage; ratified after 72-year campaign Seneca Falls 1848)', '1971 (lowered voting age to 18 during Vietnam War; fastest amendment ever)', '1964 (banned poll taxes in federal elections; extended to states by Harper 1966)', '1961 (DC residents vote in presidential elections; 3 electoral votes)']
          }
        ],
        correctAnswers: ['1870 (Reconstruction Era; effectively suspended 1877-1965 by Jim Crow)', '1920 (women\'s suffrage; ratified after 72-year campaign Seneca Falls 1848)', '1971 (lowered voting age to 18 during Vietnam War; fastest amendment ever)'],
        hint1: '15th AMENDMENT (1870) — Reconstruction-era; "the right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude"; effectively SUSPENDED 1877-1965 by Jim Crow (poll taxes + literacy tests + grandfather clauses + white primaries + Klan/White League violence); enforcement abandoned after Compromise of 1877; revived by VRA 1965.',
        hint2: '19th AMENDMENT (1920) — women\'s suffrage; "the right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex"; ratified Aug 18 1920 (Tennessee was 36th state — Harry Burn changed his vote based on his mother\'s letter); culmination of 72-year campaign starting Seneca Falls Convention 1848 (Stanton + Mott Declaration of Sentiments); leaders Susan B. Anthony + Elizabeth Cady Stanton + Carrie Chapman Catt + Alice Paul; NAWSA (mainstream) + NWP (militant).',
        hint3: '26th AMENDMENT (1971) — lowered voting age from 21 to 18; passed during Vietnam War ("old enough to fight, old enough to vote"); FASTEST amendment process in US history (3 months 8 days from Congress passage to ratification); expanded electorate by ~11M young voters; followed Oregon v. Mitchell 1970 SCOTUS decision that Congress could lower voting age for federal but not state elections (would have created chaos); turnout for 18-29 group has historically been LOWEST.'
      }
    },
    {
      id: 'govvotin1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "Critics of the ELECTORAL COLLEGE argue it is UNDEMOCRATIC + OUTDATED + should be replaced by NATIONAL POPULAR VOTE; defenders argue it PROTECTS FEDERALISM + SMALL STATES + REQUIRES BROAD COALITIONS. Which statement BEST CAPTURES the COMPREHENSIVE DEBATE?",
            options: [
              "COMPREHENSIVE DEBATE — CRITIC ARGUMENTS: (1) UNDEMOCRATIC — president can lose popular vote (5 times: 1824 Adams; 1876 Hayes; 1888 Harrison; 2000 Bush; 2016 Trump); 2016 Clinton won by 2.9M votes; modern instances reduce democratic legitimacy; (2) DISENFRANCHISES MAJORITY OF STATES — campaigns focus on ~7-10 SWING STATES (PA + GA + AZ + NV + WI + MI + NC + recently FL/OH/IA dropping out); voters in safe states (CA Dem + TX Rep + NY Dem + AL Rep) ignored + don't matter electorally; depresses turnout in safe states; (3) DISTORTS POLICY PRIORITIES — candidates pander to swing state economies (PA fracking + MI auto + IA ethanol + OH coal); ignore non-swing-state issues; (4) WINNER-TAKE-ALL DISTORTION — narrow win in big state (e.g. PA by 1%) gets ALL 19 EV; landslide in safe state worth same as narrow; effectively wastes votes; (5) SMALL STATE OVERREPRESENTATION — WY 580K gets 3 EV (~193K per EV); CA 39M gets 54 EV (~722K per EV); WY voter has 3.7x weight; arbitrary; (6) RACIAL ORIGINS — Electoral College designed partly to protect SLAVERY via 3/5 COMPROMISE giving Southern states more EV than free Northern equivalents; institution shaped by anti-democratic motivations; (7) REFORM PROPOSAL — NATIONAL POPULAR VOTE INTERSTATE COMPACT (NPVIC); states agree to give EV to national popular vote winner once states totaling 270 EV join; currently 17 states + DC = 209 EV; would not require constitutional amendment (uses Article II §1 cl 2 'Each State shall appoint, in such Manner as the Legislature thereof may direct'); would face SCOTUS challenges. DEFENDER ARGUMENTS: (1) FEDERALISM — Constitution creates FEDERAL system; presidents elected by STATES not directly by people; preserves state role in national governance; (2) SMALL STATE PROTECTION — Constitution's grand bargain at 1787 Convention; small states (DE + NJ + RI + CT + GA) wouldn't have ratified without protection; abolishing would alienate small states + require constitutional amendment unlikely to pass; (3) BROAD GEOGRAPHIC COALITION — winner needs support across diverse regions not just dense urban centers; popular vote winner could win solely with megacities (NY/LA/Chicago); EC requires building coalition across MANY states; (4) FINALITY + LEGITIMACY — usually produces clear winner; popular vote close election could trigger nationwide recount nightmare (vs 2000 FL recount limited to one state); (5) SWING STATE ATTENTION POSITIVE — different states get attention different cycles (FL + OH + VA used to be swing; now AZ + GA + NV); over time many states get attention; (6) INCENTIVES FOR MODERATION — winner-take-all encourages candidates to appeal to MEDIAN VOTER in swing states + reject extremism; (7) SEPARATION OF POWERS — Founders feared direct democracy + executive demagoguery; EC + indirect election checks both. SCHOLARLY ASSESSMENT — most political scientists favor reform but acknowledge institutional inertia; constitutional amendment requires 2/3 each chamber + 3/4 states (impossible currently); NPVIC could change system without amendment but would face legal/political challenges; DEBATE REFLECTS deep tension between MAJORITARIANISM + FEDERALISM in American democracy.",
              "There is no Electoral College debate of any kind during the entire period in any region of the United States with no critic arguments (popular vote losses 1824/1876/1888/2000/2016, swing state focus, policy distortion, winner-take-all, small state overrepresentation, slavery origins, NPVIC reform), no defender arguments (federalism, small state protection, broad geographic coalition, finality/legitimacy, swing state attention, moderation incentives, separation of powers), no scholarly assessment of constitutional amendment difficulty + NPVIC legal challenges, no majoritarian + federalist tension, and no proper EC debate of any kind during the entire period in any region",
              "Electoral College ALWAYS produces SAME RESULT as POPULAR VOTE (rather than mismatching 5 times: 1824 + 1876 + 1888 + 2000 Bush + 2016 Trump) of any kind under any circumstance with no Clinton 2.9M popular vote margin loss 2016, no Bush v. Gore 2000 Florida recount, no swing state focus distortion, no small state overrepresentation, no slavery origins critique, no federalism + small state defender arguments, no NPVIC reform proposal, and no proper popular vote vs EC mismatch analysis of any kind during the entire period in any region of the United States during the period",
              "There is NO REFORM PROPOSAL for Electoral College of any kind under any circumstance with no NPVIC (National Popular Vote Interstate Compact, 17 states + DC = 209 EV, would use Article II §1 cl 2 state legislature manner clause, would not require constitutional amendment, would face SCOTUS challenges), no constitutional amendment proposals (requiring 2/3 each chamber + 3/4 states = impossibly difficult), no abolition or modification proposals, and no proper reform options analysis of any kind during the entire period in any region of the United States during the period",
            ],
            correctAnswer: 0,
            explanation: 'COMPREHENSIVE EC DEBATE — CRITICS: (1) UNDEMOCRATIC (5 popular vote losses 1824/1876/1888/2000/2016; Clinton won by 2.9M 2016); (2) DISENFRANCHISES MOST STATES (campaigns focus on ~7-10 swing — PA/GA/AZ/NV/WI/MI/NC; voters in safe states CA/TX/NY/AL ignored; depresses safe-state turnout); (3) DISTORTS POLICY (PA fracking + MI auto + IA ethanol + OH coal pandering); (4) WINNER-TAKE-ALL DISTORTION (1% PA win = all 19 EV); (5) SMALL STATE OVERREPRESENTATION (WY 580K/3 EV = 193K per EV; CA 39M/54 EV = 722K per EV; WY 3.7x weight); (6) SLAVERY ORIGINS (3/5 compromise gave South more EV); (7) NPVIC reform (17 states + DC = 209 EV; uses Article II §1 cl 2; no amendment needed; SCOTUS challenges likely). DEFENDERS: (1) FEDERALISM (presidents elected by STATES); (2) SMALL STATE PROTECTION (1787 grand bargain — small states wouldn\'t ratify without; amendment to abolish unlikely); (3) BROAD COALITION (popular vote could win with just megacities NY/LA/Chicago); (4) FINALITY (avoids nationwide recount nightmare); (5) SWING STATE ROTATION (FL/OH/VA → AZ/GA/NV; many states get attention over time); (6) MODERATION (median voter swing state strategy rejects extremism); (7) SEPARATION OF POWERS (Founders feared direct democracy + demagoguery; EC checks). SCHOLARLY — most poli sci favors reform; constitutional amendment requires 2/3 + 3/4 (impossible); NPVIC could change without amendment but legal/political challenges; reflects deep MAJORITARIAN + FEDERALIST tension.'
          }
        ]
      }
    }
  ]
}
