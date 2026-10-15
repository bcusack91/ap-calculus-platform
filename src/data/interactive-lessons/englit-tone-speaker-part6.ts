export const englitToneSpeakerPart6Data = {
  topicSlug: 'englit-tone-speaker',
  sections: [
    {
      id: 'englitto6-intro',
      type: 'text' as const,
      content: `
# 🗣️ Tone and Speaker

**Part 6 of 7 — Tone on the Exam**

---

| Section |
|---------|
| 📖 Attitude Questions in Section I |
| The Practice Passage: "Tintern Abbey" |
| Paired-Adjective Elimination |
| A Q1 Thesis That Traces a Tonal Shift |
| An Annotated Model Paragraph |

> 🔑 **Key Concept:** Tone appears on both halves of the exam. In Section I (55 multiple-choice questions in 60 minutes, 45% of the score, four choices each, in five sets) attitude questions are among the most common for poetry and prose alike. In Section II (three essays in 2 hours, 55% of the score), the poetry analysis and prose fiction analysis prompts very often ask about a speaker's or narrator's "complex attitude" or how a perspective changes. This part practices both on one passage.
`
    },
    {
      id: 'englitto6-stems',
      type: 'text' as const,
      content: `
## 📖 Attitude Questions in Section I

| Stem | What it really asks | First move |
|---|---|---|
| The speaker's attitude toward X is best described as | One or two attitude words, aimed at a named target | Find every line about X and name the attitude before reading the choices |
| The tone of lines A-B differs from that of lines C-D in that it is | The direction of a shift | Name both attitudes, then the marker between them |
| In context, the word X contributes to a tone of | Diction as a source of tone | Check the word's connotation in this sentence, not in general |
| The speaker's description of X conveys a sense of | Attitude built from detail and imagery | Ask what the speaker dwells on |
| The shift at line N is best described as a movement from | A from-to pair | Both halves must be right, in the right order |

### Three Rules for Tone Choices

1. **Predict first.** Cover the choices and write your own tone word in the margin. Then pick the closest match.
2. **Check the target.** The speaker may be tender toward a person and bitter toward a situation. A choice can name a real attitude in the passage and still be wrong because it is aimed at the wrong thing.
3. **Check the intensity.** If the speaker is wistful, "anguished" is too strong; if the speaker is enraged, "displeased" is too weak.
`
    },
    {
      id: 'englitto6-passage',
      type: 'text' as const,
      content: `
## The Practice Passage: "Tintern Abbey"

In this excerpt the speaker, revisiting the river Wye after five years, contrasts his boyhood response to nature with his present one.

> I cannot paint
> What then I was. The sounding cataract
> Haunted me like a passion: the tall rock,
> The mountain, and the deep and gloomy wood,
> Their colours and their forms, were then to me
> An appetite: a feeling and a love,
> That had no need of a remoter charm,
> By thought supplied, or any interest
> Unborrowed from the eye.—That time is past,
> And all its aching joys are now no more,
> And all its dizzy raptures. Not for this
> Faint I, nor mourn nor murmur: other gifts
> Have followed, for such loss, I would believe,
> Abundant recompence. For I have learned
> To look on nature, not as in the hour
> Of thoughtless youth, but hearing oftentimes
> The still, sad music of humanity,
> Not harsh nor grating, though of ample power
> To chasten and subdue. And I have felt
> A presence that disturbs me with the joy
> Of elevated thoughts; a sense sublime
> Of something far more deeply interfused,
> Whose dwelling is the light of setting suns,
> And the round ocean, and the living air,
> And the blue sky, and in the mind of man,
> A motion and a spirit, that impels
> All thinking things, all objects of all thought,
> And rolls through all things.
>
> — William Wordsworth, "Lines Written a Few Miles above Tintern Abbey," *Lyrical Ballads*, 1798

**Glossary:** *cataract* = waterfall; *recompence* = compensation (older spelling of "recompense"); *chasten* = restrain, discipline; *interfused* = spread through and mixed into.

### A Quick Tone Map

| Lines | Evidence | Attitude |
|---|---|---|
| "I cannot paint ... Unborrowed from the eye" | "Haunted me like a passion"; "An appetite" | Vivid, half-rueful memory of an intense, unthinking love |
| "That time is past ... dizzy raptures" | "aching joys are now no more" | Acknowledged loss; the words still ache |
| "Not for this ... Abundant recompence" | "Not for this / Faint I, nor mourn nor murmur"; "I would believe" | Determined consolation, hedged |
| "For I have learned ... To chasten and subdue" | "The still, sad music of humanity" | Sober, compassionate maturity |
| "And I have felt ... rolls through all things" | "a sense sublime"; "rolls through all things" | Exalted, reverent, almost ecstatic |
`
    },
    {
      id: 'englitto6-eliminate',
      type: 'text' as const,
      content: `
## Paired-Adjective Elimination

Many tone choices pair two adjectives. **Both must be true, of the right target, at the right intensity.** Test each word separately.

**Sample item:** The speaker's attitude toward the loss of his youthful passion for nature is best described as

| Choice | First word | Second word | Verdict |
|---|---|---|---|
| bitter and resentful | No: he blames no one | No: nothing is resented | Out |
| indifferent and dismissive | No: "aching joys" and "dizzy raptures" show he valued that time | No | Out |
| nostalgic and despairing | Plausible: he remembers it vividly | No: "Not for this / Faint I, nor mourn nor murmur" refuses despair | Out (half right) |
| **regretful yet consoled** | Yes: "now no more" | Yes: "Abundant recompence" | **Keep** |

The most tempting wrong answer is the half-right one. "Nostalgic" fits so well that students stop reading. Always test the second word.

**One step further (for your essay, not the multiple-choice item):** "I would believe" quietly qualifies the consolation. *I would believe* can mean *I am inclined to believe* or *I wish to believe*. Either way, the speaker presents compensation as something he chooses to trust rather than something he simply knows. That nuance is too fine for a multiple-choice answer, but it is exactly the kind of tension that earns Row C in an essay.
`
    },
    {
      id: 'englitto6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The tone of the lines beginning "For I have learned" differs from that of the lines describing the speaker's youth in that it is more`,
            options: [
              `sober and compassionate`,
              `playful and carefree`,
              `bitter and accusing`,
              `fearful and uncertain`
            ],
            correctAnswer: 0,
            explanation: `The mature speaker hears "The still, sad music of humanity," a sound with "ample power / To chasten and subdue," so his tone is sober and humane where his youth was hungry and passionate. Nothing in these lines is playful, bitter or afraid.`
          },
          {
            question: `In context, the description of nature as "An appetite" primarily suggests that the speaker's youthful love of nature was`,
            options: [
              `a habit he had learned from older poets`,
              `a physical craving that needed no reflection`,
              `a duty he performed out of moral obligation`,
              `a fear he disguised as admiration for scenery`
            ],
            correctAnswer: 1,
            explanation: `An appetite is bodily and immediate, and the next lines say it "had no need of a remoter charm, / By thought supplied." It is the opposite of a learned habit, a moral duty or a disguised fear.`
          },
          {
            question: `The repeated "And" in the final lines of the excerpt ("And the round ocean, and the living air, / And the blue sky") contributes to a tone of`,
            options: [
              `weariness`,
              `growing exaltation`,
              `cool scientific precision`,
              `impatient irritation with nature's endless sameness`
            ],
            correctAnswer: 1,
            explanation: `Each "And" adds another dwelling place of the "sense sublime," building toward "rolls through all things" with mounting wonder. The accumulation is energetic rather than weary, it is reverent rather than scientific, and nothing in it suggests irritation.`
          }
        ]
      }
    },
    {
      id: 'englitto6-prompt',
      type: 'text' as const,
      content: `
## A Q1 Thesis That Traces a Tonal Shift

**Practice prompt (written in the style of Question 1):** The following excerpt is from William Wordsworth's "Lines Written a Few Miles above Tintern Abbey," published in 1798. In the poem, the speaker returns to a landscape he last visited five years earlier. Read the excerpt carefully. Then, in a well-written essay, analyze how Wordsworth uses literary elements and techniques to convey the speaker's complex attitude toward the loss of his youthful relationship with nature.

In your response you should do the following: Respond to the prompt with a thesis that presents a defensible interpretation. Select and use evidence to support your line of reasoning. Explain how the evidence supports your line of reasoning. Use appropriate grammar and punctuation in communicating your argument.

### From Tone Word to Thesis

| Level | Thesis | Rubric |
|---|---|---|
| Restates the prompt | *Wordsworth uses literary elements and techniques to convey the speaker's complex attitude toward his youth.* | Row A: 0. No interpretation |
| Names a tone | *The speaker feels nostalgic about his youth.* | Row A: possibly 1 if defensible, but too thin to organize an essay |
| Traces a shift | *Through vivid memory and a turn to quieter imagery, the speaker moves from regret for his lost passion to gratitude for a mature understanding of nature.* | Row A: 1. Defensible, names a shift, implies a two-part line of reasoning |
| Traces a shift and its tension | *Though Wordsworth's speaker insists that maturity has repaid him for the lost raptures of youth, his hedged language and the sadness of what he now hears suggest a consolation he must choose to believe, so that his gratitude never fully silences his grief.* | Row A: 1, and it sets up Row C: the thesis holds a tension the essay can develop |

### A Line of Reasoning for the Strongest Thesis

1. The memory of youth is too vivid to be merely past: "Haunted," "appetite," "aching joys," "dizzy raptures."
2. The consolation is real but hedged: the triple denial "nor mourn nor murmur" and the qualifier "I would believe."
3. The gift itself carries sadness: "The still, sad music of humanity," which can "chasten and subdue."
4. The excerpt ends in exaltation, but that sublime "presence" also "disturbs," so even the highest gift is unsettling.

Each step is a body paragraph, and each traces one moment of the shift.
`
    },
    {
      id: 'englitto6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Score the Thesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"Wordsworth uses imagery, diction and syntax to show how the speaker feels about the past." For Row A this thesis ___`,
            options: ['earns no point', 'earns the point', 'earns Row C too', 'loses Row B points']
          },
          {
            label: `"The speaker moves from regret for his lost passion to gratitude for a quieter, more humane vision." This thesis is best described as ___`,
            options: ['defensible and traces a shift', 'plot summary of the poem', 'a list of devices only', 'too absolute to defend']
          },
          {
            label: `A thesis arguing that the speaker's gratitude is real but willed, so grief persists beneath it, best positions an essay for ___`,
            options: ['the sophistication point', 'a lower Row B score', 'a deduction for length', 'no thesis credit']
          }
        ],
        correctAnswers: ['earns no point', 'defensible and traces a shift', 'the sophistication point'],
        hint1: 'Does it make any claim the essay could argue?',
        hint2: 'It names two attitudes and the direction of change.',
        hint3: 'Row C rewards exploring a tension.',
        explanation: 'A list of devices with no interpretation does not earn Row A; naming a from-to movement makes a defensible thesis with a line of reasoning; and a thesis built on a tension gives the essay a route to Row C.'
      }
    },
    {
      id: 'englitto6-model',
      type: 'text' as const,
      content: `
## An Annotated Model Paragraph

> **(1)** Wordsworth's speaker insists that maturity has repaid him for the passion of his youth, but the language of that insistence shows a man persuading himself as much as reporting a fact. **(2)** He remembers his boyhood love of nature as "An appetite" and recalls its "aching joys" and "dizzy raptures," words so physical that the loss feels present even as he declares "That time is past." **(3)** His refusal to grieve then arrives as a chain of denials, "Not for this / Faint I, nor mourn nor murmur," and the need to rule out three separate kinds of grieving suggests how close grief remains. **(4)** Most revealing is the qualifier placed inside the consolation itself: other gifts have followed, "I would believe, / Abundant recompence." **(5)** Because "I would believe" can mean either *I am inclined to believe* or *I wish to believe*, the promised compensation becomes something the speaker chooses to trust rather than something he simply knows. **(6)** Even the gift is shadowed, since what he now hears is "The still, sad music of humanity," a consolation quieter and sadder than the raptures it replaces. **(7)** The tone is therefore neither simply grateful nor simply elegiac: the speaker's gratitude is sincere, but it is the gratitude of someone who knows exactly what it cost.

| Sentence | Job | Rubric link |
|---|---|---|
| (1) | Topic sentence: names the attitude and the tension within it | Line of reasoning (Row B); sets up Row C |
| (2) | Evidence of the loss, with commentary on why the diction keeps it alive | Row B: specific evidence plus explanation |
| (3) | Evidence of the denial, with commentary on what over-insistence reveals | Row B: commentary on syntax, not just a label |
| (4)-(5) | The hinge of the paragraph: a close reading of a two-word qualifier | Row B: explains *how* the evidence supports the claim |
| (6) | A further complication: the gift itself is sad | Develops rather than repeats |
| (7) | A precise, two-sided tone statement | Row C: complexity explored, not announced |

**What it avoids.** The paragraph never says *Wordsworth uses diction to create tone*. It never lists devices. Every tone word ("persuading himself," "shadowed," "sincere") is tied to a quotation and explained.
`
    },
    {
      id: 'englitto6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Scoring and Tone** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student's body paragraph quotes "aching joys" and "dizzy raptures" and then says, "These are examples of imagery that create a nostalgic tone." The paragraph's chief weakness is that it`,
            options: [
              `quotes more of the poem than a single paragraph needs`,
              `names a tone but never explains how the words produce it`,
              `uses a tone word more specific than the evidence supports`,
              `leaves out the date and the title of the poem it discusses`
            ],
            correctAnswer: 1,
            explanation: `Row B rewards commentary that explains how evidence supports the claim, and naming a device and a tone is only a label. The quotations are brief, "nostalgic" is not too specific for this evidence, and dates and titles do not affect scoring.`
          },
          {
            question: `In context, "The still, sad music of humanity" primarily suggests that the speaker's mature response to nature`,
            options: [
              `has come to include a sense of others' suffering`,
              `has become joyless and wholly detached`,
              `is mainly a love of listening to music`,
              `rejects nature in favor of city society`
            ],
            correctAnswer: 0,
            explanation: `The "music of humanity" is sad and has power "To chasten and subdue," so nature now reminds him of human suffering. The excerpt goes on to a "sense sublime," which rules out joylessness, the music is figurative, and he remains a lover of nature.`
          },
          {
            question: `Which revision of sentence (7) in the model paragraph would most likely weaken its claim to the sophistication point?`,
            options: [
              `Thus the speaker is grateful but grieving, and the gratitude is willed.`,
              `In the end, the speaker is simply happy to have grown up.`,
              `So the speaker's consolation is sincere, though it is hard-won.`,
              `The speaker's gratitude, then, coexists with unresolved grief.`
            ],
            correctAnswer: 1,
            explanation: `Reducing the tone to simple happiness erases the tension the paragraph has built, and Row C rewards exploring that tension. Each other revision keeps both sides of the attitude in view.`
          }
        ]
      }
    }
  ]
}
