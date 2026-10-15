export const csaStringsObjectsPart5Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csastrin5-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 5 of 7 — String Traversal Algorithms**

---

A **String traversal** visits a String one piece at a time with a loop. The AP course names a short list of standard String algorithms, and every one of them is a variation on the same loop.

### Topics in This Part

| Section |
|---------|
| The one-character traversal loop |
| Counting: letters with a property, and occurrences of a substring |
| Building new Strings: filtering and reversing |
| Finding and removing every occurrence |
| Off-by-one errors and how to spot them |

> 🔑 **Key Concept:** Every traversal answers three questions: **where does the loop start, where does it stop, and what piece does each pass examine?** Get those right and the rest is bookkeeping.
      `
    },
    {
      id: 'csastrin5-skeleton',
      type: 'text' as const,
      content: `
## The Traversal Loop

\`\`\`java
for (int i = 0; i < s.length(); i++) {
    String letter = s.substring(i, i + 1);
    // examine letter
}
\`\`\`

- \`i\` runs from 0 to \`s.length() - 1\`, the last legal single-character index.
- \`s.substring(i, i + 1)\` is the one-character String at index \`i\`. On the last pass, \`i + 1\` equals \`s.length()\`, which is a legal end index.
- Each \`letter\` is a String, so test it with \`equals\` or \`indexOf\`, never \`==\`.

### Algorithm 1 — Count letters with a property

\`\`\`java
public static int countVowels(String s) {
    int count = 0;
    for (int i = 0; i < s.length(); i++) {
        String letter = s.substring(i, i + 1);
        if ("aeiou".indexOf(letter) >= 0) {
            count++;
        }
    }
    return count;
}
\`\`\`

The test \`"aeiou".indexOf(letter) >= 0\` asks whether the one-letter String appears inside \`"aeiou"\`. For \`letter = "u"\` it returns 4 (found); for \`letter = "d"\` it returns -1 (not found).

| Call | Vowels found | Returns |
|---|---|---|
| \`countVowels("education")\` | e, u, a, i, o | 5 |
| \`countVowels("rhythm")\` | none | 0 |
| \`countVowels("ECHO")\` | none: "E" and "O" are not in "aeiou" | 0 |

To count uppercase vowels too, search in \`"aeiouAEIOU"\` instead.

### Algorithm 2 — Count occurrences of a substring

To look at pieces longer than one character, slide a **window** of \`target.length()\` characters across the String:

\`\`\`java
public static int countOccurrences(String s, String target) {
    int count = 0;
    int len = target.length();
    for (int i = 0; i <= s.length() - len; i++) {
        if (s.substring(i, i + len).equals(target)) {
            count++;
        }
    }
    return count;
}
\`\`\`

The last window starts at index \`s.length() - len\`, so the condition is \`i <= s.length() - len\`. Windows may overlap:

| Call | Windows that match | Returns |
|---|---|---|
| \`countOccurrences("banana", "ana")\` | start at 1 and 3 | 2 |
| \`countOccurrences("aaaa", "aa")\` | start at 0, 1, and 2 | 3 |
| \`countOccurrences("hi", "hello")\` | loop never runs (2 - 5 is negative) | 0 |
      `
    },
    {
      id: 'csastrin5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Counting Traces** 🎯

**Segment A**
\`\`\`java
String s = "mississippi";
int count = 0;
for (int i = 0; i < s.length() - 1; i++) {
    if (s.substring(i, i + 2).equals("ss")) {
        count++;
    }
}
System.out.println(count);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4',
              '2',
              '1',
              '3'
            ],
            correctAnswer: 1,
            explanation: 'The loop checks every two-letter window, and "ss" starts at index 2 and at index 5. Four would be the number of single "s" letters, not the number of "ss" windows.'
          },
          {
            question: 'If the loop header in countOccurrences were changed to use i < s.length() - len, what would countOccurrences("banana", "na") return?',
            options: [
              '2',
              '0',
              '1',
              '3'
            ],
            correctAnswer: 2,
            explanation: 'With the strict condition, i stops at 3, so the window starting at index 4, the final "na", is never checked. Only the match at index 2 is counted.'
          },
          {
            question: 'In countVowels, what does the test "aeiou".indexOf(letter) >= 0 check?',
            options: [
              'Whether letter appears somewhere in s',
              'Whether letter is one of the five lowercase vowels',
              'Whether "aeiou" begins with letter',
              'Whether letter comes before "u" in order'
            ],
            correctAnswer: 1,
            explanation: 'indexOf returns a position of 0 or more exactly when the one-letter String is found inside "aeiou", and -1 otherwise. The search happens in "aeiou", not in s, and any found position counts, not just position 0.'
          }
        ]
      }
    },
    {
      id: 'csastrin5-build',
      type: 'text' as const,
      content: `
## Building New Strings

Strings are immutable, so "changing" a String really means building a new one in a variable that starts as \`""\` and grows with each pass.

### Algorithm 3 — Remove every copy of a letter (filter)

\`\`\`java
public static String removeLetter(String s, String letter) {
    String result = "";
    for (int i = 0; i < s.length(); i++) {
        String current = s.substring(i, i + 1);
        if (!current.equals(letter)) {
            result += current;
        }
    }
    return result;
}
\`\`\`

\`removeLetter("bookkeeper", "e")\` returns \`"bookkpr"\`: every letter except the three e's is appended.

### Algorithm 4 — Reverse by prepending

Part 1 reversed a String by walking **backward** and appending. You can also walk **forward** and put each letter in front:

\`\`\`java
String s = "stop";
String reversed = "";
for (int i = 0; i < s.length(); i++) {
    reversed = s.substring(i, i + 1) + reversed;
}
\`\`\`

| \`i\` | letter | \`reversed\` after the pass |
|---|---|---|
| 0 | "s" | "s" |
| 1 | "t" | "ts" |
| 2 | "o" | "ots" |
| 3 | "p" | "pots" |

Writing \`reversed = reversed + letter\` instead would rebuild \`"stop"\` unchanged. A **palindrome** check is then one line: \`boolean isPal = s.equals(reversed);\`
      `
    },
    {
      id: 'csastrin5-find',
      type: 'text' as const,
      content: `
## Finding and Removing Every Occurrence

### Algorithm 5 — Report every position of a target

\`\`\`java
String s = "abcabcab";
String t = "ab";
for (int i = 0; i <= s.length() - t.length(); i++) {
    if (s.substring(i, i + t.length()).equals(t)) {
        System.out.print(i + " ");
    }
}
\`\`\`

Output: \`0 3 6\`. This is the counting window from Algorithm 2 with a print in place of \`count++\`.

### Algorithm 6 — Remove every copy of a word with indexOf

\`indexOf\` only finds the **first** occurrence, so call it again after each removal until it returns -1:

\`\`\`java
String s = "la-la-land";
String t = "la";
int p = s.indexOf(t);
while (p >= 0) {
    s = s.substring(0, p) + s.substring(p + t.length());
    p = s.indexOf(t);
}
System.out.println(s);
\`\`\`

| Pass | \`p\` | \`s\` after the removal |
|---|---|---|
| 1 | 0 | "-la-land" |
| 2 | 1 | "--land" |
| 3 | 2 | "--nd" |
| stop | -1 | — |

Output: \`--nd\`. One subtlety: a removal can **create** a new match. Starting from \`"aabb"\` and removing \`"ab"\` leaves \`"ab"\`, which the next pass removes, so the loop ends with the empty String.
      `
    },
    {
      id: 'csastrin5-offbyone',
      type: 'text' as const,
      content: `
## Off-by-One Errors

| Bug | What happens |
|---|---|
| \`i <= s.length()\` with \`substring(i, i + 1)\` | the last pass calls \`substring(s.length(), s.length() + 1)\`: StringIndexOutOfBoundsException |
| \`int i = 1\` as the start | index 0 is never examined |
| \`i < s.length() - len\` in a window loop | the last window is skipped |
| \`i < s.length()\` with \`substring(i, i + len)\` and \`len\` of 2 or more | throws once \`i + len\` passes the length |
| \`reversed = reversed + letter\` | copies the String instead of reversing it |
| \`letter == "a"\` | compares references, so matches can be missed |

> 🎯 **AP Connection:** When an exam question asks "which loop header avoids an exception," check the **largest** value of \`i\` the loop allows and plug it into every substring call. The end index may equal \`s.length()\` but never exceed it.
      `
    },
    {
      id: 'csastrin5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Building and Bounds** 🎯

**Segment B**
\`\`\`java
String s = "lemon";
String result = "";
for (int i = 1; i < s.length(); i += 2) {
    result = s.substring(i, i + 1) + result;
}
System.out.println(result);
\`\`\`

**Segment C**
\`\`\`java
String s = "code";
String out = "";
for (int i = 0; i <= s.length(); i++) {
    out += s.substring(i, i + 1);
}
System.out.println(out);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment B?',
            options: [
              'eo',
              'nml',
              'oe',
              'lmn'
            ],
            correctAnswer: 2,
            explanation: 'The loop visits only indices 1 and 3, the letters "e" and "o", and each letter is placed in front of the result, so "o" ends up first. Appending instead of prepending would give "eo", and starting at index 0 would visit l, m and n.'
          },
          {
            question: 'What is the result of executing Segment C?',
            options: [
              'Prints code and ends normally',
              'Prints cod and ends normally',
              'Throws an exception and prints nothing',
              'Prints code, then throws an exception'
            ],
            correctAnswer: 2,
            explanation: 'When i reaches 4, the call substring(4, 5) asks for an end index past the length of "code", which throws a StringIndexOutOfBoundsException. The println comes after the loop, so it never runs.'
          }
        ]
      }
    },
    {
      id: 'csastrin5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`countVowels("audio")\` return?

2) How many times does the loop body in \`countOccurrences\` run for \`countOccurrences("abcdefgh", "abc")\`?

3) Type the word the prepend loop from Algorithm 4 produces when \`s\` is \`"flow"\` (no quotation marks).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '6', 'wolf'],
        hint1: 'Check each letter of a, u, d, i, o against "aeiou".',
        hint2: 'Windows start at index 0 and the last one starts at s.length() - len.',
        hint3: 'Each new letter goes in front of what has been built so far.',
        explanation: '"audio" has the vowels a, u, i and o, so the count is 4. With length 8 and a target of length 3, i runs from 0 to 5, which is 6 passes. Prepending f, l, o, w one at a time builds "wolf".'
      }
    },
    {
      id: 'csastrin5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Algorithm | Loop bound | Key line |
|---|---|---|
| Examine each letter | \`i < s.length()\` | \`String letter = s.substring(i, i + 1);\` |
| Count a property | \`i < s.length()\` | \`if ("aeiou".indexOf(letter) >= 0) count++;\` |
| Count or find a substring | \`i <= s.length() - len\` | \`s.substring(i, i + len).equals(target)\` |
| Filter | \`i < s.length()\` | \`if (!current.equals(letter)) result += current;\` |
| Reverse | \`i < s.length()\` | \`reversed = letter + reversed;\` |
| Remove every copy | \`while (p >= 0)\` | \`s = s.substring(0, p) + s.substring(p + t.length());\` |

**Next:** Part 6 is AP-style practice, including two free-response style methods built from these patterns.
      `
    }
  ]
};
