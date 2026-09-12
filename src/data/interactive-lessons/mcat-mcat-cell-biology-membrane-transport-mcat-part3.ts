export const mcatCellMembraneTransportPart3Data = {
  topicSlug: 'mcat-cell-biology-membrane-transport-mcat',
  sections: [
    {
      id: 'mt3-intro',
      type: 'text' as const,
      content: `# Membrane Transport for the MCAT

**Part 3 of 4 — Active Transport & the Na$^+$/K$^+$ ATPase**

### Primary Active Transport — ATP Pays Directly

Primary active transport moves solutes **against** their electrochemical gradient using ATP hydrolysis directly.

**The Na$^+$/K$^+$ ATPase (the pump to know cold):**

$$3\\ \\text{Na}^+_{in} + 2\\ \\text{K}^+_{out} + \\text{ATP} \\to 3\\ \\text{Na}^+_{out} + 2\\ \\text{K}^+_{in} + \\text{ADP} + \\text{P}_i$$

- **3 Na$^+$ out, 2 K$^+$ in** per ATP — net export of one positive charge → the pump is **electrogenic** (contributes a few mV to the negative resting potential; the K$^+$ leak channels do most of the work)
- Mechanism: phosphorylation of the pump (a **P-type ATPase**) drives conformational changes that alternate ion-binding access between the two sides
- Inhibited by **ouabain** and **digoxin** (cardiac glycosides) from the extracellular side
- Maintains the Na$^+$ gradient that powers secondary transport, osmotic balance (preventing cell swelling), and the resting membrane potential

**Other primary pumps:**

| Pump | Job |
|------|-----|
| Ca$^{2+}$ ATPase (PMCA, SERCA) | Keeps cytosolic Ca$^{2+}$ ~100 nM (pumps out of cell or into ER/SR) |
| H$^+$/K$^+$ ATPase | Acidifies the stomach lumen (target of proton pump inhibitors like omeprazole) |
| V-type H$^+$ ATPase | Acidifies lysosomes and endosomes |
| ABC transporters | ATP-binding cassette family; includes MDR1/P-glycoprotein (pumps chemotherapy drugs out of cancer cells) and **CFTR** (an ATP-gated Cl$^-$ channel — the exception that conducts rather than pumps) |

### Secondary Active Transport — Riding the Na$^+$ Gradient

Secondary (coupled) transport uses the energy **stored in one gradient** (almost always Na$^+$, built by the Na$^+$/K$^+$ ATPase) to move another solute uphill. No ATP is hydrolyzed by the transporter itself — but the process is still ultimately ATP-dependent.

| Type | Directions | Classic Examples |
|------|-----------|------------------|
| **Symport** (cotransport) | Both solutes same direction | SGLT1 (2 Na$^+$ + glucose into intestinal cells); Na$^+$-amino acid symporters; NKCC (Na$^+$/K$^+$/2Cl$^-$) |
| **Antiport** (exchange) | Opposite directions | Na$^+$/Ca$^{2+}$ exchanger (3 Na$^+$ in : 1 Ca$^{2+}$ out); Na$^+$/H$^+$ exchanger; Cl$^-$/HCO$_3^-$ exchanger in RBCs |

### The Intestinal Glucose Circuit — A Complete MCAT Story

1. **Basolateral** Na$^+$/K$^+$ ATPase keeps intracellular Na$^+$ low
2. **Apical** SGLT1 symports 2 Na$^+$ (downhill) + 1 glucose (uphill) from the gut lumen — glucose can be concentrated far above luminal levels
3. **Basolateral** GLUT2 lets glucose exit passively into the blood
4. Water follows the absorbed solute osmotically

> This is why **oral rehydration therapy** contains both glucose AND salt: SGLT1 needs both, and the co-absorbed solute pulls water out of the gut lumen — lifesaving in cholera.`
    },
    {
      id: 'mt3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Active Transport** 🎯`,
      exercise: {
        questions: [
          {
            question: `Ouabain is applied to intestinal epithelial cells, inhibiting the basolateral Na$^+$/K$^+$ ATPase. Over time, apical glucose uptake via SGLT1 will:`,
            options: [`Decrease, as the Na$^+$ gradient dissipates`, `Increase, as more ATP is free for SGLT1`, `Be unaffected, as SGLT1 ignores Na$^+$`, `Reverse, secreting glucose into the lumen`],
            correctAnswer: 0,
            explanation: `SGLT1 is a secondary active transporter: it has no ATPase activity and depends entirely on the inward Na$^+$ gradient maintained by the Na$^+$/K$^+$ pump. Block the pump, intracellular Na$^+$ rises, the gradient collapses, and glucose can no longer be moved uphill. This "poison the pump, kill the symporter" logic is the single most-tested secondary transport concept.`
          },
          {
            question: `Per catalytic cycle, the Na$^+$/K$^+$ ATPase moves:`,
            options: [`3 Na$^+$ in and 2 K$^+$ out, depolarizing the cell`, `2 Na$^+$ out and 3 K$^+$ in, importing net charge`, `3 Na$^+$ out and 2 K$^+$ in, net charge exported`, `Equal Na$^+$ and K$^+$, so it is electroneutral`],
            correctAnswer: 2,
            explanation: `The stoichiometry is fixed: 3 Na$^+$ exported, 2 K$^+$ imported per ATP. The unequal exchange exports one net positive charge per cycle (electrogenic), making a small direct contribution to the negative resting potential — though the dominant determinant of resting potential is K$^+$ leak permeability.`
          },
          {
            question: `Cardiac glycosides like digoxin increase the strength of heart contraction. The mechanism chain is:`,
            options: [`Higher intracellular K$^+$ speeds up action potentials`, `Higher intracellular Na$^+$ slows Ca$^{2+}$ export`, `Pump stimulation gives more ATP for contraction`, `Digoxin opens voltage-gated Ca$^{2+}$ channels`],
            correctAnswer: 1,
            explanation: `Digoxin inhibits the Na$^+$/K$^+$ ATPase, raising intracellular Na$^+$. This shrinks the Na$^+$ gradient that drives the Na$^+$/Ca$^{2+}$ antiporter (3 Na$^+$ in per Ca$^{2+}$ out), so less Ca$^{2+}$ is extruded. Elevated Ca$^{2+}$ loads the SR and strengthens contraction (positive inotropy). A two-transporter chain like this is textbook MCAT integration.`
          }
        ]
      }
    },
    {
      id: 'mt3-deep',
      type: 'text' as const,
      content: `### Energetics — Is Transport Uphill or Downhill?

For an uncharged solute, the free energy of moving it from outside to inside:

$$\\Delta G = RT \\ln \\frac{[S]_{in}}{[S]_{out}}$$

For an ion, add the electrical term:

$$\\Delta G = RT \\ln \\frac{[S]_{in}}{[S]_{out}} + zF\\Delta V$$

- $z$ = ion charge, $F$ = Faraday constant, $\\Delta V$ = membrane potential (inside relative to outside)
- Na$^+$ entry is doubly downhill (chemical gradient inward AND negative interior attracts cations) — a rich energy source
- One ATP (~$-30$ kJ/mol under cellular conditions) can drive substantial concentration work; coupling stoichiometry (2 Na$^+$ per glucose in SGLT1 vs. 1 in SGLT2) sets how steep a glucose gradient can be built

### CFTR and Cystic Fibrosis — Transport Pathophysiology

- **CFTR** is an ABC-family, ATP-gated **Cl$^-$ channel** on the apical surface of epithelia, activated by cAMP/PKA phosphorylation
- In cystic fibrosis (most commonly the $\\Delta$F508 mutation), CFTR misfolds and is degraded before reaching the membrane → no apical Cl$^-$ secretion
- Airway logic: no Cl$^-$ (and water) secretion + excess Na$^+$ absorption → dehydrated, thick mucus → infections
- Sweat gland logic runs the other way: CFTR normally **reabsorbs** Cl$^-$ from sweat → CF patients have salty sweat (the diagnostic sweat chloride test)

### Cholera — The Opposite Lesion

Cholera toxin locks Gs "on" → cAMP soars → CFTR is **hyperactivated** → massive Cl$^-$ and water secretion into the gut → secretory diarrhea. Treated with oral rehydration solution because SGLT1 (a separate, unaffected pathway) can still pull Na$^+$, glucose, and water back in.`
    },
    {
      id: 'mt3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Transport Energetics & Disease** 🎯`,
      exercise: {
        questions: [
          {
            question: `SGLT1 couples 2 Na$^+$ per glucose, while SGLT2 couples only 1 Na$^+$ per glucose. Compared with SGLT2, SGLT1 can:`,
            options: [`Transport glucose with no Na$^+$ gradient at all`, `Move glucose faster, but only down its gradient`, `Generate ATP from the movement of glucose`, `Concentrate glucose against a steeper gradient`],
            correctAnswer: 3,
            explanation: `Coupling stoichiometry sets the maximum gradient: with 2 Na$^+$ per glucose, twice the downhill free energy is harvested per glucose moved, so a much steeper uphill glucose gradient can be sustained. That is why SGLT1 sits in the late intestine/nephron where luminal glucose is scarce and must be scavenged.`
          },
          {
            question: `In cystic fibrosis airways, chloride secretion fails. Mucus becomes thick and dehydrated because:`,
            options: [`No apical Cl$^-$ efflux means no osmotic pull for water`, `Na$^+$ absorption ceases, trapping water inside cells`, `CFTR normally transports mucin proteins out of cells`, `The mutation structurally destroys the airway cilia`],
            correctAnswer: 0,
            explanation: `Water follows solute. Apical Cl$^-$ secretion through CFTR creates the osmotic gradient that hydrates the airway surface liquid; losing it (plus unchecked Na$^+$ absorption via ENaC) dehydrates mucus, crippling mucociliary clearance. The cilia themselves are normal — they simply cannot beat through thick mucus. Note the contrast with cholera, where CFTR overactivity floods the gut with fluid.`
          }
        ]
      }
    },
    {
      id: 'mt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Primary active transport hydrolyzes ATP directly; Na$^+$/K$^+$ ATPase: 3 Na$^+$ out / 2 K$^+$ in per ATP, electrogenic, ouabain/digoxin-inhibited
- Other pumps: SERCA/PMCA (Ca$^{2+}$), gastric H$^+$/K$^+$ ATPase (PPI target), V-type H$^+$ (lysosomes), ABC family (P-glycoprotein, CFTR)
- Secondary active transport spends the Na$^+$ gradient: symport (SGLT1: 2 Na$^+$ + glucose) or antiport (Na$^+$/Ca$^{2+}$ exchanger: 3 Na$^+$ : 1 Ca$^{2+}$)
- Poisoning the Na$^+$/K$^+$ pump collapses ALL Na$^+$-coupled transport — expect this experimental logic
- Digoxin chain: pump blocked → Na$^+$ up → NCX slows → Ca$^{2+}$ up → stronger contraction
- Ion transport energetics include both chemical and electrical terms; higher coupling stoichiometry → steeper achievable gradients
- CFTR: ATP-gated Cl$^-$ channel; CF = too little secretion (thick mucus, salty sweat); cholera = too much (watery diarrhea, treated via SGLT1-based oral rehydration)`
    }
  ]
};
