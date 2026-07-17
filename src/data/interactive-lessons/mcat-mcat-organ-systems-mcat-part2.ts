export const mcatOrganSysPart2Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os2-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 2 of 7 — Respiratory System**

### Gas Exchange

$$\\text{O}_2: \\text{Alveoli} \\to \\text{Blood} \\to \\text{Tissues}$$
$$\\text{CO}_2: \\text{Tissues} \\to \\text{Blood} \\to \\text{Alveoli}$$

- Driven by PARTIAL PRESSURE gradients (Fick's law)
- Alveoli maximize surface area for diffusion

### Fick's Law of Diffusion

Gas flux across the alveolar membrane scales with surface area and partial-pressure gradient, and inversely with membrane thickness:

$$V_{gas} \\propto \\frac{A \\cdot D \\cdot (P_1 - P_2)}{T}$$

- $A$ = surface area (huge in alveoli, ~70 $m^{2}$); destroyed in **emphysema** → impaired exchange.
- $T$ = membrane thickness; increased by **pulmonary edema** or **fibrosis** → impaired diffusion.
- $(P_1 - P_2)$ = partial pressure gradient. Alveolar $P_{O_2}\\approx 100$ mmHg vs. venous blood ~40 mmHg drives $O_{2}$ in.

### Oxygen Transport

- 98.5% bound to hemoglobin (Hb), 1.5% dissolved in plasma
- Each Hb binds 4 O$_2$ molecules
- **Cooperative binding**: Binding of first O$_2$ increases affinity for subsequent O$_2$ (sigmoidal curve)

### The Oxygen–Hemoglobin Dissociation Curve (Figure)

The curve plots **% Hb saturation (y)** vs. **$P_{O_2}$ (x)** and is **sigmoidal** due to cooperativity:

| $P_{O_2}$ (mmHg) | ~% Saturation | Location |
|---|---|---|
| 100 | ~98% | Lungs (loading plateau) |
| 40 | ~75% | Resting venous blood / tissues |
| 26 ($P_{50}$) | 50% | Reference affinity point |
| 20 | ~35% | Exercising muscle (steep unloading) |

The flat upper plateau means modest drops in alveolar $P_{O_2}$ (altitude, mild lung disease) barely lower loading. The **steep middle** means small $P_{O_2}$ drops in tissue cause large $O_{2}$ release — efficient unloading exactly where metabolism is high.

### The Bohr Effect (MCAT FAVORITE)

Conditions that RIGHT-shift the curve (raise $P_{50}$, lower affinity, promote O$_2$ unloading):
- Increased CO$_2$ (metabolically active tissue)
- Decreased pH (acidic — more CO$_2$/lactic acid)
- Increased temperature
- Increased 2,3-BPG (chronic hypoxia, high altitude)

**Mnemonic**: Right shift = Release O$_2$ to tissues. A LEFT shift (↑pH, ↓$CO_{2}$, ↓temp, ↓2,3-BPG; also **fetal Hb** and **CO**) raises affinity → $O_{2}$ held tightly.

### CO$_2$ Transport & the Chloride Shift

- 70% as bicarbonate (HCO$_3^-$)
- 23% bound to Hb (carbaminohemoglobin)
- 7% dissolved in plasma

In the tissues, $CO_{2}$ enters RBCs, and **carbonic anhydrase** catalyzes:

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$

$HCO_{3}^{-}$ exits the RBC in exchange for $Cl^{-}$ (the **chloride shift**); $H^{+}$ binds Hb (driving the Bohr effect). In the lungs the entire reaction reverses, expelling $CO_{2}$.

### Control of Ventilation (Feedback Loop)

The **medullary respiratory center** sets breathing rate. The dominant stimulus is **$CO_{2}/pH$**, not $O_{2}$:

$$\\uparrow P_{CO_2} \\to \\uparrow \\text{H}^+ \\text{ in CSF} \\to \\text{central chemoreceptors} \\to \\uparrow \\text{ventilation} \\to \\downarrow P_{CO_2}$$

- **Central chemoreceptors** (medulla) sense CSF pH (a proxy for arterial $CO_{2}$) — the primary driver.
- **Peripheral chemoreceptors** (carotid/aortic bodies) sense low $P_{O_2}$ (<60 mmHg), high $CO_{2}$, low pH — the backup hypoxic drive.
- Hyperventilation blows off $CO_{2}$ → **respiratory alkalosis**; hypoventilation retains $CO_{2}$ → **respiratory acidosis**.`
    },
    {
      id: 'os2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Respiratory** 🎯`,
      exercise: {
        questions: [
          {
            question: `During intense exercise, the O$_2$-hemoglobin dissociation curve shifts RIGHT because:`,
            options: [`Increased CO$_2$, lower pH, and higher temperature all promote O$_2$ release to working muscles`, `Muscles need less oxygen`, `Hemoglobin concentration increases`, `The lungs absorb more oxygen`],
            correctAnswer: 0,
            explanation: `Active muscles produce CO$_2$, lactic acid (lower pH), and heat. All three right-shift the curve (Bohr effect), lowering Hb's $O_{2}$ affinity so more $O_{2}$ is released exactly where it is needed. "Muscles need less oxygen" is the opposite of reality; Hb concentration and lung uptake do not change the curve's position.`
          },
          {
            question: `A climber at 4500 m has a chronically low arterial $P_{O_2}$. Over days, RBCs upregulate 2,3-BPG. The adaptive benefit of increased 2,3-BPG is best described as:`,
            options: [`It right-shifts the curve, improving $O_{2}$ unloading at the tissues despite low arterial $P_{O_2}$`, `It left-shifts the curve so the lungs load $O_{2}$ more easily`, `It increases the total number of hemoglobin molecules`, `It directly increases alveolar surface area`],
            correctAnswer: 0,
            explanation: `2,3-BPG binds deoxyhemoglobin and stabilizes the low-affinity (T) state, right-shifting the curve. On the steep portion of the curve this markedly improves $O_{2}$ delivery to tissues. A left shift (option 2) would hold $O_{2}$ more tightly and worsen unloading — the wrong direction. 2,3-BPG changes affinity, not Hb quantity or alveolar area.`
          },
          {
            question: `A patient with pulmonary fibrosis has thickened alveolar membranes. By Fick's law, which intervention would MOST directly compensate for impaired $O_{2}$ diffusion?`,
            options: [`Increasing inspired $O_{2}$ fraction to raise the alveolar–capillary $P_{O_2}$ gradient`, `Lowering the patient's body temperature`, `Decreasing the alveolar surface area`, `Reducing hemoglobin concentration`],
            correctAnswer: 0,
            explanation: `Fick's law: $V_{gas} \\propto A \\cdot (P_1 - P_2)/T$. Fibrosis raises $T$ (thickness), reducing flux. You cannot easily thin the membrane, but supplemental $O_{2}$ raises alveolar $P_{O_2}$, increasing the $(P_1 - P_2)$ gradient to partially offset the larger $T$. Decreasing surface area (option 3) reduces $A$ and worsens exchange; temperature and Hb concentration do not appear in Fick's diffusion equation.`
          }
        ]
      }
    },
    {
      id: 'os2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Respiratory Physiology

<details>
<summary><b>Example 1: Compute alveolar $P_{O_2}$ with the alveolar gas equation</b></summary>

**Question:** At sea level, $P_{atm} = 760$ mmHg, water vapor pressure = 47 mmHg, $F_{IO_2} = 0.21$, arterial $P_{CO_2} = 40$ mmHg, respiratory quotient $R = 0.8$. Estimate alveolar $P_{O_2}$.

**Solution:**
1. Inspired $P_{O_2} = (760 - 47) \\times 0.21 = 713 \\times 0.21 \\approx 150$ mmHg.
2. Alveolar gas equation: $P_{AO_2} = P_{IO_2} - P_{CO_2}/R = 150 - 40/0.8 = 150 - 50 = $ **100 mmHg** ✓

**MCAT note:** This ~100 mmHg matches the lung value in the dissociation table. At altitude, $P_{atm}$ falls → $P_{IO_2}$ falls → $P_{AO_2}$ drops, triggering the hypoxic ventilatory response.
</details>

<details>
<summary><b>Example 2: Calculate $O_{2}$ delivered per minute</b></summary>

**Question:** Hb = 15 g/dL, each gram of Hb carries 1.34 mL $O_{2}$ at full saturation, arterial saturation = 98%, cardiac output = 5 L/min. Approximate $O_{2}$ delivery to tissues (ignore dissolved $O_{2}$).

**Solution:**
1. $O_{2}$ content $\\approx 15 \\times 1.34 \\times 0.98 \\approx 19.7$ mL $O_{2}$ / dL = 197 mL/L.
2. Delivery = content × cardiac output = $197 \\times 5 \\approx$ **985 mL $O_{2}/min$** ✓

**Interpretation:** Anemia (lower Hb) cuts delivery proportionally even with normal saturation — this is why $SpO_2$ alone can mask poor $O_{2}$ delivery. The body compensates by raising cardiac output.
</details>

<details>
<summary><b>Example 3: Predict the acid–base effect of hyperventilation</b></summary>

**Question:** A panicking patient hyperventilates, dropping arterial $P_{CO_2}$ from 40 to 25 mmHg. Using the carbonic anhydrase equilibrium, predict the change in blood pH and the curve shift.

**Solution:**
1. $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$. Lowering $CO_{2}$ pulls the reaction LEFT → fewer $H^{+}$ → **pH rises** (respiratory alkalosis). ✓
2. Higher pH + lower $CO_{2}$ → **LEFT shift** of the $O_{2}$–Hb curve (reverse Bohr) → Hb holds $O_{2}$ more tightly → reduced tissue unloading, contributing to lightheadedness.

**High-yield connection:** Breathing into a bag re-raises $CO_{2}$, restoring pH and curve position. $CO_{2}$, not $O_{2}$, is the master regulator of ventilation.
</details>`
    },
    {
      id: 'os2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Gas exchange driven by partial pressure gradients (Fick's law: $V_{gas} \\propto A(P_1-P_2)/T$)
- O$_2$ transport: 98.5% on hemoglobin (cooperative binding, sigmoidal curve)
- Bohr effect: right shift = more O$_2$ release (higher CO$_2$, lower pH, higher temp, ↑2,3-BPG)
- CO$_2$ transport: mostly as bicarbonate (70%); chloride shift maintains charge balance
- Ventilation is driven mainly by $CO_{2}/pH$ via central chemoreceptors, not by $O_{2}$`
    }
  ]
};
