export const psychRetrievalPart1Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 1 of 7 — Recall, Recognition and Retrieval Cues**

Try to name all seven dwarfs from *Snow White* right now; most people stall at four or five, yet almost everyone can pick all seven out of a list in seconds.

### 📚 Where Retrieval Fits

Memory is usually described as three processes. The memory-encoding-storage lessons cover the first two; this topic is about the third, and about what goes wrong.

| Process | Question it answers | Example |
|---------|--------------------|---------|
| **Encoding** | How does information get in? | Reading a definition and linking it to an example |
| **Storage** | How is it kept over time? | The definition sits in long-term memory for weeks |
| **Retrieval** | How do we get it back out when we need it? | Producing the definition on a quiz |

Retrieval is the moment memory is actually used. A memory that is stored but cannot be retrieved is, for practical purposes, the same as a memory that was never stored, which is why so much of this topic is about *access* rather than *storage*.

### The Two Ways to Retrieve (CED 2.6.A.1)

The AP Psychology CED defines the two retrieval processes this way:

| Process | CED definition | What you must do | Everyday and test examples |
|---------|---------------|------------------|---------------------------|
| **Recall** | Remembering **without cues** | Search memory and *generate* the answer yourself | Essay and short-answer questions, listing the dwarfs, naming every classmate from your first-grade class |
| **Recognition** | Retrieval that **relies on retrieval cues** | *Identify* the answer when it is presented to you | Multiple-choice and matching questions, choosing the dwarfs from a list, picking a suspect from a lineup |

The dwarfs demonstration shows the core finding: **recognition is usually easier than recall.** In a recognition task, the target itself is presented, so it works as the strongest possible retrieval cue. You only have to judge "Have I seen this before?" In a recall task, you must first *find* the information and then check it, with nothing outside your own head to guide the search.

### A Classic Demonstration

In a well-known study of long-term memory for high school classmates, researchers tested adults who had graduated anywhere from a few months to several decades earlier.

- **Recognition** of classmates' faces and names from yearbook photos stayed remarkably high even decades after graduation.
- **Free recall** of classmates' names, with no photos or lists, was far lower and dropped off much more steeply with time.

The same people, with the same stored memories, looked like they remembered a lot or very little depending on *how* retrieval was tested.

> **AP Connection:** When a question asks you to "explain" why someone can choose an answer but cannot produce it, the expected reasoning is: the information is stored, the recognition task supplies a retrieval cue, and the recall task does not.
      `
    },
    {
      id: 'retrieval-forgetting-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Asked to write down the seven dwarfs from Snow White, Jalen lists only four. Shown a list of fourteen names, he correctly picks all seven. Which conclusion is BEST supported?',
            options: [
              'The three missing names were stored but not accessible without cues',
              'Those three names were never encoded into long-term memory',
              'The list caused retroactive interference with his earlier answers',
              'His written test measured implicit rather than explicit memory'
            ],
            correctAnswer: 0,
            explanation: 'Jalen could pick all seven when the names were presented, so all seven must have been stored. The written test required recall without cues, and three names were stored but not accessible until the list supplied them as cues.'
          },
          {
            question: 'On which task would a student\'s score depend on recognition rather than recall?',
            options: [
              'Writing the definition of each term in a short essay response',
              'Choosing the correct term from four options on a quiz',
              'Explaining each term aloud to a classmate from memory',
              'Listing every term from the unit on a blank sheet of paper'
            ],
            correctAnswer: 1,
            explanation: 'Choosing among four presented options is recognition, because the correct term is shown and acts as a retrieval cue. Writing definitions, explaining terms aloud and listing terms on a blank page all require generating the answer without cues, which is recall.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p1-s3-deep',
      type: 'text' as const,
      content: `
### 📚 Retrieval Cues: Getting to What Is Stored

A **retrieval cue** is any stimulus that helps you access a stored memory: a word, a picture, a smell, a song, a place, a question. Psychologists often picture long-term memory as a web of associations. Each memory is linked to other memories, and each link is a possible path back to it. A cue works by activating one part of the web, and that activation spreads along the links to the target.

**Available versus accessible.** A classic experiment had participants study long lists of words drawn from categories (for example, several animals, several fruits and several tools). Later, one group simply wrote down every word they could remember. Another group received the category names as cues. The cued group remembered many more words. The uncued group had not lost those words; the words were **available** (stored) but not **accessible** (retrievable) without the right cue.

| Term | Meaning | Clue in a scenario |
|------|---------|-------------------|
| **Available** | The memory is stored in long-term memory | The person later remembers it when given a hint |
| **Accessible** | The memory can be retrieved right now | The person can produce it on demand |
| **Retrieval failure** | Stored, but not accessible at the moment | "I know it, I just can't get to it" |

### Why Encoding Shapes Retrieval

Cues only work if they connect to something that was encoded with the memory. If you learned "hippocampus" while picturing a seahorse (the word's Greek root), then a seahorse picture later becomes an excellent cue. If you only repeated the word, there are few links to follow. This is why **how you encode** information (covered in the encoding lessons) predicts **how easily you can retrieve it**: richer, more meaningful encoding builds more retrieval routes.

Psychologists summarize this with the idea that a cue is most effective when it matches the way the information was originally encoded. Part 2 of this topic applies that idea to places, physical states and moods.

### Common Retrieval Cues

| Cue type | Example |
|----------|---------|
| **Verbal** | A teacher says "It starts with *pro*-..." and you produce "proactive interference" |
| **Category** | Thinking "fruits" helps you recall the grocery items you forgot |
| **Sensory** | The smell of sunscreen brings back a specific beach trip |
| **Contextual** | Walking back into the kitchen reminds you why you went there |
| **The target itself** | Seeing the correct answer among the options on a multiple-choice item |

> **AP Connection:** The last row is the reason recognition counts as cued retrieval. On a multiple-choice item the key itself is a cue, so a student can recognize a term they could not have recalled. Studying only by recognition (rereading, glancing at flashcard answers) therefore prepares you poorly for recall tasks such as free-response questions.
      `
    },
    {
      id: 'retrieval-forgetting-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️

Type the single standard term for each description. (Yes, this box is a recall task.)
      `,
      exercise: {
        questions: [
          {
            question: 'Remembering information without any cues, as when answering an essay question, is called _____.',
            answer: 'recall',
            acceptableAnswers: ['free recall'],
            explanation: 'The CED defines recall as remembering without cues: you must generate the information yourself.'
          },
          {
            question: 'Identifying information when it is presented to you, as when choosing a suspect from a lineup, is called _____.',
            answer: 'recognition',
            acceptableAnswers: ['recognize'],
            explanation: 'Recognition relies on retrieval cues; the presented item itself is the cue.'
          },
          {
            question: 'A stimulus such as a smell, a category name or a hint that helps you access a stored memory is called a retrieval _____.',
            answer: 'cue',
            acceptableAnswers: ['cues', 'retrieval cue'],
            explanation: 'Retrieval cues activate associated parts of the memory network and lead you to the target memory.'
          }
        ],
        hint1: 'Think of an essay question: you must produce the answer with nothing to prompt you.',
        hint2: 'Think of a multiple-choice question: the answer is in front of you and you only have to identify it.',
        hint3: 'It is the "trigger" that leads you back to the memory. One short word.'
      }
    },
    {
      id: 'retrieval-forgetting-p1-s5-methods',
      type: 'text' as const,
      content: `
### 📚 Measuring Retrieval in Research

Because recall and recognition give such different pictures of memory, a study's conclusions depend on which one it uses as the **operational definition** of "memory."

| Measure | Typical operational definition | Strength | Limitation |
|---------|-------------------------------|----------|------------|
| **Free recall** | Number of studied words a participant writes down in 2 minutes | Shows what a person can retrieve unaided | Underestimates what is stored |
| **Recognition** | Number of studied words correctly identified as "old" in a mix of old and new words | Detects weaker memories | Can be inflated by guessing "old" |

**The false-alarm problem.** In a recognition test, some words are new (never studied). Saying "old" to a studied word is a **hit**; saying "old" to a new word is a **false alarm**. A participant who answers "old" to every word gets every hit but also every false alarm. Good recognition studies therefore score performance using both, for example hits minus false alarms, so that guessing does not look like memory.

### Worked Example: Reading a Practice Study

*Practice study (not a real citation):* Forty volunteers studied 30 unrelated words. Every participant then completed both a free-recall test and a recognition test (30 old words mixed with 30 new words). Half took recall first and half took recognition first, assigned at random.

| Measure | Mean result |
|---------|-------------|
| Free recall | 11 of 30 words (37%) |
| Recognition hits | 25 of 30 old words (83%) |
| Recognition false alarms | 4 of 30 new words (13%) |

**Step 1: Identify the design.** Every participant did both tests, so this is a **within-subjects** (repeated-measures) design. The independent variable is the type of retrieval test; the dependent variable is the number of words remembered.

**Step 2: Explain the counterbalancing.** Taking one test first could change performance on the second (the first test re-exposes the words). Randomly assigning half to each order spreads this order effect evenly across both conditions.

**Step 3: Interpret.** Even after allowing for the false alarms, recognition (83% hits against 13% false alarms) shows far more stored information than recall (37%). The words were available, but many were not accessible without cues.

> **AP Connection:** On an Article Analysis Question you may be asked how a variable was operationally defined. "Memory" alone earns nothing; "the number of studied words correctly written within two minutes" is a complete operational definition.
      `
    },
    {
      id: 'retrieval-forgetting-p1-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Retrieval Task** 🔍

For each situation, choose the memory process being measured.
      `,
      exercise: {
        dropdowns: [
          { label: 'Writing the names of all fifty U.S. states from memory on a blank sheet', options: ['Recognition', 'Recall', 'Relearning', 'Encoding'] },
          { label: 'Picking the person who stole your bike out of a set of six photographs', options: ['Recall', 'Encoding', 'Recognition', 'Relearning'] },
          { label: 'Memorizing a poem again in 4 practice runs when it first took 12 runs', options: ['Relearning', 'Recognition', 'Recall', 'Encoding'] },
          { label: 'Saying "I have definitely seen that face before" when meeting someone at a party', options: ['Encoding', 'Relearning', 'Recall', 'Recognition'] }
        ],
        correctAnswers: ['Recall', 'Recognition', 'Relearning', 'Recognition'],
        hint1: 'Ask: is the target in front of the person, or must they produce it themselves?',
        hint2: 'The photo set presents the target; the blank sheet does not.',
        hint3: 'Needing fewer runs the second time shows "savings" from earlier learning.',
        explanation: 'Writing states on a blank sheet is recall (no cues). Choosing from photographs and judging a face as familiar are recognition (the target is presented). Learning a poem faster the second time is relearning, which reveals memory even when recall and recognition fail; Part 4 uses it to measure forgetting.'
      }
    },
    {
      id: 'retrieval-forgetting-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬

*Practice study (not a real citation):* Participants studied 40 words. Half later took a free-recall test; the other half took a recognition test containing the 40 studied words plus 40 new words.
      `,
      exercise: {
        questions: [
          {
            question: 'In the recognition group, one participant answered "old" to all 80 words. Why should researchers count false alarms when scoring this test?',
            options: [
              'Calling new words "old" shows that guessing can inflate the score',
              'Saying "old" to new words shows that recall was measured by mistake',
              'Answering "old" to every word shows the words were never encoded',
              'Labeling studied words "old" shows that recognition requires no cues'
            ],
            correctAnswer: 0,
            explanation: 'A participant who calls every word "old" gets every studied word right without remembering anything. Counting false alarms to new words separates real recognition from a guessing strategy.'
          },
          {
            question: 'Category names given as cues at test help participants remember words they left out of free recall. This finding BEST supports which idea?',
            options: [
              'Forgotten words had faded from storage and were relearned during the test',
              'Many unrecalled words were stored and became accessible with cues',
              'Category names caused proactive interference with the earlier words',
              'Recall and recognition draw on two different long-term memory stores'
            ],
            correctAnswer: 1,
            explanation: 'If the words had faded from storage, a category name could not bring them back. The cue restored access to words that were available but not accessible, which is retrieval failure rather than storage loss.'
          },
          {
            question: 'Priya rereads her notes until every page looks familiar, then blanks on a free-response question asking her to explain the same terms. What BEST explains the gap?',
            options: [
              'Rereading strengthened her recall of the terms but weakened her recognition',
              'Her free-response answers were limited by the capacity of sensory memory',
              'Rereading built her recognition, but the essay task demanded uncued recall',
              'Familiar notes produced state-dependent memory that the testing room lacked'
            ],
            correctAnswer: 2,
            explanation: 'Seeing a page and feeling "I know this" is recognition, because the notes themselves are the cue. The free-response question required her to generate the explanations without cues, which is recall, a harder task that rereading did not practice.'
          }
        ]
      }
    }
  ]
}
