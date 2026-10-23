export const precalcExpLogModelingPart4Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Choosing and Validating a Model

**Part 4 of 7 — Choosing and Validating a Model**

Given a table of data, which type of function should model it? Compare the **pattern of change** over equal-length input intervals.

| Pattern over equal input steps | Model type | Example outputs (inputs $0, 1, 2, 3, 4$) |
|:-------------------------------|:-----------|:------------------------------------------|
| constant **first differences** | **linear** $y = mx + b$ | $5, 8, 11, 14, 17$ (differences $3, 3, 3, 3$) |
| constant **second differences** | **quadratic** $y = ax^2 + bx + c$ | $5, 8, 13, 20, 29$ (differences $3, 5, 7, 9$; second differences $2, 2, 2$) |
| constant **ratios** | **exponential** $y = ab^x$ | $5, 7.5, 11.25, 16.875, 25.3125$ (ratios $1.5, 1.5, 1.5, 1.5$) |
| equal output **differences** for equal input **ratios** | **logarithmic** $y = a + b\\log x$ | Part 5 |

> **Justify with the pattern, not the picture.** "The data are modeled by a quadratic function because the second differences of the output values are constant" is the sentence the exam wants.

### Worked Example — Which Model?

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:--|:--|:--|:--|:--|:--|
| $y$ | $10$ | $13$ | $17$ | $22$ | $29$ |

- First differences: $3, 4, 5, 7$ — not constant, so **not linear**.
- Second differences: $1, 1, 2$ — not constant, so a quadratic is doubtful.
- Ratios: $1.30, 1.31, 1.29, 1.32$ — nearly constant, so an **exponential** model is the best candidate.

Exponential regression gives $a \\approx 9.98$ and $b \\approx 1.304$: $y \\approx 9.98(1.304)^t$.
      `
    },
    {
      id: 'elm4-validate',
      type: 'text' as const,
      content: `
## ✅ Validating with Residuals

Compare the exponential model with a **linear** regression ($y = 4.7t + 8.8$) on the same data.

| $t$ | Actual | Exponential prediction | Residual | Linear prediction | Residual |
|:--|:--|:--|:--|:--|:--|
| $0$ | $10$ | $9.98$ | $+0.02$ | $8.8$ | $+1.2$ |
| $1$ | $13$ | $13.01$ | $-0.01$ | $13.5$ | $-0.5$ |
| $2$ | $17$ | $16.97$ | $+0.03$ | $18.2$ | $-1.2$ |
| $3$ | $22$ | $22.13$ | $-0.13$ | $22.9$ | $-0.9$ |
| $4$ | $29$ | $28.86$ | $+0.14$ | $27.6$ | $+1.4$ |

- **Exponential residuals:** tiny and alternating in sign, no pattern → appropriate.
- **Linear residuals:** positive at both ends and negative in the middle, a **U-shape** → the line misses the upward bend; not appropriate.

### Using Context, Too

The numbers choose between candidate models; the **context** rules models in or out before you even look.

| Context | Likely model | Why |
|:--------|:-------------|:----|
| a quantity that grows or shrinks by the same **percent** each period | exponential | constant ratio |
| a quantity that changes by the same **amount** each period | linear | constant difference |
| a height under gravity, an area as a side length grows | quadratic | second differences constant |
| a response that rises quickly, then more and more slowly, without leveling off | logarithmic | equal output changes for input ratios |

### Assumptions and Limitations

Every model **assumes the observed pattern continues**. State the limits:

- "The exponential model assumes the quantity keeps growing by about $30\\%$ per unit; it is reasonable within $0 \\leq t \\leq 4$ and increasingly uncertain beyond the data."
- Physical limits (a population cannot exceed its habitat; a percent cannot exceed $100$) often make a model valid only on a **restricted domain**.
      `
    },
    {
      id: 'elm4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Model Selection Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A table with inputs $0, 1, 2, 3, 4$ has outputs whose second differences are constant and nonzero. Which type of function should model the data?',
            options: [
              'Quadratic',
              'Linear',
              'Exponential',
              'Logarithmic'
            ],
            correctAnswer: 0,
            explanation: 'Constant second differences over equal input intervals characterize a quadratic function. Linear data have constant first differences, and exponential data have constant ratios.'
          },
          {
            question: 'A linear model and an exponential model are both fit to the same data. Which observation supports choosing the exponential model?',
            options: [
              'The residual plot of the linear model is U-shaped while the exponential model\'s residuals show no pattern',
              'The residuals of the linear model add up to zero',
              'The exponential model gives a larger predicted value at the last data point',
              'The linear model has a positive slope'
            ],
            correctAnswer: 0,
            explanation: 'A patterned residual plot means the model type misses the data\'s curvature, and a patternless one means the model fits. Regression residuals always sum to about zero, and a larger prediction or a positive slope says nothing about fit.'
          },
          {
            question: 'Which situation is best modeled by a linear function?',
            options: [
              'A pool filled by a hose that delivers $12$ gallons every minute',
              'A bacteria population that doubles every hour',
              'A car\'s value that loses $15\\%$ each year',
              'The height of a ball thrown upward as time passes'
            ],
            correctAnswer: 0,
            explanation: 'Adding the same $12$ gallons each minute is a constant rate of change, so the volume is linear in time. Doubling and losing $15\\%$ are constant ratios (exponential), and projectile height is quadratic.'
          }
        ]
      }
    },
    {
      id: 'elm4-input',
      type: 'input-boxes' as const,
      content: `
**Pattern Drill** 🧮

**1)** For the outputs $4, 7, 12, 19, 28$ at inputs $0, 1, 2, 3, 4$, what is the (constant) second difference? (e.g., $1, 4, 9, 16$: differences $3, 5, 7$, second differences $2$)

**2)** For the outputs $3, 6, 12, 24$ at inputs $0, 1, 2, 3$, what is the common ratio?

**3)** The line $y = 4.7t + 8.8$ is fit to data with the actual value $17$ at $t = 2$. What is the residual there?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '-1.2'],
        hint1: 'First differences: $3, 5, 7, 9$. Now subtract again.',
        hint2: '$6/3 = 12/6 = 24/12$.',
        hint3: 'Predicted: $4.7(2) + 8.8 = 18.2$. Residual $=$ actual $-$ predicted.',
        explanation: '1) Second differences $5-3 = 7-5 = 9-7 = 2$: quadratic. 2) Ratio $2$: exponential. 3) $17 - 18.2 = -1.2$: the line overestimates at $t = 2$.'
      }
    },
    {
      id: 'elm4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Model?** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Constant first differences over equal input intervals indicate a model that is',
            options: ['linear', 'quadratic', 'exponential', 'logarithmic']
          },
          {
            label: 'Constant ratios over equal input intervals indicate a model that is',
            options: ['linear', 'quadratic', 'exponential', 'logarithmic']
          },
          {
            label: 'Constant second differences over equal input intervals indicate a model that is',
            options: ['linear', 'quadratic', 'exponential', 'logarithmic']
          },
          {
            label: 'A chosen model is validated when its residual plot shows',
            options: ['no pattern', 'a U-shape', 'all positive residuals', 'residuals that grow with $x$']
          }
        ],
        correctAnswers: ['linear', 'exponential', 'quadratic', 'no pattern'],
        hint1: 'Same amount added each step.',
        hint2: 'Same factor multiplied each step.',
        hint3: 'The differences themselves change by a constant amount. A good model leaves only random scatter.',
        explanation: 'Constant differences: linear. Constant ratios: exponential. Constant second differences: quadratic. A patternless residual plot validates the model.'
      }
    },
    {
      id: 'elm4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A table gives $y = 2, 6, 18, 54$ at $x = 0, 1, 2, 3$. Which model is appropriate, and why?',
            options: [
              '$y = 2 \\cdot 3^x$, because the outputs have a constant ratio of $3$',
              '$y = 2 + 16x$, because the outputs increase by $52$ over three steps',
              '$y = 2x^2 + 2x + 2$, because the second differences are $8$ and $24$',
              '$y = 2 + 3\\log x$, because the outputs increase as $x$ increases'
            ],
            correctAnswer: 0,
            explanation: 'Each output is $3$ times the previous one, the signature of an exponential function; with $y(0) = 2$ the model is $2 \\cdot 3^x$. The differences $4, 12, 36$ are not constant (not linear), their differences $8, 24$ are not constant (not quadratic), and "outputs increase" does not identify a model type.'
          },
          {
            question: 'A linear model is fit to a data set. Its residuals are positive for the smallest and largest inputs and negative for the inputs in between. Which conclusion is best?',
            options: [
              'The data curve upward, so an exponential or quadratic model should be considered instead',
              'The linear model is appropriate because the residuals have both signs',
              'The linear model is appropriate because the residuals add to about zero',
              'The data have no pattern, so no model is appropriate'
            ],
            correctAnswer: 0,
            explanation: 'Residuals that are positive at the ends and negative in the middle form a U-shape: the data bend upward away from the line. A model with curvature, exponential or quadratic, should be tried and checked with its own residual plot.'
          }
        ]
      }
    }
  ]
};
