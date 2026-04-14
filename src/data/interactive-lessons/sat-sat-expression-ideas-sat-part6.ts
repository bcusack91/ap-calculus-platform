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
      }    },
    {
      id: 'ei6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Add/Delete Decisions & Cohesion

### Worked Example 1: Should the Writer Add This Sentence?

**Topic sentence:** "Honeybees communicate food source locations through a sophisticated waggle dance."

| Proposed Addition | Add or Delete? | Reasoning |
|---|---|---|
| "The angle of the dance relative to the sun indicates direction." | ✅ ADD | Directly explains how the dance works |
| "Honeybees also produce beeswax for their hives." | ❌ DELETE | About hive construction, not communication |
| "Karl von Frisch won the Nobel Prize for decoding the waggle dance." | ✅ ADD | Provides credibility and context for the claim |
| "Bumble bees are a different species from honeybees." | ❌ DELETE | Comparative trivia, not about communication |

### Worked Example 2: Cohesion Through Connectors

**Choppy paragraph:**
"Coral reefs support 25% of marine species. Reefs are threatened by rising ocean temperatures. Conservation efforts are underway globally."

**Cohesive paragraph:**
"Coral reefs support 25% of marine species. **However**, **these ecosystems** are threatened by rising ocean temperatures. **In response**, conservation efforts are underway globally."

| Connector Added | Function |
|---|---|
| "However" | Signals contrast (good news → bad news) |
| "these ecosystems" | Links back to "coral reefs" with a synonym |
| "In response" | Shows cause-effect (threat → action) |

### The Add/Delete Decision Tree

| Ask This ↓ | If YES | If NO |
|---|---|---|
| Does it support the topic sentence? | Consider adding ✅ | Delete ❌ |
| Does it repeat existing info? | Delete ❌ | Keep |
| Does it provide needed context? | Add ✅ | Assess relevance |
| Does it break the paragraph's flow? | Delete ❌ | Keep |
| Does it introduce a new subtopic? | Delete ❌ | Keep |`
    },
    {
      id: 'ei6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Cohesion & Unity Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Topic: "Benefits of remote work for employees." Which sentence should be DELETED?',
            options: ['Remote workers report 20% higher job satisfaction.', 'Many companies have also reduced their office real estate costs.', 'Flexible schedules allow employees to manage personal obligations.', 'Commute elimination saves the average worker 40 minutes daily.'],
            correctAnswer: 1,
            explanation: 'The paragraph is about benefits for EMPLOYEES. Company real estate costs are a benefit for EMPLOYERS — this is off-topic for the paragraph\'s specific focus, even though it\'s related to remote work.'
          },
          {
            question: 'Which transition best connects: "The initial results were promising." → "[___], the long-term data revealed unexpected complications."',
            options: ['However', 'Similarly', 'For example', 'In addition'],
            correctAnswer: 0,
            explanation: '"Promising" → "unexpected complications" is a contrast. "However" signals that the next sentence will contradict or complicate the previous one.'
          },
          {
            question: 'A paragraph about volcanic eruptions includes: "Mount Vesuvius is located in southern Italy near Naples, which is known for its excellent pizza." Should this clause be kept?',
            options: ['No — "known for its excellent pizza" is irrelevant to volcanic eruptions', 'Yes — it provides geographical context', 'Yes — it makes the writing more engaging', 'No — it is factually incorrect'],
            correctAnswer: 0,
            explanation: 'Naples\' pizza reputation has nothing to do with volcanic eruptions. While the location information (southern Italy, near Naples) is relevant, the pizza detail breaks paragraph unity.'
          }
        ]
      }
    },
    {
      id: 'ei6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Unity & Cohesion Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Every sentence must support the [topic sentence|most interesting sentence|longest sentence|first answer choice]',
          'Repeating information already stated = [delete|keep|add more detail|move to start]',
          '"These findings suggest…" creates cohesion by [referring back to evidence|introducing new info|changing the topic|adding humor]',
          'A sentence about cooking in a paragraph about astronomy should be [deleted|added|moved to the end|expanded]'
        ],
        correctAnswers: ['topic sentence', 'delete', 'referring back to evidence', 'deleted'],
        hint1: 'The topic sentence defines what belongs in the paragraph.',
        hint2: 'Redundancy weakens writing.',
        hint3: '"These findings" points back to previously stated findings.',
        explanation: 'Topic sentence = unity test. Repetition = delete. "These findings" creates backward reference. Off-topic content = delete regardless of quality.'
      }
    },
    {
      id: 'ei6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Concept | Key Rule |
|---|---|
| Unity test | Does the sentence support the topic sentence? |
| Add | Provides evidence, context, or needed definitions |
| Delete | Off-topic, repetitive, or contradictory |
| Cohesion | Use pronouns, synonyms, and transitions to link sentences |
| Key transitions | However (contrast), In addition (more), As a result (effect) |

*Next: Expression of Ideas Review →*`    }
  ]
};