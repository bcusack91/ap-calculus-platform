export const englitPoetry2Part7Data = {
  topicSlug: 'englit-poetry-2',
  sections: [
    {
      id: 'englitpo7-intro',
      type: 'text' as const,
      content: `
# 🌙 Poetry Analysis II

**Part 7 of 7 — Unit 5 Synthesis: Reading a Hard Poem Whole**

---

| Section |
|---------|
| 📖 The Unit 5 Toolkit |
| Practice Poem: Hopkins's "Spring and Fall" |
| Annotating Layer by Layer |
| From Annotation to Argument |
| Mixed Review |

> 🔑 **Key Concept:** Unit 5 asks you to read poems whose difficulty lies in their language: compressed syntax, invented words, figures that carry an argument. The skills from Parts 2-6 work together. This part runs all of them on one demanding poem.
`
    },
    {
      id: 'englitpo7-toolkit',
      type: 'text' as const,
      content: `
## 📖 The Unit 5 Toolkit

| Part | Skill | Question to ask |
|---|---|---|
| 2 | Speaker and persona (4.A, 4.C) | Who speaks, to whom, and what does the speaker reveal, intended or not? |
| 3 | Syntax (4.C, 5.B) | Where is the main clause? Where does the sentence pattern change? |
| 4 | Extended figures (6.B, 6.C) | Which comparison is sustained, and what does the whole figure argue? |
| 5 | Symbol, allusion, irony (5.C, 6.D) | What do concrete details suggest beyond themselves? What outside text is invoked? |
| 6 | Complexity (Row C) | Which two pulls does the poem hold together? |

### A Reading Sequence for a Difficult Poem

1. **Paraphrase first.** Untangle the syntax into plain prose, sentence by sentence.
2. **Identify speaker, listener and situation.**
3. **Mark the turn**, the moment the argument or feeling shifts.
4. **Gloss strange words.** Invented or archaic words are deliberate; work out what each contributes.
5. **Follow the figures and the title.**
6. **Name the tension**, then build a thesis around it.
`
    },
    {
      id: 'englitpo7-poem',
      type: 'text' as const,
      content: `
## Practice Poem: Hopkins's "Spring and Fall"

Gerard Manley Hopkins wrote this poem in 1880; it was published in 1918, decades after his death. The accent marks are his own. They show where he wanted the stress to fall.

> Spring and Fall:
> to a young child
>
> MÁRGARÉT, áre you gríeving
> Over Goldengrove unleaving?
> Leáves, like the things of man, you
> With your fresh thoughts care for, can you?
> Áh! ás the heart grows older
> It will come to such sights colder
> By and by, nor spare a sigh
> Though worlds of wanwood leafmeal lie;
> And yet you wíll weep and know why.
> Now no matter, child, the name:
> Sórrow's spríngs áre the same.
> Nor mouth had, no nor mind, expressed
> What heart heard of, ghost guessed:
> It is the blight man was born for,
> It is Margaret you mourn for.
>
> — Gerard Manley Hopkins, "Spring and Fall," written 1880, *Poems*, 1918

### Glossary

| Word | Meaning |
|---|---|
| Goldengrove | A grove of trees turned gold in autumn; also suggests a lost golden age or paradise |
| unleaving | Hopkins's coinage: losing its leaves |
| wanwood | Coinage: pale ("wan"), dying woods |
| leafmeal | Coinage on the model of "piecemeal": leaf by leaf |
| ghost | Spirit or soul (older sense) |
| blight | A disease that withers plants; any ruinous condition |
`
    },
    {
      id: 'englitpo7-layers',
      type: 'text' as const,
      content: `
## Annotating Layer by Layer

**Layer 1: Paraphrase.** Margaret, are you grieving because the golden grove is losing its leaves? Can you, with your young mind, care about leaves as if they were human affairs? As you grow older you will meet such sights more coldly and will not sigh even when whole forests of pale trees lie leaf by leaf on the ground. Yet you *will* weep, and know why. The name of the sorrow does not matter now; the source of all sorrow is the same. Neither speech nor thought has put into words what the heart has heard and the spirit has guessed: it is the blight humans are born for. It is yourself you mourn for.

**Layer 2: Speaker and listener.** An adult addresses a child by name. The address is tender ("child"), yet what he tells her is hard. The poem is an **apostrophe** to a listener who is present but too young to follow the argument.

**Layer 3: Syntax.** Lines 3-4 are **inverted**: "Leáves ... you / With your fresh thoughts care for, can you?" Normal order would be "Can you, with your fresh thoughts, care for leaves?" Putting "Leáves" first, with a stress mark, makes the leaves the object of all her attention. In lines 12-13 the syntax compresses again: "Nor mouth had, no nor mind, expressed / What heart heard of, ghost guessed." The halting sentence enacts its meaning: this is knowledge the mind cannot articulate.

**Layer 4: The turn.** The first eight lines predict that she will grow "colder." Line 9 reverses: "And yet you wíll weep and know why." The stressed "wíll" insists. Her tears will return, but with knowledge.

**Layer 5: Figures and title.** "Leáves, like the things of man" is a simile that makes the fall of leaves an image of human mortality. The title works on two levels. **Spring** is Margaret's youth and **Fall** is autumn, but "Fall" is also an **allusion** to the biblical Fall of humankind in Genesis, which in Christian teaching brought death into the world. "The blight man was born for" completes the allusion. Hopkins was a Jesuit priest, so the theological sense is hard to ignore.

**Layer 6: The tension.** The poem consoles and refuses to console. The speaker is gentle, yet his message is that her grief is for her own death. The last line lands on her name: "It is Margaret you mourn for."

| Layer | Key evidence | Function |
|---|---|---|
| Speaker | "child," "Márgarét" | Tender address that frames a hard truth |
| Syntax | Inversion of lines 3-4; compressed lines 12-13 | The mind straining to say what the heart knows |
| Shift | "And yet you wíll weep" (line 9) | Prediction of coldness reversed into knowing grief |
| Diction | "unleaving," "wanwood," "leafmeal" | Invented words that make decay feel gradual and total |
| Allusion | "Fall," "blight man was born for" | Natural autumn joined to human mortality and original sin |
`
    },
    {
      id: 'englitpo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reading** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The speaker's attitude toward Margaret is best described as`,
            options: [
              `gentle but unflinching`,
              `impatient and dismissive`,
              `envious of her innocence`,
              `amused by her childish grief`
            ],
            correctAnswer: 0,
            explanation: `He addresses her tenderly ("child") while telling her that her grief is really for her own mortality. He never dismisses or mocks her tears, and nothing in the poem suggests envy.`
          },
          {
            question: `The inverted syntax of lines 3-4 ("Leáves ... you / With your fresh thoughts care for, can you?") primarily serves to`,
            options: [
              `make the leaves a symbol of the speaker's own lost youth`,
              `set the leaves first, as the center of her attention`,
              `suggest that the speaker cannot remember the child's name`,
              `create a cheerful rhythm that lightens the poem's mood`
            ],
            correctAnswer: 1,
            explanation: `Fronting "Leáves," with Hopkins's stress mark, places the object of her grief at the head of the sentence, followed by her wonder that she can care so much. The leaves stand for human mortality generally, the speaker uses her name, and the rhythm is not cheerful.`
          },
          {
            question: `The word "Fall" in the title most likely refers to`,
            options: [
              `autumn and the biblical Fall that brought death`,
              `the season and Margaret's stumble in the grove`,
              `spring's end and the speaker's loss of authority`,
              `falling leaves and a family's fall from rank`
            ],
            correctAnswer: 0,
            explanation: `The poem is set in autumn, and "the blight man was born for" recalls the Fall of humankind in Genesis, which in Christian teaching brought mortality. No stumble, loss of authority or fall in social rank appears in the poem.`
          }
        ]
      }
    },
    {
      id: 'englitpo7-argument',
      type: 'text' as const,
      content: `
## From Annotation to Argument

**Thesis.** "In addressing a grieving child, Hopkins pairs a tender voice with a hard theological truth: through inverted syntax, invented words of decay and the double meaning of 'Fall,' the poem consoles Margaret only by showing her that every sorrow is grief for her own mortality."

**Line of reasoning.**
1. The tender apostrophe and the child's misplaced grief (lines 1-4).
2. The prediction of adult coldness, reversed at "And yet you wíll weep" (lines 5-9).
3. The compressed syntax and the allusion of the ending: the "blight man was born for" (lines 10-15).

**Row C opportunity.** Account for an alternative: is the poem cruel, telling a child she will die? One answer: the speaker's tenderness and the poem's certainty that "Sórrow's spríngs áre the same" join Margaret's tears to all human grief, so the truth is offered as fellowship rather than as a wound.

### Common Misconceptions on Difficult Poems

- **"If I cannot paraphrase every line, I should not write about the poem."** Paraphrase the lines you can, and build your argument on them. Partial clarity used well beats confusion everywhere.
- **"Invented words are errors or nonsense."** Coinages are choices. "Leafmeal" teaches you its meaning by analogy with "piecemeal."
- **"The speaker must be the poet."** Even when biography fits (Hopkins was a priest), write "the speaker."

> 🔑 **AP Connection:** Section I poetry sets often include a question that asks you to paraphrase a hard line ("lines 12-13 are best paraphrased as"). Rebuild the sentence in normal order, find the subject and verb, and then check your paraphrase against the poem's overall argument.
`
    },
    {
      id: 'englitpo7-input',
      type: 'input-boxes' as const,
      content: `
**Unit 5 Terms** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `A poem spoken by one character to a silent listener, revealing more than the speaker intends`,
            answer: 'dramatic monologue',
            acceptableAnswers: ['a dramatic monologue', 'monologue']
          },
          {
            question: `Reversing normal word order, as in "Leáves ... you ... care for"`,
            answer: 'inversion',
            acceptableAnswers: ['anastrophe', 'syntactic inversion']
          },
          {
            question: `A sustained story in which characters and places consistently stand for abstract ideas`,
            answer: 'allegory',
            acceptableAnswers: ['an allegory']
          }
        ],
        hint1: 'Browning\'s "My Last Duchess" is the model example.',
        hint2: 'From Part 3\'s syntax toolkit.',
        hint3: 'Bunyan\'s The Pilgrim\'s Progress is the classic example.',
        explanation: 'A dramatic monologue reveals a character through one-sided speech, inversion rearranges word order for emphasis, and allegory carries a second meaning through a whole narrative.'
      }
    },
    {
      id: 'englitpo7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Lines 12-13 ("Nor mouth had, no nor mind, expressed / What heart heard of, ghost guessed") are best paraphrased as`,
            options: [
              `Margaret has told the speaker what she heard in the grove.`,
              `Neither speech nor thought has said what the heart and soul sense.`,
              `The speaker refuses to tell Margaret what the ghost revealed.`,
              `No heart has ever grieved for the leaves as Margaret's has.`
            ],
            correctAnswer: 1,
            explanation: `Rebuilt in normal order, the lines say that no mouth and no mind has expressed what the heart heard and the spirit ("ghost") guessed. Margaret says nothing, "ghost" means spirit rather than an apparition with secrets, and the lines concern unspoken knowledge, not the uniqueness of her grief.`
          },
          {
            question: `Which pair of poems from this unit both use apostrophe to address something or someone who does not answer?`,
            options: [
              `"Death be not proud" and "The Sick Rose"`,
              `"My Last Duchess" and "Up-Hill"`,
              `"Up-Hill" and "Because I could not stop for Death"`,
              `"Because I could not stop for Death" and "My Last Duchess"`
            ],
            correctAnswer: 0,
            explanation: `Donne addresses Death ("Death be not proud") and Blake addresses the flower ("O rose, thou art sick!"), and neither replies. Browning's envoy is a present listener, "Up-Hill" is a dialogue with replies, and Dickinson's speaker narrates rather than addresses Death.`
          },
          {
            question: `What do "My Last Duchess" and "Spring and Fall" have in common?`,
            options: [
              `Both address a listener who shapes the speech.`,
              `Both use an extended conceit drawn from science.`,
              `Both rely on an allusion to a Roman poet.`,
              `Both end with the speaker pleading for forgiveness.`
            ],
            correctAnswer: 0,
            explanation: `The Duke responds to his visitor's unspoken questions, and Hopkins's speaker shapes his words to a grieving child. Neither uses a scientific conceit (that is Donne), neither alludes to a Roman poet (that is Owen), and neither speaker asks forgiveness.`
          }
        ]
      }
    }
  ]
}
