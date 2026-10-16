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
| **Presidential ideology + compliance monitoring** | A president's ideology, authority, and influence shape how agencies pursue the administration's goals; monitoring checks that funds and rules are followed (EK 2.14.B.1-2) |
| **Senate-confirmed appointments** | ~1,200 Senate-confirmed positions across executive branch |

### Bureaucratic Resistance to Presidential Direction

| Source | Description |
|---|---|
| **Civil service protection** | Pendleton Act 1883 — career civil servants cannot be fired for political reasons (only for cause) |
| **Independent agencies** | SEC, FCC, FRB, NLRB — multimember boards w/ staggered terms; commissioners removable only for cause |
| **Iron triangles** | Agency-Congress committee-interest group alliances resist presidential change |
| **Issue networks** | Modern looser policy communities w/ similar resistance dynamics |

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
              "Presidents appoint agency leaders and direct them by executive order, yet career civil servants and congressional statutes limit their control",
              "Presidents may fire any civil servant at will and rewrite agency rules alone, so the bureaucracy follows presidential orders",
              "Congress appoints most agency heads, so presidents shape the bureaucracy only through budget requests and public speeches",
              "Independent agencies report only to the Supreme Court, so presidents directly control just the Cabinet departments"
            ],
            correctAnswer: 0,
            explanation: 'Presidential-bureaucratic relationship: CONSTITUTIONAL AUTHORITY (Take Care Art II § 3 + Vesting Art II § 1) + PRACTICAL TENSIONS. Presidents control: Cabinet + ~1,200 Senate-confirmed + ~1,800 EOP + EOs + at-will firing of political appointees (EK 2.14.B.1). RESISTANCE: (1) Pendleton 1883 merit system protects career civil servants (EK 2.12.A.2); (2) Independent agencies (SEC/FCC/FRB/NLRB) — multimember boards + staggered terms + for-cause removal; (3) Iron triangles + issue networks (EK 2.12.A.1); (4) congressional statutes and oversight (EK 2.14.A.1).'
          },
          {
            question: "Which best describes the relationship between Presidency and Judiciary regarding judicial appointments?",
            options: [
              "Presidents nominate federal judges for Senate confirmation, and life tenure lets those choices shape courts for decades",
              "Presidents appoint federal judges alone, and judges serve fixed ten-year terms so each new president can reshape the courts quickly",
              "The Senate nominates federal judges and the President confirms them, and judges may be removed by a majority vote of Congress",
              "The Chief Justice nominates lower federal judges for Senate confirmation, so presidents influence only Supreme Court seats"
            ],
            correctAnswer: 0,
            explanation: 'Art II § 2 cl 2: President nominates federal judges (SCOTUS, COA, district); Senate majority confirms. SIGNIFICANCE: shapes judiciary for DECADES because Art III § 1 LIFE TENURE ("good Behaviour"). Patterns: (1) Reagan = 3 SCOTUS (O\'Connor + Scalia + Kennedy + Rehnquist CJ promotion) + ~400 lower-court; (2) Trump T1 = 3 SCOTUS (Gorsuch + Kavanaugh + Barrett → 6-3 conservative) + 230+ lower-court; (3) Biden = 1 SCOTUS (Jackson, 1st Black woman) + 235+ lower-court (diversity). 6-3 SCOTUS → Dobbs 2022 (overturned Roe 1973) (EK 2.5.A.2, 2.9.A.2).'
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
            prompt: "The 1974 law (a CED illustrative example) limiting a president's ability to refuse to spend money Congress appropriated: the Budget and ___ Control Act.",
            answer: 'Impoundment',
            acceptableAnswers: ['Impoundment', 'impoundment'],
            hint: 'Passed after Nixon withheld appropriated funds.'
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
            label: "Executive order + OMB budget review + Cabinet appointments + directives to agencies: ___",
            options: ['Congress', 'Judiciary', 'Bureaucracy', 'Public/media']
          }
        ],
        correctAnswers: ['Congress', 'Judiciary', 'Bureaucracy'],
        hint1: 'Veto + signing statement + treaty negotiation all directly engage the lawmaking process (Congress).',
        hint2: 'Solicitor General + judicial nominations + pardon all directly involve the federal courts (Judiciary).',
        hint3: 'Executive orders, OMB review, Cabinet appointments, and agency directives all primarily target the bureaucracy (EK 2.14.B.1).'
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
                "Each chamber cleared the two-thirds threshold, so Congress checked the President by overriding the veto",
                "The originating chamber fell short of two-thirds, so the bill became law only because the Senate's margin was larger",
                "Overrides need three-fourths of each chamber, so the President's veto should have stood",
                "The Supreme Court must approve an override as a further check, so the bill is not yet law"
              ],
              correctAnswer: 0,
              explanation: 'Successful CONGRESSIONAL CHECK on VETO via 2/3 OVERRIDE (Art I § 7): originating chamber 290-130 ≈ 69% > 67% threshold; other chamber 70-25 ≈ 74% > 67% → bill becomes law over veto. SIGNIFICANCE: (1) 2/3 HARD because supermajority both chambers — modern ~5% override rate (Reagan 9/78, Trump 1/10, Biden 0/13). (2) Overrides typically = bipartisan consensus on must-pass (NDAA) OR unpopular veto (JASTA 2016 = 97-1 S, 348-77 H over Obama 9/11 lawsuits veto). (3) OVERRIDE THREAT shapes presidential calculations → negotiate compromises.'
          },
          {
            question: "AP scenario: 'A president pardons a former senior advisor convicted of perjury before any criminal sentence is served.' What does this illustrate about the constitutional pardon power?",
            options: [
              "The pardon power is nearly unreviewable and may be used at any time after an offense, except in cases of impeachment",
              "Pardons can be issued only after a sentence is fully served, so this pardon would be invalid",
              "Pardons for perjury require Senate consent, because perjury is an offense against Congress's power to investigate",
              "Presidential pardons cover state and federal crimes alike, so this one would also block any later state-level prosecution"
            ],
            correctAnswer: 0,
            explanation: 'Pardon Power (Art II § 2 cl 1) — "Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment." (1) ABSOLUTE — virtually unreviewable. (2) BROAD TIMING — before charges, after conviction, before/after sentencing — but only after offense occurred (no future conduct). (3) FEDERAL ONLY — not state (governors handle). (4) NOT IMPEACHMENT — can\'t prevent/undo impeachment + Senate conviction. Examples: Ford → Nixon (1974, preempted charges); Bush 41 → Iran-Contra (1992); Clinton → Marc Rich (2001 controversy); Trump → Stone/Flynn/Bannon (2020) + ~1,500 J6 defendants (2025); Biden → Hunter + others (2024-25).'
          }
        ]
      }
    }
  ]
}
