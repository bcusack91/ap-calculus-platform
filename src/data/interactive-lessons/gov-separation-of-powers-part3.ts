export const govSeparationOfPowersPart3Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {
      id: 'govsep3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Separation of Powers

**Part 3 of 7 — Patterns & Examples: Landmark Conflicts**

---

| Section |
|---|
| Major inter-branch conflicts in U.S. history |
| Required AP Gov SCOTUS cases |
| Landmark "constitutional moments" |
| Patterns of branch supremacy over time |

> 🔑 Key idea: Inter-branch conflicts are not exceptional — they are the NORMAL operation of separation of powers. Studying landmark conflicts reveals patterns of when and how each branch dominates.
      `
    },
    {
      id: 'govsep3-content',
      type: 'text' as const,
      content: `
## Major Inter-Branch Conflicts

| Era | Conflict | Resolution |
|---|---|---|
| 1803 | Marbury v. Madison | Court establishes judicial review; refuses to issue writ |
| 1832 | Worcester v. Georgia | Andrew Jackson reportedly: "John Marshall has made his decision; now let him enforce it"; federal Court ignored |
| 1865-69 | Reconstruction Congress vs. Andrew Johnson | Tenure of Office Act 1867; Johnson impeached 1868 (acquitted by 1 vote) |
| 1936-37 | New Deal vs. Court | "Switch in time" 1937; FDR Court-packing plan failed |
| 1952 | Truman steel seizure | Youngstown Sheet & Tube Co. v. Sawyer — President's seizure unconstitutional |
| 1973-74 | Watergate | United States v. Nixon — executive privilege not absolute; Nixon resigns 1974 |
| 1987 | Bork nomination | Senate rejects Robert Bork for the Supreme Court, 42-58 — confirmation as a check (CED illustrative) |
| 1995-96 | Government shutdown | Clinton vs. Gingrich Congress over budget |
| 1998-99 | Clinton impeachment | House impeaches; Senate acquits (CED illustrative) |
| 2018-19 | Mueller investigation | Special counsel investigation of Russian interference |
| 2019 + 2021 | Trump impeachments | Both acquitted by Senate |

## Required AP Gov SCOTUS Cases on Separation of Powers

| Case | Year | Branch action | Holding |
|---|---|---|---|
| ***Marbury v. Madison*** | 1803 | Judicial → Executive (Madison) | Court establishes judicial review; can declare federal acts unconstitutional |

## Other Cases on Inter-Branch and Federal-State Power

*McCulloch* and *Baker* are also required cases; *United States v. Nixon* is a CED illustrative example; the rest are context, and the exam supplies the facts if it uses them.

| Case | Year | Branch action | Holding |
|---|---|---|---|
| *McCulloch v. Maryland* (REQUIRED) | 1819 | Judicial → Federalism | Implied federal powers; Necessary and Proper |
| *Youngstown Sheet & Tube Co. v. Sawyer* | 1952 | Judicial → Executive | Truman steel seizure unconstitutional — no law authorized it |
| *Cooper v. Aaron* | 1958 | Judicial → State | Court establishes judicial supremacy over constitutional interpretation |
| *Baker v. Carr* (REQUIRED) | 1962 | Judicial → State | "One person, one vote" — judicial review of legislative apportionment |
| *United States v. Nixon* | 1974 | Judicial → Executive | Executive privilege not absolute; Nixon must turn over tapes |

## Landmark "Constitutional Moments"

| Constitutional moment | Year(s) | Significance |
|---|---|---|
| **Federalist Era** | 1789-1800 | Establishment of federal government; Bill of Rights; Marbury foundation |
| **Reconstruction** | 1865-77 | 13th, 14th, 15th Amendments; Andrew Johnson impeachment; federal authority over states |
| **Progressive Era** | 1890s-1920s | 16th, 17th, 18th, 19th Amendments; growth of federal regulation |
| **New Deal Constitutional Revolution** | 1933-37 | Massive expansion of federal commerce + spending power; cooperative federalism |
| **Civil Rights Era** | 1954-65 | Brown v. Board, CRA, VRA; federal supremacy over state segregation |
| **Watergate Era** | 1973-74 | Limits on executive power; restoration of congressional authority |
| **Modern Federalism Revival** | 1995-present | Lopez (required), Morrison, NFIB |

## Patterns of Branch Supremacy

| Era | Dominant branch | Why |
|---|---|---|
| 1789-1800 | Legislative (Federalist Era) | Constitutional novelty; presidential restraint |
| 1801-29 | Judicial (Marshall Court) | Marbury 1803, McCulloch 1819, Gibbons 1824 |
| 1829-50 | Executive (Jackson era) | Strong populist presidency; veto used aggressively |
| 1865-77 | Legislative (Radical Reconstruction) | Civil War aftermath; Andrew Johnson impeachment |
| 1877-1933 | Mixed | Gilded Age + Progressive Era; Court limits federal regulation |
| 1933-69 | Executive (New Deal/Cold War/Great Society) | Crisis-driven expansion; "Imperial Presidency" (Schlesinger 1973) |
| 1973-2000 | Mixed/Legislative resurgence | Watergate; War Powers Resolution 1973; Budget Act 1974 |
| 2001-present | Executive resurgence | Post-9/11 expansion; unitary-executive theory; gridlocked Congress |

> 🔑 Key takeaway: The framers designed checks and balances to PREVENT permanent dominance by any one branch — but historical patterns show that crisis (Civil War, New Deal, 9/11) typically tilts power toward the executive. Restoration of inter-branch balance has historically required either constitutional amendment (post-Civil War) or major scandal (Watergate).
      `
    },
    {
      id: 'govsep3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Landmark Cases** 🎯`,
      exercise: {
        questions: [
          {
            question: "In 1952 the Supreme Court ruled that President Truman could not seize the nation's steel mills during the Korean War, because neither the Constitution nor any law passed by Congress authorized the seizure. Which principle does this ruling best illustrate?",
            options: [
              "Separation of powers confines the President to the authority actually granted to the office, even during a wartime emergency",
              "Federalism reserves the regulation of private industry to the states during wartime",
              "Judicial restraint requires courts to defer to the President on wartime decisions",
              "The commander-in-chief power gives the President unlimited authority over the economy in war"
            ],
            correctAnswer: 0,
            explanation: 'SEPARATION OF POWERS (EK 1.6.A.1): each branch has specific, separate powers, and the President\'s power comes from the Constitution or from laws passed by Congress. Because Congress had not authorized the seizure (it had even declined to grant that power), the Court held the President lacked authority — a judicial check on the executive. Industry regulation is not reserved to the states in this situation, the Court did not defer, and the commander-in-chief power is not unlimited.'
          },
          {
            question: "In United States v. Nixon (1974), the Supreme Court unanimously ordered President Nixon to turn over subpoenaed White House tapes, rejecting his claim that executive privilege is absolute. Which principle does this ruling best illustrate?",
            options: [
              "Checks and balances allow legal action against officials who abuse power",
              "Federalism lets state courts overrule federal officials who withhold evidence in criminal trials",
              "Popular sovereignty requires the President to release every record whenever voters ask for it",
              "Judicial restraint requires courts to accept the President's own view of his constitutional powers"
            ],
            correctAnswer: 0,
            explanation: 'EK 1.6.B.2: checks and balances and separation of powers allow LEGAL ACTIONS to be taken against public officials deemed to have abused their power. United States v. Nixon (a CED illustrative example) required the President to comply with a judicial subpoena; Nixon released the tapes and resigned in August 1974 as the House moved toward impeachment. State courts do not overrule federal officials, voters cannot demand all records, and the Court rejected — not accepted — the President\'s view.'
          }
        ]
      }
    },
    {
      id: 'govsep3-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — cases and checks**`,
      exercise: {
        questions: [
          {
            prompt: "The 1803 case establishing judicial review of federal statutes.",
            answer: 'Marbury v. Madison',
            acceptableAnswers: ['Marbury v. Madison', 'Marbury v Madison', 'Marbury vs. Madison', 'marbury v madison', 'Marbury'],
            hint: 'Chief Justice John Marshall opinion involving William Marbury\'s undelivered judicial commission.'
          },
          {
            prompt: "The House's power to formally charge an official with abuse of power or misconduct, the first step toward removal: ___.",
            answer: 'impeachment',
            acceptableAnswers: ['impeachment', 'Impeachment', 'impeach'],
            hint: 'EK 1.6.B.2 — the Senate then holds the trial.'
          },
          {
            prompt: "The Federalist paper in which Madison explains how separation of powers and checks and balances control abuses by majorities: Federalist No. ___.",
            answer: '51',
            acceptableAnswers: ['51', 'No. 51', 'Federalist 51', 'Federalist No. 51'],
            hint: '"Ambition must be made to counteract ambition."'
          }
        ]
      }
    },
    {
      id: 'govsep3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each example to the check it illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: "The Supreme Court declares part of an act of Congress unconstitutional (Marbury v. Madison, 1803): ___",
            options: ['Judicial review', 'Impeachment', 'Senate confirmation', 'Presidential veto']
          },
          {
            label: "The House formally charges President Andrew Johnson (1868) and President Bill Clinton (1998) with misconduct: ___",
            options: ['Judicial review', 'Impeachment', 'Senate confirmation', 'Presidential veto']
          },
          {
            label: "The Senate votes 42-58 against Robert Bork's 1987 Supreme Court nomination: ___",
            options: ['Judicial review', 'Impeachment', 'Senate confirmation', 'Presidential veto']
          }
        ],
        correctAnswers: ['Judicial review', 'Impeachment', 'Senate confirmation'],
        hint1: 'Marbury v. Madison (1803) — the judiciary checks Congress.',
        hint2: 'EK 1.6.B.2 — the House charges, the Senate tries.',
        hint3: 'EK 2.5.A.1 — the Senate checks the appointment power; Bork is a CED illustrative failed appointment.',
        explanation: 'Each example is a different check (EK 1.6.A.1, 1.6.B.2, 2.5.A.1): judicial review (Marbury) lets courts strike laws; impeachment (Johnson, Clinton — CED illustrative examples) lets Congress charge and try officials; Senate confirmation lets the Senate reject nominees (Bork). A presidential veto is the President\'s check on Congress.'
      }
    },
    {
      id: 'govsep3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Patterns of Branch Power**`,
      exercise: {
        questions: [
          {
            question: "Why did the post-1933 era produce extended periods of executive dominance over the legislative branch?",
            options: [
              "The Depression, World War II, and the Cold War demanded fast national action, so Congress delegated broad authority to the President and agencies",
              "The New Deal, World War II, and the Korean War weakened the courts, so Congress gave the President lasting power to appoint federal judges without any Senate approval",
              "A constitutional amendment adopted in 1933 moved most lawmaking power from Congress to the President",
              "Voters stopped electing members of Congress directly after 1933, which reduced the legislature's legitimacy"
            ],
            correctAnswer: 0,
            explanation: 'Post-1933 executive dominance factors: (1) Great Depression + New Deal required rapid administrative response → broad delegations to agencies (NIRA, Securities Act, NLRA, Social Security 1933-35); (2) WWII + Cold War 1939-1991 required centralized fast foreign-policy/military → expanded commander-in-chief → "Imperial Presidency" (Schlesinger 1973); (3) administrative state ~2M civilian employees by 1980 vs ~600K in 1933, all in exec; (4) congressional polarization + gridlock (esp post-1995) → executive orders, agreements, rules attractive; (5) 1960s-70s mass TV → presidential communication advantage.'
          },
          {
            question: "How does the Watergate-era restoration of legislative authority illustrate the framers' design?",
            options: [
              "When Nixon abused power, the Court forced release of the tapes, the House moved to impeach, and Congress then passed reforms to rein in the presidency",
              "When Nixon abused power, the Court refused to intervene, the Senate convicted and removed him, and Congress then expanded presidential power to restore stability",
              "Watergate shows the design failing, since no branch acted until voters removed Nixon at the next election",
              "When Nixon abused power, the states, the press, and the parties forced him out, with no role for Congress or the courts"
            ],
            correctAnswer: 0,
            explanation: 'Watergate (1972-74) shows separation-of-powers functioning as intended: executive overreach (Nixon DNC cover-up) → JUDICIAL check (US v. Nixon 1974, 8-0 ordered tapes) + LEGISLATIVE check (House Judiciary articles July 1974). Nixon resigned Aug 9, 1974 (only U.S. president to resign). Congress enacted: War Powers Resolution 1973, Budget Act 1974, FECA amendments 1974, FISA 1978, Ethics in Government Act 1978 → substantial inter-branch balance restoration.'
          }
        ]
      }
    }
  ]
}
