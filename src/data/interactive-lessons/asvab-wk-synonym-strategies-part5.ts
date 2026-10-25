export const asvabWkSynonymStrategiesPart5Data = {
  topicSlug: 'asvab-wk-synonym-strategies',
  sections: [
    {
      id: 'wkss-p5-intro',
      type: 'text' as const,
      content: `# 🔤 Synonyms, Connotation and Test Strategy

**Part 5 of 7 — Learning Words in Families**

### Why Lists Don't Stick (and Families Do)

Memorizing a random list of 500 words is slow and the words fade fast. A better way: learn words in **families** that share one core idea. Each new word hooks onto a plain word you already know, and every family member helps you answer questions about the others. Word Knowledge questions are synonym questions, so a family **is** a set of answers.

| Core idea | Family members |
|:---|:---|
| **brief** | terse, succinct, concise, short |
| **stubborn** | obstinate, adamant, headstrong (tenacious is the positive cousin) |
| **angry** | irate, livid, indignant, furious |
| **calm** | tranquil, composed, serene, peaceful |
| **lazy** | idle, lethargic, indolent, sluggish |
| **joyful** | jubilant, elated, overjoyed |
| **brave** | intrepid, valiant, gallant, bold |
| **too small an amount** | paltry, scant, meager, skimpy |
| **huge** | colossal, vast, immense, enormous |
| **honest** | sincere, frank, forthright, genuine, candid |
| **dishonest** | deceitful, devious, sly, cunning |
| **praise** | laud, acclaim, commend, applaud |
| **criticize** | rebuke, reprimand, censure, scold |
| **weaken** | undermine, impair, sap |
| **strengthen** | fortify, bolster, reinforce |
| **hard-working** | industrious, diligent, tireless |
| **required** | mandatory, compulsory, obligatory (opposite: voluntary) |

> **Key Fact:** When you meet a new word, do not just learn its definition. Ask **which family it belongs to**, and file it next to the plain word at the top.`
    },
    {
      id: 'wkss-p5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: a family answers a question

**Terse** most nearly means: *rude · brief · wordy · quiet*

- Terse belongs to the **brief** family: a terse reply uses as few words as possible.
- *Rude* is a trap: terse replies can feel rude, but the word is about length.
- *Wordy* is the opposite.
- **Answer:** brief.

### Example 2: the family tells you the feeling

**Tenacious** most nearly means: *persistent · stubborn · lazy · careless*

- Tenacious sits next to the stubborn family but is **positive**: holding on firmly, refusing to quit.
- *Stubborn* has the right idea with the wrong feeling (Part 3 again).
- **Answer:** persistent.

### Example 3: one member unlocks another

If you know that **reprimand** means to scold, and you see **censure** listed in the same family, you have learned a second word for free: to censure is to criticize harshly and officially.

### Build Your Own Families

Each time you miss a word in practice, write the plain core word at the top of a card and add the new word under it. Over a few weeks your families grow, and so does your Word Knowledge score.`
    },
    {
      id: 'wkss-p5-mc',
      type: 'multiple-choice' as const,
      content: '**Use the family.** 🎯 Word-alone questions.',
      exercise: {
        questions: [
          {
            question: '**Obstinate** most nearly means',
            options: ['obvious', 'stubborn', 'gentle', 'grateful'],
            correctAnswer: 1,
            explanation: 'Obstinate is in the stubborn family: an obstinate mule will not move. Obvious is a look-alike that also starts with "ob-."'
          },
          {
            question: '**Irate** most nearly means',
            options: ['furious', 'irregular', 'tired', 'eager'],
            correctAnswer: 0,
            explanation: 'Irate is in the angry family: an irate customer. Irregular is a look-alike, and the other choices have nothing to do with anger.'
          },
          {
            question: '**Intrepid** most nearly means',
            options: ['fearless', 'clumsy', 'swift', 'cowardly'],
            correctAnswer: 0,
            explanation: 'Intrepid is in the brave family: intrepid explorers. Cowardly is the opposite.'
          },
          {
            question: '**Paltry** most nearly means',
            options: ['generous', 'meager', 'friendly', 'colorful'],
            correctAnswer: 1,
            explanation: 'Paltry belongs to the too-small-an-amount family: a paltry tip, a paltry sum. Generous is the opposite.'
          },
          {
            question: '**Laud** most nearly means',
            options: ['shout', 'praise', 'mock', 'carry'],
            correctAnswer: 1,
            explanation: 'Laud is in the praise family: critics lauded the film. Shout is a sound-alike trap from "loud," and mock is the opposite.'
          }
        ]
      }
    },
    {
      id: 'wkss-p5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which family?** 🔽 Choose the core idea each word belongs to.',
      exercise: {
        dropdowns: [
          {
            label: '**fortify**',
            options: ['criticize', 'strengthen', 'weaken', 'praise'],
            correctAnswer: 1
          },
          {
            label: '**undermine**',
            options: ['strengthen', 'weaken', 'praise', 'criticize'],
            correctAnswer: 1
          },
          {
            label: '**reprimand**',
            options: ['criticize', 'strengthen', 'weaken', 'praise'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['strengthen', 'weaken', 'criticize'],
        hint1: 'A fort is a strong building.',
        hint2: 'To mine under a wall is to dig away its support.',
        hint3: 'A reprimand is what a sergeant gives after a mistake.',
        explanation: 'Fortify (make strong, as with a fort) belongs to strengthen. Undermine (dig away the support underneath) belongs to weaken. Reprimand (a formal scolding) belongs to criticize.'
      }
    },
    {
      id: 'wkss-p5-input',
      type: 'input-boxes' as const,
      content: `**Count the family members.** ✍️

sincere · devious · frank · sly · genuine

**1)** How many of these words belong to the **honest** family?

**2)** How many belong to the **dishonest** family?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '2'],
        hint1: 'Sincere, frank and genuine all describe saying what you really mean.',
        hint2: 'Devious and sly describe sneaky people.',
        hint3: 'The two answers add up to 5.',
        explanation: 'Sincere, frank and genuine are in the honest family (3). Devious and sly are in the dishonest family (2).'
      }
    },
    {
      id: 'wkss-p5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Learn words in **families** around a plain core word: brief, stubborn, angry, calm, lazy, joyful, brave, too small, huge, honest, dishonest, praise, criticize, weaken, strengthen, hard-working, required
- A family is a ready-made set of **synonyms**, which is exactly what WK tests
- Use connotation inside a family: **tenacious** is the positive cousin of stubborn
- File every new word you miss under its family

> **Up Next:** Part 6 — pacing, elimination and smart guessing when you don't know the word.`
    }
  ]
};
