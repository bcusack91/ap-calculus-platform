export const oChemAldehydesKetonesPart6Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh6-intro',
      type: 'text' as const,
      content: `
## Nitrogen Nucleophiles & the Wittig Reaction

**Part 6 of 7 — Imines, Enamines, and C=C Formation**

So far our nucleophiles have been oxygen ($\\text{H}_2\\text{O}$, $\\text{ROH}$), carbon ($\\text{RMgX}$), and hydride ($\\text{H}^-$). This part adds two more strategically important reaction families and folds them into the problem-solving toolkit:

- **Nitrogen nucleophiles** (amines) condense with carbonyls. A **primary amine** gives an **imine** (Schiff base, $\\text{C=N}$); a **secondary amine** gives an **enamine** ($\\text{C=C}-\\text{N}$). Both proceed by addition followed by **loss of water** (condensations).
- The **Wittig reaction** uses a phosphorus **ylide** to convert a $\\text{C=O}$ directly into a **$\\text{C=C}$** (an alkene), with the carbonyl oxygen leaving as a phosphine oxide.

The unifying skill of this part is **predicting products** and **planning short syntheses**, applying everything from Parts 1–5.
      `
    },
    {
      id: 'aldeh6-imine',
      type: 'text' as const,
      content: `
### Imine Formation (Primary Amine $\\rightarrow$ $\\text{C=N}$)

$\\text{R}_2\\text{C=O} + \\text{R}'\\text{NH}_2 \\rightleftharpoons \\text{R}_2\\text{C=NR}' + \\text{H}_2\\text{O}$

Mechanism (addition then elimination of water):

1. The amine nitrogen (a good nucleophile) adds to the carbonyl carbon; proton transfer gives a neutral **carbinolamine** (hemiaminal), $\\text{R}_2\\text{C(OH)(NHR}')$.
2. The $\\text{OH}$ is **protonated** and leaves as water, giving an **iminium** ion, $\\text{R}_2\\text{C=}\\overset{+}{\\text{N}}\\text{HR}'$.
3. **Deprotonation** of nitrogen yields the neutral **imine**, $\\text{R}_2\\text{C=NR}'$.

**The pH sweet spot (a classic exam point).** Imine formation is fastest near **pH 4–5**.

- Too **basic** (high pH): not enough acid to protonate and expel the $\\text{OH}$ in step 2, so dehydration stalls.
- Too **acidic** (low pH): the amine is fully protonated to $\\text{R}'\\text{NH}_3^+$, which has no lone pair and cannot act as a nucleophile in step 1.

Mildly acidic conditions balance "enough acid to dehydrate" against "enough free amine to attack." Imines are central in biochemistry (e.g., pyridoxal phosphate forms a Schiff base with amino acids in transamination).
      `
    },
    {
      id: 'aldeh6-enamine',
      type: 'text' as const,
      content: `
### Enamine Formation (Secondary Amine $\\rightarrow$ $\\text{C=C}-\\text{N}$)

Run the same condensation with a **secondary amine** ($\\text{R}_2'\\text{NH}$) and step 3 changes. The iminium nitrogen now bears **no hydrogen** to lose, so the molecule instead removes a proton from the **$\\alpha$-carbon**, giving an **enamine**:

$\\text{R}-\\text{CH}_2-\\text{CO}-\\text{R} + \\text{R}_2'\\text{NH} \\rightleftharpoons \\text{R}-\\text{CH=C(NR}_2')-\\text{R} + \\text{H}_2\\text{O}$

> **The deciding factor — count the N–H bonds.**
> - **Primary** amine ($\\text{R}'\\text{NH}_2$): after dehydration the nitrogen keeps one H to lose, so the double bond ends up **C=N** $\\rightarrow$ **imine**.
> - **Secondary** amine ($\\text{R}_2'\\text{NH}$): the nitrogen has no H left, so the double bond forms toward the $\\alpha$-carbon (**C=C**) $\\rightarrow$ **enamine**.
> - **Tertiary** amine ($\\text{R}_3'\\text{N}$): cannot form a stable neutral product (no N–H at all) — only a transient iminium/ammonium.

Enamines are valuable because the $\\alpha$-carbon becomes **nucleophilic** (the nitrogen lone pair pushes electron density onto it), making enamines useful for forming new bonds at the $\\alpha$ position — a preview of the enol/enolate chemistry in Part 7.
      `
    },
    {
      id: 'aldeh6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Nitrogen Nucleophiles
      `,
      exercise: {
        questions: [
          {
            question: 'A primary amine (RNH2) reacts with a ketone. What is the organic product after loss of water?',
            options: [
              'An enamine (C=C-N)',
              'An imine / Schiff base (C=N)',
              'An acetal',
              'A carboxylic acid'
            ],
            correctAnswer: 1,
            explanation: 'A primary amine condenses with a carbonyl to form an imine (Schiff base), R2C=NR, plus water. The nitrogen retains one hydrogen, so the double bond ends up as C=N. An enamine requires a secondary amine; acetals come from alcohols.'
          },
          {
            question: 'Why is imine formation typically run at about pH 4-5 rather than in strong acid or strong base?',
            options: [
              'Strong acid speeds up every step equally',
              'Mild acid is enough to protonate and eliminate the carbinolamine OH, while still leaving the amine unprotonated and nucleophilic; strong acid would fully protonate the amine and kill its nucleophilicity',
              'pH has no effect on imine formation',
              'Base is needed to protonate the oxygen'
            ],
            correctAnswer: 1,
            explanation: 'Imine formation needs acid to dehydrate the carbinolamine (expel water in the elimination step) but also needs a free, neutral amine to attack the carbonyl in the first step. Too acidic and the amine becomes RNH3+ (no lone pair, no attack); too basic and dehydration stalls. pH 4-5 balances the two competing requirements.'
          },
          {
            question: 'What determines whether a carbonyl + amine condensation gives an imine versus an enamine?',
            options: [
              'The size of the carbonyl group only',
              'Whether the amine is primary (gives an imine, C=N) or secondary (gives an enamine, C=C-N)',
              'The reaction temperature only',
              'Whether water is present'
            ],
            correctAnswer: 1,
            explanation: 'After the iminium ion forms, a primary amine still has an N-H to lose, so the double bond stays on nitrogen (imine, C=N). A secondary amine has no remaining N-H, so a proton is lost from the alpha-carbon instead, putting the double bond between carbons (enamine, C=C-N). The class of amine is the deciding factor.'
          }
        ]
      }
    },
    {
      id: 'aldeh6-wittig',
      type: 'text' as const,
      content: `
### The Wittig Reaction — Building a $\\text{C=C}$ from a $\\text{C=O}$

The Wittig reaction converts a carbonyl directly into an alkene, replacing the $\\text{O}$ with a $\\text{=CR}_2$ unit supplied by a phosphorus **ylide**:

$\\text{R}_2\\text{C=O} + \\text{Ph}_3\\text{P=CR}_2' \\rightarrow \\text{R}_2\\text{C=CR}_2' + \\text{Ph}_3\\text{P=O}$

**Making the ylide.** A primary (or secondary) alkyl halide reacts with triphenylphosphine to give a **phosphonium salt**, $\\text{Ph}_3\\overset{+}{\\text{P}}-\\text{CH}_2\\text{R}\\;\\text{X}^-$. A strong base (e.g., $\\text{BuLi}$, $\\text{NaH}$) then removes a proton from the carbon next to phosphorus to give the ylide, $\\text{Ph}_3\\text{P=CHR}$ (a species with adjacent $+$ and $-$ formal charges).

**Mechanism (brief).** The nucleophilic ylide carbon adds to the carbonyl carbon; the alkoxide oxygen and phosphorus close into a four-membered **oxaphosphetane**, which collapses to expel **triphenylphosphine oxide** ($\\text{Ph}_3\\text{P=O}$) and form the $\\text{C=C}$. The driving force for the whole reaction is the formation of the very strong **P=O bond**.

> **Worked example — predict and disconnect.** What alkene forms from cyclohexanone + $\\text{Ph}_3\\text{P=CH}_2$?
> The carbonyl oxygen of cyclohexanone is replaced by $\\text{=CH}_2$, giving **methylenecyclohexane** (an exocyclic $\\text{C=C}$). Note the power of the method: the double bond appears **exactly where the carbonyl carbon was**, with no ambiguity about position. To make a specific alkene, disconnect at the $\\text{C=C}$ — one carbon comes from a carbonyl, the other from the ylide (and therefore from an alkyl halide).
      `
    },
    {
      id: 'aldeh6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Wittig & Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'What is the product of the Wittig reaction between butanal (CH3CH2CH2CHO) and the ylide Ph3P=CH2?',
            options: [
              'Pentanal',
              'Pent-1-ene (CH3CH2CH2CH=CH2)',
              'Pentan-1-ol',
              'Pentanoic acid'
            ],
            correctAnswer: 1,
            explanation: 'The Wittig replaces the carbonyl O with the ylide carbon unit (=CH2). Butanal CH3CH2CH2CHO becomes CH3CH2CH2CH=CH2 (pent-1-ene), with Ph3P=O as by-product. The new C=C forms precisely at the original carbonyl carbon. No alcohol or acid is produced.'
          },
          {
            question: 'What is the inorganic/phosphorus by-product of every Wittig reaction, and what makes the reaction favorable?',
            options: [
              'PH3; favorable because of entropy only',
              'Triphenylphosphine oxide (Ph3P=O); favorable largely because of the very strong P=O bond formed',
              'Ph3P (unchanged); the reaction is thermoneutral',
              'H2O; favorable because water is released'
            ],
            correctAnswer: 1,
            explanation: 'The ylide phosphorus ends up as triphenylphosphine oxide, Ph3P=O. Formation of the strong phosphorus-oxygen double bond is the major thermodynamic driving force that collapses the oxaphosphetane and forms the alkene. Water is not the by-product of a Wittig.'
          },
          {
            question: 'You need to make 2-phenylbut-2-ene by adding a Grignard-derived fragment, but the target molecule also contains a free -OH elsewhere. Which principle from this suite applies?',
            options: [
              'Run the Grignard with extra water present',
              'A Grignard reagent is incompatible with a free -OH, so the -OH must be protected first (or a non-basic method chosen); this is the same incompatibility seen throughout carbonyl chemistry',
              'Grignards react only with alkenes',
              'Phenyl groups prevent any Grignard reaction'
            ],
            correctAnswer: 1,
            explanation: 'As established in Part 3, an organometallic is a strong base destroyed by any O-H. A free hydroxyl in the substrate must be protected (e.g., as a silyl ether or acetal where applicable) before the Grignard step, then revealed afterward. This recurring incompatibility (Grignard vs. O-H/N-H) is a frequent source of synthesis errors.'
          },
          {
            question: 'A secondary amine such as pyrrolidine reacts with cyclohexanone. What is the product, and why is it useful?',
            options: [
              'An imine; useful because it is a strong oxidant',
              'An enamine; useful because its alpha-carbon becomes nucleophilic, allowing new bonds to form at the alpha position',
              'An acetal; useful as a protecting group',
              'A carboxylic acid; useful for esterification'
            ],
            correctAnswer: 1,
            explanation: 'A secondary amine condenses with a ketone to give an enamine (C=C-N), since the nitrogen has no remaining H and a proton is lost from the alpha-carbon. The nitrogen lone pair makes the alpha-carbon nucleophilic, so enamines are used to functionalize the alpha position (a milder alternative to enolate chemistry). A primary amine would give an imine; alcohols give acetals.'
          }
        ]
      }
    },
    {
      id: 'aldeh6-exit',
      type: 'text' as const,
      content: `
### Part 6 Summary

- **Primary amines** condense with carbonyls (addition + loss of water) to give **imines / Schiff bases** ($\\text{C=N}$); the reaction is optimal at **pH 4–5** (acid enough to dehydrate, but the amine must stay unprotonated).
- **Secondary amines** give **enamines** ($\\text{C=C}-\\text{N}$) because the iminium nitrogen has no $\\text{H}$ to lose, so an **$\\alpha$-proton** is removed instead; enamines make the **$\\alpha$-carbon nucleophilic**.
- The **Wittig reaction** ($\\text{R}_2\\text{C=O} + \\text{Ph}_3\\text{P=CR}_2' \\rightarrow \\text{R}_2\\text{C=CR}_2'$) converts a carbonyl into a **specifically placed alkene**, expelling **$\\text{Ph}_3\\text{P=O}$**; the strong $\\text{P=O}$ bond drives it.
- **Synthesis discipline:** disconnect alkenes at the $\\text{C=C}$ (carbonyl + ylide); remember organometallics are incompatible with $\\text{O}-\\text{H}$/$\\text{N}-\\text{H}$ and use **protecting groups** (Part 5) to work around it.

Part 7 closes the suite with **keto–enol tautomerism**, **$\\alpha$-carbon acidity**, and a synthesis-level review tying every reaction together.
      `
    }
  ]
}
