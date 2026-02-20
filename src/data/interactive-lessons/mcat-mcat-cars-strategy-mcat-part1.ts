export const mcatCarsStratPart1Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs1-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 1 of 7 — Understanding the CARS Section**

### What is CARS?

- **C**ritical **A**nalysis and **R**easoning **S**kills
- 53 questions, 90 minutes (~9 passages, ~6 questions each)
- Passages from humanities and social sciences (NO science content!)
- Tests reading comprehension, not knowledge

### CARS is Different from Science Sections

| Science Sections | CARS |
|-----------------|------|
| Some outside knowledge needed | EVERYTHING is in the passage |
| Data/figure interpretation | Text interpretation only |
| Can study specific content | Cannot "study" — must develop skills |

### The Three Question Types

1. **Foundations of Comprehension** (~30%): What did the author say?
2. **Reasoning Within the Text** (~30%): Why did the author say it? How does the argument work?
3. **Reasoning Beyond the Text** (~40%): How does it apply? What can we infer?

### Timing Strategy

- **~10 minutes per passage** (read + answer)
- First pass reading: 4-5 minutes
- Questions: 5-6 minutes
- Flag and move on — don't get stuck on one question!`
    },
    {
      id: 'cs1-quiz1',
      type: 'multiple-choice' as const,
      content: '**CARS Fundamentals** 🎯',
      exercise: {
        questions: [
          {
            question: 'In CARS, when a question asks "Which of the following can be inferred from the passage?", it is testing:',
            options: ['Reasoning Beyond the Text — you must draw a conclusion not explicitly stated', 'Foundations of Comprehension — just find the answer in the text', 'Reasoning Within the Text — analyzing argument structure', 'Outside knowledge of the topic'],
            correctAnswer: 0,
            explanation: 'Inference questions require you to go beyond what is explicitly stated and draw a logical conclusion. The answer is supported by the passage but not directly stated.'
          },
          {
            question: 'A student runs out of time on CARS with 8 questions remaining. The best strategy is:',
            options: ['Quickly guess on all 8 — there is no penalty for wrong answers', 'Leave them blank', 'Rush through the remaining passage', 'Go back and change previous answers'],
            correctAnswer: 0,
            explanation: 'There is NO penalty for guessing on the MCAT. Always fill in an answer for every question. With 8 left, pick one letter and bubble them all — you should get ~2 right by chance.'
          }
        ]
      }
    },
    {
      id: 'cs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- CARS tests critical reading, not content knowledge
- ~10 min per passage (53 questions, 90 minutes)
- Three question types: Comprehension, Reasoning Within, Reasoning Beyond
- NEVER leave a question blank — no penalty for guessing`
    }
  ]
};
