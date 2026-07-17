export const bioOriginsOfLifePart5Data = {
  topicSlug: 'origins-of-life',
  sections: [
    {
      id: 'ori5-intro',
      type: 'text' as const,
      content: `
## Endosymbiotic Theory

**Part 5 of 7**

The endosymbiotic theory explains one of the most important events in the history of life: the origin of **eukaryotic cells**. Proposed by **Lynn Margulis** in 1967 (initially rejected and ridiculed), this theory is now supported by overwhelming evidence and is a staple of the AP Biology curriculum.

### The Core Idea

Mitochondria and chloroplasts were once **free-living prokaryotes** that were engulfed by an ancestral host cell. Instead of being digested, they became **endosymbionts** — living inside the host cell in a mutually beneficial relationship.

### Key terms for this part
- **endosymbiosis** — one organism living inside another in a mutually beneficial relationship
- **endosymbiotic theory** — mitochondria and chloroplasts originated from engulfed prokaryotes
- **Lynn Margulis** — biologist who championed the endosymbiotic theory (1967 paper)
- **alpha-proteobacteria** — the bacterial group ancestral to mitochondria
- **cyanobacteria** — photosynthetic bacteria ancestral to chloroplasts
      `
    },
    {
      id: 'ori5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Endosymbiosis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to endosymbiotic theory, mitochondria are descended from:',
            options: [
              'Free-living aerobic alpha-proteobacteria',
              'Anaerobic archaea',
              'Photosynthetic cyanobacteria',
              'Eukaryotic cell fragments'
            ],
            correctAnswer: 0,
            explanation: 'Mitochondria are descended from aerobic alpha-proteobacteria that were engulfed by an ancestral host cell. Phylogenetic analysis of mitochondrial DNA confirms their close relationship to modern alpha-proteobacteria (e.g., Rickettsia).'
          },
          {
            question: 'Which scientist is most associated with proposing the endosymbiotic theory?',
            options: [
              'Lynn Margulis',
              'Charles Darwin',
              'Stanley Miller',
              'Alexander Oparin'
            ],
            correctAnswer: 0,
            explanation: 'Lynn Margulis published her landmark paper in 1967 (originally under the name Lynn Sagan). Her work was initially rejected by 15 journals before publication. The evidence has since become overwhelming.'
          }
        ]
      }
    },
    {
      id: 'ori5-content2',
      type: 'text' as const,
      content: `
## Evidence for Endosymbiotic Theory

This is one of the **most heavily tested topics** on the AP Biology exam. You must know all lines of evidence.

### The Six Key Lines of Evidence

| Evidence | Mitochondria | Chloroplasts | Why It Matters |
|---|---|---|---|
| **Double membrane** | ✅ Inner = original bacterial membrane; Outer = host's engulfing vesicle | ✅ Same pattern | Consistent with engulfment by phagocytosis |
| **Own circular DNA** | ✅ Small, circular chromosome (like bacteria) | ✅ Small, circular chromosome | Not integrated into the host nucleus |
| **70S ribosomes** | ✅ Bacterial-size (not 80S like eukaryotic cytoplasm) | ✅ Same | Translate their own proteins |
| **Binary fission** | ✅ Divide independently of host cell division | ✅ Same | Reproduce like bacteria |
| **Size** | ~1–2 μm (bacterial size) | ~2–5 μm (cyanobacterial size) | Match the size of free-living relatives |
| **Phylogenetic analysis** | DNA sequences closely match alpha-proteobacteria | DNA sequences closely match cyanobacteria | Molecular evidence confirms ancestry |

### Additional Supporting Evidence

- Mitochondria and chloroplasts **cannot be created de novo** — they must arise from pre-existing organelles
- Their DNA uses a slightly different genetic code than the nuclear genome
- They have their own **transcription and translation machinery**
- **Cardiolipin** (a lipid found in bacterial membranes) is present in the inner mitochondrial membrane
- Some protists (e.g., *Paulinella*) have **recently acquired** cyanobacterial endosymbionts, showing the process can still occur
      `
    },
    {
      id: 'ori5-content3',
      type: 'text' as const,
      content: `
## The Sequence of Endosymbiotic Events

### Step-by-Step Model

1. **Ancestral host cell** — a large anaerobic archaeon or early eukaryote capable of phagocytosis (engulfing other cells)

2. **First endosymbiosis (mitochondria)**:
   - Host engulfs an aerobic alpha-proteobacterium
   - Instead of being digested, the bacterium survives inside
   - Bacterium provides **aerobic respiration** (ATP production using $O_{2}$)
   - Host provides **protection and nutrients**
   - Over time, many bacterial genes transfer to the host nucleus → organelle becomes dependent on host
   - Result: **all eukaryotes have mitochondria** (or reduced versions called hydrogenosomes/mitosomes)

3. **Second endosymbiosis (chloroplasts)**:
   - A mitochondria-containing eukaryote engulfs a **photosynthetic cyanobacterium**
   - Cyanobacterium provides **photosynthesis** (converts light energy to chemical energy)
   - Gene transfer to nucleus occurs again
   - Result: the lineage leading to **plants and green algae**

### Key Implication

Because the mitochondrial endosymbiosis occurred **first** and is found in **all eukaryotes**, while the chloroplast endosymbiosis occurred **second** and is found only in **photosynthetic eukaryotes**, we know:

- All eukaryotes share a common ancestor that had mitochondria
- Photosynthetic eukaryotes are a **subset** of all eukaryotes
      `
    },
    {
      id: 'ori5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Endosymbiosis Evidence** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mitochondria have ___ ribosomes, the same size as bacterial ribosomes.',
            options: ['70S', '80S', '60S', '40S']
          },
          {
            label: 'The double membrane of mitochondria is explained by the inner membrane being the original ___ membrane.',
            options: ['bacterial', 'nuclear', 'endoplasmic reticulum', 'Golgi']
          },
          {
            label: 'Chloroplasts are descended from photosynthetic ___ that were engulfed by a eukaryotic host.',
            options: ['cyanobacteria', 'alpha-proteobacteria', 'archaea', 'fungi']
          },
          {
            label: 'Mitochondria and chloroplasts divide by ___, just like bacteria.',
            options: ['binary fission', 'mitosis', 'meiosis', 'budding']
          }
        ],
        correctAnswers: ['70S', 'bacterial', 'cyanobacteria', 'binary fission'],
        hint1: 'Eukaryotic cytoplasmic ribosomes are 80S; organellar ribosomes match the prokaryotic size.',
        hint2: 'When a cell engulfs another by phagocytosis, the engulfed cell retains its own membrane and gains a second from the host vesicle.',
        hint3: 'These are the prokaryotes responsible for oxygenic photosynthesis — they produced Earth\'s $O_{2}$.',
        hint4: 'This is the asexual reproductive method used by prokaryotes — no spindle apparatus involved.',
        explanation: 'Mitochondria and chloroplasts retain 70S ribosomes, have double membranes (inner = original bacterial membrane), descended from alpha-proteobacteria and cyanobacteria respectively, and divide by binary fission — all hallmarks of their prokaryotic ancestry.'
      }
    },
    {
      id: 'ori5-summary',
      type: 'text' as const,
      content: `
## Summary — Part 5

- **Endosymbiotic theory** (Lynn Margulis, 1967): mitochondria and chloroplasts were once free-living prokaryotes
- **Mitochondria** ← aerobic alpha-proteobacteria (first endosymbiosis, all eukaryotes)
- **Chloroplasts** ← photosynthetic cyanobacteria (second endosymbiosis, plants/algae only)
- **Six key lines of evidence** (AP exam favorites):
  1. Double membrane
  2. Own circular DNA
  3. 70S ribosomes
  4. Binary fission
  5. Bacterial size
  6. Phylogenetic match to specific bacterial groups
- Gene transfer from organelle → nucleus made organelles dependent on host
- This is among the **most frequently tested** topics in AP Biology

**Next up:** Part 6 — Major Evolutionary Transitions
      `
    }
  ]
};
