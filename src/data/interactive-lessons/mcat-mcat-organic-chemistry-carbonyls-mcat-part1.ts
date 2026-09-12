export const mcatOchemCarbonylsPart1Data = {
  topicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  sections: [
    {
      id: 'cnyl1-intro',
      type: 'text' as const,
      content: `# Carbonyl Chemistry for the MCAT

**Part 1 of 4 — The Carbonyl Blueprint & Nucleophilic Addition**

The C=O group runs most of MCAT organic chemistry. One electronic picture explains everything: oxygen is more electronegative than carbon, and a resonance form puts a full positive charge on carbon. So the carbonyl carbon is an **electrophile** (attacked by nucleophiles), the oxygen is weakly basic, and the **alpha hydrogens** are acidic (Part 3).

### Two Master Mechanisms

| Substrate | Mechanism | Why |
|-----------|-----------|-----|
| Aldehydes & ketones | **Nucleophilic addition** — Nu adds, C goes sp2 → sp3, O picks up the negative charge | No leaving group on the carbonyl carbon |
| Acid derivatives (Part 2) | **Nucleophilic acyl substitution** — Nu adds, then the leaving group is expelled and C=O reforms | A leaving group IS attached |

### Aldehyde vs Ketone Reactivity

Aldehydes are **more reactive** than ketones toward addition, for two reasons:
- **Sterics**: one H instead of a second alkyl group leaves the carbonyl carbon more open
- **Electronics**: only one electron-donating alkyl group, so the carbon is more electrophilic

### The Addition Catalog

- **Water** → hydrate (gem-diol). Usually unfavorable; significant only for very reactive carbonyls (formaldehyde is >99% hydrated in water)
- **One alcohol** (acid catalyst) → **hemiacetal** (OH + OR on the same carbon); a **second alcohol** → **acetal** (two OR groups) plus water. Acetals are stable to base but hydrolyze in aqueous acid — they serve as carbonyl **protecting groups**, and sugar ring forms are intramolecular hemiacetals
- **Primary amine** → carbinolamine → loses water → **imine** (Schiff base, C=N); fastest near pH 4.5-5 (enough acid to protonate the leaving OH, not so much that the amine is fully protonated)
- **Secondary amine** → no N-H left after addition, so elimination goes toward the alpha carbon → **enamine** (N-C=C)
- **Cyanide** → **cyanohydrin** (OH + CN)
- **Hydride** (NaBH4, LiAlH4) → alcohol: aldehydes give **primary** alcohols, ketones give **secondary** alcohols
- **Grignard reagents** (RMgX, a carbanion equivalent) → alkoxide → alcohol on workup: formaldehyde → 1° alcohol, other aldehydes → 2°, ketones → 3°

### Acid and Base Catalysis of Addition

Acid catalysis **activates the carbonyl** (protonating O makes C more electrophilic, letting weak nucleophiles like alcohols attack). Base catalysis **activates the nucleophile** (deprotonating it into a stronger attacker). Both lower the barrier of the same addition step from opposite ends.`
    },
    {
      id: 'cnyl1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nucleophilic Addition** 🎯`,
      exercise: {
        questions: [
          {
            question: `Aldehydes undergo nucleophilic addition faster than ketones because:`,
            options: [`The aldehyde C=O bond is weaker`, `Aldehydes are better leaving groups`, `Aldehyde oxygens are more basic`, `The aldehyde carbonyl carbon is less hindered and more electrophilic, having only one electron-donating alkyl group`],
            correctAnswer: 3,
            explanation: `Both effects favor the aldehyde: one alkyl group instead of two means less steric blockage of the attack trajectory AND less electron donation into the electrophilic carbon. Neither compound has a leaving group, and basicity of oxygen is not the discriminating factor.`
          },
          {
            question: `A carbon bearing one -OH and one -OR group on the same carbon (with an H or R filling the remaining bonds) is called:`,
            options: [`An acetal`, `A hemiacetal`, `A gem-diol`, `An enol`],
            correctAnswer: 1,
            explanation: `OH + OR on one carbon = hemiacetal, the product of a single alcohol adding to an aldehyde or ketone. Two OR groups = acetal; two OH groups = gem-diol (hydrate); an enol is C=C-OH. Ring-form sugars are cyclic hemiacetals — the anomeric carbon carries the OH and ring OR.`
          },
          {
            question: `Which reagent converts a ketone into a tertiary alcohol?`,
            options: [`$CH_3MgBr$, followed by aqueous workup`, `$NaBH_4$ in methanol`, `$H_2O$ with catalytic acid`, `HCN`],
            correctAnswer: 0,
            explanation: `A Grignard reagent delivers a carbanion-like R group; adding a new C-C bond to a ketone's carbon (already bearing two R groups) gives a tertiary alkoxide, protonated on workup to the 3° alcohol. NaBH4 gives only a 2° alcohol from a ketone (delivers H, not R); water gives a hydrate; HCN gives a cyanohydrin.`
          },
          {
            question: `Imine formation from a ketone and a primary amine is fastest near pH 4.5-5 because:`,
            options: [`The carbonyl is only stable in mildly acidic solution`, `Hydroxide must be present to remove the alpha proton`, `Enough acid is present to protonate the carbinolamine OH for loss of water, while most of the amine remains unprotonated and nucleophilic`, `The imine product is only aromatic at that pH`],
            correctAnswer: 2,
            explanation: `Dehydration of the carbinolamine needs acid (OH must leave as water), but too much acid converts RNH2 into non-nucleophilic RNH3+. The rate is a compromise between the two demands, peaking in mildly acidic solution — a favorite MCAT graph question.`
          },
          {
            question: `Why do secondary amines give enamines rather than imines with ketones?`,
            options: [`Secondary amines are too weakly nucleophilic to add to the carbonyl`, `After dehydration, the nitrogen of a secondary amine has no N-H to lose, so the double bond forms toward the alpha carbon instead`, `Secondary amines attack the alpha carbon directly`, `Enamines are aromatic and therefore always preferred`],
            correctAnswer: 1,
            explanation: `Both amine classes add and dehydrate. Forming a neutral C=N requires removing a proton from nitrogen; a secondary amine's nitrogen in the iminium intermediate carries no H, so deprotonation occurs at the alpha carbon, giving the C=C of an enamine. It is a bookkeeping consequence, not a nucleophilicity difference.`
          }
        ]
      }
    },
    {
      id: 'cnyl1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Resonance makes the carbonyl carbon electrophilic; aldehydes/ketones do addition (no leaving group), acid derivatives do substitution
- Aldehydes beat ketones at addition on both sterics and electronics
- Catalog: H2O → hydrate; 1 ROH → hemiacetal, 2 ROH → acetal (acid-labile protecting group; sugars are cyclic hemiacetals); 1° amine → imine (pH ~4.5-5 optimum); 2° amine → enamine; CN → cyanohydrin
- Hydride: aldehyde → 1° alcohol, ketone → 2°; Grignard: formaldehyde → 1°, aldehyde → 2°, ketone → 3°
- Acid catalysis activates the carbonyl; base catalysis activates the nucleophile`
    },
    {
      id: 'cnyl1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Nucleophilic Addition

<details>
<summary><b>Example 1: Predict the product and its class</b></summary>

**Question:** Cyclohexanone is stirred with excess ethanol and a trace of HCl. What forms, and what happens if the product is treated with aqueous acid?

**Solution:**
1. First ethanol adds (acid-activated carbonyl) → hemiacetal
2. Acid converts the hemiacetal OH into a leaving group (water); the resulting oxocarbenium ion captures a second ethanol → **acetal** (1,1-diethoxycyclohexane) + H2O
3. Every step is reversible: aqueous acid pushes the equilibrium back → cyclohexanone + 2 EtOH
4. Base does NOT hydrolyze acetals — no acid, no oxocarbenium

**MCAT Strategy:** Acetal formation and hydrolysis are the same mechanism run in opposite directions; excess alcohol (or removing water) drives formation, excess water drives hydrolysis.
</details>

<details>
<summary><b>Example 2: Choosing the right reducing agent outcome</b></summary>

**Question:** Predict the products of NaBH4 reduction of (a) butanal, (b) 2-butanone, and state which product is chiral.

**Solution:**
1. (a) Butanal + hydride → **1-butanol**, a primary alcohol
2. (b) 2-Butanone + hydride → **2-butanol**, a secondary alcohol
3. 2-Butanol's carbinol carbon carries H, OH, CH3, and C2H5 — four different groups → **chiral**; NaBH4 attacks either face equally → racemic mixture
4. 1-Butanol has two H's on the carbinol carbon → achiral

**MCAT Strategy:** Reduction of an unsymmetrical ketone creates a new stereocenter as a racemate (achiral reagent, planar substrate). Passages test whether you notice the product is optically INACTIVE despite being chiral.
</details>

<details>
<summary><b>Example 3: Sugars as intramolecular hemiacetals</b></summary>

**Question:** Explain why glucose in water exists mostly as a six-membered ring, and what the anomeric carbon is.

**Solution:**
1. Glucose's C5 hydroxyl attacks its own C1 aldehyde — an intramolecular nucleophilic addition
2. The product is a cyclic **hemiacetal** (pyranose ring): C1 now bears both OH and the ring OR
3. C1 is the **anomeric carbon**; attack on either face of the planar aldehyde gives alpha or beta anomers, which interconvert through the open form (mutarotation)
4. Linking the anomeric OH to another sugar's OH makes an acetal — the **glycosidic bond**, stable until acid or enzyme hydrolysis

**MCAT Strategy:** Every glycosidic-bond question is an acetal question. Reducing sugars are those retaining a free hemiacetal that can reopen to the aldehyde.
</details>

<details>
<summary><b>Example 4: Protecting group logic</b></summary>

**Question:** You must run a Grignard reaction on 5-bromo-2-pentanone (Grignard formed at the C-Br). Why is direct reaction doomed, and what is the fix?

**Solution:**
1. A Grignard reagent is a powerful nucleophile; the molecule's OWN ketone would be attacked by the organometallic as soon as it forms — self-destruction
2. Fix: convert the ketone to a **cyclic acetal** (ethylene glycol, acid, remove water) — acetals ignore Grignards and strong base
3. Form the Grignard at C-Br, react with the intended electrophile
4. Remove the protecting group with aqueous acid → ketone restored

**MCAT Strategy:** "Protect, react, deprotect" appears in passages as a three-step scheme; recognize the diol + acid step as protection and the aqueous acid step as deprotection.
</details>`
    }
  ]
};
