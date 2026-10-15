export const csaStringsObjectsPart7Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csastrin7-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: what a String object is, how the five Quick Reference methods behave, and how they combine inside loops. Use the tables as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| String objects (Part 2) | a variable holds a reference; create with a literal or \`new String(...)\` | treating \`""\` and \`null\` as the same |
| Immutability (Parts 1, 2) | methods return new Strings; reassign to keep the result | \`s.substring(1);\` on its own line changes nothing |
| Concatenation (Part 2) | left to right; once a String appears, + joins text | \`1 + 2 + "x"\` is \`"3x"\`, but \`"x" + 1 + 2\` is \`"x12"\` |
| Equality (Part 2) | \`equals\` compares characters; \`==\` compares references | == on Strings built by substring or + |
| substring (Parts 1, 3) | characters \`a\` to \`b - 1\`; length \`b - a\`; legal when \`0 <= a <= b <= length\` | counting the end index as included |
| indexOf (Parts 1, 3) | first index of the target, or -1 | passing -1 into substring |
| compareTo (Parts 1, 4) | sign only; first difference decides; prefix first | uppercase before lowercase; \`"10"\` before \`"9"\` |
| Traversal (Part 5) | \`i < s.length()\` with \`substring(i, i + 1)\` | \`i <= s.length()\` throws on the last pass |
| Windows (Part 5) | \`i <= s.length() - len\` with \`substring(i, i + len)\` | a strict \`<\` skips the last window |

> 🔑 **Key Concept:** Nearly every String question reduces to three skills: number the indices, decide whether each operation compares or builds, and check every substring call against the bounds rule.
      `
    },
    {
      id: 'csastrin7-checklist',
      type: 'text' as const,
      content: `
## A Tracing Checklist

1. **Number the indices** under each String, starting at 0. Note the length.
2. **For each indexOf**, record the index, or -1 if the target is missing. Remember which String the index belongs to.
3. **For each substring**, write \`a\` and \`b\`, confirm \`0 <= a <= b <= length\`, and count \`b - a\` characters.
4. **For each +**, decide whether it adds or concatenates, working left to right.
5. **For each comparison**, ask: contents (equals, compareTo) or references (==)?
6. **For each loop**, build a trace table with \`i\`, the piece examined, and the accumulator, and check the last value of \`i\`.

### Worked Example: Putting It Together

\`\`\`java
String s = "data-science";
int dash = s.indexOf("-");
String left = s.substring(0, dash);
String right = s.substring(dash + 1);
String initials = left.substring(0, 1) + right.substring(0, 1);
System.out.println(initials + left.compareTo(right));
\`\`\`

| Step | Value |
|---|---|
| \`dash\` | 4 ("d a t a" occupy indices 0 to 3) |
| \`left\` | \`"data"\` |
| \`right\` | \`"science"\` |
| \`initials\` | \`"d" + "s"\` = \`"ds"\` |
| \`left.compareTo(right)\` | "d" vs "s": negative |

The program prints \`ds\` followed by some negative number. Because the exact value is not something the AP exam asks you to predict, a well-written question would print \`initials + (left.compareTo(right) < 0)\` instead, which gives \`dstrue\`. The parentheses matter: without them, Java would try to compare a String with 0 and the line would not compile.
      `
    },
    {
      id: 'csastrin7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

**Segment A**
\`\`\`java
String s = "Programming";
int a = s.indexOf("g");
int b = s.indexOf("m");
System.out.println(s.substring(a, b) + (b - a));
\`\`\`

**Segment B**
\`\`\`java
String s = "planet";
s.substring(2);
s += "s";
System.out.println(s);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              'gram3',
              'ra3',
              'gram4',
              'gra3'
            ],
            correctAnswer: 3,
            explanation: 'The first "g" is at index 3 and the first "m" is at index 6, so substring(3, 6) is "gra" and the parenthesized subtraction gives 3. Including index 6 would add the "m" and give "gram".'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              'anets',
              'planet',
              'planets',
              'anet'
            ],
            correctAnswer: 2,
            explanation: 'The result of s.substring(2) is never stored, so s is still "planet". The += then builds "planets" and reassigns s to it.'
          }
        ]
      }
    },
    {
      id: 'csastrin7-errors',
      type: 'text' as const,
      content: `
## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| StringIndexOutOfBoundsException | a substring index is negative, past the length, or start is after end; often a -1 from indexOf | check the bounds rule; guard indexOf results with \`>= 0\` |
| NullPointerException | a method was called on a String variable holding null | make sure the variable refers to an object first |
| A comparison is false although the text matches | \`==\` was used | use \`equals\` |
| The String "did not change" | the return value of a method was not stored | write \`s = s.substring(...)\` |
| Unexpected order, such as \`"Zoo"\` before \`"ant"\` | Unicode order: uppercase before lowercase | expected behavior of compareTo |
| A count is one too low | the window loop stops before the last window | use \`i <= s.length() - len\` |
| The result is the original String, not the reverse | appended instead of prepended | \`reversed = letter + reversed\` |
| The result starts with "null" | the accumulator started as null | start the accumulator at \`""\` |

> 🎯 **AP Connection:** If a trace seems to need an impossible index, look for an exception among the answer choices before assuming you made an arithmetic slip.
      `
    },
    {
      id: 'csastrin7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Hello, World".indexOf("o") returns ___',
            options: ['4', '8', '5', '-1']
          },
          {
            label: '("ab" + 3 + 4).length() returns ___',
            options: ['3', '4', '5', '6']
          },
          {
            label: '"Zoo".compareTo("ant") is ___',
            options: ['negative', 'positive', 'zero', 'a compile error']
          }
        ],
        correctAnswers: ['4', '4', 'negative'],
        hint1: 'indexOf reports the first match only. Count from H at index 0.',
        hint2: 'Once "ab" starts the expression, both numbers are joined as text.',
        hint3: 'Compare an uppercase letter with a lowercase one.',
        explanation: 'The first "o" in "Hello, World" is at index 4. "ab" + 3 + 4 is "ab34", which has 4 characters. Uppercase "Z" comes before lowercase "a", so the result is negative.'
      }
    },
    {
      id: 'csastrin7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯

**Segment C**
\`\`\`java
String s = "a1b22c333";
String letters = "";
int digits = 0;
for (int i = 0; i < s.length(); i++) {
    String piece = s.substring(i, i + 1);
    if ("0123456789".indexOf(piece) >= 0) {
        digits++;
    } else {
        letters += piece;
    }
}
System.out.println(letters + digits);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment C?',
            options: [
              'abc9',
              'abc6',
              'abc14',
              '6abc'
            ],
            correctAnswer: 1,
            explanation: 'Six of the nine one-character pieces are found in "0123456789", so digits ends at 6, and the other three build "abc". The count tallies digit characters, not their values, which would sum to 14.'
          },
          {
            question: 'Assume s is a non-empty String. Which expression is true exactly when s begins with the letter "a"?',
            options: [
              's.indexOf("a") >= 0',
              's.substring(0, 1).equals("a")',
              's.substring(0, 1) == "a"',
              's.substring(0, 2).equals("a")'
            ],
            correctAnswer: 1,
            explanation: 'substring(0, 1) is the first character, and equals compares its contents with "a". Using == compares references and is unreliable, substring(0, 2) holds two characters so it can never equal "a", and indexOf finds an "a" anywhere in s.'
          }
        ]
      }
    },
    {
      id: 'csastrin7-wrapup',
      type: 'text' as const,
      content: `
## Where Strings Go Next

- **Selection and iteration (Unit 2):** the traversal patterns from Part 5 are the standard String algorithms of the course: counting, filtering, reversing, and finding substrings with a property.
- **Writing classes:** a class you write can define \`toString\`, and Java calls it automatically whenever an object of that class is concatenated with a String.
- **Data collections:** arrays and lists of Strings are searched with equals and ordered with compareTo, using exactly the conditions from Part 4.

### Final Self-Check

- Can you explain why \`new String("hi") == new String("hi")\` is false?
- Can you write the expression for the last three characters of any String of length 3 or more?
- Can you state the bounds rule for \`substring(a, b)\` from memory?
- Can you predict the sign of \`"Mars".compareTo("mars")\`?
- Can you write a loop that counts how many times \`"the"\` appears in a sentence, overlaps included?

If any answer is shaky, revisit the part listed beside that idea in the table at the top of this review.
      `
    }
  ]
};
