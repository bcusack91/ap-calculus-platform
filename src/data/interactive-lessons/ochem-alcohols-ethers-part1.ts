export const oChemAlcoholsPart1Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh1-intro',
      type: 'text' as const,
      content: `
## Alcohols & Ethers — Nomenclature and Physical Properties

**Part 1 of 7 — Alcohol Nomenclature, Hydrogen Bonding & Acidity**

An **alcohol** is any compound bearing a hydroxyl group ($\\text{-OH}$) bonded to an $sp^3$ (saturated) carbon. The general formula is $\\text{R-OH}$. That single functional group dominates the molecule's chemistry far out of proportion to its size: it makes the carbon electrophilic, the oxygen nucleophilic, and the $\\text{O-H}$ proton both hydrogen-bonding and weakly acidic.

Alcohols are classified by the **substitution at the carbinol carbon** (the carbon bearing the $\\text{-OH}$):

| Class | Carbons on the carbinol C | Example |
|-------|---------------------------|---------|
| **Primary ($1°$)** | one (or zero) | ethanol, $\\text{CH}_3\\text{CH}_2\\text{OH}$ |
| **Secondary ($2°$)** | two | isopropanol, $\\text{(CH}_3\\text{)}_2\\text{CHOH}$ |
| **Tertiary ($3°$)** | three | *tert*-butanol, $\\text{(CH}_3\\text{)}_3\\text{COH}$ |

This $1°/2°/3°$ label is not bookkeeping for its own sake — it predicts oxidation outcomes, $\\text{S}_\\text{N}1$ versus $\\text{S}_\\text{N}2$ behavior, and dehydration mechanism, all of which appear in later parts of this suite.
      `
    },
    {
      id: 'alcoh1-nomenclature',
      type: 'text' as const,
      content: `
### IUPAC Naming: Four Steps

To name an alcohol by IUPAC rules:

1. **Find the longest chain that contains the carbon bearing $\\text{-OH}$.** The hydroxyl-bearing carbon *must* be in the parent chain even if a longer chain exists elsewhere.
2. **Replace the alkane "-e" with "-ol."** Hexane $\\rightarrow$ hexanol.
3. **Number so the $\\text{-OH}$ gets the lowest possible locant.** The hydroxyl outranks alkyl groups, double bonds, and halogens for low numbers.
4. **Cite substituents alphabetically with their locants.**

**Worked example.** Name the compound $\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH(CH}_3\\text{)CH}_3$.

- Longest chain through the $\\text{-OH}$ carbon: five carbons $\\rightarrow$ pentane backbone, so **pentanol**.
- Numbering from the end nearest the $\\text{-OH}$ puts hydroxyl on C2 and a methyl branch on C4.
- Result: **4-methylpentan-2-ol** (equivalently 4-methyl-2-pentanol).

> **Common trap:** numbering from the wrong end to give the methyl a lower number. The $\\text{-OH}$ always claims the lowest locant first; substituent numbers fall out afterward. Starting from the other end would mislabel it "2-methylpentan-4-ol," which is wrong because $2+4$ is not how you decide — the principal characteristic group ($\\text{-OH}$) takes priority.

When $\\text{-OH}$ is not the senior group (e.g., a carboxylic acid is also present), it is demoted to the **"hydroxy-"** prefix instead of the "-ol" suffix.
      `
    },
    {
      id: 'alcoh1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Classification & Naming
      `,
      exercise: {
        questions: [
          {
            question: 'Classify 2-methylbutan-2-ol, $\\text{(CH}_3\\text{)}_2\\text{C(OH)CH}_2\\text{CH}_3$.',
            options: [
              'Primary ($1°$)',
              'Secondary ($2°$)',
              'Tertiary ($3°$)',
              'It is not an alcohol'
            ],
            correctAnswer: 2,
            explanation: 'The carbon bearing the -OH is attached to three other carbons (two methyls and one ethyl), so it is tertiary. A common mistake is counting total carbons in the molecule rather than only those directly bonded to the carbinol carbon.'
          },
          {
            question: 'What is the correct IUPAC name for $\\text{CH}_3\\text{CH}_2\\text{CH(OH)CH}_3$?',
            options: [
              'butan-1-ol',
              'butan-2-ol',
              '2-methylpropan-1-ol',
              'butan-3-ol'
            ],
            correctAnswer: 1,
            explanation: 'The four-carbon chain is butane; the -OH sits on C2 whether numbered from either end after applying lowest-locant rules, giving butan-2-ol. "butan-3-ol" is wrong because the -OH must receive the lowest number, and C2 < C3.'
          },
          {
            question: 'Why must the longest carbon chain selected for naming an alcohol include the carbinol carbon, even if a longer chain exists elsewhere in the molecule?',
            options: [
              'Because oxygen counts as a carbon for chain length',
              'Because the hydroxyl is the principal characteristic group and defines the parent chain',
              'Because primary alcohols cannot be branched',
              'Because IUPAC always picks the shortest chain'
            ],
            correctAnswer: 1,
            explanation: 'The -OH is the senior (principal characteristic) group here, so the parent chain is defined as the longest chain that contains it, not merely the longest chain in the structure. This guarantees the suffix "-ol" can be applied.'
          }
        ]
      }
    },
    {
      id: 'alcoh1-hbonding',
      type: 'text' as const,
      content: `
### Hydrogen Bonding and Physical Properties

The $\\text{O-H}$ bond is strongly polarized because oxygen is far more electronegative than hydrogen. Each alcohol molecule can therefore both **donate** a hydrogen bond (through its $\\text{O-H}$) and **accept** one (through oxygen's lone pairs). This network of intermolecular hydrogen bonds explains the two signature physical properties of alcohols:

**1. Elevated boiling points.** Compare molecules of similar molar mass:

| Compound | Approx. MW | Boiling point | Dominant IMF |
|----------|-----------|---------------|--------------|
| propane | 44 | $-42\\,°\\text{C}$ | London dispersion |
| dimethyl ether | 46 | $-24\\,°\\text{C}$ | dipole-dipole |
| ethanol | 46 | $+78\\,°\\text{C}$ | hydrogen bonding |

All three have nearly identical mass, yet ethanol boils about $100\\,°\\text{C}$ higher than propane. Dimethyl ether — an *isomer* of ethanol with the same formula $\\text{C}_2\\text{H}_6\\text{O}$ — boils far lower because its hydrogens are bonded to carbon and cannot serve as H-bond *donors*; it can only accept.

**2. Water solubility that fades with chain length.** Methanol, ethanol, and propanol are miscible with water in all proportions because the $\\text{-OH}$ hydrogen-bonds to water. As the nonpolar hydrocarbon tail grows, the molecule becomes increasingly "greasy" and solubility drops sharply — 1-butanol is only partially miscible, and 1-octanol is essentially insoluble.

> **Key idea:** boiling point tracks the *strength* of intermolecular attraction, while water solubility tracks the *balance* between the polar $\\text{-OH}$ head and the nonpolar tail.
      `
    },
    {
      id: 'alcoh1-acidity',
      type: 'text' as const,
      content: `
### Acidity and $\\text{p}K_\\text{a}$ Trends

Alcohols are weakly acidic. Removing the $\\text{O-H}$ proton gives an **alkoxide** ($\\text{RO}^-$):

$\\text{ROH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{RO}^- + \\text{H}_3\\text{O}^+$

The $\\text{p}K_\\text{a}$ of a simple alcohol is about $16$–$18$, placing it on the acidity ladder between water ($\\text{p}K_\\text{a}\\approx 15.7$) and a terminal alkyne ($\\text{p}K_\\text{a}\\approx 25$). A lower $\\text{p}K_\\text{a}$ means a *stronger* acid and a *more stable* conjugate base.

Three structural factors shift alcohol acidity, all by changing how well the alkoxide anion's negative charge is stabilized:

- **Inductive electron withdrawal.** Electronegative atoms near the $\\text{-OH}$ pull electron density away from the oxygen, spreading the negative charge of $\\text{RO}^-$ and stabilizing it. 2,2,2-trifluoroethanol ($\\text{p}K_\\text{a}\\approx 12.5$) is far more acidic than ethanol ($\\text{p}K_\\text{a}\\approx 16$) because three fluorines drain charge through the $\\sigma$ framework. The effect weakens with distance.
- **Alkyl substitution (in solution).** *tert*-Butanol ($\\text{p}K_\\text{a}\\approx 18$) is a weaker acid than methanol ($\\text{p}K_\\text{a}\\approx 15.5$). Electron-donating alkyl groups slightly destabilize the alkoxide, and the bulky *tert*-butoxide is also poorly solvated, which further raises its $\\text{p}K_\\text{a}$.
- **Resonance.** This is the dominant effect when available. A **phenol** ($\\text{p}K_\\text{a}\\approx 10$) is roughly a million times more acidic than cyclohexanol ($\\text{p}K_\\text{a}\\approx 18$) because the phenoxide negative charge is delocalized onto the aromatic ring. A **carboxylic acid** ($\\text{p}K_\\text{a}\\approx 4$–$5$) is more acidic still: its carboxylate spreads the charge equally over two oxygens.

**Worked example — rank by acidity.** Order these from *most* to *least* acidic: ethanol, 2-chloroethanol, *tert*-butanol, phenol.

Phenol wins decisively (resonance into the ring, $\\text{p}K_\\text{a}\\approx 10$). 2-Chloroethanol is next (inductive withdrawal by Cl lowers it to $\\approx 14$). Ethanol follows at $\\approx 16$. *tert*-Butanol is the weakest acid ($\\approx 18$) because of electron-donating alkyl groups and poor solvation of its bulky alkoxide.

**Final order (strongest $\\rightarrow$ weakest acid):** phenol $>$ 2-chloroethanol $>$ ethanol $>$ *tert*-butanol.
      `
    },
    {
      id: 'alcoh1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Properties, H-Bonding & Acidity
      `,
      exercise: {
        questions: [
          {
            question: 'Ethanol and dimethyl ether share the molecular formula $\\text{C}_2\\text{H}_6\\text{O}$, yet ethanol boils about $100\\,°\\text{C}$ higher. Why?',
            options: [
              'Ethanol has a larger molar mass',
              'Only ethanol can donate hydrogen bonds because its H is bonded to O',
              'Dimethyl ether is ionic',
              'Ethanol experiences weaker London dispersion forces'
            ],
            correctAnswer: 1,
            explanation: 'They are isomers with identical mass, so dispersion forces are comparable. The difference is hydrogen bonding: ethanol has an O-H and can act as an H-bond donor, while dimethyl ether (C-H only) can only accept. The denser H-bond network raises the boiling point of ethanol.'
          },
          {
            question: 'Which alcohol is the strongest acid?',
            options: [
              'ethanol, $\\text{p}K_\\text{a}\\approx 16$',
              '2,2,2-trifluoroethanol, $\\text{p}K_\\text{a}\\approx 12.5$',
              'tert-butanol, $\\text{p}K_\\text{a}\\approx 18$',
              'cyclohexanol, $\\text{p}K_\\text{a}\\approx 18$'
            ],
            correctAnswer: 1,
            explanation: 'Lower pKa means stronger acid. The three electronegative fluorines withdraw electron density inductively, stabilizing the alkoxide and dropping the pKa to ~12.5. Choosing tert-butanol confuses electron donation (which weakens acidity) with withdrawal.'
          },
          {
            question: 'A phenol ($\\text{p}K_\\text{a}\\approx 10$) is about a million times more acidic than cyclohexanol ($\\text{p}K_\\text{a}\\approx 18$). The dominant reason is:',
            options: [
              'phenol has a heavier ring',
              'resonance delocalizes the phenoxide negative charge into the aromatic ring',
              'cyclohexanol cannot hydrogen-bond',
              'phenol is a tertiary alcohol'
            ],
            correctAnswer: 1,
            explanation: 'The phenoxide anion is resonance-stabilized: its negative charge is spread onto the ortho and para ring carbons. The alkoxide of cyclohexanol has no such delocalization, so it is a much weaker acid. Resonance typically dominates inductive effects when both could apply.'
          },
          {
            question: 'Why does water solubility of straight-chain alcohols decrease as the carbon chain lengthens?',
            options: [
              'The -OH group disappears in longer chains',
              'The growing nonpolar hydrocarbon tail outweighs the polar -OH head, reducing H-bonding with water',
              'Longer alcohols become ionic and precipitate',
              'Hydrogen bonding to water gets stronger with chain length'
            ],
            correctAnswer: 1,
            explanation: 'Solubility reflects the balance between the polar, H-bonding -OH head and the nonpolar tail. As the hydrocarbon portion grows, the molecule becomes increasingly "greasy" and the single -OH can no longer keep it dissolved, so solubility falls (e.g., methanol is fully miscible; 1-octanol is essentially insoluble).'
          }
        ]
      }
    },
    {
      id: 'alcoh1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Rank these for increasing acidity (weakest acid first): tert-butanol, ethanol, 2-chloroethanol.',
            options: [
              '2-chloroethanol < ethanol < tert-butanol',
              'tert-butanol < ethanol < 2-chloroethanol',
              'ethanol < tert-butanol < 2-chloroethanol',
              'tert-butanol < 2-chloroethanol < ethanol'
            ],
            correctAnswer: 1,
            explanation: 'tert-Butanol (pKa ~18) is weakest: electron-donating alkyl groups destabilize the alkoxide. Ethanol is intermediate (~16). 2-Chloroethanol (~14) is strongest because chlorine withdraws electron density inductively, stabilizing the conjugate base.'
          },
          {
            question: 'On the acidity ladder, where does a typical alcohol ($\\text{p}K_\\text{a}\\approx 16$–$18$) sit relative to water ($\\approx 15.7$) and a terminal alkyne ($\\approx 25$)?',
            options: [
              'More acidic than both water and the alkyne',
              'Slightly less acidic than water but much more acidic than the terminal alkyne',
              'Less acidic than the terminal alkyne',
              'Identical in acidity to water'
            ],
            correctAnswer: 1,
            explanation: 'A simple alcohol is a slightly weaker acid than water and far stronger than a terminal alkyne. This ordering (alkyne < ammonia < alcohol ~ water) governs which bases can deprotonate which, a recurring theme in alkoxide chemistry.'
          }
        ]
      }
    }
  ]
}
