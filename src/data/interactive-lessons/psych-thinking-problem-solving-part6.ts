export const psychThinkingPart6Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 6 of 7 — Problem-Solving Workshop**

This section integrates ALL thinking and problem-solving concepts into a decision framework for AP exam scenarios.

### Concept Identification Framework

| Ask This Question | If YES → | Key Example |
|-------------------|----------|-------------|
| Is someone judging frequency based on how easily examples come to mind? | **Availability heuristic** | Fear of flying after seeing crash on news |
| Is someone judging category membership based on similarity to a prototype? | **Representativeness heuristic** | Assuming quiet person is a librarian |
| Is someone's estimate influenced by the first number they heard? | **Anchoring bias** | Car price seems fair because sticker price was high |
| Is someone only seeking confirming evidence? | **Confirmation bias** | Anti-vax parent only reading anti-vax websites |
| Is the same information presented differently changing a decision? | **Framing effect** | "90% survival" vs. "10% mortality" |
| Is someone continuing because of past investment? | **Sunk cost fallacy** | Watching a bad movie because you paid for the ticket |
| Is someone overweighting a potential loss? | **Loss aversion** | Refusing a fair bet because the potential loss feels worse |
| Is someone stuck on one approach to a problem? | **Mental set** | Always solving problems the same way |
| Is someone unable to see a new use for a familiar object? | **Functional fixedness** | Can't see a box as a shelf (Duncker's candle problem) |
| Is someone overestimating their prediction accuracy? | **Overconfidence** | "I'm 99% certain" but correct only 70% of the time |
| Is someone maintaining beliefs despite disconfirming evidence? | **Belief perseverance** | Still believing a myth after reading the correction |

### The Hardest AP Distinctions

| Pair | How to Tell Them Apart |
|------|----------------------|
| **Availability vs. Representativeness** | Availability = "How COMMON is this?" (ease of recall). Representativeness = "What CATEGORY is this?" (prototype matching) |
| **Mental set vs. Functional fixedness** | Mental set = stuck on a STRATEGY. Functional fixedness = stuck on an OBJECT'S function |
| **Framing effect vs. Anchoring** | Framing = SAME info, different presentation. Anchoring = FIRST number biases subsequent estimates |
| **Confirmation bias vs. Belief perseverance** | Confirmation = SEEKING only confirming evidence. Perseverance = MAINTAINING beliefs after disconfirmation |
| **Loss aversion vs. Sunk cost fallacy** | Loss aversion = losses FEEL worse than gains. Sunk cost = continuing because of PAST investment |
      `
    },
    {
      id: 'think6-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A doctor diagnoses a patient with a rare disease after seeing two cases last week, even though the symptoms also match a much more common condition. The doctor\'s judgment is MOST influenced by:',
            options: [
              'The representativeness heuristic — the symptoms match the rare disease prototype',
              'The availability heuristic — the recent cases make the rare disease come to mind easily, overriding base rate information',
              'Anchoring bias — the first diagnosis anchors subsequent judgments',
              'Confirmation bias — the doctor only looks for symptoms of the rare disease'
            ],
            correctAnswer: 1,
            explanation: 'The KEY is "after seeing two cases last week" — RECENCY makes the rare disease easy to recall, inflating the doctor\'s estimate of its likelihood. This is availability, not representativeness. If the question said "the symptoms perfectly match the textbook description of the rare disease," THAT would be representativeness (matching a prototype). Here, it\'s the RECENT experience that biases the judgment. Note: this also involves base rate neglect — the common condition should be considered first, but available recent examples override the base rate.'
          },
          {
            question: 'A negotiator knows she should always make the FIRST offer in a salary negotiation. Her strategy is based on exploiting which cognitive bias in the other party?',
            options: [
              'The availability heuristic — making salary examples easier to recall',
              'The framing effect — presenting the salary as a gain rather than a cost',
              'Anchoring bias — the first number mentioned biases all subsequent estimates',
              'Confirmation bias — the other party will seek evidence supporting the first offer'
            ],
            correctAnswer: 2,
            explanation: 'Anchoring: the first number in a negotiation becomes the "anchor" that pulls all subsequent offers toward it. If the negotiator opens with \\$90,000, the counterparty\'s counteroffer will be higher than if she had opened with \\$70,000 — even if the counterparty knows the anchor is strategic. Research consistently shows that anchors affect judgment even when people KNOW they\'re arbitrary (recall the wheel-of-fortune study). This is why negotiations experts advise: always make the first offer.'
          }
        ]
      }
    },
    {
      id: 'think6-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Multi-Concept Scenario Analysis

**Scenario: A Medical Decision**

A patient is deciding whether to have surgery. Analyze each element:

| Event | Concept | Why? |
|-------|---------|------|
| The doctor says "This surgery has a 95% success rate" instead of "a 5% failure rate" | **Framing effect** | Same information, different presentation → different patient response |
| The patient recalls a friend who had a bad surgical outcome and overestimates risk | **Availability heuristic** | One vivid example makes negative outcomes seem more common |
| The patient has already spent $5,000 on consultations and feels they "have to" proceed | **Sunk cost fallacy** | Past investment (which can't be recovered) drives the decision |
| The patient reads ONLY positive reviews of the surgeon and ignores negative ones | **Confirmation bias** | Selectively seeking information that supports the decision to proceed |
| The patient says they're "99% sure" they'll recover, when actual data suggest 85% | **Overconfidence** | Overestimating the accuracy of personal prediction |

### Common AP Scenario Types for Thinking

**Type 1: "Which heuristic/bias explains...?"**
- Identify the KEY behavioral indicator
- Use the identification framework above

**Type 2: "Two students disagree about..."**
- Often tests framing effect (same data, different interpretation based on how it's presented)
- Or confirmation bias (each student finds evidence supporting their own position)

**Type 3: "What went wrong with this decision?"**
- Often involves multiple biases working together
- Look for: anchoring (first info), availability (vivid examples), sunk cost (past investment), overconfidence (too certain)

### The Bias Cascade: How Multiple Biases Compound

Real decisions often involve MULTIPLE biases at once:

1. **Anchoring** sets the initial estimate
2. **Confirmation bias** leads to seeking only supporting evidence
3. **Overconfidence** inflates certainty in the flawed estimate
4. **Belief perseverance** maintains the position even after disconfirmation
5. **Sunk cost fallacy** keeps you invested even when evidence says to stop
      `
    },
    {
      id: 'think6-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Availability heuristic judges frequency by ___ of recall; representativeness judges category by prototype matching', answer: 'ease' },
          { label: 'Mental set is fixation on a strategy; functional ___ is fixation on an object\'s typical use', answer: 'fixedness' },
          { label: 'The ___ effect is when identical information presented differently leads to different decisions', answer: 'framing' }
        ]
      }
    },
    {
      id: 'think6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A person is asked whether Gandhi died before or after age 140 (absurd anchor), then estimates he died at 67 — higher than people given a lower anchor', options: ['Anchoring bias', 'Availability heuristic', 'Framing effect', 'Overconfidence'] },
          { label: 'After seeing a documentary about earthquakes, a person buys earthquake insurance even though they live in a seismically inactive area', options: ['Availability heuristic', 'Representativeness heuristic', 'Anchoring bias', 'Confirmation bias'] },
          { label: 'A student who can\'t figure out how to prop open a door with a textbook because "textbooks are for reading"', options: ['Functional fixedness', 'Mental set', 'Confirmation bias', 'Sunk cost fallacy'] }
        ],
        correctAnswers: ['Anchoring bias', 'Availability heuristic', 'Functional fixedness'],
        hint1: 'The absurd first number (140) still pulled estimates higher — even though everyone knows it\'s ridiculous.',
        hint2: 'The vivid documentary (easy to recall) inflated the perceived likelihood of earthquakes.',
        hint3: 'Can\'t see the textbook as anything other than its normal function (reading material).',
        explanation: 'Gandhi anchor = anchoring (even absurd first numbers bias estimates). Earthquake documentary = availability (vivid, recent information makes event seem more likely). Textbook as door prop = functional fixedness (can\'t reconceive the object beyond its typical function).'
      }
    },
    {
      id: 'think6-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Process of Elimination for Thinking Questions

**Step 1: Is it about judging FREQUENCY or LIKELIHOOD?**
- How common is X? → Availability or Representativeness
- How easily do examples come to mind? → **Availability**
- How well does X match a category prototype? → **Representativeness**

**Step 2: Is it about a NUMBER or ESTIMATE?**
- Biased by first piece of info → **Anchoring**
- Overestimating own accuracy → **Overconfidence**

**Step 3: Is it about EVIDENCE and BELIEFS?**
- Only seeking confirming evidence → **Confirmation bias**
- Maintaining beliefs despite disconfirmation → **Belief perseverance**
- "I knew it all along" → **Hindsight bias**

**Step 4: Is it about a DECISION?**
- Same info, different presentation → **Framing effect**
- Continuing because of past costs → **Sunk cost fallacy**
- Overweighting potential losses → **Loss aversion**

**Step 5: Is it about being STUCK?**
- Stuck on a strategy → **Mental set**
- Stuck on an object's function → **Functional fixedness**

> **AP Tip:** When two concepts seem equally valid, look for the MOST SPECIFIC match. "A person fears sharks after watching Jaws" = availability (vivid media example easy to recall). "A person assumes someone in glasses is smart" = representativeness (matches the "smart person" prototype).
      `
    },
    {
      id: 'think6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A startup founder has invested \\$500,000 and two years into a product that market research now shows has no viable customer base. She decides to invest another \\$200,000(saying "We\'ve come too far to quit now." Later, she is also overheard saying "I\'m 90% confident this will succeed." Which TWO biases are MOST evident?',
            options: [
              'Availability heuristic and anchoring bias',
              'Sunk cost fallacy ("We\'ve come too far") and overconfidence ("90% confident" despite evidence suggesting failure)',
              'Framing effect and representativeness heuristic',
              'Confirmation bias and mental set'
            ],
            correctAnswer: 1,
            explanation: 'Two biases work together: (1) SUNK COST FALLACY — "We\'ve come too far to quit" explicitly references past investment (time, money) as the reason to continue, rather than evaluating future prospects. The $500,000 is gone whether she continues or not. (2) OVERCONFIDENCE — claiming 90% confidence despite market research showing no viable customers. Her certainty dramatically exceeds what the evidence supports. These two biases compound: the sunk cost fallacy keeps her invested, and overconfidence prevents her from accurately assessing the risk.'
          },
          {
            question: 'In a research study, participants are asked: "Is the population of Chicago more or less than 20 million?" and then asked to estimate Chicago\'s actual population. A second group is asked "more or less than 1 million?" and then estimates. What pattern will the researchers MOST likely find?',
            options: [
              'Both groups will give accurate estimates because they know the anchor is arbitrary',
              'The "20 million" group will estimate HIGHER than the "1 million" group, even though both anchors are clearly wrong — demonstrating anchoring bias',
              'The "20 million" group will estimate LOWER because they overcompensate for the high anchor',
              'Results will be random because anchoring only works with realistic numbers'
            ],
            correctAnswer: 1,
            explanation: 'Anchoring bias operates even when anchors are CLEARLY arbitrary or wrong. The "20 million" anchor will pull estimates UP, while the "1 million" anchor will pull estimates DOWN — even though participants KNOW these numbers are extreme. This is the same finding as Tversky & Kahneman\'s wheel-of-fortune study: a random number on a spinning wheel influenced estimates about African UN membership. Anchoring is remarkably robust — knowing about it barely reduces its influence.'
          }
        ]
      }
    }
  ]
}
