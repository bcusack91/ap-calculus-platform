export const precalcFunctionModelingPart7Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm7-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 7 of 7 — FRQ Workshop and Mastery Check**

### Anatomy of FRQ Question 2: Modeling a Non-Periodic Context

This free-response question is **calculator-active**. It gives a table (or a description) of a real quantity and asks you to build and use a model. The parts almost always follow this script:

| Part | What is asked | What earns the point |
|:---:|:---|:---|
| (A) | Choose a model type and **justify** | Name the pattern: "first differences roughly constant" or "second differences roughly constant" |
| (A) | State the regression model | Equation with coefficients to **three decimal places** |
| (B) | Use the model to **predict** | A value with **units** and the word "**approximately**" |
| (B) | Interpret an **average rate of change** | Value, units of output **per** input, and the **interval** |
| (C) | State an **assumption** or **limitation** | Name the pattern assumed and where it might fail (extrapolation, context) |

> **Key Fact:** Every sentence you write should be checkable: a number, its units, the interval it applies to, and the reason it is true.`
    },
    {
      id: 'fm7-worked',
      type: 'text' as const,
      content: `## Worked FRQ

The table gives the number of visitors, in thousands, to a new museum during month $t$ after it opened.

| $t$ (month) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $N$ (thousands) | $8.2$ | $9.6$ | $11.9$ | $15.1$ | $19.0$ | $23.8$ |

### (A) Choose and justify a model type; state the model

First differences: $1.4, 2.3, 3.2, 3.9, 4.8$. They are **not** constant, so the model is not linear.

Second differences: $0.9, 0.9, 0.7, 0.9$: **roughly constant**.

**Justification:** "The first differences increase by roughly the same amount each month (the second differences are roughly constant, about $0.9$), so the rate of change is changing at a roughly constant rate and a **quadratic** model is appropriate."

Quadratic regression on the calculator:

$$N(t) = 0.418t^2 + 0.201t + 7.560$$

### (B) Predict, with units and "approximately"

Using the stored full-precision model, $N(8) \\approx 35.909$.

**Answer:** "The model predicts that approximately $35.909$ thousand visitors, about $35{,}900$ people, will visit the museum in month $8$."

(Using the rounded coefficients gives $0.418(64) + 0.201(8) + 7.560 = 35.920$: a different third decimal. Keep full precision.)

### (B) Interpret an average rate of change

From the table, on $[2, 6]$:

$$\\frac{N(6) - N(2)}{6 - 2} = \\frac{23.8 - 9.6}{4} = \\frac{14.2}{4} = 3.55$$

**Answer:** "Between month $2$ and month $6$, the number of monthly visitors increased at an average rate of $3.55$ thousand visitors per month."

### (C) A limitation

$N(12) \\approx 70.140$. **Answer:** "The model assumes the pattern of increasing growth continues past month $6$. A museum's monthly attendance cannot grow faster and faster indefinitely (building capacity, the novelty of a new museum fading), so predictions far beyond the data, such as month $12$, are unreliable."

> **Key Fact:** Notice what each answer contains: a **number**, its **units**, the **interval or input** it belongs to, and for the model type, the **pattern** that justifies it.`
    },
    {
      id: 'fm7-mc',
      type: 'multiple-choice' as const,
      content: '**FRQ checks.** 🎯 Use the museum data: $N = 8.2, 9.6, 11.9, 15.1, 19.0, 23.8$ thousand visitors in months $1$ through $6$.',
      exercise: {
        questions: [
          {
            question: 'The calculator reports the quadratic regression coefficients $a = 0.4178571$, $b = 0.2007143$ and $c = 7.56$. Which is the correctly stated model?',
            options: ['$N(t) = 0.418t^2 + 0.201t + 7.560$', '$N(t) = 0.42t^2 + 0.20t + 7.56$', '$N(t) = 0.417t^2 + 0.200t + 7.560$', '$N(t) = 7.560t^2 + 0.201t + 0.418$'],
            correctAnswer: 0,
            explanation: 'Round each coefficient to three decimal places: $0.418$, $0.201$, $7.560$. Two decimals is not enough, truncating instead of rounding gives $0.417$ and $0.200$, and the last option assigns the coefficients to the wrong powers.'
          },
          {
            question: 'Which sentence correctly justifies choosing a quadratic model for the museum data?',
            options: ['The second differences are roughly constant, so the rate of change is changing steadily', 'The first differences are roughly constant, so the rate of change is roughly constant', 'The number of visitors is increasing each month, so the model must be quadratic', 'A quadratic has three coefficients and the table has six values, which is enough'],
            correctAnswer: 0,
            explanation: 'The first differences $1.4, 2.3, 3.2, 3.9, 4.8$ grow by about $0.9$ each month: roughly constant second differences are the quadratic signature. Roughly constant first differences would justify a line, "increasing" alone fits many model types, and the count of coefficients is not a reason.'
          },
          {
            question: 'What is the average rate of change of $N$ over the interval $[1, 4]$, and what does it mean?',
            options: ['$2.3$ thousand visitors per month: attendance rose by an average of $2{,}300$ visitors per month from month $1$ through month $4$', '$6.9$ thousand visitors per month: attendance rose by an average of $6{,}900$ visitors per month from month $1$ to month $4$', '$3.55$ thousand visitors per month: attendance rose by an average of $3{,}550$ visitors per month from month $1$ to month $4$', '$15.1$ thousand visitors per month: the museum had an average of $15{,}100$ visitors per month in month $4$'],
            correctAnswer: 0,
            explanation: '$\\frac{N(4) - N(1)}{4 - 1} = \\frac{15.1 - 8.2}{3} = \\frac{6.9}{3} = 2.3$ thousand visitors per month. Forgetting to divide by the length of the interval gives $6.9$; $3.55$ is the rate on $[2, 6]$; and $15.1$ is a value, not a rate.'
          }
        ]
      }
    },
    {
      id: 'fm7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Write the answer sentence.** 🔽 The museum model gives $N(8) \\approx 35.909$ and $N(12) \\approx 70.140$ (thousand visitors).',
      exercise: {
        dropdowns: [
          {
            label: 'The best way to report the prediction for month $8$ is:',
            options: [
              'Approximately $35.909$ thousand visitors in month $8$',
              'Exactly $35.909$ thousand visitors will come in month $8$',
              'Approximately $35.909$ visitors per month in month $8$',
              'Approximately $8$ thousand visitors by the end of month $35.909$'
            ],
            correctAnswer: 0
          },
          {
            label: 'The average rate of change of $N$ on $[2, 6]$ is $3.55$. The correct interpretation is:',
            options: [
              'From month $2$ to month $6$, attendance rose at an average rate of $3.55$ thousand visitors per month',
              'Over months $2$ through $6$ combined, the museum had a total of $3.55$ thousand visitors',
              'In month $6$ the museum had exactly $3.55$ thousand more visitors than it had in month $5$',
              'Monthly attendance increases by exactly $3.55$ thousand visitors every single month of the year'
            ],
            correctAnswer: 0
          },
          {
            label: 'The best statement of a limitation when using the model for month $12$ is:',
            options: [
              'Month $12$ is far beyond months $1$ to $6$, so the prediction assumes the accelerating growth continues',
              'The model cannot be used for month $12$ because $12$ does not appear in the table of data values',
              'The prediction for month $12$ is unreliable because the regression coefficients were rounded to three decimal places',
              'A quadratic model can never be used to predict more than one month beyond the data'
            ],
            correctAnswer: 0
          }
        ],
        correctAnswers: [
          'Approximately $35.909$ thousand visitors in month $8$',
          'From month $2$ to month $6$, attendance rose at an average rate of $3.55$ thousand visitors per month',
          'Month $12$ is far beyond months $1$ to $6$, so the prediction assumes the accelerating growth continues'
        ],
        hint1: 'A model value is approximate, and the units are thousands of visitors.',
        hint2: 'An average rate of change names its interval and its units of output per input.',
        hint3: 'The limitation is about extrapolating the pattern, not about rounding or about $12$ being missing from the table.',
        explanation: 'Predictions from a model are reported with "approximately," correct units (thousands of visitors) and the correct input (month $8$). An average rate of change is "per month" over the stated interval and is not a total or a single month\'s change. The limitation to name is extrapolation: the model assumes the observed accelerating growth continues six months past the data.'
      }
    },
    {
      id: 'fm7-input',
      type: 'input-boxes' as const,
      content: `**Rates from the table.** ✍️

| $t$ (month) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $N$ (thousands) | $8.2$ | $9.6$ | $11.9$ | $15.1$ | $19.0$ | $23.8$ |

**1)** The average rate of change of $N$ over $[1, 6]$, in thousand visitors per month:

**2)** The average rate of change of $N$ over $[5, 6]$, in thousand visitors per month:

**3)** The second difference between the first two first differences ($1.4$ and $2.3$):`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.12', '4.8', '0.9'],
        hint1: '$\\frac{23.8 - 8.2}{6 - 1}$.',
        hint2: '$\\frac{23.8 - 19.0}{1}$.',
        hint3: 'Subtract: $2.3 - 1.4$.',
        explanation: '(1) $\\frac{15.6}{5} = 3.12$ thousand visitors per month over the whole table. (2) $23.8 - 19.0 = 4.8$ thousand visitors per month in the last month, larger than the overall average because the growth is accelerating. (3) $2.3 - 1.4 = 0.9$, the roughly constant second difference that justified the quadratic model.'
      }
    },
    {
      id: 'fm7-summary',
      type: 'text' as const,
      content: `### Function Model Selection and Construction — Summary 🎓

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Choosing a function model | ✅ |
| 2 | Linear and quadratic models from data | ✅ |
| 3 | Polynomial models in context | ✅ |
| 4 | Piecewise-defined functions: notation and evaluation | ✅ |
| 5 | Building piecewise models | ✅ |
| 6 | Assumptions, limitations and domain restrictions | ✅ |
| 7 | FRQ workshop and mastery check | ✅ |

### The FRQ Checklist

1. **Type + pattern:** "roughly constant first/second differences," "a product of lengths," "the rule changes at …"
2. **Model:** regression equation to three decimal places; full precision afterward
3. **Prediction:** "approximately," units, the input it belongs to
4. **Rate of change:** value, output units **per** input unit, interval
5. **Assumption or limitation:** the pattern assumed and where it may fail (extrapolation, negative quantities, discrete inputs)

> **Key Fact:** A model is a claim about a pattern. Choose it by the pattern, use it with units, and say where it stops being true.`
    },
    {
      id: 'fm7-exit',
      type: 'multiple-choice' as const,
      content: '**Exit Quiz** ✅',
      exercise: {
        questions: [
          {
            question: 'A rectangular tray is made from a $30$ cm by $20$ cm sheet by cutting squares of side $x$ from the corners and folding. Which type of function models the tray\'s volume, and what is the domain in context?',
            options: ['Cubic; $0 < x < 10$', 'Quadratic; $0 < x < 10$', 'Cubic; $0 \\le x \\le 15$', 'Linear; $0 < x < 20$'],
            correctAnswer: 0,
            explanation: 'Volume is $x(30 - 2x)(20 - 2x)$, a product of three lengths, so it is cubic. The width $20 - 2x$ must be positive, which forces $x < 10$; $x \\le 15$ comes from the length alone, is the looser condition, and wrongly includes endpoints that give no tray.'
          },
          {
            question: 'A ride-share fare is $F(d) = \\begin{cases} 6 & 0 < d \\le 2 \\\\ 6 + 1.5(d - 2) & d > 2 \\end{cases}$ dollars for a trip of $d$ miles. What are $F(2)$ and $F(6)$?',
            options: ['$F(2) = 6$ and $F(6) = 12$', '$F(2) = 6$ and $F(6) = 15$', '$F(2) = 9$ and $F(6) = 12$', '$F(2) = 6$ and $F(6) = 9$'],
            correctAnswer: 0,
            explanation: 'The condition $d \\le 2$ includes $2$, so $F(2) = 6$. For $d = 6$: $6 + 1.5(4) = 12$. Charging $1.5$ on all $6$ miles gives $15$, and $9$ uses $d - 2 = 2$.'
          },
          {
            question: 'A linear regression on a tree\'s height for ages $2$ through $10$ years gives $h(t) = 0.612t + 1.084$ meters. Which statement is a valid limitation of using the model to predict the height at age $60$?',
            options: ['Age $60$ is far outside the observed ages, so the prediction assumes the constant growth rate simply continues', 'The model cannot be used because $60$ is not one of the even-numbered ages in the observed data', 'The prediction is invalid because the height of a tree must be measured in centimeters, not meters', 'A linear model can never be used for a living thing because living things do not grow in straight lines'],
            correctAnswer: 0,
            explanation: 'The model is trusted on the observed domain, ages $2$ to $10$. Extrapolating $50$ years assumes the constant growth rate of about $0.612$ meters per year persists, which trees do not do. The other options are not mathematical limitations.'
          }
        ]
      }
    }
  ]
};
