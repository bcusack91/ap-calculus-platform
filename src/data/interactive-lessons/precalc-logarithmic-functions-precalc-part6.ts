export const precalcLogarithmicPart6Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🌍 Logarithmic Functions — Modeling with Logs

**Part 6 of 7**

Logarithmic scales appear throughout science. They compress enormous ranges into manageable numbers.

### Real-World Log Scales

| Scale | Formula | What It Measures |
|:------|:--------|:----------------|
| **pH** | $\\text{pH} = -\\log[H^+]$ | Acidity (hydrogen ion concentration) |
| **Decibels** | $dB = 10\\log\\left(\\frac{I}{I_0}\\right)$ | Sound intensity |
| **Richter** | $M = \\log\\left(\\frac{A}{A_0}\\right)$ | Earthquake magnitude |
| **Stellar magnitude** | $m = -2.5\\log\\left(\\frac{F}{F_0}\\right)$ | Star brightness |

> **Key pattern:** All involve $\\log(\\text{ratio})$ — they measure *how many times larger* one quantity is than a reference.
      `
    },
    {
      id: 'p6-ph',
      type: 'text' as const,
      content: `
## 🧪 pH Scale

$$\\boxed{\\text{pH} = -\\log[H^+]}$$

### Worked Example 1

> **Orange juice has $[H^+] = 3.2 \\times 10^{-4}$ M. Find its pH.**

$\\text{pH} = -\\log(3.2 \\times 10^{-4})$

$= -(\\log 3.2 + \\log 10^{-4})$

$= -(0.505 + (-4)) = -(0.505 - 4) = 3.495$

$$\\boxed{\\text{pH} \\approx 3.5}$$

### Worked Example 2 (Reverse)

> **A solution has pH $= 8.3$. Find $[H^+]$.**

$-\\log[H^+] = 8.3 \\implies \\log[H^+] = -8.3 \\implies [H^+] = 10^{-8.3} \\approx 5.01 \\times 10^{-9}$ M

### pH Comparison

| Change | pH drops by | $[H^+]$ multiplied by |
|:-------|:-----------|:----------------------|
| $1$ unit | $1$ | $10$ |
| $2$ units | $2$ | $100$ |
| $3$ units | $3$ | $1{,}000$ |

> A pH drop of $1$ means **$10\\times$ more acidic** — that's the power of the log scale!
      `
    },
    {
      id: 'p6-decibels',
      type: 'text' as const,
      content: `
## 🔊 Decibel Scale

$$\\boxed{dB = 10\\log\\left(\\frac{I}{I_0}\\right)}$$

where $I_0 = 10^{-12}\\text{ W/m}^2$ (threshold of hearing).

### Worked Example 3

> **A rock concert has intensity $I = 10^{-2}\\text{ W/m}^2$. Find the decibel level.**

$dB = 10\\log\\left(\\frac{10^{-2}}{10^{-12}}\\right) = 10\\log(10^{10}) = 10 \\cdot 10 = 100\\text{ dB}$

### Common Sound Levels

| Sound | Intensity (W/m²) | Decibels |
|:------|:-----------------|:---------|
| Whisper | $10^{-10}$ | $20$ dB |
| Conversation | $10^{-6}$ | $60$ dB |
| Rock concert | $10^{-2}$ | $100$ dB |
| Jet engine | $10^{1}$ | $130$ dB |

### Comparing Two Sounds

If sound A is $10\\text{ dB}$ louder than sound B, then A has $10\\times$ the intensity.

$20\\text{ dB}$ louder → $100\\times$ intensity. $30\\text{ dB}$ louder → $1{,}000\\times$ intensity.
      `
    },
    {
      id: 'p6-richter',
      type: 'text' as const,
      content: `
## 🌋 Richter Scale & Comparing Magnitudes

$$\\boxed{M = \\log\\left(\\frac{A}{A_0}\\right)}$$

### Comparing Two Earthquakes

> **How many times stronger is a magnitude $7$ earthquake than a magnitude $5$?**

Each unit on the Richter scale represents $10\\times$ the amplitude.

Difference: $7 - 5 = 2$ units → $10^2 = 100\\times$ the amplitude

But **energy** scales by $\\approx 31.6\\times$ per unit:

$2$ units → $31.6^2 \\approx 1{,}000\\times$ the energy

### Summary Table

| Magnitude Difference | Amplitude Ratio | Energy Ratio |
|:--------------------|:---------------|:-------------|
| $1$ | $10\\times$ | $\\approx 31.6\\times$ |
| $2$ | $100\\times$ | $\\approx 1{,}000\\times$ |
| $3$ | $1{,}000\\times$ | $\\approx 31{,}600\\times$ |
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Log Models Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution with $[H^+] = 10^{-5}$ has pH:',
            options: [
              '$5$',
              '$-5$',
              '$10^{-5}$',
              '$\\frac{1}{5}$'
            ],
            correctAnswer: 0,
            explanation: '$\\text{pH} = -\\log(10^{-5}) = -(-5) = 5$.'
          },
          {
            question: 'A sound at $90\\text{ dB}$ compared to $60\\text{ dB}$ is:',
            options: [
              '$3\\times$ as intense',
              '$30\\times$ as intense',
              '$1{,}000\\times$ as intense',
              '$10{,}000\\times$ as intense'
            ],
            correctAnswer: 2,
            explanation: 'Difference: $30\\text{ dB}$. Each $10\\text{ dB}$ is $10\\times$. So $10^3 = 1{,}000\\times$ as intense.'
          },
          {
            question: 'If earthquake A is magnitude $6.5$ and B is magnitude $4.5$, how do their amplitudes compare?',
            options: [
              '$A$ is $2\\times$ larger',
              '$A$ is $20\\times$ larger',
              '$A$ is $100\\times$ larger',
              '$A$ is $1{,}000\\times$ larger'
            ],
            correctAnswer: 2,
            explanation: 'Difference of $2$ magnitudes → $10^2 = 100\\times$ the amplitude.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Calculations** 🧮

**1)** Find the pH of a solution with $[H^+] = 10^{-9}$ M. (e.g., $[H^+] = 10^{-4}$: pH $= -\\log(10^{-4}) = 4$)

**2)** A sound has intensity $I = 10^{-5}\\text{ W/m}^2$. Find its decibel level. Use $I_0 = 10^{-12}$. (e.g., $I = 10^{-8}$: $dB = 10\\log(10^{-8}/10^{-12}) = 10 \\cdot 4 = 40$)

**3)** How many times more intense is a $80\\text{ dB}$ sound than a $50\\text{ dB}$ sound? (e.g., $70\\text{ dB}$ vs $40\\text{ dB}$: difference $30\\text{ dB} = 10^3 = 1000\\times$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '70', '1000'],
        hint1: '$-\\log(10^{-9}) = 9$.',
        hint2: '$10\\log(10^{-5}/10^{-12}) = 10\\log(10^7) = 10 \\cdot 7$.',
        hint3: 'Difference: $80 - 50 = 30\\text{ dB}$. Each $10\\text{ dB} = 10\\times$.',
        explanation: '1) pH $= -\\log(10^{-9}) = 9$. 2) $dB = 10\\log(10^7) = 70$. 3) $30\\text{ dB}$ difference $= 10^3 = 1{,}000\\times$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Scale Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'pH $= 2$ vs pH $= 5$: the first is ___ times more acidic',
            options: ['$3$', '$10$', '$100$', '$1{,}000$']
          },
          {
            label: 'The pH scale measures',
            options: ['sound intensity', 'earthquake amplitude', 'hydrogen ion concentration', 'star brightness']
          },
          {
            label: 'On the Richter scale, each unit increase represents ___ times the amplitude',
            options: ['$2$', '$5$', '$10$', '$100$']
          },
          {
            label: 'All log scales fundamentally measure',
            options: ['sums', 'differences', 'ratios', 'products']
          }
        ],
        correctAnswers: ['$1{,}000$', 'hydrogen ion concentration', '$10$', 'ratios'],
        hint1: 'pH difference of $3$ → $10^3$.',
        hint2: '$[H^+]$ = hydrogen ion concentration.',
        hint3: 'Richter is a log base $10$ scale.',
        explanation: 'pH differs by $3$: $10^3 = 1{,}000\\times$. pH measures $[H^+]$. Richter: $10\\times$ per unit. Log scales measure ratios (orders of magnitude).'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Mixing two solutions: one with pH $3$ and one with pH $5$. Which has higher $[H^+]$ and by how much?',
            options: [
              'pH $3$ has $100\\times$ more $[H^+]$',
              'pH $5$ has $100\\times$ more $[H^+]$',
              'pH $3$ has $2\\times$ more $[H^+]$',
              'They are equal'
            ],
            correctAnswer: 0,
            explanation: 'Lower pH = more acidic = higher $[H^+]$. Difference of $2$ units → $10^2 = 100\\times$. pH $3$: $[H^+] = 10^{-3}$, pH $5$: $[H^+] = 10^{-5}$.'
          },
          {
            question: 'A washing machine at $70\\text{ dB}$ and a vacuum at $80\\text{ dB}$ are both running. The combined intensity is closest to:',
            options: [
              '$75\\text{ dB}$',
              '$80.4\\text{ dB}$',
              '$150\\text{ dB}$',
              '$81\\text{ dB}$'
            ],
            correctAnswer: 1,
            explanation: '$I_{\\text{wash}} = I_0 \\cdot 10^7$ and $I_{\\text{vac}} = I_0 \\cdot 10^8$. Total $= I_0(10^7 + 10^8) = I_0 \\cdot 10^7(1+10) = 1.1 \\times 10^8 \\cdot I_0$. $dB = 10\\log(1.1 \\times 10^8) = 10(8 + \\log 1.1) \\approx 10(8.041) \\approx 80.4\\text{ dB}$.'
          }
        ]
      }
    }
  ]
};
