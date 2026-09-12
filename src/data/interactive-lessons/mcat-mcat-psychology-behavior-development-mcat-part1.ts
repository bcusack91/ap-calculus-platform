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
- **Continuity vs. stages**: abilities emerge gradually and unevenly across domains (**decalage** — conservation of number before volume), straining the idea of unified stage shifts
- **Culture and schooling** shift stage timing, and formal operations depend heavily on domain experience
- Still, the SEQUENCE replicates broadly — the MCAT tests Piaget both as framework and as target of these critiques`
    },
    {
      id: 'dev1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Conservation-and-Critique Passage, Fully Read

**Passage.** Researchers test 120 children (ages 4-9) on conservation of liquid. Standard procedure: equal beakers, pour one into a tall cylinder, ask "same or more?" Percent conserving: age 4 — 8%; age 6 — 41%; age 8 — 87%. In Condition 2, a "naughty teddy" appears to knock the liquid over accidentally into the cylinder before the question is asked; conservation answers at age 5 nearly double relative to the standard procedure. In Condition 3, infants aged 5 months watch a screen rotate through the space where a hidden block sits; they look far longer when the screen passes through the block's location than when it stops against it.

**Step 1 — read the developmental gradient.** The age trend in the standard task is the expected preoperational-to-concrete transition: centration and irreversibility fade as operations consolidate. So far, pure Piaget.

**Step 2 — interpret the naughty-teddy result.** When the transformation looks accidental, the child is less likely to infer that the adult's deliberate action plus repeated question SIGNALS that the answer should change (a pragmatic, conversational demand). Improved performance under incidental transformation suggests the standard task overestimates conceptual failure by adding social-interpretive load — competence was masked by performance factors.

**Step 3 — interpret the looking-time result.** Five-month-olds look longer at the IMPOSSIBLE event (screen passing through a hidden solid), implying they represented the unseen block — object permanence knowledge well before the 8-month search benchmark. Violation-of-expectation logic: longer looking = detected anomaly = the infant held an expectation.

**Step 4 — the synthesis item.** "Which conclusion do Conditions 2 and 3 jointly support?" Piaget's SEQUENCE stands, but his METHODS conflated competence with task demands (motor search, conversational pragmatics), so his age norms run late. That measured, both-things-true conclusion is the MCAT's favorite correct answer; extreme options ("Piaget was wrong about stages existing") overshoot the data.`
    },
    {
      id: 'dev1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Piagetian Development** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two identical clay balls are shown to a 5-year-old, who agrees they are the same. One is rolled into a sausage shape, and she now insists the sausage has "more clay because it is longer." Her error reflects:`,
            options: [`Failure of object permanence`, `Centration on a single dimension and inability to mentally reverse the transformation — hallmarks of preoperational thought`, `Hypothetico-deductive reasoning`, `A deficit in the rooting reflex`],
            correctAnswer: 1,
            explanation: `She centers on length while ignoring the compensating decrease in width, and cannot mentally run the transformation backward — the two defining preoperational failures behind non-conservation. Object permanence was mastered years earlier in the sensorimotor stage, and hypothetico-deductive reasoning is the formal-operational ACHIEVEMENT, not an error.`
          },
          {
            question: `A 6-month-old delightedly plays with a rattle but makes no attempt to search when a cloth is draped over it, acting as though it ceased to exist. Piaget would say the infant has not yet developed:`,
            options: [`Object permanence — the understanding that objects continue to exist when out of view`, `Conservation of mass`, `Egocentrism`, `Telegraphic speech`],
            correctAnswer: 0,
            explanation: `Abandoning a desired object the moment it is hidden is Piaget's classic index that the infant does not yet represent unseen objects — object permanence, the central sensorimotor acquisition (though looking-time studies date the underlying concept earlier). Conservation belongs to the concrete-operational transition, and egocentrism is a limitation the child HAS, not lacks.`
          },
          {
            question: `A toddler who knows dogs calls the neighbor's cat "doggie." A week later, after corrections, he uses a new word, "kitty," for cats while keeping "doggie" for dogs. In Piaget's terms, the first behavior and the subsequent change are, respectively:`,
            options: [`Accommodation, then assimilation`, `Equilibration, then centration`, `Object permanence, then conservation`, `Assimilation of the cat into the dog schema, then accommodation — creating a modified schema when the old one failed`],
            correctAnswer: 3,
            explanation: `Forcing the novel animal into the existing dog schema is assimilation; restructuring into separate dog and cat schemas after predictive failure is accommodation. The discomfort driving the change is equilibration, but the two behaviors themselves are the assimilation-accommodation pair — order matters, and the reversed option is the standard trap.`
          },
          {
            question: `Asked to determine what controls a pendulum's swing rate, a 14-year-old holds string length constant while varying weight, then holds weight constant while varying length, correctly isolating length. A 9-year-old varies both haphazardly. The teenager's approach marks which acquisition?`,
            options: [`Concrete operations`, `Conservation of number`, `Formal operational, hypothetico-deductive reasoning — systematically manipulating one variable at a time to test hypotheses`, `The end of the sensorimotor stage`],
            correctAnswer: 2,
            explanation: `Generating hypotheses and testing them by controlling variables — abstract, systematic, ahead of the data — is Piaget's formal-operational signature, assessed with exactly this pendulum task. The concrete-operational child can operate on real objects (hence conservation) but cannot organize a systematic abstract search of possibilities.`
          },
          {
            question: `Five-month-olds look reliably longer when a rising drawbridge appears to rotate through the space occupied by a hidden box than when it stops at the box. Researchers cite this against Piaget primarily because it suggests that:`,
            options: [`Infants prefer motion to stillness`, `Infants of this age already reason hypothetico-deductively`, `The drawbridge display damaged the infants' expectations`, `Object permanence is present months earlier than manual-search tasks indicate — Piaget's method confounded the concept with motor search ability`],
            correctAnswer: 3,
            explanation: `Longer looking at the impossible event implies the infants represented the hidden box and registered a violation — object permanence in some form by 5 months. Piaget's reach-for-the-hidden-object criterion also demands means-end motor planning, so it dates the CONCEPT too late. The finding revises his timeline and method, not the existence of developmental change, and says nothing about formal reasoning.`
          }
        ]
      }
    },
    {
      id: 'dev1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Newborn kit: rooting, Moro, grasping, Babinski reflexes; milestones run cephalocaudal and proximodistal with universal order, variable timing
- Engine: assimilation fits input to a schema, accommodation rebuilds the schema, equilibration drives the alternation
- Stage anchors: sensorimotor = object permanence; preoperational = egocentrism, centration, failed conservation; concrete = conservation and reversibility on real objects; formal = abstract hypothetico-deductive reasoning (pendulum task)
- Conservation failure = centration + irreversibility; the pour never changes amount
- Critiques: looking-time studies push competence earlier (methods confound concept with motor/pragmatic demands); development is more continuous and domain-uneven (decalage) than strict stages — but the sequence itself replicates`
    }
  ]
};
