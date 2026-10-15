export const cspAlgorithmsPart1Data = {
  topicSlug: 'csp-algorithms',
  sections: [
    {
      id: 'cspalg1-intro',
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 1 of 7 — Sequencing, Selection, Iteration, and Algorithm Analysis**

---

## What Is an Algorithm?

An algorithm is a finite set of step-by-step instructions for solving a problem or accomplishing a task. Every algorithm is built from three fundamental building blocks:

| Building Block | Description | Pseudocode |
|---------------|-----------|-----------|
| **Sequencing** | Steps executed in order, one after another | Line 1, then Line 2, then Line 3 |
| **Selection** | A decision point — choose a path based on a condition | IF / ELSE |
| **Iteration** | Repeat a set of steps | REPEAT, REPEAT UNTIL |

> 🔑 **Any computable problem** can be solved using just these three building blocks. This is a fundamental principle of computer science.

---

## Algorithm Efficiency

Not all algorithms solve a problem equally fast. Efficiency measures how the number of steps grows as the input size grows.

| Algorithm | Steps for n items | Classification |
|-----------|------------------|---------------|
| **Linear search** | Up to n steps | Reasonable |
| **Binary search** | Up to log2(n) steps | Reasonable |
| **Comparing every pair of items** | About n x n steps | Reasonable |
| **Checking all subsets** | 2^n steps | Unreasonable |
| **Checking all orderings** | n! steps | Unreasonable |

**Reasonable** algorithms run in polynomial time (n, n squared, n cubed).
**Unreasonable** algorithms run in exponential or factorial time (2^n, n!).
      `
    },
    {
      id: 'cspalg1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which three building blocks can express ANY algorithm?',
            options: [
              'Input, output, and long-term storage',
              'Sequencing, selection, and iteration',
              'Variables, functions, and classes',
              'Hardware, software, and networking'
            ],
            correctAnswer: 1,
            explanation: 'Sequencing (do steps in order), selection (make decisions), and iteration (repeat steps) are the three fundamental constructs. Any algorithm can be expressed using just these three.'
          },
          {
            question: 'Binary search on a sorted list of 1,000,000 items requires at most approximately how many comparisons?',
            options: [
              '1,000,000',
              '500,000',
              '20',
              '100'
            ],
            correctAnswer: 2,
            explanation: 'Binary search halves the list each step. log2(1,000,000) is approximately 20. So at most ~20 comparisons are needed, compared to up to 1,000,000 for linear search.'
          }
        ]
      }
    },
    {
      id: 'cspalg1-content',
      type: 'text' as const,
      content: `
## Searching Algorithms

### Linear Search
Check each element one by one from start to end.
\`\`\`
PROCEDURE linearSearch(list, target)
{
    FOR EACH item IN list
    {
        IF (item = target)
        {
            RETURN(true)
        }
    }
    RETURN(false)
}
\`\`\`
- Works on **any** list (sorted or unsorted)
- Worst case: check all n items

### Binary Search
Works only on **sorted** data. Start at the middle element. If it is not the target, eliminate the half that cannot contain the target, and repeat on the half that remains until the value is found or no elements remain.

| Elements left to search | 16 | 8 | 4 | 2 | 1 |
|-------------------------|----|---|---|---|---|
| Check number | 1 | 2 | 3 | 4 | 5 |

- Requires a **sorted** list
- Each check eliminates about half of the remaining items
- Usually much faster than linear search on large sorted data
- The exam asks you to count checks and explain the sorted-data requirement; you will not be asked to write a specific binary search implementation

## Decidable vs Undecidable Problems
- **Decidable**: An algorithm exists that always produces a correct yes/no answer
- **Undecidable**: No algorithm can solve it for ALL possible inputs (e.g., the Halting Problem)
      `
    },
    {
      id: 'cspalg1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Binary search requires the list to be _______ before searching.

2) An algorithm that takes 2^n steps for n inputs is classified as _______ (reasonable or unreasonable).

3) A problem for which no algorithm can produce a correct answer for ALL inputs is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sorted', 'unreasonable', 'undecidable'],
        hint1: 'The data must be in order.',
        hint2: 'Exponential growth makes it impractical for large n.',
        hint3: 'It cannot be decided by any algorithm.',
        explanation: 'Binary search needs sorted data. 2^n = unreasonable. Undecidable = no algorithm works for all inputs.'
      }
    },
    {
      id: 'cspalg1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Compare Algorithms** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Linear search checks ___ element(s) in the worst case for a list of n items',
            options: ['n elements', 'log2(n) elements', '1 element', 'n squared elements']
          },
          {
            label: 'Binary search checks ___ element(s) in the worst case for a list of n items',
            options: ['log2(n) elements', 'n elements', 'n/2 elements', '1 element']
          },
          {
            label: 'An algorithm that checks every possible ordering of n items (n! steps) is ___',
            options: ['Unreasonable (impractical for large n)', 'Reasonable (polynomial in n)', 'Linear (grows in proportion to n)', 'Undecidable (no algorithm can ever solve it)']
          }
        ],
        correctAnswers: ['n elements', 'log2(n) elements', 'Unreasonable (impractical for large n)'],
        hint1: 'Check every single one.',
        hint2: 'Halve the list each step.',
        hint3: 'Factorial grows faster than exponential.',
        explanation: 'Linear = n steps. Binary = log2(n) steps. n! = unreasonable.'
      }
    },
    {
      id: 'cspalg1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Algorithms

- Know the difference between **linear search** (unsorted, n steps) and **binary search** (sorted, log2(n) steps)
- **Reasonable** = polynomial (n, n squared). **Unreasonable** = exponential or factorial (2^n, n!)
- Heuristic algorithms find "good enough" solutions when optimal is unreasonable
- The **Halting Problem** is the key example of an undecidable problem — no program can determine if another program will halt for ALL inputs
- Every algorithm uses sequencing, selection, and/or iteration
      `
    },
    {
      id: 'cspalg1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A sorted list has 1,024 elements. Which is closest to the maximum number of elements a binary search examines?',
            options: [
              '1024',
              '512',
              '10',
              '100'
            ],
            correctAnswer: 2,
            explanation: 'Binary search halves the remaining elements each step: 1024 -> 512 -> 256 -> 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1 is 10 halvings, since log2(1024) = 10. About 10 elements are examined, far fewer than the 1,024 a linear search may check.'
          },
          {
            question: 'Which problem is undecidable?',
            options: [
              'Sorting a list of a billion numbers into order',
              'Finding the shortest route that visits 50 cities',
              'Deciding whether any given program will eventually halt',
              'Searching an unsorted list for a target value'
            ],
            correctAnswer: 2,
            explanation: 'The Halting Problem — determining if any program will halt on any input — is proven undecidable by Alan Turing. No algorithm can solve it for ALL possible programs.'
          }
        ]
      }
    }
  ]
};
