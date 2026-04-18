export const csaArraylistUsagePart1Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaalu1-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 1 of 7 — Removing, Searching, and Common Patterns**

---

## The Remove-While-Traversing Trap

\`\`\`java
// BUGGY: Skips elements after removal!
ArrayList<String> words = new ArrayList<>();
// words = ["cat", "dog", "cat", "bird"]
for (int i = 0; i < words.size(); i++) {
    if (words.get(i).equals("cat")) {
        words.remove(i);
        // After removing index 0: ["dog", "cat", "bird"]
        // i becomes 1, skipping "dog" -> misses second "cat"!
    }
}
\`\`\`

### Three Correct Solutions

\`\`\`java
// Solution 1: Decrement i after removal
for (int i = 0; i < words.size(); i++) {
    if (words.get(i).equals("cat")) {
        words.remove(i);
        i--;  // Recheck this index
    }
}

// Solution 2: Traverse backward
for (int i = words.size() - 1; i >= 0; i--) {
    if (words.get(i).equals("cat")) {
        words.remove(i);  // Removal does not affect earlier indices
    }
}

// Solution 3: Use while loop
int i = 0;
while (i < words.size()) {
    if (words.get(i).equals("cat")) {
        words.remove(i);  // Do NOT increment i
    } else {
        i++;
    }
}
\`\`\`

> 🔑 **Backward traversal** is the safest and simplest approach for removing elements, since removing a later element does not affect the indices of earlier ones.
      `
    },
    {
      id: 'csaalu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does removing elements while traversing forward cause bugs?',
            options: [
              'The ArrayList becomes null after removal',
              'Elements shift left, so the next element moves to the current index and gets skipped',
              'The remove method does not work inside loops',
              'Forward loops are always slower than backward loops'
            ],
            correctAnswer: 1,
            explanation: 'When you remove element at index i, all later elements shift left by one. The element that was at i+1 is now at i. When i increments, it skips that element.'
          },
          {
            question: 'Which traversal direction avoids the remove-while-traversing bug without extra logic?',
            options: [
              'Forward (i = 0 to size)',
              'Backward (i = size-1 to 0)',
              'Random order',
              'Every other element'
            ],
            correctAnswer: 1,
            explanation: 'Traversing backward means removals only affect indices AFTER the current position (which have already been processed). No elements are skipped.'
          }
        ]
      }
    },
    {
      id: 'csaalu1-content',
      type: 'text' as const,
      content: `
## Common ArrayList Algorithms

### Finding the Maximum
\`\`\`java
public int findMax(ArrayList<Integer> list) {
    int max = list.get(0);
    for (int i = 1; i < list.size(); i++) {
        if (list.get(i) > max) {
            max = list.get(i);
        }
    }
    return max;
}
\`\`\`

### Removing All Occurrences
\`\`\`java
public void removeAll(ArrayList<String> list, String target) {
    for (int i = list.size() - 1; i >= 0; i--) {
        if (list.get(i).equals(target)) {
            list.remove(i);
        }
    }
}
\`\`\`

### Building a Filtered List
\`\`\`java
public ArrayList<Integer> getEvens(ArrayList<Integer> list) {
    ArrayList<Integer> evens = new ArrayList<>();
    for (int val : list) {
        if (val % 2 == 0) {
            evens.add(val);
        }
    }
    return evens;
}
\`\`\`

### Removing Duplicates
\`\`\`java
public ArrayList<String> removeDups(ArrayList<String> list) {
    ArrayList<String> result = new ArrayList<>();
    for (String s : list) {
        if (!result.contains(s)) {
            result.add(s);
        }
    }
    return result;
}
\`\`\`
      `
    },
    {
      id: 'csaalu1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When removing elements from an ArrayList in a forward loop, you must _______ the index after each removal to avoid skipping.

2) The safest way to remove elements while traversing is to iterate _______.

3) To check if an ArrayList contains a specific value, use the _______ method.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['decrement', 'backward', 'contains'],
        hint1: 'i-- after removal.',
        hint2: 'Start from the end and go down.',
        hint3: 'Returns true if the value is in the list.',
        explanation: 'Decrement i after removal. Backward traversal is safest. contains() checks for membership.'
      }
    },
    {
      id: 'csaalu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Pattern** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To build a new list with only elements matching a condition, use the ___ pattern',
            options: ['Filter (create new list, add matching elements)', 'Remove (delete non-matching from original)', 'Sort (reorder elements)', 'Swap (exchange elements)']
          },
          {
            label: 'list.set(i, newVal) ___ the size of the ArrayList',
            options: ['Does not change (replaces in place)', 'Increases by 1', 'Decreases by 1', 'Doubles']
          },
          {
            label: 'enhanced for loop on an ArrayList should NOT be used when you need to ___',
            options: ['Remove elements during traversal', 'Read each element', 'Print each element', 'Calculate a sum']
          }
        ],
        correctAnswers: ['Filter (create new list, add matching elements)', 'Does not change (replaces in place)', 'Remove elements during traversal'],
        hint1: 'Create a new list and selectively add.',
        hint2: 'set() replaces; it does not insert.',
        hint3: 'Enhanced for loop cannot safely remove.',
        explanation: 'Filter pattern builds new list. set() replaces in place (same size). Enhanced for cannot remove safely.'
      }
    },
    {
      id: 'csaalu1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: ArrayList Algorithms

- The **remove-while-traversing** bug is one of the most commonly tested topics
- Always compare Strings with \`.equals()\`, never \`==\`
- Know three solutions: backward loop, i-- after remove, while loop with conditional increment
- FRQ tip: if the question says "remove all X," traverse backward
- The enhanced for loop is read-only for modification purposes — do not add or remove
- \`list.remove(i)\` returns the removed element — useful for moving elements between lists
      `
    },
    {
      id: 'csaalu1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'ArrayList<Integer> nums = [3, 5, 3, 8, 3]. After removing all 3s with a backward loop, what remains?',
            options: [
              '[5, 8]',
              '[3, 5, 8]',
              '[5, 3, 8]',
              '[5, 8, 3]'
            ],
            correctAnswer: 0,
            explanation: 'Backward traversal: i=4 (3, remove), i=3 (8, keep), i=2 (3, remove), i=1 (5, keep), i=0 (3, remove). Result: [5, 8]. All three 3s are correctly removed.'
          },
          {
            question: 'What is returned by this method for list = [1, 2, 3, 4, 5]?\npublic ArrayList<Integer> mystery(ArrayList<Integer> list) {\n    ArrayList<Integer> result = new ArrayList<>();\n    for (int val : list) {\n        if (val % 2 == 0) {\n            result.add(val);\n        }\n    }\n    return result;\n}',
            options: [
              '[1, 3, 5]',
              '[2, 4]',
              '[1, 2, 3, 4, 5]',
              '[]'
            ],
            correctAnswer: 1,
            explanation: 'The method filters for even numbers (val % 2 == 0). 2 and 4 are even. Result: [2, 4]. This is the filter pattern — build a new list with matching elements.'
          }
        ]
      }
    }
  ]
};
