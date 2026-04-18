export const cspProceduresListsPart1Data = {
  topicSlug: 'csp-procedures-lists',
  sections: [
    {
      id: 'csppl1-intro',
      type: 'text' as const,
      content: `
# 📝 Procedures & Lists

**Part 1 of 7 — List Operations, Traversals, and Procedure Design**

---

## Lists in AP CSP

A **list** (also called an array) stores an ordered collection of values.

\`\`\`
// AP CSP pseudocode uses 1-based indexing!
myList ← ["apple", "banana", "cherry"]
DISPLAY(myList[1])    // "apple" (index 1 is the first element)
DISPLAY(myList[3])    // "cherry"
\`\`\`

> ⚠️ **AP CSP lists are 1-indexed** (first element at index 1). Most programming languages are 0-indexed.

---

## List Operations

| Operation | Pseudocode | Effect |
|-----------|-----------|--------|
| **Access** | \`list[i]\` | Get element at index i |
| **Assign** | \`list[i] ← value\` | Set element at index i |
| **Insert** | \`INSERT(list, i, value)\` | Insert value at index i, shifting others right |
| **Append** | \`APPEND(list, value)\` | Add value to the end of the list |
| **Remove** | \`REMOVE(list, i)\` | Remove element at index i, shifting others left |
| **Length** | \`LENGTH(list)\` | Number of elements in the list |

### Example
\`\`\`
scores ← [90, 85, 78]
APPEND(scores, 92)           // [90, 85, 78, 92]
INSERT(scores, 2, 88)        // [90, 88, 85, 78, 92]
REMOVE(scores, 1)            // [88, 85, 78, 92]
DISPLAY(LENGTH(scores))      // 4
\`\`\`
      `
    },
    {
      id: 'csppl1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In AP CSP pseudocode, what index is the FIRST element of a list?',
            options: [
              'Index 0',
              'Index 1',
              'Index -1',
              'It varies'
            ],
            correctAnswer: 1,
            explanation: 'AP CSP pseudocode uses 1-based indexing. The first element is at index 1, the second at index 2, etc. This is different from most programming languages which use 0-based indexing.'
          },
          {
            question: 'list ← [10, 20, 30]\nINSERT(list, 2, 15)\nWhat is the list now?',
            options: [
              '[10, 15, 20, 30]',
              '[10, 20, 15, 30]',
              '[15, 10, 20, 30]',
              '[10, 20, 30, 15]'
            ],
            correctAnswer: 0,
            explanation: 'INSERT(list, 2, 15) inserts 15 at index 2. The existing elements at indices 2 and 3 shift right. Result: [10, 15, 20, 30]. The list grows by one element.'
          }
        ]
      }
    },
    {
      id: 'csppl1-content',
      type: 'text' as const,
      content: `
## List Traversal

### FOR EACH Loop
\`\`\`
total ← 0
FOR EACH score IN scores
{
    total ← total + score
}
average ← total / LENGTH(scores)
\`\`\`

### Index-Based Loop
\`\`\`
i ← 1
REPEAT UNTIL (i > LENGTH(scores))
{
    DISPLAY(scores[i])
    i ← i + 1
}
\`\`\`

## Common List Algorithms

### Find the Maximum
\`\`\`
PROCEDURE findMax(list)
{
    max ← list[1]
    FOR EACH item IN list
    {
        IF (item > max)
        {
            max ← item
        }
    }
    RETURN max
}
\`\`\`

### Filter a List
\`\`\`
PROCEDURE getPositives(list)
{
    result ← []
    FOR EACH item IN list
    {
        IF (item > 0)
        {
            APPEND(result, item)
        }
    }
    RETURN result
}
\`\`\`

### Swap Two Elements
\`\`\`
temp ← list[i]
list[i] ← list[j]
list[j] ← temp
\`\`\`
      `
    },
    {
      id: 'csppl1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) APPEND(list, value) adds the value to the _______ of the list.

2) REMOVE(list, i) removes the element at index i and shifts remaining elements _______.

3) To swap two list elements without losing data, you need a _______ variable.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['end', 'left', 'temp'],
        hint1: 'Appending goes to the back.',
        hint2: 'They fill the gap left behind.',
        hint3: 'Temporarily holds one value during the swap.',
        explanation: 'APPEND adds to end. REMOVE shifts left. Swap needs temp variable.'
      }
    },
    {
      id: 'csppl1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**List Operations** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After list ← [5, 10, 15], APPEND(list, 20), LENGTH(list) returns ___',
            options: ['4', '3', '20', '5']
          },
          {
            label: 'To process every element in a list without needing the index, use ___',
            options: ['FOR EACH loop', 'Index-based loop only', 'Binary search', 'REMOVE operation']
          },
          {
            label: 'list ← [1, 2, 3]; REMOVE(list, 2); list is now ___',
            options: ['[1, 3]', '[1, 2]', '[2, 3]', '[1, 2, 3]']
          }
        ],
        correctAnswers: ['4', 'FOR EACH loop', '[1, 3]'],
        hint1: 'Started with 3, added 1.',
        hint2: 'FOR EACH gives each value directly.',
        hint3: 'Index 2 in 1-based indexing is the second element (2).',
        explanation: '3 + 1 = 4. FOR EACH for simple traversal. Remove index 2 removes the value 2.'
      }
    },
    {
      id: 'csppl1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Procedures & Lists

- **Lists are 1-indexed** on the AP exam — first element is list[1], NOT list[0]
- Know all list operations: access, assign, INSERT, APPEND, REMOVE, LENGTH
- INSERT shifts elements RIGHT (list grows). REMOVE shifts elements LEFT (list shrinks)
- The swap algorithm (using temp) appears frequently — memorize it
- Common patterns: sum/average, find max/min, filter, count matches
- FOR EACH is read-only for the loop variable — changes to the variable do NOT change the list
      `
    },
    {
      id: 'csppl1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'list ← [3, 1, 4, 1, 5]\nWhat does this procedure return?\nPROCEDURE mystery(list)\n{\n    count ← 0\n    FOR EACH item IN list\n    {\n        IF (item > 2)\n        { count ← count + 1 }\n    }\n    RETURN count\n}',
            options: [
              '2',
              '3',
              '5',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'The procedure counts elements greater than 2. Checking: 3>2 (yes), 1>2 (no), 4>2 (yes), 1>2 (no), 5>2 (yes). Count = 3.'
          },
          {
            question: 'What is displayed?\nlist ← [10, 20, 30]\nlist[2] ← list[1] + list[3]\nDISPLAY(list[2])',
            options: [
              '20',
              '30',
              '40',
              '50'
            ],
            correctAnswer: 2,
            explanation: 'list[1] = 10 and list[3] = 30. list[2] gets 10 + 30 = 40. Remember: 1-indexed, so list[1] is the first element.'
          }
        ]
      }
    }
  ]
};
