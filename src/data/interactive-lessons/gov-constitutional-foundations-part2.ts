export const govConstitutionalFoundationsPart2Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {
      id: 'govconst2-intro',
      type: 'text' as const,
      content: `
# 🏛️ Constitutional Foundations

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Three branches and their constitutional grants |
| Checks and balances mechanisms |
| The amendment process (Article V) |
| Separation of powers in action |

> 🔑 Key idea: The Constitution does not just allocate authority — it engineers a system of overlapping institutional powers in which "ambition must be made to counteract ambition" (Federalist No. 51), forcing the branches into perpetual negotiation and ensuring that no single institution can dominate the others.
      `
    },
    {
      id: 'govconst2-content',
      type: 'text' as const,
      content: `
## Three Branches and Their Constitutional Grants

| Branch | Article | Composition | Core Powers |
|---|---|---|---|
| **Legislative** (Congress) | Article I | Bicameral: House (currently 435 members; 2-year terms; proportional to state population) + Senate (100 members; 6-year staggered terms; 2 per state) | Make laws (§ 1); enumerated powers (§ 8: tax, borrow, regulate interstate commerce, declare war, raise armies, naval forces, post offices, copyrights and patents, federal courts inferior to Supreme Court); Necessary and Proper Clause (§ 8, clause 18); impeachment (House charges, Senate tries) |
| **Executive** (President) | Article II | Single president (4-year term; 22nd Amendment 1951 = 2-term limit); Vice President; appointed Cabinet | Take care that laws are faithfully executed (§ 3); Commander-in-Chief (§ 2); make treaties (with 2/3 Senate); appoint federal officers, judges, ambassadors (with Senate advice and consent); pardon power; State of the Union; veto legislation (overridable by 2/3 of each chamber) |
| **Judicial** (Supreme Court + lower federal courts) | Article III | Supreme Court (currently 9 justices; lifetime tenure during "good Behaviour"); inferior courts established by Congress | Original jurisdiction (cases involving states, ambassadors); appellate jurisdiction (with such exceptions as Congress shall make); judicial review (established in *Marbury v. Madison*, 1803, not in text); decide "cases and controversies" arising under federal law |

## Checks and Balances Mechanisms

| Branch Acted Upon | Branch Acting | Mechanism |
|---|---|---|
| Executive | Legislative | Senate advice and consent on appointments and treaties; veto override (2/3 each chamber); impeachment (House) and removal (Senate, 2/3); funding control; declaration of war; oversight investigations |
| Executive | Judicial | Judicial review of executive actions (e.g., *Youngstown Sheet & Tube v. Sawyer*, 1952; *United States v. Nixon*, 1974) |
| Legislative | Executive | Veto; recess appointments (limited by *NLRB v. Noel Canning*, 2014); use of executive orders, signing statements, and prosecutorial discretion |
| Legislative | Judicial | Judicial review of statutes (*Marbury v. Madison*, 1803); narrow interpretation of statutes; constitutional avoidance doctrine |
| Judicial | Legislative | Senate confirmation of judges (advice and consent); jurisdiction stripping (Article III, § 2: appellate jurisdiction "with such Exceptions"); constitutional amendment to overturn rulings (e.g., 11th Amendment overturned *Chisholm v. Georgia*, 1793; 16th Amendment overturned *Pollock v. Farmers\' Loan*, 1895; 26th Amendment overturned part of *Oregon v. Mitchell*, 1970); statutory revision; impeachment of judges (1 Supreme Court justice impeached: Samuel Chase 1804, acquitted; 8 federal judges removed in U.S. history) |
| Judicial | Executive | Appointment of judges (with Senate advice and consent); pardons (cannot pardon impeachment but otherwise plenary; *Ex parte Garland*, 1867); Article III judges have life tenure once appointed |

## The Amendment Process (Article V)

| Step | Method 1 (Used 27 times) | Method 2 (Never used at federal level) |
|---|---|---|
| **Proposal** | 2/3 vote of both houses of Congress | 2/3 of state legislatures (currently 34 of 50) call a convention |
| **Ratification** | 3/4 of state legislatures (currently 38 of 50), OR | 3/4 of state ratifying conventions (used once: 21st Amendment, 1933, repealing Prohibition) |

| Era | Amendments | Significance |
|---|---|---|
| Founding (1791) | 1–10 (Bill of Rights) | Limits on federal power: speech, religion, press, assembly, petition (1st); arms (2nd); quartering (3rd); search and seizure (4th); due process, takings, double jeopardy, self-incrimination (5th); criminal trial rights (6th); civil jury (7th); cruel and unusual punishment (8th); unenumerated rights (9th); reserved powers (10th) |
| Early Republic (1795–1804) | 11 (state sovereign immunity, overturning *Chisholm*) + 12 (presidential election reform after the 1800 election crisis) | Federal-state and electoral fixes |
| Civil War / Reconstruction (1865–70) | 13 (abolition of slavery), 14 (citizenship + due process + equal protection), 15 (Black male suffrage) | Reconstruction Amendments — the "Second Founding" |
| Progressive Era (1913–20) | 16 (income tax), 17 (direct election of senators), 18 (Prohibition), 19 (women\'s suffrage) | Democratic and economic reform |
| Mid-20th Century (1933–71) | 20 (lame duck), 21 (Prohibition repeal), 22 (presidential 2-term limit), 23 (DC electors), 24 (poll tax abolition), 25 (presidential succession), 26 (18-year-old vote) | Procedural and voting-rights expansion |
| Late 20th Century (1992) | 27 (congressional pay) — proposed 1789, ratified 1992 | Long-pending Madison amendment |

## Separation of Powers in Action — Three AP Cases

| Case | Year | Holding |
|---|---|---|
| ***Marbury v. Madison*** | 1803 | Established judicial review — the power of the Supreme Court to declare an act of Congress unconstitutional (Chief Justice Marshall) |
| ***McCulloch v. Maryland*** | 1819 | Upheld a broad reading of the Necessary and Proper Clause (Congress could create the Bank of the United States as a means to its enumerated powers) and established federal supremacy over state taxation of federal instrumentalities (Marshall: "the power to tax is the power to destroy") |
| ***United States v. Nixon*** | 1974 | Rejected an absolute executive privilege; ordered President Nixon to turn over Watergate tapes to special prosecutor; established that no person — not even the President — is above the law |

> 🔑 Key takeaway: Checks and balances are not a static structure but a continuing institutional negotiation in which each branch deploys its assigned tools (veto, override, judicial review, advice and consent, impeachment, jurisdiction stripping, amendment) to constrain the others.
      `
    },
    {
      id: 'govconst2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Branches and Checks** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the formal process by which Congress can override a presidential veto?',
            options: [
              "Each chamber must repass the vetoed bill by a two-thirds vote of the members present, after which it becomes law without the President's signature",
              'The House and Senate must each repass the bill by a simple majority within ten days, after which the President cannot veto it again',
              'Three-fourths of the state legislatures must approve the vetoed bill within seven years, as with a proposed constitutional amendment',
              "The Senate alone may override a veto by a two-thirds vote, since the House already passed the bill before it reached the President"
            ],
            correctAnswer: 0,
            explanation: 'Veto override: 2/3 of each chamber present and voting (rare; ~7%). Presidential veto = 10 days (Sundays excluded); pocket veto if Congress adjourns within 10 days. No line-item veto (Clinton v. City of NY 1998 struck Line Item Veto Act 1996 on Presentment Clause).'
          },
          {
            question: 'Which best describes the constitutional power of judicial review?',
            options: [
              "The power of courts to void laws and actions that violate the Constitution, first asserted by the Supreme Court in Marbury v. Madison",
              'The power of the Supreme Court to issue advisory opinions on bills before Congress votes, expressly granted in Article III and first used in McCulloch v. Maryland',
              'The power of Congress to overturn Supreme Court rulings by a two-thirds vote, created by the Judiciary Act of 1789 and first used against Marbury v. Madison',
              "The power of state courts to nullify federal laws that conflict with the Constitution, recognized by the Tenth Amendment and affirmed in Marbury v. Madison"
            ],
            correctAnswer: 0,
            explanation: 'Judicial review: not explicit in Constitution; established by CJ Marshall in Marbury v. Madison (1803) → § 13 of Judiciary Act of 1789 unconstitutional (purported to expand Court\'s original jurisdiction beyond Article III). "It is emphatically the province and duty of the judicial department to say what the law is."'
          }
        ]
      }
    },
    {
      id: 'govconst2-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the constitutional process**`,
      exercise: {
        questions: [
          {
            prompt: 'The constitutional power of the Senate to approve or reject presidential nominees and treaties.',
            answer: 'advice and consent',
            acceptableAnswers: ['advice and consent', 'Advice and Consent'],
            hint: 'Article II, § 2, clause 2 — required for Cabinet officers, federal judges, ambassadors, and treaties (treaties need 2/3).'
          },
          {
            prompt: 'The Article V threshold for proposing an amendment by Congress.',
            answer: 'two-thirds',
            acceptableAnswers: ['two-thirds', 'two thirds', '2/3', 'two-thirds vote', 'two-thirds of both houses'],
            hint: 'Same threshold as a veto override — and as Senate conviction in impeachment.'
          },
          {
            prompt: 'The Article V threshold for ratifying an amendment by state legislatures.',
            answer: 'three-fourths',
            acceptableAnswers: ['three-fourths', 'three fourths', '3/4', 'three-fourths of states', 'three-fourths of state legislatures'],
            hint: 'Currently 38 of 50 states.'
          }
        ]
      }
    },
    {
      id: 'govconst2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each check to the branch that exercises it.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The branch that exercises the power to declare an act of Congress unconstitutional (judicial review): ___',
            options: ['Legislative', 'Executive', 'Judicial']
          },
          {
            label: 'The branch that exercises the power to veto legislation: ___',
            options: ['Legislative', 'Executive', 'Judicial']
          },
          {
            label: 'The branch that exercises the power to impeach the President and federal judges: ___',
            options: ['Legislative', 'Executive', 'Judicial']
          }
        ],
        correctAnswers: ['Judicial', 'Executive', 'Legislative'],
        hint1: 'Marbury v. Madison (1803) established judicial review.',
        hint2: 'Article I § 7 gives the President the veto power; Congress can override by 2/3.',
        hint3: 'House charges, Senate tries; conviction requires 2/3 of senators present.',
        explanation: 'Each branch exercises distinctive checks: Judicial (judicial review), Executive (veto, pardon, appointment, treaty negotiation, commander-in-chief), Legislative (lawmaking, override, advice and consent, impeachment, funding, war declaration).'
      }
    },
    {
      id: 'govconst2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — SCOTUS Comparison**`,
      exercise: {
        questions: [
          {
            question: 'AP SCOTUS comparison prompt: A non-required case asks whether a presidential executive order seizing private steel mills during the Korean War was constitutional. Which landmark case on presidential power provides the most useful comparison?',
            options: [
              "United States v. Nixon (1974), which held that executive privilege is not absolute and that the President must comply with a judicial subpoena",
              "Marbury v. Madison (1803), which held that the Court could order the Secretary of State to deliver a commission",
              "Clinton v. City of New York (1998), which held that the President may cancel individual items in spending bills",
              "Schenck v. United States (1919), which held that wartime emergencies allow the executive to seize private property without approval from Congress"
            ],
            correctAnswer: 0,
            explanation: 'AP SCOTUS comparison: US v. Nixon (1974) — judicial enforcement of constitutional limits on executive power → analogous to Youngstown (1952, Black + Jackson concurrence with three zones depending on congressional support) striking Truman steel seizure as unauthorized by Congress and beyond Article II.'
          },
          {
            question: 'Which best demonstrates AP "complexity" by analyzing the limits of formal checks and balances?',
            options: [
              "The formal checks still exist on paper, yet executive orders and broad congressional delegation have shifted much practical power toward the President",
              'The formal checks have grown stronger over time, since Congress now overrides most vetoes and rejects most executive nominations',
              'The Court has stopped reviewing executive actions entirely, so presidents now act without any judicial check on their power',
              "The formal checks have shifted practical power toward Congress, which now writes detailed statutes that leave agencies and the President little discretion in carrying them out"
            ],
            correctAnswer: 0,
            explanation: 'AP complexity: post-New Deal balance shift toward executive — executive orders (EO 9981, 10730, DACA, 13769) + executive agreements (~90% intl agreements vs treaties) + signing statements (Bush 43 ~1,200 challenges) + prosecutorial discretion + administrative state + Chevron deference 1984 (overturned 2024) → formal text and operational reality diverge.'
          }
        ]
      }
    }
  ]
}
