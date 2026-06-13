export const oChemAlcoholsPart5Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh5-intro',
      type: 'text' as const,
      content: `
## Reactions of Ethers and Epoxides

**Part 5 of 7 — Ether Cleavage, Epoxide Synthesis & Ring-Opening**

Ordinary ethers are famously unreactive — that is exactly why they make good solvents (Part 4). But two situations break that calm:

1. **Acidic cleavage** of a normal ether by hot, concentrated $\\text{HI}$ or $\\text{HBr}$.
2. **Epoxides** — three-membered cyclic ethers whose enormous **ring strain** (about $114\\,\\text{kJ/mol}$) makes them dramatically more reactive than any open-chain ether.

The contrast is the headline of this part: the same C-O-C linkage is essentially inert when relaxed and explosively reactive when forced into a strained three-membered ring.
      `
    },
    {
      id: 'alcoh5-cleavage',
      type: 'text' as const,
      content: `
### Acidic Cleavage of Ordinary Ethers

Because ethers have no good leaving group and no acidic proton, only a strong acid with a good nucleophilic counterion will cleave them. The classic conditions are **excess hot $\\text{HI}$ (or $\\text{HBr}$)**:

$\\text{R-O-R'} + 2\\,\\text{HI} \\rightarrow \\text{R-I} + \\text{R'-I} + \\text{H}_2\\text{O}$

The mechanism: the acid protonates the ether oxygen (making it a neutral, leaving-group-ready alcohol/alkyl piece), and iodide — a strong nucleophile — attacks. Which carbon iodide attacks depends on the substrate, mirroring Part 3 substitution logic:

- If both groups are **methyl/primary**, iodide attacks by **$\\text{S}_\\text{N}2$** at the less hindered carbon.
- If one group is **tertiary, benzylic, or allylic**, the protonated ether ionizes to a stabilized carbocation and reacts by **$\\text{S}_\\text{N}1$**; iodide then traps the cation. The more substituted carbon becomes the alkyl iodide, and the other fragment leaves as the alcohol (which, with excess HI, is converted onward to a second alkyl iodide).

**Worked example.** *tert*-Butyl methyl ether $+$ excess $\\text{HI}$.

Protonation, then ionization at the tertiary carbon (a stable $3°$ cation) gives *tert*-butyl iodide; methanol is released and, with excess HI, becomes methyl iodide. **Products: *tert*-butyl iodide $+$ methyl iodide.** Note the tertiary group goes $\\text{S}_\\text{N}1$ — iodide does not attack the crowded tertiary carbon directly.
      `
    },
    {
      id: 'alcoh5-epoxsynth',
      type: 'text' as const,
      content: `
### Making Epoxides

There are two standard syntheses, and they are conceptual mirror images:

**1. Epoxidation of an alkene with a peroxyacid** (mCPBA, *meta*-chloroperoxybenzoic acid). A single concerted step delivers one oxygen across the double bond with **syn** stereochemistry and full retention of alkene geometry. A *cis*-alkene gives the *cis*-epoxide.

**2. Intramolecular Williamson synthesis from a halohydrin.** Treat a $\\beta$-halo alcohol (a halohydrin) with base. The base deprotonates the $\\text{-OH}$ to an alkoxide, which then performs an **intramolecular $\\text{S}_\\text{N}2$** on the adjacent carbon bearing the halide, closing the three-membered ring. This requires the alkoxide oxygen and the leaving group to reach an **anti-periplanar** arrangement.

> Notice that route 2 is simply the Williamson ether synthesis (Part 4) folded back on itself: an alkoxide displacing a halide by $\\text{S}_\\text{N}2$, except the nucleophile and electrophile live in the same molecule.
      `
    },
    {
      id: 'alcoh5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Cleavage & Epoxide Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'When *tert*-butyl ethyl ether is cleaved by excess hot $\\text{HI}$, which carbon of the original ether reacts by an $\\text{S}_\\text{N}1$ pathway?',
            options: [
              'the ethyl (primary) carbon',
              'the tert-butyl (tertiary) carbon',
              'neither; the reaction is concerted across both',
              'the oxygen itself'
            ],
            correctAnswer: 1,
            explanation: 'After protonation, the tertiary carbon can ionize to a stable tertiary carbocation, so it reacts by SN1 (iodide traps the cation). Iodide will not attack the hindered tertiary carbon directly by SN2; the primary ethyl fragment, by contrast, would react by SN2.'
          },
          {
            question: 'Epoxidation of cis-2-butene with mCPBA gives:',
            options: [
              'the trans-epoxide',
              'the cis-epoxide, because oxygen is delivered syn in one concerted step',
              'a mixture of butan-2-ol products',
              'no reaction'
            ],
            correctAnswer: 1,
            explanation: 'mCPBA delivers oxygen across the double bond in a single concerted, syn addition that preserves the alkene geometry. A cis-alkene therefore yields the cis-epoxide. There is no carbocation and no opportunity for the geometry to scramble.'
          },
          {
            question: 'Treating a halohydrin with NaOH forms an epoxide. The ring-closing step is best described as:',
            options: [
              'an intermolecular E2 elimination',
              'an intramolecular $\\text{S}_\\text{N}2$ in which the alkoxide displaces the neighboring halide',
              'an oxidation by hydroxide',
              'a radical chain reaction'
            ],
            correctAnswer: 1,
            explanation: 'Base deprotonates the -OH to an alkoxide, which attacks the adjacent carbon bearing the halide in an intramolecular SN2, closing the three-membered ring. It is essentially a Williamson ether synthesis performed within a single molecule and requires an anti-periplanar geometry.'
          }
        ]
      }
    },
    {
      id: 'alcoh5-ringopening',
      type: 'text' as const,
      content: `
### Epoxide Ring-Opening: The Regiochemistry Showdown

Epoxide ring-opening is one of the most heavily tested ideas in the course because the **regiochemistry flips depending on conditions**. The strained ring is opened by a nucleophile, but *which* carbon the nucleophile attacks changes between acidic and basic media.

**Basic / nucleophilic conditions (strong nucleophile, no acid):** the nucleophile attacks by a clean $\\text{S}_\\text{N}2$ at the **less hindered (less substituted) carbon**, because sterics control $\\text{S}_\\text{N}2$. Backside attack inverts that carbon.

**Acidic conditions (acid catalyst protonates the epoxide oxygen first):** the nucleophile attacks the **more hindered (more substituted) carbon**. Why the reversal? Protonation gives the C-O bonds substantial positive character; the more substituted carbon bears the larger share of that $\\delta+$ (it would form the more stable carbocation), so it becomes the electrophilic target. The transition state has $\\text{S}_\\text{N}1$-like character, even though both C-O bonds are still partly intact.

| Condition | Site of attack | Why |
|-----------|----------------|-----|
| **Basic** (e.g. $\\text{NaOCH}_3$, $\\text{NaOH}$, $\\text{RMgX}$, $\\text{LiAlH}_4$) | **less** substituted carbon | $\\text{S}_\\text{N}2$ sterics |
| **Acidic** (e.g. $\\text{H}_3\\text{O}^+$, $\\text{HX}$, $\\text{CH}_3\\text{OH}/\\text{H}^+$) | **more** substituted carbon | $\\delta+$ on more substituted C |

In **both** cases the nucleophile and the resulting $\\text{-OH}$ end up **trans** (anti) across the former ring, because attack is always backside (anti) to the breaking C-O bond.

**Worked example — the canonical comparison.** Open **2,2-dimethyloxirane** (isobutylene oxide; one carbon is quaternary-substituted with two methyls, the other is a $\\text{CH}_2$) with methanol.

- **Basic methoxide ($\\text{NaOCH}_3$):** attack at the **less** substituted $\\text{CH}_2$. Product: $\\text{(CH}_3\\text{)}_2\\text{C(OH)-CH}_2\\text{-OCH}_3$ — the methoxy ends up on the *less* substituted carbon and the $\\text{-OH}$ on the *more* substituted (tertiary) carbon.
- **Acidic methanol ($\\text{CH}_3\\text{OH}, \\text{H}_2\\text{SO}_4$):** attack at the **more** substituted carbon. Product: $\\text{(CH}_3\\text{)}_2\\text{C(OCH}_3\\text{)-CH}_2\\text{-OH}$ — now the methoxy is on the *more* substituted carbon and the $\\text{-OH}$ on the $\\text{CH}_2$.

**Same epoxide, same nucleophile, opposite regiochemistry — entirely because of acid vs base.** This single example is worth memorizing as a template.
      `
    },
    {
      id: 'alcoh5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Ring-Opening Regiochemistry
      `,
      exercise: {
        questions: [
          {
            question: 'Sodium methoxide ($\\text{NaOCH}_3$) opens 2-methyloxirane (propylene oxide). The nucleophile attacks which carbon?',
            options: [
              'the more substituted carbon (the one bearing the methyl)',
              'the less substituted carbon ($\\text{CH}_2$)',
              'the oxygen',
              'both carbons equally'
            ],
            correctAnswer: 1,
            explanation: 'Under basic conditions a strong nucleophile opens the epoxide by SN2 at the less hindered carbon, where sterics favor backside attack. Methoxide therefore bonds to the CH2, leaving the -OH on the more substituted carbon. Attack at the more substituted carbon is the acidic-conditions outcome.'
          },
          {
            question: 'Under acidic conditions ($\\text{H}_3\\text{O}^+$), why does the nucleophile attack the MORE substituted carbon of an unsymmetrical epoxide?',
            options: [
              'Acid makes the less substituted carbon disappear',
              'Protonation puts a larger partial positive charge on the more substituted carbon, which would form the more stable carbocation',
              'The nucleophile becomes negatively charged',
              'Sterics no longer matter at all and attack is random'
            ],
            correctAnswer: 1,
            explanation: 'Protonating the epoxide oxygen gives the C-O bonds carbocation character. The more substituted carbon carries the greater share of the positive charge (it would give the more stable cation), so it becomes the electrophilic site. The transition state is SN1-like, flipping regiochemistry relative to basic conditions.'
          },
          {
            question: 'In epoxide ring-opening, the incoming nucleophile and the newly formed -OH end up in what spatial relationship?',
            options: [
              'cis (same side), in both acidic and basic conditions',
              'trans (anti), in both acidic and basic conditions',
              'cis under base, trans under acid',
              'they end up on the same carbon'
            ],
            correctAnswer: 1,
            explanation: 'Regardless of which carbon is attacked, the nucleophile approaches backside (anti) to the breaking C-O bond, so the nucleophile and the resulting hydroxyl are always trans across the former ring. Only the regiochemistry (which carbon) changes with conditions, not the anti stereochemistry.'
          },
          {
            question: 'A Grignard reagent ($\\text{CH}_3\\text{MgBr}$) is added to 2-methyloxirane, then worked up with acid. Where does the methyl group attach?',
            options: [
              'to the more substituted carbon',
              'to the less substituted carbon, because the Grignard is a strong nucleophile under basic (non-acidic) conditions',
              'to the oxygen',
              'no reaction occurs with epoxides'
            ],
            correctAnswer: 1,
            explanation: 'A Grignard is a strong carbon nucleophile reacting under basic conditions, so it opens the epoxide by SN2 at the less hindered carbon. The new carbon-carbon bond forms at the CH2, and the -OH appears on the more substituted carbon after workup. Epoxides are excellent Grignard electrophiles.'
          }
        ]
      }
    },
    {
      id: 'alcoh5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 5 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Why are epoxides so much more reactive than ordinary dialkyl ethers toward nucleophiles?',
            options: [
              'Epoxides contain an extra oxygen',
              'The three-membered ring carries large angle strain that is relieved when the ring opens, providing a strong thermodynamic driving force',
              'Epoxides are aromatic',
              'Ordinary ethers have no oxygen lone pairs'
            ],
            correctAnswer: 1,
            explanation: 'The roughly 60-degree internal angles of the three-membered ring force severe strain (~114 kJ/mol). Opening the ring relieves that strain, so epoxides react readily with nucleophiles where unstrained ethers are inert. Both contain one oxygen; the difference is strain, not composition or aromaticity.'
          },
          {
            question: 'The single most important predictive rule for unsymmetrical epoxide ring-opening is:',
            options: [
              'the nucleophile always attacks the more substituted carbon',
              'basic conditions direct the nucleophile to the less substituted carbon (SN2 sterics); acidic conditions direct it to the more substituted carbon ($\\delta+$ stability)',
              'the regiochemistry never changes with conditions',
              'only acids can open epoxides'
            ],
            correctAnswer: 1,
            explanation: 'Regiochemistry flips with conditions: under base, SN2 sterics send the nucleophile to the less hindered carbon; under acid, the protonated epoxide places more positive character on the more substituted carbon, so the nucleophile attacks there. Mastering this acid-versus-base reversal is the central skill of this part.'
          }
        ]
      }
    }
  ]
}
