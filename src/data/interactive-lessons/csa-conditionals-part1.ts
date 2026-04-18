export const csaConditionalsPart1Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csaco1-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 1 of 7 — Nested Ifs, Complex Conditions, and Common Patterns**

---

## Nested If Statements

\`\`\`java
int temp = 75;
boolean isSunny = true;

if (temp > 70) {
    if (isSunny) {
        System.out.println("Go to the beach!");
    } else {
        System.out.println("Stay in and read.");
    }
} else {
    System.out.println("Too cold for outdoor activities.");
}
\`\`\`

> 🔑 **Nested ifs** create conditions within conditions. The inner if only runs when the outer if is true. Trace these from the outside in.

---

## Equivalent Conditions

Many conditions can be rewritten in different ways:

| Original | Equivalent | Why |
|----------|-----------|-----|
| \`if (x > 0) { return true; } else { return false; }\` | \`return x > 0;\` | The boolean expression IS the result |
| \`if (flag == true)\` | \`if (flag)\` | flag is already boolean |
| \`if (flag == false)\` | \`if (!flag)\` | Negating is cleaner |
| \`if (x >= 0 && x <= 100)\` | Range check: 0 to 100 | Common pattern for bounds checking |
      `
    },
    {
      id: 'csaco1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?\nint x = 5; int y = 10;\nif (x < y) {\n    if (x + y > 20) {\n        System.out.println("A");\n    } else {\n        System.out.println("B");\n    }\n} else {\n    System.out.println("C");\n}',
            options: [
              'A',
              'B',
              'C',
              'AB'
            ],
            correctAnswer: 1,
            explanation: 'x < y (5 < 10) is true, so we enter the outer if. Then x + y > 20 (15 > 20) is false, so the inner else executes and prints "B".'
          },
          {
            question: 'Which is equivalent to: if (done == true) return true; else return false;',
            options: [
              'return true;',
              'return done;',
              'return !done;',
              'return false;'
            ],
            correctAnswer: 1,
            explanation: 'Since done is already a boolean, the entire if/else just returns done as-is. If done is true, it returns true. If done is false, it returns false. So return done; is equivalent.'
          }
        ]
      }
    },
    {
      id: 'csaco1-content',
      type: 'text' as const,
      content: `
## Common Conditional Patterns

### 1. Finding Min/Max
\`\`\`java
int max;
if (a > b) {
    max = a;
} else {
    max = b;
}
// Equivalent: int max = Math.max(a, b);
\`\`\`

### 2. Absolute Value
\`\`\`java
int absVal;
if (x < 0) {
    absVal = -x;
} else {
    absVal = x;
}
// Equivalent: int absVal = Math.abs(x);
\`\`\`

### 3. Clamping a Value
\`\`\`java
// Keep score between 0 and 100
if (score > 100) {
    score = 100;
} else if (score < 0) {
    score = 0;
}
\`\`\`

### 4. Dangling Else Problem
\`\`\`java
if (x > 0)
    if (y > 0)
        System.out.println("Both positive");
else
    System.out.println("This is the INNER else!");
// The else matches the NEAREST unmatched if (the inner one)
\`\`\`
      `
    },
    {
      id: 'csaco1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In a dangling else situation, the else always pairs with the _______ unmatched if.

2) The statement if (flag == true) can be simplified to if (_______).

3) Math.abs(-7) returns _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nearest', 'flag', '7'],
        hint1: 'The closest one that does not already have an else.',
        hint2: 'The variable itself is already true or false.',
        hint3: 'Absolute value removes the negative sign.',
        explanation: 'Dangling else → nearest if. flag == true simplifies to flag. Math.abs(-7) = 7.'
      }
    },
    {
      id: 'csaco1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Simplify the Code** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'if (x > 0) return true; else return false; simplifies to ___',
            options: ['return x > 0;', 'return true;', 'return false;', 'return x;']
          },
          {
            label: 'To check if x is between 1 and 100 inclusive, use ___',
            options: ['x >= 1 && x <= 100', 'x >= 1 || x <= 100', 'x > 1 && x < 100', '1 < x < 100']
          },
          {
            label: 'In Java, 1 < x < 100 is ___',
            options: ['A compile error (Java does not support chained comparisons)', 'Valid syntax for a range check', 'Equivalent to x >= 1 && x <= 100', 'A runtime exception']
          }
        ],
        correctAnswers: ['return x > 0;', 'x >= 1 && x <= 100', 'A compile error (Java does not support chained comparisons)'],
        hint1: 'The boolean expression is the return value.',
        hint2: 'AND ensures both bounds are satisfied.',
        hint3: 'Java requires explicit comparisons connected by && or ||.',
        explanation: 'Return the boolean directly. Use && for range checks. Java does not support chained comparisons like Python.'
      }
    },
    {
      id: 'csaco1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Conditionals

- **Trace nested ifs** from the outside in — do not skip levels
- The **dangling else** is a trick question favorite — else matches the nearest unmatched if
- Simplify boolean returns: \`if (cond) return true; else return false;\` → \`return cond;\`
- \`Math.abs()\`, \`Math.max()\`, \`Math.min()\` are allowed on the AP exam — know them
- Watch for conditions that are always true or always false (tautologies/contradictions)
- Common error: using \`1 < x < 100\` — Java requires \`x > 1 && x < 100\`
      `
    },
    {
      id: 'csaco1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?\nint a = 3, b = 7, c = 5;\nif (a > b)\n    if (a > c)\n        System.out.println("A largest");\nelse\n    System.out.println("Not A");\nSystem.out.println("Done");',
            options: [
              'A largest then Done',
              'Not A then Done',
              'Done',
              'A largest then Not A then Done'
            ],
            correctAnswer: 2,
            explanation: 'a > b (3 > 7) is false, so the outer if body is skipped entirely. The else belongs to the INNER if (dangling else), so it is also skipped. Only "Done" prints.'
          },
          {
            question: 'Which method call returns the larger of two values x and y?',
            options: [
              'Math.max(x, y)',
              'Math.abs(x, y)',
              'Math.min(x, y)',
              'Math.pow(x, y)'
            ],
            correctAnswer: 0,
            explanation: 'Math.max(x, y) returns the larger value. Math.min returns the smaller. Math.abs returns absolute value of one number. Math.pow computes x raised to the y power.'
          }
        ]
      }
    }
  ]
};
