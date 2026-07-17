export const psychThinkingPart7Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 7 of 7 — Synthesis & AP Review**

### Master Integration Table

| Concept | Definition | Key Researcher | AP Trap to Avoid |
|---------|-----------|---------------|------------------|
| **Concept** | Mental category for objects/events | Rosch (1973) | Not the same as "schema" — concepts are categories, schemas are frameworks |
| **Prototype** | Most typical example of a concept | Rosch (1973) | Prototypes vary by CULTURE and person |
| **Schema** | Organized knowledge framework | Bartlett (1932) | Schemas ACTIVELY distort memory, not just store info |
| **Script** | Schema for event sequences | Schank & Abelson | A type of schema — not separate from schemas |
| **Algorithm** | Guaranteed step-by-step procedure | — | Slow but GUARANTEED. Not always practical |
| **Heuristic** | Fast mental shortcut | Tversky & Kahneman | Usually RIGHT — creates systematic errors in specific situations |
| **Insight** | Sudden "aha!" solution | — | Not guessing — involves unconscious processing |
| **Functional fixedness** | Can't see new object uses | Duncker (candle problem) | Fixation on OBJECT function, not strategy |
| **Mental set** | Stuck on one strategy | — | Fixation on STRATEGY, not object |
| **Availability heuristic** | Judging by ease of recall | Tversky & Kahneman | About FREQUENCY judgments, not category membership |
| **Representativeness** | Judging by prototype match | Tversky & Kahneman | About CATEGORY judgments + base rate neglect |
| **Anchoring** | First number biases estimates | Tversky & Kahneman | Works even with ABSURD anchors |
| **Confirmation bias** | Seeking confirming evidence | Wason (2-4-6 task) | Seeking vs. perseverance — different timing |
| **Framing effect** | Presentation changes decision | Tversky & Kahneman | Info is IDENTICAL — only wording changes |
| **Loss aversion** | Losses feel 2x worse than gains | Kahneman & Tversky | About EMOTIONAL impact, not just behavior |
| **Sunk cost fallacy** | Continuing due to past investment | — | Past cost is GONE — focus on future value |
| **Overconfidence** | Overestimating prediction accuracy | — | Affects EXPERTS too — not just laypeople |
| **Belief perseverance** | Maintaining disproven beliefs | — | Maintaining AFTER disconfirmation, not just ignoring evidence |
| **Convergent thinking** | One correct answer | — | Tested by IQ tests, standardized exams |
| **Divergent thinking** | Many possible solutions | Guilford | Alternate uses test; associated with creativity |

### The Big Theme of Cognition

> **"We are cognitive misers"** — The brain uses shortcuts (heuristics, schemas, prototypes) to process information efficiently. These shortcuts usually work well, but they create SYSTEMATIC errors that we can predict and study. Kahneman and Tversky's research program showed that human irrationality is not random — it follows predictable patterns.
      `
    },
    {
      id: 'think7-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement BEST captures the central insight from Tversky and Kahneman\'s research program on heuristics and biases?',
            options: [
              'People are fundamentally irrational and cannot be trusted to make good decisions',
              'Heuristics are mental shortcuts that are usually effective but lead to PREDICTABLE, SYSTEMATIC errors in specific situations',
              'Algorithms are always superior to heuristics for decision-making',
              'Cognitive biases only affect people with lower education levels'
            ],
            correctAnswer: 1,
            explanation: 'Tversky and Kahneman\'s key insight is that human thinking errors are NOT random — they are SYSTEMATIC and PREDICTABLE. Heuristics evolved because they\'re efficient and usually correct. But in specific situations, they create reliable biases. This is why we can study and predict these errors. It\'s NOT that people are "stupid" or "irrational" — it\'s that our cognitive shortcuts have specific, identifiable failure modes. Understanding these patterns is the foundation of behavioral economics.'
          },
          {
            question: 'A student says: "Functional fixedness and mental set are the same thing because both involve being stuck." How should you CORRECT this statement?',
            options: [
              'They ARE the same thing — both are forms of fixation',
              'Functional fixedness is being stuck on an OBJECT\'S typical function; mental set is being stuck on a previously successful STRATEGY. Same category (fixation), different targets',
              'Functional fixedness only applies to physical objects; mental set only applies to abstract problems',
              'Mental set is more severe than functional fixedness'
            ],
            correctAnswer: 1,
            explanation: 'Both ARE forms of fixation (being "stuck"), but they target different things. Functional fixedness: you can\'t see that a BOX could be a SHELF (object → new function). Mental set: you keep using ALGEBRA when a GRAPH would be faster (strategy → new strategy). The student is right that they\'re related, but wrong that they\'re identical. AP exam: if the question mentions an OBJECT, think functional fixedness. If it mentions an APPROACH/METHOD, think mental set.'
          }
        ]
      }
    },
    {
      id: 'think7-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Cross-Unit Connections

| Thinking Concept | Connected To... | The Connection |
|-----------------|-----------------|----------------|
| Schemas | Memory (encoding) | Schemas guide encoding — we encode schema-consistent information better (but also create false memories) |
| Availability heuristic | Anxiety disorders | Anxious individuals overestimate threat frequency because threatening examples are more AVAILABLE in memory |
| Confirmation bias | Social psychology (stereotypes) | Stereotypes persist partly because of confirmation bias — we notice confirming examples and ignore exceptions |
| Framing effect | Health psychology | How health messages are framed affects compliance (gain frame for prevention, loss frame for detection) |
| Overconfidence | Eyewitness testimony | Confident eyewitnesses are more persuasive to juries BUT confidence does not predict accuracy |
| Prototypes | Prejudice/discrimination | Stereotypes are prototype-like — we judge individuals by how well they match our group prototype |
| Functional fixedness | Intelligence testing | Creative intelligence (Sternberg) involves overcoming functional fixedness — seeing new solutions |
| Hindsight bias | Research methods | Scientists must guard against hindsight bias when interpreting results — pre-registration helps |
| Cognitive dissonance | Decision-making | Post-decision dissonance: after choosing, we increase the attractiveness of our choice and decrease alternatives |

### FRQ Template: Thinking & Problem Solving

**Sample Prompt:** "Sam is buying a car. Using concepts from thinking and problem-solving, explain the following behaviors."

**Model Answer Structure:**

**Sam chooses the more expensive car because the salesperson mentioned a price of $60,000 before showing the $35,000 car.**
→ This illustrates **anchoring bias**. The $60,000 mentioned first serves as an anchor that biases Sam's perception of value. The $35,000 car seems like a bargain compared to the $60,000 anchor, even though $35,000 may be above fair market value. Tversky and Kahneman's research showed that even arbitrary anchors influence numerical estimates.

**Sam overestimates the danger of car fires because he recently saw a dramatic news report.**
→ This demonstrates the **availability heuristic**. The vivid, emotionally charged news report makes car fires easy to recall, leading Sam to overestimate their frequency. In reality, car fires are statistically rare. The ease of recall — driven by recency and vividness — biases Sam's judgment of how common car fires actually are.

**Sam uses only Consumer Reports data to compare vehicles.**
→ This represents **central route processing** (from persuasion, cross-unit connection). Sam carefully evaluates argument quality and evidence rather than relying on superficial cues like brand name or celebrity endorsement. However, if he ONLY reads sources that confirm his initial preference, this could also demonstrate **confirmation bias**.
      `
    },
    {
      id: 'think7-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Final Recall Challenge** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Tversky and ___ are the key researchers behind heuristics and biases research', answer: 'Kahneman' },
          { label: 'The ___ heuristic judges likelihood by ease of recall; the representativeness heuristic judges by prototype matching', answer: 'availability' },
          { label: 'Duncker\'s candle problem demonstrates ___ fixedness', answer: 'functional' }
        ]
      }
    },
    {
      id: 'think7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Classic Study** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Tversky & Kahneman (1973) — Letter K study', options: ['Availability heuristic', 'Representativeness heuristic', 'Anchoring bias', 'Framing effect'] },
          { label: 'Tversky & Kahneman (1983) — Linda Problem', options: ['Representativeness heuristic (conjunction fallacy)', 'Availability heuristic', 'Confirmation bias', 'Sunk cost fallacy'] },
          { label: 'Duncker (1945) — Candle Problem', options: ['Functional fixedness', 'Mental set', 'Insight', 'Anchoring bias'] }
        ],
        correctAnswers: ['Availability heuristic', 'Representativeness heuristic (conjunction fallacy)', 'Functional fixedness'],
        hint1: 'Is the population of K-words larger at the start or third position? People judge by how easily examples come to mind.',
        hint2: 'Linda "seems like" a feminist bank teller more than just a bank teller — prototype matching overrides probability.',
        hint3: 'Can\'t see the tack box as a candle shelf — fixated on the object\'s typical function.',
        explanation: 'Letter K = availability (ease of recall biases frequency judgment). Linda = representativeness + conjunction fallacy (prototype matching overrides probability rules). Candle = functional fixedness (can\'t reconceive box as shelf).'
      }
    },
    {
      id: 'think7-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam: High-Frequency Thinking Topics

1. **Availability heuristic** — judging frequency by ease of recall (media influence)
2. **Representativeness heuristic** — prototype matching, base rate neglect, Linda problem
3. **Confirmation bias** — seeking only confirming evidence, Wason's task
4. **Framing effect** — same info, different presentation, Asian disease problem
5. **Functional fixedness** — Duncker's candle problem
6. **Anchoring bias** — first number biases all estimates
7. **Overconfidence** — experts also overconfident, planning fallacy
8. **Convergent vs. divergent thinking** — one answer vs. many possible answers

### Common Misconceptions

| Misconception | Correction |
|--------------|-----------|
| Heuristics are bad/irrational | They're EFFICIENT and usually correct — they just have predictable failure modes |
| Availability = representativeness | Availability = how COMMON. Representativeness = what CATEGORY |
| Algorithms are always better | Impractical for complex problems — chess has $10^{120}$ possible games |
| Functional fixedness = mental set | Fixedness = OBJECT function. Set = STRATEGY |
| Smart people don't have biases | Everyone has biases — expertise may even increase overconfidence |
| Creativity is purely innate | Creativity can be developed through expertise, environment, and motivation |
      `
    },
    {
      id: 'think7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Final AP-Style Questions** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher presents participants with two medical treatments. Treatment A: "This treatment saves 400 out of 600 patients." Treatment B: "This treatment results in the death of 200 out of 600 patients." Most participants prefer Treatment A, even though the outcomes are identical. This finding MOST supports:',
            options: [
              'Loss aversion — participants want to avoid losing patients',
              'The availability heuristic — saved patients are easier to recall',
              'The framing effect — identical outcomes are perceived differently based on how they\'re described (gains vs. losses)',
              'Overconfidence — participants overestimate Treatment A\'s success'
            ],
            correctAnswer: 2,
            explanation: 'Classic framing effect: "saves 400 out of 600" and "200 out of 600 die" are mathematically IDENTICAL. But the gain frame ("saves") makes Treatment A seem more appealing than the loss frame ("die"). This is Tversky and Kahneman\'s Asian disease problem with different numbers. The key: the INFORMATION is the same — only the WORDING changes. Loss aversion is tempting but incorrect because loss aversion involves weighing actual gains against losses, not just reframing the same outcome.'
          },
          {
            question: 'Which of the following scenarios BEST demonstrates the combined effect of the representativeness heuristic AND base rate neglect?',
            options: [
              'A person fears flying more after watching a movie about a plane crash',
              'A person describes someone as "quiet, organized, and detail-oriented" and assumes they are an accountant rather than a teacher, despite teachers outnumbering accountants 10 to 1',
              'A person continues investing in a failing stock because they\'ve already invested heavily',
              'A person estimates the population of a city too high because they were given a high anchor number'
            ],
            correctAnswer: 1,
            explanation: 'This combines BOTH errors: (1) Representativeness heuristic — the description ("quiet, organized, detail-oriented") matches the PROTOTYPE of an accountant, leading to a probability judgment based on similarity. (2) Base rate neglect — teachers outnumber accountants 10:1, so statistically, even a "quiet, organized" person is more likely to be a teacher. But the vivid description overrides this statistical fact. This is exactly the structure of the original "Tom W." and "Linda" problems by Tversky and Kahneman. Option A = availability. Option C = sunk cost. Option D = anchoring.'
          }
        ]
      }
    }
  ]
}
