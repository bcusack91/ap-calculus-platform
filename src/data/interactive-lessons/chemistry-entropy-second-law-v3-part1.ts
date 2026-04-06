export const chemEntropySecondLawV3Part1Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en1v3-intro',
      type: 'text' as const,
      content: `
# 🧊 Entropy From Scratch

**Part 1 of 7 — Guided Discovery**

Why does perfume spread across a room? Why does metal feel cold? Why can't you unscramble an egg? Let's discover the answers through hands-on problems.
      `
    },
    {
      id: 'en1v3-discovery',
      type: 'text' as const,
      content: `
## Guided Discovery: The Coin Experiment

Imagine flipping coins. Each coin can be H (heads) or T (tails).

### 1 Coin: 2 outcomes → H or T

### 2 Coins: $2^2 = 4$ outcomes

| Outcome | State |
|---------|-------|
| HH | Both heads |
| HT | Mixed |
| TH | Mixed |
| TT | Both tails |

The "mixed" state appears **twice** — it's the most probable.

### The Pattern

Molecules behave like trillions of coins. The "mixed" (spread out, disordered) state has so many more arrangements that it is essentially the **only** state you'll ever observe.

### Boltzmann's Equation

$$S = k_B \\ln W$$

$k_B = 1.38 \\times 10^{-23}$ J/K, $W$ = number of microstates

This equation connects the microscopic (molecular arrangements) to the macroscopic (measurable entropy in J/K).
      `
    },
    {
      id: 'en1v3-practice1',
      type: 'input-boxes' as const,
      content: `
**Discovery Questions** 🧮

1) For 4 coins, total microstates $W = 2^4$ = ?

2) How many of those microstates have exactly 2 heads and 2 tails? (Hint: list them — HHTT, HTHT, HTTH, THHT, THTH, TTHH)

3) What fraction of all microstates is the "all heads" state? Write as a fraction.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '6', '1/16'],
        hint1: '$2^4 = ?$',
        hint2: 'Count: HHTT, HTHT, HTTH, THHT, THTH, TTHH.',
        hint3: 'Only 1 out of 16 microstates is HHHH.',
        explanation: '1) $W = 16$. 2) There are $\\binom{4}{2} = 6$ arrangements with 2H and 2T. 3) Only 1 of 16 microstates is all heads = 1/16.'
      }
    },
    {
      id: 'en1v3-key-facts',
      type: 'text' as const,
      content: `
## Essential Facts for AP

| Fact | Detail |
|------|--------|
| $S$ units | **J/K** (not kJ!) |
| $S$ is a | **state function** (path-independent) |
| $S$ is | **extensive** (doubles with amount) |
| $S > 0$ always | for any substance at $T > 0$ K |
| $S$ is NOT conserved | Unlike energy, entropy can be **created** |
| More microstates | → higher entropy |
| Higher temperature | → more microstates → higher $S$ |
| Gas > Liquid > Solid | in terms of entropy |
      `
    },
    {
      id: 'en1v3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A container has 20 gas molecules. The probability they ALL spontaneously move to the left half is $1/2^{20}$. This equals approximately:',
            options: ['1 in 100', '1 in 10,000', '1 in 1,000,000', '1 in 1,000,000 — and that is with only 20 molecules!'],
            correctAnswer: 2,
            explanation: '$2^{20} = 1{,}048{,}576 \\approx 10^6$. So the probability is about 1 in a million. With $10^{23}$ molecules (a mole), it becomes $10^{-10^{22}}$ — utterly impossible.'
          },
          {
            question: 'Which is NOT a property of entropy?',
            options: [
              'State function',
              'Conserved in all processes',
              'Extensive property',
              'Measured in J/K'
            ],
            correctAnswer: 1,
            explanation: 'Entropy is NOT conserved — it can be created in irreversible processes. Energy is the conserved quantity (First Law).'
          },
          {
            question: 'Rank from lowest to highest entropy: H₂O(g), H₂O(s), H₂O(l)',
            options: [
              'H₂O(s) < H₂O(l) < H₂O(g)',
              'H₂O(g) < H₂O(l) < H₂O(s)',
              'H₂O(l) < H₂O(s) < H₂O(g)',
              'All have equal entropy'
            ],
            correctAnswer: 0,
            explanation: 'Solids have the most ordered arrangement (fewest microstates), liquids intermediate, and gases the most disordered (most microstates).'
          }
        ]
      }
    },
    {
      id: 'en1v3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$S = k_B \\ln W$ — when $W = 1$, $S$ equals',
            options: ['infinity', 'zero', '$k_B$', 'undefined']
          },
          {
            label: 'If you double the number of molecules, entropy',
            options: ['halves', 'doubles', 'stays the same', 'quadruples']
          },
          {
            label: 'The reason ice melts at room temperature is fundamentally about',
            options: ['chemical bonds breaking', 'probability and microstates', 'gravity', 'electromagnetic forces']
          }
        ],
        correctAnswers: ['zero', 'doubles', 'probability and microstates'],
        hint1: '$\\ln 1 = 0$.',
        hint2: 'Entropy is extensive.',
        hint3: 'The liquid state is overwhelmingly more probable than the solid at room T.',
        explanation: '$\\ln 1 = 0$ so $S = 0$ when there is only 1 microstate. Entropy is extensive (proportional to amount). Ice melting is driven by the vastly greater number of microstates in liquid water at room temperature.'
      }
    },
    {
      id: 'en1v3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student says "entropy measures how much energy a system has." Is this correct?',
            options: [
              'Yes — entropy and energy are the same',
              'No — entropy measures the number of ways energy and matter can be arranged (microstates)',
              'No — entropy measures temperature',
              'Partially — entropy is the ratio of energy to temperature'
            ],
            correctAnswer: 1,
            explanation: 'Entropy measures microstates — the number of ways to arrange energy and matter. A system can have high energy but low entropy (e.g., a compressed gas) or low energy but high entropy (e.g., a diffuse gas at low temperature).'
          }
        ]
      }
    }
  ]
}
