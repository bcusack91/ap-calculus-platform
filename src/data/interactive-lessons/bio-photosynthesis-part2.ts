export const bioPhotosynthesisPart2Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps2-intro',
      type: 'text' as const,
      content: `
## Photosystems in Detail

**Part 2 of 7**

The two photosystems — PSII and PSI — are sophisticated multi-protein complexes embedded in the thylakoid membrane.  They work in series during **linear electron flow** to produce both ATP and NADPH, or PSI can operate alone in **cyclic electron flow** to produce only ATP.

Understanding the structure and function of each photosystem is essential for explaining how light energy is converted to chemical energy.
      `
    },
    {
      id: 'ps2-psii',
      type: 'text' as const,
      content: `
### Photosystem II (PSII) — Water Splitting

Despite its name, PSII acts **first** in linear electron flow (it was named "II" because it was discovered second).

**Structure:**
- **Antenna complex (LHC II):** ~250 chlorophyll and carotenoid molecules that absorb photons and funnel energy to the reaction center
- **P680 reaction center:** A pair of chlorophyll a molecules with peak absorption at 680 nm
- **Oxygen-evolving complex (OEC):** A manganese-containing cluster (Mn$_4$CaO$_5$) that catalyzes water splitting
- **Primary electron acceptor (pheophytin):** Accepts the excited electron from P680

**Function:**
1. A photon is absorbed by the antenna complex and energy is funneled to P680
2. An electron in P680 is excited and transferred to pheophytin (the reaction center is now oxidized: P680$^+$)
3. P680$^+$ is the strongest biological oxidizing agent — it pulls electrons from water via the OEC
4. Water splitting: $2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$ (occurs in the lumen)
5. The excited electron passes to plastoquinone (PQ) and onward through the ETC

> **Key Fact:** The O$_2$ we breathe is a byproduct of PSII splitting water.  Every O$_2$ molecule requires two water molecules and four photons of light.
      `
    },
    {
      id: 'ps2-psi',
      type: 'text' as const,
      content: `
### Photosystem I (PSI) — NADPH Production

**Structure:**
- **Antenna complex (LHC I):** ~200 pigment molecules
- **P700 reaction center:** A pair of chlorophyll a molecules with peak absorption at 700 nm
- **Primary electron acceptor (A0):** A modified chlorophyll molecule

**Function:**
1. A photon energizes P700, and an electron is transferred to the primary acceptor
2. The "hole" in P700$^+$ is filled by an electron arriving from PSII via plastocyanin (PC)
3. The excited electron passes through a series of iron-sulfur (Fe-S) proteins to **ferredoxin** (Fd)
4. **Ferredoxin-NADP$^+$ reductase (FNR)** transfers electrons from ferredoxin to NADP$^+$:

$$\\text{NADP}^+ + 2e^- + \\text{H}^+ \\longrightarrow \\text{NADPH}$$

NADPH is produced on the **stroma** side of the membrane, where it will be used by the Calvin cycle.
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
            question: 'P680+ (oxidized P680) is described as the strongest biological oxidizing agent. Why is this biologically significant?',
            options: [
              'It allows P680 to absorb more photons',
              'It has a sufficiently high oxidizing potential to extract electrons from water, enabling oxygenic photosynthesis',
              'It prevents photorespiration',
              'It activates the Calvin cycle enzymes'
            ],
            correctAnswer: 1,
            explanation: 'Water is an extremely stable molecule and difficult to oxidize. P680+ has such a strong affinity for electrons (high reduction potential) that it can pull them from water via the oxygen-evolving complex. This capability is what makes oxygenic photosynthesis possible.'
          },
          {
            question: 'The electrons used to reduce NADP+ to NADPH in PSI originally came from:',
            options: [
              'CO2',
              'Glucose',
              'Water (via PSII)',
              'ATP'
            ],
            correctAnswer: 2,
            explanation: 'In linear electron flow, electrons originate from water splitting at PSII, travel through the ETC, are re-energized at PSI, and ultimately reduce NADP+ to NADPH. The entire chain traces electrons from H2O to NADPH.'
          },
          {
            question: 'What is the role of the antenna complex in each photosystem?',
            options: [
              'To split water molecules',
              'To synthesize ATP',
              'To absorb photons across a range of wavelengths and funnel energy to the reaction center',
              'To reduce NADP+ to NADPH'
            ],
            correctAnswer: 2,
            explanation: 'The antenna complex (light-harvesting complex) contains hundreds of pigment molecules that collectively absorb photons from a broad range of wavelengths. They transfer the absorbed energy via resonance energy transfer to the reaction center chlorophyll, concentrating light energy.'
          }
        ]
      }
    },
    {
      id: 'ps2-cyclic',
      type: 'text' as const,
      content: `
### Cyclic Electron Flow

In addition to linear electron flow, PSI can operate independently in **cyclic electron flow**:

$$\\text{PSI} \\rightarrow \\text{Fd} \\rightarrow \\text{Cyt b6f} \\rightarrow \\text{PC} \\rightarrow \\text{PSI}$$

In cyclic flow:
- Electrons from PSI are passed to ferredoxin
- Instead of going to NADP$^+$, ferredoxin passes them back to the **cytochrome b6f complex**
- Cytochrome b6f pumps H$^+$ into the thylakoid lumen (contributing to the proton gradient)
- Electrons return to PSI via plastocyanin

**Products of cyclic electron flow:**
- **ATP** (via chemiosmosis) $\\checkmark$
- **NADPH** ✗ (electrons return to PSI, not to NADP$^+$)
- **O$_2$** ✗ (no water splitting — PSII is not involved)

**Why is cyclic electron flow important?**

The Calvin cycle consumes ATP and NADPH in a ratio of **3:2**.  Linear electron flow produces approximately equal amounts of each.  Cyclic electron flow supplements the ATP supply to maintain the correct 3:2 ratio.

It also plays a role in **photoprotection** — under high light conditions, cyclic flow can dissipate excess energy safely.
      `
    },
    {
      id: 'ps2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Cyclic vs. Linear Electron Flow
      `,
      exercise: {
        questions: [
          {
            question: 'Cyclic electron flow produces ____ but NOT ____.',
            options: [
              'NADPH; ATP',
              'ATP; NADPH or O2',
              'O2; ATP',
              'Glucose; NADPH'
            ],
            correctAnswer: 1,
            explanation: 'Cyclic electron flow only involves PSI. Electrons cycle from PSI to ferredoxin to cytochrome b6f and back to PSI. This pumps protons for ATP production but does not produce NADPH (electrons do not go to NADP+) or O2 (no water splitting since PSII is not involved).'
          },
          {
            question: 'Why does the cell sometimes switch to cyclic electron flow instead of using only linear flow?',
            options: [
              'To produce more NADPH when stocks are low',
              'To generate additional ATP to maintain the 3:2 ATP:NADPH ratio needed by the Calvin cycle',
              'To produce O2 more efficiently',
              'Because cyclic flow is more energy-efficient overall'
            ],
            correctAnswer: 1,
            explanation: 'The Calvin cycle uses 3 ATP per 2 NADPH. Linear electron flow alone does not produce enough ATP relative to NADPH. Cyclic electron flow generates additional ATP (without NADPH) to maintain the proper ratio for carbon fixation.'
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
            question: 'The cluster of manganese atoms that catalyzes water splitting in PSII (abbreviation):',
            answer: 'OEC',
            acceptableAnswers: ['OEC', 'oec', 'oxygen-evolving complex', 'oxygen evolving complex', 'Oxygen-evolving complex'],
            placeholder: 'e.g. LHC'
          },
          {
            question: 'The mobile electron carrier protein that shuttles electrons from cytochrome b6f to PSI:',
            answer: 'plastocyanin',
            acceptableAnswers: ['plastocyanin', 'Plastocyanin', 'PC', 'pc'],
            placeholder: 'e.g. ferredoxin'
          },
          {
            question: 'The enzyme that catalyzes the final step of NADPH production in PSI (full name or abbreviation):',
            answer: 'FNR',
            acceptableAnswers: ['FNR', 'fnr', 'ferredoxin-NADP+ reductase', 'ferredoxin NADP reductase', 'NADP+ reductase'],
            placeholder: 'e.g. ATP synthase'
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
            question: 'A researcher discovers a mutant plant that cannot perform cyclic electron flow. Which of the following would you predict?',
            options: [
              'The plant could not produce any ATP from photosynthesis',
              'The Calvin cycle would be limited by insufficient ATP relative to NADPH',
              'The plant could not produce O2',
              'NADPH production would increase dramatically'
            ],
            correctAnswer: 1,
            explanation: 'Without cyclic electron flow, the plant would rely solely on linear electron flow for ATP. Since linear flow produces roughly equal amounts of ATP and NADPH, but the Calvin cycle needs a 3:2 ratio, the plant would not have enough ATP to fully utilize the NADPH produced.'
          },
          {
            question: 'Which of the following correctly traces the path of electrons during linear electron flow?',
            options: [
              'NADPH -> PSI -> PSII -> H2O',
              'H2O -> PSII -> PQ -> Cyt b6f -> PC -> PSI -> Fd -> NADP+',
              'PSI -> PSII -> PQ -> PC -> NADP+',
              'CO2 -> PSII -> PSI -> O2'
            ],
            correctAnswer: 1,
            explanation: 'Linear electron flow begins with water splitting at PSII (providing electrons), proceeds through plastoquinone (PQ), cytochrome b6f, plastocyanin (PC), PSI (re-energization), ferredoxin (Fd), and finally NADP+ reductase (producing NADPH).'
          }
        ]
      }
    }
  ]
};