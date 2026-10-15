export const govCongressPart6Data = {
  topicSlug: 'gov-congress',
  sections: [
    {
      id: 'govcong6-intro',
      type: 'text' as const,
      content: `
# 🏛️ Congress

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| 5-step framework for analyzing congressional behavior |
| Worked example: Inflation Reduction Act 2022 (reconciliation) |
| Required AP documents linkage |
| AP argument-essay structure |

> 🔑 Key idea: Strong AP analysis links specific congressional behavior to (a) constitutional structure, (b) political conditions, (c) procedural rules, (d) institutional incentives, (e) historical pattern.
      `
    },
    {
      id: 'govcong6-content',
      type: 'text' as const,
      content: `
## 5-Step Framework for Analyzing Congressional Behavior

| Step | Question | What to consider |
|---|---|---|
| 1. CONSTITUTIONAL | What constitutional provision authorizes/constrains this? | Article I powers (enumerated + implied + Necessary and Proper); bicameralism + presentment; specific clauses (Origination, Spending, Commerce, War) |
| 2. POLITICAL | What political conditions shape this? | Unified vs divided government; party majorities; presidential election cycle; public opinion |
| 3. PROCEDURAL | What congressional rules + procedures apply? | Committee referral; filibuster + cloture (60 votes); reconciliation eligibility; Rules Committee terms; conference committee |
| 4. INSTITUTIONAL | What institutional incentives drive members? | Reelection (Mayhew); committee assignments; party loyalty; constituency interests; donor concerns |
| 5. HISTORICAL | What historical pattern fits? | New Deal coalition; Conservative Coalition; Reagan revolution; Gingrich revolution; modern polarization |

## Worked Example: Inflation Reduction Act 2022 (Reconciliation)

> ⚡ Question: Apply the 5-step framework to explain how the Inflation Reduction Act 2022 — Biden's signature climate + healthcare + tax legislation — passed Congress despite intense Republican opposition and only a 50-50 Senate.

| Step | Application |
|---|---|
| 1. **CONSTITUTIONAL** | The IRA exercises Congress's Article I § 8 cl. 1 spending + taxing powers (clean-energy tax credits, prescription drug price negotiation, corporate minimum tax); bicameralism + presentment satisfied (House 220-207 + Senate 51-50 with VP Harris tie-breaker; signed by Biden August 16, 2022); no Commerce Clause challenges expected |
| 2. **POLITICAL** | Democrats had: (a) 50-50 Senate (with Harris tie-breaker) — minimum possible majority; (b) ~221 House majority; (c) Biden presidency — UNIFIED government; (d) had failed to pass broader Build Back Better in 2021-22 due to Joe Manchin (D-WV) + Kyrsten Sinema (D-AZ) opposition; (e) needed to show pre-midterm legislative achievement; result: scaled-back IRA finally negotiated July 2022 with Manchin support |
| 3. **PROCEDURAL** | Used RECONCILIATION (Budget Act 1974) to bypass Senate filibuster — only path with 50-50 Senate; Senate Parliamentarian Elizabeth MacDonough enforced Byrd Rule (limiting reconciliation to budget-related provisions, removing some climate + healthcare provisions); 51 votes (Manchin + Sinema + 48 other Democrats + Harris tie-breaker) sufficient under reconciliation |
| 4. **INSTITUTIONAL** | (a) Manchin extracted concessions favoring West Virginia coal/gas industry (Mountain Valley Pipeline permitting); (b) Sinema secured carried-interest tax-loophole preservation + drug-pricing scope reduction; (c) all 50 Democrats had reelection or party-loyalty incentives to support deal once final terms negotiated; (d) all 50 Republicans had partisan + ideological + donor incentives to oppose |
| 5. **HISTORICAL** | Fits modern polarization-era pattern: major partisan legislation passes via reconciliation with razor-thin party-line votes; followed Bush tax cuts 2001/2003, Trump tax cuts 2017, ARPA 2021 pattern; demonstrates that reconciliation is the only viable path for major partisan economic legislation in modern era |

## Required AP Documents Linkage

| Document | Connection to Congress |
|---|---|
| **Federalist 10** (Madison) | Large republic + representation as check on majority faction; legislative outcomes reflect coalition-building |
| **Federalist 51** (Madison) | Bicameralism + checks; "ambition counteract ambition" |
| **Federalist 70** (Hamilton) | Energetic unitary executive necessary because Congress is slow + deliberative |
| **Federalist 78** (Hamilton) | Judicial review checks congressional excess |
| **Brutus 1** (Anti-Federalist) | Warning that Necessary and Proper Clause + Supremacy Clause will allow Congress to swallow state authority |
| **Constitution Art I** | All congressional powers + procedures |

## AP Argument Essay Structure (Recommended Approach)

| Paragraph | Content |
|---|---|
| **Thesis** | Take a clear, defensible position on the prompt's claim about Congress; preview your reasoning |
| **Supporting evidence 1** | Use one piece of evidence from the foundational documents (Federalist 10/51/70/78, Brutus 1, Constitution) to support your thesis |
| **Supporting evidence 2** | Use one piece of evidence from a SECOND DIFFERENT source (e.g., a SCOTUS case like McCulloch, Lopez, or NFIB v. Sebelius; or a specific historical example like the New Deal, Great Society, or modern reconciliation) |
| **Reasoning** | Explain how your evidence proves your thesis; do not merely quote evidence — make explicit the logical link |
| **Counter-argument + rebuttal** | Acknowledge a strong counter-claim (e.g., "Some argue that Congress's modern dysfunction shows the framers' design has failed"); rebut with reasoning + evidence (e.g., "But the framers explicitly anticipated faction in Federalist 10 and built procedural checks to slow rapid action") |

> 🔑 The strongest AP responses link multiple analytical levels — constitutional + political + procedural + institutional + historical — and use specific named evidence rather than generalizations.
      `
    },
    {
      id: 'govcong6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Argument Application** 🎯`,
      exercise: {
        questions: [
          {
            question: "AP analysis prompt: 'Develop an argument that explains whether the modern reconciliation procedure undermines the framers' design for Congress.' What is the strongest argument that reconciliation DOES undermine the framers' design?",
            options: [
              "The framers built Congress to require broad coalitions, and reconciliation lets a bare Senate majority pass sweeping tax and spending laws without them",
              "Reconciliation lets the President write budget laws alone, which removes Congress from the process the framers designed",
              "Reconciliation violates the Origination Clause, since every reconciliation bill starts in the Senate",
              "Article I requires a filibuster, and reconciliation unconstitutionally bypasses it"
            ],
            correctAnswer: 0,
            explanation: 'Reconciliation undermines framers\' design (strongest argument): framers designed Congress for BROAD COALITIONS — bicameralism, presentment, Senate longer terms + equal-state representation, committee specialization slow legislation + require accommodation. Senate filibuster (informal 19th c, Rule 22 1917, 60 votes 1975) reinforced supermajority. Reconciliation (Budget Act 1974) allows budget-related at 51 → circumvents supermajority protection against narrow factions. Modern use for sweeping economics (Bush 2001/2003, ACA 2010, Trump 2017, ARPA 2021, IRA 2022) → bare majority + presidency enacts transformative policy without minority participation → inadvertent rewriting of Senate\'s structural role.'
          },
          {
            question: "What is the strongest counter-argument that reconciliation does NOT undermine the framers' design?",
            options: [
              "The filibuster is not in the Constitution, which lets each chamber set its rules, so majority rule by reconciliation fits the design",
              "The framers wrote reconciliation into Article I, so using it simply follows the budget procedure they spelled out in the original Constitution",
              "Reconciliation needs two-thirds of the Senate, so it requires even broader coalitions than ordinary bills that face a filibuster on the floor",
              "The Supreme Court has upheld reconciliation, which means it cannot conflict with the framers' design, whatever its effect on how Congress works"
            ],
            correctAnswer: 0,
            explanation: 'Counter (reconciliation NOT undermining framers): framers did NOT establish filibuster — informal 19th c, formalized 1917 (Rule 22). Reconciliation can\'t undermine design that didn\'t include filibuster. (1) Art I § 5 cl 2 ("Each House may determine the Rules of its Proceedings") contemplates simple-majority. (2) Supermajorities LISTED (treaties 2/3, impeachment 2/3, amendments 2/3, override 2/3) → absence for ordinary legislation suggests simple majority intended. (3) Reconciliation within rules-of-proceedings. (4) Byrd Rule preserves broader deliberation for non-budget. (5) New Deal + Great Society = simple-majority passage when one party had Senate supermajority — reconciliation = functional equivalent when filibuster exists.'
          }
        ]
      }
    },
    {
      id: 'govcong6-input',
      type: 'input-boxes' as const,
      content: `**Identification — Apply the framework to historical examples**`,
      exercise: {
        questions: [
          {
            prompt: "The 2010 Affordable Care Act passed via what procedural workaround after Senate Democrats lost their 60-vote majority in February 2010?",
            answer: 'reconciliation',
            acceptableAnswers: ['reconciliation', 'Reconciliation', 'budget reconciliation'],
            hint: 'Used to amend the Senate-passed bill after the House passed it without further Senate amendments.'
          },
          {
            prompt: "The senator whose objections forced Democrats to scale back Build Back Better into the smaller IRA 2022 (West Virginia Democrat). Two words.",
            answer: 'Joe Manchin',
            acceptableAnswers: ['Joe Manchin', 'joe manchin', 'Manchin'],
            hint: 'Centrist Democrat from coal-state West Virginia; left party in 2024.'
          },
          {
            prompt: "The Senate procedure that requires 60 votes to overcome unlimited debate. One word.",
            answer: 'cloture',
            acceptableAnswers: ['cloture', 'Cloture'],
            hint: 'Rule 22 adopted 1917 (then 2/3); changed to 3/5 (60 votes) in 1975.'
          }
        ]
      }
    },
    {
      id: 'govcong6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each foundational document to its connection to Congress.**`,
      exercise: {
        dropdowns: [
          {
            label: "Defends bicameralism + checks; 'ambition must be made to counteract ambition': ___",
            options: ['Federalist 10 (Madison)', 'Federalist 51 (Madison)', 'Federalist 70 (Hamilton)', 'Brutus 1 (Anti-Federalist)']
          },
          {
            label: "Argues that a large republic with many factions checks tyranny of any single majority faction: ___",
            options: ['Federalist 10 (Madison)', 'Federalist 51 (Madison)', 'Federalist 70 (Hamilton)', 'Brutus 1 (Anti-Federalist)']
          },
          {
            label: "Warns that the Necessary and Proper Clause will allow Congress to swallow state authority: ___",
            options: ['Federalist 10 (Madison)', 'Federalist 51 (Madison)', 'Federalist 70 (Hamilton)', 'Brutus 1 (Anti-Federalist)']
          }
        ],
        correctAnswers: ['Federalist 51 (Madison)', 'Federalist 10 (Madison)', 'Brutus 1 (Anti-Federalist)'],
        hint1: 'Federalist 51 = double security via separation of powers + federalism.',
        hint2: 'Federalist 10 = anti-faction; large republic refines + enlarges public views.',
        hint3: 'Brutus 1 = leading Anti-Federalist warning against expansive federal authority.'
      }
    },
    {
      id: 'govcong6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Comprehensive Application**`,
      exercise: {
        questions: [
          {
            question: "AP comprehensive prompt: 'Apply the 5-step framework to explain why Congress has been unable to pass major immigration reform despite ~30 years of bipartisan attempts (1990s-present).'",
            options: [
              "Congress has clear authority, but divisions within and between the parties, the filibuster, and primary pressures keep any deal from passing",
              "Congress lacks constitutional authority over immigration, which belongs to the states, so only state legislatures can pass reform",
              "The Supreme Court has barred Congress from changing immigration law until the states ratify an amendment granting Congress that power, so no bill can pass",
              "Both parties agree on reform, but the President has vetoed every immigration bill passed since the 1990s"
            ],
            correctAnswer: 0,
            explanation: 'Immigration gridlock 5-step: (1) CONSTITUTIONAL — Art I § 8 cl 4 clear authority. (2) POLITICAL — deep partisan division; both parties internally divided (Republicans business-pro vs. nativist; Democrats labor-restriction vs. civil-rights legalization). (3) PROCEDURAL — Senate filibuster needs 60; reconciliation unavailable (Byrd Rule); committee gatekeeping. (4) INSTITUTIONAL — Republican primary voters punish "amnesty" (Eric Cantor 2014 primary loss); swing-district Democrats vulnerable on enforcement. (5) HISTORICAL — 1986 Simpson-Mazzoli last comprehensive; Gang of Eight 2013 (68-32 Senate) died in House; Trump 2018, Biden 2021 USCA failed. Cross-cutting cleavages within both parties → broad coalition extremely difficult.'
          },
          {
            question: "Which best illustrates the relationship between the Mayhew 'reelection imperative' and modern congressional behavior?",
            options: [
              "Members act as single-minded seekers of reelection, so they focus on advertising, credit claiming, and position taking for voters back home",
              "Members act mainly as trustees for the nation, so they ignore district opinion, avoid publicity, and rarely seek credit for local projects",
              "Members act as agents of their party leaders, voting as instructed because reelection is guaranteed for incumbents in nearly every district in the country",
              "Members usually serve a single term by custom, so reelection plays little role in how they vote"
            ],
            correctAnswer: 0,
            explanation: 'Mayhew reelection imperative: Congress: The Electoral Connection 1974 — members "single-minded seekers of reelection." Modern evidence: (1) advertising (franked mail, social media); credit-claiming (district projects); position-taking (high-visibility roll calls); (2) GERRYMANDERED safe districts → primaries the threat → party orthodoxy; (3) FUNDRAISING ~30% time; (4) PARTY HOMOGENEITY → voting with leadership = voting for reelection (cross-party = primary challenge); (5) NEGATIVE PARTISANSHIP punishes cooperation; (6) modern members vote with party ~95%; bipartisan deal-making electorally risky; institutional norms weaken. Mayhew remains dominant explanation.'
          }
        ]
      }
    }
  ]
}
