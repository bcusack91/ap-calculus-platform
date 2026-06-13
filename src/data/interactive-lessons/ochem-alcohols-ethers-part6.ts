export const oChemAlcoholsPart6Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Putting the Reactions Together**

Real exam questions rarely ask you to recite a single reaction. They ask you to **predict a product**, **choose between competing reagents**, or **design a multi-step synthesis**. This part trains those skills by working four representative problems end to end. The recurring strategy is always the same three questions:

1. **What functional group am I starting with, and what class is it?** ($1°/2°/3°$ matters constantly.)
2. **What does the reagent do, and does the substrate class change the mechanism or outcome?**
3. **Is there a regiochemistry or selectivity decision** (Markovnikov vs anti-Markovnikov, Zaitsev, acid vs base epoxide opening, aldehyde vs acid oxidation)?

Keep those three questions in view and most multi-step problems unravel cleanly.
      `
    },
    {
      id: 'alcoh6-oxidation-problem',
      type: 'text' as const,
      content: `
### Problem 1 — Predicting Oxidation Products

**Prompt.** A mixture contains 1-butanol, 2-butanol, and 2-methylpropan-2-ol. Each is treated separately with (a) PCC and (b) Jones reagent. Give all eight products.

**Reasoning by class:**

- **1-butanol (primary).** PCC (mild, anhydrous) stops at the **aldehyde**, butanal. Jones (strong, aqueous) pushes through to the **carboxylic acid**, butanoic acid.
- **2-butanol (secondary).** Both oxidants give the **ketone**, butan-2-one. A secondary alcohol cannot be oxidized past the ketone — there is no further H on that carbon to remove.
- **2-methylpropan-2-ol (tertiary).** **No reaction** with either oxidant. The carbinol carbon has no C-H bond, so oxidation is impossible.

**Summary table:**

| Alcohol | PCC | Jones |
|---------|-----|-------|
| 1-butanol ($1°$) | butanal | butanoic acid |
| 2-butanol ($2°$) | butan-2-one | butan-2-one |
| *tert*-butanol ($3°$) | no reaction | no reaction |

> The whole problem reduces to two rules: (1) tertiary alcohols do not oxidize, and (2) for primary alcohols, mild/anhydrous (PCC) stops at the aldehyde while strong/aqueous (Jones) goes to the acid.
      `
    },
    {
      id: 'alcoh6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Oxidation & Selectivity
      `,
      exercise: {
        questions: [
          {
            question: 'Cyclohexanol is treated with Jones reagent. The product is:',
            options: [
              'cyclohexene',
              'cyclohexanone',
              'cyclohexanecarboxylic acid',
              'no reaction'
            ],
            correctAnswer: 1,
            explanation: 'Cyclohexanol is a secondary alcohol, so oxidation gives the ketone cyclohexanone and stops there (no further C-H on that carbon to remove). It cannot become a carboxylic acid, and Jones oxidizes rather than dehydrates, so cyclohexene is wrong.'
          },
          {
            question: 'You want to oxidize 1-hexanol to hexanal WITHOUT overshooting to the acid. Choose the reagent:',
            options: [
              'Jones reagent',
              'hot $\\text{KMnO}_4$',
              'PCC in $\\text{CH}_2\\text{Cl}_2$',
              'dilute $\\text{H}_2\\text{SO}_4$'
            ],
            correctAnswer: 2,
            explanation: 'Only a mild, anhydrous oxidant such as PCC stops a primary alcohol at the aldehyde. Jones reagent and hot KMnO4 are strong aqueous oxidants that would convert the aldehyde on to hexanoic acid. Dilute H2SO4 is not an oxidant at all.'
          },
          {
            question: 'A diol contains one primary and one tertiary -OH. Treatment with excess Jones reagent affects:',
            options: [
              'both hydroxyls, giving two carboxylic acids',
              'only the primary -OH, giving a carboxylic acid; the tertiary -OH is untouched',
              'only the tertiary -OH',
              'neither hydroxyl'
            ],
            correctAnswer: 1,
            explanation: 'The primary alcohol is oxidized to a carboxylic acid by strong aqueous Jones reagent, but the tertiary alcohol has no C-H on its carbinol carbon and cannot be oxidized. Selectivity follows directly from the tertiary-alcohol limitation.'
          }
        ]
      }
    },
    {
      id: 'alcoh6-grignard-problem',
      type: 'text' as const,
      content: `
### Problem 2 — Designing a Grignard Synthesis

**Prompt.** Propose a synthesis of **1-phenylethanol**, $\\text{Ph-CH(OH)-CH}_3$, using a Grignard reaction. Then explain why a free phenol could not be present during the reaction.

**Retrosynthesis.** 1-Phenylethanol is a **secondary** alcohol (the carbinol carbon bears one H, one phenyl, one methyl). A secondary alcohol comes from a Grignard adding to a **non-formaldehyde aldehyde**. Disconnect at either C-C bond to the carbinol carbon:

- **Route A:** $\\text{PhMgBr}$ (phenyl nucleophile) $+$ **acetaldehyde** ($\\text{CH}_3\\text{CHO}$), then $\\text{H}_3\\text{O}^+$. The phenyl adds to the aldehyde carbonyl; workup gives 1-phenylethanol. ✓
- **Route B:** $\\text{CH}_3\\text{MgBr}$ (methyl nucleophile) $+$ **benzaldehyde** ($\\text{PhCHO}$), then $\\text{H}_3\\text{O}^+$. Equally valid. ✓

Either route works because both partners are aldehydes (one H on the carbonyl carbon) giving the secondary product.

**Why no free phenol (or any $\\text{-OH}$).** A Grignard reagent is a strong base. A phenol $\\text{O-H}$ (or any hydroxyl) would protonate and **destroy** the carbanion in an instant acid-base reaction, before it could add to the carbonyl. If the target molecule needs a free $\\text{-OH}$ elsewhere, you must either install it *after* the Grignard step or use a protecting group.

> The planning reflex: secondary target $\\Rightarrow$ aldehyde electrophile; and scan the molecule for any acidic O-H, N-H, or terminal alkyne C-H that would quench the reagent.
      `
    },
    {
      id: 'alcoh6-epoxide-problem',
      type: 'text' as const,
      content: `
### Problem 3 — Epoxide Regiochemistry Under Two Conditions

**Prompt.** 1-Methyl-1,2-epoxycyclohexane (an epoxide where one ring carbon also bears a methyl, making it the more substituted carbon) is opened with methanol. Compare the product under (a) acidic and (b) basic conditions.

**Set-up.** One epoxide carbon is the more substituted (quaternary-ish, bearing the methyl); the adjacent carbon is the less substituted (a $\\text{CH}$).

- **(a) Acidic ($\\text{CH}_3\\text{OH}, \\text{H}_2\\text{SO}_4$):** protonation puts the larger $\\delta+$ on the **more substituted** carbon, so methanol attacks **there**. The $\\text{-OCH}_3$ lands on the carbon bearing the methyl; the $\\text{-OH}$ ends up on the less substituted carbon — **trans** to the new $\\text{OCH}_3$.
- **(b) Basic ($\\text{NaOCH}_3$):** methoxide is a strong nucleophile and attacks by $\\text{S}_\\text{N}2$ at the **less hindered** carbon. The $\\text{-OCH}_3$ lands on the less substituted carbon; the tertiary $\\text{-OH}$ ends up on the more substituted carbon — again **trans**.

**Result:** the constitutional placement of $\\text{OCH}_3$ versus $\\text{OH}$ is **opposite** in the two conditions, while the **trans** relationship is preserved in both.

> Two takeaways carried from Part 5: (1) acid sends the nucleophile to the more substituted carbon, base to the less substituted; (2) the nucleophile and -OH are always anti (trans), since attack is backside in both regimes.
      `
    },
    {
      id: 'alcoh6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Synthesis Design & Epoxides
      `,
      exercise: {
        questions: [
          {
            question: 'Which Grignard combination is a valid route to the tertiary alcohol 2-phenylpropan-2-ol, $\\text{Ph-C(OH)(CH}_3\\text{)}_2$?',
            options: [
              '$\\text{PhMgBr}$ + acetaldehyde',
              '$\\text{CH}_3\\text{MgBr}$ + acetophenone ($\\text{Ph-CO-CH}_3$)',
              '$\\text{PhMgBr}$ + formaldehyde',
              '$\\text{CH}_3\\text{MgBr}$ + benzaldehyde'
            ],
            correctAnswer: 1,
            explanation: 'A tertiary alcohol requires a ketone electrophile. Methyl Grignard adds to acetophenone (a ketone) and, after workup, gives Ph-C(OH)(CH3)2. The aldehyde options (acetaldehyde, benzaldehyde) would give secondary alcohols, and formaldehyde would give a primary alcohol.'
          },
          {
            question: 'An epoxide derived from styrene (phenyl on one epoxide carbon) is opened by sodium methoxide. Methoxide attacks:',
            options: [
              'the benzylic (more substituted) carbon',
              'the terminal $\\text{CH}_2$ (less substituted) carbon, via $\\text{S}_\\text{N}2$',
              'the oxygen',
              'neither carbon reacts'
            ],
            correctAnswer: 1,
            explanation: 'Under basic conditions a strong nucleophile opens the epoxide by SN2 at the less hindered carbon, here the terminal CH2. (Note: under acidic conditions the benzylic position, which stabilizes positive charge well, would instead be attacked, illustrating the acid-versus-base reversal.)'
          },
          {
            question: 'You must run a Grignard addition on a substrate that also contains a carboxylic acid. The correct conclusion is:',
            options: [
              'add extra Grignard and proceed normally',
              'the acidic $\\text{-COOH}$ proton will quench the Grignard, so the acid must be protected or the strategy changed',
              'the Grignard will selectively ignore the acid',
              'carboxylic acids speed up Grignard additions'
            ],
            correctAnswer: 1,
            explanation: 'A carboxylic acid has a very acidic O-H that instantly protonates and destroys the strongly basic Grignard reagent before any carbonyl addition can occur. The acid must be protected, or a different approach used. Adding more Grignard simply destroys more reagent.'
          },
          {
            question: 'Acidic ring-opening of 2,2-dimethyloxirane with $\\text{CH}_3\\text{OH}/\\text{H}^+$ places the methoxy group on which carbon?',
            options: [
              'the $\\text{CH}_2$ (less substituted) carbon',
              'the more substituted carbon bearing the two methyls',
              'on oxygen',
              'on a methyl group'
            ],
            correctAnswer: 1,
            explanation: 'Under acid, the protonated epoxide carries the most positive character on the more substituted carbon (it would form the more stable cation), so methanol attacks there and OCH3 bonds to that carbon. The -OH ends up on the CH2. Under base, the regiochemistry would be reversed.'
          }
        ]
      }
    },
    {
      id: 'alcoh6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 6 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Across every problem in this workshop, the FIRST diagnostic question that unlocks the answer is:',
            options: [
              'what color is the product',
              'what functional group and substitution class is the starting material',
              'what is the molar mass',
              'how many rings are present'
            ],
            correctAnswer: 1,
            explanation: 'Identifying the functional group and its class (primary/secondary/tertiary, aldehyde vs ketone, more vs less substituted epoxide carbon) determines mechanism and outcome in nearly every problem. It is the universal first move before considering the reagent.'
          },
          {
            question: 'Designing a Grignard synthesis of a target alcohol always begins by:',
            options: [
              'choosing the solvent color',
              'classifying the target ($1°/2°/3°$) to decide whether the carbonyl partner must be formaldehyde, another aldehyde, or a ketone',
              'oxidizing the target first',
              'adding water to the Grignard'
            ],
            correctAnswer: 1,
            explanation: 'The class of the target alcohol dictates the carbonyl electrophile: primary points to formaldehyde, secondary to a non-formaldehyde aldehyde, and tertiary to a ketone. This classification is the entry point for every Grignard retrosynthesis.'
          }
        ]
      }
    }
  ]
}
