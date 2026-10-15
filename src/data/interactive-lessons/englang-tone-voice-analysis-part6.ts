export const englangToneVoiceAnalysisPart6Data = {
  topicSlug: 'englang-tone-voice-analysis',
  sections: [
    {
      id: 'englangt6-intro',
      type: 'text' as const,
      content: `
# 🎙️ Tone and Voice Analysis

**Part 6 of 7 — Exam Practice: Dickens on the Eastern Penitentiary, 1842**

---

| Section |
|---------|
| How the Exam Tests Tone and Voice |
| 📖 The Passage: Dickens, *American Notes* |
| Section I Practice Set |
| Question 2: An Annotated Body Paragraph |

> 🔑 **Key Concept:** Tone and voice appear in both halves of the exam. In Section I, reading questions ask you to identify a tone, explain what a choice contributes to it, or describe how it changes. In Question 2 (rhetorical analysis), tone is one of the most useful lenses for explaining how a writer's choices serve a purpose, provided your commentary goes beyond naming the tone.

## How the Exam Tests Tone and Voice

| Section I stem | What it is really asking |
|---|---|
| "The tone of the passage is best described as" | Which pair of adjectives fits the pattern of choices, at the right intensity |
| "The writer's attitude toward X can best be described as" | Tone toward one target only, often different from the overall tone |
| "The shift in paragraph 3 is best described as" | Where the pivot is and what it moves between |
| "The phrase X primarily serves to" | How one choice contributes to tone, persona, or argument |
| "The writer's persona is best described as" | The self the writer presents, judged from the whole passage |

Question 2 is scored 0–6: **Row A** thesis (0–1), **Row B** evidence and commentary (0–4), **Row C** sophistication (0–1).
`
    },
    {
      id: 'englangt6-passage',
      type: 'text' as const,
      content: `
## 📖 The Passage: Dickens, *American Notes* (1842)

In 1842, the novelist Charles Dickens toured the United States and published his impressions in *American Notes for General Circulation*. In Philadelphia he spent a day at the Eastern Penitentiary, a prison famous for the "separate system," in which each prisoner lived and worked alone in a cell. Many Americans and Europeans admired the prison as a model of humane reform.

> In the outskirts, stands a great prison, called the Eastern Penitentiary: conducted on a plan peculiar to the state of Pennsylvania. The system here, is rigid, strict, and hopeless solitary confinement. I believe it, in its effects, to be cruel and wrong.
>
> In its intention, I am well convinced that it is kind, humane, and meant for reformation; but I am persuaded that those who devised this system of Prison Discipline, and those benevolent gentlemen who carry it into execution, do not know what it is that they are doing. I believe that very few men are capable of estimating the immense amount of torture and agony which this dreadful punishment, prolonged for years, inflicts upon the sufferers; and in guessing at it myself, and in reasoning from what I have seen written upon their faces, and what to my certain knowledge they feel within, I am only the more convinced that there is a depth of terrible endurance in it which none but the sufferers themselves can fathom, and which no man has a right to inflict upon his fellow-creature. I hold this slow and daily tampering with the mysteries of the brain, to be immeasurably worse than any torture of the body: and because its ghastly signs and tokens are not so palpable to the eye and sense of touch as scars upon the flesh; because its wounds are not upon the surface, and it extorts few cries that human ears can hear; therefore I the more denounce it, as a secret punishment which slumbering humanity is not roused up to stay. I hesitated once, debating with myself, whether, if I had the power of saying 'Yes' or 'No,' I would allow it to be tried in certain cases, where the terms of imprisonment were short; but now, I solemnly declare, that with no rewards or honours could I walk a happy man beneath the open sky by day, or lie me down upon my bed at night, with the consciousness that one human creature, for any length of time, no matter what, lay suffering this unknown punishment in his silent cell, and I the cause, or I consenting to it in the least degree.
>
> I was accompanied to this prison by two gentlemen officially connected with its management, and passed the day in going from cell to cell, and talking with the inmates. Every facility was afforded me, that the utmost courtesy could suggest. Nothing was concealed or hidden from my view, and every piece of information that I sought, was openly and frankly given. The perfect order of the building cannot be praised too highly, and of the excellent motives of all who are immediately concerned in the administration of the system, there can be no kind of question.
>
> — Charles Dickens, *American Notes for General Circulation* (1842), Chapter VII
`
    },
    {
      id: 'englangt6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice Set** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The sentence "In its intention, I am well convinced that it is kind, humane, and meant for reformation" primarily serves to',
            options: [
              'retract the judgment that the system is "cruel and wrong"',
              'concede good motives to make the criticism seem fair',
              'praise the prison officials as the passage\'s main purpose',
              'show that Dickens has not yet formed an opinion of the prison'
            ],
            correctAnswer: 1,
            explanation: 'The concession follows the verdict and precedes "but I am persuaded," so it makes Dickens sound fair before he condemns the system\'s effects. He does not retract or delay his judgment, and praise is not his purpose.'
          },
          {
            question: 'Dickens\'s attitude toward "those benevolent gentlemen who carry it into execution" is best described as',
            options: [
              'charitable about their motives but critical of their understanding',
              'contemptuous of both their motives and their methods',
              'admiring and grateful, with no reservations about their work',
              'suspicious that they are hiding the truth from visitors'
            ],
            correctAnswer: 0,
            explanation: 'He calls them "benevolent" yet says they "do not know what it is that they are doing," a charitable view of motive joined to a criticism of understanding. He is not contemptuous, his admiration has a clear reservation, and he says nothing was hidden.'
          },
          {
            question: 'In the sentence beginning "I hold this slow and daily tampering," the two "because" clauses followed by "therefore" function to',
            options: [
              'admit that the punishment is less painful than physical torture',
              'turn the suffering\'s invisibility into grounds for stronger outrage',
              'explain why the prisoners themselves rarely complain about their treatment',
              'shift the tone from indignation to cautious and scientific neutrality'
            ],
            correctAnswer: 1,
            explanation: 'The clauses observe that the wounds are hidden and silent, and "therefore I the more denounce it" makes that hiddenness the reason for greater outrage. Dickens calls the punishment worse than bodily torture, says nothing of complaints, and grows more emphatic rather than neutral.'
          },
          {
            question: 'The final paragraph, which praises the prison\'s "perfect order" and the officials\' "excellent motives," contributes to the passage chiefly by',
            options: [
              'contradicting the earlier verdict and leaving the reader uncertain',
              'stressing the visitor\'s fairness and his full access to the prison',
              'shifting blame for the system from its designers to the prisoners',
              'introducing a new argument about the cost of building prisons'
            ],
            correctAnswer: 1,
            explanation: 'Praising the order and motives, and noting that "nothing was concealed," shows that his judgment rests on full access and good faith, which strengthens his criticism of the system itself. The verdict stands, the prisoners are not blamed, and cost is never discussed.'
          },
          {
            question: 'The persona Dickens presents in the passage is best described as',
            options: [
              'a detached expert reporting statistics on prison discipline',
              'a fair-minded witness whose conscience demands a verdict',
              'an outraged reformer who rejects every part of the prison',
              'an amused tourist describing the curiosities of a foreign land'
            ],
            correctAnswer: 1,
            explanation: 'He grants good intentions, cites what he saw, and ends with a personal oath ("I solemnly declare"), which presents a fair witness bound by conscience. He offers no statistics, praises parts of the prison, and is never amused.'
          }
        ]
      }
    },
    {
      id: 'englangt6-q2',
      type: 'text' as const,
      content: `
## Question 2: An Annotated Body Paragraph

**Prompt (in the style of Question 2):** In the passage above, Charles Dickens describes his 1842 visit to the Eastern Penitentiary in Philadelphia. Write an essay that analyzes the rhetorical choices Dickens makes to convey his judgment of solitary confinement.

**Thesis (Row A):** "Dickens pairs generous concessions about the prison's intentions with an increasingly solemn condemnation of its effects, so that his verdict sounds like the conclusion of a fair witness rather than the complaint of a hostile foreigner."

This thesis is defensible, responds to the prompt, and names the choices (concession, solemn condemnation) and their purpose (credibility with readers who admired the prison).

### Version 1: Typical of a Row B score of 2

> Dickens uses a serious tone in this passage. He says the prison is "cruel and wrong" and also that it is "kind, humane, and meant for reformation." He talks about "torture and agony" and "ghastly signs and tokens." This shows that he really did not like the prison. He also says the gentlemen were "benevolent." Dickens uses tone to get his point across to the reader.

| Problem | Why it limits the score |
|---|---|
| "a serious tone" | Imprecise; does not say serious **how** or toward **what** |
| Quotations are listed, not explained | Evidence without commentary |
| "really did not like the prison" | Summary of opinion, not analysis of a choice |
| "to get his point across" | Generic; no specific purpose or audience |

### Version 2: Typical of a Row B score of 4

> Dickens disarms readers who admired the Pennsylvania system by conceding its virtues before he condemns it. **[claim tied to thesis]** He grants that the system is "kind, humane, and meant for reformation" and calls its officials "benevolent gentlemen," **[specific evidence]** so when he turns on "but" to declare that they "do not know what it is that they are doing," the charge reads as a judgment about understanding rather than an attack on character. **[commentary: how the concession works]** Having established his fairness, Dickens lets the tone grow graver as his sentences lengthen. The two clauses beginning "because" observe that the prison's wounds "are not upon the surface" and extort "few cries that human ears can hear," and the sentence arrives at "therefore I the more denounce it." **[evidence + syntax]** The logic is striking: the very invisibility that let observers praise the prison becomes Dickens's reason for outrage. **[commentary: function of the choice]** By the time he "solemnly" declares that he could not sleep knowing "one human creature" suffered there, his tone has become an oath, and readers who began by trusting his fairness are asked to share his conscience. **[commentary linking tone to audience and purpose]**

| Feature | Rubric connection |
|---|---|
| Opens with a claim about a **choice and its effect** | Builds a line of reasoning (Row B) |
| Each quotation is followed by an explanation of **how** it works | "Consistently explains how the evidence supports a line of reasoning" |
| Traces a **progression** (concession, then graver tone, then oath) | Explains how **multiple** choices contribute to the purpose |
| Names the **audience** (readers who admired the prison) | Grounds analysis in the rhetorical situation |

> 🔑 **AP Connection:** Rubric scores belong to whole essays, not single paragraphs. The labels above show which paragraph-level habits the Row B descriptors reward. Row C (sophistication) could come from explaining the **tension** at the heart of the passage: Dickens praises the people and condemns the system they run, and his argument depends on keeping both judgments in view.
`
    },
    {
      id: 'englangt6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Writing Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision of the sentence "Dickens uses a serious tone in this passage" would most improve Version 1?',
            options: [
              'Dickens uses a very serious and also quite sad tone in this passage.',
              'Dickens\'s courteous concessions give way to a grave, oath-like condemnation.',
              'Dickens has many different tones, which are used throughout the passage.',
              'The tone of the passage is serious because the subject of prisons is serious.'
            ],
            correctAnswer: 1,
            explanation: 'The revision names precise tones, shows their order, and points to choices that can be analyzed. Intensifiers do not add precision, "many different tones" says nothing specific, and a tone is not explained by the topic alone.'
          },
          {
            question: 'A student wants to earn the sophistication point on this prompt. Which addition would best help?',
            options: [
              'Defining every rhetorical term used in the essay before each body paragraph',
              'Explaining why Dickens praises the officials yet condemns their system',
              'Adding a fourth body paragraph that lists additional devices in the passage',
              'Quoting the entire second paragraph so that no evidence is left out'
            ],
            correctAnswer: 1,
            explanation: 'Explaining the purpose of a tension in the passage is one route to Row C. Definitions, extra device lists, and long quotations add length but not complexity of thought.'
          }
        ]
      }
    }
  ]
};
