export const satReadingEvidencePart5Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're5-intro',
      type: 'text' as const,
      content: `# Purpose & Rhetoric

**Part 5 of 7 — Why Did the Author Write This?**

Purpose questions test your ability to understand not just WHAT the author says, but WHY they structured the passage the way they did.

### Author's Purpose Categories

| Purpose | Signal Words | Example |
|---|---|---|
| **Argue/Persuade** | "should," "must," "critical that" | "Schools should require financial literacy courses" |
| **Inform/Explain** | "researchers found," "data shows" | "A 2024 study revealed that bees navigate using Earth's magnetic field" |
| **Analyze/Evaluate** | "however," "on the other hand," "while" | "While the policy reduced crime, it disproportionately affected minority communities" |
| **Narrate** | descriptive language, chronological | "Maria opened the letter with trembling hands" |
| **Compare/Contrast** | "unlike," "similarly," "whereas" | "Unlike previous telescopes, JWST can detect infrared light" |

### Function of a Specific Paragraph/Sentence

Some questions ask: "The author includes the anecdote in lines 15-20 primarily to..."

**Common functions:**
- Provide a concrete example of an abstract concept
- Introduce a counterargument before refuting it
- Establish the author's credibility or emotional connection
- Transition between two main ideas
- Anticipate and address a potential objection

### Example

> "Skeptics argue that renewable energy cannot reliably power a modern grid. However, a 2024 analysis of Germany's Energiewende program shows that wind and solar provided 52% of the nation's electricity with fewer blackouts than the previous decade."

**Purpose of the first sentence:** To introduce a counterargument (the skeptics' view) that the author will then refute with evidence.`
    },
    {
      id: 're5-quiz',
      type: 'multiple-choice' as const,
      content: '**Purpose & Rhetoric Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage begins with a personal anecdote about the author\'s grandmother, then shifts to discussing the economics of elder care in America. The anecdote primarily serves to:',
            options: ['Create an emotional connection before presenting data-driven arguments', 'Prove that the author has personal expertise in elder care', 'Entertain the reader before a dry topic', 'Show that the author\'s grandmother needed better care'],
            correctAnswer: 0,
            explanation: 'Opening anecdotes in argumentative passages humanize the issue and create emotional investment before the author presents statistics and policy arguments. This is a standard rhetorical move.'
          },
          {
            question: 'In a passage about ocean acidification, the author writes: "Some might argue that marine organisms have adapted to changing conditions for millions of years." This sentence primarily serves to:',
            options: ['Acknowledge a counterargument the author will likely challenge', 'Support the author\'s central claim about adaptation', 'Shift the focus from ocean chemistry to biology', 'Conclude the author\'s argument'],
            correctAnswer: 0,
            explanation: '"Some might argue" is a classic signal that the author is introducing a counterargument. The author will almost certainly follow this with "However" or "But" and then present evidence against this view.'
          }
        ]
      }    },
    {
      id: 're5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Purpose & Rhetoric Analysis

### Worked Example 1: Identifying Paragraph Function

**Paragraph sequence in a passage about space exploration:**

| Paragraph | Content | Function |
|---|---|---|
| 1 | "Space exploration has long captured human imagination…" | **Introduces** the topic and sets context |
| 2 | "However, critics argue that the billions spent on space could address problems on Earth" | **Presents counterargument** |
| 3 | "This objection, while understandable, overlooks the tangible benefits…" | **Refutes** the counterargument |
| 4 | "For instance, satellite technology now provides GPS, weather forecasting…" | **Provides evidence** (concrete examples) |
| 5 | "As privatization of space accelerates, these benefits will only multiply" | **Concludes** with forward-looking significance |

### Worked Example 2: Rhetorical Moves and Their Purpose

| Text | The Author Is Doing | Why |
|---|---|---|
| "Consider the case of Dr. Sarah Chen, who spent 14 years…" | Using an anecdote | To humanize an abstract argument |
| "While some researchers suggest X, others contend Y" | Framing a debate | To show complexity / balanced view |
| "The statistics are striking: a 400% increase since 2010" | Citing data | To provide quantitative evidence |
| "Can we really afford to ignore this trend?" | Asking a rhetorical question | To engage the reader and imply "no" |

### Common "Purpose" Answer Patterns

| Purpose Phrasing | Usually Correct When |
|---|---|
| "To provide an example of…" | Paragraph follows a general claim |
| "To introduce a counterargument" | Paragraph starts with "Critics argue" or "Some suggest" |
| "To qualify a previous claim" | Paragraph adds nuance like "however" or "although" |
| "To establish the significance of" | Paragraph explains why the topic matters |
| "To transition between" | Paragraph shifts from one subtopic to another |`
    },
    {
      id: 're5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Purpose Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author writes: "The proposed dam would provide clean energy for 200,000 homes. However, it would also flood 50 square miles of wetland habitat." The author\'s primary purpose in juxtaposing these facts is to:',
            options: ['Highlight the tension between energy needs and environmental preservation', 'Argue against building the dam', 'Argue in favor of the dam', 'Compare dams to other energy sources'],
            correctAnswer: 0,
            explanation: 'The author presents both a benefit and a cost without declaring a winner. This juxtaposition highlights the tension/trade-off. If the author took a side, the passage would need more evidence.'
          },
          {
            question: 'A passage opens with a vivid description of a child struggling to read, then transitions to education policy recommendations. The opening description serves to:',
            options: ['Create emotional engagement before presenting policy arguments', 'Prove that reading difficulties are common', 'Entertain the reader with a story', 'Show the author\'s personal experience'],
            correctAnswer: 0,
            explanation: 'Opening anecdotes in policy passages create emotional stakes. The reader cares about the child, making them more receptive to the policy recommendations that follow.'
          },
          {
            question: '"Some might argue" followed by "However, the evidence suggests otherwise" is an example of:',
            options: ['Introducing and refuting a counterargument', 'Agreeing with critics', 'Presenting two equally valid perspectives', 'Admitting the author\'s argument is weak'],
            correctAnswer: 0,
            explanation: '"Some might argue" = counterargument introduced. "However, the evidence suggests otherwise" = refutation. This is a classic argue-and-refute rhetorical move.'
          }
        ]
      }
    },
    {
      id: 're5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Purpose & Rhetoric Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Critics argue that…" signals a [counterargument|conclusion|main claim|definition]',
          'An anecdote at the start of a policy passage creates [emotional engagement|confusion|humor|suspense]',
          '"For example" signals a paragraph that [provides evidence|introduces a new topic|concludes|counters]',
          'A rhetorical question implies [the answer the author wants|genuine curiosity|confusion|disagreement]'
        ],
        correctAnswers: ['counterargument', 'emotional engagement', 'provides evidence', 'the answer the author wants'],
        hint1: '"Critics argue" = opposing view that will be addressed.',
        hint2: 'Anecdotes humanize abstract arguments.',
        hint3: '"For example" = evidence for a preceding claim.',
        explanation: '"Critics argue" introduces a counterargument. Anecdotes create engagement. "For example" signals evidence. Rhetorical questions imply the author\'s preferred answer.'
      }
    },
    {
      id: 're5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Key Rule |
|---|---|
| Author's purpose | Argue, inform, analyze, narrate, or compare |
| Paragraph function | Introduce, counter, refute, evidence, or conclude |
| "Some argue" | = counterargument incoming |
| Anecdotes | Humanize abstract arguments |
| Rhetorical questions | Imply the author's answer |
| "For example" | = evidence for the preceding claim |

*Next: Data Interpretation in Reading →*`    }
  ]
};