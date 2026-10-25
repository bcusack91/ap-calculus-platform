export const asvabMkAlgebraEquationsPart3Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle3-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 3 of 7 — Turning Words into Equations**

### Translate, Then Solve

Many MK questions are sentences: "Five less than three times a number is 19. What is the number?" The math is easy once the sentence becomes an equation. The skill is the **translation**.

Let a letter (often $n$ or $x$) stand for the number you're looking for, then translate phrase by phrase:

| Words | Math |
|:---|:---|
| sum, more than, increased by, plus | $+$ |
| difference, less than, decreased by, minus | $-$ |
| product, times, of, twice (= $2 \\times$), triple | $\\times$ |
| quotient, divided by, per, half of (= $\\div 2$) | $\\div$ |
| is, equals, gives, results in | $=$ |

### The "less than" switch

"$5$ less than a number" means you start with the number and take $5$ away: $n - 5$, **not** $5 - n$. The same goes for "$5$ more than a number": $n + 5$ (order doesn't matter for addition, but it does for subtraction).

"$5$ less than a number" → $n - 5$
"A number less than $5$" → $5 - n$

### Consecutive integers

| Phrase | Write them as |
|:---|:---|
| consecutive integers | $n$, $n + 1$, $n + 2$, … |
| consecutive even integers | $n$, $n + 2$, $n + 4$, … |
| consecutive odd integers | $n$, $n + 2$, $n + 4$, … |

Even and odd both step by $2$. Whether they come out even or odd depends on the starting number $n$.`
    },
    {
      id: 'mkle3-examples',
      type: 'text' as const,
      content: `## Worked Examples

### A number sentence

"Five less than three times a number is $19$."

- three times a number: $3n$
- five less than that: $3n - 5$
- is $19$: $3n - 5 = 19$

Solve: $3n = 24$, so $n = 8$. Check: $3(8) - 5 = 19$ ✓

### Consecutive integers

"The sum of three consecutive integers is $72$. What are they?"

$$n + (n + 1) + (n + 2) = 72 \\quad\\Rightarrow\\quad 3n + 3 = 72 \\quad\\Rightarrow\\quad 3n = 69 \\quad\\Rightarrow\\quad n = 23$$

The integers are $23$, $24$ and $25$. Read the question again: if it asks for the **largest**, the answer is $25$, not $23$.

### Two people, one total

"Maria is $4$ years older than twice her brother's age. Together their ages add to $31$. How old is her brother?"

Let $b$ = the brother's age. Then Maria is $2b + 4$.

$$b + (2b + 4) = 31 \\quad\\Rightarrow\\quad 3b + 4 = 31 \\quad\\Rightarrow\\quad 3b = 27 \\quad\\Rightarrow\\quad b = 9$$

Her brother is $9$ and Maria is $22$. Check: $9 + 22 = 31$ ✓

### A fee plus a rate

"A storage unit costs a 40-dollar move-in fee plus 55 dollars a month. Dev has paid 425 dollars in total. How many months has he rented it?"

$$40 + 55m = 425 \\quad\\Rightarrow\\quad 55m = 385 \\quad\\Rightarrow\\quad m = 7$$

The one-time fee is added once; the monthly charge is multiplied by the number of months.`
    },
    {
      id: 'mkle3-mc',
      type: 'multiple-choice' as const,
      content: '**Translate the sentence.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which equation means "Seven more than half a number is $15$"?',
            options: ['$\\frac{n + 7}{2} = 15$', '$\\frac{n}{2} + 7 = 15$', '$2n + 7 = 15$', '$7 - \\frac{n}{2} = 15$'],
            correctAnswer: 1,
            explanation: 'Half a number is $\\frac{n}{2}$; seven more than that adds $7$: $\\frac{n}{2} + 7 = 15$. Halving $n + 7$ would mean "half of seven more than a number," and $2n$ is twice the number, not half.'
          },
          {
            question: 'Which expression means "four less than five times a number"?',
            options: ['$4 - 5n$', '$5(n - 4)$', '$4n - 5$', '$5n - 4$'],
            correctAnswer: 3,
            explanation: 'Start with five times the number, $5n$, then take away $4$: $5n - 4$. Writing $4 - 5n$ is the "less than" switch done backward.'
          },
          {
            question: 'The sum of two consecutive even integers is $86$. What is the larger integer?',
            options: ['$42$', '$43$', '$44$', '$46$'],
            correctAnswer: 2,
            explanation: '$n + (n + 2) = 86$, so $2n = 84$ and $n = 42$. The larger one is $44$. The value $42$ is the smaller integer, and $43$ is their average, which is odd.'
          },
          {
            question: 'A gym charges a 30-dollar sign-up fee plus 20 dollars per month. Kayla has paid 190 dollars in total. For how many months has she been a member?',
            options: ['$8$', '$9.5$', '$11$', '$6$'],
            correctAnswer: 0,
            explanation: '$30 + 20m = 190$, so $20m = 160$ and $m = 8$. Dividing $190$ by $20$ without removing the fee gives $9.5$; adding the fee instead of subtracting gives $220 \\div 20 = 11$.'
          }
        ]
      }
    },
    {
      id: 'mkle3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Phrase to math.** 🔽 Choose the expression that matches each phrase.',
      exercise: {
        dropdowns: [
          {
            label: 'The quotient of a number and $6$:',
            options: ['$\\frac{6}{n}$', '$6n$', '$\\frac{n}{6}$', '$n - 6$'],
            correctAnswer: 2
          },
          {
            label: '$8$ less than a number:',
            options: ['$n - 8$', '$8 - n$', '$8n$', '$\\frac{n}{8}$'],
            correctAnswer: 0
          },
          {
            label: 'Twice the sum of a number and $5$:',
            options: ['$2n + 5$', '$2(n + 5)$', '$n + 10$', '$2 + n + 5$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$\\frac{n}{6}$', '$n - 8$', '$2(n + 5)$'],
        hint1: 'A quotient is the result of dividing, in the order named.',
        hint2: 'Start with the number, then take $8$ away.',
        hint3: '"The sum" is one group, so it goes in parentheses before you double it.',
        explanation: 'The quotient of a number and $6$ is $\\frac{n}{6}$. Eight less than a number is $n - 8$. "Twice the sum" doubles the whole sum: $2(n + 5)$, which is different from $2n + 5$.'
      }
    },
    {
      id: 'mkle3-input',
      type: 'input-boxes' as const,
      content: `**Write it, solve it.** ✍️

**1)** Three times a number, decreased by $8$, is $22$. What is the number?

**2)** The sum of three consecutive integers is $57$. What is the smallest of the three?

**3)** Jordan is $3$ times as old as his niece. Their ages add up to $48$. How old is the niece?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '18', '12'],
        hint1: '$3n - 8 = 22$.',
        hint2: '$n + (n + 1) + (n + 2) = 57$.',
        hint3: 'If the niece is $a$, Jordan is $3a$.',
        explanation: '(1) $3n - 8 = 22$, so $3n = 30$ and $n = 10$. (2) $3n + 3 = 57$, so $3n = 54$ and $n = 18$ (the integers are $18, 19, 20$). (3) $a + 3a = 48$, so $4a = 48$ and $a = 12$.'
      }
    },
    {
      id: 'mkle3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Name the unknown with a letter, then translate **phrase by phrase**
- "is" means $=$; "of" and "times" mean multiply
- "$5$ less than a number" is $n - 5$: the order **switches**
- Consecutive integers: $n, n + 1, n + 2$; consecutive even or odd: $n, n + 2, n + 4$
- A one-time fee is added once; a per-month or per-item charge multiplies
- Re-read what the question asks for (smallest, largest, the other person's age) before choosing

> **Up Next:** Part 4 — inequalities, and the one rule that makes them different from equations.`
    }
  ]
};
