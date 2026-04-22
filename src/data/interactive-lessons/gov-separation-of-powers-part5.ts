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
              "From 1933-37, the Hughes Court struck multiple New Deal statutes as exceeding Congress's commerce power and violating substantive due process: *Schechter Poultry Corp. v. United States* (1935, struck NIRA), *United States v. Butler* (1936, struck AAA), *Carter v. Carter Coal Co.* (1936, struck Bituminous Coal Conservation Act); FDR responded with the Court-packing plan (February 1937) — the Judicial Procedures Reform Bill that would have allowed FDR to appoint up to 6 additional justices for those over 70; the bill failed politically, but Justice Owen Roberts changed his vote in *NLRB v. Jones & Laughlin Steel* (April 1937, upholding the Wagner Act) and *West Coast Hotel Co. v. Parrish* (March 1937, upholding state minimum-wage laws) — the famous 'switch in time that saved nine'; this ended Lochner-era substantive due process and dual federalism, and inaugurated 60+ years of expansive federal Commerce Clause + Spending Clause authority + cooperative federalism — the most consequential separation-of-powers shift since the founding",
              "There is no 'switch in time' of any kind during the entire period from 1933 through 1937 in any region of the United States with no Schechter Poultry, no United States v. Butler, no Carter Coal, no Court-packing plan, no NLRB v. Jones & Laughlin Steel, and no West Coast Hotel of any kind during the entire period in any region",
              "The 1937 'switch in time' had no constitutional significance and produced no shift in commerce-clause or substantive-due-process doctrine of any kind under any circumstance with no end of Lochner-era jurisprudence and no expansion of federal authority of any kind during the entire period from 1937 onward in any region of the United States during the period",
              "The Court-packing plan succeeded and FDR appointed 6 additional justices of any kind under any circumstance with no political failure, no Owen Roberts vote change, and no 'switch in time' of any kind during the entire period from 1937 onward in any region of the United States during the period in any region of the country"
            ],
            correctAnswer: 0,
            explanation: '1937 "switch in time": 1933-37 Hughes Court struck New Deal — Schechter Poultry 1935 (NIRA), Butler 1936 (AAA), Carter Coal 1936 (BCC). FDR Court-packing Feb 1937 (Judicial Procedures Reform Bill — up to 6 new justices for those >70) failed politically. Justice Owen Roberts changed vote: NLRB v. Jones & Laughlin Steel April 1937 (upheld Wagner Act) + West Coast Hotel March 1937 (upheld state min wage). Ended Lochner-era substantive due process + dual federalism → 60+ years expansive Commerce/Spending + cooperative federalism = most consequential separation-of-powers shift since founding.'
          },
          {
            question: "Which best describes the trajectory of executive power in the post-WWII era?",
            options: [
              "Post-WWII executive power has followed a complex trajectory: (1) MASSIVE EXPANSION 1945-73 (Cold War centralized executive — NSC 1947, CIA 1947 — plus Korean War + Vietnam War without formal declaration; Schlesinger's 1973 *The Imperial Presidency* described the phenomenon); (2) PARTIAL ROLLBACK 1973-80 via Watergate-era reforms (War Powers Resolution 1973, Budget Act 1974, FECA 1974, FISA 1978, IG Act 1978, Ethics in Government Act 1978, Nixon resignation 1974); (3) RENEWED EXPANSION 1981-2000 via Reagan unitary-executive theory; Iran-Contra showed limits of congressional oversight; (4) DRAMATIC EXPANSION 2001-2008 post-9/11 (AUMF 2001, PATRIOT Act 2001, warrantless surveillance, Guantánamo, signing statements); (5) MIXED 2009-PRESENT: continued executive expansion (Obama executive action; Trump aggressive use of executive orders) BUT also significant judicial check via the modern federalism revival, the major-questions doctrine, *Loper Bright* 2024, and other separation-of-powers decisions",
              "There has been no expansion of executive power of any kind during the entire period from 1945 onward in any region of the United States with no Cold War, no NSC, no CIA, no Korean War, no Vietnam War, no Imperial Presidency, no Watergate, no AUMF, no PATRIOT Act, no warrantless surveillance, and no Loper Bright of any kind during the entire period in any region",
              "Executive power has monotonically declined since 1945 with no expansion of any kind under any circumstance during the entire period from 1945 onward in any region of the United States with no Cold War, no Korean War, no Vietnam War, no AUMF, no PATRIOT Act, and no warrantless surveillance of any kind during the entire period in any region",
              "There were no Watergate-era reforms of any kind during the entire period from 1973 through 1980 in any region of the United States with no War Powers Resolution, no Budget Act, no FECA, no FISA, no IG Act, no Ethics in Government Act, and no Nixon resignation of any kind during the entire period in any region"
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
              "The Court's role has grown from multiple converging factors: (1) Marbury v. Madison (1803) established judicial review as foundational doctrine; (2) the 14th Amendment (1868) and selective incorporation gave the Court substantial new authority over state action affecting individual rights; (3) New Deal expansion of federal regulation generated more federal cases requiring judicial interpretation; (4) post-WWII civil rights and individual-rights revolutions (Brown 1954, Gideon 1963, Miranda 1966, Roe 1973, etc.) expanded constitutional doctrine; (5) the rise of the administrative state generated extensive statutory interpretation work for federal courts (Chevron 1984; Loper Bright 2024); (6) increasing congressional polarization and gridlock since ~1990 has shifted policy authority from elected branches to courts (some by default; some by deliberate punt); (7) the modern federalism revival (Lopez 1995 onward) has reinvigorated judicial review of federal commerce-clause and spending-clause authority — together making the federal judiciary substantially more central to American governance than the framers anticipated",
              "The Supreme Court's role has remained static since 1789 with no Marbury, no 14th Amendment, no selective incorporation, no New Deal, no civil rights revolution, no administrative state, no congressional gridlock, and no modern federalism revival of any kind during the entire period in any region of the United States during the period",
              "The Supreme Court's role has monotonically DECLINED since 1789 with no expansion of any kind under any circumstance during the entire period from 1789 onward in any region of the United States with no Marbury, no 14th Amendment, no civil rights revolution, no administrative state, and no modern federalism revival of any kind during the entire period in any region",
              "There is no Supreme Court of any kind during the entire period from 1789 onward in any region of the United States with no Marbury, no 14th Amendment, no New Deal, no civil rights, no administrative state, no congressional gridlock, and no federalism revival of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'SCOTUS role expansion factors: (1) Marbury 1803 established judicial review; (2) 14th Amendment 1868 + selective incorporation → new authority over state action affecting rights; (3) New Deal federal regulation expansion → more federal cases; (4) post-WWII civil/individual-rights revolutions (Brown 1954, Gideon 1963, Miranda 1966, Roe 1973); (5) admin state → statutory interpretation (Chevron 1984; Loper Bright 2024); (6) congressional polarization + gridlock since ~1990 → policy authority to courts (default + deliberate punt); (7) modern federalism revival (Lopez 1995+) → reinvigorated commerce/spending review. → Court more central than framers anticipated.'
          },
          {
            question: "How has the rise of polarization since ~1990 altered the framers' separation-of-powers design?",
            options: [
              "Increasing partisan polarization since the 1990s has altered the design in multiple ways: (1) UNIFIED government produces concentrated party power that weakens inter-branch checking — Republicans 2017 (tax reform), Democrats 2009-10 (ACA), Democrats 2021-22 (ARPA, IIJA, CHIPS, IRA); (2) DIVIDED government produces extreme gridlock — debt-ceiling crises (2011, 2013, 2023), government shutdowns (Clinton-Gingrich 1995-96, Obama 2013, Trump 2018-19), failure to pass routine appropriations (continuing resolutions standard); (3) JUDICIAL CONFIRMATION POLITICS have become intensely partisan — McConnell refusal to consider Garland 2016, ACB rushed confirmation October 2020, lower-court confirmations now routinely party-line; (4) the SENATE FILIBUSTER has become a near-uniform 60-vote requirement for legislation but cloture-lowered to 51 for nominations (2013 + 2017 nuclear options); (5) administrative-state EXECUTIVE ORDERS and AGENCY RULES have become substitutes for legislation under both parties — making each presidential transition more dramatic; together polarization has shifted American government from the framers' deliberative model toward a winner-take-all model",
              "There has been no polarization of any kind during the entire period from 1990 onward in any region of the United States with no debt-ceiling crises, no government shutdowns, no Garland incident, no nuclear option, no executive-order substitutes, and no party-line judicial confirmations of any kind during the entire period in any region",
              "Polarization has improved the framers' separation-of-powers design and produced more deliberative governance of any kind under any circumstance with no debt-ceiling crises, no government shutdowns, no Garland incident, and no executive-order substitutes for legislation of any kind during the entire period from 1990 onward in any region of the United States during the period",
              "There is no Senate filibuster, no nuclear option, no McConnell-Garland incident, no Amy Coney Barrett confirmation, and no executive-order substitution of any kind during the entire period from 1990 onward in any region of the United States during the period in any region of the country"
            ],
            correctAnswer: 0,
            explanation: 'Polarization since ~1990 alterations: (1) UNIFIED government → concentrated party power weakens checking (R 2017 tax, D 2009-10 ACA, D 2021-22 ARPA + IIJA + CHIPS + IRA); (2) DIVIDED → extreme gridlock (debt-ceiling 2011, 2013, 2023; shutdowns Clinton-Gingrich 1995-96, Obama 2013, Trump 2018-19; CR standard); (3) JUDICIAL CONFIRMATION partisan (Garland 2016 McConnell refusal; ACB rushed Oct 2020; party-line lower courts); (4) FILIBUSTER → 60-vote for legislation; cloture-lowered 51 for nominations (2013 + 2017 nuclear options); (5) executive orders + agency rules substitute for legislation under both parties → dramatic transitions. Shifted toward winner-take-all model.'
          }
        ]
      }
    }
  ]
}
