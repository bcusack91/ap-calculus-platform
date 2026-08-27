export const microProductionCostsPart1Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'microprod1-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 1 of 7 — Cost Curves and Production Decisions**

---

## The Production Function

A **production function** shows the relationship between inputs and outputs:

| Workers | Total Product (TP) | Marginal Product (MP) | Average Product (AP) |
|---------|-------------------|----------------------|---------------------|
| 0 | 0 | — | — |
| 1 | 10 | 10 | 10.0 |
| 2 | 24 | 14 | 12.0 |
| 3 | 36 | 12 | 12.0 |
| 4 | 44 | 8 | 11.0 |
| 5 | 48 | 4 | 9.6 |
| 6 | 48 | 0 | 8.0 |

### Diminishing Marginal Returns

> 🔑 **Law of Diminishing Marginal Returns:** As more units of a variable input (labor) are added to a fixed input (capital), **MP eventually declines**.

In the table: MP peaks at worker 2 (14 units), then decreases. This is NOT because workers are lazier — it's because each worker has less capital to work with.

### MP and AP Relationship

- When **MP > AP**: AP is rising
- When **MP < AP**: AP is falling  
- When **MP = AP**: AP is at its maximum

> Think of it like a batting average: if your next at-bat (marginal) is above your average, your average rises.
      `
    },
    {
      id: 'microprod1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the table, diminishing marginal returns begin with which worker?',
            options: [
              'The 1st worker',
              'The 2nd worker',
              'The 3rd worker',
              'The 4th worker'
            ],
            correctAnswer: 2,
            explanation: 'MP increases from worker 1 (10) to worker 2 (14), then decreases at worker 3 (12). Diminishing marginal returns begin with worker 3 — the first worker whose MP is lower than the previous.'
          },
          {
            question: 'If marginal product is above average product, average product is:',
            options: [
              'Falling',
              'Rising',
              'At its maximum',
              'Equal to zero'
            ],
            correctAnswer: 1,
            explanation: 'When MP > AP, each additional unit adds more than the average — pulling the average up. Like a test score above your class average raising the class average.'
          }
        ]
      }
    },
    {
      id: 'microprod1-content',
      type: 'text' as const,
      content: `
## Cost Curves

### Fixed vs. Variable Costs

| Cost Type | Changes with Output? | Examples |
|-----------|---------------------|----------|
| **Fixed (FC)** | No | Rent, insurance, salaries of managers |
| **Variable (VC)** | Yes | Raw materials, hourly wages, electricity |
| **Total (TC)** | TC = FC + VC | All costs combined |

### Per-Unit Cost Curves

| Curve | Formula | Shape |
|-------|---------|-------|
| **AFC** | FC / Q | Always decreasing (spreading fixed costs) |
| **AVC** | VC / Q | U-shaped — falls then rises |
| **ATC** | TC / Q = AFC + AVC | U-shaped — falls then rises |
| **MC** | ΔTC / ΔQ | U-shaped — falls then rises |

### Critical Relationships

$$MC \\text{ intersects AVC and ATC at their minimum points}$$

Why? Same logic as MP/AP:
- When MC < ATC → ATC is falling (adding units cheaper than average)
- When MC > ATC → ATC is rising (adding units costlier than average)
- When MC = ATC → ATC is at minimum
      `
    },
    {
      id: 'microprod1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Total cost equals fixed cost plus _______ cost.

2) MC intersects ATC at ATC's _______ point.

3) AFC always _______ as output increases because fixed costs are spread over more units. (increases/decreases)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['variable', 'minimum', 'decreases'],
        hint1: 'TC = FC + ??',
        hint2: 'MC crosses ATC at the bottom of the U-shape.',
        hint3: 'Same fixed cost divided by larger Q.',
        explanation: 'TC = FC + VC. MC = ATC at minimum ATC (bottom of the U). AFC = FC/Q always falls as Q increases (spreading fixed costs).'
      }
    },
    {
      id: 'microprod1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Cost Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monthly rent for a factory is a ___ cost',
            options: ['Fixed', 'Variable', 'Marginal', 'Sunk']
          },
          {
            label: 'Hourly wages for production workers are a ___ cost',
            options: ['Variable', 'Fixed', 'Average', 'Opportunity']
          },
          {
            label: 'The cost of producing one additional unit is the ___ cost',
            options: ['Marginal', 'Fixed', 'Average', 'Total']
          }
        ],
        correctAnswers: ['Fixed', 'Variable', 'Marginal'],
        hint1: 'It doesn\'t change with output.',
        hint2: 'More workers = more total wage cost.',
        hint3: 'The change in total cost from one more unit.',
        explanation: 'Rent = fixed (same regardless of output). Hourly wages = variable (more output = more hours). Marginal cost = ΔTC/ΔQ.'
      }
    },
    {
      id: 'microprod1-strategy',
      type: 'text' as const,
      content: `
## Short Run vs. Long Run

| Time Period | Definition | Key Feature |
|------------|-----------|-------------|
| **Short run** | At least one input is fixed | Fixed costs exist; diminishing returns |
| **Long run** | All inputs are variable | No fixed costs; can change plant size |

### Economies and Diseconomies of Scale

In the long run, the **LRATC** (Long-Run Average Total Cost) curve shows:

| Region | ATC Behavior | Cause |
|--------|-------------|-------|
| **Economies of scale** | LRATC falls | Specialization, bulk purchasing, better technology |
| **Constant returns** | LRATC flat | Neither advantage nor disadvantage of size |
| **Diseconomies of scale** | LRATC rises | Coordination problems, bureaucracy |

> 🔑 **Minimum efficient scale** = the smallest output where LRATC reaches its minimum. This determines whether an industry naturally has many small firms or few large ones.
      `
    },
    {
      id: 'microprod1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If a firm\'s MC is \\$6 and ATC is \\$8, we know that ATC is:',
            options: [
              'Rising',
              'Falling',
              'At its minimum',
              'Equal to AVC'
            ],
            correctAnswer: 1,
            explanation: 'When MC (\\$6) < ATC (\\$8), each additional unit costs less than the current average, pulling the average DOWN. ATC is falling.'
          },
          {
            question: 'A firm doubles all inputs and output more than doubles. This firm is experiencing:',
            options: [
              'Diminishing marginal returns',
              'Economies of scale',
              'Diseconomies of scale',
              'Constant returns to scale'
            ],
            correctAnswer: 1,
            explanation: 'When doubling all inputs more than doubles output, per-unit costs fall — this is economies of scale. LRATC is declining in this region.'
          }
        ]
      }
    }
  ]
}