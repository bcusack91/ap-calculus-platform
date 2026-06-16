import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Matrix Operations and Applications (AP Precalculus).
 * Registry key: 'matrix-operations' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: matrix basics → add/subtract/scalar → matrix
 * multiplication → identity & inverse → determinants → solving systems → applications
 * (transformations, networks) + mixed practice and a 3-question exit quiz.
 * Interactive practice mixes multiple-choice + input-boxes + dropdown each part.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat1-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 1 of 7 — Matrix Basics: Shape, Entries, and Equality**

---

### Topics in This Part

| Section |
|---------|
| What Is a Matrix? |
| Dimensions and Entry Notation |
| When Are Two Matrices Equal? |

> 🔑 **Key Concept:** A **matrix** is a rectangular grid of numbers. Before we can add, multiply, or invert matrices, we need a precise language for their **shape** (rows × columns) and their **entries**. That vocabulary is Part 1.`,
      },
      {
        id: 'mat1-what',
        type: 'text' as const,
        content: `## What Is a Matrix?

A **matrix** is a rectangular array of numbers arranged in **rows** and **columns**, written inside brackets:

$$A = \\begin{bmatrix} 2 & -1 & 0 \\\\ 4 & 5 & 3 \\end{bmatrix}$$

- **Rows** run *horizontally* (this $A$ has $2$ rows).
- **Columns** run *vertically* (this $A$ has $3$ columns).

The **dimensions** (or **size**) of a matrix are written $\\text{rows} \\times \\text{columns}$. Here $A$ is a $2 \\times 3$ matrix.

> 🔑 **Order matters:** Always say rows **first**, columns **second**. A $2 \\times 3$ matrix is *not* the same shape as a $3 \\times 2$ matrix.

### Special shapes

| Name | Shape | Example |
|------|-------|---------|
| Row matrix | $1 \\times n$ | $\\begin{bmatrix} 3 & 7 \\end{bmatrix}$ |
| Column matrix | $m \\times 1$ | $\\begin{bmatrix} 3 \\\\ 7 \\end{bmatrix}$ |
| Square matrix | $n \\times n$ | $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ |`,
      },
      {
        id: 'mat1-dims-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What are the dimensions of $\\begin{bmatrix} 1 & 0 & 2 & 5 \\\\ -3 & 8 & 6 & 1 \\\\ 4 & 4 & 0 & 9 \\end{bmatrix}$?',
              options: ['$4 \\times 3$', '$3 \\times 4$', '$12 \\times 1$', '$3 \\times 3$'],
              correctAnswer: 1,
              explanation: 'Count rows first, then columns. There are $3$ rows and $4$ columns, so the matrix is $3 \\times 4$.',
            },
            {
              question: 'Which of these is a square matrix?',
              options: ['$\\begin{bmatrix} 1 & 2 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$'],
              correctAnswer: 2,
              explanation: 'A square matrix has the same number of rows and columns. $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ is $2 \\times 2$, so it is square.',
            },
          ],
        },
      },
      {
        id: 'mat1-entries',
        type: 'text' as const,
        content: `## Entry Notation: $a_{ij}$

We name a matrix with a capital letter and refer to a single number inside it as an **entry** (or element). The entry in **row $i$, column $j$** of matrix $A$ is written

$$a_{ij}$$

The **first** subscript is the row; the **second** is the column.

### Example

$$A = \\begin{bmatrix} 2 & -1 & 0 \\\\ 4 & 5 & 3 \\end{bmatrix}$$

- $a_{11} = 2$ (row $1$, column $1$)
- $a_{13} = 0$ (row $1$, column $3$)
- $a_{23} = 3$ (row $2$, column $3$)
- $a_{21} = 4$ (row $2$, column $1$)

> 💡 Read the subscripts like coordinates, but **(row, column)** instead of $(x, y)$.`,
      },
      {
        id: 'mat1-entries-drill',
        type: 'input-boxes' as const,
        content: `**Locate the Entries** 🧮

Use the matrix
$$B = \\begin{bmatrix} 7 & -2 & 9 \\\\ 0 & 6 & -4 \\end{bmatrix}$$

**1)** $b_{12} = \\,?$
**2)** $b_{21} = \\,?$
**3)** $b_{23} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '0', '-4'],
          hint1: '$b_{12}$ is row $1$, column $2$. Go across the top row to the second number.',
          hint2: '$b_{21}$ is row $2$, column $1$ — the first number of the bottom row.',
          hint3: '$b_{23}$ is row $2$, column $3$ — the last number of the bottom row.',
          explanation: '1) $b_{12} = -2$.  2) $b_{21} = 0$.  3) $b_{23} = -4$. First subscript = row, second = column.',
        },
      },
      {
        id: 'mat1-equality',
        type: 'text' as const,
        content: `## When Are Two Matrices Equal?

Two matrices are **equal** when **both** of these hold:

1. They have the **same dimensions**, and
2. **Every** corresponding entry is equal: $a_{ij} = b_{ij}$ for all $i, j$.

### Example

$$\\begin{bmatrix} x & 3 \\\\ -1 & y \\end{bmatrix} = \\begin{bmatrix} 5 & 3 \\\\ -1 & 8 \\end{bmatrix}$$

Matching entry-by-entry forces $x = 5$ and $y = 8$.

> ⚠️ A $2 \\times 3$ matrix can **never** equal a $3 \\times 2$ matrix, even if they contain the same numbers — the shapes differ. Equality of matrices is a powerful tool: it turns one matrix equation into a system of equations, one per entry.`,
      },
      {
        id: 'mat1-equality-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $\\begin{bmatrix} 2x & 1 \\\\ 4 & y+1 \\end{bmatrix} = \\begin{bmatrix} 10 & 1 \\\\ 4 & 7 \\end{bmatrix}$, what are $x$ and $y$?',
              options: ['$x = 5,\\ y = 6$', '$x = 10,\\ y = 7$', '$x = 5,\\ y = 7$', '$x = 8,\\ y = 6$'],
              correctAnswer: 0,
              explanation: 'Match corresponding entries: $2x = 10 \\Rightarrow x = 5$, and $y + 1 = 7 \\Rightarrow y = 6$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat2-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 2 of 7 — Addition, Subtraction, and Scalar Multiplication**

---

> 🔑 **The Idea:** Adding, subtracting, and scaling matrices all happen **entry-by-entry**. These are the easy operations — the only rule to watch is that addition and subtraction require **matching dimensions**.`,
      },
      {
        id: 'mat2-add',
        type: 'text' as const,
        content: `## Adding and Subtracting Matrices

To add (or subtract) two matrices of the **same size**, add (or subtract) corresponding entries:

$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} + \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} a+e & b+f \\\\ c+g & d+h \\end{bmatrix}$$

### Worked Example

$$\\begin{bmatrix} 2 & -1 \\\\ 0 & 5 \\end{bmatrix} + \\begin{bmatrix} 3 & 4 \\\\ 6 & -2 \\end{bmatrix} = \\begin{bmatrix} 5 & 3 \\\\ 6 & 3 \\end{bmatrix}$$

$$\\begin{bmatrix} 7 & 8 \\\\ 1 & 0 \\end{bmatrix} - \\begin{bmatrix} 2 & 5 \\\\ 4 & -3 \\end{bmatrix} = \\begin{bmatrix} 5 & 3 \\\\ -3 & 3 \\end{bmatrix}$$

> ⚠️ **Dimensions must match.** You cannot add a $2 \\times 2$ matrix to a $2 \\times 3$ matrix — the sum is **undefined**.`,
      },
      {
        id: 'mat2-scalar',
        type: 'text' as const,
        content: `## Scalar Multiplication

A **scalar** is just a single number. To multiply a matrix by a scalar $k$, multiply **every** entry by $k$:

$$k\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = \\begin{bmatrix} ka & kb \\\\ kc & kd \\end{bmatrix}$$

### Worked Example

$$3\\begin{bmatrix} 2 & -1 \\\\ 0 & 4 \\end{bmatrix} = \\begin{bmatrix} 6 & -3 \\\\ 0 & 12 \\end{bmatrix}$$

This lets us combine operations. For example, $2A - B$ means "double every entry of $A$, then subtract $B$ entry-by-entry."

$$2\\begin{bmatrix} 1 & 3 \\\\ 5 & 0 \\end{bmatrix} - \\begin{bmatrix} 4 & 1 \\\\ 2 & -3 \\end{bmatrix} = \\begin{bmatrix} 2 & 6 \\\\ 10 & 0 \\end{bmatrix} - \\begin{bmatrix} 4 & 1 \\\\ 2 & -3 \\end{bmatrix} = \\begin{bmatrix} -2 & 5 \\\\ 8 & 3 \\end{bmatrix}$$`,
      },
      {
        id: 'mat2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\begin{bmatrix} 5 & -2 \\\\ 1 & 3 \\end{bmatrix} + \\begin{bmatrix} -1 & 6 \\\\ 4 & 0 \\end{bmatrix} = $',
              options: ['$\\begin{bmatrix} 4 & 4 \\\\ 5 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & -8 \\\\ -3 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 4 \\\\ 5 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 4 \\\\ 5 & 3 \\end{bmatrix}$'],
              correctAnswer: 0,
              explanation: 'Add entry-by-entry: $5+(-1)=4$, $-2+6=4$, $1+4=5$, $3+0=3$, giving $\\begin{bmatrix} 4 & 4 \\\\ 5 & 3 \\end{bmatrix}$.',
            },
            {
              question: 'For which pair is $A + B$ **undefined**?',
              options: ['$A$ is $2\\times2$, $B$ is $2\\times2$', '$A$ is $3\\times1$, $B$ is $3\\times1$', '$A$ is $2\\times3$, $B$ is $3\\times2$', '$A$ is $1\\times4$, $B$ is $1\\times4$'],
              correctAnswer: 2,
              explanation: 'Addition requires identical dimensions. A $2\\times3$ and a $3\\times2$ matrix have different shapes, so their sum is undefined.',
            },
          ],
        },
      },
      {
        id: 'mat2-drill',
        type: 'input-boxes' as const,
        content: `**Compute $2A - B$** 🧮

Let $A = \\begin{bmatrix} 3 & -1 \\\\ 0 & 2 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 4 \\\\ -2 & 5 \\end{bmatrix}$.

Compute $2A - B$ and enter its entries **reading left to right, top to bottom**.

Entry $(1,1) = \\,?$ &nbsp;&nbsp; Entry $(1,2) = \\,?$ &nbsp;&nbsp; Entry $(2,1) = \\,?$ &nbsp;&nbsp; Entry $(2,2) = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['5', '-6', '2', '-1'],
          hint1: 'First double $A$: $2A = \\begin{bmatrix} 6 & -2 \\\\ 0 & 4 \\end{bmatrix}$.',
          hint2: 'Then subtract $B$ entry-by-entry: $(1,1) = 6 - 1 = 5$ and $(1,2) = -2 - 4 = -6$.',
          hint3: 'Bottom row: $(2,1) = 0 - (-2) = 2$ and $(2,2) = 4 - 5 = -1$.',
          explanation: '$2A = \\begin{bmatrix} 6 & -2 \\\\ 0 & 4 \\end{bmatrix}$, so $2A - B = \\begin{bmatrix} 5 & -6 \\\\ 2 & -1 \\end{bmatrix}$.',
        },
      },
      {
        id: 'mat2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Defined or Not?** 🔽

For each expression, decide whether the operation is **defined** (legal) given the stated shapes.`,
        exercise: {
          dropdowns: [
            { label: '$A + B$ where $A, B$ are both $2\\times2$:', options: ['defined', 'undefined'] },
            { label: '$A - B$ where $A$ is $2\\times3$ and $B$ is $3\\times2$:', options: ['defined', 'undefined'] },
            { label: '$5A$ where $A$ is $4\\times7$:', options: ['defined', 'undefined'] },
          ],
          correctAnswers: ['defined', 'undefined', 'defined'],
          hint1: 'Addition and subtraction need **identical** dimensions; scalar multiplication works on **any** matrix.',
          hint2: 'Same shape ($2\\times2$ and $2\\times2$) → addition is defined. Different shapes ($2\\times3$ vs $3\\times2$) → subtraction is undefined.',
          hint3: 'A scalar like $5$ can multiply a matrix of any size, so $5A$ is always defined.',
          explanation: 'Add/subtract require matching dimensions: $2\\times2 + 2\\times2$ is defined; $2\\times3 - 3\\times2$ is undefined. Scalar multiplication ($5A$) is always defined.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat3-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 3 of 7 — Matrix Multiplication**

---

> 🔑 **The Big Idea:** Matrix multiplication is **not** entry-by-entry. Each entry of the product is a **row dotted with a column**. This row-by-column rule is the engine behind transformations, systems, and applications later in the lesson.`,
      },
      {
        id: 'mat3-rule',
        type: 'text' as const,
        content: `## The Row-by-Column Rule

To find the entry in **row $i$, column $j$** of the product $AB$, take **row $i$ of $A$**, **column $j$ of $B$**, multiply matching numbers, and add.

For $2 \\times 2$ matrices:

$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{bmatrix}$$

### Worked Example

$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$$

- Entry $(1,1)$: row $1$ $\\begin{bmatrix}1 & 2\\end{bmatrix}$ · column $1$ $\\begin{bmatrix}5 \\\\ 7\\end{bmatrix} = 1\\cdot5 + 2\\cdot7 = 19$
- Entry $(1,2)$: $1\\cdot6 + 2\\cdot8 = 22$
- Entry $(2,1)$: $3\\cdot5 + 4\\cdot7 = 43$
- Entry $(2,2)$: $3\\cdot6 + 4\\cdot8 = 50$

$$= \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$$`,
      },
      {
        id: 'mat3-dims',
        type: 'text' as const,
        content: `## When Is $AB$ Defined? What Size Is It?

The product $AB$ exists **only when the inner dimensions match**:

$$\\underbrace{(m \\times n)}_{A}\\ \\underbrace{(n \\times p)}_{B} \\;=\\; (m \\times p)$$

- The **inner** numbers ($n$ and $n$) must be **equal** — that is what lets a row of $A$ pair with a column of $B$.
- The **outer** numbers ($m$ and $p$) give the **size of the product**.

### Example

A $2 \\times 3$ matrix times a $3 \\times 4$ matrix: inner $3 = 3$ ✓, so the product exists and is $2 \\times 4$.

> ⚠️ **Order matters!** In general $AB \\ne BA$. Matrix multiplication is **not commutative**. Sometimes $AB$ is defined while $BA$ is not even a legal product.`,
      },
      {
        id: 'mat3-dims-dropdown',
        type: 'dropdown-select' as const,
        content: `**Is It Defined? What Size?** 🔽

For each product, decide whether it is defined, and if so, give its dimensions.`,
        exercise: {
          dropdowns: [
            { label: '$(2\\times3)(3\\times5)$ is:', options: ['$2 \\times 5$', '$3 \\times 3$', '$5 \\times 2$', 'undefined'] },
            { label: '$(4\\times2)(3\\times2)$ is:', options: ['$4 \\times 2$', '$4 \\times 3$', '$2 \\times 2$', 'undefined'] },
            { label: '$(1\\times3)(3\\times1)$ is:', options: ['$1 \\times 1$', '$3 \\times 3$', '$1 \\times 3$', 'undefined'] },
          ],
          correctAnswers: ['$2 \\times 5$', 'undefined', '$1 \\times 1$'],
          hint1: 'Check the inner dimensions first. If they match, the product is (outer left) × (outer right).',
          hint2: 'For $(4\\times2)(3\\times2)$ the inner numbers are $2$ and $3$ — they do not match.',
          hint3: 'For $(1\\times3)(3\\times1)$ the inner numbers are both $3$ ✓, and the outer numbers give a $1 \\times 1$ result (a single number).',
          explanation: '$(2\\times3)(3\\times5)$: inner $3=3$ ✓ → $2\\times5$. $(4\\times2)(3\\times2)$: inner $2\\ne3$ → undefined. $(1\\times3)(3\\times1)$: inner $3=3$ ✓ → $1\\times1$.',
        },
      },
      {
        id: 'mat3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the entry in row $1$, column $1$ of $\\begin{bmatrix} 2 & -1 \\\\ 0 & 3 \\end{bmatrix}\\begin{bmatrix} 4 & 1 \\\\ 5 & -2 \\end{bmatrix}$?',
              options: ['$3$', '$8$', '$13$', '$-5$'],
              correctAnswer: 0,
              explanation: 'Row $1$ of the first matrix is $\\begin{bmatrix}2 & -1\\end{bmatrix}$; column $1$ of the second is $\\begin{bmatrix}4 \\\\ 5\\end{bmatrix}$. So $2\\cdot4 + (-1)\\cdot5 = 8 - 5 = 3$.',
            },
            {
              question: 'Which statement about matrix multiplication is **true**?',
              options: ['$AB = BA$ for all matrices', 'Multiplication is done entry-by-entry', 'The inner dimensions must match for $AB$ to be defined', 'The product is always square'],
              correctAnswer: 2,
              explanation: 'For $AB$ to exist, the number of columns of $A$ (the inner-left dimension) must equal the number of rows of $B$ (the inner-right dimension). Multiplication is row-by-column, and generally $AB \\ne BA$.',
            },
          ],
        },
      },
      {
        id: 'mat3-drill',
        type: 'input-boxes' as const,
        content: `**Multiply Them** 🧮

Compute the product
$$\\begin{bmatrix} 1 & 2 \\\\ 0 & -1 \\end{bmatrix}\\begin{bmatrix} 3 & 4 \\\\ 5 & 6 \\end{bmatrix}$$
and enter its entries left to right, top to bottom.

Entry $(1,1) = \\,?$ &nbsp;&nbsp; Entry $(1,2) = \\,?$ &nbsp;&nbsp; Entry $(2,1) = \\,?$ &nbsp;&nbsp; Entry $(2,2) = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['13', '16', '-5', '-6'],
          hint1: 'Entry $(1,1)$ = (row $1$) · (column $1$) $= 1\\cdot3 + 2\\cdot5$.',
          hint2: 'Top row: $(1,1) = 1\\cdot3 + 2\\cdot5 = 13$ and $(1,2) = 1\\cdot4 + 2\\cdot6 = 16$.',
          hint3: 'Bottom row (row $2$ is $\\begin{bmatrix}0 & -1\\end{bmatrix}$): $(2,1) = 0\\cdot3 + (-1)\\cdot5 = -5$ and $(2,2) = 0\\cdot4 + (-1)\\cdot6 = -6$.',
          explanation: 'Row-by-column gives $\\begin{bmatrix} 13 & 16 \\\\ -5 & -6 \\end{bmatrix}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat4-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 4 of 7 — The Identity Matrix and Inverses**

---

> 🔑 **The Idea:** The **identity matrix** $I$ plays the role of "$1$" for matrices, and an **inverse** $A^{-1}$ plays the role of "$\\frac{1}{A}$." Inverses are the key to *dividing* — and to solving systems in Part 6.`,
      },
      {
        id: 'mat4-identity',
        type: 'text' as const,
        content: `## The Identity Matrix

The **identity matrix** $I$ is a square matrix with $1$'s on the main diagonal and $0$'s everywhere else:

$$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, \\qquad I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

It behaves like the number $1$: for any compatible matrix $A$,

$$AI = IA = A$$

### Quick check

$$\\begin{bmatrix} 7 & 2 \\\\ -3 & 5 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 7 & 2 \\\\ -3 & 5 \\end{bmatrix}$$

Multiplying by $I$ leaves a matrix unchanged.`,
      },
      {
        id: 'mat4-inverse-def',
        type: 'text' as const,
        content: `## What Is an Inverse?

The **inverse** of a square matrix $A$, written $A^{-1}$, is the matrix that "undoes" $A$:

$$A A^{-1} = A^{-1} A = I$$

For a $2 \\times 2$ matrix there is a clean formula. If

$$A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}, \\qquad A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$

**Three moves** to remember:
1. **Swap** $a$ and $d$ (the diagonal entries).
2. **Negate** $b$ and $c$ (the off-diagonal entries).
3. **Divide** the whole thing by $ad - bc$.

> ⚠️ The number $ad - bc$ is the **determinant** (Part 5). If $ad - bc = 0$, you would be dividing by zero — the matrix has **no inverse** and is called **singular**.`,
      },
      {
        id: 'mat4-inverse-worked',
        type: 'text' as const,
        content: `## Worked Example

Find the inverse of $A = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$.

**Step 1 — determinant:** $ad - bc = (4)(4) - (3)(5) = 16 - 15 = 1$.

**Step 2 — swap, negate, divide:**

$$A^{-1} = \\frac{1}{1}\\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}$$

**Step 3 — verify:**

$$A A^{-1} = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}\\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix} = \\begin{bmatrix} 16-15 & -12+12 \\\\ 20-20 & -15+16 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I \\;✓$$`,
      },
      {
        id: 'mat4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Inverse** 🔽

You are inverting $A = \\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$. Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The determinant $ad - bc$ is:', options: ['$1$', '$4$', '$7$', '$-1$'] },
            { label: 'After swap & negate, the matrix is:', options: ['$\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} -2 & 1 \\\\ 3 & -2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$'] },
            { label: 'So $A^{-1}$ equals:', options: ['$\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & -1 \\\\ -3 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$', 'no inverse exists'] },
          ],
          correctAnswers: ['$1$', '$\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$'],
          hint1: 'Determinant $= ad - bc = (2)(2) - (1)(3)$.',
          hint2: 'Swap the diagonal ($2$ and $2$ stay $2$ and $2$) and negate the off-diagonal ($1 \\to -1$, $3 \\to -3$).',
          hint3: 'Since the determinant is $1$, dividing by it leaves the swap-and-negate matrix unchanged: $A^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$.',
          explanation: '$ad-bc = 4 - 3 = 1$. Swap/negate gives $\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$, and dividing by $1$ leaves it as $A^{-1}$.',
        },
      },
      {
        id: 'mat4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which matrix has **no inverse** (is singular)?',
              options: ['$\\begin{bmatrix} 2 & 4 \\\\ 1 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 1 \\\\ 7 & 4 \\end{bmatrix}$'],
              correctAnswer: 0,
              explanation: 'A matrix is singular when $ad - bc = 0$. For $\\begin{bmatrix} 2 & 4 \\\\ 1 & 2 \\end{bmatrix}$: $(2)(2) - (4)(1) = 4 - 4 = 0$, so it has no inverse.',
            },
          ],
        },
      },
      {
        id: 'mat4-inverse-drill',
        type: 'input-boxes' as const,
        content: `**Find the Inverse** 🧮

Find $A^{-1}$ for $A = \\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$, then enter its entries **left to right, top to bottom**.

Entry $(1,1) = \\,?$ &nbsp;&nbsp; Entry $(1,2) = \\,?$ &nbsp;&nbsp; Entry $(2,1) = \\,?$ &nbsp;&nbsp; Entry $(2,2) = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '-5', '-1', '3'],
          hint1: 'Determinant first: $ad - bc = (3)(2) - (5)(1) = 6 - 5 = 1$.',
          hint2: 'Swap the diagonal ($3$ and $2$ become $2$ and $3$) and negate the off-diagonal ($5 \\to -5$, $1 \\to -1$).',
          hint3: 'Since the determinant is $1$, no division changes anything: $A^{-1} = \\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$.',
          explanation: '$\\det = 6 - 5 = 1$, so $A^{-1} = \\frac{1}{1}\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix} = \\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat5-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 5 of 7 — Determinants**

---

> 🔑 **The Idea:** The **determinant** is a single number that captures a square matrix's "size." It tells you instantly whether a matrix is invertible, and it powers a shortcut for solving systems (Cramer's Rule).`,
      },
      {
        id: 'mat5-2x2',
        type: 'text' as const,
        content: `## Determinant of a $2 \\times 2$ Matrix

For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the determinant is

$$\\det(A) = \\lvert A \\rvert = ad - bc$$

It is the product of the **main diagonal** minus the product of the **anti-diagonal**.

### Examples

$$\\det\\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix} = (3)(4) - (2)(1) = 12 - 2 = 10$$

$$\\det\\begin{bmatrix} 5 & 6 \\\\ -2 & 1 \\end{bmatrix} = (5)(1) - (6)(-2) = 5 + 12 = 17$$

> 🔑 **Invertibility test:** $A$ has an inverse **if and only if** $\\det(A) \\ne 0$.`,
      },
      {
        id: 'mat5-det-drill',
        type: 'input-boxes' as const,
        content: `**Compute Determinants** 🧮

Find each $2\\times2$ determinant.

**1)** $\\det\\begin{bmatrix} 6 & 2 \\\\ 5 & 3 \\end{bmatrix} = \\,?$
**2)** $\\det\\begin{bmatrix} 4 & -1 \\\\ 2 & 3 \\end{bmatrix} = \\,?$
**3)** $\\det\\begin{bmatrix} 3 & 6 \\\\ 1 & 2 \\end{bmatrix} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '14', '0'],
          hint1: 'Use $ad - bc$: main diagonal product minus anti-diagonal product.',
          hint2: '1) $(6)(3) - (2)(5) = 18 - 10 = 8$.',
          hint3: '2) $(4)(3) - (-1)(2) = 12 + 2 = 14$.  3) $(3)(2) - (6)(1) = 6 - 6 = 0$ (singular!).',
          explanation: '1) $18 - 10 = 8$.  2) $12 + 2 = 14$.  3) $6 - 6 = 0$ — a zero determinant means matrix $3$ has no inverse.',
        },
      },
      {
        id: 'mat5-3x3',
        type: 'text' as const,
        content: `## Determinant of a $3 \\times 3$ Matrix (Expansion)

For a $3 \\times 3$ matrix we **expand along the top row**. Each top entry multiplies the determinant of the $2 \\times 2$ matrix left after deleting that entry's row and column, with a **+ − +** sign pattern:

$$\\det\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix} = a\\,(ei - fh) - b\\,(di - fg) + c\\,(dh - eg)$$

### Worked Example

$$\\det\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & 0 & 6 \\end{bmatrix}$$

$$= 1(4\\cdot6 - 5\\cdot0) - 2(0\\cdot6 - 5\\cdot1) + 3(0\\cdot0 - 4\\cdot1)$$

$$= 1(24) - 2(-5) + 3(-4) = 24 + 10 - 12 = 22$$

> 💡 **Watch the middle sign:** the $b$-term is **subtracted**. The pattern is $+\\ -\\ +$.`,
      },
      {
        id: 'mat5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\det\\begin{bmatrix} 7 & 3 \\\\ 2 & 1 \\end{bmatrix} = $',
              options: ['$1$', '$13$', '$-1$', '$7$'],
              correctAnswer: 0,
              explanation: '$ad - bc = (7)(1) - (3)(2) = 7 - 6 = 1$.',
            },
            {
              question: 'A $2\\times2$ matrix has $\\det = 0$. What can you conclude?',
              options: ['It has no inverse', 'It equals the identity', 'It is a row matrix', 'Its entries are all $0$'],
              correctAnswer: 0,
              explanation: 'A square matrix is invertible if and only if its determinant is nonzero. $\\det = 0$ means the matrix is singular — no inverse exists.',
            },
          ],
        },
      },
      {
        id: 'mat5-3x3-drill',
        type: 'input-boxes' as const,
        content: `**Expand a $3\\times3$** 🧮

Compute, expanding along the top row:
$$\\det\\begin{bmatrix} 1 & 2 & 0 \\\\ 3 & -1 & 4 \\\\ 2 & 0 & 1 \\end{bmatrix} = \\,?$$`,
        exercise: {
          boxes: 1,
          correctAnswers: ['9'],
          hint1: 'Use signs $+\\ -\\ +$ across the top row: $1(\\cdots) - 2(\\cdots) + 0(\\cdots)$. The third term vanishes because its top entry is $0$.',
          hint2: 'First minor (delete row $1$, col $1$): $\\det\\begin{bmatrix} -1 & 4 \\\\ 0 & 1 \\end{bmatrix} = (-1)(1) - (4)(0) = -1$. So the first term is $1(-1) = -1$.',
          hint3: 'Second minor (delete row $1$, col $2$): $\\det\\begin{bmatrix} 3 & 4 \\\\ 2 & 1 \\end{bmatrix} = (3)(1) - (4)(2) = -5$. The middle term is $-2(-5) = +10$. Total $= -1 + 10 + 0 = 9$.',
          explanation: 'Top-row expansion with the formula $a(ei-fh) - b(di-fg) + c(dh-eg)$: $1\\big((-1)(1) - (4)(0)\\big) - 2\\big((3)(1) - (4)(2)\\big) + 0 = 1(-1) - 2(-5) + 0 = -1 + 10 = 9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat6-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 6 of 7 — Solving Systems with Matrices**

---

> 🔑 **The Payoff:** A linear system can be packed into a single equation $AX = B$. Multiplying by $A^{-1}$ solves it in one shot: $X = A^{-1}B$.`,
      },
      {
        id: 'mat6-setup',
        type: 'text' as const,
        content: `## Writing a System as $AX = B$

The system
$$\\begin{cases} 2x + 3y = 8 \\\\ x + 2y = 5 \\end{cases}$$
becomes the matrix equation

$$\\underbrace{\\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}}_{A}\\underbrace{\\begin{bmatrix} x \\\\ y \\end{bmatrix}}_{X} = \\underbrace{\\begin{bmatrix} 8 \\\\ 5 \\end{bmatrix}}_{B}$$

- $A$ is the **coefficient matrix** (the numbers in front of $x$ and $y$).
- $X$ is the **variable matrix**.
- $B$ is the **constant matrix** (right-hand sides).

> 💡 Multiplying $A$ by $X$ reproduces the left sides of both equations — that is why this encoding works.`,
      },
      {
        id: 'mat6-solve',
        type: 'text' as const,
        content: `## Solving with the Inverse: $X = A^{-1}B$

Starting from $AX = B$, multiply **both sides on the left** by $A^{-1}$:

$$A^{-1}AX = A^{-1}B \\;\\Rightarrow\\; IX = A^{-1}B \\;\\Rightarrow\\; X = A^{-1}B$$

### Worked Example

For $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$, $\\det(A) = (2)(2)-(3)(1) = 1$, so

$$A^{-1} = \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}$$

Then

$$X = A^{-1}B = \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}\\begin{bmatrix} 8 \\\\ 5 \\end{bmatrix} = \\begin{bmatrix} 16 - 15 \\\\ -8 + 10 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$$

So $x = 1$, $y = 2$.

> ✅ **Check:** $2(1) + 3(2) = 8$ ✓ and $1 + 2(2) = 5$ ✓.`,
      },
      {
        id: 'mat6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through the Solve** 🔽

You are solving $\\begin{cases} x + y = 5 \\\\ 2x + 3y = 13 \\end{cases}$ with $A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 3 \\end{bmatrix}$.`,
        exercise: {
          dropdowns: [
            { label: '$\\det(A)$ is:', options: ['$1$', '$5$', '$-1$', '$0$'] },
            { label: '$A^{-1}$ is:', options: ['$\\begin{bmatrix} 3 & -1 \\\\ -2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 1 \\\\ 2 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} -3 & 1 \\\\ 2 & -1 \\end{bmatrix}$'] },
            { label: 'The solution $(x, y)$ is:', options: ['$(2, 3)$', '$(3, 2)$', '$(5, 0)$', '$(1, 4)$'] },
          ],
          correctAnswers: ['$1$', '$\\begin{bmatrix} 3 & -1 \\\\ -2 & 1 \\end{bmatrix}$', '$(2, 3)$'],
          hint1: '$\\det(A) = (1)(3) - (1)(2) = 1$.',
          hint2: 'Swap the diagonal ($1$ and $3$), negate the off-diagonal ($1 \\to -1$, $2 \\to -2$), divide by $1$: $A^{-1} = \\begin{bmatrix} 3 & -1 \\\\ -2 & 1 \\end{bmatrix}$.',
          hint3: '$X = A^{-1}B = \\begin{bmatrix} 3 & -1 \\\\ -2 & 1 \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 13 \\end{bmatrix} = \\begin{bmatrix} 15-13 \\\\ -10+13 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$.',
          explanation: '$\\det = 1$, $A^{-1} = \\begin{bmatrix} 3 & -1 \\\\ -2 & 1 \\end{bmatrix}$, and $X = A^{-1}B = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$, so $x = 2$, $y = 3$.',
        },
      },
      {
        id: 'mat6-drill',
        type: 'input-boxes' as const,
        content: `**Solve the System** 🧮

Use $X = A^{-1}B$ to solve
$$\\begin{cases} 3x + 2y = 7 \\\\ x + y = 3 \\end{cases}$$

Here $A = \\begin{bmatrix} 3 & 2 \\\\ 1 & 1 \\end{bmatrix}$.

**1)** $x = \\,?$
**2)** $y = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '2'],
          hint1: '$\\det(A) = (3)(1) - (2)(1) = 1$, so $A^{-1} = \\begin{bmatrix} 1 & -2 \\\\ -1 & 3 \\end{bmatrix}$.',
          hint2: '$X = A^{-1}B = \\begin{bmatrix} 1 & -2 \\\\ -1 & 3 \\end{bmatrix}\\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}$.',
          hint3: '$x = 1\\cdot7 + (-2)\\cdot3 = 7 - 6 = 1$ and $y = -1\\cdot7 + 3\\cdot3 = -7 + 9 = 2$.',
          explanation: 'With $A^{-1} = \\begin{bmatrix} 1 & -2 \\\\ -1 & 3 \\end{bmatrix}$, $X = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$. Check: $3(1)+2(2)=7$ ✓, $1+2=3$ ✓.',
        },
      },
      {
        id: 'mat6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Written as $AX = B$, the system $\\begin{cases} 4x - y = 2 \\\\ 3x + 2y = 9 \\end{cases}$ has coefficient matrix $A = $',
              options: ['$\\begin{bmatrix} 4 & -1 \\\\ 3 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 3 \\\\ -1 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 \\\\ 9 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 1 \\\\ 3 & 2 \\end{bmatrix}$'],
              correctAnswer: 0,
              explanation: 'The coefficient matrix holds the numbers in front of $x$ and $y$, row by row: row $1$ is $(4, -1)$ and row $2$ is $(3, 2)$, giving $\\begin{bmatrix} 4 & -1 \\\\ 3 & 2 \\end{bmatrix}$.',
            },
            {
              question: 'Why does multiplying $AX = B$ by $A^{-1}$ on the left isolate $X$?',
              options: ['Because $A^{-1}A = I$ and $IX = X$', 'Because $A^{-1}A = A$', 'Because matrices are commutative', 'Because $A^{-1}B = B$'],
              correctAnswer: 0,
              explanation: '$A^{-1}A = I$, the identity, and $IX = X$. So $A^{-1}AX = A^{-1}B$ collapses to $X = A^{-1}B$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'matrix-operations',
    sections: [
      {
        id: 'mat7-intro',
        type: 'text' as const,
        content: `# 🔢 Matrix Operations and Applications

**Part 7 of 7 — Applications, Mixed Practice & Exit Quiz**

---

You can now describe matrices, add and scale them, multiply them, invert them, take determinants, and solve systems. This final part shows two real **applications** — transformations and networks — then a mastery check.`,
      },
      {
        id: 'mat7-transformations',
        type: 'text' as const,
        content: `## Application 1: Transformations of Points

Multiplying a point $\\begin{bmatrix} x \\\\ y \\end{bmatrix}$ by a $2\\times2$ matrix moves it in the plane. A few famous transformation matrices:

| Transformation | Matrix |
|----------------|--------|
| Scale by $k$ | $\\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$ |
| Reflect over $x$-axis | $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ |
| Rotate $90°$ counterclockwise | $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ |

### Example: rotate $(3, 1)$ by $90°$ CCW

$$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0\\cdot3 + (-1)\\cdot1 \\\\ 1\\cdot3 + 0\\cdot1 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$$

So $(3, 1) \\to (-1, 3)$.`,
      },
      {
        id: 'mat7-networks',
        type: 'text' as const,
        content: `## Application 2: Inventory and Networks

Matrices organize real data and let you combine it with multiplication.

**Cost example.** A store stocks two products with a price vector and a quantity vector. Suppose Store A sold $\\begin{bmatrix} 4 & 6 \\end{bmatrix}$ units (product 1, product 2) at prices $\\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$ dollars:

$$\\begin{bmatrix} 4 & 6 \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix} = 4\\cdot5 + 6\\cdot3 = 20 + 18 = 38$$

Total revenue $= 38$, i.e. \\$38. A single $(1\\times2)(2\\times1)$ product summed everything at once.

> 💡 The same idea scales up: an $m \\times n$ "sales" matrix times an $n \\times 1$ "price" vector gives total revenue **per store** in one multiplication.`,
      },
      {
        id: 'mat7-app-mc',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Reflecting the point $(2, 5)$ over the $x$-axis using $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ gives:',
              options: ['$(2, -5)$', '$(-2, 5)$', '$(-2, -5)$', '$(5, 2)$'],
              correctAnswer: 0,
              explanation: '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}\\begin{bmatrix} 2 \\\\ 5 \\end{bmatrix} = \\begin{bmatrix} 1\\cdot2 + 0\\cdot5 \\\\ 0\\cdot2 + (-1)\\cdot5 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ -5 \\end{bmatrix}$. The $x$-axis reflection flips the sign of $y$.',
            },
            {
              question: 'A shop sold $\\begin{bmatrix} 3 & 2 \\end{bmatrix}$ units at prices $\\begin{bmatrix} 6 \\\\ 4 \\end{bmatrix}$ dollars. Total revenue is:',
              options: ['$\\$26$', '$\\$18$', '$\\$30$', '$\\$10$'],
              correctAnswer: 0,
              explanation: '$\\begin{bmatrix} 3 & 2 \\end{bmatrix}\\begin{bmatrix} 6 \\\\ 4 \\end{bmatrix} = 3\\cdot6 + 2\\cdot4 = 18 + 8 = 26$, so revenue $= \\$26$.',
            },
          ],
        },
      },
      {
        id: 'mat7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Mastery** 🧮

**1)** $\\det\\begin{bmatrix} 5 & 2 \\\\ 4 & 3 \\end{bmatrix} = \\,?$
**2)** Rotating $(0, 2)$ by $90°$ CCW with $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ gives the point $(\\,?,\\ \\,?)$. Enter the $x$-coordinate, then the $y$-coordinate.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '-2', '0'],
          hint1: '1) $\\det = ad - bc = (5)(3) - (2)(4) = 15 - 8 = 7$.',
          hint2: '2) Multiply: $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix}$. The new $x = 0\\cdot0 + (-1)\\cdot2$.',
          hint3: 'New $x = -2$, new $y = 1\\cdot0 + 0\\cdot2 = 0$, so the image point is $(-2, 0)$.',
          explanation: '1) $15 - 8 = 7$.  2) $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} -2 \\\\ 0 \\end{bmatrix}$, so $(0,2) \\to (-2, 0)$.',
        },
      },
      {
        id: 'mat7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the product $\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$?',
              options: ['$\\begin{bmatrix} 3 \\\\ 10 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix}$'],
              correctAnswer: 0,
              explanation: 'Row $1$: $1\\cdot3 + 0\\cdot4 = 3$. Row $2$: $2\\cdot3 + 1\\cdot4 = 10$. Product $= \\begin{bmatrix} 3 \\\\ 10 \\end{bmatrix}$.',
            },
            {
              question: 'The inverse of $\\begin{bmatrix} 1 & 2 \\\\ 1 & 3 \\end{bmatrix}$ is:',
              options: ['$\\begin{bmatrix} 3 & -2 \\\\ -1 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 1 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 2 \\\\ 1 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} -3 & 2 \\\\ 1 & -1 \\end{bmatrix}$'],
              correctAnswer: 0,
              explanation: '$\\det = (1)(3) - (2)(1) = 1$. Swap diagonal, negate off-diagonal: $\\begin{bmatrix} 3 & -2 \\\\ -1 & 1 \\end{bmatrix}$, divided by $1$.',
            },
            {
              question: 'Which condition guarantees a square matrix $A$ has an inverse?',
              options: ['$\\det(A) \\ne 0$', '$\\det(A) = 0$', '$A$ has a row of zeros', '$A$ is not square'],
              correctAnswer: 0,
              explanation: 'A square matrix is invertible exactly when its determinant is nonzero. $\\det(A) = 0$ makes the inverse formula divide by zero, so no inverse exists.',
            },
          ],
        },
      },
    ],
  },
]
