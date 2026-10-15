export const bioCellCompartmentPart7Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis Review

**Part 7 of 7 — Synthesis Review**

This review ties the six parts into one picture. Use the map below to check that you can explain each idea in a sentence and give an example.

| Part | Big idea | One-sentence version | Example to cite |
|---|---|---|---|
| 1 | Why compartments | Membranes separate competing reactions, hold distinct conditions and concentrate reactants | Lysosome near pH 5; nuclear envelope delaying translation until mRNA is processed |
| 2 | Membranes as surfaces | Embedded enzymes scale with membrane area, and sealed membranes hold gradients | Cristae; thylakoids; uncoupling in brown fat |
| 3 | Case studies | Ask what a membrane keeps apart and what happens if separation fails | Lysosomal storage disease; contractile vacuole; central vacuole; the secretory route |
| 4 | Data | Locate enzymes by the fraction with most activity; latency shows enclosure | Fractionation tables; detergent experiments; pH-activity curves |
| 5 | Origins | Prokaryotes organize without organelles; mitochondria and chloroplasts came from endosymbiosis | Nucleoid; cyanobacterial thylakoids; circular organelle DNA |
| 6 | Exam practice | Predict with direction and comparison; justify with a mechanism | Isolated mitochondria data set |

### Links to other units

| Unit | Connection to compartmentalization |
|---|---|
| Unit 3 (Cellular Energetics) | Chemiosmosis needs a sealed inner mitochondrial membrane or thylakoid membrane |
| Unit 4 (Cell Communication) | Receptors in the plasma membrane relay signals from outside the cell to targets inside it |
| Unit 6 (Gene Expression) | The nuclear envelope allows pre-mRNA processing before translation |
| Unit 7 (Natural Selection) | Endosymbiosis is an example of how complex cells evolved from simpler ancestors |
      `
    },
    {
      id: 'bio-cell-compartmentalization-p7-s2-story',
      type: 'text' as const,
      content: `
### One cell, every idea

Follow a single pancreatic cell that makes a digestive enzyme.

1. **Nucleus.** The enzyme's gene is transcribed and the pre-mRNA is capped, tailed and spliced *inside the nuclear envelope*, so no ribosome can translate an unfinished message (Part 1).
2. **Rough ER.** Ribosomes on the ER make the enzyme directly into the ER lumen. The cell's large area of rough ER membrane sets how much enzyme it can make (Part 2).
3. **Golgi and vesicles.** The enzyme is modified and shipped in vesicles. It never crosses another membrane and never touches the cytosol, so it cannot digest the cell that made it (Part 3).
4. **Mitochondria.** The energy for all this comes from ATP made by chemiosmosis across the folded inner membrane, a structure inherited from a bacterial ancestor (Parts 2 and 5).
5. **Lysosomes.** Worn-out parts of the cell are digested in an acidic compartment, and the building blocks are recycled (Parts 1 and 3).

If you can tell this story and name the benefit at each step, you have the topic.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p7-s3-mcq-mixed',
      type: 'multiple-choice' as const,
      content: `
### Review Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing of a structure with the benefit of compartmentalization it best illustrates is correct?',
            options: [
              'Cristae: adding surface area for embedded enzymes',
              'Nucleoid: separating transcription from translation',
              'Lysosome: increasing membrane area for synthesis',
              'Ribosome: holding an acidic internal environment'
            ],
            correctAnswer: 0,
            explanation: 'Cristae fold the inner membrane to hold more electron transport proteins and ATP synthase. A nucleoid has no membrane, so it cannot separate transcription from translation, and ribosomes are not enclosed compartments.'
          },
          {
            question: 'Cells from two tissues are compared. Tissue 1 cells have lysosomes with an interior pH of 4.8; tissue 2 cells carry a mutation that raises lysosomal pH to 6.5. Which difference is most likely?',
            options: [
              'Tissue 2 cells digest delivered macromolecules more slowly',
              'Tissue 2 cells lose their lysosomal membranes',
              'Tissue 1 cells release hydrolases into the cytosol',
              'Tissue 1 cells cannot recycle amino acids'
            ],
            correctAnswer: 0,
            explanation: 'Lysosomal hydrolases have acidic pH optima, so raising the pH slows digestion inside intact lysosomes. Nothing in the description damages the membrane.'
          },
          {
            question: 'Which observation would most weaken the claim that a newly discovered organelle originated by endosymbiosis?',
            options: [
              'It has its own circular DNA and small ribosomes',
              'It forms from scratch out of ER membrane',
              'It is enclosed by a double membrane',
              'It divides by a fission-like process'
            ],
            correctAnswer: 1,
            explanation: 'Organelles descended from endosymbionts arise only from existing organelles by division, the way bacteria arise only from bacteria. An organelle built from scratch out of ER membrane points to an origin within the cell.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p7-s4-traps',
      type: 'text' as const,
      content: `
### Trap table

| Trap | Correct idea |
|---|---|
| "Prokaryotes have no internal organization." | They have a nucleoid, ribosomes, plasmids and, in some groups, internal membranes or protein-shelled compartments. |
| "Cristae increase the volume of the mitochondrion." | Cristae increase membrane area, not volume. |
| "A leaky inner membrane stops electron transport." | Electron transport and oxygen use can rise; ATP synthesis is what falls. |
| "Fractionation shows an enzyme in two places, so it works in both." | Small amounts outside the peak fraction usually reflect broken organelles. |
| "The proton gradient is stored ATP." | The gradient is stored potential energy that ATP synthase converts into ATP. |
| "Mitochondria could live outside the cell." | Most of their genes moved to the nucleus; they depend on the host. |
| "Secreted proteins pass through the cytosol on the way out." | They stay inside the ER, Golgi and vesicles until exocytosis. |
      `
    },
    {
      id: 'bio-cell-compartmentalization-p7-s5-input',
      type: 'input-boxes' as const,
      content: `
### Quick recall

1) Name the folds of the inner mitochondrial membrane. (one word)

2) Name the membrane-free region of a prokaryotic cell where the chromosome is concentrated. (one word)

3) A model inner membrane has 7 μm² of area when smooth and 42 μm² with folds. By what factor do the folds increase its area?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['cristae', 'nucleoid', '6'],
        hint1: 'The word comes from the Latin for "crests."',
        hint2: 'The name means "nucleus-like."',
        hint3: 'Divide the folded area by the smooth area.',
        explanation: 'The folds are cristae; the bacterial chromosome sits in the nucleoid; and 42 ÷ 7 = 6, so folding gives six times as much membrane for embedded enzymes.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p7-s6-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Review Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'A eukaryotic cell and a prokaryotic cell are both exposed to a drug that makes all cell membranes permeable to protons. Chemiosmotic ATP production is reduced in which cells?',
            options: [
              'The eukaryote alone, since only it contains mitochondria',
              'Each of the two, since each runs ATP synthase on a gradient',
              'The prokaryote alone, since its gradient sits at the cell surface',
              'Neither of the two, since glycolysis supplies all of their ATP'
            ],
            correctAnswer: 1,
            explanation: 'The prokaryote builds its gradient across the plasma membrane and the eukaryote across the inner mitochondrial membrane, so making membranes leaky to protons collapses both. Glycolysis still makes some ATP, but far less than chemiosmosis.'
          },
          {
            question: 'Which statement best explains why eukaryotic cells benefit more from internal membranes than small prokaryotic cells do?',
            options: [
              'Large cells have a lower ratio of surface area to volume',
              'Prokaryotic cells need no enzymes for respiration at all',
              'Eukaryotic cells lack a plasma membrane able to hold enzymes',
              'Prokaryotic cells carry out far fewer kinds of chemical reactions'
            ],
            correctAnswer: 0,
            explanation: 'As a cell grows, its volume increases faster than its surface, so the plasma membrane alone cannot supply enough working area. Internal membranes add surface and separate the many processes of a large cell.'
          },
          {
            question: 'A researcher finds that an enzyme from a plant cell is most active at pH 5 and is recovered mainly with large membrane-bound sacs. In which compartment does the enzyme most likely work?',
            options: [
              'The stroma of the chloroplast',
              'The central vacuole',
              'The cytosol around the nucleus',
              'The matrix of the mitochondrion'
            ],
            correctAnswer: 1,
            explanation: 'The plant central vacuole is acidic and functions much like a lysosome, so an acid-optimal enzyme recovered with large sacs most likely works there. The stroma, cytosol and matrix are all near neutral or slightly alkaline.'
          }
        ]
      }
    }
  ]
};
