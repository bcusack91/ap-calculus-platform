export const englitShortFiction2Part2Data = {
  topicSlug: 'englit-short-fiction-2',
  sections: [
    {
      id: 'englitsh2-intro',
      type: 'text' as const,
      content: `
# 🕯️ Short Fiction II

**Part 2 of 7 — Narrator Perspective and Reliability**

---

| Section |
|---------|
| 📖 Perspective vs. Reliability |
| Passage 1: Poe's Narrator Argues His Sanity |
| Passage 2: Gilman's Diarist on "Dead Paper" |
| How Reliability Shapes a Story |

> 🔑 **Key Concept:** Every narrator has a **perspective**: a position, a set of values and a stake in the story. A narrator is **unreliable** when the text gives us reasons to doubt the account. The author never says "do not trust this voice." Instead, the author builds a gap between what the narrator claims and what the narrator's own words reveal, and the reader has to notice it.
`
    },
    {
      id: 'englitsh2-terms',
      type: 'text' as const,
      content: `
## 📖 Perspective vs. Reliability

These two ideas are related but not the same.

| Term | Question it answers | Example |
|---|---|---|
| **Perspective** | From what position, with what values and biases, does the narrator see events? | A narrator who is a defendant sees the crime as a test of his cleverness |
| **Reliability** | How far can the reader trust the narrator's facts and judgments? | We may trust a narrator's report of what a husband said while doubting her account of what she sees in a wall |

Every narrator has a perspective, so every account is filtered. Only some narrators are unreliable.

### Signals of Unreliability

| Signal | What it looks like on the page |
|---|---|
| **Protesting too much** | The narrator keeps denying a charge no one in the scene has made, or keeps insisting on a quality the prose does not show |
| **Style contradicts claim** | "I am calm," written in broken, exclamatory, repetitive sentences |
| **Interpretation outruns evidence** | A small detail (a look, a sound) is given a huge, certain meaning |
| **Other characters react oddly** | People in the story respond in ways the narrator cannot explain or explains away |
| **Strange logic** | The narrator reasons carefully from a premise the reader cannot accept |
| **Telling omissions** | The narrator skips over what a reader most needs to know |

### Kinds of Unreliability

| Kind | Cause |
|---|---|
| **Naive** | The narrator lacks the knowledge or experience to understand events (often a child) |
| **Self-deceived** | The narrator believes the account but has motives not to see the truth |
| **Disturbed** | The narrator's perception is warped by obsession, illness or fear |
| **Deceptive** | The narrator deliberately misleads the listener |

These overlap. The point of naming them is to ask **why** the account bends, because the "why" leads to the story's meaning.
`
    },
    {
      id: 'englitsh2-poe',
      type: 'text' as const,
      content: `
## Passage 1: Poe's Narrator Argues His Sanity

> True!—nervous—very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses—not destroyed—not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily—how calmly I can tell you the whole story.
>
> — Edgar Allan Poe, "The Tell-Tale Heart," 1843

The story opens in the middle of an argument. Someone ("you") has apparently called the narrator mad, and the whole tale is offered as proof that he is not.

| Choice | What it reveals |
|---|---|
| "True!—nervous—very, very dreadfully nervous" | Dashes and doubled intensifiers make the syntax lurch. The sentence performs the nerves it admits. |
| "why will you say that I am mad?" | He answers an accusation before telling the story, so his purpose is defense, not simple report |
| "The disease had sharpened my senses" | He concedes he has a "disease" while denying madness, a contradiction he does not notice |
| "I heard many things in hell" | The proof of his sanity is a claim that would make any listener doubt it |
| "how healthily—how calmly" | The claim of calm arrives in a sentence broken by an exclamation and a dash |

### His Reasoning About Motive

> Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. For his gold I had no desire. I think it was his eye! yes, it was this!

Here the narrator clears away every rational motive one by one: no goal, no anger, no grievance, no greed. What is left is "his eye," and the narrator seems to discover it as he speaks ("I think it was his eye! yes, it was this!"). The short, balanced sentences sound orderly, but the order serves an argument that has no sane premise. That is the **strange logic** signal: careful reasoning from a premise the reader cannot accept.

Later he makes the same move again: "You fancy me mad. Madmen know nothing. But you should have seen me." His evidence of sanity is the **care** with which he planned a murder, which is exactly what horrifies the reader.
`
    },
    {
      id: 'englitsh2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the opening passage, the narrator\'s claim that he can tell the story "healthily—how calmly" chiefly serves to',
            options: [
              'expose a gap between his stated composure and his frantic syntax',
              'establish him as a trustworthy witness to the events he will describe',
              'show that his illness has passed by the time he narrates the events',
              'signal that the events will be recounted in strict chronological order'
            ],
            correctAnswer: 0,
            explanation: 'The dashes, exclamations and doubled intensifiers contradict the claim of calm, so the line makes readers doubt him. Nothing suggests he has recovered or that his account is trustworthy, and the line says nothing about chronology.'
          },
          {
            question: 'The sequence "Object there was none. Passion there was none. I loved the old man" contributes to the characterization of the narrator by',
            options: [
              'proving that the killing was an accident he did not intend',
              'presenting an orderly argument that rests on an irrational premise',
              'suggesting that a hidden quarrel with the old man is being concealed',
              'showing his regret for the crime before he describes committing it'
            ],
            correctAnswer: 1,
            explanation: 'The balanced sentences sound logical, but after ruling out every sane motive he settles on the old man\'s eye. The murder was planned, he hides no quarrel, and he shows no regret here.'
          },
          {
            question: 'The narrator\'s repeated address to "you" most likely indicates that he',
            options: [
              'is writing entries in a private diary',
              'is answering a listener who doubts him',
              'is speaking aloud to the old man he killed',
              'is quoting what the police officers said'
            ],
            correctAnswer: 1,
            explanation: 'Questions such as "why will you say that I am mad?" answer someone who has already judged him, so the tale is a defense. It is spoken, not a diary, and the old man and the officers are referred to in the third person.'
          }
        ]
      }
    },
    {
      id: 'englitsh2-gilman',
      type: 'text' as const,
      content: `
## Passage 2: Gilman's Diarist on "Dead Paper"

"The Yellow Wallpaper" is a set of secret journal entries written by a woman whose physician husband, John, has confined her to an upstairs room to rest and forbidden her to work.

> John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster.
>
> You see, he does not believe I am sick!
>
> — Charlotte Perkins Gilman, "The Yellow Wallpaper," 1892

| Choice | What it reveals |
|---|---|
| The parenthesis | She can only voice her criticism of John in an aside, and only to "dead paper." Her perspective is shaped by having no listener. |
| "perhaps... perhaps" | She hedges the very idea that her doctor might be the problem |
| "You see" | She turns to an imagined reader, the only audience who will hear her |
| "he does not believe I am sick!" | The exclamation carries the story's central complaint: her account of her own condition is dismissed |

### Reliability Is Not All-or-Nothing

As the entries go on, the diarist sees a woman "stooping down and creeping about behind that pattern," and by the end she says, "I always lock the door when I creep by daylight." Her perceptions of the paper are clearly unreliable.

Yet readers keep trusting her as a **reporter of other people's words**. When she quotes John ("I am a doctor, dear, and I know"), the line condemns him on its own. So we read on two levels at once:

| We doubt | We trust |
|---|---|
| What she sees in the wallpaper | What John says to her and how he says it |
| Her conclusion that John and Jennie are secretly studying the paper | Her report that she is forbidden to work, write or visit friends |
| Her belief near the end that she has "got out" | Her account of the schedule, the barred windows and the nailed-down bed |

This split is the key to the story. Her growing unreliability is not a reason to dismiss her; it is the **evidence** of what the rest cure has done to her.
`
    },
    {
      id: 'englitsh2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Signal** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Poe\'s narrator offers his careful planning of a murder as proof that he is sane. This signal is ___',
            options: ['strange logic', 'a telling omission', 'a naive outlook', 'an odd reaction']
          },
          {
            label: 'The diarist reports John\'s words accurately but misreads the wallpaper. Her reliability is ___',
            options: ['partial', 'complete', 'deceptive', 'irrelevant']
          },
          {
            label: 'A narrator insisting "I am calm" in broken, exclamatory sentences shows a style that ___ the claim',
            options: ['contradicts', 'confirms', 'explains', 'replaces']
          }
        ],
        correctAnswers: ['strange logic', 'partial', 'contradicts'],
        hint1: 'He reasons carefully from a premise no reader accepts.',
        hint2: 'We trust her on some things and not on others.',
        hint3: 'Compare what the sentence says with how it is built.',
        explanation: 'Planning as proof of sanity is strange logic. The diarist is reliable about speech and unreliable about the paper, so her reliability is partial. Frantic syntax contradicts a claim of calm.'
      }
    },
    {
      id: 'englitsh2-effects',
      type: 'text' as const,
      content: `
## How Reliability Shapes a Story

Skill 4.D asks you to **explain how a narrator's reliability affects a narrative**, not just to label the narrator. Here is what unreliability does in these two stories.

| Effect | "The Tell-Tale Heart" | "The Yellow Wallpaper" |
|---|---|---|
| **Creates dramatic irony** | We see the madness he is trying to disprove | We see the harm in a place John insists "is doing you good" |
| **Moves the focus to the teller** | The horror lies less in the murder than in the proud, self-justifying voice | The real subject is her mind under confinement, not the house |
| **Makes the reader reconstruct events** | We assemble what actually happened in the old man's room | We reconstruct her treatment from the details she reports |
| **Supports a theme** | Guilt cannot be argued away; the voice that denies it betrays it | Treating a woman's account of herself as unreliable can make it so |

### From Label to Claim

| Weak | Stronger |
|---|---|
| "The narrator is unreliable." | "Poe makes the narrator's defense of his sanity the strongest evidence against it, so the reader's horror comes from the voice itself." |
| "The diarist is crazy by the end." | "Gilman lets the diarist's perceptions fail while her reports of John stay exact, so her collapse becomes an indictment of the treatment rather than a reason to dismiss her." |

> 🔑 **AP Connection:** Multiple-choice questions on prose often ask what a detail "suggests" about the narrator, or how a narrator's account should be read. In an essay, unreliability is never the end of a point. Say what the unreliability **reveals** and how it shapes the reader's judgment.
`
    },
    {
      id: 'englitsh2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes the function of the diarist\'s exact reports of John\'s words, given her unreliable view of the wallpaper?',
            options: [
              'They let readers judge John even as her perceptions fail',
              'They prove that John is the one who is mentally ill',
              'They show that she has secretly recovered her health',
              'They reveal that John is the real author of the diary'
            ],
            correctAnswer: 0,
            explanation: 'Her quotations of John remain trustworthy, so his own words show his control and dismissiveness while her perceptions of the paper break down. Nothing suggests John is ill, that she has recovered, or that he wrote the entries.'
          },
          {
            question: 'A student writes, "The narrator of \'The Tell-Tale Heart\' is unreliable." Which revision best turns this label into an analytical claim?',
            options: [
              'Poe\'s narrator, who murders an old man, is not a trustworthy teller of the tale.',
              'Poe makes the narrator\'s proud defense of his sanity the clearest evidence of his madness.',
              'Poe wrote many stories with first-person narrators who commit terrible crimes.',
              'The narrator is unreliable because he is mad and commits a murder at midnight.'
            ],
            correctAnswer: 1,
            explanation: 'The strong revision explains how the unreliability works and what it does to the reader. The others restate the label, add plot or turn to biography.'
          }
        ]
      }
    }
  ]
}
