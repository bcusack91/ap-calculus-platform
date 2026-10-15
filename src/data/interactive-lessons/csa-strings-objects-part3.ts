export const csaStringsObjectsPart3Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csastrin3-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 3 of 7 — Extracting Pieces with substring and indexOf**

---

Most String questions on the AP exam boil down to one job: find a position with \`indexOf\`, then cut out a piece with \`substring\`. This part turns that job into recipes you can use without recounting every time.

### Topics in This Part

| Section |
|---------|
| Substring recipes: first, last, and one-character pieces |
| Worked examples: splitting at a delimiter, email parts, replacing a word |
| Guarding against indexOf returning -1 |
| The bounds rule and StringIndexOutOfBoundsException |

> 🔑 **Key Concept:** \`substring(a, b)\` returns the characters at indices \`a\` through \`b - 1\`, so the piece always has exactly **b - a** characters.
      `
    },
    {
      id: 'csastrin3-recipes',
      type: 'text' as const,
      content: `
## Substring Recipes

Write the indices under the String before you do anything else:

\`\`\`
Index:   0  1  2  3  4  5
s:       p  l  a  n  e  t        s.length() is 6
\`\`\`

| Goal | Expression | Result for "planet" |
|---|---|---|
| First character | \`s.substring(0, 1)\` | \`"p"\` |
| Last character | \`s.substring(s.length() - 1)\` | \`"t"\` |
| Character at index i (here i = 2) | \`s.substring(i, i + 1)\` | \`"a"\` |
| First n characters (n = 3) | \`s.substring(0, n)\` | \`"pla"\` |
| Last n characters (n = 3) | \`s.substring(s.length() - n)\` | \`"net"\` |
| Everything after the first character | \`s.substring(1)\` | \`"lanet"\` |
| Everything except the last character | \`s.substring(0, s.length() - 1)\` | \`"plane"\` |

### The length rule

\`s.substring(a, b)\` has \`b - a\` characters. \`"planet".substring(1, 4)\` has 4 - 1 = 3 characters: \`"lan"\`. Use the rule to check your answer: if you counted 4 letters for \`substring(1, 4)\`, you included the end index by mistake.

> 💡 A one-character piece such as \`s.substring(i, i + 1)\` is still a **String**, so test it with equals: \`s.substring(0, 1).equals("p")\`.
      `
    },
    {
      id: 'csastrin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Recipe Check** 🎯

\`\`\`java
String w = "keyboard";
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression evaluates to the String made of the last two characters of w?',
            options: [
              'w.substring(w.length() - 1)',
              'w.substring(6, 7)',
              'w.substring(6)',
              'w.substring(w.length() - 3)'
            ],
            correctAnswer: 2,
            explanation: 'w has length 8, so the last two characters are at indices 6 and 7, and substring(6) runs from index 6 to the end, giving "rd". Starting at length() - 1 gives only "d", substring(6, 7) stops before index 7, and length() - 3 gives three characters.'
          },
          {
            question: 'How many characters are in w.substring(2, 7)?',
            options: [
              '6',
              '4',
              '7',
              '5'
            ],
            correctAnswer: 3,
            explanation: 'A substring from a to b has b - a characters, and 7 - 2 = 5 ("yboar"). Six would include the end index, which substring excludes.'
          }
        ]
      }
    },
    {
      id: 'csastrin3-worked',
      type: 'text' as const,
      content: `
## Worked Examples: Find, Then Cut

### Example 1 — Split "Last, First"

\`\`\`java
String full = "Lovelace, Ada";
int comma = full.indexOf(",");               // 8
String last = full.substring(0, comma);      // "Lovelace"
String first = full.substring(comma + 2);    // "Ada"
System.out.println(first + " " + last);      // Ada Lovelace
\`\`\`

\`\`\`
Index:  0 1 2 3 4 5 6 7 8 9 10 11 12
full:   L o v e l a c e ,   A  d  a
\`\`\`

- \`substring(0, comma)\` stops **before** the comma, so the comma is not included.
- \`comma + 2\` skips both the comma (index 8) and the space (index 9). Using \`comma + 1\` would give \`" Ada"\` with a leading space.

### Example 2 — The parts of an email address

\`\`\`java
String email = "grace@navy.mil";
int at = email.indexOf("@");                 // 5
String user = email.substring(0, at);        // "grace"
String domain = email.substring(at + 1);     // "navy.mil"
int dot = domain.indexOf(".");               // 4 (an index inside domain)
String ending = domain.substring(dot + 1);   // "mil"
\`\`\`

Notice that \`dot\` is an index **in \`domain\`**, not in \`email\`. Each indexOf result only makes sense for the String it was called on.

### Example 3 — Replace the first occurrence of a word

\`\`\`java
String s = "the cat sat";
String t = "cat";
int p = s.indexOf(t);                                          // 4
s = s.substring(0, p) + "dog" + s.substring(p + t.length());   // "the dog sat"
\`\`\`

The pattern is **before + new + after**. \`s.substring(0, p)\` is \`"the "\`, and \`s.substring(p + t.length())\` starts right after the old word: index 4 + 3 = 7, giving \`" sat"\`. Writing \`t.length()\` instead of the number 3 keeps the code correct for any word.
      `
    },
    {
      id: 'csastrin3-guard',
      type: 'text' as const,
      content: `
## Guarding Against -1

\`indexOf\` never throws an exception. When the target is missing it returns **-1**, and that -1 causes trouble one line later:

\`\`\`java
String code = "AB1234";               // no dash this time
int dash = code.indexOf("-");         // -1
String prefix = code.substring(0, dash);   // substring(0, -1): exception!
\`\`\`

The fix is to check the result before cutting (selection statements are covered in Unit 2, and this guard is one of their most common uses):

\`\`\`java
String prefix = code;                 // default: keep the whole code
int dash = code.indexOf("-");
if (dash >= 0) {
    prefix = code.substring(0, dash);
}
\`\`\`

| \`code\` | \`dash\` | \`prefix\` |
|---|---|---|
| \`"AB-1234"\` | 2 | \`"AB"\` |
| \`"AB1234"\` | -1 | \`"AB1234"\` |
| \`"-99"\` | 0 | \`""\` |

The last row is legal: \`substring(0, 0)\` is the empty String.
      `
    },
    {
      id: 'csastrin3-bounds',
      type: 'text' as const,
      content: `
## The Bounds Rule

\`s.substring(a, b)\` runs only when **0 <= a <= b <= s.length()**. \`s.substring(a)\` runs only when **0 <= a <= s.length()**. Anything else compiles but throws a **StringIndexOutOfBoundsException** when the line executes.

For \`s = "java"\` (length 4):

| Call | Result | Reason |
|---|---|---|
| \`s.substring(4)\` | \`""\` | start may equal the length; nothing is left |
| \`s.substring(2, 2)\` | \`""\` | equal start and end give the empty String |
| \`s.substring(0, 4)\` | \`"java"\` | end may equal the length |
| \`s.substring(0, 5)\` | exception | end is past the length |
| \`s.substring(3, 2)\` | exception | start is after end |
| \`s.substring(-1)\` | exception | negative start |
| \`s.substring(s.indexOf("x"))\` | exception | indexOf gave -1 |

> 🎯 **AP Connection:** The length itself is a legal end index but never a legal single-character index. \`s.substring(s.length())\` is \`""\`, while \`s.substring(s.length(), s.length() + 1)\` throws. Watch for that difference in loop bounds in Part 5.
      `
    },
    {
      id: 'csastrin3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

\`\`\`java
String s = "stadium";
\`\`\`

1) What does \`s.indexOf("dium")\` return?

2) What is \`s.substring(s.indexOf("a") + 1).length()\`?

3) What is the largest int \`k\` for which \`s.substring(k)\` runs without an exception?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '4', '7'],
        hint1: 'Number the letters s, t, a, d starting from 0.',
        hint2: 'Find the index of "a" first, add 1, then count what is left to the end.',
        hint3: 'The start index may equal the length of the String.',
        explanation: '"dium" begins at index 3. indexOf("a") is 2, so substring(3) is "dium" with 4 characters. s has length 7, and substring(7) returns the empty String, so 7 is the largest legal start.'
      }
    },
    {
      id: 'csastrin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Find and Cut** 🎯

**Segment A**
\`\`\`java
String s = "sunflower";
int p = s.indexOf("flow");
System.out.println(s.substring(0, p) + s.substring(p + 4));
\`\`\`

**Segment B**
\`\`\`java
String t = "data";
int q = t.indexOf("z");
System.out.println(t.substring(q + 1));
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              'sunwer',
              'suner',
              'sunfer',
              'sunr'
            ],
            correctAnswer: 1,
            explanation: 'p is 3, so the code joins s.substring(0, 3), which is "sun", with s.substring(7), which is "er", removing the four letters of "flow". Results like "sunwer" or "sunr" come from skipping 3 or 5 characters instead of 4.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              'ata',
              'data',
              'Nothing (an empty line)',
              'StringIndexOutOfBoundsException'
            ],
            correctAnswer: 1,
            explanation: 'indexOf returns -1 when "z" is missing, so q + 1 is 0 and substring(0) is the whole String "data". No exception occurs because index 0 is in bounds.'
          },
          {
            question: 'If s is "code", which call throws a StringIndexOutOfBoundsException?',
            options: [
              's.substring(4, 4)',
              's.substring(5)',
              's.substring(0, 4)',
              's.substring(2, 3)'
            ],
            correctAnswer: 1,
            explanation: 'A start index may be at most the length, 4, so substring(5) throws. substring(4, 4) is the empty String and substring(0, 4) is the whole word, because the length is a legal end index.'
          }
        ]
      }
    },
    {
      id: 'csastrin3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Task | Pattern |
|---|---|
| Character at i | \`s.substring(i, i + 1)\` |
| Last character | \`s.substring(s.length() - 1)\` |
| Text before a marker | \`s.substring(0, s.indexOf(marker))\` |
| Text after a one-character marker | \`s.substring(s.indexOf(marker) + 1)\` |
| Replace first occurrence | \`before + new + after\` using \`p + t.length()\` |
| Missing marker | indexOf gives -1; check \`>= 0\` before cutting |
| Legal call | \`0 <= a <= b <= s.length()\` |

**Next:** Part 4 compares whole Strings with compareTo and explains why Java puts "Zebra" before "apple".
      `
    }
  ]
};
