export const bioImmuneSystemResponsePart5Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm5-intro',
      type: 'text' as const,
      content: `
# 🧠 Immune Memory: Why You Don't Get Sick Twice

One of the most remarkable features of adaptive immunity is **immunological memory** — the ability to "remember" previously encountered pathogens and mount a faster, stronger response upon re-exposure. This is the basis for **vaccination**.

### What You'll Learn
- Primary vs secondary immune response
- Memory B cells and memory T cells
- Active vs passive immunity
- How vaccines work and herd immunity
      `
    },
    {
      id: 'imm5-responses',
      type: 'text' as const,
      content: `
## Primary vs Secondary Immune Response

| Feature | Primary Response | Secondary Response |
|---------|-----------------|-------------------|
| **Trigger** | First exposure to antigen | Second (or subsequent) exposure |
| **Lag time** | 10–17 days to peak antibody levels | 2–7 days to peak (much faster) |
| **Antibody level** | Lower peak concentration | Much higher peak (10–100× more) |
| **Duration** | Shorter-lived response | Longer-lasting protection |
| **Dominant antibody** | IgM produced first, then IgG | Mainly IgG (already class-switched) |
| **Cells involved** | Naive lymphocytes | Memory B and T cells |
| **Affinity** | Lower-affinity antibodies | Higher-affinity antibodies (affinity maturation) |

### Why Is the Secondary Response Better?
1. **More cells** — clonal expansion during primary response leaves behind a large pool of memory cells
2. **Faster activation** — memory cells require less co-stimulation and respond more quickly
3. **Better antibodies** — affinity maturation produces antibodies that bind antigens more tightly
4. **Already class-switched** — memory B cells immediately produce IgG instead of starting with IgM

> 🔑 This is why you typically only get diseases like measles or chickenpox once — your memory cells neutralize the pathogen before symptoms develop.
      `
    },
    {
      id: 'imm5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During a secondary immune response, peak antibody levels are reached in approximately:',
            options: [
              '1–2 hours',
              '2–7 days',
              '10–17 days',
              '4–6 weeks'
            ],
            correctAnswer: 1,
            explanation: 'The secondary response peaks in 2–7 days, compared to 10–17 days for the primary response. This is because memory cells are already primed and present in greater numbers.'
          },
          {
            question: 'Which process improves antibody binding strength between the primary and secondary response?',
            options: [
              'Clonal deletion',
              'Negative selection',
              'Affinity maturation',
              'Complement activation'
            ],
            correctAnswer: 2,
            explanation: 'Affinity maturation occurs through somatic hypermutation in germinal centers. B cells with higher-affinity receptors are preferentially selected, resulting in antibodies that bind antigens more tightly in subsequent responses.'
          }
        ]
      }
    },
    {
      id: 'imm5-memory-cells',
      type: 'text' as const,
      content: `
## Memory B Cells and Memory T Cells

### Memory B Cells
- Formed during the primary response alongside plasma cells
- **Long-lived** (can persist for decades)
- Express high-affinity, class-switched antibodies (usually IgG) as surface receptors
- Upon re-exposure, rapidly differentiate into **plasma cells** producing large amounts of antibody

### Memory T Cells
- Both CD4⁺ and CD8⁺ T cells can become memory cells
- Divided into subtypes:

| Subtype | Location | Function |
|---------|----------|----------|
| **Central memory T cells (Tcm)** | Lymph nodes, spleen | Rapidly proliferate upon re-stimulation |
| **Effector memory T cells (Tem)** | Tissues, blood | Immediately perform effector functions at infection sites |
| **Tissue-resident memory T cells (Trm)** | Specific tissues (e.g., skin, lungs) | Provide rapid local immune response |

> 🔑 Memory cells are the cellular basis of vaccination — they persist long after the initial infection or vaccine, ready to mount a rapid response.
      `
    },
    {
      id: 'imm5-immunity-types',
      type: 'text' as const,
      content: `
## Active vs Passive Immunity

| Feature | Active Immunity | Passive Immunity |
|---------|----------------|-----------------|
| **How acquired** | Exposure to antigen (infection or vaccine) | Receiving pre-formed antibodies |
| **Immune response** | Body mounts its own response | No immune response by recipient |
| **Memory formed?** | Yes — long-lasting protection | No — protection is temporary |
| **Time to protect** | Days to weeks | Immediate |
| **Duration** | Years to lifetime | Weeks to months |

### Examples

| Type | Natural | Artificial |
|------|---------|-----------|
| **Active** | Recovering from an infection | Vaccination |
| **Passive** | Maternal antibodies (IgG via placenta; IgA via breast milk) | Injection of antiserum or monoclonal antibodies |

### How Vaccines Work
- Expose the immune system to a **harmless form** of the pathogen (weakened, killed, or subunit)
- Triggers a **primary immune response** → generates memory cells
- Upon real infection, memory cells mount a **rapid secondary response**

### Herd Immunity
- When a large enough percentage of a population is immune, the pathogen cannot spread effectively
- Protects individuals who **cannot** be vaccinated (infants, immunocompromised)
- Threshold varies by disease: measles requires ~95%, polio ~80–85%

> 🔑 Herd immunity does NOT mean unvaccinated individuals are immune — it means they're less likely to encounter the pathogen.
      `
    },
    {
      id: 'imm5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The secondary immune response is dominated by the antibody class ___',
            options: ['IgM', 'IgA', 'IgG', 'IgE']
          },
          {
            label: 'A newborn receiving IgA antibodies through breast milk is an example of ___ immunity',
            options: ['natural active', 'artificial active', 'natural passive', 'artificial passive']
          },
          {
            label: 'Vaccines generate protection by creating ___',
            options: ['plasma cells only', 'memory cells', 'innate barriers', 'complement proteins']
          },
          {
            label: 'Herd immunity protects ___ individuals who cannot be vaccinated',
            options: ['no', 'only young', 'vulnerable', 'all']
          }
        ],
        correctAnswers: ['IgG', 'natural passive', 'memory cells', 'vulnerable'],
        hint1: 'IgG is the most abundant antibody and dominates after class switching.',
        hint2: 'Passive = receiving antibodies. Natural = no medical intervention.',
        hint3: 'Memory cells are the key product of vaccination — they enable rapid secondary responses.',
        explanation: 'The secondary response is dominated by IgG due to class switching. Breast milk IgA transfer is natural passive immunity (no antigen exposure for infant). Vaccines work by generating long-lived memory B and T cells. Herd immunity reduces pathogen circulation, indirectly protecting vulnerable individuals who cannot receive vaccines.'
      }
    },
    {
      id: 'imm5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Quick Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A patient bitten by a venomous snake is given antivenom containing pre-formed antibodies. This is an example of:',
            options: [
              'Natural active immunity',
              'Artificial active immunity',
              'Natural passive immunity',
              'Artificial passive immunity'
            ],
            correctAnswer: 3,
            explanation: 'Antivenom contains pre-formed antibodies (passive) administered through medical intervention (artificial). It provides immediate but temporary protection. No memory cells are formed.'
          },
          {
            question: 'Measles requires approximately 95% population immunity for herd immunity. If vaccination rates drop to 85%, what is the most likely consequence?',
            options: [
              'Nothing changes — 85% is sufficient for herd immunity',
              'Only vaccinated individuals can get infected',
              'Outbreaks become possible because the herd immunity threshold is not met',
              'The virus mutates and becomes resistant to vaccines'
            ],
            correctAnswer: 2,
            explanation: 'When vaccination rates fall below the herd immunity threshold, enough susceptible individuals exist for the pathogen to spread. This can lead to outbreaks, particularly among unvaccinated populations.'
          }
        ]
      }
    }
  ]
}
