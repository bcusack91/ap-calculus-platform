export const mcatPsychCogLangPart1Data = {
  topicSlug: 'mcat-psychology-behavior-cognition-language-mcat',
  sections: [
    {
      id: 'cog1-intro',
      type: 'text' as const,
      content: `# Cognition & Language

**Part 1 of 4 — Attention & Information Processing**

### The Information-Processing Frame

Cognition treats the mind as a limited-capacity processor: input → attention filters → working memory operations → long-term storage → output. Information can be lost at every hand-off: unattended input at the filter, unrehearsed material from working memory, and stored material that cannot be retrieved.

### Selective Attention — One Channel at a Time

**Dichotic listening** (different messages to each ear, shadow one): people report almost nothing from the unattended ear — except physical features (voice gender, pitch) and, sometimes, their **own name** (the **cocktail party effect**).

Three classic accounts, ordered by where the filter sits:

| Model | Filter location | Handles the name effect? |
|-------|-----------------|--------------------------|
| **Broadbent's early filter** | Before meaning is analyzed | No — a strict early filter should block the name |
| **Treisman's attenuation** | Early, but *turns down* rather than blocks; low-threshold items (your name, "fire") break through | Yes — the standard MCAT answer |
| **Late selection** | After meaning analysis, at response stage | Yes, but predicts more unattended processing than data show |

### What Unattended Really Costs

- **Inattentional blindness**: fully visible events go unseen when attention is engaged elsewhere (the gorilla walking through the basketball passers)
- **Change blindness**: large changes across a visual disruption go unnoticed — perception keeps far less than it seems to
- Both prove that *looking* is not *seeing*: awareness requires attention, not just retinal registration

### Divided Attention, Automaticity & the Stroop Effect

- **Controlled processing**: effortful, serial, capacity-limited (novel or complex tasks)
- **Automatic processing**: fast, parallel, nearly effortless — built by extensive practice (reading, for literate adults)
- Dual-task performance succeeds when tasks differ in modality/resources or when one is automatic; it collapses when two controlled tasks compete (why phone conversations impair driving even hands-free — the interference is *central*, not manual)
- **Stroop effect**: naming the ink color of the word RED printed in blue is slow because automatic word-reading delivers a competing response that must be suppressed. Stroop interference is the standard laboratory index that a process has become automatic and involuntary.
- **Task switching**: switching attention carries a measurable time cost; "multitasking" is rapid alternation, with a per-switch penalty

### Processing Speed Signatures in Data

- Reaction-time (RT) increases that are *linear in the number of items* suggest serial search; flat RT curves suggest parallel/automatic processing ("pop-out" of a red item among greens)
- Practice shifts a task from the serial to the flat pattern — that shift, plus Stroop-like intrusions, is how passages *measure* automaticity`
    },
    {
      id: 'cog1-worked',
      type: 'text' as const,
      content: `### Worked Example — An Attention Passage, Fully Read

**Problem 1.** Participants shadow a story in the right ear while a word list plays in the left. Later recognition of left-ear words is at chance, yet skin conductance rises to fear-conditioned left-ear words, and 34% of participants detect their own name there.

- **(a)** What does chance recognition say about the unattended words?
- **(b)** What do the skin-conductance rise and the name detection add?
- **(c)** Which filter model fits the whole pattern?
- **(d)** What would late selection predict here, and does the data fit?

**(a) Explicit memory.** Chance recognition says the unattended content never reached explicit memory: on this finding alone, the left ear looks fully blocked.

**(b) Some meaning got in.** A skin-conductance response to conditioned words, and the name breakthrough, show that meaning was analyzed at least shallowly for select, low-threshold items. That is too much analysis for a filter that blocks everything before meaning.

**(c) Treisman's attenuation.** Broadbent's strict early filter cannot pass any meaning. Treisman's filter is early but turns the channel down rather than off, so most words are lost while low-threshold items (one's name, danger words) still break through. That is exactly the pattern in (a) and (b).

**(d) Too much processing predicted.** Late selection predicts widespread semantic processing of the unattended ear, so recognition of those words should be well above chance. The data do not fit: recognition is at chance. Cite attenuation, not late selection.

**Problem 2.** In Experiment 2, novices and expert typists type while repeating aloud a spoken passage: novices' accuracy collapses, experts' barely changes. In Experiment 3, experts show large interference when the spoken passage is replaced by a second manual task (sorting cards by suit).

- **(a)** Why do experts type well while shadowing when novices cannot?
- **(b)** Why does interference return for experts in Experiment 3?
- **(c)** Hazard monitoring in traffic is controlled. What does the pattern predict about hands-free phone use while driving?

**(a) Automatic vs. controlled.** For experts, typing has become automatic: it no longer consumes the central resources that speech shadowing needs, so the two proceed in parallel. Novice typing is controlled processing, and two controlled tasks overload capacity.

**(b) Resource-specific automaticity.** Automaticity is not absolute. Two MANUAL tasks compete for the same motor and spatial resources, restoring interference even in experts. This is the multiple-resource refinement the MCAT loves: automatic does not mean cost-free under every pairing.

**(c) Hands-free still costs.** Interference persists, because conversation and hazard monitoring compete for central attention, not for hands. It is the novice-typist logic transferred to the road.`
    },
    {
      id: 'cog1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attention & Automatic Processing** 🎯`,
      exercise: {
        questions: [
          {
            question: `Radiologists searching CT images for lung nodules were shown scans with a small gorilla image embedded; a large majority failed to notice it despite eye-tracking showing many looked directly at it. This is a demonstration of:`,
            options: [`Change blindness across a visual disruption`,`Stroop-type interference`, `Retroactive memory interference`, `Inattentional blindness`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The stimulus was continuously present and fixated, yet unattended because the observers' attention was consumed by nodule search — inattentional blindness, the proof that fixation without attention does not produce awareness. Change blindness requires a change across a disruption; nothing changed here.`
          },
          {
            question: `Fluent readers are slow to say "blue" when the word RED appears in blue ink. The theoretical significance of this interference is that it:`,
            options: [`Shows color perception is slower than reading in all humans`, `Demonstrates rapid decay of iconic memory`, `Indexes the automaticity of practiced reading`, `Shows word meaning is filtered out early`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Stroop interference exists BECAUSE reading has become automatic: it cannot be switched off even when it hurts performance, so its output (the word name) competes with the controlled task (ink-color naming). Preliterate children show little Stroop interference, confirming it tracks practice, not innate processing speeds. If word meaning were filtered early, there would be no conflict at all.`
          },
          {
            question: `Two tasks are performed together with almost no cost: an experienced driver holds a conversation on an empty highway. Which change would the controlled-vs-automatic framework predict MOST degrades the pairing?`,
            options: [`Entering a construction zone with unpredictable merges`, `Turning off the radio to reduce background noise`, `The passenger speaking slightly more quietly`, `Continuing on the same empty highway for another hour`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Practiced highway driving runs largely automatically, leaving capacity for talk. Novel, unpredictable demands revert driving to controlled processing, and two controlled tasks exceed central capacity — conversation performance and hazard response both suffer. The other options leave the demand structure unchanged or reduce load.`
          },
          {
            question: `In a visual search study, time to find a target increases by roughly 40 ms for every added distractor in one condition, but stays flat regardless of distractor count in another. The most defensible interpretation is that search was:`,
            options: [`Parallel in both conditions, differing only in speed`, `Serial in the flat condition and parallel in the rising one`, `Abandoned partway through in the linear condition`, `Serial when RT rose; parallel pop-out when RT was flat`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `A linear RT-by-set-size slope is the signature of serial, attention-demanding comparison; a flat function means all items were processed simultaneously — the target pops out via a basic feature difference. Swapping the labels inverts that signature; slopes that differ between conditions rule out one parallel mechanism in both, and nothing in the data indicates search was abandoned. This RT-slope logic is the standard way cognition passages quantify whether processing is controlled or automatic, so read the axes before the conclusions.`
          },
          {
            question: `At a loud reception, a physician is absorbed in one conversation yet immediately turns when her name is spoken across the room. Among classic attention theories, this breakthrough is BEST accommodated by:`,
            options: [`Broadbent's early filter model, with strict channel blocking`, `Treisman's attenuation model, with a leaky early filter`, `Baddeley's visuospatial sketchpad in working memory`, `Sensory adaptation within the auditory nerve`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A strict early filter cannot explain how an unattended word's MEANING (her name) was recognized. Attenuation theory keeps the filter early but leaky: unattended channels are turned down, and items with permanently low thresholds — one's name, danger words — break through. The sketchpad is a working-memory component, and adaptation would reduce, not enable, detection.`
          }
        ]
      }
    },
    {
      id: 'cog1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Filter models.** Broadbent blocks early, Treisman attenuates (your name breaks through), late selection filters after meaning.
- **Looking is not seeing.** Inattentional and change blindness show that awareness needs attention, not just fixation.
- **Automaticity.** Practice makes processing fast, parallel and involuntary; Stroop interference is its standard index.
- **Reading RT slopes.** RT rising linearly with set size means serial search; a flat line means parallel pop-out.

**Common traps**

- **Strict filter for your name.** Broadbent's filter would block your name; the cocktail party effect is Treisman's attenuation.
- **Late selection by default.** It predicts widespread unattended meaning; chance recognition of the ignored ear argues against it.
- **Automatic means cost-free.** Automaticity is resource-specific: two manual tasks still interfere, even for experts.
- **Hands-free is safe.** Phone talk competes with driving for central attention, not for hands, so hands-free still impairs.`
    }
  ]
};
