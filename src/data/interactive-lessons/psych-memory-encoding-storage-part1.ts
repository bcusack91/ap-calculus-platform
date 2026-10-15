export const psychMemoryEncodePart1Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory Encoding and Storage

**Part 1 of 7 — Memory Systems Overview**

You can forget a name five seconds after hearing it, yet still recite a song you have not heard in ten years. Psychologists explain the difference by treating memory as a set of systems and processes rather than one storage box.

### The Three Memory Processes

| Process | What happens | Everyday example |
|------|-----------|-----------|
| **Encoding** | Getting information into the memory system by turning it into a form the brain can store | Paying attention to a new classmate's name and linking it to someone you know |
| **Storage** | Keeping encoded information over time | Still knowing that name next week |
| **Retrieval** | Getting stored information back out when it is needed | Saying "Hi, Maya" when she walks in |

A memory can fail at any of the three steps. If you never noticed the name, the failure is at **encoding**. If the information was encoded but faded, the problem is **storage**. If you know it is "in there" but cannot get it out, the problem is **retrieval**. Retrieval and forgetting have their own topic; this topic focuses on the first two steps.

### The Multi-Store Model

The **multi-store model** (Atkinson and Shiffrin, 1968) proposes three interacting systems that information must pass through to be remembered.

| Store | What it holds | How long | How much |
|------|-----------|-----------|-----------|
| **Sensory memory** | A brief, raw copy of what the senses take in: **iconic memory** for sights, **echoic memory** for sounds | Iconic: a fraction of a second. Echoic: about 3–4 seconds | Large: most of what hits the senses |
| **Short-term memory (STM)** | The small amount of information you are actively aware of right now | About 15–30 seconds without rehearsal | Small: roughly 7 ± 2 items, or about 4 chunks |
| **Long-term memory (LTM)** | The relatively permanent store of knowledge, skills and experiences | Minutes to a lifetime | Essentially unlimited |

**Two arrows matter most in the model:**
1. **Attention** moves information from sensory memory into short-term memory. Whatever you do not attend to is lost from sensory memory within moments.
2. **Rehearsal and encoding** move information from short-term memory into long-term memory. Information that is not rehearsed or processed is displaced or fades from STM.

Retrieval runs the other direction: when you remember something, it is pulled from long-term memory back into short-term (working) memory so you can use it.
      `
    },
    {
      id: 'memory-encoding-storage-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a lecture, Dev hears the hum of the air conditioner, a cough in the back row and his teacher\'s definition of "homeostasis." He can later remember only the definition. According to the multi-store model, what best explains why the other sounds were lost?',
            options: [
              'They were stored in long-term memory but were never retrieved',
              'They reached sensory memory but were never given attention',
              'They were rehearsed too often in short-term memory to be kept',
              'They were encoded deeply but blocked by the newer definition'
            ],
            correctAnswer: 1,
            explanation: 'In the multi-store model, attention is the gate between sensory memory and short-term memory. The hum and the cough registered briefly in echoic memory, but without attention they faded within seconds and never reached short-term or long-term memory.'
          },
          {
            question: 'A student realizes she cannot remember the plot of a novel she read last summer, even with hints. A psychologist suspects she skimmed it without ever processing the plot. Which memory process does the psychologist believe failed?',
            options: [
              'Retrieval',
              'Storage',
              'Encoding',
              'Attention'
            ],
            correctAnswer: 2,
            explanation: 'If the plot was never processed in the first place, it was never encoded, so there is nothing to store or retrieve. Storage failure would mean the plot was encoded and then faded, and retrieval failure would mean it is stored but cannot be reached.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p1-s3-processing',
      type: 'text' as const,
      content: `
### 📚 Automatic vs. Effortful Processing

The multi-store model also distinguishes **how** information gets encoded.

| | Automatic processing | Effortful processing |
|------|-----------|-----------|
| **Definition** | Encoding that happens with little or no conscious effort or attention | Encoding that requires attention, effort and usually rehearsal |
| **Typical content** | Where things are (space), when things happened (time and sequence), how often things happen (frequency), well-learned information such as the meaning of familiar words | New vocabulary, formulas, dates, names, the steps of an unfamiliar procedure |
| **Example** | You know roughly where on the page a diagram appeared without trying to learn its location | You repeat and explain the stages of a process until you can write them from memory |
| **Can it become automatic?** | Already automatic | Yes: with practice, effortful skills (reading, typing, driving) become more automatic |

> **Key insight:** Most of what you study for AP Psychology requires **effortful processing**. Simply being present while information goes by relies on automatic processing, which captures *where* and *when* far better than it captures *what it meant*.

### 📚 Where Working Memory Fits

Atkinson and Shiffrin pictured short-term memory as a passive holding area. Later researchers argued that the "short-term" system is really an active workspace, which they called **working memory**. The AP framework calls working memory our primary memory system: it holds information *and* manipulates it, for example when you do mental math, follow directions, or compare two answer choices. Part 4 of this topic breaks working memory into its components (central executive, phonological loop and visuospatial sketchpad).

### Why Use a Model at All?

A model is a simplified map that makes testable predictions. The multi-store model predicts, for example, that blocking rehearsal should cause rapid forgetting from short-term memory and that people with damage to long-term memory structures could still hold a phone number for a few seconds. Both predictions have been supported. Its main limitations:
- It treats rehearsal as the main route into LTM, but **how** information is processed (meaning vs. sound vs. appearance) matters more than how many times it is repeated (Part 2).
- It treats long-term memory as a single store, but explicit and implicit memories depend on different brain systems (Part 5).
      `
    },
    {
      id: 'memory-encoding-storage-p1-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Example** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a split second after a camera flash, you still "see" the outline of the room.',
            options: ['Iconic memory', 'Echoic memory', 'Working memory', 'Long-term memory']
          },
          {
            label: 'Without trying, you know that the bathroom is the second door on the left in your friend\'s house.',
            options: ['Effortful processing', 'Automatic processing', 'Echoic memory', 'Elaborative rehearsal']
          },
          {
            label: 'A friend asks "What did I just say?" and you replay their last sentence even though you were not listening closely.',
            options: ['Iconic memory', 'Long-term memory', 'Echoic memory', 'Automatic processing']
          }
        ],
        correctAnswers: ['Iconic memory', 'Automatic processing', 'Echoic memory'],
        hint1: 'A lingering visual image that lasts a fraction of a second is the visual sensory store.',
        hint2: 'Spatial location is one of the kinds of information we encode without effort.',
        hint3: 'Auditory sensory memory lasts a few seconds, long enough to replay a sentence you only half heard.',
        explanation: 'The afterimage of the room is iconic (visual sensory) memory. Knowing a room\'s location without studying it is automatic processing of spatial information. Replaying a sentence you half heard uses echoic memory, which holds sounds for about 3–4 seconds.'
      }
    },
    {
      id: 'memory-encoding-storage-p1-s5-worked',
      type: 'text' as const,
      content: `
### 🔬 Worked Example: Following One Memory Through the System

**Scenario:** At a club fair, Priya hears the robotics club's meeting room, "Room 214," while music plays and people talk around her. A week later she walks straight to Room 214.

| Step | What happened | Model component |
|------|-----------|-----------|
| 1 | The words "Room 214," the music and the chatter all register for a few seconds | Sensory (echoic) memory |
| 2 | Priya focuses on the club officer's voice, ignoring the music | Attention moves "Room 214" into STM |
| 3 | She repeats "two-fourteen" and notes that 2/14 is Valentine's Day | Effortful processing: rehearsal plus a meaningful link |
| 4 | The room number is consolidated over the following days | Storage in long-term memory |
| 5 | On meeting day she pulls up "214" and uses it to navigate | Retrieval back into working memory |

**What could have gone wrong?** If she had been texting during step 2, the number would have been lost from sensory memory (an attention failure). If she had relied only on repeating it once without the Valentine's link, it might have faded from STM before reaching LTM.

> **AP Connection:** On the exam, scenario questions often describe one moment in this sequence and ask you to name the store or process. Look for the time scale: a fraction of a second or a few seconds points to sensory memory; holding and manipulating something right now points to short-term or working memory; anything recalled after minutes, days or years is long-term memory.
      `
    },
    {
      id: 'memory-encoding-storage-p1-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers flash a grid of letters for 50 milliseconds. Participants report the letters immediately or after a 5-second delay. Recall is far better in the immediate condition. Which memory store is the study most directly measuring?',
            options: [
              'Echoic memory',
              'Long-term memory',
              'Iconic memory',
              'Prospective memory'
            ],
            correctAnswer: 2,
            explanation: 'A brief visual display that fades within about a second is held in iconic memory, the visual form of sensory memory. Long-term memory would not decay that quickly, and echoic memory stores sounds rather than images.'
          },
          {
            question: 'A shopper can recall the layout of a grocery store she has visited a few times, but she cannot list the prices she saw there, even though she looked at many of them. Which explanation best fits this difference?',
            options: [
              'Layouts are held in iconic memory, while prices are sent to echoic memory instead',
              'Prices require effortful processing, while layouts are encoded automatically',
              'Layouts are encoded with effort, while prices are encoded without any attention',
              'Prices exceed the capacity of long-term memory, while layouts take up less room'
            ],
            correctAnswer: 1,
            explanation: 'Spatial layout is a classic kind of information encoded through automatic processing. Specific prices are arbitrary details that need attention and rehearsal, so without effortful processing they are not retained. Long-term memory has no practical capacity limit, so lack of space is not the explanation.'
          },
          {
            question: 'Which finding would best support the multi-store model\'s claim that short-term and long-term memory are separate systems?',
            options: [
              'A patient who can repeat a phone number but cannot learn any new facts',
              'A student who recalls a list better when it is repeated many times aloud',
              'A driver who remembers where she parked without trying to learn the spot',
              'A child who remembers a song better when it is paired with hand motions'
            ],
            correctAnswer: 0,
            explanation: 'If short-term memory works normally while transfer into long-term memory is broken, the two must rely on at least partly separate systems. The other findings describe ways encoding can be strengthened or happen automatically, which do not show that the stores are distinct.'
          }
        ]
      }
    }
  ]
}
