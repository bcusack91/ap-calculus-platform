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

Some questions ask: "Which choice best describes the function of the underlined sentence in the text as a whole?"

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
            options: ['Make the issue human before turning to the statistics', 'Show that the author has expertise in elder care', 'Give the reader a light moment before a dry and technical topic', 'Argue that the author\'s grandmother received poor care'],
            correctAnswer: 0,
            explanation: 'Opening anecdotes in argumentative passages humanize the issue and create emotional investment before the author presents statistics and policy arguments. A family story does not establish expertise, the shift is toward economics rather than away from a "dry" topic for its own sake, and the passage moves to elder care in America, not to a complaint about one person\'s care.'
          },
          {
            question: 'In a passage about ocean acidification, the author writes: "Some might argue that marine organisms have adapted to changing conditions for millions of years." This sentence primarily serves to:',
            options: ['Introduce a view the author will likely go on to dispute', 'Support the author\'s central claim about adaptation', 'Shift the focus of the passage from ocean chemistry to biology', 'Summarize the evidence the author has already given'],
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

**Sentence sequence in a short text about space exploration:**

| Sentence | Content | Function |
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
| "To provide an example of…" | The sentence follows a general claim |
| "To introduce a counterargument" | The sentence starts with "Critics argue" or "Some suggest" |
| "To qualify a previous claim" | The sentence adds nuance like "however" or "although" |
| "To establish the significance of" | The sentence explains why the topic matters |
| "To transition between" | The sentence shifts from one subtopic to another |`
    },
    {
      id: 're5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Purpose Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author writes: "The proposed dam would provide clean energy for 200,000 homes. However, it would also flood 50 square miles of wetland habitat." The author\'s primary purpose in juxtaposing these facts is to:',
            options: ['Show that the dam involves a real trade-off between two public goods', 'Argue that the harm to wetlands outweighs the dam\'s benefits', 'Argue that clean energy for 200,000 homes justifies the dam', 'Compare hydroelectric dams with other clean energy sources'],
            correctAnswer: 0,
            explanation: 'The author presents a benefit (clean energy) and a cost (lost wetland habitat) without declaring a winner, so the juxtaposition shows a trade-off. Neither "argue" option is supported, because the author never weighs one fact against the other, and no other energy source is mentioned.'
          },
          {
            question: 'A passage opens with a vivid description of a child struggling to read, then transitions to education policy recommendations. The opening description serves to:',
            options: ['Draw readers in emotionally before the argument begins', 'Prove that most children struggle to learn to read', 'Show that the author once struggled to read as a child', 'Illustrate a reading program the author later criticizes'],
            correctAnswer: 0,
            explanation: 'Opening anecdotes in policy passages create emotional stakes. The reader cares about the child, making them more receptive to the policy recommendations that follow. One child cannot prove that MOST children struggle, nothing says the child is the author, and no reading program is described.'
          },
          {
            question: '"Some might argue" followed by "However, the evidence suggests otherwise" is an example of:',
            options: ['Raising an objection and rejecting it', 'Conceding a point to the author\'s critics', 'Presenting two equally valid perspectives', 'Admitting a weakness in the author\'s own case'],
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