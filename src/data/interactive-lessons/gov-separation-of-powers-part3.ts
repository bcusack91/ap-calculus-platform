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
| 1983 | Legislative veto | INS v. Chadha — one-house legislative veto unconstitutional |
| 1995-96 | Government shutdown | Clinton vs. Gingrich Congress over budget |
| 2012 | NFIB v. Sebelius | ACA mandate as tax; Medicaid expansion coercive |
| 2018-19 | Mueller investigation | Special counsel investigation of Russian interference |
| 2019 + 2021 | Trump impeachments | Both acquitted by Senate |
| 2024 | Trump v. United States | Presidential immunity for "official acts"; Court extends executive authority |

## Required AP Gov SCOTUS Cases on Separation of Powers

| Case | Year | Branch action | Holding |
|---|---|---|---|
| ***Marbury v. Madison*** | 1803 | Judicial → Executive (Madison) | Court establishes judicial review; can declare federal acts unconstitutional |

## Other High-Yield Separation-of-Powers Cases

| Case | Year | Branch action | Holding |
|---|---|---|---|
| *McCulloch v. Maryland* | 1819 | Judicial → Federalism | Implied federal powers; Necessary and Proper |
| *Youngstown Sheet & Tube Co. v. Sawyer* | 1952 | Judicial → Executive | Truman steel seizure unconstitutional; Justice Jackson's three-tier framework |
| *Cooper v. Aaron* | 1958 | Judicial → State | Court establishes judicial supremacy over constitutional interpretation |
| *Baker v. Carr* | 1962 | Judicial → State | "One person, one vote" — judicial review of legislative apportionment |
| *United States v. Nixon* | 1974 | Judicial → Executive | Executive privilege not absolute; Nixon must turn over tapes |
| *INS v. Chadha* | 1983 | Judicial → Legislative | One-house legislative veto unconstitutional |
| *Clinton v. New York* | 1998 | Judicial → Executive | Line-item veto unconstitutional |
| *Bush v. Gore* | 2000 | Judicial → Electoral | Equal Protection halts Florida recount |
| *Trump v. Hawaii* | 2018 | Judicial → Executive | Travel ban upheld under deferential review |
| *Trump v. United States* | 2024 | Judicial → Executive | Presidential immunity for "official acts" |

## Landmark "Constitutional Moments"

| Constitutional moment | Year(s) | Significance |
|---|---|---|
| **Federalist Era** | 1789-1800 | Establishment of federal government; Bill of Rights; Marbury foundation |
| **Reconstruction** | 1865-77 | 13th, 14th, 15th Amendments; Andrew Johnson impeachment; federal authority over states |
| **Progressive Era** | 1890s-1920s | 16th, 17th, 18th, 19th Amendments; growth of federal regulation |
| **New Deal Constitutional Revolution** | 1933-37 | Massive expansion of federal commerce + spending power; cooperative federalism |
| **Civil Rights Era** | 1954-65 | Brown v. Board, CRA, VRA; federal supremacy over state segregation |
| **Watergate Era** | 1973-74 | Limits on executive power; restoration of congressional authority |
| **Modern Federalism Revival** | 1995-present | Lopez, Printz, NFIB, Shelby County, Murphy v. NCAA |

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
            question: "Which best describes the holding and significance of Youngstown Sheet & Tube Co. v. Sawyer (1952)?",
            options: [
              "The Court struck down Truman's seizure of the steel mills because no statute authorized it and Congress had declined to grant that power, limiting emergency presidential action",
              "The Court upheld Truman's seizure of the steel mills because the commander-in-chief power covers all property needed for a war",
              "The Court struck down a congressional seizure of the steel mills because only the President may manage the wartime economy",
              "The Court declined to rule on Truman's seizure because disputes between the branches are political questions"
            ],
            correctAnswer: 0,
            explanation: 'Youngstown (1952): Korean War, Truman EO 10340 directed Sawyer to seize steel mills; SCOTUS 6-3 unconstitutional because Congress rejected such authority in Taft-Hartley 1947 + no statutory/constitutional authorization. Justice Jackson CONCURRENCE = canonical framework: three tiers — (1) MAX with Congress authorization; (2) AMBIGUOUS "twilight zone" silence; (3) MIN (only valid if Congress lacks power) against express Congress will. Steel seizure = tier 3 → unconstitutional.'
          },
          {
            question: "Which best describes the holding and significance of United States v. Nixon (1974)?",
            options: [
              "Executive privilege exists but is not absolute, so Nixon had to give the subpoenaed tapes to the special prosecutor",
              "Executive privilege is absolute, so Nixon could keep the tapes from both prosecutors and Congress even during a criminal investigation",
              "Executive privilege does not exist at all, so every presidential conversation must be made public once the President leaves office",
              "Executive privilege is decided by Congress, so the House Judiciary Committee rather than the Court ordered the tapes released"
            ],
            correctAnswer: 0,
            explanation: 'United States v. Nixon (1974): Watergate, Special Prosecutor Jaworski subpoenaed Oval Office tapes; Nixon resisted citing executive privilege. SCOTUS 8-0: executive privilege has Art II foundation BUT NOT ABSOLUTE — balance presidential confidentiality vs. judicial need for evidence in criminal proceeding. Ordered compliance. Nixon turned over tapes ("smoking gun") + resigned 16 days later (Aug 9, 1974) — only U.S. president to resign. No person, including President, above the law.'
          }
        ]
      }
    },
    {
      id: 'govsep3-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — name the case**`,
      exercise: {
        questions: [
          {
            prompt: "The 1803 case establishing judicial review of federal statutes.",
            answer: 'Marbury v. Madison',
            acceptableAnswers: ['Marbury v. Madison', 'Marbury v Madison', 'Marbury vs. Madison', 'marbury v madison', 'Marbury'],
            hint: 'Chief Justice John Marshall opinion involving William Marbury\'s undelivered judicial commission.'
          },
          {
            prompt: "The 1952 case in which the Supreme Court ruled that President Truman's seizure of steel mills was unconstitutional.",
            answer: 'Youngstown Sheet & Tube Co. v. Sawyer',
            acceptableAnswers: ['Youngstown Sheet & Tube Co. v. Sawyer', 'Youngstown', 'Youngstown v. Sawyer', 'Youngstown Steel', 'youngstown'],
            hint: 'Steel mill case from the Korean War era; Justice Jackson\'s three-tier framework.'
          },
          {
            prompt: "The 1974 case in which the Supreme Court ordered President Nixon to turn over the Oval Office tapes.",
            answer: 'United States v. Nixon',
            acceptableAnswers: ['United States v. Nixon', 'US v. Nixon', 'U.S. v. Nixon', 'Nixon', 'United States v Nixon', 'us v nixon'],
            hint: 'Watergate-era case; resulted in Nixon\'s resignation 16 days later.'
          }
        ]
      }
    },
    {
      id: 'govsep3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each case to its branch-on-branch holding.**`,
      exercise: {
        dropdowns: [
          {
            label: "The 1803 case establishing JUDICIAL review of federal statutes (judicial check on legislative): ___",
            options: ['Marbury v. Madison', 'Youngstown Sheet & Tube Co. v. Sawyer', 'INS v. Chadha', 'Clinton v. New York']
          },
          {
            label: "The 1952 case establishing limits on EXECUTIVE emergency seizure authority (judicial check on executive): ___",
            options: ['Marbury v. Madison', 'Youngstown Sheet & Tube Co. v. Sawyer', 'INS v. Chadha', 'Clinton v. New York']
          },
          {
            label: "The 1983 case striking down the one-house LEGISLATIVE veto (judicial check on legislative): ___",
            options: ['Marbury v. Madison', 'Youngstown Sheet & Tube Co. v. Sawyer', 'INS v. Chadha', 'Clinton v. New York']
          }
        ],
        correctAnswers: ['Marbury v. Madison', 'Youngstown Sheet & Tube Co. v. Sawyer', 'INS v. Chadha'],
        hint1: 'John Marshall, 1803 — judicial review.',
        hint2: 'Truman steel seizure during the Korean War.',
        hint3: 'Burger Court 1983 — Congress cannot reverse executive action by one-house resolution.',
        explanation: 'Branch-on-branch cases: Marbury (1803) = judicial review (judicial check on Legislative). Youngstown (1952) = limits on executive emergency seizure (judicial check on Executive). INS v. Chadha (1983) = one-house legislative veto unconstitutional (judicial check on Legislative). Clinton v. New York (1998) = line-item veto unconstitutional (judicial check on Executive).'
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
            explanation: 'Watergate (1972-74) shows separation-of-powers functioning as intended: executive overreach (Nixon DNC cover-up) → JUDICIAL check (US v. Nixon 1974, 8-0 ordered tapes) + LEGISLATIVE check (House Judiciary articles July 1974). Nixon resigned Aug 9, 1974 (only U.S. president to resign). Congress enacted: War Powers Resolution 1973, Budget Act 1974, FECA amendments 1974, FISA 1978, Inspector General Act 1978, Ethics in Government Act 1978 → substantial inter-branch balance restoration.'
          }
        ]
      }
    }
  ]
}
