export const mcatOrgChemPart3Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc3-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 3 of 7 — Carbonyl Chemistry**

### Carbonyl Reactivity

The $C=O$ is polar: carbon is electrophilic (attacked by nucleophiles).

### Aldol Condensation

$\\text{Enolate} + \\text{Aldehyde} \\to \\beta\\text{-hydroxy carbonyl} \\xrightarrow{\\text{heat}} \\alpha,\\beta\\text{-unsaturated carbonyl}$

### Key Carbonyl Reactions

| Reaction | Produces | Mechanism |
|----------|----------|-----------|
| Reduction of aldehyde | 1° alcohol | NaBH$_4$ or LiAlH$_4$ |
| Reduction of ketone | 2° alcohol | NaBH$_4$ or LiAlH$_4$ |
| Reduction of carboxylic acid | 1° alcohol | LiAlH$_4$ only (stronger) |
| Oxidation of 1° alcohol | Aldehyde (PCC) or carboxylic acid (Jones) | Depends on reagent |
| Oxidation of 2° alcohol | Ketone | PCC, Jones, or K$_2$Cr$_2$O$_7$ |
| Fischer esterification | Ester | Acid + Alcohol + H$^+$ catalyst |

### MCAT High Yield: Reducing Agents

- **NaBH$_4$**: mild, reduces aldehydes and ketones only
- **LiAlH$_4$**: strong, reduces ALL carbonyls (including esters, carboxylic acids, amides)

### Nucleophilic Addition vs Acyl Substitution

- Aldehydes/ketones: nucleophilic addition (no leaving group on carbonyl carbon)
- Carboxylic acid derivatives: nucleophilic acyl substitution (tetrahedral intermediate + leaving group)

Recognizing whether a leaving group is present is often enough to choose the mechanism class.`
    },
    {
      id: 'oc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Carbonyl Chemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `Treatment of a carboxylic acid with $\\text{NaBH}_4$ gives:`,
            options: [`No reaction (NaBH$_4$ is too mild)`, `A primary alcohol`, `An aldehyde`, `An ester`],
            correctAnswer: 0,
            explanation: `$\\text{NaBH}_4$ cannot reduce carboxylic acids or esters. You need $\\text{LiAlH}_4$ for those. NaBH$_4$ only reduces aldehydes and ketones.`
          },
          {
            question: `PCC (pyridinium chlorochromate) oxidation of a primary alcohol gives:`,
            options: [`An aldehyde (mild oxidation stops here)`, `A carboxylic acid`, `A ketone`, `No reaction`],
            correctAnswer: 0,
            explanation: `PCC is a mild oxidizing agent that converts 1° ROH to an aldehyde without over-oxidation. Jones reagent (CrO$_3$/H$_2$SO$_4$) would go all the way to carboxylic acid.`
          },
          {
            question: `Which reagent most reliably reduces an ester to a primary alcohol?`,
            options: [`NaBH$_4$`, `LiAlH$_4$`, `PCC`, `H$_2$SO$_4$`],
            correctAnswer: 1,
            explanation: `LiAlH$_4$ is strong enough to reduce esters and carboxylic acids to primary alcohols; NaBH$_4$ is too mild.`
          },
          {
            question: `A ketone reacting with a nucleophile generally proceeds by:`,
            options: [`Electrophilic aromatic substitution`, `Nucleophilic addition`, `Radical substitution`, `E2 elimination`],
            correctAnswer: 1,
            explanation: `Because ketones lack a leaving group on the carbonyl carbon, the dominant pattern is nucleophilic addition.`
          },
          {
            question: `In an aldol condensation, the nucleophile that attacks a second carbonyl is the:`,
            options: [`Enolate, formed by removing an $\\alpha$-hydrogen`, `Carbonyl oxygen lone pair`, `A hydride from $\\text{NaBH}_4$`, `A halide ion`],
            correctAnswer: 0,
            explanation: `A base removes an acidic $\\alpha$-hydrogen (adjacent to C=O) to generate a resonance-stabilized enolate. The nucleophilic $\\alpha$-carbon then adds to the electrophilic carbonyl carbon of another molecule, forming a $\\beta$-hydroxy carbonyl that can dehydrate to an $\\alpha,\\beta$-unsaturated product.`
          },
          {
            question: `An aldehyde and a ketone of similar size are each attacked by the same nucleophile. The aldehyde generally reacts faster because:`,
            options: [`It is less sterically hindered and more electrophilic (only one alkyl group donates electron density)`, `It has a leaving group the ketone lacks`, `It is aromatic`, `Its carbonyl carbon is negatively charged`],
            correctAnswer: 0,
            explanation: `Aldehydes have one H and one R group on the carbonyl carbon, whereas ketones have two R groups. The extra alkyl group in a ketone both donates electron density (lowering electrophilicity) and adds steric hindrance, so aldehydes undergo nucleophilic addition more readily.`
          }
        ]
      }
    },
    {
      id: 'oc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- NaBH$_4$: mild (aldehydes/ketones only). LiAlH$_4$: strong (everything).
- PCC: mild oxidation (1° ROH → aldehyde). Jones/CrO$_3$: full oxidation.
- Fischer esterification: carboxylic acid + alcohol + acid catalyst → ester + water
- Amide bonds (peptides) are resistant to hydrolysis — that's why enzymes are needed!
- Ask first: addition (aldehyde/ketone) or acyl substitution (derivative with leaving group)?`
    },
    {
      id: 'oc3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Carbonyl Chemistry

<details>
<summary><b>Example 1: Choose the right reducing agent</b></summary>

**Question:** You want to reduce ONLY the ketone in this compound without touching the ester:
<pre>
       O           O
       ‖           ‖
   $CH_{3}-C-CH_{2}-C-OCH_{3}$
</pre>
Which reagent should you use?

**Options**: $NaBH_{4}$ / $LiAlH_{4}$ / $H_{2}SO_{4}$ / Zn/HCl

**Solution**:
1. Identify functional groups: ketone (left C=O) and ester (right C=O with $OCH_{3}$)
2. Goal: Reduce only ketone to 2° alcohol
3. **$NaBH_{4}$**: Reduces aldehydes & ketones → leaves esters alone ✓
4. **$LiAlH_{4}$**: Reduces BOTH ketones AND esters → not selective
5. **$H_{2}SO_{4}$**: Catalyst for esterification, not reduction
6. **Zn/HCl**: Wolff-Kishner reduction (specific for ketones to alkanes)

**Answer**: **$NaBH_{4}$** (selective for ketone)

**MCAT Strategy**: Always memorize: $NaBH_{4}$ = selective for aldehydes/ketones. $LiAlH_{4}$ = no selectivity (overkill). This question pattern appears every 3-4 years on the MCAT.
</details>

<details>
<summary><b>Example 2: Oxidation level determines reagent choice</b></summary>

**Question:** Start with 1-pentanol. You want to make pentanal (not pentanoic acid). Which oxidizing agent is correct?
<pre>
$CH_{3}CH_{2}CH_{2}CH_{2}-CH_{2}-OH$  →  $CH_{3}CH_{2}CH_{2}CH_{2}-CHO$
   1-pentanol            pentanal
</pre>

**Solution**:
1. **Target**: 1° alcohol → aldehyde (oxidation level +1)
2. **Wrong**: $Jones/CrO_{3}$ (over-oxidizes to carboxylic acid)
3. **Wrong**: $KMnO_{4}$ (too strong, over-oxidizes)
4. **Correct**: **PCC** (pyridinium chlorochromate) — stops at aldehyde
5. Alternative: DMP (Dess-Martin Periodinane), IBX, Swern oxidation — all work

**Mechanism**:
- Mild oxidation (PCC) → Aldehyde
- Strong oxidation (Jones) → Carboxylic acid

**Product**: Pentanal $(CH_{3}CH_{2}CH_{2}CH_{2}CHO)$ with no over-oxidation

**MCAT Strategy**: "1° alcohol needs to be an aldehyde" → **PCC is your friend**. Practice this memorization: 1° → aldehyde (PCC), 2° → ketone (any oxidizing agent), carboxylic acid (strong oxidation or Jones).
</details>

<details>
<summary><b>Example 3: Predict aldol condensation product</b></summary>

**Question:** What is the major product when acetaldehyde $(CH_{3}CHO)$ undergoes an aldol condensation followed by dehydration?
<pre>
       O                    O
       ‖                    ‖
    $CH_{3}-C-H$  (aldehyde with α-H's on the methyl)
</pre>

**Solution**:
1. **Enolate formation**: α-H on acetaldehyde deprotonated by base → enolate ($CH_{2}$=$CHO^{-}$)
2. **Nucleophilic attack**: Enolate attacks the carbonyl carbon of a second acetaldehyde molecule
3. **Aldol adduct**: 
   <pre>
   $CH_{3}-CHOH-CH_{2}-CHO$
   (3-hydroxybutanal / aldol adduct)
   </pre>
4. **Dehydration** (heat + acid): Water leaves from aldol adduct
5. **Final product**: **2-butenal (crotonaldehyde)**, $CH_{3}-CH$=CH-CHO (α,β-unsaturated aldehyde)

**Key**: The double bond forms between the α-carbon and the carbonyl-bearing carbon

**MCAT Strategy**: Aldol condensations create a new C-C bond and introduce an α,β-unsaturated carbonyl (which stabilizes via conjugation). The product is usually smaller molecules (acetaldehyde) condensing to form crotonaldehyde.
</details>

<details>
<summary><b>Example 4: Nucleophilic addition vs. acyl substitution mechanism choice</b></summary>

**Question:** Predict whether acetone $(CH_{3}COCH_{3})$ reacts via nucleophilic addition (NA) or nucleophilic acyl substitution (NAS) when treated with methylamine $(CH_{3}NH_{2})$:

**Solution**:
1. **Structure of acetone**: $CH_3-C(=O)-CH_3$
2. **Key question**: Is there a leaving group on the carbonyl carbon?
   - CHO carbon is bonded to: C, C, O (no leaving group like Cl, $OCH_{3}$, OAc, etc.)
3. **Answer**: **Nucleophilic addition** (NA)
4. **Mechanism**:
   - Methylamine acts as nucleophile, attacks C=O
   - Intermediate: C-OH tetrahedral intermediate
   - Lone pair on N attacks C, OH leaves
   - Product: **Imine** ($CH_{3}-N$=$C(CH_{3})_{2}$ or iminium salt initially)
5. **Final product**: N-methylpropan-2-imine or acetone methyl imine

**Compare to acyl substitution**:
<pre>
If you had: $CH_{3}-C$(=O)$-OCH_{3}$  (methyl ester — HAS leaving group $OCH_{3}$)
Then: Nucleophilic ACYL substitution occurs
Product: $CH_{3}-C$(=O)$-NHCH_{3}$ (amide, with $OCH_{3}$ leaving as methoxide)
</pre>

**MCAT Strategy**: Ketones/aldehydes → NA (no leaving group). Esters/acid halides/anhydrides → NAS (leaving group present). This is a fundamental distinction tested every year.
</details>`
    }
  ]
};
