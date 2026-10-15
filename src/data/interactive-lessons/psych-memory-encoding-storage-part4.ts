export const psychMemoryEncodePart4Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory Encoding and Storage

**Part 4 of 7 — Sensory, Short-Term and Working Memory: Reading the Data**

How do psychologists know that iconic memory lasts less than a second, or that short-term memory fades in under half a minute? This part walks through the experiments and data behind those numbers, the kind of evidence AP questions ask you to read.

### 📚 The Stores Compared

The AP framework says sensory memory, short-term memory, working memory and long-term memory differ in **duration**, **capacity** and **content**.

| Store | Duration | Capacity | Content |
|------|-----------|-----------|-----------|
| Sensory (iconic) | Well under 1 second | Large | Raw visual image |
| Sensory (echoic) | About 3–4 seconds | Large | Raw sound |
| Short-term | About 15–30 seconds without rehearsal | About 7 ± 2 items (Miller, 1956); about 4 chunks in newer estimates | Mostly sound-based codes of what you are attending to |
| Working | As long as you keep working with it | Limited; depends on the component in use | Information being actively held **and** manipulated |
| Long-term | Minutes to a lifetime | No known limit | Meaning-based knowledge, events and skills |

### 🔬 Measuring Iconic Memory: The Partial-Report Experiment

George Sperling (1960) flashed a grid of 12 letters (3 rows of 4) for 50 milliseconds.
- **Whole report:** asked to name every letter, people reported only about 4.
- **Partial report:** right after the flash, a high, medium or low tone told participants which **one** row to report. They could name about 3 of the 4 letters in whichever row was cued.

Because participants did not know which row would be cued until after the grid disappeared, about 3 of 4 letters must have been available in **every** row, roughly 9 of the 12. Most of the image was briefly present, but it faded while people were naming the first few letters. When the tone was delayed by about 1 second, partial report dropped to the whole-report level: the iconic image was gone.
      `
    },
    {
      id: 'memory-encoding-storage-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the partial-report experiment, why did researchers conclude that far more letters were stored than the 4 that participants named in the whole-report condition?',
            options: [
              'Participants could name most letters in any row cued after the grid disappeared',
              'Participants named more letters when the grid was shown for a longer time',
              'Participants rehearsed the first row aloud and then recalled the whole grid later',
              'Participants recognized the letters later even though they could not recall them'
            ],
            correctAnswer: 0,
            explanation: 'The cue came only after the display ended, so participants could not have prepared a particular row. Reporting about 3 of 4 letters from any cued row means most of the grid was briefly available in iconic memory; it faded before they could name it all.'
          },
          {
            question: 'A server takes a table\'s order of 11 separate items without writing them down and forgets several before reaching the kitchen. Which feature of short-term memory best explains the errors?',
            options: [
              'Its duration is limited to a fraction of a second',
              'Its capacity is limited to only a handful of units',
              'It stores information mainly by meaning, not sound',
              'It cannot hold information without visual images'
            ],
            correctAnswer: 1,
            explanation: 'Eleven unrelated items exceed the roughly 7 ± 2 item (or about 4 chunk) capacity of short-term memory. A fraction of a second describes iconic memory, not short-term memory.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p4-s3-duration',
      type: 'text' as const,
      content: `
### 🔬 Measuring Short-Term Duration: Blocking Rehearsal

To measure how long information lasts in short-term memory, researchers must stop people from rehearsing. In the classic design (Peterson and Peterson, 1959), participants heard a three-consonant string such as *KBF*, then immediately counted backward by threes from a number such as 309 for a set delay before trying to recall the letters. Counting backward occupies the rehearsal system.

**Practice replication data (illustrating the classic pattern):**

| Delay (seconds) | 3 | 6 | 9 | 12 | 15 | 18 |
|------|-----------|-----------|-----------|-----------|-----------|-----------|
| % of strings recalled correctly | 80 | 55 | 35 | 22 | 14 | 10 |

**Reading the data:**
- **Direction:** recall falls as the delay increases.
- **Shape:** the drop is steep at first (25 points from 3 to 6 seconds) and flattens later (4 points from 15 to 18 seconds).
- **Conclusion:** without rehearsal, most information is lost from short-term memory within about 15–20 seconds.

### 📚 The Working Memory Model

Baddeley and Hitch (1974) proposed that short-term memory is not one box but a **working memory** system with several components. The AP framework names three:

| Component | Job | Everyday example |
|------|-----------|-----------|
| **Central executive** | Directs attention, coordinates the other components, switches between tasks, and pulls information from long-term memory | Deciding which part of a math problem to work on next |
| **Phonological loop** | Holds and rehearses speech-based and sound-based information (your "inner voice") | Silently repeating a phone number |
| **Visuospatial sketchpad** | Holds and manipulates visual images and spatial layouts (your "inner eye") | Mentally rotating a couch to see if it fits a corner |

(Baddeley later added a fourth component, the episodic buffer, which links information across components and with long-term memory.)

**The key evidence is dual-task interference.** Two tasks that need the same component interfere with each other; tasks that use different components can be done together with little cost.

| Main task: remember 6 digits, plus a second task | Mean digits recalled (practice data) |
|------|-----------|
| No second task | 5.6 |
| Repeat "the, the, the" aloud (verbal) | 3.9 |
| Tap a pattern on a keypad (spatial) | 5.3 |

Saying "the, the, the" ties up the phonological loop, so digit memory drops sharply. Spatial tapping uses the sketchpad, so digit memory barely changes.
      `
    },
    {
      id: 'memory-encoding-storage-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Data** ✍️

Use the tables in this part.
      `,
      exercise: {
        questions: [
          {
            question: 'In the rehearsal-blocking data, by how many percentage points did recall fall from the 3-second delay to the 18-second delay?',
            answer: '70',
            acceptableAnswers: ['70%', '70 points', '70 percentage points'],
            explanation: '80% − 10% = 70 percentage points, most of it in the first few seconds.'
          },
          {
            question: 'Which working memory component is disrupted when a person repeats "the, the, the" aloud while trying to hold digits?',
            answer: 'phonological loop',
            acceptableAnswers: ['the phonological loop', 'phonological'],
            explanation: 'Repeating a word aloud occupies the speech-based rehearsal system, the phonological loop, which is also needed to rehearse the digits.'
          },
          {
            question: 'Which working memory component would you rely on most to picture the floor plan of your school and count its windows?',
            answer: 'visuospatial sketchpad',
            acceptableAnswers: ['the visuospatial sketchpad', 'visuospatial', 'sketchpad', 'visuo-spatial sketchpad'],
            explanation: 'Holding and inspecting a mental image of a layout is the job of the visuospatial sketchpad.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p4-s5-serial',
      type: 'text' as const,
      content: `
### 📚 The Serial Position Effect

The AP framework notes that encoding is affected by the **order** in which information is presented. In the **serial position effect**, items at the **beginning** of a list (the **primacy effect**) and at the **end** (the **recency effect**) are remembered better than items in the middle.

**Practice data:** 40 participants hear a list of 15 unrelated words and immediately write down as many as they can, in any order.

| Position in list | 1 | 2 | 3 | 5 | 7 | 9 | 11 | 13 | 14 | 15 |
|------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
| % recalled | 72 | 60 | 49 | 36 | 33 | 31 | 35 | 52 | 68 | 81 |

If you graphed position on the x-axis and percent recalled on the y-axis, the result would be a **U-shaped curve**: high at both ends, low in the middle.

**Why each end is high:**

| Effect | Explanation | Evidence |
|------|-----------|-----------|
| **Primacy** | The first items get the most rehearsal (when they are presented, nothing else competes for it), so they are more likely to reach long-term memory | Presenting the list more slowly, which allows more rehearsal, raises the early part of the curve |
| **Recency** | The last items are still in short-term memory when recall begins | Adding a 30-second counting task before recall (Glanzer and Cunitz, 1966) wipes out recency but leaves primacy intact |

> **Key insight:** The two ends of the curve reflect **two different stores**. That is why the serial position effect is often cited as support for the multi-store model's separation of short-term and long-term memory.
      `
    },
    {
      id: 'memory-encoding-storage-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Data Questions** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a serial position study, one group recalls the list immediately, and another counts backward for 30 seconds before recalling. Compared with the immediate group, what should the delayed group\'s curve show?',
            options: [
              'Lower recall for the first few words, with recall of the last words unchanged',
              'Lower recall for the last few words, with recall of the first words unchanged',
              'Lower recall at both ends, producing a flat line across all positions',
              'Higher recall in the middle, because the delay gives time to consolidate'
            ],
            correctAnswer: 1,
            explanation: 'The recency effect depends on the last items still being in short-term memory. A 30-second distraction pushes them out, so recency disappears, while the early items, which reached long-term memory through rehearsal, are still recalled.'
          },
          {
            question: 'A hiring committee interviews ten applicants in one day and, when deliberating that evening, discusses mostly the first and last candidates. Which concept best explains this pattern?',
            options: [
              'The spacing effect',
              'Iconic memory decay',
              'The serial position effect',
              'Chunking'
            ],
            correctAnswer: 2,
            explanation: 'Applicants at the beginning and end of a sequence are remembered better than those in the middle: primacy for the first applicant and recency for the last. Chunking and the spacing effect describe how information is grouped or scheduled, not the role of order.'
          },
          {
            question: 'Participants try to remember a list of words while doing one of two secondary tasks. Recall drops sharply when they must count aloud and drops only slightly when they must track a moving dot. Which conclusion is best supported?',
            options: [
              'Holding words relies mainly on the phonological loop, which counting also uses',
              'Word lists rely mainly on the visuospatial sketchpad, which counting occupies',
              'Any second task overloads the central executive equally and erases the word list',
              'Words are held in iconic memory, so visual tracking should cause the largest drop'
            ],
            correctAnswer: 0,
            explanation: 'Counting aloud and rehearsing words both need the speech-based phonological loop, so they interfere. Tracking a dot uses the visuospatial sketchpad, a different component, so the cost is small. If any task disrupted memory equally, the two conditions would not differ.'
          }
        ]
      }
    }
  ]
}
