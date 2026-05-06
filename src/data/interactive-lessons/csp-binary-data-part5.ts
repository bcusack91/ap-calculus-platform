export const cspBinaryDataPart5Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd5-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 5 of 7 — Change Over Time**

---

## How Storage And Encoding Have Scaled

Storage costs have collapsed and bit budgets have grown. The same data that filled a hard drive in 2000 fits in a phone's photo cache today.

| Era | Typical "lots of data" |
|-----|------------------------|
| 1980s | Megabytes. ASCII text dominated. |
| 1990s | Hundreds of MB. JPEG and MP3 made images/audio mainstream. |
| 2000s | Gigabytes. DVDs, MP3 collections, digital cameras. |
| 2010s | Terabytes. Streaming video became default. |
| 2020s | Petabytes (in datacenters). 4K, 8K video, AI training datasets. |
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
            question: "Why has streaming video become practical?",
            options: [
              "Bits got smaller.",
              "Compression algorithms and bandwidth both improved dramatically.",
              "Video files no longer use bytes.",
              "Cameras stopped using color."
            ],
            correctAnswer: 1,
            explanation: "Better codecs (H.264 → H.265 → AV1) plus higher bandwidth made streaming feasible."
          },
          {
            question: "Which choice trades **smaller file size for some loss of fidelity**?",
            options: [
              "Lossless compression (e.g., ZIP, PNG).",
              "Lossy compression (e.g., JPEG, MP3).",
              "No compression.",
              "Encryption."
            ],
            correctAnswer: 1,
            explanation: "Lossy compression discards information humans rarely notice."
          }
        ]
      }
    },
    {
      id: "cspbd5-content",
      type: 'text' as const,
      content: `
## Lossless vs. Lossy

| Type | Guarantee | Examples | When to use |
|------|----------|----------|-------------|
| **Lossless** | Decoded data = original, bit for bit. | ZIP, PNG, FLAC | Documents, source code, medical imaging. |
| **Lossy** | Decoded data is approximately the original. | JPEG, MP3, MP4 | Photos, music, video where small artifacts are tolerable. |

## Why Both Exist

- **Lossless** can't compress beyond a hard math limit (entropy). For a truly random file, no lossless compression helps.
- **Lossy** can compress much further by exploiting human perception (we don't notice many high frequencies in audio or subtle color shifts in images).

A 24-bit RGB photo: ~6 MB raw, ~600 KB as JPEG (10× smaller, almost identical to the eye).

## Storage Scaling Has Changed Behavior

- Cheap storage made it normal to keep **everything** (logs, backups).
- AI training relies on **datasets** that would have been physically impossible to store in 2000.
- Cheap copies = quick spread = new questions about consent, copyright, and privacy.
      `
    },
    {
      id: "cspbd5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Compression that decodes back to a bit-for-bit identical original is called _______.

2) Compression that throws away some data to shrink the file is called _______.

3) JPEG and MP3 are examples of _______ compression.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["lossless", "lossy", "lossy"],
        hint1: "No information is lost.",
        hint2: "Some information is lost.",
        hint3: "They exploit human perception.",
        explanation: "Lossless preserves; lossy approximates. JPEG/MP3 are canonical lossy formats."
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
            label: "For a legal contract you should use ___ compression",
            options: ["lossless", "lossy", "no compression", "JPEG"]
          },
          {
            label: "For a photograph attached to a casual email, ___ compression is usually fine",
            options: ["lossy", "lossless", "no compression", "encryption"]
          },
          {
            label: "The reason lossless compression cannot shrink truly random data is the ___ limit",
            options: ["entropy", "bandwidth", "sampling", "pixel"]
          }
        ],
        correctAnswers: ["lossless", "lossy", "entropy"],
        hint1: "Every character matters.",
        hint2: "Eye-acceptable artifacts are fine.",
        hint3: "Information-theoretic minimum.",
        explanation: "Use lossless when fidelity matters. Use lossy when perceptual loss is acceptable. Entropy bounds lossless compression."
      }
    },
    {
      id: "cspbd5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Compression Choices

- "Original must be perfectly recoverable" → lossless.
- "File needs to be much smaller and small artifacts are okay" → lossy.
- "JPEG / MP3 / MP4" = lossy. "ZIP / PNG / FLAC" = lossless.
- Storage growth doesn't eliminate need for compression; it just changes the threshold of what's feasible.
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
            question: "A radiologist needs to share a chest X-ray for diagnosis. Which compression choice is most appropriate?",
            options: [
              "Lossy JPEG compression, because making the image file size as small as possible matters most.",
              "Lossless compression (e.g., DICOM with lossless coding) so subtle diagnostic features are not lost.",
              "No compression at all, since uncompressed is the only way to preserve diagnostic features in any image.",
              "Lossy MP3 compression, on the grounds that it is the most widely supported lossy format on the internet."
            ],
            correctAnswer: 1,
            explanation: "Diagnosis requires preservation of fine detail; lossless is the standard for medical imaging."
          },
          {
            question: "A streaming service must deliver a movie to millions over varying connection speeds. The most appropriate strategy is ___",
            options: [
              "send the raw uncompressed video file to every viewer regardless of their actual connection speed.",
              "use lossy compression at multiple bitrates and adapt to each viewer's available bandwidth in real time.",
              "use only lossless compression formats and force every viewer to wait for the complete file to download.",
              "send only the audio track to viewers on slower connections and skip the video portion of the movie entirely."
            ],
            correctAnswer: 1,
            explanation: "Adaptive lossy streaming (multiple bitrates) is the modern standard."
          }
        ]
      }
    }
  ]
};
