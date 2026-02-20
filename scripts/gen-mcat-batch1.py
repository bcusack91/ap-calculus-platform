#!/usr/bin/env python3
"""Generate MCAT Prep Batch 1: General Chemistry (7), Organic Chemistry (7), Biochemistry (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# GENERAL CHEMISTRY (7 parts)
###############################################################################

def gen_genchem():
    parts = {}
    parts[1] = r"""export const mcatGenChemPart1Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc1-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 1 of 7 — Atomic Structure & Periodic Trends**

### Atomic Structure

- **Quantum numbers**: $n$ (shell), $l$ (subshell: 0=s, 1=p, 2=d, 3=f), $m_l$ (-l to +l), $m_s$ ($\\pm 1/2$)
- **Electron configuration**: Fill in order of increasing energy (1s, 2s, 2p, 3s, 3p, 4s, 3d...)
- **Aufbau principle**: Electrons fill lowest energy orbitals first
- **Hund's rule**: Electrons occupy degenerate orbitals singly before pairing
- **Pauli exclusion**: No two electrons can share all four quantum numbers

### Periodic Trends (HIGH YIELD!)

| Property | Across Period → | Down Group ↓ |
|----------|----------------|--------------|
| Atomic radius | Decreases | Increases |
| Ionization energy | Increases | Decreases |
| Electronegativity | Increases | Decreases |
| Electron affinity | More negative | Less negative |

### MCAT Trap

Transition metals: 4s electrons are removed FIRST despite being filled first. $\\text{Fe}^{2+}$: lose 4s$^2$, keep 3d$^6$.`
    },
    {
      id: 'gc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Atomic Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'The electron configuration of $\\text{Cr}$ (Z=24) is:',
            options: ['$[\\text{Ar}]\\,3d^5\\,4s^1$ — half-filled d subshell is more stable', '$[\\text{Ar}]\\,3d^4\\,4s^2$ — following standard filling order', '$[\\text{Ar}]\\,3d^6$ — all electrons in d orbitals', '$[\\text{Ar}]\\,3d^3\\,4s^2\\,4p^1$'],
            correctAnswer: 0,
            explanation: 'Cr is an exception: a half-filled 3d subshell ($3d^5\\,4s^1$) is more stable than $3d^4\\,4s^2$. Cu has a similar exception ($3d^{10}\\,4s^1$).'
          },
          {
            question: 'Which has the LARGEST atomic radius?',
            options: ['K', 'Ca', 'Br', 'Kr'],
            correctAnswer: 0,
            explanation: 'K is furthest left and lowest in the period. Across a period, atomic radius decreases (more protons pulling electrons in). K > Ca > Br > Kr.'
          },
          {
            question: 'An element has a large jump between its 2nd and 3rd ionization energies. It is most likely in Group:',
            options: ['IIA (2)', 'IIIA (13)', 'IA (1)', 'IVA (14)'],
            correctAnswer: 0,
            explanation: 'Group IIA has 2 valence electrons. Removing the 3rd requires breaking into a noble gas core — huge energy jump.'
          }
        ]
      }
    },
    {
      id: 'gc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know quantum numbers cold — the MCAT loves "which set of quantum numbers is impossible?"
- Periodic trends: radius ↑ down/left, IE ↑ up/right, EN ↑ up/right
- Exceptions: Cr ($3d^5\\,4s^1$), Cu ($3d^{10}\\,4s^1$)
- Transition metal ions: remove 4s first`
    }
  ]
};
"""

    parts[2] = r"""export const mcatGenChemPart2Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc2-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 2 of 7 — Bonding & Molecular Geometry**

### Bond Types

| Type | Description | Example |
|------|-------------|---------|
| Ionic | Metal + nonmetal, electron transfer | NaCl |
| Covalent | Nonmetal + nonmetal, electron sharing | $H_2O$ |
| Metallic | Metal + metal, electron sea | Fe |
| Coordinate | Both electrons from one atom | $NH_4^+$ |

### VSEPR Geometry

| Electron groups | Molecular geometry | Bond angle | Example |
|----------------|-------------------|------------|---------|
| 2 | Linear | 180° | $CO_2$ |
| 3 (0 lone) | Trigonal planar | 120° | $BF_3$ |
| 3 (1 lone) | Bent | ~117° | $SO_2$ |
| 4 (0 lone) | Tetrahedral | 109.5° | $CH_4$ |
| 4 (1 lone) | Trigonal pyramidal | ~107° | $NH_3$ |
| 4 (2 lone) | Bent | ~104.5° | $H_2O$ |

### Intermolecular Forces (weakest → strongest)

London dispersion < Dipole-dipole < Hydrogen bonding < Ion-dipole`
    },
    {
      id: 'gc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bonding & Geometry** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\text{XeF}_4$ has what molecular geometry?',
            options: ['Square planar (6 electron groups, 2 lone pairs)', 'Tetrahedral', 'Seesaw', 'Octahedral'],
            correctAnswer: 0,
            explanation: 'Xe has 8 valence e$^-$ + 4 from F bonds + 4 remain = 6 electron groups total (4 bonds + 2 lone pairs on Xe). This gives square planar geometry.'
          },
          {
            question: 'Which intermolecular force explains why $\\text{CH}_3\\text{OH}$ (MW 32) has a higher boiling point than $\\text{CH}_3\\text{CH}_3$ (MW 30)?',
            options: ['Hydrogen bonding in methanol', 'Greater London dispersion forces in ethane', 'Ion-dipole interactions', 'Covalent bonding differences'],
            correctAnswer: 0,
            explanation: 'Methanol has O-H bonds capable of hydrogen bonding (O is electronegative with lone pairs). Ethane only has weak London dispersion forces.'
          }
        ]
      }
    },
    {
      id: 'gc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Count ALL electron groups (bonds + lone pairs) for VSEPR
- Lone pairs compress bond angles below ideal
- H-bonding requires H bonded to F, O, or N AND a lone pair on another F, O, or N
- Boiling point: H-bonding > dipole-dipole > London (for similar MW)`
    }
  ]
};
"""

    parts[3] = r"""export const mcatGenChemPart3Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc3-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 3 of 7 — Stoichiometry, Solutions & Concentration**

### Key Formulas

$$\\text{Molarity (M)} = \\frac{\\text{mol solute}}{\\text{L solution}}$$

$$\\text{Dilution: } M_1V_1 = M_2V_2$$

$$\\text{Molality (m)} = \\frac{\\text{mol solute}}{\\text{kg solvent}}$$

### Colligative Properties

$$\\Delta T_b = K_b \\cdot m \\cdot i \\qquad \\Delta T_f = K_f \\cdot m \\cdot i$$

where $i$ = van't Hoff factor (number of particles in solution)

- $\\text{NaCl}$: $i = 2$ (Na$^+$ + Cl$^-$)
- $\\text{CaCl}_2$: $i = 3$ (Ca$^{2+}$ + 2Cl$^-$)
- Glucose: $i = 1$ (molecular, doesn't dissociate)

### Solubility Rules (MCAT Favorites)

- All Na$^+$, K$^+$, NH$_4^+$ salts are soluble
- All nitrates (NO$_3^-$) and acetates are soluble
- Most halides soluble EXCEPT AgCl, PbCl$_2$
- Most sulfates soluble EXCEPT BaSO$_4$, PbSO$_4$`
    },
    {
      id: 'gc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Solutions & Stoichiometry** 🎯',
      exercise: {
        questions: [
          {
            question: 'A researcher dissolves 0.1 mol NaCl in 500 mL of solution. What is the molarity of Na$^+$ ions?',
            options: ['0.2 M', '0.1 M', '0.4 M', '0.05 M'],
            correctAnswer: 0,
            explanation: 'M = 0.1 mol / 0.5 L = 0.2 M for NaCl. Since NaCl fully dissociates, [Na$^+$] = 0.2 M and [Cl$^-$] = 0.2 M.'
          },
          {
            question: 'Which 0.1 m aqueous solution has the LOWEST freezing point?',
            options: ['$\\text{CaCl}_2$ ($i = 3$)', '$\\text{NaCl}$ ($i = 2$)', 'Glucose ($i = 1$)', '$\\text{KBr}$ ($i = 2$)'],
            correctAnswer: 0,
            explanation: '$\\Delta T_f = K_f \\cdot m \\cdot i$. CaCl$_2$ has the highest $i$ (3 particles), giving the greatest freezing point depression (lowest freezing point).'
          }
        ]
      }
    },
    {
      id: 'gc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Molarity = mol/L solution; Molality = mol/kg solvent
- Colligative properties depend on $i$ (number of dissolved particles)
- $M_1V_1 = M_2V_2$ for dilutions
- Know solubility rules: all alkali metals and nitrates are soluble`
    }
  ]
};
"""

    parts[4] = r"""export const mcatGenChemPart4Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc4-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 4 of 7 — Acids, Bases, pH & Buffers (ULTRA HIGH YIELD)**

### Definitions

| Theory | Acid | Base |
|--------|------|------|
| Arrhenius | Produces $H^+$ | Produces $OH^-$ |
| Bronsted-Lowry | Donates $H^+$ | Accepts $H^+$ |
| Lewis | Accepts $e^-$ pair | Donates $e^-$ pair |

### pH Calculations

$$\\text{pH} = -\\log[H^+] \\qquad \\text{pOH} = -\\log[OH^-]$$

$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25°C)$$

$$K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$$

### Henderson-Hasselbalch (Buffer Equation)

$$\\text{pH} = pK_a + \\log\\frac{[A^-]}{[HA]}$$

- At half-equivalence point: $[A^-] = [HA]$, so $\\text{pH} = pK_a$
- Buffers work best when pH is within $\\pm 1$ of $pK_a$`
    },
    {
      id: 'gc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Acids, Bases & Buffers** 🎯',
      exercise: {
        questions: [
          {
            question: 'A weak acid has $K_a = 1.0 \\times 10^{-5}$. What is the pH of a 0.1 M solution?',
            options: ['3.0', '5.0', '2.0', '4.0'],
            correctAnswer: 0,
            explanation: '$[H^+] = \\sqrt{K_a \\cdot C} = \\sqrt{10^{-5} \\times 0.1} = \\sqrt{10^{-6}} = 10^{-3}$. pH = 3.0. This shortcut (valid when $C \\gg K_a$) is extremely high yield for the MCAT.'
          },
          {
            question: 'An acetic acid buffer ($pK_a = 4.76$) contains 0.2 M $\\text{CH}_3\\text{COOH}$ and 0.6 M $\\text{CH}_3\\text{COO}^-$. The pH is:',
            options: ['5.24', '4.76', '4.28', '5.76'],
            correctAnswer: 0,
            explanation: 'Henderson-Hasselbalch: pH = $4.76 + \\log(0.6/0.2) = 4.76 + \\log(3) \\approx 4.76 + 0.48 = 5.24$.'
          },
          {
            question: 'During titration of a weak acid with a strong base, the pH at the equivalence point is:',
            options: ['Greater than 7', 'Equal to 7', 'Less than 7', 'Equal to $pK_a$'],
            correctAnswer: 0,
            explanation: 'At equivalence, all HA is converted to $A^-$ (conjugate base), which hydrolyzes water to produce $OH^-$. So pH > 7.'
          }
        ]
      }
    },
    {
      id: 'gc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Weak acid pH: $\\text{pH} = \\frac{1}{2}(pK_a - \\log C)$ or use $[H^+] = \\sqrt{K_a C}$
- Henderson-Hasselbalch: memorize and practice
- Titration: weak acid + strong base → equivalence pH > 7
- At half-equivalence: pH = $pK_a$ (most common MCAT question!)`
    }
  ]
};
"""

    parts[5] = r"""export const mcatGenChemPart5Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc5-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 5 of 7 — Thermodynamics**

### Key Equations

$$\\Delta G = \\Delta H - T\\Delta S$$

$$\\Delta G° = -RT\\ln K$$

$$\\Delta G = \\Delta G° + RT\\ln Q$$

### Spontaneity Table

| $\\Delta H$ | $\\Delta S$ | $\\Delta G$ | Spontaneous? |
|-----------|-----------|-----------|-------------|
| − | + | Always − | Always |
| + | − | Always + | Never |
| − | − | Depends on T | Low T |
| + | + | Depends on T | High T |

### Hess's Law

$\\Delta H_{rxn} = \\sum \\Delta H_f°(\\text{products}) - \\sum \\Delta H_f°(\\text{reactants})$

Standard enthalpy of formation for elements in their standard state = 0.`
    },
    {
      id: 'gc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Thermodynamics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A reaction has $\\Delta H = +30$ kJ/mol and $\\Delta S = +100$ J/(mol$\\cdot$K). At what temperature does it become spontaneous?',
            options: ['Above 300 K', 'Below 300 K', 'At all temperatures', 'Never spontaneous'],
            correctAnswer: 0,
            explanation: '$\\Delta G = 0$ when $T = \\Delta H / \\Delta S = 30{,}000 / 100 = 300$ K. Above 300 K, $T\\Delta S > \\Delta H$, so $\\Delta G < 0$ (spontaneous). Watch units: convert kJ to J!'
          },
          {
            question: 'If $K_{eq} > 1$ at standard conditions, then $\\Delta G°$ is:',
            options: ['Negative', 'Positive', 'Zero', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\Delta G° = -RT\\ln K$. If $K > 1$, then $\\ln K > 0$, so $\\Delta G° < 0$.'
          }
        ]
      }
    },
    {
      id: 'gc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $\\Delta G < 0$: spontaneous. $\\Delta G > 0$: non-spontaneous.
- Know the spontaneity table cold
- Watch unit conversions: $\\Delta H$ often in kJ, $\\Delta S$ in J
- $K > 1 \\implies \\Delta G° < 0$; $K < 1 \\implies \\Delta G° > 0$`
    }
  ]
};
"""

    parts[6] = r"""export const mcatGenChemPart6Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc6-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 6 of 7 — Chemical Kinetics**

### Rate Law

$$\\text{Rate} = k[A]^m[B]^n$$

- $m$ and $n$ are determined experimentally (NOT from coefficients)
- Overall order = $m + n$

### Determining Order from Data

If doubling $[A]$ while holding $[B]$ constant:
- Rate doubles → first order in A
- Rate quadruples → second order in A
- Rate unchanged → zero order in A

### Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

$$\\ln k = \\ln A - \\frac{E_a}{RT}$$

- Higher $T$ → faster reaction (more molecules exceed $E_a$)
- Catalyst lowers $E_a$ but does NOT change $\\Delta G$ or $\\Delta H$

### Rate-Determining Step

The slowest step determines the overall rate law.`
    },
    {
      id: 'gc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Kinetics** 🎯',
      exercise: {
        questions: [
          {
            question: 'In an experiment, tripling $[A]$ triples the rate, and doubling $[B]$ quadruples the rate. The rate law is:',
            options: ['Rate $= k[A][B]^2$', 'Rate $= k[A]^2[B]$', 'Rate $= k[A][B]$', 'Rate $= k[A]^3[B]^2$'],
            correctAnswer: 0,
            explanation: 'Tripling [A] triples rate: first order in A ($3^1 = 3$). Doubling [B] quadruples rate: second order in B ($2^2 = 4$). Rate = $k[A][B]^2$.'
          },
          {
            question: 'A catalyst:',
            options: ['Lowers $E_a$ and speeds up both forward and reverse reactions equally', 'Increases $\\Delta G$ of the reaction', 'Shifts the equilibrium toward products', 'Only affects the forward reaction rate'],
            correctAnswer: 0,
            explanation: 'A catalyst lowers $E_a$ for both forward and reverse reactions equally. It does NOT change equilibrium ($K$, $\\Delta G$) — it only helps reach equilibrium faster.'
          }
        ]
      }
    },
    {
      id: 'gc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Rate law exponents are EXPERIMENTAL, not from balanced equation
- Method of initial rates: change one reactant, observe rate change
- Catalysts lower $E_a$ but don't change $K$, $\\Delta G$, or $\\Delta H$
- Rate-determining step = slowest elementary step`
    }
  ]
};
"""

    parts[7] = r"""export const mcatGenChemPart7Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc7-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 7 of 7 — Electrochemistry & Redox**

### Key Concepts

**Oxidation** = loss of electrons (OIL RIG)
**Reduction** = gain of electrons

### Cell Potential

$$E°_{cell} = E°_{cathode} - E°_{anode}$$

- Galvanic cell: $E°_{cell} > 0$ (spontaneous, $\\Delta G < 0$)
- Electrolytic cell: $E°_{cell} < 0$ (non-spontaneous, requires external energy)

### Nernst Equation

$$E = E° - \\frac{RT}{nF}\\ln Q = E° - \\frac{0.0592}{n}\\log Q \\quad (\\text{at } 25°C)$$

### Relationship to Free Energy

$$\\Delta G° = -nFE°$$

where $n$ = moles of electrons transferred, $F$ = 96,485 C/mol`
    },
    {
      id: 'gc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Electrochemistry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Given: $Zn^{2+}/Zn$ has $E° = -0.76$ V and $Cu^{2+}/Cu$ has $E° = +0.34$ V. In a galvanic cell, $E°_{cell}$ is:',
            options: ['$+1.10$ V (Cu is cathode, Zn is anode)', '$-1.10$ V', '$+0.42$ V', '$-0.42$ V'],
            correctAnswer: 0,
            explanation: 'In a galvanic cell, the more positive $E°$ is the cathode (reduction). $E°_{cell} = E°_{cathode} - E°_{anode} = 0.34 - (-0.76) = +1.10$ V.'
          },
          {
            question: 'In an electrolytic cell, oxidation occurs at the:',
            options: ['Anode (positive electrode)', 'Cathode (negative electrode)', 'Salt bridge', 'It varies'],
            correctAnswer: 0,
            explanation: 'Oxidation ALWAYS occurs at the anode (both galvanic and electrolytic). In electrolytic cells, the anode is positive (connected to + terminal of battery).'
          }
        ]
      }
    },
    {
      id: 'gc7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- AN OX, RED CAT: Anode = Oxidation, Reduction = Cathode (always!)
- Galvanic: spontaneous, $E° > 0$; Electrolytic: non-spontaneous, $E° < 0$
- $\\Delta G° = -nFE°$: positive cell potential means negative free energy
- Nernst equation: how concentration affects cell potential`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-general-chemistry-mcat-part{i}.ts', parts[i])

###############################################################################
# ORGANIC CHEMISTRY (7 parts)
###############################################################################

def gen_orgchem():
    parts = {}
    parts[1] = r"""export const mcatOrgChemPart1Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc1-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 1 of 7 — Functional Groups & Stereochemistry**

### Must-Know Functional Groups

| Group | Structure | Example |
|-------|-----------|---------|
| Alcohol | $-OH$ | Ethanol |
| Aldehyde | $-CHO$ | Formaldehyde |
| Ketone | $-CO-$ (internal) | Acetone |
| Carboxylic acid | $-COOH$ | Acetic acid |
| Ester | $-COOR$ | Ethyl acetate |
| Amide | $-CONHR$ | Peptide bond! |
| Amine | $-NH_2$ | Methylamine |
| Ether | $-O-$ | Diethyl ether |

### Stereochemistry

- **Chirality**: 4 different groups on a carbon → chiral center
- **Enantiomers**: Non-superimposable mirror images (same physical properties except optical rotation)
- **Diastereomers**: Stereoisomers that are NOT mirror images (different physical properties)
- **Meso compounds**: Have chiral centers but an internal plane of symmetry → optically inactive

### R/S Assignment (Cahn-Ingold-Prelog)

1. Assign priority by atomic number (highest = 1)
2. Orient lowest priority group away from you
3. 1→2→3 clockwise = R; counterclockwise = S`
    },
    {
      id: 'oc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Functional Groups & Stereochem** 🎯',
      exercise: {
        questions: [
          {
            question: 'A molecule with 2 chiral centers can have a maximum of how many stereoisomers?',
            options: ['4 (using $2^n$ rule)', '2', '3', '8'],
            correctAnswer: 0,
            explanation: 'Maximum stereoisomers = $2^n$ where $n$ = number of chiral centers. $2^2 = 4$. May be fewer if meso compounds exist.'
          },
          {
            question: 'The peptide bond is an example of which functional group?',
            options: ['Amide', 'Amine', 'Ester', 'Carboxylic acid'],
            correctAnswer: 0,
            explanation: 'The peptide bond ($-CO-NH-$) is an amide bond formed between the carboxyl group of one amino acid and the amino group of another, with loss of water.'
          }
        ]
      }
    },
    {
      id: 'oc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know ALL functional groups instantly — they appear in every MCAT passage
- $2^n$ rule for maximum stereoisomers
- Enantiomers: mirror images, same properties (except rotation). Diastereomers: different properties.
- Amide = peptide bond — this connects to biochemistry`
    }
  ]
};
"""

    parts[2] = r"""export const mcatOrgChemPart2Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc2-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 2 of 7 — SN1, SN2, E1, E2 Reactions**

### Substitution vs. Elimination Decision Tree

| Factor | SN2 | SN1 | E2 | E1 |
|--------|-----|-----|----|----|
| Substrate | Methyl/1° | 3° | 3° (or 2°) | 3° |
| Nucleophile | Strong | Weak | Strong BASE | Weak base |
| Solvent | Polar aprotic | Polar protic | — | Polar protic |
| Mechanism | 1 step, backside | 2 steps, carbocation | 1 step, anti | 2 steps |
| Stereochem | Inversion | Racemization | Anti-periplanar | — |

### Key Points

- **SN2**: Rate = $k[\\text{substrate}][\\text{nuc}]$. Backside attack → inversion. Sterically hindered substrates slow it.
- **SN1**: Rate = $k[\\text{substrate}]$. Carbocation intermediate → racemization. Favored by 3° substrates, polar protic solvents.
- **E2**: Strong BULKY base (t-BuOK) favors elimination over substitution. Anti-periplanar geometry required.
- **E1**: Shares carbocation intermediate with SN1. Heat favors elimination.`
    },
    {
      id: 'oc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Reaction Mechanisms** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 3° alkyl halide treated with NaOH in water would most likely undergo:',
            options: ['SN1 and E1 (competing)', 'SN2', 'E2 only', 'No reaction'],
            correctAnswer: 0,
            explanation: '3° substrate blocks SN2 (too sterically hindered). Water is polar protic. NaOH is both nucleophile and base but not bulky. Both SN1 and E1 proceed through the same carbocation intermediate. Heat favors E1.'
          },
          {
            question: 'An SN2 reaction on a chiral substrate produces:',
            options: ['Inversion of configuration', 'Retention of configuration', 'Racemic mixture', 'Random configuration'],
            correctAnswer: 0,
            explanation: 'SN2 proceeds through a single backside-attack step, giving 100% inversion of stereochemistry at the carbon center (Walden inversion).'
          }
        ]
      }
    },
    {
      id: 'oc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SN2: strong nuc + methyl/1° + polar aprotic → inversion
- SN1: weak nuc + 3° + polar protic → racemization
- E2: strong bulky base + 2°/3° → Zaitsev product
- The SN1/E1/SN2/E2 decision chart is GUARANTEED on the MCAT`
    }
  ]
};
"""

    parts[3] = r"""export const mcatOrgChemPart3Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc3-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 3 of 7 — Carbonyl Chemistry**

### Carbonyl Reactivity

The $C=O$ is polar: carbon is electrophilic (attacked by nucleophiles).

### Aldol Condensation

$$\\text{Enolate} + \\text{Aldehyde} \\to \\beta\\text{-hydroxy carbonyl} \\xrightarrow{\\text{heat}} \\alpha,\\beta\\text{-unsaturated carbonyl}$$

### Key Carbonyl Reactions

| Reaction | Produces | Mechanism |
|----------|----------|-----------|
| Reduction of aldehyde | 1° alcohol | NaBH$_4$ or LiAlH$_4$ |
| Reduction of ketone | 2° alcohol | NaBH$_4$ or LiAlH$_4$ |
| Reduction of carboxylic acid | 1° alcohol | LiAlH$_4$ only (stronger) |
| Oxidation of 1° alcohol | Aldehyde (PCC) or carboxylic acid (Jones) | Depends on reagent |
| Oxidation of 2° alcohol | Ketone | PCC, Jones, or K$_2$Cr$_2$O$_7$ |
| Fischer esterification | Ester | Acid + Alcohol + H$^+$ catalyst |

### MCAT High Yield: Reducing Agents

- **NaBH$_4$**: mild, reduces aldehydes and ketones only
- **LiAlH$_4$**: strong, reduces ALL carbonyls (including esters, carboxylic acids, amides)`
    },
    {
      id: 'oc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Carbonyl Chemistry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Treatment of a carboxylic acid with $\\text{NaBH}_4$ gives:',
            options: ['No reaction (NaBH$_4$ is too mild)', 'A primary alcohol', 'An aldehyde', 'An ester'],
            correctAnswer: 0,
            explanation: '$\\text{NaBH}_4$ cannot reduce carboxylic acids or esters. You need $\\text{LiAlH}_4$ for those. NaBH$_4$ only reduces aldehydes and ketones.'
          },
          {
            question: 'PCC (pyridinium chlorochromate) oxidation of a primary alcohol gives:',
            options: ['An aldehyde (mild oxidation stops here)', 'A carboxylic acid', 'A ketone', 'No reaction'],
            correctAnswer: 0,
            explanation: 'PCC is a mild oxidizing agent that converts 1° ROH to an aldehyde without over-oxidation. Jones reagent (CrO$_3$/H$_2$SO$_4$) would go all the way to carboxylic acid.'
          }
        ]
      }
    },
    {
      id: 'oc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- NaBH$_4$: mild (aldehydes/ketones only). LiAlH$_4$: strong (everything).
- PCC: mild oxidation (1° ROH → aldehyde). Jones/CrO$_3$: full oxidation.
- Fischer esterification: carboxylic acid + alcohol + acid catalyst → ester + water
- Amide bonds (peptides) are resistant to hydrolysis — that's why enzymes are needed!`
    }
  ]
};
"""

    parts[4] = r"""export const mcatOrgChemPart4Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc4-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 4 of 7 — Carboxylic Acid Derivatives**

### Reactivity Order (most reactive → least)

$$\\text{Acid halide} > \\text{Anhydride} > \\text{Ester} > \\text{Amide} > \\text{Carboxylate}$$

### Why? The better the leaving group, the more reactive.

- Acid halide: Cl$^-$ is excellent leaving group
- Amide: NH$_2^-$ is terrible leaving group → most stable

### Key Interconversions

- Acid halide + ROH → Ester
- Acid halide + RNH$_2$ → Amide (how peptide bonds form in lab!)
- Ester + H$_2$O (acid/base) → Carboxylic acid + ROH (hydrolysis)
- Ester + NaOH → Carboxylate + ROH (saponification = soap making!)

### Biochemistry Connection

Thioester (CoA derivatives) are key metabolic intermediates — more reactive than regular esters due to weak C-S bond.`
    },
    {
      id: 'oc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Carboxylic Acid Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which carboxylic acid derivative is LEAST reactive toward nucleophilic acyl substitution?',
            options: ['Amide', 'Acid chloride', 'Ester', 'Anhydride'],
            correctAnswer: 0,
            explanation: 'Amides are least reactive because $\\text{NH}_2^-$ is a very poor leaving group. Also, nitrogen donates electrons into the carbonyl via resonance, reducing electrophilicity.'
          }
        ]
      }
    },
    {
      id: 'oc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Reactivity of acid derivatives: halide > anhydride > ester > amide
- Saponification = base hydrolysis of an ester → soap (carboxylate salt)
- Thioesters (e.g., acetyl-CoA) are bioloical activated intermediates
- Peptide bond = amide bond — resistant to hydrolysis (needs enzymes)`
    }
  ]
};
"""

    parts[5] = r"""export const mcatOrgChemPart5Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc5-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 5 of 7 — Aromatic Chemistry & Lab Techniques**

### Aromaticity Rules (Huckel)

Must have: planar ring, conjugated $\\pi$ system, $4n + 2$ $\\pi$ electrons ($n = 0, 1, 2...$)

- Benzene: 6 $\\pi$ electrons ($n = 1$) ✓
- Cyclopentadienyl anion: 6 $\\pi$ electrons ✓
- Cyclooctatetraene: 8 $\\pi$ electrons → anti-aromatic (if planar)

### Electrophilic Aromatic Substitution (EAS)

| Substituent type | Effect on ring | Directs to |
|-----------------|----------------|-----------|
| $-OH$, $-NH_2$, $-OR$ | Activating | ortho/para |
| $-CH_3$, alkyl | Activating (weak) | ortho/para |
| $-NO_2$, $-CF_3$ | Deactivating | meta |
| Halogens ($-Cl$, $-Br$) | Deactivating BUT | ortho/para |

### Lab Techniques on the MCAT

- **Distillation**: Separates by boiling point
- **Extraction**: Separates by solubility (aqueous vs. organic layer)
- **Chromatography**: Separates by polarity (TLC, column)
- **Recrystallization**: Purifies by differential solubility at different temps`
    },
    {
      id: 'oc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Aromatics & Lab** 🎯',
      exercise: {
        questions: [
          {
            question: 'Nitration of toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$) primarily gives:',
            options: ['ortho- and para-nitrotoluene ($-CH_3$ is ortho/para director)', 'meta-nitrotoluene', 'Only para-nitrotoluene', 'No reaction — toluene is deactivated'],
            correctAnswer: 0,
            explanation: 'Methyl ($-CH_3$) is an electron-donating group (activating, ortho/para director). You get a mixture of ortho and para products.'
          }
        ]
      }
    },
    {
      id: 'oc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Aromaticity: planar + conjugated + $4n+2$ $\\pi$ electrons
- Activators → ortho/para; Deactivators → meta (except halogens: deactivating but ortho/para)
- Know lab separation techniques — the MCAT loves "which technique would you use to..." questions`
    }
  ]
};
"""

    parts[6] = r"""export const mcatOrgChemPart6Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc6-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 6 of 7 — Spectroscopy (NMR, IR, Mass Spec)**

### IR Spectroscopy — Key Absorptions

| Bond | Wavenumber (cm$^{-1}$) | Shape |
|------|----------------------|-------|
| O-H (alcohol) | 3200-3600 | Broad |
| O-H (carboxylic acid) | 2500-3300 | Very broad |
| N-H | 3300-3500 | Medium |
| C=O | 1700-1750 | Strong, sharp |
| C-O | 1000-1300 | — |

### $^1$H NMR — Quick Guide

- **Chemical shift** ($\\delta$): TMS = 0 ppm (reference)
- Alkyl: 0.5-2.0 ppm
- Next to C=O: 2.0-2.5 ppm
- Next to O or N: 3.0-4.0 ppm
- Aromatic: 6.5-8.0 ppm
- Aldehyde H: 9.0-10.0 ppm
- Carboxylic acid H: 10-12 ppm

### Splitting (n+1 rule)

A proton with $n$ equivalent neighboring protons splits into $n + 1$ peaks.

- Triplet: 2 neighbors
- Quartet: 3 neighbors`
    },
    {
      id: 'oc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Spectroscopy** 🎯',
      exercise: {
        questions: [
          {
            question: 'A compound shows a strong, sharp IR absorption at 1715 cm$^{-1}$ and a broad absorption at 2500-3300 cm$^{-1}$. It is most likely a:',
            options: ['Carboxylic acid', 'Ketone', 'Alcohol', 'Amine'],
            correctAnswer: 0,
            explanation: '1715 cm$^{-1}$ = C=O stretch. Broad 2500-3300 cm$^{-1}$ = O-H of carboxylic acid (characteristically very broad due to H-bonding). Together, these are diagnostic for -COOH.'
          },
          {
            question: 'In $^1$H NMR of $\\text{CH}_3\\text{CH}_2\\text{OH}$, the $\\text{CH}_2$ peak appears as a:',
            options: ['Quartet (3 neighbors from $\\text{CH}_3$)', 'Triplet', 'Singlet', 'Doublet'],
            correctAnswer: 0,
            explanation: 'The $\\text{CH}_2$ has 3 neighboring H atoms on the $\\text{CH}_3$. By the n+1 rule: $3 + 1 = 4$ peaks = quartet. (The OH neighbor is often ignored due to rapid exchange).'
          }
        ]
      }
    },
    {
      id: 'oc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- IR: Broad O-H (3200-3600 for alcohol, 2500-3300 for acid) and sharp C=O (~1715)
- NMR: Chemical shift tells you environment, splitting tells you neighbors
- n+1 rule: number of peaks = neighbors + 1
- Mass spec: molecular ion peak (M$^+$) gives molecular weight`
    }
  ]
};
"""

    parts[7] = r"""export const mcatOrgChemPart7Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc7-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 7 of 7 — Review & MCAT Strategy**

### Highest-Yield MCAT Organic Topics

1. **SN1/SN2/E1/E2** — almost guaranteed
2. **Functional group recognition** — in every passage
3. **Amino acid chemistry** — bridges to biochemistry
4. **Carbonyl chemistry** — reduction/oxidation
5. **Stereochemistry** — R/S, enantiomers vs diastereomers
6. **Lab techniques** — separation and purification

### Amino Acid Side Chain Chemistry (bridges to Biochem)

| Property | Amino acids |
|----------|-------------|
| Nonpolar | Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met |
| Polar uncharged | Ser, Thr, Cys, Tyr, Asn, Gln |
| Positive (basic) | Lys, Arg, His |
| Negative (acidic) | Asp, Glu |`
    },
    {
      id: 'oc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'An amino acid at pH 7 has a positively charged side chain. It is most likely:',
            options: ['Lysine (pKa of side chain ~10.5)', 'Aspartate', 'Serine', 'Alanine'],
            correctAnswer: 0,
            explanation: 'At pH 7, Lys side chain ($-NH_3^+$, pKa ~10.5) is protonated and positive. Arg (pKa ~12.5) and His (pKa ~6.0) are the other basic residues. His may or may not be protonated at pH 7.'
          },
          {
            question: 'A passage describes a molecule with a chiral center that rotates plane-polarized light +15°. Its enantiomer rotates light:',
            options: ['$-15°$ (equal and opposite)', '$+15°$', '$0°$', '$+30°$'],
            correctAnswer: 0,
            explanation: 'Enantiomers rotate plane-polarized light by equal magnitude but opposite direction. If one is +15°, the other must be -15°.'
          }
        ]
      }
    },
    {
      id: 'oc7-summary',
      type: 'text' as const,
      content: `### Organic Chemistry — Complete! ✅

Master the reaction decision chart, functional groups, and stereochemistry. These connect directly to amino acid and enzyme chemistry in Biochemistry.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-organic-chemistry-mcat-part{i}.ts', parts[i])

###############################################################################
# BIOCHEMISTRY FOUNDATIONS (7 parts)
###############################################################################

def gen_biochem():
    parts = {}
    parts[1] = r"""export const mcatBiochemPart1Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc1-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 1 of 7 — Amino Acids & Protein Structure**

### The 20 Amino Acids — Classify by Side Chain

| Category | Amino Acids | Key Feature |
|----------|-------------|-------------|
| Nonpolar/Hydrophobic | G, A, V, L, I, P, F, W, M | Interior of proteins |
| Polar uncharged | S, T, C, Y, N, Q | H-bonding |
| Positively charged (pH 7) | K, R, H | Basic side chains |
| Negatively charged (pH 7) | D, E | Acidic side chains |

### Protein Structure Levels

| Level | Held together by | Description |
|-------|-----------------|-------------|
| Primary (1°) | Peptide bonds (covalent) | Amino acid sequence |
| Secondary (2°) | H-bonds (backbone N-H to C=O) | $\\alpha$-helix, $\\beta$-sheet |
| Tertiary (3°) | Hydrophobic, ionic, disulfide, H-bonds | 3D shape of one polypeptide |
| Quaternary (4°) | Same as tertiary | Multiple subunit assembly |

### Disulfide Bonds

Cysteine + Cysteine → Cystine (C-S-S-C), covalent bond stabilizing tertiary structure.`
    },
    {
      id: 'bc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Amino Acids & Protein Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'Proline is unique among amino acids because it:',
            options: ['Has a cyclic side chain bonded to the backbone nitrogen, creating rigidity', 'Is the only nonpolar amino acid', 'Has the smallest side chain', 'Can form disulfide bonds'],
            correctAnswer: 0,
            explanation: 'Proline is an imino acid — its side chain cyclizes back to the backbone N, creating a rigid kink. This is why proline is a "helix breaker" in $\\alpha$-helices.'
          },
          {
            question: '$\\alpha$-helices are stabilized primarily by:',
            options: ['Hydrogen bonds between backbone C=O and N-H groups 4 residues apart', 'Disulfide bonds', 'Hydrophobic interactions', 'Ionic bonds between side chains'],
            correctAnswer: 0,
            explanation: '$\\alpha$-helices are stabilized by H-bonds between the C=O of residue $i$ and the N-H of residue $i+4$. These are backbone (not side chain) interactions, making them secondary structure.'
          }
        ]
      }
    },
    {
      id: 'bc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know amino acid categories cold (nonpolar, polar, positive, negative)
- Proline = helix breaker (rigid ring); Glycine = most flexible (no side chain)
- Primary: sequence. Secondary: $\\alpha$-helix/$\\beta$-sheet. Tertiary: 3D fold. Quaternary: subunits.
- Disulfide bonds (Cys-Cys) = only COVALENT bond in tertiary structure`
    }
  ]
};
"""

    parts[2] = r"""export const mcatBiochemPart2Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc2-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 2 of 7 — Enzyme Kinetics (ULTRA HIGH YIELD)**

### Michaelis-Menten Equation

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

- $K_m$ = Michaelis constant = [S] at which $v = V_{max}/2$
- Low $K_m$ → high affinity (enzyme binds substrate tightly at low [S])
- $V_{max}$ depends on $[E]_{total}$ and $k_{cat}$: $V_{max} = k_{cat}[E]_T$

### Lineweaver-Burk (Double Reciprocal) Plot

$$\\frac{1}{v} = \\frac{K_m}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}$$

- y-intercept = $1/V_{max}$
- x-intercept = $-1/K_m$
- Slope = $K_m/V_{max}$

### Inhibitor Types

| Type | Effect on $V_{max}$ | Effect on $K_m$ | Overcome by more [S]? |
|------|---------------------|-----------------|----------------------|
| Competitive | No change | Increases (apparent) | Yes |
| Uncompetitive | Decreases | Decreases | No |
| Noncompetitive | Decreases | No change | No |
| Mixed | Decreases | Can increase or decrease | No |`
    },
    {
      id: 'bc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Enzyme Kinetics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A researcher adds a molecule that binds ONLY to the enzyme-substrate complex. This is an example of:',
            options: ['Uncompetitive inhibition', 'Competitive inhibition', 'Noncompetitive inhibition', 'Allosteric activation'],
            correctAnswer: 0,
            explanation: 'Uncompetitive inhibitors bind ONLY to the ES complex (not free enzyme). This decreases both $V_{max}$ and $K_m$ (apparent). On a Lineweaver-Burk plot, lines are parallel.'
          },
          {
            question: 'An enzyme has $K_m = 2$ mM and $V_{max} = 100$ $\\mu$mol/min. At $[S] = 18$ mM, the reaction velocity is approximately:',
            options: ['90 $\\mu$mol/min', '50 $\\mu$mol/min', '100 $\\mu$mol/min', '10 $\\mu$mol/min'],
            correctAnswer: 0,
            explanation: '$v = V_{max}[S]/(K_m + [S]) = 100(18)/(2 + 18) = 1800/20 = 90$ $\\mu$mol/min. At high [S] relative to $K_m$, the enzyme approaches $V_{max}$.'
          }
        ]
      }
    },
    {
      id: 'bc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $K_m$ = [S] at half $V_{max}$. Low $K_m$ = high affinity.
- Competitive: same $V_{max}$, higher apparent $K_m$
- Noncompetitive: lower $V_{max}$, same $K_m$
- Lineweaver-Burk: know how each inhibitor changes the plot`
    }
  ]
};
"""

    parts[3] = r"""export const mcatBiochemPart3Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc3-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 3 of 7 — Glycolysis & Gluconeogenesis**

### Glycolysis (Cytoplasm, Anaerobic)

$$\\text{Glucose} \\xrightarrow{10\\text{ steps}} 2\\text{ Pyruvate}$$

**Net yield per glucose**: 2 ATP, 2 NADH, 2 Pyruvate

### Key Regulatory Enzymes (HIGH YIELD!)

| Enzyme | Step | Activated by | Inhibited by |
|--------|------|-------------|-------------|
| Hexokinase | Glucose → G6P | — | G6P (product inhibition) |
| PFK-1 | F6P → F-1,6-BP | AMP, fructose-2,6-BP | ATP, citrate |
| Pyruvate kinase | PEP → Pyruvate | F-1,6-BP | ATP, alanine |

**PFK-1 is the PRIMARY rate-limiting step of glycolysis!**

### Pyruvate Fates

| Condition | Pathway | Product |
|-----------|---------|---------|
| Aerobic | Pyruvate dehydrogenase | Acetyl-CoA → TCA |
| Anaerobic (muscle) | Lactate dehydrogenase | Lactate (regenerates NAD$^+$) |
| Anaerobic (yeast) | Pyruvate decarboxylase | Ethanol + CO$_2$ |`
    },
    {
      id: 'bc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Glycolysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cell is exposed to high levels of ATP and citrate. The DIRECT effect on glycolysis is:',
            options: ['PFK-1 is inhibited, slowing glycolysis', 'Hexokinase is activated', 'Pyruvate kinase is activated', 'Glycolysis speeds up'],
            correctAnswer: 0,
            explanation: 'Both ATP and citrate are allosteric inhibitors of PFK-1, the rate-limiting enzyme. This signals that the cell has plenty of energy and TCA intermediates.'
          },
          {
            question: 'During vigorous exercise, muscle cells produce lactate primarily to:',
            options: ['Regenerate NAD$^+$ to continue glycolysis', 'Produce more ATP', 'Feed into the TCA cycle', 'Prevent acidosis'],
            correctAnswer: 0,
            explanation: 'Lactate dehydrogenase converts pyruvate → lactate while oxidizing NADH → NAD$^+$. The regenerated NAD$^+$ is needed for glyceraldehyde-3-P dehydrogenase (step 6) to keep glycolysis running anaerobically.'
          }
        ]
      }
    },
    {
      id: 'bc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Glycolysis: glucose → 2 pyruvate + 2 ATP + 2 NADH (cytoplasm)
- PFK-1 is the key regulatory enzyme — know its activators and inhibitors
- Lactate production regenerates NAD$^+$ for anaerobic glycolysis to continue
- Gluconeogenesis bypasses the 3 irreversible steps with different enzymes`
    }
  ]
};
"""

    parts[4] = r"""export const mcatBiochemPart4Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc4-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 4 of 7 — TCA Cycle & Oxidative Phosphorylation**

### TCA Cycle (Mitochondrial Matrix)

$$\\text{Acetyl-CoA} + \\text{OAA} \\to \\text{Citrate} \\to \\cdots \\to \\text{OAA (regenerated)}$$

**Per acetyl-CoA**: 3 NADH, 1 FADH$_2$, 1 GTP

**Per glucose** (2 acetyl-CoA): 6 NADH, 2 FADH$_2$, 2 GTP from TCA

### Electron Transport Chain (Inner Mitochondrial Membrane)

| Complex | Accepts from | Pumps H$^+$ |
|---------|-------------|-------------|
| I (NADH dehydrogenase) | NADH | Yes (4 H$^+$) |
| II (Succinate dehydrogenase) | FADH$_2$ | No |
| III (Cytochrome bc1) | CoQ | Yes (4 H$^+$) |
| IV (Cytochrome c oxidase) | Cyt c → O$_2$ | Yes (2 H$^+$) |
| ATP Synthase (V) | H$^+$ gradient | Makes ATP |

### ATP Yield Per Glucose (approximate)

- Glycolysis: 2 ATP + 2 NADH (~3-5 ATP)
- PDH: 2 NADH (~5 ATP)
- TCA: 6 NADH (~15 ATP) + 2 FADH$_2$ (~3 ATP) + 2 GTP
- **Total: ~30-32 ATP per glucose**`
    },
    {
      id: 'bc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**TCA & ETC** 🎯',
      exercise: {
        questions: [
          {
            question: 'Cyanide poisoning inhibits Complex IV. The IMMEDIATE effect is:',
            options: ['NADH accumulates, ETC stops, no proton gradient, no ATP synthesis', 'Only Complex IV stops, others continue normally', 'ATP synthase runs in reverse', 'Glycolysis is inhibited'],
            correctAnswer: 0,
            explanation: 'If Complex IV is blocked, electrons cannot pass to O$_2$. All upstream complexes become fully reduced and stop. No proton pumping → no gradient → no oxidative phosphorylation. NADH and FADH$_2$ accumulate.'
          },
          {
            question: 'FADH$_2$ produces fewer ATP than NADH because:',
            options: ['FADH$_2$ enters at Complex II, bypassing Complex I (fewer protons pumped)', 'FADH$_2$ has less energy than NADH', 'FADH$_2$ cannot cross the membrane', '$FADH_2$ is used only in the TCA cycle'],
            correctAnswer: 0,
            explanation: 'FADH$_2$ donates electrons to Complex II, which does NOT pump protons. NADH enters at Complex I, which DOES pump protons. So FADH$_2$ contributes to fewer H$^+$ pumped → fewer ATP (~1.5 vs ~2.5 per electron pair).'
          }
        ]
      }
    },
    {
      id: 'bc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- TCA: 3 NADH + 1 FADH$_2$ + 1 GTP per acetyl-CoA
- ETC: NADH → Complex I; FADH$_2$ → Complex II (fewer ATP)
- Poisons: Rotenone (I), Antimycin A (III), Cyanide/CO (IV), Oligomycin (ATP synthase)
- ~30-32 ATP per glucose total (aerobic metabolism)`
    }
  ]
};
"""

    parts[5] = r"""export const mcatBiochemPart5Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc5-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 5 of 7 — Lipids & Fatty Acid Metabolism**

### Lipid Classification

| Type | Structure | Function |
|------|-----------|----------|
| Triglycerides | 3 fatty acids + glycerol | Energy storage |
| Phospholipids | 2 fatty acids + glycerol + phosphate head | Membranes |
| Steroids | 4 fused rings | Hormones (cholesterol, testosterone, estrogen) |
| Sphingolipids | Sphingosine backbone | Myelin, cell signaling |

### $\\beta$-Oxidation (Mitochondrial Matrix)

Each cycle removes 2 carbons and produces:
- 1 NADH, 1 FADH$_2$, 1 Acetyl-CoA

$$\\text{Palmitate (C16)} \\to 7\\text{ cycles} \\to 8\\text{ Acetyl-CoA} + 7\\text{ NADH} + 7\\text{ FADH}_2$$

Total ATP from palmitate: $8(10) + 7(2.5) + 7(1.5) - 2 = 106$ ATP

### Why Fats Store More Energy Than Carbs

Fats are more reduced (more C-H bonds) → more electrons to donate to ETC → more ATP per gram (~9 kcal/g vs ~4 kcal/g for carbs).`
    },
    {
      id: 'bc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Lipid Metabolism** 🎯',
      exercise: {
        questions: [
          {
            question: 'Carnitine shuttle is required for $\\beta$-oxidation because:',
            options: ['Long-chain fatty acyl-CoA cannot cross the inner mitochondrial membrane without it', 'It activates fatty acids in the cytoplasm', 'It is the rate-limiting enzyme', 'Short-chain fatty acids need it for transport'],
            correctAnswer: 0,
            explanation: 'The inner mitochondrial membrane is impermeable to long-chain acyl-CoA. Carnitine acyltransferase I (CPT-I) transfers the acyl group to carnitine for transport. CPT-I is also the rate-limiting step, inhibited by malonyl-CoA.'
          }
        ]
      }
    },
    {
      id: 'bc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $\\beta$-oxidation: each cycle yields 1 NADH + 1 FADH$_2$ + 1 acetyl-CoA
- Carnitine shuttle: required for long-chain FA entry into mitochondria
- CPT-I is rate-limiting, inhibited by malonyl-CoA (fed state)
- Fats yield ~9 kcal/g vs ~4 kcal/g for carbs/protein`
    }
  ]
};
"""

    parts[6] = r"""export const mcatBiochemPart6Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc6-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 6 of 7 — Nucleic Acids & Molecular Biology**

### DNA vs RNA

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose ($2'-OH$) |
| Bases | A, T, G, C | A, U, G, C |
| Structure | Double-stranded | Usually single-stranded |
| Stability | More stable | Less stable ($2'-OH$ makes it prone to hydrolysis) |

### Base Pairing (Chargaff's Rules)

- A-T: 2 hydrogen bonds
- G-C: 3 hydrogen bonds → higher GC content = higher melting temp ($T_m$)

### Central Dogma

$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$

### Key Enzymes

| Process | Key Enzyme | Function |
|---------|-----------|----------|
| Replication | DNA polymerase III | Synthesizes new DNA strand ($5' \\to 3'$) |
| Replication | Helicase | Unwinds double helix |
| Replication | Primase | Makes RNA primer |
| Transcription | RNA polymerase | Synthesizes mRNA from DNA template |
| Translation | Ribosome | Reads mRNA, assembles protein |`
    },
    {
      id: 'bc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Nucleic Acids** 🎯',
      exercise: {
        questions: [
          {
            question: 'If a DNA sample is 30% adenine, what percent is guanine?',
            options: ['20%', '30%', '40%', '25%'],
            correctAnswer: 0,
            explanation: 'By Chargaff: A = T = 30%. So A + T = 60%. G + C = 40%. Since G = C: G = 20%.'
          },
          {
            question: 'DNA polymerase requires:',
            options: ['A free $3\'-OH$ group to add nucleotides (needs a primer!)', 'A $5\'-OH$ group', 'No primer — it can start de novo', 'Only single-stranded DNA'],
            correctAnswer: 0,
            explanation: 'DNA polymerase can only add nucleotides to an existing $3\'-OH$ group. This is why primase must first lay down an RNA primer. RNA polymerase, in contrast, can start de novo.'
          }
        ]
      }
    },
    {
      id: 'bc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- GC content correlates with $T_m$ (3 H-bonds vs 2 for AT)
- DNA polymerase: $5' \\to 3'$ synthesis, needs primer, has proofreading
- RNA polymerase: no primer needed, reads template $3' \\to 5'$
- Chargaff: A=T, G=C in double-stranded DNA`
    }
  ]
};
"""

    parts[7] = r"""export const mcatBiochemPart7Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc7-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 7 of 7 — Metabolic Regulation & Integration**

### Fed vs. Fasting State

| State | Insulin | Glucagon | Active Pathways |
|-------|---------|----------|----------------|
| Fed | High | Low | Glycolysis, glycogenesis, lipogenesis, protein synthesis |
| Fasting | Low | High | Gluconeogenesis, glycogenolysis, $\\beta$-oxidation, ketogenesis |

### Key Regulatory Hormones

- **Insulin**: promotes anabolism (storage). Activates PFK-1, pyruvate kinase, glycogen synthase.
- **Glucagon**: promotes catabolism (mobilization). Activates glycogen phosphorylase, lipase.
- **Epinephrine**: fight-or-flight. Similar to glucagon + increases heart rate.

### Metabolic Integration

- High ATP/NADH → inhibits TCA, glycolysis (feedback)
- Acetyl-CoA activates pyruvate carboxylase (gluconeogenesis) and inhibits PDH
- Malonyl-CoA (from fatty acid synthesis) inhibits CPT-I (blocks $\\beta$-oxidation)
- You can't do fatty acid synthesis AND $\\beta$-oxidation simultaneously!`
    },
    {
      id: 'bc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Metabolic Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'After a 24-hour fast, which metabolic pathway is MOST active in the liver?',
            options: ['Gluconeogenesis', 'Glycolysis', 'Fatty acid synthesis', 'Glycogenesis'],
            correctAnswer: 0,
            explanation: 'After 24 hours, liver glycogen is depleted. Glucagon stimulates gluconeogenesis (making glucose from lactate, amino acids, glycerol) to maintain blood glucose for the brain.'
          },
          {
            question: 'Insulin deficiency (Type 1 diabetes) leads to ketoacidosis because:',
            options: ['Uncontrolled lipolysis floods the liver with fatty acids, producing excess ketone bodies', 'The liver cannot perform glycolysis', 'Excess glucose is converted to ketones', 'Muscle cells produce too much lactate'],
            correctAnswer: 0,
            explanation: 'Without insulin: uncontrolled lipolysis → excess fatty acids → hepatic $\\beta$-oxidation → excess acetyl-CoA → ketone bodies (acetoacetate, $\\beta$-hydroxybutyrate, acetone). These are acids that lower blood pH.'
          }
        ]
      }
    },
    {
      id: 'bc7-summary',
      type: 'text' as const,
      content: `### Biochemistry Foundations — Complete! ✅

Key themes: Fed state = insulin = anabolism. Fasting = glucagon = catabolism. Know how pathways are coordinated and regulated — the MCAT loves integrative metabolic questions.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-biochemistry-foundations-mcat-part{i}.ts', parts[i])


# Run all generators
print("=== MCAT Batch 1: General Chemistry ===")
gen_genchem()
print("\n=== MCAT Batch 1: Organic Chemistry ===")
gen_orgchem()
print("\n=== MCAT Batch 1: Biochemistry ===")
gen_biochem()
print(f"\nBatch 1 complete! Total files: 21")
