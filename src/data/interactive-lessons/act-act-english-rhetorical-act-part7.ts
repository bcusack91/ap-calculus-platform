export const actRhetoricalPart7Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet & Mixed ACT Rhetorical Questions**

You've covered all the major rhetorical skills tested on the ACT. Here's your quick-reference cheat sheet:

| Skill | Key Rule |
|-------|---------|
| **Strategy (Add/Delete)** | Add if it supports the main idea; delete if off-topic or redundant |
| **Organisation** | Sentences follow logical order; topic sentences introduce paragraphs |
| **Style & Tone** | Be concise, avoid redundancy, match the passage's register |
| **Transitions** | Match the logical relationship: contrast, addition, or cause-effect |
| **Combining** | Merge choppy sentences; use appositives, participles, coordination |
| **Purpose & Audience** | Identify inform vs. persuade vs. entertain; match content to audience |

**Test-Day Strategy:**
1. Read the full paragraph before answering rhetorical questions.
2. Identify the paragraph's main idea first.
3. For "best accomplishes" questions, focus on the stated goal — not your personal preference.
4. When in doubt, pick the most concise answer that maintains meaning.
      `
    },
    {
      id: 'act-rh7-cheat',
      type: 'text' as const,
      content: `
## Quick Decision Guides

**Add or Delete?**
- Ask: "Does this sentence support the paragraph's main idea?"
- Yes → Keep/Add.  No → Delete.

**Which Transition?**
- Ideas agree → *moreover, furthermore, also*
- Ideas disagree → *however, nevertheless, on the other hand*
- One causes the other → *therefore, consequently, as a result*
- Second illustrates first → *for example, for instance*

**Conciseness Check:**
- Can you say it in fewer words? → Pick the shorter option.
- Does an answer repeat what's already said? → It's redundant.
- Is "DELETE" an option and the sentence works without the underlined portion? → Seriously consider DELETE.

**Tone Matching:**
- Formal passage → no slang, no contractions, precise vocabulary.
- Narrative passage → sensory details, natural dialogue allowed.
- The answer must match the surrounding sentences' level of formality.

**Purpose Identification:**
- Calls to action = persuade.
- Neutral facts and data = inform.
- Story with characters = narrate/entertain.
- Step-by-step process = explain.
      `
    },
    {
      id: 'act-rh7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Rhetorical Skills** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph about the benefits of reading includes the sentence: "Books are made of paper, which comes from trees." Should this sentence be kept?',
            options: [
              'Yes — it adds important scientific context.',
              'Yes — it provides a relevant detail about books.',
              'No — it is unrelated to the benefits of reading.',
              'No — it contradicts the paragraph\'s argument.'
            ],
            correctAnswer: 2,
            explanation: 'The paragraph is about the *benefits* of reading. The material composition of books is irrelevant to that topic. It doesn\'t contradict anything — it\'s simply off-topic.'
          },
          {
            question: '"The research was funded by a government grant. __________, the findings were published in a peer-reviewed journal." Which transition best fits?',
            options: [
              'However',
              'For example',
              'Subsequently',
              'On the other hand'
            ],
            correctAnswer: 2,
            explanation: 'The sentence describes a sequence: first funding, then publication. "Subsequently" (meaning "after that") correctly signals this chronological relationship. There is no contrast or cause-effect here.'
          }
        ]
      }
    },
    {
      id: 'act-rh7-mixed',
      type: 'text' as const,
      content: `
## Common Mistakes to Avoid

**Mistake 1: Choosing an answer because it "sounds smart."**
A complex-sounding answer that doesn't match the passage's tone is wrong. The ACT penalises unnecessary complexity.

**Mistake 2: Ignoring the specific question being asked.**
If the question asks "which choice most effectively sets up the information that follows," you must look at what follows — not just whether the answer sounds good in isolation.

**Mistake 3: Adding information that's true but irrelevant.**
True ≠ relevant. A fact about photosynthesis doesn't belong in a paragraph about the history of photography, no matter how accurate it is.

**Mistake 4: Picking the longest answer to "be safe."**
On the ACT, length often correlates with wrongness. Extra words usually mean redundancy or wordiness.

**Mistake 5: Skipping the passage context.**
Rhetorical questions can't be answered by looking at the underlined portion alone. You need to understand the whole paragraph's purpose.
      `
    },
    {
      id: 'act-rh7-input1',
      type: 'input-boxes' as const,
      content: `
**Review Challenge** 📝

Answer each question with a single key term.

1) What type of transition would you use between a problem and its solution? (two words, e.g., "cause-effect" or "problem-solution" or similar)
2) If an answer choice contains the phrase "the reason is because," you should flag it as __________ (one word).
3) When the ACT asks whether an essay achieves a specific goal, you should evaluate the essay against the __________ (one word, starts with "g").
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['cause-effect', 'redundant', 'goal'],
        hint1: 'A problem leading to a solution is one thing causing/necessitating another.',
        hint2: '"The reason is because" says "reason" and "because" — which both mean the same thing.',
        hint3: 'The question states a specific g____ — evaluate strictly against it.',
        explanation: 'Problem → solution uses cause-effect transitions. "The reason is because" is redundant (reason = because). Effectiveness questions must be judged against the specific goal stated in the question.'
      }
    },
    {
      id: 'act-rh7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Final Mixed Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision is most concise? Original: "It is a fact that is well known that exercise has a positive effect on mental health."',
            options: [
              'It is widely known that exercise positively affects mental health.',
              'Exercise is well known to be positive for mental health.',
              'Exercise improves mental health.',
              'The fact that exercise is beneficial for mental health is well known by many people.'
            ],
            correctAnswer: 2,
            explanation: '"Exercise improves mental health" says everything in four words. The original\'s "it is a fact that is well known" is pure padding, and "has a positive effect on" is a wordy way of saying "improves."'
          },
          {
            question: 'A passage about climate change is written in formal academic tone. Which sentence fits this passage?',
            options: [
              'Climate change is, like, a really big deal for everyone.',
              'The implications of climate change extend across economic, social, and environmental domains.',
              'Climate change is super scary and we should totally fix it.',
              'Honestly, climate change freaks me out a ton.'
            ],
            correctAnswer: 1,
            explanation: 'Only option B matches a formal academic register. The other options use slang ("like," "totally," "freaks me out") or casual intensifiers that are inappropriate in academic writing.'
          }
        ]
      }
    },
    {
      id: 'act-rh7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence that repeats information already stated should be:',
            options: ['kept for emphasis', 'deleted as redundant', 'moved to the introduction', 'rewritten in passive voice']
          },
          {
            label: '"She was unique in every possible way" — the best revision is:',
            options: ['She was very unique in every way.', 'She was unique.', 'She was extremely and very unique.', 'She was unique and special in every way.']
          },
          {
            label: 'When an ACT question asks "Which choice best introduces this paragraph?" you should pick the answer that:',
            options: ['is the longest and most detailed', 'states the paragraph\'s main idea clearly', 'uses the most formal vocabulary', 'includes a quotation']
          }
        ],
        correctAnswers: ['deleted as redundant', 'She was unique.', 'states the paragraph\'s main idea clearly'],
        hint1: 'Repetition without purpose = redundancy. Remove it.',
        hint2: '"Unique" is an absolute adjective — it cannot be modified by "very" or "extremely."',
        hint3: 'An introductory sentence = a topic sentence. It should preview the main idea.',
        explanation: 'Redundant sentences should be deleted. "Unique" is absolute and needs no modifiers. Paragraph introductions should clearly state the main idea — that is what a topic sentence does.'
      }
    }
  ]
};
