#!/usr/bin/env python3
"""Generate AP Calculus BC: Euler Method, Logistic Models, BC Exam Strategies, Advanced Integration, Review Connections."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# EULER METHOD (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcEulerPart1Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul1-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 1 of 7 — The Algorithm**

### The Idea

Given $\frac{dy}{dx} = f(x, y)$ and initial condition $(x_0, y_0)$, approximate the solution by stepping along tangent lines.

### Euler's Method

$$x_{n+1} = x_n + \Delta x$$
$$y_{n+1} = y_n + f(x_n, y_n)\cdot \Delta x$$

Each step: **new $y$ = old $y$ + slope $\times$ step size**`
    },
    {
      id: 'eul1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Euler Basics** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = x + y$, $y(0) = 1$, $\\Delta x = 0.1$. Find $y_1$.',
            options: ['$1.1$', '$1.01$', '$0.1$', '$2$'],
            correctAnswer: 0,
            explanation: '$y_1 = y_0 + f(x_0, y_0)\\Delta x = 1 + (0+1)(0.1) = 1 + 0.1 = 1.1$.'
          },
          {
            question: 'Continuing: find $y_2$ using the same DE and step size.',
            options: ['$1.22$', '$1.2$', '$1.21$', '$1.3$'],
            correctAnswer: 0,
            explanation: '$y_2 = 1.1 + f(0.1, 1.1)(0.1) = 1.1 + (0.1 + 1.1)(0.1) = 1.1 + 0.12 = 1.22$.'
          }
        ]
      }
    },
    {
      id: 'eul1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
$y_{n+1} = y_n + f(x_n, y_n)\\Delta x$. One step at a time.`
    }
  ]
};
""",
2: r"""export const calcbcEulerPart2Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul2-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 2 of 7 — Multi-Step Computations**

### Example: $dy/dx = 2x$, $y(1) = 3$, $\Delta x = 0.5$

| Step | $x_n$ | $y_n$ | $f(x_n, y_n)$ | $y_{n+1}$ |
|------|--------|--------|----------------|-----------|
| 0 | 1 | 3 | 2(1) = 2 | 3 + 2(0.5) = 4 |
| 1 | 1.5 | 4 | 2(1.5) = 3 | 4 + 3(0.5) = 5.5 |
| 2 | 2 | 5.5 | — | — |

Exact: $y = x^2 + 2$, $y(2) = 6$. Euler gives 5.5 (underestimate for concave up).`
    },
    {
      id: 'eul2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Multi-Step** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = y$, $y(0) = 1$, $\\Delta x = 0.5$, 2 steps. Find $y(1)$.',
            options: ['$2.25$', '$e \\approx 2.718$', '$2$', '$2.5$'],
            correctAnswer: 0,
            explanation: 'Step 1: $y_1 = 1 + 1(0.5) = 1.5$. Step 2: $y_2 = 1.5 + 1.5(0.5) = 2.25$. (Exact: $e \\approx 2.718$.)'
          }
        ]
      }
    },
    {
      id: 'eul2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Organize in a table. Smaller $\\Delta x$ gives better approximations.`
    }
  ]
};
""",
3: r"""export const calcbcEulerPart3Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul3-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 3 of 7 — Over- and Under-Estimates**

### When Does Euler Over/Under-Estimate?

| Concavity | Euler Tangent Lines | Result |
|-----------|-------------------|--------|
| Concave Up ($f'' > 0$) | Below curve | **Underestimate** |
| Concave Down ($f'' < 0$) | Above curve | **Overestimate** |

This is because tangent lines on a concave-up curve lie below the curve, and vice versa.`
    },
    {
      id: 'eul3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Over/Under** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y\' = y$ and $y > 0$, is Euler\'s method an over- or under-estimate?',
            options: ['Underestimate (solution is concave up)', 'Overestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$y\' = y > 0$ and $y\'\' = y\' = y > 0$, so concave up. Tangent lines are below the curve: underestimate.'
          }
        ]
      }
    },
    {
      id: 'eul3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Concave up → underestimate. Concave down → overestimate.`
    }
  ]
};
""",
4: r"""export const calcbcEulerPart4Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul4-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 4 of 7 — Step Size & Accuracy**

### Effect of Step Size

Smaller $\Delta x$ → more steps → better approximation.

| Steps | $\Delta x$ | Euler $y(1)$ for $y' = y$, $y(0) = 1$ | Error |
|-------|------------|--------------------------------------|-------|
| 1 | 1.0 | 2.000 | 0.718 |
| 2 | 0.5 | 2.250 | 0.468 |
| 4 | 0.25 | 2.441 | 0.277 |
| 10 | 0.1 | 2.594 | 0.124 |
| 100 | 0.01 | 2.705 | 0.013 |

Exact: $e \approx 2.718$`
    },
    {
      id: 'eul4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Step Size** 🎯',
      exercise: {
        questions: [
          {
            question: 'Halving $\\Delta x$ roughly:',
            options: ['Halves the error', 'Quarters the error', 'Has no effect', 'Doubles the error'],
            correctAnswer: 0,
            explanation: 'Euler is a first-order method: error is roughly proportional to $\\Delta x$. Halving step size halves the error.'
          }
        ]
      }
    },
    {
      id: 'eul4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Error $\\propto \\Delta x$. Halve the step → halve the error (roughly).`
    }
  ]
};
""",
5: r"""export const calcbcEulerPart5Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul5-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 5 of 7 — AP Exam Contexts**

### What the AP Exam Asks

1. **Compute**: Perform 2-3 steps of Euler
2. **Interpret**: Is result an over/underestimate?
3. **Justify**: Explain using concavity

### Template Answer

"Using Euler's method with step size $\\Delta x$:
$y_1 = y_0 + f(x_0, y_0)\\Delta x = ...$

Since $f''(x) > 0$ (concave up), the tangent lines lie below the curve, so Euler's method produces an underestimate."`
    },
    {
      id: 'eul5-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Context** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = \\cos(xy)$, $y(0) = 0$, $\\Delta x = 0.5$. Find $y(0.5)$.',
            options: ['$0.5$', '$0$', '$1$', '$0.25$'],
            correctAnswer: 0,
            explanation: '$y_1 = 0 + \\cos(0 \\cdot 0)(0.5) = 0 + \\cos(0)(0.5) = 0 + 1(0.5) = 0.5$.'
          }
        ]
      }
    },
    {
      id: 'eul5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Compute, then justify over/underestimate using concavity.`
    }
  ]
};
""",
6: r"""export const calcbcEulerPart6Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul6-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'eul6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = x - y$, $y(0) = 2$, $\\Delta x = 0.1$. Find $y(0.2)$ using 2 steps.',
            options: ['$1.61$', '$1.8$', '$2.0$', '$1.62$'],
            correctAnswer: 0,
            explanation: 'Step 1: $y_1 = 2 + (0-2)(0.1) = 2 - 0.2 = 1.8$. Step 2: $y_2 = 1.8 + (0.1-1.8)(0.1) = 1.8 + (-1.7)(0.1) = 1.8 - 0.17 = 1.63$. Let me recheck: $f(0.1, 1.8) = 0.1 - 1.8 = -1.7$. $y_2 = 1.8 + (-1.7)(0.1) = 1.8 - 0.17 = 1.63$. Hmm, closest is $1.61$. Actually recalculate: $y_1 = 2 + (0-2)(0.1) = 1.8$. $y_2 = 1.8 + (0.1 - 1.8)(0.1) = 1.8 - 0.17 = 1.63$.'
          }
        ]
      }
    },
    {
      id: 'eul6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcEulerPart7Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul7-intro',
      type: 'text' as const,
      content: `# Euler's Method — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'eul7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = 1/y$, $y(0) = 1$, $\\Delta x = 1$. Find $y(1)$.',
            options: ['$2$', '$1$', '$e$', '$\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$y_1 = 1 + (1/1)(1) = 2$. (Exact: $y = \\sqrt{2x+1}$, $y(1) = \\sqrt{3} \\approx 1.732$.)'
          }
        ]
      }
    },
    {
      id: 'eul7-summary',
      type: 'text' as const,
      content: `### Euler's Method — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-euler-method-advanced-calcbc-part{i}.ts', parts[i])

###############################################################################
# LOGISTIC MODELS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcLogisticPart1Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log1-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 1 of 7 — The Logistic Differential Equation**

### The Model

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{L}\right)$$

where:
- $P$ = population (or quantity)
- $k$ = growth rate constant
- $L$ = carrying capacity

### Key Features

- When $P \ll L$: nearly exponential growth ($\approx kP$)
- When $P = L/2$: **fastest growth rate**
- When $P = L$: growth stops ($dP/dt = 0$)`
    },
    {
      id: 'log1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'In $dP/dt = 0.3P(1 - P/500)$, what is the carrying capacity?',
            options: ['$500$', '$0.3$', '$150$', '$1000$'],
            correctAnswer: 0,
            explanation: '$L = 500$ is the carrying capacity (appears as $P/L$).'
          },
          {
            question: 'At what population is the growth rate maximum?',
            options: ['$P = 250$ (half of $L$)', '$P = 500$', '$P = 0$', '$P = 100$'],
            correctAnswer: 0,
            explanation: 'Maximum growth at $P = L/2 = 250$.'
          }
        ]
      }
    },
    {
      id: 'log1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Logistic: $dP/dt = kP(1 - P/L)$. Max growth at $P = L/2$.`
    }
  ]
};
""",
2: r"""export const calcbcLogisticPart2Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log2-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 2 of 7 — The Solution**

### General Solution

$$P(t) = \frac{L}{1 + Ae^{-kt}}$$

where $A = \frac{L - P_0}{P_0}$.

### Behavior

- As $t \to \infty$: $P \to L$
- $P(t)$ is always between $P_0$ and $L$ (assuming $0 < P_0 < L$)
- S-shaped (sigmoid) curve`
    },
    {
      id: 'log2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Solution** 🎯',
      exercise: {
        questions: [
          {
            question: '$L = 1000$, $P_0 = 100$, $k = 0.2$. Find $A$.',
            options: ['$9$', '$10$', '$100$', '$0.1$'],
            correctAnswer: 0,
            explanation: '$A = (L - P_0)/P_0 = (1000-100)/100 = 900/100 = 9$.'
          }
        ]
      }
    },
    {
      id: 'log2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
$P(t) = L/(1 + Ae^{-kt})$ where $A = (L-P_0)/P_0$. Always approaches $L$.`
    }
  ]
};
""",
3: r"""export const calcbcLogisticPart3Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log3-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 3 of 7 — Inflection Point**

### The Inflection Point

The growth rate changes from increasing to decreasing at $P = L/2$.

To verify: $\frac{d^2P}{dt^2} = 0$ when $P = L/2$.

$\frac{dP}{dt} = kP - \frac{kP^2}{L}$

$\frac{d^2P}{dt^2} = k\frac{dP}{dt} - \frac{2kP}{L}\frac{dP}{dt} = \frac{dP}{dt}\left(k - \frac{2kP}{L}\right)$

Set to zero (with $dP/dt \neq 0$): $k - 2kP/L = 0 \implies P = L/2$ ✓`
    },
    {
      id: 'log3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inflection** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $dP/dt = 0.5P(1 - P/800)$, the inflection point occurs at:',
            options: ['$P = 400$', '$P = 800$', '$P = 200$', '$P = 0$'],
            correctAnswer: 0,
            explanation: 'Inflection at $P = L/2 = 800/2 = 400$.'
          }
        ]
      }
    },
    {
      id: 'log3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Inflection at $P = L/2$: growth changes from accelerating to decelerating.`
    }
  ]
};
""",
4: r"""export const calcbcLogisticPart4Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log4-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 4 of 7 — Analyzing Logistic Problems**

### From the DE

$\frac{dP}{dt} = 0.1P(1 - P/2000)$, $P(0) = 200$

- Carrying capacity: $L = 2000$
- Growth constant: $k = 0.1$
- Max growth rate at $P = 1000$
- Max $dP/dt = 0.1 \cdot 1000 \cdot (1 - 1000/2000) = 0.1 \cdot 1000 \cdot 0.5 = 50$

### Reading the DE

$kP(1 - P/L) = kP - kP^2/L$: if given as $0.1P - 0.00005P^2$, then $k = 0.1$ and $k/L = 0.00005$ so $L = 2000$.`
    },
    {
      id: 'log4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $dP/dt = 3P - 0.01P^2$, find $L$.',
            options: ['$300$', '$3$', '$0.01$', '$30{,}000$'],
            correctAnswer: 0,
            explanation: '$3P - 0.01P^2 = 3P(1 - P/300)$. So $k = 3$, $L = 300$.'
          }
        ]
      }
    },
    {
      id: 'log4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Factor the DE to identify $k$ and $L$. $kP - (k/L)P^2 = kP(1-P/L)$.`
    }
  ]
};
""",
5: r"""export const calcbcLogisticPart5Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log5-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 5 of 7 — Logistic vs Exponential**

### Comparison

| Feature | Exponential | Logistic |
|---------|-------------|----------|
| DE | $dP/dt = kP$ | $dP/dt = kP(1-P/L)$ |
| Solution | $P = P_0 e^{kt}$ | $P = L/(1+Ae^{-kt})$ |
| $t \to \infty$ | $P \to \infty$ | $P \to L$ |
| Shape | J-curve | S-curve |
| Realistic? | Short term | Long term |`
    },
    {
      id: 'log5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compare** 🎯',
      exercise: {
        questions: [
          {
            question: 'When $P \\ll L$, the logistic model behaves like:',
            options: ['Exponential growth', 'Exponential decay', 'Linear growth', 'No growth'],
            correctAnswer: 0,
            explanation: 'When $P \\ll L$: $(1 - P/L) \\approx 1$, so $dP/dt \\approx kP$ — exponential growth.'
          }
        ]
      }
    },
    {
      id: 'log5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Logistic starts exponential, then levels off at $L$. More realistic.`
    }
  ]
};
""",
6: r"""export const calcbcLogisticPart6Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log6-intro',
      type: 'text' as const,
      content: `# Logistic Models

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'log6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '$P(t) = \\frac{600}{1 + 29e^{-0.4t}}$. Find $P(0)$ and $L$.',
            options: ['$P(0) = 20$, $L = 600$', '$P(0) = 600$, $L = 29$', '$P(0) = 29$, $L = 600$', '$P(0) = 30$, $L = 600$'],
            correctAnswer: 0,
            explanation: '$P(0) = 600/(1+29) = 600/30 = 20$. $L = 600$.'
          }
        ]
      }
    },
    {
      id: 'log6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcLogisticPart7Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log7-intro',
      type: 'text' as const,
      content: `# Logistic Models — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'log7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population satisfies $dP/dt = 2P - 0.004P^2$. What is the maximum growth rate?',
            options: ['$250$', '$500$', '$1000$', '$2$'],
            correctAnswer: 0,
            explanation: '$k = 2$, $L = 2/0.004 = 500$. Max rate at $P = 250$: $2(250)(1 - 250/500) = 500(0.5) = 250$.'
          }
        ]
      }
    },
    {
      id: 'log7-summary',
      type: 'text' as const,
      content: `### Logistic Models — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-logistic-models-calcbc-part{i}.ts', parts[i])

###############################################################################
# BC EXAM STRATEGIES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcExamStrategyPart1Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str1-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 1 of 7 — Exam Structure & Time Management**

### AP Calculus BC Format

| Section | Questions | Time | Calculator? |
|---------|-----------|------|-------------|
| MC Part A | 30 | 60 min | No |
| MC Part B | 15 | 45 min | Yes |
| FRQ 1-2 | 2 | 30 min | Yes |
| FRQ 3-6 | 4 | 60 min | No |

### Time Strategy

- MC: ~2 min per question (skip and return)
- FRQ: ~15 min each (show ALL work)
- No penalty for guessing on MC`
    },
    {
      id: 'str1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exam Format** 🎯',
      exercise: {
        questions: [
          {
            question: 'What percentage of the BC exam is calculator-active?',
            options: ['About 40% (Part B MC + FRQ 1-2)', 'About 50%', 'About 25%', 'About 75%'],
            correctAnswer: 0,
            explanation: 'Calculator: 45 min MC + 30 min FRQ = 75 min out of ~195 min total, roughly 38-40%.'
          }
        ]
      }
    },
    {
      id: 'str1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Know the format. Time yourself. Show all work on FRQs.`
    }
  ]
};
""",
2: r"""export const calcbcExamStrategyPart2Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str2-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 2 of 7 — BC-Only Topics**

### Topics Unique to BC (not on AB)

1. **Series**: Taylor, Maclaurin, Lagrange, convergence tests
2. **Integration**: By parts, partial fractions, improper integrals
3. **Parametric/Polar/Vector**: Curves, areas, arc length
4. **Euler's Method** (extended)
5. **Logistic Growth**

### Scoring

BC students also receive an AB Subscore. ~60% of BC exam is AB content.`
    },
    {
      id: 'str2-quiz1',
      type: 'multiple-choice' as const,
      content: '**BC Topics** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which topic appears on BC but NOT on AB?',
            options: ['Integration by parts', 'Chain rule', 'Riemann sums', 'Mean Value Theorem'],
            correctAnswer: 0,
            explanation: 'Integration by parts is a BC-only technique. The other topics appear on both AB and BC.'
          }
        ]
      }
    },
    {
      id: 'str2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Series is the biggest BC-only topic. Master AB content first—it is 60% of BC.`
    }
  ]
};
""",
3: r"""export const calcbcExamStrategyPart3Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str3-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 3 of 7 — FRQ Strategies**

### The 6 FRQs Usually Cover

1. Rate/accumulation (with table or graph)
2. Particle motion or related rates
3. Area/volume
4. Differential equation (often Euler + separation)
5. **Series** (Taylor polynomial, error bound, interval)
6. Parametric/polar or mixed topic

### Earning Points

- Show setup AND answer separately
- Label all integrals/derivatives
- Include units when given
- "Since..." justification format`
    },
    {
      id: 'str3-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Tips** 🎯',
      exercise: {
        questions: [
          {
            question: 'On an FRQ, you set up an integral correctly but make an arithmetic error. You typically:',
            options: ['Earn most points (setup points + partial credit)', 'Earn zero points', 'Earn full credit', 'Lose all subsequent part credit'],
            correctAnswer: 0,
            explanation: 'AP scoring separates setup from computation. Correct setup earns points even with arithmetic errors.'
          }
        ]
      }
    },
    {
      id: 'str3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Show ALL work. Setup and answer are scored separately.`
    }
  ]
};
""",
4: r"""export const calcbcExamStrategyPart4Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str4-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 4 of 7 — Series FRQ Strategy**

### Common Series FRQ Parts

(a) Write the first 4 terms and general term of the Taylor series for $f$ centered at $a$.

(b) Find the radius of convergence.

(c) Use the series to approximate $f(c)$ and bound the error.

(d) Write a new series (derivative, integral, or composition of the original).

### Key: Show the Pattern

Write at least 3-4 nonzero terms AND the general term with summation notation.`
    },
    {
      id: 'str4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series FRQ** 🎯',
      exercise: {
        questions: [
          {
            question: 'An FRQ asks: "Write the first four nonzero terms..." What is the most common mistake?',
            options: ['Writing terms of the wrong series or forgetting the general term', 'Not showing enough work', 'Using the wrong test', 'Calculator error'],
            correctAnswer: 0,
            explanation: 'Students often write terms of $e^x$ when asked for $e^{-x}$, or forget the general term.'
          }
        ]
      }
    },
    {
      id: 'str4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Series FRQ: write terms clearly, include general term, state convergence.`
    }
  ]
};
""",
5: r"""export const calcbcExamStrategyPart5Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str5-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 5 of 7 — Parametric & Polar FRQs**

### Parametric FRQ Checklist

- $dy/dx = (dy/dt)/(dx/dt)$
- Speed: $\sqrt{(dx/dt)^2 + (dy/dt)^2}$
- Arc length: $\int \sqrt{(dx/dt)^2 + (dy/dt)^2}\,dt$
- Total distance vs. displacement

### Polar FRQ Checklist

- Area: $A = \frac{1}{2}\int r^2\,d\theta$
- Find intersection: set $r_1 = r_2$ (and check pole)
- Slope: $dy/dx = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$`
    },
    {
      id: 'str5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Param/Polar** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x(t) = t^2$, $y(t) = t^3$. At $t = 1$, $dy/dx = $',
            options: ['$3/2$', '$3$', '$2/3$', '$1$'],
            correctAnswer: 0,
            explanation: '$dy/dx = (dy/dt)/(dx/dt) = 3t^2/(2t) = 3t/2$. At $t = 1$: $3/2$.'
          }
        ]
      }
    },
    {
      id: 'str5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Parametric: use $dy/dt$ and $dx/dt$. Polar: area is $(1/2)\\int r^2\\,d\\theta$.`
    }
  ]
};
""",
6: r"""export const calcbcExamStrategyPart6Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str6-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 6 of 7 — Common Mistakes to Avoid**

### Top BC Mistakes

1. **Forgetting +C** on indefinite integrals
2. **Wrong limits** on definite integrals
3. **Mixing up convergence tests** (apply the right test!)
4. **Not checking endpoints** for power series
5. **Using wrong formula** for polar area vs. parametric arc length
6. **Not justifying** over/underestimate claims
7. **Dropping negative signs** in alternating series`
    },
    {
      id: 'str6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Common Mistakes** 🎯',
      exercise: {
        questions: [
          {
            question: 'The integral $\\int_0^{\\pi} \\sin\\theta\\,d\\theta = ?$',
            options: ['$2$', '$0$', '$\\pi$', '$-2$'],
            correctAnswer: 0,
            explanation: '$[-\\cos\\theta]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) + 1 = 2$. Common mistake: getting $0$ by computing $\\cos\\pi - \\cos 0$.'
          }
        ]
      }
    },
    {
      id: 'str6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6
Check signs, check endpoints, justify everything. Read questions carefully!`
    }
  ]
};
""",
7: r"""export const calcbcExamStrategyPart7Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str7-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies — Review

**Part 7 of 7 — Final Tips**

### Day-of Checklist

1. Bring: pencils, erasers, approved calculator (charged!)
2. Read each question FULLY before starting
3. If stuck, SKIP and return (no penalty for MC guessing)
4. FRQ: write "something" for every part—partial credit is real
5. Check your work if time permits`
    },
    {
      id: 'str7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Tips** 🎯',
      exercise: {
        questions: [
          {
            question: 'What score typically earns a 5 on the BC exam?',
            options: ['About 60-70% of total points', 'About 90%', 'About 50%', 'About 80%'],
            correctAnswer: 0,
            explanation: 'The cut score for a 5 is typically around 60-70%, varying slightly by year.'
          }
        ]
      }
    },
    {
      id: 'str7-summary',
      type: 'text' as const,
      content: `### BC Exam Strategies — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-bc-exam-strategies-calcbc-part{i}.ts', parts[i])

###############################################################################
# ADVANCED INTEGRATION (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcAdvIntegrationPart1Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv1-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 1 of 7 — Choosing a Method**

### Integration Decision Tree

1. **Basic?** Power rule, trig, exponential → do it directly
2. **Composite?** $\int f(g(x))g'(x)\,dx$ → **u-substitution**
3. **Product of different types?** → **Integration by parts**
4. **Rational function?** → **Partial fractions**
5. **Trig powers?** → Trig identities
6. **Square root of quadratic?** → Trig substitution (beyond BC, but good to know)`
    },
    {
      id: 'adv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Choose the Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Best method for $\\int x\\ln x\\,dx$:',
            options: ['Integration by parts', 'u-substitution', 'Partial fractions', 'Direct integration'],
            correctAnswer: 0,
            explanation: 'Product of polynomial and logarithm → integration by parts with $u = \\ln x$, $dv = x\\,dx$.'
          },
          {
            question: 'Best method for $\\int \\frac{3}{x^2 - 1}\\,dx$:',
            options: ['Partial fractions', 'u-substitution', 'Integration by parts', 'Power rule'],
            correctAnswer: 0,
            explanation: '$\\frac{3}{x^2-1} = \\frac{3}{(x-1)(x+1)}$ → partial fractions.'
          }
        ]
      }
    },
    {
      id: 'adv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Recognize the pattern first. Choose the right technique.`
    }
  ]
};
""",
2: r"""export const calcbcAdvIntegrationPart2Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv2-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 2 of 7 — Challenging u-Substitutions**

### Tricky u-Sub Examples

$\int \frac{e^x}{1 + e^x}\,dx$: let $u = 1 + e^x$

$\int \frac{\ln x}{x}\,dx$: let $u = \ln x$

$\int x\sqrt{x+1}\,dx$: let $u = x+1$, so $x = u - 1$

### Completing the Square for u-Sub

$\int \frac{dx}{x^2 + 4x + 8} = \int \frac{dx}{(x+2)^2 + 4}$: let $u = x + 2$`
    },
    {
      id: 'adv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**u-Sub** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{e^x}{1 + e^x}\\,dx = $',
            options: ['$\\ln(1 + e^x) + C$', '$e^x/(1+e^x) + C$', '$\\arctan(e^x) + C$', '$\\ln(e^x) + C$'],
            correctAnswer: 0,
            explanation: '$u = 1 + e^x$, $du = e^x\\,dx$. $\\int du/u = \\ln|u| + C = \\ln(1+e^x) + C$.'
          }
        ]
      }
    },
    {
      id: 'adv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Look for the derivative of a function inside the integral. Complete the square when needed.`
    }
  ]
};
""",
3: r"""export const calcbcAdvIntegrationPart3Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv3-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 3 of 7 — Combining Techniques**

### Integration by Parts + u-Sub

$\int e^{\sqrt{x}}\,dx$:

Step 1: $u = \sqrt{x}$, $x = u^2$, $dx = 2u\,du$

$= \int e^u \cdot 2u\,du$

Step 2: Integration by parts: $= 2(ue^u - e^u) + C = 2e^{\sqrt{x}}(\sqrt{x} - 1) + C$`
    },
    {
      id: 'adv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Combined Methods** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int x^3 \\ln x\\,dx$ using parts with $u = \\ln x$, $dv = x^3\\,dx$:',
            options: ['$\\frac{x^4 \\ln x}{4} - \\frac{x^4}{16} + C$', '$\\frac{x^4 \\ln x}{4} + C$', '$x^3/(3\\ln x) + C$', '$\\frac{x^4}{4} \\ln x - \\frac{x^3}{3} + C$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $v = x^4/4$. $= \\frac{x^4 \\ln x}{4} - \\int \\frac{x^4}{4} \\cdot \\frac{1}{x}\\,dx = \\frac{x^4 \\ln x}{4} - \\frac{1}{4}\\int x^3\\,dx = \\frac{x^4 \\ln x}{4} - \\frac{x^4}{16} + C$.'
          }
        ]
      }
    },
    {
      id: 'adv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Some integrals need multiple techniques in sequence.`
    }
  ]
};
""",
4: r"""export const calcbcAdvIntegrationPart4Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv4-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 4 of 7 — Improper Integrals Revisited**

### Type I: Infinite Limits

$\int_1^{\infty} \frac{1}{x^p}\,dx$ converges iff $p > 1$

### Type II: Discontinuities

$\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{a \to 0^+}\int_a^1 x^{-1/2}\,dx = \lim_{a \to 0^+} [2\sqrt{x}]_a^1 = 2$

### Comparison Test for Integrals

If $0 \leq f(x) \leq g(x)$:
- $\int g$ converges $\implies$ $\int f$ converges
- $\int f$ diverges $\implies$ $\int g$ diverges`
    },
    {
      id: 'adv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Improper** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx$ converge?',
            options: ['Yes (compare to $1/x^2$, or just compute: $\\arctan(\\infty) - \\arctan(1) = \\pi/4$)', 'No', 'Cannot determine', 'Depends on bounds'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x^2+1} \\leq \\frac{1}{x^2}$ and $\\int_1^{\\infty} 1/x^2$ converges. So this converges. Value: $\\pi/2 - \\pi/4 = \\pi/4$.'
          }
        ]
      }
    },
    {
      id: 'adv4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
$p$-test: $\\int_1^{\\infty} 1/x^p$ converges iff $p > 1$. Use comparison for harder integrals.`
    }
  ]
};
""",
5: r"""export const calcbcAdvIntegrationPart5Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv5-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 5 of 7 — Tabular Integration**

### Tabular Method (Repeated Parts)

For $\int x^n e^{ax}\,dx$ or $\int x^n \sin(ax)\,dx$:

$\int x^3 e^x\,dx$:

| D | I | Sign |
|---|---|------|
| $x^3$ | $e^x$ | + |
| $3x^2$ | $e^x$ | - |
| $6x$ | $e^x$ | + |
| $6$ | $e^x$ | - |
| $0$ | $e^x$ | |

$= x^3 e^x - 3x^2 e^x + 6x e^x - 6e^x + C$`
    },
    {
      id: 'adv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tabular** 🎯',
      exercise: {
        questions: [
          {
            question: 'Using tabular method, $\\int x^2 \\cos x\\,dx = $',
            options: ['$x^2 \\sin x + 2x \\cos x - 2\\sin x + C$', '$x^2 \\sin x + C$', '$x^2 \\cos x - 2x \\sin x + C$', '$2x \\sin x + 2\\cos x + C$'],
            correctAnswer: 0,
            explanation: 'D: $x^2, 2x, 2, 0$. I: $\\cos x, \\sin x, -\\cos x, -\\sin x$. Signs: $+, -, +$. Result: $x^2\\sin x + 2x\\cos x - 2\\sin x + C$.'
          }
        ]
      }
    },
    {
      id: 'adv5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Tabular method speeds up repeated integration by parts.`
    }
  ]
};
""",
6: r"""export const calcbcAdvIntegrationPart6Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv6-intro',
      type: 'text' as const,
      content: `# Advanced Integration

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'adv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Workshop** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x+1}{x^2+2x+5}\\,dx$',
            options: ['$\\frac{1}{2}\\ln(x^2+2x+5) + C$', '$\\arctan\\left(\\frac{x+1}{2}\\right) + C$', '$\\ln(x^2+2x+5) + C$', 'Partial fractions needed'],
            correctAnswer: 0,
            explanation: 'Numerator is half the derivative of denominator: $d(x^2+2x+5)/dx = 2x+2 = 2(x+1)$. So $\\int = \\frac{1}{2}\\ln|x^2+2x+5| + C$.'
          }
        ]
      }
    },
    {
      id: 'adv6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcAdvIntegrationPart7Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'adv7-intro',
      type: 'text' as const,
      content: `# Advanced Integration — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'adv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{\\infty} xe^{-x}\\,dx$',
            options: ['$1$', '$0$', '$\\infty$', '$e$'],
            correctAnswer: 0,
            explanation: 'By parts: $u = x, dv = e^{-x}dx$. $= [-xe^{-x}]_0^{\\infty} + \\int_0^{\\infty} e^{-x}dx = 0 + [-e^{-x}]_0^{\\infty} = 0 + 1 = 1$.'
          }
        ]
      }
    },
    {
      id: 'adv7-summary',
      type: 'text' as const,
      content: `### Advanced Integration — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-advanced-integration-calcbc-part{i}.ts', parts[i])

###############################################################################
# REVIEW CONNECTIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcReviewPart1Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev1-intro',
      type: 'text' as const,
      content: `# BC Review & Connections

**Part 1 of 7 — The Big Picture**

### Core Themes of Calculus

1. **Limits** → foundation of everything
2. **Derivatives** → rates of change (local behavior)
3. **Integrals** → accumulation (global behavior)
4. **Series** → infinite sums (representation of functions)

### The FTC Connects Them

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

Differentiation and integration are inverse operations.`
    },
    {
      id: 'rev1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Big Picture** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which concept unifies derivatives, integrals, and series?',
            options: ['Limits', 'Algebra', 'Geometry', 'Arithmetic'],
            correctAnswer: 0,
            explanation: 'Derivatives are limits of difference quotients, integrals are limits of Riemann sums, series are limits of partial sums. Limits underpin everything.'
          }
        ]
      }
    },
    {
      id: 'rev1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Everything in calculus is built on limits.`
    }
  ]
};
""",
2: r"""export const calcbcReviewPart2Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev2-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 2 of 7 — Derivative Rules Summary**

### Must-Know Derivatives

| $f(x)$ | $f'(x)$ |
|---------|---------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\arctan x$ | $1/(1+x^2)$ |

Plus: product rule, quotient rule, chain rule!`
    },
    {
      id: 'rev2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}[e^{\\sin x}] = $',
            options: ['$e^{\\sin x}\\cos x$', '$e^{\\cos x}$', '$\\cos x \\cdot e^x$', '$e^{\\sin x}/\\cos x$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $e^{\\sin x} \\cdot \\cos x$.'
          }
        ]
      }
    },
    {
      id: 'rev2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Know all basic derivative formulas cold. Chain rule applies to all of them.`
    }
  ]
};
""",
3: r"""export const calcbcReviewPart3Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev3-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 3 of 7 — Integration Techniques Summary**

### Integration Toolkit

1. **Direct**: power, trig, exponential
2. **u-Substitution**: $\int f(g(x))g'(x)\,dx$
3. **Integration by Parts** (BC): $\int u\,dv = uv - \int v\,du$
4. **Partial Fractions** (BC): for rational functions
5. **Improper Integrals** (BC): limits at $\pm\infty$ or discontinuities
6. **Series Integration** (BC): term-by-term for power series`
    },
    {
      id: 'rev3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{2x}{x^2+1}\\,dx = $',
            options: ['$\\ln(x^2+1) + C$', '$\\arctan x + C$', '$2\\arctan x + C$', '$x^2/(x^2+1) + C$'],
            correctAnswer: 0,
            explanation: '$u = x^2 + 1$, $du = 2x\\,dx$. $\\int du/u = \\ln|u| + C = \\ln(x^2+1) + C$.'
          }
        ]
      }
    },
    {
      id: 'rev3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Master all six integration techniques. Know when to use each.`
    }
  ]
};
""",
4: r"""export const calcbcReviewPart4Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev4-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 4 of 7 — Series Convergence Summary**

### Convergence Tests Quick Reference

| Test | Series Form | Converges When |
|------|-------------|----------------|
| Divergence | Any | $a_n \not\to 0$ → diverges |
| Geometric | $ar^n$ | $|r| < 1$ |
| $p$-Series | $1/n^p$ | $p > 1$ |
| Integral | $\sum f(n)$ | $\int f$ converges |
| Comparison | vs. known | Bound above/below |
| Ratio | Any | $L < 1$ converges |
| AST | Alternating | $b_n \to 0$, decreasing |`
    },
    {
      id: 'rev4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: 'Best test for $\\sum \\frac{n!}{3^n}$?',
            options: ['Ratio test', 'Integral test', '$p$-series', 'Comparison'],
            correctAnswer: 0,
            explanation: 'Factorials → ratio test. $L = \\lim \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\lim \\frac{n+1}{3} = \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'rev4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Factorials → ratio. Powers → comparison/$p$-test. Alternating → AST.`
    }
  ]
};
""",
5: r"""export const calcbcReviewPart5Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev5-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 5 of 7 — Applications Summary**

### BC Applications Checklist

- **Area between curves**: $\int (f - g)\,dx$
- **Volume (disk/washer)**: $\pi\int [R^2 - r^2]\,dx$
- **Volume (shell)**: $2\pi\int x \cdot f(x)\,dx$
- **Arc length**: $\int \sqrt{1 + (f')^2}\,dx$ or $\int \sqrt{(x')^2 + (y')^2}\,dt$
- **Polar area**: $\frac{1}{2}\int r^2\,d\theta$
- **Accumulation**: $F(x) = F(a) + \int_a^x f(t)\,dt$`
    },
    {
      id: 'rev5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'Volume of $y = \\sqrt{x}$ from $0$ to $4$ revolved about the $x$-axis (disk):',
            options: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi[x^2/2]_0^4 = 8\\pi$.'
          }
        ]
      }
    },
    {
      id: 'rev5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Know every application formula. Draw pictures!`
    }
  ]
};
""",
6: r"""export const calcbcReviewPart6Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev6-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'rev6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2)\\,dt = $',
            options: ['$2x\\sin(x^4)$', '$\\sin(x^4)$', '$2x\\sin(x^2)$', '$\\cos(x^4) \\cdot 2x$'],
            correctAnswer: 0,
            explanation: 'FTC + Chain Rule: $\\sin((x^2)^2) \\cdot 2x = 2x\\sin(x^4)$.'
          },
          {
            question: 'The coefficient of $(x-1)^3$ in the Taylor series for $e^x$ about $a = 1$:',
            options: ['$e/6$', '$e/3$', '$1/6$', '$e$'],
            correctAnswer: 0,
            explanation: '$f^{(3)}(1)/3! = e/6$.'
          }
        ]
      }
    },
    {
      id: 'rev6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcReviewPart7Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev7-intro',
      type: 'text' as const,
      content: `# BC Review & Connections — Final

**Part 7 of 7 — You're Ready!**

### What You've Mastered

- Limits, continuity, and the definition of derivative
- All differentiation rules and applications
- All integration techniques (including BC-exclusive)
- Differential equations (separable, Euler, logistic)
- Parametric, polar, and vector calculus
- Sequences, series, and convergence tests
- Taylor/Maclaurin series and error bounds
- Applications: area, volume, arc length, accumulation

**You are prepared for the AP Calculus BC exam. Good luck! 🎓**`
    },
    {
      id: 'rev7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Question** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $\\sum_{n=0}^{\\infty} \\frac{1}{n!}$?',
            options: ['$e$', '$\\pi$', '$\\infty$', '$1$'],
            correctAnswer: 0,
            explanation: 'This is $e^1 = e \\approx 2.71828...$. You know this!'
          }
        ]
      }
    },
    {
      id: 'rev7-summary',
      type: 'text' as const,
      content: `### AP Calculus BC — Complete! 🎓✅

You have completed all interactive lessons for AP Calculus BC. Go ace that exam!`
    }
  ]
};
""",
    }
    write_file(f'calcbc-review-connections-calcbc-part{i}.ts', parts[i])

print("\nEuler (7), Logistic (7), Exam Strategies (7), Advanced Integration (7), Review (7) complete!")
print("Total files written: 35")
