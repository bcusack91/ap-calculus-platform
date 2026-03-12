export const actRhetoricalPart1Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh1-intro',
      type: 'text' as const,
      content: `
# 🎯 Strategy Questions

**Part 1 of 7 — Adding, Deleting & Revising Sentences; Purpose of a Phrase**

Strategy questions ask you to think about **why** a writer makes certain choices rather than just fixing grammar. They typically come in three flavours:

| Question Type | What It Asks |
|---------------|-------------|
| **Add / Delete** | Should this sentence be added or deleted from the passage? |
| **Purpose of a phrase** | Why did the author include this specific detail? |
| **Revision for effect** | Which revision best accomplishes a stated goal? |

These make up roughly **12–15 questions** on every ACT English test — about one-fifth of the section!

**Golden Rule:** Always consider the **main idea** of the paragraph. Any addition must *support* that main idea; any deletion should be justified by whether the sentence is *relevant* to the paragraph's focus.
      `
    },
    {
      id: 'act-rh1-adding',
      type: 'text' as const,
      content: `
## Adding & Deleting Sentences

**When to ADD a sentence:**
- It provides a specific detail that **supports** the paragraph's main idea.
- It creates a **smooth transition** between existing ideas.
- It gives an **example or evidence** that strengthens the argument.

**When to DELETE a sentence:**
- It is **off-topic** — it doesn't relate to the paragraph's focus.
- It **repeats** information already stated.
- It **contradicts** the tone or purpose of the passage.

**Worked Example:**

*Paragraph about the benefits of urban gardens:*
> "Urban gardens provide fresh produce to communities that lack grocery stores. They also create green spaces that reduce heat in cities. [1] The first urban garden in the U.S. was established in Detroit in 1893."

Should sentence [1] be kept or deleted?

**Answer: Deleted.** While the historical fact is interesting, it doesn't support the paragraph's focus on the *benefits* of urban gardens. It shifts attention to history rather than maintaining the argument about advantages.

**ACT Strategy:** When the question says "the writer is considering adding," always check whether the new sentence *matches the paragraph's purpose*. A true-but-irrelevant fact is still a wrong addition.
      `
    },
    {
      id: 'act-rh1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Adding & Deleting Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph discusses how recycling reduces landfill waste. The writer wants to add: "Recycling aluminium cans saves 95% of the energy needed to make new ones." Should this sentence be added?',
            options: [
              'Yes — it provides a specific, relevant benefit of recycling.',
              'Yes — it introduces an interesting historical detail.',
              'No — it shifts the focus away from landfill reduction.',
              'No — it repeats information already in the paragraph.'
            ],
            correctAnswer: 0,
            explanation: 'The sentence supports the paragraph\'s focus on recycling\'s benefits with a concrete statistic. Even though it highlights energy savings rather than landfill reduction, it still reinforces the overall pro-recycling argument.'
          },
          {
            question: 'A passage about Marie Curie\'s scientific achievements includes: "Pierre Curie enjoyed cycling in his spare time." A question asks whether this sentence should be kept. What is the best reasoning for deleting it?',
            options: [
              'It contradicts the passage\'s claims about Marie Curie.',
              'It is irrelevant to the paragraph\'s focus on scientific achievements.',
              'It repeats information stated earlier in the passage.',
              'It uses an informal tone inconsistent with the passage.'
            ],
            correctAnswer: 1,
            explanation: 'Pierre\'s hobby is off-topic. The paragraph focuses on Marie Curie\'s scientific work, so a detail about Pierre\'s leisure activities doesn\'t belong, regardless of whether it is true.'
          }
        ]
      }
    },
    {
      id: 'act-rh1-purpose',
      type: 'text' as const,
      content: `
## Purpose of a Phrase or Detail

These questions ask: *"The writer includes this detail primarily to …"*

**Common purposes on the ACT:**
- **Illustrate** a general claim with a specific example.
- **Provide evidence** for an argument.
- **Establish** the setting, tone, or mood.
- **Transition** between ideas or paragraphs.
- **Qualify** or **limit** a broad statement.

**Example:**

*"Although solar energy is often praised as endlessly renewable, the manufacturing of solar panels requires significant amounts of rare-earth minerals."*

The underlined clause primarily serves to:
- ✅ **Qualify** the preceding claim about solar energy.
- ❌ Contradict the author's thesis. (It doesn't say solar is bad — just adds nuance.)
- ❌ Provide historical context. (No history is mentioned.)

**Tip:** Eliminate answers that are too extreme. The ACT rarely picks "completely undermines" or "proves beyond doubt."
      `
    },
    {
      id: 'act-rh1-input1',
      type: 'input-boxes' as const,
      content: `
**Strategy Vocabulary** 📝

Fill in the missing key term for each description.

1) A sentence that is off-topic and should be removed is called __________ (one word: "irrelevant" or "redundant"? Pick the one that means "not related").
2) When a phrase limits or softens a broad claim, it __________ the claim (one word, starts with "q").
3) A sentence that restates something already said is called __________ (one word, starts with "r").
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['irrelevant', 'qualifies', 'redundant'],
        hint1: 'Off-topic means not related to the paragraph — not "saying it again."',
        hint2: 'Think of adding nuance or conditions: "q_______s" the claim.',
        hint3: 'Repeating the same idea = r________.',
        explanation: '"Irrelevant" means unrelated to the topic. "Qualifies" means to limit or add conditions to a statement. "Redundant" means unnecessarily repetitive.'
      }
    },
    {
      id: 'act-rh1-revision',
      type: 'text' as const,
      content: `
## Revision for Effect

Some questions give you a **goal** and ask which revision best achieves it:

*"Which choice most effectively emphasises the narrator's surprise?"*

**Steps:**
1. **Identify the goal** stated in the question stem.
2. **Eliminate** choices that don't address the goal at all.
3. Among remaining choices, pick the one that is most **specific and vivid**.

**Example:**

Goal: *Emphasise the size of the crowd.*

- (A) "People attended the concert." — Too vague.
- (B) "Many people came." — Slightly better but still generic.
- (C) "Over ten thousand fans packed the stadium, filling every seat." — ✅ Specific and vivid.
- (D) "The concert was a success." — Doesn't mention size at all.

**ACT Trap:** An answer can be well-written and grammatically perfect but still wrong if it doesn't achieve the specific stated goal.
      `
    },
    {
      id: 'act-rh1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match the Strategy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence that supports the main idea with a specific statistic should be …',
            options: ['added — it strengthens the argument', 'deleted — it is off-topic', 'deleted — it is redundant', 'revised for tone']
          },
          {
            label: 'A true but unrelated historical fact in a paragraph about modern benefits should be …',
            options: ['added — historical context helps', 'deleted — it is irrelevant to the focus', 'kept — facts are always useful', 'moved to the introduction']
          },
          {
            label: 'When a question asks for the "primary purpose" of a phrase, you should focus on …',
            options: ['whether it is grammatically correct', 'how it relates to the paragraph\'s main idea', 'whether it uses formal language', 'the length of the phrase']
          }
        ],
        correctAnswers: ['added — it strengthens the argument', 'deleted — it is irrelevant to the focus', 'how it relates to the paragraph\'s main idea'],
        hint1: 'A specific statistic that supports the main point is valuable evidence.',
        hint2: 'Relevance to the paragraph\'s focus is what matters, not whether the fact is true.',
        hint3: 'Purpose questions are about function — what role the phrase plays in the argument.',
        explanation: 'Add sentences that provide supporting evidence, remove true-but-irrelevant details, and evaluate purpose by asking how a phrase serves the paragraph\'s main idea.'
      }
    }
  ]
};
