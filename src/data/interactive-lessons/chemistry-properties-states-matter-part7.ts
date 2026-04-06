export const chemPropertiesStatesMatterPart7Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm7-intro',
      type: 'text' as const,
      title: 'Synthesis & AP Review — Introduction',
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Connecting IMFs to Physical Properties and AP-Style Problems**

This final part brings everything together. On the AP Chemistry exam, you\'ll be expected to:

1. **Identify** the types of IMFs present in a substance from its structure.
2. **Compare** physical properties (bp, mp, vapor pressure, viscosity, surface tension) of different substances based on their IMFs.
3. **Interpret** heating curves and phase diagrams.
4. **Explain** macroscopic observations using particulate-level reasoning.

Let\'s practice with AP-style questions and synthesis problems.
      `
    },
    {
      id: 'sm7-big-picture',
      type: 'text' as const,
      title: 'The Big Picture: Structure → IMFs → Properties',
      content: `
## The Central Chain of Reasoning

$$\\text{Molecular Structure} \\xrightarrow{\\text{determines}} \\text{IMFs} \\xrightarrow{\\text{determines}} \\text{Physical Properties}$$

### Complete Property Summary

| Property | Effect of Stronger IMFs | Explanation |
|----------|------------------------|-------------|
| Melting point | **Higher** | More energy needed to disrupt solid lattice |
| Boiling point | **Higher** | More energy needed to separate liquid molecules |
| Surface tension | **Higher** | Stronger inward pull on surface molecules |
| Viscosity | **Higher** | Harder for molecules to slide past each other |
| Vapor pressure | **Lower** | Fewer molecules have enough KE to escape |
| $\\Delta H_{\\text{vap}}$ | **Larger** | More energy needed to overcome IMFs during vaporization |
| $\\Delta H_{\\text{fus}}$ | **Larger** | More energy needed to overcome IMFs during melting |

### The AP Exam Wants You To...

- **Never** say "stronger bonds" when you mean "stronger intermolecular forces"
- **Distinguish** IMFs (between molecules) from intramolecular bonds (within molecules)
- **Be specific**: say "hydrogen bonding" or "London Dispersion Forces," not just "IMFs"
- **Explain** trends using particle-level reasoning
      `
    },
    {
      id: 'sm7-ap-mc-1',
      type: 'multiple-choice' as const,
      title: 'AP-Style Multiple Choice — Set 1',
      content: 'Answer these AP-style questions about properties of states of matter.',
      exercise: {
        questions: [
          {
            question: 'The normal boiling point of NH₃ (−33°C) is much higher than that of PH₃ (−87°C), even though PH₃ has a higher molar mass. This is best explained by:',
            options: [
              'NH₃ has stronger London Dispersion Forces',
              'NH₃ can form hydrogen bonds while PH₃ cannot',
              'PH₃ is ionic while NH₃ is molecular',
              'NH₃ has a lower molar mass, so it boils at a higher temperature'
            ],
            correctAnswer: 1,
            explanation: 'NH₃ has N–H bonds where N is one of the three atoms (F, O, N) that enable hydrogen bonding. PH₃ has P–H bonds, but P is not F, O, or N, so PH₃ cannot form H-bonds. The strong H-bonding in NH₃ gives it a much higher boiling point despite lower molar mass.'
          },
          {
            question: 'Which of the following best explains why the vapor pressure of ethanol (C₂H₅OH) is lower than that of dimethyl ether (CH₃OCH₃) at the same temperature, even though they have the same molar mass (46 g/mol)?',
            options: [
              'Ethanol has weaker London Dispersion Forces',
              'Dimethyl ether is ionic',
              'Ethanol can form hydrogen bonds (O–H) while dimethyl ether cannot',
              'Dimethyl ether has a higher molecular weight'
            ],
            correctAnswer: 2,
            explanation: 'Ethanol has an O–H group that enables hydrogen bonding between molecules. Dimethyl ether (CH₃–O–CH₃) has no O–H or N–H bonds, so it can only exhibit dipole-dipole forces (weaker). Stronger IMFs in ethanol → lower vapor pressure.'
          },
          {
            question: 'A student observes that SiO₂ (quartz) has a melting point of 1713°C while CO₂ (dry ice) sublimes at −78°C. Both contain elements from the same groups. The best explanation is:',
            options: [
              'SiO₂ is a network covalent solid with strong covalent bonds throughout, while CO₂ is a molecular solid with weak LDF',
              'CO₂ has stronger bonds than SiO₂',
              'SiO₂ is an ionic solid while CO₂ is molecular',
              'CO₂ has a higher molar mass'
            ],
            correctAnswer: 0,
            explanation: 'SiO₂ forms a 3D network covalent solid — every Si is covalently bonded to 4 O atoms in a continuous network. Melting requires breaking strong covalent bonds. CO₂ exists as discrete O=C=O molecules with only weak LDF between them. This dramatic difference in bonding type explains the huge difference in thermal stability.'
          }
        ]
      }
    },
    {
      id: 'sm7-ap-mc-2',
      type: 'multiple-choice' as const,
      title: 'AP-Style Multiple Choice — Set 2',
      content: 'More AP-style questions integrating concepts from all parts.',
      exercise: {
        questions: [
          {
            question: 'On a heating curve for water, during which region(s) is the temperature NOT changing?',
            options: [
              'While the solid is being heated and while the gas is being heated',
              'During melting and during vaporization only',
              'Only during vaporization',
              'The temperature always changes when heat is added'
            ],
            correctAnswer: 1,
            explanation: 'Temperature is constant during phase changes (melting and vaporization). During these plateaus, all added energy goes into overcoming IMFs, not into increasing kinetic energy. Temperature changes only in the single-phase regions.'
          },
          {
            question: 'A liquid has a high surface tension, high viscosity, low vapor pressure, and high boiling point. What can you conclude about its intermolecular forces?',
            options: [
              'The substance has very weak IMFs',
              'The substance has only London Dispersion Forces',
              'The substance has strong intermolecular forces',
              'The substance is a noble gas'
            ],
            correctAnswer: 2,
            explanation: 'All four observations — high surface tension, high viscosity, low vapor pressure, and high boiling point — are consistent with strong IMFs. Strong attractions between molecules keep them together tightly, resist flow, resist escaping to the gas phase, and require more energy to boil.'
          },
          {
            question: 'The phase diagram of a substance shows that at 1 atm, heating the solid leads directly to the gas phase without passing through the liquid phase. Which statement must be true?',
            options: [
              'The substance has no triple point',
              'The triple point pressure is above 1 atm',
              'The critical temperature is below room temperature',
              'The substance is water'
            ],
            correctAnswer: 1,
            explanation: 'If a substance sublimes at 1 atm (goes solid → gas without a liquid phase), then 1 atm must be below the triple point pressure. The liquid phase only exists at pressures ≥ the triple point pressure. This is the case for CO₂ (triple point at 5.11 atm).'
          }
        ]
      }
    },
    {
      id: 'sm7-frq-style',
      type: 'text' as const,
      title: 'AP Free-Response Style Problem',
      content: `
## AP Free-Response Practice

**Consider the following four substances:**

| Substance | Formula | Molar Mass (g/mol) | Boiling Point (°C) |
|-----------|---------|--------------------|--------------------|
| Methane | CH₄ | 16 | −161 |
| Hydrogen sulfide | H₂S | 34 | −60 |
| Water | H₂O | 18 | 100 |
| Hydrogen fluoride | HF | 20 | 19.5 |

### Analysis

All four are hydrides of Period 2 or 3 elements. If only LDF mattered, boiling points would increase with molar mass: CH₄ < H₂O < HF < H₂S.

But the actual order is: CH₄ (−161) < H₂S (−60) < HF (19.5) < H₂O (100).

**Why?**

- **CH₄**: Nonpolar, tetrahedral → LDF only → very low bp
- **H₂S**: Polar, but S is not F/O/N → no H-bonding → dipole-dipole + LDF → moderate bp
- **HF**: H-bonding (H–F) → high bp, but only one H per molecule limits the H-bond network
- **H₂O**: H-bonding (O–H), and each molecule has 2 H atoms and 2 lone pairs → extensive 3D H-bonding network → highest bp

### Key Lesson

Water\'s extraordinarily high boiling point (relative to its molar mass) is due to its ability to form an **extensive hydrogen bonding network** — each water molecule can form up to 4 hydrogen bonds.
      `
    },
    {
      id: 'sm7-frq-input',
      type: 'input-boxes' as const,
      title: 'FRQ-Style Short Answer',
      content: 'Answer these AP-style short-answer questions.',
      exercise: {
        inputs: [
          {
            label: 'What type of IMF explains why H₂O has a much higher boiling point than H₂S? (two words)',
            correctAnswer: 'hydrogen bonding',
            explanation: 'H₂O has O–H bonds where oxygen is one of the three hydrogen-bonding atoms (F, O, N). H₂S has S–H bonds, but sulfur is not F, O, or N, so H₂S cannot form hydrogen bonds. The strong H-bonding in water gives it a much higher boiling point.'
          },
          {
            label: 'In a phase diagram, the pressure at the triple point of CO₂ is 5.11 atm. Can liquid CO₂ exist at 1 atm? (yes/no)',
            correctAnswer: 'no',
            explanation: 'The liquid phase only exists at pressures at or above the triple point pressure. Since 1 atm < 5.11 atm, liquid CO₂ cannot exist at 1 atm. At atmospheric pressure, CO₂ sublimes directly from solid to gas.'
          },
          {
            label: 'On a heating curve, the flat (horizontal) regions represent _____ (phase changes/temperature increases)',
            correctAnswer: 'phase changes',
            explanation: 'The flat regions on a heating curve occur during phase changes (melting, boiling). Temperature is constant because all added energy is used to overcome intermolecular forces rather than increase kinetic energy.'
          }
        ]
      }
    },
    {
      id: 'sm7-ap-dropdown',
      type: 'dropdown-select' as const,
      title: 'Synthesis Fill-In',
      content: 'Complete each statement connecting structure, IMFs, and properties.',
      exercise: {
        dropdowns: [
          {
            id: 'sm7-dd1',
            label: 'Water\'s unusually high boiling point, surface tension, and specific heat are',
            options: ['London Dispersion Forces', 'dipole-dipole forces', 'hydrogen bonding', 'ionic bonding'],
            correctIndex: 2,
            explanation: 'Water\'s unusually high boiling point, surface tension, and specific heat are all attributed to its extensive hydrogen bonding network.'
          },
          {
            id: 'sm7-dd2',
            label: 'As temperature increases, molecules have more kinetic energy to overcome IMFs',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: 'As temperature increases, molecules have more kinetic energy to overcome IMFs and escape to the gas phase, so viscosity decreases (liquid flows more easily).'
          },
          {
            id: 'sm7-dd3',
            label: '_______ solids (like diamond and SiO₂) typically have the highest melting',
            options: ['ionic', 'molecular', 'metallic', 'network covalent'],
            correctIndex: 3,
            explanation: 'Network covalent solids (like diamond and SiO₂) typically have the highest melting points because melting requires breaking strong, continuous covalent bonds throughout the solid.'
          },
          {
            id: 'sm7-dd4',
            label: 'At higher altitudes, atmospheric pressure is lower',
            options: ['the same as', 'higher than', 'lower than'],
            correctIndex: 2,
            explanation: 'At higher altitudes, atmospheric pressure is lower. A liquid boils when its vapor pressure equals external pressure, so less vapor pressure is needed → the liquid boils at a lower temperature.'
          }
        ]
      }
    },
    {
      id: 'sm7-final-quiz',
      type: 'multiple-choice' as const,
      title: 'Final Comprehensive Quiz',
      content: 'Demonstrate mastery of all concepts from Parts 1–7.',
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly ranks substances from lowest to highest normal boiling point?',
            options: [
              'SiO₂ < NaCl < H₂O < CH₄',
              'CH₄ < H₂O < NaCl < SiO₂',
              'H₂O < CH₄ < SiO₂ < NaCl',
              'NaCl < SiO₂ < CH₄ < H₂O'
            ],
            correctAnswer: 1,
            explanation: 'CH₄ (molecular, LDF only, bp −161°C) < H₂O (molecular, H-bonding, bp 100°C) < NaCl (ionic, bp 1413°C) < SiO₂ (network covalent, bp 2230°C). This follows the general trend: molecular < ionic < network covalent.'
          },
          {
            question: 'A substance has the following properties: conducts electricity only when dissolved in water, has a high melting point, and is brittle. The substance is most likely:',
            options: [
              'A metallic solid',
              'A molecular solid',
              'An ionic solid',
              'A network covalent solid'
            ],
            correctAnswer: 2,
            explanation: 'Conducts when dissolved (ions free to move) but not as a solid (ions locked in lattice) → ionic. High melting point → strong ionic bonds. Brittle → displacement brings like charges together → fracture. All characteristics of an ionic solid.'
          },
          {
            question: 'According to the Clausius-Clapeyron equation, a plot of $\\ln P$ vs. $1/T$ for a liquid gives a straight line with a slope equal to:',
            options: [
              '$\\Delta H_{\\text{vap}}$',
              '$-\\Delta H_{\\text{vap}} / R$',
              '$R / \\Delta H_{\\text{vap}}$',
              '$\\Delta H_{\\text{fus}} / R$'
            ],
            correctAnswer: 1,
            explanation: 'The Clausius-Clapeyron equation is $\\ln P = -\\frac{\\Delta H_{\\text{vap}}}{R} \\cdot \\frac{1}{T} + C$. This is in the form $y = mx + b$, where $y = \\ln P$, $x = 1/T$, and the slope $m = -\\Delta H_{\\text{vap}}/R$.'
          },
          {
            question: 'Ice floats in liquid water because:',
            options: [
              'Ice has stronger intermolecular forces than liquid water',
              'Ice forms an open hexagonal lattice due to hydrogen bonding, making it less dense than liquid water',
              'Liquid water has stronger London Dispersion Forces',
              'Ice has higher kinetic energy than liquid water'
            ],
            correctAnswer: 1,
            explanation: 'In ice, hydrogen bonding creates a rigid, open hexagonal crystal structure with significant empty space. When ice melts, some H-bonds break and molecules pack more closely together. This is why liquid water is denser than ice — a rare and critically important anomaly.'
          }
        ]
      }
    },
    {
      id: 'sm7-exit-input',
      type: 'input-boxes' as const,
      title: 'Course Summary Exit Check',
      content: 'Complete these final summary statements.',
      exercise: {
        inputs: [
          {
            label: 'The three elements whose electronegative atoms enable hydrogen bonding when bonded to H are F, O, and _____ (one letter)',
            correctAnswer: 'N',
            explanation: 'Hydrogen bonding occurs when H is bonded to F, O, or N — the three most electronegative elements with small atomic radii and lone pairs. These three create strong enough partial charges for the special H-bonding interaction.'
          },
          {
            label: 'For the same substance, $\\Delta H_{\\text{vap}}$ is always _____ than $\\Delta H_{\\text{fus}}$ (greater/less)',
            correctAnswer: 'greater',
            explanation: 'Vaporization completely separates molecules (overcomes all remaining IMFs), while melting only partially disrupts the solid structure. Therefore, $\\Delta H_{\\text{vap}} > \\Delta H_{\\text{fus}}$ for any substance.'
          },
          {
            label: 'The type of crystalline solid with the highest typical melting points is _____ (ionic/molecular/metallic/network covalent)',
            correctAnswer: 'network covalent',
            explanation: 'Network covalent solids (like diamond, SiC, SiO₂) have the highest melting points because the entire solid is one continuous network of strong covalent bonds. Melting requires breaking these bonds throughout the entire structure.'
          }
        ]
      }
    }
  ]
};
