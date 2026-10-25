export const asvabArFractionsDecimalsPart3Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd3-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 3 of 7 — Adding and Subtracting Fractions and Mixed Numbers**

### Common Denominators First

You can only add or subtract fractions when they count the **same size pieces**. Thirds and fourths are different sizes, so rewrite both as twelfths first.

**Example 1.** A cook uses $\\frac{1}{3}$ cup of oil in the batter and $\\frac{1}{4}$ cup in the pan. How much oil is that altogether?

The smallest number both 3 and 4 divide into is 12:

$$\\frac{1}{3} = \\frac{4}{12} \\qquad \\frac{1}{4} = \\frac{3}{12} \\qquad \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12} \\text{ cup}$$

Add the numerators; keep the denominator.

**Never add the tops and the bottoms.** $\\frac{1}{3} + \\frac{1}{4}$ is **not** $\\frac{2}{7}$. A quick check shows why: $\\frac{2}{7}$ is less than $\\frac{1}{3}$ by itself, and adding more oil cannot leave you with less.

> **Key Fact:** If you cannot spot the common denominator, multiply the two denominators. It always works ($3 \\times 4 = 12$); you may just need to simplify at the end.`
    },
    {
      id: 'arfd3-mixed',
      type: 'text' as const,
      content: `## Mixed Numbers in Measurements

AR loves mixed numbers: $5\\frac{1}{2}$ hours, $8\\frac{1}{4}$ feet, $2\\frac{2}{3}$ cups. To add them, add the **whole numbers** and the **fractions** separately, then regroup.

**Example 2.** A part-time worker logs $5\\frac{1}{2}$ hours on Monday and $6\\frac{3}{4}$ hours on Tuesday. How many hours is that in all?

**Estimate:** about $5\\frac{1}{2} + 7 = 12\\frac{1}{2}$, a little less since $6\\frac{3}{4}$ is under 7.

| Step | Work |
|:---|:---|
| Common denominator | $5\\frac{2}{4} + 6\\frac{3}{4}$ |
| Add wholes, add fractions | $11 + \\frac{5}{4} = 11\\frac{5}{4}$ |
| Regroup: $\\frac{5}{4} = 1\\frac{1}{4}$ | $12\\frac{1}{4}$ hours |

$12\\frac{1}{4}$ is a little less than $12\\frac{1}{2}$, just as the estimate said. ✓

**Don't forget to regroup.** Leaving the answer as $11\\frac{5}{4}$ is not wrong in value, but the answer choices will show $12\\frac{1}{4}$, and $11\\frac{1}{4}$ (the carry dropped) is a common wrong choice.`
    },
    {
      id: 'arfd3-borrow',
      type: 'text' as const,
      content: `## Subtracting: When You Need to Borrow

**Example 3.** A board is $8\\frac{1}{4}$ feet long. A carpenter cuts off $2\\frac{5}{8}$ feet. How long is the piece that is left?

**Estimate:** about $8 - 2\\frac{1}{2} = 5\\frac{1}{2}$ feet.

**Step 1 — Common denominator:** $8\\frac{2}{8} - 2\\frac{5}{8}$

**Step 2 — Borrow.** You cannot take $\\frac{5}{8}$ from $\\frac{2}{8}$, so borrow 1 whole from the 8. One whole is $\\frac{8}{8}$:

$$8\\frac{2}{8} = 7 + \\frac{8}{8} + \\frac{2}{8} = 7\\frac{10}{8}$$

**Step 3 — Subtract:** $7\\frac{10}{8} - 2\\frac{5}{8} = 5\\frac{5}{8}$ feet.

**Check:** $5\\frac{5}{8} + 2\\frac{5}{8} = 7\\frac{10}{8} = 8\\frac{2}{8} = 8\\frac{1}{4}$. ✓ And $5\\frac{5}{8}$ is close to the estimate.

**Two borrowing slips to avoid:**

- Flipping the subtraction to $\\frac{5}{8} - \\frac{2}{8}$ (subtracting the smaller fraction from the larger), which gives $6\\frac{3}{8}$.
- Borrowing "10" the way you do with whole numbers: the borrowed 1 is $\\frac{8}{8}$, so $\\frac{2}{8}$ becomes $\\frac{10}{8}$, not $\\frac{12}{8}$.`
    },
    {
      id: 'arfd3-compare',
      type: 'text' as const,
      content: `## Comparing and Ordering Fractions

Some questions ask who ran farther, which tank is fuller, or which fraction is largest.

**Method 1 — Cross-multiply.** Compare $\\frac{5}{8}$ and $\\frac{3}{5}$: multiply each numerator by the *other* denominator.

$$5 \\times 5 = 25 \\qquad 3 \\times 8 = 24$$

$25 > 24$, so $\\frac{5}{8} > \\frac{3}{5}$ (the 25 sits on the side of $\\frac{5}{8}$).

**Method 2 — Benchmark against $\\frac{1}{2}$.** A fraction is more than half when its numerator is more than half its denominator.

| Fraction | Half the denominator | Compared with $\\frac{1}{2}$ |
|:---:|:---:|:---:|
| $\\frac{3}{7}$ | $3.5$ | less |
| $\\frac{4}{7}$ | $3.5$ | more |
| $\\frac{5}{9}$ | $4.5$ | more |

**Method 3 — Convert to decimals** when you know the benchmarks (Part 5): $\\frac{5}{8} = 0.625$ and $\\frac{3}{5} = 0.6$.

> **Key Fact:** A bigger denominator means **smaller pieces**. $\\frac{7}{12}$ has the biggest numbers in a list, but that does not make it the biggest fraction.`
    },
    {
      id: 'arfd3-mc',
      type: 'multiple-choice' as const,
      content: '**Add, subtract, compare.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A trail crew clears $1\\frac{2}{3}$ miles of trail in the morning and $2\\frac{1}{2}$ miles in the afternoon. How many miles of trail does the crew clear that day?',
            options: ['$3\\frac{3}{5}$', '$3\\frac{1}{6}$', '$\\frac{5}{6}$', '$4\\frac{1}{6}$'],
            correctAnswer: 3,
            explanation: 'Use sixths: $1\\frac{4}{6} + 2\\frac{3}{6} = 3\\frac{7}{6} = 4\\frac{1}{6}$ miles. $3\\frac{3}{5}$ adds the tops and the bottoms, $3\\frac{1}{6}$ drops the 1 carried from $\\frac{7}{6}$, and $\\frac{5}{6}$ subtracts the two distances instead of adding them.'
          },
          {
            question: 'A roll holds $10\\frac{1}{4}$ yards of rope. A crew cuts off $3\\frac{3}{4}$ yards. How many yards of rope are left on the roll?',
            options: ['$6\\frac{1}{2}$', '$7\\frac{1}{2}$', '$6\\frac{1}{4}$', '$14$'],
            correctAnswer: 0,
            explanation: 'Borrow 1 whole as $\\frac{4}{4}$: $10\\frac{1}{4} = 9\\frac{5}{4}$, and $9\\frac{5}{4} - 3\\frac{3}{4} = 6\\frac{2}{4} = 6\\frac{1}{2}$ yards. $7\\frac{1}{2}$ subtracts the smaller fraction from the larger one, $6\\frac{1}{4}$ borrows but forgets to add back the original $\\frac{1}{4}$, and 14 adds the lengths.'
          },
          {
            question: 'At the first checkpoint of a ruck march, four recruits have finished these fractions of the course: $\\frac{3}{5}$, $\\frac{5}{8}$, $\\frac{4}{7}$ and $\\frac{7}{12}$. Which fraction is the greatest?',
            options: ['$\\frac{7}{12}$', '$\\frac{3}{5}$', '$\\frac{5}{8}$', '$\\frac{4}{7}$'],
            correctAnswer: 2,
            explanation: 'As decimals: $\\frac{5}{8} = 0.625$, $\\frac{3}{5} = 0.6$, $\\frac{7}{12} \\approx 0.583$ and $\\frac{4}{7} \\approx 0.571$, so $\\frac{5}{8}$ is greatest (cross-multiplying $\\frac{5}{8}$ and $\\frac{3}{5}$ gives 25 vs 24). $\\frac{7}{12}$ has the biggest numerator and denominator, but bigger denominators mean smaller pieces; $\\frac{3}{5}$ is close but just short.'
          }
        ]
      }
    },
    {
      id: 'arfd3-input',
      type: 'input-boxes' as const,
      content: `**Measure it.** ✍️

**1)** A carpenter needs two shelves, one $2\\frac{3}{8}$ feet long and one $3\\frac{5}{8}$ feet long. What is their total length? (number only, in feet)

**2)** A recruit plans to run 5 miles and has run $3\\frac{3}{4}$ miles so far. How many more miles must she run? Give a decimal or a mixed number (number only, in miles).`,
      exercise: {
        boxes: 2,
        correctAnswers: ['6', '1.25'],
        hint1: 'For (1), the eighths add to $\\frac{8}{8}$, which is one whole.',
        hint2: 'For (2), write 5 as $4\\frac{4}{4}$ before subtracting.',
        hint3: '$4\\frac{4}{4} - 3\\frac{3}{4} = 1\\frac{1}{4}$, which is $1.25$.',
        explanation: '(1) $2\\frac{3}{8} + 3\\frac{5}{8} = 5\\frac{8}{8} = 6$ feet. (2) $5 = 4\\frac{4}{4}$, and $4\\frac{4}{4} - 3\\frac{3}{4} = 1\\frac{1}{4}$ miles, which is $1.25$ miles.'
      }
    },
    {
      id: 'arfd3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set it up right.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'To add $\\frac{2}{5} + \\frac{1}{3}$, first rewrite both fractions with the least common denominator:',
            options: ['15', '8', '5', '2'],
            correctAnswer: 0
          },
          {
            label: 'Which is greater, $\\frac{4}{9}$ or $\\frac{1}{2}$?',
            options: ['$\\frac{4}{9}$', '$\\frac{1}{2}$', 'They are equal', 'There is no way to tell'],
            correctAnswer: 1
          },
          {
            label: 'To subtract $6\\frac{1}{5} - 2\\frac{3}{5}$, first rewrite $6\\frac{1}{5}$ as:',
            options: ['$5\\frac{11}{5}$', '$6\\frac{6}{5}$', '$5\\frac{6}{5}$', '$5\\frac{1}{5}$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['15', '$\\frac{1}{2}$', '$5\\frac{6}{5}$'],
        hint1: 'Find the smallest number that both 5 and 3 divide into evenly.',
        hint2: 'Half of 9 is 4.5. Is 4 more or less than that?',
        hint3: 'Borrow 1 whole from the 6 and write it as $\\frac{5}{5}$.',
        explanation: 'Fifths and thirds both become fifteenths ($\\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$); adding the denominators to get 8 is the classic mistake. $\\frac{4}{9}$ is less than half because 4 is less than 4.5. Borrowing 1 from 6 leaves 5, and the borrowed $\\frac{5}{5}$ joins the $\\frac{1}{5}$ to make $5\\frac{6}{5}$; then $5\\frac{6}{5} - 2\\frac{3}{5} = 3\\frac{3}{5}$.'
      }
    },
    {
      id: 'arfd3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Add or subtract only with a **common denominator**; never add the denominators
- Mixed numbers: wholes with wholes, fractions with fractions, then **regroup** an improper fraction
- Subtracting a bigger fraction: **borrow 1 whole** as $\\frac{d}{d}$ (for example $\\frac{8}{8}$), not as 10
- Compare fractions by **cross-multiplying**, by the **$\\frac{1}{2}$ benchmark**, or by converting to decimals

> **Up Next:** Part 4 — multiplying and dividing fractions: cutting boards, scaling recipes, and knowing which operation the words call for.`
    }
  ]
};
