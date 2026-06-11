export const whEastAsianEmpiresPart5Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas5-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian Empires & Isolation

**Part 5 of 7 — Change Over Time**

    In AP World, strong writing tracks both what changed and what persisted. This part builds a timeline from Song/Mongol/Ming transitions through Qing and Tokugawa developments.

### Key Concepts

| Concept | Description |
|---------|-------------|
    | **Continuity** | Structures that persist (for example hierarchy, bureaucratic governance traditions) |
    | **Transformation** | Major institutional or policy shifts over time |
    | **Turning point** | A development that redirects later trajectories |
      `
    },
    {
      id: 'wheastas5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the best example of continuity across multiple Chinese dynasties?',
            options: [
              'Long-term use of scholar-official governance grounded in Confucian norms',
              'Permanent abolition of central administration',
              'Complete disappearance of social hierarchy',
              'End of state involvement in taxation'
            ],
            correctAnswer: 0,
            explanation: 'While dynasties changed, bureaucratic governance and Confucian legitimacy remained central over long stretches of Chinese history.'
          },
          {
            question: 'Which development is best treated as a turning point in East Asian maritime history?',
            options: [
              'Song-era urban market growth',
              'Ming court termination of large state-sponsored oceanic voyages after Zheng He',
              'Routine peasant tax collection',
              'Continuation of local fishing economies'
            ],
            correctAnswer: 1,
            explanation: 'Ending expeditionary voyages marked a strategic shift with major long-term implications for global maritime competition.'
          }
        ]
      }
    },
    {
      id: 'wheastas5-content',
      type: 'text' as const,
      content: `
## Change Over Time — Deeper Dive

> **Continuity**

    Persistent features across periods:

    - Confucian social hierarchy and gender norms in elite ideology
    - State concern with agrarian taxation and social order
    - Strategic balancing of internal control and external engagement

> **Transformation**

    Important shifts:

    - Yuan conquest introduced Mongol rule and ethnic ranking
    - Ming restoration reasserted Han-led rule and revived Confucian institutions
    - Tokugawa consolidation formalized status order and tightened foreign regulation

> **AP Comparison Anchor**

    Use turning points to explain "before vs after":

    $$
    	ext{Before: outward maritime projection} \\rightarrow \\text{Decision point} \\rightarrow \\text{After: inward strategic emphasis}
    $$

    AP tip: naming a turning point is not enough; explain why it changed later outcomes.
      `
    },
    {
      id: 'wheastas5-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which term refers to long-term persistence of political or social structures across periods?',
            options: [
              'Continuity',
              'Transformation',
              'Turning point',
              'Random variation'
            ],
            correctAnswer: 0,
            explanation: 'Continuity means key structures persist over time — like Confucian social hierarchy persisting across the Yuan, Ming, and Qing dynasties despite political change at the top.'
          },
          {
            question: 'The Tokugawa consolidation formalizing the status order and tightening foreign regulation is an example of what?',
            options: [
              'Transformation',
              'Continuity',
              'Turning point',
              'Static pattern'
            ],
            correctAnswer: 0,
            explanation: 'This is a major institutional shift — a transformation — even if it preserved some prior social norms. Transformations explain how states change while maintaining some continuity.'
          },
          {
            question: 'The Ming decision to end Zheng He\'s voyages is most useful in an AP essay as what type of analytical tool?',
            options: [
              'A turning point that redirected later global power dynamics',
              'A continuity showing China\'s consistent maritime policy',
              'A transformation with no global significance',
              'Background context with no causal role'
            ],
            correctAnswer: 0,
            explanation: 'The end of Zheng He\'s voyages is a turning point: it redirected Chinese maritime capacity inward, leaving the Indian Ocean open for later European dominance. AP rewards turning-point arguments that link to downstream consequences.'
          }
        ]
      }
    },
    {
      id: 'wheastas5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Select the concept that best matches each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Long-term persistence of a political or social structure is ___',
            options: ['Continuity', 'Transformation', 'Turning point', 'random variation']
          },
          {
            label: 'A major shift in institutions or policy over time is ___',
            options: ['Continuity', 'Transformation', 'Turning point', 'static pattern']
          },
          {
            label: 'A development that redirects later outcomes is a ___',
            options: ['Turning point', 'Continuity', 'Transformation', 'background condition']
          }
        ],
        correctAnswers: ['Continuity', 'Transformation', 'Turning point'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Distinguish persistence, shift, and pivot events. AP readers reward that precision in CCOT writing.'
      }
    },
    {
      id: 'wheastas5-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
    - "Change over time" does not mean everything changed; include continuity evidence.
    - Do not equate one dynasty change with complete social reset.
    - A turning point must have downstream consequences, not just chronology.

### AP Strategy Moves
    - Use a timeline anchor in your thesis ("from Yuan rule to Ming restoration...").
    - Pair one continuity example with one transformation example in each body paragraph.
    - Add one sentence evaluating significance (why the change mattered beyond East Asia).
      `
    },
    {
      id: 'wheastas5-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A strong CCOT paragraph about East Asia (1200-1750) should:',
            options: [
              'List only rulers in chronological order',
              'Explain one major transformation and one continuity using concrete evidence',
              'Focus only on one event with no broader trend',
              'Avoid causation to stay concise'
            ],
            correctAnswer: 1,
            explanation: 'AP CCOT scoring rewards balanced reasoning: change, continuity, and evidence-based explanation.'
          },
          {
            question: 'Which claim best identifies a turning point with clear significance?',
            options: [
              'The Ming ended Zheng He voyages, narrowing sustained state maritime projection and reshaping later global competition',
              'A scholar passed the exam in one province',
              'A good harvest occurred in one year',
              'A ruler issued routine tax guidance'
            ],
            correctAnswer: 0,
            explanation: 'This links a policy decision to broad long-term outcomes, which is what makes it a true turning point argument.'
          }
        ]
      }
    }
  ]
}
