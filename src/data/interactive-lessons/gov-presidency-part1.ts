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
              "The Vesting Clause provides 'The executive Power shall be vested in a President of the United States of America'; this language is significant for two reasons: (1) UNITARY EXECUTIVE — by vesting power in 'a President' (singular), the Constitution rejects plural-executive proposals (a 3-person executive council, on the model of the Roman consulship or Articles of Confederation Continental Congress), creating a SINGLE accountable officer; (2) UNITARY EXECUTIVE THEORY — modern conservative legal theorists (e.g., Justice Scalia in *Morrison v. Olson* 1988 dissent) interpret the Vesting Clause to mean ALL executive power belongs to the President, requiring presidential control over independent agencies and law-execution officers; the Vesting Clause supplements the more specific Article II § 2 + § 3 grants by serving as a residual source of executive authority",
              "There is no Vesting Clause of any kind in Article II of the Constitution during the entire period from 1789 onward in any region of the United States with no executive power vested, no unitary executive, no single president, no plural-executive rejection, and no Morrison v. Olson dissent of any kind during the entire period in any region",
              "The Vesting Clause vests executive power in a 3-person executive council on the Roman consulship model of any kind under any circumstance with no single president, no unitary executive, no Morrison v. Olson dissent, and no presidential supervision of independent agencies of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "The Vesting Clause appears in Article I and grants legislative power to Congress of any kind under any circumstance with no executive power vesting in the President, no unitary executive, no Morrison v. Olson dissent, and no presidential supervision of bureaucracy of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Vesting Clause (Art II § 1): "The executive Power shall be vested in a President of the United States of America." Significance: (1) UNITARY EXECUTIVE — singular "a President" rejects plural-executive (3-person council, Roman consulship model) → SINGLE accountable officer. (2) UNITARY EXECUTIVE THEORY — modern conservatives (Scalia, Morrison v. Olson 1988 dissent): all executive power belongs to President → presidential control over independent agencies + law-execution officers. Supplements Art II § 2 + § 3 as residual executive authority.'
          },
          {
            question: "Which best summarizes Hamilton's argument in Federalist 70 regarding the executive?",
            options: [
              "Hamilton's *Federalist 70* (REQUIRED AP Gov foundational document) argues that 'Energy in the Executive is a leading character in the definition of good government' and identifies four 'ingredients' that constitute executive energy: (1) UNITY — one president (not a council) ensures decisive action and accountability; (2) DURATION — sufficient term length (4 years) to develop and execute programs; (3) ADEQUATE SUPPORT — salary and resources sufficient to attract capable officeholders; (4) COMPETENT POWERS — constitutional authority sufficient to fulfill executive responsibilities; Hamilton was responding to Anti-Federalist concerns (e.g., *Brutus 1*) that an 'energetic' executive would tend toward monarchy — Hamilton argued instead that a unitary, accountable, term-limited executive was the BEST defense against tyranny and the BEST guarantee of effective national government",
              "There is no Federalist 70 of any kind during the entire period from 1788 onward in any region of the United States with no Alexander Hamilton, no executive energy, no unity, no duration, no adequate support, no competent powers, no Anti-Federalist response, and no Brutus 1 of any kind during the entire period in any region",
              "Federalist 70 argues that the executive should be a 3-person council on the Roman consulship model of any kind under any circumstance with no unity, no Alexander Hamilton, no four ingredients of executive energy, and no Anti-Federalist response of any kind during the entire period from 1788 onward in any region of the United States during the period",
              "Federalist 70 was written by James Madison and argues that Congress should be the dominant branch of any kind under any circumstance with no Alexander Hamilton, no executive energy, no unity, no duration, no adequate support, and no competent powers of any kind during the entire period from 1788 onward in any region of the United States during the period"
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
              "The 12th Amendment (1804) provides that if no candidate receives an Electoral College majority, the HOUSE OF REPRESENTATIVES selects the President from among the TOP 3 Electoral College vote-getters, with each STATE DELEGATION CASTING ONE VOTE (so that California's 52-member delegation and Wyoming's 1-member delegation each have 1 vote); a candidate needs 26 state votes to win; the Senate separately selects the Vice President from among the TOP 2 vice-presidential vote-getters with EACH SENATOR voting individually (51 needed); HISTORICAL PRECEDENT: this contingent election occurred in 1800 (Jefferson over Burr after 36 House ballots) and 1824 (House selected Adams over Jackson + Crawford + Clay despite Jackson winning Electoral College plurality — the 'corrupt bargain' that produced Jackson's revenge in 1828)",
              "There is no 12th Amendment of any kind during the entire period from 1804 onward in any region of the United States with no contingent election, no House selection, no state-delegation-one-vote, no Senate selection of Vice President, no 1800 Jefferson-Burr deadlock, and no 1824 corrupt bargain of any kind during the entire period in any region",
              "If no Electoral College majority is achieved, the Senate selects the President with each senator voting individually of any kind under any circumstance with no House contingent election, no state-delegation-one-vote, and no 12th Amendment of any kind during the entire period from 1804 onward in any region of the United States during the period",
              "If no Electoral College majority is achieved, the Supreme Court selects the President of any kind under any circumstance with no House contingent election, no Senate selection of Vice President, no 12th Amendment, and no 1800 or 1824 historical precedent of any kind during the entire period from 1804 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: '12th Amendment (1804) contingent election: HOUSE selects President from TOP 3 Electoral College vote-getters; STATE DELEGATION CASTS ONE VOTE (CA 52 = 1 vote; WY 1 = 1 vote); 26 states needed. SENATE separately selects VP from top 2 vice-presidential vote-getters; each senator votes individually; 51 needed. Historical: 1800 (Jefferson over Burr after 36 House ballots) + 1824 (Adams over Jackson plurality — "corrupt bargain" → Jackson 1828 revenge).'
          },
          {
            question: "AP scenario: 'A sitting president dies in office. What is the immediate succession process and modern constitutional framework?'",
            options: [
              "If a president dies in office, the VICE PRESIDENT immediately becomes President per the 25th Amendment § 1 (1967): 'In case of the removal of the President from office or of his death or resignation, the Vice President shall become President'; HISTORICAL EVENTS: 8 vice presidents have become President via death (Tyler 1841, Fillmore 1850, A. Johnson 1865, Arthur 1881, T. Roosevelt 1901, Coolidge 1923, Truman 1945, L. Johnson 1963) + 1 via resignation (Ford 1974); the new president then NOMINATES a new Vice President under 25th Amendment § 2, who must be confirmed by majority vote of both House and Senate (used twice — Ford 1973 confirmed as VP, then Rockefeller 1974 confirmed as Ford's VP); after the VP, the Presidential Succession Act 1947 establishes the order: Speaker of the House, President pro tempore of the Senate, then Cabinet officers in order of department creation",
              "There is no 25th Amendment of any kind during the entire period from 1967 onward in any region of the United States with no presidential succession process, no VP automatic succession, no nomination of replacement VP, no Presidential Succession Act of 1947, no Tyler 1841 precedent, and no Ford 1974 succession of any kind during the entire period in any region",
              "If a president dies in office the Speaker of the House immediately becomes President without any role for the Vice President of any kind under any circumstance with no 25th Amendment, no VP automatic succession, no presidential nomination of replacement VP, and no Presidential Succession Act of 1947 of any kind during the entire period from 1967 onward in any region of the United States during the period",
              "There has never been a vice-presidential succession of any kind during the entire period from 1841 onward in any region of the United States with no Tyler, no Fillmore, no Andrew Johnson, no Arthur, no Theodore Roosevelt, no Coolidge, no Truman, no Lyndon Johnson, and no Ford of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: '25th Amendment § 1 (1967): VP IMMEDIATELY becomes President on death/resignation/removal. 8 succeeded via death (Tyler 1841, Fillmore 1850, A. Johnson 1865, Arthur 1881, TR 1901, Coolidge 1923, Truman 1945, LBJ 1963) + 1 via resignation (Ford 1974 after Nixon). § 2: new President nominates new VP, confirmed by majority of both House + Senate (Ford 1973, Rockefeller 1974). After VP: Presidential Succession Act 1947 → Speaker, President pro tempore, Cabinet (in order of creation).'
          }
        ]
      }
    }
  ]
}
