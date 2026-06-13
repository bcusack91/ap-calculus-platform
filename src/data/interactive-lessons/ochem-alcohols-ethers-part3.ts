export const oChemAlcoholsPart3Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh3-intro',
      type: 'text' as const,
      content: `
## Reactions of Alcohols

**Part 3 of 7 — Substitution, Dehydration & Oxidation**

The hydroxyl group is a chemical liability in one key respect: $\\text{OH}^-$ is a **terrible leaving group**. Almost every alcohol reaction is, at heart, a strategy for getting around that problem — either by protonating the $\\text{-OH}$ to make water (a good leaving group), by converting it to a better leaving group with a reagent like $\\text{SOCl}_2$, or by removing the whole group as part of an elimination or oxidation.

Three transformation families dominate:

1. **Substitution** — replace $\\text{-OH}$ with a halide to make an alkyl halide.
2. **Dehydration** — eliminate $\\text{H}$ and $\\text{OH}$ to make an alkene.
3. **Oxidation** — convert the $\\text{C-OH}$ into a $\\text{C=O}$ (aldehyde, ketone, or carboxylic acid).
      `
    },
    {
      id: 'alcoh3-substitution',
      type: 'text' as const,
      content: `
### Substitution: Alcohols to Alkyl Halides

To swap $\\text{-OH}$ for a halide, you must either protonate or activate the oxygen.

**With hydrohalic acids ($\\text{HX}$).** Reactivity follows $\\text{HI} > \\text{HBr} > \\text{HCl}$, and crucially the *substrate* class dictates the mechanism:

- **Tertiary (and most secondary) alcohols** react by **$\\text{S}_\\text{N}1$**: protonation gives an oxocarbenium-then-carbocation, and halide traps it. Because a carbocation forms, $3°$ substrates can **rearrange**, and the reaction is fast.
- **Primary alcohols** react by **$\\text{S}_\\text{N}2$** and need the more forcing conditions; concentrated $\\text{HCl}$ with $\\text{ZnCl}_2$ (the Lucas reagent) is the classic example.

The **Lucas test** exploits this: a $3°$ alcohol turns cloudy almost instantly, a $2°$ alcohol within minutes, and a $1°$ alcohol not at all at room temperature — a quick diagnostic for alcohol class.

**With $\\text{SOCl}_2$ or $\\text{PBr}_3$.** These reagents convert the $\\text{-OH}$ into a superb leaving group **without forming a free carbocation**, so they avoid rearrangement and are preferred for $1°$ and $2°$ alcohols:

- $\\text{R-OH} + \\text{SOCl}_2 \\rightarrow \\text{R-Cl}$ (plus $\\text{SO}_2$ and $\\text{HCl}$ gas).
- $3\\,\\text{R-OH} + \\text{PBr}_3 \\rightarrow 3\\,\\text{R-Br}$.

> **Trap:** using $\\text{HCl}$ on a neopentyl or other rearrangement-prone primary/secondary alcohol can scramble the skeleton. When skeletal integrity matters, reach for $\\text{SOCl}_2$ or $\\text{PBr}_3$.
      `
    },
    {
      id: 'alcoh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Substitution
      `,
      exercise: {
        questions: [
          {
            question: 'In a Lucas test, which alcohol turns the solution cloudy almost immediately at room temperature?',
            options: [
              'a primary alcohol such as 1-butanol',
              'a secondary alcohol such as 2-butanol',
              'a tertiary alcohol such as 2-methylpropan-2-ol',
              'methanol'
            ],
            correctAnswer: 2,
            explanation: 'Tertiary alcohols form a stable tertiary carbocation rapidly, so the insoluble alkyl chloride (cloudiness) appears almost at once. Secondary alcohols react in minutes; primary alcohols do not react under Lucas conditions at room temperature. This is exactly why the test distinguishes alcohol classes.'
          },
          {
            question: 'Why is $\\text{SOCl}_2$ preferred over concentrated $\\text{HCl}$ for converting a rearrangement-prone primary alcohol to its chloride?',
            options: [
              'SOCl2 is cheaper',
              'SOCl2 converts -OH to a good leaving group without forming a free carbocation, avoiding skeletal rearrangement',
              'HCl cannot react with primary alcohols at all',
              'SOCl2 also oxidizes the carbon'
            ],
            correctAnswer: 1,
            explanation: 'SOCl2 activates the oxygen and proceeds without a discrete carbocation, so no hydride or alkyl shifts occur and the carbon skeleton is preserved. The HCl/SN1 pathway can rearrange. SOCl2 substitutes; it does not oxidize.'
          },
          {
            question: 'A tertiary alcohol reacts with HBr. The mechanism and a likely complication are:',
            options: [
              '$\\text{S}_\\text{N}2$; inversion of configuration',
              '$\\text{S}_\\text{N}1$; possible carbocation rearrangement',
              'E2; no substitution occurs',
              'radical substitution; halogen adds twice'
            ],
            correctAnswer: 1,
            explanation: 'Tertiary alcohols ionize to a stable tertiary carbocation, so substitution is SN1. Because a free carbocation forms, hydride or alkyl shifts to an even more stable cation are possible, leading to rearranged products. SN2 is the primary-alcohol pathway.'
          }
        ]
      }
    },
    {
      id: 'alcoh3-dehydration',
      type: 'text' as const,
      content: `
### Dehydration: Alcohols to Alkenes

Heating an alcohol with a strong, non-nucleophilic acid (concentrated $\\text{H}_2\\text{SO}_4$ or $\\text{H}_3\\text{PO}_4$) eliminates water to form an alkene. The acid protonates the $\\text{-OH}$ so it can leave as neutral water.

**Mechanism depends on substrate class:**

- **$3°$ and $2°$ alcohols** dehydrate by **E1**: water leaves to form a carbocation, then a base removes a $\\beta$-hydrogen. Carbocations mean **rearrangement is possible**.
- **$1°$ alcohols** dehydrate by **E2**: there is no stable primary cation, so loss of water and the $\\beta$-hydrogen is concerted. These require the harshest conditions.

**Ease of dehydration tracks carbocation stability:** $3° > 2° > 1°$.

**Regiochemistry follows Zaitsev's rule:** the major product is the **more substituted** (more stable) alkene.

**Worked example.** Dehydration of 2-methylbutan-2-ol with hot $\\text{H}_2\\text{SO}_4$.

The tertiary cation is already present after water leaves. It has $\\beta$-hydrogens on two different neighboring carbons. Removing a $\\beta$-H from the $\\text{CH}_2$ gives **2-methylbut-2-ene** (trisubstituted), while removing one from a terminal $\\text{CH}_3$ gives **2-methylbut-1-ene** (disubstituted). By Zaitsev, the **trisubstituted 2-methylbut-2-ene predominates**.

> **Contrast with oxymercuration/hydration:** dehydration (alcohol $\\rightarrow$ alkene, lose water) and acid-catalyzed hydration (alkene $\\rightarrow$ alcohol, add water) are the *same* equilibrium read in opposite directions. Le Chatelier decides: dilute acid and excess water drive hydration; concentrated acid and heat (distilling off the volatile alkene) drive dehydration.
      `
    },
    {
      id: 'alcoh3-oxidation',
      type: 'text' as const,
      content: `
### Oxidation: Climbing the Carbonyl Ladder

Oxidation removes $\\text{H}$ atoms (or adds $\\text{O}$), raising the carbon's oxidation state. The outcome is governed entirely by **alcohol class** and **choice of oxidant**:

| Alcohol | Mild oxidant (PCC, Swern, DMP) | Strong oxidant (Jones, $\\text{CrO}_3$, $\\text{KMnO}_4$) |
|---------|--------------------------------|------------------------------------------------|
| **primary ($1°$)** | aldehyde ($\\text{RCHO}$) | carboxylic acid ($\\text{RCOOH}$) |
| **secondary ($2°$)** | ketone | ketone (stops there) |
| **tertiary ($3°$)** | no reaction | no reaction |

Two principles do all the work:

1. **A $3°$ alcohol cannot be oxidized** under normal conditions: its carbinol carbon has **no $\\text{C-H}$ bond** to remove, and oxidation of an alcohol requires losing the H on the carbon bearing $\\text{-OH}$.
2. **For a $1°$ alcohol, the oxidant choice decides whether you stop at the aldehyde or push to the acid.** Strong aqueous oxidants hydrate the aldehyde and oxidize it onward to the carboxylic acid. To **stop at the aldehyde**, you must use an **anhydrous, mild** oxidant such as **PCC** (pyridinium chlorochromate) — no water means the aldehyde hydrate cannot form, so oxidation halts.

**Worked example.** Predict products:

- 1-propanol $+\\,\\text{PCC} \\rightarrow$ **propanal** (stops at the aldehyde; anhydrous).
- 1-propanol $+\\,\\text{Jones reagent } (\\text{CrO}_3, \\text{H}_2\\text{SO}_4, \\text{H}_2\\text{O}) \\rightarrow$ **propanoic acid** (pushed to the acid).
- 2-propanol $+\\,\\text{Jones} \\rightarrow$ **acetone** (a ketone; cannot oxidize further).
- 2-methylpropan-2-ol $+\\,\\text{Jones} \\rightarrow$ **no reaction** (tertiary; no C-H on the carbinol carbon).

> **Signature trap:** asking for the product of a *primary* alcohol with a *strong* oxidant and listing "aldehyde." Strong, aqueous oxidants overshoot the aldehyde and deliver the carboxylic acid. The aldehyde is the PCC answer.
      `
    },
    {
      id: 'alcoh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Dehydration & Oxidation
      `,
      exercise: {
        questions: [
          {
            question: 'Dehydration of butan-2-ol with hot concentrated $\\text{H}_2\\text{SO}_4$ gives mainly which alkene (Zaitsev)?',
            options: [
              'but-1-ene (monosubstituted)',
              'but-2-ene (disubstituted)',
              'butane',
              'butan-1-ol'
            ],
            correctAnswer: 1,
            explanation: 'Zaitsev predicts the more substituted, more stable alkene. Removing a beta-hydrogen toward C3 gives the disubstituted but-2-ene, which dominates over the monosubstituted but-1-ene. Butane (no double bond) and butan-1-ol (an alcohol) are not elimination products.'
          },
          {
            question: 'Which product forms when 1-butanol is treated with PCC in dichloromethane?',
            options: [
              'butanoic acid',
              'butanal',
              'but-1-ene',
              'no reaction'
            ],
            correctAnswer: 1,
            explanation: 'PCC is a mild, anhydrous oxidant that stops a primary alcohol at the aldehyde (butanal). Because there is no water, the aldehyde hydrate that strong aqueous oxidants need to push on to the carboxylic acid never forms. Jones reagent would have given butanoic acid.'
          },
          {
            question: 'Why can 2-methylpropan-2-ol (tert-butanol) NOT be oxidized by Jones reagent?',
            options: [
              'It is too volatile',
              'Its carbinol carbon has no C-H bond, which oxidation of an alcohol requires removing',
              'Jones reagent only works on ethers',
              'It immediately dehydrates instead'
            ],
            correctAnswer: 1,
            explanation: 'Oxidizing an alcohol means removing the hydrogen on the carbon bearing the -OH. A tertiary alcohol has three carbons and no hydrogen on that carbon, so there is nothing to remove and no oxidation occurs. This is the defining limitation of tertiary alcohols.'
          },
          {
            question: 'You need to convert hexan-1-ol all the way to hexanoic acid. The best single reagent is:',
            options: [
              'PCC in $\\text{CH}_2\\text{Cl}_2$',
              'Jones reagent ($\\text{CrO}_3$, $\\text{H}_2\\text{SO}_4$, $\\text{H}_2\\text{O}$)',
              '$\\text{NaBH}_4$',
              'concentrated $\\text{H}_2\\text{SO}_4$, heat'
            ],
            correctAnswer: 1,
            explanation: 'A primary alcohol is oxidized to the carboxylic acid by a strong aqueous oxidant such as Jones reagent. PCC would stop at the aldehyde, NaBH4 is a reducing agent (wrong direction), and hot H2SO4 would dehydrate rather than oxidize.'
          }
        ]
      }
    },
    {
      id: 'alcoh3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 3 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A single unifying reason explains why alcohols need protonation, $\\text{SOCl}_2$, or strong acid to react in substitution and elimination. What is it?',
            options: [
              'Carbon is electronegative',
              'Hydroxide ($\\text{OH}^-$) is a poor leaving group, so the -OH must be activated or protonated first',
              'Alcohols are aromatic',
              'Oxygen has no lone pairs'
            ],
            correctAnswer: 1,
            explanation: 'OH- is a strong base and therefore a poor leaving group. Substitution and dehydration both require converting -OH into water (by protonation) or into a better leaving group (via SOCl2/PBr3) before the group can depart. This single fact threads through the entire part.'
          },
          {
            question: 'Across alcohol reactions, secondary and tertiary substrates frequently risk rearrangement, while primary substrates rarely do. Why?',
            options: [
              'Primary alcohols are aromatic',
              'Secondary/tertiary substrates ionize to carbocations (SN1/E1) that can undergo hydride or alkyl shifts; primary substrates react by concerted SN2/E2 without a free cation',
              'Primary carbons cannot bond to oxygen',
              'Rearrangement only happens during oxidation'
            ],
            correctAnswer: 1,
            explanation: 'Rearrangement requires a carbocation intermediate. Secondary and tertiary alcohols ionize (SN1/E1), so their cations can shift to more stable arrangements. Primary alcohols lack a stable cation and react by concerted SN2/E2, so their skeletons stay intact, which is why SOCl2/PBr3 are favored for them.'
          }
        ]
      }
    }
  ]
}
