export const mcatPsychCogLangPart1Data = {
  topicSlug: 'mcat-psychology-behavior-cognition-language-mcat',
  sections: [
    {
      id: 'cog1-intro',
      type: 'text' as const,
      content: `# Cognition & Language

**Part 1 of 4 — Attention & Information Processing**

### The Information-Processing Frame

Cognition treats the mind as a limited-capacity processor: input → attention filters → working memory operations → long-term storage → output. Every phenomenon in this lesson is about where the bottleneck sits and what slips past it.

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
- **Shadowing cost & task switching**: switching attention carries a measurable time cost; "multitasking" is rapid alternation, with a per-switch penalty

### Processing Speed Signatures in Data

- Reaction-time (RT) increases that are *linear in the number of items* suggest serial search; flat RT curves suggest parallel/automatic processing ("pop-out" of a red item among greens)
- Practice shifts a task from the serial to the flat pattern — that shift, plus Stroop-like intrusions, is how passages *measure* automaticity`
    },
    {
      id: 'cog1-worked',
      type: 'text' as const,
      content: `### Worked Example — An Attention Passage, Fully Read

**Passage.** Participants shadow a story played to the right ear while a word list plays to the left. Afterward, recognition of left-ear words is at chance — but participants' skin conductance rises when previously fear-conditioned words occur in the left ear during shadowing, and 34% of participants detect their own name there. In Experiment 2, novices and expert typists type while repeating aloud a spoken passage; novices' typing accuracy collapses, experts' barely changes. In Experiment 3, expert typists show large interference when the spoken passage is replaced by a second manual task (sorting cards by suit).

**Step 1 — locate the filter.** Chance recognition says unattended content did not reach explicit memory. But the skin-conductance response to conditioned words and the name breakthrough show meaning was analyzed at least shallowly for select, low-threshold items — too much analysis for Broadbent's strict early filter, exactly what Treisman's attenuation predicts. Cite attenuation, not late selection: late selection predicts widespread semantic processing, and chance recognition argues against that.

**Step 2 — read the expertise dissociation.** For experts, typing has become automatic — it no longer consumes the central resources that speech shadowing needs, so the two proceed in parallel. Novice typing is controlled processing, and two controlled tasks overload capacity.

**Step 3 — explain Experiment 3's reversal.** Automaticity is resource-specific, not absolute: two MANUAL tasks now compete for the same motor/spatial resources, restoring interference even in experts. This is the multiple-resource refinement the MCAT loves — automatic does not mean cost-free under every pairing.

**Step 4 — anticipate the application item.** "What does this predict about hands-free phone use while driving?" Interference persists, because conversation and hazard monitoring compete for central attention, not for hands — the passage's novice-typist logic transferred to the road.`
    },
    {
      id: 'cog1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attention & Automatic Processing** 🎯`,
      exercise: {
        questions: [
          {
            question: `At a loud reception, a physician is absorbed in one conversation yet immediately turns when her name is spoken across the room. Among classic attention theories, this breakthrough is BEST accommodated by:`,
            options: [`Broadbent's early filter, which blocks unattended channels before meaning analysis`, `Treisman's attenuation model, in which unattended input is weakened but personally significant, low-threshold stimuli still reach awareness`, `The visuospatial sketchpad`, `Sensory adaptation in the auditory nerve`],
            correctAnswer: 1,
            explanation: `A strict early filter cannot explain how an unattended word's MEANING (her name) was recognized. Attenuation theory keeps the filter early but leaky: unattended channels are turned down, and items with permanently low thresholds — one's name, danger words — break through. The sketchpad is a working-memory component, and adaptation would reduce, not enable, detection.`
          },
          {
            question: `Radiologists searching CT images for lung nodules were shown scans with a small gorilla image embedded; a large majority failed to notice it despite eye-tracking showing many looked directly at it. This is a demonstration of:`,
            options: [`Change blindness`, `The Stroop effect`, `Retroactive interference`, `Inattentional blindness — an unexpected, fully visible stimulus goes unseen when attention is committed to another task`],
            correctAnswer: 3,
            explanation: `The stimulus was continuously present and fixated, yet unattended because the observers' attention was consumed by nodule search — inattentional blindness, the proof that fixation without attention does not produce awareness. Change blindness requires a change across a disruption; nothing changed here.`
          },
          {
            question: `Fluent readers are slow to say "blue" when the word RED appears in blue ink. The theoretical significance of this interference is that it:`,
            options: [`Shows color perception is slower than reading in all humans`, `Demonstrates iconic memory decay`, `Indexes the automaticity of reading — a practiced process that runs involuntarily and generates a competing response that must be suppressed`, `Shows early filtering of word meaning`],
            correctAnswer: 2,
            explanation: `Stroop interference exists BECAUSE reading has become automatic: it cannot be switched off even when it hurts performance, so its output (the word name) competes with the controlled task (ink-color naming). Preliterate children show little Stroop interference, confirming it tracks practice, not innate processing speeds. If word meaning were filtered early, there would be no conflict at all.`
          },
          {
            question: `Two tasks are performed together with almost no cost: an experienced driver holds a conversation on an empty highway. Which change would the controlled-vs-automatic framework predict MOST degrades the pairing?`,
            options: [`Entering a construction zone with unpredictable merges, forcing driving back into effortful, controlled processing that competes with conversation for central capacity`, `Turning the radio off`, `The passenger speaking slightly more quietly`, `Continuing on the same empty highway for another hour`],
            correctAnswer: 0,
            explanation: `Practiced highway driving runs largely automatically, leaving capacity for talk. Novel, unpredictable demands revert driving to controlled processing, and two controlled tasks exceed central capacity — conversation performance and hazard response both suffer. The other options leave the demand structure unchanged or reduce load.`
          },
          {
            question: `In a visual search study, time to find a target increases by roughly 40 ms for every added distractor in one condition, but stays flat regardless of distractor count in another. The most defensible interpretation is that search was:`,
            options: [`Parallel in both conditions`, `Serial and effortful in the flat condition`, `Impossible in the linear condition`, `Serial (item-by-item, attention-demanding) when RT rose with set size, and parallel/automatic "pop-out" when RT was flat`],
            correctAnswer: 3,
            explanation: `A linear RT-by-set-size slope is the signature of serial, attention-demanding comparison; a flat function means all items were processed simultaneously — the target pops out via a basic feature difference. This RT-slope logic is the standard way cognition passages quantify whether processing is controlled or automatic, so read the axes before the conclusions.`
          }
        ]
      }
    },
    {
      id: 'cog1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Filter theories: Broadbent = early strict block; Treisman = early attenuation with low-threshold breakthrough (the cocktail party answer); late selection = filtering after meaning
- Inattentional and change blindness prove awareness needs attention, not just fixation — looking is not seeing
- Controlled processing is serial, effortful, capacity-limited; automaticity comes from practice, runs involuntarily, and is measured by Stroop intrusion and flat RT-by-set-size curves
- Dual-task success requires different resources or an automatic member; hands-free phone impairment is central, not manual
- Data habit: linear RT slope = serial search; flat slope = parallel pop-out; practice converts the first into the second`
    }
  ]
};
