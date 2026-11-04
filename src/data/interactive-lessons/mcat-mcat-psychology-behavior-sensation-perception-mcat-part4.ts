export const mcatPsychSensPercPart4Data = {
  topicSlug: 'mcat-psychology-behavior-sensation-perception-mcat',
  sections: [
    {
      id: 'sp4-intro',
      type: 'text' as const,
      content: `# Sensation & Perception — Deep Dive

**Part 4 of 4 — MCAT Integration: Top-Down Perception, Streams & Reading Psychophysics Passages**

### Bottom-Up Meets Top-Down: The Full Circuit

Parts 1–3 built the pipeline: stimulus → receptor transduction → thalamic relay (except smell) → primary cortex → association cortex. Part 4 is about how the MCAT tests the *interaction* between that data-driven stream and the brain's expectations:

- **Perceptual set**: expectations prime one interpretation of an ambiguous input (the same figure reads as "13" in a number series and "B" in a letter series)
- **Context effects**: identical gray patches look different in different surrounds — the brain reports its *inference* about the object, not the raw receptor output (this is lightness constancy doing its job)
- **Priming and motivation** act on interpretation and on the *response criterion* — recall from Part 1 that expectations move β, not $d'$

### The Two Cortical Visual Streams

| Stream | Path | Specialty | Lesion signature |
|--------|------|-----------|------------------|
| **Ventral ("what")** | Occipital → temporal | Object identity, faces, color | Visual agnosia; prosopagnosia (fusiform damage) |
| **Dorsal ("where/how")** | Occipital → parietal | Location, motion, visually guided action | Reaching/motion deficits despite intact recognition |

A patient who can describe an object but cannot reach for it accurately (or vice versa) is a stream-dissociation item — match the deficit to the pathway, and remember the magnocellular input (motion, Part 2) feeds mainly dorsal while parvocellular (detail, color) feeds mainly ventral.

### How Psychophysics Passages Present Data

1. **Detection tables** (hits/false alarms): always compute *both* rates. Hit rate alone confounds sensitivity with criterion.
2. **Threshold-vs-intensity plots**: a JND that grows linearly with baseline intensity is Weber's Law, $\\Delta I / I = k$; a *constant* JND violates it.
3. **Adaptation paradigms**: prolonged exposure → reduced response → aftereffect in the *opposite* direction (motion aftereffect, color afterimages). Aftereffects are the standard evidence that a dedicated, fatigable channel exists for that feature.
4. **Habituation designs in infants**: looking time falls with repetition, then *recovers* to a stimulus the infant treats as novel — perception researchers use recovery as evidence the infant discriminates the two stimuli.

### The Classic Discrimination Traps (final pass)

- **Sensory adaptation** (receptor-level, unlearned) vs. **habituation** (central, learned, shows dishabituation)
- **Sensitivity ($d'$)** vs. **criterion (β)**: know which interventions touch which
- **Trichromatic** (cone receptor level) vs. **opponent-process** (ganglion/LGN level; explains afterimages) — both are correct, at different stages
- **Place coding** (basilar-membrane location, high frequencies) vs. **frequency/temporal coding** (firing rate matches the tone, low frequencies; volley principle in between)
- **Weber's Law** is about *proportional* change; never answer with a constant absolute increment`
    },
    {
      id: 'sp4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Expectation-and-Detection Passage, Fully Read

**Problem 1.** Radiology trainees read chest images, half with a nodule. Block 1 is told prevalence is 10%; Block 2 (same true prevalence) is described as from a "high-risk clinic." Hits / false alarms: Block 1 62% / 8%; Block 2 84% / 24%. $d'$ is equal.

- **(a)** What does the study manipulate, and is that a bottom-up or a top-down variable?
- **(b)** How do the hit and false-alarm rates change from Block 1 to Block 2?
- **(c)** Which SDT parameter changed, and in which direction?
- **(d)** Could an answer claiming sharper perception or a lower absolute threshold be correct?

**(a) The manipulation.** The images are matched; only the DESCRIBED prevalence changes. That manipulates expectation, a top-down variable, so nothing about receptors or acuity can differ between blocks.

**(b) Read both rates.** Hits rise from 62% to 84%, and false alarms ALSO rise, from 8% to 24%.

**(c) A liberal criterion shift.** Hits and false alarms rising together while $d'$ stays flat is a liberal criterion shift. The trainees did not become better discriminators; they became more willing to say "nodule."

**(d) Wrong on the numbers.** No. Improved sensitivity, a lowered absolute threshold or sharper perception would raise hits without the matching rise in false alarms, and $d'$ would grow.

**Problem 2.** An extension item on the same passage asks: "Which change would most likely increase $d'$ rather than shift the criterion?"

- **(a)** Which kinds of intervention move only the criterion?
- **(b)** Which kinds of intervention can raise $d'$?
- **(c)** Would paying trainees a bonus for every nodule found raise $d'$?

**(a) Criterion movers.** Instructions, payoffs and prevalence beliefs change only the willingness to say "yes."

**(b) Sensitivity movers.** Better image contrast, longer viewing time and training that improves discrimination separate signal from noise, raising $d'$.

**(c) Apply the mapping.** No. A bonus is a payoff: it shifts the criterion, raising hits and false alarms together. Matching each intervention to the SDT parameter it touches is the single most reused P/S data skill.

**Problem 3.** A final experiment tracks the trainees' eyes. They fixate the nodule region equally long in both blocks, yet in Block 1 they report "no nodule" more often, even after fixating it.

- **(a)** Did the nodule information reach the trainees' eyes in both blocks?
- **(b)** At what stage of processing did the two blocks differ?
- **(c)** Which distinction from Part 1 does this dissociation measure?

**(a) Equal input.** Yes. Equal fixation means the same visual information reached the eyes in both blocks.

**(b) Downstream of sensation.** With equal input, the different reports arose at the decision and interpretation stage, not at the receptors.

**(c) Sensation vs. perception.** The passage localizes the effect downstream of sensation: Part 1's sensation-versus-perception distinction, now measured.`
    },
    {
      id: 'sp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integration: Streams, SDT & Psychophysics Data** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a tone-detection study, participants switch to headphones that make a faint tone stand out more clearly from the background noise. Their hit rate rises from 60% to 75%, and their false-alarm rate falls from 20% to 10%. The change most directly altered the participants':`,
            options: [`Response criterion, made more liberal by the clearer tone`, `Rate of habituation, slowed because the tone sounded novel`, `Perceptual sensitivity ($d'$), as hits rose while false alarms fell`, `Absolute threshold, raised so that faint tones went unheard`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Hits rising while false alarms FALL is the signature of greater sensitivity: the clearer tone lets listeners separate signal from noise, so $d'$ grows (from about 1.1 to about 2.0). A more liberal criterion would raise hits and false alarms together, so the falling false-alarm rate rules it out. A raised absolute threshold would lower hits, not raise them. Habituation reduces responding to a repeated stimulus; it cannot raise hits and cut false alarms at once.`
          },
          {
            question: `After a stroke, a patient names and describes objects accurately but consistently misreaches for them and cannot judge their motion. The lesion most likely lies in the:`,
            options: [`Dorsal stream, from occipital to parietal cortex`, `Ventral stream, from occipital to temporal cortex`, `Optic radiations, from thalamus to occipital cortex`, `Arcuate fasciculus, from temporal to frontal cortex`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Intact identification with impaired localization, reaching, and motion judgment dissociates the spared ventral "what" pathway from a damaged dorsal "where/how" pathway (occipital to parietal). A ventral lesion would produce the reverse — agnosia with preserved spatial guidance. An optic-radiation lesion produces visual-field cuts, and arcuate fasciculus damage causes conduction aphasia — neither produces this dissociation.`
          },
          {
            question: `A researcher wants to show that reduced responding to a repeated odor in adults reflects receptor-level sensory adaptation rather than a learned central process. The MOST diagnostic finding would be that responsiveness:`,
            options: [`Recovers when an unexpected sound is presented, even while the odor continues`, `Depends on how personally meaningful the odor is to the participant`, `Declines faster when participants are paid to ignore the odor`, `Returns only after the odor is removed, not after a novel stimulus`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Dishabituation — recovery after an unrelated novel stimulus — is the marker of central, learned habituation; its ABSENCE, with recovery governed only by stimulus removal and receptor kinetics, points to peripheral adaptation. Meaningfulness and incentive effects would indicate top-down, central involvement, the opposite of the claim.`
          },
          {
            question: `Cochlear implants restore hearing by placing an electrode array along the cochlea and stimulating different positions to convey different pitches. This design depends most directly on:`,
            options: [`Frequency theory, since electrodes fire at the tone's exact rate for all pitches`, `Place theory, since each cochlear position codes a different frequency`, `Gate control theory, since spinal gates filter auditory input`, `Opponent-process theory, since paired channels code pitch`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Mapping pitch onto electrode POSITION is place coding: each cochlear location (base = high frequency, apex = low) normally responds to its characteristic frequency, so stimulating that place evokes that pitch. Pure rate/frequency coding cannot cover high pitches (neurons cannot fire tens of thousands of times per second), and gate control and opponent processing belong to pain and color vision respectively.`
          },
          {
            question: `Two identical gray squares are judged very different in lightness when one is shown inside a depicted shadow. This illusion is best interpreted as evidence that:`,
            options: [`Retinal photoreceptors respond differently to the identical light`, `The participants have low visual acuity for gray shades`, `Perception infers surface lightness after discounting illumination`, `The absolute threshold for gray differs across the visual field`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The two patches send identical signals from the retina; the difference is constructed by the brain's lightness-constancy computation, which discounts the inferred shadow to estimate surface reflectance. That is the definitional divide between sensation (identical here) and perception (different here) — and the reason constancies are classified as top-down.`
          }
        ]
      }
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Expectations move the criterion.** Perceptual set, context and prevalence beliefs shift interpretation and the criterion, not $d'$.
- **Two visual streams.** Ventral (occipital → temporal) codes "what"; dorsal (occipital → parietal) codes where, motion and action.
- **Aftereffects and looking-time recovery.** Aftereffects show a dedicated fatigable channel; recovery of infant looking time shows discrimination.
- **Classify manipulations first.** Label each manipulation bottom-up or top-down before reading the answer choices.

**Common traps**

- **Skipping the dishabituation test.** Recovery after a novel stimulus marks learned, central habituation, not receptor adaptation.
- **Choosing one color theory.** Trichromatic theory holds at the cones; opponent processing comes later and explains afterimages.
- **One pitch code for all frequencies.** Place theory codes high pitches; firing-rate coding handles low ones, with volleys in between.
- **Crediting payoffs with better perception.** Instructions, payoffs and prevalence move the criterion; contrast, viewing time and training raise $d'$.`
    }
  ]
};
