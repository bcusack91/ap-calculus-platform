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
| 6 | Court rules on whether the statute and the President's refusal are constitutional (judicial review, *Marbury* 1803) | Judicial checks both |
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
              "No money may be drawn from the Treasury without appropriations made by law, so Congress can fund, defund, or attach conditions to executive programs",
              "The President sets the federal budget by executive order, so Congress may only approve or reject the total, without changing particular programs",
              "The Treasury Secretary controls spending, and Congress may review expenses only after the money has been spent",
              "Congress may tax but not spend, since spending decisions belong to the executive branch under Article II"
            ],
            correctAnswer: 0,
            explanation: 'Power of the purse: Art I § 8 cl 1 (tax + spend) + Art I § 9 cl 7 ("No money drawn from Treasury but in Consequence of Appropriations made by Law"). ALL federal spending requires appropriation. Uses: (1) condition funding (Hyde Amendment 1976+ Medicaid abortion); (2) defund programs; (3) policy riders on must-pass bills; (4) refuse military funding (Boland Amendments 1982-86 Contra). Executive options: veto (risks shutdown) OR court challenge (usually unsuccessful).'
          },
          {
            question: "Which best describes judicial review as established in Marbury v. Madison (1803)?",
            options: [
              "The Court can void acts of Congress that conflict with the Constitution, making the judiciary a check on the other branches",
              "The Court can issue writs ordering the President to appoint officials, making the judiciary the supervisor of all executive appointments",
              "The Court can review state laws only, since acts of Congress are presumed constitutional once the President has signed them into law",
              "The Court can advise Congress on whether pending bills are constitutional, making the judiciary a partner in the legislative process"
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
              "Article V demands two-thirds of both chambers and ratification by three-fourths of the states, so only a broad national consensus can override the Court",
              "Article V forbids amendments that respond to specific court cases, so Congress must instead pass ordinary statutes to reverse the Court's constitutional rulings",
              "Article V lets the Supreme Court veto any proposed amendment that would overturn one of its own decisions",
              "Article V requires unanimous approval by the states, so a single state can block any amendment"
            ],
            correctAnswer: 0,
            explanation: 'Article V: 2/3 each chamber (or convention by 2/3 states) + 3/4 state legislatures (or conventions) = extraordinarily high threshold. Only 27 amendments in 230+ years (Bill of Rights = first 10). Amendments overruling SCOTUS: 11th (1795, Chisholm 1793 sovereign immunity); 14th (1868, Dred Scott 1857 Black citizenship); 16th (1913, Pollock 1895 federal income tax); 26th (1971, Oregon v. Mitchell 1970, 18-year-old voting). Practical alternatives: (a) statutory change (for statutory rulings); (b) Court personnel change.'
          },
          {
            question: "How does the Senate confirmation process function as a check on both executive and judicial branches?",
            options: [
              "Senate advice and consent lets senators shape both the President's team and the long-term makeup of the courts through lifetime judicial appointments",
              "Senate advice and consent lets senators remove judges whose rulings they oppose and replace them with judges chosen by Senate leaders",
              "Senate advice and consent applies only to Cabinet secretaries and ambassadors, so federal judicial nominees take office as soon as the President signs their commissions",
              "Senate advice and consent lets the House veto any nominee that the Senate has already confirmed"
            ],
            correctAnswer: 0,
            explanation: 'Senate confirmation (Art II § 2 cl 2): Advice and Consent for ~1,200 PAS positions including all federal judges (lifetime), Cabinet, ambassadors, senior agency officials. Influence: (1) executive policy team (240+ Trump first-term picks delayed); (2) federal judiciary ideology (Garland 2016 + McConnell 2017-20 judicial prioritization); (3) executive policy via departing-official replacement by less-authoritative actings. Nuclear option 2013/2017: cloture lowered 60→51 for executive then judicial nominations.'
          }
        ]
      }
    }
  ]
}
