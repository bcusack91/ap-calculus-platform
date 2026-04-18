export const csaExpressionsOperatorsPart1Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaeo1-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 1 of 7 — Arithmetic, Assignment, and the Modulus Operator**

---

## Arithmetic Operators

| Operator | Operation | Example | Result |
|----------|----------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`10 - 4\` | \`6\` |
| \`*\` | Multiplication | \`6 * 7\` | \`42\` |
| \`/\` | Division | \`7 / 2\` | \`3\` (int) or \`3.5\` (double) |
| \`%\` | Modulus (remainder) | \`7 % 3\` | \`1\` |

> 🔑 **Modulus (%)** returns the remainder after division. It is essential for checking even/odd, extracting digits, and cycling through values.

---

## Modulus Use Cases

| Expression | Result | Use Case |
|-----------|--------|----------|
| \`n % 2 == 0\` | true if n is even | Even/odd check |
| \`n % 10\` | Last digit of n | Extracting ones digit |
| \`n / 10\` | Removes last digit | Extracting tens digit (int division) |
| \`n % 3 == 0\` | true if n divisible by 3 | Divisibility check |

## Compound Assignment Operators

| Operator | Equivalent To | Example |
|----------|-------------|---------|
| \`+=\` | \`x = x + n\` | \`x += 5;\` |
| \`-=\` | \`x = x - n\` | \`x -= 3;\` |
| \`*=\` | \`x = x * n\` | \`x *= 2;\` |
| \`/=\` | \`x = x / n\` | \`x /= 4;\` |
| \`%=\` | \`x = x % n\` | \`x %= 3;\` |
| \`++\` | \`x = x + 1\` | \`x++;\` |
| \`--\` | \`x = x - 1\` | \`x--;\` |
      `
    },
    {
      id: 'csaeo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of 17 % 5?',
            options: [
              '3',
              '2',
              '3.4',
              '5'
            ],
            correctAnswer: 1,
            explanation: '17 / 5 = 3 remainder 2. The modulus operator returns the remainder, so 17 % 5 = 2.'
          },
          {
            question: 'After executing: int x = 10; x %= 3; what is x?',
            options: [
              '3',
              '1',
              '10',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'x %= 3 is equivalent to x = x % 3 = 10 % 3 = 1. The remainder when dividing 10 by 3 is 1.'
          }
        ]
      }
    },
    {
      id: 'csaeo1-content',
      type: 'text' as const,
      content: `
## Order of Operations (Precedence)

| Priority | Operators | Description |
|----------|----------|-----------|
| 1 (highest) | \`()\` | Parentheses |
| 2 | \`* / %\` | Multiplication, division, modulus |
| 3 | \`+ -\` | Addition, subtraction |
| 4 (lowest) | \`= += -=\` etc. | Assignment |

### Example Traces

\`\`\`java
int result = 2 + 3 * 4;     // 2 + 12 = 14 (not 20)
int result2 = (2 + 3) * 4;  // 5 * 4 = 20
int result3 = 10 - 4 / 2;   // 10 - 2 = 8 (not 3)
int result4 = 15 % 4 + 2;   // 3 + 2 = 5
\`\`\`

## String Concatenation with +

\`\`\`java
String name = "AP";
int score = 5;
System.out.println(name + " Score: " + score);
// Output: AP Score: 5

// Watch for this trick:
System.out.println(1 + 2 + " cats");   // "3 cats" (1+2 computed first)
System.out.println("cats " + 1 + 2);   // "cats 12" (string concat left to right)
\`\`\`
      `
    },
    {
      id: 'csaeo1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The expression 23 % 5 evaluates to _______.

2) In Java, multiplication and division have _______ precedence than addition and subtraction.

3) The expression "Score: " + 3 + 4 evaluates to the string "_______".
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', 'higher', 'Score: 34'],
        hint1: '23 / 5 = 4 remainder ?',
        hint2: 'They are evaluated first, like in standard math.',
        hint3: 'Once a String is involved, + concatenates left to right.',
        explanation: '23 % 5 = 3. * / % have higher precedence. "Score: " + 3 + 4 = "Score: 3" + 4 = "Score: 34".'
      }
    },
    {
      id: 'csaeo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Expression** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The expression 2 + 3 * 4 evaluates to ___',
            options: ['14', '20', '24', '12']
          },
          {
            label: 'To check if an integer n is even, use the condition ___',
            options: ['n % 2 == 0', 'n / 2 == 0', 'n * 2 == 0', 'n + 2 == 0']
          },
          {
            label: 'After int x = 5; x++; the value of x is ___',
            options: ['6', '5', '4', '10']
          }
        ],
        correctAnswers: ['14', 'n % 2 == 0', '6'],
        hint1: 'Multiplication before addition.',
        hint2: 'Even numbers have 0 remainder when divided by 2.',
        hint3: '++ increments by 1.',
        explanation: '3*4=12, then +2=14. n%2==0 checks even. x++ changes 5 to 6.'
      }
    },
    {
      id: 'csaeo1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Expressions & Operators

- **Modulus (%)** appears on almost every AP exam — know how to extract digits and check divisibility
- Watch for **operator precedence** tricks — always evaluate * / % before + -
- **String concatenation** with + is a classic trap: \`1 + 2 + " cats"\` vs \`"cats " + 1 + 2\`
- Trace code step by step — do not try to evaluate complex expressions in your head all at once
- Remember: integer division and modulus work together. \`123 / 10 = 12\` and \`123 % 10 = 3\`
      `
    },
    {
      id: 'csaeo1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does the following print?\nint n = 1234;\nSystem.out.println(n % 10);\nSystem.out.println(n / 10 % 10);',
            options: [
              '4 then 3',
              '1 then 2',
              '4 then 2',
              '34 then 12'
            ],
            correctAnswer: 0,
            explanation: 'n % 10 = 1234 % 10 = 4 (ones digit). n / 10 = 123 (int division), then 123 % 10 = 3 (tens digit). This pattern extracts individual digits.'
          },
          {
            question: 'What is printed?\nSystem.out.println("Result: " + 5 + 3);\nSystem.out.println("Result: " + (5 + 3));',
            options: [
              'Result: 53 then Result: 53',
              'Result: 8 then Result: 8',
              'Result: 53 then Result: 8',
              'Result: 8 then Result: 53'
            ],
            correctAnswer: 2,
            explanation: 'Line 1: "Result: " + 5 = "Result: 5", then + 3 = "Result: 53" (string concatenation). Line 2: (5 + 3) = 8 first (parentheses), then "Result: " + 8 = "Result: 8".'
          }
        ]
      }
    }
  ]
};
