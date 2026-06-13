export const oChemAlcoholsPart4Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh4-intro',
      type: 'text' as const,
      content: `
## Ethers: Structure, Naming, and Synthesis

**Part 4 of 7 — Ether Nomenclature & the Williamson Synthesis**

An **ether** has an oxygen bonded to two carbon groups: $\\text{R-O-R'}$. The C-O-C angle is roughly tetrahedral (about $110°$ in dimethyl ether), and oxygen still carries two lone pairs. Critically, an ether has **no $\\text{O-H}$ bond** — so, unlike alcohols, ethers cannot donate hydrogen bonds to one another. They can only *accept* hydrogen bonds (from water or alcohols). This single structural fact explains their two defining traits:

- **Low boiling points**, close to those of comparable alkanes. Diethyl ether boils at $35\\,°\\text{C}$, near pentane ($36\\,°\\text{C}$) and far below 1-butanol ($118\\,°\\text{C}$), even though all three have similar mass.
- **Excellent solvents.** Because the oxygen lone pairs accept hydrogen bonds and solvate cations, yet the molecule is largely nonpolar, ethers dissolve a wide range of organic compounds and are nearly inert. Diethyl ether and THF (tetrahydrofuran) are the standard solvents for Grignard and hydride reactions precisely because they do not react with those reagents.
      `
    },
    {
      id: 'alcoh4-nomenclature',
      type: 'text' as const,
      content: `
### Naming Ethers

Two systems are common:

**Common names** cite the two groups attached to oxygen alphabetically, then add "ether": $\\text{CH}_3\\text{-O-CH}_2\\text{CH}_3$ is **ethyl methyl ether**; $\\text{(CH}_3\\text{CH}_2\\text{)}_2\\text{O}$ is **diethyl ether**.

**IUPAC names** treat the smaller $\\text{R-O}$ piece as an **alkoxy substituent** on the larger parent chain. The smaller group plus oxygen becomes "(name)oxy":

- $\\text{CH}_3\\text{-O-}$ = **methoxy**
- $\\text{CH}_3\\text{CH}_2\\text{-O-}$ = **ethoxy**

**Worked example.** Name $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{-O-CH}_3$.

- The larger group is propyl (three carbons); the smaller is methyl.
- Common name: **methyl propyl ether**.
- IUPAC: the propane chain is the parent and $\\text{CH}_3\\text{O-}$ is a methoxy substituent on C1, giving **1-methoxypropane**.

Cyclic ethers have their own names: **oxirane** (the three-membered epoxide, covered in Part 5), **oxetane** (four-membered), **tetrahydrofuran / THF** (five-membered), and **tetrahydropyran / 1,4-dioxane** among the six-membered rings.
      `
    },
    {
      id: 'alcoh4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Structure & Naming
      `,
      exercise: {
        questions: [
          {
            question: 'Diethyl ether ($35\\,°\\text{C}$) boils far below 1-butanol ($118\\,°\\text{C}$) despite similar molar mass. Why?',
            options: [
              'The ether is ionic',
              'The ether has no O-H bond and so cannot donate hydrogen bonds between its own molecules',
              'The ether has much greater molar mass',
              'Butanol cannot hydrogen-bond'
            ],
            correctAnswer: 1,
            explanation: 'An ether lacks an O-H, so ether molecules cannot hydrogen-bond to one another (they can only accept H-bonds). 1-Butanol has an O-H and forms a strong H-bond network, raising its boiling point dramatically. Mass is comparable, so it is not the cause.'
          },
          {
            question: 'The IUPAC name for $\\text{CH}_3\\text{CH}_2\\text{-O-CH}_2\\text{CH}_2\\text{CH}_3$ is:',
            options: [
              'ethyl propyl ether only',
              '1-ethoxypropane',
              '3-ethoxypropane',
              'propoxyethane'
            ],
            correctAnswer: 1,
            explanation: 'In IUPAC nomenclature the larger group (propane) is the parent and the smaller O-bound group (ethyl + O = ethoxy) is the substituent on C1, giving 1-ethoxypropane. "Ethyl propyl ether" is the common name, not IUPAC; the locant must be the lowest, so 3-ethoxy is wrong.'
          },
          {
            question: 'Why are diethyl ether and THF chosen as solvents for Grignard reactions?',
            options: [
              'They react with the Grignard to stabilize it',
              'Their oxygen lone pairs coordinate and stabilize the organomagnesium species while remaining unreactive (no acidic O-H)',
              'They are strong acids',
              'They oxidize the organometallic'
            ],
            correctAnswer: 1,
            explanation: 'Ether oxygens donate their lone pairs to coordinate the Lewis-acidic magnesium, stabilizing the Grignard reagent, yet ethers have no acidic O-H to quench the carbanion and do not otherwise react. That combination of coordination plus inertness makes them ideal solvents.'
          }
        ]
      }
    },
    {
      id: 'alcoh4-williamson',
      type: 'text' as const,
      content: `
### The Williamson Ether Synthesis

The most reliable, general way to make an ether is the **Williamson ether synthesis**: an **alkoxide** ($\\text{RO}^-$) displaces a halide (or sulfonate) from an alkyl halide by **$\\text{S}_\\text{N}2$**.

$\\text{R-O}^- + \\text{R'-X} \\rightarrow \\text{R-O-R'} + \\text{X}^-$

Because the key step is $\\text{S}_\\text{N}2$, **every $\\text{S}_\\text{N}2$ rule applies**, and they dictate how you must plan the synthesis:

- The **alkyl halide must be methyl or primary**. Secondary halides give poor yields (elimination competes); tertiary halides give **only elimination** (E2), no ether at all, because the strongly basic alkoxide attacks a $\\beta$-hydrogen rather than the crowded carbon.
- The **alkoxide can be primary, secondary, or tertiary** — its steric bulk sits on the nucleophile, not on the carbon being attacked, so it tolerates branching.

This asymmetry is the single most tested idea in ether synthesis. For an **unsymmetrical ether**, there are two conceivable alkoxide-plus-halide pairings, and you must choose the one that puts the **less hindered** group on the alkyl halide.

**Worked example — choosing the right disconnection.** Synthesize *tert*-butyl methyl ether (MTBE), $\\text{(CH}_3\\text{)}_3\\text{C-O-CH}_3$.

Two options exist on paper:

- (A) *tert*-butoxide $+\\,\\text{CH}_3\\text{I}$ (methyl halide). The alkoxide is tertiary, but the halide is methyl, which cannot eliminate. **$\\text{S}_\\text{N}2$ succeeds.** ✓
- (B) methoxide $+\\,\\text{(CH}_3\\text{)}_3\\text{C-Br}$ (tertiary halide). The alkoxide is small, but the halide is tertiary, so methoxide acts as a base and gives **only isobutylene by E2** — no ether. ✗

**Correct route: option (A).** Always put the alkoxide on the more hindered group and the leaving group on the methyl/primary carbon.

The alkoxide itself is typically generated by deprotonating an alcohol with a strong base — $\\text{NaH}$, $\\text{Na}$ metal, or $\\text{KOtBu}$ — before adding the alkyl halide.
      `
    },
    {
      id: 'alcoh4-crown',
      type: 'text' as const,
      content: `
### Crown Ethers and Practical Notes

**Crown ethers** are large cyclic polyethers (for example **18-crown-6**, an 18-membered ring containing six oxygens). The ring of inward-pointing oxygen lone pairs forms a cavity sized to **encapsulate a specific metal cation** — 18-crown-6 fits $\\text{K}^+$ snugly, while 15-crown-5 prefers the smaller $\\text{Na}^+$.

Their power is in **phase-transfer catalysis**: by wrapping the cation in a lipophilic shell, a crown ether drags an otherwise insoluble ionic salt (like $\\text{KF}$ or $\\text{KMnO}_4$) into a nonpolar organic solvent. The cation is sequestered, leaving a **"naked," poorly solvated anion** that is far more nucleophilic and reactive than it would be in water. This is a clean illustration of how solvation governs reactivity, the same theme seen with bulky alkoxides in Part 1.

**Safety footnote, important in real labs:** ethers slowly react with atmospheric oxygen to form explosive **peroxides** on standing. Old bottles of diethyl ether or THF must be tested and never distilled to dryness.

> **Summary of the synthesis logic:** to build an ether, use Williamson and put the leaving group on a methyl or primary carbon; to *use* an ether, exploit its inertness as a solvent; and to *transport* an ion into organic media, wrap it in a crown ether to free a hyper-reactive naked anion.
      `
    },
    {
      id: 'alcoh4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Williamson & Crown Ethers
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing gives a good yield of the ether $\\text{(CH}_3\\text{)}_3\\text{C-O-CH}_2\\text{CH}_3$ by Williamson synthesis?',
            options: [
              'ethoxide + tert-butyl bromide',
              'tert-butoxide + bromoethane',
              'tert-butoxide + tert-butyl bromide',
              'either pairing works equally'
            ],
            correctAnswer: 1,
            explanation: 'Williamson is SN2, so the halide must be methyl/primary. tert-Butoxide (bulky nucleophile, allowed) plus primary bromoethane succeeds. The reverse pairing uses a tertiary halide, which only eliminates (E2) to give isobutylene and no ether.'
          },
          {
            question: 'A student tries to make diisopropyl ether from isopropoxide and 2-bromopropane (a secondary halide) and gets mostly propene. What went wrong?',
            options: [
              'The alkoxide was too weak a nucleophile',
              'The secondary alkyl halide favors E2 elimination with the basic alkoxide, competing with SN2',
              'Isopropoxide cannot be formed',
              'The product spontaneously hydrolyzed'
            ],
            correctAnswer: 1,
            explanation: 'Secondary alkyl halides are borderline for SN2 and, with a strongly basic alkoxide, elimination (E2) competes heavily, giving propene. Williamson works best when the halide is methyl or primary; pushing a secondary halide invites the elimination byproduct observed.'
          },
          {
            question: 'How does 18-crown-6 make solid $\\text{KF}$ usable as a fluoride nucleophile in a nonpolar solvent?',
            options: [
              'It reacts with fluoride to release F atoms',
              'It encapsulates $\\text{K}^+$ in a lipophilic cavity, dissolving the salt and leaving a poorly solvated, highly nucleophilic "naked" fluoride',
              'It oxidizes the potassium',
              'It converts KF into HF'
            ],
            correctAnswer: 1,
            explanation: 'The crown ether wraps K+ in an organic-soluble shell (phase-transfer catalysis), carrying the salt into nonpolar solvent. The fluoride anion is left essentially unsolvated and therefore far more nucleophilic than in water. This mirrors how solvation controls reactivity throughout the unit.'
          },
          {
            question: 'Which property makes ethers ideal reaction SOLVENTS but is also the reason a Williamson synthesis cannot simply use any alkyl halide?',
            options: [
              'Ethers are acidic; alkyl halides are basic',
              'Ethers are largely unreactive and only weakly polar, while the Williamson step is an $\\text{S}_\\text{N}2$ that demands an unhindered (methyl/primary) electrophile',
              'Ethers are explosive by design',
              'Ethers form hydrogen bonds to halides'
            ],
            correctAnswer: 1,
            explanation: 'The very inertness and modest polarity that make ethers superb solvents are unrelated to electrophile choice in Williamson synthesis, which is governed by SN2 sterics: the alkyl halide must be methyl or primary or elimination dominates. The pairing of these two ideas is the core of this part.'
          }
        ]
      }
    },
    {
      id: 'alcoh4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 4 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'For ANY unsymmetrical ether made by Williamson synthesis, the governing planning rule is:',
            options: [
              'put the leaving group on the more substituted carbon',
              'put the leaving group on the methyl or primary carbon and the bulk on the alkoxide',
              'always use a tertiary alkyl halide',
              'avoid alkoxides entirely'
            ],
            correctAnswer: 1,
            explanation: 'Because Williamson is SN2, the carbon attacked (bearing the leaving group) must be unhindered (methyl/primary), while steric bulk is tolerated on the nucleophilic alkoxide. Choosing the disconnection that satisfies this rule is the universal strategy for unsymmetrical ethers.'
          },
          {
            question: 'An ether and an alcohol of similar mass differ sharply in boiling point. The structural feature responsible, threaded through this part, is:',
            options: [
              'the number of carbon atoms',
              'the presence (alcohol) or absence (ether) of an O-H bond capable of donating hydrogen bonds',
              'the C-O-C bond angle',
              'aromaticity'
            ],
            correctAnswer: 1,
            explanation: 'The decisive feature is the O-H bond. Alcohols donate hydrogen bonds and form an extensive network (high boiling point); ethers, lacking O-H, cannot donate and only accept, so they boil near comparable alkanes. This same fact underlies their use as inert solvents.'
          }
        ]
      }
    }
  ]
}
