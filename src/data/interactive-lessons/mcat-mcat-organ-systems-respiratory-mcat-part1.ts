export const mcatRespSubPart1Data = {
  topicSlug: 'mcat-organ-systems-respiratory-mcat',
  sections: [
    {
      id: 'rsp1-intro',
      type: 'text' as const,
      content: `# Respiratory System

**Part 1 of 4 — Airway Structure & the Mechanics of Ventilation**

### Conducting vs. Respiratory Zones

| Zone | Structures | Function |
|------|-----------|----------|
| **Conducting** | Nose → pharynx → larynx → trachea → bronchi → terminal bronchioles | Warm, humidify, filter air; NO gas exchange (**anatomic dead space**, ~150 mL) |
| **Respiratory** | Respiratory bronchioles → alveolar ducts → alveoli (~300 million) | Gas exchange across the alveolar–capillary membrane |

- Airway defenses: nasal hairs, the **mucociliary escalator** (goblet-cell mucus swept upward by cilia), and alveolar **macrophages**.
- Alveoli are one cell thick (type I pneumocytes); **type II pneumocytes** secrete surfactant.

### Breathing Is Boyle's Law

At constant temperature, $P_1 V_1 = P_2 V_2$ — changing thoracic **volume** changes alveolar **pressure**, and air flows down the pressure gradient.

**Inspiration (active):**
1. Diaphragm contracts (flattens downward) and external intercostals lift the ribs → thoracic volume ↑.
2. Alveolar pressure drops below atmospheric → air flows **in**.

**Expiration (passive at rest):**
1. Muscles relax; elastic recoil of lungs and chest wall shrinks thoracic volume.
2. Alveolar pressure rises above atmospheric → air flows **out**.
3. Forced expiration recruits abdominal muscles and internal intercostals (active).

### The Pleural Seal — Why Lungs Follow the Chest Wall

- The **intrapleural pressure** between the visceral and parietal pleurae is **negative** relative to the alveoli (about −4 to −6 cmH2O at rest) because the lungs recoil inward while the chest wall springs outward.
- This negative pressure couples lung to chest wall like suction. Puncture the pleura (**pneumothorax**) → air rushes in, intrapleural pressure equalizes with atmosphere → the lung collapses from its own elastic recoil.

### Surface Tension, Surfactant & Laplace

The fluid lining each alveolus creates surface tension that resists expansion. For a bubble-like alveolus:

$$P = \\frac{2T}{r}$$

- Smaller radius → **higher** collapsing pressure: without correction, small alveoli would empty into big ones.
- **Surfactant** (a phospholipid, mainly dipalmitoylphosphatidylcholine, from type II cells) lowers surface tension — and lowers it MORE where the surfactant molecules are crowded (small alveoli) — stabilizing alveoli of different sizes and increasing compliance.
- Premature infants lacking surfactant develop **neonatal respiratory distress syndrome**: stiff lungs, collapsing alveoli.

### Lung Volumes & Capacities (capacities = sums of volumes)

| Term | Approx. value | Definition |
|------|---------------|------------|
| Tidal volume (TV) | 500 mL | Normal quiet breath |
| Inspiratory reserve (IRV) | ~3000 mL | Extra air you can inhale after a tidal breath |
| Expiratory reserve (ERV) | ~1200 mL | Extra air you can exhale after a tidal breath |
| Residual volume (RV) | ~1200 mL | Air that can NEVER be exhaled (keeps alveoli open) |
| Vital capacity (VC) | ~4700 mL | IRV + TV + ERV — maximum exhalable breath |
| Functional residual capacity (FRC) | ~2400 mL | ERV + RV — air remaining after a quiet exhale |
| Total lung capacity (TLC) | ~5900 mL | VC + RV |

**Spirometry cannot measure RV** (or any capacity containing it: FRC, TLC) — you cannot exhale it into the machine.

### Alveolar Ventilation Beats Total Ventilation

$$\\dot{V}_A = (TV - V_{dead}) \\times f$$

Rapid shallow breathing wastes a larger fraction of each breath on dead space: 250 mL × 24 breaths moves 6 L/min total but only $(250-150)\\times 24 = 2.4$ L/min reaches alveoli, versus $(500-150)\\times 12 = 4.2$ L/min at normal depth — same total ventilation, very different gas exchange.`
    },
    {
      id: 'rsp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Ventilation Mechanics** 🎯`,
      exercise: {
        questions: [
          {
            question: `During quiet inspiration, air enters the lungs because:`,
            options: [`Diaphragm contraction pushes air downward into the alveoli`, `Thoracic expansion drops alveolar pressure below atmospheric`, `Elastic recoil of the lungs actively draws air into the alveoli`, `Active transport proteins move air across the alveolar membrane`],
            correctAnswer: 1,
            explanation: `Breathing is Boyle's law: the diaphragm and external intercostals expand the thorax, alveolar pressure falls below atmospheric, and air flows passively down the pressure gradient. The muscles act on VOLUME, not by pushing air; pressure and flow follow. The lung's elastic recoil pulls inward and powers quiet expiration, not inspiration, and gases are never actively transported.`
          },
          {
            question: `A stab wound opens the right pleural cavity to the atmosphere. The right lung collapses because:`,
            options: [`Air enters at positive pressure and squeezes the lung`, `The diaphragm on that side loses its ability to contract`, `Intrapleural pressure rises to atmospheric, freeing lung recoil`, `Surfactant escapes through the wound, raising surface tension`],
            correctAnswer: 2,
            explanation: `The lung is held expanded only by the negative (sub-alveolar) intrapleural pressure coupling it to the chest wall. Venting the pleural space to atmosphere abolishes that pressure difference, and the lung's own inward elastic recoil — always present — collapses it. The diaphragm and surfactant are untouched.`
          },
          {
            question: `Which measurement CANNOT be obtained from simple spirometry?`,
            options: [`Tidal volume`, `Forced expiratory volume in one second`, `Inspiratory reserve volume`, `Functional residual capacity`],
            correctAnswer: 3,
            explanation: `FRC = ERV + RV, and residual volume can never be exhaled into a spirometer, so any capacity containing RV (FRC, TLC) requires helium-dilution or body-plethysmography methods. TV, IRV, ERV, VC, and FEV1 are all exhalable/inhalable air movements a spirometer records directly.`
          }
        ]
      }
    },
    {
      id: 'rsp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Mechanics & Volumes

<details>
<summary><b>Example 1: Alveolar ventilation arithmetic</b></summary>

**Question:** Patient A breathes 400 mL × 20 breaths/min; Patient B breathes 800 mL × 10 breaths/min. Dead space is 150 mL in both. Compare total and alveolar ventilation.

**Solution:**
1. Total ventilation: A = 400 × 20 = 8.0 L/min; B = 800 × 10 = 8.0 L/min — identical.
2. Alveolar: A = (400 − 150) × 20 = **5.0 L/min**; B = (800 − 150) × 10 = **6.5 L/min**. ✓
3. Deep slow breathing wins because the fixed dead-space "tax" is paid fewer times per minute.

**MCAT note:** this is why panting (very shallow, very fast) exchanges little gas — a favorite experimental-passage manipulation.
</details>

<details>
<summary><b>Example 2: Laplace and the two-bubble problem</b></summary>

**Question:** Two connected alveoli have radii $r$ and $2r$ with EQUAL surface tension $T$. Which way does air flow, and how does surfactant fix this?

**Solution:**
1. $P = 2T/r$: the small alveolus has TWICE the collapsing pressure of the large one.
2. Air flows from high to low pressure → the small alveolus **empties into the large one** and collapses.
3. Surfactant's concentration rises as an alveolus shrinks (same molecules, less area), so it lowers $T$ MORE in small alveoli — equalizing pressures and stabilizing both. ✓
</details>

<details>
<summary><b>Example 3: Compute capacities from volumes</b></summary>

**Question:** Given TV = 500 mL, IRV = 2900 mL, ERV = 1100 mL, RV = 1200 mL, find VC, FRC, and TLC.

**Solution:**
1. $VC = IRV + TV + ERV = 2900 + 500 + 1100 = 4500$ mL ✓
2. $FRC = ERV + RV = 1100 + 1200 = 2300$ mL ✓
3. $TLC = VC + RV = 4500 + 1200 = 5700$ mL ✓

**Pattern:** every "capacity" is a sum of two or more non-overlapping "volumes"; only the four volumes are primitive.
</details>`
    },
    {
      id: 'rsp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Conducting zone = dead space (~150 mL), no exchange; respiratory zone = alveoli; type II pneumocytes make surfactant.
- Breathing is Boyle's law: muscles change thoracic volume → alveolar pressure → passive airflow. Quiet expiration is passive elastic recoil.
- Negative intrapleural pressure couples lung to chest wall; pneumothorax breaks the seal and recoil collapses the lung.
- Laplace ($P = 2T/r$) predicts small-alveolus collapse; surfactant lowers surface tension preferentially in small alveoli.
- Alveolar ventilation $= (TV - V_{dead}) \\times f$; deep slow breathing beats rapid shallow breathing. Spirometry cannot measure RV, FRC, or TLC.`
    }
  ]
};
