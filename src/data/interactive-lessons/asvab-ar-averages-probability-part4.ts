export const asvabArAveragesProbabilityPart4Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap4-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 4 of 7 — Counting Outcomes**

### The Multiplication (Counting) Principle

If one choice can be made in $a$ ways and a second, separate choice in $b$ ways, the two choices together can be made in $a \\times b$ ways. Add more choices by multiplying again.

**Example 1 — outfits.** A recruit has 5 shirts, 3 pairs of pants and 2 pairs of shoes. How many different outfits (one of each) are possible?

$$5 \\times 3 \\times 2 = 30 \\text{ outfits}$$

**Why multiply, not add?** Each of the 5 shirts can go with each of the 3 pants: that is $5 \\times 3 = 15$ shirt-and-pants pairs. Each of those 15 can go with either pair of shoes: $15 \\times 2 = 30$. Adding ($5 + 3 + 2 = 10$) counts the items, not the outfits.

**Example 2 — lock codes.** A lock uses a 3-digit code, and each digit can be 0 through 9.

- **Repeats allowed:** each position has 10 choices: $10 \\times 10 \\times 10 = 1{,}000$ codes.
- **No digit repeated:** 10 choices for the first digit, then 9 left, then 8 left: $10 \\times 9 \\times 8 = 720$ codes.

> **Key Fact:** Draw one blank for each position, write the number of choices in each blank, and multiply. If items cannot repeat, each blank gets one fewer choice than the one before.`
    },
    {
      id: 'arap4-arrange',
      type: 'text' as const,
      content: `## Arranging a Group in a Line

How many ways can you line up a small group? Use the blanks again: every spot has one fewer person left to fill it.

**Example 3.** Four soldiers stand in a line for a photo. How many different orders are possible?

$$4 \\times 3 \\times 2 \\times 1 = 24$$

This product has a name: **4 factorial**, written $4!$. You only need the small ones:

| Group size | Product | Number of orders |
|:---:|:---:|:---:|
| 2 | $2 \\times 1$ | 2 |
| 3 | $3 \\times 2 \\times 1$ | 6 |
| 4 | $4 \\times 3 \\times 2 \\times 1$ | 24 |
| 5 | $5 \\times 4 \\times 3 \\times 2 \\times 1$ | 120 |

**Reasonableness:** the number of orders grows fast. If a question asks how many ways 4 people can line up and you got 10 (from $4 + 3 + 2 + 1$), you added instead of multiplying.`
    },
    {
      id: 'arap4-pairs',
      type: 'text' as const,
      content: `## Choosing 2 When Order Does Not Matter

Ask: **if I swap the two people, is it a different outcome?**

**Example 4 — order matters.** From 6 club members, choose a president and a vice president. Ann as president with Ben as vice president is different from Ben as president with Ann as vice president.

$$6 \\times 5 = 30 \\text{ ways}$$

**Example 5 — order does not matter.** Six people at a meeting each shake hands once with every other person. Ann shaking Ben's hand is the **same** handshake as Ben shaking Ann's.

$6 \\times 5 = 30$ counts every handshake **twice**, so divide by 2:

$$\\frac{6 \\times 5}{2} = 15 \\text{ handshakes}$$

In general, the number of **unordered pairs** from a group of $n$ is

$$\\frac{n \\times (n - 1)}{2}$$

**List to check.** For a small group, write the pairs in order so none are missed or repeated. From A, B, C and D:

AB, AC, AD, BC, BD, CD

That is 6 pairs, and the formula agrees: $\\frac{4 \\times 3}{2} = 6$. Start with every pair that includes A, then every new pair with B, and so on. Never list BA after AB.`
    },
    {
      id: 'arap4-mc',
      type: 'multiple-choice' as const,
      content: '**Count the outcomes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A sandwich shop offers 4 kinds of bread, 5 kinds of meat and 2 kinds of cheese. How many different sandwiches with one bread, one meat and one cheese are possible?',
            options: ['11', '20', '40', '10'],
            correctAnswer: 2,
            explanation: 'Multiply the choices: $4 \\times 5 \\times 2 = 40$ sandwiches. 11 adds the choices instead of multiplying, 20 leaves out the cheese choice, and 10 leaves out the bread choice.'
          },
          {
            question: 'Five runners finish a race with no ties. In how many different orders can they finish?',
            options: ['120', '25', '15', '20'],
            correctAnswer: 0,
            explanation: 'Five runners can finish first, then 4 are left for second, and so on: $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. 15 adds $5 + 4 + 3 + 2 + 1$ instead of multiplying, 20 stops after first and second place, and 25 gives every place all 5 runners, as if one runner could finish twice.'
          },
          {
            question: 'Two recruits from a team of 7 will be chosen as a buddy pair for a safety check. How many different pairs are possible?',
            options: ['42', '14', '49', '21'],
            correctAnswer: 3,
            explanation: 'A buddy pair is the same no matter who is named first, so divide by 2: $\\frac{7 \\times 6}{2} = 21$. 42 counts every pair twice (once in each order), 14 multiplies 7 by 2, and 49 pairs each recruit with all 7, including himself or herself.'
          }
        ]
      }
    },
    {
      id: 'arap4-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️

**1)** A parking tag has 2 letters followed by 1 digit. Each letter can be A, B, C, D or E (letters may repeat), and the digit can be 0 through 9. How many different tags are possible? (number only)

**2)** A coach picks 2 co-captains from 9 players. Both co-captains have the same role. How many different pairs of co-captains are possible? (number only)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['250', '36'],
        hint1: 'For (1), draw 3 blanks: letter, letter, digit. Write the number of choices in each.',
        hint2: 'For (1), letters may repeat, so both letter blanks have 5 choices.',
        hint3: 'For (2), swapping the two co-captains gives the same pair, so divide $9 \\times 8$ by 2.',
        explanation: '(1) $5 \\times 5 \\times 10 = 250$ tags. (2) $\\frac{9 \\times 8}{2} = \\frac{72}{2} = 36$ pairs. Using 72 would count each pair twice.'
      }
    },
    {
      id: 'arap4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Does order matter?** 🔽 Each question uses a group of 5.',
      exercise: {
        dropdowns: [
          {
            label: 'Ways to choose a president and a vice president from 5 candidates:',
            options: ['10', '20', '25', '5'],
            correctAnswer: 1
          },
          {
            label: 'Ways to choose 2 of 5 volunteers to serve on a committee with the same role:',
            options: ['20', '10', '25', '5'],
            correctAnswer: 1
          },
          {
            label: 'Number of 2-letter codes from 5 letters when a letter may repeat:',
            options: ['10', '20', '5', '25'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['20', '10', '25'],
        hint1: 'Different jobs (president, vice president) mean order matters.',
        hint2: 'The same role means swapping the two people gives the same outcome, so divide by 2.',
        hint3: 'If a letter may repeat, the second blank still has all 5 choices.',
        explanation: 'President and vice president: $5 \\times 4 = 20$. Same-role committee: $\\frac{5 \\times 4}{2} = 10$. Codes with repeats: $5 \\times 5 = 25$. The three answers differ only because of whether order matters and whether repeats are allowed.'
      }
    },
    {
      id: 'arap4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Counting principle:** one blank per choice, write the number of options in each, **multiply**
- **No repeats:** each blank has one fewer choice ($10 \\times 9 \\times 8$)
- **Lining up a group:** $3! = 6$, $4! = 24$, $5! = 120$
- **Pairs where order does not matter:** $\\frac{n(n - 1)}{2}$. If swapping makes a new outcome (different jobs), do not divide by 2
- **List systematically** (AB, AC, AD, BC, ...) to check small cases

> **Up Next:** Part 5 — basic probability: favorable over total, "not," "and," and drawing without replacement.`
    }
  ]
};
