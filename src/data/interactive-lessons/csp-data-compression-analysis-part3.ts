export const cspDataCompressionAnalysisPart3Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca3-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 3 of 7 — Patterns & Examples**

---

## Common Compression Patterns

| Pattern | Where used |
|---------|-----------|
| **Run-length encoding** | Simple lossless; runs of repeats. |
| **Dictionary coding** (LZ77, LZW) | ZIP, GIF, PNG — replace repeated substrings with references. |
| **Huffman coding** | Common values get short codes; rare values get long codes. |
| **Frequency-domain transforms** (DCT) | JPEG, MP3 — keep big frequency components, discard small. |
| **Differential encoding** | Video — encode changes between frames. |
      `
    },
    {
      id: "cspdca3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Why does Huffman coding give shorter codes to common values?",
            options: [
              "Short codes look fancier in a table, so they are reserved for top symbols.",
              "Total bits = sum of (frequency × code length); minimizing puts short codes on common values.",
              "Rare values are unimportant and can therefore be dropped without affecting the result.",
              "It encrypts the data so that common symbols become unreadable to outside observers."
            ],
            correctAnswer: 1,
            explanation: "Information-theoretic optimum: short codes for common, long for rare."
          },
          {
            question: "Why does video compression rely on differential encoding between frames?",
            options: [
              "Adjacent video frames are bit-for-bit identical and only the first one needs to be stored.",
              "Adjacent frames are usually similar; encoding the small delta is far smaller than re-encoding each frame.",
              "It encrypts the video stream so that intermediate frames cannot be intercepted.",
              "It is simply easier to write a decoder for differential encoding than for any other scheme."
            ],
            correctAnswer: 1,
            explanation: "Inter-frame redundancy is the key win."
          }
        ]
      }
    },
    {
      id: "cspdca3-content",
      type: 'text' as const,
      content: `
## Dictionary Coding: A Mini-Walkthrough

Imagine encoding "the cat sat on the mat":

- Build a dictionary as you go.
- Replace repeated phrases with references.

After processing once, "the " might be code 0; "at" might be code 1. The compressed stream uses these short codes for repeated phrases.

This is the core idea behind ZIP, GZIP, PNG, and most modern lossless coders.

## Huffman Coding In One Picture

If a text uses A 50%, B 25%, C 12.5%, D 12.5%:

| Symbol | Code |
|--------|------|
| A | 0 |
| B | 10 |
| C | 110 |
| D | 111 |

Average bits per symbol: 0.5(1) + 0.25(2) + 0.125(3) + 0.125(3) = 1.75. Far less than 2 bits per symbol used by naive encoding.

## Lossy Frequency-Domain Coding

JPEG and MP3 use a math transform (DCT) that turns blocks of pixels (or audio samples) into **frequency components**. Big components matter to perception; small ones can be quantized away. Decompression rebuilds an approximation.

## Compression Vs. Encryption

| | Compression | Encryption |
|---|------------|-----------|
| Goal | Smaller | Confidential |
| Reverses with | Decompressor | Key |
| Output size | Smaller (or equal) | Roughly the same |
| Order | Compress THEN encrypt | (Don't reverse — encrypted data won't compress) |
      `
    },
    {
      id: "cspdca3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Replacing repeated substrings with references to a built-up dictionary is called _______ coding.

2) Giving short bit-codes to common symbols and long codes to rare ones is _______ coding.

3) Encoding only the difference between adjacent frames in a video is _______ encoding.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["dictionary", "Huffman", "differential"],
        hint1: "ZIP-style.",
        hint2: "Optimal symbol coding.",
        hint3: "Frame deltas.",
        explanation: "Dictionary coding (LZ-family), Huffman coding, differential encoding."
      }
    },
    {
      id: "cspdca3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "PNG primarily relies on ___",
            options: ["lossless dictionary coding (deflate)", "lossy DCT", "no compression", "audio sampling"]
          },
          {
            label: "JPEG primarily relies on ___",
            options: ["lossy frequency-domain (DCT) coding", "lossless RLE only", "audio sampling", "no compression"]
          },
          {
            label: "For best results, you should ___",
            options: ["compress, then encrypt", "encrypt, then compress", "never combine them", "do them in random order"]
          }
        ],
        correctAnswers: ["lossless dictionary coding (deflate)", "lossy frequency-domain (DCT) coding", "compress, then encrypt"],
        hint1: "PNG = lossless.",
        hint2: "JPEG = lossy + DCT.",
        hint3: "Compress first.",
        explanation: "PNG uses deflate (lossless). JPEG uses DCT (lossy). Compress before encrypting."
      }
    },
    {
      id: "cspdca3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Compression Patterns

- "PNG / ZIP / GIF / FLAC" → lossless.
- "JPEG / MP3 / MP4 / streaming video" → lossy.
- Differential encoding is the secret of video compression.
- Don't encrypt before compressing — it ruins the compression.
      `
    },
    {
      id: "cspdca3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team encrypts files THEN tries to ZIP them. The compressed size is barely smaller than the encrypted size. The most accurate explanation is ___",
            options: [
              "ZIP is broken and the team should switch to a different lossless compressor.",
              "encryption produces nearly random output that has no patterns for ZIP to exploit.",
              "the underlying files are simply too large for the ZIP algorithm to handle well.",
              "the underlying files are simply too small for any compression to be worthwhile."
            ],
            correctAnswer: 1,
            explanation: "Compress-before-encrypt is the standard order."
          },
          {
            question: "A streaming service serves the same movie to viewers worldwide. The largest single saving in storage / bandwidth comes from ___",
            options: [
              "serving the original raw uncompressed video file directly to every viewer.",
              "lossy video codecs (H.264 / H.265 / AV1) using inter-frame coding plus DCT.",
              "serving a lossless ZIP of the raw video file to every viewer instead of streaming.",
              "no compression at all; relying entirely on faster modern viewer-side CPUs."
            ],
            correctAnswer: 1,
            explanation: "Modern lossy video codecs deliver dramatic savings vs. raw or lossless."
          }
        ]
      }
    }
  ]
};
