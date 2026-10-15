export const cspProceduresListsPart5Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl5-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 5 of 7 — Inserting, Removing, and Updating Elements**

---

## How List Operations Shift Elements

Starting each time from **list ← ["a", "b", "c", "d"]**:

| Operation | Resulting list | LENGTH |
|-----------|----------------|--------|
| APPEND(list, "e") | ["a", "b", "c", "d", "e"] | 5 |
| INSERT(list, 2, "x") | ["a", "x", "b", "c", "d"] | 5 |
| REMOVE(list, 1) | ["b", "c", "d"] | 3 |
| list[3] ← "z" | ["a", "b", "z", "d"] | 4 |

- **INSERT** shifts the elements at indices ≥ i one place to the **right**.
- **REMOVE** shifts the elements after index i one place to the **left**.
- Assigning to list[i] replaces one element; the length does not change.

> ⚠️ For every list operation, an index less than 1 or greater than LENGTH(list) produces an error, and the program stops.
      `
    },
    {
      id: "csppl5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "list ← [10, 20, 30, 40]\nREMOVE(list, 2)\nINSERT(list, 1, 5)\nDISPLAY(list)\n\nWhat is displayed?",
            options: [
              "[5, 20, 30, 40]",
              "[10, 5, 30, 40]",
              "[5, 10, 30, 40]",
              "[5, 10, 20, 30, 40]"
            ],
            correctAnswer: 2,
            explanation: "REMOVE(list, 2) deletes 20, leaving [10, 30, 40]. INSERT(list, 1, 5) puts 5 at the front and shifts the rest right: [5, 10, 30, 40]."
          },
          {
            question: "list ← [4, 8, 15]\nDISPLAY(list[4])\n\nWhat happens?",
            options: [
              "15 is displayed, since it is the last element",
              "0 is displayed, as the default value",
              "An error occurs, and the program stops",
              "4 is displayed, since it is the index used"
            ],
            correctAnswer: 2,
            explanation: "The list has 3 elements, so index 4 is out of range. On the exam, an out-of-range index produces an error and ends the program."
          }
        ]
      }
    },
    {
      id: "csppl5-content",
      type: 'text' as const,
      content: `
## Removing While Traversing

REMOVE shifts later elements left. If the loop always moves on with i ← i + 1, the element that slid into position i is never checked.

\`\`\`
i ← 1
REPEAT UNTIL (i > LENGTH(nums))
{
    IF (nums[i] < 0)
    {
        REMOVE(nums, i)
    }
    i ← i + 1
}
\`\`\`

With nums ← [3, -1, -2, 5]: at i = 2, -1 is removed and -2 slides into index 2, but i becomes 3, so -2 is skipped. The result is [3, -2, 5].

**Fix:** move to the next index only when nothing was removed.

\`\`\`
IF (nums[i] < 0)
{
    REMOVE(nums, i)
}
ELSE
{
    i ← i + 1
}
\`\`\`

## Updating Every Element by Index

FOR EACH assigns item a copy of each value, so item ← item * 2 does **not** change the list. To change the elements themselves, use an index:

\`\`\`
i ← 1
REPEAT LENGTH(prices) TIMES
{
    prices[i] ← prices[i] * 2
    i ← i + 1
}
\`\`\`
      `
    },
    {
      id: "csppl5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) After list ← [1, 2, 3] and INSERT(list, 2, 9), what is list[3]? _______

2) After list ← [5, 6, 7, 8] and REMOVE(list, 3), what is LENGTH(list)? _______

3) The first (buggy) removal loop runs on nums ← [-4, -6, 2]. How many negative values are left in nums? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2", "3", "1"],
        hint1: "The list becomes [1, 9, 2, 3].",
        hint2: "REMOVE shortens the list by one.",
        hint3: "After -4 is removed, -6 slides into index 1, but i moves to 2.",
        explanation: "INSERT shifts 2 and 3 right, so list[3] is 2. Removing one element leaves 3. The buggy loop removes -4, then skips -6, leaving [-6, 2] with one negative value."
      }
    },
    {
      id: "csppl5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "INSERT(list, i, value) shifts the elements at indices ≥ i ___",
            options: ["right by one", "left by one", "to the end", "off the list"]
          },
          {
            label: "Accessing list[0] in AP pseudocode ___",
            options: ["produces an error", "returns the first element", "returns the last element", "returns the value 0"]
          },
          {
            label: "FOR EACH item IN prices { item ← item * 2 } changes the list prices by ___",
            options: ["nothing at all", "doubling every element", "doubling the first element", "removing every element"]
          }
        ],
        correctAnswers: ["right by one", "produces an error", "nothing at all"],
        hint1: "Room has to be made at index i.",
        hint2: "AP lists start at index 1.",
        hint3: "item holds a copy of each value.",
        explanation: "INSERT makes room by shifting right. Index 0 is out of range in a 1-indexed list. Changing the FOR EACH variable does not change the list."
      }
    },
    {
      id: "csppl5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Changing Lists

- Redraw the list after **every** INSERT, APPEND, or REMOVE; indexes of later elements change.
- INSERT and APPEND add 1 to LENGTH; REMOVE subtracts 1; list[i] ← x leaves LENGTH unchanged.
- Any index below 1 or above LENGTH(list) is an error.
- When removing inside a loop, only advance the index when nothing was removed.
- Use an index loop, not FOR EACH, to change the elements of a list.
      `
    },
    {
      id: "csppl5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "words ← [\"blue\", \"gold\", \"pink\"]\nAPPEND(words, \"teal\")\nREMOVE(words, 1)\nDISPLAY(words[2])\n\nWhat is displayed?",
            options: [
              "gold",
              "pink",
              "teal",
              "blue"
            ],
            correctAnswer: 1,
            explanation: "After APPEND the list is [\"blue\", \"gold\", \"pink\", \"teal\"]. REMOVE(words, 1) deletes \"blue\" and shifts the rest left, so words[2] is \"pink\"."
          },
          {
            question: "A procedure should remove every 0 from nums. Its index i starts at 1, and its loop repeats until i > LENGTH(nums). Which loop body is correct?",
            options: [
              "IF (nums[i] = 0) { REMOVE(nums, i) }, then i ← i + 1 on every pass",
              "IF (nums[i] = 0) { REMOVE(nums, i + 1) } ELSE { i ← i + 1 }",
              "IF (nums[i] ≠ 0) { REMOVE(nums, i) } ELSE { i ← i + 1 }",
              "IF (nums[i] = 0) { REMOVE(nums, i) } ELSE { i ← i + 1 }"
            ],
            correctAnswer: 3,
            explanation: "After a REMOVE, the next element slides into index i, so i must stay put; it advances only when nothing was removed. Advancing every pass skips neighbors, REMOVE(nums, i + 1) deletes the wrong element, and ≠ removes the nonzero values."
          }
        ]
      }
    }
  ]
};
