export const asvabArAveragesProbabilityPart5Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap5-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 5 of 7 — Basic Probability**

### Favorable Over Total

When every outcome is equally likely,

$$\\text{probability} = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$

Write the fraction, then **simplify** it: answer choices are almost always in lowest terms.

**Example 1.** A standard die (faces 1 to 6) is rolled. What is the probability of rolling a number greater than 2?

Favorable: 3, 4, 5, 6, which is 4 outcomes. Total: 6 outcomes.

$$\\frac{4}{6} = \\frac{2}{3}$$

**Example 2.** A box holds 15 black pens, 9 blue pens and 6 red pens. One pen is picked without looking. What is the probability it is blue?

Total: $15 + 9 + 6 = 30$ pens. Favorable: 9 blue.

$$\\frac{9}{30} = \\frac{3}{10}$$

**The denominator is the total of everything,** not just the outcomes that are not favorable. Writing $\\frac{9}{21}$ (blue over not-blue) is a common slip.

> **Key Fact:** Every probability is between 0 and 1. A probability of 0 means the event cannot happen, and 1 means it is certain. An answer bigger than 1 is always wrong.`
    },
    {
      id: 'arap5-complement',
      type: 'text' as const,
      content: `## "Not": The Complement

The probability that something does **not** happen is 1 minus the probability that it does:

$$P(\\text{not A}) = 1 - P(\\text{A})$$

**Example 3.** Using the same box of 30 pens, what is the probability that the pen is **not** red?

$$P(\\text{red}) = \\frac{6}{30} = \\frac{1}{5} \\qquad P(\\text{not red}) = 1 - \\frac{1}{5} = \\frac{4}{5}$$

**Check by counting:** $15 + 9 = 24$ pens are not red, and $\\frac{24}{30} = \\frac{4}{5}$. ✓`
    },
    {
      id: 'arap5-and',
      type: 'text' as const,
      content: `## "And" for Separate Events: Multiply

Two events are **independent** when one has no effect on the other, like a coin toss and a die roll. The probability that **both** happen is the product:

$$P(\\text{A and B}) = P(\\text{A}) \\times P(\\text{B})$$

**Example 4.** A coin is tossed and a die is rolled. What is the probability of heads **and** a 6?

$$\\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$$

**Check by listing:** the coin has 2 outcomes and the die has 6, so there are $2 \\times 6 = 12$ equally likely pairs (H1, H2, ..., T6). Only H6 is favorable: $\\frac{1}{12}$. ✓

**Reasonableness:** "both" is harder than either one alone, so the answer must be **smaller** than each fraction you multiplied. Adding ($\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$) gives a bigger number, which is the sign of the wrong operation.`
    },
    {
      id: 'arap5-without',
      type: 'text' as const,
      content: `## Two Draws Without Replacement

When you draw twice and **do not put the first item back**, the second draw has one fewer item in total, and possibly one fewer favorable item.

**Example 5.** A drawer has 4 black socks and 2 white socks. Two socks are pulled out without looking. What is the probability that both are black?

**First draw:** 4 black out of 6 socks: $\\frac{4}{6}$.

**Second draw:** one black sock is gone, so 3 black out of 5 socks: $\\frac{3}{5}$.

**Multiply:**

$$\\frac{4}{6} \\times \\frac{3}{5} = \\frac{12}{30} = \\frac{2}{5}$$

**The trap:** using $\\frac{4}{6}$ twice gives $\\frac{16}{36} = \\frac{4}{9}$. That would be right only if the first sock went back into the drawer.`
    },
    {
      id: 'arap5-expected',
      type: 'text' as const,
      content: `## Expected Count

To predict how many times something will happen in a number of tries:

$$\\text{expected count} = \\text{probability} \\times \\text{number of trials}$$

**Example 6.** A die is rolled 60 times. About how many times should a 3 come up?

$$\\frac{1}{6} \\times 60 = 10 \\text{ times}$$

**Reasonableness:** the expected count can never be more than the number of trials.`
    },
    {
      id: 'arap5-mc',
      type: 'multiple-choice' as const,
      content: '**Find the probability.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A jar holds 7 cherry, 5 lime and 8 grape candies. One candy is picked without looking. What is the probability that it is lime?',
            options: ['$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{3}$', '$\\frac{5}{8}$'],
            correctAnswer: 0,
            explanation: 'There are $7 + 5 + 8 = 20$ candies and 5 are lime: $\\frac{5}{20} = \\frac{1}{4}$. $\\frac{3}{4}$ is the chance of not lime, $\\frac{1}{3}$ either treats the three flavors as equally likely or divides lime by not-lime ($\\frac{5}{15}$), and $\\frac{5}{8}$ divides lime by grape.'
          },
          {
            question: 'One spinner has 4 equal sections numbered 1 to 4. A second spinner has 5 equal sections in 5 different colors, one of them blue. Both are spun. What is the probability of a 4 and blue?',
            options: ['$\\frac{9}{20}$', '$\\frac{1}{9}$', '$\\frac{1}{20}$', '$\\frac{2}{9}$'],
            correctAnswer: 2,
            explanation: 'The spinners are independent, so multiply: $\\frac{1}{4} \\times \\frac{1}{5} = \\frac{1}{20}$. $\\frac{9}{20}$ adds the two probabilities, and $\\frac{1}{9}$ and $\\frac{2}{9}$ lump the $4 + 5 = 9$ sections together instead of counting the $4 \\times 5 = 20$ possible pairs.'
          },
          {
            question: 'A box holds 10 fuses: 3 are defective and 7 are good. Two fuses are taken out without replacement. What is the probability that both are defective?',
            options: ['$\\frac{9}{100}$', '$\\frac{3}{10}$', '$\\frac{47}{90}$', '$\\frac{1}{15}$'],
            correctAnswer: 3,
            explanation: 'First: $\\frac{3}{10}$. Then 2 defective are left out of 9: $\\frac{2}{9}$. Multiply: $\\frac{3}{10} \\times \\frac{2}{9} = \\frac{6}{90} = \\frac{1}{15}$. $\\frac{9}{100}$ uses $\\frac{3}{10}$ twice, as if the first fuse went back; $\\frac{3}{10}$ is only the first draw, and $\\frac{47}{90}$ adds the two fractions.'
          },
          {
            question: 'A basketball player makes $\\frac{3}{4}$ of her free throws. If she shoots 36 free throws, how many should she expect to make?',
            options: ['9', '27', '48', '33'],
            correctAnswer: 1,
            explanation: 'Expected count = probability $\\times$ trials: $\\frac{3}{4} \\times 36 = 36 \\div 4 \\times 3 = 27$. 9 is the number she should expect to miss, 48 flips the fraction (more makes than shots is impossible), and 33 subtracts 3 from 36.'
          }
        ]
      }
    },
    {
      id: 'arap5-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️

**1)** A spinner has 8 equal sections, and 3 of them are blue. If it is spun 40 times, how many times should you expect it to land on blue? (number only)

**2)** A bag holds 12 tiles. The probability of drawing a red tile is $\\frac{1}{4}$. How many red tiles are in the bag? (number only)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['15', '3'],
        hint1: 'For (1), the probability of blue on one spin is $\\frac{3}{8}$.',
        hint2: 'For (1), multiply the probability by the 40 spins.',
        hint3: 'For (2), favorable = probability $\\times$ total.',
        explanation: '(1) $\\frac{3}{8} \\times 40 = 40 \\div 8 \\times 3 = 15$ times. (2) $\\frac{1}{4} \\times 12 = 3$ red tiles. Check: $\\frac{3}{12} = \\frac{1}{4}$. ✓'
      }
    },
    {
      id: 'arap5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Probability rules.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The probability of an event can never be greater than:',
            options: ['0', '1', '10', '100'],
            correctAnswer: 1
          },
          {
            label: 'For two independent events, the probability that both happen is found by:',
            options: ['adding the probabilities', 'averaging the probabilities', 'multiplying the probabilities', 'subtracting the probabilities'],
            correctAnswer: 2
          },
          {
            label: 'If the probability of rain is $\\frac{3}{10}$, the probability of no rain is:',
            options: ['$\\frac{3}{7}$', '$\\frac{10}{3}$', '$\\frac{3}{10}$', '$\\frac{7}{10}$'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['1', 'multiplying the probabilities', '$\\frac{7}{10}$'],
        hint1: 'A certain event has probability 1.',
        hint2: '"Both" must be less likely than either one alone.',
        hint3: 'Not A = 1 minus A.',
        explanation: 'Probabilities run from 0 (impossible) to 1 (certain). For independent events, both happening is the product, which is smaller than either probability; adding can push the answer past 1. No rain: $1 - \\frac{3}{10} = \\frac{7}{10}$. $\\frac{3}{7}$ compares rain to no rain, and $\\frac{10}{3}$ is bigger than 1, so it is impossible.'
      }
    },
    {
      id: 'arap5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Probability = favorable ÷ total**, simplified. The total includes every outcome
- Every probability is **between 0 and 1**
- **Not:** $1 - P$
- **And (independent events):** multiply. The answer must be smaller than each piece
- **Without replacement:** the second denominator shrinks by 1, and the numerator may too
- **Expected count = probability × number of trials**

> **Up Next:** Part 6 — test strategy and the common traps in average, counting and probability questions.`
    }
  ]
};
