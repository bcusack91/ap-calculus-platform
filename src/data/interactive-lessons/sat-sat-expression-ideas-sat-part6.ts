export const satExpressionPart6Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei6-intro',
      type: 'text' as const,
      content: `# Cohesion & Paragraph Unity

**Part 6 of 7 — Keeping Paragraphs Focused**

The Digital SAT no longer asks "Should the writer add or delete this sentence?", but the unity test behind that old question type still decides Rhetorical Synthesis, Transitions, and "most logically completes the text" questions: the right choice stays on the text's focus.

### The Unity Test

Every sentence in a paragraph should support the topic sentence. If a sentence introduces unrelated information, it should be deleted.

### Does This Information Belong?

Ask this whenever you judge whether a choice fits a text:

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
            question: 'A short text argues that public libraries promote literacy. Would the sentence "Libraries also serve as community meeting spaces and warming centers during winter" strengthen that argument?',
            options: ['No, because it describes services unrelated to reading skills', 'Yes, because it shows that libraries matter to communities', 'Yes, because an argument should include every benefit', 'No, because it is too long to fit in a short text'],
            correctAnswer: 0,
            explanation: 'The paragraph is specifically about literacy. Meeting spaces and warming centers are valuable library functions but are off-topic here. Adding this would weaken the paragraph\'s focus.'
          },
          {
            question: 'Which question should you ask yourself when deciding if a sentence belongs?',
            options: ['Does it support the main point of the text?', 'Is it interesting enough to hold the reader?', 'Is it grammatically correct as written?', 'Does it add a new statistic or fact?'],
            correctAnswer: 0,
            explanation: 'Unity means every sentence supports the main point. A sentence can be interesting, grammatically perfect, and packed with new facts, but if it doesn\'t support the main point, it doesn\'t belong.'
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
            question: 'Topic: "Benefits of remote work for employees." Which sentence does NOT belong in a text on this topic?',
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
            options: ['No, because the pizza detail is off-topic here', 'Yes, because it gives useful geographic context', 'Yes, because it makes the writing more engaging', 'No, because Naples is not actually near Vesuvius'],
            correctAnswer: 0,
            explanation: 'Naples\' pizza reputation has nothing to do with volcanic eruptions. The location information (southern Italy, near Naples) is relevant and accurate, but the pizza clause is not geographic context, and engaging trivia still breaks paragraph unity.'
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
          'Every sentence must support the [topic sentence|most interesting sentence|closing sentence|most detailed sentence]',
          'Repeating information already stated = [delete|keep|add more detail|move to start]',
          '"These findings suggest…" creates cohesion by [referring back to evidence|introducing new info|changing the topic|adding a new claim]',
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