export const actStatProbPart5Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p5-intro',
      type: 'text' as const,
      content: `
# 🧩 Combinations and Permutations

**Part 5 of 7 — Does Order Matter? Counting Selections and Using Them in Probability**

Part 3 counted outcomes by filling slots. This part handles the case where you **select** some items from a larger group, and the one question that decides everything: **does the order of the selection matter?**

## The Order Test

Ask: *if I swap two of the chosen items, do I get a different outcome?*

| Situation | Swap two chosen items… | Type |
|-----------|------------------------|------|
| President, then vice president | Different officers → different outcome | **Permutation** |
| Gold, silver, bronze medals | Different medals → different outcome | **Permutation** |
| A 4-digit code | 1234 is not 4321 | **Permutation** |
| A 3-person committee (equal roles) | Same committee | **Combination** |
| Choosing 3 pizza toppings | Same pizza | **Combination** |
| A hand of 5 cards | Same hand | **Combination** |

Key signal words: **roles, ranks, positions, arrangements, codes** → order matters. **Groups, teams, committees, sets, selections** with no distinct roles → order does not matter.

## Permutations: Ordered Selections

The number of ways to choose and arrange $r$ items from $n$ different items is

$$P(n, r) = \\frac{n!}{(n - r)!} = n \\times (n - 1) \\times \\cdots \\text{ (} r \\text{ factors)}$$

**Example:** gold, silver, and bronze among 8 runners: $P(8, 3) = 8 \\times 7 \\times 6 = 336$. This is just the slot method — 8 choices, then 7, then 6.

## Combinations: Unordered Selections

The number of ways to choose $r$ items from $n$ when order does not matter is

$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!\\,(n - r)!} = \\frac{P(n, r)}{r!}$$

**Why divide by $r!$?** Each group of $r$ items appears $r!$ times in the ordered count, once for each way of arranging it. A 3-person committee from 7 volunteers: $\\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = \\frac{210}{6} = 35$.

| Choose from 10 | Ordered: $P(10, r)$ | Unordered: $C(10, r)$ |
|----------------|---------------------|------------------------|
| $r = 2$ | 90 | 45 |
| $r = 3$ | 720 | 120 |
| $r = 4$ | 5,040 | 210 |

**Symmetry shortcut:** $C(n, r) = C(n, n - r)$. Choosing 7 questions to answer out of 10 is the same as choosing the 3 to skip: $C(10, 7) = C(10, 3) = 120$.

**Handshakes and pairs:** if each of 8 people shakes hands with every other person once, the number of handshakes is $C(8, 2) = \\frac{8 \\times 7}{2} = 28$. Dividing by 2 removes the double count (A with B is the same handshake as B with A).

Most ACT-approved calculators have **nPr** and **nCr** keys, but it is often faster to compute small cases by hand.

## Selections from Separate Groups

When you choose from two groups at once, count each group's choices and **multiply**:

$$\\text{2 of 6 boys and 2 of 5 girls} = C(6, 2) \\times C(5, 2) = 15 \\times 10 = 150$$

## Mixed Roles

Some selections have one special role inside an otherwise equal group. A 3-person team from 8 people with one designated captain: choose the captain (8 ways), then the other 2 members ($C(7, 2) = 21$): $8 \\times 21 = 168$.

## Arrangements with Repeated Letters

To arrange letters when some repeat, divide by the factorial of each repeat count: BOOK has $\\frac{4!}{2!} = 12$ arrangements, because swapping the two O's does not create a new word.

## Combinations in Probability

For "choose a group at random" probability questions, both the numerator and denominator are combinations:

$$P = \\frac{\\text{number of favorable groups}}{\\text{number of possible groups}}$$

**Example:** 2 of 7 students (4 boys, 3 girls) are chosen at random. $P(\\text{both girls}) = \\frac{C(3, 2)}{C(7, 2)} = \\frac{3}{21} = \\frac{1}{7}$. The without-replacement method from Part 4 gives the same answer: $\\frac{3}{7} \\times \\frac{2}{6} = \\frac{1}{7}$.

**Consistency rule:** if the denominator counts unordered groups, the numerator must too. Mixing an ordered count with an unordered count gives an answer off by a factor of $r!$.
      `
    },
    {
      id: 'act-stat-p5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Officers versus a committee</b></summary>

**Question:** A club has 10 members. (a) In how many ways can a president, a vice president, and a treasurer be chosen? (b) In how many ways can a 3-member planning committee be chosen?

**Solution:**
1. (a) Roles differ, so order matters: $P(10, 3) = 10 \\times 9 \\times 8 = 720$.
2. (b) No roles, so order does not matter: $C(10, 3) = \\frac{720}{3!} = \\frac{720}{6} = 120$. ✓

**Check:** each committee of 3 people can be turned into officers in $3! = 6$ ways, which is exactly why the ordered count is 6 times larger.
</details>

<details>
<summary><b>Example 2: A probability built from combinations</b></summary>

**Question:** A group has 4 boys and 5 girls. Three people are chosen at random. What is the probability that exactly 2 of them are girls?

**Solution:**
1. Possible groups: $C(9, 3) = \\frac{9 \\times 8 \\times 7}{6} = 84$.
2. Favorable groups: 2 of the 5 girls **and** 1 of the 4 boys: $C(5, 2) \\times C(4, 1) = 10 \\times 4 = 40$.
3. Probability: $\\frac{40}{84} = \\frac{10}{21}$. ✓

**ACT trap:** using only $C(5, 2) = 10$ in the numerator forgets that the third person must be a boy.
</details>
      `
    },
    {
      id: 'act-stat-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Order or No Order?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `From 7 students, a president, a vice president, and a secretary will be chosen, and no student may hold two offices. How many different sets of officers are possible?`,
            options: [`35`, `210`, `42`, `21`],
            correctAnswer: 1,
            explanation: `The offices are different roles, so order matters: $7 \\times 6 \\times 5 = 210$. The value 35 is $C(7, 3)$, which counts groups of 3 with no roles. The value 42 is $7 \\times 6$, which fills only two of the three offices, and 21 is $7 \\times 3$, which is not a counting rule.`
          },
          {
            question: `At a meeting, each of 8 people shakes hands exactly once with each of the other people. How many handshakes take place?`,
            options: [`56`, `64`, `16`, `28`],
            correctAnswer: 3,
            explanation: `A handshake is an unordered pair, so the count is $C(8, 2) = \\frac{8 \\times 7}{2} = 28$. The value 56 is $8 \\times 7$, which counts each handshake twice (once from each person). The value 64 is $8^2$, which includes people shaking their own hands, and 16 is $8 \\times 2$.`
          },
          {
            question: `Which situation is counted with a combination rather than a permutation?`,
            options: [
              `Giving 3 different prizes to 3 of 10 entrants`,
              `Setting a 4-digit code for a locker`,
              `Choosing 2 of 6 novels to pack`,
              `Ranking the top 3 of 8 films in order`
            ],
            correctAnswer: 2,
            explanation: `Two novels packed in a bag are the same selection no matter which was picked first, so order does not matter. Different prizes make each winner's prize part of the outcome, a locker code changes when its digits are rearranged, and a ranking is an ordered list, so those three are permutations.`
          },
          {
            question: `A committee will have 2 of 6 boys and 2 of 5 girls. How many different committees are possible?`,
            options: [`150`, `25`, `330`, `600`],
            correctAnswer: 0,
            explanation: `Choose each part separately and multiply: $C(6, 2) \\times C(5, 2) = 15 \\times 10 = 150$. Adding 15 and 10 gives 25, which counts choosing boys OR girls. The value 330 is $C(11, 4)$, which ignores the requirement of 2 of each, and 600 is $30 \\times 20$, the ordered counts.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p5-input',
      type: 'input-boxes' as const,
      content: `
**Compute the Count** 🧮

1) How many 3-person groups can be chosen from 6 people?

2) In how many ways can a first-place and a second-place winner be chosen from 6 finalists?

3) A sundae comes with any 4 different toppings chosen from 6. How many topping combinations are possible?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '30', '15'],
        hint1: '$C(6, 3) = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1}$.',
        hint2: 'Two different places: order matters.',
        hint3: 'Choosing 4 to use is the same as choosing 2 to leave out.',
        explanation: '1) $C(6, 3) = \\frac{120}{6} = 20$. 2) $P(6, 2) = 6 \\times 5 = 30$. 3) $C(6, 4) = C(6, 2) = \\frac{6 \\times 5}{2} = 15$.'
      }
    },
    {
      id: 'act-stat-p5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | A 3-person committee from 7 volunteers (equal roles)? | $C(7, 3) = 35$ |
| 2 | Gold, silver, and bronze among 8 runners? | $P(8, 3) = 336$ |
| 3 | 2 of 7 students (4 boys, 3 girls) chosen at random. Probability both are girls? | $\\frac{C(3, 2)}{C(7, 2)} = \\frac{3}{21} = \\frac{1}{7}$ |

**ACT Tip:** Find the ordered count with slots first. If order doesn't matter, divide by $r!$ — that one extra step is the whole difference between the two formulas.
      `
    },
    {
      id: 'act-stat-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Selections and Probability** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A jar holds 5 red and 3 blue marbles. Two marbles are drawn at random at the same time. What is the probability that both are red?`,
            options: [`$\\frac{25}{64}$`, `$\\frac{5}{8}$`, `$\\frac{5}{28}$`, `$\\frac{5}{14}$`],
            correctAnswer: 3,
            explanation: `There are $C(8, 2) = 28$ possible pairs and $C(5, 2) = 10$ red pairs, so the probability is $\\frac{10}{28} = \\frac{5}{14}$. The value $\\frac{25}{64}$ treats the draws as if the first marble were replaced. The value $\\frac{5}{8}$ is the chance that one marble is red, and $\\frac{5}{28} = \\frac{10}{56}$ divides unordered red pairs by ordered pairs.`
          },
          {
            question: `How many different arrangements of the letters in the word BOOK are possible?`,
            options: [`12`, `24`, `6`, `4`],
            correctAnswer: 0,
            explanation: `Four letters can be arranged in $4! = 24$ ways, but swapping the two O's gives the same word, so divide by $2! = 2$ to get 12. The value 24 treats the two O's as different letters. The value 6 is $3!$, which drops a letter, and 4 is just the number of letters.`
          },
          {
            question: `A student must answer 7 of the 10 questions on an exam, in any order. How many different sets of 7 questions can the student choose?`,
            options: [`604,800`, `120`, `1,024`, `5,040`],
            correctAnswer: 1,
            explanation: `The set of questions answered is unordered, so the count is $C(10, 7) = C(10, 3) = \\frac{10 \\times 9 \\times 8}{6} = 120$. The value 604,800 is $P(10, 7)$, which counts the order in which questions are answered. The value 5,040 is $7!$, the number of orders for 7 questions already chosen, and 1,024 is $2^{10}$, which counts every possible subset of questions, of any size.`
          },
          {
            question: `A 3-person team will be chosen from 8 people, and one of the 3 will be named team captain. How many different captained teams are possible?`,
            options: [`56`, `21`, `168`, `24`],
            correctAnswer: 2,
            explanation: `Choose the captain (8 ways), then the 2 other members from the remaining 7 ($C(7, 2) = 21$): $8 \\times 21 = 168$. The value 56 is $C(8, 3)$, which forgets to name a captain. The value 21 is $C(7, 2)$ alone, which picks the other members but forgets that the captain can be any of 8 people, and 24 is $8 \\times 3$.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **The order test:** swap two chosen items. A different outcome → permutation; the same outcome → combination.
- $P(n, r) = \\frac{n!}{(n - r)!}$ (slots: $n$, then $n - 1$, …, for $r$ slots). $C(n, r) = \\frac{P(n, r)}{r!}$.
- $C(n, r) = C(n, n - r)$; pairs from $n$ people: $C(n, 2) = \\frac{n(n - 1)}{2}$.
- **Separate groups:** multiply the combinations for each group. **One special role:** choose that role first.
- **Repeated letters:** divide $n!$ by the factorial of each repeat count.
- **Group probability:** $\\frac{\\text{favorable groups}}{\\text{possible groups}}$, counting both the same way (both unordered or both ordered).
      `
    }
  ]
};
