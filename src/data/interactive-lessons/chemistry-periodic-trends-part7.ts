export const chemPeriodicTrendsPart7Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt7-intro',
      type: 'text' as const,
      content: `# Part 7: Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

On the AP Chemistry exam, periodic trend questions rarely test just one property. You'll need to combine your knowledge of atomic radius, ionization energy, electron affinity, electronegativity, and ionic radius to answer complex comparison and explanation questions. This final lesson pulls everything together.`
    },
    {
      id: 'pt7-master-summary',
      type: 'text' as const,
      content: `## Master Summary of All Trends

| Property | Across Period (→) | Down Group (↓) | Driven By |
|----------|-------------------|-----------------|-----------|
| Atomic radius | **Decreases** | **Increases** | $Z_{eff}$ and shell count |
| Ionization energy | **Increases** | **Decreases** | $Z_{eff}$ and distance |
| Electron affinity | More negative | Less negative | $Z_{eff}$ and distance |
| Electronegativity | **Increases** | **Decreases** | $Z_{eff}$ and distance |
| Ionic radius (cation) | Decreases across metals | Increases down group | Charge and shell count |

### The Big Pattern

**Atomic radius** goes in the **opposite direction** from IE, EA, and EN.

- Small atom → tightly held electrons → high IE, high EN, very negative EA
- Large atom → loosely held electrons → low IE, low EN, near-zero EA

All four major trends are ultimately explained by the same two factors:
1. **Effective nuclear charge ($Z_{eff}$)** — across a period
2. **Distance from nucleus / number of shells** — down a group`
    },
    {
      id: 'pt7-exceptions-review',
      type: 'text' as const,
      content: `## Key Exceptions to Remember

The AP exam frequently tests these exceptions:

### 1. IE: B < Be and O < N
- **B < Be:** B removes a $2p$ electron (higher energy) vs. Be's $2s$ electron
- **O < N:** O has a paired $2p$ electron; N's half-filled $2p^3$ has extra stability

### 2. EA: F less negative than Cl
- Fluorine is so small that electron-electron repulsion in its tiny $2p$ orbitals offsets the energy gain
- $EA_\\text{F} = -328$ kJ/mol vs. $EA_\\text{Cl} = -349$ kJ/mol

### 3. EA ≈ 0 for N, Be, Ne
- **N:** Half-filled $2p^3$ — stable configuration resists an extra electron
- **Be:** Full $2s^2$ subshell — added electron would go to higher-energy $2p$
- **Ne:** Full octet — added electron enters $3s$ (much higher energy)

### AP Writing Tip

When asked to "explain" a trend, always state:
1. What happens to $Z_{eff}$ (or distance from nucleus)
2. Why that affects the property
3. Connect back to electron configuration when exceptions arise`
    },
    {
      id: 'pt7-multi-trend-quiz',
      type: 'multiple-choice' as const,
      content: `### Multi-Trend AP Questions`,
      exercise: {
        questions: [
          {
            question: 'Element X has a large atomic radius, low ionization energy, low electronegativity, and a near-zero electron affinity. Element X is most likely a:',
            options: [
              'Halogen',
              'Noble gas',
              'Alkali metal',
              'Nonmetal in Period 2'
            ],
            correctAnswer: 2,
            explanation: 'Large radius + low IE + low EN + near-zero EA = a metal in the bottom-left of the periodic table. This profile perfectly matches an alkali metal like Cs or K.'
          },
          {
            question: 'Which of the following properties increases across a period AND decreases down a group?',
            options: [
              'Atomic radius',
              'Ionization energy',
              'Metallic character',
              'Number of electron shells'
            ],
            correctAnswer: 1,
            explanation: 'Ionization energy increases across a period (higher $Z_{eff}$) and decreases down a group (greater distance from nucleus). Atomic radius does the opposite. Metallic character decreases across and increases down.'
          },
          {
            question: 'Sulfur ($Z = 16$) has a lower first ionization energy than phosphorus ($Z = 15$). The best explanation is:',
            options: [
              'Sulfur has more protons pulling on its electrons',
              'Sulfur has a paired electron in one $3p$ orbital, and the extra repulsion makes it easier to remove',
              'Phosphorus has a larger atomic radius',
              'Sulfur has more shielding from its core electrons'
            ],
            correctAnswer: 1,
            explanation: 'This parallels the O < N exception. P has a half-filled $3p^3$ configuration (extra stability). S has $3p^4$ with one paired electron. The electron-electron repulsion from pairing makes that fourth $3p$ electron easier to remove.'
          }
        ]
      }
    },
    {
      id: 'pt7-config-explanation',
      type: 'text' as const,
      content: `## Explaining Trends Using Electron Configuration

On the AP exam, you often must **explain** a trend, not just state it. Here is a model framework:

### Template for Across-a-Period Explanations

> "As you move from [element A] to [element B] across Period [N], the atomic number increases from [Z₁] to [Z₂]. Electrons are added to the same principal energy level ($n = $ [N]), and same-shell electrons do not effectively shield each other. Therefore, the effective nuclear charge ($Z_{eff}$) increases, which causes [property] to [increase/decrease]."

### Template for Down-a-Group Explanations

> "As you move from [element A] to [element B] down Group [G], each element has an additional principal energy level occupied by electrons. The valence electrons are farther from the nucleus and are shielded by more core electrons. Although the nuclear charge increases, the effect of increased distance and shielding dominates, causing [property] to [increase/decrease]."

### Template for Exceptions

> "[Element B] has a [lower/higher] [property] than expected because its electron configuration [describe specific feature: paired electron, half-filled subshell, etc.], which [increases repulsion / provides extra stability], making the electron [easier/harder] to remove."`
    },
    {
      id: 'pt7-ap-dropdown',
      type: 'dropdown-select' as const,
      content: `### AP-Style Matching`,
      exercise: {
        dropdowns: [
          {
            label: 'The property that measures energy needed to remove an electron:',
            options: ['Atomic radius', 'Ionization energy', 'Electron affinity', 'Electronegativity'],
            correctIndex: 1,
            explanation: 'Ionization energy is defined as the energy required to remove the most loosely bound electron from a gaseous atom.'
          },
          {
            label: 'The property that measures ability to attract bonding electrons:',
            options: ['Atomic radius', 'Ionization energy', 'Electron affinity', 'Electronegativity'],
            correctIndex: 3,
            explanation: 'Electronegativity measures an atom\'s ability to attract shared electrons toward itself in a chemical bond.'
          },
          {
            label: 'Fluorine has a less negative electron affinity than chlorine because:',
            options: [
              'Fluorine has fewer protons',
              'Fluorine is too small and has strong electron repulsion in 2p',
              'Chlorine has more shielding',
              'Fluorine is a gas and chlorine is a gas too'
            ],
            correctIndex: 1,
            explanation: 'Fluorine\'s tiny $2p$ orbitals create strong electron-electron repulsion when an additional electron is added, partially offsetting the energy released. Chlorine\'s larger $3p$ orbitals accommodate the extra electron more comfortably.'
          },
          {
            label: 'The trend that DECREASES across a period is:',
            options: ['Ionization energy', 'Electronegativity', 'Atomic radius', 'Electron affinity (magnitude)'],
            correctIndex: 2,
            explanation: 'Atomic radius is the one major trend that decreases across a period. IE, EN, and EA magnitude all generally increase.'
          }
        ]
      }
    },
    {
      id: 'pt7-mixed-input',
      type: 'input-box' as const,
      content: `### Mixed Practice

1. Of Li, C, F, and Na — which element has the highest first ionization energy? (Type the symbol.)

2. Rank the following from smallest to largest ionic radius: Na⁺, Mg²⁺, F⁻. All have 10 electrons. (Type as symbols separated by commas, smallest first, e.g., "Mg2+, Na+, F-".)

3. Which element in Period 3 has the smallest atomic radius (excluding noble gases)? (Type the symbol.)`,
      exercise: {
        inputs: [
          {
            label: 'Highest IE₁:',
            correctAnswer: 'F',
            explanation: 'F is in Period 2, Group 17 — farthest right. Li (Group 1) and Na (Group 1, Period 3) have very low IEs. C (Group 14) is moderate. F has the highest $Z_{eff}$ among these and the highest IE₁.'
          },
          {
            label: 'Smallest to largest ionic radius:',
            correctAnswer: 'Mg2+, Na+, F-',
            explanation: 'All three have 10 electrons. Proton counts: Mg²⁺ = 12, Na⁺ = 11, F⁻ = 9. More protons = smaller radius. So Mg²⁺ (65 pm) < Na⁺ (95 pm) < F⁻ (133 pm).'
          },
          {
            label: 'Smallest atomic radius in Period 3:',
            correctAnswer: 'Cl',
            explanation: 'In Period 3, atomic radius decreases left to right: Na > Mg > Al > Si > P > S > Cl. Excluding the noble gas Ar, chlorine has the smallest atomic radius.'
          }
        ]
      }
    },
    {
      id: 'pt7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Final Exit Quiz — AP Exam Readiness`,
      exercise: {
        questions: [
          {
            question: 'Which pair of properties both INCREASE from left to right across a period?',
            options: [
              'Atomic radius and ionization energy',
              'Ionization energy and electronegativity',
              'Atomic radius and electronegativity',
              'Metallic character and ionization energy'
            ],
            correctAnswer: 1,
            explanation: 'Both ionization energy and electronegativity increase across a period due to increasing $Z_{eff}$. Atomic radius and metallic character decrease across a period.'
          },
          {
            question: 'An element has the following successive ionization energies (kJ/mol): 738, 1451, 7733, 10543. The element is most likely:',
            options: [
              'Na (Group 1)',
              'Mg (Group 2)',
              'Al (Group 13)',
              'Si (Group 14)'
            ],
            correctAnswer: 1,
            explanation: 'The huge jump occurs between $IE_2$ and $IE_3$ (1,451 → 7,733, a factor of 5×). This means the element has 2 valence electrons that are easy to remove, then the 3rd requires breaking into the core. This is Group 2 — magnesium.'
          },
          {
            question: 'Which of the following correctly ranks the species from smallest to largest radius: Al³⁺, Na⁺, F⁻, N³⁻ (all have 10 electrons)?',
            options: [
              'N³⁻ < F⁻ < Na⁺ < Al³⁺',
              'Al³⁺ < Na⁺ < F⁻ < N³⁻',
              'F⁻ < N³⁻ < Na⁺ < Al³⁺',
              'Na⁺ < Al³⁺ < F⁻ < N³⁻'
            ],
            correctAnswer: 1,
            explanation: 'All have 10 electrons. Proton counts: Al³⁺ = 13, Na⁺ = 11, F⁻ = 9, N³⁻ = 7. More protons = more pull = smaller radius. So Al³⁺ < Na⁺ < F⁻ < N³⁻.'
          },
          {
            question: 'A student claims "atomic radius increases across a period because more electrons are added." What is wrong with this reasoning?',
            options: [
              'More electrons are not added across a period',
              'The additional electrons enter the same shell and do not effectively shield each other, so $Z_{eff}$ increases and the atom shrinks',
              'Electrons have no effect on atomic size',
              'Atomic radius actually stays constant across a period'
            ],
            correctAnswer: 1,
            explanation: 'While electrons are added, they go into the same principal energy level. Same-shell electrons are poor shielders, so $Z_{eff}$ increases with each added proton. The increased $Z_{eff}$ pulls all electrons closer, causing the radius to decrease, not increase.'
          }
        ]
      }
    }
  ]
}
