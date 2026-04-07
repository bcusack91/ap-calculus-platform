export const chemElectronConfigPart4Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec4-intro',
      type: 'text' as const,
      content: `# Part 4: Noble Gas (Shorthand) Notation

Writing out 1s² 2s² 2p⁶ 3s² 3p⁶ every time gets tedious. Chemists use **noble gas shorthand notation** to simplify electron configurations by replacing the inner-shell electrons with the symbol of the preceding noble gas in brackets.`
    },
    {
      id: 'ec4-noble-gases',
      type: 'text' as const,
      content: `## 📌 The Noble Gases

| Noble Gas | Symbol | Atomic Number | Full Configuration |
|-----------|--------|---------------|--------------------|
| Helium | He | 2 | 1s² |
| Neon | Ne | 10 | 1s² 2s² 2p⁶ |
| Argon | Ar | 18 | 1s² 2s² 2p⁶ 3s² 3p⁶ |
| Krypton | Kr | 36 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ |
| Xenon | Xe | 54 | [Kr] 4d¹⁰ 5s² 5p⁶ |
| Radon | Rn | 86 | [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶ |

To use shorthand notation:
1. Find the **noble gas** that comes just before your element in the periodic table.
2. Write that noble gas symbol in **brackets**.
3. Continue the configuration from where the noble gas left off.`
    },
    {
      id: 'ec4-examples',
      type: 'text' as const,
      content: `## 🧪 Examples

**Sodium (Na, Z = 11)**  
Full: 1s² 2s² 2p⁶ 3s¹  
The preceding noble gas is Neon (Z = 10): 1s² 2s² 2p⁶  
Shorthand: **[Ne] 3s¹**

**Iron (Fe, Z = 26)**  
Full: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶  
The preceding noble gas is Argon (Z = 18): 1s² 2s² 2p⁶ 3s² 3p⁶  
Shorthand: **[Ar] 4s² 3d⁶**

**Bromine (Br, Z = 35)**  
Full: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵  
The preceding noble gas is Argon (Z = 18)  
Shorthand: **[Ar] 4s² 3d¹⁰ 4p⁵**

The shorthand is especially useful for heavier elements where the full configuration would be extremely long.`
    },
    {
      id: 'ec4-quiz-identify-core',
      type: 'multiple-choice' as const,
      content: `### Identify the Noble Gas Core

Which noble gas core would you use for the shorthand notation of Selenium (Se, Z = 34)?`,
      exercise: {
        questions: [
          {
            question: 'Noble gas core for Se:',
            options: ['[Ne]', '[Ar]', '[Kr]', '[Xe]'],
            correctAnswer: 1,
            explanation: 'Selenium (Z = 34) comes after Argon (Z = 18) and before Krypton (Z = 36). The preceding noble gas is Argon, so we use [Ar] as the core. The shorthand is [Ar] 4s² 3d¹⁰ 4p⁴.'
          }
        ]
      }
    },
    {
      id: 'ec4-quiz-shorthand',
      type: 'multiple-choice' as const,
      content: `### Shorthand Notation

What is the correct noble gas shorthand notation for phosphorus (P, Z = 15)?`,
      exercise: {
        questions: [
          {
            question: 'Noble gas shorthand for P:',
            options: [
              '[He] 2s² 2p⁶ 3s² 3p³',
              '[Ne] 3s² 3p³',
              '[Ne] 3s² 3p⁵',
              '[Ar] 3s² 3p³'
            ],
            correctAnswer: 1,
            explanation: 'Phosphorus (Z = 15) uses [Ne] (Z = 10) as its core. The remaining 5 electrons: 3s² 3p³. So the answer is [Ne] 3s² 3p³. While option A is technically correct, [Ne] is the most appropriate (closest) noble gas core.'
          }
        ]
      }
    },
    {
      id: 'ec4-input-convert',
      type: 'input-box' as const,
      content: `### Convert to Shorthand

Convert the following full electron configurations to noble gas shorthand. Use the format: [Xx] 3s2 3p5 (brackets around the noble gas symbol, no superscripts).`,
      exercise: {
        inputs: [
          {
            label: 'Chlorine — Full: 1s2 2s2 2p6 3s2 3p5',
            correctAnswer: '[Ne] 3s2 3p5',
            explanation: 'Neon accounts for the first 10 electrons (1s² 2s² 2p⁶). The remaining 7 electrons are 3s² 3p⁵, giving [Ne] 3s² 3p⁵.'
          },
          {
            label: 'Titanium — Full: 1s2 2s2 2p6 3s2 3p6 4s2 3d2',
            correctAnswer: '[Ar] 4s2 3d2',
            explanation: 'Argon accounts for the first 18 electrons (through 3p⁶). The remaining 4 electrons are 4s² 3d², giving [Ar] 4s² 3d².'
          }
        ]
      }
    },
    {
      id: 'ec4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `### Noble Gas Shorthand Identification

Match each element with its correct shorthand electron configuration.`,
      exercise: {
        dropdowns: [
          {
            label: 'Potassium (K, Z = 19):',
            options: ['[Ar] 3d¹', '[Ar] 4s¹', '[Ne] 3s² 3p⁶ 4s¹', '[Kr] 4s¹'],
            correctIndex: 1,
            explanation: 'Potassium: [Ar] 4s¹. After the argon core (18 electrons), the 19th electron goes into 4s, not 3d.'
          },
          {
            label: 'Gallium (Ga, Z = 31):',
            options: ['[Ar] 4s² 3d¹⁰ 4p¹', '[Kr] 4p¹', '[Ar] 3d¹³', '[Ar] 4s² 4p¹¹'],
            correctIndex: 0,
            explanation: 'Gallium: [Ar] 4s² 3d¹⁰ 4p¹. After argon (18), add 4s² (20), 3d¹⁰ (30), 4p¹ (31). Total = 31 ✓.'
          }
        ]
      }
    },
    {
      id: 'ec4-summary',
      type: 'text' as const,
      content: `## 📌 Key Takeaways

1. **Noble gas shorthand** replaces the inner electron core with the preceding noble gas symbol in brackets.
2. Always choose the noble gas that comes **immediately before** your element in the periodic table.
3. After the bracket, continue writing the remaining subshells in Aufbau filling order.
4. This notation makes it easy to focus on the **valence electrons** — the outer electrons that participate in bonding and determine chemical properties.

Next: We will tackle the important exceptions to the Aufbau order and learn how to write configurations for ions.`
    }
  ]
}
