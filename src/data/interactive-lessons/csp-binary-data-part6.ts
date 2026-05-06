export const cspBinaryDataPart6Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd6-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 6 of 7 — Problem-Solving Workshop**

---

## Binary & Data Workshop

Practice the calculations and design choices the AP exam asks under a time crunch.
      `
    },
    {
      id: "cspbd6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A system needs to assign a unique binary code to each of 50 students. The minimum number of bits required is ___",
            options: [
              "5",
              "6",
              "7",
              "8"
            ],
            correctAnswer: 1,
            explanation: "2⁵ = 32 < 50; 2⁶ = 64 ≥ 50."
          },
          {
            question: "Convert binary 10110010 to decimal.",
            options: [
              "170",
              "178",
              "180",
              "210"
            ],
            correctAnswer: 1,
            explanation: "128 + 32 + 16 + 2 = 178."
          }
        ]
      }
    },
    {
      id: "cspbd6-content",
      type: 'text' as const,
      content: `
## Worked: Bit-Width Sizing

**Question:** "We have 5 different statuses to encode in each record. Minimum bits per record?"

- 2² = 4 (too small).
- 2³ = 8 ≥ 5 ✓.
- Use **3 bits**.

**Question:** "We have 1,000,000 user IDs. Minimum bits per ID?"

- 2¹⁹ = 524,288 (too small).
- 2²⁰ = 1,048,576 ≥ 1M ✓.
- Use **20 bits**.

## Worked: Storage Estimation

**Question:** "Estimate the storage for 10,000 1024×1024 RGB photos, uncompressed."

- One photo: 1024 × 1024 × 3 ≈ 3 MB.
- 10,000 photos: ~30 GB.

**With JPEG (~10×):** ~3 GB.

## Worked: Conversions Both Ways

| Decimal | Binary (8-bit) |
|---------|---------------|
| 5 | 00000101 |
| 17 | 00010001 |
| 64 | 01000000 |
| 100 | 01100100 |
| 200 | 11001000 |
| 255 | 11111111 |
      `
    },
    {
      id: "cspbd6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) For 100 students, the minimum bits required for unique IDs is _______.

2) A 32-bit number can store roughly _______ billion distinct values.

3) Binary 11111111 in decimal is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7", "4", "255"],
        hint1: "2⁶ = 64 < 100; 2⁷ = 128 ≥ 100.",
        hint2: "2³² ≈ 4.3 × 10⁹.",
        hint3: "Sum 1+2+4+…+128.",
        explanation: "7 bits suffice. 2³² ≈ 4 billion. 11111111 = 255."
      }
    },
    {
      id: "cspbd6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Decimal 100 in 8-bit binary is ___",
            options: ["01100100", "01100110", "10100100", "01101000"]
          },
          {
            label: "A 24-bit RGB pixel can show ___ distinct colors",
            options: ["~16 million", "~256", "~65,000", "~4 billion"]
          },
          {
            label: "For uncompressed CD-quality audio, 1 second of stereo is about ___",
            options: ["176 KB", "44 KB", "1.4 MB", "11 MB"]
          }
        ],
        correctAnswers: ["01100100", "~16 million", "176 KB"],
        hint1: "64 + 32 + 4.",
        hint2: "2²⁴ = 16,777,216.",
        hint3: "44,100 × 2 bytes × 2 channels = 176,400 bytes.",
        explanation: "100 = 64 + 32 + 4. 2²⁴ ≈ 16 million colors. CD audio ≈ 176 KB/s stereo."
      }
    },
    {
      id: "cspbd6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Quick Calculations

- For "minimum bits for N values" → smallest n where 2ⁿ ≥ N.
- For "storage of M items, each k bits" → M·k / 8 bytes.
- For audio: bytes/sec = sampleRate × bytesPerSample × channels.
- For images: bytes = width × height × bytesPerPixel.
- Don't worry about hex on the AP — it's rarely tested. Decimal/binary conversions and 2ⁿ values are the core.
      `
    },
    {
      id: "cspbd6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A weather station records temperature once per minute as an 8-bit value. How much storage for one year?",
            options: [
              "~525 KB",
              "~525 KB but compressed",
              "~525 bytes",
              "~525 GB"
            ],
            correctAnswer: 0,
            explanation: "60·24·365 = 525,600 samples × 1 byte ≈ 525 KB."
          },
          {
            question: "A school stores 24-bit RGB profile photos for 50,000 students at 200 × 200 pixels each, uncompressed. Total storage?",
            options: [
              "~6 GB",
              "~600 MB",
              "~60 MB",
              "~6 MB"
            ],
            correctAnswer: 0,
            explanation: "One photo: 200·200·3 = 120,000 bytes ≈ 120 KB. ×50,000 ≈ 6 GB."
          }
        ]
      }
    }
  ]
};
