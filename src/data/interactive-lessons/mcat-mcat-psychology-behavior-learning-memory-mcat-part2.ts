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
      content: `### Worked Example — Reading an Operant Passage's Design

**Problem 1.** Rats lever-press. Group A gets food for every press, Group B on variable-ratio 10, Group C at random times regardless of pressing. Then food stops. A learns fastest but quits first; B presses fastest and persists longest; C stays at baseline.

- **(a)** Why does Group A learn fastest yet quit soonest?
- **(b)** Why does Group B keep pressing longest after food stops?
- **(c)** What role does Group C play in the design?
- **(d)** Could Group C's free food sustain lever-pressing through "superstitious" learning?

**(a) Continuous reinforcement.** Every press pays, so acquisition is fastest, and the moment food stops the change is obvious, so extinction is fast too.

**(b) Partial reinforcement extinction effect.** On a VR schedule long unrewarded runs are normal, so the animal cannot easily detect that the contingency ended. VR also produces the highest steady rate.

**(c) The contingency control.** Food is not a consequence of pressing, so no operant learning of pressing is expected. Group C shows that contingency, not mere food, drives the behavior.

**(d) The superstition distractor.** No. Noncontingent food can produce idiosyncratic repeated behaviors (accidentally reinforced actions), but it cannot sustain the specific trained response at high rates. Do not mistake the control group for a reinforcement schedule.

**Problem 2.** During the same training, the food hopper clicks just before each pellet drops. The rats begin salivating at the click while they keep lever-pressing.

- **(a)** Which paradigm explains the salivation, and what role does the click play?
- **(b)** Which paradigm explains the lever-pressing?
- **(c)** How should you handle a passage question that measures both responses?

**(a) Classical.** Salivation is an elicited reflex, and the click is a CS that predicts the food (US).

**(b) Operant.** Lever-pressing is an emitted behavior strengthened by the food that follows it.

**(c) One paradigm per response.** The two kinds of learning run in parallel, and real preparations almost always contain both. Assign each dependent measure to its own paradigm.

**Problem 3.** A salesperson earns a commission each time she closes a deal, which happens after an unpredictable number of calls. A factory pays its workers by the piece, a fixed amount for each set number of items finished.

- **(a)** Which schedule does each arrangement use?
- **(b)** How do the two response patterns differ?
- **(c)** If payoffs stopped, which person would keep going longer, and why?

**(a) VR and FR.** The commission is variable ratio (unpredictable count of calls); piecework is fixed ratio (predictable count). Both are ratio schedules.

**(b) Steady vs. paused.** VR yields steady, rapid calling; FR yields a high rate with a brief pause after each reinforcement.

**(c) The salesperson.** Under VR a run of failed calls looks like normal variability, so calling resists extinction. The difference between the schedules is variability, and variability is what buys persistence.`
    },
    {
      id: 'lmem2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Operant Conditioning & Schedules** 🎯`,
      exercise: {
        questions: [
          {
            question: `A driver starts buckling the seatbelt immediately upon entering the car because doing so silences an unpleasant chime. Buckling has increased because it:`,
            options: [`Is positively reinforced by hearing the chime`, `Is positively punished by the chime's sound`, `Is negatively punished by losing the chime`, `Is negatively reinforced by chime removal`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `The behavior INCREASED, so the consequence is reinforcement; the mechanism is removal of an aversive stimulus (the chime), making it negative reinforcement — specifically escape learning that typically evolves into avoidance (buckling before the chime begins). Punishment is ruled out because the behavior strengthened.`
          },
          {
            question: `Slot-machine players continue gambling at high, steady rates through long losing streaks. The schedule responsible and the reason for its persistence are:`,
            options: [`Variable ratio, which is most resistant to extinction`, `Fixed interval, which produces scalloped responding`, `Continuous reinforcement, since every play pays off`, `Variable interval, which produces slow steady responding`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Slot machines pay after an unpredictable NUMBER of plays — a variable-ratio schedule. Because reinforcement is response-count-based, faster play pays sooner, driving high rates; because the count is unpredictable, a losing streak is indistinguishable from normal variability, so extinction is extremely slow. VI schedules are time-based and produce slower responding, fixed-interval schedules produce scallops rather than steady play, and continuous reinforcement extinguishes fastest of all — nor does every play pay off.`
          },
          {
            question: `A cumulative-response record shows an animal nearly stopping after each reinforcement, then accelerating steadily as the next reinforcement becomes available, in a repeating scallop. This pattern identifies which schedule?`,
            options: [`Variable ratio`, `Continuous reinforcement`, `Fixed interval`, `Variable interval`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The scallop — pause after reinforcement, then accelerating response as the fixed time window closes — is the fixed-interval signature, because early responses can never pay off and the payoff moment is predictable. Variable schedules produce steady rates precisely because the animal cannot time the next opportunity.`
          },
          {
            question: `Rats allowed to explore a maze for ten days without reward show no improvement, but the day food is introduced at the goal box, their performance immediately matches rats rewarded all along. Tolman argued this shows:`,
            options: [`Shaping by successive approximations to the goal`, `Latent learning of a cognitive map`, `Instinctive drift toward foraging behavior`, `The partial reinforcement extinction effect`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The sudden, full-sized jump in performance proves the spatial knowledge existed BEFORE reward — learning had occurred latently, and reward merely motivated its expression. This dissociation of learning from performance was a landmark problem for strict reinforcement theory. No approximations were differentially reinforced, and no extinction phase is described.`
          },
          {
            question: `Trained raccoons initially deposit coins in a bank for food but increasingly rub the coins together and dip them, as if washing food, until the trick collapses. This deterioration is best described as:`,
            options: [`Extinction from withdrawn reinforcement`, `Stimulus generalization to coins`, `Vicarious punishment by other raccoons`, `Instinctive drift toward innate behavior`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Reinforcement continued, yet behavior migrated toward the raccoon's innate food-washing pattern — the Brelands' instinctive drift, the classic demonstration that biological predispositions constrain operant training. Extinction requires reinforcement to stop, and no model or observer is involved.`
          }
        ]
      }
    },
    {
      id: 'lmem2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Classical vs. operant.** Classical links two stimuli to an elicited reflex; operant links an emitted behavior to its consequence.
- **The consequence 2×2.** Positive/negative means a stimulus is added/removed; reinforcement/punishment means behavior rises/falls.
- **Schedule signatures.** VR is highest and steadiest; FR pauses after each reward; FI scallops; VI is slow and steady.
- **Beyond simple reward.** Shaping builds new behavior by approximations; latent and observational learning need no direct reward.

**Common traps**

- **Negative means bad.** "Negative" means removed: silencing an alarm or escaping pain is negative reinforcement, not punishment.
- **Continuous means persistent.** Continuous reinforcement gives the fastest acquisition but the fastest extinction; partial resists it.
- **Learning equals performance.** Latent learners show no gain until reward appears, yet their cognitive map was already built.
- **Extinction as instant fading.** When reinforcement stops, responding often bursts briefly before it fades.`
    }
  ]
};
