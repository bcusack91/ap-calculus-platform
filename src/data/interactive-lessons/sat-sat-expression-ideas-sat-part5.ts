export const satExpressionPart5Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei5-intro',
      type: 'text' as const,
      content: `# Style, Tone, and Audience

**Part 5 of 7 — Matching Register and Purpose**

The SAT tests whether you can adjust language to fit the passage's style, audience, and purpose.

### Register Levels

| Register | Audience | Example |
|---|---|---|
| **Formal/Academic** | Scholars, specialists | "The data substantiate the hypothesis" |
| **Professional** | General educated audience | "The study supports the theory" |
| **Informal** | Friends, casual setting | "The study totally backs it up" |

### The SAT almost always uses **professional** register. But occasionally you'll see:
- **Science passages:** More formal, technical vocabulary
- **Literary narratives:** More descriptive, figurative
- **Social science:** Analytical, balanced

### Consistency Rule

Within a single passage, tone must stay consistent. If a passage is formal throughout, inserting a casual phrase is wrong.

❌ "The researchers meticulously documented each specimen and they basically found a lot of new stuff."  
✅ "The researchers meticulously documented each specimen and identified several previously unknown species."

### Audience-Appropriate Detail

When the question asks about what information to include:
- **Expert audience:** Can skip basic definitions
- **General audience:** Needs brief explanations of technical terms
- **The SAT reader:** Assumed to be a general educated reader`
    },
    {
      id: 'ei5-quiz',
      type: 'multiple-choice' as const,
      content: '**Style & Tone Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a formal scientific passage, which phrase best replaces "Scientists figured out that the gene was messed up"?',
            options: ['Researchers determined that the gene contained a deleterious mutation', 'Scientists found that the gene was broken', 'The gene was found to be messed up by researchers', 'Science people discovered a gene problem'],
            correctAnswer: 0,
            explanation: '"Researchers determined" is formal and precise. "Deleterious mutation" is proper scientific terminology. The other options use informal language ("broken," "messed up," "science people") inappropriate for an academic passage.'
          },
          {
            question: 'A passage about art history consistently uses formal language. Which sentence best fits? "Monet\'s late works _____."',
            options: ['demonstrate an increasingly abstract approach to color and light', 'are really amazing and beautiful paintings', 'show he was getting into different stuff toward the end', 'basically changed how everyone thought about art'],
            correctAnswer: 0,
            explanation: '"Demonstrate" and "increasingly abstract approach" match formal art criticism tone. The other options are too casual for the passage\'s established register.'
          }
        ]
      }
    }
  ]
};