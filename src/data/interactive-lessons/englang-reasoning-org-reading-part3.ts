export const englangReasoningOrgReadingPart3Data = {
  topicSlug: 'englang-reasoning-org-reading',
  sections: [
    {
      id: 'englangr3-intro',
      type: 'text' as const,
      content: `
# 🧠 Reasoning and Organization in Reading

**Part 3 of 7 — Methods of Development: Washington, Paine and Bacon**

---

| Section |
|---------|
| 📖 The Five Methods in the CED |
| Narration and Description: Washington, 1895 |
| Comparison and Cause: Paine, 1776 |
| Division and Definition: Bacon, 1625 |

> 🔑 **Key Concept:** A **method of development** is a common approach a writer uses to develop and organize the reasoning of an argument. The CED names **narration, cause-effect, comparison-contrast, definition** and **description** (skill 5.C). A method is not decoration. Each one does a particular kind of work for the claim, and an AP answer should say what that work is.
`
    },
    {
      id: 'englangr3-methods',
      type: 'text' as const,
      content: `
## 📖 The Five Methods in the CED

| Method | What the writer does | What it can do for an argument | Question to ask |
|---|---|---|---|
| **Narration** | Tells a story or recounts events in sequence | Makes an abstract claim concrete and memorable; lets the reader reach the point before it is stated | What lesson is the story built to carry? |
| **Description** | Renders the sensory or specific details of a thing, place or person | Makes a situation vivid enough that the reader feels its stakes | Which details are chosen, and what impression do they build? |
| **Cause-effect** | Traces why something happens or what follows from it | Supports predictions and assigns responsibility | Is the causal link shown or only asserted? |
| **Comparison-contrast** | Sets two things side by side to show likeness or difference | Clarifies a term by its opposite; transfers judgment from a familiar case to an unfamiliar one | What is gained by placing these two together? |
| **Definition** | Fixes what a key term means in this argument | Controls the terms of the debate; prepares later steps | What does the definition include or leave out, and why? |

Two related methods appear often in AP passages:

- **Analogy** is an extended comparison between things of different kinds, used to argue that what is true of one is true of the other.
- **Division** (or classification) splits a subject into parts or kinds so that each can be treated in turn. Madison's "two methods... the one... the other" in Part 2 is division.

A single passage usually combines methods. The skill is to name the method that does the main work in a given stretch of text and explain how it serves the claim.
`
    },
    {
      id: 'englangr3-washington',
      type: 'text' as const,
      content: `
## Narration and Description: Washington, 1895

### The Situation

| Component | Details |
|---|---|
| **Writer** | Booker T. Washington, founding principal of the Tuskegee Institute in Alabama |
| **Occasion** | The opening of the Cotton States and International Exposition in Atlanta, September 18, 1895 |
| **Audience** | A mixed audience of white Southern officials and business leaders and Black Southerners, with a national press reporting the speech |
| **Purpose** | To urge Black Southerners to seek economic progress through labor, trades and commerce in the South, and to urge white Southerners to employ them |

The speech was widely praised at the time and later criticized, most famously by W. E. B. Du Bois in 1903, for accepting social segregation. Analyzing its methods does not mean endorsing its position.

### The Story

> A ship lost at sea for many days suddenly sighted a friendly vessel. From the mast of the unfortunate vessel was seen a signal, "Water, water; we die of thirst!" The answer from the friendly vessel at once came back, "Cast down your bucket where you are." A second time the signal, "Water, water; send us water!" ran up from the distressed vessel, and was answered, "Cast down your bucket where you are." And a third and fourth signal for water was answered, "Cast down your bucket where you are." The captain of the distressed vessel, at last heeding the injunction, cast down his bucket, and it came up full of fresh, sparkling water from the mouth of the Amazon River.
>
> — Booker T. Washington, Atlanta Exposition Address, September 18, 1895

| Choice | Method | Effect |
|---|---|---|
| A complete story before any claim | Narration | The audience grasps the lesson (help is already near) before the speaker applies it to anyone |
| The refrain "Cast down your bucket where you are," four times | Narration with repetition | The answer that seemed useless becomes the one that is right; the phrase becomes the speech's slogan |
| "fresh, sparkling water from the mouth of the Amazon River" | Description | The detail explains the surprise: a great river makes the sea fresh far from shore, so the sailors were surrounded by what they needed |

### The Application

Only after the story does Washington state the claim, and he applies the same story to both halves of his audience:

> To those of my race who depend on bettering their condition in a foreign land or who underestimate the importance of cultivating friendly relations with the Southern white man, who is their next-door neighbor, I would say: "Cast down your bucket where you are" . . .

> To those of the white race who look to the incoming of those of foreign birth and strange tongue and habits for the prosperity of the South, were I permitted I would repeat what I say to my own race, "Cast down your bucket where you are."

Later he pictures the relationship he proposes with a comparison:

> In all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress.

The narration organizes the whole first half of the speech. Because both audiences receive the same instruction, the story also gives the speech **unity**: two appeals to two groups become one idea.
`
    },
    {
      id: 'englangr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the structure of Washington\'s address, the story of the ship functions primarily as',
            options: [
              'a narrative whose lesson the speaker then applies to his listeners',
              'a description of the Amazon for investors attending the Exposition',
              'a historical example of Southern trade with South American ports',
              'a contrast between two ships that stand for two separate nations'
            ],
            correctAnswer: 0,
            explanation: 'Washington tells the whole story first and then applies its instruction to both groups in his audience. The Amazon detail serves the story, and the ships do not stand for trade routes or nations.'
          },
          {
            question: 'Washington\'s choice to give the same instruction, "Cast down your bucket where you are," to both races mainly serves to',
            options: [
              'admit that his advice to Black listeners was weaker than to white ones',
              'join two appeals to two audiences into a single unified idea',
              'show the audience that he had no plan beyond a familiar story',
              'shift the speech from narration to a long set of statistics'
            ],
            correctAnswer: 1,
            explanation: 'Repeating the story\'s instruction for each group binds the two appeals together, so the speech reads as one argument. Nothing in the passage admits weakness or turns to statistics.'
          }
        ]
      }
    },
    {
      id: 'englangr3-paine',
      type: 'text' as const,
      content: `
## Comparison and Cause: Paine, 1776

Thomas Paine published *Common Sense* in Philadelphia in January 1776, when many colonists still hoped to reconcile with Britain. Before he argues for independence, he argues about what government is.

> Some writers have so confounded society with government, as to leave little or no distinction between them; whereas they are not only different, but have different origins. Society is produced by our wants, and government by our wickedness; the former promotes our happiness positively by uniting our affections, the latter negatively by restraining our vices. The one encourages intercourse, the other creates distinctions.
>
> — Thomas Paine, *Common Sense*, 1776

| Choice | Method | Effect |
|---|---|---|
| "so confounded society with government" | Comparison-contrast set up as a correction | Paine announces that readers have mixed up two things he will now separate |
| "produced by our wants... by our wickedness" | Contrast of **causes** | Society comes from human needs, government from human faults |
| "the former... the latter," "The one... the other" | Balanced paired clauses | The sentence shape itself keeps the two terms apart |

Paine then reasons from cause to effect:

> Society in every state is a blessing, but government even in its best state is but a necessary evil; in its worst state an intolerable one; for when we suffer, or are exposed to the same miseries by a government, which we might expect in a country without government, our calamity is heightened by reflecting that we furnish the means by which we suffer.

The "for" clause explains **why** a bad government is intolerable: the people are the cause of their own suffering, since they pay for and empower the government that harms them. A few sentences on, he condenses the contrast into an analogy:

> Government, like dress, is the badge of lost innocence; the palaces of kings are built on the ruins of the bowers of paradise.

### Why These Methods Fit Paine's Purpose

His audience still felt loyal to the king. By defining government as a "necessary evil" with a low origin, Paine makes it easier to judge any particular government by its results rather than with reverence. The contrast lowers government; the cause-effect sentence makes bad government the people's own burden; the analogy makes monarchy itself a sign of the fall.
`
    },
    {
      id: 'englangr3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Method** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Society is produced by our wants, and government by our wickedness" develops the idea mainly through ___',
            options: ['comparison-contrast', 'narration', 'description', 'definition']
          },
          {
            label: '"our calamity is heightened by reflecting that we furnish the means by which we suffer" develops the idea mainly through ___',
            options: ['cause-effect', 'narration', 'description', 'comparison-contrast']
          },
          {
            label: '"it came up full of fresh, sparkling water from the mouth of the Amazon River" develops the idea mainly through ___',
            options: ['description', 'definition', 'cause-effect', 'comparison-contrast']
          }
        ],
        correctAnswers: ['comparison-contrast', 'cause-effect', 'description'],
        hint1: 'Two things are set side by side to show a difference in origin.',
        hint2: 'The clause explains why the suffering is worse.',
        hint3: 'Look at the sensory detail about the water.',
        explanation: 'Paine contrasts society with government, then explains a cause of greater suffering. Washington\'s detail about the water is description that makes the story\'s surprise concrete.'
      }
    },
    {
      id: 'englangr3-bacon',
      type: 'text' as const,
      content: `
## Division and Definition: Bacon, 1625

Francis Bacon's "Of Studies" first appeared in 1597; the expanded version below is from the 1625 edition of his *Essays*. It is famous for compression: almost every sentence divides its subject into kinds.

> Studies serve for delight, for ornament, and for ability. Their chief use for delight is in privateness and retiring; for ornament, is in discourse; and for ability, is in the judgment and disposition of business.

> Crafty men contemn studies, simple men admire them, and wise men use them.

> Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.

> Reading maketh a full man; conference a ready man; and writing an exact man.
>
> — Francis Bacon, "Of Studies," *Essays*, 1625 (spelling and punctuation modernized)

| Sentence | How it divides | What the division argues |
|---|---|---|
| "delight... ornament... ability" | Three uses of study, then where each belongs | Study has several legitimate purposes, each with its proper place |
| "Crafty... simple... wise" | Three kinds of people by how they treat study | Only use, not contempt or admiration, is the wise response |
| "tasted... swallowed... chewed and digested" | Three kinds of books by how to read them | Readers should match their effort to the book |
| "full... ready... exact" | Three activities by what each produces | Reading, conversation ("conference") and writing train different powers |

Each three-part list is ordered so that the **last** item carries the weight: "wise men use them," "chewed and digested," "an exact man." The division is the argument: a reader who accepts the categories has already accepted Bacon's judgment of them.

### Definition as a Method

Definition does similar work by fixing terms. Recall Madison's definition of faction in Part 2. By including **majorities** in the definition, he made the majority faction the problem his essay had to solve. When a passage defines a term, ask what the definition includes, what it leaves out, and which later step depends on it.

> 🔑 **AP Connection:** A 5.C question may ask how a paragraph "develops" its claim. Name the method **and** its effect: not "Bacon uses lists," but "Bacon divides books into three kinds so that the reader's effort is measured against the book's worth."
`
    },
    {
      id: 'englangr3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Paine\'s sentence "Society is produced by our wants, and government by our wickedness" develops his argument primarily by',
            options: [
              'telling the story of how the first colonial governments began',
              'contrasting the origins of two things his readers had confused',
              'describing the sufferings of colonists under British soldiers',
              'conceding that government in its best state is a real blessing'
            ],
            correctAnswer: 1,
            explanation: 'Paine separates society from government by their sources, needs against faults, after saying that writers have confused them. There is no story or description of suffering here, and he calls government a necessary evil, not a blessing.'
          },
          {
            question: 'The opening sentence of "Of Studies," "Studies serve for delight, for ornament, and for ability," organizes what follows by',
            options: [
              'naming three uses that Bacon then places in turn',
              'defining study as the private reading of learned books',
              'narrating how Bacon himself came to value his studies',
              'contrasting the reading habits of England and France'
            ],
            correctAnswer: 0,
            explanation: 'The sentence divides study into three uses, and Bacon then assigns each one its place: privacy, discourse and business. Bacon offers no single definition, personal story or national comparison.'
          },
          {
            question: 'In "Some books are to be tasted, others to be swallowed, and some few to be chewed and digested," the order of the three kinds mainly serves to',
            options: [
              'rank books from the most popular to the least popular',
              'place the most demanding kind of reading last for emphasis',
              'suggest that readers should finish every book they begin',
              'compare English books unfavorably with ancient ones'
            ],
            correctAnswer: 1,
            explanation: 'The series builds toward "chewed and digested," the fullest reading, reserved for "some few" books. Bacon ranks by the effort a book deserves, not popularity, and the sentence says most books need not be read wholly.'
          }
        ]
      }
    }
  ]
}
