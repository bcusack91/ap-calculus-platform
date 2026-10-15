export const csaExpressionsOperatorsPart7Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaexpre7-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 7 of 7 — Synthesis Review**

---

Every expression question in this topic is answered the same way: **find the order, track the type, watch for Strings.** This table ties Parts 1–6 together.

| Skill | Part | Key rule |
|---|---|---|
| Arithmetic and \`%\` | 1, 4 | \`a / b\` counts whole groups, \`a % b\` is the leftover |
| Output | 2 | \`println\` ends the line after printing; \`\\n\`, \`\\"\` and \`\\\\\` are escapes |
| Order of operations | 1, 3 | Parentheses, casts, then \`* / %\`, then \`+ -\`, left to right within a level |
| Type of each operation | 3 | int with int gives an int; one double makes it a double |
| Run-time error | 3 | int \`/\` or \`%\` by zero throws an \`ArithmeticException\` |
| Compound assignment | 5 | \`x op= e\` means \`x = x op (e)\` |
| String concatenation | 1, 2, 5 | Once a String appears, every later \`+\` joins text |
      `
    },
    {
      id: 'csaexpre7-trace',
      type: 'text' as const,
      content: `
## One Trace, Every Skill

\`\`\`java
int a = 29;
int b = 4;
b += a % b * 2;                          // b = 4 + (1 * 2) = 6
double r = a / b + a % b / 2.0;          // 4 + 5 / 2.0 = 6.5
System.out.print(a / b + "R" + a % b);   // prints 4R5 with no line break
System.out.println(" " + r);             // prints a space, then 6.5, and ends the line
\`\`\`

Output: \`4R5 6.5\`

| Step | Skill used |
|---|---|
| \`a % b * 2\` | \`%\` and \`*\` left to right: 29 % 4 = 1, then 1 * 2 = 2 |
| \`b += ...\` | The whole right side first: 4 + 2 = 6 |
| \`a / b\` | int division: 29 / 6 = 4 |
| \`a % b / 2.0\` | 29 % 6 = 5, then 5 / 2.0 = 2.5, a double |
| \`a / b + "R" + a % b\` | The int 4 joins "R", then 5 is joined as text |
| \`print\` then \`println\` | One output line |
      `
    },
    {
      id: 'csaexpre7-review',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯

**Segment A**
\`\`\`java
int a = 23;
int b = 4;
System.out.print(a / b + " ");
System.out.print(a % b + " ");
System.out.println((double) a / b);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '5 3 5.75',
              '5 3 5.0',
              '5 3 5',
              '5 3 6'
            ],
            correctAnswer: 0,
            explanation: '23 / 4 is 5 with int division and 23 % 4 is 3. The cast makes the last division 23.0 / 4 = 5.75, which is neither truncated to 5 nor rounded to 6.'
          },
          {
            question: 'With int x = 4 and int y = 5, which statement prints Total: 9?',
            options: [
              'System.out.println("Total: " + (x + y));',
              'System.out.println("Total: " + x + y);',
              'System.out.println("Total: " + (x) + (y));',
              'System.out.println("Total: " + x * y);'
            ],
            correctAnswer: 0,
            explanation: 'Parentheses around x + y force numeric addition before concatenation. Without them, or with parentheses around each variable alone, the 4 and 5 are joined as text to give 45, and the product prints 20.'
          },
          {
            question: 'After int n = 15; n %= 4; n *= n + 1; executes, what is the value of n?',
            options: [
              '12',
              '10',
              '4',
              '3'
            ],
            correctAnswer: 0,
            explanation: '15 % 4 is 3, and then n = 3 * (3 + 1) = 12. Ignoring the implied parentheses gives 3 * 3 + 1 = 10.'
          }
        ]
      }
    },
    {
      id: 'csaexpre7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '5 + 10 / 4 * 2 evaluates to ___',
            options: ['9', '10', '10.0', '7']
          },
          {
            label: 'System.out.println("a" + 1 + 2 * 3) prints ___',
            options: ['a16', 'a19', 'a7', 'a123']
          },
          {
            label: '19 % 4 + 19 / 4 evaluates to ___',
            options: ['7', '8.75', '4', '3']
          }
        ],
        correctAnswers: ['9', 'a16', '7'],
        hint1: '10 / 4 is int division.',
        hint2: '* goes before +, and the String comes first.',
        hint3: 'Remainder plus quotient.',
        explanation: '10 / 4 = 2, 2 * 2 = 4, 5 + 4 = 9. "a" + 1 is "a1", then 2 * 3 = 6 is joined, giving a16. 19 % 4 = 3 and 19 / 4 = 4, so the sum is 7.'
      }
    },
    {
      id: 'csaexpre7-wrap',
      type: 'text' as const,
      content: `
## AP Exam Connection

- Expressions appear inside nearly every question on the exam, including every free-response question. A single int division in the wrong place can cost a point on an otherwise correct method.
- In free-response code, compute averages and percentages with a double operand early in the expression, and use \`/\` and \`%\` together for conversions.
- In multiple choice, when the answer choices differ only in a ".0", a joined digit, or a line break, slow down and trace each operator.
      `
    }
  ]
}
