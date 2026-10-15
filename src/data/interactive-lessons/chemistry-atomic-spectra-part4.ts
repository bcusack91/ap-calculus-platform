export const chemAtomicSpectraPart4Data = {
  topicSlug: 'atomic-spectra',
  sections: [
    {
      id: 'as4-intro',
      type: 'text' as const,
      content: `# 🌈 Energy-Level Diagrams & Spectral Regions

**Part 4 of 7 — Energy-Level Diagrams and Spectral Regions**

---

### Topics in This Part

| Section |
|---------|
| 📊 Reading an Energy-Level Diagram |
| 🔑 Matching Spectral Regions to Transitions |
| 🧪 Worked Examples |

> 🔑 **Big idea:** An energy-level diagram tells you every photon an atom can emit or absorb. Different regions of the spectrum probe different kinds of motion: microwaves change how molecules rotate, infrared changes how bonds vibrate, and ultraviolet/visible light moves electrons between levels.`
    },
    {
      id: 'as4-series',
      type: 'text' as const,
      content: `
## 📊 Reading an Energy-Level Diagram

Here are the four lowest energy levels of a hypothetical atom X:

| Level | Energy (J) |
|-------|-----------|
| 4 | $-2.00 \\times 10^{-19}$ |
| 3 | $-3.00 \\times 10^{-19}$ |
| 2 | $-5.00 \\times 10^{-19}$ |
| 1 (ground state) | $-9.00 \\times 10^{-19}$ |


---

### Emission Lines

An excited atom can drop from any higher level to any lower one. From level 4, the possible drops are $4 \\to 3$, $4 \\to 2$, $4 \\to 1$, $3 \\to 2$, $3 \\to 1$, and $2 \\to 1$, so **six** emission lines are possible.

| Transition | Photon Energy (J) | Wavelength | Region |
|------------|-------------------|-----------|--------|
| $4 \\to 3$ | $1.00 \\times 10^{-19}$ | 1990 nm | Infrared |
| $3 \\to 2$ | $2.00 \\times 10^{-19}$ | 994 nm | Infrared |
| $4 \\to 2$ | $3.00 \\times 10^{-19}$ | 663 nm | Visible (red) |
| $2 \\to 1$ | $4.00 \\times 10^{-19}$ | 497 nm | Visible (blue-green) |
| $3 \\to 1$ | $6.00 \\times 10^{-19}$ | 331 nm | Ultraviolet |
| $4 \\to 1$ | $7.00 \\times 10^{-19}$ | 284 nm | Ultraviolet |


---

### Absorption Lines

In a cool gas, nearly every atom is in the **ground state**, so absorption lines come from transitions that **start at level 1**: $1 \\to 2$, $1 \\to 3$, and $1 \\to 4$. The atom absorbs only photons whose energy exactly matches one of these gaps.

> 💡 **Key Rule:** Bigger gap → higher photon energy → higher frequency → **shorter** wavelength.
      `
    },
    {
      id: 'as4-rydberg',
      type: 'text' as const,
      content: `
## 🔑 Matching Spectral Regions to Transitions

Molecules have several kinds of quantized energy, and each kind is probed by a different region of the electromagnetic spectrum:

| Region | Photon Energy | Transition It Causes | Example |
|--------|---------------|----------------------|---------|
| **Microwave** | Lowest | Changes in **rotational** energy levels of molecules | Microwave ovens make water molecules rotate faster |
| **Infrared** | Middle | Changes in **vibrational** energy levels (bonds stretching and bending) | $CO_{2}$ absorbs infrared radiation from Earth's surface |
| **Ultraviolet / visible** | Highest | Changes in **electronic** energy levels (electrons moving between levels) | Colored compounds absorb visible light; atoms emit line spectra |


---

### Why the Order Makes Sense

- Rotational levels are very closely spaced, so tiny energy jumps (microwaves) are enough.
- Vibrational levels are farther apart and need infrared photons.
- Electronic levels are the most widely spaced, so electron jumps need visible or ultraviolet photons.

> ⚠️ **AP Tip:** Infrared light does not move electrons to higher levels, and microwaves do not make bonds vibrate. Always match the region to the correct type of transition.
      `
    },
    {
      id: 'as4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `**Regions and Transitions Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A sample of HCl gas absorbs infrared radiation. What happens to the HCl molecules?',
            options: [
              'Electrons move to higher electronic energy levels',
              'The bonds move to higher vibrational levels',
              'The molecules rotate faster with no other change',
              'The H–Cl bond breaks to form H and Cl atoms'
            ],
            correctAnswer: 1,
            explanation: 'Infrared photons have the right energy to change the vibrational energy of a bond, making it stretch and bend more. Electronic transitions need visible or UV light, rotational changes are caused by lower-energy microwaves, and breaking the bond takes more energy than one IR photon carries.'
          },
          {
            question: 'For atom X (levels above), which emission line has the LONGEST wavelength?',
            options: ['$4 \\to 1$', '$2 \\to 1$', '$3 \\to 2$', '$4 \\to 3$'],
            correctAnswer: 3,
            explanation: 'The longest wavelength comes from the smallest energy gap. The gap from level 4 to level 3 is only $1.00 \\times 10^{-19}$ J, the smallest of these, giving a 1990 nm infrared photon.'
          },
          {
            question: 'Atom X is in its ground state. Which photon energy can it absorb?',
            options: [
              '$2.00 \\times 10^{-19}$ J',
              '$5.00 \\times 10^{-19}$ J',
              '$6.00 \\times 10^{-19}$ J',
              '$9.50 \\times 10^{-19}$ J, but only partly'
            ],
            correctAnswer: 2,
            explanation: 'From level 1, the possible absorption energies are $4.00$, $6.00$, and $7.00 \\times 10^{-19}$ J (to levels 2, 3, and 4). Only $6.00 \\times 10^{-19}$ J matches a gap ($1 \\to 3$). The $2.00 \\times 10^{-19}$ J gap exists only between levels 2 and 3, and an atom cannot absorb part of a photon.'
          }
        ]
      }
    },
    {
      id: 'as4-worked',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

### Example 1 — From Diagram to Wavelength

> **Problem:** For atom X, find the wavelength of the photon emitted in the $4 \\to 2$ transition.

$$E = E_4 - E_2 = (-2.00 \\times 10^{-19}) - (-5.00 \\times 10^{-19}) = 3.00 \\times 10^{-19} \\; \\text{J}$$

$$\\lambda = \\frac{hc}{E} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{3.00 \\times 10^{-19}} = 6.63 \\times 10^{-7} \\; \\text{m} = \\boxed{663 \\; \\text{nm}}$$

That is red visible light, so this is an **electronic** transition.

---

### Example 2 — Identifying the Type of Transition

> **Problem:** A gas absorbs radiation with a wavelength of $4.3 \\times 10^{-6}$ m. What kind of transition is this?

The wavelength is about 4300 nm, longer than visible light (700 nm) but much shorter than microwaves (about 1 mm and longer). It is **infrared**, so the absorption changes the **vibrational** energy of the molecules.

$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^{8})}{4.3 \\times 10^{-6}} = 4.6 \\times 10^{-20} \\; \\text{J}$$

This energy is smaller than every electronic gap in atom X, consistent with vibrational levels being more closely spaced than electronic levels.
      `
    },
    {
      id: 'as4-calculation',
      type: 'input-boxes' as const,
      content: `
**Energy-Level Diagram Drill** 🧮

Use the energy levels of atom X and $h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s.

**1)** Suppose atom X could also be excited to a fifth level. How many different emission lines would then be possible from level 5 and below?

**2)** What is the wavelength (in nm, nearest whole) of the photon emitted in the $2 \\to 1$ transition?

**3)** What photon energy is needed to excite a ground-state atom of X to level 4? Express as $\\times 10^{-19}$ J (3 sig figs).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '497', '7.00'],
        hint1: 'Count every pair of levels: from 5 levels, pick any two.',
        hint2: '$E = E_2 - E_1 = 4.00 \\times 10^{-19}$ J, then $\\lambda = hc/E$.',
        hint3: '$E = E_4 - E_1$.',
        explanation: '1) Each pair of levels gives one line: $4 + 3 + 2 + 1 = 10$ lines. 2) $\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(4.00 \\times 10^{-19}) = 4.97 \\times 10^{-7}$ m = 497 nm. 3) $E = (-2.00 \\times 10^{-19}) - (-9.00 \\times 10^{-19}) = 7.00 \\times 10^{-19}$ J.'
      }
    },
    {
      id: 'as4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Region** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Absorbing a microwave photon changes a molecule\'s', options: ['rotational energy', 'vibrational energy', 'electronic energy', 'nuclear energy'] },
          { label: 'Absorbing an infrared photon changes a molecule\'s', options: ['rotational energy', 'vibrational energy', 'electronic energy', 'nuclear energy'] },
          { label: 'The emission lines of a hot gas of atoms come from changes in', options: ['rotational energy', 'vibrational energy', 'electronic energy', 'nuclear energy'] },
          { label: 'Of the three regions, the photons with the greatest energy are', options: ['microwave', 'infrared', 'ultraviolet', 'all equal'] }
        ],
        correctAnswers: ['rotational energy', 'vibrational energy', 'electronic energy', 'ultraviolet'],
        hint1: 'Microwaves have the lowest energy of the three regions.',
        hint2: 'Infrared makes bonds stretch and bend.',
        hint3: 'Line spectra of atoms come from electrons changing levels.',
        explanation: 'Microwave → rotational, infrared → vibrational, UV/visible → electronic. Ultraviolet photons have the shortest wavelengths and the highest energies of the three regions.'
      }
    },
    {
      id: 'as4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Diagrams & Regions** ✅`,
      exercise: {
        questions: [
          {
            question: 'A photon with wavelength 331 nm is emitted by atom X. Which transition produced it?',
            options: ['$4 \\to 2$', '$3 \\to 1$', '$2 \\to 1$', '$4 \\to 3$'],
            correctAnswer: 1,
            explanation: '$E = hc/\\lambda = (6.626 \\times 10^{-34})(3.00 \\times 10^{8})/(3.31 \\times 10^{-7}) = 6.00 \\times 10^{-19}$ J, which matches the gap between levels 3 and 1. The $4 \\to 2$ and $2 \\to 1$ gaps give visible photons, and $4 \\to 3$ gives an infrared photon.'
          },
          {
            question: 'Why does water absorb microwaves but a beam of microwaves cannot produce a line in water\'s visible emission spectrum?',
            options: [
              'Microwave photons are too energetic for electrons to absorb',
              'They carry only enough energy to change rotational levels',
              'Water molecules have no quantized energy levels',
              'Visible light cannot travel through water vapor'
            ],
            correctAnswer: 1,
            explanation: 'Microwave photons carry very little energy, enough only to change the rotational energy of water molecules. Visible emission requires electrons moving between widely spaced electronic levels, which needs far more energy. Molecular energy levels are quantized for every type of motion.'
          }
        ]
      }
    }
  ]
}
