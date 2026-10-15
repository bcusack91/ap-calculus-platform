export const csaBooleanIfPart4Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csaboole4-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 4 of 7 — Compound Conditions: Precedence and Short-Circuit Guards**

---

CED Topic 2.5 combines Boolean expressions with \`!\`, \`&&\` and \`||\`. Part 1 gave the three operators and the short-circuit rule. This part covers the details that decide the value of a long condition: the order the operators are applied, ranges, and how short-circuit evaluation protects code from errors.

| In this part |
|---|
| Operator precedence in compound conditions |
| Inside-range and outside-range tests |
| Divisibility conditions with % |
| Short-circuit guards against errors |
| Skipped method calls |
      `
    },
    {
      id: 'csaboole4-precedence',
      type: 'text' as const,
      content: `
## Precedence: Which Operator Goes First

| Order | Operators |
|---|---|
| 1 (first) | \`!\`, casts, unary minus |
| 2 | \`*\`, \`/\`, \`%\` |
| 3 | \`+\`, \`-\` |
| 4 | \`<\`, \`>\`, \`<=\`, \`>=\` |
| 5 | \`==\`, \`!=\` |
| 6 | \`&&\` |
| 7 (last) | \`\\|\\|\` |

Two consequences come up again and again:

- **\`&&\` is applied before \`||\`.** \`a || b && c\` means \`a || (b && c)\`.
- **\`!\` binds tightly.** For an int \`x\`, \`!x > 5\` does not compile, because \`!\` would apply to \`x\` itself. Write \`!(x > 5)\`.

### Worked Example: Parentheses Change the Answer

Let \`x = 1\`, \`y = -1\` and \`z = -1\`.

| Expression | Grouping | Steps | Value |
|---|---|---|---|
| \`x > 0 \\|\\| y > 0 && z > 0\` | \`x > 0 \\|\\| (y > 0 && z > 0)\` | true \\|\\| (false && false) | \`true\` |
| \`(x > 0 \\|\\| y > 0) && z > 0\` | as written | (true \\|\\| false) && false | \`false\` |

### Ranges

| Meaning | Expression |
|---|---|
| \`x\` is from 10 to 20, inclusive | \`x >= 10 && x <= 20\` |
| \`x\` is outside 10 to 20 | \`x < 10 \\|\\| x > 20\` |
| \`n\` is even and positive | \`n % 2 == 0 && n > 0\` |
| \`y\` is a leap year | \`(y % 4 == 0 && y % 100 != 0) \\|\\| y % 400 == 0\` |

Two classic mistakes: \`x >= 10 || x <= 20\` is true for **every** int, and \`x < 10 && x > 20\` is true for **none**.
      `
    },
    {
      id: 'csaboole4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Assume \`int a = 3, b = 8, c = 5;\`
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression evaluates to false?',
            options: [
              'a > b && (b > c || c > a)',
              'a > b && b > c || c > a',
              '!(a > b) && b > c',
              'a < b || b < c && c < a'
            ],
            correctAnswer: 0,
            explanation: 'With the parentheses, the && needs a > b, which is false, so the whole expression is false. Without them, && is applied first and c > a makes the || true, and the other two expressions are true as well.'
          },
          {
            question: 'Which expression is true exactly when score is outside the range 60 to 100, inclusive?',
            options: [
              'score < 60 || score > 100',
              'score <= 60 && score >= 100',
              'score <= 60 || score >= 100',
              'score >= 60 && score <= 100'
            ],
            correctAnswer: 0,
            explanation: 'A score is outside the range when it is below 60 or above 100. The test score >= 60 && score <= 100 describes scores inside the range, the other && test can never be true, and using <= and >= with || wrongly counts 60 and 100 as outside.'
          },
          {
            question: 'For which value of y is the leap-year expression false?',
            options: [
              '1900',
              '2000',
              '2024',
              '2400'
            ],
            correctAnswer: 0,
            explanation: '1900 is divisible by 4 but also by 100 and not by 400, so both halves of the || are false. 2000 and 2400 pass the 400 test, and 2024 passes the first half.'
          }
        ]
      }
    },
    {
      id: 'csaboole4-guards',
      type: 'text' as const,
      content: `
## Short-Circuit Guards

Java evaluates \`&&\` and \`||\` left to right and stops as soon as the answer is known.

| Operator | Left side | Right side evaluated? | Result |
|---|---|---|---|
| \`&&\` | \`false\` | no | \`false\` |
| \`&&\` | \`true\` | yes | the right side's value |
| \`\\|\\|\` | \`true\` | no | \`true\` |
| \`\\|\\|\` | \`false\` | yes | the right side's value |

Put the **safety check on the left** so the risky part runs only when it is safe:

\`\`\`java
int count = 0;
int total = 50;
if (count != 0 && total / count > 10) {
    System.out.println("high average");
}
\`\`\`

With \`count\` equal to 0, \`count != 0\` is false, so \`total / count\` never runs and no exception occurs. Written the other way, \`total / count > 10 && count != 0\` divides first and throws an \`ArithmeticException\`.

The same idea protects String calls:

\`\`\`java
boolean hasName = name != null && name.length() > 0;    // safe when name is null
boolean missing = name == null || name.length() == 0;   // also safe: || stops on true
\`\`\`

### Skipped Method Calls

\`\`\`java
public static boolean check(int n) {
    System.out.print("checked ");
    return n > 0;
}
\`\`\`

| Statement | Output |
|---|---|
| \`if (5 < 3 && check(4)) { System.out.print("yes"); }\` | nothing: \`check\` is never called |
| \`if (5 > 3 \\|\\| check(4)) { System.out.print("yes"); }\` | \`yes\` |
| \`if (check(4) && 5 > 3) { System.out.print("yes"); }\` | \`checked yes\` |

> 🔑 Short-circuiting skips the **whole** right side, including any printing or other work done by a method call there.
      `
    },
    {
      id: 'csaboole4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Short-Circuit Traces** 🎯

**Segment D**
\`\`\`java
int x = 0;
int y = 7;
if (x != 0 && y / x > 1) {
    System.out.print("A");
}
if (x == 0 || y / x > 1) {
    System.out.print("B");
}
if (y / x > 1 && x != 0) {
    System.out.print("C");
}
System.out.print("D");
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the result of running Segment D?',
            options: [
              'Prints B, then throws an ArithmeticException',
              'Prints BD and ends normally',
              'Prints BCD and ends normally',
              'Throws an exception before any output'
            ],
            correctAnswer: 0,
            explanation: 'The first two conditions short-circuit, so they never divide, and the second one prints B. The third condition divides by x first, which throws the exception, so C and D never print.'
          },
          {
            question: 'Using the check method above, what is printed by if (check(-2) && check(3)) { System.out.print("yes"); }',
            options: [
              'checked',
              'checked checked',
              'checked checked yes',
              'checked yes'
            ],
            correctAnswer: 0,
            explanation: 'The first call prints checked and returns false because -2 is not positive. The && stops there, so check(3) never runs and the body is skipped.'
          }
        ]
      }
    },
    {
      id: 'csaboole4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Type the value of \`!(4 > 2) || 3 % 2 == 1\`.

2) For \`int x = 15;\`, type the value of \`x % 3 == 0 && x % 5 == 0 && x % 2 == 0\`.

3) After \`int k = 5; boolean ok = k > 10 && k / 0 > 1;\` what is stored in \`ok\`?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['true', 'false', 'false'],
        hint1: 'Evaluate the ! first, then the right side of the ||.',
        hint2: 'Check whether 15 is even.',
        hint3: 'Does Java ever reach the division?',
        explanation: '!(true) is false, but 3 % 2 == 1 is true, so the || is true. 15 is divisible by 3 and 5 but not by 2. Since 5 > 10 is false, the && stops before dividing by 0, so ok is false and no exception occurs.'
      }
    },
    {
      id: 'csaboole4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Rule |
|---|---|
| Precedence | \`!\` first, then arithmetic, comparisons, \`&&\`, and \`\\|\\|\` last |
| Inside a range | \`low <= x && x <= high\` |
| Outside a range | \`x < low \\|\\| x > high\` |
| Guard with && | Safety test on the left: \`count != 0 && total / count > 10\` |
| Guard with \\|\\| | \`s == null \\|\\| s.length() == 0\` |
| Skipped work | A short-circuited right side runs no code at all |

> 🎯 **AP Connection:** When a compound condition contains a division or a method call on an object, ask "can the left side stop evaluation before this runs?" That one question settles most exception answer choices.
      `
    }
  ]
}
