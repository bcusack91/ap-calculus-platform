export const chemVseprMolecularGeometryPart7Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-7-1',
      type: 'text',
      title: 'VSEPR Synthesis and AP Review',
      content: `# 🎯 Synthesis & AP Exam Review

**Part 7 of 7 — Comprehensive Review**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'vg-7-2',
      type: 'multiple-choice',
      title: 'Comprehensive Geometry Identification',
      content: 'Identify the molecular geometry of each species from its Lewis structure.',
      exercise: {
        questions: [
          {
            question: 'What is the molecular geometry of $OF_{2}$? (O has 6 valence $e^{-}$, 2 bonds to F, 2 lone pairs)',
            options: ['Linear', 'Bent', 'Trigonal planar', 'Tetrahedral'],
            correctAnswer: 1,
            explanation: 'Oxygen has 2 bonds + 2 lone pairs = steric number 4 → tetrahedral ED geometry. With 2 lone pairs, molecular geometry = bent $(like H_{2}O)$.'
          },
          {
            question: 'What is the molecular geometry of $NO_{3}^{-}$? (N is central with 3 resonance-equivalent bonds and 0 lone pairs)',
            options: ['Trigonal pyramidal', 'Trigonal planar', 'Bent', 'Tetrahedral'],
            correctAnswer: 1,
            explanation: 'Nitrogen has 3 bonds + 0 lone pairs = steric number 3 → trigonal planar geometry. All O–N–O angles are 120°.'
          },
          {
            question: 'What is the molecular geometry of $I_{3}^{-}$? (Central I has 2 bonds to I and 3 lone pairs)',
            options: ['Linear', 'Bent', 'T-shaped', 'Trigonal bipyramidal'],
            correctAnswer: 0,
            explanation: 'Central iodine has 2 bonds + 3 lone pairs = steric number 5 → trigonal bipyramidal ED geometry. With 3 lone pairs all equatorial, the 2 bonds are axial → linear molecular geometry.'
          },
          {
            question: 'What is the molecular geometry of $PH_{3}$? (P has 5 valence $e^{-}$, 3 bonds, 1 lone pair)',
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
            label: 'Bond angle in $BeCl_{2}$ (linear geometry, in degrees)',
            correctAnswer: '180',
            explanation: '$BeCl_{2}$ has 2 electron domains → linear → bond angle = 180°.'
          },
          {
            label: 'Approximate bond angle in $H_{2}S$ (bent, from tetrahedral parent, in degrees; use ideal tetrahedral value)',
            correctAnswer: '109.5',
            explanation: '$H_{2}S$ has steric number 4 (2 bonds + 2 lone pairs) → bent geometry derived from tetrahedral. The ideal parent angle is 109.5° (actual is slightly less due to lone pair compression, but the ideal tetrahedral angle is the reference).'
          },
          {
            label: 'Equatorial bond angle in $PCl_{5}$ (trigonal bipyramidal, in degrees)',
            correctAnswer: '120',
            explanation: 'In the trigonal bipyramidal geometry, the equatorial–equatorial bond angle is 120°.'
          },
          {
            label: 'Bond angle in $AlCl_{3}$ (trigonal planar, in degrees)',
            correctAnswer: '120',
            explanation: '$AlCl_{3}$ has 3 bonds + 0 lone pairs → trigonal planar → all bond angles = 120°.'
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
            label: '$BCl_{3}$ has a trigonal planar geometry with 3 identical Cl atoms. Symmetric',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: '$BCl_{3}$ has a trigonal planar geometry with 3 identical Cl atoms. Symmetric → nonpolar.'
          },
          {
            id: 'vg-7-4-dd2',
            label: '$SCl_{2}$ has a bent geometry (2 bonds + 2 lone pairs). Asymmetric',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: '$SCl_{2}$ has a bent geometry (2 bonds + 2 lone pairs). Asymmetric → polar.'
          },
          {
            id: 'vg-7-4-dd3',
            label: '$PCl_{5}$ has a trigonal bipyramidal geometry with 5 identical Cl atoms and 0 lone...',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: '$PCl_{5}$ has a trigonal bipyramidal geometry with 5 identical Cl atoms and 0 lone pairs. Symmetric → nonpolar.'
          },
          {
            id: 'vg-7-4-dd4',
            label: '$AsF_{3}$ has a trigonal pyramidal geometry (3 bonds + 1 lone pair). Asymmetric',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: '$AsF_{3}$ has a trigonal pyramidal geometry (3 bonds + 1 lone pair). Asymmetric → polar.'
          },
          {
            id: 'vg-7-4-dd5',
            label: '$XeF_{2}$ has a linear molecular geometry (2 bonds + 3 lone pairs',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: '$XeF_{2}$ has a linear molecular geometry (2 bonds + 3 lone pairs, axial bonds). The two Xe–F dipoles cancel → nonpolar.'
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

> 💡 **Tip:** Use this template structure for VSEPR free-response answers — it hits every point the AP graders look for.

> "The Lewis structure of [molecule] shows that the central atom has [X] bonding domains and [Y] lone pairs, giving a steric number of [X+Y]. The electron domain geometry is [ED geometry], and since there are [Y] lone pairs, the **molecular geometry is [molecular geometry]**. The bond angle is approximately [angle]°.

> Because the [molecular geometry] shape is [symmetric/asymmetric], the individual bond dipoles [do/do not] cancel. Therefore, the molecule is [polar/nonpolar]."

### Common Mistakes to Avoid

> ⚠️ **Warning:** These are the most frequent errors on the AP exam — review each one carefully.

---

1. **Confusing electron domain and molecular geometry** — always specify which one you mean
2. **Forgetting lone pairs** — they affect both geometry and polarity
3. **Saying a molecule is nonpolar just because it has polar bonds** — symmetry matters
4. **Counting double bonds as 2 electron domains** — a double bond is ONE domain
5. **Forgetting to adjust for ions** — add/subtract electrons for charges

> 🔑 **Key Concept:** The most common AP mistake is confusing electron domain geometry with molecular geometry — always specify which one you mean and remember that lone pairs make them different.`
    },
    {
      id: 'vg-7-6',
      type: 'multiple-choice',
      title: 'AP-Style Comprehensive Problems',
      content: 'These questions mimic the style and difficulty of AP Chemistry exam questions.',
      exercise: {
        questions: [
          {
            question: 'Consider the molecules $SO_{3}$ and $SO_{3}^{2-}$. Which statement is correct?',
            options: [
              'Both are trigonal planar',
              '$SO_{3}$ is trigonal planar; $SO_{3}^{2-}$ is trigonal pyramidal',
              'Both are trigonal pyramidal',
              '$SO_{3}$ is trigonal pyramidal; $SO_{3}^{2-}$ is trigonal planar'
            ],
            correctAnswer: 1,
            explanation: '$SO_{3}$ has 3 bonds + 0 lone pairs on S → trigonal planar. $SO_{3}^{2-}$ has 3 bonds + 1 lone pair on S (the extra 2 electrons from the charge become a lone pair) → steric number 4 → tetrahedral ED → trigonal pyramidal molecular geometry.'
          },
          {
            question: 'Which of the following species has the smallest bond angle?',
            options: ['$BF_{3}$ (120°)', '$CH_{4}$ (109.5°)', '$H_{2}O$ (≈104.5°)', '$CO_{2}$ (180°)'],
            correctAnswer: 2,
            explanation: '$H_{2}O$ has the smallest bond angle at approximately 104.5°. Starting from the tetrahedral angle of 109.5°, the 2 lone pairs on oxygen compress the H–O–H angle significantly.'
          },
          {
            question: 'The boiling point of $NF_{3}$ (−129°C) is significantly lower than that of $NH_{3}$ (−33°C), even though $NF_{3}$ has a greater molar mass. Which explanation is most consistent with this observation?',
            options: [
              '$NF_{3}$ is nonpolar while $NH_{3}$ is polar',
              '$NH_{3}$ can form hydrogen bonds (N–H); $NF_{3}$ cannot (no H atoms)',
              '$NF_{3}$ has a trigonal planar geometry',
              'N–F bonds are stronger than N–H bonds'
            ],
            correctAnswer: 1,
            explanation: 'Both $NF_{3}$ and $NH_{3}$ are polar with trigonal pyramidal geometry. However, $NH_{3}$ has N–H bonds that allow hydrogen bonding (a strong intermolecular force). $NF_{3}$ has no H atoms, so it cannot form hydrogen bonds — only dipole–dipole and London forces. This explains $NH_{3}$\'s much higher boiling point.'
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
            label: 'Molecular geometry of $SiCl_{4}$ (Si: 4 bonds, 0 lone pairs)',
            correctAnswer: 'tetrahedral',
            explanation: '$SiCl_{4}$ has steric number 4 (4 bonds + 0 lone pairs) → tetrahedral geometry.'
          },
          {
            label: 'Molecular geometry of $ClF_{5}$ (Cl: 5 bonds, 1 lone pair)',
            correctAnswer: 'square pyramidal',
            explanation: '$ClF_{5}$ has steric number 6 (5 bonds + 1 lone pair) → octahedral ED → square pyramidal molecular geometry.'
          },
          {
            label: 'Is $SiF_{4}$ polar or nonpolar? (Type "polar" or "nonpolar")',
            correctAnswer: 'nonpolar',
            explanation: '$SiF_{4}$ has a symmetric tetrahedral geometry with 4 identical F atoms. The bond dipoles cancel → nonpolar.'
          },
          {
            label: 'Molecular geometry of $SO_{2}$ (S: 2 double bonds, 1 lone pair)',
            correctAnswer: 'bent',
            explanation: '$SO_{2}$ has steric number 3 (2 bonds + 1 lone pair) → trigonal planar ED → bent molecular geometry.'
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
            question: 'Arrange these molecules in order of INCREASING bond angle: $H_{2}O$, $NH_{3}$, $CH_{4}$',
            options: [
              '$CH_{4}$ < $NH_{3}$ < $H_{2}O$',
              '$H_{2}O$ < $NH_{3}$ < $CH_{4}$',
              '$NH_{3}$ < $H_{2}O$ < $CH_{4}$',
              '$H_{2}O$ < $CH_{4}$ < $NH_{3}$'
            ],
            correctAnswer: 1,
            explanation: 'All three have steric number 4 (tetrahedral ED). $H_{2}O$ has 2 lone pairs → ≈104.5°. $NH_{3}$ has 1 lone pair → ≈107°. $CH_{4}$ has 0 lone pairs → 109.5°. More lone pairs = more compression = smaller bond angle. Order: $H_{2}O$ < $NH_{3}$ < $CH_{4}$.'
          },
          {
            question: 'A student claims that $SF_{4}$ is nonpolar because sulfur has 4 identical S–F bonds. What is wrong with this reasoning?',
            options: [
              'S–F bonds are not polar',
              '$SF_{4}$ has a seesaw geometry (not tetrahedral), so the bond dipoles don\'t cancel',
              '$SF_{4}$ actually has 6 bonds, not 4',
              'Fluorine is not electronegative enough to create bond dipoles'
            ],
            correctAnswer: 1,
            explanation: '$SF_{4}$ has 4 bonds + 1 lone pair → steric number 5 → seesaw molecular geometry (not tetrahedral). The seesaw shape is asymmetric, so the four S–F bond dipoles do NOT cancel, making $SF_{4}$ polar. The student incorrectly assumed a symmetric geometry.'
          },
          {
            question: 'Which of the following is the best explanation for why $XeF_{4}$ is nonpolar despite having 2 lone pairs?',
            options: [
              'Xe–F bonds are nonpolar',
              'Lone pairs don\'t affect polarity',
              'The 2 lone pairs are trans (180° apart) in the octahedral arrangement, creating a symmetric square planar shape',
              '$XeF_{4}$ does not actually have lone pairs'
            ],
            correctAnswer: 2,
            explanation: '$XeF_{4}$ has steric number 6 (octahedral ED). The 2 lone pairs sit in trans positions (opposite sides), and the 4 F atoms form a symmetric square planar arrangement. Because of this symmetry, all bond dipoles cancel, making the molecule nonpolar.'
          }
        ]
      }
    }
  ]
};
