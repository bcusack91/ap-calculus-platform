export const asvabWkWordPartsPart2Data = {
  topicSlug: 'asvab-wk-word-parts',
  sections: [
    {
      id: 'wkwp-p2-intro',
      type: 'text' as const,
      content: `# 🔤 Roots, Prefixes and Suffixes

**Part 2 of 7 — Prefixes That Change Meaning**

### Prefixes That Mean "Not" or "Against"

These are the most valuable prefixes on the test, because they **flip** a word. If you know the base word, the prefix hands you the opposite.

| Prefix | Meaning | Family |
|:---|:---|:---|
| **un-** | not | unsteady, unlikely, unarmed |
| **in-, im-, il-, ir-** | not | inactive, impolite, illegal, irregular |
| **dis-** | not, apart, the reverse of | disagree, dishonest, disconnect |
| **non-** | not | nonstop, nonfiction, nonverbal |
| **mis-** | wrongly, badly | misspell, misjudge, misplace |
| **anti-, contra-, counter-** | against | antifreeze, contradict, counterattack |
| **mal-** | bad, badly | malfunction, malnourished |

**Spelling note:** *in-* changes to *im-* before b, m and p (impolite), to *il-* before l (illegal) and to *ir-* before r (irregular). All four mean the same thing.

### Prefixes of Time and Place

| Prefix | Meaning | Family |
|:---|:---|:---|
| **pre-** | before | preview, prewar, precaution |
| **post-** | after | postwar, postscript, postpone |
| **re-** | again, back | rebuild, return, recall |
| **sub-** | under, below | submarine, subway, submerge |
| **super-** | over, above, beyond | supervise, superhuman |
| **inter-** | between, among | interstate, international, intervene |
| **trans-** | across, through | transport, transatlantic |
| **ex-** | out, out of | exit, exhale, export |
| **circum-** | around | circumference, circumnavigate |
| **de-** | down, away, undo | descend, defrost, deactivate |

> **Key Fact:** A prefix on a word you know gives you the answer almost for free. **Un**- + steady = not steady. Look for a familiar word hiding behind the prefix.`
    },
    {
      id: 'wkwp-p2-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: illegible

- **Split:** il + leg + ible.
- **Translate:** not + read + able to be.
- **Build:** not able to be read.
- **So:** **illegible** handwriting is too messy to read. A choice like *unreadable* matches; *misspelled* is a trap (misspelled words can still be read).

### Example 2: postpone

- **Split:** post + pone.
- **Translate:** after + put (the same root as *position*).
- **Build:** put until after.
- **So:** to **postpone** is to put off until later, delay. The opposite, *move up* or *rush*, is the trap.

### Example 3: submerge

- **Split:** sub + merge.
- **Translate:** under + dip (as in *emerge*, to come out of the water).
- **Build:** put under.
- **So:** to **submerge** is to put or go under water. A submarine is a ship that goes under the sea.

### When You Do Not Know the Root

You do not need every piece. In **submerge**, knowing only that *sub-* means *under* is enough to choose *sink* over *float*, *rise* or *spray*. One known part can eliminate two or three choices.`
    },
    {
      id: 'wkwp-p2-mc',
      type: 'multiple-choice' as const,
      content: '**Use the prefix.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: '**Irreversible** most nearly means',
            options: ['unthinking', 'permanent', 'backward', 'sudden'],
            correctAnswer: 1,
            explanation: 'Ir- (not) + reverse + -ible (able to be): not able to be reversed or undone. That is permanent. Backward plays on "reverse" but ignores the prefix that flips it.'
          },
          {
            question: `When two privates started shoving each other, the corporal stepped in to **intervene** before anyone got hurt.\n\n**Intervene** most nearly means`,
            options: ['cheer', 'watch', 'interfere', 'step aside'],
            correctAnswer: 2,
            explanation: 'Inter- (between) + ven (come): to come between. Stepping in between two people to stop a fight is interfering. Watch and cheer leave the fight alone.'
          },
          {
            question: '**Misinterpret** most nearly means',
            options: ['mislead', 'ignore', 'translate', 'misunderstand'],
            correctAnswer: 3,
            explanation: 'Mis- (wrongly) + interpret (explain the meaning of): to understand or explain wrongly. Mislead also starts with mis-, but to mislead is to cause someone ELSE to get it wrong. Translate is what interpreting is, without the "wrongly" that the prefix adds.'
          },
          {
            question: `The medic gave the snakebite victim an **antidote** within twenty minutes.\n\n**Antidote** most nearly means`,
            options: ['painkiller', 'bandage', 'cure', 'warning'],
            correctAnswer: 2,
            explanation: 'Anti- (against) + dote (something given): something given against a poison. An antidote is a cure for poisoning. A painkiller only eases pain; it does not work against the venom.'
          },
          {
            question: '**Precaution** most nearly means',
            options: ['safeguard', 'accident', 'punishment', 'reward'],
            correctAnswer: 0,
            explanation: 'Pre- (before) + caution: care taken beforehand. Wearing a seat belt is a precaution, a safeguard against harm. An accident is what the precaution is meant to prevent.'
          }
        ]
      }
    },
    {
      id: 'wkwp-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Prefix meanings.** 🔽

**Sentence A.** The first **transatlantic** flight without a stop took place in 1919.

**Sentence B.** Rather than climb the steep ridge, the patrol chose to **circumvent** it by following the river.`,
      exercise: {
        dropdowns: [
          {
            label: 'In **transatlantic**, the prefix trans- means:',
            options: ['above', 'against', 'after', 'across'],
            correctAnswer: 3
          },
          {
            label: 'In **circumvent**, the prefix circum- means:',
            options: ['under', 'around', 'between', 'before'],
            correctAnswer: 1
          },
          {
            label: 'So **circumvent** most nearly means:',
            options: ['block', 'climb', 'avoid', 'measure'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['across', 'around', 'avoid'],
        hint1: 'Think of transport: carry across.',
        hint2: 'Think of circumference: the distance around a circle.',
        hint3: 'The patrol goes around the ridge instead of over it.',
        explanation: 'Trans- means across: a transatlantic flight crosses the Atlantic. Circum- means around, and vent means come or go, so to circumvent is to go around something, that is, to avoid it. The patrol avoided the ridge by following the river instead of climbing.'
      }
    },
    {
      id: 'wkwp-p2-input',
      type: 'input-boxes' as const,
      content: `**Count the prefixes.** ✍️

Look at these six words:

unsteady · impolite · interstate · irregular · prewar · exhale

**1)** How many of the six words begin with a prefix that means **not**?

**2)** How many begin with a prefix that means **before**?

**3)** How many begin with a prefix that means **out**?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '1', '1'],
        hint1: 'Un-, im- and ir- all mean not.',
        hint2: 'Pre- means before.',
        hint3: 'Ex- means out: to exhale is to breathe out.',
        explanation: 'Unsteady, impolite and irregular all use a "not" prefix (un-, im-, ir-), so 3. Prewar (before a war) uses pre-, so 1. Exhale uses ex- (out), so 1. Interstate uses inter- (between): an interstate highway runs between states.'
      }
    },
    {
      id: 'wkwp-p2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- "Not" prefixes flip a word: **un-, in-/im-/il-/ir-, dis-, non-**; **mis-** = wrongly; **anti-/contra-/counter-** = against; **mal-** = bad
- Time and place prefixes: **pre-** before, **post-** after, **re-** again/back, **sub-** under, **super-** over, **inter-** between, **trans-** across, **ex-** out, **circum-** around, **de-** down/undo
- Look for a familiar word behind the prefix
- Even one known part can eliminate two or three choices

> **Up Next:** Part 3 — the Latin roots that sit at the core of hundreds of test words.`
    }
  ]
};
