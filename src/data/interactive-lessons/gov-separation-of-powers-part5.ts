export const govSeparationOfPowersPart5Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {
      id: 'govsep5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Separation of Powers

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Founding era (1789-1829) |
| Jacksonian + Civil War + Reconstruction (1829-1877) |
| Industrial era + Progressive era (1877-1933) |
| New Deal + WWII + Cold War (1933-1973) |
| Watergate restoration → present (1973-present) |

> 🔑 Key idea: Separation of powers has not been static — the practical balance among the branches has shifted dramatically over 230+ years in response to crisis, party realignment, and constitutional amendment.
      `
    },
    {
      id: 'govsep5-content',
      type: 'text' as const,
      content: `
## Founding Era (1789-1829)

| Period | Dominant branch | Key developments |
|---|---|---|
| 1789-1801 (Federalist) | Legislative + Executive cooperative | Hamilton's financial system; Jay Treaty 1794; Alien and Sedition Acts 1798 |
| 1801-1829 (Marshall Court) | Judicial ascending | *Marbury v. Madison* 1803; *McCulloch v. Maryland* 1819; *Gibbons v. Ogden* 1824 |

**Key innovation:** Marshall Court establishes judicial review (1803) and the doctrine of implied federal powers (1819) — the foundational separation-of-powers and federalism doctrines.

## Jacksonian Era + Civil War + Reconstruction (1829-1877)

| Period | Dominant branch | Key developments |
|---|---|---|
| 1829-1850 (Jackson) | Executive | Veto used aggressively (12 vetoes vs. 9 by all prior presidents combined); Bank War; Worcester v. Georgia ignored |
| 1850s | Mixed (sectional crisis) | Compromise of 1850; *Dred Scott* 1857 (Court fails); Buchanan paralysis |
| 1861-1865 (Civil War) | Executive (Lincoln) | Suspended habeas corpus; Emancipation Proclamation 1863; Lincoln expansive war powers |
| 1865-1877 (Reconstruction) | Legislative (Radical Republicans) | 13th, 14th, 15th Amendments; Reconstruction Acts 1867; Tenure of Office Act 1867; Andrew Johnson impeachment 1868 (acquitted by 1 vote) |

**Key tension:** Reconstruction Congress vs. President Andrew Johnson over civil rights enforcement and Confederate-state readmission.

## Industrial Era + Progressive Era (1877-1933)

| Period | Dominant branch | Key developments |
|---|---|---|
| 1877-1900 (Gilded Age) | Mixed; Court protects business | *Lochner v. New York* 1905 (substantive due process strikes labor regulation) |
| 1900-1920 (Progressive Era) | Executive resurgence (T. Roosevelt, Wilson) | Trust-busting; 16th Amendment 1913 (income tax); 17th Amendment 1913 (direct Senate election); 18th + 19th Amendments 1919-20 |
| 1920s | Mixed (Republican normalcy) | Limited federal action; conservative Court |

**Key amendments:** 16th (income tax → modern federal revenue base); 17th (direct Senate election → Senate more democratically accountable); 19th (women's suffrage).

## New Deal + WWII + Cold War (1933-1973)

| Period | Dominant branch | Key developments |
|---|---|---|
| 1933-1937 (New Deal phase 1) | Executive ascending; Court resistant | NIRA, AAA struck (Schechter 1935, Carter Coal 1936); FDR Court-packing plan February 1937 (failed) |
| 1937 | "Switch in time" | Court abandons Lochner-era jurisprudence; *NLRB v. Jones & Laughlin Steel* upholds Wagner Act |
| 1937-1969 (cooperative federalism + Great Society) | Executive dominant | New Deal + Great Society programs (Medicare 1965, Medicaid 1965, ESEA 1965); WWII (1941-45); Cold War centralized executive (NSC 1947, CIA 1947) |
| 1969-1973 (early Nixon) | Executive (Imperial Presidency) | Schlesinger 1973 *The Imperial Presidency*; Vietnam-era escalation without congressional declaration |

**Key transformation:** New Deal "constitutional revolution" of 1937 ended dual federalism, expanded Commerce Clause + Spending Clause, and shifted real authority decisively to the executive branch and the administrative state for the next 35+ years.

## Watergate Restoration → Present (1973-present)

| Period | Dominant branch | Key developments |
|---|---|---|
| 1973-1980 (Watergate aftermath) | Legislative resurgence | War Powers Resolution 1973; Budget Act 1974; FECA 1974; FISA 1978; Inspector General Act 1978; Ethics in Government Act 1978; Nixon resigns August 1974 |
| 1980-2000 (Reagan-Clinton) | Executive resurgence | Reagan unitary-executive theory; Iran-Contra; *Clinton v. New York* 1998 (line-item veto unconstitutional) |
| 2001-2009 (post-9/11 Bush) | Executive expansion | AUMF 2001; PATRIOT Act 2001; warrantless surveillance; Guantánamo; signing statements |
| 2009-2017 (Obama) | Mixed; legislative gridlock + executive action | ACA 2010 (unified government); 2010-16 unified opposition Congress; DACA 2012; executive action on climate |
| 2017-2021 (Trump 1) | Executive contested | Travel ban litigation; two impeachments (acquitted); January 6 |
| 2021-2025 (Biden) | Mixed | ARPA 2021; IIJA 2021; CHIPS 2022; IRA 2022 (unified govt); 2022-24 divided govt |
| 2024-present (modern federalism + admin-state revival) | Judicial revival | *Loper Bright* 2024 (Chevron overruled); *Trump v. United States* 2024 (presidential immunity); *Dobbs* 2022 |

> 🔑 Key takeaway: The separation of powers is dynamic. Crisis (Civil War, Depression, WWII, Cold War, 9/11) tilts toward executive; constitutional moments (Reconstruction, Watergate) restore congressional authority; and the modern Court has been increasingly willing to check both branches via *Loper Bright*, the major-questions doctrine, and the modern federalism revival.
      `
    },
    {
      id: 'govsep5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Long-Term Patterns** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the constitutional significance of the 1937 'switch in time'?",
            options: [
              "After FDR's Court-packing threat, the Court began upholding New Deal economic laws, ending strict limits on the commerce power and on economic regulation",
              "Once FDR's Court-packing plan passed, the Court grew to fifteen justices, who struck down the remaining New Deal laws",
              "The Court began striking down New Deal laws in 1937, reversing its earlier deference to Congress on economic matters",
              "The Court adopted dual federalism in 1937, returning the regulation of labor, wages, and farming to the states"
            ],
            correctAnswer: 0,
            explanation: '1937 "switch in time": 1933-37 Hughes Court struck New Deal — Schechter Poultry 1935 (NIRA), Butler 1936 (AAA), Carter Coal 1936 (BCC). FDR Court-packing Feb 1937 (Judicial Procedures Reform Bill — up to 6 new justices for those >70) failed politically. Justice Owen Roberts changed vote: NLRB v. Jones & Laughlin Steel April 1937 (upheld Wagner Act) + West Coast Hotel March 1937 (upheld state min wage). Ended Lochner-era substantive due process + dual federalism → 60+ years expansive Commerce/Spending + cooperative federalism = most consequential separation-of-powers shift since founding.'
          },
          {
            question: "Which best describes the trajectory of executive power in the post-WWII era?",
            options: [
              "Expansion through the Cold War, partial rollback after Watergate, then renewed growth through executive orders and national-security power",
              "Steady decline since 1945, as Congress, the courts, and the states each reclaimed the executive powers the President had held during the Second World War",
              "Little change since 1945, since the War Powers Resolution, the Budget Act, and the Ethics Act fixed presidential power at its wartime level",
              "Continuous growth since 1945, with no rollback, because Watergate-era reforms were all struck down by the Supreme Court before taking effect"
            ],
            correctAnswer: 0,
            explanation: 'Post-WWII executive trajectory: (1) MASSIVE EXPANSION 1945-73 (Cold War + NSC + CIA 1947 + Korea + Vietnam without declaration; Schlesinger 1973 Imperial Presidency); (2) PARTIAL ROLLBACK 1973-80 (War Powers 1973, Budget 1974, FECA 1974, FISA 1978, IG Act 1978, Ethics 1978, Nixon resigns 1974); (3) RENEWED EXPANSION 1981-2000 (Reagan unitary-executive theory; Iran-Contra showed oversight limits); (4) DRAMATIC EXPANSION 2001-08 post-9/11 (AUMF 2001, PATRIOT 2001, warrantless surveillance, Guantánamo, signing statements); (5) MIXED 2009-present (continued exec expansion BUT judicial check via federalism revival, major-questions, Loper Bright 2024).'
          }
        ]
      }
    },
    {
      id: 'govsep5-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — name the era**`,
      exercise: {
        questions: [
          {
            prompt: "The 1973 statute requiring presidents to notify Congress within 48 hours of committing forces to hostilities and to withdraw within 60-90 days absent congressional authorization.",
            answer: 'War Powers Resolution',
            acceptableAnswers: ['War Powers Resolution', 'War Powers Act', 'War Powers Resolution of 1973', 'WPR', 'war powers resolution'],
            hint: 'Passed over Nixon\'s veto in November 1973; widely flouted but never repealed.'
          },
          {
            prompt: "The 1947 statute creating the National Security Council, the CIA, and unifying the armed forces under the Defense Department.",
            answer: 'National Security Act',
            acceptableAnswers: ['National Security Act', 'National Security Act of 1947', 'NSA 1947', 'national security act'],
            hint: 'Truman-era reorganization that created the modern national-security executive apparatus.'
          },
          {
            prompt: "The historian who coined the phrase 'Imperial Presidency' in his 1973 book.",
            answer: 'Schlesinger',
            acceptableAnswers: ['Schlesinger', 'Arthur Schlesinger', 'Arthur Schlesinger Jr.', 'Arthur Schlesinger Jr', 'schlesinger'],
            hint: 'Pulitzer Prize-winning historian; advisor to JFK; book published during Watergate.'
          }
        ]
      }
    },
    {
      id: 'govsep5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each era to its dominant separation-of-powers pattern.**`,
      exercise: {
        dropdowns: [
          {
            label: "1801-1829 (Marshall Court): ___",
            options: ['Judicial branch ascending (Marbury, McCulloch, Gibbons)', 'Executive branch dominant (Cold War, post-9/11)', 'Legislative branch dominant (Reconstruction Congress)', 'Mixed/balanced (Watergate restoration)']
          },
          {
            label: "1865-1877 (Reconstruction): ___",
            options: ['Judicial branch ascending (Marbury, McCulloch, Gibbons)', 'Executive branch dominant (Cold War, post-9/11)', 'Legislative branch dominant (Reconstruction Congress)', 'Mixed/balanced (Watergate restoration)']
          },
          {
            label: "1973-1980 (Watergate aftermath): ___",
            options: ['Judicial branch ascending (Marbury, McCulloch, Gibbons)', 'Executive branch dominant (Cold War, post-9/11)', 'Legislative branch dominant (Reconstruction Congress)', 'Mixed/balanced (Watergate restoration)']
          }
        ],
        correctAnswers: ['Judicial branch ascending (Marbury, McCulloch, Gibbons)', 'Legislative branch dominant (Reconstruction Congress)', 'Mixed/balanced (Watergate restoration)'],
        hint1: 'Marshall Court establishes judicial review and broad federal powers.',
        hint2: '13th, 14th, 15th Amendments + Andrew Johnson impeachment.',
        hint3: 'War Powers Resolution + Budget Act + FECA + FISA + IG Act + Ethics in Government Act.',
        explanation: 'Eras: 1801-29 = JUDICIAL ascending (Marshall: Marbury 1803, McCulloch 1819, Gibbons 1824). 1865-77 = LEGISLATIVE dominant (Reconstruction Congress + 13/14/15 Amendments + Tenure of Office Act + Johnson impeachment). 1973-80 = MIXED/balanced (Watergate-era restoration: WPR 1973, Budget Act 1974, FECA 1974, FISA 1978, IG Act 1978, Ethics 1978).'
      }
    },
    {
      id: 'govsep5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Patterns of Constitutional Change**`,
      exercise: {
        questions: [
          {
            question: "Why has the Supreme Court's role in inter-branch disputes generally INCREASED over the long run from 1789 to present?",
            options: [
              "Judicial review, incorporation, and the growth of federal regulation have drawn the Court into more disputes over the powers of each branch",
              "Congress has transferred its oversight duties to the Court by statute, making the justices the official referees of all disputes, appointments, and budgets",
              "A 1937 constitutional amendment gave the Court the final word over disputes between the branches",
              "The Court's role has grown because justices now serve fixed terms and claim a direct popular mandate"
            ],
            correctAnswer: 0,
            explanation: 'SCOTUS role expansion factors: (1) Marbury 1803 established judicial review; (2) 14th Amendment 1868 + selective incorporation → new authority over state action affecting rights; (3) New Deal federal regulation expansion → more federal cases; (4) post-WWII civil/individual-rights revolutions (Brown 1954, Gideon 1963, Miranda 1966, Roe 1973); (5) admin state → statutory interpretation (Chevron 1984; Loper Bright 2024); (6) congressional polarization + gridlock since ~1990 → policy authority to courts (default + deliberate punt); (7) modern federalism revival (Lopez 1995+) → reinvigorated commerce/spending review. → Court more central than framers anticipated.'
          },
          {
            question: "How has the rise of polarization since ~1990 altered the framers' separation-of-powers design?",
            options: [
              "Polarization turns unified government into party rule with weak checks and divided government into gridlock, pushing presidents toward unilateral action",
              "Polarization has made Congress more willing to override vetoes, since members now vote across party lines on most major bills",
              "Polarization has ended unified government, since voters have split control of Congress and the presidency in every election since 1990, leaving no single party in charge",
              "Polarization has little effect on the branches, since separation of powers prevents party conflict from shaping how officials govern"
            ],
            correctAnswer: 0,
            explanation: 'Polarization since ~1990 alterations: (1) UNIFIED government → concentrated party power weakens checking (R 2017 tax, D 2009-10 ACA, D 2021-22 ARPA + IIJA + CHIPS + IRA); (2) DIVIDED → extreme gridlock (debt-ceiling 2011, 2013, 2023; shutdowns Clinton-Gingrich 1995-96, Obama 2013, Trump 2018-19; CR standard); (3) JUDICIAL CONFIRMATION partisan (Garland 2016 McConnell refusal; ACB rushed Oct 2020; party-line lower courts); (4) FILIBUSTER → 60-vote for legislation; cloture-lowered 51 for nominations (2013 + 2017 nuclear options); (5) executive orders + agency rules substitute for legislation under both parties → dramatic transitions. Shifted toward winner-take-all model.'
          }
        ]
      }
    }
  ]
}
