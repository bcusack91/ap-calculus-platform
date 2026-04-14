export const psychAdolescencePart1Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Adolescence & Adulthood

**Part 1 of 7 — Adolescent Physical & Cognitive Development**

Adolescence is the transition period between childhood and adulthood, typically beginning with puberty (around ages 10–13) and extending into the early twenties. It involves dramatic physical, cognitive, and social changes.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Puberty** | The period of rapid physical maturation involving hormonal and bodily changes that enable reproduction |
| **Adolescent egocentrism** | The heightened self-consciousness and belief that others are as focused on you as you are (Elkind) |
| **Imaginary audience** | The belief that everyone is watching and evaluating you — "Everyone will notice my bad hair day" |
| **Personal fable** | The belief that your experiences are unique and that you are invulnerable — "No one understands me" / "It won't happen to me" |
| **Prefrontal cortex** | The brain region responsible for planning, impulse control, and decision-making — not fully mature until ~25 |

### Real-World Example

A 16-year-old refuses to go to school because of a small pimple, convinced that "everyone will stare at it." This is the **imaginary audience** — the belief that others are as focused on your appearance as you are. Meanwhile, the same teen texts while driving, believing "I won't crash — that happens to other people." This is the **personal fable** — the illusion of invulnerability.

### Why This Matters

The AP exam frequently tests adolescent egocentrism (imaginary audience + personal fable) and the connection between brain development and risk-taking. Understanding that the prefrontal cortex isn't fully developed until ~25 explains why teens take more risks and struggle with impulse control.
      `
    },
    {
      id: 'adol1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 15-year-old is convinced that everyone in the cafeteria is watching and judging her outfit. This belief is an example of:',
            options: [
              'Personal fable — she believes she is special and unique',
              'Imaginary audience — she overestimates how much others are paying attention to her',
              'Formal operational thinking — she is using abstract reasoning',
              'Identity diffusion — she hasn\'t committed to an identity'
            ],
            correctAnswer: 1,
            explanation: 'The imaginary audience is the adolescent\'s belief that others are constantly watching and evaluating them. In reality, most people are too focused on themselves to notice. This is a hallmark of adolescent egocentrism identified by David Elkind.'
          },
          {
            question: 'Why are adolescents more likely to engage in risky behaviors like reckless driving compared to adults?',
            options: [
              'Their limbic system (emotion/reward center) is fully developed while their prefrontal cortex (impulse control) is not yet mature',
              'They have lower intelligence than adults',
              'Their sensory systems are more sensitive to danger',
              'They have fully developed decision-making abilities but choose risks intentionally'
            ],
            correctAnswer: 0,
            explanation: 'The adolescent brain has a maturity gap: the limbic system (which drives emotions and reward-seeking) matures earlier than the prefrontal cortex (which handles impulse control, planning, and risk assessment). This imbalance explains why teens seek thrills but struggle to assess consequences — the gas pedal develops before the brakes.'
          }
        ]
      }
    },
    {
      id: 'adol1-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: The Adolescent Brain

**The Maturity Gap**

The adolescent brain develops from back to front. The limbic system (emotion center, including the amygdala) matures during puberty, while the prefrontal cortex (judgment, planning, impulse control) doesn't fully mature until approximately age 25.

| Brain region | Function | Maturity timeline |
|-------------|----------|-------------------|
| **Limbic system / Amygdala** | Emotion, reward, thrill-seeking | Matures during puberty (~12-14) |
| **Prefrontal cortex** | Planning, judgment, impulse control | Fully matures around age ~25 |

This explains the "gas pedal without brakes" phenomenon: adolescents are emotionally reactive and reward-driven, but lack the mature impulse control to consistently make safe decisions.

### Puberty: Physical Changes

- **Hormonal changes:** Increased estrogen (females) and testosterone (males) trigger development of secondary sex characteristics
- **Growth spurt:** Rapid increase in height and weight
- **Primary sex characteristics:** Reproductive organs mature
- **Secondary sex characteristics:** Body hair, voice changes, breast development
- **Timing matters:** Early-maturing girls and late-maturing boys tend to experience more psychological distress

### Adolescent Egocentrism (Elkind)

David Elkind identified two components of adolescent egocentrism:

1. **Imaginary audience:** "Everyone is watching me" → leads to extreme self-consciousness, social anxiety, and concern about appearance
2. **Personal fable:** "I am special/unique/invulnerable" → leads to risk-taking behavior ("It won't happen to ME"), diary-keeping, and the feeling that no one has ever felt this way before

Both decline as the prefrontal cortex matures and perspective-taking improves.
      `
    },
    {
      id: 'adol1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) What brain region responsible for impulse control isn't fully mature until ~25?

      2) The belief that "everyone is watching me" is called the imaginary ___. (one word)

      3) The belief that "I am invulnerable — it won't happen to me" is the personal ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['prefrontal cortex', 'audience', 'fable'],
        hint1: 'Two words: ___ cortex — located at the front of the brain',
        hint2: 'Like an audience watching a performance — but it\'s imaginary',
        hint3: 'Like a fable/story — the teen sees themselves as the unique hero',
        explanation: 'Expected answers: prefrontal cortex (impulse control center, matures ~25), audience (imaginary audience = belief others are watching), and fable (personal fable = belief in one\'s uniqueness/invulnerability).'
      }
    },
    {
      id: 'adol1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A teen refuses to wear glasses because "everyone will laugh" — this reflects the ___',
            options: ['personal fable', 'imaginary audience', 'identity crisis', 'formal operations']
          },
          {
            label: 'A teen says "You don\'t understand what I\'m going through — no one has ever felt this way" — this reflects the ___',
            options: ['personal fable', 'imaginary audience', 'identity diffusion', 'egocentrism']
          },
          {
            label: 'Risk-taking in adolescence is partly explained by the late development of the ___',
            options: ['amygdala', 'hippocampus', 'prefrontal cortex', 'cerebellum']
          }
        ],
        correctAnswers: ['imaginary audience', 'personal fable', 'prefrontal cortex'],
        hint1: 'Belief that everyone is watching and judging.',
        hint2: 'Belief that experiences are uniquely special.',
        hint3: 'The "brakes" of the brain — planning and impulse control.',
        explanation: 'Imaginary audience = "everyone is watching me." Personal fable = "I am unique and invulnerable." The prefrontal cortex (impulse control) matures last, explaining adolescent risk-taking.'
      }
    },
    {
      id: 'adol1-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Adolescent egocentrism and childhood egocentrism are the same"** — Piaget's childhood egocentrism is the inability to see others' perspectives. Elkind's adolescent egocentrism is excessive self-consciousness (imaginary audience + personal fable). Different concepts.
- **"The personal fable is always negative"** — While it contributes to risk-taking, it also drives creativity, ambition, and the sense that one can accomplish great things.
- **"Puberty = adolescence"** — Puberty is the BIOLOGICAL component of adolescence (hormonal/physical changes). Adolescence is the broader developmental period including cognitive and social changes.
- **"Teens take risks because they don't know it's dangerous"** — Most teens KNOW the risks. The issue is that their reward-seeking limbic system overrides their not-yet-mature prefrontal cortex in the moment.

### AP Strategy Moves
- Imaginary audience questions often describe a teen who is overly concerned about what others think. Personal fable questions describe a teen who feels unique or invulnerable.
- If a question asks WHY teens take risks, the answer involves brain development (prefrontal cortex maturity gap), NOT ignorance of danger.
- Know that early puberty has different effects: early-maturing girls face more social pressure; late-maturing boys face more social difficulty.
- Elkind = adolescent egocentrism. Piaget = childhood egocentrism. Don't mix them up.
      `
    },
    {
      id: 'adol1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 14-year-old insists on spending 45 minutes getting ready for school each morning, changing outfits multiple times and asking "Does this look okay?" repeatedly. Her parents are frustrated. A psychologist would explain this behavior as:',
            options: [
              'A sign of anxiety disorder requiring clinical intervention',
              'The imaginary audience — a normal part of adolescent egocentrism where teens believe everyone is scrutinizing their appearance',
              'Formal operational thinking — the ability to think abstractly about fashion',
              'Identity achievement — the teen has committed to a personal style'
            ],
            correctAnswer: 1,
            explanation: 'This is a classic imaginary audience example. The teen believes that peers are closely watching and evaluating her appearance (they usually aren\'t). This is a normal developmental phenomenon — not a disorder — that typically decreases as the teen matures and develops better perspective-taking.'
          },
          {
            question: 'A 16-year-old drives 90 mph on the highway, telling friends "I\'m a great driver — accidents happen to bad drivers, not me." What TWO concepts from adolescent development best explain this behavior?',
            options: [
              'Personal fable (invulnerability) and immature prefrontal cortex (poor impulse control)',
              'Imaginary audience (showing off) and concrete operational thinking',
              'Identity foreclosure (following peers) and crystallized intelligence',
              'Formal operations (abstract thinking) and postconventional morality'
            ],
            correctAnswer: 0,
            explanation: 'The teen\'s belief that "accidents happen to others, not me" is the personal fable (illusion of invulnerability). The risky behavior itself reflects the immature prefrontal cortex — the brain\'s impulse-control center isn\'t fully developed, so the limbic system\'s thrill-seeking overrides rational judgment. Both concepts work together to explain adolescent risk-taking.'
          }
        ]
      }
    }
  ]
}
