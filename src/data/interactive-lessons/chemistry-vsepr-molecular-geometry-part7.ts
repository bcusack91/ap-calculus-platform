export const chemVseprMolecularGeometryPart7Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-7-1',
      type: 'text',
      title: 'VSEPR Synthesis and AP Review',
      content: `# 🎯 Synthesis & AP Exam Review

**Part 7 of 7 — Comprehensive Review**

You\'ve now learned the complete VSEPR framework:

1. **Draw a Lewis structure** → identify bonds and lone pairs
2. **Count electron domains** → determine the steric number
3. **Identify electron domain geometry** → the 3D arrangement of all electron groups
4. **Identify molecular geometry** → the shape based on atom positions only
5. **Predict polarity** → vector sum of bond dipoles based on geometry

### AP Exam Tips

- VSEPR questions appear in **multiple-choice and free-response**
- You must be able to go from a **chemical formula** to a **3D shape** quickly
- Know the connection between geometry, polarity, and **intermolecular forces**
- Understand how geometry affects **physical properties** (boiling point, solubility)
- Be able to explain **why** a molecule has its shape (electron pair repulsion)

Let\'s do a comprehensive review with AP-style problems.`
    },
    {
      id: 'vg-7-2',
      type: 'multiple-choice',
      title: 'Comprehensive Geometry Identification',
      content: 'Identify the molecular geometry of each species from its Lewis structure.',
      exercise: {
        questions: [
          {
            question: 'What is the molecular geometry of OF₂? (O has 6 valence e⁻, 2 bonds to F, 2 lone pairs)',
            options: ['Linear', 'Bent', 'Trigonal planar', 'Tetrahedral'],
            correctAnswer: 1,
            explanation: 'Oxygen has 2 bonds + 2 lone pairs = steric number 4 → tetrahedral ED geometry. With 2 lone pairs, molecular geometry = bent (like H₂O).'
          },
          {
            question: 'What is the molecular geometry of NO₃⁻? (N is central with 3 resonance-equivalent bonds and 0 lone pairs)',
            options: ['Trigonal pyramidal', 'Trigonal planar', 'Bent', 'Tetrahedral'],
            correctAnswer: 1,
            explanation: 'Nitrogen has 3 bonds + 0 lone pairs = steric number 3 → trigonal planar geometry. All O–N–O angles are 120°.'
          },
          {
            question: 'What is the molecular geometry of I₃⁻? (Central I has 2 bonds to I and 3 lone pairs)',
            options: ['Linear', 'Bent', 'T-shaped', 'Trigonal bipyramidal'],
            correctAnswer: 0,
            explanation: 'Central iodine has 2 bonds + 3 lone pairs = steric number 5 → trigonal bipyramidal ED geometry. With 3 lone pairs all equatorial, the 2 bonds are axial → linear molecular geometry.'
          },
          {
            question: 'What is the molecular geometry of PH₃? (P has 5 valence e⁻, 3 bonds, 1 lone pair)',
            options: ['Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Bent'],
            correctAnswer: 2,
            explanation: 'Phosphorus has 3 bonds + 1 lone pair = steric number 4 → tetrahedral ED geometry. With 1 lone pair, molecular geometry = trigonal pyramidal.'
          }
        ]
      }
    },
    {
      id: 'vg-7-3',
      type: 'input-boxes',
      title: 'Bond Angle Prediction',
      content: 'Predict the approximate bond angle for each molecule. Use the ideal angle for the geometry (don\'t worry about small lone pair compressions unless specified).',
      exercise: {
        inputs: [
          {
            label: 'Bond angle in BeCl₂ (linear geometry, in degrees)',
            correctAnswer: '180',
            explanation: 'BeCl₂ has 2 electron domains → linear → bond angle = 180°.'
          },
          {
            label: 'Approximate bond angle in H₂S (bent, from tetrahedral parent, in degrees; use ideal tetrahedral value)',
            correctAnswer: '109.5',
            explanation: 'H₂S has steric number 4 (2 bonds + 2 lone pairs) → bent geometry derived from tetrahedral. The ideal parent angle is 109.5° (actual is slightly less due to lone pair compression, but the ideal tetrahedral angle is the reference).'
          },
          {
            label: 'Equatorial bond angle in PCl₅ (trigonal bipyramidal, in degrees)',
            correctAnswer: '120',
            explanation: 'In the trigonal bipyramidal geometry, the equatorial–equatorial bond angle is 120°.'
          },
          {
            label: 'Bond angle in AlCl₃ (trigonal planar, in degrees)',
            correctAnswer: '120',
            explanation: 'AlCl₃ has 3 bonds + 0 lone pairs → trigonal planar → all bond angles = 120°.'
          }
        ]
      }
    },
    {
      id: 'vg-7-4',
      type: 'dropdown-select',
      title: 'AP-Style Polarity Predictions',
      content: 'For each molecule, predict whether it is polar or nonpolar based on its geometry.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-7-4-dd1',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: 'BCl₃ has a trigonal planar geometry with 3 identical Cl atoms. Symmetric → nonpolar.'
          },
          {
            id: 'vg-7-4-dd2',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: 'SCl₂ has a bent geometry (2 bonds + 2 lone pairs). Asymmetric → polar.'
          },
          {
            id: 'vg-7-4-dd3',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: 'PCl₅ has a trigonal bipyramidal geometry with 5 identical Cl atoms and 0 lone pairs. Symmetric → nonpolar.'
          },
          {
            id: 'vg-7-4-dd4',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: 'AsF₃ has a trigonal pyramidal geometry (3 bonds + 1 lone pair). Asymmetric → polar.'
          },
          {
            id: 'vg-7-4-dd5',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: 'XeF₂ has a linear molecular geometry (2 bonds + 3 lone pairs, axial bonds). The two Xe–F dipoles cancel → nonpolar.'
          }
        ]
      }
    },
    {
      id: 'vg-7-5',
      type: 'text',
      title: 'AP Free-Response Strategy',
      content: `## How to Answer VSEPR Free-Response Questions

AP Chemistry FRQs often ask you to:
1. Draw or describe the Lewis structure
2. Predict the molecular geometry
3. Explain whether the molecule is polar or nonpolar
4. Relate geometry/polarity to a physical property

### Template Answer

> "The Lewis structure of [molecule] shows that the central atom has [X] bonding domains and [Y] lone pairs, giving a steric number of [X+Y]. The electron domain geometry is [ED geometry], and since there are [Y] lone pairs, the **molecular geometry is [molecular geometry]**. The bond angle is approximately [angle]°.

> Because the [molecular geometry] shape is [symmetric/asymmetric], the individual bond dipoles [do/do not] cancel. Therefore, the molecule is [polar/nonpolar]."

### Common Mistakes to Avoid

1. **Confusing electron domain and molecular geometry** — always specify which one you mean
2. **Forgetting lone pairs** — they affect both geometry and polarity
3. **Saying a molecule is nonpolar just because it has polar bonds** — symmetry matters
4. **Counting double bonds as 2 electron domains** — a double bond is ONE domain
5. **Forgetting to adjust for ions** — add/subtract electrons for charges`
    },
    {
      id: 'vg-7-6',
      type: 'multiple-choice',
      title: 'AP-Style Comprehensive Problems',
      content: 'These questions mimic the style and difficulty of AP Chemistry exam questions.',
      exercise: {
        questions: [
          {
            question: 'Consider the molecules SO₃ and SO₃²⁻. Which statement is correct?',
            options: [
              'Both are trigonal planar',
              'SO₃ is trigonal planar; SO₃²⁻ is trigonal pyramidal',
              'Both are trigonal pyramidal',
              'SO₃ is trigonal pyramidal; SO₃²⁻ is trigonal planar'
            ],
            correctAnswer: 1,
            explanation: 'SO₃ has 3 bonds + 0 lone pairs on S → trigonal planar. SO₃²⁻ has 3 bonds + 1 lone pair on S (the extra 2 electrons from the charge become a lone pair) → steric number 4 → tetrahedral ED → trigonal pyramidal molecular geometry.'
          },
          {
            question: 'Which of the following species has the smallest bond angle?',
            options: ['BF₃ (120°)', 'CH₄ (109.5°)', 'H₂O (≈104.5°)', 'CO₂ (180°)'],
            correctAnswer: 2,
            explanation: 'H₂O has the smallest bond angle at approximately 104.5°. Starting from the tetrahedral angle of 109.5°, the 2 lone pairs on oxygen compress the H–O–H angle significantly.'
          },
          {
            question: 'The boiling point of NF₃ (−129°C) is significantly lower than that of NH₃ (−33°C), even though NF₃ has a greater molar mass. Which explanation is most consistent with this observation?',
            options: [
              'NF₃ is nonpolar while NH₃ is polar',
              'NH₃ can form hydrogen bonds (N–H); NF₃ cannot (no H atoms)',
              'NF₃ has a trigonal planar geometry',
              'N–F bonds are stronger than N–H bonds'
            ],
            correctAnswer: 1,
            explanation: 'Both NF₃ and NH₃ are polar with trigonal pyramidal geometry. However, NH₃ has N–H bonds that allow hydrogen bonding (a strong intermolecular force). NF₃ has no H atoms, so it cannot form hydrogen bonds — only dipole–dipole and London forces. This explains NH₃\'s much higher boiling point.'
          }
        ]
      }
    },
    {
      id: 'vg-7-7',
      type: 'input-boxes',
      title: 'Complete Analysis Practice',
      content: 'For each molecule, provide the requested property.',
      exercise: {
        inputs: [
          {
            label: 'Molecular geometry of SiCl₄ (Si: 4 bonds, 0 lone pairs)',
            correctAnswer: 'tetrahedral',
            explanation: 'SiCl₄ has steric number 4 (4 bonds + 0 lone pairs) → tetrahedral geometry.'
          },
          {
            label: 'Molecular geometry of ClF₅ (Cl: 5 bonds, 1 lone pair)',
            correctAnswer: 'square pyramidal',
            explanation: 'ClF₅ has steric number 6 (5 bonds + 1 lone pair) → octahedral ED → square pyramidal molecular geometry.'
          },
          {
            label: 'Is SiF₄ polar or nonpolar? (Type "polar" or "nonpolar")',
            correctAnswer: 'nonpolar',
            explanation: 'SiF₄ has a symmetric tetrahedral geometry with 4 identical F atoms. The bond dipoles cancel → nonpolar.'
          },
          {
            label: 'Molecular geometry of SO₂ (S: 2 double bonds, 1 lone pair)',
            correctAnswer: 'bent',
            explanation: 'SO₂ has steric number 3 (2 bonds + 1 lone pair) → trigonal planar ED → bent molecular geometry.'
          }
        ]
      }
    },
    {
      id: 'vg-7-8',
      type: 'multiple-choice',
      title: 'Final Exit Quiz — AP Exam Ready',
      content: 'Final comprehensive check. Get these right and you\'re AP exam ready!',
      exercise: {
        questions: [
          {
            question: 'Arrange these molecules in order of INCREASING bond angle: H₂O, NH₃, CH₄',
            options: [
              'CH₄ < NH₃ < H₂O',
              'H₂O < NH₃ < CH₄',
              'NH₃ < H₂O < CH₄',
              'H₂O < CH₄ < NH₃'
            ],
            correctAnswer: 1,
            explanation: 'All three have steric number 4 (tetrahedral ED). H₂O has 2 lone pairs → ≈104.5°. NH₃ has 1 lone pair → ≈107°. CH₄ has 0 lone pairs → 109.5°. More lone pairs = more compression = smaller bond angle. Order: H₂O < NH₃ < CH₄.'
          },
          {
            question: 'A student claims that SF₄ is nonpolar because sulfur has 4 identical S–F bonds. What is wrong with this reasoning?',
            options: [
              'S–F bonds are not polar',
              'SF₄ has a seesaw geometry (not tetrahedral), so the bond dipoles don\'t cancel',
              'SF₄ actually has 6 bonds, not 4',
              'Fluorine is not electronegative enough to create bond dipoles'
            ],
            correctAnswer: 1,
            explanation: 'SF₄ has 4 bonds + 1 lone pair → steric number 5 → seesaw molecular geometry (not tetrahedral). The seesaw shape is asymmetric, so the four S–F bond dipoles do NOT cancel, making SF₄ polar. The student incorrectly assumed a symmetric geometry.'
          },
          {
            question: 'Which of the following is the best explanation for why XeF₄ is nonpolar despite having 2 lone pairs?',
            options: [
              'Xe–F bonds are nonpolar',
              'Lone pairs don\'t affect polarity',
              'The 2 lone pairs are trans (180° apart) in the octahedral arrangement, creating a symmetric square planar shape',
              'XeF₄ does not actually have lone pairs'
            ],
            correctAnswer: 2,
            explanation: 'XeF₄ has steric number 6 (octahedral ED). The 2 lone pairs sit in trans positions (opposite sides), and the 4 F atoms form a symmetric square planar arrangement. Because of this symmetry, all bond dipoles cancel, making the molecule nonpolar.'
          }
        ]
      }
    }
  ]
};
