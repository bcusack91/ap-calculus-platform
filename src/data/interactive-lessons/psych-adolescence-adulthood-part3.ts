export const psychAdolescencePart3Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol3-s1-intro',
      type: 'text' as const,
      content: `
## Moral Development

**Part 3 of 7 — Kohlberg's Stages of Moral Reasoning**

How do people decide what is right and wrong? Lawrence Kohlberg studied moral reasoning by presenting people with moral dilemmas and analyzing their REASONING — not their answers. He identified three levels, each with two stages.

### Core Definitions

| Level | Focus | How it sounds |
|-------|-------|---------------|
| **Preconventional** | Self-interest — "What's in it for me?" | "I'll get in trouble" / "What do I gain?" |
| **Conventional** | Social norms — "What do others expect?" | "It's the law" / "Good people do this" |
| **Postconventional** | Universal principles — "What is truly just?" | "Human rights transcend laws" / "Justice demands this" |

### The Heinz Dilemma

Kohlberg's most famous dilemma: A man named Heinz can't afford an overpriced drug that could save his dying wife. Should he steal it?

**Kohlberg cared about WHY, not WHAT they answered:**

| Level | "Yes, steal it" reasoning | "No, don't steal" reasoning |
|-------|------------------------|-----------------------------|
| **Preconventional** | "He'll be sad if his wife dies" (avoiding personal pain) | "He'll go to jail" (avoiding punishment) |
| **Conventional** | "A good husband would do anything for his wife" (social role) | "Stealing is against the law" (maintaining social order) |
| **Postconventional** | "Human life has greater value than property" (universal principle) | "If everyone stole, society would collapse" (social contract) |

### Real-World Example

A child doesn't steal candy because "Mom will punish me" (preconventional). A teenager doesn't steal because "It's against the law and people will think I'm bad" (conventional). An adult activist breaks an unjust law during a protest because "Justice is more important than legality" (postconventional).
      `
    },
    {
      id: 'adol3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A child says "I won\'t hit my brother because I\'ll get grounded." According to Kohlberg, this reasoning reflects which level?',
            options: [
              'Conventional — the child is following family rules',
              'Postconventional — the child understands the principle behind the rule',
              'Preconventional — the child is motivated by avoiding punishment (self-interest)',
              'Formal operational — the child is using abstract moral reasoning'
            ],
            correctAnswer: 2,
            explanation: 'Preconventional reasoning is focused on consequences to SELF: avoiding punishment or gaining rewards. "I\'ll get grounded" = I want to avoid a negative consequence to me. The child isn\'t thinking about social norms or universal principles — just personal outcomes.'
          },
          {
            question: 'A protester deliberately breaks a segregation law because they believe racial equality is a fundamental human right. According to Kohlberg, this reflects:',
            options: [
              'Preconventional morality — breaking rules for personal benefit',
              'Conventional morality — following what society expects',
              'Postconventional morality — reasoning based on universal ethical principles that may transcend specific laws',
              'Moral relativism — believing there are no moral absolutes'
            ],
            correctAnswer: 2,
            explanation: 'Postconventional reasoning involves applying universal principles (equality, justice, human rights) even when they conflict with existing laws. The protester isn\'t motivated by self-interest (preconventional) or social conformity (conventional) — they\'re appealing to a higher moral standard that transcends the law.'
          }
        ]
      }
    },
    {
      id: 'adol3-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Kohlberg's Six Stages

| Level | Stage | Focus | Example reasoning |
|-------|-------|-------|-------------------|
| **Preconventional** | 1. Obedience & punishment | Avoid punishment | "I'll get in trouble" |
| | 2. Self-interest | Seek personal reward | "What's in it for me?" |
| **Conventional** | 3. Good boy/nice girl | Gain approval | "People will think I'm a good person" |
| | 4. Law and order | Maintain social order | "Rules are rules — society needs laws" |
| **Postconventional** | 5. Social contract | Rights and democratic principles | "Laws should serve the greater good" |
| | 6. Universal ethical principles | Abstract justice | "Human dignity transcends any law" |

### Critiques of Kohlberg

**Carol Gilligan** argued that Kohlberg's model was biased toward a male, Western perspective:
- Kohlberg's stages emphasize **justice** and abstract principles
- Gilligan argued that many people (especially women, in her view) reason more from an **ethic of care** — focusing on relationships, compassion, and responsibility to others
- Gilligan's critique: Kohlberg studied mostly males and then applied his framework universally
- Modern view: Both justice AND care orientations are valid approaches to moral reasoning

**Other critiques:**
- Moral reasoning ≠ moral behavior (knowing what's right doesn't mean you'll DO it)
- Cultural bias — not all cultures value individualistic moral principles
- Most adults never reach postconventional reasoning
      `
    },
    {
      id: 'adol3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) At the preconventional level, moral reasoning is driven by ___-interest. (one word)

      2) At the conventional level, moral reasoning is driven by social ___ and rules. (one word)

      3) Who criticized Kohlberg for gender bias and proposed an ethics of care? (last name)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['self', 'norms', 'Gilligan'],
        hint1: 'Preconventional = "What happens to ME?"',
        hint2: 'Conventional = following what society expects',
        hint3: 'Starts with G — argued Kohlberg\'s model favored a justice orientation',
        explanation: 'Expected answers: self (preconventional = self-interest/consequences to self), norms (conventional = following social rules and expectations), and Gilligan (Carol Gilligan argued for an ethic of care as an alternative moral framework).'
      }
    },
    {
      id: 'adol3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"I donated to charity because it will look good on my college application" reflects ___ reasoning',
            options: ['preconventional', 'conventional', 'postconventional']
          },
          {
            label: '"I returned the wallet because stealing is against the law" reflects ___ reasoning',
            options: ['preconventional', 'conventional', 'postconventional']
          },
          {
            label: '"I protested the unjust law because human rights matter more than legal codes" reflects ___ reasoning',
            options: ['preconventional', 'conventional', 'postconventional']
          }
        ],
        correctAnswers: ['preconventional', 'conventional', 'postconventional'],
        hint1: 'Motivated by personal benefit = self-interest = preconventional.',
        hint2: 'Motivated by following the law = social order = conventional.',
        hint3: 'Motivated by universal principles that transcend laws = postconventional.',
        explanation: 'College application benefit = self-interest (preconventional). Following the law = maintaining social order (conventional). Appealing to human rights above law = postconventional reasoning.'
      }
    },
    {
      id: 'adol3-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Kohlberg judged whether the answer was right or wrong"** — He analyzed the REASONING, not the conclusion. Both "yes, steal it" and "no, don't steal" can be at any level.
- **"Preconventional = children only"** — While common in children, adults can reason at the preconventional level too ("I won't cheat on my taxes because I don't want to get audited").
- **"Everyone reaches postconventional"** — Most adults reason at the conventional level. Postconventional reasoning is relatively rare.
- **"Gilligan completely disproved Kohlberg"** — Research hasn't consistently shown gender differences in moral reasoning. Gilligan's contribution was expanding the framework to include care-based reasoning alongside justice-based reasoning.

### AP Strategy Moves
- **Focus on the reasoning, not the action.** Two people can make the same choice for different moral reasons — each representing a different Kohlberg level.
- If reasoning mentions punishment, reward, or personal consequences → preconventional.
- If reasoning mentions laws, rules, social approval, or "what good people do" → conventional.
- If reasoning mentions universal rights, justice, or principles that override laws → postconventional.
- Gilligan + care ethics is a common FRQ comparison topic. Know her critique and her alternative framework.
      `
    },
    {
      id: 'adol3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two students are asked why cheating on a test is wrong. Student A says: "If you get caught, you\'ll fail the class." Student B says: "It\'s unfair to students who studied honestly." How would Kohlberg classify each student\'s reasoning?',
            options: [
              'Both are conventional — they both agree cheating is wrong',
              'Student A: preconventional (avoiding punishment); Student B: conventional (fairness to peers/social norms)',
              'Student A: conventional (following rules); Student B: postconventional (universal justice)',
              'Both are postconventional — they both understand moral principles'
            ],
            correctAnswer: 1,
            explanation: 'Student A\'s reasoning centers on consequences to SELF ("you\'ll fail") = preconventional (Stage 1: punishment avoidance). Student B\'s reasoning centers on what\'s fair within the social system ("unfair to students who studied") = conventional (Stage 3/4: maintaining social order and fairness). Same moral conclusion, different levels of reasoning.'
          },
          {
            question: 'Carol Gilligan would most likely criticize Kohlberg for:',
            options: [
              'Studying children instead of adults',
              'Using moral dilemmas that are too easy',
              'Emphasizing abstract justice principles while undervaluing care-based reasoning focused on relationships and compassion',
              'Ignoring biological influences on moral behavior'
            ],
            correctAnswer: 2,
            explanation: 'Gilligan argued that Kohlberg\'s highest stages reward abstract, justice-oriented reasoning while devaluing care-oriented reasoning that focuses on relationships, compassion, and responsibility to others. She suggested this created a framework that could unfairly rate care-based reasoning as "less mature" when it represents a valid alternative moral approach.'
          }
        ]
      }
    }
  ]
}
