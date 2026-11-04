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
- **Kinetic enolate**: less substituted alpha carbon, formed fastest with a bulky strong base (LDA, lithium diisopropylamide) at low temperature — deprotonation is irreversible
- **Thermodynamic enolate**: more substituted (more stable C=C), favored with smaller/weaker bases at higher temperature where equilibration is possible

### The Aldol Reaction (the MCAT's favorite C-C bond)

1. Base removes an alpha H → enolate
2. The enolate's alpha carbon attacks the carbonyl carbon of **another** aldehyde/ketone
3. Product: a **beta-hydroxy carbonyl** (aldol)
4. Heating dehydrates it to the conjugated **enone** (alpha,beta-unsaturated carbonyl) — an aldol condensation: in base by **E1cb** (elimination through the enolate), in acid through the enol

The reverse reaction (**retro-aldol**) cleaves the bond between the alpha and beta carbons of a beta-hydroxy carbonyl. Aldolase runs exactly this in glycolysis: fructose-1,6-bisphosphate → two trioses.

### The Claisen Condensation

The ester version: an ester enolate attacks another ester and the alkoxide leaves (acyl substitution!), giving a **beta-ketoester** (e.g., 2 ethyl acetate → ethyl acetoacetate). The reaction is pulled forward by deprotonating the doubly activated alpha carbon ($pK_a \\approx 11$) of the product. Biology's version in reverse is thiolase chemistry; fatty-acid synthesis builds chains by Claisen-type condensations with malonyl-ACP (made from malonyl-CoA).

**Decarboxylation of beta-keto acids.** Hydrolyzing a beta-ketoester gives a beta-keto acid, which loses $CO_2$ on gentle heating through a cyclic six-membered transition state: the carboxyl H moves to the ketone oxygen as the C-C bond breaks, giving an enol that tautomerizes to the ketone (acetoacetic acid → acetone). Malonic acids decarboxylate the same way; an ordinary carboxylic acid, with no beta carbonyl to accept the H, does not.

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
            options: [`The alpha C-H bond is much longer`, `Oxygen inductively strengthens the C-H bond`, `The conjugate base delocalizes charge onto oxygen`, `The ketone can hydrogen bond with solvent`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Acidity tracks conjugate-base stability: the enolate spreads charge between the alpha carbon and the electronegative oxygen. With two flanking carbonyls the effect doubles and pKa falls to ~9-13. Bond length and H-bonding are not the operative factors.`
          },
          {
            question: `Keto and enol forms of acetone are best described as:`,
            options: [`Tautomers (constitutional isomers)`, `Resonance structures of one compound`, `Enantiomers (non-superimposable mirror images)`, `Conformers related by bond rotation`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Tautomerization moves atoms — a proton relocates from carbon to oxygen and the double bond migrates — so keto and enol are distinct constitutional isomers in equilibrium. Resonance forms differ only in electron placement, never atom positions. This distinction is a recurring MCAT trap.`
          },
          {
            question: `A solution of optically pure (R)-2-methylcyclohexanone in mildly basic water slowly loses its optical activity because:`,
            options: [`The ketone is hydrolyzed and ring-opened`, `Reversible enolization planarizes the stereocenter`, `Hydroxide substitutes at the alpha carbon with inversion`, `The molecule polymerizes through its carbonyl`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Deprotonation at the alpha stereocenter gives a planar, achiral enolate; reprotonation from either face is equally likely, so the sample racemizes over time. Any stereocenter bearing an acidic alpha H is configurationally unstable in acid or base — the same chemistry that epimerizes sugars.`
          },
          {
            question: `In the aldol addition between two molecules of acetaldehyde, the new carbon-carbon bond forms between:`,
            options: [`The carbonyl carbons of the two molecules`, `The alpha carbons of the two molecules`, `The oxygen of one molecule and the alpha carbon of the other`, `The enolate alpha carbon and the other carbonyl carbon`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The enolate is nucleophilic at its alpha carbon; the electrophile is the second molecule's carbonyl carbon. The product, 3-hydroxybutanal, is a beta-hydroxy aldehyde: OH on the beta carbon, carbonyl intact. Mapping which carbon attacks which is the whole game in aldol questions.`
          },
          {
            question: `A Claisen condensation differs from an aldol addition in that the Claisen's tetrahedral intermediate:`,
            options: [`Is protonated to give a stable beta-hydroxy ester`, `Expels alkoxide to give a beta-ketoester`, `Loses carbon dioxide to form a methyl ketone`, `Rearranges to an enamine before hydrolysis`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Esters carry a leaving group, so after the enolate adds, the intermediate collapses by ejecting alkoxide — acyl SUBSTITUTION, giving a beta-ketoester (2 ethyl acetate → ethyl acetoacetate). Aldehyde/ketone electrophiles have no leaving group, so the aldol stops at the addition (alkoxide → beta-hydroxy carbonyl). A beta-hydroxy ester would be the aldol-style outcome, which the leaving group prevents; losing $CO_2$ to a methyl ketone happens only later, after the beta-ketoester is hydrolyzed and heated; and no amine is present to form an enamine.`
          }
        ]
      }
    },
    {
      id: 'cnyl3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Alpha-Carbon Chemistry

**Problem 1.** Two molecules of propanal undergo base-catalyzed aldol addition, then dehydration on heating.

- **(a)** Which carbon attacks which?
- **(b)** What is the aldol product?
- **(c)** What does dehydration give, and what drives it?

**(a) Bond formation.** The enolate of propanal (its alpha carbon is C2) attacks the carbonyl carbon of the second propanal.

**(b) Aldol product.** **3-hydroxy-2-methylpentanal**. Count it: the nucleophile contributes C1-C2 (with the CH3 branch on C2); the electrophile contributes the OH-bearing C3 and the C4-C5 tail. The OH sits beta to the carbonyl, and the new C-C bond joins the alpha and beta carbons.

**(c) Condensation.** Dehydration removes the alpha H (C2) and the beta OH (C3) → **2-methyl-2-pentenal**, a conjugated alpha,beta-unsaturated aldehyde. Conjugation stabilizes the enal, and that is the payoff. Check answer choices for the beta-OH; distractors put it gamma or on the wrong fragment.

**Problem 2.** 2-Methylcyclohexanone is deprotonated in one flask by LDA (lithium diisopropylamide) at −78 °C and in another by NaOEt in ethanol at 25 °C.

- **(a)** Which two alpha sites can lose a proton?
- **(b)** Which enolate dominates with LDA in the cold?
- **(c)** Which enolate dominates with ethoxide at 25 °C?
- **(d)** Where does a later alkylation land?

**(a) Two sites.** C6 (a CH2, less substituted) and C2 (bears the methyl, more substituted).

**(b) LDA, −78 °C.** LDA is bulky and the conditions irreversible, so it removes a proton from the accessible C6 → the **kinetic enolate** (less substituted).

**(c) NaOEt, 25 °C.** Ethoxide permits reversible proton transfer, so equilibrium favors the more substituted C2 enolate (more stable alkene character) → the **thermodynamic enolate**.

**(d) Alkylation.** On whichever alpha carbon was deprotonated: C6 after LDA, C2 after ethoxide. LDA + cold = kinetic; small base + warm + protic = thermodynamic. The question is really asking which alpha carbon gets functionalized.

**Problem 3.** Aldolase cleaves fructose-1,6-bisphosphate (FBP), a ketose with its carbonyl at C2 and an OH on C4, into DHAP (dihydroxyacetone phosphate) and glyceraldehyde-3-phosphate (G3P).

- **(a)** Why is FBP a retro-aldol substrate?
- **(b)** Which bond breaks?
- **(c)** Which fragment becomes which product?
- **(d)** What electron sink does the enzyme use?

**(a) A beta-hydroxy carbonyl.** Counting from the C2 carbonyl, C3 is alpha and C4 is beta, and C4 carries an OH: the aldol pattern.

**(b) The alpha-beta bond.** Retro-aldol cleaves the bond between the alpha and beta carbons of a beta-hydroxy carbonyl: C3-C4.

**(c) Fragments.** C1-C3 keeps the carbonyl chemistry → DHAP (via the enolate/enamine intermediate); C4-C6 becomes the new aldehyde → G3P.

**(d) Schiff base.** Animal aldolases first form a lysine Schiff base (iminium) with the C2 carbonyl, an electron sink standing in for the enolate's oxygen. "Enzyme forms a Schiff base, then cleaves a C-C bond" = retro-aldol.

**Problem 4.** 2-Cyclohexenone reacts separately with $CH_3MgBr$, with the sodium enolate of diethyl malonate, and with a thiol under mild base.

- **(a)** What does the Grignard give?
- **(b)** What does the malonate enolate give?
- **(c)** What does the thiol give?
- **(d)** Why do the 1,4 products keep their C=O?

**(a) Grignard.** Grignards are hard, powerful nucleophiles → **1,2-addition** at the carbonyl → 1-methyl-2-cyclohexen-1-ol (after workup).

**(b) Malonate enolate.** Soft and stabilized → **1,4-conjugate (Michael) addition** at the beta carbon → a 3-substituted cyclohexanone after tautomerization.

**(c) Thiol.** Thiols/thiolates are classic soft nucleophiles → conjugate addition → a 3-(alkylthio)cyclohexanone, the chemistry by which glutathione detoxifies Michael-acceptor electrophiles in cells.

**(d) Tautomerization.** The enol formed on beta-attack tautomerizes back to the ketone, so 1,4 products keep the C=O. Sort the nucleophile first: soft (enolates, amines, thiols; cyanide can give either) → 1,4; hard (RLi, RMgX, LiAlH4) → 1,2.`
    },
    {
      id: 'cnyl3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Acidic alpha hydrogens.** An alpha C-H has $pK_a \\approx 20$ (9–13 between two C=O) because the enolate puts charge on oxygen.
- **Enolates attack through carbon.** Oxygen holds more of the charge, but the alpha carbon is the usual nucleophilic site.
- **Kinetic vs thermodynamic.** LDA in the cold gives the less substituted enolate; equilibrating conditions give the more substituted one.
- **Aldol and Claisen.** An enolate attacks a C=O: aldehydes and ketones give beta-hydroxy carbonyls, esters give beta-ketoesters.

**Common traps**

- **Calling tautomers resonance.** Resonance forms move only electrons; keto and enol forms move a proton, so they are distinct isomers.
- **Stable alpha stereocenters.** A stereocenter bearing an alpha H racemizes in acid or base through the planar enol or enolate.
- **Misplacing the aldol OH.** The aldol OH sits on the beta carbon, and the new C-C bond joins the alpha and beta carbons.
- **One site on an enone.** Hard nucleophiles add 1,2 at the carbonyl carbon; soft, stabilized ones add 1,4 at the beta carbon.`
    }
  ]
};
