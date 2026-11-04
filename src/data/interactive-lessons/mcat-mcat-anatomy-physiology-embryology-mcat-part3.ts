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

**Closure at birth**: the first breath inflates the lungs, pulmonary resistance plummets, and left atrial pressure rises above right — the pressure reversal slams the foramen ovale's flap shut. Rising O₂ and falling **prostaglandins** constrict the ductus arteriosus. Clamping the cord ends flow through the ductus venosus.

<!-- yield:low -->
- Adult remnants: foramen ovale → **fossa ovalis**; ductus arteriosus → **ligamentum arteriosum**; ductus venosus → **ligamentum venosum**.
<!-- /yield -->

### Fetal Hemoglobin (HbF)

HbF (two alpha, two gamma subunits) binds **2,3-BPG poorly**, so it holds O₂ **more tightly** than adult HbA — its dissociation curve is **left-shifted**. That affinity gap lets the fetus strip O₂ from maternal blood at the placenta.

### Teratogens and the Critical Period

**Organogenesis, roughly weeks 3-8**, is when organ systems are being laid down — the window of maximum vulnerability to **teratogens**. Classic examples: **thalidomide** (limb defects), **alcohol** (fetal alcohol syndrome), **rubella** infection (heart/eye/ear defects). Before week 3, insults tend to be all-or-none (loss vs. full recovery); after week 8, teratogens cause mostly growth and functional deficits rather than gross structural malformations.

### Apoptosis Builds Anatomy

Programmed cell death is a normal sculpting tool: the webbing between embryonic digits is removed by **apoptosis** to separate fingers and toes. Development uses death as deliberately as division.

<!-- yield:low -->
- When this apoptosis fails, the digits stay webbed: **syndactyly**.
<!-- /yield -->`
    },
    {
      id: 'emb3-worked',
      type: 'text' as const,
      content: `### Worked Example — Following One Red Blood Cell Through the Fetus

**Problem 1.** An oxygenated red blood cell leaves the placenta and travels to the fetal brain. Trace its route, naming each shunt it uses.

- **(a)** In which vessel does it leave the placenta?
- **(b)** How does it get past the liver?
- **(c)** Which route takes it from the right atrium to the brain?
- **(d)** Where does fetal blood that does enter the right ventricle go?

**(a) Leaving the placenta.** The umbilical vein: the oxygenated vessel, despite being a vein, because vessel names follow direction relative to the fetal heart.

**(b) Past the liver.** Most flow diverts through the ductus venosus into the inferior vena cava, skipping hepatic capillaries so the well-oxygenated blood is not slowed or consumed by the liver.

**(c) Through the heart.** Much of the IVC stream crosses the foramen ovale into the left atrium, bypassing the right ventricle and the high-resistance lungs; then left ventricle → aorta → carotid arteries → brain. The freshest blood is steered to the brain and heart.

**(d) The parallel path.** Into the pulmonary artery, but high pulmonary resistance pushes most of it through the ductus arteriosus into the aorta: a second lung bypass, joining the aorta downstream of the head vessels.

**Problem 2.** After birth, a newborn's ductus arteriosus (fetal flow: pulmonary artery → aorta) fails to close (a patent ductus arteriosus, PDA). The first breath has already inflated the lungs and lowered pulmonary resistance.

- **(a)** Which way does blood now flow through the ductus?
- **(b)** What does this do to the pulmonary circuit?
- **(c)** Which drug class promotes closure, and why does it work?
- **(d)** When would a clinician want to keep the ductus open, and how?

**(a) Direction.** Aortic pressure now exceeds pulmonary pressure, so flow REVERSES from the fetal pattern: aorta → pulmonary artery, a left-to-right shunt.

**(b) Effect on the lungs.** Oxygenated blood recirculates through the lungs, volume-overloading the pulmonary circuit.

**(c) Closing it.** Prostaglandins keep the ductus open, so a prostaglandin synthesis inhibitor (an NSAID) promotes closure.

<!-- yield:low -->
- The NSAID classically used to close a PDA is **indomethacin**.
<!-- /yield -->

**(d) Keeping it open.** When a heart defect makes the ductus temporarily life-saving (in pulmonary atresia, for example, the lungs receive blood only through the ductus), prostaglandin infusion holds it open. Every shunt question reduces to: what does it bypass, which pressures drive the flow, and what reverses at birth.`
    },
    {
      id: 'emb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Membranes, Placenta & Fetal Circulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A newborn whose mother had measles years earlier is protected against measles for several months, though the baby was never vaccinated or infected. What best explains this?`,
            options: [`The fetus made anti-measles antibodies in utero`, `Maternal and fetal blood mixed in the placenta`, `Maternal IgG antibodies crossed the placenta`, `The amnion secreted antibodies into its fluid`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `IgG is the only antibody class that crosses the placenta, so the mother's anti-measles IgG gives the newborn passive immunity that fades over months as the borrowed antibodies are broken down. The fetus was never exposed to measles, so it had no reason to make its own antibodies. Maternal and fetal blood never mix: fetal capillaries sit inside villi bathed in maternal blood, always separated by cell layers. The amnion is a fluid-filled cushion, not an antibody source.`
          },
          {
            question: `Before birth, blood flows through the foramen ovale from the right atrium into the left. Which condition drives this flow?`,
            options: [`Left atrial pressure exceeds right, drawing blood across`, `Right atrial pressure exceeds left atrial pressure`, `The ductus arteriosus pumps blood back into the atria`, `Fetal lungs return extra blood to the left atrium`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Blood moves from higher to lower pressure. The right atrium receives all systemic venous return plus the placental stream, while the high-resistance, fluid-filled lungs send little blood back to the left atrium, so right atrial pressure is higher and pushes the flap open toward the left. Higher LEFT pressure is the post-birth state that shuts the flap. The ductus arteriosus is a passive vessel carrying pulmonary artery blood to the aorta, not into the atria. The fetal lungs return LESS blood, not more, which is exactly why left atrial pressure stays low.`
          },
          {
            question: `At birth, the foramen ovale closes primarily because:`,
            options: [`Rising oxygen tension directly constricts its muscular wall`, `Prostaglandin levels rise sharply once the cord is clamped`, `Clamping the umbilical cord stops all blood flow to the heart`, `Left atrial pressure rises above right, pressing the flap shut`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The foramen ovale is a one-way flap closed mechanically by a PRESSURE REVERSAL: the first breath opens the pulmonary circuit, venous return to the left atrium surges, and higher left-sided pressure presses the flap against the septum. Oxygen-and-prostaglandin chemistry is how the DUCTUS ARTERIOSUS closes (prostaglandins FALL, not rise). Cord clamping stops placental flow but does not itself shut the flap.`
          },
          {
            question: `The first fetal blood cells and the primordial germ cells both originate in the:`,
            options: [`Yolk sac`, `Amnion`, `Chorion`, `Placenta`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The yolk sac is the site of earliest hematopoiesis (before the liver and then bone marrow take over) and the origin of primordial germ cells, which later migrate to the developing gonads. The amnion is the fluid cushion, the chorion is the fetal placenta and hCG source — neither makes blood cells. The placenta exchanges blood contents but does not originate these lineages.`
          },
          {
            question: `A woman is exposed to a potent teratogen. Structural malformations of organs (e.g., limb or heart defects) are MOST likely if the exposure occurs during:`,
            options: [`The two weeks before implantation is complete`, `Weeks 3-8, during organogenesis`, `The third trimester, during rapid fetal growth`, `Late gestation, at labor and delivery`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Weeks 3-8 are when organ systems are being constructed, so an insult derails their architecture — thalidomide, alcohol, and rubella all do their worst here. Very early exposure (pre-implantation) tends to be all-or-none: either the embryo is lost or it recovers completely. Third-trimester exposure mainly impairs growth and CNS function, since the structures already exist.`
          }
        ]
      }
    },
    {
      id: 'emb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Each membrane has a job.** Amnion cushions; chorion forms the fetal placenta and makes hCG; yolk sac makes the first blood and germ cells.
- **Placenta exchanges, never mixes.** Villi exchange without blood mixing; hCG first, then placental progesterone/estrogen; IgG crosses.
- **Three shunts, three bypasses.** Ductus venosus skips the liver; foramen ovale (RA → LA) and ductus arteriosus (PA → aorta) skip the lungs.
- **Teratogens strike weeks 3-8.** Organogenesis is the window for structural defects (thalidomide, alcohol, rubella); earlier is all-or-none.

**Common traps**

- **Umbilical arteries as oxygenated.** Names follow the fetal heart: the single umbilical vein is oxygenated; the two arteries are not.
- **Oxygen closes the foramen ovale.** A pressure reversal (left atrium above right) shuts its flap; rising O₂ and falling prostaglandins close the ductus.
- **HbF binding 2,3-BPG tightly.** HbF binds 2,3-BPG poorly, so its curve is left-shifted and it pulls O₂ from maternal blood.
- **A PDA shunting right to left.** After birth an open ductus shunts left to right (aorta → pulmonary artery); NSAIDs help close it.

<!-- yield:low -->
**Low-yield extras**

- Shunt remnants (fossa ovalis, ligamentum arteriosum, ligamentum venosum); indomethacin as the NSAID used to close a PDA; failed digit apoptosis = syndactyly.
<!-- /yield -->`
    }
  ]
};
