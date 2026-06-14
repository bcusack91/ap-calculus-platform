import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'equivalent-fractions-grade4',
    sections: [
      {
        id: 'ef-p1-intro',
        type: 'text' as const,
        content: `# 🍕 Equivalent Fractions

## What Are Equivalent Fractions?

**Equivalent fractions** are fractions that *look different* but have the **same value**. They name the same amount of a whole, just cut into a different number of pieces.

Imagine a pizza:

- Cut it into **2** big slices and take **1** slice → you ate $\\frac{1}{2}$.
- Cut the same pizza into **4** slices and take **2** slices → you ate $\\frac{2}{4}$.

You ate **exactly the same amount** of pizza! So:

$\\frac{1}{2} = \\frac{2}{4}$

In fact, all of these name one-half:

$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$

The **top number** is the **numerator** (how many pieces you have). The **bottom number** is the **denominator** (how many equal pieces the whole is cut into).`
      },
      {
        id: 'ef-p1-make',
        type: 'text' as const,
        content: `## ✖️ How to Make an Equivalent Fraction

The big secret: **multiply the numerator AND the denominator by the same number.**

Whatever you do to the top, you must do to the bottom. That keeps the value the same.

**Worked example:** Start with $\\frac{2}{3}$ and multiply top and bottom by $2$.

$\\frac{2}{3} = \\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$

So $\\frac{2}{3} = \\frac{4}{6}$. They are equivalent!

You can multiply by any number. Multiply $\\frac{2}{3}$ by $5$:

$\\frac{2}{3} = \\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}$

Here is a table of fractions all equal to $\\frac{2}{3}$:

| Multiply by | Numerator | Denominator | Fraction |
|---|---|---|---|
| 1 | 2 | 3 | $\\frac{2}{3}$ |
| 2 | 4 | 6 | $\\frac{4}{6}$ |
| 3 | 6 | 9 | $\\frac{6}{9}$ |
| 5 | 10 | 15 | $\\frac{10}{15}$ |

> 🔑 **Key Idea:** Multiplying top and bottom by the same number does NOT change how big the fraction is — only how many pieces you slice it into.`
      },
      {
        id: 'ef-p1-quiz',
        type: 'multiple-choice' as const,
        content: `## ✅ Concept Check`,
        exercise: {
          questions: [
            {
              question: 'Which fraction is equivalent to $\\frac{1}{2}$?',
              options: ['$\\frac{2}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$'],
              correctAnswer: 0,
              explanation: 'Multiply the top and bottom of $\\frac{1}{2}$ by 2: $\\frac{1 \\times 2}{2 \\times 2} = \\frac{2}{4}$. So $\\frac{2}{4}$ has the same value as $\\frac{1}{2}$.'
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 2 — Worked Examples
  // ===================================================================
  {
    topicSlug: 'equivalent-fractions-grade4',
    sections: [
      {
        id: 'ef-p2-worked',
        type: 'text' as const,
        content: `## 📝 Worked Examples: Building Equivalent Fractions

Let's go step by step.

### Example 1 — Make $\\frac{3}{4}$ into eighths

We want a denominator of $8$. Ask: **what times $4$ equals $8$?** The answer is $2$.

So multiply BOTH numbers by $2$:

$\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$

**Answer:** $\\frac{3}{4} = \\frac{6}{8}$ ✅

### Example 2 — Fill in the missing number

$\\frac{1}{5} = \\frac{?}{20}$

**Step 1:** What times $5$ equals $20$? That is $4$.

**Step 2:** Do the same to the top: $1 \\times 4 = 4$.

$\\frac{1}{5} = \\frac{1 \\times 4}{5 \\times 4} = \\frac{4}{20}$

**Answer:** the missing number is $4$.

> 💡 **Trick:** Look at the denominators first. Find the number you multiply by, then use the *same* number on the numerator.`
      },
      {
        id: 'ef-p2-input',
        type: 'input-boxes' as const,
        content: `## ✍️ Your Turn — Fill in the Missing Numbers

Find the missing numerator for each equivalent fraction. Type just the number.

1) $\\frac{1}{2} = \\frac{?}{6}$

2) $\\frac{2}{3} = \\frac{?}{12}$

3) $\\frac{3}{5} = \\frac{?}{10}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '8', '6'],
          hint1: 'For each one, ask: what number do I multiply the bottom by to get the new denominator?',
          hint2: 'Box 1: $2 \\times 3 = 6$, so multiply the top by 3 too. Box 2: $3 \\times 4 = 12$. Box 3: $5 \\times 2 = 10$.',
          explanation: '1) $\\frac{1}{2} = \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}$. 2) $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$. 3) $\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'equivalent-fractions-grade4',
    sections: [
      {
        id: 'ef-p3-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Guided Practice — Choose the Equivalent Fraction`,
        exercise: {
          questions: [
            {
              question: 'Which fraction is equivalent to $\\frac{2}{5}$?',
              options: ['$\\frac{4}{10}$', '$\\frac{2}{10}$', '$\\frac{5}{2}$', '$\\frac{3}{5}$'],
              correctAnswer: 0,
              explanation: 'Multiply top and bottom by 2: $\\frac{2 \\times 2}{5 \\times 2} = \\frac{4}{10}$. So $\\frac{2}{5} = \\frac{4}{10}$.'
            },
            {
              question: 'Which fraction is NOT equivalent to $\\frac{1}{3}$?',
              options: ['$\\frac{2}{5}$', '$\\frac{2}{6}$', '$\\frac{3}{9}$', '$\\frac{4}{12}$'],
              correctAnswer: 0,
              explanation: '$\\frac{2}{6}$, $\\frac{3}{9}$, and $\\frac{4}{12}$ all equal $\\frac{1}{3}$. But $\\frac{2}{5}$ is not, because $2 \\times 3 = 6$, not 5.'
            }
          ]
        }
      },
      {
        id: 'ef-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `## 🔽 Match the Missing Number

Pick the number that makes each pair of fractions equivalent.`,
        exercise: {
          dropdowns: [
            {
              label: '$\\frac{3}{4} = \\frac{?}{8}$, so the missing numerator is',
              options: ['6', '3', '4', '8']
            },
            {
              label: '$\\frac{4}{6} = \\frac{2}{?}$, so the missing denominator is',
              options: ['3', '2', '6', '12']
            }
          ],
          correctAnswers: ['6', '3'],
          hint1: 'For the first, $4 \\times 2 = 8$ so multiply the top by 2. For the second, you are dividing: $4 \\div 2 = 2$ and $6 \\div 2 = 3$.',
          explanation: 'First: $\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$. Second: $\\frac{4}{6} = \\frac{4 \\div 2}{6 \\div 2} = \\frac{2}{3}$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'equivalent-fractions-grade4',
    sections: [
      {
        id: 'ef-p4-context',
        type: 'text' as const,
        content: `## 🌎 Equivalent Fractions in Real Life

Equivalent fractions show up everywhere!

- **Pizza & cake:** $\\frac{1}{2}$ of a pizza is the same as $\\frac{4}{8}$ — just cut into more slices.
- **Measuring cups:** $\\frac{1}{2}$ cup of flour equals $\\frac{2}{4}$ cup. Same amount!
- **Money:** $\\frac{1}{4}$ of a dollar is one quarter, the same as $\\frac{25}{100}$ of a dollar.
- **Sharing:** If 3 of 4 friends want pizza, that is $\\frac{3}{4}$, the same as $\\frac{6}{8}$.

> 🍰 **Story:** Maya cut her cake into 8 equal pieces and ate 4 of them. She ate $\\frac{4}{8}$ of the cake — which is the same as eating $\\frac{1}{2}$. She ate exactly half!`
      },
      {
        id: 'ef-p4-input',
        type: 'input-boxes' as const,
        content: `## ✍️ Word Problem Practice

Solve each problem. Type just the number.

1) A recipe needs $\\frac{1}{2}$ cup of sugar. Your cup only has fourths marked on it. How many **fourths** of a cup do you need? Fill in: $\\frac{1}{2} = \\frac{?}{4}$

2) Leo ate $\\frac{2}{3}$ of a chocolate bar that had 9 equal squares. How many **squares** did he eat? Fill in: $\\frac{2}{3} = \\frac{?}{9}$

3) A pizza is cut into 8 slices. Mia ate $\\frac{1}{2}$ of it. How many **slices** did she eat? Fill in: $\\frac{1}{2} = \\frac{?}{8}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '4'],
          hint1: 'Make an equivalent fraction with the new denominator. Multiply the top by the same number you multiply the bottom by.',
          hint2: 'Box 1: $2 \\times 2 = 4$. Box 2: $3 \\times 3 = 9$. Box 3: $2 \\times 4 = 8$.',
          explanation: '1) $\\frac{1}{2} = \\frac{1 \\times 2}{2 \\times 2} = \\frac{2}{4}$, so 2 fourths. 2) $\\frac{2}{3} = \\frac{2 \\times 3}{3 \\times 3} = \\frac{6}{9}$, so 6 squares. 3) $\\frac{1}{2} = \\frac{1 \\times 4}{2 \\times 4} = \\frac{4}{8}$, so 4 slices.'
        }
      },
      {
        id: 'ef-p4-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Word Problem Check`,
        exercise: {
          questions: [
            {
              question: 'Sam read $\\frac{3}{4}$ of his book. His friend says she read $\\frac{6}{8}$ of the same book. Who read more?',
              options: [
                'They read the same amount, because $\\frac{3}{4} = \\frac{6}{8}$',
                'Sam read more',
                'His friend read more',
                'You cannot tell from the fractions'
              ],
              correctAnswer: 0,
              explanation: 'Multiply $\\frac{3}{4}$ top and bottom by 2: $\\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$. The fractions are equivalent, so they read the same amount.'
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 5 — Review & Challenge
  // ===================================================================
  {
    topicSlug: 'equivalent-fractions-grade4',
    sections: [
      {
        id: 'ef-p5-summary',
        type: 'text' as const,
        content: `## 📚 Review & Challenge

You learned that **equivalent fractions** name the same value in different ways.

### Two ways to find them

| Method | What you do | Example |
|---|---|---|
| **Multiply** | Multiply top and bottom by the same number | $\\frac{2}{3} = \\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$ |
| **Divide (simplify)** | Divide top and bottom by the same number | $\\frac{6}{8} = \\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$ |

### Simplest form

A fraction is in **simplest form** when the top and bottom share **no common factor except 1**.

- $\\frac{3}{4}$ **is** in simplest form (nothing but 1 divides both 3 and 4).
- $\\frac{6}{8}$ is **NOT** — both can be divided by 2 to get $\\frac{3}{4}$.

> 🏆 **Challenge yourself:** Can you simplify $\\frac{4}{8}$ all the way down? (Hint: divide top and bottom by 4 → $\\frac{1}{2}$.)`
      },
      {
        id: 'ef-p5-quiz',
        type: 'multiple-choice' as const,
        content: `## 🏁 Final Challenge`,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{6}{8}$ written in simplest form?',
              options: ['$\\frac{3}{4}$', '$\\frac{2}{4}$', '$\\frac{6}{8}$', '$\\frac{4}{6}$'],
              correctAnswer: 0,
              explanation: 'Divide top and bottom by their common factor 2: $\\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$. Since 3 and 4 share no factor but 1, $\\frac{3}{4}$ is in simplest form.'
            },
            {
              question: 'Which of these fractions is already in simplest form?',
              options: ['$\\frac{2}{5}$', '$\\frac{4}{8}$', '$\\frac{6}{9}$', '$\\frac{10}{15}$'],
              correctAnswer: 0,
              explanation: '2 and 5 share no common factor except 1, so $\\frac{2}{5}$ is in simplest form. The others simplify: $\\frac{4}{8} = \\frac{1}{2}$, $\\frac{6}{9} = \\frac{2}{3}$, and $\\frac{10}{15} = \\frac{2}{3}$.'
            }
          ]
        }
      }
    ]
  }
]
