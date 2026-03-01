export const bioMacromoleculesPart5Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol5-na',
      type: 'text' as const,
      content: `
## Nucleic Acids: DNA & RNA

### Nucleotide Structure

Each nucleotide has three components:
1. **5-carbon sugar** (ribose in RNA, deoxyribose in DNA)
2. **Phosphate group** ($PO_4^{3-}$)
3. **Nitrogenous base**

### DNA vs. RNA

| Feature | DNA | RNA |
|---------|-----|-----|
| **Sugar** | Deoxyribose | Ribose |
| **Strands** | Double-stranded | Single-stranded |
| **Bases** | A, T, G, C | A, U, G, C |
| **Function** | Stores genetic info | Protein synthesis |
| **Location** | Nucleus | Nucleus + cytoplasm |

### Base Pairing Rules

- **DNA:** A=T (2 H-bonds), G≡C (3 H-bonds)
- **RNA:** A=U, G≡C

### Chargaff's Rules

In any DNA molecule: %A = %T and %G = %C

If a DNA sample is 30% adenine, then:
- %T = 30%, %G = 20%, %C = 20%
      `
    },
    {
      id: 'biol5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If a DNA strand is 22% guanine, what percentage is adenine?',
            options: [
              '22%',
              '28%',
              '44%',
              '78%'
            ],
            correctAnswer: 1,
            explanation: 'By Chargaff\'s rules: %G = %C = 22%. Total G+C = 44%. Remaining = 56%. %A = %T = 56%/2 = 28%.'
          }
        ]
      }
    },
    {
      id: 'biol5-bonding',
      type: 'text' as const,
      content: `
## Phosphodiester Bonds & Directionality

Nucleotides are linked by **phosphodiester bonds** between the 3' carbon of one sugar and the 5' carbon of the next.

- DNA strands run **antiparallel** (5'→3' and 3'→5')
- New nucleotides are always added to the **3' end**
- The sugar-phosphate backbone is on the outside
- The bases are on the inside, forming complementary pairs

This directionality is crucial for replication and transcription.
      `
    },
    {
      id: 'biol5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which bond links nucleotides in a nucleic acid strand?',
            options: [
              'Peptide bond',
              'Glycosidic bond',
              'Phosphodiester bond',
              'Hydrogen bond'
            ],
            correctAnswer: 2,
            explanation: 'Phosphodiester bonds link the 3\' carbon of one sugar to the 5\' carbon of the next nucleotide, forming the backbone.'
          }
        ]
      }
    },
    {
      id: 'biol5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA uses ___ while RNA uses uracil',
            options: ['adenine', 'thymine', 'guanine', 'cytosine']
          },
          {
            label: 'DNA strands run in ___ directions',
            options: ['parallel', 'antiparallel', 'perpendicular', 'random']
          },
          {
            label: 'New nucleotides are added to the ___ end',
            options: ['5\'', '3\'', 'both', 'neither']
          }
        ],
        correctAnswers: ['thymine', 'antiparallel', '3\''],
        hint1: 'This base is unique to DNA.',
        hint2: 'One strand is 5\'→3\', the other is 3\'→5\'.',
        hint3: 'DNA polymerase adds to one specific end.',
        explanation: 'Thymine is unique to DNA (RNA uses uracil). DNA strands are antiparallel. New nucleotides are added to the 3\' end.'
      }
    }
  ]
}
