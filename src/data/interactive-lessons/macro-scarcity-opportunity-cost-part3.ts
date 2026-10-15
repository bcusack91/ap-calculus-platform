export const macroScarcityOpportunityCostPart3Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {
      id: 'macrosca3-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Opportunity Cost

**Part 3 of 7 — Building the PPC & Increasing Opportunity Cost**

---

| Section |
|---------|
| 📖 From a Production Schedule to a PPC |
| Opportunity Cost Point by Point |
| Why the Curve Bows Out (and When It Is Straight) |
| Productive vs. Allocative Efficiency |

> 🔑 **Key Concept:** The production possibilities curve (PPC) turns opportunity cost into a picture. Each step along the curve shows how much of one good must be given up to make more of the other. When that cost **rises** as you keep going, the curve is **bowed outward** (concave to the origin).
`
    },
    {
      id: 'macrosca3-schedule',
      type: 'text' as const,
      content: `
## 📖 From a Production Schedule to a PPC

A **production possibilities schedule** lists the maximum combinations of two goods an economy can make when it uses all of its resources fully and efficiently with its current technology.

### Worked Example: Computers and Wheat

| Point | Computers | Wheat (tons) |
|---|---|---|
| A | 0 | 400 |
| B | 10 | 380 |
| C | 20 | 330 |
| D | 30 | 250 |
| E | 40 | 140 |
| F | 50 | 0 |

**The graph, described:** put computers on the horizontal axis and wheat on the vertical axis. Plot A (0, 400) on the vertical axis and F (50, 0) on the horizontal axis, then connect A through F. The curve starts nearly flat near A and gets steeper and steeper as it falls toward F, so it bows outward away from the origin.

### Opportunity Cost Point by Point

Each move adds 10 computers. Divide the wheat given up by the computers gained:

| Move | Wheat given up | Computers gained | OC of 1 computer |
|---|---|---|---|
| A → B | 400 − 380 = 20 | 10 | 2 tons |
| B → C | 380 − 330 = 50 | 10 | 5 tons |
| C → D | 330 − 250 = 80 | 10 | 8 tons |
| D → E | 250 − 140 = 110 | 10 | 11 tons |
| E → F | 140 − 0 = 140 | 10 | 14 tons |

The opportunity cost of a computer climbs from 2 tons to 14 tons of wheat. That is the **law of increasing opportunity cost**.

### Per-unit cost vs. total cost

Read the question carefully:
- **Total** opportunity cost of moving from C to E: 330 − 140 = **190 tons** of wheat for 20 more computers.
- **Per-unit** (average) opportunity cost over that move: 190 ÷ 20 = **9.5 tons** per computer.

The cost also runs in reverse. Moving from E back to D gives up 10 computers to gain 110 tons of wheat, so each ton of wheat costs 10 ÷ 110 ≈ 0.09 computers along that stretch. The two costs are reciprocals.

> 🔑 **AP Connection:** The **slope** of the PPC (ignoring the minus sign) is the opportunity cost of the good on the horizontal axis, measured in units of the good on the vertical axis. A steeper stretch means a higher opportunity cost of the horizontal-axis good.
`
    },
    {
      id: 'macrosca3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the computers-and-wheat schedule, what is the opportunity cost of increasing computer output from 20 to 30?',
            options: [
              "8 tons of wheat",
              "80 tons of wheat",
              "250 tons of wheat",
              "330 tons of wheat"
            ],
            correctAnswer: 1,
            explanation: 'Moving from C to D lowers wheat from 330 to 250 tons, so the 10 extra computers cost 80 tons in total (8 tons per computer). The 250 and 330 figures are the wheat produced at each point, not the amount given up.'
          },
          {
            question: 'Why does the opportunity cost of computers rise as the economy produces more of them?',
            options: [
              "Computers become more valuable as more of them are made.",
              "Total resources shrink as the economy produces more output.",
              "Resources are not equally suited to making both goods.",
              "Technology for growing wheat improves as computers expand."
            ],
            correctAnswer: 2,
            explanation: 'The first computers are made with the resources least useful in farming, so little wheat is lost. Later computers require shifting fertile land and skilled farmers, which costs far more wheat. Resources and technology are held constant along a single PPC.'
          }
        ]
      }
    },
    {
      id: 'macrosca3-shape',
      type: 'text' as const,
      content: `
## 📖 Why the Curve Bows Out (and When It Is Straight)

| Shape | Opportunity cost | Why | Typical example |
|---|---|---|---|
| **Bowed outward (concave)** | **Increasing**: each extra unit costs more of the other good | Resources are **specialized**; some are better at one good than the other | A whole economy choosing between computers and wheat |
| **Straight line** | **Constant**: each extra unit costs the same amount | Resources are **equally suited** to both goods (perfect substitutes in production) | One worker who can make 6 shirts or 3 hats per hour |

### Worked Example: A Constant-Cost PPC

A tailor can make **6 shirts or 3 hats** in an hour.
- OC of 1 hat = 6 ÷ 3 = **2 shirts**, at every point.
- OC of 1 shirt = 3 ÷ 6 = **0.5 hats**, at every point.
- Graph: with hats on the horizontal axis, the line runs from (0, 6) to (3, 0) with a constant slope of −2.

Because the tailor's hour is equally useful for both goods, giving up shirts to make hats always costs the same.

### Increasing cost in the real economy

Suppose a country shifts resources from food to housing. The first workers moved might be farmhands who already know some carpentry, so housing output rises a lot while food falls a little. As the shift continues, the country has to move land that is ideal for crops and workers with no building skills. Each additional house now costs much more food. That pattern produces the bowed-out shape.

> 🔑 **AP Connection:** If an FRQ asks you to "explain why the PPC is bowed outward," the full answer has two pieces: (1) the opportunity cost of producing more of a good increases, and (2) this happens because resources are not perfectly adaptable between the two goods.
`
    },
    {
      id: 'macrosca3-input',
      type: 'input-boxes' as const,
      content: `
**Compute from the Schedule** ✍️

Use the computers-and-wheat schedule (A through F). Enter numbers only.

1) What is the opportunity cost of one computer when moving from D to E, in tons of wheat?

2) How many tons of wheat in total are given up when moving from B to D?

3) What is the average opportunity cost per computer for the move from B to D, in tons of wheat? (Use one decimal place.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11', '130', '6.5'],
        hint1: 'Wheat falls from 250 to 140 while computers rise by 10.',
        hint2: 'Subtract the wheat at D from the wheat at B.',
        hint3: 'Divide the total wheat given up by the 20 computers gained.',
        explanation: 'From D to E, 110 tons are given up for 10 computers, or 11 tons each. From B to D, wheat falls from 380 to 250, a total of 130 tons for 20 computers, which averages 6.5 tons per computer.'
      }
    },
    {
      id: 'macrosca3-efficiency',
      type: 'text' as const,
      content: `
## 📖 Productive vs. Allocative Efficiency

The PPC shows two different kinds of efficiency. The AP exam expects you to keep them separate.

| Term | Meaning | Where on the PPC |
|---|---|---|
| **Productive efficiency** | Output is produced at the lowest possible cost; no resources are wasted or idle | **Every point on the curve** |
| **Allocative efficiency** | The economy produces the mix of goods society values most (marginal benefit = marginal cost) | **One particular point on the curve** |
| **Inefficient** | Resources are idle (unemployment) or misused | Any point **inside** the curve |
| **Unattainable** | Not possible with current resources and technology | Any point **outside** the curve |

### Worked Example: Checking points

Using the computers-and-wheat schedule:

| Combination | Compare with the schedule | Verdict |
|---|---|---|
| 30 computers, 250 tons | Matches point D | On the PPC: productively efficient |
| 20 computers, 300 tons | At 20 computers the maximum is 330 tons | Inside: idle or misused resources |
| 40 computers, 200 tons | At 40 computers the maximum is 140 tons | Outside: unattainable for now |

### Why "on the curve" is not the whole story

Point A (0 computers, 400 tons of wheat) is productively efficient: no resources are wasted. But if people value computers highly, a society producing zero computers is not making the mix it wants. Allocative efficiency picks out the point where the marginal benefit of one more computer equals its marginal cost in wheat. Which point that is depends on what people value, not just on the shape of the curve.

> 🔑 **AP Connection:** "Efficient" alone on the AP exam usually means productively efficient, i.e., a point on the PPC. If a question names allocative efficiency, look for language about what society or consumers want most.
`
    },
    {
      id: 'macrosca3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is producing 20 computers and 300 tons of wheat. Based on the computers-and-wheat schedule, which statement is true?',
            options: [
              "It lies outside the PPC and cannot be reached.",
              "It lies on the PPC and uses all resources fully.",
              "It lies on the PPC but is not allocatively efficient.",
              "It lies inside the PPC, with idle resources."
            ],
            correctAnswer: 3,
            explanation: 'With 20 computers the economy can produce up to 330 tons of wheat, so 300 tons is inside the curve. Some resources are unemployed or misused, which makes the point productively inefficient.'
          },
          {
            question: 'A country\'s PPC between shirts and hats is a straight line. This shape tells you that',
            options: [
              "each hat costs the same number of shirts at every point",
              "the country has no opportunity cost for shirts or for hats",
              "each extra hat costs more shirts than the hat before it",
              "the country is producing at an inefficient combination"
            ],
            correctAnswer: 0,
            explanation: 'A straight PPC has a constant slope, so each extra hat always costs the same number of shirts. A rising cost would bow the curve outward, and every point on the line is productively efficient.'
          },
          {
            question: 'An economy on its PPC produces a mix of goods that its citizens value less than another mix on the same PPC. The economy is',
            options: [
              "allocatively efficient but not productively efficient",
              "productively efficient but not allocatively efficient",
              "both productively and allocatively efficient",
              "neither productively nor allocatively efficient"
            ],
            correctAnswer: 1,
            explanation: 'Being on the PPC means no resources are wasted, so the economy is productively efficient. Because a different point on the curve would better match what people value, it is not allocatively efficient.'
          }
        ]
      }
    }
  ]
}
