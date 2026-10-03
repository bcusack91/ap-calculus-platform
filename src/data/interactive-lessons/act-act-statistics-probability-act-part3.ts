export const actStatProbPart3Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Counting Principles

**Part 3 of 7 — The Multiplication Principle, Cases, Restrictions, and Arrangements**

Counting questions ask "how many ways?" The ACT rarely requires a formula you cannot rebuild from one idea: **fill the slots and multiply**. Probability questions later in this unit also depend on counting the total number of outcomes, so this part is the foundation for Parts 4 and 5.

## The Multiplication Principle

If one choice can be made in $a$ ways and a second, separate choice can be made in $b$ ways, the pair of choices can be made in $a \\times b$ ways. The rule extends to any number of steps.

**Example:** 4 shirts, 3 pairs of pants, and 2 pairs of shoes make $4 \\times 3 \\times 2 = 24$ outfits. Adding ($4 + 3 + 2 = 9$) is the classic wrong answer: it counts single items, not combinations of items.

## The Slot Method

Draw one blank for each position, write the number of choices for each blank, and multiply.

| Situation | Slots | Count |
|-----------|-------|-------|
| 3-digit code, digits may repeat | $10 \\times 10 \\times 10$ | 1,000 |
| 3-digit code, no repeated digits | $10 \\times 9 \\times 8$ | 720 |
| 3-digit **number** (first digit can't be 0), repeats allowed | $9 \\times 10 \\times 10$ | 900 |
| 2 different letters, then 3 digits (digits may repeat) | $26 \\times 25 \\times 10 \\times 10 \\times 10$ | 650,000 |

**Read the repetition rule carefully.** "Different," "distinct," or "no repeats" means each slot has one fewer choice than the slot before it. "May repeat" means every slot has the full set of choices.

## Restrictions Go First

When one slot has a special condition, fill that slot **first**, then fill the rest.

- A 3-digit number with **distinct** digits: the first digit can't be 0 (9 choices), the second can be anything except the first (9 choices, now including 0), the third has 8 choices: $9 \\times 9 \\times 8 = 648$.
- 5 people in a line with Ana **first**: Ana's slot has 1 choice, then $4 \\times 3 \\times 2 \\times 1 = 24$ ways for the rest.

## Arranging Everything: Factorials

The number of ways to arrange $n$ different objects in a row is

$$n! = n \\times (n - 1) \\times \\cdots \\times 2 \\times 1$$

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 |
|-----|---|---|---|---|---|---|
| $n!$ | 1 | 2 | 6 | 24 | 120 | 720 |

So 5 books can stand on a shelf in $5! = 120$ orders, and the letters of MATH can be arranged in $4! = 24$ ways. By definition, $0! = 1$.

## "Or" Means Add (When the Cases Don't Overlap)

If the outcomes split into separate cases that can't happen together, count each case and **add**.

**Example:** From town A to town C, a driver can go through town B (4 roads from A to B, then 3 roads from B to C) or take one of 2 direct highways. Through B: $4 \\times 3 = 12$ routes. Direct: 2 routes. Total: $12 + 2 = 14$.

Rule of thumb: **"and then"** (steps in sequence) → multiply; **"either…or"** (separate cases) → add.

## Yes/No Choices: Powers of 2

When each of $n$ items is either included or not, each item is a 2-way choice, so there are $2^n$ possible selections (including selecting nothing).

- 4 coin flips: $2^4 = 16$ possible heads/tails sequences.
- 5 optional pizza toppings: $2^5 = 32$ topping choices, including a plain pizza.

## "At Least One": Count the Opposite

Counting "at least one" directly means adding many cases. Instead, use

$$\\text{(at least one)} = \\text{(total)} - \\text{(none)}$$

**Example:** 4-digit PINs with at least one repeated digit: all PINs ($10^4 = 10{,}000$) minus PINs with no repeats ($10 \\times 9 \\times 8 \\times 7 = 5{,}040$) = 4,960.

## Small Cases: Just List Them

If the total is small (under about 15 outcomes), an organized list or tree diagram is fast and safe — and it is a good way to check a formula you are unsure of.
      `
    },
    {
      id: 'act-stat-p3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A code with two different rules</b></summary>

**Question:** A locker code is 3 letters followed by 2 digits. The letters must all be different, and the first digit cannot be 0 (digits may repeat). How many codes are possible?

**Solution:**
1. Letters: $26 \\times 25 \\times 24 = 15{,}600$.
2. Digits: first digit 9 choices (1–9), second digit 10 choices: $9 \\times 10 = 90$.
3. Multiply the two parts: $15{,}600 \\times 90 = 1{,}404{,}000$. ✓

**Check:** each restriction only lowers one factor. If letters could repeat you would use $26^3$; if 0 were allowed first you would use $10 \\times 10$.
</details>

<details>
<summary><b>Example 2: At least one repeat</b></summary>

**Question:** How many 4-digit PINs (digits 0–9, leading 0 allowed) contain at least one repeated digit?

**Solution:**
1. Total PINs: $10^4 = 10{,}000$.
2. PINs with all different digits: $10 \\times 9 \\times 8 \\times 7 = 5{,}040$.
3. At least one repeat: $10{,}000 - 5{,}040 = 4{,}960$. ✓

**Why not count directly?** "At least one repeat" includes exactly one pair, two pairs, three of a kind, and four of a kind — four separate cases. The complement is one clean calculation.
</details>
      `
    },
    {
      id: 'act-stat-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Fill the Slots** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A dinner special includes 1 of 3 appetizers, 1 of 5 entrees, and 1 of 4 desserts. How many different dinner specials are possible?`,
            options: [`12`, `15`, `60`, `64`],
            correctAnswer: 2,
            explanation: `Each course is a separate choice, so multiply: $3 \\times 5 \\times 4 = 60$. Adding the choices gives 12, which counts single dishes rather than full dinners. The value 15 leaves out the dessert choice, and 64 is $4^3$, which treats every course as having 4 options.`
          },
          {
            question: `In how many different orders can 5 different books be placed side by side on a shelf?`,
            options: [`120`, `15`, `25`, `60`],
            correctAnswer: 0,
            explanation: `There are 5 choices for the first spot, 4 for the second, and so on: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. Adding $5 + 4 + 3 + 2 + 1$ gives 15, and $5 \\times 5 = 25$ has no counting meaning here. The value 60 is $5 \\times 4 \\times 3$, which fills only 3 of the 5 spots.`
          },
          {
            question: `How many 3-digit whole numbers are there (from 100 through 999)?`,
            options: [`648`, `720`, `1,000`, `900`],
            correctAnswer: 3,
            explanation: `The first digit can be 1 through 9 (9 choices) and the other two digits can be anything (10 choices each): $9 \\times 10 \\times 10 = 900$. The value 1,000 lets the first digit be 0, which would make it a 2-digit or 1-digit number. The values 648 and 720 forbid repeated digits, which the question never requires.`
          },
          {
            question: `From town A to town C, a driver can go through town B, using any of 4 roads from A to B and then any of 3 roads from B to C, or take any of 2 direct highways from A to C. How many different routes are there?`,
            options: [`9`, `14`, `24`, `12`],
            correctAnswer: 1,
            explanation: `Routes through B are two steps in sequence, so multiply: $4 \\times 3 = 12$. The direct highways are a separate case, so add them: $12 + 2 = 14$. Stopping at 12 leaves out the highways, $4 + 3 + 2 = 9$ adds everything, and $4 \\times 3 \\times 2 = 24$ treats the highways as a third step every driver must take.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p3-input',
      type: 'input-boxes' as const,
      content: `
**Count It** 🧮

1) In how many ways can the letters of the word MATH be arranged?

2) A password is 1 letter from A through E followed by 2 digits that must be different from each other. How many passwords are possible?

3) Six runners are in a race. In how many ways can first place and second place be awarded (no ties)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '450', '30'],
        hint1: 'Four different letters in four slots: $4!$.',
        hint2: '5 choices for the letter, then 10 and 9 for the digits.',
        hint3: '6 choices for first place, then 5 for second.',
        explanation: '1) $4! = 24$. 2) $5 \\times 10 \\times 9 = 450$. 3) $6 \\times 5 = 30$ because first and second place are different positions.'
      }
    },
    {
      id: 'act-stat-p3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | A license plate is 2 letters (repeats allowed) then 4 digits (repeats allowed). How many plates? | $26^2 \\times 10^4 = 6{,}760{,}000$ |
| 2 | How many 3-digit numbers have all odd digits? | $5 \\times 5 \\times 5 = 125$ |
| 3 | A sandwich uses 1 of 3 breads and 1 of 4 meats, or it is one of 2 vegetarian wraps. How many options? | $3 \\times 4 + 2 = 14$ |

**ACT Tip:** Write the slots before you write any numbers. Most counting mistakes come from forgetting a slot or giving a restricted slot too many choices.
      `
    },
    {
      id: 'act-stat-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Restrictions and Complements** 📋
      `,
      exercise: {
        questions: [
          {
            question: `In how many ways can 5 people stand in a line if Ana must stand first?`,
            options: [`120`, `24`, `96`, `20`],
            correctAnswer: 1,
            explanation: `Ana's position is fixed, so only the other 4 people are arranged: $4! = 24$. The value 120 arranges all 5 people with no restriction, and 96 is $120 - 24$, the number of lines in which Ana is NOT first. The value 20 is $5 \\times 4$, which fills only two spots.`
          },
          {
            question: `How many 3-letter strings (using the 26 letters A to Z) contain at least one repeated letter?`,
            options: [`15,600`, `17,576`, `650`, `1,976`],
            correctAnswer: 3,
            explanation: `Count the complement: all strings, $26^3 = 17{,}576$, minus strings with three different letters, $26 \\times 25 \\times 24 = 15{,}600$, leaves $1{,}976$. The value 17,576 is every string, and 15,600 is the strings with NO repeats, the opposite of what was asked. The value 650 is $26 \\times 25$, which fills only two positions.`
          },
          {
            question: `A coin is flipped 4 times, and the sequence of heads and tails is recorded. How many different sequences are possible?`,
            options: [`16`, `8`, `4`, `24`],
            correctAnswer: 0,
            explanation: `Each flip has 2 outcomes, so there are $2 \\times 2 \\times 2 \\times 2 = 2^4 = 16$ sequences. The value 8 is $2 \\times 4$, which multiplies by the number of flips instead of multiplying 2 by itself once per flip, and 4 is just the number of flips. The value 24 is $4!$, which arranges 4 different objects, but the flips each choose between only 2 outcomes.`
          },
          {
            question: `A pizza is made with 1 of 3 crusts, 1 of 2 sauces, and any selection of 5 available toppings (including no toppings at all). How many different pizzas are possible?`,
            options: [`30`, `186`, `192`, `96`],
            correctAnswer: 2,
            explanation: `Each topping is either on or off, giving $2^5 = 32$ topping selections, so there are $3 \\times 2 \\times 32 = 192$ pizzas. The value 186 uses $2^5 - 1 = 31$, which wrongly leaves out the plain pizza. The value 30 allows exactly one topping, and 96 uses $2^4$, as if there were only 4 toppings.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Multiplication principle:** steps in sequence multiply. Draw a slot for each position and write the number of choices in it.
- **Repetition:** "may repeat" keeps every slot full; "different/distinct" drops one choice per slot.
- **Restricted slots first** (no leading 0, a person fixed in a spot), then fill the rest.
- **Arranging $n$ different objects:** $n!$ ways.
- **Separate cases** ("either…or") add; steps within a case multiply.
- **Each item in or out:** $2^n$ selections. **At least one:** total − none.
      `
    }
  ]
};
