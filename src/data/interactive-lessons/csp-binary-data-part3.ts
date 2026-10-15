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

Bits are grouped to represent **abstractions** such as numbers, characters, and colors. A program and its users agree on a **convention**, and understanding the convention is half the work.

| Data | Pattern |
|-----------|---------|
| **Whole number** | Place-value binary: 1, 2, 4, 8, 16, … |
| **Text** | Each character is an agreed-upon bit pattern. |
| **RGB color** | Three 8-bit channels: 0–255 red, green, blue. |
| **Sound sample** | A measured value, repeated at regular intervals. |

The **same sequence of bits** can represent different types of data in different contexts. The meaning comes from the program that reads the bits.
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
            question: "A file contains the byte 01000001. Which statement about this byte is accurate?",
            options: [
              "It always represents the whole number 65.",
              "Its meaning depends on the program reading it.",
              "It can only represent a single text character.",
              "It must be one color channel of an image."
            ],
            correctAnswer: 1,
            explanation: "The same bits can represent a number, a character, or part of a color; the context set by the program decides which."
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
## Worked Example: Same Bits, Different Meaning

The byte 01001000 could be:

- the whole number 72 (64 + 8),
- one character of a text message, under the code the program uses,
- the brightness of one color channel in a pixel.

Since text, numbers, and colors are all bit patterns, *any* file is just bits; the difference is only how the program *interprets* them.

## Worked Example: Building a Color

A pixel is three bytes. To make a strong purple:

| Channel | Value (0–255) |
|---------|---------------|
| R | 128 |
| G | 0 |
| B | 128 |

Each channel is one byte, so the pixel takes 3 bytes (24 bits). Since 128 = 10000000 in binary, the pixel's bits are 10000000 00000000 10000000.

## Worked Example: Analog to Digital

**Analog data** change smoothly over time rather than in discrete steps: the pitch and volume of music, the colors of a painting, the position of a sprinter. A computer approximates analog data with **sampling**: it measures the signal at regular intervals (**samples**) and stores each sample in bits. Using digital data to approximate analog data is an example of **abstraction**.

An audio file stores samples of the sound wave:

- **Sample rate**: how many samples per second (e.g., 44,100 Hz for CD quality).
- **Bit depth**: bits per sample (e.g., 16 bits → 65,536 possible amplitudes).
- **Channels**: 1 (mono) or 2 (stereo).

A 60-second 16-bit stereo CD-quality clip = 60 × 44,100 × 2 (bytes/sample) × 2 (channels) = **10.6 MB**. Taking samples more often gives a closer approximation of the original sound, but it needs more bits.
      `
    },
    {
      id: "cspbd3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Data whose values change smoothly over time, rather than in discrete steps, are called _______ data.

2) A 24-bit RGB pixel uses _______ bytes.

3) A digital audio file is built from repeated _______ of amplitude.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["analog", "3", "samples"],
        hint1: "The opposite of digital.",
        hint2: "One per channel.",
        hint3: "Discrete time slices.",
        explanation: "Analog data change smoothly. 24 bits = 3 bytes. Audio = sequence of amplitude samples."
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

- "How many bytes for a pixel?" → 3 bytes for 24-bit RGB (one byte per channel).
- "How many bytes per second of audio?" → sampleRate × bytesPerSample × channels.
- "What does this bit pattern mean?" → it depends on the context; the same bits can be a number, a character, or a color.
- Sampling analog data is an abstraction: more frequent samples = closer approximation = more bits.
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
