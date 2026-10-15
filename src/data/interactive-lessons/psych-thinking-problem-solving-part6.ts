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
| Did an earlier, often unnoticed, stimulus tilt a later choice? | **Priming** | Shoppers buy French wine while French music plays |
| Is someone only seeking confirming evidence? | **Confirmation bias** | Anti-vax parent only reading anti-vax websites |
| Is the same information presented differently changing a decision? | **Framing effect** | "90% survival" vs. "10% mortality" |
| Is someone continuing because of past investment? | **Sunk cost fallacy** | Watching a bad movie because you paid for the ticket |
| Is someone treating an independent chance event as "due"? | **Gambler's fallacy** | Betting on black because red came up eight times |
| Is someone stuck on one approach to a problem? | **Mental set** | Always solving problems the same way |
| Is someone unable to see a new use for a familiar object? | **Functional fixedness** | Can't see a box as a shelf (Duncker's candle problem) |
| Is someone overestimating their prediction accuracy? | **Overconfidence** | "I'm 99% certain" but correct only 70% of the time |
| Is someone maintaining beliefs despite disconfirming evidence? | **Belief perseverance** | Still believing a myth after reading the correction |

### The Hardest AP Distinctions

| Pair | How to Tell Them Apart |
|------|----------------------|
| **Availability vs. Representativeness** | Availability = "How COMMON is this?" (ease of recall). Representativeness = "What CATEGORY is this?" (prototype matching) |
| **Mental set vs. Functional fixedness** | Mental set = stuck on a STRATEGY. Functional fixedness = stuck on an OBJECT'S function |
| **Framing effect vs. Priming** | Framing = the SAME information worded differently at the moment of choice. Priming = an EARLIER, separate stimulus activates ideas that tilt the later choice |
| **Confirmation bias vs. Belief perseverance** | Confirmation = SEEKING only confirming evidence. Perseverance = MAINTAINING beliefs after disconfirmation |
| **Gambler's fallacy vs. Sunk cost fallacy** | Gambler's fallacy = a wrong belief that a chance outcome is "due." Sunk cost = continuing because of PAST investment |
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
              'The representativeness heuristic — the symptoms match the textbook prototype of the rare disease',
              'The availability heuristic — two recent encounters make the rare disease easy to recall',
              'Mental set — the doctor relies on a diagnostic routine that worked well in the past',
              'Confirmation bias — the doctor searches only for symptoms that would confirm the rare disease'
            ],
            correctAnswer: 1,
            explanation: 'The KEY is "after seeing two cases last week" — RECENCY makes the rare disease easy to recall, inflating the doctor\'s estimate of its likelihood. This is availability, not representativeness. If the question said "the symptoms perfectly match the textbook description of the rare disease," THAT would be representativeness (matching a prototype). Here, it\'s the RECENT experience that biases the judgment. Note: this also involves base rate neglect — the common condition should be considered first, but available recent examples override the base rate.'
          },
          {
            question: 'Before rating a job applicant, half of a group of managers read a short article about teamwork, and the other half read an article about gardening. Managers who read the teamwork article rated the applicant\'s cooperative traits higher, even though everyone saw the same résumé. This result BEST illustrates:',
            options: [
              'The availability heuristic — managers recalled their own best team members while rating',
              'The framing effect — the résumé was worded to stress the applicant\'s cooperative traits',
              'Priming — the earlier reading activated ideas that shaped the later rating',
              'Confirmation bias — managers looked only for evidence that matched their first view'
            ],
            correctAnswer: 2,
            explanation: 'An earlier, unrelated article activated teamwork-related ideas that tilted the later judgment, which is priming. The résumé was identical, so this is not framing; nothing suggests the managers recalled examples or searched selectively for confirming evidence.'
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
- Look for: priming (earlier stimulus), availability (vivid examples), sunk cost (past investment), overconfidence (too certain)

### The Bias Cascade: How Multiple Biases Compound

Real decisions often involve MULTIPLE biases at once:

1. **Availability** makes a vivid example feel typical
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
          { label: 'After a slot machine has gone 200 pulls without a jackpot, a player switches to it because it is "about to pay out"', options: ['Gambler\'s fallacy', 'Availability heuristic', 'Framing effect', 'Overconfidence'] },
          { label: 'After seeing a documentary about earthquakes, a person buys earthquake insurance even though they live in a seismically inactive area', options: ['Availability heuristic', 'Representativeness heuristic', 'Priming', 'Confirmation bias'] },
          { label: 'A student who can\'t figure out how to prop open a door with a textbook because "textbooks are for reading"', options: ['Functional fixedness', 'Mental set', 'Confirmation bias', 'Sunk cost fallacy'] }
        ],
        correctAnswers: ['Gambler\'s fallacy', 'Availability heuristic', 'Functional fixedness'],
        hint1: 'Each pull is independent; the machine does not "owe" anyone a jackpot.',
        hint2: 'The vivid documentary (easy to recall) inflated the perceived likelihood of earthquakes.',
        hint3: 'Can\'t see the textbook as anything other than its normal function (reading material).',
        explanation: 'Slot machine = gambler\'s fallacy (treating independent pulls as if a payout is due). Earthquake documentary = availability (vivid, recent information makes event seem more likely). Textbook as door prop = functional fixedness (can\'t reconceive the object beyond its typical function).'
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

**Step 2: Is it about CHANCE or CERTAINTY?**
- Treating an independent chance event as "due" → **Gambler's fallacy**
- Overestimating own accuracy → **Overconfidence**

**Step 3: Is it about EVIDENCE and BELIEFS?**
- Only seeking confirming evidence → **Confirmation bias**
- Maintaining beliefs despite disconfirmation → **Belief perseverance**
- "I knew it all along" → **Hindsight bias**

**Step 4: Is it about a DECISION?**
- Same info, different presentation → **Framing effect**
- Continuing because of past costs → **Sunk cost fallacy**
- An earlier, separate stimulus nudges the choice → **Priming**

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
            question: 'A startup founder has invested \\$500,000 and two years into a product that market research now shows has no viable customer base. She decides to invest another \\$200,000, saying "We\'ve come too far to quit now." Later, she is also overheard saying "I\'m 90% confident this will succeed." Which TWO biases are MOST evident?',
            options: [
              'Availability heuristic and priming',
              'Sunk cost fallacy and overconfidence',
              'Framing effect and representativeness heuristic',
              'Confirmation bias and mental set'
            ],
            correctAnswer: 1,
            explanation: 'Two biases work together: (1) SUNK COST FALLACY — "We\'ve come too far to quit" explicitly references past investment (time, money) as the reason to continue, rather than evaluating future prospects. The \\$500,000 is gone whether she continues or not. (2) OVERCONFIDENCE — claiming 90% confidence despite market research showing no viable customers. Her certainty dramatically exceeds what the evidence supports. These two biases compound: the sunk cost fallacy keeps her invested, and overconfidence prevents her from accurately assessing the risk.'
          },
          {
            question: 'A practice study randomly assigns 120 students to read a cafeteria survey that describes a new lunch as either "80% fat-free" or "20% fat." Students who read "80% fat-free" rate the lunch as healthier on a 1–7 scale. Which statement BEST describes this study?',
            options: [
              'It is a correlational study of framing, because students\' health ratings were measured on a scale',
              'It is an experiment on framing, with wording as the independent variable and the rating as the dependent one',
              'It is an experiment on priming, with the lunch as the independent variable and the wording as the dependent one',
              'It is a naturalistic observation of framing, because the students rated a real lunch in their own cafeteria'
            ],
            correctAnswer: 1,
            explanation: 'Students were randomly assigned to two wordings of identical information, so this is an experiment on the framing effect: wording is the manipulated independent variable and the health rating is the measured dependent variable. Measuring on a scale does not make a study correlational, and the lunch itself was not manipulated.'
          }
        ]
      }
    }
  ]
}
