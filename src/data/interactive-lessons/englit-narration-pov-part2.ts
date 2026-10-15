export const englitNarrationPovPart2Data = {
  topicSlug: 'englit-narration-pov',
  sections: [
    {
      id: 'englitna2-intro',
      type: 'text' as const,
      content: `
# 👁️ Narration and Point of View

**Part 2 of 7 — The Point-of-View Toolkit: Person and Access**

---

| Section |
|---------|
| 📖 Two Questions, Not One |
| First Person: Protagonist or Witness |
| Second Person, and the "You" That Isn't |
| Third Person: How Much Access? |
| What Each Choice Buys |

> 🔑 **Key Concept:** A point-of-view label answers two separate questions. **Grammatical person** asks who is telling: an "I," a "you," or a voice outside the story that says "he" and "she." **Access** asks how far that teller can see: into one mind, many minds or none. Skill **4.A** asks you to identify and describe the narrator; Skill **4.B** asks you to explain what the point of view lets a reader know and feel. Short Fiction I introduced the four basic labels. This part takes them apart so you can describe any narrator precisely.
`
    },
    {
      id: 'englitna2-grid',
      type: 'text' as const,
      content: `
## 📖 Two Questions, Not One

Treat point of view as a grid. Person is one axis; access is the other.

| | Access to one mind | Access to many minds | No access to minds |
|---|---|---|---|
| **First person** ("I") | The narrator's own mind (the normal case) | Only by report, guess or invention: "I learned later that she had..." | A narrator who reports and refuses to say what he felt (rare) |
| **Second person** ("you") | The "you" character's mind | Very rare | Very rare |
| **Third person** ("he," "she") | **Limited**: one character's thoughts | **Omniscient**: any character's thoughts, plus knowledge no character has | **Objective**: only what could be seen and heard |

Two consequences follow:

1. **Person does not settle access.** A first-person narrator can know only her own mind directly. Everything she says about anyone else's thoughts is inference, and the text often shows the seams ("I take it," "I suppose," "it seemed to me").
2. **Access can change within a novel.** Many third-person novels stay close to one character for chapters and then pull back to survey a whole town. Describe the point of view **of the passage in front of you**, not of the book in general.

> 💡 A precise description names both axes: "a first-person witness narrator," "a third-person narrator limited to Emma's view," "an intrusive omniscient narrator."
`
    },
    {
      id: 'englitna2-firstperson',
      type: 'text' as const,
      content: `
## First Person: Protagonist or Witness

A first-person narrator is either the **protagonist** (the story is about the "I") or a **witness** (the "I" watches someone else's story). Some narrators slide from one role to the other.

### Ishmael: a protagonist who becomes a witness

> Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.
>
> — Herman Melville, *Moby-Dick*, 1851

The opening is all Ishmael: his poverty, his boredom, his offhand voice ("never mind how long precisely"). But once the *Pequod* sails, the center of the story becomes Captain Ahab, and Ishmael becomes one voice in a crew:

> I, Ishmael, was one of that crew; my shouts had gone up with the rest; my oath had been welded with theirs; and stronger I shouted, and more did I hammer and clinch my oath, because of the dread in my soul. A wild, mystical, sympathetical feeling was in me; Ahab's quenchless feud seemed mine.

"Seemed" is the retrospective narrator's word. The young sailor felt the feud as his own; the older teller knows it was borrowed. And he shouted louder "because of the dread in my soul," a motive a crowd never sees. The witness position lets Melville show Ahab's power from inside the crowd he sways.

### Watson: a witness who admires

> To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler.
>
> — Arthur Conan Doyle, "A Scandal in Bohemia," 1891 (collected in *The Adventures of Sherlock Holmes*, 1892)

Watson cannot enter Holmes's mind, so he reports what he has heard ("I have seldom heard him mention her") and what he concludes. A few lines later he calls Holmes "the most perfect reasoning and observing machine that the world has seen," and hedges it with "I take it." Watson's admiration shapes everything we see of Holmes, and his limited access is what keeps Holmes mysterious.

### Comparing the two roles

| | Protagonist narrator | Witness narrator |
|---|---|---|
| Whose story? | The narrator's own | Someone else's, seen from nearby |
| Access | The narrator's mind; others only by inference | The narrator's mind; the central figure only from outside |
| Typical effect | Intimacy, self-justification, growth seen from within | Mystery or grandeur around the central figure; the narrator's values color the portrait |
| Examples | Huck Finn; Pip in *Great Expectations* | Watson; Lockwood and Nelly Dean in *Wuthering Heights*; Nick Carraway in *The Great Gatsby* |
`
    },
    {
      id: 'englitna2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In the opening of *Moby-Dick*, the aside "never mind how long precisely" most nearly suggests that the narrator`,
            options: [
              `cares more about his mood and motive than exact facts`,
              `has forgotten the voyage after so many years`,
              `is hiding the date to avoid blame for the wreck`,
              `wants the reader to work out the date from later clues`
            ],
            correctAnswer: 0,
            explanation: `The breezy aside waves away the date because what matters to Ishmael is why he went to sea. Nothing suggests he has forgotten the voyage, that he fears blame, or that he plants clues to the year.`
          },
          {
            question: `Watson's phrase "I take it," attached to his praise of Holmes as a reasoning machine, primarily signals that`,
            options: [
              `Watson has read Holmes's private notes on the case`,
              `Watson is judging his friend from outside, by inference`,
              `Watson secretly doubts that Holmes is a skilled detective`,
              `Watson is repeating what Holmes has said about himself`
            ],
            correctAnswer: 1,
            explanation: `A witness narrator has no access to the central figure's mind, so Watson's portrait is his own conclusion, and "I take it" marks it as one. He has not read private notes, his tone is admiring rather than doubtful, and he is not quoting Holmes.`
          },
          {
            question: `Which of the following best distinguishes a witness narrator from a protagonist narrator?`,
            options: [
              `The witness speaks in the third person, not the first`,
              `The witness can enter the minds of other characters`,
              `The witness narrates events as they happen, not afterward`,
              `The witness tells a story that centers on someone else`
            ],
            correctAnswer: 3,
            explanation: `Both kinds say "I"; the difference is whose story it is. A witness has no special access to other minds and, like Ishmael or Watson, often tells events long afterward.`
          }
        ]
      }
    },
    {
      id: 'englitna2-second',
      type: 'text' as const,
      content: `
## Second Person, and the "You" That Isn't

**Second-person narration** makes "you" the character who acts: *You read the letter twice before you let yourself believe it.* (This example sentence is written for this lesson.) It is rare in novels. Two well-known modern examples are Jay McInerney's *Bright Lights, Big City* (1984) and Italo Calvino's *If on a winter's night a traveler* (1979). Its effects:

- It pulls the reader into the action, sometimes uncomfortably.
- It can sound like a character talking to himself, split between the one who acts and the one who watches.

Do not confuse second-person narration with a first-person narrator who **addresses** someone. Huck Finn opens:

> You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter.
>
> — Mark Twain, *Adventures of Huckleberry Finn*, 1884

The "you" here is the **narratee**, the listener the narrator imagines. Huck is still the "I" who acts. Narratees matter: a narrator who is confessing, boasting or pleading to someone tells the story differently.

## Third Person: How Much Access?

Here is one moment written six ways. All six sentences are written for this lesson so you can compare them.

| Point of view | The same moment |
|---|---|
| First-person protagonist | *I read the letter twice before I let myself believe it.* |
| First-person witness | *I watched my sister read the letter twice. She did not look up.* |
| **Intrusive omniscient** | *She read it twice, as we all read the news we have long feared, dear reader, and long wished for.* |
| **Effaced omniscient** | *She read it twice. In the next room her father, who had written it, sat listening for her step.* |
| **Third-person limited** | *She read it twice. It could not mean what it said; surely he would not leave now.* |
| **Objective** | *She read it twice. Then she folded it and set it on the sill.* |

| Third-person type | What it can do | Signals on the page |
|---|---|---|
| **Intrusive omniscient** | Knows every mind and steps forward to comment, generalize and address the reader | "I," "we," "reader"; general truths; moral asides |
| **Effaced omniscient** | Knows every mind but rarely calls attention to itself | Moves between characters' thoughts without an "I"; reports what no single character knows |
| **Limited** | Stays with one character's perceptions and thoughts | Only one mind is entered; others are read from outside |
| **Objective** | Reports only what a camera and microphone could record | No thoughts; meaning carried by dialogue, gesture and detail. Ernest Hemingway's "Hills Like White Elephants" (1927) is the classic example. |

### An intrusive omniscient narrator: Thackeray

Thackeray opens *Vanity Fair* with a preface in which the narrator steps on stage as a showman:

> As the manager of the Performance sits before the curtain on the boards and looks into the Fair, a feeling of profound melancholy comes over him in his survey of the bustling place.
>
> — William Makepeace Thackeray, *Vanity Fair*, 1847-48

He calls his characters "Puppets" (the "Becky Puppet," the "Amelia Doll") and promises to "shut up the box" at the end. An intrusive narrator like this is a **character in his own right**: his melancholy, his irony and his judgments are part of what the novel offers. Part 3 looks at how such a narrator's comments reveal a perspective.
`
    },
    {
      id: 'englitna2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Narrator** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Watson telling the story of Holmes and Irene Adler is a first-person ___ narrator`,
            options: ['witness', 'protagonist', 'omniscient', 'objective']
          },
          {
            label: `Thackeray's "manager of the Performance," who comments on his "Puppets," is an ___ narrator`,
            options: ['intrusive omniscient', 'effaced omniscient', 'objective', 'limited']
          },
          {
            label: `A narrator who reports only dialogue, gestures and objects, entering no one's thoughts, is ___`,
            options: ['objective', 'limited', 'omniscient', 'second person']
          }
        ],
        correctAnswers: ['witness', 'intrusive omniscient', 'objective'],
        hint1: 'Whose story is Watson telling: his own, or someone else\'s?',
        hint2: 'This narrator knows everything and steps forward to say so.',
        hint3: 'Think of a camera and a microphone.',
        explanation: 'Watson narrates Holmes\'s story from beside him, so he is a witness. Thackeray\'s showman knows all and comments openly, which makes him intrusive omniscient. Narration with no access to any mind is objective.'
      }
    },
    {
      id: 'englitna2-tradeoffs',
      type: 'text' as const,
      content: `
## What Each Choice Buys

Every point of view gives the reader something and takes something away. Skill 4.B questions ask about exactly this trade.

| Choice | What the reader gains | What the reader loses | Question to ask in an essay |
|---|---|---|---|
| First-person protagonist | The texture of a mind; self-justification in its own words | Anything the narrator does not know, notice or admit | What does this narrator fail to see about himself? |
| First-person witness | A central figure seen with wonder or doubt | That figure's inner life | How do the witness's values color the portrait? |
| Second person | Uncomfortable closeness; the reader cast as actor | Distance and easy judgment | Who is "you," and why is the reader made to play that part? |
| Intrusive omniscient | Range, irony, a guiding moral voice | The illusion of an unmediated world | Do the narrator's comments confirm or complicate the scene? |
| Effaced omniscient | Knowledge across many minds without a visible guide | A single intimate center | What does the narrator know that no character knows? |
| Third-person limited | Closeness to one mind with some distance for irony | Other characters' motives | Where does the character's view stop matching the evidence? |
| Objective | A cool surface that makes the reader infer | Any direct access to feeling | What do gesture, silence and detail imply? |

### Precise descriptions earn more

| Vague | Precise |
|---|---|
| "The story is in first person." | "Watson narrates as an admiring witness who can only infer what Holmes feels." |
| "The narrator is omniscient." | "Thackeray's narrator steps forward as a melancholy showman who treats his characters as puppets." |
| "We see Ishmael's thoughts." | "The older Ishmael admits that Ahab's feud only 'seemed' his, exposing how a crowd's oath swallowed a frightened young man." |

> 🔑 **AP Connection:** Section I questions often ask you to identify the narrator ("The narrator is best described as...") or explain an effect ("The shift to the narrator's comment serves primarily to..."). Name both axes, person and access, and then say what the choice reveals or hides.
`
    },
    {
      id: 'englitna2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A novelist wants readers to share a character's mistaken beliefs until a late revelation. Which point of view best serves this aim?`,
            options: [
              `An intrusive omniscient narrator who comments on everyone`,
              `Objective narration that reports only speech and action`,
              `Third-person narration limited to that one character's view`,
              `A first-person witness who watches the character from outside`
            ],
            correctAnswer: 2,
            explanation: `Limiting the narration to the mistaken character lets readers see as that character sees, so the revelation surprises them too. An intrusive omniscient narrator could easily expose the error, objective narration gives no access to beliefs, and a witness sees the character only from outside.`
          },
          {
            question: `Thackeray's narrator calls himself "the manager of the Performance" and his characters "Puppets." This framing primarily serves to`,
            options: [
              `present the novel as a staged show watched from outside`,
              `suggest that the characters are based on real people`,
              `conceal the narrator's opinions of the characters`,
              `signal that Becky will narrate the novel herself`
            ],
            correctAnswer: 0,
            explanation: `A showman with puppets stands outside and above the action, inviting readers to watch the characters as performers in a moral spectacle. The image stresses artifice rather than real-life models, it advertises the narrator's opinions, and Becky is one of the puppets, not the teller.`
          },
          {
            question: `In "Ahab's quenchless feud seemed mine," the word "seemed" suggests that`,
            options: [
              `Ishmael secretly opposed the whale hunt from the very start`,
              `Ahab forced the men to swear an oath against their will`,
              `the older narrator sees his oath as a borrowed passion`,
              `Ishmael had a private grievance of his own against the whale`
            ],
            correctAnswer: 2,
            explanation: `The retrospective "seemed" separates the young sailor's feeling from the older teller's judgment: the feud felt like his, but it was Ahab's. He shouted with the crew rather than opposing the hunt, no force is described, and he names no grievance of his own.`
          }
        ]
      }
    }
  ]
}
