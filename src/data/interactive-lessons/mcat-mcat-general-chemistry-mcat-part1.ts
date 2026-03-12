export const mcatGenChemPart1Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc1-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 1 of 7 — Atomic Structure & Periodic Trends**

General chemistry accounts for roughly **30% of the Chemical and Physical Foundations** section of the MCAT. Atomic structure is the foundation everything else builds on — bonding, reactivity, acid-base behavior, and redox all trace back to electron configuration.
`
    },
    {
      id: 'gc1-quantum-numbers',
      type: 'text' as const,
      content: `## Quantum Numbers

Every electron in an atom is described by four quantum numbers. The MCAT tests your ability to identify invalid combinations.

| Quantum Number | Symbol | What It Describes | Allowed Values |
|----------------|--------|-------------------|----------------|
| Principal | $n$ | Energy level / shell | 1, 2, 3, … |
| Angular momentum | $l$ | Subshell shape | 0 to $n-1$ |
| Magnetic | $m_l$ | Orbital orientation | $-l$ to $+l$ |
| Spin | $m_s$ | Electron spin | $+\\frac{1}{2}$ or $-\\frac{1}{2}$ |

**Quick reference — subshell shapes:**
- $l = 0$ → s orbital (spherical)
- $l = 1$ → p orbital (dumbbell)
- $l = 2$ → d orbital (cloverleaf)
- $l = 3$ → f orbital

### Three Key Rules

**Pauli Exclusion Principle:** No two electrons in the same atom can have identical sets of all four quantum numbers. Each orbital holds at most 2 electrons with opposite spins.

**Hund's Rule:** When filling degenerate (equal-energy) orbitals, electrons occupy them singly before pairing up. This minimizes electron–electron repulsion.

**Aufbau Principle:** Electrons fill lower-energy orbitals first. The general order is: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, …
`
    },
    {
      id: 'gc1-electron-config',
      type: 'text' as const,
      content: `## Electron Configuration & MCAT Exceptions

### Standard Filling

Write configurations using noble gas shorthand. For example:
- Na (Z=11): $[\\text{Ne}]\\,3s^1$
- Fe (Z=26): $[\\text{Ar}]\\,3d^6\\,4s^2$
- Cl (Z=17): $[\\text{Ne}]\\,3s^2\\,3p^5$

### High-Yield Exceptions (Memorize These Two)

| Element | Expected | Actual | Reason |
|---------|----------|--------|--------|
| Cr (Z=24) | $[\\text{Ar}]\\,3d^4\\,4s^2$ | $[\\text{Ar}]\\,3d^5\\,4s^1$ | Half-filled $d$ is extra stable |
| Cu (Z=29) | $[\\text{Ar}]\\,3d^9\\,4s^2$ | $[\\text{Ar}]\\,3d^{10}\\,4s^1$ | Completely filled $d$ is extra stable |

### Transition Metal Cations: Remove 4s First

Although 4s fills before 3d, electrons are **removed from 4s first** when forming cations:

$$\\text{Fe}^{2+}: [\\text{Ar}]\\,3d^6 \\qquad \\text{Fe}^{3+}: [\\text{Ar}]\\,3d^5$$

This is because once 3d is occupied, 3d electrons become lower in energy than 4s.

### Diamagnetic vs. Paramagnetic

- **Paramagnetic**: has one or more unpaired electrons → weakly attracted to magnetic fields
- **Diamagnetic**: all electrons paired → weakly repelled by magnetic fields

Example: $\\text{Cu}^{2+}$ is $[\\text{Ar}]\\,3d^9$ — one unpaired $d$ electron → paramagnetic.
`
    },
    {
      id: 'gc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Quantum Numbers & Electron Configuration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which set of quantum numbers is NOT valid for an electron?`,
            options: [
              `$n=3,\\; l=2,\\; m_l=-1,\\; m_s=+\\tfrac{1}{2}$`,
              `$n=2,\\; l=2,\\; m_l=0,\\; m_s=-\\tfrac{1}{2}$`,
              `$n=4,\\; l=1,\\; m_l=+1,\\; m_s=-\\tfrac{1}{2}$`,
              `$n=1,\\; l=0,\\; m_l=0,\\; m_s=+\\tfrac{1}{2}$`
            ],
            correctAnswer: 1,
            explanation: `For $n=2$, the allowed $l$ values are 0 and 1 only (since $l$ ranges from 0 to $n-1$). $l=2$ requires $n \\geq 3$.`
          },
          {
            question: `The actual electron configuration of Cr (Z=24) is:`,
            options: [
              `$[\\text{Ar}]\\,3d^5\\,4s^1$`,
              `$[\\text{Ar}]\\,3d^4\\,4s^2$`,
              `$[\\text{Ar}]\\,3d^6$`,
              `$[\\text{Ar}]\\,3d^3\\,4s^2\\,4p^1$`
            ],
            correctAnswer: 0,
            explanation: `Cr is a classic exception. A half-filled 3d subshell ($3d^5$) provides extra stability, so one 4s electron promotes to 3d: $[\\text{Ar}]\\,3d^5\\,4s^1$.`
          },
          {
            question: `What is the electron configuration of $\\text{Fe}^{3+}$?`,
            options: [
              `$[\\text{Ar}]\\,3d^5$`,
              `$[\\text{Ar}]\\,3d^3$`,
              `$[\\text{Ar}]\\,4s^1\\,3d^4$`,
              `$[\\text{Ar}]\\,4s^2\\,3d^3$`
            ],
            correctAnswer: 0,
            explanation: `Neutral Fe is $[\\text{Ar}]\\,3d^6\\,4s^2$. Remove electrons from 4s first (2 electrons removed), then one from 3d to get Fe³⁺: $[\\text{Ar}]\\,3d^5$.`
          },
          {
            question: `Which ion is diamagnetic (all electrons paired)?`,
            options: [
              `$\\text{Fe}^{2+}$ ($[\\text{Ar}]\\,3d^6$)`,
              `$\\text{Cu}^{2+}$ ($[\\text{Ar}]\\,3d^9$)`,
              `$\\text{Zn}^{2+}$ ($[\\text{Ar}]\\,3d^{10}$)`,
              `$\\text{Cr}^{3+}$ ($[\\text{Ar}]\\,3d^3$)`
            ],
            correctAnswer: 2,
            explanation: `$\\text{Zn}^{2+}$ has a completely filled $d$ subshell ($3d^{10}$) — all electrons are paired, so it is diamagnetic.`
          },
          {
            question: `An element in Period 3 has a filled $s$ subshell and a half-filled $p$ subshell. Its atomic number is:`,
            options: [`15`, `16`, `14`, `17`],
            correctAnswer: 0,
            explanation: `Period 3: $3s^2\\,3p^3$ = half-filled $p$. $Z = 2 + 8 + 2 + 3 = 15$ (Phosphorus, $[\\text{Ne}]\\,3s^2\\,3p^3$).`
          }
        ]
      }
    },
    {
      id: 'gc1-periodic-trends',
      type: 'text' as const,
      content: `## Periodic Trends — Reason, Don't Memorize

All periodic trends reduce to one concept: **effective nuclear charge** ($Z_{eff}$).

$$Z_{eff} = Z - S$$

- $Z$ = atomic number (number of protons)
- $S$ = shielding constant (approximate number of core electrons shielding valence electrons from the nucleus)

**Across a period (left → right):** $Z$ increases but shielding stays nearly constant → $Z_{eff}$ increases → valence electrons are pulled in tighter.

**Down a group (top → bottom):** New shells are added → valence electrons are farther from nucleus and more shielded → $Z_{eff}$ is lower for valence electrons.

### Summary Table

| Property | Across Period (→) | Down Group (↓) | Driven By |
|----------|-------------------|----------------|-----------|
| Atomic radius | Decreases | Increases | Higher $Z_{eff}$ pulls electrons in; more shells add distance |
| Ionization energy (IE₁) | Increases | Decreases | Harder to remove from tighter-held valence shell |
| Electronegativity | Increases | Decreases | Same as IE — ability to attract bonding electrons |
| Electron affinity | Generally more negative | Generally less negative | More favorable to add e⁻ with high $Z_{eff}$ |
| Metallic character | Decreases | Increases | Inverse of IE — metals lose electrons easily |

### IE₁ Exceptions (MUST Know for MCAT)

Ionization energy generally rises across a period, but there are two important dips:

1. **Group IIA → IIIA**: $\\text{Mg} \\to \\text{Al}$  
   Al's highest-energy electron is in 3p (higher energy, easier to remove) vs. Mg's 3s.

2. **Group VA → VIA**: $\\text{P} \\to \\text{S}$  
   P has a half-filled $3p$ (extra stable, each orbital singly occupied). S has one paired $3p$ electron that experiences extra repulsion → easier to ionize.

### Ionization Energy Jump Logic (MCAT Favorite)

A large jump between successive ionization energies reveals the **valence electron count**:
- Big jump between IE₂ and IE₃ → 2 valence electrons → Group IIA
- Big jump between IE₁ and IE₂ → 1 valence electron → Group IA
`
    },
    {
      id: 'gc1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Periodic Trends** 🎯`,
      exercise: {
        questions: [
          {
            question: `Arrange these in order of INCREASING first ionization energy: Na, Mg, Al, Si, P, S.`,
            options: [
              `Na < Mg < Al < Si < P < S — with Al < Mg and S < P as exceptions`,
              `Na < Al < Mg < Si < S < P`,
              `Na < Mg < Al < Si < S < P`,
              `Na < Mg < Si < Al < P < S`
            ],
            correctAnswer: 1,
            explanation: `General trend increases left to right, but Al < Mg (3p is higher energy than 3s) and S < P (paired 3p electron in S is easier to remove). Correct order: Na < Al < Mg < Si < S < P.`
          },
          {
            question: `Which species has the largest atomic radius?`,
            options: [`K`, `Ca`, `Br`, `Kr`],
            correctAnswer: 0,
            explanation: `K is furthest left in Period 4. Across a period, radius decreases due to increasing $Z_{eff}$. K has the lowest $Z_{eff}$ in that period.`
          },
          {
            question: `An element shows a large jump between its second and third ionization energies. This element is most likely in Group:`,
            options: [`IA`, `IIA`, `IIIA`, `IVA`],
            correctAnswer: 1,
            explanation: `Group IIA has 2 valence electrons. Removing the first two is relatively easy (valence), but the third requires breaking into a noble-gas-like core — enormous energy jump.`
          },
          {
            question: `Which of the following correctly orders electronegativity from lowest to highest?`,
            options: [
              `Cs < Ba < N < O < F`,
              `F < O < N < Ba < Cs`,
              `N < O < F < Ba < Cs`,
              `Cs < F < Ba < N < O`
            ],
            correctAnswer: 0,
            explanation: `Electronegativity decreases down a group and left to right. F is the most electronegative element. Cs (bottom-left) is among the least. Correct: Cs < Ba < N < O < F.`
          }
        ]
      }
    },
    {
      id: 'gc1-worked-example',
      type: 'text' as const,
      content: `## Worked Example: Connecting Electron Config to Properties

**Problem:** A metal M forms a 2+ ion with configuration $[\\text{Ar}]\\,3d^5$. Identify M and predict whether $M^{2+}$ is paramagnetic or diamagnetic.

**Step 1 — Identify M:**  
$M^{2+}$ is $[\\text{Ar}]\\,3d^5$. To get the neutral atom, add back 2 electrons. For transition metals, they go back to 4s:  
$$M = [\\text{Ar}]\\,3d^5\\,4s^2$$  
Counting electrons: $\\text{Ar}$ = 18, plus $3d^5$ = 5, plus $4s^2$ = 2 → total 25 electrons → **M = Mn (manganese)**.

**Step 2 — Paramagnetic or diamagnetic?**  
$[\\text{Ar}]\\,3d^5$ means 5 electrons in 5 separate $d$ orbitals (Hund's rule) → **5 unpaired electrons** → **paramagnetic**.

**MCAT Connection:** Iron in hemoglobin is $\\text{Fe}^{2+}$ ($[\\text{Ar}]\\,3d^6$) with 4 unpaired electrons. This paramagnetic property is exploited in MRI contrast agents.
`
    },
    {
      id: 'gc1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **Quantum numbers:** $l$ ranges from 0 to $n-1$; $m_l$ from $-l$ to $+l$. Invalid $l$ or $m_l$ = most common MCAT trap.
- **Electron removal from transition metals:** always remove 4s before 3d when forming cations.
- **Cr and Cu exceptions:** half-filled and fully filled $d$ subshells are extra stable.
- **All periodic trends trace to $Z_{eff}$:** increasing $Z_{eff}$ → smaller radius, higher IE, higher EN.
- **IE exceptions:** Al < Mg and S < P due to subshell energy and pairing effects.
- **Ionization energy jump:** locates valence electron count — important for group identification.
`
    }
  ]
};
