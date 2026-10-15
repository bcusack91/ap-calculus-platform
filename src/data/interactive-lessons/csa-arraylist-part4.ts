export const csaArraylistPart4Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaarray4-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 4 of 7 — Traversing an ArrayList**

---

A traversal visits the elements of a list one at a time (CED Topic 4.9). The loops are the ones you already know from arrays, with \`size()\` in place of \`length\` and \`get(i)\` in place of \`arr[i]\`. What is new is that a list can change size while you walk through it, and that changes which loop is safe.

| Loop | Index available? | Can replace elements? | Can add or remove? |
|---|---|---|---|
| indexed \`for\` with \`i < list.size()\` | yes | yes, with \`set\` | yes, if the index is adjusted |
| \`while\` with an index you manage | yes | yes, with \`set\` | yes, if the index is adjusted |
| enhanced \`for\` | no | no | no: it can throw a \`ConcurrentModificationException\` |

> 🔑 **Key Concept:** Use an enhanced for loop only to **read** a list. Use an indexed loop whenever the body calls \`set\`, \`add\` or \`remove\`.
      `
    },
    {
      id: 'csaarray4-indexed',
      type: 'text' as const,
      content: `
## Indexed Traversals

**Forward, replacing as you go**

\`\`\`java
// words holds [sun, moonlight, sky, rainbow]
int longCount = 0;
for (int i = 0; i < words.size(); i++) {
    if (words.get(i).length() > 4) {
        longCount++;
        words.set(i, words.get(i).substring(0, 4));
    }
}
// longCount is 2; words is [sun, moon, sky, rain]
\`\`\`

\`set\` replaces an element without changing the size, so the loop runs exactly once per element.

**Backward**

\`\`\`java
for (int i = words.size() - 1; i >= 0; i--) {
    System.out.print(words.get(i) + " ");
}
// prints: rain sky moon sun
\`\`\`

The first index is \`size() - 1\`, the last valid index, just as \`length - 1\` is for an array.

## The Test Calls size() Every Time

The condition \`i < list.size()\` is evaluated before **every** pass, so it sees the current size. If the body adds to the end, the target keeps moving:

\`\`\`java
// v holds [3, 4]
for (int i = 0; i < v.size(); i++) {
    if (v.get(i) % 2 == 0) {
        v.add(v.get(i) + 2);
    }
}
\`\`\`

| i | v.get(i) | Action | v afterward |
|---|---|---|---|
| 0 | 3 | odd: nothing | [3, 4] |
| 1 | 4 | add 6 | [3, 4, 6] |
| 2 | 6 | add 8 | [3, 4, 6, 8] |
| 3 | 8 | add 10 | [3, 4, 6, 8, 10] |
| ... | | every new element is even | the loop never ends |

The fix is to save the original size before the loop, \`int n = v.size();\`, and test \`i < n\`. Then the loop visits only the elements that were there at the start, and v ends as [3, 4, 6].
      `
    },
    {
      id: 'csaarray4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A** (nums holds [6, 3, 8, 5])
\`\`\`java
for (int i = 0; i < nums.size(); i++) {
    if (nums.get(i) % 2 == 0) {
        nums.set(i, nums.get(i) / 2);
    } else {
        nums.set(i, nums.get(i) + 1);
    }
}
\`\`\`

**Segment B** (w holds [ant, bee, cat, dog])
\`\`\`java
String out = "";
for (int i = w.size() - 1; i > 0; i -= 2) {
    out += w.get(i);
}
\`\`\`

**Segment C** (v holds [2, 7])
\`\`\`java
for (int i = 0; i < v.size(); i++) {
    if (v.get(i) < 5) {
        v.add(v.get(i) + 5);
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does nums hold after Segment A runs?',
            options: [
              '[3, 4, 4, 6]',
              '[3, 3, 4, 5]',
              '[7, 1, 9, 2]',
              '[3, 1, 4, 2]'
            ],
            correctAnswer: 0,
            explanation: 'Each even element is halved and each odd element goes up by 1: 6 becomes 3, 3 becomes 4, 8 becomes 4 and 5 becomes 6. Every element is visited once because set never changes the size.'
          },
          {
            question: 'What is the value of out after Segment B runs?',
            options: [
              'dogbee',
              'catant',
              'dogcatbee',
              'beedog'
            ],
            correctAnswer: 0,
            explanation: 'i starts at 3 and goes down by 2, so the body runs for i = 3 and i = 1, appending "dog" and then "bee". At i = -1 the test i > 0 is false.'
          },
          {
            question: 'What happens when Segment C runs?',
            options: [
              'v ends as [2, 7, 7]',
              'v ends as [2, 7]',
              'v ends as [2, 7, 7, 12]',
              'The loop never ends'
            ],
            correctAnswer: 0,
            explanation: 'Only the 2 is less than 5, so one element, 7, is added. The new 7 is visited at i = 2, but it is not less than 5, so the loop stops after three passes.'
          }
        ]
      }
    },
    {
      id: 'csaarray4-enhanced',
      type: 'text' as const,
      content: `
## Enhanced for Loops Read the List

\`\`\`java
// nums holds [5, 8, 2]
int total = 0;
for (int n : nums) {      // each Integer is unboxed into n
    total += n;
}
for (int n : nums) {
    n = n * 10;           // changes only the copy in n
}
System.out.println(total + " " + nums);   // prints 15 [5, 8, 2]
\`\`\`

- The loop variable may be \`int\` (each element is unboxed) or \`Integer\`. Either way it is a **copy**: assigning to it never changes the list.
- There is no index, so the loop cannot call \`set(i, ...)\`, look at a neighbor, or skip elements.

## Changing the Size Inside an Enhanced for Loop

\`\`\`java
// words holds [sun, moon, sky, rain]
for (String w : words) {
    if (w.length() == 3) {
        words.add(w + "s");    // changes the size during the loop
    }
}
// throws a ConcurrentModificationException
\`\`\`

An enhanced for loop over an ArrayList may not add or remove elements. Doing so can throw a \`ConcurrentModificationException\`; on the AP exam, treat it as an error. To add or remove while traversing, use an indexed loop and manage the index yourself.

## A while Loop With a Guard

\`\`\`java
// words holds [sun, moon, sky, rain]
int i = 0;
while (i < words.size() && words.get(i).length() <= 3) {
    i++;
}
// i is 1: the index of the first word longer than 3 letters
\`\`\`

If no word is longer than 3 letters, \`i\` reaches \`words.size()\`. The \`&&\` short-circuits at that point, so \`words.get(i)\` is never called with an index that is out of bounds. Reversing the two tests would throw an \`IndexOutOfBoundsException\` in that case.
      `
    },
    {
      id: 'csaarray4-choose',
      type: 'dropdown-select' as const,
      content: `
**Pick the Right Loop** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In for (int v : nums), the statement v = 0; changes ___',
            options: ['nothing in the list', 'every element to 0', 'the current element', 'only the first element']
          },
          {
            label: 'Calling nums.add(1) inside an enhanced for loop over nums ___',
            options: ['throws an exception', 'adds after the loop', 'is ignored by the loop', 'does not compile']
          },
          {
            label: 'To replace each element of a list with its square, use ___',
            options: ['an indexed for loop with set', 'an enhanced for loop with set', 'an enhanced for loop with add', 'an indexed for loop with add']
          }
        ],
        correctAnswers: ['nothing in the list', 'throws an exception', 'an indexed for loop with set'],
        hint1: 'The loop variable is a copy of the element.',
        hint2: 'Changing the size of a list inside an enhanced for loop over it is not allowed.',
        hint3: 'Replacing an element needs its index, and set keeps the size the same.',
        explanation: 'Assigning the loop variable changes only the copy. Adding to the list inside its own enhanced for loop throws a ConcurrentModificationException. Replacing elements needs an index, so an indexed loop with set is the tool.'
      }
    },
    {
      id: 'csaarray4-twolists',
      type: 'text' as const,
      content: `
## Traversing Two Lists in Step

\`\`\`java
// x holds [1, 2, 3, 4]; y holds [10, 20]
ArrayList<Integer> sums = new ArrayList<Integer>();
for (int i = 0; i < x.size() && i < y.size(); i++) {
    sums.add(x.get(i) + y.get(i));
}
// sums is [11, 22]
\`\`\`

The loop stops at the end of the **shorter** list, because \`x.get(i)\` and \`y.get(i)\` both have to be valid. Testing only \`i < x.size()\` would call \`y.get(2)\` and throw.

## Visiting Only the Original Elements

\`\`\`java
// v holds [1, 2, 3]
int n = v.size();
for (int i = 0; i < n; i++) {
    v.add(v.get(i) * 10);
}
// v is [1, 2, 3, 10, 20, 30]
\`\`\`

Saving the size first makes the loop run 3 times even though the list doubles. The body reads \`v.get(i)\` only for i = 0, 1 and 2, the original elements.

> 📝 **AP Connection:** Multiple-choice items often ask how many times a loop body runs or what a list holds after a loop that adds to it. Check whether the header uses a saved size or calls \`size()\` each time.
      `
    },
    {
      id: 'csaarray4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯

**Segment D** (a holds [red, blue, green]; b holds [red, teal])
\`\`\`java
int same = 0;
int i = 0;
while (i < a.size() && i < b.size()) {
    if (a.get(i).equals(b.get(i))) {
        same++;
    }
    i++;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What are the values of same and i after Segment D runs?',
            options: [
              'same is 1 and i is 2',
              'same is 1 and i is 3',
              'same is 2 and i is 2',
              'same is 0 and i is 2'
            ],
            correctAnswer: 0,
            explanation: 'The loop stops when i reaches 2, the size of the shorter list b. Only index 0 holds equal Strings, red and red, so same is 1.'
          },
          {
            question: 'In the example that visits only the original elements, the header is changed to i < v.size(). What is the result?',
            options: [
              'The loop keeps adding to v and never ends',
              'v ends as [1, 2, 3, 10, 20, 30]',
              'v ends as [10, 20, 30]',
              'It throws an IndexOutOfBoundsException'
            ],
            correctAnswer: 0,
            explanation: 'Each pass adds one element, so v.size() grows by 1 every time i does, and i never catches up. The saved size is what made the loop stop after 3 passes.'
          }
        ]
      }
    }
  ]
}
