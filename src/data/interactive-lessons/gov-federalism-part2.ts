export const govFederalismPart2Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {
      id: 'govfed2-intro',
      type: 'text' as const,
      content: `
# 🏛️ Federalism

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Fiscal federalism: grants-in-aid mechanics |
| Mandates and preemption |
| Federal-state cooperation in policy delivery |
| Who prefers which funding tool (EK 1.7.A.5) |

> 🔑 Key idea: The most important modern federalism mechanisms are NOT direct constitutional structure — they are FISCAL: federal money flowing to states with conditions attached. Roughly 30% of state and local government revenue comes from federal grants, making federalism in practice a constant negotiation over money.
      `
    },
    {
      id: 'govfed2-content',
      type: 'text' as const,
      content: `
## Fiscal Federalism — Grants-in-Aid

The federal government distributes hundreds of billions of dollars annually to state and local governments through grants-in-aid:

| Type | Description | Federal control | State autonomy | Examples |
|---|---|---|---|---|
| **Categorical grant** | Federal funds for a SPECIFIC, narrowly-defined purpose with extensive federal regulations on how funds may be spent | High | Low | Title I education funding (low-income schools); Head Start; specific Medicaid components; highway construction with federal specifications |
| **Block grant** | Federal funds for a BROAD purpose with significant state discretion over specific allocation | Medium | Medium-high | Community Development Block Grant (CDBG); Temporary Assistance for Needy Families (TANF, since 1996); Workforce Investment Act |
| **Project grant (competitive)** | Federal funds awarded competitively to states/localities/non-profits submitting specific project proposals | High in selection, medium in execution | Variable | Race to the Top education grants; National Science Foundation research grants; Department of Energy research grants |
| **Formula grant** | Federal funds distributed by statutory formula (population, poverty, road miles, etc.) | Medium | Medium | Federal highway funds; most Medicaid; Title I |
| **Revenue sharing** | General federal funds distributed to states/localities with no specific purpose restriction (largely abolished after 1986; some COVID-era ARPA funds were similar) | Low | Very high | State and Local Fiscal Assistance Act 1972-86; ARPA 2021 (\\$350B) |

## How Federal Money Shapes State Behavior

| Mechanism | How it works | Example |
|---|---|---|
| **Conditions of aid** | Federal money is conditioned on state compliance with federal policy ("strings attached") | Federal highway funds conditioned on 21-year-old drinking age (*South Dakota v. Dole* 1987 upheld the condition); federal education funds conditioned on Title IX gender equity; ACA Medicaid expansion conditioned on coverage of new categories of beneficiaries |
| **Crossover sanctions** | Failure to comply with federal regulations in ONE policy area triggers loss of funding in a DIFFERENT area | Failure to enforce drinking-age law → loss of federal HIGHWAY funds (not education funds) — *South Dakota v. Dole* 1987 |
| **Crosscutting requirements** | Federal regulations applying across all federal-grant programs | Civil Rights Act § 601 (no race discrimination by recipients); Title IX (no sex discrimination); ADA (no disability discrimination); environmental impact statements |
| **Mandates (funded)** | Federal requirements that states implement specific federal policies, with federal funds provided | Medicaid; SNAP; Voting Rights Act compliance |
| **Mandates (UNFUNDED)** | Federal requirements that states implement specific federal policies WITHOUT federal funds | No Child Left Behind testing requirements (partially funded); ADA accessibility for state buildings; Real ID Act state driver\'s license requirements; the Unfunded Mandates Reform Act of 1995 partially limited new federal unfunded mandates above \\$50M |

## Preemption — Federal Law Displacing State Law

| Type | How it works | Example |
|---|---|---|
| **Express preemption** | Federal statute explicitly states that it preempts conflicting state law | Federal Cigarette Labeling Act 1965 (preempted state warning-label requirements); Airline Deregulation Act 1978 (preempted state airline regulation) |
| **Field preemption** | Federal regulation is so comprehensive that no room remains for state regulation | Federal immigration law (most aspects); federal nuclear-safety regulation; federal patent law |
| **Conflict preemption** | Compliance with both federal and state law is impossible OR state law frustrates federal regulatory purpose | Federal labor law preempting state laws that interfere with collective bargaining; federal drug-approval requirements vs. state liability claims |
| **Anti-preemption** | State law is NOT preempted because Congress has not legislated in the field, has expressly preserved state authority, or has enacted only minimum federal standards (states may exceed) | California vehicle-emissions standards stricter than federal; state minimum-wage laws above federal floor |

## Who Prefers Which Funding Tool — EK 1.7.A.5

The CED ranks the four tools that distribute power between national and state governments by how much control each side keeps:

| Tool | Restrictions on states | Who prefers it | How often used |
|---|---|---|---|
| **Revenue sharing** | Almost none | States (most freedom) | LEAST used form of funding today |
| **Block grants** | Minimal — broad purpose | PREFERRED BY THE STATES | Common (TANF, CDBG) |
| **Categorical grants** | Restricted to specific categories of spending | PREFERRED BY THE NATIONAL GOVERNMENT | MOST COMMONLY USED form of funding |
| **Mandates** | Requirements the states must follow, funded or not | National government | Frequent (ADA, Real ID, Clean Air Act standards) |

**How this plays out (EK 1.9.A.1-2):** because power is shared, national policy depends on state cooperation. The National Minimum Drinking Age Act (1984) — a CED illustrative example — did not set a national drinking age directly; it withheld a share of federal highway money from states with a drinking age under 21, and every state complied. Each level is also an ACCESS POINT: groups that lose in Congress can lobby state legislatures, and vice versa.

> 🔑 The federal government's strongest tools for shaping state policy are money (categorical grants and conditions of aid), mandates, and preemption under the Supremacy Clause. States push back by preferring block grants and by using their reserved powers.
      `
    },
    {
      id: 'govfed2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Fiscal Federalism & Preemption** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which best contrasts categorical grants and block grants?',
            options: [
              "Categorical grants fund narrow purposes under detailed federal rules, while block grants fund broad areas such as community development and let states decide how to spend",
              "Categorical grants let states spend on any purpose they choose, while block grants come with detailed federal rules for each program",
              "Categorical grants go only to cities and counties, while block grants go only to states and must be repaid with interest",
              "Categorical grants are awarded by Congress each year, while block grants are permanent and cannot be changed by statute"
            ],
            correctAnswer: 0,
            explanation: 'Categorical vs block grants: CATEGORICAL = specific purpose + extensive federal regulations (high federal control / low state autonomy) — Title I, Head Start, Medicaid components, federal highway construction. BLOCK = broad purpose + state discretion (medium control / medium-high autonomy) — CDBG, TANF (since 1996), WIA. Trend: partial shift to block as devolution.'
          },
          {
            question: "Which best explains why state governments generally prefer block grants while the national government generally prefers categorical grants?",
            options: [
              "Block grants let states set their own priorities, while categorical grants let Washington control how money is spent",
              "Block grants must be repaid to the Treasury with interest, while categorical grants are gifts that states never have to account for",
              "Block grants come with more detailed federal rules, while categorical grants let states spend the money on any purpose they choose",
              "Block grants are the most commonly used form of federal aid, while categorical grants are rarely used by Congress today"
            ],
            correctAnswer: 0,
            explanation: 'EK 1.7.A.5: BLOCK GRANTS carry minimal restrictions and are preferred by the states; CATEGORICAL GRANTS are restricted to specific categories of expenditure, are preferred by the national government, and are the MOST commonly used form of funding. Neither is a loan, and the distractors reverse which grant carries more rules and which is used more.'
          }
        ]
      }
    },
    {
      id: 'govfed2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — fiscal federalism mechanisms**`,
      exercise: {
        questions: [
          {
            prompt: "The 1984 federal law that withheld highway funds from states with a drinking age below 21 (a CED illustrative example): the National Minimum ___ Age Act.",
            answer: 'Drinking',
            acceptableAnswers: ['Drinking', 'drinking'],
            hint: 'Congress used money, not a direct order, to change state alcohol laws.'
          },
          {
            prompt: "The type of federal grant that the national government prefers and that is the most commonly used form of funding: ___ grant.",
            answer: 'categorical',
            acceptableAnswers: ['categorical', 'Categorical', 'categorical grant', 'categorical grants'],
            hint: 'EK 1.7.A.5.iii — restricted to specific categories of expenditures.'
          },
          {
            prompt: "The general term for federal requirements that states implement federal policies WITHOUT federal funding (partially limited by the 1995 Reform Act): ___ mandates.",
            answer: 'unfunded',
            acceptableAnswers: ['unfunded'],
            hint: 'Major examples: No Child Left Behind testing, ADA accessibility for state buildings, Real ID Act.'
          }
        ]
      }
    },
    {
      id: 'govfed2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each grant or mandate type to its definition.**`,
      exercise: {
        dropdowns: [
          {
            label: "Federal funds for a specific, narrowly-defined purpose with extensive federal regulations: ___ grant.",
            options: ['categorical', 'block', 'project', 'formula']
          },
          {
            label: "Federal funds for a broad purpose with significant state discretion over allocation: ___ grant.",
            options: ['categorical', 'block', 'project', 'formula']
          },
          {
            label: "Federal funds with almost no restrictions on their use — the least-used form of funding today: ___.",
            options: ['categorical', 'block', 'revenue sharing', 'formula']
          }
        ],
        correctAnswers: ['categorical', 'block', 'revenue sharing'],
        hint1: 'Specific purpose + extensive regulations = highest federal control.',
        hint2: 'Broad purpose + state discretion = medium control = TANF, CDBG.',
        hint3: 'No strings at all = revenue sharing (1972-86).',
        explanation: 'Grant types: Categorical = specific + regulated (Title I, Head Start, federal highway). Block = broad + state discretion (CDBG, TANF post-1996, WIA). Revenue sharing = almost no restrictions; least used (EK 1.7.A.5.i). Project = competitive (Race to the Top, NSF, DOE). Formula = statutory distribution (highway, Medicaid, Title I).'
      }
    },
    {
      id: 'govfed2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Federalism in Action**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: In 1984 Congress wanted every state to raise its drinking age to 21, but setting a minimum drinking age is a power reserved to the states. Which approach did Congress use in the National Minimum Drinking Age Act?",
            options: [
              "It withheld part of the federal highway money from any state that kept a drinking age under 21",
              "It proposed a constitutional amendment setting a national drinking age",
              "It ordered state police to enforce a new federal criminal statute against underage drinkers",
              "It used the Supremacy Clause to void every state law that allowed people under 21 to drink alcohol"
            ],
            correctAnswer: 0,
            explanation: 'The National Minimum Drinking Age Act (1984) is a CED illustrative example for EK 1.7.A: Congress attached a CONDITION to federal highway money instead of commanding the states, and the Supreme Court upheld the condition in 1987. It shows how national funding (EK 1.7.A.5) shifts the balance of power even over reserved powers. No amendment was proposed, Congress did not create a federal crime for underage drinking, and the Supremacy Clause applies only when a valid federal law conflicts with state law.'
          },
          {
            question: "AP scenario: A state legislature passes a stricter motor-vehicle emissions standard than the federal Clean Air Act standard, citing a state goal of reducing air pollution. A national auto manufacturers\' association argues the state law is preempted. What is the most likely outcome under federalism doctrine?",
            options: [
              "The state law is likely valid, since the Clean Air Act lets California set stricter standards with a federal waiver that other states may then adopt",
              "The state law is likely invalid, since the Clean Air Act occupies the field and preempts any state rule stricter than the federal one",
              "The state law is likely valid, since the Tenth Amendment reserves all environmental regulation to the states and bars Congress from setting emissions standards for vehicles",
              "The state law is likely invalid, since the dormant Commerce Clause forbids states from regulating cars that are made in other states"
            ],
            correctAnswer: 0,
            explanation: 'State stricter emissions VALID = anti-preemption through congressional preservation: federal Clean Air Act expressly authorizes states to adopt stricter standards (CA unique statutory authority since 1966 predates federal CAA, adopted by ~14 other states) → federal FLOOR not field preemption. Congress chose federal-floor approach. Express preemption OR field preemption would have produced different result.'
          }
        ]
      }
    }
  ]
}
