export const chemPropertiesStatesMatterPart6Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm6-intro',
      type: 'text' as const,
      title: 'Problem-Solving Workshop — Introduction',
      content: `# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Predicting States and Comparing Properties Based on IMFs**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'sm6-imf-review',
      type: 'text' as const,
      title: 'Quick IMF Review',
      content: `
## Quick Review: IMF Strength Ranking

From **weakest to strongest**:

---

### 🧪 IMF Comparison Table

| IMF Type | Present In | Key Detail |
|----------|-----------|------------|
| **London Dispersion (LDF)** | ALL molecules | Strength ↑ with molar mass & surface area |
| **Dipole-Dipole** | Polar molecules | Requires permanent dipoles |
| **Hydrogen Bonding** | H bonded to **F, O, or N** | Much stronger than ordinary dipole-dipole |
| **Ion-Dipole** | Ions + polar molecules | Key for dissolving ionic compounds in water |

---

### 📌 Comparing Substances

| Step | Action |
|------|--------|
| 1 | Identify the **dominant IMF** in each substance |
| 2 | If same IMF type → compare **molar mass** (affects LDF strength) |
| 3 | Stronger IMFs → higher bp, higher surface tension, higher viscosity, **lower** vapor pressure |

> ⚠️ **Key Rule:** Hydrogen bonding requires H bonded to **F, O, or N** AND a lone pair on F, O, or N on another molecule. Don't forget both conditions!
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
            question: '$CH_{4}$ (molar mass 16 g/mol) is a gas at room temperature while $H_{2}O$ (molar mass 18 g/mol) is a liquid, even though they have similar molar masses. Why?',
            options: [
              '$CH_{4}$ has stronger LDF because carbon is larger',
              '$H_{2}O$ has hydrogen bonding, which is much stronger than the LDF in nonpolar $CH_{4}$',
              '$CH_{4}$ is ionic and $H_{2}O$ is molecular',
              '$H_{2}O$ has a higher molar mass'
            ],
            correctAnswer: 1,
            explanation: '$CH_{4}$ is nonpolar (tetrahedral, symmetric) and only has weak LDF. $H_{2}O$ is polar with strong hydrogen bonding (O–H···O). The much stronger H-bonds in water give it a much higher boiling point (100°C vs. −161°C), so water is liquid while methane is gas at 25°C.'
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
            question: 'NaCl is a solid at room temperature, but ethanol $(C_{2}H_{5}OH)$ is a liquid. What best explains this?',
            options: [
              'Ethanol has weaker IMFs (H-bonding) than the strong ionic bonds in NaCl',
              'NaCl has a lower molar mass',
              'Ethanol is nonpolar',
              'NaCl has London Dispersion Forces only'
            ],
            correctAnswer: 0,
            explanation: 'NaCl is an ionic solid held together by very strong electrostatic forces between $Na^{+}$ and $Cl^{-}$ ions (mp 801°C). Ethanol is a molecular substance with hydrogen bonding — much weaker than ionic bonds — so it\'s a liquid at room temperature (bp 78°C).'
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
| $CH_{4}$ vs. $H_{2}O$ | $H_{2}O$ | H-bonding ≫ LDF |
| HF vs. HCl | HF | H-bonding > dipole-dipole + LDF |
| n-pentane vs. neopentane | n-pentane | More surface area → stronger LDF |
| NaCl vs. $CH_{3}OH$ | NaCl | Ionic bonds ≫ H-bonding |
| $H_{2}O$ vs. $H_{2}S$ | $H_{2}O$ | H-bonding (O) > no H-bonding (S not F/O/N) |
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
            question: 'Rank from lowest to highest boiling point: $CH_{3}OH$ (methanol), $CH_{3}CH_{3}$ (ethane), $CH_{3}F$ (fluoromethane).',
            options: [
              '$CH_{3}CH_{3}$ < $CH_{3}F$ < $CH_{3}OH$',
              '$CH_{3}OH$ < $CH_{3}F$ < $CH_{3}CH_{3}$',
              '$CH_{3}F$ < $CH_{3}CH_{3}$ < $CH_{3}OH$',
              '$CH_{3}OH$ < $CH_{3}CH_{3}$ < $CH_{3}F$'
            ],
            correctAnswer: 0,
            explanation: '$CH_{3}CH_{3}$ is nonpolar (LDF only, bp −89°C). $CH_{3}F$ is polar (dipole-dipole + LDF, bp −78°C). $CH_{3}OH$ has hydrogen bonding (O–H, bp 65°C). Order: LDF < dipole-dipole < H-bonding.'
          },
          {
            question: 'Which substance has the highest boiling point?',
            options: [
              'Ne (molar mass 20)',
              '$O_{2}$ (molar mass 32)',
              '$Cl_{2}$ (molar mass 71)',
              '$Br_{2}$ (molar mass 160)'
            ],
            correctAnswer: 3,
            explanation: 'All four are nonpolar molecules with only LDF. $Br_{2}$ has the highest molar mass (160 g/mol), giving it the strongest LDF and the highest boiling point (59°C). Ne boils at −246°C, $O_{2}$ at −183°C, $Cl_{2}$ at −34°C.'
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
            options: ['Water $(H_{2}O)$', 'Ethanol $(C_{2}H_{5}OH)$'],
            correctIndex: 1,
            explanation: 'Ethanol has weaker H-bonding than water (one OH group vs. two, and ethanol\'s nonpolar tail contributes more LDF character). Weaker IMFs → molecules escape more easily → higher vapor pressure.'
          },
          {
            id: 'sm6-vp-dd2',
            label: 'Diethyl ether cannot form hydrogen bonds as a pure substance (no O–H or N–H)',
            options: ['Diethyl ether $(C_{2}H_{5}OC_{2}H_{5})$', 'Ethanol $(C_{2}H_{5}OH)$'],
            correctIndex: 0,
            explanation: 'Diethyl ether cannot form hydrogen bonds as a pure substance (no O–H or N–H). Ethanol has H-bonding (O–H). Weaker IMFs in ether → higher vapor pressure.'
          },
          {
            id: 'sm6-vp-dd3',
            label: 'Both are nonpolar (LDF only)',
            options: ['Pentane $(C_{5}H_{12})$', 'Decane $(C_{10}H_{22})$'],
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
              'Hexane $(C_{6}H_{14})$ — LDF only',
              'Acetone $(CH_{3}COCH_{3})$ — dipole-dipole',
              'Ethanol $(C_{2}H_{5}OH)$ — H-bonding',
              'Water $(H_{2}O)$ — strong, extensive H-bonding network'
            ],
            correctAnswer: 3,
            explanation: 'Water has the highest surface tension among common molecular liquids (72.8 mN/m at 20°C) due to its extensive hydrogen bonding network. Each water molecule can form up to 4 hydrogen bonds.'
          },
          {
            question: 'Glycerol ($C_{3}H_{8}O_{3}$, with 3 OH groups) is much more viscous than ethanol ($C_{2}H_{5}OH$, with 1 OH group). Why?',
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
            question: 'Arrange the following in order of increasing boiling point: Ar, NaCl, $C_{2}H_{5}OH$, $CH_{4}$',
            options: [
              'Ar < $CH_{4}$ < $C_{2}H_{5}OH$ < NaCl',
              '$CH_{4}$ < Ar < NaCl < $C_{2}H_{5}OH$',
              'NaCl < $C_{2}H_{5}OH$ < $CH_{4}$ < Ar',
              '$C_{2}H_{5}OH$ < $CH_{4}$ < Ar < NaCl'
            ],
            correctAnswer: 0,
            explanation: 'Ar (−186°C, LDF, small atom) < $CH_{4}$ (−161°C, LDF, slightly larger) < $C_{2}H_{5}OH$ (78°C, H-bonding) < NaCl (1413°C, ionic bonding). This follows the expected trend: weak LDF < H-bonding < ionic.'
          },
          {
            question: 'At 25°C, which substance has the lowest vapor pressure?',
            options: [
              '$CH_{3}OCH_{3}$ (dimethyl ether, dipole-dipole)',
              '$C_{2}H_{5}OH$ (ethanol, H-bonding)',
              '$C_{3}H_{8}$ (propane, LDF only)',
              '$H_{2}O$ (water, strong H-bonding)'
            ],
            correctAnswer: 3,
            explanation: 'Water has the strongest IMFs (extensive H-bonding network with two O–H bonds and two lone pairs per molecule). Stronger IMFs → harder for molecules to escape → lower vapor pressure.'
          }
        ]
      }
    }
  ]
};
