export const apStatsCollectingDataPart3Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p3-intro',
      type: 'text' as const,
      content: `# ⚠️ Sources of Bias

**Part 3 of 7 — What Can Go Wrong**

---

### Types of Bias

| Bias Type | What Goes Wrong | Example |
|-----------|----------------|---------|
| **Selection bias** | Some members of the population are systematically excluded | Phone survey excludes people without phones |
| **Nonresponse bias** | Selected individuals don't participate | Mail survey — people who respond may differ from those who don't |
| **Response bias** | Respondents give inaccurate answers | Wording of questions influences answers |
| **Voluntary response bias** | Only people with strong opinions respond | Online polls attract extremists |
| **Undercoverage** | Part of the population has no chance of being selected | Using a phone book misses unlisted numbers |

> 🔑 **A biased sampling method will produce biased results no matter how large the sample.**

---

### Reducing Bias

- Use **random selection** to avoid selection bias
- Follow up with **nonrespondents** to reduce nonresponse bias
- Use **neutral wording** and **anonymous surveys** to reduce response bias
- Match sample demographics to population demographics`
    },
    {
      id: 'apstats-collectingdata-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Bias Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A radio station asks listeners to call in and vote on an issue. This suffers from:',
            options: ['Selection bias', 'Voluntary response bias', 'Nonresponse bias', 'Undercoverage'],
            correctAnswer: 1,
            explanation: 'Only listeners who feel strongly will call — voluntary response bias.'
          },
          {
            question: 'Increasing sample size will fix:',
            options: ['Voluntary response bias', 'Selection bias', 'Neither — bias is not reduced by larger samples', 'Both types of bias'],
            correctAnswer: 2,
            explanation: 'Bias is a systematic error in the sampling method. Larger samples reduce variability but NOT bias.'
          },
          {
            question: 'A survey asks "Don\'t you agree that taxes are too high?" This introduces:',
            options: ['Selection bias', 'Response bias', 'Nonresponse bias', 'Undercoverage'],
            correctAnswer: 1,
            explanation: 'Leading question wording pushes respondents toward a particular answer — response bias.'
          }
        ]
      }
    },
    {
      id: 'apstats-collectingdata-p3-input',
      type: 'input-boxes' as const,
      content: `
**Bias Analysis** 🧮

**1)** A survey is conducted at a shopping mall on a Wednesday afternoon. Name the type of bias this introduces. (selection, response, nonresponse, or voluntary response)

**2)** Only 15 of 100 mailed surveys are returned. This is an example of what type of bias?

**3)** True or false: Doubling the sample size from 500 to 1000 will eliminate bias. (true or false)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['selection', 'nonresponse', 'false'],
        hint1: 'Who shops at a mall on Wednesday afternoon? Not everyone.',
        hint2: '85% did not respond — are they different from those who did?',
        hint3: 'Bias is systematic error, not random error.',
        explanation: '1) Selection bias — excludes working people. 2) Nonresponse bias. 3) False — bias persists regardless of sample size.'
      }
    }
  ]
};
