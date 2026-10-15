export const microExternalitiesPublicGoodsPart2Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext2-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 2 of 7 — The Four Externality Graphs**

---

| Section |
|---------|
| 📖 The Language of Private and Social Curves |
| Production Externalities |
| Consumption Externalities |
| Finding the Deadweight Loss Triangle |

> 🔑 **Key Concept:** Every externality graph has the same two crossings. The **market** settles where marginal private benefit equals marginal private cost (**MPB = MPC**). The **socially optimal** quantity is where marginal social benefit equals marginal social cost (**MSB = MSC**). An externality pulls one of the social curves away from its private twin, so the two crossings land at different quantities, and the gap between them is where deadweight loss lives.
      `
    },
    {
      id: 'microext2-curves',
      type: 'text' as const,
      content: `
## 📖 The Language of Private and Social Curves

The AP course uses six curve names. Learn them as three pairs.

| Private curve | What it measures | Social curve | How it is built |
|---|---|---|---|
| **MPB** (marginal private benefit) | Value of one more unit to the buyer; this is the **demand** curve | **MSB** (marginal social benefit) | MPB + **marginal external benefit (MEB)**, or MPB − marginal external cost for a harmful good |
| **MPC** (marginal private cost) | Cost of one more unit to the seller; in a competitive market this is the **supply** curve | **MSC** (marginal social cost) | MPC + **marginal external cost (MEC)**, or MPC − marginal external benefit for a helpful activity |

**MEC** and **MEB** are the spillovers: the cost or benefit of one more unit that lands on **third parties**, people who neither buy nor sell the good.

### Which Curve Moves?
Ask **who creates the spillover**:

- If it comes from **making** the good (smoke from a smokestack), the cost side changes: **MSC ≠ MPC**, and MSB = MPB.
- If it comes from **using** the good (secondhand smoke from a cigarette), the benefit side changes: **MSB ≠ MPB**, and MSC = MPC.

### Reading a Spillover off the Graph
The external amount is always a **vertical distance**. If a refinery's MPC for the 50th barrel is \\$40 and that barrel's fumes do \\$15 of harm to neighbors, then MSC at Q = 50 is \\$40 + \\$15 = **\\$55**. The \\$15 is the vertical gap between MPC and MSC above Q = 50.

> 🔑 **AP Connection:** With no externality, MSB = MPB and MSC = MPC, so the competitive equilibrium is already the socially optimal quantity and there is no deadweight loss. Externalities are one of the reasons a competitive market can fail.
      `
    },
    {
      id: 'microext2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A steel mill\'s smoke causes \\$12 of health costs to nearby residents for each ton of steel. At the market quantity, the mill\'s marginal private cost is \\$40 a ton. What is the marginal social cost of that ton?',
            options: [
              '\\$52',
              '\\$40',
              '\\$28',
              '\\$12'
            ],
            correctAnswer: 0,
            explanation: 'MSC = MPC + MEC = \\$40 + \\$12 = \\$52. \\$40 counts only the mill\'s own cost, \\$28 subtracts the harm instead of adding it, and \\$12 is the spillover alone.'
          },
          {
            question: 'Getting a flu shot also lowers the chance that coworkers and classmates catch the flu. In the market for flu shots, which curve lies above the demand curve?',
            options: [
              'The marginal social benefit curve',
              'The marginal social cost curve',
              'The marginal private cost curve',
              'The marginal external cost curve'
            ],
            correctAnswer: 0,
            explanation: 'The demand curve is marginal private benefit. The spillover comes from using the shot and helps third parties, so MSB = MPB + MEB lies above demand, while the cost curves are unaffected.'
          }
        ]
      }
    },
    {
      id: 'microext2-production',
      type: 'text' as const,
      content: `
## Production Externalities

### Negative Production Externality
A paper mill dumps waste into a river and harms the fishing businesses downstream.

**The graph in words:**
- Draw downward-sloping **D = MPB = MSB** and upward-sloping **S = MPC**.
- Draw **MSC above MPC**, higher by the MEC at each quantity.
- The market quantity $Q_m$ is where **MPC crosses D**; the socially optimal quantity $Q^*$ is where **MSC crosses D**, to the left.
- Result: $Q_m > Q^*$ and the market price is **too low**, because buyers never pay for the river damage.

### Positive Production Externality
A beekeeper's bees pollinate the apple orchards next door at no charge. Each hive the beekeeper adds raises the neighbors' apple harvest.

**The graph in words:**
- Draw **D = MPB = MSB** and **S = MPC**.
- Draw **MSC below MPC**, lower by the MEB at each quantity: the true cost of a hive to society is the beekeeper's cost minus the pollination it provides.
- **MSC crosses D to the right** of where MPC does, so $Q_m < Q^*$. The market produces **too little**.

| Case | Social curve vs private curve | Market quantity | Market price vs efficient price |
|---|---|---|---|
| Negative production | MSC **above** MPC | **Too large** | Too low |
| Positive production | MSC **below** MPC | **Too small** | Too high |

> ⚠️ **Common trap:** The firm's own supply curve does not move. MPC is still what the firm sees and still sets the market outcome. MSC is a **second curve** drawn to show what society pays.
      `
    },
    {
      id: 'microext2-consumption',
      type: 'text' as const,
      content: `
## Consumption Externalities

### Negative Consumption Externality
A smoker enjoys a cigarette, but the secondhand smoke harms the people nearby.

**The graph in words:**
- Draw **S = MPC = MSC** (making cigarettes creates no spillover in this case).
- Draw **D = MPB** and then **MSB below MPB**, lower by the MEC: society's benefit from the cigarette is the smoker's benefit minus the harm to others.
- **MSB crosses S to the left** of where MPB does: $Q_m > Q^*$, so the good is **overconsumed**.

### Positive Consumption Externality
A student who finishes a degree earns more, and employers, coworkers and fellow citizens also gain from a more skilled and informed population.

**The graph in words:**
- Draw **S = MPC = MSC**.
- Draw **MSB above MPB**, higher by the MEB.
- **MSB crosses S to the right** of where MPB does: $Q_m < Q^*$, so the good is **underconsumed**.

| Case | Social curve vs private curve | Market quantity |
|---|---|---|
| Negative consumption | MSB **below** MPB | **Too large** |
| Positive consumption | MSB **above** MPB | **Too small** |

### A Shortcut That Covers All Four
- **Negative** externalities, whichever side creates them, mean the market makes **too much**.
- **Positive** externalities mean the market makes **too little**.
- The **side** (production or consumption) only tells you **which curve to draw**.
      `
    },
    {
      id: 'microext2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Externality** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bees from a honey farm pollinate a neighbor\'s orchard for free. On the graph, ___',
            options: ['MSC lies below MPC', 'MSC lies above MPC', 'MSB lies above MPB', 'MSB lies below MPB']
          },
          {
            label: 'Compared with the socially optimal quantity, the market for honey-farm hives is ___',
            options: ['too small', 'too large', 'efficient', 'undefined']
          },
          {
            label: 'Smokers ignore the harm their secondhand smoke does to others. On the graph, ___',
            options: ['MSB lies below MPB', 'MSB lies above MPB', 'MSC lies below MPC', 'MSC lies above MPC']
          },
          {
            label: 'Education benefits employers and fellow citizens as well as the student. On the graph, ___',
            options: ['MSB lies above MPB', 'MSB lies below MPB', 'MSC lies above MPC', 'MSC lies below MPC']
          },
          {
            label: 'Compared with the socially optimal quantity, the market for education is ___',
            options: ['too small', 'too large', 'efficient', 'undefined']
          }
        ],
        correctAnswers: ['MSC lies below MPC', 'too small', 'MSB lies below MPB', 'MSB lies above MPB', 'too small'],
        hint1: 'First ask who creates the spillover: the seller (cost curves) or the user (benefit curves).',
        hint2: 'A helpful spillover lowers the true cost to society or raises the true benefit.',
        hint3: 'Positive externalities lead to too little output; negative ones lead to too much.',
        explanation: 'Pollination comes from producing honey and helps third parties, so MSC lies below MPC and too few hives are kept. Secondhand smoke comes from consuming and harms others, so MSB lies below MPB. Education\'s spillover comes from consuming it and helps others, so MSB lies above MPB and the market provides too little.'
      }
    },
    {
      id: 'microext2-dwl',
      type: 'text' as const,
      content: `
## Finding the Deadweight Loss Triangle

The deadweight loss of an externality is the value lost on units that are produced but should not be, or should be produced but are not.

### The Rule
The DWL triangle lies **between MSB and MSC**, running **from $Q^*$ to $Q_m$**.
- Its **point** sits at the social optimum, where MSB = MSC.
- Its **base** is the vertical line at the market quantity $Q_m$, running between MSB and MSC there.

| Case | Units in the triangle | Why they are a loss |
|---|---|---|
| Too much ($Q_m > Q^*$) | From $Q^*$ up to $Q_m$ | Each unit's MSC is **greater** than its MSB |
| Too little ($Q_m < Q^*$) | From $Q_m$ up to $Q^*$ | Each missing unit's MSB is **greater** than its MSC |

### Parallel or Spreading Curves
- If the spillover is the **same for every unit** (a constant \\$10 of harm per ton), MSC is **parallel** to MPC, and the base of the triangle equals that \\$10.
- If each extra unit does **more** harm than the last (the 1,000th ton of smoke in a smoggy valley is worse than the first), MSC gets **farther from** MPC as quantity grows. The base of the triangle is then the MEC **at the market quantity**.

> ⚠️ **Common trap:** The whole area between MPC and MSC from zero to $Q_m$ is the **total external cost**, not the deadweight loss. Some external cost is worth bearing: the units up to $Q^*$ still cause harm, but buyers value each of them at more than its full social cost.

> 🔑 **AP Connection:** FRQs often ask you to "shade the area of deadweight loss." Find the MSB = MSC point first, then shade toward the market quantity. If you shade a triangle that touches the price axis, you have shaded surplus, not deadweight loss.
      `
    },
    {
      id: 'microext2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A chemical plant\'s runoff creates a negative production externality. On a correctly drawn graph, where is the deadweight loss?',
            options: [
              'Between MSC and demand, from the optimal to the market quantity',
              'Between MPC and MSC, from zero output up to the market quantity',
              'Between demand and MPC, from zero output up to the optimal quantity',
              'Above the market price and below demand, from zero to the market quantity'
            ],
            correctAnswer: 0,
            explanation: 'The lost value is on the units from the optimal quantity to the market quantity, where MSC exceeds MSB (the demand curve). The band between MPC and MSC from zero is the total external cost, and the area under demand and above price is consumer surplus.'
          },
          {
            question: 'Smokers ignore the harm their secondhand smoke does to others. Compared with the socially optimal outcome,',
            options: [
              'MSB lies below MPB and too many cigarettes are consumed',
              'MSB lies above MPB and too few cigarettes are consumed',
              'MSB lies above MPB and too many cigarettes are consumed',
              'MSC lies above MPC and too many cigarettes are produced'
            ],
            correctAnswer: 0,
            explanation: 'The spillover comes from using the good, so the benefit curve splits: society\'s benefit is the smoker\'s benefit minus the harm, which puts MSB below MPB. The market quantity is where MPB meets supply, to the right of the MSB crossing, so too many are consumed.'
          },
          {
            question: 'Each additional ton of a factory\'s emissions does more harm than the ton before. On the graph, MSC and MPC are',
            options: [
              'farther apart at larger quantities',
              'parallel at every level of output',
              'closer together at larger quantities',
              'the same curve until the market quantity'
            ],
            correctAnswer: 0,
            explanation: 'The vertical gap between MSC and MPC is the marginal external cost. If MEC rises with output, the gap widens, so the curves spread apart. They are parallel only when MEC is the same for every unit.'
          }
        ]
      }
    }
  ]
}
