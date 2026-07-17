export const bioImmuneSystemResponsePart4Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm4-intro',
      type: 'text' as const,
      content: `
# ⚔️ Cell-Mediated Immunity: T Cells in Action

While humoral immunity uses antibodies to fight extracellular pathogens, **cell-mediated immunity** uses **T lymphocytes** to destroy infected cells, cancer cells, and transplanted tissue. This branch is essential for fighting intracellular pathogens like viruses.

### What You'll Learn
- Helper T cells $(CD4^{+})$ and their role as immune coordinators
- Cytotoxic T cells $(CD8^{+})$ and how they kill target cells
- Antigen presentation via MHC I vs MHC II
- Mechanisms of apoptosis induction
      `
    },
    {
      id: 'imm4-helper',
      type: 'text' as const,
      content: `
## Helper T Cells $(CD4^{+})$: The Coordinators

Helper T cells are often called the **"quarterbacks"** of the immune system because they coordinate both humoral and cell-mediated responses.

### Activation
1. **Antigen-presenting cell (APC)** — a dendritic cell, macrophage, or B cell — displays antigen on **MHC Class II**
2. The **T cell receptor (TCR)** on a $CD4^{+}$ cell recognizes the antigen-MHC II complex
3. Co-stimulatory signals (e.g., CD28-B7 interaction) confirm activation
4. Helper T cell becomes activated and begins releasing **cytokines**

### Cytokine Functions

| Cytokine | Target | Effect |
|----------|--------|--------|
| **IL-2** | T cells | Stimulates T cell proliferation (autocrine signaling) |
| **IL-4** | B cells | Promotes B cell activation and class switching to IgE |
| **IL-5** | B cells | Stimulates antibody secretion |
| **IFN-γ** | Macrophages | Enhances microbicidal activity |
| **IL-10** | Immune cells | Anti-inflammatory; prevents overactivation |

> 🔑 Without helper T cells, neither humoral nor cell-mediated immunity can function effectively. This is why HIV (which destroys $CD4^{+}$ cells) is so devastating.
      `
    },
    {
      id: 'imm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Helper T cells recognize antigens presented on which molecule?',
            options: [
              'MHC Class I',
              'MHC Class II',
              'Antibodies',
              'Complement proteins'
            ],
            correctAnswer: 1,
            explanation: '$CD4^{+}$ helper T cells specifically recognize antigen fragments displayed on MHC Class II molecules, which are found only on professional antigen-presenting cells (dendritic cells, macrophages, B cells).'
          },
          {
            question: 'Why does HIV infection lead to immunodeficiency?',
            options: [
              'HIV destroys B cells, preventing antibody production',
              'HIV destroys $CD4^{+}$ helper T cells, crippling immune coordination',
              'HIV attacks neutrophils, eliminating innate immunity',
              'HIV prevents the production of complement proteins'
            ],
            correctAnswer: 1,
            explanation: 'HIV specifically infects and destroys $CD4^{+}$ helper T cells. Since these cells coordinate both humoral and cell-mediated immunity, their loss leads to severe immunodeficiency (AIDS).'
          }
        ]
      }
    },
    {
      id: 'imm4-cytotoxic',
      type: 'text' as const,
      content: `
## Cytotoxic T Cells $(CD8^{+})$: The Killers

Cytotoxic T lymphocytes (CTLs) directly destroy infected, cancerous, or foreign cells.

### Activation & Killing

| Step | Process |
|------|---------|
| **1. Antigen recognition** | $CD8^{+}$ T cell recognizes foreign antigen on **MHC Class I** of an infected cell |
| **2. Co-stimulation** | Requires cytokines from helper T cells (especially IL-2) |
| **3. Clonal expansion** | Activated CTL divides to produce army of identical killers |
| **4. Target binding** | CTL binds tightly to the infected cell |
| **5. Killing** | CTL releases cytotoxic molecules to destroy the target |
| **6. Detachment** | CTL detaches and moves to next target (serial killing) |

### Killing Mechanisms
- **Perforin** — forms pores in the target cell membrane (like complement!)
- **Granzymes** — enter through perforin pores and trigger **apoptosis** (programmed cell death)
- **Fas-FasL pathway** — FasL on CTL binds Fas on target cell → activates caspases → apoptosis

> 🔑 CTLs kill via **apoptosis**, not necrosis. Apoptosis is "clean" — the cell packages its contents neatly for phagocytic cleanup, avoiding inflammation.
      `
    },
    {
      id: 'imm4-presentation',
      type: 'text' as const,
      content: `
## MHC I vs MHC II: Antigen Presentation Summary

| Feature | MHC Class I Pathway | MHC Class II Pathway |
|---------|---------------------|---------------------|
| **Source of antigen** | Intracellular (synthesized within the cell) | Extracellular (phagocytosed from outside) |
| **Processing** | Proteasome degrades cytoplasmic proteins | Lysosome degrades phagocytosed material |
| **Displayed on** | All nucleated cells | APCs only (dendritic cells, macrophages, B cells) |
| **Recognized by** | $CD8^{+}$ cytotoxic T cells | $CD4^{+}$ helper T cells |
| **Response** | Kill the infected cell | Activate and coordinate immune response |
| **Example** | Virus-infected cell displays viral peptides | Macrophage displays bacterial peptides after phagocytosis |

### Why Two Pathways?
- **MHC I** monitors what's happening **inside** every cell → detects viral infections, cancer
- **MHC II** reports what APCs have captured **outside** → activates helpers to coordinate response
- Together they ensure both intracellular and extracellular threats are detected

> 🔑 Think of MHC I as an "internal security camera" and MHC II as a "field report" brought back to headquarters.
      `
    },
    {
      id: 'imm4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Cytotoxic T cells express the co-receptor ___',
            options: ['CD4', 'CD8', 'CD28', 'CD3']
          },
          {
            label: 'Perforin creates ___ in the target cell membrane',
            options: ['antibodies', 'receptors', 'pores', 'antigens']
          },
          {
            label: 'Granzymes trigger ___ in the target cell',
            options: ['mitosis', 'necrosis', 'apoptosis', 'metastasis']
          },
          {
            label: 'MHC Class I presents antigens from ___ sources',
            options: ['extracellular', 'intracellular', 'dietary', 'commensal']
          }
        ],
        correctAnswers: ['CD8', 'pores', 'apoptosis', 'intracellular'],
        hint1: 'CTLs are also called $CD8^{+}$ T cells — the number refers to their co-receptor.',
        hint2: 'Perforin works similarly to the membrane attack complex (MAC) of complement.',
        hint3: 'Apoptosis is programmed, controlled cell death — no inflammatory spillage.',
        explanation: 'CD8 is the co-receptor on cytotoxic T cells that binds MHC Class I. Perforin punches pores in membranes, allowing granzymes to enter and activate caspases that trigger apoptosis. MHC I displays peptides from proteins made inside the cell (intracellular), which is how virus-infected cells are detected.'
      }
    },
    {
      id: 'imm4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Quick Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A cell infected with a virus would display viral peptides on:',
            options: [
              'MHC Class II, recognized by helper T cells',
              'MHC Class I, recognized by cytotoxic T cells',
              'Antibodies on the cell surface',
              'Toll-like receptors'
            ],
            correctAnswer: 1,
            explanation: 'Virus-infected cells produce viral proteins internally. The proteasome degrades these proteins into peptides, which are loaded onto MHC Class I and displayed on the cell surface for recognition by $CD8^{+}$ cytotoxic T cells.'
          },
          {
            question: 'Which of the following correctly describes the Fas-FasL pathway?',
            options: [
              'Fas on the CTL binds FasL on the target cell to trigger phagocytosis',
              'FasL on the CTL binds Fas on the target cell to trigger apoptosis',
              'Fas and FasL are both antibodies that neutralize pathogens',
              'The Fas-FasL pathway activates B cells to produce antibodies'
            ],
            correctAnswer: 1,
            explanation: 'FasL (Fas Ligand) on the surface of cytotoxic T cells binds to Fas (CD95) on the target cell. This interaction activates caspases inside the target cell, triggering programmed cell death (apoptosis).'
          }
        ]
      }
    }
  ]
}
