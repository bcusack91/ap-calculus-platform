export const bioCellCompartmentPart1Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p1-s1-intro',
      type: 'text' as const,
      content: `
## Why Cells Compartmentalize

**Part 1 of 7 — Why Cells Compartmentalize**

A single liver cell runs thousands of chemical reactions at once. It builds proteins and digests worn-out proteins, makes fats and burns fats, stores calcium and keeps calcium out of the cytosol. If every enzyme and substrate floated in one shared solution, many of these reactions would undo or sabotage one another.

Eukaryotic cells solve this problem with **compartmentalization**: internal membranes divide the cell into separate spaces, each with its own set of enzymes and its own chemical conditions. The AP Biology Course and Exam Description (Topic 2.10) states the idea in two parts:

1. Membranes and membrane-bound organelles **compartmentalize intracellular metabolic processes and specific enzymatic reactions**.
2. Internal membranes **minimize competing interactions** and **increase the surface area where reactions can occur**.

This topic is about the *why* behind organelles, not a tour of them. The organelle-by-organelle tour lives in the Cell Structure and Organelles lessons. Here you will learn to explain what a membrane boundary makes possible, and to predict what goes wrong when one fails.

### Four things a compartment can do

| Job | What the membrane makes possible | Example |
|---|---|---|
| **Separate** | Keeps incompatible enzymes or reactions apart | Digestive enzymes held inside lysosomes |
| **Set conditions** | Holds a pH or ion level that differs from the cytosol | Acidic lysosome interior; calcium stored in the ER |
| **Concentrate** | Packs enzymes and substrates into a small volume so they meet more often | Reaction sequences inside the mitochondrial matrix |
| **Provide surface** | Gives membrane-embedded enzymes a large working area | Folded inner mitochondrial membrane (Part 2) |
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s2-conditions',
      type: 'text' as const,
      content: `
### Different rooms, different conditions

Because membranes are selectively permeable, each compartment can hold a chemical environment that the cytosol could never maintain. Approximate values:

| Compartment | Typical condition | Why it matters |
|---|---|---|
| Cytosol | pH about 7.2; very low free $\\text{Ca}^{2+}$ | Default working conditions for most cytosolic enzymes |
| Lysosome interior | pH about 4.5 to 5 | Lysosomal hydrolases work best in acid |
| Mitochondrial matrix | pH about 7.8 to 8 | Protons have been pumped out across the inner membrane |
| ER interior | High $\\text{Ca}^{2+}$ compared with the cytosol | Stored calcium can be released as a signal |
| Thylakoid interior (in light) | pH can drop to about 5 | Protons pumped in during the light reactions |

The membrane does not just sit there. **Proton pumps and other transport proteins** spend energy to move ions across it, and the membrane's low permeability to ions keeps them from leaking back. A compartment's condition is maintained work, not a passive state.

#### Worked example — why lysosomes do not digest the cell

**Observation:** Lysosomes contain enzymes that can hydrolyze proteins, nucleic acids, lipids and polysaccharides, yet the cell around them survives.

1. **Separation.** The enzymes are enclosed by the lysosomal membrane, so they reach only material delivered into the lysosome.
2. **Conditions.** Proton pumps in the lysosomal membrane keep the interior near pH 5. The hydrolases are most active at that acidic pH.
3. **Back-up protection.** If a few enzymes leak into the cytosol (pH about 7.2), they are far less active there. The pH difference acts as a safety system.
4. **Conclusion.** The membrane both confines the enzymes and creates the only environment in which they work well, so a dangerous reaction set runs safely inside a living cell.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Separation and Conditions
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher adds a drug that blocks the proton pumps in lysosomal membranes. Which change is most likely to follow inside the lysosomes?',
            options: [
              'The interior pH rises and hydrolase activity falls',
              'The interior pH falls and hydrolase activity rises',
              'The interior pH holds but the membrane dissolves',
              'Hydrolases leave and begin working in the cytosol'
            ],
            correctAnswer: 0,
            explanation: 'Without proton pumping, protons leak out and the lysosome becomes less acidic, so enzymes that work best near pH 5 slow down. The membrane itself stays intact, so the enzymes do not spill into the cytosol.'
          },
          {
            question: 'Which statement best explains why the ER can store calcium ions at a much higher concentration than the cytosol?',
            options: [
              'Calcium ions are too large to cross any cell membrane at all',
              'Transport proteins move calcium in and the bilayer blocks leakage',
              'Calcium diffuses into the ER because the ER has a larger volume',
              'The ER makes calcium ions from amino acids inside its lumen'
            ],
            correctAnswer: 1,
            explanation: 'Ions cross the hydrophobic interior of a bilayer poorly, so active transport proteins can pump calcium into the ER faster than it leaks out. Diffusion alone could only equalize concentrations, never build a gradient.'
          },
          {
            question: 'A mutation makes a lysosomal hydrolase equally active at pH 5 and pH 7.2. Compared with normal cells, cells with this mutation would be at greater risk of which outcome?',
            options: [
              'Slower breakdown of material inside intact lysosomes',
              'Damage to cytosolic molecules if lysosomes leak',
              'Failure of proton pumps to acidify the lysosome',
              'Loss of the lysosomal membrane during digestion'
            ],
            correctAnswer: 1,
            explanation: 'Normally an escaped hydrolase loses most of its activity at cytosolic pH. If it works just as well at pH 7.2, any leak would let it digest cytosolic molecules, removing the pH safety system.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p1-s4-competing',
      type: 'text' as const,
      content: `
### Minimizing competing interactions

"Competing interactions" are reactions or molecules that interfere with one another when they share a space. Membranes prevent three kinds of conflict.

**1. Opposite pathways running at once.** If a cell built a molecule and broke it down in the same space at the same time, it would spend ATP on synthesis only to lose the product to breakdown, a wasteful cycle. Eukaryotic cells often place opposing pathways in different compartments. For example, in animal cells fatty acids are built in the cytosol but broken down inside mitochondria, so each pathway can be switched on without feeding the other.

**2. Damaging enzymes or by-products.** Some reactions produce harmful by-products or use enzymes that would attack the cell's own molecules. Keeping them inside a membrane, together with the enzymes that neutralize them, limits the damage to one small space.

**3. Steps that need to happen in order.** In eukaryotes, the **nuclear envelope** separates transcription (in the nucleus) from translation (in the cytosol). This separation gives the cell time to **process pre-mRNA** (adding a 5′ cap and poly-A tail and splicing out introns) before ribosomes ever see it. In prokaryotes, which lack a nucleus, ribosomes can begin translating an mRNA while it is still being transcribed.

#### Concentration speeds reactions

A compartment also raises the **local concentration** of the molecules inside it. A reaction rate depends on how often enzymes meet their substrates, so packing a pathway's enzymes and intermediates into a small volume, such as the mitochondrial matrix, increases collisions and lets the product of one enzyme reach the next enzyme quickly.

> **AP Connection:** When a free-response question asks you to "explain how compartmentalization benefits the cell," name the specific benefit (separation, distinct conditions, concentration or surface area) and connect it to a specific organelle and process. "It keeps the cell organized" earns no credit.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match each compartment to the benefit it best illustrates
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nuclear envelope keeping pre-mRNA away from ribosomes until processing is finished',
            options: ['Ordering steps in time', 'Holding a distinct pH', 'Adding membrane surface', 'Storing an ion signal']
          },
          {
            label: 'Lysosome interior kept near pH 5 by proton pumps',
            options: ['Adding membrane surface', 'Holding a distinct pH', 'Ordering steps in time', 'Storing an ion signal']
          },
          {
            label: 'ER lumen accumulating calcium that is later released into the cytosol',
            options: ['Holding a distinct pH', 'Ordering steps in time', 'Storing an ion signal', 'Adding membrane surface']
          }
        ],
        correctAnswers: ['Ordering steps in time', 'Holding a distinct pH', 'Storing an ion signal'],
        hint1: 'Ask what the membrane is holding back: a molecule, a proton level, or an ion supply.',
        hint2: 'The nuclear envelope does not change pH; it controls when mRNA meets ribosomes.',
        hint3: 'Calcium stored in the ER is released later as a signal.',
        explanation: 'The nuclear envelope orders transcription, processing and translation in time; the lysosome holds an acidic pH; the ER stores calcium so it can be released as a signal.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p1-s6-misconceptions',
      type: 'text' as const,
      content: `
### Common misconceptions

| Misconception | Better statement |
|---|---|
| "Prokaryotes cannot carry out complex metabolism because they lack organelles." | Prokaryotes run respiration, photosynthesis and much more. They use their plasma membrane and specialized internal regions instead of membrane-bound organelles (Part 5). |
| "A membrane is a wall that keeps everything in or out." | A membrane is selectively permeable. Transport proteins move specific molecules across it, which is how conditions are built and how products leave. |
| "Compartments only matter for big molecules like enzymes." | Compartments also separate small things: protons, calcium ions and reactive by-products. |
| "Compartmentalization is just about organization." | On the exam, name the mechanism: separating competing reactions, holding distinct conditions, concentrating reactants, or adding surface area. |

#### Claim template for written answers

"The [membrane or organelle] separates [process or enzyme] from [what it would interfere with], which allows [condition or outcome]. Without this compartment, [specific prediction]."

Example: "The lysosomal membrane separates acid hydrolases from the cytosol and lets proton pumps keep the interior acidic, which allows macromolecules to be digested without damaging the rest of the cell. Without this membrane, hydrolases could break down cytosolic proteins."
      `
    },
    {
      id: 'bio-cell-compartmentalization-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Explaining the Benefit
      `,
      exercise: {
        questions: [
          {
            question: 'In eukaryotic cells, introns are removed from pre-mRNA before the mRNA reaches a ribosome. Which feature of eukaryotic cells most directly makes this order of events possible?',
            options: [
              'Ribosomes that are built inside the nucleolus',
              'A nuclear envelope separating transcription from translation',
              'An ER membrane that is continuous with the nuclear envelope',
              'Mitochondria that supply ATP for splicing'
            ],
            correctAnswer: 1,
            explanation: 'The nuclear envelope keeps newly made pre-mRNA away from cytosolic ribosomes until processing is complete and the mature mRNA is exported. The other features are real, but none of them keeps translation from starting early.'
          },
          {
            question: 'A cell places the enzymes of a fatty acid synthesis pathway in the cytosol and the enzymes of a fatty acid breakdown pathway in the mitochondria. Which benefit does this arrangement most directly provide?',
            options: [
              'It allows both pathways to share one set of enzymes',
              'It increases the membrane surface for both pathways',
              'It lets each pathway run without undoing the other',
              'It keeps fatty acids out of the mitochondria entirely'
            ],
            correctAnswer: 2,
            explanation: 'Separating opposing pathways prevents a wasteful cycle in which newly built fatty acids are immediately broken down. The pathways use different enzymes, and fatty acids must enter mitochondria to be broken down.'
          }
        ]
      }
    }
  ]
};
