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
| **Assimilation vs. accommodation** | Fitting new information into a schema vs. changing the schema | Piaget | Accommodation CHANGES the schema; assimilation leaves it as is |
| **Algorithm** | Guaranteed step-by-step procedure | — | Slow but GUARANTEED. Not always practical |
| **Heuristic** | Fast mental shortcut | Tversky & Kahneman | Usually RIGHT — creates systematic errors in specific situations |
| **Insight** | Sudden "aha!" solution | — | Not guessing — involves unconscious processing |
| **Functional fixedness** | Can't see new object uses | Duncker (candle problem) | Fixation on OBJECT function, not strategy |
| **Mental set** | Stuck on one strategy | — | Fixation on STRATEGY, not object |
| **Availability heuristic** | Judging by ease of recall | Tversky & Kahneman | About FREQUENCY judgments, not category membership |
| **Representativeness** | Judging by prototype match | Tversky & Kahneman | About CATEGORY judgments + base rate neglect |
| **Priming** | Earlier stimulus tilts a later judgment | — | The prime comes BEFORE and is separate from the choice |
| **Confirmation bias** | Seeking confirming evidence | Wason (2-4-6 task) | Seeking vs. perseverance — different timing |
| **Framing effect** | Presentation changes decision | Tversky & Kahneman | Info is IDENTICAL — only wording changes |
| **Gambler's fallacy** | Believing a chance outcome is "due" | — | Independent events do not balance out in the short run |
| **Sunk cost fallacy** | Continuing due to past investment | — | Past cost is GONE — focus on future value |
| **Overconfidence** | Overestimating prediction accuracy | — | Affects EXPERTS too — not just laypeople |
| **Belief perseverance** | Maintaining disproven beliefs | — | Maintaining AFTER disconfirmation, not just ignoring evidence |
| **Convergent thinking** | One correct answer | — | Tested by IQ tests, standardized exams |
| **Divergent thinking** | Many possible solutions | Guilford | Alternate uses test; associated with creativity |
| **Executive functions** | Generating, organizing, planning, and carrying out goal-directed behavior | — | Rely heavily on the prefrontal cortex; not the same as IQ |

### The Big Theme of Cognition

> **"We are cognitive misers"** — The brain uses shortcuts (heuristics, schemas, prototypes) to process information efficiently. These shortcuts usually work well, but they create SYSTEMATIC errors that we can predict and study. Research on heuristics and biases showed that human irrationality is not random — it follows predictable patterns.
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
              'People decide at random, so their judgment errors follow no predictable pattern at all',
              'Heuristics are efficient shortcuts that produce predictable, systematic errors in certain situations',
              'Algorithms beat heuristics in every situation, so careful reasoning removes judgment errors',
              'Cognitive biases affect mainly people with less education and fade with more schooling'
            ],
            correctAnswer: 1,
            explanation: 'Tversky and Kahneman\'s key insight is that human thinking errors are NOT random — they are SYSTEMATIC and PREDICTABLE. Heuristics evolved because they\'re efficient and usually correct. But in specific situations, they create reliable biases. This is why we can study and predict these errors. It\'s NOT that people are "stupid" or "irrational" — it\'s that our cognitive shortcuts have specific, identifiable failure modes. Understanding these patterns lets psychologists predict when judgment will go wrong.'
          },
          {
            question: 'A student says: "Functional fixedness and mental set are the same thing because both involve being stuck." How should you CORRECT this statement?',
            options: [
              'They are the same: both are forms of fixation, so the two terms can be used interchangeably',
              'They differ in target: functional fixedness fixes on an object\'s usual use, mental set on a past strategy',
              'They differ in domain: functional fixedness applies to physical objects, mental set to abstract problems',
              'They differ in severity: mental set is a stronger and longer-lasting fixation than functional fixedness'
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
| Executive functions | The brain (prefrontal cortex) | Planning, organizing, and carrying out goal-directed behavior depend on the prefrontal cortex, so damage there disrupts them |
| Hindsight bias | Research methods | Scientists must guard against hindsight bias when interpreting results — pre-registration helps |
| Cognitive dissonance | Decision-making | Post-decision dissonance: after choosing, we increase the attractiveness of our choice and decrease alternatives |

### Free-Response Connection: Thinking Concepts on the AAQ and EBQ

The free-response section has two questions: the **Article Analysis Question (AAQ, 7 points, 6 parts)** and the **Evidence-Based Question (EBQ, 7 points, 3 parts)**. Thinking concepts show up in both.

**Practice study summary (hypothetical):** Researchers recruited 90 volunteers from a university participant pool and randomly assigned them to read a flu-shot flyer that said either "the shot protects 90% of people" or "10% of people who get the shot still catch the flu." Participants then rated their intention to get vaccinated on a 1–7 scale. The "protects 90%" group's mean was 5.8; the "10% still catch it" group's mean was 4.1. All participants gave informed consent and were debriefed.

| AAQ task | What a strong answer says |
|----------|---------------------------|
| Identify the research method | An experiment: wording was manipulated and participants were randomly assigned |
| Operational definition | Intention to vaccinate = the participant's rating on the 1–7 scale |
| What the statistic shows | The positive wording produced a higher mean intention (5.8 vs. 4.1) |
| Ethical guideline | Informed consent: participants agreed to take part before reading the flyer |
| Generalizability | Limited: a university volunteer pool may not represent older adults deciding on flu shots |
| Support or refute | The higher mean for the positive wording supports the hypothesis that framing changes intentions |

**EBQ use:** if sources show that people overestimate rare but vivid risks, a claim about public-health messaging can be explained with the **availability heuristic** (Source 1) and a second source can be explained with a DIFFERENT concept, such as the **framing effect** (Source 2). Each explanation ties the specific source evidence to the concept.
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
          { label: 'An earlier, often unnoticed stimulus that shifts a later judgment is called ___', answer: 'priming' },
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
          { label: 'Tversky & Kahneman (1973) — Letter K study', options: ['Availability heuristic', 'Representativeness heuristic', 'Priming', 'Framing effect'] },
          { label: 'Tversky & Kahneman (1983) — Linda Problem', options: ['Representativeness heuristic', 'Availability heuristic', 'Confirmation bias', 'Sunk cost fallacy'] },
          { label: 'Duncker (1945) — Candle Problem', options: ['Functional fixedness', 'Mental set', 'Insight', 'Framing effect'] }
        ],
        correctAnswers: ['Availability heuristic', 'Representativeness heuristic', 'Functional fixedness'],
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
6. **Priming and the gambler's fallacy** — an earlier stimulus tilts a choice; a chance event is wrongly seen as "due"
7. **Overconfidence** — experts also overconfident, planning fallacy
8. **Convergent vs. divergent thinking** — one answer vs. many possible answers
9. **Executive functions** — planning, organizing, and carrying out goal-directed behavior

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
              'Priming — the word "saves" activates hopeful ideas before participants read Treatment B',
              'The availability heuristic — saved patients are easier to picture and recall than deaths',
              'The framing effect — the same result is judged differently depending on wording',
              'Overconfidence — participants overestimate Treatment A\'s success'
            ],
            correctAnswer: 2,
            explanation: 'Classic framing effect: "saves 400 out of 600" and "200 out of 600 die" are mathematically IDENTICAL. But the gain frame ("saves") makes Treatment A seem more appealing than the loss frame ("die"). This is Tversky and Kahneman\'s Asian disease problem with different numbers. The key: the INFORMATION is the same — only the WORDING changes. Priming is tempting but incorrect because nothing was presented BEFORE the choice; the difference lies in how the choice itself was worded.'
          },
          {
            question: 'Which of the following scenarios BEST demonstrates the combined effect of the representativeness heuristic AND base rate neglect?',
            options: [
              'Fearing flying more after watching a vivid movie about a plane crash, despite safety statistics',
              'Judging someone "quiet and detail-oriented" to be an accountant, though teachers far outnumber accountants',
              'Holding on to a failing stock because a large amount has already been invested in it',
              'Believing a coin is due to land tails after it has landed heads five times in a row'
            ],
            correctAnswer: 1,
            explanation: 'This combines BOTH errors: (1) Representativeness heuristic — the description ("quiet and detail-oriented") matches the PROTOTYPE of an accountant, leading to a probability judgment based on similarity. (2) Base rate neglect — teachers far outnumber accountants, so statistically, even a quiet, detail-oriented person is more likely to be a teacher. But the vivid description overrides this statistical fact. This is exactly the structure of the original "Tom W." and "Linda" problems by Tversky and Kahneman. Fear of flying after a crash movie = availability. Holding the failing stock = sunk cost. The coin belief = the gambler\'s fallacy.'
          }
        ]
      }
    }
  ]
}
