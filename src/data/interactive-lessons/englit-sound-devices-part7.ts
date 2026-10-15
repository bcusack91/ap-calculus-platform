export const englitSoundDevicesPart7Data = {
  topicSlug: 'englit-sound-devices',
  sections: [
    {
      id: 'englitso7-intro',
      type: 'text' as const,
      content: `
# 🎵 Sound Devices

**Part 7 of 7 — Sound Synthesis: Reading "Break, Break, Break"**

---

| Section |
|---------|
| 🧭 The Whole Toolkit in One Workflow |
| The Poem |
| Stanza-by-Stanza Reading |
| Putting It Into Words |
| Mixed Review |

> 🔑 **Key Concept:** This part pulls the topic together. You will read one short poem with every tool from Parts 1-6: individual sounds, sound families, pace, repetition, and the habit of tying every sound to meaning.

## 🧭 The Whole Toolkit in One Workflow

| Step | Question | Tools from this topic |
|---|---|---|
| 1. Sense | What happens, and what is the speaker's attitude? | Read twice before marking anything |
| 2. Sounds | Where do sounds cluster? Which families dominate? | Alliteration, assonance, consonance, sibilance, onomatopoeia, internal rhyme, euphony and cacophony (Parts 1-3) |
| 3. Pace | Where does the poem speed up or slow down? | Clusters, long vowels, monosyllables, light syllables (Part 4) |
| 4. Repetition and shape | What returns, and does its meaning change? | Anaphora, epistrophe, refrain, parallelism, polysyndeton, asyndeton, sentence length (Part 5) |
| 5. Movement | Does the sound change when the poem changes? | The shift is usually your line of reasoning (Part 6) |
| 6. Claim | What does the sound help the poem **mean**? | Thesis and commentary, mapped to Rows A-C (Part 6) |
`
    },
    {
      id: 'englitso7-poem',
      type: 'text' as const,
      content: `
## The Poem

> Break, break, break,
> On thy cold gray stones, O Sea!
> And I would that my tongue could utter
> The thoughts that arise in me.
>
> O well for the fisherman's boy,
> That he shouts with his sister at play!
> O well for the sailor lad,
> That he sings in his boat on the bay!
>
> And the stately ships go on
> To their haven under the hill;
> But O for the touch of a vanish'd hand,
> And the sound of a voice that is still!
>
> Break, break, break,
> At the foot of thy crags, O Sea!
> But the tender grace of a day that is dead
> Will never come back to me.
>
> — Alfred, Lord Tennyson, "Break, Break, Break," 1842

**Context:** Tennyson's close friend Arthur Henry Hallam died suddenly in 1833, at twenty-two. The poem is generally read as one of Tennyson's elegies for him, although it never names him. You do not need the biography to analyze the poem: the "vanish'd hand" and the "voice that is still" tell you that someone loved has died.

**Steps 1-2, first reading:** A grieving speaker stands by the sea. The sea keeps breaking; other people keep shouting, singing and sailing; the speaker cannot even put his thoughts into words.
`
    },
    {
      id: 'englitso7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**First Reading Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The speaker's attitude toward the fisherman's boy and the sailor lad is best described as`,
            options: [
              `wistful envy of their easy and untroubled joy`,
              `scorn for their ignorance of how short life is`,
              `parental worry about the dangers of the sea`,
              `pride in the hard working life of the coast`
            ],
            correctAnswer: 0,
            explanation: `"O well for" means "how fortunate," and the children can shout and sing while the speaker cannot even "utter" his thoughts. He does not scorn them, nothing suggests danger, and the stanza is about their play, not their work.`
          },
          {
            question: `In the first stanza, the relationship between the sea and the speaker is chiefly one of`,
            options: [
              `contrast between the sea's endless sound and his silence`,
              `harmony between the speaker's grief and the calm sea`,
              `rivalry, as the speaker tries to shout above the waves`,
              `fear, as the speaker dreads the storm the waves foretell`
            ],
            correctAnswer: 0,
            explanation: `The sea breaks again and again, but the speaker wishes his "tongue could utter / The thoughts that arise in me": the sea has a voice and he has none. The sea is breaking, not calm, and the speaker neither shouts nor fears a storm.`
          }
        ]
      }
    },
    {
      id: 'englitso7-reading',
      type: 'text' as const,
      content: `
## Stanza-by-Stanza Reading

| Stanza | Sound, pace and repetition | What it means |
|---|---|---|
| **1** | "Break, break, break" is three stressed monosyllables, each opening on a plosive *b* and closing on a *k*: no light syllable softens the blows. Then the long *o* of "cold," "stones," "O" (assonance) slows the line into a moan. | The sea's sound is relentless and heavy, and it can say what the speaker cannot ("I would that my tongue could utter") |
| **2** | Anaphora ("O well for ... O well for") and parallel clauses ("That he shouts ... That he sings"); light *b* alliteration in "boat on the bay" and quicker, lighter syllables | Other voices fill the air with play and song. The parallel rhythm sets their ease against the speaker's silence |
| **3** | "stately ships go on" moves smoothly; soft *h* in "haven under the hill." Then "But O for" breaks the pattern, and two parallel phrases pair "touch" with "sound" | Life goes on, calmly, to its harbor. The speaker wants back what was physical ("touch") and audible ("sound"). The "voice that is still" is a voice silenced: a poem full of sound arrives at silence |
| **4** | The opening line returns, but the poem now says "At the foot of thy crags," with harsher *k* sounds; "But" replaces "And." The *d* alliteration of "day that is dead" thuds, and the last line is plain one-syllable words | The sea's sound repeats exactly; the lost day will "never come back." Repetition in nature is set against a loss that cannot repeat |

### The key insight

The poem's refrain is the **sea's** sound, and it comes back, unchanged, at the end. The speaker's loss does not come back. The poem's design turns a sound device into its theme: everything in nature returns except the one thing he wants. And there is a final irony: a speaker who says he cannot "utter" his thoughts has just uttered a poem.
`
    },
    {
      id: 'englitso7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Pattern in "Break, Break, Break"** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"O well for the fisherman's boy ... / O well for the sailor lad" repeats its opening words as ___`,
            options: ['anaphora', 'epistrophe', 'refrain', 'polysyndeton']
          },
          {
            label: `The long o shared by "cold," "stones" and "O Sea" is ___`,
            options: ['assonance', 'alliteration', 'consonance', 'onomatopoeia']
          },
          {
            label: `The repeated d at the start of "day" and "dead" is ___`,
            options: ['alliteration', 'assonance', 'internal rhyme', 'sibilance']
          }
        ],
        correctAnswers: ['anaphora', 'assonance', 'alliteration'],
        hint1: 'The repetition comes at the start of successive lines.',
        hint2: 'A repeated vowel sound.',
        hint3: 'A repeated initial consonant sound.',
        explanation: '"O well for" begins two lines, which is anaphora; the shared long o of "cold," "stones" and "O" is assonance; and "day ... dead" repeats an initial consonant sound, which is alliteration.'
      }
    },
    {
      id: 'englitso7-words',
      type: 'text' as const,
      content: `
## Putting It Into Words

**A thesis (Row A):** In "Break, Break, Break," Tennyson sets the ceaseless, repeating sound of the sea against a speaker who cannot speak, so that the poem's own refrain becomes a measure of his grief: the waves always return, but "the tender grace of a day that is dead / Will never come back."

**A body sentence (Row B):** The poem ends where it began, with the three plosive blows of "Break, break, break," yet the line that follows has hardened from "cold gray stones" to the *k* sounds of "crags," as if the same sound grows harsher the longer the speaker has to listen to it.

**A move toward Row C:** The poem's last irony complicates its grief: a speaker who wishes his "tongue could utter / The thoughts that arise in me" has, by the end, found a voice, so the elegy itself becomes the utterance he said he could not make.

## Topic Review: Every Term in One Place

| Term | One-line definition |
|---|---|
| Alliteration | Repeated initial consonant sounds |
| Assonance | Repeated vowel sounds |
| Consonance | Repeated consonant sounds inside or at the ends of words |
| Sibilance | Repeated hissing *s*, *sh*, *z* sounds |
| Onomatopoeia | A word that imitates its sound |
| Internal rhyme | Rhyme within a line |
| Euphony / cacophony | Smooth, pleasant sound / harsh, clashing sound |
| Plosives, sibilants, liquids, nasals | Sound families: bursts, hisses, flows, hums |
| Pace and weight | How fast a line feels and how much effort it takes to say |
| Anaphora / epistrophe | Repetition at the start / at the end of successive units |
| Refrain | A recurring line or phrase whose meaning can grow |
| Parallelism | Units built in the same grammatical shape |
| Polysyndeton / asyndeton | Many conjunctions / none |

> 🔑 **AP Connection:** On exam day, sound is never a separate topic. It is evidence. Every sound observation you make should answer one of three questions: How does it shape **tone**? How does it mark a **shift**? How does it make the reader **feel** what the words say?
`
    },
    {
      id: 'englitso7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Which of the following best describes the effect of the return to "Break, break, break" in the last stanza?`,
            options: [
              `It sets the sea's endless return against a loss that never returns.`,
              `The repetition shows that the speaker has made peace with his loss.`,
              `The return signals that the dead friend will one day come back.`,
              `The repeated line shows that the storm at sea has grown worse.`
            ],
            correctAnswer: 0,
            explanation: `The sea's sound repeats exactly, and the very next lines say the lost day "Will never come back," so the repetition sharpens the loss. Nothing shows peace or hope of return, and the poem describes no storm.`
          },
          {
            question: `In context, "the sound of a voice that is still" is best described as`,
            options: [
              `a paradox that joins hearing to silence`,
              `onomatopoeia imitating the sea's roar`,
              `an internal rhyme that ties two lines`,
              `a refrain carried over from stanza one`
            ],
            correctAnswer: 0,
            explanation: `A voice that is "still" makes no sound, so the speaker longs for the sound of a silence, a paradox that captures loss. "Voice" and "still" do not imitate the sea, rhyme internally, or repeat a line from the first stanza.`
          },
          {
            question: `Pope's principle that "The sound must seem an echo to the sense" is best illustrated in Tennyson's poem by`,
            options: [
              `the heavy, unbroken stresses of the opening line's pounding waves`,
              `the speaker's stated wish that his tongue could utter what he thinks`,
              `the mention of stately ships going on to their haven under the hill`,
              `the poem's address to the sea as though the sea could hear him`
            ],
            correctAnswer: 0,
            explanation: `Three stressed monosyllables in a row make the line pound like waves on stone, so the sound acts out the sense. The speaker's wish, the ships and the address to the sea are matters of meaning, not of sound echoing meaning.`
          },
          {
            question: `A student claims that sound devices matter only in poetry. Which example best refutes the claim?`,
            options: [
              `Dickens's run of balanced clauses in prose`,
              `Keats's chain of verbs of ripening in "To Autumn"`,
              `Owen's onomatopoeic rattle of rifles in his sonnet`,
              `Poe's refrain at the end of each stanza of "The Raven"`
            ],
            correctAnswer: 0,
            explanation: `The opening of *A Tale of Two Cities* is prose built on anaphora, parallelism and rhythm. The other three examples are all from poems, so they cannot refute a claim about poetry.`
          }
        ]
      }
    }
  ]
}
