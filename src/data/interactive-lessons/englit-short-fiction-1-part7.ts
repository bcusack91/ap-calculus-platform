export const englitShortFiction1Part7Data = {
  topicSlug: 'englit-short-fiction-1',
  sections: [
    {
      id: 'englitsh7-intro',
      type: 'text' as const,
      content: `
# 🧾 Short Fiction I

**Part 7 of 7 — Unit 1 Synthesis: Reading a New Story with the Whole Toolkit**

---

| Section |
|---------|
| 📖 The Unit 1 Toolkit |
| A Reading Workflow for Unseen Passages |
| Practice Passage: "Young Goodman Brown" |
| Annotating by Big Idea |
| From Annotation to Claim |
| Mixed Review |

> 🔑 **Key Concept:** On the exam, you meet passages you have never seen. The skills from this unit work together: details reveal **character**, **setting** creates pressure, **structure** orders discovery, the **narrator** controls what you know, and your **argument** connects them to meaning.
`
    },
    {
      id: 'englitsh7-toolkit',
      type: 'text' as const,
      content: `
## 📖 The Unit 1 Toolkit

| Big idea | Skill | Core question | Where this lesson taught it |
|---|---|---|---|
| Character | 1.A | What do specific details reveal about a character's traits, perspective and motives? | Part 2: Mrs. Mallard; the boy in "Araby" |
| Setting | 2.A | Which details convey time, place and the values of that world? | Part 3: the open window; North Richmond Street |
| Structure | 3.A, 3.B | How does the plot order events, and what does that order accomplish? | Part 4: the hour's reversal; the chain of delays |
| Narration | 4.A, 4.B | Who tells the story, from what distance, and with what effect? | Part 5: retrospective "I"; third-person limited; an ironic narrator |
| Literary argumentation | 7.A | Can you write a claim and defend it with evidence and commentary? | Part 6: three paragraphs on one passage |

Part 1's ideas run through all of these. **Compression** means small details carry weight. **Character revelation** happens in brief moments of pressure. **Ending effect** asks how the final movement reframes everything before it.

## A Reading Workflow for Unseen Passages

1. **First read: the situation.** Who is here, where, and what is happening? Do not annotate yet.
2. **Second read: annotate by big idea.** Mark character details, setting details, shifts in time or tone, and narrator comments.
3. **Find a pattern or tension.** Look for repetition, contrast or a detail that does not fit.
4. **Ask "so what?"** What does the pattern suggest about a character, a relationship or an idea?
5. **Write a claim** that names the technique and the meaning together.
`
    },
    {
      id: 'englitsh7-passage',
      type: 'text' as const,
      content: `
## Practice Passage: "Young Goodman Brown"

> Young Goodman Brown came forth at sunset into the street at Salem village; but put his head back, after crossing the threshold, to exchange a parting kiss with his young wife. And Faith, as the wife was aptly named, thrust her own pretty head into the street, letting the wind play with the pink ribbons of her cap while she called to Goodman Brown.
>
> "Dearest heart," whispered she, softly and rather sadly, when her lips were close to his ear, "prithee put off your journey until sunrise and sleep in your own bed to-night. A lone woman is troubled with such dreams and such thoughts that she's afeard of herself sometimes. Pray tarry with me this night, dear husband, of all nights in the year."
>
> "My love and my Faith," replied young Goodman Brown, "of all nights in the year, this one night must I tarry away from thee. My journey, as thou callest it, forth and back again, must needs be done 'twixt now and sunrise. What, my sweet, pretty wife, dost thou doubt me already, and we but three months married?"
>
> ...
>
> So they parted; and the young man pursued his way until, being about to turn the corner by the meeting-house, he looked back and saw the head of Faith still peeping after him with a melancholy air, in spite of her pink ribbons.
>
> — Nathaniel Hawthorne, "Young Goodman Brown," 1835

*Glossary:* "Goodman" was a courtesy title for an ordinary man in colonial New England; "prithee" means "I pray you"; "tarry" means stay.
`
    },
    {
      id: 'englitsh7-annotate',
      type: 'text' as const,
      content: `
## Annotating by Big Idea

| Big idea | Details | What they suggest |
|---|---|---|
| **Character** | Brown "put his head back" for a kiss; Faith whispers "softly and rather sadly" | Affection on both sides, but Brown is already half out the door |
| **Character** | "dost thou doubt me already, and we but three months married?" | Brown answers her fear with a question, which deflects rather than reassures |
| **Setting** | "at sunset," "after crossing the threshold" | He leaves at the edge of night and at the edge of home: the timing and the doorway both mark a boundary |
| **Setting** | "Salem village," the "meeting-house" | A Puritan community whose church stands at the corner he turns |
| **Structure** | The passage ends with Brown looking back | A last glance before the journey; the story is arranged around leaving and returning |
| **Narration** | "Faith, as the wife was aptly named" | A narrator who comments on names, inviting readers to read Faith as more than a person |
| **Figurative detail** | The "pink ribbons," mentioned three times in the opening scene | A repeated, cheerful detail that clashes with her "melancholy air" |

### The Pattern

The passage keeps placing Brown at a **boundary**: the threshold, sunset, the corner by the meeting-house. Each time, he looks back at Faith and then goes on. Combined with the narrator's hint that her name is "apt," the pattern suggests that leaving his wife is also leaving something she stands for.
`
    },
    {
      id: 'englitsh7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set: "Young Goodman Brown"** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The narrator's remark that Faith was "aptly named" primarily serves to`,
            options: [
              `explain that her parents were devout members of the Salem congregation`,
              `invite readers to see her as standing for something beyond herself`,
              `suggest that Brown chose to marry her mainly because of her name`,
              `establish that the narrator is a member of the Brown household`
            ],
            correctAnswer: 1,
            explanation: `Calling the name "apt" points readers toward the meaning of the word itself, so leaving Faith can also mean leaving faith. Her parents and Brown's reasons for marrying are never mentioned, and the narrator is not a character in the household.`
          },
          {
            question: `Brown's reply repeats Faith's phrase "of all nights in the year." The repetition chiefly`,
            options: [
              `turns her plea into his refusal`,
              `shows that he did not hear her`,
              `proves that he shares her dreams`,
              `mocks her fear of being alone at night`
            ],
            correctAnswer: 0,
            explanation: `Faith asks him to stay "of all nights in the year"; he uses the same words to insist he must go. He clearly heard her, he does not share or describe her dreams, and his tone is tender rather than mocking.`
          },
          {
            question: `The final image of Faith "peeping after him with a melancholy air, in spite of her pink ribbons" most directly emphasizes`,
            options: [
              `her relief that Brown has finally left on his errand`,
              `the village's disapproval of her colorful clothing`,
              `a sadness that her cheerful appearance cannot hide`,
              `Brown's failure to notice that she is watching him`
            ],
            correctAnswer: 2,
            explanation: `"In spite of" sets her bright ribbons against her melancholy, so her sadness shows through the cheerful detail. Nothing suggests relief or village disapproval, and Brown does notice her, since he "looked back and saw" her.`
          }
        ]
      }
    },
    {
      id: 'englitsh7-claim',
      type: 'text' as const,
      content: `
## From Annotation to Claim

The annotations become an argument when you connect two big ideas to a meaning.

| Draft | Problem or strength |
|---|---|
| "Hawthorne uses setting and characterization in this passage." | Names techniques but makes no claim |
| "Brown leaves his wife to go on a journey." | Summary |
| "Hawthorne uses repeated boundaries, the threshold, sunset and the corner by the meeting-house, to suggest that Brown's departure from his wife is also a departure from the faith she represents, one he makes while still looking back." | Defensible: ties setting and narration to an interpretation, and notices the tension of looking back |

The strong claim does three things the earlier drafts do not: it chooses a **pattern** (boundaries), links it to a **meaning** (leaving faith), and keeps a **tension** (he looks back even as he goes). That last move is the kind of complexity that can later contribute to Row C.

Just after this passage, Brown enters the forest on "a dreary road, darkened by all the gloomiest trees of the forest, which barely stood aside to let the narrow path creep through, and closed immediately behind." The setting extends the pattern: the village and the doorway were boundaries he could look back across; the forest closes behind him.
`
    },
    {
      id: 'englitsh7-input',
      type: 'input-boxes' as const,
      content: `
**Unit 1 Vocabulary Check** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `The feeling a passage creates in the reader, as distinct from the time and place of the story`,
            answer: 'mood',
            acceptableAnswers: ['the mood']
          },
          {
            question: `Characterization in which the reader infers a trait from speech, action or thought rather than being told it`,
            answer: 'indirect',
            acceptableAnswers: ['indirect characterization']
          },
          {
            question: `The irony in which readers know something the characters do not, as with the doctors' verdict in "The Story of an Hour"`,
            answer: 'dramatic irony',
            acceptableAnswers: ['dramatic']
          }
        ],
        hint1: 'Setting can help create it, but it lives in the reader.',
        hint2: 'The opposite of a narrator naming the trait outright.',
        hint3: 'The same term is used for drama, where the audience knows more than the characters.',
        explanation: 'Mood is the reader\'s felt response; indirect characterization lets readers infer traits; and dramatic irony is the gap between what readers know and what characters know.'
      }
    },
    {
      id: 'englitsh7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In context, the forest path that "closed immediately behind" Brown most likely suggests that`,
            options: [
              `the forest is easier to cross than he expected`,
              `his journey will be difficult to undo`,
              `other travelers have recently used the path`,
              `he has taken a wrong turn out of the village`
            ],
            correctAnswer: 1,
            explanation: `A path that shuts behind him implies that the way back is cut off, so the journey may be irreversible. The road is "dreary" and "narrow," not easy, and nothing indicates other travelers or a wrong turn.`
          },
          {
            question: `A student writes, "The setting of 'Araby' is Dublin." Which revision best moves this sentence toward analysis?`,
            options: [
              `Adding the date when "Araby" was published`,
              `Explaining how the "blind" street mirrors the boy's lack of outlet`,
              `Listing every street named in the story`,
              `Describing what Dublin is like today`
            ],
            correctAnswer: 1,
            explanation: `Analysis connects a setting detail to meaning, here the dead-end street and the boy's trapped longing. Dates, street lists and modern Dublin add information without interpretation.`
          },
          {
            question: `Which of the following best describes what "The Story of an Hour," "Araby" and the opening of "Young Goodman Brown" have in common?`,
            options: [
              `All three use a first-person narrator who looks back on youth`,
              `Each ends with a character returning home contented`,
              `Each uses setting details to signal a character's inner state`,
              `Each relies mainly on dialogue to reveal its central conflict`
            ],
            correctAnswer: 2,
            explanation: `The open window, the blind street and the threshold at sunset all reflect what is happening inside a character. Only "Araby" has a first-person narrator, none ends in contented return, and all three rely more on narration than dialogue.`
          }
        ]
      }
    }
  ]
}
