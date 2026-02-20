export const mcatTestDayPart1Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 1 of 7 — MCAT Structure & Timing**

### MCAT Exam Structure

| Section | Questions | Time | Time per Question |
|---------|----------|------|------------------|
| **Chem/Phys** (CP) | 59 | 95 min | ~1.6 min |
| Break | — | 10 min | — |
| **CARS** | 53 | 90 min | ~1.7 min |
| Break | — | 30 min | — |
| **Bio/Biochem** (BB) | 59 | 95 min | ~1.6 min |
| Break | — | 10 min | — |
| **Psych/Soc** (PS) | 59 | 95 min | ~1.6 min |

**Total**: 230 questions, 6 hours 15 minutes (test time), ~7.5 hours total (with breaks)

### Scoring

- Each section: 118-132 (midpoint 125)
- Total: 472-528 (midpoint 500)
- Scaled score based on percentile
- **508**: ~75th percentile (competitive for most MD schools)
- **515**: ~90th percentile (competitive for top schools)
- **520+**: ~97th percentile (elite)`
    },
    {
      id: 'td1-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `The total number of questions on the MCAT is:`,
            options: [`230 questions across 4 sections`, `200 questions`, `300 questions`, `180 questions`],
            correctAnswer: 0,
            explanation: `CP: 59, CARS: 53, BB: 59, PS: 59 = 230 total questions. The exam takes about 7.5 hours including breaks. Knowing the structure reduces test-day anxiety.`
          }
        ]
      }
    },
    {
      id: 'td1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- 4 sections: CP (59), CARS (53), BB (59), PS (59) = 230 questions
- ~1.6-1.7 minutes per question — time management is critical
- 508 = 75th %ile, 515 = 90th %ile, 520+ = 97th %ile
- Take EVERY break — even 30 seconds of rest helps`
    }
  ]
};
