export const englangDictionSyntaxPart2Data = {
  topicSlug: 'englang-diction-syntax',
  sections: [
    {
      id: 'englangd2-intro',
      type: 'text' as const,
      content: `
# 🧩 Diction and Syntax

**Part 2 of 7 — Diction in Depth: Roosevelt's Revisions to the War Message, December 1941**

---

| Section |
|---------|
| Five Questions to Ask About Any Word |
| 📖 The Situation: Washington, December 8, 1941 |
| Two Revisions That Changed the Speech |
| Loaded Words, Plain Words, Proper Nouns |
| Writing About Diction Without Vague Labels |

> 🔑 **Key Concept:** Skill 7.A asks you to explain how **word choice** contributes to the tone or style of a text. The best evidence that diction matters is a writer changing one word for another. When you can see the word that was rejected, you can see exactly what the chosen word adds.
`
    },
    {
      id: 'englangd2-questions',
      type: 'text' as const,
      content: `
## Five Questions to Ask About Any Word

Part 1 introduced register, connotation, specificity, and technicality. In practice, analysis starts by asking what the chosen word does that a near-synonym would not.

| Question | What to look for | Example contrast |
|---|---|---|
| **1. Denotation:** What does it literally mean? | The dictionary sense, including older senses | "Mean" in 1854 often meant *lowly* or *poor*, not *cruel* |
| **2. Connotation:** What does it suggest? | Feelings, judgments, associations | "Regime" versus "government" |
| **3. Register:** How formal is it? | Elevated, neutral, colloquial | "Commence" versus "start" versus "kick off" |
| **4. Specificity:** How exact is it? | General versus particular; abstract versus concrete | "Places in the Pacific" versus "Guam" |
| **5. Origin and sound:** Is it plain or learned? | Short Old English words versus longer Latin-derived ones | "Hard" and "help" versus "difficulty" and "assistance" |

### Plain and Learned Words

English often offers a pair: a short word inherited from Old English and a longer one borrowed from Latin or French.

| Plain (Old English) | Learned (Latin or French) | Usual difference in effect |
|---|---|---|
| begin | commence | Plain words feel direct; learned words feel official or ceremonial |
| help | assistance | Plain words feel personal; learned words feel institutional |
| end | terminate | Plain words feel emotional; learned words feel detached |

Neither kind is better. A writer chooses learned words to sound official, careful, or distanced, and plain words to sound direct, sincere, or forceful. Many powerful passages **mix** them, using the contrast itself for emphasis.
`
    },
    {
      id: 'englangd2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A news report calls a protest group "activists"; an opinion column calls the same group "agitators." The difference is chiefly one of',
            options: [
              'denotation',
              'connotation',
              'register',
              'specificity'
            ],
            correctAnswer: 1,
            explanation: 'Both words can name the same people, so the literal meaning is shared; what changes is the judgment each implies, approving or suspicious. Neither word is markedly more formal or more exact than the other.'
          },
          {
            question: 'A writer replaces "the city will terminate the program" with "the city will end the program." The revision most likely makes the sentence sound',
            options: [
              'more technical and precise',
              'more direct and less official in tone',
              'more hostile toward the city',
              'more uncertain about the outcome'
            ],
            correctAnswer: 1,
            explanation: 'Replacing a learned Latin-derived verb with a short plain one shifts the register toward directness. The plain word is not more technical, does not add hostility, and makes the outcome no less certain.'
          }
        ]
      }
    },
    {
      id: 'englangd2-situation',
      type: 'text' as const,
      content: `
## 📖 The Situation: Washington, December 8, 1941

| Component | Details |
|---|---|
| **Writer** | President Franklin D. Roosevelt |
| **Occasion** | An address to a joint session of Congress, broadcast by radio, the day after Japanese forces attacked the U.S. fleet at Pearl Harbor, Hawaii |
| **Audience** | Congress, which he asked to declare war, and a national radio audience |
| **Purpose** | To obtain a declaration of war and to unite a country that had been divided over entering the war |

Roosevelt dictated the speech himself on the afternoon of December 7 and revised the typed draft by hand. The National Archives preserves the draft, so we can see his changes.

## Two Revisions That Changed the Speech

The first typed draft began:

> Yesterday, December 7, 1941, a date which will live in world history, the United States of America was simultaneously and deliberately attacked by naval and air forces of the Empire of Japan.

The speech as delivered:

> Yesterday, December 7th, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.
>
> — Franklin D. Roosevelt, address to Congress, December 8, 1941

### Revision 1: "world history" to "infamy"

| | "a date which will live in world history" | "a date which will live in infamy" |
|---|---|---|
| **Denotation** | The date will be remembered | The date will be remembered **for its disgrace** |
| **Connotation** | Neutral, even admiring; great achievements "live in history" | Shame, wickedness, public dishonor |
| **Effect on the audience** | Records an event | Delivers a moral verdict before any facts are given |

"World history" could describe a triumph. "Infamy" cannot. With one noun, Roosevelt turns a report of an attack into an accusation, and every later sentence is heard as evidence for that verdict.

### Revision 2: "simultaneously" to "suddenly"

"Simultaneously" stresses **coordination**: several attacks at once. That is a military fact. "Suddenly" stresses **surprise**: the victim had no warning. Paired with "deliberately," the revised phrase sets up the speech's central charge, that Japan negotiated for peace while planning an attack. The alliteration of "suddenly and deliberately" also gives the phrase a spoken rhythm that "simultaneously and deliberately" lacks.
`
    },
    {
      id: 'englangd2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The literal, dictionary meaning of a word is its _______.

2) The single word Roosevelt substituted for "world history" was _______.

3) Roosevelt replaced "simultaneously" with "suddenly" to stress surprise rather than _______ among the attacks.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['denotation', 'infamy', 'coordination'],
        hint1: 'The opposite of connotation.',
        hint2: 'It means public disgrace.',
        hint3: '"Simultaneously" means the attacks happened at once, as if planned together.',
        explanation: 'Denotation is literal meaning; "infamy" replaced "world history"; "simultaneously" stressed coordination, while "suddenly" stresses surprise.'
      }
    },
    {
      id: 'englangd2-loaded',
      type: 'text' as const,
      content: `
## Loaded Words, Plain Words, Proper Nouns

### Loaded Words That Carry the Charge

| Phrase | What the diction adds |
|---|---|
| "the Japanese Government has deliberately sought to **deceive**" | Names intent, not just action |
| "this **premeditated invasion**" | "Premeditated" is the word the law uses for planned crimes; "invasion" presents the attack as an assault on American territory |
| "this form of **treachery**" | A betrayal of trust, not merely an act of war |
| "the **unprovoked and dastardly** attack" | "Unprovoked" denies any American fault; "dastardly" means cowardly and contemptible |

Each phrase supports one claim: the attack was not only violent but **dishonest**. The diction keeps that claim in front of listeners even in sentences that are simply reporting.

### Proper Nouns as Diction

> Yesterday the Japanese Government also launched an attack against Malaya.
>
> Last night Japanese forces attacked Hong Kong.
>
> Last night Japanese forces attacked Guam.
>
> Last night Japanese forces attacked the Philippine Islands.
>
> Last night the Japanese attacked Wake Island.
>
> And this morning the Japanese attacked Midway Island.

Roosevelt could have said "attacks across the Pacific." He chose **six place names**. Concrete, specific nouns let listeners locate each attack on a mental map and feel the scale grow with each name. The plain verb "attacked," repeated without variation, keeps attention on the places. (The repeated sentence openings are a syntactic choice; Part 4 returns to them.)

### Plain Words at the Turn

> Hostilities exist. There is no blinking at the fact that our people, our territory and our interests are in grave danger.

"There is no blinking at the fact" is a homely idiom: no one can close their eyes to this. After the formal account of diplomacy, the shift to an everyday phrase speaks to listeners at home as well as to Congress.
`
    },
    {
      id: 'englangd2-writing',
      type: 'text' as const,
      content: `
## Writing About Diction Without Vague Labels

| Weak | Why it is weak | Strong |
|---|---|---|
| "Roosevelt uses strong diction." | "Strong" names no word and no effect | "Roosevelt's 'infamy' delivers a moral verdict before he has presented a single fact." |
| "The word 'dastardly' is negative." | Every insult is negative; the question is how | "'Dastardly' charges cowardice, which fits his claim that Japan attacked while still negotiating." |
| "He uses imagery of places." | Place names are not imagery | "The six place names make the attack's reach concrete and let the list itself show its scale." |

### A Four-Step Method

1. **Quote** the word or short phrase.
2. **Compare** it with a plausible alternative the writer did not use.
3. **Name** the connotation or register the choice adds.
4. **Connect** the effect to the audience and purpose.

> 🔑 **AP Connection:** Section I questions often ask what a word "suggests" or "emphasizes" in context. Test each answer choice by substituting a neutral synonym into the sentence. The right answer names what is **lost** when you do.
`
    },
    {
      id: 'englangd2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Roosevelt\'s change from "a date which will live in world history" to "a date which will live in infamy" primarily serves to',
            options: [
              'cast the attack as a disgrace rather than a mere event',
              'suggest the attack will be studied by future historians',
              'stress that the attack occurred on a single, known date',
              'show modesty about the role of the United States in history'
            ],
            correctAnswer: 0,
            explanation: '"Infamy" adds the judgment of public dishonor that the neutral "world history" lacked. Future study, the single date, and national modesty are not what the substitution adds; the date is stated either way.'
          },
          {
            question: 'The word "premeditated" in "this premeditated invasion" chiefly reinforces Roosevelt\'s claim that',
            options: [
              'the American fleet had been poorly defended',
              'Japan planned the attack during negotiations',
              'the attack caused more damage than expected',
              'Congress had been warned of an invasion earlier'
            ],
            correctAnswer: 1,
            explanation: '"Premeditated" means planned in advance, which supports the charge that Japan "deliberately sought to deceive" while talks continued. The word says nothing about American defenses, the extent of the damage, or earlier warnings.'
          },
          {
            question: 'Which statement best describes the effect of naming Malaya, Hong Kong, Guam, the Philippine Islands, Wake Island, and Midway Island?',
            options: [
              'It makes the wide range of the attacks concrete for listeners',
              'It shows that the United States had colonies across the region',
              'It suggests that some of the attacks have been exaggerated',
              'It reminds Congress that most of these places are far from Japan'
            ],
            correctAnswer: 0,
            explanation: 'The proper nouns turn "the Pacific area" into specific places, so listeners feel the scope grow name by name. The list is not offered to discuss colonies, cast doubt on the reports, or argue about distance from Japan.'
          }
        ]
      }
    }
  ]
};
