export const englitLongerFictionPart3Data = {
  topicSlug: 'englit-longer-fiction',
  sections: [
    {
      id: 'englitlo3-intro',
      type: 'text' as const,
      content: `
# 📚 Longer Fiction

**Part 3 of 7 — How Novels Are Built**

---

| Section |
|---------|
| 🏗️ The Units of a Novel |
| Stages: Dickens's Three-Part Design |
| Frame Narrative: The Boxes of *Frankenstein* |
| The Retrospective Narrator |
| Parallel Plots |
| Scene, Summary and Pacing |

> 🔑 **Key Concept:** Skills **3.A**, **3.B** and **3.C** ask how plot orders events, what a particular sequence does, and how structure shapes meaning. In a novel, structure is the arrangement of hundreds of pages: where the author divides, frames, doubles, speeds up and slows down the story. Each of those choices tells the reader what matters.

**Plot** is the order in which the novel presents events. **Structure** is the larger architecture that contains the plot: volumes, chapters, frames, narrators, subplots and the balance of scene against summary.
`
    },
    {
      id: 'englitlo3-units',
      type: 'text' as const,
      content: `
## 🏗️ The Units of a Novel

| Unit | What it is | Questions to ask |
|---|---|---|
| **Chapter** | The basic division; often ends on a turn, a revelation or a suspended question | Why does the chapter end *here*? What does the break withhold or emphasize? |
| **Volume, part or stage** | A larger division, often marking a phase of the protagonist's life | What changes between parts: place, age, fortune, understanding? |
| **Frame** | An outer story that contains an inner one | Who is telling whom, and why should the listener matter? |
| **Subplot** | A secondary line of action running beside the main plot | Does it mirror, contrast or comment on the main plot? |
| **Scene vs summary** | Moment-by-moment narration vs compressed narration of time | Where does the novel slow down, and what does it rush past? |

### Publication shaped structure

Many Victorian novels were written in installments. *Great Expectations* first appeared weekly in Dickens's magazine *All the Year Round* (December 1860 to August 1861), so many chapters end on a hook. *Pride and Prejudice* (1813) and *Frankenstein* (1818) were first published in three volumes, and the volume breaks fall at turning points.
`
    },
    {
      id: 'englitlo3-stages',
      type: 'text' as const,
      content: `
## Stages: Dickens's Three-Part Design

Dickens divides *Great Expectations* into three "stages" and marks the first two endings in the text itself. Chapter 19 closes with the line "This is the end of the first stage of Pip's expectations," and Chapter 39 closes the second stage the same way.

| Stage | Chapters | Pip's situation | Ends with |
|---|---|---|---|
| First | 1–19 | Childhood on the marshes; Satis House; apprenticeship to Joe | News of his "great expectations"; Pip leaves for London |
| Second | 20–39 | A young gentleman in London, sure Miss Havisham is his patron | The convict returns: "Yes, Pip, dear boy, I've made a gentleman on you!" |
| Third | 40–59 | Trying to save the convict; losing his fortune | Illness, Joe's care, and a final meeting with Estella |

**The function of the design (3.C):** each stage ends at a reversal in Pip's *expectations*, the word in the title. The structure tracks what Pip believes about his future, not just where he lives. The second stage ends at the exact moment that belief collapses, so the novel's midpoint and its central recognition coincide.

> "Yes, Pip, dear boy, I've made a gentleman on you! It's me wot has done it!"
> 
> — Charles Dickens, *Great Expectations*, 1861 (Chapter 39)

The sentence is a revelation and an accusation at once: the "gentleman" Pip thought was his own nature turns out to be another man's handiwork.
`
    },
    {
      id: 'englitlo3-frame',
      type: 'text' as const,
      content: `
## Frame Narrative: The Boxes of *Frankenstein*

*Frankenstein* (1818) is built like a set of nested boxes. Each narrator hands the story to the next.

| Layer | Narrator | Listener | Where |
|---|---|---|---|
| Outer frame | Robert Walton, an explorer sailing toward the North Pole | His sister, Margaret Saville, in letters | Letters 1–4 and the close of Chapter 24 |
| Middle | Victor Frankenstein, rescued from the ice | Walton | Most of Chapters 1–24 |
| Center | The creature | Victor | Chapters 11–16 |

The novel opens not with Victor but with Walton's cheerful letter:

> You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings.
> 
> — Mary Shelley, *Frankenstein*, 1818 (Letter 1)

### What the frame does

1. **It doubles the theme.** Walton, like Victor, is chasing glory through dangerous knowledge. Victor tells him: "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge." The frame lets us watch a second ambitious man decide whether to heed the warning.
2. **It filters every voice.** Walton promises to record Victor's story "as nearly as possible in his own words." The creature's speech reaches us through Victor's memory and then Walton's pen, so the most sympathetic voice in the book is reported by his enemy.
3. **It puts the creature at the center.** His plea sits in the middle of the novel: "I was benevolent and good; misery made me a fiend." Structurally, the creature's own account is the heart of the book.
4. **It returns to the outside.** The novel ends in Walton's letters, with the creature leaving the ship, "lost in darkness and distance." The frame closes, but the creature escapes it.
`
    },
    {
      id: 'englitlo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Dickens's decision to end the second stage of *Great Expectations* with the convict's "I've made a gentleman on you!" primarily serves to`,
            options: [
              `place Pip's reversal at the structural center of the novel`,
              `introduce the convict as a new character for the third stage`,
              `resolve the mystery of Estella's parentage before the ending`,
              `signal that Pip will now return to the forge and to Joe`
            ],
            correctAnswer: 0,
            explanation: `The stage break falls exactly where Pip's belief in Miss Havisham as his patron collapses, so structure and recognition coincide. The convict appeared in Chapter 1, Estella's parentage is revealed later, and Pip does not return to the forge here.`
          },
          {
            question: `Which of the following best describes the function of Robert Walton's letters in *Frankenstein*?`,
            options: [
              `They supply historical facts about Arctic exploration`,
              `They give Victor a listener as ambitious as he is`,
              `They prove that the creature never really existed at all`,
              `They let Victor's sister judge the events from afar`
            ],
            correctAnswer: 1,
            explanation: `Walton shares Victor's hunger for discovery, so the frame lets the reader watch a parallel figure receive the cautionary tale. The letters are not a history of exploration, they never deny the creature, and they go to Walton's sister, not Victor's.`
          },
          {
            question: `Because the creature's story reaches the reader through Victor and then Walton, the reader is most likely to`,
            options: [
              `discount it entirely as Victor's lies`,
              `trust it more than Victor's account`,
              `weigh his voice against its hostile channel`,
              `treat it as Walton's own invention`
            ],
            correctAnswer: 2,
            explanation: `The creature's eloquence is reported by his enemy and then copied by Walton, so a careful reader weighs what is said against who is transmitting it. Nothing invites the reader to dismiss it, treat it as Walton's fiction, or prefer it automatically.`
          }
        ]
      }
    },
    {
      id: 'englitlo3-retro',
      type: 'text' as const,
      content: `
## The Retrospective Narrator

*Great Expectations* and *Jane Eyre* are both told in the first person by an adult looking back. That creates **two "I"s**: the experiencing self (young Pip, young Jane) and the narrating self (the older voice that knows how things turned out).

> That was a memorable day to me, for it made great changes in me. But it is the same with any life. Imagine one selected day struck out of it, and think how different its course would have been. Pause you who read this, and think for a moment of the long chain of iron or gold, of thorns or flowers, that would never have bound you, but for the formation of the first link on one memorable day.
> 
> — Charles Dickens, *Great Expectations*, 1861 (Chapter 9)

| Feature | Effect |
|---|---|
| "made great changes in me" | The older Pip knows the first visit to Satis House set his life's course; the younger Pip could not |
| "Pause you who read this" | Direct address pulls the reader into the reflection |
| "chain of iron or gold, of thorns or flowers" | The narrator weighs his life without yet saying which metals and plants it turned out to hold; suspense and judgment at once |

Jane Eyre addresses the reader too, most famously in the last chapter: "Reader, I married him." The retrospective narrator can **foreshadow**, **judge** the younger self, and **choose what to tell in detail and what to skip**, which brings us to pacing.

| Narrating self can... | Example |
|---|---|
| Judge the younger self | Pip calls his shame "black ingratitude" |
| Foreshadow | "it made great changes in me" |
| Select | Jane skips eight years (below) |
`
    },
    {
      id: 'englitlo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Structural Device** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Walton's letters to his sister surround Victor's story. This is a ___`,
            options: ['frame narrative', 'subplot', 'flashback', 'stage division']
          },
          {
            label: `"Reader, I married him." The narrator's address to the reader is typical of a ___ narrator`,
            options: ['retrospective first-person', 'third-person objective', 'omniscient', 'second-person']
          },
          {
            label: `Jane Bennet's courtship by Bingley runs beside Elizabeth's story with Darcy. Jane's story is a ___`,
            options: ['parallel plot', 'frame narrative', 'flashback', 'foil']
          }
        ],
        correctAnswers: ['frame narrative', 'retrospective first-person', 'parallel plot'],
        hint1: 'An outer story contains an inner one.',
        hint2: 'An adult Jane looks back on her life and speaks to us.',
        hint3: 'A second line of action that mirrors the main one.',
        explanation: 'Walton\'s letters frame the inner narratives; Jane narrates her past in the first person from a later vantage point; and the Jane–Bingley story is a parallel plot that mirrors Elizabeth and Darcy\'s.'
      }
    },
    {
      id: 'englitlo3-parallel',
      type: 'text' as const,
      content: `
## Parallel Plots

A **parallel plot** (or subplot) runs beside the main action and invites comparison. The reader learns from the *differences* between the lines.

| Novel | Main plot | Parallel | What the comparison shows |
|---|---|---|---|
| *Pride and Prejudice* | Elizabeth and Darcy | Jane and Bingley | Two couples kept apart by pride, prejudice and interference; one couple's obstacle is external, the other's is in their own judgment |
| *Pride and Prejudice* | Elizabeth and Darcy | Lydia and Wickham | A marriage made in haste and patched up with money: the negative image of a marriage built on understanding |
| *Great Expectations* | Pip's love for Estella | Miss Havisham's broken engagement, learned in Chapter 22 | A rejected love can freeze a life; Pip risks repeating her story |

Parallel plots let a novelist make an argument without stating it. Austen never says that marriage for passion alone is dangerous; Lydia's elopement shows it.
`
    },
    {
      id: 'englitlo3-pacing',
      type: 'text' as const,
      content: `
## Scene, Summary and Pacing

| Mode | What it does | Typical signals |
|---|---|---|
| **Scene** | Narrates a moment closely, with dialogue and detail; reading time is close to story time | Quoted speech, gestures, specific setting |
| **Summary** | Compresses days or years into a few sentences | Phrases such as *for several years*, lists of routine |
| **Ellipsis** | Skips time entirely | Chapter breaks, phrases such as *some months later* |

**Pacing** is the rhythm created by mixing these modes. Where a novel slows down, it is telling you what matters.

Jane Eyre announces her own pacing at the start of Chapter 10:

> Hitherto I have recorded in detail the events of my insignificant existence: to the first ten years of my life I have given almost as many chapters. But this is not to be a regular autobiography: I am only bound to invoke Memory where I know her responses will possess some degree of interest; therefore I now pass a space of eight years almost in silence: a few lines only are necessary to keep up the links of connection.
> 
> — Charlotte Brontë, *Jane Eyre*, 1847

Ten years get nearly ten chapters; the next eight get "a few lines." The choice tells us that the novel cares about the moments that **form** Jane (the red-room, Lowood's cruelty, a friend's death) and about her adult life to come, not about routine. "Not... a regular autobiography" also reminds us that a narrator's selection is an act of shaping, not neutral recording.

> 🔑 **AP Connection:** Section I questions often ask about "the function of" a paragraph or a shift, or how a passage "is organized." For a novel excerpt, ask: Is this scene or summary? Where does time speed up or slow down? Is the narrator looking back? Those observations turn quickly into answers about emphasis and effect.
`
    },
    {
      id: 'englitlo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In the passage beginning "Hitherto I have recorded in detail," the narrator's decision to "pass a space of eight years almost in silence" primarily serves to`,
            options: [
              `hide a painful secret about Lowood that is revealed later`,
              `suggest that Jane remembers nothing of her years at school`,
              `signal that the story values formative moments over routine`,
              `show that Jane has grown tired of writing her autobiography`
            ],
            correctAnswer: 2,
            explanation: `She explains that she will "invoke Memory" only where it has "interest," so the summary marks the eight years as routine compared with the formative childhood scenes. Nothing is hidden, her memory is not failing, and she is not weary of the task.`
          },
          {
            question: `The phrase "the long chain of iron or gold, of thorns or flowers" in Chapter 9 of *Great Expectations* is best described as`,
            options: [
              `a metaphor for how one event binds a life`,
              `a literal description of Miss Havisham's jewels`,
              `a symbol of the convict's leg-iron and his crime`,
              `an image of Joe's work as a smith at the forge`
            ],
            correctAnswer: 0,
            explanation: `The chain stands for the sequence of events that follows from "the first link on one memorable day," and its paired materials leave open whether those consequences are good or bad. It is not literal jewelry, and the context is the narrator's reflection on any life, not the convict's iron or Joe's trade.`
          },
          {
            question: `Austen's parallel story of Lydia and Wickham most likely functions to`,
            options: [
              `offer a hasty marriage as a contrast to understanding`,
              `prove that Wickham has reformed by the novel's end`,
              `delay the story so that each volume is the same length`,
              `show that Lydia is the most sensible of the sisters`
            ],
            correctAnswer: 0,
            explanation: `Lydia's elopement, rescued only by money, is a negative image of the marriage Elizabeth and Darcy reach through self-knowledge. Wickham does not reform, the subplot does more than fill space, and Lydia is the least sensible sister.`
          }
        ]
      }
    }
  ]
}
