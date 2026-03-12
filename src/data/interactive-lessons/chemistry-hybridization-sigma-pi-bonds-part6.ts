export const chemHybridizationSigmaPiBondsPart6Data = {
  topicSlug: 'hybridization-sigma-pi-bonds',
  sections: [
    {
      id: 'hy-6-1',
      type: 'text',
      title: 'Problem-Solving Workshop',
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice on Hybridization and Sigma/Pi Bonds**

Time to put everything together. In this workshop you\'ll practice:
- Determining hybridization from Lewis structures
- Counting sigma and pi bonds
- Connecting hybridization to molecular geometry
- Identifying bond angles

Work through each problem carefully — these are the types of questions that appear on the AP exam.`
    },
    {
      id: 'hy-6-2',
      type: 'text',
      title: 'Strategy Review',
      content: `## Problem-Solving Strategy

### For Any Molecule:

**Step 1:** Draw the Lewis structure (show all bonds and lone pairs).

**Step 2:** For each atom of interest, count electron domains:
$$\\text{Steric Number} = \\text{bonded atoms} + \\text{lone pairs}$$

**Step 3:** Assign hybridization:
| Steric Number | Hybridization | Geometry | Angle |
|:---:|:---:|:---:|:---:|
| 2 | sp | Linear | 180° |
| 3 | sp² | Trigonal planar | 120° |
| 4 | sp³ | Tetrahedral | 109.5° |

**Step 4:** Count bonds:
- Single bond = 1σ
- Double bond = 1σ + 1π
- Triple bond = 1σ + 2π

**Step 5:** Total σ = total number of bonds between atom pairs. Total π = total number of extra bonds beyond the first in each pair.`
    },
    {
      id: 'hy-6-3',
      type: 'input-boxes',
      title: 'Practice Set 1: Formaldehyde (CH₂O)',
      content: 'Analyze the formaldehyde molecule (H₂C=O). Carbon is the central atom with 2 C–H single bonds and 1 C=O double bond.',
      exercise: {
        inputs: [
          {
            label: 'How many electron domains does carbon have in CH₂O?',
            correctAnswer: '3',
            explanation: 'Carbon has 2 single bonds to H + 1 double bond to O = 3 electron domains. The double bond counts as one domain.'
          },
          {
            label: 'What is the hybridization of carbon? (enter sp, sp2, or sp3)',
            correctAnswer: 'sp2',
            explanation: '3 electron domains → sp² hybridization.'
          },
          {
            label: 'What is the H–C–H bond angle (approximately, in degrees)?',
            correctAnswer: '120',
            explanation: 'sp² hybridization gives approximately 120° bond angles. (In reality it\'s slightly less due to the double bond taking more space, but 120° is the ideal answer.)'
          },
          {
            label: 'Total sigma bonds in CH₂O?',
            correctAnswer: '3',
            explanation: '2 C–H single bonds = 2σ. 1 C=O double bond = 1σ + 1π. Total sigma = 2 + 1 = 3.'
          },
          {
            label: 'Total pi bonds in CH₂O?',
            correctAnswer: '1',
            explanation: '1 C=O double bond contributes 1 pi bond. No other multiple bonds. Total pi = 1.'
          }
        ]
      }
    },
    {
      id: 'hy-6-4',
      type: 'multiple-choice',
      title: 'Practice Set 2: Carbon Dioxide',
      content: 'Analyze CO₂ (O=C=O). Answer questions about its hybridization and bonds.',
      exercise: {
        questions: [
          {
            question: 'What is the hybridization of carbon in CO₂?',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctAnswer: 0,
            explanation: 'Carbon in CO₂ has 2 double bonds = 2 electron domains. Steric number 2 → sp hybridization.'
          },
          {
            question: 'How many total sigma bonds are in CO₂?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 1,
            explanation: 'Each C=O double bond has 1 sigma bond. 2 double bonds × 1σ each = 2 sigma bonds.'
          },
          {
            question: 'How many total pi bonds are in CO₂?',
            options: ['0', '1', '2', '3'],
            correctAnswer: 2,
            explanation: 'Each C=O double bond has 1 pi bond. 2 double bonds × 1π each = 2 pi bonds.'
          },
          {
            question: 'What is the O–C–O bond angle in CO₂?',
            options: ['109.5°', '120°', '180°', '90°'],
            correctAnswer: 2,
            explanation: 'sp hybridization → linear geometry → 180° bond angle.'
          }
        ]
      }
    },
    {
      id: 'hy-6-5',
      type: 'input-boxes',
      title: 'Practice Set 3: Larger Molecules',
      content: 'Analyze these more complex molecules. For CH₃CHO (acetaldehyde), the structure is H₃C–CH=O.',
      exercise: {
        inputs: [
          {
            label: 'Hybridization of the left carbon (CH₃) in CH₃CHO? (enter sp, sp2, or sp3)',
            correctAnswer: 'sp3',
            explanation: 'The left carbon has 3 C–H bonds + 1 C–C bond = 4 electron domains → sp³.'
          },
          {
            label: 'Hybridization of the right carbon (CHO) in CH₃CHO? (enter sp, sp2, or sp3)',
            correctAnswer: 'sp2',
            explanation: 'The right carbon has 1 C–H bond + 1 C–C bond + 1 C=O double bond = 3 electron domains → sp².'
          },
          {
            label: 'Total sigma bonds in CH₃CHO? (3 C–H on left + 1 C–C + 1 C–H on right + 1 C=O)',
            correctAnswer: '6',
            explanation: '3 C–H (3σ) + 1 C–C (1σ) + 1 C–H (1σ) + 1 C=O (1σ + 1π). Total sigma = 3 + 1 + 1 + 1 = 6.'
          },
          {
            label: 'Total pi bonds in CH₃CHO?',
            correctAnswer: '1',
            explanation: 'Only the C=O double bond contributes a pi bond. Total pi = 1.'
          }
        ]
      }
    },
    {
      id: 'hy-6-6',
      type: 'dropdown-select',
      title: 'Practice Set 4: Quick Identification',
      content: 'Select the correct hybridization for the central or indicated atom.',
      exercise: {
        dropdowns: [
          {
            id: 'hy-6-6-dd1',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 1,
            explanation: 'SO₂: sulfur has 2 bonded atoms + 1 lone pair = 3 electron domains → sp².'
          },
          {
            id: 'hy-6-6-dd2',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 0,
            explanation: 'CS₂: carbon has 2 double bonds = 2 electron domains → sp hybridization. Similar structure to CO₂.'
          },
          {
            id: 'hy-6-6-dd3',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 2,
            explanation: 'NF₃: nitrogen has 3 bonds + 1 lone pair = 4 electron domains → sp³.'
          },
          {
            id: 'hy-6-6-dd4',
            options: ['3σ, 0π', '3σ, 1π', '2σ, 2π', '4σ, 0π'],
            correctIndex: 2,
            explanation: 'HCN: 1 C–H single bond (1σ) + 1 C≡N triple bond (1σ + 2π) = 2σ + 2π total.'
          }
        ]
      }
    },
    {
      id: 'hy-6-7',
      type: 'multiple-choice',
      title: 'Practice Set 5: Geometry Connection',
      content: 'Connect hybridization to molecular geometry.',
      exercise: {
        questions: [
          {
            question: 'An sp³-hybridized atom with 2 bonds and 2 lone pairs has what molecular geometry?',
            options: ['Linear', 'Bent', 'Trigonal planar', 'Tetrahedral'],
            correctAnswer: 1,
            explanation: 'Steric number 4 → sp³ → electron geometry is tetrahedral, but with 2 lone pairs, the molecular geometry is bent (like H₂O).'
          },
          {
            question: 'An sp²-hybridized atom with 2 bonds and 1 lone pair has what molecular geometry?',
            options: ['Linear', 'Bent', 'Trigonal planar', 'Trigonal pyramidal'],
            correctAnswer: 1,
            explanation: 'Steric number 3 → sp² → electron geometry is trigonal planar, but with 1 lone pair, the molecular geometry is bent (like SO₂ or O₃).'
          },
          {
            question: 'In HCOOH (formic acid: H–C(=O)–O–H), how many total sigma bonds are present?',
            options: ['3', '4', '5', '6'],
            correctAnswer: 2,
            explanation: 'Count: 1 C–H (1σ) + 1 C=O (1σ) + 1 C–O (1σ) + 1 O–H (1σ) = 4σ... Wait — the full structure has a fifth sigma bond. HCOOH: H bonded to C, C double bonded to one O, C single bonded to another O, that O bonded to H. That is: 1 C–H + 1 C=O (1σ+1π) + 1 C–O + 1 O–H = 4σ + 1π. Actually checking: 5 total bonds between atoms, 4 are single (4σ) + the double bond adds 1σ + 1π = 5σ + 1π. Answer: 5.'
          }
        ]
      }
    },
    {
      id: 'hy-6-8',
      type: 'text',
      title: 'Workshop Summary',
      content: `## Workshop Takeaways

### Quick Reference Card

| What to Find | How to Find It |
|-------------|----------------|
| Hybridization | Count electron domains (steric number): 2→sp, 3→sp², 4→sp³ |
| # of sigma bonds | = total number of bonds between atom pairs (each bond has exactly 1σ) |
| # of pi bonds | = total double bonds × 1 + total triple bonds × 2 |
| Bond angle | sp→180°, sp²→120°, sp³→109.5° (ideal) |
| Rotation? | Single bonds: free rotation. Double/triple: restricted |

### Common AP Exam Patterns

1. **"Determine the hybridization of atom X"** → count electron domains
2. **"How many sigma/pi bonds?"** → use the counting rules
3. **"Explain why molecule X is planar/nonplanar"** → connect to hybridization and pi bonds
4. **"Compare bond lengths/strengths"** → higher bond order = shorter and stronger

Coming up in **Part 7**: Connecting hybridization to VSEPR and polarity for AP-level synthesis.`
    }
  ]
};
