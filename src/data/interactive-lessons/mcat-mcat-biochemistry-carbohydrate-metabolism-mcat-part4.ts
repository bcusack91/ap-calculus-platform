export const mcatCarbMetabPart4Data = {
  topicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  sections: [
    {
      id: 'cm4-intro',
      type: 'text' as const,
      content: `# Carbohydrate Metabolism

**Part 4 of 4 — Hormonal Integration & MCAT-Style Experiments**

### The Insulin/Glucagon Axis in One Table

| Feature | Insulin (fed) | Glucagon (fasting) |
|---------|---------------|--------------------|
| Source | Pancreatic beta cells | Pancreatic alpha cells |
| Receptor type | Receptor tyrosine kinase | GPCR (G$_s$ → cAMP → PKA) |
| Main targets | Liver, muscle, adipose | LIVER (muscle lacks glucagon receptors) |
| Glycolysis (liver) | ON (F2,6-BP up; glucokinase induced) | OFF |
| Gluconeogenesis | OFF | ON (PEPCK/G6Pase induced) |
| Glycogen | Synthesis (PP1 dephosphorylates) | Breakdown (PKA phosphorylates) |
| GLUT4 (muscle, adipose) | Translocated to membrane | — |

**Epinephrine** mirrors glucagon (also G$_s$/cAMP in liver and muscle) during stress/exercise — and muscle DOES have epinephrine receptors.

### Glucose Transporters the MCAT Names

| Transporter | Tissue | Property |
|-------------|--------|----------|
| GLUT1 | RBC, brain, most cells | Basal uptake; low $K_m$ (always saturated) |
| GLUT2 | Liver, pancreatic beta cells, kidney | HIGH $K_m$ — flux tracks blood glucose; part of the beta-cell glucose sensor |
| GLUT3 | Neurons | Low $K_m$ — brain priority |
| GLUT4 | Muscle, adipose | **Insulin-dependent** vesicle translocation; exercise also recruits it |
| SGLT1/2 | Intestine, kidney | SECONDARY active transport (Na$^+$-coupled), moves glucose against its gradient |

### Beta-Cell Glucose Sensing (A Favorite Passage)

Glucose enters via GLUT2 → glucokinase (high $K_m$, no product inhibition — the true "glucostat") → glycolysis + oxidation raise ATP/ADP → **ATP-sensitive K$^+$ channels CLOSE** → membrane depolarizes → voltage-gated Ca$^{2+}$ channels open → insulin granule exocytosis. Sulfonylurea drugs close the K$^+$ channel directly.

### Timeline of a Fast

| Time | Blood glucose source |
|------|----------------------|
| 0-4 h | Dietary glucose |
| 4-24 h | Liver **glycogenolysis** (dominant early) |
| 16 h-2 days | **Gluconeogenesis** rising as glycogen empties (~24 h) |
| Days-weeks | Gluconeogenesis + ketones (brain adapts, sparing muscle protein) |

### Diabetes in Biochemical Terms

- **Type 1:** no insulin → unrestrained lipolysis and glucagon action → hyperglycemia + **diabetic ketoacidosis** possible.
- **Type 2:** insulin resistance → GLUT4 translocation impaired, hepatic gluconeogenesis inadequately suppressed → hyperglycemia; ketosis rare (some insulin remains).
- Chronic hyperglycemia drives **nonenzymatic glycation** (HbA1c as the 3-month average) and sorbitol accumulation (aldose reductase) in lens and nerves.

### Passage-Reading Drill

When a carbohydrate passage shows a knockout, drug, or hormone clamp, ask: (1) Which of the three regulated steps (or transporters) does it touch? (2) What happens to F2,6-BP? (3) Which tissue is being discussed — liver rules blood glucose; muscle keeps its glucose; brain and RBC are entitled consumers.`
    },
    {
      id: 'cm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hormonal Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `During intense exercise, skeletal muscle increases glucose uptake even in the absence of insulin because:`,
            options: [`Muscle expresses glucagon receptors that recruit GLUT4`, `Contraction itself triggers GLUT4 translocation`, `Muscle switches to high-$K_m$ GLUT2 during exercise`, `SGLT transporters are activated by lactate`],
            correctAnswer: 1,
            explanation: `Contraction (via AMPK and Ca$^{2+}$ signaling) recruits GLUT4 vesicles independently of insulin — the basis for exercise as therapy in type 2 diabetes. Muscle has no glucagon receptors, and GLUT2/SGLT are not muscle transporters.`
          },
          {
            question: `Pancreatic beta cells use GLUT2 and glucokinase — both with high $K_m$ values — rather than GLUT1 and hexokinase, because high-$K_m$ components:`,
            options: [`Maximize glucose uptake at all concentrations`, `Let glucose metabolism track blood glucose levels`, `Saturate at fasting glucose to hold insulin steady`, `Are insulin-independent, unlike GLUT1 and hexokinase`],
            correctAnswer: 1,
            explanation: `Low-$K_m$ systems saturate at fasting glucose and cannot distinguish 5 mM from 10 mM. High-$K_m$ GLUT2/glucokinase keep flux — and therefore ATP production and insulin secretion — proportional to blood glucose. The sensor must not saturate.`
          },
          {
            question: `A patient with untreated type 1 diabetes has high blood glucose, yet adipose and muscle cells behave as if starved. The single best explanation is:`,
            options: [`GLUT4 stays intracellular without insulin`, `Glucose is toxic to these tissues`, `Glucagon blocks all glucose transporters`, `Insulin is needed to open GLUT1 channels`],
            correctAnswer: 0,
            explanation: `GLUT4 translocation requires insulin signaling. Without it, muscle and fat starve amid plenty ("starvation in the midst of abundance"), triggering lipolysis, ketogenesis, and muscle proteolysis while the liver adds MORE glucose via unopposed glucagon.`
          },
          {
            question: `Twenty hours into a fast, the majority of hepatic glucose output shifts from glycogenolysis to gluconeogenesis because:`,
            options: [`Glucagon secretion falls as the fast lengthens`, `Liver glycogen stores are nearly exhausted`, `Muscle glycogen takes over blood glucose maintenance`, `The brain stops using glucose entirely`],
            correctAnswer: 1,
            explanation: `Liver glycogen (~100 g) supports blood glucose for about 12-24 hours. As it empties, gluconeogenesis from lactate, alanine, and glycerol ramps up. Muscle glycogen cannot export glucose (no G6Pase), and the brain still requires substantial glucose early in fasting.`
          },
          {
            question: `HbA1c reflects average blood glucose over ~3 months because glycation of hemoglobin is:`,
            options: [`Catalyzed by a glucose-activated kinase`, `Nonenzymatic and persists for the RBC's lifespan`, `Reversed within days by erythrocyte phosphatases`, `Dependent on insulin-stimulated GLUT4 uptake`],
            correctAnswer: 1,
            explanation: `Glucose condenses nonenzymatically with hemoglobin amino groups; the modification is essentially irreversible for the cell's life. Since RBCs live ~120 days, the glycated fraction integrates glycemia over that window — no enzyme, no regulation, pure chemistry and time.`
          }
        ]
      }
    },
    {
      id: 'cm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Insulin = RTK, anabolic, GLUT4 translocation; glucagon = GPCR/cAMP, liver-only, catabolic; epinephrine covers muscle in stress
- Transporter map: GLUT1 basal, GLUT2 high-$K_m$ sensor (liver/beta cell), GLUT3 neurons, GLUT4 insulin/exercise, SGLT secondary active
- Beta-cell sensing: GLUT2 → glucokinase → ATP up → K$_{ATP}$ channels close → depolarize → Ca$^{2+}$ → insulin
- Fast timeline: glycogen carries ~24 h, then gluconeogenesis; ketones spare protein in prolonged fasting
- T1DM = absent insulin (DKA risk); T2DM = resistance; HbA1c = nonenzymatic glycation clock`
    },
    {
      id: 'cm4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Passages

<details>
<summary><b>Example 1: Predict the phenotype of a glucokinase mutation</b></summary>

**Question:** A family carries a heterozygous glucokinase mutation raising its $K_m$ for glucose twofold. Predict the effect on insulin secretion and fasting blood glucose (this is MODY2 in real medicine).

**Solution:**
1. The beta cell's "glucostat" now needs HIGHER glucose to generate the same glycolytic ATP signal.
2. Insulin secretion still occurs but at a raised set point: mild, stable fasting hyperglycemia (e.g., ~6-8 mM instead of ~5).
3. Liver glucokinase is also less active, modestly reducing postprandial glucose uptake. The phenotype is mild because the whole curve shifts rather than collapsing.

**MCAT Strategy:** A $K_m$ shift in a SENSOR enzyme moves the set point; a $V_{max}$ loss would cap the response. Distinguish those two outcomes whenever a passage mutates glucokinase.
</details>

<details>
<summary><b>Example 2: Interpret a euglycemic clamp experiment</b></summary>

**Question:** In an insulin clamp study, insulin is infused while glucose is infused at whatever rate keeps blood glucose constant. Subject A requires a high glucose infusion rate; subject B requires very little. Who is insulin resistant, and which tissues explain the difference?

**Solution:**
1. The glucose infusion rate measures how much glucose the body DISPOSES of under insulin: high rate = insulin-sensitive.
2. Subject B (low rate) is insulin resistant: muscle/adipose GLUT4-mediated uptake responds poorly, and the liver keeps releasing glucose despite insulin.
3. The clamp isolates insulin action because glucose itself is held constant — removing the confound of hyperglycemia driving uptake by mass action.

**MCAT Strategy:** In clamp passages, the infusion rate IS the readout. Map "less glucose needed" to "less insulin effect."
</details>

<details>
<summary><b>Example 3: Diabetic ketoacidosis chain of logic</b></summary>

**Question:** A type 1 diabetic misses insulin doses and presents with glucose of 450 mg/dL, deep rapid breathing, and fruity breath. Connect the hormone state to each finding.

**Solution:**
1. No insulin + high glucagon: liver runs gluconeogenesis/glycogenolysis at full tilt while peripheral uptake fails → severe hyperglycemia (osmotic diuresis, dehydration).
2. Unrestrained adipose lipolysis floods the liver with fatty acids; beta-oxidation acetyl-CoA exceeds TCA capacity (OAA drawn off for gluconeogenesis) → ketone bodies (acetoacetate, beta-hydroxybutyrate) accumulate.
3. Ketoacids consume bicarbonate → metabolic acidosis → compensatory hyperventilation (Kussmaul breathing); acetone (from spontaneous acetoacetate decarboxylation) gives the fruity breath.

**MCAT Strategy:** DKA questions are pathway questions in disguise: absent insulin = simultaneous maximal gluconeogenesis AND ketogenesis. Type 2 patients usually retain enough insulin to suppress ketogenesis.
</details>`
    }
  ]
};
