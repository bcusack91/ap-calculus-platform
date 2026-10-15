export const csaIterationPart5Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csaitera5-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 5 of 7 — Standard Algorithms II: Digits, Min/Max, and Loop Bugs**

---

This part finishes the CED Topic 2.9 list: pulling the individual digits out of an integer and finding the smallest or largest of a sequence of values. It ends with a catalogue of the loop bugs that the AP exam builds its wrong answers from.

| In this part |
|---|
| Digit extraction with % 10 and / 10 |
| Counting, summing, and reversing digits |
| Minimum and maximum without an array |
| A catalogue of loop bugs |
      `
    },
    {
      id: 'csaitera5-digits',
      type: 'text' as const,
      content: `
## Pulling Digits Out of an Integer

For a non-negative int \`n\`:

- \`n % 10\` is the **last digit**.
- \`n / 10\` **removes** the last digit (int division).

| \`n\` | \`n % 10\` | \`n / 10\` |
|---|---|---|
| 4072 | 2 | 407 |
| 407 | 7 | 40 |
| 40 | 0 | 4 |
| 4 | 4 | 0 |

Repeat until \`n\` is 0, and you visit every digit from right to left.

\`\`\`java
public static int countDigits(int n) {
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

public static int sumDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}
\`\`\`

\`countDigits(4072)\` returns 4 and \`sumDigits(4072)\` returns 2 + 7 + 0 + 4 = 13.

### The n == 0 Edge Case

\`countDigits(0)\` returns 0, because 0 > 0 is false and the loop never runs. But 0 is written with one digit. A complete version handles it first:

\`\`\`java
if (n == 0) {
    return 1;
}
\`\`\`

\`sumDigits(0)\` is fine: it returns 0, which is the correct sum.

The parameter \`n\` is a copy of the caller's value, so \`n /= 10\` inside the method does not change the variable that was passed in.
      `
    },
    {
      id: 'csaitera5-reverse',
      type: 'text' as const,
      content: `
## Worked Example: Reversing the Digits

\`\`\`java
int n = 4072;
int rev = 0;
while (n > 0) {
    rev = rev * 10 + n % 10;
    n /= 10;
}
\`\`\`

| Check | \`n % 10\` | \`rev\` after | \`n\` after |
|---|---|---|---|
| 1 | 2 | 0 * 10 + 2 = 2 | 407 |
| 2 | 7 | 2 * 10 + 7 = 27 | 40 |
| 3 | 0 | 27 * 10 + 0 = 270 | 4 |
| 4 | 4 | 270 * 10 + 4 = 2704 | 0 |
| 5 | n is 0, fails | | |

\`rev * 10\` shifts the digits built so far one place left, and \`+ n % 10\` puts the new digit in the ones place.

**Leading zeros disappear.** Reversing 1200 produces 0, 0, 2, 21, so the result is 21, not 0021. An int has no way to store leading zeros.
      `
    },
    {
      id: 'csaitera5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int n = 5308;
int count = 0;
while (n > 0) {
    int d = n % 10;
    if (d % 2 == 0) {
        count++;
    }
    n /= 10;
}
System.out.println(count);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by the segment?',
            options: [
              '2',
              '1',
              '3',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'The digits visited are 8, 0, 3 and 5. Both 8 and 0 leave no remainder when divided by 2, so count is 2; forgetting that 0 is even gives 1.'
          },
          {
            question: 'If the first line were changed to int n = 0;, what would be printed?',
            options: [
              '0',
              '1',
              '-1',
              '10'
            ],
            correctAnswer: 0,
            explanation: 'The check 0 > 0 is false, so the body never runs and count stays 0, even though the single digit 0 is even.'
          },
          {
            question: 'Why does countDigits(0) return 0 instead of 1?',
            options: [
              'The check 0 > 0 is false, so the body never runs',
              'The method divides 0 by 10 and gets 0 again',
              'Java does not treat 0 as a digit of an int',
              'The count is reset to 0 on every single pass'
            ],
            correctAnswer: 0,
            explanation: 'The loop condition fails at the very first check, so count is never incremented. That is why a complete version returns 1 for n == 0 before the loop.'
          },
          {
            question: 'The reversing loop from the worked example is run with n = 4500. What is the final value of rev?',
            options: [
              '54',
              '5400',
              '0054',
              '504'
            ],
            correctAnswer: 0,
            explanation: 'The digits are visited as 0, 0, 5, 4, so rev goes 0, 0, 5, 54. The two zeros enter first, while rev is still 0, so they vanish; an int cannot hold leading zeros such as 0054.'
          }
        ]
      }
    },
    {
      id: 'csaitera5-minmax',
      type: 'text' as const,
      content: `
## Minimum and Maximum Without an Array

The values do not have to be stored anywhere. Here they come from a formula:

\`\`\`java
public static int f(int x) {
    return x * x - 8 * x + 20;
}
\`\`\`

| \`x\` | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| \`f(x)\` | 20 | 13 | 8 | 5 | 4 | 5 | 8 | 13 | 20 | 29 | 40 |

\`\`\`java
int minVal = f(0);      // start with the first value
int minX = 0;
for (int x = 1; x <= 10; x++) {
    int y = f(x);
    if (y < minVal) {
        minVal = y;
        minX = x;
    }
}
\`\`\`

After the loop, \`minVal\` is 4 and \`minX\` is 4. Recording the **position** along with the value is a common FRQ requirement.

### Two Safe Ways to Initialize

| Method | Minimum | Maximum |
|---|---|---|
| First value | \`int minVal = f(0);\` and start the loop at the second value | \`int maxVal = f(0);\` |
| Extreme constant | \`int minVal = Integer.MAX_VALUE;\` | \`int maxVal = Integer.MIN_VALUE;\` |

**Do not start at 0.** If every value is positive, a minimum that starts at 0 is never replaced, and the loop reports 0. For \`f\` above it would report a minimum of 0, a value \`f\` never produces. The same bug hits a maximum when every value is negative.

### Ties: < vs. <=

Over \`x = 0\` to \`8\`, the largest value of \`f\` is 20, reached at both \`x = 0\` and \`x = 8\`.

| Test | Which x is kept |
|---|---|
| \`if (y > maxVal)\` | 0, the **first** position with the maximum |
| \`if (y >= maxVal)\` | 8, the **last** position with the maximum |

Read the problem statement to see which position it wants.
      `
    },
    {
      id: 'csaitera5-bugs',
      type: 'text' as const,
      content: `
## A Catalogue of Loop Bugs

| Bug | Example | Symptom | Fix |
|---|---|---|---|
| Accumulator reset inside the loop | \`sum = 0;\` as the first line of the body | \`sum\` ends equal to the last value added | initialize once, before the loop |
| Integer average | \`double avg = sum / count;\` | the fractional part is lost | \`(double) sum / count\` |
| Off-by-one bound | \`k < n\` when \`n\` should be included | one value is skipped | compare the last value used with the last value wanted |
| Update in the wrong direction | \`k++\` in a loop that should count down | the loop does not end as intended | move the variable toward the stop value |
| Min or max started at 0 | \`int max = 0;\` with negative values | the answer is 0 | start at the first value or an extreme constant |
| Counter outside the \`if\` | \`count++\` after the closing brace of the \`if\` | every value is counted | put the update inside the \`if\` |
| Return in both branches | \`else return true;\` inside the loop | only the first value is checked | return the "all passed" answer after the loop |

### Example: The Reset Bug

\`\`\`java
int sum = 0;
for (int k = 1; k <= 5; k++) {
    sum = 0;      // bug
    sum += k;
}
System.out.println(sum);   // prints 5, not 15
\`\`\`

Each pass wipes out the previous total, so only the last value, 5, survives.

> 🎯 **AP Connection:** When an answer choice is "exactly the last value" or "exactly one too few," look for a reset or an off-by-one bound in the code.
      `
    },
    {
      id: 'csaitera5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Bug** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A loop meant to add 1 through 10 prints 10: ___',
            options: ['accumulator reset inside the loop', 'integer average', 'off-by-one bound', 'max started at 0']
          },
          {
            label: 'The largest of several negative temperatures is reported as 0: ___',
            options: ['max started at 0', 'accumulator reset inside the loop', 'integer average', 'off-by-one bound']
          },
          {
            label: 'A loop meant to add 1 through 10 prints 45: ___',
            options: ['off-by-one bound', 'integer average', 'max started at 0', 'accumulator reset inside the loop']
          }
        ],
        correctAnswers: ['accumulator reset inside the loop', 'max started at 0', 'off-by-one bound'],
        hint1: 'Only the last value seems to have been added.',
        hint2: 'Which starting value can never be beaten by a negative number?',
        hint3: '1 + 2 + ... + 9 is 45.',
        explanation: 'A total equal to the last value means the accumulator is reset each pass. A maximum of 0 among negative values means max started at 0. A sum of 45 means the loop stopped at 9, an off-by-one bound such as k < 10.'
      }
    },
    {
      id: 'csaitera5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Use \`countDigits\`, \`sumDigits\`, and the reversing loop from this part.

1) What does \`countDigits(90210)\` return?

2) What does \`sumDigits(90210)\` return?

3) Using the table of \`f(x)\`, what is the smallest value of \`f(x)\` for x from 0 to 10?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '12', '4'],
        hint1: 'Each pass removes one digit until n is 0.',
        hint2: 'Add 9, 0, 2, 1 and 0.',
        hint3: 'Find the bottom of the table row.',
        explanation: '90210 has five digits, and the zeros count because the loop stops only when n reaches 0. Its digits sum to 9 + 0 + 2 + 1 + 0 = 12. The smallest value in the table is f(4) = 4.'
      }
    },
    {
      id: 'csaitera5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
public static int g(int x) {
    return -x * x + 6 * x - 20;
}
\`\`\`

\`\`\`java
int maxVal = 0;
for (int x = 0; x <= 6; x++) {
    if (g(x) > maxVal) {
        maxVal = g(x);
    }
}
System.out.println(maxVal);
\`\`\`

For x from 0 to 6, \`g(x)\` takes the values -20, -15, -12, -11, -12, -15, -20.
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by the segment?',
            options: [
              '0',
              '-11',
              '-20',
              '-12'
            ],
            correctAnswer: 0,
            explanation: 'Every value of g is negative, so g(x) > 0 is never true and maxVal keeps its starting value of 0. Starting from g(0) or Integer.MIN_VALUE would give -11.'
          },
          {
            question: 'Which change to the first line makes the segment print the largest value of g for any formula?',
            options: [
              'int maxVal = Integer.MIN_VALUE;',
              'int maxVal = Integer.MAX_VALUE;',
              'int maxVal = -1;',
              'int maxVal = g(6) - 1;'
            ],
            correctAnswer: 0,
            explanation: 'Every int is at least Integer.MIN_VALUE, so the first value always replaces it and the true maximum follows. Integer.MAX_VALUE can never be beaten, -1 fails when all values are below -1, and g(6) - 1 depends on this particular formula.'
          },
          {
            question: 'The test is changed to g(x) >= maxVal and the first line to int maxVal = g(0);. A second variable records x each time maxVal is assigned inside the loop. Which x is recorded last?',
            options: [
              '3',
              '0',
              '6',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'g(3) = -11 is the only maximum, so the last assignment happens at x = 3; afterward every value is smaller. The tie rule matters only when the maximum appears more than once.'
          }
        ]
      }
    }
  ]
}
