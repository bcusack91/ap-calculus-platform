export const englangToneVoiceAnalysisPart2Data = {
  topicSlug: 'englang-tone-voice-analysis',
  sections: [
    {
      id: 'englangt2-intro',
      type: 'text' as const,
      content: `
# 🎙️ Tone and Voice Analysis

**Part 2 of 7 — Voice in Depth: Persona, Register, and Stevenson's "An Apology for Idlers"**

---

| Section |
|---------|
| What a Voice Is Made Of |
| Persona: The Writer on the Page |
| 📖 Close Reading: Stevenson, 1877 |
| How the Voice Serves the Argument |

> 🔑 **Key Concept:** Part 1 separated **tone** (an attitude at a given moment) from **voice** (the stable personality a text projects). This part takes voice apart. A voice is not a mysterious gift; it is the sum of repeated choices in diction, syntax, address, and humor. Because those choices are deliberate, a voice is also a rhetorical strategy: it shapes how much the audience trusts and listens to the writer.
`
    },
    {
      id: 'englangt2-components',
      type: 'text' as const,
      content: `
## What a Voice Is Made Of

| Component | Question to ask | What to look for |
|---|---|---|
| **Register** | How formal is the language? | Latinate vs plain words, contractions, slang, technical terms |
| **Sentence habits** | What do the sentences tend to do? | Long and balanced, short and blunt, many qualifications, frequent questions |
| **Relationship to the reader** | How close does the writer stand to us? | "I," "you," "we"; direct address; confiding asides |
| **Stance toward opponents** | How does the writer treat other views? | Respectful concession, mockery, silence |
| **Habitual figures** | Which devices keep returning? | Irony, understatement, aphorism, allusion, exaggeration |
| **Persona** | Who is the writer presenting himself or herself as? | Expert, witness, friend, rebel, mentor |

### Voice, Tone, and Style

| Term | What it names | Scale |
|---|---|---|
| **Style** | The writer's pattern of choices in language | Whole text (the "how") |
| **Voice** | The personality those choices project | Whole text (the "who") |
| **Tone** | The attitude toward subject or audience at a given point | Sentence, paragraph, or whole text |

A writer can keep one voice while the tone changes. A wry, conversational voice can be amused in one paragraph and indignant in the next.

## Persona: The Writer on the Page

A **persona** is the version of the self a writer presents to the reader. It is constructed, not simply reported. The same person can write as a cautious expert in a report and as an amused friend in an essay.

| Same claim | Persona | Voice |
|---|---|---|
| "Students need unstructured time; overscheduling reduces creativity." | Researcher | Impersonal, formal, compressed |
| "I learned more in one lazy August than in a year of enrichment classes." | Reminiscing adult | Personal, warm, anecdotal |
| "Nothing builds character like a fourth after-school club, or so we are told." | Ironist | Dry, mocking, understated |

> 🔑 **AP Connection:** The CED asks you to explain how a writer's choices respond to the **audience**. Persona is one of those choices. A writer arguing an unpopular position often adopts a persona that disarms resistance, such as a modest, amused, or self-mocking one.
`
    },
    {
      id: 'englangt2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer uses contractions, addresses the reader as "you," and tells small stories about her own mistakes. These choices most directly create',
            options: [
              'an impersonal voice that keeps the reader at a distance',
              'a confiding voice that brings the reader near',
              'a tone shift from detachment to open hostility',
              'a formal register suited to a specialist audience'
            ],
            correctAnswer: 1,
            explanation: 'Direct address, contractions, and self-disclosure bring the writer close to the reader, which produces a confiding, conversational voice. Nothing here is impersonal, formal, or hostile.'
          },
          {
            question: 'Which statement about persona is most accurate?',
            options: [
              'It is a self that the writer constructs to suit a purpose and audience.',
              'It is the writer\'s actual personality, recorded without any adjustment.',
              'It appears only in fiction, where a narrator differs from the author.',
              'It is a synonym for the writer\'s tone in the final paragraph.'
            ],
            correctAnswer: 0,
            explanation: 'A persona is constructed: writers choose which version of themselves to present. Nonfiction writers build personas as much as novelists do, and a persona is a stable presence rather than a single paragraph\'s attitude.'
          }
        ]
      }
    },
    {
      id: 'englangt2-passage',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Stevenson, "An Apology for Idlers" (1877)

### The Situation

| Component | Details |
|---|---|
| **Writer** | Robert Louis Stevenson, then in his twenties, who had studied engineering and law at Edinburgh before turning to writing |
| **Publication** | *The Cornhill Magazine*, July 1877; collected in *Virginibus Puerisque* (1881) |
| **Audience** | Educated Victorian magazine readers who valued industry, diligence, and professional success |
| **Exigence** | A culture that treats every hour not spent on a "lucrative profession" as wasted |
| **Purpose** | To defend a kind of "idleness" that is really learning outside schools and offices |

An **apology** here means a formal defense (as in Plato's *Apology*), not an expression of regret. Stevenson's title already announces the persona: a cheerful defendant pleading an unpopular case.

> JUST now, when every one is bound, under pain of a decree in absence convicting them of *lèse*-respectability, to enter on some lucrative profession, and labour therein with something not far short of enthusiasm, a cry from the opposite party who are content when they have enough, and like to look on and enjoy in the meanwhile, savours a little of bravado and gasconade.
>
> ...
>
> Books are good enough in their own way, but they are a mighty bloodless substitute for life.
>
> ...
>
> If you look back on your own education, I am sure it will not be the full, vivid, instructive hours of truantry that you regret; you would rather cancel some lack-lustre periods between sleep and waking in the class. For my own part, I have attended a good many lectures in my time. I still remember that the spinning of a top is a case of Kinetic Stability. I still remember that Emphyteusis is not a disease, nor Stillicide a crime. But though I would not willingly part with such scraps of science, I do not set the same store by them as by certain other odds and ends that I came by in the open street while I was playing truant.
>
> — Robert Louis Stevenson, "An Apology for Idlers," text from *Virginibus Puerisque* (1881)
`
    },
    {
      id: 'englangt2-reading',
      type: 'text' as const,
      content: `
### Choice 1: Mock-Legal Diction

"Under pain of a decree in absence convicting them of *lèse*-respectability" borrows the language of a courtroom. *Lèse-majesté* is the crime of insulting a monarch; Stevenson coins a crime of insulting respectability. The joke treats the pressure to choose a profession as a tyranny with its own law courts, so the reader laughs at the pressure before the argument has even begun.

### Choice 2: Self-Mockery That Lowers the Reader's Guard

He admits that the idlers' cry "savours a little of bravado and gasconade" (boastful bluster). By conceding that his side can sound like showing off, he sounds fair and unthreatening. A reader who expected a lazy man's excuse meets a writer who laughs at himself first.

### Choice 3: The Aphorism

"Books are good enough in their own way, but they are a mighty bloodless substitute for life." The sentence concedes first ("good enough in their own way"), then turns on "but." The plain, slightly old-fashioned intensifier "mighty" sits next to the startling "bloodless," a word usually used for corpses or the faint-hearted. The voice is relaxed, yet the judgment is sharp.

### Choice 4: Direct Address and Shared Memory

"If you look back on your own education, I am sure..." pulls the reader into the argument as a witness. Stevenson does not prove that classes were dull; he asks readers to remember their own "lack-lustre periods between sleep and waking."

### Choice 5: Mock-Pedantry

| Line | What it is | Effect |
|---|---|---|
| "the spinning of a top is a case of Kinetic Stability" | A scrap from a physics lecture | Capital letters make it sound grander than it is |
| "Emphyteusis is not a disease" | Emphyteusis is a long lease in Roman law | The learned word is remembered only as what it is not |
| "nor Stillicide a crime" | Stillicide is the right to let rainwater drip from one's eaves onto a neighbor's land | Same pattern, same joke |

The repeated "I still remember" sounds proud while proving the point: years of lectures have left a few odd definitions, one of which he can state only in the negative. The joke **is** the evidence.

## How the Voice Serves the Argument

| Feature of the voice | Rhetorical work it does |
|---|---|
| Playful, mock-legal diction | Makes the reigning ideal of industry look pompous |
| Self-mockery and concession | Disarms readers who distrust "idlers" |
| Direct address | Turns readers' own memories into evidence |
| Aphorism | Gives quotable, confident judgments |

A Victorian reader who believed in hard work would bristle at a solemn attack on diligence. A witty, self-aware companion who only says there is "something to be said against it" is much harder to dismiss. The voice is the strategy.

> 🔑 **AP Connection:** On Question 2, avoid sentences like "Stevenson has a humorous voice." Name the choices that build the voice, then explain what the voice **does** for this audience: "By treating professional ambition with mock-legal solemnity, Stevenson invites readers to laugh at the pressure they live under, which makes his defense of idleness sound reasonable rather than lazy."
`
    },
    {
      id: 'englangt2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The version of the self that a writer constructs and presents on the page is called a _______.

2) The level of formality in a writer's language (formal, informal, technical) is called _______.

3) In Stevenson's title, "apology" means a formal _______ of a position.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['persona', 'register', 'defense'],
        hint1: 'From the Latin word for a mask worn by an actor.',
        hint2: 'A term borrowed from linguistics and music; it rises or falls.',
        hint3: 'Think of Socrates speaking at his trial, not someone saying sorry.',
        explanation: 'A persona is the constructed self of a text, register is its level of formality, and an apology in the classical sense is a defense.'
      }
    },
    {
      id: 'englangt2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The phrase "a decree in absence convicting them of lèse-respectability" contributes to the passage chiefly by',
            options: [
              'establishing the writer as a legal expert whose views on education deserve deference',
              'mocking social pressure toward a profession by casting it as courtroom tyranny',
              'reporting an actual law that punished young people who refused to choose a career',
              'shifting from a playful voice to a grave one in order to warn the reader'
            ],
            correctAnswer: 1,
            explanation: 'The invented crime of offending respectability turns a social expectation into mock law, so the pressure looks pompous. No real law is described, the phrase jokes rather than claims expertise, and the voice stays playful.'
          },
          {
            question: 'The sentence "I still remember that Emphyteusis is not a disease, nor Stillicide a crime" supports Stevenson\'s argument by',
            options: [
              'proving that legal education is more valuable than scientific study',
              'showing through a comic example how little the lectures left',
              'admitting that his own idleness caused him to fail his courses',
              'introducing the technical vocabulary that his audience needs'
            ],
            correctAnswer: 1,
            explanation: 'He can recall these learned terms only by what they are not, which comically demonstrates his claim that lectures left few lasting gains. He compares no disciplines, mentions no failure, and is not teaching the terms.'
          },
          {
            question: 'Which description best characterizes the voice of the passage?',
            options: [
              'Earnest and reverent, deferring to established authority',
              'Bitter and accusatory, condemning hardworking people',
              'Witty and self-aware, mocking solemnity lightly',
              'Clinical and detached, reporting facts without opinion'
            ],
            correctAnswer: 2,
            explanation: 'Mock-legal diction, self-mockery, and comic pedantry create a witty, self-aware voice. Stevenson teases authority rather than deferring to it, never condemns the industrious bitterly, and offers opinion throughout.'
          }
        ]
      }
    }
  ]
};
