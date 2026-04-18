export const csaBooleanIfPart1Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csabi1-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 1 of 7 — Comparisons, Logical Operators, and Conditional Logic**

---

## Comparison Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| \`==\` | Equal to | \`5 == 5\` | \`true\` |
| \`!=\` | Not equal to | \`5 != 3\` | \`true\` |
| \`<\` | Less than | \`3 < 7\` | \`true\` |
| \`>\` | Greater than | \`7 > 3\` | \`true\` |
| \`<=\` | Less than or equal | \`5 <= 5\` | \`true\` |
| \`>=\` | Greater than or equal | \`8 >= 10\` | \`false\` |

> 🔑 **== vs .equals():** Use \`==\` for primitives (int, double, boolean). Use \`.equals()\` for objects like Strings. \`==\` on objects compares **references**, not content!

---

## Logical Operators

| Operator | Name | Behavior | Example |
|----------|------|----------|---------|
| \`&&\` | AND | Both must be true | \`age >= 16 && hasLicense\` |
| \`\|\|\` | OR | At least one must be true | \`day == 6 \|\| day == 7\` |
| \`!\` | NOT | Flips true/false | \`!isRaining\` |

### Short-Circuit Evaluation
- \`&&\`: If the left side is \`false\`, the right side is NOT evaluated
- \`||\`: If the left side is \`true\`, the right side is NOT evaluated
      `
    },
    {
      id: 'csabi1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of: !(5 > 3 && 2 > 4)',
            options: [
              'true',
              'false',
              'Compile error',
              'null'
            ],
            correctAnswer: 0,
            explanation: '5 > 3 is true. 2 > 4 is false. true && false = false. !(false) = true.'
          },
          {
            question: 'String s1 = "hello"; String s2 = "hello"; What does s1 == s2 check?',
            options: [
              'Whether the contents of s1 and s2 are the same',
              'Whether s1 and s2 refer to the same object in memory',
              'Whether s1 is longer than s2',
              'Whether s1 comes before s2 alphabetically'
            ],
            correctAnswer: 1,
            explanation: 'For objects (including Strings), == compares references (memory addresses), not content. Use s1.equals(s2) to compare String content. Note: Java may intern string literals, so == can sometimes return true, but this is unreliable.'
          }
        ]
      }
    },
    {
      id: 'csabi1-content',
      type: 'text' as const,
      content: `
## If / Else If / Else Statements

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");     // This executes
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\`\`\`

### Key Rules
1. Only the **first** matching branch executes — even if later conditions are also true
2. \`else\` is optional; it handles all remaining cases
3. Curly braces \`{}\` are technically optional for single statements but always recommended

## De Morgan's Laws

| Original | Equivalent |
|----------|-----------|
| \`!(A && B)\` | \`!A \|\| !B\` |
| \`!(A \|\| B)\` | \`!A && !B\` |

> When you negate a compound boolean: **flip the operator** (AND becomes OR) and **negate each part**.

\`\`\`java
// These are equivalent:
!(age >= 18 && hasID)
age < 18 || !hasID
\`\`\`
      `
    },
    {
      id: 'csabi1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) To compare the content of two String objects, use the _______ method instead of ==.

2) De Morgan's Law: !(A && B) is equivalent to !A _______ !B.

3) In short-circuit evaluation, if the left side of && is false, the right side is _______ evaluated.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['.equals()', '||', 'not'],
        hint1: 'A method call on String objects.',
        hint2: 'AND flips to the other logical operator.',
        hint3: 'Short-circuit means skipping unnecessary evaluation.',
        explanation: '.equals() for String comparison. !(A && B) = !A || !B. Short-circuit: false && anything = false (right side skipped).'
      }
    },
    {
      id: 'csabi1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Logic** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The expression !(true || false) evaluates to ___',
            options: ['false', 'true', 'null', 'Compile error']
          },
          {
            label: 'Using De Morgan s Law, !(x > 5 || y < 2) is equivalent to ___',
            options: ['x <= 5 && y >= 2', 'x <= 5 || y >= 2', 'x > 5 && y < 2', 'x > 5 || y < 2']
          },
          {
            label: 'In an if/else if/else chain, how many branches execute?',
            options: ['Exactly one (the first matching branch)', 'All branches that match', 'Always two branches', 'Zero branches if no match']
          }
        ],
        correctAnswers: ['false', 'x <= 5 && y >= 2', 'Exactly one (the first matching branch)'],
        hint1: 'true || false = true, then negate.',
        hint2: 'Negate each part and flip || to &&.',
        hint3: 'Only the first true condition runs.',
        explanation: '!(true) = false. De Morgan: negate each, flip operator. Only first matching branch executes in if/else if/else.'
      }
    },
    {
      id: 'csabi1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Booleans & If Statements

- **De Morgan's Laws** appear on nearly every exam — practice transforming !(A && B) and !(A || B)
- == vs .equals() for Strings is a classic trap question
- When tracing if/else if/else, stop at the FIRST true condition
- Watch for **nested ifs** — trace them carefully with indentation
- Short-circuit evaluation can prevent errors: \`if (arr != null && arr.length > 0)\` is safe because if arr is null, the second part is never evaluated
      `
    },
    {
      id: 'csabi1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?\nint x = 15;\nif (x > 20) {\n    System.out.print("A");\n} else if (x > 10) {\n    System.out.print("B");\n} else if (x > 5) {\n    System.out.print("C");\n}',
            options: [
              'A',
              'B',
              'BC',
              'C'
            ],
            correctAnswer: 1,
            explanation: 'x = 15. x > 20 is false. x > 10 is true, so "B" is printed and the rest is skipped. Even though x > 5 is also true, only the first matching branch executes.'
          },
          {
            question: 'Which expression is equivalent to !(a < 10 && b >= 5)?',
            options: [
              'a < 10 || b >= 5',
              'a >= 10 && b < 5',
              'a >= 10 || b < 5',
              '!(a < 10) && !(b >= 5)'
            ],
            correctAnswer: 2,
            explanation: 'By De Morgan s Law: !(A && B) = !A || !B. So !(a < 10) = a >= 10 and !(b >= 5) = b < 5, combined with || gives: a >= 10 || b < 5.'
          }
        ]
      }
    }
  ]
};
