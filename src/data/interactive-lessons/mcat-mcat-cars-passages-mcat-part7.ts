export const mcatCarsPsgPart7Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp7-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 7 of 7 — Passage Practice Principles**

### How to Practice CARS Effectively

**The Review Process is More Important Than the Practice Itself**

After completing each passage:

### Step 1: Categorize the Passage
- What type? (humanities, social science, ethics, etc.)
- What was the main argument?
- Was it easy, medium, or hard?

### Step 2: Review EVERY Question
- For questions you got RIGHT: Was it for the right reason?
- For questions you got WRONG: What type of error?
  - Misread the passage?
  - Fell for a trap answer?
  - Ran out of time?
  - Confused who said what?

### Step 3: Identify Patterns
After 10+ passages, look for:
- Which passage types are hardest for you?
- Which question types do you miss most?
- Are you making the same error repeatedly?

### Step 4: Targeted Practice
- If humanities passages are hard → read more philosophy and literary criticism
- If inference questions are hard → practice finding the "one step beyond" the text
- If timing is an issue → practice pacing with a stopwatch`
    },
    {
      id: 'cp7-quiz1',
      type: 'multiple-choice' as const,
      content: `**CARS Practice Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A student consistently misses "Reasoning Beyond the Text" questions but does well on comprehension questions. The most targeted improvement would be:`,
            options: [`Practice applying passage logic to new scenarios — the weak area is inference and application`, `Read passages more slowly`, `Focus on improving reading speed`, `Study more vocabulary`],
            correctAnswer: 0,
            explanation: `The student understands the passage (good comprehension) but struggles with extending ideas beyond the text. Targeted practice on inference and application questions will address this specific weakness.`
          }
        ]
      }
    },
    {
      id: 'cp7-summary',
      type: 'text' as const,
      content: `### CARS Passage Types — Complete! ✅

The key to CARS improvement: consistent practice + thorough review. Know the passage types, identify your weaknesses, and target them specifically. Trust the process — CARS skills develop over months, not days.`
    }
  ]
};
