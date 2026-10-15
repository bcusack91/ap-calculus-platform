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
| Anti-commandeering doctrine |

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

## Anti-Commandeering Doctrine

The Supreme Court has held that the federal government may NOT directly conscript state legislatures or state executive officers to enforce federal regulatory programs:

| Case | Year | Holding |
|---|---|---|
| ***New York v. United States*** | 1992 | Federal Low-Level Radioactive Waste Policy Amendments Act\'s "take title" provision (compelling states to take title to radioactive waste they failed to dispose of) violated the 10th Amendment by commandeering state legislative process |
| ***Printz v. United States*** | 1997 | Federal Brady Handgun Violence Prevention Act\'s requirement that state and local law enforcement perform background checks on handgun purchasers commandeered state executive officers in violation of the 10th Amendment |
| ***Murphy v. NCAA*** | 2018 | Federal Professional and Amateur Sports Protection Act of 1992 (prohibiting states from authorizing sports gambling) commandeered state legislatures by directly regulating their lawmaking |

> 🔑 The federal government CAN: (1) regulate the private conduct directly itself (rather than commanding states to do so); (2) condition federal money on state compliance; (3) preempt conflicting state law. The federal government CANNOT: directly command state legislatures to enact specific laws OR state executive officers to enforce specific federal programs.
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
            question: "Which best describes the anti-commandeering doctrine?",
            options: [
              "Congress may not order state legislatures or officers to carry out federal programs, as in Printz v. United States",
              "Congress may not attach any conditions to federal grants, so states can accept the money while ignoring the rules, as in South Dakota v. Dole",
              "Congress may direct state officers to enforce federal laws, since the Supremacy Clause makes them national agents, as in McCulloch v. Maryland",
              "Federal agencies may not regulate private individuals directly, so they must work through the states, as in New York v. United States"
            ],
            correctAnswer: 0,
            explanation: 'Anti-commandeering: federal government may NOT conscript state legislatures or executives to enforce federal programs. New York v. United States (1992, take-title radioactive waste). Printz v. United States (1997, Brady Act background checks). Murphy v. NCAA (2018, sports-gambling ban). Grounded in 10th Amendment + dual sovereignty.'
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
            prompt: "The 1987 Supreme Court case (Rehnquist) UPHOLDING the federal condition that states adopt a 21-year-old drinking age or lose federal HIGHWAY funds: South Dakota v. ___.",
            answer: 'Dole',
            acceptableAnswers: ['Dole', 'dole', 'south dakota v. dole'],
            hint: 'Named for the Secretary of Transportation (Elizabeth Dole) who administered the highway funds.'
          },
          {
            prompt: "The 1997 Supreme Court case (Scalia) STRIKING DOWN the federal Brady Handgun Act requirement that state law enforcement perform background checks (anti-commandeering): Printz v. ___.",
            answer: 'United States',
            acceptableAnswers: ['United States', 'united states', 'us', 'u.s.'],
            hint: '5-4 decision; Scalia majority opinion; landmark anti-commandeering case alongside New York v. United States 1992.'
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
            label: "Federal funds awarded competitively to states/localities/non-profits submitting specific proposals: ___ grant.",
            options: ['categorical', 'block', 'project', 'formula']
          }
        ],
        correctAnswers: ['categorical', 'block', 'project'],
        hint1: 'Specific purpose + extensive regulations = highest federal control.',
        hint2: 'Broad purpose + state discretion = medium control = TANF, CDBG.',
        hint3: 'Competitive selection = Race to the Top, NSF research, DOE research.',
        explanation: 'Grant types: Categorical = specific + regulated (Title I, Head Start, federal highway). Block = broad + state discretion (CDBG, TANF post-1996, WIA). Project = competitive (Race to the Top, NSF, DOE). Formula = statutory distribution (highway, Medicaid, Title I).'
      }
    },
    {
      id: 'govfed2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Federalism in Action**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: Congress enacts a statute requiring state DMVs to share driver-license data with the federal government and to verify federal immigration status before issuing licenses. State officials refuse, citing the 10th Amendment. Which Supreme Court precedent most directly controls?",
            options: [
              "Printz v. United States, because the federal government cannot command state officers to administer a federal regulatory program",
              "South Dakota v. Dole, because Congress can require state compliance by threatening to withhold all federal highway funding from noncompliant states",
              "McCulloch v. Maryland, because the Supremacy Clause lets the national government direct state agencies and officers whenever a federal law requires it",
              "United States v. Lopez, because issuing driver's licenses is not an economic activity that Congress may regulate"
            ],
            correctAnswer: 0,
            explanation: 'Printz v. United States (1997) controls: struck Brady Act state background-check requirement → federal government may NOT commandeer state executives ("may neither issue directives requiring States to address particular problems, nor command States\' officers to administer federal regulatory program"). DMV/immigration scenario = paradigm forbidden executive commandeering. Federal alternatives: (a) condition federal funds (Dole 1987) OR (b) regulate private conduct directly through federal officers.'
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
