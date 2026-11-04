export const mcatPsychCogLangPart3Data = {
  topicSlug: 'mcat-psychology-behavior-cognition-language-mcat',
  sections: [
    {
      id: 'cog3-intro',
      type: 'text' as const,
      content: `# Cognition & Language

**Part 3 of 4 — Language: Structure, Acquisition & the Brain**

### The Structural Ladder (smallest to largest)

| Level | Unit | Example |
|-------|------|---------|
| **Phonemes** | Smallest sound units that distinguish meaning | /b/ vs /p/ in bat/pat |
| **Morphemes** | Smallest MEANING-bearing units | "un-break-able" = 3 morphemes; the plural -s is one |
| **Syntax** | Rules ordering words into sentences | Grammatical but meaningless sentences prove syntax ≠ semantics |
| **Semantics** | Meaning of words and sentences | Why "colorless green ideas" feels empty |
| **Pragmatics** | Use in context — tone, implication, register | "Can you pass the salt?" is a request, not a question |

<!-- yield:low -->
- English uses roughly 40 phonemes.
<!-- /yield -->

### The Acquisition Timeline (order is what gets tested)

1. **Cooing** (~2 months) — vowel sounds
2. **Babbling** (~4-6 months) — consonant-vowel strings; initially includes ALL phonemes, universal even in deaf infants (who babble manually if exposed to sign); by ~10 months it narrows to the native language's phonemes
3. **One-word (holophrastic) stage** (~12 months)
4. **Two-word / telegraphic speech** (~18-24 months) — content words in correct ORDER, function words dropped ("want juice")
5. **Overregularization** (~3 years): "goed," "foots" — errors that INCREASE temporarily as rules are extracted; the child could never have imitated these forms, so they are the classic evidence *against* pure imitation accounts

### Three Theories of Acquisition

- **Behaviorist (Skinner)**: language learned via imitation and reinforcement — cannot explain overregularization, the poverty of the stimulus, or the speed of acquisition
- **Nativist (Chomsky)**: an innate **language acquisition device** with universal grammar; supported by the **critical (sensitive) period** — late-rescued children (e.g., Genie) and late learners of a first sign language never reach native syntax, while vocabulary remains learnable
- **Interactionist**: biological readiness *plus* social interaction (child-directed speech, joint attention) — the modern synthesis

### Language & Thought

- **Whorf's linguistic relativity**: language influences thought. The strong version (language *determines* thought) is rejected; the **weak version** (language nudges attention, memory, and categorization — e.g., color-term boundaries speeding discrimination) has empirical support.

### Language in the Brain (lateralized, mostly left)

| Region | Damage syndrome | Speech | Comprehension | Repetition |
|--------|-----------------|--------|---------------|------------|
| **Broca's area** (left frontal, near motor cortex) | Broca's (expressive, nonfluent) aphasia | Effortful, telegraphic; often aware and frustrated | Largely intact | Impaired |
| **Wernicke's area** (left superior temporal) | Wernicke's (receptive, fluent) aphasia | Fluent but empty/nonsensical, neologisms | Poor; often unaware of deficit | Impaired |
| **Arcuate fasciculus** (connects the two) | Conduction aphasia | Fluent | Good | **Selectively impaired** |

Global aphasia = both regions. Left-dominant in nearly all right-handers, most left-handers.

<!-- yield:low -->
- The reading and writing analogs of aphasia are alexia and agraphia.
<!-- /yield -->`
    },
    {
      id: 'cog3-worked',
      type: 'text' as const,
      content: `### Worked Example — An Aphasia-Localization Passage, Fully Read

**Problem 1.** After strokes, Patient 1 speaks in slow, strained fragments ("...son... visit... Tuesday"), follows three-step commands, is frustrated, and has a weak right arm. Patient 2 speaks rapid, melodic sentences full of invented words ("the flibbers were on the granting"), fails simple commands, and seems untroubled.

- **(a)** Scored on fluency and comprehension, which aphasia does Patient 1 have?
- **(b)** And Patient 2?
- **(c)** Why does Patient 1 have a weak right arm when Patient 2 does not?
- **(d)** Why is one patient frustrated and the other untroubled?
- **(e)** Could Patient 2's speech instead be a psychotic thought disorder?

**(a) Broca's aphasia.** Score fluency and comprehension before naming anything. Nonfluent speech with intact comprehension is Broca's (expressive) aphasia.

**(b) Wernicke's aphasia.** Fluent speech, poor comprehension, neologisms and unawareness make Wernicke's (receptive) aphasia.

**(c) The neighbor sign.** Broca's area sits in the left frontal lobe beside the motor strip's face area, so a stroke there often spreads into the adjacent arm and face motor cortex; the left hemisphere controls the right body. Wernicke's area (left temporal) is far from motor cortex, so Patient 2 lacks weakness.

**(d) Comprehension decides insight.** The contrast follows from comprehension: Patient 1 can hear his own errors; Patient 2 cannot fully monitor hers.

**(e) No.** Psychotic speech is disorganized at the IDEA level, with intact grammar and word machinery. Wernicke's speech is linguistically broken, with neologisms and comprehension failure.

**Problem 2.** A third stroke patient converses almost normally and understands well, but cannot repeat the phrase "no ifs, ands, or buts" despite trying.

- **(a)** Scored on fluency and comprehension, which syndrome does this leave?
- **(b)** Which structure is damaged, and why does that break only repetition?
- **(c)** Could the failure be a memory problem instead?

**(a) Conduction aphasia.** Fluent speech and good comprehension rule out both Broca's and Wernicke's aphasia; an isolated repetition failure is conduction aphasia.

**(b) The arcuate fasciculus.** It connects Wernicke's area to Broca's area. With both centers working but the link cut, conversation still flows, while the direct route from a just-heard phrase to spoken output is broken.

**(c) No.** Repeating a just-heard phrase fails while conversation succeeds, which isolates the perception-to-production relay, not storage.

**Problem 3.** Adult immigrants who learned English after moving to the U.S. take a grammar-judgment test. Those who arrived as young children score like native speakers; scores fall steadily the later they arrived, yet every group has a large English vocabulary.

- **(a)** Which part of language shows the age effect, and which does not?
- **(b)** What does a decline with age of arrival suggest about how grammar is learned?
- **(c)** A critic says late arrivals simply had fewer years of English. How would you test that?
- **(d)** Why does a reinforcement account struggle with this pattern?

**(a) Syntax, not vocabulary.** Grammar judgments depend on age of arrival; vocabulary does not. It is the same split the critical period predicts for first languages.

**(b) A sensitive period for grammar.** Native-like syntax comes most easily from early exposure, and the window narrows with age: a maturational limit, as Chomsky's nativist account predicts.

**(c) Match on exposure.** Compare speakers with the same years in the country but different ages of arrival. If age of arrival still predicts scores, maturation, not amount of exposure, explains the gap.

**(d) Reinforcement is available at any age.** Late arrivals are corrected and rewarded for English too, so imitation and reinforcement cannot explain why their grammar stays nonnative.`
    },
    {
      id: 'cog3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Language Structure, Development & Aphasias** 🎯`,
      exercise: {
        questions: [
          {
            question: `A three-year-old who previously said "went" correctly begins saying "goed" and "runned." Developmental psycholinguists treat these NEW errors as important because they:`,
            options: [`Indicate a language delay requiring intervention`, `Show the child is imitating adult speech more closely`, `Reflect extinction of previously reinforced forms`, `Show the child is overapplying an extracted rule`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `No adult says "goed," so the form cannot be imitated; it appears precisely when the child induces the add -ed rule and overapplies it, temporarily displacing memorized irregulars. This U-shaped curve is normal development and the textbook evidence FOR internal rule learning and AGAINST Skinner's imitation-reinforcement account.`
          },
          {
            question: `A deaf woman who has used sign language since infancy has a stroke. She still signs fluently and her hands move normally, but her signed sentences are meaningless and she cannot understand others' signing. The lesion is most likely in the:`,
            options: [`Left inferior frontal lobe (Broca's area)`, `Left superior temporal lobe (Wernicke's area)`, `Arcuate fasciculus between language areas`, `Right occipital lobe (primary visual cortex)`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Score it as for speech: fluent but meaningless output with failed comprehension is Wernicke's (receptive) aphasia, and sign-language aphasias follow the same left-hemisphere map, so the lesion is in left superior temporal cortex. A Broca's (left frontal) lesion would leave comprehension intact but make signing slow and effortful. Arcuate damage spares both fluency and comprehension and breaks repetition. Although sign is seen rather than heard, primary visual cortex damage would cause a visual-field loss, not a language disorder.`
          },
          {
            question: `Deaf individuals who are first exposed to sign language in adulthood typically achieve large vocabularies but persistently nonnative grammar, whereas those exposed from infancy sign with native syntax. This pattern most strongly supports:`,
            options: [`A critical period for grammar, as nativists predict`, `The behaviorist view that adult reinforcement was lacking`, `The strong Whorfian view that language determines thought`, `The view that sign languages lack true syntax`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Vocabulary (learnable at any age) dissociating from syntax (native only with early exposure) is the fingerprint of a maturationally limited window for grammar — Chomsky's nativist prediction, echoed in cases like Genie. Reinforcement is available to adult learners too, so behaviorism cannot explain the age effect; linguistic determinism concerns language shaping thought, not when grammar can be acquired; and sign languages are fully syntactic natural languages.`
          },
          {
            question: `A 20-month-old says "more milk," "daddy go," and "want cookie," omitting articles and verb endings but preserving word order. This stage is called:`,
            options: [`The canonical babbling stage`, `The holophrastic (one-word) stage`, `The telegraphic stage`, `The overregularization stage`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Two-word combinations that keep syntactic ORDER while dropping grammatical function words (articles, inflections) define telegraphic speech, typical at 18-24 months. Babbling is prelinguistic sound play; holophrastic speech is the earlier one-word stage; overregularization comes later, once inflectional rules are being extracted.`
          },
          {
            question: `A stroke patient follows complex spoken instructions but fails when asked to repeat sentences verbatim. To decide between conduction aphasia and Broca's aphasia, which bedside task is MOST informative?`,
            options: [`Having the patient repeat a short sentence aloud`, `Recalling a list of words after a ten-minute delay`, `Following a three-step spoken command correctly`, `Describing a picture in spontaneous, connected speech`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Both syndromes impair repetition and leave comprehension largely intact; what separates them is fluency. Broca's speech is effortful and telegraphic, while conduction aphasia speech flows, so describing a picture in spontaneous speech shows the difference directly. Repeating another sentence would fail in both, and a spoken command would succeed in both, so neither discriminates. Delayed word-list recall tests memory, which defines neither aphasia.`
          }
        ]
      }
    },
    {
      id: 'cog3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **The structural ladder.** Phonemes: smallest meaning-distinguishing sounds; morphemes: smallest meaning units; then syntax, semantics, pragmatics.
- **Acquisition order.** Cooing, babbling (narrowing by ~10 mo), one word (~12 mo), telegraphic (18-24 mo), overregularization (~3 yr).
- **The critical period.** Late first-language learners gain vocabulary but never native syntax, supporting Chomsky's nativism.
- **The aphasia grid.** Broca's: nonfluent, comprehends; Wernicke's: fluent nonsense, poor comprehension; conduction: only repetition fails.

**Common traps**

- **Overregularization as delay.** "Goed" is normal rule extraction; no adult says it, so it is evidence against pure imitation.
- **Strong Whorf.** Language does not determine thought; only the weak version, language nudging attention and memory, holds.
- **Wernicke's as psychosis.** Wernicke's speech is linguistically broken; psychotic speech is disorganized at the level of ideas.
- **Conduction as memory loss.** Failing to repeat a just-heard phrase while conversing normally is a cut relay, not lost storage.

<!-- yield:low -->
**Low-yield extras**

- English has roughly 40 phonemes; alexia and agraphia are the reading and writing analogs of aphasia
<!-- /yield -->`
    }
  ]
};
