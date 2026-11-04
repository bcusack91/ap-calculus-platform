export const mcatPsychDevPart1Data = {
  topicSlug: 'mcat-psychology-behavior-development-mcat',
  sections: [
    {
      id: 'dev1-intro',
      type: 'text' as const,
      content: `# Development

**Part 1 of 4 — Piaget's Stages & the Growing Mind**

### The Starting Equipment: Reflexes & Milestones

Newborns arrive with diagnostic reflexes — **rooting** (turn toward cheek touch), **sucking**, **Moro** (startle-embrace), **grasping**, **Babinski** (toes fan to sole stroke; its persistence past ~2 years signals neurological problems). Motor milestones follow a **cephalocaudal** (head-down) and **proximodistal** (center-out) sequence: roll → sit (~6 mo) → crawl → stand → walk (~12 mo). Order is far more universal than exact timing.

### Piaget's Engine: Schemas, Assimilation, Accommodation

- **Schema**: an organized pattern of thought or action
- **Assimilation**: fit new information into an existing schema (calls a whale a "fish")
- **Accommodation**: modify the schema when the fit fails (creates a "mammals that swim" category)
- Development alternates between the two, driven by **equilibration** — discomfort when predictions fail

### The Four Stages (know the marquee ability and marquee failure of each)

| Stage (ages approx.) | Achievements | Signature limitation |
|----------------------|--------------|----------------------|
| **Sensorimotor** (0-2) | Circular reactions; **object permanence** (~8 mo begins; complete by ~18-24 mo); ends with symbolic/pretend thought | Out of sight = out of mind, early on |
| **Preoperational** (2-7) | Symbolic play, language explosion | **Egocentrism** (three-mountain task), **centration** → fails **conservation**; animism; irreversibility |
| **Concrete operational** (7-11) | **Conservation**, reversibility, class inclusion, seriation; mathematical operations on real objects | Cannot reason abstractly or hypothetically |
| **Formal operational** (11+) | Abstract, **hypothetico-deductive** reasoning (systematic isolation of variables — the pendulum task) | — (not universally attained for all content) |

**Conservation** is the star demonstration: water poured from a short wide glass into a tall thin one is judged "more" by the preoperational child, who **centers** on height and cannot mentally **reverse** the pouring.

### The Critiques (where modern items live)

- **Underestimation**: violation-of-expectation looking-time studies show infants register object permanence months before Piaget's manual-search criterion — search tasks demand motor planning the infant lacks, not just the concept
- **Continuity vs. stages**: abilities emerge gradually and unevenly across domains (conservation of number before volume), straining the idea of unified stage shifts

<!-- yield:low -->
- Piaget's own term for this within-stage unevenness is **horizontal decalage**.
<!-- /yield -->

- **Culture and schooling** shift stage timing, and formal operations depend heavily on domain experience
- Still, the SEQUENCE replicates broadly — the MCAT tests Piaget both as framework and as target of these critiques`
    },
    {
      id: 'dev1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Conservation-and-Critique Passage, Fully Read

**Problem 1.** 120 children (ages 4-9) see two equal rows of 6 counters, then one row spread out: "same or more?" Conserving number: age 4 — 8%; age 6 — 41%; age 8 — 87%. In Condition 2, a "naughty teddy" spreads the row "by accident"; at age 5, conservation answers nearly double.

- **(a)** Which Piagetian stage transition does the age trend track, and does it challenge Piaget?
- **(b)** Which two limitations make most 4-year-olds answer "more"?
- **(c)** In the standard procedure, what might the adult's deliberate spreading plus the repeated question signal?
- **(d)** What does the teddy result imply about what the standard task measures?

**(a) The transition.** The climb from 8% to 87% between ages 4 and 8 is the expected move from the preoperational stage (2-7) into concrete operations (7-11), when conservation is acquired. On the standard task that is pure Piaget; any challenge has to come from changing the procedure.

**(b) Why they fail.** Centration: the child fixes on the row's length and ignores that the counters are spaced farther apart. Irreversibility: the child cannot mentally push the counters back. Both fade as operations consolidate.

**(c) The hidden message.** A deliberate action followed by the same question again can SIGNAL that the answer is expected to change — a pragmatic, conversational demand layered on top of the conservation concept itself.

**(d) Competence masked.** When the change looks accidental, the child is less likely to infer that the adult wants a different answer, so the social-interpretive load drops. Some 5-year-olds have the concept, but performance factors hid it: the standard task confounds competence with task demands.

**Problem 2.** In Condition 3, 5-month-old infants watch a screen rotate through the space where a hidden block sits. They look far longer when the screen passes through the block's location than when it stops against it.

- **(a)** Why is longer looking treated as evidence of an expectation?
- **(b)** What do the infants appear to know, and how does that compare with Piaget's timeline?
- **(c)** Why would Piaget's manual-search task miss this knowledge?
- **(d)** Do Conditions 2 and 3 overturn Piaget's sequence of development?
- **(e)** A synthesis option reads: "Piaget was wrong that developmental stages exist." Is it supported?

**(a) Violation-of-expectation logic.** Infants look longer at what surprises them. Longer looking at the IMPOSSIBLE event (a screen passing through a hidden solid) means they detected an anomaly, so they held an expectation.

**(b) Early object permanence.** To be surprised, they must have represented the unseen block — object permanence in some form at 5 months, well before the 8-month search benchmark.

**(c) Task demands.** Reaching for a hidden object requires means-end motor planning the infant lacks. The search criterion tests that motor skill along with the concept, so it dates the concept too late.

**(d) The sequence stands.** No. The standard task replicates the expected age gradient (Problem 1), and neither manipulation reverses the order in which abilities appear. Both show competence hidden by task demands — conversational pragmatics in Condition 2, motor search in Condition 3 — so Piaget's age norms run late.

**(e) It overshoots.** No. The data revise Piaget's timing and methods; they say nothing against stages existing. The measured, both-things-true conclusion is the MCAT's favorite correct answer; extreme options overshoot the data.`
    },
    {
      id: 'dev1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Piagetian Development** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two identical clay balls are shown to a 5-year-old, who agrees they are the same. One is rolled into a sausage shape, and she now insists the sausage has "more clay because it is longer." Her error reflects:`,
            options: [`Failure of object permanence, a sensorimotor skill still emerging at her age`, `Centration on one dimension and failure of mental reversibility`, `Hypothetico-deductive reasoning misapplied to the change in shape`, `A lingering deficit in primitive reflexes such as rooting and Moro`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `She centers on length while ignoring the compensating decrease in width, and cannot mentally run the transformation backward — the two defining preoperational failures behind non-conservation. Object permanence was mastered years earlier in the sensorimotor stage, and hypothetico-deductive reasoning is the formal-operational ACHIEVEMENT, not an error.`
          },
          {
            question: `A 6-month-old delightedly plays with a rattle but makes no attempt to search when a cloth is draped over it, acting as though it ceased to exist. Piaget would say the infant has not yet developed:`,
            options: [`Object permanence`, `Conservation of mass`, `Egocentrism`, `Telegraphic speech`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Abandoning a desired object the moment it is hidden is Piaget's classic index that the infant does not yet represent unseen objects — object permanence, the central sensorimotor acquisition (though looking-time studies date the underlying concept earlier). Conservation belongs to the concrete-operational transition, and egocentrism is a limitation the child HAS, not lacks.`
          },
          {
            question: `A toddler who knows dogs calls the neighbor's cat "doggie." A week later, after corrections, he uses a new word, "kitty," for cats while keeping "doggie" for dogs. In Piaget's terms, the first behavior and the subsequent change are, respectively:`,
            options: [`Accommodation, then assimilation`, `Equilibration, then centration`, `Object permanence, then conservation`, `Assimilation, then accommodation`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Forcing the novel animal into the existing dog schema is assimilation; restructuring into separate dog and cat schemas after predictive failure is accommodation. The discomfort driving the change is equilibration, but the two behaviors themselves are the assimilation-accommodation pair — order matters, and the reversed option is the standard trap.`
          },
          {
            question: `Asked to determine what controls a pendulum's swing rate, a 14-year-old holds string length constant while varying weight, then holds weight constant while varying length, correctly isolating length. A 9-year-old varies both haphazardly. The teenager's approach marks which acquisition?`,
            options: [`Concrete operational reasoning about real objects`, `Conservation of number, mass, and volume`, `Formal operational hypothetico-deductive reasoning`, `Completion of the late sensorimotor substages`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Generating hypotheses and testing them by controlling variables — abstract, systematic, ahead of the data — is Piaget's formal-operational signature, assessed with exactly this pendulum task. The concrete-operational child can operate on real objects (hence conservation) but cannot organize a systematic abstract search of possibilities.`
          },
          {
            question: `Five-month-olds see a hand place a second doll behind a screen beside a first one; when the screen drops, they look longer at one doll than at two. When a hand instead removes one of two dolls, they look longer at two. Researchers cite this against Piaget primarily because it suggests that:`,
            options: [`Infants simply prefer looking at the smaller of two displays`, `Infants of this age already conserve number across transformations`, `The impossible display startled the infants and broke attention`, `Number expectations emerge earlier than Piaget's own tasks indicate`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Longer looking at whichever outcome is arithmetically impossible implies the infants expected one plus one to make two, and two minus one to make one — a rudimentary number expectation years before Piaget's tasks credit any number concept. The removal condition rules out a simple preference for the smaller display, since there the infants looked longer at the larger one. Like the hidden-object studies, the finding revises Piaget's timeline and methods; it does not show that infants conserve number across transformations, and longer looking at only the impossible outcome is the opposite of broken attention.`
          }
        ]
      }
    },
    {
      id: 'dev1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Reflexes and milestones.** Rooting, Moro, grasping, Babinski at birth; milestones run head-down and center-out, order near-fixed, timing variable.
- **Assimilate or accommodate.** Assimilation fits input to a schema, accommodation rebuilds it; equilibration drives the switch.
- **Stage anchors.** Sensorimotor: object permanence; preoperational: egocentrism; concrete: conservation; formal: abstract logic.
- **Critiques revise timing.** Looking-time studies show competence earlier and abilities arrive unevenly; the sequence replicates.

**Common traps**

- **Reversing the pair.** Forcing a cat into the "doggie" schema is assimilation; building a new "kitty" schema is accommodation.
- **Misreading non-conservation.** It is centration plus irreversibility in the preoperational child, not an object-permanence failure.
- **Failed search, no concept.** A missed manual search can reflect motor-planning demands rather than a missing concept.
- **Overshooting the critiques.** The critiques move Piaget's age norms earlier; they do not show that stages or the sequence are false.

<!-- yield:low -->
**Low-yield extras**

- Piaget called within-stage unevenness across domains (number conserved before volume) horizontal decalage
<!-- /yield -->`
    }
  ]
};
