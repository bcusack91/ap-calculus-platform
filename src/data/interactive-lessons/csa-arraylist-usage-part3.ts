export const csaArraylistUsagePart3Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaarray3-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 3 of 7 — Inserting and Removing in Place**

---

Part 1 showed why a forward loop that removes elements skips the next one. This part generalizes that idea to every algorithm that changes the size of a list while walking through it (CED Topic 4.10): inserting at the right place, inserting next to matches, removing runs of repeats, and moving elements with the value that \`remove\` returns.

> 🔑 **Key Concept:** When the body of a forward loop inserts or removes, ask where the element you have not looked at yet **is now**, then set the index so that the next pass lands on it.

| In a forward loop, the body... | Next pass should look at | So the code... |
|---|---|---|
| replaces with \`set(i, x)\` | i + 1 | lets the loop's \`i++\` run |
| removes the element at i | i | does not advance (or uses \`i--\`) |
| inserts after the current element, at i + 1 | i + 2 | adds an extra \`i++\` to skip the new element |
| inserts before the current element, at i | i + 2 | adds an extra \`i++\`, since the current element moved to i + 1 |
      `
    },
    {
      id: 'csaarray3-insert',
      type: 'text' as const,
      content: `
## Inserting Into a Sorted List

\`\`\`java
// Precondition: nums is in increasing order
public static void insertSorted(ArrayList<Integer> nums, int value) {
    int i = 0;
    while (i < nums.size() && nums.get(i) < value) {
        i++;
    }
    nums.add(i, value);
}
\`\`\`

| Call on [2, 5, 9] | Where the while loop stops | List afterward |
|---|---|---|
| \`insertSorted(nums, 6)\` | i = 2, at the 9 | [2, 5, 6, 9] |
| \`insertSorted(nums, 12)\` | i = 3, the size | [2, 5, 9, 12]: index 3 appends |
| \`insertSorted(nums, 1)\` | i = 0, at the 2 | [1, 2, 5, 9] |
| \`insertSorted(nums, 5)\` | i = 1, at the 5 | [2, 5, 5, 9]: placed before the equal value |

The \`i < nums.size()\` test comes first, so when the value is larger than everything, the loop stops at the size and never calls \`get(nums.size())\`. Because \`add(index, obj)\` accepts the size as an index, the same \`add\` call handles the append case.

## Inserting Next to Matches

\`\`\`java
// nums holds [3, -1, 4]: put a copy of every negative right after it
for (int i = 0; i < nums.size(); i++) {
    if (nums.get(i) < 0) {
        nums.add(i + 1, nums.get(i));
        i++;            // skip the copy just inserted
    }
}
// nums is [3, -1, -1, 4]
\`\`\`

| i at the test | Element | Action | nums afterward |
|---|---|---|---|
| 0 | 3 | none | [3, -1, 4] |
| 1 | -1 | insert -1 at 2, then skip to 2 | [3, -1, -1, 4] |
| 3 | 4 | none | [3, -1, -1, 4] |

Without the extra \`i++\`, the next pass would land on the copy, which is also negative, so the loop would insert another copy, and another, and never end.
      `
    },
    {
      id: 'csaarray3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A** (nums holds [-2, 5, -7])
\`\`\`java
for (int i = 0; i < nums.size(); i++) {
    if (nums.get(i) < 0) {
        nums.add(i, 0);
        i++;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'insertSorted runs on [3, 8, 8, 12] with value 8. At which index is the new 8 inserted?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'The while loop stops at the first element that is not less than 8, which is the 8 at index 1. The new value goes in front of the equal ones.'
          },
          {
            question: 'What does nums hold after Segment A runs?',
            options: [
              '[0, -2, 5, 0, -7]',
              '[-2, 0, 5, -7, 0]',
              '[0, -2, 5, -7]',
              'The loop never ends'
            ],
            correctAnswer: 0,
            explanation: 'Each add(i, 0) puts a 0 in front of a negative and pushes the negative to i + 1; the extra i++ moves past it. So a 0 lands before -2 and before -7.'
          },
          {
            question: 'The extra i++ is removed from the loop that copies every negative in [3, -1, 4]. What happens?',
            options: [
              'The loop never ends',
              'nums is [3, -1, -1, 4]',
              'nums is [3, -1, 4, -1]',
              'It throws an IndexOutOfBoundsException'
            ],
            correctAnswer: 0,
            explanation: 'After the copy is inserted at i + 1, the next pass lands on that copy, which is negative too, so another copy is inserted. The list keeps growing ahead of i.'
          }
        ]
      }
    },
    {
      id: 'csaarray3-remove',
      type: 'text' as const,
      content: `
## Removing Runs of Repeats

\`\`\`java
// letters holds [a, a, b, b, b, c, a]
int i = 1;
while (i < letters.size()) {
    if (letters.get(i).equals(letters.get(i - 1))) {
        letters.remove(i);      // the next element slides into i: stay put
    } else {
        i++;
    }
}
// letters is [a, b, c, a]
\`\`\`

Each element is compared with the one just before it. A removal brings a new element to index i, so i stays put; only a non-match moves on. The last \`a\` survives, because it is not next to the first one.

## Moving Elements With the Value remove Returns

\`remove(i)\` hands back the element it took out, so it can be added somewhere else in the same statement.

\`\`\`java
nums.add(nums.remove(0));                     // rotate left:  [1, 2, 3, 4] becomes [2, 3, 4, 1]
nums.add(0, nums.remove(nums.size() - 1));    // rotate right: [1, 2, 3, 4] becomes [4, 1, 2, 3]
\`\`\`

**Moving elements to another list**

\`\`\`java
// a holds [5, 12, 7, 20]; b is empty; limit is 6
for (int i = a.size() - 1; i >= 0; i--) {
    if (a.get(i) > limit) {
        b.add(0, a.remove(i));
    }
}
// a is [5]; b is [12, 7, 20]
\`\`\`

Walking backward makes each removal safe, and adding each moved element at the **front** of b undoes the backward order, so b keeps the original order.

**Moving every 0 to the end**

\`\`\`java
// nums holds [0, 5, 0, 3]
int n = nums.size();
int i = 0;
for (int k = 0; k < n; k++) {
    if (nums.get(i) == 0) {
        nums.add(nums.remove(i));   // the next element slides into i
    } else {
        i++;
    }
}
// nums is [5, 3, 0, 0]
\`\`\`

The counter k guarantees exactly n passes, one per original element, while i points at the next element still to be examined. Each moved 0 goes to the end, beyond anything left to examine.
      `
    },
    {
      id: 'csaarray3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The run-removal loop above runs on [x, x, y, x, x]. What does the list hold afterward?',
            options: [
              '[x, y, x]',
              '[x, x, y, x]',
              '[x, y, x, x]',
              '[x, x, y, x, x]'
            ],
            correctAnswer: 0,
            explanation: 'Each x that matches the element before it is removed, so the two runs of x shrink to one x each. The y separates them, so both survive.'
          },
          {
            question: 'In the loop that moves elements from a to b, b.add(0, a.remove(i)) is changed to b.add(a.remove(i)). What does b hold for the same a?',
            options: [
              '[20, 7, 12]',
              '[12, 7, 20]',
              '[5, 12, 7, 20]',
              '[7, 12, 20]'
            ],
            correctAnswer: 0,
            explanation: 'The loop visits a from the back, so it moves 20, then 7, then 12. Appending each one keeps that backward order; only adding at the front restores the original order.'
          },
          {
            question: 'Why does the loop that moves every 0 to the end run on the counter k and the saved size n, instead of testing i against nums.size()?',
            options: [
              'Moved zeros get checked forever',
              'The method needs the zeros moved to the front',
              'remove cannot be called inside a for loop',
              'get would throw if size() were called in the test'
            ],
            correctAnswer: 0,
            explanation: 'Moving a 0 leaves the size unchanged, so with a test on nums.size(), i eventually reaches the zeros at the end and keeps moving them back to the end forever. Counting exactly n passes examines each original element once.'
          }
        ]
      }
    },
    {
      id: 'csaarray3-rotate',
      type: 'input-boxes' as const,
      content: `
**Trace It** ✍️

\`\`\`java
// nums holds [1, 2, 3, 4, 5]
nums.add(nums.remove(0));
nums.add(nums.remove(0));
nums.add(0, nums.remove(nums.size() - 1));
\`\`\`

1) What is nums.get(0) after the segment runs?

2) What is nums.get(4) after the segment runs?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['2', '1'],
        hint1: 'Each nums.add(nums.remove(0)) moves the first element to the end.',
        hint2: 'After two left rotations, the list is [3, 4, 5, 1, 2].',
        hint3: 'The last statement moves the last element to the front.',
        explanation: 'Two left rotations give [3, 4, 5, 1, 2], and the right rotation moves the 2 to the front, giving [2, 3, 4, 5, 1]. So index 0 holds 2 and index 4 holds 1.'
      }
    }
  ]
}
