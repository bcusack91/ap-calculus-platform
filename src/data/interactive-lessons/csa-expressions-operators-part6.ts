export const csaExpressionsOperatorsPart6Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaexpre6-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 6 of 7 — AP-Style Practice: Tracing and Writing Expressions**

---

This part is exam practice. For every trace item:

1. **Mark the types** of every variable before you compute anything.
2. **Evaluate one operator at a time** in precedence order, left to right within a level, writing each intermediate value.
3. **Watch for the moment a String appears**, because every \`+\` after it joins text.
      `
    },
    {
      id: 'csaexpre6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Multiple-Choice Practice** 🎯

**Segment A**
\`\`\`java
int x = 17;
int y = 5;
x %= y;
y += x * 2;
System.out.println(x + y + "" + x * y);
\`\`\`

**Segment B**
\`\`\`java
double d = 7 / 2 + 7 % 2 / 2.0;
int k = (int) (d * 10) % 4;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '1118',
              '2918',
              '11 18',
              '710'
            ],
            correctAnswer: 0,
            explanation: 'x becomes 17 % 5 = 2 and y becomes 5 + 4 = 9. Then x + y is int addition (11), the empty String turns it into text, and x * y = 18 is joined, giving 1118.'
          },
          {
            question: 'What is the value of k after Segment B executes?',
            options: [
              '3',
              '2',
              '0',
              '35'
            ],
            correctAnswer: 0,
            explanation: '7 / 2 is 3 and 7 % 2 / 2.0 is 0.5, so d is 3.5. Then (int) 35.0 is 35, and the % runs after the cast: 35 % 4 = 3.'
          },
          {
            question: 'A shipping program packs n items (n is positive) into boxes that each hold 12, and a partly filled box still counts. Which expression gives the number of boxes needed?',
            options: [
              '(n + 11) / 12',
              'n / 12 + 1',
              'n / 12',
              '(n + 12) / 12'
            ],
            correctAnswer: 0,
            explanation: 'Adding 11 before dividing rounds any partial box up without adding an extra box when n is a multiple of 12. Adding 1 after dividing, or adding 12 before, counts one box too many when n is 24, for example.'
          }
        ]
      }
    },
    {
      id: 'csaexpre6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Task: Height Conversion

A program stores a height as \`int totalInches\`. Write statements that:

- **(a)** print the height in the form \`5 ft 7 in\`;
- **(b)** store the height in meters in a double (1 inch is 2.54 centimeters, and 100 centimeters is 1 meter).

### Worked Solution
\`\`\`java
int totalInches = 67;
int feet = totalInches / 12;                  // 5
int inches = totalInches % 12;                // 7
System.out.println(feet + " ft " + inches + " in");
double meters = totalInches * 2.54 / 100;     // 170.18 / 100, about 1.70
\`\`\`

### Why Each Line Earns Credit
- \`/\` and \`%\` by 12 split the inches into whole feet and leftover inches.
- The spaces live inside the String literals, so the output reads \`5 ft 7 in\`, not \`5ft7in\`.
- \`totalInches * 2.54\` is a double, so the division by 100 is double division.

### Where Points Are Lost
\`\`\`java
int feet = totalInches / 12.0;                // does not compile: the result is a double
double meters = totalInches * 254 / 10000;    // 17018 / 10000 is 1, stored as 1.0
\`\`\`
The second line uses whole numbers to avoid the decimal 2.54, but \`17018 / 10000\` is int division, so the answer collapses to 1.0.
      `
    },
    {
      id: 'csaexpre6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Check the Solution** 🔍

Now suppose \`totalInches = 75\`.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'feet = totalInches / 12 stores ___',
            options: ['6', '6.25', '7', '3']
          },
          {
            label: 'inches = totalInches % 12 stores ___',
            options: ['3', '6', '25', '9']
          },
          {
            label: 'totalInches * 254 / 10000 evaluates to ___',
            options: ['1', '1.905', '2', '19050']
          }
        ],
        correctAnswers: ['6', '3', '1'],
        hint1: 'How many whole 12s fit in 75?',
        hint2: '6 * 12 = 72; what is left?',
        hint3: '75 * 254 = 19050; then int division.',
        explanation: '75 / 12 = 6 and 75 % 12 = 3, so 75 inches is 6 ft 3 in. 75 * 254 = 19050, and 19050 / 10000 = 1 with int division.'
      }
    },
    {
      id: 'csaexpre6-mc2',
      type: 'multiple-choice' as const,
      content: `
**FRQ Reasoning** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes int feet = totalInches / 12.0; in part (a). What happens?',
            options: [
              'It does not compile',
              'feet is rounded down',
              'feet is rounded to nearest',
              'feet keeps the fraction'
            ],
            correctAnswer: 0,
            explanation: 'totalInches / 12.0 is a double, and a double cannot be stored in an int without a cast, so the compiler rejects the line. An int variable can never hold a fraction.'
          },
          {
            question: 'The int variable price holds an amount in cents. Which statement adds a 7 percent fee and stores the total, rounded to the nearest cent, back in price?',
            options: [
              'price += (int) (price * 0.07 + 0.5);',
              'price += (price * 7) / 100;',
              'price = price * 1.07;',
              'price = price * 107 / 100.0;'
            ],
            correctAnswer: 0,
            explanation: 'The fee is computed as a double, shifted by 0.5 and cast, so it rounds to the nearest cent. The all-int version truncates the fee instead of rounding it, and the other two leave a double on the right side of an int assignment, which does not compile.'
          }
        ]
      }
    }
  ]
}
