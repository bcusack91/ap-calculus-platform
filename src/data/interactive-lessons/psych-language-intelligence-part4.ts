export const psychLanguagePart4Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 4 of 7 — Intelligence Testing**

How do we MEASURE intelligence? The history of IQ testing is both fascinating and controversial. Understanding the key tests, their scoring, and the criteria for a "good" test (reliability, validity, standardization) is essential for AP Psychology.

| Concept | Definition | Key Detail |
|---------|-----------|------------|
| **Stanford-Binet** | First widely used IQ test (adapted from Binet's French test) | Originally used mental age formula |
| **Wechsler tests** | Most widely used today (WAIS for adults, WISC for children) | Gives verbal AND performance scores |
| **IQ formula (original)** | Mental Age ÷ Chronological Age × 100 | Only works for children |
| **Deviation IQ (modern)** | Compares your score to same-age peers | Mean = 100, SD = 15 |
| **Normal distribution** | IQ scores form a bell curve | 68% score 85–115; 95% score 70–130 |

### 🗣️ Real-World Example

Alfred Binet created the first intelligence test in 1905 to identify French schoolchildren who needed extra help — NOT to rank children by intelligence. He warned against using his test to label people as permanently inferior. Ironically, when Lewis Terman brought the test to America (as the Stanford-Binet), it was used to do exactly what Binet feared — rank, sort, and sometimes discriminate.

> **Why This Matters for the AP Exam:** The exam tests reliability vs. validity frequently. Remember: a test can be RELIABLE (consistent) but NOT VALID (measuring the wrong thing). A broken clock shows the same time reliably, but it's not a valid measure of time.
      `
    },
    {
      id: 'langu4-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 10-year-old child answers questions at the level of a typical 12-year-old. Using the ORIGINAL IQ formula, what is her IQ?',
            options: [
              '83',
              '100',
              '110',
              '120'
            ],
            correctAnswer: 3,
            explanation: 'Original IQ = (Mental Age ÷ Chronological Age) × 100 = (12 ÷ 10) × 100 = 120. This formula works for children but fails for adults (a 40-year-old performing like a 50-year-old doesn\'t make sense). That\'s why modern tests use deviation IQ instead.'
          },
          {
            question: 'A student takes an IQ test on Monday and scores 115, then takes the same test on Friday and scores 112. This demonstrates the test has good:',
            options: [
              'Validity — it measures what it claims to',
              'Reliability — it gives consistent results',
              'Standardization — it was normed on a large group',
              'Predictive validity — it predicts future success'
            ],
            correctAnswer: 1,
            explanation: 'Consistent scores across time = test-retest reliability. The small variation (115 vs. 112) is expected. Reliability tells us the test gives stable, repeatable results. It says nothing about whether the test is actually measuring intelligence (that\'s validity).'
          }
        ]
      }
    },
    {
      id: 'langu4-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Testing Criteria & IQ Distribution

**The Three Pillars of a Good Test**

| Criterion | Definition | Example | Test It |
|-----------|-----------|---------|---------|
| **Standardization** | Test administered under uniform conditions with norms from a representative sample | WAIS normed on thousands of Americans of all ages | Is the scoring consistent across test-givers? |
| **Reliability** | Test gives consistent, reproducible results | Same person scores similarly on Monday and Friday | Does it give the same results twice? |
| **Validity** | Test measures what it claims to measure | IQ tests predict academic success (r = .5) | Does it actually measure intelligence? |

**Types of Validity**

| Type | Question It Answers | Example |
|------|-------------------|---------|
| **Content validity** | Does the test sample the full range of the construct? | A math test that only tests algebra lacks content validity |
| **Predictive validity** | Does the test predict future performance? | IQ scores predict grades, job performance (r ≈ .5) |
| **Construct validity** | Does the test measure the theoretical construct? | Does the IQ test actually measure "intelligence" as defined? |

**The Normal Distribution of IQ**

\`\`\`
         ┌─────────────────────┐
         │    Normal Curve      │
         │      .-"""-.         │
         │    /         \\       │
         │   /           \\      │
         │  /             \\     │
         │ /               \\    │
         │/                 \\   │
    ─────┴───┬───┬───┬───┬───┴──
         55  70  85  100 115 130 145
              │   │       │   │
              │   └───────┘   │
              │    68%        │
              └───────────────┘
                    95%
\`\`\`

- **Mean = 100**, Standard Deviation = 15
- ~68% score between 85–115 (within 1 SD)
- ~95% score between 70–130 (within 2 SD)
- **Intellectual disability**: IQ below 70 + adaptive functioning deficits
- **Gifted**: Typically IQ above 130 (top ~2%)
      `
    },
    {
      id: 'langu4-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who created the first intelligence test in France in 1905?', answer: 'Binet' },
          { label: 'What is the mean IQ score on a modern IQ test?', answer: '100' },
          { label: 'A test that gives consistent results has good ___?', answer: 'reliability' }
        ]
      }
    },
    {
      id: 'langu4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Testing Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'IQ test predicts college GPA with r = .5', options: ['Content validity', 'Predictive validity', 'Reliability', 'Standardization'] },
          { label: 'Test given under identical conditions with norms from a representative sample', options: ['Content validity', 'Predictive validity', 'Reliability', 'Standardization'] },
          { label: 'Same person gets 112 on Monday and 114 on Friday', options: ['Content validity', 'Predictive validity', 'Test-retest reliability', 'Standardization'] }
        ],
        correctAnswers: ['Predictive validity', 'Standardization', 'Test-retest reliability'],
        hint1: 'Predicting future performance = predictive validity.',
        hint2: 'Uniform administration with representative norms = standardization.',
        hint3: 'Consistent scores across time = test-retest reliability.',
        explanation: 'Predicting GPA = predictive validity. Uniform conditions with norms = standardization. Consistent scores over time = test-retest reliability. These are the three pillars of a good psychological test.'
      }
    },
    {
      id: 'langu4-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Testing Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Reliability = validity | A test can be reliable but NOT valid | A scale that always reads 5 lbs too heavy is reliable but not valid |
| Binet wanted to rank children | He created the test to HELP struggling students | American psychologists (like Terman) repurposed it for ranking |
| IQ formula works for adults | Mental age ÷ chronological age fails for adults | Modern tests use deviation IQ (comparison to same-age peers) |
| IQ is fixed for life | IQ can change, especially in childhood | Intervention programs (like Head Start) can raise IQ scores |

**Memory Trick:** **R**eliability = **R**epeatability (same results again). **V**alidity = **V**alue (measures the right thing).

**Key Comparison: Stanford-Binet vs. Wechsler**

| Feature | Stanford-Binet | Wechsler (WAIS/WISC) |
|---------|---------------|----------------------|
| Developer | Terman (adapted from Binet) | David Wechsler |
| Format | Single composite score | Verbal + Performance subscales |
| Age range | 2–85+ | WAIS (adults), WISC (children) |
| Most used? | Historically first | Most widely used today |

> **AP Tip:** The Wechsler tests are MORE likely to appear on the exam because they provide separate verbal and performance scores — a key distinction the exam tests.
      `
    },
    {
      id: 'langu4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A school uses an IQ test to place students into advanced classes. The test has high reliability (r = .95) but research shows it does not actually predict academic performance. What is the problem?',
            options: [
              'The test lacks standardization — it was not normed properly',
              'The test lacks reliability — scores are inconsistent',
              'The test lacks predictive validity — it does not predict what it should',
              'The test has construct validity issues — intelligence is not real'
            ],
            correctAnswer: 2,
            explanation: 'The test is reliable (consistent scores) but lacks predictive validity — it doesn\'t predict academic performance, which is the purpose of placing students. This illustrates the key principle: reliability is NECESSARY but not SUFFICIENT for validity. A test must be both reliable AND valid to be useful.'
          },
          {
            question: 'About what percentage of the population scores between 85 and 115 on a modern IQ test?',
            options: [
              '50%',
              '68%',
              '95%',
              '99%'
            ],
            correctAnswer: 1,
            explanation: 'IQ scores follow a normal distribution with mean = 100 and SD = 15. The range 85–115 is within one standard deviation of the mean, which contains approximately 68% of the population. Within two SDs (70–130) contains ~95%.'
          }
        ]
      }
    }
  ]
}
