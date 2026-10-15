export const psychMemoryEncodePart5Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory Encoding and Storage

**Part 5 of 7 — Long-Term Memory: Types, Biology and Storage Problems**

Long-term memory is not one warehouse. Remembering your tenth birthday, knowing that Paris is the capital of France, riding a bike and remembering to text your mom after practice are different kinds of memory that the brain handles in different ways.

### 📚 Types of Long-Term Memory

| Type | Definition | Example | Can you easily explain it to someone? |
|------|-----------|-----------|-----------|
| **Explicit (declarative)** | Memory you can consciously recall and describe | | Yes |
| ↳ **Episodic** | Memory for specific personal experiences tied to a time and place | Remembering what happened at your cousin's wedding last June | Yes |
| ↳ **Semantic** | Memory for general facts and knowledge, independent of when you learned them | Knowing that the hippocampus is in the temporal lobe | Yes |
| **Implicit (nondeclarative)** | Memory that shows up in performance rather than in conscious recollection | | Hard to put into words |
| ↳ **Procedural** | Memory for skills, procedures and processes | Typing, tying shoes, shooting a free throw | Hard to put into words |
| **Prospective** | Memory for actions you intend to carry out in the future | Remembering to take medication at 8 p.m. or to hand in a permission slip on Friday | Depends on the task |

**How to tell episodic from semantic:** ask whether the memory includes *you, at a particular time and place*. "I learned about neurons in Mr. Lee's class on a rainy Tuesday" is episodic. "Neurons communicate with neurotransmitters" is semantic. Many semantic facts begin as episodes and lose their time-and-place details over years.

**How to tell explicit from implicit:** ask whether the person can describe the memory. A pianist can tell you the name of a piece (explicit) but often cannot explain exactly how her fingers know where to go (implicit, procedural).
      `
    },
    {
      id: 'memory-encoding-storage-p5-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Memory** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Remembering the exact moment you found out you made the varsity team',
            options: ['Semantic memory', 'Episodic memory', 'Procedural memory', 'Prospective memory']
          },
          {
            label: 'Knowing that the AP Psychology exam has two free-response questions',
            options: ['Episodic memory', 'Procedural memory', 'Semantic memory', 'Prospective memory']
          },
          {
            label: 'Remembering to stop at the store for milk on the way home',
            options: ['Prospective memory', 'Semantic memory', 'Episodic memory', 'Procedural memory']
          },
          {
            label: 'Shifting gears smoothly in a manual car without thinking about the steps',
            options: ['Semantic memory', 'Prospective memory', 'Episodic memory', 'Procedural memory']
          }
        ],
        correctAnswers: ['Episodic memory', 'Semantic memory', 'Prospective memory', 'Procedural memory'],
        hint1: 'A personal experience tied to a specific time and place is one kind of explicit memory.',
        hint2: 'A general fact, with no memory of when or where you learned it, is the other kind of explicit memory.',
        hint3: 'One of these is about an action planned for the future; another is a skill shown in performance.',
        explanation: 'Finding out you made the team is a personal event (episodic). Knowing the exam format is a general fact (semantic). Remembering to buy milk later is prospective memory. Shifting gears automatically is a skill (procedural, a type of implicit memory).'
      }
    },
    {
      id: 'memory-encoding-storage-p5-s3-biology',
      type: 'text' as const,
      content: `
### 📚 The Biology of Storage

**Long-term potentiation (LTP).** The AP framework describes LTP as a process by which synaptic connections between neurons become **stronger with frequent activation**. After repeated stimulation, the sending neuron's signal produces a larger response in the receiving neuron, so the pathway fires more easily the next time. LTP was first demonstrated in the hippocampus (Bliss and Lømo, 1973), and it depends heavily on the excitatory neurotransmitter **glutamate**. LTP is considered a biological basis for learning and memory: practice and elaboration literally strengthen the connections that represent a memory.

**Brain structures and memory types:**

| Structure | Role in memory |
|------|-----------|
| **Hippocampus** (limbic system, in the temporal lobe) | Forms new explicit memories and helps consolidate them into long-term storage |
| **Cerebellum** | Coordinates movement and supports some forms of procedural learning |
| **Amygdala** (limbic system) | Strengthens memories of emotionally significant events |
| **Frontal lobes** | Support working memory and the organized search for stored information |

**Consolidation and sleep.** Newly formed memories are fragile at first and become more stable over time, a process called **consolidation**. One current theory of why we sleep (from the sleep topic in Unit 1) holds that sleep helps organize and consolidate the day's memories.

### 🔬 Case Evidence: Two Patients

| | Henry Molaison ("H.M.") | Clive Wearing |
|------|-----------|-----------|
| **Cause** | In 1953, surgeons removed parts of both medial temporal lobes, including most of the hippocampus, to stop severe seizures | In 1985, a viral brain infection damaged his hippocampus and surrounding areas |
| **Explicit memory** | Could not form new long-term explicit memories; lost some memories from the years before surgery | Cannot form new explicit memories and lost much of his past; experiences each moment as "waking up" |
| **Implicit memory** | Improved at mirror-drawing over several days while having no memory of practicing | Can still play the piano and conduct music he learned before the illness |
| **What it shows** | Explicit and implicit memory depend on different brain systems; the hippocampus is needed to form new explicit memories | Procedural memory can survive severe damage to explicit memory |

> **Research methods note:** These are **case studies**, in-depth investigations of one person. They gave psychologists evidence no ethical experiment could produce, but they cannot establish cause and effect on their own, and findings from one unusual brain may not generalize to others.
      `
    },
    {
      id: 'memory-encoding-storage-p5-s4-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A rat learns a maze over several days. Recordings show that, across training, the same input produces larger and larger responses in certain hippocampal neurons. Which process does this most directly illustrate?',
            options: [
              'Long-term potentiation',
              'Echoic memory',
              'Retrograde amnesia',
              'Maintenance rehearsal'
            ],
            correctAnswer: 0,
            explanation: 'A synapse that responds more strongly after repeated activation is showing long-term potentiation, a biological process for memory. Maintenance rehearsal is a behavioral strategy, not a change at the synapse.'
          },
          {
            question: 'After surgery, a patient can learn to solve a new puzzle faster each day but insists each day that he has never seen the puzzle before. What does this pattern indicate?',
            options: [
              'His episodic memory is intact while his semantic memory is impaired',
              'His procedural memory is working while new explicit memory is impaired',
              'His prospective memory is intact while his working memory is impaired',
              'His sensory memory is working while new procedural memory is impaired'
            ],
            correctAnswer: 1,
            explanation: 'Getting faster shows the skill is being stored as procedural (implicit) memory, while not remembering the earlier sessions shows he cannot form new explicit memories. This is the pattern seen in H.M.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p5-s5-problems',
      type: 'text' as const,
      content: `
### 📚 When Storage Goes Right or Wrong

The AP framework notes that storage can be unusually strong in some people and weakened by physical impairment or development in others.

**Highly superior autobiographical memory (HSAM).** A small number of people can recall the events of nearly every day of their lives, often including the date and day of the week. The first case was described in 2006. On many standard laboratory memory tests, such as memorizing word lists, people with HSAM score about average, so their ability is specific to **autobiographical** memory. Researchers have reported some differences in their brain structure, which suggests there may be biological processes for superior memory storage.

**Storage problems:**

| Condition | What is lost | Example |
|------|-----------|-----------|
| **Anterograde amnesia** | The ability to form **new** long-term memories after the damage | A patient can describe her childhood but cannot remember a nurse she met an hour ago |
| **Retrograde amnesia** | Memories from **before** the damage, often the most recent ones | After a concussion, a player cannot remember the plays leading up to the hit |
| **Alzheimer's disease** | A progressive brain disease that begins with trouble forming new memories and spreads to older memories, language and daily functioning; the hippocampus is among the first areas affected, and acetylcholine-producing neurons are lost | A grandfather repeats the same question several times in a visit, and years later no longer recognizes family members |
| **Infantile amnesia** | Most adults have few or no memories from before about age 3 to 4 | You cannot remember your second birthday party, even though you were there |

**Why infantile amnesia happens (developmental limitations):** the hippocampus and frontal lobes are still maturing in early childhood, and young children have limited language and a limited sense of self with which to organize autobiographical events.

### ⚠️ Misconceptions to Avoid

| Misconception | Correction |
|------|-----------|
| "Memory works like a video recorder." | Memories are encoded selectively and stored as meaning, not as complete recordings |
| "Short-term memory means anything from earlier today." | In psychology, short-term memory lasts seconds; this morning's breakfast is long-term memory |
| "Amnesia means forgetting who you are." | Most amnesia affects memory for events and new learning; identity and skills are usually preserved |
| "People with amnesia cannot learn anything new." | Many can still learn new procedural skills even when explicit learning fails |
| "Remembering your earliest years is a sign of a great memory." | Infantile amnesia is normal and reflects brain and language development |
      `
    },
    {
      id: 'memory-encoding-storage-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'After a car accident, Jordan remembers everything from the hospital stay onward but has no memory of the week before the crash. Which condition does this describe?',
            options: [
              'Anterograde amnesia',
              'Infantile amnesia',
              'Retrograde amnesia',
              'Alzheimer\'s disease'
            ],
            correctAnswer: 2,
            explanation: 'Losing memories formed before an injury, while still forming new memories normally, is retrograde amnesia. Anterograde amnesia would mean trouble forming memories after the accident.'
          },
          {
            question: 'A researcher writes a detailed report on one woman with highly superior autobiographical memory, based on years of interviews and testing. What is the main limitation of this method?',
            options: [
              'Findings from one unusual person may not generalize to other people',
              'The researcher cannot measure any memory abilities in a single person',
              'Interviews are unethical without random assignment to conditions',
              'A single participant makes the results impossible to describe in detail'
            ],
            correctAnswer: 0,
            explanation: 'A case study gives rich detail about one person, but that person is unusual by definition, so the findings may not apply to others and cannot establish cause and effect. Random assignment is a feature of experiments, not an ethical requirement for interviews.'
          },
          {
            question: 'A 5-year-old can describe her trip to the zoo last month in detail, but as an adult she will probably remember nothing from that trip. Which explanation best fits the AP framework?',
            options: [
              'Her memories are stored in iconic memory, which empties as she ages',
              'Developmental limitations in early childhood weaken long-term storage',
              'She has retrograde amnesia caused by normal brain growth in childhood',
              'Her working memory lacks a phonological loop until she learns to read'
            ],
            correctAnswer: 1,
            explanation: 'Infantile amnesia reflects developmental limitations: the brain systems and the language and self-concept that organize autobiographical memory are still maturing, so early memories rarely last into adulthood. Retrograde amnesia refers to memory loss caused by damage, not normal development.'
          }
        ]
      }
    }
  ]
}
