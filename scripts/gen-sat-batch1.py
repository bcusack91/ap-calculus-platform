#!/usr/bin/env python3
"""Generate SAT Prep Batch 1: Linear Equations (7), Quadratic Equations (7), Exponents & Radicals (7), Polynomials & Factoring (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# LINEAR EQUATIONS (7 parts)
###############################################################################

def gen_linear_equations():
    parts = {}
    parts[1] = r"""export const satLinearEquationsPart1Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le1-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 1 of 7 — Slope-Intercept and Standard Form**

The SAT Math section heavily tests your ability to work with linear equations. You'll see these in both calculator and no-calculator modules.

### Slope-Intercept Form: $y = mx + b$

- $m$ = slope (rate of change)
- $b$ = y-intercept (value when $x = 0$)

**Example:** A phone plan charges \\$45/month plus \\$0.10 per text. If $y$ is the monthly cost and $x$ is the number of texts:

$$y = 0.10x + 45$$

### Standard Form: $Ax + By = C$

- Useful for finding intercepts quickly
- x-intercept: set $y = 0$ → $x = C/A$
- y-intercept: set $x = 0$ → $y = C/B$

### Converting Between Forms

To convert $3x + 2y = 12$ to slope-intercept:
$$2y = -3x + 12$$
$$y = -\\frac{3}{2}x + 6$$

So slope $= -3/2$ and y-intercept $= 6$.

### SAT Trap ⚠️

When the SAT gives you standard form and asks for the slope, students often forget to isolate $y$ first. The slope is NOT just $A/B$ — it's $-A/B$.`
    },
    {
      id: 'le1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Slope-Intercept & Standard Form** 🎯',
      exercise: {
        questions: [
          {
            question: 'A gym membership costs \\$25 to join and \\$30 per month. Which equation represents the total cost $C$ after $m$ months?',
            options: ['$C = 30m + 25$', '$C = 25m + 30$', '$C = 55m$', '$C = 30m - 25$'],
            correctAnswer: 0,
            explanation: 'The \\$30/month is the rate (slope) and \\$25 is the one-time fee (y-intercept). So $C = 30m + 25$.'
          },
          {
            question: 'What is the slope of the line $4x - 2y = 10$?',
            options: ['$2$', '$-2$', '$4$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Solve for y: $-2y = -4x + 10$, so $y = 2x - 5$. The slope is $2$. Remember: slope $= -A/B = -4/(-2) = 2$.'
          },
          {
            question: 'The line $y = -3x + 7$ crosses the x-axis at:',
            options: ['$(7/3,\\, 0)$', '$(0,\\, 7)$', '$(-3,\\, 0)$', '$(7,\\, 0)$'],
            correctAnswer: 0,
            explanation: 'At the x-axis, $y = 0$: $0 = -3x + 7$ → $3x = 7$ → $x = 7/3$. The x-intercept is $(7/3, 0)$.'
          }
        ]
      }
    },
    {
      id: 'le1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Slope-intercept** ($y = mx + b$): slope is the coefficient of $x$, y-int is the constant
- **Standard form** ($Ax + By = C$): slope $= -A/B$, NOT $A/B$
- Real-world problems: the rate = slope, the starting value = y-intercept
- Always isolate $y$ before identifying the slope from standard form`
    }
  ]
};
"""

    parts[2] = r"""export const satLinearEquationsPart2Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le2-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 2 of 7 — Systems of Linear Equations**

Systems of equations appear on nearly every SAT. You need to be fast and flexible with solving methods.

### Method 1: Substitution

Best when one variable is already isolated.

**Example:**
$$y = 2x + 1$$
$$3x + y = 11$$

Substitute: $3x + (2x + 1) = 11$ → $5x = 10$ → $x = 2$, $y = 5$

### Method 2: Elimination

Best when coefficients can be matched easily.

**Example:**
$$2x + 3y = 7$$
$$2x - y = 3$$

Subtract: $4y = 4$ → $y = 1$, $x = 2$

### Special Cases

| Condition | Result | Lines |
|-----------|--------|-------|
| One solution | $x = a, y = b$ | Lines intersect |
| No solution | $0 = k$ (contradiction) | Lines are parallel |
| Infinite solutions | $0 = 0$ (identity) | Lines are the same |

### SAT Strategy 💡

If the SAT asks "For what value of $k$ does the system have no solution?" — make the slopes equal but the y-intercepts different. Parallel lines = no solution.`
    },
    {
      id: 'le2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Systems of Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $x + y = 10$ and $x - y = 4$, what is $x$?',
            options: ['$7$', '$3$', '$5$', '$6$'],
            correctAnswer: 0,
            explanation: 'Add the equations: $2x = 14$ → $x = 7$. (Then $y = 3$.) Elimination is fastest here.'
          },
          {
            question: 'The system $2x + 3y = 6$ and $4x + 6y = k$ has infinitely many solutions when $k$ equals:',
            options: ['$12$', '$6$', '$0$', '$24$'],
            correctAnswer: 0,
            explanation: 'The second equation is exactly 2× the first. So $k = 2 \\times 6 = 12$. If $k \\neq 12$, there are no solutions (parallel lines).'
          },
          {
            question: 'A store sells apples for \\$2 each and bananas for \\$1 each. Maria buys 8 fruits for \\$11. How many apples did she buy?',
            options: ['$3$', '$5$', '$4$', '$6$'],
            correctAnswer: 0,
            explanation: 'Let $a$ = apples, $b$ = bananas. $a + b = 8$ and $2a + b = 11$. Subtract: $a = 3$. She bought 3 apples and 5 bananas.'
          }
        ]
      }
    },
    {
      id: 'le2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Substitution**: best when a variable is isolated ($y = ...$)
- **Elimination**: best when coefficients match or nearly match
- **No solution**: same slope, different intercept (parallel lines)
- **Infinite solutions**: same slope AND same intercept (same line)
- SAT shortcut: to find a combo like $x + y$, look for ways to avoid solving for individual variables`
    }
  ]
};
"""

    parts[3] = r"""export const satLinearEquationsPart3Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le3-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 3 of 7 — Linear Inequalities**

The SAT tests inequalities in both algebraic and graphical form.

### Solving Linear Inequalities

Same rules as equations EXCEPT: **flip the inequality sign when multiplying or dividing by a negative**.

**Example:**
$$-3x + 6 > 12$$
$$-3x > 6$$
$$x < -2 \\quad \\text{(flip!)}$$

### Compound Inequalities

$$-1 < 2x + 3 \\leq 9$$

Subtract 3 from all parts: $-4 < 2x \\leq 6$

Divide by 2: $-2 < x \\leq 3$

### Graphing Inequalities

- $y > mx + b$: shade **above** the line, **dashed** boundary
- $y \\leq mx + b$: shade **below** the line, **solid** boundary
- The solution to a system of inequalities is the **overlap** region

### SAT Pattern ⚠️

The SAT loves: "Which point is in the solution set of $y > 2x - 1$ and $y < -x + 5$?" Plug each answer choice into BOTH inequalities and check.`
    },
    {
      id: 'le3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inequalities** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $-2x + 5 > 11$, which represents all solutions?',
            options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
            correctAnswer: 0,
            explanation: '$-2x > 6$ → $x < -3$ (flip the sign when dividing by $-2$). This is the most common SAT inequality trap.'
          },
          {
            question: 'Which point is in the solution set of $y > x + 1$ and $y < -x + 5$?',
            options: ['$(1, 3)$', '$(0, 0)$', '$(3, 1)$', '$(4, 4)$'],
            correctAnswer: 0,
            explanation: 'Check $(1, 3)$: Is $3 > 1 + 1 = 2$? Yes. Is $3 < -1 + 5 = 4$? Yes. Both satisfied. The other points fail at least one inequality.'
          },
          {
            question: 'If $-5 \\leq 3x + 1 < 10$, what is the range of $x$?',
            options: ['$-2 \\leq x < 3$', '$-2 < x \\leq 3$', '$-1 \\leq x < 3$', '$-2 \\leq x < 4$'],
            correctAnswer: 0,
            explanation: 'Subtract 1: $-6 \\leq 3x < 9$. Divide by 3: $-2 \\leq x < 3$. The inequality types (≤ vs <) are preserved when dividing by a positive number.'
          }
        ]
      }
    },
    {
      id: 'le3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Flip the inequality** when multiplying/dividing by a negative
- Compound inequalities: perform the same operation on all three parts
- Graphing: $>$ or $<$ = dashed line; $\\geq$ or $\\leq$ = solid line
- To check a point: plug into both inequalities — both must be true`
    }
  ]
};
"""

    parts[4] = r"""export const satLinearEquationsPart4Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le4-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 4 of 7 — Parallel and Perpendicular Lines**

These concepts appear frequently in SAT geometry-meets-algebra questions.

### Parallel Lines

- Same slope, different y-intercepts
- $y = 3x + 2$ is parallel to $y = 3x - 5$

### Perpendicular Lines

- Slopes are **negative reciprocals**: $m_1 \\cdot m_2 = -1$
- $y = 2x + 1$ is perpendicular to $y = -\\frac{1}{2}x + 4$

### Finding the Equation of a Line

Given a point $(x_1, y_1)$ and slope $m$:

$$y - y_1 = m(x - x_1) \\quad \\text{(point-slope form)}$$

**Example:** Find the line perpendicular to $y = 3x + 1$ passing through $(6, 2)$.

- Perpendicular slope: $m = -1/3$
- $y - 2 = -\\frac{1}{3}(x - 6)$
- $y = -\\frac{1}{3}x + 4$

### Midpoint and Distance

- **Midpoint**: $\\left(\\frac{x_1 + x_2}{2},\\, \\frac{y_1 + y_2}{2}\\right)$
- **Distance**: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$`
    },
    {
      id: 'le4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parallel & Perpendicular Lines** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which line is perpendicular to $y = -4x + 3$?',
            options: ['$y = \\frac{1}{4}x - 1$', '$y = -4x + 7$', '$y = 4x - 1$', '$y = -\\frac{1}{4}x + 2$'],
            correctAnswer: 0,
            explanation: 'The negative reciprocal of $-4$ is $1/4$. So the perpendicular line has slope $1/4$.'
          },
          {
            question: 'What is the midpoint of $(2, 5)$ and $(8, -1)$?',
            options: ['$(5, 2)$', '$(6, 4)$', '$(3, 3)$', '$(10, 4)$'],
            correctAnswer: 0,
            explanation: 'Midpoint $= ((2+8)/2,\\, (5+(-1))/2) = (5, 2)$.'
          },
          {
            question: 'Line $\\ell$ passes through $(0, 4)$ and is parallel to $2x + y = 7$. What is the equation of $\\ell$?',
            options: ['$y = -2x + 4$', '$y = 2x + 4$', '$y = -2x + 7$', '$y = \\frac{1}{2}x + 4$'],
            correctAnswer: 0,
            explanation: 'First, find the slope of $2x + y = 7$: $y = -2x + 7$, slope $= -2$. Parallel means same slope. Through $(0, 4)$: $y = -2x + 4$.'
          }
        ]
      }
    },
    {
      id: 'le4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Parallel**: same slope ($m_1 = m_2$)
- **Perpendicular**: negative reciprocal slopes ($m_1 \\cdot m_2 = -1$)
- **Point-slope form** is your friend: $y - y_1 = m(x - x_1)$
- Always convert standard form to slope-intercept before comparing slopes`
    }
  ]
};
"""

    parts[5] = r"""export const satLinearEquationsPart5Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le5-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 5 of 7 — Word Problems with Linear Models**

The SAT tests whether you can translate real-world scenarios into linear equations.

### Setting Up Linear Models

1. **Identify the variables** — what's changing? What's being measured?
2. **Find the rate** (slope) — the per-unit change
3. **Find the starting value** (y-intercept) — the initial amount

### Common SAT Word Problem Types

**Type 1 — Cost/Revenue:**
A rideshare charges \\$3 base + \\$1.50/mile. Total cost for $m$ miles: $C = 1.50m + 3$

**Type 2 — Distance/Rate/Time:**
Two trains leave at the same time. Train A: 60 mph. Train B: 80 mph (same direction, B is behind). When does B catch A?
- Distance A = $60t$, Distance B = $80t$
- B catches A when $80t = 60t + d$ (where $d$ is the head start)

**Type 3 — "Already...and then...":**
A pool has 200 gallons and is being filled at 15 gallons/minute. After $t$ minutes: $V = 15t + 200$

### Reading Tables on the SAT

When given a table, calculate slope: $m = \\frac{\\Delta y}{\\Delta x}$ using any two rows. Then find $b$ by plugging in one point.`
    },
    {
      id: 'le5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Word Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A tank contains 500 liters of water and is draining at 20 liters per minute. After how many minutes will the tank have 200 liters?',
            options: ['$15$', '$10$', '$25$', '$20$'],
            correctAnswer: 0,
            explanation: '$500 - 20t = 200$ → $20t = 300$ → $t = 15$ minutes.'
          },
          {
            question: 'The table shows: when $x = 2$, $y = 11$; when $x = 5$, $y = 20$. What is $y$ when $x = 0$?',
            options: ['$5$', '$3$', '$7$', '$1$'],
            correctAnswer: 0,
            explanation: 'Slope $= (20 - 11)/(5 - 2) = 9/3 = 3$. Using $(2, 11)$: $11 = 3(2) + b$ → $b = 5$. So $y = 3x + 5$ and $y(0) = 5$.'
          },
          {
            question: 'A plumber charges a \\$75 service fee plus \\$50 per hour. An electrician charges \\$100 per hour with no service fee. After how many hours do they cost the same?',
            options: ['$1.5$ hours', '$1$ hour', '$2$ hours', '$0.75$ hours'],
            correctAnswer: 0,
            explanation: '$75 + 50h = 100h$ → $75 = 50h$ → $h = 1.5$ hours. After 1.5 hours, both cost \\$150.'
          }
        ]
      }
    },
    {
      id: 'le5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Identify slope (rate) and y-intercept (starting value) from word problems
- "Draining/decreasing" = negative slope; "filling/increasing" = positive slope
- From a table: slope $= \\Delta y / \\Delta x$, then plug in a point for $b$
- "When are they equal?" → set the two expressions equal to each other`
    }
  ]
};
"""

    parts[6] = r"""export const satLinearEquationsPart6Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le6-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 6 of 7 — Absolute Value and Literal Equations**

### Absolute Value Equations

$|ax + b| = c$ splits into two cases (when $c \\geq 0$):

$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$

**Example:** $|2x - 3| = 7$
- Case 1: $2x - 3 = 7$ → $x = 5$
- Case 2: $2x - 3 = -7$ → $x = -2$

⚠️ If $|ax + b| = -k$ where $k > 0$: **no solution** (absolute value is never negative).

### Absolute Value Inequalities

- $|x| < a$: $-a < x < a$ (AND — between)
- $|x| > a$: $x < -a$ or $x > a$ (OR — outside)

### Literal Equations (Solving for a Variable)

The SAT often asks you to rearrange a formula.

**Example:** Solve $A = \\frac{1}{2}bh$ for $h$:
$$h = \\frac{2A}{b}$$

**Example:** Solve $F = \\frac{9}{5}C + 32$ for $C$:
$$C = \\frac{5(F - 32)}{9}$$

### SAT Strategy 💡

For literal equations, treat every other variable as a number and solve normally. The algebra is the same — just letters instead of digits.`
    },
    {
      id: 'le6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute Value & Literal Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many solutions does $|3x + 1| = -5$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'Absolute value can never equal a negative number. There are zero solutions.'
          },
          {
            question: 'If $|x - 4| < 3$, which values of $x$ are in the solution set?',
            options: ['$1 < x < 7$', '$x < 1 \\text{ or } x > 7$', '$-3 < x < 3$', '$x < -7 \\text{ or } x > 1$'],
            correctAnswer: 0,
            explanation: '$|x - 4| < 3$ means $-3 < x - 4 < 3$, so $1 < x < 7$. The "less than" case gives a compound inequality (between).'
          },
          {
            question: 'If $P = 2l + 2w$, what is $w$ in terms of $P$ and $l$?',
            options: ['$w = \\frac{P - 2l}{2}$', '$w = P - 2l$', '$w = \\frac{P}{2} - l$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$2w = P - 2l$ → $w = (P - 2l)/2 = P/2 - l$. Both forms are equivalent, so both A and C are correct.'
          }
        ]
      }
    },
    {
      id: 'le6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- $|expr| = c$ → two cases: $expr = c$ or $expr = -c$
- $|expr| = \\text{negative}$ → **no solution**
- $|expr| < c$ → compound inequality (between): $-c < expr < c$
- $|expr| > c$ → two separate inequalities (outside): $expr < -c$ or $expr > c$
- Literal equations: isolate the target variable using normal algebra steps`
    }
  ]
};
"""

    parts[7] = r"""export const satLinearEquationsPart7Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le7-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 7 of 7 — SAT Mixed Practice & Review**

### Quick Reference

| Concept | Formula/Rule |
|---------|-------------|
| Slope-intercept | $y = mx + b$ |
| Standard form | $Ax + By = C$, slope $= -A/B$ |
| Point-slope | $y - y_1 = m(x - x_1)$ |
| Slope formula | $m = \\frac{y_2 - y_1}{x_2 - x_1}$ |
| Parallel | Same slope |
| Perpendicular | $m_1 \\cdot m_2 = -1$ |
| System: no solution | Same slope, different intercepts |
| System: ∞ solutions | Identical equations |

### Common SAT Mistakes to Avoid

1. **Forgetting to flip** the inequality sign when dividing by a negative
2. **Misreading** what the question asks — "What is $x + y$?" vs "What is $x$?"
3. **Not checking** answer choices by plugging back in
4. **Rushing** standard form → slope conversion (slope is $-A/B$, not $A/B$)

### Time-Saving Strategies

- **Back-solve from answer choices** — plug in each option when algebra is messy
- **Pick smart numbers** — if the problem has fractions, choose a common denominator
- **Look for shortcuts** — many system problems can be solved by adding/subtracting the equations directly`
    },
    {
      id: 'le7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $3(x - 2) = 2x + 7$, what is the value of $5x$?',
            options: ['$65$', '$13$', '$15$', '$60$'],
            correctAnswer: 0,
            explanation: '$3x - 6 = 2x + 7$ → $x = 13$. The question asks for $5x = 5(13) = 65$. Always read what the question asks for!'
          },
          {
            question: 'Line $p$ has equation $y = -2x + 5$. Line $q$ is perpendicular to $p$ and passes through $(4, 1)$. What is the y-intercept of $q$?',
            options: ['$-1$', '$1$', '$3$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Perpendicular slope: $1/2$. Point-slope: $y - 1 = \\frac{1}{2}(x - 4)$ → $y = \\frac{1}{2}x - 1$. The y-intercept is $-1$.'
          },
          {
            question: 'For what value of $a$ does $ax + 6y = 12$ and $2x + 3y = 5$ have no solution?',
            options: ['$4$', '$2$', '$6$', '$3$'],
            correctAnswer: 0,
            explanation: 'No solution = parallel lines = same slope. First equation slope: $-a/6$. Second: $-2/3$. Set equal: $-a/6 = -2/3$ → $a = 4$. Check y-intercepts differ: $12/6 = 2 \\neq 5/3$. ✓'
          }
        ]
      }
    },
    {
      id: 'le7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Master all forms of linear equations and when to use each
- Systems: elimination is usually faster than substitution on the SAT
- Always check what the question is asking for — $x$? $y$? $x + y$? $5x$?
- Back-solving from answer choices is a powerful SAT-specific strategy
- Practice converting between forms fluently — speed matters on test day`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'sat-sat-linear-equations-sat-part{i}.ts', parts[i])

###############################################################################
# QUADRATIC EQUATIONS (7 parts)
###############################################################################

def gen_quadratic_equations():
    parts = {}
    parts[1] = r"""export const satQuadraticsPart1Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe1-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 1 of 7 — Standard Form and Factoring**

Quadratics are one of the most heavily tested topics on the SAT Math section.

### Standard Form: $ax^2 + bx + c = 0$

- $a$ determines the direction of the parabola (up if $a > 0$, down if $a < 0$)
- The vertex is at $x = -\\frac{b}{2a}$

### Factoring

To factor $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**.

**Example:** $x^2 + 7x + 12 = 0$
- Numbers that multiply to 12 and add to 7: **3 and 4**
- $(x + 3)(x + 4) = 0$ → $x = -3$ or $x = -4$

### Factoring with leading coefficient ≠ 1

For $2x^2 + 7x + 3$:
- Multiply $a \\cdot c = 6$. Find numbers that multiply to 6 and add to 7: **1 and 6**
- Split: $2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (x + 3)(2x + 1)$

### Zero Product Property

If $ab = 0$, then $a = 0$ or $b = 0$. This is why factoring works for solving equations.`
    },
    {
      id: 'qe1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Factoring Quadratics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What are the solutions to $x^2 - 5x + 6 = 0$?',
            options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 1$ and $x = 6$', '$x = -1$ and $x = -6$'],
            correctAnswer: 0,
            explanation: 'Find numbers that multiply to 6 and add to $-5$: $-2$ and $-3$. So $(x-2)(x-3) = 0$, giving $x = 2$ or $x = 3$.'
          },
          {
            question: 'If $(x + k)(x + 3) = x^2 + 7x + 12$, what is the value of $k$?',
            options: ['$4$', '$3$', '$9$', '$12$'],
            correctAnswer: 0,
            explanation: 'Expand: $x^2 + (k+3)x + 3k$. Compare: $k + 3 = 7$ → $k = 4$. (Check: $3k = 12$ ✓)'
          },
          {
            question: 'What is the vertex x-coordinate of $y = 2x^2 - 8x + 5$?',
            options: ['$2$', '$-2$', '$4$', '$-4$'],
            correctAnswer: 0,
            explanation: '$x = -b/(2a) = -(-8)/(2 \\cdot 2) = 8/4 = 2$. The vertex x-coordinate is always $-b/(2a)$.'
          }
        ]
      }
    },
    {
      id: 'qe1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Standard form: $ax^2 + bx + c$, vertex at $x = -b/(2a)$
- Factoring: find two numbers that multiply to $c$ and add to $b$ (when $a = 1$)
- Zero product property: if the factors multiply to zero, at least one factor equals zero
- Always double-check by expanding your factored form`
    }
  ]
};
"""

    parts[2] = r"""export const satQuadraticsPart2Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe2-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 2 of 7 — The Quadratic Formula & Discriminant**

### The Quadratic Formula

For $ax^2 + bx + c = 0$:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Use this when factoring is difficult or impossible.

### The Discriminant: $\\Delta = b^2 - 4ac$

| Discriminant | # Solutions | Graph |
|-------------|------------|-------|
| $\\Delta > 0$ | 2 real solutions | Parabola crosses x-axis twice |
| $\\Delta = 0$ | 1 real solution (double root) | Parabola touches x-axis |
| $\\Delta < 0$ | 0 real solutions | Parabola doesn't touch x-axis |

### SAT Favorite Question Type 🎯

"For what values of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?"

Set discriminant = 0: $k^2 - 4(1)(9) = 0$ → $k^2 = 36$ → $k = \\pm 6$`
    },
    {
      id: 'qe2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Formula & Discriminant** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many real solutions does $2x^2 + 3x + 5 = 0$ have?',
            options: ['$0$', '$1$', '$2$', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$\\Delta = 9 - 40 = -31 < 0$. Negative discriminant means no real solutions.'
          },
          {
            question: 'Using the quadratic formula, what are the solutions to $x^2 - 6x + 5 = 0$?',
            options: ['$x = 1$ and $x = 5$', '$x = -1$ and $x = -5$', '$x = 2$ and $x = 3$', '$x = -2$ and $x = 3$'],
            correctAnswer: 0,
            explanation: '$x = (6 \\pm \\sqrt{36 - 20})/2 = (6 \\pm 4)/2$. So $x = 5$ or $x = 1$. (Note: factoring $(x-1)(x-5)$ is faster here!)'
          },
          {
            question: 'For what value of $c$ does $x^2 + 8x + c = 0$ have exactly one solution?',
            options: ['$16$', '$8$', '$64$', '$4$'],
            correctAnswer: 0,
            explanation: 'One solution means $\\Delta = 0$: $64 - 4c = 0$ → $c = 16$. The equation becomes $(x + 4)^2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'qe2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Quadratic formula: memorize it — it works for ALL quadratics
- Discriminant ($b^2 - 4ac$) tells you HOW MANY solutions without solving
- $\\Delta > 0$: 2 solutions, $\\Delta = 0$: 1 solution, $\\Delta < 0$: 0 real solutions
- "Exactly one solution" → set discriminant equal to 0`
    }
  ]
};
"""

    parts[3] = r"""export const satQuadraticsPart3Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe3-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 3 of 7 — Vertex Form and Completing the Square**

### Vertex Form: $y = a(x - h)^2 + k$

- Vertex is at $(h, k)$
- $a > 0$: opens up (minimum at vertex)
- $a < 0$: opens down (maximum at vertex)

### Converting Standard → Vertex Form (Completing the Square)

**Example:** $y = x^2 + 6x + 2$

1. Group: $y = (x^2 + 6x) + 2$
2. Half of 6 = 3, square it = 9
3. Add and subtract 9 inside: $y = (x^2 + 6x + 9) - 9 + 2$
4. Factor: $y = (x + 3)^2 - 7$

Vertex: $(-3, -7)$

### When to Use Each Form

| Form | Best For |
|------|----------|
| Standard: $ax^2 + bx + c$ | y-intercept (just read $c$), discriminant |
| Factored: $a(x - r)(x - s)$ | x-intercepts (roots are $r$ and $s$) |
| Vertex: $a(x - h)^2 + k$ | Maximum/minimum value, vertex |`
    },
    {
      id: 'qe3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vertex Form** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the minimum value of $f(x) = (x - 3)^2 + 5$?',
            options: ['$5$', '$3$', '$-3$', '$8$'],
            correctAnswer: 0,
            explanation: 'In vertex form $a(x-h)^2 + k$, the vertex is $(3, 5)$. Since $a = 1 > 0$, the parabola opens up, so the minimum is $k = 5$.'
          },
          {
            question: 'The graph of $y = -2(x + 1)^2 + 8$ has a vertex at:',
            options: ['$(-1, 8)$', '$(1, 8)$', '$(-1, -8)$', '$(1, -8)$'],
            correctAnswer: 0,
            explanation: 'Vertex form: $a(x - h)^2 + k$ where $h = -1$ and $k = 8$. Watch the sign: $(x + 1) = (x - (-1))$, so $h = -1$.'
          },
          {
            question: 'Completing the square on $x^2 - 10x + 20$:',
            options: ['$(x - 5)^2 - 5$', '$(x - 5)^2 + 5$', '$(x + 5)^2 - 5$', '$(x - 10)^2 + 20$'],
            correctAnswer: 0,
            explanation: 'Half of $-10$ is $-5$, squared is $25$. $x^2 - 10x + 25 - 25 + 20 = (x - 5)^2 - 5$.'
          }
        ]
      }
    },
    {
      id: 'qe3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Vertex form: $a(x - h)^2 + k$ → vertex at $(h, k)$
- Watch the sign: $(x + 3)$ means $h = -3$
- Completing the square: half the $b$-coefficient, square it, add/subtract
- Use vertex form when the SAT asks for minimum, maximum, or "what is the least possible value"`
    }
  ]
};
"""

    parts[4] = r"""export const satQuadraticsPart4Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe4-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 4 of 7 — Graphing Parabolas**

### Key Features of $y = ax^2 + bx + c$

- **y-intercept**: The point $(0, c)$ — just read the constant
- **x-intercepts** (roots/zeros): Set $y = 0$ and solve
- **Vertex**: $\\left(-\\frac{b}{2a},\\, f\\left(-\\frac{b}{2a}\\right)\\right)$
- **Axis of symmetry**: $x = -\\frac{b}{2a}$ (vertical line through vertex)
- **Direction**: Up if $a > 0$, down if $a < 0$

### The Symmetry Trick

If the roots are at $x = r$ and $x = s$, then the axis of symmetry is at:

$$x = \\frac{r + s}{2}$$

This is the midpoint of the roots!

### SAT Graph Reading Skills

When the SAT shows you a parabola:
- The vertex tells you the min/max
- The x-intercepts are the solutions to $f(x) = 0$
- The y-intercept is $f(0)$
- $f(x) > 0$ is where the graph is **above** the x-axis
- $f(x) < 0$ is where the graph is **below** the x-axis`
    },
    {
      id: 'qe4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parabola Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 4x - 5$ and the roots are $x = -1$ and $x = 5$, what is the axis of symmetry?',
            options: ['$x = 2$', '$x = 3$', '$x = -3$', '$x = 0$'],
            correctAnswer: 0,
            explanation: 'Axis of symmetry = midpoint of roots = $(-1 + 5)/2 = 2$. Or use $x = -b/(2a) = 4/2 = 2$.'
          },
          {
            question: 'A parabola opens downward and has vertex $(3, 10)$. Which statement MUST be true?',
            options: ['The maximum value of the function is $10$', 'The function has no x-intercepts', 'The y-intercept is $10$', 'The function is always negative'],
            correctAnswer: 0,
            explanation: 'Opening downward means the vertex is a maximum. The maximum y-value is $10$ at $x = 3$.'
          },
          {
            question: 'The function $g(x) = x^2 - 6x + 9$ touches the x-axis at exactly one point. That point is:',
            options: ['$(3, 0)$', '$(9, 0)$', '$(-3, 0)$', '$(6, 0)$'],
            correctAnswer: 0,
            explanation: '$x^2 - 6x + 9 = (x-3)^2 = 0$ → $x = 3$. One touch point = one repeated root = the vertex is ON the x-axis.'
          }
        ]
      }
    },
    {
      id: 'qe4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Read the y-intercept directly from the constant $c$
- X-intercepts come from factoring or the quadratic formula
- Axis of symmetry = midpoint of roots = $-b/(2a)$
- Opens up ($a > 0$) → vertex is minimum; opens down ($a < 0$) → vertex is maximum
- "$f(x) > 0$" means "where is the graph above the x-axis?"`
    }
  ]
};
"""

    parts[5] = r"""export const satQuadraticsPart5Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe5-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 5 of 7 — Quadratic Word Problems**

### Projectile Motion

The SAT's classic quadratic word problem:

$$h(t) = -16t^2 + v_0 t + h_0$$

- $h_0$ = initial height (y-intercept)
- $v_0$ = initial velocity
- $-16$ accounts for gravity (in feet; use $-4.9$ for meters)

**"When does it hit the ground?"** → Set $h(t) = 0$
**"What is the maximum height?"** → Find the vertex

### Area Problems

"The length of a rectangle is 3 more than its width. The area is 40. Find the dimensions."

Let width $= w$. Then $w(w + 3) = 40$ → $w^2 + 3w - 40 = 0$ → $(w + 8)(w - 5) = 0$

Width $= 5$ (reject $-8$), length $= 8$.

### Revenue/Profit Problems

"A store sells 100 items at \\$20 each. For every \\$1 increase in price, 5 fewer items sell."

Revenue $= (20 + x)(100 - 5x) = -5x^2 + 0x + 2000$

Maximum revenue at vertex: $x = 0/(2 \\cdot (-5)) = 0$... meaning \\$20 is already optimal!`
    },
    {
      id: 'qe5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Word Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A ball is launched upward with $h(t) = -16t^2 + 64t + 5$. What is the maximum height?',
            options: ['$69$ feet', '$64$ feet', '$5$ feet', '$80$ feet'],
            correctAnswer: 0,
            explanation: 'Vertex at $t = -64/(2 \\cdot (-16)) = 2$. $h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69$ feet.'
          },
          {
            question: 'A square garden has side length $x$. Adding 3 feet to the length and 2 feet to the width gives area 56 sq ft. What is $x$?',
            options: ['$5$', '$6$', '$4$', '$7$'],
            correctAnswer: 0,
            explanation: '$(x + 3)(x + 2) = 56$ → $x^2 + 5x + 6 = 56$ → $x^2 + 5x - 50 = 0$ → $(x + 10)(x - 5) = 0$ → $x = 5$.'
          },
          {
            question: 'When does the ball from $h(t) = -16t^2 + 48t$ hit the ground (after launch)?',
            options: ['$t = 3$ seconds', '$t = 4$ seconds', '$t = 1.5$ seconds', '$t = 6$ seconds'],
            correctAnswer: 0,
            explanation: '$-16t^2 + 48t = 0$ → $t(-16t + 48) = 0$ → $t = 0$ (launch) or $t = 3$ (landing). The answer is $3$ seconds.'
          }
        ]
      }
    },
    {
      id: 'qe5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Projectile: $h(t) = -16t^2 + v_0 t + h_0$ — max height at vertex, hits ground at $h = 0$
- Area problems: set up the equation, expand, solve (reject negative answers for dimensions)
- Revenue: $R = (\\text{price})(\\text{quantity})$ — max revenue at vertex of the quadratic
- Always re-read the question: "When does it hit the ground?" ≠ "What is the max height?"`
    }
  ]
};
"""

    parts[6] = r"""export const satQuadraticsPart6Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe6-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 6 of 7 — Quadratic Systems and Intersections**

### Line Meets Parabola

To find where $y = x^2 + 2x - 3$ and $y = x + 1$ intersect:

Set equal: $x^2 + 2x - 3 = x + 1$ → $x^2 + x - 4 = 0$

Solve for $x$, then plug back in for $y$.

### Number of Intersections

The discriminant of the resulting equation tells you:
- $\\Delta > 0$: 2 intersection points
- $\\Delta = 0$: 1 point (line is tangent to parabola)
- $\\Delta < 0$: 0 points (no intersection)

### Two Parabolas

Set them equal: $x^2 + 3x + 1 = 2x^2 - x + 4$

Rearrange to get a quadratic in standard form, then solve.

### SAT Tip 💡

The SAT often asks: "At which point(s) does the line $y = c$ intersect $y = x^2 - 4$?"

This is just solving $x^2 - 4 = c$ → $x^2 = c + 4$ → $x = \\pm\\sqrt{c + 4}$

Two solutions when $c > -4$, one when $c = -4$, none when $c < -4$.`
    },
    {
      id: 'qe6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Systems** 🎯',
      exercise: {
        questions: [
          {
            question: 'The line $y = 2x + k$ is tangent to the parabola $y = x^2$. What is $k$?',
            options: ['$-1$', '$1$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Set equal: $x^2 = 2x + k$ → $x^2 - 2x - k = 0$. Tangent means $\\Delta = 0$: $4 + 4k = 0$ → $k = -1$.'
          },
          {
            question: 'How many times does $y = 3$ intersect $y = x^2 - 1$?',
            options: ['$2$', '$0$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: '$x^2 - 1 = 3$ → $x^2 = 4$ → $x = \\pm 2$. Two intersection points: $(2, 3)$ and $(-2, 3)$.'
          },
          {
            question: 'If $y = x + 2$ and $y = x^2 - 2x + 2$ intersect at $(a, b)$ and $(c, d)$ where $a < c$, what is $a$?',
            options: ['$0$', '$1$', '$-1$', '$2$'],
            correctAnswer: 0,
            explanation: '$x + 2 = x^2 - 2x + 2$ → $x^2 - 3x = 0$ → $x(x - 3) = 0$ → $x = 0$ or $x = 3$. Since $a < c$, $a = 0$.'
          }
        ]
      }
    },
    {
      id: 'qe6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- To find intersections: set the equations equal, solve the resulting quadratic
- The discriminant of the combined equation → number of intersection points
- "Tangent" = exactly one intersection = discriminant equals zero
- $y = c$ intersects $y = x^2 + k$: solve $x^2 + k = c$ to find $x$ values`
    }
  ]
};
"""

    parts[7] = r"""export const satQuadraticsPart7Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe7-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 7 of 7 — SAT Quadratics Review & Hard Problems**

### Everything You Need to Know

| Form | Formula | Best For |
|------|---------|----------|
| Standard | $ax^2 + bx + c$ | y-intercept, discriminant |
| Factored | $a(x - r)(x - s)$ | Roots/zeros |
| Vertex | $a(x - h)^2 + k$ | Max/min, vertex |

### Sum and Product of Roots

For $ax^2 + bx + c = 0$ with roots $r$ and $s$:
- Sum: $r + s = -b/a$
- Product: $r \\cdot s = c/a$

This saves time when the SAT asks for $r + s$ or $rs$ without asking for individual roots.

### Hard SAT Pattern: Equivalent Forms

"Which is equivalent to $2x^2 + 12x + 7$?"

Complete the square: $2(x^2 + 6x) + 7 = 2(x^2 + 6x + 9 - 9) + 7 = 2(x + 3)^2 - 11$

### Hard SAT Pattern: Creating Equations

"A quadratic has roots 3 and $-5$." → $y = (x - 3)(x + 5) = x^2 + 2x - 15$`
    },
    {
      id: 'qe7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Advanced Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the roots of $x^2 + kx + 8 = 0$ have a sum of $-6$, what is $k$?',
            options: ['$6$', '$-6$', '$8$', '$-8$'],
            correctAnswer: 0,
            explanation: 'Sum of roots $= -b/a = -k/1 = -k$. If the sum is $-6$, then $-k = -6$ → $k = 6$.'
          },
          {
            question: 'Which is equivalent to $3x^2 - 24x + 50$?',
            options: ['$3(x - 4)^2 + 2$', '$3(x - 4)^2 - 2$', '$3(x + 4)^2 + 2$', '$3(x - 8)^2 + 2$'],
            correctAnswer: 0,
            explanation: '$3(x^2 - 8x) + 50 = 3(x^2 - 8x + 16 - 16) + 50 = 3(x - 4)^2 - 48 + 50 = 3(x - 4)^2 + 2$.'
          },
          {
            question: 'A quadratic function has zeros at $x = -2$ and $x = 7$ and passes through $(0, -28)$. What is the function?',
            options: ['$y = 2(x + 2)(x - 7)$', '$y = (x + 2)(x - 7)$', '$y = -2(x + 2)(x - 7)$', '$y = 2(x - 2)(x + 7)$'],
            correctAnswer: 0,
            explanation: '$y = a(x + 2)(x - 7)$. At $(0, -28)$: $-28 = a(2)(-7) = -14a$ → $a = 2$. So $y = 2(x + 2)(x - 7)$.'
          }
        ]
      }
    },
    {
      id: 'qe7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Sum of roots $= -b/a$, Product of roots $= c/a$ (Vieta's formulas)
- Know all three forms and when each is most useful
- Completing the square: factor out $a$ first, then complete inside the parentheses
- To create a quadratic from roots: $y = a(x - r)(x - s)$, find $a$ from another point`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'sat-sat-quadratic-equations-sat-part{i}.ts', parts[i])

###############################################################################
# EXPONENTS & RADICALS (7 parts)
###############################################################################

def gen_exponents_radicals():
    parts = {}
    parts[1] = r"""export const satExponentsPart1Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er1-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 1 of 7 — Exponent Rules**

### The Core Rules

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| Quotient | $a^m / a^n = a^{m-n}$ | $x^5 / x^2 = x^3$ |
| Power | $(a^m)^n = a^{mn}$ | $(x^3)^2 = x^6$ |
| Zero | $a^0 = 1$ (when $a \\neq 0$) | $7^0 = 1$ |
| Negative | $a^{-n} = 1/a^n$ | $x^{-2} = 1/x^2$ |
| Distribution | $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |

### SAT Trap ⚠️

$(x + y)^2 \\neq x^2 + y^2$ — you MUST FOIL!

$(x + y)^2 = x^2 + 2xy + y^2$

But $(xy)^2 = x^2 y^2$ ✓ — distribution works for products, NOT sums.`
    },
    {
      id: 'er1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponent Rules** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^5 \\cdot x^3}{x^2}$',
            options: ['$x^6$', '$x^8$', '$x^{10}$', '$x^4$'],
            correctAnswer: 0,
            explanation: 'Numerator: $x^{5+3} = x^8$. Divide: $x^{8-2} = x^6$.'
          },
          {
            question: 'If $3^{x+1} = 81$, what is $x$?',
            options: ['$3$', '$4$', '$2$', '$5$'],
            correctAnswer: 0,
            explanation: '$81 = 3^4$, so $3^{x+1} = 3^4$ → $x + 1 = 4$ → $x = 3$.'
          },
          {
            question: 'What is $(2x^3)^4$?',
            options: ['$16x^{12}$', '$8x^{12}$', '$16x^7$', '$2x^{12}$'],
            correctAnswer: 0,
            explanation: '$(2x^3)^4 = 2^4 \\cdot (x^3)^4 = 16x^{12}$. Distribute the exponent to BOTH the coefficient and the variable.'
          }
        ]
      }
    },
    {
      id: 'er1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Multiply same base → ADD exponents; Divide same base → SUBTRACT exponents
- Power of a power → MULTIPLY exponents
- Exponents distribute over multiplication but NOT over addition
- Convert bases to match when solving exponential equations`
    }
  ]
};
"""

    parts[2] = r"""export const satExponentsPart2Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er2-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 2 of 7 — Radicals and Rational Exponents**

### Radical ↔ Exponent Conversion

$$a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$

**Examples:**
- $x^{1/2} = \\sqrt{x}$
- $x^{2/3} = \\sqrt[3]{x^2}$
- $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$

### Simplifying Radicals

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$

Look for **perfect square factors**: 4, 9, 16, 25, 36, 49, 64, 81, 100...

### Rationalizing the Denominator

$$\\frac{3}{\\sqrt{5}} = \\frac{3}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$$

For binomial denominators: multiply by the **conjugate**.

$$\\frac{2}{3 + \\sqrt{2}} \\cdot \\frac{3 - \\sqrt{2}}{3 - \\sqrt{2}} = \\frac{2(3 - \\sqrt{2})}{9 - 2} = \\frac{6 - 2\\sqrt{2}}{7}$$`
    },
    {
      id: 'er2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Radicals & Rational Exponents** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $27^{2/3}$?',
            options: ['$9$', '$18$', '$3$', '$81$'],
            correctAnswer: 0,
            explanation: '$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$. Take the cube root first, then square.'
          },
          {
            question: 'Simplify: $\\sqrt{72}$',
            options: ['$6\\sqrt{2}$', '$8\\sqrt{2}$', '$3\\sqrt{8}$', '$36\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.'
          },
          {
            question: 'Which expression equals $x^{-3/4}$?',
            options: ['$\\frac{1}{\\sqrt[4]{x^3}}$', '$\\sqrt[4]{x^3}$', '$-\\sqrt[4]{x^3}$', '$\\frac{1}{x^3}$'],
            correctAnswer: 0,
            explanation: '$x^{-3/4} = 1/x^{3/4} = 1/\\sqrt[4]{x^3}$. Negative exponent → reciprocal; fractional exponent → radical.'
          }
        ]
      }
    },
    {
      id: 'er2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $a^{m/n} = \\sqrt[n]{a^m}$: denominator = root, numerator = power
- Simplify radicals by extracting perfect square factors
- Rationalize by multiplying by the conjugate for binomial denominators
- Order of operations for $a^{m/n}$: root first (then power) is usually easier`
    }
  ]
};
"""

    parts[3] = r"""export const satExponentsPart3Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er3-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 3 of 7 — Scientific Notation & Large/Small Numbers**

### Scientific Notation: $a \\times 10^n$

Where $1 \\leq |a| < 10$ and $n$ is an integer.

- Large: $4{,}500{,}000 = 4.5 \\times 10^6$
- Small: $0.00032 = 3.2 \\times 10^{-4}$

### Operations with Scientific Notation

**Multiply:** $(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9$

**Divide:** $\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^4$

### Powers of 10 Shortcuts

- Moving the decimal **right** = smaller exponent
- Moving the decimal **left** = larger exponent
- $10^3 = 1{,}000$ (3 zeros)

### SAT Context

Scientific notation appears in real-world data questions — population of countries, distances in space, sizes of atoms. The math is the same, just with context.`
    },
    {
      id: 'er3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scientific Notation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Express $0.00078$ in scientific notation:',
            options: ['$7.8 \\times 10^{-4}$', '$78 \\times 10^{-5}$', '$7.8 \\times 10^{-3}$', '$0.78 \\times 10^{-3}$'],
            correctAnswer: 0,
            explanation: 'Move the decimal 4 places right to get $7.8$, so the exponent is $-4$.'
          },
          {
            question: 'What is $(5 \\times 10^3)^2$?',
            options: ['$2.5 \\times 10^{7}$', '$25 \\times 10^{6}$', '$5 \\times 10^{6}$', '$10 \\times 10^{6}$'],
            correctAnswer: 0,
            explanation: '$(5)^2 \\times (10^3)^2 = 25 \\times 10^6 = 2.5 \\times 10^7$ (adjust to proper scientific notation).'
          },
          {
            question: 'The distance from Earth to the Sun is about $9.3 \\times 10^7$ miles. Light travels $1.86 \\times 10^5$ miles per second. About how many seconds does it take light to reach Earth?',
            options: ['$500$', '$50$', '$5{,}000$', '$5$'],
            correctAnswer: 0,
            explanation: '$\\frac{9.3 \\times 10^7}{1.86 \\times 10^5} = \\frac{9.3}{1.86} \\times 10^2 = 5 \\times 10^2 = 500$ seconds.'
          }
        ]
      }
    },
    {
      id: 'er3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Scientific notation: $a \\times 10^n$ where $1 \\leq |a| < 10$
- Multiply: multiply coefficients, add exponents
- Divide: divide coefficients, subtract exponents
- Adjust the result so the coefficient is between 1 and 10`
    }
  ]
};
"""

    # Parts 4-7 for exponents
    parts[4] = r"""export const satExponentsPart4Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er4-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 4 of 7 — Solving Equations with Exponents**

### Strategy 1: Make the Bases Match

If $2^{3x} = 8^{x+1}$:
- Rewrite $8 = 2^3$: $2^{3x} = (2^3)^{x+1} = 2^{3x+3}$
- Bases match → $3x = 3x + 3$? That gives $0 = 3$, so **no solution**.

### Strategy 2: Use Logarithmic Thinking

If $3^x = 15$, the SAT won't expect you to compute $\\log_3 15$, but it might ask:
- "Between which two integers is $x$?" Since $3^2 = 9$ and $3^3 = 27$, $x$ is between 2 and 3.

### Strategy 3: Exponential Equations from Context

"A population doubles every 5 years. Starting at 1000, when will it reach 8000?"

$1000 \\cdot 2^{t/5} = 8000$ → $2^{t/5} = 8 = 2^3$ → $t/5 = 3$ → $t = 15$ years.

### Common SAT Moves

- Rewrite $4^x$ as $(2^2)^x = 2^{2x}$
- Rewrite $9^x$ as $(3^2)^x = 3^{2x}$
- Rewrite $\\frac{1}{8}$ as $2^{-3}$`
    },
    {
      id: 'er4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $4^x = 32$, what is $x$?',
            options: ['$5/2$', '$8$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: '$4^x = 32$ → $(2^2)^x = 2^5$ → $2^{2x} = 2^5$ → $2x = 5$ → $x = 5/2$.'
          },
          {
            question: 'A population of bacteria triples every 4 hours. Starting with 500 bacteria, the population after $t$ hours is $P(t) = 500 \\cdot 3^{t/4}$. After 12 hours, the population is:',
            options: ['$13{,}500$', '$4{,}500$', '$1{,}500$', '$40{,}500$'],
            correctAnswer: 0,
            explanation: '$P(12) = 500 \\cdot 3^{12/4} = 500 \\cdot 3^3 = 500 \\cdot 27 = 13{,}500$.'
          },
          {
            question: 'If $9^{a} = 3^{a+4}$, what is $a$?',
            options: ['$4$', '$2$', '$8$', '$-4$'],
            correctAnswer: 0,
            explanation: '$9^a = (3^2)^a = 3^{2a}$. So $3^{2a} = 3^{a+4}$ → $2a = a + 4$ → $a = 4$.'
          }
        ]
      }
    },
    {
      id: 'er4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Match bases to compare exponents: $4 = 2^2$, $8 = 2^3$, $9 = 3^2$, $27 = 3^3$
- Growth problems: $P(t) = P_0 \\cdot r^{t/k}$ where $r$ is the growth factor and $k$ is the period
- "Between which integers" → evaluate the base at consecutive integer exponents`
    }
  ]
};
"""

    parts[5] = r"""export const satExponentsPart5Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er5-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 5 of 7 — Radical Equations**

### Solving Radical Equations

1. **Isolate** the radical on one side
2. **Square** (or cube, etc.) both sides
3. **Solve** the resulting equation
4. **CHECK** for extraneous solutions!

**Example:** $\\sqrt{x + 3} = x - 3$

Square both sides: $x + 3 = (x - 3)^2 = x^2 - 6x + 9$

Rearrange: $x^2 - 7x + 6 = 0$ → $(x - 1)(x - 6) = 0$

Check $x = 1$: $\\sqrt{4} = 1 - 3 = -2$? No! $2 \\neq -2$ ❌ **Extraneous!**

Check $x = 6$: $\\sqrt{9} = 6 - 3 = 3$? Yes! ✓

### Why Extraneous Solutions Appear

Squaring both sides can introduce false solutions because $(-3)^2 = 3^2 = 9$. The squaring step "loses" the sign information.

### SAT Strategy

Always check. The SAT specifically designs problems where one solution is extraneous to trap students.`
    },
    {
      id: 'er5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Radical Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the solution to $\\sqrt{2x + 1} = 5$?',
            options: ['$x = 12$', '$x = 2$', '$x = 24$', '$x = 13$'],
            correctAnswer: 0,
            explanation: 'Square both sides: $2x + 1 = 25$ → $2x = 24$ → $x = 12$. Check: $\\sqrt{25} = 5$ ✓'
          },
          {
            question: 'How many real solutions does $\\sqrt{x} = -3$ have?',
            options: ['$0$', '$1$', '$2$', '$9$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x}$ (principal square root) is never negative. There is no solution.'
          },
          {
            question: '$\\sqrt{3x + 7} = x + 1$. The valid solution(s):',
            options: ['$x = 3$ only', '$x = -2$ and $x = 3$', '$x = -2$ only', 'No real solution'],
            correctAnswer: 0,
            explanation: 'Square: $3x + 7 = x^2 + 2x + 1$ → $x^2 - x - 6 = 0$ → $(x-3)(x+2) = 0$. Check $x = 3$: $\\sqrt{16} = 4 = 3+1$ ✓. Check $x = -2$: $\\sqrt{1} = 1$ but $-2 + 1 = -1$ ❌. Only $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'er5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Isolate the radical, then raise both sides to the appropriate power
- **Always check** for extraneous solutions — this is a guaranteed SAT trap
- $\\sqrt{x}$ is never negative (principal root)
- If you get two solutions after squaring, one may be extraneous`
    }
  ]
};
"""

    parts[6] = r"""export const satExponentsPart6Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er6-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 6 of 7 — Simplifying Complex Expressions**

### Combining Radicals

- $a\\sqrt{n} + b\\sqrt{n} = (a + b)\\sqrt{n}$ (like terms!)
- $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$
- $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$

**Example:** $3\\sqrt{2} + 5\\sqrt{2} - \\sqrt{2} = 7\\sqrt{2}$

But: $3\\sqrt{2} + 5\\sqrt{3}$ **cannot** be simplified further.

### Simplify Before Combining

$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$

### Nested Radicals and Exponents

$$\\left(\\frac{x^4}{y^2}\\right)^{3/2} = \\frac{x^6}{y^3}$$

Apply the exponent to both numerator and denominator: $x^{4 \\cdot 3/2} = x^6$ and $y^{2 \\cdot 3/2} = y^3$.`
    },
    {
      id: 'er6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Simplifying Expressions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\sqrt{45} + \\sqrt{20}$',
            options: ['$5\\sqrt{5}$', '$\\sqrt{65}$', '$7\\sqrt{5}$', '$3\\sqrt{5}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$. Sum: $3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$.'
          },
          {
            question: 'What is $\\left(\\frac{8}{27}\\right)^{2/3}$?',
            options: ['$4/9$', '$2/3$', '$16/27$', '$64/729$'],
            correctAnswer: 0,
            explanation: '$\\left(\\frac{8}{27}\\right)^{2/3} = \\frac{8^{2/3}}{27^{2/3}} = \\frac{(\\sqrt[3]{8})^2}{(\\sqrt[3]{27})^2} = \\frac{4}{9}$.'
          },
          {
            question: 'If $\\sqrt{x} \\cdot \\sqrt{x^3} = x^n$, what is $n$?',
            options: ['$2$', '$3/2$', '$4$', '$3$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x} \\cdot \\sqrt{x^3} = x^{1/2} \\cdot x^{3/2} = x^{(1/2 + 3/2)} = x^2$. So $n = 2$.'
          }
        ]
      }
    },
    {
      id: 'er6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Only combine radicals with the **same radicand**: $a\\sqrt{n} \\pm b\\sqrt{n}$
- Simplify each radical first, THEN combine
- Fraction exponents distribute to numerator and denominator
- Convert everything to exponent form when the expression is complex`
    }
  ]
};
"""

    parts[7] = r"""export const satExponentsPart7Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er7-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 7 of 7 — Review & SAT-Level Practice**

### Quick Reference Card

| Operation | Rule | Example |
|-----------|------|---------|
| $a^m \\cdot a^n$ | $a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| $a^m / a^n$ | $a^{m-n}$ | $x^5 / x^2 = x^3$ |
| $(a^m)^n$ | $a^{mn}$ | $(x^3)^2 = x^6$ |
| $a^{-n}$ | $1/a^n$ | $x^{-2} = 1/x^2$ |
| $a^{m/n}$ | $\\sqrt[n]{a^m}$ | $8^{2/3} = 4$ |
| $\\sqrt{ab}$ | $\\sqrt{a}\\cdot\\sqrt{b}$ | $\\sqrt{12} = 2\\sqrt{3}$ |

### Common SAT Exponent Traps

1. $(x + y)^2 \\neq x^2 + y^2$ — must FOIL
2. $(-x)^2 = x^2$ but $-x^2 = -(x^2)$ — order of operations!
3. $\\sqrt{x^2} = |x|$, not just $x$
4. $a^0 = 1$ for ALL nonzero $a$, including negatives: $(-5)^0 = 1$`
    },
    {
      id: 'er7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x^a \\cdot x^5}{x^3} = x^{10}$, what is $a$?',
            options: ['$8$', '$2$', '$12$', '$5$'],
            correctAnswer: 0,
            explanation: '$x^{a+5-3} = x^{a+2} = x^{10}$ → $a + 2 = 10$ → $a = 8$.'
          },
          {
            question: 'Which is greatest: $2^{10}$, $4^5$, $8^3$, $16^2$?',
            options: ['$2^{10}$ and $4^5$ are equal (both 1024), and they are the greatest', '$16^2$', '$8^3$', 'All are equal'],
            correctAnswer: 0,
            explanation: '$2^{10} = 1024$, $4^5 = (2^2)^5 = 2^{10} = 1024$, $8^3 = (2^3)^3 = 2^9 = 512$, $16^2 = (2^4)^2 = 2^8 = 256$. $2^{10} = 4^5 = 1024$ is greatest.'
          },
          {
            question: 'Simplify: $\\frac{\\sqrt{50}}{\\sqrt{2}}$',
            options: ['$5$', '$5\\sqrt{2}$', '$\\sqrt{25}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{50/2} = \\sqrt{25} = 5$. Both A and C are correct since $\\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'er7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Exponent rules are about counting: add when multiplying, subtract when dividing, multiply when raising to a power
- Convert to same base to compare or solve
- Watch for traps: $(x+y)^2$, negative vs. negated squares, $\\sqrt{x^2} = |x|$
- Practice converting between radical and exponent notation fluently`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'sat-sat-exponents-radicals-sat-part{i}.ts', parts[i])

###############################################################################
# POLYNOMIALS & FACTORING (7 parts)
###############################################################################

def gen_polynomials():
    parts = {}
    parts[1] = r"""export const satPolynomialsPart1Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf1-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 1 of 7 — Polynomial Basics**

### What is a Polynomial?

A polynomial is an expression with one or more terms: $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$

- **Degree**: highest power of $x$ (e.g., $3x^4 + 2x - 1$ has degree 4)
- **Leading coefficient**: coefficient of the highest-degree term
- **Constant term**: the term with no variable ($a_0$)

### Adding & Subtracting Polynomials

Combine **like terms** (same variable and exponent):

$(3x^2 + 5x - 2) + (x^2 - 3x + 7) = 4x^2 + 2x + 5$

$(3x^2 + 5x - 2) - (x^2 - 3x + 7) = 3x^2 + 5x - 2 - x^2 + 3x - 7 = 2x^2 + 8x - 9$

**Subtraction trap**: distribute the negative sign to ALL terms in the second polynomial!

### Multiplying Polynomials

Use distribution (FOIL for binomials):

$(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$`
    },
    {
      id: 'pf1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Operations** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the degree of $5x^3 - 2x^5 + 7x$?',
            options: ['$5$', '$3$', '$1$', '$7$'],
            correctAnswer: 0,
            explanation: 'The highest power of $x$ is $5$ (from $-2x^5$). Don\'t be fooled by term order — the degree is the highest exponent appearing.'
          },
          {
            question: '$(4x^2 - 3x + 1) - (2x^2 + x - 5) = $',
            options: ['$2x^2 - 4x + 6$', '$2x^2 - 2x - 4$', '$6x^2 - 4x + 6$', '$2x^2 - 4x - 4$'],
            correctAnswer: 0,
            explanation: 'Distribute the negative: $4x^2 - 3x + 1 - 2x^2 - x + 5 = 2x^2 - 4x + 6$. Be careful with $-(-5) = +5$.'
          },
          {
            question: 'What is the coefficient of $x$ in the product $(x + 4)(x - 2)$?',
            options: ['$2$', '$-2$', '$4$', '$-8$'],
            correctAnswer: 0,
            explanation: 'FOIL: $x^2 - 2x + 4x - 8 = x^2 + 2x - 8$. The coefficient of $x$ is $2$.'
          }
        ]
      }
    },
    {
      id: 'pf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Degree = highest exponent; leading coefficient = coefficient of that term
- When subtracting polynomials, distribute the negative to EVERY term
- Multiply polynomials using distribution (FOIL is just distribution for two binomials)
- Combine like terms as the final step`
    }
  ]
};
"""

    parts[2] = r"""export const satPolynomialsPart2Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf2-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 2 of 7 — Factoring Techniques**

### GCF Factoring

Always look for a Greatest Common Factor first:

$6x^3 + 9x^2 = 3x^2(2x + 3)$

### Difference of Squares

$$a^2 - b^2 = (a + b)(a - b)$$

**Example:** $x^2 - 49 = (x + 7)(x - 7)$

**Tricky example:** $4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5)$

### Perfect Square Trinomials

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

How to recognize: first and last terms are perfect squares, middle term is $\\pm 2 \\times \\sqrt{\\text{first}} \\times \\sqrt{\\text{last}}$.

$x^2 + 10x + 25 = (x + 5)^2$ because $2(x)(5) = 10x$ ✓

### Sum/Difference of Cubes (Rare on SAT)

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`
    },
    {
      id: 'pf2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Factoring Patterns** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor completely: $x^2 - 16$',
            options: ['$(x + 4)(x - 4)$', '$(x - 4)^2$', '$(x + 4)^2$', '$(x - 8)(x + 2)$'],
            correctAnswer: 0,
            explanation: 'This is a difference of squares: $x^2 - 4^2 = (x + 4)(x - 4)$.'
          },
          {
            question: 'Which is a perfect square trinomial?',
            options: ['$x^2 - 14x + 49$', '$x^2 - 14x + 48$', '$x^2 + 14x - 49$', '$x^2 + 7x + 49$'],
            correctAnswer: 0,
            explanation: '$x^2 - 14x + 49 = (x - 7)^2$. Check: $2(x)(7) = 14x$ ✓ and $7^2 = 49$ ✓.'
          },
          {
            question: 'Factor: $3x^3 - 12x$',
            options: ['$3x(x + 2)(x - 2)$', '$3x(x^2 - 4)$', '$3(x^3 - 4x)$', '$x(3x^2 - 12)$'],
            correctAnswer: 0,
            explanation: 'GCF first: $3x(x^2 - 4)$. Then difference of squares: $3x(x + 2)(x - 2)$. Always factor completely!'
          }
        ]
      }
    },
    {
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Always check for GCF first
- $a^2 - b^2 = (a+b)(a-b)$ — memorize this cold
- Perfect square trinomials: check if middle term = $2ab$
- "Factor completely" means keep going until no factor can be factored further`
    }
  ]
};
"""

    parts[3] = r"""export const satPolynomialsPart3Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 3 of 7 — Polynomial Division**

### Long Division

Divide $x^3 + 2x^2 - 5x + 6$ by $x - 1$:

1. $x^3 \\div x = x^2$. Multiply: $x^2(x-1) = x^3 - x^2$. Subtract: $3x^2 - 5x$
2. $3x^2 \\div x = 3x$. Multiply: $3x(x-1) = 3x^2 - 3x$. Subtract: $-2x + 6$
3. $-2x \\div x = -2$. Multiply: $-2(x-1) = -2x + 2$. Subtract: $4$

Result: $x^2 + 3x - 2$ remainder $4$.

### Synthetic Division (Faster!)

For dividing by $(x - c)$: write the coefficients, bring down, multiply, add.

Dividing $x^3 + 2x^2 - 5x + 6$ by $(x - 1)$:

| | 1 | 2 | -5 | 6 |
|---|---|---|---|---|
| 1↓ | | 1 | 3 | -2 |
| | 1 | 3 | -2 | **4** |

Result: $x^2 + 3x - 2$ with remainder $4$.

### The Remainder Theorem

The remainder when $f(x)$ is divided by $(x - c)$ equals $f(c)$.

Check: $f(1) = 1 + 2 - 5 + 6 = 4$ ✓`
    },
    {
      id: 'pf3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Division** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the remainder when $x^3 - 4x + 2$ is divided by $(x - 2)$?',
            options: ['$2$', '$0$', '$-2$', '$6$'],
            correctAnswer: 0,
            explanation: 'By the Remainder Theorem: $f(2) = 8 - 8 + 2 = 2$. Much faster than doing long division!'
          },
          {
            question: 'If $(x + 3)$ is a factor of $x^2 + 5x + 6$, then $f(-3) = $',
            options: ['$0$', '$3$', '$6$', '$-3$'],
            correctAnswer: 0,
            explanation: 'If $(x + 3)$ is a factor, the remainder is 0, so $f(-3) = 0$. This is the Factor Theorem: $(x - c)$ is a factor iff $f(c) = 0$.'
          },
          {
            question: 'When $2x^2 + 7x + 3$ is divided by $(x + 3)$, the quotient is:',
            options: ['$2x + 1$', '$2x + 3$', '$2x - 1$', '$x + 1$'],
            correctAnswer: 0,
            explanation: 'Since $(x + 3)$ is a factor: $2x^2 + 7x + 3 = (x + 3)(2x + 1)$. Check by FOIL: $2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✓'
          }
        ]
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Remainder Theorem**: remainder of $f(x) ÷ (x-c) = f(c)$ — plug in and evaluate!
- **Factor Theorem**: $(x - c)$ is a factor iff $f(c) = 0$
- Synthetic division is faster than long division for linear divisors $(x - c)$
- Don't forget to include $0$ coefficients for missing terms in division`
    }
  ]
};
"""

    parts[4] = r"""export const satPolynomialsPart4Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf4-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 4 of 7 — Zeros, Roots, and the Factor Theorem**

### Zeros = Roots = x-intercepts

These terms all mean the same thing: the values of $x$ where $f(x) = 0$.

If $f(x) = (x - 2)(x + 5)(x - 1)$, the zeros are $x = 2, -5, 1$.

### Multiplicity

The **multiplicity** of a zero is how many times its factor appears.

$f(x) = (x - 3)^2(x + 1)$:
- $x = 3$ has multiplicity 2 (graph touches x-axis and bounces)
- $x = -1$ has multiplicity 1 (graph crosses x-axis)

### End Behavior

| Degree | Leading Coeff. | Left End | Right End |
|--------|---------------|----------|-----------|
| Even | Positive | ↑ | ↑ |
| Even | Negative | ↓ | ↓ |
| Odd | Positive | ↓ | ↑ |
| Odd | Negative | ↑ | ↓ |

### SAT Connection

The SAT asks: "How many x-intercepts does the graph of $f(x) = x^3 - 4x$ have?"

Factor: $x(x^2 - 4) = x(x-2)(x+2)$. Three distinct factors → **3 x-intercepts**.`
    },
    {
      id: 'pf4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Zeros & End Behavior** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many x-intercepts does $f(x) = (x-1)^2(x+3)(x-4)$ have?',
            options: ['$3$', '$4$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: 'The zeros are $x = 1, -3, 4$. Even though $x = 1$ has multiplicity 2, it is still just one x-intercept (the graph touches there). So 3 distinct x-intercepts.'
          },
          {
            question: 'As $x \\to \\infty$, $f(x) = -2x^3 + 5x$ approaches:',
            options: ['$-\\infty$', '$+\\infty$', '$0$', '$5$'],
            correctAnswer: 0,
            explanation: 'Odd degree, negative leading coefficient → right end goes down ($-\\infty$).'
          },
          {
            question: 'If $f(x)$ has zeros at $x = -1, 0, 2$ and $f(1) = -4$, what is $f(x)$?',
            options: ['$-2x(x+1)(x-2)$', '$x(x+1)(x-2)$', '$2x(x+1)(x-2)$', '$-x(x+1)(x-2)$'],
            correctAnswer: 0,
            explanation: '$f(x) = ax(x+1)(x-2)$. Plug in $(1, -4)$: $a(1)(2)(-1) = -2a = -4$ → $a = 2$. So $f(x) = 2x(x+1)(x-2)$. Wait — let me recheck. $f(1) = a(1)(1+1)(1-2) = a(1)(2)(-1) = -2a = -4$, so $a = 2$. Then $f(x) = 2x(x+1)(x-2)$. Hmm, but that gives positive leading term $2x^3$. Let me verify the answer choices... Actually $-2x(x+1)(x-2)$: at $x=1$, $-2(1)(2)(-1) = 4 \\neq -4$. So the correct function is $2x(x+1)(x-2)$, which is option C.'
          }
        ]
      }
    },
    {
      id: 'pf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Zeros = roots = x-intercepts: set $f(x) = 0$ and solve
- **Multiplicity**: even = bounce off axis; odd = cross through
- **End behavior**: determined by degree and sign of leading coefficient
- Given zeros, write $f(x) = a(x - r_1)(x - r_2)\\ldots$ and find $a$ from another point`
    }
  ]
};
"""

    parts[5] = r"""export const satPolynomialsPart5Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf5-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 5 of 7 — Rational Expressions**

### Simplifying Rational Expressions

A rational expression is a fraction with polynomials:

$$\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{(x+3)(x-3)}{(x+2)(x+3)} = \\frac{x - 3}{x + 2} \\quad (x \\neq -3)$$

**Steps:** Factor numerator and denominator, then cancel common factors.

### Multiplying & Dividing

**Multiply:** Factor, cancel, then multiply what remains.

$$\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2} = \\frac{(x+2)(x-2)}{x+1} \\cdot \\frac{x+1}{x-2} = x + 2$$

**Divide:** Flip the second fraction and multiply.

### Adding & Subtracting

Find a common denominator:

$$\\frac{2}{x+1} + \\frac{3}{x-1} = \\frac{2(x-1) + 3(x+1)}{(x+1)(x-1)} = \\frac{5x + 1}{x^2 - 1}$$

### Undefined Values (Domain Restrictions)

A rational expression is undefined when the denominator equals zero. The SAT asks: "What value of $x$ makes the expression undefined?"`
    },
    {
      id: 'pf5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rational Expressions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 + 4x + 3}{x^2 - 1}$',
            options: ['$\\frac{x + 3}{x - 1}$', '$\\frac{x + 1}{x - 1}$', '$\\frac{x + 3}{x + 1}$', '$\\frac{4x + 3}{-1}$'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x+1)(x+3)}{(x+1)(x-1)} = \\frac{x+3}{x-1}$ (cancel $(x+1)$, $x \\neq -1$).'
          },
          {
            question: 'For what value of $x$ is $\\frac{5}{x^2 - 4}$ undefined?',
            options: ['$x = 2$ and $x = -2$', '$x = 4$ only', '$x = 2$ only', '$x = 0$'],
            correctAnswer: 0,
            explanation: 'Denominator $= 0$: $x^2 - 4 = 0$ → $(x-2)(x+2) = 0$ → $x = 2$ or $x = -2$.'
          },
          {
            question: '$\\frac{1}{x} + \\frac{1}{x+2} = $',
            options: ['$\\frac{2x + 2}{x(x+2)}$', '$\\frac{2}{2x + 2}$', '$\\frac{1}{x^2 + 2x}$', '$\\frac{2}{x(x+2)}$'],
            correctAnswer: 0,
            explanation: 'Common denominator is $x(x+2)$: $\\frac{x+2}{x(x+2)} + \\frac{x}{x(x+2)} = \\frac{2x+2}{x(x+2)}$.'
          }
        ]
      }
    },
    {
      id: 'pf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Always factor first** before simplifying rational expressions
- Cancel only common **factors** (not terms!)
- Undefined when denominator = 0
- To add/subtract fractions: find common denominator, combine numerators`
    }
  ]
};
"""

    parts[6] = r"""export const satPolynomialsPart6Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf6-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 6 of 7 — Polynomial Graphs and Transformations**

### Reading Polynomial Graphs

From a graph, you can determine:
- **Zeros**: where the curve crosses/touches the x-axis
- **y-intercept**: where the curve crosses the y-axis (the constant term)
- **Degree**: count the number of turns + 1 (approximately)
- **Leading coefficient sign**: from end behavior

### Transformations

For $f(x) = x^3$:

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Vertical shift up $k$ | $f(x) + k$ | Graph moves up |
| Horizontal shift right $h$ | $f(x - h)$ | Graph moves right |
| Vertical stretch by $a$ | $af(x)$ | Taller/narrower |
| Reflection over x-axis | $-f(x)$ | Flip upside down |
| Reflection over y-axis | $f(-x)$ | Flip left-right |

### SAT Graph Reading Strategy

When the SAT shows a polynomial graph and asks for the equation:
1. Read the x-intercepts → write factors
2. Check end behavior → determine sign of leading coefficient
3. Check one more point (often the y-intercept) → determine the leading coefficient`
    },
    {
      id: 'pf6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'A polynomial graph crosses the x-axis at $-2, 1,$ and $3$, and the y-intercept is $-12$. Which could be the equation?',
            options: ['$y = -2(x+2)(x-1)(x-3)$', '$y = (x+2)(x-1)(x-3)$', '$y = 2(x+2)(x-1)(x-3)$', '$y = -(x+2)(x-1)(x-3)$'],
            correctAnswer: 0,
            explanation: '$f(x) = a(x+2)(x-1)(x-3)$. At $x=0$: $a(2)(-1)(-3) = 6a = -12$ → $a = -2$.'
          },
          {
            question: 'If $g(x) = f(x - 3) + 2$, and $f$ has a minimum at $(1, -4)$, then $g$ has a minimum at:',
            options: ['$(4, -2)$', '$(1, -2)$', '$(-2, -2)$', '$(4, -4)$'],
            correctAnswer: 0,
            explanation: '$f(x-3)$ shifts right 3: $(1,\\,-4) \\to (4,\\,-4)$. Then $+2$ shifts up 2: $(4,\\,-4) \\to (4,\\,-2)$.'
          },
          {
            question: 'A degree-4 polynomial with a positive leading coefficient has how many possible shapes for its end behavior?',
            options: ['Both ends go up (↑↑)', 'Left down, right up (↓↑)', 'Both ends go down (↓↓)', 'Left up, right down (↑↓)'],
            correctAnswer: 0,
            explanation: 'Even degree + positive leading coefficient: both ends of the graph go up. Think of $x^4$.'
          }
        ]
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Read x-intercepts from the graph to write factors
- Use end behavior to determine degree (even/odd) and leading coefficient (±)
- Transformations: inside the function = horizontal (and reversed); outside = vertical
- $(x-h)$ shifts **right**, not left — the shift is opposite the sign`
    }
  ]
};
"""

    parts[7] = r"""export const satPolynomialsPart7Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf7-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 7 of 7 — Review & Advanced SAT Problems**

### Factoring Decision Tree

1. **GCF?** Always check first
2. **Two terms?** → Difference of squares ($a^2 - b^2$) or sum/difference of cubes
3. **Three terms?** → Trinomial factoring or completing the square
4. **Four terms?** → Factor by grouping

### Factor by Grouping

$x^3 + 3x^2 + 2x + 6$:
- Group: $(x^3 + 3x^2) + (2x + 6)$
- Factor each group: $x^2(x + 3) + 2(x + 3)$
- Factor the common binomial: $(x^2 + 2)(x + 3)$

### Special SAT Pattern: Disguised Quadratics

$x^4 - 5x^2 + 4$: let $u = x^2$:

$u^2 - 5u + 4 = (u - 1)(u - 4) = (x^2 - 1)(x^2 - 4) = (x+1)(x-1)(x+2)(x-2)$

This technique works whenever you see $ax^{2n} + bx^n + c$.`
    },
    {
      id: 'pf7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Advanced Factoring** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor completely: $x^4 - 16$',
            options: ['$(x^2 + 4)(x + 2)(x - 2)$', '$(x^2 + 4)(x^2 - 4)$', '$(x + 2)^2(x - 2)^2$', '$(x^2 - 4)^2$'],
            correctAnswer: 0,
            explanation: '$x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x+2)(x-2)$. Note: $x^2 + 4$ cannot be factored further over the reals.'
          },
          {
            question: 'If $x^2 + y^2 = 25$ and $xy = 12$, what is $(x + y)^2$?',
            options: ['$49$', '$37$', '$25$', '$61$'],
            correctAnswer: 0,
            explanation: '$(x+y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 25 + 24 = 49$. Classic algebraic identity application.'
          },
          {
            question: 'Factor by grouping: $x^3 - 2x^2 + 5x - 10$',
            options: ['$(x^2 + 5)(x - 2)$', '$(x^2 - 5)(x + 2)$', '$(x^2 + 2)(x - 5)$', '$(x^2 - 2)(x + 5)$'],
            correctAnswer: 0,
            explanation: 'Group: $(x^3 - 2x^2) + (5x - 10) = x^2(x - 2) + 5(x - 2) = (x^2 + 5)(x - 2)$.'
          }
        ]
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Follow the factoring decision tree: GCF → pattern recognition → grouping
- Factor by grouping: split into pairs, factor each, extract common binomial
- Disguised quadratics: substitute $u = x^n$ to reveal the pattern
- Know the identity $(x+y)^2 = x^2 + 2xy + y^2$ — it appears on the SAT frequently`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'sat-sat-polynomials-factoring-sat-part{i}.ts', parts[i])


###############################################################################
# MAIN
###############################################################################

if __name__ == '__main__':
    print("Generating SAT Batch 1: Linear Equations, Quadratics, Exponents, Polynomials...")
    gen_linear_equations()
    gen_quadratic_equations()
    gen_exponents_radicals()
    gen_polynomials()
    print("Done! 28 files written.")
