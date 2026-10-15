export const microLaborMarketsPart3Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlab3-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 3 of 7 — Labor-Market Shocks: Worked Cases**

---

| Section |
|---------|
| 📖 A Four-Step Method |
| Demand-Side Cases: Derived Demand and Capital |
| Supply-Side and Double-Shift Cases |
| What One Firm Does |

> 🔑 **Key Concept:** Labor-market questions use the same supply-and-demand method as product markets. The difference is the **reason** a curve moves: labor **demand** moves when something changes workers' **MRP** (the product price, productivity, or the price of another input), and labor **supply** moves when something changes how many people are **willing and able** to do the job.
`
    },
    {
      id: 'microlab3-method',
      type: 'text' as const,
      content: `
## 📖 A Four-Step Method

| Step | Question to ask | Example: a new tax credit makes solar panels cheaper for homeowners |
|---|---|---|
| 1. **Which labor market?** | Whose wage and employment are asked about? | The market for solar-panel installers |
| 2. **Demand or supply?** | Does the event change MRP, or the number of willing and able workers? | It raises the demand for installation, so it changes MRP: **demand** |
| 3. **Which direction?** | Does MRP or the number of workers rise or fall? | More installations are demanded at each price, so the price of installation and MRP rise: **right** |
| 4. **Effect on W and L** | Read the new intersection | Wage **rises**, employment **rises** |

### Demand Questions Run Through MRP

$$MRP = MP \\times P$$

Ask which factor in the formula the event changes:
- **P changes:** demand for the product changed (derived demand).
- **MP changes:** technology, training, or the amount of capital each worker uses changed.
- **Neither, but firms can swap labor for something else:** the price of a substitute or complementary input changed.

If the event changes neither MRP nor the number of willing workers, it does not shift either curve.
`
    },
    {
      id: 'microlab3-demand-cases',
      type: 'text' as const,
      content: `
## Demand-Side Cases: Derived Demand and Capital

### Case 1: A Derived-Demand Chain
Consumers want more electric bicycles.

1. **Product market:** demand for e-bikes rises, so the **price of e-bikes rises**.
2. **MRP:** each bike assembler's output is now worth more (MP × higher P), so MRP rises.
3. **Labor market for bike assemblers:** demand **shifts right**.
4. **Result:** the wage of assemblers **rises** and employment **rises**.

The chain can keep going: battery makers sell more batteries, so the demand for battery-plant workers rises too. Every input used to make e-bikes sees its demand rise.

### Case 2: Cheaper Capital That Replaces Workers (Substitute)
The price of self-checkout kiosks falls sharply.

1. **Labor market for cashiers.**
2. Kiosks do the same task as cashiers, so they are a **substitute** input. Stores replace some cashiers with kiosks: **demand** for cashiers shifts **left**.
3. **Result:** the wage of cashiers **falls** and employment **falls**.

### Case 3: Cheaper Capital That Helps Workers (Complement)
The price of professional design software falls by half.

1. **Labor market for graphic designers.**
2. Software makes each designer more productive, so it is a **complement**. Firms equip more designers, and MP rises: **demand shifts right**.
3. **Result:** the wage of designers **rises** and employment **rises**.

| Input whose price falls | Relationship to labor | Labor demand | Wage | Employment |
|---|---|---|---|---|
| Self-checkout kiosks | Substitute | Left | Falls | Falls |
| Design software | Complement | Right | Rises | Rises |

> 🔑 **AP Connection:** When a question says only "the price of capital falls," look for whether the capital **replaces** or **assists** the workers. AP questions state that relationship in the stem (for example, "robots that replace assembly workers"), so read for it before you shift anything.
`
    },
    {
      id: 'microlab3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Demand for organic vegetables rises sharply. In the competitive labor market for organic-farm workers, what happens?',
            options: [
              'Labor demand shifts right, and both the wage and the employment level rise',
              'Labor supply shifts right, so the wage falls and employment rises',
              'Demand for farm labor shifts left, as farms can charge more',
              'Nothing changes, as the event takes place in the product market'
            ],
            correctAnswer: 0,
            explanation: 'Higher vegetable demand raises the price of vegetables, which raises the MRP of farm workers, so labor demand shifts right. Labor demand is derived from product demand, so a product-market event does move the labor market.'
          },
          {
            question: 'Automated welding robots become much cheaper, and the robots replace human welders on assembly lines. The wage and employment of human welders',
            options: [
              'both fall',
              'both rise, as welders become more productive',
              'move apart: wages fall but employment rises',
              'stay the same, as welders\' MP is unchanged'
            ],
            correctAnswer: 0,
            explanation: 'Robots that replace welders are a substitute input, so cheaper robots shift the demand for welders left, lowering both the wage and employment. Welders would gain only if the robots were a complement that raised their MP.'
          }
        ]
      }
    },
    {
      id: 'microlab3-supply-cases',
      type: 'text' as const,
      content: `
## Supply-Side and Double-Shift Cases

### Case 4: A Supply Increase
A community college opens a free welding apprenticeship program.

1. **Labor market for welders.**
2. More people qualify to weld, which is not an MRP change: **supply**.
3. Supply shifts **right**.
4. **Result:** the wage of welders **falls** and employment **rises**.

### Case 5: Both Curves Move
An aging population increases the demand for home health care, **and** at the same time a wave of immigration adds many workers trained as home health aides.

| Shift | Effect on wage | Effect on employment |
|---|---|---|
| Demand right | Up | Up |
| Supply right | Down | Up |
| **Together** | **Indeterminate** | **Up** |

Employment rises for sure, because both shifts push it up. The wage depends on which shift is larger, so without sizes it is **indeterminate**.

### The Double-Shift Rule

| Demand | Supply | Wage | Employment |
|---|---|---|---|
| Right | Right | Indeterminate | Up |
| Left | Left | Indeterminate | Down |
| Right | Left | Up | Indeterminate |
| Left | Right | Down | Indeterminate |

> ⚠️ **Common trap:** Giving a definite answer for both variables after a double shift. On the AP exam, "indeterminate" (or "cannot be determined") is the correct answer for one of them, and you should say which shift's size would decide it.
`
    },
    {
      id: 'microlab3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Trace the Shock** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A state requires 1,000 extra training hours for barbers. In the barber labor market, the wage will ___',
            options: ['rise', 'fall', 'not change', 'be indeterminate']
          },
          {
            label: 'Demand for new homes falls. In the market for carpenters, employment will ___',
            options: ['fall', 'rise', 'not change', 'be indeterminate']
          },
          {
            label: 'Demand for accountants rises while many new accounting graduates enter the field. The accountants\' wage will ___',
            options: ['be indeterminate', 'rise', 'fall', 'not change']
          },
          {
            label: 'Demand for tutors rises while many tutors leave for higher-paying jobs. Employment of tutors will ___',
            options: ['be indeterminate', 'rise', 'fall', 'not change']
          }
        ],
        correctAnswers: ['rise', 'fall', 'be indeterminate', 'be indeterminate'],
        hint1: 'Extra training requirements shrink the number of qualified barbers.',
        hint2: 'Carpenters\' labor demand is derived from the demand for homes.',
        hint3: 'Demand right and supply right: one variable is certain, one is not.',
        explanation: 'More training hours shift barber supply left, raising the wage. Lower demand for homes lowers carpenters\' MRP, so employment falls. Demand and supply both rising for accountants leaves the wage indeterminate. Demand rising while supply falls for tutors raises the wage but leaves employment indeterminate.'
      }
    },
    {
      id: 'microlab3-firm',
      type: 'text' as const,
      content: `
## What One Firm Does

A market shock also changes the hiring of each **wage-taking firm**. Factor Markets, Part 3 showed the firm graph; here is how to connect it to the cases.

| Market shock | Market wage | One firm's graph | That firm's hiring |
|---|---|---|---|
| Supply of welders rises (Case 4) | Falls | MFC = W line moves **down**; MRP unchanged | **Rises**, a movement along MRP |
| Barber licensing rule cuts supply | Rises | MFC = W line moves **up**; MRP unchanged | **Falls**, a movement along MRP |
| Demand for e-bikes rises (Case 1) | Rises | MRP **shifts right** (higher product price), and MFC = W moves up | **Rises:** market employment rises, and with the same number of identical firms, each one hires more |

A supply shock is the clean case to graph: the firm's MRP stays put and the firm simply moves along it to the new wage.

> 🔑 **AP Connection:** On side-by-side graphs, a **market supply** shock gives the cleanest firm-level answer: higher wage, fewer workers; lower wage, more workers. Show it as a new horizontal MFC = W line and a movement along the same MRP curve.
`
    },
    {
      id: 'microlab3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Many experienced truck drivers retire at once. What happens in the market for truck drivers and at one wage-taking trucking firm?',
            options: [
              'The market wage rises, and the firm hires fewer drivers along its MRP curve',
              'The market wage falls, and the firm hires more drivers along its MRP curve',
              'The market wage rises, and the firm\'s MRP curve shifts right to match it',
              'The market wage stays put, and the firm hires fewer drivers than before'
            ],
            correctAnswer: 0,
            explanation: 'Retirements shift market supply left, raising the wage. The firm\'s MFC = W line moves up, and it moves up along its unchanged MRP curve to hire fewer drivers. A wage change never shifts MRP.'
          },
          {
            question: 'The price of cloud data storage falls, and stored data helps data analysts do more work per hour. In the market for data analysts, the wage',
            options: [
              'rises and employment rises',
              'rises and employment falls',
              'rises and employment stays the same',
              'falls and employment rises'
            ],
            correctAnswer: 0,
            explanation: 'Storage is a complement to analysts, so cheaper storage raises their MP and MRP and shifts labor demand right, raising both the wage and employment.'
          },
          {
            question: 'Labor demand for nurses shifts right and labor supply of nurses shifts left. What can be determined?',
            options: [
              'Only that the wage rises',
              'Employment falls, but the change in the wage is uncertain',
              'The wage and employment both rise',
              'The wage rises and employment falls'
            ],
            correctAnswer: 0,
            explanation: 'Both shifts push the wage up, so the wage definitely rises. Demand right raises employment while supply left lowers it, so employment is indeterminate without knowing which shift is larger.'
          }
        ]
      }
    }
  ]
}
