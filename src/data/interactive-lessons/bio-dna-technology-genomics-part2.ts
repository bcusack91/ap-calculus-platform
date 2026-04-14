export const bioDnaTechnologyGenomicsPart2Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna2-intro',
      type: 'text' as const,
      content: `
## Polymerase Chain Reaction (PCR)

**Part 2 of 7 — DNA Technology & Genomics**

PCR is a technique that amplifies a specific DNA sequence **exponentially**, producing millions of copies from a tiny starting sample.

### Components of PCR

| Component | Role |
|-----------|------|
| **Template DNA** | The DNA containing the target sequence to be copied |
| **Primers** | Short synthetic oligonucleotides (~18–25 nt) complementary to flanking regions |
| **Taq polymerase** | Heat-stable DNA polymerase from *Thermus aquaticus* |
| **dNTPs** | Free deoxynucleotide triphosphates (dATP, dTTP, dGTP, dCTP) |
| **Buffer + Mg²⁺** | Maintains optimal pH and cofactor concentration |

### Why Taq Polymerase?

Taq polymerase is isolated from thermophilic bacteria that live in hot springs. Its key advantage: it **remains active at 95°C**, unlike human or *E. coli* polymerases that would denature. This means you don't have to add fresh enzyme after every denaturation step.
      `
    },
    {
      id: 'dna2-steps-text',
      type: 'text' as const,
      content: `
### The Three Steps of Each PCR Cycle

Each cycle has three temperature-dependent steps:

#### 1. Denaturation (94–98°C, ~30 sec)
- Heat separates the double-stranded DNA into **two single strands**.
- Hydrogen bonds between base pairs are disrupted.

#### 2. Annealing (50–65°C, ~30 sec)
- Temperature is lowered so **primers bind** (anneal) to their complementary sequences on the template strands.
- Primer design determines specificity — primers must be complementary to sequences flanking the target region.

#### 3. Extension (72°C, ~1 min per kb)
- **Taq polymerase synthesizes** new DNA strands by adding dNTPs in the 5′→3′ direction, starting from the 3′ end of each primer.

### Exponential Amplification

After $n$ cycles, the number of copies of the target sequence is:

$$N = N_0 \\times 2^n$$

where $N_0$ is the initial number of template molecules.

| Cycle | Copies (starting from 1) |
|-------|--------------------------|
| 1 | 2 |
| 5 | 32 |
| 10 | 1,024 |
| 20 | ~1 million |
| 30 | ~1 billion |

### Primer Design Rules

- Typically **18–25 nucleotides** long
- ~50% GC content for stable binding
- Must flank the target region on **opposite strands**
- Forward primer binds the 3′→5′ (antisense) strand
- Reverse primer binds the 5′→3′ (sense) strand
      `
    },
    {
      id: 'dna2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — PCR Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the purpose of the denaturation step in PCR?',
            options: [
              'To separate double-stranded DNA into single strands by breaking hydrogen bonds',
              'To allow primers to bind to complementary sequences on the template',
              'To activate Taq polymerase for DNA synthesis',
              'To cool the reaction so that new DNA strands can form'
            ],
            correctAnswer: 0,
            explanation: 'Denaturation at 94–98°C disrupts the hydrogen bonds between complementary base pairs, separating the double-stranded DNA into two single strands that can each serve as templates.'
          },
          {
            question: 'A PCR reaction begins with 1 copy of template DNA. After 20 cycles, approximately how many copies of the target sequence are present?',
            options: [
              'About 1 million (2²⁰ = 1,048,576)',
              'About 20 (one per cycle)',
              'About 40 (two per cycle)',
              'About 1 billion (2³⁰)'
            ],
            correctAnswer: 0,
            explanation: 'PCR amplification is exponential. After n cycles, the number of copies = 2ⁿ. After 20 cycles: 2²⁰ = 1,048,576 ≈ 1 million copies.'
          }
        ]
      }
    },
    {
      id: 'dna2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Taq & Primers** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why is Taq polymerase essential for PCR rather than a typical E. coli DNA polymerase?',
            options: [
              'Taq polymerase is thermostable and survives the high-temperature denaturation step',
              'Taq polymerase has proofreading (3′→5′ exonuclease) activity',
              'Taq polymerase can synthesize RNA as well as DNA',
              'Taq polymerase does not require primers to initiate synthesis'
            ],
            correctAnswer: 0,
            explanation: 'Taq polymerase comes from the thermophilic bacterium Thermus aquaticus and remains functional at 95°C. Standard polymerases would denature at these temperatures, requiring addition of fresh enzyme each cycle.'
          },
          {
            question: 'Which statement about PCR primers is correct?',
            options: [
              'Two primers are needed — one for each strand — flanking the target region',
              'A single primer is sufficient because Taq polymerase can synthesize in both directions',
              'Primers must be at least 50 nucleotides long for specificity',
              'Primers bind during the denaturation step at 95°C'
            ],
            correctAnswer: 0,
            explanation: 'PCR requires a forward and a reverse primer, each complementary to one strand of the template, positioning themselves on opposite sides of the target sequence. They bind during the annealing step at 50–65°C.'
          }
        ]
      }
    },
    {
      id: 'dna2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — PCR** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'During the denaturation step, DNA is heated to ~95°C to break _____ bonds.',
            options: ['hydrogen', 'covalent', 'ionic', 'peptide']
          },
          {
            label: 'Primers anneal to the template during the _____ step.',
            options: ['annealing', 'denaturation', 'extension', 'ligation']
          },
          {
            label: 'Taq polymerase synthesizes new DNA in the _____ direction.',
            options: ["5′→3′", "3′→5′", "both directions simultaneously", "random direction"]
          },
          {
            label: 'After 30 cycles starting from one template molecule, PCR produces approximately _____ copies.',
            options: ['1 billion', '30', '1 million', '1 thousand']
          }
        ],
        correctAnswers: ['hydrogen', 'annealing', "5′→3′", '1 billion'],
        hint1: 'The bonds holding the two DNA strands together are not covalent — they are weaker interactions between bases.',
        hint2: 'Each PCR cycle has three named steps: denaturation, annealing, and extension.',
        hint3: 'All known DNA polymerases synthesize in one direction only. 2³⁰ ≈ 1.07 × 10⁹.',
        explanation: 'Denaturation breaks hydrogen bonds between base pairs. Primers anneal (bind) during the annealing step at lower temperature. Taq polymerase, like all DNA polymerases, synthesizes 5′→3′. After 30 cycles: 2³⁰ ≈ 1 billion copies.'
      }
    },
    {
      id: 'dna2-summary',
      type: 'text' as const,
      content: `
### Part 2 Summary

| Concept | Key Detail |
|---------|-----------|
| PCR purpose | Amplify a specific DNA sequence exponentially |
| Denaturation | 94–98°C — separate strands |
| Annealing | 50–65°C — primers bind template |
| Extension | 72°C — Taq polymerase synthesizes new strands (5′→3′) |
| Taq polymerase | Thermostable enzyme from *Thermus aquaticus* |
| Amplification | $N = N_0 \\times 2^n$ copies after $n$ cycles |

**Up next → Part 3: Gene Cloning & Recombinant DNA**
      `
    }
  ]
};
