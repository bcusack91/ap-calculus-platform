export const cspDataCompressionAnalysisPart2Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca2-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 2 of 7 — Key Processes**

---

## Compression: Same Information, Fewer Bits

Compression takes a sequence of bits and produces a shorter sequence that decodes back to the original (lossless) or to an approximation of it (lossy).

| Type | Round-trip property | Examples |
|------|---------------------|----------|
| **Lossless** | Decoded = original, bit-for-bit | ZIP, PNG, FLAC |
| **Lossy** | Decoded ≈ original | JPEG, MP3, MP4 |
      `
    },
    {
      id: "cspdca2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A medical X-ray must be compressed for storage AND must remain diagnostically accurate. Which type fits?",
            options: [
              "Lossless compression that preserves every original pixel exactly.",
              "Lossy compression at a high ratio that discards fine detail.",
              "No compression of any kind, leaving the file at full original size.",
              "Encryption of the original file without changing its underlying size."
            ],
            correctAnswer: 0,
            explanation: "Lossless preserves every detail."
          },
          {
            question: "A vacation photo for casual social media is most often stored as ___",
            options: [
              "Lossless TIFF that preserves every original pixel of the photo.",
              "Lossy JPEG that is much smaller but visually almost identical.",
              "Plain text that lists the RGB value of every pixel one per line.",
              "Encrypted ZIP archive of the raw camera capture for sharing."
            ],
            correctAnswer: 1,
            explanation: "JPEG's lossy compression trades trivial fidelity for big size savings."
          }
        ]
      }
    },
    {
      id: "cspdca2-content",
      type: 'text' as const,
      content: `
## How Much Can Lossless Compression Save?

The amount of size reduction depends on two things: **how much redundancy** (repetition) the original data has, and **which compression algorithm** is applied.

A simple example: a 100-character string of alternating "AB" patterns can be encoded as "AB × 50" — far smaller. A 100-character string of random characters has no pattern to exploit, so lossless compression saves little or nothing.

Also remember: **fewer bits does not necessarily mean less information.** A losslessly compressed file holds exactly the same information as the original in fewer bits.

## Why Lossy Can Go Further

Lossy compression throws away detail that people are unlikely to notice, such as tiny color differences in a photo or sounds that are hard to hear. Because it keeps only an approximation, it can usually shrink data **much more** than lossless compression, but the original can never be rebuilt exactly.

## A Tiny Lossless Example: Run-Length Encoding

| Original | Encoded |
|----------|---------|
| AAAABBBCCD | 4A3B2C1D |
| AAAAAAAAAA | 10A |
| ABCDEF | 1A1B1C1D1E1F (worse!) |

RLE wins on data with long runs and loses on data without them. Compression is **data-dependent**.
      `
    },
    {
      id: "cspdca2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Compression that perfectly preserves the original data is called _______.

2) Compression that drops some information to save space is called _______.

3) Repetition in data that compression can take advantage of is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["lossless", "lossy", "redundancy"],
        hint1: "No information lost.",
        hint2: "Some information lost.",
        hint3: "Data that is \"redundant\" repeats itself.",
        explanation: "Lossless = perfect; lossy = approximate; redundancy is the repetition compression removes."
      }
    },
    {
      id: "cspdca2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Run-length encoding compresses well when data has ___",
            options: ["many long runs of repeated values", "many distinct values that rarely repeat", "values spread evenly across a wide range", "a large number of unique, unrepeated symbols"]
          },
          {
            label: "JPEG compression discards ___",
            options: ["fine color detail humans rarely notice", "every other row of pixels to halve the height", "the image's metadata while keeping all pixels", "runs of repeated pixels, storing each run once"]
          },
          {
            label: "A file that has been losslessly compressed and then losslessly decompressed ___",
            options: ["is bit-for-bit identical to the original", "is close to, but not exactly, the original", "has lost only detail humans rarely notice", "is slightly larger than the original file was"]
          }
        ],
        correctAnswers: ["many long runs of repeated values", "fine color detail humans rarely notice", "is bit-for-bit identical to the original"],
        hint1: "RLE pattern.",
        hint2: "Lossy keeps an approximation.",
        hint3: "Round-trip = identity.",
        explanation: "RLE wins on runs. JPEG drops imperceptible detail. Lossless round-trip = identity."
      }
    },
    {
      id: "cspdca2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Compression Basics

- "Must be perfect" → lossless.
- "Need much smaller, perceptual loss OK" → lossy.
- How much compression saves depends on the data's redundancy AND the algorithm used.
- Lossy usually shrinks files more than lossless; lossless guarantees the original can be rebuilt.
      `
    },
    {
      id: "cspdca2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A 100 MB log file made of repetitive event lines compresses with ZIP to 5 MB. A 100 MB file of random sensor noise barely compresses. The most accurate explanation is ___",
            options: [
              "ZIP only works on text files and refuses to operate on numeric data.",
              "lossless methods need repeated patterns, and the sensor readings lack them.",
              "the sensor file must be corrupted, so the compressor skipped most of it.",
              "the log file was compressed with a lossy method that dropped some lines."
            ],
            correctAnswer: 1,
            explanation: "Size reduction depends on the redundancy in the data; repetitive logs have lots of it, random noise has almost none."
          },
          {
            question: "A web service stores user-uploaded photos. Storage costs are large. The most reasonable design choice is ___",
            options: [
              "store the originals with no compression so quality is always at its maximum.",
              "keep the original and a smaller JPEG copy, using each where it fits.",
              "silently delete all photos after a fixed number of days to free up disk space.",
              "switch the upload protocol from TCP to UDP to reduce server storage cost."
            ],
            correctAnswer: 1,
            explanation: "The lossless original keeps full quality where it matters, and the smaller lossy copy saves space and transfer time everywhere else."
          }
        ]
      }
    }
  ]
};
