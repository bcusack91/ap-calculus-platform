export const cspVariablesControlPart5Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc5-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 5 of 7 — Expressions, MOD, and Strings**

---

## Evaluating Expressions

An **expression** can be a value, a variable, an operator, or a procedure call that returns a value. Every expression is evaluated to a single value, following the order of operations from mathematics. **MOD has the same precedence as * and /**, and operators of equal precedence are evaluated left to right.

| Expression | Value | Why |
|------------|-------|-----|
| 17 / 5 | 3.4 | / is ordinary division on the exam |
| 17 MOD 5 | 2 | the remainder when 17 is divided by 5 |
| 20 MOD 5 | 0 | 5 divides 20 evenly |
| 4 MOD 7 | 4 | 7 goes into 4 zero times, remainder 4 |
| 3 + 10 MOD 4 | 5 | MOD first: 10 MOD 4 = 2, then 3 + 2 |
| (3 + 10) MOD 4 | 1 | parentheses first: 13 MOD 4 = 1 |

On the exam, a MOD b is used only with a ≥ 0 and b > 0.
      `
    },
    {
      id: "cspvc5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "What does 23 MOD 4 evaluate to?",
            options: [
              "5",
              "3",
              "5.75",
              "4"
            ],
            correctAnswer: 1,
            explanation: "4 goes into 23 five times (20) with 3 left over, so 23 MOD 4 is 3. 5.75 is 23 / 4."
          },
          {
            question: "What is the value of 2 + 12 MOD 5 * 3?",
            options: [
              "12",
              "14",
              "8",
              "6"
            ],
            correctAnswer: 2,
            explanation: "MOD and * share precedence and go left to right: 12 MOD 5 = 2, then 2 * 3 = 6, then 2 + 6 = 8. Adding first, (2 + 12) MOD 5 * 3, would give 12."
          }
        ]
      }
    },
    {
      id: "cspvc5-content",
      type: 'text' as const,
      content: `
## Common Uses of MOD

| Goal | Expression |
|------|------------|
| Is n even? | n MOD 2 = 0 |
| Is n a multiple of 3? | n MOD 3 = 0 |
| Last digit of a whole number | n MOD 10 |
| Cycle through 1 to 7 | day ← (day MOD 7) + 1 |

## Strings

A **string** is an ordered sequence of characters. **String concatenation** joins two or more strings end to end to make a new string. A **substring** is part of an existing string. The reference sheet has no string operators, so an exam question defines the procedures it uses. For example:

- concat(str1, str2) returns str1 followed by str2.
- substring(str, start, length) returns length characters of str, beginning at position start (positions start at 1).

\`\`\`
word ← "data"
result ← concat(word, "base")
DISPLAY(result)              // database
part ← substring(result, 5, 4)
DISPLAY(part)                // base
\`\`\`

## Choosing a Type

Some values are better represented with one type than another: a ZIP code such as "02134" as a **string** (so the leading 0 is kept), a count as a **number**, a yes/no fact as a **Boolean**, and many related values as a **list**.
      `
    },
    {
      id: "cspvc5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) 29 MOD 6 evaluates to _______.

2) Using the concat procedure above, concat("sun", "set") returns _______.

3) Using the substring procedure above, substring("planet", 3, 4) returns _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5", "sunset", "anet"],
        hint1: "6 × 4 = 24; what is left over?",
        hint2: "Join the strings end to end.",
        hint3: "Start at the 3rd character, a, and take 4 characters.",
        explanation: "29 = 6 × 4 + 5, so the remainder is 5. Concatenation gives \"sunset\". In \"planet\", position 3 is a, and four characters from there are a, n, e, t."
      }
    },
    {
      id: "cspvc5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "For a whole number n, n MOD 2 = 1 is true when n is ___",
            options: ["odd", "even", "zero", "a multiple of 4"]
          },
          {
            label: "10 - 7 MOD 4 evaluates to ___",
            options: ["7", "3", "1", "0"]
          },
          {
            label: "A student ID such as 00731, which must keep its leading zeros, is best stored as a ___",
            options: ["string", "number", "Boolean", "list of Booleans"]
          }
        ],
        correctAnswers: ["odd", "7", "string"],
        hint1: "Dividing by 2 leaves 1.",
        hint2: "MOD before subtraction: 7 MOD 4 = 3.",
        hint3: "A number would drop the leading zeros.",
        explanation: "Odd numbers leave remainder 1 when divided by 2. MOD comes before subtraction, so 10 − 3 = 7. A string keeps every character, including leading zeros."
      }
    },
    {
      id: "cspvc5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Expressions

- Apply the order of operations: parentheses, then *, /, and MOD from left to right, then + and −.
- a MOD b is always between 0 and b − 1, and a MOD b = 0 means b divides a evenly.
- 17 / 5 is 3.4 on the exam; use MOD for remainders.
- For string questions, read the procedure definitions in the question carefully, then count character positions starting at 1.
      `
    },
    {
      id: "cspvc5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "count ← 0\nn ← 1\nREPEAT 10 TIMES\n{\n    IF (n MOD 3 = 0)\n    {\n        count ← count + 1\n    }\n    n ← n + 1\n}\nDISPLAY(count)\n\nWhat is displayed?",
            options: [
              "4",
              "3",
              "10",
              "0"
            ],
            correctAnswer: 1,
            explanation: "n takes the values 1 through 10. The multiples of 3 among them are 3, 6, and 9, so count is 3."
          },
          {
            question: "A procedure lastDigit(n) should return the last digit of a whole number n. Which statement belongs in its body?",
            options: [
              "RETURN(n / 10)",
              "RETURN(10 MOD n)",
              "RETURN(n - 10)",
              "RETURN(n MOD 10)"
            ],
            correctAnswer: 3,
            explanation: "The remainder after dividing by 10 is the last digit: 347 MOD 10 = 7. n / 10 gives 34.7, and 10 MOD n reverses the operands."
          }
        ]
      }
    }
  ]
};
