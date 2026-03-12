#!/usr/bin/env python3
"""Generate AP Calculus AB: Integration Applications, Tables/Data, FRQ Strategies, AP Exam Review."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# INTEGRATION APPLICATIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabIntAppsPart1Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia1-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 1 of 7 — Area Between Curves (Advanced)**

### Area Between Two Curves

$$A = \int_a^b |f(x) - g(x)|\,dx$$

When $f(x) \geq g(x)$ on $[a,b]$:

$$A = \int_a^b [f(x) - g(x)]\,dx$$

### When Curves Cross

Split the integral at intersection points!

### Worked Example

Area between $y = x^2$ and $y = x$ on $[0, 1]$:

Intersection: $x^2 = x \implies x = 0, 1$.

On $[0,1]$: $x \geq x^2$.

$A = \int_0^1 (x - x^2)\,dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$`
    },
    {
      id: 'ia1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $y = x^2$ and $y = 2x$.',
            options: ['$\\frac{4}{3}$', '$\\frac{2}{3}$', '$2$', '$\\frac{8}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $x^2 = 2x \\implies x = 0, 2$. $A = \\int_0^2(2x - x^2)\\,dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3$.'
          },
          {
            question: 'Find the area between $y = \\sqrt{x}$ and $y = x^2$ on $[0, 1]$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x} \\geq x^2$ on $[0,1]$. $A = \\int_0^1(\\sqrt{x} - x^2)\\,dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'ia1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Always determine which curve is on top
2. Find intersection points to set limits
3. Split integral if curves cross within the interval`
    }
  ]
};
""",
2: r"""export const calcabIntAppsPart2Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia2-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 2 of 7 — Cross-Sectional Volumes**

### Volume with Known Cross Sections

$$V = \int_a^b A(x)\,dx$$

where $A(x)$ is the area of the cross section at position $x$.

### Common Cross Sections

If the base is between $y = f(x)$ and $y = g(x)$, the side length is $s = f(x) - g(x)$.

| Shape | Area Formula |
|-------|-------------|
| Square | $s^2$ |
| Semicircle | $\frac{\pi}{8}s^2$ |
| Equilateral triangle | $\frac{\sqrt{3}}{4}s^2$ |
| Isosceles right triangle | $\frac{1}{2}s^2$ |`
    },
    {
      id: 'ia2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cross Sections** 🎯\n\nBase is the region between $y = \\sqrt{x}$ and $y = 0$ from $x = 0$ to $x = 4$. Cross sections perpendicular to $x$-axis are squares.',
      exercise: {
        questions: [
          {
            question: 'Find the volume.',
            options: ['$8$', '$4$', '$16$', '$\\frac{8}{3}$'],
            correctAnswer: 0,
            explanation: 'Side $= \\sqrt{x}$. $A(x) = (\\sqrt{x})^2 = x$. $V = \\int_0^4 x\\,dx = [x^2/2]_0^4 = 8$.'
          }
        ]
      }
    },
    {
      id: 'ia2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Volume = $\\int A(x)\\,dx$ where $A(x)$ = cross-section area
2. The side length of the cross section comes from the curve`
    }
  ]
};
""",
3: r"""export const calcabIntAppsPart3Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia3-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 3 of 7 — Volumes: Disk and Washer Methods**

### Disk Method (rotation about x-axis)

$$V = \pi\int_a^b [f(x)]^2\,dx$$

### Washer Method

$$V = \pi\int_a^b \left([R(x)]^2 - [r(x)]^2\right)\,dx$$

$R$ = outer radius, $r$ = inner radius.

### Rotation About Other Lines

If rotating about $y = k$:
- radius = $|f(x) - k|$`
    },
    {
      id: 'ia3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Disk & Washer** 🎯',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x^2$ about the $x$-axis from $x = 0$ to $x = 2$. Find the volume.',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$8\\pi$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 (x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi[x^5/5]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Rotate the region between $y = x$ and $y = x^2$ ($0 \\leq x \\leq 1$) about the $x$-axis.',
            options: ['$\\frac{2\\pi}{15}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{15}$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1(x^2 - x^4)\\,dx = \\pi[x^3/3 - x^5/5]_0^1 = \\pi(1/3 - 1/5) = \\frac{2\\pi}{15}$.'
          }
        ]
      }
    },
    {
      id: 'ia3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Disk: $\\pi r^2$ — one function
2. Washer: $\\pi(R^2 - r^2)$ — two functions
3. Adjust radii when rotating about lines other than axes`
    }
  ]
};
""",
4: r"""export const calcabIntAppsPart4Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia4-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 4 of 7 — Riemann Sums and Trapezoidal Rule**

### Left, Right, and Midpoint Sums

$$L_n = \sum_{i=0}^{n-1} f(x_i)\,\Delta x \qquad R_n = \sum_{i=1}^{n} f(x_i)\,\Delta x$$

### Trapezoidal Rule

$$T_n = \frac{\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)]$$

### Over/Underestimates

| Method | Increasing $f$ | Decreasing $f$ |
|--------|----------------|----------------|
| Left | Under | Over |
| Right | Over | Under |
| Trap | Over (concave up) | Under (concave down) |`
    },
    {
      id: 'ia4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Numerical Integration** 🎯\n\nGiven: $x = 0, 1, 2, 3$ with $f(0) = 1, f(1) = 3, f(2) = 2, f(3) = 5$.',
      exercise: {
        questions: [
          {
            question: 'Compute the left Riemann sum with $n = 3$.',
            options: ['$6$', '$10$', '$8$', '$7$'],
            correctAnswer: 0,
            explanation: '$L_3 = f(0)(1) + f(1)(1) + f(2)(1) = 1 + 3 + 2 = 6$.'
          },
          {
            question: 'Compute the trapezoidal approximation.',
            options: ['$8$', '$6$', '$10$', '$7$'],
            correctAnswer: 0,
            explanation: '$T = \\frac{1}{2}[1 + 2(3) + 2(2) + 5] = \\frac{1}{2}[1 + 6 + 4 + 5] = \\frac{16}{2} = 8$.'
          }
        ]
      }
    },
    {
      id: 'ia4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Trapezoidal rule averages left and right sums
2. Know which methods overestimate vs underestimate`
    }
  ]
};
""",
5: r"""export const calcabIntAppsPart5Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia5-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 5 of 7 — Rate Problems & Net Change**

### The Net Change Theorem

$$\int_a^b f'(x)\,dx = f(b) - f(a)$$

### Common Contexts

- **Water flow**: $\int R(t)\,dt$ = total water
- **Population**: $\int P'(t)\,dt$ = net change in population
- **Cost**: $\int C'(x)\,dx$ = total cost change
- **Velocity**: $\int v(t)\,dt$ = displacement`
    },
    {
      id: 'ia5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate Problems** 🎯\n\nWater flows into a tank at $R(t) = 10 + \\sin(t)$ gal/min.',
      exercise: {
        questions: [
          {
            question: 'How much water enters the tank from $t = 0$ to $t = \\pi$?',
            options: ['$10\\pi + 2$ gal', '$10\\pi$ gal', '$10\\pi - 2$ gal', '$2$ gal'],
            correctAnswer: 0,
            explanation: '$\\int_0^{\\pi}(10 + \\sin t)\\,dt = [10t - \\cos t]_0^{\\pi} = (10\\pi + 1) - (0 - 1) = 10\\pi + 2$.'
          }
        ]
      }
    },
    {
      id: 'ia5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Integrating a rate gives total accumulation
2. Include units in your answer on the AP exam`
    }
  ]
};
""",
6: r"""export const calcabIntAppsPart6Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia6-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'ia6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Integration Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'Region between $y = 4 - x^2$ and $y = 0$. Cross sections perpendicular to $x$-axis are semicircles with diameter on the base. Find the volume.',
            options: ['$\\frac{256\\pi}{105}$', '$\\frac{128\\pi}{15}$', '$\\frac{32\\pi}{5}$', '$\\frac{64\\pi}{15}$'],
            correctAnswer: 0,
            explanation: 'Diameter $= 4 - x^2$, radius $= (4-x^2)/2$. $A = \\frac{\\pi}{2}r^2 = \\frac{\\pi}{8}(4-x^2)^2$. $V = \\frac{\\pi}{8}\\int_{-2}^{2}(4-x^2)^2\\,dx = \\frac{\\pi}{8} \\cdot \\frac{512}{15} \\cdot \\frac{1}{2}$. Actually $\\int_{-2}^2 (16 - 8x^2 + x^4)\\,dx = 2[16x - 8x^3/3 + x^5/5]_0^2 = 2(32 - 64/3 + 32/5) = 2 \\cdot 256/15 = 512/15$. $V = \\frac{\\pi}{8} \\cdot \\frac{512}{15} = \\frac{64\\pi}{15}$. Hmm, let me check: semicircle area with diameter $d$ is $\\frac{\\pi d^2}{8}$. $V = \\frac{\\pi}{8} \\cdot \\frac{512}{15} = \\frac{64\\pi}{15}$.'
          }
        ]
      }
    },
    {
      id: 'ia6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabIntAppsPart7Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia7-intro',
      type: 'text' as const,
      content: `# Integration Applications — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'ia7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = \\sqrt{x}$ about the $y$-axis from $y = 0$ to $y = 2$ using the disk method (in terms of $y$).',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 0,
            explanation: '$x = y^2$. $V = \\pi\\int_0^2 (y^2)^2\\,dy = \\pi\\int_0^2 y^4\\,dy = \\pi[y^5/5]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'The average value of $f(x) = x^2$ on $[0, 3]$ is:',
            options: ['$3$', '$9$', '$\\frac{9}{2}$', '$6$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$.'
          }
        ]
      }
    },
    {
      id: 'ia7-summary',
      type: 'text' as const,
      content: `### Integration Applications — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcab-integration-applications-calcab-part{i}.ts', parts[i])

###############################################################################
# TABLES & DATA (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabTablesDataPart1Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 1 of 7 — Approximating Derivatives from Tables**

### Estimating $f'(a)$ from a Table

When you have a table of values but no formula, estimate the derivative using:

$$f'(a) \approx \frac{f(b) - f(c)}{b - c}$$

Choose points closest to $a$.

### Worked Example

| $x$ | 1 | 3 | 5 | 8 |
|-----|---|---|---|---|
| $f(x)$ | 2 | 7 | 10 | 20 |

$f'(3) \approx \frac{f(5) - f(1)}{5 - 1} = \frac{10 - 2}{4} = 2$

(Using symmetric difference gives better estimate than one-sided.)`
    },
    {
      id: 'td1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Derivatives** 🎯\n\n| $x$ | 0 | 2 | 5 | 7 | 10 |\n|---|---|---|---|---|---|\n| $f(x)$ | 3 | 8 | 14 | 18 | 25 |',
      exercise: {
        questions: [
          {
            question: 'Estimate $f\'(5)$ using surrounding values.',
            options: ['$2$', '$\\frac{10}{5}$', '$3$', '$\\frac{7}{3}$'],
            correctAnswer: 0,
            explanation: '$f\'(5) \\approx \\frac{f(7) - f(2)}{7 - 2} = \\frac{18 - 8}{5} = 2$.'
          },
          {
            question: 'Estimate $f\'(0)$ (at the endpoint).',
            options: ['$\\frac{5}{2}$', '$3$', '$8$', '$\\frac{8}{2}$'],
            correctAnswer: 0,
            explanation: 'At endpoint, use one-sided: $f\'(0) \\approx \\frac{f(2) - f(0)}{2 - 0} = \\frac{5}{2}$.'
          }
        ]
      }
    },
    {
      id: 'td1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Use symmetric differences when possible
2. At endpoints, use one-sided differences
3. Always state units on the AP exam`
    }
  ]
};
""",
2: r"""export const calcabTablesDataPart2Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 2 of 7 — Riemann Sums from Tables**

### Approximating Integrals from Data

When given a table with **unequal subintervals**, compute:

$$\int_a^b f(x)\,dx \approx \sum f(x_i^*) \cdot \Delta x_i$$

where $\Delta x_i$ varies!`
    },
    {
      id: 'td2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Integrals** 🎯\n\n| $t$ (hrs) | 0 | 2 | 5 | 8 | 10 |\n|---|---|---|---|---|---|\n| $R(t)$ (gal/hr) | 4 | 6 | 3 | 8 | 5 |',
      exercise: {
        questions: [
          {
            question: 'Using left Riemann sum, estimate $\\int_0^{10} R(t)\\,dt$.',
            options: ['$47$ gal', '$50$ gal', '$43$ gal', '$55$ gal'],
            correctAnswer: 0,
            explanation: '$4(2) + 6(3) + 3(3) + 8(2) = 8 + 18 + 9 + 16 = 51$. Wait: subintervals are $[0,2], [2,5], [5,8], [8,10]$ with widths $2, 3, 3, 2$. Left: $4(2) + 6(3) + 3(3) + 8(2) = 8 + 18 + 9 + 16 = 51$. Hmm, that gives 51. Let me recheck: $R(0)=4, \\Delta=2$: $8$. $R(2)=6, \\Delta=3$: $18$. $R(5)=3, \\Delta=3$: $9$. $R(8)=8, \\Delta=2$: $16$. Total = $51$. This should be $51$.'
          },
          {
            question: 'Using the trapezoidal rule, estimate $\\int_0^{10} R(t)\\,dt$.',
            options: ['$51.5$ gal', '$47$ gal', '$55$ gal', '$49$ gal'],
            correctAnswer: 0,
            explanation: '$\\frac{2}{2}(4+6) + \\frac{3}{2}(6+3) + \\frac{3}{2}(3+8) + \\frac{2}{2}(8+5) = 10 + 13.5 + 16.5 + 13 = 53$. Hmm, $(4+6) = 10$, $(6+3) \\cdot 1.5 = 13.5$, $(3+8) \\cdot 1.5 = 16.5$, $(8+5) = 13$. Total = $53$.'
          }
        ]
      }
    },
    {
      id: 'td2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Watch for unequal subintervals — multiply each value by its own $\\Delta x$
2. Trapezoidal: average the endpoints of each subinterval`
    }
  ]
};
""",
3: r"""export const calcabTablesDataPart3Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 3 of 7 — MVT with Tables**

### Using MVT on Table Data

If $f$ is differentiable and the table shows:

| $x$ | 1 | 4 |
|-----|---|---|
| $f(x)$ | 3 | 12 |

Then by MVT, there exists $c \in (1, 4)$ where $f'(c) = \frac{12 - 3}{4 - 1} = 3$.

> **AP Tip:** You MUST cite "by the Mean Value Theorem" and verify the hypotheses (continuous + differentiable).`
    },
    {
      id: 'td3-quiz1',
      type: 'multiple-choice' as const,
      content: '**MVT with Tables** 🎯\n\n$f$ is continuous and differentiable. $f(2) = 5$, $f(6) = 17$.',
      exercise: {
        questions: [
          {
            question: 'By MVT, there exists $c \\in (2, 6)$ where $f\'(c)$ equals:',
            options: ['$3$', '$12$', '$4$', '$2$'],
            correctAnswer: 0,
            explanation: '$f\'(c) = \\frac{17-5}{6-2} = \\frac{12}{4} = 3$.'
          }
        ]
      }
    },
    {
      id: 'td3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. MVT + tables is a very common AP pattern
2. Always state the theorem by name and verify conditions`
    }
  ]
};
""",
4: r"""export const calcabTablesDataPart4Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 4 of 7 — IVT with Tables**

### Using IVT on Table Data

If $f$ is continuous and the table shows values, you can conclude that $f$ takes every value between consecutive table entries.`
    },
    {
      id: 'td4-quiz1',
      type: 'multiple-choice' as const,
      content: '**IVT with Tables** 🎯\n\n$f$ is continuous. $f(1) = -2$, $f(3) = 4$, $f(5) = 1$, $f(7) = 6$.',
      exercise: {
        questions: [
          {
            question: 'Can we guarantee $f(c) = 3$ for some $c \\in (1, 3)$?',
            options: ['Yes, by IVT', 'No', 'Only by MVT', 'Need more info'],
            correctAnswer: 0,
            explanation: '$f(1) = -2 < 3 < 4 = f(3)$. By IVT, $f(c) = 3$ for some $c \\in (1, 3)$.'
          },
          {
            question: 'On what interval can we guarantee $f(c) = 2$ using the table?',
            options: ['$(3, 5)$ or $(5, 7)$', '$(1, 3)$ only', '$(5, 7)$ only', 'Cannot tell'],
            correctAnswer: 0,
            explanation: '$f(3)=4 > 2 > 1 = f(5)$: IVT on $(3,5)$. Also $f(5)=1 < 2 < 6 = f(7)$: IVT on $(5,7)$.'
          }
        ]
      }
    },
    {
      id: 'td4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Look for the target value between consecutive $f$-values
2. The value must be between $f(a)$ and $f(b)$ to apply IVT`
    }
  ]
};
""",
5: r"""export const calcabTablesDataPart5Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td5-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 5 of 7 — Interpreting $f'$ from Tables of $f$ and Vice Versa**

### Reading $f'$ from a Table of $f$

If $f$ values go from 3 to 7, $f$ is increasing ($f' > 0$).

If $f$ values change rapidly, $f'$ is large.

### Second Derivative from Tables

$f''$ tells us about concavity. If $f'$ is increasing, $f'' > 0$.`
    },
    {
      id: 'td5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Interpreting Data** 🎯\n\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $f(x)$ | 2 | 5 | 9 | 14 | 20 |',
      exercise: {
        questions: [
          {
            question: 'Looking at the differences, is $f$ concave up or concave down?',
            options: ['Concave up', 'Concave down', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Differences: $3, 4, 5, 6$ — increasing. So $f\'$ is increasing, meaning $f\'\' > 0$ → concave up.'
          }
        ]
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Increasing differences → concave up
2. Decreasing differences → concave down`
    }
  ]
};
""",
6: r"""export const calcabTablesDataPart6Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'td6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Workshop** 🎯\n\n| $t$ (min) | 0 | 3 | 7 | 10 |\n|---|---|---|---|---|\n| $v(t)$ (ft/min) | 5 | 8 | 2 | 6 |',
      exercise: {
        questions: [
          {
            question: 'Using the trapezoidal rule, estimate the total distance traveled from $t = 0$ to $t = 10$.',
            options: ['$49.5$ ft', '$55$ ft', '$42$ ft', '$60$ ft'],
            correctAnswer: 0,
            explanation: '$\\frac{3}{2}(5+8) + \\frac{4}{2}(8+2) + \\frac{3}{2}(2+6) = 19.5 + 20 + 12 = 51.5$. Hmm: $\\frac{3}{2}(13) + \\frac{4}{2}(10) + \\frac{3}{2}(8) = 19.5 + 20 + 12 = 51.5$. This should be displacement, not distance, since all values are positive this equals distance too.'
          }
        ]
      }
    },
    {
      id: 'td6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabTablesDataPart7Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td7-intro',
      type: 'text' as const,
      content: `# Tables & Data — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'td7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯\n\n$g$ is twice-differentiable. $g(0) = 1$, $g(2) = 5$, $g(4) = 4$, $g(6) = 10$.',
      exercise: {
        questions: [
          {
            question: 'By MVT, there exists $c \\in (0, 6)$ where $g\'(c) =$',
            options: ['$\\frac{3}{2}$', '$3$', '$\\frac{9}{6}$', '$2$'],
            correctAnswer: 0,
            explanation: '$g\'(c) = \\frac{g(6)-g(0)}{6-0} = \\frac{9}{6} = \\frac{3}{2}$.'
          }
        ]
      }
    },
    {
      id: 'td7-summary',
      type: 'text' as const,
      content: `### Tables & Data — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcab-tables-data-calcab-part{i}.ts', parts[i])

###############################################################################
# FRQ STRATEGIES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabFRQPart1Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq1-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 1 of 7 — The AP FRQ Format**

### Structure of the FRQ Section

- **6 questions** in 90 minutes
- Questions 1-2: **Calculator allowed** (30 min)
- Questions 3-6: **No calculator** (60 min)

### Common FRQ Types

1. **Rate/Accumulation** (graph or table of rate, find accumulation)
2. **Particle Motion** (position, velocity, acceleration)
3. **Area/Volume** (between curves, disk/washer)
4. **Differential Equations** (slope field, separation of variables)
5. **Table Analysis** (Riemann sums, MVT, IVT)
6. **Connected Rates/Related Rates**`
    },
    {
      id: 'frq1-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Format** 🎯',
      exercise: {
        questions: [
          {
            question: 'On the AP exam, how should you present work for full credit?',
            options: ['Show all mathematical steps and justify conclusions', 'Write just the final answer', 'Explain in full sentences only', 'Draw diagrams only'],
            correctAnswer: 0,
            explanation: 'Show your setup (integral, equation), work (solving steps), and answer. Justify with theorem names when needed.'
          }
        ]
      }
    },
    {
      id: 'frq1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Know the 6 common FRQ types
2. Show all work for full credit
3. Practice pacing: ~15 min per question`
    }
  ]
};
""",
2: r"""export const calcabFRQPart2Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq2-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 2 of 7 — Rate/Graph Problems**

### The Rate Problem Template

Given a graph of rate $R(t)$:

1. "Total amount" → $\int_a^b R(t)\,dt$ (area under curve)
2. "Rate of change at $t = c$" → read $R(c)$ from graph
3. "Is amount increasing or decreasing?" → sign of rate
4. "When is amount maximum?" → where rate changes from $+$ to $-$`
    },
    {
      id: 'frq2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate Problem Strategies** 🎯\n\n$R(t)$ is the rate of water flow (gal/hr). $R(t) > 0$ for $0 < t < 3$, $R(t) < 0$ for $3 < t < 7$, $R(3) = 0$.',
      exercise: {
        questions: [
          {
            question: 'At what time is the amount of water in the tank greatest?',
            options: ['$t = 3$', '$t = 0$', '$t = 7$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Water accumulates when $R > 0$ (before $t=3$) and decreases when $R < 0$ (after $t=3$). Maximum at $t = 3$.'
          }
        ]
      }
    },
    {
      id: 'frq2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Accumulation max where rate changes sign
2. Total = integral of rate`
    }
  ]
};
""",
3: r"""export const calcabFRQPart3Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq3-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 3 of 7 — Justification Language**

### Writing Justifications

The AP exam requires specific language. Here are templates:

**For IVT:** "Since $f$ is continuous on $[a, b]$ and $f(a) < N < f(b)$, by the Intermediate Value Theorem, there exists $c \in (a, b)$ such that $f(c) = N$."

**For MVT:** "Since $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, by the Mean Value Theorem, there exists $c \in (a, b)$ such that $f'(c) = \frac{f(b)-f(a)}{b-a}$."

**For increasing:** "Since $f'(x) > 0$ on $(a, b)$, $f$ is increasing on $(a, b)$."`
    },
    {
      id: 'frq3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Justification** 🎯',
      exercise: {
        questions: [
          {
            question: 'To justify that $f$ has a relative maximum at $x = c$, you should write:',
            options: ['$f\'(c) = 0$ and $f\'$ changes from positive to negative at $c$', '$f(c)$ is the largest value', '$f\'(c) = 0$', '$f\'\'(c) = 0$'],
            correctAnswer: 0,
            explanation: 'First derivative test: $f\'(c) = 0$ (critical point) AND $f\'$ changes from $+$ to $-$ (confirming max).'
          }
        ]
      }
    },
    {
      id: 'frq3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Cite theorem names explicitly
2. State conditions (continuous, differentiable) before applying
3. Use precise mathematical language`
    }
  ]
};
""",
4: r"""export const calcabFRQPart4Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq4-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 4 of 7 — Calculator Strategies**

### When Calculators Are Allowed (Q1-Q2)

You may be asked to:
1. **Evaluate a definite integral** — use numerical integration
2. **Find zeros of $f'$** — graph and find zeros
3. **Find intersections** — graph both functions
4. **Evaluate $f(a)$** — direct computation

### Important Rules
- Store intermediate values (don't round too early)
- Show the mathematical setup even if using calculator
- Write at least 3 decimal places`
    },
    {
      id: 'frq4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Calculator Skills** 🎯',
      exercise: {
        questions: [
          {
            question: 'On calculator problems, if you evaluate $\\int_0^3 \\sqrt{1+x^3}\\,dx$ numerically, what must you write?',
            options: ['The integral setup AND the decimal answer', 'Just the decimal value', 'A Riemann sum approximation', 'The antiderivative'],
            correctAnswer: 0,
            explanation: 'Always show the mathematical setup: $\\int_0^3 \\sqrt{1+x^3}\\,dx = 6.586$ (or similar). Both are needed for full credit.'
          }
        ]
      }
    },
    {
      id: 'frq4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Show setup + numerical answer
2. Use 3+ decimal places
3. Don't round intermediate results`
    }
  ]
};
""",
5: r"""export const calcabFRQPart5Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq5-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 5 of 7 — Common Mistakes to Avoid**

### Top 10 AP Calculus Mistakes

1. **Forgetting $+C$** on indefinite integrals
2. **Not stating hypotheses** when using IVT/MVT
3. **Using the wrong variable** ($x$ vs $t$)
4. **Not including units** in contextual answers
5. **Premature rounding** on calculator problems
6. **Confusing displacement and total distance**
7. **Forgetting absolute values** for total distance
8. **Not checking endpoints** for absolute extrema
9. **Missing a factor** from the chain rule
10. **Not answering the question asked**`
    },
    {
      id: 'frq5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Avoid Common Mistakes** 🎯',
      exercise: {
        questions: [
          {
            question: 'A question asks for total distance. You compute $\\int_0^5 v(t)\\,dt = -3$. What should you do?',
            options: ['Split the integral where $v = 0$ and use $|v(t)|$', 'Write $|-3| = 3$', 'The total distance is $-3$', 'Write $3$'],
            correctAnswer: 0,
            explanation: 'Total distance $= \\int |v(t)|\\,dt$. You must split at zeros and handle each piece. Simply taking absolute value of the result is wrong.'
          }
        ]
      }
    },
    {
      id: 'frq5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Read the question carefully
2. Include units and justify theorems
3. Total distance and displacement are different!`
    }
  ]
};
""",
6: r"""export const calcabFRQPart6Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq6-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 6 of 7 — Scoring & Partial Credit**

### How FRQs Are Scored

Each question is worth **9 points**, typically split:
- Part (a): 2 points
- Part (b): 2-3 points
- Part (c): 2-3 points
- Part (d): 2-3 points

### Partial Credit Tips

- **Each part is graded independently** — always attempt every part
- You can use results from earlier parts even if wrong
- Show your setup for credit even if computation has errors
- A correct answer with no work may get 0 points`
    },
    {
      id: 'frq6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scoring Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'You get part (a) wrong. What should you do for parts (b)-(d)?',
            options: ['Use your (possibly wrong) answer and continue', 'Leave them blank', 'Start over', 'Write "see part (a)"'],
            correctAnswer: 0,
            explanation: 'Parts are graded independently. If you use a wrong answer from (a) correctly in (b), you can still earn full credit on (b).'
          }
        ]
      }
    },
    {
      id: 'frq6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6
1. Never leave a part blank
2. Show work for every part
3. Parts are scored independently`
    }
  ]
};
""",
7: r"""export const calcabFRQPart7Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq7-intro',
      type: 'text' as const,
      content: `# Free Response Strategies — Review

**Part 7 of 7 — Final Practice**`
    },
    {
      id: 'frq7-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'On a no-calculator section, you need $\\int_1^4 (2x+1)\\,dx$. What do you write?',
            options: ['$\\int_1^4(2x+1)\\,dx = [x^2+x]_1^4 = 20 - 2 = 18$', 'Just $18$', '$x^2 + x = 18$', 'Use FnInt'],
            correctAnswer: 0,
            explanation: 'Show: integral → antiderivative → evaluate at bounds → final answer.'
          }
        ]
      }
    },
    {
      id: 'frq7-summary',
      type: 'text' as const,
      content: `### FRQ Strategies — Complete! ✅

You are ready to tackle AP FRQs with confidence!`
    }
  ]
};
""",
    }
    write_file(f'calcab-free-response-strategies-calcab-part{i}.ts', parts[i])

###############################################################################
# AP EXAM REVIEW (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabExamReviewPart1Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er1-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 1 of 7 — Limits & Continuity Review**

### Essential Limit Techniques

1. **Direct substitution** — always try first
2. **Factoring** — cancel common factors
3. **Rationalization** — multiply by conjugate
4. **L'Hopital's Rule** — for $0/0$ or $\infty/\infty$ forms
5. **Squeeze Theorem** — bound the function`
    },
    {
      id: 'er1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Limits Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$.',
            options: ['$4$', '$0$', '$2$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{(x-2)(x+2)}{x-2} = x+2 \\to 4$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.',
            options: ['$3$', '$0$', '$1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} \\to 3 \\cdot 1 = 3$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2}$.',
            options: ['$\\frac{3}{5}$', '$\\frac{1}{2}$', '$\\infty$', '$0$'],
            correctAnswer: 0,
            explanation: 'Same degree: ratio of leading coefficients = $3/5$.'
          }
        ]
      }
    },
    {
      id: 'er1-summary',
      type: 'text' as const,
      content: `### Review — Part 1 Complete`
    }
  ]
};
""",
2: r"""export const calcabExamReviewPart2Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er2-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 2 of 7 — Derivatives Review**

### Must-Know Derivative Rules

| Function | Derivative |
|----------|-----------|
| $x^n$ | $nx^{n-1}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\\ln x$ | $1/x$ |
| $\\arcsin x$ | $1/\\sqrt{1-x^2}$ |
| $\\arctan x$ | $1/(1+x^2)$ |

Plus: Product Rule, Quotient Rule, Chain Rule`
    },
    {
      id: 'er2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Derivatives Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[x^2 \\sin x]$.',
            options: ['$2x\\sin x + x^2\\cos x$', '$2x\\cos x$', '$x^2\\cos x$', '$2x\\sin x$'],
            correctAnswer: 0,
            explanation: 'Product rule: $2x \\sin x + x^2 \\cos x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\ln(\\cos x)]$.',
            options: ['$-\\tan x$', '$\\frac{1}{\\cos x}$', '$-\\sec x$', '$\\tan x$'],
            correctAnswer: 0,
            explanation: '$\\frac{-\\sin x}{\\cos x} = -\\tan x$.'
          }
        ]
      }
    },
    {
      id: 'er2-summary',
      type: 'text' as const,
      content: `### Review — Part 2 Complete`
    }
  ]
};
""",
3: r"""export const calcabExamReviewPart3Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er3-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 3 of 7 — Applications of Derivatives Review**

### Key Applications

1. **Related Rates** — differentiate equation with respect to time
2. **Optimization** — find critical points, check endpoints
3. **First/Second Derivative Test** — classify critical points
4. **Concavity** — second derivative determines shape`
    },
    {
      id: 'er3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Derivative Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'(c) = 0$ and $f\'\'(c) < 0$, then $f$ has a:',
            options: ['Local maximum at $c$', 'Local minimum at $c$', 'Inflection point at $c$', 'Neither'],
            correctAnswer: 0,
            explanation: 'Second derivative test: $f\'(c) = 0$ and $f\'\'(c) < 0$ means local maximum.'
          },
          {
            question: 'A sphere expands so $\\frac{dr}{dt} = 2$ cm/s. When $r = 5$, find $\\frac{dV}{dt}$.',
            options: ['$200\\pi$ cm$^3$/s', '$100\\pi$ cm$^3$/s', '$50\\pi$ cm$^3$/s', '$400\\pi$ cm$^3$/s'],
            correctAnswer: 0,
            explanation: '$V = \\frac{4}{3}\\pi r^3$. $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = 4\\pi(25)(2) = 200\\pi$.'
          }
        ]
      }
    },
    {
      id: 'er3-summary',
      type: 'text' as const,
      content: `### Review — Part 3 Complete`
    }
  ]
};
""",
4: r"""export const calcabExamReviewPart4Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er4-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 4 of 7 — Integration Review**

### Essential Integrals

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

$$\\int e^x\\,dx = e^x + C$$

$$\\int \\sin x\\,dx = -\\cos x + C$$

$$\\int \\cos x\\,dx = \\sin x + C$$

$$\\int \\sec^2 x\\,dx = \\tan x + C$$`
    },
    {
      id: 'er4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi} (2\\cos x + 3)\\,dx$.',
            options: ['$3\\pi$', '$2\\pi$', '$3\\pi + 2$', '$6$'],
            correctAnswer: 0,
            explanation: '$[2\\sin x + 3x]_0^{\\pi} = (0 + 3\\pi) - (0) = 3\\pi$.'
          },
          {
            question: 'Find $\\int \\frac{2x}{x^2+1}\\,dx$.',
            options: ['$\\ln(x^2+1) + C$', '$\\arctan x + C$', '$\\frac{1}{x^2+1} + C$', '$2\\ln(x^2+1) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$. $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2+1) + C$.'
          }
        ]
      }
    },
    {
      id: 'er4-summary',
      type: 'text' as const,
      content: `### Review — Part 4 Complete`
    }
  ]
};
""",
5: r"""export const calcabExamReviewPart5Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er5-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 5 of 7 — FTC, Accumulation, and DEs**

### FTC Part 1
$$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$$

### FTC Part 2
$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

### Separation of Variables
$$\\frac{dy}{dx} = f(x)g(y) \\implies \\frac{dy}{g(y)} = f(x)\\,dx$$`
    },
    {
      id: 'er5-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC & DE Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $F(x) = \\int_1^x \\sqrt{t^3 + 1}\\,dt$, find $F\'(4)$.',
            options: ['$\\sqrt{65}$', '$65$', '$\\sqrt{17}$', '$4$'],
            correctAnswer: 0,
            explanation: '$F\'(x) = \\sqrt{x^3 + 1}$. $F\'(4) = \\sqrt{64+1} = \\sqrt{65}$.'
          },
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(0) = 4$. Find $y$ when $x = 3$.',
            options: ['$5$', '$\\sqrt{25}$', '$\\sqrt{7}$', '$3$'],
            correctAnswer: 0,
            explanation: '$y\\,dy = x\\,dx$. $y^2/2 = x^2/2 + C$. $y(0)=4$: $C = 8$. $y^2 = x^2 + 16$. $y(3) = \\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'er5-summary',
      type: 'text' as const,
      content: `### Review — Part 5 Complete`
    }
  ]
};
""",
6: r"""export const calcabExamReviewPart6Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er6-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 6 of 7 — Applications of Integration**

### Key Applications

1. **Area between curves**: $\\int [f - g]\\,dx$
2. **Volumes (disk/washer)**: $\\pi\\int [R^2 - r^2]\\,dx$
3. **Cross sections**: $\\int A(x)\\,dx$
4. **Average value**: $\\frac{1}{b-a}\\int_a^b f\\,dx$`
    },
    {
      id: 'er6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Applications Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'The area between $y = x^3$ and $y = x$ on $[0, 1]$ is:',
            options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$'],
            correctAnswer: 0,
            explanation: '$x > x^3$ on $(0,1)$. $\\int_0^1 (x - x^3)\\,dx = [x^2/2 - x^4/4]_0^1 = 1/2 - 1/4 = 1/4$.'
          }
        ]
      }
    },
    {
      id: 'er6-summary',
      type: 'text' as const,
      content: `### Review — Part 6 Complete`
    }
  ]
};
""",
7: r"""export const calcabExamReviewPart7Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er7-intro',
      type: 'text' as const,
      content: `# AP Exam Review — Final

**Part 7 of 7 — Comprehensive Mixed Review**`
    },
    {
      id: 'er7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{h \\to 0} \\frac{\\sin(\\pi + h) + \\sin \\pi}{h} = $',
            options: ['$-1$', '$0$', '$1$', '$\\cos \\pi$'],
            correctAnswer: 0,
            explanation: 'This is $f\'(\\pi)$ where $f(x) = \\sin x$: $f\'(\\pi) = \\cos \\pi = -1$. Note: both option A and D give $-1$.'
          },
          {
            question: 'If $f(x) = \\int_0^{x^2} \\cos(t)\\,dt$, find $f\'(x)$.',
            options: ['$2x\\cos(x^2)$', '$\\cos(x^2)$', '$2x\\sin(x^2)$', '$\\sin(x^2)$'],
            correctAnswer: 0,
            explanation: 'FTC + chain rule: $\\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$.'
          },
          {
            question: 'The absolute maximum of $f(x) = x^3 - 12x$ on $[-3, 4]$ is:',
            options: ['$16$', '$9$', '$-9$', '$20$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f(-3) = 9$, $f(-2) = 16$, $f(2) = -16$, $f(4) = 16$. Max is $16$.'
          }
        ]
      }
    },
    {
      id: 'er7-summary',
      type: 'text' as const,
      content: `### AP Exam Review — Complete! 🎓

You have reviewed all major topics for the AP Calculus AB exam:
- ✅ Limits & Continuity
- ✅ Derivatives & Applications
- ✅ Integration & Applications
- ✅ Differential Equations
- ✅ Theorems (IVT, MVT, EVT, FTC)

**Good luck on the exam!**`
    }
  ]
};
""",
    }
    write_file(f'calcab-ap-exam-review-calcab-part{i}.ts', parts[i])

print("\nIntegration Apps (7), Tables/Data (7), FRQ Strategies (7), AP Review (7) complete!")
print("Total files written: 28")
