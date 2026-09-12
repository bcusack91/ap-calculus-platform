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
- **Patient H.M.** (bilateral medial temporal/hippocampal resection): dense **anterograde amnesia** for new explicit memories, yet improved daily at mirror tracing while denying ever having done it — the double-dissociation cornerstone. The hippocampus **consolidates** new explicit memories into cortex; **long-term potentiation (LTP)** — persistent strengthening of synapses after high-frequency stimulation — is the leading cellular mechanism.

### Retrieval — Getting Information Out

- **Recall** (generate from scratch) is harder than **recognition** (pick from options); **relearning savings** is the most sensitive index that a trace remains
- **Retrieval cues**: **context-dependent** memory (physical setting match — divers recall word lists best in the environment where they learned them), **state-dependent** memory (internal physiological state match), and **mood-congruent** retrieval (current mood favors matching memories)
- **Serial position effect**: **primacy** (early items rehearsed into LTM) + **recency** (last items still in working memory). A filled delay before recall **abolishes recency but spares primacy** — the classic evidence for two stores.`
    },
    {
      id: 'lmem3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Levels-of-Processing Experiment, Fully Read

**Passage.** Participants see 60 words. For 20, they judge whether the word is in capital letters (visual); for 20, whether it rhymes with a target (acoustic); for 20, whether it fits a sentence (semantic). Judgment time is equated. A surprise recognition test follows. Results: semantic 78% correct, acoustic 55%, visual 33%. A second experiment repeats the design with a filled 10-minute delay before an oral free-recall test and finds recall of the final list positions drops to the level of middle positions, while early positions are unaffected.

**Step 1 — identify the design's point.** Study *time* is controlled, so differences cannot reflect exposure duration — only the DEPTH of processing each orienting task forces. The semantic > acoustic > visual gradient is the levels-of-processing signature; note participants never intended to memorize (incidental encoding), which strengthens the claim that depth, not intention, drives encoding quality.

**Step 2 — read the serial-position manipulation.** The filled delay eliminates the recency advantage (working memory has been flushed by the distractor task) but leaves primacy intact (early words got extra rehearsal into long-term memory). One manipulation moving one component while sparing the other is a dissociation — the evidence pattern the MCAT most often asks you to interpret.

**Step 3 — pre-empt the trap answers.** "Semantic words were seen longer" — excluded by design. "The delay caused general forgetting" — no, it selectively removed recency. "Recognition and recall are interchangeable" — they are not; recognition provides the item as its own cue, which is why experiment 2 needed free recall to expose the serial-position curve.

**Step 4 — the application item.** A student who rereads notes (maintenance rehearsal, shallow) versus one who writes practice questions linking concepts to cases (semantic elaboration + testing effect): the passage's data predict the second student's advantage, and naming BOTH mechanisms is what separates the best answer from the near-miss.`
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
            explanation: `Improving performance without any conscious recollection is the H.M. dissociation: implicit/procedural learning (basal ganglia, cerebellum) proceeds normally while the damaged hippocampus blocks formation of new explicit memories. The deficit is in STORAGE of new episodes, not retrieval — no cue restores what was never consolidated — and both semantic and episodic (explicit) learning are impaired.`
          },
          {
            question: `In a free-recall study, one group recalls a word list immediately; another counts backward for 30 seconds first. The delay group loses the advantage for the LAST few words but recalls early words as well as the immediate group. The best interpretation is that:`,
            options: [`The delay disrupted consolidation of the whole list`, `Counting backward caused proactive interference with early words`, `Recency reflects working memory; primacy, long-term memory`, `The delay group encoded the list less deeply`],
            correctAnswer: 2,
            explanation: `Selective loss of recency with spared primacy is the two-store dissociation: final items lived only in working memory and were displaced by counting; early items had already been rehearsed into LTM. Whole-list consolidation failure or shallow encoding would depress ALL positions, and proactive interference would come from material learned BEFORE the list.`
          },
          {
            question: `Participants judge words by appearance, sound, or meaning for equal amounts of time, then take a surprise memory test. Meaning-judged words are remembered best. This result most directly supports the claim that:`,
            options: [`Longer exposure produces stronger memories`, `Processing depth at encoding drives retention`, `Recognition is easier than free recall`, `Intent to learn drives how much is retained`],
            correctAnswer: 1,
            explanation: `Time is equated and the test is a surprise, so neither exposure duration nor deliberate memorization can explain the gradient — only the depth of processing the orienting task induced (Craik and Lockhart). The recognition-vs-recall contrast is a true fact but not what this design tests, and intent to learn cannot be the cause because the test was a surprise in every condition.`
          },
          {
            question: `Students who study while calm but take the exam highly anxious often underperform relative to their practice scores. The retrieval principle most directly implicated is:`,
            options: [`The spacing effect`, `Chunking failure`, `The self-reference effect`, `State-dependent memory`],
            correctAnswer: 3,
            explanation: `State-dependent memory holds that internal state (arousal, drug state) is encoded with the material and serves as a retrieval cue; a calm-study/anxious-test mismatch removes that cue. Context-dependent memory would be the analogous EXTERNAL-environment effect. Spacing, chunking, and self-reference are encoding-side phenomena.`
          },
          {
            question: `A participant does a verbal reasoning task while simultaneously either (a) repeating "the the the" aloud or (b) tapping a spatial pattern. Baddeley's working memory model predicts:`,
            options: [`More disruption from repeating, which uses the phonological loop`, `Equal disruption from both, since working memory is a single store`, `More disruption from tapping, since motor tasks always dominate`, `No disruption, since the central executive handles both at once`],
            correctAnswer: 0,
            explanation: `The model's signature prediction is selective interference: tasks sharing a subsystem (both verbal, phonological loop) collide, while tasks split across the loop and the visuospatial sketchpad can proceed in parallel under central-executive coordination. A unitary short-term store would predict equal interference — that failed prediction is why the multicomponent model replaced it. The executive has limited capacity, so it cannot absorb both tasks cost-free, and motor tasks have no privileged claim on it.`
          }
        ]
      }
    },
    {
      id: 'lmem3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Stores: sensory (iconic under 1 s, echoic a few seconds) → working memory (about 7 items, extended by chunking; loop + sketchpad + episodic buffer under a central executive) → LTM
- Encoding gradient: semantic > acoustic > visual; elaborative beats maintenance rehearsal; spacing and testing effects are the two highest-yield study principles
- LTM map: explicit (episodic + semantic, hippocampus-consolidated, LTP as mechanism) vs implicit (procedural, priming, conditioning) — H.M. is the dissociation proof
- Retrieval: recall < recognition < relearning in sensitivity; context-, state-, and mood-matching all serve as cues
- Serial position: primacy = LTM, recency = working memory; a filled delay kills recency only — know that dissociation cold`
    }
  ]
};
