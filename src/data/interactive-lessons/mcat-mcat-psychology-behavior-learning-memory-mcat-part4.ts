export const mcatPsychLearnMemPart4Data = {
  topicSlug: 'mcat-psychology-behavior-learning-memory-mcat',
  sections: [
    {
      id: 'lmem4-intro',
      type: 'text' as const,
      content: `# Learning & Memory — Deep Dive

**Part 4 of 4 — MCAT Integration: Forgetting, Memory Errors & Reading Learning-Memory Studies**

### Why We Forget — Locate the Failure Stage

| Failure stage | Mechanism | Diagnostic evidence |
|---------------|-----------|---------------------|
| **Encoding failure** | Never got in (shallow/absent attention) | No benefit from any retrieval cue; classic penny-detail demonstrations |
| **Storage decay** | Trace fades with time (Ebbinghaus's forgetting curve: steep early, then flattening) | Loss even with perfect cues; relearning still shows savings |
| **Retrieval failure** | Trace exists but is inaccessible | **Cues or recognition restore it** — tip-of-the-tongue states are the everyday case |

**The cueing test is the great divider:** if recognition or cued recall recovers the item, the memory was stored and the failure was retrieval. MCAT passages engineer exactly this contrast.

### Interference — Forgetting Caused by Other Learning

- **Proactive interference**: OLD learning disrupts NEW (last year's locker code intrudes on this year's)
- **Retroactive interference**: NEW learning disrupts OLD (this year's code erases access to last year's)
- Direction mnemonic: the prefix names *which memory does the damage relative to the target* — proactive = prior material attacks forward; retroactive = recent material attacks backward
- Sleep after learning reduces retroactive interference and supports consolidation

### Memory Is Reconstructive (the error catalog)

- **Misinformation effect** (Loftus): post-event information rewrites reports — "smashed" vs. "hit" changes speed estimates *and* later false memory of broken glass
- **Source monitoring errors**: content remembered, origin misattributed (was it seen, imagined, or told?); **cryptomnesia** = unconscious plagiarism
- **Flashbulb memories**: vivid and confidently held memories of emotional events — confidence stays high while accuracy *decays like ordinary memory* (the confidence-accuracy dissociation)
- **False/recovered memory debate**: suggestive techniques can implant detailed, sincerely believed events — central to eyewitness-testimony reform
- Clinical anchors: **Alzheimer's disease** (early hippocampal/acetylcholine involvement → anterograde-first explicit loss); **Korsakoff syndrome** (thiamine deficiency, often with **confabulation** — fluent, unintentional fabrication); **retrograde amnesia** (loss of old memories, typically temporally graded) vs. **anterograde** (cannot form new ones)
- Normal aging: **recall** declines more than **recognition**; procedural and semantic knowledge remain robust

### The Paradigm-Sorting Flowchart (for any learning passage)

1. Is the response reflexive and triggered by a *predictive stimulus*? → classical conditioning (label US/UR/CS/CR)
2. Is a voluntary behavior changing with its *consequences*? → operant (identify add/remove × increase/decrease, then the schedule)
3. Did behavior change after mere *observation* of a model? → social/observational learning
4. Is performance improving or failing on a *memory test*? → name the stage (encoding/storage/retrieval), the store, and the interference direction
Most passages mix two of these; assign each dependent measure separately.`
    },
    {
      id: 'lmem4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Eyewitness-Memory Passage, Fully Read

**Passage.** Participants watch a staged theft video. Group 1 then reads an inaccurate summary mentioning a "toolbox" (no toolbox appeared); Group 2 reads an accurate summary; Group 3 reads nothing. A week later, all take (a) a free-recall test and (b) a recognition test including the toolbox. Group 1 "recognizes" the toolbox 44% of the time versus 9% and 8% in Groups 2 and 3, and reports high confidence in those recognitions. A follow-up finds the effect shrinks when participants are warned about the summary's unreliability BEFORE reading it, but not when warned after a week.

**Step 1 — name the effect and the control logic.** Elevated false recognition only in the misled group is the misinformation effect. Group 2 controls for reading any summary; Group 3 for mere delay — so the false memory traces specifically to the misleading content.

**Step 2 — interpret the confidence data.** High confidence accompanying false recognitions reproduces the confidence-accuracy dissociation: jurors weight confidence heavily, but the data show it tracks the FEELING of memory, not its source. Expect an answer choice equating confidence with accuracy — it is always wrong.

**Step 3 — use the warning asymmetry.** A pre-exposure warning lets participants tag the summary as a separate, suspect source at ENCODING; a warning after a week fails because the event and post-event sources have already blended — a source-monitoring account. This asymmetry is the passage's strongest clue that the mechanism is misattribution, not simple overwriting or social compliance.

**Step 4 — the application item.** "Which police practice does this research most directly support?" Blind lineup administration and neutral, non-leading question wording — interventions that keep post-event information from entering the witness's memory in the first place, since the follow-up shows late corrections barely work.`
    },
    {
      id: 'lmem4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Forgetting, Memory Errors & Paradigm Sorting** 🎯`,
      exercise: {
        questions: [
          {
            question: `A bilingual student who learned Spanish for years starts intensive Italian. She soon finds Italian words intruding when she tries to speak Spanish. This forgetting pattern is:`,
            options: [`Proactive interference, because Spanish was learned first`, `Encoding failure, since Spanish was never fully learned`, `Retroactive interference from newly learned Italian`, `Storage decay of disused Spanish vocabulary`],
            correctAnswer: 2,
            explanation: `The TARGET being hurt is the old memory (Spanish) and the AGGRESSOR is the new learning (Italian): new-damages-old is retroactive interference. Proactive would be Spanish intruding on new Italian. Decay and encoding failure are ruled out because Spanish was well established and the problem appeared specifically with new competing learning.`
          },
          {
            question: `A man cannot produce his childhood address on request, but instantly picks it out of a list of four addresses. His initial failure is best characterized as:`,
            options: [`A retrieval failure, since recognition succeeded`, `A storage failure, since free recall failed`, `An encoding failure from never learning it`, `Anterograde amnesia for autobiographical facts`],
            correctAnswer: 0,
            explanation: `Success on recognition proves the memory was encoded and stored; only cue-driven access was lacking — the operational definition of retrieval failure (the tip-of-the-tongue family). Storage or encoding failure would leave recognition near chance, and anterograde amnesia concerns forming NEW memories, not accessing old ones.`
          },
          {
            question: `In a study, witnesses asked "How fast were the cars going when they SMASHED into each other?" later report broken glass that never existed, more often than witnesses asked the same question with "hit." The manipulated variable operates by:`,
            options: [`Blocking consolidation of the original scene`, `Introducing post-event information that reshapes memory`, `Producing proactive interference from earlier accidents`, `Heightening arousal during encoding of the crash`],
            correctAnswer: 1,
            explanation: `The wording arrives AFTER encoding, so it cannot affect consolidation of the original scene or arousal during its encoding, and nothing implicates memories of earlier accidents; instead the leading verb supplies schema-consistent post-event information that gets rebuilt into the memory — Loftus's misinformation effect, the flagship evidence that recollection is reconstructive rather than playback.`
          },
          {
            question: `A dog salivates when it hears the can opener, and separately has learned to sit on command to earn treats. The correct paradigm assignment is:`,
            options: [`Both are operant, since both lead to food`, `Both are classical, since both are cued by stimuli`, `Salivation is operant; sitting is classical`, `Salivation is classical; sitting is operant`],
            correctAnswer: 3,
            explanation: `Salivation is an involuntary reflex elicited by a predictive cue — the can opener is a CS for the food US — squarely classical. Sitting is emitted voluntarily and strengthened by the treat that FOLLOWS it — positive reinforcement, squarely operant. Sorting mixed vignettes by elicited-vs-emitted and before-vs-after is the highest-yield learning skill on the exam.`
          },
          {
            question: `Researchers collect memory reports of a disaster 1 week and 3 years after the event. At 3 years, consistency with the original reports has fallen substantially, but participants' confidence ratings remain near ceiling. The finding best supports which conclusion about flashbulb memories?`,
            options: [`They are immune to normal forgetting`, `They decay faster than ordinary memories`, `Confidence stays high while accuracy erodes normally`, `They are stored in a separate, error-proof memory system`],
            correctAnswer: 2,
            explanation: `The longitudinal design shows content drifting while confidence holds — the confidence-accuracy dissociation that defines the modern view of flashbulb memory: emotionally special in FEELING, ordinary in fidelity. The data show neither immunity nor unusually fast decay, and the persistence of high confidence is exactly why such memories mislead witnesses and jurors.`
          }
        ]
      }
    },
    {
      id: 'lmem4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Diagnose forgetting by stage: cues/recognition restore it = retrieval failure; nothing restores it = encoding or storage; Ebbinghaus curve is steep early
- Interference directions: proactive = old attacks new; retroactive = new attacks old — identify which memory is the TARGET first
- Memory is reconstructive: misinformation effect, source-monitoring errors, and confident-but-drifting flashbulb memories; confidence never certifies accuracy
- Clinical anchors: Alzheimer's = anterograde-first explicit loss (hippocampus, acetylcholine); Korsakoff = thiamine deficiency with confabulation; aging spares recognition more than recall
- Passage flowchart: elicited-by-predictor = classical; consequence-driven = operant; model-driven = observational; test-performance = name stage, store, and interference direction`
    }
  ]
};
