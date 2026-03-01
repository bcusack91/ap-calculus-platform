export const actEnglishStratPart4Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es4-intro',
      type: 'text' as const,
      content: `
# 🎨 Rhetorical Skills Approach

**Part 4 of 7 — Adding/Deleting, Transitions, Organization & Style**

Rhetorical Skills questions don't test grammar rules — they test your ability to make **effective writing decisions**. There's no single "rule" to apply; instead you must consider context, purpose, and clarity.

The three sub-categories:
1. **Strategy** — Should a sentence be added or deleted? What is its purpose?
2. **Organization** — Where should a sentence be placed? What transition fits?
3. **Style** — Is the wording concise? Does the tone match?
      `
    },
    {
      id: 'act-es4-adddelete',
      type: 'text' as const,
      content: `
## Adding & Deleting Sentences

**The question pattern:** *"The writer is considering adding/deleting this sentence. Should the writer make this change?"*

**Decision framework:**
- **Add if** the sentence supports the paragraph's main idea with relevant evidence or detail.
- **Delete if** the sentence is off-topic, redundant, or contradicts the paragraph's focus.

**Two-part answers:** These questions always have a Yes/No component AND a reason. You must get BOTH right.

**Example:**

*Paragraph about the health benefits of walking:*
> "Walking 30 minutes daily reduces the risk of heart disease. It also lowers blood pressure and improves mood. [Proposed addition: The first pair of running shoes was made by Nike in 1964.]"

**Answer: No, do not add — it introduces irrelevant historical information about running shoes when the paragraph focuses on health benefits of walking.**

**Trap:** The proposed fact may be true and interesting, but if it doesn't support the paragraph's point, it should not be added.
      `
    },
    {
      id: 'act-es4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Rhetorical Judgment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph argues that public libraries are essential community resources. The writer wants to add: "Libraries also offer free Wi-Fi and computer access to residents who cannot afford internet at home." Should it be added?',
            options: [
              'Yes — it provides a relevant, specific example of libraries as community resources.',
              'Yes — it introduces an interesting new topic about technology.',
              'No — it shifts the focus from libraries to internet access.',
              'No — it repeats what was already stated in the paragraph.'
            ],
            correctAnswer: 0,
            explanation: 'Free Wi-Fi and computer access directly support the claim that libraries are essential community resources. It\'s relevant and specific.'
          },
          {
            question: 'A passage describes the process of photosynthesis. Which transition best connects "Plants absorb sunlight through their leaves" to "Carbon dioxide enters through small pores called stomata"?',
            options: [
              'However,',
              'In conclusion,',
              'Meanwhile,',
              'For example,'
            ],
            correctAnswer: 2,
            explanation: '"Meanwhile" signals that another simultaneous process is occurring. Both absorption of sunlight and intake of CO₂ happen as part of the same process, making "Meanwhile" the best fit.'
          }
        ]
      }
    },
    {
      id: 'act-es4-transitions',
      type: 'text' as const,
      content: `
## Transitions

Transition questions ask you to pick the word or phrase that best connects two ideas. The key is to identify the **relationship** between the ideas:

| Relationship | Transitions |
|-------------|-------------|
| **Addition** | also, furthermore, moreover, in addition |
| **Contrast** | however, nevertheless, on the other hand, despite this |
| **Cause/Effect** | therefore, consequently, as a result, thus |
| **Example** | for instance, for example, specifically |
| **Sequence** | first, next, then, finally, meanwhile |
| **Conclusion** | in conclusion, ultimately, in summary |

**Strategy:**
1. Read the sentence BEFORE and AFTER the transition.
2. Determine the relationship (addition? contrast? cause?).
3. Pick the transition that matches.

**Common Trap:** "However" is the most over-selected transition. Students pick it whenever they're unsure. Only use "however" when there is a genuine **contrast** between the two ideas.
      `
    },
    {
      id: 'act-es4-input1',
      type: 'input-boxes' as const,
      content: `
**Transition Types** 📝

Identify the relationship each transition signals.

1) "Therefore" signals a __________ relationship (cause and …).
2) "On the other hand" signals a __________ between two ideas.
3) "Furthermore" signals that additional __________ is being provided.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['effect', 'contrast', 'information'],
        hint1: '"Therefore" means "because of that" — what follows the cause?',
        hint2: '"On the other hand" introduces the opposite perspective.',
        hint3: '"Furthermore" introduces more of the same kind of content.',
        explanation: '"Therefore" signals cause and effect. "On the other hand" signals contrast. "Furthermore" signals additional information.'
      }
    },
    {
      id: 'act-es4-organization',
      type: 'text' as const,
      content: `
## Organization & Sentence Placement

**Sentence-order questions:**
*"For the sake of the logic and coherence of this paragraph, Sentence 4 should be placed …"*

**Strategy:**
1. Read each sentence and identify **logical links** (pronouns referring back, transitions like "this" or "such," chronological order).
2. A sentence that introduces a concept must come BEFORE sentences that refer to it.
3. A sentence beginning with "This approach" must follow the sentence that describes the approach.

**Paragraph-order questions:**
*"Which of the following sequences of paragraphs makes the essay most logical?"*

**Look for:**
- The **introduction** (broad overview or thesis) goes first.
- **Body paragraphs** should follow a logical flow (chronological, cause-effect, or general-to-specific).
- The **conclusion** (summary or final thought) goes last.
      `
    },
    {
      id: 'act-es4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rhetorical Skills Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A proposed addition that is true but off-topic should be …',
            options: ['added — true facts are always helpful', 'deleted — relevance to the paragraph matters more than truth', 'added — variety improves the passage', 'moved to a different paragraph']
          },
          {
            label: 'If Sentence 5 says "This technique…" then it must be placed …',
            options: ['at the beginning of the paragraph', 'after the sentence that describes the technique', 'at the end of the paragraph', 'in a separate paragraph']
          },
          {
            label: 'When two ideas contrast, the best transition is usually …',
            options: ['furthermore', 'for example', 'however', 'in addition']
          }
        ],
        correctAnswers: ['deleted — relevance to the paragraph matters more than truth', 'after the sentence that describes the technique', 'however'],
        hint1: 'The ACT values relevance to the main idea above all.',
        hint2: '"This technique" needs an antecedent — the sentence that names the technique.',
        hint3: '"However" is the classic contrast transition.',
        explanation: 'Off-topic facts should not be added regardless of truth. Sentences with demonstrative references ("This technique") must follow the sentence they refer to. "However" signals contrast.'
      }
    }
  ]
};
