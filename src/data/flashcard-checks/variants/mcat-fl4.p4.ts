import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for the speed of blood in the continuity and Bernoulli equations, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ultrasound report on a narrowed artery lists four values: 0.50 cm², 90 cm/s, 45 mL/s and 3000 Pa. Which one is the $v$ of the continuity and Bernoulli equations, and how is it entered in SI units?`,
        options: [r`The 90 cm/s, entered as 9000 m/s`, r`The 45 mL/s, entered as 0.045 L/s`, r`The 45 mL/s, entered as 0.45 m/s`, r`The 90 cm/s, entered as 0.90 m/s`],
        correctAnswer: 3,
        explanation: r`$v$ is the speed of the blood, a distance per time, so it is the 90 cm/s, and dividing by 100 gives 0.90 m/s. Writing 9000 m/s multiplies by 100 instead of dividing. The 45 mL/s is the flow rate, a volume per second, which is the area times the speed and not the speed itself.`,
      },
      {
        question: r`A student finds $\tfrac12 \rho v^2$ for blood of density 1000 kg/m³ moving at 200 cm/s and writes ½ × 1000 × 200² = 2.0 × 10⁷ Pa. What is wrong with this working?`,
        options: [r`The density is in kg/m³; it should be 1.0 g/cm³`, r`The speed was left in cm/s; it should be 2.0 m/s`, r`The speed should not be squared; it should be 200`, r`The result is in mmHg; it should be divided by 133`],
        correctAnswer: 1,
        explanation: r`The speed $v$ must be in meters per second before it is squared: 200 cm/s is 2.0 m/s, which gives ½ × 1000 × 2.0² = 2000 Pa. The density is already in SI units, the speed does have to be squared, and SI inputs give pascals, so no division by 133 is needed.`,
      },
    ],
  },
  [r`What is a stenosis, and which three questions can be asked about one?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 12 cm stretch of a leg artery has narrowed, and the driving pressure across it is unchanged. A clinician asks how much blood per minute still gets to the leg. Which question about a stenosis is this, and which law answers it?`,
        options: [r`How much flow gets through, using Poiseuille`, r`How much flow gets through, using continuity`, r`How fast the blood is moving, using continuity`, r`What the pressure in the jet is, using Bernoulli`],
        correctAnswer: 0,
        explanation: r`Blood per minute is a flow rate, and for a long narrowing under a fixed driving pressure the flow is set by resistance, which is Poiseuille's law. Continuity cannot give the flow, because it starts from a flow that is already known. The speed and the pressure in the jet are the other two questions, not this one.`,
      },
      {
        question: r`Four findings are noted during a heart and vessel exam. Which one of them is a stenosis?`,
        options: [r`An artery wall that bulges abnormally outward`, r`A heart valve whose opening is abnormally narrow`, r`A vein whose valves let blood leak backward`, r`An artery that tapers normally as it branches`],
        correctAnswer: 1,
        explanation: r`A stenosis is an abnormal narrowing of a vessel or a valve, so the valve with the abnormally narrow opening is the one. An outward bulge is a widening, which is an aneurysm. A leaking valve is not a narrowing, and normal tapering is not abnormal.`,
      },
    ],
  },
  [r`When do you use continuity for a narrowed vessel, and what does it say?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A catheter study finds blood moving at 0.50 m/s in a coronary artery where the radius is 2.0 mm. At a plaque the radius is 1.0 mm, and the flow rate is the same at both places. How fast is the blood at the plaque?`,
        options: [r`1.0 m/s`, r`2.0 m/s`, r`0.125 m/s`, r`8.0 m/s`],
        correctAnswer: 1,
        explanation: r`Half the radius is a quarter of the area, and $A_1 v_1 = A_2 v_2$ makes the speed 4 times as large: 4 × 0.50 = 2.0 m/s. The value 1.0 m/s uses the radius ratio without squaring it, 0.125 m/s divides by 4 instead of multiplying, and 8.0 m/s uses the fourth power, which belongs to resistance.`,
      },
      {
        question: r`Air moves at 2.0 m/s through a stretch of windpipe with a cross-sectional area of 2.4 cm². At a narrowed place it moves at 8.0 m/s. Treating the air as incompressible, with the same flow rate at both places, what is the area of the narrowed place?`,
        options: [r`9.6 cm²`, r`1.2 cm²`, r`0.15 cm²`, r`0.60 cm²`],
        correctAnswer: 3,
        explanation: r`$A_2 = A_1 v_1 / v_2$ = 2.4 × 2.0 ÷ 8.0 = 0.60 cm²: 4 times the speed needs a quarter of the area. 9.6 cm² turns the ratio upside down, 1.2 cm² halves the area as if speed went as 1 over the radius, and 0.15 cm² applies the factor of 4 twice.`,
      },
      {
        question: r`Water leaves the needle of a syringe at 8.0 m/s. The needle's bore has an area of 0.50 mm², and the barrel has an area of 2.0 cm². The flow rate is the same in both. How fast does the plunger push the water along the barrel?`,
        options: [r`2.0 m/s`, r`2.0 cm/s`, r`20 cm/s`, r`3200 m/s`],
        correctAnswer: 1,
        explanation: r`2.0 cm² is 200 mm², which is 400 times the needle's area, so the water in the barrel moves at 8.0 ÷ 400 = 0.020 m/s, or 2.0 cm/s. The value 2.0 m/s divides 0.50 by 2.0 without matching the units, 20 cm/s takes 1 cm² as 10 mm², and 3200 m/s multiplies by 400 instead of dividing.`,
      },
      {
        question: r`A stent widens a narrowed stretch of an artery from a diameter of 2.0 mm to 5.0 mm, and the flow rate through the artery is the same before and after. How does the blood's speed in that stretch change?`,
        options: [r`It falls to 0.16 of its earlier value`, r`It falls to 0.40 of its earlier value`, r`It rises to 6.25 times its earlier value`, r`It rises to 2.5 times its earlier value`],
        correctAnswer: 0,
        explanation: r`The area goes as the diameter squared, so it grows by (5.0 ÷ 2.0)² = 6.25, and with the same flow the speed falls to 1 ÷ 6.25 = 0.16 of its value. A fall to 0.40 uses the diameter ratio without squaring. The two options with a rise have the speed growing in a wider vessel, which is backwards.`,
      },
      {
        question: r`Blood passes through a narrowed heart valve with an open area of 1.0 cm² at 3.6 m/s and enters the vessel beyond it, whose area is 4.0 cm². The flow rate is the same at both places. What is the average speed of the blood in the vessel beyond the valve?`,
        options: [r`14.4 m/s`, r`1.8 m/s`, r`0.225 m/s`, r`0.90 m/s`],
        correctAnswer: 3,
        explanation: r`$v_2 = A_1 v_1 / A_2$ = 1.0 × 3.6 ÷ 4.0 = 0.90 m/s: 4 times the area carries the same flow at a quarter of the speed. 14.4 m/s multiplies by 4, as if the blood sped up in the wider vessel. 1.8 m/s only halves the speed, and 0.225 m/s divides by 4 twice.`,
      },
      {
        question: r`In a lab, water moves at 20 cm/s through a tube with an inner diameter of 1.0 cm and then leaves through a tip with an inner diameter of 2.0 mm. The flow rate is the same in both. How fast is the water in the tip?`,
        options: [r`5.0 m/s`, r`1.0 m/s`, r`5.0 cm/s`, r`0.80 cm/s`],
        correctAnswer: 0,
        explanation: r`1.0 cm is 10 mm, so the tip has one-fifth of the diameter and 1/25 of the area. The speed is 25 × 20 = 500 cm/s, which is 5.0 m/s. 1.0 m/s multiplies by 5 without squaring, 5.0 cm/s compares 1.0 with 2.0 without matching the units, and 0.80 cm/s divides by 25 instead of multiplying.`,
      },
    ],
  },
  [r`Blood moves faster through a narrowing. Does that mean more blood gets through?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Inside a narrowed artery, Doppler ultrasound shows blood moving at 150 cm/s, and imaging shows an open area of 0.20 cm². How much blood passes through the narrowing each second?`,
        options: [r`30 mL/s`, r`750 mL/s`, r`150 mL/s`, r`3.0 mL/s`],
        correctAnswer: 0,
        explanation: r`The flow rate is the area times the speed: 0.20 cm² × 150 cm/s = 30 cm³/s, which is 30 mL/s. 750 mL/s divides the speed by the area. 150 mL/s treats the speed itself as the flow rate, and 3.0 mL/s slips a power of ten.`,
      },
      {
        question: r`Vessel X has a cross-sectional area of 0.40 cm² and carries blood at 50 cm/s. Vessel Y has an area of 2.0 cm² and carries blood at 20 cm/s. Which vessel carries more blood each second?`,
        options: [r`Vessel X, at 50 mL/s against 20 mL/s`, r`Vessel Y, at 40 mL/s against 20 mL/s`, r`Vessel X, at 125 mL/s against 10 mL/s`, r`Neither, since each carries 20 mL/s`],
        correctAnswer: 1,
        explanation: r`Flow rate is area times speed. X carries 0.40 × 50 = 20 mL/s and Y carries 2.0 × 20 = 40 mL/s, so the slower vessel carries more. Reading 50 and 20 as flow rates confuses speed with flow, and 125 against 10 divides each speed by its area.`,
      },
      {
        question: r`Ultrasound measures the blood in one stretch of an artery on two visits, a year apart. Before, its area was 0.50 cm² and the blood moved at 30 cm/s. Now its area is 0.10 cm² and the blood moves at 60 cm/s. How has the flow rate through it changed?`,
        options: [r`It rose from 15 mL/s to 30 mL/s`, r`It stayed at 15 mL/s throughout`, r`It rose from 6.0 mL/s to 15 mL/s`, r`It fell from 15 mL/s to 6.0 mL/s`],
        correctAnswer: 3,
        explanation: r`Before, the flow was 0.50 × 30 = 15 mL/s. Now it is 0.10 × 60 = 6.0 mL/s, so the flow fell even though the blood is faster. A rise to 30 mL/s assumes that twice the speed means twice the flow. An unchanged 15 mL/s would need a speed of 150 cm/s, and the last option swaps before and after.`,
      },
      {
        question: r`A garden hose fills a 12 L bucket in 60 s. The bore of the hose has a cross-sectional area of 2.0 cm². How fast does the water move along the hose?`,
        options: [r`4.0 m/s`, r`1.0 m/s`, r`0.10 m/s`, r`6.0 m/s`],
        correctAnswer: 1,
        explanation: r`The flow rate is 12,000 cm³ ÷ 60 s = 200 cm³/s, and the speed is the flow rate over the area: 200 ÷ 2.0 = 100 cm/s, or 1.0 m/s. 4.0 m/s multiplies 200 by 2.0. 0.10 m/s slips a power of ten in the conversion, and 6.0 m/s divides 12 by 2.0 with no unit conversions.`,
      },
      {
        question: r`During a forced breath out, 0.50 L of air passes through an airway each second at a speed of 2.5 m/s. What is the cross-sectional area of the airway?`,
        options: [r`200 cm²`, r`1250 cm²`, r`2.0 cm²`, r`0.20 cm²`],
        correctAnswer: 2,
        explanation: r`The area is the flow rate over the speed. 0.50 L/s is 500 cm³/s and 2.5 m/s is 250 cm/s, so the area is 500 ÷ 250 = 2.0 cm². 200 cm² divides by 2.5 without converting to cm/s. 1250 cm² multiplies instead of dividing, and 0.20 cm² slips a power of ten.`,
      },
      {
        question: r`A clot partly blocks an artery. Inside the blocked stretch the open area is one-sixth of normal, and the blood moves at 3 times its normal speed. How does the flow rate through the artery compare with normal?`,
        options: [r`It is one-half of the normal flow rate`, r`It is 3 times the normal flow rate`, r`It is 18 times the normal flow rate`, r`It is one-sixth of the normal flow rate`],
        correctAnswer: 0,
        explanation: r`Flow rate is area times speed, so it is (1/6) × 3 = 1/2 of normal: the blood is faster, yet less gets through. Three times the flow reads the speed as the flow rate. Eighteen times multiplies by 6 instead of dividing, and one-sixth leaves out the higher speed.`,
      },
    ],
  },
  [r`What does Bernoulli's equation say about the pressure in the jet through a short narrowing?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water of density 1000 kg/m³ flows through a short, level narrowing in a pipe. Upstream its pressure is 30,000 Pa and its speed is 1.0 m/s. In the narrowing its speed is 3.0 m/s. Treating the water as ideal, what is the pressure in the narrowing?`,
        options: [r`34,000 Pa`, r`26,000 Pa`, r`28,000 Pa`, r`25,500 Pa`],
        correctAnswer: 1,
        explanation: r`$\tfrac12 \rho v^2$ is 500 Pa upstream and 4500 Pa in the narrowing. Since $P + \tfrac12 \rho v^2$ is constant, the pressure is 30,000 + 500 − 4500 = 26,000 Pa. 34,000 Pa raises the pressure where the water is faster. 28,000 Pa squares the difference of the speeds, and 25,500 Pa leaves out the 500 Pa upstream.`,
      },
      {
        question: r`In the jet through a short, level narrowing at a heart valve, the pressure is 8000 Pa and $\tfrac12 \rho v^2$ is 3200 Pa. Just upstream, $\tfrac12 \rho v^2$ is 200 Pa. Treating the blood as ideal over this short stretch, what is the pressure just upstream?`,
        options: [r`5000 Pa`, r`11,200 Pa`, r`11,400 Pa`, r`11,000 Pa`],
        correctAnswer: 3,
        explanation: r`$P + \tfrac12 \rho v^2$ is 8000 + 3200 = 11,200 Pa in the jet, and it has the same value upstream, so the pressure there is 11,200 − 200 = 11,000 Pa. 5000 Pa puts the lower pressure where the blood is slower. 11,200 Pa forgets the 200 Pa upstream, and 11,400 Pa adds it instead of subtracting.`,
      },
      {
        question: r`Water of density 1000 kg/m³ passes through the short, level throat of a flow meter. In the wide part the pressure is 52,000 Pa and the water is slow enough that its $\tfrac12 \rho v^2$ can be ignored. In the throat the pressure is 34,000 Pa. Treating the water as ideal, how fast is it in the throat?`,
        options: [r`6.0 m/s`, r`36 m/s`, r`18 m/s`, r`4.2 m/s`],
        correctAnswer: 0,
        explanation: r`The pressure lost, 52,000 − 34,000 = 18,000 Pa, appears as $\tfrac12 \rho v^2$ in the throat: 500 $v^2$ = 18,000, so $v^2$ = 36 and $v$ = 6.0 m/s. 36 m/s forgets the square root. 18 m/s divides the pressure change by the density only, and 4.2 m/s leaves out the factor of one-half.`,
      },
      {
        question: r`Blood, treated as ideal, passes three places X, Y and Z along a short, level stretch of an artery. Its $\tfrac12 \rho v^2$ is 150 Pa at X, 2400 Pa at Y and 600 Pa at Z. The pressure at X is 13,000 Pa. What are the pressures at Y and Z?`,
        options: [r`15,250 Pa at Y and 13,450 Pa at Z`, r`10,600 Pa at Y and 12,400 Pa at Z`, r`10,750 Pa at Y and 12,550 Pa at Z`, r`13,000 Pa at Y and 13,000 Pa at Z`],
        correctAnswer: 2,
        explanation: r`$P + \tfrac12 \rho v^2$ is 13,000 + 150 = 13,150 Pa everywhere, so the pressure is 13,150 − 2400 = 10,750 Pa at Y and 13,150 − 600 = 12,550 Pa at Z. The pair 15,250 and 13,450 raises the pressure where the blood is faster. The pair 10,600 and 12,400 forgets the 150 Pa at X, and equal pressures ignore the change in speed.`,
      },
      {
        question: r`Blood of density 1000 kg/m³ jets at 400 cm/s through a short, level, narrowed valve, where the pressure is 6000 Pa. In the chamber just upstream the blood is slow enough that its $\tfrac12 \rho v^2$ can be ignored. Treating the blood as ideal, what is the pressure in the chamber?`,
        options: [r`22,000 Pa`, r`14,000 Pa`, r`8000 Pa`, r`8.0 × 10⁷ Pa`],
        correctAnswer: 1,
        explanation: r`400 cm/s is 4.0 m/s, so $\tfrac12 \rho v^2$ in the jet is ½ × 1000 × 16 = 8000 Pa, and the chamber pressure is 6000 + 8000 = 14,000 Pa. 22,000 Pa leaves out the one-half. 8000 Pa is only the jet's $\tfrac12 \rho v^2$, and 8.0 × 10⁷ Pa squares the speed in cm/s.`,
      },
      {
        question: r`Air of density 1.2 kg/m³ passes through a short, level narrowing in a ventilator tube. In the wide part it moves at 10 m/s and its pressure is 100,000 Pa. In the narrowing it moves at 20 m/s. Treating the air as an ideal, incompressible fluid, what is the pressure in the narrowing?`,
        options: [r`100,180 Pa`, r`99,760 Pa`, r`99,820 Pa`, r`99,940 Pa`],
        correctAnswer: 2,
        explanation: r`$\tfrac12 \rho v^2$ is 0.6 × 100 = 60 Pa in the wide part and 0.6 × 400 = 240 Pa in the narrowing, so the pressure falls by 180 Pa to 99,820 Pa. 100,180 Pa raises the pressure where the air is faster. 99,760 Pa forgets the 60 Pa in the wide part, and 99,940 Pa squares the difference of the speeds.`,
      },
    ],
  },
  [r`What happens to the jet just past a tight stenosis, and how is the jet's speed measured?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A cardiologist needs the speed of the blood jetting through a patient's narrowed aortic valve, without placing anything inside the body. Which tool gives that speed?`,
        options: [r`A stethoscope placed over the valve`, r`A pressure cuff inflated on the arm`, r`Doppler ultrasound aimed along the jet`, r`A pulse oximeter clipped to a finger`],
        correctAnswer: 2,
        explanation: r`Doppler ultrasound measures how fast blood is moving, so it gives the jet's speed from outside the body. A stethoscope can pick up the sound of turbulence past the valve but gives no speed. A cuff measures arterial pressure in the arm, and an oximeter measures oxygen saturation.`,
      },
      {
        question: r`A student analyzes a tight, short stenosis in three steps: (1) continuity for the jet's speed, (2) Bernoulli's equation from upstream into the jet for the pressure dip, and (3) Bernoulli's equation from the jet into the swirling region just past the stenosis for the pressure there. Which step is not valid?`,
        options: [r`Step 2, because the blood there is viscous`, r`Step 3, because the flow there is turbulent`, r`Step 1, because the jet there is too fast`, r`Step 2, because the vessel there is narrow`],
        correctAnswer: 1,
        explanation: r`Just past a tight stenosis the jet breaks up into turbulent eddies, and there neither Bernoulli's equation nor Poiseuille's law applies, so step 3 fails. Step 1 holds because the flow rate is the same at both places. Step 2 holds because over a short stretch friction has little chance to act, however narrow the vessel is.`,
      },
    ],
  },
  [r`How do you model a LONG narrowing in a vessel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A long stretch of an artery has a resistance of 0.10 mmHg·s/mL. Plaque narrows the whole stretch to one-third of its radius, and the flow stays laminar. What is the stretch's resistance now?`,
        options: [r`0.30 mmHg·s/mL`, r`0.90 mmHg·s/mL`, r`2.7 mmHg·s/mL`, r`8.1 mmHg·s/mL`],
        correctAnswer: 3,
        explanation: r`Resistance goes as $1/r^4$, and one-third of the radius gives 3⁴ = 81 times the resistance: 81 × 0.10 = 8.1 mmHg·s/mL. The value 0.30 uses the first power of 3, the value 0.90 uses the square, as if resistance went as 1 over the area, and 2.7 uses the cube.`,
      },
      {
        question: r`A stent widens the whole of a long narrowed stretch of an artery from a radius of 1.0 mm to 2.0 mm. The flow is laminar before and after. How does the resistance of that stretch change?`,
        options: [r`It falls to one-quarter of its value`, r`It falls to one-sixteenth of its value`, r`It falls to one-half of its value`, r`It rises to sixteen times its value`],
        correctAnswer: 1,
        explanation: r`Resistance goes as $1/r^4$, so doubling the radius divides it by 2⁴ = 16. One-quarter uses the square of the radius, which is how the area changes, and one-half uses the radius itself. A rise to sixteen times is what halving the radius would do.`,
      },
      {
        question: r`Flow through a long stretch of a graft is laminar, and the stretch's resistance is found to be 256 times its normal value. The whole stretch has narrowed evenly. What fraction of its normal radius does it have?`,
        options: [r`One-quarter of normal`, r`One-sixteenth of normal`, r`One-half of normal`, r`One-256th of normal`],
        correctAnswer: 0,
        explanation: r`Resistance goes as $1/r^4$, and 4⁴ = 256, so the radius is one-quarter of normal. One-sixteenth takes only a square root of 256. One-half would give 16 times the resistance, and one-256th treats resistance as going as 1 over the radius.`,
      },
      {
        question: r`A long artery normally has a resistance of 0.50 mmHg·min/L. Plaque narrows its whole length to half its radius, with laminar flow. The artery and the organ it feeds, in series, now have a total resistance of 30 mmHg·min/L. What is the organ's resistance?`,
        options: [r`29.5 mmHg·min/L`, r`22 mmHg·min/L`, r`38 mmHg·min/L`, r`28 mmHg·min/L`],
        correctAnswer: 1,
        explanation: r`Half the radius gives 16 times the resistance, so the artery is now 16 × 0.50 = 8.0 mmHg·min/L, and in series the organ holds the rest: 30 − 8.0 = 22 mmHg·min/L. The value 29.5 subtracts the artery's normal resistance, 38 adds instead of subtracting, and 28 uses a factor of 4 for the artery.`,
      },
      {
        question: r`A long artery with a resistance of 1.0 mmHg·s/mL feeds a tissue bed of 16 mmHg·s/mL in series. Plaque then narrows the artery's whole length to half its radius, and the flow stays laminar. What fraction of the pair's total resistance is now in the artery?`,
        options: [r`One-half of the total`, r`One-seventeenth of the total`, r`One-ninth of the total`, r`One-fifth of the total`],
        correctAnswer: 0,
        explanation: r`The artery's resistance becomes 16 × 1.0 = 16 mmHg·s/mL, so the series total is 16 + 16 = 32 and the artery holds 16 ÷ 32, one-half. One-seventeenth is the share before the narrowing. One-ninth uses a factor of 2 for the artery (2 of 18), and one-fifth uses a factor of 4 (4 of 20).`,
      },
      {
        question: r`A long channel on a lab chip has a radius of 200 μm and a resistance of 5.0 units. It is replaced by a channel of the same length with a radius of 0.10 mm. With the same liquid and laminar flow, what is the new channel's resistance?`,
        options: [r`10 units`, r`20 units`, r`0.31 units`, r`80 units`],
        correctAnswer: 3,
        explanation: r`0.10 mm is 100 μm, half the old radius, and resistance goes as $1/r^4$, so the resistance is 16 × 5.0 = 80 units. 10 units uses a factor of 2 and 20 units a factor of 4. 0.31 units divides by 16, as if the narrower channel carried flow more easily.`,
      },
    ],
  },
  [r`Continuity says blood speeds up in a stenosis; Poiseuille says the flow falls. How do the two agree?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A long stenosis raises a vessel's resistance from 3.0 to 12 mmHg·min/L. The body keeps the flow through the vessel at 2.0 L/min. What pressure difference across the vessel is now needed?`,
        options: [r`6.0 mmHg`, r`1.5 mmHg`, r`24 mmHg`, r`14 mmHg`],
        correctAnswer: 2,
        explanation: r`With the flow held fixed, the cost is a larger pressure difference: $\Delta P = QR$ = 2.0 × 12 = 24 mmHg, up from 6.0 mmHg. Keeping 6.0 mmHg ignores the new resistance. 1.5 mmHg divides the old value by 4 instead of multiplying, and 14 mmHg adds the flow to the resistance.`,
      },
      {
        question: r`A long narrowing raises a vessel's resistance from 4.0 to 20 mmHg·s/mL while the pressure difference across the vessel is held at 60 mmHg. What is the flow through the vessel now?`,
        options: [r`15 mL/s`, r`3.0 mL/s`, r`75 mL/s`, r`0.33 mL/s`],
        correctAnswer: 1,
        explanation: r`With the pressure difference fixed, the flow falls: $Q = \Delta P / R$ = 60 ÷ 20 = 3.0 mL/s, down from 15 mL/s. Keeping 15 mL/s holds the flow fixed, which this case does not. 75 mL/s multiplies the old flow by 5 instead of dividing, and 0.33 mL/s divides the resistance by the pressure.`,
      },
      {
        question: r`A long vessel carries 2.0 mL/s with 4 mmHg across it. Its whole length then narrows to half its radius, the flow stays laminar, and the flow through it is measured again at 2.0 mL/s. What is the pressure difference across it now, and what has been held fixed?`,
        options: [r`4 mmHg, with the flow held fixed`, r`64 mmHg, with the pressure held fixed`, r`0.25 mmHg, with the pressure held fixed`, r`64 mmHg, with the flow held fixed`],
        correctAnswer: 3,
        explanation: r`The flow is the same before and after, so the flow is what was held fixed. Half the radius makes the resistance 16 times as large, so the pressure difference must be 16 × 4 = 64 mmHg. An unchanged 4 mmHg could not push the same flow through 16 times the resistance, and the pressure difference has plainly changed, so it was not held fixed.`,
      },
      {
        question: r`Long stenoses make one vessel's resistance 5 times normal in each of two patients. In patient A the pressure difference across the vessel is unchanged. In patient B the flow through the vessel is unchanged. What does each patient have?`,
        options: [r`A: 1/5 of normal flow. B: 5 times the pressure difference`, r`A: 5 times normal flow. B: 1/5 of the pressure difference`, r`A: 1/5 of normal flow. B: the same pressure difference`, r`A: the same flow as normal. B: 1/5 of the pressure difference`],
        correctAnswer: 0,
        explanation: r`From $Q = \Delta P / R$, a fixed pressure difference with 5 times the resistance gives one-fifth of the flow, and a fixed flow with 5 times the resistance needs 5 times the pressure difference. The swapped option turns both ratios upside down. The other two leave a quantity unchanged that the higher resistance must change.`,
      },
      {
        question: r`The body holds the flow through a long narrowed vessel at 4.0 mL/s. Because of the narrowing, the pressure difference across the vessel has risen from 8.0 mmHg to 40 mmHg. What is the vessel's resistance now?`,
        options: [r`2.0 mmHg·s/mL`, r`160 mmHg·s/mL`, r`10 mmHg·s/mL`, r`8.0 mmHg·s/mL`],
        correctAnswer: 2,
        explanation: r`$R = \Delta P / Q$ = 40 ÷ 4.0 = 10 mmHg·s/mL. The value 2.0 is the resistance before the narrowing, from 8.0 ÷ 4.0. The value 160 multiplies the pressure difference by the flow, and 8.0 uses only the rise in pressure, 32 mmHg.`,
      },
      {
        question: r`The pressure difference across a long renal artery stays at 30 mmHg while disease raises the artery's resistance from 50 to 150 mmHg·min/L. What is the flow through the artery now, in mL/min?`,
        options: [r`200 mL/min`, r`600 mL/min`, r`1800 mL/min`, r`0.20 mL/min`],
        correctAnswer: 0,
        explanation: r`With the pressure difference fixed, $Q = \Delta P / R$ = 30 ÷ 150 = 0.20 L/min, which is 200 mL/min. 600 mL/min is the flow before the disease. 1800 mL/min multiplies the old flow by 3 instead of dividing, and 0.20 mL/min forgets that the answer came out in liters.`,
      },
    ],
  },
  [r`What is an aneurysm, and what happens to the blood's speed and pressure inside one?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In one level segment of an artery, ultrasound shows the blood moving slower than it does just upstream, and a catheter shows a slightly higher pressure there. The flow rate is the same in both places. Which finding fits?`,
        options: [r`A stenosis: the segment has narrowed`, r`A bruit: the segment has gone turbulent`, r`A stenosis: the segment has lengthened`, r`An aneurysm: the segment has widened`],
        correctAnswer: 3,
        explanation: r`Slower blood at the same flow rate means a larger area, and slower blood has a higher pressure, which is the pattern of an abnormal widening, an aneurysm. A narrowing would give faster blood at a lower pressure. A bruit is a sound from turbulence, not a segment, and a stenosis is not a lengthening.`,
      },
      {
        question: r`A level artery has an aneurysm, the flow rate through it is unchanged, and the blood is treated as ideal. Which statement about the aneurysm is NOT correct?`,
        options: [r`Its blood moves faster than the blood upstream`, r`Its wall pressure is higher than that upstream`, r`Its flow rate is the same as that upstream`, r`Its cross-section is wider than that upstream`],
        correctAnswer: 0,
        explanation: r`An aneurysm is a widening, so by continuity its blood is slower, not faster, and that is the false statement. The other three are true: the cross-section is wider, the same flow passes through, and by Bernoulli's equation the slower blood presses harder on the wall.`,
      },
    ],
  },
  [r`Which clues in a question point to viscous flow, and which to ideal flow?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A question describes a non-viscous liquid passing through one short constriction in a level pipe. It gives the speed and pressure before the constriction and asks for the pressure inside it. Which tools fit?`,
        options: [r`Poiseuille's law, then series resistances`, r`Hydrostatic pressure, then Pascal's principle`, r`Torricelli's law, then Archimedes' principle`, r`Continuity, then Bernoulli's equation`],
        correctAnswer: 3,
        explanation: r`A fluid called non-viscous and a short constriction with speeds and pressures both point to ideal flow: continuity gives the new speed and Bernoulli's equation the new pressure. Poiseuille's law and resistances are for viscous flow. Hydrostatics, Pascal and Archimedes are for fluids at rest, and Torricelli's law is for a tank draining through a hole.`,
      },
      {
        question: r`Four problems are described. (1) Blood of viscosity 0.004 Pa·s moves along a 20 cm artery. (2) A liquid is called non-viscous. (3) The pressure falls steadily along a uniform catheter. (4) Water passes a short nozzle, with speeds and pressures given. Which are viscous-flow problems?`,
        options: [r`Problems 1 and 3 only`, r`Problems 2 and 4 only`, r`Problems 1 and 2 only`, r`Problems 3 and 4 only`],
        correctAnswer: 0,
        explanation: r`A viscosity given with a long vessel, and pressure falling along a uniform tube, are the clues for viscous flow, so problems 1 and 3 call for Poiseuille's law. A fluid called non-viscous and a short constriction with speeds and pressures are the clues for ideal flow, so problems 2 and 4 call for continuity and Bernoulli's equation.`,
      },
    ],
  },
  [r`After picking the regime, which three questions do you ask about a flow?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A tube with a cross-sectional area of 2.0 cm² splits into 10 branches of 0.50 cm² each. Liquid moves at 30 cm/s in the tube, and the flow is steady. Which area belongs in the continuity equation for the branches, and how fast is the liquid in them?`,
        options: [r`The total area, 5.0 cm², giving 12 cm/s`, r`The total area, 5.0 cm², giving 75 cm/s`, r`One branch's area, 0.50 cm², giving 120 cm/s`, r`The mean area, 1.25 cm², giving 48 cm/s`],
        correctAnswer: 0,
        explanation: r`For a branching network the total area of the branches is used: 10 × 0.50 = 5.0 cm², and the speed is 2.0 × 30 ÷ 5.0 = 12 cm/s. 75 cm/s turns the area ratio upside down. Using one branch's area gives 120 cm/s, which would be right only if all the flow went into one branch, and a mean area has no place in continuity.`,
      },
      {
        question: r`A student has decided that a problem is viscous flow through a single long tube and that the driving pressure is fixed. Before using Poiseuille's law, which remaining question should the student ask about the flow?`,
        options: [r`Whether the fluid is denser than water or not`, r`Whether the tube is open to the air or closed`, r`Whether the speeds are in cm/s or in m/s`, r`Whether the flow is laminar or turbulent`],
        correctAnswer: 3,
        explanation: r`Of the three questions, one tube or a network and fixed flow or fixed pressure have been answered, so what remains is laminar or turbulent: in turbulent flow Poiseuille's law does not apply. The density, whether the tube is open, and the units of speed are not among the three questions and do not decide whether the law holds.`,
      },
    ],
  },
  [r`Blood speeds up by a known factor in a short stenosis. How do you find how much the radius has shrunk?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Doppler ultrasound shows blood speeding up from 30 cm/s to 270 cm/s as it enters a short stenosis. Taking the flow as steady, what fraction of its normal cross-sectional area does the vessel have inside the stenosis?`,
        options: [r`One-third of normal`, r`One-81st of normal`, r`One-ninth of normal`, r`Nine times normal`],
        correctAnswer: 2,
        explanation: r`The speed is 270 ÷ 30 = 9 times as large, and the area ratio is the speed ratio upside down, so the area is one-ninth of normal. One-third is the radius fraction, not the area fraction. One-81st squares the 9, and nine times normal forgets to turn the ratio upside down.`,
      },
      {
        question: r`Blood speeds up from 0.20 m/s to 5.0 m/s as it enters a short stenosis in an artery whose normal radius is 5.0 mm. Taking the flow as steady, what is the radius inside the stenosis?`,
        options: [r`0.20 mm`, r`1.0 mm`, r`2.2 mm`, r`0.0080 mm`],
        correctAnswer: 1,
        explanation: r`The speed is 25 times as large, so the area is 1/25 of normal and the radius is the square root of that, 1/5: 5.0 ÷ 5 = 1.0 mm. 0.20 mm applies the area ratio to the radius. 2.2 mm takes the square root twice, and 0.0080 mm squares the 25 instead of taking its root.`,
      },
      {
        question: r`Blood slows from 80 cm/s to 20 cm/s as it passes from a normal stretch of an artery into a short widened stretch. Taking the flow as steady, how does the radius of the widened stretch compare with the normal radius?`,
        options: [r`It is 4 times the normal radius`, r`It is 16 times the normal radius`, r`It is half of the normal radius`, r`It is 2 times the normal radius`],
        correctAnswer: 3,
        explanation: r`The speed falls to one-quarter, so the area is 4 times normal, and the radius ratio is the square root of the area ratio: 2 times. Four times is the area ratio, not the radius ratio. Sixteen times squares the 4, and half the radius would speed the blood up to 4 times, not slow it.`,
      },
      {
        question: r`Water moves at 50 cm/s along a hose with an inner diameter of 18 mm and leaves through a short nozzle at 18 m/s. Taking the flow as steady, what is the inner diameter of the nozzle?`,
        options: [r`0.50 mm`, r`3.0 mm`, r`7.3 mm`, r`108 mm`],
        correctAnswer: 1,
        explanation: r`50 cm/s is 0.50 m/s, so the speed is 36 times as large, the area is 1/36, and the diameter is the square root of that, 1/6: 18 ÷ 6 = 3.0 mm. 0.50 mm divides the diameter by 36, 7.3 mm takes the square root twice, and 108 mm multiplies by 6 instead of dividing.`,
      },
      {
        question: r`Ultrasound shows blood speeding up from 36 cm/s to 100 cm/s as it enters a short narrowing. Taking the flow as steady, the radius inside the narrowing is what fraction of the normal radius?`,
        options: [r`0.60 of the normal radius`, r`0.36 of the normal radius`, r`0.13 of the normal radius`, r`0.40 of the normal radius`],
        correctAnswer: 0,
        explanation: r`The area ratio is the speed ratio upside down, 36 ÷ 100 = 0.36, and the radius ratio is its square root, 0.60. The value 0.36 is the fraction of area left, 0.13 squares the 0.36 instead of taking its root, and 0.40 is the part of the radius that was lost, not the part that is left.`,
      },
      {
        question: r`Two patients have short stenoses in arteries of the same normal radius, and the flow in each is steady. In patient A the jet is 4 times as fast as the blood upstream. In patient B it is 16 times as fast. How does the radius inside B's stenosis compare with the radius inside A's?`,
        options: [r`It is one-quarter of the radius in A's`, r`It is one-sixteenth of the radius in A's`, r`It is one-half of the radius in A's`, r`It is the same as the radius in A's`],
        correctAnswer: 2,
        explanation: r`Four times the speed means a quarter of the area and half the radius. Sixteen times the speed means 1/16 of the area and a quarter of the radius. A quarter is one-half of a half. One-quarter compares the areas instead of the radii, and one-sixteenth compares B's area with the normal area.`,
      },
    ],
  },
  [r`What is the common trap when reporting how much a stenosis has narrowed a vessel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A report states that a stenosis has reduced the open cross-sectional area of a round artery by 36%. By what percentage has the artery's diameter been reduced?`,
        options: [r`36%`, r`18%`, r`20%`, r`80%`],
        correctAnswer: 2,
        explanation: r`64% of the area is left, and the diameter goes as the square root of the area: √0.64 = 0.80, so the diameter is down by 20%. Reporting 36% is the trap of giving the area reduction as the diameter reduction. 18% halves the 36, and 80% is the diameter that is left, not the reduction.`,
      },
      {
        question: r`Imaging shows that plaque has reduced the diameter of a round artery by 30%. By what percentage has the artery's open cross-sectional area been reduced?`,
        options: [r`51%`, r`49%`, r`60%`, r`30%`],
        correctAnswer: 0,
        explanation: r`70% of the diameter is left, so the area left is 0.70² = 0.49 of normal, a reduction of 51%. 49% is the area that is left, not the reduction. 60% doubles the 30 instead of squaring the fraction left, and 30% reports the diameter reduction as the area reduction.`,
      },
      {
        question: r`A report describes a round artery as having a "70% stenosis by diameter", meaning that its diameter has been reduced by 70%. What fraction of the artery's normal cross-sectional area is still open?`,
        options: [r`30% of the normal area`, r`9% of the normal area`, r`49% of the normal area`, r`70% of the normal area`],
        correctAnswer: 1,
        explanation: r`30% of the diameter is left, and area goes as the diameter squared, so 0.30² = 0.09, or 9%, of the area is open. 30% is the diameter left, reported as an area. 49% squares the 0.70 that was lost instead of the 0.30 that is left, and 70% is the reduction itself.`,
      },
      {
        question: r`Ultrasound shows blood speeding up from 30 cm/s to 480 cm/s as it enters a short stenosis in a round artery, and the flow rate is the same at both places. By how much has the artery been narrowed, by area and by diameter?`,
        options: [r`About 94% by area and 94% by diameter`, r`About 75% by area and 94% by diameter`, r`About 94% by area and 75% by diameter`, r`About 75% by area and 50% by diameter`],
        correctAnswer: 2,
        explanation: r`The speed is 16 times as large, so 1/16 of the area is left, a reduction of about 94%, and the diameter is a quarter of normal, a reduction of 75%. Giving 94% for both reports the area reduction as the diameter reduction. The option with the two swapped has them backwards, and 75% with 50% belongs to a speed 4 times as large.`,
      },
      {
        question: r`Two reports describe stenoses in round arteries of the same normal size. Artery A has a 50% reduction in diameter. Artery B has a 70% reduction in area. Which artery is narrowed more?`,
        options: [r`Artery B, with 30% of its area open against 50%`, r`Artery B, with 30% of its area open against 75%`, r`Artery A, with 50% of its area open against 70%`, r`Artery A, with 25% of its area open against 30%`],
        correctAnswer: 3,
        explanation: r`Half the diameter leaves 0.50² = 25% of the area open in A, while B has 100 − 70 = 30% open, so A is narrowed more even though its percentage looks smaller. Taking A as 50% open reads the diameter reduction as an area reduction. 75% open is A's area reduction, not what is left, and 70% is B's reduction, not what is left.`,
      },
      {
        question: r`A round artery has a normal diameter of 5.0 mm. A scan reports that a stenosis has reduced its open cross-sectional area by 64%. What is the artery's diameter inside the stenosis?`,
        options: [r`1.8 mm`, r`3.0 mm`, r`3.2 mm`, r`2.0 mm`],
        correctAnswer: 1,
        explanation: r`36% of the area is left, and √0.36 = 0.60, so the diameter is 0.60 × 5.0 = 3.0 mm. 1.8 mm takes 36% of the diameter, treating the area reduction as a diameter reduction. 3.2 mm takes 64% of the diameter, and 2.0 mm is how much the diameter has shrunk, not what is left.`,
      },
    ],
  },
  [r`How do you find the pressure dip in the jet through a short stenosis?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Doppler ultrasound shows blood moving at 2.0 m/s just before a short narrowing at a valve and at 4.0 m/s in the jet. The blood's density is 1000 kg/m³ and there is no change in height. What pressure dip does Bernoulli's equation give for the jet?`,
        options: [r`2000 Pa`, r`1000 Pa`, r`12,000 Pa`, r`6000 Pa`],
        correctAnswer: 3,
        explanation: r`$\Delta P = \tfrac12 \rho (v_2^2 - v_1^2)$ = 500 × (16 − 4) = 6000 Pa. 2000 Pa subtracts the speeds first and then squares, 500 × 2². 1000 Pa does not square at all, and 12,000 Pa leaves out the one-half.`,
      },
      {
        question: r`Blood of density 1000 kg/m³ speeds up from 50 cm/s to 150 cm/s as it enters a short stenosis in a level artery. Treating the blood as ideal over this short stretch, how far does the pressure dip in the jet?`,
        options: [r`500 Pa`, r`1.0 × 10⁷ Pa`, r`1000 Pa`, r`2000 Pa`],
        correctAnswer: 2,
        explanation: r`In meters per second the speeds are 0.50 and 1.5, so the dip is 500 × (2.25 − 0.25) = 1000 Pa. 500 Pa squares the difference of the speeds, 500 × 1.0². The value 1.0 × 10⁷ Pa leaves the speeds in cm/s, and 2000 Pa leaves out the one-half.`,
      },
      {
        question: r`In a lab, a liquid speeds up from 1.0 m/s to 3.0 m/s through a short, level narrowing in a tube, and gauges show that the pressure dips by 3200 Pa. Treating the liquid as ideal, what is its density?`,
        options: [r`800 kg/m³`, r`400 kg/m³`, r`1600 kg/m³`, r`3200 kg/m³`],
        correctAnswer: 0,
        explanation: r`$\Delta P = \tfrac12 \rho (v_2^2 - v_1^2)$ gives 3200 = ½ρ × (9 − 1) = 4ρ, so ρ = 800 kg/m³. 400 kg/m³ leaves out the one-half. 1600 kg/m³ squares the difference of the speeds, and 3200 kg/m³ uses the difference without squaring anything.`,
      },
      {
        question: r`Water of density 1000 kg/m³ enters a short, level narrowing in a pipe at 2.0 m/s, and the pressure in the narrowing is 16,000 Pa lower than upstream. Treating the water as ideal, how fast is it in the narrowing?`,
        options: [r`5.7 m/s`, r`36 m/s`, r`6.0 m/s`, r`4.5 m/s`],
        correctAnswer: 2,
        explanation: r`16,000 = 500 × ($v_2^2$ − 4), so $v_2^2$ − 4 = 32, $v_2^2$ = 36 and $v_2$ = 6.0 m/s. 5.7 m/s forgets to add back the upstream 4 before taking the root. 36 m/s forgets the square root, and 4.5 m/s leaves out the one-half.`,
      },
      {
        question: r`Blood of density 1000 kg/m³ approaches a short, level, narrowed valve at 1.0 m/s. On one day the jet's speed is 2.0 m/s, and on another it is 4.0 m/s, with the upstream speed still 1.0 m/s. The pressure dip in the jet on the second day is how many times the dip on the first?`,
        options: [r`2 times as large`, r`4 times as large`, r`3 times as large`, r`5 times as large`],
        correctAnswer: 3,
        explanation: r`The dips are 500 × (4 − 1) = 1500 Pa and 500 × (16 − 1) = 7500 Pa, a ratio of 5. Two times assumes the dip follows the jet's speed, and 4 times squares the jet's speed but forgets to subtract the upstream term. Three times compares the differences of the speeds, 3 and 1.`,
      },
      {
        question: r`Air of density 1.2 kg/m³ speeds up from 10 m/s to 30 m/s through the short, level throat of a paint sprayer. Treating the air as an ideal, incompressible fluid, how far does the pressure dip in the throat?`,
        options: [r`480 Pa`, r`240 Pa`, r`960 Pa`, r`12 Pa`],
        correctAnswer: 0,
        explanation: r`$\Delta P = \tfrac12 \rho (v_2^2 - v_1^2)$ = 0.6 × (900 − 100) = 480 Pa. 240 Pa subtracts the speeds first and then squares, 0.6 × 20². 960 Pa leaves out the one-half, and 12 Pa uses the difference of the speeds without squaring.`,
      },
    ],
  },
  [r`How do you convert a pressure from pascals to millimeters of mercury?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Bernoulli's equation gives a pressure dip of 4000 Pa for the jet through a narrowed valve. Using 1 mmHg ≈ 133 Pa, about what is this dip in millimeters of mercury?`,
        options: [r`532,000 mmHg`, r`40 mmHg`, r`30 mmHg`, r`3867 mmHg`],
        correctAnswer: 2,
        explanation: r`Divide the pascals by 133: 4000 ÷ 133 ≈ 30 mmHg. 532,000 mmHg multiplies by 133 instead of dividing. 40 mmHg divides by 100, and 3867 mmHg subtracts 133 from the pascals.`,
      },
      {
        question: r`A patient's mean arterial pressure is 80 mmHg. A calculation with resistances in SI units needs it in pascals. Using 1 mmHg ≈ 133 Pa, about what is it?`,
        options: [r`About 0.60 Pa`, r`About 8000 Pa`, r`About 1060 Pa`, r`About 10,600 Pa`],
        correctAnswer: 3,
        explanation: r`Going from mmHg to pascals reverses the usual step, so multiply by 133: 80 × 133 = 10,640 Pa, about 10,600 Pa. About 0.60 Pa divides by 133, which is the step for going from pascals to mmHg. About 8000 Pa multiplies by 100, and about 1060 Pa slips a power of ten.`,
      },
      {
        question: r`A blood-pressure monitor made for another country shows a reading of 16 kPa. Using 1 mmHg ≈ 133 Pa, about what is this reading in millimeters of mercury?`,
        options: [r`120 mmHg`, r`0.12 mmHg`, r`2100 mmHg`, r`160 mmHg`],
        correctAnswer: 0,
        explanation: r`16 kPa is 16,000 Pa, and 16,000 ÷ 133 ≈ 120 mmHg. 0.12 mmHg divides 16 by 133 and forgets the kilo. 2100 mmHg multiplies 16 by 133, and 160 mmHg divides the pascals by 100.`,
      },
      {
        question: r`One report gives the pressure dip in a stenosis as 2000 Pa, and another gives the dip in a second stenosis as 20 mmHg. Using 1 mmHg ≈ 133 Pa, which dip is larger?`,
        options: [r`The 2000 Pa dip; 20 mmHg is about 0.15 Pa`, r`The 2000 Pa dip; it is about 266,000 mmHg`, r`They are equal; 2000 Pa is about 20 mmHg`, r`The 20 mmHg dip; 2000 Pa is about 15 mmHg`],
        correctAnswer: 3,
        explanation: r`Dividing by 133, 2000 Pa is about 15 mmHg, which is less than 20 mmHg. Taking 20 mmHg as 0.15 Pa divides by 133 in the wrong direction, and 266,000 mmHg multiplies the pascals by 133. Calling them equal uses 100 Pa per mmHg.`,
      },
      {
        question: r`Blood of density 1000 kg/m³ jets at 4.0 m/s through a short, level, narrowed valve, and its speed just upstream is small enough to ignore. Using 1 mmHg ≈ 133 Pa, about what is the pressure dip in the jet in millimeters of mercury?`,
        options: [r`8000 mmHg`, r`60 mmHg`, r`120 mmHg`, r`15 mmHg`],
        correctAnswer: 1,
        explanation: r`The dip is ½ × 1000 × 4.0² = 8000 Pa, and 8000 ÷ 133 ≈ 60 mmHg. 8000 mmHg reports the pascals as mmHg. 120 mmHg leaves out the one-half before converting, and 15 mmHg does not square the speed, converting 2000 Pa.`,
      },
      {
        question: r`A pressure difference of 2660 Pa drives 4.0 mL/s of blood through a long graft. Using 1 mmHg ≈ 133 Pa, what is the graft's resistance in mmHg·s/mL?`,
        options: [r`665 mmHg·s/mL`, r`80 mmHg·s/mL`, r`5.0 mmHg·s/mL`, r`0.20 mmHg·s/mL`],
        correctAnswer: 2,
        explanation: r`First convert: 2660 ÷ 133 = 20 mmHg. Then $R = \Delta P / Q$ = 20 ÷ 4.0 = 5.0 mmHg·s/mL. The value 665 divides the pascals by the flow without converting, 80 multiplies the 20 mmHg by the flow, and 0.20 divides the flow by the pressure.`,
      },
    ],
  },
  [r`Part of a vessel's length narrows. How do you find the vessel's new resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A leg artery has a resistance of 6.0 mmHg·s/mL. Plaque narrows one-third of its length to half the normal radius and leaves the rest untouched. With laminar flow, what is the artery's resistance now?`,
        options: [r`96 mmHg·s/mL`, r`32 mmHg·s/mL`, r`36 mmHg·s/mL`, r`12 mmHg·s/mL`],
        correctAnswer: 2,
        explanation: r`The normal two-thirds keeps 4.0 mmHg·s/mL. The narrowed third had 2.0 and is multiplied by 16, giving 32, and in series the total is 4.0 + 32 = 36 mmHg·s/mL. The value 96 multiplies the whole artery by 16, 32 forgets the normal part, and 12 uses a factor of 4 for the narrowed part.`,
      },
      {
        question: r`A dialysis access tube has a resistance of 10 units. A clot narrows one-tenth of its length to one-third of the radius it had, and the rest is unchanged. With laminar flow, what is the tube's resistance now?`,
        options: [r`810 units`, r`81 units`, r`18 units`, r`90 units`],
        correctAnswer: 3,
        explanation: r`The normal nine-tenths keeps 9 units. The narrowed tenth had 1 unit and is multiplied by 3⁴ = 81, and in series the total is 9 + 81 = 90 units. 810 units multiplies the whole tube by 81, 81 units forgets the normal part, and 18 units uses 3² = 9 for the narrowed part.`,
      },
      {
        question: r`Three-quarters of the length of a long vessel narrows to half its radius, and the remaining quarter is unchanged. With laminar flow, the vessel's resistance becomes how many times its original value?`,
        options: [r`16 times`, r`12.25 times`, r`12 times`, r`3.25 times`],
        correctAnswer: 1,
        explanation: r`The unchanged quarter keeps 0.25 of the original resistance, and the narrowed three-quarters gives 0.75 × 16 = 12, so in series the total is 12.25 times the original. Sixteen times scales the whole length, 12 times forgets the unchanged quarter, and 3.25 times uses a factor of 4 for the narrowed part.`,
      },
      {
        question: r`Scar tissue has narrowed one-tenth of the length of a graft to half the radius it had, and the rest of the graft is unchanged. With laminar flow, the graft's resistance is now 5.0 mmHg·min/L. What was its resistance before the scarring?`,
        options: [r`2.0 mmHg·min/L`, r`12.5 mmHg·min/L`, r`0.31 mmHg·min/L`, r`3.1 mmHg·min/L`],
        correctAnswer: 0,
        explanation: r`The untouched nine-tenths keeps 0.9 of the old resistance and the narrowed tenth gives 0.1 × 16 = 1.6, so the graft now has 2.5 times its old resistance: 5.0 ÷ 2.5 = 2.0 mmHg·min/L. The value 12.5 multiplies by 2.5, 0.31 divides by 16 as if the whole graft had narrowed, and 3.1 forgets the untouched part.`,
      },
      {
        question: r`A long vessel has a resistance of 5.0 units. A drug widens 40% of its length to twice the normal radius, and the other 60% is unchanged. With laminar flow, about what is the vessel's resistance now?`,
        options: [r`0.31 units`, r`35 units`, r`3.1 units`, r`3.5 units`],
        correctAnswer: 2,
        explanation: r`The unchanged 60% keeps 3.0 units. The widened 40% had 2.0 units and is divided by 2⁴ = 16, giving 0.125, so in series the total is about 3.1 units. 0.31 units divides the whole vessel by 16. 35 units multiplies the widened part by 16 instead of dividing, and 3.5 units uses a factor of 4.`,
      },
      {
        question: r`A 40 cm tube in a heart-lung machine has a resistance of 1.6 mmHg·s/mL. A clamp squeezes 5.0 cm of it to half its inner radius, and the rest keeps its normal radius. With laminar flow, what is the tube's resistance now?`,
        options: [r`25.6 mmHg·s/mL`, r`4.6 mmHg·s/mL`, r`3.2 mmHg·s/mL`, r`2.2 mmHg·s/mL`],
        correctAnswer: 1,
        explanation: r`The squeezed part is 5.0 ÷ 40 = one-eighth of the length, so it had 0.20 mmHg·s/mL and now has 16 × 0.20 = 3.2. The other seven-eighths keeps 1.4, and in series the total is 1.4 + 3.2 = 4.6 mmHg·s/mL. The value 25.6 scales the whole tube, 3.2 forgets the normal part, and 2.2 uses a factor of 4.`,
      },
    ],
  },
  [r`An artery in series with a tissue bed narrows. How do you find the new flow?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An artery of 2.0 mmHg·s/mL feeds a tissue bed of 18 mmHg·s/mL in series, and 100 mmHg is held across the pair. Plaque then raises the artery's resistance to 32 mmHg·s/mL, and the bed does not change. What is the new flow through the bed?`,
        options: [r`2.0 mL/s`, r`5.0 mL/s`, r`3.1 mL/s`, r`0.50 mL/s`],
        correctAnswer: 0,
        explanation: r`The new total is 32 + 18 = 50 mmHg·s/mL, so $Q$ = 100 ÷ 50 = 2.0 mL/s. 5.0 mL/s is the flow before the plaque, from the artery's old resistance. 3.1 mL/s divides by the artery's resistance alone, and 0.50 mL/s divides the total resistance by the pressure.`,
      },
      {
        question: r`A long artery of 0.50 mmHg·min/L feeds an organ of 12 mmHg·min/L in series, with 100 mmHg held across the pair. The artery's whole length then narrows to half its radius. The flow stays laminar and the organ does not change. What is the new flow?`,
        options: [r`8.0 L/min`, r`12.5 L/min`, r`7.1 L/min`, r`5.0 L/min`],
        correctAnswer: 3,
        explanation: r`The artery's new resistance is 16 × 0.50 = 8.0 mmHg·min/L, the series total is 8.0 + 12 = 20, and $Q$ = 100 ÷ 20 = 5.0 L/min. 8.0 L/min is the flow before the narrowing. 12.5 L/min divides by the artery's new resistance alone, and 7.1 L/min uses a factor of 4 for the artery.`,
      },
      {
        question: r`After a narrowing, an artery of 6.0 mmHg·s/mL feeds a tissue bed of 24 mmHg·s/mL in series, and the flow through the pair is measured at 3.0 mL/s. What driving pressure is across the pair?`,
        options: [r`72 mmHg`, r`18 mmHg`, r`90 mmHg`, r`10 mmHg`],
        correctAnswer: 2,
        explanation: r`Rearranging $Q = \Delta P / (R_{\text{artery}} + R_{\text{bed}})$ gives $\Delta P$ = 3.0 × (6.0 + 24) = 90 mmHg. 72 mmHg is the drop across the bed alone and 18 mmHg the drop across the artery alone. 10 mmHg divides the total resistance by the flow.`,
      },
      {
        question: r`An artery of 1.0 mmHg·s/mL feeds a tissue bed of 4.0 mmHg·s/mL in series. A narrowing raises the artery's resistance to 6.0 mmHg·s/mL, while the driving pressure across the pair and the bed stay the same. The new flow is what fraction of the original flow?`,
        options: [r`One-sixth of the original flow`, r`One-half of the original flow`, r`Five-sixths of the original flow`, r`Two-thirds of the original flow`],
        correctAnswer: 1,
        explanation: r`The total resistance rises from 1.0 + 4.0 = 5.0 to 6.0 + 4.0 = 10 mmHg·s/mL, and at a fixed driving pressure twice the total means one-half of the flow. One-sixth compares the artery's resistances alone and ignores the bed. Five-sixths divides the old total by the new artery alone, and two-thirds divides the bed by the new artery.`,
      },
      {
        question: r`A narrowed artery feeds a tissue bed of 15 mmHg·s/mL in series, with 80 mmHg held across the pair. The flow through the bed has fallen to 2.0 mL/s. What is the artery's resistance now?`,
        options: [r`40 mmHg·s/mL`, r`55 mmHg·s/mL`, r`5.3 mmHg·s/mL`, r`25 mmHg·s/mL`],
        correctAnswer: 3,
        explanation: r`The total resistance is $\Delta P / Q$ = 80 ÷ 2.0 = 40 mmHg·s/mL, and in series the artery holds what the bed does not: 40 − 15 = 25 mmHg·s/mL. The value 40 is the total, not the artery. The value 55 adds the bed instead of subtracting it, and 5.3 divides the pressure by the bed's resistance.`,
      },
      {
        question: r`A narrowed artery now has a resistance of 10 mmHg·s/mL and feeds a tissue bed of 20 mmHg·s/mL in series. The driving pressure across the pair is 90 mmHg. What is the flow through the bed, in mL/min?`,
        options: [r`180 mL/min`, r`270 mL/min`, r`3.0 mL/min`, r`0.050 mL/min`],
        correctAnswer: 0,
        explanation: r`$Q$ = 90 ÷ (10 + 20) = 3.0 mL/s, and 3.0 × 60 = 180 mL/min. 270 mL/min leaves the artery out of the total. 3.0 mL/min forgets to convert from seconds to minutes, and 0.050 mL/min divides by 60 instead of multiplying.`,
      },
    ],
  },
  [r`An artery feeds a tissue bed in series. How do you find the pressure difference left across the bed?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A narrowed artery of 5.0 mmHg·s/mL feeds a tissue bed in series. The pressure difference across the pair is 100 mmHg, and the flow is 4.0 mL/s. What pressure difference is left across the bed?`,
        options: [r`20 mmHg`, r`120 mmHg`, r`80 mmHg`, r`95 mmHg`],
        correctAnswer: 2,
        explanation: r`The artery's drop is $Q R_{\text{artery}}$ = 4.0 × 5.0 = 20 mmHg, so the bed is left with 100 − 20 = 80 mmHg. 20 mmHg is the artery's drop, not the bed's. 120 mmHg adds the drop to the total, and 95 mmHg subtracts the resistance without multiplying by the flow.`,
      },
      {
        question: r`A narrowed artery of 12 mmHg·min/L feeds an organ of 28 mmHg·min/L in series, and the pressure difference across the pair is 80 mmHg. What pressure difference is left across the organ?`,
        options: [r`24 mmHg`, r`56 mmHg`, r`68 mmHg`, r`2.0 mmHg`],
        correctAnswer: 1,
        explanation: r`The flow is 80 ÷ (12 + 28) = 2.0 L/min, the artery's drop is 2.0 × 12 = 24 mmHg, and the organ is left with 80 − 24 = 56 mmHg, which checks as 2.0 × 28. 24 mmHg is the artery's drop. 68 mmHg subtracts the artery's resistance from the pressure, and 2.0 is the flow, not a pressure.`,
      },
      {
        question: r`A narrowed artery feeds a tissue bed in series. The pressure difference across the pair is 90 mmHg, the flow is 3.0 mL/s, and 60 mmHg is left across the bed. What is the artery's resistance?`,
        options: [r`20 mmHg·s/mL`, r`30 mmHg·s/mL`, r`10 mmHg·s/mL`, r`90 mmHg·s/mL`],
        correctAnswer: 2,
        explanation: r`The artery's drop is the total minus the bed's share, 90 − 60 = 30 mmHg, so its resistance is 30 ÷ 3.0 = 10 mmHg·s/mL. The value 20 is the bed's resistance, from 60 ÷ 3.0, and 30 is the resistance of the pair. The value 90 multiplies the artery's drop by the flow.`,
      },
      {
        question: r`An artery of 2.0 mmHg·s/mL feeds a tissue bed of 8.0 mmHg·s/mL in series, with 100 mmHg held across the pair. Plaque then raises the artery's resistance to 12 mmHg·s/mL, and the bed does not change. How does the pressure difference across the bed change?`,
        options: [r`From 100 mmHg to 40 mmHg`, r`From 20 mmHg to 60 mmHg`, r`From 98 mmHg to 88 mmHg`, r`From 80 mmHg to 40 mmHg`],
        correctAnswer: 3,
        explanation: r`Before, the flow is 100 ÷ 10 = 10 mL/s and the bed has 100 − 10 × 2.0 = 80 mmHg. After, the flow is 100 ÷ 20 = 5.0 mL/s and the bed has 100 − 5.0 × 12 = 40 mmHg. Starting from 100 mmHg ignores the artery's first drop. 20 to 60 mmHg are the artery's drops, and 98 to 88 mmHg subtract the resistances themselves.`,
      },
      {
        question: r`After a narrowing, an artery's resistance is 3 times that of the tissue bed it feeds in series. What fraction of the total pressure difference across the pair is left across the bed?`,
        options: [r`One-quarter of the total`, r`One-third of the total`, r`Three-quarters of the total`, r`One-half of the total`],
        correctAnswer: 0,
        explanation: r`Call the bed's resistance $R$. The total is $3R + R = 4R$, the same flow passes through both, and the artery's drop is three-quarters of the total, leaving one-quarter across the bed. One-third compares the bed with the artery instead of with the total. Three-quarters is the artery's share, and one-half would need equal resistances.`,
      },
      {
        question: r`A narrowed artery of 18 mmHg·s/mL feeds a tissue bed in series. The pressure difference across the pair is 96 mmHg, and the flow is 120 mL/min. What pressure difference is left across the bed?`,
        options: [r`36 mmHg`, r`78 mmHg`, r`132 mmHg`, r`60 mmHg`],
        correctAnswer: 3,
        explanation: r`120 mL/min is 2.0 mL/s, so the artery's drop is 2.0 × 18 = 36 mmHg and the bed is left with 96 − 36 = 60 mmHg. 36 mmHg is the artery's drop, not the bed's. 78 mmHg subtracts the resistance without multiplying by the flow, and 132 mmHg adds the drop instead of subtracting it.`,
      },
    ],
  },
}
