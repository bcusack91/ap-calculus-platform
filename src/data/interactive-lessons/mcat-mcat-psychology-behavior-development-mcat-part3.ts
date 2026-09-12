export const mcatPsychDevPart3Data = {
  topicSlug: 'mcat-psychology-behavior-development-mcat',
  sections: [
    {
      id: 'dev3-intro',
      type: 'text' as const,
      content: `# Development

**Part 3 of 4 — Erikson, Kohlberg & Identity Across the Lifespan**

### Erikson's Eight Psychosocial Crises (each age has a conflict; both outcomes matter)

| Age | Crisis | Favorable resolution |
|-----|--------|----------------------|
| Infancy (0-1) | **Trust vs. mistrust** | Hope — the world is dependable |
| Toddler (1-3) | **Autonomy vs. shame/doubt** | Will — "I can do it myself" |
| Preschool (3-6) | **Initiative vs. guilt** | Purpose — plans and undertakes |
| School age (6-12) | **Industry vs. inferiority** | Competence — mastery at school/peers |
| Adolescence | **Identity vs. role confusion** | Fidelity — a coherent self across roles |
| Young adult | **Intimacy vs. isolation** | Love — deep bonds require a formed identity first |
| Middle adult | **Generativity vs. stagnation** | Care — investing in the next generation |
| Late adult | **Integrity vs. despair** | Wisdom — accepting the life lived |

MCAT tactic: identify the character's approximate age AND the described struggle; distractors offer the adjacent stages.

### Kohlberg's Moral Reasoning (score the REASONING, never the verdict)

Heinz dilemma responses are staged by their justification:

- **Preconventional** (self-interest): Stage 1 — avoid punishment; Stage 2 — instrumental exchange ("what's in it for me")
- **Conventional** (social order): Stage 3 — approval, good-boy/good-girl; Stage 4 — law and order, duty upholds society
- **Postconventional** (principle): Stage 5 — social contract, laws are revisable agreements; Stage 6 — universal ethical principles that can override law

Either verdict ("steal" or "don't steal") can be argued at ANY stage — items that classify by conclusion are traps. **Gilligan's critique**: the scheme privileges a justice orientation; an ethic of care is an alternative moral voice, not a lower stage.

### Adolescence: Identity Work

- **Marcia's identity statuses** (two axes: exploration × commitment):
  - **Diffusion** — no exploration, no commitment
  - **Foreclosure** — commitment WITHOUT exploration (adopting parents' plan wholesale)
  - **Moratorium** — active exploration, commitment pending
  - **Achievement** — commitment following genuine exploration
- **Adolescent egocentrism** (Elkind): **imaginary audience** (everyone is watching me) and **personal fable** (my experience is unique; risks don't apply to me — the invulnerability belief behind risk-taking, compounded by still-maturing prefrontal control against an earlier-maturing reward system)

### Adulthood & Aging (the positive-picture findings)

- **Socioemotional selectivity** (Carstensen): as perceived time horizons shrink, motivation shifts from information-seeking to emotionally meaningful ties — networks get smaller *and more satisfying* by choice, not by social failure
- The **positivity effect**: older adults preferentially attend to and remember positive material
- Cognitive aging recap (from the cognition lesson): fluid abilities and recall decline; crystallized knowledge and recognition hold — normal aging is NOT dementia
- Erikson's final crises (generativity, then integrity) frame midlife mentoring and late-life life review`
    },
    {
      id: 'dev3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Moral-Reasoning Study, Fully Read

**Passage.** Researchers present the Heinz dilemma to 90 participants (ages 10, 16, 30). Four sample responses are recorded: (A) "He shouldn't steal — he'll be jailed." (B) "He should steal — a good husband is expected to protect his family, and people would think badly of him otherwise." (C) "He shouldn't steal — if everyone broke laws whenever they had a reason, society couldn't function." (D) "He should steal — the right to life is a universal principle that outranks property law, though he should accept the legal consequences." Stage distribution shifts upward with age, but many 30-year-olds remain at Stage 4, and cross-cultural replications find Stage 5-6 responses rare outside formally schooled populations. Female participants more often justify choices by relationship preservation, which the original scoring places at Stage 3.

**Step 1 — score each response by its justification.** A = Stage 1 (punishment avoidance, preconventional). B = Stage 3 (role approval, conventional) — note it REACHES the opposite verdict from A, proving verdicts don't carry stage information. C = Stage 4 (law-and-order, conventional). D = Stage 5/6 (principle over law, postconventional) — accepting punishment while violating the law is the postconventional tell.

**Step 2 — read the age data with the theory's own claims.** Upward drift supports an invariant SEQUENCE; adults plateauing at Stage 4 shows the top stages are not universal endpoints — Kohlberg himself conceded Stage 6 is rare. Sequence claims and universality claims are separable; the data support the first more than the second.

**Step 3 — handle the cultural and gender findings.** Rarity of postconventional scores in unschooled populations may mean the scoring privileges Western, verbal, principle-citing argument styles (a measurement-validity issue) rather than that whole cultures reason "lower." The gender finding is Gilligan's exact objection: care-based justifications get filed at Stage 3 by a scheme built on justice reasoning — a scoring-orientation bias, not a female deficit.

**Step 4 — the anticipated item.** "A participant argues Heinz should NOT steal because his wife's care network would collapse if he were imprisoned. Under Kohlberg vs. Gilligan..." — Kohlberg's scheme scores the relational content conventionally; Gilligan reads it as a mature ethic of care. Recognizing that the SAME response scores differently under the two frameworks is the passage's payoff.`
    },
    {
      id: 'dev3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Psychosocial Stages, Moral Reasoning & Identity** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 16-year-old cycles through bands, clubs, political causes, and possible careers, telling her parents she is "figuring out who I actually am." Erikson locates her central developmental task as:`,
            options: [`Industry versus inferiority`, `Intimacy versus isolation`, `Generativity versus stagnation`, `Identity versus role confusion — integrating roles and values into a coherent self during adolescence`],
            correctAnswer: 3,
            explanation: `Adolescence in Erikson's scheme centers on constructing a coherent identity across roles; her deliberate sampling of selves is that crisis in action (and, in Marcia's terms, moratorium). Industry precedes it in the school years, and intimacy — which Erikson argued REQUIRES a settled identity — is the young-adult crisis that follows.`
          },
          {
            question: `Two children judge a man who stole medicine for his dying wife. One says he was wrong "because stealing gets you put in jail"; the other says he was right "because saving a life matters more than any law, and he should accept his punishment." Kohlberg would score them as:`,
            options: [`Both conventional, since both mention law`, `Preconventional (punishment avoidance) and postconventional (principle above law) respectively — the stage lies in the reasoning, not the verdict`, `Stage 3 and Stage 4 respectively`, `Unscorable because they reached opposite verdicts`],
            correctAnswer: 1,
            explanation: `Justification is everything: fear of jail is Stage 1 self-interest; ranking a universal principle (life) above legal rules while accepting consequences is postconventional. Opposite verdicts are fully scorable — any conclusion can be argued at any stage, which is precisely why conclusion-based options are traps.`
          },
          {
            question: `A college freshman announces he will be a cardiologist "because everyone in my family is one — I've never really considered anything else," and reports no distress about the choice. Marcia's identity-status framework classifies him as:`,
            options: [`Foreclosure — commitment adopted without personal exploration`, `Identity diffusion`, `Moratorium`, `Identity achievement`],
            correctAnswer: 0,
            explanation: `Marcia crosses exploration with commitment: this student is fully committed but the commitment was inherited, never examined — foreclosure. Diffusion lacks both exploration and commitment; moratorium is exploration without yet committing; achievement requires commitment FOLLOWING genuine exploration. Foreclosed identities are stable until challenged, then brittle.`
          },
          {
            question: `An infant whose caregivers respond promptly and predictably to distress comes to treat new situations and people as fundamentally safe. Erikson would say the infant has favorably resolved:`,
            options: [`Autonomy versus shame and doubt`, `Trust versus mistrust — consistent, responsive care in the first year builds the basic sense that the world is dependable`, `Initiative versus guilt`, `Integrity versus despair`],
            correctAnswer: 1,
            explanation: `The first psychosocial crisis (birth to ~1 year) turns on whether care is reliable enough to ground basic trust — Erikson's psychosocial parallel to secure attachment. Autonomy is the toddler crisis (self-control, choice), initiative the preschool crisis, and integrity belongs to late life.`
          },
          {
            question: `A 17-year-old texts while driving, explaining that crashes "happen to other people — I know what I'm doing." Elkind's account of adolescent egocentrism labels this belief, and its standard developmental explanation, as:`,
            options: [`The imaginary audience, caused by conventional moral reasoning`, `Identity diffusion, caused by authoritarian parenting`, `Object impermanence`, `The personal fable — a conviction of unique invulnerability, consistent with a late-maturing prefrontal control system lagging an earlier-maturing reward system`],
            correctAnswer: 3,
            explanation: `Believing one's own experience is so special that ordinary risks do not apply is the personal fable, the component of adolescent egocentrism tied to risk-taking. The imaginary audience is the separate belief that everyone is watching and judging. The neurodevelopmental account — limbic reward maturing ahead of prefrontal control — is the standard biological complement.`
          }
        ]
      }
    },
    {
      id: 'dev3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Erikson ladder: trust → autonomy → initiative → industry → identity → intimacy → generativity → integrity; match age plus struggle, and remember intimacy presupposes identity
- Kohlberg: score justifications only — punishment/exchange (preconventional), approval/law-and-order (conventional), social contract/universal principle (postconventional); sequence is better supported than universality
- Gilligan: care-based reasoning is an alternative orientation the justice-based scoring undervalues, not a lower stage
- Marcia grid: exploration x commitment → diffusion, foreclosure (commitment without exploration), moratorium, achievement
- Adolescent egocentrism: imaginary audience + personal fable (invulnerability → risk); aging brings socioemotional selectivity and the positivity effect — smaller, warmer networks by choice`
    }
  ]
};
