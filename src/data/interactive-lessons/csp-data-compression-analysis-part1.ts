export const cspDataCompressionAnalysisPart1Data = {
  topicSlug: 'csp-data-compression-analysis',
  sections: [
    {
      id: 'cspdca1-intro',
      type: 'text' as const,
      content: `
# 📦 Data Compression & Analysis

**Part 1 of 7 — Lossless vs Lossy, Compression Techniques, and Data Analysis**

---

## Why Compress Data?

Smaller files mean:
- Faster transmission over networks
- Less storage space needed
- Lower bandwidth usage
- Faster loading for users

---

## Lossless vs Lossy Compression

| Type | Data Loss? | Quality | Smaller? | Use Cases |
|------|-----------|---------|----------|-----------|
| **Lossless** | No — original perfectly restored | Identical to original | Moderate reduction | Text, code, spreadsheets, medical images |
| **Lossy** | Yes — some data permanently removed | Slightly reduced | Much smaller | Photos (JPEG), music (MP3), video (MP4) |

### Lossless Example: Run-Length Encoding
\`\`\`
Original:  AAABBBCCDDDDDD
Compressed: 3A3B2C6D
\`\`\`
The original can be perfectly reconstructed from the compressed version.

### Lossy Example: JPEG Compression
A photograph has millions of color values. JPEG removes subtle color differences that human eyes cannot easily detect. The file shrinks dramatically, but the removed data cannot be recovered.

> 🔑 **Lossless** = perfect reconstruction. **Lossy** = smaller file but permanent data loss. Choose based on whether quality loss is acceptable.
      `
    },
    {
      id: 'cspdca1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A hospital stores digital X-ray images. Which compression type should they use?',
            options: [
              'Lossy — to save storage space',
              'Lossless — medical images cannot lose any detail',
              'No compression needed',
              'Either type works equally well'
            ],
            correctAnswer: 1,
            explanation: 'Medical images require lossless compression because any lost detail could affect diagnosis. Lossy compression removes data permanently, which is unacceptable for medical records.'
          },
          {
            question: 'A music streaming service wants to minimize bandwidth. Which compression is most appropriate?',
            options: [
              'Lossless — to preserve perfect audio quality',
              'Lossy — most listeners cannot hear the removed frequencies, and files are much smaller',
              'No compression — music must be uncompressed',
              'Run-length encoding'
            ],
            correctAnswer: 1,
            explanation: 'Lossy compression (like MP3) removes frequencies most people cannot hear, dramatically reducing file size. For streaming where bandwidth matters, lossy is the standard choice.'
          }
        ]
      }
    },
    {
      id: 'cspdca1-content',
      type: 'text' as const,
      content: `
## Data Analysis and Visualization

### Extracting Patterns from Data
When working with large datasets, visualization reveals patterns that raw numbers cannot.

| Visualization | Best For |
|--------------|---------|
| **Bar chart** | Comparing categories |
| **Line graph** | Showing trends over time |
| **Scatter plot** | Showing relationships between two variables |
| **Pie chart** | Showing parts of a whole |
| **Histogram** | Showing frequency distributions |

### Filtering and Transforming Data
\`\`\`
// Filter: Keep only rows where score > 80
// Sort: Order by date ascending
// Aggregate: Calculate average score per student
\`\`\`

## Interpreting Results
- Look for **trends** (increasing, decreasing, stable)
- Identify **outliers** (values far from the norm)
- Check for **clusters** (groups of similar data points)
- Be cautious of **bias** in data collection

### Challenges with Large Datasets
- **Storage**: Require significant space
- **Privacy**: May contain sensitive personal information
- **Accuracy**: Errors are amplified at scale
- **Bias**: If collection methods are biased, conclusions will be skewed
      `
    },
    {
      id: 'cspdca1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Compression that can perfectly restore the original data is called _______ compression.

2) MP3 audio files use _______ compression, permanently removing some frequencies.

3) A chart that shows the relationship between two variables using dots is called a _______ plot.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['lossless', 'lossy', 'scatter'],
        hint1: 'No data is lost.',
        hint2: 'Some data is lost permanently.',
        hint3: 'Points are scattered across the graph.',
        explanation: 'Lossless = perfect reconstruction. MP3 = lossy. Two-variable dot chart = scatter plot.'
      }
    },
    {
      id: 'cspdca1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Compression** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ZIP files use ___ compression (original files perfectly restored)',
            options: ['Lossless', 'Lossy', 'No compression', 'Hybrid']
          },
          {
            label: 'JPEG images use ___ compression (some color detail permanently removed)',
            options: ['Lossy', 'Lossless', 'No compression', 'Encrypted']
          },
          {
            label: 'A line graph is best for showing ___',
            options: ['Trends over time', 'Parts of a whole', 'Individual data points', 'Category comparisons']
          }
        ],
        correctAnswers: ['Lossless', 'Lossy', 'Trends over time'],
        hint1: 'ZIP must restore files perfectly.',
        hint2: 'JPEG sacrifices quality for size.',
        hint3: 'X-axis is usually time.',
        explanation: 'ZIP = lossless. JPEG = lossy. Line graph = trends over time.'
      }
    },
    {
      id: 'cspdca1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Data Compression & Analysis

- Know the difference: **lossless** (ZIP, PNG) vs **lossy** (JPEG, MP3, MP4)
- Lossless for critical data (medical, legal, code). Lossy for media where small quality loss is acceptable
- Run-length encoding is the lossless technique the AP exam expects you to understand
- Data analysis questions test your ability to interpret visualizations and identify patterns
- **Correlation does not imply causation** — always consider confounding variables
- Large datasets can reveal patterns but also amplify errors and privacy concerns
      `
    },
    {
      id: 'cspdca1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A file is compressed using lossy compression, then compressed again using lossy compression. What happens to quality?',
            options: [
              'Quality improves because compression is applied twice',
              'Quality degrades further because more data is permanently removed in each round',
              'Quality stays the same after the first compression',
              'The file returns to its original quality'
            ],
            correctAnswer: 1,
            explanation: 'Each round of lossy compression removes more data. Compressing an MP3 file again as a lower-bitrate MP3 removes additional frequencies. Quality only goes down, never up. This is called generation loss.'
          },
          {
            question: 'Run-length encoding converts "AAAABBCC" to "4A2B2C". Which input would NOT benefit from this technique?',
            options: [
              'ZZZZZZZZZ (nine Zs)',
              'ABCDEFGH (all different characters)',
              'RRRRRGGGGG (repeated characters)',
              'XXXXXXXXXX (ten Xs)'
            ],
            correctAnswer: 1,
            explanation: 'ABCDEFGH has no repeated consecutive characters. Run-length encoding would produce 1A1B1C1D1E1F1G1H — actually LARGER than the original. RLE works best with long runs of repeated values.'
          }
        ]
      }
    }
  ]
};
