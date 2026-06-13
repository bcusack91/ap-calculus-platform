export const oChemAldehydesKetonesPart4Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh4-intro',
      type: 'text' as const,
      content: `
## Oxidation & Reduction of Carbonyls

**Part 4 of 7 — Redox Chemistry and Diagnostic Tests**

Aldehydes and ketones sit in the **middle** of carbon's oxidation ladder. Reading the ladder for a single carbon:

$\\text{alkane} \\rightarrow \\text{alcohol} \\rightarrow \\text{aldehyde/ketone} \\rightarrow \\text{carboxylic acid}$

Each arrow to the right is an **oxidation** (loss of $\\text{H}$ / gain of $\\text{O}$ bonds); each step left is a **reduction**. In Part 3 we moved *left* (carbonyl $\\rightarrow$ alcohol) with hydride. Here we move *right*.

The pivotal asymmetry that governs this entire lesson: **an aldehyde still has a C–H bond on the carbonyl carbon, but a ketone does not.** That lone hydrogen is the handle an oxidant grabs. It is why **aldehydes are easily oxidized to carboxylic acids**, while **ketones strongly resist oxidation** (oxidizing a ketone would require breaking a C–C bond, which mild reagents cannot do).
      `
    },
    {
      id: 'aldeh4-oxidation',
      type: 'text' as const,
      content: `
### Oxidation of Aldehydes

$\\text{RCHO} \\xrightarrow{\\text{[O]}} \\text{RCOOH}$

A wide range of oxidants accomplish this: chromium(VI) reagents (Jones reagent, $\\text{CrO}_3/\\text{H}_2\\text{SO}_4$), permanganate ($\\text{KMnO}_4$), and even mild ones (Tollens', $\\text{Ag}_2\\text{O}$). Mechanistically, water adds to the aldehyde to form the **hydrate** (Part 2); the oxidant then removes the C–H and an O–H, installing the second C=O of the acid. Because a ketone cannot form that same C–H-bearing hydrate carbon, it has no pathway to oxidize under these mild conditions.

**The PCC distinction (controlled vs. over-oxidation).** When making an aldehyde *from a primary alcohol*, the danger is over-oxidation straight through to the carboxylic acid (because the aldehyde, once formed, hydrates in water and keeps oxidizing).

- **PCC** (pyridinium chlorochromate) is an **anhydrous** Cr(VI) reagent. With no water present, the aldehyde cannot hydrate, so oxidation **stops at the aldehyde**: $\\text{RCH}_2\\text{OH} \\xrightarrow{\\text{PCC}} \\text{RCHO}$.
- **Jones reagent** ($\\text{CrO}_3$, aqueous $\\text{H}_2\\text{SO}_4$) contains water, so a primary alcohol is driven all the way: $\\text{RCH}_2\\text{OH} \\xrightarrow{\\text{Jones}} \\text{RCOOH}$.
- A **secondary** alcohol gives a ketone with either reagent — and stops there, since ketones resist further oxidation.

> **Worked example.** You need to convert 1-butanol to butanal (not butanoic acid). Choose **PCC** in $\\text{CH}_2\\text{Cl}_2$: the anhydrous conditions prevent hydrate formation and halt oxidation at the aldehyde. Using aqueous $\\text{KMnO}_4$ or Jones reagent would overshoot to butanoic acid.
      `
    },
    {
      id: 'aldeh4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Oxidation
      `,
      exercise: {
        questions: [
          {
            question: 'Why are aldehydes readily oxidized to carboxylic acids while ketones are not, under mild conditions?',
            options: [
              'Aldehydes have a more electronegative oxygen than ketones',
              'The aldehyde carbonyl carbon bears a C-H bond that the oxidant can remove; a ketone has no such C-H and would require breaking a C-C bond',
              'Ketones are aromatic and therefore inert',
              'Aldehydes contain more oxygen atoms than ketones'
            ],
            correctAnswer: 1,
            explanation: 'Oxidizing a carbonyl to a carboxylic acid means installing a second C-O bond at that carbon by removing a hydrogen from it. An aldehyde has exactly that H; a ketone does not, so mild oxidants cannot touch it (breaking a C-C bond is required and does not occur under these conditions).'
          },
          {
            question: 'Which reagent converts a primary alcohol to an ALDEHYDE without over-oxidizing it to the carboxylic acid?',
            options: [
              'Aqueous KMnO4',
              'Jones reagent (CrO3, aqueous H2SO4)',
              'PCC in CH2Cl2 (anhydrous)',
              'Tollens reagent'
            ],
            correctAnswer: 2,
            explanation: 'PCC is an anhydrous Cr(VI) reagent. Without water the aldehyde cannot form the hydrate that is required for further oxidation, so the reaction stops cleanly at the aldehyde. Aqueous KMnO4 and Jones reagent contain water and over-oxidize to the acid; Tollens is used to detect/oxidize aldehydes, not to make them from alcohols.'
          },
          {
            question: 'A secondary alcohol is treated with Jones reagent (aqueous CrO3/H2SO4). What is the product?',
            options: [
              'A carboxylic acid',
              'A ketone (which resists further oxidation)',
              'An aldehyde',
              'A primary alcohol'
            ],
            correctAnswer: 1,
            explanation: 'A secondary alcohol oxidizes to a ketone. The ketone carbonyl carbon has no C-H to remove, so even the strong aqueous Cr(VI) cannot oxidize it further. Only primary alcohols can be carried on to carboxylic acids under aqueous conditions.'
          }
        ]
      }
    },
    {
      id: 'aldeh4-tollens',
      type: 'text' as const,
      content: `
### Diagnostic Tests — Telling an Aldehyde from a Ketone

Because only aldehydes are easily oxidized, several classic "wet" tests use a **mild oxidant that produces a visible change** when it is reduced. A positive result means "aldehyde present"; a negative result (no change) is consistent with a ketone.

**Tollens' test (the silver mirror).** Tollens' reagent is the diamminesilver(I) complex, $\\text{[Ag(NH}_3)_2]^+$. An aldehyde reduces $\\text{Ag}^+$ to **metallic silver**, which deposits as a shiny **silver mirror** on the glass while the aldehyde is oxidized to a carboxylate:

$\\text{RCHO} + 2\\,\\text{[Ag(NH}_3)_2]^+ + 3\\,\\text{OH}^- \\rightarrow \\text{RCOO}^- + 2\\,\\text{Ag}\\downarrow + 4\\,\\text{NH}_3 + 2\\,\\text{H}_2\\text{O}$

- **Aldehyde:** positive — silver mirror forms.
- **Ketone:** negative — no reaction, no mirror.

**Related tests.** Fehling's and Benedict's solutions use $\\text{Cu}^{2+}$ (deep blue); an aldehyde reduces it to a **brick-red** $\\text{Cu}_2\\text{O}$ precipitate. These are the basis of historical tests for "reducing sugars," since the open-chain form of an aldose presents a free aldehyde.

> **Worked example.** You have two unlabeled bottles: one is propanal ($\\text{CH}_3\\text{CH}_2\\text{CHO}$), the other propanone/acetone ($\\text{CH}_3\\text{COCH}_3$). Add Tollens' reagent to each. The bottle that produces a silver mirror is the **aldehyde** (propanal); the bottle that stays clear is the **ketone** (acetone). One simple test distinguishes the two isomeric $\\text{C}_3\\text{H}_6\\text{O}$ compounds.
      `
    },
    {
      id: 'aldeh4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Diagnostic Tests
      `,
      exercise: {
        questions: [
          {
            question: 'A student adds Tollens reagent to an unknown and observes a silver mirror. What can be concluded?',
            options: [
              'The unknown is a ketone',
              'The unknown is (most likely) an aldehyde, which reduced Ag+ to metallic silver',
              'The unknown is an alkane',
              'The unknown is an ether'
            ],
            correctAnswer: 1,
            explanation: 'A positive Tollens test (silver mirror) indicates an easily oxidized group, characteristically an aldehyde. The aldehyde is oxidized to a carboxylate while Ag+ is reduced to Ag metal. Ketones, alkanes, and ethers give no mirror.'
          },
          {
            question: 'Why does acetone (propanone) give a NEGATIVE Tollens test while propanal gives a positive one, even though both have formula C3H6O?',
            options: [
              'Acetone has no carbonyl group',
              'Acetone is a ketone with no C-H on the carbonyl carbon, so the mild oxidant cannot oxidize it; propanal is an aldehyde and is oxidized',
              'Acetone is less soluble in water',
              'Propanal is aromatic'
            ],
            correctAnswer: 1,
            explanation: 'Both are constitutional isomers with a carbonyl, but only propanal (an aldehyde) has the oxidizable C-H on the carbonyl carbon. Acetone is a ketone and cannot be oxidized by the mild Ag+ reagent, so no silver mirror forms. Solubility and aromaticity are irrelevant here.'
          },
          {
            question: 'Fehling and Benedict tests give a brick-red precipitate with aldehydes. What is being reduced to form that precipitate?',
            options: [
              'Ag+ to Ag metal',
              'Cu2+ (blue) to Cu2O (brick-red)',
              'Cr2O7^2- to Cr3+',
              'MnO4- to Mn2+'
            ],
            correctAnswer: 1,
            explanation: 'Fehling/Benedict use a copper(II) complex (deep blue). An aldehyde reduces Cu(II) to copper(I) oxide, Cu2O, a brick-red precipitate, while being oxidized itself. The silver-to-silver-mirror change is the Tollens test; chromium and permanganate color changes belong to other oxidants.'
          },
          {
            question: 'Why does glucose give a positive Tollens (silver mirror) test even though it exists mostly as a cyclic hemiacetal?',
            options: [
              'The cyclic hemiacetal is itself a strong oxidant',
              'The cyclic hemiacetal is in equilibrium with a small amount of open-chain aldehyde, which is continuously oxidized, pulling the equilibrium forward',
              'Glucose is a ketone and ketones are oxidized by Tollens',
              'Silver ions force the ring to stay closed'
            ],
            correctAnswer: 1,
            explanation: 'Although the ring (hemiacetal) form dominates, it is in equilibrium with a trace of open-chain aldehyde. Tollens oxidizes that free aldehyde; by Le Chatelier the ring keeps opening to replenish it, so the reaction goes to completion. This is why aldoses are classified as reducing sugars. Glucose is an aldose (aldehyde), not a ketone.'
          }
        ]
      }
    },
    {
      id: 'aldeh4-summary',
      type: 'text' as const,
      content: `
### Bringing Redox Together

| Transformation | Reagent(s) | Note |
|---|---|---|
| 1° alcohol $\\rightarrow$ aldehyde | **PCC** (anhydrous) | stops at aldehyde |
| 1° alcohol $\\rightarrow$ carboxylic acid | Jones, $\\text{KMnO}_4$ (aqueous) | over-oxidizes through aldehyde |
| 2° alcohol $\\rightarrow$ ketone | PCC, Jones, $\\text{KMnO}_4$ | stops at ketone |
| aldehyde $\\rightarrow$ carboxylic acid | Tollens', Jones, $\\text{KMnO}_4$ | ketones unreactive |
| aldehyde $\\rightarrow$ 1° alcohol | $\\text{NaBH}_4$, $\\text{LiAlH}_4$ | reduction (Part 3) |
| ketone $\\rightarrow$ 2° alcohol | $\\text{NaBH}_4$, $\\text{LiAlH}_4$ | reduction (Part 3) |

### Part 4 Summary

- Carbon's oxidation ladder: alkane $\\rightarrow$ alcohol $\\rightarrow$ aldehyde/ketone $\\rightarrow$ carboxylic acid.
- **Aldehydes oxidize easily** to carboxylic acids (they have a removable C–H on the carbonyl carbon); **ketones resist** oxidation.
- **PCC** (anhydrous) stops a primary alcohol at the aldehyde; aqueous oxidants (**Jones, $\\text{KMnO}_4$**) push on to the acid.
- **Only aldehydes** give positive **Tollens'** (silver mirror) and **Fehling's/Benedict's** (brick-red $\\text{Cu}_2\\text{O}$) tests — the basis for distinguishing aldehydes from ketones and detecting reducing sugars.

Part 5 returns to the alcohol nucleophiles of Part 2 and completes the hemiacetal story: full **acetal** formation and its use as a **protecting group**.
      `
    }
  ]
}
