export const satReadingEvidencePart1Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're1-intro',
      type: 'text' as const,
      content: `# Reading Comprehension: Main Idea & Central Theme

**Part 1 of 7 — Finding the Central Idea**

Every SAT Reading passage—whether literary, social science, or natural science—will test whether you can identify the **central idea** or main purpose.

### How to Identify the Central Idea

1. **Read the first and last sentences** of the passage carefully—they usually frame the argument
2. **Ask:** "What is the author trying to convince me of, or what point are they making?"
3. **Eliminate answers** that are too narrow (only about one detail) or too broad (beyond what the passage discusses)

### Common Main Idea Question Stems

- "Which choice best states the main idea of the passage?"
- "The primary purpose of this passage is to..."
- "The passage is mainly concerned with..."

### Example Passage

> Recent studies suggest that bilingual children develop stronger executive function skills than their monolingual peers. Researchers at Georgetown University found that bilinguals showed enhanced ability to switch between tasks, filter out irrelevant information, and maintain focus—skills collectively known as cognitive flexibility.

**Main idea:** Bilingualism in children is associated with stronger executive function/cognitive flexibility.

### SAT Trap ⚠️

Wrong answers often restate a **supporting detail** as if it were the main idea. If an answer choice mentions a specific study finding without connecting it to the broader argument, it's probably a trap.`
    },
    {
      id: 're1-quiz',
      type: 'multiple-choice' as const,
      content: '**Main Idea Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage discusses how ancient Roman aqueducts used gravity to transport water over long distances, then explains how modern engineers have adopted similar principles in sustainable water systems. Which best states the main idea?',
            options: ['Ancient Roman engineering principles remain relevant in modern sustainable water design', 'Roman aqueducts were more advanced than previously believed', 'Modern water systems are copies of Roman designs', 'Gravity-based water systems are the most efficient'],
            correctAnswer: 0,
            explanation: 'The passage connects ancient Roman principles to modern applications—that connection IS the main idea. Options B, C, and D are either too narrow or make claims not supported by the passage.'
          },
          {
            question: 'When a main idea answer choice uses the word "prove" or "definitively establish," you should:',
            options: ['Be skeptical—SAT passages rarely make absolute claims', 'Choose it if the passage mentions research', 'Eliminate it only if the passage says "suggests"', 'Accept it if supporting evidence is strong'],
            correctAnswer: 0,
            explanation: 'SAT passages almost always use hedging language like "suggests," "indicates," or "may." Answer choices with absolute language like "proves" are usually wrong.'
          },
          {
            question: 'A passage opens: "While many assume that coral reefs are declining uniformly, a growing body of research reveals a more nuanced picture." The passage will most likely:',
            options: ['Present evidence that some coral reefs are recovering or stable', 'Argue that coral reefs are not actually in danger', 'Prove that previous research was entirely wrong', 'Discuss only the negative effects of climate change on reefs'],
            correctAnswer: 0,
            explanation: 'The phrase "more nuanced picture" signals the author will complicate the simple narrative. This usually means showing both decline AND recovery/stability—a balanced view.'
          }
        ]
      }
    },
    {
      id: 're1-detail',
      type: 'text' as const,
      content: `## Strategy: The "One Sentence Summary" Test

After reading a passage, try to summarize it in ONE sentence. If your summary matches an answer choice, that's likely correct.

**Practice this pattern:**

| Passage About | One-Sentence Summary |
|---|---|
| Sleep and memory research | "Sleep plays a critical role in memory consolidation" |
| Jane Austen's writing style | "Austen used irony to critique social class structures" |
| Climate change and migration | "Climate change is becoming a significant driver of human migration" |

If you can't summarize in one sentence, you may need to reread the passage more carefully.

### Red Flags in Wrong Answers

- **Too extreme:** "completely disproves," "the only cause," "all scientists agree"
- **Too narrow:** Focuses on one paragraph instead of the whole passage
- **Reversed logic:** States the opposite of the author's argument
- **Out of scope:** Introduces ideas not discussed in the passage`
    }
  ]
};