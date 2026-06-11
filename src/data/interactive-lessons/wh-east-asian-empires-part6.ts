export const whEastAsianEmpiresPart6Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas6-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian Empires & Isolation

**Part 6 of 7 — Problem-Solving Workshop**

    Use AP-style historical reasoning with mini datasets, claim-evidence-reasoning, and source-aware analysis.

### Key Concepts

| Concept | Description |
|---------|-------------|
    | **Source reading** | Identifying what evidence a stimulus provides and what it does not |
    | **Evidence chain** | Connecting claim -> specific evidence -> historical reasoning |
    | **Context framing** | Situating evidence in broader AP themes and chronology |
      `
    },
    {
      id: 'wheastas6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When reading an AP stimulus table about East Asian trade, the first move should be to:',
            options: [
              'write a thesis before reading numbers',
              'Identify what the data shows and note any patterns or trends',
              'assume the largest number proves causation',
              'summarize the topic without using data'
            ],
            correctAnswer: 1,
            explanation: 'Start by reading axes/categories/timeframe and identifying patterns before interpreting causes.'
          },
          {
            question: 'Which response best models an evidence chain?',
            options: [
              'A broad claim with no named examples',
              'A clear claim, one named East Asia example, and an explanation of why it supports the claim',
              'Three facts listed without a central argument',
              'A restatement of the prompt'
            ],
            correctAnswer: 1,
            explanation: 'AP writing quality comes from linking a precise claim to specific evidence and explicit reasoning.'
          }
        ]
      }
    },
    {
      id: 'wheastas6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

> **Source Reading**

    For each source, identify:

    - What the source directly shows
    - What must be inferred
    - What cannot be concluded from this source alone

> **Evidence Chain**

    Template:

    $$
    	ext{Claim} \\rightarrow \\text{Named evidence} \\rightarrow \\text{Reasoning (historical significance)}
    $$

    Example claim: Tokugawa foreign policy prioritized domestic order.
    Evidence: regulated contact through specific ports and restrictions on missionaries.
    Reasoning: this reduced perceived political/religious threats to shogunal authority.

> **AP Comparison Anchor**

    Strong AP answers place East Asia in wider patterns:

    - comparison with European maritime expansion
    - links to silver flows and global trade networks
    - ties to later pressures from industrialized states
      `
    },
    {
      id: 'wheastas6-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What skill involves identifying what a source directly supports vs. what must be inferred?',
            options: [
              'Source reading',
              'Evidence chain',
              'Context framing',
              'Narrative drift'
            ],
            correctAnswer: 0,
            explanation: 'Source reading means parsing the stimulus carefully: what does it show directly, what can be inferred, and what cannot be concluded from this source alone.'
          },
          {
            question: 'Which term describes the AP writing structure: Claim → Named Evidence → Historical Reasoning?',
            options: [
              'Evidence chain',
              'Source reading',
              'Context framing',
              'Unsupported assertion'
            ],
            correctAnswer: 0,
            explanation: 'The evidence chain is the core AP argument structure. Each body paragraph should follow this sequence to earn full analysis credit.'
          },
          {
            question: 'Connecting East Asian evidence to European maritime expansion and silver flows exemplifies which skill?',
            options: [
              'Context framing',
              'Source reading',
              'Evidence chain',
              'Single-fact recall'
            ],
            correctAnswer: 0,
            explanation: 'Context framing situates your evidence in wider chronological or thematic patterns — exactly the move that earns complexity points on the AP exam.'
          }
        ]
      }
    },
    {
      id: 'wheastas6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Select the concept that best matches each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying what a source directly supports is ___',
            options: ['Source reading', 'Evidence chain', 'Context framing', 'narrative drift']
          },
          {
            label: 'Claim -> named evidence -> reasoning is an ___',
            options: ['Source reading', 'Evidence chain', 'Context framing', 'unsupported assertion']
          },
          {
            label: 'Placing East Asia evidence into wider chronology/themes is ___',
            options: ['Context framing', 'Source reading', 'Evidence chain', 'single-fact recall']
          }
        ],
        correctAnswers: ['Source reading', 'Evidence chain', 'Context framing'],
        hint1: 'Stimulus first.',
        hint2: 'Argument structure.',
        hint3: 'Big-picture placement.',
        explanation: 'Use this sequence in timed writing: parse source, build chain, frame context.'
      }
    },
    {
      id: 'wheastas6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
    - Evidence is not the same as explanation; you need both.
    - One source rarely proves an entire historical argument by itself.
    - Context is not background fluff; it must sharpen interpretation.

### AP Strategy Moves
    - Annotate prompts for command words: compare, evaluate, explain, identify.
    - Underline two named examples before writing your thesis.
    - Check each paragraph for this minimum: one claim, one specific example, one why-it-matters sentence.
      `
    },
    {
      id: 'wheastas6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You are given a chart showing shifts in major East Asian trade ports over time. What is the best first analytical sentence?',
            options: [
              'This chart proves all East Asian governments had identical policies.',
              'The chart suggests changing trade concentration, but we need policy evidence to explain why.',
              'The largest number always means the strongest empire.',
              'Charts are less useful than narrative sources, so this can be ignored.'
            ],
            correctAnswer: 1,
            explanation: 'This answer reads the pattern while correctly limiting inference until supporting evidence is added.'
          },
          {
            question: 'A DBQ asks whether East Asian isolation policies were effective. Which thesis approach is strongest?',
            options: [
              'They were either completely effective or complete failures in every way.',
              'They improved internal stability in the short term but reduced flexibility in a changing global system.',
              'Isolation policies were similar to all European policies.',
              'There is no evidence either way.'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is nuanced, evaluative, and sets up evidence for both short-term and long-term analysis.'
          }
        ]
      }
    }
  ]
}
