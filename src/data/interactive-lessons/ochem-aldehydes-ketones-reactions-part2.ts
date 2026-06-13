export const oChemAldehydesKetonesPart2Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh2-intro',
      type: 'text' as const,
      content: `
## Nucleophilic Addition to the Carbonyl

**Part 2 of 7 — The Mechanism, Hydrates, and Hemiacetals**

In Part 1 we established that the carbonyl carbon is electrophilic. The single most important reaction of aldehydes and ketones follows directly: a **nucleophile adds to the carbon**, the $\\pi$ bond breaks, and the electrons collapse onto oxygen. Because the net result is that two new groups (Nu and, ultimately, H) **add across** the $\\text{C=O}$ with no atom leaving, the reaction is called **nucleophilic addition**.

$\\text{R}_2\\text{C=O} + \\text{Nu}-\\text{H} \\rightarrow \\text{R}_2\\text{C(Nu)(OH)}$

This contrasts sharply with carboxylic acid derivatives (esters, amides, acyl chlorides), where a leaving group departs and the carbonyl is regenerated — that is **nucleophilic acyl substitution**. Aldehydes and ketones have no good leaving group on the carbonyl carbon, so they **add** rather than substitute.
      `
    },
    {
      id: 'aldeh2-mechanism',
      type: 'text' as const,
      content: `
### The Two Mechanistic Pathways

**Base-mediated (nucleophile is anionic/strong).** A strong nucleophile attacks directly.

1. The nucleophile $\\text{Nu}^-$ attacks the $\\delta+$ carbonyl carbon; the carbon rehybridizes from $sp^2$ to $sp^3$.
2. The $\\pi$ electrons shift entirely onto oxygen, generating a **tetrahedral alkoxide** intermediate, $\\text{R}_2\\text{C(Nu)}-\\text{O}^-$.
3. The alkoxide is protonated (by solvent or workup) to give the neutral addition product, an alcohol bearing the new $\\text{Nu}$ group.

**Acid-mediated (nucleophile is weak/neutral, e.g. $\\text{H}_2\\text{O}$, $\\text{ROH}$).** Here we activate the carbonyl first.

1. The carbonyl oxygen is **protonated** by acid, giving an oxocarbenium-like cation, $\\text{R}_2\\text{C=}\\overset{+}{\\text{O}}\\text{H} \\leftrightarrow \\overset{+}{\\text{R}_2\\text{C}}-\\text{OH}$. Protonation makes the carbon **far more electrophilic**.
2. The weak, neutral nucleophile attacks the activated carbon.
3. **Deprotonation** of the newly attached $\\text{Nu}-\\text{H}^+$ restores neutrality and regenerates the acid catalyst.

> **Key idea:** Acid catalysis *increases the electrophilicity of the carbon* (protonate the oxygen). Base catalysis *increases the nucleophilicity of the attacking species* (deprotonate Nu–H to make $\\text{Nu}^-$). Many carbonyl additions can be run either way; you pick the pathway that fits the nucleophile.
      `
    },
    {
      id: 'aldeh2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Mechanism
      `,
      exercise: {
        questions: [
          {
            question: 'What is the immediate intermediate formed when an anionic nucleophile attacks a ketone (before any protonation)?',
            options: [
              'A carbocation at the carbonyl carbon',
              'A tetrahedral alkoxide (the C=O pi electrons have moved onto oxygen)',
              'An enol',
              'A carboxylic acid'
            ],
            correctAnswer: 1,
            explanation: 'The nucleophile adds to carbon, the carbon becomes sp3 (tetrahedral), and the pi electrons collapse onto oxygen to give a negatively charged alkoxide. A carbocation would form only if oxygen left, which does not happen here; the enol and carboxylic acid are unrelated species.'
          },
          {
            question: 'Why do aldehydes and ketones undergo nucleophilic ADDITION while esters undergo nucleophilic acyl SUBSTITUTION?',
            options: [
              'Esters are more electrophilic than aldehydes',
              'Aldehydes/ketones lack a good leaving group on the carbonyl carbon, so the tetrahedral intermediate is protonated instead of expelling a group',
              'Esters cannot form a tetrahedral intermediate',
              'Aldehydes are not electrophilic at all'
            ],
            correctAnswer: 1,
            explanation: 'Both form a tetrahedral intermediate. In an ester, the -OR is a competent leaving group, so it is expelled and the C=O re-forms (substitution). In an aldehyde/ketone, the only groups on carbon are H or alkyl (terrible leaving groups), so nothing leaves and the intermediate is simply protonated, giving net addition.'
          },
          {
            question: 'In the acid-catalyzed pathway, what is the role of the initial protonation of the carbonyl oxygen?',
            options: [
              'It removes the carbonyl oxygen as water',
              'It makes the carbonyl carbon much more electrophilic, allowing even a weak neutral nucleophile to attack',
              'It converts the nucleophile into an anion',
              'It is irrelevant; the mechanism would proceed identically without it'
            ],
            correctAnswer: 1,
            explanation: 'Protonating the oxygen pulls additional electron density off the carbon (the oxocarbenium resonance form places + on carbon), greatly enhancing its electrophilicity. This lets weak neutral nucleophiles such as water or an alcohol add. The oxygen is not removed at this stage, and the nucleophile stays neutral in this pathway.'
          }
        ]
      }
    },
    {
      id: 'aldeh2-hydrates',
      type: 'text' as const,
      content: `
### Addition of Water — Hydrates (gem-Diols)

When water adds across a carbonyl, the product is a **hydrate**, also called a **geminal diol** (two $\\text{OH}$ groups on the same carbon):

$\\text{R}_2\\text{C=O} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{R}_2\\text{C(OH)}_2$

This is a genuine **equilibrium**, and its position is exquisitely sensitive to the carbonyl's electrophilicity — exactly the trend from Part 1.

| Carbonyl | % hydrate at equilibrium (aqueous) | Why |
|----------|-----------------------------------|-----|
| Formaldehyde $\\text{H}_2\\text{C=O}$ | ~$99.9\\%$ | no electron-donating R, minimal sterics |
| Acetaldehyde $\\text{CH}_3\\text{CHO}$ | ~$58\\%$ | one electron-donating $\\text{CH}_3$ |
| Acetone $\\text{(CH}_3)_2\\text{C=O}$ | ~$0.1\\%$ | two donating $\\text{CH}_3$, more crowded |

Electron-**withdrawing** groups push the equilibrium the other way. **Chloral** ($\\text{CCl}_3\\text{CHO}$) is so electrophilic that its hydrate, $\\text{CCl}_3\\text{CH(OH)}_2$ (chloral hydrate), is a stable, isolable solid.

> **Worked example.** Predict whether cyclohexanone or cyclohexanecarbaldehyde forms more hydrate in water. The aldehyde (one alkyl substituent, an H, less steric crowding) is more electrophilic, so its hydration equilibrium lies farther to the right — it forms more hydrate than the ketone.
      `
    },
    {
      id: 'aldeh2-hemiacetal',
      type: 'text' as const,
      content: `
### Addition of Alcohols — Hemiacetals

Replace water with an alcohol ($\\text{ROH}$) and the same addition gives a **hemiacetal**: one $\\text{OH}$ and one $\\text{OR}$ on the same carbon.

$\\text{R}_2\\text{C=O} + \\text{R}'\\text{OH} \\rightleftharpoons \\text{R}_2\\text{C(OH)(OR}')$

The mechanism is the acid-catalyzed pathway from above, with $\\text{R}'\\text{OH}$ as the neutral nucleophile: protonate the carbonyl, alcohol attacks the activated carbon, then deprotonate the resulting oxonium.

Like hydration, hemiacetal formation is usually **unfavorable** for open-chain ketones (the equilibrium lies toward starting material). But there is a major exception that dominates carbohydrate chemistry: **intramolecular** hemiacetal formation. When the $\\text{OH}$ and $\\text{C=O}$ live in the same molecule (as in a 4- or 5-carbon-removed hydroxy-aldehyde), cyclization to a **5- or 6-membered ring** is entropically and geometrically favored, so the **cyclic hemiacetal** is the dominant form.

> **Worked example — glucose.** Open-chain glucose is a six-carbon aldehyde (an aldohexose) bearing an $\\text{OH}$ on C5. The C5 $\\text{OH}$ adds intramolecularly to the C1 aldehyde, forming a six-membered (pyranose) ring that is a **cyclic hemiacetal**. In aqueous solution, well over $99\\%$ of glucose exists as this ring rather than the open-chain aldehyde. The new stereocenter at C1 (the anomeric carbon) gives the $\\alpha$ and $\\beta$ anomers.

A hemiacetal is only a *half*-step. With more alcohol and continued acid catalysis, it loses water and adds a second $\\text{OR}$ to become a fully substituted **acetal** — the subject of Part 5.
      `
    },
    {
      id: 'aldeh2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Hydrates & Hemiacetals
      `,
      exercise: {
        questions: [
          {
            question: 'Which compound exists almost entirely as its hydrate (gem-diol) in water?',
            options: [
              'Acetone, because two methyl groups stabilize the diol',
              'Formaldehyde, because it is the most electrophilic and least hindered carbonyl',
              'Benzophenone, because of conjugation with two phenyl rings',
              'tert-Butyl methyl ketone, because of its bulky group'
            ],
            correctAnswer: 1,
            explanation: 'Hydration equilibrium favors the most electrophilic, least hindered carbonyl. Formaldehyde has no electron-donating alkyl groups and minimal steric bulk, so it is ~99.9% hydrate. Acetone (~0.1%) and bulky/conjugated ketones lie far toward the unhydrated carbonyl.'
          },
          {
            question: 'Why does chloral (CCl3CHO) form a stable, isolable hydrate while acetone does not?',
            options: [
              'The three chlorines donate electron density into the carbonyl',
              'The electron-withdrawing CCl3 group makes the carbonyl carbon highly electrophilic, shifting the equilibrium toward the gem-diol',
              'Chloral is a ketone and acetone is an aldehyde',
              'Chlorine forms covalent bonds to the carbonyl oxygen'
            ],
            correctAnswer: 1,
            explanation: 'The CCl3 group is strongly electron-withdrawing (inductive). It intensifies the delta+ on the carbonyl carbon, driving water addition far to the right so that chloral hydrate is a stable solid. Acetone has electron-donating methyls and barely hydrates. Chloral is an aldehyde, not a ketone.'
          },
          {
            question: 'A hemiacetal is best described as a carbon bearing:',
            options: [
              'two -OR groups',
              'one -OH and one -OR on the same carbon',
              'two -OH groups (a gem-diol)',
              'one -OH and one -NH2'
            ],
            correctAnswer: 1,
            explanation: 'A hemiacetal has one hydroxyl (-OH) and one alkoxy (-OR) on the same carbon, the product of one alcohol adding to a carbonyl. Two -OR groups define an acetal; two -OH groups define a hydrate (gem-diol); -OH plus -NH2 is a carbinolamine (the intermediate toward an imine).'
          },
          {
            question: 'Why does glucose exist predominantly as a cyclic hemiacetal even though simple open-chain ketones barely form hemiacetals?',
            options: [
              'Glucose lacks a carbonyl group',
              'The reaction is intramolecular, forming a favorable 6-membered ring, which is far more favorable than an intermolecular addition',
              'Acid catalysis is unnecessary for glucose',
              'Glucose is a ketone, which always cyclizes completely'
            ],
            correctAnswer: 1,
            explanation: 'In glucose the nucleophilic -OH (C5) and the electrophilic aldehyde (C1) are in the same molecule. Intramolecular attack forming a stable six-membered (pyranose) ring is entropically and geometrically favored, so the cyclic hemiacetal dominates (>99%). Open-chain hemiacetal formation between two separate molecules is entropically costly and stays unfavorable. Glucose is an aldose (aldehyde), not a ketone.'
          }
        ]
      }
    },
    {
      id: 'aldeh2-exit',
      type: 'text' as const,
      content: `
### Part 2 Summary

- **Nucleophilic addition** is the master reaction of aldehydes/ketones: Nu attacks the $\\delta+$ carbon, the $\\pi$ electrons go to oxygen forming a **tetrahedral alkoxide**, then protonation gives the product. No leaving group departs (that distinguishes it from acyl substitution).
- Strong/anionic nucleophiles add directly (base pathway); weak neutral nucleophiles need **acid activation** of the carbonyl (protonate oxygen first).
- **Water** adds to give a **hydrate (gem-diol)**; **alcohols** add to give a **hemiacetal (one $\\text{OH}$ + one $\\text{OR}$)**. Both are equilibria whose position tracks carbonyl electrophilicity (formaldehyde $\\gg$ aldehyde $\\gg$ ketone).
- **Intramolecular** hemiacetal formation (e.g., glucose $\\rightarrow$ pyranose ring) is strongly favored and underlies sugar chemistry.

Parts 3 and 4 turn to nucleophiles that add **irreversibly** and forge new C–C or C–H bonds: organometallics and hydrides.
      `
    }
  ]
}
