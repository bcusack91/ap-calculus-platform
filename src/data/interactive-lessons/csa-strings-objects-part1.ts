export const csaStringsObjectsPart1Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csaso1-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 1 of 7 — String Methods, Immutability, and Object Basics**

---

## String Methods (AP Subset)

| Method | Return Type | Description | Example |
|--------|-----------|-----------|---------|
| \`length()\` | int | Number of characters | \`"hello".length()\` → \`5\` |
| \`substring(start)\` | String | From start to end | \`"hello".substring(2)\` → \`"llo"\` |
| \`substring(start, end)\` | String | From start to end-1 | \`"hello".substring(1,4)\` → \`"ell"\` |
| \`indexOf(str)\` | int | First occurrence (-1 if not found) | \`"hello".indexOf("ll")\` → \`2\` |
| \`equals(str)\` | boolean | Content comparison | \`"hi".equals("hi")\` → \`true\` |
| \`compareTo(str)\` | int | Lexicographic: neg, 0, or pos | \`"apple".compareTo("banana")\` → negative |

> 🔑 **Strings are immutable** — once created, their content cannot be changed. Methods like \`substring()\` return a NEW String; the original is unchanged.

---

## String Indexing

\`\`\`
Index:   0  1  2  3  4
String: "h  e  l  l  o"
\`\`\`

- First character is at index **0** (zero-based)
- Last character is at index **length() - 1**
- \`substring(a, b)\` includes index \`a\` but EXCLUDES index \`b\`
      `
    },
    {
      id: 'csaso1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "computer".substring(3, 6) return?',
            options: [
              '"put"',
              '"pute"',
              '"mpu"',
              '"comp"'
            ],
            correctAnswer: 0,
            explanation: '"computer" indices: c(0) o(1) m(2) p(3) u(4) t(5) e(6) r(7). substring(3, 6) takes indices 3, 4, 5 = "put" (start inclusive, end exclusive).'
          },
          {
            question: 'What does "hello".indexOf("lo") return?',
            options: [
              '2',
              '3',
              '4',
              '-1'
            ],
            correctAnswer: 1,
            explanation: '"hello" — "lo" starts at index 3 (h=0, e=1, l=2, l=3, o=4). indexOf returns the index of the first character of the found substring.'
          }
        ]
      }
    },
    {
      id: 'csaso1-content',
      type: 'text' as const,
      content: `
## String Immutability

\`\`\`java
String s = "hello";
s.toUpperCase();          // Returns "HELLO" but s is still "hello"!
s = s.toUpperCase();      // Now s = "HELLO" (reassigned to new String)
\`\`\`

## compareTo() Details

| Return Value | Meaning |
|-------------|---------|
| **Negative** | Calling string comes before parameter alphabetically |
| **0** | Strings are equal |
| **Positive** | Calling string comes after parameter alphabetically |

\`\`\`java
"apple".compareTo("banana")  // Negative (a < b)
"cat".compareTo("cat")       // 0 (equal)
"dog".compareTo("cat")       // Positive (d > c)
\`\`\`

## Escape Sequences

| Sequence | Meaning |
|----------|---------|
| \`\\\\\` | Backslash |
| \`\\"\` | Double quote inside a String |
| \`\\n\` | Newline |
| \`\\t\` | Tab |
      `
    },
    {
      id: 'csaso1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) String indexing in Java starts at _______ (not 1).

2) Strings in Java are _______, meaning their content cannot be changed after creation.

3) The method _______ is used to compare the content of two String objects (not ==).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', 'immutable', '.equals()'],
        hint1: 'Zero-based indexing.',
        hint2: 'Once created, the characters in a String cannot be modified.',
        hint3: 'A method that returns true if the Strings have the same characters.',
        explanation: 'Java uses 0-based indexing. Strings are immutable. Use .equals() for content comparison.'
      }
    },
    {
      id: 'csaso1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Call** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"programming".substring(0, 4) returns ___',
            options: ['"prog"', '"program"', '"pro"', '"progr"']
          },
          {
            label: '"java".compareTo("python") returns a value that is ___',
            options: ['Negative (j comes before p)', 'Positive (j comes after p)', 'Zero (they are equal)', 'A compile error']
          },
          {
            label: '"test".indexOf("xyz") returns ___',
            options: ['-1 (not found)', '0', '4', 'An exception']
          }
        ],
        correctAnswers: ['"prog"', 'Negative (j comes before p)', '-1 (not found)'],
        hint1: 'Indices 0,1,2,3 — p,r,o,g.',
        hint2: 'j (106) is less than p (112) in Unicode.',
        hint3: 'indexOf returns -1 when the substring is not found.',
        explanation: 'substring(0,4) = "prog". "java" < "python" → negative. "xyz" not in "test" → -1.'
      }
    },
    {
      id: 'csaso1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Strings

- **substring(a, b)** includes index a but EXCLUDES index b — practice counting characters
- **indexOf()** returns -1 if not found — check for this in conditional code
- Remember: Strings are immutable! Always capture the return value: \`s = s.substring(1);\`
- **== for Strings is WRONG** — always use \`.equals()\` on the AP exam
- compareTo returns negative/zero/positive — you do not need to know the exact number
- Practice tracing String manipulations character by character using index numbers
      `
    },
    {
      id: 'csaso1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of s after this code?\nString s = "abcdef";\ns = s.substring(0, 2) + s.substring(4);',
            options: [
              '"abef"',
              '"abcdef"',
              '"cdef"',
              '"abcf"'
            ],
            correctAnswer: 0,
            explanation: 's.substring(0, 2) = "ab". s.substring(4) = "ef". Concatenation: "ab" + "ef" = "abef". This effectively removes characters at indices 2 and 3.'
          },
          {
            question: 'What does this method return for mystery("racecar")?\npublic String mystery(String s) {\n    String result = "";\n    for (int i = s.length() - 1; i >= 0; i--) {\n        result += s.substring(i, i + 1);\n    }\n    return result;\n}',
            options: [
              '"racecar"',
              '"raceca"',
              '"r"',
              '"racecar " (with trailing space)'
            ],
            correctAnswer: 0,
            explanation: 'The method builds the string in reverse order. It takes each character from right to left: r,a,c,e,c,a,r → "racecar". Since "racecar" is a palindrome, the reverse is the same.'
          }
        ]
      }
    }
  ]
};
