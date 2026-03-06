export const satExpressionPart3Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei3-intro',
      type: 'text' as const,
      content: `# Effective Introductions & Conclusions

**Part 3 of 7 — Opening and Closing Sentences**

The SAT may ask which sentence best introduces or concludes a paragraph or passage. Strong openings and closings share specific characteristics.

### Effective Topic Sentences (Paragraph Openers)

A good topic sentence:
- States the paragraph's main point
- Connects to the previous paragraph (if not the first)
- Is general enough to cover the paragraph's content
- Is specific enough to give direction

**Test:** Can you predict what the paragraph will discuss from the topic sentence alone?

✅ "While solar panels reduce electricity costs, their manufacturing process raises environmental concerns."  
→ You can predict: the paragraph will discuss environmental downsides of solar panel production.

❌ "Solar panels are interesting."  
→ Too vague — could go anywhere.

### Effective Conclusions

A conclusion should:
- NOT introduce new information
- Synthesize or summarize the main point
- Sometimes look forward (implications, significance)

### Bad Conclusion Signals

- Introduces a brand-new topic
- Asks a question that the paragraph hasn't addressed
- Contradicts the paragraph's argument
- Restates the introduction word-for-word (too mechanical)`
    },
    {
      id: 'ei3-quiz',
      type: 'multiple-choice' as const,
      content: '**Introduction & Conclusion Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A paragraph discusses how composting reduces landfill waste and produces nutrient-rich soil. Which is the best concluding sentence?',
            options: ['By diverting organic waste from landfills and enriching soil, composting offers a practical solution to two environmental challenges simultaneously.', 'Recycling is another important environmental practice that people should consider.', 'The history of composting dates back thousands of years to ancient civilizations.', 'There are many types of composting bins available at hardware stores.'],
            correctAnswer: 0,
            explanation: 'A good conclusion synthesizes the paragraph\'s two main points (waste reduction + soil enrichment). Option B introduces a new topic, C goes backward to history, and D introduces commercial information not discussed.'
          },
          {
            question: 'Which would be the best topic sentence for a paragraph about the decline of honeybee populations?',
            options: ['Honeybee populations have declined by nearly 40% in the past decade, threatening both agriculture and ecosystem stability.', 'Honeybees are fascinating creatures that live in complex social colonies.', 'Many people are allergic to bee stings.', 'Scientists have studied insects for centuries.'],
            correctAnswer: 0,
            explanation: 'This topic sentence names the issue (decline), quantifies it (40%), situates it in time (past decade), and explains its significance (agriculture + ecosystems). The other options are either too general or off-topic.'
          }
        ]
      }
    }
  ]
};