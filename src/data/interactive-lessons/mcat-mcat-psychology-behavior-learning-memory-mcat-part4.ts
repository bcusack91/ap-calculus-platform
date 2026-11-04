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
- **Source monitoring errors**: content remembered, origin misattributed (was it seen, imagined, or told?)

<!-- yield:low -->
- **Cryptomnesia** = unconscious plagiarism: a source-monitoring error in which a remembered idea is experienced as one's own new idea
<!-- /yield -->

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

**Problem 1.** Participants watch a staged theft. Group 1 then reads a summary that falsely mentions a "toolbox"; Group 2 reads an accurate summary; Group 3 reads nothing. A week later, Group 1 "recognizes" the toolbox 44% of the time, versus 9% and 8% for Groups 2 and 3.

- **(a)** What effect does Group 1's result demonstrate?
- **(b)** What does Group 2 control for?
- **(c)** What does Group 3 control for, and what do the two controls together show?

**(a) Misinformation effect.** False recognition rises only in the group that read misleading post-event information.

**(b) Reading a summary.** Group 2 reads a summary too, so the act of reading any summary cannot explain Group 1's errors.

**(c) Mere delay.** Group 3 experiences the same week with no summary. Together the controls trace the false memory specifically to the misleading content.

**Problem 2.** Group 1 participants report high confidence in their toolbox recognitions. A follow-up finds the effect shrinks when participants are warned the summary is unreliable BEFORE reading it, but not when they are warned a week later.

- **(a)** What does the confidence data say about confidence as a guide to accuracy?
- **(b)** Why does a warning given before reading help?
- **(c)** Why does a warning a week later fail, and which mechanism does the asymmetry point to?
- **(d)** Which police practices does this research most directly support?

**(a) Confidence-accuracy dissociation.** Confidence tracks the FEELING of remembering, not its accuracy. Here confidence stayed high for a false memory, so on the MCAT an answer equating confidence with accuracy is a trap.

**(b) Tagging at encoding.** An early warning lets participants tag the summary as a separate, suspect source while they read it.

**(c) Source misattribution.** After a week the event and the summary have already blended as sources. That source-monitoring account fits the asymmetry better than simple overwriting or social compliance.

**(d) Prevention, not correction.** Blind lineup administration and neutral, non-leading question wording keep post-event information out of the witness's memory, since late corrections barely work.`
    },
    {
      id: 'lmem4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Forgetting, Memory Errors & Paradigm Sorting** 🎯`,
      exercise: {
        questions: [
          {
            question: `A bilingual student who learned Spanish for years starts intensive Italian. She soon finds Italian words intruding when she tries to speak Spanish. This forgetting pattern is:`,
            options: [`Proactive interference, because Spanish was learned first`, `Encoding failure, since Spanish was never fully learned`, `Retroactive interference from Italian`, `Storage decay of disused Spanish vocabulary`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The TARGET being hurt is the old memory (Spanish) and the AGGRESSOR is the new learning (Italian): new-damages-old is retroactive interference. Proactive would be Spanish intruding on new Italian. Decay and encoding failure are ruled out because Spanish was well established and the problem appeared specifically with new competing learning.`
          },
          {
            question: `A man cannot produce his childhood address on request, but instantly picks it out of a list of four addresses. His initial failure is best characterized as:`,
            options: [`A retrieval failure, since recognition succeeded`, `A storage failure, since free recall failed`, `An encoding failure from never learning it`, `Anterograde amnesia for autobiographical facts`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Success on recognition proves the memory was encoded and stored; only cue-driven access was lacking — the operational definition of retrieval failure (the tip-of-the-tongue family). Storage or encoding failure would leave recognition near chance, and anterograde amnesia concerns forming NEW memories, not accessing old ones.`
          },
          {
            question: `In a study, witnesses asked "How fast were the cars going when they SMASHED into each other?" later report broken glass that never existed, more often than witnesses asked the same question with "hit." The manipulated variable operates by:`,
            options: [`Blocking consolidation of the original scene`, `Introducing post-event information that reshapes memory`, `Producing proactive interference from earlier accidents`, `Heightening arousal during encoding of the crash`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The wording arrives AFTER encoding, so it cannot affect consolidation of the original scene or arousal during its encoding, and nothing implicates memories of earlier accidents; instead the leading verb supplies schema-consistent post-event information that gets rebuilt into the memory — Loftus's misinformation effect, the flagship evidence that recollection is reconstructive rather than playback.`
          },
          {
            question: `A dog salivates when it hears the can opener, and separately has learned to sit on command to earn treats. The correct paradigm assignment is:`,
            options: [`Both are operant, since both lead to food`, `Both are classical, since both are cued by stimuli`, `Salivation is operant; sitting is classical`, `Salivation is classical; sitting is operant`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Salivation is an involuntary reflex elicited by a predictive cue — the can opener is a CS for the food US — squarely classical. Sitting is emitted voluntarily and strengthened by the treat that FOLLOWS it — positive reinforcement, squarely operant. Sorting mixed vignettes by elicited-vs-emitted and before-vs-after is the highest-yield learning skill on the exam.`
          },
          {
            question: `Researchers collect memory reports of a disaster 1 week and 3 years after the event. At 3 years, consistency with the original reports has fallen substantially, but participants' confidence ratings remain near ceiling. The finding best supports which conclusion about flashbulb memories?`,
            options: [`They are immune to normal forgetting`, `They decay faster than ordinary memories`, `Confidence stays high while accuracy erodes normally`, `They are stored in a separate, error-proof memory system`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The longitudinal design shows content drifting while confidence holds — the confidence-accuracy dissociation that defines the modern view of flashbulb memory: emotionally special in FEELING, ordinary in fidelity. The data show neither immunity nor unusually fast decay, and the persistence of high confidence is exactly why such memories mislead witnesses and jurors.`
          }
        ]
      }
    },
    {
      id: 'lmem4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Locate the failure stage.** If cues or recognition restore an item, retrieval failed; if nothing does, encoding or storage failed.
- **Interference direction.** Proactive: old learning disrupts new; retroactive: new learning disrupts old. Find the target first.
- **Memory is reconstructive.** Misinformation, source-monitoring errors and drifting flashbulb memories all feel genuine.
- **Sort the paradigm.** Reflex to a predictor is classical, consequence-driven is operant, model-driven is observational.

**Common traps**

- **Confidence as accuracy.** Flashbulb and misled memories stay confidently held while their accuracy erodes like ordinary memory.
- **Recall failure as storage loss.** Failed recall with successful recognition is a retrieval failure; the trace was stored.
- **Anterograde vs. retrograde.** Anterograde blocks new memories; retrograde loses earlier ones. Korsakoff (thiamine deficiency) adds confabulation.
- **One paradigm per passage.** Most passages mix two paradigms; assign each dependent measure to its own.

<!-- yield:low -->
**Low-yield extras**

- Cryptomnesia (unconscious plagiarism) is a source-monitoring error in which a remembered idea feels new and self-generated.
<!-- /yield -->`
    }
  ]
};
