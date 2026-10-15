export const csaConditionalsPart3Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csacondi3-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 3 of 7 — Nested Decisions and Their Compound Equivalents**

---

A **nested** if statement is an if inside the body of another if (CED Topic 2.4). Nesting lets one decision depend on another. This part traces nested decisions path by path, shows when nesting can be rewritten with \`&&\`, and builds a classic exam method: the largest of three values.

| In this part |
|---|
| Nested ifs as decision trees |
| Nesting vs. \`&&\` |
| Using braces to control which if an else belongs to |
| Largest of three, two ways, and a tie bug |
      `
    },
    {
      id: 'csacondi3-trees',
      type: 'text' as const,
      content: `
## Nested ifs as Decision Trees

\`\`\`java
int discount;
if (member) {
    if (total >= 50) {
        discount = 10;
    } else {
        discount = 5;
    }
} else {
    if (total >= 100) {
        discount = 5;
    } else {
        discount = 0;
    }
}
\`\`\`

Two yes-or-no questions give **four paths**. List every path with an input that reaches it:

| \`member\` | \`total\` | Path | \`discount\` |
|---|---|---|---|
| true | 60 | member, at least 50 | 10 |
| true | 30 | member, under 50 | 5 |
| false | 120 | non-member, at least 100 | 5 |
| false | 80 | non-member, under 100 | 0 |

## Nesting vs. &&

When neither if has an \`else\`, nesting is the same as \`&&\`:

\`\`\`java
if (a) {
    if (b) {
        System.out.print("X");
    }
}
// same as
if (a && b) {
    System.out.print("X");
}
\`\`\`

Once an \`else\` is involved, keep track of which condition it belongs to:

\`\`\`java
if (a) {
    if (b) {
        System.out.print("X");
    } else {
        System.out.print("Y");
    }
}
\`\`\`

\`Y\` prints only when \`a\` is true and \`b\` is false. The flat version is \`if (a && b) {...X...} else if (a) {...Y...}\`. Writing \`if (a && b) {...X...} else {...Y...}\` is **not** the same, because it also prints \`Y\` whenever \`a\` is false.

## Braces Decide Where an else Belongs

Part 1 showed that, without braces, an \`else\` pairs with the nearest unmatched \`if\`. To attach it to the **outer** if, close the inner if with a brace first:

\`\`\`java
if (x > 0) {
    if (y > 0) {
        System.out.println("both positive");
    }
} else {
    System.out.println("x is not positive");
}
\`\`\`
      `
    },
    {
      id: 'csacondi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the discount code, what is discount when member is false and total is 100?',
            options: [
              '5',
              '0',
              '10',
              '15'
            ],
            correctAnswer: 0,
            explanation: 'A non-member reaches the outer else, and 100 >= 100 is true, so discount is 5. A discount of 0 would need a total under 100, and 10 is for members only.'
          },
          {
            question: 'Which code is equivalent to if (a) { if (b) { X } else { Y } } for every combination of a and b?',
            options: [
              'if (a && b) { X } else if (a) { Y }',
              'if (a && b) { X } else { Y }',
              'if (a || b) { X } else { Y }',
              'if (b) { X } else if (a) { Y }'
            ],
            correctAnswer: 0,
            explanation: 'Y must run only when a is true and b is false, and else if (a) reaches exactly that case after a && b fails. A plain else runs Y even when a is false, the || version runs X when only b is true, and testing b alone runs X even when a is false.'
          }
        ]
      }
    },
    {
      id: 'csacondi3-largest',
      type: 'text' as const,
      content: `
## Worked Example: Largest of Three

\`Math.max\` is not on the AP Java Quick Reference, so exam questions expect you to build this with if statements.

**Version 1: nested decisions.**

\`\`\`java
int big;
if (a >= b) {
    if (a >= c) {
        big = a;
    } else {
        big = c;
    }
} else {
    if (b >= c) {
        big = b;
    } else {
        big = c;
    }
}
\`\`\`

| \`a\`, \`b\`, \`c\` | Path | \`big\` |
|---|---|---|
| 3, 7, 5 | a >= b false; b >= c true | 7 |
| 9, 2, 9 | a >= b true; a >= c true | 9 |
| 4, 4, 6 | a >= b true; a >= c false | 6 |

**Version 2: keep a running largest.**

\`\`\`java
int big = a;
if (b > big) {
    big = b;
}
if (c > big) {
    big = c;
}
\`\`\`

Here separate ifs are exactly right, because each test compares with the **updated** \`big\`.

**A version with a tie bug.**

\`\`\`java
int big;
if (a > b && a > c) {
    big = a;
} else if (b > a && b > c) {
    big = b;
} else {
    big = c;
}
\`\`\`

With \`a = 5\`, \`b = 5\` and \`c = 1\`, neither strict test passes, so \`big\` becomes 1. Strict \`>\` fails whenever the two largest values tie.
      `
    },
    {
      id: 'csacondi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Trace the Versions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which input makes the tie-bug version store the wrong value in big?',
            options: [
              'a = 8, b = 8, c = 3',
              'a = 8, b = 3, c = 18',
              'a = 3, b = 18, c = 8',
              'a = 12, b = 4, c = 6'
            ],
            correctAnswer: 0,
            explanation: 'When a and b tie for largest, both strict tests fail and the else stores c, which is 3. In the other inputs the largest value is unique, so a strict test or the else picks it correctly.'
          },
          {
            question: 'Version 2 runs with a = 6, b = 9 and c = 9. How many times is an assignment to big executed, counting its declaration?',
            options: [
              '2',
              '3',
              '1',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'big starts at 6, and 9 > 6 replaces it with 9. Then 9 > 9 is false, so the third assignment is skipped.'
          }
        ]
      }
    },
    {
      id: 'csacondi3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In the discount code, what is \`discount\` when \`member\` is true and \`total\` is 50?

2) In the discount code, what is \`discount\` when \`member\` is false and \`total\` is 99?

3) Version 1 of largest of three runs with \`a = 2\`, \`b = 2\`, \`c = 1\`. What is \`big\`?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '0', '2'],
        hint1: '50 >= 50 is true.',
        hint2: 'A non-member needs at least 100.',
        hint3: 'a >= b is true when they are equal.',
        explanation: 'A member with a total of 50 meets total >= 50, so the discount is 10. A non-member with 99 misses the 100 mark and gets 0. With a = b = 2, a >= b and a >= c are both true, so big is 2.'
      }
    },
    {
      id: 'csacondi3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Rule |
|---|---|
| Nested ifs | One path per combination of answers; test an input for each path |
| No else anywhere | \`if (a) { if (b) ... }\` is \`if (a && b)\` |
| Inner else | Runs only when the outer test is true and the inner one is false |
| Outer else | Close the inner if with a brace before the \`else\` |
| Largest of three | Nested \`>=\` tests, or a running largest with separate ifs |
| Strict \`>\` on ties | Two equal largest values can fail every test |

**Next:** Part 4 proves when two conditions are equivalent, using truth tables and De Morgan's laws.
      `
    }
  ]
}
