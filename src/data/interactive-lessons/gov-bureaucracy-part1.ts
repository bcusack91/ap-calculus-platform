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
| **Spending** | Federal civilian discretionary spending ~$1.7 trillion/year |
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
- **SCHEDULE F (Trump Oct 2020)** — proposed reclassifying tens of thousands of policy-related career civil servants as at-will employees; rescinded by Biden Jan 2021; restored by Trump Jan 2025 — major bureaucratic restructuring debate

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
              "The Constitution mentions executive departments only BRIEFLY in Article II — § 2 cl. 1 references 'the principal Officer in each of the executive Departments' (whose opinion the president may require) and § 2 cl. 2 (Appointments Clause) provides for nomination by the president + Senate confirmation of 'Officers of the United States,' with Congress empowered to vest appointment of inferior officers in the president alone, courts, or department heads; HOWEVER, the Constitution does NOT specify which departments must exist, what powers they have, or how they are organized — instead, CONGRESS CREATES AGENCIES VIA STATUTE, specifying their authority, structure, funding, and procedures (with the Administrative Procedure Act 1946 setting baseline procedures); this division means bureaucracy operates under a HYBRID FOUNDATION — constitutional supervision (presidential appointment + Senate confirmation) combined with statutory creation (congressional design)",
              "There is no constitutional foundation for the federal bureaucracy of any kind during the entire period from 1789 onward in any region of the United States with no Article II § 2 cl. 1 reference to principal Officer of executive Departments, no Article II § 2 cl. 2 Appointments Clause, no Senate confirmation, no congressional statute creation, no Administrative Procedure Act 1946, and no hybrid constitutional-statutory foundation of any kind during the entire period in any region",
              "The Constitution explicitly creates and specifies all federal departments, their powers, and their organization with no congressional role in agency creation of any kind under any circumstance with no statute-based agency creation, no congressional design, and no Administrative Procedure Act of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Federal agencies are created by judicial decision and not by congressional statute or constitutional text of any kind under any circumstance with no Article II foundation, no congressional creation, no Administrative Procedure Act, and no hybrid foundation of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Constitution mentions executive departments BRIEFLY: Art II § 2 cl. 1 ("principal Officer in each of the executive Departments") + § 2 cl. 2 Appointments Clause (president nominates + Senate confirms "Officers of the United States"; Congress may vest inferior officer appointment elsewhere). Constitution does NOT specify which departments exist or their powers. CONGRESS CREATES AGENCIES VIA STATUTE — authority, structure, funding, procedures (APA 1946 baseline). HYBRID — constitutional supervision (appointment + confirmation) + statutory creation (congressional design).'
          },
          {
            question: "What distinguishes INDEPENDENT REGULATORY COMMISSIONS from other federal agency types?",
            options: [
              "INDEPENDENT REGULATORY COMMISSIONS (Federal Reserve 1913, SEC 1934, FCC 1934, NLRB 1935, FTC 1914, NRC 1974, CPSC 1972) have several distinctive features: (1) MULTI-MEMBER STRUCTURE — typically 5-7 commissioners (vs. single-administrator agencies); (2) BIPARTISAN COMPOSITION — statutes typically limit one party to a bare majority (e.g., 3-2 on FCC); (3) FIXED TERMS — staggered, multi-year terms (e.g., 14 years for Fed governors, 5-7 years for most commissions); (4) FOR-CAUSE REMOVAL — president can ONLY remove commissioners FOR CAUSE (inefficiency, neglect of duty, malfeasance) — established in *Humphrey's Executor v. United States* (1935) which limited *Myers v. United States* (1926); (5) RELATIVE INDEPENDENCE FROM PRESIDENT — the structure provides insulation from political pressure for technical/economic regulation; (6) MODERN DEBATE — *Seila Law v. CFPB* (2020) and *Collins v. Yellen* (2021) limited Humphrey's Executor for SINGLE-DIRECTOR agencies, raising questions about the future of the for-cause removal protection",
              "There is no independent regulatory commission of any kind during the entire period from 1887 onward in any region of the United States with no Federal Reserve, no SEC, no FCC, no NLRB, no FTC, no NRC, no CPSC, no multi-member structure, no bipartisan composition, no fixed terms, no for-cause removal, no Humphrey's Executor, no Myers, no Seila Law, and no Collins v. Yellen of any kind during the entire period in any region",
              "Independent regulatory commissions are SINGLE-ADMINISTRATOR agencies that president can fire AT WILL of any kind under any circumstance with no multi-member structure, no bipartisan composition, no fixed terms, no for-cause removal, and no Humphrey's Executor protection of any kind during the entire period from 1887 onward in any region of the United States during the period",
              "Humphrey's Executor v. United States (1935) gave the president UNLIMITED power to fire commissioners of independent regulatory commissions of any kind under any circumstance with no for-cause removal limitation, no multi-member protection, and no insulation from political pressure of any kind during the entire period from 1935 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'INDEPENDENT REGULATORY COMMISSIONS (Fed 1913, SEC 1934, FCC 1934, NLRB 1935, FTC 1914, NRC 1974, CPSC 1972): (1) MULTI-MEMBER 5-7 commissioners; (2) BIPARTISAN — bare majority limit; (3) FIXED STAGGERED TERMS (Fed 14yr, most 5-7yr); (4) FOR-CAUSE REMOVAL — Humphrey\'s Executor v. US (1935) limited Myers v. US (1926); president removes only for inefficiency/neglect/malfeasance; (5) INSULATION from political pressure for technical regulation; (6) MODERN — Seila Law v. CFPB (2020) + Collins v. Yellen (2021) limited Humphrey\'s for SINGLE-DIRECTOR agencies.'
          }
        ]
      }
    },
    {
      id: 'govburea1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the year**`,
      exercise: {
        questions: [
          {
            prompt: "Year the PENDLETON ACT created the merit-based civil service.",
            answer: '1883',
            acceptableAnswers: ['1883'],
            hint: 'Two years after Garfield assassination by disgruntled office-seeker.'
          },
          {
            prompt: "Year the HATCH ACT limited political activities of federal workers.",
            answer: '1939',
            acceptableAnswers: ['1939'],
            hint: 'Mid-FDR era; named for Senator Carl Hatch (D-NM).'
          },
          {
            prompt: "Year the CIVIL SERVICE REFORM ACT created OPM + MSPB + SES, replacing the Civil Service Commission.",
            answer: '1978',
            acceptableAnswers: ['1978'],
            hint: 'Carter-era reform; same year as inflation crisis.'
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
        hint1: 'IRCs (Fed, SEC, FCC, NLRB, FTC, NRC, CPSC) — multi-member, fixed terms, Humphrey\'s Executor for-cause protection.',
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
            question: "AP concept-application: 'Schedule F' has been a major bureaucratic restructuring debate. What does it propose and why is it constitutionally significant?",
            options: [
              "SCHEDULE F (Trump Oct 2020 EO; rescinded Biden Jan 2021; restored Trump Jan 2025) proposes RECLASSIFYING tens of thousands of policy-related CAREER civil servants from MERIT-PROTECTED competitive service to AT-WILL excepted service — making them removable BY THE PRESIDENT WITHOUT CAUSE; CONSTITUTIONAL SIGNIFICANCE: (1) Schedule F is grounded in the UNITARY EXECUTIVE THEORY — that Article II vests ALL executive power in the president, who must therefore be able to remove subordinates; (2) PROPONENTS argue Schedule F restores PRESIDENTIAL ACCOUNTABILITY for executive policy; (3) CRITICS argue Schedule F dismantles the PENDLETON ACT 1883 + CIVIL SERVICE REFORM ACT 1978 framework, returning to a SPOILS-SYSTEM-LIKE arrangement; (4) BROADER SCOTUS CONTEXT — Seila Law v. CFPB (2020) + Collins v. Yellen (2021) similarly limited for-cause removal protection for single-director agencies, suggesting an evolving doctrine on presidential removal authority over the bureaucracy",
              "There is no Schedule F of any kind during the entire period from 2020 onward in any region of the United States with no Trump executive order, no Biden rescission, no Trump restoration, no reclassification of career civil servants, no unitary executive theory, no Pendleton Act dismantling debate, no Civil Service Reform Act dismantling debate, no Seila Law context, and no Collins v. Yellen context of any kind during the entire period in any region",
              "Schedule F STRENGTHENS merit-based civil service protections and EXPANDS the competitive service of any kind under any circumstance with no reclassification of career employees as at-will, no unitary executive theory connection, and no Pendleton Act dismantling debate of any kind during the entire period from 2020 onward in any region of the United States during the period",
              "Schedule F was created by Congress via constitutional amendment in 1883 alongside the Pendleton Act of any kind under any circumstance with no Trump executive order origin, no Biden rescission, no Trump 2025 restoration, and no unitary executive theory of any kind during the entire period from 2020 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'SCHEDULE F (Trump Oct 2020 EO → Biden rescinded Jan 2021 → Trump restored Jan 2025) RECLASSIFIES policy-related CAREER civil servants from MERIT-PROTECTED competitive service to AT-WILL excepted service → removable BY PRESIDENT WITHOUT CAUSE. (1) UNITARY EXECUTIVE THEORY — Art II vests ALL executive power in president → must remove subordinates; (2) PROPONENTS — restores PRESIDENTIAL ACCOUNTABILITY; (3) CRITICS — dismantles PENDLETON 1883 + CSRA 1978; SPOILS-SYSTEM return; (4) Seila Law (2020) + Collins v. Yellen (2021) similarly limited for-cause removal for single-director agencies.'
          },
          {
            question: "Why does the federal bureaucracy exercise SIGNIFICANT POLICY-MAKING POWER even though Article I vests legislative power in Congress?",
            options: [
              "The bureaucracy exercises significant POLICY-MAKING POWER through several mechanisms despite Article I vesting legislative power in Congress: (1) RULEMAKING — Congress passes broad statutes (e.g., Clean Air Act requires EPA to set standards 'requisite to protect the public health' allowing 'an adequate margin of safety') and DELEGATES detailed implementation to agencies through formal RULEMAKING under the Administrative Procedure Act 1946; the Federal Register publishes ~3,000-4,000 final rules/year; (2) ENFORCEMENT DISCRETION — agencies must allocate finite resources, choosing what to investigate and prosecute; (3) ADJUDICATION — administrative law judges (~1,800) adjudicate ~750,000 cases/year on Social Security, immigration, labor disputes, etc.; (4) GUIDANCE — informal interpretive memos shape regulated parties' behavior; (5) NONDELEGATION CONSTRAINT — the SCOTUS NONDELEGATION DOCTRINE (Schechter Poultry 1935 was last enforcement) and recently the MAJOR QUESTIONS DOCTRINE (West Virginia v. EPA 2022, Loper Bright 2024 overruling Chevron) constrain agencies from claiming MAJOR new authority without clear congressional authorization",
              "There is no policy-making power of the federal bureaucracy of any kind during the entire period from 1789 onward in any region of the United States with no rulemaking, no enforcement discretion, no adjudication, no guidance, no Administrative Procedure Act 1946, no Federal Register, no administrative law judges, no nondelegation doctrine, no Schechter Poultry, no major questions doctrine, no West Virginia v. EPA, and no Loper Bright of any kind during the entire period in any region",
              "The bureaucracy has NO policy-making power and merely mechanically implements Congressional statutes with no discretion of any kind under any circumstance with no rulemaking, no enforcement discretion, no adjudication, and no guidance of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "The Major Questions Doctrine and Loper Bright EXPANDED agency policy-making authority of any kind under any circumstance with no constraint on agency authority claims, no requirement for clear congressional authorization, and no Chevron overruling of any kind during the entire period from 2022 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Bureaucracy = significant POLICY-MAKING POWER despite Art I vesting legislative power in Congress. (1) RULEMAKING — Congress passes broad statutes (Clean Air Act → EPA "requisite to protect public health"); DELEGATES detail via APA 1946; ~3,000-4,000 final rules/year; (2) ENFORCEMENT DISCRETION — finite resources; what to investigate; (3) ADJUDICATION — ~1,800 ALJs; ~750,000 cases/yr (SSA, immigration, labor); (4) GUIDANCE — informal interpretive memos; (5) NONDELEGATION (Schechter 1935 last enforcement) + MAJOR QUESTIONS DOCTRINE (WV v. EPA 2022, Loper Bright 2024 overruling Chevron) constrain MAJOR new authority claims without clear authorization.'
          }
        ]
      }
    }
  ]
}
