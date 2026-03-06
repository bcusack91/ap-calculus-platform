export const satReadingEvidencePart7Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're7-intro',
      type: 'text' as const,
      content: `# Reading Comprehension Review

**Part 7 of 7 — Comprehensive Review & Test Strategy**

### Quick-Reference Decision Tree

When you see a Reading question:

1. **"Main idea" or "primary purpose"** → Summarize passage in one sentence, match to answer
2. **"Best evidence" or "which quote"** → Find the DIRECT support, not just related topic  
3. **"Infer" or "suggests"** → Must be supported by specific text, not outside knowledge
4. **"Word in context"** → Cover the word, predict a synonym, match to choices
5. **"Purpose of paragraph/sentence"** → Ask WHY the author included it (counter? example? transition?)
6. **"Data/graphic"** → Integrate text claims with visual evidence; watch for overstatement

### Time Management for Reading

- **Budget:** ~1.2 minutes per question (R&W module: 27 questions, 32 minutes)
- **Don't read the whole passage first** on the Digital SAT—each question comes with its own short passage
- **Read the question stem first** to know what to look for
- If a question is taking more than 2 minutes, flag it and move on

### Most Common Mistakes

| Mistake | Fix |
|---|---|
| Choosing an answer that "sounds smart" but isn't supported | Always point to specific text evidence |
| Overthinking inference questions | The correct inference is usually straightforward |
| Picking the most common word definition | Context determines meaning, not familiarity |
| Not reading all four choices | The best answer might be D—compare all options |
| Bringing in outside knowledge | Only what's in the passage counts |`
    },
    {
      id: 're7-quiz',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review Quiz** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage states: "The market for electric vehicles, while growing, faces infrastructure challenges that may slow adoption." The word "temper" would best replace:',
            options: ['"slow" — it means to moderate or restrain', '"growing" — it means to increase', '"faces" — it means to confront', '"challenges" — it means difficulties'],
            correctAnswer: 0,
            explanation: '"Temper" in this context means to moderate or restrain, which aligns with "slow adoption." This is a vocabulary-in-context application.'
          },
          {
            question: 'What is the MOST efficient reading strategy for Digital SAT R&W?',
            options: ['Read the question, then read the passage with that question in mind', 'Speed-read the passage then answer from memory', 'Read only the first and last sentences', 'Read the answer choices first'],
            correctAnswer: 0,
            explanation: 'On the Digital SAT, each question has its own passage. Reading the question first tells you what to focus on, making your passage reading targeted and efficient.'
          },
          {
            question: 'A passage discusses the benefits of urban green spaces. A graph shows park acreage per capita declining in 15 of 20 cities studied. This data:',
            options: ['Complicates the passage by showing a decline despite the described benefits', 'Directly contradicts and disproves the passage claims', 'Is irrelevant to the passage topic', 'Fully supports the passage argument'],
            correctAnswer: 0,
            explanation: 'The data doesn\'t disprove that green spaces are beneficial—it shows they\'re declining. This complicates the narrative: the benefits are real but access is shrinking. "Complicates" is the nuanced answer the SAT favors.'
          }
        ]
      }
    }
  ]
};