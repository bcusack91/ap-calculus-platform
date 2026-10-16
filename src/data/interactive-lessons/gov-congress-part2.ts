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
| Budget process: authorization vs appropriation; mandatory vs discretionary spending |
| Chamber rules: filibuster, cloture, holds, unanimous consent, discharge petitions |

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
| 5. Mandatory vs discretionary | MANDATORY spending (Social Security, Medicare, Medicaid) is required by law; DISCRETIONARY spending (defense, education, infrastructure) is approved each year — as entitlements grow, discretionary room shrinks unless revenue or deficits rise (EK 2.2.A.4) | Whole Congress |

## Chamber-Specific Rules (EK 2.2.A.3)

| Mechanism | Chamber | Description | Significance |
|---|---|---|---|
| **Speaker + Rules Committee** | House | Speaker (elected by a majority of members) presides; the Rules Committee sets the terms of debate for each bill | Majority party controls the House floor |
| **Committee of the Whole** | House | The full House sits as one large committee to speed debate | Fewer formal requirements (smaller quorum) |
| **Discharge petition** | House | A petition signed by a majority of members (218) forces a bill out of committee to the floor | Rarely succeeds — a check on committee gatekeeping |
| **Unanimous consent** | Senate | Bills typically reach the floor by unanimous agreement | Any one senator can object |
| **Hold** | Senate | A senator signals objection to keep a bill or nomination off the floor | Gives individual senators leverage |
| **Filibuster** | Senate | Senator can speak indefinitely or refuse to allow a vote (threat alone often sufficient) | Effectively raises the Senate threshold from 51 to 60 for most legislation |
| **Cloture** | Senate | Motion to end debate; requires 60 votes for legislation | The only way to overcome a filibuster |

> 🔑 Key takeaway: The lawmaking process has multiple veto points (committee gatekeeping, Senate holds and filibusters, presidential veto), making major legislation difficult — the framers' design for deliberation, and a source of gridlock in polarized times (EK 2.3.A.1).
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
            question: "Which best describes how Senate procedures let a minority of senators block a bill?",
            options: [
              "A senator can place a hold or filibuster, and ending debate takes a cloture vote of 60",
              "Any senator can veto a bill passed by the House, and only the Speaker can override that veto with a vote of the full Congress",
              "The Senate Rules Committee can refuse to schedule a bill, and only a discharge petition signed by every senator can free it",
              "The Vice President can filibuster any bill, and debate ends only when the President signs an order ending it"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.2.A.3.ii: in the Senate, bills usually reach the floor by unanimous consent, but a senator may place a HOLD to keep a bill off the floor; during debate a senator can FILIBUSTER, and only a CLOTURE motion (60 votes for legislation) ends debate. Senators do not veto House bills, the Rules Committee and discharge petitions are House procedures, and the Vice President does not filibuster.'
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
            prompt: "The rarely used House procedure in which a majority of members sign on to force a bill out of committee and onto the floor. Two words.",
            answer: 'discharge petition',
            acceptableAnswers: ['discharge petition', 'Discharge petition', 'Discharge Petition', 'discharge'],
            hint: 'EK 2.2.A.3.i — needs 218 signatures.'
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
            question: "Spending on Social Security, Medicare, and Medicaid is growing faster than federal revenue. Unless taxes rise or the deficit grows, what is the most likely effect on the rest of the budget?",
            options: [
              "Room for the discretionary spending Congress approves each year shrinks",
              "Entitlement spending stops growing on its own",
              "The President may cut entitlement benefits without any approval from Congress",
              "Defense spending rises automatically, since it is mandatory spending set by the Constitution"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.2.A.4: MANDATORY spending is required by law for entitlement programs such as Social Security, Medicare, and Medicaid; DISCRETIONARY spending (defense, education, infrastructure) is approved annually. As entitlement costs grow, discretionary spending opportunities decrease unless tax revenues increase or the deficit increases. Entitlement growth is driven by law and demographics, the President cannot cut benefits alone, and defense is discretionary, not mandatory.'
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
