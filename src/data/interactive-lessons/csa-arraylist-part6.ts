export const csaArraylistPart6Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaarray6-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 6 of 7 — AP-Style Practice**

---

ArrayList is tested in multiple-choice traces and in the free-response question on **Data Analysis with ArrayList**. This part practices both, using only the methods and classes on the Java Quick Reference.

### How to Attack an ArrayList Question

| Step | Do this |
|---|---|
| 1 | Write the list with its indices underneath, and note the size. |
| 2 | After every \`add\` or \`remove\`, rewrite the whole list: the indices after that point have shifted. |
| 3 | Record what \`set\` and \`remove\` **return**, which is the element that was there before. |
| 4 | Check the loop header: does it call \`size()\` on every pass, or use a size saved before the loop? |
| 5 | For lists of objects, remember that \`get\` returns a reference to the object stored in the list. |

> 🔑 **Key Concept:** Most wrong answers on list traces come from using an index after the list has shifted, or from recording the new element as the return value of \`set\`.
      `
    },
    {
      id: 'csaarray6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
ArrayList<String> list = new ArrayList<String>();
list.add("up");
list.add("on");
list.add(0, "in");
list.add(list.size() - 1, "at");
String r = list.remove(1);
list.set(list.size() - 1, r + list.get(0));
System.out.println(list);
\`\`\`

**Segment B**
\`\`\`java
ArrayList<Integer> nums = new ArrayList<Integer>();
for (int k = 1; k <= 4; k++) {
    nums.add(0, k * k);
}
int result = 0;
for (int i = 0; i < nums.size(); i += 2) {
    result += nums.get(i);
}
\`\`\`

**Segment C**
\`\`\`java
ArrayList<Integer> a = new ArrayList<Integer>();
ArrayList<Integer> b = a;
a.add(5);
b.add(7);
b = new ArrayList<Integer>();
b.add(a.get(0) + a.get(1));
System.out.println(a.size() + " " + b.get(0));
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '[in, at, upin]',
              '[in, up, upin]',
              '[in, at, inup]',
              '[at, on, upin]'
            ],
            correctAnswer: 0,
            explanation: 'The list grows to [in, up, at, on]: index size() - 1 is 2, so "at" goes before "on". remove(1) returns "up" and leaves [in, at, on], and the last element becomes "up" + "in".'
          },
          {
            question: 'What is the value of result after Segment B runs?',
            options: [
              '20',
              '10',
              '30',
              '25'
            ],
            correctAnswer: 0,
            explanation: 'Each add(0, ...) puts the new square at the front, so nums is [16, 9, 4, 1]. The second loop adds indices 0 and 2, which hold 16 and 4.'
          },
          {
            question: 'What is printed by Segment C?',
            options: [
              '2 12',
              '1 12',
              '2 5',
              '3 12'
            ],
            correctAnswer: 0,
            explanation: 'a and b share one list while 5 and 7 are added, so a holds [5, 7]. b then moves to a new list holding 12, which does not change a.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1 — capScores

**Prompt.** Write a static method \`capScores\` with parameters \`scores\`, an ArrayList of Integer, and \`cap\`, an int. Every element greater than \`cap\` is replaced by \`cap\`. The method returns the number of elements it changed.

| scores before | Call | Returns | scores afterward |
|---|---|---|---|
| [88, 104, 95, 110] | \`capScores(scores, 100)\` | 2 | [88, 100, 95, 100] |
| [70, 80] | \`capScores(scores, 100)\` | 0 | [70, 80] |
| [] | \`capScores(scores, 50)\` | 0 | []: the loop runs zero times |

### Plan Before You Write

- Replacing an element needs \`set(i, ...)\`, so the loop must have an index. An enhanced for loop cannot do it.
- \`set\` does not change the size, so a plain forward loop visits every element exactly once.
- A counter goes up only when an element is actually replaced.

### Solution

\`\`\`java
public static int capScores(ArrayList<Integer> scores, int cap) {
    int changed = 0;
    for (int i = 0; i < scores.size(); i++) {
        if (scores.get(i) > cap) {
            scores.set(i, cap);
            changed++;
        }
    }
    return changed;
}
\`\`\`

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Traversal | visits every index from 0 to \`scores.size() - 1\`, with no out-of-bounds call |
| Comparison | compares each element with cap, using get |
| Update | replaces the element with \`set(i, cap)\` when it is greater than cap |
| Return | counts only the replaced elements and returns the count after the loop |
      `
    },
    {
      id: 'csaarray6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About capScores** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes the loop as for (int s : scores) and, when s is greater than cap, assigns s = cap and adds 1 to changed. For scores = [88, 104, 95, 110] and cap = 100, what is the result?',
            options: [
              'It returns 2 and leaves scores unchanged',
              'It returns 2 and caps both large scores',
              'It returns 0 and changes nothing',
              'It does not compile, since s is an int'
            ],
            correctAnswer: 0,
            explanation: 'The comparison still sees each value, so the count is 2. But s is only a copy of each element, so assigning it never reaches the list.'
          },
          {
            question: 'In the solution, scores.set(i, cap); is replaced by scores.remove(i); followed by scores.add(i, cap);. What is the effect?',
            options: [
              'The method still works correctly',
              'Every capped element moves to the end',
              'The loop skips the element after each cap',
              'It throws an IndexOutOfBoundsException'
            ],
            correctAnswer: 0,
            explanation: 'remove(i) takes the element out and add(i, cap) puts cap back at the same index, so the size and the positions of the other elements end up unchanged. The extra shifting is wasted work but gives the same result.'
          },
          {
            question: 'Which condition could replace scores.get(i) > cap without changing what the method does?',
            options: [
              'cap < scores.get(i)',
              'scores.get(i) >= cap',
              'scores.get(i) == cap',
              'scores.get(i) > cap + 1'
            ],
            correctAnswer: 0,
            explanation: 'cap < scores.get(i) is the same comparison written the other way around. Using >= would also count elements equal to cap, which the method must not change or count.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2 — parseList

**Prompt.** Write a static method \`parseList\` with a String parameter \`line\` that holds whole numbers separated by commas, such as \`"12,7,30"\`. It returns a new ArrayList of Integer holding those numbers in order, except that negative numbers are left out.

| Call | Returns |
|---|---|
| \`parseList("12,7,30")\` | [12, 7, 30] |
| \`parseList("5,-2,8")\` | [5, 8] |
| \`parseList("-1")\` | [] |

### Solution

\`\`\`java
public static ArrayList<Integer> parseList(String line) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    String[] parts = line.split(",");
    for (String p : parts) {
        int value = Integer.parseInt(p);
        if (value >= 0) {
            result.add(value);
        }
    }
    return result;
}
\`\`\`

- The result list is created **once**, before the loop. Creating it inside the loop would replace it on every pass.
- \`split\` returns an array of Strings, and \`Integer.parseInt\` turns each one into an int, which \`add\` autoboxes.
- The return statement comes after the loop, so every piece is processed.
      `
    },
    {
      id: 'csaarray6-combine',
      type: 'input-boxes' as const,
      content: `
**Trace Both Methods** ✍️

\`\`\`java
ArrayList<Integer> v = parseList("4,-6,10,-1,3");
int c = capScores(v, 5);
int sum = 0;
for (int x : v) {
    sum += x;
}
\`\`\`

1) What is the value of c?

2) What is the value of sum?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['1', '12'],
        hint1: 'parseList drops the negative numbers, so v starts as [4, 10, 3].',
        hint2: 'Only elements greater than 5 are replaced and counted.',
        hint3: 'After capScores, v holds 4, 5 and 3.',
        explanation: 'parseList returns [4, 10, 3]. capScores replaces only the 10, so it returns 1 and v becomes [4, 5, 3], whose sum is 12.'
      }
    },
    {
      id: 'csaarray6-deductions',
      type: 'text' as const,
      content: `
## Mistakes That Break ArrayList Answers

| Mistake | Why it fails |
|---|---|
| \`scores[i]\` or \`scores.length\` | array syntax on a list does not compile |
| an enhanced for loop that assigns its variable | the assignment changes a copy, not the list |
| \`i <= scores.size()\` in the header | the last pass calls \`get(scores.size())\`, which throws |
| \`return\` inside the loop | the method stops after the first element |
| a list declared with \`int\` | a primitive cannot be the element type |
| the result list created inside the loop | a fresh empty list replaces the old one on every pass |
| \`==\` to compare String elements | it compares references, not the characters |

> 📝 **AP Connection:** Before you finish a free-response answer, reread every line that touches the list and check three things: list syntax (\`get\`, \`set\`, \`size\`), index bounds, and whether a change must reach the caller's list.
      `
    }
  ]
}
