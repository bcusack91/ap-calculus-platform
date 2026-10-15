export const csaVariablesTypesPart7Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavaria7-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 7 of 7 — Synthesis Review**

---

Three questions settle almost every Unit 1 variable problem: **What type is each value? Does each line compile? What value results?** This review ties Parts 1–6 together around those questions.

| Question | Where you learned it | Key rule |
|---|---|---|
| What type does this variable hold? | Parts 1–2 | int, double and boolean are primitives; String is a reference type |
| Does this line compile? | Parts 2 and 5 | int to double is automatic; double to int needs a cast; boolean never converts |
| What does this line do? | Part 3 | Evaluate the right side with current values, then store |
| Is the int still in range? | Part 4 | Overflow wraps around silently |
| Is the double exact? | Part 4 | Round-off error; avoid == on computed doubles |
| Where does the cast apply? | Part 5 | To the single value immediately to its right |
      `
    },
    {
      id: 'csavaria7-trace',
      type: 'text' as const,
      content: `
## One Trace, Every Skill

\`\`\`java
final int LIMIT = 3;
int a = 11;
int b = a / LIMIT;
double c = a / (double) LIMIT;
int d = (int) (c + 0.5);
a = a - b * LIMIT;
\`\`\`

| Line | Variable changed | Work | Value |
|---|---|---|---|
| 1 | \`LIMIT\` (final) | | 3 |
| 2 | \`a\` | | 11 |
| 3 | \`b\` | 11 / 3 with int division | 3 |
| 4 | \`c\` | 11 / 3.0 | 3.666... |
| 5 | \`d\` | (int) 4.166... | 4 |
| 6 | \`a\` | 11 - 3 * 3 | 2 |

Notice how each skill shows up: the int division in line 3, the cast in line 4 that forces double division, rounding in line 5, and an update in line 6 that uses the current values of \`a\` and \`b\`. Adding \`LIMIT = 4;\` anywhere after line 1 would be a compile-time error.
      `
    },
    {
      id: 'csavaria7-review',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯

**Segment A**
\`\`\`java
int t = 25;
double h = t / 10.0;
t = t - (int) h * 10;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'A programmer runs int x = Integer.MAX_VALUE; x = x + 1; and expects a larger number. Which kind of error is this?',
            options: [
              'A logic error',
              'A compile-time error',
              'An ArithmeticException',
              'A syntax error'
            ],
            correctAnswer: 0,
            explanation: 'The code compiles and runs, but overflow silently wraps x to the most negative int. A wrong result with no crash is a logic error.'
          },
          {
            question: 'What is the value of t after Segment A executes?',
            options: [
              '5',
              '0',
              '25',
              '2.5'
            ],
            correctAnswer: 0,
            explanation: 'h is 2.5. The cast applies only to h, so (int) h * 10 is 2 * 10 = 20, and t becomes 25 - 20 = 5. Casting the product h * 10 instead would give 25 and leave t at 0.'
          },
          {
            question: 'Which declaration stores approximately 0.778 (seven made out of nine attempts) in rate?',
            options: [
              'double rate = (double) 7 / 9;',
              'double rate = 7 / 9;',
              'double rate = 7 / 9 * 1.0;',
              'int rate = (int) (7.0 / 9);'
            ],
            correctAnswer: 0,
            explanation: 'Casting 7 to a double before dividing forces double division, giving about 0.778. Dividing two ints gives 0 no matter what it is multiplied by afterward, and storing the quotient in an int truncates 0.778 to 0.'
          }
        ]
      }
    },
    {
      id: 'csavaria7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'double d = 15 / 4; stores ___',
            options: ['3.0', '3.75', '3', '4.0']
          },
          {
            label: '(int) (-1.8 - 0.5) evaluates to ___',
            options: ['-2', '-1', '-3', '-2.3']
          },
          {
            label: 'Integer.MIN_VALUE - 1 evaluates to the same value as ___',
            options: ['Integer.MAX_VALUE', 'Integer.MIN_VALUE', '-Integer.MAX_VALUE', 'Integer.MIN_VALUE + 1']
          }
        ],
        correctAnswers: ['3.0', '-2', 'Integer.MAX_VALUE'],
        hint1: 'Int division happens before the value is stored.',
        hint2: '-1.8 - 0.5 is -2.3; truncate toward zero.',
        hint3: 'Going below the bottom of the range wraps to the top.',
        explanation: '15 / 4 is 3, stored as 3.0. (int) -2.3 is -2. Subtracting 1 from the smallest int overflows to the largest int.'
      }
    },
    {
      id: 'csavaria7-wrap',
      type: 'text' as const,
      content: `
## AP Exam Connection

- Unit 1 (Using Objects and Methods) is weighted **15–25%** of the exam, and these variable skills reappear inside every later unit.
- On free-response questions, the same decisions decide points: declaring an average as a double, forcing double division, and rounding with a cast.
- When an answer choice reads "compile-time error," check types first. When it reads "exception," look for a division by zero. When every choice is a number, build a trace table.
      `
    }
  ]
}
