export const csaConditionalsPart5Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csacondi5-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 5 of 7 — Comparing Objects: Aliases, null, and equals**

---

CED Topic 2.6 also covers comparing **objects**. For object variables, \`==\` and \`!=\` compare references: they ask whether two variables refer to the **same object**. To ask whether two objects hold the same data, use a method such as \`equals\`.

| In this part |
|---|
| Aliases and reference comparison |
| String equality, built at run time |
| Comparing with null safely |
| Comparing objects of other classes |
      `
    },
    {
      id: 'csacondi5-aliases',
      type: 'text' as const,
      content: `
## Aliases

Assume a class \`Point\` with a constructor \`Point(int x, int y)\` and methods \`getX()\` and \`getY()\`.

\`\`\`java
Point p = new Point(2, 3);
Point q = new Point(2, 3);
Point r = p;
\`\`\`

Two \`new\` calls create two separate objects. The assignment \`r = p\` copies the **reference**, so \`r\` and \`p\` refer to the same object. Two variables that refer to the same object are **aliases**.

| Expression | Value | Reason |
|---|---|---|
| \`p == q\` | \`false\` | two different objects, even with equal data |
| \`p == r\` | \`true\` | aliases of one object |
| \`p != q\` | \`true\` | different references |
| \`p.getX() == q.getX()\` | \`true\` | compares two int values, 2 and 2 |

## Strings: == vs. equals

\`\`\`java
String a = "cat";
String b = new String("cat");
String c = a;
String d = "ca";
d += "t";
\`\`\`

| Expression | Value | Reason |
|---|---|---|
| \`a.equals(b)\` | \`true\` | same characters |
| \`a == b\` | \`false\` | \`new\` always creates a separate object |
| \`a == c\` | \`true\` | aliases |
| \`d.equals(a)\` | \`true\` | same characters |
| \`d == a\` | \`false\` | \`+=\` builds a new String object at run time |

> 🔑 Use \`equals\` to compare String content, every time. Whether \`==\` happens to be true depends on how each String was created, which is exactly why it is unreliable.
      `
    },
    {
      id: 'csacondi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
String s1 = "java";
String s2 = new String("java");
String s3 = s1;
String s4 = "ja";
s4 += "va";
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'After Segment A, which expression is false?',
            options: [
              's1 == s2',
              's1.equals(s2)',
              's3.equals(s1)',
              's4.equals(s3)'
            ],
            correctAnswer: 0,
            explanation: 's2 was made with new, so it is a separate object from s1 and == compares false. The equals calls compare characters, which match, and s3 is an alias of s1.'
          },
          {
            question: 'After Segment A, how many different String objects do s1, s2, s3 and s4 refer to?',
            options: [
              '3',
              '4',
              '2',
              '1'
            ],
            correctAnswer: 0,
            explanation: 's1 and s3 share one object, s2 is a second object, and s4 refers to a third object built by the concatenation. Four variables, but only three objects.'
          }
        ]
      }
    },
    {
      id: 'csacondi5-null',
      type: 'text' as const,
      content: `
## Comparing with null

A reference variable that refers to no object holds \`null\`. You can compare any reference with \`null\` using \`==\` or \`!=\`, but you cannot call a method through a null reference.

\`\`\`java
String name = null;
\`\`\`

| Expression | Result |
|---|---|
| \`name == null\` | \`true\` |
| \`name.equals("Ann")\` | throws a \`NullPointerException\` |
| \`"Ann".equals(name)\` | \`false\`, with no exception |
| \`name != null && name.equals("Ann")\` | \`false\`; short-circuiting skips the call |

Calling \`equals\` on a non-null object with a \`null\` argument simply returns \`false\`.

## Comparing Objects of Other Classes

\`String\` has its own \`equals\` method that compares characters. Many classes provide an \`equals\` method that decides when two of their objects count as equivalent, and its documentation says what it compares.

If a class like \`Point\` has no such method, compare the data yourself:

\`\`\`java
boolean samePlace = p.getX() == q.getX() && p.getY() == q.getY();
\`\`\`

## Common Errors

| Code | Problem |
|---|---|
| \`if (word == "yes")\` | compares references; use \`word.equals("yes")\` |
| \`if (word.equals("yes"))\` when \`word\` might be null | can throw; check \`word != null\` first or write \`"yes".equals(word)\` |
| \`if (p == q)\` to test equal coordinates | true only for aliases |
      `
    },
    {
      id: 'csacondi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Safe Comparisons** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Assume String t = null;. Which statement throws a NullPointerException?',
            options: [
              'boolean b = t.equals("x");',
              'boolean b = "x".equals(t);',
              'boolean b = t == null;',
              'boolean b = t != null && t.equals("x");'
            ],
            correctAnswer: 0,
            explanation: 'Calling equals through a null reference throws the exception. Calling it on the literal "x" with a null argument returns false, comparing with == is always safe, and the && skips the call when t is null.'
          },
          {
            question: 'Point p = new Point(1, 2); Point q = p; q = new Point(1, 2); After these statements, which expression is true?',
            options: [
              'p != q',
              'q == p && p != null',
              'p.getX() != q.getX()',
              'p.getY() != q.getY()'
            ],
            correctAnswer: 0,
            explanation: 'q briefly referred to the same object as p, but the last assignment gave q a new, separate object. The two objects hold the same data, so the getX and getY comparisons with != are false.'
          }
        ]
      }
    },
    {
      id: 'csacondi5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Reference or Content?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For object variables, == checks whether the two variables ___',
            options: ['refer to the same object', 'hold the same characters', 'have the same length', 'belong to the same class']
          },
          {
            label: 'After String a = "hi"; String b = a;, the variables a and b are ___',
            options: ['aliases', 'copies', 'null', 'constants']
          },
          {
            label: 'The safest way to test whether a possibly null String s holds "go" is ___',
            options: ['"go".equals(s)', 's.equals("go")', 's == "go"', 's.length() == 2']
          }
        ],
        correctAnswers: ['refer to the same object', 'aliases', '"go".equals(s)'],
        hint1: '== on references compares addresses, not data.',
        hint2: 'b was assigned the reference stored in a.',
        hint3: 'Call the method on the object that can never be null.',
        explanation: 'Reference comparison checks for the same object. Copying a reference makes an alias, not a copy of the object. Calling equals on the literal never throws, even when s is null.'
      }
    },
    {
      id: 'csacondi5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Question | Tool |
|---|---|
| Same object? | \`==\` or \`!=\` on the references |
| Same String content? | \`equals\` |
| Does it refer to an object at all? | \`== null\` or \`!= null\` |
| Safe call on a possibly null String | \`s != null && s.equals(t)\`, or \`"literal".equals(s)\` |
| Same data in a class without \`equals\` | Compare the values returned by its accessor methods |

> 🎯 **AP Connection:** In a free-response answer, comparing Strings with \`==\` instead of \`equals\` is a standard deduction, even when the output happens to be right for the given test.
      `
    }
  ]
}
