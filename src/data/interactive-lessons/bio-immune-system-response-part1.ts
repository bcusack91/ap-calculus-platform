export const bioImmuneSystemResponsePart1Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm1-intro',
      type: 'text' as const,
      content: `
# 🛡️ Innate Immunity: The First Line of Defense

Your body is under constant assault from bacteria, viruses, fungi, and parasites. The **innate immune system** provides immediate, nonspecific protection that you're born with.

### What You'll Learn
- Physical and chemical barriers to infection
- Cells of the innate immune system
- The inflammatory response
- Role of fever in fighting infection
      `
    },
    {
      id: 'imm1-barriers',
      type: 'text' as const,
      content: `
## Physical & Chemical Barriers

The first line of defense prevents pathogens from entering the body:

| Barrier | Type | How It Works |
|---------|------|-------------|
| **Skin** | Physical | Keratinized epithelium blocks entry |
| **Mucous membranes** | Physical/Chemical | Trap pathogens; mucus contains lysozyme |
| **Stomach acid** | Chemical | pH ~2 destroys most ingested microbes |
| **Tears & saliva** | Chemical | Contain lysozyme that digests bacterial walls |
| **Normal flora** | Biological | Commensal bacteria outcompete pathogens |
| **Cilia** | Physical | Sweep mucus and trapped particles out of airways |

> 🔑 These barriers are always active — they don't require prior exposure to a pathogen.
      `
    },
    {
      id: 'imm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a chemical barrier of innate immunity?',
            options: [
              'Keratinized skin cells',
              'Lysozyme in tears',
              'Cilia in the trachea',
              'Tight junctions between epithelial cells'
            ],
            correctAnswer: 1,
            explanation: 'Lysozyme is an enzyme that chemically destroys bacterial cell walls. Skin, cilia, and tight junctions are physical barriers.'
          },
          {
            question: 'Normal flora (commensal bacteria) protect against infection by:',
            options: [
              'Producing antibodies',
              'Activating T cells',
              'Competing with pathogens for resources and space',
              'Raising body temperature'
            ],
            correctAnswer: 2,
            explanation: 'Normal flora occupy niches and consume nutrients, making it difficult for pathogenic bacteria to colonize — this is called competitive exclusion.'
          }
        ]
      }
    },
    {
      id: 'imm1-cells',
      type: 'text' as const,
      content: `
## Cells of Innate Immunity

When barriers are breached, cellular defenders respond:

| Cell Type | Function |
|-----------|----------|
| **Neutrophils** | Most abundant WBC; first responders; phagocytose bacteria |
| **Macrophages** | Phagocytose pathogens; present antigens to adaptive system |
| **Dendritic cells** | Capture antigens in tissues; migrate to lymph nodes to activate T cells |
| **Natural Killer (NK) cells** | Kill virus-infected cells and tumor cells (without prior activation) |
| **Mast cells** | Release histamine; trigger inflammatory response |
| **Eosinophils** | Target parasites and modulate allergic responses |

### Phagocytosis in Action
1. Phagocyte recognizes pathogen via pattern recognition receptors (PRRs)
2. Engulfs pathogen in a phagosome
3. Phagosome fuses with lysosome → phagolysosome
4. Digestive enzymes and reactive oxygen species destroy pathogen
5. Fragments displayed on cell surface (antigen presentation)
      `
    },
    {
      id: 'imm1-inflammation',
      type: 'text' as const,
      content: `
## The Inflammatory Response

Inflammation is a critical innate response to tissue damage or infection:

### Steps of Inflammation
1. **Tissue damage** releases chemical signals (histamine, prostaglandins)
2. **Vasodilation** — blood vessels widen, increasing blood flow (causes redness and heat)
3. **Increased permeability** — vessel walls become leaky, allowing WBCs and plasma to enter tissue (causes swelling)
4. **Phagocyte recruitment** — neutrophils and macrophages migrate to the site (chemotaxis)
5. **Phagocytosis** — immune cells engulf and destroy pathogens
6. **Tissue repair** begins as infection is cleared

### Cardinal Signs of Inflammation
- **Redness** (rubor) — increased blood flow
- **Heat** (calor) — increased blood flow + metabolic activity
- **Swelling** (tumor) — fluid accumulation in tissue
- **Pain** (dolor) — pressure on nerve endings + chemical mediators

### Fever
- Triggered by pyrogens (from pathogens or immune cells)
- Elevates body temperature above normal (~37°C)
- Benefits: inhibits pathogen growth, enhances phagocyte activity, speeds up metabolic repair
      `
    },
    {
      id: 'imm1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The most abundant white blood cell type is the ___',
            options: ['macrophage', 'neutrophil', 'eosinophil', 'lymphocyte']
          },
          {
            label: 'Histamine causes ___ of blood vessels',
            options: ['constriction', 'dilation', 'destruction', 'clotting']
          },
          {
            label: 'NK cells are part of the ___ immune system',
            options: ['adaptive', 'innate', 'humoral', 'passive']
          }
        ],
        correctAnswers: ['neutrophil', 'dilation', 'innate'],
        hint1: 'Neutrophils make up 60-70% of circulating white blood cells.',
        hint2: 'Dilation increases blood flow, bringing more immune cells to the site.',
        hint3: 'NK cells do not require prior exposure to act — they are innate.',
        explanation: 'Neutrophils are the first responders and most numerous WBCs. Histamine causes vasodilation (widening of blood vessels). NK cells are innate immune cells that recognize and kill infected cells without prior sensitization.'
      }
    }
  ]
}
