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
| Worked example: Civil Rights Act of 1964 (cloture) |
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
| 3. PROCEDURAL | What congressional rules + procedures apply? | Committee referral; filibuster + cloture (60 votes); holds + unanimous consent; Rules Committee terms; discharge petitions; conference committee |
| 4. INSTITUTIONAL | What institutional incentives drive members? | Reelection (Mayhew); committee assignments; party loyalty; constituency interests; donor concerns |
| 5. HISTORICAL | What historical pattern fits? | New Deal coalition; Conservative Coalition; Reagan revolution; Gingrich revolution; modern polarization |

## Worked Example: Civil Rights Act of 1964 (Cloture)

> ⚡ Question: Apply the 5-step framework to explain how the Civil Rights Act of 1964 — which the CED names as a government response to the civil rights movement (EK 3.11.A.1.ii) — passed Congress despite a determined Southern filibuster.

| Step | Application |
|---|---|
| 1. **CONSTITUTIONAL** | Congress relied on its Commerce Clause power (Art I § 8 cl. 3) to ban discrimination in public accommodations and on the 14th Amendment's enforcement power; bicameralism + presentment satisfied (House 290-130; Senate 73-27; signed by Johnson July 2, 1964) |
| 2. **POLITICAL** | Large Democratic majorities, but Southern Democrats opposed; momentum from the civil rights movement (Birmingham, March on Washington 1963) and from Kennedy's assassination; President Johnson used bargaining and persuasion (EK 2.4.A.2.iii) |
| 3. **PROCEDURAL** | House Rules Committee chair Howard Smith (D-VA) bottled up the bill; Judiciary chair Emanuel Celler filed a DISCHARGE PETITION (EK 2.2.A.3.i), and although it fell short of a majority, mounting support pushed Smith to hold hearings and release the bill; in the Senate, Southern senators FILIBUSTERED for about 60 working days until the Senate voted CLOTURE 71-29 on June 10, 1964 (then 67 votes were required) — the first successful cloture vote on a civil rights bill |
| 4. **INSTITUTIONAL** | Minority Leader Everett Dirksen (R-IL) delivered Republican votes in exchange for amendments; members weighed constituency pressure (delegate role) against their own judgment (trustee role) (EK 2.3.A.4) |
| 5. **HISTORICAL** | Broke the Conservative Coalition's hold on civil rights; followed by the Voting Rights Act of 1965 (EK 3.11.A.1.iv); shows that the filibuster can be overcome when a broad, bipartisan coalition exists |

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
| **Supporting evidence 2** | Use one piece of evidence from a SECOND DIFFERENT source (e.g., a required SCOTUS case like McCulloch or Lopez; or a specific historical example like the New Deal, the Civil Rights Act of 1964, or a recent shutdown) |
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
            question: "AP analysis prompt: 'Develop an argument that explains whether the Senate filibuster undermines the framers' design for Congress.' What is the strongest argument that the filibuster DOES undermine the framers' design?",
            options: [
              "The Constitution lists the few actions that need supermajorities, so letting 41 senators block ordinary bills departs from the framers' majority rule",
              "The filibuster lets the President write laws alone, which removes Congress from the process the framers designed",
              "The filibuster violates the Origination Clause, since every filibustered bill starts in the Senate",
              "Article I forbids each chamber from setting its own rules, so any filibuster is unconstitutional"
            ],
            correctAnswer: 0,
            explanation: 'Strongest DOES-undermine argument: the Constitution spells out the few actions that need supermajorities (veto override, treaties, impeachment conviction, amendments); ordinary lawmaking was meant to need simple majorities in each chamber. A filibuster (EK 2.2.A.3.ii) that only CLOTURE can end lets a minority of 41 senators block bills, contributing to GRIDLOCK in polarized times (EK 2.3.A.1). The President does not write laws, filibusters have nothing to do with the Origination Clause, and Article I § 5 lets each chamber set its own rules.'
          },
          {
            question: "What is the strongest counter-argument that the filibuster does NOT undermine the framers' design?",
            options: [
              "The framers built the Senate to slow hasty majorities, and a rule demanding broad support fits that design",
              "Article I itself creates the filibuster, so using it simply follows the procedure the framers spelled out in the original Constitution",
              "The filibuster requires two-thirds of the House to end debate, so it protects the people's chamber from the more aristocratic Senate",
              "The Supreme Court has ordered the Senate to keep the filibuster, which means it cannot conflict with the framers' design in any way"
            ],
            correctAnswer: 0,
            explanation: 'Strongest counter: the framers deliberately designed the Senate — six-year terms, equal state representation, smaller size — to cool popular passions and slow hasty majorities (Federalist 51\'s internal checks). Article I § 5 lets each chamber make its own rules, and a rule that forces broader coalitions fits that deliberative purpose. The filibuster is a Senate rule, not part of Article I; it has nothing to do with the House; and no court has ordered it.'
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
            prompt: "The Senate tactic of prolonging debate to delay or prevent a vote on a bill, used against the Civil Rights Act of 1964. One word.",
            answer: 'filibuster',
            acceptableAnswers: ['filibuster', 'Filibuster'],
            hint: 'EK 2.2.A.3.ii.'
          },
          {
            prompt: "The representation model in which a member votes based on his or her own knowledge and judgment rather than constituents' wishes. One word.",
            answer: 'trustee',
            acceptableAnswers: ['trustee', 'Trustee', 'trustee model'],
            hint: 'EK 2.3.A.4 — contrast with delegate and politico.'
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
            explanation: 'Immigration gridlock 5-step: (1) CONSTITUTIONAL — Art I § 8 cl 4 clear authority. (2) POLITICAL — deep partisan division; both parties internally divided (Republicans business-pro vs. nativist; Democrats labor-restriction vs. civil-rights legalization). (3) PROCEDURAL — Senate filibuster needs 60 for cloture; committee gatekeeping. (4) INSTITUTIONAL — Republican primary voters punish "amnesty" (Eric Cantor 2014 primary loss); swing-district Democrats vulnerable on enforcement. (5) HISTORICAL — 1986 Simpson-Mazzoli last comprehensive; Gang of Eight 2013 (68-32 Senate) died in House; Trump 2018, Biden 2021 USCA failed. Cross-cutting cleavages within both parties → broad coalition extremely difficult.'
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
