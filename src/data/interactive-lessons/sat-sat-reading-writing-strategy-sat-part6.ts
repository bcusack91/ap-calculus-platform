export const satRWStrategyPart6Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw6-intro',
      type: 'text' as const,
      content: `# Rhetorical Synthesis

**Part 6 of 7 — Notes-Based Questions**

A new question type on the Digital SAT presents you with bullet-point **notes** from a student's research and asks you to write a sentence that accomplishes a specific goal.

### Format

You'll see something like:

**Notes:**
- The James Webb Space Telescope (JWST) launched in December 2021
- JWST orbits the sun at Lagrange Point 2, about 1 million miles from Earth
- Its primary mirror is 6.5 meters in diameter, compared to Hubble's 2.4 meters  
- JWST primarily observes infrared light, while Hubble observes visible and ultraviolet light

**Question:** "The student wants to emphasize a difference between JWST and Hubble. Which choice most effectively uses the notes to accomplish this goal?"

### Strategy

1. **Read the goal carefully** — What does the question ask you to do?
2. **Identify which notes are relevant** to that specific goal
3. **Eliminate choices** that accomplish a DIFFERENT goal

### Common Goals

| Goal | What to Look For |
|---|---|
| "Emphasize a difference" | Answer must COMPARE two things |
| "Present a key finding" | Answer must state a result or discovery |
| "Introduce the topic to a new audience" | Answer should be general/accessible |
| "Support the claim that X" | Answer must directly support X |

### SAT Trap ⚠️

All four answer choices will use information from the notes. The trap is choosing an answer that's **factually correct** but doesn't **accomplish the stated goal**. Always re-read the goal before selecting your answer.`
    },
    {
      id: 'rw6-quiz',
      type: 'multiple-choice' as const,
      content: '**Rhetorical Synthesis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Notes: Prairie dogs live in underground burrow systems called "towns." Some towns contain thousands of individuals. Prairie dogs use distinct alarm calls for different predators—one call for hawks, another for coyotes. Researchers believe this represents a sophisticated language system. Goal: "Emphasize the complexity of prairie dog communication."',
            options: ['"Prairie dogs use distinct alarm calls to differentiate between predators such as hawks and coyotes, which researchers consider a sophisticated language system."', '"Prairie dogs live in large underground burrow systems called towns that can contain thousands of individuals."', '"Researchers have studied prairie dogs to understand their underground living habitat and social behavior."', '"Prairie dogs, which live in underground towns, are found throughout the American Great Plains."'],
            correctAnswer: 0,
            explanation: 'The goal is about communication complexity. Only option A discusses alarm calls and language sophistication. The other options focus on habitat (B, D) or are too general (C).'
          },
          {
            question: 'When answering rhetorical synthesis questions, what should you do FIRST?',
            options: ['Underline the specific goal stated in the question', 'Read all the notes carefully', 'Look at the answer choices', 'Identify the main topic of the notes'],
            correctAnswer: 0,
            explanation: 'The goal is everything in these questions. All answers will be factually based on the notes, but only one achieves the stated goal. Reading the goal first focuses your evaluation.'
          }
        ]
      }
    }
  ]
};