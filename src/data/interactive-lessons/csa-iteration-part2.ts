export const csaIterationPart2Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csaitera2-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 2 of 7 — while Loops and Trace Tables**

---

A \`while\` loop repeats a block of statements as long as a Boolean expression stays true (CED Topic 2.7). Part 1 showed the syntax. This part slows the loop down: exactly when the condition is checked, what happens when it is false from the start, how to recognize a loop that never ends, and how to record every pass in a trace table.

| In this part |
|---|
| How a while loop executes, step by step |
| Loops that run zero times |
| Condition-controlled loops: doubling and halving |
| Infinite loops and their causes |
| return inside a loop |
| The trace-table method |
      `
    },
    {
      id: 'csaitera2-mechanics',
      type: 'text' as const,
      content: `
## How a while Loop Executes

\`\`\`java
while (condition) {
    // body
}
// next statement
\`\`\`

1. **Check** the condition.
2. If it is **false**, skip the body and continue with the statement after the loop.
3. If it is **true**, run the **whole** body, then go back to step 1.

Two consequences follow from this order.

- **The condition is checked only at the top.** If a statement in the middle of the body makes the condition false, the rest of the body still runs. The loop ends at the next check.
- **The body can run zero times.** If the condition is false at the first check, the body is skipped entirely.

\`\`\`java
int n = 10;
while (n < 5) {
    n += 2;
}
System.out.println(n);   // prints 10: the body never ran
\`\`\`

## Count-Controlled vs. Condition-Controlled Loops

| Kind | You know in advance | Typical loop | Example |
|---|---|---|---|
| **Count-controlled** | how many passes are needed | \`for\` | add the numbers 1 to 100 |
| **Condition-controlled** | only when to stop | \`while\` | double a value until it passes a limit |

Either kind of loop can do either job, but a \`while\` loop reads naturally when the number of passes is something the program **discovers** by running.

> 🔑 **Key Concept:** Before every pass, a \`while\` loop asks one question: "Is the condition still true?" The loop ends normally only when the answer is no. A \`return\` inside the body leaves the whole method instead (see below).
      `
    },
    {
      id: 'csaitera2-worked',
      type: 'text' as const,
      content: `
## Worked Example 1: Doubling Until a Limit

\`\`\`java
int value = 3;
int steps = 0;
while (value <= 50) {
    value *= 2;
    steps++;
}
System.out.println(steps + " " + value);
\`\`\`

| Check | \`value <= 50\`? | \`value\` after the body | \`steps\` after the body |
|---|---|---|---|
| 1 | 3 <= 50, true | 6 | 1 |
| 2 | 6 <= 50, true | 12 | 2 |
| 3 | 12 <= 50, true | 24 | 3 |
| 4 | 24 <= 50, true | 48 | 4 |
| 5 | 48 <= 50, true | 96 | 5 |
| 6 | 96 <= 50, false | loop ends | |

The program prints \`5 96\`. The final \`value\` is **past** the limit: the loop stops only after the value that fails the condition has been computed.

## Worked Example 2: Halving

\`\`\`java
int n = 100;
int count = 0;
while (n > 1) {
    n /= 2;
    count++;
}
\`\`\`

| Check | \`n > 1\`? | \`n\` after (int division) | \`count\` after |
|---|---|---|---|
| 1 | 100, true | 50 | 1 |
| 2 | 50, true | 25 | 2 |
| 3 | 25, true | 12 | 3 |
| 4 | 12, true | 6 | 4 |
| 5 | 6, true | 3 | 5 |
| 6 | 3, true | 1 | 6 |
| 7 | 1, false | loop ends | |

\`count\` ends at 6: the number of times 100 can be halved with int division before it reaches 1.

> 🎯 **AP Connection:** A doubling or halving loop has no simple "end minus start" count. List the values until the condition fails, then count the passes.
      `
    },
    {
      id: 'csaitera2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
int k = 20;
int total = 0;
while (k > 20) {
    total += k;
    k -= 5;
}
System.out.println(total + " " + k);
\`\`\`

**Segment B**
\`\`\`java
int a = 1;
while (a < 10) {
    a *= 3;
    System.out.print(a + " ");
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '0 20',
              '20 15',
              '0 15',
              '20 20'
            ],
            correctAnswer: 0,
            explanation: 'At the first check 20 > 20 is false, so the body never runs and both variables keep their starting values. Printing 20 15 would require one pass through the body.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '3 9 27',
              '1 3 9',
              '3 9',
              '1 3 9 27'
            ],
            correctAnswer: 0,
            explanation: 'Each pass multiplies first and prints second, so 1 is never printed. When a becomes 27 the rest of the body still runs and prints it; the loop ends only at the next check.'
          }
        ]
      }
    },
    {
      id: 'csaitera2-infinite',
      type: 'text' as const,
      content: `
## Infinite Loops

A loop is **infinite** when no pass through the body can make the condition false. The program appears to hang, and the statements after the loop never run.

| Cause | Example | Why it never ends |
|---|---|---|
| No update | \`while (i < 5) { sum += i; }\` | \`i\` never changes |
| The wrong variable is updated | \`while (i < 5) { j++; }\` | the condition tests \`i\`, but only \`j\` changes |
| Stepping over the stop value | \`int i = 0; while (i != 5) { i += 2; }\` | \`i\` is 0, 2, 4, 6, ... and is never exactly 5 |
| Semicolon after the header | \`while (i < 5); { i++; }\` | the empty statement \`;\` is the whole body, so \`i++\` never runs |

A fifth cause is an update in the **wrong direction**:

\`\`\`java
int i = 10;
while (i > 0) {
    i++;      // moves away from 0
}
\`\`\`

This loop does not stop when intended. It runs more than two billion passes, until \`i\` goes past \`Integer.MAX_VALUE\`, overflows to a negative value, and finally fails the test. Treat it as an infinite-loop bug: the update must move the variable **toward** the value that ends the loop.

> 🔑 **Key Concept:** For every loop, ask three questions. Which variable does the condition test? Does the body change it? Does each change move it toward making the condition false? Using \`<\` or \`>\` instead of \`!=\` also protects a loop that steps past its target.
      `
    },
    {
      id: 'csaitera2-return',
      type: 'text' as const,
      content: `
## return Inside a Loop Ends the Method

A \`return\` statement ends the **method**, not just the loop. The remaining passes, and any statements after the loop, are skipped.

\`\`\`java
/** Returns the number of years until balance reaches goal when it grows
 *  by rate each year, or -1 if that would take more than 50 years. */
public static int yearsToGoal(double balance, double goal, double rate) {
    int years = 0;
    while (balance < goal) {
        if (years == 50) {
            return -1;
        }
        balance = balance * (1 + rate);
        years++;
    }
    return years;
}
\`\`\`

| Call | What happens | Returns |
|---|---|---|
| \`yearsToGoal(1000, 1200, 0.1)\` | 1000 grows to 1100, then to 1210; the check 1210 < 1200 is false | 2 |
| \`yearsToGoal(500, 400, 0.05)\` | 500 < 400 is false at the first check; the body never runs | 0 |
| \`yearsToGoal(100, 1000, 0.01)\` | after 50 years the balance is only about 164.46, so the \`if\` returns from inside the loop | -1 |

The method has two exits. The \`return -1\` inside the loop is the "give up" exit. The \`return years\` after the loop is the "condition became false" exit.
      `
    },
    {
      id: 'csaitera2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

\`\`\`java
int n = 81;
int count = 0;
while (n > 1) {
    n = n / 3;
    count++;
}
\`\`\`

1) What is the value of \`count\` after the loop?

2) If \`n\` started at 1 instead of 81, how many times would the body run?

3) Starting from 81, how many times is the condition \`n > 1\` evaluated?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '0', '5'],
        hint1: 'List the values of n: 81, 27, ...',
        hint2: 'Check the condition before the first pass.',
        hint3: 'The condition is checked once before each pass, plus once more when it fails.',
        explanation: 'n goes 81, 27, 9, 3, 1, so the body runs 4 times. Starting at 1, the first check 1 > 1 is false and the body never runs. Four true checks plus the final false check make 5 evaluations.'
      }
    },
    {
      id: 'csaitera2-tracetable',
      type: 'text' as const,
      content: `
## The Trace-Table Method

1. Make one column for each variable that changes, one for the condition, and one for output.
2. Write the starting values in the first row.
3. At each check, evaluate the condition with the **current** values. If it is true, run the body one statement at a time and record the new values.
4. Add a final row for the check that is false. That row ends the loop.
5. Run the statements after the loop with the final values.

## Worked Example 3: Two Variables Moving Toward Each Other

\`\`\`java
int a = 2;
int b = 30;
while (a < b) {
    a = a * 2;
    b = b - 4;
}
System.out.println(a + " " + b);
\`\`\`

| Check | \`a < b\`? | \`a\` after | \`b\` after |
|---|---|---|---|
| 1 | 2 < 30, true | 4 | 26 |
| 2 | 4 < 26, true | 8 | 22 |
| 3 | 8 < 22, true | 16 | 18 |
| 4 | 16 < 18, true | 32 | 14 |
| 5 | 32 < 14, false | loop ends | |

The program prints \`32 14\`. The body ran 4 times and the condition was evaluated 5 times. A loop whose body runs k times evaluates its condition k + 1 times, because the last check is the one that fails (unless a \`return\` leaves early).

> 🎯 **AP Connection:** On the exam, write the trace table in the margin. Most wrong answer choices come from stopping one row early or reading a value before the body has updated it.
      `
    },
    {
      id: 'csaitera2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment C**
\`\`\`java
int x = 1;
while (x != 10) {
    x += 2;
}
System.out.println(x);
\`\`\`

Questions 2 and 3 use the method \`yearsToGoal\` shown above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the result of running Segment C?',
            options: [
              'It prints 9',
              'It prints 10',
              'It prints 11',
              'It never prints'
            ],
            correctAnswer: 3,
            explanation: 'x takes only odd values (1, 3, 5, ...), so x != 10 is true at every check and the loop never ends. Changing the condition to x < 10 would make it stop and print 11.'
          },
          {
            question: 'What value is returned by yearsToGoal(1000, 1000, 0.5)?',
            options: [
              '0',
              '1',
              '-1',
              '50'
            ],
            correctAnswer: 0,
            explanation: 'The first check, 1000 < 1000, is false, so the body never runs and the method returns the starting value of years. A loop body can run zero times.'
          },
          {
            question: 'When does yearsToGoal reach the return statement written after its loop?',
            options: [
              'When the check balance < goal is false',
              'When years equals 50 inside the body',
              'After each pass through the loop body',
              'Only when rate is a negative number'
            ],
            correctAnswer: 0,
            explanation: 'The code after a while loop runs only once the condition fails. When years reaches 50, the return inside the loop ends the method first, so the statement after the loop is skipped.'
          }
        ]
      }
    }
  ]
}
