export const asvabWkSynonymStrategiesPart3Data = {
  topicSlug: 'asvab-wk-synonym-strategies',
  sections: [
    {
      id: 'wkss-p3-intro',
      type: 'text' as const,
      content: `# 🔤 Synonyms, Connotation and Test Strategy

**Part 3 of 7 — Connotation: Positive, Negative or Neutral**

### Same Dictionary Meaning, Different Feeling

Every word has a **denotation** (its dictionary meaning) and a **connotation** (the feeling it carries). Two words can describe the same behavior while one praises it and the other insults it.

| Positive or neutral | Negative | The shared idea |
|:---|:---|:---|
| frugal, thrifty | stingy, cheap | careful with money |
| assertive | pushy | speaks up firmly |
| curious | nosy | wants to know things |
| confident | arrogant | believes in oneself |
| slender | scrawny | thin |
| determined | stubborn | will not give up |
| youthful | childish | young in manner |
| famous | notorious | widely known |
| persistent | nagging | keeps at it |

Calling a sergeant **confident** is a compliment. Calling the same sergeant **arrogant** is an insult. On the test, the best synonym usually matches **both** the meaning **and** the feeling of the test word.

> **Key Fact:** If you know whether a word is positive, negative or neutral, you can often eliminate half the choices, even when you cannot define the word.`
    },
    {
      id: 'wkss-p3-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: frugal

**Frugal** most nearly means: *stingy · thrifty · wealthy · wasteful*

- Frugal describes someone who spends carefully. It is a **positive** word: a frugal soldier saves money for a car.
- *Stingy* has the same basic idea, but it is **negative**: unwilling to share.
- *Wasteful* is the opposite, and *wealthy* is unrelated.
- **Thrifty** matches both meaning and feeling.

### Example 2: slender

**Slender** most nearly means: *scrawny · slim · weak · tall*

- Slender is a positive or neutral word for thin and graceful.
- *Scrawny* means thin in an unattractive, underfed way: negative.
- **Slim** is the match.

### Example 3: notorious

**Notorious** most nearly means: *famous · infamous · honored · forgotten*

- Notorious means widely known **for something bad**: a notorious smuggler.
- *Famous* has the "widely known" part but is neutral or positive.
- *Honored* is positive, and *forgotten* is the opposite of known.
- **Infamous** (famous for something bad) matches both meaning and feeling.

### When Connotation Helps Most

Connotation matters most when two choices share the basic idea. If one choice is the right meaning but the wrong feeling, it is a trap. Ask: **would the person being described take this as praise or as an insult?**`
    },
    {
      id: 'wkss-p3-mc',
      type: 'multiple-choice' as const,
      content: '**Match meaning and feeling.** 🎯',
      exercise: {
        questions: [
          {
            question: `In her first week as squad leader, Ortiz learned to be **assertive**, giving orders clearly and expecting them to be followed.\n\n**Assertive** most nearly means`,
            options: ['pushy', 'timid', 'sneaky', 'confident'],
            correctAnswer: 3,
            explanation: 'Assertive means confident and direct in stating what you want. Pushy shares the idea of speaking up but is negative, and the sentence presents her growth as a good thing. Timid is the opposite.'
          },
          {
            question: `A good mechanic is **curious** about how every part of an engine works.\n\n**Curious** most nearly means`,
            options: ['nosy', 'careless', 'doubtful', 'interested'],
            correctAnswer: 3,
            explanation: 'Curious here is positive: eager to learn, interested. Nosy is the negative version, prying into other people\'s business, which does not fit a mechanic studying an engine.'
          },
          {
            question: '**Determined** most nearly means',
            options: ['resolute', 'hesitant', 'cheerful', 'stubborn'],
            correctAnswer: 0,
            explanation: 'Determined means firmly decided, not giving up: resolute matches in meaning and in its positive feeling. Stubborn shares the "won\'t give up" idea but is negative. Hesitant is the opposite.'
          },
          {
            question: '**Youthful** most nearly means',
            options: ['elderly', 'childish', 'young', 'foolish'],
            correctAnswer: 2,
            explanation: 'Youthful means young or seeming young, and it is a compliment: a youthful 60-year-old. Childish is the negative trap (immature), and elderly is the opposite.'
          },
          {
            question: '**Persistent** most nearly means',
            options: ['sleepy', 'careless', 'nagging', 'constant'],
            correctAnswer: 3,
            explanation: 'Persistent means continuing steadily: persistent rain, a persistent effort. Constant matches. Nagging is the negative version, persistent in an annoying way.'
          }
        ]
      }
    },
    {
      id: 'wkss-p3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Positive, negative or neutral?** 🔽 Choose the connotation of each word.',
      exercise: {
        dropdowns: [
          {
            label: '**confident**',
            options: ['negative', 'neutral', 'positive'],
            correctAnswer: 2
          },
          {
            label: '**arrogant**',
            options: ['positive', 'negative', 'neutral'],
            correctAnswer: 1
          },
          {
            label: '**middle-aged**',
            options: ['positive', 'negative', 'neutral'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['positive', 'negative', 'neutral'],
        hint1: 'Would someone be pleased to be called confident?',
        hint2: 'Arrogant means acting superior to others.',
        hint3: 'Middle-aged simply states an age range.',
        explanation: 'Confident is a compliment (positive). Arrogant describes the same self-belief taken too far, looking down on others (negative). Middle-aged just states a fact about age, with no praise or insult (neutral).'
      }
    },
    {
      id: 'wkss-p3-input',
      type: 'input-boxes' as const,
      content: `**Count the insults.** ✍️

stingy · thrifty · nosy · confident · childish

**1)** How many of these five words have a **negative** connotation?

**2)** How many have a **positive** connotation?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '2'],
        hint1: 'Would you want to be called stingy? Nosy? Childish?',
        hint2: 'Thrifty and confident are compliments.',
        hint3: 'Negative + positive should add up to 5.',
        explanation: 'Stingy, nosy and childish are negative (3): they are the insulting versions of frugal, curious and youthful. Thrifty and confident are positive (2).'
      }
    },
    {
      id: 'wkss-p3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Denotation** = dictionary meaning; **connotation** = the feeling a word carries
- Pairs to know: frugal/stingy, assertive/pushy, curious/nosy, confident/arrogant, slender/scrawny, determined/stubborn, youthful/childish, famous/notorious, persistent/nagging
- The best synonym matches **meaning and feeling**
- Knowing only whether a word is positive or negative can eliminate half the choices

> **Up Next:** Part 4 — look-alike words and the opposite traps that catch fast readers.`
    }
  ]
};
