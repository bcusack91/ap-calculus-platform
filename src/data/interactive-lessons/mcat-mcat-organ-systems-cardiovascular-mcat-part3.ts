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

1. Stretch receptors in the **carotid sinus** and **aortic arch** fire in proportion to arterial pressure.
2. Signals reach the **medulla** (cardiovascular centers).
3. **Pressure falls** → less baroreceptor firing → ↑ sympathetic, ↓ parasympathetic output → ↑ HR, ↑ contractility, arteriolar constriction, venoconstriction → pressure restored.
4. **Pressure rises** → the mirror image.

<!-- yield:low -->
- Afferent nerves: the carotid sinus signals via the glossopharyngeal nerve (CN IX), the aortic arch via the vagus (CN X).
<!-- /yield -->

This is a classic **negative feedback** loop acting within seconds. Long-term pressure control belongs to the kidneys (blood volume via RAAS/ADH — covered in the renal lesson).

### Hormonal Modulators (Preview)

- **Epinephrine** (adrenal medulla): beta-1 → ↑HR/contractility; alpha-1 → vasoconstriction in skin/gut; beta-2 → vasodilation in skeletal muscle.
- **Angiotensin II** and **ADH (vasopressin)**: vasoconstrictors that also expand volume via the kidney.
- **ANP** (stretched atria): promotes Na$^+$ and water excretion — the heart's own volume-lowering hormone.`
    },
    {
      id: 'cvs3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Regulation & Exchange

**Problem 1.** Arteriolar end of a capillary: $P_c = 37$, $P_i = 1$, $\\pi_c = 25$, $\\pi_i = 3$ mmHg. Venular end: $P_c = 16$, the other three unchanged.

- **(a)** What is the net pressure at the arteriolar end, and which way does fluid move?
- **(b)** What is the net pressure at the venular end, and which way does fluid move?
- **(c)** Is there a net daily surplus, and where does it go? What if that route is blocked?

**(a) Arteriolar end.** $(37 - 1) - (25 - 3) = 36 - 22 = +14$ mmHg → **filtration OUT**.

**(b) Venular end.** $(16 - 1) - (25 - 3) = 15 - 22 = -7$ mmHg → **reabsorption IN**.

**(c) Lymphatics.** Filtration (+14) exceeds reabsorption (−7), so a small surplus is filtered each day. Lymphatics drain it; block them and lymphedema follows.

**Problem 2.** On a graph of stroke volume (y) against EDV (x), compare an IV saline infusion with an epinephrine infusion.

- **(a)** How does a saline infusion move the heart on the graph?
- **(b)** How does an epinephrine infusion change the graph?
- **(c)** How do you tell the two apart, and what does raised afterload do?

**(a) Saline.** Saline expands volume, so venous return and EDV rise and the heart moves **up along the SAME curve**: a preload change.

**(b) Epinephrine.** Epinephrine (beta-1) raises contractility, so **the entire curve shifts up and left**: at ANY given EDV, SV is larger.

**(c) Test skill.** "Along the curve" = preload; "new curve" = contractility. Increases in afterload shift the curve down.

**Problem 3.** A patient with failing left-ventricular function develops fluid in the lungs (pulmonary edema).

- **(a)** Where does blood back up when the LV fails?
- **(b)** Which Starling force changes in the pulmonary capillaries?
- **(c)** Why does fluid collect in the lungs, and what symptoms follow?
- **(d)** What would RIGHT-heart failure cause instead?

**(a) Backup.** A weak LV does not move blood forward effectively, so volume and pressure back up into the left atrium and **pulmonary veins**.

**(b) Hydrostatic pressure.** Pulmonary capillary hydrostatic pressure ($P_c$) rises.

**(c) Filtration wins.** Filtration now exceeds reabsorption in the pulmonary capillaries, so fluid enters the interstitium and alveoli: impaired gas exchange and dyspnea.

**(d) Symmetry.** RIGHT-heart failure backs pressure into the systemic veins instead, causing peripheral (ankle) edema and jugular venous distension.`
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
            yield: 'HIGH',
            explanation: `Albumin is the chief generator of plasma oncotic pressure ($\\pi_c$), the main force pulling fluid back into capillaries. Losing albumin lowers $\\pi_c$, so filtration outweighs reabsorption along the whole capillary → interstitial fluid accumulates (edema). The same mechanism operates in liver failure (less albumin synthesis).`
          },
          {
            question: `A healthy subject stands up quickly; blood pools in the leg veins and arterial pressure transiently dips. The immediate compensatory response is:`,
            options: [`Increased baroreceptor firing causing reflex bradycardia`, `Renin release expanding blood volume within seconds`, `Decreased baroreceptor firing, raising sympathetic outflow`, `Vagal activation slowing the heart to boost filling`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Venous pooling cuts venous return → preload → SV → MAP. Carotid/aortic baroreceptors stretch LESS and fire LESS, disinhibiting sympathetic output and withdrawing (not raising) vagal tone: HR and contractility rise and arterioles/veins constrict, restoring pressure within a couple of beats. Renin/volume mechanisms act over hours, not seconds — the classic short-term vs long-term control distinction.`
          },
          {
            question: `An experiment increases venous return to an isolated heart with no nerve supply, and stroke volume rises within a few beats. Which mechanism best explains the rise?`,
            options: [`Filling stretches sarcomeres toward optimal overlap, adding cross-bridges`, `A larger ventricle has lower wall stress, so the afterload it faces falls`, `Atrial stretch speeds SA-node firing, so each beat ejects more blood`, `Stretch opens more fast sodium channels, enlarging each action potential`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The Frank–Starling mechanism is intrinsic to the myocardium: more filling stretches sarcomeres toward optimal actin–myosin overlap (and raises troponin calcium sensitivity), so more cross-bridges form and the contraction is stronger — no autonomic input required. By the law of Laplace a larger ventricle has HIGHER wall stress, so afterload rises rather than falls. A faster rate shortens filling time and does not raise stroke volume. The action potential is all-or-none, so stretch does not strengthen contraction by enlarging it; the extra force comes from the sarcomeres themselves.`
          }
        ]
      }
    },
    {
      id: 'cvs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Three SV determinants.** Preload raises SV, afterload lowers it, contractility raises it at a given preload.
- **Frank–Starling.** More filling stretches sarcomeres for a stronger beat, which matches the two ventricles' outputs.
- **Starling forces.** Net flux $\\propto (P_c - P_i) - (\\pi_c - \\pi_i)$: hydrostatic pushes out, albumin's oncotic pull draws in.
- **Baroreceptor reflex.** Carotid sinus and aortic arch → medulla: seconds-scale negative feedback on MAP.

**Common traps**

- **Preload vs. contractility.** Preload moves along one Starling curve; contractility (sympathetic) draws a new curve up and left.
- **One cause of edema.** Raised $P_c$, low albumin, leaky capillaries or blocked lymphatics each push fluid out.
- **Kidneys act in seconds.** The baroreflex is the fast controller; renal volume control (RAAS, ADH) takes hours to days.
- **Starling forces move gases.** O$_2$ and CO$_2$ cross by diffusion; Starling forces govern bulk fluid only.

<!-- yield:low -->
- Low-yield extras: baroreceptor afferents run in the glossopharyngeal nerve (carotid sinus) and the vagus (aortic arch)
<!-- /yield -->`
    }
  ]
};
