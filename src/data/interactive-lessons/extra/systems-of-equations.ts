import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Systems of Equations (AP Precalculus).
 * Registry key: 'systems-of-equations' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys1-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 1 of 7 — What Is a System & What Does a Solution Mean?**

---

### Topics in This Part

| Section |
|---------|
| What Is a System of Equations? |
| Solutions as Intersection Points |
| Checking a Candidate Solution |
| Counting Solutions Graphically |

> 🔑 **Key Concept:** A *system* is two or more equations considered **at the same time**. A **solution** is an ordered pair (or triple) that makes **every** equation true at once — geometrically, a point where all the graphs cross.`,
      },
      {
        id: 'sys1-what',
        type: 'text' as const,
        content: `## What Is a System of Equations?

A **system of equations** is a set of equations sharing the same variables. For two variables, it usually looks like:

$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$

We want the values of $x$ and $y$ that satisfy **both** equations simultaneously.

### A first example

$$\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$$

The pair $(3, 2)$ works because:
- $3 + 2 = 5$ ✓
- $3 - 2 = 1$ ✓

No other pair makes both true, so $(3, 2)$ is **the** solution.

> 💡 One equation in two variables has *infinitely many* solutions (a whole line). Pairing it with a second equation usually pins the answer down to a single point.`,
      },
      {
        id: 'sys1-intersection',
        type: 'text' as const,
        content: `## Solutions Are Intersection Points

Each linear equation graphs as a **line**. The solution of the system is exactly where those lines **cross**.

| System graph | What it means |
|--------------|---------------|
| Lines cross at one point | **One** solution |
| Lines are parallel (never meet) | **No** solution |
| Lines are identical (lie on top of each other) | **Infinitely many** solutions |

For $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$, the two lines intersect at $(3, 2)$ — a single crossing, so exactly one solution.

> 🔑 **Big Idea:** "Solve the system" and "find where the graphs intersect" are the **same task** stated two ways.`,
      },
      {
        id: 'sys1-meaning-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does it mean for $(x, y)$ to be a solution of a system of two equations?',
              options: [
                'It satisfies both equations at the same time',
                'It satisfies at least one of the equations',
                'It satisfies the first equation only',
                'It is the average of the two right-hand sides',
              ],
              correctAnswer: 0,
              explanation: 'A solution of a system must make every equation true simultaneously. Geometrically, it is a point that lies on both graphs.',
            },
            {
              question: 'Two distinct lines that never intersect describe a system with:',
              options: ['No solution', 'Exactly one solution', 'Exactly two solutions', 'Infinitely many solutions'],
              correctAnswer: 0,
              explanation: 'Distinct lines that never meet are parallel. With no intersection point, there is no $(x, y)$ on both lines, so the system has no solution.',
            },
          ],
        },
      },
      {
        id: 'sys1-verify-drill',
        type: 'input-boxes' as const,
        content: `**Verify a Candidate** 🧮

To check whether a pair solves a system, substitute it into **both** equations. Use the system
$$\\begin{cases} 2x + y = 8 \\\\ x - y = 1 \\end{cases}$$

**1)** Substitute $(3, 2)$ into $2x + y$. What value do you get?
**2)** Substitute $(3, 2)$ into $x - y$. What value do you get?
**3)** Is $(3, 2)$ a solution of the system? Enter **1** for yes, **0** for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '1', '1'],
          hint1: '$2x + y = 2(3) + 2 = 6 + 2 = 8$. The first equation needs $8$, so it checks.',
          hint2: '$x - y = 3 - 2 = 1$. The second equation needs $1$, so it checks too.',
          hint3: 'Both equations are satisfied ($8 = 8$ and $1 = 1$), so $(3, 2)$ IS a solution — enter $1$.',
          explanation: '$2(3)+2 = 8$ ✓ and $3-2 = 1$ ✓. Both hold, so $(3, 2)$ is a genuine solution of the system.',
        },
      },
      {
        id: 'sys1-count-dropdown',
        type: 'dropdown-select' as const,
        content: `**How Many Solutions?** 🔽

Match each graphical situation to its number of solutions.`,
        exercise: {
          dropdowns: [
            { label: 'Two lines crossing at one point:', options: ['One solution', 'No solution', 'Infinitely many solutions'] },
            { label: 'Two parallel, non-overlapping lines:', options: ['No solution', 'One solution', 'Infinitely many solutions'] },
            { label: 'Two equations whose graphs are the same line:', options: ['Infinitely many solutions', 'One solution', 'No solution'] },
          ],
          correctAnswers: ['One solution', 'No solution', 'Infinitely many solutions'],
          hint1: 'A single crossing point is a single $(x, y)$ that lies on both lines.',
          hint2: 'Parallel lines never touch, so no point lies on both — no solution.',
          hint3: 'If both equations describe the same line, every point on that line works — infinitely many solutions.',
          explanation: 'The three possibilities for two lines are: one crossing (one solution), parallel (none), or identical (infinitely many).',
        },
      },
      {
        id: 'sys1-bridge',
        type: 'text' as const,
        content: `## Where We're Headed

You now know what a system **is** and what its solution **means**. Graphing works but is imprecise — reading $(3, 2)$ off a sketch is easy, but $(\\tfrac{7}{3}, -\\tfrac{1}{6})$ is not.

The next four parts build **exact algebraic methods**:
- **Part 2** — Substitution
- **Part 3** — Elimination
- **Part 4** — Special cases (no solution / infinitely many)
- **Part 5** — Nonlinear systems

Then we extend to **three variables** (Part 6) and finish with **mixed mastery** (Part 7).`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys2-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 2 of 7 — The Substitution Method**

---

> 🔑 **The Idea:** Solve one equation for one variable, then **substitute** that expression into the other equation. This collapses two equations in two unknowns into one equation in one unknown.`,
      },
      {
        id: 'sys2-steps',
        type: 'text' as const,
        content: `## The Substitution Steps

1. **Isolate** one variable in one equation (pick the easiest — a variable with coefficient $1$ is ideal).
2. **Substitute** that expression into the *other* equation.
3. **Solve** the resulting one-variable equation.
4. **Back-substitute** to find the second variable.
5. **Check** in both original equations.

### Worked Example

$$\\begin{cases} y = 2x - 1 \\\\ 3x + y = 14 \\end{cases}$$

The first equation already gives $y$. Substitute $y = 2x - 1$ into the second:

$$3x + (2x - 1) = 14$$
$$5x - 1 = 14 \\;\\Rightarrow\\; 5x = 15 \\;\\Rightarrow\\; x = 3$$

Back-substitute: $y = 2(3) - 1 = 5$. Solution: $(3, 5)$.

> ✅ **Check:** $3(3) + 5 = 9 + 5 = 14$ ✓ and $y = 2(3)-1 = 5$ ✓.`,
      },
      {
        id: 'sys2-worked2',
        type: 'text' as const,
        content: `## When You Must Isolate First

If no variable is pre-isolated, solve for one yourself.

$$\\begin{cases} x + 3y = 9 \\\\ 2x - y = 4 \\end{cases}$$

Isolate $x$ in the first equation: $x = 9 - 3y$. Substitute into the second:

$$2(9 - 3y) - y = 4$$
$$18 - 6y - y = 4 \\;\\Rightarrow\\; 18 - 7y = 4$$
$$-7y = -14 \\;\\Rightarrow\\; y = 2$$

Back-substitute: $x = 9 - 3(2) = 9 - 6 = 3$. Solution: $(3, 2)$.

> ✅ **Check:** $3 + 3(2) = 9$ ✓ and $2(3) - 2 = 4$ ✓.

> 💡 Choosing the variable with coefficient $1$ ($x$ here) avoids fractions and keeps the algebra clean.`,
      },
      {
        id: 'sys2-pick-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\begin{cases} 4x + 7y = 1 \\\\ x - 2y = 5 \\end{cases}$, which isolation makes substitution easiest?',
              options: [
                'Solve the second equation for $x$: $x = 2y + 5$',
                'Solve the first equation for $y$: $y = \\frac{1 - 4x}{7}$',
                'Solve the first equation for $x$: $x = \\frac{1 - 7y}{4}$',
                'Solve the second equation for $y$: $y = \\frac{x - 5}{2}$',
              ],
              correctAnswer: 0,
              explanation: 'The $x$ in the second equation has coefficient $1$, so $x = 2y + 5$ involves no fractions. Substituting it into the first equation keeps the arithmetic clean.',
            },
            {
              question: 'After substituting $y = 2x - 1$ into $3x + y = 14$, the next equation is:',
              options: ['$3x + (2x - 1) = 14$', '$3x + 2x = 14$', '$3(2x - 1) + y = 14$', '$3x + 2x - 1 = y$'],
              correctAnswer: 0,
              explanation: 'You replace $y$ with the whole expression $2x - 1$: $3x + (2x - 1) = 14$. Keeping parentheses prevents sign errors.',
            },
          ],
        },
      },
      {
        id: 'sys2-substitute-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Substitution** 🧮

Solve each system. Enter the $x$-value, then the $y$-value.

**1)** $\\begin{cases} y = x + 2 \\\\ 2x + y = 11 \\end{cases}$  →  $x = \\,?$,  $y = \\,?$
**2)** $\\begin{cases} x = 3y - 1 \\\\ 2x + 4y = 18 \\end{cases}$  →  $x = \\,?$,  $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['3', '5', '5', '2'],
          hint1: 'System 1: substitute $y = x + 2$ into $2x + y = 11$ to get $2x + (x+2) = 11$, so $3x + 2 = 11$.',
          hint2: '$3x = 9 \\Rightarrow x = 3$, then $y = 3 + 2 = 5$. So the first pair is $(3, 5)$.',
          hint3: 'System 2: $2(3y - 1) + 4y = 18 \\Rightarrow 6y - 2 + 4y = 18 \\Rightarrow 10y = 20 \\Rightarrow y = 2$, then $x = 3(2)-1 = 5$.',
          explanation: 'System 1: $(3, 5)$ since $2(3)+5 = 11$ ✓. System 2: $(5, 2)$ since $2(5)+4(2) = 10 + 8 = 18$ ✓.',
        },
      },
      {
        id: 'sys2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trace the Steps** 🔽

You are solving $\\begin{cases} x + 3y = 9 \\\\ 2x - y = 4 \\end{cases}$ by substitution. Choose each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Isolate $x$ in the first equation:', options: ['$x = 9 - 3y$', '$x = 9 + 3y$', '$x = 3y - 9$', '$x = \\frac{9}{3y}$'] },
            { label: 'Substitute into the second equation:', options: ['$2(9 - 3y) - y = 4$', '$2x - (9 - 3y) = 4$', '$2(9 - 3y) + y = 4$', '$9 - 3y - y = 4$'] },
            { label: 'Solve for $y$:', options: ['$y = 2$', '$y = -2$', '$y = 7$', '$y = \\frac{22}{7}$'] },
            { label: 'Back-substitute to find $x$:', options: ['$x = 3$', '$x = 9$', '$x = -3$', '$x = 6$'] },
          ],
          correctAnswers: ['$x = 9 - 3y$', '$2(9 - 3y) - y = 4$', '$y = 2$', '$x = 3$'],
          hint1: 'From $x + 3y = 9$, subtract $3y$: $x = 9 - 3y$.',
          hint2: 'Replace $x$ in $2x - y = 4$ with $9 - 3y$: $2(9 - 3y) - y = 4$.',
          hint3: '$18 - 6y - y = 4 \\Rightarrow -7y = -14 \\Rightarrow y = 2$, then $x = 9 - 3(2) = 3$.',
          explanation: 'Isolate, substitute, solve $y = 2$, back-substitute $x = 3$. Solution $(3, 2)$, which checks in both equations.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys3-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 3 of 7 — The Elimination Method**

---

> 🔑 **The Idea:** Add or subtract the equations so that one variable **cancels**. If the coefficients don't already match, multiply an equation by a constant first to *make* them match.`,
      },
      {
        id: 'sys3-steps',
        type: 'text' as const,
        content: `## The Elimination Steps

1. **Line up** the equations so like terms are in columns.
2. **Match** the magnitude of one variable's coefficients (multiply one or both equations if needed).
3. **Add** (if the matched coefficients have opposite signs) or **subtract** (if they have the same sign) to eliminate that variable.
4. **Solve** for the remaining variable, then **back-substitute**.

### Worked Example — opposite signs, just add

$$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$$

The $y$-coefficients are $+1$ and $-1$. **Add** the equations:

$$(2x + y) + (x - y) = 7 + 2 \\;\\Rightarrow\\; 3x = 9 \\;\\Rightarrow\\; x = 3$$

Back-substitute into $x - y = 2$: $3 - y = 2 \\Rightarrow y = 1$. Solution: $(3, 1)$.

> ✅ **Check:** $2(3) + 1 = 7$ ✓ and $3 - 1 = 2$ ✓.`,
      },
      {
        id: 'sys3-multiply',
        type: 'text' as const,
        content: `## When You Must Multiply First

$$\\begin{cases} 3x + 2y = 16 \\\\ 5x - 4y = 1 \\end{cases}$$

To eliminate $y$, multiply the first equation by $2$ so the $y$-coefficients become $+4$ and $-4$:

$$\\begin{cases} 6x + 4y = 32 \\\\ 5x - 4y = 1 \\end{cases}$$

**Add:** $11x = 33 \\Rightarrow x = 3$. Back-substitute into $3x + 2y = 16$:

$$3(3) + 2y = 16 \\;\\Rightarrow\\; 9 + 2y = 16 \\;\\Rightarrow\\; 2y = 7 \\;\\Rightarrow\\; y = \\tfrac{7}{2}$$

Solution: $\\left(3, \\tfrac{7}{2}\\right)$.

> ⚠️ **Watch the sign rule:** add when the matched coefficients are **opposite** ($+4$ and $-4$); subtract when they are the **same** ($+4$ and $+4$). Adding same-sign coefficients does **not** eliminate anything.`,
      },
      {
        id: 'sys3-method-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To eliminate $x$ from $\\begin{cases} 2x + 5y = 1 \\\\ 3x - y = 7 \\end{cases}$, you could:',
              options: [
                'Multiply eq. 1 by $3$ and eq. 2 by $2$, then subtract',
                'Add the two equations as they are',
                'Multiply eq. 1 by $2$ and eq. 2 by $3$, then add',
                'Subtract the two equations as they are',
              ],
              correctAnswer: 0,
              explanation: 'Multiplying eq. 1 by $3$ gives $6x + 15y = 3$; eq. 2 by $2$ gives $6x - 2y = 14$. The $x$-coefficients are both $+6$ (same sign), so subtracting eliminates $x$.',
            },
            {
              question: 'For $\\begin{cases} 4x + 3y = 10 \\\\ 4x - 3y = 2 \\end{cases}$, the quickest single step is to:',
              options: [
                'Add the equations to eliminate $y$',
                'Subtract the equations to eliminate $y$',
                'Multiply eq. 1 by $-1$ first',
                'Substitute $x$ from eq. 1 into eq. 2',
              ],
              correctAnswer: 0,
              explanation: 'The $y$-coefficients are $+3$ and $-3$ (opposite signs), so adding gives $8x = 12$, eliminating $y$ immediately.',
            },
          ],
        },
      },
      {
        id: 'sys3-eliminate-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Elimination** 🧮

Solve each system. Enter $x$, then $y$. Use fractions like \`7/2\` when needed.

**1)** $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$  →  $x = \\,?$,  $y = \\,?$
**2)** $\\begin{cases} 3x + 2y = 16 \\\\ 5x - 4y = 1 \\end{cases}$  →  $x = \\,?$,  $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '3', '3', '7/2'],
          hint1: 'System 1: add the equations to cancel $y$: $2x = 14 \\Rightarrow x = 7$.',
          hint2: 'Then $7 - y = 4 \\Rightarrow y = 3$. First pair is $(7, 3)$.',
          hint3: 'System 2: multiply eq. 1 by $2$ → $6x + 4y = 32$; add to $5x - 4y = 1$: $11x = 33 \\Rightarrow x = 3$, then $9 + 2y = 16 \\Rightarrow y = 7/2$.',
          explanation: 'System 1: $(7, 3)$. System 2: $(3, 7/2)$ since $3(3) + 2(7/2) = 9 + 7 = 16$ ✓ and $5(3) - 4(7/2) = 15 - 14 = 1$ ✓.',
        },
      },
      {
        id: 'sys3-choose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Substitution or Elimination?** 🔽

Pick the method that's usually fastest for each system. (Both methods always work — this is about efficiency.)`,
        exercise: {
          dropdowns: [
            { label: '$\\begin{cases} y = 3x - 4 \\\\ 2x + y = 11 \\end{cases}$', options: ['Substitution (a variable is already isolated)', 'Elimination (coefficients line up to cancel)'] },
            { label: '$\\begin{cases} 4x + 3y = 5 \\\\ 4x - 3y = 11 \\end{cases}$', options: ['Elimination (coefficients line up to cancel)', 'Substitution (a variable is already isolated)'] },
            { label: '$\\begin{cases} x = 2y + 1 \\\\ 5x - 3y = 19 \\end{cases}$', options: ['Substitution (a variable is already isolated)', 'Elimination (coefficients line up to cancel)'] },
          ],
          correctAnswers: [
            'Substitution (a variable is already isolated)',
            'Elimination (coefficients line up to cancel)',
            'Substitution (a variable is already isolated)',
          ],
          hint1: 'When an equation already reads $y = \\ldots$ or $x = \\ldots$, substitution is one step away.',
          hint2: 'When the $x$- or $y$-coefficients are equal or opposite (like $+3$ and $-3$), adding or subtracting cancels instantly.',
          hint3: 'Systems 1 and 3 have an isolated variable (favor substitution); system 2 has $+3y$ and $-3y$ ready to add (favor elimination).',
          explanation: 'Match the method to the structure: isolated variable → substitution; matched/opposite coefficients → elimination.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys4-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 4 of 7 — No Solution & Infinitely Many Solutions**

---

> 🔑 **The Idea:** Not every system has a unique answer. When the variables **all cancel**, the leftover number-statement tells you which special case you're in.`,
      },
      {
        id: 'sys4-classify',
        type: 'text' as const,
        content: `## The Three Outcomes

| Outcome | Variables cancel and you're left with… | Graph | Name |
|---------|----------------------------------------|-------|------|
| One solution | a value, e.g. $x = 3$ | lines cross once | **consistent, independent** |
| No solution | a **false** statement, e.g. $0 = 5$ | parallel lines | **inconsistent** |
| Infinitely many | a **true** statement, e.g. $0 = 0$ | same line | **consistent, dependent** |

> 💡 The rule of thumb: a **false** number-statement ($0 = 5$) means **no solution**; a **true** one ($0 = 0$) means **infinitely many**.`,
      },
      {
        id: 'sys4-nosolution',
        type: 'text' as const,
        content: `## Worked Example — No Solution

$$\\begin{cases} 2x + y = 4 \\\\ 4x + 2y = 20 \\end{cases}$$

Multiply the first equation by $2$: $4x + 2y = 8$. Now subtract from the second:

$$(4x + 2y) - (4x + 2y) = 20 - 8 \\;\\Rightarrow\\; 0 = 12$$

The statement $0 = 12$ is **false**, so there is **no solution**. The lines have the same slope ($-2$) but different intercepts — they're **parallel**.

## Worked Example — Infinitely Many

$$\\begin{cases} x - 3y = 6 \\\\ 2x - 6y = 12 \\end{cases}$$

Multiply the first by $2$: $2x - 6y = 12$ — identical to the second. Subtracting gives $0 = 0$, which is **always true**, so there are **infinitely many solutions** (the two equations are the same line).`,
      },
      {
        id: 'sys4-classify-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'While solving a system, every variable cancels and you reach $0 = -7$. The system has:',
              options: ['No solution', 'Exactly one solution', 'Infinitely many solutions', 'Exactly two solutions'],
              correctAnswer: 0,
              explanation: '$0 = -7$ is a false statement, signaling parallel lines and no solution. The system is inconsistent.',
            },
            {
              question: 'Solving a system, you reach $0 = 0$. This means:',
              options: [
                'Infinitely many solutions (the equations describe the same line)',
                'No solution (parallel lines)',
                'Exactly one solution at the origin',
                'The system was set up incorrectly',
              ],
              correctAnswer: 0,
              explanation: '$0 = 0$ is always true, so every point on the (shared) line satisfies both equations — infinitely many solutions. The system is dependent.',
            },
          ],
        },
      },
      {
        id: 'sys4-slopes',
        type: 'text' as const,
        content: `## Spotting the Case from Slopes

Rewrite both equations as $y = mx + b$. Then:

| Slopes & intercepts | Result |
|---------------------|--------|
| Different slopes | **one** solution |
| Same slope, different intercept | **no** solution |
| Same slope **and** same intercept | **infinitely many** |

**Example:** $2x + y = 4$ becomes $y = -2x + 4$; $4x + 2y = 20$ becomes $y = -2x + 10$. Same slope $-2$, different intercepts $4$ vs $10$ → **no solution**, confirming the algebra above.

> 🔑 You can predict the outcome **before** solving just by comparing slopes and intercepts.`,
      },
      {
        id: 'sys4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each System** 🔽

Use slopes/intercepts or the cancellation rule to classify.`,
        exercise: {
          dropdowns: [
            { label: '$\\begin{cases} y = 3x + 1 \\\\ y = 3x - 4 \\end{cases}$', options: ['No solution', 'One solution', 'Infinitely many solutions'] },
            { label: '$\\begin{cases} y = 2x + 5 \\\\ y = -x + 2 \\end{cases}$', options: ['One solution', 'No solution', 'Infinitely many solutions'] },
            { label: '$\\begin{cases} x - 3y = 6 \\\\ 2x - 6y = 12 \\end{cases}$', options: ['Infinitely many solutions', 'One solution', 'No solution'] },
          ],
          correctAnswers: ['No solution', 'One solution', 'Infinitely many solutions'],
          hint1: 'First system: same slope $3$, different intercepts ($+1$ vs $-4$) → parallel.',
          hint2: 'Second system: slopes $2$ and $-1$ differ, so the lines cross once.',
          hint3: 'Third system: doubling the first equation gives the second exactly → same line.',
          explanation: 'Same slope + different intercept → none; different slopes → one; identical equations → infinitely many.',
        },
      },
      {
        id: 'sys4-drill',
        type: 'input-boxes' as const,
        content: `**Count the Solutions** 🧮

For each system, enter the number of solutions: type **0** for no solution, **1** for exactly one, or **9** to mean "infinitely many."

**1)** $\\begin{cases} 3x - y = 2 \\\\ 6x - 2y = 4 \\end{cases}$  →  ?
**2)** $\\begin{cases} x + y = 5 \\\\ x + y = 9 \\end{cases}$  →  ?
**3)** $\\begin{cases} y = 4x \\\\ y = -2x + 6 \\end{cases}$  →  ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '0', '1'],
          hint1: 'System 1: doubling the first equation gives the second exactly → infinitely many (enter $9$).',
          hint2: 'System 2: same left side $x+y$ equal to two different numbers ($5$ and $9$) is impossible → no solution (enter $0$).',
          hint3: 'System 3: slopes $4$ and $-2$ differ, so exactly one crossing (enter $1$). Indeed $4x = -2x + 6 \\Rightarrow x = 1$.',
          explanation: '1) Identical lines → infinitely many ($9$). 2) Parallel, contradictory → none ($0$). 3) Different slopes → one ($1$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys5-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 5 of 7 — Nonlinear Systems**

---

> 🔑 **The Idea:** When one equation is curved (a parabola, circle, or exponential), substitution still works — but a line can cross a curve **twice, once, or not at all**, so watch the solution count.`,
      },
      {
        id: 'sys5-line-parabola',
        type: 'text' as const,
        content: `## Line Meets Parabola

$$\\begin{cases} y = x^2 \\\\ y = x + 2 \\end{cases}$$

Both equal $y$, so set them equal and **substitute**:

$$x^2 = x + 2 \\;\\Rightarrow\\; x^2 - x - 2 = 0 \\;\\Rightarrow\\; (x - 2)(x + 1) = 0$$

So $x = 2$ or $x = -1$. Find each $y$ from $y = x + 2$:
- $x = 2 \\Rightarrow y = 4$, giving $(2, 4)$
- $x = -1 \\Rightarrow y = 1$, giving $(-1, 1)$

**Two** solutions — the line slices through the parabola at two points.

> ✅ **Check** $(2, 4)$: $4 = 2^2$ ✓ and $4 = 2 + 2$ ✓.`,
      },
      {
        id: 'sys5-count-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A straight line and a parabola can intersect in how many points?',
              options: ['0, 1, or 2', 'Exactly 1', 'Exactly 2', 'Any number up to infinity'],
              correctAnswer: 0,
              explanation: 'Setting the line equal to the parabola gives a quadratic, which has 0, 1, or 2 real roots — so the line and parabola meet in 0, 1, or 2 points.',
            },
            {
              question: 'Substituting $y = x + 2$ into $y = x^2$ gives which equation?',
              options: ['$x^2 - x - 2 = 0$', '$x^2 + x + 2 = 0$', '$x^2 = x - 2$', '$x^2 - x + 2 = 0$'],
              correctAnswer: 0,
              explanation: '$x^2 = x + 2$, and moving all terms to one side gives $x^2 - x - 2 = 0$, which factors as $(x-2)(x+1)=0$.',
            },
          ],
        },
      },
      {
        id: 'sys5-line-circle',
        type: 'text' as const,
        content: `## Line Meets Circle

$$\\begin{cases} x^2 + y^2 = 25 \\\\ y = x + 1 \\end{cases}$$

Substitute $y = x + 1$ into the circle:

$$x^2 + (x + 1)^2 = 25$$
$$x^2 + x^2 + 2x + 1 = 25 \\;\\Rightarrow\\; 2x^2 + 2x - 24 = 0$$

Divide by $2$: $x^2 + x - 12 = 0 \\Rightarrow (x + 4)(x - 3) = 0$, so $x = -4$ or $x = 3$.

- $x = -4 \\Rightarrow y = -3$, giving $(-4, -3)$
- $x = 3 \\Rightarrow y = 4$, giving $(3, 4)$

> ✅ **Check** $(3, 4)$: $3^2 + 4^2 = 9 + 16 = 25$ ✓ and $4 = 3 + 1$ ✓.

> ⚠️ **Don't forget to expand $(x+1)^2$ fully** — the middle term $2x$ is the one students lose most often.`,
      },
      {
        id: 'sys5-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Nonlinear System** 🧮

Use the system $\\begin{cases} y = x^2 - 1 \\\\ y = 3 \\end{cases}$.

**1)** Set the right sides equal: $x^2 - 1 = 3$. Solve for $x^2$. Enter $x^2 = \\,?$
**2)** Enter the **negative** $x$-solution.
**3)** Enter the **positive** $x$-solution.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-2', '2'],
          hint1: '$x^2 - 1 = 3 \\Rightarrow x^2 = 4$.',
          hint2: 'Taking the square root of $x^2 = 4$ gives $x = \\pm 2$ — remember BOTH signs.',
          hint3: 'The negative solution is $-2$ and the positive solution is $2$; both give $y = 3$.',
          explanation: '$x^2 = 4 \\Rightarrow x = \\pm 2$. Solutions $(-2, 3)$ and $(2, 3)$ — the horizontal line $y = 3$ cuts the parabola twice.',
        },
      },
      {
        id: 'sys5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Nonlinear Steps** 🔽

You're solving $\\begin{cases} x^2 + y^2 = 25 \\\\ y = x + 1 \\end{cases}$.`,
        exercise: {
          dropdowns: [
            { label: 'Substitute the line into the circle:', options: ['$x^2 + (x+1)^2 = 25$', '$x^2 + x + 1 = 25$', '$(x+1)^2 = 25$', '$x^2 + y^2 = x + 1$'] },
            { label: 'Expand and simplify:', options: ['$2x^2 + 2x - 24 = 0$', '$2x^2 + 2x + 26 = 0$', '$x^2 + 2x - 24 = 0$', '$2x^2 + x - 24 = 0$'] },
            { label: 'Factor (after dividing by $2$):', options: ['$(x+4)(x-3) = 0$', '$(x-4)(x+3) = 0$', '$(x+6)(x-4) = 0$', '$(x+4)(x+3) = 0$'] },
            { label: 'The $x$-solutions are:', options: ['$x = -4$ or $x = 3$', '$x = 4$ or $x = -3$', '$x = -4$ or $x = -3$', '$x = 4$ or $x = 3$'] },
          ],
          correctAnswers: ['$x^2 + (x+1)^2 = 25$', '$2x^2 + 2x - 24 = 0$', '$(x+4)(x-3) = 0$', '$x = -4$ or $x = 3$'],
          hint1: 'Replace $y$ with $x + 1$ inside $x^2 + y^2 = 25$.',
          hint2: 'Expand $(x+1)^2 = x^2 + 2x + 1$, so $2x^2 + 2x + 1 = 25 \\Rightarrow 2x^2 + 2x - 24 = 0$.',
          hint3: 'Divide by $2$: $x^2 + x - 12 = 0 = (x+4)(x-3)$, so $x = -4$ or $x = 3$.',
          explanation: 'Substitute, expand to $2x^2 + 2x - 24 = 0$, divide by $2$ and factor $(x+4)(x-3)=0$, giving $x = -4, 3$ and points $(-4,-3)$, $(3,4)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys6-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 6 of 7 — Three Variables & Word Problems**

---

> 🔑 **The Idea:** With three unknowns you need three equations. **Eliminate one variable** to shrink the problem to a familiar two-variable system, then back-substitute up the chain.`,
      },
      {
        id: 'sys6-3var',
        type: 'text' as const,
        content: `## Solving a 3-Variable System

$$\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ 2x + y - z = 1 \\end{cases}$$

**Step 1 — eliminate $z$.** Add equations (1) and (3): the $+z$ and $-z$ cancel:

$$(x + y + z) + (2x + y - z) = 6 + 1 \\;\\Rightarrow\\; 3x + 2y = 7 \\quad \\text{(A)}$$

Add equations (2) and (3):

$$(x - y + z) + (2x + y - z) = 2 + 1 \\;\\Rightarrow\\; 3x = 3 \\;\\Rightarrow\\; x = 1 \\quad \\text{(B)}$$

**Step 2 — back up.** From (A): $3(1) + 2y = 7 \\Rightarrow 2y = 4 \\Rightarrow y = 2$.

**Step 3 — find $z$.** From equation (1): $1 + 2 + z = 6 \\Rightarrow z = 3$.

Solution: $(x, y, z) = (1, 2, 3)$.

> ✅ **Check** in equation (2): $1 - 2 + 3 = 2$ ✓.`,
      },
      {
        id: 'sys6-3var-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the first strategic move when solving a 3-variable linear system?',
              options: [
                'Combine equations in pairs to eliminate the same variable, reducing to a 2-variable system',
                'Guess values for two variables and solve for the third',
                'Add all three equations together at once and stop',
                'Graph all three planes and read the intersection by eye',
              ],
              correctAnswer: 0,
              explanation: 'You pick one variable to eliminate, combine two different pairs of equations to remove it from each, and end up with two equations in two unknowns — a problem you already know how to solve.',
            },
            {
              question: 'How many equations are generally needed to pin down a unique solution for three unknowns?',
              options: ['Three', 'Two', 'One', 'Four'],
              correctAnswer: 0,
              explanation: 'In general you need as many independent equations as unknowns: three equations for three variables.',
            },
          ],
        },
      },
      {
        id: 'sys6-wordproblem',
        type: 'text' as const,
        content: `## Word Problems → Systems

**Problem.** Adult tickets cost \\$8 and child tickets cost \\$5. A family bought $7$ tickets for \\$47 total. How many of each?

Let $a$ = adult tickets, $c$ = child tickets. Translate:

$$\\begin{cases} a + c = 7 \\\\ 8a + 5c = 47 \\end{cases}$$

Solve the first for $c = 7 - a$ and substitute:

$$8a + 5(7 - a) = 47 \\;\\Rightarrow\\; 8a + 35 - 5a = 47 \\;\\Rightarrow\\; 3a = 12 \\;\\Rightarrow\\; a = 4$$

So $c = 7 - 4 = 3$: **4 adult tickets and 3 child tickets**.

> ✅ **Check:** $8(4) + 5(3) = 32 + 15 = 47$ ✓ and $4 + 3 = 7$ ✓.

> 💡 **Translation tips:** "total count" gives the *count* equation; "total cost/value" gives the *value* equation. Label your variables before writing equations.`,
      },
      {
        id: 'sys6-word-drill',
        type: 'input-boxes' as const,
        content: `**Set Up & Solve a Word Problem** 🧮

A coffee shop sells small drinks for \\$3 and large drinks for \\$5. One morning it sold $20$ drinks for \\$78 total. Let $s$ = number of small and $\\ell$ = number of large.

**1)** The count equation is $s + \\ell = \\,?$
**2)** Solve the system. How many **small** drinks were sold?
**3)** How many **large** drinks were sold?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '11', '9'],
          hint1: 'Total drinks is $20$, so the count equation is $s + \\ell = 20$.',
          hint2: 'The value equation is $3s + 5\\ell = 78$. Substitute $s = 20 - \\ell$: $3(20 - \\ell) + 5\\ell = 78$.',
          hint3: '$60 - 3\\ell + 5\\ell = 78 \\Rightarrow 2\\ell = 18 \\Rightarrow \\ell = 9$, so $s = 20 - 9 = 11$.',
          explanation: 'System: $s + \\ell = 20$, $3s + 5\\ell = 78$. Solving gives $s = 11$, $\\ell = 9$. Check: $3(11)+5(9) = 33 + 45 = 78$ ✓.',
        },
      },
      {
        id: 'sys6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate the Story** 🔽

A theater sold $x$ adult and $y$ student tickets. Adults are \\$12 each, students \\$7 each. They sold $50$ tickets for \\$465.`,
        exercise: {
          dropdowns: [
            { label: 'The "how many tickets" equation:', options: ['$x + y = 50$', '$12x + 7y = 50$', '$x + y = 465$', '$x - y = 50$'] },
            { label: 'The "total money" equation:', options: ['$12x + 7y = 465$', '$x + y = 465$', '$12x + 7y = 50$', '$7x + 12y = 465$'] },
            { label: 'Solving gives:', options: ['$x = 23,\\ y = 27$', '$x = 27,\\ y = 23$', '$x = 25,\\ y = 25$', '$x = 30,\\ y = 20$'] },
          ],
          correctAnswers: ['$x + y = 50$', '$12x + 7y = 465$', '$x = 23,\\ y = 27$'],
          hint1: 'Counting tickets: adults plus students equals the $50$ sold.',
          hint2: 'Counting money: \\$12 per adult plus \\$7 per student equals \\$465.',
          hint3: 'Substitute $x = 50 - y$ into $12x + 7y = 465$: $600 - 12y + 7y = 465 \\Rightarrow -5y = -135 \\Rightarrow y = 27$, so $x = 23$.',
          explanation: 'Count: $x + y = 50$. Value: $12x + 7y = 465$. Solving gives $x = 23$, $y = 27$. Check: $12(23) + 7(27) = 276 + 189 = 465$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'systems-of-equations',
    sections: [
      {
        id: 'sys7-intro',
        type: 'text' as const,
        content: `# 🔗 Systems of Equations

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) verify and count solutions, (2) solve by substitution, (3) solve by elimination, (4) recognize no-solution and infinite cases, (5) tackle nonlinear systems, and (6) handle three variables and word problems. Time to put it all together.`,
      },
      {
        id: 'sys7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Verify a solution | substitute into **all** equations; every one must hold |
| A variable is isolated | use **substitution** |
| Coefficients match/oppose | use **elimination** (add if opposite signs, subtract if same) |
| Variables cancel → false ($0=5$) | **no solution** (parallel lines) |
| Variables cancel → true ($0=0$) | **infinitely many** (same line) |
| One equation is curved | **substitute**, then solve the resulting quadratic |
| Three variables | eliminate one variable to reach a 2-variable system, then back-substitute |

> ⚠️ Always **check** your answer in the original equations — especially after multiplying, expanding $(x+1)^2$, or distributing a negative sign.`,
      },
      {
        id: 'sys7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$.',
              options: ['$(2, 1)$', '$(1, 2)$', '$(2, -1)$', '$(3, -1)$'],
              correctAnswer: 0,
              explanation: 'Add the equations: $3x = 6 \\Rightarrow x = 2$, then $2 - y = 1 \\Rightarrow y = 1$. Check: $2(2)+1 = 5$ ✓ and $2 - 1 = 1$ ✓.',
            },
            {
              question: 'How many solutions does $\\begin{cases} y = -2x + 3 \\\\ 4x + 2y = 6 \\end{cases}$ have?',
              options: ['Infinitely many', 'Exactly one', 'None', 'Exactly two'],
              correctAnswer: 0,
              explanation: 'Rewrite the second: $4x + 2y = 6 \\Rightarrow 2y = -4x + 6 \\Rightarrow y = -2x + 3$ — identical to the first. Same line → infinitely many solutions.',
            },
          ],
        },
      },
      {
        id: 'sys7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Solve $\\begin{cases} 3x + 2y = 12 \\\\ x = 2y \\end{cases}$. Enter $x$, then $y$.
**2)** The line $y = 2x$ meets the parabola $y = x^2$ at two points. Enter the **two** $x$-values (smaller first).`,
        exercise: {
          boxes: 4,
          correctAnswers: ['3', '3/2', '0', '2'],
          hint1: 'System 1: substitute $x = 2y$ into $3x + 2y = 12$: $3(2y) + 2y = 8y = 12 \\Rightarrow y = 3/2$, then $x = 2(3/2) = 3$.',
          hint2: 'System 2: set $2x = x^2 \\Rightarrow x^2 - 2x = 0 \\Rightarrow x(x - 2) = 0$.',
          hint3: 'The factors give $x = 0$ and $x = 2$; smaller is $0$, larger is $2$.',
          explanation: 'System 1: $(3, 3/2)$ since $3(3) + 2(3/2) = 9 + 3 = 12$ ✓. System 2: $x(x-2)=0 \\Rightarrow x = 0$ or $x = 2$ (points $(0,0)$ and $(2,4)$).',
        },
      },
      {
        id: 'sys7-dropdown',
        type: 'dropdown-select' as const,
        content: `**Diagnose Before Solving** 🔽

For each system, identify the smartest first move or the outcome.`,
        exercise: {
          dropdowns: [
            { label: '$\\begin{cases} y = 4 - x \\\\ 3x - 2y = 7 \\end{cases}$ — best method:', options: ['Substitution', 'Elimination', 'No method works'] },
            { label: '$\\begin{cases} x + y = 2 \\\\ x + y = 9 \\end{cases}$ — outcome:', options: ['No solution', 'One solution', 'Infinitely many solutions'] },
            { label: '$\\begin{cases} 5x + 3y = 1 \\\\ 5x - 3y = 9 \\end{cases}$ — best method:', options: ['Elimination', 'Substitution', 'Graphing only'] },
          ],
          correctAnswers: ['Substitution', 'No solution', 'Elimination'],
          hint1: 'When an equation already reads $y = \\ldots$, substitution is the one-step choice.',
          hint2: 'Equal left sides ($x+y$) forced to two different totals ($2$ and $9$) is a contradiction.',
          hint3: 'The $y$-coefficients $+3$ and $-3$ are opposites, so adding eliminates $y$ instantly — elimination.',
          explanation: 'Isolated variable → substitution; contradictory parallel lines → no solution; opposite coefficients → elimination.',
        },
      },
      {
        id: 'sys7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\begin{cases} x + y = 7 \\\\ 2x - y = 2 \\end{cases}$.',
              options: ['$(3, 4)$', '$(4, 3)$', '$(2, 5)$', '$(5, 2)$'],
              correctAnswer: 0,
              explanation: 'Add the equations: $3x = 9 \\Rightarrow x = 3$, then $3 + y = 7 \\Rightarrow y = 4$. Check: $2(3) - 4 = 2$ ✓.',
            },
            {
              question: 'Solving a system you reach $0 = 8$. The system has:',
              options: ['No solution', 'One solution', 'Infinitely many solutions', 'Two solutions'],
              correctAnswer: 0,
              explanation: '$0 = 8$ is false, indicating parallel lines and no solution — the system is inconsistent.',
            },
            {
              question: 'The line $y = x + 1$ meets the parabola $y = x^2 - 1$ where $x =$',
              options: ['$x = -1$ or $x = 2$', '$x = 1$ or $x = -2$', '$x = 0$ or $x = 1$', '$x = -1$ or $x = 1$'],
              correctAnswer: 0,
              explanation: 'Set $x^2 - 1 = x + 1 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = 2$ or $x = -1$.',
            },
          ],
        },
      },
    ],
  },
]
