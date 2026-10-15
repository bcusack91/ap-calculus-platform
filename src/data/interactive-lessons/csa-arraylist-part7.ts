export const csaArraylistPart7Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaarray7-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: wrapper classes (CED Topic 4.7), the ArrayList methods (4.8) and traversals (4.9). Use the table as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Wrappers (Part 2) | lists hold Integer or Double; values box and unbox automatically | adding an int to a list of Double |
| Division (Part 2) | unboxed Integers divide with int rules | an "average" that drops its fraction |
| Methods (Part 3) | \`set\` and \`remove\` return the element that was there | recording the new element as the return value |
| Indices (Part 3) | add and remove shift every later element | using an index saved before the shift |
| Bounds (Part 3) | \`get\`, \`set\`, \`remove\` take 0 to size() - 1; \`add(i, obj)\` takes 0 to size() | \`get(list.size())\` |
| Loops (Part 4) | \`i < list.size()\` is checked on every pass | a loop that adds to the end and never stops |
| Enhanced for (Part 4) | read-only; changing the size can throw | \`add\` or \`remove\` inside the loop |
| References (Part 5) | \`b = a\` aliases a list; a list parameter shares the caller's list | expecting \`b = a\` to copy |
| Objects (Part 5) | \`get\` returns a reference; mutators through it stick | assuming the list holds copies |
      `
    },
    {
      id: 'csaarray7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
int[] raw = {7, 2, 9, 4};
ArrayList<Integer> data = new ArrayList<Integer>();
for (int r : raw) {
    data.add(r);
}
ArrayList<Integer> same = data;
same.add(1, same.remove(2));
int old = data.set(3, data.get(0) + data.get(3));
int total = 0;
for (int v : data) {
    total += v;
}
System.out.println(data + " " + old + " " + total);
\`\`\`

| Step | What happens | data afterward |
|---|---|---|
| copy loop | each int is autoboxed and appended | [7, 2, 9, 4] |
| \`same = data\` | an alias: no new list is created | [7, 2, 9, 4] |
| \`same.remove(2)\` | returns 9 and shifts 4 down | [7, 2, 4] |
| \`same.add(1, 9)\` | inserts 9 at index 1, shifting 2 and 4 up | [7, 9, 2, 4] |
| \`data.set(3, 7 + 4)\` | stores 11 and returns the old 4 | [7, 9, 2, 11] |
| enhanced for | unboxes each element: 7 + 9 + 2 + 11 | total is 29 |

**Output**
\`\`\`
[7, 9, 2, 11] 4 29
\`\`\`

The alias is the key step: the changes made through \`same\` happened to \`data\`, because there was only ever one list.
      `
    },
    {
      id: 'csaarray7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the worked example, same is instead built as a separate copy of data with a loop, and every other line is unchanged. What is printed?',
            options: [
              '[7, 2, 9, 11] 4 29',
              '[7, 9, 2, 11] 4 29',
              '[7, 2, 9, 11] 11 29',
              '[7, 2, 9, 4] 4 22'
            ],
            correctAnswer: 0,
            explanation: 'The remove and add now change only the copy, so data stays [7, 2, 9, 4] until set stores 7 + 4 at index 3 and returns 4. The total is still 7 + 2 + 9 + 11 = 29.'
          },
          {
            question: 'list holds [a, b, c, d]. What does it hold after list.add(2, list.get(0)); and then list.remove(0); run?',
            options: [
              '[b, a, c, d]',
              '[a, b, c, d]',
              '[b, c, a, d]',
              '[a, c, d]'
            ],
            correctAnswer: 0,
            explanation: 'add(2, "a") gives [a, b, a, c, d], with c and d shifted up. remove(0) then takes out the first a, leaving [b, a, c, d].'
          },
          {
            question: 'Which loop doubles every element of an ArrayList of Integer named vals?',
            options: [
              'for (int i = 0; i < vals.size(); i++) vals.set(i, vals.get(i) * 2);',
              'for (int v : vals) v = v * 2;',
              'for (int i = 0; i < vals.size(); i++) vals.add(i, vals.get(i) * 2);',
              'for (int i = 0; i <= vals.size(); i++) vals.set(i, vals.get(i) * 2);'
            ],
            correctAnswer: 0,
            explanation: 'set replaces each element in place without changing the size. Assigning the enhanced for variable changes only a copy, add inserts new elements instead of replacing them, and the header with <= calls get past the end.'
          }
        ]
      }
    },
    {
      id: 'csaarray7-checklist',
      type: 'text' as const,
      content: `
## Checklist for Any ArrayList Question

1. **Type.** Is the element type a class (\`Integer\`, \`Double\`, \`String\`, or a class you wrote)? Does every value added match it?
2. **Size and indices.** What is the size right now? Which index is last? Has an add or remove shifted the elements since you last looked?
3. **Return values.** Is the result of \`set\` or \`remove\` being used? It is the element that was at that index before the call.
4. **Loop choice.** Does the body call \`set\`, \`add\` or \`remove\`? Then it needs an indexed loop, and an \`add\` or \`remove\` needs a deliberate plan for the index.
5. **References.** Is a list or an object being shared? \`b = a\` and passing a list to a method share; building a new list with a loop copies.
6. **Arithmetic.** After unboxing, does an int division drop a fraction that the answer needs?
      `
    },
    {
      id: 'csaarray7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Fire** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'list.add(list.size(), x) ___',
            options: ['appends x', 'throws an exception', 'replaces the last element', 'inserts x before the last element']
          },
          {
            label: 'The value that can be passed to add for an ArrayList of Double is ___',
            options: ['72.0', '72', '"72.0"', 'Integer.MAX_VALUE']
          },
          {
            label: 'An enhanced for loop over a list is the right choice when the body ___',
            options: ['only reads elements', 'replaces elements', 'removes elements', 'adds elements']
          }
        ],
        correctAnswers: ['appends x', '72.0', 'only reads elements'],
        hint1: 'The index equal to the size is one past the last element.',
        hint2: 'Only a double can be boxed into a Double.',
        hint3: 'An enhanced for loop gives no index and must not change the size.',
        explanation: 'Inserting at index size() appends. A list of Double accepts double values such as 72.0, while an int or a String does not compile. Enhanced for loops are for reading only.'
      }
    },
    {
      id: 'csaarray7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A method looks for the largest element of a list holding [-5, -3, -8] but starts its running maximum at 0. What does it return?',
            options: [
              '0',
              '-3',
              '-5',
              '-8'
            ],
            correctAnswer: 0,
            explanation: 'No element is greater than 0, so the starting value is never replaced and 0 is returned. Starting at Integer.MIN_VALUE or at the first element would give -3.'
          },
          {
            question: 'names is an ArrayList of String holding at least one element. Which statement does NOT compile?',
            options: [
              'names.add(5);',
              'names.add(0, "5");',
              'names.set(0, names.get(0) + 5);',
              'names.add(names.get(0));'
            ],
            correctAnswer: 0,
            explanation: 'add on a list of String needs a String, and 5 is an int. names.get(0) + 5 is String concatenation, which produces a String, so that set call compiles.'
          },
          {
            question: 'words holds [hi, hello, hey]. An enhanced for loop over words adds w + "!" to words whenever w has length 2. What happens?',
            options: [
              'It throws a ConcurrentModificationException',
              'words ends as [hi, hello, hey, hi!]',
              'words ends as [hi!, hello, hey]',
              'The loop never ends'
            ],
            correctAnswer: 0,
            explanation: 'The first element, hi, has length 2, so the body adds to the list during the enhanced for loop. The loop then throws a ConcurrentModificationException when it tries to move to the next element.'
          }
        ]
      }
    }
  ]
}
