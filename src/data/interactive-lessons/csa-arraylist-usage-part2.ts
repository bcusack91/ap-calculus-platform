export const csaArraylistUsagePart2Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaarray2-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 2 of 7 — Standard Algorithms on ArrayLists**

---

Part 1 handled the algorithm that is special to lists, removing while traversing, along with finding a maximum and filtering. This part writes the rest of the standard algorithm set for lists (CED Topic 4.10). They are the same algorithms you wrote for arrays, with \`size()\` and \`get(i)\` in place of \`length\` and \`arr[i]\`.

> 🔑 **Key Concept:** The Java Quick Reference has **no searching method** for ArrayList. To find an element, count matches, or ask whether a value is present, you write the loop yourself.

| Algorithm | Loop | Result |
|---|---|---|
| Sum and average | enhanced for | a running total, then a double division |
| Minimum or maximum with its index | indexed for from 1 | the index of the best element so far |
| Count matches | enhanced for | a counter |
| First or last index of a target | indexed, forward or backward | the index, or -1 when it is absent |
| Is any / are all | enhanced for with an early return | a boolean |
| Compare neighbors | indexed for from 1 | uses \`get(i - 1)\` and \`get(i)\` |
| Find a duplicate | nested indexed loops, j from i + 1 | a boolean |
      `
    },
    {
      id: 'csaarray2-accumulate',
      type: 'text' as const,
      content: `
## Sum and Average

\`\`\`java
public static double average(ArrayList<Integer> nums) {
    int sum = 0;
    for (int n : nums) {
        sum += n;
    }
    return (double) sum / nums.size();
}
\`\`\`

For [2, 3] this returns 2.5. Without the cast, \`sum / nums.size()\` is int division and gives 2, which becomes 2.0 when it is returned as a double. The method assumes the list has at least one element.

## The Index of the Minimum

\`\`\`java
public static int indexOfMin(ArrayList<Integer> nums) {
    int best = 0;                          // index of the smallest so far
    for (int i = 1; i < nums.size(); i++) {
        if (nums.get(i) < nums.get(best)) {
            best = i;
        }
    }
    return best;
}
\`\`\`

| i | nums.get(i) | nums.get(best) | best afterward |
|---|---|---|---|
| start | | | 0 (value 5) |
| 1 | 2 | 5 | 1 |
| 2 | 8 | 2 | 1 |
| 3 | 2 | 2 | 1: a tie does not replace |

For [5, 2, 8, 2] the method returns 1. Keeping an **index** instead of a value lets the caller get both: \`nums.get(best)\` is the smallest value. With \`<=\` in place of \`<\`, ties replace the best, so the method would return the **last** smallest index, 3.

## Counting Matches

\`\`\`java
public static int countLonger(ArrayList<String> words, int n) {
    int count = 0;
    for (String w : words) {
        if (w.length() > n) {
            count++;
        }
    }
    return count;
}
\`\`\`

The counter starts at 0 before the loop and is returned after it. For [tree, at, river, sky] and n = 3, the count is 2.
      `
    },
    {
      id: 'csaarray2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does indexOfMin return for the list [7, 3, 9, 3, 5]?',
            options: [
              '1',
              '3',
              '0',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'best moves to index 1 when 3 is found. The second 3, at index 3, is not strictly less than the current minimum, so best stays 1.'
          },
          {
            question: 'The test in indexOfMin is changed from < to <=. What does it return for [7, 3, 9, 3, 5]?',
            options: [
              '3',
              '1',
              '4',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'With <=, an equal value also replaces the best, so the second 3 at index 3 takes over. The 5 at index 4 is larger, so the answer stays 3.'
          },
          {
            question: 'A student writes return sum / nums.size(); in average, without the cast. What is returned for [2, 3, 4, 4]?',
            options: [
              '3.0',
              '3.25',
              '3',
              '4.0'
            ],
            correctAnswer: 0,
            explanation: 'The sum 13 divided by the int 4 is int division, giving 3, and the return type double turns it into 3.0. Only a double operand in the division would keep the 0.25.'
          }
        ]
      }
    },
    {
      id: 'csaarray2-search',
      type: 'text' as const,
      content: `
## Searching: First and Last Index

\`\`\`java
public static int firstIndexOf(ArrayList<String> list, String target) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i).equals(target)) {
            return i;
        }
    }
    return -1;
}
\`\`\`

- \`return i\` inside the loop stops the search at the first match.
- \`return -1\` after the loop runs only when nothing matched. Since -1 is never a valid index, the caller can test for it.
- To find the **last** index, traverse backward, from \`list.size() - 1\` down to 0, and return the first match you meet.

A membership test is then one line:

\`\`\`java
public static boolean has(ArrayList<String> list, String target) {
    return firstIndexOf(list, target) != -1;
}
\`\`\`

## Is Any? Are All?

\`\`\`java
public static boolean allPositive(ArrayList<Integer> nums) {
    for (int n : nums) {
        if (n <= 0) {
            return false;     // one counterexample settles it
        }
    }
    return true;              // no counterexample anywhere
}
\`\`\`

| Question | Return inside the loop | Return after the loop |
|---|---|---|
| Is **any** element a match? | true, at the first match | false |
| Are **all** elements matches? | false, at the first non-match | true |

The classic bug is an \`else\` branch that returns the opposite answer inside the loop. Then the method returns during the very first pass, after looking at only one element.

## Neighbors and Duplicates

\`\`\`java
public static int countIncreases(ArrayList<Integer> readings) {
    int count = 0;
    for (int i = 1; i < readings.size(); i++) {
        if (readings.get(i) > readings.get(i - 1)) {
            count++;
        }
    }
    return count;
}
\`\`\`

Starting at 1 makes \`get(i - 1)\` safe on the first pass. For [4, 6, 5, 7, 9] the increases are 4 to 6, 5 to 7 and 7 to 9, so the method returns 3.

\`\`\`java
public static boolean hasDuplicate(ArrayList<String> list) {
    for (int i = 0; i < list.size(); i++) {
        for (int j = i + 1; j < list.size(); j++) {
            if (list.get(i).equals(list.get(j))) {
                return true;
            }
        }
    }
    return false;
}
\`\`\`

Starting j at \`i + 1\` compares each pair once and never compares an element with itself. A list of 4 distinct elements needs 3 + 2 + 1 = 6 comparisons before the method returns false.
      `
    },
    {
      id: 'csaarray2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Find the Behavior** 🎯

**Segment A**
\`\`\`java
public static boolean allEven(ArrayList<Integer> nums) {
    for (int n : nums) {
        if (n % 2 != 0) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does allEven return for the list [4, 6, 7], and why?',
            options: [
              'It returns true after only the 4',
              'It returns false after reaching the 7',
              'It returns true after checking all three',
              'It returns false after only the 4'
            ],
            correctAnswer: 0,
            explanation: 'The first element, 4, is even, so the else branch returns true during the first pass. The loop never reaches the 7, which is the bug: true belongs after the loop.'
          },
          {
            question: 'What does countIncreases return for [5, 5, 6, 4, 8]?',
            options: [
              '2',
              '3',
              '1',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'Only 5 to 6 and 4 to 8 are increases. The pair 5 and 5 is not an increase, because the test is strictly greater than.'
          },
          {
            question: 'In hasDuplicate, the inner loop is changed to start at j = i. What does the method return for [a, b, c]?',
            options: [
              'true, on the first comparison',
              'false, after all comparisons',
              'true, after all comparisons',
              'false, after the last one'
            ],
            correctAnswer: 0,
            explanation: 'When j equals i, the method compares an element with itself, and every String equals itself. So it returns true on the very first comparison, even though the list has no duplicates.'
          }
        ]
      }
    },
    {
      id: 'csaarray2-count',
      type: 'input-boxes' as const,
      content: `
**Count It** ✍️

1) hasDuplicate runs on a list of 5 distinct Strings. How many times does it call equals before it returns false?

2) What does countIncreases return for [3, 8, 2, 9, 9, 10]?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '3'],
        hint1: 'With j starting at i + 1, the inner loop runs 4, 3, 2, 1 and 0 times.',
        hint2: 'Compare each element with the one just before it, using strictly greater than.',
        hint3: 'The increases are 3 to 8, 2 to 9, and 9 to 10.',
        explanation: 'The comparisons number 4 + 3 + 2 + 1 = 10. In the readings, 3 to 8, 2 to 9 and 9 to 10 are increases, while 8 to 2 and 9 to 9 are not, so the count is 3.'
      }
    }
  ]
}
