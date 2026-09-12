export const mcatRespSubPart2Data = {
  topicSlug: 'mcat-organ-systems-respiratory-mcat',
  sections: [
    {
      id: 'rsp2-intro',
      type: 'text' as const,
      content: `# Respiratory System

**Part 2 of 4 — Gas Exchange & Transport (O2, CO2 & Hemoglobin)**

### Partial Pressures Drive Everything

Dalton's law: each gas in a mixture exerts its own partial pressure, $P_x = F_x \\times P_{total}$. Henry's law: the amount of gas **dissolved** in liquid is proportional to its partial pressure. Gases always diffuse **down partial-pressure gradients** — never "toward where they're needed."

| Location | $P_{O_2}$ (mmHg) | $P_{CO_2}$ (mmHg) |
|----------|------------------|-------------------|
| Atmosphere (sea level) | ~160 | ~0.3 |
| Alveolar air | ~100 | ~40 |
| Systemic arterial blood | ~95–100 | ~40 |
| Tissues / mixed venous blood | ~40 | ~46 |

- Alveolar $P_{O_2}$ is below atmospheric because inspired air is humidified (water vapor dilutes it) and mixes with CO2-rich residual gas.
- At the alveolus: O2 moves alveolus → blood; CO2 moves blood → alveolus. At the tissues, both gradients reverse.

### Diffusion Across the Alveolar Membrane

Fick's law of diffusion (for the membrane):

$$\\text{Rate} \\propto \\frac{A \\cdot D \\cdot \\Delta P}{T}$$

- $A$ = surface area (emphysema destroys alveolar walls → ↓A), $T$ = membrane thickness (fibrosis, edema → ↑T), $D$ = diffusivity, $\\Delta P$ = partial-pressure gradient.
- CO2 diffuses ~20× faster than O2 (much higher solubility), so diffusion disease impairs **O2 exchange first**.

### Hemoglobin and the Oxygen Dissociation Curve

Dissolved O2 is tiny (~1.5%); **~98.5% rides on hemoglobin** (4 subunits, each with a heme Fe$^{2+}$; up to 4 O2).

- **Cooperativity:** binding one O2 shifts Hb toward the high-affinity **R state**, making the next binding easier → a **sigmoidal** curve. Myoglobin (single subunit, muscle storage) is **hyperbolic**, with higher affinity — it takes O2 FROM Hb.
- The flat top (loading plateau) means arterial saturation stays ~97% even if alveolar $P_{O_2}$ dips modestly; the steep middle means large unloading at tissue pressures (~75% saturation at $P_{O_2} = 40$).

### Right Shift = Easier Unloading (the Bohr Effect)

A **right shift** lowers Hb's O2 affinity (higher $P_{50}$), releasing more O2 at the same tissue $P_{O_2}$. Right-shifters — all signatures of active tissue:

- ↑ $P_{CO_2}$, ↑ H$^+$ (lower pH) — the **Bohr effect**
- ↑ temperature
- ↑ **2,3-BPG** (chronic hypoxia, altitude, anemia)

Left shift (higher affinity, harder unloading): the opposites, plus **fetal hemoglobin** (HbF binds 2,3-BPG poorly → pulls O2 across the placenta from maternal HbA) and **carbon monoxide**.

- **CO poisoning is a double hit:** CO binds heme ~250× more tightly than O2 (↓ carrying capacity) AND shifts the remaining sites left (↓ unloading). Arterial $P_{O_2}$ — dissolved gas — reads **normal**.

### CO2 Transport — Three Forms

| Form | Share | Mechanism |
|------|-------|-----------|
| **Bicarbonate** | ~70% | In RBCs, carbonic anhydrase: CO2 + H2O → H2CO3 → H$^+$ + HCO3$^-$; HCO3$^-$ exits in exchange for Cl$^-$ (**chloride shift**); Hb buffers the H$^+$ |
| Carbamino-Hb | ~20% | CO2 binds Hb's globin amino groups (not the heme) |
| Dissolved | ~7–10% | Henry's law |

The bicarbonate reaction is the hinge of blood pH:

$$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$$

- **Haldane effect** (Bohr's mirror): deoxygenated Hb is a better buffer and carbamino carrier, so venous blood carries extra CO2; oxygenation in the lungs pushes CO2 off for exhalation.
- Everything reverses in the lungs: HCO3$^-$ re-enters RBCs, recombines with H$^+$, and carbonic anhydrase regenerates CO2 for exhalation.`
    },
    {
      id: 'rsp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gas Exchange & Transport** 🎯`,
      exercise: {
        questions: [
          {
            question: `A firefighter with carbon monoxide poisoning has a normal arterial partial pressure of oxygen but severe tissue hypoxia. The best explanation is:`,
            options: [`CO blocks oxygen diffusion across the alveolar membrane, lowering dissolved O2`, `CO occupies heme sites and left-shifts the dissociation curve, so blood O2 CONTENT and unloading both fall while dissolved O2 is unchanged`, `CO stimulates hyperventilation, blowing off the O2 before it reaches tissues`, `CO oxidizes hemoglobin iron so it binds O2 irreversibly tightly at all four sites`],
            correctAnswer: 1,
            explanation: `Arterial $P_{O_2}$ measures only DISSOLVED oxygen, which depends on the alveoli — and alveolar exchange is fine. CO outcompetes O2 for heme (~250x affinity), slashing O2 content, and shifts remaining sites toward the R state (left shift), impairing unloading. (Oxidized Fe$^{3+}$ is methemoglobin — a different lesion, not caused by CO.)`
          },
          {
            question: `Compared with hemoglobin, myoglobin's oxygen-binding curve is:`,
            options: [`Sigmoidal, because myoglobin also shows cooperative binding`, `Sigmoidal but right-shifted, favoring O2 release in muscle`, `Hyperbolic with higher affinity, because a single subunit cannot show cooperativity`, `Hyperbolic with lower affinity, so it only binds O2 during exercise`],
            correctAnswer: 2,
            explanation: `Cooperativity requires multiple interacting subunits; monomeric myoglobin binds one O2 with simple saturable (hyperbolic) kinetics. Its affinity is HIGHER than hemoglobin's at every relevant pressure — that is precisely what lets muscle strip O2 from arriving blood and store it for use when demand spikes.`
          },
          {
            question: `Most carbon dioxide produced by tissues travels to the lungs:`,
            options: [`Bound to the iron of heme groups`, `As dissolved CO2 in plasma`, `As carbaminohemoglobin`, `As bicarbonate ion in the plasma, generated by carbonic anhydrase in red blood cells`],
            correctAnswer: 3,
            explanation: `About 70% of CO2 is converted inside RBCs (carbonic anhydrase) to H$^+$ + HCO3$^-$; the bicarbonate is exported to plasma via the chloride shift. Carbamino-Hb (~20%) binds CO2 to GLOBIN amino groups — never to the heme iron, which is oxygen's seat — and only ~7-10% travels dissolved.`
          }
        ]
      }
    },
    {
      id: 'rsp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Curves & Transport

<details>
<summary><b>Example 1: Read a dissociation-curve experiment</b></summary>

**Question:** A passage shows Hb saturation curves at pH 7.2 and pH 7.4. At a tissue $P_{O_2}$ of 40 mmHg, the pH 7.2 curve reads 60% saturation versus 75% at pH 7.4. What does this mean physiologically?

**Solution:**
1. Lower pH → curve shifted **right** (Bohr effect): at the same $P_{O_2}$, Hb holds LESS O2.
2. Saturation dropping from 75% to 60% means an extra 15% of carried O2 is **released** to the tissue.
3. Acidic microenvironments are exactly where metabolism is fastest (CO2 and lactic acid production) — the shift automatically delivers more O2 where demand is highest. ✓

**Trap:** a right shift is "bad" for loading only in the lungs — and the plateau is so flat there that loading barely suffers.
</details>

<details>
<summary><b>Example 2: Trace one CO2 molecule from muscle to exhaled air</b></summary>

**Question:** Follow a CO2 molecule produced in exercising muscle until it is exhaled, naming each conversion.

**Solution:**
1. CO2 diffuses muscle → interstitium → plasma → **into an RBC** (all down pressure gradients).
2. Carbonic anhydrase: CO2 + H2O → H2CO3 → H$^+$ + HCO3$^-$. HCO3$^-$ swaps out for Cl$^-$ (chloride shift); deoxy-Hb buffers the H$^+$ (Haldane).
3. In pulmonary capillaries everything reverses: HCO3$^-$ re-enters, joins H$^+$, carbonic anhydrase regenerates CO2 → diffuses into the alveolus ($P_{CO_2}$ 46 → 40) → exhaled. ✓
</details>

<details>
<summary><b>Example 3: Quantify oxygen content vs. saturation</b></summary>

**Question:** A patient's hemoglobin falls from 15 to 7.5 g/dL (severe anemia), but arterial saturation remains 98%. Explain why the patient is still hypoxic, using $O_2 \\text{ content} = 1.34 \\times [Hb] \\times S_{a}$ (ignoring dissolved gas).

**Solution:**
1. Normal: $1.34 \\times 15 \\times 0.98 \\approx 19.7$ mL O2/dL.
2. Anemic: $1.34 \\times 7.5 \\times 0.98 \\approx 9.9$ mL O2/dL — **half the content at perfect saturation**.
3. Saturation is a percentage of AVAILABLE seats; anemia removes seats. Delivery = CO x content, so the heart compensates with tachycardia, and 2,3-BPG rises to right-shift the curve. ✓

**Passage skill:** saturation, partial pressure, and content are three different axes — identify which one the figure actually plots before answering.
</details>`
    },
    {
      id: 'rsp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Gases move down partial-pressure gradients (Dalton + Henry); memorize the anchor values: alveolar 100/40, venous 40/46 mmHg for O2/CO2.
- Diffusion rate ∝ area × gradient / thickness — emphysema kills area, fibrosis/edema add thickness; CO2 diffuses ~20× faster than O2.
- Hb: sigmoidal (cooperativity, T→R); myoglobin: hyperbolic, higher affinity. Right shift (↑CO2, ↑H⁺, ↑temp, ↑2,3-BPG) = easier unloading; HbF and CO shift left.
- CO poisoning: normal arterial $P_{O_2}$, low content, impaired unloading.
- CO2 travels ~70% as bicarbonate (carbonic anhydrase + chloride shift), ~20% carbamino, ~7-10% dissolved; Haldane effect couples O2 loading to CO2 release.`
    }
  ]
};
