export const govPresidencyPart1Data = {
  topicSlug: 'gov-presidency',
  sections: [
    {
      id: 'govpres1-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Presidency

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Article II grants of executive power |
| Formal vs. informal presidential powers |
| Constitutional qualifications + selection + succession |
| Federalist 70 + the unitary executive |

> 🔑 Key idea: The Presidency combines **constitutional Article II grants** (commander-in-chief, treaty negotiation, appointment, veto, pardon, take-care) with **informal powers** (bargaining, executive orders, signing statements, agenda-setting, going public) — producing the most significant single office in modern American government.
      `
    },
    {
      id: 'govpres1-content',
      type: 'text' as const,
      content: `
## Article II — The Executive Power

### Article II § 1: Vesting Clause + Selection

| Provision | Substance |
|---|---|
| Vesting Clause | "The executive Power shall be vested in a President of the United States of America" — establishes UNITARY executive (one person, not council) |
| Term | 4 years; eligible for one consecutive reelection (per 22nd Amendment 1951 limiting to two terms) |
| Selection | Electoral College — each state's electors equal congressmen + senators (= 538 total since DC's 23rd Amendment 1961); winner needs 270; if no majority → House contingent election (one vote per state delegation) |
| Qualifications | Natural-born citizen, age 35+, U.S. resident 14 years |
| Oath | "I do solemnly swear...preserve, protect and defend the Constitution of the United States" |

### Article II § 2: Specific Grants

| Power | Source | Substance |
|---|---|---|
| Commander-in-Chief | Art II § 2 cl. 1 | Of Army, Navy, and state militias when called into federal service |
| Pardon | Art II § 2 cl. 1 | "for Offences against the United States, except in Cases of Impeachment" — absolute and unreviewable |
| Treaty | Art II § 2 cl. 2 | Negotiate treaties; requires Senate 2/3 ratification |
| Appointment | Art II § 2 cl. 2 | Ambassadors, judges, executive officers; requires Senate confirmation (Senate "advice and consent") |
| Recess appointments | Art II § 2 cl. 3 | Fill vacancies during Senate recess (limited by *NLRB v. Noel Canning* 2014) |

### Article II § 3: Take Care + Other Duties

| Power | Source | Substance |
|---|---|---|
| State of the Union | Art II § 3 | Periodic report to Congress; basis for modern annual address |
| Recommendation | Art II § 3 | Recommend "Measures as he shall judge necessary and expedient" — basis for legislative agenda |
| Convene Congress | Art II § 3 | Special sessions in extraordinary cases |
| Receive ambassadors | Art II § 3 | De facto recognition power for foreign governments |
| Take Care Clause | Art II § 3 | "he shall take Care that the Laws be faithfully executed" — basis of bureaucratic supervision authority |

### Article II § 4: Removal

| Provision | Substance |
|---|---|
| Impeachment | "shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors" |
| Process | House majority impeaches; Senate 2/3 convicts (Chief Justice presides for presidential trials) |

## Formal vs. Informal Powers

| Type | Examples |
|---|---|
| **Formal (constitutional)** | Veto, pocket veto, commander-in-chief, treaty negotiation, appointment, pardon, recommendation, convene Congress |
| **Informal (developed by practice)** | Executive orders, executive agreements, signing statements, agenda-setting, public persuasion ("going public"), bargaining with Congress + bureaucracy + interest groups |

### Key Informal Powers

| Power | Description |
|---|---|
| **Executive order** | Presidential directive to executive-branch officials with force of law as long as consistent with statute + Constitution; subject to judicial + congressional override |
| **Executive agreement** | International agreement made by president alone (no Senate ratification); binding on signatory administration but not necessarily successors |
| **Signing statement** | Statement issued by president when signing a bill; may articulate constitutional concerns or interpretive guidance for executive enforcement |
| **Going public** | Mobilizing public opinion to pressure Congress (developed in modern media era — Reagan, Obama, Trump) |
| **Bargaining (Neustadt)** | Richard Neustadt's *Presidential Power* (1960): "presidential power is the power to persuade" — president must bargain with other constitutional actors |

## Federalist 70 — The Unitary Executive

> Hamilton (Federalist 70 — REQUIRED AP Gov foundational document):
> *"Energy in the Executive is a leading character in the definition of good government...The ingredients which constitute energy in the Executive are, first, unity; secondly, duration; thirdly, an adequate provision for its support; fourthly, competent powers."*

| Hamilton's argument | Modern application |
|---|---|
| **UNITY** — one president, not council | Constitution rejected plural executive (e.g., a 3-person executive); modern unitary executive theory derives from Vesting Clause + Hamilton |
| **DURATION** — 4-year term sufficient for energetic action | Long enough to develop + execute a program; balanced against accountability via reelection |
| **SUPPORT** — adequate salary + resources | Presidential salary (\\$400K + housing) + EOP staff (~1,800) + Cabinet support |
| **COMPETENT POWERS** — sufficient constitutional authority | Article II grants + Necessary and Proper extension via Take Care Clause |

> 🔑 Key takeaway: The Presidency derives ENERGY from unitary structure, fixed term, and constitutional grants — but operates within a system of checks (impeachment, override, judicial review, advice and consent, appropriations). Modern presidents combine FORMAL constitutional powers with INFORMAL bargaining + public persuasion to govern in a system of shared powers.
      `
    },
    {
      id: 'govpres1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Article II & Federalist 70** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the Vesting Clause of Article II § 1 and its modern significance?",
            options: [
              "It vests executive power in one President, rejecting a plural executive and anchoring the modern unitary executive theory of presidential control",
              "It vests executive power in a council of three officers, copying the Roman consulship so that no modern leader acts alone",
              "It lists every power the President holds, so modern presidents may act only where Article II names a specific power",
              "It vests executive power jointly in the President and the Senate, making the modern Cabinet a shared body"
            ],
            correctAnswer: 0,
            explanation: 'Vesting Clause (Art II § 1): "The executive Power shall be vested in a President of the United States of America." Significance: (1) UNITARY EXECUTIVE — singular "a President" rejects plural-executive (3-person council, Roman consulship model) → SINGLE accountable officer. (2) UNITARY EXECUTIVE THEORY — modern conservatives (Scalia, Morrison v. Olson 1988 dissent): all executive power belongs to President → presidential control over independent agencies + law-execution officers. Supplements Art II § 2 + § 3 as residual executive authority.'
          },
          {
            question: "Which best summarizes Hamilton's argument in Federalist 70 regarding the executive?",
            options: [
              "Good government needs an energetic executive, built on unity, duration, adequate support and competent powers",
              "A plural executive council, with rotating terms, mutual vetoes and Senate oversight, best protects liberty from a strong leader",
              "Executive energy is dangerous, so a short term, no veto and removal by majority vote should bind the President firmly",
              "The executive should be chosen by Congress, serve one term, and hold only the powers the legislature delegates each year"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 70 (Hamilton, REQUIRED foundational document): "Energy in the Executive is a leading character in the definition of good government." Four ingredients: (1) UNITY — one president → decisive + accountable; (2) DURATION — 4-yr term to develop + execute; (3) SUPPORT — salary/resources to attract talent; (4) COMPETENT POWERS — constitutional authority to fulfill responsibilities. Response to Anti-Federalist concerns (Brutus 1) — Hamilton: unitary + accountable + term-limited executive is BEST defense against tyranny + BEST guarantee of effective national government.'
          }
        ]
      }
    },
    {
      id: 'govpres1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — Article II provisions**`,
      exercise: {
        questions: [
          {
            prompt: "Number of years a presidential candidate must have been a U.S. resident per Article II § 1 (numeric).",
            answer: '14',
            acceptableAnswers: ['14', 'fourteen'],
            hint: 'Same number as years of Resident requirement.'
          },
          {
            prompt: "Constitutional fraction of senators required to ratify a treaty per Article II § 2 (e.g., '2/3').",
            answer: '2/3',
            acceptableAnswers: ['2/3', 'two-thirds', 'two thirds'],
            hint: 'Supermajority — same fraction as required to override a veto.'
          },
          {
            prompt: "Article + section of the Take Care Clause requiring the President to faithfully execute the laws (e.g., 'II § 3').",
            answer: 'II § 3',
            acceptableAnswers: ['II § 3', 'II Section 3', 'Article II Section 3', 'Article II § 3', 'Art II § 3', 'II 3', 'Article 2 Section 3'],
            hint: 'Same Article + section that includes State of the Union, recommendation, and receive ambassadors clauses.'
          }
        ]
      }
    },
    {
      id: 'govpres1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each presidential power to formal vs. informal classification.**`,
      exercise: {
        dropdowns: [
          {
            label: "Veto of legislation passed by Congress: ___",
            options: ['Formal — explicit Article I § 7 grant', 'Informal — developed by practice', 'Both formal and informal', 'Neither formal nor informal']
          },
          {
            label: "Executive order to executive-branch officials: ___",
            options: ['Formal — explicit Article I § 7 grant', 'Informal — developed by practice', 'Both formal and informal', 'Neither formal nor informal']
          },
          {
            label: "Executive agreement with foreign government (no Senate ratification): ___",
            options: ['Formal — explicit Article I § 7 grant', 'Informal — developed by practice', 'Both formal and informal', 'Neither formal nor informal']
          }
        ],
        correctAnswers: ['Formal — explicit Article I § 7 grant', 'Informal — developed by practice', 'Informal — developed by practice'],
        hint1: 'Veto is explicitly granted in Article I § 7 (which describes lawmaking process).',
        hint2: 'Executive orders have no explicit constitutional text but derive from the Vesting Clause + Take Care Clause + statutory delegations.',
        hint3: 'Executive agreements bypass the Article II § 2 treaty process — they are presidential practice not constitutional text.'
      }
    },
    {
      id: 'govpres1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Selection & Succession**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: 'In a hypothetical 2028 election, no candidate receives a majority of Electoral College votes (270 of 538). What constitutional process determines the next president?'",
            options: [
              "The House picks the President from the top three electoral vote-getters, with each state delegation casting one vote",
              "The Senate picks the President from the top two electoral vote-getters, with each senator casting one vote",
              "House members pick the President from the top five candidates in the national popular vote, each member casting one vote",
              "The Supreme Court breaks the deadlock by ordering a new nationwide popular vote between the top two candidates"
            ],
            correctAnswer: 0,
            explanation: '12th Amendment (1804) contingent election: HOUSE selects President from TOP 3 Electoral College vote-getters; STATE DELEGATION CASTS ONE VOTE (CA 52 = 1 vote; WY 1 = 1 vote); 26 states needed. SENATE separately selects VP from top 2 vice-presidential vote-getters; each senator votes individually; 51 needed. Historical: 1800 (Jefferson over Burr after 36 House ballots) + 1824 (Adams over Jackson plurality — "corrupt bargain" → Jackson 1828 revenge).'
          },
          {
            question: "AP scenario: 'A sitting president dies in office. What is the immediate succession process and modern constitutional framework?'",
            options: [
              "The Vice President becomes President at once, as the 25th Amendment confirmed in 1967 after Tyler set the precedent in 1841",
              "The Vice President only acts as President until Congress holds a special election within 90 days",
              "The Speaker of the House becomes President, as the Presidential Succession Act of 1947 places the Speaker first in line",
              "The Vice President must win Senate confirmation by majority vote before taking the oath, under the 22nd Amendment ratified in 1951"
            ],
            correctAnswer: 0,
            explanation: '25th Amendment § 1 (1967): VP IMMEDIATELY becomes President on death/resignation/removal. 8 succeeded via death (Tyler 1841, Fillmore 1850, A. Johnson 1865, Arthur 1881, TR 1901, Coolidge 1923, Truman 1945, LBJ 1963) + 1 via resignation (Ford 1974 after Nixon). § 2: new President nominates new VP, confirmed by majority of both House + Senate (Ford 1973, Rockefeller 1974). After VP: Presidential Succession Act 1947 → Speaker, President pro tempore, Cabinet (in order of creation).'
          }
        ]
      }
    }
  ]
}
