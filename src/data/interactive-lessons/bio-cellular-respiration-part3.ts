export const bioCellRespirationPart3Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr3-intro',
      type: 'text' as const,
      content: `
## Pyruvate Oxidation — The Bridge Step

**Part 3 of 7**

After glycolysis, each glucose molecule has been converted into two molecules of **pyruvate** in the cytoplasm.  Before pyruvate can enter the citric acid cycle, it must be transported into the **mitochondrial matrix** and converted into **acetyl-CoA** — a process called pyruvate oxidation (also known as the "link reaction" or "transition step").

This is a brief but critical step that connects glycolysis to the rest of aerobic respiration.
      `
    },
    {
      id: 'cr3-transport',
      type: 'text' as const,
      content: `
### Pyruvate Transport into the Mitochondria

Pyruvate is a small, charged molecule that cannot freely diffuse across the mitochondrial membranes.  It enters the mitochondrial matrix through a specific **pyruvate translocase** (a transport protein) in the inner mitochondrial membrane.

This transport is an example of **facilitated transport** — pyruvate moves down its concentration gradient (higher in cytoplasm, lower in matrix) through a carrier protein.  It is co-transported with a proton (H$^+$), making it a **symport** mechanism.

> **Important:** This transport step requires an intact inner mitochondrial membrane.  Any damage to the membrane or inhibition of the translocase blocks all downstream aerobic respiration.
      `
    },
    {
      id: 'cr3-reaction',
      type: 'text' as const,
      content: `
### The Pyruvate Dehydrogenase Complex

Once inside the matrix, pyruvate undergoes an **oxidative decarboxylation** catalyzed by the **pyruvate dehydrogenase complex (PDC)** — a massive multi-enzyme complex consisting of three enzymes and five coenzymes.

The reaction proceeds in three steps:

1. **Decarboxylation:** The carboxyl group of pyruvate is removed as **CO$_2$** (the first CO$_2$ released in respiration)
2. **Oxidation:** The remaining 2-carbon fragment is oxidized, and NAD$^+$ is reduced to **NADH**
3. **Attachment to Coenzyme A:** The oxidized 2-carbon fragment (acetyl group) is attached to **coenzyme A** (CoA), forming **acetyl-CoA**

$$\\text{Pyruvate} + \\text{NAD}^+ + \\text{CoA} \\longrightarrow \\text{Acetyl-CoA} + \\text{CO}_2 + \\text{NADH}$$

**Per glucose (2 pyruvates):**
- 2 CO$_2$ released
- 2 NADH produced
- 2 Acetyl-CoA formed
- **0 ATP** produced directly

The CO$_2$ released here (and in the subsequent citric acid cycle) is ultimately exhaled by the organism.  This is literally where the carbon in your food becomes the carbon dioxide in your breath.
      `
    },
    {
      id: 'cr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Pyruvate Oxidation
      `,
      exercise: {
        questions: [
          {
            question: 'What are the three products of pyruvate oxidation (per pyruvate molecule)?',
            options: [
              'ATP, FADH2, and CO2',
              'Acetyl-CoA, NADH, and CO2',
              'Glucose, NAD+, and O2',
              'Lactate, ATP, and NADH'
            ],
            correctAnswer: 1,
            explanation: 'Each pyruvate is decarboxylated (releasing CO2), oxidized (reducing NAD+ to NADH), and the remaining acetyl group is attached to CoA to form acetyl-CoA. No ATP is produced directly.'
          },
          {
            question: 'The pyruvate dehydrogenase complex performs an "oxidative decarboxylation." What does this term mean?',
            options: [
              'Oxygen is added to the molecule and a phosphate group is removed',
              'A carboxyl group is removed (as CO2) and the molecule is oxidized (electrons are removed)',
              'Water is added to remove a carbon group',
              'The molecule gains electrons and gains a carboxyl group'
            ],
            correctAnswer: 1,
            explanation: 'Decarboxylation = removal of a carboxyl group as CO2. Oxidation = removal of electrons (carried away by NADH). The term "oxidative decarboxylation" describes both processes happening simultaneously.'
          },
          {
            question: 'Where specifically does pyruvate oxidation occur?',
            options: [
              'Cytoplasm',
              'Inner mitochondrial membrane',
              'Mitochondrial matrix',
              'Intermembrane space'
            ],
            correctAnswer: 2,
            explanation: 'Pyruvate is transported into the mitochondrial matrix via pyruvate translocase. The pyruvate dehydrogenase complex is located in the matrix, where it converts pyruvate to acetyl-CoA.'
          }
        ]
      }
    },
    {
      id: 'cr3-regulation',
      type: 'text' as const,
      content: `
### Regulation of the Pyruvate Dehydrogenase Complex

The PDC is tightly regulated because it commits carbon to the citric acid cycle (an irreversible reaction):

| Regulator | Effect | Rationale |
|-----------|--------|-----------|
| **Acetyl-CoA** (high) | Inhibits | Product inhibition — citric acid cycle is backed up |
| **NADH** (high) | Inhibits | Electron carriers are saturated |
| **ATP** (high) | Inhibits | Cell energy is sufficient |
| **AMP** (high) | Activates | Cell needs more energy |
| **CoA** (free, high) | Activates | Substrate availability — ready to accept acetyl groups |
| **NAD+** (high) | Activates | Electron carriers are available |

The PDC is also regulated by **covalent modification**: a kinase phosphorylates (inactivates) the complex when energy is abundant, while a phosphatase dephosphorylates (activates) it when energy is needed.

> **Clinical Connection:** Pyruvate dehydrogenase deficiency is a genetic disorder that impairs the conversion of pyruvate to acetyl-CoA. Patients accumulate pyruvate and lactate, leading to lactic acidosis and neurological problems, because the brain relies heavily on aerobic glucose metabolism.
      `
    },
    {
      id: 'cr3-fermentation',
      type: 'text' as const,
      content: `
### The Anaerobic Alternative: Fermentation

When oxygen is absent, the electron transport chain cannot operate, NADH cannot be reoxidized, and the citric acid cycle stalls.  Without NAD$^+$ regeneration, glycolysis would also stop.

**Fermentation** solves this problem by regenerating NAD$^+$ without using the electron transport chain:

**Lactic Acid Fermentation:**
$$\\text{Pyruvate} + \\text{NADH} \\longrightarrow \\text{Lactate} + \\text{NAD}^+$$
- Occurs in animal muscle cells during intense exercise and in certain bacteria (e.g., *Lactobacillus* in yogurt production)
- Pyruvate is directly reduced to lactate

**Alcoholic (Ethanol) Fermentation:**
$$\\text{Pyruvate} \\longrightarrow \\text{Acetaldehyde} + \\text{CO}_2$$
$$\\text{Acetaldehyde} + \\text{NADH} \\longrightarrow \\text{Ethanol} + \\text{NAD}^+$$
- Occurs in yeast and some plant cells
- Pyruvate is first decarboxylated, then the acetaldehyde is reduced to ethanol

> **Key Point:** Fermentation does NOT produce additional ATP beyond the 2 ATP from glycolysis. Its sole purpose is to regenerate NAD$^+$ so that glycolysis can continue.
      `
    },
    {
      id: 'cr3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Fermentation
      `,
      exercise: {
        questions: [
          {
            question: 'What is the primary purpose of fermentation?',
            options: [
              'To produce large amounts of ATP',
              'To regenerate NAD+ so glycolysis can continue',
              'To convert glucose into amino acids',
              'To produce oxygen for the cell'
            ],
            correctAnswer: 1,
            explanation: 'Fermentation regenerates NAD+ from NADH by transferring electrons to pyruvate (or its derivative). This allows glycolysis to continue producing 2 ATP per glucose even without oxygen.'
          },
          {
            question: 'An organism produces ethanol and CO2 as byproducts of glucose metabolism. This organism is performing:',
            options: [
              'Lactic acid fermentation',
              'Aerobic respiration',
              'Alcoholic fermentation',
              'Chemiosmosis'
            ],
            correctAnswer: 2,
            explanation: 'Alcoholic (ethanol) fermentation decarboxylates pyruvate to acetaldehyde (releasing CO2) and then reduces acetaldehyde to ethanol while oxidizing NADH to NAD+. This pathway is characteristic of yeast.'
          }
        ]
      }
    },
    {
      id: 'cr3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Pyruvate Oxidation and Fermentation
      `,
      exercise: {
        questions: [
          {
            question: 'The 2-carbon molecule that enters the citric acid cycle after pyruvate is oxidized:',
            answer: 'acetyl-CoA',
            acceptableAnswers: ['acetyl-CoA', 'Acetyl-CoA', 'acetyl CoA', 'Acetyl CoA', 'acetyl coA'],
            placeholder: 'e.g. oxaloacetate'
          },
          {
            question: 'The product of lactic acid fermentation in animal muscle cells:',
            answer: 'lactate',
            acceptableAnswers: ['lactate', 'Lactate', 'lactic acid', 'Lactic acid'],
            placeholder: 'e.g. ethanol'
          },
          {
            question: 'The multi-enzyme complex that catalyzes the conversion of pyruvate to acetyl-CoA (abbreviation is acceptable):',
            answer: 'pyruvate dehydrogenase complex',
            acceptableAnswers: ['pyruvate dehydrogenase complex', 'PDC', 'pyruvate dehydrogenase', 'PDH', 'pdc'],
            placeholder: 'e.g. ATP synthase'
          }
        ]
      }
    },
    {
      id: 'cr3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Bridge Step Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Starting from one glucose molecule, how many total CO2 molecules are released during pyruvate oxidation?',
            options: [
              '1',
              '2',
              '4',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'Each glucose produces 2 pyruvates in glycolysis. Each pyruvate loses one CO2 during pyruvate oxidation. Therefore, 2 CO2 molecules are released (the remaining 4 CO2 are released during the citric acid cycle).'
          },
          {
            question: 'A researcher adds a chemical that blocks pyruvate translocase. What will happen in the cell?',
            options: [
              'Glycolysis will stop immediately',
              'Pyruvate will accumulate in the cytoplasm and the cell may switch to fermentation',
              'The citric acid cycle will speed up to compensate',
              'ATP production will increase through substrate-level phosphorylation'
            ],
            correctAnswer: 1,
            explanation: 'Blocking pyruvate translocase prevents pyruvate from entering the mitochondria. Pyruvate accumulates in the cytoplasm. The cell may switch to fermentation to regenerate NAD+ and continue glycolysis, but total ATP output drops dramatically.'
          }
        ]
      }
    }
  ]
};