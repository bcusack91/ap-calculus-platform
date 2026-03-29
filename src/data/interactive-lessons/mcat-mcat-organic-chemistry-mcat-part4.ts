export const mcatOrgChemPart4Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc4-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 4 of 7 — Carboxylic Acid Derivatives**

### Reactivity Order (most reactive → least)

$$\\text{Acid halide} > \\text{Anhydride} > \\text{Ester} > \\text{Amide} > \\text{Carboxylate}$$

### Why? The better the leaving group, the more reactive.

- Acid halide: Cl$^-$ is excellent leaving group
- Amide: NH$_2^-$ is terrible leaving group → most stable

### Key Interconversions

- Acid halide + ROH → Ester
- Acid halide + RNH$_2$ → Amide (how peptide bonds form in lab!)
- Ester + H$_2$O (acid/base) → Carboxylic acid + ROH (hydrolysis)
- Ester + NaOH → Carboxylate + ROH (saponification = soap making!)

### Biochemistry Connection

Thioester (CoA derivatives) are key metabolic intermediates — more reactive than regular esters due to weak C-S bond.

### Core Mechanistic Pattern

Most derivative reactions proceed through:

1. Nucleophilic attack on carbonyl carbon
2. Tetrahedral intermediate formation
3. Collapse and leaving-group departure

The best leaving group generally determines the direction and feasibility of interconversion.`
    },
    {
      id: 'oc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Carboxylic Acid Derivatives** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which carboxylic acid derivative is LEAST reactive toward nucleophilic acyl substitution?`,
            options: [`Amide`, `Acid chloride`, `Ester`, `Anhydride`],
            correctAnswer: 0,
            explanation: `Amides are least reactive because $\\text{NH}_2^-$ is a very poor leaving group. Also, nitrogen donates electrons into the carbonyl via resonance, reducing electrophilicity.`
          },
          {
            question: `Base hydrolysis of an ester (saponification) produces:`,
            options: [`Carboxylate + alcohol`, `Carboxylic acid + alcohol`, `Amide + water`, `Acid chloride + alcohol`],
            correctAnswer: 0,
            explanation: `Under basic conditions, ester hydrolysis yields a carboxylate salt and alcohol. Acid workup can protonate the carboxylate afterward.`
          },
          {
            question: `Which derivative is most electrophilic at the carbonyl carbon?`,
            options: [`Amide`, `Ester`, `Anhydride`, `Acid chloride`],
            correctAnswer: 3,
            explanation: `Acid chlorides are most reactive because chloride is a very good leaving group and provides less resonance stabilization than amides/esters.`
          }
        ]
      }
    },
    {
      id: 'oc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Reactivity of acid derivatives: halide > anhydride > ester > amide
- Saponification = base hydrolysis of an ester → soap (carboxylate salt)
- Thioesters (e.g., acetyl-CoA) are biologically activated intermediates
- Peptide bond = amide bond — resistant to hydrolysis (needs enzymes)
- Reaction prediction improves if you compare leaving-group quality first.`
    },
    {
      id: 'oc4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Carboxylic Acid Derivatives

<details>
<summary><b>Example 1: Predict nucleophilic acyl substitution from reactivity ordering</b></summary>

**Question:** Compare the reactivity of these compounds toward nucleophilic attack:
<pre>
(A) CH₃-C(=O)-Cl        (Acid chloride)
(B) CH₃-C(=O)-O-C(=O)-CH₃  (Acetic anhydride)
(C) CH₃-C(=O)-OCH₃       (Methyl ester)
(D) CH₃-C(=O)-NH₂        (Primary amide)
</pre>

**Solution**:
1. **Leaving group quality comparison**:
   - (A) Cl⁻ = excellent leaving group → most reactive
   - (B) CH₃COO⁻ = good leaving group (stabilized by acetyl C=O) → 2nd most reactive
   - (C) CH₃O⁻ = moderate leaving group → less reactive than B
   - (D) NH₂⁻ = terrible leaving group (basic) → least reactive

2. **Resonance effects** (secondary factor):
   - (D) NH₂ donates electron density to C=O, reducing electrophilicity
   - (A) Cl is electron-withdrawing by induction, increasing C=O electrophilicity

3. **Reactivity order**: **(A) > (B) > (C) > (D)**

**MCAT Strategy**: If you forget the exact order, remember: the better the leaving group, the more reactive. Cl > O-C(=O) > O-alkyl > NH₂.
</details>

<details>
<summary><b>Example 2: Ester to amide transformation via nucleophilic acyl substitution</b></summary>

**Question:** Methyl acetate (CH₃COOCH₃) reacts with excess aniline (C₆H₅NH₂) to form an amide. Show the product and explain why the ester is displaced:
<pre>
CH₃-C(=O)-OCH₃  +  C₆H₅NH₂  →  ?
</pre>

**Solution**:
1. **Nucleophilic acyl substitution mechanism**:
   - Aniline (nucleophile) attacks the ester carbonyl
   - Tetrahedral intermediate forms
   - Methoxide (CH₃O⁻) is a weaker leaving group than aniline is as a nucleophile
   - But we must compare: Which is the better leaving group?
   
2. **Leaving group comparison**: 
   - CH₃O⁻ pKₐ(conjugate acid) ≈ 15 (methanol) → decent leaving group
   - NH₂⁻ pKₐ(conjugate acid) ≈ 35 (ammonia) → terrible leaving group
   
3. **Why does the ester react?**
   - Aniline is a strong nucleophile (aromatic amine with lone pair on N)
   - Although NH₂⁻ is a poor leaving group, the ester is reactive enough
   - Once the amide forms, it is **resistant to further reaction** (poor leaving group protects it)

4. **Product**: **CH₃-C(=O)-NH-C₆H₅** (N-phenylacetamide or *N*-acetylaniline)

**Biochemistry connection**: Peptides are made this way in lab (activating carboxylic acids), and the resulting amide bonds resist hydrolysis because NH₂⁻ is a terrible leaving group. This stability is why enzymes are required to break peptide bonds in the body.

**MCAT Strategy**: Ester → Amide is thermodynamically favorable because the resulting amide is so unreactive (stability of product).
</details>

<details>
<summary><b>Example 3: Saponification (base hydrolysis) of an ester</b></summary>

**Question:** A triglyceride (fat with 3 ester groups) is treated with excess NaOH in ethanol (soap-making process). What happens?
<pre>
(Fat structure simplified as R-C(=O)-O-CH₂-CH(OH)-CH₂-O-C(=O)-R')
        (ester arms on triglyceride backbone)
</pre>

**Solution**:
1. **Reagent**: NaOH = strong base + nucleophile (OH⁻ is attacking)
2. **Mechanism**: Nucleophilic acyl substitution (ester hydrolysis)
   - OH⁻ attacks the ester C=O
   - Tetrahedral intermediate forms
   - Alkoxide (R-CH-O⁻) leaves via C-O bond cleavage
   - Carboxylate ion (RCOO⁻) is formed

3. **Stoichiometry**: 1 triglyceride + 3 NaOH → 1 glycerol (HOCH₂CHOH CH₂OH) + 3 sodium carboxylates (RCOONa, "soap")

4. **Products**:
   - **Glycerol**: 3-carbon backbone  (reusable for biodiesel)
   - **Sodium carboxylates**: Long-chain salts (e.g., sodium stearate C₁₇H₃₅COONa) = SOAP!
   - pH increases (basic product)

**Why saponification is irreversible**: 
- Carboxylate (RCOO⁻) is stabilized by delocalization
- Reverse reaction would require O² form attack at C=O (bad nucleophile)
- Very thermodynamically favorable

**MCAT Strategy**: Saponification = ester hydrolysis in basic conditions. Always produces carboxylate salt + alcohol. Often appears with triglycerides or phospholipids in biochemistry passages.
</details>

<details>
<summary><b>Example 4: Why amides are resistant to hydrolysis (the amide resonance effect)</b></summary>

**Question:** Explain why peptide bonds (amides) require enzymatic hydrolysis in the body, while esters can be hydrolyzed chemically. Use resonance to justify your answer.
<pre>
Peptide bond (amide):  R-C(=O)-NH-R'
Ester:                  R-C(=O)-O-R'
</pre>

**Solution**:
1. **Amide resonance**:
   - Nitrogen lone pair ON THE SAME ATOM as the C=O
   - N can donate electron density into π system of C=O
   - Two resonance forms:
     - Form 1: C=O with negative charge on O
     - Form 2: C-O with positive charge on N (C=N⁺)
   - Result: **Partial double-bond character in the C-N bond** (~40%)

2. **Consequence of amide resonance**:
   - C=O electrophilicity **decreases** (less polarized)
   - C-N bond becomes **stronger** (shorter, more rigid)
   - Nucleophile cannot easily attack C=O
   - Even if attack occurs, NH₂⁻ is an extremely poor leaving group

3. **Ester comparison**:
   - Oxygen lone pair is FARTHER from C=O (on neighboring carbon)
   - Resonance is WEAK
   - C=O remains strongly electrophilic
   - Chemical hydrolysis (mild acid/base) works fine

4. **Why peptides need enzymes**:
   - Proteases stabilize the tetrahedral intermediate
   - Enzymes position water & catalytic residues
   - Lower activation energy enough to make hydrolysis significant at body temp

**MCAT Strategy**: "Peptide bonds are resistant to hydrolysis" = amide resonance makes them resistant. This is a ***key concept*** linking organic chemistry to biochemistry. If a question asks "Why don't enzymes need help to break ester/phosphoester bonds?" → Esters are already labile, don't need enzyme stabilization.
</details>`
    }
  ]
};
