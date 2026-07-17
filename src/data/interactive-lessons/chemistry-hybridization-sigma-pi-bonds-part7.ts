export const chemHybridizationSigmaPiBondsPart7Data = {
  topicSlug: 'hybridization-sigma-pi-bonds',
  sections: [
    {
      id: 'hy-7-1',
      type: 'text',
      title: 'Synthesis and AP Review',
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Connecting Hybridization to VSEPR, Polarity, and the AP Exam**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'hy-7-2',
      type: 'text',
      title: 'The Complete Molecular Analysis',
      content: `## From Lewis Structure to Full Analysis

For any molecule on the AP exam, you should be able to perform this complete analysis:

### The Full Workflow

1. **Draw the Lewis structure** → bonds, lone pairs, formal charges
2. **Count electron domains** → steric number
3. **Assign hybridization** → sp, $sp^{2}$, or $sp^{3}$
4. **Determine electron geometry** → tetrahedral, trigonal planar, or linear
5. **Determine molecular geometry** → remove lone pairs from the picture
6. **Predict bond angles** → ideal angles modified by lone pair effects
7. **Count σ and π bonds** → single=1σ, double=1σ+1π, triple=1σ+2π
8. **Assess polarity** → symmetry of geometry + bond dipoles

### Worked Example: Sulfur Dioxide $(SO_{2})$

| Step | Analysis |
|------|----------|
| Lewis structure | S has 1 double bond, 1 single bond to O (with resonance), 1 lone pair |
| Electron domains | 3 (2 bonds + 1 lone pair) |
| Hybridization | $sp^{2}$ |
| Electron geometry | Trigonal planar |
| Molecular geometry | **Bent** |
| Bond angle | ~119° (slightly less than 120° due to lone pair) |
| σ and π bonds | 2σ + 1π (in one resonance structure) |
| Polarity | **Polar** — bent geometry means dipoles don\'t cancel |`
    },
    {
      id: 'hy-7-3',
      type: 'text',
      title: 'Hybridization and Polarity Connection',
      content: `## How Hybridization Connects to Polarity

### The Link

> 🔑 **Key Concept:** Hybridization → Geometry → Symmetry → Polarity. This chain determines whether a molecule is polar or nonpolar.

| Hybridization | Geometry (no lone pairs) | Symmetric? | Polar? |
|:---:|:---:|:---:|:---:|
| sp | Linear | Yes | Only if bonds are different |
| $sp^{2}$ | Trigonal planar | Yes | Only if bonds are different |
| $sp^{3}$ | Tetrahedral | Yes | Only if bonds are different |

### When Lone Pairs Are Present

Lone pairs break symmetry:

| Hybridization | Lone Pairs | Molecular Shape | Always Polar? |
|:---:|:---:|:---:|:---:|
| $sp^{3}$ | 1 | Trigonal pyramidal | Yes |
| $sp^{3}$ | 2 | Bent | Yes |
| $sp^{2}$ | 1 | Bent | Yes |
| sp | 1 | Linear (but rare) | Depends |

### AP Exam Connection

A common AP question: *"Explain why $CO_{2}$ is nonpolar but $SO_{2}$ is polar."*

**Answer:** Both have polar bonds (electronegativity difference between atoms). $CO_{2}$ is sp hybridized → linear → symmetric → dipoles cancel → **nonpolar**. $SO_{2}$ is $sp^{2}$ with a lone pair → bent → asymmetric → dipoles don\'t cancel → **polar**.`
    },
    {
      id: 'hy-7-4',
      type: 'multiple-choice',
      title: 'AP-Style Conceptual Questions',
      content: 'These questions mimic the style and difficulty of AP Chemistry exam questions.',
      exercise: {
        questions: [
          {
            question: 'Which of the following molecules is nonpolar?',
            options: ['$SO_{2}$', '$NH_{3}$', '$BF_{3}$', '$H_{2}O$'],
            correctAnswer: 2,
            explanation: '$BF_{3}$: B is $sp^{2}$ with 0 lone pairs → trigonal planar → perfectly symmetric → all B–F dipoles cancel → nonpolar. $SO_{2}$, $NH_{3}$, and $H_{2}O$ all have lone pairs that break symmetry.'
          },
          {
            question: 'In the molecule $CH_{3}CN$ (acetonitrile), the carbon bonded to nitrogen is:',
            options: ['sp hybridized', '$sp^{2}$ hybridized', '$sp^{3}$ hybridized', 'unhybridized'],
            correctAnswer: 0,
            explanation: 'The C bonded to N has 1 C–C bond + 1 C≡N triple bond = 2 electron domains → sp hybridization.'
          },
          {
            question: 'A student claims that "$sp^{2}$ hybridization always results in a trigonal planar molecular geometry." This claim is:',
            options: [
              'Correct — $sp^{2}$ always gives trigonal planar',
              'Incorrect — $sp^{2}$ gives trigonal planar electron geometry, but the molecular geometry can be bent if lone pairs are present',
              'Incorrect — $sp^{2}$ gives tetrahedral geometry',
              'Incorrect — hybridization does not affect geometry'
            ],
            correctAnswer: 1,
            explanation: '$sp^{2}$ hybridization gives a trigonal planar electron domain geometry. But if one of the three domains is a lone pair (like in $SO_{2}$), the molecular geometry is bent, not trigonal planar.'
          },
          {
            question: 'Which molecule has the shortest carbon-to-carbon bond?',
            options: ['$C_{2}H_{6}$ (ethane)', '$C_{2}H_{4}$ (ethene)', '$C_{2}H_{2}$ (acetylene)', 'All C–C bonds are the same length'],
            correctAnswer: 2,
            explanation: '$C_{2}H_{2}$ has a C≡C triple bond (bond order 3), which is shorter than C=C (bond order 2) in $C_{2}H_{4}$ and C–C (bond order 1) in $C_{2}H_{6}$. Higher bond order = shorter bond.'
          }
        ]
      }
    },
    {
      id: 'hy-7-5',
      type: 'input-boxes',
      title: 'AP-Style Counting and Analysis',
      content: 'Perform a complete analysis of the given molecules.',
      exercise: {
        inputs: [
          {
            label: 'Total sigma bonds in $CH_{3}COCH_{3}$ (acetone: $H_{3}C$–C(=O)–$CH_{3}$)',
            correctAnswer: '9',
            explanation: '6 C–H bonds (6σ) + 2 C–C bonds (2σ) + 1 C=O double bond (1σ + 1π) = 9 sigma bonds total.'
          },
          {
            label: 'Total pi bonds in $CH_{3}COCH_{3}$ (acetone)',
            correctAnswer: '1',
            explanation: 'Only the C=O double bond contributes a pi bond. Total pi = 1.'
          },
          {
            label: 'Hybridization of the central carbon in acetone (bonded to 2 C atoms and 1 O with a double bond)? Enter sp, sp2, or sp3',
            correctAnswer: 'sp2',
            explanation: 'The central carbon has 3 electron domains (2 C–C single bonds + 1 C=O double bond) → $sp^{2}$ hybridization.'
          },
          {
            label: 'In $C_{2}H_{2}$ (acetylene), how many unhybridized p orbitals does EACH carbon atom have?',
            correctAnswer: '2',
            explanation: 'Each carbon is sp hybridized (2 electron domains). sp uses 1s + 1p, leaving 3 − 1 = 2 unhybridized p orbitals per carbon, which form the 2 pi bonds.'
          }
        ]
      }
    },
    {
      id: 'hy-7-6',
      type: 'dropdown-select',
      title: 'Connecting Concepts',
      content: 'Select the correct answer that connects hybridization, geometry, and polarity.',
      exercise: {
        dropdowns: [
          {
            id: 'hy-7-6-dd1',
            label: 'Is $CO_{2}$ polar or nonpolar?',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: '$CO_{2}$ is sp → linear → symmetric → bond dipoles cancel → nonpolar.'
          },
          {
            id: 'hy-7-6-dd2',
            label: 'Is $SO_{2}$ polar or nonpolar?',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: '$SO_{2}$ is $sp^{2}$ with 1 lone pair → bent → asymmetric → bond dipoles do not cancel → polar.'
          },
          {
            id: 'hy-7-6-dd3',
            label: 'Is $CCl_{4}$ polar or nonpolar?',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: '$CCl_{4}$ is $sp^{3}$ → tetrahedral → symmetric → all C–Cl dipoles cancel → nonpolar.'
          },
          {
            id: 'hy-7-6-dd4',
            label: 'Is $CHCl_{3}$ polar or nonpolar?',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: '$CHCl_{3}$ is $sp^{3}$ → tetrahedral but not symmetric (3 Cl + 1 H) → dipoles don\'t cancel → polar.'
          }
        ]
      }
    },
    {
      id: 'hy-7-7',
      type: 'multiple-choice',
      title: 'Final AP Exam Practice',
      content: 'These questions represent the highest level of AP Chemistry integration.',
      exercise: {
        questions: [
          {
            question: 'A molecule $XY_{3}$ has a trigonal pyramidal molecular geometry. What is the hybridization of atom X?',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
            correctAnswer: 2,
            explanation: 'Trigonal pyramidal = 3 bonds + 1 lone pair = 4 electron domains → $sp^{3}$ hybridization. The lone pair converts tetrahedral electron geometry to trigonal pyramidal molecular geometry.'
          },
          {
            question: 'In the molecule below, which carbon has different hybridization from the others?\n\n$CH_{3}$–CH=CH–$CH_{3}$ (2-butene)',
            options: [
              '$C_{1}$ ($CH_{3}$ on left)',
              '$C_{2}$ (CH= in middle-left)',
              '$C_{1}$ and $C_{4}$ are different from $C_{2}$ and $C_{3}$',
              'All carbons have the same hybridization'
            ],
            correctAnswer: 2,
            explanation: '$C_{1}$ and $C_{4}$ each have 4 electron domains (3 H + 1 C) → $sp^{3}$. $C_{2}$ and $C_{3}$ each have 3 electron domains (1 H + 1 C single + 1 C=C double) → $sp^{2}$. So $C_{1}$ and $C_{4}$ $(sp^{3})$ differ from $C_{2}$ and $C_{3}$ $(sp^{2})$.'
          },
          {
            question: 'How many total sigma (σ) and pi (π) bonds are in the molecule $CH_{2}$=CH–C≡CH (vinylacetylene)?',
            options: ['5σ + 3π', '6σ + 3π', '7σ + 3π', '7σ + 2π'],
            correctAnswer: 2,
            explanation: 'Count all bonds: 1 $CH_{2}$= has 2 C–H (2σ); C=C double bond (1σ+1π); middle C–H (1σ); C–C single bond... Let us recount: $CH_{2}$=CH–C≡CH. Bonds: 2 C–H on left (2σ), 1 C=C (1σ+1π), 1 C–H middle (1σ), 1 C–C single (1σ), 1 C≡C (1σ+2π), 1 C–H right (1σ). Total: 7σ + 3π.'
          },
          {
            question: 'Which statement best explains why a C=C double bond is stronger but less than twice as strong as a C–C single bond?',
            options: [
              'The double bond has more electrons, which repel each other',
              'The sigma bond is strong (good overlap) but the pi bond is weaker (less overlap), so the total is less than 2× the sigma',
              'Double bonds are always exactly twice as strong',
              'The extra electrons shield the nuclear charge'
            ],
            correctAnswer: 1,
            explanation: 'A C=C double bond = 1σ + 1π. The sigma bond (~348 kJ/mol) has strong head-on overlap, but the pi bond (~266 kJ/mol) has weaker lateral overlap. Total (~614) is strong but less than 2 × 348 = 696 kJ/mol.'
          }
        ]
      }
    },
    {
      id: 'hy-7-8',
      type: 'text',
      title: 'Course Summary',
      content: `---

## 🏆 Congratulations — Hybridization and Sigma/Pi Bonds Complete!

### The Big Picture

You now understand the orbital-level explanation for molecular bonding:

| Concept | Key Takeaway |
|---------|-------------|
| **Hybridization** | Atomic orbitals mix to form equivalent hybrid orbitals for bonding |
| **$sp^{3}$** | 4 domains → tetrahedral → 109.5° → 0 pi bonds possible |
| **$sp^{2}$** | 3 domains → trigonal planar → 120° → 1 pi bond possible |
| **sp** | 2 domains → linear → 180° → 2 pi bonds possible |
| **Sigma bonds** | Head-on overlap, allow rotation, stronger |
| **Pi bonds** | Lateral overlap, prevent rotation, weaker |
| **Bond counting** | Single = 1σ, Double = 1σ+1π, Triple = 1σ+2π |

### AP Exam Tips

> 💡 **Tip:** These are the most commonly tested hybridization concepts on the AP Chemistry exam.

1. **Always start with the Lewis structure** — hybridization flows from electron domains
2. **Don\'t confuse electron geometry with molecular geometry** — lone pairs affect shape but still count for hybridization
3. **Bond order determines properties** — higher order = shorter, stronger, less reactive bonds
4. **Connect hybridization to polarity** — geometry determines if dipoles cancel
5. **Practice sigma/pi counting** — it\'s a guaranteed easy point if you know the rules

### The Connection Chain

$$\\text{Lewis Structure} \\rightarrow \\text{Electron Domains} \\rightarrow \\text{Hybridization} \\rightarrow \\text{Geometry} \\rightarrow \\text{Polarity}$$

Master this chain and you\'ll ace the bonding questions on the AP exam! 🎯`
    }
  ]
};
