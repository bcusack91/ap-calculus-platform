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
| **Phonemes** | Smallest sound units that distinguish meaning | /b/ vs /p/ in bat/pat (English has ~40) |
| **Morphemes** | Smallest MEANING-bearing units | "un-break-able" = 3 morphemes; the plural -s is one |
| **Semantics** | Meaning of words and sentences | Why "colorless green ideas" feels empty |
| **Syntax** | Rules ordering words into sentences | Grammatical but meaningless sentences prove syntax ≠ semantics |
| **Pragmatics** | Use in context — tone, implication, register | "Can you pass the salt?" is a request, not a question |

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

Global aphasia = both regions; reading/writing analogs are alexia/agraphia.`
    },
    {
      id: 'cog3-worked',
      type: 'text' as const,
      content: `### Worked Example — An Aphasia-Localization Passage, Fully Read

**Passage.** Three stroke patients are assessed. Patient 1 speaks in slow, strained fragments ("...son... visit... Tuesday"), follows three-step spoken commands correctly, and grows visibly frustrated. Patient 2 produces rapid, melodic sentences peppered with invented words ("the flibbers were altogether on the granting"), fails simple commands, and seems untroubled. Patient 3 converses almost normally and understands well, but cannot repeat the phrase "no ifs, ands, or buts" despite trying. A fourth finding: Patient 1's right arm is weak.

**Step 1 — build the two-axis grid.** Score each patient on fluency and comprehension before naming anything. P1: nonfluent + comprehension intact → Broca's (expressive) aphasia. P2: fluent + comprehension poor + neologisms + unawareness → Wernicke's (receptive) aphasia. P3: fluent + comprehends + isolated repetition failure → conduction aphasia (arcuate fasciculus).

**Step 2 — use the neuro anatomy cross-checks.** Broca's area sits in the left frontal lobe adjacent to the motor strip's arm/face region — P1's right-arm weakness is the confirming neighbor sign (left hemisphere controls the right body). Wernicke's area is far from motor cortex, so P2 predictably lacks weakness. The frustration/unawareness contrast follows from comprehension: P1 can hear his own errors; P2 cannot fully monitor hers.

**Step 3 — pre-empt the classic distractors.** "P2 has a thought disorder" — no: psychotic speech is disorganized at the IDEA level with intact grammar-word machinery, while Wernicke's speech is linguistically broken with neologisms and comprehension failure. "P3's problem is memory" — no: repetition of a just-heard phrase fails while conversation succeeds, isolating the perception-to-production relay, not storage.

**Step 4 — the acquisition tie-in.** If the passage adds a congenitally deaf adult who acquired sign at 20 and shows persistent nonnative sign syntax despite decades of use, that supports a critical period for GRAMMAR specifically — pair it with Chomsky, not with Skinner's reinforcement account.`
    },
    {
      id: 'cog3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Language Structure, Development & Aphasias** 🎯`,
      exercise: {
        questions: [
          {
            question: `A three-year-old who previously said "went" correctly begins saying "goed" and "runned." Developmental psycholinguists treat these NEW errors as important because they:`,
            options: [`Indicate a language delay requiring intervention`, `Show the child is imitating adult speech more closely`, `Reflect loss of previously reinforced forms`, `Demonstrate rule extraction — the child is overregularizing a grammatical pattern to forms no adult ever modeled, which imitation-based accounts cannot explain`],
            correctAnswer: 3,
            explanation: `No adult says "goed," so the form cannot be imitated; it appears precisely when the child induces the add -ed rule and overapplies it, temporarily displacing memorized irregulars. This U-shaped curve is normal development and the textbook evidence FOR internal rule learning and AGAINST Skinner's imitation-reinforcement account.`
          },
          {
            question: `A stroke patient speaks in rapid, grammatical-sounding streams filled with invented words, cannot follow simple spoken instructions, and appears unaware anything is wrong. The lesion is most likely in the:`,
            options: [`Left frontal lobe near the motor cortex`, `Left superior temporal lobe — Wernicke's area, producing fluent speech devoid of meaning with impaired comprehension`, `Arcuate fasciculus`, `Right occipital lobe`],
            correctAnswer: 1,
            explanation: `Fluent-but-empty output, neologisms, failed comprehension, and lack of insight compose Wernicke's (receptive) aphasia, localizing to left superior temporal cortex. Broca's lesions (left frontal) produce the opposite: effortful, telegraphic speech with preserved comprehension and marked frustration. Arcuate damage selectively spares both fluency and comprehension while breaking repetition.`
          },
          {
            question: `Deaf individuals who are first exposed to sign language in adulthood typically achieve large vocabularies but persistently nonnative grammar, whereas those exposed from infancy sign with native syntax. This pattern most strongly supports:`,
            options: [`A critical (sensitive) period for grammar acquisition, consistent with nativist theory`, `The behaviorist claim that reinforcement schedules were inadequate in adulthood`, `The strong Whorfian claim that language determines thought`, `The view that sign languages lack true syntax`],
            correctAnswer: 0,
            explanation: `Vocabulary (learnable at any age) dissociating from syntax (native only with early exposure) is the fingerprint of a maturationally limited window for grammar — Chomsky's nativist prediction, echoed in cases like Genie. Reinforcement is available to adult learners too, so behaviorism cannot explain the age effect; sign languages are fully syntactic natural languages.`
          },
          {
            question: `A 20-month-old says "more milk," "daddy go," and "want cookie," omitting articles and verb endings but preserving word order. This stage is called:`,
            options: [`Babbling`, `The holophrastic stage`, `Telegraphic speech — two-word, content-heavy utterances with correct order but missing function morphemes`, `Overregularization`],
            correctAnswer: 2,
            explanation: `Two-word combinations that keep syntactic ORDER while dropping grammatical function words (articles, inflections) define telegraphic speech, typical at 18-24 months. Babbling is prelinguistic sound play; holophrastic speech is the earlier one-word stage; overregularization comes later, once inflectional rules are being extracted.`
          },
          {
            question: `A patient converses fluently and follows complex instructions without difficulty, yet reliably fails when asked to repeat sentences verbatim. The most likely site of damage, and why, is the:`,
            options: [`Broca's area, because production is impaired`, `Hippocampus, because new memories cannot form`, `Wernicke's area, because input cannot be decoded`, `Arcuate fasciculus — the tract linking Wernicke's to Broca's area, so heard speech cannot be relayed directly to production despite intact comprehension and fluency`],
            correctAnswer: 3,
            explanation: `Selective repetition failure with fluent output and good comprehension is conduction aphasia: both cortical language centers work, but the arcuate fasciculus connecting them is cut, breaking the direct perception-to-production route. Broca's or Wernicke's lesions would impair fluency or comprehension respectively, and hippocampal damage impairs new episodic learning, not immediate repetition.`
          }
        ]
      }
    },
    {
      id: 'cog3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Ladder: phonemes (sound) → morphemes (meaning units) → semantics → syntax → pragmatics; grammatical nonsense proves syntax and semantics are separable
- Timeline: cooing → universal babbling that narrows by 10 months → one-word (12 mo) → telegraphic (18-24 mo) → overregularization (~3 yr, the anti-imitation evidence)
- Theories: Skinner (reinforcement — fails on overregularization and poverty of stimulus), Chomsky (LAD, universal grammar, critical period — Genie, late sign learners), interactionist synthesis; Whorf survives only in weak form
- Aphasia grid: score fluency and comprehension first — Broca's = nonfluent/comprehends/frustrated (frontal, watch for right-side weakness); Wernicke's = fluent nonsense/poor comprehension/unaware (temporal); conduction = only repetition broken (arcuate fasciculus)
- Left hemisphere dominates language in nearly all right-handers and most left-handers`
    }
  ]
};
