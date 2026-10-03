export const actStatProbPart4Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p4-intro',
      type: 'text' as const,
      content: `
# 🎲 Basic Probability

**Part 4 of 7 — Simple Probability, Complements, the Addition Rule, and Independent Events**

Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). ACT probability questions are built from a small set of rules. The skill being tested is choosing the right rule and the right denominator.

## Simple Probability

When all outcomes are equally likely,

$$P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$

**Example:** A bag holds 5 red, 7 blue, and 8 green marbles. $P(\\text{blue}) = \\frac{7}{20}$. The denominator is **all** 20 marbles — not the 13 that are not blue.

**Bounds check:** every probability is between 0 and 1, inclusive. An answer like $\\frac{5}{4}$, 1.3, or a negative number is impossible, so eliminate it on sight. Probabilities may be written as fractions, decimals, or percents ($\\frac{1}{4} = 0.25 = 25\\%$).

## The Complement Rule

The complement of $A$ ("not $A$") contains every outcome where $A$ does not happen:

$$P(\\text{not } A) = 1 - P(A)$$

If $P(\\text{rain}) = 0.3$, then $P(\\text{no rain}) = 0.7$. The complement is the fastest route whenever the question says **not**, **neither**, or **at least one**.

## "Or": The Addition Rule

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

The subtraction removes the outcomes counted twice — the ones in **both** events.

**Example:** In a club of 50, 22 play chess, 17 play piano, and 5 play both. Then $P(\\text{chess or piano}) = \\frac{22 + 17 - 5}{50} = \\frac{34}{50}$, and $P(\\text{neither}) = 1 - \\frac{34}{50} = \\frac{16}{50} = \\frac{8}{25}$.

**Mutually exclusive** events cannot happen together (rolling a 2 and rolling a 5 on one die). For them $P(A \\text{ and } B) = 0$, so the rule becomes simply $P(A) + P(B)$.

**Number-range version:** For integers 1 through 30, there are 10 multiples of 3 and 6 multiples of 5, and the multiples of 15 (15 and 30) are in both groups. So $P(\\text{multiple of 3 or 5}) = \\frac{10 + 6 - 2}{30} = \\frac{14}{30} = \\frac{7}{15}$.

## Venn Diagrams in Words

Many ACT questions describe overlapping groups without drawing them. Fill in a mental (or scratch) Venn diagram from the **inside out**:

| Region | Club example |
|--------|--------------|
| Both | 5 |
| Chess only | $22 - 5 = 17$ |
| Piano only | $17 - 5 = 12$ |
| Neither | $50 - (17 + 5 + 12) = 16$ |

The same reasoning works with percents: if 55% own a dog, 40% own a cat, and 20% own both, then $55 + 40 - 20 = 75\\%$ own at least one and 25% own neither.

## "And": Independent Events

Events are **independent** when one happening does not change the probability of the other (separate coin flips, separate dice, draws **with replacement**). Then

$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Example:** $P(\\text{heads on 3 straight flips}) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$.

## Dependent Events: Without Replacement

When items are drawn **without replacement**, the second draw's probabilities change because the first item is gone. Multiply, but update the counts:

$$P(\\text{both defective}) = \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$$

for 2 bulbs drawn from a box of 8 that contains 3 defective ones. Using $\\frac{3}{8} \\times \\frac{3}{8}$ would treat the draws as if the first bulb were put back.

## "At Least One" with Independent Events

$$P(\\text{at least one}) = 1 - P(\\text{none})$$

A player who makes 70% of free throws misses 30%. The chance she misses both of 2 shots is $0.3 \\times 0.3 = 0.09$, so $P(\\text{at least one make}) = 0.91$. Adding $0.7 + 0.7 = 1.4$ gives an impossible probability — a sign you used "or" logic on overlapping events.

## Rule Selection at a Glance

| Wording | Rule |
|---------|------|
| "not," "neither" | $1 - P$ |
| "or," "either" | Add, then subtract the overlap |
| "and," "both," independent | Multiply |
| "and," without replacement | Multiply with updated counts |
| "at least one" | $1 - P(\\text{none})$ |
      `
    },
    {
      id: 'act-stat-p4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Overlapping groups and "neither"</b></summary>

**Question:** Of 40 students, 18 take art, 15 take music, and 7 take both. A student is chosen at random. Find $P(\\text{art or music})$ and $P(\\text{neither})$.

**Solution:**
1. Addition rule: $P(\\text{art or music}) = \\frac{18 + 15 - 7}{40} = \\frac{26}{40} = \\frac{13}{20}$.
2. Complement: $P(\\text{neither}) = 1 - \\frac{13}{20} = \\frac{7}{20}$ (14 students). ✓

**ACT trap:** Forgetting to subtract the 7 gives 33 students in art or music and only 7 in neither — the students in both classes get counted twice.
</details>

<details>
<summary><b>Example 2: Two draws without replacement</b></summary>

**Question:** A drawer holds 4 black socks and 6 white socks. Two socks are taken at random without replacement. What is the probability that at least one is black?

**Solution:**
1. Use the complement: "at least one black" is the opposite of "both white."
2. $P(\\text{both white}) = \\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$ (one white sock is gone before the second draw).
3. $P(\\text{at least one black}) = 1 - \\frac{1}{3} = \\frac{2}{3}$. ✓

**Check:** Counting directly needs three cases (black then white, white then black, black then black): $\\frac{4}{10} \\cdot \\frac{6}{9} + \\frac{6}{10} \\cdot \\frac{4}{9} + \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{24 + 24 + 12}{90} = \\frac{60}{90} = \\frac{2}{3}$.
</details>
      `
    },
    {
      id: 'act-stat-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Probability Rules** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A bag contains 6 red, 4 white, and 10 blue tiles. One tile is drawn at random. What is the probability that it is NOT red?`,
            options: [`$\\frac{3}{10}$`, `$\\frac{3}{7}$`, `$\\frac{1}{2}$`, `$\\frac{7}{10}$`],
            correctAnswer: 3,
            explanation: `There are 20 tiles and 14 are not red, so the probability is $\\frac{14}{20} = \\frac{7}{10}$, which is also $1 - \\frac{6}{20}$. The value $\\frac{3}{10}$ is the probability of red itself. The value $\\frac{3}{7} = \\frac{6}{14}$ compares red tiles to non-red tiles instead of to all tiles, and $\\frac{1}{2}$ is the probability of blue alone.`
          },
          {
            question: `A fair six-sided die is rolled once. What is the probability that the result is greater than 4 or even?`,
            options: [`$\\frac{5}{6}$`, `$\\frac{2}{3}$`, `$\\frac{1}{6}$`, `$\\frac{1}{2}$`],
            correctAnswer: 1,
            explanation: `"Greater than 4" is {5, 6} and "even" is {2, 4, 6}. Together they cover {2, 4, 5, 6}, so the probability is $\\frac{4}{6} = \\frac{2}{3}$; by formula, $\\frac{2}{6} + \\frac{3}{6} - \\frac{1}{6}$. Adding without subtracting the shared 6 gives $\\frac{5}{6}$. The value $\\frac{1}{6}$ counts only the outcome in both events, and $\\frac{1}{2}$ counts only the even results.`
          },
          {
            question: `For two events, $P(A) = 0.5$, $P(B) = 0.35$, and $P(A \\text{ and } B) = 0.15$. What is the probability that neither A nor B occurs?`,
            options: [`0.3`, `0.7`, `0.15`, `0.85`],
            correctAnswer: 0,
            explanation: `First find $P(A \\text{ or } B) = 0.5 + 0.35 - 0.15 = 0.7$, then take the complement: $1 - 0.7 = 0.3$. The value 0.7 is the probability of A or B, the opposite of what was asked. The value 0.85 adds the two probabilities without removing the overlap, and 0.15 is the probability of both events.`
          },
          {
            question: `The probability of rain is 0.4 on Saturday and 0.25 on Sunday, and the two days are independent. What is the probability that it rains on at least one of the two days?`,
            options: [`0.65`, `0.10`, `0.55`, `0.45`],
            correctAnswer: 2,
            explanation: `The chance of no rain on either day is $0.6 \\times 0.75 = 0.45$, so the chance of rain on at least one day is $1 - 0.45 = 0.55$. Adding $0.4 + 0.25 = 0.65$ counts the chance of rain on both days twice. The value 0.10 is the probability of rain on both days, and 0.45 is the probability of no rain at all.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p4-input',
      type: 'input-boxes' as const,
      content: `
**Compute the Probability** 🧮 (enter decimals)

1) A spinner has 8 equal sections numbered 1 through 8. What is the probability of landing on a prime number?

2) A fair coin is flipped 3 times. What is the probability of getting heads all 3 times?

3) Events A and B are independent, with $P(A) = 0.6$ and $P(B) = 0.5$. What is $P(A \\text{ and } B)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '0.125', '0.3'],
        hint1: 'The primes from 1 to 8 are 2, 3, 5, and 7 (1 is not prime).',
        hint2: 'Multiply $\\frac{1}{2}$ three times.',
        hint3: 'Independent "and" means multiply.',
        explanation: '1) 4 of the 8 sections are prime, so $\\frac{4}{8} = 0.5$. 2) $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} = 0.125$. 3) $0.6 \\times 0.5 = 0.3$.'
      }
    },
    {
      id: 'act-stat-p4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | The probability that a randomly chosen choir member is NOT a senior is 0.72. Probability the member is a senior? | $1 - 0.72 = 0.28$ |
| 2 | Two fair dice are rolled. Probability that both show a 6? | $\\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$ |
| 3 | 30% of a town's households have a pool, 50% have a garden, and 10% have both. Percent with neither? | $100 - (30 + 50 - 10) = 30\\%$ |

**Two dice = 36 ordered outcomes.** Treat the dice as a first die and a second die: (2, 5) and (5, 2) are different, equally likely outcomes. So a sum of 7 has 6 ways out of 36 ($\\frac{6}{36} = \\frac{1}{6}$), not 1 way out of 11 possible sums.

**ACT Tip:** Before computing, underline the key word — not, or, and, at least one — and match it to its rule from the table above.
      `
    },
    {
      id: 'act-stat-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Compound Events** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A box contains 8 light bulbs, 3 of which are defective. Two bulbs are chosen at random without replacement. What is the probability that both are defective?`,
            options: [`$\\frac{3}{28}$`, `$\\frac{9}{64}$`, `$\\frac{3}{8}$`, `$\\frac{1}{4}$`],
            correctAnswer: 0,
            explanation: `The first bulb is defective with probability $\\frac{3}{8}$; then 2 defective bulbs remain among 7, so $\\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$. The value $\\frac{9}{64}$ treats the draws as if the first bulb were replaced. The value $\\frac{3}{8}$ is the chance for one bulb only, and $\\frac{1}{4} = \\frac{2}{8}$ divides the number of bulbs drawn by the total.`
          },
          {
            question: `A fair six-sided die is rolled once. Which pair of events CANNOT both happen on the same roll?`,
            options: [
              `Rolling an even number and rolling a number above 5`,
              `Rolling a prime and rolling an even number`,
              `Rolling a number below 3 and rolling a 5`,
              `Rolling an odd number and rolling a number above 4`
            ],
            correctAnswer: 2,
            explanation: `A number below 3 is 1 or 2, so it can never also be 5; these events are mutually exclusive. A roll of 6 is both even and above 5. A roll of 2 is both prime and even. A roll of 5 is both odd and above 4.`
          },
          {
            question: `An integer from 1 to 40, inclusive, is chosen at random. What is the probability that it is a multiple of 4 or a multiple of 6?`,
            options: [`$\\frac{2}{5}$`, `$\\frac{3}{40}$`, `$\\frac{1}{4}$`, `$\\frac{13}{40}$`],
            correctAnswer: 3,
            explanation: `There are 10 multiples of 4 and 6 multiples of 6, and 3 numbers (12, 24, 36) are multiples of both, so $10 + 6 - 3 = 13$ numbers qualify: $\\frac{13}{40}$. Skipping the overlap gives $\\frac{16}{40} = \\frac{2}{5}$. The value $\\frac{3}{40}$ counts only the numbers in both groups, and $\\frac{1}{4}$ counts only the multiples of 4.`
          },
          {
            question: `A basketball player makes 70% of her free throws, and each shot is independent of the others. She takes 2 free throws. What is the probability that she makes at least one?`,
            options: [`1.40`, `0.91`, `0.49`, `0.42`],
            correctAnswer: 1,
            explanation: `She misses a shot with probability 0.3, so she misses both with probability $0.3 \\times 0.3 = 0.09$, and makes at least one with probability $1 - 0.09 = 0.91$. The value 1.40 is greater than 1, so it cannot be a probability. The value 0.49 is the chance she makes both, and 0.42 is the chance she makes exactly one, $2(0.7)(0.3)$.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- $P = \\frac{\\text{favorable}}{\\text{total}}$ for equally likely outcomes; every probability lies between 0 and 1.
- **Complement:** $P(\\text{not } A) = 1 - P(A)$. Use it for "not," "neither," and "at least one."
- **Addition rule:** $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. Mutually exclusive events have no overlap to subtract.
- **Independent events:** $P(A \\text{ and } B) = P(A) \\times P(B)$.
- **Without replacement:** multiply, but reduce the counts after each draw.
- Sort overlapping groups into both / only A / only B / neither before you divide.
      `
    }
  ]
};
