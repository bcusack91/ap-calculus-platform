#!/usr/bin/env python3
"""Generate SAT Batch 2: Functions & Graphs (7), Ratios & Proportions (7), Exponential Functions (7), Data & Statistics (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

def gen_functions():
    parts = {}
    parts[1] = r"""export const satFunctionsPart1Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn1-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 1 of 7 — Function Notation & Evaluation**

### What is a Function?

A function $f$ assigns exactly one output to each input. Written as $f(x) = \\text{expression}$.

- $f(3)$ means "plug in $x = 3$"
- $f(a + 1)$ means "replace every $x$ with $(a + 1)$"

**Example:** If $f(x) = 2x^2 - 3x + 1$:

$f(4) = 2(16) - 12 + 1 = 21$

$f(-1) = 2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$

### Domain & Range

- **Domain**: all valid input values (check for division by zero, square roots of negatives)
- **Range**: all possible output values

### SAT Function Notation Tricks

$f(x) = 3$ asks: "For what value(s) of $x$ does the output equal 3?" This means solving $f(x) = 3$, NOT evaluating $f(3)$.

On a graph: find where $y = 3$ intersects the curve.`
    },
    {
      id: 'fn1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Function Evaluation** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 2x + 3$, what is $f(-2)$?',
            options: ['$11$', '$3$', '$7$', '$-1$'],
            correctAnswer: 0,
            explanation: '$f(-2) = (-2)^2 - 2(-2) + 3 = 4 + 4 + 3 = 11$. Careful with signs: $-2(-2) = +4$.'
          },
          {
            question: 'If $g(x) = 3x + 5$ and $g(a) = 20$, what is $a$?',
            options: ['$5$', '$15$', '$65$', '$20/3$'],
            correctAnswer: 0,
            explanation: '$3a + 5 = 20$ → $3a = 15$ → $a = 5$. When given $g(a) = k$, set the function equal to $k$ and solve.'
          },
          {
            question: 'What is the domain of $f(x) = \\frac{1}{x - 4}$?',
            options: ['All real numbers except $x = 4$', 'All real numbers except $x = -4$', 'All real numbers', '$x > 4$'],
            correctAnswer: 0,
            explanation: 'The denominator cannot be zero: $x - 4 \\neq 0$ → $x \\neq 4$.'
          }
        ]
      }
    },
    {
      id: 'fn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $f(a)$ = substitute $a$ for every $x$ in the function
- "$f(x) = k$" means **solve** for $x$, not evaluate at $k$
- Domain restrictions: denominators ≠ 0, expressions under even roots ≥ 0
- On graphs: $f(a) = b$ means the point $(a, b)$ is on the curve`
    }
  ]
};
"""

    parts[2] = r"""export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn2-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 2 of 7 — Composite and Inverse Functions**

### Composition: $f(g(x))$

"Evaluate inside out" — first compute $g(x)$, then plug the result into $f$.

**Example:** $f(x) = x^2$ and $g(x) = x + 3$

$f(g(2)) = f(5) = 25$

$g(f(2)) = g(4) = 7$ — order matters!

### Inverse Functions: $f^{-1}(x)$

If $f(a) = b$, then $f^{-1}(b) = a$. Inverses "undo" each function.

**To find $f^{-1}(x)$:**
1. Replace $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve for $y$

**Example:** $f(x) = 2x + 3$
- $y = 2x + 3$
- Swap: $x = 2y + 3$
- Solve: $y = (x - 3)/2$
- $f^{-1}(x) = \\frac{x - 3}{2}$

### Graph of Inverse

The graph of $f^{-1}$ is the **reflection** of $f$ across the line $y = x$.`
    },
    {
      id: 'fn2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Composition & Inverses** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 3x - 1$ and $g(x) = x^2$, what is $f(g(3))$?',
            options: ['$26$', '$64$', '$8$', '$24$'],
            correctAnswer: 0,
            explanation: 'Inside out: $g(3) = 9$, then $f(9) = 3(9) - 1 = 26$.'
          },
          {
            question: 'What is $f^{-1}(x)$ if $f(x) = 4x - 8$?',
            options: ['$\\frac{x + 8}{4}$', '$\\frac{x - 8}{4}$', '$4x + 8$', '$\\frac{1}{4x - 8}$'],
            correctAnswer: 0,
            explanation: '$y = 4x - 8$ → swap: $x = 4y - 8$ → $4y = x + 8$ → $y = (x+8)/4$.'
          },
          {
            question: 'If $f(5) = 12$, then $f^{-1}(12) = $',
            options: ['$5$', '$12$', '$1/12$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'By definition of inverse: if $f(5) = 12$, then $f^{-1}(12) = 5$. The inverse swaps input and output.'
          }
        ]
      }
    },
    {
      id: 'fn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Composition: evaluate inside out — $f(g(x))$ ≠ $g(f(x))$ in general
- Inverse: swap $x$ and $y$, then solve for $y$
- If $f(a) = b$, then $f^{-1}(b) = a$
- The graph of $f^{-1}$ is the reflection of $f$ over $y = x$`
    }
  ]
};
"""

    parts[3] = r"""export const satFunctionsPart3Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn3-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 3 of 7 — Transformations of Functions**

### Vertical Transformations (Outside the function)

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Shift up $k$ | $f(x) + k$ | Graph moves up $k$ units |
| Shift down $k$ | $f(x) - k$ | Graph moves down $k$ units |
| Stretch by $a$ (if $a > 1$) | $af(x)$ | Graph gets taller |
| Compress by $a$ (if $0 < a < 1$) | $af(x)$ | Graph gets shorter |
| Reflect over x-axis | $-f(x)$ | Flip upside down |

### Horizontal Transformations (Inside the function)

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Shift right $h$ | $f(x - h)$ | Graph moves right |
| Shift left $h$ | $f(x + h)$ | Graph moves left |
| Stretch by $1/b$ | $f(bx)$ | Graph gets wider |
| Compress by $b$ | $f(bx)$ | Graph gets narrower |
| Reflect over y-axis | $f(-x)$ | Flip left-right |

### Key Insight ⚠️

Horizontal transformations are **opposite** to what you might expect:
- $f(x - 3)$ moves the graph **right**, not left
- $f(2x)$ makes the graph **narrower**, not wider`
    },
    {
      id: 'fn3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Transformations** 🎯',
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ is shifted 2 units left and 3 units up. The new equation is:',
            options: ['$y = f(x + 2) + 3$', '$y = f(x - 2) + 3$', '$y = f(x + 2) - 3$', '$y = f(x - 3) + 2$'],
            correctAnswer: 0,
            explanation: 'Left 2: replace $x$ with $x + 2$ → $f(x+2)$. Up 3: add 3 → $f(x+2) + 3$.'
          },
          {
            question: 'If $f(x) = x^2$ and $g(x) = -(x-1)^2 + 4$, how is $g$ obtained from $f$?',
            options: ['Shift right 1, reflect over x-axis, shift up 4', 'Shift left 1, reflect over x-axis, shift up 4', 'Shift right 1, shift up 4, reflect over x-axis', 'Reflect over y-axis, shift right 1, shift up 4'],
            correctAnswer: 0,
            explanation: '$g(x) = -f(x-1) + 4$: $(x-1)$ shifts right 1, the negative reflects over x-axis, $+4$ shifts up 4.'
          },
          {
            question: 'The vertex of $y = x^2$ is at $(0,0)$. Where is the vertex of $y = 3(x+2)^2 - 5$?',
            options: ['$(-2, -5)$', '$(2, -5)$', '$(-2, 5)$', '$(2, 5)$'],
            correctAnswer: 0,
            explanation: '$(x+2)$ shifts left 2, $-5$ shifts down 5. The vertex moves from $(0,0)$ to $(-2, -5)$. The factor of 3 stretches vertically but doesn\'t move the vertex.'
          }
        ]
      }
    },
    {
      id: 'fn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Outside** the function ($+k$, $\\times a$, $-$): vertical changes, work as expected
- **Inside** the function ($x - h$, $bx$, $-x$): horizontal changes, opposite direction
- $f(x - h) + k$: shifts right $h$ and up $k$
- Vertical stretches don't move the vertex; they affect the shape`
    }
  ]
};
"""

    parts[4] = r"""export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn4-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 4 of 7 — Piecewise & Absolute Value Functions**

### Piecewise Functions

A function defined by different rules for different parts of its domain:

$$f(x) = \\begin{cases} x + 3 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

$f(-2) = -2 + 3 = 1$ (use first rule since $-2 < 0$)

$f(3) = 9$ (use second rule since $3 \\geq 0$)

### Absolute Value as Piecewise

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

### Graphing $y = a|x - h| + k$

- V-shaped graph with vertex at $(h, k)$
- Opens up if $a > 0$, opens down if $a < 0$
- Slope of right branch is $a$, left branch is $-a$

### SAT Graph Reading

When the SAT shows a piecewise graph, read each segment separately. Check:
- What's the y-value at specific x-values?
- Are the endpoints open circles (excluded) or closed circles (included)?`
    },
    {
      id: 'fn4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Piecewise Functions** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = |x - 3| + 2$, what is $f(1)$?',
            options: ['$4$', '$2$', '$0$', '$6$'],
            correctAnswer: 0,
            explanation: '$f(1) = |1 - 3| + 2 = |-2| + 2 = 2 + 2 = 4$.'
          },
          {
            question: 'For $g(x) = \\begin{cases} 2x + 1 & x < 3 \\\\ x^2 - 2 & x \\geq 3 \\end{cases}$, what is $g(3)$?',
            options: ['$7$', '$6$', '$9$', '$5$'],
            correctAnswer: 0,
            explanation: 'Since $3 \\geq 3$, use the second rule: $g(3) = 3^2 - 2 = 7$.'
          },
          {
            question: 'The graph of $y = -|x + 1| + 5$ has its vertex at:',
            options: ['$(-1, 5)$', '$(1, 5)$', '$(-1, -5)$', '$(1, -5)$'],
            correctAnswer: 0,
            explanation: 'Form $y = a|x - h| + k$: here $h = -1$, $k = 5$, $a = -1$. Vertex at $(-1, 5)$, opening downward.'
          }
        ]
      }
    },
    {
      id: 'fn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Piecewise functions: check which condition $x$ satisfies, then use that rule
- Absolute value makes a V-shape with vertex at $(h, k)$
- Open circle = point not included; closed circle = point included
- Check boundary values carefully — which piece applies at the boundary?`
    }
  ]
};
"""

    parts[5] = r"""export const satFunctionsPart5Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn5-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 5 of 7 — Graph Analysis & Interpretation**

### Increasing vs. Decreasing

- **Increasing**: as $x$ moves right, $y$ goes up
- **Decreasing**: as $x$ moves right, $y$ goes down
- **Constant**: horizontal line segment

### Maximum and Minimum Values

- **Absolute max/min**: the highest/lowest y-value on the entire graph
- **Relative (local) max/min**: higher/lower than nearby points

On the SAT, these appear as:
- "Over which interval is $f$ increasing?"
- "At what value of $x$ does $f$ attain its maximum?"
- "What is the maximum value of $f$?" (asking for the y-coordinate)

### Rate of Change

Average rate of change from $x = a$ to $x = b$:

$$\\text{Rate} = \\frac{f(b) - f(a)}{b - a}$$

This is just the slope of the **secant line** between two points.

### Intercepts

- **x-intercepts**: where $f(x) = 0$ (solve or read from graph)
- **y-intercept**: evaluate $f(0)$ (or read where graph crosses y-axis)`
    },
    {
      id: 'fn5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(2) = 5$ and $f(6) = 13$, what is the average rate of change of $f$ from $x = 2$ to $x = 6$?',
            options: ['$2$', '$4$', '$8$', '$1.5$'],
            correctAnswer: 0,
            explanation: 'Average rate = $(13 - 5)/(6 - 2) = 8/4 = 2$. Just like slope!'
          },
          {
            question: 'A function $f$ has values: $f(1) = 3$, $f(2) = 7$, $f(3) = 5$, $f(4) = 1$. Over which interval is $f$ decreasing?',
            options: ['From $x = 2$ to $x = 4$', 'From $x = 1$ to $x = 3$', 'From $x = 3$ to $x = 4$ only', 'From $x = 1$ to $x = 2$'],
            correctAnswer: 0,
            explanation: '$f$ goes $7 → 5 → 1$ from $x = 2$ to $x = 4$, so it is decreasing on this interval.'
          },
          {
            question: 'If the graph of $y = f(x)$ passes through $(0, -3)$ and $(4, 0)$, which statement is true?',
            options: ['The y-intercept is $-3$ and $x = 4$ is an x-intercept', 'The y-intercept is $4$ and $x = -3$ is an x-intercept', 'The function value at $x = 4$ is $-3$', 'The average rate of change is $-3/4$'],
            correctAnswer: 0,
            explanation: '$(0, -3)$ means $f(0) = -3$, so y-intercept is $-3$. $(4, 0)$ means $f(4) = 0$, so $x = 4$ is an x-intercept.'
          }
        ]
      }
    },
    {
      id: 'fn5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Increasing/decreasing: determined by the direction of the y-values as x increases
- Average rate of change $= \\frac{f(b) - f(a)}{b - a}$ = slope of secant line
- x-intercepts: $f(x) = 0$; y-intercept: $f(0)$
- "Maximum value of $f$" = the y-coordinate, not the x-coordinate`
    }
  ]
};
"""

    parts[6] = r"""export const satFunctionsPart6Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn6-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 6 of 7 — Even/Odd Functions and Symmetry**

### Even Functions: $f(-x) = f(x)$

- Symmetric about the **y-axis**
- Examples: $x^2$, $|x|$, $\\cos(x)$
- If $(3, 5)$ is on the graph, then $(-3, 5)$ is too

### Odd Functions: $f(-x) = -f(x)$

- Symmetric about the **origin** (180° rotation)
- Examples: $x^3$, $x$, $\\sin(x)$
- If $(3, 5)$ is on the graph, then $(-3, -5)$ is too

### Testing Algebraically

For $f(x) = x^4 - 3x^2$:
$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x)$ → **even**

For $g(x) = x^3 + x$:
$g(-x) = -x^3 - x = -(x^3 + x) = -g(x)$ → **odd**

### Neither Even nor Odd

$h(x) = x^2 + x$: $h(-x) = x^2 - x \\neq h(x)$ and $\\neq -h(x)$ → **neither**

### SAT Connection

Symmetry questions often appear as: "If the graph of $f$ is symmetric about the y-axis and $f(3) = 7$, what is $f(-3)$?" Answer: $f(-3) = 7$.`
    },
    {
      id: 'fn6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Symmetry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which function is odd?',
            options: ['$f(x) = x^3 - x$', '$f(x) = x^2 + 1$', '$f(x) = |x|$', '$f(x) = x^4$'],
            correctAnswer: 0,
            explanation: '$f(-x) = -x^3 + x = -(x^3 - x) = -f(x)$ → odd. The others are all even.'
          },
          {
            question: 'If $f$ is an even function and $f(2) = -5$, what is $f(-2) + f(2)$?',
            options: ['$-10$', '$0$', '$10$', '$-5$'],
            correctAnswer: 0,
            explanation: 'Even: $f(-2) = f(2) = -5$. So $f(-2) + f(2) = -5 + (-5) = -10$.'
          },
          {
            question: 'If $g$ is an odd function and $g(4) = 3$, what is $g(-4)$?',
            options: ['$-3$', '$3$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Odd: $g(-4) = -g(4) = -3$.'
          }
        ]
      }
    },
    {
      id: 'fn6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- **Even**: $f(-x) = f(x)$ → symmetric about y-axis
- **Odd**: $f(-x) = -f(x)$ → symmetric about origin
- Not all functions are even or odd — most are neither
- To test: substitute $-x$ and compare to $f(x)$ and $-f(x)$`
    }
  ]
};
"""

    parts[7] = r"""export const satFunctionsPart7Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn7-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 7 of 7 — Review & SAT-Level Mixed Practice**

### Functions Cheat Sheet

| Concept | Key Idea |
|---------|----------|
| $f(a)$ | Substitute $a$ into the function |
| $f(x) = k$ | Solve for $x$ (or find where $y = k$ on graph) |
| $f(g(x))$ | Evaluate inside out |
| $f^{-1}(x)$ | Swap $x/y$, solve for $y$ |
| Domain | All valid inputs |
| Range | All possible outputs |
| Increasing | $f$ goes up as $x$ moves right |
| Even | $f(-x) = f(x)$, y-axis symmetry |
| Odd | $f(-x) = -f(x)$, origin symmetry |

### SAT Strategies for Function Questions

1. **Use the answer choices** — if asked for a function and given formulas, test with a value
2. **Read graphs carefully** — pay attention to open vs. closed circles
3. **Don't confuse $f(a) = b$ with $f(b) = a$** — this is the inverse trap
4. **For word problems**: identify what variable is the input and what is the output`
    },
    {
      id: 'fn7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + 1$ and $g(x) = f(f(x))$, what is $g(3)$?',
            options: ['$15$', '$13$', '$9$', '$7$'],
            correctAnswer: 0,
            explanation: '$f(3) = 7$. Then $g(3) = f(f(3)) = f(7) = 2(7) + 1 = 15$.'
          },
          {
            question: 'The function $h(x) = 3|x - 2| - 6$ has its minimum value at:',
            options: ['$-6$', '$2$', '$0$', '$-2$'],
            correctAnswer: 0,
            explanation: 'The vertex of $y = a|x-h| + k$ is at $(h, k)$. Here, vertex is $(2, -6)$. Since $a = 3 > 0$, the function opens up and the minimum value is $-6$.'
          },
          {
            question: 'If $f(x) = \\frac{2x + 3}{x - 1}$, which value is NOT in the domain of $f$?',
            options: ['$1$', '$-3/2$', '$0$', '$-1$'],
            correctAnswer: 0,
            explanation: 'The denominator $x - 1 = 0$ when $x = 1$. So $x = 1$ is not in the domain.'
          }
        ]
      }
    },
    {
      id: 'fn7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Master function notation: $f(x)$ is the output for input $x$
- Composition: always evaluate innermost function first
- Transformations: inside = horizontal (opposite direction), outside = vertical (same direction)
- Domain restrictions come from denominators = 0 and even roots of negatives
- On the SAT, graph reading and function notation are equally important`
    }
  ]
};
"""

    for i in range(1,8):
        write_file(f'sat-sat-functions-graphs-sat-part{i}.ts', parts[i])


def gen_ratios():
    parts = {}
    parts[1] = r"""export const satRatiosPart1Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp1-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 1 of 7 — Ratios and Rates**

### Ratios

A ratio compares two quantities: $a : b$ or $\\frac{a}{b}$.

If the ratio of boys to girls is $3:5$ and there are 40 students total:
- Total parts = $3 + 5 = 8$
- Boys = $(3/8)(40) = 15$
- Girls = $(5/8)(40) = 25$

### Rates

A rate is a ratio with units: miles/hour, dollars/item, people/year.

**Unit Rate** = rate per one unit. "\\$7.50 for 3 pounds" → \\$2.50 per pound.

### Proportions

$$\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc \\quad \\text{(cross multiply)}$$

**Example:** If 3 widgets cost \\$14, how much do 7 widgets cost?

$$\\frac{3}{14} = \\frac{7}{x} \\implies 3x = 98 \\implies x = \\frac{98}{3} \\approx \\$32.67$$`
    },
    {
      id: 'rp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Ratios & Rates** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a class, the ratio of students who passed to failed is $7:3$. If 50 students took the test, how many passed?',
            options: ['$35$', '$30$', '$15$', '$40$'],
            correctAnswer: 0,
            explanation: 'Total parts = $7 + 3 = 10$. Passed $= (7/10)(50) = 35$.'
          },
          {
            question: 'A car travels 225 miles on 9 gallons of gas. How many miles per gallon?',
            options: ['$25$', '$20$', '$30$', '$22.5$'],
            correctAnswer: 0,
            explanation: 'Unit rate: $225 ÷ 9 = 25$ miles per gallon.'
          },
          {
            question: 'If $\\frac{x}{12} = \\frac{5}{4}$, what is $x$?',
            options: ['$15$', '$3$', '$20$', '$9.6$'],
            correctAnswer: 0,
            explanation: 'Cross multiply: $4x = 60$ → $x = 15$.'
          }
        ]
      }
    },
    {
      id: 'rp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Ratio $a:b$ means the total has $a + b$ parts
- Unit rate: divide to find the "per one" rate
- Cross multiplication: $a/b = c/d$ → $ad = bc$
- Set up proportions with matching units: miles/hours = miles/hours`
    }
  ]
};
"""

    parts[2] = r"""export const satRatiosPart2Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp2-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 2 of 7 — Percentages**

### Percent Basics

$p\\%$ means $\\frac{p}{100}$.

- "What is 15% of 80?" → $0.15 \\times 80 = 12$
- "12 is what percent of 80?" → $\\frac{12}{80} = 0.15 = 15\\%$
- "12 is 15% of what?" → $12 = 0.15x$ → $x = 80$

### Percent Change

$$\\text{Percent change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$$

**Example:** Price goes from \\$40 to \\$52:
$\\frac{52 - 40}{40} \\times 100 = 30\\%$ increase

### Multiplier Method (Faster!)

- Increase of $p\\%$: multiply by $1 + p/100$
- Decrease of $p\\%$: multiply by $1 - p/100$

20% increase on \\$80: $80 \\times 1.20 = \\$96$

15% discount on \\$200: $200 \\times 0.85 = \\$170$

### Successive Percent Changes ⚠️

A 20% increase followed by a 20% decrease is NOT back to the original!

$100 \\times 1.20 = 120$, then $120 \\times 0.80 = 96$ — that's a 4% net decrease.`
    },
    {
      id: 'rp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Percentages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A shirt originally costs \\$60 and is on sale for 25% off. What is the sale price?',
            options: ['\\$45', '\\$40', '\\$35', '\\$50'],
            correctAnswer: 0,
            explanation: 'Sale price = $60 \\times 0.75 = \\$45$. Or: discount = $60 \\times 0.25 = 15$, so $60 - 15 = 45$.'
          },
          {
            question: 'A stock increases 50% then decreases 50%. If the initial value was \\$100, the final value is:',
            options: ['\\$75', '\\$100', '\\$50', '\\$125'],
            correctAnswer: 0,
            explanation: '$100 \\times 1.50 = 150$, then $150 \\times 0.50 = 75$. This is a 25% net decrease — NOT back to \\$100!'
          },
          {
            question: 'The population of a town grew from 8,000 to 10,000. The percent increase is:',
            options: ['$25\\%$', '$20\\%$', '$80\\%$', '$2\\%$'],
            correctAnswer: 0,
            explanation: 'Change $= 10{,}000 - 8{,}000 = 2{,}000$. Percent $= 2000/8000 \\times 100 = 25\\%$. Always divide by the original.'
          }
        ]
      }
    },
    {
      id: 'rp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Percent change: divide the change by the **original** (not the new) value
- Multiplier method is fastest: increase → multiply by $(1 + r)$, decrease → $(1 - r)$
- Successive percent changes: multiply the multipliers together
- A% increase then A% decrease ≠ original (common SAT trap)`
    }
  ]
};
"""

    # Parts 3-7 abbreviated but still rich content
    parts[3] = r"""export const satRatiosPart3Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp3-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 3 of 7 — Direct and Inverse Variation**

### Direct Variation: $y = kx$

"$y$ is directly proportional to $x$" means as $x$ doubles, $y$ doubles.

Constant of proportionality: $k = y/x$

**Example:** If $y = 12$ when $x = 4$, then $k = 3$ and $y = 3x$.

### Inverse Variation: $y = k/x$

"$y$ is inversely proportional to $x$" means as $x$ doubles, $y$ halves.

Product is constant: $xy = k$

**Example:** If $y = 6$ when $x = 8$, then $k = 48$ and $y = 48/x$.

When $x = 12$: $y = 48/12 = 4$

### Joint Variation

"$z$ varies directly with $x$ and inversely with $y$": $z = kx/y$

### SAT Application

Speed and time for a fixed distance: $d = rt$, so $t = d/r$ — time is inversely proportional to rate.

If you double your speed, the trip takes half the time.`
    },
    {
      id: 'rp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Variation** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y$ varies directly with $x$ and $y = 15$ when $x = 5$, what is $y$ when $x = 8$?',
            options: ['$24$', '$18$', '$40$', '$3$'],
            correctAnswer: 0,
            explanation: '$k = 15/5 = 3$. So $y = 3x$. When $x = 8$: $y = 24$.'
          },
          {
            question: 'If $y$ varies inversely with $x$ and $y = 10$ when $x = 3$, what is $y$ when $x = 6$?',
            options: ['$5$', '$20$', '$15$', '$2$'],
            correctAnswer: 0,
            explanation: '$k = xy = 30$. When $x = 6$: $y = 30/6 = 5$. As $x$ doubled, $y$ halved.'
          },
          {
            question: 'A trip of 300 miles takes 5 hours at a constant speed. At what speed would the same trip take 4 hours?',
            options: ['$75$ mph', '$60$ mph', '$80$ mph', '$100$ mph'],
            correctAnswer: 0,
            explanation: '$d = rt$: $300 = r \\times 4$ → $r = 75$ mph. (Original speed was $60$ mph — to go faster means higher speed.)'
          }
        ]
      }
    },
    {
      id: 'rp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Direct: $y = kx$ (ratio is constant: $y/x = k$)
- Inverse: $y = k/x$ (product is constant: $xy = k$)
- "Proportional" on SAT usually means direct variation ($y = kx$)
- Check with a known pair to find $k$, then use $k$ for the new scenario`
    }
  ]
};
"""

    parts[4] = r"""export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp4-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 4 of 7 — Unit Conversions**

### Dimensional Analysis

Convert units by multiplying by fractions equal to 1:

"Convert 30 mph to feet per second"

$$30 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{5,280 \\text{ feet}}{1 \\text{ mile}} \\times \\frac{1 \\text{ hour}}{3,600 \\text{ seconds}} = 44 \\text{ ft/s}$$

### Common Conversions (SAT-relevant)

| Given | Conversion |
|-------|-----------|
| 1 mile | 5,280 feet |
| 1 kilometer | 1,000 meters |
| 1 hour | 60 minutes = 3,600 seconds |
| 1 gallon | 4 quarts |
| 1 pound | 16 ounces |

### SAT Unit Conversion Strategy

1. Write the starting quantity as a fraction
2. Multiply by conversion factors so unwanted units cancel
3. Compute the result

The SAT provides conversion factors in the problem — you don't need to memorize them. Focus on the METHOD of canceling units.`
    },
    {
      id: 'rp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Unit Conversions** 🎯',
      exercise: {
        questions: [
          {
            question: 'A faucet drips 3 gallons per hour. How many quarts per minute is this? (1 gallon = 4 quarts)',
            options: ['$0.2$ quarts/min', '$12$ quarts/min', '$0.75$ quarts/min', '$1$ quart/min'],
            correctAnswer: 0,
            explanation: '$3$ gal/hr $\\times$ $4$ qt/gal $\\times$ $1$ hr/$60$ min $= 12/60 = 0.2$ quarts per minute.'
          },
          {
            question: 'A car travels at 90 km/h. What is its speed in m/s? (1 km = 1000 m)',
            options: ['$25$ m/s', '$15$ m/s', '$50$ m/s', '$90$ m/s'],
            correctAnswer: 0,
            explanation: '$90$ km/h $\\times 1000$ m/km $\\times 1$ hr/$3600$ s $= 90000/3600 = 25$ m/s.'
          },
          {
            question: 'If fabric costs \\$8 per yard, what is the cost per foot? (1 yard = 3 feet)',
            options: ['\\$2.67', '\\$3', '\\$24', '\\$8'],
            correctAnswer: 0,
            explanation: '$\\$8$/yd $\\times$ $1$ yd/$3$ ft $= \\$8/3 ≈ \\$2.67$ per foot.'
          }
        ]
      }
    },
    {
      id: 'rp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Dimensional analysis: multiply by fractions equal to 1, cancel units
- Set up so unwanted units appear in numerator AND denominator (they cancel)
- The SAT will give you all needed conversion factors — focus on the method
- Write units at every step to avoid errors`
    }
  ]
};
"""

    parts[5] = r"""export const satRatiosPart5Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp5-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 5 of 7 — Scale Factors and Similar Figures**

### Scale Factor

If two figures are similar with a scale factor of $k$:
- **Lengths** scale by $k$
- **Areas** scale by $k^2$
- **Volumes** scale by $k^3$

### Similar Triangles

Two triangles are similar if they have the same angles (AA similarity).

If triangle $A$ has sides 3, 4, 5 and triangle $B$ has a side of 6 corresponding to 3:
- Scale factor $k = 6/3 = 2$
- Other sides of $B$: $4 \\times 2 = 8$ and $5 \\times 2 = 10$
- Area of $B$ = Area of $A \\times k^2 = A_{\\text{area}} \\times 4$

### Map/Model Problems

"On a map, 1 inch = 25 miles. Two cities are 3.5 inches apart."

Distance $= 3.5 \\times 25 = 87.5$ miles.

### SAT Application

Scale factors appear in:
- Similar triangle problems
- Map and blueprint questions
- Geometry problems with dilations`
    },
    {
      id: 'rp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scale Factors** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two similar rectangles have lengths 4 cm and 12 cm. If the area of the smaller is 20 cm², what is the area of the larger?',
            options: ['$180$ cm²', '$60$ cm²', '$240$ cm²', '$80$ cm²'],
            correctAnswer: 0,
            explanation: 'Scale factor $k = 12/4 = 3$. Area scales by $k^2 = 9$. Larger area $= 20 \\times 9 = 180$ cm².'
          },
          {
            question: 'On a scale model, 2 cm represents 5 meters. If the model building is 14 cm tall, how tall is the actual building?',
            options: ['$35$ meters', '$28$ meters', '$5.6$ meters', '$56$ meters'],
            correctAnswer: 0,
            explanation: '$14 \\times (5/2) = 35$ meters.'
          },
          {
            question: 'Two similar cones have radii 3 and 9. The ratio of their volumes is:',
            options: ['$1 : 27$', '$1 : 9$', '$1 : 3$', '$1 : 81$'],
            correctAnswer: 0,
            explanation: 'Scale factor $k = 9/3 = 3$. Volume ratio $= k^3 = 27$. So $1:27$.'
          }
        ]
      }
    },
    {
      id: 'rp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Lengths → $k$, Areas → $k^2$, Volumes → $k^3$
- Find the scale factor by comparing corresponding lengths
- Map/model problems: set up a proportion with the scale
- This length/area/volume relationship is a frequent SAT topic`
    }
  ]
};
"""

    parts[6] = r"""export const satRatiosPart6Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp6-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 6 of 7 — Mixture and Work Problems**

### Mixture Problems

"How many liters of 60% acid solution must be mixed with 10 liters of 20% acid to get a 40% solution?"

Let $x$ = liters of 60% solution:

$$0.60x + 0.20(10) = 0.40(x + 10)$$
$$0.60x + 2 = 0.40x + 4$$
$$0.20x = 2$$
$$x = 10 \\text{ liters}$$

### Work/Rate Problems

"Pipe A fills a tank in 6 hours, Pipe B in 4 hours. Together?"

- Rate A: $1/6$ tank/hour
- Rate B: $1/4$ tank/hour
- Combined: $1/6 + 1/4 = 2/12 + 3/12 = 5/12$ tank/hour
- Time: $12/5 = 2.4$ hours

### SAT Strategy for Rate Problems

$$\\text{Rate} \\times \\text{Time} = \\text{Work}$$

Add rates when working together. The combined rate is always faster than either individual rate.`
    },
    {
      id: 'rp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixtures & Work** 🎯',
      exercise: {
        questions: [
          {
            question: 'Worker A can paint a house in 12 hours and Worker B can paint it in 8 hours. Working together, how many hours will it take?',
            options: ['$4.8$ hours', '$10$ hours', '$6$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: 'Combined rate = $1/12 + 1/8 = 2/24 + 3/24 = 5/24$. Time = $24/5 = 4.8$ hours.'
          },
          {
            question: 'How many mL of pure water must be added to 200 mL of 30% salt solution to make a 20% solution?',
            options: ['$100$ mL', '$50$ mL', '$200$ mL', '$150$ mL'],
            correctAnswer: 0,
            explanation: 'Salt stays the same: $0.30(200) = 60$ mL. New total: $x + 200$. $60/(x + 200) = 0.20$ → $60 = 0.20x + 40$ → $x = 100$ mL.'
          },
          {
            question: 'A printer prints 40 pages per minute. A faster printer does 60 pages per minute. Together, how long to print 500 pages?',
            options: ['$5$ minutes', '$8$ minutes', '$10$ minutes', '$3$ minutes'],
            correctAnswer: 0,
            explanation: 'Combined rate: $40 + 60 = 100$ pages/min. Time = $500/100 = 5$ minutes.'
          }
        ]
      }
    },
    {
      id: 'rp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Mixtures: set up equation where (amount of substance) is equal on both sides
- Work problems: add the **rates** (not the times), then find time from combined rate
- Rate × Time = Work (or Amount)
- For work problems: find individual rates, add them, then use $time = work/rate$`
    }
  ]
};
"""

    parts[7] = r"""export const satRatiosPart7Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp7-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 7 of 7 — Review & SAT Mixed Practice**

### Quick Reference

| Topic | Key Formula |
|-------|------------|
| Ratio $a:b$, total $T$ | Part $= \\frac{a}{a+b} \\times T$ |
| Proportion | $\\frac{a}{b} = \\frac{c}{d}$ → cross multiply |
| Percent of | $= \\frac{\\text{part}}{\\text{whole}} \\times 100$ |
| Percent change | $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ |
| Direct variation | $y = kx$ |
| Inverse variation | $xy = k$ |
| Scale: length | $\\times k$ |
| Scale: area | $\\times k^2$ |
| Scale: volume | $\\times k^3$ |

### Common SAT Mistakes

1. Dividing percent change by the **new** value instead of the **old**
2. Assuming successive percent increases/decreases cancel out
3. Adding times instead of rates in work problems
4. Forgetting that the ratio $a:b$ has $a + b$ total parts, not $a \\times b$`
    },
    {
      id: 'rp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A recipe uses flour and sugar in a 5:2 ratio. If you need 28 cups total, how many cups of flour?',
            options: ['$20$', '$10$', '$14$', '$22$'],
            correctAnswer: 0,
            explanation: 'Total parts: $5 + 2 = 7$. Flour $= (5/7)(28) = 20$ cups.'
          },
          {
            question: 'An item costs \\$80 after a 20% discount. What was the original price?',
            options: ['\\$100', '\\$96', '\\$64', '\\$104'],
            correctAnswer: 0,
            explanation: 'After 20% discount: $0.80 \\times \\text{original} = 80$ → original $= 80/0.80 = \\$100$. Don\'t just add 20% to \\$80 (that gives \\$96, which is wrong).'
          },
          {
            question: 'If it takes 4 workers 6 days to build a wall, how many days would 8 workers take (same pace)?',
            options: ['$3$', '$12$', '$2$', '$4$'],
            correctAnswer: 0,
            explanation: 'Total work = $4 \\times 6 = 24$ worker-days. With 8 workers: $24/8 = 3$ days. Workers and time are inversely proportional.'
          }
        ]
      }
    },
    {
      id: 'rp7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Ratios, proportions, and percentages are core SAT topics — expect 4-6 questions per test
- Percent change: always divide by the original
- "Original price" problems: work backwards using the multiplier
- Workers × time = constant (inverse variation) is a classic SAT setup`
    }
  ]
};
"""

    for i in range(1,8):
        write_file(f'sat-sat-ratios-proportions-sat-part{i}.ts', parts[i])


def gen_exponential_functions():
    parts = {}
    parts[1] = r"""export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef1-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 1 of 7 — Growth and Decay Models**

### Exponential Growth: $f(t) = a \\cdot b^t$ where $b > 1$

- $a$ = initial value (when $t = 0$)
- $b$ = growth factor
- Growth rate: $r = b - 1$

**Example:** A population starts at 500 and grows 10% per year.

$$P(t) = 500(1.10)^t$$

### Exponential Decay: $f(t) = a \\cdot b^t$ where $0 < b < 1$

- Decay rate: $r = 1 - b$

**Example:** A car worth \\$30,000 depreciates 15% per year.

$$V(t) = 30000(0.85)^t$$

### Key Insight ⚠️

Exponential growth is NOT linear. It starts slow and gets dramatically fast.

| Year | Linear (+100/yr) | Exponential (×1.5) |
|------|------------------|-------------------|
| 0 | 100 | 100 |
| 1 | 200 | 150 |
| 2 | 300 | 225 |
| 5 | 600 | 759 |
| 10 | 1,100 | 5,767 |`
    },
    {
      id: 'ef1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Growth & Decay** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bacteria population doubles every 3 hours, starting with 200. The population after $t$ hours is:',
            options: ['$P(t) = 200 \\cdot 2^{t/3}$', '$P(t) = 200 \\cdot 2^{3t}$', '$P(t) = 200 \\cdot 3^{t/2}$', '$P(t) = 400^t$'],
            correctAnswer: 0,
            explanation: 'Doubles every 3 hours means the factor of 2 applies per 3-hour period: $2^{t/3}$. At $t = 3$: $200 \\times 2^1 = 400$ ✓'
          },
          {
            question: 'A substance decays by 20% each hour. After 2 hours, what fraction of the original remains?',
            options: ['$0.64$', '$0.60$', '$0.40$', '$0.80$'],
            correctAnswer: 0,
            explanation: 'Each hour: multiply by $0.80$. After 2 hours: $0.80^2 = 0.64 = 64\\%$ remains.'
          },
          {
            question: 'In $f(t) = 1000(1.05)^t$, the growth rate is:',
            options: ['$5\\%$', '$1.05\\%$', '$105\\%$', '$0.05\\%$'],
            correctAnswer: 0,
            explanation: 'Growth factor $= 1.05 = 1 + 0.05$. Growth rate $= 0.05 = 5\\%$.'
          }
        ]
      }
    },
    {
      id: 'ef1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $f(t) = a \\cdot b^t$: $a$ = initial, $b$ = growth factor
- Growth: $b > 1$ (rate $= b - 1$). Decay: $0 < b < 1$ (rate $= 1 - b$)
- "Doubles every $k$" → $b^{t/k}$ where $b = 2$
- Exponential eventually outpaces linear growth`
    }
  ]
};
"""

    parts[2] = r"""export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 2 of 7 — Compound Interest**

### The Compound Interest Formula

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Principal (starting amount) |
| $r$ | Annual interest rate (as decimal) |
| $n$ | Number of times compounded per year |
| $t$ | Number of years |

### Common Compounding Periods

| $n$ | Compounding |
|-----|------------|
| 1 | Annually |
| 4 | Quarterly |
| 12 | Monthly |
| 365 | Daily |

### Example

\\$5,000 invested at 6% compounded monthly for 3 years:

$$A = 5000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\times 3} = 5000(1.005)^{36} \\approx \\$5{,}983.40$$

### Continuous Compounding (Rare on SAT)

$$A = Pe^{rt}$$`
    },
    {
      id: 'ef2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compound Interest** 🎯',
      exercise: {
        questions: [
          {
            question: '\\$2,000 is invested at 4% compounded annually. Which expression gives the value after 5 years?',
            options: ['$2000(1.04)^5$', '$2000(1.4)^5$', '$2000 + 2000(0.04)(5)$', '$2000 \\cdot 5 \\cdot 1.04$'],
            correctAnswer: 0,
            explanation: 'Compounded annually: $n = 1$. $A = 2000(1 + 0.04)^5 = 2000(1.04)^5$.'
          },
          {
            question: 'In the formula $A = 1000(1.02)^{4t}$, what is the annual interest rate?',
            options: ['$8\\%$ (approximately)', '$2\\%$', '$4\\%$', '$20\\%$'],
            correctAnswer: 0,
            explanation: 'The base $1.02$ with exponent $4t$ means quarterly compounding ($n = 4$) with rate $r/4 = 0.02$, so $r = 0.08 = 8\\%$.'
          },
          {
            question: 'Simple interest: $I = Prt$. Compound interest: $A = P(1+r)^t$. After 10 years at 10%, \\$1000 invested: compound interest exceeds simple interest by approximately:',
            options: ['\\$594', '\\$100', '\\$1000', '\\$259'],
            correctAnswer: 0,
            explanation: 'Simple: $1000 + 1000(0.10)(10) = \\$2{,}000$. Compound: $1000(1.10)^{10} ≈ \\$2{,}594$. Difference ≈ \\$594.'
          }
        ]
      }
    },
    {
      id: 'ef2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Compound interest formula: $A = P(1 + r/n)^{nt}$
- Identify $n$ from compounding frequency (annually, monthly, etc.)
- Compound interest grows faster than simple interest over time
- To find annual rate from the formula: $r = n \\times (\\text{base} - 1)$`
    }
  ]
};
"""

    parts[3] = r"""export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 3 of 7 — Graphs of Exponential Functions**

### The Basic Graph: $y = b^x$

- **Growth** ($b > 1$): rises from left to right
- **Decay** ($0 < b < 1$): falls from left to right
- Always passes through $(0, 1)$ since $b^0 = 1$
- **Horizontal asymptote**: $y = 0$ (the x-axis)
- Domain: all real numbers; Range: $y > 0$

### Transformations: $y = a \\cdot b^{x-h} + k$

| Parameter | Effect |
|-----------|--------|
| $a$ | Vertical stretch/flip (if negative: reflected) |
| $h$ | Horizontal shift (right if positive) |
| $k$ | Vertical shift (up if positive) |
| $k$ | New horizontal asymptote: $y = k$ |

### Reading Exponential Graphs on SAT

From a graph, identify:
- **y-intercept**: the initial value $a$ (where the graph crosses $y$-axis)
- **Horizontal asymptote**: the value $y$ approaches but never reaches
- **Growth vs decay**: is the function increasing or decreasing?
- **Growth factor**: pick two integer $x$-values, divide $y$-values`
    },
    {
      id: 'ef3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'The horizontal asymptote of $y = 3 \\cdot 2^x + 5$ is:',
            options: ['$y = 5$', '$y = 3$', '$y = 0$', '$y = 8$'],
            correctAnswer: 0,
            explanation: 'The asymptote is $y = k = 5$. As $x \\to -\\infty$, $2^x \\to 0$, so $y \\to 3(0) + 5 = 5$.'
          },
          {
            question: 'If an exponential graph passes through $(0, 4)$ and $(1, 12)$, the function is:',
            options: ['$y = 4(3)^x$', '$y = 4(2)^x$', '$y = 12^x$', '$y = 4 + 8x$'],
            correctAnswer: 0,
            explanation: 'At $x = 0$: $a = 4$. At $x = 1$: $4b = 12$ → $b = 3$. So $y = 4(3)^x$.'
          },
          {
            question: 'Which function represents exponential DECAY?',
            options: ['$y = 5(0.7)^x$', '$y = 5(1.3)^x$', '$y = 5(7)^x$', '$y = 5x + 0.7$'],
            correctAnswer: 0,
            explanation: 'Decay means $0 < b < 1$. Here $b = 0.7 < 1$, so this is exponential decay.'
          }
        ]
      }
    },
    {
      id: 'ef3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $y = b^x$ always passes through $(0, 1)$ with asymptote $y = 0$
- Transformations shift the graph and asymptote: $y = a \\cdot b^{x-h} + k$ has asymptote $y = k$
- Growth ($b > 1$): curve rises; Decay ($0 < b < 1$): curve falls
- Find the equation from two points: use $(0, y_0)$ for $a$ and another point for $b$`
    }
  ]
};
"""

    parts[4] = r"""export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef4-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 4 of 7 — Half-Life and Doubling Time**

### Half-Life

The amount remaining after time $t$:

$$A(t) = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$$

Where $h$ = half-life (time to lose half).

**Example:** A 400g sample has a half-life of 5 days.

After 15 days: $A = 400(1/2)^{15/5} = 400(1/2)^3 = 400(1/8) = 50$ grams

### Doubling Time

$$A(t) = A_0 \\cdot 2^{t/d}$$

Where $d$ = doubling time.

**Example:** A population of 1000 doubles every 7 years.

After 21 years: $A = 1000 \\cdot 2^{21/7} = 1000 \\cdot 2^3 = 8000$

### Finding Half-Life from Decay Rate

If something decays by $r\\%$ per period:
- Decay factor: $b = 1 - r/100$
- Half-life: solve $b^h = 1/2$ → $h = \\frac{\\ln(1/2)}{\\ln(b)}$

On the SAT, you can often solve by testing: "After how many periods does the amount drop below half?"`
    },
    {
      id: 'ef4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Half-Life & Doubling** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radioactive substance has a half-life of 10 years. If you start with 800 grams, how much remains after 30 years?',
            options: ['$100$ grams', '$200$ grams', '$400$ grams', '$50$ grams'],
            correctAnswer: 0,
            explanation: '30 years = 3 half-lives. $800 \\times (1/2)^3 = 800/8 = 100$ grams.'
          },
          {
            question: 'A colony of bacteria doubles every 4 hours. Starting with 50, how long until there are 3,200?',
            options: ['$24$ hours', '$20$ hours', '$16$ hours', '$32$ hours'],
            correctAnswer: 0,
            explanation: '$50 \\to 100 \\to 200 \\to 400 \\to 800 \\to 1600 \\to 3200$. That is 6 doublings × 4 hours = 24 hours. Or: $50 \\cdot 2^{t/4} = 3200$ → $2^{t/4} = 64 = 2^6$ → $t = 24$.'
          },
          {
            question: 'A car loses 20% of its value each year. After approximately how many years is it worth half its original value?',
            options: ['About $3$ years', 'About $2.5$ years', 'About $5$ years', 'About $4$ years'],
            correctAnswer: 0,
            explanation: 'Each year: $\\times 0.80$. After 3 years: $0.80^3 = 0.512 ≈ 0.5$. So about 3 years to lose half its value.'
          }
        ]
      }
    },
    {
      id: 'ef4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Half-life: $A = A_0(1/2)^{t/h}$. After $n$ half-lives, multiply by $(1/2)^n$
- Doubling time: $A = A_0 \\cdot 2^{t/d}$. After $n$ doublings, multiply by $2^n$
- Count the number of half-lives or doublings first for quick mental math
- Finding half-life from percent decay: solve $b^h = 0.5$`
    }
  ]
};
"""

    parts[5] = r"""export const satExponentialFnPart5Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef5-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 5 of 7 — Exponential vs. Linear**

### How to Tell the Difference

| Feature | Linear | Exponential |
|---------|--------|-------------|
| Pattern | Add constant | Multiply by constant |
| Formula | $y = mx + b$ | $y = ab^x$ |
| Table | Constant differences | Constant ratios |
| Graph | Straight line | Curve |

### From a Table

| $x$ | $y$ (linear) | $y$ (exponential) |
|-----|-------------|-------------------|
| 0 | 3 | 3 |
| 1 | 7 | 6 |
| 2 | 11 | 12 |
| 3 | 15 | 24 |

Linear: differences are all $+4$.
Exponential: ratios are all $\\times 2$.

### SAT Question Type

"Which type of function best models the data?"

Check: are the **differences** constant (linear) or are the **ratios** constant (exponential)?

### The Key Difference for Word Problems

- "Increases by 50 each year" → linear: $y = 50t + b$
- "Increases by 50% each year" → exponential: $y = a(1.5)^t$`
    },
    {
      id: 'ef5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Linear vs. Exponential** 🎯',
      exercise: {
        questions: [
          {
            question: 'Data: $(0, 100), (1, 80), (2, 64), (3, 51.2)$. This data is best modeled by:',
            options: ['An exponential function with $b = 0.8$', 'A linear function with slope $-20$', 'A quadratic function', 'An exponential function with $b = 1.2$'],
            correctAnswer: 0,
            explanation: 'Check ratios: $80/100 = 0.8$, $64/80 = 0.8$, $51.2/64 = 0.8$. Constant ratio → exponential with $b = 0.8$.'
          },
          {
            question: '"A town\'s population increases by 2,000 people per year." This is best modeled by:',
            options: ['A linear function', 'An exponential function', 'A quadratic function', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '"Increases by 2,000" = constant addition → linear. If it said "increases by 2%," that would be exponential.'
          },
          {
            question: 'Which grows faster for large $x$: $f(x) = 1000x$ or $g(x) = 2^x$?',
            options: ['$g(x) = 2^x$', '$f(x) = 1000x$', 'They grow at the same rate', 'Depends on $x$'],
            correctAnswer: 0,
            explanation: 'Exponential ALWAYS eventually outpaces linear, no matter how large the linear coefficient. By $x = 20$: $f = 20{,}000$ but $g = 1{,}048{,}576$.'
          }
        ]
      }
    },
    {
      id: 'ef5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Linear: constant **differences** between consecutive y-values
- Exponential: constant **ratios** between consecutive y-values
- "Increases BY [amount]" → linear; "Increases BY [percent]" → exponential
- Exponential always overtakes linear eventually`
    }
  ]
};
"""

    parts[6] = r"""export const satExponentialFnPart6Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef6-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 6 of 7 — Rewriting Exponential Expressions**

### Changing the Base

The SAT often asks you to rewrite exponentials in equivalent forms.

**Example:** Express the **annual** growth rate from a **monthly** model:

$P(t) = 100(1.02)^{12t}$

Rewrite: $P(t) = 100 \\left[(1.02)^{12}\\right]^t = 100(1.2682)^t$

So the monthly rate is 2% but the annual rate is about 26.82%.

### Converting Between Growth Periods

$f(t) = 500(1.06)^t$ (annual growth of 6%)

**Quarterly equivalent**: $f(t) = 500(1.06)^{t} = 500((1.06)^{1/4})^{4t} \\approx 500(1.01467)^{4t}$

### Key Trick for SAT

If you see $(1.03)^{4t}$:
- This means 3% growth per **quarter** (since the exponent is $4t$)
- Annual rate: $(1.03)^4 - 1 \\approx 12.55\\%$

If you see $(0.95)^{t/2}$:
- This means 5% decay every **2 years** (since the exponent is $t/2$)
- Annual rate: $(0.95)^{1/2} - 1 \\approx -2.53\\%$`
    },
    {
      id: 'ef6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rewriting Exponentials** 🎯',
      exercise: {
        questions: [
          {
            question: 'In $A(t) = 2000(1.005)^{12t}$, the 1.005 represents:',
            options: ['A monthly growth rate of 0.5%', 'An annual growth rate of 0.5%', 'A monthly growth rate of 5%', 'An annual growth rate of 6%'],
            correctAnswer: 0,
            explanation: 'The exponent $12t$ means compounding 12 times per year (monthly). The base $1.005$ means each month grows by 0.5%.'
          },
          {
            question: 'Rewrite $3(2)^{t/5}$ so the exponent is just $t$:',
            options: ['$3(2^{1/5})^t \\approx 3(1.149)^t$', '$3(2^5)^t = 3(32)^t$', '$3 \\cdot \\frac{2^t}{5}$', '$3(10)^t$'],
            correctAnswer: 0,
            explanation: '$3(2)^{t/5} = 3(2^{1/5})^t$. Since $2^{1/5} \\approx 1.149$, this represents about 14.9% growth per unit time.'
          },
          {
            question: 'A company\'s revenue grows 2% per month. Approximately what is the annual growth rate?',
            options: ['About $26.8\\%$', 'About $24\\%$', 'About $12\\%$', 'About $20\\%$'],
            correctAnswer: 0,
            explanation: 'Annual factor $= (1.02)^{12} \\approx 1.268$. Annual rate $\\approx 26.8\\%$. Note this is more than $12 \\times 2\\% = 24\\%$ due to compounding.'
          }
        ]
      }
    },
    {
      id: 'ef6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Rewrite $a \\cdot b^{ct}$ as $a \\cdot (b^c)^t$ to find the rate per unit time
- Rewrite $a \\cdot b^{t/c}$ as $a \\cdot (b^{1/c})^t$ similarly
- Monthly rate ≠ annual rate ÷ 12 (compounding makes it higher)
- Exponent $nt$: the base gives the rate per $1/n$ of a time unit`
    }
  ]
};
"""

    parts[7] = r"""export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef7-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 7 of 7 — Review & Hard Practice**

### Complete Exponential Toolkit

| Model | Formula | Key Feature |
|-------|---------|-------------|
| Basic growth | $y = ab^t$, $b > 1$ | Constant percent increase |
| Basic decay | $y = ab^t$, $0 < b < 1$ | Constant percent decrease |
| Compound interest | $A = P(1 + r/n)^{nt}$ | Interest on interest |
| Half-life | $A = A_0(1/2)^{t/h}$ | Amount halves every $h$ |
| Doubling | $A = A_0 \\cdot 2^{t/d}$ | Amount doubles every $d$ |

### Interpreting in Context

When the SAT gives you $f(t) = 300(0.85)^{t/4}$ and asks what 0.85 means:

"The quantity decreases by 15% every 4 units of time."

The base tells you the rate; the denominator in the exponent tells you the period.

### Hard SAT Pattern: Finding the Equation from Context

"A sample decreases from 200 to 50 in 6 hours."

$50 = 200 \\cdot b^6$ → $b^6 = 1/4$ → $b = (1/4)^{1/6} = 4^{-1/6} = 2^{-1/3}$

Or: $b^6 = 0.25$ → $b = 0.25^{1/6} \\approx 0.794$

So every hour, about 20.6% decays.`
    },
    {
      id: 'ef7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population grows from 1,000 to 4,000 in 10 years. What is the doubling time?',
            options: ['$5$ years', '$2.5$ years', '$10$ years', '$4$ years'],
            correctAnswer: 0,
            explanation: 'Growth: $\\times 4$ in 10 years $= \\times 2$ twice. So it doubles every 5 years. Check: $1000 \\to 2000 \\to 4000$ in 10 years ✓'
          },
          {
            question: 'The function $g(t) = 50(0.90)^t$ models a quantity. After approximately how many time periods will the quantity drop below 25?',
            options: ['About $7$', 'About $5$', 'About $10$', 'About $3$'],
            correctAnswer: 0,
            explanation: 'Solve $0.90^t = 0.5$. Testing: $0.9^6 = 0.531$ and $0.9^7 = 0.478$. So between 6 and 7, approximately 7 periods.'
          },
          {
            question: 'Which model shows the fastest growth for large $t$?',
            options: ['$f(t) = 10(1.5)^t$', '$g(t) = 1000(1.2)^t$', '$h(t) = 100(1.4)^t$', '$k(t) = 10000 + 50t$'],
            correctAnswer: 0,
            explanation: 'For large $t$, the largest base dominates. $f$ has base $1.5$ (highest), so it grows fastest eventually despite the small coefficient.'
          }
        ]
      }
    },
    {
      id: 'ef7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- The base determines the growth/decay rate — larger base = faster growth
- Period: look at the exponent — $t/k$ means the rate applies over $k$ time units
- To find $b$ from two points: $b = (y_2/y_1)^{1/(x_2-x_1)}$
- For large values of $t$, the base matters more than the initial value`
    }
  ]
};
"""

    for i in range(1,8):
        write_file(f'sat-sat-exponential-functions-sat-part{i}.ts', parts[i])


def gen_data_stats():
    parts = {}
    parts[1] = r"""export const satDataStatsPart1Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds1-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 1 of 7 — Mean, Median, Mode, Range**

### Mean (Average)

$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

### Median

The middle value when data is ordered. For even number of values: average the two middle values.

$\\{3, 5, 7, 9, 11\\}$ → median = $7$

$\\{3, 5, 7, 9\\}$ → median = $(5 + 7)/2 = 6$

### Mode

Most frequent value. Can have none, one, or multiple modes.

### Range

Range $=$ max $-$ min

### SAT Favorites 🎯

**"Adding/removing a value"**: If the mean of 5 numbers is 20, their sum is 100. Add a 6th number = 38: new mean $= 138/6 = 23$.

**"Which measure changes?"**: Adding an outlier affects the mean much more than the median.`
    },
    {
      id: 'ds1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Central Tendency** 🎯',
      exercise: {
        questions: [
          {
            question: 'The mean of 4 numbers is 15. A fifth number 25 is added. What is the new mean?',
            options: ['$17$', '$20$', '$15$', '$16$'],
            correctAnswer: 0,
            explanation: 'Sum of 4 numbers = $4 \\times 15 = 60$. New sum $= 60 + 25 = 85$. New mean $= 85/5 = 17$.'
          },
          {
            question: 'Data set: $\\{2, 5, 7, 7, 9, 100\\}$. Which measure is most affected by the outlier 100?',
            options: ['Mean', 'Median', 'Mode', 'All equally'],
            correctAnswer: 0,
            explanation: 'The mean is pulled up by the outlier to $130/6 ≈ 21.7$, while the median is $(7 + 7)/2 = 7$ and mode is 7 — both unaffected.'
          },
          {
            question: 'The median of 9 numbers in order is 42 (the 5th number). If a new number 50 is added, the new median is:',
            options: ['$\\frac{42 + 46}{2}$ if the 6th number is 46', '$50$', '$42$', 'Cannot determine without more info'],
            correctAnswer: 3,
            explanation: 'With 10 numbers, the median is the average of the 5th and 6th values. We know the 5th is 42, but we need the 6th value to determine the new median.'
          }
        ]
      }
    },
    {
      id: 'ds1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Mean: sum ÷ count. Use "sum = mean × count" to find missing totals
- Median: middle value (or average of two middles)
- Outliers affect the mean much more than the median
- For "add a value" problems: recalculate sum, then divide by new count`
    }
  ]
};
"""

    parts[2] = r"""export const satDataStatsPart2Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds2-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 2 of 7 — Standard Deviation & Data Spread**

### Standard Deviation (σ)

Measures how spread out values are from the mean. You won't calculate it on the SAT, but you must understand it.

- **Low SD**: values are close to the mean (consistent data)
- **High SD**: values are far from the mean (varied data)
- **SD = 0**: all values are the same

### Comparing Standard Deviations

Data A: $\\{48, 49, 50, 51, 52\\}$ → low SD (clustered near 50)

Data B: $\\{10, 30, 50, 70, 90\\}$ → high SD (spread out)

Both have mean 50, but B has a much larger standard deviation.

### Effect of Transformations

| Transformation | Mean | SD |
|---------------|------|-----|
| Add $k$ to all values | Mean $+ k$ | **Same** |
| Multiply all by $k$ | Mean $\\times k$ | SD $\\times |k|$ |

Adding a constant shifts all data equally — spread doesn't change.
Multiplying stretches the data — spread increases.`
    },
    {
      id: 'ds2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Standard Deviation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which data set has the largest standard deviation?',
            options: ['$\\{1, 50, 99\\}$', '$\\{48, 50, 52\\}$', '$\\{50, 50, 50\\}$', '$\\{40, 50, 60\\}$'],
            correctAnswer: 0,
            explanation: '$\\{1, 50, 99\\}$ has values most spread from the mean (50). The differences are ±49, much larger than the other sets.'
          },
          {
            question: 'A data set has mean 30 and SD 5. If 10 is added to every value, the new SD is:',
            options: ['$5$', '$15$', '$50$', '$35$'],
            correctAnswer: 0,
            explanation: 'Adding a constant shifts all values equally — the spread doesn\'t change. New mean = 40, but SD stays 5.'
          },
          {
            question: 'A data set has mean 20 and SD 4. If every value is doubled, the new SD is:',
            options: ['$8$', '$4$', '$16$', '$24$'],
            correctAnswer: 0,
            explanation: 'Multiplying by $k$ multiplies the SD by $|k|$. New SD $= 4 \\times 2 = 8$.'
          }
        ]
      }
    },
    {
      id: 'ds2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SD measures spread — you compare, not calculate on the SAT
- More spread out data = higher SD; identical values = SD of 0
- Adding a constant: mean changes, SD does NOT change
- Multiplying by a constant: both mean and SD are multiplied`
    }
  ]
};
"""

    parts[3] = r"""export const satDataStatsPart3Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds3-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 3 of 7 — Scatterplots & Line of Best Fit**

### Scatterplots

Each point represents two measurements for one individual/item.

### Correlation

- **Positive**: as $x$ increases, $y$ increases
- **Negative**: as $x$ increases, $y$ decreases
- **No correlation**: no clear pattern
- **Strength**: how closely points follow a line (strong vs. weak)

### Line of Best Fit (Regression Line)

$y = ax + b$ where:
- $a$ (slope) = predicted change in $y$ for each 1-unit increase in $x$
- $b$ (y-intercept) = predicted $y$ when $x = 0$

### Residuals

$$\\text{Residual} = \\text{Actual} - \\text{Predicted}$$

- Positive residual: point is **above** the line
- Negative residual: point is **below** the line

### SAT Strategy

"According to the line of best fit..." → plug into the equation and calculate.

"The slope of the line means..." → interpret as "for each additional [x-unit], the [y-quantity] increases/decreases by [slope]."`
    },
    {
      id: 'ds3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scatterplots** 🎯',
      exercise: {
        questions: [
          {
            question: 'A line of best fit is $y = 2.3x + 10$. For a data point at $x = 5$ with actual $y = 25$, the residual is:',
            options: ['$3.5$', '$-3.5$', '$21.5$', '$25$'],
            correctAnswer: 0,
            explanation: 'Predicted: $2.3(5) + 10 = 21.5$. Residual = actual $-$ predicted $= 25 - 21.5 = 3.5$.'
          },
          {
            question: 'A scatterplot of study hours vs. exam score has a line of best fit with slope 8.5. This means:',
            options: ['Each additional hour of study predicts an 8.5 point increase in exam score', 'Each 8.5 hours of study guarantees a 1 point increase', 'The average exam score is 8.5', 'There is a weak positive correlation'],
            correctAnswer: 0,
            explanation: 'The slope represents the predicted change in $y$ (score) per unit change in $x$ (hours). Each additional hour → predicted 8.5 point increase.'
          },
          {
            question: 'If most residuals in a residual plot are positive, this suggests:',
            options: ['The line of best fit underestimates the data', 'The line of best fit overestimates the data', 'The model is perfect', 'There is no correlation'],
            correctAnswer: 0,
            explanation: 'Positive residuals mean actual > predicted, so the line is below most points — it underestimates.'
          }
        ]
      }
    },
    {
      id: 'ds3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Slope = predicted $y$-change per unit $x$-change
- Residual = actual − predicted (positive = above line, negative = below)
- Correlation ≠ causation (the SAT tests this!)
- Interpret slope in context: "for each additional ___, the ___ is predicted to ___"`
    }
  ]
};
"""

    parts[4] = r"""export const satDataStatsPart4Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds4-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 4 of 7 — Two-Way Tables**

### Reading Two-Way Tables

|  | Cat | Dog | Total |
|--|-----|-----|-------|
| **Male** | 30 | 50 | 80 |
| **Female** | 40 | 30 | 70 |
| **Total** | 70 | 80 | 150 |

### Types of Questions

**Marginal frequency**: What percent prefer dogs? $80/150 ≈ 53.3\\%$

**Joint frequency**: What percent are female AND prefer cats? $40/150 ≈ 26.7\\%$

**Conditional frequency**: Of those who prefer cats, what percent are female? $40/70 ≈ 57.1\\%$

### SAT Trap ⚠️

"What fraction of cat owners are female?" → $40/70$ (denominator = cat total)

vs.

"What fraction of females own cats?" → $40/70$ also... wait, here denominator = female total = $40/70$

WRONG! "Of females, what fraction own cats?" → $40/70$ is NOT right. Female total = 70, cat females = 40. So $40/70 ≈ 57.1\\%$.

The trick is identifying the correct denominator (row total, column total, or grand total).`
    },
    {
      id: 'ds4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Two-Way Tables** 🎯',
      exercise: {
        questions: [
          {
            question: 'Using the table (Male/Cat=30, Male/Dog=50, Female/Cat=40, Female/Dog=30): What percentage of males prefer cats?',
            options: ['$37.5\\%$', '$42.9\\%$', '$20\\%$', '$30\\%$'],
            correctAnswer: 0,
            explanation: 'Of males (total 80), 30 prefer cats: $30/80 = 37.5\\%$. The denominator is the male row total.'
          },
          {
            question: 'Using the same table, what is the probability that a randomly chosen person is male AND prefers dogs?',
            options: ['$1/3$', '$5/8$', '$1/2$', '$50/80$'],
            correctAnswer: 0,
            explanation: 'Joint probability = $50/150 = 1/3$. The denominator is the grand total.'
          },
          {
            question: 'Among dog owners, which gender is more represented?',
            options: ['Males ($50/80 = 62.5\\%$ of dog owners are male)', 'Females ($30/80 = 37.5\\%$)', 'Equal', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Of 80 dog owners, 50 are male (62.5%) and 30 are female (37.5%). Males dominate the dog preference.'
          }
        ]
      }
    },
    {
      id: 'ds4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **"Of all..."**: denominator = grand total
- **"Of [group]..."**: denominator = that group's total (row or column)
- Conditional: "Of those who ___" tells you the denominator
- Always identify the correct denominator before calculating`
    }
  ]
};
"""

    parts[5] = r"""export const satDataStatsPart5Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds5-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 5 of 7 — Probability**

### Basic Probability

$$P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

Always between 0 (impossible) and 1 (certain).

### Complement

$$P(\\text{not } A) = 1 - P(A)$$

### "AND" (Intersection)

If events are **independent**: $P(A \\text{ and } B) = P(A) \\times P(B)$

**Example:** Coin flip AND die roll: $P(\\text{heads and 6}) = (1/2)(1/6) = 1/12$

### "OR" (Union)

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

If events are **mutually exclusive** (can't happen together): $P(A \\text{ or } B) = P(A) + P(B)$

### Conditional Probability

$$P(A | B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

"Probability of A given B" — restrict your attention to only the B outcomes.`
    },
    {
      id: 'ds5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Probability** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bag has 5 red, 3 blue, and 2 green marbles. What is the probability of drawing blue OR green?',
            options: ['$1/2$', '$3/10$', '$2/10$', '$5/10$'],
            correctAnswer: 0,
            explanation: 'Blue or green (mutually exclusive): $3/10 + 2/10 = 5/10 = 1/2$.'
          },
          {
            question: 'Two dice are rolled. What is the probability both show 6?',
            options: ['$1/36$', '$1/6$', '$1/12$', '$2/36$'],
            correctAnswer: 0,
            explanation: 'Independent events: $P = (1/6)(1/6) = 1/36$.'
          },
          {
            question: 'The probability it rains tomorrow is $0.3$. Using the complement, the probability it does NOT rain is:',
            options: ['$0.7$', '$0.3$', '$1.3$', '$-0.3$'],
            correctAnswer: 0,
            explanation: '$P(\\text{no rain}) = 1 - P(\\text{rain}) = 1 - 0.3 = 0.7$.'
          }
        ]
      }
    },
    {
      id: 'ds5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $P(A) = \\text{favorable}/\\text{total}$, always between 0 and 1
- Complement: $P(\\text{not } A) = 1 - P(A)$ — useful when "not" is easier
- "AND" (independent): multiply probabilities
- "OR": add probabilities, subtract overlap
- Conditional: restrict the total to the given condition`
    }
  ]
};
"""

    parts[6] = r"""export const satDataStatsPart6Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds6-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 6 of 7 — Sampling and Study Design**

### Types of Studies

| Type | Description | Can show causation? |
|------|-------------|-------------------|
| Observational | Observe without intervention | No (only association) |
| Experiment | Randomly assign treatments | Yes! |
| Survey | Ask questions | No (only opinion) |

### Random Sampling

A sample is **representative** if every member of the population has an equal chance of being selected.

- **Random sample**: conclusions can be generalized to the population
- **Convenience sample** (e.g., only surveying friends): results may be biased

### Bias

- **Selection bias**: sample doesn't represent the population
- **Response bias**: wording of questions influences answers
- **Voluntary response bias**: only people with strong opinions respond

### SAT Wording to Watch For

❌ "The study **proves** that X causes Y" — only experiments with random assignment can suggest causation.

✓ "The study suggests an **association** between X and Y" — appropriate for observational studies.`
    },
    {
      id: 'ds6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Study Design** 🎯',
      exercise: {
        questions: [
          {
            question: 'A researcher surveys students in the library about study habits. Why might this sample be biased?',
            options: ['Students in the library may study more than the average student', 'The library is too quiet for surveys', 'All students study equally', 'Libraries are representative of all locations'],
            correctAnswer: 0,
            explanation: 'This is selection bias — library-goers likely study more, making the sample unrepresentative of all students.'
          },
          {
            question: 'A study finds that ice cream sales and drowning rates are positively correlated. Can we conclude ice cream causes drowning?',
            options: ['No — this is observational, a confounding variable (hot weather) likely explains both', 'Yes — the correlation is clear', 'Only if the sample size is large', 'Yes — if the p-value is small'],
            correctAnswer: 0,
            explanation: 'Correlation ≠ causation. Hot weather is a confounding variable that increases both ice cream sales and swimming (leading to more drownings).'
          },
          {
            question: 'Which study design can establish a cause-and-effect relationship?',
            options: ['Randomized controlled experiment', 'Observational study with a large sample', 'Survey with random sampling', 'Any study with a control group'],
            correctAnswer: 0,
            explanation: 'Only a randomized controlled experiment (random assignment to treatment/control groups) can establish causation.'
          }
        ]
      }
    },
    {
      id: 'ds6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Only **randomized experiments** can show causation
- Observational studies show **association**, not causation
- Random sampling → results generalize to the population
- Watch for bias: selection, response, and voluntary response bias
- **Confounding variables** can create misleading correlations`
    }
  ]
};
"""

    parts[7] = r"""export const satDataStatsPart7Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds7-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 7 of 7 — Review & SAT Mixed Practice**

### Data & Statistics Quick Reference

| Concept | Key Point |
|---------|-----------|
| Mean | Sum ÷ count; affected by outliers |
| Median | Middle value; resistant to outliers |
| SD | Measures spread; add → same, multiply → changes |
| Scatterplot slope | Predicted change in $y$ per unit $x$ |
| Residual | Actual − predicted |
| Two-way tables | Watch the denominator! |
| Probability AND | Multiply (if independent) |
| Probability OR | Add, then subtract overlap |
| Causation | Only from randomized experiments |

### Common SAT Question Types

1. **Calculate** the mean/median from given data
2. **Interpret** a slope or y-intercept in context
3. **Read** a two-way table for conditional probability
4. **Evaluate** whether a study conclusion is valid
5. **Compare** standard deviations visually`
    },
    {
      id: 'ds7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'The mean of a dataset is 50. If every value is multiplied by 3 and then 10 is added, the new mean is:',
            options: ['$160$', '$150$', '$180$', '$60$'],
            correctAnswer: 0,
            explanation: 'First multiply: mean $= 50 \\times 3 = 150$. Then add: mean $= 150 + 10 = 160$.'
          },
          {
            question: 'A regression equation for test scores is $\\hat{y} = 5.2x + 30$ where $x$ = hours studied. A student studies 10 hours and scores 90. The residual is:',
            options: ['$8$', '$-8$', '$82$', '$0$'],
            correctAnswer: 0,
            explanation: 'Predicted: $5.2(10) + 30 = 82$. Residual = actual − predicted $= 90 - 82 = 8$ (above the line).'
          },
          {
            question: 'A survey of 500 randomly selected adults found that 60% support a new policy. Which conclusion is most appropriate?',
            options: ['About 60% of all adults likely support the policy', 'Exactly 60% of all adults support the policy', 'The policy should be implemented', 'More research is needed before drawing any conclusion'],
            correctAnswer: 0,
            explanation: 'Random sample → can generalize to the population. "About 60%" is appropriate (with margin of error). We can\'t say "exactly" from a sample.'
          }
        ]
      }
    },
    {
      id: 'ds7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Statistics questions are about 25-30% of SAT math — they're heavily tested
- Always identify whether a question asks about the whole population or a subgroup
- Interpret slopes, intercepts, and residuals in the context of the problem
- Correlation ≠ causation — this appears on almost every SAT`
    }
  ]
};
"""

    for i in range(1,8):
        write_file(f'sat-sat-data-statistics-sat-part{i}.ts', parts[i])


if __name__ == '__main__':
    print("Generating SAT Batch 2: Functions, Ratios, Exponential Functions, Data & Statistics...")
    gen_functions()
    gen_ratios()
    gen_exponential_functions()
    gen_data_stats()
    print("Done! 28 files written.")
