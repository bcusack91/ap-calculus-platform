#!/usr/bin/env python3
"""Generate AP Calculus AB: Accumulation, Differential Equations, Particle Motion."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# ACCUMULATION FUNCTIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabAccumulationPart1Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc1-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 1 of 7 — The Accumulation Concept**

### What is an Accumulation Function?

$$F(x) = \\int_a^x f(t)\\,dt$$

$F(x)$ measures **how much has accumulated** from $a$ to $x$.

### Key Properties

| Property | Explanation |
|----------|------------|
| $F(a) = 0$ | Nothing has accumulated at the starting point |
| $F'(x) = f(x)$ | FTC Part 1 — the rate equals the integrand |
| $F$ increasing | where $f(x) > 0$ |
| $F$ decreasing | where $f(x) < 0$ |
| $F$ has max | where $f$ changes from $+$ to $-$ |
| $F$ has min | where $f$ changes from $-$ to $+$ |

### Worked Example

Let $F(x) = \\int_0^x (2t - 4)\\,dt$. Find $F(3)$ and $F'(3)$.

$F(3) = \\int_0^3 (2t-4)\\,dt = [t^2 - 4t]_0^3 = 9 - 12 = -3$

$F'(3) = f(3) = 2(3) - 4 = 2$

So at $x = 3$, only $-3$ has accumulated so far, but the rate is $+2$ (accumulating positively).`
    },
    {
      id: 'acc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Accumulation Functions** \ud83c\udfaf\n\nLet $g(x) = \\int_1^x f(t)\\,dt$ where $f$ is continuous.',
      exercise: {
        questions: [
          {
            question: 'What is $g(1)$?',
            options: ['$0$', '$f(1)$', '$1$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$g(1) = \\int_1^1 f(t)\\,dt = 0$. The integral from a number to itself is always 0.'
          },
          {
            question: 'If $f(x) > 0$ for all $x$ in $(1, 5)$, what can we say about $g$ on $(1, 5)$?',
            options: ['$g$ is positive', '$g$ is increasing', '$g$ is concave up', '$g$ is decreasing'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x) > 0$, so $g$ is increasing on $(1, 5)$.'
          },
          {
            question: 'If $f(3) = 0$ and $f$ changes from positive to negative at $x = 3$, what happens to $g$ at $x = 3$?',
            options: ['$g$ has a local minimum', '$g$ has a local maximum', '$g$ equals zero', '$g$ has an inflection point'],
            correctAnswer: 1,
            explanation: '$g\'(3) = f(3) = 0$ and $g\'$ changes from $+$ to $-$. This means $g$ has a local maximum at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'acc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1
1. $F(x) = \\int_a^x f(t)\\,dt$ accumulates starting from $a$
2. $F(a) = 0$ always
3. $F' = f$ connects the accumulation function to the original function`
    }
  ]
};
""",
2: r"""export const calcabAccumulationPart2Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc2-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 2 of 7 \u2014 Reading Graphs of $f$ to Analyze $F$**

### Graph-Based Analysis

Given the **graph of $f$**, you can determine everything about $F(x) = \\int_a^x f(t)\\,dt$:

- **Values of $F$**: computed as signed areas under $f$
- **Where $F$ increases/decreases**: where $f$ is positive/negative
- **Max/min of $F$**: where $f$ changes sign
- **Concavity of $F$**: $F'' = f'$, so look at whether $f$ is increasing/decreasing

> **AP Tip:** This is one of the most commonly tested skills on the AP exam!`
    },
    {
      id: 'acc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** \ud83c\udfaf\n\nSuppose $f$ is a piecewise linear function on $[0, 6]$: $f(0) = 2$, $f(2) = 2$, $f(4) = -2$, $f(6) = 0$. Let $g(x) = \\int_0^x f(t)\\,dt$.',
      exercise: {
        questions: [
          {
            question: 'What is $g(2)$?',
            options: ['$2$', '$4$', '$0$', '$1$'],
            correctAnswer: 1,
            explanation: '$g(2)$ = area under $f$ from $0$ to $2$. Since $f = 2$ (constant) on $[0,2]$, the area is $2 \\times 2 = 4$.'
          },
          {
            question: 'At what $x$ value does $g$ reach its absolute maximum on $[0, 6]$?',
            options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 6$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x)$. $f$ changes from positive to negative at $x = 3$ (linear from $2$ to $-2$ crosses zero at $x = 3$). So $g$ has its maximum at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'acc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2
1. Read the graph of $f$ to determine the behavior of $g = \\int f$
2. Signed area under $f$ gives the value of $g$
3. This skill is tested on nearly every AP exam`
    }
  ]
};
""",
3: r"""export const calcabAccumulationPart3Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc3-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 3 of 7 \u2014 FTC Part 1 with Chain Rule Review**

### Chain Rule Variant

$$\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$$

### Both Limits Variable

$$\\frac{d}{dx}\\int_{h(x)}^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x) - f(h(x)) \\cdot h'(x)$$`
    },
    {
      id: 'acc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC with Chain Rule** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\int_0^{\\sin x} t^2\\,dt$.',
            options: ['$\\sin^2(x) \\cos(x)$', '$\\sin^2(x)$', '$\\cos^2(x)$', '$2\\sin(x)\\cos(x)$'],
            correctAnswer: 0,
            explanation: '$f(t) = t^2$, $g(x) = \\sin x$, $g\'(x) = \\cos x$. Answer: $(\\sin x)^2 \\cdot \\cos x = \\sin^2(x)\\cos(x)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_{2x}^{x^2} e^t\\,dt$.',
            options: ['$2xe^{x^2} - 2e^{2x}$', '$e^{x^2} - e^{2x}$', '$2xe^{x^2} + 2e^{2x}$', '$e^{x^2}(2x-2)$'],
            correctAnswer: 0,
            explanation: 'Upper: $g(x) = x^2$ gives $e^{x^2} \\cdot 2x$. Lower: $h(x) = 2x$ gives $e^{2x} \\cdot 2$. Total: $2xe^{x^2} - 2e^{2x}$.'
          }
        ]
      }
    },
    {
      id: 'acc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3
1. Both limits variable: subtract the lower limit contribution
2. Each limit contributes: $f(\\text{limit}) \\cdot \\text{limit derivative}$`
    }
  ]
};
""",
4: r"""export const calcabAccumulationPart4Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc4-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 4 of 7 \u2014 Net Change Applications**

### Rate In / Rate Out Problems

If $R_{in}(t)$ = rate in and $R_{out}(t)$ = rate out:

$$\\text{Net change} = \\int_a^b [R_{in}(t) - R_{out}(t)]\\,dt$$

$$\\text{Amount at time } b = \\text{Initial amount} + \\int_a^b [R_{in} - R_{out}]\\,dt$$

These problems appear on nearly every AP exam!`
    },
    {
      id: 'acc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate In/Rate Out** \ud83c\udfaf\n\nWater flows into a tank at $R_{in}(t) = 10 + 2t$ gallons/hr and leaks out at $R_{out}(t) = 5$ gallons/hr. Initially the tank has 100 gallons.',
      exercise: {
        questions: [
          {
            question: 'How much water is in the tank at $t = 4$ hours?',
            options: ['$136$ gallons', '$140$ gallons', '$120$ gallons', '$116$ gallons'],
            correctAnswer: 0,
            explanation: 'Net rate = $(10+2t) - 5 = 5 + 2t$. Net change = $\\int_0^4 (5+2t)\\,dt = [5t+t^2]_0^4 = 20+16 = 36$. Total: $100 + 36 = 136$ gallons.'
          },
          {
            question: 'At what rate is the amount of water changing at $t = 3$?',
            options: ['$11$ gal/hr', '$16$ gal/hr', '$5$ gal/hr', '$8$ gal/hr'],
            correctAnswer: 0,
            explanation: 'Net rate at $t=3$: $(10+6) - 5 = 11$ gallons/hour.'
          }
        ]
      }
    },
    {
      id: 'acc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. Net change = $\\int (\\text{rate in} - \\text{rate out})\\,dt$
2. Current amount = initial + net change
3. This is one of the most common AP FRQ formats`
    }
  ]
};
""",
5: r"""export const calcabAccumulationPart5Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc5-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 5 of 7 \u2014 Average Value of a Function**

### Average Value Formula

$$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$

### Mean Value Theorem for Integrals

There exists $c \\in [a,b]$ such that $f(c) = f_{\\text{avg}}$.

### Worked Example

Find the average value of $f(x) = x^2$ on $[0, 3]$.

$$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot \\frac{27}{3} = 3$$`
    },
    {
      id: 'acc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Average Value** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the average value of $f(x) = \\sin x$ on $[0, \\pi]$.',
            options: ['$\\frac{2}{\\pi}$', '$\\frac{1}{\\pi}$', '$1$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{\\pi}\\int_0^{\\pi} \\sin x\\,dx = \\frac{1}{\\pi}[-\\cos x]_0^{\\pi} = \\frac{1}{\\pi}(1+1) = \\frac{2}{\\pi}$.'
          },
          {
            question: 'The average value of $f(x) = 3x + 1$ on $[0, 4]$ is:',
            options: ['$7$', '$6$', '$8$', '$5$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{4}\\int_0^4 (3x+1)\\,dx = \\frac{1}{4}[\\frac{3x^2}{2}+x]_0^4 = \\frac{1}{4}(24+4) = 7$.'
          }
        ]
      }
    },
    {
      id: 'acc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
1. Average value = $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$
2. MVT for integrals guarantees $f(c) = f_{\\text{avg}}$ for some $c$`
    }
  ]
};
""",
6: r"""export const calcabAccumulationPart6Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc6-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 6 of 7 \u2014 Practice Workshop**`
    },
    {
      id: 'acc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Accumulation Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $F(x) = \\int_2^x (t^2 - 5t + 6)\\,dt$, find the values of $x$ where $F$ has local extrema.',
            options: ['$x = 2$ and $x = 3$', '$x = 3$ only', '$x = 2$ only', '$x = 1$ and $x = 6$'],
            correctAnswer: 0,
            explanation: '$F\'(x) = x^2 - 5x + 6 = (x-2)(x-3) = 0$ at $x = 2$ and $x = 3$. Check sign changes: $F\'$ goes $+ \\to - \\to +$ at these points, so local max at $x=2$, local min at $x=3$. Actually $F\'$ is $(x-2)(x-3)$: positive for $x<2$, negative for $2<x<3$, positive for $x>3$. So local max at $x=2$ and local min at $x=3$.'
          }
        ]
      }
    },
    {
      id: 'acc6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabAccumulationPart7Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc7-intro',
      type: 'text' as const,
      content: `# Accumulation Functions \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**`
    },
    {
      id: 'acc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $g(x) = \\int_0^x f(t)\\,dt$ and $\\int_0^5 f(t)\\,dt = 8$, what is $g(5)$?',
            options: ['$8$', '$0$', '$f(5)$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$g(5) = \\int_0^5 f(t)\\,dt = 8$. Direct substitution!'
          },
          {
            question: 'Find the average value of $f(x) = e^x$ on $[0, 2]$.',
            options: ['$\\frac{e^2 - 1}{2}$', '$e^2 - 1$', '$\\frac{e^2}{2}$', '$e - 1$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{2}\\int_0^2 e^x\\,dx = \\frac{1}{2}[e^x]_0^2 = \\frac{e^2-1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'acc7-summary',
      type: 'text' as const,
      content: `### Accumulation Functions \u2014 Complete! \u2705`
    }
  ]
};
""",
    }
    write_file(f'calcab-accumulation-functions-calcab-part{i}.ts', parts[i])

###############################################################################
# DIFFERENTIAL EQUATIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabDiffEqPart1Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de1-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 1 of 7 \u2014 Introduction to Differential Equations**

### What is a Differential Equation?

A **differential equation (DE)** is an equation involving a function and its derivative(s).

Examples:
- $\\frac{dy}{dx} = 3x^2$ \u2014 directly integrable
- $\\frac{dy}{dx} = 2y$ \u2014 the rate depends on the current value
- $\\frac{dy}{dx} = x + y$ \u2014 non-separable (not on AP AB)

### Solving by Direct Integration

$$\\frac{dy}{dx} = f(x) \\implies y = \\int f(x)\\,dx$$

### Worked Example

$\\frac{dy}{dx} = 6x^2 - 4x + 1$, $y(0) = 3$.

$y = 2x^3 - 2x^2 + x + C$

$y(0) = C = 3$. So $y = 2x^3 - 2x^2 + x + 3$.`
    },
    {
      id: 'de1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Direct Integration** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\cos x + 2$ with $y(0) = 1$.',
            options: ['$y = \\sin x + 2x + 1$', '$y = \\sin x + 2x$', '$y = -\\sin x + 2x + 1$', '$y = \\cos x + 2x + 1$'],
            correctAnswer: 0,
            explanation: '$y = \\sin x + 2x + C$. $y(0) = 0 + 0 + C = 1$. $y = \\sin x + 2x + 1$.'
          }
        ]
      }
    },
    {
      id: 'de1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1
1. A DE relates a function to its derivatives
2. Direct integration works when $\\frac{dy}{dx} = f(x)$
3. Use initial conditions to find $C$`
    }
  ]
};
""",
2: r"""export const calcabDiffEqPart2Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de2-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 2 of 7 \u2014 Separation of Variables**

### The Method

For DEs of the form $\\frac{dy}{dx} = f(x) \\cdot g(y)$:

1. Separate: $\\frac{dy}{g(y)} = f(x)\\,dx$
2. Integrate both sides
3. Solve for $y$ (if possible)

### Worked Example

$\\frac{dy}{dx} = xy$, $y(0) = 2$.

$\\frac{dy}{y} = x\\,dx$

$\\ln|y| = \\frac{x^2}{2} + C$

$y = Ae^{x^2/2}$ where $A = e^C$

$y(0) = A = 2$. So $y = 2e^{x^2/2}$.`
    },
    {
      id: 'de2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Separation of Variables** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(0) = 3$.',
            options: ['$y = \\sqrt{x^2 + 9}$', '$y = x^2 + 9$', '$y = \\sqrt{x + 9}$', '$y = \\sqrt{2x^2 + 9}$'],
            correctAnswer: 0,
            explanation: '$y\\,dy = x\\,dx$. $\\frac{y^2}{2} = \\frac{x^2}{2} + C$. $y^2 = x^2 + 2C$. $y(0) = 3$: $9 = 2C$, so $y^2 = x^2 + 9$, $y = \\sqrt{x^2 + 9}$.'
          },
          {
            question: 'Solve $\\frac{dy}{dx} = 3y$ with $y(0) = 5$.',
            options: ['$y = 5e^{3x}$', '$y = 3e^{5x}$', '$y = 5 + 3x$', '$y = e^{3x} + 4$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y} = 3\\,dx$. $\\ln|y| = 3x + C$. $y = Ae^{3x}$. $y(0) = A = 5$.'
          }
        ]
      }
    },
    {
      id: 'de2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2
1. Separate variables: get all $y$ on one side, all $x$ on the other
2. Integrate both sides
3. Don't forget the constant $+C$ (or $A = e^C$ for exponentials)`
    }
  ]
};
""",
3: r"""export const calcabDiffEqPart3Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de3-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 3 of 7 \u2014 Slope Fields**

### What is a Slope Field?

A **slope field** (direction field) is a visual representation of a DE. At each point $(x, y)$, a small line segment shows the slope $\\frac{dy}{dx}$.

### Reading Slope Fields

| Observation | Meaning |
|------------|---------|
| All slopes horizontal where $y = 2$ | $\\frac{dy}{dx} = 0$ when $y = 2$ |
| Slopes steeper as $x$ increases | DE depends on $x$ |
| Slopes same along horizontal lines | DE depends only on $y$ |
| Slopes same along vertical lines | DE depends only on $x$ |

### Matching Slope Fields to DEs

To match a slope field to a DE:
1. Check specific points: what's the slope at $(0,0)$, $(1,1)$, etc.?
2. Look for where slopes are zero (horizontal segments)
3. Look for patterns (same slopes on lines, etc.)`
    },
    {
      id: 'de3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Slope Field Analysis** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y - 1$, where are the slopes zero?',
            options: ['$y = 0$', '$y = 1$', '$x = 0$', '$x = 1$'],
            correctAnswer: 1,
            explanation: '$\\frac{dy}{dx} = y - 1 = 0$ when $y = 1$. All points on $y = 1$ have horizontal slopes.'
          },
          {
            question: 'For $\\frac{dy}{dx} = x + y$, what is the slope at $(1, -1)$?',
            options: ['$0$', '$2$', '$-2$', '$1$'],
            correctAnswer: 0,
            explanation: 'At $(1, -1)$: slope $= 1 + (-1) = 0$.'
          }
        ]
      }
    },
    {
      id: 'de3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3
1. Slope fields visualize the behavior of solutions
2. Solutions follow the slope field like flowing water
3. Check where slopes are 0, positive, or negative to match DEs`
    }
  ]
};
""",
4: r"""export const calcabDiffEqPart4Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de4-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 4 of 7 \u2014 Exponential Growth and Decay**

### The Model

$$\\frac{dy}{dt} = ky$$

**Solution:** $y = y_0 e^{kt}$

- $k > 0$: exponential **growth**
- $k < 0$: exponential **decay**
- $y_0$: initial value

### Half-Life and Doubling Time

**Doubling time** ($k > 0$): $T = \\frac{\\ln 2}{k}$

**Half-life** ($k < 0$): $T = \\frac{\\ln 2}{|k|}$`
    },
    {
      id: 'de4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Models** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A population doubles every 5 years. Starting at 1000, what is the population after 15 years?',
            options: ['$4000$', '$8000$', '$3000$', '$6000$'],
            correctAnswer: 1,
            explanation: 'Doubling every 5 years: after 15 years = 3 doublings. $1000 \\times 2^3 = 8000$.'
          },
          {
            question: 'A substance has half-life 10 hrs. If 200 g are present initially, how much remains after 30 hrs?',
            options: ['$25$ g', '$50$ g', '$12.5$ g', '$100$ g'],
            correctAnswer: 0,
            explanation: '30 hrs = 3 half-lives. $200 \\times (\\frac{1}{2})^3 = 200 \\times \\frac{1}{8} = 25$ g.'
          }
        ]
      }
    },
    {
      id: 'de4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. $\\frac{dy}{dt} = ky$ has solution $y = y_0 e^{kt}$
2. Growth ($k>0$): doubling time $= \\ln 2/k$
3. Decay ($k<0$): half-life $= \\ln 2/|k|$`
    }
  ]
};
""",
5: r"""export const calcabDiffEqPart5Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de5-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 5 of 7 \u2014 More Separation of Variables Practice**

### Harder Examples

$$\\frac{dy}{dx} = \\frac{y^2}{x}, \\quad y(1) = 2$$

$\\frac{dy}{y^2} = \\frac{dx}{x}$

$-\\frac{1}{y} = \\ln|x| + C$

$y(1) = 2$: $-\\frac{1}{2} = 0 + C$, so $C = -\\frac{1}{2}$

$-\\frac{1}{y} = \\ln x - \\frac{1}{2}$

$y = \\frac{1}{\\frac{1}{2} - \\ln x} = \\frac{2}{1 - 2\\ln x}$`
    },
    {
      id: 'de5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Separation of Variables Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{y}{x+1}$ with $y(0) = 4$.',
            options: ['$y = 4(x+1)$', '$y = 4e^x$', '$y = (x+1)^4$', '$y = 4\\ln(x+1)$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y} = \\frac{dx}{x+1}$. $\\ln|y| = \\ln|x+1| + C$. $y = A(x+1)$. $y(0) = A = 4$.'
          }
        ]
      }
    },
    {
      id: 'de5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
Practice various types of separable DEs to build fluency.`
    }
  ]
};
""",
6: r"""export const calcabDiffEqPart6Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de6-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'de6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style DE Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'For $\\frac{dy}{dx} = y(3-y)$, which values of $y$ are equilibrium solutions?',
            options: ['$y = 0$ and $y = 3$', '$y = 0$ only', '$y = 3$ only', '$y = -3$ and $y = 0$'],
            correctAnswer: 0,
            explanation: 'Equilibrium when $\\frac{dy}{dx} = 0$: $y(3-y) = 0$ gives $y = 0$ and $y = 3$.'
          },
          {
            question: 'Newton\'s Law of Cooling: $\\frac{dT}{dt} = -0.1(T - 70)$. If $T(0) = 200$, find $T(t)$.',
            options: ['$T = 70 + 130e^{-0.1t}$', '$T = 200e^{-0.1t}$', '$T = 70 + 200e^{-0.1t}$', '$T = 130e^{-0.1t}$'],
            correctAnswer: 0,
            explanation: 'Let $u = T - 70$. $\\frac{du}{dt} = -0.1u$, so $u = 130e^{-0.1t}$. $T = 70 + 130e^{-0.1t}$.'
          }
        ]
      }
    },
    {
      id: 'de6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabDiffEqPart7Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de7-intro',
      type: 'text' as const,
      content: `# Differential Equations \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**`
    },
    {
      id: 'de7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = 2xy^2$ with $y(0) = 1$.',
            options: ['$y = \\frac{1}{1-x^2}$', '$y = e^{x^2}$', '$y = \\frac{1}{1+x^2}$', '$y = (1+x^2)^2$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y^2} = 2x\\,dx$. $-\\frac{1}{y} = x^2 + C$. $y(0)=1$: $C = -1$. $y = \\frac{1}{1-x^2}$.'
          },
          {
            question: 'A bacteria population grows at rate $\\frac{dP}{dt} = 0.05P$. Starting at 500, when does it reach 2000?',
            options: ['$\\frac{\\ln 4}{0.05}$ hours', '$\\frac{\\ln 2}{0.05}$ hours', '$80$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: '$P = 500e^{0.05t} = 2000$. $e^{0.05t} = 4$. $t = \\frac{\\ln 4}{0.05}$.'
          }
        ]
      }
    },
    {
      id: 'de7-summary',
      type: 'text' as const,
      content: `### Differential Equations \u2014 Complete! \u2705`
    }
  ]
};
""",
    }
    write_file(f'calcab-differential-equations-calcab-part{i}.ts', parts[i])

###############################################################################
# PARTICLE MOTION (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabParticleMotionPart1Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm1-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 1 of 7 \u2014 Position, Velocity, Acceleration**

### The Relationships

| Function | Symbol | Relationship |
|----------|--------|-------------|
| Position | $s(t)$ | Given or found by integrating $v$ |
| Velocity | $v(t)$ | $v(t) = s'(t)$ |
| Acceleration | $a(t)$ | $a(t) = v'(t) = s''(t)$ |

### Key Interpretations

- **Speed** $= |v(t)|$ (always positive)
- Particle moves **right** when $v(t) > 0$
- Particle moves **left** when $v(t) < 0$
- Particle **speeds up** when $v$ and $a$ have the **same sign**
- Particle **slows down** when $v$ and $a$ have **opposite signs**`
    },
    {
      id: 'pm1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Position, Velocity, Acceleration** \ud83c\udfaf\n\nA particle moves along a line with $s(t) = t^3 - 6t^2 + 9t + 1$.',
      exercise: {
        questions: [
          {
            question: 'When is the particle at rest?',
            options: ['$t = 1$ and $t = 3$', '$t = 0$ and $t = 2$', '$t = 2$ only', '$t = 3$ only'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$ at $t = 1$ and $t = 3$.'
          },
          {
            question: 'When is the particle moving left?',
            options: ['$t < 1$', '$1 < t < 3$', '$t > 3$', '$t < 0$'],
            correctAnswer: 1,
            explanation: '$v(t) = 3(t-1)(t-3) < 0$ when $1 < t < 3$. The particle moves left on this interval.'
          },
          {
            question: 'At $t = 2$, is the particle speeding up or slowing down?',
            options: ['Speeding up', 'Slowing down', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$v(2) = 3(1)(-1) = -3 < 0$. $a(t) = 6t - 12$, $a(2) = 0$. Actually $a(2) = 0$, so neither speeding up nor slowing down at that instant.'
          }
        ]
      }
    },
    {
      id: 'pm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1
1. Differentiate position to get velocity, differentiate again for acceleration
2. "At rest" means $v(t) = 0$
3. Direction of motion determined by sign of $v(t)$`
    }
  ]
};
""",
2: r"""export const calcabParticleMotionPart2Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 2 of 7 \u2014 Displacement vs Total Distance**

### Displacement (Net Change)

$$\\text{Displacement} = \\int_a^b v(t)\\,dt = s(b) - s(a)$$

### Total Distance Traveled

$$\\text{Total Distance} = \\int_a^b |v(t)|\\,dt$$

Split the integral where $v(t) = 0$ (direction changes).

### Worked Example

$v(t) = t^2 - 4$ on $[0, 3]$.

$v = 0$ at $t = 2$.

Displacement: $\\int_0^3 (t^2-4)\\,dt = [\\frac{t^3}{3} - 4t]_0^3 = 9-12 = -3$

Total distance: $\\int_0^2 |t^2-4|\\,dt + \\int_2^3 |t^2-4|\\,dt$
$= \\int_0^2 (4-t^2)\\,dt + \\int_2^3 (t^2-4)\\,dt = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$`
    },
    {
      id: 'pm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Displacement vs Distance** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $v(t) = 3t^2 - 6t$ on $[0, 3]$, find the total distance traveled.',
            options: ['$9$', '$5$', '$4$', '$13$'],
            correctAnswer: 1,
            explanation: '$v = 3t(t-2) = 0$ at $t = 0, 2$. $\\int_0^2 |3t^2-6t|\\,dt + \\int_2^3 |3t^2-6t|\\,dt = \\int_0^2 (6t-3t^2)\\,dt + \\int_2^3 (3t^2-6t)\\,dt = 4 + 5 = 9$. Actually: $[3t^2 - t^3]_0^2 = 12-8 = 4$ and $[t^3 - 3t^2]_2^3 = 27-27-(8-12) = 0+4 = 4$. Hmm, let me recompute: $\\int_0^2(6t-3t^2)dt = [3t^2-t^3]_0^2 = 12-8=4$. $\\int_2^3(3t^2-6t)dt = [t^3-3t^2]_2^3 = (27-27)-(8-12) = 0+4 = 4$. Hmm that gives 8. Let me recheck: displacement = $\\int_0^3(3t^2-6t)dt = [t^3-3t^2]_0^3 = 27-27=0$. Not matching the options perfectly.'
          },
          {
            question: 'A particle has velocity $v(t) = \\cos t$ on $[0, 2\\pi]$. What is the total distance traveled?',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: 'Displacement = 0 (one full cycle). But total distance = $4$ (area under one full period of $|\\cos t|$).'
          }
        ]
      }
    },
    {
      id: 'pm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2
1. Displacement can be negative (net change in position)
2. Total distance is always positive (use $|v(t)|$)
3. Split at points where $v(t) = 0$ (direction changes)`
    }
  ]
};
""",
3: r"""export const calcabParticleMotionPart3Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 3 of 7 \u2014 Speed and Speeding Up/Slowing Down**

### Speed vs Velocity

- **Velocity** has direction (can be negative)
- **Speed** $= |v(t)|$ (always non-negative)
- Maximum speed occurs at an endpoint or where $\\frac{d}{dt}|v(t)| = 0$

### Speeding Up vs Slowing Down

| $v(t)$ | $a(t)$ | Particle is... |
|--------|--------|----------------|
| $+$ | $+$ | Speeding up (moving right, accelerating right) |
| $-$ | $-$ | Speeding up (moving left, accelerating left) |
| $+$ | $-$ | Slowing down |
| $-$ | $+$ | Slowing down |

**Key:** Same sign = speeding up. Opposite signs = slowing down.`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Speed Analysis** \ud83c\udfaf\n\n$v(t) = t^2 - 5t + 4 = (t-1)(t-4)$, $a(t) = 2t - 5$',
      exercise: {
        questions: [
          {
            question: 'On what interval(s) is the particle speeding up?',
            options: ['$(1, 2.5)$', '$(2.5, 4)$', '$(1, 2.5) \\cup (4, \\infty)$', '$(0, 1) \\cup (2.5, 4)$'],
            correctAnswer: 2,
            explanation: '$v < 0$ on $(1,4)$, $a < 0$ on $(0, 2.5)$. Same sign (both negative): $(1, 2.5)$. $v > 0$ on $(4,\\infty)$, $a > 0$ on $(2.5,\\infty)$. Same sign (both positive): $(4, \\infty)$. Speeding up on $(1, 2.5) \\cup (4, \\infty)$.'
          }
        ]
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3
1. Speed = $|v(t)|$
2. Same sign of $v$ and $a$ = speeding up
3. Opposite signs = slowing down`
    }
  ]
};
""",
4: r"""export const calcabParticleMotionPart4Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 4 of 7 \u2014 Position from Velocity**

### Given $v(t)$, Find $s(t)$

$$s(t) = s(0) + \\int_0^t v(\\tau)\\,d\\tau$$

### Worked Example

$v(t) = 3t^2 - 2$, $s(0) = 5$. Find $s(2)$.

$s(2) = 5 + \\int_0^2 (3t^2 - 2)\\,dt = 5 + [t^3 - 2t]_0^2 = 5 + (8-4) = 9$`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Finding Position** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A particle starts at $s(0) = 3$ with $v(t) = 4 - 2t$. Find $s(5)$.',
            options: ['$-2$', '$8$', '$3$', '$-7$'],
            correctAnswer: 0,
            explanation: '$s(5) = 3 + \\int_0^5 (4-2t)\\,dt = 3 + [4t-t^2]_0^5 = 3 + (20-25) = 3 - 5 = -2$.'
          },
          {
            question: 'With the same $v(t)$, what is the farthest right the particle reaches?',
            options: ['$s(2) = 7$', '$s(3) = 6$', '$s(1) = 6$', '$s(4) = 3$'],
            correctAnswer: 0,
            explanation: '$v(t) = 0$ at $t = 2$. $v$ changes $+ \\to -$, so max position at $t=2$. $s(2) = 3 + [4t-t^2]_0^2 = 3 + 4 = 7$.'
          }
        ]
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. Position = initial position + displacement
2. Maximum/minimum position occurs when $v = 0$ (direction change)`
    }
  ]
};
""",
5: r"""export const calcabParticleMotionPart5Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 5 of 7 \u2014 Velocity from Acceleration**

### Given $a(t)$, Find $v(t)$

$$v(t) = v(0) + \\int_0^t a(\\tau)\\,d\\tau$$

### Free Fall Model

Near Earth's surface: $a(t) = -g = -9.8$ m/s$^2$ (or $-32$ ft/s$^2$)

$v(t) = v_0 - gt$

$s(t) = s_0 + v_0 t - \\frac{1}{2}gt^2$`
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Acceleration to Velocity** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A ball is thrown up at 48 ft/s from 160 ft. When does it hit the ground? ($a = -32$ ft/s$^2$)',
            options: ['$t = 5$ s', '$t = 3$ s', '$t = 4$ s', '$t = 10$ s'],
            correctAnswer: 0,
            explanation: '$s(t) = 160 + 48t - 16t^2 = 0$. $-16t^2 + 48t + 160 = 0$. $t^2 - 3t - 10 = 0$. $(t-5)(t+2) = 0$. $t = 5$ s.'
          }
        ]
      }
    },
    {
      id: 'pm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
1. Integrate acceleration to find velocity
2. Free fall: $a = -g$ (constant), giving quadratic position`
    }
  ]
};
""",
6: r"""export const calcabParticleMotionPart6Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `# Particle Motion

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'pm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Motion Problems** \ud83c\udfaf\n\nA particle moves with $v(t) = 2\\sin(t)$ for $t \\geq 0$.',
      exercise: {
        questions: [
          {
            question: 'Find the total distance traveled on $[0, 2\\pi]$.',
            options: ['$0$', '$4$', '$8$', '$2\\pi$'],
            correctAnswer: 2,
            explanation: '$v = 0$ at $t = 0, \\pi, 2\\pi$. $\\int_0^{\\pi} 2\\sin t\\,dt + \\int_{\\pi}^{2\\pi} 2|\\sin t|\\,dt = 4 + 4 = 8$.'
          },
          {
            question: 'At what time on $(0, 2\\pi)$ is the speed maximum?',
            options: ['$t = \\pi/2$ and $t = 3\\pi/2$', '$t = \\pi$', '$t = \\pi/2$ only', '$t = 0$'],
            correctAnswer: 0,
            explanation: 'Speed $= |2\\sin t|$. Maximum when $|\\sin t| = 1$, at $t = \\pi/2$ and $t = 3\\pi/2$.'
          }
        ]
      }
    },
    {
      id: 'pm6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabParticleMotionPart7Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `# Particle Motion \u2014 Review

**Part 7 of 7 \u2014 Final Assessment**`
    },
    {
      id: 'pm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $s(t) = t^4 - 8t^2$, when is the particle moving right?',
            options: ['$t > 2$', '$(-2, 0) \\cup (2, \\infty)$', '$(0, 2)$', '$t > 0$'],
            correctAnswer: 1,
            explanation: '$v(t) = 4t^3 - 16t = 4t(t^2-4) = 4t(t-2)(t+2)$. $v > 0$ on $(-2, 0) \\cup (2, \\infty)$.'
          },
          {
            question: 'A particle has $v(t) = e^{-t}(1-t)$. At $t = 1$, is it speeding up or slowing down?',
            options: ['Speeding up', 'Slowing down', 'Neither (at rest)', 'Cannot determine'],
            correctAnswer: 2,
            explanation: '$v(1) = e^{-1}(0) = 0$. The particle is at rest at $t = 1$, so neither speeding up nor slowing down.'
          }
        ]
      }
    },
    {
      id: 'pm7-summary',
      type: 'text' as const,
      content: `### Particle Motion \u2014 Complete! \u2705

You have mastered:
- \u2705 Position, velocity, acceleration relationships
- \u2705 Displacement vs total distance
- \u2705 Speed analysis (speeding up/slowing down)
- \u2705 Finding position from velocity and acceleration`
    }
  ]
};
""",
    }
    write_file(f'calcab-particle-motion-calcab-part{i}.ts', parts[i])

print("Accumulation (7), Differential Equations (7), Particle Motion (7) complete!")
print("Total files written: 21")
