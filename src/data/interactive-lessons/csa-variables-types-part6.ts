export const csaVariablesTypesPart6Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavaria6-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 6 of 7 — AP-Style Practice: Tracing and Writing Declarations**

---

This part is exam practice. Use the same three-step routine on every item:

1. **Check that every line compiles.** Look at each declared type and each value stored in it.
2. **Trace with a table.** Write each variable's type at the top of its column so you remember when to add ".0".
3. **For writing tasks, choose the type first**, then the expression, then the cast.
      `
    },
    {
      id: 'csavaria6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Multiple-Choice Practice** 🎯

**Segment A**
\`\`\`java
int m = 14;
int n = 4;
double q = m / n + m % n / 2.0;
System.out.println(q);
\`\`\`

**Segment B**
\`\`\`java
int base = 9;
base = base / 2;
double half = base / 2;
int back = (int) (half * 2);
System.out.println(base + " " + half + " " + back);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4.0',
              '4.5',
              '3.5',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'm / n is the int 3 and m % n is 2, so the expression is 3 + 2 / 2.0 = 3 + 1.0 = 4.0. Treating m / n as 3.5 would give 4.5, and a double always prints with a decimal point.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '4 2.0 4',
              '4.5 2.25 4',
              '4 2 4',
              '4 2.25 4'
            ],
            correctAnswer: 0,
            explanation: 'base becomes 9 / 2 = 4, half becomes 4 / 2 = 2 stored as 2.0, and back is (int) 4.0 = 4. The double half prints as 2.0, never as 2.'
          },
          {
            question: 'An int variable totalPoints holds a nonnegative total and numStudents holds the class size. Which statement stores the class average, rounded to the nearest whole number, in avg?',
            options: [
              'int avg = (int) ((double) totalPoints / numStudents + 0.5);',
              'int avg = (int) (totalPoints / numStudents + 0.5);',
              'int avg = (int) ((double) totalPoints / numStudents) + 0.5;',
              'int avg = (double) totalPoints / numStudents + 0.5;'
            ],
            correctAnswer: 0,
            explanation: 'The correct version divides as doubles, shifts by 0.5, and then truncates. Dividing two ints first throws away the fraction before rounding, and the two versions that leave a double on the right side do not compile.'
          }
        ]
      }
    },
    {
      id: 'csavaria6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Task: A Step Counter

A fitness app stores \`int steps\` and \`double strideInches\` (the length of one step). There are 63,360 inches in a mile. Write statements that:

- **(a)** store the distance walked, in miles, in a double;
- **(b)** store the number of **whole** miles completed in an int;
- **(c)** store the distance rounded to the nearest mile in an int.

### Worked Solution
\`\`\`java
final int INCHES_PER_MILE = 63360;
int steps = 14000;
double strideInches = 30.5;

double miles = steps * strideInches / INCHES_PER_MILE;   // 427000.0 / 63360 is about 6.74
int wholeMiles = (int) miles;                            // 6
int roundedMiles = (int) (miles + 0.5);                  // (int) 7.24 is 7
\`\`\`

### Why Each Line Earns Credit
- **Types match the data:** a distance can be fractional, so \`miles\` is a double; whole and rounded miles are counts, so they are ints.
- **No int division:** \`steps * strideInches\` is a double (427000.0) because \`strideInches\` is a double, so the division is double division.
- **Truncate vs. round:** a plain cast truncates for (b); the + 0.5 shift rounds for (c).
- **A named constant** replaces the "magic number" 63360.

### Where Points Are Lost
\`\`\`java
double miles = steps / INCHES_PER_MILE * strideInches;   // 14000 / 63360 is 0, so miles is 0.0
\`\`\`
The same operations in a different order give 0.0, because \`steps / INCHES_PER_MILE\` divides two ints before \`strideInches\` ever joins the expression.
      `
    },
    {
      id: 'csavaria6-input',
      type: 'input-boxes' as const,
      content: `
**Check the Solution** ✍️

Use \`steps = 14000\`, \`strideInches = 30.5\`, and \`INCHES_PER_MILE = 63360\`.

1) The int expression steps / INCHES_PER_MILE evaluates to _______.

2) The value stored in wholeMiles is _______.

3) The value stored in roundedMiles is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '6', '7'],
        hint1: '14000 is smaller than 63360, and both are ints.',
        hint2: 'miles is about 6.74; a cast truncates.',
        hint3: 'About 6.74 + 0.5 is about 7.24.',
        explanation: '14000 / 63360 is 0 with int division. miles is about 6.74, which truncates to 6 and rounds to 7.'
      }
    },
    {
      id: 'csavaria6-mc2',
      type: 'multiple-choice' as const,
      content: `
**FRQ Reasoning** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes double miles = steps / INCHES_PER_MILE * strideInches; with the values above. Which change makes it compute the correct distance?',
            options: [
              'Do the multiplication before the division',
              'Declare miles as an int instead',
              'Cast the final quotient to a double',
              'Add 0.5 before storing the result'
            ],
            correctAnswer: 0,
            explanation: 'Multiplying first makes the left operand of the division a double, so no int division occurs. Casting at the end or adding 0.5 cannot recover a quotient that was already truncated to 0, and an int variable cannot hold a fractional distance.'
          },
          {
            question: 'Which statement declares a constant for the number of inches in a foot and follows Java naming conventions for constants?',
            options: [
              'final int INCHES_PER_FOOT = 12;',
              'static int INCHES_PER_FOOT = 12;',
              'int final INCHES_PER_FOOT = 12;',
              'constant int INCHES_PER_FOOT = 12;'
            ],
            correctAnswer: 0,
            explanation: 'final goes before the type and makes the value unchangeable, and constants are named in ALL_CAPS with underscores. Without final the variable can still be reassigned, putting final after the type does not compile, and constant is not a Java keyword.'
          }
        ]
      }
    }
  ]
}
