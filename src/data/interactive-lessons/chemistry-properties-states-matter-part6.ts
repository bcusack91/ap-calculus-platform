export const chemPropertiesStatesMatterPart6Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm6-intro',
      type: 'text' as const,
      title: 'Problem-Solving Workshop — Introduction',
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Predicting States and Comparing Properties Based on IMFs**

In this workshop, we\'ll practice the most important skill for AP Chemistry: **connecting the type and strength of intermolecular forces to observable physical properties** of substances.

The chain of reasoning is:
$$\\text{Structure} \\rightarrow \\text{IMFs} \\rightarrow \\text{Physical Properties}$$

Stronger IMFs → higher melting/boiling points, higher surface tension, higher viscosity, lower vapor pressure.
      `
    },
    {
      id: 'sm6-imf-review',
      type: 'text' as const,
      title: 'Quick IMF Review',
      content: `
## Quick Review: IMF Strength Ranking

From **weakest to strongest**:

1. **London Dispersion Forces (LDF)** — present in ALL molecules
   - Strength increases with molar mass and surface area
   - Only force in nonpolar molecules

2. **Dipole-Dipole Forces** — between polar molecules
   - Stronger than LDF of comparable size
   - Requires permanent dipoles

3. **Hydrogen Bonding** — special, strong dipole-dipole
   - Requires H bonded to **F, O, or N** and a lone pair on F, O, or N on another molecule
   - Much stronger than ordinary dipole-dipole

4. **Ion-Dipole Forces** — between ions and polar molecules
   - Important for dissolving ionic compounds in water

### Critical Reminder

When comparing two substances:
- First identify the **dominant IMF** in each.
- If both have the same type of IMF, compare **molar mass** (affects LDF strength).
- The substance with stronger IMFs has: higher bp, higher surface tension, higher viscosity, **lower** vapor pressure.
      `
    },
    {
      id: 'sm6-predict-state-q',
      type: 'multiple-choice' as const,
      title: 'Predicting Physical State',
      content: 'Predict the state of matter at room temperature (25°C, 1 atm) based on IMFs.',
      exercise: {
        questions: [
          {
            question: 'CH₄ (molar mass 16 g/mol) is a gas at room temperature while H₂O (molar mass 18 g/mol) is a liquid, even though they have similar molar masses. Why?',
            options: [
              'CH₄ has stronger LDF because carbon is larger',
              'H₂O has hydrogen bonding, which is much stronger than the LDF in nonpolar CH₄',
              'CH₄ is ionic and H₂O is molecular',
              'H₂O has a higher molar mass'
            ],
            correctAnswer: 1,
            explanation: 'CH₄ is nonpolar (tetrahedral, symmetric) and only has weak LDF. H₂O is polar with strong hydrogen bonding (O–H···O). The much stronger H-bonds in water give it a much higher boiling point (100°C vs. −161°C), so water is liquid while methane is gas at 25°C.'
          },
          {
            question: 'Predict the order of boiling points: HF, HCl, HBr, HI.',
            options: [
              'HF < HCl < HBr < HI (increasing molar mass)',
              'HI < HBr < HCl < HF (decreasing molar mass)',
              'HCl < HBr < HI < HF (HF highest due to H-bonding; rest follow LDF trend)',
              'HF < HI < HBr < HCl'
            ],
            correctAnswer: 2,
            explanation: 'HF has strong hydrogen bonding (H bonded to F), giving it the highest bp. For HCl, HBr, HI — all have dipole-dipole forces, but the dominant factor is increasing molar mass → increasing LDF: HCl (bp −85°C) < HBr (bp −67°C) < HI (bp −35°C) < HF (bp 19°C).'
          },
          {
            question: 'NaCl is a solid at room temperature, but ethanol (C₂H₅OH) is a liquid. What best explains this?',
            options: [
              'Ethanol has weaker IMFs (H-bonding) than the strong ionic bonds in NaCl',
              'NaCl has a lower molar mass',
              'Ethanol is nonpolar',
              'NaCl has London Dispersion Forces only'
            ],
            correctAnswer: 0,
            explanation: 'NaCl is an ionic solid held together by very strong electrostatic forces between Na⁺ and Cl⁻ ions (mp 801°C). Ethanol is a molecular substance with hydrogen bonding — much weaker than ionic bonds — so it\'s a liquid at room temperature (bp 78°C).'
          }
        ]
      }
    },
    {
      id: 'sm6-compare-bp',
      type: 'text' as const,
      title: 'Systematic Boiling Point Comparison',
      content: `
## Strategy for Comparing Boiling Points

### Step-by-Step Method

**Step 1:** Determine the type of substance (ionic, molecular, metallic, network covalent).
- Ionic/metallic/network covalent → generally much higher bp than molecular.

**Step 2:** For molecular substances, identify the **dominant IMF**:
- Can the molecule form **hydrogen bonds**? (H bonded to F, O, or N?)
- Is the molecule **polar**? (dipole-dipole + LDF)
- Is the molecule **nonpolar**? (LDF only)

**Step 3:** If two substances have the **same type** of dominant IMF, compare:
- **Molar mass** (larger → stronger LDF → higher bp)
- **Number of H-bonding sites** (more → stronger H-bonding network → higher bp)
- **Molecular shape** (more elongated → more surface contact → higher bp)

### Common Comparisons on the AP Exam

| Pair | Higher BP | Why |
|------|-----------|-----|
| CH₄ vs. H₂O | H₂O | H-bonding ≫ LDF |
| HF vs. HCl | HF | H-bonding > dipole-dipole + LDF |
| n-pentane vs. neopentane | n-pentane | More surface area → stronger LDF |
| NaCl vs. CH₃OH | NaCl | Ionic bonds ≫ H-bonding |
| H₂O vs. H₂S | H₂O | H-bonding (O) > no H-bonding (S not F/O/N) |
      `
    },
    {
      id: 'sm6-bp-ranking',
      type: 'multiple-choice' as const,
      title: 'Boiling Point Rankings',
      content: 'Rank these substances by boiling point.',
      exercise: {
        questions: [
          {
            question: 'Rank from lowest to highest boiling point: CH₃OH (methanol), CH₃CH₃ (ethane), CH₃F (fluoromethane).',
            options: [
              'CH₃CH₃ < CH₃F < CH₃OH',
              'CH₃OH < CH₃F < CH₃CH₃',
              'CH₃F < CH₃CH₃ < CH₃OH',
              'CH₃OH < CH₃CH₃ < CH₃F'
            ],
            correctAnswer: 0,
            explanation: 'CH₃CH₃ is nonpolar (LDF only, bp −89°C). CH₃F is polar (dipole-dipole + LDF, bp −78°C). CH₃OH has hydrogen bonding (O–H, bp 65°C). Order: LDF < dipole-dipole < H-bonding.'
          },
          {
            question: 'Which substance has the highest boiling point?',
            options: [
              'Ne (molar mass 20)',
              'O₂ (molar mass 32)',
              'Cl₂ (molar mass 71)',
              'Br₂ (molar mass 160)'
            ],
            correctAnswer: 3,
            explanation: 'All four are nonpolar molecules with only LDF. Br₂ has the highest molar mass (160 g/mol), giving it the strongest LDF and the highest boiling point (59°C). Ne boils at −246°C, O₂ at −183°C, Cl₂ at −34°C.'
          }
        ]
      }
    },
    {
      id: 'sm6-vapor-pressure-compare',
      type: 'dropdown-select' as const,
      title: 'Comparing Vapor Pressures',
      content: 'For each pair, select which substance has the HIGHER vapor pressure at the same temperature.',
      exercise: {
        dropdowns: [
          {
            id: 'sm6-vp-dd1',
            label: 'Ethanol has weaker H-bonding than water (one OH group vs',
            options: ['Water (H₂O)', 'Ethanol (C₂H₅OH)'],
            correctIndex: 1,
            explanation: 'Ethanol has weaker H-bonding than water (one OH group vs. two, and ethanol\'s nonpolar tail contributes more LDF character). Weaker IMFs → molecules escape more easily → higher vapor pressure.'
          },
          {
            id: 'sm6-vp-dd2',
            label: 'Diethyl ether cannot form hydrogen bonds as a pure substance (no O–H or N–H)',
            options: ['Diethyl ether (C₂H₅OC₂H₅)', 'Ethanol (C₂H₅OH)'],
            correctIndex: 0,
            explanation: 'Diethyl ether cannot form hydrogen bonds as a pure substance (no O–H or N–H). Ethanol has H-bonding (O–H). Weaker IMFs in ether → higher vapor pressure.'
          },
          {
            id: 'sm6-vp-dd3',
            label: 'Both are nonpolar (LDF only)',
            options: ['Pentane (C₅H₁₂)', 'Decane (C₁₀H₂₂)'],
            correctIndex: 0,
            explanation: 'Both are nonpolar (LDF only). Pentane has lower molar mass → weaker LDF → molecules escape more easily → higher vapor pressure.'
          }
        ]
      }
    },
    {
      id: 'sm6-surface-tension-viscosity',
      type: 'multiple-choice' as const,
      title: 'Surface Tension & Viscosity Comparisons',
      content: 'Apply IMF reasoning to surface tension and viscosity.',
      exercise: {
        questions: [
          {
            question: 'Which liquid has the highest surface tension at room temperature?',
            options: [
              'Hexane (C₆H₁₄) — LDF only',
              'Acetone (CH₃COCH₃) — dipole-dipole',
              'Ethanol (C₂H₅OH) — H-bonding',
              'Water (H₂O) — strong, extensive H-bonding network'
            ],
            correctAnswer: 3,
            explanation: 'Water has the highest surface tension among common molecular liquids (72.8 mN/m at 20°C) due to its extensive hydrogen bonding network. Each water molecule can form up to 4 hydrogen bonds.'
          },
          {
            question: 'Glycerol (C₃H₈O₃, with 3 OH groups) is much more viscous than ethanol (C₂H₅OH, with 1 OH group). Why?',
            options: [
              'Glycerol is nonpolar',
              'Glycerol has 3 OH groups enabling a more extensive H-bonding network, creating greater resistance to flow',
              'Ethanol has stronger IMFs than glycerol',
              'Glycerol has a lower molar mass than ethanol'
            ],
            correctAnswer: 1,
            explanation: 'Glycerol has three hydroxyl (–OH) groups per molecule, enabling extensive hydrogen bonding that creates a tangled network. This makes it very difficult for molecules to slide past one another, resulting in very high viscosity (about 1,400× that of water).'
          }
        ]
      }
    },
    {
      id: 'sm6-comprehensive-input',
      type: 'input-boxes' as const,
      title: 'Property Prediction Practice',
      content: 'Predict properties based on IMF reasoning.',
      exercise: {
        inputs: [
          {
            label: 'A substance with strong H-bonding has a _____ vapor pressure compared to a similar-sized nonpolar substance (higher/lower)',
            correctAnswer: 'lower',
            explanation: 'Stronger IMFs (like H-bonding) make it harder for molecules to escape to the gas phase, resulting in lower vapor pressure. Nonpolar substances with only weak LDF have higher vapor pressures.'
          },
          {
            label: 'Between n-butane (straight chain) and isobutane (branched), _____ has the higher boiling point (n-butane/isobutane)',
            correctAnswer: 'n-butane',
            explanation: 'n-Butane\'s elongated shape provides more surface area for London Dispersion Forces than the compact, spherical isobutane. More surface contact → stronger LDF → higher boiling point.'
          },
          {
            label: 'The dominant IMF in HF is _____ (LDF/dipole-dipole/hydrogen bonding)',
            correctAnswer: 'hydrogen bonding',
            explanation: 'HF has hydrogen directly bonded to fluorine (one of the three H-bonding elements: F, O, N). Fluorine also has lone pairs to accept H-bonds. So the dominant IMF is hydrogen bonding.'
          }
        ]
      }
    },
    {
      id: 'sm6-exit-quiz',
      type: 'multiple-choice' as const,
      title: 'Workshop Exit Quiz',
      content: 'Final comprehensive check on predicting properties from IMFs.',
      exercise: {
        questions: [
          {
            question: 'Arrange the following in order of increasing boiling point: Ar, NaCl, C₂H₅OH, CH₄',
            options: [
              'Ar < CH₄ < C₂H₅OH < NaCl',
              'CH₄ < Ar < NaCl < C₂H₅OH',
              'NaCl < C₂H₅OH < CH₄ < Ar',
              'C₂H₅OH < CH₄ < Ar < NaCl'
            ],
            correctAnswer: 0,
            explanation: 'Ar (−186°C, LDF, small atom) < CH₄ (−161°C, LDF, slightly larger) < C₂H₅OH (78°C, H-bonding) < NaCl (1413°C, ionic bonding). This follows the expected trend: weak LDF < H-bonding < ionic.'
          },
          {
            question: 'At 25°C, which substance has the lowest vapor pressure?',
            options: [
              'CH₃OCH₃ (dimethyl ether, dipole-dipole)',
              'C₂H₅OH (ethanol, H-bonding)',
              'C₃H₈ (propane, LDF only)',
              'H₂O (water, strong H-bonding)'
            ],
            correctAnswer: 3,
            explanation: 'Water has the strongest IMFs (extensive H-bonding network with two O–H bonds and two lone pairs per molecule). Stronger IMFs → harder for molecules to escape → lower vapor pressure.'
          }
        ]
      }
    }
  ]
};
