export const physics2NuclearPart5Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p5-intro',
      type: 'text' as const,
      content: `# 🔗 Binding Energy

**Part 5 of 7 — Nuclear Stability**

---

### Binding Energy per Nucleon

$$\\text{BE/nucleon} = \\frac{\\Delta m \\cdot c^2}{A} = \\frac{\\text{Total BE}}{A}$$

This is the average energy needed to remove one nucleon from the nucleus — a measure of nuclear stability.

### The Binding Energy Curve

| Region | Elements | BE/nucleon | What Happens |
|--------|----------|-----------|--------------|
| Very light ($A = 2$–$4$) | H-2, He-3, He-4 | 1–7 MeV | Jumps dramatically |
| Light ($A = 4$–$20$) | He-4 to Ne | 5–8 MeV | Increases with spikes at "magic numbers" |
| Medium ($A = 20$–$60$) | Ne to Fe | 8–8.8 MeV | Gradually increases to peak |
| **Iron-56** | **Fe** | **8.79 MeV** | **Maximum stability** |
| Heavy ($A > 60$) | Fe to U | 8.8–7.6 MeV | Slowly decreases |

### Why Iron-56 is Special

Iron-56 sits at the **peak** of the binding energy curve. This has profound consequences:

- **Fusion** of elements lighter than Fe → releases energy (moves UP the curve)
- **Fission** of elements heavier than Fe → releases energy (moves UP the curve)
- **Neither process releases energy** for turning other elements into iron
- Iron is the "ash" of stellar fusion — when a star's core becomes iron, fusion stops and the star collapses → supernova

### Notable Spikes

| Nucleus | BE/nucleon | Why the spike? |
|---------|-----------|----------------|
| He-4 | 7.07 MeV | "Doubly magic" — 2 protons, 2 neutrons (both magic numbers) |
| C-12 | 7.68 MeV | Three alpha particles |
| O-16 | 7.98 MeV | "Doubly magic" — 8 protons, 8 neutrons |
| Fe-56 | 8.79 MeV | Peak stability |
      `
    },
    {
      id: 'nuclearreactions-p5-stability',
      type: 'text' as const,
      content: `
## Nuclear Stability

### What Makes a Nucleus Stable?

| Factor | Stable When... | Unstable When... |
|--------|---------------|------------------|
| N/Z ratio | Close to 1 (light) or ~1.5 (heavy) | Too many or too few neutrons |
| Even/odd | Even-even (most stable) | Odd-odd (least stable) |
| Magic numbers | $Z$ or $N$ = 2, 8, 20, 28, 50, 82, 126 | Far from magic numbers |
| Size | $A < 209$ (generally) | $A > 209$ (all radioactive) |

### The Band of Stability

A plot of $N$ vs. $Z$ for stable nuclei shows:
- Light nuclei: $N \\approx Z$ (line $N = Z$)
- Heavy nuclei: curve bends toward $N > Z$ (extra neutrons needed to dilute proton repulsion)
- Above the band: too many neutrons → $\\beta^-$ decay ($n \\to p$)
- Below the band: too many protons → $\\beta^+$ decay or electron capture ($p \\to n$)
- Very heavy ($Z > 83$): alpha decay to reduce both $A$ and $Z$

### Decay Chains

Heavy radioactive nuclei don't become stable in one step. They undergo a **decay series** — multiple alpha and beta decays until reaching a stable isotope.

Example: $^{238}\\text{U} \\to \\text{(14 decays)} \\to ^{206}\\text{Pb}$ (stable)
      `
    },
    {
      id: 'nuclearreactions-p5-check1',
      type: 'multiple-choice' as const,
      content: `
**Binding Energy Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Iron-56 has the highest binding energy per nucleon. This means iron is:',
            options: [
              'The most radioactive element',
              'The most stable nucleus — hardest to break apart',
              'The heaviest stable element',
              'The lightest element that can undergo fission'
            ],
            correctAnswer: 1,
            explanation: 'Highest BE/nucleon = most tightly bound = most stable. You\'d need 8.79 MeV per nucleon to completely disassemble an iron-56 nucleus. No nuclear reaction starting from iron releases energy — it\'s the cosmic "energy minimum."'
          },
          {
            question: 'Which process releases energy: fusing two iron-56 nuclei or splitting iron-56?',
            options: [
              'Fusing iron',
              'Splitting iron',
              'Neither — iron is at the peak, so both directions require energy input',
              'Both release energy'
            ],
            correctAnswer: 2,
            explanation: 'Iron sits at the peak of the BE curve. Moving in either direction (lighter or heavier) decreases BE/nucleon, meaning you\'d need to add energy. This is why iron is the "dead end" for stellar fusion.'
          },
          {
            question: 'A nucleus has $Z = 25$, $N = 35$. It most likely undergoes:',
            options: [
              'Alpha decay (too heavy)',
              'Beta$ {}^{-}$ decay (too many neutrons, converts $n \\to p$)',
              'Beta$ {}^{+}$ decay (too many protons)',
              'It is stable'
            ],
            correctAnswer: 1,
            explanation: '$N/Z = 35/25 = 1.4$. For $A = 60$, the stable ratio is about 1.1–1.2. Too many neutrons → beta$ {}^{-}$ decay converts a neutron to a proton, moving closer to the stability band.'
          },
          {
            question: 'He-4 has an unusually high BE/nucleon for its size because:',
            options: [
              'It\'s the lightest element',
              'It has 2 protons and 2 neutrons — both "magic numbers" making it extra stable',
              'Helium is a noble gas',
              'It was the first element formed after the Big Bang'
            ],
            correctAnswer: 1,
            explanation: '2 is a nuclear magic number. He-4 is "doubly magic" (both $Z$ and $N$ are magic), giving it exceptional stability. This is why alpha particles ($^4_2\\text{He}$) are emitted in alpha decay — they\'re such a tightly bound unit.'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Binding Energy Calculations** 🧮

A nucleus has 26 protons and 30 neutrons. Mass = 55.935 u.
($m_p = 1.00728$ u, $m_n = 1.00866$ u)

**1)** What element is this? (symbol)

**2)** Mass defect $\\Delta m$? (u, to 3 decimal places)

**3)** Total binding energy? (MeV, to 1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Fe', '0.529', '492.8'],
        hint1: '$Z = 26$ corresponds to which element?',
        hint2: '$\\Delta m = 26(1.00728) + 30(1.00866) - 55.935$',
        hint3: '$BE = \\Delta m \\times 931.5$',
        explanation: '1) $Z = 26$ = Iron (Fe). This is Fe-56! 2) $\\Delta m = 26(1.00728) + 30(1.00866) - 55.935 = 26.189 + 30.260 - 55.935 = 0.529$ u. 3) $BE = 0.529 \\times 931.5 = 492.8$ MeV. Per nucleon: $492.8/56 = 8.80$ MeV — the peak of the curve!'
      }
    }
  ]
};
