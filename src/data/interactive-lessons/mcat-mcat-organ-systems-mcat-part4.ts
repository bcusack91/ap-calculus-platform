export const mcatOrganSysPart4Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os4-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 4 of 7 — Renal System (Kidneys)**

### Nephron Structure

$$\\text{Glomerulus} \\to \\text{PCT} \\to \\text{Loop of Henle} \\to \\text{DCT} \\to \\text{Collecting Duct}$$

### Key Functions by Segment

| Segment | Function | Key Details |
|---------|----------|-------------|
| Glomerulus | Filtration | Blood pressure drives filtrate into Bowman's capsule |
| PCT | Reabsorption (65-70%) | Glucose, amino acids, Na$^+$, H$_2$O (obligatory) |
| Descending loop | Water reabsorption | Permeable to H$_2$O, NOT solutes |
| Ascending loop | Salt reabsorption | Permeable to Na$^+$/Cl$^-$, NOT water (creates medullary gradient) |
| DCT/Collecting duct | Fine-tuning | Hormonal regulation (ADH, aldosterone) |

### Hormonal Regulation

| Hormone | Source | Effect |
|---------|--------|--------|
| **ADH** (vasopressin) | Posterior pituitary | Inserts aquaporins → H$_2$O reabsorption in collecting duct |
| **Aldosterone** | Adrenal cortex | Na$^+$ reabsorption (+ K$^+$ secretion) in DCT |
| **ANP** | Heart (atria) | Na$^+$ excretion, opposes RAAS |

### GFR

$$\\text{GFR} \\approx 180\\;\\text{L/day}$$

But urine output is only ~1.5 L/day → 99% of filtrate is reabsorbed!`
    },
    {
      id: 'os4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Renal System** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient with diabetes insipidus (ADH deficiency) would present with:`,
            options: [`Large volumes of dilute urine (can\`t reabsorb water in collecting duct)`, `Small volumes of concentrated urine`, `High blood glucose`, `Edema'`],
            correctAnswer: 0,
            explanation: `Without ADH, aquaporins aren't inserted in the collecting duct → water can't be reabsorbed → large volumes of very dilute urine (polyuria) + excessive thirst (polydipsia). Not to be confused with diabetes mellitus!`
          }
        ]
      }
    },
    {
      id: 'os4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Nephron: Glomerulus → PCT → Loop of Henle → DCT → Collecting duct
- Descending loop: water out. Ascending loop: salt out (countercurrent multiplier).
- ADH: water reabsorption. Aldosterone: Na$^+$ reabsorption + K$^+$ secretion.
- 180 L/day filtered but only ~1.5 L urine (99% reabsorbed!)`
    }
  ]
};
