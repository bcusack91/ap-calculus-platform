export const englangDictionSyntaxPart5Data = {
  topicSlug: 'englang-diction-syntax',
  sections: [
    {
      id: 'englangd5-intro',
      type: 'text' as const,
      content: `
# 🧩 Diction and Syntax

**Part 5 of 7 — Diction and Syntax Together: Older Meanings, Combined Effects, and Common Misreadings**

---

| Section |
|---------|
| Older Words, Older Meanings |
| Reading Diction and Syntax as One Choice |
| Seven Misconceptions |

> 🔑 **Key Concept:** Parts 2–4 separated word choice from sentence structure so you could see each clearly. On the exam they arrive together, in passages often written one or two centuries ago. This part covers the two places students most often go wrong: reading old words with modern meanings, and assigning fixed effects to devices regardless of context.
`
    },
    {
      id: 'englangd5-older',
      type: 'text' as const,
      content: `
## Older Words, Older Meanings

Section I passages range from the seventeenth century to the present. A word that looks familiar may have meant something different when it was written. Misreading one word can flip the meaning of a sentence.

| Word in context | Meaning then | A modern misreading |
|---|---|---|
| Thoreau (1854): "Still we live meanly, like ants" | In a low, petty, poor way | Cruelly or unkindly |
| Johnson (1755): "till I am known, and do not want it" | Do not **need** it; do not lack it | Do not desire it |
| Johnson (1755): "the enchantment of your address" | Your manner and skill in conversation | Your street address or a speech |
| Lincoln (1861): "intercourse, either amicable or hostile, must continue" | Dealings, communication, trade | The modern narrow sense |
| Lincoln (1860): "I fully indorse this" | Endorse (older spelling) | A misspelling to correct |

### How to Handle an Unfamiliar or Old Word

1. **Read the sentence around it.** Johnson's "do not want it" follows "till I am known," so *need* fits: a known writer no longer needs a patron.
2. **Ask what the passage's argument requires.** Thoreau is complaining about petty, cluttered lives, not cruelty, so *mean* must mean *petty*.
3. **Watch for answer choices that rely on a modern meaning.** Test writers sometimes include one deliberately.

> 🔑 **AP Connection:** A question such as "In context, the word 'want' (line 14) most nearly means" is testing exactly this. The right answer is the meaning that makes the sentence's logic work, which is often not the first meaning you know.
`
    },
    {
      id: 'englangd5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Johnson\'s "till I am known, and do not want it," the word "want" most nearly means',
            options: [
              'desire',
              'need',
              'expect',
              'deserve'
            ],
            correctAnswer: 1,
            explanation: 'Johnson\'s point is that, now famous, he no longer lacks or needs Chesterfield\'s help, the older sense of "want." "Desire" is the modern sense, and neither expecting nor deserving fits the logic of being too late to be useful.'
          },
          {
            question: 'A student reads Thoreau\'s "we live meanly" as an accusation that people treat one another cruelly. The best correction is that "meanly" here means',
            options: [
              'secretly, without telling our neighbors what we do',
              'in a low and petty way, crowded with trivial things',
              'selfishly, refusing to share our wealth with the poor',
              'cautiously, out of fear of what the future may bring'
            ],
            correctAnswer: 1,
            explanation: 'The surrounding sentences complain that "our life is frittered away by detail," so "meanly" carries its older sense of lowly and petty. The passage is not about secrecy, selfishness toward the poor, or fear of the future.'
          }
        ]
      }
    },
    {
      id: 'englangd5-together',
      type: 'text' as const,
      content: `
## Reading Diction and Syntax as One Choice

The strongest analysis shows how a word and the sentence around it work together. Look at the close of Roosevelt's war message from Part 2.

> Hostilities exist. There is no blinking at the fact that our people, our territory and our interests are in grave danger.
>
> With confidence in our armed forces—with the unbounding determination of our people—we will gain the inevitable triumph—so help us God.

| Feature | Diction | Syntax | Combined effect |
|---|---|---|---|
| "Hostilities exist." | A formal, Latin-derived noun and a flat verb | Two words; the shortest sentence in the speech | The legal fact of war, stated without ornament, as if no more words are needed |
| "our people, our territory and our interests" | Plain, inclusive "our" | Tricolon with repeated "our" | Every listener is included in what is endangered |
| "With confidence... with the unbounding determination..." | Abstract nouns of resolve | Two parallel "with" phrases set off by dashes, delaying the main clause | Builds anticipation, so the promise arrives last |
| "so help us God" | Echoes "so help me God," the traditional close of official oaths | A final phrase after a dash | Turns a prediction into a vow |

Neither column alone explains the passage. "Hostilities exist" is powerful because a formal word sits in a two-word sentence; the closing is powerful because abstract words of resolve are arranged to hold back the main clause.

### A Model Analysis Sentence

> After the speech's long account of diplomacy and attacks, Roosevelt's two-word sentence "Hostilities exist" states the fact of war in the flat, formal language of law, as though the evidence has made argument unnecessary; the closing sentence then reverses this economy, holding back its promise behind two "with" phrases so that "we will gain the inevitable triumph" arrives as the release of built-up resolve.

Notice the model never says "diction" or "syntax." It quotes, describes the choice precisely, and explains the effect in context.
`
    },
    {
      id: 'englangd5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What the Choice Does** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lincoln, 1861: "intercourse, either amicable or hostile, must continue between them." In context, "intercourse" means ___',
            options: ['dealings', 'arguments', 'marriages', 'travel']
          },
          {
            label: 'Roosevelt, 1941: "our people, our territory and our interests." Repeating "our" across the series chiefly ___',
            options: ['includes every listener', 'blames the listeners', 'narrows the danger', 'softens the threat']
          },
          {
            label: 'Roosevelt, 1941: the dashes around "with the unbounding determination of our people" chiefly ___',
            options: ['hold back the main clause', 'show the speaker is unsure', 'mark a quotation', 'cut the sentence short']
          }
        ],
        correctAnswers: ['dealings', 'includes every listener', 'hold back the main clause'],
        hint1: 'Lincoln means the trade and communication two neighbors cannot avoid.',
        hint2: 'Whose people, territory and interests are in danger?',
        hint3: 'The main clause, "we will gain the inevitable triumph," comes after them.',
        explanation: '"Intercourse" here means dealings, the repeated "our" includes every listener in what is endangered, and the dashes delay the main clause so the promise lands last.'
      }
    },
    {
      id: 'englangd5-misconceptions',
      type: 'text' as const,
      content: `
## Seven Misconceptions

| Misconception | Why it fails | Better approach |
|---|---|---|
| **1. "Short sentences create urgency."** | Thoreau's "Our life is frittered away by detail" is not urgent; it is a calm, plain verdict after a cluttered sentence. | Describe what the contrast in length does **in this passage**: verdict, emphasis, finality, simplicity, or urgency. |
| **2. "Long sentences are hard to follow, so they weaken an argument."** | Johnson's long first sentence imitates seven years of labor; Thoreau's long purpose sentence imitates deliberation. | Ask whether length mirrors content or builds suspense. |
| **3. "A word's connotation is fixed."** | "Mean," "want," and "address" changed meaning over time; "simultaneously" and "suddenly" differ only in context. | Read the sentence and the argument before deciding what a word suggests. |
| **4. "Naming the device is analysis."** | "Johnson uses parallelism" is true of thousands of texts. | Explain what this parallel structure does here: the "till" clauses name a later and larger loss each time. |
| **5. "Formal language is always more persuasive."** | Roosevelt's homely "There is no blinking at the fact" reaches listeners at home. | Match register to audience and moment. |
| **6. "All repetition works the same way."** | "Simplicity, simplicity, simplicity!" hammers one word back to back, while "ride on the railroad; it rides upon us" reverses the order of its terms to flip who is master. | Describe the specific pattern and what it does here; the exam asks for the effect, not a device name. |
| **7. "The effect is on 'the reader.'"** | Every text in this topic had a specific audience: Congress, a nobleman, readers in industrial America. | Name the audience and explain why the effect matters to **them**. |

> 🔑 **AP Connection:** Many wrong answers in Section I are **true about the passage but not about the question**. A choice that says "the short sentence creates urgency" may describe a short sentence correctly in general but miss what this one does. Always check the choice against the specific lines.
`
    },
    {
      id: 'englangd5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In Thoreau's sentence "Still we live meanly, like ants," "meanly" carries its older sense of living in a low and _______ way.

2) Thoreau's "Simplicity, simplicity, simplicity!" repeats one word with nothing between, so the sentence is as _______ as its subject.

3) Roosevelt's two-word sentence "Hostilities exist" uses a Latin-derived noun, which places it in a _______ register.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['petty', 'simple', 'formal'],
        hint1: 'Trivial, small-minded; the word starts with p.',
        hint2: 'The form of the sentence matches the quality it praises.',
        hint3: 'The opposite of informal or colloquial.',
        explanation: 'Thoreau\'s "meanly" means pettily, the bare, back-to-back repetition makes the sentence as simple as the life it recommends, and "Hostilities" belongs to a formal register.'
      }
    },
    {
      id: 'englangd5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Roosevelt\'s "Hostilities exist" best combines analysis of diction and syntax?',
            options: [
              'It is short, so it creates urgency in the listeners.',
              'It pairs a formal, legal noun with a stark two-word sentence.',
              'It uses a noun and a verb, the basic parts of a sentence.',
              'It is the single most memorable sentence in the entire war message.'
            ],
            correctAnswer: 1,
            explanation: 'The analysis links a word choice (a formal, legal noun) to a structure (a two-word sentence), which together state war as a bare fact. The other statements rely on a fixed effect of length, a grammar description, or a judgment with no explanation.'
          },
          {
            question: 'A student writes, "Thoreau uses short sentences to create urgency." Why is this a weak reading of "Our life is frittered away by detail"?',
            options: [
              'Thoreau never uses short sentences anywhere in Walden.',
              'It delivers a calm verdict, with no call for haste.',
              'Short sentences cannot carry any meaning in an essay.',
              'The sentence is actually a fragment, not a full clause.'
            ],
            correctAnswer: 1,
            explanation: 'After the crowded sentence before it, the short sentence delivers a plain judgment; nothing in it calls for hurry. It is a complete clause, Thoreau uses short sentences often, and short sentences can carry great weight.'
          }
        ]
      }
    }
  ]
};
