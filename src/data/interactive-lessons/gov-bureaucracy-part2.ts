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
              "An agency publishes a proposed rule in the Federal Register, takes public comments, then issues a final rule open to court review",
              "An agency drafts a rule in private, sends it to Congress for comment and a vote, then publishes it if both chambers approve",
              "An agency holds a public referendum, counts the votes by state, then adopts the rule favored by most voters nationwide",
              "An agency submits a rule to the Supreme Court, waits for an advisory opinion, then prints it in the Congressional Record"
            ],
            correctAnswer: 0,
            explanation: 'Standard NOTICE-AND-COMMENT under APA § 553: (1) NPRM — proposed rule in Federal Register with authority + rationale + text; (2) PUBLIC COMMENT — 30-60-90 days; (3) REVIEW + REVISION — OIRA reviews "significant" rules per EO 12866 (Clinton 1993); (4) FINAL RULE — Federal Register with REASONED EXPLANATION + responses; effective 30+ days; (5) CFR codification; (6) JUDICIAL REVIEW under arbitrary-and-capricious (Motor Vehicle Mfrs v. State Farm 1983).'
          },
          {
            question: "Which best describes how *Loper Bright v. Raimondo* (2024) changed the legal framework for agency interpretation of statutes?",
            options: [
              "It overruled Chevron, so courts now judge statutory meaning themselves instead of deferring to agencies",
              "It extended Chevron, so courts must now defer to agency readings even when the statute's text itself is clear",
              "It overruled the major questions doctrine, so agencies may now address any issue Congress has not expressly barred",
              "It required Congress to approve every major rule, so courts no longer review agency interpretations of statutes at all"
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
              "Agencies need clear authorization from Congress before acting on issues of vast economic or political significance",
              "Courts must defer to agencies on major questions, since those require technical expertise judges lack",
              "Agencies may act on any major question once the President certifies a national emergency, even without a statute from Congress",
              "Only Cabinet departments, not independent agencies, may decide questions of national importance"
            ],
            correctAnswer: 0,
            explanation: 'MAJOR QUESTIONS DOCTRINE (codified WV v. EPA 2022; applied Biden v. Nebraska 2023; reinforced Loper Bright 2024) → COURTS REQUIRE CLEAR CONGRESSIONAL AUTHORIZATION for agencies on MAJOR ECONOMIC OR POLITICAL SIGNIFICANCE. APPLICATIONS: (1) WV v. EPA struck EPA Clean Power Plan — Clean Air Act § 111(d) did not CLEARLY authorize fuel-source shifting from coal; (2) Biden v. Nebraska struck \\$430B student loan forgiveness — HEROES Act did not clearly authorize. SHIFT IN POWER from AGENCIES → COURTS + CONGRESS; constrains administrative state.'
          },
          {
            question: "Why is the BUDGET AND ACCOUNTING ACT 1921 historically significant for the federal bureaucracy?",
            options: [
              "It created the Bureau of the Budget and the GAO, giving the President a unified budget and Congress an auditor",
              "It created the Congressional Budget Office, ending the President's role in preparing federal budgets",
              "It created the Office of Personnel Management, replacing the spoils system with competitive exams for all federal jobs",
              "It created the Federal Reserve, giving an independent bureau control of agency spending and audits"
            ],
            correctAnswer: 0,
            explanation: 'BUDGET AND ACCOUNTING ACT 1921 fundamentally reshaped federal budgeting: (1) CREATED BUREAU OF THE BUDGET (now OMB) — institutionalized presidential review + integration of agency budget requests; (2) CREATED GENERAL ACCOUNTING OFFICE (now GAO) — independent audit + investigation for Congress; (3) MANDATED PRESIDENT\'S BUDGET — consolidated budget to Congress (today first Monday in February); (4) ENDED "BOTTOM-UP" BUDGETING — pre-1921 agencies submitted directly to Congress without presidential coordination. Shifted to UNIFIED EXECUTIVE-LED PROCESS; later refined by CONGRESSIONAL BUDGET + IMPOUNDMENT CONTROL ACT 1974 (CBO + Budget Cmtes + reconciliation).'
          }
        ]
      }
    }
  ]
}
