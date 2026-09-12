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

In the mitochondrial matrix, the PDH complex performs **oxidative decarboxylation**:

Pyruvate + CoA + NAD$^+$ → acetyl-CoA + CO$_2$ + NADH

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
      id: 'be2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Carriers, PDH & the TCA Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `One turn of the citric acid cycle processing one acetyl-CoA directly yields:`,
            options: [`3 NADH, 1 FADH$_2$, 1 GTP, 2 CO$_2$`, `2 NADH, 2 FADH$_2$, 1 ATP, 2 CO$_2$`, `3 NADH, 1 FADH$_2$, 1 GTP, 1 CO$_2$`, `4 NADH, 1 GTP, 2 CO$_2$`],
            correctAnswer: 0,
            explanation: `The stoichiometry per acetyl-CoA: NADH at isocitrate DH, $\\alpha$-KG DH, and malate DH (3 total); FADH$_2$ at succinate DH; GTP at succinyl-CoA synthetase; CO$_2$ at the two oxidative decarboxylations.`
          },
          {
            question: `A patient with severe thiamine deficiency accumulates pyruvate and lactate in the blood. The enzyme complex most directly impaired is:`,
            options: [`Citrate synthase`, `Pyruvate dehydrogenase`, `Lactate dehydrogenase`, `Pyruvate kinase`],
            correctAnswer: 1,
            explanation: `PDH requires TPP (thiamine pyrophosphate) for the initial decarboxylation of pyruvate. Without it, pyruvate cannot become acetyl-CoA; it backs up and is shunted to lactate. ($\\alpha$-KG dehydrogenase is also TPP-dependent, but the pyruvate/lactate pattern points to PDH.)`
          },
          {
            question: `The citric acid cycle slows dramatically in anaerobic conditions even though no cycle enzyme uses O$_2$. The reason is that:`,
            options: [`CO$_2$ accumulates and inhibits citrate synthase`, `Without electron transport, NADH accumulates and NAD$^+$ becomes unavailable for the cycle's dehydrogenases`, `Oxygen is a substrate of succinate dehydrogenase`, `GTP cannot be made without oxygen`],
            correctAnswer: 1,
            explanation: `The cycle's three NAD$^+$-dependent dehydrogenases stall when NAD$^+$ is exhausted. Only the O$_2$-dependent ETC reoxidizes NADH (and FADH$_2$) in mitochondria, so oxygen limitation shuts the cycle down indirectly.`
          },
          {
            question: `Which molecule stimulates pyruvate dehydrogenase kinase, thereby turning PDH OFF?`,
            options: [`ADP`, `Pyruvate`, `Acetyl-CoA`, `Ca$^{2+}$`],
            correctAnswer: 2,
            explanation: `Products of the PDH reaction and downstream energy abundance — acetyl-CoA, NADH, ATP — activate PDH kinase, which phosphorylates and inactivates PDH. ADP and pyruvate inhibit the kinase (keeping PDH on), and Ca$^{2+}$ activates the phosphatase (also keeping PDH on).`
          },
          {
            question: `During rapid fatty acid synthesis, citrate is exported from mitochondria, depleting cycle intermediates. Which reaction best replenishes oxaloacetate?`,
            options: [`Pyruvate + CO$_2$ + ATP → oxaloacetate (pyruvate carboxylase)`, `Acetyl-CoA + oxaloacetate → citrate`, `Glucose → 2 pyruvate`, `Succinate → fumarate`],
            correctAnswer: 0,
            explanation: `Anaplerosis means refilling the intermediate pool. Pyruvate carboxylase (biotin-dependent, allosterically activated by acetyl-CoA) synthesizes new OAA. Citrate synthase CONSUMES OAA, and reactions within the cycle cannot produce a net increase in intermediates.`
          }
        ]
      }
    },
    {
      id: 'be2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- NADH/FADH$_2$ feed the ETC (catabolism); NADPH powers biosynthesis and glutathione (anabolism) — never interchange them
- PDH: pyruvate → acetyl-CoA + CO$_2$ + NADH; 5 cofactors (TPP, lipoate, CoA, FAD, NAD$^+$); phosphorylation turns it OFF; irreversible
- Per acetyl-CoA: 3 NADH + 1 FADH$_2$ + 1 GTP + 2 CO$_2$; isocitrate DH is rate-limiting (ADP on, ATP/NADH off)
- Succinate dehydrogenase doubles as Complex II
- Cycle needs NAD$^+$ regenerated by the ETC → indirectly O$_2$-dependent; anaplerosis (pyruvate carboxylase) refills siphoned intermediates`
    },
    {
      id: 'be2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Tracing Carbons & Regulation

<details>
<summary><b>Example 1: Radiolabel tracing through PDH and one TCA turn</b></summary>

**Question:** Glucose is labeled with $^{14}C$ at C-1. After glycolysis, the label appears on pyruvate's methyl carbon (C-3). Is the labeled carbon released as CO$_2$ by PDH?

**Solution:**
1. PDH decarboxylates pyruvate's CARBOXYL carbon (C-1 of pyruvate), not the methyl carbon.
2. The methyl label therefore enters acetyl-CoA (as part of the acetyl group's methyl carbon) and is NOT released by PDH.
3. It also survives the first turn of the TCA cycle: the two CO$_2$ molecules released in a given turn come from carbons that entered as part of oxaloacetate in that turn, not from the incoming acetyl group (label emerges in later turns).

**MCAT Strategy:** For label questions, track which specific carbon each decarboxylation removes — PDH removes pyruvate's carboxyl carbon, and the acetyl carbons are not lost in their first TCA turn.
</details>

<details>
<summary><b>Example 2: Predict the effect of a Complex II mutation</b></summary>

**Question:** A tumor cell line carries loss-of-function mutations in succinate dehydrogenase. Which metabolite accumulates, and what happens to FADH$_2$-derived electron flow?

**Solution:**
1. SDH catalyzes succinate → fumarate; loss of function means **succinate accumulates** (an "oncometabolite" that stabilizes HIF and alters signaling).
2. SDH IS Complex II — the same protein oxidizes succinate and passes electrons to CoQ. Its loss removes that entry point into the ETC.
3. NADH-linked (Complex I) electron flow continues, so the cell is not fully ETC-dead, but succinate oxidation is blocked.

**MCAT Strategy:** Any question linking the TCA cycle and the ETC through one enzyme is about succinate dehydrogenase — the only enzyme in both.
</details>

<details>
<summary><b>Example 3: Reading a PDH regulation experiment</b></summary>

**Question:** Isolated mitochondria are incubated with pyruvate. Adding dichloroacetate (an inhibitor of PDH kinase) increases acetyl-CoA production. Explain, and predict the effect of adding high Ca$^{2+}$ instead.

**Solution:**
1. PDH kinase phosphorylates PDH → inactive. Inhibiting the kinase keeps PDH dephosphorylated and ACTIVE, so flux to acetyl-CoA rises — consistent with the observation.
2. Ca$^{2+}$ activates PDH phosphatase, which removes inhibitory phosphates: also MORE active PDH, same direction of effect. (This is how contracting muscle couples Ca$^{2+}$ signaling to fuel oxidation.)
3. Both manipulations converge on the phosphorylation state of E1.

**MCAT Strategy:** For any "kinase of the kinase" logic, write the chain out with arrows and signs; an inhibitor of an inhibitor is an activator.
</details>`
    }
  ]
};
