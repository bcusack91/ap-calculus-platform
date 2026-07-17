export const mcatPsychBehavPart2Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb2-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 2 of 7 — Learning & Memory**

### Classical Conditioning (Pavlov)

| Term | Definition | Example |
|------|-----------|---------|
| UCS (unconditioned stimulus) | Naturally triggers response | Food |
| UCR (unconditioned response) | Natural response | Salivation |
| CS (conditioned stimulus) | Learned trigger | Bell |
| CR (conditioned response) | Learned response | Salivation to bell |

**Key phenomena**: Acquisition, extinction, spontaneous recovery, generalization, discrimination

### Operant Conditioning (Skinner)

| Type | Effect on Behavior | Example |
|------|-------------------|---------|
| Positive reinforcement | Increase (add pleasant) | Treat for good grades |
| Negative reinforcement | Increase (remove unpleasant) | Seatbelt silences alarm |
| Positive punishment | Decrease (add unpleasant) | Speeding ticket |
| Negative punishment | Decrease (remove pleasant) | Phone taken away |

### Memory Types

| Type | Duration | Capacity | Example |
|------|----------|----------|---------|
| Sensory | <1 second (iconic) to ~3-4s (echoic) | Large | Flash of image |
| Short-term/Working | ~30 seconds | 7$\\pm$2 items | Phone number |
| Long-term | Unlimited duration | Unlimited capacity | Life events |

### Reinforcement Schedules (ULTRA HIGH YIELD)

| Schedule | Rule | Response pattern | Real-world example |
|----------|------|------------------|--------------------|
| Fixed ratio (FR) | Reward after set # responses | High rate, brief post-reward pause | Piecework pay (per 10 units) |
| Variable ratio (VR) | Reward after unpredictable # responses | **Highest, most resistant to extinction** | Slot machines, gambling |
| Fixed interval (FI) | Reward after set time | Scalloped — responding ramps before deadline | Studying right before a weekly quiz |
| Variable interval (VI) | Reward after unpredictable time | Steady, moderate | Checking for a text reply |

**Key rule:** *Ratio* schedules (based on # of responses) produce faster responding than *interval* schedules; *variable* schedules resist extinction better than *fixed*. VR is the gold standard for persistence.

### Long-Term Memory Subtypes & Encoding

$$\\text{Long-term} \\to \\begin{cases} \\textbf{Explicit (declarative)} & \\text{episodic, semantic — hippocampus} \\\\ \\textbf{Implicit (nondeclarative)} & \\text{procedural, conditioning — cerebellum/basal ganglia} \\end{cases}$$

- **Encoding effects:** spacing effect (distributed > massed practice), serial position (primacy from LTM rehearsal + recency from STM), depth of processing (semantic > acoustic > visual), and state/context-dependent retrieval.
- **Memory failures:** proactive interference (old disrupts new) vs. retroactive interference (new disrupts old); source monitoring errors; misinformation effect (Loftus).

### Biological Basis: Long-Term Potentiation (LTP)

LTP — the cellular model of learning — is strengthening of synaptic transmission via the **NMDA receptor**, which requires *both* presynaptic glutamate release AND postsynaptic depolarization to expel its $Mg^{2+}$ block, allowing $Ca^{2+}$ influx. The hippocampus is essential for *forming* new explicit memories (cf. patient H.M., who lost his hippocampi and could form no new declarative memories but could still learn motor skills).`
    },
    {
      id: 'pb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Learning & Memory** 🎯`,
      exercise: {
        questions: [
          {
            question: `A child stops throwing tantrums when parents consistently ignore the behavior. This is:`,
            options: [`Extinction of operant conditioning — removing reinforcement (attention) decreases behavior`, `Classical conditioning`, `Negative reinforcement`, `Positive punishment`],
            correctAnswer: 0,
            explanation: `The tantrums were maintained by attention (positive reinforcement). When attention is consistently withheld, the behavior extinguishes. This is a common MCAT scenario in behavioral psychology.`
          },
          {
            question: `A researcher finds that gamblers at slot machines show the most persistent behavior and the greatest resistance to extinction. Which reinforcement schedule explains this?`,
            options: [`Variable ratio`, `Fixed ratio`, `Fixed interval`, `Variable interval`],
            correctAnswer: 0,
            explanation: `Slot machines pay out after an unpredictable number of pulls — a variable-ratio schedule, which produces the highest response rate and the strongest resistance to extinction precisely because the player can never predict when the next reward arrives.`
          },
          {
            question: `Patient H.M. had his hippocampi removed and could no longer form new declarative memories, yet he improved at a mirror-tracing task across days without remembering having done it. This dissociation demonstrates that:`,
            options: [`Implicit (procedural) memory is stored separately from explicit memory`, `The hippocampus stores all long-term memories`, `Procedural skills require an intact hippocampus`, `Short-term memory depends on the cerebellum`],
            correctAnswer: 0,
            explanation: `The hippocampus is required to consolidate new EXPLICIT (declarative) memories, but PROCEDURAL/implicit learning relies on the cerebellum and basal ganglia. H.M.'s improving motor skill with no conscious recall is the classic evidence these systems are anatomically distinct.`
          }
        ]
      }
    },
    {
      id: 'pb2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Learning & Memory

<details>
<summary><b>Example 1: Distinguish negative reinforcement from punishment in data</b></summary>

**Question:** A rat presses a lever; this turns off a loud noise. Over sessions, lever-pressing increases in frequency. A second rat presses a lever and receives a shock; pressing decreases. Classify each.

**Solution:**
1. Rat 1: an aversive stimulus (noise) is **removed** after the behavior, and the behavior **increases** → **negative reinforcement** (escape/avoidance learning). ✓
2. Rat 2: an aversive stimulus (shock) is **added** and behavior **decreases** → **positive punishment.** ✓

**MCAT trap:** "Negative" describes *removal*, not "bad." Whether something is reinforcement or punishment is judged ONLY by whether the behavior goes up (reinforcement) or down (punishment).
</details>

<details>
<summary><b>Example 2: Interpret a serial-position curve</b></summary>

**Question:** Subjects recall a 20-word list immediately. A U-shaped recall curve appears (best for first and last items). A second group recalls after a 30-second distractor task. What changes, and why?

**Solution:**
1. The immediate curve shows **primacy** (early items rehearsed into long-term memory) and **recency** (last items still in short-term/working memory).
2. The 30-second distractor task fills working memory and prevents rehearsal → the **recency effect disappears** while primacy remains. ✓

**Why it matters:** This double dissociation is classic evidence for SEPARATE short-term and long-term memory stores — a favorite experimental-reasoning question.
</details>

<details>
<summary><b>Example 3: Apply classical-conditioning terminology to a novel scenario</b></summary>

**Question:** A chemotherapy patient feels nauseated (response) after infusions. Soon, merely entering the clinic waiting room triggers nausea. Identify the UCS, UCR, CS, and CR.

**Solution:**
- UCS = the chemotherapy drug (naturally causes nausea)
- UCR = nausea caused by the drug
- CS = the waiting room (a previously neutral stimulus paired with the drug)
- CR = nausea triggered by the waiting room alone ✓

**Extension:** This "conditioned taste/place aversion" can occur after a SINGLE pairing and over long delays — an exception to the usual rule that conditioning needs many closely-timed pairings (biological preparedness).
</details>`
    },
    {
      id: 'pb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Classical conditioning: association between stimuli (involuntary responses)
- Operant conditioning: consequences shape behavior (voluntary responses)
- Reinforcement increases behavior; punishment decreases behavior
- Memory: sensory → short-term (7$\\pm$2 items) → long-term`
    }
  ]
};
