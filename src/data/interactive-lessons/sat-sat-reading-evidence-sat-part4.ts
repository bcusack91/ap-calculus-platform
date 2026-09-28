export const satReadingEvidencePart4Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're4-intro',
      type: 'text' as const,
      content: `# Vocabulary in Context

**Part 4 of 7 — Word Meaning from Context**

The SAT tests "words in context"—you need to determine which meaning of a word fits the passage, NOT just the most common definition.

### Strategy: Substitution Method

1. Read the sentence with the target word
2. Cover the word and predict what should go there
3. Check which answer choice matches your prediction

### Example

> "The company decided to **table** the proposal until the next quarterly meeting."

The word "table" most nearly means:
- A) a piece of furniture ❌
- B) postpone ✅
- C) present for discussion ❌ (British English meaning—less common in SAT context)
- D) organize into rows ❌

### Multiple-Meaning Words the SAT Loves

| Word | Common Meaning | SAT Contextual Meaning |
|---|---|---|
| **Acute** | sharp, severe | perceptive, keen |
| **Check** | verify | restrain, limit |
| **Arrest** | detain by police | stop, halt (progress) |
| **Qualify** | become eligible | limit, moderate (a statement) |
| **Gravity** | force of attraction | seriousness, importance |
| **Champion** | winner | advocate for, support |
| **Craft** | art project | skill, careful construction |
| **Provincial** | from a province | narrow-minded, unsophisticated |

### SAT Trap ⚠️

The most **obvious** definition is the most common trap. If the word is "table" and one option is "a flat surface for eating," that's the trap. The common meaning is not automatically wrong, though: let the context decide, and pick whichever meaning the sentence actually requires.`
    },
    {
      id: 're4-quiz',
      type: 'multiple-choice' as const,
      content: '**Vocabulary in Context Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The senator sought to TEMPER her criticism of the bill with acknowledgment of its sponsors\' good intentions." In this context, "temper" most nearly means:',
            options: ['moderate', 'anger', 'harden', 'disposition'],
            correctAnswer: 0,
            explanation: 'She is softening her criticism by also praising intentions. "Moderate"—to reduce the intensity of—fits perfectly. "Temper" meaning anger, a general disposition, or hardening metal doesn\'t fit this context.'
          },
          {
            question: '"The artist\'s PEDESTRIAN approach to the landscape disappointed critics who expected innovation." "Pedestrian" most nearly means:',
            options: ['ordinary', 'walking', 'crowded', 'meticulous'],
            correctAnswer: 0,
            explanation: 'Critics expected innovation but were disappointed, so the approach was the opposite of innovative: "ordinary." The literal meanings (walking, crowded with foot traffic) are the traps, and "meticulous" is a compliment that would not disappoint critics.'
          },
          {
            question: 'When you encounter a vocabulary-in-context question, the FIRST thing you should do is:',
            options: ['Predict a replacement word before you read the four choices', 'Read all four choices first and pick the meaning you know best', 'Think about how you personally use the word in conversation', 'Choose the option that sounds the most sophisticated or formal'],
            correctAnswer: 0,
            explanation: 'Predicting before looking prevents you from being attracted to trap answers. Your prediction based on context will almost always match the correct choice.'
          }
        ]
      }    },
    {
      id: 're4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Vocabulary in Context Mastery

### Worked Example 1: The Substitution Method Step-by-Step

| Step | Action |
|---|---|
| **Sentence** | "The new regulations effectively **checked** the company's rapid expansion into foreign markets." |
| **Cover the word** | "The new regulations effectively _____ the company's rapid expansion…" |
| **Predict** | "limited" or "restrained" or "slowed" |
| **Choices** | A) verified B) examined C) restrained D) marked |
| **Match** | C) restrained matches "limited/slowed" ✅ |
| **Trap** | A) verified — the most common meaning of "check" |

### Worked Example 2: Multiple-Meaning Words in Action

| Word | Common Meaning | SAT Meaning | Context Clue |
|---|---|---|---|
| "The discovery **arrested** the decline" | Detained (police) | Stopped, halted | "Decline" → something being stopped |
| "She **qualified** her support" | Became eligible | Limited, added conditions to | "Qualified" modifying "support" |
| "The **gravity** of the situation" | Physical force | Seriousness | "Of the situation" → not physics |
| "He **championed** the cause" | Won a competition | Advocated for | "The cause" → advocacy context |

### Top 20 SAT Multiple-Meaning Words

| Word | Trap Definition | SAT Definition |
|---|---|---|
| Table | Furniture | Postpone |
| Arrest | Detain | Halt/stop |
| Check | Verify | Restrain |
| Qualify | Meet requirements | Limit/restrict |
| Gravity | Physical force | Seriousness |
| Champion | Winner | Advocate |
| Craft | Arts and crafts | Skill/expertise |
| Provincial | From a province | Narrow-minded |
| Pedestrian | Walker | Ordinary/dull |
| Temper | Anger | Moderate/soften |
| Cultivate | Farm | Develop/nurture |
| Resolve | Solve | Determination |
| Appreciate | Be grateful | Increase in value |
| Telling | Narrating | Revealing/significant |
| Singular | One | Remarkable/unique |`
    },
    {
      id: 're4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Vocabulary Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: '"The teacher sought to CULTIVATE a love of reading in her students." "Cultivate" most nearly means:',
            options: ['foster', 'plow', 'plant', 'harvest'],
            correctAnswer: 0,
            explanation: '"Cultivate" here means to foster, that is, to develop and nurture over time. The farming meanings (plow, plant, harvest) are literal and do not fit "a love of reading."'
          },
          {
            question: '"The **singular** achievement of landing on the moon united the nation." "Singular" most nearly means:',
            options: ['remarkable', 'solitary', 'individual', 'peculiar'],
            correctAnswer: 0,
            explanation: 'In context, "singular achievement" means remarkable, not just "one" (individual) or "alone" (solitary). "Peculiar" is another meaning of singular, but a strange achievement would not unite a nation.'
          },
          {
            question: 'Which rule is most reliable for vocabulary-in-context questions?',
            options: ['Let the sentence around the word decide the meaning that fits', 'Rule out the most common meaning of the word every time', 'Choose the most sophisticated word among the four choices', 'Go with the first meaning of the word that comes to mind'],
            correctAnswer: 0,
            explanation: 'Context decides. The common meaning is a frequent trap (if the word is "check" and the sentence is about regulations slowing expansion, "verify" is wrong), but it is not automatically wrong: when the sentence calls for the common meaning, it is the answer. Sophistication and first instinct are not evidence.'
          }
        ]
      }
    },
    {
      id: 're4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Vocabulary in Context Check** — Select the SAT meaning.',
      exercise: {
        dropdowns: [
          '"The discovery arrested the decline" → arrested means [stopped|jailed|photographed|identified]',
          '"The gravity of the crisis" → gravity means [seriousness|weight|physics|attraction]',
          '"She qualified her endorsement" → qualified means [limited|earned|completed|improved]',
          'First step for vocab questions: [cover the word and predict|read all choices first|rule out the common meaning|find the hardest word]'
        ],
        correctAnswers: ['stopped', 'seriousness', 'limited', 'cover the word and predict'],
        hint1: 'A decline being "arrested" = being stopped.',
        hint2: 'A crisis has gravity = has seriousness/weight.',
        hint3: 'A "qualified" endorsement = one with conditions/limits.',
        explanation: 'Arrested = stopped. Gravity = seriousness. Qualified = limited. Always predict before looking at choices — this prevents trap answers from attracting you.'
      }
    },
    {
      id: 're4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Strategy | Detail |
|---|---|
| Substitution method | Cover word → predict → match |
| #1 trap | The most common definition when the context calls for another |
| Multiple-meaning words | SAT tests secondary/contextual meanings |
| Key words to know | Table, arrest, check, qualify, gravity, champion, craft, temper |
| Context clues | Surrounding words reveal the intended meaning |

*Next: Purpose & Rhetoric →*`    }
  ]
};