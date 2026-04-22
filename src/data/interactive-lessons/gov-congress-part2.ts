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
              "Committees serve as the legislative process's central GATEKEEPING institutions: ~90% of bills introduced in Congress die in committee without ever receiving a floor vote, giving committee chairs (selected by majority party) substantial power over which legislation advances; committees hold hearings (gathering expert + interest-group + agency testimony), conduct markup sessions (debating and amending bill text), and vote on whether to report the bill to the full chamber; the standing committee system (Wilson called it 'Congressional Government' in 1885) reflects the policy specialization required to legislate intelligently across the federal government's vast scope; powerful committees include House Ways and Means (all tax legislation), House + Senate Appropriations (all spending), and Senate Judiciary (all judicial nominations)",
              "There are no committees of any kind in Congress during the entire period from 1789 onward in any region of the United States with no standing committees, no select committees, no joint committees, no conference committees, no House Ways and Means, no Senate Judiciary, and no committee gatekeeping of any kind during the entire period in any region",
              "Committees have no gatekeeping role and all bills introduced in Congress automatically receive floor votes of any kind under any circumstance with no committee hearings, no markup, no committee referral, and no committee chair authority of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Committees exist only in the House and not in the Senate of any kind under any circumstance with no Senate Judiciary, no Senate Appropriations, no Senate Finance, and no Senate Foreign Relations of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Committees = central GATEKEEPERS: ~90% of bills die in committee. Committee chairs (majority party) have substantial agenda power. Committees hold hearings (experts + interest groups + agencies), markup (debate + amend), vote to report. Wilson 1885 "Congressional Government." Reflects policy specialization needed. Powerful: House Ways and Means (tax), House + Senate Appropriations (spending), Senate Judiciary (nominations).'
          },
          {
            question: "Which best describes the modern significance of the Senate filibuster and reconciliation?",
            options: [
              "The FILIBUSTER (any senator's right to speak indefinitely or refuse to allow a vote) effectively raises the Senate threshold for most legislation from 51 to 60 votes via the cloture rule (60 votes required since 1975, formerly 67); modern frequent filibuster use (post-1993) has produced legislative gridlock when neither party reaches 60 seats; RECONCILIATION (optional fast-track procedure for budget-related legislation under the Budget Act 1974, immune from filibuster) has emerged as the key WORKAROUND, used for nearly all major partisan legislation: Bush tax cuts (2001, 2003), parts of the ACA (2010), Trump tax cuts (2017), Biden's American Rescue Plan (2021), Inflation Reduction Act (2022); the 'nuclear option' (2013 + 2017) eliminated the filibuster for executive + judicial nominations including Supreme Court justices",
              "There is no filibuster of any kind in the Senate during the entire period from 1789 onward in any region of the United States with no cloture rule, no 60-vote requirement, no reconciliation, no Budget Act of 1974, no nuclear option, no Bush tax cuts, no ACA, no Trump tax cuts, no ARPA, and no IRA of any kind during the entire period in any region",
              "The filibuster requires only 51 votes to overcome and has not produced any legislative gridlock of any kind under any circumstance with no cloture rule, no 60-vote requirement, no reconciliation workaround, and no nuclear option of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Reconciliation has never been used for major legislation of any kind under any circumstance with no Bush tax cuts, no ACA, no Trump tax cuts, no ARPA, no IRA, and no Budget Act of 1974 fast-track procedure of any kind during the entire period from 1974 onward in any region of the United States during the period"
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
              "Reconciliation has become the dominant vehicle for major legislation because: (1) RISE OF FILIBUSTER USE — frequent filibusters since the early 1990s have made it nearly impossible to pass major legislation when the majority party lacks 60 Senate seats (rare in modern era — only briefly in 2009-10 + 2021); (2) PARTISAN POLARIZATION — the parties rarely cooperate on major economic legislation, eliminating bipartisan paths to 60 votes; (3) RECONCILIATION'S IMMUNITY — created by the Budget Act 1974, reconciliation cannot be filibustered, so a bill that fits within budget-related restrictions (Byrd Rule) can pass with 51 votes; (4) BIPARTISAN PRECEDENT — both parties have used it (Bush tax cuts 2001/2003 — Republicans; parts of ACA 2010 — Democrats; Trump tax cuts 2017 — Republicans; ARPA 2021 + IRA 2022 — Democrats); the result is that nearly all major economic legislation passes through reconciliation rather than the regular order",
              "Reconciliation has not become a dominant vehicle for major legislation of any kind during the entire period from 1974 onward in any region of the United States with no filibuster, no Budget Act of 1974, no 60-vote requirement, no Byrd Rule, no Bush tax cuts, no ACA, no Trump tax cuts, no ARPA, and no IRA of any kind during the entire period in any region",
              "Reconciliation requires 67 votes in the Senate and is therefore harder to pass than regular legislation of any kind under any circumstance with no immunity from filibuster, no Byrd Rule, and no fast-track procedure of any kind during the entire period from 1974 onward in any region of the United States during the period",
              "There is no Byrd Rule, no Budget Act of 1974, no Senate filibuster, and no partisan polarization of any kind during the entire period from 1974 onward in any region of the United States with no Bush tax cuts, no ACA, no Trump tax cuts, no ARPA, and no IRA of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Reconciliation dominant because: (1) FILIBUSTER USE: frequent post-1993 → impossible without 60 Senate seats (rare: brief 2009-10, 2021); (2) POLARIZATION: parties rarely cooperate on major economics → no bipartisan 60; (3) IMMUNITY: Budget Act 1974 → cannot be filibustered; budget-related (Byrd Rule) passes 51; (4) BIPARTISAN PRECEDENT: Republicans (Bush 2001/2003, Trump 2017), Democrats (ACA 2010 parts, ARPA 2021, IRA 2022). Nearly all major economic legislation now reconciliation not regular order.'
          },
          {
            question: "What is the constitutional + political significance of the Origination Clause (Art I § 7), which requires revenue bills to originate in the House?",
            options: [
              "The ORIGINATION CLAUSE (Art I § 7 cl. 1) requires that 'All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills'; CONSTITUTIONAL significance: reflects the framers' decision to lodge the taxing power in the more democratic chamber (the House, directly elected from population-based districts) rather than the Senate (originally elected by state legislatures), echoing the British constitutional tradition that 'taxation requires representation'; POLITICAL significance: the Senate's amendment power has substantially eroded the House's nominal advantage — the Senate routinely 'amends' tax bills by replacing the entire House text, a practice the Supreme Court has accepted; nonetheless, the House Ways and Means Committee remains one of the most powerful in Congress, and the Origination Clause shapes the choreography of major tax legislation",
              "There is no Origination Clause of any kind in the Constitution during the entire period from 1789 onward in any region of the United States with no Article I § 7, no House revenue origination requirement, no Senate amendment power, no Ways and Means Committee, and no British constitutional tradition of any kind during the entire period in any region",
              "The Origination Clause requires revenue bills to originate in the SENATE rather than the House of any kind under any circumstance with no House Ways and Means Committee gatekeeping, no Article I § 7, and no 'taxation requires representation' tradition of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "The Origination Clause has no political significance because the Senate has no amendment power on revenue bills of any kind under any circumstance with no Senate Finance Committee, no Senate revenue legislation participation, and no inter-chamber negotiation of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Origination Clause (Art I § 7 cl 1): "All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills." CONSTITUTIONAL: framers lodged taxing power in more democratic chamber (House population-based) vs. Senate (originally state legislatures) — British "taxation requires representation." POLITICAL: Senate amendment power eroded House advantage — Senate routinely "amends" by replacing entire text (SCOTUS accepted); nonetheless House Ways and Means remains powerful; shapes tax legislation choreography.'
          }
        ]
      }
    }
  ]
}
