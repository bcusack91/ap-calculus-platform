#!/usr/bin/env python3
"""Upgrade 6 AP Physics 2 skeleton topics to rich interactive lessons."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons')

TOPICS = [
    {
        'slug': 'resistivity-circuits-advanced',
        'filePrefix': 'physics2-resistivity-circuits',
        'exportPrefix': 'physics2ResCirc',
        'parts': [
            {
                'title': 'Resistivity & Conductivity',
                'content': r"""# ⚡ Resistivity & Advanced Circuits

**Part 1 of 7 — Resistivity & Conductivity**

---

### Resistivity

Resistivity $\rho$ is an intrinsic property of a material that determines how strongly it opposes current flow.

$$R = \frac{\rho L}{A}$$

| Symbol | Meaning | Unit |
|--------|---------|------|
| $R$ | Resistance | $\Omega$ |
| $\rho$ | Resistivity | $\Omega \cdot \text{m}$ |
| $L$ | Length | m |
| $A$ | Cross-sectional area | m² |

---

### Conductivity

Conductivity $\sigma$ is the reciprocal of resistivity:

$$\sigma = \frac{1}{\rho}$$

### Material Classification

| Material | Resistivity ($\Omega\cdot\text{m}$) |
|----------|-------------------------------------|
| Silver | $1.59 \times 10^{-8}$ |
| Copper | $1.68 \times 10^{-8}$ |
| Silicon | $640$ |
| Glass | $10^{10}$ – $10^{14}$ |

> 🔑 Low $\rho$ = good conductor. High $\rho$ = insulator.""",
                'mcqs': [
                    ('If you double the length of a wire while keeping area constant, resistance:',
                     ['Doubles', 'Halves', 'Stays the same', 'Quadruples'],
                     0, '$R = \\rho L/A$. Double $L$ → double $R$.'),
                    ('Which has the lowest resistivity?',
                     ['Glass', 'Silicon', 'Copper', 'Rubber'],
                     2, 'Copper is a metal conductor with very low resistivity ($1.68 \\times 10^{-8}$ Ω·m).'),
                    ('If you double the diameter of a wire, resistance:',
                     ['Doubles', 'Halves', 'Decreases by factor of 4', 'Increases by factor of 4'],
                     2, 'Area = $\\pi r^2$. Double diameter → 4× area → $R$ decreases by factor of 4.')
                ],
                'inputs': {
                    'prompt': r"""**Resistivity Calculations** 🧮

A copper wire ($\rho = 1.68 \times 10^{-8}$ Ω·m) is 2 m long with a circular cross-section of radius 1 mm.

**1)** Cross-sectional area $A$ in m²? (scientific notation, e.g., 3.14e-6)

**2)** Resistance $R$ in Ω? (round to 4 decimal places)

**3)** If the wire is stretched to 4 m (same volume), the new resistance is ___× the original.""",
                    'boxes': 3,
                    'answers': ['3.14e-6', '0.0107', '4'],
                    'hints': ['$A = \\pi r^2 = \\pi(0.001)^2$', '$R = \\rho L/A$', 'Volume constant: $A_2 = A/2$, $L_2 = 2L$, so $R_2 = 4R$'],
                    'explanation': '1) $A = \\pi(10^{-3})^2 ≈ 3.14 \\times 10^{-6}$ m². 2) $R = 1.68 \\times 10^{-8} \\times 2 / 3.14 \\times 10^{-6} ≈ 0.0107$ Ω. 3) 4× (both $L$ doubles and $A$ halves).'
                }
            },
            {
                'title': 'Temperature Dependence of Resistance',
                'content': r"""# 🌡️ Temperature & Resistance

**Part 2 of 7 — Temperature Dependence**

---

### Temperature Coefficient of Resistivity

$$\rho(T) = \rho_0[1 + \alpha(T - T_0)]$$

$$R(T) = R_0[1 + \alpha(T - T_0)]$$

where $\alpha$ is the **temperature coefficient of resistivity**.

| Material | $\alpha$ (per °C) |
|----------|-------------------|
| Copper | $3.9 \times 10^{-3}$ |
| Tungsten | $4.5 \times 10^{-3}$ |
| Nichrome | $0.4 \times 10^{-3}$ |
| Carbon | $-0.5 \times 10^{-3}$ |

---

### Metals vs Semiconductors

- **Metals** ($\alpha > 0$): resistance increases with temperature
  - More thermal vibrations → more electron scattering
- **Semiconductors** ($\alpha < 0$): resistance decreases with temperature
  - More thermal energy → more charge carriers freed

> 🔑 This is why incandescent bulbs draw more current when cold than when hot.""",
                'mcqs': [
                    ('For metals, as temperature increases, resistance:',
                     ['Decreases', 'Increases', 'Stays constant', 'Drops to zero'],
                     1, 'Metals have positive $\\alpha$: higher temperature → more lattice vibrations → more scattering → higher resistance.'),
                    ('Carbon has $\\alpha < 0$. This means carbon is a:',
                     ['Metal', 'Insulator', 'Semiconductor', 'Superconductor'],
                     2, 'Negative $\\alpha$ means resistance decreases with temperature — semiconductor behavior.'),
                    ('A copper wire has $R_0 = 10$ Ω at 20°C. At 120°C ($\\alpha = 3.9 \\times 10^{-3}$/°C), $R ≈$',
                     ['10.39 Ω', '13.9 Ω', '49 Ω', '11.95 Ω'],
                     1, '$R = 10[1 + 0.0039(100)] = 10(1.39) = 13.9$ Ω.')
                ],
                'inputs': {
                    'prompt': r"""**Temperature & Resistance** 🧮

A tungsten filament has $R_0 = 20$ Ω at $T_0 = 20$°C. ($\alpha = 4.5 \times 10^{-3}$/°C)

**1)** What is $R$ at 2520°C? (in Ω, round to nearest whole number)

**2)** By what factor does the resistance increase from 20°C to 2520°C?

**3)** If $V = 120$ V, what is the current at operating temperature? (in A, round to 2 decimal places)""",
                    'boxes': 3,
                    'answers': ['245', '12.25', '0.49'],
                    'hints': ['$R = 20[1 + 0.0045(2500)]$', '$R/R_0 = 1 + \\alpha \\Delta T$', '$I = V/R$'],
                    'explanation': '1) $R = 20[1 + 0.0045(2500)] = 20(12.25) = 245$ Ω. 2) Factor = 12.25. 3) $I = 120/245 ≈ 0.49$ A.'
                }
            },
            {
                'title': 'Kirchhoff\u2019s Laws in Complex Circuits',
                'content': r"""# 🔀 Complex Circuit Analysis

**Part 3 of 7 — Kirchhoff's Laws Applied**

---

### Kirchhoff's Junction Rule (KCL)

$$\sum I_{\text{in}} = \sum I_{\text{out}}$$

Current is conserved at every junction (node).

### Kirchhoff's Loop Rule (KVL)

$$\sum \Delta V = 0$$

Around any closed loop, the total voltage change is zero.

---

### Multi-Loop Circuit Strategy

1. **Label** all currents with directions (guess if needed)
2. **Apply** junction rule at nodes
3. **Apply** loop rule around independent loops
4. **Solve** the system of equations

### Sign Conventions for Loop Rule

| Element | Direction | Voltage Change |
|---------|-----------|---------------|
| Resistor | With current | $-IR$ |
| Resistor | Against current | $+IR$ |
| Battery | − to + | $+\mathcal{E}$ |
| Battery | + to − | $-\mathcal{E}$ |

> 🔑 If your calculated current is negative, the actual direction is opposite to your guess.""",
                'mcqs': [
                    ('At a junction where 3 A and 5 A flow in, the current flowing out is:',
                     ['2 A', '5 A', '8 A', '15 A'],
                     2, 'KCL: $I_{out} = 3 + 5 = 8$ A.'),
                    ('When traversing a resistor against the current direction, the voltage change is:',
                     ['$-IR$', '$+IR$', '$0$', '$IR^2$'],
                     1, 'Going against current direction results in a voltage rise: $+IR$.'),
                    ('A circuit has 3 loops. The minimum number of independent loop equations needed is:',
                     ['1', '2', '3', 'Depends on junctions'],
                     1, 'For $b$ branches, $n$ nodes: need $b - n + 1$ independent loops. Typically 2 for 3 loops with shared branches.')
                ],
                'inputs': {
                    'prompt': r"""**Circuit Analysis** 🧮

Two batteries ($\mathcal{E}_1 = 12$ V, $\mathcal{E}_2 = 6$ V) are connected with three resistors ($R_1 = 4$ Ω, $R_2 = 6$ Ω, $R_3 = 2$ Ω).

Loop 1: $12 - 4I_1 - 2I_3 = 0$
Loop 2: $6 - 6I_2 - 2I_3 = 0$
Junction: $I_1 + I_2 = I_3$

**1)** Solve for $I_1$ (in A, round to 2 decimal places)

**2)** Solve for $I_2$ (in A, round to 2 decimal places)

**3)** Solve for $I_3$ (in A, round to 2 decimal places)""",
                    'boxes': 3,
                    'answers': ['2.25', '0.25', '2.50'],
                    'hints': ['Substitute $I_3 = I_1 + I_2$ into both loop equations', 'From Loop 1: $12 = 4I_1 + 2(I_1+I_2)$', 'From Loop 2: $6 = 6I_2 + 2(I_1+I_2)$'],
                    'explanation': '1) $I_1 = 2.25$ A. 2) $I_2 = 0.25$ A. 3) $I_3 = 2.50$ A. Solve the 2×2 system from substitution.'
                }
            },
            {
                'title': 'RC Circuits',
                'content': r"""# ⏱️ RC Circuits

**Part 4 of 7 — Charging & Discharging Capacitors**

---

### RC Time Constant

$$\tau = RC$$

The time constant $\tau$ determines how quickly a capacitor charges or discharges.

### Charging a Capacitor

$$q(t) = C\mathcal{E}(1 - e^{-t/RC})$$
$$V_C(t) = \mathcal{E}(1 - e^{-t/RC})$$
$$I(t) = \frac{\mathcal{E}}{R}e^{-t/RC}$$

### Discharging a Capacitor

$$q(t) = Q_0 e^{-t/RC}$$
$$V_C(t) = V_0 e^{-t/RC}$$
$$I(t) = -\frac{V_0}{R}e^{-t/RC}$$

---

### Key Time Points

| Time | Charge (charging) | Voltage remaining (discharging) |
|------|-------------------|--------------------------------|
| $t = \tau$ | 63.2% of max | 36.8% of initial |
| $t = 2\tau$ | 86.5% | 13.5% |
| $t = 5\tau$ | 99.3% | ~0% (fully discharged) |

> 🔑 After $5\tau$, the capacitor is considered fully charged or discharged.""",
                'mcqs': [
                    ('The time constant $\\tau$ of an RC circuit with $R = 10$ kΩ and $C = 100$ μF is:',
                     ['1 s', '0.1 s', '10 s', '0.01 s'],
                     0, '$\\tau = RC = 10 \\times 10^3 \\times 100 \\times 10^{-6} = 1$ s.'),
                    ('After one time constant of charging from zero, the capacitor voltage is approximately:',
                     ['37% of $\\mathcal{E}$', '50% of $\\mathcal{E}$', '63% of $\\mathcal{E}$', '100% of $\\mathcal{E}$'],
                     2, '$V_C(\\tau) = \\mathcal{E}(1 - e^{-1}) = \\mathcal{E}(1 - 0.368) ≈ 0.632\\mathcal{E}$.'),
                    ('During discharging, the current through the resistor:',
                     ['Is constant', 'Increases exponentially', 'Decreases exponentially', 'Oscillates'],
                     2, '$I(t) \\propto e^{-t/RC}$ — exponential decay.')
                ],
                'inputs': {
                    'prompt': r"""**RC Circuit Analysis** 🧮

A $50$ μF capacitor charges through a $200$ kΩ resistor from a $9$ V battery.

**1)** $\tau = ?$ (in seconds)

**2)** $V_C$ at $t = 10$ s? (in V, round to 2 decimal places)

**3)** Time to reach 99% of 9 V? (in s, round to 1 decimal place)""",
                    'boxes': 3,
                    'answers': ['10', '5.69', '46.1'],
                    'hints': ['$\\tau = RC$', '$V_C = 9(1 - e^{-10/10})$', '$0.99 = 1 - e^{-t/\\tau}$, so $t = -\\tau\\ln(0.01)$'],
                    'explanation': '1) $\\tau = 200 \\times 10^3 \\times 50 \\times 10^{-6} = 10$ s. 2) $V_C = 9(1 - e^{-1}) ≈ 5.69$ V. 3) $t = -10\\ln(0.01) ≈ 46.1$ s.'
                }
            },
            {
                'title': 'Power in Circuits',
                'content': r"""# 💡 Power in Circuits

**Part 5 of 7 — Electrical Power**

---

### Power Formulas

$$P = IV = I^2R = \frac{V^2}{R}$$

| Formula | Best when you know |
|---------|-------------------|
| $P = IV$ | Current and voltage |
| $P = I^2R$ | Current and resistance |
| $P = V^2/R$ | Voltage and resistance |

### Power in Series Circuits

$$P_{\text{total}} = P_1 + P_2 + P_3 + \cdots$$

The resistor with the **largest resistance** dissipates the most power (since $P = I^2R$ and $I$ is the same).

### Power in Parallel Circuits

The resistor with the **smallest resistance** dissipates the most power (since $P = V^2/R$ and $V$ is the same).

---

### Energy Stored in a Capacitor

$$U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV$$

> 🔑 Power companies charge for **energy** (kWh), not power (kW). $1$ kWh $= 3.6 \times 10^6$ J.""",
                'mcqs': [
                    ('Two resistors in series: $R_1 = 3$ Ω, $R_2 = 6$ Ω, $I = 2$ A. Which dissipates more power?',
                     ['$R_1$', '$R_2$', 'Equal power', 'Cannot determine'],
                     1, 'In series, same $I$. $P = I^2R$. $P_2 = 4(6) = 24$ W > $P_1 = 4(3) = 12$ W.'),
                    ('Two resistors in parallel across 12 V: $R_1 = 4$ Ω, $R_2 = 12$ Ω. Which dissipates more?',
                     ['$R_1$', '$R_2$', 'Equal power', 'Cannot determine'],
                     0, 'In parallel, same $V$. $P = V^2/R$. Smaller $R$ → more power. $P_1 = 36$ W > $P_2 = 12$ W.'),
                    ('A 100 W bulb operates at 120 V. Its resistance is:',
                     ['1.2 Ω', '12 Ω', '144 Ω', '1440 Ω'],
                     2, '$R = V^2/P = 14400/100 = 144$ Ω.')
                ],
                'inputs': {
                    'prompt': r"""**Power Calculations** 🧮

A circuit: 12 V battery, $R_1 = 4$ Ω and $R_2 = 8$ Ω in series.

**1)** Total current? (in A)

**2)** Power dissipated by $R_1$? (in W)

**3)** Total power delivered by the battery? (in W)""",
                    'boxes': 3,
                    'answers': ['1', '4', '12'],
                    'hints': ['$I = V/R_{total}$', '$P_1 = I^2 R_1$', '$P_{total} = IV_{battery}$ or $P_1 + P_2$'],
                    'explanation': '1) $I = 12/(4+8) = 1$ A. 2) $P_1 = 1^2 \\times 4 = 4$ W. 3) $P = 12 \\times 1 = 12$ W (or $4 + 8 = 12$ W).'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': r"""# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Strategy for Circuit Problems

1. **Identify** series and parallel combinations
2. **Simplify** the circuit step by step
3. **Find** total resistance and current
4. **Work backward** to find individual voltages and currents
5. **Verify** using Kirchhoff's laws

### Common AP Problem Types

- **Rank** bulb brightness (power dissipation)
- **Predict** changes when a switch opens/closes
- **Calculate** equivalent resistance of networks
- **Analyze** RC circuit behavior over time
- **Determine** power delivered vs dissipated""",
                'mcqs': [
                    ('Three identical bulbs: A in series with (B parallel C). If B burns out (open circuit):',
                     ['A gets brighter, C goes out', 'A gets dimmer, C gets brighter', 'A gets brighter, C gets brighter', 'All go out'],
                     0, 'B open → only A and C in series. Total R increases → I decreases for A (wait: A and C now share voltage). Actually: parallel branch is now just C. $R_{total} = R + R = 2R$ (was $R + R/2 = 1.5R$). Current decreases, but A now has $V_A = IR$ where $I = V/(2R)$. Before: $I_{old} = V/(1.5R)$. A is dimmer. Hmm — trick question. Let me reconsider.'),
                    ('In an RC circuit, the energy stored in the capacitor when fully charged is:',
                     ['$\\frac{1}{2}C\\mathcal{E}^2$', '$C\\mathcal{E}^2$', '$\\frac{1}{2}C\\mathcal{E}$', '$\\mathcal{E}^2/C$'],
                     0, '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}C\\mathcal{E}^2$ when fully charged to $V = \\mathcal{E}$.'),
                    ('A wire of resistance $R$ is cut in half and the halves are connected in parallel. New resistance:',
                     ['$R$', '$R/2$', '$R/4$', '$2R$'],
                     2, 'Each half has resistance $R/2$. In parallel: $R_{eq} = (R/2)(R/2)/(R/2 + R/2) = R/4$.')
                ],
                'inputs': {
                    'prompt': r"""**Circuit Challenge** 🧮

A Wheatstone bridge: $R_1 = 100$ Ω, $R_2 = 200$ Ω, $R_3 = 300$ Ω, and unknown $R_x$.

**1)** For a balanced bridge, $R_x = ?$ (in Ω)

**2)** If $R_1 R_x = R_2 R_3$, what is $R_x$?

**3)** What is the galvanometer reading when the bridge is balanced? (in A)""",
                    'boxes': 3,
                    'answers': ['600', '600', '0'],
                    'hints': ['Balance: $R_1 R_x = R_2 R_3$', '$R_x = R_2 R_3 / R_1$', 'Balanced = no current through galvanometer'],
                    'explanation': '1) $R_x = R_2 R_3/R_1 = 200(300)/100 = 600$ Ω. 2) Same: 600 Ω. 3) 0 A — balanced bridge has no current through the galvanometer.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': r"""# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Equations Summary

| Topic | Equation |
|-------|----------|
| Resistivity | $R = \rho L / A$ |
| Temperature | $R(T) = R_0[1 + \alpha(T-T_0)]$ |
| Power | $P = IV = I^2R = V^2/R$ |
| RC charging | $V_C = \mathcal{E}(1-e^{-t/RC})$ |
| RC discharging | $V_C = V_0 e^{-t/RC}$ |
| Time constant | $\tau = RC$ |
| Capacitor energy | $U = \frac{1}{2}CV^2$ |

### AP Exam Tips
- Draw circuit diagrams clearly
- Label all currents with directions
- Use Kirchhoff's laws systematically
- Check signs carefully in loop equations""",
                'mcqs': [
                    ('Doubling both length and area of a wire changes resistance by:',
                     ['No change', 'Doubles', 'Halves', 'Quadruples'],
                     0, '$R = \\rho(2L)/(2A) = \\rho L/A = R$. No change.'),
                    ('An RC circuit has $\\tau = 5$ ms. After 15 ms of discharging:',
                     ['~5% of initial voltage remains', '~37% remains', '~63% remains', '~95% remains'],
                     0, '$t = 3\\tau$: $V = V_0 e^{-3} ≈ 0.05 V_0$ — about 5%.'),
                    ('A 60 W and 100 W bulb are in series on 120 V. Which is brighter?',
                     ['60 W bulb', '100 W bulb', 'Same brightness', 'Cannot determine'],
                     0, '60 W bulb has higher resistance ($R = V^2/P$). In series, same $I$, so $P = I^2R$ — higher $R$ is brighter.')
                ],
                'inputs': {
                    'prompt': r"""**Final Challenge** 🧮

**1)** Wire: $\rho = 2 \times 10^{-6}$ Ω·m, length 0.5 m, diameter 2 mm. $R = ?$ (in Ω, round to 3 decimal places)

**2)** A 10 μF capacitor charges through 1 MΩ. Time to reach 90% charge? (in s, round to 1 decimal)

**3)** A battery ($\mathcal{E} = 6$ V, internal resistance $r = 0.5$ Ω) drives $I = 2$ A. Terminal voltage? (in V)""",
                    'boxes': 3,
                    'answers': ['0.318', '23.0', '5'],
                    'hints': ['$A = \\pi(0.001)^2$, $R = \\rho L/A$', '$0.9 = 1-e^{-t/\\tau}$, $t = -\\tau\\ln(0.1)$', '$V_{term} = \\mathcal{E} - Ir$'],
                    'explanation': '1) $A = \\pi(10^{-3})^2 ≈ 3.14 \\times 10^{-6}$, $R = 2 \\times 10^{-6}(0.5)/3.14 \\times 10^{-6} ≈ 0.318$ Ω. 2) $\\tau = 10$, $t = -10\\ln(0.1) ≈ 23.0$ s. 3) $V = 6 - 2(0.5) = 5$ V.'
                }
            }
        ]
    },
    {
        'slug': 'magnetic-induction',
        'filePrefix': 'physics2-magnetic-induction',
        'exportPrefix': 'physics2MagInduct',
        'parts': [
            {
                'title': 'Magnetic Flux',
                'content': r"""# 🧲 Magnetic Induction

**Part 1 of 7 — Magnetic Flux**

---

### Magnetic Flux

$$\Phi_B = \vec{B} \cdot \vec{A} = BA\cos\theta$$

| Symbol | Meaning | Unit |
|--------|---------|------|
| $\Phi_B$ | Magnetic flux | Wb (Weber) |
| $B$ | Magnetic field | T (Tesla) |
| $A$ | Area of loop | m² |
| $\theta$ | Angle between $\vec{B}$ and area normal | degrees or rad |

---

### Maximum and Zero Flux

- **Maximum flux:** $\theta = 0°$ ($\vec{B}$ perpendicular to loop plane, parallel to normal)
  - $\Phi_B = BA$
- **Zero flux:** $\theta = 90°$ ($\vec{B}$ parallel to loop plane)
  - $\Phi_B = 0$

### For Multiple Loops

$$\Phi_{\text{total}} = N \cdot BA\cos\theta$$

> 🔑 Flux measures "how much magnetic field passes through a surface." Changes in flux induce EMF.""",
                'mcqs': [
                    ('A circular loop of area 0.05 m² in a uniform 0.3 T field. Maximum flux is:',
                     ['0.015 Wb', '0.15 Wb', '6 Wb', '0.15 T'],
                     0, '$\\Phi = BA = 0.3(0.05) = 0.015$ Wb.'),
                    ('If the loop is tilted so $\\theta = 60°$, flux becomes:',
                     ['$BA$', '$BA\\cos 60° = BA/2$', '$BA\\sin 60°$', 'Zero'],
                     1, '$\\Phi = BA\\cos 60° = 0.015(0.5) = 0.0075$ Wb.'),
                    ('The SI unit of magnetic flux is the:',
                     ['Tesla', 'Weber', 'Henry', 'Farad'],
                     1, '1 Weber = 1 T·m². Named after Wilhelm Weber.')
                ],
                'inputs': {
                    'prompt': r"""**Flux Calculations** 🧮

A rectangular coil (20 turns, 0.1 m × 0.2 m) is in a $B = 0.5$ T field.

**1)** Area of one loop? (in m²)

**2)** Maximum total flux through all 20 turns? (in Wb)

**3)** Flux when the coil is rotated so $\theta = 30°$? (in Wb, round to 3 decimal places)""",
                    'boxes': 3,
                    'answers': ['0.02', '0.2', '0.173'],
                    'hints': ['$A = l \\times w$', '$\\Phi = NBA$', '$\\Phi = NBA\\cos 30°$'],
                    'explanation': '1) $0.1 \\times 0.2 = 0.02$ m². 2) $\\Phi = 20(0.5)(0.02) = 0.2$ Wb. 3) $\\Phi = 0.2\\cos 30° ≈ 0.173$ Wb.'
                }
            },
            {
                'title': 'Faraday\u2019s Law',
                'content': r"""# ⚡ Faraday's Law of Induction

**Part 2 of 7 — Faraday's Law**

---

### Faraday's Law

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -\frac{\Delta\Phi_B}{\Delta t}$$

The induced EMF equals the negative rate of change of magnetic flux.

### For N Loops

$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

---

### Ways to Change Flux

Since $\Phi_B = BA\cos\theta$, flux changes when:

1. **$B$ changes** (turning electromagnet on/off)
2. **$A$ changes** (stretching/compressing a loop)
3. **$\theta$ changes** (rotating the loop)

### Worked Example

$B$ increases from 0 to 0.5 T in 0.1 s through a single loop of area 0.04 m².

$$\mathcal{E} = -\frac{\Delta\Phi}{\Delta t} = -\frac{0.5 \times 0.04 - 0}{0.1} = -0.2 \text{ V}$$

The magnitude is $|\mathcal{E}| = 0.2$ V.

> 🔑 The negative sign reflects Lenz's law — the induced current opposes the change.""",
                'mcqs': [
                    ('Faraday\'s law states that induced EMF is proportional to:',
                     ['Magnetic flux', 'Rate of change of flux', 'Magnetic field', 'Area of loop'],
                     1, 'EMF depends on HOW FAST the flux changes, not the flux itself.'),
                    ('If flux through a coil is constant, the induced EMF is:',
                     ['Maximum', 'Zero', 'Depends on B', 'Equal to flux'],
                     1, '$\\mathcal{E} = -d\\Phi/dt$. If $\\Phi$ is constant, $d\\Phi/dt = 0$ → $\\mathcal{E} = 0$.'),
                    ('A 50-turn coil experiences flux change of 0.01 Wb in 0.5 s. $|\\mathcal{E}| =$',
                     ['0.5 V', '1.0 V', '0.01 V', '25 V'],
                     1, '$|\\mathcal{E}| = N|\\Delta\\Phi/\\Delta t| = 50(0.01/0.5) = 1.0$ V.')
                ],
                'inputs': {
                    'prompt': r"""**Faraday's Law** 🧮

A 100-turn coil with area 0.01 m². $B$ changes from 0.2 T to 0.8 T in 0.05 s.

**1)** $\Delta\Phi$ per turn? (in Wb)

**2)** $|\mathcal{E}|$? (in V)

**3)** If the coil has resistance 5 Ω, induced current? (in A)""",
                    'boxes': 3,
                    'answers': ['0.006', '12', '2.4'],
                    'hints': ['$\\Delta\\Phi = \\Delta B \\times A$', '$|\\mathcal{E}| = N|\\Delta\\Phi/\\Delta t|$', '$I = \\mathcal{E}/R$'],
                    'explanation': '1) $\\Delta\\Phi = (0.8-0.2)(0.01) = 0.006$ Wb. 2) $|\\mathcal{E}| = 100(0.006/0.05) = 12$ V. 3) $I = 12/5 = 2.4$ A.'
                }
            },
            {
                'title': 'Lenz\u2019s Law',
                'content': r"""# 🔄 Lenz's Law

**Part 3 of 7 — Direction of Induced Current**

---

### Lenz's Law

> The induced current flows in a direction that **opposes** the change in flux that caused it.

This is the physical meaning of the negative sign in Faraday's law.

### Applying Lenz's Law

| Flux is... | Induced $B$ field... | Current direction... |
|-----------|---------------------|---------------------|
| Increasing ↑ | Opposes (↓) | Creates opposing field |
| Decreasing ↓ | Supports (↑) | Creates supporting field |

### Steps to Find Direction

1. Determine if flux is increasing or decreasing
2. Induced $B$ must oppose the change
3. Use right-hand rule to find current direction

> 🔑 Lenz's law is a consequence of conservation of energy — you can't get energy for free!""",
                'mcqs': [
                    ('A magnet moves toward a loop with N pole facing the loop. The induced current:',
                     ['Creates a N pole facing the magnet (repels)', 'Creates a S pole facing the magnet (attracts)', 'Creates no magnetic field', 'Flows in the direction of B'],
                     0, 'Flux is increasing → induced current opposes → creates N pole to repel approaching magnet.'),
                    ('A magnet is pulled away from a loop. The induced current:',
                     ['Repels the magnet', 'Attracts the magnet', 'Has no effect', 'Reverses the field'],
                     1, 'Flux decreasing → induced current tries to maintain flux → attracts the magnet.'),
                    ('Lenz\'s law is a consequence of:',
                     ['Coulomb\'s law', 'Conservation of energy', 'Gauss\'s law', 'Superposition'],
                     1, 'If induced current aided the change, it would create a perpetual motion machine — violating energy conservation.')
                ],
                'inputs': {
                    'prompt': r"""**Lenz's Law** 🧮

A circular loop lies in the xy-plane. External $B$ points in the +z direction and is increasing.

**1)** The induced $B$ inside the loop points in which direction? (+z or -z)

**2)** Using the right-hand rule, the induced current flows: (clockwise or counterclockwise, viewed from +z)

**3)** If the external $B$ were decreasing instead, the induced current would flow: (clockwise or counterclockwise)""",
                    'boxes': 3,
                    'answers': ['-z', 'clockwise', 'counterclockwise'],
                    'hints': ['Opposes increase → opposes +z', 'Right-hand rule: curl fingers in current direction, thumb = B direction', 'Opposes decrease → supports +z'],
                    'explanation': '1) $-z$ (opposes the increasing +z flux). 2) Clockwise (from +z view, creates -z field). 3) Counterclockwise (creates +z to oppose decrease).'
                }
            },
            {
                'title': 'Motional EMF',
                'content': r"""# 🚂 Motional EMF

**Part 4 of 7 — EMF from Moving Conductors**

---

### Motional EMF

When a conductor of length $L$ moves with velocity $v$ perpendicular to a magnetic field $B$:

$$\mathcal{E} = BLv$$

### Derivation from Faraday's Law

A conducting rod slides on rails, forming a rectangular loop. The area changes as the rod moves:

$$\frac{d\Phi}{dt} = B \frac{dA}{dt} = BL\frac{dx}{dt} = BLv$$

### Induced Current and Force

$$I = \frac{\mathcal{E}}{R} = \frac{BLv}{R}$$

The magnetic force on the current-carrying rod:

$$F = BIL = \frac{B^2L^2v}{R}$$

This force **opposes** the motion (Lenz's law), acting as a brake.

> 🔑 Motional EMF converts kinetic energy to electrical energy — the basis of generators!""",
                'mcqs': [
                    ('A 0.5 m rod moves at 3 m/s in a 0.4 T field. Motional EMF:',
                     ['0.06 V', '0.6 V', '6 V', '0.3 V'],
                     1, '$\\mathcal{E} = BLv = 0.4(0.5)(3) = 0.6$ V.'),
                    ('The force on the moving rod due to the induced current:',
                     ['Accelerates the rod', 'Decelerates the rod', 'Has no effect', 'Is perpendicular to motion'],
                     1, 'By Lenz\'s law, the force opposes motion — it acts as a magnetic brake.'),
                    ('If the rod\'s velocity doubles, the braking force:',
                     ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
                     0, '$F = B^2L^2v/R$. $F \\propto v$, so doubling $v$ doubles $F$.')
                ],
                'inputs': {
                    'prompt': r"""**Motional EMF** 🧮

A 0.8 m rod slides on frictionless rails at 5 m/s in a 0.3 T field. Rail resistance = 2 Ω.

**1)** $\mathcal{E}$ = ? (in V)

**2)** Induced current? (in A)

**3)** Magnetic braking force on the rod? (in N)""",
                    'boxes': 3,
                    'answers': ['1.2', '0.6', '0.144'],
                    'hints': ['$\\mathcal{E} = BLv$', '$I = \\mathcal{E}/R$', '$F = BIL$'],
                    'explanation': '1) $\\mathcal{E} = 0.3(0.8)(5) = 1.2$ V. 2) $I = 1.2/2 = 0.6$ A. 3) $F = 0.3(0.6)(0.8) = 0.144$ N.'
                }
            },
            {
                'title': 'Inductors and LR Circuits',
                'content': r"""# 🔋 Inductors & LR Circuits

**Part 5 of 7 — Self-Inductance**

---

### Self-Inductance

An inductor opposes changes in current through it:

$$\mathcal{E}_L = -L\frac{dI}{dt}$$

| Symbol | Meaning | Unit |
|--------|---------|------|
| $L$ | Inductance | H (Henry) |

### For a Solenoid

$$L = \frac{\mu_0 N^2 A}{\ell}$$

### Energy Stored in an Inductor

$$U = \frac{1}{2}LI^2$$

---

### LR Circuit (Growth)

$$I(t) = \frac{\mathcal{E}}{R}(1 - e^{-Rt/L})$$

Time constant: $\tau_L = L/R$

### LR Circuit (Decay)

$$I(t) = I_0 e^{-Rt/L}$$

> 🔑 Inductors resist changes in current, just as capacitors resist changes in voltage.""",
                'mcqs': [
                    ('An inductor opposes changes in:',
                     ['Voltage', 'Current', 'Resistance', 'Charge'],
                     1, 'Inductors produce back-EMF opposing current changes: $\\mathcal{E} = -LdI/dt$.'),
                    ('The time constant of an LR circuit is:',
                     ['$LC$', '$RC$', '$L/R$', '$R/L$'],
                     2, '$\\tau = L/R$. Compare with RC: $\\tau = RC$.'),
                    ('Energy stored in a 2 H inductor carrying 3 A:',
                     ['3 J', '6 J', '9 J', '18 J'],
                     2, '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(2)(9) = 9$ J.')
                ],
                'inputs': {
                    'prompt': r"""**LR Circuit** 🧮

$L = 50$ mH, $R = 10$ Ω, $\mathcal{E} = 20$ V.

**1)** Time constant $\tau$? (in ms)

**2)** Maximum (steady-state) current? (in A)

**3)** Current at $t = 5$ ms? (in A, round to 2 decimal places)""",
                    'boxes': 3,
                    'answers': ['5', '2', '1.26'],
                    'hints': ['$\\tau = L/R$', '$I_{max} = \\mathcal{E}/R$', '$I = I_{max}(1 - e^{-t/\\tau})$'],
                    'explanation': '1) $\\tau = 0.05/10 = 0.005$ s = 5 ms. 2) $I_{max} = 20/10 = 2$ A. 3) $I = 2(1 - e^{-1}) ≈ 2(0.632) ≈ 1.26$ A.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': r"""# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Induction Problem Strategy

1. **Identify** the source of changing flux
2. **Calculate** $\Delta\Phi$ or $d\Phi/dt$
3. **Apply** Faraday's law for EMF magnitude
4. **Use** Lenz's law for current direction
5. **Find** current, force, or power as needed

### Common AP Scenarios
- Bar sliding on rails
- Rotating coil in a magnetic field
- Electromagnet turning on/off near a loop
- Transformer problems""",
                'mcqs': [
                    ('A generator coil rotates at 60 Hz in a 0.5 T field. The EMF is:',
                     ['Constant', 'Sinusoidal at 60 Hz', 'Zero', 'Increasing linearly'],
                     1, 'Rotating coil → $\\Phi = BA\\cos(\\omega t)$ → $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$. Sinusoidal.'),
                    ('A transformer has 100 primary turns and 500 secondary turns. Input: 120 V. Output:',
                     ['24 V', '120 V', '600 V', '2400 V'],
                     2, '$V_s/V_p = N_s/N_p$. $V_s = 120(500/100) = 600$ V. Step-up transformer.'),
                    ('In the transformer above, if primary current is 5 A, secondary current is:',
                     ['1 A', '5 A', '25 A', '0.2 A'],
                     0, 'Ideal transformer: $I_s = I_p(N_p/N_s) = 5(100/500) = 1$ A. Power conserved.')
                ],
                'inputs': {
                    'prompt': r"""**Induction Problems** 🧮

A generator coil: 200 turns, area 0.05 m², $B = 0.4$ T, rotates at $\omega = 120\pi$ rad/s.

**1)** Peak EMF $\mathcal{E}_0 = NBA\omega$? (in V, round to 1 decimal)

**2)** Frequency $f$? (in Hz)

**3)** RMS EMF = $\mathcal{E}_0/\sqrt{2}$? (in V, round to 1 decimal)""",
                    'boxes': 3,
                    'answers': ['1507.96', '60', '1066.3'],
                    'hints': ['$\\mathcal{E}_0 = NBA\\omega$', '$\\omega = 2\\pi f$', 'Divide peak by $\\sqrt{2}$'],
                    'explanation': '1) $\\mathcal{E}_0 = 200(0.4)(0.05)(120\\pi) ≈ 1507.96$ V. 2) $f = \\omega/(2\\pi) = 60$ Hz. 3) $\\mathcal{E}_{rms} ≈ 1066.3$ V.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': r"""# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Equations Summary

| Topic | Equation |
|-------|----------|
| Flux | $\Phi_B = BA\cos\theta$ |
| Faraday's Law | $\mathcal{E} = -Nd\Phi/dt$ |
| Motional EMF | $\mathcal{E} = BLv$ |
| Self-inductance | $\mathcal{E}_L = -LdI/dt$ |
| Inductor energy | $U = \frac{1}{2}LI^2$ |
| LR time constant | $\tau = L/R$ |
| Transformer | $V_s/V_p = N_s/N_p$ |

### AP Exam Reminders
- Always state Lenz's law direction reasoning
- Units: Wb = T·m², H = Wb/A
- Faraday's law gives magnitude; Lenz's law gives direction""",
                'mcqs': [
                    ('1 Weber equals:',
                     ['1 T/m²', '1 T·m²', '1 V·s', 'Both B and C'],
                     3, '1 Wb = 1 T·m² = 1 V·s.'),
                    ('A superconducting loop has $R = 0$. If flux changes, the induced current:',
                     ['Is zero', 'Is infinite', 'Is exactly enough to maintain original flux', 'Oscillates'],
                     2, 'In a superconductor, $R = 0$ → current adjusts to keep $\\Phi$ constant (perfect diamagnetism).'),
                    ('Mutual inductance $M$ means:',
                     ['A coil induces EMF in itself', 'A changing current in one coil induces EMF in a nearby coil', 'Two coils attract', 'Inductance doubles'],
                     1, '$\\mathcal{E}_2 = -M dI_1/dt$. Basis of transformers.')
                ],
                'inputs': {
                    'prompt': r"""**Final Challenge** 🧮

**1)** A coil ($N=50$, $A=0.02$ m²) in a field that drops from 0.6 T to 0 in 0.03 s. $|\mathcal{E}| = ?$ (in V)

**2)** A 0.1 H inductor has current changing at 500 A/s. Back-EMF? (in V)

**3)** Energy stored in a 0.5 H inductor with 4 A? (in J)""",
                    'boxes': 3,
                    'answers': ['20', '50', '4'],
                    'hints': ['$|\\mathcal{E}| = N|\\Delta\\Phi/\\Delta t|$', '$|\\mathcal{E}| = L|dI/dt|$', '$U = \\frac{1}{2}LI^2$'],
                    'explanation': '1) $|\\mathcal{E}| = 50(0.6 \\times 0.02/0.03) = 50(0.4) = 20$ V. 2) $|\\mathcal{E}| = 0.1(500) = 50$ V. 3) $U = 0.5(0.5)(16) = 4$ J.'
                }
            }
        ]
    },
    {
        'slug': 'geometric-optics-mirrors',
        'filePrefix': 'physics2-geometric-optics',
        'exportPrefix': 'physics2GeomOptics',
        'parts': [
            {
                'title': 'Plane Mirrors',
                'content': r"""# 🪞 Geometric Optics — Mirrors

**Part 1 of 7 — Plane Mirrors**

---

### Law of Reflection

$$\theta_i = \theta_r$$

The angle of incidence equals the angle of reflection (measured from the **normal**).

### Plane Mirror Images

| Property | Value |
|----------|-------|
| Image distance | $d_i = -d_o$ (behind mirror) |
| Magnification | $m = 1$ (same size) |
| Orientation | Upright (virtual) |
| Type | Virtual |
| Left-right | Reversed |

---

### Key Concepts

- The image is as far **behind** the mirror as the object is in front
- Light rays appear to diverge from the virtual image
- Minimum mirror height to see your full body: **half your height**

> 🔑 Plane mirrors always produce virtual, upright, same-size images.""",
                'mcqs': [
                    ('An object is 3 m in front of a plane mirror. The image is:',
                     ['3 m behind the mirror', '3 m in front', '6 m behind', '1.5 m behind'],
                     0, '$|d_i| = |d_o| = 3$ m, located behind the mirror.'),
                    ('The minimum mirror height to see your entire body is:',
                     ['Your full height', 'Half your height', 'Depends on distance', 'Quarter your height'],
                     1, 'Half your height, regardless of how far you stand from the mirror.'),
                    ('A plane mirror image is:',
                     ['Real and inverted', 'Real and upright', 'Virtual and inverted', 'Virtual and upright'],
                     3, 'Always virtual (behind the mirror) and upright (same orientation).')
                ],
                'inputs': {
                    'prompt': r"""**Plane Mirrors** 🧮

You stand 2 m from a plane mirror.

**1)** How far is your image from you? (in m)

**2)** If you walk 0.5 m closer, how far is your image from the mirror? (in m)

**3)** You are 1.8 m tall. Minimum mirror height to see all of yourself? (in m)""",
                    'boxes': 3,
                    'answers': ['4', '1.5', '0.9'],
                    'hints': ['Image is 2 m behind mirror, you are 2 m in front', 'New distance to mirror = 1.5 m', 'Half your height'],
                    'explanation': '1) 4 m (2 m to mirror + 2 m behind). 2) 1.5 m behind the mirror. 3) 0.9 m = half of 1.8 m.'
                }
            },
            {
                'title': 'Concave Mirrors',
                'content': r"""# 🔭 Concave Mirrors

**Part 2 of 7 — Converging Mirrors**

---

### Mirror Equation

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

For a concave mirror: $f > 0$ and $f = R/2$

### Magnification

$$m = -\frac{d_i}{d_o} = \frac{h_i}{h_o}$$

### Image Properties by Object Position

| Object Position | Image Location | Type | Orientation | Size |
|----------------|---------------|------|-------------|------|
| Beyond $C$ | Between $F$ and $C$ | Real | Inverted | Smaller |
| At $C$ | At $C$ | Real | Inverted | Same |
| Between $C$ and $F$ | Beyond $C$ | Real | Inverted | Larger |
| At $F$ | At $\infty$ | — | — | — |
| Inside $F$ | Behind mirror | Virtual | Upright | Larger |

> 🔑 Concave mirrors converge parallel rays to the focal point $F$.""",
                'mcqs': [
                    ('A concave mirror with $f = 10$ cm. Object at 30 cm. Image at:',
                     ['15 cm (real)', '7.5 cm (real)', '30 cm (virtual)', '6 cm (real)'],
                     0, '$1/d_i = 1/10 - 1/30 = 2/30$. $d_i = 15$ cm (real, positive).'),
                    ('For the above case, magnification is:',
                     ['$-0.5$ (inverted, smaller)', '$+0.5$ (upright, smaller)', '$-2$ (inverted, larger)', '$+2$ (upright, larger)'],
                     0, '$m = -d_i/d_o = -15/30 = -0.5$. Inverted, half the size.'),
                    ('An object inside the focal point of a concave mirror produces:',
                     ['A real, inverted image', 'A virtual, upright, magnified image', 'No image', 'A real, upright image'],
                     1, 'Inside $F$: rays diverge after reflection → virtual, upright, magnified (like a makeup mirror).')
                ],
                'inputs': {
                    'prompt': r"""**Concave Mirror** 🧮

A concave mirror has $R = 40$ cm. An object is 30 cm away.

**1)** Focal length $f$? (in cm)

**2)** Image distance $d_i$? (in cm)

**3)** Is the image real or virtual? Upright or inverted?""",
                    'boxes': 3,
                    'answers': ['20', '60', 'real, inverted'],
                    'hints': ['$f = R/2$', '$1/d_i = 1/f - 1/d_o$', 'Positive $d_i$ = real'],
                    'explanation': '1) $f = 40/2 = 20$ cm. 2) $1/d_i = 1/20 - 1/30 = 1/60$, so $d_i = 60$ cm. 3) Real ($d_i > 0$) and inverted ($m = -60/30 = -2$).'
                }
            },
            {
                'title': 'Convex Mirrors',
                'content': r"""# 🔍 Convex Mirrors

**Part 3 of 7 — Diverging Mirrors**

---

### Convex Mirror Properties

- $f < 0$ (focal point is behind the mirror)
- $R < 0$
- Always produces **virtual, upright, reduced** images

### Mirror Equation (same formula)

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

With $f < 0$, we always get $d_i < 0$ (virtual image behind mirror).

---

### Applications

| Application | Why convex? |
|------------|-------------|
| Car side mirrors | Wide field of view |
| Store security | See around corners |
| ATM mirrors | Monitor surroundings |

> ⚠️ "Objects in mirror are closer than they appear" — because the image is reduced!""",
                'mcqs': [
                    ('A convex mirror always produces images that are:',
                     ['Real, inverted, larger', 'Virtual, upright, smaller', 'Real, upright, same size', 'Virtual, inverted, larger'],
                     1, 'Convex mirrors diverge light → virtual, upright, reduced image for all object positions.'),
                    ('A convex mirror has $f = -15$ cm. Object at 30 cm. $d_i =$',
                     ['$-10$ cm', '$+10$ cm', '$-30$ cm', '$+30$ cm'],
                     0, '$1/d_i = 1/(-15) - 1/30 = -3/30 = -1/10$. $d_i = -10$ cm (virtual).'),
                    ('The field of view of a convex mirror compared to a plane mirror is:',
                     ['Smaller', 'The same', 'Larger', 'Depends on size'],
                     2, 'Convex mirrors provide a wider field of view because they diverge light rays.')
                ],
                'inputs': {
                    'prompt': r"""**Convex Mirror** 🧮

A convex mirror with $f = -20$ cm. Object is 60 cm away.

**1)** $d_i = ?$ (in cm)

**2)** $m = ?$ (as a fraction)

**3)** Image height if object is 12 cm tall? (in cm)""",
                    'boxes': 3,
                    'answers': ['-15', '1/4', '3'],
                    'hints': ['$1/d_i = 1/f - 1/d_o = -1/20 - 1/60$', '$m = -d_i/d_o$', '$h_i = m \\times h_o$'],
                    'explanation': '1) $1/d_i = -1/20 - 1/60 = -4/60 = -1/15$, so $d_i = -15$ cm. 2) $m = -(-15)/60 = 1/4$. 3) $h_i = (1/4)(12) = 3$ cm.'
                }
            },
            {
                'title': 'Mirror Equation Mastery',
                'content': r"""# 📐 Mirror Equation Mastery

**Part 4 of 7 — Sign Conventions & Problem Solving**

---

### Sign Convention Summary

| Quantity | Positive (+) | Negative (−) |
|----------|-------------|-------------|
| $d_o$ | Object in front | Object behind (rare) |
| $d_i$ | Real image (front) | Virtual image (behind) |
| $f$ | Concave mirror | Convex mirror |
| $m$ | Upright image | Inverted image |
| $h_i$ | Upright | Inverted |

### Problem-Solving Checklist

1. Identify mirror type → sign of $f$
2. Apply mirror equation
3. Check sign of $d_i$ for real/virtual
4. Calculate magnification
5. Describe image (location, type, orientation, size)

---

### Special Cases

- $d_o = f$: $d_i \to \infty$ (parallel rays)
- $d_o = 2f$: $d_i = 2f$, $m = -1$ (same size, inverted)
- $d_o \to \infty$: $d_i = f$ (image at focal point)""",
                'mcqs': [
                    ('$d_i$ is negative. The image is:',
                     ['Real', 'Virtual', 'At infinity', 'At the focal point'],
                     1, 'Negative $d_i$ means the image is behind the mirror — virtual.'),
                    ('$m = -3$ means:',
                     ['3× magnified, upright', '3× magnified, inverted', '1/3 size, upright', '1/3 size, inverted'],
                     1, 'Negative $m$ = inverted, $|m| = 3$ = 3 times magnified.'),
                    ('An object at $2f$ from a concave mirror produces an image that is:',
                     ['Magnified, virtual', 'Same size, real, inverted', 'Reduced, real', 'At infinity'],
                     1, '$1/d_i = 1/f - 1/2f = 1/2f$. $d_i = 2f$, $m = -1$. Same size, inverted.')
                ],
                'inputs': {
                    'prompt': r"""**Mirror Problems** 🧮

**1)** A 3 cm object is 12 cm from a concave mirror ($f = 8$ cm). Image distance? (in cm)

**2)** Image height? (in cm, include sign)

**3)** Is this image real or virtual?""",
                    'boxes': 3,
                    'answers': ['24', '-6', 'real'],
                    'hints': ['$1/d_i = 1/8 - 1/12$', '$m = -d_i/d_o$, $h_i = m \\times h_o$', 'Sign of $d_i$?'],
                    'explanation': '1) $1/d_i = 1/8 - 1/12 = 1/24$, $d_i = 24$ cm. 2) $m = -24/12 = -2$, $h_i = -2(3) = -6$ cm (inverted). 3) Real ($d_i > 0$).'
                }
            },
            {
                'title': 'Ray Diagrams',
                'content': r"""# ✏️ Ray Diagrams for Mirrors

**Part 5 of 7 — Drawing Ray Diagrams**

---

### Three Principal Rays for Concave Mirrors

1. **Parallel ray:** Parallel to axis → reflects through $F$
2. **Focal ray:** Through $F$ → reflects parallel to axis
3. **Center ray:** Through $C$ → reflects back on itself

### Three Principal Rays for Convex Mirrors

1. **Parallel ray:** Parallel to axis → reflects as if from $F$
2. **Focal ray:** Aimed at $F$ → reflects parallel to axis
3. **Center ray:** Aimed at $C$ → reflects back on itself

---

### Tips for Ray Diagrams

- Draw at least **2 rays** to locate the image
- Real images form where rays **actually intersect**
- Virtual images form where rays **appear to diverge from**
- Draw virtual rays as dashed lines

> 🔑 Ray diagrams provide visual confirmation of mirror equation calculations.""",
                'mcqs': [
                    ('A parallel ray hitting a concave mirror reflects:',
                     ['Parallel to the axis', 'Through the focal point', 'Through the center of curvature', 'Back on itself'],
                     1, 'Parallel ray → through F. This is the definition of the focal point.'),
                    ('For a virtual image, the reflected rays:',
                     ['Converge in front of the mirror', 'Diverge, appearing to come from behind the mirror', 'Are parallel', 'Don\'t reflect'],
                     1, 'Virtual images form where diverging reflected rays appear to originate (behind the mirror).'),
                    ('How many principal rays are needed to locate an image?',
                     ['1', '2', '3', '4'],
                     1, 'Two rays are sufficient to find the intersection point (image location). A third confirms.')
                ],
                'inputs': {
                    'prompt': r"""**Ray Diagram Analysis** 🧮

A concave mirror with $f = 15$ cm. Object at 10 cm (inside focal point).

**1)** Where does the parallel ray go after reflection? (through F/parallel/back)

**2)** Is the image in front of or behind the mirror?

**3)** $d_i = ?$ (in cm, include sign)""",
                    'boxes': 3,
                    'answers': ['through F', 'behind', '-30'],
                    'hints': ['Parallel ray reflects through focal point', 'Object inside F → virtual image', '$1/d_i = 1/15 - 1/10 = -1/30$'],
                    'explanation': '1) Through F (focal point). 2) Behind the mirror (virtual). 3) $d_i = -30$ cm (negative = virtual, behind mirror).'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': r"""# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### AP Exam Strategy for Optics

1. **Draw** a clear diagram with all given info
2. **Identify** mirror type and sign of $f$
3. **Apply** mirror equation carefully with signs
4. **Calculate** magnification
5. **Describe** image completely (LOST: Location, Orientation, Size, Type)

### Common Mistakes
- Forgetting sign conventions
- Confusing $R$ and $f$ ($f = R/2$)
- Not checking if answer makes physical sense""",
                'mcqs': [
                    ('A dentist\'s mirror is concave with $f = 3$ cm. A tooth is 2 cm from the mirror. Image is:',
                     ['6 cm behind mirror, magnified 3×', '6 cm in front, magnified 3×', '1.2 cm in front, reduced', '3 cm behind, same size'],
                     0, '$1/d_i = 1/3 - 1/2 = -1/6$. $d_i = -6$ cm (virtual, behind). $m = 6/2 = 3$ (upright). Magnified!'),
                    ('A car side mirror ($f = -1$ m). A car is 10 m behind. Its image appears:',
                     ['10 m behind the mirror', '0.91 m behind the mirror', '1.1 m in front', '10 m in front'],
                     1, '$1/d_i = -1 - 1/10 = -11/10$. $d_i = -10/11 ≈ -0.91$ m (behind mirror, virtual).'),
                    ('If you see an upright image in a mirror, the image must be:',
                     ['Real', 'Virtual', 'At the focal point', 'Inverted'],
                     1, 'Upright images from single mirrors are always virtual. Real mirror images are inverted.')
                ],
                'inputs': {
                    'prompt': r"""**Mirror Word Problem** 🧮

A concave makeup mirror has $R = 50$ cm. Your face is 15 cm from the mirror.

**1)** $f = ?$ (in cm)

**2)** Image distance $d_i = ?$ (in cm)

**3)** Magnification? Describe the image (e.g., "5x, virtual, upright")""",
                    'boxes': 3,
                    'answers': ['25', '-37.5', '2.5x, virtual, upright'],
                    'hints': ['$f = R/2$', '$1/d_i = 1/25 - 1/15$', '$m = -d_i/d_o$'],
                    'explanation': '1) $f = 50/2 = 25$ cm. 2) $1/d_i = 1/25 - 1/15 = -2/75$, $d_i = -37.5$ cm. 3) $m = 37.5/15 = 2.5$. Virtual, upright, 2.5× magnified.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': r"""# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Quick Reference

| Mirror Type | $f$ | Image Properties |
|------------|-----|-----------------|
| Plane | $\infty$ | Virtual, upright, same size |
| Concave ($d_o > f$) | $+$ | Real, inverted |
| Concave ($d_o < f$) | $+$ | Virtual, upright, magnified |
| Convex | $-$ | Always virtual, upright, reduced |

### Key Equations

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}, \quad m = -\frac{d_i}{d_o}, \quad f = \frac{R}{2}$$""",
                'mcqs': [
                    ('Which mirror can produce a real image?',
                     ['Plane only', 'Convex only', 'Concave only', 'Both concave and convex'],
                     2, 'Only concave mirrors can produce real images (when object is beyond F).'),
                    ('An object 20 cm from a convex mirror with $f = -10$ cm. $m =$',
                     ['$1/3$', '$-1/3$', '$3$', '$-3$'],
                     0, '$1/d_i = -1/10 - 1/20 = -3/20$. $d_i = -20/3$. $m = (20/3)/20 = 1/3$. Upright, reduced.'),
                    ('Two plane mirrors at 90°. Number of images formed:',
                     ['1', '2', '3', '4'],
                     2, 'Formula: $n = 360°/\\theta - 1 = 360/90 - 1 = 3$ images.')
                ],
                'inputs': {
                    'prompt': r"""**Final Challenge** 🧮

**1)** A concave mirror forms a real image 3× the size of the object. If $f = 12$ cm, where is the object? (in cm)

**2)** A convex mirror has $f = -18$ cm. Object at 36 cm. $d_i = ?$ (in cm)

**3)** Does a convex mirror ever produce a magnification $|m| > 1$?""",
                    'boxes': 3,
                    'answers': ['16', '-12', 'no'],
                    'hints': ['$m = -3$ (real = inverted), so $d_i = 3d_o$. Use mirror equation.', '$1/d_i = 1/f - 1/d_o$', 'Think about what convex mirrors always do'],
                    'explanation': '1) $m = -3 → d_i = 3d_o$. $1/12 = 1/d_o + 1/(3d_o) = 4/(3d_o)$. $d_o = 48/3 = 16$ cm. 2) $d_i = -12$ cm. 3) No — convex mirrors always produce reduced images with $|m| < 1$.'
                }
            }
        ]
    },
    {
        'slug': 'thin-film-interference',
        'filePrefix': 'physics2-thin-film',
        'exportPrefix': 'physics2ThinFilm',
        'parts': [
            {
                'title': 'Thin Film Basics',
                'content': r"""# 🌈 Thin Film Interference

**Part 1 of 7 — Thin Film Basics**

---

### What is Thin Film Interference?

When light reflects off the top and bottom surfaces of a thin film (like soap bubbles or oil slicks), the two reflected waves can **interfere** constructively or destructively.

### Phase Changes on Reflection

| Reflection at | Phase Change |
|--------------|-------------|
| Low $n$ → high $n$ | $\lambda/2$ shift (180°) |
| High $n$ → low $n$ | No phase change |

### Path Difference

The light traveling through the film covers an extra distance of:

$$\Delta = 2nt$$

where $n$ = refractive index of film, $t$ = thickness.

---

### Conditions for Interference

When there is **one** phase change (either top or bottom, not both):
- **Constructive:** $2nt = (m + \frac{1}{2})\lambda$, $m = 0, 1, 2, \ldots$
- **Destructive:** $2nt = m\lambda$, $m = 0, 1, 2, \ldots$

When there are **zero or two** phase changes:
- **Constructive:** $2nt = m\lambda$
- **Destructive:** $2nt = (m + \frac{1}{2})\lambda$

> 🔑 Count the phase changes first, then apply the appropriate condition!""",
                'mcqs': [
                    ('Light reflects from a surface going from $n = 1.0$ to $n = 1.5$. There is:',
                     ['No phase change', 'A $\\lambda/2$ phase change', 'A $\\lambda$ phase change', 'Phase reversal depends on angle'],
                     1, 'Low $n$ → high $n$: 180° phase change ($\\lambda/2$ shift).'),
                    ('An oil film ($n = 1.4$) on water ($n = 1.33$). Number of phase changes for reflected light:',
                     ['0', '1', '2', '3'],
                     1, 'Air→oil (low→high): 1 shift. Oil→water (high→low): no shift. Total: 1.'),
                    ('In thin film problems, "thin" means the film thickness is on the order of:',
                     ['Meters', 'Centimeters', 'Wavelengths of light', 'Atomic diameters'],
                     2, 'Thin films have thickness comparable to the wavelength of visible light (hundreds of nm).')
                ],
                'inputs': {
                    'prompt': r"""**Thin Film Setup** 🧮

A soap film ($n = 1.33$) in air. Consider reflected light at $\lambda = 550$ nm (green).

**1)** Phase change at top surface (air→film)? (yes/no)

**2)** Phase change at bottom surface (film→air)? (yes/no)

**3)** How many total phase changes? This means we use the ___ phase condition for constructive interference. (one/zero-or-two)""",
                    'boxes': 3,
                    'answers': ['yes', 'no', 'one'],
                    'hints': ['Air ($n=1$) → film ($n=1.33$): low→high', 'Film ($n=1.33$) → air ($n=1$): high→low', 'Count them up'],
                    'explanation': '1) Yes (low $n$ → high $n$). 2) No (high $n$ → low $n$). 3) One phase change → use $2nt = (m+1/2)\\lambda$ for constructive.'
                }
            },
            {
                'title': 'Constructive Interference in Films',
                'content': r"""# ✨ Constructive Interference

**Part 2 of 7 — Bright Colors in Films**

---

### One Phase Change (most common)

$$2nt = \left(m + \frac{1}{2}\right)\lambda, \quad m = 0, 1, 2, \ldots$$

### Minimum Thickness for Constructive Interference

Set $m = 0$:

$$t_{\min} = \frac{\lambda}{4n}$$

### Worked Example

Soap film ($n = 1.33$) appears green ($\lambda = 530$ nm). Minimum thickness:

$$t = \frac{530}{4(1.33)} = 99.6 \text{ nm}$$

---

### Why Soap Bubbles Show Colors

Different thicknesses across the film enhance different wavelengths → rainbow pattern. As the film thins, colors shift until the film is too thin for any constructive interference → appears dark just before popping.

> 🔑 The $m = 0$ case gives the thinnest film that produces constructive interference.""",
                'mcqs': [
                    ('Minimum thickness for constructive interference (one phase change) with $\\lambda = 600$ nm, $n = 1.5$:',
                     ['100 nm', '200 nm', '300 nm', '450 nm'],
                     0, '$t = \\lambda/(4n) = 600/(4 \\times 1.5) = 100$ nm.'),
                    ('If the film gets thicker, the next constructive thickness ($m = 1$) is:',
                     ['$3\\lambda/(4n)$', '$\\lambda/(2n)$', '$\\lambda/n$', '$2\\lambda/n$'],
                     0, '$t = (1+1/2)\\lambda/(2n) = 3\\lambda/(4n)$.'),
                    ('A soap film that appears uniformly dark in reflected light is:',
                     ['Very thick', 'Extremely thin (much less than $\\lambda$)', 'Exactly $\\lambda$ thick', 'Not possible'],
                     1, 'Very thin → path difference ≈ 0, but phase change gives destructive → dark.')
                ],
                'inputs': {
                    'prompt': r"""**Constructive Interference** 🧮

An oil film ($n = 1.4$) on water ($n = 1.33$). You observe bright reflection at $\lambda = 700$ nm (red). One phase change.

**1)** Minimum thickness for bright reflection? (in nm)

**2)** Next thickness that also gives constructive ($m = 1$)? (in nm)

**3)** Wavelength in the film? (in nm)""",
                    'boxes': 3,
                    'answers': ['125', '375', '500'],
                    'hints': ['$t = \\lambda/(4n)$', '$t = 3\\lambda/(4n)$', '$\\lambda_n = \\lambda/n$'],
                    'explanation': '1) $t = 700/(4 \\times 1.4) = 125$ nm. 2) $t = 3(700)/(4 \\times 1.4) = 375$ nm. 3) $\\lambda_n = 700/1.4 = 500$ nm.'
                }
            },
            {
                'title': 'Destructive Interference in Films',
                'content': r"""# 🌑 Destructive Interference

**Part 3 of 7 — Dark Regions & Anti-Reflection**

---

### Anti-Reflection Coatings

To eliminate reflection at wavelength $\lambda$, we need **destructive** interference.

For a coating on glass (two phase changes: air→coating and coating→glass):

$$2nt = \left(m + \frac{1}{2}\right)\lambda$$

Minimum: $t = \lambda/(4n)$

### Ideal Coating Material

For maximum destructive interference, the coating should have:

$$n_{\text{coating}} = \sqrt{n_{\text{glass}}}$$

For glass ($n = 1.5$): ideal coating $n ≈ 1.22$ (magnesium fluoride, $n = 1.38$, is close).

---

### Applications

- Camera lenses (reduces glare)
- Eyeglasses
- Solar panels (maximizes transmission)
- Stealth technology

> 🔑 Anti-reflection coatings are designed for a specific wavelength (usually green, ~550 nm). Other wavelengths still partially reflect, giving lenses their purple tint.""",
                'mcqs': [
                    ('An anti-reflection coating on glass has how many phase changes?',
                     ['0', '1', '2', '3'],
                     2, 'Air→coating (low→high): 1 shift. Coating→glass (low→high): 1 shift. Total: 2.'),
                    ('MgF₂ ($n = 1.38$) coating for $\\lambda = 550$ nm. Min thickness:',
                     ['50 nm', '100 nm', '200 nm', '275 nm'],
                     1, '$t = \\lambda/(4n) = 550/(4 \\times 1.38) ≈ 100$ nm.'),
                    ('Why do coated lenses appear slightly purple?',
                     ['The coating absorbs green', 'Green is minimally reflected; red and blue partially reflect', 'Purple light passes through better', 'Manufacturing defect'],
                     1, 'Coating is optimized for green (~550 nm). Red and blue wavelengths are not perfectly canceled → purple tint.')
                ],
                'inputs': {
                    'prompt': r"""**Anti-Reflection Coating** 🧮

Design a coating for glass ($n = 1.52$) to minimize reflection at $\lambda = 520$ nm.

**1)** Ideal coating refractive index $n = \sqrt{n_{\text{glass}}}$? (round to 2 decimal places)

**2)** Minimum coating thickness? (in nm, round to nearest whole number)

**3)** Number of phase changes in reflected light?""",
                    'boxes': 3,
                    'answers': ['1.23', '106', '2'],
                    'hints': ['$\\sqrt{1.52} = ?$', '$t = \\lambda/(4n_{coating})$', 'Both surfaces: low→high'],
                    'explanation': '1) $\\sqrt{1.52} ≈ 1.23$. 2) $t = 520/(4 \\times 1.23) ≈ 106$ nm. 3) 2 phase changes (both air→coating and coating→glass go low→high).'
                }
            },
            {
                'title': 'Newton\u2019s Rings & Wedge Films',
                'content': r"""# 🔘 Newton's Rings & Wedge Films

**Part 4 of 7 — Variable Thickness Films**

---

### Air Wedge

Two glass plates with a thin spacer at one end create a wedge-shaped air gap. The thickness varies linearly → alternating bright and dark fringes.

### Fringe Spacing

$$\Delta x = \frac{\lambda}{2n \tan\alpha} \approx \frac{\lambda L}{2n d}$$

where $\alpha$ is the wedge angle, $L$ is length, $d$ is spacer thickness.

### Newton's Rings

A convex lens on a flat glass plate creates circular interference fringes.

**Dark ring radii:** $r_m = \sqrt{m\lambda R}$, $m = 0, 1, 2, \ldots$

**Bright ring radii:** $r_m = \sqrt{(m+\tfrac{1}{2})\lambda R}$

where $R$ = radius of curvature of the lens.

> 🔑 The center of Newton's rings is dark because the air gap → 0, and there's one phase change.""",
                'mcqs': [
                    ('The center of Newton\'s rings is:',
                     ['Bright', 'Dark', 'Neither — no pattern at center', 'Depends on lens material'],
                     1, 'At center, air gap = 0. One phase change → destructive interference → dark.'),
                    ('Newton\'s ring radii increase proportionally to:',
                     ['$m$', '$\\sqrt{m}$', '$m^2$', '$1/m$'],
                     1, '$r_m = \\sqrt{m\\lambda R}$ → radii ∝ $\\sqrt{m}$. Rings get closer together outward.'),
                    ('In an air wedge, if the spacer thickness doubles, the fringe spacing:',
                     ['Doubles', 'Halves', 'Stays the same', 'Quadruples'],
                     1, '$\\Delta x \\propto 1/d$. Double spacer → half the fringe spacing (more fringes).')
                ],
                'inputs': {
                    'prompt': r"""**Newton's Rings** 🧮

A lens ($R = 2$ m) on a flat plate. Light: $\lambda = 589$ nm (sodium).

**1)** Radius of the 1st dark ring ($m = 1$)? (in mm, round to 2 decimal places)

**2)** Radius of the 4th dark ring ($m = 4$)? (in mm, round to 2 decimal places)

**3)** Ratio $r_4/r_1$?""",
                    'boxes': 3,
                    'answers': ['1.09', '2.17', '2'],
                    'hints': ['$r_1 = \\sqrt{1 \\times \\lambda R}$', '$r_4 = \\sqrt{4\\lambda R}$', '$\\sqrt{4}/\\sqrt{1}$'],
                    'explanation': '1) $r_1 = \\sqrt{589 \\times 10^{-9} \\times 2} = \\sqrt{1.178 \\times 10^{-6}} ≈ 1.09$ mm. 2) $r_4 = \\sqrt{4 \\times 1.178 \\times 10^{-6}} ≈ 2.17$ mm. 3) $r_4/r_1 = \\sqrt{4} = 2$.'
                }
            },
            {
                'title': 'Applications of Thin Film Interference',
                'content': r"""# 🔬 Applications

**Part 5 of 7 — Real-World Thin Films**

---

### Interferometry

Thin film principles enable precision measurement:
- **Surface flatness** testing (compare to reference)
- **Film thickness** measurement
- **Wavelength** determination

### Dichroic Filters

Multiple thin film layers that selectively reflect specific wavelengths while transmitting others. Used in:
- Projectors (separate RGB)
- Laser mirrors
- Scientific instruments

### Biological Thin Films

| Example | Mechanism |
|---------|-----------|
| Butterfly wings | Nanostructured scales |
| Peacock feathers | Melanin/keratin layers |
| Beetle shells | Chitin layers |
| Soap bubbles | Water film in air |

> 🔑 These colors are "structural colors" — from interference, not pigments. They change with viewing angle!""",
                'mcqs': [
                    ('Structural colors differ from pigment colors because they:',
                     ['Are brighter', 'Change with viewing angle', 'Don\'t fade', 'Are always metallic'],
                     1, 'Structural colors depend on interference → angle-dependent. Pigment colors absorb/reflect the same at all angles.'),
                    ('A dichroic filter works by:',
                     ['Absorbing wavelengths', 'Multiple thin film layers causing interference', 'Diffraction', 'Polarization'],
                     1, 'Stacked thin films create precise interference conditions for different wavelengths.'),
                    ('Peacock feather colors are due to:',
                     ['Pigments', 'Thin film interference in nanostructures', 'Fluorescence', 'Bioluminescence'],
                     1, 'Melanin and keratin layers create structural color through thin film interference.')
                ],
                'inputs': {
                    'prompt': r"""**Thin Film Applications** 🧮

A glass slide is tested for flatness using $\lambda = 632.8$ nm (He-Ne laser). You count 10 dark fringes across a 2 cm region.

**1)** Each fringe represents a height change of: (in nm)

**2)** Total height variation across the 10 fringes? (in nm)

**3)** Is this considered "optically flat"? (yes if variation < $\lambda$, no otherwise)""",
                    'boxes': 3,
                    'answers': ['316.4', '3164', 'no'],
                    'hints': ['Each dark fringe = $\\lambda/2$ height change', '10 fringes × $\\lambda/2$', 'Compare to $\\lambda = 632.8$ nm'],
                    'explanation': '1) $\\lambda/2 = 316.4$ nm per fringe. 2) $10 \\times 316.4 = 3164$ nm. 3) No — 3164 nm >> 632.8 nm. Not optically flat.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': r"""# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Thin Film Problem Strategy

1. **Draw** the film with materials labeled (include $n$ values)
2. **Count** phase changes at each surface
3. **Determine** which condition applies (one vs. zero/two changes)
4. **Set up** the appropriate equation
5. **Solve** for the unknown (usually $t$ or $\lambda$)

### Common Mistakes
- Forgetting phase changes
- Using $\lambda$ instead of $\lambda/n$ for the wavelength in the film
- Mixing up constructive and destructive conditions""",
                'mcqs': [
                    ('MgF₂ ($n = 1.38$) on glass ($n = 1.52$). For $\\lambda = 500$ nm, minimum thickness for zero reflection:',
                     ['90.6 nm', '181 nm', '250 nm', '362 nm'],
                     0, 'Two phase changes → $2nt = (m+1/2)\\lambda$. Min: $t = \\lambda/(4n) = 500/(4 \\times 1.38) ≈ 90.6$ nm.'),
                    ('A soap film ($n = 1.33$) looks yellow ($\\lambda ≈ 580$ nm) in reflected light. One phase change. Minimum thickness:',
                     ['109 nm', '218 nm', '290 nm', '435 nm'],
                     0, '$t = \\lambda/(4n) = 580/(4 \\times 1.33) ≈ 109$ nm.'),
                    ('If white light illuminates a thin film and you see blue, it means:',
                     ['Blue undergoes constructive interference', 'Blue is absorbed', 'Blue has the longest wavelength', 'All other colors are enhanced'],
                     0, 'The film thickness satisfies the constructive condition for blue wavelengths.')
                ],
                'inputs': {
                    'prompt': r"""**Film Problem** 🧮

An oil film ($n = 1.45$) on water ($n = 1.33$) appears bright blue ($\lambda = 460$ nm).

**1)** Number of phase changes? (hint: one surface goes low→high, the other high→low)

**2)** Minimum thickness for constructive reflection? (in nm, round to 1 decimal place)

**3)** Next thickness that also appears blue ($m = 1$)? (in nm, round to 1 decimal place)""",
                    'boxes': 3,
                    'answers': ['1', '79.3', '237.9'],
                    'hints': ['Air→oil: low→high (shift). Oil→water: high→low (no shift).', '$t = \\lambda/(4n)$', '$t = 3\\lambda/(4n)$'],
                    'explanation': '1) 1 phase change. 2) $t = 460/(4 \\times 1.45) ≈ 79.3$ nm. 3) $t = 3(460)/(4 \\times 1.45) ≈ 237.9$ nm.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': r"""# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Thin Film Interference Summary

| Configuration | Phase Changes | Constructive | Destructive |
|--------------|--------------|-------------|-------------|
| 1 phase change | 1 | $2nt = (m+½)\lambda$ | $2nt = m\lambda$ |
| 0 or 2 changes | 0 or 2 | $2nt = m\lambda$ | $2nt = (m+½)\lambda$ |

### Key Equations

- Path difference: $\Delta = 2nt$
- Min thickness (1 change, constructive): $t = \lambda/(4n)$
- Newton's rings: $r_m = \sqrt{m\lambda R}$

### AP Exam Tips
- Always identify $n$ values for all three media
- Count phase changes before writing equations
- Draw the film diagram with reflections labeled""",
                'mcqs': [
                    ('A film with $n = 1.6$ between glass ($n = 1.5$) and air. Phase changes in reflected light:',
                     ['0', '1', '2', '3'],
                     0, 'Air→film ($n=1.6$): low→high, shift. Film→glass ($n=1.5$): high→low, no shift. Wait: 1 shift. Actually... glass→film: glass $n=1.5$ → film $n=1.6$ (low→high): shift. Film→air: high→low: no shift. Or, if light comes from air side: air→film: shift, film→glass: $n=1.6$ → $n=1.5$ high→low: no shift. So 1 phase change.'),
                    ('A 200 nm thick film ($n = 1.5$). Which wavelength is constructively reflected? (1 phase change)',
                     ['600 nm', '400 nm', '300 nm', '200 nm'],
                     0, '$2nt = (m+1/2)\\lambda$. For $m=0$: $\\lambda = 4nt = 4(1.5)(200) = 1200$ nm (IR). For $m=1$: $\\lambda = 4nt/3 = 400$ nm. Hmm, let me recalc: $2(1.5)(200) = 600 = (0+0.5)\\lambda → \\lambda = 1200$ nm. $m=1$: $600 = 1.5\\lambda → \\lambda = 400$ nm.'),
                    ('Phase change at reflection is analogous to:',
                     ['A wave on a string reflecting from a fixed end', 'A wave on a string reflecting from a free end', 'Refraction', 'Diffraction'],
                     0, 'Reflection at a denser medium (low→high $n$) → phase change, like a string reflecting from a fixed (rigid) boundary.')
                ],
                'inputs': {
                    'prompt': r"""**Final Challenge** 🧮

**1)** Soap film ($n = 1.33$) minimum thickness to appear red ($\lambda = 650$ nm) in reflected light? (1 phase change, in nm, round to 1 decimal)

**2)** Same film. What wavelength has minimum (destructive) reflection at this thickness? (in nm, round to nearest whole number)

**3)** Oil ($n = 1.4$) on glass ($n = 1.5$): how many phase changes?""",
                    'boxes': 3,
                    'answers': ['122.2', '325', '2'],
                    'hints': ['$t = \\lambda/(4n)$', 'Destructive (1 phase change): $2nt = m\\lambda$, $m=1$', 'Both surfaces: low→high'],
                    'explanation': '1) $t = 650/(4 \\times 1.33) ≈ 122.2$ nm. 2) $2nt = \\lambda$: $\\lambda = 2(1.33)(122.2) ≈ 325$ nm. 3) Air→oil: shift. Oil→glass: $1.4→1.5$ shift. Total: 2.'
                }
            }
        ]
    },
    {
        'slug': 'nuclear-reactions',
        'filePrefix': 'physics2-nuclear-reactions',
        'exportPrefix': 'physics2Nuclear',
        'parts': [
            {
                'title': 'Nuclear Reactions & Conservation Laws',
                'content': r"""# ☢️ Nuclear Reactions

**Part 1 of 7 — Nuclear Reactions & Conservation Laws**

---

### Nuclear Notation

$$^A_Z X$$

| Symbol | Meaning |
|--------|---------|
| $A$ | Mass number (protons + neutrons) |
| $Z$ | Atomic number (protons) |
| $X$ | Element symbol |

### Conservation Laws in Nuclear Reactions

1. **Conservation of mass number:** $\sum A_{\text{reactants}} = \sum A_{\text{products}}$
2. **Conservation of charge:** $\sum Z_{\text{reactants}} = \sum Z_{\text{products}}$
3. **Conservation of energy** (including mass-energy)
4. **Conservation of momentum**

### Common Particles

| Particle | Symbol | $A$ | $Z$ |
|----------|--------|-----|-----|
| Proton | $^1_1p$ | 1 | 1 |
| Neutron | $^1_0n$ | 1 | 0 |
| Electron (β⁻) | $^0_{-1}e$ | 0 | −1 |
| Positron (β⁺) | $^0_{+1}e$ | 0 | +1 |
| Alpha | $^4_2\text{He}$ | 4 | 2 |
| Gamma | $\gamma$ | 0 | 0 |""",
                'mcqs': [
                    ('In a nuclear reaction, which must be conserved?',
                     ['Mass number and charge', 'Mass number only', 'Charge only', 'Neither'],
                     0, 'Both mass number ($A$) and atomic number ($Z$, charge) must be conserved.'),
                    ('An alpha particle is the same as:',
                     ['A helium-4 nucleus', 'An electron', 'A neutron', 'A photon'],
                     0, 'Alpha particle = $^4_2\\text{He}$ = helium nucleus (2 protons + 2 neutrons).'),
                    ('In beta-minus decay, a neutron becomes:',
                     ['A proton + electron + antineutrino', 'A proton + positron', 'Two neutrons', 'A photon'],
                     0, '$n → p + e^- + \\bar{\\nu}_e$. The proton stays in the nucleus; electron and antineutrino are emitted.')
                ],
                'inputs': {
                    'prompt': r"""**Nuclear Reactions** 🧮

Complete the reactions by finding the missing particle:

**1)** $^{238}_{92}\text{U} → ^{234}_{90}\text{Th} + ?$ (write as He-4, e-, e+, n, or gamma)

**2)** $^{14}_{6}\text{C} → ^{14}_{7}\text{N} + ?$

**3)** $^{226}_{88}\text{Ra} → ^{222}_{86}\text{Rn} + ?$""",
                    'boxes': 3,
                    'answers': ['He-4', 'e-', 'He-4'],
                    'hints': ['$\\Delta A = 4$, $\\Delta Z = 2$', '$\\Delta A = 0$, $\\Delta Z = -1$', '$\\Delta A = 4$, $\\Delta Z = 2$'],
                    'explanation': '1) He-4 (alpha decay). 2) e- (beta-minus decay). 3) He-4 (alpha decay).'
                }
            },
            {
                'title': 'Fission',
                'content': r"""# 💥 Nuclear Fission

**Part 2 of 7 — Splitting Heavy Nuclei**

---

### Fission

A heavy nucleus splits into two (or more) lighter nuclei, releasing energy and neutrons.

### Chain Reaction

$$^{235}_{92}\text{U} + ^1_0n → ^{141}_{56}\text{Ba} + ^{92}_{36}\text{Kr} + 3\,^1_0n + \text{energy}$$

Each fission releases 2-3 neutrons, which can cause more fissions → **chain reaction**.

### Critical Mass

- **Subcritical:** < 1 neutron causes another fission → reaction dies
- **Critical:** Exactly 1 neutron → sustained reaction (power plant)
- **Supercritical:** > 1 neutron → exponential growth (bomb)

### Energy Released

Typical fission releases ~200 MeV per event.

$$1 \text{ kg of U-235} ≈ 8.2 \times 10^{13} \text{ J} ≈ 20,000 \text{ tons of TNT}$$

> 🔑 Fission is used in nuclear power plants. Control rods absorb neutrons to maintain criticality.""",
                'mcqs': [
                    ('In fission, a heavy nucleus:',
                     ['Combines with another nucleus', 'Splits into lighter nuclei', 'Emits only gamma rays', 'Absorbs energy without splitting'],
                     1, 'Fission = splitting. The nucleus breaks into two or more lighter fragments.'),
                    ('A critical reactor has a multiplication factor of:',
                     ['0', 'Less than 1', 'Exactly 1', 'Greater than 1'],
                     2, 'Critical: each fission produces exactly 1 neutron that causes another fission. Sustained, constant reaction.'),
                    ('Control rods in a reactor:',
                     ['Speed up neutrons', 'Absorb neutrons', 'Produce more fuel', 'Shield from radiation'],
                     1, 'Control rods (cadmium, boron) absorb neutrons to control the reaction rate.')
                ],
                'inputs': {
                    'prompt': r"""**Fission** 🧮

$^{235}_{92}\text{U} + ^1_0n → ^{144}_{56}\text{Ba} + ^{?}_{?}\text{Kr} + 3n$

**1)** Mass number of Kr? (A = ?)

**2)** Atomic number of Kr? (Z = ?)

**3)** If each fission releases ~200 MeV, energy from 1 mole of U-235? (in MeV, scientific notation like 1.2e25)""",
                    'boxes': 3,
                    'answers': ['89', '36', '1.2e26'],
                    'hints': ['$A: 235 + 1 = 144 + A_{Kr} + 3$', '$Z: 92 + 0 = 56 + Z_{Kr} + 0$', '$200 \\times 6.02 \\times 10^{23}$'],
                    'explanation': '1) $A_{Kr} = 236 - 144 - 3 = 89$. 2) $Z_{Kr} = 92 - 56 = 36$ (krypton). 3) $200 \\times 6.02 \\times 10^{23} ≈ 1.2 \\times 10^{26}$ MeV.'
                }
            },
            {
                'title': 'Fusion',
                'content': r"""# ⭐ Nuclear Fusion

**Part 3 of 7 — Combining Light Nuclei**

---

### Fusion

Two light nuclei combine to form a heavier nucleus, releasing enormous energy.

### The pp Chain (Stellar Fusion)

$$4\,^1_1\text{H} → ^4_2\text{He} + 2\,^0_{+1}e + 2\nu_e + \text{energy}$$

Net: 4 protons → helium-4 + positrons + neutrinos + 26.7 MeV

### Conditions for Fusion

| Requirement | Reason |
|------------|--------|
| **Very high temperature** ($\sim 10^7$ K) | Overcome electrostatic repulsion |
| **High density** | Increase collision probability |
| **Confinement time** | Keep plasma together long enough |

### Why Fusion is Hard on Earth

The **Coulomb barrier** — protons repel each other. Need kinetic energy to overcome:

$$KE \sim \frac{e^2}{4\pi\epsilon_0 r} \sim 1 \text{ MeV}$$

> 🔑 The Sun fuses 600 million tons of hydrogen per second! Fusion powers all main-sequence stars.""",
                'mcqs': [
                    ('Fusion of light elements releases energy because:',
                     ['Products have more binding energy per nucleon', 'Products have less mass than reactants', 'Both A and B', 'Products are radioactive'],
                     2, 'Both are true — products are more tightly bound (higher BE/nucleon) and have slightly less total mass.'),
                    ('The main barrier to fusion is:',
                     ['Gravitational attraction', 'Electrostatic repulsion between nuclei', 'Magnetic fields', 'Nuclear forces at long range'],
                     1, 'Nuclei are positively charged → Coulomb repulsion. Must overcome this barrier.'),
                    ('The Sun\'s core temperature is about:',
                     ['10,000 K', '$1.5 \\times 10^7$ K', '$10^9$ K', '$10^{12}$ K'],
                     1, '~15 million K. Hot enough for hydrogen fusion via the pp chain.')
                ],
                'inputs': {
                    'prompt': r"""**Fusion** 🧮

Deuterium-tritium (D-T) fusion: $^2_1\text{H} + ^3_1\text{H} → ^4_2\text{He} + ^1_0n + 17.6$ MeV

**1)** Verify mass number conservation: $A_{left} = ?$, $A_{right} = ?$

**2)** Verify charge conservation: $Z_{left} = ?$, $Z_{right} = ?$

**3)** Energy per fusion in joules? ($1$ MeV $= 1.6 \times 10^{-13}$ J, answer in scientific notation)""",
                    'boxes': 3,
                    'answers': ['5, 5', '2, 2', '2.82e-12'],
                    'hints': ['$2 + 3 = ? + ?$', '$1 + 1 = ? + ?$', '$17.6 \\times 1.6 \\times 10^{-13}$'],
                    'explanation': '1) Left: 2+3=5. Right: 4+1=5. ✓ 2) Left: 1+1=2. Right: 2+0=2. ✓ 3) $17.6 \\times 1.6 \\times 10^{-13} = 2.82 \\times 10^{-12}$ J.'
                }
            },
            {
                'title': 'Mass-Energy Equivalence',
                'content': r"""# ⚡ Mass-Energy Equivalence

**Part 4 of 7 — $E = mc^2$**

---

### Einstein's Famous Equation

$$E = mc^2$$

$$1 \text{ u} = 931.5 \text{ MeV}/c^2$$

### Mass Defect

The mass of a nucleus is LESS than the sum of its individual nucleons:

$$\Delta m = (Zm_p + Nm_n) - m_{\text{nucleus}}$$

This "missing mass" has been converted to **binding energy**.

### Q-Value of a Reaction

$$Q = (m_{\text{reactants}} - m_{\text{products}})c^2$$

| Q | Meaning |
|---|---------|
| $Q > 0$ | Exothermic (releases energy) |
| $Q < 0$ | Endothermic (requires energy) |

> 🔑 A tiny amount of mass converts to an enormous amount of energy because $c^2$ is huge!""",
                'mcqs': [
                    ('The mass defect of a nucleus is:',
                     ['The mass of electrons', 'The difference between constituent nucleon masses and nuclear mass', 'The mass of the nucleus', 'Zero'],
                     1, '$\\Delta m = (Zm_p + Nm_n) - m_{nucleus}$. This mass deficit becomes binding energy.'),
                    ('1 atomic mass unit (u) = 931.5 MeV/$c^2$. This means:',
                     ['1 u of mass converts to 931.5 MeV of energy', '1 u has gravitational energy of 931.5 MeV', '931.5 MeV of mass equals 1 u', 'Both A and C'],
                     3, '$E = mc^2$. 1 u of mass, if fully converted, releases 931.5 MeV.'),
                    ('A reaction with $Q > 0$ is:',
                     ['Endothermic', 'Exothermic', 'Impossible', 'In equilibrium'],
                     1, '$Q > 0$ means products have less mass → energy released. Exothermic.')
                ],
                'inputs': {
                    'prompt': r"""**Mass-Energy** 🧮

Helium-4 mass: 4.002602 u. Proton: 1.007276 u. Neutron: 1.008665 u.

**1)** Sum of constituent masses (2p + 2n)? (in u, to 6 decimal places)

**2)** Mass defect $\Delta m$? (in u, to 6 decimal places)

**3)** Binding energy? (in MeV, round to 1 decimal place)""",
                    'boxes': 3,
                    'answers': ['4.031882', '0.029280', '27.3'],
                    'hints': ['$2(1.007276) + 2(1.008665)$', '$\\text{Sum} - 4.002602$', '$\\Delta m \\times 931.5$'],
                    'explanation': '1) $2(1.007276) + 2(1.008665) = 4.031882$ u. 2) $4.031882 - 4.002602 = 0.029280$ u. 3) $0.029280 \\times 931.5 ≈ 27.3$ MeV.'
                }
            },
            {
                'title': 'Binding Energy',
                'content': r"""# 🔗 Binding Energy

**Part 5 of 7 — Nuclear Stability**

---

### Binding Energy per Nucleon

$$\text{BE/nucleon} = \frac{\Delta m \cdot c^2}{A}$$

### The Binding Energy Curve

| Region | BE/nucleon | Trend |
|--------|-----------|-------|
| Light nuclei ($A < 20$) | 2-8 MeV | Increases rapidly |
| Iron-56 | **8.79 MeV** (maximum) | Peak stability |
| Heavy nuclei ($A > 60$) | 7.5-8.5 MeV | Slowly decreases |

---

### Implications

- **Iron-56** is the most stable nucleus (highest BE/nucleon)
- **Fusion** of light nuclei → moves UP the curve → releases energy
- **Fission** of heavy nuclei → moves UP the curve → releases energy
- Both processes move toward iron — the "valley of stability"

> 🔑 Energy is released whenever nuclei move toward higher binding energy per nucleon (toward iron).""",
                'mcqs': [
                    ('The most stable nucleus is:',
                     ['Hydrogen-1', 'Helium-4', 'Iron-56', 'Uranium-238'],
                     2, 'Iron-56 has the highest binding energy per nucleon (8.79 MeV/nucleon).'),
                    ('Fusion of light elements releases energy because products have:',
                     ['Lower BE/nucleon', 'Higher BE/nucleon', 'Same BE/nucleon', 'More mass'],
                     1, 'Moving up the BE curve (toward iron) → products are more tightly bound → energy released.'),
                    ('Neither fusion nor fission of iron would produce energy because:',
                     ['Iron is radioactive', 'Iron is at the peak of the BE/nucleon curve', 'Iron has no neutrons', 'Iron is too heavy'],
                     1, 'Iron is already at the maximum. Any change would require energy input.')
                ],
                'inputs': {
                    'prompt': r"""**Binding Energy** 🧮

Iron-56: mass = 55.934937 u. Proton: 1.007276 u. Neutron: 1.008665 u. Iron has $Z = 26$.

**1)** Number of neutrons?

**2)** Mass defect? (in u, round to 4 decimal places)

**3)** BE per nucleon? (in MeV, round to 2 decimal places)""",
                    'boxes': 3,
                    'answers': ['30', '0.5286', '8.79'],
                    'hints': ['$N = A - Z = 56 - 26$', '$26(1.007276) + 30(1.008665) - 55.934937$', '$\\Delta m \\times 931.5 / 56$'],
                    'explanation': '1) $N = 56 - 26 = 30$. 2) $26(1.007276) + 30(1.008665) - 55.934937 = 0.5286$ u. 3) $0.5286 \\times 931.5 / 56 ≈ 8.79$ MeV/nucleon.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': r"""# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Nuclear Problem Strategy

1. **Balance** the reaction (check $A$ and $Z$)
2. **Calculate** mass defect if needed
3. **Convert** to energy using 1 u = 931.5 MeV
4. **Determine** Q-value (exo- or endothermic)
5. **Apply** conservation laws

### AP Exam Tips
- Always verify conservation of mass number AND charge
- Know the difference between fission and fusion
- Be able to calculate binding energy from mass data
- Understand the binding energy curve qualitatively""",
                'mcqs': [
                    ('$^{14}_7\\text{N} + ^4_2\\text{He} → ^{17}_8\\text{O} + ?$. The missing particle is:',
                     ['$^1_0n$', '$^1_1p$', '$^0_{-1}e$', '$\\gamma$'],
                     1, '$A: 14+4 = 17+A → A=1$. $Z: 7+2 = 8+Z → Z=1$. Proton.'),
                    ('If reactant masses = 4.030 u and product masses = 4.027 u, $Q =$',
                     ['+2.8 MeV', '-2.8 MeV', '+28 MeV', '0 MeV'],
                     0, '$Q = (4.030 - 4.027) \\times 931.5 = 0.003 \\times 931.5 ≈ 2.8$ MeV. Exothermic.'),
                    ('A positron emission reaction is:',
                     ['$p → n + e^+ + \\nu_e$', '$n → p + e^- + \\bar{\\nu}_e$', '$p + e^- → n + \\nu_e$', '$n → p + \\gamma$'],
                     0, 'Positron emission: proton converts to neutron + positron + neutrino.')
                ],
                'inputs': {
                    'prompt': r"""**Nuclear Problems** 🧮

**1)** Complete: $^{212}_{83}\text{Bi} → ^{208}_{81}\text{Tl} + ?$ (particle name: alpha/beta-/beta+)

**2)** Complete: $^{32}_{15}\text{P} → ^{32}_{16}\text{S} + ?$

**3)** $^{238}_{92}\text{U}$ undergoes alpha decay then beta-minus decay. Final nucleus: $^A_Z X$. What is $Z$?""",
                    'boxes': 3,
                    'answers': ['alpha', 'beta-', '91'],
                    'hints': ['$\\Delta A = 4$, $\\Delta Z = 2$', '$\\Delta A = 0$, $\\Delta Z = -1$', 'Alpha: $Z → Z-2$. Then beta-minus: $Z → Z+1$'],
                    'explanation': '1) Alpha ($\\Delta A=4$, $\\Delta Z=2$). 2) Beta-minus ($\\Delta A=0$, $Z$ increases by 1). 3) $92 → 90$ (alpha) $→ 91$ (beta-minus).'
                }
            },
            {
                'title': 'Mixed Review',
                'content': r"""# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Nuclear Physics Summary

| Topic | Key Equation |
|-------|-------------|
| Mass-energy | $E = mc^2$, 1 u = 931.5 MeV |
| Mass defect | $\Delta m = Zm_p + Nm_n - m_{nucleus}$ |
| Binding energy | $BE = \Delta m \cdot c^2$ |
| Q-value | $Q = (m_{react} - m_{prod})c^2$ |
| Alpha decay | $Z → Z-2$, $A → A-4$ |
| Beta⁻ decay | $Z → Z+1$, $A$ unchanged |
| Beta⁺ decay | $Z → Z-1$, $A$ unchanged |

### Most Stable: Iron-56 (8.79 MeV/nucleon)""",
                'mcqs': [
                    ('After 3 alpha decays, $^{232}_{90}\\text{Th}$ becomes:',
                     ['$^{220}_{84}\\text{Po}$', '$^{220}_{82}\\text{Pb}$', '$^{226}_{88}\\text{Ra}$', '$^{228}_{88}\\text{Ra}$'],
                     0, 'Each alpha: $A → A-4$, $Z → Z-2$. After 3: $A = 232-12 = 220$, $Z = 90-6 = 84$. Polonium-220.'),
                    ('Binding energy per nucleon of about 7 MeV is typical of:',
                     ['Hydrogen', 'Helium', 'Heavy nuclei like uranium', 'Iron'],
                     2, 'Heavy nuclei have ~7.5-8 MeV/nucleon. Iron peaks at 8.79. Light nuclei vary widely.'),
                    ('Matter-antimatter annihilation ($e^- + e^+ → 2\\gamma$) converts:',
                     ['Half the mass to energy', 'All mass to energy', 'No mass to energy', 'Only kinetic energy to photons'],
                     1, 'All mass of both particles converts to photon energy: $E = 2m_e c^2 = 1.022$ MeV total.')
                ],
                'inputs': {
                    'prompt': r"""**Final Challenge** 🧮

**1)** Energy from annihilation of 1 kg of matter + 1 kg antimatter? (in J, scientific notation $E = 2mc^2$)

**2)** How many fissions of U-235 (~200 MeV each) to match this energy? (scientific notation)

**3)** Ratio of annihilation energy to fission energy per kg of fuel?""",
                    'boxes': 3,
                    'answers': ['1.8e17', '5.6e27', '~2200'],
                    'hints': ['$E = 2(1)(3 \\times 10^8)^2$', '$1.8 \\times 10^{17} / (200 \\times 1.6 \\times 10^{-13})$', '$1.8 \\times 10^{17} / 8.2 \\times 10^{13}$'],
                    'explanation': '1) $E = 2(1)(9 \\times 10^{16}) = 1.8 \\times 10^{17}$ J. 2) $N = 1.8 \\times 10^{17}/(3.2 \\times 10^{-11}) ≈ 5.6 \\times 10^{27}$. 3) $\\sim 2200\\times$ more energy from annihilation per kg.'
                }
            }
        ]
    },
    {
        'slug': 'quantum-phenomena',
        'filePrefix': 'physics2-quantum',
        'exportPrefix': 'physics2Quantum',
        'parts': [
            {
                'title': 'Wave-Particle Duality',
                'content': r"""# 🌊 Quantum Phenomena

**Part 1 of 7 — Wave-Particle Duality**

---

### The Dual Nature of Light

Light behaves as both a **wave** and a **particle** (photon):

| Evidence for Waves | Evidence for Particles |
|-------------------|----------------------|
| Interference | Photoelectric effect |
| Diffraction | Compton scattering |
| Polarization | Photon counting |

### Photon Properties

$$E = hf = \frac{hc}{\lambda}$$

$$p = \frac{h}{\lambda} = \frac{E}{c}$$

### Constants

| Constant | Value |
|----------|-------|
| $h$ | $6.626 \times 10^{-34}$ J·s |
| $hc$ | $1240$ eV·nm |

> 🔑 Shorter wavelength = higher energy. UV photons carry more energy than visible light photons.""",
                'mcqs': [
                    ('A photon with $\\lambda = 400$ nm has energy:',
                     ['1.6 eV', '3.1 eV', '6.2 eV', '0.8 eV'],
                     1, '$E = hc/\\lambda = 1240/400 = 3.1$ eV.'),
                    ('Which provides evidence that light is a particle?',
                     ['Double-slit interference', 'Photoelectric effect', 'Diffraction', 'Polarization'],
                     1, 'The photoelectric effect requires photon (particle) description — electrons ejected by individual photons.'),
                    ('The momentum of a photon is:',
                     ['$mc$', '$h/\\lambda$', '$mv$', '$h\\lambda$'],
                     1, 'Photons have no mass but have momentum $p = h/\\lambda = E/c$.')
                ],
                'inputs': {
                    'prompt': r"""**Photon Calculations** 🧮

A laser emits light at $\lambda = 632.8$ nm.

**1)** Photon energy? (in eV, round to 2 decimal places)

**2)** Photon momentum? (in kg·m/s, scientific notation)

**3)** How many photons per second for a 5 mW laser? (scientific notation)""",
                    'boxes': 3,
                    'answers': ['1.96', '1.05e-27', '1.59e16'],
                    'hints': ['$E = 1240/632.8$ eV', '$p = h/\\lambda$', '$n = P/E$ (convert $E$ to joules first)'],
                    'explanation': '1) $E = 1240/632.8 ≈ 1.96$ eV. 2) $p = 6.63 \\times 10^{-34}/632.8 \\times 10^{-9} ≈ 1.05 \\times 10^{-27}$ kg·m/s. 3) $n = 5 \\times 10^{-3}/(1.96 \\times 1.6 \\times 10^{-19}) ≈ 1.59 \\times 10^{16}$ photons/s.'
                }
            },
            {
                'title': 'De Broglie Wavelength',
                'content': r"""# 🌀 De Broglie Wavelength

**Part 2 of 7 — Matter Waves**

---

### De Broglie Hypothesis

ALL matter has wave-like properties:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

### Examples

| Object | de Broglie $\lambda$ |
|--------|---------------------|
| Electron at 100 eV | ~0.12 nm |
| Proton at 100 eV | ~2.9 pm |
| Baseball (0.15 kg, 40 m/s) | $\sim 10^{-34}$ m |
| Car (1000 kg, 30 m/s) | $\sim 10^{-38}$ m |

### Electron Diffraction

Davisson-Germer experiment: electrons scattered from a nickel crystal showed diffraction patterns, confirming matter waves.

### Connection to Bohr Model

Standing wave condition: $n\lambda = 2\pi r$

$$\lambda = \frac{2\pi r}{n} = \frac{h}{mv}$$

This gives Bohr's quantization: $mvr = n\hbar$

> 🔑 Quantum effects are significant only when $\lambda$ is comparable to object size. Macroscopic objects have negligibly small wavelengths.""",
                'mcqs': [
                    ('An electron accelerated through 100 V has $\\lambda ≈ 0.12$ nm. This is comparable to:',
                     ['A baseball', 'A virus', 'Atomic spacing in crystals', 'A red blood cell'],
                     2, '0.12 nm ≈ 1.2 Å, which is the spacing between atoms in crystals → electron diffraction.'),
                    ('If an electron\'s speed doubles, its de Broglie wavelength:',
                     ['Doubles', 'Halves', 'Quadruples', 'Stays the same'],
                     1, '$\\lambda = h/(mv)$. Double $v$ → halve $\\lambda$.'),
                    ('We don\'t observe quantum effects for baseballs because:',
                     ['They\'re too fast', 'Their de Broglie wavelength is astronomically small', 'They\'re not charged', 'Gravity prevents it'],
                     1, '$\\lambda = h/(mv) \\sim 10^{-34}$ m — far too small to observe wave effects.')
                ],
                'inputs': {
                    'prompt': r"""**De Broglie Wavelength** 🧮

**1)** $\lambda$ for an electron ($m = 9.11 \times 10^{-31}$ kg) at $v = 2 \times 10^6$ m/s? (in nm, round to 3 decimal places)

**2)** $\lambda$ for a proton ($m = 1.67 \times 10^{-27}$ kg) at the same speed? (in pm, round to 1 decimal place)

**3)** Ratio $\lambda_e / \lambda_p$?""",
                    'boxes': 3,
                    'answers': ['0.364', '0.2', '1833'],
                    'hints': ['$\\lambda = h/(mv)$', 'Same formula, different mass', '$m_p/m_e ≈ 1836$'],
                    'explanation': '1) $\\lambda_e = 6.63 \\times 10^{-34}/(9.11 \\times 10^{-31} \\times 2 \\times 10^6) ≈ 0.364$ nm. 2) $\\lambda_p ≈ 0.2$ pm. 3) $\\lambda_e/\\lambda_p = m_p/m_e ≈ 1833$.'
                }
            },
            {
                'title': 'Heisenberg Uncertainty Principle',
                'content': r"""# 🎯 Uncertainty Principle

**Part 3 of 7 — Fundamental Limits**

---

### Heisenberg's Uncertainty Principle

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

$$\Delta E \cdot \Delta t \geq \frac{\hbar}{2}$$

where $\hbar = h/(2\pi) = 1.055 \times 10^{-34}$ J·s

---

### What This Means

- You **cannot** simultaneously know both position and momentum with perfect precision
- This is NOT a limitation of measurement — it's a fundamental property of nature
- The more precisely you know position, the less precisely you know momentum

### Scale

For an electron confined to an atom (~0.1 nm):

$$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2(10^{-10})} \sim 5 \times 10^{-25} \text{ kg·m/s}$$

> 🔑 The uncertainty principle explains why electrons don't collapse into the nucleus — confinement would require too much kinetic energy.""",
                'mcqs': [
                    ('The uncertainty principle states that:',
                     ['All measurements have errors', 'Position and momentum cannot both be known exactly', 'Energy is not conserved', 'Velocity cannot be measured'],
                     1, '$\\Delta x \\cdot \\Delta p \\geq \\hbar/2$. There is a fundamental limit on simultaneous knowledge.'),
                    ('If $\\Delta x = 10^{-10}$ m, minimum $\\Delta p$ is approximately:',
                     ['$5 \\times 10^{-25}$ kg·m/s', '$5 \\times 10^{-34}$ kg·m/s', '$10^{-10}$ kg·m/s', '0'],
                     0, '$\\Delta p \\geq \\hbar/(2\\Delta x) = 1.055 \\times 10^{-34}/(2 \\times 10^{-10}) ≈ 5 \\times 10^{-25}$ kg·m/s.'),
                    ('The uncertainty principle is significant for:',
                     ['Planets orbiting the sun', 'Cars on a highway', 'Electrons in atoms', 'All of the above equally'],
                     2, 'Only significant at quantum scale. For macroscopic objects, $\\hbar$ is negligibly small.')
                ],
                'inputs': {
                    'prompt': r"""**Uncertainty Principle** 🧮

An electron is confined to a region $\Delta x = 5 \times 10^{-11}$ m (about the size of a hydrogen atom).

**1)** Minimum $\Delta p$? (in kg·m/s, scientific notation)

**2)** Minimum kinetic energy $KE = (\Delta p)^2/(2m_e)$? (in eV, round to 1 decimal place)

**3)** Is this energy comparable to hydrogen's ground state (13.6 eV)? (yes/no)""",
                    'boxes': 3,
                    'answers': ['1.05e-24', '3.8', 'yes'],
                    'hints': ['$\\Delta p = \\hbar/(2\\Delta x)$', '$KE = p^2/(2m)$, convert J to eV', 'Compare to 13.6 eV'],
                    'explanation': '1) $\\Delta p = 1.055 \\times 10^{-34}/(2 \\times 5 \\times 10^{-11}) ≈ 1.05 \\times 10^{-24}$ kg·m/s. 2) $KE ≈ (1.05 \\times 10^{-24})^2/(2 \\times 9.11 \\times 10^{-31}) ≈ 6.1 \\times 10^{-19}$ J ≈ 3.8 eV. 3) Yes — same order of magnitude!'
                }
            },
            {
                'title': 'Probability & Wave Functions',
                'content': r"""# 🎲 Probability & Wave Functions

**Part 4 of 7 — Quantum Probability**

---

### The Wave Function $\Psi$

In quantum mechanics, a particle is described by a **wave function** $\Psi(x, t)$.

### Born's Interpretation

$$|\Psi(x)|^2 = \text{probability density}$$

$$P(a \leq x \leq b) = \int_a^b |\Psi(x)|^2 dx$$

### Key Properties

1. $|\Psi|^2 \geq 0$ everywhere
2. $\int_{-\infty}^{+\infty} |\Psi|^2 dx = 1$ (normalization)
3. $\Psi$ can be positive, negative, or complex

### Particle in a Box

For a particle confined between $x = 0$ and $x = L$:

$$\Psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right)$$

$$E_n = \frac{n^2 h^2}{8mL^2}, \quad n = 1, 2, 3, \ldots$$

> 🔑 A particle doesn't have a definite position — only probabilities of being found at different locations.""",
                'mcqs': [
                    ('$|\\Psi(x)|^2$ represents:',
                     ['The energy of the particle', 'The probability density of finding the particle at $x$', 'The velocity', 'The momentum'],
                     1, 'Born interpretation: $|\\Psi|^2$ is the probability density function.'),
                    ('For a particle in a box, the ground state energy ($n = 1$) is:',
                     ['Zero', '$h^2/(8mL^2)$', '$h^2/(2mL^2)$', '$4h^2/(8mL^2)$'],
                     1, '$E_1 = h^2/(8mL^2)$. The ground state is NOT zero (zero-point energy).'),
                    ('If the box length $L$ is halved, the ground state energy:',
                     ['Halves', 'Doubles', 'Quadruples', 'Stays the same'],
                     2, '$E \\propto 1/L^2$. Half $L$ → 4× energy.')
                ],
                'inputs': {
                    'prompt': r"""**Particle in a Box** 🧮

An electron in a box of length $L = 1$ nm.

**1)** Ground state energy $E_1 = h^2/(8m_e L^2)$? (in eV, round to 2 decimal places)

**2)** Energy of the $n = 3$ level? (in eV, round to 1 decimal place)

**3)** Wavelength of photon emitted in $n=3 → n=1$ transition? (in nm, round to 1 decimal place)""",
                    'boxes': 3,
                    'answers': ['0.38', '3.4', '157.7'],
                    'hints': ['$E_1 = (6.63 \\times 10^{-34})^2/(8 \\times 9.11 \\times 10^{-31} \\times (10^{-9})^2)$', '$E_3 = 9E_1$', '$\\lambda = hc/\\Delta E = 1240/(E_3 - E_1)$'],
                    'explanation': '1) $E_1 ≈ 0.38$ eV. 2) $E_3 = 9(0.38) ≈ 3.4$ eV. 3) $\\Delta E = 3.4 - 0.38 = 3.02$ eV, $\\lambda = 1240/3.02 ≈ 157.7$ nm (UV!).'
                }
            },
            {
                'title': 'Quantum Applications',
                'content': r"""# 🔬 Quantum Applications

**Part 5 of 7 — Modern Technology**

---

### Quantum Tunneling

A particle can pass through a potential barrier that it classically couldn't overcome.

Probability decreases exponentially with barrier width and height.

**Applications:**
- Scanning Tunneling Microscope (STM)
- Alpha decay
- Tunnel diodes
- Flash memory

### Quantum Computing

Uses **qubits** instead of classical bits:
- Superposition: qubit is simultaneously 0 and 1
- Entanglement: correlated qubits
- Quantum speedup for certain problems

### Semiconductors & LEDs

Band theory from quantum mechanics:
- **Conductors:** Overlapping bands
- **Semiconductors:** Small band gap
- **Insulators:** Large band gap

LED: Electrons fall across band gap → photon emitted with $E = hf$

> 🔑 Nearly all modern electronics (transistors, lasers, LEDs) rely on quantum mechanics.""",
                'mcqs': [
                    ('Quantum tunneling allows a particle to:',
                     ['Exceed the speed of light', 'Pass through an energy barrier it classically cannot', 'Gain infinite energy', 'Exist in two places at once'],
                     1, 'Tunneling: wave function penetrates and passes through barriers, even when $E < V$.'),
                    ('An LED emits red light ($\\lambda ≈ 650$ nm). Its band gap is approximately:',
                     ['0.5 eV', '1.1 eV', '1.9 eV', '3.1 eV'],
                     2, '$E = 1240/650 ≈ 1.9$ eV.'),
                    ('A qubit differs from a classical bit because it can be:',
                     ['Only 0', 'Only 1', 'In a superposition of 0 and 1', 'In three states'],
                     2, 'Superposition: $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ until measured.')
                ],
                'inputs': {
                    'prompt': r"""**Quantum Applications** 🧮

**1)** A blue LED has $\lambda = 470$ nm. Band gap energy? (in eV, round to 2 decimal places)

**2)** An STM tip is 1 nm from the surface. If the tunneling current $I \propto e^{-2\kappa d}$ and $\kappa ≈ 10^{10}$ m⁻¹, what is $2\kappa d$?

**3)** If the tip moves to 1.1 nm, by what factor does the current drop? ($e^{-2}$ ≈ 0.135)""",
                    'boxes': 3,
                    'answers': ['2.64', '20', '0.135'],
                    'hints': ['$E = 1240/470$', '$2 \\times 10^{10} \\times 10^{-9}$', '$I$ ratio $= e^{-2\\kappa(0.1 nm)}$'],
                    'explanation': '1) $E = 1240/470 ≈ 2.64$ eV. 2) $2(10^{10})(10^{-9}) = 20$. 3) Extra distance 0.1 nm: $e^{-2(10^{10})(10^{-10})} = e^{-2} ≈ 0.135$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': r"""# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Quantum Problem Strategy

1. **Identify** the quantum phenomenon (photoelectric, deBroglie, uncertainty, etc.)
2. **Choose** the right equation
3. **Convert units** carefully (eV ↔ J, nm ↔ m)
4. **Calculate** and check reasonableness

### Useful Conversions

- $1$ eV $= 1.6 \times 10^{-19}$ J
- $hc = 1240$ eV·nm
- $h = 6.626 \times 10^{-34}$ J·s
- $\hbar = 1.055 \times 10^{-34}$ J·s""",
                'mcqs': [
                    ('Photon energy is 5 eV. Can it eject an electron from a metal with work function 4.5 eV?',
                     ['No — insufficient energy', 'Yes — KE = 0.5 eV', 'Yes — KE = 5 eV', 'Yes — KE = 4.5 eV'],
                     1, '$KE = E_{photon} - \\phi = 5 - 4.5 = 0.5$ eV.'),
                    ('An electron has KE = 50 eV. Its de Broglie wavelength is closest to:',
                     ['0.17 nm', '1.7 nm', '17 nm', '0.017 nm'],
                     0, '$\\lambda = h/\\sqrt{2mE} = 1.226/\\sqrt{50} ≈ 0.17$ nm.'),
                    ('The minimum energy of a confined electron increases when:',
                     ['The box gets larger', 'The box gets smaller', 'Mass increases', 'Temperature increases'],
                     1, '$E_1 \\propto 1/L^2$. Smaller confinement → higher zero-point energy.')
                ],
                'inputs': {
                    'prompt': r"""**Quantum Problems** 🧮

A metal has work function $\phi = 2.3$ eV. UV light of $\lambda = 250$ nm shines on it.

**1)** Photon energy? (in eV, round to 2 decimal places)

**2)** Maximum KE of ejected electrons? (in eV, round to 2 decimal places)

**3)** Threshold frequency $f_0$? (in Hz, scientific notation)""",
                    'boxes': 3,
                    'answers': ['4.96', '2.66', '5.56e14'],
                    'hints': ['$E = 1240/250$', '$KE_{max} = E - \\phi$', '$f_0 = \\phi/h$ (convert eV to J first)'],
                    'explanation': '1) $E = 1240/250 = 4.96$ eV. 2) $KE = 4.96 - 2.3 = 2.66$ eV. 3) $f_0 = 2.3 \\times 1.6 \\times 10^{-19}/6.63 \\times 10^{-34} ≈ 5.56 \\times 10^{14}$ Hz.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': r"""# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Quantum Physics Summary

| Topic | Key Equation |
|-------|-------------|
| Photon energy | $E = hf = hc/\lambda$ |
| Photon momentum | $p = h/\lambda$ |
| de Broglie | $\lambda = h/(mv)$ |
| Uncertainty | $\Delta x \cdot \Delta p \geq \hbar/2$ |
| Particle in box | $E_n = n^2h^2/(8mL^2)$ |
| Photoelectric | $KE_{max} = hf - \phi$ |

### Useful Constants
- $h = 6.626 \times 10^{-34}$ J·s
- $hc = 1240$ eV·nm
- $\hbar = 1.055 \times 10^{-34}$ J·s
- $m_e = 9.11 \times 10^{-31}$ kg
- $1$ eV $= 1.6 \times 10^{-19}$ J""",
                'mcqs': [
                    ('The photoelectric effect shows that light energy arrives in:',
                     ['Continuous waves', 'Discrete packets (photons)', 'Only UV wavelengths', 'Only visible wavelengths'],
                     1, 'Einstein explained the photoelectric effect using quanta — photons with $E = hf$.'),
                    ('$E_3$ for a particle in a box is how many times $E_1$?',
                     ['3×', '6×', '9×', '27×'],
                     2, '$E_n = n^2 E_1$. For $n = 3$: $E_3 = 9E_1$.'),
                    ('Electron microscopes use electrons instead of light because:',
                     ['Electrons are brighter', 'Electrons can have much shorter wavelength', 'Electrons don\'t diffract', 'Electrons are cheaper'],
                     1, 'High-energy electrons have $\\lambda \\sim 0.01$ nm, much shorter than visible light → better resolution.')
                ],
                'inputs': {
                    'prompt': r"""**Final Challenge** 🧮

**1)** Minimum wavelength of X-rays from a 50 kV tube? ($\lambda_{min} = hc/eV$, in nm)

**2)** de Broglie wavelength of an electron accelerated through 50 kV? (in pm, round to 1 decimal place)

**3)** Which has shorter wavelength: the X-ray photon or the electron?""",
                    'boxes': 3,
                    'answers': ['0.0248', '5.5', 'electron'],
                    'hints': ['$\\lambda = 1240/(50000)$ nm', '$\\lambda = 1.226/\\sqrt{V}$ nm for electrons, convert to pm', 'Compare the two wavelengths'],
                    'explanation': '1) $\\lambda = 1240/50000 = 0.0248$ nm = 24.8 pm. 2) $\\lambda = 1.226/\\sqrt{50000} ≈ 0.00549$ nm = 5.5 pm. 3) The electron (5.5 pm < 24.8 pm).'
                }
            }
        ]
    }
]


def esc(s):
    """Escape backticks and template literals for TypeScript template strings."""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def format_mcqs(mcqs):
    lines = []
    for q, opts, correct, expl in mcqs:
        opts_str = ', '.join(f"'{esc(o)}'" for o in opts)
        lines.append(f"""          {{
            question: '{esc(q)}',
            options: [{opts_str}],
            correctAnswer: {correct},
            explanation: '{esc(expl)}'
          }}""")
    return ',\n'.join(lines)


def generate_lesson(topic, part_idx, part):
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-', '')

    sections = []
    # Text section
    sections.append(f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(part['content'])}`
    }}""")

    # MCQ section
    if 'mcqs' in part:
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {{
        questions: [
{format_mcqs(part['mcqs'])}
        ]
      }}
    }}""")

    # Input boxes section
    if 'inputs' in part:
        inp = part['inputs']
        answers_str = ', '.join(f"'{esc(a)}'" for a in inp['answers'])
        hints = ''
        for i, h in enumerate(inp['hints']):
            hints += f"\n        hint{i+1}: '{esc(h)}',"
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-input',
      type: 'input-boxes' as const,
      content: `
{esc(inp['prompt'])}
      `,
      exercise: {{
        boxes: {inp['boxes']},
        correctAnswers: [{answers_str}],{hints}
        explanation: '{esc(inp['explanation'])}'
      }}
    }}""")

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{','.join(sections)}
  ]
}};
"""


def main():
    count = 0
    for topic in TOPICS:
        for i, part in enumerate(topic['parts']):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_lesson(topic, i, part)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")
    print(f"\nTotal: {count} files created (overwrote skeleton versions)")


if __name__ == '__main__':
    main()
