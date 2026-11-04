export const mcatPsychLearnMemPart3Data = {
  topicSlug: 'mcat-psychology-behavior-learning-memory-mcat',
  sections: [
    {
      id: 'lmem3-intro',
      type: 'text' as const,
      content: `# Learning & Memory

**Part 3 of 4 — Memory: Encoding, Storage & Retrieval**

### The Multi-Store Architecture (Atkinson–Shiffrin, upgraded)

| Store | Duration | Capacity | Notes |
|-------|----------|----------|-------|
| **Sensory memory** | Iconic (visual) < 1 s; echoic (auditory) ~3-4 s | Large | Sperling's partial-report: the whole array is briefly there |
| **Short-term / working memory** | ~15-30 s unrehearsed | ~7 ± 2 items (fewer by modern estimates) | **Chunking** expands effective capacity |
| **Long-term memory** | Potentially lifelong | Effectively unlimited | Organized by meaning |

**Working memory (Baddeley)** replaces the passive "short-term store": a **central executive** allocates attention across the **phonological loop** (inner speech), the **visuospatial sketchpad**, and the **episodic buffer**. Prediction it earns: two tasks using *different* subsystems (verbal + spatial) interfere far less than two tasks sharing one.

### Encoding — Getting Information In

- **Depth of processing** (Craik & Lockhart): **semantic** encoding (meaning) beats **acoustic** (sound), which beats **visual** (appearance) — judged by later recall, even when study time is equal
- **Self-reference effect**: relating material to yourself deepens encoding further
- **Elaborative rehearsal** (linking to existing knowledge) builds durable memory; **maintenance rehearsal** (rote repetition) mostly refreshes short-term memory
- **Spacing effect**: distributed practice beats massed practice (cramming); **testing effect**: retrieval practice beats rereading
- Mnemonics (method of loci, pegwords, acronyms) work by adding organization and imagery — i.e., forced elaboration
- **Dual coding**: items encoded both verbally and visually get two retrieval routes

### Long-Term Memory Systems (the dissociation map)

- **Explicit (declarative)** — conscious recollection; hippocampus-dependent
  - **Episodic**: events with time-and-place tags (your last birthday)
  - **Semantic**: facts without source tags (Paris is in France)
- **Implicit (nondeclarative)** — expressed through performance, not recollection
  - **Procedural** skills (typing, mirror tracing): basal ganglia, cerebellum
  - **Priming**: prior exposure speeds processing without awareness
  - Conditioned associations (Parts 1-2) are also implicit
- **Patient H.M.** (bilateral medial temporal/hippocampal resection): dense **anterograde amnesia** for new explicit memories, yet improved daily at mirror tracing while denying ever having done it — the dissociation cornerstone. The hippocampus **consolidates** new explicit memories into cortex; **long-term potentiation (LTP)** — persistent strengthening of synapses after high-frequency stimulation — is the leading cellular mechanism.

### Retrieval — Getting Information Out

- **Recall** (generate from scratch) is harder than **recognition** (pick from options); **relearning savings** is the most sensitive index that a trace remains
- **Retrieval cues**: **context-dependent** memory (physical setting match — divers recall word lists best in the environment where they learned them), **state-dependent** memory (internal physiological state match), and **mood-congruent** retrieval (current mood favors matching memories)
- **Serial position effect**: **primacy** (early items rehearsed into LTM) + **recency** (last items still in working memory).`
    },
    {
      id: 'lmem3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Levels-of-Processing Experiment, Fully Read

**Problem 1.** Participants see 60 words. For 20 they judge whether it is in capitals (visual), for 20 whether it rhymes with a target (acoustic), for 20 whether it fits a sentence (semantic); judgment time is equated. A surprise recognition test follows: semantic 78% correct, acoustic 55%, visual 33%.

- **(a)** Could the semantic words simply have been seen longer?
- **(b)** What principle does the pattern of results demonstrate?
- **(c)** Why does making the test a surprise strengthen the conclusion?

**(a) Exposure is controlled.** No. Judgment time is equated by design, so the differences cannot reflect exposure duration, only the DEPTH of processing each orienting task forces.

**(b) Levels of processing.** The semantic > acoustic > visual gradient is the Craik & Lockhart signature: encoding by meaning yields better retention than encoding by sound or appearance.

**(c) Incidental encoding.** Participants never intended to memorize, so the result shows that depth, not intention, drives encoding quality.

**Problem 2.** A second experiment repeats the design but adds a filled 30-second delay (counting backward) before an oral free-recall test. Compared with an immediate-recall group, recall of the final positions drops to the level of the middle positions, while early positions are unaffected.

- **(a)** Why does the delay remove the advantage for the final words?
- **(b)** Why are the early words spared?
- **(c)** Is this general forgetting, and what kind of evidence pattern is it?
- **(d)** Why did this experiment need free recall rather than recognition?

**(a) Recency lost.** The final words were held only in working memory, and the distractor task flushed it.

**(b) Primacy spared.** The early words got extra rehearsal into long-term memory, which the delay does not touch.

**(c) A dissociation.** No: general forgetting would lower every position, but the delay selectively removed recency. One manipulation moving one component while sparing another is a dissociation, the pattern the MCAT most often asks you to interpret.

**(d) Recall vs. recognition.** The two are not interchangeable. Recognition provides the item as its own cue, so recognition compresses retrieval differences; free recall shows the serial-position curve most clearly.

**Problem 3.** Two students prepare for the same exam. One rereads her notes several times; the other writes practice questions that link each concept to a case.

- **(a)** What kind of rehearsal is rereading?
- **(b)** What two mechanisms does writing linked practice questions engage?
- **(c)** Which student do the passage's data predict will retain more, and what separates the best answer from a near-miss?

**(a) Maintenance rehearsal.** Rereading is rote, shallow processing that mostly refreshes short-term memory.

**(b) Elaboration plus testing.** Linking concepts to cases is semantic elaboration, and generating questions and answers is retrieval practice, the testing effect.

**(c) The question writer.** Her deeper encoding predicts the advantage. Naming BOTH mechanisms is what separates the best answer from the near-miss.`
    },
    {
      id: 'lmem3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Encoding, Storage & Retrieval** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient with bilateral hippocampal damage practices a mirror-tracing task daily. His error rate steadily improves across a week, yet each day he insists he has never seen the apparatus. This pattern demonstrates that:`,
            options: [`Procedural memory survives, separable from explicit memory`, `His semantic memory is intact but episodic memory is not`, `He has a retrieval failure that cueing would reverse`, `Motor learning depends on an intact hippocampus`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Improving performance without any conscious recollection is the H.M. dissociation: implicit/procedural learning (basal ganglia, cerebellum) proceeds normally while the damaged hippocampus blocks formation of new explicit memories. The deficit is in STORAGE of new episodes, not retrieval — no cue restores what was never consolidated — and both semantic and episodic (explicit) learning are impaired.`
          },
          {
            question: `In a free-recall study, one group hears a word list at one word per second; another hears the same list at one word every three seconds. Both recall immediately. The faster group recalls the FIRST few words less well, but both groups recall the last few words equally well. The best interpretation is that:`,
            options: [`Fast presentation blocked consolidation of the whole list`, `The first words suffered retroactive interference from later ones`, `Primacy reflects rehearsal of early words into long-term memory`, `Recency depends on the time spent rehearsing each word`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Slower presentation gives each early word more time to be rehearsed into long-term memory, so speeding the list cuts primacy; the last words are still in working memory at an immediate test, so recency is spared. A failure to consolidate the whole list would depress every position, not just the early ones. Recency was unchanged, so it cannot depend on rehearsal time. Both groups heard the same later words, so retroactive interference cannot explain why only the fast group lost the early ones.`
          },
          {
            question: `Participants rate each word either for how pleasant it is or for how many vowels it contains, spending equal time on each, then take a surprise memory test. Pleasantness-rated words are remembered far better. This result most directly supports the claim that:`,
            options: [`Longer exposure produces stronger memories`, `Processing depth at encoding drives retention`, `Recognition is easier than free recall`, `Intent to learn drives how much is retained`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Judging pleasantness forces processing of a word's meaning, while counting vowels attends only to its spelling. Time is equated, so longer exposure cannot explain the advantage; only the depth of processing each task induced can (Craik and Lockhart). The recognition-vs-recall contrast is a true fact, but this design never varies the test type. Intent to learn cannot be the cause either, because the test was a surprise in both conditions.`
          },
          {
            question: `Students who study while calm but take the exam highly anxious often underperform relative to their practice scores. The retrieval principle most directly implicated is:`,
            options: [`Massed practice in the days before the exam`, `Chunking failure in working memory`, `The self-reference effect`, `State-dependent memory`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `State-dependent memory holds that internal state (arousal, drug state) is encoded with the material and serves as a retrieval cue; a calm-study/anxious-test mismatch removes that cue. Context-dependent memory would be the analogous EXTERNAL-environment effect. Massed practice, chunking, and self-reference are encoding-side factors.`
          },
          {
            question: `A participant does a verbal reasoning task while simultaneously either (a) repeating "the the the" aloud or (b) tapping a spatial pattern. Baddeley's working memory model predicts:`,
            options: [`More disruption from repeating, which uses the phonological loop`, `Equal disruption from both, since working memory is a single store`, `More disruption from tapping, since motor tasks always dominate`, `No disruption, since the central executive handles both at once`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The model's signature prediction is selective interference: tasks sharing a subsystem (both verbal, phonological loop) collide, while tasks split across the loop and the visuospatial sketchpad can proceed in parallel under central-executive coordination. A unitary short-term store would predict equal interference — that failed prediction is why the multicomponent model replaced it. The executive has limited capacity, so it cannot absorb both tasks cost-free, and motor tasks have no privileged claim on it.`
          }
        ]
      }
    },
    {
      id: 'lmem3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Three stores.** Sensory memory lasts seconds; working memory holds about 7 ± 2 items (fewer by modern estimates), extended by chunking.
- **Depth of processing.** Semantic beats acoustic beats visual encoding; elaboration, spacing and testing build durable memories.
- **Explicit vs. implicit.** Episodic and semantic memory need the hippocampus to consolidate; skills, priming and conditioning do not.
- **Serial position.** Primacy reflects long-term memory, recency reflects working memory; a filled delay removes only recency.

**Common traps**

- **H.M. learned nothing.** H.M. could not form new explicit memories, yet his mirror-tracing skill improved day after day.
- **One working-memory store.** A verbal and a spatial task interfere much less than two verbal tasks, because they use separate subsystems.
- **State vs. context.** State-dependent memory matches an internal state, such as calm or anxious; context-dependent matches the setting.
- **Recall equals recognition.** Recognition provides the item as its own cue, so it can succeed where free recall fails.`
    }
  ]
};
