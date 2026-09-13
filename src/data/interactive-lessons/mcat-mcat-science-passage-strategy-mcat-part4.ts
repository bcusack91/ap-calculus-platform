export const mcatSciPassagePart4Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp4-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 4 of 7 — Question Types & Strategies**

### MCAT Question Categories

| Type | % of Exam | What It Tests |
|------|----------|---------------|
| **Discrete** (standalone) | ~25% | Pure content knowledge, no passage |
| **Passage-based: Recall** | ~15% | Finding info in the passage |
| **Passage-based: Application** | ~35% | Applying passage info to new situations |
| **Passage-based: Reasoning** | ~25% | Drawing conclusions from data/experiments |

### Strategy by Question Type

**Recall questions**: Answer is IN the passage — go back and find it!
**Application questions**: Use passage + your knowledge to solve a new problem
**Reasoning questions**: What do the results mean? What's the best conclusion?

### Eliminating Wrong Answers

Common wrong answer patterns:
- **True but irrelevant**: Statement is factually correct but doesn't answer the question
- **Extreme language**: "Always," "never," "completely," "no effect"
- **Opposite of correct**: Tests if you're paying attention
- **Partially correct**: Right concept but wrong detail`
    },
    {
      id: 'sp4-worked',
      type: 'text' as const,
      content: `### Worked Example — Classifying and Attacking a Question

> *Passage fact:* "Mutation X reduces the binding affinity of Enzyme E for its substrate."
>
> *Question:* "Based on the passage, how would Mutation X most likely affect the $K_m$ of Enzyme E?"

**Step 1 — Classify the question.** It asks you to combine a passage fact (lower affinity) with outside knowledge (the meaning of $K_m$). That makes it an **application** question, not pure recall.

**Step 2 — Retrieve the needed concept.** $K_m$ is the substrate concentration at half-maximal velocity and is *inversely* related to affinity. Lower affinity → the enzyme needs *more* substrate to reach half-max → **$K_m$ increases**.

**Step 3 — Predict before reading choices.** Predicted answer: "$K_m$ increases." Now scan the options for that idea.

**Step 4 — Eliminate by trap type.**
- "$K_m$ decreases" → *opposite* of correct (reversed relationship).
- "$K_m$ is completely abolished" → *extreme language*; the passage says reduced, not eliminated.
- "$V_{max}$ doubles" → *true-but-irrelevant / out of scope*; the question asked about $K_m$.
- "$K_m$ increases" → matches the prediction. **Select it.**

Predicting first turns the answer choices into a confirmation step and makes trap answers easy to discard.`
    },
    {
      id: 'sp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Question Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `An answer choice states "The mutation completely eliminates all enzyme function." This is likely wrong because:`,
            options: [`Absolute words like "completely" and "all" are usually wrong`, `It uses technical terms, which correct answers tend to avoid`, `It restates the passage, and restated claims are usually traps`, `Mutations can never alter the function of an enzyme`],
            correctAnswer: 0,
            explanation: `The MCAT loves nuance. Words like "completely," "always," "never," "all" are red flags. In biology, most mutations affect function partially (reduced activity) rather than eliminating it entirely. Moderate, qualified language is usually correct. Technical vocabulary and restating the passage are not warning signs, and mutations certainly can alter enzyme function.`
          },
          {
            question: `In the worked example, why does reduced substrate affinity increase $K_m$?`,
            options: [`Lower affinity means more substrate is needed to reach half $V_{max}$`, `Lower affinity means less substrate is needed to reach half $V_{max}$`, `$K_m$ measures the maximum rate, which falls as affinity drops`, `$K_m$ and affinity are unrelated, so the rise reflects lost enzyme`],
            correctAnswer: 0,
            explanation: `$K_m$ is the substrate concentration at half $V_{max}$. Weaker binding means the half-max point is reached only at higher substrate concentrations, so $K_m$ rises. Affinity and $K_m$ move in opposite directions ($K_m$ is inversely related to affinity). $K_m$ is not a maximum rate — that is $V_{max}$ — and losing active enzyme lowers $V_{max}$ rather than raising $K_m$.`
          },
          {
            question: `A question asks specifically about $K_m$, but one tempting choice correctly states that $V_{max}$ is unchanged. That choice is a:`,
            options: [`true-but-irrelevant trap, since it ignores $K_m$`, `correct answer, since any true statement earns credit`, `strong-language trap, since it overstates the effect`, `reversal trap, since it states the opposite finding`],
            correctAnswer: 0,
            explanation: `A statement can be factually true yet fail to address the question. The stem asked about $K_m$; an answer about $V_{max}$ is out of scope even if accurate. It uses no extreme wording and does not reverse any finding. Always match the answer to the exact question asked.`
          }
        ]
      }
    },
    {
      id: 'sp4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Classifying Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: `A question says "According to paragraph 2, the catalyst used was…" This is a:`,
            options: [`Recall question, answered directly by the passage text`, `Reasoning question, requiring synthesis of the data`, `Application question, requiring outside content knowledge`, `Discrete question, independent of the passage text`],
            correctAnswer: 0,
            explanation: `"According to the passage/paragraph" signals a recall question. The answer is explicitly stated — go back to the cited location and read it rather than relying on memory.`
          },
          {
            question: `Which question type asks you to take the passage's results and predict the outcome of a NEW, unstated scenario?`,
            options: [`Application`, `Recall`, `A purely discrete question`, `Definitional lookup`],
            correctAnswer: 0,
            explanation: `Application questions extend passage information to a novel situation, usually by combining it with your content knowledge. Recall stays inside the passage; reasoning interprets the existing data.`
          },
          {
            question: `Two remaining choices describe the same trend, but one adds "and this proves the mechanism is competitive inhibition." Without supporting data, that addition makes it:`,
            options: [`Partially correct, since only the added claim is unsupported`, `Fully correct, because added detail makes a choice more precise`, `Out of scope, since it says nothing about the observed trend`, `Equivalent to the other choice, since both describe the same trend`],
            correctAnswer: 0,
            explanation: `The trend portion may be right, but tacking on an unsupported mechanistic claim makes the whole choice wrong. The MCAT rewards the answer that stays within what the data actually support. The choice does describe the trend, so it is not out of scope, and the added claim makes it different from the other choice rather than equivalent.`
          }
        ]
      }
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- ~60% of questions require passage + external knowledge (not just reading)
- Classify first: recall (find it), application (apply it), reasoning (interpret data)
- Predict your answer BEFORE reading the choices, then confirm
- Eliminate extreme language, true-but-irrelevant, opposite, and partially-correct answers
- If stuck, eliminate 2 answers and make an educated guess (no penalty for guessing)`
    }
  ]
};
