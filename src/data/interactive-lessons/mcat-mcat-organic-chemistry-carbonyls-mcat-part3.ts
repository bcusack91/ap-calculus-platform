export const mcatOchemCarbonylsPart3Data = {
  topicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  sections: [
    {
      id: 'cnyl3-intro',
      type: 'text' as const,
      content: `# Carbonyl Chemistry for the MCAT

**Part 3 of 4 — Enols, Enolates & Alpha-Carbon Chemistry**

So far nucleophiles attacked the carbonyl carbon. This part flips the polarity: the carbon **next to** the carbonyl (the alpha carbon) can become the **nucleophile**.

### Why Alpha Hydrogens Are Acidic

A C-H alpha to a carbonyl has $pK_a \\approx 20$ (vs ~50 for a plain alkane) because deprotonation gives an **enolate** whose negative charge is delocalized onto oxygen. With TWO flanking carbonyls (1,3-dicarbonyls like acetylacetone or malonic esters), $pK_a$ drops to ~9-13 — acidic enough for hydroxide or alkoxide to deprotonate essentially completely.

- The enolate is an **ambident nucleophile**: oxygen carries more charge, but **carbon is the usual site of attack** (C-alkylation, C-C bond formation)
- **Keto-enol tautomerism**: even without base, carbonyls equilibrate with a trace of enol (C=C-OH) via acid or base catalysis. Tautomers are **constitutional isomers** (atoms move — a proton relocates and the double bond shifts), NOT resonance forms
- Consequences: alpha carbons **racemize** (a stereocenter alpha to C=O epimerizes via the planar enol), and alpha halogenation occurs through the enol/enolate

### Kinetic vs Thermodynamic Enolates

Unsymmetrical ketones can enolize toward either side:
- **Kinetic enolate**: less substituted alpha carbon, formed fastest with a bulky strong base (LDA) at low temperature — deprotonation is irreversible
- **Thermodynamic enolate**: more substituted (more stable C=C), favored with smaller/weaker bases at higher temperature where equilibration is possible

### The Aldol Reaction (the MCAT's favorite C-C bond)

1. Base removes an alpha H → enolate
2. The enolate's alpha carbon attacks the carbonyl carbon of **another** aldehyde/ketone
3. Product: a **beta-hydroxy carbonyl** (aldol)
4. Heat/acid or base → **E1cb dehydration** to the conjugated **enone** (alpha,beta-unsaturated carbonyl) — an aldol condensation

The reverse reaction (**retro-aldol**) cleaves the bond between the alpha and beta carbons of a beta-hydroxy carbonyl. Aldolase runs exactly this in glycolysis: fructose-1,6-bisphosphate → two trioses.

### The Claisen Condensation

The ester version: an ester enolate attacks another ester and the alkoxide leaves (acyl substitution!), giving a **beta-ketoester** (e.g., 2 ethyl acetate → ethyl acetoacetate). The reaction is pulled forward by deprotonating the doubly activated alpha carbon ($pK_a \\approx 11$) of the product. Biology's version in reverse is thiolase chemistry; fatty-acid synthesis builds chains by Claisen-type condensations with malonyl-CoA.

### Conjugate (Michael) Addition

Alpha,beta-unsaturated carbonyls are electrophilic at TWO sites: the carbonyl carbon (**1,2-addition**, favored by strong/hard nucleophiles like Grignards and hydride) and the beta carbon (**1,4- or conjugate addition**, favored by stabilized soft nucleophiles like enolates, amines, and thiols). Glutathione and cysteine residues trap Michael acceptors in vivo.`
    },
    {
      id: 'cnyl3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Enolate Chemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `The alpha hydrogens of a ketone ($pK_a$ ~20) are vastly more acidic than those of an alkane ($pK_a$ ~50) because:`,
            options: [`The alpha C-H bond is longer`, `Oxygen inductively strengthens the C-H bond`, `The conjugate base delocalizes its negative charge onto the carbonyl oxygen`, `The ketone can hydrogen bond with solvent`],
            correctAnswer: 2,
            explanation: `Acidity tracks conjugate-base stability: the enolate spreads charge between the alpha carbon and the electronegative oxygen. With two flanking carbonyls the effect doubles and pKa falls to ~9-13. Bond length and H-bonding are not the operative factors.`
          },
          {
            question: `Keto and enol forms of acetone are best described as:`,
            options: [`Constitutional isomers interconverting by proton transfer (tautomers)`, `Resonance structures of one compound`, `Enantiomers`, `Conformers related by bond rotation`],
            correctAnswer: 0,
            explanation: `Tautomerization moves atoms — a proton relocates from carbon to oxygen and the double bond migrates — so keto and enol are distinct constitutional isomers in equilibrium. Resonance forms differ only in electron placement, never atom positions. This distinction is a recurring MCAT trap.`
          },
          {
            question: `A solution of optically pure (R)-2-methylcyclohexanone in mildly basic water slowly loses its optical activity because:`,
            options: [`The C=O bond hydrolyzes`, `Reversible enolization makes the alpha stereocenter planar, and reprotonation occurs on either face (racemization)`, `Hydroxide substitutes at the alpha carbon with inversion`, `The molecule polymerizes`],
            correctAnswer: 1,
            explanation: `Deprotonation at the alpha stereocenter gives a planar, achiral enolate; reprotonation from either face is equally likely, so the sample racemizes over time. Any stereocenter bearing an acidic alpha H is configurationally unstable in acid or base — the same chemistry that epimerizes sugars.`
          },
          {
            question: `In the aldol addition between two molecules of acetaldehyde, the new carbon-carbon bond forms between:`,
            options: [`The two carbonyl carbons`, `The two alpha carbons`, `The oxygen of one molecule and the alpha carbon of the other`, `The alpha carbon of the enolate and the carbonyl carbon of the other molecule`],
            correctAnswer: 3,
            explanation: `The enolate is nucleophilic at its alpha carbon; the electrophile is the second molecule's carbonyl carbon. The product, 3-hydroxybutanal, is a beta-hydroxy aldehyde: OH on the beta carbon, carbonyl intact. Mapping which carbon attacks which is the whole game in aldol questions.`
          },
          {
            question: `A Claisen condensation differs from an aldol addition in that the Claisen's tetrahedral intermediate:`,
            options: [`Is protonated to give a stable beta-hydroxy ester`, `Expels an alkoxide leaving group, restoring the C=O and giving a beta-ketoester`, `Loses carbon dioxide`, `Rearranges to an enamine`],
            correctAnswer: 1,
            explanation: `Esters carry a leaving group, so after the enolate adds, the intermediate collapses by ejecting alkoxide — acyl SUBSTITUTION, giving a beta-ketoester (2 ethyl acetate → ethyl acetoacetate). Aldehyde/ketone electrophiles have no leaving group, so the aldol stops at the addition (alkoxide → beta-hydroxy carbonyl).`
          }
        ]
      }
    },
    {
      id: 'cnyl3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Alpha C-H pKa ~20 (one C=O) or ~9-13 (1,3-dicarbonyl); enolate charge shared C/O, attacks through carbon
- Tautomers = constitutional isomers (proton moves), never resonance forms; enolization racemizes/epimerizes alpha stereocenters
- Kinetic enolate: LDA, cold, less substituted; thermodynamic: equilibrating conditions, more substituted
- Aldol: enolate alpha-C attacks a carbonyl C → beta-hydroxy carbonyl → dehydrate to conjugated enone; retro-aldol is aldolase's glycolytic step
- Claisen: same attack on an ESTER expels alkoxide → beta-ketoester; soft/stabilized nucleophiles pick 1,4 (Michael) addition on enones, hard ones pick 1,2`
    },
    {
      id: 'cnyl3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Alpha-Carbon Chemistry

<details>
<summary><b>Example 1: Draw the aldol product, then condense it</b></summary>

**Question:** Two molecules of propanal undergo base-catalyzed aldol addition, then dehydration on heating. Give both products.

**Solution:**
1. Enolate of propanal (alpha carbon = C2) attacks the carbonyl carbon of the second propanal
2. Aldol product: **3-hydroxy-2-methylpentanal** — count it: the nucleophile contributes C1-C2 (with the CH3 branch on C2), the electrophile contributes the OH-bearing C3 and the C4-C5 tail
3. Dehydration removes the alpha H (C2) and the beta OH (C3) → **2-methyl-2-pentenal**, a conjugated enone
4. The conjugated C=C-C=O is the thermodynamic payoff that drives condensation

**MCAT Strategy:** In ANY aldol product, the OH sits beta to the carbonyl and the new C-C bond is alpha-to-beta. Verify answer choices by finding that beta-OH; distractors put the OH gamma or on the wrong fragment.
</details>

<details>
<summary><b>Example 2: Recognize a retro-aldol in glycolysis</b></summary>

**Question:** Aldolase cleaves fructose-1,6-bisphosphate into DHAP and glyceraldehyde-3-phosphate. Show this is a retro-aldol and predict which bond breaks.

**Solution:**
1. F1,6BP is a ketose: C2 carbonyl, with an OH on C4 — check: OH beta to the carbonyl counting C3 alpha, C4 beta
2. Retro-aldol cleaves the alpha-beta bond (C3-C4) of a beta-hydroxy carbonyl
3. Fragments: C1-C3 keeps the carbonyl chemistry → DHAP (via the enolate/enamine intermediate); C4-C6 becomes the new aldehyde → G3P
4. Class I aldolases form a lysine Schiff base (iminium) with the C2 carbonyl first — an electron sink standing in for the enolate's oxygen

**MCAT Strategy:** "Enzyme forms a Schiff base with substrate, then cleaves a C-C bond" = retro-aldol with an iminium electron sink. Translate biochem passage language back to Part 1 and Part 3 mechanisms.
</details>

<details>
<summary><b>Example 3: Kinetic vs thermodynamic control</b></summary>

**Question:** 2-Methylcyclohexanone is deprotonated (a) by LDA at -78 C, (b) by NaOEt in ethanol at 25 C. Which enolate dominates in each case?

**Solution:**
1. The ketone has two alpha sites: C6 (CH2, less substituted) and C2 (bears the methyl, more substituted)
2. (a) LDA is bulky and the conditions irreversible → deprotonation at the accessible C6 → **kinetic enolate**
3. (b) Ethoxide permits reversible proton transfer → equilibrium favors the more substituted C2 enolate (more stable alkene character) → **thermodynamic enolate**
4. Subsequent alkylation lands on whichever alpha carbon was deprotonated

**MCAT Strategy:** LDA + cold = kinetic (less substituted); small base + warm + protic = thermodynamic (more substituted). The question is really asking which alpha carbon gets functionalized.
</details>

<details>
<summary><b>Example 4: 1,2 vs 1,4 addition</b></summary>

**Question:** Predict the major products when 2-cyclohexenone reacts with (a) $CH_3MgBr$, (b) the sodium enolate of diethyl malonate, (c) a thiol under mild base.

**Solution:**
1. (a) Grignards are hard, powerful nucleophiles → **1,2-addition** at the carbonyl → 1-methyl-2-cyclohexen-1-ol (after workup)
2. (b) Malonate enolate is soft and stabilized → **1,4-conjugate (Michael) addition** at the beta carbon → 3-substituted cyclohexanone after tautomerization
3. (c) Thiols/thiolates are classic soft nucleophiles → conjugate addition — the chemistry by which glutathione detoxifies Michael-acceptor electrophiles in cells
4. The enol formed on beta-attack tautomerizes back to the ketone, so 1,4 products keep the C=O

**MCAT Strategy:** Sort the nucleophile first: stabilized/soft (enolates, amines, thiols, cyanide) → 1,4; strong/hard (RLi, RMgX, LiAlH4) → 1,2. Passages on drug toxicity via glutathione conjugation are Michael additions in costume.
</details>`
    }
  ]
};
