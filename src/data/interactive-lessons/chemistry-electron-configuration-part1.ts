export const chemElectronConfigPart1Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec1-intro',
      type: 'text' as const,
      content: `# Part 1: Atomic Structure Review

Before we dive into electron configurations, let's make sure the fundamentals of atomic structure are solid. Every atom is built from three subatomic particles, and understanding how they're counted is essential for everything that follows.`
    },
    {
      id: 'ec1-particles',
      type: 'text' as const,
      content: `## The Three Subatomic Particles

| Particle | Symbol | Charge | Location | Relative Mass |
|----------|--------|--------|----------|---------------|
| Proton | p⁺ | +1 | Nucleus | 1 amu |
| Neutron | n⁰ | 0 | Nucleus | 1 amu |
| Electron | e⁻ | −1 | Electron cloud | ≈ 0 amu (1/1836 amu) |

**Key relationships:**
- The **atomic number (Z)** = number of protons = number of electrons (in a neutral atom)
- The **mass number (A)** = protons + neutrons
- Number of neutrons = A − Z

The identity of an element is determined entirely by its number of protons. Change the proton count and you change the element.`
    },
    {
      id: 'ec1-notation',
      type: 'text' as const,
      content: `## Isotope Notation

Atoms of the same element can have different numbers of neutrons. These variants are called **isotopes**.

We write isotope notation as:

$$^{A}_{Z}X$$

where **A** is the mass number (top), **Z** is the atomic number (bottom), and **X** is the element symbol.

**Example:** \\(^{14}_{6}\\text{C}\\) — Carbon-14
- Protons = 6
- Electrons = 6 (neutral atom)
- Neutrons = 14 − 6 = 8

Isotopes of an element have identical chemical behavior because they have the same number of electrons. Their physical properties (mass, nuclear stability) differ.`
    },
    {
      id: 'ec1-quiz-protons',
      type: 'multiple-choice' as const,
      content: `### Quick Check: Identifying Particles

How many protons are in an atom of phosphorus (P, atomic number 15)?`,
      exercise: {
        questions: [
          {
            question: 'Number of protons in phosphorus:',
            options: ['7', '15', '16', '31'],
            correctAnswer: 1,
            explanation: 'The atomic number of phosphorus is 15, which equals the number of protons. The atomic number always tells you the proton count.'
          }
        ]
      }
    },
    {
      id: 'ec1-quiz-neutrons',
      type: 'input-box' as const,
      content: `### Calculating Neutrons

Chlorine-37 (\\(^{37}_{17}\\text{Cl}\\)) has a mass number of 37 and an atomic number of 17. How many neutrons does it have?

*Remember: neutrons = mass number − atomic number*`,
      exercise: {
        inputs: [
          {
            label: 'Number of neutrons in Cl-37:',
            correctAnswer: '20',
            explanation: 'Neutrons = A − Z = 37 − 17 = 20. The mass number includes both protons and neutrons, so subtracting the proton count gives the neutron count.'
          }
        ]
      }
    },
    {
      id: 'ec1-ions-intro',
      type: 'text' as const,
      content: `## Ions: Gaining and Losing Electrons

When an atom gains or loses **electrons**, it becomes an **ion**:

- **Cation** (positive ion): atom loses electrons → fewer electrons than protons
  - Na → Na⁺ (11 protons, 10 electrons)
- **Anion** (negative ion): atom gains electrons → more electrons than protons
  - Cl → Cl⁻ (17 protons, 18 electrons)

**Important:** Gaining or losing electrons does NOT change the atomic number or the identity of the element. Only changing protons does that.`
    },
    {
      id: 'ec1-quiz-ion',
      type: 'multiple-choice' as const,
      content: `### Ion Particle Counts

How many electrons does the ion Ca²⁺ have? (Calcium has atomic number 20.)`,
      exercise: {
        questions: [
          {
            question: 'Number of electrons in Ca²⁺:',
            options: ['22', '20', '18', '16'],
            correctAnswer: 2,
            explanation: 'Calcium has 20 protons and normally 20 electrons. Ca²⁺ means it lost 2 electrons: 20 − 2 = 18 electrons.'
          }
        ]
      }
    },
    {
      id: 'ec1-comprehensive',
      type: 'dropdown-select' as const,
      content: `### Comprehensive Review

An atom of \\(^{56}_{26}\\text{Fe}\\) — let's verify you can identify all its particles.`,
      exercise: {
        dropdowns: [
          {
            label: 'Number of protons:',
            options: ['26', '30', '56', '82'],
            correctIndex: 0,
            explanation: 'The atomic number (bottom number, 26) equals the number of protons.'
          },
          {
            label: 'Number of neutrons:',
            options: ['26', '28', '30', '56'],
            correctIndex: 2,
            explanation: 'Neutrons = mass number − atomic number = 56 − 26 = 30.'
          },
          {
            label: 'Number of electrons (neutral atom):',
            options: ['24', '26', '30', '56'],
            correctIndex: 1,
            explanation: 'In a neutral atom, electrons = protons = 26.'
          }
        ]
      }
    }
  ]
}
