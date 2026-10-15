export const cspVariablesControlPart4Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc4-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 4 of 7 — Nested Conditionals and Equivalent Conditions**

---

## Conditionals Inside Conditionals

**Nested conditional statements** are conditional statements placed inside other conditional statements. The reference sheet has only IF and IF / ELSE, so a choice among three or more ranked cases is written as an IF nested inside an ELSE.

\`\`\`
IF (age < 13)
{
    price ← 8
}
ELSE
{
    IF (age ≥ 65)
    {
        price ← 9
    }
    ELSE
    {
        price ← 12
    }
}
\`\`\`

| age | Outer test age < 13 | Inner test age ≥ 65 | price |
|-----|---------------------|---------------------|-------|
| 10 | true | not checked | 8 |
| 13 | false | false | 12 |
| 65 | false | true | 9 |

Trace from the outside in: the inner IF runs only when the outer condition sends control into the ELSE.
      `
    },
    {
      id: "cspvc4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Using the ticket-price code above, what is price when age is 70?",
            options: [
              "8",
              "12",
              "9",
              "70"
            ],
            correctAnswer: 2,
            explanation: "70 < 13 is false, so control enters the ELSE. There, 70 ≥ 65 is true, so price ← 9."
          },
          {
            question: "In the ticket-price code, which single change makes a 64-year-old pay 9?",
            options: [
              "Change age ≥ 65 to age > 65",
              "Change age < 13 to age < 64",
              "Change age ≥ 65 to age ≥ 64",
              "Swap the values 9 and 12"
            ],
            correctAnswer: 2,
            explanation: "A 64-year-old reaches the inner IF, so its condition must be true at 64: age ≥ 64. Changing the outer test to age < 64 would charge them 8."
          }
        ]
      }
    },
    {
      id: "cspvc4-content",
      type: 'text' as const,
      content: `
## Equivalent Boolean Expressions

Two Boolean expressions are **equivalent** when they give the same result for every possible input. The exam often asks which condition could replace another without changing a program's behavior.

| Expression | Equivalent expression |
|------------|-----------------------|
| NOT (x > 5) | x ≤ 5 |
| NOT (a AND b) | (NOT a) OR (NOT b) |
| NOT (a OR b) | (NOT a) AND (NOT b) |
| (x ≥ 1) AND (x ≤ 10) | NOT ((x < 1) OR (x > 10)) |

## A Nested IF Can Act Like AND

\`\`\`
IF (hasTicket)
{
    IF (age ≥ 18)
    {
        DISPLAY("enter")
    }
}
\`\`\`

This displays "enter" exactly when **hasTicket AND (age ≥ 18)** is true, so it is equivalent to a single IF with that combined condition. Once ELSE blocks are added, check each branch separately: the two forms may no longer match.

## Checking Equivalence With Boundary Values

Test values on each side of every boundary. To tell x > 5 apart from x ≥ 5, the only value that matters is x = 5: the first is false there, and the second is true.
      `
    },
    {
      id: "cspvc4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Conditional statements placed inside other conditional statements are called _______ conditionals.

2) Using the ticket-price code, what is price when age is 65? _______

3) NOT (a AND b) has the same value as (NOT a) _______ (NOT b).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["nested", "9", "OR"],
        hint1: "One inside another.",
        hint2: "65 < 13 is false; is 65 ≥ 65?",
        hint3: "De Morgan's law flips AND to the other operator.",
        explanation: "Nested conditionals sit inside other conditionals. At age 65 the outer test fails and the inner test 65 ≥ 65 is true, so price is 9. NOT (a AND b) equals (NOT a) OR (NOT b)."
      }
    },
    {
      id: "cspvc4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "NOT ((x > 0) AND (x < 10)) is true when x is ___",
            options: ["10", "5", "1", "9"]
          },
          {
            label: "IF (a) { IF (b) { DISPLAY(\"yes\") } } displays yes exactly when ___",
            options: ["a AND b is true", "a OR b is true", "only a is true", "only b is true"]
          },
          {
            label: "To tell x > 5 apart from x ≥ 5, test x = ___",
            options: ["5", "6", "4", "0"]
          }
        ],
        correctAnswers: ["10", "a AND b is true", "5"],
        hint1: "The inner AND is false only outside 1 through 9.",
        hint2: "The inner IF is reached only when a is true.",
        hint3: "Pick the boundary value itself.",
        explanation: "At x = 10, x < 10 is false, so the AND is false and NOT makes it true. The nested IFs display yes only when both a and b are true. The boundary value 5 is where > and ≥ disagree."
      }
    },
    {
      id: "cspvc4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Nested Conditionals

- Trace from the outermost IF inward; exactly one innermost branch runs for each input.
- Mark which inputs reach each branch, especially the boundary values (13 vs 12, 65 vs 64).
- Use De Morgan's laws to rewrite NOT applied to AND / OR.
- To check whether two conditions are equivalent, test values on and next to every boundary.
      `
    },
    {
      id: "cspvc4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "IF (temp > 30)\n{\n    DISPLAY(\"hot\")\n}\nELSE\n{\n    IF (temp > 15)\n    {\n        DISPLAY(\"mild\")\n    }\n    ELSE\n    {\n        DISPLAY(\"cold\")\n    }\n}\n\nWhat is displayed when temp is 15?",
            options: [
              "hot",
              "mild",
              "cold",
              "mild cold"
            ],
            correctAnswer: 2,
            explanation: "15 > 30 is false, so control enters the ELSE. 15 > 15 is also false, so the inner ELSE displays cold. Only one branch runs, so two words are never displayed."
          },
          {
            question: "Which expression is equivalent to NOT ((age < 13) OR (age > 19))?",
            options: [
              "(age ≥ 13) OR (age ≤ 19)",
              "(age > 13) AND (age < 19)",
              "(age < 13) AND (age > 19)",
              "(age ≥ 13) AND (age ≤ 19)"
            ],
            correctAnswer: 3,
            explanation: "By De Morgan's law, NOT (p OR q) is (NOT p) AND (NOT q). NOT (age < 13) is age ≥ 13, and NOT (age > 19) is age ≤ 19, so ages 13 through 19 make it true."
          }
        ]
      }
    }
  ]
};
