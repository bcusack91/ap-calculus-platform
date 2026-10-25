export const asvabArAveragesProbabilityPart1Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap1-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 1 of 7 — Averages and Chance on the AR Subtest**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Averages and chance on the AR subtest** |
| 2 | Finding the average (mean) |
| 3 | Missing values and weighted averages |
| 4 | Counting outcomes |
| 5 | Basic probability |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What These Questions Look Like

The Arithmetic Reasoning (AR) subtest is officially described as the "ability to solve basic arithmetic word problems." Averages show up as short stories about real numbers:

- **Find the average:** "A recruit's scores on four practice tests were 84, 90, 78 and 88. What was her average score?"
- **Find the missing value:** "What score does she need on the fifth test to raise her average to 86?"
- **Combine two groups:** "Twenty recruits average 80 on a test and thirty average 90. What is the average for all 50?"

Counting and probability questions tell a story too: how many different meal combos a menu allows, or the chance of pulling a certain name from a hat.

What is really being tested is whether you can turn the words into the right setup (add, divide, multiply) and carry it out cleanly by hand.

Basic probability and counting also appear on the **Mathematics Knowledge (MK)** subtest, whose official description lists probability. Everything in Parts 4 and 5 pays off twice.

### The Conditions You Work Under

| Fact | What it means for this topic |
|:---|:---|
| 15 scored questions in 55 minutes on the computer test (CAT-ASVAB) | About 3.5 minutes per question: enough time to write out every sum |
| No calculator, at any version of the test | Adding a list of scores and dividing is done on scratch paper |
| Two sheets of scratch paper and two pencils (ask for more if you need them) | Write each value in a column so nothing gets skipped |
| 4 answer choices per question | The wrong choices come from real slips, such as dividing by the wrong count |
| You cannot go back once you answer | Check your average against the smallest and largest values before you click |

If you take a paper version of the test, the pace is much faster, so the shortcuts in this lesson matter even more.

AR is one of the four subtests in your **AFQT** score, the score that decides whether you can enlist, and it also feeds job line scores such as the Army GT score. Average questions follow a small set of patterns, which makes them some of the most winnable points on the subtest.`
    },
    {
      id: 'arap1-habits',
      type: 'text' as const,
      content: `## Seven Habits, Applied to Averages and Chance

| Habit | What it looks like in this topic |
|:---|:---|
| **1. Read the last sentence first** | Is it asking for the average, the total, the missing value, or a probability? |
| **2. Translate words to operations** | "Average" means add, then divide by how many. "And" for two separate events means multiply. |
| **3. Track units** | Points, pounds, dollars, hours. Also track **counts**: how many values are you dividing by? |
| **4. Estimate first** | An average must land between the smallest and largest values. A probability is between 0 and 1. |
| **5. Shortcuts** | Use the balance method: guess a round number and average the amounts above and below it. |
| **6. Check reasonableness** | Two groups combined: the average lands closer to the bigger group. |
| **7. Use the answer choices** | For "what score is needed" questions, plug a choice in and see if the average comes out right. |

> **Key Fact:** The two most common ways to lose an average point are dividing by the wrong count and averaging two averages when the groups are different sizes. Parts 2 and 3 show you how to avoid both.`
    },
    {
      id: 'arap1-worked',
      type: 'text' as const,
      content: `## A Fully Worked Example

**Problem.** A squad leader recorded push-ups for 5 soldiers: 42, 38, 50, 45 and 35. What was the average number of push-ups?

**Step 1 — Read the last sentence.** The question asks for the **average** of 5 values.

**Step 2 — Estimate.** The values run from 35 to 50, so the average must be somewhere between them, probably in the low 40s.

**Step 3 — Add in a column, then divide by the count.**

$$42 + 38 + 50 + 45 + 35 = 210$$

$$210 \\div 5 = 42$$

**Step 4 — Check.** 42 sits between 35 and 50, and it matches the estimate. ✓

**The trap.** Dividing 210 by 4 gives 52.5, which is **bigger than the largest value** (50). An average can never be outside the range of the data, so that choice is impossible.`
    },
    {
      id: 'arap1-warmup-mc',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Read the last sentence first, then compute.',
      exercise: {
        questions: [
          {
            question: 'A bag holds 3 red, 5 blue and 2 green marbles. One marble is picked without looking. What is the probability that it is blue?',
            options: ['$\\frac{3}{10}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{5}$'],
            correctAnswer: 1,
            explanation: 'There are $3 + 5 + 2 = 10$ marbles, and 5 are blue, so the probability is $\\frac{5}{10} = \\frac{1}{2}$. $\\frac{1}{3}$ treats the three colors as equally likely even though there are more blue marbles, $\\frac{3}{10}$ is the chance of red, and $\\frac{1}{5}$ is the chance of green.'
          },
          {
            question: 'A food truck offers 3 kinds of sandwiches and 4 kinds of drinks. How many different meals of one sandwich and one drink are possible?',
            options: ['7', '24', '12', '64'],
            correctAnswer: 2,
            explanation: 'Each of the 3 sandwiches can go with each of the 4 drinks: $3 \\times 4 = 12$ meals. 7 adds the choices instead of multiplying, 24 counts every meal twice (sandwich first and drink first are the same meal), and 64 is $4 \\times 4 \\times 4$, which raises 4 to a power instead of multiplying the two choices.'
          }
        ]
      }
    },
    {
      id: 'arap1-warmup-input',
      type: 'input-boxes' as const,
      content: `**Warm-up: averages and totals.** ✍️

**1)** What is the average of 14, 18, 22 and 26? (number only)

**2)** Five numbers have an average of 12. What is their sum? (number only)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['20', '60'],
        hint1: 'Average = sum $\\div$ how many numbers.',
        hint2: 'For (1), the sum is $14 + 18 + 22 + 26 = 80$.',
        hint3: 'For (2), work backward: sum = average $\\times$ how many.',
        explanation: '(1) $14 + 18 + 22 + 26 = 80$, and $80 \\div 4 = 20$. It sits between 14 and 26, as it must. (2) Sum = average $\\times$ count $= 12 \\times 5 = 60$.'
      }
    },
    {
      id: 'arap1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Average, counting and probability questions on AR are **word problems** about scores, pay, loads and choices
- You have about **3.5 minutes per question** on the computer test and **no calculator**, so write each value in a column on scratch paper
- An **average** must lie between the smallest and largest values; a **probability** must lie between 0 and 1
- Probability and counting also show up on the **Mathematics Knowledge** subtest

> **Up Next:** Part 2 — finding the average (mean), the balance shortcut, and when the median is the better "typical" value.`
    }
  ]
};
