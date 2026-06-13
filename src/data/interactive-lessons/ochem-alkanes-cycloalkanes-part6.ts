export const oChemAlkanesPart6Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan6-intro',
      type: 'text' as const,
      content: `
## Reactions Workshop: Combustion & Radical Halogenation

**Part 6 of 7 — Putting Reactivity to Work**

Alkanes are famously unreactive ("paraffins" — *parum affinis*, "little affinity"): no $\\pi$ bonds, no lone pairs, no polar bonds for nucleophiles or electrophiles to attack. Only two reactions matter at this level, and both involve breaking strong C–H bonds homolytically:

1. **Combustion** — complete oxidation with $O_2$ to $CO_2$ and $H_2O$, releasing large amounts of heat. The basis of alkanes as fuels.
2. **Free-radical halogenation** — substitution of an H by a halogen (Cl or Br) under heat or light, proceeding through a **radical chain mechanism**.

This workshop drills the mechanism and the selectivity arithmetic you will be tested on.
      `
    },
    {
      id: 'alkan6-combustion',
      type: 'text' as const,
      content: `
### Combustion and Balancing

Complete combustion of any alkane follows:

$C_nH_{2n+2} + \\left(\\dfrac{3n+1}{2}\\right) O_2 \\rightarrow n\\,CO_2 + (n+1)\\,H_2O$

The reaction is highly **exothermic** (large negative $\\Delta H$): for example, octane releases roughly $-1300\\;\\text{kcal/mol}$. Insufficient oxygen gives **incomplete combustion**, producing $CO$ (toxic) and soot ($C$) instead of $CO_2$.

> **Worked balance — propane ($C_3H_8$):** Here $n = 3$, so the coefficient of $O_2$ is $(3\\cdot 3 + 1)/2 = 5$. Products: $3\\,CO_2$ and $4\\,H_2O$, giving $C_3H_8 + 5\\,O_2 \\rightarrow 3\\,CO_2 + 4\\,H_2O$ with $\\Delta H \\approx -530\\;\\text{kcal/mol}$.

Combustion is not synthetically useful (it destroys the carbon skeleton), but its heats of combustion are exactly the data we used in Part 4 to quantify ring strain.
      `
    },
    {
      id: 'alkan6-mechanism',
      type: 'text' as const,
      content: `
### The Radical Chain Mechanism

Free-radical halogenation (e.g. $CH_4 + Cl_2 \\xrightarrow{h\\nu} CH_3Cl + HCl$) proceeds in three stages. Memorize the stage names and what each does:

**1. Initiation.** Light or heat homolytically cleaves the weak halogen–halogen bond, generating two halogen radicals. This is the only step that *creates* radicals from a closed-shell molecule:

$Cl_2 \\xrightarrow{h\\nu} 2\\,\\text{Cl}\\cdot$

**2. Propagation (two steps that repeat).** Radicals are consumed and regenerated, so a single initiation event can drive thousands of cycles:

- $\\text{Cl}\\cdot + CH_4 \\rightarrow HCl + \\text{CH}_3\\cdot$ (abstracts H, forms a carbon radical)
- $\\text{CH}_3\\cdot + Cl_2 \\rightarrow CH_3Cl + \\text{Cl}\\cdot$ (forms product, regenerates $\\text{Cl}\\cdot$)

Note the chlorine radical is regenerated, so it carries the chain forward — this is what makes it a *chain* reaction.

**3. Termination.** Any two radicals combine, removing radicals from the system and ending a chain:

$\\text{Cl}\\cdot + \\text{Cl}\\cdot \\rightarrow Cl_2 \\qquad \\text{CH}_3\\cdot + \\text{Cl}\\cdot \\rightarrow CH_3Cl \\qquad \\text{CH}_3\\cdot + \\text{CH}_3\\cdot \\rightarrow C_2H_6$

> **Diagnostic:** The hallmark of **initiation** is "2 radicals made from 0." The hallmark of **propagation** is "radical in, radical out" (count stays the same). The hallmark of **termination** is "2 radicals in, 0 out." The trace of ethane ($C_2H_6$) found in chlorination of methane is direct evidence of the $\\text{CH}_3\\cdot + \\text{CH}_3\\cdot$ termination step.
      `
    },
    {
      id: 'alkan6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Mechanism Steps
      `,
      exercise: {
        questions: [
          {
            question: 'Which step of radical halogenation generates radicals from a non-radical, and what supplies the energy?',
            options: [
              'Propagation, supplied by the alkane',
              'Initiation, in which light or heat homolytically cleaves $Cl_2$ into two $\\text{Cl}\\cdot$ radicals',
              'Termination, supplied by radical combination',
              'Combustion, supplied by oxygen'
            ],
            correctAnswer: 1,
            explanation: 'Initiation is the only step that creates radicals from closed-shell molecules: $h\\nu$ or heat splits the weak Cl–Cl bond homolytically into two Cl radicals. Propagation conserves radical count; termination destroys radicals. The weak halogen–halogen bond (not the strong C–H bond) is what cleaves first.'
          },
          {
            question: 'In the propagation steps, why is the reaction self-sustaining (a "chain")?',
            options: [
              'Because radicals are permanently destroyed in each step',
              'Because each propagation cycle consumes a halogen radical but regenerates one, so one initiation can drive many product-forming cycles',
              'Because no radicals are involved',
              'Because oxygen is continuously added'
            ],
            correctAnswer: 1,
            explanation: 'The two propagation steps consume Cl- (abstracting H) and then regenerate Cl- (when the carbon radical reacts with Cl2). Because the chain carrier is regenerated, a single initiation event propagates through thousands of cycles — the defining feature of a radical chain.'
          },
          {
            question: 'Trace amounts of ethane ($C_2H_6$) are detected when methane is chlorinated. What does this prove?',
            options: [
              'That initiation produces ethane',
              'That a termination step, $\\text{CH}_3\\cdot + \\text{CH}_3\\cdot \\rightarrow C_2H_6$, occurs',
              'That methane contains a C–C bond',
              'That combustion occurred'
            ],
            correctAnswer: 1,
            explanation: 'Ethane can only form by two methyl radicals combining — a termination step ($\\text{CH}_3\\cdot + \\text{CH}_3\\cdot \\rightarrow C_2H_6$). Its presence is experimental evidence for radical intermediates and for termination by radical–radical coupling.'
          }
        ]
      }
    },
    {
      id: 'alkan6-selectivity',
      type: 'text' as const,
      content: `
### Selectivity: Which Hydrogen Reacts?

When an alkane has different *types* of hydrogens (primary 1°, secondary 2°, tertiary 3°), halogenation can occur at each. Two factors set the product ratio:

- **Number of hydrogens of each type** (statistical factor).
- **Relative reactivity per hydrogen**, because radical stability is $3° > 2° > 1°$ (more substituted radicals are more stable). Abstracting an H to make a more stable radical is easier.

The two halogens differ dramatically:

| Halogen | Relative reactivity (3° : 2° : 1°) | Behavior |
|---------|-------------------------------------|----------|
| **Chlorine** | $\\approx 5 : 3.8 : 1$ | fast, **unselective** — gives mixtures |
| **Bromine** | $\\approx 1640 : 82 : 1$ | slow, **highly selective** for 3° (and 2°) |

This trade-off is **Hammond's postulate** in action: bromination has a late, product-like transition state, so it "feels" the radical-stability difference strongly and is selective; chlorination's early transition state barely distinguishes the H types.

> **Worked example — monochlorination of propane ($CH_3CH_2CH_3$):**
> Propane has **six 1° H** (two $CH_3$ groups) and **two 2° H** (the central $CH_2$).
> - Yield at 1° positions $\\propto 6 \\times 1 = 6$
> - Yield at 2° position $\\propto 2 \\times 3.8 = 7.6$
> Ratio (2° : 1°) $= 7.6 : 6$, i.e. about **56% 2-chloropropane** and **44% 1-chloropropane**. Even though 2° H are outnumbered 3-to-1, the higher per-H reactivity makes 2-chloropropane the slight major product.
>
> **Contrast with bromination of propane:** using $1640 : 82 : 1 \\rightarrow$ relative 2° yield $= 2 \\times 82 = 164$ vs 1° yield $= 6 \\times 1 = 6$, giving $\\approx 96\\%$ 2-bromopropane. The selectivity of bromine overwhelms the statistical factor.
      `
    },
    {
      id: 'alkan6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Selectivity Arithmetic
      `,
      exercise: {
        questions: [
          {
            question: 'Why is bromination far more selective than chlorination for the more substituted position?',
            options: [
              'Bromine has more hydrogens to choose from',
              'Bromination has a later, product-like transition state (Hammond postulate) that strongly reflects radical stability, so 3° > 2° > 1° dominates',
              'Chlorine is heavier than bromine',
              'Bromine cannot abstract primary hydrogens at all'
            ],
            correctAnswer: 1,
            explanation: 'Bromination is endothermic in the H-abstraction step with a late, product-like transition state, so the stability of the developing radical (3° > 2° > 1°) strongly differentiates the positions — high selectivity (~1640:82:1). Chlorination is exothermic with an early transition state that barely distinguishes H types (~5:3.8:1), giving mixtures.'
          },
          {
            question: 'Isobutane, $(CH_3)_3CH$, has nine 1° H and one 3° H. Using the chlorine reactivity values (3° ≈ 5, 1° ≈ 1 per H), what is the approximate ratio of tertiary to primary chloride?',
            options: [
              '5 : 9 (tertiary to primary), so primary product predominates',
              '9 : 5, tertiary predominates',
              '1 : 1',
              '45 : 1, tertiary predominates overwhelmingly'
            ],
            correctAnswer: 0,
            explanation: 'Tertiary yield ∝ 1 H × 5 = 5; primary yield ∝ 9 H × 1 = 9. Ratio 3°:1° = 5:9, so the PRIMARY product (1-chloro-2-methylpropane) is actually slightly favored despite the higher per-H reactivity of the lone 3° H — because chlorine is unselective and the 1° hydrogens are nine times more numerous.'
          },
          {
            question: 'For monochlorination of propane, why is 2-chloropropane (56%) only slightly favored over 1-chloropropane (44%), despite there being three times as many 1° hydrogens?',
            options: [
              'Because 1° hydrogens are unreactive',
              'Because the per-hydrogen reactivity of the 2° position (~3.8) outweighs the 3:1 statistical advantage of the more numerous 1° hydrogens',
              'Because propane has no 2° hydrogens',
              'Because chlorine only attacks 2° positions'
            ],
            correctAnswer: 1,
            explanation: 'Yield ∝ (number of H) × (per-H reactivity). 1°: 6 × 1 = 6; 2°: 2 × 3.8 = 7.6. The 2° H are outnumbered 6-to-2 but are ~3.8× more reactive each, so 2-chloropropane edges out at ~56% vs 44%. The slim margin reflects the low selectivity of chlorine.'
          },
          {
            question: 'Combustion of an alkane is described by $C_nH_{2n+2} + \\frac{3n+1}{2}O_2 \\rightarrow nCO_2 + (n+1)H_2O$. For butane ($n=4$), how many moles of $O_2$ are required per mole of butane?',
            options: [
              '4',
              '5',
              '6.5',
              '13'
            ],
            correctAnswer: 2,
            explanation: 'With n = 4, O2 coefficient = (3·4 + 1)/2 = 13/2 = 6.5. So $C_4H_{10} + 6.5\\,O_2 \\rightarrow 4\\,CO_2 + 5\\,H_2O$ (or doubled: $2\\,C_4H_{10} + 13\\,O_2 \\rightarrow 8\\,CO_2 + 10\\,H_2O$). Combustion is highly exothermic — the basis of alkanes as fuels.'
          }
        ]
      }
    },
    {
      id: 'alkan6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Choosing a Reagent
      `,
      exercise: {
        questions: [
          {
            question: 'You want to selectively install a halogen at the single 3° carbon of 2-methylbutane, getting mostly one product. Which reagent and why?',
            options: [
              'Cl₂/hν, because chlorine is highly selective for 3° positions',
              'Br₂/hν, because bromine is highly selective (3° ≫ 2° ≫ 1°) and favors the tertiary position',
              'O₂, via combustion',
              'Either halogen gives the same clean result'
            ],
            correctAnswer: 1,
            explanation: 'Bromine is the selective halogen (~1640:82:1), so Br2/hν abstracts the most stable (3°) hydrogen preferentially, giving mostly the tertiary bromide. Cl2 is unselective and would give a mixture of mono-chlorinated isomers — useless for a clean single product.'
          },
          {
            question: 'Which statement correctly distinguishes the three mechanistic stages of radical halogenation?',
            options: [
              'Initiation regenerates the chain carrier; propagation makes radicals from $Cl_2$; termination is exothermic combustion',
              'Initiation creates radicals (2 from 0); propagation conserves radical count (in = out); termination destroys radicals (2 in, 0 out)',
              'All three stages create new radicals',
              'Termination is the step that forms the desired product exclusively'
            ],
            correctAnswer: 1,
            explanation: 'Initiation: 2 radicals made from a closed-shell Cl2 (net +2). Propagation: a radical reacts and a new radical is regenerated, so the count is conserved (this is where most product forms). Termination: two radicals combine, removing them from the system (net −2). This bookkeeping is the reliable way to classify any step.'
          }
        ]
      }
    }
  ]
}
