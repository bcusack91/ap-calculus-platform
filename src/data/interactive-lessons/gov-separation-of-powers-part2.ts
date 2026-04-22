export const govSeparationOfPowersPart2Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {
      id: 'govsep2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Separation of Powers

**Part 2 of 7 — Key Processes: The Checks**

---

| Section |
|---|
| Legislative checks on executive and judicial |
| Executive checks on legislative and judicial |
| Judicial checks on legislative and executive |
| The "iron triangles" of accountability |

> 🔑 Key idea: Each branch holds specific tools to limit the others. Mastering the matrix of checks is essential for AP Gov.
      `
    },
    {
      id: 'govsep2-content',
      type: 'text' as const,
      content: `
## Legislative Checks (Congress) on the Executive

| Tool | Constitutional source | Notes |
|---|---|---|
| **Override veto** | Art I § 7 (2/3 each chamber) | Rare; ~7% of vetoes overridden historically |
| **Power of the purse** | Art I § 8 cl. 1, § 9 cl. 7 | All federal spending requires appropriation |
| **Senate confirmation** | Art II § 2 cl. 2 | Cabinet, judges, ambassadors, ~1,200 PAS positions |
| **Senate ratification of treaties** | Art II § 2 cl. 2 (2/3) | Workaround: executive agreements |
| **Declare war** | Art I § 8 cl. 11 | Last formal declaration: WWII; War Powers Resolution 1973 |
| **Impeachment** | Art I §§ 2, 3 (House majority + Senate 2/3) | Trump (2x), Clinton, A. Johnson; none convicted |
| **Investigation/oversight** | Implied + congressional rules | Hearings, subpoenas, GAO audits |
| **Repeal/amend statutes** | Implied | Override executive interpretation |

## Legislative Checks on the Judiciary

| Tool | Source |
|---|---|
| Senate confirmation of judges | Art II § 2 |
| Impeach federal judges | Art II § 4; Art I §§ 2, 3 |
| Set Supreme Court size + lower-court structure | Art III § 1 |
| Strip jurisdiction (limited) | Art III § 2 cl. 2 |
| Override statutory interpretation by passing new statute | Implied |
| Constitutional amendment (override constitutional rulings) | Art V |

## Executive Checks (President) on Congress

| Tool | Constitutional source |
|---|---|
| **Veto** | Art I § 7 (full bill; no line-item veto since *Clinton v. New York* 1998) |
| **Pocket veto** | Art I § 7 (Congress adjourns within 10 days) |
| **Signing statements** | Implied (interpretation in execution) |
| **Recommend legislation** | Art II § 3 (State of the Union) |
| **Convene/adjourn Congress (extraordinary)** | Art II § 3 |

## Executive Checks on Judiciary

| Tool | Source |
|---|---|
| Nominate federal judges | Art II § 2 |
| Pardon power | Art II § 2 cl. 1 (can effectively nullify federal criminal convictions) |
| Enforcement of court rulings | Implied (Andrew Jackson reportedly: "John Marshall has made his decision; now let him enforce it") |

## Judicial Checks on Legislative & Executive

| Tool | Source |
|---|---|
| **Judicial review** | *Marbury v. Madison* (1803) — implicit from Art III + Supremacy Clause |
| Constitutional review of statutes | Strikes laws conflicting with Constitution |
| Constitutional review of executive action | E.g., *Youngstown Sheet & Tube Co. v. Sawyer* (1952) — Truman steel seizure unconstitutional |
| Statutory interpretation | Determines meaning of ambiguous statutes |
| Life tenure (Art III § 1) | Insulates judges from political retaliation |

## Worked Example — Inter-Branch Conflict Cycle

> ⚡ Hypothetical: Congress passes a statute requiring all federal agencies to obtain congressional approval before issuing any major rule. President vetoes citing executive prerogative. Congress overrides 2/3-2/3. President directs agencies not to comply, citing the "take care" clause. Congress sues; case reaches Supreme Court.

**Walk through the checks:**

| Stage | Action | Branch checking which |
|---|---|---|
| 1 | Congress passes bill | Legislative acts |
| 2 | President vetoes | Executive checks legislative |
| 3 | Congress overrides | Legislative checks back |
| 4 | President directs non-compliance | Executive resists (constitutional crisis) |
| 5 | Court hears case | Judicial reviews under Art III |
| 6 | Court rules (likely citing *INS v. Chadha* 1983 vs. *Youngstown* 1952) | Judicial checks both |
| 7 | Court ruling enforced | Executive enforces (or constitutional crisis if defied) |

> 🔑 Key takeaway: The Constitution's checks and balances don't ELIMINATE inter-branch conflict — they CHANNEL it. The Supreme Court is often the ultimate arbiter, but only because the other branches accept its rulings (the "norm of judicial supremacy" since *Cooper v. Aaron* 1958).
      `
    },
    {
      id: 'govsep2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — The Checks Matrix** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes Congress's power of the purse as a check on the executive?",
            options: [
              "Article I § 8 cl. 1 grants Congress the power to tax and spend, and Article I § 9 cl. 7 provides that 'No money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law' — together establishing that ALL federal spending requires congressional appropriation; Congress uses this power to: (1) condition agency funding on policy compliance (e.g., the Hyde Amendment restricting Medicaid abortion funding annually since 1976), (2) defund programs the executive favors, (3) attach policy riders to must-pass appropriations bills, (4) refuse to fund military operations (e.g., Boland Amendments restricting Contra aid 1982-1986); the executive's only formal options are to veto the appropriations bill (risking government shutdown) or to challenge specific conditions in court — generally an unsuccessful strategy",
              "Congress has no power of the purse of any kind during the entire period from 1789 onward in any region of the United States with no Article I § 8 cl. 1, no Article I § 9 cl. 7, no appropriations, no Hyde Amendment, no Boland Amendments, and no policy riders of any kind during the entire period in any region",
              "The President can spend federal money without congressional appropriation under any circumstance with no Article I § 9 cl. 7, no power of the purse, no Hyde Amendment, no Boland Amendments, and no policy riders of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "The power of the purse applies only to military spending and not to general federal spending of any kind during the entire period from 1789 onward in any region of the United States with no Hyde Amendment, no domestic appropriations, and no policy riders of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Power of the purse: Art I § 8 cl 1 (tax + spend) + Art I § 9 cl 7 ("No money drawn from Treasury but in Consequence of Appropriations made by Law"). ALL federal spending requires appropriation. Uses: (1) condition funding (Hyde Amendment 1976+ Medicaid abortion); (2) defund programs; (3) policy riders on must-pass bills; (4) refuse military funding (Boland Amendments 1982-86 Contra). Executive options: veto (risks shutdown) OR court challenge (usually unsuccessful).'
          },
          {
            question: "Which best describes judicial review as established in Marbury v. Madison (1803)?",
            options: [
              "Chief Justice John Marshall held that the Supreme Court possesses the constitutional authority to review acts of Congress (and by extension, executive actions) for conformity with the Constitution and to declare them void if they conflict with the Constitution; the doctrine is grounded in: (1) the Court's Article III judicial power to decide 'cases arising under this Constitution', (2) the Supremacy Clause's recognition of the Constitution as 'the supreme Law of the Land', (3) the framers' written-constitution structure (a constitution that could be set aside by ordinary legislation 'would amount to no constitution at all'); judicial review is implicit rather than explicit in the Constitution but has been universally accepted since 1803, providing the foundational mechanism for judicial checking of the political branches",
              "There is no Marbury v. Madison decision of any kind during the entire period from 1803 onward in any region of the United States with no John Marshall, no judicial review, no Article III, no Supremacy Clause, and no judicial check on Congress or the President of any kind during the entire period in any region",
              "Marbury v. Madison was overruled within five years and judicial review was abandoned of any kind under any circumstance with no John Marshall, no Article III judicial power, no Supremacy Clause, and no judicial check on the political branches of any kind during the entire period from 1803 onward in any region of the United States during the period",
              "Judicial review applies only to state laws and not to federal statutes or executive actions of any kind during the entire period from 1803 onward in any region of the United States with no Marbury v. Madison, no John Marshall, no Article III, and no Supremacy Clause of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Marbury v. Madison (1803, Marshall): Court has authority to review acts of Congress (and executive) for conformity with Constitution and declare void if conflict. Grounded in: (1) Art III judicial power over "cases arising under this Constitution"; (2) Supremacy Clause ("supreme Law of the Land"); (3) written-constitution structure (constitution that could be set aside by ordinary legislation = "no constitution at all"). Judicial review IMPLICIT but universally accepted since 1803 — foundational mechanism for judicial checking.'
          }
        ]
      }
    },
    {
      id: 'govsep2-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — name the check**`,
      exercise: {
        questions: [
          {
            prompt: "The vote required in EACH chamber of Congress to override a presidential veto.",
            answer: 'two-thirds',
            acceptableAnswers: ['two-thirds', '2/3', 'two thirds', 'Two-thirds', 'two-thirds majority', '67%', '66.7%'],
            hint: 'A supermajority — same as required for treaty ratification in the Senate.'
          },
          {
            prompt: "The vote required in the Senate to convict and remove an impeached federal officer.",
            answer: 'two-thirds',
            acceptableAnswers: ['two-thirds', '2/3', 'two thirds', 'Two-thirds', 'two-thirds majority', '67 senators'],
            hint: 'Same supermajority as veto override; reason no U.S. president has ever been removed.'
          },
          {
            prompt: "The 1803 Supreme Court case that established judicial review.",
            answer: 'Marbury v. Madison',
            acceptableAnswers: ['Marbury v. Madison', 'Marbury v Madison', 'Marbury vs. Madison', 'marbury v madison', 'Marbury'],
            hint: 'John Marshall opinion involving William Marbury\'s undelivered judicial commission.'
          }
        ]
      }
    },
    {
      id: 'govsep2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each tool to the branch that wields it.**`,
      exercise: {
        dropdowns: [
          {
            label: "Veto and pocket veto over legislation: ___",
            options: ['Legislative branch (Congress)', 'Executive branch (President)', 'Judicial branch (federal courts)', 'Federal bureaucracy (agencies)']
          },
          {
            label: "Judicial review of statutes and executive actions: ___",
            options: ['Legislative branch (Congress)', 'Executive branch (President)', 'Judicial branch (federal courts)', 'Federal bureaucracy (agencies)']
          },
          {
            label: "Power of the purse and impeachment authority: ___",
            options: ['Legislative branch (Congress)', 'Executive branch (President)', 'Judicial branch (federal courts)', 'Federal bureaucracy (agencies)']
          }
        ],
        correctAnswers: ['Executive branch (President)', 'Judicial branch (federal courts)', 'Legislative branch (Congress)'],
        hint1: 'Article I § 7 — the "presentment clause" check.',
        hint2: 'Established by Marbury v. Madison 1803.',
        hint3: 'Article I §§ 2, 3 (impeachment) + Art I § 8 + § 9 cl 7 (purse).',
        explanation: 'Tools matrix: VETO/pocket veto = Executive (Art I § 7). JUDICIAL REVIEW = Judicial (Marbury 1803, implicit from Art III). POWER OF PURSE + IMPEACHMENT = Legislative (Art I § 7-8 + Art I §§ 2-3). The federal bureaucracy executes — it does not have these constitutional checks.'
      }
    },
    {
      id: 'govsep2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Inter-Branch Conflict**`,
      exercise: {
        questions: [
          {
            question: "Why do constitutional amendments to address Supreme Court decisions almost never succeed despite Article V's amendment authority?",
            options: [
              "Article V requires a 2/3 vote in each chamber of Congress (or convention called by 2/3 of states) PLUS ratification by 3/4 of state legislatures (or state conventions) — an extraordinarily high threshold designed to make constitutional change difficult; only 27 amendments have been ratified in 230+ years (and the Bill of Rights accounts for the first 10); successful amendments overruling Supreme Court decisions: 11th Amendment (1795, overruling *Chisholm v. Georgia* 1793 on state sovereign immunity); 14th Amendment (1868, overruling *Dred Scott* 1857 on Black citizenship); 16th Amendment (1913, overruling *Pollock* 1895 on federal income tax); 26th Amendment (1971, overruling *Oregon v. Mitchell* 1970 on 18-year-old voting); the practical alternative is to rely on (a) statutory change (for statutory-interpretation rulings) or (b) Supreme Court personnel change over time",
              "Constitutional amendments are easy to pass and frequently overturn Supreme Court decisions of any kind under any circumstance with no 2/3 congressional supermajority, no 3/4 state ratification, and no Article V difficulty of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "There are no constitutional amendments overruling Supreme Court decisions of any kind during the entire period from 1789 onward in any region of the United States with no 11th Amendment, no 14th Amendment, no 16th Amendment, and no 26th Amendment of any kind during the entire period in any region",
              "Article V requires only a simple majority of Congress and no state ratification of any kind during the entire period from 1789 onward in any region of the United States with no 2/3 congressional supermajority, no 3/4 state ratification, and no constitutional amendment difficulty of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Article V: 2/3 each chamber (or convention by 2/3 states) + 3/4 state legislatures (or conventions) = extraordinarily high threshold. Only 27 amendments in 230+ years (Bill of Rights = first 10). Amendments overruling SCOTUS: 11th (1795, Chisholm 1793 sovereign immunity); 14th (1868, Dred Scott 1857 Black citizenship); 16th (1913, Pollock 1895 federal income tax); 26th (1971, Oregon v. Mitchell 1970, 18-year-old voting). Practical alternatives: (a) statutory change (for statutory rulings); (b) Court personnel change.'
          },
          {
            question: "How does the Senate confirmation process function as a check on both executive and judicial branches?",
            options: [
              "Article II § 2 cl. 2 requires Senate 'Advice and Consent' (majority vote since 1789, except presidentially-confirmed-since-1975 vice-presidential vacancy filling) for ~1,200 'PAS' (Presidentially Appointed, Senate-Confirmed) positions — including all federal judges (lifetime), Cabinet secretaries, ambassadors, and senior agency officials; this gives the Senate substantial influence over: (1) the President's policy team (refusal/delay can stymie executive priorities — e.g., 240+ Trump first-term picks delayed by Democrats), (2) the federal judiciary's ideological composition (Senate refusal to consider Garland 2016, McConnell prioritization of judicial confirmations 2017-20), (3) executive branch policy direction (departing officials replaced by acting officials of less authority); the 2013/2017 'nuclear option' lowered the cloture threshold from 60 to 51 for executive nominations and judicial nominations respectively",
              "The Senate has no role in executive or judicial appointments of any kind during the entire period from 1789 onward in any region of the United States with no Advice and Consent, no Senate confirmation, no Cabinet, no ambassadors, no federal judges, and no PAS positions of any kind during the entire period in any region",
              "Senate confirmation is purely formal with no substantive influence on executive or judicial branches of any kind under any circumstance with no Cabinet rejection, no judicial rejection, and no Garland incident of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "There is no Article II § 2 cl. 2 of any kind during the entire period from 1789 onward in any region of the United States with no Advice and Consent, no Senate confirmation, no Cabinet, no ambassadors, no federal judges, and no nuclear option of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Senate confirmation (Art II § 2 cl 2): Advice and Consent for ~1,200 PAS positions including all federal judges (lifetime), Cabinet, ambassadors, senior agency officials. Influence: (1) executive policy team (240+ Trump first-term picks delayed); (2) federal judiciary ideology (Garland 2016 + McConnell 2017-20 judicial prioritization); (3) executive policy via departing-official replacement by less-authoritative actings. Nuclear option 2013/2017: cloture lowered 60→51 for executive then judicial nominations.'
          }
        ]
      }
    }
  ]
}
