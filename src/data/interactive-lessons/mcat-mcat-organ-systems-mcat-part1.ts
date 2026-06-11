export const mcatOrganSysPart1Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os1-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 1 of 7 — Cardiovascular System**

### Heart Structure

- 4 chambers: RA → RV → Lungs → LA → LV → Body
- Right side: deoxygenated blood to lungs (pulmonary circulation)
- Left side: oxygenated blood to body (systemic circulation)
- LV has thickest walls (pumps against systemic resistance)

### Cardiac Cycle

| Phase | AV Valves | Semilunar Valves | What happens |
|-------|-----------|-----------------|-------------|
| Atrial systole | Open | Closed | Atria contract, blood into ventricles |
| Ventricular systole | Closed (S1) | Open | Ventricles contract, blood into arteries |
| Diastole | Open | Closed (S2) | Ventricles relax, fill with blood |

### Key Equations

$$\\text{Cardiac Output} = \\text{HR} \\times \\text{Stroke Volume}$$

$$\\text{Blood Pressure} = \\text{CO} \\times \\text{Total Peripheral Resistance}$$

### Blood Vessel Types

- **Arteries**: Thick walls, elastic, carry blood FROM heart
- **Veins**: Thin walls, valves, carry blood TO heart
- **Capillaries**: Single cell thick, site of exchange

### Cardiac Conduction & the ECG

$$\\text{SA node} \\to \\text{AV node (delay)} \\to \\text{Bundle of His} \\to \\text{Purkinje fibers}$$

- **SA node** = pacemaker (~60–100 bpm intrinsic rate); sets sinus rhythm.
- **AV node delay** (~0.1 s) lets atria finish emptying before ventricles contract.
- ECG: **P wave** = atrial depolarization; **QRS** = ventricular depolarization (masks atrial repolarization); **T wave** = ventricular repolarization.

### Pressure–Flow Relationships (Poiseuille & Resistance)

Flow through a vessel obeys an Ohm's-law analog, $Q = \\Delta P / R$, where resistance depends sharply on radius:

$$R \\propto \\frac{\\eta L}{r^4}$$

- Radius dominates: halving $r$ raises resistance **16×**. This is why arterioles ("resistance vessels") control BP.
- Velocity is slowest in capillaries because total cross-sectional area is largest ($v = Q / A_{total}$) — maximizing exchange time.

### Frank–Starling Mechanism & Pressure–Volume Loop

- **Frank–Starling law**: greater end-diastolic volume (preload) → greater stretch → stronger contraction → larger stroke volume. The heart pumps what it receives.
- **Preload** ↑ by venous return; **afterload** = the pressure the ventricle must overcome (≈ aortic/systemic pressure); **contractility** ↑ by sympathetic/catecholamines independent of preload.

### Capillary Exchange (Starling Forces)

$$J_v \\propto (P_c - P_i) - (\\pi_c - \\pi_i)$$

- Arteriolar end: hydrostatic pressure dominates → net **filtration** out.
- Venular end: oncotic pressure dominates → net **reabsorption** in.
- Excess filtered fluid returns via the lymphatics. Lymphatic blockage or low plasma albumin → **edema**.`
    },
    {
      id: 'os1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cardiovascular** 🎯`,
      exercise: {
        questions: [
          {
            question: `During exercise, cardiac output increases primarily through:`,
            options: [`Increased heart rate AND increased stroke volume`, `Increased heart rate only`, `Decreased peripheral resistance only`, `Increased blood vessel diameter only`],
            correctAnswer: 0,
            explanation: `CO = HR $\\times$ SV. During exercise, sympathetic activation increases both HR (via SA node stimulation) and SV (via increased contractility and venous return). Both contribute to the ~4-5x increase in CO during vigorous exercise.`
          },
          {
            question: `An arteriole vasoconstricts so that its radius decreases to one-half its original value. Assuming flow is driven by the same pressure gradient, resistance to flow through that vessel:`,
            options: [`Increases 16-fold`, `Increases 2-fold`, `Increases 4-fold`, `Decreases 16-fold`],
            correctAnswer: 0,
            explanation: `By Poiseuille's law $R \\propto 1/r^4$. Halving the radius gives $(1/2)^4 = 1/16$ of the radius-term, i.e. resistance rises 16×. This $r^4$ dependence is why small arteriolar changes produce large blood-pressure swings.`
          },
          {
            question: `A patient with severe liver disease has very low plasma albumin. The most direct cardiovascular consequence is:`,
            options: [`Edema due to reduced capillary oncotic pressure`, `Increased capillary reabsorption of fluid`, `Hypertension from increased blood viscosity`, `Reduced cardiac preload from blood loss`],
            correctAnswer: 0,
            explanation: `Albumin generates plasma oncotic pressure ($\\pi_c$), which normally pulls fluid back into capillaries at the venular end. Low albumin → low $\\pi_c$ → filtration exceeds reabsorption → fluid accumulates in the interstitium (edema/ascites). This links cardiovascular Starling forces to hepatic and renal pathology.`
          }
        ]
      }
    },
    {
      id: 'os1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Cardiovascular Physiology

<details>
<summary><b>Example 1: Compute cardiac output and mean arterial pressure</b></summary>

**Question:** HR = 75 bpm, end-diastolic volume = 120 mL, end-systolic volume = 50 mL, total peripheral resistance such that systolic BP = 120 and diastolic = 80 mmHg. Find stroke volume, cardiac output, and mean arterial pressure (MAP).

**Solution:**
1. Stroke volume = EDV − ESV = 120 − 50 = **70 mL**
2. Cardiac output = HR × SV = 75 × 70 = 5250 mL/min ≈ **5.25 L/min** ✓
3. MAP ≈ DBP + ⅓(SBP − DBP) = 80 + ⅓(40) = **93 mmHg**

**MCAT note:** Ejection fraction = SV/EDV = 70/120 ≈ 58% (normal). A falling ejection fraction signals systolic heart failure.
</details>

<details>
<summary><b>Example 2: Predict the effect of increased afterload</b></summary>

**Question:** A patient develops aortic stenosis (narrowed aortic valve), raising the pressure the left ventricle must generate to eject blood. In the short term, what happens to stroke volume, and how does the heart compensate long-term?

**Solution:**
1. Higher afterload → the ventricle ejects against greater resistance → **stroke volume falls** acutely (end-systolic volume rises because less blood is ejected).
2. Frank–Starling: the leftover blood adds to the next preload, partially restoring SV via greater stretch.
3. Long-term compensation: **concentric ventricular hypertrophy** (thicker wall) to generate higher pressure — eventually maladaptive, leading to diastolic dysfunction. ✓

**High-yield connection:** Afterload ↑ → SV ↓; preload ↑ → SV ↑. Distinguish these on pressure–volume loops.
</details>

<details>
<summary><b>Example 3: Reason about capillary fluid movement</b></summary>

**Question:** At the arteriolar end of a capillary: $P_c = 35$, $P_i = 0$, $\\pi_c = 25$, $\\pi_i = 0$ mmHg. At the venular end $P_c = 15$ (others unchanged). Determine the direction of net fluid movement at each end.

**Solution:**
- Arteriolar end: net = $(35 - 0) - (25 - 0) = +10$ mmHg → **filtration OUT.** ✓
- Venular end: net = $(15 - 0) - (25 - 0) = -10$ mmHg → **reabsorption IN.** ✓

**Interpretation:** Hydrostatic pressure drops along the capillary while oncotic pressure stays roughly constant, so fluid filters out early and is reabsorbed later. Net slight excess is cleared by lymphatics — block them and you get lymphedema.
</details>`
    },
    {
      id: 'os1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- CO = HR $\\times$ SV; BP = CO $\\times$ TPR
- Left ventricle = thickest (systemic pressure)
- S1 = AV valves close (lub); S2 = semilunar valves close (dub)
- Capillaries = site of gas/nutrient exchange (largest total cross-sectional area)`
    }
  ]
};
