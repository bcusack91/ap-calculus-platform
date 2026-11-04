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
      id: 'cvs4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — MCAT-Style Passages

**Problem 1.** A passage reports that a stenotic aortic valve's effective orifice radius is 60% of normal.

- **(a)** By roughly what factor does the valve's resistance to ejection rise?
- **(b)** What chronic change does the left ventricle undergo?
- **(c)** What are the long-term costs of that change?
- **(d)** How would volume overload (regurgitation) remodel the ventricle instead?

**(a) Resistance.** $R \\propto 1/r^4 \\Rightarrow R_{new}/R_{old} = 1/(0.6)^4 = 1/0.1296 \\approx 7.7$, nearly **8× the resistance**.

**(b) Concentric hypertrophy.** Against nearly 8× the resistance from (a), the LV must generate much higher systolic pressure to maintain flow. Chronic pressure overload causes **concentric hypertrophy**: the wall thickens, the chamber does not dilate.

**(c) Long-term costs.** Concentric hypertrophy from (b) leaves a thick, stiff wall that impairs filling (diastolic dysfunction) and raises O$_2$ demand.

**(d) Contrast.** Volume overload (regurgitation) causes eccentric hypertrophy: the chamber dilates.

**Problem 2.** A passage table shows, 10 minutes after moderate hemorrhage: HR 115 (was 72), MAP 88 (was 92), TPR elevated. A student concludes "the hemorrhage was mild because pressure is nearly normal."

- **(a)** What does the near-normal MAP actually show?
- **(b)** Which numbers reveal the severity?
- **(c)** What happens if the losses continue?
- **(d)** What general passage skill does this illustrate?

**(a) The reflex is working.** Near-normal MAP does NOT mean minimal blood loss; it means the **baroreflex is working**. Tachycardia and high TPR are the fingerprints of active compensation.

**(b) Severity clues.** The compensation markers themselves: HR up 60% and vasoconstriction. Pressure is the DEFENDED variable, so it is the last number to move.

**(c) Decompensation.** If losses continue, compensation fails and MAP drops precipitously (decompensated shock).

**(d) Passage skill.** In regulated systems, judge the disturbance by the effort of the regulator, not by the regulated variable.

**Problem 3.** In a trial, propranolol (a beta-adrenergic antagonist) is given before treadmill exercise and compared with placebo.

- **(a)** How does exercise normally raise HR and contractility?
- **(b)** What happens to exercise HR and contractility on propranolol?
- **(c)** Does cardiac output still rise?
- **(d)** What happens to resting heart rate, and why?

**(a) Beta-1 drive.** Exercise normally raises HR and contractility through sympathetic NE/epinephrine acting on **beta-1** receptors.

**(b) Blunted.** Blocking beta-1 blunts both: exercise **HR and contractility rise far less**.

**(c) CO rises less.** $CO = HR \\times SV$: the ceiling on both factors caps CO, and exercise capacity falls. Frank–Starling (preload from muscle-pump venous return) still adds some SV, so CO rises, just much less.

**(d) Resting bradycardia.** Propranolol does not block the vagus. Resting bradycardia deepens because sympathetic support is gone while vagal tone remains.`
    },
    {
      id: 'cvs4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integration & Pathology** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher measures a subject's O$_2$ consumption as 250 mL/min, arterial O$_2$ content as 200 mL O$_2$ per liter of blood, and venous O$_2$ content as 150 mL O$_2$ per liter. The subject's cardiac output is:`,
            options: [`2.5 L/min`, `10 L/min`, `5 L/min`, `7.5 L/min`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Fick principle: $CO = \\frac{\\text{O}_2 \\text{ consumption}}{C_a - C_v} = \\frac{250}{200 - 150} = \\frac{250}{50} = 5$ L/min. Each liter of blood drops off 50 mL of O$_2$, so delivering 250 mL/min requires 5 L/min of flow — a normal resting output.`
          },
          {
            question: `On a left-ventricular pressure–volume loop, a drug that purely increases contractility (no change in preload or afterload) would:`,
            options: [`Shift the right edge of the loop rightward, increasing EDV`, `Decrease the end-systolic volume, widening the loop leftward`, `Raise the pressure at which the aortic valve opens`, `Make the loop traverse clockwise instead of counterclockwise`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Higher contractility ejects blood more completely at the same afterload: ESV falls, so the loop's LEFT edge shifts left and stroke volume (loop width) grows. EDV (right edge) is set by preload, and aortic-valve opening pressure is set by afterload — both unchanged. Loops always run counterclockwise in a functioning ventricle.`
          },
          {
            question: `A patient in septic shock has warm, flushed skin, cardiac output of 8 L/min (elevated), and dangerously low blood pressure. The hemodynamic explanation is:`,
            options: [`Vasodilation has collapsed total peripheral resistance`, `Blood loss has decreased preload and stroke volume`, `Pump failure has depressed myocardial contractility`, `Increased blood viscosity has raised resistance to flow`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$MAP = CO \\times TPR$. With CO elevated, low MAP forces the conclusion that TPR has collapsed — inflammatory mediators (e.g., nitric oxide) cause profound arteriolar dilation body-wide. Warm skin confirms dilated cutaneous beds. Hypovolemic and cardiogenic shock would instead show LOW output with cool, clamped-down skin, and raised viscosity would increase, not collapse, resistance.`
          }
        ]
      }
    },
    {
      id: 'cvs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Reading a PV loop.** Width = SV, counterclockwise; preload moves the right edge, afterload the top, contractility the left.
- **Valves as flow physics.** Find where blood backs up and which chamber faces pressure or volume overload.
- **Fick principle.** $CO = \\text{O}_2 \\text{ consumption}/(C_a - C_v)$ measures output from O$_2$ uptake.
- **Perturbation recipe.** Classify the change, propagate through $CO = HR \\times SV$ and $MAP = CO \\times TPR$, then apply the baroreflex.

**Common traps**

- **Every shock has low CO.** Septic shock has low TPR, warm skin and often HIGH output; hypovolemic and cardiogenic shock run low CO with high TPR.
- **Normal MAP means mild loss.** Pressure is the defended variable; tachycardia and high TPR show how hard the reflex is working.
- **Mixing up hypertrophy.** Pressure overload (stenosis) is concentric; volume overload (regurgitation) is eccentric, with a dilated chamber.
- **Contractility moves the right edge.** More contractility lowers ESV and shifts the LEFT edge; preload moves the right edge.`
    }
  ]
};
