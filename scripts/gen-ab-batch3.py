#!/usr/bin/env python3
"""Generate AP Calculus AB: Optimization, Area Between Curves, Volumes of Revolution."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# OPTIMIZATION (7 parts)
###############################################################################

write_file('calcab-optimization-calcab-part1.ts', r"""export const calcabOptimizationPart1Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt1-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 1 of 7 — Setting Up Optimization Problems**

### The Strategy

1. **Identify** the quantity to maximize or minimize (the **objective function**)
2. **Write** an equation for it in terms of your variables
3. Use a **constraint** to eliminate a variable (reduce to one variable)
4. Find **critical points** of the objective function
5. **Verify** it's actually a max or min (use endpoints or Second Derivative Test)

### Worked Example: Fencing Problem

A rancher has 200 m of fencing. She wants to enclose a rectangular area along a river (no fence needed on the river side). Find the maximum area.

Let $x$ = width (perpendicular to river), $y$ = length (parallel to river).

**Objective:** Maximize $A = xy$

**Constraint:** $2x + y = 200$ → $y = 200 - 2x$

**Substitute:** $A(x) = x(200 - 2x) = 200x - 2x^2$

$A'(x) = 200 - 4x = 0$ → $x = 50$

$A''(x) = -4 < 0$ → concave down → **maximum**

$y = 200 - 100 = 100$. **Maximum area = $5000$ m$^2$.**`
    },
    {
      id: 'opt1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Setting Up Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A farmer has 120 m of fencing to enclose a rectangular pen (all 4 sides). What dimensions maximize area?',
            options: ['$30 \\times 30$', '$20 \\times 40$', '$10 \\times 50$', '$25 \\times 35$'],
            correctAnswer: 0,
            explanation: 'Constraint: $2x + 2y = 120$, so $y = 60 - x$. $A = x(60-x) = 60x - x^2$. $A\' = 60 - 2x = 0$ at $x = 30$. So $y = 30$. A square gives the maximum area.'
          },
          {
            question: 'The sum of two positive numbers is 50. What is the maximum product?',
            options: ['$625$', '$600$', '$500$', '$650$'],
            correctAnswer: 0,
            explanation: 'Let $x + y = 50$. $P = x(50-x) = 50x - x^2$. $P\' = 50 - 2x = 0$ at $x = 25$. $P = 25 \\times 25 = 625$.'
          }
        ]
      }
    },
    {
      id: 'opt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. Always define your variables clearly
2. Write the **objective function** (what to optimize)
3. Use the **constraint** to reduce to one variable
4. Verify using the Second Derivative Test or endpoint analysis`
    }
  ]
};
""")

write_file('calcab-optimization-calcab-part2.ts', r"""export const calcabOptimizationPart2Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt2-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 2 of 7 — Geometric Optimization**

### Box Problem (Classic AP Question)

An open-top box is made by cutting squares of side $x$ from corners of a 12 × 8 sheet and folding up.

**Objective:** Maximize $V = x(12 - 2x)(8 - 2x)$

**Domain:** $0 < x < 4$

Expand: $V = x(96 - 24x - 16x + 4x^2) = 4x^3 - 40x^2 + 96x$

$V'(x) = 12x^2 - 80x + 96 = 4(3x^2 - 20x + 24)$

Using the quadratic formula: $x = \\frac{20 \\pm \\sqrt{400-288}}{6} = \\frac{20 \\pm \\sqrt{112}}{6}$

$x \\approx 1.57$ or $x \\approx 5.10$

Since $x < 4$, use $x \\approx 1.57$. $V \\approx 1.57(8.86)(4.86) \\approx 67.6$ cubic units.`
    },
    {
      id: 'opt2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Geometric Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangle inscribed in the parabola $y = 12 - x^2$ (with base on the x-axis) has vertices at $(\\pm x, 0)$ and $(\\pm x, 12-x^2)$. Find $x$ that maximizes the area.',
            options: ['$x = 2$', '$x = \\sqrt{3}$', '$x = 1$', '$x = 3$'],
            correctAnswer: 0,
            explanation: '$A = 2x(12 - x^2) = 24x - 2x^3$. $A\' = 24 - 6x^2 = 0$ at $x^2 = 4$, so $x = 2$.'
          },
          {
            question: 'Find the point on $y = \\sqrt{x}$ closest to $(3, 0)$.',
            options: ['$(\\frac{5}{2}, \\sqrt{\\frac{5}{2}})$', '$(1, 1)$', '$(4, 2)$', '$(2, \\sqrt{2})$'],
            correctAnswer: 0,
            explanation: 'Minimize $D^2 = (x-3)^2 + x$. $\\frac{d}{dx}D^2 = 2(x-3) + 1 = 2x - 5 = 0$ at $x = 5/2$.'
          }
        ]
      }
    },
    {
      id: 'opt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. For minimizing distance, it's easier to minimize $D^2$ (avoids square roots)
2. Check your domain carefully for geometric problems
3. The box-cutting problem is a classic — know the setup`
    }
  ]
};
""")

write_file('calcab-optimization-calcab-part3.ts', r"""export const calcabOptimizationPart3Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt3-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 3 of 7 — Cost & Revenue Optimization**

### Business Applications

- **Revenue:** $R(x) = x \\cdot p(x)$ where $p(x)$ is the price-demand function
- **Profit:** $P(x) = R(x) - C(x)$ (revenue minus cost)
- **Marginal cost:** $C'(x)$ — the cost of producing one more unit
- Maximum profit occurs where $R'(x) = C'(x)$ (marginal revenue = marginal cost)

### Worked Example

A company sells widgets: demand is $p = 100 - 2x$ (price per widget when $x$ widgets are sold). Cost: $C(x) = 200 + 5x$.

$R(x) = xp = x(100-2x) = 100x - 2x^2$

$P(x) = R(x) - C(x) = 100x - 2x^2 - 200 - 5x = -2x^2 + 95x - 200$

$P'(x) = -4x + 95 = 0$ → $x = 23.75$

Since $x$ must be a whole number, check $x = 23$ and $x = 24$:
- $P(23) = -2(529) + 95(23) - 200 = 927$
- $P(24) = -2(576) + 95(24) - 200 = 928$

**Maximum profit = $928 at $x = 24$ widgets.**`
    },
    {
      id: 'opt3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Applied Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $C(x) = 0.01x^2 + 5x + 100$ is the cost of producing $x$ items, find the production level that minimizes the average cost $\\bar{C} = C(x)/x$.',
            options: ['$x = 100$', '$x = 50$', '$x = 200$', '$x = 250$'],
            correctAnswer: 0,
            explanation: '$\\bar{C} = 0.01x + 5 + \\frac{100}{x}$. $\\bar{C}\' = 0.01 - \\frac{100}{x^2} = 0$. $x^2 = 10000$, so $x = 100$.'
          }
        ]
      }
    },
    {
      id: 'opt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. Profit = Revenue - Cost
2. Max profit where marginal revenue = marginal cost
3. Average cost is minimized where $\\bar{C}' = 0$`
    }
  ]
};
""")

for i in range(4, 8):
    part_content = {
        4: (r"""export const calcabOptimizationPart4Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt4-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 4 of 7 — 3D Optimization (Cylinders & Cones)**

### Cylinder with Fixed Surface Area

Minimize the surface area of a cylinder with volume $V = 1000$ cm$^3$.

$V = \\pi r^2 h = 1000$ → $h = \\frac{1000}{\\pi r^2}$

$S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{2000}{r}$

$S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0$

$r^3 = \\frac{500}{\\pi}$ → $r = \\left(\\frac{500}{\\pi}\\right)^{1/3} \\approx 5.42$ cm

This gives $h = 2r$ — the optimal cylinder has height equal to its diameter!`
    },
    {
      id: 'opt4-quiz1',
      type: 'multiple-choice' as const,
      content: '**3D Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cylinder with no top has volume $V = 27\\pi$. What radius minimizes the surface area?',
            options: ['$r = 3$', '$r = 2$', '$r = \\sqrt[3]{27}$', '$r = 9$'],
            correctAnswer: 0,
            explanation: '$h = 27/r^2$. $S = \\pi r^2 + 2\\pi rh = \\pi r^2 + 54\\pi/r$. $S\' = 2\\pi r - 54\\pi/r^2 = 0$. $r^3 = 27$, $r = 3$.'
          }
        ]
      }
    },
    {
      id: 'opt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \\u2014 Part 4
1. 3D optimization follows the same strategy: objective + constraint
2. Express surface area or volume in one variable using the constraint
3. For optimal cylinders: $h = 2r$ (with top) or $h = r$ (without top)`
    }
  ]
};
"""),
        5: (r"""export const calcabOptimizationPart5Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt5-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 5 of 7 — Distance & Angle Optimization**

### Minimizing Travel Distance

A lifeguard at point $A$ on the beach must reach a swimmer at point $B$ in the water. She runs on sand at 8 m/s and swims at 2 m/s. Where should she enter the water?

This uses **Snell's Law**: the optimal path has $\\frac{\\sin \\theta_1}{v_1} = \\frac{\\sin \\theta_2}{v_2}$.

### Optimization with Trigonometry

When angles are involved, express the objective function using trig and differentiate.`
    },
    {
      id: 'opt5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A wire of length 20 is cut into two pieces. One is bent into a square, the other into a circle. What length should be used for the circle to minimize total area?',
            options: ['$\\frac{20\\pi}{\\pi + 4}$', '$10$', '$\\frac{20}{\\pi + 4}$', '$0$ (all for the square)'],
            correctAnswer: 0,
            explanation: 'Let $x$ = length for circle. Circle: $r = \\frac{x}{2\\pi}$, $A_c = \\frac{x^2}{4\\pi}$. Square: side $= \\frac{20-x}{4}$, $A_s = \\frac{(20-x)^2}{16}$. $A\' = \\frac{x}{2\\pi} - \\frac{20-x}{8} = 0$. Solving: $x = \\frac{20\\pi}{\\pi + 4}$.'
          }
        ]
      }
    },
    {
      id: 'opt5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \\u2014 Part 5
1. Some optimization problems involve geometry with angles or paths
2. Set up the objective function carefully, then use standard calculus techniques`
    }
  ]
};
"""),
        6: (r"""export const calcabOptimizationPart6Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt6-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 6 of 7 — AP-Style Workshop**

Mixed optimization problems similar to AP free-response questions.`
    },
    {
      id: 'opt6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangle has one side on the x-axis and its upper vertices on $y = 4 - x^2$. What is the maximum area?',
            options: ['$\\frac{32}{3\\sqrt{3}}$', '$\\frac{16\\sqrt{3}}{9}$', '$\\frac{32\\sqrt{3}}{9}$', '$4$'],
            correctAnswer: 2,
            explanation: '$A = 2x(4-x^2) = 8x - 2x^3$. $A\' = 8 - 6x^2 = 0$. $x = \\frac{2}{\\sqrt{3}}$. $A = 2 \\cdot \\frac{2}{\\sqrt{3}}(4 - \\frac{4}{3}) = \\frac{4}{\\sqrt{3}} \\cdot \\frac{8}{3} = \\frac{32}{3\\sqrt{3}} = \\frac{32\\sqrt{3}}{9}$.'
          },
          {
            question: 'Find two positive numbers whose product is 100 and whose sum is minimized.',
            options: ['$10$ and $10$', '$5$ and $20$', '$1$ and $100$', '$25$ and $4$'],
            correctAnswer: 0,
            explanation: '$xy = 100$, minimize $S = x + 100/x$. $S\' = 1 - 100/x^2 = 0$ at $x = 10$. $y = 10$.'
          }
        ]
      }
    },
    {
      id: 'opt6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!
Optimization is all about translating word problems into calculus.`
    }
  ]
};
"""),
        7: (r"""export const calcabOptimizationPart7Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt7-intro',
      type: 'text' as const,
      content: `# Optimization — Review

**Part 7 of 7 — Comprehensive Assessment**

### Optimization Checklist
1. \\u2705 Define variables and draw a picture
2. \\u2705 Write the objective function
3. \\u2705 Use constraint to reduce to one variable
4. \\u2705 Find critical points
5. \\u2705 Verify max/min (Second Derivative Test or domain check)`
    },
    {
      id: 'opt7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangular page has margins of 1 inch on all sides. The printable area (inside margins) must be 24 sq in. Find the page width that minimizes total paper area.',
            options: ['$\\sqrt{24} + 2$ inches', '$6$ inches', '$4 + 2 = 6$ inches', '$2\\sqrt{6} + 2$ inches'],
            correctAnswer: 3,
            explanation: 'Print area: $(w-2)(h-2) = 24$, so $h = \\frac{24}{w-2} + 2$. Total area: $A = wh = w(\\frac{24}{w-2}+2)$. Using calculus, the minimum occurs at $w = 2 + 2\\sqrt{6}$.'
          }
        ]
      }
    },
    {
      id: 'opt7-summary',
      type: 'text' as const,
      content: `### Optimization — Complete! \\u2705

You have mastered:
- \\u2705 Setting up objective functions and constraints
- \\u2705 Geometric, business, and distance optimization
- \\u2705 Verifying solutions using calculus tests`
    }
  ]
};
"""),
    }
    write_file(f'calcab-optimization-calcab-part{i}.ts', part_content[i])

###############################################################################
# AREA BETWEEN CURVES (7 parts)
###############################################################################

write_file('calcab-area-between-curves-calcab-part1.ts', r"""export const calcabAreaCurvesPart1Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area1-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 1 of 7 — Area Between Two Curves**

### The Formula

For two functions where $f(x) \\geq g(x)$ on $[a, b]$:

$$A = \\int_a^b [f(x) - g(x)]\\,dx$$

**Top function minus bottom function.**

### Worked Example

Find the area between $y = x^2$ and $y = x + 2$.

**Step 1:** Find intersection points.
$x^2 = x + 2$ → $x^2 - x - 2 = 0$ → $(x-2)(x+1) = 0$ → $x = -1, 2$

**Step 2:** Determine which is on top. At $x = 0$: $y = 0$ vs $y = 2$. So $x + 2$ is on top.

**Step 3:** Integrate.
$$A = \\int_{-1}^{2} [(x+2) - x^2]\\,dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2}$$

$$= \\left(2 + 4 - \\frac{8}{3}\\right) - \\left(\\frac{1}{2} - 2 + \\frac{1}{3}\\right) = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{27}{6} = \\frac{9}{2}$$`
    },
    {
      id: 'area1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area between $y = x^2$ and $y = 4$.',
            options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$8$', '$\\frac{64}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $x^2 = 4$ at $x = \\pm 2$. $A = \\int_{-2}^{2} (4 - x^2)\\,dx = 2\\int_0^2 (4-x^2)\\,dx = 2[4x - \\frac{x^3}{3}]_0^2 = 2(8 - \\frac{8}{3}) = 2 \\cdot \\frac{16}{3} = \\frac{32}{3}$.'
          },
          {
            question: 'Find the area between $y = \\sin x$ and $y = 0$ on $[0, \\pi]$.',
            options: ['$1$', '$2$', '$\\pi$', '$0$'],
            correctAnswer: 1,
            explanation: '$\\sin x \\geq 0$ on $[0, \\pi]$. $A = \\int_0^{\\pi} \\sin x\\,dx = [-\\cos x]_0^{\\pi} = 1 + 1 = 2$.'
          }
        ]
      }
    },
    {
      id: 'area1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. Area = $\\int$ (top curve $-$ bottom curve)
2. Always find intersection points first
3. Check which function is on top by testing a point in the interval`
    }
  ]
};
""")

write_file('calcab-area-between-curves-calcab-part2.ts', r"""export const calcabAreaCurvesPart2Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area2-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 2 of 7 — When Curves Switch Position**

### Splitting the Integral

When the "top" and "bottom" curves switch, split into separate integrals:

$$A = \\int_a^c [f(x) - g(x)]\\,dx + \\int_c^b [g(x) - f(x)]\\,dx$$

Or equivalently: $A = \\int_a^b |f(x) - g(x)|\\,dx$

### Worked Example

Find the area between $y = x^3$ and $y = x$ on $[-1, 1]$.

Intersections: $x^3 = x$ → $x(x^2-1) = 0$ → $x = -1, 0, 1$

- On $[-1, 0]$: $x^3 \\geq x$ (test $x = -0.5$: $-0.125 > -0.5$)
- On $[0, 1]$: $x \\geq x^3$ (test $x = 0.5$: $0.5 > 0.125$)

$$A = \\int_{-1}^0 (x^3 - x)\\,dx + \\int_0^1 (x - x^3)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$`
    },
    {
      id: 'area2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Curves that Cross** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area between $y = x^2 - 1$ and $y = -x^2 + 1$ on $[-1, 1]$.',
            options: ['$\\frac{4}{3}$', '$\\frac{8}{3}$', '$0$', '$4$'],
            correctAnswer: 1,
            explanation: '$-x^2+1 \\geq x^2-1$ on $[-1,1]$. $A = \\int_{-1}^1 [(-x^2+1)-(x^2-1)]\\,dx = \\int_{-1}^1 (2-2x^2)\\,dx = 2[2x - \\frac{2x^3}{3}]_0^1 = 2(2-\\frac{2}{3}) = \\frac{8}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. When curves cross, split the integral at each intersection
2. Always use $|\\text{top} - \\text{bottom}|$ to get positive area
3. Test a point in each subinterval to determine which is on top`
    }
  ]
};
""")

write_file('calcab-area-between-curves-calcab-part3.ts', r"""export const calcabAreaCurvesPart3Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area3-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 3 of 7 — Integrating with Respect to $y$**

### When to Use $dy$

Sometimes it's easier to integrate horizontally (with respect to $y$):

$$A = \\int_c^d [\\text{right}(y) - \\text{left}(y)]\\,dy$$

### Worked Example

Find the area between $x = y^2$ and $x = 4$.

Intersect: $y^2 = 4$ → $y = \\pm 2$

Right curve: $x = 4$. Left curve: $x = y^2$.

$$A = \\int_{-2}^{2} (4 - y^2)\\,dy = 2\\int_0^2 (4-y^2)\\,dy = 2\\left[4y - \\frac{y^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}$$`
    },
    {
      id: 'area3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integrating in $y$** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $x = y^2 - 1$ and $x = y + 1$.',
            options: ['$\\frac{9}{2}$', '$\\frac{7}{2}$', '$3$', '$\\frac{11}{2}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $y^2 - 1 = y + 1$ → $y^2 - y - 2 = 0$ → $y = -1, 2$. Right: $y+1$, Left: $y^2-1$. $A = \\int_{-1}^2 [(y+1)-(y^2-1)]\\,dy = \\int_{-1}^2 (2+y-y^2)\\,dy = [2y+\\frac{y^2}{2}-\\frac{y^3}{3}]_{-1}^2 = (4+2-\\frac{8}{3})-(-2+\\frac{1}{2}+\\frac{1}{3}) = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2}$.'
          }
        ]
      }
    },
    {
      id: 'area3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. Use $\\int dy$ when curves are functions of $y$ (like $x = y^2$)
2. Right minus left (instead of top minus bottom)
3. Limits are $y$-values when integrating in $y$`
    }
  ]
};
""")

for i in range(4, 8):
    content_map = {
        4: r"""export const calcabAreaCurvesPart4Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area4-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 4 of 7 \u2014 Multiple Regions**

When three or more curves define a region, identify which curves bound each piece of the region separately.`
    },
    {
      id: 'area4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Multi-Region Area** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the total area bounded by $y = x$, $y = 2-x$, and $y = 0$.',
            options: ['$1$', '$2$', '$\\frac{3}{2}$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'The three lines form a triangle with vertices $(0,0)$, $(2,0)$, $(1,1)$. Area = $\\frac{1}{2}(2)(1) = 1$.'
          }
        ]
      }
    },
    {
      id: 'area4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. Sketch the region! Identify all intersection points.
2. Break complex regions into simpler sub-regions if needed.`
    }
  ]
};
""",
        5: r"""export const calcabAreaCurvesPart5Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area5-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 5 of 7 \u2014 Area with Absolute Value**

### Using Absolute Value

$\\int_a^b |f(x)|\\,dx$ gives the total area between $f(x)$ and the $x$-axis (always positive).

### Example

$\\int_0^{2\\pi} |\\sin x|\\,dx = \\int_0^{\\pi} \\sin x\\,dx + \\int_{\\pi}^{2\\pi} (-\\sin x)\\,dx = 2 + 2 = 4$`
    },
    {
      id: 'area5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Total vs Signed Area** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the total area between $y = x^2 - 4$ and the $x$-axis on $[-3, 3]$.',
            options: ['$\\frac{46}{3}$', '$\\frac{32}{3}$', '$2$', '$\\frac{26}{3}$'],
            correctAnswer: 0,
            explanation: '$x^2-4 < 0$ on $(-2,2)$ and $> 0$ outside. Total area = $\\int_{-3}^{-2}(x^2-4)\\,dx + \\int_{-2}^{2}(4-x^2)\\,dx + \\int_2^3(x^2-4)\\,dx = \\frac{4}{3} + \\frac{32}{3} + \\frac{4}{3} + \\frac{4}{3} + \\frac{2}{3} = we need $2[\\frac{x^3}{3}-4x]_2^3 + [4x-\\frac{x^3}{3}]_{-2}^2 = 2(9-12-\\frac{8}{3}+8) + 2(8-\\frac{8}{3}) = 2\\cdot\\frac{7}{3} + \\frac{32}{3} = \\frac{14}{3}+\\frac{32}{3} = \\frac{46}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
- Total area = $\\int |f(x)|\\,dx$ (split where $f$ changes sign)
- Signed area = $\\int f(x)\\,dx$ (can be negative)`
    }
  ]
};
""",
        6: r"""export const calcabAreaCurvesPart6Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area6-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'area6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Area Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The region $R$ is bounded by $y = e^x$, $y = 1$, and $x = 2$. Find the area of $R$.',
            options: ['$e^2 - 3$', '$e^2 - 1$', '$e^2 + 1$', '$e^2 - 2$'],
            correctAnswer: 0,
            explanation: '$e^x = 1$ at $x = 0$. For $x \\in [0,2]$, $e^x \\geq 1$. $A = \\int_0^2 (e^x - 1)\\,dx = [e^x - x]_0^2 = (e^2 - 2) - (1 - 0) = e^2 - 3$.'
          },
          {
            question: 'Find the area between $y = \\sqrt{x}$ and $y = x^2$ for $x \\geq 0$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $\\sqrt{x} = x^2$ at $x = 0$ and $x = 1$. $\\sqrt{x} \\geq x^2$ on $[0,1]$. $A = \\int_0^1 (x^{1/2} - x^2)\\,dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
        7: r"""export const calcabAreaCurvesPart7Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area7-intro',
      type: 'text' as const,
      content: `# Area Between Curves \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**`
    },
    {
      id: 'area7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $y = x^3 - x$ and $y = 0$.',
            options: ['$\\frac{1}{2}$', '$0$', '$\\frac{1}{4}$', '$1$'],
            correctAnswer: 0,
            explanation: 'Roots: $x(x-1)(x+1) = 0$ at $x = -1, 0, 1$. Total area = $\\int_{-1}^0 (x^3-x)\\,dx + \\int_0^1 (x-x^3)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$ (using symmetry).'
          },
          {
            question: 'Set up (but evaluate) the area between $y = \\ln x$, $y = 0$, and $x = e$ using $dy$.',
            options: ['$\\int_0^1 (e - e^y)\\,dy$', '$\\int_0^e \\ln x\\,dx$', '$\\int_1^e (e - x)\\,dx$', '$\\int_0^1 e^y\\,dy$'],
            correctAnswer: 0,
            explanation: 'In terms of $y$: $x = e^y$ is the left boundary. Right boundary: $x = e$. $y$ goes from $0$ to $1$ (since $\\ln e = 1$). $A = \\int_0^1 (e - e^y)\\,dy$.'
          }
        ]
      }
    },
    {
      id: 'area7-summary',
      type: 'text' as const,
      content: `### Area Between Curves \u2014 Complete! \u2705

You have mastered:
- \u2705 Area between two curves ($dx$ and $dy$)
- \u2705 When curves cross (splitting integrals)
- \u2705 Multiple regions and absolute value
- \u2705 Choosing $dx$ vs $dy$ integration`
    }
  ]
};
""",
    }
    write_file(f'calcab-area-between-curves-calcab-part{i}.ts', content_map[i])

###############################################################################
# VOLUMES OF REVOLUTION (7 parts)
###############################################################################

write_file('calcab-volumes-of-revolution-calcab-part1.ts', r"""export const calcabVolumesPart1Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol1-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 1 of 7 — Disk Method**

### Rotating Around the x-axis

When rotating $y = f(x)$ around the $x$-axis, each cross-section is a **disk** with radius $f(x)$:

$$V = \\pi\\int_a^b [f(x)]^2\\,dx$$

### Worked Example

Find the volume when $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is rotated about the $x$-axis.

$$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot 8 = 8\\pi$$`
    },
    {
      id: 'vol1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Disk Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the volume when $y = x^2$ from $x = 0$ to $x = 2$ is rotated about the $x$-axis.',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$\\frac{8\\pi}{3}$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 (x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi[\\frac{x^5}{5}]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Find the volume when $y = \\sin x$ from $x = 0$ to $x = \\pi$ is rotated about the $x$-axis.',
            options: ['$\\frac{\\pi^2}{2}$', '$\\frac{\\pi}{2}$', '$2\\pi$', '$\\pi^2$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^{\\pi} \\sin^2 x\\,dx = \\pi \\cdot \\frac{\\pi}{2} = \\frac{\\pi^2}{2}$ (using the half-angle identity).'
          }
        ]
      }
    },
    {
      id: 'vol1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. **Disk method:** $V = \\pi\\int_a^b [R(x)]^2\\,dx$
2. $R(x)$ is the distance from the curve to the axis of rotation
3. Don't forget to square the radius AND multiply by $\\pi$`
    }
  ]
};
""")

write_file('calcab-volumes-of-revolution-calcab-part2.ts', r"""export const calcabVolumesPart2Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol2-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 2 of 7 — Washer Method**

### When There's a Hole

Rotating a region between two curves creates a **washer** (disk with a hole):

$$V = \\pi\\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)\\,dx$$

- $R(x)$ = outer radius (farther from axis)
- $r(x)$ = inner radius (closer to axis)

### Worked Example

Region between $y = x$ and $y = x^2$, rotated about the $x$-axis ($x \\in [0,1]$).

Outer: $R = x$. Inner: $r = x^2$.

$$V = \\pi\\int_0^1 (x^2 - x^4)\\,dx = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\frac{2\\pi}{15}$$`
    },
    {
      id: 'vol2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Washer Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Region between $y = \\sqrt{x}$ and $y = x$ is rotated about the $x$-axis. Find the volume.',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: 'On $[0,1]$, $\\sqrt{x} \\geq x$. $V = \\pi\\int_0^1 (x - x^2)\\,dx = \\pi[\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\pi(\\frac{1}{2} - \\frac{1}{3}) = \\frac{\\pi}{6}$.'
          },
          {
            question: 'The region bounded by $y = 4 - x^2$ and $y = 0$ is rotated about the $x$-axis. Find the volume.',
            options: ['$\\frac{512\\pi}{15}$', '$\\frac{256\\pi}{15}$', '$\\frac{128\\pi}{5}$', '$16\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_{-2}^{2} (4-x^2)^2\\,dx = 2\\pi\\int_0^2 (16-8x^2+x^4)\\,dx = 2\\pi[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}]_0^2 = 2\\pi(32 - \\frac{64}{3} + \\frac{32}{5}) = \\frac{512\\pi}{15}$.'
          }
        ]
      }
    },
    {
      id: 'vol2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. **Washer method:** $V = \\pi\\int [R^2 - r^2]\\,dx$
2. Identify outer and inner radii carefully
3. The disk method is a special case where $r = 0$`
    }
  ]
};
""")

write_file('calcab-volumes-of-revolution-calcab-part3.ts', r"""export const calcabVolumesPart3Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol3-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 3 of 7 — Rotation About Other Axes**

### Rotating About $y = k$ or $x = k$

When rotating about a line other than the $x$-axis, adjust the radii:

**Rotation about $y = k$ (horizontal line):**
- $R(x) = |f(x) - k|$ (distance from outer curve to axis)
- $r(x) = |g(x) - k|$ (distance from inner curve to axis)

### Worked Example

Rotate the region between $y = x^2$ and $y = 1$ about $y = 2$.

On $[-1, 1]$: Outer radius: $R = 2 - x^2$. Inner radius: $r = 2 - 1 = 1$.

$$V = \\pi\\int_{-1}^{1} [(2-x^2)^2 - 1^2]\\,dx = 2\\pi\\int_0^1 (4-4x^2+x^4 - 1)\\,dx$$
$$= 2\\pi\\int_0^1 (3-4x^2+x^4)\\,dx = 2\\pi\\left[3x - \\frac{4x^3}{3} + \\frac{x^5}{5}\\right]_0^1 = 2\\pi\\left(3 - \\frac{4}{3} + \\frac{1}{5}\\right) = \\frac{56\\pi}{15}$$`
    },
    {
      id: 'vol3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rotation About Other Lines** 🎯',
      exercise: {
        questions: [
          {
            question: 'Region between $y = x$ and $y = x^2$ on $[0,1]$ is rotated about $y = -1$. What are the radii?',
            options: ['$R = x + 1$, $r = x^2 + 1$', '$R = x - 1$, $r = x^2 - 1$', '$R = 1 - x$, $r = 1 - x^2$', '$R = x$, $r = x^2$'],
            correctAnswer: 0,
            explanation: 'Distance from $y = x$ to $y = -1$ is $x - (-1) = x + 1$ (outer). Distance from $y = x^2$ to $y = -1$ is $x^2 + 1$ (inner).'
          }
        ]
      }
    },
    {
      id: 'vol3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. Radius = distance from curve to axis of rotation
2. When axis is below: $R = f(x) - k$
3. When axis is above: $R = k - f(x)$
4. Always think: what's farther (outer) vs closer (inner) to the axis`
    }
  ]
};
""")

write_file('calcab-volumes-of-revolution-calcab-part4.ts', r"""export const calcabVolumesPart4Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol4-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 4 of 7 — Cross-Sectional Volumes**

### Known Cross-Sections

Instead of rotating, we can have cross-sections that are squares, semicircles, equilateral triangles, etc.

$$V = \\int_a^b A(x)\\,dx$$

where $A(x)$ is the area of the cross-section at position $x$.

### Common Cross-Section Formulas

If the base goes from $y = g(x)$ to $y = f(x)$, the side length is $s = f(x) - g(x)$.

| Cross-section | Area Formula |
|--------------|-------------|
| Square | $A = s^2$ |
| Semicircle | $A = \\frac{\\pi s^2}{8}$ |
| Equilateral triangle | $A = \\frac{\\sqrt{3}}{4}s^2$ |
| Isosceles right triangle (leg = side) | $A = \\frac{s^2}{2}$ |

### Worked Example

Base is the region between $y = \\sqrt{x}$ and $y = 0$ on $[0, 4]$. Cross-sections perpendicular to $x$-axis are **squares**.

$s = \\sqrt{x} - 0 = \\sqrt{x}$. $A = (\\sqrt{x})^2 = x$.

$$V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = 8$$`
    },
    {
      id: 'vol4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cross-Section Volumes** 🎯',
      exercise: {
        questions: [
          {
            question: 'Base between $y = x$ and $y = x^2$ on $[0,1]$. Cross-sections perpendicular to x-axis are squares. Find the volume.',
            options: ['$\\frac{1}{30}$', '$\\frac{1}{6}$', '$\\frac{1}{15}$', '$\\frac{2}{15}$'],
            correctAnswer: 0,
            explanation: '$s = x - x^2$. $A = s^2 = (x-x^2)^2 = x^2 - 2x^3 + x^4$. $V = \\int_0^1 (x^2-2x^3+x^4)\\,dx = [\\frac{x^3}{3}-\\frac{x^4}{2}+\\frac{x^5}{5}]_0^1 = \\frac{1}{3}-\\frac{1}{2}+\\frac{1}{5} = \\frac{1}{30}$.'
          },
          {
            question: 'Same base. Cross-sections are equilateral triangles. Find the volume.',
            options: ['$\\frac{\\sqrt{3}}{120}$', '$\\frac{\\sqrt{3}}{30}$', '$\\frac{1}{30}$', '$\\frac{\\sqrt{3}}{60}$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{\\sqrt{3}}{4}(x-x^2)^2$. $V = \\frac{\\sqrt{3}}{4} \\cdot \\frac{1}{30} = \\frac{\\sqrt{3}}{120}$.'
          }
        ]
      }
    },
    {
      id: 'vol4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. Cross-section problems: $V = \\int A(x)\\,dx$
2. Find the side length from the base region, then apply the area formula
3. **This is a common AP free-response topic!**`
    }
  ]
};
""")

for i in range(5, 8):
    cmap = {
        5: r"""export const calcabVolumesPart5Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol5-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 5 of 7 \u2014 Disk/Washer in $y$**

### Rotating About the $y$-axis Using $dy$

$$V = \\pi\\int_c^d [R(y)]^2\\,dy$$

### Worked Example

$y = x^2$ from $y = 0$ to $y = 4$, rotated about the $y$-axis.

$x = \\sqrt{y}$, so $R = \\sqrt{y}$.

$$V = \\pi\\int_0^4 y\\,dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^4 = 8\\pi$$`
    },
    {
      id: 'vol5-quiz1',
      type: 'multiple-choice' as const,
      content: '**y-Axis Rotation** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the volume when $x = y^2$ from $y = 0$ to $y = 2$ is rotated about the $y$-axis.',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 (y^2)^2\\,dy = \\pi\\int_0^2 y^4\\,dy = \\pi[\\frac{y^5}{5}]_0^2 = \\frac{32\\pi}{5}$.'
          }
        ]
      }
    },
    {
      id: 'vol5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
- For $y$-axis rotation, express $x$ as a function of $y$
- Use $\\int dy$ with the same disk/washer formulas`
    }
  ]
};
""",
        6: r"""export const calcabVolumesPart6Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol6-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 6 of 7 \u2014 AP-Style Workshop**`
    },
    {
      id: 'vol6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Volume Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Region between $y = e^x$, $y = 1$, $x = 0$, $x = 1$ rotated about the $x$-axis.',
            options: ['$\\frac{\\pi(e^2 - 3)}{2}$', '$\\pi(e - 1)$', '$\\frac{\\pi(e^2-1)}{2}$', '$\\pi e^2$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1 (e^{2x} - 1)\\,dx = \\pi[\\frac{e^{2x}}{2} - x]_0^1 = \\pi(\\frac{e^2}{2} - 1 - \\frac{1}{2}) = \\frac{\\pi(e^2-3)}{2}$.'
          },
          {
            question: 'Base: region between $y = 1 - x^2$ and $y = 0$. Cross-sections perpendicular to the $x$-axis are semicircles. Set up the volume.',
            options: ['$\\int_{-1}^1 \\frac{\\pi(1-x^2)^2}{8}\\,dx$', '$\\int_{-1}^1 \\frac{\\pi(1-x^2)^2}{2}\\,dx$', '$\\int_{-1}^1 \\pi(1-x^2)^2\\,dx$', '$\\int_{-1}^1 \\frac{(1-x^2)^2}{4}\\,dx$'],
            correctAnswer: 0,
            explanation: 'Diameter $= 1-x^2$, so radius $= \\frac{1-x^2}{2}$. Area of semicircle $= \\frac{\\pi r^2}{2} = \\frac{\\pi(1-x^2)^2}{8}$.'
          }
        ]
      }
    },
    {
      id: 'vol6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
        7: r"""export const calcabVolumesPart7Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol7-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**

| Method | Formula |
|--------|---------|
| Disk | $V = \\pi\\int [R]^2\\,dx$ |
| Washer | $V = \\pi\\int [R^2 - r^2]\\,dx$ |
| Cross-section | $V = \\int A(x)\\,dx$ |`
    },
    {
      id: 'vol7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x^3$ from $x = 0$ to $x = 1$ about the $x$-axis. Find the volume.',
            options: ['$\\frac{\\pi}{7}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{7}$', '$\\frac{\\pi}{3}$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1 x^6\\,dx = \\pi[\\frac{x^7}{7}]_0^1 = \\frac{\\pi}{7}$.'
          },
          {
            question: 'Which method has cross-sections that are rings (annuli)?',
            options: ['Disk', 'Washer', 'Shell', 'Cross-section'],
            correctAnswer: 1,
            explanation: 'The washer method produces ring-shaped cross-sections with outer radius $R$ and inner radius $r$.'
          }
        ]
      }
    },
    {
      id: 'vol7-summary',
      type: 'text' as const,
      content: `### Volumes of Revolution \u2014 Complete! \u2705

You have mastered:
- \u2705 Disk method (single curve rotation)
- \u2705 Washer method (two curves, hole in middle)
- \u2705 Rotation about non-standard axes
- \u2705 Cross-sectional volumes with known shapes`
    }
  ]
};
""",
    }
    write_file(f'calcab-volumes-of-revolution-calcab-part{i}.ts', cmap[i])

print("Optimization (7), Area Between Curves (7), Volumes of Revolution (7) complete!")
print("Total files written: 21")
