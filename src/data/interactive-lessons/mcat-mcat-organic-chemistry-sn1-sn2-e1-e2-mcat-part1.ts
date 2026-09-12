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
| Substrate | Carbon skeleton bearing the leaving group | CH3Br (methyl), (CH3)3CBr (tertiary) |
| Leaving group (LG) | Departs with the bonding electron pair | Br, I, OTs, water (after protonation) |
| Nucleophile (Nu) | Attacks an electrophilic **carbon** | HO, CH3O, CN, I |
| Base | Removes a **proton** (usually a beta-H) | HO, CH3O, (CH3)3CO |

Note that the same species (e.g., hydroxide) can act as nucleophile OR base — the mechanism that wins tells you which role it played.

### The Four Mechanisms at a Glance

| Mechanism | Steps | Rate law | Key intermediate |
|-----------|-------|----------|------------------|
| SN2 | 1 (concerted) | $rate = k[RX][Nu]$ | None — single transition state |
| SN1 | 2 | $rate = k[RX]$ | Carbocation |
| E2 | 1 (concerted) | $rate = k[RX][base]$ | None — single transition state |
| E1 | 2 | $rate = k[RX]$ | Carbocation |

- The "2" means **bimolecular**: two species in the rate-determining step.
- The "1" means **unimolecular**: only the substrate appears in the rate law, because the slow step is the substrate ionizing on its own.

### Substrate Classification

Count the carbons attached to the carbon bearing the leaving group:

- **Methyl**: CH3-LG (zero attached carbons)
- **Primary (1°)**: one attached carbon, e.g., CH3CH2-Br
- **Secondary (2°)**: two attached carbons, e.g., (CH3)2CH-Br
- **Tertiary (3°)**: three attached carbons, e.g., (CH3)3C-Br

**Why it matters twice:**
1. **Sterics**: backside attack (SN2) needs an open carbon → methyl > 1° > 2° >> 3° (3° essentially never does SN2)
2. **Carbocation stability**: ionization (SN1/E1) needs a stable cation → 3° > 2° >> 1° (1° essentially never does SN1/E1, absent resonance)

Carbocation stability comes from **hyperconjugation and induction** by alkyl groups; allylic and benzylic cations get extra **resonance** stabilization.

### Leaving Group Quality

A good leaving group is a **weak base** (stable after departure):

$I^- > Br^- > Cl^- >> F^-$

- Tosylate (OTs) and mesylate (OMs) are excellent leaving groups — resonance-stabilized sulfonate anions.
- **Hydroxide is a terrible leaving group.** Alcohols only substitute after the OH is protonated (leaves as neutral water) or converted to a tosylate.

On the MCAT, an alcohol + strong acid (HBr, H2SO4) passage is a signal that the OH has been converted into a viable leaving group.`
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
            explanation: `SN1 rate law is $rate = k[RX]$ — the slow step is ionization of the substrate, so the nucleophile concentration does not appear. In SN2, rate depends on both substrate and nucleophile.`
          },
          {
            question: `Which substrate is essentially incapable of undergoing SN2?`,
            options: [`CH3Br`, `CH3CH2Br`, `(CH3)2CHBr`, `(CH3)3CBr`],
            correctAnswer: 3,
            explanation: `Tertiary substrates are too sterically hindered for backside attack. SN2 reactivity: methyl > 1° > 2° >> 3°. The tertiary substrate instead favors SN1/E1 (stable carbocation) or E2 with strong base.`
          },
          {
            question: `Which is the best leaving group?`,
            options: [`$F^-$`, `$HO^-$`, `$I^-$`, `$H_2N^-$`],
            correctAnswer: 2,
            explanation: `Good leaving groups are weak bases. Iodide is a very weak base (conjugate of the strong acid HI), so it leaves readily. Hydroxide, amide, and fluoride are all much stronger bases and poor leaving groups.`
          },
          {
            question: `A benzylic carbocation is unusually stable compared to an ordinary primary carbocation because of:`,
            options: [`Resonance delocalization into the aromatic ring`, `Stronger C-H bonds`, `Aromaticity of the cation itself`, `Hydrogen bonding with the solvent`],
            correctAnswer: 0,
            explanation: `Benzylic (and allylic) cations delocalize the positive charge by resonance into the adjacent pi system. This is why benzylic/allylic substrates can undergo SN1 even when they are formally primary.`
          },
          {
            question: `Why does an alcohol fail to undergo substitution with NaBr alone, but react when HBr is used?`,
            options: [`$HO^-$ is a poor leaving group; protonation converts it to water, a good (neutral) leaving group`, `HBr is a stronger nucleophile than $Br^-$`, `NaBr cannot dissolve in alcohols`, `HBr deprotonates the alcohol, activating it toward attack`],
            correctAnswer: 0,
            explanation: `Hydroxide is far too strong a base to leave. Protonation by HBr converts -OH into $-OH_2^+$, which departs as neutral water — one of the most common MCAT setups for substitution on alcohols.`
          },
          {
            question: `In a reaction where methoxide ($CH_3O^-$) removes a beta-hydrogen from an alkyl halide, methoxide is functioning as a:`,
            options: [`Nucleophile`, `Base`, `Leaving group`, `Catalyst`],
            correctAnswer: 1,
            explanation: `Attacking carbon = nucleophile; removing a proton = base. Beta-H removal with loss of the leaving group is elimination, so methoxide is acting as a base (E2 pathway).`
          }
        ]
      }
    },
    {
      id: 'sn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- "2" = bimolecular (substrate AND Nu/base in the rate law); "1" = unimolecular (substrate only)
- SN2 sterics: methyl > 1° > 2° >> 3°. SN1/E1 carbocation stability: 3° > 2° >> 1°
- Good leaving group = weak base: $I^- > Br^- > Cl^- >> F^-$; tosylate/mesylate excellent; OH must be protonated or tosylated first
- Allylic/benzylic substrates gain resonance-stabilized cations — they break the "no primary SN1" rule
- Same reagent can be Nu (attacks C) or base (takes beta-H) — the observed product tells you which`
    },
    {
      id: 'sn1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Core Concepts

<details>
<summary><b>Example 1: Classify the substrate and predict feasibility</b></summary>

**Question:** Rank these substrates by SN2 reactivity: (a) 2-bromo-2-methylpropane, (b) bromomethane, (c) 2-bromopropane, (d) 1-bromopropane.

**Solution:**
1. Classify each: (a) $(CH_3)_3CBr$ = tertiary; (b) $CH_3Br$ = methyl; (c) $(CH_3)_2CHBr$ = secondary; (d) $CH_3CH_2CH_2Br$ = primary
2. SN2 requires backside attack → less steric bulk = faster
3. **Ranking: b > d > c >> a** (tertiary essentially unreactive by SN2)

**MCAT Strategy:** Draw or name the substrate FIRST. Substrate class alone eliminates half the answer choices in mechanism questions.
</details>

<details>
<summary><b>Example 2: Use the rate law to identify the mechanism</b></summary>

**Question:** For R-Br + NaCN, tripling [NaCN] triples the rate, and tripling [R-Br] also triples the rate. What is the mechanism, and what does the transition state look like?

**Solution:**
1. Rate depends on BOTH species → bimolecular → $rate = k[RBr][CN^-]$
2. Substitution product (nitrile) forms → **SN2**
3. Transition state: cyanide attacking from the back side, C-CN bond partially formed, C-Br bond partially broken, five groups around carbon in a trigonal bipyramidal arrangement
4. Both bond-making and bond-breaking occur in ONE concerted step

**MCAT Strategy:** Kinetics data is the single most reliable identifier. First order overall = SN1/E1 family; second order overall = SN2/E2 family. Then use the product (substitution vs alkene) to finish.
</details>

<details>
<summary><b>Example 3: Spot the disguised leaving group</b></summary>

**Question:** 1-Butanol does not react with NaI in acetone, but 1-butyl tosylate reacts rapidly to give 1-iodobutane. Why?

**Solution:**
1. In 1-butanol, substitution would require $HO^-$ to leave — a strong base, terrible leaving group. No reaction.
2. Converting the alcohol to a tosylate replaces OH with OTs
3. The tosylate anion is resonance-stabilized (charge spread over three oxygens of the sulfonate) → excellent leaving group
4. Iodide then performs SN2 on the primary carbon → 1-iodobutane

**MCAT Strategy:** Tosylation "activates" alcohols with retention at carbon (the C-O bond isn't touched during tosylation); the subsequent SN2 inverts. Track stereochemistry across BOTH steps in passage questions.
</details>

<details>
<summary><b>Example 4: Resonance rescues a primary substrate</b></summary>

**Question:** Benzyl bromide ($C_6H_5CH_2Br$) undergoes solvolysis in warm methanol much faster than 1-bromobutane. Explain.

**Solution:**
1. Solvolysis in a weakly nucleophilic solvent proceeds by ionization (SN1-type)
2. Ordinary primary cations are too unstable to form — 1-bromobutane barely reacts
3. Benzyl bromide ionizes to a **benzylic cation**, delocalized into the ring by resonance (positive charge shared over the ortho and para positions)
4. Stabilized cation → faster ionization → faster solvolysis

**MCAT Strategy:** When a "primary" substrate reacts by SN1, look for allylic or benzylic resonance. This exception is a favorite MCAT discriminator.
</details>`
    }
  ]
};
