export const psychThinkingPart5Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 5 of 7 — Creativity**

What is creativity, and how does it work? Creativity involves generating novel, useful ideas — and it requires both knowledge (convergent) and flexibility (divergent) thinking.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Convergent thinking** | Narrowing down to a SINGLE correct answer — using logic and knowledge (tested on traditional IQ tests) |
| **Divergent thinking** | Generating MANY possible solutions or ideas — open-ended, creative thinking |
| **Creativity** | The ability to produce ideas that are both NOVEL (original) and USEFUL (valuable/appropriate) |
| **Intrinsic motivation** | Motivation driven by internal satisfaction, curiosity, or enjoyment — associated with GREATER creativity |
| **Extrinsic motivation** | Motivation driven by external rewards (money, grades) — can DECREASE creativity (overjustification effect) |

### Convergent vs. Divergent Thinking

| | Convergent Thinking | Divergent Thinking |
|--|--------------------|--------------------|
| **Direction** | Narrows DOWN to one answer | Expands OUT to many answers |
| **Type of question** | "What is 7 × 8?" | "How many uses can you think of for a brick?" |
| **Measured by** | IQ tests, standardized tests | Alternate uses test, creative production |
| **Associated with** | Intelligence, analytical ability | Creativity, flexibility, originality |
| **Example** | Solving a math equation | Brainstorming startup ideas |

### Sternberg's Five Components of Creativity

| Component | What It Means | Example |
|-----------|--------------|---------|
| **Expertise** | Well-developed knowledge base | A musician must master their instrument before they can improvise |
| **Imaginative thinking** | Ability to see things in new ways, make connections | Seeing a connection between two unrelated fields |
| **Venturesome personality** | Tolerance for ambiguity and risk | Willingness to try unconventional approaches |
| **Intrinsic motivation** | Driven by interest, satisfaction, challenge | Creating art for the joy of it, not for money |
| **Creative environment** | Surroundings that spark, support, and refine creative ideas | Collaborative workspace, freedom to fail, feedback |

> **Key insight from research:** Creativity is NOT purely "talent" — it can be cultivated through expertise, the right mindset, and supportive environments. The AP exam may test this: creativity requires BOTH knowledge (convergent) AND flexibility (divergent).
      `
    },
    {
      id: 'think5-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A test asks students to list as many possible uses for a paperclip as they can in 2 minutes. This test measures:',
            options: [
              'Convergent thinking — narrowing down to the one correct use for a paperclip',
              'Divergent thinking — generating many possible creative solutions',
              'Functional fixedness — seeing the paperclip only in its standard use',
              'The availability heuristic — recalling common uses for paperclips'
            ],
            correctAnswer: 1,
            explanation: 'This is Guilford\'s Alternate Uses Test, which measures DIVERGENT thinking. The task is open-ended — there is no single correct answer. The goal is to generate as MANY different ideas as possible (fluency), as many CATEGORIES of ideas as possible (flexibility), and as many UNUSUAL ideas as possible (originality). A student who only lists "hold papers" would show low divergent thinking and possibly functional fixedness.'
          },
          {
            question: 'Research shows that people who are paid to do creative work often produce LESS creative output than those who do it voluntarily. This finding BEST supports the role of:',
            options: [
              'Convergent thinking — payment narrows focus to one approach',
              'Extrinsic motivation — external rewards decrease intrinsic motivation, reducing creativity (overjustification effect)',
              'Mental set — payment creates a rigid problem-solving approach',
              'The framing effect — payment frames the task differently'
            ],
            correctAnswer: 1,
            explanation: 'This demonstrates the OVERJUSTIFICATION EFFECT: when an external reward is added to an already intrinsically motivating activity, intrinsic motivation decreases. The person shifts from "I\'m doing this because I enjoy it" to "I\'m doing this for the money." This undermines the intrinsic motivation that Sternberg identified as a key component of creativity. Exception: rewards that INFORM (feedback) rather than CONTROL can maintain intrinsic motivation.'
          }
        ]
      }
    },
    {
      id: 'think5-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Creativity & Intelligence

**Is intelligence the same as creativity?**

| Finding | Implication |
|---------|------------|
| IQ and creativity are correlated UP TO about IQ 120 | You need a minimum level of intelligence to be creative |
| Above IQ 120, the correlation weakens | Being smarter doesn't make you proportionally more creative |
| Many high-IQ people are NOT particularly creative | Intelligence is necessary but NOT sufficient for creativity |
| Many highly creative people have above-average but not extraordinary IQ | Creativity requires MORE than just intelligence |

> **Threshold theory:** You need to be "smart enough" (roughly IQ 120) for creativity, but beyond that threshold, other factors (motivation, personality, environment) matter more.

### The Brainstorming Debate

| Common Belief | Research Finding |
|--------------|-----------------|
| Group brainstorming produces more creative ideas | Individuals brainstorming ALONE often produce MORE and BETTER ideas than groups |
| Why? | Social loafing, evaluation apprehension (fear of judgment), production blocking (waiting to speak) |
| Best approach? | Individual brainstorming first → then combine and evaluate in a group |

### Creativity & Mental Health

| Popular Belief | Research Reality |
|---------------|-----------------|
| "Creative people are all crazy" | There IS a slight statistical association between creativity and certain mood disorders (bipolar) |
| "You need to suffer to create" | Most creative people are NOT mentally ill — and mental illness typically INHIBITS creative output |
| "Genius and madness are linked" | The association is modest and does not imply causation |

### Obstacles to Creativity

| Obstacle | How It Blocks Creativity |
|----------|------------------------|
| **Functional fixedness** | Can't see new uses for familiar objects/concepts |
| **Mental set** | Stuck using previously successful but now inappropriate strategies |
| **Fear of failure** | Risk-aversion prevents trying unconventional approaches |
| **Excessive extrinsic motivation** | External rewards shift focus from exploration to "getting it right" |
| **Conformity pressure** | Social pressure to fit in discourages original thinking |
      `
    },
    {
      id: 'think5-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: '___ thinking generates many possible solutions; convergent thinking narrows to one answer', answer: 'Divergent' },
          { label: '___ motivation (internal enjoyment) is associated with greater creativity than extrinsic rewards', answer: 'Intrinsic' },
          { label: 'According to threshold theory, creativity requires a minimum IQ of about ___, after which other factors matter more', answer: '120' }
        ]
      }
    },
    {
      id: 'think5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Thinking Type** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: '"What is the capital of France?"', options: ['Convergent thinking', 'Divergent thinking', 'Insight', 'Creativity'] },
          { label: '"Design a new product to solve a common household problem"', options: ['Divergent thinking', 'Convergent thinking', 'Functional fixedness', 'Mental set'] },
          { label: 'A scientist driven by pure curiosity about how cells divide — no grant pressure', options: ['Intrinsic motivation', 'Extrinsic motivation', 'Convergent thinking', 'Anchoring bias'] }
        ],
        correctAnswers: ['Convergent thinking', 'Divergent thinking', 'Intrinsic motivation'],
        hint1: 'One specific correct answer — narrowing down to the single right response.',
        hint2: 'Open-ended, many possible solutions, generating creative ideas.',
        hint3: 'Driven by internal curiosity and satisfaction, not external rewards.',
        explanation: 'Capital of France = convergent (one correct answer: Paris). Design a product = divergent (many possible solutions, open-ended creativity). Curiosity-driven scientist = intrinsic motivation (internal drive, no external reward pressure).'
      }
    },
    {
      id: 'think5-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Creativity Questions

**Common Misconceptions:**

| Misconception | Correction |
|--------------|-----------|
| Creativity = divergent thinking | Creativity requires BOTH divergent (generating ideas) AND convergent (evaluating which ideas are useful) |
| High IQ = high creativity | Intelligence is necessary but NOT sufficient — above ~120 IQ, other factors matter more |
| Group brainstorming is better | Research shows individuals often generate more/better ideas alone — then groups evaluate |
| Extrinsic rewards always hurt creativity | They CAN — through overjustification — but informational rewards (feedback) may not |
| Creativity is purely innate | Creativity can be developed through expertise, environment, and motivational support |

**Quick Decision Guide:**
- One correct answer → **Convergent thinking**
- Many possible answers → **Divergent thinking**
- Doing it for fun/interest → **Intrinsic motivation**
- Doing it for rewards/grades → **Extrinsic motivation**
- External rewards reduce internal drive → **Overjustification effect**

> **AP Tip:** Convergent = CONverge = come together to ONE point. Divergent = DIverge = spread OUT in many directions. This mnemonic helps distinguish them quickly on the exam.
      `
    },
    {
      id: 'think5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A company offers its engineering team a $10,000 bonus for the most innovative product design. After implementing the bonus, the team produces designs that are technically competent but less original than before. This outcome is BEST explained by:',
            options: [
              'Functional fixedness — the bonus prevents seeing new design possibilities',
              'The overjustification effect — the external reward reduced intrinsic motivation and creative risk-taking',
              'Mental set — the team is stuck on previously successful designs',
              'Group polarization — the team\'s designs became more extreme'
            ],
            correctAnswer: 1,
            explanation: 'The overjustification effect: the $10,000 bonus shifted the team\'s motivation from intrinsic (love of innovation, curiosity) to extrinsic (winning the bonus). This narrows focus to "what will win the money?" rather than "what\'s truly innovative?" — leading to safer, less creative designs. Research consistently shows that when external rewards are introduced for creative tasks, the work becomes more conventional and less original. The designs are "technically competent" (convergent thinking maintained) but "less original" (divergent thinking decreased).'
          },
          {
            question: 'A teacher wants to foster creativity in her students. Based on research, which approach would be MOST effective?',
            options: [
              'Give the highest grade to the most creative project — competitive rewards drive innovation',
              'Only teach divergent thinking exercises and ignore traditional subject matter',
              'Provide a supportive environment where failure is acceptable, build expertise through instruction, and nurture intrinsic interest in the subject',
              'Have students always work in brainstorming groups, since groups produce more creative ideas than individuals'
            ],
            correctAnswer: 2,
            explanation: 'This combines multiple research findings: (1) Creative environment — a safe space where failure is acceptable encourages risk-taking. (2) Expertise — you need a knowledge base (convergent) to be creative. (3) Intrinsic motivation — nurturing internal interest is more effective than external rewards (competitive grades could trigger overjustification). Option A adds extrinsic pressure. Option B ignores the need for expertise. Option D contradicts research showing individuals often outperform groups in idea generation.'
          }
        ]
      }
    }
  ]
}
