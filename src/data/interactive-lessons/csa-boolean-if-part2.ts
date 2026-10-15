export const csaBooleanIfPart2Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csaboole2-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 2 of 7 — Algorithms, Flow of Control, and Boolean Values**

---

Part 1 listed the operators. This part steps back to ask what a decision is for. CED Topic 2.1 describes every algorithm as a mix of three building blocks, and CED Topic 2.2 explains the values that drive decisions: Boolean expressions, which are always either \`true\` or \`false\`.

| In this part |
|---|
| Sequencing, selection, and repetition |
| Turning a plain-language algorithm into code |
| Boolean expressions as values you can store |
| Comparing int and double values |
| Comparisons that do not compile |
      `
    },
    {
      id: 'csaboole2-blocks',
      type: 'text' as const,
      content: `
## Three Building Blocks (CED Topic 2.1)

An **algorithm** is a step-by-step process for solving a problem. Every algorithm, no matter how long, is built from three kinds of steps.

| Building block | What it means | Java statements |
|---|---|---|
| **Sequencing** | Steps run in order, one after another | Ordinary statements, top to bottom |
| **Selection** | A condition decides whether a step runs | \`if\`, \`if\`-\`else\` |
| **Repetition** | A step runs again and again while a condition holds | \`while\`, \`for\` |

**Selection** and **repetition** both use a Boolean expression to change the **flow of control**, the order in which statements execute.

## From Plain Language to Code

A library charges 25 cents for each day a book is late, but the fine is capped at 500 cents.

1. Compute how many days late the book is.
2. If it is late, the fine is 25 cents per day.
3. If the fine is more than 500, lower it to 500.

\`\`\`java
int daysLate = returned - due;
int fine = 0;
if (daysLate > 0) {
    fine = daysLate * 25;
}
if (fine > 500) {
    fine = 500;
}
\`\`\`

| \`due\` | \`returned\` | \`daysLate\` | \`fine\` after step 2 | \`fine\` after step 3 |
|---|---|---|---|---|
| 10 | 9 | -1 | 0 | 0 |
| 10 | 14 | 4 | 100 | 100 |
| 10 | 40 | 30 | 750 | 500 |

> 🔑 **Order is part of the algorithm.** Sequencing means step 3 must come after step 2. If the cap check ran first, it would test a fine of 0, do nothing, and then step 2 would set the fine to 750.
      `
    },
    {
      id: 'csaboole2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the library fine code, the two if statements are swapped so that the cap check runs first. What is fine when daysLate is 30?',
            options: [
              '750',
              '25',
              '0',
              '30'
            ],
            correctAnswer: 0,
            explanation: 'The cap check runs while fine is still 0, so it does nothing. The second if then sets fine to 30 * 25, which is 750, and nothing lowers it afterward.'
          },
          {
            question: 'Which task needs repetition, not just selection?',
            options: [
              'Adding up the points a team scored in every game',
              'Charging a late fee if one book comes back after its due date',
              'Printing "pass" for one score of 70 or more and "retry" otherwise',
              'Lowering a single fine to 500 cents if it is greater than 500'
            ],
            correctAnswer: 0,
            explanation: 'Adding up every game repeats the same step once per game. The other tasks each make one decision about one value, so a single if or if-else handles them.'
          }
        ]
      }
    },
    {
      id: 'csaboole2-values',
      type: 'text' as const,
      content: `
## Boolean Expressions Are Values (CED Topic 2.2)

A Boolean expression evaluates to \`true\` or \`false\`, and that value can be stored in a \`boolean\` variable just like a number is stored in an \`int\`.

\`\`\`java
int age = 15;
boolean canVote = age >= 18;    // false
boolean isTeen = age >= 13;     // true
boolean isFifteen = age == 15;  // true
\`\`\`

Arithmetic happens **before** comparison, so \`age + 3 >= 18\` means \`(age + 3) >= 18\`, which is \`true\`.

### Comparing int and double Values
When an \`int\` is compared with a \`double\`, the \`int\` is converted to a \`double\` first.

| Expression | Steps | Value |
|---|---|---|
| \`7 == 7.0\` | 7 becomes 7.0 | \`true\` |
| \`7 / 2 == 3.5\` | int division gives 3, then 3.0 == 3.5 | \`false\` |
| \`7 / 2.0 == 3.5\` | 7 / 2.0 is 3.5 | \`true\` |
| \`0.1 + 0.2 == 0.3\` | round-off makes the sum 0.30000000000000004 | \`false\` |

Because of round-off error, testing computed \`double\` values with \`==\` is risky. Check whether they are close instead: \`Math.abs(a - b) < 0.000001\`.

### Comparisons That Do Not Compile

| Expression | Why it is rejected |
|---|---|
| \`"apple" < "banana"\` | \`<\`, \`>\`, \`<=\` and \`>=\` work only on numbers; Strings use \`compareTo\` |
| \`true > false\` | booleans have no order; only \`==\` and \`!=\` apply |
| \`1 < x < 10\` | \`1 < x\` is a boolean, and a boolean cannot be compared with \`< 10\` |
| \`"7" == 7\` | a String and an int cannot be compared with \`==\` |
      `
    },
    {
      id: 'csaboole2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**True, False, or Error?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The expression 9 / 2 == 4.5 evaluates to ___',
            options: ['false', 'true', '4.5', 'a compile error']
          },
          {
            label: 'The expression 9 / 2.0 == 4.5 evaluates to ___',
            options: ['true', 'false', '4', 'a compile error']
          },
          {
            label: 'The statement boolean b = "cat" < "dog"; ___',
            options: ['does not compile', 'stores true', 'stores false', 'throws an exception']
          }
        ],
        correctAnswers: ['false', 'true', 'does not compile'],
        hint1: '9 / 2 is int division.',
        hint2: 'One operand is a double, so the division keeps the fraction.',
        hint3: 'Which types can the < operator compare?',
        explanation: '9 / 2 is 4, and 4.0 is not 4.5. 9 / 2.0 is 4.5 exactly. The < operator does not accept String operands, so the compiler rejects the statement.'
      }
    },
    {
      id: 'csaboole2-worked',
      type: 'text' as const,
      content: `
## Worked Example: Evaluating Boolean Assignments

\`\`\`java
int a = 9;
int b = 4;
double avg = (a + b) / 2;
boolean r1 = a % b == 1;
boolean r2 = avg > 6;
boolean r3 = a / b * b == a;
boolean r4 = avg == 6.5;
\`\`\`

| Line | Work | Value |
|---|---|---|
| \`avg\` | 13 / 2 is int division, 6, stored as 6.0 | \`6.0\` |
| \`r1\` | 9 % 4 is 1, and 1 == 1 | \`true\` |
| \`r2\` | 6.0 > 6 compares 6.0 with 6.0 | \`false\` |
| \`r3\` | 9 / 4 is 2, times 4 is 8, and 8 == 9 fails | \`false\` |
| \`r4\` | 6.0 == 6.5 | \`false\` |

The test in \`r3\` is a divisibility check in disguise. \`a / b * b\` throws away the remainder, so it equals \`a\` only when \`b\` divides \`a\` evenly. The clearer form is \`a % b == 0\`.

> 🎯 **AP Connection:** Many multiple-choice answers hinge on one int division hidden inside a comparison. Before you compare, write down the type and the value of each side.
      `
    },
    {
      id: 'csaboole2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Building blocks | Sequencing, selection and repetition; order matters |
| Boolean expression | Evaluates to \`true\` or \`false\` and can be stored |
| Precedence | Arithmetic first, then the comparison |
| int vs double | The int is converted before comparing |
| Computed doubles | Compare closeness with \`Math.abs(a - b) < tolerance\` |
| Not allowed | \`<\` on Strings or booleans, chained \`1 < x < 10\` |

**Next:** Part 3 puts Boolean expressions to work in one-way and two-way \`if\` statements.
      `
    },
    {
      id: 'csaboole2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int x = 12;
double y = 3.0;
boolean p = x / 5 == 2;
boolean q = x / y > 4;
boolean r = x % 4 != 0;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What are the values of p, q and r after Segment A runs?',
            options: [
              'p true, q false, r false',
              'p false, q false, r false',
              'p true, q true, r false',
              'p true, q false, r true'
            ],
            correctAnswer: 0,
            explanation: '12 / 5 is int division, 2, so p is true. 12 / 3.0 is 4.0, which is not greater than 4, so q is false, and 12 % 4 is 0, so r is false.'
          },
          {
            question: 'Which expression is true exactly when the int variable n is a multiple of 3?',
            options: [
              'n % 3 == 0',
              'n / 3 == 0',
              'n % 3 == 1',
              'n / 3 == n % 3'
            ],
            correctAnswer: 0,
            explanation: 'A multiple of 3 leaves remainder 0 when divided by 3. The test n / 3 == 0 is true only for 0, 1 and 2, and a remainder of 1 means n is not a multiple.'
          },
          {
            question: 'For an int variable x, which expression does not compile?',
            options: [
              '1 < x < 10',
              'x > 1 && x < 10',
              'x / 2 == 2.5',
              '!(x > 1) || x == 5'
            ],
            correctAnswer: 0,
            explanation: 'Java evaluates 1 < x to a boolean, and a boolean cannot be compared with 10 using <. The other expressions are legal: the division one compiles and is simply always false for an int x.'
          }
        ]
      }
    }
  ]
}
