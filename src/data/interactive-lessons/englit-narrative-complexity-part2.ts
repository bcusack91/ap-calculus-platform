export const englitNarrativeComplexityPart2Data = {
  topicSlug: 'englit-narrative-complexity',
  sections: [
    {
      id: 'englitna2-intro',
      type: 'text' as const,
      content: `
# 🧠 Narrative Complexity

**Part 2 of 7 — Story Order and Telling Order**

---

| Section |
|---------|
| 📖 Two Timelines in Every Narrative |
| The Moonstone: Three Layers of Time |
| The Sound and the Fury: Time Shifts Without Warning |
| Why Authors Reorder Events |
| Writing About Order |

> 🔑 **Key Concept:** Skills **3.A** (how plot orders events), **3.B** (the function of a particular sequence of events) and **3.C** (the function of structure) ask what an author gains by telling events in a particular order. Part 1 showed that complex narratives resist one-sentence summaries. One reason is that the order of the telling rarely matches the order of the events.
`
    },
    {
      id: 'englitna2-terms',
      type: 'text' as const,
      content: `
## 📖 Two Timelines in Every Narrative

Every narrative has two orders at once:

- the **story order**: what happened, in the order it happened (critics sometimes call this the *fabula*);
- the **telling order**: the order in which the text reveals those events (sometimes called the *syuzhet* or discourse).

When the two differ, the gap is itself a choice you can analyze.

| Term | Definition | Quick example |
|---|---|---|
| **Chronological order** | Events told in the order they occurred | A story that runs from morning to night |
| **Analepsis (flashback)** | A move back to events earlier than the main line of the story | A narrator breaks off to describe childhood |
| **Prolepsis (flash-forward)** | A move ahead to events that happen later | "I would regret that promise for years" |
| **In medias res** | Beginning in the middle of the action, with earlier events supplied later | Homer's *Iliad* opens in the tenth year of the Trojan War |
| **Ellipsis (time gap)** | A stretch of story time skipped entirely | "Two years passed." |
| **Narrating present** | The moment from which a retrospective narrator tells the story | A diarist writing on the night after the events |

One famous opening sentence uses both moves at once: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice." (Gabriel García Márquez, *One Hundred Years of Solitude*, 1967, tr. Gregory Rabassa, 1970.) The sentence leaps ahead to the firing squad, then back to the afternoon with the ice, before the novel has properly begun.
`
    },
    {
      id: 'englitna2-moonstone',
      type: 'text' as const,
      content: `
## The Moonstone: Three Layers of Time

Wilkie Collins's *The Moonstone* (1868) is often called one of the first full-length English detective novels. Its first pages set up three different times.

**Layer 1. The Prologue**, headed "THE STORMING OF SERINGAPATAM (1799)" and labeled as "Extracted from a Family Paper." A soldier writes from India:

> I address these lines—written in India—to my relatives in England.
>
> My object is to explain the motive which has induced me to refuse the right hand of friendship to my cousin, John Herncastle.

He tells how his cousin took a sacred Yellow Diamond during the looting of the palace.

**Layer 2. The main story**, headed "THE LOSS OF THE DIAMOND (1848)." Forty-nine years have been skipped.

**Layer 3. The narrating present.** The house-steward Gabriel Betteredge writes his account two years after the loss:

> Only this morning (May twenty-first, eighteen hundred and fifty), came my lady's nephew, Mr. Franklin Blake, and held a short conversation with me...
>
> — Wilkie Collins, *The Moonstone*, 1868

### Mapping the Layers

| Time | What happens | Who tells it | What the placement does |
|---|---|---|---|
| 1799 | The Diamond is taken in a scene of violence | Herncastle's cousin, in a family paper | Readers learn the jewel's guilty origin before any character in 1848 does |
| 1848 | The Diamond arrives at a Yorkshire house and vanishes overnight | Betteredge, first | The mystery plot |
| 1850 | Betteredge sits down to write | Betteredge | Everything in the 1848 story is already over and being remembered |

**What the order does.** Because the 1799 prologue comes first, the 1848 birthday gift is shadowed from the start: readers know the stone was taken in a scene of plunder, so the English country house is linked to the violence of empire. And because Betteredge writes in 1850, he knows how the story ends. His hints ("if *that* isn't prophecy, what is?") create suspense by reminding us that the narrator already knows.
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
            question: `In *The Moonstone*, placing the 1799 prologue before the 1848 story primarily serves to`,
            options: [
              `establish the Diamond's violent origin before the mystery begins`,
              `prove that Betteredge is the most trustworthy narrator in the novel`,
              `show that the events of 1848 happened earlier than readers expect`,
              `reveal at the outset who will steal the Diamond in Yorkshire`
            ],
            correctAnswer: 0,
            explanation: `The family paper tells how the stone was taken during the storming of a palace, so the later country-house loss carries that history with it. The prologue does not name the 1848 thief, and it is written by a different narrator from Betteredge.`
          },
          {
            question: `Betteredge's statement that he is writing on "May twenty-first, eighteen hundred and fifty" identifies`,
            options: [
              `the day the Diamond disappeared`,
              `the narrating present of the steward's account`,
              `the date of the storming of the palace`,
              `the moment the story begins in medias res`
            ],
            correctAnswer: 1,
            explanation: `The date fixes when Betteredge sits down to write, two years after the 1848 loss, so his account is retrospective. The palace was stormed in 1799, and the date marks the act of writing rather than a point in the action.`
          },
          {
            question: `The jump from 1799 to 1848 is best described as`,
            options: [
              `a prolepsis that predicts a later crime`,
              `an analepsis that returns to the prologue`,
              `an ellipsis that skips decades of story time`,
              `an in medias res opening that drops readers into battle`
            ],
            correctAnswer: 2,
            explanation: `Forty-nine years pass between the prologue and the main story without being narrated, which is an ellipsis. Nothing returns to the prologue, and the 1848 story is told in its own time rather than predicted.`
          }
        ]
      }
    },
    {
      id: 'englitna2-faulkner',
      type: 'text' as const,
      content: `
## The Sound and the Fury: Time Shifts Without Warning

William Faulkner's *The Sound and the Fury* (1929; public domain in the United States since 2025) opens with a section headed "APRIL SEVENTH, 1928," narrated by Benjy Compson, a thirty-three-year-old man with a severe cognitive disability. His caretaker that day is a boy named Luster. Benjy cannot arrange events in order; for him, a memory is not "then" but "now."

> We went along the fence and came to the garden fence, where our shadows were. My shadow was higher than Luster's on the fence. We came to the broken place and went through it.
>
> "Wait a minute." Luster said. "You snagged on that nail again. Cant you never crawl through here without snagging on that nail."
>
> *Caddy uncaught me and we crawled through. Uncle Maury said to not let anybody see us, so we better stoop over, Caddy said. Stoop over, Benjy. Like this, see. We stooped over and crossed the garden, where the flowers rasped and rattled against us. The ground was hard.*
>
> — William Faulkner, *The Sound and the Fury*, 1929

### A Worked Reading of the Shift

| Detail | What it tells you |
|---|---|
| "You snagged on that nail again" | The present (1928). The word "again" hints that the snag has happened before. |
| The switch to italics | The 1929 edition used italic type to signal many (not all) of Benjy's shifts in time |
| "Caddy uncaught me" | A different moment: his sister Caddy, a child, frees him from the same nail |
| "The ground was hard" and, soon after, talk of hands getting "froze on Christmas" | Winter, years earlier, not the April of the frame day |
| No "I remember" | Benjy does not mark the memory as past; the reader must do the sorting |

**How readers sort Benjy's time.** Readers often date a scene by who is looking after Benjy: Luster in 1928, and earlier servants (Versh, then T. P.) in his childhood and youth. The text gives clues but never a timeline.

**What the order does.** One physical sensation, a snag on a nail, opens a door into the past. The structure imitates association, the way the mind moves by links rather than by dates. And because Caddy appears only in these memory fragments, her absence in 1928 is felt as loss before readers know why she is gone. Faulkner's title alludes to Macbeth's description of life as "a tale / Told by an idiot, full of sound and fury, / Signifying nothing."
`
    },
    {
      id: 'englitna2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Time Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Benjy is snagged on a nail in 1928, and the next sentence shows Caddy freeing him years earlier: ___`,
            options: ['analepsis', 'prolepsis', 'ellipsis', 'in medias res']
          },
          {
            label: `"Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember...": the first clause is ___`,
            options: ['prolepsis', 'analepsis', 'ellipsis', 'narrating present']
          },
          {
            label: `Homer's *Iliad* begins in the tenth year of the Trojan War: ___`,
            options: ['in medias res', 'ellipsis', 'prolepsis', 'narrating present']
          }
        ],
        correctAnswers: ['analepsis', 'prolepsis', 'in medias res'],
        hint1: 'The story moves from the present back into childhood.',
        hint2: 'The sentence leaps forward to a moment that has not happened yet in the story.',
        hint3: 'The poem starts with the war already long under way.',
        explanation: 'Caddy freeing Benjy is a move back in time (analepsis); "Many years later... was to remember" leaps ahead (prolepsis); and beginning in the war\'s tenth year starts the story in the middle of things (in medias res).'
      }
    },
    {
      id: 'englitna2-functions',
      type: 'text' as const,
      content: `
## Why Authors Reorder Events

| Choice | Typical effect | Example |
|---|---|---|
| **Backstory first (prologue)** | Gives readers knowledge the characters lack; frames the main story with a history | *The Moonstone*'s 1799 family paper |
| **Retrospective telling** | The narrator knows the ending, so hints and regrets color the account | Betteredge writing in 1850 |
| **Prolepsis** | Trades the suspense of *what* for the suspense of *how* or *why*; can sound fatalistic | García Márquez's firing squad |
| **Unmarked analepsis** | Imitates memory and association; makes the reader do the work of ordering | Benjy's snag on the nail |
| **Delayed cause** | Withholds the event that explains everything, sustaining mystery | A detective plot that reveals the crime last |
| **In medias res** | Starts with energy and conflict; explains later | The *Iliad* |

### Common Misconceptions

- **"Nonlinear means confusing on purpose."** The disorder usually follows a logic, such as association, suspense or irony. Your job is to name that logic.
- **"A flashback just gives background."** Ask why the past arrives *at this moment*. Benjy's memory of Caddy arrives because of the nail, and the link is the meaning.
- **"Knowing the ending kills suspense."** Prolepsis moves the suspense from the outcome to the process, which often makes readers pay closer attention.
`
    },
    {
      id: 'englitna2-writing',
      type: 'text' as const,
      content: `
## Writing About Order

| Weak | Strong |
|---|---|
| "Collins uses a flashback at the beginning." | "By opening with the 1799 plunder before the 1848 birthday, Collins makes the Diamond's disappearance from an English country house the latest episode in a story of imperial theft." |
| "Faulkner's Benjy section jumps around in time." | "Because a snag on a nail can carry Benjy from 1928 back to a winter afternoon with Caddy, Faulkner makes memory feel like present experience, so Caddy's absence registers as a loss before it is explained." |

> 🔑 **AP Connection:** Section I questions often ask about "the shift" in a passage or the function of a "sequence of events." When a passage moves in time, ask three questions: *What signal marks the shift? What does the new time add? What would be lost if the events were told in order?*
`
    },
    {
      id: 'englitna2-input',
      type: 'input-boxes' as const,
      content: `
**Name the Term** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `A move back in time to events earlier than the main line of the story (the technical term)`,
            answer: 'analepsis',
            acceptableAnswers: ['flashback', 'analepses']
          },
          {
            question: `A move ahead in time to events that happen later (the technical term)`,
            answer: 'prolepsis',
            acceptableAnswers: ['flash-forward', 'flashforward', 'flash forward']
          },
          {
            question: `A stretch of story time that the narrative skips over entirely`,
            answer: 'ellipsis',
            acceptableAnswers: ['time gap', 'gap']
          }
        ],
        hint1: 'From Greek roots meaning "taking up again"; it begins with "ana."',
        hint2: 'From Greek roots meaning "taking beforehand"; it begins with "pro."',
        hint3: 'The same word names the three dots that mark an omission in a quotation.',
        explanation: 'Analepsis moves back, prolepsis moves ahead, and ellipsis leaves time out.'
      }
    }
  ]
}
