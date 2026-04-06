export const chemTypesIntermolecularForcesPart2Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-dd-intro',
      type: 'text',
      title: 'Dipole-Dipole Forces',
      content: `Dipole-dipole forces occur between **polar molecules** — molecules that have a **permanent dipole moment**.\n\nA molecule is polar when:\n- It contains polar bonds (bonds between atoms with different electronegativities)\n- The molecular geometry does NOT cancel out the bond dipoles\n\nIn a dipole-dipole interaction, the **partially positive** end ($\\delta^+$) of one molecule attracts the **partially negative** end ($\\delta^-$) of another molecule.\n\nKey points:\n- Dipole-dipole forces are **stronger** than LDF for molecules of similar size\n- They only occur between **polar** molecules\n- Polar molecules ALSO experience LDF in addition to dipole-dipole forces`
    },
    {
      id: 'if-dd-polar-review',
      type: 'multiple-choice',
      title: 'Identifying Polar Molecules',
      content: 'To experience dipole-dipole forces, a molecule must be polar. Let\'s review which molecules are polar.',
      exercise: {
        questions: [
          {
            question: 'Which of the following molecules is polar and therefore experiences dipole-dipole forces?',
            options: [
              'CO₂ (linear)',
              'CH₄ (tetrahedral)',
              'HCl (linear)',
              'CCl₄ (tetrahedral)'
            ],
            correctAnswer: 2,
            explanation: 'HCl is polar because it has one polar bond and no symmetry to cancel the dipole. CO₂ is linear with equal and opposite bond dipoles that cancel. CH₄ and CCl₄ are symmetric tetrahedral molecules whose bond dipoles cancel.'
          },
          {
            question: 'Why does CO₂ NOT experience dipole-dipole forces despite having polar C=O bonds?',
            options: [
              'Carbon and oxygen have the same electronegativity',
              'The linear geometry causes the bond dipoles to cancel, making the molecule nonpolar',
              'CO₂ is an ionic compound',
              'Double bonds cannot be polar'
            ],
            correctAnswer: 1,
            explanation: 'CO₂ has two polar C=O bonds, but the linear geometry (180°) causes the two bond dipoles to point in exactly opposite directions, canceling each other out. The molecule has no net dipole moment, so it is nonpolar.'
          }
        ]
      }
    },
    {
      id: 'if-dd-mechanism',
      type: 'text',
      title: 'How Dipole-Dipole Forces Work',
      content: `Unlike LDF (which involve temporary dipoles), dipole-dipole forces involve **permanent** charge separations.\n\n**Alignment:** Polar molecules tend to orient themselves so that the $\\delta^+$ end of one molecule is near the $\\delta^-$ end of a neighbor. This alignment maximizes attraction.\n\nExample with HCl:\n$$\\underset{\\delta^+}{\\text{H}}\\text{—}\\underset{\\delta^-}{\\text{Cl}} \\cdots \\underset{\\delta^+}{\\text{H}}\\text{—}\\underset{\\delta^-}{\\text{Cl}}$$\n\nThe positive H end of one HCl molecule is attracted to the negative Cl end of the next.\n\n**Important:** Polar molecules experience BOTH dipole-dipole forces AND London Dispersion Forces. The total intermolecular attraction is the sum of all IMF types present.`
    },
    {
      id: 'if-dd-vs-ldf',
      type: 'dropdown-select',
      title: 'Dipole-Dipole vs. LDF',
      content: 'Compare dipole-dipole forces and London Dispersion Forces by selecting the correct option for each statement.',
      exercise: {
        dropdowns: [
          {
            id: 'dd-type',
            label: 'Dipole-dipole forces arise from',
            options: ['temporary dipoles', 'permanent dipoles', 'ionic bonds'],
            correctIndex: 1,
            explanation: 'Dipole-dipole forces arise from permanent dipoles in polar molecules, unlike LDF which arise from temporary dipoles.'
          },
          {
            id: 'dd-which-molecules',
            label: 'Dipole-dipole forces occur between',
            options: ['all molecules', 'only polar molecules', 'only nonpolar molecules'],
            correctIndex: 1,
            explanation: 'Dipole-dipole forces only occur between polar molecules. LDF occur in all molecules.'
          },
          {
            id: 'dd-strength',
            label: 'For similar-sized molecules, dipole-dipole forces are _____ LDF',
            options: ['weaker than', 'stronger than', 'equal to'],
            correctIndex: 1,
            explanation: 'For molecules of similar size, dipole-dipole forces are generally stronger than LDF because permanent dipoles provide a more consistent attractive interaction.'
          }
        ]
      }
    },
    {
      id: 'if-dd-examples',
      type: 'text',
      title: 'Examples of Dipole-Dipole Molecules',
      content: `Common molecules that experience dipole-dipole forces:\n\n| Molecule | Why It\'s Polar | Geometry |\n|----------|---------------|----------|\n| HCl | H–Cl bond has large $\\Delta$EN | Linear |\n| HF | H–F bond is highly polar | Linear |\n| CH₃Cl | C–Cl bond is polar; asymmetric shape | Tetrahedral (but not symmetric) |\n| SO₂ | Two S=O bonds in bent geometry | Bent |\n| CHCl₃ | Three C–Cl bonds + one C–H; asymmetric | Tetrahedral (not symmetric) |\n\nMolecules that are NOT polar (only LDF):\n\n| Molecule | Why Nonpolar |\n|----------|--------------|\n| CO₂ | Linear — bond dipoles cancel |\n| CH₄ | Symmetric tetrahedral — bond dipoles cancel |\n| BF₃ | Symmetric trigonal planar — bond dipoles cancel |\n| N₂, O₂ | Identical atoms — no polar bonds at all |`
    },
    {
      id: 'if-dd-identify',
      type: 'multiple-choice',
      title: 'Identifying Dipole-Dipole Molecules',
      content: 'Determine which molecules experience dipole-dipole forces.',
      exercise: {
        questions: [
          {
            question: 'Which molecule experiences dipole-dipole forces?',
            options: [
              'N₂',
              'BF₃ (trigonal planar)',
              'SO₂ (bent)',
              'CH₄ (tetrahedral)'
            ],
            correctAnswer: 2,
            explanation: 'SO₂ has a bent geometry, so the bond dipoles do NOT cancel. It has a net dipole moment and experiences dipole-dipole forces. N₂ is nonpolar (identical atoms), BF₃ is symmetric (dipoles cancel), and CH₄ is symmetric tetrahedral (dipoles cancel).'
          },
          {
            question: 'A polar molecule like CHCl₃ experiences which types of intermolecular forces?',
            options: [
              'Only dipole-dipole forces',
              'Only London Dispersion Forces',
              'Both dipole-dipole forces AND London Dispersion Forces',
              'Neither — it forms ionic bonds'
            ],
            correctAnswer: 2,
            explanation: 'Polar molecules experience BOTH dipole-dipole forces (from their permanent dipoles) AND London Dispersion Forces (which are present in ALL molecules). The total IMF strength is the sum of both contributions.'
          }
        ]
      }
    },
    {
      id: 'if-dd-boiling-point',
      type: 'multiple-choice',
      title: 'Dipole-Dipole and Boiling Points',
      content: 'Dipole-dipole forces affect physical properties like boiling point.',
      exercise: {
        questions: [
          {
            question: 'Propane (C₃H₈, MW = 44) boils at -42°C. Acetaldehyde (CH₃CHO, MW = 44) boils at 20°C. Both have similar molar masses. What explains the higher boiling point of acetaldehyde?',
            options: [
              'Acetaldehyde has more electrons',
              'Propane has stronger hydrogen bonds',
              'Acetaldehyde is polar and has dipole-dipole forces in addition to LDF',
              'Propane has a higher molar mass'
            ],
            correctAnswer: 2,
            explanation: 'Both molecules have similar molar masses (similar LDF), but acetaldehyde is polar due to its C=O group. It experiences dipole-dipole forces in addition to LDF, giving it stronger total IMF and a higher boiling point.'
          }
        ]
      }
    },
    {
      id: 'if-dd-input-check',
      type: 'input-boxes',
      title: 'Dipole-Dipole Summary',
      content: 'Fill in the key facts about dipole-dipole forces.',
      exercise: {
        inputs: [
          {
            label: 'Dipole-dipole forces occur between _____ molecules (polar/nonpolar)',
            correctAnswer: 'polar',
            explanation: 'Dipole-dipole forces require permanent dipoles, which only exist in polar molecules.'
          },
          {
            label: 'The δ+ end of one polar molecule is attracted to the δ_____ end of another (+/-)',
            correctAnswer: '-',
            explanation: 'Opposite partial charges attract. The δ+ end of one molecule is attracted to the δ- end of a neighboring polar molecule.'
          }
        ]
      }
    }
  ]
};
