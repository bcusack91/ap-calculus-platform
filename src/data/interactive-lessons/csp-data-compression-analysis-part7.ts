export const cspDataCompressionAnalysisPart7Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca7-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Compression & Analysis

Final review.
      `
    },
    {
      id: "cspdca7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A photograph stored as a JPEG, then decoded back ___",
            options: [
              "equals the original bit-for-bit because JPEG is a lossless format like PNG.",
              "is approximately the original — JPEG is a lossy format that discards perceptual detail.",
              "becomes plain text consisting of the RGB value of every pixel in the image.",
              "is encrypted with a symmetric cipher whose key is embedded in the file header."
            ],
            correctAnswer: 1,
            explanation: "JPEG is lossy."
          },
          {
            question: "A 100 KB plaintext file losslessly compressed to a 30 KB ZIP and decompressed ___",
            options: [
              "equals the original 100 KB plaintext bit-for-bit because ZIP is a lossless format.",
              "is approximately the original because ZIP discards detail to save space.",
              "is encrypted with a symmetric cipher whose key is embedded in the ZIP header.",
              "is corrupted because losslessly compressing plaintext can never round-trip cleanly."
            ],
            correctAnswer: 0,
            explanation: "Lossless round-trip = identity."
          }
        ]
      }
    },
    {
      id: "cspdca7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Lossless | Decoded data = original. |
| Lossy | Decoded ≈ original. |
| Entropy | Information-theoretic minimum size for lossless coding. |
| RLE | Run-length encoding. |
| Dictionary coding | LZ-family; replace repeated substrings with references. |
| Huffman coding | Common symbols → short codes. |
| DCT | Discrete cosine transform; basis of JPEG / MP3. |
| Differential encoding | Encode deltas (used in video). |
| Adaptive bitrate | Multiple quality levels for streaming. |

## Common Pitfalls

- Saying "compression makes data smaller" without distinguishing lossless vs lossy.
- Encrypting before compressing.
- Treating storage as the only constraint (bandwidth often matters more).
- Using lossy formats for archival or medical records.
- Ignoring openness / licensing of codecs.
      `
    },
    {
      id: "cspdca7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) JPEG is _______ compression.

2) PNG is _______ compression.

3) Encrypting before compressing usually makes the result _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["lossy", "lossless", "larger"],
        hint1: "Photos.",
        hint2: "Web graphics.",
        hint3: "No patterns to exploit.",
        explanation: "JPEG = lossy, PNG = lossless. Encrypted data has no compressible patterns."
      }
    },
    {
      id: "cspdca7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A 10× size reduction with imperceptible quality loss describes ___",
            options: ["typical JPEG vs raw RGB", "lossless ZIP on random data", "TLS encryption", "IPv6 routing"]
          },
          {
            label: "Adaptive bitrate streaming relies on ___",
            options: ["precomputing multiple lossy renditions and serving the best fit per viewer", "lossless only", "no compression", "one fixed quality"]
          },
          {
            label: "A truly random file ___",
            options: ["cannot be losslessly compressed below its entropy bound", "always compresses 10×", "compresses to zero bytes", "cannot be encrypted"]
          }
        ],
        correctAnswers: ["typical JPEG vs raw RGB", "precomputing multiple lossy renditions and serving the best fit per viewer", "cannot be losslessly compressed below its entropy bound"],
        hint1: "Photo savings.",
        hint2: "Multiple bitrates.",
        hint3: "Entropy bound.",
        explanation: "JPEG ≈ 10× over raw. Adaptive streaming = many bitrates. Random data resists lossless compression."
      }
    },
    {
      id: "cspdca7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Lossless vs lossy is the #1 distinction.
- Compress THEN encrypt.
- Different uses → different formats. Memorize: PNG/ZIP/FLAC = lossless; JPEG/MP3/MP4 = lossy.
- Adaptive bitrate is the answer to "how does streaming work for everyone".
      `
    },
    {
      id: "cspdca7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user worries that JPEG-saving a photo, opening it, and re-saving it causes \"generation loss\". The most accurate explanation is ___",
            options: [
              "no — JPEG is a lossless format and round-tripping always preserves the original.",
              "yes — each lossy re-encode discards more detail; edit lossless and export to JPEG once.",
              "yes — JPEG actually adds random visual noise on purpose every time the file is saved.",
              "no — file extensions are immutable so the data inside the JPEG never changes either."
            ],
            correctAnswer: 1,
            explanation: "Repeated lossy re-encoding accumulates artifacts; edit lossless, export lossy."
          },
          {
            question: "A team needs to send 10 TB of mostly-text logs from a remote site to a data center. The most reasonable plan is ___",
            options: [
              "ship the logs as-is over the network and accept the multi-day transfer time required.",
              "compress with gzip / zstd before transfer; ship over a reliable channel; verify checksums.",
              "encrypt the logs first and then compress, accepting that the compressed output is barely smaller.",
              "switch the transport from TCP to UDP without compression to use less server-side memory."
            ],
            correctAnswer: 1,
            explanation: "Compress text first, ship reliably, verify integrity."
          },

        ]
      }
    }
  ]
};
