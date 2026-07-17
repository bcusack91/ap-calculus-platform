export const bioImmuneSystemResponsePart2Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm2-intro',
      type: 'text' as const,
      content: `
# 🎯 Adaptive Immunity: Targeted Defense

Unlike innate immunity, the **adaptive (acquired) immune system** mounts a specific response against particular pathogens. It takes days to activate on first exposure but produces **immunological memory** for faster future responses.

### What You'll Learn
- Antigens and epitopes
- B lymphocytes vs T lymphocytes
- MHC proteins and self vs non-self recognition
- How the adaptive system communicates with innate immunity
      `
    },
    {
      id: 'imm2-antigens',
      type: 'text' as const,
      content: `
## Antigens & Epitopes

| Term | Definition |
|------|-----------|
| **Antigen** | Any molecule that can be recognized by the adaptive immune system |
| **Epitope** | The specific region of an antigen that an antibody or receptor binds to |
| **Immunogen** | An antigen that actually triggers an immune response |
| **Hapten** | A small molecule that is antigenic only when attached to a larger carrier protein |

### Key Points
- A single pathogen has **many antigens** on its surface
- Each antigen may have **multiple epitopes**
- The immune system recognizes epitopes, not whole organisms
- Self-antigens are tolerated; foreign antigens trigger responses

> 🔑 The incredible diversity of the adaptive immune system comes from **V(D)J recombination** — random rearrangement of gene segments that generates millions of unique antigen receptors.
      `
    },
    {
      id: 'imm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is an epitope?',
            options: [
              'A type of white blood cell',
              'The specific part of an antigen that is recognized by immune receptors',
              'A chemical signal released during inflammation',
              'A type of antibody'
            ],
            correctAnswer: 1,
            explanation: 'An epitope (antigenic determinant) is the specific molecular shape on an antigen that is recognized and bound by antibodies or T cell receptors.'
          },
          {
            question: 'Which process generates the enormous diversity of lymphocyte receptors?',
            options: [
              'Mitosis',
              'Meiosis and crossing over',
              'V(D)J recombination',
              'Point mutations during translation'
            ],
            correctAnswer: 2,
            explanation: 'V(D)J recombination randomly assembles variable (V), diversity (D), and joining (J) gene segments during lymphocyte development, creating millions of unique receptor specificities.'
          }
        ]
      }
    },
    {
      id: 'imm2-lymphocytes',
      type: 'text' as const,
      content: `
## B Cells vs T Cells

Both B and T lymphocytes originate from **hematopoietic stem cells** in the bone marrow, but they mature in different locations:

| Feature | B Lymphocytes | T Lymphocytes |
|---------|--------------|---------------|
| **Maturation site** | Bone marrow | Thymus |
| **Receptor** | B cell receptor (BCR) / membrane-bound antibody | T cell receptor (TCR) |
| **Antigen recognition** | Binds free (soluble) antigens directly | Binds antigen fragments presented on MHC |
| **Main subtypes** | Plasma cells, memory B cells | Helper T $(CD4^{+})$, Cytotoxic T $(CD8^{+})$, Regulatory T |
| **Primary function** | Produce antibodies (humoral immunity) | Cell-mediated immunity; activate other immune cells |

### Lymphocyte Development
1. **Bone marrow** — both B and T cell precursors are produced
2. **Thymus** — T cells undergo positive and negative selection
3. **Positive selection** — T cells that can bind MHC survive
4. **Negative selection** — T cells that bind self-antigens too strongly are eliminated (prevents autoimmunity)
5. **Mature lymphocytes** circulate through blood, lymph, and secondary lymphoid organs (spleen, lymph nodes)
      `
    },
    {
      id: 'imm2-mhc',
      type: 'text' as const,
      content: `
## MHC Proteins: Self vs Non-Self

**Major Histocompatibility Complex (MHC)** proteins are cell-surface molecules that display antigen fragments to T cells.

| Feature | MHC Class I | MHC Class II |
|---------|------------|-------------|
| **Found on** | All nucleated cells | Antigen-presenting cells (APCs): dendritic cells, macrophages, B cells |
| **Displays** | Intracellular antigen fragments (from within the cell) | Extracellular antigen fragments (from phagocytosed pathogens) |
| **Recognized by** | $CD8^{+}$ cytotoxic T cells | $CD4^{+}$ helper T cells |
| **Function** | Flags infected or abnormal cells for killing | Activates helper T cells to coordinate immune response |

### Self vs Non-Self Recognition
- Every person has a **unique set of MHC molecules** (also called HLA in humans)
- MHC normally displays fragments of self-proteins → immune system ignores
- When a cell is infected, MHC displays **foreign peptides** → T cell activation
- This is why organ transplants require MHC matching — mismatched MHC triggers rejection

> 🔑 MHC Class I = "license plate" showing what's happening INSIDE the cell. MHC Class II = "wanted poster" showing what APCs have captured from OUTSIDE.
      `
    },
    {
      id: 'imm2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'T cells mature in the ___',
            options: ['bone marrow', 'thymus', 'spleen', 'liver']
          },
          {
            label: 'MHC Class I molecules are found on ___',
            options: ['only macrophages', 'only T cells', 'all nucleated cells', 'red blood cells']
          },
          {
            label: 'B cells recognize antigens ___ whereas T cells require antigen presentation on ___',
            options: ['directly / MHC', 'on MHC / directly', 'inside cells / outside cells', 'in the thymus / in the spleen']
          }
        ],
        correctAnswers: ['thymus', 'all nucleated cells', 'directly / MHC'],
        hint1: 'The "T" in T cell stands for the organ where they mature.',
        hint2: 'MHC I is expressed on virtually every cell with a nucleus in the body.',
        hint3: 'BCRs bind free-floating antigens; TCRs only recognize antigen-MHC complexes.',
        explanation: 'T cells mature in the thymus. MHC Class I is expressed on all nucleated cells (not RBCs, which lack a nucleus). B cells can directly bind soluble antigens, while T cells require antigen fragments to be presented on MHC molecules.'
      }
    },
    {
      id: 'imm2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Quick Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During negative selection in the thymus, T cells that strongly bind self-antigens are:',
            options: [
              'Released into circulation as regulatory T cells',
              'Eliminated by apoptosis to prevent autoimmunity',
              'Converted into B cells',
              'Sent back to bone marrow for further maturation'
            ],
            correctAnswer: 1,
            explanation: 'Negative selection eliminates self-reactive T cells through apoptosis (programmed cell death). This is a critical mechanism of central tolerance that prevents autoimmune reactions.'
          },
          {
            question: 'A macrophage that has phagocytosed a bacterium would display bacterial fragments on:',
            options: [
              'MHC Class I only',
              'MHC Class II only',
              'Both MHC Class I and Class II',
              'Neither — macrophages do not present antigens'
            ],
            correctAnswer: 1,
            explanation: 'Macrophages are professional antigen-presenting cells (APCs) that display fragments of phagocytosed extracellular pathogens on MHC Class II molecules, which are then recognized by $CD4^{+}$ helper T cells.'
          }
        ]
      }
    }
  ]
}
