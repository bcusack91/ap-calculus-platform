export const mcatCardioSubPart1Data = {
  topicSlug: 'mcat-organ-systems-cardiovascular-mcat',
  sections: [
    {
      id: 'cvs1-intro',
      type: 'text' as const,
      content: `# Cardiovascular System

**Part 1 of 4 — The Heart, the Cardiac Cycle & the ECG**

### Two Circuits, One Pump

| Circuit | Path | Blood carried |
|---------|------|---------------|
| **Pulmonary** | RA → RV → pulmonary arteries → lungs → pulmonary veins → LA | Arteries **deoxygenated**; veins **oxygenated** |
| **Systemic** | LA → LV → aorta → body → venae cavae → RA | Aorta oxygenated; venae cavae deoxygenated |

The two circuits are in **series** (what the right heart pumps, the left heart must pump too); the organs of the systemic circuit sit in **parallel** off the aorta.

- The **left ventricle** has the thickest wall: ~120 mmHg peak versus the right ventricle's ~25 mmHg.
- "Artery" means **away from the heart** — direction, not oxygenation; the pulmonary artery is the classic trap.

### Valves and Heart Sounds

| Valve | Between | Type |
|-------|---------|------|
| Tricuspid | RA and RV | Atrioventricular (AV) |
| Pulmonary | RV and pulmonary artery | Semilunar |
| Mitral (bicuspid) | LA and LV | Atrioventricular (AV) |
| Aortic | LV and aorta | Semilunar |

- **S1 ("lub")** = AV valves (tricuspid + mitral) close at the start of ventricular systole.
- **S2 ("dub")** = semilunar valves (aortic + pulmonary) close at the start of diastole.
- Valves open and close **passively** from pressure differences — the chordae tendineae and papillary muscles only prevent AV-valve prolapse; they do not open the valves.

### Phases of the Cardiac Cycle

1. **Atrial systole** — atria contract, topping off ventricular filling (the "atrial kick," ~10–30% of filling at rest; most filling is passive).
2. **Isovolumetric contraction** — ventricles contract with **all four valves closed**; pressure rises, volume constant.
3. **Ejection** — ventricular pressure exceeds arterial pressure → semilunar valves open → blood ejected.
4. **Isovolumetric relaxation** — all valves closed again; ventricular pressure falls.
5. **Passive filling** — AV valves open when atrial pressure exceeds ventricular pressure.

Key volumes: **end-diastolic volume (EDV)** ≈ 120 mL, **end-systolic volume (ESV)** ≈ 50 mL, so

$$SV = EDV - ESV \\approx 70 \\text{ mL}, \\qquad EF = \\frac{SV}{EDV} \\approx 58\\% \\ (\\text{normal} \\approx 55\\text{–}70\\%)$$

### The Conduction System

$$\\text{SA node} \\to \\text{atrial muscle} \\to \\text{AV node (delay)} \\to \\text{Bundle of His} \\to \\text{bundle branches} \\to \\text{Purkinje fibers}$$

- **SA node** is the pacemaker: its cells depolarize spontaneously (a slow inward Na$^+$ leak, then Ca$^{2+}$ influx), intrinsic rate ~100 bpm. Cardiac muscle is **myogenic** — the beat originates in the heart itself; nerves only modulate it.

<!-- yield:low -->
- The pacemaker currents have names: the "funny" Na$^+$ current ($I_f$) and T-type Ca$^{2+}$ channels.
<!-- /yield -->

- **AV node delay** (~0.1 s) lets the atria finish emptying before ventricular contraction; it is the **only electrical path** between atria and ventricles (the fibrous skeleton insulates them).
- **Gap junctions** in intercalated discs let depolarization spread cell-to-cell, so the myocardium contracts as a functional syncytium.
- Autonomic control: **sympathetic** (norepinephrine, beta-1) raises rate and contractility; **parasympathetic** (vagus, acetylcholine, muscarinic) slows the SA node. Resting "vagal tone" is why resting HR (~70) is below the SA node's intrinsic rate.

### The ECG

| Wave/interval | Event |
|---------------|-------|
| **P wave** | Atrial depolarization |
| **PR interval** | Conduction through AV node (the delay) |
| **QRS complex** | Ventricular depolarization (atrial repolarization is hidden inside it) |
| **T wave** | Ventricular repolarization |

The ECG records **electrical** events; contraction (mechanical) follows each depolarization. QRS therefore comes just **before** ventricular pressure rises and S1.`
    },
    {
      id: 'cvs1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Cardiac Cycle & Conduction

**Problem 1.** A patient has an end-diastolic volume of 140 mL, an end-systolic volume of 70 mL, and a heart rate of 80 bpm.

- **(a)** What is the stroke volume?
- **(b)** What is the ejection fraction, and is it normal?
- **(c)** What is the cardiac output?
- **(d)** Why is a normal-looking SV not enough to call this heart healthy?

**(a) Stroke volume.** $SV = EDV - ESV = 140 - 70 = 70$ mL.

**(b) Ejection fraction.** With $SV = 70$ mL from (a): $EF = SV/EDV = 70/140 = 50\\%$. That is borderline low (normal ≈ 55–70%); the elevated ESV suggests the ventricle is not emptying well.

**(c) Cardiac output.** With $SV = 70$ mL from (a): $CO = HR \\times SV = 80 \\times 70 = 5600$ mL/min = **5.6 L/min**.

**(d) Check the EF.** The SV of 70 mL matches a healthy heart only because EDV is inflated to 140 mL. A failing heart can hide behind a normal SV, so always check EF, not just SV.

**Problem 2.** Four events happen at the start of ventricular systole: S1, the QRS complex, the aortic valve opening, and the mitral valve closing.

- **(a)** Which event comes first, and why?
- **(b)** Which two events happen together, and what links them?
- **(c)** Which event comes last, and what must happen before it?
- **(d)** What is the full order, and how does it help with passage figures?

**(a) QRS first.** Electrical depolarization must precede mechanical contraction, so the QRS complex comes before any valve moves.

**(b) Mitral closure and S1.** As the ventricle contracts, its pressure rises above atrial pressure and the **mitral valve closes**. The closure produces **S1**, so the two are essentially simultaneous.

**(c) Aortic valve last.** Pressure keeps rising through isovolumetric contraction until it exceeds aortic pressure; only then does the **aortic valve open**.

**(d) The order.** QRS → mitral closure / S1 → aortic valve opens. Passage figures often overlay ECG, pressure and volume traces: anchor every mechanical event to the electrical one just before it.

**Problem 3.** In an animal experiment, both vagus nerves to the heart are severed. Resting heart rate rises from 70 to about 100 bpm.

- **(a)** What rate does the SA node fire at on its own?
- **(b)** Why does the heart rest near 70 bpm with the nerves intact?
- **(c)** Why does HR climb to ~100 bpm after vagotomy?
- **(d)** Would blocking sympathetic input or giving atropine at rest do the same?

**(a) Intrinsic rate.** The SA node's intrinsic firing rate is ~100 bpm.

**(b) Vagal tone.** At rest, parasympathetic (vagal) tone dominates and holds the rate near 70.

**(c) Unmasking.** Removing vagal input unmasks the intrinsic SA rate, so HR climbs to ~100 bpm.

**(d) Contrast.** Blocking sympathetic input at rest changes HR only slightly, because resting sympathetic tone is small. Blocking muscarinic receptors with atropine mimics vagotomy.`
    },
    {
      id: 'cvs1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Heart & Cardiac Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which vessel carries deoxygenated blood?`,
            options: [`The aorta leaving the left ventricle`, `The pulmonary veins entering the left atrium`, `The pulmonary artery to the lungs`, `The coronary arteries during diastole`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Arteries are defined by direction (away from the heart), not oxygen content. The pulmonary artery carries deoxygenated blood from the RV to the lungs; the pulmonary veins return oxygenated blood to the LA. This is the single most-tested "exception" in cardiovascular anatomy.`
          },
          {
            question: `During isovolumetric contraction of the left ventricle:`,
            options: [`The mitral valve is open and the aortic valve is closed`, `Both the mitral and aortic valves are closed`, `The aortic valve is open and blood is ejected`, `Volume falls while pressure stays constant`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `In isovolumetric contraction the ventricle has just begun contracting: pressure has risen above atrial pressure (mitral valve slams shut — S1) but not yet above aortic pressure (aortic valve still closed). With all valves closed, volume cannot change — pressure rises at constant volume.`
          },
          {
            question: `A patient's ECG shows a normal P wave followed by an abnormally long PR interval. The structure most likely responsible for the delay is:`,
            options: [`The sinoatrial node`, `The Purkinje fiber network`, `The left and right bundle branches`, `The atrioventricular node`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The PR interval spans from the start of atrial depolarization to the start of ventricular depolarization — most of that time is the built-in AV-node delay. A prolonged PR interval (first-degree heart block) reflects slowed conduction through the AV node, the sole electrical gateway between atria and ventricles. A normal P wave argues against the SA node, and slowed conduction in the bundle branches or Purkinje network widens the QRS complex rather than lengthening the PR interval.`
          }
        ]
      }
    },
    {
      id: 'cvs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Two circuits in series.** Right and left hearts pump the same volume; systemic organs branch off the aorta in parallel.
- **Cardiac numbers.** $SV = EDV - ESV$, $EF = SV/EDV$ (normal ≈ 55–70%), and $CO = HR \\times SV$.
- **Heart sounds.** S1 = AV valves close at the start of systole; S2 = semilunar valves close at the start of diastole.
- **Conduction and the ECG.** SA → AV delay → His–Purkinje (P, QRS, T on the ECG); sympathetic beta-1 speeds/strengthens, vagal ACh slows.

**Common traps**

- **Arteries carry oxygen.** "Artery" means away from the heart: the pulmonary artery carries deoxygenated blood.
- **Muscles open the valves.** Pressure gradients open and close every valve; chordae and papillary muscles only stop prolapse.
- **Nerves start the beat.** The heart is myogenic; vagal tone holds resting HR (~70) below the SA node's intrinsic ~100 bpm.
- **Trusting SV alone.** A normal SV can hide a failing heart when EDV is inflated, so always check EF.

<!-- yield:low -->
- Low-yield extras: the pacemaker currents are named the "funny" Na$^+$ current ($I_f$) and T-type Ca$^{2+}$ channels
<!-- /yield -->`
    }
  ]
};
