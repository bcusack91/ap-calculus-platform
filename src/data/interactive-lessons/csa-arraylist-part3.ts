export const csaArraylistPart3Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaarray3-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 3 of 7 — The ArrayList Methods in Depth**

---

Part 1 listed the six ArrayList methods on the Java Quick Reference. This part pins down exactly what each one accepts, what it returns, and what it does to the indices of the other elements (CED Topic 4.8). Multiple-choice questions on ArrayList are mostly careful traces of these six methods.

## Creating a List

\`\`\`java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<String>();   // empty list, size 0
ArrayList<Double> prices = new ArrayList<>();        // the type may be omitted on the right
\`\`\`

- \`ArrayList\` is in the package \`java.util\`, so a file that uses it needs the import statement.
- The type in angle brackets is the **type parameter**, called E on the Quick Reference. For a list of String, \`add\` accepts a String and \`get\` returns a String, so the compiler rejects \`names.add(5)\`.
- Declaring a list **with** its element type is preferred: it lets the compiler catch type errors that would otherwise appear only when the program runs.
- A new list is empty. Its size is 0, and it has no valid index yet.

## The Six Methods

| Method | Returns | Valid index for a list of size n | Effect |
|---|---|---|---|
| \`size()\` | int | no index | none |
| \`add(obj)\` | boolean (always true) | no index | appends at the end; size grows by 1 |
| \`add(index, obj)\` | nothing (void) | 0 to n | inserts at index; that element and all later ones move up one index |
| \`get(index)\` | the element (type E) | 0 to n - 1 | none |
| \`set(index, obj)\` | the element that **was** at index | 0 to n - 1 | replaces one element; size unchanged |
| \`remove(index)\` | the element removed | 0 to n - 1 | later elements move down one index; size shrinks by 1 |

> 🔑 **Key Concept:** \`add(index, obj)\` is the only method that accepts the index n, one past the last element. Inserting at index n is the same as appending.
      `
    },
    {
      id: 'csaarray3-trace',
      type: 'text' as const,
      content: `
## Worked Trace: Every Method Once

\`\`\`java
ArrayList<String> pets = new ArrayList<String>();
pets.add("cat");
pets.add("dog");
pets.add(0, "eel");
pets.add(3, "fox");
String old = pets.set(1, "gnu");
String gone = pets.remove(2);
System.out.println(old + " " + gone + " " + pets.size());
System.out.println(pets);
\`\`\`

| Statement | List afterward | Value returned |
|---|---|---|
| \`pets.add("cat");\` | [cat] | true (ignored) |
| \`pets.add("dog");\` | [cat, dog] | true (ignored) |
| \`pets.add(0, "eel");\` | [eel, cat, dog] | none |
| \`pets.add(3, "fox");\` | [eel, cat, dog, fox] | none: index 3 equals the size, so fox is appended |
| \`String old = pets.set(1, "gnu");\` | [eel, gnu, dog, fox] | "cat", the element replaced |
| \`String gone = pets.remove(2);\` | [eel, gnu, fox] | "dog", the element removed |

**Output**
\`\`\`
cat dog 3
[eel, gnu, fox]
\`\`\`

Two details decide most trace questions:

1. **set returns the old element**, not the new one. Here \`old\` is "cat", even though index 1 now holds "gnu".
2. **remove returns what it took out.** The returned value can be stored, printed, or passed straight to another method, as in \`other.add(pets.remove(0));\`.

Printing a list with \`System.out.println\` shows its elements in order, separated by a comma and a space, inside square brackets.
      `
    },
    {
      id: 'csaarray3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
ArrayList<Integer> q = new ArrayList<Integer>();
q.add(5);
q.add(0, 8);
q.add(1, 3);
q.add(q.size(), 6);
int x = q.set(2, 9);
int y = q.remove(0);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does q hold after Segment A runs?',
            options: [
              '[3, 9, 6]',
              '[8, 3, 9, 6]',
              '[8, 3, 5, 6]',
              '[3, 9, 5, 6]'
            ],
            correctAnswer: 0,
            explanation: 'The adds build [8, 3, 5, 6]: index q.size() is 3, which appends the 6. set replaces the 5 with 9 without changing the size, and remove(0) takes out the 8, leaving [3, 9, 6].'
          },
          {
            question: 'What are the values of x and y after Segment A runs?',
            options: [
              'x is 5 and y is 8',
              'x is 9 and y is 8',
              'x is 5 and y is 3',
              'x is 9 and y is 3'
            ],
            correctAnswer: 0,
            explanation: 'set returns the element it replaced, which was 5, and remove returns the element it took out, which was 8. The new value 9 and the new front element 3 are never returned.'
          },
          {
            question: 'Which statement, run after Segment A, throws an IndexOutOfBoundsException?',
            options: [
              'q.set(3, 1);',
              'q.add(3, 1);',
              'q.add(0, 1);',
              'q.get(2);'
            ],
            correctAnswer: 0,
            explanation: 'q has size 3, so set accepts only indices 0 to 2. add(index, obj) also accepts index 3, the size, which appends; get(2) reads the last element.'
          }
        ]
      }
    },
    {
      id: 'csaarray3-shifting',
      type: 'text' as const,
      content: `
## What Shifting Does to Indices

An ArrayList keeps its elements in consecutive indices with no gaps. Inserting or removing in the middle therefore moves every later element.

| Call on [A, B, C, D] | List afterward | Elements whose index changed |
|---|---|---|
| \`add(1, "X")\` | [A, X, B, C, D] | B, C and D, each up by 1 |
| \`add(4, "X")\` | [A, B, C, D, X] | none |
| \`remove(1)\` | [A, C, D] | C and D, each down by 1 |
| \`remove(3)\` | [A, B, C] | none |
| \`set(1, "X")\` | [A, X, C, D] | none |

> 🔑 **Key Concept:** An index saved before an insert or a removal may afterward point at a different element. This is the reason a forward loop that removes elements skips the element after each removal, the bug taught in the ArrayList Algorithms lesson.

Shifting is also work for the computer. \`add(0, obj)\` on a list of 1,000 elements moves all 1,000 existing elements; \`add(obj)\` at the end moves none.

## IndexOutOfBoundsException

| Call on a list of size n | Throws when the index is |
|---|---|
| \`get(i)\`, \`set(i, obj)\`, \`remove(i)\` | negative, or n or more |
| \`add(i, obj)\` | negative, or more than n |

On an empty list (n = 0), every \`get\`, \`set\` and \`remove\` throws, while \`add(0, obj)\` is legal. Note the name: a list throws an \`IndexOutOfBoundsException\`, while an array throws an \`ArrayIndexOutOfBoundsException\`.
      `
    },
    {
      id: 'csaarray3-rules',
      type: 'dropdown-select' as const,
      content: `
**Method Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a list of size 4, the largest index allowed in add(index, obj) is ___',
            options: ['4', '3', '5', '0']
          },
          {
            label: 'The call list.set(index, obj) returns ___',
            options: ['the element it replaced', 'the element it stored', 'the new size of the list', 'true when the call works']
          },
          {
            label: 'After remove(1) on a list of size 6, the element that was at index 4 is at index ___',
            options: ['3', '4', '5', '2']
          }
        ],
        correctAnswers: ['4', 'the element it replaced', '3'],
        hint1: 'Inserting at the index equal to the size appends.',
        hint2: 'set swaps in the new element and hands back the one it took out.',
        hint3: 'Every element after the removed one moves down by exactly one.',
        explanation: 'add(index, obj) accepts indices 0 through the size, so 4. set returns the element that was replaced. remove(1) shifts each later element down one index, so index 4 becomes index 3.'
      }
    },
    {
      id: 'csaarray3-nested',
      type: 'input-boxes' as const,
      content: `
**Trace It** ✍️

\`\`\`java
ArrayList<String> w = new ArrayList<String>();
w.add("a");
w.add("b");
w.add("c");
w.add(1, w.remove(2));
w.set(0, w.get(2) + w.get(1));
\`\`\`

1) What is w.size() after the segment runs?

2) What String is stored at index 0 after the segment runs? Type it without quotes.
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', 'bc'],
        hint1: 'The argument w.remove(2) runs first, before add puts anything back.',
        hint2: 'After the add statement, the list is [a, c, b].',
        hint3: 'w.get(2) is "b" and w.get(1) is "c"; + joins them in that order.',
        explanation: 'w.remove(2) returns "c" and leaves [a, b]; add(1, "c") gives [a, c, b], still size 3. Then set(0, "b" + "c") stores "bc" at index 0, giving [bc, c, b].'
      }
    },
    {
      id: 'csaarray3-apconnect',
      type: 'text' as const,
      content: `
## AP Connection

- In free response, use only the six methods on the Quick Reference. A method that is not listed there, such as one that searches the list for you, is not part of the course, so write the loop yourself.
- When a trace stores the result of \`set\` or \`remove\`, pause and ask which element was there **before** the call.
- Before every \`get\`, \`set\` or \`remove\` in your own code, check that the index can never reach \`size()\`. Before every \`add(index, obj)\`, check that it can never pass \`size()\`.
      `
    }
  ]
}
