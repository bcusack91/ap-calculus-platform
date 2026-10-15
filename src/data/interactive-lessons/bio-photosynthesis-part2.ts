export const bioPhotosynthesisPart2Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps2-intro',
      type: 'text' as const,
      content: `
## Photosystems — How Light Becomes Chemical Energy

**Part 2 of 7**

The two photosystems, **PSII** and **PSI**, are clusters of chlorophyll and proteins embedded in the thylakoid membranes.  They are connected by an **electron transport chain**.  Working in series, they turn the energy of absorbed light into two forms the Calvin cycle can use: **ATP** and **NADPH**.

This part looks at what each photosystem does, why the chloroplast needs both, and how to predict what happens when part of the system is disrupted.
      `
    },
    {
      id: 'ps2-psii',
      type: 'text' as const,
      content: `
### Photosystem II — Water Splitting

Despite its name, PSII acts **first** (it was named "II" because it was discovered second).

1. Chlorophyll in PSII absorbs light, and the energy boosts electrons to a higher energy level.
2. The excited electrons leave PSII and enter the electron transport chain.
3. PSII must replace the lost electrons.  It takes them from **water**, which splits:

$$2\\,\\text{H}_2\\text{O} \\longrightarrow 4\\,\\text{H}^+ + 4\\,e^- + \\text{O}_2$$

4. The O$_2$ is released as a byproduct, and the H$^+$ stays inside the thylakoid, adding to the proton gradient.

> **Key Fact:** The O$_2$ we breathe is a byproduct of PSII splitting water — not of CO$_2$ being broken apart.
      `
    },
    {
      id: 'ps2-psi',
      type: 'text' as const,
      content: `
### The Electron Transport Chain and Photosystem I

**Between the photosystems:** Electrons leaving PSII pass through a series of carriers in the thylakoid membrane.  Each transfer is a redox reaction that releases a little energy, and that energy moves **H$^+$ from the stroma into the thylakoid space**.  The result is a proton gradient: high H$^+$ inside the thylakoid, low H$^+$ in the stroma.

**At PSI:** By the time electrons reach PSI they have lost much of their energy.  Chlorophyll in PSI absorbs more light and boosts them to a high energy level again.

**Making NADPH:** The re-energized electrons are passed to **NADP$^+$**, reducing it to **NADPH** on the stroma side of the membrane, right where the Calvin cycle needs it.

**Making ATP:** H$^+$ flows back from the thylakoid space into the stroma through **ATP synthase**, which makes ATP from ADP and P$_i$ (photophosphorylation).

| Product | Where it comes from |
|---------|---------------------|
| O$_2$ | Water split at PSII |
| ATP | ATP synthase, powered by the H$^+$ gradient |
| NADPH | Electrons from PSI reducing NADP$^+$ |
      `
    },
    {
      id: 'ps2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Photosystems
      `,
      exercise: {
        questions: [
          {
            question: 'Why must water be split during the light reactions?',
            options: [
              'To supply the oxygen atoms that are built into glucose',
              'To replace electrons that PSII has passed to the transport chain',
              'To provide the CO2 that the Calvin cycle needs',
              'To cool the leaf so that its enzymes do not denature'
            ],
            correctAnswer: 1,
            explanation: 'When light excites electrons in PSII, they leave and enter the electron transport chain. Splitting water replaces them, releasing O2 and H+. The carbon and oxygen in glucose come from CO2, not from water splitting.'
          },
          {
            question: 'The electrons used to reduce NADP+ to NADPH originally came from:',
            options: [
              'CO2 fixed in the stroma',
              'ATP from ATP synthase',
              'Water split at PSII',
              'Glucose from the Calvin cycle'
            ],
            correctAnswer: 2,
            explanation: 'Electrons originate from water split at PSII, travel through the electron transport chain, are re-energized at PSI, and finally reduce NADP+ to NADPH.'
          },
          {
            question: 'Why do electrons need a second boost of light energy at PSI?',
            options: [
              'The chain drained them, and PSI must re-excite them to reduce NADP+',
              'PSI cannot accept electrons unless they arrive straight from water',
              'The second boost is the step that splits water and releases O2',
              'Light absorbed at PSI turns ADP into ATP directly, without a gradient'
            ],
            correctAnswer: 0,
            explanation: 'As electrons move along the electron transport chain, the energy they release is used to move H+ into the thylakoid. They arrive at PSI with less energy, and a second absorption of light boosts them high enough to reduce NADP+ to NADPH. Water splitting happens at PSII, and ATP is made by ATP synthase.'
          }
        ]
      }
    },
    {
      id: 'ps2-disruptions',
      type: 'text' as const,
      content: `
### Disruptions and Evolution

**Predicting disruptions.**  Because the light reactions are a chain, a block at any point affects everything downstream:

| Disruption | Immediate effect | Downstream effect |
|------------|------------------|-------------------|
| Herbicide blocks electron flow between PSII and PSI | No electrons reach PSI | NADPH and ATP production fall; with no electron flow, water splitting and O$_2$ release stop too |
| Chemical makes the thylakoid membrane leaky to H$^+$ | Proton gradient collapses | ATP synthesis stops, though electrons can still flow and NADPH can still form |
| Plant kept in the dark | No electrons are excited | No ATP or NADPH, so the Calvin cycle soon stops |

**Photosynthesis evolved in prokaryotes.**  The AP framework connects photosynthesis to evolution:
- Photosynthesis **first evolved in prokaryotic organisms**.
- Scientific evidence supports the claim that **prokaryotic (cyanobacterial) photosynthesis produced Earth's oxygenated atmosphere**.
- **Prokaryotic photosynthetic pathways were the foundation of eukaryotic photosynthesis**: chloroplasts descend from engulfed cyanobacteria (endosymbiosis), which is why they have a double membrane and their own DNA.
      `
    },
    {
      id: 'ps2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Disruptions and Evolution
      `,
      exercise: {
        questions: [
          {
            question: 'A herbicide blocks electron flow between PSII and PSI in illuminated chloroplasts. What is the most likely result?',
            options: [
              'O2 release continues, but NADPH production stops',
              'O2 release and NADPH production both stop',
              'The Calvin cycle speeds up to use stored NADPH',
              'ATP production rises because the gradient has nowhere to go'
            ],
            correctAnswer: 1,
            explanation: 'With the chain blocked, electrons cannot leave PSII, so PSII cannot accept new electrons from water and O2 release stops. No electrons reach PSI, so no NADPH is made, and proton pumping by the chain stops, so ATP production falls.'
          },
          {
            question: 'Which observation best supports the claim that prokaryotic photosynthesis produced the oxygen in Earth\'s early atmosphere?',
            options: [
              'Modern plants release more O2 than they take in during the day',
              'Cyanobacteria fossils appear in rocks older than the first rocks showing free O2',
              'Chloroplasts and mitochondria both use ATP synthase',
              'Animals consume O2 during cellular respiration'
            ],
            correctAnswer: 1,
            explanation: 'If photosynthetic prokaryotes existed before oxygen accumulated, they could be its source. The timing in the geological record supports the claim. The other choices describe modern processes and say nothing about the origin of atmospheric O2.'
          }
        ]
      }
    },
    {
      id: 'ps2-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Photosystems
      `,
      exercise: {
        questions: [
          {
            question: 'The photosystem that acts first and splits water (Roman numeral):',
            answer: 'II',
            acceptableAnswers: ['II', 'ii', 'PSII', 'psii', '2', 'photosystem II', 'Photosystem II'],
            placeholder: 'e.g. I'
          },
          {
            question: 'The electron carrier that is reduced at the end of the light reactions (oxidized form):',
            answer: 'NADP+',
            acceptableAnswers: ['NADP+', 'nadp+', 'NADP', 'nadp'],
            placeholder: 'e.g. NAD+'
          },
          {
            question: 'The group of prokaryotes whose photosynthesis is credited with oxygenating Earth\'s atmosphere:',
            answer: 'cyanobacteria',
            acceptableAnswers: ['cyanobacteria', 'Cyanobacteria', 'cyanobacterium', 'blue-green algae'],
            placeholder: 'e.g. archaea'
          }
        ]
      }
    },
    {
      id: 'ps2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Photosystems
      `,
      exercise: {
        questions: [
          {
            question: 'A chemical makes the thylakoid membrane freely permeable to H+. Which product of the light reactions is most directly reduced?',
            options: [
              'O2',
              'ATP',
              'NADPH',
              'Chlorophyll'
            ],
            correctAnswer: 1,
            explanation: 'ATP synthase needs the H+ gradient across the thylakoid membrane. If H+ leaks freely, the gradient collapses and ATP synthesis stops. Electrons can still flow from water to NADP+, so O2 and NADPH can still be produced.'
          },
          {
            question: 'Which of the following correctly traces the path of electrons during the light reactions?',
            options: [
              'H2O -> PSI -> electron transport chain -> PSII -> NADP+',
              'H2O -> PSII -> electron transport chain -> PSI -> NADP+',
              'NADP+ -> PSI -> electron transport chain -> PSII -> H2O',
              'CO2 -> PSII -> electron transport chain -> PSI -> glucose'
            ],
            correctAnswer: 1,
            explanation: 'Electrons come from water split at PSII, pass through the electron transport chain to PSI, are re-energized by light, and finally reduce NADP+ to NADPH.'
          }
        ]
      }
    }
  ]
};
