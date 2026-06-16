import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Adding Fractions with Unlike Denominators (Grade 5 Math).
 * Registry key / DB slug: 'adding-unlike-fractions-grade5'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'adding-unlike-fractions-grade5',
    sections: [
      {
        id: 'auf1-intro',
        type: 'text' as const,
        content: `# 🍕 Adding Fractions with Unlike Denominators

**Part 1 of 5 — Why We Need a Common Denominator**

---

### Topics in This Part

| Section |
|---------|
| What "Unlike Denominators" Means |
| Why You Can't Just Add Across |
| The Big Idea: Same-Size Pieces |

> 🔑 **Key Concept:** You can only add fractions when the pieces are the **same size** — that is, when the denominators match. This whole lesson is about how to make the pieces match.`,
      },
      {
        id: 'auf1-meaning',
        type: 'text' as const,
        content: `## What Is a Denominator, Again?

Every fraction has two parts:

$$\\frac{\\text{numerator}}{\\text{denominator}} = \\frac{\\text{how many pieces you have}}{\\text{how many equal pieces the whole is cut into}}$$

The **denominator** (bottom) tells you the *size* of each piece. A bigger denominator means **smaller** pieces.

| Fraction | Pieces in the whole | Each piece is… |
|----------|--------------------|----------------|
| $\\frac{1}{2}$ | 2 | a big half |
| $\\frac{1}{4}$ | 4 | a smaller quarter |
| $\\frac{1}{8}$ | 8 | a tiny eighth |

When two fractions have **different** denominators — like $\\frac{1}{2}$ and $\\frac{1}{3}$ — we call them **unlike fractions**. Their pieces are different sizes.

> 💡 **Like vs. Unlike:** $\\frac{1}{4}$ and $\\frac{3}{4}$ are *like* (same bottom). $\\frac{1}{4}$ and $\\frac{1}{3}$ are *unlike* (different bottoms).`,
      },
      {
        id: 'auf1-like-unlike',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair of fractions has *unlike* denominators?',
              options: ['$\\frac{2}{5}$ and $\\frac{1}{5}$', '$\\frac{3}{8}$ and $\\frac{5}{8}$', '$\\frac{1}{3}$ and $\\frac{2}{7}$', '$\\frac{4}{9}$ and $\\frac{2}{9}$'],
              correctAnswer: 2,
              explanation: '$\\frac{1}{3}$ and $\\frac{2}{7}$ have different denominators ($3$ and $7$), so they are unlike. The other pairs all share the same bottom number.',
            },
            {
              question: 'A bigger denominator means each piece is…',
              options: ['Smaller', 'Bigger', 'The same size', 'It depends on the numerator'],
              correctAnswer: 0,
              explanation: 'Cutting a whole into more pieces makes each piece smaller. So $\\frac{1}{8}$ is a smaller piece than $\\frac{1}{4}$.',
            },
          ],
        },
      },
      {
        id: 'auf1-why-not',
        type: 'text' as const,
        content: `## Why You *Can't* Just Add Across

A very common mistake is to add the tops **and** the bottoms:

$$\\frac{1}{2} + \\frac{1}{3} \\;\\ne\\; \\frac{1+1}{2+3} = \\frac{2}{5} \\quad ❌$$

Why is that wrong? Think about pizza. $\\frac{1}{2}$ of a pizza is a **big** slice. $\\frac{1}{3}$ is a smaller slice. Together they are clearly **more** than half a pizza. But $\\frac{2}{5}$ is *less* than $\\frac{1}{2}$! So the answer $\\frac{2}{5}$ can't be right.

> ⚠️ **Never add the denominators.** The bottom number names the *size* of the piece — it doesn't get added. We only ever add the numerators, and only after the pieces are the same size.

The real answer turns out to be $\\frac{5}{6}$ — almost a whole pizza. We'll learn exactly how to get there in Part 3.`,
      },
      {
        id: 'auf1-estimate',
        type: 'multiple-choice' as const,
        content: `**Reasonableness Check** 🎯

Before computing, good math students *estimate*. Use common sense about piece sizes.`,
        exercise: {
          questions: [
            {
              question: 'Without calculating exactly, $\\frac{1}{2} + \\frac{1}{4}$ is closest to which value?',
              options: ['About $\\frac{2}{6}$, less than a half', 'About $\\frac{3}{4}$, close to a whole', 'Exactly $2$', 'Less than $\\frac{1}{4}$'],
              correctAnswer: 1,
              explanation: 'Half a pizza plus a quarter of a pizza is three-quarters of a pizza — close to a whole. The answer should be more than $\\frac{1}{2}$, not less.',
            },
            {
              question: 'Why is $\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{9}$ definitely wrong?',
              options: ['$\\frac{2}{9}$ is smaller than $\\frac{1}{3}$, but a sum must be bigger', 'You should multiply, not add', '$\\frac{2}{9}$ cannot be simplified', 'The denominators are the same'],
              correctAnswer: 0,
              explanation: 'Adding a positive amount makes the total *larger*. Since $\\frac{2}{9}$ is smaller than $\\frac{1}{3}$, it cannot be the sum. (The student added the bottoms — a classic error.)',
            },
          ],
        },
      },
      {
        id: 'auf1-bigidea',
        type: 'text' as const,
        content: `## The Big Idea: Make the Pieces Match

Here is the whole strategy in one sentence:

> 🔑 **To add unlike fractions, first rewrite them so they have the *same* denominator. Then add the numerators and keep the denominator.**

It's just like measuring. You can't add "2 feet + 3 inches" until both are in the same unit. Fractions are the same: get them into the same-size pieces first.

The matching denominator we choose is called the **common denominator**. In Part 2 we'll learn the fast way to find the *best* one — the **least common denominator (LCD)**.`,
      },
      {
        id: 'auf1-strategy-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Idea** 🔽

Choose the word or phrase that finishes each big idea from this part.`,
        exercise: {
          dropdowns: [
            { label: 'The bottom number of a fraction is the…', options: ['denominator', 'numerator', 'multiple', 'factor'] },
            { label: 'To add unlike fractions, you must first make the…', options: ['denominators the same', 'numerators the same', 'fractions bigger', 'fractions whole numbers'] },
            { label: 'You should NEVER add the…', options: ['denominators', 'numerators', 'whole numbers', 'pizzas'] },
          ],
          correctAnswers: ['denominator', 'denominators the same', 'denominators'],
          hint1: 'The bottom number names the size of each piece — its special name is the denominator.',
          hint2: 'Pieces must be the same size before you can add, which means the denominators must match.',
          hint3: 'Only numerators get added. The denominator names the piece size and is never added.',
          explanation: 'Denominator = bottom. Add only after denominators match. Never add denominators — only numerators.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'adding-unlike-fractions-grade5',
    sections: [
      {
        id: 'auf2-intro',
        type: 'text' as const,
        content: `# 🍕 Adding Fractions with Unlike Denominators

**Part 2 of 5 — Finding the Least Common Denominator**

---

> 🔑 **The Goal:** Find one denominator that *both* fractions can be rewritten with. The smallest such number is the **least common denominator (LCD)** — and it's just the **least common multiple (LCM)** of the two bottoms.`,
      },
      {
        id: 'auf2-multiples',
        type: 'text' as const,
        content: `## Step 1: List the Multiples

A **multiple** of a number is what you get by counting by that number: $3, 6, 9, 12, \\dots$

To find the LCD of $\\frac{1}{4}$ and $\\frac{1}{6}$, list multiples of each denominator and find the **smallest one they share**:

| Number | Multiples |
|--------|-----------|
| $4$ | $4,\\; 8,\\; \\mathbf{12},\\; 16,\\; 20,\\; 24$ |
| $6$ | $6,\\; \\mathbf{12},\\; 18,\\; 24$ |

The smallest number in **both** lists is $\\mathbf{12}$. So the **LCD of $4$ and $6$ is $12$**.

> 💡 Both $24$ and $48$ are *also* common denominators — but $12$ is the *least*, which keeps your numbers small and easy.`,
      },
      {
        id: 'auf2-multiples-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Common Multiple** 🔽

Use the multiples lists to pick the least common denominator for each pair.`,
        exercise: {
          dropdowns: [
            { label: 'LCD of $2$ and $3$ (multiples of $2$: $2,4,6$; of $3$: $3,6$):', options: ['$6$', '$5$', '$12$', '$2$'] },
            { label: 'LCD of $3$ and $6$ (multiples of $3$: $3,6$; of $6$: $6$):', options: ['$6$', '$18$', '$9$', '$3$'] },
            { label: 'LCD of $4$ and $5$ (share no factor):', options: ['$20$', '$9$', '$10$', '$40$'] },
          ],
          correctAnswers: ['$6$', '$6$', '$20$'],
          hint1: 'The first shared multiple of $2$ and $3$ is $6$.',
          hint2: 'Since $3$ divides $6$, the larger denominator $6$ is the LCD.',
          hint3: '$4$ and $5$ share no common factor, so LCD $= 4 \\times 5 = 20$.',
          explanation: 'LCD$(2,3)=6$; LCD$(3,6)=6$; LCD$(4,5)=20$. The LCD is the smallest shared multiple.',
        },
      },
      {
        id: 'auf2-shortcut',
        type: 'text' as const,
        content: `## A Handy Shortcut

You don't always have to list multiples. Two quick patterns cover most Grade 5 problems:

**Pattern 1 — One denominator divides the other.** Then the bigger one *is* the LCD.

$$\\text{LCD of } 3 \\text{ and } 6 = 6 \\quad (\\text{because } 3 \\text{ divides } 6)$$

**Pattern 2 — The denominators share no common factor.** Then just **multiply them**.

$$\\text{LCD of } 3 \\text{ and } 5 = 3 \\times 5 = 15$$

| Denominators | Quick rule | LCD |
|--------------|-----------|-----|
| $2$ and $8$ | $2$ divides $8$ | $8$ |
| $4$ and $5$ | share no factor | $20$ |
| $6$ and $9$ | list multiples | $18$ |

> ⚠️ Multiplying the denominators *always* gives a common denominator, but not always the **least** one. For $6$ and $9$, $6\\times 9 = 54$ works — but the LCD is only $18$.`,
      },
      {
        id: 'auf2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the least common denominator (LCD) of $\\frac{1}{4}$ and $\\frac{1}{6}$?',
              options: ['$24$', '$12$', '$10$', '$48$'],
              correctAnswer: 1,
              explanation: 'Multiples of $4$: $4, 8, 12, \\dots$ Multiples of $6$: $6, 12, \\dots$ The smallest shared multiple is $12$.',
            },
            {
              question: 'What is the LCD of $\\frac{2}{3}$ and $\\frac{1}{5}$?',
              options: ['$8$', '$10$', '$15$', '$30$'],
              correctAnswer: 2,
              explanation: '$3$ and $5$ share no common factor, so the LCD is $3 \\times 5 = 15$.',
            },
            {
              question: 'What is the LCD of $\\frac{3}{4}$ and $\\frac{1}{8}$?',
              options: ['$8$', '$32$', '$12$', '$4$'],
              correctAnswer: 0,
              explanation: 'Since $4$ divides evenly into $8$, the larger denominator $8$ is already the LCD.',
            },
          ],
        },
      },
      {
        id: 'auf2-equiv',
        type: 'text' as const,
        content: `## Step 2: Build Equivalent Fractions

Once you have the LCD, rewrite each fraction so its denominator becomes the LCD. You do this by **multiplying the top and bottom by the same number** — which doesn't change the fraction's value, just its pieces.

### Example: rewrite $\\frac{1}{4}$ with denominator $12$

Ask: "$4$ times what equals $12$?" Answer: $3$. So multiply **both** top and bottom by $3$:

$$\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$$

### Example: rewrite $\\frac{1}{6}$ with denominator $12$

Ask: "$6$ times what equals $12$?" Answer: $2$. Multiply top and bottom by $2$:

$$\\frac{1}{6} = \\frac{1 \\times 2}{6 \\times 2} = \\frac{2}{12}$$

> 🔑 **Golden Rule:** Whatever you multiply the **bottom** by, you must multiply the **top** by too. Same number, top and bottom.`,
      },
      {
        id: 'auf2-build-drill',
        type: 'input-boxes' as const,
        content: `**Build Equivalent Fractions** 🧮

Fill in the missing numerator so each fraction has the new denominator shown.

**1)** $\\frac{1}{3} = \\frac{?}{12}$  (multiply top and bottom by $4$)
**2)** $\\frac{2}{5} = \\frac{?}{15}$  (multiply top and bottom by $3$)
**3)** $\\frac{3}{4} = \\frac{?}{8}$  (multiply top and bottom by $2$)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '6', '6'],
          hint1: '$\\frac{1}{3}$: top $1 \\times 4 = 4$, so $\\frac{4}{12}$.',
          hint2: '$\\frac{2}{5}$: top $2 \\times 3 = 6$, so $\\frac{6}{15}$.',
          hint3: '$\\frac{3}{4}$: top $3 \\times 2 = 6$, so $\\frac{6}{8}$.',
          explanation: '1) $\\frac{1\\times 4}{3\\times 4}=\\frac{4}{12}$.  2) $\\frac{2\\times 3}{5\\times 3}=\\frac{6}{15}$.  3) $\\frac{3\\times 2}{4\\times 2}=\\frac{6}{8}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'adding-unlike-fractions-grade5',
    sections: [
      {
        id: 'auf3-intro',
        type: 'text' as const,
        content: `# 🍕 Adding Fractions with Unlike Denominators

**Part 3 of 5 — The Full Procedure (Add & Simplify)**

---

> 🔑 **Four Steps:** (1) Find the LCD. (2) Build equivalent fractions. (3) Add the numerators, keep the denominator. (4) Simplify if you can.`,
      },
      {
        id: 'auf3-steps',
        type: 'text' as const,
        content: `## The Four-Step Recipe

To add $\\frac{a}{b} + \\frac{c}{d}$:

1. **Find the LCD** of $b$ and $d$.
2. **Rewrite** each fraction with the LCD (multiply top and bottom).
3. **Add the numerators**; keep the common denominator.
4. **Simplify** the answer to lowest terms.

### Worked Example: $\\frac{1}{2} + \\frac{1}{3}$

**Step 1 — LCD.** $2$ and $3$ share no factor, so LCD $= 2 \\times 3 = 6$.

**Step 2 — Rewrite.**
$$\\frac{1}{2} = \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}, \\qquad \\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}$$

**Step 3 — Add the tops.**
$$\\frac{3}{6} + \\frac{2}{6} = \\frac{3 + 2}{6} = \\frac{5}{6}$$

**Step 4 — Simplify.** $\\frac{5}{6}$ is already in lowest terms. ✓

> ✅ This matches our Part 1 prediction: $\\frac{1}{2}+\\frac{1}{3} = \\frac{5}{6}$, almost a whole pizza.`,
      },
      {
        id: 'auf3-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\frac{1}{4} + \\frac{1}{6}$

**Step 1 — LCD** of $4$ and $6$ is $12$ (from Part 2).

**Step 2 — Rewrite** to twelfths:
$$\\frac{1}{4} = \\frac{3}{12}, \\qquad \\frac{1}{6} = \\frac{2}{12}$$

**Step 3 — Add:**
$$\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$$

**Step 4 — Simplify.** $5$ and $12$ share no common factor, so $\\frac{5}{12}$ is final. ✓

### Worked Example: $\\frac{1}{6} + \\frac{1}{3}$ (answer needs simplifying!)

LCD $= 6$. Rewrite: $\\frac{1}{3} = \\frac{2}{6}$.
$$\\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6}$$

Now **simplify**: $\\frac{3}{6} = \\frac{3 \\div 3}{6 \\div 3} = \\frac{1}{2}$.

> 💡 **Always check the last step.** $\\frac{3}{6}$ is correct but *not* in lowest terms. A simplified answer is the "best" answer.`,
      },
      {
        id: 'auf3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're adding $\\frac{1}{2} + \\frac{1}{3}$. Choose what belongs at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'The LCD of $2$ and $3$ is:', options: ['$6$', '$5$', '$2$', '$3$'] },
            { label: 'Rewrite $\\frac{1}{2}$ as:', options: ['$\\frac{3}{6}$', '$\\frac{2}{6}$', '$\\frac{1}{6}$', '$\\frac{1}{5}$'] },
            { label: 'Rewrite $\\frac{1}{3}$ as:', options: ['$\\frac{2}{6}$', '$\\frac{3}{6}$', '$\\frac{1}{6}$', '$\\frac{3}{9}$'] },
            { label: 'Add the numerators to get:', options: ['$\\frac{5}{6}$', '$\\frac{2}{5}$', '$\\frac{5}{12}$', '$\\frac{2}{6}$'] },
          ],
          correctAnswers: ['$6$', '$\\frac{3}{6}$', '$\\frac{2}{6}$', '$\\frac{5}{6}$'],
          hint1: '$2$ and $3$ share no factor, so LCD $= 2\\times 3 = 6$.',
          hint2: '$\\frac{1}{2} = \\frac{1\\times 3}{2\\times 3} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{1\\times 2}{3\\times 2} = \\frac{2}{6}$.',
          hint3: 'Add only the tops: $3 + 2 = 5$, keep the $6$, giving $\\frac{5}{6}$.',
          explanation: 'LCD $6$ → $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$. Already in lowest terms.',
        },
      },
      {
        id: 'auf3-watch-out',
        type: 'text' as const,
        content: `## Two Things to Watch

Before you try some on your own, keep these in mind:

> ⚠️ **Don't touch the denominator when adding.** Once both fractions share the LCD, the denominator stays put — only the numerators get added. $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$, **not** $\\frac{5}{12}$.

> 💡 **Always simplify last.** If your answer's top and bottom share a common factor, divide it out. The cleanest version is the right version.

Now try the drill below — find the LCD, rewrite, add, and simplify each one.`,
      },
      {
        id: 'auf3-add-drill',
        type: 'input-boxes' as const,
        content: `**Add and Simplify** 🧮

Add each pair. Enter your answer as a fraction in **lowest terms**, like \`5/6\`.

**1)** $\\frac{1}{2} + \\frac{1}{4} = \\,?$
**2)** $\\frac{2}{3} + \\frac{1}{6} = \\,?$
**3)** $\\frac{1}{4} + \\frac{1}{12} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/4', '5/6', '1/3'],
          hint1: 'LCD of $2,4$ is $4$: $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.',
          hint2: 'LCD of $3,6$ is $6$: $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.',
          hint3: 'LCD of $4,12$ is $12$: $\\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$.',
          explanation: '1) $\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}$.  2) $\\frac{4}{6}+\\frac{1}{6}=\\frac{5}{6}$.  3) $\\frac{3}{12}+\\frac{1}{12}=\\frac{4}{12}=\\frac{1}{3}$.',
        },
      },
      {
        id: 'auf3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Add $\\frac{3}{5} + \\frac{1}{10}$.',
              options: ['$\\frac{4}{15}$', '$\\frac{7}{10}$', '$\\frac{4}{10}$', '$\\frac{1}{2}$'],
              correctAnswer: 1,
              explanation: 'LCD of $5,10$ is $10$. $\\frac{3}{5} = \\frac{6}{10}$, so $\\frac{6}{10}+\\frac{1}{10}=\\frac{7}{10}$. It is already in lowest terms.',
            },
            {
              question: 'After adding, you get $\\frac{4}{8}$. What is the simplified final answer?',
              options: ['$\\frac{4}{8}$', '$\\frac{2}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
              correctAnswer: 2,
              explanation: 'Divide top and bottom by $4$: $\\frac{4 \\div 4}{8 \\div 4} = \\frac{1}{2}$. That is lowest terms.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'adding-unlike-fractions-grade5',
    sections: [
      {
        id: 'auf4-intro',
        type: 'text' as const,
        content: `# 🍕 Adding Fractions with Unlike Denominators

**Part 4 of 5 — Mixed Numbers & Word Problems**

---

> 🔑 **Leveling Up:** Real problems use *mixed numbers* (like $1\\frac{1}{2}$) and come dressed as stories. The fraction skill is exactly the same — you just handle the whole numbers too.`,
      },
      {
        id: 'auf4-mixed',
        type: 'text' as const,
        content: `## Adding Mixed Numbers

A **mixed number** is a whole number plus a fraction, like $2\\frac{1}{3}$. To add mixed numbers with unlike fractions:

1. **Add the whole numbers.**
2. **Add the fraction parts** using the LCD (just like before).
3. **Combine**, and simplify.

### Worked Example: $1\\frac{1}{2} + 2\\frac{1}{4}$

**Whole numbers:** $1 + 2 = 3$.

**Fractions:** LCD of $2,4$ is $4$. $\\frac{1}{2} = \\frac{2}{4}$, so $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.

**Combine:** $3 + \\frac{3}{4} = 3\\frac{3}{4}$. ✓

> 💡 Sometimes the fraction part adds up to more than $1$ — then you "carry." For example $\\frac{3}{4} + \\frac{1}{2} = \\frac{5}{4} = 1\\frac{1}{4}$, and that extra whole gets added to the whole-number total.`,
      },
      {
        id: 'auf4-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Add the Mixed Number** 🔽

Walk through $2\\frac{1}{4} + 1\\frac{1}{2}$ one stage at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Add the whole numbers:', options: ['$3$', '$2$', '$4$', '$1$'] },
            { label: 'LCD of $4$ and $2$:', options: ['$4$', '$8$', '$2$', '$6$'] },
            { label: 'Add the fraction parts $\\frac{1}{4} + \\frac{2}{4}$:', options: ['$\\frac{3}{4}$', '$\\frac{2}{8}$', '$\\frac{1}{2}$', '$\\frac{3}{8}$'] },
            { label: 'Combine for the final answer:', options: ['$3\\frac{3}{4}$', '$3\\frac{1}{2}$', '$4\\frac{3}{4}$', '$3\\frac{2}{6}$'] },
          ],
          correctAnswers: ['$3$', '$4$', '$\\frac{3}{4}$', '$3\\frac{3}{4}$'],
          hint1: 'Whole numbers: $2 + 1 = 3$.',
          hint2: 'Since $2$ divides $4$, the LCD is $4$; rewrite $\\frac{1}{2} = \\frac{2}{4}$.',
          hint3: '$\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$, so the total is $3\\frac{3}{4}$.',
          explanation: 'Wholes $3$, fractions $\\frac{1}{4}+\\frac{2}{4}=\\frac{3}{4}$, combine to $3\\frac{3}{4}$.',
        },
      },
      {
        id: 'auf4-carry',
        type: 'text' as const,
        content: `## When the Fractions Make a Whole

### Worked Example: $2\\frac{3}{4} + 1\\frac{1}{2}$

**Whole numbers:** $2 + 1 = 3$.

**Fractions:** LCD is $4$. $\\frac{1}{2} = \\frac{2}{4}$, so $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$.

But $\\frac{5}{4}$ is more than one whole! Rewrite it: $\\frac{5}{4} = 1\\frac{1}{4}$.

**Carry the extra whole:** $3 + 1\\frac{1}{4} = 4\\frac{1}{4}$. ✓

> ⚠️ **Watch for an "improper" fraction part.** If your fraction total is $\\frac{5}{4}$, $\\frac{7}{6}$, etc. (top bigger than bottom), pull out the whole and add it on.`,
      },
      {
        id: 'auf4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Add $2\\frac{1}{3} + 1\\frac{1}{6}$.',
              options: ['$3\\frac{1}{2}$', '$3\\frac{2}{9}$', '$3\\frac{1}{6}$', '$4\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Wholes: $2+1=3$. Fractions: LCD $6$, $\\frac{1}{3}=\\frac{2}{6}$, so $\\frac{2}{6}+\\frac{1}{6}=\\frac{3}{6}=\\frac{1}{2}$. Total $3\\frac{1}{2}$.',
            },
            {
              question: 'The fraction parts of a sum add to $\\frac{7}{6}$. How do you handle that?',
              options: ['Leave it as $\\frac{7}{6}$ inside the mixed number', 'Rewrite $\\frac{7}{6}=1\\frac{1}{6}$ and add the $1$ to the whole numbers', 'Subtract $1$ from the whole numbers', 'Change it to $\\frac{6}{7}$'],
              correctAnswer: 1,
              explanation: '$\\frac{7}{6}$ is more than one whole. Rewrite it as $1\\frac{1}{6}$ and carry the $1$ into the whole-number part.',
            },
          ],
        },
      },
      {
        id: 'auf4-word',
        type: 'text' as const,
        content: `## Word Problems: Finding the Hidden Addition

Story problems hide a "$+$" inside the words. Look for clues like **in all**, **altogether**, **combined**, or **total**.

### Worked Example

> *Maya jogged $\\frac{3}{4}$ of a mile in the morning and $\\frac{2}{3}$ of a mile in the afternoon. How far did she jog in all?*

"In all" means **add**: $\\frac{3}{4} + \\frac{2}{3}$.

LCD of $4,3$ is $12$. $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$.

$$\\frac{9}{12} + \\frac{8}{12} = \\frac{17}{12} = 1\\frac{5}{12}$$

**Maya jogged $1\\frac{5}{12}$ miles.**

> 💡 An answer over $1$ makes sense here — she jogged more than three-quarters of a mile twice, so the total should pass one mile.`,
      },
      {
        id: 'auf4-word-drill',
        type: 'input-boxes' as const,
        content: `**Word-Problem Practice** 🧮

Solve each. Enter your answer as a fraction or mixed number in lowest terms, like \`5/6\` or \`1 1/4\`.

**1)** Sam ate $\\frac{1}{4}$ of a pizza and his sister ate $\\frac{1}{3}$ of it. What fraction did they eat **together**?
**2)** A recipe needs $\\frac{1}{2}$ cup of milk and $\\frac{1}{6}$ cup of water. How much liquid **in all**?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7/12', '2/3'],
          hint1: '"Together" means add: $\\frac{1}{4}+\\frac{1}{3}$. LCD is $12$.',
          hint2: '$\\frac{1}{4}=\\frac{3}{12}$, $\\frac{1}{3}=\\frac{4}{12}$, so $\\frac{3}{12}+\\frac{4}{12}=\\frac{7}{12}$.',
          hint3: 'For #2: LCD of $2,6$ is $6$. $\\frac{1}{2}=\\frac{3}{6}$, so $\\frac{3}{6}+\\frac{1}{6}=\\frac{4}{6}=\\frac{2}{3}$.',
          explanation: '1) $\\frac{3}{12}+\\frac{4}{12}=\\frac{7}{12}$ (lowest terms).  2) $\\frac{3}{6}+\\frac{1}{6}=\\frac{4}{6}=\\frac{2}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'adding-unlike-fractions-grade5',
    sections: [
      {
        id: 'auf5-intro',
        type: 'text' as const,
        content: `# 🍕 Adding Fractions with Unlike Denominators

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) explain why denominators must match, (2) find the LCD, (3) build equivalent fractions, (4) add and simplify, and (5) handle mixed numbers and word problems. Let's put it all together.`,
      },
      {
        id: 'auf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Step | What to do |
|------|-----------|
| 1. Find the LCD | smallest shared multiple of the denominators |
| 2. Build equivalents | multiply top *and* bottom by the same number |
| 3. Add | add numerators, **keep** the common denominator |
| 4. Simplify | divide top and bottom by their common factor |
| Mixed numbers | add wholes and fractions separately, then carry if needed |

> ⚠️ **Top 3 Mistakes to Avoid:**
> 1. Adding the denominators ($\\frac{1}{2}+\\frac{1}{3} \\ne \\frac{2}{5}$).
> 2. Changing only the bottom and forgetting to scale the top.
> 3. Stopping before simplifying (e.g., leaving $\\frac{3}{6}$ instead of $\\frac{1}{2}$).`,
      },
      {
        id: 'auf5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill the Recipe** 🔽

Add $\\frac{2}{3} + \\frac{1}{4}$ by completing each stage.`,
        exercise: {
          dropdowns: [
            { label: 'LCD of $3$ and $4$:', options: ['$12$', '$7$', '$6$', '$24$'] },
            { label: '$\\frac{2}{3}$ rewritten over the LCD:', options: ['$\\frac{8}{12}$', '$\\frac{6}{12}$', '$\\frac{2}{12}$', '$\\frac{5}{12}$'] },
            { label: '$\\frac{1}{4}$ rewritten over the LCD:', options: ['$\\frac{3}{12}$', '$\\frac{4}{12}$', '$\\frac{1}{12}$', '$\\frac{2}{12}$'] },
            { label: 'Final sum:', options: ['$\\frac{11}{12}$', '$\\frac{3}{7}$', '$\\frac{9}{12}$', '$\\frac{11}{24}$'] },
          ],
          correctAnswers: ['$12$', '$\\frac{8}{12}$', '$\\frac{3}{12}$', '$\\frac{11}{12}$'],
          hint1: '$3$ and $4$ share no factor, so LCD $= 3 \\times 4 = 12$.',
          hint2: '$\\frac{2}{3} = \\frac{2\\times 4}{3\\times 4} = \\frac{8}{12}$ and $\\frac{1}{4} = \\frac{1\\times 3}{4\\times 3} = \\frac{3}{12}$.',
          hint3: 'Add the tops: $8 + 3 = 11$, keep $12$, giving $\\frac{11}{12}$ (already lowest terms).',
          explanation: 'LCD $12$ → $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.',
        },
      },
      {
        id: 'auf5-final-tips',
        type: 'text' as const,
        content: `## You're Ready — One Last Reminder

The next two drills mix everything: plain fractions, answers that need simplifying, and mixed numbers. For each one, run the recipe in your head:

> 🔑 **LCD → rewrite → add the tops → simplify (and carry wholes if needed).**

Take your time, estimate first so you know roughly what to expect, and check that your final fraction is in lowest terms.`,
      },
      {
        id: 'auf5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Add and simplify. Enter a fraction or mixed number in lowest terms, like \`5/6\` or \`1 1/4\`.

**1)** $\\frac{2}{5} + \\frac{3}{10} = \\,?$
**2)** $\\frac{5}{6} + \\frac{1}{4} = \\,?$
**3)** $1\\frac{1}{2} + 2\\frac{1}{3} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7/10', '13/12', '3 5/6'],
          hint1: 'LCD of $5,10$ is $10$: $\\frac{4}{10}+\\frac{3}{10}=\\frac{7}{10}$.',
          hint2: 'LCD of $6,4$ is $12$: $\\frac{10}{12}+\\frac{3}{12}=\\frac{13}{12}$ (or $1\\frac{1}{12}$).',
          hint3: 'Wholes $1+2=3$; fractions LCD $6$: $\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}$, giving $3\\frac{5}{6}$.',
          explanation: '1) $\\frac{4}{10}+\\frac{3}{10}=\\frac{7}{10}$.  2) $\\frac{10}{12}+\\frac{3}{12}=\\frac{13}{12}$.  3) $3 + \\frac{5}{6} = 3\\frac{5}{6}$.',
        },
      },
      {
        id: 'auf5-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Add $\\frac{1}{3} + \\frac{2}{9}$.',
              options: ['$\\frac{3}{12}$', '$\\frac{5}{9}$', '$\\frac{3}{9}$', '$\\frac{1}{4}$'],
              correctAnswer: 1,
              explanation: 'LCD of $3,9$ is $9$. $\\frac{1}{3}=\\frac{3}{9}$, so $\\frac{3}{9}+\\frac{2}{9}=\\frac{5}{9}$ (lowest terms).',
            },
            {
              question: 'A jug holds $\\frac{3}{8}$ liter of juice and you add $\\frac{1}{2}$ liter more. How much is in the jug now?',
              options: ['$\\frac{4}{10}$ liter', '$\\frac{7}{8}$ liter', '$\\frac{4}{8}$ liter', '$\\frac{1}{2}$ liter'],
              correctAnswer: 1,
              explanation: 'LCD of $8,2$ is $8$. $\\frac{1}{2}=\\frac{4}{8}$, so $\\frac{3}{8}+\\frac{4}{8}=\\frac{7}{8}$ liter.',
            },
          ],
        },
      },
      {
        id: 'auf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the least common denominator of $\\frac{1}{6}$ and $\\frac{1}{8}$?',
              options: ['$14$', '$48$', '$24$', '$12$'],
              correctAnswer: 2,
              explanation: 'Multiples of $6$: $6,12,18,\\mathbf{24}$. Multiples of $8$: $8,16,\\mathbf{24}$. The least shared multiple is $24$.',
            },
            {
              question: 'Add and simplify: $\\frac{1}{2} + \\frac{1}{6}$.',
              options: ['$\\frac{2}{8}$', '$\\frac{2}{3}$', '$\\frac{1}{4}$', '$\\frac{4}{6}$'],
              correctAnswer: 1,
              explanation: 'LCD is $6$. $\\frac{1}{2}=\\frac{3}{6}$, so $\\frac{3}{6}+\\frac{1}{6}=\\frac{4}{6}=\\frac{2}{3}$ in lowest terms.',
            },
            {
              question: 'Which statement is TRUE about adding $\\frac{2}{3}+\\frac{1}{5}$?',
              options: ['The answer is $\\frac{3}{8}$ because you add tops and bottoms', 'You must rewrite both with denominator $15$ first', 'The denominators already match', 'The LCD is $8$'],
              correctAnswer: 1,
              explanation: '$3$ and $5$ share no factor, so LCD $=15$. Rewrite: $\\frac{10}{15}+\\frac{3}{15}=\\frac{13}{15}$. You never add denominators.',
            },
          ],
        },
      },
    ],
  },
]
