export const oChemAldehydesKetonesPart3Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh3-intro',
      type: 'text' as const,
      content: `
## Carbon and Hydride Nucleophiles

**Part 3 of 7 — Grignard, Organolithium & Hydride Addition**

Parts 2 covered reversible additions of $\\text{O}$-nucleophiles. We now meet two classes of **strong, anionic nucleophiles** that add **irreversibly** and are workhorses of synthesis:

- **Organometallics** ($\\text{RMgX}$ Grignard reagents, $\\text{RLi}$ organolithiums) deliver a **carbanion** ($\\text{R}^-$) to the carbonyl, forging a new **carbon–carbon bond**. This is one of the most powerful ways to build a carbon skeleton.
- **Hydride reagents** ($\\text{NaBH}_4$, $\\text{LiAlH}_4$) deliver a **hydride** ($\\text{H}^-$) to the carbonyl, forming a new **carbon–hydrogen bond** and **reducing** the carbonyl to an alcohol.

Both follow the base-mediated addition mechanism from Part 2: the nucleophile attacks the carbon, an alkoxide forms, and a separate protonation step (aqueous workup) delivers the final alcohol.
      `
    },
    {
      id: 'aldeh3-grignard',
      type: 'text' as const,
      content: `
### Grignard & Organolithium Reagents

A Grignard reagent forms when an alkyl or aryl halide reacts with magnesium metal in dry ether: $\\text{R}-\\text{X} + \\text{Mg} \\rightarrow \\text{R}-\\text{MgX}$. Because carbon is more electronegative than magnesium, the C–Mg bond is strongly polarized $\\text{R}^{\\delta-}-\\text{Mg}^{\\delta+}$, so the carbon behaves as a **carbanion** — an excellent nucleophile and a strong base.

The reaction with a carbonyl:

1. The carbanion carbon of $\\text{R}-\\text{MgX}$ attacks the electrophilic carbonyl carbon, forming a new C–C bond and a **magnesium alkoxide**.
2. **Aqueous acid workup** (a separate step, written as "$\\text{H}_3\\text{O}^+$") protonates the alkoxide to give the alcohol.

The class of alcohol produced depends on the carbonyl:

| Electrophile | Product after $\\text{H}_3\\text{O}^+$ | Class |
|---|---|---|
| Formaldehyde $\\text{H}_2\\text{C=O}$ | $\\text{R}-\\text{CH}_2\\text{OH}$ | **primary** alcohol |
| Other aldehyde $\\text{R}'\\text{CHO}$ | $\\text{R}'\\text{CH(OH)R}$ | **secondary** alcohol |
| Ketone $\\text{R}'\\text{R}''\\text{C=O}$ | $\\text{R}'\\text{R}''\\text{C(OH)R}$ | **tertiary** alcohol |
| $\\text{CO}_2$ | $\\text{RCOOH}$ | carboxylic acid |

> **Crucial caveat — incompatibility.** Grignard and organolithium reagents are **strong bases**. They are instantly destroyed by any acidic proton: $\\text{O}-\\text{H}$ (alcohols, water, carboxylic acids), $\\text{N}-\\text{H}$, or terminal alkyne C–H. You cannot have a free $\\text{OH}$ in the same flask. That is precisely why the proton source is added **only after** the addition is complete, as a separate workup.
      `
    },
    {
      id: 'aldeh3-worked',
      type: 'text' as const,
      content: `
### Worked Example — Predicting a Grignard Product

**Problem.** Predict the product of $\\text{CH}_3\\text{CH}_2\\text{MgBr}$ reacting with acetone $\\text{(CH}_3)_2\\text{C=O}$, followed by aqueous acid.

**Step 1 — identify the pieces.** The nucleophile is the ethyl carbanion, $\\text{CH}_3\\text{CH}_2^-$. The electrophile is the carbonyl carbon of acetone, which bears two methyl groups.

**Step 2 — form the C–C bond.** The ethyl group bonds to the carbonyl carbon. That carbon now carries: two $\\text{CH}_3$ (from acetone), one $\\text{CH}_2\\text{CH}_3$ (the new group), and an $\\text{O}^-$ (the former carbonyl oxygen, now a magnesium alkoxide).

**Step 3 — protonate.** Workup with $\\text{H}_3\\text{O}^+$ converts $\\text{O}^-$ to $\\text{OH}$.

**Product:** $\\text{(CH}_3)_2\\text{C(OH)CH}_2\\text{CH}_3$ = **2-methylbutan-2-ol**, a *tertiary* alcohol (the carbinol carbon is bonded to three other carbons). A ketone always yields a tertiary alcohol with a Grignard — consistent with the table above.

**Retrosynthetic view.** Working backward, any C–OH carbon can be "cut" at one of its C–C bonds: one fragment becomes the carbonyl, the other becomes the $\\text{RMgX}$. 2-Methylbutan-2-ol could equally be made from butan-2-one + $\\text{CH}_3\\text{MgBr}$, or from acetone + ethyl Grignard. This disconnection logic is the heart of the Part 6 synthesis workshop.
      `
    },
    {
      id: 'aldeh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Grignard Reactions
      `,
      exercise: {
        questions: [
          {
            question: 'What class of alcohol is produced when a Grignard reagent reacts with a ketone (after aqueous workup)?',
            options: [
              'A primary alcohol',
              'A secondary alcohol',
              'A tertiary alcohol',
              'A carboxylic acid'
            ],
            correctAnswer: 2,
            explanation: 'A ketone carbonyl carbon already bears two carbon groups. Adding the Grignard R group gives a carbon bonded to three carbons plus the OH: a tertiary alcohol. Formaldehyde gives primary, other aldehydes give secondary, and only CO2 gives a carboxylic acid.'
          },
          {
            question: 'Predict the product of phenylmagnesium bromide (PhMgBr) + formaldehyde (H2C=O), then H3O+.',
            options: [
              'PhCOOH (benzoic acid)',
              'PhCH2OH (a primary alcohol, benzyl alcohol)',
              'Ph2CHOH (a secondary alcohol)',
              'PhCH3 (toluene)'
            ],
            correctAnswer: 1,
            explanation: 'Formaldehyde has only hydrogens on the carbonyl carbon. The phenyl carbanion adds to give PhCH2O- (magnesium alkoxide), and workup gives PhCH2OH, benzyl alcohol, a primary alcohol. Formaldehyde + RMgX always gives a primary alcohol with exactly one new carbon-bearing group plus a CH2OH.'
          },
          {
            question: 'Why must aqueous acid be added only AFTER the Grignard addition is complete, not at the same time?',
            options: [
              'Water speeds up the carbonyl addition and is needed throughout',
              'A Grignard reagent is a strong base and would be destroyed by protonation (e.g., by O-H of water) before it could add to the carbonyl',
              'Acid converts the ketone into an ester',
              'The magnesium alkoxide is unstable in the absence of water'
            ],
            correctAnswer: 1,
            explanation: 'The carbanion is a powerful base. Any acidic proton, including the O-H of water, quenches it to give R-H, consuming the reagent uselessly. The carbonyl addition must be run under strictly anhydrous conditions; only after the alkoxide has formed do you add H3O+ to protonate it.'
          },
          {
            question: 'A student tries to make a Grignard reagent from 4-bromobutan-1-ol (HO-CH2CH2CH2CH2-Br). Why does this fail?',
            options: [
              'Primary halides cannot form Grignard reagents',
              'The molecule contains an O-H group, which will protonate and destroy the carbanion as soon as it forms (intramolecular self-quenching)',
              'Bromides are unreactive toward magnesium',
              'Alcohols convert magnesium into magnesium oxide'
            ],
            correctAnswer: 1,
            explanation: 'The substrate has a free hydroxyl. The instant a carbanion forms at the other end, it is protonated by that O-H (here, intramolecularly), giving back an alkoxide and butan-1-ol. To use such a substrate you must first protect the -OH (e.g., as a silyl ether). Primary bromides form Grignards readily, so that is not the issue.'
          }
        ]
      }
    },
    {
      id: 'aldeh3-hydride',
      type: 'text' as const,
      content: `
### Hydride Reduction — $\\text{NaBH}_4$ and $\\text{LiAlH}_4$

To convert a carbonyl into an alcohol *without* adding carbon, deliver a **hydride** ($\\text{H}^-$). The B–H and Al–H bonds are polarized so that hydrogen carries the negative character and attacks the carbonyl carbon.

$\\text{R}_2\\text{C=O} \\xrightarrow{\\text{H}^-} \\text{R}_2\\text{CH}-\\text{O}^- \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{R}_2\\text{CH}-\\text{OH}$

Aldehydes are reduced to **primary** alcohols; ketones are reduced to **secondary** alcohols. (No new C–C bond, so a ketone gives secondary, not tertiary — contrast with the Grignard.)

**Choosing between the two reagents — strength and selectivity:**

| Reagent | Strength | Reduces | Tolerates | Solvent / workup |
|---|---|---|---|---|
| $\\text{NaBH}_4$ | mild | aldehydes, ketones | esters, amides, acids survive; protic solvents OK | can use in $\\text{CH}_3\\text{OH}/\\text{H}_2\\text{O}$ |
| $\\text{LiAlH}_4$ | strong | aldehydes, ketones, esters, amides, carboxylic acids, nitriles | almost nothing; violently reacts with water | dry ether, then separate $\\text{H}_3\\text{O}^+$ workup |

> **Selectivity in practice.** A molecule containing both a ketone and an ester can be reduced at the **ketone only** with $\\text{NaBH}_4$, leaving the ester intact. $\\text{LiAlH}_4$ would reduce both. Choosing the *milder* reagent to hit the *more reactive* group is a classic chemoselectivity tactic.

> **Worked example.** Reduce 4-oxopentanal selectively at the aldehyde. The aldehyde is more electrophilic than the ketone (Part 1), but $\\text{NaBH}_4$ reduces both aldehydes and ketones, so it is not selective enough here. In practice one protects the ketone as an acetal (Part 5), reduces the aldehyde, then removes the protecting group — illustrating why protecting groups exist.
      `
    },
    {
      id: 'aldeh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Hydride Reduction
      `,
      exercise: {
        questions: [
          {
            question: 'A compound contains both a ketone and an ester. Which reagent reduces ONLY the ketone, leaving the ester intact?',
            options: [
              'LiAlH4',
              'NaBH4',
              'Both reduce only the ketone',
              'Neither reduces a ketone'
            ],
            correctAnswer: 1,
            explanation: 'NaBH4 is a mild hydride source: it reduces aldehydes and ketones but is too weak to reduce esters (and amides/acids). LiAlH4 is strong enough to reduce the ester as well, so it is not selective here. The milder reagent gives chemoselectivity for the more reactive ketone.'
          },
          {
            question: 'What is the product of reducing cyclohexanone with NaBH4 followed by aqueous workup?',
            options: [
              'Cyclohexane',
              'Cyclohexanol (a secondary alcohol)',
              'Cyclohexene',
              'Cyclohexanecarboxylic acid'
            ],
            correctAnswer: 1,
            explanation: 'Hydride adds H to the carbonyl carbon and the oxygen becomes OH after workup. A ketone is reduced to a secondary alcohol, so cyclohexanone gives cyclohexanol. No carbon is added or removed, and the ring is unaffected.'
          },
          {
            question: 'Why can NaBH4 be used in methanol/water but LiAlH4 cannot?',
            options: [
              'NaBH4 is not a hydride source, so solvent does not matter',
              'LiAlH4 is so reactive that it reduces (deprotonates) protic O-H solvents violently, releasing H2, whereas NaBH4 reacts only sluggishly with them',
              'Methanol converts NaBH4 into LiAlH4',
              'LiAlH4 is soluble only in water'
            ],
            correctAnswer: 1,
            explanation: 'LiAlH4 reacts vigorously and exothermically with any O-H (water or alcohols), liberating hydrogen gas and destroying the reagent, so it must be used in dry ether with a separate workup. NaBH4 is mild enough to tolerate protic solvents, which is why it is often run directly in methanol or aqueous solution.'
          },
          {
            question: 'How does the product of (ketone + RMgBr, then H3O+) differ from the product of (the same ketone + NaBH4, then H3O+)?',
            options: [
              'Both give the same tertiary alcohol',
              'The Grignard gives a tertiary alcohol (adds a carbon group), while NaBH4 gives a secondary alcohol (adds only H)',
              'The Grignard gives a secondary alcohol and NaBH4 gives a primary alcohol',
              'NaBH4 gives a carboxylic acid; the Grignard gives an alkane'
            ],
            correctAnswer: 1,
            explanation: 'A Grignard delivers a carbanion R-, adding a new carbon group to the carbonyl carbon: a ketone becomes a tertiary alcohol. A hydride delivers only H-, so the same ketone becomes a secondary alcohol. The difference is whether a C-C bond is formed.'
          }
        ]
      }
    },
    {
      id: 'aldeh3-exit',
      type: 'text' as const,
      content: `
### Part 3 Summary

- **Grignard ($\\text{RMgX}$) and organolithium ($\\text{RLi}$)** reagents are carbanion nucleophiles. They add to carbonyls to build **C–C bonds**: formaldehyde $\\rightarrow$ **1°** alcohol, other aldehyde $\\rightarrow$ **2°** alcohol, ketone $\\rightarrow$ **3°** alcohol, $\\text{CO}_2 \\rightarrow$ carboxylic acid.
- Organometallics are **strong bases** — incompatible with $\\text{O}-\\text{H}$/$\\text{N}-\\text{H}$. Add the acidic proton **only at workup**.
- **Hydride reagents** deliver $\\text{H}^-$ and **reduce** carbonyls: aldehyde $\\rightarrow$ **1°** alcohol, ketone $\\rightarrow$ **2°** alcohol (no carbon added).
- **$\\text{NaBH}_4$** is mild and selective (ketones/aldehydes only, tolerates protic solvents and esters); **$\\text{LiAlH}_4$** is strong (also reduces esters, amides, acids, nitriles) but must be kept anhydrous.

Part 4 completes the redox picture by going the other direction — **oxidation** of aldehydes, and the diagnostic tests that distinguish aldehydes from ketones.
      `
    }
  ]
}
