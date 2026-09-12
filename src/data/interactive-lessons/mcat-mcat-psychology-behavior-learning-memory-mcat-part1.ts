export const mcatPsychLearnMemPart1Data = {
  topicSlug: 'mcat-psychology-behavior-learning-memory-mcat',
  sections: [
    {
      id: 'lmem1-intro',
      type: 'text' as const,
      content: `# Learning & Memory

**Part 1 of 4 — Classical Conditioning: Pavlovian Learning & Its Boundaries**

### The Core Vocabulary (get the labels mechanical)

Classical (Pavlovian, respondent) conditioning pairs a neutral stimulus with one that already triggers a reflexive response:

| Term | Definition | Pavlov's lab |
|------|-----------|--------------|
| **Unconditioned stimulus (US)** | Triggers a response *without* learning | Meat powder |
| **Unconditioned response (UR)** | The unlearned, reflexive response to the US | Salivation to food |
| **Conditioned stimulus (CS)** | Formerly neutral; triggers the response *after* pairing | Bell |
| **Conditioned response (CR)** | Learned response to the CS alone | Salivation to bell |

**Labeling algorithm:** find the stimulus that would work on day one with no training — that is the US, and its response is the UR. Whatever *predicts* the US and comes to evoke the response on its own is the CS. The CR and UR are usually similar, but the CR is often weaker.

### Timing & Contingency

- **Forward (delayed) conditioning** — CS starts, US arrives while CS is still on: **strongest** learning
- **Trace conditioning** — CS ends, gap, then US: works, weaker
- **Simultaneous** and **backward** (US before CS): weak to negligible — the CS must *predict* the US
- **Contingency beats contiguity** (Rescorla): a CS paired with the US but no more informative than background context supports little conditioning. The animal learns *predictive information*, not mere co-occurrence.

### The Lifecycle of a CR

- **Acquisition**: repeated CS–US pairings build the CR
- **Extinction**: CS repeatedly presented *alone* → CR fades. Extinction is **new inhibitory learning**, not erasure —
- **Spontaneous recovery**: after a rest period, the extinguished CR partially returns, proving the original association survived
- **Generalization**: stimuli similar to the CS evoke the CR (Little Albert feared the rat, then rabbits and fur — Watson & Rayner's ethically infamous demonstration)
- **Discrimination**: with differential training (CS+ paired, CS− unpaired), responding narrows to the true predictor
- **Higher-order conditioning**: an established CS acts as a "US" to condition a second stimulus (light → bell → salivation); the second-order CR is weaker

### Biological Boundaries (the MCAT's favorite exceptions)

- **Taste aversion (Garcia effect)**: nausea conditions to a *taste* in **one trial** across a delay of **hours** — violating the usual need for repeated, close pairings — yet nausea will not readily condition to lights or sounds
- **Preparedness**: organisms are biologically primed to associate certain stimulus classes (taste→illness, in rats; visual cues→shock, in birds) — learning is constrained by evolution, not infinitely flexible
- Clinically: chemotherapy patients develop anticipatory nausea to clinic smells and foods eaten before sessions — a direct Garcia-effect application`
    },
    {
      id: 'lmem1-worked',
      type: 'text' as const,
      content: `### Worked Example — Labeling and Predicting in a Clinical Vignette

**Vignette.** A patient receiving chemotherapy eats a distinctive mint candy in the waiting room before each infusion. The drug reliably causes nausea an hour later. After four sessions, tasting the mint anywhere makes her queasy. Months after treatment ends, mints no longer bother her — until, a year later, one unexpected mint at a party produces a wave of mild nausea.

**Step 1 — run the labeling algorithm.** What causes nausea with no learning? The chemotherapy drug → **US**; drug-induced nausea → **UR**. The mint predicts the drug → **CS**; queasiness to mint alone → **CR**. The waiting room itself may become a weaker second CS (context conditioning).

**Step 2 — explain the unusual efficiency.** Conditioning succeeded in few trials across a one-hour delay, and attached to a *taste* rather than to the (equally present) waiting-room television. That is the Garcia pattern: prepared taste–illness association defeating the ordinary contiguity rules.

**Step 3 — name the late events.** Mints losing their effect after treatment = **extinction** (mint experienced repeatedly without the drug). The party episode = **spontaneous recovery** after a rest interval — evidence extinction suppressed, rather than deleted, the association.

**Step 4 — anticipate the study question.** A passage might ask how to *prevent* anticipatory nausea. The literature answer: give a novel, expendable "scapegoat" flavor before infusions so the aversion attaches to it instead of to the patient's regular diet — an intervention that only makes sense once you see conditioning as prediction-learning.`
    },
    {
      id: 'lmem1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Classical Conditioning Foundations** 🎯`,
      exercise: {
        questions: [
          {
            question: `A puff of air to the eye makes a rabbit blink. A tone is sounded just before each puff; soon the tone alone elicits blinking. In this procedure, the tone is the:`,
            options: [`Unconditioned stimulus`, `Conditioned stimulus`, `Unconditioned response`, `Conditioned response`],
            correctAnswer: 1,
            explanation: `The air puff needs no training to cause blinking (US; blink to puff = UR). The tone was neutral and acquired its power only through pairing — the defining feature of a conditioned stimulus. Blinking to the tone alone is the CR.`
          },
          {
            question: `A dog's conditioned salivation to a bell is fully extinguished on Monday. On Friday, with no further training, the bell again produces some salivation. This return of responding is best explained as:`,
            options: [`Higher-order conditioning`, `Stimulus generalization from similar sounds`, `Relearning through unnoticed pairings`, `Spontaneous recovery of the response`],
            correctAnswer: 3,
            explanation: `A rest interval followed by partial return of an extinguished CR is spontaneous recovery — the standard evidence that extinction is new inhibitory learning layered over an intact CS-US association. No new pairings occurred, no new stimulus resembles the CS, and no second-order stimulus is involved.`
          },
          {
            question: `Rats given a novel-tasting solution and made ill six hours later avoid that taste after a single trial, yet a light and click paired with the same illness produce no avoidance. This finding challenged early learning theory because it shows that:`,
            options: [`Associative learning is constrained by biological preparedness`, `Contiguity of a few seconds is always required to condition`, `Rats cannot form visual or auditory associations of any kind`, `Illness is not an effective unconditioned stimulus`],
            correctAnswer: 0,
            explanation: `The Garcia taste-aversion result breaks the classical rules twice — one trial, hours-long delay — but only for the evolutionarily sensible taste-illness pairing. Rats readily learn audiovisual signals for shock, so they can use those modalities; and illness clearly worked as a US for taste. The lesson is preparedness, not modality failure.`
          },
          {
            question: `A child bitten by one dog initially fears all dogs, but after many safe encounters with other dogs fears only large dark-coated dogs resembling the one that bit him. The narrowing of the fear response reflects:`,
            options: [`Extinction of the original conditioned fear response`, `Spontaneous recovery`, `Stimulus discrimination after generalization`, `Stimulus generalization across all dogs`],
            correctAnswer: 2,
            explanation: `The initial spread of fear to all dogs is generalization. Safe (unpaired) experiences with dissimilar dogs act as CS-minus trials, and responding narrows to stimuli most like the true CS — discrimination. The original fear is intact for similar dogs, so this is not extinction of the CR itself; generalization names the earlier SPREAD of fear, not its narrowing, and no rest-then-return pattern suggests spontaneous recovery.`
          },
          {
            question: `After a tone reliably elicits conditioned salivation, a light is repeatedly presented just before the tone — with food never delivered during this phase. The dog begins salivating to the light alone, though more weakly than to the tone. This demonstrates:`,
            options: [`Simultaneous conditioning`, `Higher-order conditioning`, `Sensory adaptation to the light`, `Negative reinforcement`],
            correctAnswer: 1,
            explanation: `No primary US (food) was present, yet the light acquired the response by predicting the already-conditioned tone — the definition of higher-order (second-order) conditioning, characteristically weaker than first-order. Simultaneous conditioning would require the light and tone to overlap in time rather than the light preceding the tone, negative reinforcement belongs to operant conditioning, and adaptation would reduce, not create, responding.`
          }
        ]
      }
    },
    {
      id: 'lmem1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Label mechanically: the stimulus that works untrained is the US; its reflex is the UR; the learned predictor is the CS; its acquired response is the CR
- Forward/delayed pairing conditions best; prediction (contingency) matters more than mere co-occurrence
- Extinction is new inhibitory learning — spontaneous recovery after rest proves the original association survives
- Generalization spreads the CR to similar stimuli; discrimination training (CS+ vs CS-) narrows it; higher-order conditioning chains a second, weaker CS
- Garcia taste aversion: one trial, hours-long delay, taste-specific — biological preparedness constrains what can be learned, and it explains anticipatory nausea in chemotherapy`
    }
  ]
};
