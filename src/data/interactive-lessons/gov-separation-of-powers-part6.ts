export const govSeparationOfPowersPart6Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {
      id: 'govsep6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Separation of Powers

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| 5-step framework for analyzing inter-branch conflicts |
| Worked example: Trump v. United States (2024) presidential immunity |
| Required AP Gov foundational documents |
| AP argumentative essay structure |

> 🔑 Key idea: AP Gov rewards students who can apply established constitutional doctrines to novel scenarios. The 5-step framework below is the standard analytical approach.
      `
    },
    {
      id: 'govsep6-content',
      type: 'text' as const,
      content: `
## 5-Step Framework for Analyzing Inter-Branch Conflicts

| Step | Question | Examples |
|---|---|---|
| **1. Identify the branches in conflict** | Which two (or more) branches are exercising authority? | Truman seizure: Executive vs. Congress (Taft-Hartley) |
| **2. Identify the constitutional sources** | What article, section, clause, or amendment authorizes each branch's action? | Truman: Art II Take Care Clause vs. Art I § 8 (commerce/property) |
| **3. Apply the relevant doctrinal framework** | Justice Jackson 3-tier (executive); judicial review (Marbury); separation-of-powers cases (Chadha, Clinton v. NY) | Truman: Jackson tier 3 (against express congressional will) |
| **4. Identify the practical political response** | What can the OTHER branches actually do? | Truman: Court ordered return of mills; Congress could appropriate response; impeachment unlikely |
| **5. Predict the outcome and significance** | What does this case tell us about the balance of branches in this era? | Truman: Established judicial limit on executive emergency authority |

## Worked Example — Trump v. United States (2024)

**Facts:** After leaving office, former President Trump faced federal indictment in Washington, D.C. for actions related to the January 6, 2021 Capitol riot. Trump moved to dismiss arguing that former presidents have absolute immunity from criminal prosecution for acts taken while in office. The case reached the Supreme Court.

**Step 1 — Branches in conflict:** Executive (Trump claiming immunity protected by Article II) vs. Judicial (federal court conducting criminal prosecution authorized by Congress's criminal statutes).

**Step 2 — Constitutional sources:**

| Argument | Constitutional source |
|---|---|
| Trump for absolute immunity | Article II Vesting Clause + structural presidential authority + *Nixon v. Fitzgerald* 1982 (civil immunity) |
| Government against immunity | Article III judicial power + Article II Take Care Clause (no person above law) + *United States v. Nixon* 1974 (executive privilege not absolute) |

**Step 3 — Doctrinal framework:** *Nixon v. Fitzgerald* 1982 (absolute civil immunity for official acts as president) + *Clinton v. Jones* 1997 (no civil immunity for unofficial pre-presidential acts) + *United States v. Nixon* 1974 (no absolute immunity from criminal subpoena). The Court had not previously addressed criminal immunity for former presidents.

**Step 4 — Holding:** The Court held 6-3 (Roberts majority) that former presidents have:
- ABSOLUTE immunity for actions within "core" constitutional authority (e.g., issuing pardons, vetoing legislation)
- PRESUMPTIVE immunity for "official acts" (rebuttable by showing prosecution would not pose dangers of intrusion on executive function)
- NO immunity for "unofficial acts"

**Step 5 — Significance:** Substantially expanded protection for former presidents from criminal accountability for acts arguably within their official duties; remanded to lower courts to determine which Trump actions fell into which category. The dissent (Sotomayor) warned this places presidents "above the law" for any conduct plausibly characterized as "official."

## Required AP Gov Foundational Documents

| Document | Year | Separation-of-powers relevance |
|---|---|---|
| **Declaration of Independence** | 1776 | Inalienable rights; consent of the governed; complaints against George III's executive abuses |
| **Articles of Confederation** | 1781 | Confederal failure → Constitution; no executive or judicial branch |
| **U.S. Constitution** | 1787/1789 | Articles I, II, III + Bill of Rights establish three branches + checks |
| **Federalist No. 10** | 1787 | Madison on faction; large republic + representation as check on tyranny of majority |
| **Federalist No. 51** | 1788 | Madison on separation of powers + checks + federalism + "double security" |
| **Federalist No. 70** | 1788 | Hamilton on energetic unitary executive |
| **Federalist No. 78** | 1788 | Hamilton on judicial independence + judicial review + "least dangerous branch" |
| **Brutus No. 1** | 1787 | Anti-Federalist warning against expansive federal authority |
| **Letter from Birmingham Jail** | 1963 | MLK on civil disobedience and unjust laws |

## AP Argumentative Essay Structure

| Component | What to include |
|---|---|
| **THESIS** | Clear claim with reasoning (e.g., "Increased presidential use of executive orders has weakened the framers' separation-of-powers design because...") |
| **EVIDENCE 1** | Primary source from required documents (e.g., Federalist 51 quote) |
| **EVIDENCE 2** | Specific historical example (e.g., Obama DACA 2012, Trump travel ban 2017) |
| **REASONING** | Connect evidence to thesis explicitly |
| **ALTERNATIVE PERSPECTIVE** | Acknowledge opposing view (e.g., "Some argue executive orders are necessary because Congress is dysfunctional...") |
| **REBUTTAL** | Refute the alternative perspective |

> 🔑 Key takeaway: AP rewards analytical specificity. Thesis + 2 specific evidence + explicit reasoning + alternative perspective + rebuttal = full credit.
      `
    },
    {
      id: 'govsep6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Doctrinal Application** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the Supreme Court's holding in Trump v. United States (2024)?",
            options: [
              "Former presidents have absolute immunity for core constitutional acts, presumptive immunity for other official acts, and no immunity for unofficial conduct",
              "Former presidents have no immunity, so they may be prosecuted for vetoes, pardons, and other official acts just like any other citizen",
              "Former presidents have absolute immunity for all conduct in office, including personal, campaign, and private business acts",
              "Former presidents have immunity only if Congress first declines to impeach them, as the Impeachment Judgment Clause requires"
            ],
            correctAnswer: 0,
            explanation: 'Trump v. United States (2024, Roberts 6-3): TIERED immunity for former presidents — (1) ABSOLUTE for "core" constitutional authority (pardons, vetoes, removal); (2) PRESUMPTIVE for "official acts" (rebuttable by no-intrusion-on-executive showing); (3) NO immunity for "unofficial acts." Remanded to lower courts. Sotomayor dissent (joined by Kagan + Jackson): places presidents "above the law" for any plausibly "official" conduct → expanded presidential authority + weakened Watergate-era accountability norms.'
          },
          {
            question: "Which best describes Justice Jackson's three-tier framework from Youngstown Sheet & Tube Co. v. Sawyer (1952)?",
            options: [
              "Presidential power is greatest with congressional authorization, uncertain when Congress is silent, and weakest when defying Congress",
              "Presidential power is greatest when Congress is silent, uncertain when it authorizes action, and weakest when the courts have not yet ruled on the issue",
              "Presidential power is equal in all three settings, because the Vesting Clause gives the President full executive power whatever Congress has said or done",
              "Presidential power is greatest in wartime, uncertain in peacetime, and weakest during emergencies that Congress has formally declared by statute"
            ],
            correctAnswer: 0,
            explanation: 'Jackson concurrence in Youngstown (1952): three-tier framework. TIER 1 MAX (Congress authorization): authority = own + delegated. TIER 2 AMBIGUOUS "twilight zone" (Congress silent): only own independent powers; concurrent zone possible. TIER 3 MIN (against express/implied Congress): "lowest ebb"; constitutional only if Congress lacks power to act. Truman steel seizure = Tier 3 (Congress rejected authority in Taft-Hartley 1947) → unconstitutional.'
          }
        ]
      }
    },
    {
      id: 'govsep6-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — apply the framework**`,
      exercise: {
        questions: [
          {
            prompt: "Justice Jackson's tier in which the President acts against the express or implied will of Congress (lowest ebb of presidential authority).",
            answer: 'Tier 3',
            acceptableAnswers: ['Tier 3', 'tier 3', 'Tier three', '3', 'Third tier', 'lowest ebb', 'minimum tier'],
            hint: 'The tier in which Truman\'s steel seizure was held unconstitutional.'
          },
          {
            prompt: "The Federalist Paper in which Hamilton defended judicial review and described the judiciary as the 'least dangerous branch.'",
            answer: 'Federalist 78',
            acceptableAnswers: ['Federalist 78', 'Federalist No. 78', 'Federalist No 78', 'No. 78', 'no 78', 'federalist 78'],
            hint: 'Hamilton\'s argument: courts have neither force nor will, only judgment.'
          },
          {
            prompt: "The 1982 case establishing absolute civil immunity for sitting presidents for acts taken in their official capacity.",
            answer: 'Nixon v. Fitzgerald',
            acceptableAnswers: ['Nixon v. Fitzgerald', 'Nixon v Fitzgerald', 'Fitzgerald v. Nixon', 'nixon v fitzgerald'],
            hint: 'Civil immunity case (different from US v. Nixon 1974 which was criminal).'
          }
        ]
      }
    },
    {
      id: 'govsep6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Apply Justice Jackson's three-tier framework.**`,
      exercise: {
        dropdowns: [
          {
            label: "Congress passes a law authorizing the President to impose tariffs on national-security grounds; the President imposes tariffs accordingly. This falls in Justice Jackson's: ___",
            options: ['Tier 1 (maximum authority — congressional authorization)', 'Tier 2 (twilight zone — congressional silence)', 'Tier 3 (lowest ebb — against congressional will)', 'Outside Justice Jackson framework entirely']
          },
          {
            label: "Congress is silent on a matter; the President acts on the basis of his own Article II authority. This falls in Justice Jackson's: ___",
            options: ['Tier 1 (maximum authority — congressional authorization)', 'Tier 2 (twilight zone — congressional silence)', 'Tier 3 (lowest ebb — against congressional will)', 'Outside Justice Jackson framework entirely']
          },
          {
            label: "Congress has expressly prohibited a particular executive action; the President takes that action anyway. This falls in Justice Jackson's: ___",
            options: ['Tier 1 (maximum authority — congressional authorization)', 'Tier 2 (twilight zone — congressional silence)', 'Tier 3 (lowest ebb — against congressional will)', 'Outside Justice Jackson framework entirely']
          }
        ],
        correctAnswers: ['Tier 1 (maximum authority — congressional authorization)', 'Tier 2 (twilight zone — congressional silence)', 'Tier 3 (lowest ebb — against congressional will)'],
        hint1: 'Congress affirmatively authorizes → maximum.',
        hint2: 'Congress silent → twilight zone.',
        hint3: 'Congress affirmatively prohibits → lowest ebb (Truman steel seizure scenario).',
        explanation: 'Jackson three-tier framework application: Tier 1 (MAX) = Congress authorizes (e.g., tariff statute → presidential tariffs). Tier 2 (TWILIGHT) = Congress silent (concurrent authority possible). Tier 3 (LOWEST EBB) = Congress prohibits (Truman steel seizure scenario; constitutional only if Congress lacks the power to act).'
      }
    },
    {
      id: 'govsep6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Argumentative Essay**`,
      exercise: {
        questions: [
          {
            question: "AP argumentative essay prompt: 'Develop an argument that explains whether or not the increased use of executive orders by modern presidents undermines the framers' separation-of-powers design.' Which response best demonstrates the AP standard?",
            options: [
              "A thesis that executive orders undermine the design, supported by Federalist 51 and examples like DACA, with reasoning and a response to the opposing view",
              "A thesis that executive orders are common, followed by a list of orders, dates, and presidents, with no document cited and no response to an opposing view",
              "A summary of Federalist 51 and Federalist 70 that never states a claim about whether executive orders undermine the framers' design or explains why it matters",
              "A thesis that both sides have good points, supported mainly by personal opinion and a single news story"
            ],
            correctAnswer: 0,
            explanation: 'Full-credit AP essay: THESIS = clear claim + reasoning. EVIDENCE 1 = primary source (Federalist 51 "ambition counteract ambition"). EVIDENCE 2 = specific examples (DACA 2012, travel ban 2017, student-loan forgiveness 2022) + statistical trend (~50 EOs/year on substantive policy) + judicial response (West Virginia v. EPA 2022 major-questions, Loper Bright 2024). ALTERNATIVE PERSPECTIVE: gridlock necessitates EOs. REBUTTAL: polarization partly product of EO bypass (parties expect to govern from White House regardless of Congress). Framers tolerated inefficiency to force inter-branch deliberation.'
          },
          {
            question: "AP scenario: Congress passes a statute creating an Independent Counsel with prosecutorial authority over executive-branch officials. The President argues this violates the Take Care Clause by removing prosecutorial discretion from his control. Which framework best applies?",
            options: [
              "Morrison v. Olson, which upheld the Independent Counsel law because the counsel's role was limited and the Attorney General could remove for good cause",
              "Marbury v. Madison, which held that Congress may never create offices outside the three branches established by the Constitution",
              "United States v. Nixon, which held that independent prosecutors of executive officials must be appointed and removable at will by the President alone, with no role for Congress",
              "Clinton v. City of New York, which held that Congress may never limit the President's power to remove an independent counsel"
            ],
            correctAnswer: 0,
            explanation: 'Morrison v. Olson (1988, 7-1): UPHELD Independent Counsel statute against unitary-executive challenge. (1) Did not impermissibly interfere with Art II — limited jurisdiction + AG retained for-cause removal. (2) Court rejected STRICT FORMALIST in favor of FUNCTIONAL analysis (does structural innovation prevent executive performing constitutional functions?). Scalia LONE DISSENT: all executive power belongs to President alone (unitary-executive); statute fundamentally subverts. Statute lapsed 1999, not renewed. Modern Court (Seila Law 2020 + Trump v. US 2024) moved toward Scalia → Morrison precedential force uncertain.'
          }
        ]
      }
    }
  ]
}
