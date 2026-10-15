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
              "is approximately the original, because JPEG is a lossy format that discards detail.",
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
| Lossless | Reduces bits while guaranteeing the original can be rebuilt exactly. |
| Lossy | Reduces bits much more, but only an approximation can be rebuilt. |
| Redundancy | Repetition in data; more redundancy allows more compression. |
| Information | Facts and patterns extracted from data. |
| Metadata | Data about data; changing it does not change the primary data. |
| Correlation | Two variables change together; this does not prove causation. |
| Cleaning | Making data uniform without changing their meaning. |
| Bias | Created by the type or source of data; more data does not remove it. |
| Filtering / transforming | Keeping only matching elements / changing every element. |
| Scalability | A system's capacity to grow to meet new demands. |

## Common Pitfalls

- Saying "compression makes data smaller" without distinguishing lossless vs lossy.
- Thinking fewer bits always means less information.
- Treating a correlation as proof of cause.
- Believing more data from the same source will remove bias.
- Using lossy formats where exact reconstruction matters (source code, legal or medical records).
      `
    },
    {
      id: "cspdca7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) JPEG is _______ compression.

2) PNG is _______ compression.

3) Data about data, such as the date a photo was taken, are called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["lossy", "lossless", "metadata"],
        hint1: "Photos.",
        hint2: "Web graphics.",
        hint3: "\"Meta\" means about.",
        explanation: "JPEG = lossy, PNG = lossless. Metadata describe other data."
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
            label: "Compared with lossless compression, lossy compression can usually reduce file size ___",
            options: ["more", "less", "by the same amount", "only for text"]
          },
          {
            label: "A survey has some blank answers. Those responses are ___",
            options: ["incomplete data", "invalid data", "metadata", "biased data"]
          },
          {
            label: "Collecting much more data from the same biased source ___",
            options: ["leaves the bias in place", "removes the bias entirely", "turns correlation into causation", "makes the data uniform"]
          }
        ],
        correctAnswers: ["more", "incomplete data", "leaves the bias in place"],
        hint1: "Lossy keeps only an approximation.",
        hint2: "Something is missing.",
        hint3: "The source is still the problem.",
        explanation: "Lossy compression usually shrinks data more than lossless. Blank answers are incomplete data. Bias is not eliminated by collecting more data."
      }
    },
    {
      id: "cspdca7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Lossless vs lossy is the #1 compression distinction; pick based on the situation.
- Correlation ≠ causation, and one data source is often not enough.
- Metadata help find, organize, and manage data.
- Data challenges: cleaning, incomplete, invalid, combining sources; bias needs a better source, not more data.
- Programs extract information by transforming, filtering, combining, and visualizing data.
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
            question: "A user worries that saving a photo as a JPEG, opening it, and saving it again as a JPEG lowers its quality each time. The most accurate response is ___",
            options: [
              "no — JPEG is a lossless format and repeated saving always preserves the original.",
              "yes — each lossy save discards more detail, so edit a lossless copy and export once.",
              "yes — JPEG adds random visual noise on purpose every time the file is saved again.",
              "no — a file's name never changes, so the data inside the JPEG never changes either."
            ],
            correctAnswer: 1,
            explanation: "Each lossy compression keeps only an approximation, so repeated saves lose more detail; keeping a lossless original avoids this."
          },
          {
            question: "A team needs to send 10 TB of mostly-text logs from a remote site to a data center. The most reasonable plan is ___",
            options: [
              "ship the logs as-is, wait out the multi-day transfer, and spot-check a few files.",
              "compress losslessly, since repetitive text shrinks a lot and every line can be rebuilt.",
              "compress with a lossy method, since the smallest possible file always matters most.",
              "delete half of the log lines at random so the transfer takes only half as long."
            ],
            correctAnswer: 1,
            explanation: "Repetitive text has lots of redundancy, so lossless compression shrinks it a great deal while guaranteeing every log line can be rebuilt."
          },

        ]
      }
    }
  ]
};
