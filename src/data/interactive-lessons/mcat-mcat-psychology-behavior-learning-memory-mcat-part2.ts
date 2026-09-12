export const mcatPsychLearnMemPart2Data = {
  topicSlug: 'mcat-psychology-behavior-learning-memory-mcat',
  sections: [
    {
      id: 'lmem2-intro',
      type: 'text' as const,
      content: `# Learning & Memory

**Part 2 of 4 — Operant Conditioning: Consequences, Schedules & Learning Without Reinforcement**

### Classical vs. Operant — the First Fork in Every Item

- **Classical**: behavior is *elicited* (reflexive, involuntary); learning links two **stimuli** that occur *before* the response
- **Operant** (Thorndike's law of effect; Skinner): behavior is *emitted* (voluntary); learning links the behavior to its **consequence**

### The Consequence 2×2 (define by effect, not by feel)

| | Stimulus **added** (positive) | Stimulus **removed** (negative) |
|--|-------------------------------|--------------------------------|
| **Behavior increases** (reinforcement) | Positive reinforcement (treat for sitting) | Negative reinforcement (aspirin removes headache; seatbelt silences alarm) |
| **Behavior decreases** (punishment) | Positive punishment (extra chores added) | Negative punishment (phone taken away) |

- "Positive/negative" mean **add/remove**, never good/bad; "reinforcement/punishment" are defined by whether the behavior *actually* increases or decreases
- **Escape** learning terminates an ongoing aversive stimulus; **avoidance** learning prevents it entirely (a warning cue signals the response window) — both are negative reinforcement
- **Primary reinforcers** satisfy biological needs (food, warmth); **secondary (conditioned) reinforcers** gain value by association (money, tokens, grades); **token economies** apply this clinically

### Shaping and Extinction

- **Shaping**: reinforce **successive approximations** of a target behavior — how complex behaviors that would never occur spontaneously get built
- Operant **extinction**: consequence stops → behavior fades, often after a brief **extinction burst** (the vending machine gets hit harder before being abandoned)

### Schedules of Reinforcement (know the response signatures)

| Schedule | Rule | Signature |
|----------|------|-----------|
| **Fixed ratio (FR)** | Every Nth response | High rate, brief pause after each reinforcement |
| **Variable ratio (VR)** | Unpredictable count | **Highest, steadiest rate; most extinction-resistant** (gambling) |
| **Fixed interval (FI)** | First response after a set time | **Scallop**: responding accelerates as the deadline nears (checking as an exam approaches) |
| **Variable interval (VI)** | First response after an unpredictable time | Slow, very steady (checking a phone for messages) |

- Continuous reinforcement → fastest **acquisition**; partial (intermittent) reinforcement → slowest **extinction** (the partial reinforcement extinction effect)

### Learning Without Obvious Reinforcement

- **Latent learning** (Tolman): unrewarded rats still built **cognitive maps** of a maze — performance jumped as soon as reward appeared, proving learning had occurred silently. Learning ≠ performance.
- **Observational learning** (Bandura's Bobo doll): watching a model — attention → retention → reproduction → motivation; **vicarious reinforcement/punishment** modulates imitation; mirror neurons proposed as a substrate
- **Instinctive drift** (the Brelands): trained behavior degrades toward species-typical fixed patterns (raccoons "washing" tokens instead of depositing them) — biology constrains operant learning just as preparedness constrains classical`
    },
    {
      id: 'lmem2-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading an Operant Passage's Graph and Design

**Passage.** Researchers train rats to lever-press. Group A is reinforced for every press; Group B on a variable-ratio 10 schedule; Group C receives food at unpredictable times regardless of pressing. After training, all food delivery stops. A cumulative-response graph shows Group A responding fastest during early training but quitting quickly in extinction; Group B pressing at the highest sustained rate and persisting longest after food stops; Group C pressing at chance levels throughout.

**Step 1 — map groups to concepts.** A = continuous reinforcement (fast acquisition, fast extinction). B = VR (highest steady rate; the partial reinforcement extinction effect explains its persistence — the animal cannot easily detect that the contingency ended). C = noncontingent delivery: food is not a consequence of pressing, so no operant learning of pressing is expected (C is the control demonstrating that contingency, not mere food, drives the behavior).

**Step 2 — anticipate the "superstition" distractor.** Noncontingent reinforcement can produce idiosyncratic repeated behaviors (accidentally reinforced actions), but it cannot sustain the specific trained response at high rates — do not confuse the control group with a reinforcement schedule.

**Step 3 — the transfer item.** "A casino's slot machine and a factory's per-piece pay differ how?" Slot machine = VR (count unpredictable → steady rapid play, extinction-resistant); piecework = FR (predictable count → high rate with post-reinforcement pauses). Both are ratio schedules — the difference is variability, and variability is what buys persistence.

**Step 4 — spot the classical/operant boundary.** If the passage adds that rats began salivating when the food hopper clicked, that response is classical (click = CS predicting food), running in parallel with the operant lever-pressing. Real preparations almost always contain both — assign each response to its own paradigm.`
    },
    {
      id: 'lmem2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Operant Conditioning & Schedules** 🎯`,
      exercise: {
        questions: [
          {
            question: `A driver starts buckling the seatbelt immediately upon entering the car because doing so silences an unpleasant chime. Buckling has increased because it:`,
            options: [`Is positively reinforced by the chime`, `Is positively punished`, `Is negatively punished by losing the chime`, `Removes an aversive stimulus — negative reinforcement`],
            correctAnswer: 3,
            explanation: `The behavior INCREASED, so the consequence is reinforcement; the mechanism is removal of an aversive stimulus (the chime), making it negative reinforcement — specifically escape learning that typically evolves into avoidance (buckling before the chime begins). Punishment is ruled out because the behavior strengthened.`
          },
          {
            question: `Slot-machine players continue gambling at high, steady rates through long losing streaks. The schedule responsible and the reason for its persistence are:`,
            options: [`Variable ratio — payoffs depend on an unpredictable number of responses, producing the highest response rates and the greatest resistance to extinction`, `Fixed interval — payoffs come at set times, producing scalloped responding`, `Continuous reinforcement — every response pays off`, `Variable interval — payoffs depend on unpredictable elapsed time, producing slow steady responding`],
            correctAnswer: 0,
            explanation: `Slot machines pay after an unpredictable NUMBER of plays — a variable-ratio schedule. Because reinforcement is response-count-based, faster play pays sooner, driving high rates; because the count is unpredictable, a losing streak is indistinguishable from normal variability, so extinction is extremely slow. VI schedules are time-based and produce slower responding.`
          },
          {
            question: `A cumulative-response record shows an animal nearly stopping after each reinforcement, then accelerating steadily as the next reinforcement becomes available, in a repeating scallop. This pattern identifies which schedule?`,
            options: [`Variable ratio`, `Continuous reinforcement`, `Fixed interval`, `Variable interval`],
            correctAnswer: 2,
            explanation: `The scallop — pause after reinforcement, then accelerating response as the fixed time window closes — is the fixed-interval signature, because early responses can never pay off and the payoff moment is predictable. Variable schedules produce steady rates precisely because the animal cannot time the next opportunity.`
          },
          {
            question: `Rats allowed to explore a maze for ten days without reward show no improvement, but the day food is introduced at the goal box, their performance immediately matches rats rewarded all along. Tolman argued this shows:`,
            options: [`Shaping by successive approximations`, `Latent learning — a cognitive map was acquired without reinforcement, and reinforcement affected performance rather than learning`, `Instinctive drift toward foraging behavior`, `The partial reinforcement extinction effect`],
            correctAnswer: 1,
            explanation: `The sudden, full-sized jump in performance proves the spatial knowledge existed BEFORE reward — learning had occurred latently, and reward merely motivated its expression. This dissociation of learning from performance was a landmark problem for strict reinforcement theory. No approximations were differentially reinforced, and no extinction phase is described.`
          },
          {
            question: `Trained raccoons initially deposit coins in a bank for food but increasingly rub the coins together and dip them, as if washing food, until the trick collapses. This deterioration is best described as:`,
            options: [`Operant extinction from withdrawn reinforcement`, `Stimulus generalization`, `Vicarious punishment`, `Instinctive drift — species-typical fixed action patterns intruding on and overriding reinforced behavior`],
            correctAnswer: 3,
            explanation: `Reinforcement continued, yet behavior migrated toward the raccoon's innate food-washing pattern — the Brelands' instinctive drift, the classic demonstration that biological predispositions constrain operant training. Extinction requires reinforcement to stop, and no model or observer is involved.`
          }
        ]
      }
    },
    {
      id: 'lmem2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- First fork: elicited response linking stimuli = classical; emitted behavior shaped by consequences = operant
- The 2x2 is definitional: positive/negative = add/remove; reinforcement/punishment = behavior up/down; escape and avoidance are both negative reinforcement
- Shaping builds novel behavior via successive approximations; extinction often begins with a burst
- Schedule signatures: VR = highest rate, most extinction-resistant; FI = scallop; VI = slow and steady; continuous = fast acquisition but fast extinction (partial reinforcement extinction effect)
- Learning without direct reinforcement is real: latent learning (cognitive maps; learning vs performance), observational learning (Bandura; vicarious consequences), and instinctive drift shows biology constrains it all`
    }
  ]
};
