export const oChemAlcoholsPart7Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh7-intro',
      type: 'text' as const,
      content: `
## Synthesis & Comprehensive Review

**Part 7 of 7 — Tying the Alcohol & Ether Suite Together**

Across this unit, alcohols emerged as the **central hub** of aliphatic functional-group chemistry. They can be *made* from alkenes, carbonyls, and Grignard reagents, and they can be *converted into* alkyl halides, alkenes, aldehydes, ketones, acids, ethers, and esters. Master a single organizing idea — the **oxidation-state ladder** — and most of the unit collapses into one coherent map.

This final part reviews the connections, walks a multi-step synthesis that chains several reactions, and tests integrated reasoning.
      `
    },
    {
      id: 'alcoh7-ladder',
      type: 'text' as const,
      content: `
### The Oxidation Ladder: One Idea That Organizes Everything

Carbon at the functional position climbs a ladder as it gains bonds to oxygen (oxidation) and descends as it gains bonds to hydrogen (reduction):

$\\text{alkane} \\rightarrow \\text{alcohol} \\rightarrow \\text{aldehyde/ketone} \\rightarrow \\text{carboxylic acid}$

- Moving **right** is **oxidation** (remove H / add O): use PCC, Jones, $\\text{CrO}_3$, $\\text{KMnO}_4$.
- Moving **left** is **reduction** (add H): use $\\text{NaBH}_4$ or $\\text{LiAlH}_4$.

The **class of the alcohol fixes where on the ladder it can go**:

| Alcohol | One rung up (mild) | Two rungs up (strong) |
|---------|--------------------|-----------------------|
| primary | aldehyde | carboxylic acid |
| secondary | ketone (top of its track) | ketone |
| tertiary | cannot oxidize | cannot oxidize |

Reduction simply reverses these arrows: $\\text{LiAlH}_4$ takes an acid all the way down to a primary alcohol; $\\text{NaBH}_4$ takes a ketone to a secondary alcohol. Seeing oxidation and reduction as two directions on **one** ladder, rather than as separate lists of reagents, is the single highest-leverage mental model in the unit.
      `
    },
    {
      id: 'alcoh7-map',
      type: 'text' as const,
      content: `
### The Alcohol Reaction Map (Recall Check)

Use this as a self-quiz: for each transformation, can you state the reagent from memory?

**Making alcohols (Part 2):**
- alkene $\\rightarrow$ Markovnikov alcohol: oxymercuration ($\\text{Hg(OAc)}_2$, $\\text{H}_2\\text{O}$; $\\text{NaBH}_4$) or acid hydration
- alkene $\\rightarrow$ anti-Markovnikov alcohol: hydroboration ($\\text{BH}_3$; $\\text{H}_2\\text{O}_2/\\text{OH}^-$)
- carbonyl $\\rightarrow$ alcohol: $\\text{NaBH}_4$ or $\\text{LiAlH}_4$
- carbonyl $+$ new C-C bond $\\rightarrow$ alcohol: $\\text{RMgX}$, then $\\text{H}_3\\text{O}^+$

**Reactions of alcohols (Part 3):**
- alcohol $\\rightarrow$ alkyl halide: $\\text{HX}$, or $\\text{SOCl}_2$ / $\\text{PBr}_3$ (no rearrangement)
- alcohol $\\rightarrow$ alkene: conc. $\\text{H}_2\\text{SO}_4$, heat (Zaitsev; E1 for $2°/3°$, E2 for $1°$)
- alcohol $\\rightarrow$ carbonyl: PCC (stop at aldehyde) or Jones (to acid for $1°$)

**Ethers & epoxides (Parts 4-5):**
- alcohol $\\rightarrow$ ether: Williamson (alkoxide $+$ methyl/$1°$ halide, $\\text{S}_\\text{N}2$)
- ether $\\rightarrow$ two alkyl halides: excess hot $\\text{HI}$ / $\\text{HBr}$
- alkene $\\rightarrow$ epoxide: mCPBA
- epoxide $\\rightarrow$ trans-1,2-difunctionalized product: nucleophile (less subst. C under base; more subst. C under acid)
      `
    },
    {
      id: 'alcoh7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Big Map
      `,
      exercise: {
        questions: [
          {
            question: 'On the oxidation ladder, which single transformation is NOT possible?',
            options: [
              'primary alcohol $\\rightarrow$ aldehyde (PCC)',
              'secondary alcohol $\\rightarrow$ ketone (Jones)',
              'tertiary alcohol $\\rightarrow$ ketone (Jones)',
              'ketone $\\rightarrow$ secondary alcohol ($\\text{NaBH}_4$)'
            ],
            correctAnswer: 2,
            explanation: 'A tertiary alcohol cannot be oxidized at all: its carbinol carbon has no C-H to remove, so it cannot become a ketone or anything else. The other three are standard rungs on the ladder (two oxidations and one reduction).'
          },
          {
            question: 'To convert an alkene into an anti-Markovnikov alcohol, the correct reagent sequence is:',
            options: [
              'dilute $\\text{H}_2\\text{SO}_4$, $\\text{H}_2\\text{O}$',
              '$\\text{Hg(OAc)}_2$, $\\text{H}_2\\text{O}$; then $\\text{NaBH}_4$',
              '$\\text{BH}_3 \\cdot \\text{THF}$; then $\\text{H}_2\\text{O}_2$, $\\text{NaOH}$',
              'PCC'
            ],
            correctAnswer: 2,
            explanation: 'Hydroboration-oxidation gives the anti-Markovnikov alcohol with syn addition. Acid hydration and oxymercuration both give the Markovnikov product, and PCC is an oxidant for alcohols, not a way to hydrate an alkene.'
          },
          {
            question: 'Which reagent converts a primary alcohol to a primary alkyl chloride WITHOUT risking carbocation rearrangement?',
            options: [
              'concentrated $\\text{HCl}$',
              '$\\text{SOCl}_2$',
              'conc. $\\text{H}_2\\text{SO}_4$, heat',
              '$\\text{LiAlH}_4$'
            ],
            correctAnswer: 1,
            explanation: 'SOCl2 activates the -OH and proceeds without a free carbocation, preserving the skeleton. Concentrated HCl can proceed via a cation and risk rearrangement; hot H2SO4 dehydrates to an alkene; LiAlH4 is a reducing agent.'
          }
        ]
      }
    },
    {
      id: 'alcoh7-multistep',
      type: 'text' as const,
      content: `
### Multi-Step Synthesis: Chaining the Reactions

**Prompt.** Starting from **1-butene** and any needed reagents, synthesize **butanoic acid** ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{COOH}$).

The target is a four-carbon carboxylic acid with the acid at a terminal (primary) position. Working backward, a carboxylic acid at a terminal carbon comes from oxidizing a **primary alcohol**. So we need 1-butanol first — and to put the $\\text{-OH}$ on the *terminal* carbon of 1-butene, we need **anti-Markovnikov** hydration.

**Forward synthesis:**

1. **1-butene $\\rightarrow$ 1-butanol.** $\\text{BH}_3 \\cdot \\text{THF}$; then $\\text{H}_2\\text{O}_2$, $\\text{NaOH}$. Hydroboration installs the $\\text{-OH}$ anti-Markovnikov, i.e. on the terminal carbon, giving the **primary** alcohol 1-butanol. (Acid hydration would give *secondary* 2-butanol — the wrong isomer.)
2. **1-butanol $\\rightarrow$ butanoic acid.** Jones reagent ($\\text{CrO}_3$, $\\text{H}_2\\text{SO}_4$, $\\text{H}_2\\text{O}$). The strong aqueous oxidant takes the primary alcohol all the way to the carboxylic acid. (PCC would stop at butanal — one rung short.)

**Why each choice matters:** the *regiochemistry* decision (step 1, anti-Markovnikov to get a primary alcohol) and the *oxidant strength* decision (step 2, strong to reach the acid) are exactly the two judgment calls this unit drills. Swap either and you get the wrong product.

> A clean two-step route, and every arrow is a reaction from this suite: hydroboration (Part 2) then strong oxidation (Part 3), organized by the oxidation ladder (Part 7).
      `
    },
    {
      id: 'alcoh7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Multi-Step Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'To make 2-butanone (a ketone) from 1-butene, the correct two-step sequence is:',
            options: [
              'hydroboration-oxidation, then Jones',
              'acid-catalyzed hydration (Markovnikov) to 2-butanol, then Jones oxidation',
              'mCPBA, then $\\text{NaBH}_4$',
              'Williamson synthesis, then $\\text{HI}$'
            ],
            correctAnswer: 1,
            explanation: 'A ketone needs a secondary alcohol precursor, so Markovnikov hydration gives 2-butanol, which Jones oxidizes to the ketone 2-butanone. Hydroboration would give the primary alcohol (then an aldehyde/acid), the wrong oxidation product for a ketone.'
          },
          {
            question: 'A synthesis requires making diethyl ether and then, in a later step, cleaving an ether back to alkyl halides. The correct pair of methods is:',
            options: [
              'Williamson synthesis to form it; excess hot $\\text{HI}$ to cleave it',
              'oxymercuration to form it; $\\text{NaBH}_4$ to cleave it',
              'Jones oxidation to form it; PCC to cleave it',
              'hydroboration to form it; mCPBA to cleave it'
            ],
            correctAnswer: 0,
            explanation: 'Ethers are built by the Williamson synthesis (alkoxide + primary alkyl halide, SN2) and cleaved by excess hot HI or HBr into two alkyl halides. The other reagent pairs are oxidations, reductions, or hydrations that do not form or cleave ethers.'
          },
          {
            question: 'Why does the butanoic-acid synthesis from 1-butene require hydroboration rather than acid-catalyzed hydration in its first step?',
            options: [
              'Acid hydration does not work on alkenes',
              'Only anti-Markovnikov hydration places the -OH on the terminal carbon to give a primary alcohol, which can then be oxidized to a carboxylic acid',
              'Hydroboration is faster',
              'Acid hydration would give an ether'
            ],
            correctAnswer: 1,
            explanation: 'A terminal carboxylic acid needs a primary alcohol precursor with the -OH on the end carbon. Hydroboration is anti-Markovnikov and delivers exactly that; acid hydration is Markovnikov and would give the secondary 2-butanol, which oxidizes only to a ketone, not an acid.'
          },
          {
            question: 'Which statement correctly summarizes the oxidation ladder as it applies to this unit?',
            options: [
              'Reduction adds oxygen and oxidation adds hydrogen',
              'Oxidation (remove H / add O) moves alkane $\\rightarrow$ alcohol $\\rightarrow$ carbonyl $\\rightarrow$ acid; reduction reverses it',
              'Tertiary alcohols sit at the top of the ladder',
              'NaBH4 oxidizes alcohols to ketones'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation removes hydrogen or adds oxygen and climbs the ladder alkane to alcohol to carbonyl to carboxylic acid; reduction (NaBH4, LiAlH4) descends it. Tertiary alcohols cannot climb at all, and NaBH4 reduces rather than oxidizes, so the other choices are wrong.'
          }
        ]
      }
    },
    {
      id: 'alcoh7-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Unit Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Throughout the alcohols-and-ethers unit, the single most frequently decisive structural feature was:',
            options: [
              'the molar mass of the molecule',
              'the substitution class of the key carbon ($1°/2°/3°$, or more vs less substituted)',
              'the color of the compound',
              'the boiling point of the solvent'
            ],
            correctAnswer: 1,
            explanation: 'Substitution class governs oxidation limits (tertiary cannot oxidize), substitution/elimination mechanism (SN1/E1 vs SN2/E2), Williamson viability, and epoxide-opening regiochemistry. It is the recurring decision point across every part of the unit.'
          },
          {
            question: 'Why is the alcohol functional group described as the "hub" of aliphatic functional-group chemistry?',
            options: [
              'because alcohols are always aromatic',
              'because alcohols can be both synthesized from many precursors (alkenes, carbonyls, Grignards) and transformed into many products (halides, alkenes, carbonyls, acids, ethers)',
              'because alcohols never react',
              'because only alcohols contain carbon'
            ],
            correctAnswer: 1,
            explanation: 'Alcohols sit at the crossroads of the reaction map: numerous routes lead into them and numerous transformations lead out of them. That central connectivity, organized by the oxidation ladder, is why mastering alcohol chemistry unlocks so much of the broader subject.'
          }
        ]
      }
    }
  ]
}
