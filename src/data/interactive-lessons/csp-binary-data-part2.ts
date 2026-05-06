export const cspBinaryDataPart2Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd2-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 2 of 7 — Key Processes**

---

## How Computers Encode Everything in Binary

A computer represents every kind of data — numbers, text, images, sound — using only two digits: **0 and 1**. The trick is **agreement**: a sender and receiver agree on a code, then the same bit pattern can mean a number, a letter, or a pixel color.

| Data type | Encoding scheme |
|-----------|-----------------|
| Whole number | Place values 1, 2, 4, 8, 16, … (binary) |
| Text | A code mapping bit pattern → character (e.g., ASCII) |
| Color (pixel) | Three numbers: R, G, B — each 8 bits |
| Sound | Repeated samples of air-pressure amplitude |
      `
    },
    {
      id: "cspbd2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A sequence of 8 bits (1 byte) can represent how many distinct values?",
            options: [
              "8",
              "16",
              "128",
              "256"
            ],
            correctAnswer: 3,
            explanation: "2⁸ = 256."
          },
          {
            question: "What is the decimal value of the 8-bit binary number 00010110?",
            options: [
              "11",
              "22",
              "24",
              "44"
            ],
            correctAnswer: 1,
            explanation: "Place values 16 + 4 + 2 = 22."
          }
        ]
      }
    },
    {
      id: "cspbd2-content",
      type: 'text' as const,
      content: `
## Reading Binary Like a Pro

To convert binary to decimal, line up the bits with their place values from the right and add the place values where the bit is 1.

| Place value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-------------|-----|----|----|----|---|---|---|---|
| Bit | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |

Sum the places where the bit is 1: 64 + 16 + 8 + 1 = **89**.

## Going The Other Way

To convert decimal → binary, repeatedly subtract the largest power of 2 that fits.

Convert **45**:

- 32 fits → bit on; remainder 13.
- 16 doesn't fit; bit off.
- 8 fits → bit on; remainder 5.
- 4 fits → bit on; remainder 1.
- 2 doesn't fit; bit off.
- 1 fits → bit on; remainder 0.

Result: **00101101** (8 bits).

## Why "n bits = 2ⁿ values"

Each new bit doubles the patterns:

| Bits | Patterns |
|------|---------|
| 1 | 2 |
| 2 | 4 |
| 4 | 16 |
| 8 | 256 |
| 16 | 65,536 |
| 32 | ~4.3 billion |

Memorize 2⁸ = 256 and 2¹⁶ = 65,536 — both appear constantly on the AP exam.
      `
    },
    {
      id: "cspbd2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A single binary digit (0 or 1) is called a _______.

2) The number of distinct values that can be represented with n bits is 2 to the _______ power.

3) The decimal number 5 in 4-bit binary is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["bit", "n", "0101"],
        hint1: "Short for \"binary digit\".",
        hint2: "The exponent equals the number of bits.",
        hint3: "4 + 1 with place values 8, 4, 2, 1.",
        explanation: "Bit = binary digit. n bits → 2ⁿ patterns. 5 = 4 + 1 = 0101."
      }
    },
    {
      id: "cspbd2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Binary 11000000 in decimal is ___",
            options: ["96", "128", "192", "224"]
          },
          {
            label: "2¹⁰ equals ___",
            options: ["100", "256", "1024", "2048"]
          },
          {
            label: "A 4-bit number can store ___ distinct values",
            options: ["4", "8", "16", "32"]
          }
        ],
        correctAnswers: ["192", "1024", "16"],
        hint1: "128 + 64.",
        hint2: "About 1000 — the \"kilo\" of computing.",
        hint3: "2⁴.",
        explanation: "11000000 = 128 + 64 = 192. 2¹⁰ = 1024 (the \"k\" in KiB). 2⁴ = 16."
      }
    },
    {
      id: "cspbd2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Binary Conversions

- Write the place-value row first; then plug in the bits.
- Memorize: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2¹⁰=1024.
- Decimal → binary: greedy subtraction by largest power of 2.
- For "how many bits do I need to represent N values?" use ⌈log₂ N⌉.
      `
    },
    {
      id: "cspbd2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school ID system needs to give each of 600 students a unique binary code. What is the minimum number of bits required?",
            options: [
              "8",
              "9",
              "10",
              "12"
            ],
            correctAnswer: 2,
            explanation: "2⁹ = 512 < 600; 2¹⁰ = 1024 ≥ 600. So 10 bits."
          },
          {
            question: "A device samples sensor values from 0 to 7 and stores each in the smallest number of bits possible. After 1,000,000 samples, total storage is ___",
            options: [
              "1,000,000 bytes",
              "375,000 bytes",
              "8,000,000 bytes",
              "125,000 bytes"
            ],
            correctAnswer: 1,
            explanation: "8 values need 3 bits; 1,000,000 × 3 / 8 = 375,000 bytes."
          }
        ]
      }
    }
  ]
};
