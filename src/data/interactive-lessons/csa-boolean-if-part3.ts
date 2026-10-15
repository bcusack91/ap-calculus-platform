export const csaBooleanIfPart3Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csaboole3-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 3 of 7 — One-Way and Two-Way Selection, Traced**

---

CED Topic 2.3 covers the two basic forms of selection. A **one-way** \`if\` runs its body or skips it. A **two-way** \`if\`-\`else\` always runs exactly one of its two bodies. This part traces both, including the details that decide what actually prints.

| In this part |
|---|
| One-way if and the flow of control |
| Braces, indentation, and the stray semicolon |
| Two-way if-else |
| return inside an if |
| Tracing a sequence of selections |
      `
    },
    {
      id: 'csaboole3-oneway',
      type: 'text' as const,
      content: `
## One-Way Selection

\`\`\`java
int score = 86;
if (score >= 85) {
    score += 5;
    System.out.println("Bonus!");
}
System.out.println(score);
\`\`\`

| Starting \`score\` | Condition | Output |
|---|---|---|
| 86 | \`true\`: body runs | \`Bonus!\` then \`91\` |
| 80 | \`false\`: body skipped | \`80\` |

Either way, execution continues with the first statement after the closing brace.

## Braces Make the Body, Not Indentation

\`\`\`java
int score = 80;
if (score >= 85)
    score += 5;
    System.out.println("Bonus!");
System.out.println(score);
\`\`\`

Without braces, the body is **only the next statement**, \`score += 5;\`. The \`println("Bonus!")\` line is indented, but it is outside the if and always runs. This segment prints \`Bonus!\` and then \`80\`.

## The Stray Semicolon

\`\`\`java
int temp = 50;
if (temp > 90);
{
    System.out.println("Heat warning");
}
\`\`\`

The semicolon right after the condition is an **empty body**. The if ends there, and the block below it is just a block that always runs. The code compiles and prints \`Heat warning\` even though 50 is not greater than 90.
      `
    },
    {
      id: 'csaboole3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Trace It** 🎯

**Segment A**
\`\`\`java
int n = 7;
if (n % 2 == 0)
    n = n / 2;
    n = n + 10;
System.out.println(n);
\`\`\`

**Segment B**
\`\`\`java
int stock = 0;
if (stock > 0);
    System.out.println("In stock");
System.out.println("Done");
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '17',
              '13',
              '7',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'The condition is false because 7 is odd, so only n = n / 2 is skipped. The line n = n + 10 is outside the if despite its indentation, so n becomes 17.'
          },
          {
            question: 'Which starting value of n makes Segment A print 12?',
            options: [
              '4',
              '2',
              '12',
              '24'
            ],
            correctAnswer: 0,
            explanation: 'An even n is halved and then increased by 10, so 4 becomes 2 and then 12. Starting at 2 gives 11, at 12 gives 16, and at 24 gives 22.'
          },
          {
            question: 'What is printed when Segment B runs?',
            options: [
              'In stock, then Done',
              'Done only',
              'Nothing, since it does not compile',
              'In stock only'
            ],
            correctAnswer: 0,
            explanation: 'The semicolon after the condition gives the if an empty body, so the println of In stock is an ordinary statement that always runs. Then Done prints, and the code compiles without error.'
          }
        ]
      }
    },
    {
      id: 'csaboole3-twoway',
      type: 'text' as const,
      content: `
## Two-Way Selection: if-else

An \`if\`-\`else\` chooses **exactly one** of two bodies.

\`\`\`java
int hours = 5;
int cost;
if (hours <= 2) {
    cost = 4;
} else {
    cost = 4 + (hours - 2) * 3;
}
System.out.println(cost);
\`\`\`

| \`hours\` | Branch | \`cost\` |
|---|---|---|
| 2 | if | 4 |
| 3 | else | 4 + 1 * 3 = 7 |
| 5 | else | 4 + 3 * 3 = 13 |

Notice that \`cost\` is declared without a value. The compiler accepts \`println(cost)\` only because **every** path through the if-else assigns \`cost\`. Delete the \`else\` block and the code no longer compiles, because \`cost\` might never be assigned.

## return Inside an if

A \`return\` statement ends the method immediately, so a method often needs no \`else\`:

\`\`\`java
public static int shippingDays(boolean express) {
    if (express) {
        return 2;
    }
    return 5;
}
\`\`\`

\`shippingDays(true)\` returns 2 and never reaches \`return 5;\`. \`shippingDays(false)\` skips the if and returns 5.
      `
    },
    {
      id: 'csaboole3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Two-Way Choices** 🔍

**Method C**
\`\`\`java
public static String size(int n) {
    if (n > 100) {
        return "large";
    }
    if (n > 10) {
        return "medium";
    }
    return "small";
}
\`\`\`
      `,
      exercise: {
        dropdowns: [
          {
            label: 'With hours = 3, the parking code prints ___',
            options: ['7', '4', '13', '10']
          },
          {
            label: 'If the else block were deleted from the parking code, the println line would ___',
            options: ['not compile', 'print 0', 'print 4', 'throw an exception']
          },
          {
            label: 'The call size(10) from Method C returns ___',
            options: ['"small"', '"medium"', '"large"', '"medium" and then "small"']
          }
        ],
        correctAnswers: ['7', 'not compile', '"small"'],
        hint1: '3 is more than 2, so use the else formula.',
        hint2: 'Is cost assigned on every path?',
        hint3: 'Is 10 > 10 true?',
        explanation: 'For 3 hours the cost is 4 + 1 * 3 = 7. Without the else, cost could be unassigned, which the compiler rejects. Both strict tests fail for 10, so the method reaches return "small";, and a method returns only once.'
      }
    },
    {
      id: 'csaboole3-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Sequence of Selections

\`\`\`java
int a = 4;
int b = 12;
if (a > b) {
    a = a - b;
} else {
    b = b - a;
}
if (a < b) {
    a = a * 2;
}
if (a == b) {
    System.out.println("equal");
} else {
    System.out.println(a + " " + b);
}
\`\`\`

Each if is tested in turn with the **current** values, so keep a trace table.

| Step | Test | Result | \`a\` | \`b\` |
|---|---|---|---|---|
| start | | | 4 | 12 |
| first if | 4 > 12 | false: else runs | 4 | 8 |
| second if | 4 < 8 | true | 8 | 8 |
| third if | 8 == 8 | true | 8 | 8 |

Output: \`equal\`. Start instead with \`a = 10\` and \`b = 4\`: the first if makes \`a\` 6, the second test 6 < 4 is false, and the code prints \`6 4\`.

> 🎯 **AP Connection:** On the exam, write the trace table in the margin. Most wrong answers in selection questions come from testing a later condition with a value that was already changed.
      `
    },
    {
      id: 'csaboole3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Use the worked example above.

1) Starting with \`a = 5\` and \`b = 9\`, what is the final value of \`b\`?

2) Starting with \`a = 5\` and \`b = 9\`, what is the final value of \`a\`?

3) Using the parking code, what is \`cost\` when \`hours\` is 8?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '5', '22'],
        hint1: '5 > 9 is false, so the else body runs.',
        hint2: 'Test 5 < 4 with the updated b.',
        hint3: 'Use 4 + (hours - 2) * 3.',
        explanation: 'The else makes b = 9 - 5 = 4. Then 5 < 4 is false, so a stays 5 and the code prints 5 4. For 8 hours the cost is 4 + 6 * 3 = 22.'
      }
    },
    {
      id: 'csaboole3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Form | Bodies that run | Watch for |
|---|---|---|
| \`if (c) { ... }\` | the body or nothing | missing braces; a stray \`;\` after the condition |
| \`if (c) { ... } else { ... }\` | exactly one | a variable assigned on only one path |
| \`if (c) { return ...; }\` then more code | the rest is skipped when \`c\` is true | no \`else\` needed after a return |

**Next:** Part 4 builds longer conditions with \`&&\`, \`||\` and \`!\`, and uses short-circuit evaluation to avoid errors.
      `
    }
  ]
}
