export const satExpressionPart6Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei6-intro',
      type: 'text' as const,
      content: `# Cohesion & Paragraph Unity

**Part 6 of 7 — Keeping Paragraphs Focused**

Cohesion questions ask whether a sentence belongs in a paragraph, or whether the paragraph maintains a consistent focus.

### The Unity Test

Every sentence in a paragraph should support the topic sentence. If a sentence introduces unrelated information, it should be deleted.

### "Should the writer add/delete this sentence?"

When you see this question type:

**Reasons to ADD:**
- Provides needed context or definition
- Supports the paragraph's main claim with evidence
- Creates a logical transition

**Reasons to DELETE:**
- Introduces information unrelated to the paragraph's focus
- Repeats what's already been stated
- Contradicts the paragraph without purpose

### Example

**Topic sentence:** "Urban rooftop gardens provide multiple environmental benefits."

✅ Keep: "They reduce stormwater runoff by up to 50%." (supports environmental benefits)  
✅ Keep: "Rooftop vegetation lowers building temperatures by 5-10°F." (supports environmental benefits)  
❌ Delete: "The first rooftop garden in New York was installed in 1882." (historical trivia, not about benefits)

### Logical Connectors for Cohesion

Sentences should connect to each other. Look for:
- **Pronouns** pointing back (this, these, such)
- **Repeated key terms** or synonyms
- **Transitions** that show the relationship`
    },
    {
      id: 'ei6-quiz',
      type: 'multiple-choice' as const,
      content: '**Cohesion & Unity Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A paragraph argues that public libraries promote literacy. A writer wants to add: "Libraries also serve as community meeting spaces and warming centers during winter." Should this sentence be added?',
            options: ['No—it introduces services unrelated to the paragraph\'s focus on literacy', 'Yes—it shows libraries are important', 'Yes—all library benefits should be included', 'No—the sentence is too long'],
            correctAnswer: 0,
            explanation: 'The paragraph is specifically about literacy. Meeting spaces and warming centers are valuable library functions but are off-topic here. Adding this would weaken the paragraph\'s focus.'
          },
          {
            question: 'Which question should you ask yourself when deciding if a sentence belongs?',
            options: ['Does this sentence directly support the paragraph\'s topic sentence?', 'Is this sentence interesting to read?', 'Is this sentence grammatically correct?', 'Is this the longest sentence in the paragraph?'],
            correctAnswer: 0,
            explanation: 'Paragraph unity means every sentence supports the topic. A sentence can be interesting, grammatically perfect, and any length—but if it doesn\'t support the topic sentence, it doesn\'t belong.'
          }
        ]
      }
    }
  ]
};