import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multiplying and Dividing Fractions (Grade 5 Math).
 * Registry key / DB slug: 'multiply-divide-fractions-grade5'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multiply-divide-fractions-grade5',
    sections: [
      {
        id: 'mdf1-intro',
        type: 'text' as const,
        content: `# 🍫 Multiplying Fractions

**Part 1 of 5 — Multiply Across the Top, Across the Bottom**

---

### Topics in This Part

| Section |
|---------|
| What "Multiply a Fraction" Means |
| The Multiply-Across Rule |
| "Of" Means Multiply |

> 🔑 **Key Concept:** Multiplying fractions is the *easy* operation — there is **no common denominator to find**. You just multiply straight across: tops times tops, bottoms times bottoms.`,
      },
      {
        id: 'mdf1-rule',
        type: 'text' as const,
        content: `## The Multiply-Across Rule

To multiply two fractions, multiply the **numerators** together and the **denominators** together:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

That's the whole rule. No matching denominators, no flipping — just multiply.

### Examples

| Problem | Multiply across | Answer |
|---------|-----------------|--------|
| $\\frac{2}{3} \\times \\frac{4}{5}$ | $\\frac{2\\times 4}{3\\times 5}$ | $\\frac{8}{15}$ |
| $\\frac{1}{2} \\times \\frac{3}{7}$ | $\\frac{1\\times 3}{2\\times 7}$ | $\\frac{3}{14}$ |
| $\\frac{3}{5} \\times \\frac{2}{3}$ | $\\frac{3\\times 2}{5\\times 3}$ | $\\frac{6}{15}$ |

> 💡 **Did you notice?** When you multiply two fractions that are each *less than 1*, the answer is **smaller** than both of them. Taking a part of a part gives you less — that's the opposite of what adding does.`,
      },
      {
        id: 'mdf1-check1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\frac{2}{3} \\times \\frac{1}{4} = $',
              options: ['$\\frac{2}{12}$', '$\\frac{3}{7}$', '$\\frac{2}{7}$', '$\\frac{3}{12}$'],
              correctAnswer: 0,
              explanation: 'Multiply across: $\\frac{2\\times 1}{3\\times 4} = \\frac{2}{12}$. (We could simplify this to $\\frac{1}{6}$ — more on that in Part 2.)',
            },
            {
              question: 'When you multiply $\\frac{1}{2} \\times \\frac{1}{2}$, the answer is…',
              options: ['Bigger than $\\frac{1}{2}$', 'Smaller than $\\frac{1}{2}$', 'Exactly $1$', 'Exactly $\\frac{1}{2}$'],
              correctAnswer: 1,
              explanation: '$\\frac{1}{2}\\times\\frac{1}{2} = \\frac{1}{4}$, which is smaller than $\\frac{1}{2}$. Half *of* a half is a quarter — a part of a part is smaller.',
            },
          ],
        },
      },
      {
        id: 'mdf1-of',
        type: 'text' as const,
        content: `## The Magic Word: "Of"

In math, the word **"of"** almost always means **multiply** when fractions are involved.

$$\\frac{1}{2} \\text{ of } \\frac{1}{3} \\;=\\; \\frac{1}{2} \\times \\frac{1}{3} \\;=\\; \\frac{1}{6}$$

Picture a chocolate bar split into $3$ equal rows. One row is $\\frac{1}{3}$ of the bar. Now take **half** *of* that row. You end up with a piece that is $\\frac{1}{6}$ of the whole bar. 🍫

| Words | Math | Answer |
|-------|------|--------|
| Half **of** a third | $\\frac{1}{2} \\times \\frac{1}{3}$ | $\\frac{1}{6}$ |
| A third **of** a half | $\\frac{1}{3} \\times \\frac{1}{2}$ | $\\frac{1}{6}$ |
| Two-thirds **of** $\\frac{3}{4}$ | $\\frac{2}{3} \\times \\frac{3}{4}$ | $\\frac{6}{12} = \\frac{1}{2}$ |

> 🔑 **Translate first.** Whenever you see "$\\frac{2}{3}$ **of** something," rewrite it as "$\\frac{2}{3}$ **times** something" and multiply across.`,
      },
      {
        id: 'mdf1-drill',
        type: 'input-boxes' as const,
        content: `**Multiply Across** 🧮

Multiply straight across. Enter each answer as a fraction like \`8/15\` (you do **not** need to simplify yet).

**1)** $\\frac{2}{3} \\times \\frac{4}{5} = \\,?$
**2)** $\\frac{3}{4} \\times \\frac{1}{2} = \\,?$
**3)** $\\frac{5}{6} \\times \\frac{2}{7} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8/15', '3/8', '10/42'],
          hint1: 'Tops times tops, bottoms times bottoms: $\\frac{2\\times 4}{3\\times 5}$.',
          hint2: 'For #2, $\\frac{3\\times 1}{4\\times 2} = \\frac{3}{8}$.',
          hint3: 'For #3, $\\frac{5\\times 2}{6\\times 7} = \\frac{10}{42}$.',
          explanation: '1) $\\frac{2\\times4}{3\\times5}=\\frac{8}{15}$.  2) $\\frac{3\\times1}{4\\times2}=\\frac{3}{8}$.  3) $\\frac{5\\times2}{6\\times7}=\\frac{10}{42}$ (which simplifies to $\\frac{5}{21}$).',
        },
      },
      {
        id: 'mdf1-translate',
        type: 'multiple-choice' as const,
        content: `**"Of" Means Multiply** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{1}{4}$ **of** $\\frac{2}{3}$?',
              options: ['$\\frac{2}{12}$', '$\\frac{3}{7}$', '$\\frac{2}{7}$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: '"Of" means multiply: $\\frac{1}{4}\\times\\frac{2}{3} = \\frac{1\\times 2}{4\\times 3} = \\frac{2}{12}$ (which is $\\frac{1}{6}$ simplified).',
            },
            {
              question: 'A recipe needs $\\frac{3}{4}$ of a cup of sugar, but you only want to make $\\frac{1}{2}$ of the recipe. How much sugar do you use?',
              options: ['$\\frac{3}{8}$ cup', '$\\frac{4}{6}$ cup', '$\\frac{1}{4}$ cup', '$\\frac{5}{4}$ cup'],
              correctAnswer: 0,
              explanation: 'Half *of* $\\frac{3}{4}$ is $\\frac{1}{2}\\times\\frac{3}{4} = \\frac{3}{8}$ cup. Making less of the recipe means using less sugar, so the answer should be smaller than $\\frac{3}{4}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multiply-divide-fractions-grade5',
    sections: [
      {
        id: 'mdf2-intro',
        type: 'text' as const,
        content: `# 🍫 Multiplying Fractions

**Part 2 of 5 — Whole Numbers, Mixed Numbers & Simplifying**

---

> 🔑 **The Idea:** Any whole number is secretly a fraction over $1$, and any mixed number can become an improper fraction. Once everything is a fraction, the multiply-across rule handles it all.`,
      },
      {
        id: 'mdf2-whole',
        type: 'text' as const,
        content: `## Multiplying a Fraction by a Whole Number

Every whole number can be written as a fraction over $1$:

$$5 = \\frac{5}{1}, \\qquad 3 = \\frac{3}{1}, \\qquad 12 = \\frac{12}{1}$$

So to multiply a fraction by a whole number, just put the whole number over $1$ and multiply across:

$$\\frac{2}{3} \\times 6 = \\frac{2}{3} \\times \\frac{6}{1} = \\frac{2\\times 6}{3\\times 1} = \\frac{12}{3} = 4$$

| Problem | Rewrite | Answer |
|---------|---------|--------|
| $\\frac{1}{2}\\times 8$ | $\\frac{1}{2}\\times\\frac{8}{1}$ | $\\frac{8}{2} = 4$ |
| $\\frac{3}{4}\\times 5$ | $\\frac{3}{4}\\times\\frac{5}{1}$ | $\\frac{15}{4} = 3\\tfrac{3}{4}$ |
| $\\frac{2}{5}\\times 10$ | $\\frac{2}{5}\\times\\frac{10}{1}$ | $\\frac{20}{5} = 4$ |

> 💡 A quick shortcut: $\\frac{2}{3}$ of $6$ means "split $6$ into $3$ equal groups ($= 2$ each) and take $2$ groups" $= 4$. Same answer, no surprise.`,
      },
      {
        id: 'mdf2-simplify',
        type: 'text' as const,
        content: `## Simplifying the Answer

A fraction is in **simplest form** when the top and bottom share no common factor except $1$. To simplify, divide the top and bottom by the same number.

$$\\frac{6}{12} = \\frac{6 \\div 6}{12 \\div 6} = \\frac{1}{2}$$

### Cross-Cancel *Before* You Multiply (the pro move)

You can simplify **early** by cancelling a top number with a bottom number that share a factor. This keeps the numbers small.

$$\\frac{3}{4} \\times \\frac{2}{9}$$

The $3$ on top and the $9$ on the bottom share a factor of $3$ → becomes $1$ and $3$. The $2$ on top and the $4$ on the bottom share a factor of $2$ → becomes $1$ and $2$:

$$\\frac{\\cancel{3}^{\\,1}}{\\cancel{4}_{\\,2}} \\times \\frac{\\cancel{2}^{\\,1}}{\\cancel{9}_{\\,3}} = \\frac{1\\times 1}{2\\times 3} = \\frac{1}{6}$$

> 💡 **Cross-cancelling is optional but smart.** Whether you cancel first or simplify at the end, you get the **same** answer. Cancelling early just keeps the multiplication easier.`,
      },
      {
        id: 'mdf2-check-simplify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\frac{4}{5} \\times \\frac{5}{8}$, fully simplified, equals:',
              options: ['$\\frac{1}{2}$', '$\\frac{20}{40}$', '$\\frac{9}{13}$', '$\\frac{2}{3}$'],
              correctAnswer: 0,
              explanation: '$\\frac{4}{5}\\times\\frac{5}{8} = \\frac{20}{40} = \\frac{1}{2}$. (Cross-cancel: the $5$s cancel and $\\frac{4}{8}=\\frac{1}{2}$.)',
            },
            {
              question: 'Which fraction is already in simplest form?',
              options: ['$\\frac{6}{9}$', '$\\frac{4}{10}$', '$\\frac{5}{8}$', '$\\frac{9}{12}$'],
              correctAnswer: 2,
              explanation: '$5$ and $8$ share no common factor except $1$, so $\\frac{5}{8}$ is simplest. The others reduce: $\\frac{6}{9}=\\frac{2}{3}$, $\\frac{4}{10}=\\frac{2}{5}$, $\\frac{9}{12}=\\frac{3}{4}$.',
            },
          ],
        },
      },
      {
        id: 'mdf2-mixed',
        type: 'text' as const,
        content: `## Multiplying Mixed Numbers

You **cannot** multiply mixed numbers straight across. First turn each mixed number into an **improper fraction**.

To convert: multiply the whole number by the denominator, add the numerator, keep the same denominator.

$$1\\tfrac{1}{2} = \\frac{(1\\times 2) + 1}{2} = \\frac{3}{2}, \\qquad 2\\tfrac{1}{3} = \\frac{(2\\times 3) + 1}{3} = \\frac{7}{3}$$

### Worked Example: $1\\tfrac{1}{2} \\times \\tfrac{2}{3}$

$$1\\tfrac{1}{2} \\times \\frac{2}{3} = \\frac{3}{2} \\times \\frac{2}{3} = \\frac{3\\times 2}{2\\times 3} = \\frac{6}{6} = 1$$

### Worked Example: $2\\tfrac{1}{4} \\times \\tfrac{2}{3}$

$$2\\tfrac{1}{4} = \\frac{9}{4}, \\quad\\text{so}\\quad \\frac{9}{4}\\times\\frac{2}{3} = \\frac{18}{12} = \\frac{3}{2} = 1\\tfrac{1}{2}$$

> ⚠️ **Never multiply the whole numbers and the fractions separately.** Convert to improper fractions first, *then* multiply across.`,
      },
      {
        id: 'mdf2-convert',
        type: 'dropdown-select' as const,
        content: `**Convert, Then Multiply** 🔽

Work through $1\\tfrac{2}{3} \\times \\tfrac{1}{2}$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'First, write $1\\tfrac{2}{3}$ as an improper fraction:', options: ['$\\frac{5}{3}$', '$\\frac{3}{3}$', '$\\frac{1}{3}$', '$\\frac{6}{3}$'] },
            { label: 'Now multiply across $\\frac{5}{3}\\times\\frac{1}{2}$:', options: ['$\\frac{5}{6}$', '$\\frac{6}{5}$', '$\\frac{5}{5}$', '$\\frac{2}{3}$'] },
            { label: 'Is the answer already in simplest form?', options: ['Yes', 'No — it reduces to $\\frac{1}{2}$', 'No — it reduces to $\\frac{1}{3}$', 'No — it reduces to $1$'] },
          ],
          correctAnswers: ['$\\frac{5}{3}$', '$\\frac{5}{6}$', 'Yes'],
          hint1: '$1\\tfrac{2}{3} = \\frac{(1\\times 3)+2}{3} = \\frac{5}{3}$.',
          hint2: 'Multiply across: $\\frac{5\\times 1}{3\\times 2} = \\frac{5}{6}$.',
          hint3: '$5$ and $6$ share no common factor except $1$, so $\\frac{5}{6}$ is already simplest.',
          explanation: '$1\\tfrac{2}{3}\\times\\frac{1}{2} = \\frac{5}{3}\\times\\frac{1}{2} = \\frac{5}{6}$, which is already in simplest form.',
        },
      },
      {
        id: 'mdf2-drill',
        type: 'input-boxes' as const,
        content: `**Multiply & Simplify** 🧮

Find each product. Enter whole-number answers as whole numbers (like \`4\`) and fraction answers in simplest form (like \`1/6\`).

**1)** $\\frac{3}{8} \\times 4 = \\,?$  *(simplify)*
**2)** $\\frac{2}{3} \\times \\frac{3}{4} = \\,?$  *(simplify)*
**3)** $1\\tfrac{1}{2} \\times \\frac{4}{9} = \\,?$  *(simplify)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/2', '1/2', '2/3'],
          hint1: '#1: $\\frac{3}{8}\\times\\frac{4}{1} = \\frac{12}{8}$. Divide top and bottom by $4$.',
          hint2: '#2: $\\frac{2}{3}\\times\\frac{3}{4} = \\frac{6}{12}$. Divide top and bottom by $6$.',
          hint3: '#3: $1\\tfrac{1}{2} = \\frac{3}{2}$, so $\\frac{3}{2}\\times\\frac{4}{9} = \\frac{12}{18}$. Divide by $6$.',
          explanation: '1) $\\frac{12}{8} = \\frac{3}{2}$ (or $1\\tfrac{1}{2}$).  2) $\\frac{6}{12} = \\frac{1}{2}$.  3) $\\frac{12}{18} = \\frac{2}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multiply-divide-fractions-grade5',
    sections: [
      {
        id: 'mdf3-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Fractions

**Part 3 of 5 — Reciprocals & What Division Really Asks**

---

### Topics in This Part

| Section |
|---------|
| What "Divide by a Fraction" Means |
| Reciprocals (Flipping a Fraction) |
| Why Dividing = Multiplying by the Reciprocal |

> 🔑 **Key Concept:** Dividing by a fraction asks "**how many of *that* fit inside this?**" The trick that answers it every time is the **reciprocal** — and that's what this part builds.`,
      },
      {
        id: 'mdf3-meaning',
        type: 'text' as const,
        content: `## What Division Really Asks

The question $a \\div b$ means: **"How many groups of $b$ fit into $a$?"**

That's true for fractions too. Look at $1 \\div \\frac{1}{4}$:

$$1 \\div \\frac{1}{4} = \\text{"How many quarters fit in one whole?"} = 4$$

One whole pizza cut into quarters gives **4** slices. 🍕 So $1 \\div \\frac{1}{4} = 4$.

| Question | Means | Answer |
|----------|-------|--------|
| $1 \\div \\frac{1}{2}$ | How many halves in $1$? | $2$ |
| $2 \\div \\frac{1}{2}$ | How many halves in $2$? | $4$ |
| $1 \\div \\frac{1}{3}$ | How many thirds in $1$? | $3$ |

> 💡 **Surprise!** Dividing by a fraction less than $1$ makes the answer **bigger**, not smaller. That feels strange, but it makes sense: lots of tiny pieces fit inside a whole.`,
      },
      {
        id: 'mdf3-check-meaning',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $3 \\div \\frac{1}{2}$ really ask?',
              options: ['How many halves fit into $3$?', 'What is half of $3$?', 'What is $3$ minus a half?', 'How many $3$s fit into a half?'],
              correctAnswer: 0,
              explanation: 'Division asks how many groups of the divisor fit in. $3 \\div \\frac{1}{2}$ asks how many halves fit into $3$ — and the answer is $6$.',
            },
            {
              question: 'Dividing a whole number by a fraction less than $1$ gives an answer that is…',
              options: ['Bigger than the whole number', 'Smaller than the whole number', 'Always exactly $1$', 'Always a fraction less than $1$'],
              correctAnswer: 0,
              explanation: 'Small pieces fit many times into a whole, so the count goes *up*. For example $4 \\div \\frac{1}{3} = 12$, which is bigger than $4$.',
            },
          ],
        },
      },
      {
        id: 'mdf3-reciprocal',
        type: 'text' as const,
        content: `## Reciprocals: Just Flip It

The **reciprocal** of a fraction is what you get when you **flip it upside down** — swap the numerator and denominator.

$$\\text{reciprocal of } \\frac{3}{4} = \\frac{4}{3}, \\qquad \\text{reciprocal of } \\frac{2}{5} = \\frac{5}{2}$$

A whole number flips by putting it over $1$ first:

$$\\text{reciprocal of } 5 = \\text{reciprocal of } \\frac{5}{1} = \\frac{1}{5}$$

The defining property: **a number times its reciprocal always equals $1$.**

$$\\frac{3}{4} \\times \\frac{4}{3} = \\frac{12}{12} = 1 \\qquad ✓$$

| Number | Reciprocal | Check (product $= 1$) |
|--------|-----------|----------------------|
| $\\frac{2}{3}$ | $\\frac{3}{2}$ | $\\frac{6}{6}=1$ ✓ |
| $\\frac{7}{8}$ | $\\frac{8}{7}$ | $\\frac{56}{56}=1$ ✓ |
| $6$ | $\\frac{1}{6}$ | $\\frac{6}{6}=1$ ✓ |

> ⚠️ A mixed number must become an **improper fraction first**, *then* flip. The reciprocal of $1\\tfrac{1}{2} = \\frac{3}{2}$ is $\\frac{2}{3}$ — **not** $1\\tfrac{2}{1}$.`,
      },
      {
        id: 'mdf3-recip-drill',
        type: 'input-boxes' as const,
        content: `**Find the Reciprocal** 🧮

Write the reciprocal (flip it). Enter fractions like \`4/3\`; whole numbers like \`5\` become \`1/5\`.

**1)** Reciprocal of $\\frac{5}{8} = \\,?$
**2)** Reciprocal of $7 = \\,?$
**3)** Reciprocal of $1\\tfrac{1}{4} = \\,?$  *(convert to improper first, then flip)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8/5', '1/7', '4/5'],
          hint1: 'Flip $\\frac{5}{8}$ to swap top and bottom.',
          hint2: '$7 = \\frac{7}{1}$, so flip to $\\frac{1}{7}$.',
          hint3: '$1\\tfrac{1}{4} = \\frac{5}{4}$. Now flip $\\frac{5}{4}$.',
          explanation: '1) $\\frac{8}{5}$.  2) $\\frac{1}{7}$.  3) $1\\tfrac{1}{4}=\\frac{5}{4}$, which flips to $\\frac{4}{5}$.',
        },
      },
      {
        id: 'mdf3-why',
        type: 'text' as const,
        content: `## Why Dividing = Multiplying by the Reciprocal

Here is the connection that powers the whole method:

$$a \\div \\frac{c}{d} \\;=\\; a \\times \\frac{d}{c}$$

**Dividing by a fraction is the same as multiplying by its reciprocal.** Check it against something we already know:

$$1 \\div \\frac{1}{4} = 1 \\times \\frac{4}{1} = 4 \\qquad ✓$$

We *counted* $4$ quarters in a whole earlier — and flipping-and-multiplying gives the exact same $4$. The trick isn't magic; it's just the counting question written as multiplication.

> 🔑 **Remember this sentence:** "Dividing by a fraction = multiplying by its flip." In Part 4 we turn it into a 3-step recipe you can run on autopilot.`,
      },
      {
        id: 'mdf3-check-why',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$6 \\div \\frac{2}{3}$ is the same as which multiplication?',
              options: ['$6 \\times \\frac{3}{2}$', '$6 \\times \\frac{2}{3}$', '$\\frac{2}{3} \\times \\frac{1}{6}$', '$6 \\times 2 \\times 3$'],
              correctAnswer: 0,
              explanation: 'Divide by $\\frac{2}{3}$ → multiply by its reciprocal $\\frac{3}{2}$: $6\\times\\frac{3}{2} = \\frac{18}{2} = 9$.',
            },
            {
              question: 'A number times its reciprocal always equals…',
              options: ['$1$', '$0$', 'The number itself', '$2$'],
              correctAnswer: 0,
              explanation: 'That is the definition of a reciprocal: $\\frac{a}{b}\\times\\frac{b}{a} = \\frac{ab}{ab} = 1$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multiply-divide-fractions-grade5',
    sections: [
      {
        id: 'mdf4-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Fractions

**Part 4 of 5 — Keep, Change, Flip**

---

> 🔑 **The Recipe:** **Keep** the first fraction, **Change** $\\div$ to $\\times$, **Flip** the second fraction. Then multiply across just like Part 1. That's the entire method.`,
      },
      {
        id: 'mdf4-kcf',
        type: 'text' as const,
        content: `## The Keep–Change–Flip Method

To compute $\\frac{a}{b} \\div \\frac{c}{d}$:

1. **Keep** the first fraction exactly as it is: $\\frac{a}{b}$
2. **Change** the division sign to multiplication: $\\times$
3. **Flip** the second fraction (use its reciprocal): $\\frac{d}{c}$

$$\\frac{a}{b} \\div \\frac{c}{d} \\;\\xrightarrow{\\;\\text{KCF}\\;}\\; \\frac{a}{b} \\times \\frac{d}{c}$$

### Worked Example: $\\frac{1}{2} \\div \\frac{1}{4}$

$$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$$

> ✅ **Check with meaning:** "How many quarters fit in a half?" Two quarters make a half, so the answer is $2$. ✓

### Worked Example: $\\frac{3}{4} \\div \\frac{2}{3}$

$$\\frac{3}{4} \\div \\frac{2}{3} = \\frac{3}{4} \\times \\frac{3}{2} = \\frac{9}{8} = 1\\tfrac{1}{8}$$

> ⚠️ **Only flip the SECOND fraction.** A very common slip is flipping the first one too. Keep the first one exactly as it is.`,
      },
      {
        id: 'mdf4-order',
        type: 'dropdown-select' as const,
        content: `**Run the Recipe** 🔽

Solve $\\frac{2}{5} \\div \\frac{3}{4}$ using Keep–Change–Flip.`,
        exercise: {
          dropdowns: [
            { label: 'Keep the first fraction:', options: ['$\\frac{2}{5}$', '$\\frac{5}{2}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$'] },
            { label: 'Change the operation to:', options: ['$\\times$ (multiply)', '$+$ (add)', '$-$ (subtract)', '$\\div$ (still divide)'] },
            { label: 'Flip the second fraction to:', options: ['$\\frac{4}{3}$', '$\\frac{3}{4}$', '$\\frac{5}{2}$', '$\\frac{2}{5}$'] },
            { label: 'Multiply across to get:', options: ['$\\frac{8}{15}$', '$\\frac{6}{20}$', '$\\frac{15}{8}$', '$\\frac{5}{9}$'] },
          ],
          correctAnswers: ['$\\frac{2}{5}$', '$\\times$ (multiply)', '$\\frac{4}{3}$', '$\\frac{8}{15}$'],
          hint1: 'Keep means leave the first fraction unchanged: $\\frac{2}{5}$.',
          hint2: 'Change the $\\div$ into a $\\times$, then flip only the second fraction $\\frac{3}{4}\\to\\frac{4}{3}$.',
          hint3: 'Now multiply across: $\\frac{2}{5}\\times\\frac{4}{3} = \\frac{2\\times 4}{5\\times 3} = \\frac{8}{15}$.',
          explanation: '$\\frac{2}{5}\\div\\frac{3}{4} = \\frac{2}{5}\\times\\frac{4}{3} = \\frac{8}{15}$, already in simplest form.',
        },
      },
      {
        id: 'mdf4-whole',
        type: 'text' as const,
        content: `## Dividing with Whole Numbers & Mixed Numbers

Same recipe — just turn every whole or mixed number into a fraction **first**.

### Whole ÷ Fraction: $6 \\div \\frac{1}{2}$

$$6 \\div \\frac{1}{2} = \\frac{6}{1} \\times \\frac{2}{1} = \\frac{12}{1} = 12$$

"How many halves in $6$?" → $12$. ✓

### Fraction ÷ Whole: $\\frac{2}{3} \\div 4$

Write $4 = \\frac{4}{1}$, then Keep–Change–Flip:

$$\\frac{2}{3} \\div \\frac{4}{1} = \\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{12} = \\frac{1}{6}$$

### Mixed ÷ Fraction: $1\\tfrac{1}{2} \\div \\frac{3}{4}$

Convert $1\\tfrac{1}{2} = \\frac{3}{2}$, then KCF:

$$\\frac{3}{2} \\div \\frac{3}{4} = \\frac{3}{2} \\times \\frac{4}{3} = \\frac{12}{6} = 2$$

> 💡 **Two checkpoints before you flip:** (1) every number is a fraction, and (2) you only flip the divisor (the one *after* the $\\div$).`,
      },
      {
        id: 'mdf4-check-whole',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\frac{3}{5} \\div 2 = $',
              options: ['$\\frac{3}{10}$', '$\\frac{6}{5}$', '$\\frac{5}{6}$', '$\\frac{3}{7}$'],
              correctAnswer: 0,
              explanation: 'Write $2=\\frac{2}{1}$, then KCF: $\\frac{3}{5}\\times\\frac{1}{2} = \\frac{3}{10}$. Sharing $\\frac{3}{5}$ between $2$ people gives each less, so the answer is smaller. ✓',
            },
            {
              question: '$8 \\div \\frac{2}{3} = $',
              options: ['$12$', '$\\frac{16}{3}$', '$\\frac{3}{16}$', '$6$'],
              correctAnswer: 0,
              explanation: '$8\\div\\frac{2}{3} = \\frac{8}{1}\\times\\frac{3}{2} = \\frac{24}{2} = 12$. How many two-thirds fit in $8$? Twelve. ✓',
            },
          ],
        },
      },
      {
        id: 'mdf4-drill',
        type: 'input-boxes' as const,
        content: `**Keep–Change–Flip Drill** 🧮

Divide using KCF. Enter whole-number answers as whole numbers (like \`12\`) and fractions in simplest form (like \`1/6\`).

**1)** $\\frac{5}{6} \\div \\frac{1}{2} = \\,?$
**2)** $\\frac{4}{9} \\div \\frac{2}{3} = \\,?$  *(simplify)*
**3)** $3 \\div \\frac{1}{4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/3', '2/3', '12'],
          hint1: '#1: $\\frac{5}{6}\\times\\frac{2}{1} = \\frac{10}{6}$. Divide top and bottom by $2$.',
          hint2: '#2: $\\frac{4}{9}\\times\\frac{3}{2} = \\frac{12}{18}$. Divide top and bottom by $6$.',
          hint3: '#3: $3\\times\\frac{4}{1} = 12$.',
          explanation: '1) $\\frac{10}{6}=\\frac{5}{3}$ (or $1\\tfrac{2}{3}$).  2) $\\frac{12}{18}=\\frac{2}{3}$.  3) $3\\times 4 = 12$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multiply-divide-fractions-grade5',
    sections: [
      {
        id: 'mdf5-intro',
        type: 'text' as const,
        content: `# 🏆 Multiplying & Dividing Fractions

**Part 5 of 5 — Mixed Practice, Word Problems & Mastery Check**

---

You can now (1) multiply fractions straight across, (2) handle whole and mixed numbers, (3) find reciprocals, and (4) divide with Keep–Change–Flip. Time to put it all together.`,
      },
      {
        id: 'mdf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Multiply $\\frac{a}{b}\\times\\frac{c}{d}$ | Multiply across: $\\frac{a\\times c}{b\\times d}$ |
| Multiply by a whole number | Put it over $1$, then multiply across |
| Multiply/divide a mixed number | Convert to an improper fraction **first** |
| Find a reciprocal | Flip top and bottom |
| Divide $\\frac{a}{b}\\div\\frac{c}{d}$ | **Keep, Change, Flip:** $\\frac{a}{b}\\times\\frac{d}{c}$ |

> ⚠️ **Two reminders:** simplify your final answer, and when dividing, **only flip the second fraction** — never the first.`,
      },
      {
        id: 'mdf5-decide',
        type: 'dropdown-select' as const,
        content: `**Multiply or Divide?** 🔽

The hardest part of a word problem is choosing the operation. Decide for each story.`,
        exercise: {
          dropdowns: [
            { label: 'You have $\\frac{3}{4}$ lb of clay and use $\\frac{1}{2}$ of it. To find how much you used, you…', options: ['Multiply', 'Divide', 'Add', 'Subtract'] },
            { label: 'A $\\frac{3}{4}$-lb block is cut into $\\frac{1}{8}$-lb pieces. To find *how many pieces*, you…', options: ['Divide', 'Multiply', 'Add', 'Subtract'] },
            { label: 'A ribbon $6$ ft long is split into equal $\\frac{1}{2}$-ft bows. To find *how many bows*, you…', options: ['Divide', 'Multiply', 'Add', 'Subtract'] },
          ],
          correctAnswers: ['Multiply', 'Divide', 'Divide'],
          hint1: '"$\\frac{1}{2}$ *of* $\\frac{3}{4}$" — the word "of" means multiply.',
          hint2: '"How many pieces fit?" is a division question.',
          hint3: '"How many equal groups fit into the whole?" is division — here, $6\\div\\frac{1}{2}$.',
          explanation: 'Taking a part *of* an amount → multiply. Asking *how many pieces/groups fit* → divide. So: multiply, divide, divide.',
        },
      },
      {
        id: 'mdf5-word-drill',
        type: 'input-boxes' as const,
        content: `**Word Problems** 🧮

Solve each story. Enter whole numbers as whole numbers (like \`8\`) and fractions in simplest form (like \`3/8\`).

**1)** A recipe uses $\\frac{2}{3}$ cup of flour. You make $\\frac{1}{2}$ a batch. How many cups of flour? $\\,?$
**2)** A $4$-foot board is cut into $\\frac{1}{2}$-foot pieces. How many pieces? $\\,?$
**3)** You have $\\frac{3}{4}$ of a pizza and split it equally among $3$ friends. How much pizza per friend? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/3', '8', '1/4'],
          hint1: '#1: $\\frac{1}{2}$ *of* $\\frac{2}{3}$ → multiply: $\\frac{1}{2}\\times\\frac{2}{3} = \\frac{2}{6}$. Simplify.',
          hint2: '#2: "How many halves fit in $4$?" → $4\\div\\frac{1}{2} = 4\\times 2$.',
          hint3: '#3: Splitting $\\frac{3}{4}$ among $3$ → $\\frac{3}{4}\\div 3 = \\frac{3}{4}\\times\\frac{1}{3} = \\frac{3}{12}$. Simplify.',
          explanation: '1) $\\frac{1}{2}\\times\\frac{2}{3}=\\frac{2}{6}=\\frac{1}{3}$ cup.  2) $4\\div\\frac{1}{2}=8$ pieces.  3) $\\frac{3}{4}\\div 3 = \\frac{3}{12}=\\frac{1}{4}$ pizza each.',
        },
      },
      {
        id: 'mdf5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$2\\tfrac{1}{2} \\times \\frac{2}{5} = $',
              options: ['$1$', '$\\frac{4}{10}$', '$\\frac{5}{2}$', '$\\frac{2}{5}$'],
              correctAnswer: 0,
              explanation: '$2\\tfrac{1}{2}=\\frac{5}{2}$, so $\\frac{5}{2}\\times\\frac{2}{5} = \\frac{10}{10} = 1$. (The two fractions are reciprocals, so the product is $1$.)',
            },
            {
              question: '$\\frac{7}{8} \\div \\frac{7}{8} = $',
              options: ['$1$', '$\\frac{49}{64}$', '$\\frac{64}{49}$', '$0$'],
              correctAnswer: 0,
              explanation: 'KCF: $\\frac{7}{8}\\times\\frac{8}{7} = \\frac{56}{56} = 1$. Any non-zero number divided by itself is $1$.',
            },
          ],
        },
      },
      {
        id: 'mdf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$\\frac{3}{4} \\times \\frac{8}{9}$, fully simplified, equals:',
              options: ['$\\frac{2}{3}$', '$\\frac{24}{36}$', '$\\frac{11}{13}$', '$\\frac{3}{4}$'],
              correctAnswer: 0,
              explanation: '$\\frac{3}{4}\\times\\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$. (Cross-cancel: $\\frac{3}{9}=\\frac{1}{3}$ and $\\frac{8}{4}=\\frac{2}{1}$, giving $\\frac{1\\times 2}{1\\times 3}=\\frac{2}{3}$.)',
            },
            {
              question: 'The reciprocal of $1\\tfrac{1}{3}$ is:',
              options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$1\\tfrac{3}{1}$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'First convert: $1\\tfrac{1}{3}=\\frac{4}{3}$. Then flip: the reciprocal is $\\frac{3}{4}$.',
            },
            {
              question: '$\\frac{5}{6} \\div \\frac{5}{12} = $',
              options: ['$2$', '$\\frac{25}{72}$', '$\\frac{1}{2}$', '$\\frac{72}{25}$'],
              correctAnswer: 0,
              explanation: 'Keep–Change–Flip: $\\frac{5}{6}\\times\\frac{12}{5} = \\frac{60}{30} = 2$. (How many $\\frac{5}{12}$s fit in $\\frac{5}{6}$? Two.)',
            },
          ],
        },
      },
    ],
  },
]
