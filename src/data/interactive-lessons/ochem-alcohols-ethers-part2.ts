export const oChemAlcoholsPart2Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh2-intro',
      type: 'text' as const,
      content: `
## Preparation of Alcohols

**Part 2 of 7 — Synthesizing Alcohols**

There are four workhorse routes to alcohols that every organic student must own. Three build the $\\text{C-OH}$ bond by adding across a multiple bond or reducing a carbonyl; one, the Grignard reaction, simultaneously **forms a new carbon-carbon bond** while installing the hydroxyl. Choosing among them is a question of (a) what starting material you have and (b) what regiochemistry or carbon count you need.

| Method | Reagents | Key feature |
|--------|----------|-------------|
| Acid-catalyzed hydration | alkene, $\\text{H}_3\\text{O}^+$ | **Markovnikov**, can rearrange |
| Oxymercuration | alkene; $\\text{Hg(OAc)}_2$, $\\text{H}_2\\text{O}$; then $\\text{NaBH}_4$ | **Markovnikov**, no rearrangement |
| Hydroboration | alkene; $\\text{BH}_3$; then $\\text{H}_2\\text{O}_2/\\text{OH}^-$ | **anti-Markovnikov**, syn |
| Carbonyl reduction | aldehyde/ketone, $\\text{NaBH}_4$ or $\\text{LiAlH}_4$ | no new C-C bond |
| Grignard addition | $\\text{RMgX}$ + carbonyl, then $\\text{H}_3\\text{O}^+$ | **forms a new C-C bond** |
      `
    },
    {
      id: 'alcoh2-hydration',
      type: 'text' as const,
      content: `
### Adding Water Across an Alkene: Regiochemistry Is Everything

Two complementary strategies convert an alkene into an alcohol, and they give **opposite** regiochemistry.

**Markovnikov addition** places the $\\text{-OH}$ on the *more* substituted carbon (the one that would bear the more stable carbocation). Two reagent systems achieve this:

- **Acid-catalyzed hydration** ($\\text{H}_2\\text{O}$, catalytic $\\text{H}_2\\text{SO}_4$) proceeds through a free carbocation. It follows Markovnikov orientation but, because a discrete cation forms, it is **prone to hydride and alkyl shifts** (rearrangement) when a more stable cation is one step away.
- **Oxymercuration-demercuration** ($\\text{Hg(OAc)}_2$, $\\text{H}_2\\text{O}$; then $\\text{NaBH}_4$) also gives the Markovnikov alcohol but routes through a bridged **mercurinium ion** that resists rearrangement. When you need the Markovnikov product *cleanly*, this is the method of choice.

**anti-Markovnikov addition** places the $\\text{-OH}$ on the *less* substituted carbon. **Hydroboration-oxidation** ($\\text{BH}_3 \\cdot \\text{THF}$; then $\\text{H}_2\\text{O}_2$, $\\text{NaOH}$) does this. Boron, being less electronegative than carbon, is the electrophile; it adds to the less hindered carbon, and after oxidation the $\\text{-OH}$ ends up there too. The addition is also **syn** (H and OH add to the same face).

**Worked example.** What is the major product when 1-methylcyclohexene is treated with (a) $\\text{H}_3\\text{O}^+$ versus (b) $\\text{BH}_3$ then $\\text{H}_2\\text{O}_2/\\text{OH}^-$?

- (a) Markovnikov: the $\\text{-OH}$ goes onto the more substituted ring carbon (the one bearing the methyl), giving **1-methylcyclohexan-1-ol**, a tertiary alcohol.
- (b) anti-Markovnikov: the $\\text{-OH}$ goes onto the adjacent, less substituted carbon, giving **2-methylcyclohexan-1-ol**, a secondary alcohol.

> Same alkene, opposite reagents, **different constitutional isomers**. The exam reflex is: see "$\\text{BH}_3$" and immediately flip your regiochemistry to anti-Markovnikov.
      `
    },
    {
      id: 'alcoh2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Hydration Regiochemistry
      `,
      exercise: {
        questions: [
          {
            question: 'Which reagent set converts 2-methylpropene, $\\text{(CH}_3\\text{)}_2\\text{C=CH}_2$, into the primary alcohol 2-methylpropan-1-ol?',
            options: [
              'Dilute $\\text{H}_2\\text{SO}_4$, $\\text{H}_2\\text{O}$',
              '$\\text{Hg(OAc)}_2$, $\\text{H}_2\\text{O}$; then $\\text{NaBH}_4$',
              '$\\text{BH}_3 \\cdot \\text{THF}$; then $\\text{H}_2\\text{O}_2$, $\\text{NaOH}$',
              '$\\text{HBr}$, peroxides'
            ],
            correctAnswer: 2,
            explanation: 'The primary alcohol is the anti-Markovnikov product, which requires hydroboration-oxidation. Both acid-catalyzed hydration and oxymercuration give the Markovnikov (tertiary) alcohol instead. HBr/peroxides makes an alkyl bromide, not an alcohol.'
          },
          {
            question: 'Acid-catalyzed hydration of 3-methylbut-1-ene can give an unexpected tertiary alcohol. Why?',
            options: [
              'Water attacks twice',
              'The secondary carbocation rearranges by a hydride shift to a more stable tertiary carbocation',
              'Sulfuric acid adds across the double bond',
              'The alkene polymerizes'
            ],
            correctAnswer: 1,
            explanation: 'Acid-catalyzed hydration forms a free carbocation. The initial secondary cation undergoes a 1,2-hydride shift to the more stable tertiary cation before water traps it, giving a rearranged tertiary alcohol. Oxymercuration avoids this because its mercurinium ion does not rearrange.'
          },
          {
            question: 'When you need the Markovnikov alcohol with NO risk of carbocation rearrangement, the best choice is:',
            options: [
              'acid-catalyzed hydration',
              'oxymercuration-demercuration',
              'hydroboration-oxidation',
              'free-radical addition'
            ],
            correctAnswer: 1,
            explanation: 'Oxymercuration proceeds through a bridged mercurinium ion rather than an open carbocation, so it gives clean Markovnikov regiochemistry without rearrangement. Hydroboration gives anti-Markovnikov, and acid-catalyzed hydration is the very method that risks rearrangement.'
          }
        ]
      }
    },
    {
      id: 'alcoh2-reduction',
      type: 'text' as const,
      content: `
### Reducing Carbonyls to Alcohols

A second family of routes starts from a carbonyl ($\\text{C=O}$) and adds hydride ($\\text{H}^-$) to give an alcohol. No new carbon-carbon bond forms; the carbon skeleton is unchanged.

- **Sodium borohydride ($\\text{NaBH}_4$)** is a *mild* hydride source. It reduces aldehydes (to $1°$ alcohols) and ketones (to $2°$ alcohols) but is too gentle to touch esters or carboxylic acids. It tolerates water and alcohol solvents.
- **Lithium aluminium hydride ($\\text{LiAlH}_4$)** is a *powerful* hydride source. It reduces aldehydes, ketones, esters, carboxylic acids, amides, and nitriles. It reacts violently with water, so the reaction is run in dry ether and then **quenched** with aqueous acid in a separate step (written as a "2)" over the arrow).

The oxidation-state logic is symmetric with Part 3: reduction adds $\\text{H}^-$ and walks the carbon *down* the oxidation ladder (acid $\\rightarrow$ aldehyde $\\rightarrow$ alcohol), exactly reversing oxidation.

**Worked example.** Predict the products:

- Butanal $+\\,\\text{NaBH}_4 \\rightarrow$ **butan-1-ol** (a $1°$ alcohol).
- Cyclohexanone $+\\,\\text{NaBH}_4 \\rightarrow$ **cyclohexanol** (a $2°$ alcohol).
- Methyl benzoate $+\\,\\text{LiAlH}_4$, then $\\text{H}_3\\text{O}^+ \\rightarrow$ **benzyl alcohol** $+$ methanol. ($\\text{NaBH}_4$ would leave the ester untouched.)

> **Selectivity trap:** if a molecule contains both a ketone and an ester and you want to reduce only the ketone, use $\\text{NaBH}_4$. Reaching for $\\text{LiAlH}_4$ would reduce both.
      `
    },
    {
      id: 'alcoh2-grignard',
      type: 'text' as const,
      content: `
### The Grignard Reaction: Building the Carbon Skeleton

A **Grignard reagent** ($\\text{RMgX}$) is made by inserting magnesium into a carbon-halogen bond in dry ether. This umpolung trick inverts the carbon's normal polarity: the once-electrophilic carbon of $\\text{R-X}$ becomes a powerful **carbon nucleophile** ($\\text{R}^{\\delta-}$, essentially a carbanion). That nucleophilic carbon attacks the electrophilic carbonyl carbon, and after an aqueous workup ($\\text{H}_3\\text{O}^+$) you isolate an alcohol with a **brand-new C-C bond**.

The class of alcohol you get depends on the carbonyl partner:

| Carbonyl partner | Alcohol class produced |
|------------------|------------------------|
| formaldehyde ($\\text{CH}_2\\text{O}$) | primary ($1°$) |
| any other aldehyde | secondary ($2°$) |
| ketone | tertiary ($3°$) |
| ester (adds **twice**) | tertiary ($3°$) with two identical R groups |
| epoxide (e.g. ethylene oxide) | alcohol extended by two carbons |

Because the Grignard carbon is also a **strong base**, it is destroyed by any acidic proton — $\\text{O-H}$, $\\text{N-H}$, $\\text{S-H}$, terminal alkyne $\\text{C-H}$. You therefore cannot prepare or use a Grignard in the presence of a free hydroxyl, water, or a carboxylic acid; the reagent would simply deprotonate the substrate instead of adding to it.

**Worked example — retrosynthesis.** Design a Grignard synthesis of **2-phenylbutan-2-ol**, $\\text{Ph-C(OH)(CH}_3\\text{)(CH}_2\\text{CH}_3\\text{)}$.

This is a tertiary alcohol, so the carbonyl partner must be a **ketone**. Disconnect either C-C bond to the carbinol carbon. One clean option: combine **phenylmagnesium bromide** ($\\text{PhMgBr}$) with **butan-2-one** ($\\text{CH}_3\\text{COCH}_2\\text{CH}_3$). The phenyl nucleophile adds to the ketone carbonyl; aqueous workup delivers the tertiary alcohol. (Equivalently, ethyl- or methyl-Grignard plus the appropriate aryl ketone would also work.)

> Notice the central planning move: a *tertiary* target alcohol always points back to a **ketone** electrophile; a *secondary* target points back to a non-formaldehyde aldehyde.
      `
    },
    {
      id: 'alcoh2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reduction & Grignard
      `,
      exercise: {
        questions: [
          {
            question: 'A molecule contains both a ketone and an ester. You want to reduce ONLY the ketone to a secondary alcohol. Which reagent?',
            options: [
              '$\\text{LiAlH}_4$, then $\\text{H}_3\\text{O}^+$',
              '$\\text{NaBH}_4$',
              '$\\text{H}_2$, $\\text{Pd/C}$ at high pressure',
              'excess $\\text{CH}_3\\text{MgBr}$'
            ],
            correctAnswer: 1,
            explanation: 'NaBH4 is mild: it reduces aldehydes and ketones but leaves esters and carboxylic acids untouched, giving exactly the chemoselectivity needed. LiAlH4 is too powerful and would reduce the ester as well; a Grignard would add carbon nucleophiles rather than simply reduce.'
          },
          {
            question: 'Which Grignard + carbonyl combination yields a tertiary alcohol?',
            options: [
              '$\\text{CH}_3\\text{MgBr}$ + formaldehyde',
              '$\\text{CH}_3\\text{MgBr}$ + acetaldehyde',
              '$\\text{CH}_3\\text{MgBr}$ + acetone',
              '$\\text{CH}_3\\text{MgBr}$ + $\\text{CO}_2$'
            ],
            correctAnswer: 2,
            explanation: 'A ketone (acetone) plus a Grignard gives a tertiary alcohol. Formaldehyde gives primary, a non-formaldehyde aldehyde (acetaldehyde) gives secondary, and CO2 gives a carboxylic acid after workup, not an alcohol.'
          },
          {
            question: 'Why does attempting to run a Grignard reaction on 4-hydroxybutanal fail to give the expected addition product?',
            options: [
              'The aldehyde is too hindered',
              'The free -OH proton destroys the Grignard reagent by acid-base reaction before it can add',
              'Magnesium will not insert into the molecule',
              'The product would be an ether'
            ],
            correctAnswer: 1,
            explanation: 'A Grignard reagent is a strong base. The acidic O-H proton of the hydroxyl group protonates and quenches the carbanion faster than addition to the carbonyl, so no new C-C bond forms. Free O-H, N-H, water, and carboxylic acids are all incompatible with Grignard reagents.'
          },
          {
            question: 'To make the primary alcohol 1-pentanol via a Grignard reaction, the correct carbonyl electrophile is:',
            options: [
              'pentanal',
              'butanal',
              'formaldehyde, reacted with butylmagnesium bromide',
              'acetone'
            ],
            correctAnswer: 2,
            explanation: 'Only formaldehyde gives a primary alcohol with a Grignard. Butylmagnesium bromide adds to formaldehyde and, after workup, extends butyl by one carbon to give 1-pentanol. Using an aldehyde like butanal would give a secondary alcohol instead.'
          }
        ]
      }
    },
    {
      id: 'alcoh2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 2 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'You must convert cyclohexene into trans-2-methoxy... no — into the anti-Markovnikov alcohol with a specific regiochemistry. Across this part, which single property most often decides between hydration methods?',
            options: [
              'the color of the reagent',
              'whether you need Markovnikov vs anti-Markovnikov regiochemistry (and whether rearrangement is acceptable)',
              'the boiling point of the solvent',
              'the molar mass of the alkene'
            ],
            correctAnswer: 1,
            explanation: 'Method selection turns on regiochemistry: acid-catalyzed hydration and oxymercuration give Markovnikov, hydroboration gives anti-Markovnikov; and if rearrangement must be avoided, oxymercuration beats acid-catalyzed hydration. These distinctions are the whole point of having multiple methods.'
          },
          {
            question: 'A target tertiary alcohol has three different groups on the carbinol carbon. The most flexible synthetic approach is:',
            options: [
              'reduce a ketone with $\\text{NaBH}_4$',
              'add a Grignard reagent to a ketone bearing the other two groups',
              'hydrate an alkene with acid',
              'reduce an ester with $\\text{LiAlH}_4$'
            ],
            correctAnswer: 1,
            explanation: 'Carbonyl reduction can never produce a tertiary alcohol (the carbonyl carbon keeps an H). A Grignard addition to a ketone forms the needed C-C bond and installs the third group, making it the go-to disconnection for tertiary alcohols with three distinct substituents.'
          }
        ]
      }
    }
  ]
}
