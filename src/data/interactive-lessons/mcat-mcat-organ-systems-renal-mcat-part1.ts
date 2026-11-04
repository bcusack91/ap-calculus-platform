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

~1 million nephrons per kidney, each one tube with regional specialists. Order matters; everything that follows hangs on this map:

| Region | Location | Headline job |
|--------|----------|--------------|
| Glomerulus + Bowman's capsule | Cortex | Filtration |
| Proximal convoluted tubule (PCT) | Cortex | Bulk reabsorption (~65–70%), secretion |
| Loop of Henle | Dips into medulla | Builds the medullary salt gradient |
| Distal convoluted tubule (DCT) | Cortex | Fine-tuned NaCl and Ca$^{2+}$ handling |
| Collecting duct | Cortex → deep medulla | Hormone-controlled water and Na$^+$/K$^+$ final decisions |

- **Juxtamedullary nephrons** (long loops, deep into the medulla) build the concentration gradient; cortical nephrons (most of them) have short loops.
- A double capillary bed — a **portal system**: afferent arteriole → **glomerulus** → **efferent arteriole** → peritubular capillaries/**vasa recta**. Two arterioles bracketing the glomerulus is what makes its pressure adjustable.

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
      id: 'ren1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Filtration Logic

**Problem 1.** Blood pressure surges during exercise, and glomerular pressure rises with it. The kidney keeps GFR from surging.

- **(a)** What does the first rise in GFR do to NaCl delivery to the distal nephron?
- **(b)** Which structure senses that change, and what does it signal?
- **(c)** How does GFR return to baseline, and which other mechanism helps?
- **(d)** What are the sensor, the effector and the defended variable of this loop?

**(a) More NaCl delivered.** Higher arterial pressure raises glomerular pressure, so GFR transiently rises and more NaCl reaches the distal nephron.

**(b) Sensor and signal.** The **macula densa** senses the increased NaCl delivery and signals the **afferent arteriole to constrict** (a local paracrine signal).

**(c) Back to baseline.** Inflow falls, glomerular pressure normalizes and GFR returns toward baseline. The myogenic stretch response of the afferent wall acts in the same direction, faster.

**(d) Classify the loop.** Sensor = macula densa; effector = afferent arteriole; defended variable = GFR, with NaCl delivery as its proxy. It is a textbook negative-feedback loop.

**Problem 2.** Plasma glucose is 90 mg/dL (0.9 mg/mL) and GFR is 125 mL/min.

- **(a)** How much glucose is filtered per minute?
- **(b)** How much glucose appears in normal urine?
- **(c)** What would raise urine glucose above zero?

**(a) Filtered load.** $GFR \\times P_{glucose} = 125 \\times 0.9 = 112.5 \\approx 113$ mg/min.

**(b) Excretion.** Normal urine contains essentially **zero** glucose: the PCT reabsorbs the entire filtered load (Part 2 covers the transporters and their maximum). Excretion = filtration − reabsorption + secretion = 113 − 113 + 0 = 0 mg/min.

**(c) The foreshadow.** A plasma glucose high enough that the filtered load exceeds the PCT's reabsorptive capacity: the excess spills into the urine, the glucosuria of diabetes mellitus.

**Problem 3.** In a volume-depleted patient, prostaglandins dilate the afferent arteriole and angiotensin II preferentially constricts the efferent arteriole. The patient starts an NSAID (blocks prostaglandin synthesis) and an ACE inhibitor (blocks Ang II).

- **(a)** Which arteriole does each drug affect, and in which direction?
- **(b)** What happens to glomerular pressure and GFR with both drugs together?

**(a) Mapping the drugs.** Volume depletion already lowers glomerular pressure, so both hormones are props holding GFR up. The NSAID removes prostaglandin dilation, so the afferent narrows and inflow falls; the ACE inhibitor removes Ang II constriction, so the efferent relaxes and the dam opens.

**(b) GFR.** With both supports gone, glomerular pressure and **GFR fall sharply**, a risk of acute kidney injury. The method: map every drug or hormone onto WHICH arteriole it acts on, then read GFR off the two-arteriole table.

<!-- yield:low -->
- The macula densa's paracrine signal to the afferent arteriole is adenosine (derived from released ATP).
<!-- /yield -->`
    },
    {
      id: 'ren1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nephron & Filtration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A toxin selectively destroys podocytes and strips the negative charge from the glomerular basement membrane. The most likely urinary finding is:`,
            options: [`Large amounts of glucose and amino acids in the urine`, `Many red and white blood cells in the urine`, `Large amounts of albumin in the urine`, `Markedly elevated urea concentration in the urine`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The barrier excludes albumin by BOTH size (podocyte slit diaphragms) and charge (the anionic basement membrane repels negatively charged albumin). Damaging both lets albumin through — proteinuria, the hallmark of glomerular injury (nephrotic syndrome). Glucose, amino acids and urea are freely filtered normally (the intact PCT still reclaims all the glucose and amino acids), and cells require far grosser structural damage to pass.`
          },
          {
            question: `Blood in the renal circulation passes through two capillary beds in series. The vessel connecting them is:`,
            options: [`The efferent arteriole, leading to the peritubular capillaries`, `The renal vein, which redistributes glomerular blood to the tubules`, `The afferent arteriole, which supplies both beds simultaneously`, `The vasa recta, linking the glomerulus directly to the loop of Henle`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The renal portal arrangement runs afferent arteriole → glomerulus → EFFERENT ARTERIOLE → peritubular capillaries (and vasa recta for juxtamedullary nephrons): the efferent arteriole drains the glomerulus and feeds the second bed. An arteriole downstream of a capillary bed is rare and is exactly what keeps glomerular pressure high and adjustable. The vasa recta are part of the second bed, not the connector, and the renal vein drains the kidney after both beds.`
          },
          {
            question: `Compared with plasma, the fluid in Bowman's space of a healthy nephron contains:`,
            options: [`Similar concentrations of all solutes including proteins`, `Similar concentrations of glucose and sodium, but almost no protein`, `No glucose, because it is reabsorbed during filtration`, `A higher concentration of urea, because urea is secreted at the glomerulus`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Filtration is passive bulk flow through a size/charge sieve: small solutes (glucose, Na$^+$, urea, amino acids) pass at plasma concentrations, while proteins and cells are retained. Glucose reabsorption happens LATER, in the PCT — not during filtration — and nothing is secreted at the glomerulus itself.`
          }
        ]
      }
    },
    {
      id: 'ren1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Nephron order.** Glomerulus → PCT → descending → ascending limb → DCT → collecting duct; long loops build the gradient.
- **Size-and-charge filter.** The barrier holds back cells and albumin; filtrate is protein-free plasma at ~125 mL/min.
- **Two arterioles set GFR.** Constricting the afferent lowers GFR; constricting the efferent raises it; autoregulation tunes the afferent.
- **The master ledger.** Excretion = filtration − reabsorption + secretion; every renal question is one of those four words.

**Common traps**

- **Efferent constriction lowers GFR.** Moderate efferent constriction dams blood in the glomerulus, so pressure and GFR rise.
- **Glucose removed at the filter.** Filtrate carries glucose at plasma concentration; the PCT reclaims it later.
- **Vasa recta as the connector.** The efferent arteriole links the two capillary beds; the vasa recta belong to the second bed.
- **A size-only filter.** Albumin is held back by size AND charge; the anionic basement membrane repels it too.

<!-- yield:low -->
**Low-yield extras**

- The tubuloglomerular-feedback mediator from the macula densa is adenosine (from released ATP).
<!-- /yield -->`
    }
  ]
};
