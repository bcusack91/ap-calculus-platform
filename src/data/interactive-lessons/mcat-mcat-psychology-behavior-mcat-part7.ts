export const mcatPsychBehavPart7Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb7-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 7 of 7 — Development & Identity**

### Erikson's Psychosocial Stages

| Stage | Age | Crisis |
|-------|-----|--------|
| Trust vs. Mistrust | 0-1 | Infant depends on caregiver reliability |
| Autonomy vs. Shame | 1-3 | Toddler develops independence |
| Initiative vs. Guilt | 3-6 | Child explores and leads |
| Industry vs. Inferiority | 6-12 | Competence in school and social |
| Identity vs. Role Confusion | 12-18 | Adolescent finds self |
| Intimacy vs. Isolation | 18-40 | Young adult forms close relationships |
| Generativity vs. Stagnation | 40-65 | Contributing to society |
| Integrity vs. Despair | 65+ | Reflecting on life's meaning |

### Kohlberg's Moral Development

| Level | Reasoning | Example |
|-------|-----------|---------|
| **Pre-conventional** | Self-interest (punishment/reward) | "I'll get in trouble" |
| **Conventional** | Social norms, law and order | "It's the rule" |
| **Post-conventional** | Universal ethical principles | "It's the right thing even if illegal" |

### Attachment Types (Ainsworth)

| Type | Description |
|------|-------------|
| Secure | Distressed when parent leaves, happy on return |
| Avoidant | Little distress, ignores parent's return |
| Anxious-ambivalent | Very distressed, ambivalent on return (angry + clingy) |
| Disorganized | No consistent pattern, often from abuse |

### The Strange Situation (Ainsworth's Classic Study)

Ainsworth's **Strange Situation** is a structured observation in which a 12–18-month-old experiences a series of separations from and reunions with the caregiver, plus the presence of a stranger. **Reunion behavior**, NOT separation distress alone, is the key marker:

- **Secure** (~60–65% of infants): uses parent as a **secure base** to explore; upset at departure; readily comforted on reunion.
- **Avoidant:** explores indifferently; minimal reaction to departure OR reunion.
- **Anxious-ambivalent (resistant):** little exploration; intense distress; on reunion seeks contact yet resists comfort (clingy + angry).
- Harlow's monkey studies (cloth vs. wire "mothers") earlier established that **contact comfort**, not feeding, drives attachment — undermining the behaviorist "cupboard love" view.

### Comparing the Stage Theorists (Don't Confuse Them)

| Theorist | Domain | Engine of change |
|----------|--------|------------------|
| **Piaget** | Cognitive development | Assimilation/accommodation through 4 stages |
| **Erikson** | Psychosocial development | Resolving a crisis at each of 8 stages across the lifespan |
| **Kohlberg** | Moral reasoning | Pre-/conventional/post-conventional levels |
| **Vygotsky** | Sociocultural cognition | Social interaction; zone of proximal development |

**Trap:** Erikson stages are **psychosocial CRISES** (e.g., identity vs. role confusion); Kohlberg's are about the *reasoning behind* moral choices, NOT the choice itself. A person can reach the same decision at any Kohlberg level — what matters is the justification.

### Theories of Identity & Aging

- **Marcia's identity statuses** (built on Erikson): foreclosure, moratorium, identity achievement, and diffusion — defined by the presence/absence of **crisis** (exploration) and **commitment**.
- **Activity theory** vs. **disengagement theory** of aging: activity theory holds that maintaining social engagement promotes well-being in older adults; disengagement theory (largely discredited) claimed mutual withdrawal is natural.`
    },
    {
      id: 'pb7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Development** 🎯`,
      exercise: {
        questions: [
          {
            question: `An adolescent struggling to define their values, career goals, and identity is in which Erikson stage?`,
            options: [`Identity vs. Role Confusion (ages 12-18)`, `Intimacy vs. Isolation`, `Industry vs. Inferiority`, `Initiative vs. Guilt`],
            correctAnswer: 0,
            explanation: `Erikson's fifth stage (Identity vs. Role Confusion) occurs during adolescence. Successfully navigating this stage produces a strong sense of identity; failure leads to role confusion. The trap is **Intimacy vs. Isolation**, the NEXT stage (young adulthood) — but Erikson held that a coherent identity must form FIRST before one can fuse it with another in intimate relationships.`
          },
          {
            question: `In the Strange Situation, a 14-month-old explores the room only minimally, becomes extremely distressed when the caregiver leaves, and on reunion simultaneously reaches for the caregiver yet arches away and resists being soothed. This pattern is classified as:`,
            options: [`Anxious-ambivalent (resistant) attachment`, `Secure attachment`, `Avoidant attachment`, `Disorganized attachment`],
            correctAnswer: 0,
            explanation: `The combination of intense distress plus the contradictory "seek-yet-resist" reunion behavior defines **anxious-ambivalent (resistant)** attachment. The trap is **avoidant** attachment, which is nearly the opposite at reunion — the avoidant infant shows LITTLE distress and actively IGNORES the returning caregiver, rather than clinging-while-resisting.`
          },
          {
            question: `Two children both decide not to cheat on a test. Child A says "I'd get caught and punished," while Child B says "Cheating violates fairness, a principle everyone should uphold." According to Kohlberg, what is the key difference?`,
            options: [`They are at different levels of moral reasoning despite the same choice`, `Child A is more morally developed than Child B`, `Both are at the conventional level`, `The identical decision means they are at the same stage`],
            correctAnswer: 0,
            explanation: `Kohlberg classified moral development by the REASONING, not the decision. Child A's punishment-avoidance logic is **pre-conventional**, whereas Child B's appeal to universal ethical principles is **post-conventional**. The trap (option 4) assumes the same choice implies the same stage — but identical behavior can stem from very different levels of moral reasoning.`
          }
        ]
      }
    },
    {
      id: 'pb7-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Development & Identity

<details>
<summary><b>Example 1: Match a life situation to an Erikson stage</b></summary>

**Question:** A 50-year-old reports deriving deep satisfaction from mentoring younger colleagues and volunteering, feeling she is "leaving something behind for the next generation." Which psychosocial crisis is she resolving, and in which direction?

**Solution:**
1. Mentoring and contributing to the next generation maps to **Generativity vs. Stagnation** (middle adulthood, ~40–65). ✓
2. She is resolving it toward **generativity** (productive contribution) rather than stagnation (self-absorption).

**Key idea:** Generativity is specifically about investing in the NEXT generation and society — distinguish it from Integrity vs. Despair, which is end-of-life reflection on whether one's life had meaning.
</details>

<details>
<summary><b>Example 2: Classify a study design / observation</b></summary>

**Question:** A researcher subjects 12-month-olds to a sequence of caregiver departures, stranger encounters, and reunions, coding behavior at each reunion. What classic paradigm is this, and what is the primary dependent variable?

**Solution:**
1. The departure-stranger-reunion sequence is Ainsworth's **Strange Situation**, a structured-observation paradigm. ✓
2. The primary measure is **reunion behavior** (how the infant responds when the caregiver returns), which classifies attachment style — NOT merely how distressed the infant is during separation.

**MCAT lesson:** Many students wrongly think separation distress is the key variable; it is the reunion response that distinguishes secure from insecure styles.
</details>

<details>
<summary><b>Example 3: Apply Kohlberg's levels to reasoning</b></summary>

**Question:** A businessman argues he should return a lost wallet "because if word got out that I kept it, my reputation and standing in the community would suffer." Which Kohlberg level is this?

**Solution:**
1. The reasoning centers on social approval, reputation, and meeting others' expectations → the **conventional** level (specifically the "good boy/good girl" orientation). ✓
2. It is NOT pre-conventional (that would cite direct punishment or personal reward) and NOT post-conventional (that would invoke abstract universal principles like honesty as a moral duty).

**Connection:** Always classify by the JUSTIFICATION, not the action — returning the wallet is "moral," but the *reasoning* here is conventional, not principled.
</details>`
    },
    {
      id: 'pb7-summary',
      type: 'text' as const,
      content: `### Psychology & Behavior — Complete! ✅

The Psych/Soc section tests your understanding of how psychological, social, and biological factors influence behavior and health. Master the major theories (Piaget, Erikson, Kohlberg, Freud), neurotransmitters, brain regions, and learning principles.`
    }
  ]
};
