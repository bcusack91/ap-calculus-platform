export const csaBooleanIfPart5Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csaboole5-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 5 of 7 — Pitfalls: Sequential ifs, Assignment vs. Equality, and Flags**

---

Selection code often compiles and still gives the wrong answer. This part collects the mistakes that show up most in AP questions about CED Topics 2.3 and 2.5, and the habits that prevent them.

| In this part |
|---|
| Separate ifs vs. if-else |
| \`=\` vs. \`==\` in a condition |
| Storing a condition in a boolean variable |
| Flag variables that must stay false |
      `
    },
    {
      id: 'csaboole5-sequential',
      type: 'text' as const,
      content: `
## Separate ifs Are All Tested

When ifs are written one after another, **every** condition is tested, and each test sees any change made by the ones above it.

\`\`\`java
int x = 5;
if (x > 3) {
    x = x - 4;
}
if (x < 3) {
    x = x + 10;
}
System.out.println(x);
\`\`\`

| Step | Test | \`x\` |
|---|---|---|
| start | | 5 |
| first if | 5 > 3 is true | 1 |
| second if | 1 < 3 is true | 11 |

Output: \`11\`. Change the second \`if\` to \`else if\` and the second test is skipped once the first one runs, so the output is \`1\`.

| Structure | How many bodies can run? |
|---|---|
| Separate ifs | Any number, from none to all |
| \`if\` - \`else if\` chain without \`else\` | At most one |
| \`if\` - \`else if\` - \`else\` | Exactly one |

### When Separate ifs Overwrite Each Other

\`\`\`java
int pts = 85;
String grade = "";
if (pts >= 70) { grade = "C"; }
if (pts >= 80) { grade = "B"; }
if (pts >= 90) { grade = "A"; }
\`\`\`

Ascending order works here: 85 sets \`"C"\`, then \`"B"\`, and the last test fails, so \`grade\` ends as \`"B"\`. Reverse the three lines and a score of 95 would set \`"A"\`, then \`"B"\`, then \`"C"\`. The last true test always wins with separate ifs.
      `
    },
    {
      id: 'csaboole5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the first segment above (the two separate ifs), what is printed when x starts at 2?',
            options: [
              '12',
              '2',
              '8',
              '-2'
            ],
            correctAnswer: 0,
            explanation: 'The first test 2 > 3 is false, so x stays 2. The second test 2 < 3 is true, so x becomes 12.'
          },
          {
            question: 'With the three grade lines in reversed order (the 90 test first, the 70 test last), what is grade for pts = 95?',
            options: [
              '"C"',
              '"A"',
              '"B"',
              '""'
            ],
            correctAnswer: 0,
            explanation: 'All three tests are true for 95, and separate ifs run every true body. The last body to run is the 70 test, so "C" overwrites the earlier "A" and "B".'
          }
        ]
      }
    },
    {
      id: 'csaboole5-assign',
      type: 'text' as const,
      content: `
## \`=\` vs. \`==\` in a Condition

\`=\` stores a value; \`==\` compares two values. What happens when you mix them up depends on the type.

| Code | Type | What happens |
|---|---|---|
| \`if (x = 5)\` | \`int x\` | Compile error: the assignment produces an int, and a condition must be a boolean |
| \`if (done = true)\` | \`boolean done\` | Compiles: stores true in \`done\`, and the body always runs |
| \`if (done == true)\` | \`boolean done\` | Works, but \`if (done)\` says the same thing |
| \`if (done == false)\` | \`boolean done\` | Works, but \`if (!done)\` says the same thing |

The boolean case is the dangerous one, because the compiler cannot catch it.

## Storing a Condition

A Boolean expression can be assigned directly. These two segments do the same thing:

\`\`\`java
boolean late;
if (minutes > 30) {
    late = true;
} else {
    late = false;
}
\`\`\`

\`\`\`java
boolean late = minutes > 30;
\`\`\`

## Flag Variables

A **flag** is a boolean that starts with one value and is switched only when a test fails:

\`\`\`java
boolean valid = true;
if (month < 1 || month > 12) {
    valid = false;
}
if (day < 1 || day > 31) {
    valid = false;
}
\`\`\`

Each check can turn \`valid\` off, and nothing turns it back on. A common bug adds an \`else\` to the second check:

\`\`\`java
if (day < 1 || day > 31) {
    valid = false;
} else {
    valid = true;     // bug: erases a failed month check
}
\`\`\`

With \`month = 13\` and \`day = 5\`, the first check sets \`valid\` to false, and the buggy \`else\` sets it back to true.
      `
    },
    {
      id: 'csaboole5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Spot the Pitfall** 🎯

**Segment E**
\`\`\`java
boolean done = false;
if (done = true) {
    System.out.print("finished");
}
System.out.print(done);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed when Segment E runs?',
            options: [
              'finishedtrue',
              'false',
              'finishedfalse',
              'Nothing, since it does not compile'
            ],
            correctAnswer: 0,
            explanation: 'The condition assigns true to done, and the value of that assignment, true, is the condition, so the body prints finished. The last line then prints the new value of done, which is true.'
          },
          {
            question: 'Which input exposes the bug in the version of the date check with the else?',
            options: [
              'month 13 and day 5',
              'month 10 and day 40',
              'month 12 and day 31',
              'month 13 and day 40'
            ],
            correctAnswer: 0,
            explanation: 'A bad month with a good day is the only case the else erases: the month check sets valid to false, then the else sets it to true. A bad day always ends false and a fully valid date ends true, so those inputs give the right answer.'
          }
        ]
      }
    },
    {
      id: 'csaboole5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Clean It Up** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For an int x, the line if (x = 5) ___',
            options: ['does not compile', 'is always true', 'is always false', 'compares x with 5']
          },
          {
            label: 'The clearest replacement for if (open == false) is ___',
            options: ['if (!open)', 'if (open)', 'if (open = false)', 'if (false)']
          },
          {
            label: 'After boolean late = minutes > 30; with minutes equal to 30, late is ___',
            options: ['false', 'true', '30', 'not assigned']
          }
        ],
        correctAnswers: ['does not compile', 'if (!open)', 'false'],
        hint1: 'An assignment to an int produces an int.',
        hint2: 'Which condition is true exactly when open is false?',
        hint3: '30 > 30 is a strict comparison.',
        explanation: 'An int assignment cannot serve as a condition, so it is a compile error. if (!open) is true exactly when open is false. 30 > 30 is false, so late stores false.'
      }
    },
    {
      id: 'csaboole5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Pitfall | Fix |
|---|---|
| Separate ifs both run | Use \`else if\` when only one body should run |
| Later test sees a changed value | Trace with a table, one if at a time |
| \`if (done = true)\` | Write \`if (done)\` |
| Wordy if-else that sets a boolean | Assign the condition: \`late = minutes > 30;\` |
| Flag reset by an \`else\` | Only ever switch a flag one way |

> 🎯 **AP Connection:** Free-response rubrics take points for code that "works for some cases but not all." Flag bugs and overwriting ifs are the usual cause, so test a case where an early check fails and a later one passes.
      `
    }
  ]
}
