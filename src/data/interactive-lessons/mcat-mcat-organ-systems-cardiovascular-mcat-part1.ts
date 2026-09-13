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
| **Pulmonary** | RA → RV → pulmonary arteries → lungs → pulmonary veins → LA | Pulmonary arteries carry **deoxygenated** blood; pulmonary veins carry **oxygenated** blood |
| **Systemic** | LA → LV → aorta → body → venae cavae → RA | Aorta oxygenated; venae cavae deoxygenated |

The two circuits are in **series**: every liter the right heart pumps must be pumped by the left heart. The organs within the systemic circuit, by contrast, are arranged in **parallel** off the aorta.

- The **left ventricle** has the thickest wall — it generates systemic pressure (~120 mmHg peak) versus the right ventricle's ~25 mmHg pulmonary peak.
- "Arteries carry blood away from the heart" is defined by **direction, not oxygenation** — the pulmonary artery is the classic exception trap.

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

$$SV = EDV - ESV \\approx 70 \\text{ mL}, \\qquad EF = \\frac{SV}{EDV} \\approx 55\\text{-}60\\%$$

### The Conduction System

$$\\text{SA node} \\to \\text{atrial muscle} \\to \\text{AV node (delay)} \\to \\text{Bundle of His} \\to \\text{bundle branches} \\to \\text{Purkinje fibers}$$

- **SA node** is the pacemaker: its cells depolarize spontaneously (funny Na$^+$ current + T-type Ca$^{2+}$), intrinsic rate ~60–100 bpm. Cardiac muscle is **myogenic** — the beat originates in the heart itself; nerves only modulate it.
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
      id: 'cvs1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Heart & Cardiac Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which vessel carries deoxygenated blood?`,
            options: [`The aorta`, `The pulmonary vein`, `The pulmonary artery`, `The coronary arteries during diastole`],
            correctAnswer: 2,
            explanation: `Arteries are defined by direction (away from the heart), not oxygen content. The pulmonary artery carries deoxygenated blood from the RV to the lungs; the pulmonary veins return oxygenated blood to the LA. This is the single most-tested "exception" in cardiovascular anatomy.`
          },
          {
            question: `During isovolumetric contraction of the left ventricle:`,
            options: [`The mitral valve is open and the aortic valve is closed`, `Both the mitral and aortic valves are closed`, `The aortic valve is open and blood is ejected`, `Volume falls while pressure stays constant`],
            correctAnswer: 1,
            explanation: `In isovolumetric contraction the ventricle has just begun contracting: pressure has risen above atrial pressure (mitral valve slams shut — S1) but not yet above aortic pressure (aortic valve still closed). With all valves closed, volume cannot change — pressure rises at constant volume.`
          },
          {
            question: `A patient's ECG shows a normal P wave followed by an abnormally long PR interval. The structure most likely responsible for the delay is:`,
            options: [`The sinoatrial node`, `The Purkinje fiber network`, `The left and right bundle branches`, `The atrioventricular node`],
            correctAnswer: 3,
            explanation: `The PR interval spans from the start of atrial depolarization to the start of ventricular depolarization — most of that time is the built-in AV-node delay. A prolonged PR interval (first-degree heart block) reflects slowed conduction through the AV node, the sole electrical gateway between atria and ventricles. A normal P wave argues against the SA node, and slowed conduction in the bundle branches or Purkinje network widens the QRS complex rather than lengthening the PR interval.`
          }
        ]
      }
    },
    {
      id: 'cvs1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Cardiac Cycle & Conduction

<details>
<summary><b>Example 1: Compute stroke volume, ejection fraction, and cardiac output</b></summary>

**Question:** A patient has EDV = 140 mL, ESV = 70 mL, and HR = 80 bpm. Find SV, EF, and CO. Is the EF normal?

**Solution:**
1. $SV = EDV - ESV = 140 - 70 = 70$ mL ✓
2. $EF = SV/EDV = 70/140 = 50\\%$ — borderline low (normal ≈ 55–70%); the elevated ESV suggests the ventricle is not emptying well.
3. $CO = HR \\times SV = 80 \\times 70 = 5600$ mL/min = **5.6 L/min** ✓

**MCAT note:** A "normal-looking" SV can hide a failing heart if EDV is inflated — always check EF, not just SV.
</details>

<details>
<summary><b>Example 2: Order the events at the start of systole</b></summary>

**Question:** Place in temporal order: (a) S1, (b) QRS complex, (c) aortic valve opens, (d) mitral valve closes.

**Solution:**
1. **QRS** — electrical depolarization must precede mechanical contraction.
2. Ventricular pressure rises above atrial pressure → **mitral valve closes**, producing **S1** (d and a are essentially simultaneous; closure causes the sound).
3. Pressure keeps rising through isovolumetric contraction until it exceeds aortic pressure → **aortic valve opens** (c). ✓

Order: b → d/a → c.

**Why it matters:** Passage figures often overlay ECG, pressure, and volume traces — anchor every mechanical event to the electrical one just before it.
</details>

<details>
<summary><b>Example 3: Predict the effect of cutting vagal input</b></summary>

**Question:** In an animal experiment, both vagus nerves to the heart are severed. Resting heart rate rises from 70 to about 100 bpm. Explain.

**Solution:**
1. The SA node's intrinsic firing rate is ~100 bpm.
2. At rest, parasympathetic (vagal) tone dominates, holding the rate near 70.
3. Removing vagal input unmasks the intrinsic SA rate → HR climbs to ~100 bpm. ✓

**Contrast:** Blocking sympathetic input at rest changes HR only slightly (small resting sympathetic tone); blocking muscarinic receptors with atropine mimics vagotomy.
</details>`
    },
    {
      id: 'cvs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Pulmonary and systemic circuits are in series; systemic organs are in parallel. Pulmonary artery = deoxygenated, pulmonary veins = oxygenated.
- $SV = EDV - ESV$; $EF = SV/EDV$ (normal ≈ 55–70%); $CO = HR \\times SV$.
- S1 = AV valves close (start of systole); S2 = semilunar valves close (start of diastole); valves are passive.
- Conduction: SA node (myogenic pacemaker) → AV node (delay, only atria-ventricle path) → His–Purkinje. P = atrial depolarization, QRS = ventricular depolarization, T = ventricular repolarization.
- Sympathetic NE (beta-1) speeds and strengthens; vagal ACh slows — resting HR sits below the SA node's intrinsic ~100 bpm because vagal tone dominates.`
    }
  ]
};
