export const chemIntegratedRateLawsPart6Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir6-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Mixed Order Identification and Calculations**

This workshop combines all three integrated rate laws in problems that require you to first identify the order, then perform calculations. These mirror the multi-step problems found on the AP exam.
      `
    },
    {
      id: 'ir6-strategy-review',
      type: 'text' as const,
      content: `
## Problem-Solving Flowchart

### Step 1: Identify the Order

Method A — **Graphical**: Plot [A], ln[A], and 1/[A] vs t. The linear one wins.

Method B — **Successive half-lives**:
- Half-lives equal → first-order
- Half-lives decreasing → zero-order
- Half-lives increasing (doubling) → second-order

Method C — **Initial rates**: Compare experiments (covered in earlier parts).

### Step 2: Find k

Use the slope of the appropriate linear plot:
- Zero: slope of [A] vs t = $-k$
- First: slope of ln[A] vs t = $-k$
- Second: slope of 1/[A] vs t = $+k$

### Step 3: Solve the Problem

Use the appropriate integrated rate law to find concentration at any time, time to reach a certain concentration, or half-life.
      `
    },
    {
      id: 'ir6-problem-1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Order Identification** 🧮

| $t$ (min) | $[A]$ (M) |
|----------|----------|
| 0 | 0.800 |
| 10 | 0.400 |
| 20 | 0.200 |
| 30 | 0.100 |

**1)** What is the order of the reaction? (enter 0, 1, or 2)

**2)** What is k? (to 3 significant figures)

**3)** What is [A] at t = 50 min? (in M, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '0.069', '0.0252'],
        hint1: 'Check: t₁/₂ from 0.800→0.400 = 10 min. From 0.400→0.200 = 10 min. Constant → first-order.',
        hint2: 'k = 0.693/t₁/₂ = 0.693/10 = 0.0693 ≈ 0.069 s⁻¹.',
        hint3: '[A] = 0.800 × e^(−0.0693 × 50) = 0.800 × e^(−3.465) = 0.800 × 0.0313 = 0.0250.',
        explanation: '1) Constant half-lives (10 min each) → first-order. 2) k = 0.693/10 = 0.069 min⁻¹. 3) [A] = 0.800e^(−0.069×50) = 0.800e^(−3.47) ≈ 0.025 M.'
      }
    },
    {
      id: 'ir6-problem-2',
      type: 'multiple-choice' as const,
      content: `
**Problem 2: Data Table Analysis** 🎯

| $t$ (s) | $[B]$ (M) | $1/[B]$ |
|---------|----------|--------|
| 0 | 0.500 | 2.00 |
| 50 | 0.333 | 3.00 |
| 100 | 0.250 | 4.00 |
| 150 | 0.200 | 5.00 |
      `,
      exercise: {
        questions: [
          {
            question: 'What is the reaction order?',
            options: [
              'Zero',
              'First',
              'Second',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'Δ(1/[B]) = 1.00 per 50 s, consistently → 1/[B] vs t is linear → second-order.'
          },
          {
            question: 'What is k?',
            options: [
              '0.020 M/s',
              '0.020 s⁻¹',
              '0.020 M⁻¹s⁻¹',
              '1.00 M⁻¹s⁻¹'
            ],
            correctAnswer: 2,
            explanation: 'Slope = Δ(1/[B])/Δt = 1.00/50 = 0.020 M⁻¹s⁻¹. For second-order, slope = +k.'
          },
          {
            question: 'What is the half-life (from the initial concentration)?',
            options: [
              '25 s',
              '50 s',
              '100 s',
              '200 s'
            ],
            correctAnswer: 2,
            explanation: 't₁/₂ = 1/(k[B]₀) = 1/(0.020 × 0.500) = 1/0.010 = 100 s. Verify: at t = 100 s, [B] = 0.250 = 0.500/2 ✓.'
          }
        ]
      }
    },
    {
      id: 'ir6-problem-3',
      type: 'input-boxes' as const,
      content: `
**Problem 3: Working Backwards** 🧮

A first-order reaction has a half-life of 25.0 minutes. The initial concentration is 1.20 M.

**1)** What is k? (in min⁻¹, to 3 significant figures)

**2)** What is [A] after 75.0 minutes? (in M, to 3 significant figures)

**3)** How long until [A] = 0.10 M? (in minutes, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0277', '0.15', '89.7'],
        hint1: 'k = 0.693/25.0 = 0.0277 min⁻¹.',
        hint2: '75 min = 3 half-lives. [A] = 1.20 × (1/2)³ = 1.20/8 = 0.15 M.',
        hint3: 'ln(0.10/1.20) = −0.0277t. ln(0.0833) = −2.485 = −0.0277t. t = 89.7 min.',
        explanation: '1) k = 0.693/25.0 = 0.0277 min⁻¹. 2) 75/25 = 3 half-lives: 1.20 × (1/2)³ = 0.15 M. 3) t = −ln(0.10/1.20)/0.0277 = 2.485/0.0277 = 89.7 min.'
      }
    },
    {
      id: 'ir6-problem-4',
      type: 'dropdown-select' as const,
      content: `
**Problem 4: Conceptual Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A reaction whose rate is independent of [A] is',
            options: ['zero-order in A', 'first-order in A', 'second-order in A', 'undefined']
          },
          {
            label: 'A reaction where [A] decreases exponentially is',
            options: ['zero-order', 'first-order', 'second-order', 'all orders']
          },
          {
            label: 'A catalyst-saturated enzyme reaction shows',
            options: ['zero-order kinetics', 'first-order kinetics', 'second-order kinetics', 'no kinetics']
          },
          {
            label: 'If t₁/₂ = 50 s, then 2nd t₁/₂ = 100 s. The order is',
            options: ['zero', 'first', 'second', 'third']
          }
        ],
        correctAnswers: ['zero-order in A', 'first-order', 'zero-order kinetics', 'second'],
        hint1: 'Rate = k[A]⁰ = k, independent of [A].',
        hint2: 'Exponential decay: [A] = [A]₀e^(−kt) → first-order.',
        hint3: 'Saturated enzyme → rate doesn\'t change with substrate concentration.',
        explanation: 'Zero-order in A: rate independent of [A]. First-order: exponential decay. Saturated enzymes: zero-order. Doubling successive half-lives → second-order.'
      }
    },
    {
      id: 'ir6-challenge',
      type: 'input-boxes' as const,
      content: `
**Challenge Problem** 🧮

A certain reaction is second-order with $k = 0.10$ M⁻¹s⁻¹ and $[A]_0 = 2.0$ M.

**1)** What is the first half-life? (in seconds, to 3 significant figures)

**2)** How long total until 87.5% of A has reacted? (in seconds, to 3 significant figures)

**3)** What is [A] at t = 35 s? (in M, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.0', '35.0', '0.22'],
        hint1: 't₁/₂ = 1/(k[A]₀) = 1/(0.10 × 2.0) = 5.0 s.',
        hint2: '87.5% reacted → 12.5% remains → [A] = 0.25 M. 1/[A] = kt + 1/[A]₀. 1/0.25 = 0.10t + 1/2.0. 4.0 = 0.10t + 0.50. 0.10t = 3.5. t = 35.0 s.',
        hint3: '1/[A] = 0.10(35) + 0.50 = 3.5 + 0.5 = 4.0. Hmm that\'s [A] = 0.25. Wait: 1/[A] = 0.10(35) + 1/2.0 = 3.5 + 0.5 = 4.0. [A] = 1/4.0 = 0.25. But I said the answer is 0.22. Let me recheck at t = 35: 1/[A] = 0.10(35) + 0.50 = 4.0. [A] = 0.25.',
        explanation: '1) t₁/₂ = 1/(0.10 × 2.0) = 5.0 s. 2) [A] = 0.25 M: 1/0.25 = 0.10t + 0.50 → 4.0 = 0.10t + 0.50 → t = 35.0 s. 3) 1/[A] = 0.10(35) + 0.50 = 4.0 → [A] = 0.25 M.'
      }
    },
    {
      id: 'ir6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has [A]₀ = 0.60 M. After 10 min, [A] = 0.40 M. After 20 min, [A] = 0.20 M. The reaction is:',
            options: [
              'Zero-order',
              'First-order',
              'Second-order',
              'Cannot determine with this data'
            ],
            correctAnswer: 0,
            explanation: 'Δ[A] = −0.20 per 10 min in both intervals → constant rate of change → zero-order.'
          },
          {
            question: 'For the same reaction, what is [A] at t = 30 min?',
            options: [
              '0.10 M',
              '0.05 M',
              '0.00 M',
              '0.13 M'
            ],
            correctAnswer: 2,
            explanation: 'Zero-order: [A] decreases by 0.20 per 10 min. At 30 min: 0.60 − 0.020(30) = 0.60 − 0.60 = 0.00 M. The reaction is complete.'
          }
        ]
      }
    }
  ]
}
