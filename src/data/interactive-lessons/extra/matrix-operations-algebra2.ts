import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Matrix Operations (Algebra 2).
 * Registry key / DB Topic.slug: 'matrix-operations-algebra2'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'matrix-operations-algebra2',
    sections: [
      {
        id: 'mat1-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations

**Part 1 of 5 — Meet the Matrix**

---

### Topics in This Part

| Section |
|---------|
| What Is a Matrix? |
| Dimensions and Entries |
| Equal Matrices |

> 🔑 **Key Concept:** A **matrix** is just a rectangular grid of numbers. Before we add, subtract, or multiply them, we need a shared language for *describing* them — their size and the address of every number inside.`,
      },
      {
        id: 'mat1-what',
        type: 'text' as const,
        content: `## What Is a Matrix?

A **matrix** (plural **matrices**) is a rectangular array of numbers arranged in **rows** and **columns**, written inside brackets:

$$A = \\begin{bmatrix} 2 & -1 & 5 \\\\ 0 & 3 & 4 \\end{bmatrix}$$

- **Rows** run *horizontally* (left to right). $A$ has **2 rows**.
- **Columns** run *vertically* (top to bottom). $A$ has **3 columns**.

Each number inside is called an **entry** (or **element**).

> 💡 **Memory trick:** "**R**ows are **R**ight-across, **C**olumns are **C**limbing-down." Always read **rows first, columns second**.`,
      },
      {
        id: 'mat1-dimensions',
        type: 'text' as const,
        content: `## Dimensions and Entries

The **dimensions** (or **order**) of a matrix are written $\\text{rows} \\times \\text{columns}$ — always **rows first**.

$$A = \\begin{bmatrix} 2 & -1 & 5 \\\\ 0 & 3 & 4 \\end{bmatrix} \\quad\\text{is a } 2 \\times 3 \\text{ matrix.}$$

To name a single entry we use $a_{ij}$, where $i$ is the **row number** and $j$ is the **column number**:

| Entry | Location | Value |
|-------|----------|-------|
| $a_{11}$ | row 1, col 1 | $2$ |
| $a_{13}$ | row 1, col 3 | $5$ |
| $a_{22}$ | row 2, col 2 | $3$ |
| $a_{23}$ | row 2, col 3 | $4$ |

> 🔑 **Key Idea:** The subscript order matches the dimension order — $a_{ij}$ means **row $i$, column $j$**.`,
      },
      {
        id: 'mat1-dim-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What are the dimensions of $\\begin{bmatrix} 1 & 0 \\\\ 4 & 7 \\\\ -2 & 3 \\end{bmatrix}$?',
              options: ['$3 \\times 2$', '$2 \\times 3$', '$6 \\times 1$', '$2 \\times 2$'],
              correctAnswer: 0,
              explanation: 'Count rows first: there are 3 horizontal rows and 2 vertical columns, so the matrix is $3 \\times 2$.',
            },
            {
              question: 'In $B = \\begin{bmatrix} 8 & -3 & 0 \\\\ 5 & 1 & 6 \\end{bmatrix}$, what is the entry $b_{23}$?',
              options: ['$6$', '$0$', '$-3$', '$5$'],
              correctAnswer: 0,
              explanation: '$b_{23}$ is row 2, column 3. Row 2 is $[\\,5\\;\\;1\\;\\;6\\,]$ and its 3rd entry is $6$.',
            },
          ],
        },
      },
      {
        id: 'mat1-entry-drill',
        type: 'input-boxes' as const,
        content: `**Locate the Entries** 🧮

Use $M = \\begin{bmatrix} 9 & 2 & -4 \\\\ 0 & 7 & 1 \\end{bmatrix}$.

**1)** $M$ has how many rows?
**2)** $M$ has how many columns?
**3)** What is the value of $m_{13}$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '-4'],
          hint1: 'Rows run horizontally — count how many horizontal lines of numbers there are.',
          hint2: 'Columns run vertically — count how many numbers are in a single row.',
          hint3: '$m_{13}$ is row 1, column 3. Row 1 is $[\\,9\\;\\;2\\;\\;-4\\,]$, so the 3rd entry is $-4$.',
          explanation: '1) 2 rows.  2) 3 columns (so $M$ is $2 \\times 3$).  3) $m_{13} = -4$.',
        },
      },
      {
        id: 'mat1-equal',
        type: 'text' as const,
        content: `## When Are Two Matrices Equal?

Two matrices are **equal** only if **both** conditions hold:

1. They have the **same dimensions**, **and**
2. **Every** matching entry is identical: $a_{ij} = b_{ij}$ for all $i, j$.

### Example

$$\\begin{bmatrix} x & 5 \\\\ 7 & y \\end{bmatrix} = \\begin{bmatrix} 3 & 5 \\\\ 7 & -2 \\end{bmatrix} \\;\\Longrightarrow\\; x = 3,\\; y = -2$$

We match the matrices position-by-position: the top-left entries must agree ($x = 3$) and the bottom-right entries must agree ($y = -2$).

> ⚠️ A $2 \\times 3$ matrix can **never** equal a $3 \\times 2$ matrix, even if they contain the very same numbers. **Shape comes first.**

You now have the vocabulary every operation depends on. In Part 2 we start combining matrices with addition, subtraction, and scalar multiplication.`,
      },
      {
        id: 'mat1-equal-check',
        type: 'dropdown-select' as const,
        content: `**Solve for the Unknowns** 🔽

Given $\\begin{bmatrix} x & 8 \\\\ -3 & y \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ -3 & 1 \\end{bmatrix}$, match each entry.`,
        exercise: {
          dropdowns: [
            { label: 'The value of $x$ is:', options: ['$6$', '$8$', '$-3$', '$1$'] },
            { label: 'The value of $y$ is:', options: ['$1$', '$8$', '$6$', '$-3$'] },
            { label: 'For the matrices to be equal, they must first have the same:', options: ['dimensions', 'determinant', 'number of zeros', 'first entry only'] },
          ],
          correctAnswers: ['$6$', '$1$', 'dimensions'],
          hint1: '$x$ sits in the top-left, which must match the top-left of the other matrix.',
          hint2: '$y$ sits in the bottom-right, which must match the bottom-right entry.',
          hint3: 'Equal matrices need identical shapes before any entries are even compared.',
          explanation: 'Matching position-by-position: top-left gives $x = 6$, bottom-right gives $y = 1$. Equal matrices must share the same dimensions.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'matrix-operations-algebra2',
    sections: [
      {
        id: 'mat2-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations

**Part 2 of 5 — Addition, Subtraction & Scalar Multiplication**

---

> 🔑 **The Idea:** Addition, subtraction, and multiplying by a single number all work **entry-by-entry**. These are the "easy" operations — matrix *multiplication* (Part 3) is the one with a twist.`,
      },
      {
        id: 'mat2-addsub',
        type: 'text' as const,
        content: `## Adding and Subtracting Matrices

To add or subtract two matrices, combine **corresponding entries**.

> ⚠️ **You can only add or subtract matrices with the *same dimensions*.** If the shapes differ, the operation is **undefined**.

### Worked Example: Addition

$$\\begin{bmatrix} 2 & 1 \\\\ 4 & 0 \\end{bmatrix} + \\begin{bmatrix} 3 & -5 \\\\ 1 & 6 \\end{bmatrix} = \\begin{bmatrix} 2+3 & 1+(-5) \\\\ 4+1 & 0+6 \\end{bmatrix} = \\begin{bmatrix} 5 & -4 \\\\ 5 & 6 \\end{bmatrix}$$

### Worked Example: Subtraction

$$\\begin{bmatrix} 7 & 2 \\\\ -1 & 8 \\end{bmatrix} - \\begin{bmatrix} 3 & 5 \\\\ 4 & 2 \\end{bmatrix} = \\begin{bmatrix} 7-3 & 2-5 \\\\ -1-4 & 8-2 \\end{bmatrix} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 6 \\end{bmatrix}$$

> 💡 Line the two matrices up like grids and march through them position by position. Watch the **signs** carefully on subtraction.`,
      },
      {
        id: 'mat2-addsub-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\begin{bmatrix} 1 & 4 \\\\ 6 & 2 \\end{bmatrix} + \\begin{bmatrix} 5 & -3 \\\\ 0 & 8 \\end{bmatrix} = $',
              options: [
                '$\\begin{bmatrix} 6 & 1 \\\\ 6 & 10 \\end{bmatrix}$',
                '$\\begin{bmatrix} 6 & 7 \\\\ 6 & 10 \\end{bmatrix}$',
                '$\\begin{bmatrix} 5 & -12 \\\\ 0 & 16 \\end{bmatrix}$',
                '$\\begin{bmatrix} 4 & 7 \\\\ 6 & -6 \\end{bmatrix}$',
              ],
              correctAnswer: 0,
              explanation: 'Add entry-by-entry: $1+5=6$, $4+(-3)=1$, $6+0=6$, $2+8=10$.',
            },
            {
              question: 'Which sum is **undefined**?',
              options: [
                '$\\begin{bmatrix} 1 & 2 & 3 \\end{bmatrix} + \\begin{bmatrix} 4 & 5 \\end{bmatrix}$',
                '$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$',
                '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$',
                '$\\begin{bmatrix} 5 \\end{bmatrix} + \\begin{bmatrix} 9 \\end{bmatrix}$',
              ],
              correctAnswer: 0,
              explanation: 'A $1 \\times 3$ matrix and a $1 \\times 2$ matrix have different dimensions, so the sum is undefined. The others all match shapes.',
            },
          ],
        },
      },
      {
        id: 'mat2-scalar',
        type: 'text' as const,
        content: `## Scalar Multiplication

A **scalar** is just a single number. To multiply a matrix by a scalar, multiply **every entry** by that scalar:

$$3 \\begin{bmatrix} 2 & -1 \\\\ 0 & 4 \\end{bmatrix} = \\begin{bmatrix} 3\\cdot 2 & 3\\cdot(-1) \\\\ 3\\cdot 0 & 3\\cdot 4 \\end{bmatrix} = \\begin{bmatrix} 6 & -3 \\\\ 0 & 12 \\end{bmatrix}$$

This even handles a negative scalar — multiplying by $-1$ flips every sign:

$$-1 \\begin{bmatrix} 5 & -2 \\\\ 3 & 7 \\end{bmatrix} = \\begin{bmatrix} -5 & 2 \\\\ -3 & -7 \\end{bmatrix}$$

> 🔑 **Key Idea:** Subtraction is really "add the opposite." $A - B = A + (-1)B$, which is why both operations need matching dimensions.`,
      },
      {
        id: 'mat2-scalar-drill',
        type: 'input-boxes' as const,
        content: `**Scalar & Combined Practice** 🧮

Let $A = \\begin{bmatrix} 4 & -2 \\\\ 1 & 5 \\end{bmatrix}$ and $B = \\begin{bmatrix} 3 & 0 \\\\ -1 & 2 \\end{bmatrix}$.

**1)** In $2A$, what is the top-right entry?
**2)** In $A - B$, what is the bottom-left entry?
**3)** In $A + 3B$, what is the top-left entry?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '2', '13'],
          hint1: 'The top-right entry of $A$ is $-2$. Multiply it by the scalar $2$: $2 \\cdot (-2) = -4$.',
          hint2: 'Bottom-left of $A$ is $1$; bottom-left of $B$ is $-1$. Subtract: $1 - (-1) = 2$.',
          hint3: 'Top-left: $A$ has $4$, and $3B$ has $3 \\cdot 3 = 9$ there. So $4 + 9 = 13$.',
          explanation: '1) $2 \\cdot (-2) = -4$.  2) $1 - (-1) = 2$.  3) $4 + 3(3) = 13$.',
        },
      },
      {
        id: 'mat2-properties',
        type: 'dropdown-select' as const,
        content: `**Properties of Addition** 🔽

These operations behave just like ordinary numbers. Fill in each property (assume $A, B$ have matching dimensions).`,
        exercise: {
          dropdowns: [
            { label: 'Commutative: $A + B = $', options: ['$B + A$', '$A - B$', '$BA$', '$-(A+B)$'] },
            { label: 'The matrix where adding it changes nothing is the:', options: ['zero matrix', 'identity matrix', 'scalar matrix', 'inverse matrix'] },
            { label: 'Distributive: $k(A + B) = $', options: ['$kA + kB$', '$kA + B$', '$A + kB$', '$k + A + B$'] },
          ],
          correctAnswers: ['$B + A$', 'zero matrix', '$kA + kB$'],
          hint1: 'Order does not matter for addition — just like $3 + 5 = 5 + 3$.',
          hint2: 'Adding a matrix of all zeros leaves a matrix unchanged.',
          hint3: 'A scalar distributes over a sum, hitting every entry: $k$ multiplies both $A$ and $B$.',
          explanation: 'Matrix addition is commutative ($A+B=B+A$), the zero matrix is the additive identity, and scalars distribute: $k(A+B) = kA + kB$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'matrix-operations-algebra2',
    sections: [
      {
        id: 'mat3-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations

**Part 3 of 5 — Matrix Multiplication**

---

> 🔑 **Why it's different:** Matrix multiplication is **not** entry-by-entry. Instead, each output entry is a **row-times-column dot product**. Get the setup right and the arithmetic is easy.`,
      },
      {
        id: 'mat3-when',
        type: 'text' as const,
        content: `## When Can You Multiply? The Inner-Match Rule

To multiply $A \\times B$, the **number of columns in $A$** must equal the **number of rows in $B$**.

$$\\underbrace{A}_{m \\times \\textcolor{red}{n}} \\;\\cdot\\; \\underbrace{B}_{\\textcolor{red}{n} \\times p} \\;=\\; \\underbrace{C}_{m \\times p}$$

- The **inner** numbers must **match** → tells you *if* multiplication is allowed.
- The **outer** numbers give the **size of the product**.

### Examples

| $A$ | $B$ | Allowed? | Product size |
|-----|-----|----------|--------------|
| $2 \\times 3$ | $3 \\times 4$ | ✅ inner $3=3$ | $2 \\times 4$ |
| $3 \\times 2$ | $2 \\times 2$ | ✅ inner $2=2$ | $3 \\times 2$ |
| $2 \\times 3$ | $2 \\times 3$ | ❌ inner $3 \\ne 2$ | undefined |

> ⚠️ Because the inner numbers must match, $AB$ being defined does **not** mean $BA$ is defined. **Order matters!**`,
      },
      {
        id: 'mat3-size-check',
        type: 'dropdown-select' as const,
        content: `**Can You Multiply?** 🔽

For each pair, decide whether the product $AB$ exists and, if so, its dimensions.`,
        exercise: {
          dropdowns: [
            { label: '$A$ is $2 \\times 3$, $B$ is $3 \\times 5$. Then $AB$ is:', options: ['$2 \\times 5$', '$3 \\times 3$', '$5 \\times 2$', 'undefined'] },
            { label: '$A$ is $4 \\times 2$, $B$ is $3 \\times 2$. Then $AB$ is:', options: ['undefined', '$4 \\times 2$', '$2 \\times 3$', '$4 \\times 3$'] },
            { label: '$A$ is $3 \\times 3$, $B$ is $3 \\times 1$. Then $AB$ is:', options: ['$3 \\times 1$', '$1 \\times 3$', '$3 \\times 3$', 'undefined'] },
          ],
          correctAnswers: ['$2 \\times 5$', 'undefined', '$3 \\times 1$'],
          hint1: 'Inner numbers $3$ and $3$ match; outer numbers $2$ and $5$ give the size.',
          hint2: 'Inner numbers are $2$ (cols of $A$) and $3$ (rows of $B$). $2 \\ne 3$, so it is undefined.',
          hint3: 'Inner numbers $3$ and $3$ match; the outer numbers $3$ and $1$ give a $3 \\times 1$ product.',
          explanation: 'Check the inner pair first (cols of $A$ vs. rows of $B$). If they match, the product has the outer dimensions.',
        },
      },
      {
        id: 'mat3-how',
        type: 'text' as const,
        content: `## How to Multiply: Row · Column

Entry $c_{ij}$ of the product comes from **row $i$ of $A$** dotted with **column $j$ of $B$**: multiply matching pieces, then add.

### Worked Example: $2 \\times 2$ times $2 \\times 2$

$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$$

Compute each entry by pairing a row with a column:

$$c_{11} = (1)(5) + (2)(7) = 5 + 14 = 19$$
$$c_{12} = (1)(6) + (2)(8) = 6 + 16 = 22$$
$$c_{21} = (3)(5) + (4)(7) = 15 + 28 = 43$$
$$c_{22} = (3)(6) + (4)(8) = 18 + 32 = 50$$

$$= \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$$

> 💡 Say it out loud: "**row 1, column 1**" gives the top-left; "**row 2, column 1**" gives the bottom-left. The row index follows $A$, the column index follows $B$.`,
      },
      {
        id: 'mat3-dot-drill',
        type: 'input-boxes' as const,
        content: `**Build the Product** 🧮

Multiply $\\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 4 & -1 \\\\ 5 & 2 \\end{bmatrix}$. Find each requested entry.

**1)** $c_{11}$ (row 1 · column 1) $= \\,?$
**2)** $c_{12}$ (row 1 · column 2) $= \\,?$
**3)** $c_{21}$ (row 2 · column 1) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '-2', '19'],
          hint1: 'Row 1 is $[\\,2\\;\\;0\\,]$, column 1 is $[\\,4\\;\\;5\\,]$: $(2)(4) + (0)(5)$.',
          hint2: 'Row 1 is $[\\,2\\;\\;0\\,]$, column 2 is $[\\,-1\\;\\;2\\,]$: $(2)(-1) + (0)(2)$.',
          hint3: 'Row 2 is $[\\,1\\;\\;3\\,]$, column 1 is $[\\,4\\;\\;5\\,]$: $(1)(4) + (3)(5)$.',
          explanation: '1) $2\\cdot4 + 0\\cdot5 = 8$.  2) $2\\cdot(-1) + 0\\cdot2 = -2$.  3) $1\\cdot4 + 3\\cdot5 = 4+15 = 19$.',
        },
      },
      {
        id: 'mat3-noncommute',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For matrices, $AB$ and $BA$ are generally:',
              options: [
                'not equal — matrix multiplication is **not** commutative',
                'always equal',
                'always both undefined',
                'equal only when both are $3 \\times 3$',
              ],
              correctAnswer: 0,
              explanation: 'Order matters in matrix multiplication. Even when both products are defined, $AB \\ne BA$ in general.',
            },
            {
              question: '$\\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = $',
              options: [
                '$\\begin{bmatrix} 11 \\\\ 4 \\end{bmatrix}$',
                '$\\begin{bmatrix} 3 \\\\ 8 \\end{bmatrix}$',
                '$\\begin{bmatrix} 11 \\\\ 8 \\end{bmatrix}$',
                '$\\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix}$',
              ],
              correctAnswer: 0,
              explanation: 'A $2\\times2$ times a $2\\times1$ gives a $2\\times1$. Top: $(1)(3)+(2)(4)=11$. Bottom: $(0)(3)+(1)(4)=4$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'matrix-operations-algebra2',
    sections: [
      {
        id: 'mat4-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations

**Part 4 of 5 — Special Matrices & Determinants**

---

> 🔑 **Big Payoff:** A few special matrices and the **determinant** unlock the most useful application of all — solving systems of equations. This part sets that up.`,
      },
      {
        id: 'mat4-special',
        type: 'text' as const,
        content: `## Special Matrices

A **square matrix** has the same number of rows and columns ($n \\times n$).

**Identity matrix $I$** — has $1$s on the main diagonal (top-left to bottom-right) and $0$s elsewhere. It is the multiplicative "1" of matrices: $AI = IA = A$.

$$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, \\qquad I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

**Zero matrix $O$** — all entries are $0$. It is the additive "0": $A + O = A$.

| Matrix | Role | Acts like the number |
|--------|------|----------------------|
| Identity $I$ | $AI = A$ | $1$ (multiplication) |
| Zero $O$ | $A + O = A$ | $0$ (addition) |

> 💡 The identity only "does nothing" when it's the **right size** to multiply $A$ — its dimension must match.`,
      },
      {
        id: 'mat4-special-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which matrix is the $2 \\times 2$ identity matrix $I_2$?',
              options: [
                '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$',
                '$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$',
                '$\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$',
                '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$',
              ],
              correctAnswer: 0,
              explanation: 'The identity has $1$s on the main diagonal (top-left to bottom-right) and $0$s everywhere else.',
            },
            {
              question: 'What is $A \\cdot I$ for any square matrix $A$ (with $I$ the matching identity)?',
              options: ['$A$', 'the zero matrix', '$I$', '$2A$'],
              correctAnswer: 0,
              explanation: 'Multiplying by the identity leaves a matrix unchanged: $AI = IA = A$, just like multiplying a number by $1$.',
            },
          ],
        },
      },
      {
        id: 'mat4-determinant',
        type: 'text' as const,
        content: `## The Determinant of a $2 \\times 2$ Matrix

For a square matrix, the **determinant** is a single number that tells you key facts about it. For a $2 \\times 2$:

$$A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\;\\Longrightarrow\\; \\det(A) = ad - bc$$

**Multiply the main diagonal, subtract the off-diagonal.**

### Worked Example

$$\\det\\begin{bmatrix} 3 & 5 \\\\ 2 & 4 \\end{bmatrix} = (3)(4) - (5)(2) = 12 - 10 = 2$$

### Worked Example (with negatives)

$$\\det\\begin{bmatrix} 6 & -1 \\\\ 4 & 2 \\end{bmatrix} = (6)(2) - (-1)(4) = 12 - (-4) = 16$$

> ⚠️ Watch the signs! The formula is $ad - bc$, so a negative $b$ or $c$ can flip the sign of the subtracted term.

> 🔑 **Why it matters:** If $\\det(A) = 0$, the matrix has **no inverse** and the related system has no unique solution. A nonzero determinant means the matrix is **invertible**.`,
      },
      {
        id: 'mat4-det-drill',
        type: 'input-boxes' as const,
        content: `**Compute Determinants** 🧮

Use $\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$.

**1)** $\\det\\begin{bmatrix} 4 & 3 \\\\ 1 & 2 \\end{bmatrix} = \\,?$
**2)** $\\det\\begin{bmatrix} 5 & 0 \\\\ -2 & 3 \\end{bmatrix} = \\,?$
**3)** $\\det\\begin{bmatrix} 2 & 6 \\\\ 1 & 3 \\end{bmatrix} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '15', '0'],
          hint1: '$ad - bc = (4)(2) - (3)(1) = 8 - 3$.',
          hint2: '$(5)(3) - (0)(-2) = 15 - 0$.',
          hint3: '$(2)(3) - (6)(1) = 6 - 6$. A zero determinant means this matrix is **not** invertible.',
          explanation: '1) $8 - 3 = 5$.  2) $15 - 0 = 15$.  3) $6 - 6 = 0$ (singular — no inverse).',
        },
      },
      {
        id: 'mat4-det-meaning',
        type: 'dropdown-select' as const,
        content: `**Reading the Determinant** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The $2\\times2$ determinant formula is:', options: ['$ad - bc$', '$ab - cd$', '$ac - bd$', '$ad + bc$'] },
            { label: 'If $\\det(A) = 0$, then $A$ is:', options: ['not invertible', 'always the identity', 'guaranteed invertible', 'a zero matrix'] },
            { label: '$\\det(I_2)$, the identity, equals:', options: ['$1$', '$0$', '$2$', '$-1$'] },
          ],
          correctAnswers: ['$ad - bc$', 'not invertible', '$1$'],
          hint1: 'Main diagonal product minus off-diagonal product.',
          hint2: 'A determinant of zero signals a "singular" matrix — it has no inverse.',
          hint3: '$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, so $\\det = (1)(1) - (0)(0) = 1$.',
          explanation: 'For $2\\times2$: $\\det = ad - bc$. A zero determinant means no inverse, and $\\det(I) = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'matrix-operations-algebra2',
    sections: [
      {
        id: 'mat5-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) describe matrices by size and entry, (2) add, subtract, and scale them, (3) multiply with the row·column rule, and (4) find determinants. Let's put it all together.`,
      },
      {
        id: 'mat5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Operation | Rule | Requirement |
|-----------|------|-------------|
| Add / Subtract | entry-by-entry | **same** dimensions |
| Scalar $\\times$ matrix | multiply every entry | always allowed |
| Multiply $A\\,B$ | row · column dot products | cols of $A$ = rows of $B$ |
| Determinant ($2\\times2$) | $ad - bc$ | square matrix |

> ⚠️ **Three traps to remember:** (1) add/subtract only with matching shapes, (2) matrix multiplication is **not** commutative, (3) for $\\det$, it's $ad - bc$ — mind the signs.`,
      },
      {
        id: 'mat5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$2\\begin{bmatrix} 3 & -1 \\\\ 0 & 5 \\end{bmatrix} - \\begin{bmatrix} 1 & 2 \\\\ 4 & 3 \\end{bmatrix} = $',
              options: [
                '$\\begin{bmatrix} 5 & -4 \\\\ -4 & 7 \\end{bmatrix}$',
                '$\\begin{bmatrix} 5 & 0 \\\\ 4 & 7 \\end{bmatrix}$',
                '$\\begin{bmatrix} 7 & -4 \\\\ -4 & 13 \\end{bmatrix}$',
                '$\\begin{bmatrix} 2 & -3 \\\\ -4 & 2 \\end{bmatrix}$',
              ],
              correctAnswer: 0,
              explanation: '$2A = \\begin{bmatrix} 6 & -2 \\\\ 0 & 10 \\end{bmatrix}$. Subtract entry-by-entry: $6-1=5$, $-2-2=-4$, $0-4=-4$, $10-3=7$.',
            },
            {
              question: '$A$ is $3 \\times 4$ and $B$ is $4 \\times 2$. What is the size of $AB$?',
              options: ['$3 \\times 2$', '$4 \\times 4$', '$2 \\times 3$', 'undefined'],
              correctAnswer: 0,
              explanation: 'Inner numbers $4 = 4$ match, so the product exists. The outer numbers $3$ and $2$ give a $3 \\times 2$ result.',
            },
          ],
        },
      },
      {
        id: 'mat5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Round** 🧮

Let $A = \\begin{bmatrix} 2 & -3 \\\\ 5 & 1 \\end{bmatrix}$ and $B = \\begin{bmatrix} 4 & 0 \\\\ -1 & 6 \\end{bmatrix}$.

**1)** Bottom-right entry of $A + B$ $= \\,?$
**2)** $\\det(A) = \\,?$
**3)** Top-left entry of the product $AB$ (row 1 · column 1) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '17', '11'],
          hint1: 'Bottom-right entries: $1 + 6$.',
          hint2: '$\\det(A) = ad - bc = (2)(1) - (-3)(5) = 2 - (-15)$.',
          hint3: 'Row 1 of $A$ is $[\\,2\\;\\;-3\\,]$; column 1 of $B$ is $[\\,4\\;\\;-1\\,]$: $(2)(4) + (-3)(-1)$.',
          explanation: '1) $1 + 6 = 7$.  2) $(2)(1) - (-3)(5) = 2 + 15 = 17$.  3) $(2)(4) + (-3)(-1) = 8 + 3 = 11$.',
        },
      },
      {
        id: 'mat5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What are the dimensions of $\\begin{bmatrix} 2 & 5 & 1 & 0 \\\\ 7 & 3 & 8 & 4 \\end{bmatrix}$?',
              options: ['$2 \\times 4$', '$4 \\times 2$', '$8 \\times 1$', '$2 \\times 2$'],
              correctAnswer: 0,
              explanation: 'Rows first: 2 horizontal rows and 4 vertical columns, so it is $2 \\times 4$.',
            },
            {
              question: '$\\det\\begin{bmatrix} 7 & 2 \\\\ 3 & 1 \\end{bmatrix} = $',
              options: ['$1$', '$13$', '$-1$', '$21$'],
              correctAnswer: 0,
              explanation: '$ad - bc = (7)(1) - (2)(3) = 7 - 6 = 1$.',
            },
            {
              question: '$\\begin{bmatrix} 1 & 0 \\\\ 2 & 3 \\end{bmatrix} \\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix} = $',
              options: [
                '$\\begin{bmatrix} 4 \\\\ 23 \\end{bmatrix}$',
                '$\\begin{bmatrix} 9 \\\\ 23 \\end{bmatrix}$',
                '$\\begin{bmatrix} 4 \\\\ 8 \\end{bmatrix}$',
                '$\\begin{bmatrix} 5 \\\\ 23 \\end{bmatrix}$',
              ],
              correctAnswer: 0,
              explanation: 'Top: $(1)(4)+(0)(5)=4$. Bottom: $(2)(4)+(3)(5)=8+15=23$. Result is $\\begin{bmatrix} 4 \\\\ 23 \\end{bmatrix}$.',
            },
          ],
        },
      },
    ],
  },
]
