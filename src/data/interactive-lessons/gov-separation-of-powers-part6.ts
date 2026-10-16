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
| Worked example: Obama's immigration executive actions (2014-2016) |
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
| **3. Apply the relevant constitutional principle** | Separation of powers, checks and balances, judicial review (Marbury), federalism (EK 1.6.A, 1.7.A) | Truman: no statute authorized the seizure and Congress had declined to grant that power, so the President exceeded his authority |
| **4. Identify the practical political response** | What can the OTHER branches actually do? | Truman: Court ordered return of mills; Congress could appropriate response; impeachment unlikely |
| **5. Predict the outcome and significance** | What does this case tell us about the balance of branches in this era? | Truman: Established judicial limit on executive emergency authority |

## Worked Example — Obama's Immigration Executive Actions (2014-2016)

The CED lists "Congressional response to the Obama administration's executive actions on immigration" as an illustrative example for Topic 1.6.

**Facts:** After Congress failed to pass immigration reform, President Obama announced in November 2014 an executive program (DAPA) deferring deportation for millions of parents of citizens and permanent residents, expanding the 2012 DACA program. The House voted to block funding for the program, and Texas led 26 states in a lawsuit. A federal district court blocked the program in February 2015, an appeals court agreed, and in 2016 an evenly divided (4-4) Supreme Court left the block in place. The program never took effect and was rescinded in 2017.

**Step 1 — Branches in conflict:** Executive (President acting through a directive to the Department of Homeland Security rather than through legislation) vs. Legislative (Congress, which writes immigration law and controls funding) — with the Judiciary as referee and the states as plaintiffs.

**Step 2 — Constitutional sources:**

| Argument | Constitutional source |
|---|---|
| President for the program | Article II vesting + "take Care that the Laws be faithfully executed" — executive discretion over enforcement priorities (EK 2.4.A.2.iv) |
| Opponents against the program | Article I gives Congress power over naturalization and lawmaking; a program this large rewrote the law rather than enforcing it; the power of the purse |

**Step 3 — Principle applied:** SEPARATION OF POWERS and CHECKS AND BALANCES (EK 1.6.A.1): the President used directives to the bureaucracy when his agenda stalled in Congress (EK 2.5.A.3); Congress answered with its funding power; the courts reviewed whether the executive exceeded its authority.

**Step 4 — Practical political response:** The House defunding vote failed in the Senate, so the decisive check came from the courts — showing how MULTIPLE ACCESS POINTS let opponents who lose in one branch win in another (EK 1.6.B.1). States used federalism as a second avenue.

**Step 5 — Significance:** Executive action can move faster than Congress, but it is fragile: courts can block it, and the next president can reverse it. The episode illustrates the CED's point that separation of powers constrains national policymaking (EK 2.15.B.2).

## Required AP Gov Foundational Documents (9 of the 13)

The other four required documents — Federalist No. 39, the Emancipation Proclamation, the Gettysburg Address, and the core principles of Adam Smith's *Wealth of Nations* — bear less directly on separation of powers.

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
| **EVIDENCE 2** | Specific historical example (e.g., Obama DACA 2012 and DAPA 2014, Trump travel ban 2017) |
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
            question: "In the 2014-2016 dispute over President Obama's immigration executive actions, which event was a JUDICIAL check on the executive branch?",
            options: [
              "A federal district court blocked the program from taking effect, and an evenly divided Supreme Court left that order in place in 2016",
              "The House of Representatives voted to deny funding for carrying out the President's immigration program",
              "President Obama announced the program through executive action after immigration reform stalled in Congress",
              "The Senate held confirmation hearings for the President's nominee to lead Homeland Security"
            ],
            correctAnswer: 0,
            explanation: 'Judicial check (EK 1.6.A.1, 1.6.B.1): after Texas and 25 other states sued, federal courts blocked the program, and the 4-4 Supreme Court split left the block in place — the courts limited the executive. The House defunding vote was a LEGISLATIVE check; the announcement was the executive action being checked; confirmation hearings are a Senate check on appointments, not on this program.'
          },
          {
            question: "A student argues that presidents need broad authority to act quickly through executive orders when Congress is gridlocked. Which required foundational document best supports this argument?",
            options: [
              "Federalist No. 70, which argues that energy in one unified office of chief magistrate is essential to good government",
              "Federalist No. 51, which argues that each branch must be given the means to resist encroachment by the others",
              "Brutus No. 1, which warns that a distant and powerful national government will threaten the liberty of the people",
              "Federalist No. 10, which argues that a large republic will control the effects of faction by multiplying competing interests"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.6.A.1: Federalist No. 70 justifies a single executive, arguing a strong executive is "essential to the protection of the community against foreign attacks… [and] to the steady administration of the laws." Federalist No. 51 stresses checks on every branch (better for the opposing argument), Brutus No. 1 warns against concentrated national power, and Federalist No. 10 concerns factions, not executive power.'
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
            prompt: "A presidential directive that manages the federal government, implied by the President's vested executive power — the tool Obama used for his 2014 immigration program: an executive ___.",
            answer: 'order',
            acceptableAnswers: ['order', 'orders', 'executive order', 'executive action'],
            hint: 'EK 2.4.A.2.iv.'
          },
          {
            prompt: "The Federalist Paper in which Hamilton defended judicial review and described the judiciary as the 'least dangerous branch.'",
            answer: 'Federalist 78',
            acceptableAnswers: ['Federalist 78', 'Federalist No. 78', 'Federalist No 78', 'No. 78', 'no 78', 'federalist 78'],
            hint: 'Hamilton\'s argument: courts have neither force nor will, only judgment.'
          },
          {
            prompt: "The 1993 law Congress passed to modify the impact of a Supreme Court free-exercise ruling (a CED illustrative example for checks and balances): the Religious Freedom ___ Act.",
            answer: 'Restoration',
            acceptableAnswers: ['Restoration', 'restoration'],
            hint: 'RFRA — Congress checking the Court by statute (EK 2.11.B.1.i).'
          }
        ]
      }
    },
    {
      id: 'govsep6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Identify the check in the immigration dispute.**`,
      exercise: {
        dropdowns: [
          {
            label: "The House votes to deny funds for carrying out the President's immigration program: ___",
            options: ['Legislative check on the executive', 'Judicial check on the executive', 'Executive check on the legislature', 'Judicial check on the legislature']
          },
          {
            label: "A federal court orders that the program may not take effect while the lawsuit continues: ___",
            options: ['Legislative check on the executive', 'Judicial check on the executive', 'Executive check on the legislature', 'Judicial check on the legislature']
          },
          {
            label: "The President threatens to veto any bill that would overturn the program: ___",
            options: ['Legislative check on the executive', 'Judicial check on the executive', 'Executive check on the legislature', 'Judicial check on the legislature']
          }
        ],
        correctAnswers: ['Legislative check on the executive', 'Judicial check on the executive', 'Executive check on the legislature'],
        hint1: 'The power of the purse belongs to Congress.',
        hint2: 'Courts reviewing executive action.',
        hint3: 'The veto is the President\'s check on Congress.',
        explanation: 'EK 1.6.A.1: each branch checks the others. Defunding = Congress checking the President; a court injunction = the judiciary checking the President; a veto threat = the President checking Congress. No court ruled on an act of Congress here.'
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
            explanation: 'Full-credit AP essay: THESIS = clear claim + reasoning. EVIDENCE 1 = primary source (Federalist 51 "ambition counteract ambition"). EVIDENCE 2 = specific examples (DACA 2012, travel ban 2017, student-loan forgiveness 2022) + statistical trend (~50 EOs/year on substantive policy) + judicial response (courts blocking DAPA 2015-16). ALTERNATIVE PERSPECTIVE: gridlock necessitates EOs. REBUTTAL: polarization partly product of EO bypass (parties expect to govern from White House regardless of Congress). Framers tolerated inefficiency to force inter-branch deliberation.'
          },
          {
            question: "AP scenario: After failing to stop a presidential immigration program in Congress, a coalition of states and interest groups won a court order blocking it. Which concept does this sequence best illustrate?",
            options: [
              "Separation of powers creates multiple access points for stakeholders seeking to influence policy, so those who lose in one branch can try another",
              "Federalism requires the states to approve every federal executive action before it can take effect",
              "Judicial restraint bars federal courts from reviewing any action that the President takes under Article II, even when states sue",
              "The Supremacy Clause lets states nullify any federal policy their legislatures oppose"
            ],
            correctAnswer: 0,
            explanation: 'EK 1.6.B.1: separation of powers and checks and balances create MULTIPLE ACCESS POINTS for stakeholders and institutions to influence public policy. Opponents who lost in Congress turned to the courts and won. States do not approve federal executive actions, courts do review executive actions, and the Supremacy Clause makes valid federal law supreme over state law, not the reverse.'
          }
        ]
      }
    }
  ]
}
