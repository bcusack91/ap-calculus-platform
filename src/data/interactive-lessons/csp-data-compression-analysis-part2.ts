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
## Why Lossless Has A Limit

There's an information-theoretic minimum (entropy) for lossless compression. A truly random file cannot be losslessly compressed below its original size.

A simple example: a 100-character string of alternating "AB" patterns can be encoded as "AB × 50" — far smaller. A 100-character string of random characters has no pattern to exploit.

## Why Lossy Can Go Further

Lossy compression exploits **human perception**:

- **Audio**: humans don't hear above ~20 kHz; some bands can be discarded.
- **Image**: small color shifts in textures are imperceptible.
- **Video**: most pixels barely change between frames; encode the difference.

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

3) The information-theoretic minimum size for lossless compression is set by _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["lossless", "lossy", "entropy"],
        hint1: "No information lost.",
        hint2: "Some information lost.",
        hint3: "Information theory.",
        explanation: "Lossless = perfect; lossy = approximate; entropy = lower bound."
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
            options: ["many long runs of repeated values", "random values", "encrypted values", "short text"]
          },
          {
            label: "JPEG compression discards ___",
            options: ["color and frequency detail humans rarely notice", "all blue pixels", "every other pixel", "nothing"]
          },
          {
            label: "A file that has been losslessly compressed and then losslessly decompressed ___",
            options: ["is bit-for-bit identical to the original", "is approximately the original", "is encrypted", "cannot be opened"]
          }
        ],
        correctAnswers: ["many long runs of repeated values", "color and frequency detail humans rarely notice", "is bit-for-bit identical to the original"],
        hint1: "RLE pattern.",
        hint2: "Perceptual coding.",
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
- Lossless can't shrink random data below its entropy.
- Compression effectiveness is data-dependent.
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
            question: "A 100 MB log file made of repetitive event lines compresses with ZIP to 5 MB. A 100 MB encrypted random file barely compresses. The most accurate explanation is ___",
            options: [
              "ZIP only works on text files and refuses to operate on binary data.",
              "lossless compression exploits patterns; encrypted data has none to exploit.",
              "the encryption algorithm is broken and is producing fully predictable output.",
              "the random file is corrupted and the compressor refused to process it."
            ],
            correctAnswer: 1,
            explanation: "Encryption ≈ random; no exploitable patterns."
          },
          {
            question: "A web service stores user-uploaded photos. Storage costs are large. The most reasonable design choice is ___",
            options: [
              "store the originals with no compression so quality is always at its maximum.",
              "store the upload AND a JPEG-compressed thumbnail; deliver per use case.",
              "silently delete all photos after a fixed number of days to free up disk space.",
              "switch the upload protocol from TCP to UDP to reduce server storage cost."
            ],
            correctAnswer: 1,
            explanation: "Multiple resolutions / qualities — common modern design."
          }
        ]
      }
    }
  ]
};
