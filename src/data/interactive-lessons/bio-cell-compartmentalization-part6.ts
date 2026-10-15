export const bioCellCompartmentPart6Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p6-s1-intro',
      type: 'text' as const,
      content: `
## AP Exam Practice

**Part 6 of 7 — AP Exam Practice**

Compartmentalization rarely appears as a stand-alone vocabulary question. It shows up inside data sets, experiments and models, often mixed with respiration, photosynthesis or gene expression. This part practices the three formats you are most likely to see.

| Exam format | What it asks | How compartmentalization appears |
|---|---|---|
| Multiple-choice sets of 4 to 5 questions | Interpret one data table or diagram several ways | Fractionation tables, membrane-damage experiments, organelle comparisons |
| Short free response: conceptual analysis or model analysis (4 points each) | Describe, explain, predict with a short justification | "Explain how the folding of the inner membrane affects ATP production" |
| Long free response: interpreting experimental results (9 points) | Identify variables and controls, analyze data, make and justify predictions | Experiments that disrupt a membrane or change a compartment's pH |

### Task verbs and what earns the point

- **Describe:** state the relevant feature or relationship. "Lysosomes keep their interior acidic."
- **Explain:** give the *how* or *why*. "Proton pumps move $\\text{H}^+$ into the lysosome, and the membrane limits leakage, so the interior stays near pH 5."
- **Predict:** state the specific outcome, with direction. "Hydrolase activity inside the lysosome will decrease."
- **Justify:** connect the prediction to evidence or to a principle. "...because the enzymes have an acidic pH optimum."
      `
    },
    {
      id: 'bio-cell-compartmentalization-p6-s2-frq-design',
      type: 'text' as const,
      content: `
### Practice free response 1 — scientific investigation

**Prompt (adapted, AP style):** Researchers hypothesize that the acidic interior of lysosomes is required for the digestion of proteins delivered to them. They grow two sets of cultured cells and feed both sets a labeled protein that is taken in and delivered to lysosomes. One set is treated with a drug that blocks the lysosomal proton pumps; the other set is not. After two hours, they measure the percentage of labeled protein that has been broken down.

(a) **Identify** the independent variable.
(b) **Identify** an appropriate control group.
(c) **Predict** the result if the hypothesis is correct.
(d) **Justify** your prediction.

#### Model answer

(a) Whether the lysosomal proton pumps are blocked (presence or absence of the drug).

(b) Cells fed the same labeled protein for the same time **without** the drug. A stronger design also includes cells given only the drug's solvent, to rule out effects of the solvent itself.

(c) The treated cells will break down a **smaller percentage** of the labeled protein than the control cells.

(d) Without proton pumping, the lysosome interior becomes less acidic. Lysosomal hydrolases have an acidic pH optimum, so their activity drops and less protein is digested.

#### Where students lose points

- Naming "the drug" as the independent variable without saying what it changes (pump activity and therefore pH).
- Predicting "the protein will not be digested" without a comparison to the control.
- Justifying with "the lysosome is broken" when the membrane is intact and only the pH has changed.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p6-s3-mcq-set',
      type: 'multiple-choice' as const,
      content: `
### Question set — isolated mitochondria

Researchers isolate mitochondria and supply them with pyruvate, ADP, phosphate and oxygen. They measure ATP production (relative units) under four conditions.

| Condition | ATP production | $\\text{O}_2$ use |
|---|---|---|
| I. Intact mitochondria | 100 | 100 |
| II. Outer membrane removed, inner membrane intact | 94 | 98 |
| III. Inner membrane made permeable to protons | 7 | 135 |
| IV. Intact mitochondria + ATP synthase inhibitor | 4 | 22 |
      `,
      exercise: {
        questions: [
          {
            question: 'Comparing conditions I and II, what can be concluded about the outer mitochondrial membrane?',
            options: [
              'It is needed to hold the proton gradient that powers ATP synthase',
              'It is not required for most of the ATP these organelles make',
              'It contains the electron transport proteins that consume oxygen',
              'It is the site where pyruvate is broken down for the cell'
            ],
            correctAnswer: 1,
            explanation: 'Removing the outer membrane barely changes ATP output or oxygen use, so the machinery and the gradient depend on the inner membrane. The electron transport chain sits in the inner membrane, not the outer one.'
          },
          {
            question: 'In condition III, oxygen use rises while ATP production collapses. Which explanation best accounts for both results?',
            options: [
              'Pumping speeds up with no gradient to oppose it, but protons skip ATP synthase',
              'Electron transport stops because the inner membrane has been destroyed',
              'ATP synthase runs in reverse and consumes the extra oxygen supplied',
              'Pyruvate cannot enter, so the oxygen is used up without any fuel'
            ],
            correctAnswer: 0,
            explanation: 'With a leaky inner membrane, the gradient never builds up, so the pumps work faster and consume more oxygen; but protons return through the bilayer rather than through ATP synthase, so little ATP is made.'
          },
          {
            question: 'In condition IV, oxygen use falls to 22 even though the membranes are intact. Which statement best explains this result?',
            options: [
              'Protons pile up with no way back, and the steep gradient slows more pumping',
              'The inhibitor makes the inner membrane leaky, so protons cannot be pumped',
              'The inhibitor blocks oxygen from entering the mitochondrial matrix',
              'Without ATP, the electron transport proteins cannot start working'
            ],
            correctAnswer: 0,
            explanation: 'When protons cannot flow back through ATP synthase, they pile up in the intermembrane space; the steep gradient resists further pumping, so electron transport and oxygen use slow. Electron transport does not require ATP to run.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p6-s4-frq-model',
      type: 'text' as const,
      content: `
### Practice free response 2 — analysis of a model

**Prompt (adapted, AP style):** A diagram shows a eukaryotic cell with a nucleus, rough ER, Golgi, lysosomes and mitochondria, and beside it a bacterial cell with a nucleoid, ribosomes and a plasma membrane.

(a) **Describe** one difference in how the two cells compartmentalize ATP synthesis.
(b) **Explain** how internal membranes allow the eukaryotic cell to carry out digestion and protein synthesis in the same cell without interference.
(c) A student proposes that mitochondria descended from free-living bacteria. **Identify** one feature of mitochondria that the diagram could be extended to show as evidence, and **justify** why it supports the proposal.

#### Model answer

(a) The bacterium makes ATP by chemiosmosis across its **plasma membrane**; the eukaryotic cell does so across the **inner mitochondrial membrane**.

(b) Hydrolytic enzymes are enclosed in lysosomes, whose membrane separates them from the cytosol and lets the interior stay acidic, while proteins are made by ribosomes in the cytosol and on the rough ER. The membrane keeps the enzymes from digesting newly made proteins.

(c) Mitochondria contain their own **circular DNA**. Bacterial chromosomes are circular, unlike the linear chromosomes of the eukaryotic nucleus, so circular DNA fits descent from a bacterium. (Other acceptable features: bacteria-like ribosomes, a double membrane, division by fission.)

**Scoring note:** In part (c), naming the feature earns the identification point, but the justification point requires the link to a bacterial trait.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p6-s5-mcq-model',
      type: 'multiple-choice' as const,
      content: `
### Question set — reasoning from models
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "The lysosome is important because it keeps the cell organized." Which revision would best turn this into an explanation that earns credit?',
            options: [
              'The lysosome stores enzymes that the cell will need at a later time',
              'The lysosome membrane holds acid hydrolases apart from cytosol molecules',
              'The lysosome is found in animal cells but not in most plant cells',
              'The lysosome is made by the Golgi and is packed with many enzymes'
            ],
            correctAnswer: 1,
            explanation: 'Credit requires a mechanism: what the membrane separates and what that allows. The other revisions add true or partly true facts but still do not explain how the compartment benefits the cell.'
          },
          {
            question: 'A model shows a pancreatic cell that secretes large amounts of digestive enzyme. If the cell\'s rough ER area were cut in half while everything else stayed the same, which prediction is best supported?',
            options: [
              'Secretion would fall because fewer ribosomes could feed proteins into the ER',
              'Secretion would rise because the Golgi would then receive its proteins faster',
              'Secretion would hold steady because the Golgi sets the rate of output',
              'Secretion would shift to release enzymes directly from the cytosol'
            ],
            correctAnswer: 0,
            explanation: 'Secreted proteins are made by ribosomes attached to the rough ER, so less ER membrane means fewer docking sites and less enzyme entering the secretory route. Proteins made in the cytosol do not enter the secretory route.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p6-s6-checklist',
      type: 'text' as const,
      content: `
### Final checklist for compartment questions

1. **Locate the process.** Which compartment or membrane is involved: lysosome, ER, Golgi, mitochondrion, chloroplast, nucleus, or the prokaryotic plasma membrane?
2. **Name the benefit.** Separation, distinct conditions, concentration, or surface area.
3. **Find the failure type.** Has the process inside stopped, or has the barrier leaked?
4. **Predict with direction and comparison.** "Lower than the control," "higher than in condition I."
5. **Justify with a mechanism.** Proton gradients, pH optima, membrane-embedded enzymes, or the secretory route.
6. **For origins, link to bacteria.** Circular DNA, bacteria-like ribosomes, double membranes, division by fission, sequence similarity.
      `
    }
  ]
};
