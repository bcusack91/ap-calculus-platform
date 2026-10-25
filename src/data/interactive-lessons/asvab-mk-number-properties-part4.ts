export const asvabMkNumberPropertiesPart4Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp4-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 4 of 7 — Exponents and Scientific Notation**

### What an Exponent Means

An exponent says how many times to multiply the base by itself:

$$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$$

It is **not** base times exponent: $3^4 \\ne 12$.

### Powers Worth Knowing by Heart

| $n$ | $2^n$ | $3^n$ | $5^n$ | $10^n$ |
|:---:|:---:|:---:|:---:|:---:|
| $1$ | $2$ | $3$ | $5$ | $10$ |
| $2$ | $4$ | $9$ | $25$ | $100$ |
| $3$ | $8$ | $27$ | $125$ | $1{,}000$ |
| $4$ | $16$ | $81$ | $625$ | $10{,}000$ |
| $5$ | $32$ | $243$ | | $100{,}000$ |
| $6$ | $64$ | | | |

### The Exponent Rules (same base)

| Rule | In symbols | Example |
|:---|:---|:---|
| Multiply → **add** exponents | $a^m \\cdot a^n = a^{m+n}$ | $2^3 \\cdot 2^4 = 2^7 = 128$ |
| Divide → **subtract** exponents | $\\frac{a^m}{a^n} = a^{m-n}$ | $\\frac{5^6}{5^4} = 5^2 = 25$ |
| Power of a power → **multiply** | $(a^m)^n = a^{mn}$ | $(3^2)^3 = 3^6 = 729$ |
| Zero exponent | $a^0 = 1$ (for $a \\ne 0$) | $47^0 = 1$ |
| Negative exponent → **reciprocal** | $a^{-n} = \\frac{1}{a^n}$ | $2^{-3} = \\frac{1}{8}$ |
| Power of a product | $(ab)^n = a^n b^n$ | $(2 \\cdot 5)^3 = 8 \\cdot 125 = 1{,}000$ |

The rules only work when the **bases match**. $2^3 \\cdot 3^2$ is just $8 \\cdot 9 = 72$; you can't add the exponents.

### Negative Bases

Parentheses matter:

$$(-3)^2 = (-3)(-3) = 9 \\qquad -3^2 = -(3 \\cdot 3) = -9$$

Without parentheses the exponent applies only to the $3$. A negative base to an **even** power is positive; to an **odd** power it is negative: $(-2)^5 = -32$.

> **Key Fact:** A negative exponent does **not** make the number negative. $4^{-2} = \\frac{1}{16}$, a small positive number.`
    },
    {
      id: 'mknp4-mc-rules',
      type: 'multiple-choice' as const,
      content: '**Exponent rules.** 🎯 No calculator.',
      exercise: {
        questions: [
          {
            question: 'Which expression equals $7^5 \\cdot 7^3$?',
            options: ['$7^{15}$', '$49^8$', '$7^8$', '$7^2$'],
            correctAnswer: 2,
            explanation: 'Same base, multiplying: add the exponents, $5 + 3 = 8$. Multiplying the exponents gives $7^{15}$, and the base stays $7$, not $49$.'
          },
          {
            question: 'What is the value of $-2^4$?',
            options: ['$-16$', '$16$', '$-8$', '$8$'],
            correctAnswer: 0,
            explanation: 'With no parentheses, only the $2$ is raised to the fourth power: $-(2^4) = -16$. The value $16$ would be $(-2)^4$.'
          },
          {
            question: 'What is the value of $5^{-2}$?',
            options: ['$-25$', '$-10$', '$\\frac{1}{10}$', '$\\frac{1}{25}$'],
            correctAnswer: 3,
            explanation: 'A negative exponent means reciprocal: $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. It does not make the number negative, and the exponent is not multiplied by the base.'
          },
          {
            question: 'Simplify $\\dfrac{(2^3)^2}{2^4}$.',
            options: ['$2$', '$4$', '$16$', '$\\frac{1}{2}$'],
            correctAnswer: 1,
            explanation: '$(2^3)^2 = 2^6$, and $\\frac{2^6}{2^4} = 2^2 = 4$. Adding $3 + 2$ instead of multiplying gives $2^5 \\div 2^4 = 2$.'
          }
        ]
      }
    },
    {
      id: 'mknp4-scinot',
      type: 'text' as const,
      content: `## Scientific Notation

Scientific notation writes a number as

$$(\\text{a number from } 1 \\text{ up to but not including } 10) \\times 10^{n}$$

### Big numbers: positive exponent

$$4{,}700{,}000 = 4.7 \\times 10^6$$

Count how many places the decimal point moves to get $4.7$: six places to the left, so $10^6$.

### Small numbers: negative exponent

$$0.00032 = 3.2 \\times 10^{-4}$$

The point moves four places to the **right** to get $3.2$, so the exponent is $-4$.

### Converting back

- $6.05 \\times 10^3$: move the point $3$ places right → $6{,}050$
- $9 \\times 10^{-2}$: move the point $2$ places left → $0.09$

### Multiplying and dividing

Handle the front numbers and the powers of ten separately.

$$(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9$$

$$\\frac{8 \\times 10^7}{4 \\times 10^2} = 2 \\times 10^5$$

If the front number ends up $10$ or more, adjust:

$$(5 \\times 10^3)(4 \\times 10^2) = 20 \\times 10^5 = 2 \\times 10^6$$

> **Key Fact:** $0.5 \\times 10^4$ and $25 \\times 10^3$ are not in scientific notation. The front number must be at least $1$ and less than $10$.`
    },
    {
      id: 'mknp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Scientific notation.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: '$52{,}000$ in scientific notation:',
            options: ['$52 \\times 10^3$', '$5.2 \\times 10^4$', '$5.2 \\times 10^3$', '$0.52 \\times 10^5$'],
            correctAnswer: 1
          },
          {
            label: '$0.0071$ in scientific notation:',
            options: ['$7.1 \\times 10^{-3}$', '$7.1 \\times 10^{3}$', '$71 \\times 10^{-4}$', '$7.1 \\times 10^{-2}$'],
            correctAnswer: 0
          },
          {
            label: '$(6 \\times 10^5)(3 \\times 10^{-2})$ equals:',
            options: ['$1.8 \\times 10^3$', '$18 \\times 10^{-10}$', '$1.8 \\times 10^4$', '$9 \\times 10^3$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$5.2 \\times 10^4$', '$7.1 \\times 10^{-3}$', '$1.8 \\times 10^4$'],
        hint1: 'Move the decimal point until exactly one nonzero digit is in front of it.',
        hint2: 'Small numbers get a negative exponent.',
        hint3: '$6 \\cdot 3 = 18$ and $10^5 \\cdot 10^{-2} = 10^3$; then fix $18$.',
        explanation: '$52{,}000$: the point moves $4$ places left, so $5.2 \\times 10^4$. $0.0071$: the point moves $3$ places right, so $7.1 \\times 10^{-3}$. Product: $18 \\times 10^3 = 1.8 \\times 10^4$. Multiplying the exponents ($5 \\cdot -2$) gives the wrong power of ten.'
      }
    },
    {
      id: 'mknp4-input',
      type: 'input-boxes' as const,
      content: `**Compute.** ✍️ Fractions are fine (type $1/8$ as 1/8).

**1)** $3^2 \\cdot 3^1$:

**2)** $10^{-3}$ as a decimal:

**3)** $(-1)^{7} + 6^0$:

**4)** $\\dfrac{9 \\times 10^8}{3 \\times 10^5} = 3 \\times 10^{n}$. What is $n$?`,
      exercise: {
        boxes: 4,
        correctAnswers: ['27', '0.001', '0', '3'],
        hint1: 'Add the exponents: $3^3$.',
        hint2: '$10^{-3} = \\frac{1}{1{,}000}$.',
        hint3: 'An odd power of $-1$ is $-1$; anything (nonzero) to the $0$ power is $1$.',
        explanation: '(1) $3^{2+1} = 3^3 = 27$. (2) $\\frac{1}{1{,}000} = 0.001$. (3) $-1 + 1 = 0$. (4) $9 \\div 3 = 3$ and $10^{8-5} = 10^3$, so $n = 3$.'
      }
    },
    {
      id: 'mknp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- $a^n$ means multiply $a$ by itself $n$ times: $2^5 = 32$, not $10$
- Same base: multiply → **add** exponents; divide → **subtract**; power of a power → **multiply**
- $a^0 = 1$; $a^{-n} = \\frac{1}{a^n}$ (still positive)
- $(-3)^2 = 9$ but $-3^2 = -9$
- Scientific notation: front number from $1$ to under $10$; big numbers → positive exponent, small → negative

> **Up Next:** Part 5 — square roots, cube roots and simplifying radicals.`
    }
  ]
};
