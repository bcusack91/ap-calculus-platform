export const govPresidencyPart4Data = {
  topicSlug: 'gov-presidency',
  sections: [
    {
      id: 'govpres4-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Presidency

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Presidency × Congress |
| Presidency × Judiciary |
| Presidency × Bureaucracy |
| Presidency × Federalism + Public + Media |

> 🔑 Key idea: The Presidency operates within an INTERACTIVE system — its power depends on relationships with Congress (lawmaking, appropriations, oversight), Judiciary (review, appointment), Bureaucracy (implementation, rulemaking), and the public (election, approval, mobilization).
      `
    },
    {
      id: 'govpres4-content',
      type: 'text' as const,
      content: `
## Presidency × Congress

| Interaction | Mechanism |
|---|---|
| **Lawmaking** | President proposes (recommendation power); negotiates terms; signs or vetoes; veto override = 2/3 of both chambers |
| **Appropriations** | Congress controls "power of the purse" (Art I § 8); president cannot spend funds Congress doesn't appropriate; impoundment limited by Budget Act 1974 |
| **War power** | Congress declares war (Art I); president commands armed forces (Art II); War Powers Resolution 1973 attempts balance |
| **Treaty + appointment** | President negotiates + nominates; Senate ratifies + confirms (Art II § 2 cl. 2) |
| **Oversight** | Congress investigates executive branch (subpoena, hearings, contempt); executive privilege limits (qualified per *US v. Nixon* 1974) |
| **Impeachment** | House majority impeaches; Senate 2/3 convicts; 4 presidents impeached (A. Johnson 1868, Clinton 1998, Trump 2019, Trump 2021); 0 convictions |

### Modern Presidential Strategies vis-à-vis Congress

| Strategy | Description |
|---|---|
| **Bargaining (Neustadt)** | "Power to persuade" — quid pro quo with members |
| **Going public (Kernell)** | Mobilize public opinion to pressure Congress |
| **Unilateral action (Howell)** | Act via EO, executive agreement, signing statement when Congress is gridlocked |
| **Reconciliation strategy** | Use 51-vote budget procedure for major partisan legislation (Bush tax cuts, ACA parts, Trump tax cuts, ARPA, IRA) |

## Presidency × Judiciary

| Interaction | Mechanism |
|---|---|
| **Appointment** | President nominates federal judges (district, circuit, Supreme Court); Senate confirms (Art II § 2 cl. 2) |
| **Judicial review** | Courts review presidential actions for constitutionality (*Marbury* 1803, *Youngstown* 1952, *US v. Nixon* 1974) |
| **Pardon** | President's absolute pardon power (Art II § 2 cl. 1) — "for Offences against the United States, except in Cases of Impeachment" |
| **Solicitor General** | Represents executive branch before SCOTUS; argues administration's legal position |
| **DOJ enforcement** | President sets law-enforcement priorities; appoints Attorney General + US Attorneys |
| **Court-packing attempts** | FDR 1937 (failed); modern proposals to expand SCOTUS rejected by Biden commission 2021 |

### Long-term Judicial Impact of Presidents

| President | SCOTUS appointments | Long-term doctrinal impact |
|---|---|---|
| FDR | 8 + 1 CJ promotion | New Deal acceptance; Black, Douglas, Frankfurter |
| Eisenhower | 5 | Warren CJ + Brennan = liberal Warren Court foundation |
| Nixon | 4 + 1 CJ | Burger CJ + Rehnquist + Powell + Blackmun |
| Reagan | 3 + 1 CJ promotion | Rehnquist CJ + O'Connor + Scalia + Kennedy |
| GW Bush | 2 | Roberts CJ + Alito |
| Obama | 2 | Sotomayor + Kagan |
| Trump (term 1) | 3 | Gorsuch + Kavanaugh + Barrett — created 6-3 conservative majority |
| Biden | 1 | Jackson — first Black woman justice |

## Presidency × Bureaucracy

| Interaction | Mechanism |
|---|---|
| **Take Care Clause** | Constitutional duty to "faithfully execute" laws — basis of presidential supervision |
| **Cabinet appointments** | President appoints Cabinet secretaries (Senate confirms); secretaries serve at presidential pleasure |
| **EOP (Executive Office of the President)** | ~1,800 staff; OMB, NSC, Council of Economic Advisers, etc. — centralizes policy in White House |
| **Executive orders** | Direct executive-branch officials |
| **Removal power** | *Myers v. US* 1926 (broad removal); *Humphrey's Executor* 1935 (independent agency limit); *Seila Law* 2020 (CFPB single director removable at will) |
| **OIRA review** | Office of Information and Regulatory Affairs reviews proposed rules (since Reagan EO 12291) |
| **Senate-confirmed appointments** | ~1,200 Senate-confirmed positions across executive branch |

### Bureaucratic Resistance to Presidential Direction

| Source | Description |
|---|---|
| **Civil service protection** | Pendleton Act 1883 — career civil servants cannot be fired for political reasons (only for cause) |
| **Independent agencies** | SEC, FCC, FRB, NLRB — multimember boards w/ staggered terms; commissioners removable only for cause |
| **Iron triangles** | Agency-Congress committee-interest group alliances resist presidential change |
| **Issue networks** | Modern looser policy communities w/ similar resistance dynamics |
| **Schedule F (Trump 2020 + 2025)** | Attempted to convert ~50,000 career employees to at-will to enable removal — a major modern presidential challenge to civil service |

## Presidency × Federalism

| Interaction | Mechanism |
|---|---|
| **Federal grants** | President proposes annual budget allocating federal grants to states + localities; conditions attached (Spending Clause) |
| **Federal-state coordination** | Disaster response (FEMA), border enforcement, drug enforcement, education |
| **Preemption** | Executive can interpret federal statutes to preempt state law (administrative preemption) |
| **State + local enforcement of federal immigration** | Major modern conflict (Obama deferred action, Trump enforcement priorities, Biden parole programs) |
| **Conditional spending** | E.g., highway funds conditioned on 21 drinking age (*South Dakota v. Dole* 1987 upheld) |

## Presidency × Public + Media

| Interaction | Mechanism |
|---|---|
| **Election** | 4-year terms; modern campaigns last 18-24 months + cost \\$1B+ per major candidate |
| **Approval ratings** | Modern presidents have ~50% average; high-approval presidents (Eisenhower, Reagan) more legislative success |
| **Bully pulpit (TR)** | Theodore Roosevelt's term for presidential public-persuasion authority |
| **Going public (Kernell 1986)** | Modern strategy of bypassing Congress via mass appeal |
| **Social media** | Trump's Twitter/Truth Social transformed presidential communication |
| **Press conferences + press secretary** | Daily White House press operation; managed messaging |
| **State of the Union** | Annual address (Art II § 3) — modern televised event reaching ~30 million viewers |

> 🔑 Key takeaway: The Presidency is INTERACTIVE — power depends on relationships with Congress (lawmaking + oversight), Judiciary (review + appointment), Bureaucracy (implementation + supervision), federalism (grants + coordination), and public (election + persuasion). Successful presidents leverage all these relationships; gridlocked presidents face the limits of unilateral action.
      `
    },
    {
      id: 'govpres4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Presidential Interactions** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the modern relationship between the Presidency and the federal bureaucracy?",
            options: [
              "The presidential-bureaucratic relationship combines CONSTITUTIONAL AUTHORITY (Take Care Clause Art II § 3 + Vesting Clause Art II § 1) with PRACTICAL TENSIONS: presidents control Cabinet appointments + ~1,200 Senate-confirmed positions + the ~1,800-person Executive Office of the President (EOP), can issue executive orders directing executive-branch officials, can fire most political appointees at will, and use OIRA (Office of Information and Regulatory Affairs, since Reagan EO 12291) to review proposed agency rules; HOWEVER, presidents face SIGNIFICANT BUREAUCRATIC RESISTANCE because (1) the PENDLETON ACT 1883 protects ~2 million career civil servants from political removal (cause only); (2) INDEPENDENT AGENCIES (SEC, FCC, FRB, NLRB) operate via multimember boards with staggered terms and for-cause-only removal (per *Humphrey's Executor* 1935); (3) IRON TRIANGLES + ISSUE NETWORKS resist presidential change; (4) Trump's SCHEDULE F (2020, restored 2025) attempts to convert ~50,000 career employees to at-will status to enable removal — representing a major modern challenge to civil service protections",
              "There is no presidential-bureaucratic relationship of any kind during the entire period from 1789 onward in any region of the United States with no Take Care Clause, no Vesting Clause, no Cabinet appointments, no EOP, no executive orders, no Pendleton Act, no independent agencies, no Humphrey's Executor, no iron triangles, no issue networks, and no Schedule F of any kind during the entire period in any region",
              "The President has absolute control over the bureaucracy and can fire all civil servants at will of any kind under any circumstance with no Pendleton Act protections, no independent agency for-cause removal, no Humphrey's Executor, no iron triangles, and no Schedule F controversy of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "The President has no control over the bureaucracy and the bureaucracy operates entirely independently of any kind under any circumstance with no Cabinet appointments, no EOP, no executive orders, no OIRA review, no Senate-confirmed appointments, and no Take Care Clause supervision of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Presidential-bureaucratic relationship: CONSTITUTIONAL AUTHORITY (Take Care Art II § 3 + Vesting Art II § 1) + PRACTICAL TENSIONS. Presidents control: Cabinet + ~1,200 Senate-confirmed + ~1,800 EOP + EOs + at-will firing of political appointees + OIRA rule review (Reagan EO 12291). RESISTANCE: (1) Pendleton 1883 protects ~2M career civil servants (cause only); (2) Independent agencies (SEC/FCC/FRB/NLRB) — multimember boards + staggered terms + for-cause removal per Humphrey\'s Executor 1935; (3) Iron triangles + issue networks; (4) Trump SCHEDULE F (2020/2025) → ~50K career → at-will = modern challenge to civil service.'
          },
          {
            question: "Which best describes the relationship between Presidency and Judiciary regarding judicial appointments?",
            options: [
              "The Constitution (Art II § 2 cl. 2) gives the President the power to nominate federal judges (Supreme Court justices, court of appeals judges, district court judges) with the advice and consent of the Senate (majority confirmation); SIGNIFICANCE: presidents shape the federal judiciary for DECADES because federal judges have LIFE TENURE (Art III § 1 — 'good Behaviour'); MODERN PATTERNS: (1) Reagan transformed federal judiciary via 3 SCOTUS appointments (O'Connor, Scalia, Kennedy + Rehnquist promotion to CJ) + ~400 lower-court appointments; (2) Trump's first term (2017-21) appointed 3 SCOTUS justices (Gorsuch, Kavanaugh, Barrett creating 6-3 conservative majority) + 230+ lower-court judges; (3) Biden appointed 1 SCOTUS justice (Jackson, first Black woman) + 235+ lower-court judges with focus on demographic + professional diversity; LONG-TERM IMPACT: 6-3 SCOTUS conservative majority has produced major doctrinal shifts including *Dobbs v. Jackson* 2022 (overturning *Roe v. Wade* 1973), *Bruen* 2022 (Second Amendment), *Loper Bright* 2024 (overturning Chevron deference)",
              "There is no presidential power to nominate federal judges of any kind during the entire period from 1789 onward in any region of the United States with no Article II § 2 cl. 2, no Senate confirmation, no life tenure, no Reagan transformation, no Trump 3 SCOTUS justices, no 6-3 conservative majority, no Dobbs, no Bruen, and no Loper Bright of any kind during the entire period in any region",
              "Federal judges serve only 4-year terms and are appointed entirely by the Senate without presidential involvement of any kind under any circumstance with no Article II § 2 cl. 2 nomination power, no presidential transformation of judiciary, and no long-term doctrinal impact of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Trump and Biden made no federal judicial appointments of any kind during their respective terms with no Gorsuch, no Kavanaugh, no Barrett, no Jackson, no lower-court appointments, no 6-3 conservative majority, and no Dobbs v. Jackson of any kind during the entire period from 2017 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Art II § 2 cl 2: President nominates federal judges (SCOTUS, COA, district); Senate majority confirms. SIGNIFICANCE: shapes judiciary for DECADES because Art III § 1 LIFE TENURE ("good Behaviour"). Patterns: (1) Reagan = 3 SCOTUS (O\'Connor + Scalia + Kennedy + Rehnquist CJ promotion) + ~400 lower-court; (2) Trump T1 = 3 SCOTUS (Gorsuch + Kavanaugh + Barrett → 6-3 conservative) + 230+ lower-court; (3) Biden = 1 SCOTUS (Jackson, 1st Black woman) + 235+ lower-court (diversity). 6-3 SCOTUS → Dobbs 2022 (overturned Roe 1973), Bruen 2022 (2A), Loper Bright 2024 (overturned Chevron).'
          }
        ]
      }
    },
    {
      id: 'govpres4-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — Presidential interactions**`,
      exercise: {
        questions: [
          {
            prompt: "Year of the Pendleton Act creating the merit-based federal civil service system (in response to Garfield's assassination 1881).",
            answer: '1883',
            acceptableAnswers: ['1883'],
            hint: 'Two years after Garfield assassination by disappointed office-seeker Charles Guiteau.'
          },
          {
            prompt: "Year of *Humphrey's Executor v. United States* — Court holds FTC commissioners removable only for cause (limiting presidential removal of independent agency officials).",
            answer: '1935',
            acceptableAnswers: ['1935'],
            hint: 'Same year as Wagner Act + Social Security Act + Schechter Poultry striking NIRA.'
          },
          {
            prompt: "Approximate number of staff in the modern Executive Office of the President (EOP) — round to the nearest hundred.",
            answer: '1800',
            acceptableAnswers: ['1800', '~1800', '1,800', '~1,800'],
            hint: 'EOP grew from ~50 (1939, when created by Brownlow Committee) to nearly 2000 modern.'
          }
        ]
      }
    },
    {
      id: 'govpres4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each presidential power/strategy to the actor it primarily targets.**`,
      exercise: {
        dropdowns: [
          {
            label: "Veto + signing statement + treaty negotiation: ___",
            options: ['Congress', 'Judiciary', 'Bureaucracy', 'Public/media']
          },
          {
            label: "Solicitor General + judicial nominations + pardon: ___",
            options: ['Congress', 'Judiciary', 'Bureaucracy', 'Public/media']
          },
          {
            label: "Executive order + OIRA review + Cabinet appointments + Schedule F: ___",
            options: ['Congress', 'Judiciary', 'Bureaucracy', 'Public/media']
          }
        ],
        correctAnswers: ['Congress', 'Judiciary', 'Bureaucracy'],
        hint1: 'Veto + signing statement + treaty negotiation all directly engage the lawmaking process (Congress).',
        hint2: 'Solicitor General + judicial nominations + pardon all directly involve the federal courts (Judiciary).',
        hint3: 'Executive order + OIRA review + Cabinet appointments + Schedule F all primarily target the bureaucracy.'
      }
    },
    {
      id: 'govpres4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Inter-Branch Dynamics**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: 'A president vetoes a bill. The originating chamber overrides 290-130, and the other chamber overrides 70-25. The bill becomes law over the president's veto.' What does this illustrate about checks and balances?",
              options: [
                "This illustrates the SUCCESSFUL exercise of CONGRESSIONAL CHECK on PRESIDENTIAL VETO via the 2/3 OVERRIDE provided in Article I § 7: (1) the originating chamber's 290-130 vote = ~69% (above the 2/3 = 67% threshold); (2) the other chamber's 70-25 vote = ~74% (above 2/3); both chambers exceeding 2/3 means the bill becomes law over the President's veto (per Art I § 7 cl. 2); SIGNIFICANCE: (1) 2/3 OVERRIDE is HARD because requires SUPERMAJORITY in both chambers — modern overrides occur in only ~5% of regular vetoes (e.g., Reagan 9 of 78 vetoes overridden, Trump 1 of 10, Biden 0 of 13); (2) when override happens, it typically reflects either bipartisan consensus on must-pass legislation (e.g., NDAA), OR strong opposition to a particularly unpopular veto (e.g., 2016 JASTA override of Obama veto on 9/11 victim lawsuits = 97-1 Senate, 348-77 House); (3) the OVERRIDE THREAT shapes presidential calculations even when override doesn't occur — presidents often negotiate compromises to avoid politically damaging vetoes",
                "There is no Article I § 7 override provision of any kind during the entire period from 1789 onward in any region of the United States with no 2/3 supermajority requirement, no veto override calculation, no Reagan 9 of 78 overrides, no Trump 1 of 10, no Biden 0 of 13, no JASTA 2016 override, and no override threat shaping presidential calculations of any kind during the entire period in any region",
                "The veto override requires only majority of both chambers and there is no 2/3 supermajority requirement of any kind under any circumstance with no Article I § 7 cl. 2, no JASTA precedent, no Reagan/Trump/Biden override statistics, and no presidential calculation about override threat of any kind during the entire period from 1789 onward in any region of the United States during the period",
                "Modern Congresses override roughly 50% of all regular vetoes of any kind under any circumstance with no Reagan 9 of 78 ratio, no Trump 1 of 10 ratio, no Biden 0 of 13 ratio, no JASTA 2016 example, and no rare-override pattern of any kind during the entire period from 1789 onward in any region of the United States during the period"
              ],
              correctAnswer: 0,
              explanation: 'Successful CONGRESSIONAL CHECK on VETO via 2/3 OVERRIDE (Art I § 7): originating chamber 290-130 ≈ 69% > 67% threshold; other chamber 70-25 ≈ 74% > 67% → bill becomes law over veto. SIGNIFICANCE: (1) 2/3 HARD because supermajority both chambers — modern ~5% override rate (Reagan 9/78, Trump 1/10, Biden 0/13). (2) Overrides typically = bipartisan consensus on must-pass (NDAA) OR unpopular veto (JASTA 2016 = 97-1 S, 348-77 H over Obama 9/11 lawsuits veto). (3) OVERRIDE THREAT shapes presidential calculations → negotiate compromises.'
          },
          {
            question: "AP scenario: 'A president pardons a former senior advisor convicted of perjury before any criminal sentence is served.' What does this illustrate about the constitutional pardon power?",
            options: [
              "This illustrates several key features of the PARDON POWER (Art II § 2 cl. 1 — 'shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment'): (1) ABSOLUTE — the pardon power is virtually unreviewable; courts cannot second-guess presidential pardon decisions; (2) BROAD TIMING — pardons can be granted before charges, after conviction, before or after sentencing, or at any other point — but only AFTER the offense has occurred (President cannot pardon for future conduct); (3) FEDERAL ONLY — pardons cover only federal offenses, not state offenses (state governors handle state pardons); (4) NOT IMPEACHMENT — pardons cannot prevent or undo impeachment + Senate conviction; HISTORICAL EXAMPLES: Ford pardoned Nixon 1974 (preempted any criminal charges); Bush 41 pardoned Iran-Contra figures 1992; Clinton pardoned Marc Rich 2001 (controversial last-day pardon); Trump pardoned Roger Stone, Michael Flynn, Steve Bannon (2020) and ~1,500 January 6 defendants (2025); Biden pardoned Hunter Biden + others (2024-25)",
              "There is no presidential pardon power of any kind during the entire period from 1789 onward in any region of the United States with no Article II § 2 cl. 1, no absolute pardon, no federal-offenses-only limit, no impeachment exception, no Ford pardon of Nixon, no Iran-Contra pardons, no Marc Rich pardon, no Trump pardons, and no Biden pardons of any kind during the entire period in any region",
              "Presidential pardons can be reviewed and overturned by federal courts of any kind under any circumstance with no absolute pardon power, no judicial deference, no Ford pardon precedent, and no historical pardon practice of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Presidents can pardon for future conduct that has not yet occurred and can pardon state offenses of any kind under any circumstance with no offense-must-have-occurred limit, no federal-offenses-only limit, and no governor role in state pardons of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Pardon Power (Art II § 2 cl 1) — "Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment." (1) ABSOLUTE — virtually unreviewable. (2) BROAD TIMING — before charges, after conviction, before/after sentencing — but only after offense occurred (no future conduct). (3) FEDERAL ONLY — not state (governors handle). (4) NOT IMPEACHMENT — can\'t prevent/undo impeachment + Senate conviction. Examples: Ford → Nixon (1974, preempted charges); Bush 41 → Iran-Contra (1992); Clinton → Marc Rich (2001 controversy); Trump → Stone/Flynn/Bannon (2020) + ~1,500 J6 defendants (2025); Biden → Hunter + others (2024-25).'
          }
        ]
      }
    }
  ]
}
