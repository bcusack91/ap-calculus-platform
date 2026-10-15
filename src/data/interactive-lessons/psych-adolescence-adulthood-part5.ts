export const psychAdolescencePart5Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol5-s1-intro',
      type: 'text' as const,
      content: `
## Social Development in Adulthood

**Part 5 of 7 — Emerging Adulthood, Relationships, and Erikson's Adult Stages**

> 🔑 **Key Concept:** Culture decides when adulthood begins and when major life events "should" happen. Adults build families or family-like relationships for mutual support, and the attachment patterns and adversity of childhood carry into those relationships.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Social clock** | A culture's expected timing for major life events, such as leaving home, starting a career, marrying, and having children |
| **Emerging adulthood** | A transition period between adolescence and adulthood (roughly 18 to the mid-20s) that some cultures allow, marked by exploration of work, love, and identity before taking on full adult roles |
| **Family-like relationships** | Close adult bonds, such as partners, close friends, or a "chosen family," that provide mutual support and care |
| **Adult attachment** | Patterns of trust and closeness in adult relationships; childhood attachment styles can affect how adults form attachments |
| **Adverse childhood experiences (ACEs)** | Potentially traumatic childhood events, such as abuse, neglect, or household dysfunction, whose effects on relationships can last throughout the lifespan |

### Real-World Example

Daniel, 24, has a degree, lives with roommates, and has changed jobs twice while deciding on a career. In his parents' home country, most people his age are already married with children, so relatives keep asking when he will "settle down." In the United States, his path is common. Same age, different social clocks: culture, not biology, sets when adulthood is expected to begin.
      `
    },
    {
      id: 'adol5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 23-year-old has finished college but still lives with roommates, is trying out different jobs, and does not yet feel "fully grown up." In cultures that allow this period, she is in:',
            options: [
              'Identity foreclosure',
              'Emerging adulthood',
              'Generativity vs. stagnation',
              'The formal operational stage'
            ],
            correctAnswer: 1,
            explanation: 'Emerging adulthood is the transition between adolescence and adulthood, roughly 18 to the mid-20s, marked by exploration of work and relationships. Some cultures allow it; in others, adult roles begin earlier.'
          },
          {
            question: 'A 50-year-old mentors new teachers at her school and volunteers to coach a youth robotics team. According to Erikson, she is successfully resolving:',
            options: [
              'Intimacy vs. isolation',
              'Integrity vs. despair',
              'Identity vs. role confusion',
              'Generativity vs. stagnation'
            ],
            correctAnswer: 3,
            explanation: 'Generativity vs. stagnation is the middle-adulthood conflict. Mentoring and coaching contribute to the next generation, which is the positive resolution; stagnation is feeling unproductive and uninvolved.'
          }
        ]
      }
    },
    {
      id: 'adol5-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Erikson's Three Adult Stages

| Stage | Typical period | What success looks like | What the negative pole looks like |
|-------|---------------|------------------------|----------------------------------|
| **Intimacy vs. isolation** | Young adulthood | Forming close, committed relationships with partners and friends | Avoiding closeness; loneliness |
| **Generativity vs. stagnation** | Middle adulthood | Contributing to the next generation through parenting, mentoring, work, or community service | Feeling stuck, self-absorbed, or unproductive |
| **Integrity vs. despair** | Late adulthood | Looking back on life with acceptance and a sense of meaning | Regret and bitterness about how life turned out |

Each stage is a conflict to resolve, not a test passed once. Major life events, such as divorce, job loss, or a new grandchild, can reopen these conflicts.

### Attachment From Childhood to Adulthood

Childhood attachment styles can affect how adults form attachments to other adults:

| Childhood style | Common adult pattern |
|----------------|---------------------|
| **Secure** | Comfortable with closeness and depending on a partner; trusts that support will be there |
| **Insecure-anxious** | Worries about being abandoned; seeks frequent reassurance |
| **Insecure-avoidant** | Uncomfortable with closeness; keeps partners at a distance |
| **Insecure-disorganized** | Wants closeness but also fears it; relationships can feel confusing or unstable |

These are **tendencies, not destinies**. Later relationships, such as a supportive partner or therapy, can shift a person toward security.

### ACEs Across the Lifespan

ACEs are linked to effects on the relationships people form **throughout life**, including difficulty trusting partners and higher rates of relationship conflict. Two points the CED stresses:

- **Sociocultural differences** exist in what is considered an ACE and in how ACEs affect outcomes.
- Supportive adult relationships are a major **protective factor**, so ACEs raise risk without determining outcomes.

### Culture and the Start of Adulthood

| Marker of adulthood | Varies by culture |
|--------------------|-------------------|
| **Leaving the parents' home** | Expected at 18 in some cultures; adult children commonly live with parents until marriage in others |
| **Marriage and children** | The "on time" age differs widely across cultures and generations |
| **Formal transitions** | Some cultures mark adulthood with a ceremony; others with legal ages or financial independence |
      `
    },
    {
      id: 'adol5-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type the missing term.
      `,
      exercise: {
        questions: [
          {
            question: 'A culture\'s expected timing for events such as marriage and starting a career is called the social _____.',
            answer: 'clock',
            acceptableAnswers: ['clocks'],
            explanation: 'The social clock is set by culture, so the "right" age for life events differs across societies and generations.'
          },
          {
            question: 'Erikson\'s young-adult conflict is intimacy vs. _____.',
            answer: 'isolation',
            acceptableAnswers: ['isolated'],
            explanation: 'Young adults work on forming close, committed relationships; failing to do so leads toward isolation.'
          },
          {
            question: 'An adult who feels comfortable depending on a partner and trusts that support will be there shows a(n) _____ attachment pattern.',
            answer: 'secure',
            acceptableAnswers: ['securely attached', 'secure attachment'],
            explanation: 'Secure attachment in childhood is linked with comfort with closeness and trust in adult relationships.'
          }
        ]
      }
    },
    {
      id: 'adol5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An adult repeatedly texts her partner for reassurance and fears he will leave her. Her pattern is best described as _____',
            options: ['secure', 'anxious', 'avoidant', 'generative']
          },
          {
            label: 'An 82-year-old says, "I made mistakes, but I\'m at peace with the life I\'ve lived." Erikson would call this _____',
            options: ['integrity', 'generativity', 'intimacy', 'despair']
          },
          {
            label: 'A group of close friends who spend holidays together and care for each other when sick illustrates _____',
            options: ['the social clock', 'a family-like relationship', 'emerging adulthood', 'a cohort effect']
          }
        ],
        correctAnswers: ['anxious', 'integrity', 'a family-like relationship'],
        hint1: 'Fear of abandonment plus a need for reassurance.',
        hint2: 'Looking back with acceptance rather than regret.',
        hint3: 'Adults build relationships that provide mutual support and care.',
        explanation: 'Constant reassurance-seeking and fear of abandonment fit an anxious attachment pattern. Accepting one\'s life in old age is integrity. Close friends who provide mutual care form a family-like relationship.'
      }
    },
    {
      id: 'adol5-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

| Misconception | Correction |
|--------------|-----------|
| "Adulthood starts at 18 everywhere." | Culture sets when adulthood begins; emerging adulthood exists only where cultures allow it. |
| "Being 'off' the social clock means something is wrong." | Social clocks differ across cultures and generations; they describe expectations, not health. |
| "Attachment style is fixed for life." | Childhood attachment **can** affect adult attachment, but later relationships can change it. |
| "ACEs determine adult outcomes." | ACEs raise risk; supportive relationships protect, and cultures differ in what counts as an ACE. |
| "Erikson's adult stages are tied to exact ages." | The ages are approximate, and life events can reopen a stage. |

> 🔑 **AP Connection:** Studies linking childhood attachment or ACEs to adult relationships are **correlational**; researchers cannot assign childhood experiences. If an AAQ asks whether such a finding shows that ACEs **cause** relationship problems, explain that a third variable, such as poverty, could affect both.
      `
    },
    {
      id: 'adol5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers find that adults who reported more adverse childhood experiences also reported more conflict in their romantic relationships. Which conclusion is most appropriate?',
            options: [
              'ACEs directly cause relationship conflict in adulthood',
              'ACEs are related to adult relationship conflict',
              'Relationship conflict in adulthood causes people to recall ACEs',
              'ACEs have the same effect on relationships in every culture'
            ],
            correctAnswer: 1,
            explanation: 'Self-reported ACEs and relationship conflict are measured, not manipulated, so the finding is a correlation. It cannot show cause, and the CED notes that how ACEs affect outcomes differs across sociocultural groups.'
          },
          {
            question: 'A 34-year-old who has always kept romantic partners at a distance says, "I don\'t like needing anyone." Which pair of concepts best fits her?',
            options: [
              'Avoidant attachment pattern and risk of isolation in Erikson\'s young-adult stage',
              'Secure attachment pattern and successful generativity in Erikson\'s middle stage',
              'Anxious attachment pattern and successful intimacy in Erikson\'s young-adult stage',
              'Disorganized attachment pattern and despair in Erikson\'s late-adult stage'
            ],
            correctAnswer: 0,
            explanation: 'Discomfort with closeness and depending on others is the avoidant pattern, and avoiding close relationships in young adulthood moves toward isolation in intimacy vs. isolation. Generativity and despair belong to later stages.'
          }
        ]
      }
    }
  ]
}
