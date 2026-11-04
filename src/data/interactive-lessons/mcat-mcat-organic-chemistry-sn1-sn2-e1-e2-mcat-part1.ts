export const mcatOchemSubElimPart1Data = {
  topicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  sections: [
    {
      id: 'sn1-intro',
      type: 'text' as const,
      content: `# SN1, SN2, E1 & E2 for the MCAT

**Part 1 of 4 — The Four Mechanisms: Core Concepts**

Every substitution/elimination question on the MCAT reduces to one decision: which of four mechanisms operates? Master the players first.

### The Cast of Characters

| Role | What it does | Examples |
|------|--------------|----------|
| Substrate | Carbon skeleton bearing the leaving group | $CH_3Br$ (methyl), $(CH_3)_3CBr$ (tertiary) |
| Leaving group (LG) | Departs with the bonding electron pair | $Br^-$, $I^-$, tosylate ($TsO^-$), water (after protonation) |
| Nucleophile (Nu) | Attacks an electrophilic **carbon** | $HO^-$, $CH_3O^-$, $CN^-$, $I^-$ |
| Base | Removes a **proton** (usually a beta-H) | $HO^-$, $CH_3O^-$, $(CH_3)_3CO^-$ |

Note that the same species (e.g., hydroxide) can act as nucleophile OR base — the mechanism that wins tells you which role it played.

### The Four Mechanisms at a Glance

| Mechanism | Steps | Rate law | Key intermediate |
|-----------|-------|----------|------------------|
| SN2 | 1 (concerted) | $\\text{rate} = k[\\text{RX}][\\text{Nu}]$ | None — single transition state |
| SN1 | 2 | $\\text{rate} = k[\\text{RX}]$ | Carbocation |
| E2 | 1 (concerted) | $\\text{rate} = k[\\text{RX}][\\text{base}]$ | None — single transition state |
| E1 | 2 | $\\text{rate} = k[\\text{RX}]$ | Carbocation |

- The "2" means **bimolecular**: two species in the rate-determining step.
- The "1" means **unimolecular**: only the substrate appears in the rate law, because the slow step is the substrate ionizing on its own.

### Substrate Classification

Count the carbons attached to the carbon bearing the leaving group:

- **Methyl**: $CH_3{-}\\text{LG}$ (zero attached carbons)
- **Primary (1°)**: one attached carbon, e.g., $CH_3CH_2{-}Br$
- **Secondary (2°)**: two attached carbons, e.g., $(CH_3)_2CH{-}Br$
- **Tertiary (3°)**: three attached carbons, e.g., $(CH_3)_3C{-}Br$

**Why it matters twice:**
1. **Sterics**: backside attack (SN2) needs an open carbon → methyl > 1° > 2° >> 3° (3° essentially never does SN2)
2. **Carbocation stability**: ionization (SN1/E1) needs a stable cation → 3° > 2° >> 1° (1° essentially never does SN1/E1, absent resonance)

Carbocation stability comes from **hyperconjugation and induction** by alkyl groups; allylic and benzylic cations get extra **resonance** stabilization.

### Leaving Group Quality

A good leaving group is a **weak base** (stable after departure):

$I^- > Br^- > Cl^- >> F^-$

- Tosylate (OTs) and mesylate (OMs) are excellent leaving groups — resonance-stabilized sulfonate anions.
- **Hydroxide is a terrible leaving group.** Alcohols only substitute after the OH is protonated (leaves as neutral water) or converted to a tosylate.

On the MCAT, an alcohol + strong acid (HBr, $H_2SO_4$) passage is a signal that the OH has been converted into a viable leaving group.`
    },
    {
      id: 'sn1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Core Concepts

**Problem 1.** Four alkyl bromides are compared in SN2 reactions: 2-bromo-2-methylpropane, bromomethane, 2-bromopropane and 1-bromopropane.

- **(a)** What is the substrate class of each bromide?
- **(b)** What feature of the substrate controls the SN2 rate?
- **(c)** What is the SN2 reactivity order, fastest first?

**(a) Classify.** 2-Bromo-2-methylpropane, $(CH_3)_3CBr$, is tertiary; bromomethane, $CH_3Br$, is methyl; 2-bromopropane, $(CH_3)_2CHBr$, is secondary; 1-bromopropane, $CH_3CH_2CH_2Br$, is primary.

**(b) What controls the rate.** SN2 needs backside attack on the carbon bearing Br, so the less steric bulk around that carbon, the faster the reaction.

**(c) Ranking.** From the classes in (a): **bromomethane > 1-bromopropane > 2-bromopropane >> 2-bromo-2-methylpropane**, which is essentially unreactive by SN2. Name the substrate class FIRST: it alone eliminates half the answer choices in mechanism questions.

**Problem 2.** 1-Butanol does not react with NaI in acetone, but 1-butyl tosylate reacts rapidly to give 1-iodobutane.

- **(a)** Why does 1-butanol fail to react?
- **(b)** What makes the tosylate a good leaving group?
- **(c)** How does iodide react, and what would happen at a stereocenter?

**(a) No leaving group.** Substitution on 1-butanol would require $HO^-$ to leave — a strong base and a terrible leaving group. No reaction.

**(b) The tosylate.** Converting the alcohol to a tosylate replaces OH with OTs. The tosylate anion is resonance-stabilized (charge spread over three oxygens of the sulfonate), so it is an excellent leaving group.

**(c) SN2 by iodide.** Iodide performs SN2 at C1 → 1-iodobutane; C1 is not a stereocenter here. At one, the two steps give one net inversion: (R)-2-butanol → tosylate (configuration retained, the C-O bond untouched) → $I^-$ SN2 → (S)-2-iodobutane.

**Problem 3.** For R-Br + NaCN, tripling [NaCN] triples the rate, and tripling [R-Br] also triples the rate. The product is a nitrile.

- **(a)** What rate law do the data give?
- **(b)** Which mechanism is operating?
- **(c)** What does the transition state look like?

**(a) Rate law.** The rate depends on BOTH species, so the reaction is bimolecular: $\\text{rate} = k[\\text{RBr}][CN^-]$.

**(b) Mechanism.** Second order plus a substitution product (the nitrile) means **SN2**. Kinetics sorts the family (first order overall = SN1/E1, second order overall = SN2/E2); the product, substitution or alkene, finishes the call.

**(c) Transition state.** Cyanide attacks from the back side: the C-CN bond is partly formed while the C-Br bond is partly broken, with five groups around carbon in a trigonal bipyramidal arrangement. Bond making and bond breaking happen in ONE concerted step.

**Problem 4.** Benzyl bromide ($C_6H_5CH_2Br$) undergoes solvolysis in warm methanol much faster than 1-bromobutane, although both are primary.

- **(a)** By what kind of mechanism does solvolysis in a weakly nucleophilic solvent proceed?
- **(b)** Why does 1-bromobutane barely react?
- **(c)** Why does benzyl bromide react so much faster?

**(a) Ionization.** With only a weak nucleophile (the solvent) present, solvolysis proceeds by ionization: an SN1-type mechanism.

**(b) No stable cation.** Ordinary primary cations are too unstable to form, so 1-bromobutane barely reacts.

**(c) Benzylic resonance.** Benzyl bromide ionizes to a **benzylic cation**, its positive charge delocalized into the ring (shared over the ortho and para positions). Stabilized cation → faster ionization → faster solvolysis. When a "primary" substrate reacts by SN1, look for allylic or benzylic resonance.`
    },
    {
      id: 'sn1-quiz1',
      type: 'multiple-choice' as const,
      content: `**The Four Mechanisms: Core Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `Doubling the concentration of nucleophile has no effect on the rate of a substitution reaction. The mechanism is most likely:`,
            options: [`SN2`, `SN1`, `E2`, `Cannot be determined from rate data`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `SN1 rate law is $\\text{rate} = k[\\text{RX}]$ — the slow step is ionization of the substrate, so the nucleophile concentration does not appear. In SN2, rate depends on both substrate and nucleophile. E2 is also second order (substrate and base) and gives an alkene, not a substitution product. The rate data are not ambiguous: zero order in nucleophile is exactly the signature of a unimolecular, carbocation pathway.`
          },
          {
            question: `Which substrate is essentially incapable of undergoing SN2?`,
            options: [`$CH_3Br$`, `$CH_3CH_2Br$`, `$(CH_3)_2CHBr$`, `$(CH_3)_3CBr$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Tertiary substrates are too sterically hindered for backside attack. SN2 reactivity: methyl > 1° > 2° >> 3°. The tertiary substrate instead favors SN1/E1 (stable carbocation) or E2 with strong base.`
          },
          {
            question: `Which is the best leaving group?`,
            options: [`$F^-$`, `$HO^-$`, `$I^-$`, `$H_2N^-$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Good leaving groups are weak bases. Iodide is a very weak base (conjugate of the strong acid HI), so it leaves readily. Hydroxide, amide, and fluoride are all much stronger bases and poor leaving groups.`
          },
          {
            question: `A benzylic carbocation is unusually stable compared to an ordinary primary carbocation because of:`,
            options: [`Resonance delocalization into the ring`, `Stronger C-H bonds`, `Aromaticity of the cation itself`, `Hydrogen bonding with the solvent`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Benzylic (and allylic) cations delocalize the positive charge by resonance into the adjacent pi system. This is why benzylic/allylic substrates can undergo SN1 even when they are formally primary. C-H bond strength has nothing to do with cation stability; the ring is aromatic, but the cation is not an aromatic ion itself, it borrows the ring's pi system; and solvent hydrogen bonding would stabilize any cation, so it cannot explain the benzylic advantage.`
          },
          {
            question: `Why does an alcohol fail to undergo substitution with NaBr alone, but react when HBr is used?`,
            options: [`Protonated $-OH$ leaves as neutral water`, `HBr is a stronger nucleophile than $Br^-$`, `NaBr cannot dissolve in alcohols, so no bromide is present`, `HBr deprotonates the alcohol, activating it toward attack`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$HO^-$ is a poor leaving group — far too strong a base to leave. Protonation by HBr converts -OH into $-OH_2^+$, which departs as neutral water — one of the most common MCAT setups for substitution on alcohols. Solubility is not the issue: dissolved bromide still cannot displace hydroxide. The nucleophile is $Br^-$ in both cases (neutral HBr is not a better nucleophile), and HBr protonates the alcohol rather than deprotonating it.`
          },
          {
            question: `In a reaction where methoxide ($CH_3O^-$) removes a beta-hydrogen from an alkyl halide, methoxide is functioning as a:`,
            options: [`Nucleophile`, `Base`, `Leaving group`, `Catalyst`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Attacking carbon = nucleophile; removing a proton = base. Beta-H removal with loss of the leaving group is elimination, so methoxide is acting as a base (E2 pathway).`
          }
        ]
      }
    },
    {
      id: 'sn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Molecularity in the name.** "2" puts substrate AND nucleophile or base in the rate law; "1" puts the substrate alone.
- **Substrate class cuts both ways.** SN2 runs methyl > 1° > 2° >> 3°; carbocation routes run 3° > 2° >> 1°.
- **Leaving group = weak base.** $I^- > Br^- > Cl^- >> F^-$, and tosylate and mesylate are excellent leaving groups.
- **Carbocation stability.** Alkyl groups steady a cation by hyperconjugation and induction; allylic and benzylic add resonance.

**Common traps**

- **SN2 on a tertiary carbon.** A 3° carbon is too crowded for backside attack; it reacts by SN1/E1, or E2 with a strong base.
- **Hydroxide as a leaving group.** OH never leaves as $HO^-$; protonate it to water or convert it to a tosylate first.
- **Nucleophile or base by name.** One reagent can attack carbon or take a beta-H; the product, not the name, says which it did.
- **"Primary never ionizes."** Benzylic and allylic primary substrates do ionize, because resonance stabilizes the cation.`
    }
  ]
};
