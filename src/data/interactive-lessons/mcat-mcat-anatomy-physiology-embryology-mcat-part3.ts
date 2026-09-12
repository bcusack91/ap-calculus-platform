export const mcatEmbryoPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-embryology-mcat',
  sections: [
    {
      id: 'emb3-intro',
      type: 'text' as const,
      content: `# Embryology — Deep Dive

**Part 3 of 4 — Organogenesis, Extraembryonic Membranes & Fetal Circulation**

### The Four Extraembryonic Membranes

| Membrane | Job | Detail worth points |
|----------|-----|--------------------|
| Amnion | Fluid-filled shock absorber directly around the embryo | Amniotic fluid sampled in amniocentesis |
| Chorion | Outermost; forms the FETAL portion of the placenta | Chorionic villi do the exchanging; source of hCG |
| Yolk sac | Site of the **first blood cells** (early hematopoiesis) | Also where primordial **germ cells** originate before migrating to the gonads |
| Allantois | Involved in early waste handling; its vessels persist | Becomes the **umbilical blood vessels** |

### The Placenta

The placenta is the interface between maternal and fetal circulations. Three functional headings:

1. **Exchange**: O₂, nutrients, and wastes cross by **diffusion** (and carrier transport) across the chorionic villi. **Maternal and fetal blood do NOT mix** — fetal capillaries sit inside villi that are bathed in maternal blood, always separated by cell layers.
2. **Endocrine**: hCG (first trimester, maintains corpus luteum), then placental **progesterone and estrogen** take over.
3. **Immunity**: maternal **IgG** crosses the placenta (the only antibody class that does), giving the newborn passive immunity.

### Umbilical Vessels — The Naming Trap

Vessel names follow direction relative to the FETAL heart, not oxygen content:

- **One umbilical VEIN** carries **OXYGENATED** blood from the placenta TO the fetus.
- **Two umbilical ARTERIES** carry **deoxygenated** blood from the fetus back to the placenta.

This inverts the "arteries carry oxygenated blood" habit — the same inversion as the pulmonary vessels. It is one of the most reliably tested facts in this chapter.

### The Three Fetal Shunts

The fetal lungs are fluid-filled and nonfunctional, and the liver is metabolically bypassable, so fetal circulation reroutes blood with three shunts:

| Shunt | Route | Bypasses |
|-------|-------|----------|
| Ductus venosus | Umbilical vein → inferior vena cava | **Liver** |
| Foramen ovale | Right atrium → left atrium | **Right ventricle and lungs** |
| Ductus arteriosus | Pulmonary artery → aorta | **Lungs** |

**Closure at birth**: the first breath inflates the lungs, pulmonary resistance plummets, and left atrial pressure rises above right — the pressure reversal slams the foramen ovale's flap shut (becomes the fossa ovalis). Rising O₂ and falling **prostaglandins** constrict the ductus arteriosus (becomes the ligamentum arteriosum). Clamping the cord ends flow through the ductus venosus.

### Fetal Hemoglobin (HbF)

HbF (two alpha, two gamma subunits) binds **2,3-BPG poorly**, so it holds O₂ **more tightly** than adult HbA — its dissociation curve is **left-shifted**. That affinity gap lets the fetus strip O₂ from maternal blood at the placenta.

### Teratogens and the Critical Period

**Organogenesis, roughly weeks 3-8**, is when organ systems are being laid down — the window of maximum vulnerability to **teratogens**. Classic examples: **thalidomide** (limb defects), **alcohol** (fetal alcohol syndrome), **rubella** infection (heart/eye/ear defects). Before week 3, insults tend to be all-or-none (loss vs. full recovery); after week 8, teratogens cause mostly growth and functional deficits rather than gross structural malformations.

### Apoptosis Builds Anatomy

Programmed cell death is a normal sculpting tool: the webbing between embryonic digits is removed by **apoptosis** to separate fingers and toes. Failure → syndactyly. Development uses death as deliberately as division.`
    },
    {
      id: 'emb3-worked',
      type: 'text' as const,
      content: `### Worked Example — Following One Red Blood Cell Through the Fetus

**Passage-style problem.** Trace an oxygenated red blood cell from the placenta to the fetal brain, naming each shunt used, then predict what happens to a fetus with a pharmacologically LOCKED-OPEN ductus arteriosus after birth.

**Step 1 — Placenta to heart.** The cell leaves the placenta in the **umbilical vein** (the oxygenated vessel, despite being a vein). At the liver, most flow diverts through the **ductus venosus** into the inferior vena cava, skipping hepatic capillaries so the well-oxygenated blood is not slowed or consumed by the liver.

**Step 2 — Through the heart, skipping the lungs.** Entering the **right atrium**, much of the IVC stream is directed across the **foramen ovale** into the **left atrium** — bypassing the right ventricle and the high-resistance pulmonary circuit entirely. From the left atrium: left ventricle → aorta → carotid arteries → brain. Note the design logic: the freshest blood is preferentially shunted to the systemic (especially cerebral and coronary) circulation.

**Step 3 — The parallel path.** Blood that does enter the right ventricle is pumped into the pulmonary artery, but high pulmonary resistance pushes most of it through the **ductus arteriosus** into the aorta — a second lung bypass, joining the aorta downstream of the head vessels.

**Step 4 — Prediction for a patent ductus arteriosus (PDA) after birth.** After the first breath, pulmonary resistance falls and aortic pressure exceeds pulmonary pressure — so flow through an open ductus REVERSES: now aorta → pulmonary artery (left-to-right shunt). Oxygenated blood recirculates through the lungs, volume-overloading the pulmonary circuit; the classic pharmacology link is that prostaglandins keep the ductus open, so a **prostaglandin synthesis inhibitor (e.g., indomethacin)** promotes closure, while prostaglandin infusion keeps it open when a heart defect makes the ductus temporarily life-saving.

**MCAT payoff.** Every shunt question reduces to: what does it bypass, which pressures drive the flow, and what reverses at birth.`
    },
    {
      id: 'emb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Membranes, Placenta & Fetal Circulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which fetal vessel carries the MOST oxygenated blood?`,
            options: [`The umbilical arteries`, `The pulmonary veins`, `The umbilical vein`, `The descending aorta`],
            correctAnswer: 2,
            explanation: `The umbilical VEIN carries freshly oxygenated blood from the placenta to the fetus — the naming trap, since veins usually carry deoxygenated blood. The two umbilical ARTERIES carry deoxygenated blood back to the placenta. Fetal pulmonary veins return blood from nonfunctional, fluid-filled lungs, and the descending aorta carries mixed blood diluted by the ductus arteriosus inflow.`
          },
          {
            question: `The foramen ovale allows fetal blood to bypass the lungs by shunting blood:`,
            options: [`From the pulmonary artery directly into the aorta`, `From the right atrium into the left atrium`, `From the umbilical vein into the inferior vena cava`, `From the left ventricle into the right ventricle`],
            correctAnswer: 1,
            explanation: `The foramen ovale is a flap between the atria: right atrium → left atrium, skipping the right ventricle and pulmonary circuit. Pulmonary artery → aorta is the DUCTUS ARTERIOSUS, and umbilical vein → IVC is the DUCTUS VENOSUS (liver bypass) — the three shunts are distinguished precisely by these routes. No fetal shunt connects the ventricles.`
          },
          {
            question: `At birth, the foramen ovale closes primarily because:`,
            options: [`Rising oxygen tension directly constricts its muscular wall`, `Prostaglandin levels rise sharply after delivery`, `Clamping the umbilical cord stops all blood flow to the heart`, `Lung inflation drops pulmonary resistance, so left atrial pressure rises above right atrial pressure and pushes the flap shut`],
            correctAnswer: 3,
            explanation: `The foramen ovale is a one-way flap closed mechanically by a PRESSURE REVERSAL: the first breath opens the pulmonary circuit, venous return to the left atrium surges, and higher left-sided pressure presses the flap against the septum. Oxygen-and-prostaglandin chemistry is how the DUCTUS ARTERIOSUS closes (prostaglandins FALL, not rise). Cord clamping stops placental flow but does not itself shut the flap.`
          },
          {
            question: `The first fetal blood cells and the primordial germ cells both originate in the:`,
            options: [`Yolk sac`, `Amnion`, `Chorion`, `Placenta`],
            correctAnswer: 0,
            explanation: `The yolk sac is the site of earliest hematopoiesis (before the liver and then bone marrow take over) and the origin of primordial germ cells, which later migrate to the developing gonads. The amnion is the fluid cushion, the chorion is the fetal placenta and hCG source — neither makes blood cells. The placenta exchanges blood contents but does not originate these lineages.`
          },
          {
            question: `A woman is exposed to a potent teratogen. Structural malformations of organs (e.g., limb or heart defects) are MOST likely if the exposure occurs during:`,
            options: [`The two weeks before implantation is complete`, `Weeks 3-8, during organogenesis`, `The third trimester`, `Labor and delivery`],
            correctAnswer: 1,
            explanation: `Weeks 3-8 are when organ systems are being constructed, so an insult derails their architecture — thalidomide, alcohol, and rubella all do their worst here. Very early exposure (pre-implantation) tends to be all-or-none: either the embryo is lost or it recovers completely. Third-trimester exposure mainly impairs growth and CNS function, since the structures already exist.`
          }
        ]
      }
    },
    {
      id: 'emb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Membranes: amnion = cushion; chorion = fetal placenta + hCG; yolk sac = FIRST blood cells and primordial germ cells; allantois → umbilical vessels
- Placenta: diffusion exchange with NO mixing of maternal and fetal blood; endocrine (hCG then progesterone/estrogen); maternal IgG crosses for passive immunity
- Umbilical VEIN = oxygenated, toward the fetus; TWO umbilical arteries = deoxygenated, back to the placenta
- Shunts: ductus venosus bypasses the liver; foramen ovale (RA → LA) bypasses the right ventricle and lungs; ductus arteriosus (pulmonary artery → aorta) bypasses the lungs
- Birth: pressure reversal closes the foramen ovale; rising O₂ + falling prostaglandins close the ductus arteriosus
- HbF binds 2,3-BPG poorly → higher O₂ affinity (left-shifted curve) → pulls O₂ from maternal HbA
- Teratogen window: organogenesis weeks 3-8 (thalidomide, alcohol, rubella); apoptosis normally sculpts anatomy (digit separation)`
    }
  ]
};
