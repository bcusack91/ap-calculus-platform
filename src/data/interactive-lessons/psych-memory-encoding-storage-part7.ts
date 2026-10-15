export const psychMemoryEncodePart7Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory Encoding and Storage

**Part 7 of 7 — Synthesis Review**

This part pulls the topic together: one map of how information gets in and stays in, a guide to the terms the exam likes to pair as near-misses, and integrated questions that mix ideas from every part.

### 🗺️ Master Integration Table

| Idea | Part | Core claim | Exam cue words |
|------|-----------|-----------|-----------|
| Encoding, storage, retrieval | 1 | Memory can fail at any of three steps | "never noticed" (encoding), "faded" (storage), "on the tip of my tongue" (retrieval) |
| Multi-store model | 1 | Sensory → short-term → long-term, moved by attention and rehearsal | "split second," "a few seconds," "years later" |
| Automatic vs. effortful processing | 1 | Space, time and frequency are encoded with little effort; new facts need effort | "without trying" vs. "studied" |
| Levels of processing | 2 | Structural, phonemic, semantic: deeper processing, better memory | letters or case, rhyme or sound, meaning |
| Maintenance vs. elaborative rehearsal | 2 | Repetition keeps information active; meaning-based rehearsal builds lasting memory | "repeated it over and over" vs. "related it to" |
| Autobiographical memory | 2, 5 | Information tied to the self is especially memorable; HSAM shows unusual autobiographical storage | "about my own life," "every day since childhood" |
| Mnemonics, chunking, categories, hierarchies | 3 | Structure and imagery make encoding easier | "pictured each item in a room," "grouped into" |
| Spacing effect | 3 | Distributed practice beats massed practice for long-term retention | "crammed," "spread over weeks" |
| Stores compared; working memory model | 4 | Stores differ in duration, capacity and content; working memory = central executive, phonological loop, visuospatial sketchpad | "repeat silently," "picture the layout," "switch tasks" |
| Serial position effect | 4 | First items (primacy) and last items (recency) are best remembered | "first and last," "middle of the list" |
| Long-term memory types | 5 | Explicit (episodic, semantic), implicit (procedural), prospective | "remember when," "know that," "know how," "remember to" |
| LTP and brain structures | 5 | Frequently activated synapses strengthen; hippocampus forms explicit memories; cerebellum supports procedural learning | "stronger response after repeated stimulation" |
| Storage problems | 5 | Anterograde and retrograde amnesia, Alzheimer's disease, infantile amnesia | "since the accident," "before the accident," "early childhood" |

### The Big Theme

**What you do while encoding determines what you can store and later retrieve.** Attention gets information in; meaning, structure and spacing make it last; and the brain makes it last by strengthening the synapses involved and consolidating the memory over time, including during sleep.
      `
    },
    {
      id: 'memory-encoding-storage-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Integration Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student pictures each of the five stages of a process at a different spot in her kitchen, then reviews the images for ten minutes on four different days. Which two encoding strategies is she combining?',
            options: [
              'Chunking and massed practice',
              'Method of loci and distributed practice',
              'Maintenance rehearsal and a hierarchy',
              'Structural processing and chunking'
            ],
            correctAnswer: 1,
            explanation: 'Placing items at familiar locations is the method of loci, and reviewing across several days is distributed practice. Massed practice would put all the review in one session.'
          },
          {
            question: 'Which finding provides the strongest evidence that long-term memory includes separate explicit and implicit systems?',
            options: [
              'People recall the first and last items of a list better than the middle items',
              'A patient improves at a new motor skill each day but cannot recall practicing it',
              'People remember words better after judging meaning than after judging rhymes',
              'People remember material better when study sessions are spread over several weeks'
            ],
            correctAnswer: 1,
            explanation: 'A skill that improves while memory of the practice is absent shows that procedural (implicit) memory can work when explicit memory fails, so the two depend on different systems. The other findings concern encoding conditions within one memory system.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p7-s3-pairs',
      type: 'text' as const,
      content: `
### ⚖️ Near-Miss Pairs: How to Tell Them Apart

| Pair | Ask yourself | Quick example |
|------|-----------|-----------|
| Iconic vs. echoic memory | Is the brief trace visual or auditory? | Afterimage of a flash (iconic) vs. replaying a half-heard sentence (echoic) |
| Short-term vs. working memory | Is the information just being held, or held **and** manipulated? | Holding a code (short-term) vs. adding two prices in your head (working) |
| Maintenance vs. elaborative rehearsal | Is the person repeating, or connecting to meaning? | Repeating a password vs. explaining a term with your own example |
| Structural vs. phonemic vs. semantic | Appearance, sound or meaning? | Capital letters / rhymes / fits a sentence |
| Chunking vs. hierarchy | Grouping into a few units, or arranging categories into levels? | 555-0199 vs. Animals → Mammals → Primates |
| Massed vs. distributed practice | All at once, or spread over time with total time equal? | 3 hours Sunday night vs. 30 minutes on six days |
| Primacy vs. recency | Beginning or end of the list? Which one disappears after a delay? | Recency disappears after a delay; primacy remains |
| Episodic vs. semantic | Is a specific time and place part of the memory? | "My first day of high school" vs. "High school has four grades" |
| Procedural vs. prospective | A skill you can perform, or an action you intend to do later? | Typing vs. remembering to submit an essay at midnight |
| Anterograde vs. retrograde amnesia | Is the loss for memories formed **after** the damage or **before** it? | Cannot learn new names (anterograde) vs. cannot recall the week before (retrograde) |

### 🔗 Cross-Unit Connections

- **Unit 1 (Biological Bases):** LTP depends on the neurotransmitter glutamate; the hippocampus and amygdala are limbic structures; the cerebellum supports procedural learning; one current theory says sleep consolidates memories; Alzheimer's disease involves loss of acetylcholine-producing neurons.
- **Unit 3 (Development and Learning):** infantile amnesia reflects brain and language development in early childhood; skills learned through practice are stored as procedural memory.
- **Next topic (Retrieval and Forgetting):** encoding quality sets up retrieval. Retrieval cues, the forgetting curve, interference and memory construction all build on what you learned here.
      `
    },
    {
      id: 'memory-encoding-storage-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'A synapse that responds more strongly after frequent activation shows long-term ___.',
            answer: 'potentiation',
            acceptableAnswers: ['potentiation (LTP)', 'LTP'],
            explanation: 'Long-term potentiation is the strengthening of synaptic connections with frequent activation, a biological process for memory.'
          },
          {
            question: 'Which level of processing, the deepest in the levels of processing model, focuses on meaning?',
            answer: 'semantic',
            acceptableAnswers: ['semantic processing', 'semantic level'],
            explanation: 'Semantic processing, attending to meaning, is the deepest level and produces the strongest memory.'
          },
          {
            question: 'Which brain structure was largely removed in H.M.\'s surgery and is needed to form new explicit memories?',
            answer: 'hippocampus',
            acceptableAnswers: ['the hippocampus', 'hippocampi'],
            explanation: 'Removal of most of the hippocampus on both sides left H.M. unable to form new explicit memories, while his procedural learning continued.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p7-s5-case',
      type: 'text' as const,
      content: `
### 🔬 Integrated Case: One Student, Every Concept

**Scenario:** Nadia is preparing for the AP Psychology exam in May. Her teacher reviews 12 memory terms in one lesson.

| What Nadia does | Concept | Effect |
|------|-----------|-----------|
| Puts her phone in another room during the lesson | Attention gates sensory memory into short-term memory | More of the lesson is encoded at all |
| Notices she best remembers the first two and last two terms the teacher covered | Serial position effect | Middle terms need extra review |
| Groups the 12 terms into "stores," "processes" and "problems" | Categories and hierarchy | Fewer, organized units to encode |
| Writes an example from her own life for each term | Elaborative rehearsal; self-relevant (autobiographical) encoding | Semantic, deeply processed memories |
| Reviews for 15 minutes every few days from February to May instead of the weekend before | Distributed practice; spacing effect | Better consolidation and long-term retention |
| Gets a full night's sleep before the exam | Sleep supports consolidation | Recent learning is stabilized |

> **AP Connection:** Integrated scenarios like this one are common in EBQ sources and in multiple-choice sets. For each behavior, name the concept **and** explain the mechanism in one clause. For example: "Writing her own examples is elaborative rehearsal, which links new terms to existing knowledge and creates more retrieval routes."
      `
    },
    {
      id: 'memory-encoding-storage-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Final Applied Set** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A student says, "Short-term memory is what I remember from this morning, and long-term memory is what I remember from childhood." How should a psychologist correct this?',
            options: [
              'Short-term storage lasts about a day, so only the childhood memory is long-term',
              'Short-term storage lasts only seconds, so both are long-term memories',
              'Short-term storage holds both until they have been retrieved at least once',
              'Both stay in sensory storage until the hippocampus moves them to long-term'
            ],
            correctAnswer: 1,
            explanation: 'In psychology, short-term memory holds information for only about 15–30 seconds without rehearsal. Anything remembered hours later, including breakfast this morning, has been stored in long-term memory.'
          },
          {
            question: 'Researchers compare students who study a list by repeating each word aloud with students who write a sentence connecting each word to their own lives. Which result does the AP framework predict, and why?',
            options: [
              'The first group recalls more, because its rehearsal is faster',
              'The second group recalls more, because elaboration adds meaning',
              'Both groups recall the same, because study time is held constant',
              'The first group recalls more, because sound codes last longer'
            ],
            correctAnswer: 1,
            explanation: 'Writing self-related sentences is elaborative rehearsal with semantic, self-relevant encoding, which promotes retention. Repeating words aloud is maintenance rehearsal, which keeps words active but adds few meaningful links.'
          },
          {
            question: 'A grandmother can still knit complicated patterns and recall her wedding day, but she cannot remember conversations from earlier in the week, and her symptoms are gradually worsening. Which condition best fits this pattern?',
            options: [
              'Infantile amnesia',
              'Retrograde amnesia from a single injury',
              'Highly superior autobiographical memory',
              'Early Alzheimer\'s disease'
            ],
            correctAnswer: 3,
            explanation: 'Alzheimer\'s disease is progressive and typically begins with difficulty forming new memories while older memories and well-practiced skills are relatively spared at first. Retrograde amnesia from one injury would affect older memories and would not steadily worsen.'
          }
        ]
      }
    }
  ]
}
