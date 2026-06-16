import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Proportions (Pre-Algebra).
 * Registry key / DB Topic.slug: 'proportions-prealgebra'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'proportions-prealgebra',
    sections: [
      {
        id: 'prop1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 1 of 5 — Ratios & Equivalent Fractions**

---

### Topics in This Part

| Section |
|---------|
| What Is a Ratio? |
| Writing Ratios as Fractions |
| Equivalent Ratios |
| What Is a Proportion? |

> 🔑 **Key Concept:** A **proportion** is just an equation saying *two ratios are equal*. Before we can solve one, we need to be comfortable with ratios — that's Part 1.`,
      },
      {
        id: 'prop1-ratio',
        type: 'text' as const,
        content: `## What Is a Ratio?

A **ratio** compares two quantities. If a fruit bowl has $3$ apples and $4$ oranges, the ratio of apples to oranges is:

$$3 \\text{ to } 4 \\qquad \\text{or} \\qquad 3 : 4 \\qquad \\text{or} \\qquad \\frac{3}{4}$$

All three mean the same thing. In this lesson we'll almost always write ratios as **fractions**, because that makes them easy to solve.

> ⚠️ **Order matters!** The ratio of apples to oranges is $\\dfrac{3}{4}$, but the ratio of oranges to apples is $\\dfrac{4}{3}$. Always write the quantities in the order the problem names them.

### Examples

| In words | As a fraction |
|----------|---------------|
| $5$ miles per $2$ hours | $\\dfrac{5}{2}$ |
| $12$ students to $1$ teacher | $\\dfrac{12}{1}$ |
| $2$ cups flour to $3$ cups sugar | $\\dfrac{2}{3}$ |`,
      },
      {
        id: 'prop1-ratio-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A class has $10$ boys and $15$ girls. What is the ratio of boys to girls?',
              options: ['$\\dfrac{10}{15}$', '$\\dfrac{15}{10}$', '$\\dfrac{10}{25}$', '$\\dfrac{15}{25}$'],
              correctAnswer: 0,
              explanation: 'Boys come first, girls second: $\\dfrac{\\text{boys}}{\\text{girls}} = \\dfrac{10}{15}$. (It also reduces to $\\dfrac{2}{3}$.)',
            },
            {
              question: 'A recipe uses $2$ cups of water for every $3$ cups of rice. The ratio of rice to water is:',
              options: ['$\\dfrac{3}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{2}{5}$', '$\\dfrac{5}{3}$'],
              correctAnswer: 0,
              explanation: 'Rice is named first here, so $\\dfrac{\\text{rice}}{\\text{water}} = \\dfrac{3}{2}$. Watch the order — water-to-rice would be $\\dfrac{2}{3}$.',
            },
          ],
        },
      },
      {
        id: 'prop1-equivalent',
        type: 'text' as const,
        content: `## Equivalent Ratios

Two ratios are **equivalent** if one is a scaled-up or scaled-down version of the other — exactly like equivalent fractions.

You get an equivalent ratio by multiplying (or dividing) **both** parts by the same number:

$$\\frac{2}{3} \\;\\overset{\\times 4}{=}\\; \\frac{8}{12} \\qquad\\qquad \\frac{10}{15} \\;\\overset{\\div 5}{=}\\; \\frac{2}{3}$$

> 🔑 **Key Idea:** Whatever you do to the top, you must do to the bottom. Multiplying both parts by the same number never changes the *value* of the ratio.

### A Quick Picture

If $2$ pizzas feed $6$ people, then $4$ pizzas (double) feed $12$ people (double). The ratio $\\dfrac{2}{6}$ and the ratio $\\dfrac{4}{12}$ describe the same situation.`,
      },
      {
        id: 'prop1-equiv-drill',
        type: 'input-boxes' as const,
        content: `**Build Equivalent Ratios** 🧮

Fill in the missing number that makes the ratios equivalent.

**1)** $\\dfrac{3}{5} = \\dfrac{?}{20}$
**2)** $\\dfrac{2}{7} = \\dfrac{10}{?}$
**3)** $\\dfrac{12}{18} = \\dfrac{2}{?}$  *(reduce first)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '35', '3'],
          hint1: 'Bottom went from $5$ to $20$, that is $\\times 4$. Do the same to the top: $3 \\times 4 = 12$.',
          hint2: 'Top went from $2$ to $10$, that is $\\times 5$. So the bottom is $7 \\times 5 = 35$.',
          hint3: '$\\dfrac{12}{18}$ divides by $6$ to give $\\dfrac{2}{3}$, so the missing bottom is $3$.',
          explanation: '1) $\\dfrac{3}{5} = \\dfrac{12}{20}$.  2) $\\dfrac{2}{7} = \\dfrac{10}{35}$.  3) $\\dfrac{12}{18} = \\dfrac{2}{3}$.',
        },
      },
      {
        id: 'prop1-proportion',
        type: 'text' as const,
        content: `## What Is a Proportion?

A **proportion** is an equation stating that two ratios are equal:

$$\\frac{a}{b} = \\frac{c}{d}$$

For example, $\\dfrac{2}{3} = \\dfrac{8}{12}$ is a proportion (both sides equal the same value). And $\\dfrac{1}{2} = \\dfrac{4}{8}$ is a proportion too.

But $\\dfrac{2}{3} = \\dfrac{4}{5}$ is **not** a proportion — those two ratios are not equal.

> 💡 Most proportion problems hide one of the four numbers and ask you to find it, like $\\dfrac{2}{3} = \\dfrac{x}{12}$. The next three parts are all about finding that missing value.`,
      },
      {
        id: 'prop1-isprop-check',
        type: 'dropdown-select' as const,
        content: `**Is It a Proportion?** 🔽

For each pair, decide whether the two ratios are equal.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{2}{3}$ and $\\dfrac{6}{9}$:', options: ['Equal — a proportion', 'Not equal'] },
            { label: '$\\dfrac{4}{5}$ and $\\dfrac{8}{9}$:', options: ['Equal — a proportion', 'Not equal'] },
            { label: '$\\dfrac{3}{4}$ and $\\dfrac{15}{20}$:', options: ['Equal — a proportion', 'Not equal'] },
          ],
          correctAnswers: ['Equal — a proportion', 'Not equal', 'Equal — a proportion'],
          hint1: '$\\dfrac{2}{3}$ scaled by $3$ gives $\\dfrac{6}{9}$ — equal.',
          hint2: '$\\dfrac{4}{5}$ scaled by $2$ gives $\\dfrac{8}{10}$, not $\\dfrac{8}{9}$ — not equal.',
          hint3: '$\\dfrac{3}{4}$ scaled by $5$ gives $\\dfrac{15}{20}$ — equal.',
          explanation: 'Scale (or reduce) each ratio: $\\dfrac{6}{9} = \\dfrac{2}{3}$ ✓, $\\dfrac{8}{9} \\ne \\dfrac{4}{5}$ ✗, $\\dfrac{15}{20} = \\dfrac{3}{4}$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'proportions-prealgebra',
    sections: [
      {
        id: 'prop2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 2 of 5 — Cross Multiplication**

---

> 🔑 **The Big Tool:** In any true proportion, the **cross products are equal**. This single fact turns every proportion into a simple equation you can solve.`,
      },
      {
        id: 'prop2-cross',
        type: 'text' as const,
        content: `## The Cross-Products Rule

For any proportion:

$$\\frac{a}{b} = \\frac{c}{d} \\qquad\\Longrightarrow\\qquad a \\cdot d = b \\cdot c$$

You multiply along each **diagonal**. The two diagonal products (the *cross products*) are always equal in a true proportion.

### Why It Works

Start with $\\dfrac{a}{b} = \\dfrac{c}{d}$ and multiply **both sides** by $b \\cdot d$:

$$b \\cdot d \\cdot \\frac{a}{b} = b \\cdot d \\cdot \\frac{c}{d} \\quad\\Longrightarrow\\quad d \\cdot a = b \\cdot c$$

The $b$'s cancel on the left and the $d$'s cancel on the right — leaving the cross-products rule.

### Quick Test

Is $\\dfrac{3}{4} = \\dfrac{9}{12}$ a true proportion? Check the cross products:

$$3 \\cdot 12 = 36 \\qquad 4 \\cdot 9 = 36$$

They match, so **yes** — it's a true proportion. ✓`,
      },
      {
        id: 'prop2-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Cross multiplying $\\dfrac{5}{8} = \\dfrac{x}{6}$ gives which equation?',
              options: ['$5 \\cdot 6 = 8 \\cdot x$', '$5 \\cdot 8 = 6 \\cdot x$', '$5 \\cdot x = 8 \\cdot 6$', '$8 \\cdot 6 = 5 \\cdot x$'],
              correctAnswer: 0,
              explanation: 'Multiply along the diagonals: $5 \\cdot 6$ equals $8 \\cdot x$. So $30 = 8x$.',
            },
            {
              question: 'Which pair of ratios is a TRUE proportion?',
              options: ['$\\dfrac{2}{3} = \\dfrac{6}{9}$', '$\\dfrac{2}{3} = \\dfrac{4}{5}$', '$\\dfrac{3}{4} = \\dfrac{5}{6}$', '$\\dfrac{1}{2} = \\dfrac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'Check cross products: $2 \\cdot 9 = 18$ and $3 \\cdot 6 = 18$ — equal, so it is a true proportion. The others fail the cross-product test.',
            },
          ],
        },
      },
      {
        id: 'prop2-solve',
        type: 'text' as const,
        content: `## Solving for a Missing Value

To solve a proportion with an unknown, **cross multiply, then undo the multiplication by dividing.**

### Worked Example: $\\dfrac{x}{12} = \\dfrac{3}{4}$

**Step 1 — Cross multiply:**
$$4 \\cdot x = 12 \\cdot 3$$

**Step 2 — Simplify:**
$$4x = 36$$

**Step 3 — Divide both sides by $4$:**
$$x = \\frac{36}{4} = 9$$

> ✅ **Check:** $\\dfrac{9}{12} = \\dfrac{3}{4}$? Cross products: $9 \\cdot 4 = 36$ and $12 \\cdot 3 = 36$. ✓`,
      },
      {
        id: 'prop2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\dfrac{7}{x} = \\dfrac{14}{10}$

Here the variable is on the **bottom** — cross multiplication still works exactly the same way.

$$7 \\cdot 10 = x \\cdot 14 \\quad\\Longrightarrow\\quad 70 = 14x$$

Divide both sides by $14$:

$$x = \\frac{70}{14} = 5$$

> 💡 **Tip:** No matter where the unknown sits — top, bottom, left, or right — cross multiply first, then divide by the number multiplying the variable. The method never changes.`,
      },
      {
        id: 'prop2-steps-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $\\dfrac{x}{8} = \\dfrac{6}{4}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, cross multiply:', options: ['$4 \\cdot x = 8 \\cdot 6$', '$4 \\cdot 6 = 8 \\cdot x$', '$x \\cdot 6 = 8 \\cdot 4$', '$8 \\cdot 4 = x \\cdot 6$'] },
            { label: 'Simplify the products:', options: ['$4x = 48$', '$24x = 8$', '$4x = 14$', '$6x = 32$'] },
            { label: 'Divide both sides by:', options: ['$4$', '$6$', '$8$', '$48$'] },
            { label: 'Final value of $x$:', options: ['$12$', '$3$', '$48$', '$8$'] },
          ],
          correctAnswers: ['$4 \\cdot x = 8 \\cdot 6$', '$4x = 48$', '$4$', '$12$'],
          hint1: 'Multiply the diagonals: $4 \\cdot x$ equals $8 \\cdot 6$.',
          hint2: '$8 \\cdot 6 = 48$, so the equation is $4x = 48$.',
          hint3: 'Divide both sides by $4$: $x = 48 \\div 4 = 12$.',
          explanation: '$4x = 48 \\Rightarrow x = 12$. Check: $\\dfrac{12}{8} = \\dfrac{3}{2}$ and $\\dfrac{6}{4} = \\dfrac{3}{2}$. ✓',
        },
      },
      {
        id: 'prop2-recap',
        type: 'text' as const,
        content: `## Two-Step Recap

Every basic proportion is now a **two-step** problem:

1. **Cross multiply** to clear the fractions.
2. **Divide** both sides by the number multiplying $x$.

> ✅ **Habit to build:** after you find $x$, plug it back in and check that the cross products match. It catches almost every arithmetic slip.

Now try a few on your own.`,
      },
      {
        id: 'prop2-drill',
        type: 'input-boxes' as const,
        content: `**Solve Each Proportion** 🧮

Cross multiply, then divide. Enter the value of $x$.

**1)** $\\dfrac{x}{6} = \\dfrac{5}{3} \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{4}{x} = \\dfrac{8}{14} \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{9}{15} = \\dfrac{x}{5} \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '7', '3'],
          hint1: '$3x = 6 \\cdot 5 = 30$, so $x = 30 \\div 3 = 10$.',
          hint2: '$4 \\cdot 14 = 8x \\Rightarrow 56 = 8x \\Rightarrow x = 7$.',
          hint3: '$9 \\cdot 5 = 15x \\Rightarrow 45 = 15x \\Rightarrow x = 3$.',
          explanation: '1) $x = 10$.  2) $x = 7$.  3) $x = 3$. Each: cross multiply, then divide by the coefficient of $x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'proportions-prealgebra',
    sections: [
      {
        id: 'prop3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 3 of 5 — Trickier Proportions**

---

> 🔑 **Level Up:** Real proportions don't always come out to whole numbers. In this part we handle decimal answers, fractions, and a variable that appears inside a sum like $(x + 2)$.`,
      },
      {
        id: 'prop3-decimal',
        type: 'text' as const,
        content: `## When the Answer Isn't a Whole Number

Nothing changes about the method — you just may end with a decimal or a fraction.

### Worked Example: $\\dfrac{x}{4} = \\dfrac{7}{8}$

$$8 \\cdot x = 4 \\cdot 7 \\quad\\Longrightarrow\\quad 8x = 28 \\quad\\Longrightarrow\\quad x = \\frac{28}{8} = 3.5$$

### Worked Example: $\\dfrac{5}{6} = \\dfrac{x}{4}$

$$5 \\cdot 4 = 6 \\cdot x \\quad\\Longrightarrow\\quad 20 = 6x \\quad\\Longrightarrow\\quad x = \\frac{20}{6} = \\frac{10}{3}$$

> 💡 An answer like $\\dfrac{10}{3}$ is perfectly fine — leave it as a reduced fraction (or write it as $\\approx 3.33$). Both are correct.`,
      },
      {
        id: 'prop3-decimal-drill',
        type: 'input-boxes' as const,
        content: `**Decimal & Fraction Answers** 🧮

Solve. Decimals or reduced fractions are both fine.

**1)** $\\dfrac{x}{10} = \\dfrac{3}{4} \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{3}{8} = \\dfrac{x}{12} \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7.5', '4.5'],
          hint1: '$4x = 10 \\cdot 3 = 30 \\Rightarrow x = 30 \\div 4 = 7.5$.',
          hint2: '$3 \\cdot 12 = 8x \\Rightarrow 36 = 8x \\Rightarrow x = 36 \\div 8 = 4.5$.',
          hint3: 'Divide the cross product by the number next to $x$; the result can be a decimal.',
          explanation: '1) $x = 7.5$ (or $\\tfrac{15}{2}$).  2) $x = 4.5$ (or $\\tfrac{9}{2}$).',
        },
      },
      {
        id: 'prop3-binomial',
        type: 'text' as const,
        content: `## A Variable Inside a Sum

Sometimes the unknown is part of an expression like $(x + 2)$. Cross multiply first, then **distribute** and solve like a normal equation.

### Worked Example: $\\dfrac{x + 2}{5} = \\dfrac{4}{2}$

**Step 1 — Cross multiply:**
$$2 \\cdot (x + 2) = 5 \\cdot 4$$

**Step 2 — Distribute the $2$:**
$$2x + 4 = 20$$

**Step 3 — Subtract $4$ from both sides:**
$$2x = 16$$

**Step 4 — Divide by $2$:**
$$x = 8$$

> ✅ **Check:** $\\dfrac{8 + 2}{5} = \\dfrac{10}{5} = 2$, and $\\dfrac{4}{2} = 2$. ✓`,
      },
      {
        id: 'prop3-binomial-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $\\dfrac{x + 1}{6} = \\dfrac{5}{3}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, cross multiply:', options: ['$3(x+1) = 30$', '$3(x+1) = 6 \\cdot 5$', '$6 \\cdot 5 = x + 1$', '$x + 1 = 3 \\cdot 5$'] },
            { label: 'Distribute the left side:', options: ['$3x + 3 = 30$', '$3x + 1 = 30$', '$x + 3 = 30$', '$3x + 3 = 6$'] },
            { label: 'Subtract from both sides:', options: ['$3$', '$30$', '$1$', '$6$'] },
            { label: 'Final value of $x$:', options: ['$9$', '$10$', '$27$', '$3$'] },
          ],
          correctAnswers: ['$3(x+1) = 6 \\cdot 5$', '$3x + 3 = 30$', '$3$', '$9$'],
          hint1: 'Multiply the diagonals: $3 \\cdot (x+1)$ equals $6 \\cdot 5$.',
          hint2: 'Distribute: $3 \\cdot x + 3 \\cdot 1 = 3x + 3$, and $6 \\cdot 5 = 30$.',
          hint3: '$3x + 3 = 30 \\Rightarrow 3x = 27 \\Rightarrow x = 9$. You subtract $3$, then divide by $3$.',
          explanation: '$3(x+1) = 30 \\Rightarrow 3x + 3 = 30 \\Rightarrow 3x = 27 \\Rightarrow x = 9$.',
        },
      },
      {
        id: 'prop3-distribute-note',
        type: 'text' as const,
        content: `## Don't Forget to Distribute

The single most common error with a sum in the numerator is forgetting to multiply **every** term inside the parentheses.

$$2(x + 3) = 2x + 6 \\qquad \\color{red}{\\text{not}} \\qquad 2x + 3$$

So when you cross multiply $\\dfrac{x+3}{5} = \\dfrac{4}{1}$ you get $1 \\cdot (x+3) = 5 \\cdot 4$, then $x + 3 = 20$, then $x = 17$.

> ⚠️ After distributing, you've got an ordinary two-step equation: **undo the addition first, then undo the multiplication.**`,
      },
      {
        id: 'prop3-mixed-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x - 1}{4} = \\dfrac{3}{2}$.',
              options: ['$x = 7$', '$x = 6$', '$x = 5$', '$x = 13$'],
              correctAnswer: 0,
              explanation: '$2(x-1) = 12 \\Rightarrow 2x - 2 = 12 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.',
            },
            {
              question: 'Solve $\\dfrac{2}{5} = \\dfrac{x}{8}$.',
              options: ['$x = 3.2$', '$x = 20$', '$x = 16$', '$x = 4$'],
              correctAnswer: 0,
              explanation: '$2 \\cdot 8 = 5x \\Rightarrow 16 = 5x \\Rightarrow x = 16 \\div 5 = 3.2$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'proportions-prealgebra',
    sections: [
      {
        id: 'prop4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 4 of 5 — Word Problems & Real Applications**

---

> 🔑 **Big Payoff:** Proportions power recipes, maps, unit prices, scale models, and similar shapes. The key skill is **setting up the proportion correctly** — keeping like units lined up.`,
      },
      {
        id: 'prop4-setup',
        type: 'text' as const,
        content: `## Setting Up a Word Problem

The golden rule: **keep the same kind of quantity in the same position** (top with top, bottom with bottom).

### Worked Example — Recipe

A recipe uses $2$ cups of flour to make $12$ cookies. How much flour for $30$ cookies?

Put **flour on top, cookies on bottom** on both sides:

$$\\frac{\\text{flour}}{\\text{cookies}}:\\quad \\frac{2}{12} = \\frac{x}{30}$$

Cross multiply: $\\;2 \\cdot 30 = 12 \\cdot x \\Rightarrow 60 = 12x \\Rightarrow x = 5$.

So you need **$5$ cups of flour**.

> ⚠️ **Common mistake:** flipping one side. If flour is on top on the left, it must be on top on the right too. Mixing the order gives a wrong answer.`,
      },
      {
        id: 'prop4-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set It Up** 🔽

A car drives $150$ miles on $5$ gallons of gas. How far on $8$ gallons? Build the proportion.`,
        exercise: {
          dropdowns: [
            { label: 'Correct setup (miles on top):', options: ['$\\dfrac{150}{5} = \\dfrac{x}{8}$', '$\\dfrac{150}{5} = \\dfrac{8}{x}$', '$\\dfrac{5}{150} = \\dfrac{x}{8}$', '$\\dfrac{150}{x} = \\dfrac{5}{8}$'] },
            { label: 'After cross multiplying:', options: ['$150 \\cdot 8 = 5x$', '$150 \\cdot 5 = 8x$', '$5 \\cdot 8 = 150x$', '$150 + 8 = 5x$'] },
            { label: 'Distance on $8$ gallons:', options: ['$240$ miles', '$200$ miles', '$93.75$ miles', '$48$ miles'] },
          ],
          correctAnswers: ['$\\dfrac{150}{5} = \\dfrac{x}{8}$', '$150 \\cdot 8 = 5x$', '$240$ miles'],
          hint1: 'Miles go on top on both sides, gallons on the bottom: $\\dfrac{150}{5} = \\dfrac{x}{8}$.',
          hint2: 'Cross multiply the diagonals: $150 \\cdot 8 = 5 \\cdot x$.',
          hint3: '$150 \\cdot 8 = 1200$, and $1200 \\div 5 = 240$ miles.',
          explanation: '$\\dfrac{150}{5} = \\dfrac{x}{8} \\Rightarrow 1200 = 5x \\Rightarrow x = 240$ miles.',
        },
      },
      {
        id: 'prop4-unitrate',
        type: 'text' as const,
        content: `## Unit Rates & Best Buy

A **unit rate** is a ratio with $1$ on the bottom — like price per *one* item or miles per *one* hour. Proportions let you compare deals.

### Worked Example — Better Buy

- Store A: \\$6 for $4$ granola bars
- Store B: \\$9 for $6$ granola bars

Find each price **per bar**:

A: $\\frac{6}{4} = 1.50$ per bar, i.e. \\$1.50 per bar. B: $\\frac{9}{6} = 1.50$ per bar, i.e. \\$1.50 per bar.

They're actually the **same** unit price! Both are $\\dfrac{3}{2}$ — equivalent ratios.

> 💡 **Why unit rates help:** once everything is "per $1$," you can compare directly. The smaller per-unit price is the better deal.`,
      },
      {
        id: 'prop4-word-drill',
        type: 'input-boxes' as const,
        content: `**Real-World Proportions** 🧮

Set up a proportion and solve.

**1)** On a map, $2$ inches $= 50$ miles. How many miles is $5$ inches?  $\\,?$ *(miles)*
**2)** If $3$ apples cost \\$1.20, how much do $7$ apples cost? $\\,?$ *(dollars)*
**3)** A printer prints $8$ pages in $10$ seconds. How many pages in $25$ seconds? $\\,?$ *(pages)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['125', '2.8', '20'],
          hint1: '$\\dfrac{2}{50} = \\dfrac{5}{x} \\Rightarrow 2x = 250 \\Rightarrow x = 125$ miles.',
          hint2: '$\\dfrac{3}{1.20} = \\dfrac{7}{x} \\Rightarrow 3x = 8.4 \\Rightarrow x = 2.8$ dollars.',
          hint3: '$\\dfrac{8}{10} = \\dfrac{x}{25} \\Rightarrow 10x = 200 \\Rightarrow x = 20$ pages.',
          explanation: '1) $125$ miles.  2) $\\$2.80$.  3) $20$ pages. Keep matching units lined up, then cross multiply.',
        },
      },
      {
        id: 'prop4-similar',
        type: 'text' as const,
        content: `## Bonus: Similar Figures

**Similar** shapes have the same form but different sizes. Their matching sides are **proportional**, so you can find a missing side with a proportion.

If two triangles are similar and the small one has sides $3$ and $4$ matching the large one's sides $9$ and $x$:

$$\\frac{3}{9} = \\frac{4}{x} \\quad\\Longrightarrow\\quad 3x = 36 \\quad\\Longrightarrow\\quad x = 12$$

> 🔑 **Setup rule for similar figures:** match corresponding sides. Small-triangle side over large-triangle side, on **both** sides of the equation.`,
      },
      {
        id: 'prop4-apply-check',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Store A sells $\\$10$ for $4$ notebooks; Store B sells $\\$12$ for $6$ notebooks. Which is the better buy per notebook?',
              options: ['Store B at $\\$2.00$ each', 'Store A at $\\$2.50$ each', 'They are the same price', 'Store A at $\\$2.00$ each'],
              correctAnswer: 0,
              explanation: 'A: $10 \\div 4 = \\$2.50$ per notebook. B: $12 \\div 6 = \\$2.00$ per notebook. B is cheaper per item, so B is the better buy.',
            },
            {
              question: 'Two similar triangles: the small one has sides $5$ and $8$; the large one has the matching sides $15$ and $x$. Find $x$.',
              options: ['$24$', '$18$', '$11$', '$40$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{5}{15} = \\dfrac{8}{x} \\Rightarrow 5x = 120 \\Rightarrow x = 24$. (The large triangle is $3$ times the small one.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'proportions-prealgebra',
    sections: [
      {
        id: 'prop5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) write and compare ratios, (2) cross multiply, (3) solve for any missing value (even decimals and sums), and (4) set up word problems. Let's put it all together.`,
      },
      {
        id: 'prop5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Compare two quantities | write a ratio $\\dfrac{a}{b}$ (keep the order!) |
| Test if a proportion is true | cross products equal? $a \\cdot d = b \\cdot c$ |
| Solve $\\dfrac{a}{b} = \\dfrac{c}{d}$ for $x$ | cross multiply, then divide |
| Variable inside a sum | cross multiply, **distribute**, then solve |
| Word problem | line up like units (top with top), then solve |

> ⚠️ Two reminders: **order matters** in a ratio, and in a word problem the **same unit** must go in the same position on both sides.`,
      },
      {
        id: 'prop5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x}{9} = \\dfrac{4}{6}$.',
              options: ['$x = 6$', '$x = 5$', '$x = 13.5$', '$x = 8$'],
              correctAnswer: 0,
              explanation: '$6x = 9 \\cdot 4 = 36 \\Rightarrow x = 6$. (Check: $\\tfrac{6}{9} = \\tfrac{2}{3}$ and $\\tfrac{4}{6} = \\tfrac{2}{3}$. ✓)',
            },
            {
              question: 'A baker uses $4$ eggs for every $3$ cakes. How many eggs for $9$ cakes?',
              options: ['$12$ eggs', '$10$ eggs', '$27$ eggs', '$6$ eggs'],
              correctAnswer: 0,
              explanation: '$\\dfrac{4}{3} = \\dfrac{x}{9} \\Rightarrow 3x = 36 \\Rightarrow x = 12$ eggs.',
            },
          ],
        },
      },
      {
        id: 'prop5-final-input',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** $\\dfrac{x + 3}{4} = \\dfrac{5}{2} \\;\\Rightarrow\\; x = \\,?$
**2)** $15$ feet of rope costs \\$6. What does $25$ feet cost? $\\,?$ *(dollars)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7', '10'],
          hint1: '$2(x+3) = 20 \\Rightarrow 2x + 6 = 20 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.',
          hint2: '$\\dfrac{15}{6} = \\dfrac{25}{x} \\Rightarrow 15x = 150 \\Rightarrow x = 10$ dollars.',
          hint3: 'For #2 keep feet on top and dollars on bottom on both sides.',
          explanation: '1) $x = 7$.  2) $\\$10$ for $25$ feet.',
        },
      },
      {
        id: 'prop5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which equation results from cross multiplying $\\dfrac{7}{x} = \\dfrac{3}{5}$?',
              options: ['$7 \\cdot 5 = 3x$', '$7 \\cdot 3 = 5x$', '$7x = 3 \\cdot 5$', '$x \\cdot 5 = 7 \\cdot 3$'],
              correctAnswer: 0,
              explanation: 'Diagonals: $7 \\cdot 5 = x \\cdot 3$, i.e. $35 = 3x$. (So $x = \\tfrac{35}{3}$.)',
            },
            {
              question: 'Solve $\\dfrac{6}{8} = \\dfrac{x}{12}$.',
              options: ['$x = 9$', '$x = 16$', '$x = 4$', '$x = 18$'],
              correctAnswer: 0,
              explanation: '$6 \\cdot 12 = 8x \\Rightarrow 72 = 8x \\Rightarrow x = 9$.',
            },
            {
              question: 'A photo $4$ inches wide and $6$ inches tall is enlarged so it is $10$ inches wide. How tall is the enlargement?',
              options: ['$15$ inches', '$12$ inches', '$8$ inches', '$60$ inches'],
              correctAnswer: 0,
              explanation: '$\\dfrac{4}{6} = \\dfrac{10}{x} \\Rightarrow 4x = 60 \\Rightarrow x = 15$ inches. The width-to-height ratio stays the same.',
            },
          ],
        },
      },
    ],
  },
]
