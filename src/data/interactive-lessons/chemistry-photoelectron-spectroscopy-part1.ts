export const chemPhotoelectronSpectroscopyPart1Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps1-intro',
      type: 'text' as const,
      content: `# Introduction to Photoelectron Spectroscopy (PES)

Photoelectron Spectroscopy (PES) is a powerful analytical technique that allows chemists to **directly measure the binding energies** of electrons in atoms and molecules.

Every electron in an atom is held in place by the attractive force of the nucleus. The **binding energy (BE)** is the amount of energy required to completely remove that electron from the atom. PES gives us experimental data about these binding energies, confirming and extending what we know about electron configurations.

## 🤔 Why PES Matters

- It provides **direct experimental evidence** for the shell and subshell model of the atom
- It reveals that electrons in different subshells have **different binding energies**
- It shows the **relative number of electrons** in each subshell
- It connects atomic structure to measurable, physical quantities`
    },
    {
      id: 'ps1-photoelectric',
      type: 'text' as const,
      content: `## 🔗 The Photoelectric Effect Connection

PES is based on the **photoelectric effect**, discovered by Einstein in 1905. When a photon of sufficient energy strikes an atom, it can eject an electron. The fundamental equation is:

$$E_{photon} = BE + KE$$

Where:
- **$E_{photon}$** = energy of the incoming photon (known and controlled)
- **$BE$** = binding energy of the ejected electron (what we want to measure)
- **$KE$** = kinetic energy of the ejected electron (measured by the instrument)

By rearranging: $BE = E_{photon} - KE$

Since we know the photon energy and can measure the kinetic energy of the ejected electron, we can calculate the binding energy.


---

### How It Works in Practice

1. A sample of gaseous atoms is bombarded with **high-energy photons** (usually X-rays or UV light)
2. Photons eject electrons from **all subshells** of the atom
3. The instrument measures the **kinetic energy** of each ejected electron
4. The binding energy is calculated for each electron
5. The results are displayed as a **PES spectrum**`
    },
    {
      id: 'ps1-quiz1',
      type: 'multiple-choice' as const,
      content: `### Check Your Understanding

In PES, what does the binding energy of an electron represent?`,
      exercise: {
        questions: [
          {
            text: 'The binding energy of an electron is:',
            options: [
              'The energy released when an electron is added to an atom',
              'The energy required to completely remove an electron from an atom',
              'The energy of the photon used in the experiment',
              'The kinetic energy of the ejected electron'
            ],
            correctAnswer: 1,
            explanation: 'Binding energy is the energy required to completely remove an electron from an atom. It represents how tightly the electron is held by the nucleus. Higher binding energy means the electron is more tightly bound.'
          }
        ]
      }
    },
    {
      id: 'ps1-photon-source',
      type: 'text' as const,
      content: `## 📌 The Photon Source

For PES to work, the incoming photon must have **enough energy** to eject electrons from every subshell. This is why high-energy photon sources are used:

- **UV light** (ultraviolet photoelectron spectroscopy, UPS): Used to study valence electrons with lower binding energies
- **X-rays** (X-ray photoelectron spectroscopy, XPS): Used to study core electrons with higher binding energies

The photon energy must satisfy: $E_{photon} > BE$ for any electron we wish to eject.


---

### Key Point
If the photon energy is **less than** the binding energy of a particular electron, that electron **cannot be ejected**. This is a direct consequence of the quantized nature of light — the energy comes in discrete packets (photons), and a single photon must provide all the energy needed.`
    },
    {
      id: 'ps1-quiz2',
      type: 'multiple-choice' as const,
      content: `### Practice Problem

A PES experiment uses photons with an energy of 1200 eV. An ejected electron is measured to have a kinetic energy of 450 eV. What is the binding energy of that electron?`,
      exercise: {
        questions: [
          {
            text: 'Calculate the binding energy using $BE = E_{photon} - KE$:',
            options: [
              '450 eV',
              '750 eV',
              '1200 eV',
              '1650 eV'
            ],
            correctAnswer: 1,
            explanation: 'Using the equation $BE = E_{photon} - KE$: $BE = 1200 - 450 = 750$ eV. The binding energy is 750 eV.'
          }
        ]
      }
    },
    {
      id: 'ps1-input1',
      type: 'input-boxes' as const,
      content: `### Calculation Practice

A PES experiment uses photons with energy 2000 eV. An electron is ejected with a kinetic energy of 1130 eV.`,
      exercise: {
        inputs: [
          {
            label: 'What is the binding energy of this electron (in eV)?',
            correctAnswer: '870',
            explanation: '$BE = E_{photon} - KE = 2000 - 1130 = 870$ eV.'
          }
        ]
      }
    },
    {
      id: 'ps1-dropdown1',
      type: 'dropdown-select' as const,
      content: `### Conceptual Check

Consider two electrons: Electron A has a binding energy of 200 eV and Electron B has a binding energy of 2500 eV.`,
      exercise: {
        dropdowns: [
          {
            text: 'Which electron is closer to the nucleus?',
            options: ['Electron A (200 eV)', 'Electron B (2500 eV)', 'They are the same distance'],
            correctIndex: 1,
            explanation: 'Electron B has a much higher binding energy (2500 eV vs 200 eV), meaning it is held more tightly by the nucleus. Electrons closer to the nucleus experience a stronger attractive force, resulting in higher binding energies.'
          },
          {
            text: 'Which electron is easier to remove from the atom?',
            options: ['Electron A (200 eV)', 'Electron B (2500 eV)', 'They are equally easy to remove'],
            correctIndex: 0,
            explanation: 'Electron A requires only 200 eV to remove, compared to 2500 eV for Electron B. Lower binding energy means less energy is needed for removal, making Electron A easier to remove.'
          }
        ]
      }
    },
    {
      id: 'ps1-summary',
      type: 'text' as const,
      content: `## 📋 Part 1 Summary

Key takeaways from this introduction to PES:

1. **PES measures binding energies** — the energy needed to remove electrons from atoms
2. **Based on the photoelectric effect**: $E_{photon} = BE + KE$, so $BE = E_{photon} - KE$
3. **High-energy photon sources** (UV or X-ray) are needed to eject electrons from all subshells
4. **Higher binding energy** = electron is closer to the nucleus and more tightly held
5. **Lower binding energy** = electron is farther from the nucleus and easier to remove

In the next part, we will learn how to **read and interpret PES spectra** — the graphical output of a PES experiment.`
    }
  ]
}
