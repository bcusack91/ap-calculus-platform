export const mcatCardioSubPart4Data = {
  topicSlug: 'mcat-organ-systems-cardiovascular-mcat',
  sections: [
    {
      id: 'cvs4-intro',
      type: 'text' as const,
      content: `# Cardiovascular System

**Part 4 of 4 — MCAT-Style Integration: Loops, Pathology & Passage Skills**

### Reading a Pressure–Volume (PV) Loop

A left-ventricular PV loop (pressure on y, volume on x) is traversed **counterclockwise**:

1. **Bottom edge (left → right):** diastolic filling — mitral open, volume rises to EDV.
2. **Right edge (up):** isovolumetric contraction — all valves closed, pressure rises at EDV.
3. **Top edge (right → left):** ejection — aortic valve open, volume falls to ESV.
4. **Left edge (down):** isovolumetric relaxation — all valves closed at ESV.

- **Loop width = stroke volume** (EDV − ESV); **loop area ≈ stroke work** of the ventricle.
- ↑ Preload → right edge moves right (wider loop). ↑ Afterload → taller loop, ejection ends early (narrower SV). ↑ Contractility → lower ESV (left edge shifts left, wider loop).

### Classic Valve Pathologies as Physics Problems

| Lesion | Physical problem | Predicted consequence |
|--------|------------------|-----------------------|
| **Aortic stenosis** | Narrow outflow orifice → high resistance during ejection | ↑ afterload, high LV pressure, concentric hypertrophy; systolic murmur |
| **Aortic regurgitation** | Aortic valve leaks in diastole | Blood re-enters LV → ↑ EDV, wide pulse pressure |
| **Mitral stenosis** | Narrow inflow → LA can't empty | ↑ LA and pulmonary pressures → pulmonary congestion |
| **Mitral regurgitation** | AV valve leaks during systole | Part of SV goes backward into LA → ↓ forward output |

You don't memorize murmurs for the MCAT — you **derive** consequences from flow physics: where does blood back up, and what pressure must rise?

### Categories of Shock (Inadequate Perfusion)

| Type | Primary defect | CO | TPR (reflex) |
|------|----------------|----|--------------|
| Hypovolemic (hemorrhage) | ↓ volume → ↓ preload | ↓ | ↑ |
| Cardiogenic (MI) | Pump failure → ↓ contractility | ↓ | ↑ |
| Septic/anaphylactic (distributive) | Massive vasodilation | often ↑ | ↓↓ |

Distributive shock is the outlier: warm skin, LOW resistance, pressure falls despite normal-to-high output.

### Oxygen Delivery & the Fick Principle

$$\\text{O}_2 \\text{ consumption} = CO \\times (C_a - C_v)$$

where $C_a$ and $C_v$ are arterial and venous O$_2$ contents. Rearranged, this measures cardiac output from measured O$_2$ uptake and the arteriovenous O$_2$ difference — a standard experimental-passage setup. During exercise, both CO and extraction ($C_a - C_v$) rise.

### Passage-Skill Checklist

- **Anchor every trace:** ECG events precede mechanical events; valve sounds mark phase boundaries.
- **Perturbation questions:** identify whether the change hits preload, afterload, contractility, HR, or TPR — then propagate through $CO = HR \\times SV$ and $MAP = CO \\times TPR$.
- **Units discipline:** CO in L/min; convert mL ↔ L before multiplying.
- **Reflex second-guess:** after any primary change, ask what the baroreflex does next — many wrong answers describe the un-compensated state when the question asks about the compensated one (or vice versa).`
    },
    {
      id: 'cvs4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integration & Pathology** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher measures a subject's O2 consumption as 250 mL/min, arterial O2 content as 200 mL O2 per liter of blood, and venous O2 content as 150 mL O2 per liter. The subject's cardiac output is:`,
            options: [`2.5 L/min`, `10 L/min`, `5 L/min`, `7.5 L/min`],
            correctAnswer: 2,
            explanation: `Fick principle: $CO = \\frac{\\text{O}_2 \\text{ consumption}}{C_a - C_v} = \\frac{250}{200 - 150} = \\frac{250}{50} = 5$ L/min. Each liter of blood drops off 50 mL of O2, so delivering 250 mL/min requires 5 L/min of flow — a normal resting output.`
          },
          {
            question: `On a left-ventricular pressure–volume loop, a drug that purely increases contractility (no change in preload or afterload) would:`,
            options: [`Shift the right edge of the loop rightward, increasing EDV`, `Decrease the end-systolic volume, widening the loop leftward`, `Raise the pressure at which the aortic valve opens`, `Make the loop traverse clockwise instead of counterclockwise`],
            correctAnswer: 1,
            explanation: `Higher contractility ejects blood more completely at the same afterload: ESV falls, so the loop's LEFT edge shifts left and stroke volume (loop width) grows. EDV (right edge) is set by preload, and aortic-valve opening pressure is set by afterload — both unchanged. Loops always run counterclockwise in a functioning ventricle.`
          },
          {
            question: `A patient in septic shock has warm, flushed skin, cardiac output of 8 L/min (elevated), and dangerously low blood pressure. The hemodynamic explanation is:`,
            options: [`Profound systemic vasodilation has collapsed total peripheral resistance`, `Blood loss has decreased preload and stroke volume`, `Pump failure has decreased contractility`, `Increased blood viscosity has raised resistance to flow`],
            correctAnswer: 0,
            explanation: `$MAP = CO \\times TPR$. With CO elevated, low MAP forces the conclusion that TPR has collapsed — inflammatory mediators (e.g., nitric oxide) dilate arterioles body-wide. Warm skin confirms dilated cutaneous beds. Hypovolemic and cardiogenic shock would instead show LOW output with cool, clamped-down skin.`
          }
        ]
      }
    },
    {
      id: 'cvs4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — MCAT-Style Passages

<details>
<summary><b>Example 1: Aortic stenosis, quantitatively</b></summary>

**Question:** A passage reports that a stenotic aortic valve's effective orifice radius is 60% of normal. By roughly what factor does the valve's resistance to ejection rise, and what chronic ventricular change follows?

**Solution:**
1. $R \\propto 1/r^4 \\Rightarrow R_{new}/R_{old} = 1/(0.6)^4 = 1/0.1296 \\approx 7.7$ — nearly **8× the resistance**.
2. The LV must generate much higher systolic pressure to maintain flow → chronic pressure overload → **concentric hypertrophy** (wall thickens, chamber not dilated).
3. Long-term: thick stiff wall impairs filling (diastolic dysfunction) and raises O2 demand. ✓

**Contrast:** volume overload (regurgitation) → eccentric hypertrophy (chamber dilates).
</details>

<details>
<summary><b>Example 2: A beta-blocker experiment</b></summary>

**Question:** In a trial, propranolol (beta-adrenergic antagonist) is given before treadmill exercise. Compared with placebo, predict exercise HR, contractility, and CO.

**Solution:**
1. Exercise normally raises HR and contractility via sympathetic NE/epinephrine on **beta-1** receptors.
2. Blocking beta-1 blunts both: exercise **HR and contractility rise far less**.
3. $CO = HR \\times SV$: the ceiling on both factors caps CO; exercise capacity falls. Frank–Starling (preload from muscle-pump venous return) still contributes some SV increase — CO rises, just much less. ✓

**Distractor alert:** propranolol does not block the vagus — resting bradycardia deepens because sympathetic support is gone while vagal tone remains.
</details>

<details>
<summary><b>Example 3: Compensated vs. decompensated hemorrhage data table</b></summary>

**Question:** A passage table shows, 10 minutes after moderate hemorrhage: HR 115 (was 72), MAP 88 (was 92), TPR elevated. A student concludes "the hemorrhage was mild because pressure is nearly normal." Critique.

**Solution:**
1. Near-normal MAP does NOT mean minimal blood loss — it means the **baroreflex is working**: tachycardia and high TPR are the fingerprints of active compensation.
2. The proper severity clues are the compensation markers themselves (HR ↑ 60%, vasoconstriction) — pressure is the DEFENDED variable, so it is the last number to move.
3. If losses continue, compensation fails: MAP then drops precipitously (decompensated shock). ✓

**Passage skill:** in regulated systems, judge the disturbance by the effort of the regulator, not by the regulated variable.
</details>`
    },
    {
      id: 'cvs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- PV loop: width = SV, counterclockwise; preload moves the right edge, afterload the top, contractility the left (ESV).
- Valve lesions are flow-physics problems: find where blood backs up and which chamber faces pressure vs. volume overload.
- Shock taxonomy: hypovolemic and cardiogenic = low CO with reflex high TPR; distributive (septic) = low TPR with warm skin and often high CO.
- Fick: $CO = \\text{O}_2 \\text{ consumption}/(C_a - C_v)$ — a recurring experimental design.
- In any perturbation question: classify the change (preload/afterload/contractility/HR/TPR), propagate through the two master equations, then apply the baroreflex.`
    }
  ]
};
