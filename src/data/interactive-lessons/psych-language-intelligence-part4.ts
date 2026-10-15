export const psychLanguagePart4Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 4 of 7 — Intelligence Testing**

> 🔑 **Key Concept:** Early intelligence tests produced an **intelligence quotient (IQ)** by dividing mental age by chronological age. Today, IQ scores are often used to identify students for educational services. Like every psychological assessment, an intelligence test is useful only if it is **standardized**, **reliable**, and **valid** (CED 2.8.B).

### Where IQ came from

In the early 1900s, the French psychologist **Alfred Binet** was asked to find schoolchildren who needed extra help. He compared each child's performance with the typical performance of children at each age, giving a **mental age**. Binet warned that his test should be used to help children, not to rank them for life.

| Concept | Meaning | Example |
|---------|---------|---------|
| **Mental age (MA)** | The age whose typical performance a child's performance matches | A child who performs like a typical 9-year-old has an MA of 9 |
| **Chronological age (CA)** | The child's actual age | 8 years |
| **Original IQ** | $\\text{IQ} = \\frac{\\text{MA}}{\\text{CA}} \\times 100$ | $\\frac{9}{8} \\times 100 = 112.5$ |
| **Modern scoring** | Compares a person's score with others of the same age | Average = 100; standard deviation = 15 |

**Why modern tests changed the formula.** Mental age stops rising in adulthood. A 40-year-old who performs like a typical 40-year-old and a 20-year-old who does the same would get very different ratio IQs, which makes no sense. Comparing people with others their own age solves the problem.

Labeling or describing cognitive abilities and disabilities by score range is outside the scope of the AP exam (CED 2.8.B.1); focus on how scores are calculated and interpreted.
      `
    },
    {
      id: 'langu4-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Calculating and Checking Tests** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 10-year-old child answers questions at the level of a typical 12-year-old. Using the original IQ formula, what is her IQ?',
            options: [
              '83',
              '100',
              '110',
              '120'
            ],
            correctAnswer: 3,
            explanation: 'IQ = (mental age ÷ chronological age) × 100 = (12 ÷ 10) × 100 = 120. Dividing the other way, 10 ÷ 12, gives the incorrect 83.'
          },
          {
            question: 'A student takes an intelligence test on Monday and scores 115, then takes the same test two weeks later and scores 112. The similar scores are evidence of',
            options: [
              'construct validity',
              'predictive validity',
              'test-retest reliability',
              'standardization'
            ],
            correctAnswer: 2,
            explanation: 'Similar scores on the same test at two times show test-retest reliability. Consistency alone does not show that the test measures intelligence, which is a question of validity.'
          }
        ]
      }
    },
    {
      id: 'langu4-s3-psychometrics',
      type: 'text' as const,
      content: `
### 📚 The Three Psychometric Principles

All psychological assessments, including intelligence tests, should follow sound psychometric principles (CED 2.8.B.2).

| Principle | Definition | How to check it |
|-----------|-----------|-----------------|
| **Standardization** | The test is given using consistent procedures and environments | Same instructions, time limits, and quiet room for everyone; scores compared against a large sample tested the same way |
| **Reliability** | The test yields similar results each time it is given | Compare scores across two sessions or across two halves of the test |
| **Validity** | The test measures what it is designed to measure | Check whether scores behave the way the trait should and predict what they should |

**Two types of reliability**

| Type | How it works | Example |
|------|-------------|---------|
| **Test-retest** | Give the same test twice and correlate the scores | Scores in September and October correlate at +.90 |
| **Split-half** | Split one test into two halves (such as odd vs. even items) and correlate the halves | Odd-item and even-item scores correlate at +.88 |

**Two types of validity**

| Type | Question it answers | Example |
|------|-------------------|---------|
| **Construct validity** | Does the test actually measure the trait (construct) it claims to measure? | A "reasoning" test whose scores depend mostly on reading speed has weak construct validity |
| **Predictive validity** | Do scores predict a future outcome the test should predict? | Scores on a college admissions test correlate with first-year college grades |

**Reliability is necessary but not sufficient.** A bathroom scale that always reads five pounds heavy is perfectly consistent (reliable) but wrong (not valid). A test cannot be valid if it is not reliable, because random noise cannot measure anything well.

### Worked example: evaluating a new test

A company designs a 60-item "problem-solving test" for high school students.
1. **Standardization:** Every student takes it on a computer, with the same instructions and a 45-minute limit. ✔
2. **Reliability:** Scores on odd and even items correlate at +.91 (split-half), and scores a month apart correlate at +.87 (test-retest). ✔
3. **Construct validity:** Scores correlate +.80 with typing speed but only +.15 with teacher ratings of problem solving. ✘ The test seems to measure typing, not problem solving.
4. **Conclusion:** The test is standardized and reliable but not valid for its stated purpose.
      `
    },
    {
      id: 'langu4-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Principle** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Entrance-test scores correlate +.50 with students\' grades a year later: _____', options: ['Construct validity', 'Predictive validity', 'Split-half reliability', 'Standardization'] },
          { label: 'Every test taker gets the same instructions, time limit, and quiet room: _____', options: ['Construct validity', 'Predictive validity', 'Test-retest reliability', 'Standardization'] },
          { label: 'Scores on odd-numbered items closely match scores on even-numbered items: _____', options: ['Construct validity', 'Predictive validity', 'Split-half reliability', 'Standardization'] }
        ],
        correctAnswers: ['Predictive validity', 'Standardization', 'Split-half reliability'],
        hint1: 'Forecasting a future outcome.',
        hint2: 'Consistent procedures and environments.',
        hint3: 'Two halves of ONE test, given once.',
        explanation: 'Predicting later grades is predictive validity. Uniform procedures and conditions are standardization. Matching scores on two halves of the same test show split-half reliability.'
      }
    },
    {
      id: 'langu4-s5-normal-curve',
      type: 'text' as const,
      content: `
### 📚 Reading IQ Scores on the Normal Curve

Modern intelligence test scores are set so that they form a **normal (bell-shaped) distribution** with a **mean of 100** and a **standard deviation of 15**.

| Range | Distance from mean | Share of people |
|-------|-------------------|-----------------|
| 85 to 115 | within 1 SD | about 68% |
| 70 to 130 | within 2 SD | about 95% |
| 55 to 145 | within 3 SD | about 99.7% |

**Percentile rank** tells you the percentage of people who scored at or below a given score.
- A score of 100 is at about the **50th** percentile.
- A score of 115 (one SD above the mean) is at about the **84th** percentile: 50% below the mean plus 34% between 100 and 115.
- A score of 85 (one SD below the mean) is at about the **16th** percentile.

### 📚 Achievement Tests vs. Aptitude Tests (CED 2.8.D.1)

| Type | Purpose | Example |
|------|---------|---------|
| **Achievement test** | Measures what a person has already learned | An AP exam or a unit test in chemistry |
| **Aptitude test** | Predicts how well a person will perform in the future | A college admissions test used to predict first-year grades |

The difference is the **purpose**, not the format. The same kind of reading question can appear on both. An aptitude test is judged mainly by its **predictive validity**; an achievement test is judged by how well it covers what was taught.

### 🎯 AP Exam Strategy: Testing Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Reliability = validity | A test can be consistent and still measure the wrong thing | Reliable is necessary but not sufficient |
| Split-half means giving a test twice | Split-half uses one session | Test-retest = two sessions; split-half = two halves |
| Dividing CA by MA | The formula is mental age over chronological age | $\\frac{\\text{MA}}{\\text{CA}} \\times 100$ |
| Binet wanted to rank children | He built the test to find children who needed help | Later users turned it into a ranking tool |
| Aptitude tests measure nothing learned | They draw on learned skills but aim to predict | Purpose is what separates the two |

**Memory Trick:** **R**eliability = **R**epeatability. **V**alidity = measures the right **V**ariable.
      `
    },
    {
      id: 'langu4-s6-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'A 12-year-old performs like a typical 9-year-old. Using the original formula, what is his IQ? (Enter a number.)',
            answer: '75',
            acceptableAnswers: ['75.0'],
            explanation: 'IQ = (9 ÷ 12) × 100 = 75.'
          },
          {
            question: 'About what percentile rank corresponds to an IQ score of 115? (Enter a number.)',
            answer: '84',
            acceptableAnswers: ['84th', '84th percentile'],
            explanation: '115 is one standard deviation above the mean: 50% of scores fall below 100 and about 34% fall between 100 and 115, for about 84%.'
          },
          {
            question: 'What kind of test measures what a person has already learned, such as a final exam?',
            answer: 'achievement test',
            acceptableAnswers: ['achievement', 'an achievement test', 'achievement tests'],
            explanation: 'Achievement tests measure current knowledge; aptitude tests predict future performance.'
          }
        ]
      }
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
            question: 'A district uses a test to place students in advanced math classes. The test has high test-retest reliability, but scores turn out to be unrelated to how students later do in those classes. What is the main problem?',
            options: [
              'The test lacks standardization because it was given in different rooms',
              'The test lacks reliability because scores change from week to week',
              'The test lacks predictive validity for its intended purpose',
              'The test lacks split-half reliability because the halves differ'
            ],
            correctAnswer: 2,
            explanation: 'The test is consistent but fails to forecast the outcome it is used for, which is a predictive validity problem. Reliability is necessary for a useful test but does not guarantee that the scores predict anything.'
          },
          {
            question: 'About what percentage of people score between 85 and 115 on a modern IQ test?',
            options: [
              '50%',
              '68%',
              '95%',
              '99%'
            ],
            correctAnswer: 1,
            explanation: 'With a mean of 100 and a standard deviation of 15, the range 85 to 115 is within one standard deviation of the mean, which holds about 68% of scores.'
          },
          {
            question: 'A college admissions office wants a test that forecasts how well applicants will do in their first year. Which kind of test fits that goal, and how should it be judged?',
            options: [
              'An achievement test, judged by its split-half reliability',
              'An aptitude test, judged by its predictive validity',
              'An achievement test, judged by its predictive validity',
              'An aptitude test, judged by its test-retest reliability'
            ],
            correctAnswer: 1,
            explanation: 'Tests built to predict future performance are aptitude tests, and the key question for them is whether scores actually forecast later grades. Reliability is needed too, but it does not show that a test predicts anything.'
          }
        ]
      }
    }
  ]
}
