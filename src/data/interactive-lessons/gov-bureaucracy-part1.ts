export const govBureaucracyPart1Data = {
  topicSlug: 'gov-bureaucracy',
  sections: [
    {
      id: 'govburea1-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Federal Bureaucracy

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| What is the federal bureaucracy? |
| Constitutional foundations + congressional creation |
| Four major types of federal agencies |
| Civil service vs. political appointees |
| Iron triangles + issue networks |

> 🔑 Key idea: The FEDERAL BUREAUCRACY is the network of departments, agencies, commissions, and government corporations that implement federal law. Although the Constitution doesn't expressly create most agencies, Congress establishes them via STATUTE. The bureaucracy combines POLITICAL APPOINTEES (loyal to the president) with CIVIL SERVANTS (Pendleton Act 1883 → merit-based; ~2.1M federal civilian employees). Discretion in implementation gives the bureaucracy significant POLICY-MAKING POWER.
      `
    },
    {
      id: 'govburea1-content',
      type: 'text' as const,
      content: `
## What Is the Federal Bureaucracy?

The federal bureaucracy = the entire EXECUTIVE BRANCH workforce that IMPLEMENTS federal laws. Unlike Congress (legislates) or courts (adjudicates), the bureaucracy EXECUTES — through rulemaking, enforcement, service delivery, and adjudication.

| Feature | Detail |
|---|---|
| **Size** | ~2.1 million civilian federal employees + ~1.3 million active-duty military |
| **Spending** | Federal civilian discretionary spending ~\\$1.7 trillion/year |
| **Constitutional basis** | Art II § 2 cl. 1 ('principal Officer in each of the executive Departments'); Art II § 2 cl. 2 ('Officers of the United States') |
| **Statutory basis** | Each department + agency created by ACT OF CONGRESS |

## Constitutional Foundations + Congressional Creation

The Constitution mentions executive departments only briefly:
- **Art II § 2 cl. 1** — president may require the Opinion of the principal Officer in each of the executive Departments
- **Art II § 2 cl. 2** — Appointments Clause: president nominates, Senate confirms 'Officers of the United States'; Congress may vest appointment of inferior officers in president alone, courts, or department heads

CONGRESS CREATES AGENCIES via statute, specifying:
1. AUTHORITY (jurisdiction, powers)
2. STRUCTURE (single administrator vs. multi-member commission)
3. FUNDING (annual appropriations + sometimes user fees)
4. PROCEDURES (Administrative Procedure Act 1946 sets baseline)

## Four Major Types of Federal Agencies

| Type | Description | Examples |
|---|---|---|
| **CABINET DEPARTMENTS** (15) | Major executive departments headed by SECRETARIES who serve in president's Cabinet; broad jurisdiction | State, Treasury, Defense, Justice, Interior, Agriculture, Commerce, Labor, HHS, HUD, Transportation, Energy, Education, Veterans Affairs, Homeland Security |
| **INDEPENDENT EXECUTIVE AGENCIES** | Single-administrator agencies OUTSIDE Cabinet but still under presidential control; head serves at president's pleasure | EPA (1970), NASA (1958), CIA (1947), GSA, OPM, SSA |
| **INDEPENDENT REGULATORY COMMISSIONS** | MULTI-MEMBER (usually 5-7) bipartisan boards with FIXED TERMS; presidents can only remove for CAUSE — relative independence from president | Federal Reserve (1913), SEC (1934), FCC (1934), NLRB (1935), FTC (1914), NRC (1974), CPSC (1972) |
| **GOVERNMENT CORPORATIONS** | Operate like businesses; charge for services; financial autonomy | USPS (1971), Amtrak (1971), TVA (1933), FDIC (1933) |

## Civil Service vs. Political Appointees

| Category | Description | Approximate # | Hiring/firing |
|---|---|---|---|
| **POLITICAL APPOINTEES** | Cabinet secretaries, deputy secretaries, agency heads, ambassadors, U.S. attorneys | ~4,000 (~1,200 require Senate confirmation) | President nominates + Senate confirms (PAS); president can fire at will |
| **SCHEDULE C** | Confidential or policy-determining positions | ~1,400 | Excepted from competitive service; serve at pleasure |
| **SENIOR EXECUTIVE SERVICE (SES)** | Top career managers + some political | ~7,000 | Civil Service Reform Act 1978; merit-based |
| **CIVIL SERVICE (COMPETITIVE)** | Career federal workers | ~2.1 million | Merit-based via OPM; protected from political dismissal |

**HISTORICAL EVOLUTION**:
- **SPOILS SYSTEM (Andrew Jackson 1829-1883)** — winning party gives jobs to supporters
- **GARFIELD ASSASSINATION 1881** — disgruntled office-seeker Charles Guiteau shot Garfield
- **PENDLETON ACT 1883** — created MERIT-BASED civil service; ~10% initially, expanded to ~90% today
- **HATCH ACT 1939** — limits political activities of federal workers
- **CIVIL SERVICE REFORM ACT 1978** — created OPM (Office of Personnel Management) + MSPB (Merit Systems Protection Board) + SES; replaced 1883-era Civil Service Commission

## Iron Triangles + Issue Networks

| Concept | Description |
|---|---|
| **IRON TRIANGLE** | Stable 3-way alliance of (1) congressional committee/subcommittee, (2) executive agency, (3) interest group — coordinated to mutual benefit; classic example: defense contractors + Armed Services Committee + DoD |
| **ISSUE NETWORK** | Looser, more fluid web of multiple actors (think tanks, experts, media, agencies, committees, interest groups) competing on a policy area; modern characterization (Hugh Heclo 1978) supplanting iron triangle as more accurate model |
| **REVOLVING DOOR** | Movement of personnel between agencies, congressional staffs, lobbying firms, and regulated industries — concern about regulatory capture |

> 🔑 Key takeaway: Bureaucracy = ~2.1M civil servants + ~4,000 political appointees implementing federal law; created by Congress via statute (Constitution silent on most); 4 types — Cabinet (15), independent executive, independent regulatory commissions (multi-member, for-cause removal), and government corporations; PENDLETON ACT 1883 + HATCH ACT 1939 + CSRA 1978 govern civil service; iron triangles + issue networks shape policy.
      `
    },
    {
      id: 'govburea1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Bureaucracy Foundations** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the constitutional foundation of the federal bureaucracy?",
            options: [
              "Article II only briefly mentions executive departments and appointments, leaving Congress to create agencies by statute",
              "Article I lists each Cabinet department by name, so Congress cannot add or abolish agencies without an amendment",
              "Article III places agencies under the courts, so judges appoint the heads of the executive departments",
              "The Constitution never mentions departments, so agencies rest solely on the President's inherent power"
            ],
            correctAnswer: 0,
            explanation: 'Constitution mentions executive departments BRIEFLY: Art II § 2 cl. 1 ("principal Officer in each of the executive Departments") + § 2 cl. 2 Appointments Clause (president nominates + Senate confirms "Officers of the United States"; Congress may vest inferior officer appointment elsewhere). Constitution does NOT specify which departments exist or their powers. CONGRESS CREATES AGENCIES VIA STATUTE — authority, structure, funding, procedures (APA 1946 baseline). HYBRID — constitutional supervision (appointment + confirmation) + statutory creation (congressional design).'
          },
          {
            question: "What distinguishes INDEPENDENT REGULATORY COMMISSIONS from other federal agency types?",
            options: [
              "They are bipartisan boards with fixed staggered terms whose members can be removed only for cause",
              "They are Cabinet departments led by one secretary who serves at the President's pleasure and can be fired at will",
              "They are government corporations that sell services like mail delivery and cover most of their costs through fees",
              "They are White House offices inside the Executive Office of the President whose staff need no Senate confirmation"
            ],
            correctAnswer: 0,
            explanation: 'INDEPENDENT REGULATORY COMMISSIONS (Fed 1913, SEC 1934, FCC 1934, NLRB 1935, FTC 1914, NRC 1974, CPSC 1972): (1) MULTI-MEMBER 5-7 commissioners; (2) BIPARTISAN — bare majority limit; (3) FIXED STAGGERED TERMS (Fed 14yr, most 5-7yr); (4) FOR-CAUSE REMOVAL — the president generally cannot fire commissioners over policy disagreements; (5) INSULATION from political pressure for technical regulation.'
          }
        ]
      }
    },
    {
      id: 'govburea1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — civil service + bureaucracy terms**`,
      exercise: {
        questions: [
          {
            prompt: "Year the PENDLETON ACT created the merit-based civil service.",
            answer: '1883',
            acceptableAnswers: ['1883'],
            hint: 'Two years after Garfield assassination by disgruntled office-seeker.'
          },
          {
            prompt: "Term for the civil-service hiring system based on professionalism, specialization, and neutrality rather than political patronage.",
            answer: 'merit system',
            acceptableAnswers: ['merit system', 'the merit system', 'merit', 'merit-based system', 'merit based system'],
            hint: 'The Pendleton Act replaced the spoils system with this.'
          },
          {
            prompt: "Term for the stable alliance of a congressional committee, a bureaucratic agency, and an interest group in one policy area.",
            answer: 'iron triangle',
            acceptableAnswers: ['iron triangle', 'an iron triangle', 'iron triangles'],
            hint: 'Three sides: committee, agency, interest group.'
          }
        ]
      }
    },
    {
      id: 'govburea1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each agency type to its description.**`,
      exercise: {
        dropdowns: [
          {
            label: "Multi-member 5-7 bipartisan boards with fixed terms; for-cause removal protection: ___",
            options: ['Independent Regulatory Commissions', 'Cabinet Departments', 'Government Corporations', 'Independent Executive Agencies']
          },
          {
            label: "15 major executive departments headed by Cabinet Secretaries: ___",
            options: ['Independent Regulatory Commissions', 'Cabinet Departments', 'Government Corporations', 'Independent Executive Agencies']
          },
          {
            label: "Operate like businesses; charge fees for services (USPS, Amtrak, TVA): ___",
            options: ['Independent Regulatory Commissions', 'Cabinet Departments', 'Government Corporations', 'Independent Executive Agencies']
          }
        ],
        correctAnswers: ['Independent Regulatory Commissions', 'Cabinet Departments', 'Government Corporations'],
        hint1: 'IRCs (Fed, SEC, FCC, NLRB, FTC, NRC, CPSC) — multi-member, fixed terms, for-cause removal protection.',
        hint2: 'Cabinet = State, Treasury, Defense, Justice, Interior, Ag, Commerce, Labor, HHS, HUD, DOT, Energy, Ed, VA, DHS.',
        hint3: 'Gov\'t corporations = USPS, Amtrak, TVA, FDIC.'
      }
    },
    {
      id: 'govburea1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "AP concept-application: A newly elected president wants to reward campaign volunteers with mid-level jobs at a federal agency, but finds that almost none of those jobs can be filled that way. Which best explains why?",
            options: [
              "Since the Pendleton Act, most civil service positions are awarded through competitive merit hiring rather than patronage",
              "Article II requires the Senate to confirm every federal employee, including clerks and inspectors",
              "Federal judges appoint career civil servants so that agency staff stay independent of the president and of Congress",
              "Each chamber of Congress elects agency staff by majority vote at the start of every new term"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.12.A.2: the civil service primarily uses a MERIT SYSTEM that hires and promotes on professionalism, specialization, and neutrality, as opposed to POLITICAL PATRONAGE. The Pendleton Act (1883) began replacing the spoils system; today the large majority of federal civilian jobs are merit-based, and only a few thousand top positions are political appointments. The Senate confirms only senior officials (Cabinet secretaries, ambassadors, judges), not ordinary employees; judges and Congress do not hire agency staff.'
          },
          {
            question: "Why does the federal bureaucracy exercise SIGNIFICANT POLICY-MAKING POWER even though Article I vests legislative power in Congress?",
            options: [
              "Congress passes broad statutes and delegates the details to agencies that write binding rules and use enforcement discretion",
              "Article II grants agencies their own lawmaking power, separate from any statute Congress passes",
              "Agencies can veto bills that affect their programs, giving them a formal role in Congress's lawmaking and a say over their budgets",
              "The Supreme Court assigns policy areas to agencies when Congress fails to act within a set deadline"
            ],
            correctAnswer: 0,
            explanation: 'Bureaucracy = significant POLICY-MAKING POWER despite Art I vesting legislative power in Congress. (1) RULEMAKING — Congress passes broad statutes (Clean Air Act → EPA "requisite to protect public health"); DELEGATES detail via APA 1946; ~3,000-4,000 final rules/year; (2) ENFORCEMENT DISCRETION — finite resources; what to investigate; (3) ADJUDICATION — ~1,800 ALJs; ~750,000 cases/yr (SSA, immigration, labor); (4) GUIDANCE — informal interpretive memos. This delegated DISCRETIONARY AUTHORITY is the core of EK 2.13.A.1.'
          }
        ]
      }
    }
  ]
}
