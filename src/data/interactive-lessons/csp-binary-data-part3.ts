export const cspBinaryDataPart3Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd3-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 3 of 7 — Patterns & Examples**

---

## Patterns of Encoding

Computers use **conventions** to encode data types. Understanding the convention is half the work.

| Convention | Pattern |
|-----------|---------|
| **Unsigned integer** | Plain place-value binary. |
| **Signed integer** | Reserves one bit for sign (e.g., two's complement). |
| **Text (ASCII)** | 7-bit code; "A" = 65, "a" = 97. |
| **Text (Unicode)** | Variable-length; supports every script. |
| **RGB color** | Three 8-bit channels: 0–255 red, green, blue. |
| **Sample (audio)** | Integer amplitude, repeated at sample rate. |
      `
    },
    {
      id: "cspbd3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "In ASCII the letter \"A\" is 65. The letter \"B\" is ___",
            options: [
              "64",
              "65",
              "66",
              "97"
            ],
            correctAnswer: 2,
            explanation: "ASCII assigns consecutive code points to letters in order."
          },
          {
            question: "A pure red pixel in 24-bit RGB has the byte values ___",
            options: [
              "(0, 0, 0)",
              "(255, 0, 0)",
              "(255, 255, 0)",
              "(255, 255, 255)"
            ],
            correctAnswer: 1,
            explanation: "Maximum red, no green or blue."
          }
        ]
      }
    },
    {
      id: "cspbd3-content",
      type: 'text' as const,
      content: `
## Worked Example: Decoding Text

Bytes: 72, 73, 33

- 72 = "H"
- 73 = "I"
- 33 = "!"

Output: **HI!** Since text is just numbers under an agreed mapping, *any* file is bytes — the difference is only how the program *interprets* them.

## Worked Example: Building a Color

A pixel is three bytes. To make a strong purple:

| Channel | Value (0–255) |
|---------|---------------|
| R | 128 |
| G | 0 |
| B | 128 |

In hex (the form you see in CSS): **#800080**. Each pair of hex digits = one byte (0x80 = 128).

## Worked Example: Interpreting Audio

A WAV-style audio file stores **samples** of air-pressure amplitude:

- **Sample rate**: how many samples per second (e.g., 44,100 Hz for CD quality).
- **Bit depth**: bits per sample (e.g., 16 bits → 65,536 possible amplitudes).
- **Channels**: 1 (mono) or 2 (stereo).

A 60-second 16-bit stereo CD-quality clip = 60 × 44,100 × 2 (bytes/sample) × 2 (channels) = **10.6 MB**.
      `
    },
    {
      id: "cspbd3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In ASCII the letters A and a have code points 65 and _______.

2) A 24-bit RGB pixel uses _______ bytes.

3) A digital audio file is built from repeated _______ of amplitude.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["97", "3", "samples"],
        hint1: "Lowercase is 32 above uppercase.",
        hint2: "One per channel.",
        hint3: "Discrete time slices.",
        explanation: "ASCII a = 97 (A + 32). 24 bits = 3 bytes. Audio = sequence of amplitude samples."
      }
    },
    {
      id: "cspbd3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A pixel with R=255, G=255, B=255 appears ___",
            options: ["black", "white", "red", "blue"]
          },
          {
            label: "A pixel with R=0, G=0, B=0 appears ___",
            options: ["white", "gray", "black", "transparent"]
          },
          {
            label: "Doubling the sample rate of a digital audio file ___ the file size",
            options: ["halves", "leaves unchanged", "doubles", "quadruples"]
          }
        ],
        correctAnswers: ["white", "black", "doubles"],
        hint1: "All channels max.",
        hint2: "All channels off.",
        hint3: "Twice as many samples per second.",
        explanation: "255 across all channels is white; 0 across all is black. Doubling the sample rate doubles the bytes-per-second."
      }
    },
    {
      id: "cspbd3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Encoding Conventions

- "How many bytes for a pixel?" → 3 bytes for 24-bit RGB; 4 bytes if there's an alpha channel.
- "How many bytes per second of audio?" → sampleRate × bytesPerSample × channels.
- ASCII letter math: subtract 65 to get the alphabetical position of an uppercase letter.
- Hex pairs = bytes. #FF0000 = 255-0-0 = bright red.
      `
    },
    {
      id: "cspbd3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A 1024 × 768 image is stored uncompressed as 24-bit RGB. Approximate file size?",
            options: [
              "100 KB",
              "786 KB",
              "2.4 MB",
              "24 MB"
            ],
            correctAnswer: 2,
            explanation: "1024 × 768 × 3 bytes ≈ 2.4 MB."
          },
          {
            question: "A 5-minute song is stored at 44,100 Hz, 16-bit, stereo (uncompressed). Closest size?",
            options: [
              "5 MB",
              "25 MB",
              "50 MB",
              "500 MB"
            ],
            correctAnswer: 2,
            explanation: "300 s × 44,100 × 2 × 2 ≈ 53 MB."
          }
        ]
      }
    }
  ]
};
