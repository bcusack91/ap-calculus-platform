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

## The Lossless Pattern: Replace Repeats With Short Codes

Most lossless compression works by finding **redundancy** (repeated patterns) and replacing each repeat with something shorter. A **key** records what each short code stands for, so the original can be rebuilt exactly.

| Original | Key | Compressed |
|----------|-----|-----------|
| AAAAABBB | run-length: count + letter | 5A3B |
| the cat sat on the mat | # = "at" | the c# s# on the m# |

The compressed version uses fewer characters (fewer bits), but **no information is lost**: anyone with the key can decode it back to the original.
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
            question: "A text was compressed with the key # = \"ing\". What does \"s#er br#s\" decode to?",
            options: [
              "sings brings",
              "singer brings",
              "singer brigs",
              "sing brings"
            ],
            correctAnswer: 1,
            explanation: "Replace each # with \"ing\": s + ing + er = singer, br + ing + s = brings."
          },
          {
            question: "Why can replacing repeated patterns with short codes make a file smaller without losing information?",
            options: [
              "A key records what each code stands for, so decoding rebuilds the original.",
              "The decoder guesses any missing letters from the words around them in the text.",
              "The least common letters are removed, because readers can usually infer them.",
              "Each character's code is rounded to a nearby value that needs fewer bits."
            ],
            correctAnswer: 0,
            explanation: "The key preserves exactly what each code means, so decoding rebuilds the original; the saving comes from the redundancy in the data."
          }
        ]
      }
    },
    {
      id: "cspdca3-content",
      type: 'text' as const,
      content: `
## Worked Example: Counting the Savings

Original: **the cat sat on the mat** (22 characters, counting spaces).

Using the key # = "at", the compressed text is **the c# s# on the m#** (19 characters). Each of the three "at" pairs became one character, saving 3 characters.

Add a second code, @ = "the ": the text becomes **@c# s# on @m#** (13 characters). More redundancy removed means more savings, but data with few repeats (like a random string) leaves almost nothing to replace.

## Choosing Lossless or Lossy

The AP exam asks you to compare compression options and pick the best one **for a particular situation**:

| Situation | Better choice | Why |
|-----------|---------------|-----|
| A program's source code, a contract, a bank record | Lossless | The original must be rebuilt exactly. |
| A medical scan used for diagnosis | Lossless | Quality is maximally important. |
| A photo for a social media post | Lossy | Size matters more than tiny detail. |
| A video streamed to a phone on a slow connection | Lossy | Minimizing transmission time matters most. |

> 🔑 Lossy algorithms can usually shrink data **more** than lossless ones. Choose lossless when quality or exact reconstruction is maximally important; choose lossy when minimizing size or transmission time is maximally important.
      `
    },
    {
      id: "cspdca3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When the original data must be rebuilt exactly, choose _______ compression.

2) When minimizing file size or transmission time matters most, choose _______ compression.

3) Using the key # = "at", the compressed word "c#" decodes to _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["lossless", "lossy", "cat"],
        hint1: "Nothing is lost.",
        hint2: "Some detail is given up.",
        hint3: "Replace # with \"at\".",
        explanation: "Exact reconstruction → lossless. Smallest size or fastest transfer → lossy. c + at = cat."
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
            label: "A program's source code emailed to a teammate should be compressed with ___",
            options: ["lossless compression", "lossy compression", "lossy, at low quality", "lossy, at high quality"]
          },
          {
            label: "Compared with data that has few repeats, data with many repeated patterns usually compresses ___",
            options: ["more", "less", "the same amount", "not at all"]
          },
          {
            label: "Decompressing a photo that was saved with lossy compression gives ___",
            options: ["an approximation of the original", "the exact original, bit for bit", "a file larger than the original", "only the photo's metadata"]
          }
        ],
        correctAnswers: ["lossless compression", "more", "an approximation of the original"],
        hint1: "One changed character can break a program.",
        hint2: "More redundancy, more to replace.",
        hint3: "Lossy discards detail for good.",
        explanation: "Code must be rebuilt exactly, so lossless. More redundancy allows more size reduction. Lossy compression can only rebuild an approximation."
      }
    },
    {
      id: "cspdca3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Compression Patterns

- Lossless = find repeats, replace with shorter codes, keep a key. Nothing is lost.
- Savings depend on the data's redundancy and on the algorithm applied.
- Fewer bits does not necessarily mean less information.
- "Which algorithm is best?" always depends on the context: exact reconstruction → lossless; smallest size / fastest transfer → lossy.
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
            question: "Algorithm X shrinks a video by 40% and allows exact reconstruction. Algorithm Y shrinks it by 90% but allows only an approximation. A news site wants viewers on slow connections to start watching quickly. Which choice is better, and why?",
            options: [
              "X, because exact reconstruction always matters more than size.",
              "Y, because minimizing transmission time matters most here.",
              "X, because lossless methods always produce the smaller files.",
              "Y, because lossy methods let viewers rebuild the exact original."
            ],
            correctAnswer: 1,
            explanation: "When transmission time is maximally important, the lossy algorithm's much larger size reduction is worth the small loss of quality."
          },
          {
            question: "A student compresses a 1,000-character essay with a lossless algorithm and gets a 600-character file. Which statement must be true?",
            options: [
              "The compressed file holds less information than the essay.",
              "Decompressing it will reproduce the original essay exactly.",
              "Compressing it a second time will shrink it to 360 characters.",
              "Some rarely used words were removed to save space in the file."
            ],
            correctAnswer: 1,
            explanation: "Lossless compression guarantees complete reconstruction; fewer bits does not mean less information."
          }
        ]
      }
    }
  ]
};
