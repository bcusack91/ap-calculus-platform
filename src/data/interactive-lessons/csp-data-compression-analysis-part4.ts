export const cspDataCompressionAnalysisPart4Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca4-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 4 of 7 — Connections & Interactions**

---

## Compression Connects To Other Topics

| Connection | Why |
|-----------|-----|
| Compression ↔ Internet | Smaller files = faster downloads. |
| Compression ↔ Algorithms | Each codec is an algorithm. |
| Compression ↔ Data | Compression decisions affect what analysis is possible. |
| Compression ↔ Impact | Compression enables global media — and surveillance archives. |
      `
    },
    {
      id: "cspdca4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Why does loading an image-heavy webpage feel faster on modern sites than 10 years ago?",
            options: [
              "Modern sites send uncompressed images that browsers can skip decoding.",
              "Newer lossy image formats deliver smaller files at the same visual quality.",
              "Modern image files are stored as plain-text RGB tables that browsers render directly.",
              "Browsers stopped using TCP for images and now fetch them over a faster ad-hoc protocol."
            ],
            correctAnswer: 1,
            explanation: "Better codecs + CDN delivery = faster perceived loads."
          },
          {
            question: "A program needs to compute the average over a 10 GB JSON log. The most appropriate algorithmic approach is ___",
            options: [
              "load the entire 10 GB file into memory and then iterate over it twice in place.",
              "stream through the file once, keeping only a running sum and count.",
              "sort the file in place first and then compute the average from the sorted output.",
              "compress the file first so the whole log fits into memory for one pass."
            ],
            correctAnswer: 1,
            explanation: "A single streaming pass needs only a running sum and a count, so memory use stays small no matter how large the file is."
          }
        ]
      }
    },
    {
      id: "cspdca4-content",
      type: 'text' as const,
      content: `
## Big Files Demand Streaming Algorithms

When a file doesn't fit in memory, you need algorithms that process data in **a single pass** with constant or sub-linear memory:

| Task | Streaming approach |
|------|-------------------|
| Sum / mean | Running total; divide at the end. |
| Min / max | Compare each value to running extreme. |
| Count distinct (approximate) | HyperLogLog. |
| Top-K | Heap of size K. |

This connects compression-era data sizes to algorithm design.

## Compression And The Internet

| Layer | Compression role |
|-------|-----------------|
| Image | JPEG / WebP / AVIF. |
| Video | H.264 / H.265 / AV1. |
| Web responses | gzip / Brotli on text (HTML, JS, CSS, JSON). |
| Streaming | Adaptive bitrate (multiple quality levels). |

A modern webpage may be 10× larger uncompressed.

## Compression-Aware Privacy

Two warnings:

1. Compression timing/size attacks (CRIME / BREACH) leaked info from HTTPS responses; mitigation involves disabling certain compressions over TLS.
2. "Anonymized" datasets that are then compressed don't become more anonymous — compression doesn't help privacy.
      `
    },
    {
      id: "cspdca4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An algorithm that processes data in a single pass without loading it all is called a _______ algorithm.

2) Modern web responses commonly compress text with _______ or Brotli.

3) Modern still-image formats designed to beat JPEG include WebP and _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["streaming", "gzip", "AVIF"],
        hint1: "One-pass.",
        hint2: "Common HTTP compression.",
        hint3: "AV1 image format.",
        explanation: "Streaming algorithms handle huge data. gzip / Brotli compress web text. WebP / AVIF outperform JPEG."
      }
    },
    {
      id: "cspdca4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A 10 GB log is best summarized with ___",
            options: ["a streaming algorithm with O(1) extra memory", "loading the entire file into memory first", "sorting the full file before any processing", "an exponential-time search over all lines"]
          },
          {
            label: "Web servers commonly compress responses with ___",
            options: ["gzip / Brotli", "TLS / HTTPS", "JPEG / PNG", "H.264 / AV1 video"]
          },
          {
            label: "Compression and encryption ___",
            options: ["serve different goals; both can be applied (compress THEN encrypt)", "serve the same goal of hiding data, so applying both is redundant", "serve different goals; both can be applied (encrypt THEN compress)", "both reduce file size, so combining them doubles the savings"]
          }
        ],
        correctAnswers: ["a streaming algorithm with O(1) extra memory", "gzip / Brotli", "serve different goals; both can be applied (compress THEN encrypt)"],
        hint1: "Memory budget matters.",
        hint2: "HTTP-layer compression.",
        hint3: "Different concerns.",
        explanation: "Streaming = constant memory. gzip / Brotli on web. Compress then encrypt."
      }
    },
    {
      id: "cspdca4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Compression

- "File too big for memory" → streaming algorithm.
- "Why is web fast now?" → better codecs + CDNs.
- "Order of compress / encrypt" → compress, then encrypt.
      `
    },
    {
      id: "cspdca4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A streaming service uses adaptive bitrate so users with slow connections get a lower-quality version of the same video. The technique that makes this practical is ___",
            options: [
              "lossless compression of every video, served at the same quality to every viewer.",
              "precomputing several lossy renditions at different quality levels and serving the best fit.",
              "serving the original raw uncompressed video stream to every viewer regardless of bandwidth.",
              "switching the network layer from IPv4 to IPv6 so packets can self-prioritize the right quality."
            ],
            correctAnswer: 1,
            explanation: "Adaptive bitrate streaming serves multiple lossy renditions."
          },
          {
            question: "A team plans to encrypt every log line BEFORE shipping it to a server, then ZIP the resulting archive nightly. The compressed nightly archive is barely smaller than the raw daily lines. The most direct fix is ___",
            options: [
              "ignore it, since encrypted archives are always about the same size as the raw logs.",
              "reverse the order so logs are zipped first and encrypted afterward.",
              "switch the log shipping protocol from TCP to UDP for faster nightly transfers.",
              "switch the archival format from ZIP to a lossy video codec like H.265 instead."
            ],
            correctAnswer: 1,
            explanation: "Compress before encrypt; encrypted output has no patterns."
          }
        ]
      }
    }
  ]
};
