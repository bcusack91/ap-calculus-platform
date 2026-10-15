export const csaArrayPart6Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaarray6-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 6 of 7 — AP-Style Practice**

---

One-dimensional arrays are tested mostly through multiple-choice traces: what is printed, what an array holds afterward, and whether an exception occurs. The same traversal skills carry straight into the free-response questions on lists (question 3) and 2D arrays (question 4). This part practices both kinds of task with arrays, using only the Java Quick Reference subset.

### How to Attack an Array Question

| Step | Do this |
|---|---|
| 1 | Write the array with its indices underneath. Note \`length\` and the last index, \`length - 1\`. |
| 2 | Check the loop's first and last index, including any \`i + 1\` or \`i - 1\` in the body. |
| 3 | Decide whether each assignment changes an **element** (it sticks) or a **variable** (it does not reach the array). |
| 4 | Draw arrows for array variables. \`new\` and initializer lists create arrays; \`x = y\` copies a reference. |
| 5 | Trace in order, updating the array after every pass, because later passes may read changed values. |

> 🔑 **Key Concept:** Most wrong answers on array traces come from one of three slips: forgetting that an earlier pass already changed an element, treating an alias as a copy, or missing the pass where an index goes out of bounds.
      `
    },
    {
      id: 'csaarray6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
int[] arr = {4, 1, 6, 3, 8};
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        arr[i] = arr[i - 1];
    }
}
\`\`\`

**Segment B**
\`\`\`java
int[] x = {1, 2, 3};
int[] y = x;
x[0] = y[2];
y = new int[3];
y[1] = x[0] + 5;
System.out.println(x[0] + " " + x[1] + " " + y[1]);
\`\`\`

**Segment C**
\`\`\`java
String[] w = {"ab", null, "cde", "f"};
int total = 0;
for (int i = w.length - 1; i >= 0; i--) {
    if (w[i] != null) {
        total += w[i].length();
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does arr hold after Segment A runs?',
            options: [
              '{4, 4, 6, 6, 8}',
              '{1, 1, 3, 3, 8}',
              '{4, 1, 6, 3, 8}',
              '{4, 4, 6, 3, 8}'
            ],
            correctAnswer: 0,
            explanation: 'At i = 1 the 1 is raised to 4, and at i = 3 the 3 is raised to 6; the 6 and the 8 are not smaller than the element before them. Copying in the other direction, arr[i - 1] = arr[i], would give {1, 1, 3, 3, 8}.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '3 2 8',
              '3 2 0',
              '1 2 8',
              '3 2 5'
            ],
            correctAnswer: 0,
            explanation: 'x and y share one array when x[0] = y[2] runs, so x becomes {3, 2, 3}. Then y moves to a new array of 0s, and y[1] = 3 + 5 stores 8 there without touching x.'
          },
          {
            question: 'The if statement in Segment C is removed, so its body runs on every pass. What happens?',
            options: [
              'After adding 1 and 3, it throws an exception',
              'It throws an exception before adding anything',
              'It sets total to 6 and skips the null element',
              'It sets total to 4 and ends at the null element'
            ],
            correctAnswer: 0,
            explanation: 'The loop runs backward, so it adds the lengths of "f" and "cde" first. At i = 1 it calls length() through null, which throws a NullPointerException; a loop never skips or stops at null on its own.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1 — scaleUp

**Prompt.** Write a static method \`scaleUp\` that multiplies every element of \`values\` by \`factor\`. If a product is greater than \`limit\`, store \`limit\` instead. The method changes the array that is passed in and returns nothing.

| Before the call | Call | values afterward |
|---|---|---|
| \`{3, 10, 7}\` | \`scaleUp(values, 2, 15)\` | \`{6, 15, 14}\` |
| \`{5, 8, -2}\` | \`scaleUp(values, 3, 20)\` | \`{15, 20, -6}\` |
| \`{}\` (length 0) | \`scaleUp(values, 4, 10)\` | \`{}\`: the loop runs zero times |

### Plan Before You Write

- The changes must reach the caller, so the method assigns \`values[i]\`. That rules out an enhanced for loop, whose variable is only a copy.
- The return type is \`void\`; the caller sees the result through its own reference to the same array.

### Solution

\`\`\`java
public static void scaleUp(int[] values, int factor, int limit) {
    for (int i = 0; i < values.length; i++) {
        int product = values[i] * factor;
        if (product > limit) {
            values[i] = limit;
        } else {
            values[i] = product;
        }
    }
}
\`\`\`

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Traversal | visits every index from 0 to \`values.length - 1\` with no out-of-bounds access |
| Computation | multiplies each element by factor |
| Cap | compares the product with limit and stores limit only when the product is greater |
| Update | assigns the result to \`values[i]\`, not to a local copy |
      `
    },
    {
      id: 'csaarray6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About scaleUp** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes the loop as for (int v : values) and applies the same multiply-and-cap logic to v, ending with an assignment to v. After scaleUp(values, 2, 15) with values = {3, 10, 7}, what does values hold?',
            options: [
              '{3, 10, 7}',
              '{6, 15, 14}',
              '{6, 20, 14}',
              '{3, 15, 7}'
            ],
            correctAnswer: 0,
            explanation: 'Assigning v changes only the loop variable, which holds a copy of each int, so the array keeps its original values. Only an assignment to values[i] reaches the array.'
          },
          {
            question: 'The array data holds {5, 8, -2}. What does data hold after the correct method runs scaleUp(data, 3, 20)?',
            options: [
              '{15, 20, -6}',
              '{15, 24, -6}',
              '{5, 8, -2}',
              '{15, 20, 20}'
            ],
            correctAnswer: 0,
            explanation: 'The products are 15, 24 and -6, and only 24 is greater than 20, so it is replaced by 20. The caller sees the change because data and values refer to the same array.'
          },
          {
            question: 'Another student stores every product in values[i] in a first loop, then uses a second loop to replace each value above limit with limit. How does this version compare with the solution?',
            options: [
              'It gives the same result for all calls',
              'It caps the values before multiplying them',
              'It changes values the solution leaves alone',
              'It fails when a product is equal to the limit'
            ],
            correctAnswer: 0,
            explanation: 'After the first loop every element holds its product, and the second loop caps exactly the products above limit, so each element ends the same as in the one-loop solution. A product equal to limit is left alone by both versions.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2 — aboveAverage

**Prompt.** Write a static method \`aboveAverage\` that returns a **new** array holding the elements of \`data\` that are strictly greater than the average of \`data\`, in their original order. \`data\` has at least one element and must not be changed.

| Call | Average | Returns |
|---|---|---|
| \`aboveAverage({4, 9, 2, 7, 8})\` | 6.0 | \`{9, 7, 8}\` |
| \`aboveAverage({5, 5, 5})\` | 5.0 | \`{}\` (length 0) |
| \`aboveAverage({1, 2})\` | 1.5 | \`{2}\` |

### Plan Before You Write

1. **Pass 1:** add the elements and compute the average as a double, so the average of \`{1, 2}\` is 1.5, not 1.
2. **Pass 2:** count the elements above the average. The result array cannot be created until its size is known.
3. **Pass 3:** copy each element above the average into the result, using a **separate index** j that moves only when something is copied.

### Solution

\`\`\`java
public static int[] aboveAverage(int[] data) {
    int sum = 0;
    for (int v : data) {
        sum += v;
    }
    double avg = (double) sum / data.length;

    int count = 0;
    for (int v : data) {
        if (v > avg) {
            count++;
        }
    }

    int[] result = new int[count];
    int j = 0;
    for (int i = 0; i < data.length; i++) {
        if (data[i] > avg) {
            result[j] = data[i];
            j++;
        }
    }
    return result;
}
\`\`\`

- The first two passes only read values, so enhanced for loops fit. The third pass needs two different positions, so it uses indices.
- Writing \`result[i] = data[i]\` in the third pass is the classic mistake. For \`{4, 9, 2, 7, 8}\` the result has length 3, and the copy at i = 3 (the 7) throws an ArrayIndexOutOfBoundsException.
- \`data\` is never assigned, so the caller's array is unchanged, and the caller receives a reference to the new array.
      `
    },
    {
      id: 'csaarray6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What is the length of the array returned by \`aboveAverage({10, 20, 30, 40})\`? _______

2) What is the first element of the array returned by \`aboveAverage({6, 1, 8, 1})\`? _______

3) In the buggy version that writes \`result[i] = data[i]\`, at which value of i is the exception thrown for \`{4, 9, 2, 7, 8}\`? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '6', '3'],
        hint1: 'The average is 25.0. Which elements are strictly greater?',
        hint2: 'The sum is 16, so the average is 4.0. Keep the original order.',
        hint3: 'The result has length 3. Find the first element above 6.0 whose index is 3 or more.',
        explanation: 'The average of {10, 20, 30, 40} is 25.0, so only 30 and 40 are kept. For {6, 1, 8, 1} the average is 4.0 and the result is {6, 8}. In the buggy version the 7 at index 3 is copied to result[3], but result has only indices 0 to 2.'
      }
    },
    {
      id: 'csaarray6-deductions',
      type: 'text' as const,
      content: `
## Common Deductions on Array Code

| Mistake | Why it costs points |
|---|---|
| \`i <= arr.length\` or an unguarded \`arr[i + 1]\` | an index goes out of bounds |
| assigning the enhanced for variable to change an int element | the array never changes |
| using the source index to fill a result array | the result index runs past the end, or leaves gaps |
| creating the result array before its size is known | it ends up too big, with extra default values |
| changing an array the specification says must stay unchanged | the caller sees the change through its alias |
| returning inside the loop on the first pass | the method stops after checking one element |
| int division when computing an average | the fractional part is lost |

> 🎯 **AP Connection:** Before writing, decide two things from the prompt: does the method **change** the array it is given (void, assign \`arr[i]\`) or **return** a new one (create it with \`new\`, fill it, return it)? Those two shapes cover almost every array method you will be asked to write.
      `
    }
  ]
}
