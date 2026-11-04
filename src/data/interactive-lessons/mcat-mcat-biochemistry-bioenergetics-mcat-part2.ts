export const mcatBioenergeticsPart2Data = {
  topicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  sections: [
    {
      id: 'be2-intro',
      type: 'text' as const,
      content: `# Bioenergetics

**Part 2 of 4 — Redox Carriers, PDH & the Citric Acid Cycle**

### Biological Redox: Follow the Electrons

Oxidation = losing electrons (often losing H, gaining O); reduction = gaining electrons. Catabolism strips electrons from fuel and loads them onto mobile carriers:

| Carrier | Reduced form | Source vitamin | Delivers to |
|---------|--------------|----------------|-------------|
| NAD$^+$ | NADH (+ H$^+$) | Niacin (B3) | Complex I of the ETC |
| FAD | FADH$_2$ | Riboflavin (B2) | Complex II (as enzyme-bound FADH$_2$) |
| NADP$^+$ | NADPH | Niacin | Anabolism & antioxidant defense (NOT the ETC) |

**NADH is catabolic cash; NADPH is anabolic credit.** The MCAT loves this division of labor.

### Pyruvate Dehydrogenase (PDH): The Gateway

In the mitochondrial matrix, the PDH complex performs **oxidative decarboxylation**: pyruvate + CoA + NAD$^+$ → acetyl-CoA + CO$_2$ + NADH.

Five cofactors ("Tender Loving Care For Nancy"): **T**PP (thiamine/B1), **L**ipoic acid, **C**oA (pantothenate/B5), **F**AD (B2), **N**AD$^+$ (B3). Regulation:

- PDH **kinase** phosphorylates and INACTIVATES PDH; the kinase is stimulated by NADH, acetyl-CoA, and ATP (products signal "enough").
- PDH **phosphatase** (activated by Ca$^{2+}$, and by insulin in adipose) removes the phosphate, reactivating PDH.
- This step is **irreversible** — the reason carbohydrate carbon, once in acetyl-CoA, cannot make new glucose.

### The Citric Acid Cycle (One Turn, One Acetyl-CoA)

Acetyl-CoA (2C) + oxaloacetate (4C) → citrate (6C) → ... → oxaloacetate regenerated.

**Per turn:** 3 NADH, 1 FADH$_2$, 1 GTP (succinyl-CoA synthetase — substrate-level), 2 CO$_2$ released.

| Step to know | Enzyme | Why it matters |
|--------------|--------|----------------|
| Acetyl-CoA + OAA → citrate | Citrate synthase | Inhibited by NADH, citrate |
| Isocitrate → $\\alpha$-KG + CO$_2$ + NADH | Isocitrate dehydrogenase | **Rate-limiting**; ADP activates, ATP/NADH inhibit |
| $\\alpha$-KG → succinyl-CoA + CO$_2$ + NADH | $\\alpha$-KG dehydrogenase | PDH's twin (same 5 cofactors); inhibited by NADH, succinyl-CoA |
| Succinate → fumarate + FADH$_2$ | Succinate dehydrogenase | The only membrane-bound step — it IS Complex II |
| Malate → OAA + NADH | Malate dehydrogenase | $\\Delta G^{\\circ\\prime} > 0$; pulled forward by citrate synthase |

### The Cycle Is a Hub, Not Just a Furnace

Intermediates are siphoned for biosynthesis (citrate → fatty acids; $\\alpha$-KG → glutamate; succinyl-CoA → heme; OAA → aspartate, glucose). **Anaplerotic** reactions refill the pool — chiefly pyruvate carboxylase (pyruvate + CO$_2$ + ATP → OAA, biotin-dependent, activated by acetyl-CoA).

**Oxygen connection:** the cycle uses no O$_2$ directly, yet halts under anaerobic conditions because NADH accumulates and NAD$^+$ runs out — the ETC (which needs O$_2$) is what reoxidizes the carriers.`
    },
    {
      id: 'be2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Tracing Carbons & Regulation

**Problem 1.** Glucose is labeled with $^{14}$C at C-1. After glycolysis, the label sits on pyruvate's methyl carbon (C-3).

- **(a)** Which pyruvate carbon does PDH release as CO$_2$?
- **(b)** Where does the labeled methyl carbon go?
- **(c)** Is the label released as CO$_2$ in its first turn of the TCA cycle?

**(a) PDH's CO$_2$.** PDH decarboxylates pyruvate's CARBOXYL carbon (C-1 of pyruvate), not the methyl carbon.

**(b) Into acetyl-CoA.** Because PDH removes only the carboxyl carbon, the methyl label enters acetyl-CoA as the acetyl group's methyl carbon and is NOT released by PDH.

**(c) The first turn.** No. The two CO$_2$ released in a given turn come from carbons that entered as part of oxaloacetate in that turn, not from the incoming acetyl group; the label emerges in later turns. For label questions, track which specific carbon each decarboxylation removes.

**Problem 2.** A tumor cell line carries loss-of-function mutations in succinate dehydrogenase (SDH).

- **(a)** Which metabolite accumulates?
- **(b)** What happens to electron flow from succinate's FADH$_2$?
- **(c)** Is the cell's electron transport chain shut down completely?

**(a) Succinate.** SDH catalyzes succinate → fumarate; loss of function means **succinate accumulates**.

**(b) Complex II is lost.** SDH IS Complex II — the same protein oxidizes succinate and passes electrons to CoQ. Its loss removes that entry point into the ETC.

**(c) Complex I still runs.** No. NADH-linked (Complex I) electron flow continues, so the cell is not fully ETC-dead; only succinate oxidation is blocked. Any question linking the TCA cycle and the ETC through one enzyme is about SDH — the only enzyme in both.

<!-- yield:low -->
- Problem 2 aside: in SDH-deficient tumors the accumulated succinate acts as an "oncometabolite" — it stabilizes the hypoxia factor HIF and alters signaling.
<!-- /yield -->

**Problem 3.** Isolated mitochondria are incubated with pyruvate. Adding dichloroacetate, an inhibitor of PDH kinase, increases acetyl-CoA production.

- **(a)** Why does inhibiting PDH kinase raise acetyl-CoA production?
- **(b)** What would adding high Ca$^{2+}$ instead do to PDH activity?
- **(c)** What do the two manipulations have in common?

**(a) The kinase is blocked.** PDH kinase phosphorylates PDH → inactive. Inhibiting the kinase keeps PDH dephosphorylated and ACTIVE, so flux to acetyl-CoA rises — consistent with the observation.

**(b) Calcium.** Ca$^{2+}$ activates PDH phosphatase, which removes inhibitory phosphates: also MORE active PDH, the same direction as (a). This is how contracting muscle couples Ca$^{2+}$ signaling to fuel oxidation.

**(c) One switch.** Both converge on the phosphorylation state of PDH. For any "kinase of the kinase" logic, write the chain out with arrows and signs; an inhibitor of an inhibitor is an activator.

<!-- yield:low -->
- Problem 3 aside: the subunit that PDH kinase phosphorylates is E1, the complex's pyruvate-decarboxylating component.
<!-- /yield -->`
    },
    {
      id: 'be2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Carriers, PDH & the TCA Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `One turn of the citric acid cycle processing one acetyl-CoA directly yields:`,
            options: [`3 NADH, 1 FADH$_2$, 1 GTP, 2 CO$_2$`, `2 NADH, 2 FADH$_2$, 1 ATP, 2 CO$_2$`, `3 NADH, 1 FADH$_2$, 1 GTP, 1 CO$_2$`, `4 NADH, 1 GTP, 2 CO$_2$`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The stoichiometry per acetyl-CoA: NADH at isocitrate DH, $\\alpha$-KG DH, and malate DH (3 total); FADH$_2$ at succinate DH; GTP at succinyl-CoA synthetase; CO$_2$ at the two oxidative decarboxylations.`
          },
          {
            question: `A patient with severe thiamine deficiency accumulates pyruvate and lactate in the blood. The enzyme complex most directly impaired is:`,
            options: [`Pyruvate carboxylase`, `Pyruvate dehydrogenase`, `Lactate dehydrogenase`, `Pyruvate kinase`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `PDH requires TPP (thiamine pyrophosphate) for the initial decarboxylation of pyruvate. Without it, pyruvate cannot become acetyl-CoA; it backs up and is shunted to lactate. ($\\alpha$-KG dehydrogenase is also TPP-dependent, but the pyruvate/lactate pattern points to PDH.)`
          },
          {
            question: `The citric acid cycle slows dramatically in anaerobic conditions even though no cycle enzyme uses O$_2$. The reason is that:`,
            options: [`CO$_2$ accumulates and inhibits citrate synthase`, `NAD$^+$ is not regenerated without the ETC`, `Oxygen is a substrate of succinate dehydrogenase`, `Excess NAD$^+$ feedback-inhibits the cycle's dehydrogenases`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The cycle's three NAD$^+$-dependent dehydrogenases stall when NADH accumulates and NAD$^+$ is exhausted — the problem is too little NAD$^+$, not too much. Only the O$_2$-dependent ETC reoxidizes NADH (and FADH$_2$) in mitochondria, so oxygen limitation shuts the cycle down indirectly.`
          },
          {
            question: `Which molecule stimulates pyruvate dehydrogenase kinase, thereby turning PDH OFF?`,
            options: [`ADP`, `Pyruvate`, `Acetyl-CoA`, `Ca$^{2+}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Products of the PDH reaction and downstream energy abundance — acetyl-CoA, NADH, ATP — activate PDH kinase, which phosphorylates and inactivates PDH. ADP and pyruvate inhibit the kinase (keeping PDH on), and Ca$^{2+}$ activates the phosphatase (also keeping PDH on).`
          },
          {
            question: `During rapid fatty acid synthesis, citrate is exported from mitochondria, depleting cycle intermediates. Which reaction best replenishes oxaloacetate?`,
            options: [`Pyruvate + CO$_2$ + ATP → oxaloacetate`, `Acetyl-CoA + oxaloacetate → citrate`, `Oxaloacetate + GTP → PEP + CO$_2$ + GDP`, `Oxaloacetate + NADH → malate + NAD$^+$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Anaplerosis means refilling the intermediate pool. Pyruvate carboxylase (biotin-dependent, allosterically activated by acetyl-CoA) synthesizes new OAA from pyruvate. Citrate synthase, PEPCK, and the reduction of OAA to malate all CONSUME oxaloacetate rather than adding to the pool.`
          }
        ]
      }
    },
    {
      id: 'be2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **NADH vs. NADPH.** NADH and FADH$_2$ feed the ETC (catabolism); NADPH powers biosynthesis and glutathione (anabolism).
- **PDH, the gateway.** Pyruvate → acetyl-CoA + CO$_2$ + NADH with 5 cofactors (TPP, lipoate, CoA, FAD, NAD$^+$); irreversible.
- **One turn's yield.** 3 NADH + 1 FADH$_2$ + 1 GTP + 2 CO$_2$; isocitrate DH is rate-limiting (ADP on, ATP/NADH off).
- **A hub tied to the ETC.** SDH doubles as Complex II; anaplerosis (pyruvate carboxylase) refills siphoned intermediates.

**Common traps**

- **"No O$_2$ needed."** No cycle enzyme uses O$_2$, but without the ETC NAD$^+$ runs out and the cycle stalls.
- **Phosphorylation activates PDH.** PDH kinase phosphorylates PDH to turn it OFF; the phosphatase (Ca$^{2+}$) turns it back on.
- **Acetyl-CoA makes glucose.** It cannot give NET new glucose: PDH is irreversible, and each TCA turn loses 2 CO$_2$ for the 2 carbons acetyl-CoA brings.
- **Acetyl carbons leave at once.** A turn's 2 CO$_2$ come from oxaloacetate carbons; incoming acetyl carbons leave in later turns.

<!-- yield:low -->
- Low-yield extras: succinate that builds up in SDH-deficient tumors acts as an "oncometabolite" (stabilizes HIF); PDH kinase phosphorylates the E1 subunit
<!-- /yield -->`
    }
  ]
};
