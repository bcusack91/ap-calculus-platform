import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for a vessel's resistance to flow, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A researcher divides the pressure difference across a glass capillary tube, in pascals, by the flow through it, in cubic meters per second. Which quantity has she found, and in what unit?`,
        options: [r`The resistance $R$, in Pa·m³/s`, r`The resistance $R$, in Pa·s/m³`, r`The viscosity $\eta$, in Pa·s/m³`, r`The viscosity $\eta$, in Pa·m³/s`],
        correctAnswer: 1,
        explanation: r`Resistance to flow is the pressure difference needed per unit of flow, so $R$ = Pa ÷ (m³/s) = Pa·s/m³. Pa·m³/s is what multiplying pressure by flow gives. Viscosity $\eta$ is a property of the liquid alone, measured in Pa·s, and is not found by dividing a pressure difference by a flow.`,
      },
      {
        question: r`A chart lists the resistance of a patient's leg circulation as 0.30 mmHg·s/mL. What does that number say about the leg's vessels?`,
        options: [r`Each mmHg of pressure difference drives a flow of 0.30 mL/s`, r`Each mL/s of flow needs a pressure difference of 0.30 mmHg`, r`Each mL of blood held in the leg loses 0.30 mmHg of pressure`, r`Each second spent in the leg costs the blood 0.30 mmHg more`],
        correctAnswer: 1,
        explanation: r`Resistance $R$ is the pressure difference needed per unit of flow, so 0.30 mmHg·s/mL means 0.30 mmHg for every mL/s passing through. Flow per mmHg is the inverse of resistance. The other two readings tie the pressure to a volume held or to a time spent, and resistance is neither of those.`,
      },
    ],
  },
  [r`What is Ohm's law for fluids?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a dialysis machine, blood passes at 0.40 L/min through a filter cartridge whose resistance is 50 mmHg·min/L. What pressure difference is across the cartridge?`,
        options: [r`125 mmHg`, r`0.0080 mmHg`, r`20 mmHg`, r`50.4 mmHg`],
        correctAnswer: 2,
        explanation: r`$\Delta P = QR$ = 0.40 L/min × 50 mmHg·min/L = 20 mmHg. 125 mmHg divides the resistance by the flow, 0.0080 mmHg divides the flow by the resistance, and 50.4 mmHg adds the two numbers.`,
      },
      {
        question: r`Blood enters a kidney from an artery at 90 mmHg and leaves through a vein at 10 mmHg. The flow through the kidney is 1.25 L/min. What is the kidney's resistance to flow?`,
        options: [r`64 mmHg·min/L`, r`72 mmHg·min/L`, r`80 mmHg·min/L`, r`100 mmHg·min/L`],
        correctAnswer: 0,
        explanation: r`The pressure difference is 90 − 10 = 80 mmHg, so $R = \Delta P / Q$ = 80 ÷ 1.25 = 64 mmHg·min/L. 72 uses the arterial pressure alone, 80 adds the two pressures before dividing, and 100 multiplies the pressure difference by the flow.`,
      },
      {
        question: r`A heart-lung machine holds a pressure difference of 40 mmHg across a tube set whose resistance is 0.50 mmHg·s/mL. What is the flow through the tube set, in liters per minute?`,
        options: [r`80 L/min`, r`4.8 L/min`, r`1.2 L/min`, r`0.080 L/min`],
        correctAnswer: 1,
        explanation: r`$Q = \Delta P / R$ = 40 ÷ 0.50 = 80 mL/s, and 80 mL/s × 60 s/min = 4,800 mL/min = 4.8 L/min. 80 L/min leaves the answer in mL/s. 1.2 L/min multiplies 40 by 0.50 instead of dividing, and 0.080 L/min converts mL to L but not seconds to minutes.`,
      },
      {
        question: r`When a runner starts a sprint, the pressure difference across a leg muscle's vessels doubles and the vessels dilate until their resistance is half of its resting value. How does the flow through the muscle change?`,
        options: [r`It becomes 4 times as large`, r`It becomes 2 times as large`, r`It stays the same as at rest`, r`It becomes one-quarter as large`],
        correctAnswer: 0,
        explanation: r`$Q = \Delta P / R$, so doubling the pressure difference and halving the resistance gives 2 ÷ ½ = 4 times the flow. A factor of 2 counts only one of the two changes. No change comes from multiplying the two factors, as if flow were $\Delta P \times R$, and one-quarter inverts the result.`,
      },
      {
        question: r`A syringe pump holds a pressure difference of 2.0 × 10³ Pa across a fine tube whose resistance is 4.0 × 10⁸ Pa·s/m³. What is the flow through the tube?`,
        options: [r`2.0 × 10⁵ m³/s`, r`8.0 × 10¹¹ m³/s`, r`5.0 × 10⁻⁵ m³/s`, r`5.0 × 10⁻⁶ m³/s`],
        correctAnswer: 3,
        explanation: r`$Q = \Delta P / R$ = (2.0 × 10³) ÷ (4.0 × 10⁸) = 0.50 × 10⁻⁵ = 5.0 × 10⁻⁶ m³/s. 2.0 × 10⁵ divides the resistance by the pressure difference, 8.0 × 10¹¹ multiplies them, and 5.0 × 10⁻⁵ slips a power of ten.`,
      },
      {
        question: r`A ventricular assist pump pushes a fixed 4.0 L/min through a graft, with a pressure difference of 12 mmHg across the graft. The graft kinks, which makes its resistance 2.5 times as large, and the pump still delivers 4.0 L/min. What is the pressure difference across the graft now?`,
        options: [r`4.8 mmHg`, r`30 mmHg`, r`12 mmHg`, r`10 mmHg`],
        correctAnswer: 1,
        explanation: r`With the flow fixed, $\Delta P = QR$ rises in step with the resistance: 12 mmHg × 2.5 = 30 mmHg. 4.8 mmHg divides by 2.5, which would be right for the flow if the pressure were fixed. 12 mmHg assumes nothing changes, and 10 mmHg multiplies the flow of 4.0 by 2.5.`,
      },
    ],
  },
  [r`What is the resistance of a single vessel to laminar flow?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Plaque has narrowed a segment of a coronary artery to a radius of 1.0 mm, and the segment's resistance is 162 units. A stent opens the segment to a radius of 3.0 mm. Its length and the blood's viscosity are unchanged and the flow stays laminar. What is the segment's resistance now?`,
        options: [r`54 units`, r`2 units`, r`18 units`, r`6 units`],
        correctAnswer: 1,
        explanation: r`$R = 8\eta L/(\pi r^4)$, so tripling the radius divides the resistance by 3⁴ = 81: 162 ÷ 81 = 2 units. 54 units divides by 3, as if $R$ went as $1/r$. 18 units divides by 3² = 9, and 6 units divides by 3³ = 27.`,
      },
      {
        question: r`A feeding tube has a resistance of 20 units. It is replaced by a tube of the same radius that is three times as long, and the liquid is changed to one with half the viscosity. The flow stays laminar. What is the resistance now?`,
        options: [r`30 units`, r`120 units`, r`3.3 units`, r`13.3 units`],
        correctAnswer: 0,
        explanation: r`$R = 8\eta L/(\pi r^4)$ goes as viscosity times length, so the factor is ½ × 3 = 1.5 and the resistance is 20 × 1.5 = 30 units. 120 units multiplies by 3 and by 2, and 3.3 units divides by both. 13.3 units puts the length on the bottom and the viscosity on top.`,
      },
      {
        question: r`A nurse wants a needle with one-sixteenth of the resistance of the one she has, for the same liquid and the same needle length, with laminar flow. By what factor must the needle's internal radius increase?`,
        options: [r`A factor of 4`, r`A factor of 16`, r`A factor of 2`, r`A factor of 8`],
        correctAnswer: 2,
        explanation: r`Resistance goes as $1/r^4$, so the radius must rise by the fourth root of 16, which is 2 (2⁴ = 16). A factor of 4 treats the resistance as $1/r^2$, and a factor of 16 treats it as $1/r$. A factor of 8 halves the 16 instead of taking a root.`,
      },
      {
        question: r`Two needles of the same length carry the same drug solution in laminar flow. Needle A has an internal radius of 0.20 mm and needle B has an internal radius of 0.60 mm. How does A's resistance compare with B's?`,
        options: [r`A has 9 times the resistance of B`, r`A has 3 times the resistance of B`, r`A has 1/81 of the resistance of B`, r`A has 81 times the resistance of B`],
        correctAnswer: 3,
        explanation: r`B's radius is 3 times A's, and resistance goes as $1/r^4$, so the narrower needle A has 3⁴ = 81 times the resistance. 9 times uses $r^2$, the ratio of the areas, and 3 times uses the radius itself. 1/81 has the right number but gives the larger resistance to the wider needle.`,
      },
      {
        question: r`A vessel has a radius of 1.0 × 10⁻³ m and a length of 0.10 m, and the blood in it has a viscosity of 3.14 × 10⁻³ Pa·s. Taking π = 3.14 and laminar flow, what is the vessel's resistance, $8\eta L/(\pi r^4)$?`,
        options: [r`8.0 × 10⁵ Pa·s/m³`, r`8.0 × 10² Pa·s/m³`, r`8.0 × 10⁸ Pa·s/m³`, r`8.0 × 10⁻¹ Pa·s/m³`],
        correctAnswer: 2,
        explanation: r`The top is 8 × (3.14 × 10⁻³) × 0.10 and the bottom is 3.14 × (10⁻³)⁴ = 3.14 × 10⁻¹², so $R$ = (8 × 10⁻⁴) ÷ 10⁻¹² = 8.0 × 10⁸ Pa·s/m³. The other values raise the radius to the third, second or first power instead of the fourth.`,
      },
      {
        question: r`Two tubes of the same radius carry the same oil in laminar flow. Tube A is 12 cm long and has a resistance of 30 units. Tube B has a resistance of 75 units. How long is tube B?`,
        options: [r`4.8 cm`, r`57 cm`, r`19 cm`, r`30 cm`],
        correctAnswer: 3,
        explanation: r`With the viscosity and the radius the same, resistance is proportional to length: 12 cm × (75 ÷ 30) = 12 × 2.5 = 30 cm. 4.8 cm inverts the ratio. 57 cm adds the 45-unit difference to the length, and 19 cm takes the square root of 2.5 before multiplying.`,
      },
    ],
  },
  [r`How does $\Delta P = QR$ apply to the whole systemic circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`On an easy walk a woman's heart pumps 6.0 L/min into systemic vessels whose combined resistance is 15 mmHg·min/L. With the right atrium at about 0 mmHg, what is the mean pressure in her arteries?`,
        options: [r`2.5 mmHg`, r`0.40 mmHg`, r`21 mmHg`, r`90 mmHg`],
        correctAnswer: 3,
        explanation: r`Mean arterial pressure ≈ cardiac output × total peripheral resistance = 6.0 × 15 = 90 mmHg. 2.5 mmHg divides the resistance by the output, 0.40 mmHg divides the output by the resistance, and 21 mmHg adds the two numbers.`,
      },
      {
        question: r`A wrist monitor estimates a hiker's mean arterial pressure as 84 mmHg, and his systemic vessels together have a resistance of 12 mmHg·min/L. With the right atrium at about 0 mmHg, how much blood does his heart pump each minute?`,
        options: [r`0.14 L/min`, r`72 L/min`, r`7.0 L/min`, r`1,008 L/min`],
        correctAnswer: 2,
        explanation: r`Cardiac output = mean arterial pressure ÷ total peripheral resistance = 84 ÷ 12 = 7.0 L/min. 0.14 L/min divides the resistance by the pressure, 72 L/min subtracts the two numbers, and 1,008 L/min multiplies them.`,
      },
      {
        question: r`A monitor reports a total peripheral resistance of 0.90 mmHg·s/mL and a mean arterial pressure of 90 mmHg. Taking the right atrial pressure as zero, what is the cardiac output in liters per minute?`,
        options: [r`6.0 L/min`, r`100 L/min`, r`1.7 L/min`, r`0.10 L/min`],
        correctAnswer: 0,
        explanation: r`The flow is 90 ÷ 0.90 = 100 mL/s, and 100 mL/s × 60 s/min = 6,000 mL/min = 6.0 L/min. 100 L/min leaves the answer in mL/s. 1.7 L/min divides by 60 instead of multiplying, and 0.10 L/min converts mL to L but not seconds to minutes.`,
      },
      {
        question: r`In a patient with heart failure the mean arterial pressure is 95 mmHg, the right atrial pressure has risen to 5 mmHg, and the cardiac output is 5.0 L/min. What is the total peripheral resistance?`,
        options: [r`19 mmHg·min/L`, r`20 mmHg·min/L`, r`18 mmHg·min/L`, r`450 mmHg·min/L`],
        correctAnswer: 2,
        explanation: r`The pressure difference across the systemic circuit is the arterial pressure minus the right atrial pressure: 95 − 5 = 90 mmHg, and 90 ÷ 5.0 = 18 mmHg·min/L. 19 ignores the right atrial pressure, which is not close to zero here. 20 adds it, and 450 multiplies the pressure difference by the flow.`,
      },
      {
        question: r`During a rowing test an athlete's cardiac output doubles while the mean arterial pressure rises from 90 to 108 mmHg. The right atrial pressure is taken as zero. How does the total peripheral resistance compare with its resting value?`,
        options: [r`It falls to 50% of its resting value`, r`It rises to 120% of its resting value`, r`It rises to 240% of its resting value`, r`It falls to 60% of its resting value`],
        correctAnswer: 3,
        explanation: r`Resistance = pressure ÷ flow. The pressure is 108 ÷ 90 = 1.2 times as large and the flow is 2 times as large, so the resistance is 1.2 ÷ 2 = 0.60 of its resting value. 50% ignores the rise in pressure, 120% ignores the rise in flow, and 240% multiplies the two factors.`,
      },
      {
        question: r`After giving blood, a donor's heart pumps 4.0 L/min instead of its usual 5.0 L/min, and her vessels constrict just enough to keep the mean arterial pressure at 90 mmHg. With the right atrium at about 0 mmHg, what is the total peripheral resistance now?`,
        options: [r`18 mmHg·min/L`, r`22.5 mmHg·min/L`, r`14.4 mmHg·min/L`, r`360 mmHg·min/L`],
        correctAnswer: 1,
        explanation: r`Total peripheral resistance = pressure ÷ flow = 90 ÷ 4.0 = 22.5 mmHg·min/L. 18 is the value before she gave blood, 90 ÷ 5.0. 14.4 scales that old value down by 4/5 instead of up by 5/4, and 360 multiplies the pressure by the flow.`,
      },
    ],
  },
  [r`The body's vessels dilate while the cardiac output stays the same. What happens to the mean arterial pressure?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a patient with a severe allergic reaction the mean arterial pressure falls from 95 to 70 mmHg, while the measured cardiac output is unchanged. Which change in the vessels explains this?`,
        options: [r`Widespread dilation, raising total peripheral resistance`, r`Widespread constriction, lowering total peripheral resistance`, r`Widespread constriction, raising total peripheral resistance`, r`Widespread dilation, lowering total peripheral resistance`],
        correctAnswer: 3,
        explanation: r`Mean arterial pressure ≈ cardiac output × total peripheral resistance, so with the output unchanged a lower pressure means a lower resistance, and vessels lower their resistance by widening. Constriction raises resistance and would raise the pressure. Dilation never raises resistance, and constriction never lowers it.`,
      },
      {
        question: r`In septic shock a patient's vessels dilate until the total peripheral resistance is half of its normal value. Taking the right atrial pressure as zero, what must the cardiac output do to keep the mean arterial pressure at its normal value?`,
        options: [r`Rise to twice its normal value`, r`Fall to half its normal value`, r`Stay at its normal value`, r`Rise to four times its normal value`],
        correctAnswer: 0,
        explanation: r`The pressure is the cardiac output times the total peripheral resistance, so if the resistance halves the output has to double to keep the product the same. An unchanged output would let the pressure fall to half, and a halved output would let it fall to a quarter. Four times the output would double the pressure.`,
      },
    ],
  },
  [r`How do the vessel levels in series (artery, arteriole, capillary, venule, vein) combine?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A bypass circuit sends blood through an oxygenator (6 mmHg·min/L), a filter (3 mmHg·min/L) and a length of tubing (1.5 mmHg·min/L), connected in series. What is the circuit's total resistance?`,
        options: [r`0.86 mmHg·min/L`, r`3.5 mmHg·min/L`, r`10.5 mmHg·min/L`, r`27 mmHg·min/L`],
        correctAnswer: 2,
        explanation: r`Resistances in series add: 6 + 3 + 1.5 = 10.5 mmHg·min/L. 0.86 uses the reciprocal rule, which belongs to beds in parallel. 3.5 is the average of the three, and 27 is their product.`,
      },
      {
        question: r`Three vessel levels in series have resistances of 2, 9 and 3 mmHg·min/L. The pressure difference from the start of the first level to the end of the last is 84 mmHg. What is the flow through the levels?`,
        options: [r`9.3 L/min`, r`42 L/min`, r`0.17 L/min`, r`6.0 L/min`],
        correctAnswer: 3,
        explanation: r`The total resistance is 2 + 9 + 3 = 14 mmHg·min/L, and the one flow that all three levels share is 84 ÷ 14 = 6.0 L/min. 9.3 L/min and 42 L/min divide the whole pressure difference by a single level's resistance. 0.17 L/min divides the resistance by the pressure.`,
      },
      {
        question: r`In a model circulation, 5.0 L/min flows through arteries, arterioles and then the remaining vessels, all in series, with a total pressure difference of 90 mmHg. The arteries have 1 mmHg·min/L and the remaining vessels 5 mmHg·min/L. What is the resistance of the arterioles?`,
        options: [r`12 mmHg·min/L`, r`18 mmHg·min/L`, r`24 mmHg·min/L`, r`6 mmHg·min/L`],
        correctAnswer: 0,
        explanation: r`The total resistance is 90 ÷ 5.0 = 18 mmHg·min/L, and resistances in series add, so the arterioles hold 18 − 1 − 5 = 12 mmHg·min/L. 18 is the total, with nothing subtracted. 24 adds the other levels instead of subtracting them, and 6 is just the sum of the other levels.`,
      },
      {
        question: r`Blood flows through three vessel levels in series with resistances of 1.5, 8 and 2.5 mmHg·min/L. What fraction of the total pressure drop falls across the 8 mmHg·min/L level?`,
        options: [r`Two-thirds of the total drop`, r`One-third of the total drop`, r`One-eighth of the total drop`, r`One-twelfth of the total drop`],
        correctAnswer: 0,
        explanation: r`The same flow passes through every level, so each drop is in proportion to its resistance. The total is 1.5 + 8 + 2.5 = 12, and the 8 level takes 8 ÷ 12 = two-thirds of the drop. One-third shares the drop equally among three levels, and one-eighth and one-twelfth invert a resistance.`,
      },
      {
        question: r`Three levels of an organ's vessels are in series, with resistances of 2, 6 and 4 units. A drug doubles the resistance of the 6-unit level, and a pump keeps the flow the same. How does the pressure difference across the whole set change?`,
        options: [r`It becomes 2 times as large`, r`It becomes 3 times as large`, r`It stays the same as before`, r`It becomes 1.5 times as large`],
        correctAnswer: 3,
        explanation: r`The total resistance goes from 2 + 6 + 4 = 12 units to 2 + 12 + 4 = 18 units, and with the same flow the pressure difference rises by 18 ÷ 12 = 1.5. A factor of 2 would need every level to double, not one. A factor of 3 compares the new total, 18, with the 6-unit level alone, and no change ignores the rise in the series total.`,
      },
      {
        question: r`A patient's arteries, arterioles and remaining vessels are in series, with resistances of 0.10, 0.70 and 0.20 mmHg·s/mL. The cardiac output is 6.0 L/min. What is the pressure difference across the whole set?`,
        options: [r`6.0 mmHg`, r`100 mmHg`, r`70 mmHg`, r`360 mmHg`],
        correctAnswer: 1,
        explanation: r`The total resistance is 0.10 + 0.70 + 0.20 = 1.0 mmHg·s/mL, and 6.0 L/min = 6,000 mL ÷ 60 s = 100 mL/s, so the pressure difference is 100 × 1.0 = 100 mmHg. 6.0 mmHg skips the unit conversion, 70 mmHg uses only the largest level, and 360 mmHg multiplies 6.0 by 60.`,
      },
    ],
  },
  [r`How do organ beds in parallel combine?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two organ beds are supplied in parallel from the same artery and drain into the same vein. Their resistances are 40 and 60 mmHg·min/L. What is their combined resistance?`,
        options: [r`100 mmHg·min/L`, r`50 mmHg·min/L`, r`0.042 mmHg·min/L`, r`24 mmHg·min/L`],
        correctAnswer: 3,
        explanation: r`Reciprocals add for beds in parallel: 1/40 + 1/60 = 5/120, so the combined resistance is 120 ÷ 5 = 24 mmHg·min/L, lower than either bed. 100 adds the resistances as if they were in series. 50 is their average, and 0.042 is the reciprocal sum left unflipped.`,
      },
      {
        question: r`A dialysis cartridge splits the blood among three bundles of fibers in parallel, with resistances of 12, 24 and 8 mmHg·min/L. What is the cartridge's combined resistance?`,
        options: [r`44 mmHg·min/L`, r`14.7 mmHg·min/L`, r`4.0 mmHg·min/L`, r`0.25 mmHg·min/L`],
        correctAnswer: 2,
        explanation: r`1/12 + 1/24 + 1/8 = 2/24 + 1/24 + 3/24 = 6/24, so the combined resistance is 24 ÷ 6 = 4.0 mmHg·min/L, below the smallest bundle's 8. 44 adds the three as if in series, 14.7 is their average, and 0.25 is the reciprocal sum left unflipped.`,
      },
      {
        question: r`Two organ beds in parallel have a combined resistance of 12 mmHg·min/L. One of the beds has a resistance of 20 mmHg·min/L. What is the resistance of the other bed?`,
        options: [r`30 mmHg·min/L`, r`8.0 mmHg·min/L`, r`32 mmHg·min/L`, r`7.5 mmHg·min/L`],
        correctAnswer: 0,
        explanation: r`1/12 − 1/20 = 5/60 − 3/60 = 2/60, so the other bed is 60 ÷ 2 = 30 mmHg·min/L. 8.0 subtracts the resistances directly, and 32 adds them. 7.5 combines 12 and 20 in parallel, which answers a different question.`,
      },
      {
        question: r`Beds A and B are in parallel. A has a resistance of 60 units and B has 30 units. A's vessels then dilate until A is also 30 units, and B does not change. How does the combined resistance of the pair change?`,
        options: [r`It falls to one-half of its old value`, r`It falls to three-quarters of its old value`, r`It falls to two-thirds of its old value`, r`It rises to four-thirds of its old value`],
        correctAnswer: 1,
        explanation: r`Before: 1/60 + 1/30 = 3/60, so 20 units. After: two 30-unit beds in parallel give 15 units, and 15 ÷ 20 = three-quarters. One-half copies the change in bed A alone. Two-thirds comes from adding the beds as if in series (90 to 60), and four-thirds inverts the ratio.`,
      },
      {
        question: r`Two tubes join the same two chambers of a lab-on-a-chip device, so they are in parallel. Their resistances are 2.0 × 10⁸ and 3.0 × 10⁸ Pa·s/m³. What is their combined resistance?`,
        options: [r`1.2 × 10⁸ Pa·s/m³`, r`5.0 × 10⁸ Pa·s/m³`, r`2.5 × 10⁸ Pa·s/m³`, r`8.3 × 10⁻⁹ Pa·s/m³`],
        correctAnswer: 0,
        explanation: r`1/(2.0 × 10⁸) + 1/(3.0 × 10⁸) = (5/6) × 10⁻⁸, and flipping it gives (6/5) × 10⁸ = 1.2 × 10⁸ Pa·s/m³. 5.0 × 10⁸ adds the resistances as if in series, 2.5 × 10⁸ averages them, and 8.3 × 10⁻⁹ is the reciprocal sum left unflipped.`,
      },
      {
        question: r`In an animal model the heart pumps 6.0 L/min into two beds in parallel, with resistances of 20 and 30 mmHg·min/L, and both drain to a vein at 0 mmHg. What is the arterial pressure that supplies the two beds?`,
        options: [r`300 mmHg`, r`150 mmHg`, r`72 mmHg`, r`2.0 mmHg`],
        correctAnswer: 2,
        explanation: r`The beds combine to (20 × 30) ÷ (20 + 30) = 12 mmHg·min/L, and the pressure is 6.0 × 12 = 72 mmHg. 300 mmHg adds the resistances to 50 as if in series. 150 mmHg uses their average of 25, and 2.0 mmHg divides the combined resistance by the flow.`,
      },
    ],
  },
  [r`What is the common trap when a parallel organ bed is opened or closed?`]: {
    kind: 'concept',
    more: [
      {
        question: r`At the start of exercise, extra muscle beds open in parallel with the beds that were already open, and for a moment the cardiac output has not yet changed. What happens to the total peripheral resistance and the mean arterial pressure?`,
        options: [r`The resistance falls, and the pressure falls`, r`The resistance rises, and the pressure rises`, r`The resistance falls, and the pressure rises`, r`The resistance rises, and the pressure falls`],
        correctAnswer: 0,
        explanation: r`Another bed in parallel is another path for the blood, so the total peripheral resistance falls, and with the same cardiac output the pressure, output × resistance, falls with it. Saying the resistance rises is the trap of adding parallel resistances. A pressure that moves opposite to the resistance contradicts pressure = output × resistance at a fixed output.`,
      },
      {
        question: r`A patient's systemic beds, all in parallel, have a combined resistance of 18 mmHg·min/L. One of them is a leg bed of 90 mmHg·min/L. A surgeon clamps the artery to that leg, closing the bed, and the other beds do not adjust. What happens to the total peripheral resistance?`,
        options: [r`It falls to 15 mmHg·min/L`, r`It rises to 108 mmHg·min/L`, r`It rises to 22.5 mmHg·min/L`, r`It falls to 72 mmHg·min/L`],
        correctAnswer: 2,
        explanation: r`Closing a parallel bed removes a path, so the total rises: 1/18 − 1/90 = 5/90 − 1/90 = 4/90, and 90 ÷ 4 = 22.5 mmHg·min/L. 15 is what adding a second 90 bed in parallel would give. 108 adds the two numbers and 72 subtracts them, both treating the beds as if they were in series.`,
      },
    ],
  },
  [r`Where does the pressure fall most steeply in the systemic circuit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Mean pressures along one patient's systemic circuit are 95 mmHg in the aorta, 90 mmHg at the end of the large arteries, 35 mmHg at the end of the arterioles, 15 mmHg at the end of the capillaries and 2 mmHg in the right atrium. The same flow passes through each level. Which level has the most resistance?`,
        options: [r`The capillaries, where the drop is 20 mmHg`, r`The arterioles, where the drop is 55 mmHg`, r`The large arteries, where the drop is 5 mmHg`, r`The veins, where the drop is 13 mmHg`],
        correctAnswer: 1,
        explanation: r`With the same flow through every level, the level with the largest pressure drop has the most resistance, and that is the arterioles: 90 − 35 = 55 mmHg. The capillaries are narrower but so numerous that their level drops only 20 mmHg. The large arteries (5 mmHg) and the veins (13 mmHg) are wide and take small drops.`,
      },
      {
        question: r`A graph shows mean blood pressure against distance along the systemic circuit, from the aorta to the right atrium. Which description fits the shape of the curve?`,
        options: [r`Nearly flat, a steep fall in the arterioles, then a gentle slope`, r`Nearly flat, a steep fall in the capillaries, then nearly flat`, r`A steep fall in the large arteries, then nearly flat to the end`, r`One steady, even slope from the aorta to the right atrium`],
        correctAnswer: 0,
        explanation: r`The pressure barely falls in the large arteries, drops from about 90 to about 35 mmHg across the arterioles, and then slopes gently through the capillaries and veins. Putting the steep fall in the capillaries or in the large arteries misplaces the main resistance. An even slope would mean every stretch of the circuit had the same resistance.`,
      },
    ],
  },
  [r`Why is blood slowest in the capillaries?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a dog, the capillaries' total cross-sectional area is 800 times the cross-sectional area of the aorta, and all of the flow from the aorta passes through them. The blood's average speed in the aorta is 40 cm/s. What is its average speed in the capillaries?`,
        options: [r`32,000 cm/s`, r`40 cm/s`, r`0.50 cm/s`, r`0.050 cm/s`],
        correctAnswer: 3,
        explanation: r`By continuity, total area × speed is the same at both levels, so 800 times the area means 1/800 of the speed: 40 ÷ 800 = 0.050 cm/s. 32,000 cm/s multiplies by 800 instead of dividing. 40 cm/s ignores the change in total area, and 0.50 cm/s slips a power of ten.`,
      },
      {
        question: r`A student argues: “A capillary is the narrowest vessel in the body, and continuity says a liquid speeds up in a narrower pipe, so blood must be fastest in the capillaries.” What is wrong with the argument?`,
        options: [r`Continuity uses the total volume of all the capillaries, which is the largest`, r`Continuity uses the total area of all the capillaries, which is the largest`, r`Continuity fails in a vessel as narrow as a capillary, where viscosity rules`, r`Continuity applies only to an ideal liquid, and blood is a viscous liquid`],
        correctAnswer: 1,
        explanation: r`The flow from one artery is shared among a huge number of capillaries, so the area that matters is their total cross-sectional area, which is the largest in the circuit, and the speed is lowest there. Continuity is about area, not volume. It is conservation of volume flow, so it holds for viscous blood and in narrow vessels too.`,
      },
    ],
  },
  [r`Why are the arterioles the body's control valves?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Which pair of facts explains why the arterioles, more than any other vessels, set how much blood each organ receives?`,
        options: [r`Smooth muscle changes their radius, and resistance goes as $1/r^2$`, r`Elastic tissue changes their length, and resistance goes as $1/L^4$`, r`Elastic tissue changes their radius, and resistance goes as $1/r$`, r`Smooth muscle changes their radius, and resistance goes as $1/r^4$`],
        correctAnswer: 3,
        explanation: r`Arteriole walls contain smooth muscle that can narrow or widen the vessel, and because resistance goes as $1/r^4$ a small change in radius is a large change in resistance. The dependence on radius is the fourth power, not the first or second. Resistance is proportional to length, and the body does not control flow by changing vessel length.`,
      },
      {
        question: r`Smooth muscle narrows the arterioles of one organ bed by 10% in radius. Their length and the blood's viscosity are unchanged and the flow stays laminar. Using 0.9⁴ ≈ 0.66, how does the resistance of these arterioles change?`,
        options: [r`It rises by about 10%`, r`It rises by about 20%`, r`It falls by about 34%`, r`It rises by about 50%`],
        correctAnswer: 3,
        explanation: r`Resistance goes as $1/r^4$, so the new resistance is 1 ÷ 0.66 ≈ 1.5 times the old one, a rise of about 50% from only a 10% narrowing. A 10% rise treats resistance as $1/r$, and about 20% treats it as $1/r^2$. A 34% fall multiplies by 0.66 instead of dividing, as if narrowing lowered resistance.`,
      },
    ],
  },
  [r`One organ's arterioles constrict. Where does the blood go?`]: {
    kind: 'concept',
    more: [
      {
        question: r`During a hard run, the flow through a runner's gut falls while the flow through every other organ bed, all in parallel with the gut, rises slightly. Taking the cardiac output as unchanged, which single change explains both observations?`,
        options: [r`The gut's arterioles dilated, lowering its resistance`, r`The gut's arterioles constricted, raising its resistance`, r`The other beds' arterioles constricted, raising theirs`, r`The gut's capillaries multiplied, lowering its resistance`],
        correctAnswer: 1,
        explanation: r`A constricted bed has more resistance, so it takes less of the flow, and with the same cardiac output the blood is diverted to the beds in parallel with it. A lower gut resistance, by dilation or by extra capillaries, would bring the gut more flow. Constricting the other beds would push blood toward the gut, not away from it.`,
      },
      {
        question: r`The arterioles of one organ bed constrict while the cardiac output stays the same. The other beds, in parallel with it, do not change their vessels, yet each receives more flow. Why?`,
        options: [r`The arterial pressure falls, and their resistances are the same`, r`Their resistances fall, and the arterial pressure is the same`, r`The arterial pressure rises, and their resistances are the same`, r`Their resistances rise, and the arterial pressure is the same`],
        correctAnswer: 2,
        explanation: r`The constriction raises the combined resistance, so the same cardiac output needs a higher arterial pressure, and that higher pressure across each unchanged bed drives more flow through it. A lower pressure would cut their flow. The other beds' resistances do not change, because their vessels did not change.`,
      },
    ],
  },
  [r`What drives air through the airways, and why does asthma cut airflow so sharply?`]: {
    kind: 'concept',
    more: [
      {
        question: r`During an asthma attack a patient's airways narrow to two-thirds of their normal radius, and the patient produces the same pressure difference between the atmosphere and the alveoli. With laminar flow, the airflow is about what fraction of normal?`,
        options: [r`About two-thirds of normal`, r`About one-fifth of normal`, r`About four-ninths of normal`, r`About three-tenths of normal`],
        correctAnswer: 1,
        explanation: r`Airway resistance goes as $1/r^4$, so at the same pressure difference the flow goes as $r^4$: (2/3)⁴ = 16/81, which is about one-fifth. Two-thirds uses the radius itself. Four-ninths uses $r^2$, the area, and three-tenths uses $r^3$ (8/27).`,
      },
      {
        question: r`Midway through a quiet breath in, air is moving steadily into the lungs through the open airways. How does the pressure in the alveoli compare with atmospheric pressure at that moment?`,
        options: [r`It is above atmospheric, and the difference drives air in`, r`It equals atmospheric, and the diaphragm pulls the air in`, r`It equals atmospheric, and airway muscle pumps the air in`, r`It is below atmospheric, and the difference drives air in`],
        correctAnswer: 3,
        explanation: r`Air, like blood, flows only down a pressure difference, from higher to lower pressure. Air moving inward means the alveolar pressure is below atmospheric. A higher alveolar pressure would push air out, as in breathing out, and equal pressures would give no flow at all: the diaphragm moves air by creating the pressure difference.`,
      },
    ],
  },
  [r`How do you find total peripheral resistance from a patient's numbers?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A woman with hypertension has a mean arterial pressure of 100 mmHg while her heart pumps 4.0 L/min. With the right atrium at about 0 mmHg, what is her total peripheral resistance?`,
        options: [r`400 mmHg·min/L`, r`0.040 mmHg·min/L`, r`25 mmHg·min/L`, r`96 mmHg·min/L`],
        correctAnswer: 2,
        explanation: r`TPR = MAP ÷ CO = 100 ÷ 4.0 = 25 mmHg·min/L. 400 multiplies the pressure by the output, 0.040 divides the output by the pressure, and 96 subtracts the two numbers.`,
      },
      {
        question: r`At peak effort a cyclist's heart pumps 15 L/min and the mean pressure in his arteries is 105 mmHg. With the right atrium at about 0 mmHg, what combined resistance do his systemic vessels present?`,
        options: [r`1,575 mmHg·min/L`, r`0.14 mmHg·min/L`, r`90 mmHg·min/L`, r`7.0 mmHg·min/L`],
        correctAnswer: 3,
        explanation: r`TPR = MAP ÷ CO = 105 ÷ 15 = 7.0 mmHg·min/L, a low value because so many muscle beds are open. 1,575 multiplies the two numbers, 0.14 divides the output by the pressure, and 90 subtracts them.`,
      },
      {
        question: r`During surgery a monitor shows a mean arterial pressure of 90 mmHg while the heart pumps 6.0 L/min. With the right atrium at about 0 mmHg, what is the total peripheral resistance in mmHg·s/mL?`,
        options: [r`15 mmHg·s/mL`, r`0.90 mmHg·s/mL`, r`0.015 mmHg·s/mL`, r`9.0 mmHg·s/mL`],
        correctAnswer: 1,
        explanation: r`6.0 L/min = 6,000 mL ÷ 60 s = 100 mL/s, so TPR = 90 ÷ 100 = 0.90 mmHg·s/mL. 15 is the value in mmHg·min/L with the wrong unit attached. 0.015 converts liters to mL but not minutes to seconds, and 9.0 slips a power of ten.`,
      },
      {
        question: r`A dye test shows that a patient's heart pumps 2.4 L of blood every 30 s. The mean arterial pressure is 96 mmHg and the right atrial pressure is taken as zero. What is the total peripheral resistance?`,
        options: [r`40 mmHg·min/L`, r`0.050 mmHg·min/L`, r`20 mmHg·min/L`, r`460 mmHg·min/L`],
        correctAnswer: 2,
        explanation: r`2.4 L in 30 s is a cardiac output of 4.8 L/min, so TPR = 96 ÷ 4.8 = 20 mmHg·min/L. 40 divides by 2.4 without converting to a flow per minute. 0.050 divides the output by the pressure, and 460 multiplies the two.`,
      },
      {
        question: r`Twin A's heart pumps 6.0 L/min at a mean arterial pressure of 90 mmHg. Twin B's heart pumps 4.0 L/min at a mean arterial pressure of 120 mmHg. Both right atria are at about 0 mmHg. How does B's total peripheral resistance compare with A's?`,
        options: [r`B's is 1.33 times A's`, r`B's is 2 times A's`, r`B's is 1.5 times A's`, r`B's is 0.5 times A's`],
        correctAnswer: 1,
        explanation: r`A's resistance is 90 ÷ 6.0 = 15 mmHg·min/L and B's is 120 ÷ 4.0 = 30 mmHg·min/L, which is 2 times as large. 1.33 compares only the pressures, 1.5 compares only the outputs, and 0.5 has the ratio upside down.`,
      },
      {
        question: r`Before a vasodilator, a man's heart pumps 4.5 L/min at a mean arterial pressure of 99 mmHg. Afterward it pumps 5.4 L/min at 81 mmHg. With the right atrium at about 0 mmHg throughout, how does his total peripheral resistance change?`,
        options: [r`It falls by 7.0 mmHg·min/L`, r`It rises by 7.0 mmHg·min/L`, r`It falls by 18 mmHg·min/L`, r`It falls by 20 mmHg·min/L`],
        correctAnswer: 0,
        explanation: r`Before: 99 ÷ 4.5 = 22 mmHg·min/L. After: 81 ÷ 5.4 = 15 mmHg·min/L. The resistance falls by 7.0 mmHg·min/L, as expected when vessels widen. A rise has the direction reversed, 18 is the change in pressure alone, and 20 divides that pressure change by the 0.9 L/min change in output.`,
      },
    ],
  },
  [r`How do you find the pressure drop across each vessel level in a series circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Blood flows at 6.0 L/min through vessel levels in series. The capillary level has a resistance of 2.5 mmHg·min/L. What is the pressure drop across the capillary level?`,
        options: [r`2.4 mmHg`, r`0.42 mmHg`, r`8.5 mmHg`, r`15 mmHg`],
        correctAnswer: 3,
        explanation: r`$\Delta P_i = QR_i$ = 6.0 × 2.5 = 15 mmHg. 2.4 mmHg divides the flow by the resistance, 0.42 mmHg divides the resistance by the flow, and 8.5 mmHg adds the two numbers.`,
      },
      {
        question: r`Blood flows at 4.0 L/min through vessel levels in series, and the pressure falls by 8.0 mmHg across the venules. What is the resistance of the venule level?`,
        options: [r`2.0 mmHg·min/L`, r`32 mmHg·min/L`, r`0.50 mmHg·min/L`, r`12 mmHg·min/L`],
        correctAnswer: 0,
        explanation: r`$R_i = \Delta P_i / Q$ = 8.0 ÷ 4.0 = 2.0 mmHg·min/L. 32 multiplies the drop by the flow, 0.50 divides the flow by the drop, and 12 adds the two numbers.`,
      },
      {
        question: r`In a set of vessel levels in series, the arterioles have a resistance of 11 mmHg·min/L and the pressure falls by 55 mmHg across them. The capillary level that follows has a resistance of 4 mmHg·min/L. What is the pressure drop across the capillaries?`,
        options: [r`220 mmHg`, r`51 mmHg`, r`20 mmHg`, r`14 mmHg`],
        correctAnswer: 2,
        explanation: r`The arterioles give the shared flow: 55 ÷ 11 = 5.0 L/min. The same flow passes through the capillaries, so their drop is 5.0 × 4 = 20 mmHg. 220 mmHg multiplies the arteriole drop by 4, 51 mmHg subtracts 4 from it, and 14 mmHg divides it by 4.`,
      },
      {
        question: r`Blood flows at 6.0 L/min through three vessel levels in series, and the pressure falls by 96 mmHg in total. The drops across the first two levels are 6 mmHg and 66 mmHg. What is the resistance of the third level?`,
        options: [r`16 mmHg·min/L`, r`4.0 mmHg·min/L`, r`24 mmHg·min/L`, r`144 mmHg·min/L`],
        correctAnswer: 1,
        explanation: r`The drops add up to the total, so the third level takes 96 − 6 − 66 = 24 mmHg, and its resistance is 24 ÷ 6.0 = 4.0 mmHg·min/L. 16 divides the whole 96 mmHg by the flow, which gives the total resistance. 24 is the drop, not the resistance, and 144 multiplies the drop by the flow.`,
      },
      {
        question: r`Blood flows at 100 mL/s through vessel levels in series. One level has a resistance of 7.5 mmHg·min/L. What is the pressure drop across that level?`,
        options: [r`45 mmHg`, r`750 mmHg`, r`12.5 mmHg`, r`0.75 mmHg`],
        correctAnswer: 0,
        explanation: r`100 mL/s × 60 s/min = 6,000 mL/min = 6.0 L/min, so the drop is 6.0 × 7.5 = 45 mmHg. 750 mmHg multiplies 100 by 7.5 without converting the flow. 12.5 mmHg mixes up the 60 and the 1,000 in the conversion, and 0.75 mmHg converts mL to liters but not seconds to minutes.`,
      },
      {
        question: r`Two vessel levels, X and Y, are in series, and X has 3 times the resistance of Y. The pressure falls by 12 mmHg across Y. What is the pressure drop across X?`,
        options: [r`4.0 mmHg`, r`12 mmHg`, r`36 mmHg`, r`15 mmHg`],
        correctAnswer: 2,
        explanation: r`The same flow passes through both levels, so each drop is that flow times the level's resistance, and X's drop is 3 × 12 = 36 mmHg. 4.0 mmHg gives the smaller drop to the larger resistance. 12 mmHg assumes equal drops, which is the rule for beds in parallel, and 15 mmHg adds 3 to 12.`,
      },
    ],
  },
  [r`How do you find the pressure at a point partway along a series of vessel levels?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Blood leaves the heart at a mean arterial pressure of 100 mmHg and flows at 5.0 L/min through the large arteries, whose resistance is 2.0 mmHg·min/L, before it reaches the arterioles. What is the pressure where the blood enters the arterioles?`,
        options: [r`10 mmHg`, r`90 mmHg`, r`98 mmHg`, r`110 mmHg`],
        correctAnswer: 1,
        explanation: r`The drop across the large arteries is 5.0 × 2.0 = 10 mmHg, and subtracting it from the arterial pressure gives 100 − 10 = 90 mmHg. 10 mmHg is the drop itself, not the pressure. 98 mmHg subtracts the resistance instead of the drop, and 110 mmHg adds the drop.`,
      },
      {
        question: r`Blood flows at 6.0 L/min from arteries at 96 mmHg through four levels in series, in this order: arteries 1.0, arterioles 9.0, capillaries 4.0 and veins 2.0 mmHg·min/L. What is the pressure where the blood leaves the capillaries and enters the veins?`,
        options: [r`12 mmHg`, r`84 mmHg`, r`72 mmHg`, r`36 mmHg`],
        correctAnswer: 0,
        explanation: r`Three levels are upstream of that point, with a combined drop of 6.0 × (1.0 + 9.0 + 4.0) = 84 mmHg, so the pressure is 96 − 84 = 12 mmHg. 84 mmHg is the drop, not the pressure. 72 mmHg subtracts only the capillaries' drop, and 36 mmHg is the pressure at the start of the capillaries.`,
      },
      {
        question: r`A probe reads 30 mmHg where blood enters the capillaries. The flow is 5.0 L/min, and upstream of the probe the blood has passed through the arteries (1.0 mmHg·min/L) and the arterioles (12 mmHg·min/L), in series. What is the arterial pressure at the start of the arteries?`,
        options: [r`95 mmHg`, r`90 mmHg`, r`65 mmHg`, r`35 mmHg`],
        correctAnswer: 0,
        explanation: r`The pressure at the probe is the arterial pressure minus the upstream drops, 5.0 × (1.0 + 12) = 65 mmHg, so the arterial pressure is 30 + 65 = 95 mmHg. 90 mmHg leaves out the drop across the arteries, and 35 mmHg leaves out the drop across the arterioles. 65 mmHg is the drop alone.`,
      },
      {
        question: r`Blood flows at 80 mL/s from arteries at 100 mmHg through the arteries (2.5 mmHg·min/L) and then the arterioles (7.5 mmHg·min/L), in series. What is the pressure where the blood leaves the arterioles?`,
        options: [r`48 mmHg`, r`64 mmHg`, r`52 mmHg`, r`88 mmHg`],
        correctAnswer: 2,
        explanation: r`80 mL/s × 60 s/min = 4,800 mL/min = 4.8 L/min. The upstream drop is 4.8 × (2.5 + 7.5) = 48 mmHg, so the pressure is 100 − 48 = 52 mmHg. 48 mmHg is the drop, not the pressure. 64 mmHg subtracts only the arterioles' drop, and 88 mmHg subtracts only the arteries' drop.`,
      },
      {
        question: r`Blood flows at 5.0 L/min from arteries at 95 mmHg through the arteries (1.0 mmHg·min/L) and then the arterioles, in series. A drug dilates the arterioles from 10 to 6.0 mmHg·min/L, while the flow and the arterial pressure are held the same. What is the pressure where the blood enters the capillaries now?`,
        options: [r`30 mmHg`, r`35 mmHg`, r`60 mmHg`, r`65 mmHg`],
        correctAnswer: 2,
        explanation: r`The upstream drops are now 5.0 × 1.0 = 5 mmHg and 5.0 × 6.0 = 30 mmHg, so the pressure is 95 − 5 − 30 = 60 mmHg, up from 40 mmHg. 30 mmHg is the arterioles' drop and 35 mmHg is the two drops together, neither subtracted from 95. 65 mmHg forgets the drop across the arteries.`,
      },
      {
        question: r`Blood flows at 4.0 L/min from arteries at 94 mmHg through the arteries (2.0 mmHg·min/L) and then the arterioles (12 mmHg·min/L), in series. The arterioles' resistance is spread evenly along their length. What is the pressure halfway along the arterioles?`,
        options: [r`38 mmHg`, r`62 mmHg`, r`86 mmHg`, r`70 mmHg`],
        correctAnswer: 1,
        explanation: r`Upstream of the halfway point are the arteries, with a drop of 4.0 × 2.0 = 8 mmHg, and half of the arterioles, with a drop of 4.0 × 6.0 = 24 mmHg, so the pressure is 94 − 8 − 24 = 62 mmHg. 38 mmHg subtracts the whole arteriole drop, 86 mmHg subtracts none of it, and 70 mmHg forgets the arteries.`,
      },
    ],
  },
  [r`How do you find the flow through each of several organ beds in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The brain's vessels have a resistance of 128 mmHg·min/L. The arterial pressure is 96 mmHg and the venous pressure is taken as zero. What is the flow through the brain?`,
        options: [r`1.3 L/min`, r`7.5 L/min`, r`0.75 L/min`, r`0.075 L/min`],
        correctAnswer: 2,
        explanation: r`$Q_i = \Delta P / R_i$ = 96 ÷ 128 = 0.75 L/min. 1.3 L/min divides the resistance by the pressure. 7.5 L/min and 0.075 L/min have the right digits with the decimal point one place off.`,
      },
      {
        question: r`Several organ beds in parallel share a pressure difference of 90 mmHg. One of them, a muscle bed, receives 1.5 L/min. What is that bed's resistance?`,
        options: [r`135 mmHg·min/L`, r`60 mmHg·min/L`, r`0.017 mmHg·min/L`, r`88.5 mmHg·min/L`],
        correctAnswer: 1,
        explanation: r`$R_i = \Delta P / Q_i$ = 90 ÷ 1.5 = 60 mmHg·min/L. 135 multiplies the pressure difference by the flow, 0.017 divides the flow by the pressure difference, and 88.5 subtracts the two numbers.`,
      },
      {
        question: r`During exercise three organ beds in parallel, with resistances of 24, 48 and 16 mmHg·min/L, are each supplied from arteries at 96 mmHg and drain to veins taken as 0 mmHg. What is the total flow through the three beds?`,
        options: [r`1.1 L/min`, r`6.0 L/min`, r`12 L/min`, r`4.0 L/min`],
        correctAnswer: 2,
        explanation: r`Each bed has the full 96 mmHg across it: 96 ÷ 24 = 4.0, 96 ÷ 48 = 2.0 and 96 ÷ 16 = 6.0 L/min, and the flows add to 12 L/min. 1.1 L/min adds the resistances to 88 as if in series. 6.0 L/min counts only the largest flow, and 4.0 L/min divides the total by the number of beds.`,
      },
      {
        question: r`Two organ beds in parallel have resistances of 30 and 120 mmHg·min/L. How does the flow through the 30 mmHg·min/L bed compare with the flow through the other bed?`,
        options: [r`It is 4 times the other bed's flow`, r`It is one-quarter of the other bed's flow`, r`It is 2 times the other bed's flow`, r`It is the same as the other bed's flow`],
        correctAnswer: 0,
        explanation: r`Both beds have the same pressure difference, and $Q_i = \Delta P / R_i$, so the bed with one-quarter of the resistance carries 4 times the flow. One-quarter gives the larger flow to the larger resistance. Twice the flow takes a square root that does not belong, and equal flows is the rule for levels in series.`,
      },
      {
        question: r`Beds A and B are in parallel. Bed A has a resistance of 40 mmHg·min/L and carries 2.0 L/min. Bed B has a resistance of 100 mmHg·min/L. What is the flow through bed B?`,
        options: [r`5.0 L/min`, r`2.0 L/min`, r`1.25 L/min`, r`0.80 L/min`],
        correctAnswer: 3,
        explanation: r`Bed A gives the shared pressure difference: 2.0 × 40 = 80 mmHg. Bed B has the same 80 mmHg across it, so its flow is 80 ÷ 100 = 0.80 L/min. 5.0 L/min scales the flow up by 100/40 instead of down. 2.0 L/min assumes equal flows, and 1.25 L/min divides the resistance by the pressure difference.`,
      },
      {
        question: r`A skin bed has a resistance of 3.0 mmHg·s/mL, and the pressure difference it shares with the other beds in parallel is 90 mmHg. What is the flow through the skin bed, in liters per minute?`,
        options: [r`30 L/min`, r`0.50 L/min`, r`0.030 L/min`, r`1.8 L/min`],
        correctAnswer: 3,
        explanation: r`$Q_i = \Delta P / R_i$ = 90 ÷ 3.0 = 30 mL/s, and 30 mL/s × 60 s/min = 1,800 mL/min = 1.8 L/min. 30 L/min leaves the answer in mL/s. 0.50 L/min divides by 60 instead of multiplying, and 0.030 L/min converts mL to liters but not seconds to minutes.`,
      },
    ],
  },
  [r`What is the combined resistance of $N$ identical beds in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A dialysis filter has 5 identical bundles of fibers in parallel, and each bundle alone has a resistance of 100 units. What is the filter's combined resistance?`,
        options: [r`500 units`, r`95 units`, r`0.050 units`, r`20 units`],
        correctAnswer: 3,
        explanation: r`Identical resistances in parallel combine to $R/N$ = 100 ÷ 5 = 20 units. 500 units multiplies by the number of bundles, which is the rule for series. 95 units subtracts 5 from 100, and 0.050 units divides the number of bundles by the resistance.`,
      },
      {
        question: r`One capillary network in a muscle has a resistance of 240 units. How many identical networks must be open in parallel for their combined resistance to be 15 units?`,
        options: [r`16 networks`, r`225 networks`, r`3,600 networks`, r`4 networks`],
        correctAnswer: 0,
        explanation: r`$R_{\text{total}} = R/N$, so $N$ = 240 ÷ 15 = 16 networks. 225 subtracts the two numbers and 3,600 multiplies them. 4 takes the square root of 16, which does not belong: the combined resistance falls in direct proportion to the number of identical networks.`,
      },
      {
        question: r`Four identical organ beds in parallel have a combined resistance of 15 units. What is the resistance of one bed alone?`,
        options: [r`3.75 units`, r`60 units`, r`19 units`, r`11 units`],
        correctAnswer: 1,
        explanation: r`$R_{\text{total}} = R/N$, so $R$ = 15 × 4 = 60 units: one bed alone has more resistance than the four together. 3.75 units divides by 4 instead of multiplying. 19 units adds the 4 to the 15, and 11 units subtracts it.`,
      },
      {
        question: r`A tissue has 1.0 × 10⁶ identical capillaries in parallel, and each capillary alone has a resistance of 5.0 × 10⁷ mmHg·min/L. What is the combined resistance of the capillaries?`,
        options: [r`5.0 × 10¹³ mmHg·min/L`, r`0.020 mmHg·min/L`, r`5.0 × 10⁷ mmHg·min/L`, r`50 mmHg·min/L`],
        correctAnswer: 3,
        explanation: r`$R/N$ = (5.0 × 10⁷) ÷ (1.0 × 10⁶) = 5.0 × 10¹ = 50 mmHg·min/L. 5.0 × 10¹³ multiplies by the number of capillaries, as if they were in series. 0.020 divides the number by the resistance, and 5.0 × 10⁷ is one capillary alone.`,
      },
      {
        question: r`Six identical capillary networks are open in parallel, with a combined resistance of 10 units. Two of the six then close. What is the combined resistance of the four that stay open?`,
        options: [r`15 units`, r`6.7 units`, r`10 units`, r`40 units`],
        correctAnswer: 0,
        explanation: r`One network alone is 10 × 6 = 60 units, and four in parallel give 60 ÷ 4 = 15 units: closing parallel paths raises the resistance. 6.7 units scales by 4/6 instead of 6/4. 10 units assumes nothing changes, and 40 units multiplies 10 by the four networks left.`,
      },
      {
        question: r`In a warm-up, the number of identical capillary networks open in parallel in a muscle doubles. A drug given at the same moment constricts every network so that each one's own resistance doubles. How does the combined resistance compare with its value before?`,
        options: [r`It becomes 4 times as large`, r`It becomes one-quarter as large`, r`It stays the same as before`, r`It becomes one-half as large`],
        correctAnswer: 2,
        explanation: r`The combined resistance is $R/N$, and doubling both $R$ and $N$ gives $2R/2N = R/N$, so nothing changes. 4 times multiplies the two factors, as if more parallel networks raised the resistance, and one-quarter divides by both. One-half counts the extra networks but forgets the constriction.`,
      },
    ],
  },
  [r`What change in radius halves a vessel's resistance, and what change doubles it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A spasm narrows an artery by about 16% in radius along its whole length. Its length and the blood's viscosity are unchanged and the flow stays laminar. Using 0.84⁴ ≈ 0.5, by about what percentage does the artery's resistance rise?`,
        options: [r`By about 16%`, r`By about 64%`, r`By about 50%`, r`By about 100%`],
        correctAnswer: 3,
        explanation: r`Resistance goes as $1/r^4$, so it is divided by 0.84⁴ ≈ 0.5, which doubles it, and a doubling is a rise of 100%. 16% is the trap of treating the narrowing as the rise in resistance. 64% multiplies 16% by 4 instead of raising 0.84 to the fourth power, and 50% reads the 0.5 as the size of the rise.`,
      },
      {
        question: r`At a fixed pressure difference, 40 mL/min of blood passes through a vessel in laminar flow. The vessel then widens by about 19% in radius. Using 1.19⁴ ≈ 2, what is the flow now?`,
        options: [r`80 mL/min`, r`47.6 mL/min`, r`56 mL/min`, r`20 mL/min`],
        correctAnswer: 0,
        explanation: r`A 19% wider vessel has half the resistance, since 1.19⁴ ≈ 2, and at the same pressure difference half the resistance means twice the flow: 80 mL/min. 47.6 mL/min raises the flow by 19%, and 56 mL/min uses 1.19² ≈ 1.4, the change in area. 20 mL/min halves the flow instead of doubling it.`,
      },
      {
        question: r`A vessel's resistance is 80 units. One dose of a drug makes its radius 1.19 times as large, and a second dose makes the radius 1.19 times as large again. The flow stays laminar. Using 1.19⁴ ≈ 2, what is the resistance after both doses?`,
        options: [r`40 units`, r`20 units`, r`56 units`, r`5.0 units`],
        correctAnswer: 1,
        explanation: r`Each 19% widening halves the resistance, so two of them quarter it: 80 → 40 → 20 units. 40 units counts only one dose. 56 units divides by 1.19² ≈ 1.42, the total change in radius, without the fourth power, and 5.0 units divides by 16, which is right for a doubled radius.`,
      },
      {
        question: r`After an injury, a vessel's resistance to laminar flow is found to be twice what it was, with the same length and the same blood viscosity. What happened to the vessel's radius?`,
        options: [r`It became about 16% narrower`, r`It became about 19% narrower`, r`It became about 29% narrower`, r`It became about 50% narrower`],
        correctAnswer: 0,
        explanation: r`Resistance goes as $1/r^4$, so doubling it needs $r^4$ to halve, and 0.84⁴ ≈ 0.5: the radius fell by about 16%. 19% is the widening that halves a resistance, not the narrowing that doubles it. 29% narrower would halve $r^2$, and 50% narrower would make the resistance 16 times as large.`,
      },
      {
        question: r`A pump drives a fixed flow through a vessel in laminar flow, with a pressure difference of 20 mmHg across it. The vessel then narrows by about 16% in radius, and the pump keeps the flow the same. Using 0.84⁴ ≈ 0.5, what pressure difference is across the vessel now?`,
        options: [r`23.2 mmHg`, r`10 mmHg`, r`40 mmHg`, r`16.8 mmHg`],
        correctAnswer: 2,
        explanation: r`A 16% narrowing doubles the resistance, and with the flow fixed the pressure difference, flow × resistance, doubles too: 40 mmHg. 23.2 mmHg raises it by 16%, and 16.8 mmHg lowers it by 16%. 10 mmHg halves it, using the 0.5 as the factor for the resistance itself.`,
      },
      {
        question: r`A cold hand's digital artery narrows from a radius of 0.50 mm to 0.42 mm. Its resistance to laminar flow was 9.0 units before. Using 0.84⁴ ≈ 0.5, what is its resistance now?`,
        options: [r`10.7 units`, r`18 units`, r`12.8 units`, r`4.5 units`],
        correctAnswer: 1,
        explanation: r`0.42 ÷ 0.50 = 0.84, a 16% narrowing, so the resistance is divided by 0.84⁴ ≈ 0.5 and doubles to 18 units. 10.7 units divides by 0.84 once, and 12.8 units divides by 0.84² ≈ 0.71. 4.5 units multiplies by 0.5, as if the narrower vessel had less resistance.`,
      },
    ],
  },
  [r`One parallel bed constricts and the heart keeps the total flow the same. How do you find the new flows?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The heart delivers a steady 6.0 L/min to two beds in parallel, A and B, each 20 mmHg·min/L, which drain to veins at 0 mmHg. B's arterioles constrict until B is 60 mmHg·min/L, and the heart still delivers 6.0 L/min. What is the flow through B now?`,
        options: [r`3.0 L/min`, r`1.0 L/min`, r`4.5 L/min`, r`1.5 L/min`],
        correctAnswer: 3,
        explanation: r`The new combined resistance is (20 × 60) ÷ 80 = 15 mmHg·min/L, so the pressure is 6.0 × 15 = 90 mmHg and B carries 90 ÷ 60 = 1.5 L/min. 3.0 L/min is B's flow before the change. 1.0 L/min uses the old pressure of 60 mmHg, and 4.5 L/min is the flow through A.`,
      },
      {
        question: r`A pump delivers a steady 3.0 L/min to two beds in parallel, A (40 mmHg·min/L) and B (60 mmHg·min/L), which drain to veins at 0 mmHg. B then constricts to 120 mmHg·min/L, and the pump still delivers 3.0 L/min. What is the arterial pressure now?`,
        options: [r`72 mmHg`, r`90 mmHg`, r`360 mmHg`, r`480 mmHg`],
        correctAnswer: 1,
        explanation: r`The new combined resistance is (40 × 120) ÷ 160 = 30 mmHg·min/L, so the pressure is 3.0 × 30 = 90 mmHg. 72 mmHg is the pressure before the change, when the beds combined to 24 mmHg·min/L. 360 mmHg uses B's resistance alone, and 480 mmHg adds the two resistances as if in series.`,
      },
      {
        question: r`The heart delivers a steady 6.0 L/min to two beds in parallel, A (15 mmHg·min/L) and B (30 mmHg·min/L), which drain to veins at 0 mmHg. B then constricts to 60 mmHg·min/L, and the heart still delivers 6.0 L/min. How does the flow through A change?`,
        options: [r`It rises by 0.80 L/min`, r`It rises by 1.0 L/min`, r`It rises by 2.0 L/min`, r`It does not change at all`],
        correctAnswer: 0,
        explanation: r`Before: 10 mmHg·min/L combined, 60 mmHg, and A carries 60 ÷ 15 = 4.0 L/min. After: (15 × 60) ÷ 75 = 12 mmHg·min/L, 72 mmHg, and A carries 72 ÷ 15 = 4.8 L/min, a gain of 0.80 L/min. A gain of 1.0 L/min assumes B's flow simply halves, and 2.0 L/min sends all of B's flow to A. No change forgets that the pressure rises.`,
      },
      {
        question: r`The heart delivers a steady 5.0 L/min to three beds in parallel, A, B and C, each 30 mmHg·min/L, which drain to veins at 0 mmHg. C then constricts to 60 mmHg·min/L, and the heart still delivers 5.0 L/min. What is the flow through C now?`,
        options: [r`1.0 L/min`, r`0.83 L/min`, r`1.67 L/min`, r`2.0 L/min`],
        correctAnswer: 0,
        explanation: r`1/30 + 1/30 + 1/60 = 5/60, so the new combined resistance is 12 mmHg·min/L and the pressure is 5.0 × 12 = 60 mmHg. C carries 60 ÷ 60 = 1.0 L/min. 0.83 L/min uses the old pressure of 50 mmHg, 1.67 L/min is C's flow before the change, and 2.0 L/min is the new flow through A or B.`,
      },
      {
        question: r`The heart delivers a steady 6.0 L/min to two beds in parallel, A and B, each 30 mmHg·min/L, which drain to veins at 0 mmHg. B's arterioles then dilate until B is 15 mmHg·min/L, and the heart still delivers 6.0 L/min. What is the flow through the unchanged bed A now?`,
        options: [r`3.0 L/min`, r`2.0 L/min`, r`4.0 L/min`, r`1.5 L/min`],
        correctAnswer: 1,
        explanation: r`The same steps work for a dilation. The new combined resistance is (30 × 15) ÷ 45 = 10 mmHg·min/L, the pressure falls to 6.0 × 10 = 60 mmHg, and A carries 60 ÷ 30 = 2.0 L/min. 3.0 L/min is A's flow before, forgetting that the pressure fell. 4.0 L/min is the flow through B, and 1.5 L/min halves A's old flow.`,
      },
      {
        question: r`A pump delivers a steady flow to two beds in parallel, A (20 mmHg·min/L) and B (80 mmHg·min/L), which drain to veins at 0 mmHg. B then closes completely, so all of the flow passes through A, and the pump delivers the same total flow. How does the arterial pressure change?`,
        options: [r`It becomes 0.80 times as large`, r`It becomes 4 times as large`, r`It becomes 5 times as large`, r`It becomes 1.25 times as large`],
        correctAnswer: 3,
        explanation: r`Before, the beds combine to (20 × 80) ÷ 100 = 16 mmHg·min/L. After, the resistance is A's 20 mmHg·min/L, and with the same flow the pressure rises by 20 ÷ 16 = 1.25. 0.80 inverts the ratio. 4 times compares B with A, and 5 times compares the series sum of 100 with A.`,
      },
    ],
  },
  [r`What two checks confirm an answer for a circuit of vessels?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Blood flows at 4.0 L/min from arteries at 90 mmHg to veins at 0 mmHg through three vessel levels in series. A student reports pressure drops of 8, 56 and 20 mmHg across the three levels. What does a check of the answer show?`,
        options: [r`The drops are right: they add up to no more than 90 mmHg`, r`The drops are wrong: each of them should equal 30 mmHg`, r`The drops are wrong: they add up to 84 mmHg, not to 90 mmHg`, r`The drops are right: each of them is smaller than 90 mmHg`],
        correctAnswer: 2,
        explanation: r`Pressure drops in series must add up to the total pressure difference, and 8 + 56 + 20 = 84 mmHg, which is 6 mmHg short of 90 mmHg. Adding up to less than the total is a failed check, not a pass, and so is each drop merely being smaller than the total. Equal drops would need three equal resistances, which nothing here says.`,
      },
      {
        question: r`A solution has two gaps. Two beds in parallel carry a total of 6.0 L/min, and one of them carries 4.5 L/min. Three levels in series have a total pressure difference of 100 mmHg, and two of the drops are 15 and 60 mmHg. Which values fill the gaps so that both checks pass?`,
        options: [r`4.5 L/min and 25 mmHg`, r`1.5 L/min and 75 mmHg`, r`1.5 L/min and 25 mmHg`, r`4.5 L/min and 75 mmHg`],
        correctAnswer: 2,
        explanation: r`Parallel flows add up to the total flow, so the other bed carries 6.0 − 4.5 = 1.5 L/min. Series drops add up to the total pressure difference, so the third drop is 100 − 15 − 60 = 25 mmHg. 4.5 L/min assumes the beds must carry equal flows, and 75 mmHg is the sum of the two known drops, not what is left.`,
      },
    ],
  },
}
