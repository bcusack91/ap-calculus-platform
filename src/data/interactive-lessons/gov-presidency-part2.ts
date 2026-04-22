export const govPresidencyPart2Data = {
  topicSlug: 'gov-presidency',
  sections: [
    {
      id: 'govpres2-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Presidency

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Veto + pocket veto + override |
| Treaty negotiation + Senate ratification |
| Appointment + advice and consent |
| Executive orders + executive agreements + signing statements |

> 🔑 Key idea: Modern presidents wield a mix of constitutional + statutory + customary processes — the **veto** is a defensive legislative tool; **executive orders** + **executive agreements** are unilateral powers that bypass Congress; **appointments** require Senate cooperation and shape both the executive branch and the federal judiciary for decades.
      `
    },
    {
      id: 'govpres2-content',
      type: 'text' as const,
      content: `
## The Presidential Veto

### Article I § 7 — Presentment + Veto Process

| Step | Substance |
|---|---|
| 1. Both chambers pass identical bill | Required by bicameralism + Presentment Clause |
| 2. Bill presented to President | Begins 10-day clock (excluding Sundays) |
| 3. President's options | Sign → law; Veto → returned to originating chamber with objections; Take no action AND Congress in session for 10 days → law without signature; Take no action AND Congress adjourns within 10 days → POCKET VETO (no override possible) |
| 4. Override | If returned veto: each chamber needs 2/3 of those present + voting to override; if 2/3 in both → bill becomes law over veto |

### Veto Statistics by Modern President

| President | Regular vetoes | Pocket vetoes | Total | Overridden |
|---|---|---|---|---|
| FDR (1933-45) | 372 | 263 | 635 | 9 |
| Truman | 180 | 70 | 250 | 12 |
| Eisenhower | 73 | 108 | 181 | 2 |
| Reagan | 39 | 39 | 78 | 9 |
| GHW Bush | 29 | 15 | 44 | 1 |
| Clinton | 36 | 1 | 37 | 2 |
| GW Bush | 11 | 1 | 12 | 4 |
| Obama | 12 | 0 | 12 | 1 |
| Trump (term 1) | 10 | 0 | 10 | 1 |
| Biden | 13 | 0 | 13 | 0 |

> 📊 Pattern: Veto override is rare (~5% of regular vetoes); the veto threat alone often forces compromise legislation.

### Pocket Veto

| Feature | Detail |
|---|---|
| Trigger | Congress adjourns sine die within 10 days of presenting bill |
| Effect | Bill dies; President cannot be overridden because Congress is not in session to receive vetoed bill |
| Modern usage | Reduced because Congresses now usually stay technically in session via pro forma sessions |

### Line-Item Veto — Unconstitutional

| Year | Event |
|---|---|
| 1996 | Line Item Veto Act passed (allowing president to cancel specific spending + tax provisions) |
| 1998 | *Clinton v. New York* struck down as violating Presentment Clause — president cannot edit legislation |

## Treaty Power vs. Executive Agreement

| Type | Process | Examples |
|---|---|---|
| **Treaty (Art II § 2 cl. 2)** | Negotiated by President; ratified by 2/3 of Senate (67); supreme law of the land | NATO 1949 (82-13), START I 1991 (93-6), New START 2010 (71-26) |
| **Executive agreement** | President alone (no Senate ratification); binding on signatory administration | Iran nuclear deal (JCPOA) 2015, Paris Climate Accord 2015, U.S.-Mexico-Canada Agreement (statutory authorization) |
| **Congressional-executive agreement** | Negotiated by President; approved by simple majority of both chambers | NAFTA 1993, USMCA 2020 |

> 📊 Pattern: Modern presidents make ~10:1 ratio of executive agreements to treaties — the executive agreement is the dominant modern instrument of foreign policy.

## Appointment Power + Senate Confirmation

### Article II § 2 cl. 2 — Appointments Clause

| Officer type | Process |
|---|---|
| Principal officers (Cabinet, ambassadors, federal judges) | Presidential nomination + Senate majority confirmation |
| Inferior officers | Same OR Congress vests appointment in President alone, courts, or department heads (per Necessary and Proper) |

### Modern Confirmation Practice

| Office | Confirmation pattern |
|---|---|
| Cabinet secretaries | Generally confirmed quickly — recent rejections rare (Tower 1989, Lynn 2017 withdrew, several Trump 2025 withdrawals) |
| Sub-Cabinet (Senate-confirmed appointments ~1,200) | Significant delays; partisan holds common |
| Federal judges (district, circuit) | Increasingly contested; "blue slip" tradition for home-state senators |
| Supreme Court justices | Highly contested — modern confirmation hearings often partisan; Kavanaugh 2018 (50-48), Barrett 2020 (52-48), Jackson 2022 (53-47) |
| Recess appointments | Limited by *NLRB v. Noel Canning* 2014 — Senate must be in recess for at least 10 days |

## Executive Orders

### Definition + Constitutional Basis

| Element | Detail |
|---|---|
| **Definition** | Presidential directive to executive-branch officials with force of law as long as consistent with statute + Constitution |
| **Constitutional basis** | Vesting Clause + Take Care Clause + statutory delegations |
| **Subject to override** | Congress can override by enacting statute; courts can strike down as exceeding authority; subsequent presidents can rescind |

### Famous Modern Executive Orders

| Order | Year | Subject |
|---|---|---|
| EO 8802 (FDR) | 1941 | Banned racial discrimination in defense industries |
| EO 9066 (FDR) | 1942 | Authorized Japanese-American internment (upheld in *Korematsu* 1944, repudiated 2018) |
| EO 9981 (Truman) | 1948 | Desegregated armed forces |
| EO 10925 (JFK) | 1961 | Established affirmative action ("affirmative action" first used) |
| EO 12333 (Reagan) | 1981 | Reorganized U.S. intelligence community |
| EO 13769 (Trump) | 2017 | Travel ban from majority-Muslim countries (multiple revisions; upheld in *Trump v. Hawaii* 2018) |
| EO 13985 (Biden) | 2021 | Advancing racial equity in federal agencies |
| EO 14148 (Trump) | 2025 | Rescinded Biden EOs on day 1 of second term |

### Limits on Executive Orders

| Limit | Example |
|---|---|
| Must rest on constitutional + statutory authority | *Youngstown Sheet & Tube v. Sawyer* 1952 — Truman steel-mill seizure unconstitutional |
| Subject to judicial review | *Trump v. Hawaii* 2018 (upheld) vs. multiple lower-court travel-ban injunctions |
| Subject to congressional override (statute) | Congressional Review Act allows disapproval of agency rules |
| Subject to subsequent rescission | Trump 2017 + 2025 rescinded Obama orders; Biden 2021 rescinded Trump orders; Trump 2025 rescinded Biden orders |

## Signing Statements

| Element | Detail |
|---|---|
| **Definition** | Statement issued by President when signing a bill, articulating constitutional concerns or interpretive guidance for executive enforcement |
| **Modern usage** | Reagan + GHW Bush + GW Bush expanded use (~1,200 challenges by GW Bush); Obama reduced; Trump + Biden moderate |
| **Controversy** | Critics argue signing statements function as line-item vetoes (which are unconstitutional per *Clinton v. New York* 1998); defenders argue they are legitimate interpretive tools |

> 🔑 Key takeaway: Modern presidents combine Article II constitutional processes (veto, treaty, appointment) with informal practices (executive orders, executive agreements, signing statements) to govern. The veto is defensive (legislative); executive orders + agreements are unilateral; appointments shape the executive + judiciary for decades.
      `
    },
    {
      id: 'govpres2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Veto & Executive Orders** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the constitutional process for presidential veto and override?",
            options: [
              "Article I § 7 (Presentment Clause): once both chambers pass identical legislation, the bill is presented to the President, beginning a 10-DAY CLOCK (excluding Sundays); the President's options are: (1) SIGN — bill becomes law; (2) VETO — bill returned to originating chamber with objections, where 2/3 of each chamber's members 'present and voting' may OVERRIDE the veto and enact the bill into law without presidential signature; (3) TAKE NO ACTION while Congress is in session — bill becomes law after 10 days without signature; (4) TAKE NO ACTION while Congress adjourns within 10 days — POCKET VETO (Congress cannot override because it is not in session to receive the vetoed bill); STATISTICS: only ~5% of regular vetoes are overridden, but the threat of veto often forces legislative compromise during the bill's drafting + passage stages",
              "There is no Article I § 7 Presentment Clause of any kind during the entire period from 1789 onward in any region of the United States with no 10-day clock, no veto, no 2/3 override, no pocket veto, no congressional adjournment exception, and no veto override statistics of any kind during the entire period in any region",
              "The President's veto requires only majority override of both chambers and there is no pocket veto of any kind under any circumstance with no 2/3 override requirement, no Presentment Clause, no 10-day clock, and no veto threat of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "The President can edit specific provisions of legislation via line-item veto with no judicial restriction of any kind under any circumstance with no Clinton v. New York 1998, no Presentment Clause restriction, and no requirement that bills be signed or vetoed in their entirety of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Article I § 7 Presentment: bill to President → 10-day clock (excl. Sundays). Options: (1) SIGN → law; (2) VETO → return to originating chamber w/ objections; 2/3 each chamber present + voting can OVERRIDE; (3) NO ACTION + Congress in session 10 days → law without signature; (4) NO ACTION + Congress adjourns within 10 days → POCKET VETO (no override possible). ~5% regular vetoes overridden but veto THREAT forces compromise.'
          },
          {
            question: "What is the constitutional + statutory basis for executive orders, and what limits constrain them?",
            options: [
              "Executive orders are presidential directives to executive-branch officials that have the force of law as long as they are consistent with the Constitution and existing statutes; their constitutional basis lies in: (1) the VESTING CLAUSE (Art II § 1) — 'The executive Power shall be vested in a President'; (2) the TAKE CARE CLAUSE (Art II § 3) — 'he shall take Care that the Laws be faithfully executed'; (3) STATUTORY DELEGATIONS — many modern executive orders rest on specific statutory grants (e.g., emergency powers); LIMITS include: (a) JUDICIAL REVIEW — *Youngstown Sheet & Tube v. Sawyer* (1952) struck down Truman's Korean-War seizure of steel mills as exceeding constitutional + statutory authority; Justice Jackson's concurrence created the famous 3-tier framework (express authority → max power; congressional silence → twilight zone; congressional prohibition → lowest ebb); (b) CONGRESSIONAL OVERRIDE via statute; (c) SUBSEQUENT RESCISSION by later presidents",
              "There is no constitutional or statutory basis for executive orders of any kind during the entire period from 1789 onward in any region of the United States with no Vesting Clause, no Take Care Clause, no statutory delegations, no Youngstown Sheet & Tube v. Sawyer, no Justice Jackson 3-tier framework, no judicial review, no congressional override, and no rescission of any kind during the entire period in any region",
              "Executive orders are absolutely binding and not subject to any limits of any kind under any circumstance with no judicial review, no Youngstown Sheet & Tube v. Sawyer, no congressional override, and no rescission by subsequent presidents of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Executive orders are explicitly authorized by a single specific clause in Article II of the Constitution with no need to derive authority from the Vesting Clause + Take Care Clause + statutory delegations of any kind under any circumstance with no Youngstown Sheet & Tube v. Sawyer of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Executive orders = presidential directives w/ force of law if consistent w/ Constitution + statutes. Basis: (1) VESTING CLAUSE Art II § 1; (2) TAKE CARE CLAUSE Art II § 3; (3) STATUTORY DELEGATIONS. Limits: (a) JUDICIAL REVIEW — Youngstown Sheet & Tube (1952) struck Truman steel-mill seizure; Jackson concurrence 3-tier (express authority → max; silence → twilight; prohibition → lowest ebb); (b) CONGRESSIONAL OVERRIDE via statute; (c) SUBSEQUENT RESCISSION.'
          }
        ]
      }
    },
    {
      id: 'govpres2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — veto, treaty, and executive process**`,
      exercise: {
        questions: [
          {
            prompt: "Number of days the President has to sign or veto a bill before it becomes law without signature (excluding Sundays).",
            answer: '10',
            acceptableAnswers: ['10', 'ten'],
            hint: 'Excludes Sundays — typically a bit less than two calendar weeks.'
          },
          {
            prompt: "Constitutional fraction of EACH chamber required to override a presidential veto (e.g., '2/3').",
            answer: '2/3',
            acceptableAnswers: ['2/3', 'two-thirds', 'two thirds'],
            hint: 'Same fraction as Senate treaty ratification.'
          },
          {
            prompt: "Year of *Clinton v. New York* striking down the Line Item Veto Act as violating the Presentment Clause.",
            answer: '1998',
            acceptableAnswers: ['1998'],
            hint: 'Same year as Clinton impeachment.'
          }
        ]
      }
    },
    {
      id: 'govpres2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each agreement type to the correct ratification process.**`,
      exercise: {
        dropdowns: [
          {
            label: "Treaty per Article II § 2 cl. 2: ___",
            options: ['Senate 2/3 ratification', 'President alone (no Senate)', 'Simple majority of both chambers', 'Supreme Court approval']
          },
          {
            label: "Executive agreement (e.g., Iran nuclear deal 2015, Paris Climate Accord 2015): ___",
            options: ['Senate 2/3 ratification', 'President alone (no Senate)', 'Simple majority of both chambers', 'Supreme Court approval']
          },
          {
            label: "Congressional-executive agreement (e.g., NAFTA 1993, USMCA 2020): ___",
            options: ['Senate 2/3 ratification', 'President alone (no Senate)', 'Simple majority of both chambers', 'Supreme Court approval']
          }
        ],
        correctAnswers: ['Senate 2/3 ratification', 'President alone (no Senate)', 'Simple majority of both chambers'],
        hint1: 'Treaty (Art II § 2 cl. 2) requires 2/3 Senate — supreme law of the land per Supremacy Clause.',
        hint2: 'Executive agreements bypass Senate entirely — modern presidents use ~10:1 ratio of executive agreements to treaties.',
        hint3: 'Congressional-executive agreements (e.g., NAFTA) substitute majority of both chambers for Senate 2/3 — more democratic but politically harder.'
      }
    },
    {
      id: 'govpres2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Modern Executive Power**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: 'President X issues an executive order requiring all federal agencies to use specific climate-change criteria when reviewing infrastructure projects, citing the Vesting Clause + Take Care Clause + the National Environmental Policy Act 1969 (NEPA). A subsequent president then rescinds this order.' What does this illustrate about modern executive power?",
              options: [
                "This illustrates two key features of modern executive power: (1) UNILATERAL ACTION via executive order — modern presidents use executive orders to advance policy when Congress is unable or unwilling to legislate, citing the Vesting Clause + Take Care Clause + relevant statutory delegations (here, NEPA 1969); this approach allows presidents to 'govern alone' on major issues like climate policy, immigration enforcement, and federal contracting standards; (2) POLICY INSTABILITY across administrations — because executive orders can be rescinded by subsequent presidents, major policies oscillate based on election outcomes (Obama-Trump-Biden-Trump pattern on Paris Climate Accord, immigration enforcement priorities, federal contractor labor standards, environmental review procedures); CRITICS argue this represents (a) presidential overreach into Congress's legislative role; (b) policy whiplash undermining stable governance; SUPPORTERS argue it represents (a) legitimate executive discretion within statutory authority; (b) democratic accountability via election outcomes",
                "There is no executive order of any kind during the entire period from 1789 onward in any region of the United States with no Vesting Clause, no Take Care Clause, no NEPA, no climate policy, no immigration enforcement, no Obama-Trump-Biden-Trump oscillation, no presidential overreach concern, and no policy whiplash concern of any kind during the entire period in any region",
                "Executive orders are permanent and cannot be rescinded by subsequent presidents of any kind under any circumstance with no Obama-Trump-Biden-Trump oscillation, no policy whiplash, no Paris Climate Accord, no immigration enforcement priorities, and no federal contractor labor standards reversals of any kind during the entire period from 1789 onward in any region of the United States during the period",
                "Modern presidents do not use executive orders for major policy and rely entirely on congressional legislation of any kind under any circumstance with no climate executive orders, no immigration executive orders, no federal contracting executive orders, and no environmental review executive orders of any kind during the entire period from 1789 onward in any region of the United States during the period"
              ],
              correctAnswer: 0,
              explanation: 'Two features modern executive power: (1) UNILATERAL ACTION via EO — when Congress can\'t/won\'t legislate, EO citing Vesting Clause + Take Care Clause + statutory delegation (NEPA 1969) → "govern alone" on climate, immigration, federal contracting. (2) POLICY INSTABILITY across administrations — EOs rescindable → policy oscillates with elections (Obama-Trump-Biden-Trump pattern: Paris Climate, immigration enforcement, contractor labor, environmental review). CRITICS: presidential overreach + policy whiplash. SUPPORTERS: legitimate executive discretion + democratic accountability.'
          },
          {
            question: "AP scenario: 'In a Supreme Court vacancy with a president of one party and a Senate of the other party, the president nominates a moderate jurist. The Senate refuses to hold a confirmation hearing for 11 months until after the next presidential election.' What does this illustrate about the modern appointment process?",
            options: [
              "This scenario corresponds to the actual case of MERRICK GARLAND (nominated by Obama March 2016 to fill Scalia vacancy; Senate Republicans under Majority Leader McConnell refused hearings for 293 days; Trump won November 2016 election and nominated Neil Gorsuch confirmed April 2017); ILLUSTRATES: (1) the SHARED-POWER nature of appointments — the Constitution gives the President nomination authority + the Senate 'advice and consent' (Art II § 2 cl. 2) — but does not specify Senate procedures, allowing the Senate to delay or refuse to act; (2) MODERN POLARIZATION — appointment battles have become highly partisan, with the Senate increasingly using procedural tools (filibuster pre-2017, blue slips, holds, refusal to hear) to block opposition-party nominations; (3) the NUCLEAR OPTION (2017) lowered cloture for Supreme Court nominations from 60 to 51 votes, enabling Gorsuch (54-45), Kavanaugh (50-48), Barrett (52-48), and Jackson (53-47) to be confirmed on largely party-line votes",
              "There is no Merrick Garland nomination or refusal to hold hearings of any kind during the entire period from 2016 onward in any region of the United States with no Obama nomination, no Mitch McConnell, no Scalia vacancy, no 293-day delay, no Trump election, no Gorsuch nomination, no nuclear option, and no party-line confirmation votes of any kind during the entire period in any region",
              "The Constitution explicitly requires the Senate to hold a confirmation hearing within 90 days of any presidential nomination of any kind under any circumstance with no Senate procedural discretion, no Garland precedent, no McConnell refusal, and no advice-and-consent flexibility of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Modern Supreme Court confirmations are uniformly bipartisan with no partisan opposition of any kind under any circumstance with no Garland precedent, no nuclear option of 2017, no party-line votes for Gorsuch + Kavanaugh + Barrett + Jackson, and no modern polarization of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Merrick Garland precedent (Obama nominated March 2016 for Scalia seat; Senate R/McConnell refused hearings 293 days; Trump won Nov 2016 → Gorsuch confirmed April 2017). Illustrates: (1) SHARED-POWER appointments — Art II § 2 cl 2 gives President nomination + Senate "advice and consent"; doesn\'t specify procedures → Senate can delay/refuse; (2) MODERN POLARIZATION — partisan battles, procedural tools (filibuster pre-2017, blue slips, holds, refusal to hear); (3) NUCLEAR OPTION 2017 lowered SCOTUS cloture 60→51 → Gorsuch (54-45), Kavanaugh (50-48), Barrett (52-48), Jackson (53-47) on party-line votes.'
          }
        ]
      }
    }
  ]
}
