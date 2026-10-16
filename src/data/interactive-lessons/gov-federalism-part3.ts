export const govFederalismPart3Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {
      id: 'govfed3-intro',
      type: 'text' as const,
      content: `
# 🏛️ Federalism

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Dual federalism (1789–1937) |
| Cooperative federalism (1937–1969) |
| New federalism (1969–present) |
| Coercive federalism and contemporary patterns |

> 🔑 Key idea: U.S. federalism has cycled through identifiable historical eras, each defined by a different conception of federal-state relations and characterized by different constitutional doctrines, fiscal arrangements, and policy patterns.
      `
    },
    {
      id: 'govfed3-content',
      type: 'text' as const,
      content: `
## Era 1: Dual Federalism (1789-1937) — "Layer Cake"

The classical model: federal and state governments operate in distinct, mostly non-overlapping spheres, with each sovereign in its own domain.

| Feature | Description |
|---|---|
| **Metaphor** | "Layer cake" — two distinct, separate layers of authority |
| **Federal sphere** | Foreign policy, war, interstate commerce (narrowly construed), tariffs, post offices, naturalization, currency |
| **State sphere** | Police power (general regulation), criminal law, family law, education, intrastate commerce, property law |
| **Doctrine** | Strict separation; 10th Amendment as substantive limit on federal authority |
| **Key cases** | *Hammer v. Dagenhart* (1918) struck down federal child-labor regulation as exceeding commerce power; *Schechter Poultry v. United States* (1935) struck down NIRA codes |
| **End** | "Switch in time that saved nine" 1937 — *West Coast Hotel v. Parrish* upheld state minimum wage; *NLRB v. Jones & Laughlin Steel* upheld federal labor regulation under expanded commerce clause |

## Era 2: Cooperative Federalism (1937-1969) — "Marble Cake"

Federal and state governments share authority and resources to address common problems.

| Feature | Description |
|---|---|
| **Metaphor** | "Marble cake" (Morton Grodzins) — federal and state authority are intermingled, not separable |
| **Driver** | Great Depression + New Deal + WWII + postwar Great Society |
| **Constitutional shift** | Expanded Commerce Clause (*Wickard v. Filburn* 1942 — wheat grown for personal consumption affected interstate commerce); spending-clause federalism |
| **Major programs** | Social Security (1935); Federal Highway Act (1956 — \\$25B for interstate highway system, federal-state cost-sharing); War on Poverty (1964); Medicare/Medicaid (1965); Elementary and Secondary Education Act (1965); Voting Rights Act (1965); Higher Education Act (1965) |
| **Funding mechanism** | Categorical grants with extensive federal regulations; matching grants requiring state contributions |
| **Hallmark** | Federal money + federal regulations + state implementation |

## Era 3: New Federalism (1969-present) — Devolution

Conscious effort to return authority and discretion from federal to state governments.

| Phase | Years | Lead | Key features |
|---|---|---|---|
| **Nixon "New Federalism"** | 1969-77 | Richard Nixon | General Revenue Sharing (1972, abolished 1986); first major block grants (Comprehensive Employment and Training Act 1973) |
| **Reagan New Federalism** | 1981-89 | Ronald Reagan | Consolidated 77 categorical grants into 9 block grants (Omnibus Budget Reconciliation Act 1981); cuts to federal aid; "swap" proposal (federal takes welfare, state takes education) — never enacted |
| **1994-96 devolution** | 1994-96 | Republican Congress + Clinton | Personal Responsibility and Work Opportunity Reconciliation Act 1996 — TANF block grant replaced AFDC; Unfunded Mandates Reform Act 1995 |
| **Modern federalism revival** | 1995-present | Rehnquist + Roberts Courts | Renewed judicial limits on federal power: *Lopez* 1995 (required), *Morrison* 2000 (CED illustrative), *NFIB v. Sebelius* 2012 |

## Era 4: Coercive Federalism and Contemporary Patterns (1990s-present)

Modern federalism is characterized by simultaneous trends in opposite directions:

| Trend | Direction | Examples |
|---|---|---|
| **Federal expansion via spending power** | Federal → states | ACA Medicaid expansion (initially mandatory, made optional by *NFIB v. Sebelius* 2012); No Child Left Behind 2001; Every Student Succeeds Act 2015 |
| **Federal preemption of state regulation** | Federal → states | Banking deregulation; airline deregulation; some state environmental authority preempted |
| **Devolution to states** | States ↑ | TANF 1996; Medicaid waivers; state experimentation in marijuana legalization, same-sex marriage (pre-2015), abortion regulation (post-2022 Dobbs) |
| **Modern revival of state authority** | States ↑ | Rehnquist Court Lopez 1995 + Morrison 2000 limited Commerce Clause; Roberts Court NFIB 2012 limited Spending Clause coercion |
| **National preemption via federal policy** | Federal ↑ | Federal civil rights law (CRA 1964 + ADA 1990); federal environmental law; federal financial regulation |

## Key Federalism Cases — Summary Table

Only *McCulloch* and *Lopez* are required cases; the others show how Supreme Court interpretations shifted the balance over time (EK 1.8.A.2-3). If the exam uses a non-required case, it supplies the facts and holding.

| Case | Year | Direction | Holding | Status |
|---|---|---|---|---|
| *McCulloch v. Maryland* | 1819 | Federal ↑ | Implied federal powers + supremacy | REQUIRED |
| *Gibbons v. Ogden* | 1824 | Federal ↑ | Broad commerce-clause federal authority | Context |
| *Wickard v. Filburn* | 1942 | Federal ↑ | Maximum commerce-clause expansion | Context |
| *Heart of Atlanta Motel v. United States* | 1964 | Federal ↑ | Civil Rights Act 1964 valid under commerce clause | Context |
| *South Dakota v. Dole* | 1987 | Federal ↑ | Federal spending conditions on state action upheld (National Minimum Drinking Age Act) | Context for a CED illustrative example |
| *United States v. Lopez* | 1995 | States ↑ | First commerce-clause limit since 1937 | REQUIRED |
| *United States v. Morrison* | 2000 | States ↑ | Violence Against Women Act civil-suit provision exceeds commerce power | CED illustrative example |
| *Gonzales v. Raich* | 2005 | Federal ↑ | Federal Controlled Substances Act applies to home-grown medical marijuana | Context |
| *NFIB v. Sebelius* | 2012 | Mixed | ACA individual mandate valid as tax; Medicaid expansion coercive | Context |
      `
    },
    {
      id: 'govfed3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Federalism Eras** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best contrasts dual federalism and cooperative federalism?",
            options: [
              "Dual federalism kept national and state powers in separate spheres like a layer cake, while cooperative federalism blends them through shared programs and grants like a marble cake",
              "Dual federalism let states nullify federal laws, while cooperative federalism requires states to approve each federal law before it takes effect",
              "Dual federalism gave Congress authority over all commerce, while cooperative federalism returned commerce regulation to the states after 1937",
              "Dual federalism describes the period after the New Deal, while cooperative federalism describes the period before the Civil War"
                       ],
            correctAnswer: 0,
            explanation: 'Dual vs cooperative federalism: DUAL (1789-1937, "layer cake") = distinct non-overlapping spheres + 10th Amendment substantive limit (Hammer v. Dagenhart 1918 struck child-labor, Schechter Poultry 1935 struck NIRA). COOPERATIVE (1937-1969, Grodzins\' "marble cake") = intermingled federal $ + federal regulations + state implementation; driven by Depression/New Deal/Great Society + expanded Commerce Clause (Wickard v. Filburn 1942 wheat for personal consumption).'
          },
          {
            question: "Which best describes the modern federalism revival (1995-present)?",
            options: [
              "Since Lopez in 1995, the Court has again set limits on federal power, striking laws that exceeded the commerce power",
              "In the decades after 1995, the Court has expanded the commerce power further, upholding every federal statute challenged on Tenth Amendment grounds",
              "Since Wickard in 1942, the Court has refused to review federalism disputes, treating the balance of power as a political question for Congress alone",
              "Since Brown in 1954, the Court has returned civil rights enforcement to the states, overruling the incorporation cases decided by the Warren Court"
            ],
            correctAnswer: 0,
            explanation: 'Modern federalism revival (1995-present): Rehnquist + Roberts Courts reversed monotonic post-1937 expansion. Lopez 1995 (required case; 1st Commerce Clause limit since 1937 — Gun-Free School Zones Act). Morrison 2000 (CED illustrative; VAWA civil suit exceeds commerce). NFIB 2012 (ACA Medicaid coercion). Most significant federalism revival since 1937 (EK 1.8.A.2).'
          }
        ]
      }
    },
    {
      id: 'govfed3-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — federalism eras**`,
      exercise: {
        questions: [
          {
            prompt: "The 1980s push to return power and program control from the national government to the states (a CED illustrative example): the ___ revolution.",
            answer: 'devolution',
            acceptableAnswers: ['devolution', 'Devolution'],
            hint: 'Reagan-era block grants consolidated dozens of categorical grants.'
          },
          {
            prompt: "The 1995 Supreme Court case (Rehnquist 5-4) that was the FIRST Commerce Clause limit on Congress since 1937: United States v. ___.",
            answer: 'Lopez',
            acceptableAnswers: ['Lopez', 'lopez', 'united states v. lopez'],
            hint: 'Struck the Gun-Free School Zones Act of 1990 — possessing a gun in a school zone was not "commerce."'
          },
          {
            prompt: "The Article I clause whose reach the Court limited in United States v. Lopez (1995): the ___ Clause.",
            answer: 'Commerce',
            acceptableAnswers: ['Commerce', 'commerce', 'commerce clause', 'interstate commerce'],
            hint: 'EK 1.8.A.2 — Congress regulates interstate ___.'
          }
        ]
      }
    },
    {
      id: 'govfed3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each era to its dominant federalism metaphor.**`,
      exercise: {
        dropdowns: [
          {
            label: "1789-1937: federal and state governments operate in distinct, mostly non-overlapping spheres — ___ federalism.",
            options: ['dual ("layer cake")', 'cooperative ("marble cake")', 'new (devolution)', 'coercive']
          },
          {
            label: "1937-1969: federal and state authority intermingled; federal money + federal regulations + state implementation — ___ federalism.",
            options: ['dual ("layer cake")', 'cooperative ("marble cake")', 'new (devolution)', 'coercive']
          },
          {
            label: "1969-present: conscious effort to return authority and discretion from federal to state governments — ___ federalism.",
            options: ['dual ("layer cake")', 'cooperative ("marble cake")', 'new (devolution)', 'coercive']
          }
        ],
        correctAnswers: ['dual ("layer cake")', 'cooperative ("marble cake")', 'new (devolution)'],
        hint1: 'Two distinct layers = strict separation; pre-New Deal.',
        hint2: 'Marble cake = Grodzins; New Deal + Great Society.',
        hint3: 'Devolution = Nixon GRS 1972, Reagan block grants 1981, TANF 1996.',
        explanation: 'Federalism eras: Dual ("layer cake," 1789-1937) = distinct spheres. Cooperative ("marble cake," 1937-1969) = intermingled. New (devolution, 1969-present) = federal-to-state return. Coercive (1990s-present, modern overlay) = federal preemption + spending-clause coercion + simultaneous trends in opposite directions.'
      }
    },
    {
      id: 'govfed3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Federalism Eras**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: Congress enacts a statute making it a federal crime to possess any firearm within 1,000 feet of a public school, citing the Commerce Clause. Which Supreme Court precedent most directly controls?",
            options: [
              "United States v. Lopez, which held that possessing a gun near a school is not economic activity that substantially affects interstate commerce",
              "McDonald v. Chicago, which held that the Second Amendment bars any federal regulation of firearms near schools",
              "Gonzales v. Raich, which held that Congress may regulate local possession of any good that has some effect on commerce",
              "McCulloch v. Maryland, which held that the Necessary and Proper Clause lets Congress pass any criminal law that it considers useful for regulating interstate commerce"
            ],
            correctAnswer: 0,
            explanation: 'Lopez (1995) directly controls: Gun-Free School Zones Act of 1990 = virtually identical statute. Rehnquist 5-4: gun possession in school zone NOT "commerce" (not economic), no substantial effect on interstate commerce, within state police-power domain. First Commerce Clause limit since 1937. Constitutional alternatives: Spending Clause (condition education funds) or tie to firearms moved in interstate commerce.'
          },
          {
            question: "AP scenario: A state legalizes recreational marijuana for adult use, as Colorado and Washington did in 2012. The federal Controlled Substances Act still prohibits marijuana, and a state-licensed grower is prosecuted under federal law. Which constitutional provision most directly allows the federal prosecution to proceed?",
            options: [
              "The Supremacy Clause, because a valid federal law takes precedence over a conflicting state law",
              "The Tenth Amendment, because drug policy is a reserved power that the federal government may enforce only with state consent",
              "The Full Faith and Credit Clause, because every state must honor the drug laws of the other states",
              "The Necessary and Proper Clause, because it lets states carry out federal laws in whatever way they choose"
            ],
            correctAnswer: 0,
            explanation: 'EK 1.8.A.4: the SUPREMACY CLAUSE gives national law general precedence over state law, so the federal ban still applies to the grower even though the state has legalized marijuana (the Court upheld federal reach over home-grown marijuana in 2005). State legalization in Colorado and Washington is a CED illustrative example of federalism tension: in practice, enforcement depends on federal priorities, which is why legal state markets operate. The Tenth Amendment does not let states nullify a valid federal law; Full Faith and Credit concerns public acts and records, not criminal enforcement.'
          }
        ]
      }
    }
  ]
}
