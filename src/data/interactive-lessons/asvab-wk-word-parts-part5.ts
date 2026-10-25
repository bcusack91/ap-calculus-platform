export const asvabWkWordPartsPart5Data = {
  topicSlug: 'asvab-wk-word-parts',
  sections: [
    {
      id: 'wkwp-p5-intro',
      type: 'text' as const,
      content: `# 🔤 Roots, Prefixes and Suffixes

**Part 5 of 7 — Suffixes and Parts of Speech**

### What a Suffix Tells You

A suffix sits at the end of a word and usually tells you its **part of speech**: is it a thing (noun), an action (verb) or a description (adjective)? That matters on Word Knowledge because **the right answer is always the same part of speech as the test word**. A noun's synonym is a noun; an action's synonym is an action.

| Part of speech | Common suffixes | Examples |
|:---|:---|:---|
| **Noun** (a thing, person or idea) | -tion, -sion, -ment, -ity, -ness, -ance, -ence | action, decision, payment, safety, kindness |
| **Noun** (a person who does it) | -er, -or, -ist | driver, operator, tourist |
| **Verb** (an action) | -ize, -ify, -ate, -en | organize, simplify, activate, weaken |
| **Adjective** (a description) | -ous, -ive, -able, -ible, -ful, -less, -al, -ic | famous, active, readable, visible, helpful, endless, natural, heroic |
| **Adverb** (how) | -ly | quickly, calmly |

### Suffixes That Add Meaning

A few suffixes do more than set the part of speech:

| Suffix | Meaning | Example |
|:---|:---|:---|
| **-less** | without | fearless = without fear |
| **-ful** | full of | hopeful = full of hope |
| **-able, -ible** | can be, able to be | breakable = can be broken |
| **-ous** | full of, having | dangerous = full of danger |
| **-ist** | person who does or believes | cyclist, pianist |
| **-ify, -ize** | to make | simplify = make simple |

> **Key Fact:** Check the ending of the test word and the endings of the choices. A choice in the wrong part of speech can be eliminated even if you have no idea what the word means.`
    },
    {
      id: 'wkwp-p5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: relentless

- **Split:** relent + less.
- **Translate:** give in, ease up + without.
- **So:** **relentless** means without easing up: a relentless storm, a relentless training schedule. Persistent and nonstop are good matches.

### Example 2: pacify

- **Split:** pac + ify.
- **Translate:** peace (as in *Pacific*, the "peaceful" ocean) + make.
- **So:** to **pacify** is to make peaceful, to calm someone down. The suffix -ify tells you the answer must be a verb: *calm*, *soothe*.

### Example 3: perilous

- **Split:** peril + ous.
- **Translate:** danger + full of.
- **So:** **perilous** means full of danger. If the choices were *dangerous · danger · endanger · dangerously*, only *dangerous* is an adjective like perilous. The others are a noun, a verb and an adverb.

### Use Part of Speech to Eliminate

Suppose the test word is **fortitude** (a noun, from fort = strong) and the choices are *brave · courage · strengthen · boldly*. Even before you think about meaning, only **courage** is a noun. Brave is an adjective, strengthen is a verb, boldly is an adverb. Fortitude means courage and strength of mind.`
    },
    {
      id: 'wkwp-p5-mc',
      type: 'multiple-choice' as const,
      content: '**Use the suffix.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `Stranded with a broken radio, the **resourceful** pilot built a signal fire and spelled HELP with rocks.\n\n**Resourceful** most nearly means`,
            options: ['frightened', 'experienced', 'inventive', 'wealthy'],
            correctAnswer: 2,
            explanation: 'Resource + -ful (full of): full of resources, good at finding ways to solve problems. Building a signal fire and a rock message shows inventiveness. Wealthy plays on "resources" meaning money.'
          },
          {
            question: '**Verify** most nearly means',
            options: ['confirm', 'record', 'announce', 'question'],
            correctAnswer: 0,
            explanation: 'Ver (true) + -ify (make): to make sure something is true. To verify an address is to confirm it. Question is closer to the opposite: you question what you have not yet verified.'
          },
          {
            question: `In an emergency, a good leader must be **decisive**, making clear choices quickly.\n\n**Decisive** most nearly means`,
            options: ['patient', 'popular', 'firm', 'gentle'],
            correctAnswer: 2,
            explanation: 'Decis (decide) + -ive (having the quality of): quick to decide. Making clear choices quickly is being firm and resolute. Patient points the other way.'
          },
          {
            question: '**Ruthless** most nearly means',
            options: ['clumsy', 'tireless', 'merciless', 'truthful'],
            correctAnswer: 2,
            explanation: 'Ruth is an old word for pity, and -less means without: without pity, that is, merciless. Truthful is a look-alike trap. Tireless also ends in -less but means without tiring.'
          },
          {
            question: `In 1944, Allied troops arrived to **liberate** the town from four years of occupation.\n\n**Liberate** most nearly means`,
            options: ['visit', 'occupy', 'free', 'rebuild'],
            correctAnswer: 2,
            explanation: 'Liber (free, as in liberty) + -ate (to make): to make free. Ending an occupation frees the town. Occupy is the opposite, what the enemy had done.'
          }
        ]
      }
    },
    {
      id: 'wkwp-p5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the part of speech from the suffix.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: '**intensify** (as in "the storm will intensify") is a:',
            options: ['adverb', 'noun', 'verb', 'adjective'],
            correctAnswer: 2
          },
          {
            label: '**cooperative** (as in "a cooperative witness") is a:',
            options: ['adjective', 'adverb', 'noun', 'verb'],
            correctAnswer: 0
          },
          {
            label: '**achievement** (as in "a proud achievement") is a:',
            options: ['verb', 'adjective', 'adverb', 'noun'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['verb', 'adjective', 'noun'],
        hint1: '-ify means "to make."',
        hint2: '-ive endings describe something.',
        hint3: '-ment endings name a thing.',
        explanation: 'Intensify ends in -ify (to make), so it is a verb: to make more intense. Cooperative ends in -ive and describes the witness, so it is an adjective meaning willing to help. Achievement ends in -ment, a noun suffix: something achieved.'
      }
    },
    {
      id: 'wkwp-p5-input',
      type: 'input-boxes' as const,
      content: `**Sort by suffix.** ✍️

courageous · modernize · novelist · visible · careless · motion

**1)** How many of the six words are adjectives (describing words)?

**2)** How many are verbs?

**3)** How many are nouns?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '1', '2'],
        hint1: 'Look for -ous, -ible and -less.',
        hint2: 'Look for -ize.',
        hint3: '-ist names a person; -tion names a thing.',
        explanation: 'Adjectives: courageous (-ous), visible (-ible), careless (-less), so 3. Verb: modernize (-ize), so 1. Nouns: novelist (-ist, a person who writes novels) and motion (-tion), so 2.'
      }
    },
    {
      id: 'wkwp-p5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Suffixes set the **part of speech**: nouns (-tion, -ment, -ity, -ness, -ance, -er, -ist), verbs (-ize, -ify, -ate, -en), adjectives (-ous, -ive, -able, -ful, -less, -al, -ic), adverbs (-ly)
- Some suffixes add meaning: **-less** without, **-ful** full of, **-able** can be, **-ous** full of, **-ify/-ize** to make
- The correct answer is **always the same part of speech** as the test word: use that to eliminate

> **Up Next:** Part 6 — the traps: words that only look like they contain a root, and how to use parts without overtrusting them.`
    }
  ]
};
