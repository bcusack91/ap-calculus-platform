export const physics2ResCircPart3Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p3-intro',
      type: 'text' as const,
      content: `# 🔀 Complex Circuit Analysis

**Part 3 of 7 — Kirchhoff's Laws Applied**

---

### Kirchhoff's Two Laws

These are the **fundamental tools** for analyzing any circuit, no matter how complex:

#### Junction Rule (KCL — Kirchhoff's Current Law)

$$\\boxed{\\sum I_{in} = \\sum I_{out}}$$

**Physical basis:** Conservation of charge. Charge cannot accumulate at a junction — whatever flows in must flow out.

#### Loop Rule (KVL — Kirchhoff's Voltage Law)

$$\\boxed{\\sum \\Delta V = 0 \\text{ (around any closed loop)}}$$

**Physical basis:** Conservation of energy. A charge returning to its starting point must have the same potential energy.

---

### Sign Conventions for Loop Equations

| Element | Traversal Direction | Voltage Change | Why |
|---------|-------------------|---------------|-----|
| Resistor | WITH current flow | $-IR$ | Energy is lost (drop) |
| Resistor | AGAINST current flow | $+IR$ | Appears as a rise |
| Battery | From − to + terminal | $+\\mathcal{E}$ | Energy gained |
| Battery | From + to − terminal | $-\\mathcal{E}$ | Energy lost |
| Capacitor | From − to + plate | $+Q/C$ | Voltage rise across cap |
| Capacitor | From + to − plate | $-Q/C$ | Voltage drop across cap |

> 🔑 **Key Insight:** The choice of loop direction and current direction is arbitrary! If you guess wrong, you'll just get a **negative** answer — the magnitude will still be correct. A negative current simply means it flows opposite to your assumed direction.

---

### Systematic Method for Multi-Loop Circuits

**Step 1:** Assign current variables ($I_1, I_2, \\ldots$) with assumed directions

**Step 2:** Apply the junction rule to get relationships between currents

**Step 3:** Choose independent loops and write KVL equations

**Step 4:** Solve the system of equations

**Step 5:** Interpret results (negative = opposite direction)

| Number of unknowns | Equations needed | Source |
|-------------------|-----------------|--------|
| $b$ branch currents | $b$ equations | — |
| From junctions | $n - 1$ equations | ($n$ = number of nodes) |
| From loops | $b - (n-1)$ equations | Independent loops |`
    },
    {
      id: 'resistivitycircuitsadvanced-p3-examples',
      type: 'text' as const,
      content: `### Worked Example: Two-Battery Circuit

Two batteries ($\\mathcal{E}_1 = 12$ V, $\\mathcal{E}_2 = 6$ V) connected through resistors $R_1 = 4$ Ω, $R_2 = 6$ Ω, $R_3 = 2$ Ω (shared branch).

---

**Step 1:** Assign currents $I_1$ (through $R_1$), $I_2$ (through $R_2$), $I_3$ (through $R_3$)

**Step 2:** Junction rule: $I_1 + I_2 = I_3$

**Step 3:** Loop equations:
- Loop 1: $12 - 4I_1 - 2I_3 = 0$
- Loop 2: $6 - 6I_2 - 2I_3 = 0$

**Step 4:** Substitute $I_3 = I_1 + I_2$:
- $12 = 4I_1 + 2(I_1 + I_2) = 6I_1 + 2I_2$
- $6 = 6I_2 + 2(I_1 + I_2) = 2I_1 + 8I_2$

Solving: $I_1 = 2.25$ A, $I_2 = 0.25$ A, $I_3 = 2.50$ A ✓

**Step 5:** All positive — our assumed directions were correct.

---

### Internal Resistance

Real batteries have internal resistance $r$:

$$V_{terminal} = \\mathcal{E} - Ir$$

| Condition | Terminal Voltage |
|-----------|-----------------|
| No load ($I = 0$) | $V = \\mathcal{E}$ (EMF) |
| Under load ($I > 0$) | $V = \\mathcal{E} - Ir < \\mathcal{E}$ |
| Short circuit ($R_{ext} = 0$) | $I_{max} = \\mathcal{E}/r$ (dangerous!) |

---

### Series vs. Parallel: Quick Reference

| Feature | Series | Parallel |
|---------|--------|----------|
| Current | Same through all | Splits at junction |
| Voltage | Splits (adds up to total) | Same across all |
| $R_{eq}$ | $R_1 + R_2 + \\cdots$ | $\\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$ |
| $R_{eq}$ compared to parts | Larger than any single $R$ | Smaller than the smallest $R$ |
| One element removed | Entire branch stops | Others continue |

> ⚠️ **AP Trap:** For two resistors in parallel, use the product-over-sum shortcut: $R_{eq} = R_1 R_2/(R_1 + R_2)$. For identical resistors: $R_{eq} = R/n$ ($n$ identical resistors in parallel).`
    },
    {
      id: 'resistivitycircuitsadvanced-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At a junction where 3 A and 5 A flow in, the current flowing out must be:',
            options: ['2 A', '5 A', '8 A', '15 A'],
            correctAnswer: 2,
            explanation: 'KCL (charge conservation): $I_{out} = 3 + 5 = 8$ A.'
          },
          {
            question: 'When traversing a resistor AGAINST the current direction in a loop equation, the voltage change is:',
            options: ['$-IR$', '$+IR$', '$0$', '$IR^2$'],
            correctAnswer: 1,
            explanation: 'Going against current: potential increases across the resistor → $+IR$.'
          },
          {
            question: 'A battery with $\\mathcal{E} = 9$ V and $r = 1$ Ω drives 2 A through an external circuit. Terminal voltage is:',
            options: ['9 V', '7 V', '11 V', '4.5 V'],
            correctAnswer: 1,
            explanation: '$V_{term} = \\mathcal{E} - Ir = 9 - 2(1) = 7$ V.'
          },
          {
            question: 'Three 12 Ω resistors in parallel have equivalent resistance:',
            options: ['36 Ω', '12 Ω', '4 Ω', '6 Ω'],
            correctAnswer: 2,
            explanation: '$n$ identical resistors in parallel: $R_{eq} = R/n = 12/3 = 4$ Ω.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p3-input',
      type: 'input-boxes' as const,
      content: `
**Circuit Analysis Problems** 🧮

Two batteries ($\\mathcal{E}_1 = 12$ V, $\\mathcal{E}_2 = 6$ V) with $R_1 = 4$ Ω, $R_2 = 6$ Ω, $R_3 = 2$ Ω (shared).

**1)** Solve for $I_1$ through $R_1$. (in A, round to 2 decimal places)

**2)** Solve for $I_2$ through $R_2$. (in A, round to 2 decimal places)

**3)** Voltage across $R_3$. (in V)

**4)** Power delivered by battery 1. (in W)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['2.25', '0.25', '5', '27'],
        hint1: 'Junction: $I_3 = I_1 + I_2$. Loop 1: $12 = 6I_1 + 2I_2$',
        hint2: 'Loop 2: $6 = 2I_1 + 8I_2$. Solve the 2×2 system',
        hint3: '$V_3 = I_3 R_3 = (I_1 + I_2)(2)$',
        hint4: '$P_1 = \\mathcal{E}_1 I_1$',
        explanation: '1) $I_1 = 2.25$ A. 2) $I_2 = 0.25$ A. 3) $V_3 = 2.50 \\times 2 = 5$ V. 4) $P_1 = 12 \\times 2.25 = 27$ W.'
      }
    }
  ]
};