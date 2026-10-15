export const govCongressPart2Data = {
  topicSlug: 'gov-congress',
  sections: [
    {
      id: 'govcong2-intro',
      type: 'text' as const,
      content: `
# 🏛️ Congress

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Lawmaking process: bill to law |
| Committee system: standing, select, joint, conference |
| Budget process: authorization vs appropriation; reconciliation |
| Filibuster + cloture + reconciliation workarounds |

> 🔑 Key idea: The legislative process is intentionally difficult — bicameralism + presentment + committee gatekeeping + Senate filibuster create multiple veto points designed to require broad consensus before federal law passes.
      `
    },
    {
      id: 'govcong2-content',
      type: 'text' as const,
      content: `
## Lawmaking Process: Bill to Law

| Step | What happens | Where |
|---|---|---|
| 1. Introduction | Member introduces bill (HR for House, S for Senate); revenue bills MUST originate in House (Art I § 7) | House or Senate |
| 2. Committee referral | Speaker / Majority Leader refers to relevant committee | Standing committee |
| 3. Subcommittee + committee markup | Hearings, amendments, vote; ~90% of bills die here | Committee |
| 4. Rules Committee (House) | Sets terms of floor debate (closed, open, modified rules) | House Rules Committee |
| 5. Floor debate + vote | Simple majority required; House restrictive, Senate filibuster-vulnerable | Full chamber |
| 6. Other chamber repeats | Bill goes through committee + floor in other chamber | Other chamber |
| 7. Conference committee | Reconciles House + Senate versions if different | Joint conference committee |
| 8. Final passage | Both chambers must pass identical text | Both chambers |
| 9. Presentment | Sent to President (Art I § 7) | President's desk |
| 10. President's options | Sign (becomes law); veto (returns to Congress; 2/3 override required); pocket veto (10 days no signature + Congress adjourned = dies); take no action 10 days while Congress in session (becomes law without signature) | White House |

## Committee System

| Type | Description | Examples |
|---|---|---|
| **Standing** | Permanent; consider bills in their subject area | House Ways and Means; Senate Judiciary; House Appropriations |
| **Select** | Temporary; investigate specific issues | Select Committee on January 6 (2021-22); Select Committee on Benghazi (2014-16) |
| **Joint** | Members from both chambers; usually advisory | Joint Economic Committee; Joint Committee on Taxation |
| **Conference** | Temporary; reconciles House + Senate versions of same bill | Created ad hoc for major legislation |

## Powerful Standing Committees

| Committee | Function | Why powerful |
|---|---|---|
| House Ways and Means | All revenue legislation (tax bills) | Constitutional revenue-origination requirement makes this gatekeeper |
| House Appropriations | All federal spending | Power of the purse |
| Senate Finance | Senate counterpart to Ways and Means | Tax + Social Security + Medicare |
| Senate Appropriations | Senate spending | Power of the purse |
| Senate Judiciary | Judicial nominations | Confirms federal judges + SCOTUS justices |
| House Rules | Sets terms of floor debate | Controls what bills reach floor + how |

## Budget Process

| Stage | Action | Who |
|---|---|---|
| 1. President's budget | Proposal sent to Congress (typically February) | OMB + President |
| 2. Congressional Budget Resolution | Sets overall spending + revenue targets | Budget Committees |
| 3. Authorization | Statutes creating + structuring federal programs | Authorization committees (e.g., Armed Services) |
| 4. Appropriation | 12 separate appropriations bills providing actual funding | Appropriations Committees |
| 5. Reconciliation | Optional fast-track procedure (no Senate filibuster); bypasses 60-vote requirement | Per Budget Act 1974 |

## Filibuster + Cloture + Reconciliation

| Mechanism | Description | Significance |
|---|---|---|
| **Filibuster** | Senator can speak indefinitely or refuse to allow vote (threat alone often sufficient — 'silent filibuster'); requires 60 votes to overcome | Effectively raises Senate threshold from 51 to 60 for most legislation |
| **Cloture** | Procedure to end debate; requires 60 votes (changed from 67 in 1975) | Bypassed for executive nominations (50 votes since 2013 'nuclear option') and Supreme Court nominations (50 votes since 2017) |
| **Reconciliation** | Optional fast-track procedure for budget-related legislation; cannot be filibustered | Used for major tax + spending: Bush tax cuts 2001/2003; ACA 2010 (parts); Trump tax cuts 2017; ARPA 2021; IRA 2022 |

> 🔑 Key takeaway: The lawmaking process has multiple veto points (committee gatekeeping, filibuster, presidential veto), making major legislation difficult; reconciliation has emerged as the key workaround for partisan major legislation.
      `
    },
    {
      id: 'govcong2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Lawmaking Process** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the role of committees in the lawmaking process?",
            options: [
              "Committees act as gatekeepers, holding hearings and marking up bills, and most bills referred to them die there without ever reaching a vote on the floor",
              "Committees only schedule floor debate, while the full chamber writes, amends, and reviews each bill line by line",
              "Committees vote on final passage of bills, so a bill approved in committee becomes law without a floor vote",
              "Committees are temporary panels formed for each new bill and disbanded right after the floor vote"
            ],
            correctAnswer: 0,
            explanation: 'Committees = central GATEKEEPERS: ~90% of bills die in committee. Committee chairs (majority party) have substantial agenda power. Committees hold hearings (experts + interest groups + agencies), markup (debate + amend), vote to report. Wilson 1885 "Congressional Government." Reflects policy specialization needed. Powerful: House Ways and Means (tax), House + Senate Appropriations (spending), Senate Judiciary (nominations).'
          },
          {
            question: "Which best describes the modern significance of the Senate filibuster and reconciliation?",
            options: [
              "The filibuster makes most bills need 60 votes for cloture, while reconciliation lets budget measures pass the Senate by simple majority",
              "The filibuster lets the House block Senate bills by unlimited debate, while reconciliation requires 67 votes for any budget measure to pass",
              "The filibuster was abolished for all legislation in 2013, while reconciliation now requires 60 votes for any spending, tax, or debt measure",
              "The filibuster applies only to judicial nominations, while reconciliation lets the President pass a budget without any congressional vote at all"
            ],
            correctAnswer: 0,
            explanation: 'Filibuster: any senator can speak indefinitely or block vote; cloture requires 60 (changed from 67 in 1975). Frequent post-1993 use → gridlock when no 60. Reconciliation (Budget Act 1974, fast-track for budget-related) = key WORKAROUND, immune from filibuster. Used: Bush tax 2001/2003, ACA 2010 parts, Trump tax 2017, ARPA 2021, IRA 2022. Nuclear option 2013 + 2017 eliminated filibuster for executive + judicial nominations including SCOTUS.'
          }
        ]
      }
    },
    {
      id: 'govcong2-input',
      type: 'input-boxes' as const,
      content: `**Identification — process terminology**`,
      exercise: {
        questions: [
          {
            prompt: "The Senate procedure to end debate on a bill, requiring 60 votes since 1975. One word.",
            answer: 'cloture',
            acceptableAnswers: ['cloture', 'Cloture'],
            hint: 'Replaced the 2/3 (67-vote) requirement; allows the Senate to bypass a filibuster.'
          },
          {
            prompt: "Optional Senate fast-track procedure for budget-related legislation that cannot be filibustered (created by the Budget Act of 1974). One word.",
            answer: 'reconciliation',
            acceptableAnswers: ['reconciliation', 'Reconciliation', 'budget reconciliation'],
            hint: 'Used for Bush tax cuts 2001/2003, parts of ACA 2010, Trump tax cuts 2017, ARPA 2021, IRA 2022.'
          },
          {
            prompt: "The temporary committee created to reconcile differing House and Senate versions of the same bill. Two words.",
            answer: 'conference committee',
            acceptableAnswers: ['conference committee', 'Conference Committee', 'Conference committee'],
            hint: 'Members from both chambers; produces single text that both chambers must vote on; ad hoc.'
          }
        ]
      }
    },
    {
      id: 'govcong2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each step to its place in the lawmaking process.**`,
      exercise: {
        dropdowns: [
          {
            label: "Where revenue bills MUST originate (Art I § 7): ___",
            options: ['House of Representatives', 'Senate', 'White House', 'Either chamber freely']
          },
          {
            label: "What sets terms of floor debate in the House (closed, open, modified rules): ___",
            options: ['Speaker', 'Majority Leader', 'House Rules Committee', 'Committee of the Whole']
          },
          {
            label: "Vote required in both chambers to override a presidential veto: ___",
            options: ['Simple majority (51%)', '3/5 supermajority (60%)', '2/3 supermajority (67%)', '3/4 supermajority (75%)']
          }
        ],
        correctAnswers: ['House of Representatives', 'House Rules Committee', '2/3 supermajority (67%)'],
        hint1: 'Origination Clause Art I § 7 — gives the House control over taxation as the more democratic chamber.',
        hint2: 'Speaker controls Rules Committee membership but Rules Committee formally sets terms.',
        hint3: 'Article I § 7 — same for both chambers.'
      }
    },
    {
      id: 'govcong2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "Why has reconciliation become the dominant vehicle for major legislation in the modern Congress?",
            options: [
              "Frequent filibusters and polarization make 60 votes rare, so majorities turn to reconciliation because it needs only 51 votes for budget-related bills",
              "The Constitution requires all major laws to pass through reconciliation, which the framers created to protect small states",
              "Reconciliation lets bills skip committees and the House entirely, so senators prefer it for every type of policy including civil rights and immigration",
              "Reconciliation bills cannot be vetoed by the President, which makes them the safest vehicle for major legislation"
            ],
            correctAnswer: 0,
            explanation: 'Reconciliation dominant because: (1) FILIBUSTER USE: frequent post-1993 → impossible without 60 Senate seats (rare: brief 2009-10, 2021); (2) POLARIZATION: parties rarely cooperate on major economics → no bipartisan 60; (3) IMMUNITY: Budget Act 1974 → cannot be filibustered; budget-related (Byrd Rule) passes 51; (4) BIPARTISAN PRECEDENT: Republicans (Bush 2001/2003, Trump 2017), Democrats (ACA 2010 parts, ARPA 2021, IRA 2022). Nearly all major economic legislation now reconciliation not regular order.'
          },
          {
            question: "What is the constitutional + political significance of the Origination Clause (Art I § 7), which requires revenue bills to originate in the House?",
            options: [
              "Revenue bills must start in the House as the chamber closest to the voters, though the Senate may amend them and can reshape them heavily",
              "Revenue bills must start in the Senate because senators represent whole states, and the House may only approve or reject them without making any amendment",
              "All bills of every kind must start in the House, so the Senate may never introduce its own legislation",
              "Revenue bills must start in the House, and the Senate is barred from changing a single word before voting on them"
            ],
            correctAnswer: 0,
            explanation: 'Origination Clause (Art I § 7 cl 1): "All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills." CONSTITUTIONAL: framers lodged taxing power in more democratic chamber (House population-based) vs. Senate (originally state legislatures) — British "taxation requires representation." POLITICAL: Senate amendment power eroded House advantage — Senate routinely "amends" by replacing entire text (SCOTUS accepted); nonetheless House Ways and Means remains powerful; shapes tax legislation choreography.'
          }
        ]
      }
    }
  ]
}
