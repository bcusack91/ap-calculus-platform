export const asvabWkWordPartsPart4Data = {
  topicSlug: 'asvab-wk-word-parts',
  sections: [
    {
      id: 'wkwp-p4-intro',
      type: 'text' as const,
      content: `# 🔤 Roots, Prefixes and Suffixes

**Part 4 of 7 — Greek Roots and Number Parts**

### Greek Roots

Greek roots fill the vocabulary of science, medicine and technology. Many of them are already in words you use every day.

| Root | Meaning | Family |
|:---|:---|:---|
| **bio** | life | biology, biography, antibiotic |
| **graph, gram** | write, draw | autograph, paragraph, telegram |
| **phon** | sound | telephone, microphone, symphony |
| **chron** | time | chronic, chronicle, synchronize |
| **path** | feeling, disease | sympathy, empathy, pathology |
| **phil** | love | philosophy, philanthropist |
| **log, logy** | word, study of | dialogue, apology, geology |
| **auto** | self | automatic, autograph, autonomous |
| **tele** | far | telephone, television, telescope |
| **micro** | small | microscope, microwave |
| **therm** | heat | thermometer, thermostat, thermal |
| **hydr** | water | hydrant, hydrate, dehydrated |
| **geo** | earth | geography, geology |
| **dem** | people | democracy, epidemic |
| **onym** | name | synonym, antonym, anonymous |
| **scope** | look at, view | microscope, periscope |

### Number Parts

| Part | Number | Family |
|:---|:---:|:---|
| **mono-, uni-** | 1 | monotone, monorail, uniform, unicycle |
| **bi-, di-** | 2 | bicycle, bilingual, dioxide |
| **tri-** | 3 | triangle, tripod, trilogy |
| **quad-, tetra-** | 4 | quadruple, quadrant |
| **dec-** | 10 | decade, decimal |
| **cent-** | 100 | century, centimeter, centennial |
| **multi-, poly-** | many | multiply, polygon |
| **semi-, hemi-** | half | semicircle, hemisphere |

> **Key Fact:** Many Greek words are two roots glued together: **tele + scope** (far + look), **auto + graph** (self + write), **geo + logy** (earth + study). Translate each half and the meaning appears.`
    },
    {
      id: 'wkwp-p4-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: chronological

- **Split:** chron + o + log + ical.
- **Translate:** time + study/word + (describing word).
- **So:** **chronological** means arranged in the order of time. A chronological list of your jobs starts with the earliest one.

### Example 2: empathy

- **Split:** em + path + y.
- **Translate:** in + feeling + (noun).
- **So:** **empathy** is feeling what another person feels, putting yourself in their place. Its cousin **sympathy** (syn = with) is feeling *for* someone.

### Example 3: bilingual

- **Split:** bi + lingu + al.
- **Translate:** two + tongue/language + (describing word).
- **So:** a **bilingual** soldier speaks **two** languages. The number part does most of the work: *multilingual* would be many languages.

### Watch Out for "Half Meanings"

Some roots have two senses. **Path** means feeling (sym**path**y) **and** disease (**path**ology, the study of disease). **Log** means word (dia**log**ue) **and** study (bio**logy**). Use the rest of the word to decide which sense fits.`
    },
    {
      id: 'wkwp-p4-mc',
      type: 'multiple-choice' as const,
      content: '**Use the Greek root.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `Before the raid, every team member had to **synchronize** his or her watch with the team leader's.\n\n**Synchronize** most nearly means`,
            options: ['wind up', 'replace', 'repair', 'match up'],
            correctAnswer: 3,
            explanation: 'Syn (together) + chron (time): to make things happen at the same time. Synchronized watches all show exactly the same time, so synchronize means match up.'
          },
          {
            question: '**Philanthropist** most nearly means',
            options: ['scientist', 'donor', 'explorer', 'politician'],
            correctAnswer: 1,
            explanation: 'Phil (love) + anthrop (human) + -ist (person): a person who loves humankind, especially one who gives money to good causes. That is a donor. Scientist plays on the "-ist" ending, which only tells you it is a person.'
          },
          {
            question: `The tip about the stolen equipment came from an **anonymous** caller who would not give her name.\n\n**Anonymous** most nearly means`,
            options: ['unnamed', 'reliable', 'distant', 'nervous'],
            correctAnswer: 0,
            explanation: 'An (without) + onym (name): without a name. The sentence confirms it ("would not give her name"). Reliable is something investigators would want to know, not what anonymous means.'
          },
          {
            question: `After six hours of hiking in the heat without enough to drink, two recruits became **dehydrated**.\n\n**Dehydrated** most nearly means`,
            options: ['dried out', 'overheated', 'exhausted', 'sunburned'],
            correctAnswer: 0,
            explanation: 'De- (remove) + hydr (water): with water removed. Not drinking enough leaves the body short of water, that is, dried out. Overheated and exhausted can happen at the same time, but they do not mean "lacking water."'
          },
          {
            question: '**Monotonous** most nearly means',
            options: ['musical', 'lonely', 'tiring', 'dull'],
            correctAnswer: 3,
            explanation: 'Mono (one) + ton (tone): stuck on one tone. A monotonous voice or job never changes, so it is dull and repetitive. Musical plays on "tone," and lonely plays on "mono" meaning alone. Tiring is close but describes the effect on you, not the sameness.'
          }
        ]
      }
    },
    {
      id: 'wkwp-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Build the meaning.** 🔽

**Sentence A.** Soldiers in the cold-weather course learn to spot the early signs of **hypothermia**.

**Sentence B.** The new drone is **autonomous**; it can fly its whole route with no pilot at the controls.`,
      exercise: {
        dropdowns: [
          {
            label: 'Hypo- means under or too little, and **therm** means:',
            options: ['air', 'heat', 'water', 'blood'],
            correctAnswer: 1
          },
          {
            label: 'So **hypothermia** is a condition of:',
            options: ['too much body heat', 'too little water', 'too much exercise', 'too little body heat'],
            correctAnswer: 3
          },
          {
            label: 'In Sentence B, **autonomous** most nearly means:',
            options: ['unmanned but steered', 'heavily armed', 'self-governing', 'remote-controlled'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['heat', 'too little body heat', 'self-governing'],
        hint1: 'Think of thermometer and thermostat.',
        hint2: 'Hypo- (too little) + therm (heat).',
        hint3: 'Auto means self. It flies "with no pilot at the controls."',
        explanation: 'Therm means heat, so hypothermia (hypo = under) is a dangerous drop in body heat, the risk in a cold-weather course. Too much body heat would be hyperthermia. Auto (self) + nom (law, rule) gives autonomous: self-governing, running on its own. Remote-controlled and "unmanned but steered" both still need a person at the controls somewhere, which the sentence rules out.'
      }
    },
    {
      id: 'wkwp-p4-input',
      type: 'input-boxes' as const,
      content: `**Number parts.** ✍️ Type a number for each.

**1)** A **trilogy** is a series of how many books or movies?

**2)** A **bicentennial** celebrates an anniversary of how many years?

**3)** A **decade** is how many years?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '200', '10'],
        hint1: 'Tri- as in triangle and tripod.',
        hint2: 'Bi- (2) × cent (100). A centennial is 100 years.',
        hint3: 'Dec- as in decimal (based on ten).',
        explanation: 'Tri- = 3, so a trilogy has three parts. Cent = 100 and bi- = 2, so a bicentennial marks 200 years; the United States celebrated its bicentennial in 1976. Dec- = 10, so a decade is ten years.'
      }
    },
    {
      id: 'wkwp-p4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Greek roots: **bio** life, **graph** write, **phon** sound, **chron** time, **path** feeling/disease, **phil** love, **log/logy** word/study, **auto** self, **tele** far, **micro** small, **therm** heat, **hydr** water, **geo** earth, **dem** people, **onym** name, **scope** look
- Number parts: **mono/uni** 1, **bi/di** 2, **tri** 3, **quad/tetra** 4, **dec** 10, **cent** 100, **multi/poly** many, **semi/hemi** half
- Many Greek words are **two roots glued together**: translate both halves
- Some roots have **two senses** (path, log): let the rest of the word decide

> **Up Next:** Part 5 — suffixes, the endings that tell you a word's part of speech.`
    }
  ]
};
