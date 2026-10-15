export const englangDevelopingArgumentsPart3Data = {
  topicSlug: 'englang-developing-arguments',
  sections: [
    {
      id: 'englangd3-intro',
      type: 'text' as const,
      content: `
# 🧠 Developing Arguments

**Part 3 of 7 — The Extended Example: Hazlitt's "On the Ignorance of the Learned," 1821**

---

| Section |
|---------|
| Three Ways to Use Examples |
| 📖 Hazlitt's Catalogs and His Portrait |
| How Hazlitt Develops a Single Anecdote |
| Building an Extended Example of Your Own |

> 🔑 **Key Concept:** On Question 3, a list of five quick examples usually scores lower than one or two examples developed in depth. The Row B descriptors reward **specific** evidence and commentary that **consistently** explains how it supports the line of reasoning, and a one-line example leaves no room for either. This part shows how a professional essayist decides when to list and when to dwell, and then builds an extended example step by step.

## Three Ways to Use Examples

| Kind | What it looks like | What it can prove | Risk on Q3 |
|---|---|---|---|
| **Catalog** | Many names or cases, a clause each | That a pattern is **widespread** | Every item stays general; nothing is explained |
| **Composite portrait** | A single "type" built from many observations | What a pattern **looks like** in a person | Reads as stereotype if it is never tied to a real case |
| **Extended example** | One case told in enough detail to show **how** something happened | **Why** the pattern holds, and where it stops | Turns into summary if the writer stops interpreting |

The catalog answers "how often?" The extended example answers "how?" and "why?" Arguments about human behavior usually need the second answer more than the first, because readers already accept that a pattern exists. What they doubt is the explanation.
`
    },
    {
      id: 'englangd3-hazlitt',
      type: 'text' as const,
      content: `
## 📖 Hazlitt's Catalogs and His Portrait

### The Situation

| Component | Details |
|---|---|
| **Writer** | William Hazlitt (1778–1830), English essayist and critic, who trained for the Unitarian ministry and then as a painter before turning to writing |
| **Text** | "On the Ignorance of the Learned," Essay VIII in *Table-Talk; or, Original Essays*, volume 1 (London: John Warren, 1821) |
| **Genre** | The familiar essay: personal, opinionated, written for general readers of magazines and collections |
| **Claim** | Book learning, pursued for its own sake, crowds out the observation and common sense that real knowledge needs |

### A Catalog: Showing Scale

Near the end of the essay Hazlitt piles up names of famous scholars and theologians.

> What actual benefit do we reap from the writings of a Laud or a Whitgift, or of Bishop Bull or Bishop Waterland, or Prideaux' Connections, or Beausobre, or Calmet, or St. Augustine, or Puffendorf, or Vattel

The catalog works for Hazlitt because its point is **quantity**: whole libraries of learned work, he suggests, have produced little "actual benefit." The names themselves are not explained, and they do not need to be. Notice, though, that the catalog proves nothing on its own. It assumes the reader already agrees these writers were useless.

A shorter catalog shows the weakness more plainly:

> Gray and Collins were among the instances of this wayward disposition.

Two poets are named as evidence that geniuses are poor students, and the essay moves on. A reader who knows nothing of Thomas Gray or William Collins has been given names, not evidence.

### A Composite Portrait: Showing the Pattern in a Person

Hazlitt's real development is a portrait of "the learned man," a type built from pointed contrasts.

> He thinks and cares nothing about his next-door neighbours, but he is deeply read in the tribes and castes of the Hindoos and Calmue Tartars. He can hardly find his way into the next street, though he is acquainted with the exact dimensions of Constantinople and Pekin.

> He can translate the same word into ten different languages, but he knows nothing of the thing which it means in any one of them.

Every sentence sets something near and real against something distant and bookish: the neighbor against the faraway tribe, the next street against Constantinople, the **word** against the **thing**. The repeated structure is the argument. By the tenth contrast, the reader has seen the same failure in every area of life, which a single claim could not have shown.

### When the Portrait Overreaches

> He cannot give a satisfactory answer to the plainest question, nor is he ever in the right in any one of his opinions, upon any one matter of fact that really comes before him

The familiar essay allows this kind of exaggeration; Hazlitt is entertaining as well as arguing. In a Q3 essay, absolute claims like "nor is he ever in the right" invite a single counterexample to topple them. Notice that Hazlitt himself admits one.
`
    },
    {
      id: 'englangd3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hazlitt\'s long catalog of scholars ("a Laud or a Whitgift, or of Bishop Bull...") is most effective at showing',
            options: [
              'how a particular scholar\'s habits led him into specific errors',
              'why readers should trust the judgment of an independent critic',
              'which of the listed writers produced the most useful work',
              'that the learning he criticizes fills whole library shelves'
            ],
            correctAnswer: 3,
            explanation: 'A catalog proves scale, and this one suggests that a vast body of learned writing has yielded little benefit. It explains no individual\'s errors, does not argue for Hazlitt\'s own authority, and ranks none of the writers.'
          },
          {
            question: 'The sentence "He can hardly find his way into the next street, though he is acquainted with the exact dimensions of Constantinople and Pekin" develops the portrait chiefly through',
            options: [
              'a historical anecdote that follows one real scholar through his career',
              'a contrast between what is close at hand and what is known only from books',
              'an appeal to the authority of travelers who had visited both of those cities',
              'a statistic about how rarely scholars of the period left their own towns'
            ],
            correctAnswer: 1,
            explanation: 'The sentence sets the familiar street against cities known only from books, the near-versus-far contrast that organizes the whole portrait. It names no real scholar, cites no travelers, and offers no figures.'
          },
          {
            question: 'A student wants to borrow Hazlitt\'s catalog technique for a Q3 essay. What is the main risk?',
            options: [
              'Unexplained names stay general and cannot carry the line of reasoning.',
              'Readers may object that lists of names are too informal for an exam essay.',
              'A catalog forces the writer to agree with the claim made in the prompt.',
              'Lists of names take far too long to write under timed exam conditions.'
            ],
            correctAnswer: 0,
            explanation: 'Row B rewards specific evidence that the writer explains, and a string of unexplained names gives the reader nothing to evaluate. Lists are not banned as informal, they do not force agreement, and the issue is weak development rather than time.'
          }
        ]
      }
    },
    {
      id: 'englangd3-anecdote',
      type: 'text' as const,
      content: `
## How Hazlitt Develops a Single Anecdote

### Handling the Counterexample

After mocking two unnamed scholars, Hazlitt names a famous Greek scholar of his own day, Richard Porson.

> Such was not Porson. He was an exception that confirmed the general rule, a man that, by uniting talents and knowledge with learning, made the distinction between them more striking and palpable.

This is development, not just a caveat. Porson could have destroyed the argument: a learned man who was not ignorant. Hazlitt turns him into support by drawing a **distinction** between three things the essay had blurred: **talents**, **knowledge**, and **learning**. Learning alone makes a pedant; learning joined to talent and knowledge makes a Porson. The counterexample sharpens the claim instead of sinking it.

### The Extended Anecdote: Baxter at Kidderminster

> The celebrated nonconformist divine, Baxter, was almost stoned to death by the good women of Kidderminster, for asserting from the pulpit that "hell was paved with infants' skulls;" but, by the force of argument, and of learned quotations from the Fathers, the reverend preacher at length prevailed over the scruples of his congregation, and over reason and humanity.

One sentence, but it contains a complete story with a turn:

| Stage | Text | What it does |
|---|---|---|
| **Situation** | A famous preacher, a congregation of "good women" | Sets common people against learning |
| **First outcome** | They nearly stone him for a monstrous claim | Common sense and feeling react correctly |
| **The turn** | "by the force of argument, and of learned quotations from the Fathers" | Learning enters as the cause of what follows |
| **Second outcome** | He "prevailed over the scruples of his congregation" | Learning defeats common sense |
| **Commentary in the syntax** | "and over reason and humanity" | The last phrase tells the reader how to judge the victory |

The anecdote does what the catalog could not: it shows the **mechanism** by which learning becomes "a foil to common sense," Hazlitt's phrase from his first paragraph. The congregation's first judgment was right; quotations from authorities talked them out of it. The final phrase, which makes "reason and humanity" two more things Baxter "prevailed over," is commentary built into the sentence.

> 🔑 **AP Connection:** In a Section I passage, a question about a sentence like this often asks what the final phrase "serves to" do. The answer is usually that it **evaluates** the event it narrates. In your own essays, the same move shows up as a final clause that tells the reader what an example means.
`
    },
    {
      id: 'englangd3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A string of many names or cases, each mentioned briefly to show that a pattern is widespread, is a _______.

2) Hazlitt saves his claim from the Porson counterexample by drawing a _______ between learning, talents, and knowledge.

3) One case told in enough detail to show how and why something happened is an _______ example.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['catalog', 'distinction', 'extended'],
        hint1: 'Like a list in a library or store; it shows quantity.',
        hint2: 'Separating two things the reader might treat as one.',
        hint3: 'The opposite of a brief or passing example.',
        explanation: 'A catalog shows how widespread a pattern is, a distinction separates ideas a counterexample seemed to merge, and an extended example shows how and why a pattern works.'
      }
    },
    {
      id: 'englangd3-build',
      type: 'text' as const,
      content: `
## Building an Extended Example of Your Own

*Practice prompt written for this lesson, modeled on the format of AP argument prompts.*

> In his essay "On the Ignorance of the Learned" (1821), William Hazlitt wrote that "Learning is, in too many cases, but a foil to common sense; a substitute for true knowledge." Write an essay that argues your position on the extent to which formal learning helps or hinders people's understanding of the world.

### Version 1: The List Paragraph

> Many times in history, educated experts have been wrong. Galileo was attacked by the Church. Semmelweis told doctors to wash their hands and they did not listen. The Wright brothers had no college degrees but invented the airplane. Experts also said the Titanic could not sink. These examples prove that learning can be a substitute for true knowledge.

*Student paragraph written for this lesson.*

Four examples, none explained. The paragraph cannot say **why** learning misled anyone, so its final sentence simply repeats Hazlitt.

### Version 2: The Extended Example

> (1) Formal learning hinders understanding when it tells people what they will see before they look. (2) In 1847, in the maternity wards of the Vienna General Hospital, the physician Ignaz Semmelweis noticed that mothers in the clinic staffed by doctors and medical students died of childbed fever far more often than mothers in the clinic staffed by midwives. (3) After a colleague died from a cut received during an autopsy, with symptoms like the mothers', Semmelweis concluded that the doctors, who came from the dissecting room to the delivery room, were carrying the disease on their hands. (4) He required everyone who examined patients there to wash in a chlorine solution, and deaths in the doctors' clinic fell sharply. (5) Yet many leading physicians rejected his conclusion, and the reason is the point: their training had already taught them what fever was, and that explanation did not include their own hands. (6) The learned were not ignorant of medicine; they were too certain of it to count. (7) Semmelweis was himself a trained doctor, which complicates Hazlitt's claim: learning did not blind him, because he kept testing it against what he saw. (8) Learning becomes "a foil to common sense," then, not when people know too much, but when what they know stops answering to what they observe.

*Student paragraph written for this lesson.*

| Sentence | Move | Why it matters |
|---|---|---|
| 1 | **Claim**, already a distinction: learning hinders *when* | Gives the example a job before it begins |
| 2 | **Situate**: place, date, the comparison of two clinics | Specific details a reader can picture and check |
| 3–4 | **Narrate the turn**: the inference and the test | Shows the example could have failed, which makes it a test |
| 5–6 | **Interpret**: why the experts resisted | Commentary that explains the mechanism, as Hazlitt's Baxter sentence does |
| 7 | **Complicate**: the hero was learned too | Uses the example against the prompt's absolute version |
| 8 | **Extend**: return to the claim, now refined | The line of reasoning has moved |

### Four Rules for Extended Examples

1. **Choose the example for its turn.** The best extended example contains a moment where things could have gone either way.
2. **Use details you are sure of.** Every fact in Version 2 is one a student could know; it has no invented statistics.
3. **Spend more words interpreting than narrating.** Sentences 5–8 are half the paragraph.
4. **Let the example push back.** Sentence 7 is where a strong example earns more than agreement: it shows the writer what the claim gets wrong.
`
    },
    {
      id: 'englangd3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature most clearly makes Version 2 stronger than Version 1?',
            options: [
              'It refers to a more famous and more widely admired historical figure.',
              'It includes more examples from science, giving the paragraph wider range.',
              'It explains why the experts resisted, showing how learning can mislead.',
              'It avoids quoting Hazlitt so that the student\'s voice stays independent.'
            ],
            correctAnswer: 2,
            explanation: 'Version 2 explains the mechanism, that the physicians\' training told them what fever was, which is the commentary Row B rewards. Version 1 also mentions Semmelweis, Version 2 uses fewer examples, and it does quote Hazlitt in its final sentence.'
          },
          {
            question: 'Sentence 7 ("Semmelweis was himself a trained doctor...") chiefly serves to',
            options: [
              'refine the claim by showing that learning misleads only when it stops being tested',
              'concede that the paragraph\'s example is too unusual to prove anything',
              'shift the paragraph\'s focus from medicine to the history of science',
              'praise Semmelweis\'s education as the main cause of his discovery'
            ],
            correctAnswer: 0,
            explanation: 'By noting that the discoverer was learned too, the student narrows the claim to learning that no longer answers to observation, which sentence 8 then states. The sentence does not abandon the example, change the subject, or credit his training as the cause.'
          },
          {
            question: 'A student has room for one more sentence after sentence 4. Which addition would best continue the development of the extended example?',
            options: [
              'Semmelweis was born in Buda in 1818 to a family of grocers.',
              'This shows that handwashing is very important in hospitals.',
              'The drop mattered, for nothing in the clinic had changed but the hands.',
              'Many other scientists have also been ignored by experts.'
            ],
            correctAnswer: 2,
            explanation: 'This sentence interprets the result, showing why the falling death rate supports Semmelweis\'s inference. The birth detail is off the line of reasoning, the handwashing sentence draws the wrong lesson, and the general claim slides back toward a list.'
          }
        ]
      }
    }
  ]
};
