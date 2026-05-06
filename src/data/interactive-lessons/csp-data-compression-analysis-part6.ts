export const cspDataCompressionAnalysisPart6Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca6-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 6 of 7 — Problem-Solving Workshop**

---

## Compression Workshop

Apply compression vocabulary to estimation and design problems.
      `
    },
    {
      id: "cspdca6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A 1024×1024 24-bit raw image is ~3 MB. After JPEG it's about ___",
            options: [
              "3 KB",
              "300 KB",
              "3 MB",
              "30 MB"
            ],
            correctAnswer: 1,
            explanation: "JPEG typically yields ~10× compression with imperceptible loss."
          },
          {
            question: "A 60-second 16-bit stereo CD-quality audio file is ~10 MB raw. After MP3 (192 kbps) it's about ___",
            options: [
              "1.4 MB",
              "14 MB",
              "140 MB",
              "1.4 KB"
            ],
            correctAnswer: 0,
            explanation: "192 kbps × 60 s / 8 = 1,440,000 bytes ≈ 1.4 MB."
          }
        ]
      }
    },
    {
      id: "cspdca6-content",
      type: 'text' as const,
      content: `
## Worked: Image Sizing

| Format | 1024×1024 24-bit |
|--------|-----------------|
| Raw RGB | 3 MB |
| PNG (lossless) | 1–2 MB (depends on content) |
| JPEG (high quality) | ~300 KB |
| WebP / AVIF | ~150–200 KB |

## Worked: Audio Sizing

| Format | 60 s stereo |
|--------|-------------|
| Raw 16-bit 44.1 kHz | ~10 MB |
| FLAC (lossless) | ~5–7 MB |
| MP3 192 kbps | ~1.4 MB |
| Opus 64 kbps | ~480 KB |

## Worked: Choosing A Format

| Use case | Best format |
|---------|-------------|
| Legal contract scan | PDF/A or PNG (lossless) |
| Casual photo | JPEG (or WebP) |
| Music distribution | AAC / Opus / MP3 |
| Streaming video | H.264 / AV1 |
| Medical image | DICOM (often with lossless option) |
| ZIP backup | gzip / 7z (lossless) |
      `
    },
    {
      id: "cspdca6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A 1024×1024 24-bit image as raw RGB is about _______ MB.

2) JPEG vs raw typically achieves ~_______ × compression for typical photos.

3) For uncompressed CD-quality stereo audio, 1 second is roughly _______ KB.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3", "10", "176"],
        hint1: "1024 × 1024 × 3.",
        hint2: "Order of magnitude.",
        hint3: "44,100 × 2 × 2 / 1000.",
        explanation: "Raw image = 3 MB. JPEG ≈ 10× smaller. CD audio ≈ 176 KB/s stereo."
      }
    },
    {
      id: "cspdca6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "For a music streaming service prioritizing low data cost, the right choice is ___",
            options: ["Opus or AAC at moderate bitrate", "lossless FLAC for everyone", "no compression", "JPEG audio"]
          },
          {
            label: "For an archival scan that must remain identical decades from now, the right choice is ___",
            options: ["lossless format (PDF/A, TIFF lossless, PNG)", "lossy JPEG at low quality", "no encoding", "MP3"]
          },
          {
            label: "For a streaming video service, the right choice is ___",
            options: ["lossy codec (H.264 / H.265 / AV1) with adaptive bitrate", "lossless only", "plain text", "no compression"]
          }
        ],
        correctAnswers: ["Opus or AAC at moderate bitrate", "lossless format (PDF/A, TIFF lossless, PNG)", "lossy codec (H.264 / H.265 / AV1) with adaptive bitrate"],
        hint1: "Efficient lossy audio.",
        hint2: "Archive = lossless.",
        hint3: "Streaming = lossy + adaptive.",
        explanation: "Opus/AAC for streaming audio. Lossless for archives. Lossy + adaptive for video."
      }
    },
    {
      id: "cspdca6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Memorize raw sizes: 24-bit image = W × H × 3 bytes. CD stereo = ~176 KB/s.
- Match format to use case: archive → lossless; consumer media → lossy.
- "Adaptive bitrate" is the right answer for variable-bandwidth video delivery.
      `
    },
    {
      id: "cspdca6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A startup serves user photos. Storage is fine but mobile users complain about data usage. The single highest-leverage change is ___",
            options: [
              "stop serving photos.",
              "serve responsive, modern (WebP / AVIF) compressed versions appropriate to each device.",
              "serve only lossless.",
              "switch to UDP."
            ],
            correctAnswer: 1,
            explanation: "Serving smaller modern image formats reduces bandwidth dramatically."
          },
          {
            question: "A school board wants to archive 50 years of student records. The most appropriate combination is ___",
            options: [
              "lossy JPEG for everything.",
              "lossless format + standardized container + checksums + planned migration to new formats over time.",
              "plain text only, no metadata.",
              "one big encrypted blob with no documentation."
            ],
            correctAnswer: 1,
            explanation: "Long-term archival = lossless + standards + checksums + migration plan."
          }
        ]
      }
    }
  ]
};
