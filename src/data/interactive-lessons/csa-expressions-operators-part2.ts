export const csaExpressionsOperatorsPart2Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaexpre2-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 2 of 7 — Output with print and println**

---

Almost every AP CSA trace question ends with "What is printed?" To answer exactly, you need to know where each line break comes from, how string literals are written, and how an expression is turned into text (CED Topic 1.3).

| In this part |
|---|
| print vs. println |
| Escape sequences |
| Building output with concatenation |
      `
    },
    {
      id: 'csaexpre2-print',
      type: 'text' as const,
      content: `
## print vs. println

| Statement | What it does |
|---|---|
| \`System.out.print(x);\` | Displays \`x\` and leaves the cursor on the **same** line |
| \`System.out.println(x);\` | Displays \`x\`, then moves to the **next** line |
| \`System.out.println();\` | Displays nothing and moves to the next line (ends the current line) |

### Worked Example
\`\`\`java
System.out.print("AP ");
System.out.print("CSA");
System.out.println("!");
System.out.println("Done");
\`\`\`

Output:
\`\`\`
AP CSA!
Done
\`\`\`

Trace: the first two calls stay on one line, giving \`AP CSA\`. The \`println("!")\` adds the \`!\` and **then** ends the line, so \`Done\` starts on a new line.

> 🔑 **The line break comes after the text, not before it.** \`println\` never starts a new line before printing; it ends the line after printing.

## Literals
A **literal** is a fixed value written directly in code.

| Literal | Type |
|---|---|
| \`"Hello"\` | String (in double quotes) |
| \`42\` | int |
| \`3.0\` | double (has a decimal point) |
| \`true\` | boolean |
      `
    },
    {
      id: 'csaexpre2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
System.out.print("one");
System.out.println("two");
System.out.print("three");
System.out.println();
System.out.println("four");
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'How many lines of output does Segment A produce?',
            options: [
              'Three lines',
              'Four lines',
              'Five lines',
              'Two lines'
            ],
            correctAnswer: 0,
            explanation: 'Line one is onetwo, ended by the first println. Line two is three, ended by the empty println. Line three is four.'
          },
          {
            question: 'What is the first line of output from Segment A?',
            options: [
              'onetwo',
              'one two',
              'one two three',
              'onetwothree'
            ],
            correctAnswer: 0,
            explanation: 'print does not add a space or a line break, so two follows one directly. The println that prints two ends the line before three is printed.'
          }
        ]
      }
    },
    {
      id: 'csaexpre2-escapes',
      type: 'text' as const,
      content: `
## Escape Sequences

Some characters cannot be typed directly inside a string literal. An **escape sequence** starts with a backslash. The AP subset uses three:

| Escape sequence | Prints |
|---|---|
| \`\\"\` | a double quotation mark |
| \`\\\\\` | a single backslash |
| \`\\n\` | a line break |

### Worked Example
\`\`\`java
System.out.println("She said \\"hi\\"\\nC:\\\\temp");
\`\`\`

Output:
\`\`\`
She said "hi"
C:\\temp
\`\`\`

Trace: \`\\"\` prints a quotation mark without ending the string, \`\\n\` breaks the line, and \`\\\\\` prints one backslash. The \`println\` then ends the second line.
      `
    },
    {
      id: 'csaexpre2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Read the Literal** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'System.out.print("a\\nb"); displays ___',
            options: ['a and b on two lines', 'a\\nb on one line', 'ab on one line', 'a space b on one line']
          },
          {
            label: 'To print one backslash, the string literal must contain ___',
            options: ['two backslashes', 'one backslash', 'a forward slash', 'backslash n']
          },
          {
            label: 'The literal "Say \\"yes\\"" prints ___',
            options: ['Say "yes"', 'Say \\"yes\\"', 'Say yes', 'Say ""yes""']
          }
        ],
        correctAnswers: ['a and b on two lines', 'two backslashes', 'Say "yes"'],
        hint1: '\\n is the line-break escape.',
        hint2: 'A single backslash starts an escape sequence.',
        hint3: 'Each \\" prints one quotation mark.',
        explanation: '\\n starts a new line, \\\\ prints one backslash, and \\" prints a quotation mark without ending the string.'
      }
    },
    {
      id: 'csaexpre2-concat',
      type: 'text' as const,
      content: `
## Building Output with Concatenation

Java evaluates the whole expression inside the parentheses **before** printing it. Part 1 showed that \`+\` works left to right and switches to concatenation once a String is involved. Here is how that plays out in realistic output lines:

\`\`\`java
int wins = 7;
int games = 10;
System.out.println("Record: " + wins + "-" + (games - wins));
System.out.println("Win rate: " + (double) wins / games);
System.out.println(wins + games + " total, " + wins * 2 + " points");
\`\`\`

Output:
\`\`\`
Record: 7-3
Win rate: 0.7
17 total, 14 points
\`\`\`

| Line | Why |
|---|---|
| 1 | The parentheses force \`games - wins\` (3) to be computed as a number before it is joined. |
| 2 | The cast and \`/\` have higher precedence than \`+\`, so 7.0 / 10 = 0.7 is computed first. |
| 3 | \`wins + games\` is int addition (17) because no String has appeared yet; \`wins * 2\` is done before its \`+\`. |

### A Compile-Time Trap
\`\`\`java
System.out.println("Diff: " + games - wins);   // does not compile
\`\`\`
\`"Diff: " + games\` becomes the String \`"Diff: 10"\`, and Java cannot subtract an int from a String. Parentheses fix it: \`"Diff: " + (games - wins)\`.
      `
    },
    {
      id: 'csaexpre2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment B**
\`\`\`java
int a = 4;
int b = 6;
System.out.print(a + b);
System.out.println(" " + a + b);
System.out.println(a * b + "!");
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the first line printed by Segment B?',
            options: [
              '10 46',
              '10 10',
              '46 10',
              '1046'
            ],
            correctAnswer: 0,
            explanation: 'a + b with two ints prints 10, and print stays on the line. Then " " + a + b concatenates from left to right, giving a space followed by 4 and 6.'
          },
          {
            question: 'With int a = 4 and int b = 6, which statement causes a compile-time error?',
            options: [
              'System.out.println("Sum: " + a - b);',
              'System.out.println("Sum: " + (a - b));',
              'System.out.println("Sum: " + a * b + "!");',
              'System.out.println(a - b + " sum");'
            ],
            correctAnswer: 0,
            explanation: '"Sum: " + a produces a String, and a String minus an int is not allowed. Parentheses around a - b, a product that is computed first, or subtraction before any String all compile.'
          }
        ]
      }
    },
    {
      id: 'csaexpre2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The method that displays its argument and then moves to a new line is System.out._______.

2) The escape sequence for a line break is a backslash followed by the letter _______.

3) System.out.println("Score: " + 3 * 4); prints Score: _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['println', 'n', '12'],
        hint1: 'Its name ends in "ln" for "line".',
        hint2: 'Think of "new line".',
        hint3: 'Multiplication happens before concatenation.',
        explanation: 'println prints and then ends the line. \\n is a line break. 3 * 4 = 12 is computed before it is joined to the String.'
      }
    }
  ]
}
