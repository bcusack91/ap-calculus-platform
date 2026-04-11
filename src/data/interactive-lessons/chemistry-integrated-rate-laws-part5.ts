export const chemIntegratedRateLawsPart5Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir5-intro',
      type: 'text' as const,
      content: `# ⏱️ Half-Life Problems

**Part 5 of 7 — Calculations for Each Order and Radioactive Decay**

---

### Topics in This Part

| Section |
|---------|
| 📋 Half-Life Formulas Summary |
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
## 📋 Half-Life Formulas Summary

| Order | Half-Life Formula | Dependence on $[A]_0$ |
|-------|------------------|---------------------|
| Zero | $t_{1/2} = \\frac{[A]_0}{2k}$ | Proportional — higher [A]₀ → longer t₁/₂ |
| First | $t_{1/2} = \\frac{0.693}{k}$ | **Independent** — t₁/₂ is always the same |
| Second | $t_{1/2} = \\frac{1}{k[A]_0}$ | Inversely proportional — higher [A]₀ → shorter t₁/₂ |

> ⚠️ **Warning:** For zero and second-order, "$n$ half-lives" does NOT mean $n \\times t_{1/2}$ total time, because each successive half-life has a different duration!


---

> 🔑 **Key Concept:** The pattern of successive half-lives uniquely identifies reaction order:

| Order | 1st t₁/₂ | 2nd t₁/₂ | 3rd t₁/₂ | Pattern |
|-------|----------|----------|----------|---------|
| Zero | $T$ | $T/2$ | $T/4$ | Each is **half** the previous |
| First | $T$ | $T$ | $T$ | All **equal** |
| Second | $T$ | $2T$ | $4T$ | Each is **double** the previous |
      `
    },
    {
      id: 'ir5-zero-order-practice',
      type: 'input-boxes' as const,
      content: `
**Zero-Order Half-Life Problems** 🧮

A zero-order reaction has $k = 0.0020$ M/s.

**1)** If [A]₀ = 0.100 M, what is the half-life? (in seconds)

**2)** If [A]₀ = 0.200 M, what is the half-life? (in seconds)

**3)** For [A]₀ = 0.100 M, how long until 75% has reacted (only 25% remains)? Note: this is NOT simply 2 half-lives for zero-order! Use the integrated rate law. (in seconds, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '50', '37.5'],
        hint1: 't₁/₂ = [A]₀/(2k) = 0.100/(2 × 0.0020) = 0.100/0.0040 = 25 s.',
        hint2: 't₁/₂ = 0.200/(2 × 0.0020) = 50 s. Double [A]₀ → double t₁/₂.',
        hint3: '25% remains: [A] = 0.025 M. [A] = −kt + [A]₀. 0.025 = −0.0020t + 0.100. t = (0.100 − 0.025)/0.0020 = 0.075/0.0020 = 37.5 s.',
        explanation: '1) 25 s. 2) 50 s (proportional to [A]₀). 3) [A] = 0.025 M: t = (0.100 − 0.025)/0.0020 = 37.5 s. Note: for zero-order, 2 half-lives ≠ 75% consumed because half-lives get shorter.'
      }
    },
    {
      id: 'ir5-first-order-practice',
      type: 'input-boxes' as const,
      content: `
**First-Order Half-Life Problems** 🧮

**1)** A first-order reaction has $k = 0.0462$ s⁻¹. What is the half-life? (in seconds, to 3 significant figures)

**2)** If 93.75% of a first-order reactant has decomposed, how many half-lives have passed? (integer)

**3)** Iodine-131 has a half-life of 8.02 days. What fraction remains after 24.06 days? Express as a fraction with denominator 8 (e.g., enter 3/8).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15.0', '4', '1/8'],
        hint1: 't₁/₂ = 0.693/0.0462 = 15.0 s.',
        hint2: '93.75% decomposed → 6.25% remains = 1/16 = (1/2)^n. n = 4.',
        hint3: '24.06/8.02 = 3 half-lives. Fraction = (1/2)³ = 1/8.',
        explanation: '1) 0.693/0.0462 = 15.0 s. 2) 6.25% = 0.0625 = (1/2)⁴, so 4 half-lives. 3) 24.06/8.02 = 3 half-lives → (1/2)³ = 1/8.'
      }
    },
    {
      id: 'ir5-second-order-practice',
      type: 'input-boxes' as const,
      content: `
**Second-Order Half-Life Problems** 🧮

A second-order reaction has $k = 0.40$ M⁻¹s⁻¹ and $[A]_0 = 0.50$ M.

**1)** What is the first half-life? (in seconds, to 3 significant figures)

**2)** What is the second half-life? (in seconds, to 3 significant figures)

**3)** What is [A] after 15 s? (in M, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.0', '10.0', '0.13'],
        hint1: 't₁/₂ = 1/(k[A]₀) = 1/(0.40 × 0.50) = 1/0.20 = 5.0 s.',
        hint2: 'After 1st half-life, [A] = 0.25 M. 2nd t₁/₂ = 1/(0.40 × 0.25) = 10.0 s. It doubled!',
        hint3: '1/[A] = 0.40(15) + 1/0.50 = 6.0 + 2.0 = 8.0. [A] = 1/8.0 = 0.125 ≈ 0.13.',
        explanation: '1) t₁/₂ = 1/(0.40 × 0.50) = 5.0 s. 2) t₁/₂ = 1/(0.40 × 0.25) = 10.0 s. 3) 1/[A] = 6.0 + 2.0 = 8.0 → [A] = 0.13 M.'
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
            explanation: '72,300/24,100 = 3 half-lives. Remaining = 100 × (1/2)³ = 100/8 = 12.5 g.'
          },
          {
            question: 'Why is radioactive decay always first-order?',
            options: [
              'It depends on temperature',
              'The probability of any one nucleus decaying is constant per unit time',
              'It involves two reactant molecules',
              'It occurs on a surface'
            ],
            correctAnswer: 1,
            explanation: 'Each nucleus has a fixed probability of decaying per unit time, independent of how many nuclei are present or the temperature. This constant probability per unit time defines first-order kinetics.'
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
            label: 'If a zero-order reaction has t₁/₂ = 60 s, the second half-life is',
            options: ['60 s', '30 s', '120 s', '90 s']
          },
          {
            label: 'Carbon-14 dating works because ¹⁴C decay is',
            options: ['zero-order', 'first-order', 'second-order', 'catalyzed']
          },
          {
            label: 'For which order does the half-life increase with time?',
            options: ['zero', 'first', 'second', 'none']
          }
        ],
        correctAnswers: ['1/32', '30 s', 'first-order', 'second'],
        hint1: '(1/2)⁵ = 1/32.',
        hint2: 'Zero-order: each successive half-life is half the previous.',
        hint3: 'All radioactive decay is first-order.',
        explanation: '(1/2)⁵ = 1/32. Zero-order successive half-lives: 60, 30, 15... Second half-life = 30 s. ¹⁴C decay is first-order. Second-order half-lives increase (double each time).'
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
            question: 'A sample of ³²P (t₁/₂ = 14.3 days) has an initial activity of 8000 counts/min. After 42.9 days, the activity is:',
            options: [
              '4000 counts/min',
              '2000 counts/min',
              '1000 counts/min',
              '500 counts/min'
            ],
            correctAnswer: 2,
            explanation: '42.9/14.3 = 3 half-lives. Activity = 8000 × (1/2)³ = 8000/8 = 1000 counts/min.'
          },
          {
            question: 'A reaction\'s half-lives are measured as: 120 s, 60 s, 30 s. The reaction order is:',
            options: [
              'Zero-order',
              'First-order',
              'Second-order',
              'Third-order'
            ],
            correctAnswer: 0,
            explanation: 'Each half-life is half the previous → zero-order. First-order would give equal half-lives. Second-order would give doubling half-lives.'
          }
        ]
      }
    }
  ]
}
