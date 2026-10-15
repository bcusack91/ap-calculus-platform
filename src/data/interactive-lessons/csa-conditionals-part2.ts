export const csaConditionalsPart2Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csacondi2-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 2 of 7 — Multiway Selection: Ordering else-if Chains**

---

CED Topic 2.4 covers **multiway selection**: an \`if\` followed by one or more \`else if\` branches and, usually, a final \`else\`. Part 1 showed that only the first true branch runs. This part is about the decisions that make a chain correct: the order of the tests, the boundary values, and what happens to values no branch expects.

| In this part |
|---|
| How a chain is evaluated |
| Why the order of the tests matters |
| Boundary gaps and overlaps |
| Writing a chain from a table |
      `
    },
    {
      id: 'csacondi2-chain',
      type: 'text' as const,
      content: `
## How a Chain Is Evaluated

\`\`\`java
int cost;
if (weight <= 8) {
    cost = 5;
} else if (weight <= 32) {
    cost = 9;
} else if (weight <= 160) {
    cost = 15;
} else {
    cost = 25;
}
\`\`\`

Java tests the conditions from the top. The first true one runs its body, and **every remaining test is skipped**. The final \`else\` runs only when all the tests are false.

Because a branch is reached only after every test above it failed, each test can rely on that. The second test means "more than 8 **and** at most 32" without saying \`weight > 8\`.

| \`weight\` | First true test | \`cost\` |
|---|---|---|
| 8 | \`weight <= 8\` | 5 |
| 9 | \`weight <= 32\` | 9 |
| 32 | \`weight <= 32\` | 9 |
| 100 | \`weight <= 160\` | 15 |
| 161 | none, so the \`else\` runs | 25 |

## Order Matters

\`\`\`java
String grade;
if (score >= 70) {
    grade = "C";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 90) {
    grade = "A";
} else {
    grade = "F";
}
\`\`\`

A score of 95 passes the first test and gets \`"C"\`. Every score that could reach the \`"B"\` or \`"A"\` branch has already been caught by \`score >= 70\`, so those branches are **unreachable**.

| Kind of test | Correct order |
|---|---|
| \`>=\` or \`>\` thresholds | Largest threshold first |
| \`<=\` or \`<\` thresholds | Smallest threshold first, as in the shipping chain |
      `
    },
    {
      id: 'csacondi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the shipping chain, what is cost when weight is 160?',
            options: [
              '15',
              '25',
              '9',
              '5'
            ],
            correctAnswer: 0,
            explanation: '160 fails the first two tests and passes weight <= 160, so cost is 15. The else value of 25 starts at 161.'
          },
          {
            question: 'In the misordered grade chain, which scores still receive the correct grade?',
            options: [
              'Only scores below 80',
              'Only scores of 90 or above',
              'Every score from 0 to 100',
              'Only scores from 70 to 79'
            ],
            correctAnswer: 0,
            explanation: 'Scores below 70 correctly get "F" and scores from 70 to 79 correctly get "C". Every score of 80 or more is caught by the first test and wrongly gets "C".'
          }
        ]
      }
    },
    {
      id: 'csacondi2-gaps',
      type: 'text' as const,
      content: `
## Boundary Gaps and Overlaps

Specification: below 60 degrees is "cold", 60 through 80 is "mild", and above 80 is "hot".

\`\`\`java
String label;
if (temp < 60) {
    label = "cold";
} else if (temp > 60 && temp < 80) {
    label = "mild";
} else {
    label = "hot";
}
\`\`\`

| \`temp\` | Should be | This code gives | Problem |
|---|---|---|---|
| 59 | cold | cold | |
| 60 | mild | hot | \`temp > 60\` leaves a gap at 60 |
| 80 | mild | hot | \`temp < 80\` leaves a gap at 80 |
| 81 | hot | hot | |

The fixed chain is shorter, because the second test can rely on the first one having failed:

\`\`\`java
if (temp < 60) {
    label = "cold";
} else if (temp <= 80) {
    label = "mild";
} else {
    label = "hot";
}
\`\`\`

> 🔑 **Test the boundaries.** For every number in a condition, try the number itself and the values just below and just above it. Here that means 59, 60, 61, 79, 80 and 81.

### A Chain Without a Final else

Without a final \`else\`, it is possible for **no** branch to run. That is fine when nothing should happen for the leftover values, but it is a bug when every value needs an answer.
      `
    },
    {
      id: 'csacondi2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Find the Boundary Bug** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the first temperature chain, temp = 60 gets the label ___',
            options: ['"hot"', '"cold"', '"mild"', 'no label at all']
          },
          {
            label: 'In the fixed chain, temp = 80 gets the label ___',
            options: ['"mild"', '"hot"', '"cold"', 'no label at all']
          },
          {
            label: 'In a chain of >= tests, the threshold to test first is the ___ one',
            options: ['largest', 'smallest', 'middle', 'most common']
          }
        ],
        correctAnswers: ['"hot"', '"mild"', 'largest'],
        hint1: '60 fails both tests in the first two branches.',
        hint2: 'The second test is now temp <= 80.',
        hint3: 'A small threshold would catch the large values too early.',
        explanation: '60 is neither below 60 nor above 60, so it falls into the else. The fixed chain uses <= 80, so 80 is mild. A >= chain must check its largest threshold first, or that branch becomes unreachable.'
      }
    },
    {
      id: 'csacondi2-worked',
      type: 'text' as const,
      content: `
## Worked Example: Writing a Chain from a Table

| Distance (miles) | Zone |
|---|---|
| 50 or less | 1 |
| 51 to 300 | 2 |
| 301 to 1000 | 3 |
| more than 1000 | 4 |

**Version 1: smallest threshold first, with \`<=\`.**

\`\`\`java
public static int zone(int miles) {
    if (miles <= 50) {
        return 1;
    } else if (miles <= 300) {
        return 2;
    } else if (miles <= 1000) {
        return 3;
    } else {
        return 4;
    }
}
\`\`\`

**Version 2: largest threshold first, with \`>\`.**

\`\`\`java
public static int zone(int miles) {
    if (miles > 1000) {
        return 4;
    } else if (miles > 300) {
        return 3;
    } else if (miles > 50) {
        return 2;
    } else {
        return 1;
    }
}
\`\`\`

Both versions are correct. Check them at every boundary:

| \`miles\` | 50 | 51 | 300 | 301 | 1000 | 1001 |
|---|---|---|---|---|---|---|
| Zone | 1 | 2 | 2 | 3 | 3 | 4 |

> 🎯 **AP Connection:** A free-response method that returns a category is usually scored on its boundaries. Write out the boundary table before you write the chain.
      `
    },
    {
      id: 'csacondi2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`zone(300)\` return?

2) What does \`zone(1001)\` return?

3) In the shipping chain, what is \`cost\` when \`weight\` is 33?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '15'],
        hint1: '300 is the top of zone 2.',
        hint2: '1001 is more than 1000.',
        hint3: '33 is more than 32 but not more than 160.',
        explanation: '300 is still in the 51 to 300 range, so the zone is 2. Anything over 1000 is zone 4. A weight of 33 fails the first two tests and passes weight <= 160, so cost is 15.'
      }
    },
    {
      id: 'csacondi2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Each segment should print "low" for n below 10, "mid" for 10 through 99, and "high" for 100 or more.

**Segment I**
\`\`\`java
if (n < 10) { System.out.print("low"); }
else if (n < 100) { System.out.print("mid"); }
else { System.out.print("high"); }
\`\`\`

**Segment II**
\`\`\`java
if (n >= 100) { System.out.print("high"); }
else if (n >= 10) { System.out.print("mid"); }
else { System.out.print("low"); }
\`\`\`

**Segment III**
\`\`\`java
if (n < 100) { System.out.print("mid"); }
else if (n < 10) { System.out.print("low"); }
else { System.out.print("high"); }
\`\`\`

**Segment IV**
\`\`\`java
if (x > 10) { System.out.print("A"); }
else if (x > 20) { System.out.print("B"); }
else if (x < 5) { System.out.print("C"); }
else { System.out.print("D"); }
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'Which of Segments I, II and III work as intended for every int n?',
            options: [
              'Segments I and II only',
              'Segment I only',
              'Segment II only',
              'Segment III only'
            ],
            correctAnswer: 0,
            explanation: 'Segment I goes from the smallest threshold up and Segment II from the largest down, so both work. Segment III catches small values with n < 100 first, so 5 prints "mid" and its "low" branch is unreachable.'
          },
          {
            question: 'Which output can Segment IV never produce, whatever the value of x?',
            options: [
              'B',
              'A',
              'C',
              'D'
            ],
            correctAnswer: 0,
            explanation: 'Any x greater than 20 is also greater than 10, so it is caught by the first test and prints A. The C branch runs for values below 5, and D runs for 5 through 10.'
          }
        ]
      }
    }
  ]
}
