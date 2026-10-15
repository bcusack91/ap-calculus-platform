export const microScarcityMarginalAnalysisPart3Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {
      id: 'microsca3-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Marginal Analysis

**Part 3 of 7 — The Production Possibilities Curve**

---

| Section |
|---------|
| 📖 The PPC as a Model |
| Efficiency: Points Inside, On and Outside |
| Constant vs. Increasing Opportunity Cost |
| Shifts, Pivots and Movements Along the Curve |

> 🔑 **Key Concept:** The **production possibilities curve (PPC)** shows every combination of two goods an economy can produce when it uses **all** of its resources **efficiently** with its current **technology**. It turns scarcity, choice and opportunity cost into a single graph.
`
    },
    {
      id: 'microsca3-model',
      type: 'text' as const,
      content: `
## 📖 The PPC as a Model

### Assumptions
1. The economy produces only **two goods** (a simplification that still captures trade-offs).
2. The quantity and quality of **resources are fixed**.
3. **Technology is fixed**.
4. Resources are **fully and efficiently employed** at every point on the curve.

### Worked Example: Robots and Wheat

The table lists five points on Techland's PPC.

| Point | Wheat (tons) | Robots |
|---|---|---|
| A | 0 | 20 |
| B | 10 | 18 |
| C | 20 | 14 |
| D | 30 | 8 |
| E | 40 | 0 |

**The graph, described in text:** Put wheat on the horizontal axis and robots on the vertical axis. Plot A at (0, 20) on the vertical axis and E at (40, 0) on the horizontal axis, then connect B, C and D. The curve is **bowed outward** (concave to the origin): it is fairly flat near A and gets steeper as it approaches E.

### Efficiency: Points Inside, On and Outside

| Location | Meaning | Example from the table |
|---|---|---|
| **On the curve** | Productively efficient: no more of one good is possible without giving up some of the other | Point C (20 wheat, 14 robots) |
| **Inside the curve** | Inefficient: unemployed or underused resources; more of both goods is possible | 20 wheat and 10 robots |
| **Outside the curve** | Unattainable with current resources and technology | 30 wheat and 14 robots |

**Productive efficiency** means producing at the lowest possible cost, which on the PPC means being *on* the curve. Every point on the curve is productively efficient.

**Allocative efficiency** means producing the combination society values most, where the marginal benefit of each good equals its marginal cost. Only **one** point on the curve is allocatively efficient, and the PPC alone cannot tell you which one; you need information about what people want.

> ⚠️ An economy at a point inside its PPC is **not** experiencing a shift of the curve. Unemployment moves the economy *inside* a curve that has not moved.
`
    },
    {
      id: 'microsca3-cost',
      type: 'text' as const,
      content: `
## Constant vs. Increasing Opportunity Cost

### Reading Opportunity Cost from the Table

Moving along a PPC, the opportunity cost of more of one good is the amount of the other good given up.

| Move | Extra wheat | Robots given up | Opportunity cost per ton of wheat |
|---|---|---|---|
| A to B | 10 | 2 | 0.2 robot |
| B to C | 10 | 4 | 0.4 robot |
| C to D | 10 | 6 | 0.6 robot |
| D to E | 10 | 8 | 0.8 robot |

Each additional 10 tons of wheat costs **more** robots than the last. This is the **law of increasing opportunity cost**, and it is why the curve bows outward.

**Why costs increase:** resources are **specialized**, not equally suited to both goods. Techland first shifts the resources best suited to farming (fertile land, farm workers) out of robot-making, so little robot output is lost. As it pushes toward all wheat, it must move engineers and factory equipment into farming, where they add little wheat but cost many robots.

### Constant Opportunity Cost: A Straight Line

If resources are equally suited to both goods, the opportunity cost stays the same and the PPC is a **straight line**.

**Example:** Lakeland can produce 60 units of fish or 30 units of bread, or any combination on the straight line between them.
- Opportunity cost of 1 fish = 30 ÷ 60 = **0.5 bread**
- Opportunity cost of 1 bread = 60 ÷ 30 = **2 fish**

The two opportunity costs are **reciprocals** of each other. On a straight-line PPC, the slope (in absolute value) is the opportunity cost of the good on the horizontal axis, measured in units of the good on the vertical axis.

| Shape | Opportunity cost | Resources |
|---|---|---|
| Straight line | Constant | Equally suited to both goods |
| Bowed outward (concave) | Increasing | Specialized |

> 🔑 **AP Connection:** Free-response questions often ask you to "draw a correctly labeled PPC" with increasing opportunity cost. Label both axes with the goods, label the curve PPC, and draw it bowed outward from the origin. Then compute opportunity cost from any two points the question gives you.
`
    },
    {
      id: 'microsca3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the Techland table, what is the opportunity cost of increasing wheat from 20 tons to 30 tons?',
            options: [
              '6 robots',
              '8 robots',
              '14 robots',
              '4 robots'
            ],
            correctAnswer: 0,
            explanation: 'Moving from C (20 wheat, 14 robots) to D (30 wheat, 8 robots) means robot output falls from 14 to 8, so 6 robots are given up. Fourteen is the total at C, not the amount sacrificed, and 4 and 8 are the costs of the neighboring moves.'
          },
          {
            question: 'A PPC that is bowed outward from the origin reflects that',
            options: [
              'resources are not equally suited to producing both goods',
              'the economy has unemployed resources at most points',
              'technology improves as the economy produces more output',
              'opportunity cost falls as the economy specializes more'
            ],
            correctAnswer: 0,
            explanation: 'A bowed-out PPC shows increasing opportunity cost, which comes from specialized resources that are better at producing one good than the other. Unemployment puts the economy inside the curve, technology is held fixed along a PPC, and falling opportunity cost would make the curve bow inward.'
          },
          {
            question: 'Which statement about efficiency on a PPC is correct?',
            options: [
              'Every single point on the curve is allocatively efficient',
              'Every point inside the curve is productively efficient',
              'Every point on the curve is productively efficient',
              'Every point outside the curve is allocatively efficient'
            ],
            correctAnswer: 2,
            explanation: 'Every point on the PPC uses all resources without waste, so each is productively efficient. Allocative efficiency is a single point that depends on what society values, points inside the curve waste resources, and points outside cannot be reached at all.'
          }
        ]
      }
    },
    {
      id: 'microsca3-shifts',
      type: 'text' as const,
      content: `
## Shifts, Pivots and Movements Along the Curve

| What happens | Effect on the PPC | Example |
|---|---|---|
| Reallocating resources from one good to the other | **Movement along** the curve | Techland moves from B to C |
| Unemployment or idle factories | Economy moves to a point **inside** the curve | A recession closes plants |
| More resources, or better technology for both goods | Curve **shifts outward** (economic growth) | Immigration adds workers; a faster computer chip helps every industry |
| Loss of resources | Curve **shifts inward** | A hurricane destroys factories and farmland |
| Better technology for **one** good only | Curve **pivots** outward along that good's axis | A new seed raises wheat yields but does nothing for robot-making |

### The Pivot, Described in Text

Suppose a new seed doubles Techland's wheat yields. The wheat intercept moves from 40 to 80 tons; the robot intercept stays at 20, because if Techland makes only robots the seed does not help. The curve swings outward along the horizontal axis.

Two consequences follow:
- Techland can now produce **more of both goods** at most points, because it needs fewer resources to grow any given amount of wheat and can move the freed resources into robots.
- The opportunity cost of wheat **falls** (each ton of wheat now uses fewer resources, so fewer robots are given up), and the opportunity cost of a robot **rises** in terms of wheat.

### Capital Goods vs. Consumer Goods

When one axis shows **capital goods** (machines, factories) and the other shows **consumer goods** (food, clothing), the choice made today affects tomorrow's PPC.

| Today's choice | Future PPC |
|---|---|
| More capital goods, fewer consumer goods | Shifts **farther** outward (more capital raises future productive capacity) |
| More consumer goods, fewer capital goods | Shifts outward less, or not at all |

The trade-off: a country that invests heavily today gives up current consumption to gain faster growth later.

> 🔑 **AP Connection:** Distinguish three cases carefully. A **movement along** the curve is a change in the output mix. A point **inside** the curve is unemployment or inefficiency. A **shift** requires a change in resources or technology. A change in the *price* of a good or in *consumer preferences* moves the economy along its PPC; it does not shift the curve.
`
    },
    {
      id: 'microsca3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Change** 🔍

Choose the effect of each event on a country's PPC for cars and corn.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An earthquake destroys many of the country\'s factories and farms: the PPC ___',
            options: ['shifts inward', 'shifts outward', 'stays fixed', 'pivots on the car axis']
          },
          {
            label: 'A recession leaves many auto workers unemployed: the economy ___',
            options: ['shifts its PPC inward', 'moves inside its PPC', 'moves along its PPC', 'pivots its PPC inward']
          },
          {
            label: 'A robotic assembly line makes car factories far more productive: the PPC ___',
            options: ['shifts inward', 'shifts outward', 'stays fixed', 'pivots on the car axis']
          },
          {
            label: 'Consumers start preferring corn to cars, and producers respond: the economy ___',
            options: ['shifts its PPC inward', 'moves inside its PPC', 'moves along its PPC', 'pivots its PPC inward']
          }
        ],
        correctAnswers: ['shifts inward', 'moves inside its PPC', 'pivots on the car axis', 'moves along its PPC'],
        hint1: 'A loss of resources used for both goods changes what the economy can produce.',
        hint2: 'Idle workers do not change the curve itself.',
        hint3: 'A technology that helps only one good moves only that good\'s intercept.',
        explanation: 'Losing factories and farms, resources used for both goods, shifts the PPC inward. Unemployment puts the economy at a point inside an unchanged curve. Car-only technology pivots the curve outward on the car axis. A change in preferences changes the output mix, which is a movement along the curve.'
      }
    },
    {
      id: 'microsca3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the Techland table and the Lakeland example from this part.

**1)** Techland moves from point D (30 wheat, 8 robots) to point E (40 wheat, 0 robots). What is the opportunity cost of **one** ton of wheat, in robots?

**2)** Lakeland can produce 60 fish or 30 bread on a straight-line PPC. What is the opportunity cost of **one** bread, in fish?

**3)** Is the combination of 30 tons of wheat and 10 robots attainable for Techland? Enter the number of robots Techland can actually make with 30 tons of wheat.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.8', '2', '8'],
        hint1: 'Robots fall from 8 to 0 while wheat rises by 10 tons. Divide the robots given up by the extra wheat.',
        hint2: 'Giving up all 30 bread frees enough resources for 60 fish. Divide 60 by 30.',
        hint3: 'Find point D in the table.',
        explanation: '1) 8 robots ÷ 10 tons = 0.8 robot per ton. 2) 60 fish ÷ 30 bread = 2 fish per bread. 3) At 30 tons of wheat Techland can make at most 8 robots, so 30 wheat and 10 robots lies outside the PPC and is unattainable.'
      }
    },
    {
      id: 'microsca3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country produces only cars and corn. A new fertilizer raises corn yields but has no effect on car production. How does the PPC change?',
            options: [
              'It shifts outward along both axes equally',
              'It pivots outward along the corn axis only',
              'It pivots outward along the car axis only',
              'It stays fixed but output shifts to corn'
            ],
            correctAnswer: 1,
            explanation: 'Technology that helps only corn moves the corn intercept outward while the car intercept stays put, so the curve pivots out along the corn axis. A parallel shift would require resources or technology that help both goods.'
          },
          {
            question: 'Country X devotes a larger share of its resources to capital goods than Country Y does. Other things equal, what is the most likely result?',
            options: [
              'Country X\'s PPC shifts outward faster in the future',
              'Country X moves to a point inside its current PPC',
              'Country Y\'s PPC shifts outward faster in the future',
              'Country X\'s PPC becomes a straight line over time'
            ],
            correctAnswer: 0,
            explanation: 'Capital goods raise future productive capacity, so Country X gives up some consumption today for faster growth of its PPC later. Producing capital goods with full employment keeps X on its current curve, not inside it.'
          }
        ]
      }
    }
  ]
}
