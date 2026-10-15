export const csaConditionalsPart4Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csacondi4-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 4 of 7 — Truth Tables, De Morgan's Laws, and Equivalence**

---

CED Topic 2.6 asks you to decide whether two Boolean expressions are **equivalent**, meaning they give the same value for every possible input. Part 1 stated De Morgan's laws. This part shows how to check any claimed equivalence with a truth table, how to negate comparisons, and how to disprove a claim with one counterexample.

| In this part |
|---|
| Building truth tables |
| Proving De Morgan's laws |
| Negating relational operators |
| Counterexamples, tautologies, and contradictions |
      `
    },
    {
      id: 'csacondi4-tables',
      type: 'text' as const,
      content: `
## Building a Truth Table

A truth table lists every combination of inputs. Two variables give 4 rows, three give 8, and n variables give 2 to the power n.

| \`A\` | \`B\` | \`A && B\` | \`A \\|\\| B\` | \`!A\` |
|---|---|---|---|---|
| true | true | true | true | false |
| true | false | false | true | false |
| false | true | false | true | true |
| false | false | false | false | true |

## Proving De Morgan's Law

| \`A\` | \`B\` | \`!(A && B)\` | \`!A \\|\\| !B\` | \`!A && !B\` |
|---|---|---|---|---|
| true | true | false | false | false |
| true | false | true | true | false |
| false | true | true | true | false |
| false | false | true | true | true |

The columns for \`!(A && B)\` and \`!A || !B\` match on all four rows, so they are equivalent. The last column differs from \`!(A && B)\` in two rows, so \`!A && !B\` is **not** equivalent to it. One row where two expressions differ, called a **counterexample**, is enough to prove they are not equivalent.

## Three Variables

| \`A\` | \`B\` | \`C\` | \`A && (B \\|\\| C)\` | \`(A && B) \\|\\| (A && C)\` | \`A \\|\\| (B && C)\` | \`(A \\|\\| B) && C\` |
|---|---|---|---|---|---|---|
| T | T | T | T | T | T | T |
| T | T | F | T | T | T | F |
| T | F | T | T | T | T | T |
| T | F | F | F | F | T | F |
| F | T | T | F | F | T | T |
| F | T | F | F | F | F | F |
| F | F | T | F | F | F | F |
| F | F | F | F | F | F | F |

The first pair matches on all 8 rows. The second pair differs in the second row, A true, B true, C false, so moving the parentheses changed the meaning.
      `
    },
    {
      id: 'csacondi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For which inputs do !(A && B) and !A && !B give different values?',
            options: [
              'Exactly one of A and B is true',
              'A and B are both true',
              'A and B are both false',
              'They agree on every input'
            ],
            correctAnswer: 0,
            explanation: 'The truth table shows the two expressions disagree in the rows where one input is true and the other is false. When both are true the expressions are both false, and when both are false they are both true.'
          },
          {
            question: 'How many rows does a truth table need for an expression with four boolean variables?',
            options: [
              '16',
              '8',
              '4',
              '12'
            ],
            correctAnswer: 0,
            explanation: 'Each variable doubles the number of combinations, so four variables give 2 * 2 * 2 * 2 = 16 rows. Eight rows covers only three variables.'
          }
        ]
      }
    },
    {
      id: 'csacondi4-negate',
      type: 'text' as const,
      content: `
## Negating Comparisons

| Expression | Its negation |
|---|---|
| \`x < y\` | \`x >= y\` |
| \`x <= y\` | \`x > y\` |
| \`x > y\` | \`x <= y\` |
| \`x >= y\` | \`x < y\` |
| \`x == y\` | \`x != y\` |
| \`x != y\` | \`x == y\` |

The negation of \`<\` is \`>=\`, not \`>\`. The negation must cover every case the original did not, including equality.

## De Morgan with Comparisons

Negate each part and swap \`&&\` with \`||\`:

| Original | Step | Result |
|---|---|---|
| \`!(x >= 1 && x <= 10)\` | \`!(x >= 1) \\|\\| !(x <= 10)\` | \`x < 1 \\|\\| x > 10\` |
| \`!(age < 13 \\|\\| age > 19)\` | \`!(age < 13) && !(age > 19)\` | \`age >= 13 && age <= 19\` |
| \`!(s.equals("y") \\|\\| n > 5)\` | \`!s.equals("y") && !(n > 5)\` | \`!s.equals("y") && n <= 5\` |

## Worked Example: Is This Rewrite Correct?

A student replaces the first line with the second:

\`\`\`java
boolean r1 = !(n > 5 && n < 10);
boolean r2 = n <= 5 && n >= 10;
\`\`\`

Try \`n = 3\`. \`r1\` is \`!(false && true)\`, which is true. \`r2\` is \`true && false\`, which is false. One counterexample proves the rewrite is wrong. The student negated both parts but forgot to change \`&&\` to \`||\`, and \`r2\` is now false for every n, because no number is both at most 5 and at least 10.

### Expressions with Fixed Values

| Expression | Value for every input | Name |
|---|---|---|
| \`x > 5 \\|\\| x <= 5\` | always true | tautology |
| \`x > 5 && x <= 5\` | always false | contradiction |
| \`A \\|\\| (A && B)\` | same as \`A\` | the \`&& B\` part never changes the result |
| \`!(!A)\` | same as \`A\` | double negation |
      `
    },
    {
      id: 'csacondi4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Negate and Simplify** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The negation of x < y is ___',
            options: ['x >= y', 'x > y', 'x <= y', 'y < x']
          },
          {
            label: 'The expression x > 5 || x <= 5 is ___',
            options: ['always true', 'always false', 'true only for x = 5', 'true only for x > 5']
          },
          {
            label: 'A truth table for three boolean variables has ___ rows',
            options: ['8', '6', '3', '9']
          }
        ],
        correctAnswers: ['x >= y', 'always true', '8'],
        hint1: 'The negation must include the case x == y.',
        hint2: 'Every int is either greater than 5 or at most 5.',
        hint3: 'Each variable doubles the count.',
        explanation: 'x < y fails exactly when x >= y. Every int satisfies one side of x > 5 || x <= 5, so it is a tautology. Three variables give 2 * 2 * 2 = 8 rows.'
      }
    },
    {
      id: 'csacondi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply De Morgan** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression is equivalent to !(x > 3 || y <= 0)?',
            options: [
              'x <= 3 && y > 0',
              'x <= 3 || y > 0',
              'x < 3 && y > 0',
              'x <= 3 && y >= 0'
            ],
            correctAnswer: 0,
            explanation: 'De Morgan turns the || into && and negates each part: the negation of x > 3 is x <= 3, and the negation of y <= 0 is y > 0. Using < 3 drops the case x == 3, and y >= 0 wrongly keeps y == 0.'
          },
          {
            question: 'Which expression is equivalent to A || (A && B)?',
            options: [
              'A',
              'A && B',
              'A || B',
              '!A || B'
            ],
            correctAnswer: 0,
            explanation: 'When A is true, both expressions are true, and when A is false, A && B is false too, so the whole expression is false. The value always matches A, and the counterexample A false, B true rules out A || B.'
          },
          {
            question: 'Which input shows that !(a == b && c == d) is not equivalent to a != b && c != d?',
            options: [
              'a = 1, b = 2, c = 3, d = 3',
              'a = 1, b = 1, c = 3, d = 3',
              'a = 1, b = 2, c = 3, d = 4',
              'a = 4, b = 2, c = 1, d = 5'
            ],
            correctAnswer: 0,
            explanation: 'With a != b but c == d, the first expression is !(false && true), which is true, while the second is true && false, which is false. The other inputs make the two expressions agree.'
          }
        ]
      }
    },
    {
      id: 'csacondi4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Type the value of \`!(true && !false)\`.

2) In a two-variable truth table, in how many rows is \`A || B\` true?

3) For \`int n = 7;\`, type the value of \`!(n > 5 && n < 10)\`.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['false', '3', 'false'],
        hint1: 'Evaluate !false first.',
        hint2: 'Only one row has both inputs false.',
        hint3: 'Is 7 between 5 and 10?',
        explanation: '!false is true, true && true is true, and its negation is false. A || B is false only when both inputs are false, so it is true in 3 of the 4 rows. 7 is between 5 and 10, so the inner && is true and its negation is false.'
      }
    }
  ]
}
