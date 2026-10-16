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
| Rulemaking authority in action — the CED's agencies |
| Bureaucratic budgeting + appropriations |

> 🔑 Key idea: BUREAUCRATIC PROCESSES include RULEMAKING (APA 1946 notice-and-comment; ~3,000-4,000 final rules/year published in Federal Register), ENFORCEMENT (investigation + prosecution discretion), ADJUDICATION (ALJs handle ~750,000 cases/year), and IMPLEMENTATION of statutes through delegated discretion. Congress, the president, and the courts each check how agencies use that discretion.
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
| **3. Review + Revision** | Agency reviews comments, may revise rule; the White House (OMB) reviews major rules so they fit the president's agenda |
| **4. Final Rule** | Final rule published in *Federal Register* with REASONED EXPLANATION + responses to significant comments; takes effect after 30+ days |
| **5. Codification** | Final rule codified in *Code of Federal Regulations* (CFR) |
| **6. Judicial Review** | Affected parties may sue; courts can strike a rule that goes beyond what the statute authorizes |

Every step is an ACCESS POINT (EK 2.15.B.1): interest groups, businesses, and citizens can comment, lobby the agency, ask Congress to intervene, or sue.

## Enforcement + Adjudication

| Function | Description |
|---|---|
| **INVESTIGATION** | Agencies investigate compliance (subpoenas, inspections, audits); FBI investigates federal crimes; OSHA inspects workplaces; SEC investigates securities violations |
| **CIVIL ENFORCEMENT** | Agencies bring civil actions for fines, injunctions, debarment; SEC = ~700-800 enforcement actions/year |
| **CRIMINAL REFERRAL** | Agencies refer cases to DOJ for prosecution |
| **ADMINISTRATIVE LAW JUDGES (ALJs)** | ~1,800 ALJs decide cases on Social Security disability, immigration, labor disputes, environmental violations, etc.; ~750,000 administrative adjudications/year |
| **APPEALS** | Within agency (e.g., SSA Appeals Council) → federal circuit court of appeals |
| **FINES** | Agencies ISSUE FINES for violations (EK 2.12.A.1.ii) — e.g., FCC fines broadcasters, EPA fines polluters, SEC fines firms that mislead investors |

## Implementation + Delegated Discretion

Congress passes BROAD statutes; agencies fill in details:

| Statute | Delegation |
|---|---|
| **Clean Air Act 1970** | EPA must set NAAQS 'requisite to protect the public health' allowing 'an adequate margin of safety' |
| **Endangered Species Act 1973** | FWS lists species + designates critical habitat; protections kick in based on 'best available science' |
| **Communications Act 1934** | FCC may regulate as 'public interest, convenience, or necessity' requires |
| **Securities Exchange Act 1934** | SEC may make rules 'necessary or appropriate in the public interest' for protection of investors |

This DELEGATION of DISCRETIONARY AUTHORITY (EK 2.13.A.1) lets agencies apply expertise and adjust to new problems without Congress passing a new law each time. The trade-off: unelected officials make consequential policy choices, which is why Congress (oversight, power of the purse), the president (appointments, executive orders), and the courts (lawsuits over whether a rule exceeds the statute) all work to keep agencies ACCOUNTABLE (EK 2.15.A.1).

## Rulemaking Authority in Action — the CED's Agencies

The CED (EK 2.13.A.1) names seven agencies as examples of bureaucratic discretion and rulemaking. Know what kind of rules each one writes and enforces:

| Agency | Type | Discretionary rulemaking example |
|---|---|---|
| **Department of Homeland Security** | Cabinet department | Sets airport screening rules (through TSA) and immigration enforcement priorities |
| **Department of Transportation** | Cabinet department | Writes vehicle safety and fuel-economy standards; sets rules for airlines and trucking |
| **Department of Veterans Affairs** | Cabinet department | Decides eligibility rules for veterans' health care and disability benefits |
| **Department of Education** | Cabinet department | Writes rules for federal student aid and for how schools comply with Title IX |
| **Environmental Protection Agency (EPA)** | Independent executive agency | Sets air- and water-pollution limits under broad statutes such as the Clean Air Act |
| **Federal Election Commission (FEC)** | Independent regulatory commission | Writes and enforces campaign-finance disclosure and contribution rules |
| **Securities and Exchange Commission (SEC)** | Independent regulatory commission | Writes disclosure rules for public companies and fines firms that mislead investors |

**The AP pattern:** Congress writes a broad goal ("protect public health," "ensure safe transportation") → the agency uses DISCRETION to write specific rules → the agency ENFORCES them (inspections, fines) → Congress, the president, and the courts check the result.

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

> 🔑 Key takeaway: Bureaucratic processes — RULEMAKING (APA 1946 notice-and-comment, ~3,000-4,000 final rules/yr), ENFORCEMENT + ADJUDICATION (~1,800 ALJs, ~750K cases/yr), IMPLEMENTATION via DELEGATED DISCRETION, BUDGETING (OMB → Congress → appropriations) — all rest on DISCRETIONARY AUTHORITY delegated by Congress and are checked by Congress, the president, and the courts.
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
            explanation: 'Standard NOTICE-AND-COMMENT under APA § 553: (1) NPRM — proposed rule in Federal Register with authority + rationale + text; (2) PUBLIC COMMENT — 30-60-90 days; (3) REVIEW + REVISION — agency considers the comments; (4) FINAL RULE — Federal Register with REASONED EXPLANATION + responses; effective 30+ days; (5) CFR codification; (6) JUDICIAL REVIEW — affected parties may challenge the rule in court. Congress does not vote on individual rules; that is the point of delegated rulemaking authority (EK 2.13.A.1).'
          },
          {
            question: "Congress directs the EPA to set air-quality limits 'requisite to protect the public health' but writes no specific numbers into the law. Which best describes the EPA's role in setting the actual limits?",
            options: [
              "It uses delegated discretion to issue binding rules that fill in the details",
              "It must return to Congress for a floor vote on each specific number before any limit can take effect",
              "It waits for the Supreme Court to set the numbers, since courts interpret all ambiguous statutes first",
              "It cannot act, because only Congress may make rules that bind private businesses and individuals"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.13.A.1: the bureaucracy uses DISCRETIONARY POWER delegated by Congress to interpret and implement policies; through RULEMAKING AUTHORITY agencies create and enforce regulations. Congress set the goal (protect public health) and left the EPA to choose the specific limits using its expertise. Congress does not vote on each rule, courts review rules only when someone sues, and agency rules issued under a statute do bind businesses and individuals.'
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
            prompt: "Term for an agency's power to write binding regulations that carry out a law passed by Congress.",
            answer: 'rulemaking',
            acceptableAnswers: ['rulemaking', 'rule making', 'rule-making', 'rulemaking authority', 'rulemaking power'],
            hint: 'Notice → comment → final ___.'
          },
          {
            prompt: "Abbreviation of the independent regulatory commission that writes and enforces federal campaign-finance rules.",
            answer: 'FEC',
            acceptableAnswers: ['FEC', 'Federal Election Commission', 'the FEC'],
            hint: 'Federal ___ Commission.'
          },
          {
            prompt: "Term for the judgment agencies use, as delegated by Congress, to interpret and implement policies (two words).",
            answer: 'discretionary authority',
            acceptableAnswers: ['discretionary authority', 'discretionary power', 'discretion', 'delegated discretion', 'delegated discretionary authority'],
            hint: 'EK 2.13.A.1 — Congress delegates it; agencies use it to write rules.'
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
        hint2: 'Adjudication = ~1,800 ALJs; ~750K cases/yr; court-like hearings inside agencies.',
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
            question: "AP concept-application: Congress directs the Department of Transportation to set 'reasonable' safety standards for self-driving cars without defining 'reasonable.' The department then writes detailed rules after a public comment period. Which concept does this scenario best illustrate?",
            options: [
              "Discretionary authority, because Congress delegated to the agency the job of filling in the law",
              "Judicial review, because the department decides whether the statute is constitutional before applying it",
              "Pork-barrel spending, because the department directs federal money to projects in members' districts",
              "Executive privilege, because the department withholds its internal deliberations from Congress"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.13.A.1: the bureaucracy uses DISCRETIONARY POWER delegated by Congress to interpret and implement policies, and its RULEMAKING AUTHORITY lets it create and enforce regulations. The Department of Transportation is one of the agencies the CED names. Courts, not agencies, exercise judicial review; pork-barrel spending is a congressional funding practice; nothing in the scenario involves withholding information.'
          },
          {
            question: "A House appropriations subcommittee, unhappy with how an agency enforces a regulation, writes a spending bill that bars the agency from using any funds to enforce that rule. Which congressional oversight tool is being used?",
            options: [
              "The power of the purse, by withholding the money the agency needs to carry out the rule",
              "Senate confirmation, by refusing to approve the agency head the President has nominated",
              "A discharge petition, by forcing the bill out of a committee that has refused to act on it",
              "Impeachment, by formally charging the agency's officials with abuse of power in the House"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.14.A.1.iii: the POWER OF THE PURSE is Congress\'s ability to check the bureaucracy by appropriating or withholding funds. A funding limit in an appropriations bill (often a rider) stops the agency from enforcing the rule without changing the underlying law. Senate confirmation applies to nominees, a discharge petition moves a bill out of committee, and impeachment is aimed at officials, not at a policy.'
          }
        ]
      }
    }
  ]
}
