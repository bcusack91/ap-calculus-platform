export const mcatCarbMetabPart3Data = {
  topicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  sections: [
    {
      id: 'cm3-intro',
      type: 'text' as const,
      content: `# Carbohydrate Metabolism

**Part 3 of 4 — Glycogen Metabolism & the Pentose Phosphate Pathway**

### Glycogen Architecture

Glycogen is a branched glucose polymer: **$\\alpha$-1,4 linkages** in chains, **$\\alpha$-1,6 linkages** at branch points (every ~8-12 residues). Branching creates many nonreducing ends for FAST simultaneous synthesis/degradation and improves solubility. Stored mainly in **liver** (for blood glucose) and **muscle** (for its own fuel).

### Synthesis (Glycogenesis)

1. G6P → G1P (phosphoglucomutase)
2. G1P + UTP → **UDP-glucose** (the activated donor)
3. **Glycogen synthase** (rate-limiting) adds glucose to nonreducing ends via $\\alpha$-1,4 bonds; needs a primer (glycogenin autoglucosylates to start new granules)
4. **Branching enzyme** transfers a block of ~7 residues to create an $\\alpha$-1,6 branch

### Degradation (Glycogenolysis)

1. **Glycogen phosphorylase** (rate-limiting; uses pyridoxal phosphate/B6) cleaves $\\alpha$-1,4 bonds by **phosphorolysis** → G1P (no ATP needed!)
2. Phosphorylase stalls 4 residues from a branch; the **debranching enzyme** (two activities: 4:4 transferase moves the chain; $\\alpha$-1,6-glucosidase releases the branch residue as FREE glucose)
3. G1P → G6P; liver exports glucose via G6Pase, muscle burns it

About 90% of released residues are G1P; ~10% (branch points) are free glucose.

### Hormonal Control — The Same Cascade, Opposite Enzymes

- **Glucagon (liver) / epinephrine (muscle + liver)** → G$_s$ → adenylyl cyclase → cAMP → **PKA** → phosphorylase kinase → phosphorylase b becomes phosphorylase **a** (ACTIVE); PKA also phosphorylates glycogen synthase (INACTIVE). Phosphorylation = breakdown mode.
- **Insulin** → activates phosphatases (PP1) that strip these phosphates: synthase ON, phosphorylase OFF. Dephosphorylation = storage mode.
- Allosteric shortcuts: muscle phosphorylase is activated by AMP and Ca$^{2+}$ (via phosphorylase kinase's calmodulin subunit — contraction couples directly to fuel), inhibited by ATP and G6P; liver phosphorylase a is inhibited by glucose itself.

**Glycogen storage diseases to recognize:** von Gierke (G6Pase — severe fasting hypoglycemia + hepatomegaly), Pompe (lysosomal acid $\\alpha$-glucosidase — cardiomegaly), Cori (debrancher — abnormal short-branched glycogen), McArdle (muscle phosphorylase — exercise cramps, no rise in blood lactate on exercise).

### The Pentose Phosphate Pathway (HMP Shunt)

Cytosolic, parallel to glycolysis, **no ATP made or used**. Two products, two phases:

| Phase | Key enzyme | Products |
|-------|-----------|----------|
| Oxidative (irreversible) | **G6P dehydrogenase (G6PD)** — rate-limiting; inhibited by NADPH | **2 NADPH** + CO$_2$ + ribulose-5-P |
| Nonoxidative (reversible) | Transketolase (TPP!) & transaldolase | **Ribose-5-P** for nucleotides, or back to F6P/G3P |

**NADPH jobs:** fatty acid & cholesterol synthesis, respiratory burst (NADPH oxidase), cytochrome P450, and **reducing glutathione** — the RBC's only defense against peroxides.

**G6PD deficiency:** the most common human enzyme deficiency. Oxidant stress (fava beans, sulfa drugs, antimalarials, infection) overwhelms glutathione regeneration → hemoglobin precipitates (**Heinz bodies**) → **hemolytic anemia** with bite cells. Mild advantage against malaria explains its prevalence.`
    },
    {
      id: 'cm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Glycogen & the PPP** 🎯`,
      exercise: {
        questions: [
          {
            question: `Glycogen phosphorylase releases glucose-1-phosphate using inorganic phosphate rather than water. An advantage of phosphorolysis over hydrolysis is that:`,
            options: [`The product is already phosphorylated, so no ATP is spent trapping it in the cell`, `It works on $\\alpha$-1,6 bonds`, `It requires no cofactor`, `It can proceed only in lysosomes`],
            correctAnswer: 0,
            explanation: `G1P converts to G6P without consuming ATP, saving one ATP per glucose compared with free glucose + hexokinase. (Phosphorylase needs pyridoxal phosphate and only cleaves $\\alpha$-1,4 bonds — the debrancher handles $\\alpha$-1,6.)`
          },
          {
            question: `Epinephrine binding its hepatic receptor raises cAMP. The resulting phosphorylation events cause:`,
            options: [`Activation of both glycogen synthase and phosphorylase`, `Activation of glycogen phosphorylase and inactivation of glycogen synthase`, `Inactivation of both enzymes`, `Activation of glycogen synthase only`],
            correctAnswer: 1,
            explanation: `PKA's phosphorylations are reciprocal: phosphorylase kinase → phosphorylase a (active), while glycogen synthase is directly phosphorylated to its inactive form. One second messenger flips the tissue into net glycogen breakdown with no futile cycle.`
          },
          {
            question: `A child presents with severe fasting hypoglycemia, lactic acidosis, and massive hepatomegaly. Glycogen structure is normal. Administering glucagon fails to raise blood glucose. The deficient enzyme is most likely:`,
            options: [`Muscle glycogen phosphorylase`, `Glucose-6-phosphatase`, `Branching enzyme`, `Glycogen synthase`],
            correctAnswer: 1,
            explanation: `Von Gierke disease: the liver degrades glycogen normally (structure normal, glucagon-responsive cascade intact) but cannot dephosphorylate G6P for export — so glucose stays trapped, glycogen and G6P accumulate (hepatomegaly), and excess G6P overflows into glycolysis (lactate) and other pathways.`
          },
          {
            question: `The pentose phosphate pathway's oxidative phase is essential to red blood cells primarily because it:`,
            options: [`Produces ribose-5-phosphate for RBC DNA synthesis`, `Generates ATP anaerobically`, `Supplies NADPH to keep glutathione reduced, protecting against oxidative damage`, `Produces 2,3-BPG`],
            correctAnswer: 2,
            explanation: `Mature RBCs make no DNA and get ATP from glycolysis. Their constant O$_2$ exposure generates peroxides; glutathione peroxidase detoxifies them, and glutathione reductase needs NADPH — supplied only by the PPP in RBCs. Hence G6PD deficiency causes oxidant-triggered hemolysis.`
          },
          {
            question: `A dividing cell needs ribose-5-phosphate for nucleotides but has ample NADPH. Which route best serves it?`,
            options: [`Running the oxidative PPP phase at maximum`, `Running the nonoxidative phase in reverse: F6P and G3P from glycolysis are converted to ribose-5-P by transketolase/transaldolase`, `Synthesizing ribose from acetyl-CoA`, `Degrading glycogen branch points`],
            correctAnswer: 1,
            explanation: `The nonoxidative phase is fully reversible, letting cells make ribose-5-P from glycolytic intermediates WITHOUT generating unwanted NADPH (which would feedback-inhibit G6PD anyway). The pathway's two products are independently dialable — a classic MCAT design question.`
          }
        ]
      }
    },
    {
      id: 'cm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Glycogen: $\\alpha$-1,4 chains, $\\alpha$-1,6 branches; UDP-glucose builds it (synthase + brancher); phosphorylase (B6, phosphorolysis → G1P) + debrancher tear it down
- Phosphorylation = breakdown mode (phosphorylase ON, synthase OFF); insulin/PP1 reverses; muscle adds AMP and Ca$^{2+}$ shortcuts, liver phosphorylase senses glucose
- Disease anchors: von Gierke = G6Pase, McArdle = muscle phosphorylase (no exercise lactate rise), Cori = debrancher, Pompe = lysosomal
- PPP: G6PD (rate-limiting, NADPH-inhibited) makes 2 NADPH + R5P; nonoxidative phase reversible (transketolase needs TPP)
- NADPH = biosynthesis + glutathione defense; G6PD deficiency = oxidant-drug hemolysis with Heinz bodies`
    },
    {
      id: 'cm3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Storage & Shunt Problems

<details>
<summary><b>Example 1: McArdle disease exercise test</b></summary>

**Question:** During an ischemic forearm exercise test, a healthy subject's venous lactate rises several-fold; a patient's lactate stays flat while ammonia rises, and the patient cramps early. Which enzyme is deficient and why does a "second wind" occur with continued gentle exercise?

**Solution:**
1. Flat lactate despite exercise = muscle cannot mobilize glycogen → **muscle glycogen phosphorylase (McArdle disease)**. Glycolysis from blood glucose still works, but glycogen (the rapid fuel) is locked.
2. Cramps and myoglobinuria reflect ATP shortfall in fast-twitch fibers.
3. "Second wind": as circulation delivers more blood glucose and free fatty acids, oxidative metabolism substitutes for the missing glycogenolysis, easing symptoms.

**MCAT Strategy:** "Exercise intolerance + no lactate rise" is the McArdle fingerprint; contrast with von Gierke, where lactate is chronically HIGH.
</details>

<details>
<summary><b>Example 2: Predict glycogen structure from a missing enzyme</b></summary>

**Question:** Describe the glycogen produced when (a) branching enzyme is deficient, and (b) debranching enzyme is deficient.

**Solution:**
1. (a) Without the brancher, synthase still elongates $\\alpha$-1,4 chains: very LONG, UNBRANCHED chains (Andersen disease) — poorly soluble, fewer ends, and the abnormal polysaccharide damages the liver.
2. (b) Without the debrancher, phosphorylase strips chains down to 4 residues from each branch and stops: a "limit dextrin"-like glycogen with SHORT outer branches accumulates (Cori disease); fasting hypoglycemia is milder than von Gierke because the outer $\\alpha$-1,4 residues are still releasable.
3. Structure predicts pathology: both are storage diseases, but the stored material differs in architecture.

**MCAT Strategy:** Tie each enzyme to a structural signature — brancher missing = long straight chains; debrancher missing = short-branched limit dextrins.
</details>

<details>
<summary><b>Example 3: G6PD deficiency drug challenge</b></summary>

**Question:** A patient of Mediterranean descent develops dark urine, jaundice, and bite cells on smear two days after starting an antimalarial. Trace the biochemical chain from drug to hemolysis.

**Solution:**
1. The drug generates oxidative stress (peroxides, superoxide) inside RBCs.
2. Detoxification requires reduced glutathione (GSH); regenerating GSH requires NADPH via glutathione reductase.
3. With deficient G6PD, the oxidative PPP cannot supply NADPH on demand; GSH is exhausted.
4. Peroxides oxidize hemoglobin → denatured Hb precipitates as Heinz bodies; splenic macrophages "bite" them out; membranes fail → hemolysis, hemoglobinuria, jaundice.

**MCAT Strategy:** The tested chain is always drug → oxidant stress → NADPH/GSH shortfall → Heinz bodies/bite cells. Remember G6PD is X-linked and the deficiency is protective against malaria.
</details>`
    }
  ]
};
