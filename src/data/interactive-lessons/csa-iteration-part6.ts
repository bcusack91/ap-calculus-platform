export const csaIterationPart6Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csaitera6-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 6 of 7 — AP-Style Practice**

---

Iteration is on every AP Computer Science A exam. Multiple-choice questions ask you to trace loops and count passes, and free-response question 1 (Methods and Control Structures) asks you to write methods built from the standard algorithms in Parts 4 and 5. This part practices both.

### How to Attack a Loop Question

| Step | Do this |
|---|---|
| 1 | Find the loop variable and write its first value, its stop test, and its update. |
| 2 | Make a trace table with one column per changing variable. |
| 3 | Add a row at every check. Stop at the first check that is false, or at a \`return\`. |
| 4 | Read the output statements: inside the loop (many lines) or after it (one line)? |
| 5 | Check the edges: zero passes, the boundary value, and the variable's final value. |

> 🔑 **Key Concept:** Most wrong answers on loop traces come from one predictable slip: one pass too many or too few, an update read before the body instead of after, or a final value taken from the last pass instead of the failed check.
      `
    },
    {
      id: 'csaitera6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
int x = 1;
int y = 100;
int n = 0;
while (x < y) {
    x *= 3;
    y -= 10;
    n++;
}
System.out.println(n + " " + x + " " + y);
\`\`\`

**Segment B**
\`\`\`java
int total = 0;
for (int k = 12; k > 0; k -= 5) {
    if (k % 2 == 0) {
        total += k;
    } else {
        total -= 1;
    }
}
System.out.println(total);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4 81 60',
              '3 27 70',
              '5 243 50',
              '4 27 70'
            ],
            correctAnswer: 0,
            explanation: 'The pairs after each pass are (3, 90), (9, 80), (27, 70) and (81, 60). The check 81 < 60 is false, so the loop ends after 4 passes with x at 81 and y at 60.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '13',
              '14',
              '12',
              '11'
            ],
            correctAnswer: 0,
            explanation: 'k takes the values 12, 7 and 2. The total goes 12 (12 is even), 11 (7 is odd), then 13 (2 is even); the next value, -3, fails k > 0.'
          }
        ]
      }
    },
    {
      id: 'csaitera6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1: Digit Sums

**(a)** Write a static method \`sumOfDigits\` that returns the sum of the digits of \`n\`. Precondition: \`n >= 0\`.

**(b)** Write a static method \`stepsToSingleDigit\` that returns how many times \`sumOfDigits\` must be applied to \`n\`, one result after another, before the value is less than 10. Assume part (a) works as specified, and use it.

| Call | Values | Returns |
|---|---|---|
| \`stepsToSingleDigit(9875)\` | 9875, 29, 11, 2 | 3 |
| \`stepsToSingleDigit(99)\` | 99, 18, 9 | 2 |
| \`stepsToSingleDigit(7)\` | 7 | 0 |

### Solution

\`\`\`java
public static int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

public static int stepsToSingleDigit(int n) {
    int steps = 0;
    while (n >= 10) {
        n = sumOfDigits(n);
        steps++;
    }
    return steps;
}
\`\`\`

Part (b) is a **condition-controlled** loop: nobody knows in advance how many steps a number needs, so a \`while\` loop is the natural choice. Calling the part (a) method, instead of rewriting digit code, is what the question expects.

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Digit loop | uses \`% 10\` to get a digit and \`/ 10\` to remove it, ending when \`n\` is 0 |
| Accumulate | initializes \`sum\` before the loop and adds every digit |
| Helper call | calls \`sumOfDigits(n)\` in part (b) and **stores** the result in \`n\` |
| Stop test | stops exactly when the value is less than 10 |
| Result | **returns** the count after the loop |
      `
    },
    {
      id: 'csaitera6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About Task 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes the part (b) loop as while (n > 10). For which call does the method return a wrong answer?',
            options: [
              'stepsToSingleDigit(10)',
              'stepsToSingleDigit(9875)',
              'stepsToSingleDigit(9999)',
              'stepsToSingleDigit(1000)'
            ],
            correctAnswer: 0,
            explanation: 'For 10 the correct method takes one step (10 becomes 1), but 10 > 10 is false, so the loop never runs and the method returns 0. The other calls never produce the value 10 exactly (9875 gives 29, 11, 2; 9999 gives 36, 9; 1000 gives 1), so they are unaffected.'
          },
          {
            question: 'A student writes the part (a) loop as while (n >= 10). What does the method return for 4072?',
            options: [
              '9',
              '13',
              '14',
              '11'
            ],
            correctAnswer: 0,
            explanation: 'The loop adds 2, then 7, then 0, and stops when n is 4, so the leading digit is never added. The sum is 9 instead of 13.'
          },
          {
            question: 'In part (b), what goes wrong if the loop body calls sumOfDigits(n); without assigning the result to n?',
            options: [
              'It loops forever when n >= 10',
              'It returns the sum of the digits of n instead',
              'It returns one step fewer than the correct count',
              'It throws an exception once n drops below 10'
            ],
            correctAnswer: 0,
            explanation: 'The returned digit sum is thrown away, so n never changes and n >= 10 stays true. A method call does not change an int variable passed to it.'
          }
        ]
      }
    },
    {
      id: 'csaitera6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2: Smallest and Largest Factors

**(a)** Write a static method \`firstFactor\` that returns the smallest factor of \`n\` that is greater than 1. Precondition: \`n >= 2\`.

**(b)** Write a static method \`largestProperFactor\` that returns the largest factor of \`n\` that is less than \`n\`. Use \`firstFactor\`.

| Call | \`firstFactor\` | \`largestProperFactor\` |
|---|---|---|
| \`n = 36\` | 2 | 18 |
| \`n = 45\` | 3 | 15 |
| \`n = 13\` | 13 | 1 |

### Solution

\`\`\`java
public static int firstFactor(int n) {
    for (int d = 2; d <= n; d++) {
        if (n % d == 0) {
            return d;
        }
    }
    return n;
}

public static int largestProperFactor(int n) {
    return n / firstFactor(n);
}
\`\`\`

- **Early return.** The first \`d\` that divides \`n\` is the answer, so return it at once.
- **The bound is \`d <= n\`.** For a prime such as 13, the only factor above 1 is 13 itself. With \`d < n\` the loop would find nothing.
- **The final \`return n;\`.** The loop always returns by the time \`d\` reaches \`n\`, but the compiler cannot prove that, so a method with a return type needs a return statement after the loop.
- **Part (b) in one line.** Factors come in pairs that multiply to \`n\`. Pairing the smallest factor above 1 with \`n\` divided by it gives the largest factor below \`n\`.

### A Third Helper: countMultiples

\`\`\`java
public static int countMultiples(int low, int high, int d) {
    int count = 0;
    for (int k = low; k <= high; k++) {
        if (k % d == 0) {
            count++;
        }
    }
    return count;
}
\`\`\`

\`countMultiples(10, 40, 6)\` returns 5, for 12, 18, 24, 30 and 36.
      `
    },
    {
      id: 'csaitera6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`stepsToSingleDigit(19)\` return?

2) What does \`firstFactor(91)\` return?

3) What does \`countMultiples(1, 100, 7)\` return?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '7', '14'],
        hint1: '19 becomes 10, and 10 is not yet a single digit.',
        hint2: 'Try 2, 3, 5 and 7.',
        hint3: 'The multiples of 7 up to 100 are 7, 14, ..., 98.',
        explanation: '19 becomes 10 and then 1, which is 2 steps. 91 is 7 times 13, and 7 is the smallest factor above 1. 98 is 7 times 14, so there are 14 multiples of 7 from 1 to 100.'
      }
    },
    {
      id: 'csaitera6-mc3',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 3: Reasoning About Task 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does largestProperFactor(91) return?',
            options: [
              '13',
              '7',
              '1',
              '45'
            ],
            correctAnswer: 0,
            explanation: 'firstFactor(91) is 7, and 91 / 7 is 13. Since 7 is the smallest factor above 1, its partner 13 is the largest factor below 91.'
          },
          {
            question: 'A student writes the firstFactor loop header as for (int d = 2; d < n; d++) and keeps the return n; after the loop. What happens when the method is called with 13?',
            options: [
              'It returns 13 from the return after the loop',
              'It returns 12, the last value of d',
              'It returns 1, the other factor',
              'It throws an ArithmeticException'
            ],
            correctAnswer: 0,
            explanation: 'No d from 2 to 12 divides 13, so the loop ends without returning and the statement after the loop returns n, which is 13. The change still works because the final return covers primes.'
          },
          {
            question: 'Which call to countMultiples returns 0?',
            options: [
              'countMultiples(8, 13, 7)',
              'countMultiples(7, 7, 7)',
              'countMultiples(1, 20, 5)',
              'countMultiples(10, 40, 6)'
            ],
            correctAnswer: 0,
            explanation: 'From 8 to 13 there is no multiple of 7, since 7 is too small and 14 is too large. The other calls return 1, 4 and 5.'
          }
        ]
      }
    },
    {
      id: 'csaitera6-deductions',
      type: 'text' as const,
      content: `
## Common FRQ Deductions on Loop Methods

| Mistake | Why it costs points |
|---|---|
| Accumulator declared inside the loop | it restarts every pass and is out of scope after the loop |
| Off-by-one loop bound | skips the last value or processes one value too many |
| Returning inside the loop on both branches | the method stops after one check |
| Printing the answer instead of returning it | the method must return a value to its caller |
| Calling a helper and ignoring its result | \`sumOfDigits(n);\` alone changes nothing; write \`n = sumOfDigits(n);\` |
| Int division for an average | loses the fractional part; cast to double first |
| Rewriting a part (a) method instead of calling it | when the question says to use the earlier method, the call is what is expected, and rewritten code adds chances for errors |

> 🎯 **AP Connection:** Write with \`int\`, \`double\`, \`boolean\`, \`%\`, \`/\`, and the \`Math\` methods on the Java Quick Reference (\`Math.abs\`, \`Math.pow\`, \`Math.sqrt\`, \`Math.random\`). They are enough for every iteration task the exam sets.
      `
    }
  ]
}
