export const cspBinaryDataPart5Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd5-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 5 of 7 — Limits of Fixed Bits: Overflow and Round-off**

---

## When the Bits Run Out

In many programming languages, an integer is stored in a **fixed number of bits**. That fixes the largest value it can hold:

| Bits | Values | Largest whole number |
|------|--------|----------------------|
| 4 | 16 | 15 |
| 8 | 256 | 255 |
| 16 | 65,536 | 65,535 |

If a calculation produces a value that needs more bits than are available, the result is an **overflow error**: the program stops with an error or stores a wrong value. For example, an 8-bit integer holding 255 cannot hold 255 + 1.

> 🔑 The language on the AP exam reference sheet is different: its integers are limited only by the size of the computer's memory, so exam programs do not overflow.
      `
    },
    {
      id: "cspbd5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program stores every result in a 4-bit unsigned integer. Which calculation causes an overflow error?",
            options: [
              "7 + 8",
              "9 + 7",
              "12 − 5",
              "3 × 5"
            ],
            correctAnswer: 1,
            explanation: "4 bits hold 0 through 15. 9 + 7 = 16 needs a fifth bit; 15, 7 and 15 all fit."
          },
          {
            question: "In the language described on the AP exam reference sheet, the size of an integer is ___",
            options: [
              "fixed at 8 bits, so the largest value is 255",
              "limited only by the computer's memory",
              "fixed at 32 bits, so big values overflow",
              "limited to values from −128 through 127"
            ],
            correctAnswer: 1,
            explanation: "The CED notes that the exam language provides an abstraction in which integer size is limited only by memory; fixed-size integers are a feature of other languages."
          }
        ]
      }
    },
    {
      id: "cspbd5-content",
      type: 'text' as const,
      content: `
## Round-off Error

Real numbers (numbers with a fractional part, like 0.1 or 3.75) are also stored in a fixed number of bits. Many of them, such as 1/3 or 0.1, cannot be written exactly in binary, so the computer stores an **approximation**. Arithmetic on these approximations can produce **round-off errors**:

- 0.1 + 0.2 may be stored as 0.30000000000000004.
- A test such as IF(total = 0.3) can then be false even though the math says it should be true.

You do not need to know the exact range of real numbers a computer can store; that is outside the AP exam. You do need to know *why* the errors happen: a fixed number of bits.

## Comparing and Ordering Binary Numbers

To compare two binary numbers, give them the same length by adding leading zeros, then read from the **left**. The first position where they differ decides: the number with the 1 there is larger.

| Binary | Decimal |
|--------|---------|
| 1001 | 9 |
| 1011 | 11 |
| 1110 | 14 |

1001 vs 1011: they first differ in the 2s place, and 1011 has the 1, so 1011 is larger. Ordered least to greatest: **1001, 1011, 1110**.
      `
    },
    {
      id: "cspbd5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When a value needs more bits than a fixed-size integer has, the result is an _______ error.

2) The largest whole number that can be stored in 6 bits is _______.

3) Binary 1110 in decimal is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["overflow", "63", "14"],
        hint1: "The value spills past the available bits.",
        hint2: "$2^{6}$ − 1.",
        hint3: "8 + 4 + 2.",
        explanation: "Too few bits for the value → overflow error. 6 bits hold 0 through 63. 1110 = 8 + 4 + 2 = 14."
      }
    },
    {
      id: "cspbd5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Of 10110 and 10011, the larger binary number is ___",
            options: ["10110", "10011", "neither; they are equal", "impossible to tell"]
          },
          {
            label: "Storing the value 1/3 in a fixed number of bits produces a ___",
            options: ["round-off error", "overflow error", "syntax error", "logic error"]
          },
          {
            label: "Adding 1 to 255 stored in an 8-bit unsigned integer causes ___",
            options: ["an overflow error", "a round-off error", "the value 256", "no change at all"]
          }
        ],
        correctAnswers: ["10110", "round-off error", "an overflow error"],
        hint1: "They first differ in the 4s place.",
        hint2: "1/3 has no exact binary form.",
        hint3: "8 bits hold 0 through 255.",
        explanation: "10110 (22) > 10011 (19). Real numbers like 1/3 are stored as approximations, giving round-off error. 256 needs 9 bits, so 8 bits overflow."
      }
    },
    {
      id: "cspbd5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Consequences of Using Bits

- **Overflow** = an integer result too large for a fixed number of bits.
- **Round-off** = a real number that can only be stored approximately.
- The exam's own pseudocode language has no integer overflow; questions about overflow describe some other language with fixed-size integers.
- To compare binary numbers, line them up on the right and read from the left; the first difference decides.
- When converting to check an answer, use place values: 1, 2, 4, 8, 16, 32, 64, 128.
      `
    },
    {
      id: "cspbd5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A game written in a language with 8-bit unsigned integers stores each score in one variable. A player with 250 points earns 10 more. Which best describes the result?",
            options: [
              "An overflow error, since 260 needs more than 8 bits.",
              "A round-off error, since 260 is not a power of two.",
              "The score becomes 260, since a bit is added as needed.",
              "No problem, since 260 is less than 2 to the 8th power."
            ],
            correctAnswer: 0,
            explanation: "8 bits hold at most 255, and 260 needs a ninth bit. $2^{8}$ = 256, which is less than 260."
          },
          {
            question: "Which list orders the binary numbers 1101, 0111, and 1010 from least to greatest?",
            options: [
              "1010, 0111, 1101",
              "0111, 1010, 1101",
              "0111, 1101, 1010",
              "1101, 1010, 0111"
            ],
            correctAnswer: 1,
            explanation: "0111 = 7, 1010 = 10, 1101 = 13, so the order is 0111, 1010, 1101."
          }
        ]
      }
    }
  ]
};
