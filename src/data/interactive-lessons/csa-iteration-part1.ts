export const csaIterationPart1Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csait1-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 1 of 7 — While Loops, For Loops, and Loop Patterns**

---

## While Loop

\`\`\`java
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}
// Prints: 0, 1, 2, 3, 4
\`\`\`

### Structure
1. Initialize a control variable BEFORE the loop
2. Check the condition BEFORE each iteration
3. Update the control variable INSIDE the loop
4. If you forget step 3, you get an **infinite loop**

---

## For Loop

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Prints: 0, 1, 2, 3, 4
\`\`\`

| Component | Purpose | Example |
|-----------|---------|---------|
| **Initialization** | Set starting value | \`int i = 0\` |
| **Condition** | Continue while true | \`i < 5\` |
| **Update** | Change after each iteration | \`i++\` |

> 🔑 A for loop runs exactly **(end - start)** times when counting from start to end-1 with step 1.
      `
    },
    {
      id: 'csait1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many times does this loop execute?\nfor (int i = 1; i <= 10; i++) { /* body */ }',
            options: [
              '9 times',
              '10 times',
              '11 times',
              '0 times'
            ],
            correctAnswer: 1,
            explanation: 'i starts at 1 and runs while i <= 10. Values of i: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = 10 iterations. When i becomes 11, the condition is false and the loop stops.'
          },
          {
            question: 'What happens if the update statement (i++) is removed from a while loop?',
            options: [
              'The loop runs once and stops',
              'The loop runs backwards',
              'The loop runs forever (infinite loop)',
              'A compile error occurs'
            ],
            correctAnswer: 2,
            explanation: 'Without updating the control variable, the condition never becomes false, so the loop runs forever. This is an infinite loop — one of the most common bugs.'
          }
        ]
      }
    },
    {
      id: 'csait1-content',
      type: 'text' as const,
      content: `
## Common Loop Patterns

### 1. Accumulator (Sum/Count)
\`\`\`java
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
// sum = 5050 (sum of 1 to 100)
\`\`\`

### 2. Counting Occurrences
\`\`\`java
int count = 0;
for (int i = 0; i < str.length(); i++) {
    if (str.substring(i, i + 1).equals("a")) {
        count++;
    }
}
\`\`\`

### 3. Finding Max/Min
\`\`\`java
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
\`\`\`

### 4. String Traversal
\`\`\`java
String reversed = "";
for (int i = str.length() - 1; i >= 0; i--) {
    reversed += str.substring(i, i + 1);
}
\`\`\`

## Off-By-One Errors
- Most common loop bug: running one too many or one too few times
- \`i < n\` runs n times (0 to n-1)
- \`i <= n\` runs n+1 times (0 to n)
- Always check: Does the first iteration work? Does the last iteration work?
      `
    },
    {
      id: 'csait1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A for loop with for (int i = 0; i < n; i++) runs exactly _______ times.

2) A loop that never terminates because the condition is always true is called an _______ loop.

3) Running one too many or one too few iterations is called an _______-by-one error.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['n', 'infinite', 'off'],
        hint1: 'From 0 to n-1 is n iterations.',
        hint2: 'It goes on forever.',
        hint3: 'One step too far or too short.',
        explanation: 'i < n runs n times. Infinite loop = condition never false. Off-by-one = boundary error.'
      }
    },
    {
      id: 'csait1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Trace the Loop** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'for (int i = 0; i < 3; i++) prints i values ___',
            options: ['0, 1, 2', '0, 1, 2, 3', '1, 2, 3', '1, 2']
          },
          {
            label: 'for (int i = 10; i > 0; i -= 3) prints i values ___',
            options: ['10, 7, 4, 1', '10, 7, 4', '7, 4, 1', '10, 8, 6, 4, 2']
          },
          {
            label: 'A loop that sums values into a running total uses the ___ pattern',
            options: ['Accumulator', 'Sentinel', 'Binary search', 'Recursion']
          }
        ],
        correctAnswers: ['0, 1, 2', '10, 7, 4, 1', 'Accumulator'],
        hint1: 'i starts at 0, stops before 3.',
        hint2: 'Start at 10, subtract 3 each time, stop when i <= 0.',
        hint3: 'sum += value each iteration.',
        explanation: 'i < 3: {0,1,2}. i > 0, i-=3: {10,7,4,1}. Running total = accumulator pattern.'
      }
    },
    {
      id: 'csait1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Iteration

- **Trace loops carefully** — write out each value of the control variable
- Always check the boundary: does the condition use < or <=?
- Know the four common patterns: accumulator, counter, min/max finder, string traversal
- Convert between while and for loops — they are interchangeable
- Watch for **off-by-one errors** — the most tested loop bug on the AP exam
- Nested loops: the inner loop runs completely for each iteration of the outer loop
      `
    },
    {
      id: 'csait1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of sum after this code?\nint sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 1) {\n        sum += i;\n    }\n}',
            options: [
              '6',
              '9',
              '15',
              '10'
            ],
            correctAnswer: 1,
            explanation: 'The loop adds only odd values of i: 1 + 3 + 5 = 9. i=1 (odd, add), i=2 (even, skip), i=3 (odd, add), i=4 (even, skip), i=5 (odd, add).'
          },
          {
            question: 'How many times does the inner print execute?\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 4; j++) {\n        System.out.print("*");\n    }\n}',
            options: [
              '7',
              '12',
              '4',
              '3'
            ],
            correctAnswer: 1,
            explanation: 'The outer loop runs 3 times. For each outer iteration, the inner loop runs 4 times. Total: 3 x 4 = 12 stars printed.'
          }
        ]
      }
    }
  ]
};
