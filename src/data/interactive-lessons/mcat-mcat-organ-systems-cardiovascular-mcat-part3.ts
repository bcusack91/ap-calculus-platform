export const mcatCardioSubPart3Data = {
  topicSlug: 'mcat-organ-systems-cardiovascular-mcat',
  sections: [
    {
      id: 'cvs3-intro',
      type: 'text' as const,
      content: `# Cardiovascular System

**Part 3 of 4 — Starling Forces, Frank–Starling & Blood Pressure Regulation**

### The Three Determinants of Stroke Volume

| Determinant | Definition | Raised by | Effect on SV |
|-------------|------------|-----------|--------------|
| **Preload** | Ventricular stretch at end of diastole (≈ EDV) | Venous return, volume infusion, venoconstriction | ↑ preload → ↑ SV |
| **Afterload** | Pressure the ventricle must overcome to eject (≈ aortic pressure) | Hypertension, aortic stenosis | ↑ afterload → ↓ SV (acutely) |
| **Contractility** | Force of contraction at a GIVEN preload | Sympathetic NE/epinephrine (beta-1 → more Ca$^{2+}$) | ↑ contractility → ↑ SV |

### Frank–Starling Mechanism

**The heart pumps what it receives.** Greater end-diastolic volume stretches cardiac sarcomeres toward optimal actin–myosin overlap → stronger contraction → larger stroke volume.

- This automatically **matches the outputs of the two ventricles**: if the right heart briefly pumps more, the extra volume reaches the left heart, stretches it, and the left output rises to match.
- Sympathetic stimulation shifts the whole Starling curve **up and left** (more SV at the same preload) — that is a contractility change, not a preload change. Distinguishing the two is a favorite MCAT discrimination.

### Capillary Exchange — Starling Forces

Net fluid flux across the capillary wall:

$$J_v \\propto (P_c - P_i) - (\\pi_c - \\pi_i)$$

| Force | Meaning | Pushes fluid |
|-------|---------|--------------|
| $P_c$ | Capillary hydrostatic pressure | OUT (filtration) |
| $P_i$ | Interstitial hydrostatic pressure | IN (usually near 0) |
| $\\pi_c$ | Plasma oncotic pressure (mostly **albumin**) | IN (absorption) |
| $\\pi_i$ | Interstitial oncotic pressure | OUT (usually small) |

- Arteriolar end: $P_c$ high (~35 mmHg) → net **filtration out**. Venular end: $P_c$ low (~15) while $\\pi_c$ ≈ 25 → net **reabsorption in**.
- The slight net excess filtered each day (~2–4 L) returns via **lymphatics**.
- **Edema logic:** ↑$P_c$ (heart failure, venous obstruction), ↓$\\pi_c$ (low albumin — liver failure, nephrotic syndrome, malnutrition), ↑ capillary permeability (inflammation → protein leaks, raising $\\pi_i$), or lymphatic blockage — each tips the balance toward the interstitium.

Small solutes and gases cross by **diffusion** down their gradients (O$_2$ and CO$_2$ straight through membranes; ions/glucose via pores or clefts); Starling forces govern **bulk fluid**, not gas exchange.

### The Baroreceptor Reflex — Short-Term Pressure Control

1. Stretch receptors in the **carotid sinus** (glossopharyngeal afferents) and **aortic arch** (vagal afferents) fire in proportion to arterial pressure.
2. Signals reach the **medulla** (cardiovascular centers).
3. **Pressure falls** → less baroreceptor firing → ↑ sympathetic, ↓ parasympathetic output → ↑ HR, ↑ contractility, arteriolar constriction, venoconstriction → pressure restored.
4. **Pressure rises** → the mirror image.

This is a classic **negative feedback** loop acting within seconds. Long-term pressure control belongs to the kidneys (blood volume via RAAS/ADH — covered in the renal lesson).

### Hormonal Modulators (Preview)

- **Epinephrine** (adrenal medulla): beta-1 → ↑HR/contractility; alpha-1 → vasoconstriction in skin/gut; beta-2 → vasodilation in skeletal muscle.
- **Angiotensin II** and **ADH (vasopressin)**: vasoconstrictors that also expand volume via the kidney.
- **ANP** (stretched atria): promotes Na$^+$ and water excretion — the heart's own volume-lowering hormone.`
    },
    {
      id: 'cvs3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Starling Forces & Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient with nephrotic syndrome loses large amounts of albumin in the urine and develops widespread edema. The primary Starling-force change is:`,
            options: [`Increased capillary hydrostatic pressure`, `Decreased plasma oncotic pressure`, `Increased interstitial hydrostatic pressure`, `Decreased interstitial oncotic pressure`],
            correctAnswer: 1,
            explanation: `Albumin is the chief generator of plasma oncotic pressure ($\\pi_c$), the main force pulling fluid back into capillaries. Losing albumin lowers $\\pi_c$, so filtration outweighs reabsorption along the whole capillary → interstitial fluid accumulates (edema). The same mechanism operates in liver failure (less albumin synthesis).`
          },
          {
            question: `A healthy subject stands up quickly; blood pools in the leg veins and arterial pressure transiently dips. The immediate compensatory response is:`,
            options: [`Increased baroreceptor firing causing reflex bradycardia`, `Renin release raising blood volume within seconds`, `Decreased baroreceptor firing causing increased sympathetic outflow and tachycardia`, `Local metabolic vasodilation in skeletal muscle`],
            correctAnswer: 2,
            explanation: `Venous pooling cuts venous return → preload → SV → MAP. Carotid/aortic baroreceptors stretch LESS and fire LESS, disinhibiting sympathetic output: HR and contractility rise and arterioles/veins constrict, restoring pressure within a couple of beats. Renin/volume mechanisms act over hours, not seconds — the classic short-term vs long-term control distinction.`
          },
          {
            question: `An experiment increases venous return to an isolated heart while keeping hormones and nerves constant. Stroke volume rises. The best explanation is:`,
            options: [`Greater sarcomere stretch at end-diastole enhances force generation (Frank–Starling)`, `Increased sympathetic stimulation of contractility`, `Decreased afterload on the ventricle`, `An increase in intrinsic heart rate`],
            correctAnswer: 0,
            explanation: `With nerves and hormones fixed, the only changed input is preload. The Frank–Starling mechanism is intrinsic to the myocardium: more filling stretches sarcomeres toward optimal overlap (and increases calcium sensitivity), producing a stronger contraction and larger SV — no autonomic input required.`
          }
        ]
      }
    },
    {
      id: 'cvs3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Regulation & Exchange

<details>
<summary><b>Example 1: Compute net Starling flux at both capillary ends</b></summary>

**Question:** Arteriolar end: $P_c = 37$, $P_i = 1$, $\\pi_c = 25$, $\\pi_i = 3$ mmHg. Venular end: $P_c = 16$, others unchanged. Find the net pressure at each end and the direction of fluid movement.

**Solution:**
1. Arteriolar: $(37 - 1) - (25 - 3) = 36 - 22 = +14$ mmHg → **filtration OUT**. ✓
2. Venular: $(16 - 1) - (25 - 3) = 15 - 22 = -7$ mmHg → **reabsorption IN**. ✓
3. Filtration (+14) exceeds reabsorption (−7): the small daily surplus is drained by lymphatics — block them and lymphedema follows.
</details>

<details>
<summary><b>Example 2: Preload vs. contractility on a Starling curve</b></summary>

**Question:** On a graph of SV (y) versus EDV (x), distinguish: (a) an IV saline infusion, and (b) an epinephrine infusion.

**Solution:**
1. (a) Saline expands volume → venous return and EDV rise → the heart moves **up along the SAME curve** (a preload change). ✓
2. (b) Epinephrine (beta-1) raises contractility → **the entire curve shifts up/left**: at ANY given EDV, SV is larger. ✓

**Test skill:** "Along the curve" = preload; "new curve" = contractility. Afterload increases shift the curve down.
</details>

<details>
<summary><b>Example 3: Heart failure edema — connect pump to capillary</b></summary>

**Question:** A patient with failing left-ventricular function develops fluid in the lungs (pulmonary edema). Trace the mechanism using Starling logic.

**Solution:**
1. Weak LV → blood is not moved forward effectively → volume and pressure back up into the left atrium and **pulmonary veins**.
2. Pulmonary capillary hydrostatic pressure ($P_c$) rises.
3. Filtration now exceeds reabsorption in pulmonary capillaries → fluid enters the interstitium and alveoli → impaired gas exchange, dyspnea. ✓

**Symmetry:** RIGHT-heart failure backs pressure into the systemic veins instead → peripheral (ankle) edema and jugular venous distension.
</details>`
    },
    {
      id: 'cvs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- SV depends on preload (↑SV), afterload (↓SV), contractility (↑SV). Frank–Starling: more filling → stronger contraction; it balances the two ventricles automatically.
- Starling forces: filtration = $(P_c - P_i) - (\\pi_c - \\pi_i)$; hydrostatic pushes out, oncotic (albumin) pulls in; lymphatics clear the surplus.
- Edema causes: ↑$P_c$, ↓$\\pi_c$, ↑ permeability, lymph blockage.
- Baroreceptor reflex (carotid sinus + aortic arch → medulla) is the seconds-scale negative-feedback controller of MAP; kidneys control pressure long-term via volume.
- Preload changes move you along a Starling curve; contractility changes create a new curve.`
    }
  ]
};
