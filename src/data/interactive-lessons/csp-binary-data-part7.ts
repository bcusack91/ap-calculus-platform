export const cspBinaryDataPart7Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd7-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Binary & Data

Final cheat sheet of the binary and data-representation facts most tested on the AP exam.
      `
    },
    {
      id: "cspbd7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "The smallest unit of digital information is the ___",
            options: [
              "byte",
              "bit",
              "pixel",
              "sample"
            ],
            correctAnswer: 1,
            explanation: "A bit is one binary digit (0 or 1). A byte = 8 bits."
          },
          {
            question: "To represent each of 1,000 distinct values, the minimum number of bits required is ___",
            options: [
              "7",
              "8",
              "10",
              "9"
            ],
            correctAnswer: 2,
            explanation: "$2^{9}$ = 512 < 1000; $2^{10}$ = 1024 ≥ 1000."
          }
        ]
      }
    },
    {
      id: "cspbd7-content",
      type: 'text' as const,
      content: `
## Quick-Reference Table

| Memorize | Value |
|----------|-------|
| 1 byte | 8 bits |
| $2^{8}$ | 256 |
| $2^{10}$ | 1,024 (≈ 1 KB) |
| $2^{16}$ | 65,536 |
| $2^{20}$ | ≈ 1 million (≈ 1 MB) |
| $2^{32}$ | ≈ 4.3 billion (≈ 4 GB) |

## Common Misconceptions to Avoid

- "Binary uses 0 and 1 because computers think in numbers." (No — because hardware reliably represents two voltage levels.)
- "Lossy compression destroys the file." (No — it produces a smaller approximation; original can be saved separately.)
- "More bits is always better." (No — wasted bits = wasted storage / bandwidth. Use the minimum sufficient.)
- "Overflow can't happen in AP pseudocode, so it doesn't matter." (No — the exam asks about overflow in languages that store integers in a fixed number of bits.)

## Common Calculations

- Min bits for N values: the smallest n with $2^{n}$ ≥ N.
- Image bytes: W × H × bytesPerPixel.
- Audio bytes/sec: sampleRate × bytesPerSample × channels.
- Total storage of M items × k bytes each: M·k.
      `
    },
    {
      id: "cspbd7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) 8 bits = 1 _______.

2) The binary number 10000000 in decimal equals _______.

3) For 1,000,000 distinct IDs, the minimum number of bits required is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["byte", "128", "20"],
        hint1: "Standard grouping unit.",
        hint2: "Place value 128.",
        hint3: "$2^{20}$ ≈ 1,048,576.",
        explanation: "8 bits = 1 byte. $10000000_{2}$ = 128. 20 bits cover 1M values."
      }
    },
    {
      id: "cspbd7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "PNG is a ___ image format",
            options: ["lossless", "lossy", "vector", "perceptual"]
          },
          {
            label: "JPEG is a ___ image format",
            options: ["lossy", "lossless", "vector", "uncompressed"]
          },
          {
            label: "Storing 0.1 + 0.2 as 0.30000000000000004 is an example of ___",
            options: ["round-off error", "overflow error", "lossy compression", "data cleaning"]
          }
        ],
        correctAnswers: ["lossless", "lossy", "round-off error"],
        hint1: "PNG round-trips perfectly.",
        hint2: "JPEG sacrifices fidelity for size.",
        hint3: "Real numbers are stored as approximations.",
        explanation: "PNG = lossless, JPEG = lossy. A fixed number of bits can only approximate many real numbers, which causes round-off error."
      }
    },
    {
      id: "cspbd7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- "Smallest number of bits to represent N values" → the smallest n with $2^{n}$ ≥ N. Always.
- Distinguish lossless (perfectly reversible) from lossy (approximate).
- Overflow (integer too big for its bits) ≠ round-off (real number stored approximately).
- Different file types are just different conventions for interpreting the SAME underlying bits.
- For storage estimates, multiply: items × bytes-per-item.
      `
    },
    {
      id: "cspbd7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A government agency must archive scanned legal documents and ensure they can be read decades from now. The most appropriate format choice is ___",
            options: [
              "A widely supported lossless format, so every detail of each scan can be reconstructed exactly.",
              "A high-compression lossy format tuned for the smallest file size that the human eye still tolerates.",
              "A single-vendor format whose details are not published or supported by any other software tools.",
              "A plain text version of each document typed by hand, with none of the scanned image data kept."
            ],
            correctAnswer: 0,
            explanation: "Lossless + open/standardized formats best support long-term archival fidelity."
          },
          {
            question: "A research dataset with 4 billion records needs a unique integer ID per record. Which integer width is most appropriate?",
            options: [
              "8-bit unsigned integers, which allow up to 256 distinct values per record across the entire dataset.",
              "16-bit unsigned integers, which allow up to 65,536 distinct values per record across the entire dataset.",
              "32-bit unsigned integers, which allow up to 4,294,967,296 distinct values across the dataset.",
              "64-bit unsigned integers as the only sufficient option, since smaller widths cannot represent the dataset."
            ],
            correctAnswer: 2,
            explanation: "$2^{32}$ ≈ 4.29 billion ≥ 4 billion. 32-bit is the smallest sufficient size."
          }
        ]
      }
    }
  ]
};
