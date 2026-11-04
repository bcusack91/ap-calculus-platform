export const mcatOchemCarbonylsPart1Data = {
  topicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  sections: [
    {
      id: 'cnyl1-intro',
      type: 'text' as const,
      content: `# Carbonyl Chemistry for the MCAT

**Part 1 of 4 — The Carbonyl Blueprint & Nucleophilic Addition**

The C=O group runs most of MCAT organic chemistry. One electronic picture explains everything: oxygen is more electronegative than carbon, and a resonance form puts a full positive charge on carbon. So the carbonyl carbon is an **electrophile** (attacked by nucleophiles), the oxygen is weakly basic, and the **alpha hydrogens** are acidic (the basis of enolate chemistry).

### Two Master Mechanisms

| Substrate | Mechanism | Why |
|-----------|-----------|-----|
| Aldehydes & ketones | **Nucleophilic addition** — Nu adds, C goes sp2 → sp3, O picks up the negative charge | No leaving group on the carbonyl carbon |
| Acid derivatives (acyl chlorides, anhydrides, esters, amides) | **Nucleophilic acyl substitution** — Nu adds, then the leaving group is expelled and C=O reforms | A leaving group IS attached |

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
            options: [`The aldehyde C=O bond is weaker and breaks more easily`, `Aldehydes carry a better leaving group than ketones`, `Aldehyde oxygens are more basic and protonate more readily`, `The aldehyde carbon is less hindered and more electrophilic`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Both effects favor the aldehyde: one alkyl group instead of two means less steric blockage of the attack trajectory AND less electron donation into the electrophilic carbon. Neither compound has a leaving group, the basicity of the oxygen is not the discriminating factor, and addition does not break the C=O sigma bond, so its strength does not decide the rate.`
          },
          {
            question: `A carbon bearing one -OH and one -OR group on the same carbon (with an H or R filling the remaining bonds) is called:`,
            options: [`An acetal`, `A hemiacetal`, `A gem-diol (hydrate)`, `An enol`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `OH + OR on one carbon = hemiacetal, the product of a single alcohol adding to an aldehyde or ketone. Two OR groups = acetal; two OH groups = gem-diol (hydrate); an enol is C=C-OH. Ring-form sugars are cyclic hemiacetals — the anomeric carbon carries the OH and ring OR.`
          },
          {
            question: `Which reagent converts a ketone into a tertiary alcohol?`,
            options: [`$CH_3MgBr$, then aqueous workup`, `$NaBH_4$ in methanol, then aqueous workup`, `$H_2O$ with catalytic acid`, `HCN with catalytic cyanide`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `A Grignard reagent delivers a carbanion-like R group; adding a new C-C bond to a ketone's carbon (already bearing two R groups) gives a tertiary alkoxide, protonated on workup to the 3° alcohol. NaBH4 gives only a 2° alcohol from a ketone (delivers H, not R); water gives a hydrate; HCN gives a cyanohydrin.`
          },
          {
            question: `Imine formation from a ketone and a primary amine is fastest near pH 4.5-5 because:`,
            options: [`The carbonyl is only stable in mildly acidic solution`, `Hydroxide must be present to remove the alpha proton`, `Acid assists water loss, yet enough amine stays unprotonated`, `The imine product becomes aromatic only at that pH`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Dehydration of the carbinolamine needs acid (OH must leave as water), but too much acid converts RNH2 into non-nucleophilic RNH3+. The rate is a compromise between the two demands, peaking in mildly acidic solution where a small free-amine fraction remains — a favorite MCAT graph question. The carbonyl is stable across the whole pH range, imine formation removes no alpha proton (that is enamine and enolate chemistry), and an imine is not aromatic.`
          },
          {
            question: `Why do secondary amines give enamines rather than imines with ketones?`,
            options: [`Secondary amines are too weakly nucleophilic to add to the carbonyl`, `The iminium N has no H to lose, so an alpha H is removed instead`, `Secondary amines attack the alpha carbon directly`, `Enamines are aromatic and therefore always preferred`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Both amine classes add and dehydrate. Forming a neutral C=N requires removing a proton from nitrogen; a secondary amine's nitrogen in the iminium intermediate carries no H, so deprotonation occurs at the alpha carbon, giving the C=C of an enamine. It is a bookkeeping consequence, not a nucleophilicity difference.`
          }
        ]
      }
    },
    {
      id: 'cnyl1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Nucleophilic Addition

**Problem 1.** Cyclohexanone is stirred with excess ethanol and a trace of HCl; later, the product is treated with aqueous acid.

- **(a)** What forms when the first ethanol adds?
- **(b)** How does a second ethanol add, and what is the final product?
- **(c)** What happens when the product meets aqueous acid?
- **(d)** Would aqueous base hydrolyze the product?

**(a) First addition.** Acid protonates the carbonyl oxygen, activating the carbon, and ethanol adds → a **hemiacetal** (OH + OEt on the same carbon).

**(b) Second addition.** Acid converts the hemiacetal OH into a leaving group (water); the resulting oxocarbenium ion (a cation stabilized by the adjacent O) captures a second ethanol → **acetal** (1,1-diethoxycyclohexane) + H2O.

**(c) Aqueous acid.** Every step is reversible, so excess water pushes the equilibrium back → cyclohexanone + 2 EtOH. Formation and hydrolysis are the same mechanism run in opposite directions: excess alcohol (or removing water) drives formation, excess water drives hydrolysis.

**(d) Base.** No. Base does NOT hydrolyze acetals: with no acid, no OEt becomes a leaving group and no oxocarbenium forms. That stability is why acetals work as protecting groups.

**Problem 2.** Butanal and 2-butanone are each reduced with NaBH4.

- **(a)** What does butanal give, and is that product chiral?
- **(b)** What does 2-butanone give?
- **(c)** Is the 2-butanone product chiral, and is the sample optically active?

**(a) Butanal.** Hydride adds to the carbonyl carbon → **1-butanol**, a primary alcohol. Its carbinol carbon carries two H's, so it is achiral.

**(b) 2-Butanone.** Hydride adds the same way → **2-butanol**, a secondary alcohol.

**(c) Chiral but racemic.** 2-Butanol's carbinol carbon carries H, OH, CH3 and C2H5, four different groups → **chiral**. But NaBH4 attacks either face of the planar carbonyl equally → a racemic mixture, optically INACTIVE despite being chiral. Passages test whether you notice.

**Problem 3.** In water, glucose exists mostly as a six-membered ring rather than as its open-chain aldehyde.

- **(a)** Which group attacks which to close the ring, and what kind of reaction is it?
- **(b)** What functional group does C1 become?
- **(c)** What is the anomeric carbon, and why are there two anomers?
- **(d)** What bond forms when the anomeric OH links to another sugar?

**(a) Ring closure.** Glucose's C5 hydroxyl attacks its own C1 aldehyde: an intramolecular nucleophilic addition.

**(b) A cyclic hemiacetal.** The product is a **hemiacetal** (pyranose ring): C1 now bears both an OH and the ring OR.

**(c) Anomers.** C1 is the **anomeric carbon**. Attack on either face of the planar aldehyde gives the alpha or the beta anomer, and the two interconvert through the open form (mutarotation).

**(d) Glycosidic bond.** Linking the anomeric OH to another sugar's OH makes an acetal, the **glycosidic bond**, stable until acid or enzyme hydrolysis. Every glycosidic-bond question is an acetal question; reducing sugars keep a free hemiacetal that can reopen to the aldehyde.

**Problem 4.** A Grignard reagent is to be formed at the C-Br of 5-bromo-2-pentanone and then reacted with another electrophile.

- **(a)** Why is the direct reaction doomed?
- **(b)** How can the ketone be protected?
- **(c)** What steps finish the job?

**(a) Self-destruction.** A Grignard reagent is a powerful nucleophile: the molecule's OWN ketone would be attacked by the organometallic as soon as it forms.

**(b) Protect.** Convert the ketone to a **cyclic acetal** (ethylene glycol, acid, remove water). Acetals ignore Grignards and strong base.

**(c) React, then deprotect.** Form the Grignard at C-Br and react it with the intended electrophile; then aqueous acid removes the protecting group → ketone restored. Passages show "protect, react, deprotect" as three steps: diol + acid protects, aqueous acid deprotects.`
    },
    {
      id: 'cnyl1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Electrophilic carbonyl carbon.** Resonance puts $\\delta+$ on carbon: aldehydes and ketones add nucleophiles, acid derivatives substitute.
- **Aldehydes beat ketones.** One H instead of a second R group means less steric crowding and less electron donation.
- **Oxygen and nitrogen adducts.** One ROH gives a hemiacetal, two an acetal; 1° amines give imines, 2° amines enamines.
- **Hydride vs Grignard.** Hydride: aldehyde → 1°, ketone → 2° alcohol; Grignard: formaldehyde → 1°, aldehyde → 2°, ketone → 3°.

**Common traps**

- **Acetals falling apart in base.** Acetals survive base and Grignards; only aqueous acid hydrolyzes them back to the carbonyl.
- **Imines at any pH.** Imine formation peaks near pH 4.5–5: too much acid protonates the amine, too little cannot expel the OH.
- **Hydride making 3° alcohols.** Hydride adds only H, so a ketone gives a 2° alcohol; a 3° alcohol needs a Grignard.
- **Chiral means optically active.** Reducing 2-butanone makes a stereocenter, but attack on both faces gives an inactive racemate.`
    }
  ]
};
