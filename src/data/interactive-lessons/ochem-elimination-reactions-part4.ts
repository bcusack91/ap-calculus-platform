export const oChemElimPart4Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi4-intro',
      type: 'text' as const,
      content: `
## Regioselectivity: Zaitsev vs Hofmann

**Part 4 of 7 — Choosing Which Alkene Forms**

When a substrate has $\\beta$-hydrogens on **more than one** $\\beta$-carbon, elimination can produce **constitutionally isomeric** alkenes that differ in the position of the double bond — and therefore in the number of alkyl groups attached to it. **Regioselectivity** is the question of which of these alkenes predominates.

Recall the substitution pattern vocabulary for an alkene's two $\\text{sp}^2$ carbons:

| Type | Alkyl groups on $\\text{C}{=}\\text{C}$ | Example |
|------|---------------------------------------|---------|
| Monosubstituted | 1 | $\\text{CH}_2{=}\\text{CHCH}_2\\text{CH}_3$ |
| Disubstituted | 2 | $\\text{CH}_3\\text{CH}{=}\\text{CHCH}_3$ |
| Trisubstituted | 3 | $(\\text{CH}_3)_2\\text{C}{=}\\text{CHCH}_3$ |
| Tetrasubstituted | 4 | $(\\text{CH}_3)_2\\text{C}{=}\\text{C(CH}_3)_2$ |

**Alkene stability rises with substitution:** more alkyl groups donate electron density (hyperconjugation + induction) into the $\\pi$-system, so a tetrasubstituted alkene is more stable than a monosubstituted one. This single fact underlies the entire Zaitsev–Hofmann story.
      `
    },
    {
      id: 'elimi4-zaitsev',
      type: 'text' as const,
      content: `
### Zaitsev's Rule — The "More Substituted" Default

**Zaitsev's rule:** under most conditions, the **major product is the more substituted (more stable) alkene**.

The reason is transition-state energetics. In the elimination transition state the $\\pi$-bond is already partly formed, so the developing double bond has partial alkene character. The transition state leading to the **more substituted** alkene is **lower in energy** (it benefits from the same hyperconjugative stabilization as the product), so that pathway is faster and dominates. This is a case of the more stable product also having the more stable (Hammond-like) transition state.

**Worked example — 2-bromo-2-methylbutane with a small base (e.g., $\\text{NaOEt}$):**

$(\\text{CH}_3)_2\\text{CBr}{-}\\text{CH}_2\\text{CH}_3$. The leaving group is on C2. Two $\\beta$-carbons bear hydrogens:

- $\\beta$-H from a C2-methyl $\\rightarrow$ **2-methyl-1-butene** (disubstituted, terminal).
- $\\beta$-H from C3 ($\\text{CH}_2$) $\\rightarrow$ **2-methyl-2-butene** (**trisubstituted**, internal).

With a **small base**, Zaitsev wins: the **trisubstituted 2-methyl-2-butene** is the major product. Among Zaitsev products that can be cis or trans, the **more stable trans ($E$)** isomer usually predominates as well.
      `
    },
    {
      id: 'elimi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Zaitsev
      `,
      exercise: {
        questions: [
          {
            question: "What does Zaitsev's rule predict as the major elimination product?",
            options: [
              'The less substituted (least stable) alkene',
              'The more substituted (more stable) alkene',
              'The alkene with the most cis double bonds',
              'A racemic mixture of alkenes'
            ],
            correctAnswer: 1,
            explanation: 'Zaitsev: the major product is the more substituted, more stable alkene, because the transition state leading to it is lower in energy (the partly formed π-bond enjoys the same hyperconjugative stabilization as the product). The less substituted alkene is the Hofmann product, favored only under special conditions.'
          },
          {
            question: 'Why is a more substituted alkene more stable than a less substituted one?',
            options: [
              'It has more ring strain',
              'Alkyl groups donate electron density into the π-system via hyperconjugation and induction, stabilizing the double bond',
              'It has fewer hydrogens',
              'It is always planar while less substituted alkenes are not'
            ],
            correctAnswer: 1,
            explanation: 'Each alkyl substituent on the C=C stabilizes the π-bond through hyperconjugation and inductive electron donation. More alkyl groups → more stabilization → lower energy. This is exactly why the more substituted alkene is both the thermodynamic product and (via a lower-energy TS) usually the kinetic Zaitsev product too.'
          },
          {
            question: '2-bromobutane is treated with sodium ethoxide (a small base). Which is the major (Zaitsev) product?',
            options: [
              '1-butene (monosubstituted)',
              '2-butene (disubstituted), predominantly the trans isomer',
              'butane',
              '2-butanol'
            ],
            correctAnswer: 1,
            explanation: 'The β-carbons are C1 (gives monosubstituted 1-butene) and C3 (gives disubstituted 2-butene). A small base follows Zaitsev → the more substituted 2-butene, favoring the more stable trans (E) isomer. 2-butanol would be a substitution product, not an elimination product.'
          }
        ]
      }
    },
    {
      id: 'elimi4-hofmann',
      type: 'text' as const,
      content: `
### Hofmann's Rule — When the Bulky Base Wins

The Zaitsev preference can be **reversed**. When the base is **sterically bulky**, the **less substituted alkene** becomes the major product. This is the **Hofmann** product.

Why does a big base flip the regiochemistry? To remove a $\\beta$-hydrogen, the base must physically reach it.
- The $\\beta$-hydrogens that would give the **more substituted** (Zaitsev) alkene sit on **more crowded, internal** carbons — surrounded by alkyl groups.
- The $\\beta$-hydrogens that give the **less substituted** (Hofmann) alkene sit on **less hindered, terminal** carbons (often a $\\text{CH}_3$), with more of them statistically available.

A bulky base like *tert*-butoxide ($t\\text{-BuOK}$) cannot easily squeeze in to grab the hindered internal H, so it preferentially abstracts the **exposed terminal H**, delivering the **less substituted** alkene.

| Base | Example | Regiochemistry |
|------|---------|----------------|
| Small, unhindered | $\\text{HO}^-$, $\\text{CH}_3\\text{CH}_2\\text{O}^-$ | **Zaitsev** (more substituted) |
| Large, hindered | $(\\text{CH}_3)_3\\text{CO}^-$ ($t\\text{-BuOK}$), LDA, DBU | **Hofmann** (less substituted) |

> **Other Hofmann triggers:** very bulky leaving groups (e.g., the trimethylammonium group $-\\overset{+}{\\text{N}}(\\text{CH}_3)_3$ in a Hofmann elimination) also favor the less-substituted alkene by the same steric logic. The headline to memorize: **bulky base (or bulky leaving group) $\\rightarrow$ Hofmann; small base $\\rightarrow$ Zaitsev.**
      `
    },
    {
      id: 'elimi4-worked',
      type: 'text' as const,
      content: `
### Worked Example — Same Substrate, Two Bases

**Problem:** Predict the major product when **2-bromo-2-methylbutane** reacts (a) with sodium ethoxide ($\\text{NaOCH}_2\\text{CH}_3$, small) and (b) with potassium *tert*-butoxide ($t\\text{-BuOK}$, bulky).

**Map the $\\beta$-hydrogens.** $(\\text{CH}_3)_2\\text{CBr}{-}\\text{CH}_2\\text{CH}_3$ — LG on C2. Eliminable $\\beta$-H's:
- From a **C2 methyl** (terminal, exposed) $\\rightarrow$ **2-methyl-1-butene** (disubstituted, the **Hofmann** alkene here).
- From **C3** ($\\text{CH}_2$, more internal) $\\rightarrow$ **2-methyl-2-butene** (trisubstituted, the **Zaitsev** alkene).

**(a) Small base ($\\text{NaOEt}$):** No steric obstacle, so the lower-energy, more-substituted transition state wins. **Major = 2-methyl-2-butene (Zaitsev, trisubstituted).**

**(b) Bulky base ($t\\text{-BuOK}$):** The base is too large to reach the internal C3 hydrogen comfortably; it abstracts an exposed methyl hydrogen instead. **Major = 2-methyl-1-butene (Hofmann, disubstituted).**

**Takeaway:** The substrate did not change — only the **size of the base** did. Recognizing "$t\\text{-BuOK}$ / DBU / LDA" in a problem should immediately make you predict the **Hofmann** (less substituted) alkene; "$\\text{NaOEt}$ / $\\text{NaOH}$ / $\\text{KOH}$" should make you predict **Zaitsev**.

> **Exam trap:** Students reflexively answer "more substituted" for every elimination. Always check the **base** first. A bulky base is the signal to flip your answer to the **less** substituted product.
      `
    },
    {
      id: 'elimi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Hofmann & Base Effects
      `,
      exercise: {
        questions: [
          {
            question: 'Using a bulky base such as potassium tert-butoxide steers an E2 reaction toward which product?',
            options: [
              'The Zaitsev (more substituted) alkene',
              'The Hofmann (less substituted) alkene',
              'The substitution product',
              'A carbocation rearrangement product'
            ],
            correctAnswer: 1,
            explanation: 'A bulky base cannot easily reach the hindered internal β-hydrogens that give the more substituted alkene, so it removes the more accessible terminal β-hydrogens, giving the less substituted Hofmann product. Small bases give Zaitsev.'
          },
          {
            question: 'What is the structural reason a bulky base abstracts a terminal β-hydrogen rather than an internal one?',
            options: [
              'Terminal hydrogens are more acidic by several pKa units',
              'Internal β-hydrogens are more sterically shielded by surrounding alkyl groups, while terminal β-hydrogens are exposed',
              'Terminal carbons always form carbocations',
              'Internal hydrogens cannot reach anti-periplanar geometry'
            ],
            correctAnswer: 1,
            explanation: 'The regiochemical switch is steric, not acid-base strength. The β-hydrogens leading to the more substituted alkene sit on crowded internal carbons; a large base is physically blocked from them and grabs the exposed terminal H instead, giving Hofmann selectivity.'
          },
          {
            question: '3-bromo-2,3-dimethylpentane is treated with DBU (a bulky, hindered base). Compared to using KOH, the product distribution will shift toward:',
            options: [
              'The more substituted (tetra/trisubstituted) alkene',
              'The less substituted alkene (Hofmann), because DBU is bulky',
              'The SN2 substitution product',
              'No reaction at all'
            ],
            correctAnswer: 1,
            explanation: 'DBU is a bulky, hindered amidine base, so like tert-butoxide it favors the Hofmann (less substituted) alkene relative to a small base like KOH. Recognizing the base as bulky is the trigger to predict the less substituted product.'
          },
          {
            question: 'Besides a bulky base, what other structural feature can drive elimination toward the Hofmann (less substituted) product?',
            options: [
              'A very small leaving group such as fluoride',
              'A bulky/charged leaving group such as a trimethylammonium group, –N+(CH3)3',
              'A polar protic solvent',
              'A primary substrate'
            ],
            correctAnswer: 1,
            explanation: 'A large leaving group like trimethylammonium creates steric strain near the more substituted β-position, so removal of the exposed terminal H (Hofmann product) is favored — the classic Hofmann elimination. Both a bulky base AND a bulky leaving group push toward the less substituted alkene.'
          }
        ]
      }
    },
    {
      id: 'elimi4-summary',
      type: 'text' as const,
      content: `
### Part 4 Summary

- **Regioselectivity** decides which alkene forms when several $\\beta$-hydrogens are available; it matters because **alkene stability rises with substitution** (tetra $>$ tri $>$ di $>$ mono).
- **Zaitsev's rule (default):** small/unhindered bases ($\\text{HO}^-$, $\\text{RO}^-$) give the **more substituted, more stable** alkene, via a lower-energy transition state. The more stable **trans ($E$)** isomer is usually favored too.
- **Hofmann's rule:** **bulky** bases ($t\\text{-BuOK}$, DBU, LDA) — or **bulky leaving groups** ($-\\overset{+}{\\text{N}}(\\text{CH}_3)_3$) — give the **less substituted** alkene, because steric bulk blocks abstraction of hindered internal $\\beta$-hydrogens.
- **Practical rule:** read the base before answering. **Small base $\\rightarrow$ Zaitsev; bulky base $\\rightarrow$ Hofmann.**
- On rings, remember (Part 2) that **anti-periplanar geometry can override Zaitsev** entirely.

Next: **Part 5** assembles every factor — substrate, base, solvent, temperature — into a complete **$\\text{S}_\\text{N}1$/$\\text{S}_\\text{N}2$/$\\text{E}1$/$\\text{E}2$ decision framework.**
      `
    }
  ]
}
