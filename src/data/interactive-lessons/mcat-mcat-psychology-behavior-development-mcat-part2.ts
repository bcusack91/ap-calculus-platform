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

| Style (~%) | Exploration with caregiver | At reunion |
|------------|---------------------------|------------|
| **Secure** (~60-65%) | Uses caregiver as secure base | Distress resolves quickly; greets warmly |
| **Insecure-avoidant** (~20%) | Explores, seems indifferent | Ignores or avoids the returning caregiver |
| **Insecure-ambivalent/resistant** (~10-15%) | Clings, little exploration | Inconsolable; seeks contact yet angrily resists it |
| **Disorganized** (small %) | — | Contradictory, frozen, disoriented behavior; associated with frightening or maltreating care |

Secure attachment tracks **sensitive, responsive caregiving** and predicts later social competence — as a probabilistic correlate, not destiny.

### Temperament: The Child's Own Contribution

Thomas & Chess: **easy** (~40%), **difficult** (~10%), **slow-to-warm-up** (~15%) profiles, visible in infancy, biologically based, moderately stable (Kagan's behaviorally inhibited infants show lasting reactivity differences). Development runs on **goodness of fit** between temperament and caregiving — and the child's temperament also *evokes* particular parenting (bidirectionality: correlations between parenting and child outcome are not automatically parent-caused).

### Parenting Styles (Baumrind: two axes — demandingness × responsiveness)

- **Authoritative** (high/high): firm limits, warmth, explanation → best average outcomes (competence, self-regulation)
- **Authoritarian** (high demand, low response): obedience-focused, punitive → anxiety, lower autonomy
- **Permissive** (low demand, high response): warm, few limits → impulse-control problems
- **Neglectful/uninvolved** (low/low): worst outcomes
Outcomes vary somewhat by culture and are correlational — the same caution as above.

### Vygotsky vs. Piaget (the guaranteed contrast)

- **Vygotsky**: cognition develops **socially first** — skills appear between child and a more knowledgeable other, then are internalized. Key tools: **zone of proximal development** (what the child can do with help but not alone), **scaffolding** (calibrated, fading support), and language/**private speech** as the vehicle of thought.
- **Piaget**: the solo child-as-scientist constructing knowledge through action; development *precedes* and constrains learning.
- Discriminator: if the vignette's gains come through guided interaction, cultural tools, or instruction inside the ZPD → Vygotsky. If through independent exploration and stage-limited readiness → Piaget.`
    },
    {
      id: 'dev2-worked',
      type: 'text' as const,
      content: `### Worked Example — An Attachment-Methods Passage, Fully Read

**Passage.** In a longitudinal study, 200 infants complete the Strange Situation at 12 months. At reunion, Infant J ignores his returning mother and continues playing with his back turned; Infant K alternates between reaching to be held and arching away in anger, and cannot be soothed. At age 5, teachers blind to classification rate former secure infants higher in peer competence (d = 0.4). A second sample studied in a culture emphasizing early independence training shows nearly double the avoidant rate, and a third sample with routine full-day alloparenting shows elevated resistant classifications. Finally, temperament assessed at 3 months (irritability) predicts later resistant classification even after controlling for maternal sensitivity.

**Step 1 — classify from the reunion.** J: exploration plus reunion avoidance = insecure-avoidant. K: clingy-angry, comfort-resistant distress = insecure-ambivalent/resistant. The separations themselves are not diagnostic — many secure infants cry at separation; the REUNION response carries the classification.

**Step 2 — treat the age-5 result correctly.** Blind ratings remove expectancy bias, and d = 0.4 is a modest effect: attachment security is a probabilistic predictor, not a determinant. Answers phrased as "secure attachment causes later competence" overreach a correlational, self-selected design — sensitive parents may differ in many ways.

**Step 3 — read the cross-cultural rates.** Systematically shifted distributions suggest the Strange Situation's behaviors carry different meanings under different caregiving norms (independence training makes reunion indifference normative; constant proximity care makes brief separation exceptionally alarming). The measured conclusion: the procedure's VALIDITY is partly culture-bound, not that most infants in those cultures are disordered.

**Step 4 — use the temperament finding.** Early irritability predicting resistant attachment independent of maternal sensitivity supports a child-driven contribution — the bidirectional model. The strongest wrong answer will attribute classification entirely to parenting; the data given explicitly block that inference.`
    },
    {
      id: 'dev2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attachment, Temperament & Guided Learning** 🎯`,
      exercise: {
        questions: [
          {
            question: `Harlow's infant monkeys spent nearly all their time clinging to a terrycloth surrogate and visited a wire surrogate only to feed, and ran to the cloth figure when frightened. These findings were decisive against which prior claim?`,
            options: [`That attachment derives from feeding — instead, contact comfort and a secure base proved primary`, `That monkeys cannot form attachments at all`, `That imprinting occurs in mammals`, `That temperament is biologically based`],
            correctAnswer: 0,
            explanation: `The behaviorist/psychoanalytic consensus held that infants attach to whoever satisfies hunger. Feeding was assigned to the wire mother, yet attachment behaviors — clinging, fear-time refuge, secure-base exploration — all organized around the cloth mother, isolating contact comfort as the operative variable. The design's power is exactly that it unconfounded food from touch.`
          },
          {
            question: `In the Strange Situation, an infant plays with toys while her father is present, shows little reaction when he leaves, and turns away, avoiding eye contact, when he returns. Her classification is:`,
            options: [`Secure`, `Disorganized`, `Insecure-resistant`, `Insecure-avoidant — minimal separation distress and active avoidance of the caregiver at reunion`],
            correctAnswer: 3,
            explanation: `Reunion behavior is the diagnostic window: turning away from the returning caregiver defines avoidant attachment. A secure infant may or may not cry at separation but greets and settles at reunion; a resistant infant is inconsolable and angrily clings; disorganized infants show contradictory or frozen behavior, which is absent here.`
          },
          {
            question: `A tutoring program succeeds by giving each child problems slightly beyond independent ability while a tutor supplies hints that are progressively withdrawn as skill grows. The program is a direct application of:`,
            options: [`Piaget's stage-readiness principle, since children work alone`, `Baumrind's authoritative parenting`, `Vygotsky's zone of proximal development with scaffolding — supported performance inside the zone is internalized as the support fades`, `Harlow's contact comfort`],
            correctAnswer: 2,
            explanation: `Targeting the band between solo and assisted competence IS the ZPD, and calibrated, fading assistance IS scaffolding — Vygotsky's model of development as social-to-individual internalization. A strict Piagetian would wait for stage readiness and favor independent discovery, making the guided-interaction design the discriminating detail.`
          },
          {
            question: `Two families enforce a strict homework policy. Family A explains the reasons, invites discussion, and remains warm; Family B demands unquestioning compliance and punishes dissent coldly. Baumrind's framework classifies A and B respectively as:`,
            options: [`Permissive and neglectful`, `Authoritative and authoritarian — both demanding, distinguished by responsiveness and reasoning versus power assertion`, `Authoritarian and permissive`, `Neglectful and authoritative`],
            correctAnswer: 1,
            explanation: `Both families are high in demandingness; the axis separating them is responsiveness. Warmth plus explanation with firm limits = authoritative (best average outcomes); coercive, low-warmth obedience-focus = authoritarian. Permissive parents impose few demands, and neglectful parents are low on both axes — neither matches these vignettes.`
          },
          {
            question: `Infants classified at 4 months as highly reactive to novel stimuli disproportionately become behaviorally inhibited toddlers and, at 7, shyer children — across differing family environments. This continuity primarily supports the claim that:`,
            options: [`Temperament is an early-appearing, biologically grounded disposition showing moderate stability across development`, `Parenting style fully determines child personality`, `Attachment classification is meaningless`, `Shyness results from failed conservation`],
            correctAnswer: 0,
            explanation: `Kagan's high-reactive infants illustrate temperament: individual differences present before extensive socialization, persisting across settings and years — evidence for a constitutional contribution the child brings to every interaction (and one reason parenting-outcome correlations are bidirectional). Stability is moderate, not absolute, so environment still moderates outcomes; nothing here bears on Piagetian conservation.`
          }
        ]
      }
    },
    {
      id: 'dev2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Harlow: contact comfort beats feeding (cloth vs wire unconfounds them); Lorenz: imprinting shows time-windowed prepared bonding; Bowlby: attachment as evolved proximity system with normative stranger and separation anxiety
- Strange Situation classifies by REUNION: secure (settles, greets), avoidant (ignores), resistant (clings and rages, inconsolable), disorganized (contradictory/frozen); cross-cultural rate shifts question the measure, not the children
- Temperament (easy/difficult/slow-to-warm) is early, biological, moderately stable; goodness of fit and child-to-parent effects make parenting correlations bidirectional
- Baumrind grid: demandingness x responsiveness — authoritative (high/high) best on average; authoritarian, permissive, neglectful each miss one or both
- Vygotsky vs Piaget: guided interaction, ZPD, scaffolding, private speech = Vygotsky; solo construction gated by stage readiness = Piaget — pick by the vignette's mechanism of gain`
    }
  ]
};
