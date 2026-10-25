export const asvabMkNumberPropertiesPart1Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp1-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 1 of 7 — Number Properties on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Number properties on the ASVAB** |
| 2 | Primes, factors and multiples |
| 3 | Order of operations, integers and absolute value |
| 4 | Exponents and scientific notation |
| 5 | Square roots and radicals |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What This Looks Like on the ASVAB

**Mathematics Knowledge (MK)** is the fifth subtest on the computer version (CAT-ASVAB). You get **15 scored questions in 31 minutes**, which works out to about **2 minutes per question**. Every question has **four answer choices**, and there is **no calculator**. At MEPS you get two sheets of scratch paper and two pencils, and you can ask for more.

MK is one of the four subtests that build your **AFQT** score (AR + MK + 2·VE), the score the military uses to check whether you are eligible to enlist. It also feeds several job line scores, such as the Air Force A and E composites.

The official description of MK starts with **"number theory"** and **"numeration."** That is this topic: what kinds of numbers there are, how they behave, factors and primes, signs, exponents and roots. These questions are usually short. The challenge is knowing the rules cold so you can answer quickly and save time for the longer algebra and geometry questions.

> **Key Fact:** The CAT is adaptive. A right answer usually brings a harder question next, and you can't go back to a question once you answer it. Fast, sure answers on number questions build momentum.`
    },
    {
      id: 'mknp1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 No calculator. See what you already know; the rest of the lesson fills the gaps.',
      exercise: {
        questions: [
          {
            question: 'Which of these numbers is a prime number?',
            options: ['$21$', '$27$', '$29$', '$33$'],
            correctAnswer: 2,
            explanation: '$29$ has no factors other than $1$ and itself. The others all divide evenly by $3$: $21 = 3 \\cdot 7$, $27 = 3 \\cdot 9$, $33 = 3 \\cdot 11$.'
          },
          {
            question: 'What is the value of $5 + 3 \\cdot 4$?',
            options: ['$32$', '$17$', '$27$', '$60$'],
            correctAnswer: 1,
            explanation: 'Multiply before you add: $3 \\cdot 4 = 12$, then $5 + 12 = 17$. Working left to right ($5 + 3 = 8$, then $8 \\cdot 4$) gives $32$, the classic order-of-operations trap.'
          },
          {
            question: 'What is $\\sqrt{81}$?',
            options: ['$40.5$', '$18$', '$27$', '$9$'],
            correctAnswer: 3,
            explanation: '$9 \\cdot 9 = 81$, so $\\sqrt{81} = 9$. Halving $81$ gives $40.5$, which is not a square root.'
          }
        ]
      }
    },
    {
      id: 'mknp1-types',
      type: 'text' as const,
      content: `## The Kinds of Numbers

The ASVAB uses these names without explaining them, so learn them now.

| Name | What it includes | Examples |
|:---|:---|:---|
| **Whole numbers** | $0$ and the counting numbers | $0, 1, 2, 3, \\dots$ |
| **Integers** | whole numbers and their negatives | $\\dots, -2, -1, 0, 1, 2, \\dots$ |
| **Rational numbers** | any number you can write as a fraction of integers | $\\frac{3}{4}$, $-5$, $0.25$, $0.\\overline{3}$ |
| **Irrational numbers** | numbers that can't be written as a fraction; their decimals never end or repeat | $\\pi$, $\\sqrt{2}$, $\\sqrt{7}$ |

Every integer is rational ($-5 = \\frac{-5}{1}$). A decimal that **ends** ($0.25$) or **repeats** ($0.333\\dots$) is rational. The square root of a number that is not a perfect square, such as $\\sqrt{2}$, is irrational.

### Even and Odd

An **even** number divides evenly by $2$; an **odd** number does not. Zero is even. Negative numbers can be even or odd too ($-4$ is even, $-7$ is odd).

| Operation | Result |
|:---|:---|
| even $\\pm$ even | even |
| odd $\\pm$ odd | even |
| even $\\pm$ odd | odd |
| even $\\times$ anything | even |
| odd $\\times$ odd | odd |

You don't have to memorize the table: test it with small numbers. Odd + odd? $3 + 5 = 8$, even.`
    },
    {
      id: 'mknp1-properties',
      type: 'text' as const,
      content: `## The Properties That Make Mental Math Easy

| Property | Rule | Example |
|:---|:---|:---|
| **Commutative** | order doesn't matter for $+$ and $\\times$ | $7 + 4 = 4 + 7$; $3 \\cdot 8 = 8 \\cdot 3$ |
| **Associative** | grouping doesn't matter for $+$ and $\\times$ | $(2 + 9) + 1 = 2 + (9 + 1)$ |
| **Distributive** | multiply each term inside the parentheses | $6(10 + 3) = 60 + 18$ |
| **Identity** | adding $0$ or multiplying by $1$ changes nothing | $15 + 0 = 15$; $15 \\cdot 1 = 15$ |
| **Inverse** | a number plus its opposite is $0$; times its reciprocal is $1$ | $8 + (-8) = 0$; $8 \\cdot \\frac{1}{8} = 1$ |
| **Zero product** | anything times $0$ is $0$ | $0 \\cdot 4{,}917 = 0$ |

Subtraction and division are **not** commutative: $10 - 4 \\ne 4 - 10$ and $12 \\div 3 \\ne 3 \\div 12$.

### Worked Example: the distributive property as a shortcut

Find $7 \\cdot 98$ without a calculator.

$$7 \\cdot 98 = 7(100 - 2) = 700 - 14 = 686$$

### Worked Example: grouping to make tens

Find $25 \\cdot 13 \\cdot 4$.

Regroup: $(25 \\cdot 4) \\cdot 13 = 100 \\cdot 13 = 1{,}300$. The commutative and associative properties let you multiply in whatever order is easiest.

### Reciprocals

The **reciprocal** of a number is $1$ divided by it: flip the fraction. The reciprocal of $\\frac{2}{5}$ is $\\frac{5}{2}$; the reciprocal of $6$ is $\\frac{1}{6}$. A number times its reciprocal is always $1$. Zero has no reciprocal.`
    },
    {
      id: 'mknp1-mc',
      type: 'multiple-choice' as const,
      content: '**Name the number, name the property.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which number is irrational?',
            options: ['$\\sqrt{49}$', '$\\sqrt{15}$', '$0.75$', '$-\\frac{9}{4}$'],
            correctAnswer: 1,
            explanation: '$15$ is not a perfect square, so $\\sqrt{15}$ is a non-ending, non-repeating decimal. $\\sqrt{49} = 7$, $0.75 = \\frac{3}{4}$ and $-\\frac{9}{4}$ are all fractions of integers, so they are rational.'
          },
          {
            question: 'Which equation shows the distributive property?',
            options: ['$4(x + 5) = 4x + 20$', '$4 + x = x + 4$', '$(4x)5 = 4(5x)$', '$4x \\cdot 1 = 4x$'],
            correctAnswer: 0,
            explanation: 'The distributive property multiplies the outside number by each term inside: $4 \\cdot x + 4 \\cdot 5$. Switching order is commutative, regrouping a product is associative, and multiplying by $1$ is the identity property.'
          },
          {
            question: 'If $a$ is an odd integer and $b$ is an even integer, which expression must be odd?',
            options: ['$a + a$', '$a \\cdot b$', '$a + b$', '$b + b$'],
            correctAnswer: 2,
            explanation: 'Try $a = 3$ and $b = 4$: $3 + 4 = 7$ is odd. $a + a = 6$, $a \\cdot b = 12$ and $b + b = 8$ are all even. Odd plus even is always odd.'
          }
        ]
      }
    },
    {
      id: 'mknp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Number vocabulary.** 🔽 For each line, choose the most specific true description or the correct value.',
      exercise: {
        dropdowns: [
          {
            label: '$-12$ is:',
            options: ['an integer that is not a whole number', 'a whole number', 'an irrational number', 'not a rational number'],
            correctAnswer: 0
          },
          {
            label: '$0$ is:',
            options: ['an odd number', 'an even number', 'neither even nor odd', 'an irrational number'],
            correctAnswer: 1
          },
          {
            label: 'The reciprocal of $\\frac{3}{8}$ is:',
            options: ['$-\\frac{3}{8}$', '$\\frac{8}{3}$', '$\\frac{3}{8}$', '$-\\frac{8}{3}$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['an integer that is not a whole number', 'an even number', '$\\frac{8}{3}$'],
        hint1: 'Whole numbers start at $0$ and never go negative.',
        hint2: 'Does $0$ divide evenly by $2$?',
        hint3: 'A reciprocal flips the fraction; it does not change the sign.',
        explanation: '$-12$ is an integer, but whole numbers are never negative. Zero divides evenly by $2$ ($0 \\div 2 = 0$), so it is even. The reciprocal of $\\frac{3}{8}$ is $\\frac{8}{3}$, because $\\frac{3}{8} \\cdot \\frac{8}{3} = 1$; $-\\frac{3}{8}$ is the opposite, not the reciprocal.'
      }
    },
    {
      id: 'mknp1-input',
      type: 'input-boxes' as const,
      content: `**Mental math with the properties.** ✍️ No calculator.

**1)** $9 \\cdot 102$ (use $9(100 + 2)$):

**2)** $50 \\cdot 17 \\cdot 2$ (regroup first):

**3)** $\\frac{5}{6}$ times its reciprocal:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['918', '1700', '1'],
        hint1: '$9 \\cdot 100 = 900$ and $9 \\cdot 2 = 18$.',
        hint2: '$50 \\cdot 2 = 100$ first.',
        hint3: 'Any nonzero number times its reciprocal gives the same result.',
        explanation: '(1) $9(100 + 2) = 900 + 18 = 918$. (2) $(50 \\cdot 2) \\cdot 17 = 100 \\cdot 17 = 1{,}700$. (3) $\\frac{5}{6} \\cdot \\frac{6}{5} = 1$, the inverse property.'
      }
    },
    {
      id: 'mknp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- MK on the CAT-ASVAB: **15 questions, 31 minutes**, about **2 minutes each**, four choices, **no calculator**
- **Whole numbers** start at $0$; **integers** add the negatives; **rational** numbers are fractions of integers; **irrational** numbers ($\\pi$, $\\sqrt{2}$) are not
- Zero is **even**; odd + odd is even; odd × odd is odd; even × anything is even
- **Distributive**: $a(b + c) = ab + ac$, a powerful mental-math shortcut
- A number times its **reciprocal** is $1$

> **Up Next:** Part 2 — primes, factors, multiples, the GCF and the LCM.`
    }
  ]
};
