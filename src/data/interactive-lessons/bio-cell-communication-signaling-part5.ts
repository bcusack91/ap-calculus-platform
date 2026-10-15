export const bioCellCommPart5Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
## Cellular Responses

**Part 5 of 7 — Cellular Responses**

A pathway exists to change what the cell does. The CED states that signal transduction may change **gene expression** and **cell function**, which can alter the phenotype, or can lead to **programmed cell death (apoptosis)**. It also asks you to explain how a change in **any** part of a pathway changes the response (Topic 4.3). This part covers both halves.

### Where the response happens

| Response location | What changes | Speed | Example |
|-------------------|--------------|-------|---------|
| **Cytoplasm** | Activity of proteins that already exist (enzymes, channels, cytoskeleton) | Seconds to minutes | Glycogen breakdown in liver cells after epinephrine |
| **Nucleus** | Which genes are transcribed (a transcription factor is activated) | Minutes to hours | Growth factor signaling that turns on genes for cell division |
      `
    },
    {
      id: 'cell5-types',
      type: 'text' as const,
      content: `
### Four kinds of response to know

**1. Changes in enzyme or channel activity.** The final relay protein activates or inhibits an existing protein. Example: the enzyme that breaks down glycogen is switched on and glucose is released.

**2. Changes in gene expression.** The pathway activates a **transcription factor**, which turns specific genes on or off. The DNA sequence is not changed; the cell simply makes different mRNAs and proteins.

- *Plants:* the gas **ethylene** triggers a pathway that turns on genes for enzymes that soften fruit and convert starch to sugar, so the fruit ripens.
- *Seeds:* the hormone **gibberellin** turns on genes for enzymes that break down stored starch, so a germinating seed can feed the embryo.
- *Animal development:* signals switch on **HOX genes**, which set up the body plan along the head-to-tail axis.

**3. Cell division.** Growth factors bind receptors (often receptor tyrosine kinases) and start pathways that push the cell past the G₁ checkpoint into the cell cycle.

**4. Apoptosis (programmed cell death).** Signals activate enzymes that dismantle the cell from the inside in a tidy, controlled way. Neighboring cells engulf the pieces without inflammation.

- During human development, apoptosis removes the tissue between the fingers and toes.
- Cells with severe DNA damage can be triggered to undergo apoptosis, protecting the body from cancer.

> 💡 **Misconception alert:** Apoptosis is not the same as cell death from injury (necrosis). Apoptosis is a **response to a signal**, built into normal development and maintenance.
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ethylene exposure causes harvested tomatoes to soften over several days. Which statement best describes how the signal produces this response?',
            options: [
              'Ethylene is digested by the fruit and its energy is used to break down cell walls',
              'Ethylene changes the DNA sequence of ripening genes in the fruit cells',
              'Ethylene starts a pathway that turns on genes for wall-degrading enzymes',
              'Ethylene directly dissolves the cell walls without binding to any receptor'
            ],
            correctAnswer: 2,
            explanation: 'Ethylene binds receptors and starts a transduction pathway that changes gene expression, producing enzymes that soften the fruit. Signals carry information and do not alter DNA sequence.'
          },
          {
            question: 'In a developing hand, cells between the digits die on schedule while the cells of the digits survive. Which description fits this process?',
            options: [
              'The cells between the digits burst after an injury and release their contents',
              'A signal triggers programmed cell death in cells between the digits',
              'The cells between the digits fail to receive oxygen and starve to death',
              'The cells between the digits divide into smaller cells that are reabsorbed'
            ],
            correctAnswer: 1,
            explanation: 'Removing the webbing is apoptosis: a developmental signal activates a controlled self-destruction program in specific cells. Bursting from injury describes necrosis, which is not a regulated response.'
          }
        ]
      }
    },
    {
      id: 'cell5-changes',
      type: 'text' as const,
      content: `
### When a pathway changes: mutations

Any component can be altered: the receptor's binding domain, the receptor's intracellular domain, a relay protein, a second-messenger enzyme or the final target. Use one rule:

> **A change at one step affects every step downstream of it, and none of the steps upstream.**

Then decide whether the change makes the component **stuck off** (loss of function) or **stuck on** (gain of function).

| Altered component | Stuck off → | Stuck on → |
|-------------------|-------------|------------|
| Receptor | No response, even with plenty of ligand | Response even with **no** ligand |
| Relay protein (e.g., a G protein) | No response | Response continues after the ligand is gone |
| Final target protein | No response; earlier steps still occur normally | Response all the time |

**Case: a stuck relay protein and cancer.** Many growth-factor pathways include a small relay G protein. Like other G proteins it is active with GTP bound and turns itself off by hydrolyzing GTP. Certain mutations stop it from hydrolyzing GTP, so it stays **on** and sends a constant "divide" signal even when no growth factor is present. Mutations of this kind are found in many human cancers.

**Case: type 2 diabetes.** Insulin is present, but target cells respond weakly because of problems in the receptor or the pathway downstream of it. Glucose uptake stays low, so blood glucose stays high. (In type 1 diabetes, by contrast, the signal itself is missing because insulin-producing cells were destroyed.)
      `
    },
    {
      id: 'cell5-chemicals',
      type: 'text' as const,
      content: `
### When a pathway changes: chemicals, toxins and drugs

The CED notes that chemicals that interfere with any component can **activate or inhibit** the pathway.

| Chemical | What it targets | Result |
|----------|-----------------|--------|
| **Cholera toxin** | Chemically modifies the G protein in intestinal cells so it cannot hydrolyze GTP | G protein stuck on → the cAMP-making enzyme keeps working → cells pump chloride ions and water into the gut → severe diarrhea |
| **Beta-blockers** (blood-pressure drugs) | Bind and block epinephrine receptors on heart cells without activating them | Heart rate and force fall |
| **Antihistamines** | Block histamine receptors | Allergy symptoms are reduced |
| **Organophosphate pesticides and nerve agents** | Inhibit the enzyme that breaks down acetylcholine at synapses | Acetylcholine accumulates, and muscles are stimulated without stopping |

A chemical that **blocks** a receptor without activating it is an **antagonist**. One that **binds and activates** the receptor in place of the natural ligand is an **agonist**.

> 📝 **AP Connection:** Signaling also sits inside larger feedback loops that keep body conditions stable; those loops are covered in the Feedback Mechanisms topic. Here, focus on the single-cell question: *which component changed, is it stuck on or off, and what happens downstream?*
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: Predicting Altered Responses** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A mutation lets a growth-factor receptor signal as if a ligand were bound, even when none is present. What is the most likely cellular outcome?',
            options: [
              'Cells stop dividing because their receptors are permanently blocked',
              'Cells divide only when the growth factor is added at a higher dose',
              'Cells keep getting a constant push to divide and may grow without control',
              'Cells divide normally because relay proteins ignore receptor activity'
            ],
            correctAnswer: 2,
            explanation: 'A receptor that is active without its ligand is a gain-of-function change: every downstream step receives a constant "divide" signal, which can lead to uncontrolled proliferation.'
          },
          {
            question: 'Cholera toxin keeps the G protein in intestinal cells active. Which measurement would rise in these cells compared with uninfected cells?',
            options: [
              'Number of ligand molecules bound to receptors on the cell surface',
              'Concentration of cAMP produced in the cytoplasm',
              'Activity of the phosphatase that removes phosphates from proteins',
              'Rate at which glucose is absorbed from the gut into the blood'
            ],
            correctAnswer: 1,
            explanation: 'An active G protein keeps the cAMP-making enzyme working, so cAMP accumulates. The toxin acts below the receptor, so ligand binding is unchanged.'
          },
          {
            question: 'A patient takes a drug that binds heart-cell epinephrine receptors without activating them. During a stressful event, how will the heart respond compared with an untreated person?',
            options: [
              'Heart rate rises less, since fewer binding sites are open to epinephrine',
              'Heart rate rises more, since the drug amplifies the epinephrine signal',
              'Heart rate stays the same, since epinephrine acts only on the liver',
              'Heart rate falls, since the drug reverses the effect of epinephrine'
            ],
            correctAnswer: 0,
            explanation: 'The drug is an antagonist (a beta-blocker): it occupies receptors without activating them, so epinephrine has fewer receptors to bind and the heart responds less strongly.'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Stuck On or Stuck Off?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A growth-pathway G protein that cannot hydrolyze GTP',
            options: ['Pathway stuck on', 'Pathway stuck off']
          },
          {
            label: 'A receptor whose ligand-binding site no longer fits the ligand',
            options: ['Pathway stuck on', 'Pathway stuck off']
          },
          {
            label: 'A G protein modified by cholera toxin',
            options: ['Pathway stuck on', 'Pathway stuck off']
          },
          {
            label: 'An antagonist drug occupying the receptor',
            options: ['Pathway stuck on', 'Pathway stuck off']
          }
        ],
        correctAnswers: ['Pathway stuck on', 'Pathway stuck off', 'Pathway stuck on', 'Pathway stuck off'],
        hint1: 'A G protein that cannot hydrolyze GTP stays in the active state.',
        hint2: 'If the ligand cannot bind, reception never happens.',
        hint3: 'Antagonists bind without activating.',
        explanation: 'A G protein that cannot hydrolyze GTP and a cholera-toxin-modified G protein both stay GTP-bound and active. A receptor that cannot bind its ligand and a receptor blocked by an antagonist both prevent the pathway from starting.'
      }
    }
  ]
}
