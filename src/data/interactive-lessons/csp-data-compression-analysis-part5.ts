export const cspDataCompressionAnalysisPart5Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca5-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 5 of 7 — Change Over Time**

---

## How Compression Has Evolved

| Era | Defining codec |
|-----|---------------|
| 1980s | RLE, LZW (used in GIF). |
| 1990s | JPEG for images, MP3 for audio, MPEG-2 for video. |
| 2000s | H.264 (ubiquitous video), AAC (audio). |
| 2010s | WebP, HEVC (H.265). |
| 2020s | AV1, AVIF — open, royalty-free, even better quality-per-bit. |
      `
    },
    {
      id: "cspdca5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "AV1 / AVIF are notable for being ___",
            options: [
              "proprietary closed standards licensed only to large corporate vendors.",
              "open and royalty-free, with high compression efficiency per bit.",
              "lossless-only formats, always preserving every original input pixel.",
              "audio-only codecs designed primarily to compete with MP3 in music apps."
            ],
            correctAnswer: 1,
            explanation: "AV1/AVIF emphasize openness and efficiency."
          },
          {
            question: "Modern video calls use codecs that perform best when ___",
            options: [
              "the camera moves rapidly and the frame content changes constantly between frames.",
              "the camera is mostly still — most pixels barely change, so differential encoding wins.",
              "all incoming frames consist of pure random noise rather than recognizable scene content.",
              "the network connection is encrypted by TLS rather than running in plaintext."
            ],
            correctAnswer: 1,
            explanation: "Static scenes maximize inter-frame compression efficiency."
          }
        ]
      }
    },
    {
      id: "cspdca5-content",
      type: 'text' as const,
      content: `
## Codec Generations Roughly Halve File Sizes

| Codec | Era | Relative size for same quality |
|-------|-----|-------------------------------|
| MPEG-2 | 1990s | 1× |
| H.264 | 2000s | ~0.5× |
| H.265 | 2010s | ~0.3× |
| AV1 | 2020s | ~0.2× |

This is why streaming 4K to a phone became feasible.

## Open vs. Proprietary Codecs

Many great codecs (H.264, H.265) are encumbered by patents — companies pay licensing fees. AV1 / Opus / AVIF emerged as open alternatives, accepted by major browsers and platforms.

## ML-Era Compression

Modern research uses neural networks to learn compression strategies for specific domains (medical imaging, faces, speech). These can sometimes outperform hand-designed codecs but raise new questions about model bias and reproducibility.

## Compression And Storage Cost

Even as storage gets cheaper, compression remains crucial because **bandwidth** scales differently. A user's phone might have 1 TB of storage but only a few hundred MB of monthly mobile data.
      `
    },
    {
      id: "cspdca5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An open, royalty-free modern video codec is _______.

2) A modern still-image format derived from AV1 is _______.

3) Compression matters most when _______ is constrained, even if storage is cheap.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["AV1", "AVIF", "bandwidth"],
        hint1: "Three letters.",
        hint2: "AV1 + image.",
        hint3: "Network capacity.",
        explanation: "AV1 = video codec. AVIF = AV1-derived image format. Bandwidth, not storage, often constrains."
      }
    },
    {
      id: "cspdca5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Each generation of video codec has roughly ___ size for the same visual quality",
            options: ["halved", "doubled", "tripled", "kept identical"]
          },
          {
            label: "Open-codec adoption matters because ___",
            options: ["it avoids licensing fees and locks-in", "it makes compression worse", "it requires payment", "it removes encryption"]
          },
          {
            label: "A neural-net learned codec for medical images may ___",
            options: ["outperform general-purpose codecs but raises bias / reproducibility questions", "always work for every domain", "replace lossless completely", "be the same as MP3"]
          }
        ],
        correctAnswers: ["halved", "it avoids licensing fees and locks-in", "outperform general-purpose codecs but raises bias / reproducibility questions"],
        hint1: "~2× efficiency per generation.",
        hint2: "Open = no fees.",
        hint3: "Domain-specific gains.",
        explanation: "Codecs roughly halve sizes per generation. Open codecs avoid lock-in. ML codecs can win — with caveats."
      }
    },
    {
      id: "cspdca5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Compression Evolution

- "Why is streaming HD over a phone feasible?" → modern lossy codecs + CDNs + adaptive bitrate.
- "Open vs. proprietary codec" → openness avoids licensing and lock-in.
- ML compression is real but raises bias / reproducibility concerns.
      `
    },
    {
      id: "cspdca5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A video platform must serve the same movie to a 4G phone and a 4K TV. The most appropriate strategy is ___",
            options: [
              "serve only one fixed quality level to every viewer regardless of device or network.",
              "precompute multiple bitrates and resolutions and use adaptive streaming for the best fit.",
              "serve a lossless original to every viewer and let each device discard what it cannot use.",
              "switch the streaming pipeline to use no compression at all and rely on raw bandwidth."
            ],
            correctAnswer: 1,
            explanation: "Adaptive bitrate is the modern delivery standard."
          },
          {
            question: "A research team uses an ML model to compress chest X-rays. The most appropriate validation is ___",
            options: [
              "ship the model with no validation since the compression ratio is the only metric.",
              "compare diagnostic accuracy on decompressed images vs. originals across diverse demographics.",
              "check only the resulting file size and treat any reduction as an acceptable result.",
              "check only that the encrypted output of the model is roughly the same length each time."
            ],
            correctAnswer: 1,
            explanation: "Domain-specific compression must be validated for the domain's outcomes — and across demographics."
          }
        ]
      }
    }
  ]
};
