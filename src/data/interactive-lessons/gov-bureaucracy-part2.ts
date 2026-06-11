export const govBureaucracyPart2Data = {
  topicSlug: 'gov-bureaucracy',
  sections: [
    {
      id: 'govburea2-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Federal Bureaucracy

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Rulemaking — APA 1946 + notice-and-comment |
| Enforcement + adjudication |
| Implementation + delegated discretion |
| Major-questions doctrine + Chevron's overruling |
| Bureaucratic budgeting + appropriations |

> 🔑 Key idea: BUREAUCRATIC PROCESSES include RULEMAKING (APA 1946 notice-and-comment; ~3,000-4,000 final rules/year published in Federal Register), ENFORCEMENT (investigation + prosecution discretion), ADJUDICATION (ALJs handle ~750,000 cases/year), and IMPLEMENTATION of statutes through delegated discretion. Recent SCOTUS decisions — *West Virginia v. EPA* (2022) MAJOR QUESTIONS DOCTRINE + *Loper Bright v. Raimondo* (2024) overruling *Chevron* deference (1984) — have significantly constrained agency authority.
      `
    },
    {
      id: 'govburea2-content',
      type: 'text' as const,
      content: `
## Rulemaking — APA 1946 + Notice-and-Comment

The ADMINISTRATIVE PROCEDURE ACT 1946 (APA) governs how federal agencies make rules. The standard NOTICE-AND-COMMENT (informal) rulemaking process under § 553:

| Step | Description |
|---|---|
| **1. Notice of Proposed Rulemaking (NPRM)** | Agency publishes proposed rule in *Federal Register* with rationale, statutory authority, regulatory text |
| **2. Public Comment** | Public + interest groups + regulated parties submit comments (typically 30-60-90 days; sometimes years for major rules) |
| **3. Review + Revision** | Agency reviews comments, may revise rule; OIRA (Office of Information and Regulatory Affairs in OMB) reviews 'significant' rules under EO 12866 (Clinton 1993) |
| **4. Final Rule** | Final rule published in *Federal Register* with REASONED EXPLANATION + responses to significant comments; takes effect after 30+ days |
| **5. Codification** | Final rule codified in *Code of Federal Regulations* (CFR) |
| **6. Judicial Review** | Affected parties may challenge under APA standards |

**STANDARDS OF JUDICIAL REVIEW** (5 U.S.C. § 706):
- **ARBITRARY AND CAPRICIOUS** — most common standard for informal rulemaking; *Motor Vehicle Mfrs. Ass'n v. State Farm* (1983) — agency must consider relevant factors + provide reasoned explanation
- **SUBSTANTIAL EVIDENCE** — formal rulemaking + on-record adjudication
- **DE NOVO** — fact questions in narrow circumstances
- **STATUTORY INTERPRETATION** — Loper Bright (2024) replaced Chevron deference with INDEPENDENT JUDICIAL JUDGMENT

## Enforcement + Adjudication

| Function | Description |
|---|---|
| **INVESTIGATION** | Agencies investigate compliance (subpoenas, inspections, audits); FBI investigates federal crimes; OSHA inspects workplaces; SEC investigates securities violations |
| **CIVIL ENFORCEMENT** | Agencies bring civil actions for fines, injunctions, debarment; SEC = ~700-800 enforcement actions/year |
| **CRIMINAL REFERRAL** | Agencies refer cases to DOJ for prosecution |
| **ADMINISTRATIVE LAW JUDGES (ALJs)** | ~1,800 ALJs decide cases on Social Security disability, immigration, labor disputes, environmental violations, etc.; ~750,000 administrative adjudications/year |
| **APPEALS** | Within agency (e.g., SSA Appeals Council) → federal circuit court of appeals |
| **JARKESY V. SEC (2024)** | SCOTUS held SEC's use of administrative law judges for civil penalty cases (when seeking civil money penalties) violates Seventh Amendment jury-trial right; significant constraint on agency adjudication |

## Implementation + Delegated Discretion

Congress passes BROAD statutes; agencies fill in details:

| Statute | Delegation |
|---|---|
| **Clean Air Act 1970** | EPA must set NAAQS 'requisite to protect the public health' allowing 'an adequate margin of safety' |
| **Endangered Species Act 1973** | FWS lists species + designates critical habitat; protections kick in based on 'best available science' |
| **Communications Act 1934** | FCC may regulate as 'public interest, convenience, or necessity' requires |
| **Securities Exchange Act 1934** | SEC may make rules 'necessary or appropriate in the public interest' for protection of investors |

This DELEGATION enables expertise + flexibility but raises CONSTITUTIONAL CONCERNS about Article I:
- **NONDELEGATION DOCTRINE** — Congress cannot delegate legislative power; courts require an 'INTELLIGIBLE PRINCIPLE' to guide agency discretion (*Mistretta v. US* 1989); doctrine has been MOSTLY DORMANT since *Schechter Poultry* (1935) was the last successful nondelegation challenge
- **MAJOR QUESTIONS DOCTRINE** — modern revival; courts require CLEAR congressional authorization for agency action of major economic or political significance

## Major-Questions Doctrine + Chevron's Overruling

| Decision | Year | Holding | Impact |
|---|---|---|---|
| **Chevron v. NRDC** | 1984 | Two-step deference: (1) is statute clear? (2) if ambiguous, defer to reasonable agency interpretation | Foundational doctrine for ~40 years; cited in ~70 SCOTUS cases + ~17,000+ lower-court cases |
| **King v. Burwell** | 2015 | Court declined Chevron deference for ACA premium tax credit issue because question was MAJOR | Early articulation of major-questions concept |
| **West Virginia v. EPA** | 2022 | EPA Clean Power Plan struck because Clean Air Act did not CLEARLY authorize EPA to mandate fuel-source shifting from coal | EXPLICITLY CODIFIED MAJOR QUESTIONS DOCTRINE |
| **Biden v. Nebraska** | 2023 | Struck Biden student loan forgiveness (\\$430B program) because HEROES Act did not CLEARLY authorize sweeping debt cancellation | Major Questions Doctrine applied |
| **Loper Bright v. Raimondo** | 2024 | OVERRULED CHEVRON DEFERENCE — courts must exercise INDEPENDENT JUDGMENT on statutory interpretation; agencies entitled to RESPECT (Skidmore) but not deference | Reduced agency authority broadly |
| **Corner Post v. Federal Reserve** | 2024 | APA statute of limitations runs from when plaintiff is INJURED (not when rule was promulgated) | Opens decades-old rules to new challenges |

## Bureaucratic Budgeting + Appropriations

| Stage | Description |
|---|---|
| **AGENCY REQUEST** | Each agency submits budget request to OMB ~18 months before fiscal year |
| **OMB REVIEW** | Office of Management and Budget reviews + revises requests; integrates into PRESIDENT'S BUDGET |
| **PRESIDENT'S BUDGET** | Submitted to Congress by first Monday in February (Budget and Accounting Act 1921) |
| **CONGRESSIONAL ACTION** | Budget Committees set top-line numbers (Budget Act 1974); Appropriations Committees draft 12 appropriations bills |
| **APPROPRIATIONS** | Must be enacted before October 1 (start of fiscal year); CONTINUING RESOLUTIONS (CRs) common when missed |
| **OBLIGATION + EXPENDITURE** | Agencies obligate + spend funds per appropriations |
| **AUDITS** | GAO (Government Accountability Office) audits federal spending |

> 🔑 Key takeaway: Bureaucratic processes — RULEMAKING (APA 1946 notice-and-comment, ~3,000-4,000 final rules/yr), ENFORCEMENT + ADJUDICATION (~1,800 ALJs, ~750K cases/yr), IMPLEMENTATION via DELEGATED DISCRETION, BUDGETING (OMB → Congress → appropriations) — all face increasing CONSTITUTIONAL CONSTRAINTS via MAJOR QUESTIONS DOCTRINE (WV v. EPA 2022) + LOPER BRIGHT (2024) overruling Chevron.
      `
    },
    {
      id: 'govburea2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Bureaucratic Processes** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the standard notice-and-comment RULEMAKING process under the Administrative Procedure Act 1946?",
            options: [
              "Standard NOTICE-AND-COMMENT (informal) rulemaking under APA § 553: (1) NOTICE OF PROPOSED RULEMAKING (NPRM) — agency publishes proposed rule in Federal Register with statutory authority + rationale + regulatory text; (2) PUBLIC COMMENT — typically 30-60-90 day window; public + interest groups + regulated parties submit written comments; (3) REVIEW + REVISION — agency reviews comments + may revise; OIRA (Office of Information and Regulatory Affairs in OMB) reviews 'significant' rules under EO 12866 (Clinton 1993); (4) FINAL RULE — published in Federal Register with REASONED EXPLANATION + responses to significant comments; takes effect after 30+ days; (5) CODIFICATION — final rule codified in Code of Federal Regulations (CFR); (6) JUDICIAL REVIEW — affected parties may challenge under APA arbitrary-and-capricious standard (Motor Vehicle Mfrs. Ass'n v. State Farm 1983)",
              "There is no Administrative Procedure Act 1946 of any kind during the entire period from 1946 onward in any region of the United States with no notice-and-comment rulemaking, no NPRM, no Federal Register, no public comment, no OIRA review, no Code of Federal Regulations, no judicial review under APA, and no arbitrary-and-capricious standard of any kind during the entire period in any region",
              "Notice-and-comment rulemaking REQUIRES a public referendum vote of all American citizens before any agency rule can take effect of any kind under any circumstance with no NPRM, no Federal Register publication, no public comment window, and no OIRA review of any kind during the entire period from 1946 onward in any region of the United States during the period",
              "Federal agencies can make rules without publishing them or accepting any public comment of any kind under any circumstance with no NPRM, no Federal Register publication, no APA process requirements, and no judicial review of any kind during the entire period from 1946 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Standard NOTICE-AND-COMMENT under APA § 553: (1) NPRM — proposed rule in Federal Register with authority + rationale + text; (2) PUBLIC COMMENT — 30-60-90 days; (3) REVIEW + REVISION — OIRA reviews "significant" rules per EO 12866 (Clinton 1993); (4) FINAL RULE — Federal Register with REASONED EXPLANATION + responses; effective 30+ days; (5) CFR codification; (6) JUDICIAL REVIEW under arbitrary-and-capricious (Motor Vehicle Mfrs v. State Farm 1983).'
          },
          {
            question: "Which best describes how *Loper Bright v. Raimondo* (2024) changed the legal framework for agency interpretation of statutes?",
            options: [
              "*LOPER BRIGHT v. RAIMONDO* (2024) OVERRULED CHEVRON DEFERENCE that had governed agency statutory interpretation for ~40 years (since Chevron v. NRDC 1984); UNDER THE OLD CHEVRON FRAMEWORK: (Step 1) Is the statute clear on the precise question at issue? (Step 2) If ambiguous, courts DEFERRED to reasonable agency interpretations; UNDER THE NEW LOPER BRIGHT FRAMEWORK: courts must exercise INDEPENDENT JUDGMENT on statutory interpretation, using all interpretive tools to determine the best reading of the statute; agencies are entitled to RESPECT (Skidmore deference — based on agency expertise + persuasiveness) but NOT DEFERENCE; SIGNIFICANCE: (1) reduces agency authority broadly; (2) shifts statutory interpretation power from agencies to COURTS; (3) increases litigation incentives (no Chevron shield); (4) generates uncertainty about validity of long-standing regulations; (5) when combined with MAJOR QUESTIONS DOCTRINE (West Virginia v. EPA 2022), represents a significant constraint on the modern administrative state",
              "There is no Loper Bright v. Raimondo of any kind during the entire period from 2024 onward in any region of the United States with no Chevron overruling, no two-step Chevron framework, no independent judicial judgment standard, no Skidmore respect, no Major Questions Doctrine context, and no constraint on administrative state of any kind during the entire period in any region",
              "Loper Bright v. Raimondo STRENGTHENED Chevron deference and EXPANDED agency authority over statutory interpretation of any kind under any circumstance with no overruling of Chevron, no shift to independent judicial judgment, no reduction of agency authority, and no Major Questions Doctrine context of any kind during the entire period from 2024 onward in any region of the United States during the period",
              "Chevron v. NRDC was decided in 2024 and Loper Bright v. Raimondo was decided in 1984 of any kind under any circumstance with no Chevron 1984 origin, no Loper Bright 2024 overruling, and no 40-year Chevron framework of any kind during the entire period from 1984 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'LOPER BRIGHT v. RAIMONDO (2024) OVERRULED CHEVRON DEFERENCE (Chevron v. NRDC 1984; ~40 yrs). OLD CHEVRON: (Step 1) Statute clear? (Step 2) If ambiguous, DEFER to reasonable agency interpretation. NEW LOPER BRIGHT: courts exercise INDEPENDENT JUDGMENT; agencies entitled to RESPECT (Skidmore — expertise + persuasiveness) but NOT DEFERENCE. (1) Reduces agency authority broadly; (2) shifts power from agencies → COURTS; (3) increases litigation; (4) uncertainty on long-standing regs; (5) combined with MAJOR QUESTIONS DOCTRINE (WV v. EPA 2022) → major constraint on administrative state.'
          }
        ]
      }
    },
    {
      id: 'govburea2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Year the ADMINISTRATIVE PROCEDURE ACT was enacted to govern federal agency rulemaking.",
            answer: '1946',
            acceptableAnswers: ['1946'],
            hint: 'One year after WWII; same year as Atomic Energy Act.'
          },
          {
            prompt: "Year *CHEVRON v. NRDC* established the deference doctrine that governed agency interpretation for ~40 years.",
            answer: '1984',
            acceptableAnswers: ['1984'],
            hint: 'Reagan administration; first major Term of post-Burger Court.'
          },
          {
            prompt: "Year *LOPER BRIGHT v. RAIMONDO* OVERRULED Chevron deference.",
            answer: '2024',
            acceptableAnswers: ['2024'],
            hint: 'Same Term as Trump v. United States presidential immunity case.'
          }
        ]
      }
    },
    {
      id: 'govburea2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each bureaucratic process to its description.**`,
      exercise: {
        dropdowns: [
          {
            label: "Process by which agencies issue binding regulations under APA § 553 with NPRM + comment + final rule: ___",
            options: ['Rulemaking', 'Enforcement', 'Adjudication', 'Budgeting']
          },
          {
            label: "ALJs decide ~750,000 cases/year on Social Security disability, immigration, labor disputes: ___",
            options: ['Rulemaking', 'Enforcement', 'Adjudication', 'Budgeting']
          },
          {
            label: "OMB reviews agency budget requests + integrates into President's Budget submitted to Congress: ___",
            options: ['Rulemaking', 'Enforcement', 'Adjudication', 'Budgeting']
          }
        ],
        correctAnswers: ['Rulemaking', 'Adjudication', 'Budgeting'],
        hint1: 'Rulemaking = APA 1946 § 553 notice-and-comment; ~3,000-4,000 final rules/yr in Federal Register.',
        hint2: 'Adjudication = ~1,800 ALJs; ~750K cases/yr; Jarkesy v. SEC 2024 limited SEC ALJ use for civil penalties.',
        hint3: 'Budgeting = Budget and Accounting Act 1921 + Budget Act 1974; OMB integrates; Congress appropriates.'
      }
    },
    {
      id: 'govburea2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "AP concept-application: How does the MAJOR QUESTIONS DOCTRINE constrain agency action?",
            options: [
              "MAJOR QUESTIONS DOCTRINE (codified West Virginia v. EPA 2022, applied in Biden v. Nebraska 2023, reinforced by Loper Bright 2024) holds that courts REQUIRE CLEAR CONGRESSIONAL AUTHORIZATION for executive agencies to address questions of MAJOR ECONOMIC OR POLITICAL SIGNIFICANCE — agencies cannot rely on vague or general statutory language to justify sweeping new regulatory authority; APPLICATIONS: (1) West Virginia v. EPA (2022) — struck EPA Clean Power Plan because Clean Air Act § 111(d) did not CLEARLY authorize EPA to mandate fuel-source shifting away from coal; the Court held that 'enabling each State to balance' generation methods would be a 'major' transformation requiring clearer authorization; (2) Biden v. Nebraska (2023) — struck Biden \\$430B student loan forgiveness because HEROES Act did not CLEARLY authorize sweeping debt cancellation; SIGNIFICANCE: represents a major SHIFT IN POWER from AGENCIES to COURTS + CONGRESS — requires more specific congressional authorization for major regulatory action; constrains administrative state's ability to address novel problems through existing statutory authority",
              "There is no Major Questions Doctrine of any kind during the entire period from 2022 onward in any region of the United States with no West Virginia v. EPA codification, no clear authorization requirement, no Biden v. Nebraska student loan ruling, no Loper Bright reinforcement, no shift in power from agencies to courts and Congress, and no constraint on administrative state of any kind during the entire period in any region",
              "Major Questions Doctrine REQUIRES agencies to address questions of major economic or political significance even WITHOUT any congressional authorization of any kind under any circumstance with no clear authorization requirement, no West Virginia v. EPA codification, and no Biden v. Nebraska application of any kind during the entire period from 2022 onward in any region of the United States during the period",
              "Loper Bright v. Raimondo (2024) STRENGTHENED Chevron deference and EXPANDED agency authority of any kind under any circumstance with no Chevron overruling, no shift from agencies to courts and Congress, and no major questions doctrine connection of any kind during the entire period from 2024 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'MAJOR QUESTIONS DOCTRINE (codified WV v. EPA 2022; applied Biden v. Nebraska 2023; reinforced Loper Bright 2024) → COURTS REQUIRE CLEAR CONGRESSIONAL AUTHORIZATION for agencies on MAJOR ECONOMIC OR POLITICAL SIGNIFICANCE. APPLICATIONS: (1) WV v. EPA struck EPA Clean Power Plan — Clean Air Act § 111(d) did not CLEARLY authorize fuel-source shifting from coal; (2) Biden v. Nebraska struck \\$430B student loan forgiveness — HEROES Act did not clearly authorize. SHIFT IN POWER from AGENCIES → COURTS + CONGRESS; constrains administrative state.'
          },
          {
            question: "Why is the BUDGET AND ACCOUNTING ACT 1921 historically significant for the federal bureaucracy?",
            options: [
              "BUDGET AND ACCOUNTING ACT 1921 fundamentally reshaped federal budgeting + bureaucracy: (1) CREATED THE BUREAU OF THE BUDGET (now OFFICE OF MANAGEMENT AND BUDGET — OMB) — institutionalized presidential review + integration of agency budget requests; (2) CREATED THE GENERAL ACCOUNTING OFFICE (now GOVERNMENT ACCOUNTABILITY OFFICE — GAO) — provided Congress with independent audit + investigation capacity over executive spending; (3) MANDATED PRESIDENT'S BUDGET — required president to submit consolidated budget to Congress (today by first Monday in February); (4) ENDED 'BOTTOM-UP' BUDGETING — before 1921, agencies submitted requests directly to Congress with no presidential review or coordination; SIGNIFICANCE: shifted U.S. budgeting from disorganized agency-by-agency requests to a UNIFIED EXECUTIVE-LED PROCESS, dramatically expanding presidential control over the federal bureaucracy; later refined by CONGRESSIONAL BUDGET AND IMPOUNDMENT CONTROL ACT 1974 (created CBO + Budget Committees + reconciliation process)",
              "There is no Budget and Accounting Act 1921 of any kind during the entire period from 1921 onward in any region of the United States with no Bureau of the Budget creation, no OMB, no General Accounting Office, no GAO, no President's Budget mandate, no consolidated budget process, no bottom-up budgeting end, and no Congressional Budget and Impoundment Control Act 1974 of any kind during the entire period in any region",
              "Budget and Accounting Act 1921 ELIMINATED presidential involvement in budgeting and gave each agency complete autonomy to submit independent budget requests of any kind under any circumstance with no Bureau of the Budget creation, no OMB, no consolidated budget process, and no presidential review of any kind during the entire period from 1921 onward in any region of the United States during the period",
              "The Office of Management and Budget (OMB) was created by constitutional amendment in 1921 and not by the Budget and Accounting Act of any kind under any circumstance with no statutory creation, no Bureau of the Budget origin, and no executive-led budget process of any kind during the entire period from 1921 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'BUDGET AND ACCOUNTING ACT 1921 fundamentally reshaped federal budgeting: (1) CREATED BUREAU OF THE BUDGET (now OMB) — institutionalized presidential review + integration of agency budget requests; (2) CREATED GENERAL ACCOUNTING OFFICE (now GAO) — independent audit + investigation for Congress; (3) MANDATED PRESIDENT\'S BUDGET — consolidated budget to Congress (today first Monday in February); (4) ENDED "BOTTOM-UP" BUDGETING — pre-1921 agencies submitted directly to Congress without presidential coordination. Shifted to UNIFIED EXECUTIVE-LED PROCESS; later refined by CONGRESSIONAL BUDGET + IMPOUNDMENT CONTROL ACT 1974 (CBO + Budget Cmtes + reconciliation).'
          }
        ]
      }
    }
  ]
}
