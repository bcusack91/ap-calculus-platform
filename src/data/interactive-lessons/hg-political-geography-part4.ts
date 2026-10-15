export const hgPoliticalGeographyPart4Data = {
  topicSlug: 'hg-political-geography',
  sections: [
    {
      id: 'hgpoliti4-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Geography & Boundaries

**Part 4 of 7 — Internal Boundaries: Redistricting and Gerrymandering**

---

| Section |
|---------|
| 📖 From Census to District Lines |
| Packing and Cracking: A Worked Example |
| Rules, Courts and the Limits of Fairness Tests |
| Other Internal Boundaries |

> 🔑 **Key Concept:** Boundaries inside a state matter as much as the lines between states. Whoever draws **voting districts** can shape who wins, without changing a single vote. The CED's claim is that voting districts, redistricting and gerrymandering **affect election results at various scales** (Topic 4.6).
`
    },
    {
      id: 'hgpoliti4-census',
      type: 'text' as const,
      content: `
## 📖 From Census to District Lines

In the United States, three steps link population data to political power:

| Step | What happens | Who does it |
|---|---|---|
| **1. Census** | Every person is counted every 10 years, as the Constitution requires | The Census Bureau |
| **2. Reapportionment** | The **435** seats in the House of Representatives are divided among the 50 states by population | A fixed formula; the 435 total was set by a 1929 law |
| **3. Redistricting** | Each state redraws its district lines so districts have nearly equal populations | Usually the state legislature; in some states, such as Arizona and Michigan, an independent commission |

### Reapportionment After the 2020 Census
Seven seats moved between states:

| Gained seats | Lost one seat each |
|---|---|
| Texas (+2); Colorado, Florida, Montana, North Carolina, Oregon (+1 each) | California, Illinois, Michigan, New York, Ohio, Pennsylvania, West Virginia |

The average district held about **761,000** people. The map of gains and losses shows population moving toward the South and West, and away from the Northeast and Midwest.

**Why it reaches beyond Congress:** each state's votes in the **Electoral College** equal its House seats plus its two senators (538 electors in all, counting 3 for Washington, D.C.). A census count therefore shifts power in presidential elections too. This is a **national-scale** outcome of a **subnational-scale** count.

### One Person, One Vote
In the 1960s the Supreme Court ruled that districts must have **nearly equal populations** (*Wesberry v. Sanders*, 1964, for congressional districts; *Reynolds v. Sims*, 1964, for state legislatures). That is why lines must be redrawn after every census, even in a state that keeps the same number of seats.
`
    },
    {
      id: 'hgpoliti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After the 2020 census, Texas gained two House seats and New York lost one. What produced this change?',
            options: [
              'States were reapportioned by population',
              'District lines were redrawn to favor one party',
              'Both states chose to change their delegation sizes',
              'Congress voted to enlarge the House of Representatives'
            ],
            correctAnswer: 0,
            explanation: 'Reapportionment divides the fixed 435 seats among states by their census populations, and Texas grew faster than New York. Redistricting moves lines inside a state but does not change its seat count, states cannot set their own totals, and the House has stayed at 435.'
          },
          {
            question: 'Under the "one person, one vote" rule, the congressional districts within a state must:',
            options: [
              'have nearly equal populations',
              'follow county lines wherever possible',
              'cover equal amounts of land',
              'include one large city each'
            ],
            correctAnswer: 0,
            explanation: 'The Court\'s 1964 rulings require districts of nearly equal population so that each vote carries similar weight. Districts can split counties, differ hugely in area (a rural district may be thousands of times larger than an urban one) and need not contain a city.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti4-example',
      type: 'text' as const,
      content: `
## Packing and Cracking: A Worked Example

**Gerrymandering** is drawing district lines to give one party or group an advantage. The term dates from 1812, when a Massachusetts district signed into law by Governor Elbridge Gerry was mocked as shaped like a salamander.

| Technique | What the mapmaker does | Effect on the targeted party |
|---|---|---|
| **Packing** | Concentrates the rival's voters into a few districts | It wins those few by huge margins, "wasting" its surplus votes |
| **Cracking** | Spreads the rival's voters thinly across many districts | It falls short of a majority almost everywhere |

### The Setup
The hypothetical state of Riverland has **500 voters** and **5 districts of 100 voters each**. **Party A** has 300 voters (60 percent) and **Party B** has 200 (40 percent). Every voter votes for their party.

| District | Map 1: A–B | Map 2: A–B | Map 3: A–B |
|---|---|---|---|
| 1 | 80–20 | 60–40 | 40–60 |
| 2 | 80–20 | 60–40 | 40–60 |
| 3 | 80–20 | 60–40 | 40–60 |
| 4 | 30–70 | 60–40 | 90–10 |
| 5 | 30–70 | 60–40 | 90–10 |
| **Seats** | **A 3, B 2** | **A 5, B 0** | **A 2, B 3** |

Each map uses exactly the same 300 A voters and 200 B voters; only the lines change.
- **Map 1** gives seats close to each party's share of votes.
- **Map 2** **cracks** Party B: its 40 percent of voters is spread so evenly that it wins nothing.
- **Map 3** **packs** Party A into districts 4 and 5 and lets B win narrowly everywhere else, so the **minority party wins a majority of seats**.

### Measuring It: Wasted Votes and the Efficiency Gap
A **wasted vote** is any vote for a losing candidate, plus any vote for the winner beyond the 50 needed to win (in a 100-voter district). The **efficiency gap** is the difference between the two parties' wasted votes, divided by all votes cast.

**Map 2, step by step:**
1. In each district A wins 60–40. A wastes 60 − 50 = **10**; B wastes all **40**.
2. Over five districts: A wastes 5 × 10 = **50**; B wastes 5 × 40 = **200**.
3. Efficiency gap = (200 − 50) ÷ 500 = **0.30, or 30 percent**, in Party A's favor.

A gap that large means one party's votes turn into seats far more efficiently than the other's.
`
    },
    {
      id: 'hgpoliti4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Now use **Map 3** from the table.

**1)** How many seats does Party B win?

**2)** How many votes does Party A waste in total across all five districts?

**3)** What is the efficiency gap, as a whole-number percent? (Enter the number only.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '200', '30'],
        hint1: 'Count the districts where B has more than 50 voters.',
        hint2: 'In districts 1–3 all 40 A votes are wasted; in districts 4–5 A wastes 90 − 50 = 40 each.',
        hint3: 'B wastes 10 in each of districts 1–3 and all 10 in each of districts 4–5. Subtract B\'s total from A\'s and divide by 500.',
        explanation: '1) B wins districts 1, 2 and 3, so 3 seats with 40 percent of the vote. 2) A wastes 3 × 40 = 120 in the districts it loses and 2 × 40 = 80 in the districts it wins, for 200. 3) B wastes 3 × 10 + 2 × 10 = 50, so the gap is (200 − 50) ÷ 500 = 0.30, or 30 percent, now in Party B\'s favor.'
      }
    },
    {
      id: 'hgpoliti4-rules',
      type: 'text' as const,
      content: `
## Rules, Courts and the Limits of Fairness Tests

### Common Redistricting Criteria
- **Equal population** (required).
- **Contiguity:** every part of a district touches the rest.
- **Compactness:** districts should not sprawl in odd shapes.
- **Communities of interest:** keep neighborhoods, cities and counties together where possible.

### Race and the Courts
- The **Voting Rights Act of 1965** has been used to require **majority-minority districts**, where a racial or ethnic minority forms a majority of voters, so minority voters can elect candidates of their choice. How far the act reaches has been argued over in recent Supreme Court cases.
- ***Shaw v. Reno* (1993):** the Court ruled that a district drawn **mainly on the basis of race** can be challenged under the Equal Protection Clause. The case involved a long, narrow North Carolina district that followed Interstate 85 for much of its length.

### Party and the Courts
- ***Rucho v. Common Cause* (2019):** the Court ruled that **federal courts cannot decide partisan gerrymandering claims**; they are political questions. State courts and state laws can still act: Pennsylvania's supreme court struck down the state's congressional map in 2018 under the state constitution.

### Limits of the Fairness Tests
| Test | Useful for | Limitation |
|---|---|---|
| Compactness (shape) | Spotting strange shapes | A compact map can still be packed and cracked; coasts and rivers make honest districts irregular |
| Efficiency gap | Measuring partisan advantage | Even neutral maps produce gaps when one party's voters cluster in cities; Map 1 above has a 10 percent gap |
| Seats-to-votes match | A quick fairness check | Nothing requires proportional results in single-member districts |

> 🔑 **AP Connection:** An FRQ may show a district map and ask you to **identify** packing or cracking and **explain** its effect. Name the technique, say which voters are concentrated or split, and state the result in seats.
`
    },
    {
      id: 'hgpoliti4-other',
      type: 'text' as const,
      content: `
## Other Internal Boundaries

Redistricting is one kind of internal boundary. Others shape daily life:

| Boundary | What it controls | Geographic effect |
|---|---|---|
| **City limits** | Local taxes, police, zoning | Suburbs that incorporate separately can keep their tax base apart from the central city |
| **School districts** | Which school a child attends; funding | Where districts rely on local property taxes, wealthy and poor districts in one metro area can differ sharply in spending |
| **Counties and special districts** | Courts, water, transit, fire service | Overlapping layers of government in one place |
| **Reservations** | Tribal self-government | Semi-autonomous areas with their own courts and laws |

**Scale of analysis:** gerrymandering happens for **congressional** districts (national effects), **state legislative** districts (subnational effects) and **city council** wards (local effects). Many other countries assign redistricting to independent bodies; the UK's Boundary Commissions redraw its 650 parliamentary constituencies.
`
    },
    {
      id: 'hgpoliti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A legislature draws lines that concentrate the opposing party\'s voters into as few districts as possible, where they win by huge margins. What is the strategic aim of this packing?',
            options: [
              'To waste the other party\'s surplus votes so it wins fewer seats than its vote share suggests',
              'To make every district as compact and contiguous as the law requires',
              'To create districts with equal numbers of voters from each party',
              'To raise turnout by placing like-minded voters together'
            ],
            correctAnswer: 0,
            explanation: 'Packing makes the opposing party win a few districts by far more than it needs, so those surplus votes do not help it anywhere else. Compactness and turnout are not the goal, and equal party splits would make districts competitive, which packing avoids.'
          },
          {
            question: 'Why is Shaw v. Reno (1993) important for redistricting?',
            options: [
              'Districts drawn chiefly by race can be challenged',
              'Partisan gerrymanders may not be reviewed by federal courts',
              'States are required to create majority-minority districts',
              'House seats are now divided among states by a fixed formula'
            ],
            correctAnswer: 0,
            explanation: 'Shaw v. Reno allowed Equal Protection challenges to districts where race was the main factor in drawing the lines. It did not require majority-minority districts or set the apportionment formula, and shutting federal courts out of partisan claims came later, from Rucho v. Common Cause in 2019.'
          },
          {
            question: 'Why can school district boundaries create unequal opportunities within one metropolitan area?',
            options: [
              'Districts that rely on local property taxes differ in wealth',
              'Federal law requires every school district to have equal enrollment',
              'Students may attend any public school regardless of address',
              'Federal grants make up most of each district\'s budget'
            ],
            correctAnswer: 0,
            explanation: 'Where schools depend heavily on local property taxes, a line separating a wealthy suburb from a poorer one also separates their school budgets. No law equalizes enrollment, most students are assigned by address, and federal money is usually a small share of school funding.'
          }
        ]
      }
    }
  ]
};
