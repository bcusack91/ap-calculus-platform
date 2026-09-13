export const mcatRenalSubPart1Data = {
  topicSlug: 'mcat-organ-systems-renal-mcat',
  sections: [
    {
      id: 'ren1-intro',
      type: 'text' as const,
      content: `# Renal & Excretory System

**Part 1 of 4 — Nephron Architecture & Glomerular Filtration**

### What the Kidney Actually Does

Far more than "making urine": regulation of **volume and blood pressure**, **osmolarity**, **electrolytes** (Na$^+$, K$^+$, Ca$^{2+}$), **acid–base balance**, excretion of nitrogenous waste (**urea** from protein, creatinine from muscle), plus endocrine jobs — **EPO** (red-cell production), **renin** (pressure), and activation of **vitamin D**.

### The Nephron — One Tube, Regional Specialists

~1 million nephrons per kidney. Order matters; every subsequent lesson hangs on this map:

$$\\text{Glomerulus/Bowman's capsule} \\to \\text{PCT} \\to \\text{descending limb} \\to \\text{ascending limb} \\to \\text{DCT} \\to \\text{collecting duct}$$

| Region | Location | Headline job |
|--------|----------|--------------|
| Glomerulus + Bowman's capsule | Cortex | Filtration |
| Proximal convoluted tubule (PCT) | Cortex | Bulk reabsorption (~65–70%), secretion |
| Loop of Henle | Dips into medulla | Builds the medullary salt gradient |
| Distal convoluted tubule (DCT) | Cortex | Fine-tuned NaCl and Ca$^{2+}$ handling |
| Collecting duct | Cortex → deep medulla | Hormone-controlled water and Na$^+$/K$^+$ final decisions |

- **Juxtamedullary nephrons** (long loops, deep into the medulla) build the concentration gradient; cortical nephrons (most of them) have short loops.
- Unique double capillary bed — a **portal system**: afferent arteriole → **glomerulus** (capillary bed 1) → **efferent arteriole** → peritubular capillaries/**vasa recta** (capillary bed 2). Two arterioles bracketing the glomerulus is what makes its pressure adjustable.

### Filtration — A Starling Problem at High Pressure

The filtration barrier has three layers: **fenestrated endothelium** → **basement membrane** (negatively charged) → **podocyte slit diaphragms**. It filters by **size and charge**: water, ions, glucose, amino acids, urea pass; cells and plasma proteins (albumin — large AND negative) stay.

$$GFR \\propto (P_{glom} - P_{Bowman}) - \\pi_{glom}$$

- Glomerular hydrostatic pressure (~55 mmHg) is unusually high — the efferent arteriole downstream acts as a resistor — so net filtration is outward along the whole capillary.
- **GFR ≈ 125 mL/min ≈ 180 L/day** — the entire plasma volume is filtered ~60 times a day. About 20% of plasma entering is filtered (**filtration fraction**); >99% of filtered water is later reclaimed.
- Filtrate in Bowman's space is essentially **protein-free plasma**: same Na$^+$, glucose, urea concentrations as plasma at the start.

### Controlling GFR with Two Arterioles

| Maneuver | Glomerular pressure | GFR |
|----------|---------------------|-----|
| Constrict **afferent** | ↓ (less blood gets in) | ↓ |
| Dilate afferent | ↑ | ↑ |
| Constrict **efferent** (moderate) | ↑ (dams blood in the glomerulus) | ↑ |
| Dilate efferent | ↓ | ↓ |

**Autoregulation** keeps GFR nearly constant across normal blood pressures: the **myogenic response** (stretched afferent arteriole constricts) plus **tubuloglomerular feedback** — the **macula densa** (in the distal nephron, part of the juxtaglomerular apparatus) senses NaCl delivery and adjusts the afferent arteriole. High delivery → afferent constriction → GFR trimmed back; low delivery → afferent dilation (and renin release — Part 3).

### The Master Equation

$$\\text{Excretion} = \\text{Filtration} - \\text{Reabsorption} + \\text{Secretion}$$

Every renal question is one of these four words. Reabsorption = tubule → blood; secretion = blood → tubule (a second chance to eliminate what filtration missed).`
    },
    {
      id: 'ren1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nephron & Filtration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A toxin selectively destroys podocytes and strips the negative charge from the glomerular basement membrane. The most likely urinary finding is:`,
            options: [`Large amounts of glucose in the urine`, `Many red and white blood cells in the urine`, `Large amounts of albumin in the urine`, `Markedly elevated urea concentration in the urine`],
            correctAnswer: 2,
            explanation: `The barrier excludes albumin by BOTH size (podocyte slit diaphragms) and charge (the anionic basement membrane repels negatively charged albumin). Damaging both lets albumin through — proteinuria, the hallmark of glomerular injury (nephrotic syndrome). Glucose and urea are freely filtered normally, and cells require far grosser structural damage to pass.`
          },
          {
            question: `Blood in the renal circulation passes through two capillary beds in series. The vessel connecting them is:`,
            options: [`The efferent arteriole, leading to the peritubular capillaries`, `The renal vein, which redistributes blood to the tubules`, `The afferent arteriole, which supplies both beds simultaneously`, `The vasa recta, linking the glomerulus directly to the loop of Henle`],
            correctAnswer: 0,
            explanation: `The renal portal arrangement runs afferent arteriole → glomerulus → EFFERENT ARTERIOLE → peritubular capillaries (and vasa recta for juxtamedullary nephrons): the efferent arteriole drains the glomerulus and feeds the second bed. An arteriole downstream of a capillary bed is rare and is exactly what keeps glomerular pressure high and adjustable. The vasa recta are part of the second bed, not the connector.`
          },
          {
            question: `Compared with plasma, the fluid in Bowman's space of a healthy nephron contains:`,
            options: [`Similar concentrations of all solutes including proteins`, `Similar concentrations of glucose and sodium, but almost no protein`, `No glucose, because it is reabsorbed during filtration`, `A higher concentration of urea, because urea is secreted at the glomerulus`],
            correctAnswer: 1,
            explanation: `Filtration is passive bulk flow through a size/charge sieve: small solutes (glucose, Na$^+$, urea, amino acids) pass at plasma concentrations, while proteins and cells are retained. Glucose reabsorption happens LATER, in the PCT — not during filtration — and nothing is secreted at the glomerulus itself.`
          }
        ]
      }
    },
    {
      id: 'ren1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Filtration Logic

<details>
<summary><b>Example 1: NSAIDs, angiotensin II, and the two arterioles</b></summary>

**Question:** In volume-depleted patients, prostaglandins dilate the afferent arteriole while angiotensin II preferentially constricts the efferent arteriole. Predict what happens to GFR if such a patient takes an NSAID (blocks prostaglandin synthesis) plus an ACE inhibitor (blocks angiotensin II production).

**Solution:**
1. Volume depletion already lowers glomerular pressure; the two hormones are props holding GFR up: afferent dilation lets blood in, efferent constriction dams it back.
2. NSAID → afferent prop removed → inflow falls. ACE inhibitor → efferent prop removed → the dam opens.
3. Both supports gone → glomerular pressure and **GFR fall sharply** (acute kidney injury risk). ✓

**Skill:** map every drug/hormone onto WHICH arteriole it acts on, then read GFR off the two-arteriole table.
</details>

<details>
<summary><b>Example 2: Filtered load arithmetic</b></summary>

**Question:** Plasma glucose is 90 mg/dL (0.9 mg/mL) and GFR is 125 mL/min. How much glucose is filtered per minute, and how much appears in normal urine?

**Solution:**
1. Filtered load = $GFR \\times P_{glucose} = 125 \\times 0.9 \\approx 113$ mg/min.
2. Normal urine contains essentially **zero** glucose — the PCT reabsorbs the entire filtered load (Part 2 covers the transporters and their maximum).
3. So excretion = filtration − reabsorption + secretion = 113 − 113 + 0 = 0 mg/min. ✓

**Foreshadow:** when plasma glucose is high enough that filtered load exceeds reabsorptive capacity, glucose spills — diabetes mellitus.
</details>

<details>
<summary><b>Example 3: Tubuloglomerular feedback as negative feedback</b></summary>

**Question:** Blood pressure surges during exercise. Trace how the kidney keeps GFR from surging with it.

**Solution:**
1. Higher arterial pressure → higher glomerular pressure → GFR transiently rises → more NaCl reaches the distal nephron.
2. The **macula densa** senses the increased NaCl delivery and signals the **afferent arteriole to constrict** (adenosine/ATP paracrine signal).
3. Inflow falls, glomerular pressure normalizes, GFR returns toward baseline. The myogenic stretch response of the afferent wall acts in the same direction, faster. ✓

**Classify:** sensor = macula densa; effector = afferent arteriole; variable defended = GFR (NaCl delivery as its proxy) — a textbook negative-feedback loop.
</details>`
    },
    {
      id: 'ren1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Kidney = volume, osmolarity, electrolytes, pH, nitrogen waste + EPO, renin, vitamin D activation.
- Nephron order: glomerulus → PCT → descending → ascending → DCT → collecting duct; juxtamedullary nephrons (long loops + vasa recta) build the medullary gradient.
- Portal circulation: afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries — two adjustable resistors bracket the filter.
- Filtration barrier (fenestrae, anionic basement membrane, podocytes) sieves by size AND charge; filtrate = protein-free plasma; GFR ≈ 125 mL/min (180 L/day), ~20% filtration fraction.
- Constrict afferent → ↓GFR; constrict efferent → ↑GFR. Autoregulation = myogenic response + macula-densa tubuloglomerular feedback.
- Excretion = filtration − reabsorption + secretion — the master ledger for everything that follows.`
    }
  ]
};
