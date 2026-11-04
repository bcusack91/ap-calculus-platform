export const mcatPsychDevPart2Data = {
  topicSlug: 'mcat-psychology-behavior-development-mcat',
  sections: [
    {
      id: 'dev2-intro',
      type: 'text' as const,
      content: `# Development

**Part 2 of 4 — Attachment, Temperament, Parenting & Vygotsky**

### Attachment: The Experimental Foundations

- **Harlow's monkeys**: infant rhesus monkeys separated from mothers overwhelmingly clung to a soft **cloth surrogate** over a wire surrogate that provided milk — attachment is built on **contact comfort**, not feeding (a direct refutation of the behaviorist "cupboard love" account). The cloth mother also served as a **secure base** for exploring frightening novelty.
- **Lorenz's imprinting**: precocial birds attach to the first moving object in a critical period — evidence for biologically prepared, time-windowed bonding (do not overextend to humans, where attachment forms gradually).
- **Bowlby**: attachment is an evolved system keeping the infant near a protector; **stranger anxiety** (~8 mo) and **separation anxiety** (peaking ~12-18 mo) are its normal signatures.

### Ainsworth's Strange Situation (classify by the REUNION, not the separation)

| Style | Exploration with caregiver | At reunion |
|-------|---------------------------|------------|
| **Secure** (the majority) | Uses caregiver as secure base | Distress resolves quickly; greets warmly |
| **Insecure-avoidant** | Explores, seems indifferent | Ignores or avoids the returning caregiver |
| **Insecure-ambivalent/resistant** | Clings, little exploration | Inconsolable; seeks contact yet angrily resists it |
| **Disorganized** | — | Contradictory, frozen, disoriented behavior; associated with frightening or maltreating care |

<!-- yield:low -->
- Typical base rates in middle-class U.S. samples: secure ~60-65%, avoidant ~20%, ambivalent/resistant ~10-15%, disorganized a small remainder.
<!-- /yield -->

Secure attachment tracks **sensitive, responsive caregiving** and predicts later social competence — as a probabilistic correlate, not destiny.

### Temperament: The Child's Own Contribution

Thomas & Chess: **easy**, **difficult**, and **slow-to-warm-up** profiles, visible in infancy, biologically based, moderately stable (Kagan's behaviorally inhibited infants show lasting reactivity differences). Development runs on **goodness of fit** between temperament and caregiving — and the child's temperament also *evokes* particular parenting (bidirectionality: correlations between parenting and child outcome are not automatically parent-caused).

<!-- yield:low -->
- In Thomas & Chess's sample, roughly 40% of infants were easy, 10% difficult, and 15% slow-to-warm-up; the rest fit no single profile.
<!-- /yield -->

### Parenting Styles (Baumrind: two axes — demandingness × responsiveness)

- **Authoritative** (high/high): firm limits, warmth, explanation → best average outcomes (competence, self-regulation)
- **Authoritarian** (high demand, low response): obedience-focused, punitive → anxiety, lower autonomy
- **Permissive** (low demand, high response): warm, few limits → impulse-control problems
- **Neglectful/uninvolved** (low/low): worst outcomes. All of these outcomes vary somewhat by culture and are correlational — the same caution as above.

### Vygotsky vs. Piaget (the guaranteed contrast)

- **Vygotsky**: cognition develops **socially first** — skills appear between child and a more knowledgeable other, then are internalized. Key tools: **zone of proximal development** (what the child can do with help but not alone), **scaffolding** (calibrated, fading support), and language/**private speech** as the vehicle of thought.
- **Piaget**: the solo child-as-scientist constructing knowledge through action; development *precedes* and constrains learning.
- Discriminator: if the vignette's gains come through guided interaction, cultural tools, or instruction inside the ZPD → Vygotsky. If through independent exploration and stage-limited readiness → Piaget.`
    },
    {
      id: 'dev2-worked',
      type: 'text' as const,
      content: `### Worked Example — An Attachment-Methods Passage, Fully Read

**Problem 1.** In a longitudinal study, 200 infants complete the Strange Situation at 12 months. At reunion, Infant J ignores his returning mother and keeps playing, back turned. Infant K reaches to be held, then arches away in anger, and cannot be soothed.

- **(a)** How is Infant J classified?
- **(b)** How is Infant K classified?
- **(c)** Infant J showed almost no distress when his mother left. Why is that not evidence that he is securely attached?

**(a) Infant J.** Exploration plus avoidance of the returning caregiver is insecure-avoidant.

**(b) Infant K.** Seeking contact while angrily resisting it, with distress that will not resolve, is insecure-ambivalent/resistant.

**(c) The reunion decides.** Low separation distress is typical of avoidant infants, and many secure infants cry when the caregiver leaves, so separation behavior is not diagnostic. J's avoidance at the RETURN carries the classification.

**Problem 2.** In the same study, irritability assessed at 3 months predicts later resistant classification, even after controlling for maternal sensitivity.

- **(a)** What does controlling for maternal sensitivity rule out?
- **(b)** Which model of development does the result support?
- **(c)** Which tempting conclusion about attachment does the result block?

**(a) The parenting-only route.** If irritable infants became resistant only because they received less sensitive care, the link would vanish once sensitivity is held constant. It does not vanish.

**(b) Bidirectional.** The child contributes directly: early temperament shapes attachment outcomes alongside caregiving (and temperament can also evoke particular parenting) — the bidirectional model.

**(c) Parenting as the sole cause.** The strongest wrong answer attributes attachment classification entirely to parenting. The data given explicitly block that inference.

**Problem 3.** At age 5, teachers blind to the children's attachment classifications rate former secure infants higher in peer competence (d = 0.4).

- **(a)** What does keeping the teachers blind protect against?
- **(b)** How large is an effect of d = 0.4?
- **(c)** Can the study conclude that secure attachment causes later competence?

**(a) Expectancy bias.** Teachers who knew a child's classification might rate the child to fit it; blind ratings remove that bias.

**(b) Modest.** d = 0.4 is a modest effect: attachment security is a probabilistic predictor of later competence, not a determinant.

**(c) No.** The design is correlational and self-selected: sensitive parents may differ in many other ways that also build competence. "Secure attachment causes later competence" overreaches the data.

**Problem 4.** A second sample, from a culture emphasizing early independence training, shows nearly double the avoidant rate. A third, in which infants are almost never apart from their mothers, shows elevated resistant classifications.

- **(a)** Why might independence training raise avoidant classifications?
- **(b)** Why might constant closeness raise resistant classifications?
- **(c)** What do the shifted rates call into question?

**(a) Indifference is normal there.** Where infants are trained toward early independence, calm indifference at reunion is normative behavior, yet the coding reads it as avoidance.

**(b) Separation is rare there.** For an infant almost never apart from the mother, even a brief separation is exceptionally alarming, so the distress and clinging at reunion look resistant.

**(c) The measure, not the children.** The same behaviors carry different meanings under different caregiving norms, so the procedure's VALIDITY is partly culture-bound. The data do not show that most infants in those cultures are disordered.`
    },
    {
      id: 'dev2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attachment, Temperament & Guided Learning** 🎯`,
      exercise: {
        questions: [
          {
            question: `Harlow's infant monkeys spent nearly all their time clinging to a terrycloth surrogate and visited a wire surrogate only to feed, and ran to the cloth figure when frightened. These findings were decisive against which prior claim?`,
            options: [`That attachment derives mainly from being fed`, `That monkeys cannot form attachments to any caregiver`, `That imprinting occurs only in birds, not mammals`, `That infant temperament is biologically based rather than learned`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The behaviorist/psychoanalytic consensus held that infants attach to whoever satisfies hunger. Feeding was assigned to the wire mother, yet attachment behaviors — clinging, fear-time refuge, secure-base exploration — all organized around the cloth mother, isolating contact comfort as the operative variable. The design's power is exactly that it unconfounded food from touch.`
          },
          {
            question: `In the Strange Situation, an infant plays happily while her father is present and shows no distress when he leaves. When he returns, she smiles, crawls over to show him a toy, and then goes back to playing. Her classification is:`,
            options: [`Insecure-avoidant, given her lack of distress at separation`, `Disorganized, given her shifts between play and approach`, `Insecure-resistant, given her need for contact at reunion`, `Secure, given her warm greeting and her quick return to play`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Reunion behavior is the diagnostic window: greeting the returning caregiver and settling back into exploration defines secure attachment, whatever happened at the separation — secure infants may or may not cry when the caregiver leaves. Low separation distress is the trap that pulls toward avoidant, but an avoidant infant ignores or turns away at reunion, which she does not. A resistant infant clings angrily and cannot be soothed, and disorganized infants freeze or show contradictory approach-avoidance; moving between play and a brief greeting is neither.`
          },
          {
            question: `A tutoring program succeeds by giving each child problems slightly beyond independent ability while a tutor supplies hints that are progressively withdrawn as skill grows. The program is a direct application of:`,
            options: [`Piaget's stage-readiness principle, since children work alone`, `Baumrind's authoritative parenting applied to tutoring`, `Vygotsky's zone of proximal development with scaffolding`, `Harlow's contact comfort as a basis for secure learning`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Targeting the band between solo and assisted competence IS the ZPD, and calibrated, fading assistance IS scaffolding — Vygotsky's model of development as social-to-individual internalization. A strict Piagetian would wait for stage readiness and favor independent discovery, making the guided-interaction design the discriminating detail.`
          },
          {
            question: `Two families enforce a strict homework policy. Family A explains the reasons, invites discussion, and remains warm; Family B demands unquestioning compliance and punishes dissent coldly. Baumrind's framework classifies A and B respectively as:`,
            options: [`Permissive and neglectful`, `Authoritative and authoritarian`, `Authoritarian and permissive`, `Authoritarian and authoritative`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Both families are high in demandingness; the axis separating them is responsiveness. Warmth plus explanation with firm limits = authoritative (best average outcomes); coercive, low-warmth obedience-focus = authoritarian. Permissive parents impose few demands, and neglectful parents are low on both axes — neither matches these vignettes.`
          },
          {
            question: `Infants classified at 4 months as highly reactive to novel stimuli disproportionately become behaviorally inhibited toddlers and, at 7, shyer children — across differing family environments. This continuity primarily supports the claim that:`,
            options: [`Temperament is an early, biologically grounded disposition`, `Parenting style fully determines a child's eventual personality`, `Attachment classification is meaningless for predicting outcomes`, `Shyness is learned mainly through observational modeling of anxious parents`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Kagan's high-reactive infants illustrate temperament: individual differences present before extensive socialization, persisting across settings and years — evidence for a constitutional contribution the child brings to every interaction (and one reason parenting-outcome correlations are bidirectional). Stability is moderate, not absolute, so environment still moderates outcomes; and continuity across differing family environments argues against shyness being simply learned from anxious parents.`
          }
        ]
      }
    },
    {
      id: 'dev2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Roots of attachment.** Harlow: touch, not food, builds attachment; Bowlby: stranger (~8 mo) and separation anxiety are normal.
- **Classify by the reunion.** Secure settles and greets, avoidant ignores, resistant clings and rages, disorganized freezes.
- **Temperament and parenting.** Temperament is early and biological; authoritative (firm and warm) parenting does best on average.
- **Vygotsky's guided growth.** Gains made with help inside the zone of proximal development, via fading scaffolding, are Vygotsky's.

**Common traps**

- **Classifying by the separation.** Crying when the parent leaves classifies nothing; the response at the reunion decides the style.
- **Parents cause everything.** A child's temperament evokes parenting, so parenting-outcome correlations are not automatically parent-caused.
- **Mixing up the A-words.** Authoritative is firm plus warm and explains; authoritarian is firm but cold, punitive and obedience-focused.
- **Imprinting in humans.** Lorenz's critical-period imprinting fits precocial birds; human attachment forms gradually.

<!-- yield:low -->
**Low-yield extras**

- Strange Situation base rates (secure ~60-65%, avoidant ~20%, resistant ~10-15%, disorganized a small remainder); Thomas & Chess temperament percentages (easy ~40%, difficult ~10%, slow-to-warm-up ~15%)
<!-- /yield -->`
    }
  ]
};
