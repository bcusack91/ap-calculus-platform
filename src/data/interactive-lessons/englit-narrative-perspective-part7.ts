export const englitNarrativePerspectivePart7Data = {
  topicSlug: 'englit-narrative-perspective',
  sections: [
    {
      id: 'englitna7-intro',
      type: 'text' as const,
      content: `
# 🔍 Narrative Perspective

**Part 7 of 7 — Narrative Perspective Synthesis**

---

| Section |
|---------|
| 📖 The Toolkit in One Table |
| A Five-Step Workflow |
| New Passage: The Aeroplane Over London |
| A Worked Annotation |
| Mixed Review |

> 🔑 **Key Concept:** Perspective is the lens of a narrative: whose senses, whose words, how close, and what is missed. This part applies the whole toolkit to a famous passage from *Mrs. Dalloway* in which a crowd of Londoners, and one traumatized veteran, look up at the same aeroplane.
`
    },
    {
      id: 'englitna7-toolkit',
      type: 'text' as const,
      content: `
## 📖 The Toolkit in One Table

| Part | Idea | Question to ask | Key example |
|---|---|---|---|
| 1 | Focalization, bias, interpretive gap | Whose view is this, and what does it miss? | (concepts) |
| 2 | Who sees vs who speaks | Whose perceptions fill this sentence? | *Portrait*'s "moocow"; David Copperfield's apple-red Peggotty |
| 3 | The distance scale | How close is the narration to the mind? | Emma Bovary's "passion, ecstasy, delirium" |
| 4 | Stream of consciousness | What triggers each thought? | Clarissa's hinges; the mark on the wall; Molly's "yes" |
| 5 | Blind spots and multiple focalizers | Who is not seen, and by whom? | Scrope Purvis; the snail; May Welland |
| 6 | The exam | Narrator, character, or both? | Anne Elliot's "Alas!" |

## A Five-Step Workflow

1. **Speaker and focalizer.** Who tells? Whose senses and words shape the details?
2. **Distance.** Mark each sentence: report, psychonarration, FID, direct thought, monologue.
3. **Movement.** What triggers shifts in thought, time or focalizer?
4. **Gaps.** What does each perspective fail to see, and who or what reveals it?
5. **Meaning.** Write one sentence linking the handling of perspective to the passage's larger concern.
`
    },
    {
      id: 'englitna7-passage',
      type: 'text' as const,
      content: `
## New Passage: The Aeroplane Over London

Midmorning in *Mrs. Dalloway*: an aeroplane writes letters in smoke over London. Several passers-by try to read them.

> "Glaxo," said Mrs. Coates in a strained, awestricken voice, gazing straight up, and her baby, lying stiff and white in her arms, gazed straight up.
>
> "Kreemo," murmured Mrs. Bletchley, like a sleep-walker. With his hat held out perfectly still in his hand, Mr. Bowley gazed straight up. All down the Mall people were standing and looking up into the sky.

In Regent's Park, a young Italian woman, Lucrezia (Rezia) Warren Smith, sits beside her husband Septimus, who fought in the First World War:

> "Look, look, Septimus!" she cried. For Dr. Holmes had told her to make her husband (who had nothing whatever seriously the matter with him but was a little out of sorts) take an interest in things outside himself.
>
> So, thought Septimus, looking up, they are signalling to me. Not indeed in actual words; that is, he could not read the language yet; but it was plain enough, this beauty, this exquisite beauty, and tears filled his eyes as he looked at the smoke words languishing and melting in the sky...
>
> It was toffee; they were advertising toffee, a nursemaid told Rezia.
>
> — Virginia Woolf, *Mrs. Dalloway*, 1925
`
    },
    {
      id: 'englitna7-annotation',
      type: 'text' as const,
      content: `
## A Worked Annotation

| Step | Detail | Analysis |
|---|---|---|
| **1. Focalizers** | Mrs. Coates, Mrs. Bletchley, Mr. Bowley, Rezia, Septimus, the nursemaid | Internal multiple focalization: one event, many minds |
| **2. Distance** | "'Glaxo,' said Mrs. Coates" | Direct speech: we hear each guess but enter no stranger's mind deeply |
| **2. Distance** | "(who had nothing whatever seriously the matter with him but was a little out of sorts)" | FID of Dr. Holmes's opinion, repeated by Rezia; the parenthesis quietly exposes the doctor's dismissiveness |
| **2. Distance** | "So, thought Septimus... they are signalling to me" | A tag, then FID: we are inside his perception |
| **3. Movement** | "this beauty, this exquisite beauty, and tears filled his eyes" | Repetition and rising emotion: the advertisement becomes a revelation |
| **4. Gaps** | "It was toffee; they were advertising toffee" | The flat fact, delivered by a nursemaid, exposes the gap between Septimus's vision and everyone else's reality |
| **4. Gaps** | The doctor's "nothing whatever seriously the matter" | The worst blind spot belongs to the authority figure: Septimus is gravely ill, as the novel will show |
| **5. Meaning** | A commercial sign read as a sacred message | Woolf shows a city sharing one sight but not one world, and a society unable to see what war has done to its veterans |

### A Possible Thesis

> By passing one skywritten advertisement through a crowd of ordinary readers, a dismissive doctor's opinion and Septimus's ecstatic vision, Woolf makes perspective itself the subject: the same smoke is "toffee" to London and a message of "exquisite beauty" to a damaged mind that his society refuses to see.
`
    },
    {
      id: 'englitna7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Passage Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The rapid sequence of guesses ("Glaxo," "Kreemo") from different onlookers primarily serves to`,
            options: [
              `establish that Mrs. Coates is the most reliable observer in the scene`,
              `show that the narrator knows the advertisement's message in advance`,
              `present one public event as it registers in several private minds`,
              `suggest that the aeroplane is writing a different word for each person`
            ],
            correctAnswer: 2,
            explanation: `Each passer-by reads the smoke differently, so a single event is multiplied across perspectives. No observer is ranked above the others, and the narrator never announces the word; bystanders supply it.`
          },
          {
            question: `The parenthetical "(who had nothing whatever seriously the matter with him but was a little out of sorts)" is best understood as`,
            options: [
              `the narrator's reliable medical judgment of Septimus's health`,
              `Septimus's own cheerful assessment of how he is feeling today`,
              `Rezia's private conviction that her husband is perfectly well`,
              `Dr. Holmes's dismissive opinion, exposed by irony`
            ],
            correctAnswer: 3,
            explanation: `The phrasing is the doctor's ("Dr. Holmes had told her"), carried in Rezia's thoughts, and the passage immediately shows Septimus weeping at signals no one else perceives. The narrator does not endorse it, and Septimus is not speaking.`
          },
          {
            question: `The sentence "It was toffee; they were advertising toffee, a nursemaid told Rezia" most directly`,
            options: [
              `abruptly punctures Septimus's vision with a flat, commercial fact`,
              `confirms that Septimus has correctly read the smoke words`,
              `reveals that Rezia herself wrote the message in the sky`,
              `shifts the focalization to the pilot of the aeroplane`
            ],
            correctAnswer: 0,
            explanation: `After Septimus's rapture, the plain repetition of "toffee" brings the scene down to an advertisement, exposing the gap between his perception and the world's. It contradicts rather than confirms his reading, and the pilot is never a focalizer.`
          }
        ]
      }
    },
    {
      id: 'englitna7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mixed Review: Name the Technique** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"his father looked at him through a glass: he had a hairy face": a third-person narrator with a ___ focalizer`,
            options: ['child', 'neighbor', 'compiler', 'frame']
          },
          {
            label: `"But this one taught nothing, knew nothing, wished nothing.": ___`,
            options: ['free indirect discourse', 'psychonarration', 'interior monologue', 'narrative report']
          },
          {
            label: `"and yes I said yes I will Yes.": ___`,
            options: ['interior monologue', 'free indirect discourse', 'psychonarration', 'indirect thought']
          },
          {
            label: `Dallas tells Newland what May knew. The revelation exposes the focalizer's ___`,
            options: ['blind spot', 'dual voice', 'idiom', 'association']
          }
        ],
        correctAnswers: ['child', 'free indirect discourse', 'interior monologue', 'blind spot'],
        hint1: 'The details sound like a toddler\'s perceptions.',
        hint2: 'Emma\'s scorn, in third person and past tense, with no tag.',
        hint3: 'First person, no punctuation, no narrator.',
        explanation: 'Joyce filters the opening through a child; Flaubert gives Emma\'s scorn in FID; Molly\'s unpunctuated thoughts are interior monologue; and Dallas\'s news exposes what Newland never saw.'
      }
    },
    {
      id: 'englitna7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Which statement correctly distinguishes focalization from point of view?`,
            options: [
              `Focalization is the grammatical person; point of view is the narrator's tone.`,
              `Focalization concerns whose perceptions fill a passage and can shift within one point of view.`,
              `Focalization applies only to first-person narratives, and point of view applies only to third.`,
              `Focalization and point of view are two names for exactly the same feature of narration.`
            ],
            correctAnswer: 1,
            explanation: `A third-person novel can move from Clarissa's perceptions to Scrope Purvis's without changing its grammatical person, which is why focalization is a separate question. It is not the grammatical person, it works in both first and third person, and it is not identical to point of view.`
          },
          {
            question: `A reader claims that because *The Age of Innocence* is told in the third person, its view of May must be objective. The best response is that`,
            options: [
              `the narration is limited to Newland's view, so his blind spots become the reader's`,
              `third-person narrators are always objective, so the reader's claim is correct`,
              `Dallas actually narrates the whole novel in the first person, so the claim is wrong`,
              `May's view of herself is presented directly throughout, so no bias is possible`
            ],
            correctAnswer: 0,
            explanation: `The narration is focalized through Newland, so his underestimation of May becomes the reader's until the final chapter. Third person is not the same as objectivity, Dallas narrates nothing, and May's mind is almost never entered.`
          },
          {
            question: `Which sentence best summarizes what this topic has shown about perspective?`,
            options: [
              `Perspective matters mainly in first-person novels, where the narrator may lie.`,
              `The narrator's opinion is the one a reader should adopt in every passage.`,
              `Stream of consciousness removes perspective by showing thoughts directly.`,
              `Whose eyes, whose words and how close we stand determine what readers know and miss.`
            ],
            correctAnswer: 3,
            explanation: `Focalization, voice and distance together control what a passage reveals and hides. Perspective shapes third-person fiction too, narrators can be ironic, and stream of consciousness intensifies a single perspective rather than removing it.`
          }
        ]
      }
    }
  ]
}
