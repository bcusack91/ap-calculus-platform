export const csaStringsObjectsPart4Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csastrin4-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 4 of 7 — Ordering Strings with compareTo**

---

Part 1 gave the sign table for \`compareTo\`: negative, zero, or positive. This part shows **how** Java decides which String comes first, why its order is not quite dictionary order, and how to turn compareTo into the boolean conditions that exam code uses.

### Topics in This Part

| Section |
|---------|
| The lexicographic algorithm, step by step |
| Unicode order: space, digits, uppercase, lowercase |
| Writing conditions with compareTo |
| compareTo vs equals, and common traps |

> 🔑 **Key Concept:** \`a.compareTo(b)\` behaves like "a minus b". If the result is negative, \`a\` comes first; if it is positive, \`b\` comes first; if it is 0, the Strings are identical.
      `
    },
    {
      id: 'csastrin4-algorithm',
      type: 'text' as const,
      content: `
## How compareTo Decides

To evaluate \`a.compareTo(b)\`, Java walks both Strings from index 0:

1. Compare the characters at the same index.
2. At the **first index where they differ**, the String whose character has the smaller Unicode value comes first. The result is negative if that String is \`a\`, positive if it is \`b\`.
3. If one String runs out while every character so far has matched, the **shorter String comes first** (it is a prefix of the other).
4. If both run out at the same time, the Strings are equal and the result is **0**.

### Worked Table

| Call | Deciding step | Sign | Meaning |
|---|---|---|---|
| \`"cart".compareTo("care")\` | index 3: "t" vs "e" | positive | "cart" comes after "care" |
| \`"bat".compareTo("bath")\` | "bat" runs out first | negative | a prefix comes first |
| \`"Zebra".compareTo("apple")\` | index 0: "Z" vs "a" | negative | uppercase comes before lowercase |
| \`"apple".compareTo("Apple")\` | index 0: "a" vs "A" | positive | lowercase comes after uppercase |
| \`"10".compareTo("9")\` | index 0: "1" vs "9" | negative | text order, not numeric order |
| \`"dog".compareTo("dog")\` | no difference, same length | 0 | equal |

Only the **first** difference matters. In \`"cart"\` vs \`"care"\`, nothing after index 3 is ever looked at, and the lengths do not matter because a difference was found before either String ran out.
      `
    },
    {
      id: 'csastrin4-unicode',
      type: 'text' as const,
      content: `
## Unicode Order Is Not Dictionary Order

Every character has a Unicode number. The groups you need to know come in this order:

| Group | Unicode values | Example |
|---|---|---|
| space | 32 | \`" "\` |
| digits | 48 to 57 | \`"0"\` through \`"9"\` |
| uppercase letters | 65 to 90 | \`"A"\` through \`"Z"\` |
| lowercase letters | 97 to 122 | \`"a"\` through \`"z"\` |

Consequences that show up in exam questions:

- **Every uppercase letter comes before every lowercase letter**, so \`"Zoo"\` comes before \`"ant"\`.
- **Numbers stored as text compare digit by digit.** \`"100"\` comes before \`"25"\` because "1" comes before "2". Text order and numeric order disagree here.
- **A space beats any letter or digit**, so \`"New York"\` comes before \`"Newark"\` (index 3: space vs "a").

> 💡 The AP exam does not require memorizing the Unicode numbers. Remember the order: space, digits, uppercase, lowercase.

### Only the sign counts

Java's compareTo returns a specific int (for example, the difference between the two deciding characters), but the AP exam only relies on whether it is negative, zero, or positive. Never write code such as \`a.compareTo(b) == -1\`; it can fail even when \`a\` comes first.
      `
    },
    {
      id: 'csastrin4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Which Comes First?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression evaluates to a negative value?',
            options: [
              '"plum".compareTo("pear")',
              '"grape".compareTo("Fig")',
              '"Mango".compareTo("apple")',
              '"kiwi".compareTo("kiw")'
            ],
            correctAnswer: 2,
            explanation: 'Uppercase "M" has a smaller Unicode value than lowercase "a", so "Mango" comes first and the result is negative. "plum" follows "pear" (l after e), "grape" follows "Fig" (lowercase after uppercase), and "kiwi" follows its prefix "kiw".'
          },
          {
            question: 'What is the sign of "100".compareTo("25")?',
            options: [
              'Positive',
              'Zero',
              'Negative',
              'It does not compile'
            ],
            correctAnswer: 2,
            explanation: 'compareTo compares characters, not numeric values, and the first characters differ: "1" comes before "2". The fact that 100 is greater than 25 as a number plays no part.'
          }
        ]
      }
    },
    {
      id: 'csastrin4-conditions',
      type: 'text' as const,
      content: `
## Writing Conditions with compareTo

Read \`a.compareTo(b)\` as "a minus b" and the condition almost writes itself:

| You want to test | Write |
|---|---|
| \`a\` comes before \`b\` | \`a.compareTo(b) < 0\` |
| \`a\` comes after \`b\` | \`a.compareTo(b) > 0\` |
| \`a\` and \`b\` are the same text | \`a.compareTo(b) == 0\` or \`a.equals(b)\` |
| \`a\` comes before \`b\` or matches it | \`a.compareTo(b) <= 0\` |

Swapping the two Strings flips the sign: if \`a.compareTo(b)\` is negative, then \`b.compareTo(a)\` is positive.

### Worked Example 1 — Are three words in order?

\`\`\`java
String w1 = "ant";
String w2 = "Bee";
String w3 = "cat";
boolean ordered = w1.compareTo(w2) <= 0 && w2.compareTo(w3) <= 0;
System.out.println(ordered);
\`\`\`

| Step | Comparison | Sign | Clause |
|---|---|---|---|
| 1 | \`"ant".compareTo("Bee")\`: "a" vs "B" | positive | false |
| 2 | short-circuit: \`&&\` stops | — | — |

Output: \`false\`. A dictionary lists ant, Bee, cat in order, but Java puts uppercase "B" before lowercase "a", so "Bee" comes before "ant".

### Worked Example 2 — Keep the earlier name

\`\`\`java
String a = "Ramirez";
String b = "Ramos";
String first = a;
if (b.compareTo(a) < 0) {
    first = b;
}
System.out.println(first);
\`\`\`

The Strings match through "Ram". At index 3, "o" (from "Ramos") vs "i" (from "Ramirez"): "o" comes later, so \`b.compareTo(a)\` is positive and \`first\` stays \`"Ramirez"\`. Output: \`Ramirez\`. Length played no part, because a difference appeared at index 3.
      `
    },
    {
      id: 'csastrin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sign of the Result** 🔍

Choose the sign of each call.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Apple".compareTo("apple") is ___',
            options: ['negative', 'positive', 'zero', 'a compile error']
          },
          {
            label: '"top".compareTo("to") is ___',
            options: ['negative', 'positive', 'zero', 'a compile error']
          },
          {
            label: '"x9".compareTo("x10") is ___',
            options: ['negative', 'positive', 'zero', 'a compile error']
          }
        ],
        correctAnswers: ['negative', 'positive', 'positive'],
        hint1: 'Compare the first letters: uppercase vs lowercase.',
        hint2: 'One String is a prefix of the other. Which one comes first?',
        hint3: 'The first characters match. Compare "9" with "1".',
        explanation: '"A" comes before "a", so the first call is negative. "to" is a prefix of "top", so "top" comes after it and the result is positive. At index 1, "9" comes after "1", so "x9" comes after "x10" and the result is positive.'
      }
    },
    {
      id: 'csastrin4-traps',
      type: 'text' as const,
      content: `
## compareTo vs equals, and Common Traps

| Point | Detail |
|---|---|
| Return types | compareTo returns an **int**; equals returns a **boolean**. \`if (a.compareTo(b))\` does not compile. |
| Agreement | For Strings, \`a.compareTo(b) == 0\` is true exactly when \`a.equals(b)\` is true. |
| Case | Both are case-sensitive: \`"Cat".equals("cat")\` is false and their compareTo is not 0. |
| Exact values | Test only the sign: \`< 0\`, \`> 0\`, \`== 0\`. |
| null argument | \`a.compareTo(null)\` throws a NullPointerException. |

> 🎯 **AP Connection:** compareTo is how String data gets sorted and searched later in the course, when you work with arrays and lists of Strings. Those algorithms use the same three conditions from the table above.
      `
    },
    {
      id: 'csastrin4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Conditions with compareTo** 🎯

\`\`\`java
String s1 = "Kite";
String s2 = "kit";
String s3 = "kite";
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression evaluates to true?',
            options: [
              's3.compareTo(s2) < 0',
              's1.equals(s3)',
              's1.compareTo(s2) < 0',
              's2.compareTo(s3) > 0'
            ],
            correctAnswer: 2,
            explanation: 'Uppercase "K" comes before lowercase "k", so "Kite" comes before "kit" and the result is negative. "kit" is a prefix of "kite", so "kite" comes after "kit" (not before), and equals is case-sensitive, so "Kite" and "kite" are not equal.'
          },
          {
            question: 'Assume word is a non-null String. Which condition is true exactly when word comes before "m" in Java String order?',
            options: [
              '"m".compareTo(word) < 0',
              'word.compareTo("m") == -1',
              'word.compareTo("m") > 0',
              'word.compareTo("m") < 0'
            ],
            correctAnswer: 3,
            explanation: 'word.compareTo("m") is negative exactly when word comes first. Testing for -1 relies on an exact value that compareTo does not promise, and the other two conditions test for word coming after "m".'
          }
        ]
      }
    },
    {
      id: 'csastrin4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Rule | Example |
|---|---|
| First difference decides | \`"cart"\` after \`"care"\` |
| Prefix comes first | \`"bat"\` before \`"bath"\` |
| Space, digits, uppercase, lowercase | \`"Zoo"\` before \`"ant"\`; \`"100"\` before \`"25"\` |
| "a before b" | \`a.compareTo(b) < 0\` |
| Equal text | \`a.compareTo(b) == 0\`, same as \`a.equals(b)\` |
| Sign only | never test for \`== -1\` or \`== 1\` |

**Next:** Part 5 puts these tools inside loops to count, filter, reverse, and search Strings one piece at a time.
      `
    }
  ]
};
