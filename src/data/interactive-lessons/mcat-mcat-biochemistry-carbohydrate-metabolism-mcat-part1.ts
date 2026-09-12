export const mcatCarbMetabPart1Data = {
  topicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  sections: [
    {
      id: 'cm1-intro',
      type: 'text' as const,
      content: `# Carbohydrate Metabolism

**Part 1 of 4 — Glycolysis: Steps, Enzymes & Logic**

### The Big Picture

Glycolysis converts one glucose (6C) into two pyruvate (3C each) in the **cytosol** of every cell, with **no oxygen required**:

Glucose + 2 NAD$^+$ + 2 ADP + 2 P$_i$ → 2 pyruvate + 2 NADH + 2 ATP + 2 H$_2$O

Two phases: an **investment phase** (2 ATP spent) and a **payoff phase** (4 ATP + 2 NADH made) — net 2 ATP.

### The Three Irreversible (Regulated) Steps

| Step | Enzyme | Regulation |
|------|--------|-----------|
| Glucose → G6P | Hexokinase (all tissues) / Glucokinase (liver, beta cells) | Hexokinase inhibited by its product G6P; glucokinase high-$K_m$ glucose sensor, induced by insulin |
| F6P → F1,6-BP | **PFK-1 — rate-limiting** | Inhibited: ATP, citrate. Activated: AMP, **fructose-2,6-bisphosphate** |
| PEP → pyruvate | Pyruvate kinase | Activated: F1,6-BP (feed-forward). Inhibited: ATP, alanine; glucagon-triggered phosphorylation turns liver PK off |

**Fructose-2,6-bisphosphate** is the master switch: made by PFK-2 when insulin dominates, destroyed when glucagon (via PKA) flips the bifunctional PFK-2/FBPase-2 enzyme. High F2,6-BP = glycolysis ON in liver.

### The Payoff Chemistry You Must Recognize

- **Glyceraldehyde-3-phosphate dehydrogenase (GAPDH):** the ONLY oxidation in glycolysis; makes NADH and the high-energy 1,3-BPG.
- **Phosphoglycerate kinase:** 1,3-BPG + ADP → 3-PG + ATP — first substrate-level phosphorylation.
- **Pyruvate kinase:** PEP + ADP → pyruvate + ATP — second substrate-level phosphorylation.
- **Aldolase** splits F1,6-BP into DHAP + G3P; **triose phosphate isomerase** converts DHAP to G3P so BOTH halves continue (this is why payoff numbers are doubled).

### Fates of Pyruvate

| Condition | Fate | Purpose |
|-----------|------|---------|
| Aerobic | PDH → acetyl-CoA → TCA | Full oxidation |
| Anaerobic (muscle, RBC) | Lactate (LDH) | **Regenerates NAD$^+$** so glycolysis can continue |
| Yeast | Ethanol + CO$_2$ | Same NAD$^+$ logic (fermentation) |

**Red blood cells** have no mitochondria: glycolysis to lactate is their ONLY ATP source, 100% of the time. RBCs also run the **2,3-BPG shunt** (bypassing the PGK ATP step) to make the hemoglobin modulator 2,3-BPG.

### Galactose & Fructose Enter Here

- **Fructose** (liver): fructokinase → F1P; aldolase B splits it → enters at G3P/DHAP — **downstream of PFK-1**, so fructose skips the main control point.
- **Galactose:** galactokinase → gal-1-P; GALT (uridyltransferase) swaps it onto UDP → G1P → G6P. Deficiencies: classic galactosemia (GALT) is severe; aldolase B deficiency = hereditary fructose intolerance.`
    },
    {
      id: 'cm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Glycolysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `The rate-limiting enzyme of glycolysis is:`,
            options: [`Hexokinase`, `Phosphofructokinase-1`, `Pyruvate kinase`, `GAPDH`],
            correctAnswer: 1,
            explanation: `PFK-1 catalyzes the first COMMITTED step (F6P → F1,6-BP; G6P can still go to glycogen or the PPP, but F1,6-BP has one destination) and is the pathway's main throttle — inhibited by ATP and citrate, activated by AMP and F2,6-BP.`
          },
          {
            question: `In vigorously exercising muscle, lactate dehydrogenase converts pyruvate to lactate primarily to:`,
            options: [`Produce additional ATP directly`, `Regenerate NAD$^+$ so GAPDH — and glycolysis — can keep running`, `Lower muscle pH for better oxygen delivery`, `Store energy for later use`],
            correctAnswer: 1,
            explanation: `Glycolysis stalls without NAD$^+$ for the GAPDH step. LDH oxidizes NADH back to NAD$^+$ while reducing pyruvate to lactate. The LDH reaction itself makes no ATP — it PERMITS the 2 ATP of glycolysis to keep flowing anaerobically.`
          },
          {
            question: `A liver cell exposed to glucagon shows decreased fructose-2,6-bisphosphate levels. The direct consequence for glycolysis is:`,
            options: [`PFK-1 loses its most potent activator, so glycolysis slows`, `Pyruvate kinase is directly phosphorylated by F2,6-BP`, `Hexokinase is induced`, `Glycolysis accelerates because inhibition is removed`],
            correctAnswer: 0,
            explanation: `F2,6-BP is PFK-1's strongest allosteric activator. Glucagon → PKA phosphorylates the bifunctional enzyme, activating its phosphatase (FBPase-2) domain, dropping F2,6-BP, and releasing the brake on gluconeogenesis while slowing hepatic glycolysis. (PKA also phosphorylates pyruvate kinase, but that is a separate, parallel effect.)`
          },
          {
            question: `Mature red blood cells depend exclusively on glycolysis because they:`,
            options: [`Lack the enzyme hexokinase`, `Lack mitochondria and therefore cannot run the TCA cycle or oxidative phosphorylation`, `Cannot import glucose`, `Contain no cytosol`],
            correctAnswer: 1,
            explanation: `RBCs extrude their mitochondria (and nucleus) during maturation. With no TCA cycle or ETC available, anaerobic glycolysis to lactate provides all their ATP, and the 2,3-BPG shunt doubles as a hemoglobin-regulation pathway.`
          },
          {
            question: `Compared with glucose, a large fructose load is converted to pyruvate (and fat) especially rapidly in the liver because fructose metabolism:`,
            options: [`Uses a more efficient form of PFK-1`, `Enters glycolysis at the triose level, bypassing the PFK-1 control point`, `Generates twice as much NADH per carbon`, `Is coupled directly to the electron transport chain`],
            correctAnswer: 1,
            explanation: `Fructokinase and aldolase B feed fructose carbons in as G3P/DHAP — below PFK-1. Without the ATP/citrate brake, flux runs unchecked into pyruvate and acetyl-CoA, one reason high fructose intake promotes hepatic lipogenesis.`
          }
        ]
      }
    },
    {
      id: 'cm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Cytosolic, O$_2$-independent; net 2 ATP + 2 NADH + 2 pyruvate per glucose
- Three irreversible steps = the control points: hexokinase/glucokinase, PFK-1 (rate-limiting; F2,6-BP is the master activator), pyruvate kinase
- GAPDH is the lone oxidation (needs NAD$^+$); PGK and PK are the substrate-level phosphorylations
- Anaerobic fates exist to regenerate NAD$^+$ (lactate in humans, ethanol in yeast); RBCs are obligate glycolyzers
- Fructose enters BELOW PFK-1 (unregulated); galactose converges at G6P via GALT`
    },
    {
      id: 'cm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Glycolysis Logic

<details>
<summary><b>Example 1: Count ATP and NADH from half a pathway</b></summary>

**Question:** A cell converts 3 molecules of glyceraldehyde-3-phosphate (already formed) through the rest of glycolysis to pyruvate. How many ATP and NADH result?

**Solution:**
1. Per G3P: GAPDH makes 1 NADH; PGK makes 1 ATP; pyruvate kinase makes 1 ATP → 2 ATP + 1 NADH each.
2. For 3 G3P: $3 \\times 2 = 6$ ATP and $3$ NADH.
3. Note there is no investment cost here — the hexokinase and PFK-1 ATP were spent upstream of G3P.

**MCAT Strategy:** "Per G3P: 2 ATP, 1 NADH" is worth memorizing; whole-glucose numbers are just this doubled, minus the 2 invested ATP.
</details>

<details>
<summary><b>Example 2: Predict the effect of an enzyme deficiency</b></summary>

**Question:** A patient has pyruvate kinase deficiency confined to red blood cells, causing hemolytic anemia. Explain why RBCs are selectively vulnerable, and predict the level of 2,3-BPG in these cells.

**Solution:**
1. RBCs rely solely on glycolysis; losing its final ATP-generating step starves them of ATP, membrane pumps fail, and cells lyse. Other tissues survive on oxidative metabolism and other isozymes.
2. Intermediates upstream of the block accumulate — including the 3-phosphoglycerate/2,3-BPG pool. **2,3-BPG rises.**
3. Elevated 2,3-BPG right-shifts the hemoglobin curve, improving O$_2$ unloading — partially compensating for the anemia (a favorite MCAT twist).

**MCAT Strategy:** For any glycolytic enzyme deficiency: upstream intermediates accumulate, downstream products fall, and RBCs suffer first.
</details>

<details>
<summary><b>Example 3: Trace a labeled carbon into lactate</b></summary>

**Question:** Glucose labeled at C-6 undergoes anaerobic glycolysis. Where does the label appear in lactate?

**Solution:**
1. Aldolase splits F1,6-BP: C-1 to C-3 become DHAP, C-4 to C-6 become G3P (C-6 ends up as G3P's phosphate-bearing C-3 position).
2. TPI converts DHAP to G3P too, so both halves proceed; by symmetry C-1 and C-6 both map to the same position of G3P.
3. G3P's C-3 becomes pyruvate's C-3 (the methyl carbon), and LDH reduction does not move carbons: the label lands on **lactate's methyl carbon (C-3)**.

**MCAT Strategy:** Remember the symmetry: after aldolase + TPI, glucose C-1 and C-6 become equivalent (pyruvate C-3); C-3 and C-4 become pyruvate's carboxyl carbon.
</details>`
    }
  ]
};
