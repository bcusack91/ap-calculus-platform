export const bioImmuneSystemResponsePart3Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm3-intro',
      type: 'text' as const,
      content: `
# 💧 Humoral Immunity: The Antibody Response

**Humoral immunity** is the branch of adaptive immunity mediated by **B lymphocytes** and the **antibodies** they produce. The term "humoral" refers to body fluids (humors) where antibodies circulate.

### What You'll Learn
- B cell activation and clonal selection
- Plasma cells and antibody secretion
- Antibody structure: heavy chains, light chains, Fab, and Fc regions
- The five classes of antibodies and their functions
      `
    },
    {
      id: 'imm3-activation',
      type: 'text' as const,
      content: `
## B Cell Activation & Clonal Selection

### How B Cells Get Activated

**T-dependent activation** (most common):
1. B cell receptor (BCR) binds a specific antigen → B cell internalizes and processes it
2. B cell displays antigen fragments on **MHC Class II**
3. A **helper T cell (CD4⁺)** recognizes the antigen-MHC II complex
4. Helper T cell releases **cytokines** (e.g., IL-4, IL-5)
5. Cytokines stimulate B cell proliferation and differentiation

**T-independent activation** (less common):
- Some antigens (e.g., bacterial polysaccharides) directly activate B cells without T cell help
- Produces a weaker response with little immunological memory

### Clonal Selection Theory
| Step | What Happens |
|------|-------------|
| 1. **Encounter** | One B cell out of millions binds the matching antigen |
| 2. **Activation** | Antigen binding + T cell help activates that specific B cell |
| 3. **Proliferation** | Activated B cell divides rapidly (clonal expansion) |
| 4. **Differentiation** | Clones become **plasma cells** (antibody factories) or **memory B cells** |

> 🔑 Each B cell is specific for ONE epitope. Clonal selection ensures only relevant B cells expand — the antigen "selects" the clone.
      `
    },
    {
      id: 'imm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In T-dependent B cell activation, which cell provides the critical co-stimulatory signal?',
            options: [
              'Cytotoxic T cell (CD8⁺)',
              'Helper T cell (CD4⁺)',
              'Natural killer cell',
              'Dendritic cell'
            ],
            correctAnswer: 1,
            explanation: 'Helper T cells (CD4⁺) recognize antigens displayed on MHC II of the B cell and release cytokines that drive B cell activation, proliferation, and differentiation into plasma cells.'
          },
          {
            question: 'According to clonal selection theory, what determines which B cells will proliferate?',
            options: [
              'Random selection by the thymus',
              'The antigen that binds to a specific B cell receptor',
              'Helper T cells choose which B cells to activate',
              'All B cells proliferate equally during infection'
            ],
            correctAnswer: 1,
            explanation: 'Clonal selection means the antigen itself selects the B cell clone — only the B cell whose receptor specifically binds the antigen will be activated to proliferate and differentiate.'
          }
        ]
      }
    },
    {
      id: 'imm3-antibody',
      type: 'text' as const,
      content: `
## Antibody Structure

Antibodies (immunoglobulins) are **Y-shaped proteins** secreted by plasma cells:

### Basic Structure
| Component | Description |
|-----------|------------|
| **Heavy chains (2)** | Longer polypeptide chains forming the core of the Y |
| **Light chains (2)** | Shorter chains paired with the upper portion of each heavy chain |
| **Disulfide bonds** | Hold heavy and light chains together |
| **Variable (V) region** | Tips of the Y; unique antigen-binding site |
| **Constant (C) region** | Stem of the Y; determines antibody class and effector function |

### Functional Regions
| Region | Location | Function |
|--------|----------|----------|
| **Fab region** (Fragment antigen-binding) | Two arms of the Y | Binds specifically to epitopes; each antibody has 2 identical binding sites |
| **Fc region** (Fragment crystallizable) | Stem of the Y | Binds to immune cell receptors, activates complement, and crosses the placenta (IgG) |
| **Hinge region** | Where arms meet the stem | Provides flexibility for binding antigens at different angles |

> 🔑 The Fab region gives specificity (what the antibody binds). The Fc region determines function (what happens after binding).
      `
    },
    {
      id: 'imm3-classes',
      type: 'text' as const,
      content: `
## Five Classes of Antibodies

| Class | Structure | Location | Key Function |
|-------|-----------|----------|-------------|
| **IgG** | Monomer | Blood, tissue fluids | Most abundant (~80%); crosses placenta; opsonization; complement activation |
| **IgM** | Pentamer (5 units) | Blood | First antibody produced; very effective at agglutination |
| **IgA** | Dimer | Mucous membranes, saliva, breast milk, tears | Protects mucosal surfaces; passed to infant in breast milk |
| **IgE** | Monomer | Bound to mast cells & basophils | Triggers allergic responses; defends against parasitic worms |
| **IgD** | Monomer | B cell surface | Functions as B cell receptor; role in B cell activation |

### How Antibodies Fight Pathogens
- **Neutralization** — antibodies block pathogen binding sites, preventing infection
- **Opsonization** — antibodies coat pathogens, marking them for phagocytosis
- **Agglutination** — antibodies clump pathogens together for easier clearance
- **Complement activation** — Fc region triggers the complement cascade, lysing cells

> 🔑 Remember the order of appearance: **IgM** is produced first (M = "iMmediate"), then class switching produces **IgG** (the most abundant and long-lasting).
      `
    },
    {
      id: 'imm3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The antigen-binding region of an antibody is called the ___',
            options: ['Fc region', 'Fab region', 'hinge region', 'constant region']
          },
          {
            label: 'The first antibody class produced during an immune response is ___',
            options: ['IgG', 'IgA', 'IgM', 'IgE']
          },
          {
            label: 'Coating a pathogen with antibodies to enhance phagocytosis is called ___',
            options: ['neutralization', 'agglutination', 'opsonization', 'complement activation']
          },
          {
            label: 'The antibody class associated with allergic reactions is ___',
            options: ['IgG', 'IgA', 'IgM', 'IgE']
          }
        ],
        correctAnswers: ['Fab region', 'IgM', 'opsonization', 'IgE'],
        hint1: 'Fab stands for "Fragment antigen-binding."',
        hint2: 'Think M = iMmediate — IgM is the first responder antibody.',
        hint3: 'Opsonization comes from the Greek word meaning "to prepare for eating."',
        explanation: 'The Fab region contains the variable domains that bind antigens. IgM is the first antibody produced (and appears as a pentamer for high avidity). Opsonization coats pathogens to make them easier for phagocytes to engulf. IgE binds to mast cells and triggers histamine release during allergic reactions.'
      }
    }
  ]
}
