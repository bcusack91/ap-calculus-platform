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
- **Galactose:** galactokinase → gal-1-P; GALT (uridyltransferase) exchanges it with UDP-glucose, releasing G1P → G6P. Deficiencies: classic galactosemia (GALT) is severe; aldolase B deficiency = hereditary fructose intolerance.`
    },
    {
      id: 'cm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Glycolysis Logic

**Problem 1.** A cell converts 3 molecules of glyceraldehyde-3-phosphate (G3P, already formed) through the rest of glycolysis to pyruvate.

- **(a)** How many ATP and NADH does one G3P yield on its way to pyruvate?
- **(b)** How many ATP and NADH do the 3 G3P yield?
- **(c)** Does any investment ATP have to be subtracted?

**(a) Per G3P.** GAPDH makes 1 NADH; PGK makes 1 ATP; pyruvate kinase makes 1 ATP. That is 2 ATP + 1 NADH per G3P.

**(b) Three G3P.** With 2 ATP + 1 NADH per G3P from (a): $3 \\times 2 = 6$ ATP and $3$ NADH.

**(c) No investment cost.** The hexokinase and PFK-1 ATP were spent upstream of G3P, so nothing is subtracted. "Per G3P: 2 ATP, 1 NADH" is worth memorizing; whole-glucose numbers are this doubled, minus the 2 invested ATP.

**Problem 2.** A patient has pyruvate kinase deficiency confined to red blood cells, causing hemolytic anemia.

- **(a)** Why are RBCs selectively vulnerable?
- **(b)** Does the level of 2,3-BPG in these cells rise or fall?
- **(c)** How does that change affect oxygen delivery?

**(a) Sole ATP source.** RBCs rely solely on glycolysis; losing its final ATP-generating step starves them of ATP, membrane pumps fail, and cells lyse. Other tissues survive on oxidative metabolism and other isozymes.

**(b) Upstream pileup.** Intermediates upstream of the block accumulate, including 1,3-BPG, and the excess 1,3-BPG is shunted to 2,3-BPG, so **2,3-BPG rises**.

**(c) Partial compensation.** The raised 2,3-BPG from (b) right-shifts the hemoglobin curve, improving O$_2$ unloading and partly offsetting the anemia. For any glycolytic enzyme deficiency: upstream intermediates accumulate, downstream products fall, and RBCs suffer first.

**Problem 3.** Glucose labeled at C-6 undergoes anaerobic glycolysis to lactate.

- **(a)** Which triose carries the label after aldolase splits F1,6-BP?
- **(b)** Where would a label at glucose C-1 end up in G3P?
- **(c)** Which carbon of lactate carries the C-6 label?

**(a) Aldolase split.** C-1 to C-3 become DHAP and C-4 to C-6 become G3P, so the label sits on G3P, at its phosphate-bearing C-3 position.

**(b) TPI symmetry.** TPI converts DHAP to G3P too, so both halves proceed; glucose C-1 maps to the same G3P position (C-3) as C-6.

**(c) Lactate's methyl carbon.** G3P's C-3 becomes pyruvate's C-3 (the methyl carbon), and LDH reduction does not move carbons: the label lands on **lactate's methyl carbon (C-3)**. By the same symmetry, glucose C-3 and C-4 become pyruvate's carboxyl carbon.`
    },
    {
      id: 'cm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Glycolysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `The rate-limiting enzyme of glycolysis is:`,
            options: [`Hexokinase`, `Phosphofructokinase-1`, `Pyruvate kinase`, `Glyceraldehyde-3-phosphate dehydrogenase`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `PFK-1 catalyzes the first COMMITTED step (F6P → F1,6-BP; G6P can still go to glycogen or the PPP, but F1,6-BP has one destination) and is the pathway's main throttle — inhibited by ATP and citrate, activated by AMP and F2,6-BP.`
          },
          {
            question: `In vigorously exercising muscle, lactate dehydrogenase converts pyruvate to lactate primarily to:`,
            options: [`Produce additional ATP by substrate-level phosphorylation`, `Regenerate NAD$^+$ so glycolysis can continue`, `Prevent pyruvate from inhibiting PFK-1 at the rate-limiting step`, `Supply extra NADH to the electron transport chain`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Glycolysis stalls without NAD$^+$ for the GAPDH step. LDH oxidizes NADH back to NAD$^+$ while reducing pyruvate to lactate. The LDH reaction itself makes no ATP — it PERMITS the 2 ATP of glycolysis to keep flowing anaerobically. Pyruvate is not an inhibitor of PFK-1 (ATP and citrate are), so clearing pyruvate does not relieve any PFK-1 brake, and lactate formation consumes NADH rather than supplying it to the ETC.`
          },
          {
            question: `A liver cell exposed to glucagon shows decreased fructose-2,6-bisphosphate levels. The direct consequence for glycolysis is:`,
            options: [`PFK-1 loses its main activator; glycolysis slows`, `Pyruvate kinase is directly phosphorylated by F2,6-BP`, `Hexokinase is allosterically activated by F2,6-BP`, `Glycolysis accelerates because inhibition is removed`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `F2,6-BP is PFK-1's strongest allosteric activator. Glucagon → PKA phosphorylates the bifunctional enzyme, activating its phosphatase (FBPase-2) domain, dropping F2,6-BP, and releasing the brake on gluconeogenesis while slowing hepatic glycolysis. (PKA also phosphorylates pyruvate kinase, but that is a separate, parallel effect.)`
          },
          {
            question: `Mature red blood cells depend exclusively on glycolysis because they:`,
            options: [`Lack the enzyme hexokinase`, `Lack mitochondria for aerobic respiration`, `Cannot import glucose without insulin`, `Lack pentose phosphate pathway enzymes`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `RBCs extrude their mitochondria (and nucleus) during maturation. With no TCA cycle or ETC available, anaerobic glycolysis to lactate provides all their ATP, and the 2,3-BPG shunt doubles as a hemoglobin-regulation pathway.`
          },
          {
            question: `Compared with glucose, a large fructose load is converted to pyruvate (and fat) especially rapidly in the liver because fructose metabolism:`,
            options: [`Activates PFK-1 more strongly than glucose does`, `Enters glycolysis below the PFK-1 control point`, `Generates twice as much NADH per carbon`, `Is coupled directly to the electron transport chain`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Fructokinase and aldolase B feed fructose carbons in as G3P/DHAP — below PFK-1. Without the ATP/citrate brake, flux runs unchecked into pyruvate and acetyl-CoA, one reason high fructose intake promotes hepatic lipogenesis.`
          }
        ]
      }
    },
    {
      id: 'cm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Net yield.** Cytosolic and O$_2$-independent: one glucose gives net 2 ATP, 2 NADH and 2 pyruvate.
- **Three control points.** Hexokinase/glucokinase, PFK-1 (rate-limiting, activated by F2,6-BP) and pyruvate kinase are irreversible.
- **Oxidation and ATP steps.** GAPDH is the lone oxidation (needs NAD$^+$); PGK and pyruvate kinase make ATP at the substrate level.
- **Why lactate forms.** LDH regenerates NAD$^+$ so glycolysis continues; RBCs, lacking mitochondria, always end at lactate.

**Common traps**

- **Lactate as an ATP source.** LDH makes no ATP; it recycles NAD$^+$ so the 2 ATP of glycolysis can keep flowing.
- **Fructose obeys PFK-1.** In liver, fructose enters as G3P/DHAP below PFK-1, so it skips the main glycolytic brake.
- **Counting one triose.** TPI turns DHAP into G3P, so both halves run and every payoff-phase yield doubles per glucose.
- **Subtracting investment twice.** Starting from G3P, the 2 invested ATP were already spent: each G3P gives 2 ATP + 1 NADH.`
    }
  ]
};
