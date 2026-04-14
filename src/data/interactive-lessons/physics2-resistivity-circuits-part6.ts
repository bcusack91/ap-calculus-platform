export const physics2ResCircPart6Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Strategy for Circuit Problems

| Step | Action | Key Question |
|------|--------|-------------|
| 1 | **Identify** topology | Series, parallel, or combination? |
| 2 | **Simplify** | Can you reduce to equivalent resistance? |
| 3 | **Find** total current | $I_{total} = \\mathcal{E}/R_{total}$ |
| 4 | **Work backward** | Distribute $V$ (series) or $I$ (parallel) |
| 5 | **Verify** | Do all voltages/currents satisfy KVL/KCL? |

---

### Common AP Problem Types

| Type | Strategy |
|------|----------|
| Rank bulb brightness | Find power ($P = I^2R$ for series, $P = V^2/R$ for parallel) |
| Switch opens/closes | Redraw circuit without/with the element; recalculate |
| Equivalent resistance | Identify series/parallel groups from inside out |
| RC circuit behavior | Use exponential formulas; know $t = 0$ and $t \\to \\infty$ limits |
| Internal resistance | $V_{term} = \\mathcal{E} - Ir$ |
| Wheatstone bridge | Balance condition: $R_1 R_4 = R_2 R_3$ |`
    },
    {
      id: 'resistivitycircuitsadvanced-p6-worked',
      type: 'text' as const,
      content: `### Worked Problem 1: Bulb Brightness Ranking

**Problem:** Three identical bulbs ($R$ each): Bulb A is in series with a parallel combination of B and C. Battery $\\mathcal{E}$, negligible internal resistance. Rank the brightness.

---

**Solution:**

$R_{BC} = R/2$ (two identical in parallel)

$R_{total} = R + R/2 = 3R/2$

$I_{total} = \\mathcal{E}/(3R/2) = 2\\mathcal{E}/(3R)$

- Bulb A: carries all current $I_A = 2\\mathcal{E}/(3R)$
  - $P_A = I_A^2 R = 4\\mathcal{E}^2/(9R)$

- Bulbs B and C: current splits equally, $I_B = I_C = \\mathcal{E}/(3R)$
  - $P_B = P_C = \\mathcal{E}^2/(9R)$

**Ranking: A > B = C** (A is 4× brighter than B or C)

---

### Worked Problem 2: Switch Closes

**Problem:** Same circuit, but now B burns out (open circuit). What happens to A and C?

**Solution:**

New circuit: A and C in series → $R_{total} = 2R$

$I_{new} = \\mathcal{E}/(2R)$

- $P_A = (\\mathcal{E}/(2R))^2 R = \\mathcal{E}^2/(4R)$ — compare to $4\\mathcal{E}^2/(9R)$
  - $\\mathcal{E}^2/(4R) < 4\\mathcal{E}^2/(9R)$ → **A gets dimmer!**

- $P_C = \\mathcal{E}^2/(4R)$ — compare to $\\mathcal{E}^2/(9R)$
  - $\\mathcal{E}^2/(4R) > \\mathcal{E}^2/(9R)$ → **C gets brighter!**

> 🔑 When a parallel branch opens, total resistance increases, total current decreases, but the remaining branch gets a larger share of voltage.

---

### Worked Problem 3: Wheatstone Bridge

**Problem:** $R_1 = 100$ Ω, $R_2 = 200$ Ω, $R_3 = 300$ Ω, $R_x = ?$ for balance.

**Solution:**

Balance condition: $R_1 R_x = R_2 R_3$

$R_x = R_2 R_3/R_1 = (200)(300)/100 = 600$ Ω

When balanced: galvanometer reads **zero** — no current through the bridge.

> The Wheatstone bridge is used for precision resistance measurement because the null reading is very sensitive to small imbalances.`
    },
    {
      id: 'resistivitycircuitsadvanced-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Three identical bulbs: A in series with (B ∥ C). If B burns out (open circuit):',
            options: ['A gets dimmer, C gets brighter', 'A gets brighter, C gets dimmer', 'Both get dimmer', 'Both get brighter'],
            correctAnswer: 0,
            explanation: 'B opens → total $R$ increases from $3R/2$ to $2R$ → total $I$ decreases → A dimmer. But C now gets half the voltage instead of one-third → C brighter.'
          },
          {
            question: 'A wire of resistance $R$ is cut in half and the halves are connected in parallel. New resistance:',
            options: ['$R$', '$R/2$', '$R/4$', '$2R$'],
            correctAnswer: 2,
            explanation: 'Each half has $R/2$. In parallel: $(R/2)(R/2)/(R/2 + R/2) = R/4$.'
          },
          {
            question: 'A Wheatstone bridge is balanced when:',
            options: ['All resistors are equal', '$R_1 R_4 = R_2 R_3$', 'Maximum current flows through galvanometer', 'Total resistance is minimized'],
            correctAnswer: 1,
            explanation: 'Balance: $R_1/R_2 = R_3/R_4$ (or equivalently $R_1 R_4 = R_2 R_3$). The galvanometer reads zero.'
          },
          {
            question: 'Adding a resistor in parallel to a circuit always:',
            options: ['Increases total resistance', 'Decreases total resistance', 'Increases total current from battery', 'Both B and C'],
            correctAnswer: 3,
            explanation: 'More parallel paths → lower $R_{total}$ → more current drawn from battery. Both B and C are correct.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p6-input',
      type: 'input-boxes' as const,
      content: `
**Circuit Challenge** 🧮

Three resistors: $R_1 = 6$ Ω, $R_2 = 12$ Ω in parallel, then in series with $R_3 = 4$ Ω. Battery: 12 V.

**1)** $R_{12}$ (parallel combination)? (in Ω)

**2)** $R_{total}$? (in Ω)

**3)** Current from battery? (in A, round to 1 decimal place)

**4)** Voltage across the parallel combination? (in V)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['4', '8', '1.5', '6'],
        hint1: '$R_{12} = R_1 R_2/(R_1 + R_2)$',
        hint2: '$R_{total} = R_{12} + R_3$',
        hint3: '$I = V/R_{total}$',
        hint4: '$V_{12} = I \\times R_{12}$',
        explanation: '1) $R_{12} = (6)(12)/(6+12) = 72/18 = 4$ Ω. 2) $R_{total} = 4 + 4 = 8$ Ω. 3) $I = 12/8 = 1.5$ A. 4) $V_{12} = 1.5 \\times 4 = 6$ V.'
      }
    }
  ]
};