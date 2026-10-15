export const englitLongerFictionPart2Data = {
  topicSlug: 'englit-longer-fiction',
  sections: [
    {
      id: 'englitlo2-intro',
      type: 'text' as const,
      content: `
# 📚 Longer Fiction

**Part 2 of 7 — Character Across a Whole Novel**

---

| Section |
|---------|
| 📖 The Vocabulary of Character |
| Pip's Arc in Three Moments |
| Elizabeth Bennet's Moment of Self-Knowledge |
| Foils: Characters Who Define Each Other |
| Relationships With Nuance: Pip and Joe |

> 🔑 **Key Concept:** In a short story you watch a character for a few pages. In a novel you watch one for hundreds, so the most important evidence is often **the distance between two moments**. Skills **1.B**, **1.C** and **1.D** ask you to explain why a character changes or stays the same, what contrasting characters do, and how details reveal the complexity of characters' relationships.

In the Short Fiction lessons you practiced reading character through details, perspective and motive. Here the question widens: what does a character's whole **trajectory** mean?
`
    },
    {
      id: 'englitlo2-vocab',
      type: 'text' as const,
      content: `
## 📖 The Vocabulary of Character

| Term | Definition | Novel example |
|---|---|---|
| **Dynamic character** | Changes in a significant, lasting way (values, understanding, self-knowledge) | Pip in *Great Expectations* |
| **Static character** | Remains essentially the same; the stability itself can carry meaning | Joe Gargery, whose goodness never wavers |
| **Round character** | Complex, capable of surprising the reader in a convincing way | Elizabeth Bennet |
| **Flat character** | Built around a single idea or quality; often comic | Mr. Collins in *Pride and Prejudice* |
| **Foil** | A character whose contrast with another highlights that character's traits | Jane Bennet beside Elizabeth |
| **Bildungsroman** | A *novel of formation* that follows a young protagonist from childhood or youth toward maturity | *Great Expectations*, *Jane Eyre* |

The terms round and flat come from E. M. Forster's lectures *Aspects of the Novel* (1927). The word *Bildungsroman* is German (*Bildung*, formation or education; *Roman*, novel); Goethe's *Wilhelm Meister's Apprenticeship* (1795–96) is usually named as the model.

### Two cautions

- **Static is not a flaw.** A static character often serves as a fixed point that measures how far someone else has moved. Joe stays the same so that Pip's drift away from him, and his return, can be seen.
- **Dynamic means a change in the inner life**, not a change of circumstances. Pip becoming rich is a change of fortune. Pip learning what he owes Joe is a change of character.

### A Bildungsroman checklist

1. A young protagonist at odds with the world of childhood (an orphan is common)
2. A journey or move that tests early values (Pip to London; Jane from Gateshead to Lowood to Thornfield)
3. Mistakes, often about love, money or class
4. A painful recognition
5. An ending that settles, sometimes uneasily, the protagonist's place in the world
`
    },
    {
      id: 'englitlo2-pip',
      type: 'text' as const,
      content: `
## Pip's Arc in Three Moments

*Great Expectations* is told by an adult Pip looking back on his youth. Three moments, far apart in the novel, show the arc.

**1. The first shame (Chapter 8).** Playing cards at Satis House, the child Pip is mocked by Estella:

> "He calls the knaves Jacks, this boy!" said Estella with disdain, before our first game was out. "And what coarse hands he has! And what thick boots!"
> 
> — Charles Dickens, *Great Expectations*, 1861

The narrator adds: "I had never thought of being ashamed of my hands before." Shame enters Pip's life from outside, through someone else's eyes.

**2. Shame turned inward (Chapter 14).** Now apprenticed to Joe as a blacksmith, Pip reflects:

> It is a most miserable thing to feel ashamed of home. There may be black ingratitude in the thing, and the punishment may be retributive and well deserved; but that it is a miserable thing, I can testify.

The shame now belongs to Pip himself, and the older narrator judges it: "black ingratitude."

**3. The recognition (Chapter 39).** When Pip learns that his fortune comes not from Miss Havisham but from the convict he helped as a child, his whole idea of himself collapses. Thinking of the people he has neglected, he writes:

> I would not have gone back to Joe now, I would not have gone back to Biddy now, for any consideration; simply, I suppose, because my sense of my own worthless conduct to them was greater than every consideration.

The "sharpest and deepest pain of all," he says, is that for this convict he "had deserted Joe."

| Moment | What Pip values | Who judges him |
|---|---|---|
| Chapter 8 | Has not yet learned to value gentility | Estella |
| Chapter 14 | Gentility; he is ashamed of the forge | The older narrator ("black ingratitude") |
| Chapter 39 | Begins to see that Joe and Biddy were worth more than his expectations | Pip himself |

**The function of the change (1.B):** Pip's arc turns the Bildungsroman's usual pattern around. He rises in fortune while falling in character, and his real education is learning that the gentility he wanted was empty. Because the narrator is the grown Pip, the whole novel is shaped by that later judgment.
`
    },
    {
      id: 'englitlo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Pip's movement from "I had never thought of being ashamed of my hands before" (Chapter 8) to "It is a most miserable thing to feel ashamed of home" (Chapter 14) primarily shows that`,
            options: [
              `Estella's contempt has become Pip's own way of seeing his home`,
              `Pip has decided that he dislikes the work of a blacksmith`,
              `Joe has begun to treat Pip with new and harsher severity`,
              `Pip now openly blames Estella for the poverty of his family`
            ],
            correctAnswer: 0,
            explanation: `The first shame comes from Estella's eyes; by Chapter 14 Pip feels it about his own home without her prompting, so an outside judgment has become an inner one. Joe's kindness does not change, and Pip does not blame Estella for his family's poverty.`
          },
          {
            question: `Which of the following best describes Joe Gargery's function as a static character?`,
            options: [
              `He supplies comic relief between the novel's darker scenes`,
              `He is a fixed measure of how far Pip drifts and returns`,
              `He shows that people of his class are unable to change`,
              `He is a rival who competes with Pip for Biddy's affection`
            ],
            correctAnswer: 1,
            explanation: `Joe's goodness does not change, so it marks the distance Pip travels from home and back toward it. The novel does not suggest working people cannot change, and Joe is never Pip's rival.`
          },
          {
            question: `Which change would most clearly make a character dynamic rather than static?`,
            options: [
              `She inherits a fortune and moves to a fine house in town`,
              `She travels abroad and spends several years in a new city`,
              `She learns that her low opinion of a rival was mistaken`,
              `She marries and takes on the duties of a household`
            ],
            correctAnswer: 2,
            explanation: `A dynamic change is a lasting change in understanding or values, like revising a judgment. Wealth, travel and marriage alter circumstances, which may or may not change the inner life.`
          }
        ]
      }
    },
    {
      id: 'englitlo2-elizabeth',
      type: 'text' as const,
      content: `
## Elizabeth Bennet's Moment of Self-Knowledge

Elizabeth begins *Pride and Prejudice* proud of reading people well. At the first ball Darcy refuses to dance with her, calling her "tolerable: but not handsome enough to tempt me," and she builds her judgment of him on that insult and on Wickham's charming lies. In Chapter 36 she reads Darcy's letter, which reveals the truth about Wickham:

> "How despicably have I acted!" she cried. "I, who have prided myself on my discernment! I, who have valued myself on my abilities! who have often disdained the generous candour of my sister, and gratified my vanity in useless or blameless distrust. How humiliating is this discovery! Yet, how just a humiliation! Had I been in love, I could not have been more wretchedly blind. But vanity, not love, has been my folly. ... Till this moment, I never knew myself."
> 
> — Jane Austen, *Pride and Prejudice*, 1813

| Feature of the passage | What it reveals |
|---|---|
| Repeated "I, who have..." | She dismantles her own self-image clause by clause |
| "discernment," "abilities" | The very quality she was proudest of is the one that failed |
| "How humiliating... Yet, how just a humiliation!" | She does not only suffer; she accepts the judgment as fair |
| "vanity, not love" | She diagnoses the cause: Darcy's slight hurt her pride |
| "Till this moment, I never knew myself" | The change is in self-knowledge, the core of a dynamic character |

**What does not change:** Elizabeth keeps her wit, her independence and her readiness to speak her mind. A round character can change her understanding without becoming someone else, and that combination of change and continuity is what makes her convincing.

**Placement matters.** The recognition comes near the middle of the novel, not at the end. Austen gives the second half to testing whether the new self-knowledge holds up in action, which is part of what the arc means.
`
    },
    {
      id: 'englitlo2-foils',
      type: 'text' as const,
      content: `
## Foils: Characters Who Define Each Other

A foil is not just an opposite. The best foils **share** something with the main character, so the difference stands out against a common background (skill 1.C).

| Pair | What they share | The contrast | What the contrast highlights |
|---|---|---|---|
| Elizabeth and Jane Bennet | Sisters, close friends, both courted by wealthy men | Jane's "generous candour" thinks well of everyone; Elizabeth prides herself on judging sharply | Neither trust nor suspicion alone is wisdom; Elizabeth has to learn what Jane's charity contains |
| Elizabeth and Charlotte Lucas | Intelligent, unmarried, without fortune | Charlotte accepts Mr. Collins: "I am not romantic, you know. I never was. I ask only a comfortable home" | The economic pressure on women that Elizabeth's refusal of Collins defies |
| Pip and Estella | Both children reshaped by an adult's private plan (Miss Havisham's, the convict's) | Pip is taught to want; Estella is taught not to feel | Both show what it costs to be made into someone else's project |
| Pip and Joe | Raised in the same house and forge | Pip measures worth by class; Joe by kindness and duty | The novel's real definition of a gentleman |

### Writing about a foil

| Weak | Strong |
|---|---|
| Charlotte is different from Elizabeth. | Charlotte's calm choice of "a comfortable home" shows that Elizabeth's refusal of Mr. Collins is a risk, not just a matter of taste, so her independence carries a real cost. |
`
    },
    {
      id: 'englitlo2-relationships',
      type: 'text' as const,
      content: `
## Relationships With Nuance: Pip and Joe

Skill 1.D asks how details reveal **nuances** in relationships, meaning feelings that are mixed rather than simple. In Chapter 27 Joe visits Pip in London. Pip, now a young gentleman, is embarrassed by him, and the visit goes badly. Before leaving, Joe says:

> "Pip, dear old chap, life is made of ever so many partings welded together, as I may say, and one man's a blacksmith, and one's a whitesmith, and one's a goldsmith, and one's a coppersmith. Diwisions among such must come, and must be met as they come. If there's been any fault at all to-day, it's mine."

| Detail | Nuance it reveals |
|---|---|
| "dear old chap" | Affection survives Pip's coldness |
| "partings welded together" | Joe explains life in the language of his own trade, with a dignity Pip has stopped seeing |
| The list of smiths | Joe accepts class difference as a fact of life, without bitterness |
| "If there's been any fault... it's mine" | Joe takes blame that belongs to Pip, which shames Pip (and the reader) more than any reproach could |

The relationship is not simply a matter of a cruel Pip and a kind Joe. Joe's acceptance of "Diwisions" is generous, but it also makes the class divide feel permanent, and Pip's discomfort comes partly from a real gap in their lives, not only from snobbery. Holding both ideas at once is what a nuanced reading looks like.
`
    },
    {
      id: 'englitlo2-input',
      type: 'input-boxes' as const,
      content: `
**Name the Term** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `A character who changes in a significant, lasting way across the work`,
            answer: 'dynamic',
            acceptableAnswers: ['dynamic character', 'a dynamic character']
          },
          {
            question: `A character whose contrast with another highlights that character's traits`,
            answer: 'foil',
            acceptableAnswers: ['a foil', 'foil character']
          },
          {
            question: `A novel that follows a young protagonist's growth toward maturity`,
            answer: 'Bildungsroman',
            acceptableAnswers: ['bildungsroman', 'a bildungsroman', 'coming-of-age novel', 'coming of age novel']
          }
        ],
        hint1: 'The opposite of static.',
        hint2: 'Jane Bennet plays this role beside Elizabeth.',
        hint3: 'A German word meaning novel of formation.',
        explanation: 'A dynamic character changes inwardly; a foil sets off another character by contrast; and a Bildungsroman traces growth from youth to maturity.'
      }
    },
    {
      id: 'englitlo2-apnote',
      type: 'text' as const,
      content: `
## Writing About a Character Arc

| Weak | Strong |
|---|---|
| Pip changes a lot over the novel. | Pip rises in fortune while sinking in character, so his recognition in Chapter 39 recasts his "great expectations" as the real obstacle to becoming a gentleman. |
| Elizabeth learns her lesson. | Elizabeth's cry that she "never knew" herself turns her pride in her "discernment" against her, which makes self-knowledge, not marriage, the novel's central achievement. |

### Common misconceptions

- **Myth: main characters are always dynamic.** Many protagonists change little; the meaning may lie in their failure to change.
- **Myth: change means improvement.** A character can change for the worse, or change in a way the novel treats with irony.
- **Myth: a foil is the villain.** A foil can be a friend, a sibling or the hero's double.

> 🔑 **AP Connection:** On Section I, questions often ask how a passage "characterizes" someone or what a moment "reveals" about a relationship. On Question 3, a character's arc gives you a ready-made line of reasoning: where the character starts, what tests them, and what the change (or lack of change) means.
`
    },
    {
      id: 'englitlo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In context, Elizabeth's exclamation "Yet, how just a humiliation!" primarily serves to`,
            options: [
              `show her accepting the self-judgment as deserved`,
              `suggest that Darcy intended to humiliate her`,
              `reveal her wish to keep the letter a secret`,
              `mark her decision to forgive Wickham's lies`
            ],
            correctAnswer: 0,
            explanation: `By calling the humiliation "just," she agrees that she earned it, which turns pain into self-knowledge. The letter is not described as an attempt to humiliate her, and the line says nothing of secrecy or of forgiving Wickham.`
          },
          {
            question: `Joe's remark that "life is made of ever so many partings welded together" most strongly suggests that Joe`,
            options: [
              `resents Pip for leaving the forge and wants him home`,
              `understands their separation through the terms of his own craft`,
              `hopes that Pip will soon offer him work in London`,
              `believes his visit has been a complete success today`
            ],
            correctAnswer: 1,
            explanation: `"Welded" turns a smith's work into an image of life, so Joe makes sense of the parting with quiet dignity in his own terms. He blames himself rather than resenting Pip, asks for nothing, and knows the visit went badly.`
          },
          {
            question: `Which statement best explains why Charlotte Lucas works as a foil to Elizabeth Bennet?`,
            options: [
              `Charlotte is wealthy, and Elizabeth is poor`,
              `Charlotte dislikes Darcy more than Elizabeth does`,
              `They share a situation but make opposite choices`,
              `Charlotte is the villain who opposes the heroine`
            ],
            correctAnswer: 2,
            explanation: `Both are clever women without fortune, so Charlotte's acceptance of Mr. Collins sets off Elizabeth's refusal. Charlotte is not wealthy, her feelings about Darcy are not the point, and a foil need not be a villain.`
          }
        ]
      }
    }
  ]
}
