export const csaArrayPart3Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaarray3-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 3 of 7 — Indexed Traversals and Bounds Errors**

---

An **indexed traversal** uses a loop variable as the index, so the loop controls exactly which elements are visited and in what order (CED Topic 4.4). Part 1 showed the full forward and backward loops. This part covers the variations the exam uses, how to change elements as you go, and how to spot an index that falls off either end.

| In this part |
|---|
| Header patterns: backward, every other, halves, ranges, neighbors |
| The same traversal written as a while loop |
| Updating, filling and copying elements |
| Parallel arrays |
| Where ArrayIndexOutOfBoundsException comes from |
      `
    },
    {
      id: 'csaarray3-ranges',
      type: 'text' as const,
      content: `
## Choosing Which Indices to Visit

All of these use \`arr = {10, 20, 30, 40, 50, 60}\`, so \`arr.length\` is 6 and the valid indices are 0 through 5.

| Goal | Header | Indices visited |
|---|---|---|
| every element, forward | \`for (int i = 0; i < arr.length; i++)\` | 0, 1, 2, 3, 4, 5 |
| every element, backward | \`for (int i = arr.length - 1; i >= 0; i--)\` | 5, 4, 3, 2, 1, 0 |
| even indices | \`for (int i = 0; i < arr.length; i += 2)\` | 0, 2, 4 |
| odd indices | \`for (int i = 1; i < arr.length; i += 2)\` | 1, 3, 5 |
| first half | \`for (int i = 0; i < arr.length / 2; i++)\` | 0, 1, 2 |
| a range from start up to, not including, end | \`for (int i = start; i < end; i++)\` | start, ..., end - 1 |
| each element with the one **before** it | \`for (int i = 1; i < arr.length; i++)\` | 1 to 5, using \`arr[i - 1]\` |
| each element with the one **after** it | \`for (int i = 0; i < arr.length - 1; i++)\` | 0 to 4, using \`arr[i + 1]\` |

- \`arr.length / 2\` is int division. For an array of length 7 it is 3, so the "first half" loop visits indices 0, 1 and 2, and the middle element at index 3 is left out.
- When the body reaches a neighbor, the **header must shrink** to keep the neighbor in range: start at 1 for \`i - 1\`, stop before \`length - 1\` for \`i + 1\`.

## The Same Traversal as a while Loop

\`\`\`java
int i = 0;
while (i < arr.length) {
    System.out.print(arr[i] + " ");
    i++;
}
\`\`\`

The three parts of a for header move to three places: the initialization goes before the loop, the condition goes in the \`while\`, and the update goes at the end of the body. Forgetting the \`i++\` makes the loop run forever, printing \`arr[0]\` again and again.
      `
    },
    {
      id: 'csaarray3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int[] arr = {3, 8, 1, 9, 4, 7, 2};
\`\`\`

**Segment A**
\`\`\`java
for (int i = 1; i < arr.length; i += 2) {
    System.out.print(arr[i] + " ");
}
\`\`\`

**Segment B**
\`\`\`java
int k = arr.length - 1;
while (k > arr.length / 2) {
    System.out.print(arr[k] + " ");
    k--;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '8 9 7',
              '3 1 4 2',
              '8 9 7 2',
              '8 1 9 4 7 2'
            ],
            correctAnswer: 0,
            explanation: 'Starting at 1 and adding 2 visits indices 1, 3 and 5, which hold 8, 9 and 7. The next value, 7, fails i < 7, so index 6 is never reached.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '2 7 4',
              '2 7 4 9',
              '4 7 2',
              '7 4 9'
            ],
            correctAnswer: 0,
            explanation: 'arr.length / 2 is 7 / 2, which is 3 in int division, so k runs 6, 5, 4 and prints 2, 7 and 4. The middle element at index 3 would print only with k >= 3.'
          },
          {
            question: 'How many times is the condition k > arr.length / 2 evaluated in Segment B?',
            options: [
              '4',
              '3',
              '7',
              '6'
            ],
            correctAnswer: 0,
            explanation: 'The test is true for k = 6, 5 and 4, and is checked a fourth time when k is 3, where it is false. A loop condition is always checked once more than the body runs.'
          }
        ]
      }
    },
    {
      id: 'csaarray3-modify',
      type: 'text' as const,
      content: `
## Changing Elements in Place

To change the array, assign to \`arr[i]\`. A local variable that holds a copy of the element is not enough.

\`\`\`java
int[] temps = {50, 62, 71, 48};
for (int i = 0; i < temps.length; i++) {
    temps[i] = temps[i] + 5;
}
// temps is now {55, 67, 76, 53}
\`\`\`

## Filling an Array With Computed Values

\`\`\`java
int[] evens = new int[5];
for (int i = 0; i < evens.length; i++) {
    evens[i] = 2 * i;
}
// evens is {0, 2, 4, 6, 8}
\`\`\`

When each new value depends on a **neighbor**, the direction of the loop matters, because a neighbor may already have been changed.

\`\`\`java
int[] run = {4, 1, 3, 2};
for (int i = 1; i < run.length; i++) {
    run[i] = run[i] + run[i - 1];
}
\`\`\`

| i | run[i - 1] (already updated) | old run[i] | new run[i] |
|---|---|---|---|
| 1 | 4 | 1 | 5 |
| 2 | 5 | 3 | 8 |
| 3 | 8 | 2 | 10 |

The result is \`{4, 5, 8, 10}\`: each element ends up holding a running total. The same body in a loop that runs backward, from i = 3 down to 1, adds only original values and gives \`{4, 5, 4, 5}\`.

## Parallel Arrays

Two arrays are **parallel** when the same index refers to related data.

\`\`\`java
String[] names = {"Ana", "Ben", "Cai"};
int[] scores = {88, 95, 79};
for (int i = 0; i < names.length; i++) {
    System.out.println(names[i] + ": " + scores[i]);
}
\`\`\`

One index i walks both arrays together, printing \`Ana: 88\`, \`Ben: 95\` and \`Cai: 79\`. Both arrays must have the same length. An enhanced for loop cannot do this, because it gives the values of only one array and no index.

## Copying Into a Bigger Array

An array cannot grow, so "adding room" means creating a larger array and copying the old values in.

\`\`\`java
int[] src = {1, 2, 3, 4};
int[] bigger = new int[src.length + 2];
for (int i = 0; i < src.length; i++) {
    bigger[i] = src[i];
}
// bigger is {1, 2, 3, 4, 0, 0}
\`\`\`

The loop is bounded by the **smaller** array's length; the two extra slots keep their default value 0. Writing \`src = bigger;\` afterward would make \`src\` refer to the larger array.
      `
    },
    {
      id: 'csaarray3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The running-total loop above runs on \`{2, 5, 1, 6}\`. What is the last element afterward? _______

2) The fill loop is changed to \`evens[i] = 3 * i + 1;\` and evens is created with \`new int[6]\`. What is the last element? _______

3) In the copy example, what value is stored in \`bigger[4]\`? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '16', '0'],
        hint1: 'Each element becomes itself plus the updated element before it: 2, then 7, then 8, then ...',
        hint2: 'The last index of a length-6 array is 5.',
        hint3: 'The loop copies only indices 0 through 3. What does new store in the rest?',
        explanation: 'The running totals are 2, 7, 8 and 14. With length 6 the last index is 5, and 3 * 5 + 1 = 16. Index 4 is past the copied range, so it keeps the default int value 0.'
      }
    },
    {
      id: 'csaarray3-bounds',
      type: 'text' as const,
      content: `
## Where ArrayIndexOutOfBoundsException Comes From

The exception happens at **run time**, at the first access whose index is below 0 or at least \`arr.length\`. The code compiles, and every statement before the bad access has already run.

| Code | Problem | First bad index |
|---|---|---|
| \`for (int i = 0; i <= arr.length; i++)\` using \`arr[i]\` | \`<=\` lets i reach length | arr.length |
| \`for (int i = 0; i < arr.length; i++)\` using \`arr[i + 1]\` | the last pass reaches one past the end | arr.length |
| \`for (int i = 0; i < arr.length; i++)\` using \`arr[i - 1]\` | the first pass reaches before the start | -1 |
| \`for (int i = arr.length; i >= 0; i--)\` using \`arr[i]\` | the loop starts at length, not length - 1 | arr.length |
| \`arr[arr.length]\` meant as "the last element" | the last index is length - 1 | arr.length |

## Worked Example: Finding the Bug

\`\`\`java
int[] d = {5, 3, 8, 6};
int count = 0;
for (int i = 0; i < d.length; i++) {
    if (d[i] > d[i + 1]) {
        count++;
    }
}
System.out.println(count);
\`\`\`

**Step 1 — List the values of i.** 0, 1, 2, 3.

**Step 2 — List every index the body uses.** \`d[i]\` uses 0 to 3, and \`d[i + 1]\` uses 1 to 4.

**Step 3 — Trace until something breaks.** i = 0: 5 > 3, count is 1. i = 1: 3 > 8 is false. i = 2: 8 > 6, count is 2. i = 3: \`d[4]\` does not exist, so the exception is thrown and the println never runs.

**Step 4 — Fix the header, not the body.** \`i < d.length - 1\` stops at i = 2, and the program prints \`2\`. Starting at \`i = 1\` and comparing \`d[i - 1] > d[i]\` is an equally correct fix.

> 🎯 **AP Connection:** For any loop that touches \`i + 1\` or \`i - 1\`, check the **first** and **last** value of i against both indices. Questions that ask "which header avoids an exception and still checks every pair" are decided at the two ends.
      `
    },
    {
      id: 'csaarray3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment C**
\`\`\`java
int[] v = {6, 2, 9, 4};
String out = "";
for (int i = v.length - 1; i > 0; i--) {
    out += v[i] - v[i - 1] + " ";
}
System.out.println(out);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment C?',
            options: [
              '-5 7 -4',
              '-4 7 -5',
              '5 -7 4',
              '-5 7 -4 6'
            ],
            correctAnswer: 0,
            explanation: 'The loop runs i = 3, 2, 1 and computes 4 - 9, 9 - 2 and 2 - 6. The subtraction happens before + " " joins the space, so each difference prints as a number.'
          },
          {
            question: 'The header of Segment C is changed to for (int i = v.length - 1; i >= 0; i--). What happens?',
            options: [
              'An exception is thrown before anything is printed',
              'The values -5 7 -4 print, then an exception',
              'The code fails to compile because of index -1',
              'The values -5 7 -4 6 print with no exception'
            ],
            correctAnswer: 0,
            explanation: 'On the pass with i = 0 the body reads v[-1], which throws at run time. The println comes after the loop, so it never runs and nothing is printed.'
          },
          {
            question: 'The body is changed to out += v[i] - v[i + 1] + " "; and the loop now counts up. Which header visits every pair of neighbors with no exception?',
            options: [
              'for (int i = 0; i < v.length - 1; i++)',
              'for (int i = 0; i < v.length; i++)',
              'for (int i = 1; i < v.length; i++)',
              'for (int i = 1; i <= v.length - 1; i++)'
            ],
            correctAnswer: 0,
            explanation: 'Stopping before v.length - 1 makes the last i equal 2, so v[i + 1] reaches index 3 and no further. Each of the other headers lets i reach 3, where v[4] is out of bounds.'
          }
        ]
      }
    }
  ]
}
