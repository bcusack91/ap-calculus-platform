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
- **Sensitivity ($d'$)** vs. **criterion (β)** — payoffs and instructions move only the criterion
- **Trichromatic** (cone receptor level) vs. **opponent-process** (ganglion/LGN level; explains afterimages) — both are correct, at different stages
- **Place coding** (basilar-membrane location, high frequencies) vs. **frequency/temporal coding** (firing rate matches the tone, low frequencies; volley principle in between)
- **Weber's Law** is about *proportional* change; never answer with a constant absolute increment`
    },
    {
      id: 'sp4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Expectation-and-Detection Passage, Fully Read

**Passage.** Radiology trainees view chest images, half containing a subtle nodule. In Block 1, trainees are told nodule prevalence is 10%; in Block 2, a different image set with the same objective prevalence (50% of trials) is described as coming from a "high-risk clinic." Results: Block 1 — 62% hits, 8% false alarms. Block 2 — 84% hits, 31% false alarms. Computed $d'$ does not differ between blocks. A final experiment finds trainees fixate the nodule region equally long in both blocks, but report "no nodule" more often in Block 1 even after fixating it.

**Step 1 — classify the manipulation.** Objective stimuli are matched; only the *described* prevalence changes. This manipulates expectation, a top-down variable — nothing about receptors or acuity can differ between blocks.

**Step 2 — read the SDT signature.** Hits AND false alarms rise together while $d'$ stays flat: a **liberal criterion shift**. The trainees did not become better discriminators; they became more willing to say "nodule." Any answer choice claiming improved sensitivity, lowered absolute threshold, or sharpened perception is wrong on the numbers given.

**Step 3 — use the eye-tracking dissociation.** Equal fixation with different reports shows the information reached the eyes in both blocks; the difference arose at the *decision/interpretation* stage. This is the passage's way of localizing the effect downstream of sensation — exactly the sensation-vs-perception distinction from Part 1, now measured.

**Step 4 — anticipate the extension item.** "Which change would most likely increase $d'$ rather than shift criterion?" Criterion movers: instructions, payoffs, prevalence beliefs. Sensitivity movers: better image contrast, longer viewing time, training that improves discrimination. Match the intervention to the SDT parameter it touches — that mapping is the single most reused P/S data skill.`
    },
    {
      id: 'sp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integration: Streams, SDT & Psychophysics Data** 🎯`,
      exercise: {
        questions: [
          {
            question: `Participants told that "most trials contain a faint tone" report the tone more often than participants told tones are rare, on identical trial sets. Hit and false-alarm rates both rise in the first group, and $d'$ is equal across groups. The instruction manipulated the participants':`,
            options: [`Auditory sensitivity, by amplifying cochlear output`, `Absolute threshold, by lowering the 50% detection point`, `Response criterion — expectation made them more liberal without changing discrimination`, `Rate of sensory adaptation to the tone`],
            correctAnswer: 2,
            explanation: `The joint rise of hits and false alarms with unchanged $d'$ is the fingerprint of a criterion shift. Expectations are a top-down, decision-stage variable; they cannot reach the cochlea, and a true threshold or sensitivity change would raise hits without a matching false-alarm rise.`
          },
          {
            question: `After a stroke, a patient names and describes objects accurately but consistently misreaches for them and cannot judge their motion. The lesion most likely lies in the:`,
            options: [`Dorsal stream projecting from occipital to parietal cortex`, `Ventral stream projecting from occipital to temporal cortex`, `Optic chiasm`, `Primary auditory cortex`],
            correctAnswer: 0,
            explanation: `Intact identification with impaired localization, reaching, and motion judgment dissociates the spared ventral "what" pathway from a damaged dorsal "where/how" pathway (occipital to parietal). A ventral lesion would produce the reverse — agnosia with preserved spatial guidance. A chiasm lesion produces visual-field cuts, not this dissociation.`
          },
          {
            question: `A researcher wants to show that reduced responding to a repeated odor in adults reflects receptor-level sensory adaptation rather than a learned central process. The MOST diagnostic finding would be that responsiveness:`,
            options: [`Recovers when an unexpected sound is presented`, `Depends on how meaningful the odor is to the participant`, `Declines faster when participants are paid to ignore the odor`, `Fails to recover after a novel intervening stimulus, and returns only once the odor itself is removed and receptors reset`],
            correctAnswer: 3,
            explanation: `Dishabituation — recovery after an unrelated novel stimulus — is the marker of central, learned habituation; its ABSENCE, with recovery governed only by stimulus removal and receptor kinetics, points to peripheral adaptation. Meaningfulness and incentive effects would indicate top-down, central involvement, the opposite of the claim.`
          },
          {
            question: `Cochlear implants restore hearing by placing an electrode array along the cochlea and stimulating different positions to convey different pitches. This design depends most directly on:`,
            options: [`Frequency theory, since electrodes fire at the tone's exact rate for all pitches`, `Place theory — basilar-membrane position codes frequency, with the base tuned to high frequencies and the apex to low`, `Gate control theory of the auditory pathway`, `Opponent-process channels in the cochlea`],
            correctAnswer: 1,
            explanation: `Mapping pitch onto electrode POSITION is place coding: each cochlear location (base = high frequency, apex = low) normally responds to its characteristic frequency, so stimulating that place evokes that pitch. Pure rate/frequency coding cannot cover high pitches (neurons cannot fire tens of thousands of times per second), and gate control and opponent processing belong to pain and color vision respectively.`
          },
          {
            question: `Two identical gray squares are judged very different in lightness when one is shown inside a depicted shadow. This illusion is best interpreted as evidence that:`,
            options: [`Retinal photoreceptors respond differently to identical light`, `The participants have low visual acuity`, `Perception reports an inference about the object's surface after discounting illumination — a constancy computed top-down, not the raw receptor signal`, `The absolute threshold for gray differs across the visual field`],
            correctAnswer: 2,
            explanation: `The two patches send identical signals from the retina; the difference is constructed by the brain's lightness-constancy computation, which discounts the inferred shadow to estimate surface reflectance. That is the definitional divide between sensation (identical here) and perception (different here) — and the reason constancies are classified as top-down.`
          }
        ]
      }
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Perceptual set, context, and prevalence beliefs act top-down: they shift interpretation and response criterion, never $d'$ — hits and false alarms rising together is a criterion shift
- Ventral stream (occipital to temporal) = identity/"what" (agnosias); dorsal stream (occipital to parietal) = location, motion, action/"where-how"; magno feeds dorsal, parvo feeds ventral
- Data-reading toolkit: always pair hit rate with false-alarm rate; JND proportional to baseline = Weber's Law; aftereffects = fatigable dedicated channel; infant looking-time recovery = discrimination evidence
- Final trap list: adaptation vs habituation (dishabituation decides), trichromatic vs opponent (receptor vs ganglion stage), place vs frequency coding (high vs low pitch), sensitivity vs criterion (what the intervention touches)
- Passage habit: classify every manipulation as bottom-up (stimulus, receptors) or top-down (expectation, payoff, context) BEFORE reading the answer choices`
    }
  ]
};
