export const asvabWkSynonymStrategiesPart4Data = {
  topicSlug: 'asvab-wk-synonym-strategies',
  sections: [
    {
      id: 'wkss-p4-intro',
      type: 'text' as const,
      content: `# 🔤 Synonyms, Connotation and Test Strategy

**Part 4 of 7 — Look-Alike Words and Opposite Traps**

### Why Fast Readers Miss Easy Words

With about 36 seconds per question, it is easy to glance at a word and see the word it **looks like**. Test writers know this. A choice that fits the look-alike is a common trap.

| Word | Meaning | Look-alike | Its meaning |
|:---|:---|:---|:---|
| **eminent** | famous, respected | **imminent** | about to happen |
| **discreet** | careful not to reveal things | **discrete** | separate, distinct |
| **flaunt** | show off | **flout** | openly disobey a rule |
| **explicit** | stated clearly | **implicit** | suggested, not stated |
| **complement** | complete, go well with | **compliment** | praise |
| **allude** | refer to indirectly | **elude** | escape |
| **perpetrate** | commit (a crime) | **perpetuate** | keep going |
| **morale** | spirit, confidence of a group | **moral** | about right and wrong |
| **adapt** | adjust | **adopt** | take as your own |
| **accept** | receive, agree to | **except** | leave out, but |
| **averse** | opposed, unwilling | **adverse** | harmful, unfavorable |
| **elicit** | draw out | **illicit** | illegal |
| **prosecute** | take to court | **persecute** | treat cruelly |
| **loath** | unwilling | **loathe** | hate |

### The Opposite Trap

The other classic trap is the **antonym**. When you half-know a word, you may remember that it belongs with a certain idea but forget which side. "Abhor" goes with love and hate, but which one? (Hate.) Slow down for one second and confirm the **direction**.

> **Key Fact:** Read the test word **letter by letter** before you look at the choices. Most look-alike mistakes happen in the first half-second.`
    },
    {
      id: 'wkss-p4-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: eminent vs. imminent

**Eminent** most nearly means: *respected · upcoming · dangerous · foreign*

- *Upcoming* is the meaning of **imminent** ("an imminent storm"), the look-alike.
- **Eminent** means distinguished and respected: an eminent surgeon.
- **Answer:** respected.

### Example 2: discreet vs. discrete

**Discreet** most nearly means: *separate · tactful · loud · honest*

- *Separate* is the meaning of **discrete** (discrete steps).
- **Discreet** means careful about what you say, keeping private things private.
- **Answer:** tactful.

### Example 3: flaunt vs. flout

**Flout** most nearly means: *defy · display · obey · forget*

- *Display* (show off) is the meaning of **flaunt**.
- **Flout** means to openly ignore a rule: drivers who flout the speed limit.
- *Obey* is the opposite trap.
- **Answer:** defy.

### Memory Hooks

- **I**mminent is **i**n a moment; **e**minent is **e**xcellent.
- Compl**e**ment **e**ntire, compl**i**ment **I** like it.
- Fl**ou**t a rule = go **ou**t of bounds; fl**au**nt = show **a**ll you have.`
    },
    {
      id: 'wkss-p4-mc',
      type: 'multiple-choice' as const,
      content: '**Don\'t let the look-alike fool you.** 🎯',
      exercise: {
        questions: [
          {
            question: `The orders were **explicit**: no one leaves the base without a signed pass.\n\n**Explicit** most nearly means`,
            options: ['kept secret', 'left optional', 'merely hinted', 'clearly stated'],
            correctAnswer: 3,
            explanation: 'Explicit means stated clearly and directly, as the colon\'s rule shows. "Merely hinted" is the meaning of the look-alike implicit.'
          },
          {
            question: `The new radios **complement** the older equipment, filling the gaps it left.\n\n**Complement** most nearly means`,
            options: ['damage', 'praise', 'complete', 'overshadow'],
            correctAnswer: 2,
            explanation: 'To complement is to complete or go well with something, as the radios fill the gaps. Praise is the meaning of the look-alike compliment.'
          },
          {
            question: `In his speech, the general **alluded** to the battle without ever naming it.\n\n**Alluded** most nearly means`,
            options: ['objected', 'apologized', 'escaped', 'hinted'],
            correctAnswer: 3,
            explanation: 'To allude is to refer to something indirectly, "without ever naming it." Escaped is the meaning of the look-alike elude.'
          },
          {
            question: `After weeks of bad news and cold rations, the unit's **morale** was low.\n\n**Morale** most nearly means`,
            options: ['spirit', 'supplies', 'numbers', 'ethics'],
            correctAnswer: 0,
            explanation: 'Morale is a group\'s spirit and confidence, which bad news and cold food wear down. Ethics is the meaning of the look-alike moral.'
          },
          {
            question: '**Averse** most nearly means',
            options: ['eager', 'unaware', 'harmful', 'opposed'],
            correctAnswer: 3,
            explanation: 'Averse means opposed or unwilling: averse to risk. Harmful is the meaning of the look-alike adverse, and eager is the opposite.'
          }
        ]
      }
    },
    {
      id: 'wkss-p4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pick the right word for each sentence.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The new recruit had to quickly ___ to the 0500 wake-up time.',
            options: ['adopt', 'adept', 'adapt'],
            correctAnswer: 2
          },
          {
            label: 'The detective tried to ___ a confession from the suspect.',
            options: ['illicit', 'elicit', 'explicit'],
            correctAnswer: 1
          },
          {
            label: 'The district attorney plans to ___ the case next month.',
            options: ['prosecute', 'protect', 'persecute'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['adapt', 'elicit', 'prosecute'],
        hint1: 'Adapt = adjust; adopt = take as your own.',
        hint2: 'Elicit = draw out; illicit = illegal.',
        hint3: 'Prosecute = take to court; persecute = treat cruelly.',
        explanation: 'You adapt (adjust) to a new schedule; you adopt a child or a plan, and adept means skilled. A detective tries to elicit (draw out) a confession; illicit means illegal, and explicit (clearly stated) is a describing word that cannot take an object. A district attorney prosecutes (takes to court) a case; persecute means to treat someone cruelly.'
      }
    },
    {
      id: 'wkss-p4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Look-alike pairs to know: **eminent/imminent, discreet/discrete, flaunt/flout, explicit/implicit, complement/compliment, allude/elude, perpetrate/perpetuate, morale/moral, adapt/adopt, accept/except, averse/adverse, elicit/illicit, prosecute/persecute, loath/loathe**
- Read the test word **letter by letter** before looking at the choices
- The **antonym** is a planted trap: confirm the direction before you click

> **Up Next:** Part 5 — learning words in families, the fastest way to grow your vocabulary.`
    }
  ]
};
