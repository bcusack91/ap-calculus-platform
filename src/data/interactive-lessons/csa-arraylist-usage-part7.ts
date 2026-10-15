export const csaArraylistUsagePart7Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaarray7-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 7 of 7 — Synthesis Review**

---

This part ties the ArrayList algorithms together (CED Topic 4.10). Use the table as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Removing while traversing (Part 1) | go backward, or do not advance after a removal | skipping the element that slides into i |
| Searching (Part 2) | no search method on the Quick Reference: write the loop | returning -1 inside the loop |
| Any / all (Part 2) | early return for the deciding case, default after the loop | an else branch that returns on the first pass |
| Min and max (Part 2) | keep an index or an object, start from the first element | starting at 0 for values that may be negative |
| Inserting (Part 3) | skip past an inserted element | a loop that keeps landing on what it inserted |
| Moving (Part 3) | \`remove\` returns the element it removed | losing the order when moving backward |
| New lists (Part 4) | create once before the loop, return after it | returning the parameter and calling it a copy |
| Two lists (Part 4) | one index for parallel lists; guard each get | \`&&\` when the loop should run while either list has elements |
| Data analysis (Part 5) | getters, equals, and changes made to the field | \`==\` on Strings, private fields, int averages |
      `
    },
    {
      id: 'csaarray7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
ArrayList<Integer> nums = new ArrayList<Integer>();
int[] raw = {4, 9, 4, 1};
for (int r : raw) {
    insertSorted(nums, r);            // from Part 3
}
int i = 1;
while (i < nums.size()) {
    int here = nums.get(i);
    int before = nums.get(i - 1);
    if (here == before) {
        nums.remove(i);
    } else {
        i++;
    }
}
nums.add(nums.remove(0));
System.out.println(nums + " " + countIncreases(nums));   // countIncreases from Part 2
\`\`\`

| Step | What happens | nums afterward |
|---|---|---|
| insert 4, 9, 4, 1 | each value goes in sorted position; the second 4 goes before the first | [1, 4, 4, 9] |
| remove repeats | the second 4 equals the one before it and is removed | [1, 4, 9] |
| rotate left | \`remove(0)\` returns 1, and \`add\` appends it | [4, 9, 1] |
| countIncreases | 4 to 9 is an increase; 9 to 1 is not | returns 1 |

**Output**
\`\`\`
[4, 9, 1] 1
\`\`\`

Unboxing each value into an int before comparing makes \`==\` compare values. Comparing \`nums.get(i) == nums.get(i - 1)\` directly would compare two Integer references instead.
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
            question: 'In the worked example, the raw values are added with nums.add(r) instead of insertSorted. What does nums hold right after the repeat-removal loop?',
            options: [
              '[4, 9, 4, 1]',
              '[4, 9, 1]',
              '[1, 4, 9]',
              '[9, 4, 1]'
            ],
            correctAnswer: 0,
            explanation: 'Without sorting, the two 4s are not next to each other, and the loop only removes a value equal to the one just before it. So nothing is removed.'
          },
          {
            question: 'Which task needs a backward loop or careful index control?',
            options: [
              'Removing every word shorter than 3 letters',
              'Counting the words shorter than 3 letters',
              'Building a list of the short words',
              'Finding the first short word'
            ],
            correctAnswer: 0,
            explanation: 'Only removal changes the size and shifts the later elements during the loop. Counting, building a separate list, and searching all leave the list being traversed unchanged.'
          },
          {
            question: 'For the lists of String a = [A, B] and b = [c], what does reversed(interleave(a, b)) return?',
            options: [
              '[B, c, A]',
              '[A, c, B]',
              '[c, B, A]',
              '[B, A, c]'
            ],
            correctAnswer: 0,
            explanation: 'interleave takes elements in turn, giving [A, c, B], and then reversed returns them in the opposite order, [B, c, A].'
          }
        ]
      }
    },
    {
      id: 'csaarray7-choosing',
      type: 'text' as const,
      content: `
## Choosing the Algorithm

| The task says... | Pattern | Loop |
|---|---|---|
| "return the number of..." | count | enhanced for, counter returned after the loop |
| "return the index of the first..." | search | indexed forward, return i inside, -1 after |
| "return true if any / all..." | any / all | early return inside, the default after |
| "remove all..." | removal | indexed backward, or a while loop that advances only when nothing is removed |
| "insert ... in order" | sorted insert | while loop to find the place, then \`add(i, value)\` |
| "return a new list of..." | build | create the list before the loop, add, return after |
| "for each pair of neighbors..." | neighbors | indexed from 1, using \`get(i - 1)\` and \`get(i)\` |
| "for the elements at the same index in two lists..." | parallel | one index, stopping at the end of the shorter list |
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
            label: 'To find the last index of a match, use a ___ traversal that returns at the first match it meets',
            options: ['backward', 'forward', 'nested', 'enhanced']
          },
          {
            label: 'A method that returns a new list should create that list ___',
            options: ['once, before the loop', 'inside the loop body', 'after the loop ends', 'in the return statement']
          },
          {
            label: 'In a forward loop, right after nums.remove(i), the next unchecked element is at index ___',
            options: ['i', 'i + 1', 'i - 1', '0']
          }
        ],
        correctAnswers: ['backward', 'once, before the loop', 'i'],
        hint1: 'The first match met from the end is the last one.',
        hint2: 'It must exist before anything is added and survive after the loop.',
        hint3: 'Everything after the removed element moves down one index.',
        explanation: 'A backward search meets the last match first. The result list is created once before the loop. After a removal, the next element has slid into index i.'
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
            question: 'Which method body returns true exactly when at least one element of nums is negative?',
            options: [
              'for (int n : nums) { if (n < 0) { return true; } } return false;',
              'for (int n : nums) { if (n < 0) { return true; } else { return false; } } return false;',
              'for (int n : nums) { if (n >= 0) { return false; } } return true;',
              'for (int n : nums) { if (n < 0) { return false; } } return true;'
            ],
            correctAnswer: 0,
            explanation: 'An "any" check returns true at the first match and false only after the whole list has been checked. The version with else decides after one element, and the other two answer different questions.'
          },
          {
            question: 'list holds [2, 2, 2]. A forward loop removes every element equal to 2 by calling remove(i) and never adjusting i. What does list hold afterward?',
            options: [
              '[2]',
              '[]',
              '[2, 2]',
              '[2, 2, 2]'
            ],
            correctAnswer: 0,
            explanation: 'Removing at index 0 slides a 2 into index 0, and i moves on to 1, where the next 2 is removed. Then i is 2, which is not less than the size 1, so one 2 is left.'
          },
          {
            question: 'Which of these can be found from the six RainLog readings?',
            options: [
              'The station with the most rain over the three days',
              'The cause of the heavy rain at North on day 2',
              'The amount of rain at North at noon on day 2',
              'The amount of rain at North next week'
            ],
            correctAnswer: 0,
            explanation: 'Each reading is a daily total for a station, so totals by station can be compared. The data says nothing about causes, times within a day, or the future.'
          }
        ]
      }
    }
  ]
}
