export const csaStringsObjectsPart6Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csastrin6-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 6 of 7 — AP-Style Practice**

---

Strings appear all over the AP Computer Science A exam. Multiple-choice questions ask you to trace substring, indexOf, and compareTo calls, often inside a loop. Free-response question 1 (Methods and Control Structures) regularly asks you to write a method that walks through a String. This part practices both.

### How to Attack a String Question

| Step | Do this |
|---|---|
| 1 | Write the indices under every String in the code. |
| 2 | For each substring call, write the start and end and check \`0 <= a <= b <= length\`. |
| 3 | For loops, make a trace table: \`i\`, the piece examined, and the accumulator. |
| 4 | For each comparison, ask whether it compares contents (equals, compareTo) or references (==). |
| 5 | Find where the output happens: inside the loop, after it, or never (if an exception is thrown first). |

> 🔑 **Key Concept:** Most wrong answers on String traces are the result of one predictable slip: an end index counted as included, a loop that runs one pass too many or too few, or a prepend read as an append.
      `
    },
    {
      id: 'csastrin6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
String s = "abcdef";
String r = "";
for (int i = 0; i < s.length(); i += 2) {
    r += s.substring(i + 1, i + 2) + s.substring(i, i + 1);
}
System.out.println(r);
\`\`\`

**Segment B**
\`\`\`java
String w = "ALGORITHM";
int p = w.indexOf("RI");
String x = w.substring(p) + w.substring(0, p);
System.out.println(x.length() + " " + x.substring(0, 3));
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              'bdf',
              'badcfe',
              'ace',
              'badc'
            ],
            correctAnswer: 1,
            explanation: 'The loop visits i = 0, 2 and 4, and each pass appends the letter at i + 1 followed by the letter at i, swapping each pair: "ba", "dc", "fe". On the last pass i + 2 is 6, which equals the length, so no exception occurs.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '9 RITH',
              '10 RIT',
              '9 RIT',
              '10 RITH'
            ],
            correctAnswer: 2,
            explanation: 'p is 4, so x is "RITHM" + "ALGO", which still has all 9 letters, and x.substring(0, 3) is "RIT". A length of 10 would require the second piece to end at index 5 instead of 4, and "RITH" would count the end index as included.'
          }
        ]
      }
    },
    {
      id: 'csastrin6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1 — countDoubles

**Prompt.** Write a static method \`countDoubles\` that returns the number of indices \`i\` where the character at \`i\` is the same as the character at \`i + 1\`.

| Call | Matching pairs | Returns |
|---|---|---|
| \`countDoubles("bookkeeper")\` | oo, kk, ee | 3 |
| \`countDoubles("aaabb")\` | aa (0 and 1), aa (1 and 2), bb | 3 |
| \`countDoubles("x")\` | none | 0 |
| \`countDoubles("")\` | none | 0 |

### Plan before you write

- Each pass looks at **two** neighbors, so the last legal \`i\` is \`str.length() - 2\`. The loop condition is \`i < str.length() - 1\`.
- Pull out the neighbors with \`substring(i, i + 1)\` and \`substring(i + 1, i + 2)\`.
- Compare them with equals and count.

### Solution

\`\`\`java
public static int countDoubles(String str) {
    int count = 0;
    for (int i = 0; i < str.length() - 1; i++) {
        String a = str.substring(i, i + 1);
        String b = str.substring(i + 1, i + 2);
        if (a.equals(b)) {
            count++;
        }
    }
    return count;
}
\`\`\`

For \`""\` the condition is \`0 < -1\`, which is false, so the loop never runs and the method returns 0 without an exception.

### What a rubric looks for

| Point | Earned by |
|---|---|
| Traversal | visits every adjacent pair with no out-of-bounds call |
| Extraction | gets the two neighbors as one-character Strings |
| Comparison | compares contents with equals (not ==) |
| Result | initializes the count, increments it, and **returns** it after the loop |
      `
    },
    {
      id: 'csastrin6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About countDoubles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes the loop header in countDoubles as for (int i = 0; i < str.length(); i++). What happens when the method is called with "moon"?',
            options: [
              'It returns 1',
              'It returns 2',
              'It throws an exception',
              'It returns 0'
            ],
            correctAnswer: 2,
            explanation: 'On the last pass i is 3, and str.substring(4, 5) asks for an end index past the length of 4, which throws a StringIndexOutOfBoundsException. The "oo" match was counted earlier, but the method never reaches its return statement.'
          },
          {
            question: 'Which replacement for a.equals(b) in countDoubles would NOT work reliably?',
            options: [
              'b.equals(a)',
              'a.compareTo(b) == 0',
              'a == b',
              'b.compareTo(a) == 0'
            ],
            correctAnswer: 2,
            explanation: 'substring builds new String objects while the program runs, so == compares two different references and can be false even when the letters match. The other three expressions all compare contents.'
          }
        ]
      }
    },
    {
      id: 'csastrin6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2 — isAlphabetical

**Prompt.** Write a static method \`isAlphabetical\` that returns true if every letter of \`word\` is the same as, or comes after, the letter before it in Java String order, and false otherwise.

| Call | Why | Returns |
|---|---|---|
| \`isAlphabetical("almost")\` | a, l, m, o, s, t never go backward | true |
| \`isAlphabetical("hello")\` | "e" comes before "h" | false |
| \`isAlphabetical("Ghost")\` | uppercase "G" comes before every lowercase letter | true |

### Solution

\`\`\`java
public static boolean isAlphabetical(String word) {
    for (int i = 0; i < word.length() - 1; i++) {
        String current = word.substring(i, i + 1);
        String next = word.substring(i + 1, i + 2);
        if (current.compareTo(next) > 0) {
            return false;
        }
    }
    return true;
}
\`\`\`

- **Return false early.** One out-of-order pair is enough to answer the question.
- **Return true only after the loop.** You can only say "every pair is in order" once you have checked every pair.

### The classic mistake

\`\`\`java
if (current.compareTo(next) > 0) {
    return false;
} else {
    return true;    // returns after checking only the first pair
}
\`\`\`

With this version, \`isAlphabetical("abca")\` returns true: the first pair "a", "b" is in order, so the method returns before it ever reaches "c", "a".
      `
    },
    {
      id: 'csastrin6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Using the correct isAlphabetical, what does \`isAlphabetical("Ghost")\` return? (true or false)

2) What does \`countDoubles("aaabb")\` return?

3) How many times does the correct isAlphabetical evaluate \`current.compareTo(next)\` when called with \`"bear"\`?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['true', '3', '2'],
        hint1: 'Compare G with h, h with o, o with s, and s with t.',
        hint2: 'Overlapping pairs count separately: check indices 0-1, 1-2, 2-3, 3-4.',
        hint3: 'The method returns as soon as it finds a pair that goes backward.',
        explanation: 'Uppercase "G" comes before "h", and the rest of "Ghost" is in order, so it returns true. "aaabb" has matching pairs at indices 0, 1 and 3, so the count is 3. In "bear", "b" to "e" is fine, but "e" to "a" goes backward, so the method returns false after 2 comparisons.'
      }
    },
    {
      id: 'csastrin6-deductions',
      type: 'text' as const,
      content: `
## Common FRQ Deductions on String Methods

| Mistake | Why it costs points |
|---|---|
| Comparing Strings with == | compares references, not contents |
| Loop bound one too far | substring throws when the end index passes the length |
| Returning inside the loop on both branches | the method stops after one check |
| Printing the answer instead of returning it | the method must return a value to its caller |
| Never using the return value of substring | Strings are immutable; the result must be stored or used |
| Calling a method on a parameter that might be null | throws NullPointerException (rare on the exam, but check the preconditions) |

> 🎯 **AP Connection:** Write with the methods on the Java Quick Reference: \`length\`, \`substring\`, \`indexOf\`, \`equals\`, and \`compareTo\`. They are enough for every String task the exam sets, and readers know exactly what they do.
      `
    }
  ]
};
