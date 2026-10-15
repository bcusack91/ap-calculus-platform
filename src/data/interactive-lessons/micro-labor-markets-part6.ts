export const microLaborMarketsPart6Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlab6-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Labor Markets Are Tested |
| FRQ Practice 1: A Licensing Exam for Nurses |
| FRQ Practice 2: A Minimum Wage with Equations |

> 🔑 **Key Concept:** Labor-market free-response questions follow the product-market script with labor-market labels: **Wage** on the vertical axis, **Quantity of labor** on the horizontal axis, demand from **MRP**, and supply from workers. Points come from identifying **which curve** an event moves, tracing the effect on the **market** and on **one firm**, and doing minimum-wage arithmetic with the short side of the market.
`
    },
    {
      id: 'microlab6-tested',
      type: 'text' as const,
      content: `
## 📖 How Labor Markets Are Tested

| Task in the prompt | What earns the point | Example |
|---|---|---|
| **Draw** a labor market | Axes labeled Wage and Quantity of labor; D_L sloping down, S_L sloping up; equilibrium W and L marked | W₁ and Q₁ on the axes |
| **Show** a shift | Shift the correct curve in the correct direction; new W and L marked | Licensing: S_L shifts left |
| **Explain** a shift | The determinant behind it | "Fewer people are qualified, so supply decreases" |
| **Firm response** (wage taker) | Horizontal MFC = W line moves with the market wage; movement along MRP | Higher wage, fewer workers hired |
| **Calculate** with a minimum wage | Employment from labor demanded at the floor; surplus = L_s − L_d | "L_d = 440, L_s = 600, surplus 160" |

### Habits That Save Points
1. **Say the determinant.** "Demand for nurses increases because the demand for health care increased" (derived demand) earns the explanation point; "because hospitals need more nurses" does not.
2. **Keep the firm a wage taker.** Its labor supply is horizontal; it never sets the wage.
3. **Check whether a floor binds** before computing anything.
4. **After a double shift,** name the variable that is indeterminate.
`
    },
    {
      id: 'microlab6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice 1: A Licensing Exam for Nurses

**Prompt.** The labor market for registered nurses in a state is perfectly competitive. Mercy General Hospital hires nurses in this market and is a wage taker.

**(a)** Draw correctly labeled side-by-side graphs for the labor market for nurses and for Mercy General. Label the market wage W₁ and the number of nurses Mercy General hires q₁.

**(b)** The state adds a difficult new licensing exam, which reduces the number of qualified nurses. On your graphs, show the effect on the market wage and on the number of nurses Mercy General hires.

**(c)** Explain why Mercy General's hiring changes in the direction you showed in (b).

**(d)** At the same time as the licensing exam, the state's population ages and the demand for medical care rises. Considering both events, what happens to the market wage and to market employment of nurses? Explain.

### Model Answers

**(a)** Left: Wage and Quantity of labor axes, downward D_L and upward S_L crossing at W₁ and Q₁. Right: horizontal line at W₁ labeled **S = MFC = W**, a downward **MRP = D** curve, and q₁ where they cross.

**(b)** S_L shifts **left** to S₂. The market wage rises to W₂ and market employment falls. On the hospital graph, the MFC = W line moves up to W₂, and hiring falls to q₂ < q₁ along the same MRP curve.

**(c)** At the higher wage, the MRP of the last nurses Mercy General had hired is now **below** their MFC, so hiring them would reduce profit. The hospital cuts back until MRP = W₂.

**(d)** Higher demand for medical care raises the price of care and so the **MRP of nurses**: labor demand shifts right (derived demand). Supply shifts left from the exam. **The wage rises** (both shifts push it up). **Employment is indeterminate**: the demand shift raises it and the supply shift lowers it, and the net effect depends on which shift is larger.

### Scoring Notes
- In (b), moving Mercy General's MRP curve loses the point; only the wage line moves.
- In (d), "employment rises" or "employment falls" with no qualification earns nothing; the answer is indeterminate, with the reason.
`
    },
    {
      id: 'microlab6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Practice 1, which explanation of the demand shift in part (d) earns the point?',
            options: [
              'Higher demand for medical care raises the value of each nurse\'s output, so MRP rises',
              'Hospitals need more nurses because nurses now cost more',
              'Nurses are more willing to work once there is a licensing exam',
              'The wage rises, so the demand curve for nurses shifts right'
            ],
            correctAnswer: 0,
            explanation: 'Labor demand is derived from the demand for the product, so more demand for care raises the value of a nurse\'s output and shifts labor demand right. A higher wage moves hospitals along their demand curve; it does not shift it.'
          },
          {
            question: 'After the licensing exam alone, which is true of Mercy General?',
            options: [
              'It pays a higher wage and employs fewer nurses',
              'It pays a lower wage and employs fewer nurses',
              'It pays the same wage and employs fewer nurses',
              'It pays a higher wage and employs more nurses'
            ],
            correctAnswer: 0,
            explanation: 'Supply falls in the market, so the market wage rises. As a wage taker, the hospital pays the new wage and moves up its MRP curve to a smaller number of nurses.'
          },
          {
            question: 'A student says, "In (d), market employment of nurses must fall, because the licensing exam came first." What is the best response?',
            options: [
              'The order does not matter, since employment depends on the sizes of the two shifts',
              'The student is right, because a supply shift always outweighs a demand shift',
              'Employment must rise, because the aging population is the larger change',
              'Employment cannot change when the wage rises, so it stays constant'
            ],
            correctAnswer: 0,
            explanation: 'Both shifts happen in the same period, and they push employment in opposite directions. Without information about their sizes, the change in employment is indeterminate, while the wage definitely rises.'
          }
        ]
      }
    },
    {
      id: 'microlab6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice 2: A Minimum Wage with Equations

**Prompt.** In a perfectly competitive labor market for food-processing workers, labor demand is **L_d = 1,000 − 40W** and labor supply is **L_s = 40 + 40W**, where W is the hourly wage in dollars.

**(a)** Calculate the equilibrium wage and the equilibrium quantity of labor.

**(b)** The government sets a minimum wage of \\$14. Calculate the number of workers employed.

**(c)** Calculate the surplus of labor at the minimum wage.

**(d)** Does total wage income rise or fall? Show your work.

**(e)** Calculate the deadweight loss from the minimum wage.

Work parts (a) through (c) in the boxes below, then compare with the model answers.
`
    },
    {
      id: 'microlab6-input',
      type: 'input-boxes' as const,
      content: `
**Solve FRQ Practice 2** ✍️

1) Equilibrium wage, in dollars?

2) Workers employed at the \\$14 minimum wage?

3) Surplus of labor at the \\$14 minimum wage?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '440', '160'],
        hint1: 'Set 1,000 − 40W equal to 40 + 40W.',
        hint2: 'Employment is the short side: plug \\$14 into labor demand.',
        hint3: 'Plug \\$14 into labor supply, then subtract labor demanded.',
        explanation: '1) 1,000 − 40W = 40 + 40W gives 80W = 960, so W = \\$12. 2) L_d = 1,000 − 40(14) = 440. 3) L_s = 40 + 40(14) = 600, so the surplus is 600 − 440 = 160.'
      }
    },
    {
      id: 'microlab6-frq2-answers',
      type: 'text' as const,
      content: `
### Model Answers

**(a)** 1,000 − 40W = 40 + 40W, so 960 = 80W and **W = \\$12**. L = 1,000 − 40(12) = **520** workers.

**(b)** The \\$14 floor is above \\$12, so it binds. Employment = L_d = 1,000 − 40(14) = **440**.

**(c)** L_s = 40 + 40(14) = 600. Surplus = 600 − 440 = **160** workers.

**(d)** Before: \\$12 × 520 = \\$6,240. After: \\$14 × 440 = \\$6,160. Wage income **falls by \\$80**. Using the midpoint method, employment falls 80 ÷ 480 ≈ 16.7% while the wage rises \\$2 ÷ \\$13 ≈ 15.4%, so labor demand is slightly elastic over this range.

**(e)** At L = 440, the demand wage is \\$14 and the supply wage is (440 − 40) ÷ 40 = \\$10. DWL = ½ × (520 − 440) × (\\$14 − \\$10) = ½ × 80 × \\$4 = **\\$160**.

### Scoring Notes
- In (b), using labor **supplied** (600) as employment is the most common error. Firms decide how many to hire.
- In (d), a direction with no calculation earns no credit.
- In (e), the triangle runs from the employment level under the floor to the equilibrium quantity, between the demand and supply curves.
`
    },
    {
      id: 'microlab6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Practice 2, suppose the minimum wage were \\$11 instead. What would employment be?',
            options: [
              '520',
              '560',
              '480',
              '440'
            ],
            correctAnswer: 0,
            explanation: 'An \\$11 floor is below the \\$12 equilibrium, so it does not bind and employment stays at 520. 560 is labor demanded at \\$11 and 480 is labor supplied at \\$11, but neither is the market outcome.'
          },
          {
            question: 'If the food-processing employer were instead a monopsony paying below \\$12, how could a \\$12 minimum wage affect employment?',
            options: [
              'It would raise employment',
              'It would lower employment, as any binding floor does',
              'It would leave employment unchanged, since only wages move',
              'It would create a surplus of workers, as in part (c)'
            ],
            correctAnswer: 0,
            explanation: 'For a monopsony, a minimum wage up to the competitive wage makes MFC flat, so the firm hires more workers, up to the competitive quantity. The fall in employment from a binding floor is the competitive-market result.'
          }
        ]
      }
    }
  ]
}
