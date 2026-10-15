export const csaArraylistUsagePart4Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaarray4-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 4 of 7 — Building New Lists and Combining Lists**

---

Many list algorithms leave their input alone and return a **new** list. Part 1 built one, a filtered list of even numbers. This part covers the other ways to build a result list (CED Topic 4.10) and the algorithms that work across two lists at once.

| Pattern | What goes into the new list |
|---|---|
| Transform | one computed value per element, such as each word's length |
| Reverse | the same elements, in the opposite order |
| Parallel lists | elements of one list, chosen by values at the same index in another |
| Interleave | elements taken from two lists in turn |
| Common elements | elements of one list that also appear in another |

> 🔑 **Key Concept:** A method that **returns a new list** must create it with \`new\` exactly once, before the loop, and return it after the loop. A method that **modifies its parameter** changes the caller's list and usually returns nothing. Read the prompt to see which one is asked for.
      `
    },
    {
      id: 'csaarray4-transform',
      type: 'text' as const,
      content: `
## Transform: One Result per Element

\`\`\`java
public static ArrayList<Integer> lengths(ArrayList<String> words) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (String w : words) {
        result.add(w.length());     // the int is autoboxed
    }
    return result;
}
\`\`\`

\`lengths\` of [sun, cloud, rain] is [3, 5, 4]. The new list's element type can differ from the input's: Strings go in, Integers come out.

## Reverse Into a New List

\`\`\`java
public static ArrayList<String> reversed(ArrayList<String> list) {
    ArrayList<String> result = new ArrayList<String>();
    for (String s : list) {
        result.add(0, s);           // each element goes in front of the ones before it
    }
    return result;
}
\`\`\`

| s | result afterward |
|---|---|
| "a" | [a] |
| "b" | [b, a] |
| "c" | [c, b, a] |

A backward indexed loop with \`result.add(list.get(i))\` gives the same list.

## New List or Same List?

| The method... | The caller's list afterward | Returned |
|---|---|---|
| builds \`result\` with \`new\` and adds to it | unchanged | the new list |
| calls \`set\`, \`add\` or \`remove\` on its parameter | changed | often nothing |
| executes \`return list;\` on its parameter | possibly changed | the **same** list: an alias, not a copy |

Returning the parameter itself does not make a copy. If the caller then changes the returned list, the original list changes too, because they are one object.
      `
    },
    {
      id: 'csaarray4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
public static ArrayList<Integer> doubled(ArrayList<Integer> nums) {
    for (int i = 0; i < nums.size(); i++) {
        nums.set(i, nums.get(i) * 2);
    }
    return nums;
}
\`\`\`
\`\`\`java
ArrayList<Integer> orig = new ArrayList<Integer>();
orig.add(1);
orig.add(4);
ArrayList<Integer> d = doubled(orig);
d.add(9);
System.out.println(orig);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '[2, 8, 9]',
              '[1, 4]',
              '[2, 8]',
              '[1, 4, 9]'
            ],
            correctAnswer: 0,
            explanation: 'doubled changes the elements of the list it receives and returns that same list, so d and orig are aliases. Adding 9 through d therefore shows up in orig.'
          },
          {
            question: 'What does lengths return for the list [a, tree, of, oaks]?',
            options: [
              '[1, 4, 2, 4]',
              '[4, 2, 4, 1]',
              '[1, 2, 4, 4]',
              '[1, 4, 2]'
            ],
            correctAnswer: 0,
            explanation: 'lengths adds one value per word, in the same order as the input: 1, 4, 2 and 4. It neither sorts the values nor skips the repeated length.'
          },
          {
            question: 'In reversed, the statement that declares and creates result is moved inside the for loop, just before result.add(0, s);. What is the problem?',
            options: [
              'It no longer compiles',
              'It returns the last element only',
              'It returns an empty list',
              'It returns the input list unchanged'
            ],
            correctAnswer: 0,
            explanation: 'A variable declared inside the loop body goes out of scope when the loop ends, so return result; after the loop names a variable that no longer exists and the method does not compile. The result list must be created once, before the loop.'
          }
        ]
      }
    },
    {
      id: 'csaarray4-combine',
      type: 'text' as const,
      content: `
## Parallel Lists

Two lists are **parallel** when the elements at the same index belong together, such as \`names.get(i)\` and \`scores.get(i)\`.

\`\`\`java
public static ArrayList<String> passing(ArrayList<String> names,
                                        ArrayList<Integer> scores, int cut) {
    ArrayList<String> result = new ArrayList<String>();
    for (int i = 0; i < names.size(); i++) {
        if (scores.get(i) >= cut) {
            result.add(names.get(i));
        }
    }
    return result;
}
\`\`\`

For names [Ana, Ben, Cy] with scores [82, 64, 90] and cut 70, the result is [Ana, Cy]. The loop needs an index, because the same i must reach both lists. If code ever removes from one parallel list, it must remove at the same index from the other, or every later pair is mismatched.

## Interleave

\`\`\`java
public static ArrayList<String> interleave(ArrayList<String> a, ArrayList<String> b) {
    ArrayList<String> result = new ArrayList<String>();
    int i = 0;
    while (i < a.size() || i < b.size()) {
        if (i < a.size()) {
            result.add(a.get(i));
        }
        if (i < b.size()) {
            result.add(b.get(i));
        }
        i++;
    }
    return result;
}
\`\`\`

For a = [A, B, C] and b = [x, y], the result is [A, x, B, y, C]. The loop continues while **either** list has elements left (\`||\`), and each \`get\` is guarded by its own size test.

## Common Elements

\`\`\`java
public static ArrayList<String> common(ArrayList<String> a, ArrayList<String> b) {
    ArrayList<String> result = new ArrayList<String>();
    for (String s : a) {
        boolean inB = false;
        for (String t : b) {
            if (t.equals(s)) {
                inB = true;
            }
        }
        if (inB) {
            result.add(s);
        }
    }
    return result;
}
\`\`\`

For a = [fig, kiwi, lime] and b = [lime, fig], the result is [fig, lime], in the order of a. The inner loop is the hand-written search that replaces a membership method, and the flag is reset to false for each new s.
      `
    },
    {
      id: 'csaarray4-combine-check',
      type: 'dropdown-select' as const,
      content: `
**Combining Lists** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In interleave, changing || to && in the while test makes the loop stop when ___',
            options: ['the shorter list runs out', 'the longer list runs out', 'both lists run out', 'the first match is found']
          },
          {
            label: 'In common, if inB were declared and set to false once, before the outer loop, every s after the first match would be ___',
            options: ['added to the result', 'skipped by the loop', 'removed from list a', 'compared only once']
          },
          {
            label: 'passing returns the names whose score is ___',
            options: ['at least cut', 'less than cut', 'exactly cut', 'more than cut']
          }
        ],
        correctAnswers: ['the shorter list runs out', 'added to the result', 'at least cut'],
        hint1: 'With &&, both lists must still have elements for the loop to continue.',
        hint2: 'A flag that is never reset stays true after it is first set.',
        hint3: 'Read the comparison operator in the if test.',
        explanation: 'With && the loop ends as soon as either list is used up, which is the shorter one. A flag declared outside the loop is never reset, so once true it adds every later s. The test >= cut keeps scores of at least cut.'
      }
    },
    {
      id: 'csaarray4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does interleave return for a = [p] and b = [q, r, s]?',
            options: [
              '[p, q, r, s]',
              '[p, q]',
              '[p, q, r]',
              '[q, r, s]'
            ],
            correctAnswer: 0,
            explanation: 'On the first pass both lists have an element, giving p then q. After that only b has elements, so r and s are added in order.'
          },
          {
            question: 'names holds [Ana, Ben, Cy] and scores holds [82, 64, 90]. A student removes index 1 from names but forgets to remove it from scores. What does passing(names, scores, 70) return now?',
            options: [
              '[Ana]',
              '[Ana, Cy]',
              '[Cy]',
              '[Ana, Ben]'
            ],
            correctAnswer: 0,
            explanation: 'names is now [Ana, Cy], but scores is still [82, 64, 90], so Cy is paired with 64 and fails the cut. Only Ana, still paired with 82, passes.'
          }
        ]
      }
    }
  ]
}
