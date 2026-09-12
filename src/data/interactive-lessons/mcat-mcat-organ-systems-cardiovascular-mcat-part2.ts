export const mcatCardioSubPart2Data = {
  topicSlug: 'mcat-organ-systems-cardiovascular-mcat',
  sections: [
    {
      id: 'cvs2-intro',
      type: 'text' as const,
      content: `# Cardiovascular System

**Part 2 of 4 — Pressure, Flow & Resistance (Hemodynamics)**

### The Ohm's-Law Analogy

Bulk blood flow is driven by a pressure gradient against a resistance:

$$Q = \\frac{\\Delta P}{R}$$

Applied to the whole systemic circulation:

$$CO = \\frac{MAP - P_{RA}}{TPR} \\approx \\frac{MAP}{TPR} \\quad\\Rightarrow\\quad MAP \\approx CO \\times TPR$$

since right atrial pressure is near zero. Every blood-pressure question reduces to this: pressure changes only if **cardiac output** or **total peripheral resistance** changes.

### Mean Arterial Pressure and Pulse Pressure

$$MAP \\approx P_{dias} + \\frac{1}{3}(P_{sys} - P_{dias}), \\qquad \\text{Pulse pressure} = P_{sys} - P_{dias}$$

- MAP is weighted toward diastolic because the heart spends about two-thirds of each cycle in diastole at rest.
- Pulse pressure rises with larger stroke volume or **stiffer arteries** (less elastic damping — why isolated systolic hypertension appears with age).
- Elastic arteries act as a **pressure reservoir** (Windkessel effect): they stretch during systole and recoil during diastole, keeping flow continuous.

### Poiseuille's Law — Radius Rules

$$R = \\frac{8 \\eta L}{\\pi r^4}$$

- Resistance scales with viscosity ($\\eta$) and length, but with the **fourth power of the inverse radius**: halving $r$ multiplies $R$ by 16.
- **Arterioles** are the "resistance vessels": their smooth muscle tone is the main site of TPR control and the largest pressure drop in the circuit.
- Viscosity rises with hematocrit — polycythemia raises resistance; severe anemia lowers it.

### Series vs. Parallel Vessels

| Arrangement | Total resistance | Consequence |
|-------------|------------------|-------------|
| Series | $R_{tot} = R_1 + R_2 + \\dots$ | Resistances add; pressure drops sequentially |
| Parallel | $\\frac{1}{R_{tot}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ | Total resistance is LESS than any single branch |

Because systemic organs sit in parallel, **losing a parallel bed (e.g., amputation, vasoconstriction of one organ) raises TPR**, while opening more beds (exercise, pregnancy) lowers it.

### Continuity: Velocity vs. Total Cross-Sectional Area

$$v = \\frac{Q}{A_{total}}$$

- Flow rate $Q$ (volume/time) is the **same** through each series segment of the circulation — what leaves the aorta per minute passes through the capillaries per minute.
- Capillaries individually are tiny, but their **total** cross-sectional area is by far the largest, so velocity there is slowest (~0.03 cm/s vs ~30 cm/s in the aorta) — maximizing time for exchange.
- Veins are **capacitance vessels**: thin-walled and distensible, they hold ~60–70% of blood volume at rest; venoconstriction mobilizes this reservoir to boost venous return.

### Where Pressure Falls

Aorta (MAP ~93) → arterioles (**largest drop**, to ~35) → capillaries (~35 → 15) → veins (~15 → ~0 at the RA). Skeletal-muscle pumping and respiratory pressure swings help venous return against this tiny remaining gradient; venous valves prevent backflow.`
    },
    {
      id: 'cvs2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hemodynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A drug dilates arterioles throughout the body, doubling their average radius. Ignoring reflexes, resistance in those arterioles becomes approximately:`,
            options: [`One-half its original value`, `One-quarter its original value`, `One-eighth its original value`, `One-sixteenth its original value`],
            correctAnswer: 3,
            explanation: `Poiseuille: $R \\propto 1/r^4$. Doubling $r$ gives $R_{new} = R/2^4 = R/16$. The fourth-power dependence is why arteriolar smooth muscle exerts such powerful control over blood pressure — and why the MCAT loves this calculation.`
          },
          {
            question: `Blood moves most slowly through the capillaries because:`,
            options: [`Individual capillaries have the smallest radius, so resistance is highest there`, `The total cross-sectional area of all capillaries is the largest in the circulation`, `Capillary walls absorb most of the pressure energy`, `Most blood volume is stored in the capillaries at rest`],
            correctAnswer: 1,
            explanation: `By continuity, $v = Q/A_{total}$. Though each capillary is narrow, billions in parallel give the greatest TOTAL cross-sectional area, so velocity is lowest — ideal for exchange. (Most blood volume at rest is in the VEINS, not capillaries, and the largest pressure drop occurs in the arterioles.)`
          },
          {
            question: `A patient's blood pressure is 130/70 mmHg. Their mean arterial pressure is closest to:`,
            options: [`100 mmHg`, `70 mmHg`, `90 mmHg`, `110 mmHg`],
            correctAnswer: 2,
            explanation: `$MAP \\approx 70 + \\frac{1}{3}(130-70) = 70 + 20 = 90$ mmHg. MAP is NOT the simple average (that would be 100) because diastole lasts roughly twice as long as systole at resting heart rates.`
          }
        ]
      }
    },
    {
      id: 'cvs2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Pressure, Flow & Resistance

<details>
<summary><b>Example 1: Exercise hemodynamics — why MAP barely changes</b></summary>

**Question:** During vigorous exercise, cardiac output rises from 5 to 20 L/min, yet MAP only rises from ~93 to ~110 mmHg. Reconcile this with $MAP = CO \\times TPR$.

**Solution:**
1. If TPR were constant, quadrupling CO would nearly quadruple MAP — it doesn't.
2. Exercising skeletal-muscle arterioles dilate massively (local metabolites: CO2, H$^+$, adenosine, K$^+$), opening huge parallel beds → **TPR falls to roughly a quarter** of resting value.
3. $MAP = 20 \\times TPR_{new} \\approx$ only modestly above resting MAP. ✓

**Takeaway:** Local metabolic vasodilation in active muscle dominates sympathetic vasoconstriction there ("functional sympatholysis"); the net effect is high flow at nearly constant pressure.
</details>

<details>
<summary><b>Example 2: Series vs. parallel resistance calculation</b></summary>

**Question:** Two vascular beds each have resistance $R = 12$ units. Compare total resistance when they are in parallel versus in series, and state which arrangement the body uses for its organs.

**Solution:**
1. Parallel: $\\frac{1}{R_{tot}} = \\frac{1}{12} + \\frac{1}{12} = \\frac{2}{12} \\Rightarrow R_{tot} = 6$ units.
2. Series: $R_{tot} = 12 + 12 = 24$ units — four times the parallel value.
3. Systemic organs branch in **parallel** off the aorta ✓ — so each organ receives fully oxygenated blood at full arterial pressure, flow to one organ can be adjusted without starving the others, and total resistance stays low.
</details>

<details>
<summary><b>Example 3: Hemorrhage and the pressure equation</b></summary>

**Question:** A trauma patient loses 1 L of blood. Predict the immediate changes in MAP, and the reflex changes in HR and TPR that follow.

**Solution:**
1. Blood loss → decreased venous return → decreased preload → decreased SV (Frank–Starling) → **CO and MAP fall**.
2. Baroreceptors (carotid sinus, aortic arch) fire less → brainstem raises sympathetic and withdraws parasympathetic output.
3. Reflex: **HR up, contractility up, arteriolar constriction (TPR up), venoconstriction** (mobilizes venous reservoir) → MAP is defended. ✓

**Clinical signature:** tachycardia + cool, pale skin (skin/gut beds sacrificed) + narrowed pulse pressure — before MAP itself collapses.
</details>`
    },
    {
      id: 'cvs2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $Q = \\Delta P / R$; for the whole circuit, $MAP \\approx CO \\times TPR$.
- $MAP \\approx P_{dias} + \\frac{1}{3}(\\text{pulse pressure})$ — weighted toward diastole.
- Poiseuille: $R \\propto \\eta L / r^4$ — radius dominates; arterioles are the resistance (and largest pressure-drop) site.
- Parallel organ beds keep total resistance low; opening beds lowers TPR, closing them raises it.
- $v = Q / A_{total}$: capillaries have the largest total area → slowest velocity → best exchange. Veins are the volume reservoir (~2/3 of blood).`
    }
  ]
};
