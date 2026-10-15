export const psychRetrievalPart5Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 5 of 7 — Why Memories Fail**

You have handled thousands of pennies, yet in a classic study most people could not pick the real penny design out of a set of similar drawings.

### 📚 Three Reasons Memories Are Hard to Retrieve (CED 2.7.A.2)

The CED lists three reasons many memories are difficult to retrieve. The key to telling them apart is asking **where the process broke down**.

| Reason | Where it breaks down | Signature in a scenario |
|--------|---------------------|-------------------------|
| **Encoding failure** | The information never got into long-term memory | No cue, hint or second chance helps, because there is nothing stored to find |
| **Interference** (proactive or retroactive) | Other, similar memories compete with the one you want | The person retrieves the *wrong* similar item, or the two get mixed up |
| **Inadequate retrieval** (for example, the **tip-of-the-tongue phenomenon**) | The memory is stored, but the cues are not enough to reach it | The person feels sure they know it, gets partial information, and retrieves it later with the right cue |

### Encoding Failure

We do not encode everything we perceive. Attention is limited, and information we never attend to (or attend to only shallowly) never makes it into long-term memory.

- **The penny.** People see pennies constantly but only need to know color and size to use them, so details such as which way Lincoln faces or where the date is are rarely encoded. Asked to choose the correct design, many people fail.
- **Everyday versions.** Not knowing the color of your neighbor's front door, forgetting a name you "heard" while distracted at a party, being unable to recall a single sentence from a page you read while texting.

**The test for encoding failure:** if the information was never stored, a retrieval cue cannot help and relearning shows no savings (Part 4). Contrast this with retrieval failure in Part 1, where a cue suddenly brings the memory back.

> **AP Connection:** Forgetting a name *seconds* after an introduction is usually encoding failure, not interference or decay: your attention was on your own name, the handshake or what to say next, so the new name was never encoded.
      `
    },
    {
      id: 'retrieval-forgetting-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After moving, Tess keeps writing her old address on forms when she means to write her new one. Which explanation BEST fits?',
            options: [
              'Retroactive interference',
              'Proactive interference',
              'Encoding failure',
              'Tip-of-the-tongue phenomenon'
            ],
            correctAnswer: 1,
            explanation: 'An older memory (the old address) is disrupting retrieval of newer information (the new address). Old interfering with new is proactive interference; retroactive interference runs the other way.'
          },
          {
            question: 'After a year of studying Spanish, Ben finds that the French he took in middle school keeps coming out as Spanish words when he tries to speak it. What is happening?',
            options: [
              'Earlier French learning is disrupting his retrieval of the Spanish',
              'His French was never stored in long-term memory in the first place',
              'Newer Spanish learning is disrupting his retrieval of older French',
              'The French words are stored, but he lacks a cue to reach any of them'
            ],
            correctAnswer: 2,
            explanation: 'New learning (Spanish) is interfering with retrieval of older learning (French), which is retroactive interference. Spanish words intruding into his French shows that the newer memories are competing with the older ones.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p5-s3-interference',
      type: 'text' as const,
      content: `
### 📚 Interference in Depth

| Type | Direction | Memory aid | Example |
|------|-----------|-----------|---------|
| **Proactive interference** | **Old** learning disrupts retrieval of **new** learning | **Pro** = forward: the past pushes forward into the present | Calling your new partner by your ex's name; typing an old password |
| **Retroactive interference** | **New** learning disrupts retrieval of **old** learning | **Retro** = backward: the present reaches back into the past | After learning a new phone number, you can no longer recall your old one |

**A reliable test:** identify *which* memory you are trying to retrieve. If you are trying to retrieve the **newer** information and the old gets in the way, it is proactive. If you are trying to retrieve the **older** information and the new gets in the way, it is retroactive.

**Similarity matters.** Interference is strongest when the competing memories are similar: two Romance languages, two passwords, two lists of vocabulary from the same unit. Studying psychology right after a chemistry session produces less interference than studying two psychology units back to back.

### Worked Example: The Experimental Designs

Researchers test interference with a learning task (List A), a second task (List B), and a control group that rests instead of learning the second list.

**Retroactive interference design (test the OLD list):**

| Group | Step 1 | Step 2 | Test |
|-------|--------|--------|------|
| Experimental | Learn List A | Learn List B | Recall List A |
| Control | Learn List A | Rest (unrelated activity) | Recall List A |

If the experimental group recalls less of List A, the later list (B) interfered backward with the earlier one: **retroactive**.

**Proactive interference design (test the NEW list):**

| Group | Step 1 | Step 2 | Test |
|-------|--------|--------|------|
| Experimental | Learn List A | Learn List B | Recall List B |
| Control | Rest (unrelated activity) | Learn List B | Recall List B |

If the experimental group recalls less of List B, the earlier list (A) interfered forward with the later one: **proactive**.

In both designs, the **independent variable** is whether there was an interfering list, and the **dependent variable** is recall of the tested list. The control group's "rest" activity must take the same amount of time, so that the length of the delay is not a confounding variable.

### Sleep and Interference

In a small early study, participants learned nonsense syllables and then either slept or stayed awake doing ordinary activities before recall. They forgot less after sleeping. Being awake fills the delay with new experiences that can cause retroactive interference, while sleep supports memory consolidation (a link to Topic 1.5). Studying right before sleep is one practical way to reduce interference.
      `
    },
    {
      id: 'retrieval-forgetting-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Memory Failure** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'You cannot say which side of a stop sign\'s border is red, although you have seen thousands of stop signs', options: ['Proactive interference', 'Encoding failure', 'Retroactive interference', 'Tip-of-the-tongue phenomenon'] },
          { label: 'After memorizing this year\'s locker combination, you cannot recall last year\'s combination', options: ['Retroactive interference', 'Proactive interference', 'Encoding failure', 'Tip-of-the-tongue phenomenon'] },
          { label: 'You know an actor\'s name starts with "M" and has three syllables, but it will not come until you see the movie poster', options: ['Encoding failure', 'Retroactive interference', 'Proactive interference', 'Tip-of-the-tongue phenomenon'] },
          { label: 'In January you keep writing last year\'s date on your homework', options: ['Encoding failure', 'Tip-of-the-tongue phenomenon', 'Proactive interference', 'Retroactive interference'] }
        ],
        correctAnswers: ['Encoding failure', 'Retroactive interference', 'Tip-of-the-tongue phenomenon', 'Proactive interference'],
        hint1: 'Was the detail ever attended to and stored?',
        hint2: 'Which memory are you trying to retrieve: the newer or the older combination?',
        hint3: 'Partial information plus later success with a cue is the signature of inadequate retrieval.',
        explanation: 'The stop-sign detail was never encoded. A new combination blocking an old one is retroactive interference, while an old year blocking the new year is proactive interference. Knowing the first letter and syllable count, then retrieving the name with a cue, is the tip-of-the-tongue phenomenon.'
      }
    },
    {
      id: 'retrieval-forgetting-p5-s5-tot-repression',
      type: 'text' as const,
      content: `
### 📚 Inadequate Retrieval: The Tip-of-the-Tongue Phenomenon

The **tip-of-the-tongue (TOT) phenomenon** is the feeling of being sure you know something while being temporarily unable to retrieve it. In a classic study, researchers read people definitions of rare words (such as "a small boat used in the harbors of China and Japan," which is a *sampan*). People in a TOT state often could report the word's **first letter** and **number of syllables**, and they produced similar-sounding words ("Siam," "sarong").

What TOT shows:
- The memory is **stored**; retrieval failed because the available cues were inadequate.
- Retrieval is not all-or-none: partial information about a word can be accessible when the whole word is not.
- A matching cue (hearing the first syllable, seeing the word) usually resolves it at once.

### Repression: The Psychodynamic View (CED 2.7.A.3)

**Psychodynamic theorists** believe that some memories are forgotten to **defend the ego from distress**, a process called **repression**. In this view, painful or threatening memories are pushed out of conscious awareness without the person knowing it, yet they can still influence behavior.

How the AP exam treats repression:
- Know the definition and that it comes from the **psychodynamic perspective** (the CED words this as what psychodynamic theorists *believe*).
- Know that it is **controversial**. Many people who experience trauma remember it all too well (intrusive memories are a common feature of trauma-related disorders), which is the opposite of what repression predicts. Claims that a memory is repressed are also hard to test, because both remembering and not remembering can be explained after the fact.
- The debate over "recovered" memories of childhood events connects to constructed and false memories, which Part 6 covers.

> **AP Connection:** Repression is motivated, *unconscious* forgetting. If a scenario describes someone deliberately choosing not to think about something, that is a conscious coping choice, not repression.

### Common Misconceptions About Forgetting

| Misconception | Correction |
|--------------|-----------|
| "Forgetting means the memory has been erased." | Much forgetting is retrieval failure: cues, recognition tests and relearning savings reveal memories that recall missed. |
| "Proactive means the new thing interferes." | Proactive = **old** disrupts **new**. Retroactive = **new** disrupts **old**. |
| "If I saw it, I remember it." | Seeing is not encoding. Unattended details (the penny, the stop sign) are often never stored. |
| "Forgetting happens at a steady rate." | Forgetting is rapid at first and then levels off (Part 4). |
| "Repression is a well-established fact about trauma." | It is a psychodynamic belief; research finds traumatic events are often remembered vividly. |
| "Amnesia is the same thing as everyday forgetting." | Amnesia (retrograde, anterograde) is a storage impairment from brain injury or disease, covered in the memory-encoding-storage lessons; everyday forgetting happens in healthy brains. |
      `
    },
    {
      id: 'retrieval-forgetting-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Asked the name of her second-grade teacher, Nadia says, "It starts with a B... two syllables... Bennett? No..." An hour later, seeing an old class photo, she instantly says "Barker." This BEST illustrates:',
            options: [
              'A stored memory blocked by inadequate retrieval cues',
              'A memory that failed to encode during second grade',
              'Proactive interference from her later teachers\' names',
              'Repression of an upsetting memory from her childhood'
            ],
            correctAnswer: 0,
            explanation: 'Nadia had partial information (first letter, syllables) and then retrieved the name with a good cue, the class photo. That is the tip-of-the-tongue phenomenon, a case of inadequate retrieval. A memory that was never encoded could not be recovered by the photo.'
          },
          {
            question: 'A researcher has one group learn List A and then List B, and a control group learn List A and then do puzzles. Both groups are then tested on List A. What is this design built to detect?',
            options: [
              'Proactive interference from List A on recall of List B',
              'Retroactive interference from List B on recall of List A',
              'Encoding failure of List A in the experimental group',
              'The effect of puzzles on the recall of the second list'
            ],
            correctAnswer: 1,
            explanation: 'Both groups learn List A, only one learns List B afterward, and List A is tested. Lower recall of List A in the List B group would show newer learning disrupting older learning, which is retroactive interference.'
          },
          {
            question: 'A client in therapy cannot recall a frightening event from childhood that family members describe in detail. A psychodynamic therapist would MOST likely explain this as:',
            options: [
              'Proactive interference from the many memories formed after the event',
              'Encoding failure caused by the young age at which the event happened',
              'Repression of a threatening memory to protect the ego from distress',
              'Inadequate retrieval caused by a lack of cues from the original setting'
            ],
            correctAnswer: 2,
            explanation: 'Psychodynamic theorists believe distressing memories can be forgotten to defend the ego, which is repression. The other explanations come from cognitive accounts of forgetting, and repression itself remains a contested idea.'
          }
        ]
      }
    }
  ]
}
