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
      id: 're1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Main Idea Mastery

### Worked Example 1: Testing Each Answer Choice

**Passage summary:** "Research shows screen time before bed disrupts melatonin production, worsening sleep quality. However, screen type matters — e-readers on night mode had minimal effect."

| Answer Choice | Verdict | Why |
|---|---|---|
| A) "All screen time is harmful" | ❌ Too extreme | Passage says some screens have minimal effect |
| B) "Screen time's effect on sleep depends on screen type and settings" | ✅ Correct | Captures the nuance: not all screens are equal |
| C) "E-readers are better than phones" | ❌ Too narrow | Just one detail, not the main idea |
| D) "Melatonin production is complex" | ❌ Too broad | Passage is about screens and sleep, not melatonin in general |

### Worked Example 2: The One-Sentence Summary Method

| Passage Topic | After Reading, You Think… | One-Sentence Summary |
|---|---|---|
| Wolves in Yellowstone | "Wolves changed the whole ecosystem" | "Reintroducing apex predators triggers cascading ecological benefits" |
| Urban farming | "City gardens help communities" | "Urban agriculture improves food access and community cohesion" |
| Bilingual education | "Being bilingual helps your brain" | "Bilingualism enhances cognitive flexibility and executive function" |

Now match your summary to the answer choices. The best match = correct answer.

### Main Idea vs. Supporting Detail

| Statement | Main Idea or Detail? |
|---|---|
| "Urban green spaces improve mental health" | Main idea (broad claim) |
| "A 2023 study of 500 participants found 20% lower anxiety" | Detail (specific evidence) |
| "Parks reduce stress and increase social interaction" | Main idea (captures scope) |
| "Central Park spans 843 acres" | Detail (single fact) |

### Red Flags in Wrong Answers

- **Too extreme:** "completely disproves," "the only cause," "all scientists agree"
- **Too narrow:** Focuses on one paragraph instead of the whole passage
- **Reversed logic:** States the opposite of the author's argument
- **Out of scope:** Introduces ideas not discussed in the passage`
    },
    {
      id: 're1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Main Idea Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage discusses how traditional Indigenous fire management techniques are being adopted by modern wildfire agencies. Which is the best main idea?',
            options: ['Indigenous land management practices offer valuable approaches for modern wildfire prevention', 'Indigenous people used fire for thousands of years', 'Modern agencies have failed to prevent wildfires', 'Fire is a natural part of many ecosystems'],
            correctAnswer: 0,
            explanation: 'The passage connects Indigenous techniques to modern adoption — that connection IS the main idea. B is too narrow (historical fact only). C makes a negative claim not warranted. D is too broad.'
          },
          {
            question: 'How can you tell a "supporting detail" answer from a "main idea" answer?',
            options: ['The detail mentions specific numbers, studies, or examples; the main idea is a broad claim', 'The main idea is always the longest answer choice', 'The detail uses more complex vocabulary', 'The main idea always appears in the first sentence'],
            correctAnswer: 0,
            explanation: 'Supporting details are specific (numbers, named studies, individual examples). Main ideas are broader claims that the details support. Length, vocabulary, and position are unreliable indicators.'
          },
          {
            question: 'A passage about deep-sea mining presents both economic benefits and environmental risks. The best main idea answer will:',
            options: ['Acknowledge both sides of the issue', 'Focus only on the economic benefits', 'Focus only on the environmental risks', 'Declare that mining should be banned'],
            correctAnswer: 0,
            explanation: 'If the passage presents both sides, the correct main idea must capture that balance. One-sided answers represent only part of the passage — they\'re "too narrow."'
          }
        ]
      }
    },
    {
      id: 're1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Main Idea Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'An answer that mentions one specific study is likely a [supporting detail|main idea|inference|vocabulary question]',
          '"Proves definitively" in an answer choice is usually [wrong — too absolute|correct|neutral|irrelevant]',
          'The one-sentence summary should match the [correct main idea answer|longest answer|most specific answer|first answer]',
          'Too-broad answers go [beyond the passage scope|into specific detail|against the author|nowhere]'
        ],
        correctAnswers: ['supporting detail', 'wrong — too absolute', 'correct main idea answer', 'beyond the passage scope'],
        hint1: 'Specific studies = evidence, not the big picture.',
        hint2: 'SAT passages rarely use absolute language like "proves."',
        hint3: 'Your mental summary = your guide to the right answer.',
        explanation: 'Specific studies are details. Absolute language is usually wrong. Your one-sentence summary guides your choice. Too-broad answers discuss more than the passage covers.'
      }
    },
    {
      id: 're1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Skill | Strategy |
|---|---|
| Find the main idea | One-sentence summary, then match |
| Eliminate wrong answers | Too broad, too narrow, too extreme, reversed logic |
| Distinguish detail from main idea | Details are specific; main ideas are broad claims |
| Watch for traps | "Proves," "always," "the only" = usually wrong |

*Next: Command of Evidence — Textual →*`
    }
  ]
};