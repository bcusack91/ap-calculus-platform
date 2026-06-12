export const mcatPsychBehavPart4Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb4-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 4 of 7 — Cognition & Consciousness**

### Cognitive Development (Piaget)

| Stage | Age | Key Feature |
|-------|-----|-------------|
| Sensorimotor | 0-2 | Object permanence |
| Preoperational | 2-7 | Egocentrism, lack of conservation |
| Concrete operational | 7-11 | Conservation, logical thinking (concrete) |
| Formal operational | 12+ | Abstract/hypothetical reasoning |

### Language Development

| Stage | Age | Example |
|-------|-----|---------|
| Babbling | 6-9 months | "ba-ba-ba" |
| One-word (holophrastic) | 12 months | "mama" |
| Two-word (telegraphic) | 18-24 months | "want cookie" |
| Grammar explosion | 2-5 years | Complex sentences |

### Consciousness & Sleep

**Sleep Stages**:

| Stage | Features | Brain Waves |
|-------|----------|-------------|
| NREM 1 | Light sleep, hypnagogic hallucinations | Theta |
| NREM 2 | Sleep spindles, K-complexes | Theta |
| NREM 3 | Deep/slow-wave sleep, hard to wake | Delta |
| REM | Dreams, muscle atonia, rapid eye movement | Beta (like awake!) |

### Problem Solving

- **Algorithm**: Step-by-step guaranteed solution
- **Heuristic**: Mental shortcut (faster but error-prone)
- **Confirmation bias**: Seeking evidence that confirms existing beliefs
- **Functional fixedness**: Can't see new uses for familiar objects

### Piaget — Assimilation vs. Accommodation (High Yield)

Piaget argued that children build **schemas** (mental frameworks) and update them by two complementary processes:

| Process | Definition | Example |
|---------|-----------|---------|
| **Assimilation** | Fitting NEW information into an EXISTING schema | A child who knows "dog" calls a cat a "dog" |
| **Accommodation** | MODIFYING the schema to fit new information | The child creates a new "cat" schema |
| **Equilibration** | The drive to balance assimilation and accommodation that propels stage transitions | Resolving the dog/cat conflict |

**Trap:** Assimilation does NOT change the schema; accommodation does. Vygotsky offers a contrasting **sociocultural** view — the **zone of proximal development (ZPD)** and **scaffolding** emphasize that cognition is built through guided social interaction, not solitary stage-by-stage maturation.

### Heuristics & Biases (Tversky & Kahneman)

| Heuristic / Bias | Description | Classic finding |
|------------------|-------------|-----------------|
| **Availability heuristic** | Judge frequency by how easily examples come to mind | People overestimate plane-crash deaths after media coverage |
| **Representativeness heuristic** | Judge probability by similarity to a prototype | The "Linda problem" — conjunction fallacy (bank teller + feminist judged more likely than bank teller) |
| **Anchoring** | Over-rely on the first piece of information | Estimates pulled toward an arbitrary starting number |
| **Belief perseverance** | Clinging to beliefs after they are discredited | Distinct from confirmation bias (which is about evidence search) |

### Consciousness-Altering Substances & Theories of Dreaming

- **Depressants** (alcohol, benzodiazepines, barbiturates): enhance GABA, reduce arousal.
- **Stimulants** (cocaine, amphetamines, caffeine): increase dopamine/norepinephrine activity.
- **Activation-synthesis hypothesis** (Hobson & McCarley): dreams are the cortex's attempt to make sense of random pontine (brainstem) signals during REM — contrast with Freud's wish-fulfillment view. The **continual-activation / information-processing** model holds that REM consolidates memories.`
    },
    {
      id: 'pb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cognition** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 4-year-old child watches liquid poured from a short wide glass into a tall narrow glass and says there is now "more." This demonstrates:`,
            options: ["Lack of conservation — a hallmark of Piaget's preoperational stage", "Object permanence failure", "Concrete operational thinking", "Formal operational thinking"],
            correctAnswer: 0,
            explanation: `Preoperational children (ages 2-7) lack conservation — they can't understand that quantity stays the same when appearance changes. They focus on ONE dimension (height) and ignore another (width — this perceptual tunnel vision is called *centration*). Object permanence (knowing a hidden object still exists) is mastered earlier, in the sensorimotor stage, so it is not the answer here.`
          },
          {
            question: `A toddler who has a "bird" schema (small flying animal) sees a butterfly for the first time and excitedly points and shouts "bird!" The child has NOT yet revised the schema to include insects. According to Piaget, this is an example of:`,
            options: [`Assimilation`, `Accommodation`, `Equilibration`, `Object permanence`],
            correctAnswer: 0,
            explanation: `**Assimilation** means forcing new information into an EXISTING schema without changing it — the butterfly is jammed into the "bird" category. The trap answer is **accommodation**, which is the OPPOSITE: it would require the child to MODIFY the schema (create a new "insect" category). Because the schema was unchanged here, the process is assimilation. Equilibration is the broader drive to balance the two.`
          },
          {
            question: `Researchers ask participants which causes more deaths in the U.S. each year: tornadoes or asthma. Most say tornadoes, even though asthma kills far more people. Tornadoes are simply more memorable and heavily covered by media. This error is best explained by the:`,
            options: [`Availability heuristic`, `Representativeness heuristic`, `Anchoring bias`, `Confirmation bias`],
            correctAnswer: 0,
            explanation: `The **availability heuristic** estimates frequency by how EASILY instances come to mind; vivid, media-covered tornadoes are more cognitively "available," inflating their perceived frequency. The trap is the **representativeness heuristic**, which judges probability by resemblance to a prototype (as in the Linda conjunction problem) — that is not what is happening here, since the judgment is about retrieval ease, not similarity to a stereotype.`
          }
        ]
      }
    },
    {
      id: 'pb4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Cognition & Consciousness

<details>
<summary><b>Example 1: Apply a Piagetian stage to a behavior</b></summary>

**Question:** A 9-year-old can correctly reason that if all the water in two identical glasses is equal, pouring one into a taller glass does not change the amount. However, the child struggles to reason about a purely hypothetical scenario ("If you could be invisible, what would you do?") in abstract terms. Which stage is the child in?

**Solution:**
1. Mastery of **conservation** rules out preoperational; the child has the logical operations of the **concrete operational** stage (ages 7–11). ✓
2. Difficulty with purely **abstract/hypothetical** reasoning rules out formal operational (12+), which is exactly where such reasoning emerges.
3. Conclusion: **concrete operational.** The child reasons logically about concrete, present objects but not yet about abstractions.

**Key idea:** Conservation = concrete operational; abstract/hypothetical reasoning = formal operational. The presence of one and absence of the other pins the stage.
</details>

<details>
<summary><b>Example 2: Identify the sleep stage from EEG data</b></summary>

**Question:** A sleep-lab EEG shows low-amplitude, high-frequency activity resembling the awake state, the EMG shows near-complete loss of skeletal muscle tone, and the participant's eyes are darting under closed lids. When woken, they report a vivid narrative dream. What stage is this?

**Solution:**
1. EEG "like awake" (beta-like, desynchronized) + **muscle atonia** + **rapid eye movements** + vivid dreaming = **REM sleep** ("paradoxical sleep"). ✓
2. Contrast: NREM 2 would show sleep spindles and K-complexes; NREM 3 would show high-amplitude **delta** waves and is the hardest stage to wake from.

**MCAT lesson:** REM is "paradoxical" because the brain looks awake while the body is paralyzed — the atonia prevents acting out dreams.
</details>

<details>
<summary><b>Example 3: Classify a reasoning error</b></summary>

**Question:** An investor refuses to sell a failing stock and instead seeks out only news articles predicting the stock will rebound, ignoring analyst downgrades. Classify the dominant cognitive bias and contrast it with a related one.

**Solution:**
1. Selectively SEEKING evidence that supports a pre-existing belief = **confirmation bias.** ✓
2. Contrast with **belief perseverance** — that would describe clinging to the belief even AFTER the supporting evidence is directly refuted. Here the investor is actively filtering incoming information, so confirmation bias is the better fit.

**Connection:** Both protect existing beliefs, but confirmation bias is about biased *search/interpretation* of evidence, whereas belief perseverance is about *resistance to disconfirmation*.
</details>`
    },
    {
      id: 'pb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Piaget: sensorimotor → preoperational → concrete → formal operational
- REM sleep: dreams, muscle atonia, beta waves (paradoxical sleep)
- NREM 3 (slow-wave): deep restorative sleep, delta waves
- Heuristics: fast but error-prone. Confirmation bias: seeking confirming evidence.`
    }
  ]
};
