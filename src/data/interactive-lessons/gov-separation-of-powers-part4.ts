export const govSeparationOfPowersPart4Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {
      id: 'govsep4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Separation of Powers

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Separation of powers × federalism |
| Separation of powers × civil rights & liberties |
| Separation of powers × political parties |
| The administrative state and the "fourth branch" |

> 🔑 Key idea: Separation of powers does not operate in isolation — it interacts with federalism, civil rights, parties, and the administrative state to shape how government actually functions.
      `
    },
    {
      id: 'govsep4-content',
      type: 'text' as const,
      content: `
## Separation of Powers × Federalism

| Dimension | Federal level | State level |
|---|---|---|
| Horizontal separation | 3 federal branches | 3 state branches (mostly) |
| Vertical separation | Federal vs. state authority | Federal preemption + 14th Amendment limits |
| Combined | "Double security" (Federalist 51) | State sovereignty + federal supremacy |

**Examples of intersection:**

| Scenario | Branches involved | Federalism dimension |
|---|---|---|
| ACA Medicaid expansion | Congress (statute) → President (signed) → Court (NFIB 2012) | Court limited federal coercion of states |
| Voting Rights Act § 4 | Congress (statute) → President (signed) → Court (Shelby County 2013) | Court struck preclearance formula |
| Sanctuary cities | Trump admin executive orders → states/cities resist → Court (Murphy 2018, anti-commandeering) | Court protected state autonomy from federal commandeering |

## Separation of Powers × Civil Rights & Liberties

| Era | Pattern | Example |
|---|---|---|
| Pre-1937 | Court protects state authority + property rights | *Lochner* 1905, *Hammer v. Dagenhart* 1918, *Schechter* 1935 |
| 1937-2000 | Court protects civil rights/liberties; counter-majoritarian | *Brown* 1954, *Gideon* 1963, *Miranda* 1966, *Roe* 1973 |
| 2000-present | Mixed — Court active on both expansive and restrictive sides | *Citizens United* 2010 (corporate speech ↑), *Obergefell* 2015 (same-sex marriage), *Dobbs* 2022 (abortion to states) |

**Counter-majoritarian dilemma:** Federal courts (especially Supreme Court) are LEAST democratically accountable (life tenure, no election); but they often protect minority rights AGAINST majority preferences — a tension the framers viewed as a feature, not a bug. The political branches respond through (a) confirmation politics (controlling who sits on the court), (b) Court size (Art III § 1) — though no successful change since 1869, (c) jurisdiction stripping (rare), (d) constitutional amendment (rare).

## Separation of Powers × Political Parties

| Phenomenon | Effect on separation of powers |
|---|---|
| **Unified government** (same party controls White House + both chambers) | Inter-branch checking weaker; major legislation more likely (Obama 2009-10 → ACA; Trump 2017 → tax reform; Biden 2021-22 → ARPA, IRA) |
| **Divided government** (different parties) | Inter-branch checking stronger; legislative gridlock; budget standoffs (Obama 2011 + 2013 + Trump 2018-19 shutdowns) |
| **Polarization** | Even unified government can struggle (filibuster, factional conflict); divided government → near-paralysis |
| **Senate filibuster** | Effective 60-vote threshold for most legislation; concentrates power in pivotal senators (1995-2024 nuclear-option exceptions: nominations) |
| **Judicial confirmation politics** | Increasingly partisan — McConnell refusal to consider Garland 2016; ACB rushed confirmation 2020 |

> 🔑 Key takeaway: The framers did not anticipate political parties. Strong parties + divided government create inter-branch dysfunction the framers' design did not anticipate; strong parties + unified government weaken the inter-branch checking the framers built in.

## The Administrative State and the "Fourth Branch"

| Feature | Description |
|---|---|
| **Size** | ~2 million federal civilian employees + ~430 federal agencies |
| **Constitutional status** | Formally within executive branch (Art II Take Care Clause) |
| **Practical authority** | Issues thousands of binding regulations annually (Federal Register) |
| **Independent agencies** | E.g., Federal Reserve, FCC, NLRB, FTC, SEC — limited presidential removal authority (*Humphrey\'s Executor* 1935; partly limited by *Seila Law* 2020) |
| **Major doctrines** | Chevron deference (*Chevron* 1984; OVERRULED *Loper Bright* 2024); major-questions doctrine (*West Virginia v. EPA* 2022); non-delegation revival |
| **Inter-branch tensions** | Congress delegates broadly + oversees + appropriates; President directs + controls personnel; Court reviews regulations + statutory interpretation |

**Loper Bright (2024) implications:** The Supreme Court overruled *Chevron* (1984), which had required courts to defer to agency interpretations of ambiguous statutes — a 40-year doctrine that had given the executive branch substantial regulatory authority; *Loper Bright* substantially shifted regulatory interpretation power FROM the executive branch TO the judicial branch.

> 🔑 Key idea: The "fourth branch" of administrative agencies is not a constitutional category but a practical reality. Its growth has shifted real authority away from elected officials (Congress) and toward unelected experts (agencies) — a tension at the heart of modern separation-of-powers debates.
      `
    },
    {
      id: 'govsep4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Inter-System Connections** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the impact of political parties on the framers' separation-of-powers design?",
            options: [
              "Parties tie officials across branches together, so unified government can weaken checks while divided government can produce gridlock the framers did not foresee",
              "Parties were written into the Constitution by the framers, so each branch must include members of both major parties to keep the checks working",
              "Parties have strengthened checks in every era, since a President's own party always opposes his legislative agenda",
              "Parties affect elections only, since separation of powers prevents party loyalty from influencing how officials govern"
            ],
            correctAnswer: 0,
            explanation: 'Parties × separation of powers: framers did NOT anticipate parties (Washington Farewell 1796 warned; Federalist 10 treated factions inevitable but undesirable). Modern two-party system altered design: (1) UNIFIED government weakens inter-branch checking (party loyalty cuts across institutions; major legislation more likely — ACA 2009-10, Trump tax 2017, ARPA + IRA 2021-22); (2) DIVIDED government strengthens checking but produces gridlock + shutdowns (Obama 2011/2013, Trump 2018-19); (3) high polarization 2010-present makes both dysfunctional. Framers\' "institutional self-interest" assumption overtaken by partisan loyalty.'
          },
          {
            question: "Which best describes the constitutional status and practical authority of the administrative state?",
            options: [
              "Agencies sit in the executive branch but make rules, enforce them, and decide disputes, blending powers the Constitution separates",
              "Agencies form a fourth branch created by Article IV of the Constitution, with their own powers to pass laws, set taxes, and appoint judges without review",
              "Agencies belong to the legislative branch, since Congress creates them, staffs them, and must approve each rule they issue before it takes effect",
              "Agencies belong to the judicial branch, since they settle disputes, interpret statutes, and issue rulings that cannot be challenged in federal court"
            ],
            correctAnswer: 0,
            explanation: 'Administrative state: ~2M federal civilian employees + ~430 agencies. Formally within EXECUTIVE branch (Art II Take Care Clause). Practical authority crosses lines: quasi-legislative (Federal Register regulations), quasi-judicial (admin-law judges), enforcement. INDEPENDENT agencies (Fed, FCC, NLRB, FTC, SEC) have removal-restriction insulation (Humphrey\'s Executor 1935, partly limited Seila Law 2020). Inter-branch tensions are core modern issue — Loper Bright 2024 overruled Chevron, shifting regulatory interpretation authority FROM exec TO judicial.'
          }
        ]
      }
    },
    {
      id: 'govsep4-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — connections**`,
      exercise: {
        questions: [
          {
            prompt: "The 1935 case (recently limited by Seila Law 2020) holding that Congress could restrict the President's removal of independent agency commissioners.",
            answer: "Humphrey's Executor",
            acceptableAnswers: ["Humphrey's Executor", "Humphreys Executor", "Humphrey's Executor v. United States", "humphrey's executor", "Humphrey"],
            hint: 'Involved FTC commissioner removed by FDR; key case for independent agencies.'
          },
          {
            prompt: "The 2024 case overruling Chevron deference and shifting agency-interpretation authority from executive to judicial branch.",
            answer: 'Loper Bright',
            acceptableAnswers: ['Loper Bright', 'Loper Bright Enterprises v. Raimondo', 'Loper', 'loper bright'],
            hint: 'Decided June 2024; ended a 40-year doctrine.'
          },
          {
            prompt: "The Federalist Paper in which Madison described federalism as providing a 'double security' alongside separation of powers.",
            answer: 'Federalist 51',
            acceptableAnswers: ['Federalist 51', 'Federalist No. 51', 'Federalist No 51', 'No. 51', 'no 51', 'federalist 51'],
            hint: 'Same paper that contains "ambition must be made to counteract ambition."'
          }
        ]
      }
    },
    {
      id: 'govsep4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each scenario to its inter-branch dynamic.**`,
      exercise: {
        dropdowns: [
          {
            label: "When the same political party controls the White House and both chambers of Congress, inter-branch checking is generally: ___",
            options: ['Substantially weaker (party loyalty cuts across institutions)', 'Substantially stronger (institutional rivalry intensified)', 'Completely eliminated (no checks at all)', 'Reversed (Congress checks itself instead of executive)']
          },
          {
            label: "When different parties control the White House and at least one chamber of Congress, inter-branch checking is generally: ___",
            options: ['Substantially weaker (party loyalty cuts across institutions)', 'Substantially stronger (institutional rivalry intensified)', 'Completely eliminated (no checks at all)', 'Reversed (Congress checks itself instead of executive)']
          },
          {
            label: "The Supreme Court's 2024 overruling of Chevron deference shifted regulatory interpretation authority: ___",
            options: ['From the executive branch to the judicial branch', 'From the judicial branch to the executive branch', 'From Congress to the executive branch', 'From the states to the federal government']
          }
        ],
        correctAnswers: ['Substantially weaker (party loyalty cuts across institutions)', 'Substantially stronger (institutional rivalry intensified)', 'From the executive branch to the judicial branch'],
        hint1: 'Unified government → fewer checks.',
        hint2: 'Divided government → more checks (also more gridlock).',
        hint3: 'Loper Bright (2024) overruled Chevron (1984).',
        explanation: 'Inter-branch dynamics: UNIFIED government → checking WEAKER (party loyalty cuts across institutions; framers\' "institutional self-interest" overtaken). DIVIDED government → checking STRONGER but more gridlock (shutdowns, debt-ceiling crises). LOPER BRIGHT 2024 → overruled Chevron 1984 → regulatory interpretation authority FROM executive TO judicial.'
      }
    },
    {
      id: 'govsep4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — System Interactions**`,
      exercise: {
        questions: [
          {
            question: "How does the counter-majoritarian dilemma illustrate the tension between separation of powers and democratic accountability?",
            options: [
              "Life tenure frees judges to protect minority rights, yet it also lets unelected judges overturn laws passed by elected majorities",
              "Judges are elected to fixed terms, so their rulings always reflect the preferences of the current majority",
              "Lifetime appointment makes judges accountable to Congress, which can reverse any decision by majority vote, so no real tension with democracy exists",
              "Judges may strike down only state laws, so the federal branches never face rulings that override elected majorities"
            ],
            correctAnswer: 0,
            explanation: 'Counter-majoritarian dilemma (Bickel 1962): federal judges life tenure (Art III § 1) + not elected → LEAST accountable branch by design. Insulation enables minority-rights protection against majority (Federalist 78: judiciary has "neither force nor will, but merely judgment"). Tension when courts strike majority-passed laws / executive actions. Political-branch tools: (a) confirmation politics (Garland 2016, ACB 2020); (b) Court size (no change since 1869; FDR packing failed 1937); (c) jurisdiction stripping (rare); (d) constitutional amendment (only 4 successful: 11th, 14th, 16th, 26th). Maintain ULTIMATE democratic control with short-term judicial independence.'
          },
          {
            question: "How does the rise of the administrative state challenge the framers' separation-of-powers design?",
            options: [
              "It places rulemaking, enforcement, and adjudication in the same agencies, the kind of concentration Madison warned leads toward tyranny",
              "It transfers all federal authority to the states, and so it removes Congress, the President, and the courts from policymaking",
              "It makes the President subordinate to agency heads, who can veto executive orders and remove the President for cause",
              "It shifts power from the executive to the judiciary, because only judges may write federal regulations under the Administrative Procedure Act of 1946"
            ],
            correctAnswer: 0,
            explanation: 'Administrative state challenges to framers\' design: (1) CONCENTRATES quasi-legislative + quasi-judicial + quasi-executive in single agencies → exactly what Federalist 47 warned ("accumulation of all powers... in the same hands... very definition of tyranny"); (2) SHIFTS authority from elected (Congress) to UNELECTED experts (agencies) → reduces democratic accountability; (3) inter-branch checking harder (CRA 1996 expedited path rarely successful). Doctrinal responses: major-questions doctrine (West Virginia v. EPA 2022), non-delegation revival (Gorsuch + Thomas), Loper Bright 2024 overruled Chevron → restores judicial check.'
          }
        ]
      }
    }
  ]
}
