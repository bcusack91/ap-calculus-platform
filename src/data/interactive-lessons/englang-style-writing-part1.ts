export const englangStyleWritingPart1Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'elsw1-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 1 of 7 — Crafting Prose That Is Precise, Persuasive, and Purposeful**

---

## What "Good Style" Means on AP Lang

AP style is not about sounding fancy. It is about rhetorical control:
- Precise diction
- Varied but purposeful syntax
- Consistent tone
- Clear emphasis
- Audience-appropriate register

---

## Style Priorities

| Priority | Why It Matters |
|---------|----------------|
| **Clarity** | Readers must follow your reasoning quickly |
| **Precision** | Specific wording avoids vague claims |
| **Control** | Syntax and transitions guide emphasis |
| **Consistency** | Stable voice builds credibility |
| **Energy** | Strategic variation keeps reader engaged |

### Weak vs Strong Sentence
- Weak: "There are many reasons this issue is important and people should think about it."
- Strong: "Because housing costs now outpace wages in most metro areas, local governments must expand zoning flexibility and rental assistance."

The strong version is concrete, specific, and actionable.
      `
    },
    {
      id: 'elsw1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence shows strongest AP writing style?',
            options: [
              '"This thing is kind of bad in lots of ways for many reasons."',
              '"Given rising flood risk and repeated infrastructure failures, the city should prioritize stormwater upgrades in vulnerable neighborhoods."',
              '"There are issues and stuff to discuss."',
              '"People have opinions about this topic."'
            ],
            correctAnswer: 1,
            explanation: 'This sentence is specific, precise, and policy-oriented. It identifies conditions (flood risk, failures) and proposes action (prioritize upgrades), demonstrating rhetorical control and clarity.'
          },
          {
            question: 'What is the best reason to vary sentence length in an AP essay?',
            options: [
              'To appear sophisticated without changing meaning',
              'To control pacing, emphasis, and reader attention',
              'To avoid all short sentences',
              'Because AP forbids simple sentences'
            ],
            correctAnswer: 1,
            explanation: 'Sentence variation is a rhetorical tool. Longer sentences can develop nuance; shorter ones can emphasize key judgments. Variation should serve meaning, not decoration.'
          }
        ]
      }
    },
    {
      id: 'elsw1-content',
      type: 'text' as const,
      content: `
## Style Moves You Can Use Immediately

### Precision Upgrades
| Weak Word | Stronger Alternative |
|----------|----------------------|
| thing | policy, practice, institution, pattern |
| good/bad | equitable, effective, harmful, unsustainable |
| a lot | substantially, markedly, consistently |
| people | voters, students, workers, residents |

### Syntax Moves
- Use periodic sentences for nuanced setup
- Use short declaratives for key claims
- Use parallelism for triadic emphasis
- Use concession clauses ("While..., ...") for sophistication

### Rhythm Pattern Example
"While short-term costs are unavoidable, long-term savings are measurable, equitable, and durable."

- Concession clause adds nuance
- Parallel adjective triad adds emphasis and cadence

## Editing Pass for Style
1. Replace vague nouns/verbs
2. Tighten wordy phrases
3. Check tone consistency
4. Vary sentence openings
5. Ensure transitions reflect logic

### High-Value Revision
Weak: "This shows that the issue matters a lot to everyone in society."
Strong: "This pattern matters because it concentrates financial risk in communities already facing wage stagnation and housing scarcity."
      `
    },
    {
      id: 'elsw1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) AP style emphasizes precision, clarity, and rhetorical _______.

2) Replacing vague words like "thing" with specific nouns improves _______.

3) A "While..., ..." structure often introduces _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['control', 'precision', 'concession'],
        hint1: 'Writers control tone and emphasis intentionally.',
        hint2: 'Specific wording quality.',
        hint3: 'You acknowledge complexity before claim.',
        explanation: 'Strong style reflects control. Specific vocabulary improves precision. "While" often signals concession.'
      }
    },
    {
      id: 'elsw1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Select the Stronger Style Choice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best replacement for "people are affected" in a transit essay:',
            options: ['Low-income commuters face longer travel times and reduced job access', 'Stuff happens to everyone', 'People have feelings', 'Things are different now']
          },
          {
            label: 'A short sentence after two long sentences typically creates ___',
            options: ['Emphasis and punch', 'Confusion only', 'Less clarity always', 'No effect']
          },
          {
            label: 'For AP argument writing, style should be ___',
            options: ['Purposeful and audience-aware', 'Decorative and vague', 'Overly complex at all times', 'Emotionally flat']
          }
        ],
        correctAnswers: ['Low-income commuters face longer travel times and reduced job access', 'Emphasis and punch', 'Purposeful and audience-aware'],
        hint1: 'Specific stakeholders and impacts.',
        hint2: 'Length contrast highlights key point.',
        hint3: 'Style serves persuasion, not ornament.',
        explanation: 'Specific stakeholders improve precision. Short-after-long adds emphasis. Effective AP style is purposeful and audience-aware.'
      }
    },
    {
      id: 'elsw1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Style in Writing

- Prefer precise verbs/nouns over vague filler language
- Keep diction aligned with your audience and argument
- Use sentence-length variation for emphasis and pacing
- Revise for concision: cut repetitive phrasing
- Maintain a controlled voice; avoid abrupt register shifts
- In timed writing, revise one paragraph deeply rather than skimming all
      `
    },
    {
      id: 'elsw1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A draft says: "There are many ways this is bad and people should fix it." Which revision best improves style and argument quality?',
            options: [
              '"This is bad."',
              '"Because repeated lead-pipe failures contaminate drinking water, the city should prioritize replacement in high-risk neighborhoods within a two-year timeline."',
              '"People should think about this issue seriously."',
              '"The issue has many sides and complexities and things."'
            ],
            correctAnswer: 1,
            explanation: 'This revision is specific, causal, and actionable. It names the mechanism (lead-pipe failures), consequence (contamination), and policy action (timeline-based replacement).'
          },
          {
            question: 'Why does a controlled, precise style improve AP scores?',
            options: [
              'It replaces the need for evidence',
              'It helps readers follow reasoning and signals rhetorical competence',
              'It guarantees sophistication automatically',
              'It allows grammatical errors'
            ],
            correctAnswer: 1,
            explanation: 'Precise style clarifies claims and analysis. AP readers reward prose that communicates reasoning effectively and demonstrates intentional rhetorical choices.'
          }
        ]
      }
    }
  ]
};
