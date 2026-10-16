export const govBureaucracyPart4Data = {
  topicSlug: 'gov-bureaucracy',
  sections: [
    {
      id: 'govburea4-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Federal Bureaucracy

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Bureaucracy × Congress |
| Bureaucracy × President |
| Bureaucracy × Courts |
| Bureaucracy × Interest groups + media |
| Bureaucracy × Federalism |

> 🔑 Key idea: The federal bureaucracy SITS AT THE CENTER of multiple cross-branch interactions. Congress CREATES + FUNDS + OVERSEES agencies; President APPOINTS + DIRECTS via OMB + executive orders; Courts REVIEW agency action when affected parties sue; Interest groups + media engage through IRON TRIANGLES + ISSUE NETWORKS; State/local governments execute many federal programs through GRANT-IN-AID arrangements.
      `
    },
    {
      id: 'govburea4-content',
      type: 'text' as const,
      content: `
## Bureaucracy × Congress

Congress's relationships with agencies:

| Tool | Description |
|---|---|
| **CREATION + STATUTORY DESIGN** | Congress creates agencies via statute, specifies authority, structure, procedures (APA 1946 baseline) |
| **APPROPRIATIONS** | Annual + supplemental funding; 'POWER OF THE PURSE'; can DEFUND or CUT specific programs; CONTINUING RESOLUTIONS when deadlines missed |
| **AUTHORIZATION** | Some programs require periodic reauthorization (e.g., FAA Reauthorization Act every ~5 yrs; PEPFAR every ~5 yrs; FISA Section 702 surveillance authority) |
| **OVERSIGHT HEARINGS** | Committees hold hearings to investigate agency conduct; ~3,000+ congressional hearings/year |
| **GAO INVESTIGATIONS** | Government Accountability Office investigates spending + program effectiveness for Congress |
| **CASEWORK** | Members + staff intervene with agencies for individual constituents (e.g., immigration cases, VA benefits, Social Security disability) |
| **CONFIRMATION** | Senate confirms ~1,200 PAS (Presidential Appointed/Senate Confirmed) positions |
| **SUBPOENAS + CONTEMPT** | Congress can subpoena agency officials + documents; contempt for non-compliance |
| **STATUTORY OVERRIDE** | Pass new law to overrule agency action or court interpretation (e.g., Lilly Ledbetter Fair Pay Act 2009 overruled *Ledbetter v. Goodyear*) |

## Bureaucracy × President

| Tool | Description |
|---|---|
| **APPOINTMENT + REMOVAL** | President nominates ~1,200 PAS positions; appoints another ~3,000-4,000 political officials; can remove most political appointees AT WILL |
| **EXECUTIVE ORDERS + MEMORANDA** | Direct agencies on policy (within statutory limits); president can REVERSE prior EOs (Biden Day 1 = 17 EOs reversing Trump policies; Trump Day 1 2025 = 26+ EOs reversing Biden) |
| **OMB CONTROL** | Office of Management and Budget (part of the Executive Office of the President) reviews agency budget requests + major regulations so they match the president's agenda |
| **AGENDA SETTING** | President prioritizes administration goals + signals to agencies through speeches, memoranda, executive actions |
| **REORGANIZATION** | Limited authority to reorganize (Reorganization Act expired 1984); Trump Executive Reorganization (2017-2020) reduced regulations + restructured |
| **PARDON POWER** | Can pardon individuals subject to agency criminal referrals (e.g., Trump pardons of immigration officials) |
| **EXECUTIVE PRIVILEGE** | Can shield communications + advice from disclosure (US v. Nixon 1974 qualified) |

## Bureaucracy × Courts

| Tool | Description |
|---|---|
| **LAWSUITS OVER STATUTORY AUTHORITY** | Affected parties may sue, arguing an agency rule goes beyond what Congress authorized; courts can set the rule aside |
| **CONSTITUTIONAL CHALLENGES** | Suits challenge agency action under 1st Am, 4th Am, 5th Am, due process, etc.; e.g., suits against Trump immigration orders |
| **VACATUR + REMAND** | Court can VACATE agency action (set aside) + REMAND to agency for further proceedings |
| **NATIONWIDE INJUNCTIONS** | Single district court can enjoin agency action nationwide (controversial; growing use 2017+; *Trump v. CASA* 2025 limited) |

## Bureaucracy × Interest Groups + Media

| Channel | Description |
|---|---|
| **NOTICE-AND-COMMENT** | Interest groups + regulated parties submit comments on proposed rules; major rules generate hundreds of thousands of comments |
| **REVOLVING DOOR** | Movement of personnel between agencies, congressional staff, lobbying firms, regulated industries; concerns about regulatory capture |
| **IRON TRIANGLES** | Stable 3-way alliances: congressional committee + executive agency + interest group (e.g., defense contractors + Armed Services + DoD) |
| **ISSUE NETWORKS** | Looser webs of think tanks, experts, media, agencies, committees, interest groups (Hugh Heclo 1978) |
| **REGULATORY CAPTURE** | Phenomenon where regulated industry effectively controls regulatory agency; Stigler (1971) classic theory |
| **MEDIA SCRUTINY** | Investigative journalism on agency misconduct (e.g., VA wait times scandal 2014 Phoenix VA, EPA Pruitt scandals 2018) |

## Bureaucracy × Federalism

The federal bureaucracy implements MANY federal programs through state + local government:

| Mechanism | Description |
|---|---|
| **CATEGORICAL GRANTS** | Federal funds for specific purposes with strict requirements (e.g., Medicaid, federal-aid highways, Title I education) |
| **BLOCK GRANTS** | Broader purposes with state flexibility (e.g., TANF welfare 1996, Community Development Block Grants) |
| **MANDATES** | Required state action, often UNFUNDED (e.g., REAL ID Act 2005 ID-card standards; Americans with Disabilities Act accessibility requirements); the minimum drinking age is NOT a mandate but a grant condition (see crossover sanctions) |
| **CROSSOVER SANCTIONS** | Withhold funds in one program to enforce compliance in another (e.g., highway funds tied to drinking age via *South Dakota v. Dole* 1987) |
| **PREEMPTION** | Federal statutes/regulations override state law under Supremacy Clause (e.g., FAA airline regulation, federal immigration enforcement, federal banking regulation) |
| **COOPERATIVE FEDERALISM** | Federal-state collaboration in many policy areas (Medicaid, environmental SIPs under Clean Air Act, Workforce Investment Boards, etc.) |
| **STATE IMPLEMENTATION OF FEDERAL LAW** | Many federal programs administered by state agencies (e.g., state OSHA-equivalents, state environmental agencies for Clean Water Act permits) |
| **INTERGOVERNMENTAL LOBBYING** | National Governors Association, US Conference of Mayors, NACo (National Association of Counties) lobby federal agencies |

> 🔑 Key takeaway: Bureaucracy = nexus of cross-branch interactions — Congress (creation + appropriations + oversight hearings + confirmation), President (appointments + EOs + OMB + reorganization), Courts (lawsuits over statutory authority + constitutional challenges), interest groups + media (notice-and-comment + revolving door + iron triangles + issue networks + capture), federalism (categorical/block grants + mandates + crossover sanctions + preemption + cooperative federalism + state implementation).
      `
    },
    {
      id: 'govburea4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes how Congress oversees the federal bureaucracy?",
            options: [
              "Congress uses appropriations, reauthorizations, oversight hearings and Senate confirmation to monitor and shape agencies",
              "Congress uses executive orders, pardons, signing statements and recess appointments to monitor and shape agencies",
              "Congress uses judicial review, injunctions, and advisory opinions to strike down agency rules it dislikes",
              "Congress relies on the President to oversee agencies, holding hearings only during impeachment proceedings"
            ],
            correctAnswer: 0,
            explanation: 'Congressional oversight tools: (1) APPROPRIATIONS — annual + supplemental funding via 12 bills; "power of the purse"; (2) AUTHORIZATION — periodic reauthorization (FAA ~5yr); (3) OVERSIGHT HEARINGS — ~3,000+/yr; (4) GAO investigations; (5) CASEWORK; (6) CONFIRMATION — ~1,200 PAS; (7) SUBPOENAS + CONTEMPT; (8) STATUTORY OVERRIDE. Executive orders, pardons and signing statements are presidential tools; judicial review belongs to the courts.'
          },
          {
            question: "Which best describes the IRON TRIANGLE concept and its modern variant ISSUE NETWORKS?",
            options: [
              "An iron triangle ties a committee to an agency and an interest group, while issue networks are looser and wider",
              "An iron triangle ties the President to Congress and the courts, while issue networks are formal treaties among the states",
              "An iron triangle ties three Cabinet departments together, while issue networks are the websites agencies use to post rules",
              "An iron triangle ties voters to parties and candidates, while issue networks are cable news shows covering policy debates"
            ],
            correctAnswer: 0,
            explanation: 'IRON TRIANGLE = stable 3-WAY ALLIANCE: (1) congressional committee/subcommittee; (2) executive agency; (3) interest group. Classic: DEFENSE CONTRACTORS + ARMED SERVICES + DOD — contractors lobby for spending, committee approves, DoD distributes contracts; revolving door. ISSUE NETWORK (Hugh Heclo 1978) = LOOSER, MORE FLUID web — think tanks, experts, media, agencies, committees, interest groups; supplanting iron triangle as more accurate model. ENVIRONMENT example — AEI vs. Brookings vs. CAP; Sierra Club vs. API; EPA + DOI + USDA + FERC + NRC; multiple committees; experts. Iron triangles entrench status quo; issue networks introduce new ideas/actors.'
          }
        ]
      }
    },
    {
      id: 'govburea4-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Congress's ability to check the bureaucracy by appropriating or withholding funds is called the power of the ___.",
            answer: 'purse',
            acceptableAnswers: ['purse', 'power of the purse', 'the purse'],
            hint: 'EK 2.14.A.1 — the money tool.'
          },
          {
            prompt: "Term for a temporary coalition of groups, experts, and officials that forms to promote a common issue or agenda.",
            answer: 'issue network',
            acceptableAnswers: ['issue network', 'issue networks', 'an issue network'],
            hint: 'Looser and more fluid than an iron triangle.'
          },
          {
            prompt: "Term for checking that agencies use funds properly and follow regulations, which can complicate policy implementation (two words).",
            answer: 'compliance monitoring',
            acceptableAnswers: ['compliance monitoring', 'compliance-monitoring', 'monitoring compliance'],
            hint: 'EK 2.14.B.2.'
          }
        ]
      }
    },
    {
      id: 'govburea4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each oversight mechanism to the branch of government that exercises it.**`,
      exercise: {
        dropdowns: [
          {
            label: "Annual appropriations + oversight hearings + GAO investigations + Senate confirmation of agency heads: ___",
            options: ['Congress', 'President', 'Courts', 'Interest groups']
          },
          {
            label: "Appointments + executive orders + OMB budget review + reorganization authority: ___",
            options: ['Congress', 'President', 'Courts', 'Interest groups']
          },
          {
            label: "Rulings that an agency rule exceeds its statute or violates the Constitution: ___",
            options: ['Congress', 'President', 'Courts', 'Interest groups']
          }
        ],
        correctAnswers: ['Congress', 'President', 'Courts'],
        hint1: 'Congress = create + fund + oversee; appropriations + GAO + hearings + subpoenas + statutory override.',
        hint2: 'President = appoint + direct + restructure; nominations + EOs + OMB + reorganization.',
        hint3: 'Courts = review + interpret; they act only when someone sues over an agency action.'
      }
    },
    {
      id: 'govburea4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "AP comprehensive prompt: Why has the federal bureaucracy been described as creating a 'FOURTH BRANCH' of government, and what makes this characterization controversial?",
            options: [
              "Agencies combine legislative, executive and judicial functions that the Constitution assigns to separate branches",
              "Agencies are named as a fourth branch in Article IV, which gives them powers equal to Congress",
              "Agencies elect their own leaders and answer to no branch, so critics say they operate entirely outside the constitutional system",
              "Agencies have only advisory powers, so the label is controversial because they never make binding rules"
            ],
            correctAnswer: 0,
            explanation: 'FOURTH BRANCH = bureaucracy combines LEGISLATIVE-LIKE (rulemaking via APA), EXECUTIVE-LIKE (enforcement), JUDICIAL-LIKE (adjudication via ALJs) — combining formally separated powers (Articles I + II + III). CONCERNS: (1) SEPARATION OF POWERS — one agency writes, enforces, and judges its own rules; (2) DEMOCRATIC LEGITIMACY — unelected, long-tenured officials make policy; (3) ACCOUNTABILITY — which is why Congress (oversight, purse), the president (appointments, EOs), and courts (lawsuits) all check agencies (EK 2.15.A.1). Article IV does not mention agencies.'
          },
          {
            question: "How does the COOPERATIVE FEDERALISM model describe the relationship between the federal bureaucracy and state governments?",
            options: [
              "Federal agencies set standards and provide money, while state agencies run programs like Medicaid and highway building",
              "State agencies set national standards and fund federal programs, while federal agencies just collect the data",
              "Federal and state agencies operate in fully separate spheres, with no shared programs or funding, as in dual federalism",
              "Washington takes over state programs entirely, while states lose all control of Medicaid and highway building"
            ],
            correctAnswer: 0,
            explanation: 'COOPERATIVE FEDERALISM (dominant since New Deal) = EXTENSIVE FEDERAL-STATE COLLABORATION; federal agencies set standards + provide funds; states administer programs. EXAMPLES: (1) MEDICAID — federal CMS sets standards; states administer + share costs (~50-78% federal match); (2) CLEAN AIR ACT — EPA sets NAAQS; states submit SIPs + issue permits; (3) EDUCATION — Title I + IDEA; states + districts deliver; (4) HIGHWAYS — Federal Highway Trust Fund (gas tax); states design + build + maintain; (5) WORKFORCE INVESTMENT BOARDS; (6) UI — federal-state partnership. Enables uniformity + local implementation; LEVERAGE via grant-in-aid (South Dakota v. Dole 1987 — drinking age).'
          }
        ]
      }
    }
  ]
}
