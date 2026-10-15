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
              'Lossy — it saves the most storage space',
              'Lossless — no diagnostic detail can be lost',
              'None — X-rays are already as small as possible',
              'Either — both keep enough detail for diagnosis'
            ],
            correctAnswer: 1,
            explanation: 'Medical images require lossless compression because any lost detail could affect diagnosis. Lossy compression removes data permanently, which is unacceptable for medical records.'
          },
          {
            question: 'A music streaming service wants to minimize bandwidth. Which compression is most appropriate?',
            options: [
              'Lossless — listeners expect every bit of the studio master',
              'Lossy — most listeners cannot hear the frequencies removed',
              'None — compressed audio cannot be streamed in real time',
              'Run-length encoding — music has long runs of identical samples'
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
Programs extract information from data with a few basic processes:
- **Transforming**: change every element (double every value, add a parent's email to every student record)
- **Filtering**: keep only the elements that meet a condition (only scores above 80)
- **Combining or comparing**: add up a list, or find the student with the highest GPA
- **Visualizing**: turn the data into a chart or graph

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
            options: ['Lossy', 'Lossless', 'No compression', 'Reversible']
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
- Run-length encoding is a simple example of lossless compression; the exam asks you to compare lossless and lossy, not to name specific algorithms
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
              'Quality improves, because the second pass corrects artifacts',
              'Quality degrades further, since more data is discarded each round',
              'Quality stays the same, since all loss happens in the first pass',
              'The file is restored to its original quality on decompression'
            ],
            correctAnswer: 1,
            explanation: 'Each round of lossy compression removes more data. Compressing an MP3 file again as a lower-bitrate MP3 removes additional frequencies. Quality only goes down, never up.'
          },
          {
            question: 'Run-length encoding converts "AAAABBCC" to "4A2B2C". Which input would NOT benefit from this technique?',
            options: [
              'ZZZZZZZZZ (nine Zs in a row)',
              'ABCDEFGH (no repeated characters)',
              'RRRRRGGGGGBBBBB (three runs of five)',
              'XXXXXXXXXX (ten Xs in a row)'
            ],
            correctAnswer: 1,
            explanation: 'ABCDEFGH has no repeated consecutive characters. Run-length encoding would produce 1A1B1C1D1E1F1G1H — actually LARGER than the original. RLE works best with long runs of repeated values.'
          }
        ]
      }
    }
  ]
};
