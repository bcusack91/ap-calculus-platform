export const asvabWkSynonymStrategiesPart2Data = {
  topicSlug: 'asvab-wk-synonym-strategies',
  sections: [
    {
      id: 'wkss-p2-intro',
      type: 'text' as const,
      content: `# 🔤 Synonyms, Connotation and Test Strategy

**Part 2 of 7 — Precise Meaning and Part of Speech**

### Closest, Not Just Related

Wrong choices on Word Knowledge are rarely random. Test writers like to include a choice that is **related** to the test word, something that often shows up near it, without meaning the same thing.

| Test word | Synonym (correct) | Related but wrong |
|:---|:---|:---|
| **diminish** | reduce | smaller (a describing word, not an action) |
| **punctual** | on time | early (close, but punctual means exactly on time) |
| **remedy** | cure | medicine (a remedy can be many things, not only medicine) |

Ask yourself: **could I swap the choice in for the test word in most sentences and keep the meaning?** A real synonym survives the swap. A related word does not.

### Match the Part of Speech and the Form

A synonym must be the **same part of speech** as the test word, and usually the same **form**:

| If the test word is… | The answer must be… | Example |
|:---|:---|:---|
| a noun (a thing or idea) | a noun | dread → fear |
| a verb (an action) | a verb | assist → help |
| an adjective (a description) | an adjective | rapid → quick |
| a past-tense verb (-ed) | a past-tense verb | diminished → reduced |
| an -ing word | an -ing word | hastening → hurrying |

> **Key Fact:** If you can tell a choice is the wrong part of speech, cross it off, even if it sounds close in meaning. "Diminish" can never mean "smaller," because one is an action and the other is a description.`
    },
    {
      id: 'wkss-p2-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: diminish

**Diminish** most nearly means: *smaller · reduce · tiny · shrinkage*

- Diminish is a verb: things diminish, or you diminish them.
- *Smaller* and *tiny* are describing words; *shrinkage* is a noun.
- **Reduce** is the only verb, and it means the same thing.

### Example 2: punctual

**Punctual** most nearly means: *early · on time · polite · busy*

- Punctual describes someone who arrives **exactly** when expected.
- *Early* is related, but early is not the same as on time; an early arrival is not punctual either.
- **On time** is the closest.

### Example 3: remedy

**Remedy** most nearly means: *medicine · cure · illness · doctor*

- A remedy fixes a problem: a remedy for a cold, a remedy for a bad situation.
- *Medicine* is one kind of remedy, but the word is broader.
- *Illness* is what the remedy treats, and *doctor* is who gives it.
- **Cure** covers every use, so it is the closest.

### A Precision Check

When two choices both seem right, ask which one would still work in **every** sentence where the test word appears. That is usually the answer.`
    },
    {
      id: 'wkss-p2-mc',
      type: 'multiple-choice' as const,
      content: '**Choose the precise synonym.** 🎯',
      exercise: {
        questions: [
          {
            question: '**Abate** most nearly means',
            options: ['storm', 'wait', 'continue', 'lessen'],
            correctAnswer: 3,
            explanation: 'Abate means to become less intense: the wind abated after midnight. Storm is related (storms abate), but it is not what the word means, and continue is the opposite.'
          },
          {
            question: '**Refute** most nearly means',
            options: ['question', 'repeat', 'refuse', 'disprove'],
            correctAnswer: 3,
            explanation: 'To refute a claim is to prove it wrong. Question is related, but you can question a claim without proving it wrong. Refuse is a look-alike.'
          },
          {
            question: '**Potent** most nearly means',
            options: ['possible', 'bitter', 'poisonous', 'powerful'],
            correctAnswer: 3,
            explanation: 'Potent means powerful or strong: a potent medicine, a potent argument. Poisonous is related (some poisons are potent) but too narrow, and possible is a look-alike.'
          },
          {
            question: '**Trivial** most nearly means',
            options: ['secret', 'boring', 'unimportant', 'difficult'],
            correctAnswer: 2,
            explanation: 'Trivial means of little importance: a trivial mistake. Boring is related (trivial things can be dull) but is not the meaning.'
          },
          {
            question: '**Superficial** most nearly means',
            options: ['superior', 'shallow', 'artificial', 'enormous'],
            correctAnswer: 1,
            explanation: 'Superficial means on the surface only, not deep: a superficial cut, a superficial understanding. Shallow matches. Superior is a look-alike from the same "super-" start.'
          }
        ]
      }
    },
    {
      id: 'wkss-p2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the part of speech.** 🔽 Each test word is followed by its part of speech.',
      exercise: {
        dropdowns: [
          {
            label: '**zeal** (noun) most nearly means:',
            options: ['enthusiasm', 'eagerly', 'excite', 'eager'],
            correctAnswer: 0
          },
          {
            label: '**mimic** (verb) most nearly means:',
            options: ['imitation', 'imitate', 'similar', 'copycat'],
            correctAnswer: 1
          },
          {
            label: '**mimicked** (past tense) most nearly means:',
            options: ['imitated', 'imitator', 'imitates', 'imitating'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['enthusiasm', 'imitate', 'imitated'],
        hint1: 'Zeal is a thing you have. Which choice is a thing (a noun)?',
        hint2: 'Mimic is something you do. Which choice is an action?',
        hint3: 'Mimicked ends in -ed. Which choice also does?',
        explanation: 'Zeal (great energy for a cause) is a noun, so its synonym must be the noun enthusiasm; eager is an adjective, eagerly an adverb and excite a verb. Mimic is a verb, so imitate, not imitation (noun) or similar (adjective). Mimicked is past tense, so imitated is the only matching form.'
      }
    },
    {
      id: 'wkss-p2-input',
      type: 'input-boxes' as const,
      content: `**Sort by part of speech.** ✍️

The test word is **turmoil**, a noun meaning a state of great confusion and disorder.

Choices someone might offer: *chaos · peace · noisy · disorder · angrily*

**1)** How many of the five choices are nouns?

**2)** How many of the nouns mean the same as turmoil?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '2'],
        hint1: 'Noisy is an adjective and angrily is an adverb.',
        hint2: 'Peace is a noun, but does it mean confusion and disorder?',
        hint3: 'Chaos and disorder both describe confusion.',
        explanation: 'Chaos, peace and disorder are nouns (3). Noisy (adjective) and angrily (adverb) can be crossed off at once. Of the nouns, chaos and disorder mean the same as turmoil (2); peace is its opposite.'
      }
    },
    {
      id: 'wkss-p2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- A synonym must **survive the swap**: replace the test word with it and the meaning stays
- Watch for **related-but-wrong** choices: things that appear near the word without meaning it
- Match the **part of speech** and **form** (noun → noun, -ed → -ed)
- When two choices seem right, pick the one that works in **every** sentence

> **Up Next:** Part 3 — connotation, the positive or negative feeling a word carries.`
    }
  ]
};
