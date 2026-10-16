export const chemIntegratedRateLawsPart5Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir5-intro',
      type: 'text' as const,
      content: `# ⏱️ First-Order Half-Life and Radioactive Decay

**Part 5 of 7 — Half-Life Calculations**

---

### Topics in This Part

| Section |
|---------|
| 📋 First-Order Half-Life Toolkit |
| 📌 Radioactive Decay: Always First-Order |
| Carbon-14 Dating |
| Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ir5-summary',
      type: 'text' as const,
      content: `
## 📋 First-Order Half-Life Toolkit

| Quantity | Relationship |
|----------|--------------|
| Half-life | $t_{1/2} = \\frac{0.693}{k}$ (independent of $[A]_0$) |
| Rate constant | $k = \\frac{0.693}{t_{1/2}}$ |
| Half-lives elapsed | $n = t / t_{1/2}$ |
| Fraction remaining | $\\frac{[A]}{[A]_0} = \\left(\\frac{1}{2}\\right)^n$ |

> ⚠️ **Warning:** Counting half-lives works only for **first-order** reactions, because only their half-life is constant. The AP exam uses half-life only for first-order reactions.


---

### When the Time Is Not a Whole Number of Half-Lives

Use the integrated rate law instead of counting halvings.

> **Problem:** A first-order reaction has $t_{1/2} = 10.0$ min. What fraction of the reactant remains after 15.0 min?

**Solution:**

$$k = \\frac{0.693}{10.0} = 0.0693 \\text{ min}^{-1}$$

$$\\ln\\frac{[A]}{[A]_0} = -kt = -(0.0693)(15.0) = -1.04 \\quad\\Rightarrow\\quad \\frac{[A]}{[A]_0} = e^{-1.04} = 0.354$$

Check: 15.0 min is 1.5 half-lives, so the fraction should fall between 1/2 (one half-life) and 1/4 (two). It does.
      `
    },
    {
      id: 'ir5-first-order-practice',
      type: 'input-boxes' as const,
      content: `
**First-Order Half-Life Problems** 🧮

**1)** A first-order reaction has $k = 0.0462$ $s^{-1}$. What is the half-life? (in seconds, to 3 significant figures)

**2)** If 93.75% of a first-order reactant has decomposed, how many half-lives have passed? (integer)

**3)** Iodine-131 has a half-life of 8.02 days. What fraction remains after 24.06 days? Express as a fraction with denominator 8 (e.g., enter 3/8).
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '15.0', acceptableAnswers: ['15.0'] }, { question: '(2)', answer: '4', acceptableAnswers: ['4'] }, { question: '(3)', answer: '1/8', acceptableAnswers: ['1/8', '0.125', '12.5%'] }],
        hint1: '$t_{1}/_{2}$ = 0.693/0.0462 = 15.0 s.',
        hint2: '93.75% decomposed → 6.25% remains = 1/16 = $(1/2)^{n}$. n = 4.',
        hint3: '24.06/8.02 = 3 half-lives. Fraction = $(1/2)^{3}$ = 1/8.',
        explanation: '1) 0.693/0.0462 = 15.0 s. 2) 6.25% = 0.0625 = $(1/2)^{4}$, so 4 half-lives. 3) 24.06/8.02 = 3 half-lives → $(1/2)^{3}$ = 1/8.'
      }
    },
    {
      id: 'ir5-radioactive-decay',
      type: 'text' as const,
      content: `
## 📌 Radioactive Decay: Always First-Order

All radioactive decay processes follow first-order kinetics:

$$\\boxed{N = N_0 e^{-\\lambda t}}$$

$$\\ln\\frac{N}{N_0} = -\\lambda t$$

$$\\boxed{t_{1/2} = \\frac{0.693}{\\lambda}}$$

where $\\lambda$ = decay constant (same role as $k$), $N$ = number of atoms remaining.

> 🔑 **Key Concept:** All radioactive decay is first-order — the probability of any one nucleus decaying is constant per unit time, regardless of how many nuclei remain.


---

### Carbon-14 Dating

- $^{14}$C has $t_{1/2} = 5{,}730$ years
- Living organisms maintain constant $^{14}$C/$^{12}$C ratio through intake
- When an organism dies, $^{14}$C decays without replacement
- Measuring the remaining $^{14}$C fraction tells us when it died


---

### Example

> **Problem:** A fossil has 25% of original $^{14}$C. How old is it?

**Solution:**

$$\\frac{N}{N_0} = 0.25 = \\left(\\frac{1}{2}\\right)^n \\Rightarrow n = 2 \\text{ half-lives}$$

$$\\text{Age} = 2 \\times 5{,}730 = 11{,}460 \\text{ years}$$
      `
    },
    {
      id: 'ir5-decay-quiz',
      type: 'multiple-choice' as const,
      content: `
**Radioactive Decay Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Plutonium-239 has a half-life of 24,100 years. If a sample originally contained 100 g, how much remains after 72,300 years?',
            options: [
              '25 g',
              '12.5 g',
              '6.25 g',
              '3.125 g'
            ],
            correctAnswer: 1,
            explanation: '72,300/24,100 = 3 half-lives. Remaining = 100 × $(1/2)^{3}$ = 100/8 = 12.5 g.'
          },
          {
            question: 'Why is radioactive decay always first-order?',
            options: [
              'Decay speeds up as the temperature rises, like most reactions',
              'Each nucleus has a fixed chance of decaying per unit time',
              'Each decay requires a collision between two separate nuclei',
              'The decay rate stays the same no matter how many nuclei remain'
            ],
            correctAnswer: 1,
            explanation: 'Each nucleus has a fixed probability of decaying per unit time, independent of how many nuclei are present or the temperature. So the rate is proportional to the number of nuclei present, which defines first-order kinetics. Decay is not temperature-dependent and needs no collisions, and a rate that ignored the number of nuclei would be zero-order.'
          }
        ]
      }
    },
    {
      id: 'ir5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Half-Life Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After 5 half-lives of a first-order reaction, the fraction remaining is',
            options: ['1/5', '1/16', '1/32', '1/64']
          },
          {
            label: 'A first-order reaction has $t_{1}/_{2}$ = 60 s. The time for [A] to fall from 0.40 M to 0.10 M is',
            options: ['60 s', '30 s', '120 s', '240 s']
          },
          {
            label: 'Carbon-14 dating works because $ {}^{14}C$ decay is',
            options: ['zero-order', 'first-order', 'second-order', 'catalyzed']
          },
          {
            label: 'For which order is the half-life constant?',
            options: ['zero', 'first', 'second', 'none']
          }
        ],
        correctAnswers: ['1/32', '120 s', 'first-order', 'first'],
        hint1: '$(1/2)^{5}$ = 1/32.',
        hint2: '0.40 → 0.20 → 0.10 M is two half-lives.',
        hint3: 'All radioactive decay is first-order.',
        explanation: '$(1/2)^{5}$ = 1/32. Falling from 0.40 to 0.10 M is two halvings, so 2 × 60 = 120 s. $ {}^{14}C$ decay is first-order. Only first-order reactions have a constant half-life.'
      }
    },
    {
      id: 'ir5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Half-Life Problems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A sample of $ {}^{32}P$ ($t_{1}/_{2}$ = 14.3 days) has an initial activity of 8000 counts/min. After 42.9 days, the activity is:',
            options: [
              '4000 counts/min',
              '2000 counts/min',
              '1000 counts/min',
              '500 counts/min'
            ],
            correctAnswer: 2,
            explanation: '42.9/14.3 = 3 half-lives. Activity = 8000 × $(1/2)^{3}$ = 8000/8 = 1000 counts/min.'
          },
          {
            question: 'A first-order reaction has a half-life of 120 s. How long does it take for 87.5% of the reactant to be consumed?',
            options: [
              '240 s',
              '360 s',
              '105 s',
              '960 s'
            ],
            correctAnswer: 1,
            explanation: '87.5% consumed leaves 12.5% = 1/8 = $(1/2)^{3}$, so three half-lives pass: 3 × 120 = 360 s. Two half-lives (240 s) leave 25%, 0.875 × 120 = 105 s treats the fraction as a fraction of one half-life, and 960 s multiplies 120 s by 8 instead of counting half-lives.'
          }
        ]
      }
    }
  ]
}
