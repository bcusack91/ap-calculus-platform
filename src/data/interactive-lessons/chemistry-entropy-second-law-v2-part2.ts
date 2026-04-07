export const chemEntropySecondLawV2Part2Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en2v2-intro',
      type: 'text' as const,
      content: `
# 🔬 Microstates in Action

**Part 2 of 7 — Counting, Probability & Real Systems**

In Part 1 you learned that entropy measures the number of microstates. Now we'll explore how to count microstates for molecular systems and connect probability to the Second Law.
      `
    },
    {
      id: 'en2v2-counting',
      type: 'text' as const,
      content: `
## Counting Microstates for Molecules

### Positional Microstates

Consider 2 gas molecules (A and B) in a container divided into 2 equal halves:

| Microstate | Left Half | Right Half |
|-----------|-----------|------------|
| 1 | A, B | — |
| 2 | A | B |
| 3 | B | A |
| 4 | — | A, B |

- **1** microstate has both molecules on the left
- **2** microstates have them spread out
- **1** microstate has both on the right

The "spread out" state is **twice as likely** as either concentrated state.

### For N molecules in 2 halves

$$W_{\\text{total}} = 2^N$$

$$W_{\\text{all left}} = 1$$

$$P_{\\text{all left}} = \\frac{1}{2^N}$$

For $N = 100$: $P = \\frac{1}{2^{100}} \\approx 10^{-30}$ — essentially impossible!
      `
    },
    {
      id: 'en2v2-energy-microstates',
      type: 'text' as const,
      content: `
## Energy Microstates

Molecules don't just have positions — they also have **energy**. The ways to distribute energy quanta among molecules are additional microstates.

### Example: 3 Quanta Among 3 Molecules

| Distribution | Microstates | Description |
|-------------|-------------|-------------|
| (3, 0, 0) | 3 | One molecule has all energy |
| (2, 1, 0) | 6 | Partially shared |
| (1, 1, 1) | 1 | Evenly distributed |

**Total: 10 microstates.** The partially shared distribution (2,1,0) is the most probable.

### Temperature Connection

Higher temperature → more energy quanta → more ways to distribute them → more microstates → higher entropy.

This is why entropy **always increases with temperature**.
      `
    },
    {
      id: 'en2v2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Microstate Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For 4 molecules in a box divided into 2 halves, how many total positional microstates exist?',
            options: ['4', '8', '16', '24'],
            correctAnswer: 2,
            explanation: '$W = 2^4 = 16$ microstates. Each molecule can be in either half.'
          },
          {
            question: 'Why does higher temperature increase entropy?',
            options: [
              'Molecules move faster and collide more',
              'More energy quanta are available, creating more ways to distribute energy',
              'Chemical bonds break at higher temperatures',
              'Volume always increases with temperature'
            ],
            correctAnswer: 1,
            explanation: 'Higher T means more energy quanta, and more quanta can be distributed among molecules in more ways, increasing microstates and entropy.'
          },
          {
            question: 'The probability of all molecules spontaneously gathering in one corner of a room is:',
            options: [
              'Impossible — it violates thermodynamic laws',
              'Essentially zero — it is vanishingly improbable',
              'About 50% — molecules move randomly',
              'High — molecules attract each other'
            ],
            correctAnswer: 1,
            explanation: 'It is not forbidden by any law, but the probability is so tiny ($\\sim 1/2^{N_A}$) that it would never be observed in the lifetime of the universe.'
          }
        ]
      }
    },
    {
      id: 'en2v2-calculation',
      type: 'input-boxes' as const,
      content: `
**Microstate Calculations** 🧮

**1)** For 6 molecules in 2 halves of a container, the total microstates $W = 2^6$ = ?

**2)** How many of those microstates have all 6 molecules on the left side?

**3)** What percentage of microstates have the molecules evenly split (3 left, 3 right)? The number of such microstates is $\\binom{6}{3} = 20$. Round to the nearest whole percent.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['64', '1', '31'],
        hint1: '$2^6 = 64$',
        hint2: 'There is exactly 1 way to place all 6 on the left.',
        hint3: '$20/64 \\times 100 = 31.25\\%$',
        explanation: '1) $2^6 = 64$ total microstates. 2) Only 1 microstate has all molecules on the left. 3) $\\binom{6}{3} = 20$ microstates out of 64 total = $20/64 = 31.25\\% \\approx 31\\%$.'
      }
    },
    {
      id: 'en2v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Microstate Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'As the number of molecules increases, the probability of all being in one half',
            options: ['increases', 'decreases dramatically', 'stays the same', 'equals 50%']
          },
          {
            label: 'Energy microstates depend on',
            options: ['only position', 'only temperature', 'how energy quanta are distributed', 'molecular mass']
          },
          {
            label: 'The most probable energy distribution is usually',
            options: ['all energy in one molecule', 'evenly spread', 'partially shared among molecules', 'zero energy']
          }
        ],
        correctAnswers: ['decreases dramatically', 'how energy quanta are distributed', 'partially shared among molecules'],
        hint1: 'Probability = $1/2^N$ — shrinks exponentially.',
        hint2: 'Energy microstates count the ways to distribute energy quanta.',
        hint3: 'The distribution with the most microstates is the most probable.',
        explanation: 'The probability of concentration drops exponentially with N. Energy microstate counting depends on quantum distribution. The "partially shared" distribution typically has the most microstates.'
      }
    },
    {
      id: 'en2v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which has the largest number of microstates?',
            options: [
              'A crystal at 0 K',
              'Liquid water at 25°C',
              'Water vapor at 100°C',
              'A supercooled liquid'
            ],
            correctAnswer: 2,
            explanation: 'Water vapor has the most positional AND energy microstates due to freely moving gas molecules at high temperature.'
          },
          {
            question: 'For 10 molecules, the probability they all collect in the left half is:',
            options: [
              '50%',
              '10%',
              'About 0.1%',
              'About 0.001% or less'
            ],
            correctAnswer: 2,
            explanation: '$P = 1/2^{10} = 1/1024 \\approx 0.098\\% \\approx 0.1\\%$. Already very unlikely with just 10 molecules!'
          }
        ]
      }
    }
  ]
}
