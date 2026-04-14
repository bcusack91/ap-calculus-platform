// AP Physics 2 Free Response Questions
// Covers Units 1-7: Fluids, Thermodynamics, E&M, Circuits, Magnetism, Optics, Quantum/Nuclear

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface Physics2FRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

// ─── LONG FRQ 1: Experimental Design — Circuits (Unit 4) ─────────────────────

const longFRQ1: Physics2FRQ = {
  id: 'phys2-frq-long-1',
  type: 'long',
  unit: 4,
  title: 'Experimental Design: V-I Relationship of a Non-Ohmic Bulb',
  prompt:
    'A student has access to a variable DC power supply (0–12 V), a small incandescent light bulb, an ammeter, a voltmeter, connecting wires, and a switch. The student hypothesizes that the light bulb does not obey Ohm\'s law because its resistance changes as it heats up.',
  totalPoints: 7,
  timeRecommendation: '~25 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Design an experiment to collect voltage and current data for the light bulb. Draw a labeled circuit diagram showing how the ammeter and voltmeter should be connected. Explain why you chose your meter placement.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Draws a correct circuit with the ammeter in series with the bulb and the voltmeter in parallel across the bulb, with a variable power supply and switch.',
          keywords: ['ammeter in series', 'voltmeter in parallel', 'circuit diagram', 'variable power supply'],
        },
        {
          points: 1,
          description:
            'Explains that the voltmeter must be across the bulb to measure the potential difference directly, and the ammeter must be in series to measure current through the bulb.',
          keywords: ['potential difference across', 'current through', 'series ammeter', 'parallel voltmeter'],
        },
      ],
      sampleAnswer:
        'Connect the variable power supply in series with the switch, ammeter, and light bulb. Connect the voltmeter in parallel directly across the light bulb terminals. The ammeter is placed in series so it measures the current flowing through the bulb, while the voltmeter is placed in parallel so it measures the potential difference across the bulb alone, not across the ammeter.',
    },
    {
      label: '(b)',
      prompt:
        'Describe a procedure the student should follow to collect sufficient data. Include what quantities are measured, how the independent variable is changed, and how many data points should be collected.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'States that the student should vary the voltage in small increments (e.g., 0.5 V or 1.0 V steps) from 0 V to 12 V, recording voltage and current at each step.',
          keywords: ['vary voltage', 'increments', 'record voltage and current', 'multiple data points'],
        },
        {
          points: 1,
          description:
            'Mentions collecting at least 8–10 data points and allowing the bulb to reach thermal equilibrium at each setting before recording, or repeating trials for reliability.',
          keywords: ['thermal equilibrium', 'steady state', 'multiple trials', 'at least 8 data points'],
        },
      ],
      sampleAnswer:
        'Set the power supply to 0 V and increase in approximately 1.0 V increments up to 12 V. At each voltage setting, wait several seconds for the bulb filament to reach thermal equilibrium, then record the ammeter reading ($I$) and voltmeter reading ($V$). Collect at least 10 data points. Repeat the entire procedure for at least two trials to improve reliability.',
    },
    {
      label: '(c)',
      prompt:
        'The student collects the following data:\n\n| $V$ (V) | 1.0 | 2.0 | 3.0 | 4.0 | 6.0 | 8.0 | 10.0 | 12.0 |\n|---------|-----|-----|-----|-----|-----|-----|------|------|\n| $I$ (A) | 0.20 | 0.33 | 0.43 | 0.50 | 0.60 | 0.67 | 0.71 | 0.75 |\n\nCalculate the resistance of the bulb at $V = 2.0\\,\\text{V}$ and at $V = 12.0\\,\\text{V}$. Use these results to justify whether the bulb is ohmic or non-ohmic.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Correctly calculates $R = V/I$ at both voltages: $R(2\\,\\text{V}) = 2.0/0.33 \\approx 6.1\\,\\Omega$ and $R(12\\,\\text{V}) = 12.0/0.75 = 16.0\\,\\Omega$.',
          keywords: ['R = V/I', '6.1 ohms', '16 ohms', 'resistance calculation'],
        },
        {
          points: 1,
          description:
            'States the bulb is non-ohmic because its resistance increases with voltage (or temperature), and a $V$-$I$ graph would be nonlinear / not pass through the origin as a straight line.',
          keywords: ['non-ohmic', 'resistance increases', 'nonlinear', 'temperature dependent'],
        },
      ],
      sampleAnswer:
        'At $V = 2.0$ V: $R = V/I = 2.0/0.33 \\approx 6.1\\,\\Omega$. At $V = 12.0$ V: $R = V/I = 12.0/0.75 = 16.0\\,\\Omega$. Since the resistance nearly triples as voltage increases, the bulb does not have constant resistance and is therefore non-ohmic. An ohmic device would have the same resistance at every voltage, producing a linear $V$-$I$ graph.',
    },
    {
      label: '(d)',
      prompt:
        'Explain physically why the resistance of the incandescent bulb changes as the applied voltage increases.',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'Explains that as voltage increases, current increases, causing the filament temperature to rise. Higher temperature increases lattice vibrations, which scatter conduction electrons more frequently, increasing resistivity and therefore resistance.',
          keywords: ['filament temperature', 'lattice vibrations', 'electron scattering', 'resistivity increases'],
        },
      ],
      sampleAnswer:
        'As the applied voltage increases, more current flows through the tungsten filament, dissipating more power as heat. The filament temperature rises significantly (up to ~3000 K when glowing brightly). At higher temperatures, the metal ions in the crystal lattice vibrate with greater amplitude, scattering the conduction electrons more frequently. This increased scattering raises the resistivity of tungsten, so the overall resistance of the bulb increases with voltage.',
    },
  ],
  dataTableHtml:
    '<table><tr><th>V (V)</th><td>1.0</td><td>2.0</td><td>3.0</td><td>4.0</td><td>6.0</td><td>8.0</td><td>10.0</td><td>12.0</td></tr><tr><th>I (A)</th><td>0.20</td><td>0.33</td><td>0.43</td><td>0.50</td><td>0.60</td><td>0.67</td><td>0.71</td><td>0.75</td></tr></table>',
}

// ─── LONG FRQ 2: Electromagnetic Induction (Unit 5) ──────────────────────────

const longFRQ2: Physics2FRQ = {
  id: 'phys2-frq-long-2',
  type: 'long',
  unit: 5,
  title: 'Quantitative/Qualitative: Electromagnetic Induction and Faraday\'s Law',
  prompt:
    'A rectangular conducting loop of width $w = 0.10\\,\\text{m}$ and length $l = 0.20\\,\\text{m}$ has a total resistance of $R = 5.0\\,\\Omega$. The loop is pulled at constant velocity $v = 2.0\\,\\text{m/s}$ to the right, entering a region of uniform magnetic field $B = 0.50\\,\\text{T}$ directed into the page. At time $t = 0$, the right edge of the loop is at the left boundary of the field region. The field region extends a distance $d = 0.40\\,\\text{m}$ to the right.',
  totalPoints: 7,
  timeRecommendation: '~25 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Derive an expression for the magnitude of the induced EMF in the loop while the loop is entering the field region (before it is entirely inside). Calculate the numerical value.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Uses Faraday\'s law: $|\\mathcal{E}| = |d\\Phi_B/dt| = B \\cdot w \\cdot v$ and identifies that the flux changes because the area inside the field is increasing at rate $w \\cdot v$.',
          keywords: ['Faraday\'s law', 'dΦ/dt', 'Bwv', 'changing flux'],
        },
        {
          points: 1,
          description:
            'Correctly substitutes: $|\\mathcal{E}| = (0.50)(0.10)(2.0) = 0.10\\,\\text{V}$.',
          keywords: ['0.10 V', '0.1 V', 'substitution', 'numerical answer'],
        },
      ],
      sampleAnswer:
        'As the loop enters the field, the magnetic flux through the loop increases. The area of the loop inside the field at time $t$ is $A = w \\cdot v \\cdot t$, so $\\Phi_B = B \\cdot w \\cdot v \\cdot t$. By Faraday\'s law, $|\\mathcal{E}| = |d\\Phi_B/dt| = B w v = (0.50)(0.10)(2.0) = 0.10\\,\\text{V}$.',
    },
    {
      label: '(b)',
      prompt:
        'Determine the direction of the induced current in the loop while it is entering the field. Justify your answer using Lenz\'s law.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'States the induced current flows counterclockwise in the loop (as viewed from above/front).',
          keywords: ['counterclockwise', 'CCW', 'direction of current'],
        },
        {
          points: 1,
          description:
            'Justifies using Lenz\'s law: the flux into the page is increasing, so the induced current must create a magnetic field out of the page inside the loop to oppose the increase, which requires counterclockwise current by the right-hand rule.',
          keywords: ['Lenz\'s law', 'oppose increase', 'out of the page', 'right-hand rule'],
        },
      ],
      sampleAnswer:
        'The external magnetic field points into the page, and as the loop enters the field region, the flux into the page through the loop is increasing. By Lenz\'s law, the induced current must oppose this change by creating a magnetic field out of the page inside the loop. Using the right-hand rule, this requires the current to flow counterclockwise around the loop.',
    },
    {
      label: '(c)',
      prompt:
        'Calculate the magnitude of the induced current and the power dissipated in the loop while it is entering the field region.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Correctly calculates $I = \\mathcal{E}/R = 0.10/5.0 = 0.020\\,\\text{A}$.',
          keywords: ['I = EMF/R', '0.020 A', '20 mA', 'induced current'],
        },
        {
          points: 1,
          description:
            'Correctly calculates power: $P = I^2 R = (0.020)^2(5.0) = 2.0 \\times 10^{-3}\\,\\text{W}$ or equivalently $P = \\mathcal{E}^2/R = 0.01/5 = 2.0\\,\\text{mW}$.',
          keywords: ['P = I²R', '2.0 mW', '0.002 W', 'power dissipated'],
        },
      ],
      sampleAnswer:
        '$I = \\mathcal{E}/R = 0.10\\,\\text{V} / 5.0\\,\\Omega = 0.020\\,\\text{A}$. The power dissipated is $P = I^2 R = (0.020)^2 (5.0) = 2.0 \\times 10^{-3}\\,\\text{W} = 2.0\\,\\text{mW}$.',
    },
    {
      label: '(d)',
      prompt:
        'After the loop is entirely inside the uniform field region, what is the induced EMF? Explain your reasoning.',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'States the induced EMF is zero because the magnetic flux through the loop is constant (the entire loop is in a uniform field and the area inside the field is not changing), so $d\\Phi_B/dt = 0$.',
          keywords: ['EMF is zero', 'constant flux', 'no change in flux', 'dΦ/dt = 0'],
        },
      ],
      sampleAnswer:
        'When the loop is entirely inside the uniform field region, the magnetic flux through it is $\\Phi_B = B \\cdot w \\cdot l$, which is constant because neither $B$ nor the area inside the field is changing. By Faraday\'s law, $\\mathcal{E} = -d\\Phi_B/dt = 0$. No current flows and no power is dissipated.',
    },
  ],
}

// ─── LONG FRQ 3: Fluids & Thermodynamics (Units 1 & 2) ──────────────────────

const longFRQ3: Physics2FRQ = {
  id: 'phys2-frq-long-3',
  type: 'long',
  unit: 1,
  title: 'Fluid Dynamics and Thermodynamics: Pipe Flow and Heat Engine Cycle',
  prompt:
    'Part I concerns fluid flow through a horizontal pipe system. Part II concerns a heat engine operating on an ideal gas cycle.',
  totalPoints: 7,
  timeRecommendation: '~25 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Water flows steadily through a horizontal pipe that narrows from a cross-sectional area $A_1 = 4.0 \\times 10^{-3}\\,\\text{m}^2$ to $A_2 = 1.0 \\times 10^{-3}\\,\\text{m}^2$. The speed of the water in the wider section is $v_1 = 1.5\\,\\text{m/s}$. Using the continuity equation, calculate the speed $v_2$ in the narrow section.',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'Applies continuity equation $A_1 v_1 = A_2 v_2$ and solves: $v_2 = A_1 v_1 / A_2 = (4.0 \\times 10^{-3})(1.5)/(1.0 \\times 10^{-3}) = 6.0\\,\\text{m/s}$.',
          keywords: ['continuity equation', 'A1v1 = A2v2', '6.0 m/s', 'conservation of mass'],
        },
      ],
      sampleAnswer:
        'By the continuity equation for incompressible flow: $A_1 v_1 = A_2 v_2$. Solving: $v_2 = A_1 v_1 / A_2 = (4.0 \\times 10^{-3})(1.5) / (1.0 \\times 10^{-3}) = 6.0\\,\\text{m/s}$.',
    },
    {
      label: '(b)',
      prompt:
        'The pressure in the wider section is $P_1 = 2.50 \\times 10^5\\,\\text{Pa}$. Using Bernoulli\'s equation, calculate the pressure $P_2$ in the narrow section. The density of water is $\\rho = 1000\\,\\text{kg/m}^3$.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Writes Bernoulli\'s equation for a horizontal pipe: $P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$ (height terms cancel).',
          keywords: ['Bernoulli\'s equation', 'horizontal pipe', 'P + ½ρv²', 'height cancels'],
        },
        {
          points: 1,
          description:
            'Correctly computes $P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2 - v_2^2) = 2.50 \\times 10^5 + \\tfrac{1}{2}(1000)(1.5^2 - 6.0^2) = 2.50 \\times 10^5 - 16875 \\approx 2.33 \\times 10^5\\,\\text{Pa}$.',
          keywords: ['2.33 × 10⁵ Pa', '233000 Pa', 'pressure decrease', 'numerical result'],
        },
      ],
      sampleAnswer:
        'Since the pipe is horizontal, Bernoulli\'s equation gives $P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$. Solving for $P_2$: $P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2 - v_2^2) = 2.50 \\times 10^5 + \\tfrac{1}{2}(1000)(2.25 - 36.0) = 2.50 \\times 10^5 - 16875 = 2.33 \\times 10^5\\,\\text{Pa}$. The pressure decreases in the narrow section, consistent with faster flow.',
    },
    {
      label: '(c)',
      prompt:
        'An ideal gas undergoes a cyclic process consisting of: (1) isobaric expansion at $P = 3.0 \\times 10^5\\,\\text{Pa}$ from volume $V_1 = 2.0 \\times 10^{-3}\\,\\text{m}^3$ to $V_2 = 5.0 \\times 10^{-3}\\,\\text{m}^3$; (2) isochoric pressure decrease to $P = 1.0 \\times 10^5\\,\\text{Pa}$; (3) isobaric compression back to $V_1$; (4) isochoric pressure increase back to the starting state. Calculate the net work done by the gas per cycle.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Identifies that the net work equals the area enclosed by the rectangle on the PV diagram: $W_{\\text{net}} = (P_{\\text{high}} - P_{\\text{low}})(V_2 - V_1)$.',
          keywords: ['area enclosed', 'PV diagram', 'rectangle', 'net work'],
        },
        {
          points: 1,
          description:
            'Correctly calculates $W_{\\text{net}} = (3.0 \\times 10^5 - 1.0 \\times 10^5)(5.0 \\times 10^{-3} - 2.0 \\times 10^{-3}) = (2.0 \\times 10^5)(3.0 \\times 10^{-3}) = 600\\,\\text{J}$.',
          keywords: ['600 J', 'W = ΔP × ΔV', 'net work calculation'],
        },
      ],
      sampleAnswer:
        'On a PV diagram, this cycle traces a rectangle. The net work per cycle equals the enclosed area: $W_{\\text{net}} = (P_{\\text{high}} - P_{\\text{low}})(V_2 - V_1) = (3.0 \\times 10^5 - 1.0 \\times 10^5)(5.0 \\times 10^{-3} - 2.0 \\times 10^{-3}) = (2.0 \\times 10^5)(3.0 \\times 10^{-3}) = 600\\,\\text{J}$.',
    },
    {
      label: '(d)',
      prompt:
        'If the gas absorbs $Q_H = 2400\\,\\text{J}$ of heat from the hot reservoir per cycle, calculate the efficiency of this engine. Compare it to the Carnot efficiency if the hot reservoir is at $T_H = 600\\,\\text{K}$ and the cold reservoir is at $T_C = 300\\,\\text{K}$.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Calculates actual efficiency: $e = W_{\\text{net}}/Q_H = 600/2400 = 0.25 = 25\\%$.',
          keywords: ['e = W/Q_H', '25%', '0.25', 'actual efficiency'],
        },
        {
          points: 1,
          description:
            'Calculates Carnot efficiency $e_C = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\\%$ and states the actual efficiency (25%) is less than the Carnot efficiency (50%), consistent with the second law of thermodynamics.',
          keywords: ['Carnot efficiency', '50%', 'e_C = 1 - T_C/T_H', 'second law'],
        },
      ],
      sampleAnswer:
        'Actual efficiency: $e = W_{\\text{net}}/Q_H = 600/2400 = 0.25 = 25\\%$. Carnot efficiency: $e_C = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\\%$. The actual efficiency of 25% is less than the Carnot limit of 50%, as required by the second law of thermodynamics. No real engine can exceed the Carnot efficiency operating between the same two temperatures.',
    },
  ],
}

// ─── SHORT FRQ 1: Electric Fields and Potential (Unit 3) ─────────────────────

const shortFRQ1: Physics2FRQ = {
  id: 'phys2-frq-short-1',
  type: 'short',
  unit: 3,
  title: 'Electric Fields, Potential, and Charge Distributions',
  prompt:
    'Two point charges are placed on the $x$-axis: $q_1 = +4.0\\,\\mu\\text{C}$ at $x = 0$ and $q_2 = -2.0\\,\\mu\\text{C}$ at $x = 0.30\\,\\text{m}$.',
  totalPoints: 5,
  timeRecommendation: '~15 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Calculate the magnitude and direction of the net electric field at the point $P$ located at $x = 0.10\\,\\text{m}$. Use $k = 9.0 \\times 10^9\\,\\text{N·m}^2/\\text{C}^2$.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Correctly calculates the field from each charge at point P: $E_1 = kq_1/r_1^2 = (9.0 \\times 10^9)(4.0 \\times 10^{-6})/(0.10)^2 = 3.6 \\times 10^6\\,\\text{N/C}$ (to the right, away from $q_1$) and $E_2 = kq_2/r_2^2 = (9.0 \\times 10^9)(2.0 \\times 10^{-6})/(0.20)^2 = 4.5 \\times 10^5\\,\\text{N/C}$ (to the right, toward $q_2$).',
          keywords: ['E = kq/r²', '3.6 × 10⁶ N/C', '4.5 × 10⁵ N/C', 'field from each charge'],
        },
        {
          points: 1,
          description:
            'Adds the fields (both point in the $+x$ direction at $P$) to get $E_{\\text{net}} = 3.6 \\times 10^6 + 4.5 \\times 10^5 = 4.05 \\times 10^6\\,\\text{N/C}$ in the $+x$ direction.',
          keywords: ['4.05 × 10⁶ N/C', 'same direction', '+x direction', 'net field'],
        },
      ],
      sampleAnswer:
        'At $P$, $r_1 = 0.10$ m from $q_1$ and $r_2 = 0.20$ m from $q_2$. $E_1 = kq_1/r_1^2 = (9.0 \\times 10^9)(4.0 \\times 10^{-6})/(0.01) = 3.6 \\times 10^6$ N/C pointing in the $+x$ direction (away from positive $q_1$). $E_2 = k|q_2|/r_2^2 = (9.0 \\times 10^9)(2.0 \\times 10^{-6})/(0.04) = 4.5 \\times 10^5$ N/C pointing in the $+x$ direction (toward negative $q_2$). Both fields point in the same direction, so $E_{\\text{net}} = 3.6 \\times 10^6 + 4.5 \\times 10^5 = 4.05 \\times 10^6$ N/C in the $+x$ direction.',
    },
    {
      label: '(b)',
      prompt:
        'Calculate the electric potential at point $P$ due to both charges.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Calculates $V_1 = kq_1/r_1 = (9.0 \\times 10^9)(4.0 \\times 10^{-6})/(0.10) = 3.6 \\times 10^5\\,\\text{V}$ and $V_2 = kq_2/r_2 = (9.0 \\times 10^9)(-2.0 \\times 10^{-6})/(0.20) = -9.0 \\times 10^4\\,\\text{V}$.',
          keywords: ['V = kq/r', '3.6 × 10⁵ V', '-9.0 × 10⁴ V', 'potential from each'],
        },
        {
          points: 1,
          description:
            'Adds potentials algebraically: $V_P = V_1 + V_2 = 3.6 \\times 10^5 - 9.0 \\times 10^4 = 2.7 \\times 10^5\\,\\text{V}$.',
          keywords: ['2.7 × 10⁵ V', '270000 V', 'scalar sum', 'total potential'],
        },
      ],
      sampleAnswer:
        'Electric potential is a scalar, so $V_P = V_1 + V_2 = kq_1/r_1 + kq_2/r_2 = (9.0 \\times 10^9)(4.0 \\times 10^{-6})/(0.10) + (9.0 \\times 10^9)(-2.0 \\times 10^{-6})/(0.20) = 3.6 \\times 10^5 + (-9.0 \\times 10^4) = 2.7 \\times 10^5$ V.',
    },
    {
      label: '(c)',
      prompt:
        'A small positive test charge is released from rest at point $P$. Describe its subsequent motion and explain your reasoning in terms of the electric field and potential.',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'States the test charge accelerates in the $+x$ direction (direction of the net electric field) because the electric force on a positive charge is in the direction of the field, and it moves from higher to lower potential.',
          keywords: ['accelerates +x', 'direction of field', 'force on positive charge', 'higher to lower potential'],
        },
      ],
      sampleAnswer:
        'The net electric field at $P$ points in the $+x$ direction. Since the test charge is positive, the electric force $\\vec{F} = q\\vec{E}$ also points in the $+x$ direction. The charge accelerates to the right, moving from a region of higher potential toward lower potential, as positive charges naturally do when free to move.',
    },
  ],
}

// ─── SHORT FRQ 2: Optics — Lenses and Mirrors (Unit 6) ──────────────────────

const shortFRQ2: Physics2FRQ = {
  id: 'phys2-frq-short-2',
  type: 'short',
  unit: 6,
  title: 'Geometric Optics: Converging Lens',
  prompt:
    'An object of height $h_o = 3.0\\,\\text{cm}$ is placed $d_o = 20.0\\,\\text{cm}$ in front of a converging (convex) lens with focal length $f = 15.0\\,\\text{cm}$.',
  totalPoints: 5,
  timeRecommendation: '~15 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Using the thin lens equation, calculate the image distance $d_i$. State whether the image is real or virtual.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Applies the thin lens equation $1/f = 1/d_o + 1/d_i$ and solves: $1/d_i = 1/15.0 - 1/20.0 = (4-3)/60 = 1/60$, so $d_i = 60.0\\,\\text{cm}$.',
          keywords: ['thin lens equation', '1/f = 1/d_o + 1/d_i', 'd_i = 60 cm', '60.0 cm'],
        },
        {
          points: 1,
          description:
            'States the image is real because $d_i$ is positive (image is on the opposite side of the lens from the object).',
          keywords: ['real image', 'positive d_i', 'opposite side', 'real'],
        },
      ],
      sampleAnswer:
        'Using $1/f = 1/d_o + 1/d_i$: $1/d_i = 1/f - 1/d_o = 1/15.0 - 1/20.0 = 0.0667 - 0.0500 = 0.0167\\,\\text{cm}^{-1}$, so $d_i = 60.0$ cm. Since $d_i > 0$, the image is real and forms on the opposite side of the lens from the object.',
    },
    {
      label: '(b)',
      prompt:
        'Calculate the magnification and the image height. State whether the image is upright or inverted.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Calculates magnification $m = -d_i/d_o = -60.0/20.0 = -3.0$.',
          keywords: ['m = -d_i/d_o', '-3.0', 'magnification', 'magnitude 3'],
        },
        {
          points: 1,
          description:
            'Calculates image height $h_i = m \\cdot h_o = (-3.0)(3.0) = -9.0\\,\\text{cm}$ and states the image is inverted because $m < 0$ (or $h_i < 0$).',
          keywords: ['-9.0 cm', 'inverted', 'negative magnification', 'image height'],
        },
      ],
      sampleAnswer:
        'Magnification: $m = -d_i/d_o = -60.0/20.0 = -3.0$. Image height: $h_i = m \\cdot h_o = (-3.0)(3.0\\,\\text{cm}) = -9.0\\,\\text{cm}$. The negative sign indicates the image is inverted. The image is real, inverted, magnified by a factor of 3, and located 60 cm from the lens on the far side.',
    },
    {
      label: '(c)',
      prompt:
        'If the object is now moved to $d_o = 10.0\\,\\text{cm}$ (inside the focal point), describe the nature of the image formed (real/virtual, upright/inverted, magnified/diminished) without recalculating. Justify your answer.',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'States the image is virtual, upright, and magnified. Justification: when the object is inside the focal point of a converging lens, diverging rays cannot converge on the far side; the image forms on the same side as the object (virtual), appears upright, and is larger than the object (magnifying glass effect).',
          keywords: ['virtual', 'upright', 'magnified', 'inside focal point'],
        },
      ],
      sampleAnswer:
        'When the object is placed inside the focal length ($d_o < f$), the converging lens cannot bring the refracted rays to a real focus. Instead, the rays diverge on the far side, and when extended backward, they appear to come from a point on the same side as the object. The image is therefore virtual, upright, and magnified — this is the principle behind a magnifying glass.',
    },
  ],
}

// ─── SHORT FRQ 3: Nuclear Physics (Unit 7) ───────────────────────────────────

const shortFRQ3: Physics2FRQ = {
  id: 'phys2-frq-short-3',
  type: 'short',
  unit: 7,
  title: 'Nuclear Decay, Half-Life, and Mass-Energy Equivalence',
  prompt:
    'A sample of radioactive isotope ${}^{60}_{27}\\text{Co}$ (cobalt-60) has an initial activity of $A_0 = 8.0 \\times 10^{10}\\,\\text{Bq}$. Cobalt-60 undergoes beta-minus decay with a half-life of $t_{1/2} = 5.27\\,\\text{years}$.',
  totalPoints: 5,
  timeRecommendation: '~15 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Write the complete nuclear decay equation for the beta-minus decay of cobalt-60. Identify the daughter nucleus.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Writes the correct decay equation: ${}^{60}_{27}\\text{Co} \\to {}^{60}_{28}\\text{Ni} + {}^{\\;\\;0}_{-1}e + \\bar{\\nu}_e$, with conservation of mass number and atomic number.',
          keywords: ['Co-60', 'Ni-60', 'beta particle', 'antineutrino', 'decay equation'],
        },
        {
          points: 1,
          description:
            'Identifies the daughter nucleus as nickel-60 (${}^{60}_{28}\\text{Ni}$) and verifies conservation: mass number $60 = 60 + 0$ and atomic number $27 = 28 + (-1)$.',
          keywords: ['nickel-60', 'Ni-60', 'conservation of mass number', 'conservation of charge'],
        },
      ],
      sampleAnswer:
        '${}^{60}_{27}\\text{Co} \\to {}^{60}_{28}\\text{Ni} + {}^{\\;\\;0}_{-1}e + \\bar{\\nu}_e$. The daughter nucleus is nickel-60. A neutron in the cobalt nucleus converts to a proton, emitting a beta particle (electron) and an electron antineutrino. Mass number is conserved: $60 = 60 + 0$. Atomic number is conserved: $27 = 28 + (-1)$.',
    },
    {
      label: '(b)',
      prompt:
        'Calculate the activity of the sample after $t = 15.81\\,\\text{years}$ (exactly 3 half-lives).',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'Uses $A = A_0 (1/2)^{t/t_{1/2}} = A_0 (1/2)^3 = (8.0 \\times 10^{10})/8 = 1.0 \\times 10^{10}\\,\\text{Bq}$.',
          keywords: ['A = A₀(½)^n', '1.0 × 10¹⁰ Bq', 'three half-lives', 'activity after decay'],
        },
      ],
      sampleAnswer:
        'After 3 half-lives: $A = A_0 \\left(\\frac{1}{2}\\right)^3 = \\frac{8.0 \\times 10^{10}}{8} = 1.0 \\times 10^{10}\\,\\text{Bq}$.',
    },
    {
      label: '(c)',
      prompt:
        'The mass of a cobalt-60 nucleus is $59.9338\\,\\text{u}$. The mass of a nickel-60 nucleus is $59.9308\\,\\text{u}$. The mass of an electron is $0.000549\\,\\text{u}$. Calculate the energy released in a single decay in MeV. Use $1\\,\\text{u} = 931.5\\,\\text{MeV/c}^2$.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Calculates mass defect: $\\Delta m = m_{\\text{Co}} - m_{\\text{Ni}} - m_e = 59.9338 - 59.9308 - 0.000549 = 0.002451\\,\\text{u}$.',
          keywords: ['mass defect', 'Δm', '0.00245 u', 'mass difference'],
        },
        {
          points: 1,
          description:
            'Converts to energy: $E = \\Delta m \\cdot 931.5\\,\\text{MeV/u} = 0.002451 \\times 931.5 \\approx 2.28\\,\\text{MeV}$.',
          keywords: ['E = Δmc²', '2.28 MeV', '931.5 MeV/u', 'energy released'],
        },
      ],
      sampleAnswer:
        'Mass defect: $\\Delta m = 59.9338 - 59.9308 - 0.000549 = 0.002451\\,\\text{u}$. Energy released: $E = \\Delta m \\cdot 931.5\\,\\text{MeV/u} = 0.002451 \\times 931.5 \\approx 2.28\\,\\text{MeV}$. This energy is shared among the kinetic energies of the beta particle, the antineutrino, and the recoiling nickel nucleus.',
    },
  ],
}

// ─── SHORT FRQ 4: Paragraph Argument — Photoelectric Effect (Unit 7) ─────────

const shortFRQ4: Physics2FRQ = {
  id: 'phys2-frq-short-4',
  type: 'short',
  unit: 7,
  title: 'Paragraph Argument: Photoelectric Effect vs. Wave Model of Light',
  prompt:
    'In a photoelectric effect experiment, monochromatic light of various frequencies is directed at a metal surface. The maximum kinetic energy of the ejected photoelectrons is measured as a function of frequency. When the frequency is below a certain threshold $f_0$, no electrons are emitted regardless of the light intensity.',
  totalPoints: 5,
  timeRecommendation: '~15 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'In a coherent, well-organized paragraph, explain why the classical wave model of light fails to account for the observed threshold frequency and the immediate emission of electrons. Use the photon model to explain both observations.',
      maxPoints: 3,
      rubric: [
        {
          points: 1,
          description:
            'Identifies the wave model prediction and its failure: the wave model predicts that any frequency of light should eventually eject electrons if the intensity is high enough (because energy is delivered continuously), but experimentally there is a sharp cutoff frequency below which no emission occurs.',
          keywords: ['wave model fails', 'threshold frequency', 'any frequency should work', 'continuous energy delivery'],
        },
        {
          points: 1,
          description:
            'Explains the photon model resolution: light consists of photons each carrying energy $E = hf$. A photon can only eject an electron if $hf \\geq \\phi$ (the work function). Below the threshold frequency, individual photons lack sufficient energy regardless of intensity.',
          keywords: ['E = hf', 'photon energy', 'work function', 'hf ≥ φ'],
        },
        {
          points: 1,
          description:
            'Addresses immediate emission: in the wave model, a dim light should require time for the electron to accumulate enough energy; in the photon model, a single photon delivers all its energy at once, so emission is instantaneous above threshold.',
          keywords: ['instantaneous emission', 'single photon', 'no time delay', 'immediate ejection'],
        },
      ],
      sampleAnswer:
        'The classical wave model treats light as a continuous electromagnetic wave whose energy depends on intensity, not frequency. Under this model, any frequency of sufficiently intense light should eventually deliver enough energy to an electron to eject it from the surface, and dim light would simply require a longer time for the electron to absorb enough energy. However, experiments show a sharp threshold frequency $f_0$ below which no electrons are emitted regardless of intensity, and above threshold, emission occurs virtually instantaneously even at very low intensities. The photon model resolves both observations: light consists of discrete packets (photons) each carrying energy $E = hf$. For an electron to escape the metal, a single photon must provide energy at least equal to the work function $\\phi$, so $hf \\geq \\phi$, giving the threshold $f_0 = \\phi / h$. Below this frequency, no individual photon has enough energy to liberate an electron, no matter how many photons arrive. Above threshold, the energy transfer is instantaneous because each photon-electron interaction is a single event — there is no need to accumulate energy over time.',
    },
    {
      label: '(b)',
      prompt:
        'The work function of the metal is $\\phi = 4.14\\,\\text{eV}$. Light of frequency $f = 1.5 \\times 10^{15}\\,\\text{Hz}$ strikes the surface. Calculate the maximum kinetic energy of the ejected photoelectrons. Use $h = 4.14 \\times 10^{-15}\\,\\text{eV·s}$.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Applies Einstein\'s photoelectric equation: $K_{\\max} = hf - \\phi$.',
          keywords: ['K_max = hf - φ', 'photoelectric equation', 'Einstein equation'],
        },
        {
          points: 1,
          description:
            'Computes $K_{\\max} = (4.14 \\times 10^{-15})(1.5 \\times 10^{15}) - 4.14 = 6.21 - 4.14 = 2.07\\,\\text{eV}$.',
          keywords: ['2.07 eV', '6.21 eV', 'numerical result', 'kinetic energy'],
        },
      ],
      sampleAnswer:
        '$K_{\\max} = hf - \\phi = (4.14 \\times 10^{-15}\\,\\text{eV·s})(1.5 \\times 10^{15}\\,\\text{Hz}) - 4.14\\,\\text{eV} = 6.21\\,\\text{eV} - 4.14\\,\\text{eV} = 2.07\\,\\text{eV}$.',
    },
  ],
}

// ─── SHORT FRQ 5: RC Circuits (Unit 4) ───────────────────────────────────────

const shortFRQ5: Physics2FRQ = {
  id: 'phys2-frq-short-5',
  type: 'short',
  unit: 4,
  title: 'RC Circuits: Charging, Time Constant, and Energy',
  prompt:
    'A capacitor with capacitance $C = 20.0\\,\\mu\\text{F}$ is connected in series with a resistor $R = 50.0\\,\\text{k}\\Omega$ and a battery of EMF $\\mathcal{E} = 12.0\\,\\text{V}$. A switch is closed at $t = 0$, beginning the charging process. The capacitor is initially uncharged.',
  totalPoints: 5,
  timeRecommendation: '~15 minutes',
  calculatorAllowed: true,
  parts: [
    {
      label: '(a)',
      prompt:
        'Calculate the time constant $\\tau$ of the RC circuit and explain its physical significance.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Calculates $\\tau = RC = (50.0 \\times 10^3)(20.0 \\times 10^{-6}) = 1.0\\,\\text{s}$.',
          keywords: ['τ = RC', '1.0 s', 'time constant', '1.0 second'],
        },
        {
          points: 1,
          description:
            'Explains that $\\tau$ is the time for the capacitor voltage to reach approximately $63\\%$ ($1 - 1/e$) of the final voltage, or equivalently for the charging current to drop to $37\\%$ ($1/e$) of the initial current.',
          keywords: ['63%', '1 - 1/e', '37%', 'physical significance'],
        },
      ],
      sampleAnswer:
        '$\\tau = RC = (50.0 \\times 10^3\\,\\Omega)(20.0 \\times 10^{-6}\\,\\text{F}) = 1.0\\,\\text{s}$. After one time constant, the voltage across the capacitor has reached about 63% of its maximum value ($\\mathcal{E}$), and the charging current has decreased to about 37% of its initial value. The time constant characterizes how quickly the RC circuit responds.',
    },
    {
      label: '(b)',
      prompt:
        'Determine the voltage across the capacitor and the current in the circuit at $t = 2.0\\,\\text{s}$.',
      maxPoints: 2,
      rubric: [
        {
          points: 1,
          description:
            'Calculates $V_C(t) = \\mathcal{E}(1 - e^{-t/\\tau}) = 12.0(1 - e^{-2}) = 12.0(1 - 0.135) = 12.0(0.865) \\approx 10.4\\,\\text{V}$.',
          keywords: ['V = ε(1 - e^(-t/τ))', '10.4 V', 'capacitor voltage', 'charging equation'],
        },
        {
          points: 1,
          description:
            'Calculates $I(t) = (\\mathcal{E}/R)e^{-t/\\tau} = (12.0/50000)e^{-2} = (2.4 \\times 10^{-4})(0.135) \\approx 3.2 \\times 10^{-5}\\,\\text{A} = 32\\,\\mu\\text{A}$.',
          keywords: ['I = (ε/R)e^(-t/τ)', '32 μA', '3.2 × 10⁻⁵ A', 'charging current'],
        },
      ],
      sampleAnswer:
        'At $t = 2.0$ s (which is $2\\tau$): $V_C = \\mathcal{E}(1 - e^{-t/\\tau}) = 12.0(1 - e^{-2}) = 12.0(1 - 0.1353) = 12.0 \\times 0.8647 \\approx 10.4$ V. Current: $I = (\\mathcal{E}/R)e^{-t/\\tau} = (12.0/50000)e^{-2} = (2.40 \\times 10^{-4})(0.1353) \\approx 3.25 \\times 10^{-5}$ A $= 32.5\\,\\mu$A.',
    },
    {
      label: '(c)',
      prompt:
        'Calculate the total energy stored in the capacitor when it is fully charged.',
      maxPoints: 1,
      rubric: [
        {
          points: 1,
          description:
            'Calculates $U = \\tfrac{1}{2}C\\mathcal{E}^2 = \\tfrac{1}{2}(20.0 \\times 10^{-6})(12.0)^2 = \\tfrac{1}{2}(20.0 \\times 10^{-6})(144) = 1.44 \\times 10^{-3}\\,\\text{J} = 1.44\\,\\text{mJ}$.',
          keywords: ['U = ½Cε²', '1.44 mJ', '1.44 × 10⁻³ J', 'energy stored'],
        },
      ],
      sampleAnswer:
        'When fully charged, $V_C = \\mathcal{E} = 12.0$ V. Energy stored: $U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(20.0 \\times 10^{-6})(12.0)^2 = \\tfrac{1}{2}(20.0 \\times 10^{-6})(144) = 1.44 \\times 10^{-3}\\,\\text{J} = 1.44\\,\\text{mJ}$.',
    },
  ],
}

// ─── All Questions ───────────────────────────────────────────────────────────

const allQuestions: Physics2FRQ[] = [
  longFRQ1,
  longFRQ2,
  longFRQ3,
  shortFRQ1,
  shortFRQ2,
  shortFRQ3,
  shortFRQ4,
  shortFRQ5,
]

// ─── Export Functions ────────────────────────────────────────────────────────

export function getPhysics2FRQs(): Physics2FRQ[] {
  return allQuestions
}

export function getLongFRQs(): Physics2FRQ[] {
  return allQuestions.filter((q) => q.type === 'long')
}

export function getShortFRQs(): Physics2FRQ[] {
  return allQuestions.filter((q) => q.type === 'short')
}

export function generateFullExamFRQs(): {
  long: Physics2FRQ[]
  short: Physics2FRQ[]
  totalPoints: number
  totalTime: string
} {
  const longPool = getLongFRQs()
  const shortPool = getShortFRQs()

  // Shuffle and pick 2 long + 3 short
  const shuffledLong = [...longPool].sort(() => Math.random() - 0.5)
  const shuffledShort = [...shortPool].sort(() => Math.random() - 0.5)

  const selectedLong = shuffledLong.slice(0, 2)
  const selectedShort = shuffledShort.slice(0, 3)

  const totalPoints =
    selectedLong.reduce((sum, q) => sum + q.totalPoints, 0) +
    selectedShort.reduce((sum, q) => sum + q.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '~95 minutes',
  }
}
