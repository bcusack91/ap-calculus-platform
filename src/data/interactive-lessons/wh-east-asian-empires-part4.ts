export const whEastAsianEmpiresPart4Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas4-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian Empires & Isolation

**Part 4 of 7 — Connections & Interactions**

    This part connects East Asian developments to AP World themes: land-based empires, maritime exchange, and global shifts in power.

### Key Concepts

| Concept | Description |
|---------|-------------|
    | **Cross-unit linkage** | How East Asia evidence supports arguments in multiple units |
    | **Scale shift** | How the same policy has local, regional, and global consequences |
    | **Reinforcing cycle** | Outcomes that strengthen the original policy direction |
      `
    },
    {
      id: 'wheastas4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which option best demonstrates a cross-unit linkage in AP World History?',
            options: [
              'Comparing Tokugawa social order with Song technological growth in isolation from all global context',
              'Using Ming maritime withdrawal to explain later European dominance in Indian Ocean trade',
              'Arguing East Asia had no relationship to world trade networks',
              'Describing Qing rule without any causation or comparison'
            ],
            correctAnswer: 1,
            explanation: 'This explicitly links East Asian policy decisions to later global outcomes, which is the kind of synthesis AP prompts reward.'
          },
          {
            question: 'Which is an example of a reinforcing cycle in Tokugawa Japan?',
            options: [
              'Expanded foreign missionary activity increased political openness',
              'Restrictions reduced foreign influence, which helped preserve the social order that justified continued restrictions',
              'Open immigration created pressure for stricter border controls',
              'Peasant revolts immediately overthrew the shogunate in the 17th century'
            ],
            correctAnswer: 1,
            explanation: 'That is a positive feedback cycle: policy outcomes strengthened the political rationale for keeping the policy in place.'
          }
        ]
      }
    },
    {
      id: 'wheastas4-content',
      type: 'text' as const,
      content: `
## Connections & Interactions — Deeper Dive

> **Cross-Unit Linkage**

    East Asian evidence appears in multiple AP units:

    - **Unit 3 (Land-based empires):** Qing governance, Tokugawa political order
    - **Unit 4 (Transoceanic):** controlled maritime contact and trade regulation
    - **Unit 6 (Industrial consequences):** later pressure on East Asian states from industrial powers

> **Scale Shift**

    One policy can look different at each scale:

    - **Local:** merchants in Nagasaki interact with limited foreign trade
    - **State:** Tokugawa regime preserves internal hierarchy and political control
    - **Global:** reduced Japanese participation in early modern oceanic expansion

> **AP Comparison Anchor**

    Example:

    $$
    	ext{Foreign restrictions} \\rightarrow \\text{greater domestic control} \\rightarrow \\text{elite confidence in restrictions} \\rightarrow \\text{continued restrictions}
    $$

    AP skill: identify whether a historical process is self-reinforcing or self-limiting.
      `
    },
    {
      id: 'wheastas4-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What term describes using East Asian evidence to support claims across multiple AP units?',
            options: [
              'Cross-unit linkage',
              'Scale shift',
              'Reinforcing cycle',
              'Periodization only'
            ],
            correctAnswer: 0,
            explanation: 'Cross-unit linkage is an AP synthesis skill: connecting East Asian evidence (e.g., Ming maritime policy) to outcomes in other units like transoceanic expansion.'
          },
          {
            question: 'What term describes analyzing the same policy at local, state, and global levels?',
            options: [
              'Scale shift',
              'Cross-unit linkage',
              'Reinforcing cycle',
              'Single-cause reasoning'
            ],
            correctAnswer: 0,
            explanation: 'Scale shift means evaluating how a single policy (like Tokugawa restrictions) looks different depending on whether you examine it locally, at the state level, or globally.'
          },
          {
            question: 'A process where policy outcomes strengthen the original policy direction is called what?',
            options: [
              'Reinforcing cycle',
              'Scale shift',
              'Cross-unit linkage',
              'Counterexample'
            ],
            correctAnswer: 0,
            explanation: 'Reinforcing cycles are important in AP causation reasoning: outcomes that loop back to amplify the original cause (e.g., isolation → stability → continued isolation).'
          }
        ]
      }
    },
    {
      id: 'wheastas4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Select the concept that best matches each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Using East Asian evidence to support claims in multiple AP units is ___',
            options: ['Cross-unit linkage', 'Scale shift', 'Reinforcing cycle', 'periodization only']
          },
          {
            label: 'Analyzing the same policy at local, state, and global levels is ___',
            options: ['Cross-unit linkage', 'Scale shift', 'Reinforcing cycle', 'single-cause reasoning']
          },
          {
            label: 'A process where policy outcomes strengthen the original policy is a ___',
            options: ['Reinforcing cycle', 'Scale shift', 'Cross-unit linkage', 'counterexample']
          }
        ],
        correctAnswers: ['Cross-unit linkage', 'Scale shift', 'Reinforcing cycle'],
        hint1: 'Think synthesis.',
        hint2: 'Think scale.',
        hint3: 'Think feedback dynamics.',
        explanation: 'This triad mirrors AP historical reasoning skills: synthesis, scale analysis, and causation dynamics.'
      }
    },
    {
      id: 'wheastas4-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
    - Students often mention another unit without truly connecting evidence and causation.
    - "Global" claims need explicit mechanisms, not just broad statements.
    - Reinforcing cycles are not inevitable forever; political shocks can break them.

### AP Strategy Moves
    - In LEQs, include at least one sentence that links East Asia to another region or process.
    - Name the scale in your sentence stem ("At the global level...", "At the state level...").
    - Use arrows in your planning notes to track causal chains before writing.
      `
    },
    {
      id: 'wheastas4-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis is most likely to earn complexity points on an AP LEQ about East Asia (1450-1750)?',
            options: [
              'East Asia was isolated and therefore unimportant to world history.',
              'East Asian states regulated foreign contact for domestic stability, but those choices also shaped global trade patterns and later power balances.',
              'All East Asian empires followed identical policies and had identical outcomes.',
              'The only relevant development in East Asia was agriculture.'
            ],
            correctAnswer: 1,
            explanation: 'This thesis includes causation, qualification, and global connection rather than a single simplistic claim.'
          },
          {
            question: 'A prompt asks for effects of Tokugawa foreign policy at different scales. Which answer structure is strongest?',
            options: [
              'Only discuss local merchant life in one sentence',
              'Only discuss global trade and ignore Japan entirely',
              'Organize by local effects, then state-level political effects, then global effects',
              'List five unrelated facts without analysis'
            ],
            correctAnswer: 2,
            explanation: 'This structure directly addresses scale and demonstrates organized historical reasoning.'
          }
        ]
      }
    }
  ]
}
