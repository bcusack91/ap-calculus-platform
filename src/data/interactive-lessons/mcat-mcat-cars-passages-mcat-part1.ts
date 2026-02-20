export const mcatCarsPsgPart1Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp1-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 1 of 7 — Humanities Passages**

### Characteristics of Humanities Passages

CARS draws from these humanities fields:
- **Philosophy**: Ethics, epistemology, logic
- **Literature/Literary criticism**: Analysis of texts, narrative theory
- **Art/Music**: Aesthetic theory, art history, criticism
- **Religion/Theology**: Comparative religion, philosophical theology

### What Makes Humanities Passages Challenging

- **Abstract language**: Concepts like "being," "consciousness," "the sublime"
- **Dense arguments**: Multiple layers of reasoning
- **Unfamiliar vocabulary**: Technical philosophical terms
- **Implicit assumptions**: Author assumes you can follow complex chains of logic

### Strategy for Humanities Passages

1. **Look for the thesis statement** — often at the end of the first or second paragraph
2. **Track who says what** — passages often discuss multiple thinkers
3. **Don't get lost in examples** — they illustrate a point, focus on the point
4. **Paraphrase in simple language**: "The author is saying that..."
5. **Stay patient** — understanding often comes by the end of the passage`
    },
    {
      id: 'cp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Humanities Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A philosophy passage discusses three philosophers\' views on justice. To answer questions about the AUTHOR\'s view, you should:',
            options: ['Distinguish the author\'s voice from the philosophers being discussed — look for evaluative language', 'Assume the author agrees with the last philosopher mentioned', 'Average the three philosophers\' views', 'Look for the most modern perspective'],
            correctAnswer: 0,
            explanation: 'Authors often present others\' views before giving their own assessment. Look for evaluative language: "However," "More convincingly," "This argument fails because" — these signal the author\'s actual position.'
          }
        ]
      }
    },
    {
      id: 'cp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Humanities passages are abstract — focus on the core argument
- Track WHO is making each claim (author vs. people being discussed)
- Paraphrase complex ideas in simple terms
- Thesis is often at the end of the intro or beginning of the conclusion`
    }
  ]
};
