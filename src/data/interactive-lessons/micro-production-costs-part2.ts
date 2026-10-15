export const microProductionCostsPart2Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'micropro2-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 2 of 7 — The Production Function in Depth**

---

| Section |
|---------|
| 📖 Three Phases of Marginal Returns |
| Reading the Product Curves |
| Why Marginal Product Rises, Then Falls |
| Diminishing Returns Is a Short-Run Idea |

> 🔑 **Key Concept:** In the short run, a firm adds a **variable input** (usually labor) to a **fixed input** (usually capital). Marginal product may rise at first, but it **eventually falls**, and it can even turn negative. Those changes in marginal product are what give cost curves their shapes in the rest of this topic.
`
    },
    {
      id: 'micropro2-phases',
      type: 'text' as const,
      content: `
## 📖 Three Phases of Marginal Returns

A pizza shop has **one oven** (fixed) and hires workers (variable). Recall: $MP = \\Delta TP / \\Delta L$ and $AP = TP / L$.

| Workers (L) | Total product (pizzas/hour) | Marginal product | Average product | Phase |
|---|---|---|---|---|
| 0 | 0 | — | — | |
| 1 | 8 | 8 | 8.0 | Increasing returns |
| 2 | 20 | 12 | 10.0 | Increasing returns |
| 3 | 30 | 10 | 10.0 | Diminishing returns |
| 4 | 36 | 6 | 9.0 | Diminishing returns |
| 5 | 40 | 4 | 8.0 | Diminishing returns |
| 6 | 42 | 2 | 7.0 | Diminishing returns |
| 7 | 40 | −2 | 5.7 | Negative returns |

### The Three Phases
1. **Increasing marginal returns** (workers 1–2): each worker adds more than the one before (8, then 12).
2. **Diminishing marginal returns** (workers 3–6): MP is still **positive** but **falling** (10, 6, 4, 2). Total product still rises, just more slowly.
3. **Negative marginal returns** (worker 7): MP is below zero. The seventh worker gets in the way, and total output **falls**.

### Precise Language
- Diminishing marginal returns **begin with the 3rd worker**, the first whose MP is lower than the previous worker's.
- "Diminishing" does **not** mean total product is falling. Total product falls only when MP is **negative**.
- A firm would never knowingly hire the 7th worker, even if labor were free.

> 🔑 **AP Connection:** If a question asks where diminishing marginal returns **begin**, find the first unit of input whose marginal product is smaller than the one before it, not the point where marginal product reaches zero.
`
    },
    {
      id: 'micropro2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the pizza shop table, total product is at its maximum when the shop employs how many workers?',
            options: [
              '6',
              '2',
              '3',
              '7'
            ],
            correctAnswer: 0,
            explanation: 'Total product peaks at 42 pizzas with 6 workers. The 6th worker still adds a positive 2 pizzas, while the 7th has a negative marginal product and lowers output to 40.'
          },
          {
            question: 'A farm adds a fifth worker, and total output rises from 900 to 950 bushels, while the fourth worker had raised output from 820 to 900. What does the fifth worker show?',
            options: [
              'Diminishing marginal returns',
              'Negative marginal returns',
              'Increasing marginal returns',
              'Diseconomies of scale'
            ],
            correctAnswer: 0,
            explanation: 'The fifth worker\'s marginal product (50) is smaller than the fourth\'s (80) but still positive, which is diminishing marginal returns. Diseconomies of scale describe the long run, when every input changes.'
          }
        ]
      }
    },
    {
      id: 'micropro2-curves',
      type: 'text' as const,
      content: `
## Reading the Product Curves

AP questions describe or show three curves with labor on the horizontal axis.

### Total Product (TP)
- Rises **at an increasing rate** (getting steeper) while MP is rising.
- Rises **at a decreasing rate** (flattening) once MP is falling but positive.
- **Peaks** where MP = 0.
- **Falls** once MP is negative.

The **slope of the TP curve is MP**. Steepest TP = highest MP.

### Marginal Product (MP)
- Rises, peaks, then falls. In the pizza table it peaks at the 2nd worker (12).
- Crosses the horizontal axis (MP = 0) at the labor level where TP is highest.

### Average Product (AP)
- Rises while MP > AP and falls while MP < AP.
- **MP crosses AP at AP's maximum.** In the table, the 3rd worker's MP (10) equals AP at 3 workers (10), and AP is at its highest value of 10.

| If marginal product is... | Then average product is... | And total product is... |
|---|---|---|
| Above AP and rising | Rising | Rising faster |
| Above AP but falling | Still rising | Rising more slowly |
| Equal to AP | At its maximum | Rising |
| Below AP but positive | Falling | Rising more slowly |
| Zero | Falling | At its maximum |
| Negative | Falling | Falling |

> 🔑 **AP Connection:** "MP is falling" and "AP is falling" are different claims. In the pizza shop, MP starts falling with the 3rd worker, but AP does not start falling until the 4th.
`
    },
    {
      id: 'micropro2-input',
      type: 'input-boxes' as const,
      content: `
**Compute from Total Product** ✍️

A bakery with one oven has this production schedule:

| Workers | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Loaves per hour | 0 | 5 | 14 | 21 | 24 | 25 |

1) Marginal product of the 3rd worker?

2) Average product with 4 workers?

3) Diminishing marginal returns begin with which worker? (Enter the number.)

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '6', '3'],
        hint1: 'MP = change in total product: 21 − 14.',
        hint2: 'AP = TP ÷ L: 24 ÷ 4.',
        hint3: 'List the MPs: 5, 9, 7, 3, 1. Which worker first adds less than the one before?',
        explanation: '1) MP = 21 − 14 = 7. 2) AP = 24 ÷ 4 = 6. 3) MPs are 5, 9, 7, 3, 1; the 3rd worker adds 7, less than the 2nd worker\'s 9, so diminishing returns begin with worker 3.'
      }
    },
    {
      id: 'micropro2-why',
      type: 'text' as const,
      content: `
## Why Marginal Product Rises, Then Falls

### Early Increasing Returns: Specialization
With one worker, the same person takes orders, stretches dough, tends the oven and boxes pizzas, losing time switching tasks. A second worker lets each **specialize**, so the pair produces more than twice what one worker could. That is why the 2nd worker's MP (12) exceeds the 1st's (8).

### Diminishing Returns: A Fixed Input
The oven does not grow as workers are added. Each new worker shares the **same fixed capital** with more coworkers, so there is less oven space and counter room per worker. Eventually workers wait for the oven, and each additional worker adds less.

### Negative Returns: Crowding
With too many workers in a small kitchen, people block each other and make mistakes. Output falls.

> ⚠️ **AP Trap:** Diminishing returns is **not** caused by later workers being less skilled. Economists assume every worker is identical; output per added worker falls because the **fixed input** is spread thinner.
`
    },
    {
      id: 'micropro2-shortrun',
      type: 'text' as const,
      content: `
## Diminishing Returns Is a Short-Run Idea

| | Diminishing marginal returns | Decreasing returns to scale |
|---|---|---|
| Time frame | **Short run** | **Long run** |
| Inputs changed | **One** input, others fixed | **All** inputs, in the same proportion |
| Example | Add a 5th cook to one kitchen | Double the kitchens, ovens **and** cooks |
| What falls | Extra output from each added worker | Output grows by a smaller percentage than inputs |
| Cost curve it shapes | The rising part of **MC** and short-run ATC | The rising part of **long-run ATC** |

A firm can face diminishing marginal returns in the short run and still enjoy **increasing returns to scale** in the long run. Opening a second, fully equipped pizza shop does not crowd the first kitchen.

### Connecting to Costs
Each worker costs the same wage, so:
- When MP is **rising**, each extra pizza takes less labor time, and **marginal cost falls**.
- When MP is **falling**, each extra pizza takes more labor time, and **marginal cost rises**.

Part 3 turns this mirror image into numbers: $MC = \\dfrac{\\text{wage}}{MP}$.
`
    },
    {
      id: 'micropro2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Situation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 3rd tutor in a one-room tutoring center adds 10 sessions; the 2nd tutor added 14. This shows ___',
            options: ['Diminishing marginal returns', 'Negative marginal returns', 'Increasing marginal returns', 'Constant returns to scale']
          },
          {
            label: 'Doubling every input at a factory exactly doubles output. This shows ___',
            options: ['Constant returns to scale', 'Diminishing marginal returns', 'Increasing marginal returns', 'Negative marginal returns']
          },
          {
            label: 'When marginal product equals zero, total product is ___',
            options: ['At its maximum', 'At its minimum', 'Equal to zero', 'Rising quickly']
          }
        ],
        correctAnswers: ['Diminishing marginal returns', 'Constant returns to scale', 'At its maximum'],
        hint1: 'Is the extra output still positive? Is it bigger or smaller than before?',
        hint2: 'All inputs change, so this is a long-run idea.',
        hint3: 'MP is the slope of the TP curve.',
        explanation: 'The 3rd tutor adds less than the 2nd but still adds output: diminishing marginal returns. Scaling all inputs in proportion is a returns-to-scale question, and output growing by the same proportion is constant returns. MP = 0 means TP is flat at its peak.'
      }
    },
    {
      id: 'micropro2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which explanation of diminishing marginal returns would an economist accept?',
            options: [
              'Each new hire shares the same fixed equipment with more coworkers',
              'Workers hired later are less skilled than the earlier hires',
              'The firm pays each added worker a lower wage than the last',
              'Doubling the plant size raises output by less than double'
            ],
            correctAnswer: 0,
            explanation: 'Diminishing returns comes from adding a variable input to a fixed one, so each worker shares the fixed capital with more coworkers. Workers are assumed identical, and changing plant size is a long-run returns-to-scale question.'
          },
          {
            question: 'Marginal product of labor is positive but falling. Which statement must be true?',
            options: [
              'Total product is rising',
              'Average product is falling',
              'Average product is at its peak',
              'Output has begun to decline'
            ],
            correctAnswer: 0,
            explanation: 'Any positive MP adds to output, so total product rises. Average product can still be rising if MP is above it, so it need not be falling or at its peak; total product falls only when MP is negative.'
          },
          {
            question: 'A firm\'s marginal product of labor rises as it hires its first few workers. Over that range, what happens to marginal cost?',
            options: [
              'Marginal cost falls',
              'Marginal cost rises',
              'Marginal cost is constant',
              'Marginal cost equals zero'
            ],
            correctAnswer: 0,
            explanation: 'Each worker is paid the same wage, so when each worker adds more output, the cost of each extra unit falls. Marginal cost mirrors marginal product: it falls while MP rises and rises once MP falls.'
          }
        ]
      }
    }
  ]
};
