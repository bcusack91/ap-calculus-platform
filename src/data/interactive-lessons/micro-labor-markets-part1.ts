export const microLaborMarketsPart1Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlm1-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 1 of 7 — Supply, Demand, and Wage Determination**

---

## The Labor Market Model

| Component | Represented By | Determined By |
|-----------|---------------|---------------|
| **Demand for labor** | MRP curve (downward-sloping) | Firms' hiring decisions based on productivity |
| **Supply of labor** | Upward-sloping curve | Workers' willingness to work at various wages |
| **Equilibrium** | Intersection of D and S | Market wage and employment level |

### Why Is Labor Demand Downward-Sloping?

Due to **diminishing marginal returns**: As more workers are added to fixed capital, each additional worker produces less additional output → MRP declines.

| Workers | MP (units) | Product Price | MRP |
|---------|-----------|--------------|------|
| 1 | 20 | $10 | $200 |
| 2 | 16 | $10 | $160 |
| 3 | 11 | $10 | $110 |
| 4 | 7 | $10 | $70 |
| 5 | 3 | $10 | $30 |

If the market wage is $70/hour, the firm hires **4 workers** (MRP ≥ W for workers 1-4).

> 🔑 **Rule:** Hire until MRP = W. Every worker whose MRP ≥ W generates profit; stop when the next worker's MRP < W.
      `
    },
    {
      id: 'microlm1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the table above, if the market wage rises from $70 to $120, how many workers will the firm hire?',
            options: [
              '2 workers',
              '3 workers',
              '4 workers',
              '5 workers'
            ],
            correctAnswer: 0,
            explanation: 'At W = $120, only workers 1 (MRP=$200) and 2 (MRP=$160) have MRP ≥ W. Worker 3 has MRP=$110 < $120, so only 2 are hired.'
          },
          {
            question: 'The labor demand curve slopes downward because of:',
            options: [
              'Diminishing marginal returns to labor',
              'Increasing labor supply over time',
              'Government wage regulations',
              'Workers becoming less motivated'
            ],
            correctAnswer: 0,
            explanation: 'Diminishing marginal returns means each additional worker adds less output (declining MP), so MRP falls — creating a downward-sloping demand curve.'
          }
        ]
      }
    },
    {
      id: 'microlm1-content',
      type: 'text' as const,
      content: `
## Shifts in Labor Demand vs. Supply

### What Shifts Labor Demand?

| Factor | Direction | Example |
|--------|----------|---------|
| Product price increases | Demand shifts **right** | Rising car prices → more auto workers demanded |
| Productivity increases | Demand shifts **right** | New machinery makes each worker more productive |
| Price of substitute input falls | Demand shifts **left** | Cheaper robots replace assembly workers |
| Price of complementary input falls | Demand shifts **right** | Cheaper software makes programmers more productive |

### What Shifts Labor Supply?

| Factor | Direction | Example |
|--------|----------|---------|
| Immigration | Supply shifts **right** | More available workers at every wage |
| Population growth | Supply shifts **right** | Larger working-age population |
| Change in preferences | Supply shifts **left** | Workers prefer leisure → fewer willing to work |
| Educational requirements | Supply shifts **left** | Licensing requirements reduce qualified workers |

### Wage Differentials

Why do some workers earn more than others?

1. **Human capital** — Education, training, experience raise productivity (MRP)
2. **Compensating differentials** — Dangerous/unpleasant jobs pay more to attract workers
3. **Discrimination** — Wage gaps not explained by productivity differences
4. **Unions** — Collective bargaining raises wages above competitive equilibrium
      `
    },
    {
      id: 'microlm1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A firm should hire workers until MRP equals the _______.

2) Labor demand slopes down due to diminishing marginal _______.

3) Higher wages due to dangerous working conditions are called compensating _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['wage', 'returns', 'differentials'],
        hint1: 'The cost of hiring one more worker in a competitive market.',
        hint2: 'Each additional worker adds less additional output.',
        hint3: 'They compensate for unpleasant job characteristics.',
        explanation: 'Hire until MRP = Wage. Diminishing marginal returns cause declining MP/MRP. Compensating differentials are higher wages for dangerous/unpleasant jobs.'
      }
    },
    {
      id: 'microlm1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Shifts Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'New automation technology replaces warehouse workers. This shifts labor demand ___',
            options: ['Left (decrease)', 'Right (increase)', 'No change', 'Both left and right']
          },
          {
            label: 'A wave of immigration increases the pool of available workers. This shifts labor supply ___',
            options: ['Right (increase)', 'Left (decrease)', 'No change', 'Both left and right']
          },
          {
            label: 'The effect of increased immigration on equilibrium wages is to make them ___',
            options: ['Lower', 'Higher', 'Stay the same', 'Indeterminate']
          }
        ],
        correctAnswers: ['Left (decrease)', 'Right (increase)', 'Lower'],
        hint1: 'Automation is a substitute for labor.',
        hint2: 'More workers available at every wage.',
        hint3: 'Rightward shift in supply along a downward demand curve.',
        explanation: 'Automation replaces workers → labor demand falls. Immigration → more supply. More supply at same demand → equilibrium wage falls.'
      }
    },
    {
      id: 'microlm1-strategy',
      type: 'text' as const,
      content: `
## Minimum Wage: A Price Floor in the Labor Market

The minimum wage is a **price floor** on labor. If set above the equilibrium wage:

| Effect | Description |
|--------|------------|
| **Unemployment** | Qs of labor > Qd of labor → surplus of workers |
| **Who benefits?** | Workers who keep their jobs earn a higher wage |
| **Who is harmed?** | Workers who lose their jobs or can't find employment |
| **Deadweight loss** | Mutually beneficial employment transactions don't occur |

> ⚠️ **AP Nuance:** If the minimum wage is set **below** the equilibrium wage, it has **no effect** — it is not binding. The AP exam frequently tests whether students can identify binding vs. non-binding price floors.

### Debate Points (AP FRQ)
- **For:** Reduces poverty for employed workers, addresses monopsony power
- **Against:** Creates unemployment among low-skill workers, may not target poverty well
      `
    },
    {
      id: 'microlm1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a competitive labor market with equilibrium wage of $14/hour, a minimum wage of $11/hour will:',
            options: [
              'Create unemployment equal to the labor surplus',
              'Have no effect on wages or employment',
              'Raise wages to $11/hour for all workers',
              'Cause a shortage of workers'
            ],
            correctAnswer: 1,
            explanation: '$11 is below the equilibrium of $14, so the minimum wage is NOT binding. The market wage stays at $14 — the floor has no effect.'
          },
          {
            question: 'A technology firm finds that each additional programmer adds $150,000 in annual revenue. If the market salary is $130,000, the firm should:',
            options: [
              'Stop hiring since salaries are too high',
              'Hire more programmers because MRP exceeds the wage',
              'Cut salaries to maximize profit',
              'Hire exactly one programmer'
            ],
            correctAnswer: 1,
            explanation: 'MRP ($150K) > W ($130K), so each additional programmer adds more revenue than they cost. The firm should hire more until MRP falls to equal the wage.'
          }
        ]
      }
    }
  ]
}