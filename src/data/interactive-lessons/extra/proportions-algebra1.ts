import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Proportions (Algebra 1).
 * Registry key: 'proportions-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'proportions-algebra1',
    sections: [
      {
        id: 'prop1-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 1 of 5 — Ratios & What a Proportion Is**

---

### Topics in This Part

| Section |
|---------|
| What Is a Ratio? |
| Equivalent Ratios |
| What Makes a Proportion True |

> 🔑 **Key Concept:** A **proportion** is just an equation that says *two ratios are equal*. Before we can *solve* one, we need to know what a ratio is and when two of them match — that's Part 1.`,
      },
      {
        id: 'prop1-ratio',
        type: 'text' as const,
        content: `## What Is a Ratio?

A **ratio** compares two quantities by division. The ratio "3 to 4" can be written three ways:

$$3 : 4 \\qquad 3 \\text{ to } 4 \\qquad \\frac{3}{4}$$

In this lesson we almost always use the **fraction form** $\\dfrac{3}{4}$, because that's the form we can manipulate algebraically.

### Examples

| In words | As a ratio |
|----------|-----------|
| 2 cups flour for every 3 cups water | $\\dfrac{2}{3}$ |
| 12 miles in 4 hours | $\\dfrac{12}{4} = \\dfrac{3}{1}$ |
| 5 boys to 7 girls | $\\dfrac{5}{7}$ |

> 💡 **Order matters.** The ratio of flour to water $\\left(\\dfrac{2}{3}\\right)$ is **not** the same as the ratio of water to flour $\\left(\\dfrac{3}{2}\\right)$. Always keep the same quantity on top in both ratios of a proportion.`,
      },
      {
        id: 'prop1-equiv',
        type: 'text' as const,
        content: `## Equivalent Ratios

Two ratios are **equivalent** if one is the other scaled up or down — multiply or divide *both* parts by the same nonzero number.

$$\\frac{2}{3} = \\frac{2 \\cdot 4}{3 \\cdot 4} = \\frac{8}{12}$$

So $\\dfrac{2}{3}$ and $\\dfrac{8}{12}$ are equivalent ratios. They simplify to the same lowest-terms fraction.

| Start | Multiply by | Equivalent ratio |
|-------|------------|------------------|
| $\\dfrac{2}{3}$ | $\\times 5$ | $\\dfrac{10}{15}$ |
| $\\dfrac{6}{10}$ | $\\div 2$ | $\\dfrac{3}{5}$ |
| $\\dfrac{4}{7}$ | $\\times 3$ | $\\dfrac{12}{21}$ |

> 🔑 **A proportion is two equivalent ratios set equal**, like $\\dfrac{2}{3} = \\dfrac{8}{12}$.`,
      },
      {
        id: 'prop1-fill',
        type: 'input-boxes' as const,
        content: `**Fill the Missing Part** 🧮

Each pair is equivalent. Find the missing number by scaling top and bottom by the same factor.

**1)** $\\dfrac{2}{3} = \\dfrac{?}{15}$  *(denominator went $3 \\to 15$)*
**2)** $\\dfrac{4}{5} = \\dfrac{12}{?}$  *(numerator went $4 \\to 12$)*
**3)** $\\dfrac{6}{10} = \\dfrac{3}{?}$  *(simplify: numerator went $6 \\to 3$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '15', '5'],
          hint1: '$3 \\to 15$ means $\\times 5$, so the top is $2 \\times 5 = 10$.',
          hint2: '$4 \\to 12$ means $\\times 3$, so the bottom is $5 \\times 3 = 15$.',
          hint3: '$6 \\to 3$ means $\\div 2$, so the bottom is $10 \\div 2 = 5$.',
          explanation: '1) $\\times 5 \\Rightarrow \\dfrac{10}{15}$.  2) $\\times 3 \\Rightarrow \\dfrac{12}{15}$.  3) $\\div 2 \\Rightarrow \\dfrac{3}{5}$.',
        },
      },
      {
        id: 'prop1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Scaling top and bottom by the same factor is the heartbeat of every proportion. Use that idea to pick out equivalent ratios and translate a word phrase into a ratio.`,
        exercise: {
          questions: [
            {
              question: 'Which ratio is equivalent to $\\dfrac{3}{5}$?',
              options: ['$\\dfrac{9}{15}$', '$\\dfrac{6}{8}$', '$\\dfrac{5}{3}$', '$\\dfrac{8}{10}$'],
              correctAnswer: 0,
              explanation: 'Multiply top and bottom of $\\dfrac{3}{5}$ by $3$: $\\dfrac{3\\cdot 3}{5\\cdot 3} = \\dfrac{9}{15}$. The others do not simplify to $\\dfrac{3}{5}$.',
            },
            {
              question: 'A recipe uses 2 eggs for every 5 cups of flour. What is the ratio of eggs to flour?',
              options: ['$\\dfrac{2}{5}$', '$\\dfrac{5}{2}$', '$\\dfrac{2}{7}$', '$\\dfrac{7}{5}$'],
              correctAnswer: 0,
              explanation: 'Eggs go on top because the question asks for the ratio of eggs *to* flour: $\\dfrac{\\text{eggs}}{\\text{flour}} = \\dfrac{2}{5}$.',
            },
          ],
        },
      },
      {
        id: 'prop1-true',
        type: 'text' as const,
        content: `## Is the Proportion True?

A proportion like $\\dfrac{a}{b} = \\dfrac{c}{d}$ is **true** when the two ratios really are equal. The fastest test is to simplify both sides and compare.

### Example: Is $\\dfrac{4}{6} = \\dfrac{6}{9}$ true?

Simplify each side:

$$\\frac{4}{6} = \\frac{2}{3} \\qquad \\frac{6}{9} = \\frac{2}{3}$$

Both reduce to $\\dfrac{2}{3}$, so the proportion is **true**. ✓

### Example: Is $\\dfrac{3}{4} = \\dfrac{5}{6}$ true?

$\\dfrac{3}{4} = 0.75$ but $\\dfrac{5}{6} \\approx 0.833$. They're **not** equal, so this proportion is **false**.

> ⚠️ Don't be fooled by "close" numbers. $\\dfrac{3}{4}$ and $\\dfrac{5}{6}$ look similar but are not equal.`,
      },
      {
        id: 'prop1-true-drill',
        type: 'dropdown-select' as const,
        content: `**True or False?** 🔽

Decide whether each proportion is true by simplifying both ratios.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{2}{3} = \\dfrac{10}{15}$', options: ['True', 'False'] },
            { label: '$\\dfrac{4}{5} = \\dfrac{12}{14}$', options: ['True', 'False'] },
            { label: '$\\dfrac{6}{8} = \\dfrac{9}{12}$', options: ['True', 'False'] },
          ],
          correctAnswers: ['True', 'False', 'True'],
          hint1: '$\\dfrac{10}{15}$ divides by $5$ to give $\\dfrac{2}{3}$ — matches.',
          hint2: '$\\dfrac{12}{14} = \\dfrac{6}{7}$, but $\\dfrac{4}{5}$ does not equal $\\dfrac{6}{7}$.',
          hint3: '$\\dfrac{6}{8} = \\dfrac{3}{4}$ and $\\dfrac{9}{12} = \\dfrac{3}{4}$ — both reduce to $\\dfrac{3}{4}$.',
          explanation: '1) Both reduce to $\\dfrac{2}{3}$ — True.  2) $\\dfrac{4}{5}=0.8$ but $\\dfrac{12}{14}\\approx 0.857$ — False.  3) Both reduce to $\\dfrac{3}{4}$ — True.',
        },
      },
      {
        id: 'prop1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now know:
- A **ratio** compares two numbers, usually written as a fraction.
- **Equivalent ratios** scale by the same factor on top and bottom.
- A **proportion** sets two ratios equal, and it's *true* when both reduce to the same fraction.

In Part 2 we'll handle the real goal: when one number is missing, we **solve** for it using cross products.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'proportions-algebra1',
    sections: [
      {
        id: 'prop2-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 2 of 5 — The Cross-Products Method**

---

> 🔑 **The Idea:** In any true proportion $\\dfrac{a}{b} = \\dfrac{c}{d}$, the **cross products are equal**: $a \\cdot d = b \\cdot c$. This one fact lets us solve for any missing value.`,
      },
      {
        id: 'prop2-why',
        type: 'text' as const,
        content: `## Why Cross Products Work

Start with a proportion and multiply **both sides** by both denominators:

$$\\frac{a}{b} = \\frac{c}{d}$$

Multiply both sides by $b \\cdot d$:

$$\\frac{a}{b}\\cdot bd = \\frac{c}{d}\\cdot bd \\;\\Longrightarrow\\; a\\,d = b\\,c$$

The $b$'s cancel on the left and the $d$'s cancel on the right, leaving the **cross-multiply** rule:

$$\\boxed{\\;a \\cdot d = b \\cdot c\\;}$$

> 💡 **Picture it as an "X".** Multiply along each diagonal of $\\dfrac{a}{b} = \\dfrac{c}{d}$: top-left × bottom-right equals bottom-left × top-right.`,
      },
      {
        id: 'prop2-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Cross-multiplying $\\dfrac{x}{4} = \\dfrac{3}{8}$ gives which equation?',
              options: ['$8x = 12$', '$4x = 24$', '$3x = 32$', '$8x = 3$'],
              correctAnswer: 0,
              explanation: 'Cross products: $x \\cdot 8 = 4 \\cdot 3$, so $8x = 12$.',
            },
            {
              question: 'Cross-multiplying $\\dfrac{5}{n} = \\dfrac{2}{6}$ gives:',
              options: ['$2n = 30$', '$5n = 12$', '$2n = 11$', '$6n = 10$'],
              correctAnswer: 0,
              explanation: 'Cross products: $5 \\cdot 6 = n \\cdot 2$, so $30 = 2n$, i.e. $2n = 30$.',
            },
          ],
        },
      },
      {
        id: 'prop2-solve',
        type: 'text' as const,
        content: `## Solving a Proportion — The Three Steps

To solve a proportion for the unknown:

1. **Cross-multiply** to clear the fractions.
2. **Simplify** each side.
3. **Divide** to isolate the variable.

### Worked Example: $\\dfrac{x}{4} = \\dfrac{3}{8}$

$$x \\cdot 8 = 4 \\cdot 3 \\;\\Longrightarrow\\; 8x = 12 \\;\\Longrightarrow\\; x = \\frac{12}{8} = \\frac{3}{2} = 1.5$$

> ✅ **Check:** $\\dfrac{1.5}{4} = 0.375$ and $\\dfrac{3}{8} = 0.375$ ✓`,
      },
      {
        id: 'prop2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\dfrac{6}{n} = \\dfrac{2}{5}$

The variable is in the **denominator** — that's fine, the method is identical:

$$6 \\cdot 5 = n \\cdot 2 \\;\\Longrightarrow\\; 30 = 2n \\;\\Longrightarrow\\; n = \\frac{30}{2} = 15$$

> ✅ **Check:** $\\dfrac{6}{15} = \\dfrac{2}{5}$ — both reduce to $0.4$ ✓

### Worked Example: $\\dfrac{7}{10} = \\dfrac{x}{4}$

$$7 \\cdot 4 = 10 \\cdot x \\;\\Longrightarrow\\; 28 = 10x \\;\\Longrightarrow\\; x = \\frac{28}{10} = 2.8$$

> 💡 Answers don't have to be whole numbers — fractions and decimals are perfectly normal.`,
      },
      {
        id: 'prop2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $\\dfrac{x}{6} = \\dfrac{10}{15}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Cross-multiply:', options: ['$15x = 60$', '$6x = 150$', '$15x = 6$', '$10x = 90$'] },
            { label: 'Isolate $x$ (divide):', options: ['$x = \\dfrac{60}{15}$', '$x = \\dfrac{15}{60}$', '$x = 60 \\cdot 15$', '$x = \\dfrac{150}{6}$'] },
            { label: 'Final value of $x$:', options: ['$4$', '$25$', '$0.25$', '$9$'] },
          ],
          correctAnswers: ['$15x = 60$', '$x = \\dfrac{60}{15}$', '$4$'],
          hint1: 'Multiply the diagonals: $x \\cdot 15 = 6 \\cdot 10 = 60$.',
          hint2: 'To undo "times 15," divide both sides by $15$.',
          hint3: '$\\dfrac{60}{15} = 4$.',
          explanation: '$x \\cdot 15 = 6 \\cdot 10 = 60 \\Rightarrow x = \\dfrac{60}{15} = 4$. Check: $\\dfrac{4}{6} = \\dfrac{10}{15}$ since both reduce to $\\dfrac{2}{3}$. ✓',
        },
      },
      {
        id: 'prop2-drill-bridge',
        type: 'text' as const,
        content: `## Your Turn to Drive

You've seen the variable on top, on the bottom, and the whole three-step routine. Now run the full **cross-multiply → simplify → divide** process yourself on three fresh proportions.`,
      },
      {
        id: 'prop2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each proportion for the variable. *(Decimals or fractions are fine.)*

**1)** $\\dfrac{x}{9} = \\dfrac{4}{6} \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{5}{n} = \\dfrac{1}{4} \\;\\Rightarrow\\; n = \\,?$
**3)** $\\dfrac{3}{8} = \\dfrac{w}{20} \\;\\Rightarrow\\; w = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '20', '7.5'],
          hint1: '$6x = 9\\cdot 4 = 36$, so $x = \\dfrac{36}{6}$.',
          hint2: '$5\\cdot 4 = n\\cdot 1$, so $n = 20$.',
          hint3: '$8w = 3\\cdot 20 = 60$, so $w = \\dfrac{60}{8} = 7.5$.',
          explanation: '1) $6x = 36 \\Rightarrow x = 6$.  2) $20 = n \\Rightarrow n = 20$.  3) $8w = 60 \\Rightarrow w = 7.5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'proportions-algebra1',
    sections: [
      {
        id: 'prop3-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 3 of 5 — Variables in Binomials & Both Sides**

---

> 🔑 **Why it matters:** Real proportions often have a whole *expression* like $(x+2)$ in a numerator or denominator. Cross products still work — you just distribute and solve the linear equation that pops out.`,
      },
      {
        id: 'prop3-binomial',
        type: 'text' as const,
        content: `## When a Variable Is Inside a Binomial

Cross-multiply exactly as before, then **distribute** and solve.

### Worked Example: $\\dfrac{x+2}{5} = \\dfrac{3}{1}$

$$\\frac{x+2}{5} = \\frac{3}{1} \\;\\Longrightarrow\\; 1\\,(x+2) = 5 \\cdot 3$$

$$x + 2 = 15 \\;\\Longrightarrow\\; x = 13$$

> ✅ **Check:** $\\dfrac{13+2}{5} = \\dfrac{15}{5} = 3$ ✓`,
      },
      {
        id: 'prop3-distribute',
        type: 'text' as const,
        content: `### Worked Example: $\\dfrac{x+1}{4} = \\dfrac{x}{3}$

A variable appears on **both** sides. Cross-multiply, distribute, then collect the $x$-terms:

$$3\\,(x+1) = 4\\,(x) \\;\\Longrightarrow\\; 3x + 3 = 4x$$

Subtract $3x$ from both sides:

$$3 = 4x - 3x = x \\;\\Longrightarrow\\; x = 3$$

> ✅ **Check:** $\\dfrac{3+1}{4} = \\dfrac{4}{4} = 1$ and $\\dfrac{3}{3} = 1$ ✓

> ⚠️ **Distribute carefully.** $3(x+1) = 3x + 3$, **not** $3x + 1$. Forgetting to multiply the second term is the #1 error here.`,
      },
      {
        id: 'prop3-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Cross-multiplying $\\dfrac{x-1}{6} = \\dfrac{2}{3}$ gives which equation?',
              options: ['$3(x-1) = 12$', '$3x - 1 = 12$', '$6(x-1) = 6$', '$2(x-1) = 18$'],
              correctAnswer: 0,
              explanation: 'Cross products: $3(x-1) = 6 \\cdot 2 = 12$. Keep the parentheses until you distribute.',
            },
            {
              question: 'After distributing, $\\dfrac{x+4}{2} = \\dfrac{x}{1}$ becomes:',
              options: ['$x + 4 = 2x$', '$x + 4 = x$', '$2x + 8 = x$', '$x + 4 = 2$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply: $1(x+4) = 2(x)$, so $x + 4 = 2x$. (Solving gives $x = 4$.)',
            },
          ],
        },
      },
      {
        id: 'prop3-worked3',
        type: 'text' as const,
        content: `### Worked Example: $\\dfrac{2x}{9} = \\dfrac{6}{27}$

When a coefficient sits on the variable, divide it off at the end:

$$2x \\cdot 27 = 9 \\cdot 6 \\;\\Longrightarrow\\; 54x = 54 \\;\\Longrightarrow\\; x = 1$$

### Worked Example: $\\dfrac{x}{x+6} = \\dfrac{2}{5}$

$$5x = 2(x+6) \\;\\Longrightarrow\\; 5x = 2x + 12$$

$$5x - 2x = 12 \\;\\Longrightarrow\\; 3x = 12 \\;\\Longrightarrow\\; x = 4$$

> ✅ **Check:** $\\dfrac{4}{4+6} = \\dfrac{4}{10} = \\dfrac{2}{5}$ ✓`,
      },
      {
        id: 'prop3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Equation** 🔽

You're solving $\\dfrac{x+3}{8} = \\dfrac{x}{4}$. Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Cross-multiply:', options: ['$4(x+3) = 8x$', '$8(x+3) = 4x$', '$4x + 3 = 8x$', '$4(x+3) = 8$'] },
            { label: 'Distribute the left side:', options: ['$4x + 12 = 8x$', '$4x + 3 = 8x$', '$x + 12 = 8x$', '$4x + 7 = 8x$'] },
            { label: 'Solve for $x$:', options: ['$x = 3$', '$x = 12$', '$x = 4$', '$x = 1$'] },
          ],
          correctAnswers: ['$4(x+3) = 8x$', '$4x + 12 = 8x$', '$x = 3$'],
          hint1: 'Multiply the diagonals: $4(x+3)$ equals $8 \\cdot x$.',
          hint2: 'Distribute: $4 \\cdot x + 4 \\cdot 3 = 4x + 12$.',
          hint3: '$4x + 12 = 8x \\Rightarrow 12 = 4x \\Rightarrow x = 3$.',
          explanation: '$4(x+3) = 8x \\Rightarrow 4x + 12 = 8x \\Rightarrow 12 = 4x \\Rightarrow x = 3$. Check: $\\dfrac{3+3}{8} = \\dfrac{6}{8} = \\dfrac{3}{4}$ and $\\dfrac{3}{4}$. ✓',
        },
      },
      {
        id: 'prop3-drill-bridge',
        type: 'text' as const,
        content: `## Put It All Together

These next three mix the patterns from this part: a binomial on top, a variable on both sides, and a coefficient on the variable. Cross-multiply first, then **distribute** wherever there's a binomial.`,
      },
      {
        id: 'prop3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each proportion for $x$. *(Whole numbers here.)*

**1)** $\\dfrac{x+1}{3} = \\dfrac{4}{1} \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x}{x+4} = \\dfrac{1}{3} \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{2x}{5} = \\dfrac{6}{15} \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '2', '1'],
          hint1: '$1(x+1) = 3 \\cdot 4 = 12$, so $x + 1 = 12$.',
          hint2: '$3x = 1(x+4) \\Rightarrow 3x = x + 4 \\Rightarrow 2x = 4$.',
          hint3: '$2x \\cdot 15 = 5 \\cdot 6 \\Rightarrow 30x = 30$.',
          explanation: '1) $x + 1 = 12 \\Rightarrow x = 11$.  2) $3x = x+4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.  3) $30x = 30 \\Rightarrow x = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'proportions-algebra1',
    sections: [
      {
        id: 'prop4-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 4 of 5 — Word Problems & Real Applications**

---

> 🔑 **Big Payoff:** Proportions are everywhere — recipes, maps, unit prices, similar figures, and unit conversions. The skill is **setting up** the proportion with matching units lined up top-to-top and bottom-to-bottom.`,
      },
      {
        id: 'prop4-setup',
        type: 'text' as const,
        content: `## Setting Up a Word Problem

The golden rule: **keep the same kind of quantity in the same position** in both ratios.

$$\\frac{\\text{miles}}{\\text{hours}} = \\frac{\\text{miles}}{\\text{hours}}$$

### Worked Example: Unit Rate

A car travels $150$ miles in $3$ hours. At that rate, how far does it go in $5$ hours?

Let $d$ be the distance. Line up miles over hours on both sides:

$$\\frac{150}{3} = \\frac{d}{5}$$

$$150 \\cdot 5 = 3 \\cdot d \\;\\Longrightarrow\\; 750 = 3d \\;\\Longrightarrow\\; d = 250 \\text{ miles}$$

> ✅ **Check:** $150$ miles in $3$ hours is $50$ mph; $50 \\times 5 = 250$ miles ✓`,
      },
      {
        id: 'prop4-recipe',
        type: 'text' as const,
        content: `### Worked Example: Recipe Scaling

A recipe needs $2$ cups of sugar for every $5$ cups of flour. How much sugar pairs with $20$ cups of flour?

$$\\frac{\\text{sugar}}{\\text{flour}} = \\frac{2}{5} = \\frac{s}{20}$$

$$2 \\cdot 20 = 5 \\cdot s \\;\\Longrightarrow\\; 40 = 5s \\;\\Longrightarrow\\; s = 8 \\text{ cups of sugar}$$

### Worked Example: Map Scale

On a map, $1$ inch represents $25$ miles. Two cities are $3.5$ inches apart. How far apart are they really?

$$\\frac{1 \\text{ in}}{25 \\text{ mi}} = \\frac{3.5 \\text{ in}}{m} \\;\\Longrightarrow\\; 1 \\cdot m = 25 \\cdot 3.5 \\;\\Longrightarrow\\; m = 87.5 \\text{ miles}$$

> 💡 **Tip:** Put the unknown where it naturally belongs (here, the real-world miles), and the "$1$ inch = $25$ miles" rate becomes one ratio.`,
      },
      {
        id: 'prop4-check',
        type: 'multiple-choice' as const,
        content: `**Set It Up** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $4$ pens cost \\$3, which proportion finds the cost $c$ of $10$ pens?',
              options: ['$\\dfrac{4}{3} = \\dfrac{10}{c}$', '$\\dfrac{4}{3} = \\dfrac{c}{10}$', '$\\dfrac{3}{4} = \\dfrac{10}{c}$', '$\\dfrac{4}{10} = \\dfrac{3}{c}$'],
              correctAnswer: 0,
              explanation: 'Keep $\\dfrac{\\text{pens}}{\\text{dollars}}$ in both ratios: $\\dfrac{4}{3} = \\dfrac{10}{c}$. (Solving: $4c = 30$, so $c = \\$7.50$.)',
            },
            {
              question: 'A photo $4$ in wide and $6$ in tall is enlarged to a width of $10$ in. Which proportion finds the new height $h$ (keeping shape)?',
              options: ['$\\dfrac{4}{6} = \\dfrac{10}{h}$', '$\\dfrac{4}{10} = \\dfrac{h}{6}$', '$\\dfrac{6}{4} = \\dfrac{10}{h}$', '$\\dfrac{4}{6} = \\dfrac{h}{10}$'],
              correctAnswer: 0,
              explanation: 'Keep $\\dfrac{\\text{width}}{\\text{height}}$ consistent: $\\dfrac{4}{6} = \\dfrac{10}{h}$. (Solving: $4h = 60$, so $h = 15$ in.)',
            },
          ],
        },
      },
      {
        id: 'prop4-similar',
        type: 'text' as const,
        content: `## Similar Figures

**Similar figures** have the same shape but different sizes — their corresponding sides are *proportional*. Match up corresponding sides and solve.

### Worked Example

Two similar triangles: the small one has sides $3$ and $4$; the large one has the corresponding sides $9$ and $x$.

$$\\frac{3}{9} = \\frac{4}{x} \\;\\Longrightarrow\\; 3x = 9 \\cdot 4 = 36 \\;\\Longrightarrow\\; x = 12$$

> 🔑 **Shadow trick:** A $6$-ft person casts a $4$-ft shadow while a tree casts a $20$-ft shadow at the same time. Then $\\dfrac{6}{4} = \\dfrac{t}{20}$, giving a tree height $t = 30$ ft.`,
      },
      {
        id: 'prop4-similar-dropdown',
        type: 'dropdown-select' as const,
        content: `**Solve the Similar-Figure Problem** 🔽

The shadow problem: a $6$-ft person casts a $4$-ft shadow; at the same time a tree casts a $20$-ft shadow. Find the tree's height $t$.`,
        exercise: {
          dropdowns: [
            { label: 'Set up the proportion:', options: ['$\\dfrac{6}{4} = \\dfrac{t}{20}$', '$\\dfrac{6}{4} = \\dfrac{20}{t}$', '$\\dfrac{4}{6} = \\dfrac{t}{20}$', '$\\dfrac{6}{20} = \\dfrac{4}{t}$'] },
            { label: 'Cross-multiply:', options: ['$4t = 120$', '$6t = 80$', '$4t = 26$', '$20t = 24$'] },
            { label: 'Tree height $t$:', options: ['$30$ ft', '$13.3$ ft', '$24$ ft', '$120$ ft'] },
          ],
          correctAnswers: ['$\\dfrac{6}{4} = \\dfrac{t}{20}$', '$4t = 120$', '$30$ ft'],
          hint1: 'Keep $\\dfrac{\\text{height}}{\\text{shadow}}$ in both ratios: $\\dfrac{6}{4} = \\dfrac{t}{20}$.',
          hint2: 'Cross-multiply: $6 \\cdot 20 = 4 \\cdot t$, so $120 = 4t$.',
          hint3: 'Divide: $t = \\dfrac{120}{4} = 30$.',
          explanation: '$\\dfrac{6}{4} = \\dfrac{t}{20} \\Rightarrow 4t = 6 \\cdot 20 = 120 \\Rightarrow t = 30$ ft. The person-to-shadow ratio equals the tree-to-shadow ratio. ✓',
        },
      },
      {
        id: 'prop4-drill-bridge',
        type: 'text' as const,
        content: `## Real-World Round

Now tackle three on your own: a cost problem, a map-scale problem, and a similar-figures problem. For each one, **set up the ratio with matching units lined up**, then cross-multiply and solve.`,
      },
      {
        id: 'prop4-drill',
        type: 'input-boxes' as const,
        content: `**Word Problems** 🧮

Set up a proportion and solve. Enter just the number.

**1)** $3$ apples cost \\$2. How many dollars do $12$ apples cost?  *(dollars)*
**2)** A map uses $1$ inch $= 30$ miles. How many miles is $4$ inches?  *(miles)*
**3)** Two similar rectangles: small is $5$ by $8$; the large one's matching side to the $5$ is $15$. Find the side matching the $8$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '120', '24'],
          hint1: '$\\dfrac{3}{2} = \\dfrac{12}{c} \\Rightarrow 3c = 24$.',
          hint2: '$\\dfrac{1}{30} = \\dfrac{4}{m} \\Rightarrow m = 30 \\cdot 4$.',
          hint3: '$\\dfrac{5}{15} = \\dfrac{8}{x} \\Rightarrow 5x = 120$.',
          explanation: '1) $3c = 24 \\Rightarrow c = \\$8$.  2) $m = 120$ miles.  3) $5x = 120 \\Rightarrow x = 24$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'proportions-algebra1',
    sections: [
      {
        id: 'prop5-intro',
        type: 'text' as const,
        content: `# ⚖️ Solving Proportions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize and test proportions, (2) solve with cross products, (3) handle variables in binomials and on both sides, and (4) set up real-world word problems. Let's put it all together.`,
      },
      {
        id: 'prop5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Test if $\\dfrac{a}{b} = \\dfrac{c}{d}$ | check $a\\,d = b\\,c$ (cross products) |
| Solve $\\dfrac{x}{b} = \\dfrac{c}{d}$ | cross-multiply, then divide |
| Variable in a binomial | cross-multiply, **distribute**, solve |
| Variable on both sides | cross-multiply, collect $x$-terms |
| Word problem | line up matching units top & bottom |

> ⚠️ **Top mistakes to avoid:** flipping a ratio's order, forgetting to distribute across a binomial, and mixing units (miles over hours on one side, hours over miles on the other).`,
      },
      {
        id: 'prop5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x}{12} = \\dfrac{3}{4}$.',
              options: ['$x = 9$', '$x = 16$', '$x = 4$', '$x = 36$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply: $4x = 12 \\cdot 3 = 36 \\Rightarrow x = 9$. Check: $\\dfrac{9}{12} = \\dfrac{3}{4}$. ✓',
            },
            {
              question: 'Solve $\\dfrac{x+2}{6} = \\dfrac{x}{4}$.',
              options: ['$x = 4$', '$x = 2$', '$x = 6$', '$x = 8$'],
              correctAnswer: 0,
              explanation: '$4(x+2) = 6x \\Rightarrow 4x + 8 = 6x \\Rightarrow 8 = 2x \\Rightarrow x = 4$. Check: $\\dfrac{6}{6} = 1$ and $\\dfrac{4}{4} = 1$. ✓',
            },
          ],
        },
      },
      {
        id: 'prop5-drill-bridge',
        type: 'text' as const,
        content: `## Two More to Warm Up

Before the Exit Quiz, solve these two — one with the variable in the denominator, one with it on top. Remember decimals and fractions are valid answers.`,
      },
      {
        id: 'prop5-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

Solve each. *(Decimals/fractions ok.)*

**1)** $\\dfrac{8}{n} = \\dfrac{2}{3} \\;\\Rightarrow\\; n = \\,?$
**2)** $\\dfrac{x}{5} = \\dfrac{7}{2} \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '17.5'],
          hint1: '$8 \\cdot 3 = 2n \\Rightarrow 24 = 2n$.',
          hint2: '$2x = 5 \\cdot 7 = 35 \\Rightarrow x = \\dfrac{35}{2}$.',
          hint3: 'Divide to finish: $n = \\dfrac{24}{2} = 12$ and $x = \\dfrac{35}{2} = 17.5$.',
          explanation: '1) $24 = 2n \\Rightarrow n = 12$.  2) $2x = 35 \\Rightarrow x = 17.5$.',
        },
      },
      {
        id: 'prop5-exit-bridge',
        type: 'text' as const,
        content: `## You're Ready

That's every tool: test a proportion, cross-multiply, distribute through binomials, and model word problems. Finish strong with the three-question Exit Quiz below.`,
      },
      {
        id: 'prop5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Cross-multiplying $\\dfrac{5}{x} = \\dfrac{10}{8}$ gives which equation?',
              options: ['$10x = 40$', '$5x = 80$', '$10x = 13$', '$8x = 50$'],
              correctAnswer: 0,
              explanation: 'Cross products: $5 \\cdot 8 = x \\cdot 10$, so $40 = 10x$, i.e. $10x = 40$. (Then $x = 4$.)',
            },
            {
              question: 'A truck uses $4$ gallons of gas to go $96$ miles. How many miles can it go on $7$ gallons (same rate)?',
              options: ['$168$ miles', '$132$ miles', '$160$ miles', '$24$ miles'],
              correctAnswer: 0,
              explanation: '$\\dfrac{4}{96} = \\dfrac{7}{m} \\Rightarrow 4m = 96 \\cdot 7 = 672 \\Rightarrow m = 168$. (Or: $96 \\div 4 = 24$ mpg, $24 \\times 7 = 168$.) ✓',
            },
            {
              question: 'Solve $\\dfrac{x+3}{2} = \\dfrac{x+9}{4}$.',
              options: ['$x = 3$', '$x = 6$', '$x = 12$', '$x = 1$'],
              correctAnswer: 0,
              explanation: '$4(x+3) = 2(x+9) \\Rightarrow 4x + 12 = 2x + 18 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Check: $\\dfrac{6}{2} = 3$ and $\\dfrac{12}{4} = 3$. ✓',
            },
          ],
        },
      },
    ],
  },
]
