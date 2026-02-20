#!/usr/bin/env python3
"""Generate MCAT Batch 2: Physics - Mechanics (7), Physics - Electricity & Optics (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# PHYSICS: MECHANICS (7 parts)
###############################################################################

def gen_phys_mech():
    parts = {}
    parts[1] = r"""export const mcatPhysMechPart1Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm1-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 1 of 7 — Kinematics**

### The Big 5 Kinematic Equations

$$v = v_0 + at$$
$$\\Delta x = v_0 t + \\tfrac{1}{2}at^2$$
$$v^2 = v_0^2 + 2a\\Delta x$$
$$\\Delta x = \\tfrac{1}{2}(v_0 + v)t$$
$$\\Delta x = vt - \\tfrac{1}{2}at^2$$

### Projectile Motion

- Horizontal: $a_x = 0$, $v_x = v_0\\cos\\theta = \\text{constant}$
- Vertical: $a_y = -g = -9.8\\;\\text{m/s}^2$
- Time to reach max height: $t = \\frac{v_0\\sin\\theta}{g}$
- Range: $R = \\frac{v_0^2\\sin(2\\theta)}{g}$ (max at 45°)

### MCAT Tip: Free Fall

All objects fall at the same rate regardless of mass (ignoring air resistance). $g \\approx 10\\;\\text{m/s}^2$ for quick calculations on the MCAT.`
    },
    {
      id: 'pm1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Kinematics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A ball is thrown upward at 20 m/s. Using $g = 10\\;\\text{m/s}^2$, the maximum height is:',
            options: ['20 m', '40 m', '10 m', '200 m'],
            correctAnswer: 0,
            explanation: 'Use $v^2 = v_0^2 - 2g\\Delta y$. At max height, $v = 0$: $0 = 400 - 20\\Delta y \\implies \\Delta y = 20$ m.'
          },
          {
            question: 'A projectile is launched at 30° above horizontal. Compared to 60°, it has:',
            options: ['The same range (complementary angles)', 'A longer range', 'A shorter range', 'The same max height'],
            correctAnswer: 0,
            explanation: 'Complementary angles (30° and 60°) give the same range: $R = v_0^2\\sin(2\\theta)/g$. $\\sin(60°) = \\sin(120°)$. But 60° reaches a greater height.'
          }
        ]
      }
    },
    {
      id: 'pm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Use $g \\approx 10\\;\\text{m/s}^2$ for MCAT calculations
- Projectile motion: separate into x (constant velocity) and y (constant acceleration)
- Complementary angles give same range; 45° gives maximum range`
    }
  ]
};
"""

    parts[2] = r"""export const mcatPhysMechPart2Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm2-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 2 of 7 — Newton's Laws & Forces**

### Newton's Three Laws

1. **Inertia**: An object at rest stays at rest; an object in motion stays in motion (unless acted on by a net force)
2. **$F = ma$**: Net force equals mass times acceleration
3. **Action-Reaction**: Every force has an equal and opposite force (on a DIFFERENT object!)

### Common MCAT Forces

| Force | Formula | Direction |
|-------|---------|-----------|
| Weight | $W = mg$ | Downward |
| Normal | $N$ (variable) | Perpendicular to surface |
| Friction (static) | $f_s \\le \\mu_s N$ | Opposes potential motion |
| Friction (kinetic) | $f_k = \\mu_k N$ | Opposes actual motion |
| Tension | $T$ (variable) | Along the string |
| Spring | $F = -kx$ | Restoring (toward equilibrium) |

### Inclined Plane (MCAT FAVORITE)

- Component along plane: $mg\\sin\\theta$
- Component perpendicular: $mg\\cos\\theta$ (= Normal force if no other vertical forces)
- Friction on incline: $f = \\mu mg\\cos\\theta$`
    },
    {
      id: 'pm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Forces & Newton's Laws** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 5 kg block sits on a frictionless 30° incline. The acceleration down the plane is ($g = 10\\;\\text{m/s}^2$):',
            options: ['$5\\;\\text{m/s}^2$ ($g\\sin 30° = 10 \\times 0.5$)', '$10\\;\\text{m/s}^2$', '$8.66\\;\\text{m/s}^2$', '$2.5\\;\\text{m/s}^2$'],
            correctAnswer: 0,
            explanation: 'On a frictionless incline: $a = g\\sin\\theta = 10\\sin 30° = 10(0.5) = 5\\;\\text{m/s}^2$. Note: mass cancels out!'
          },
          {
            question: 'An elevator accelerates upward at $2\\;\\text{m/s}^2$. A 60 kg person inside feels an apparent weight of:',
            options: ['720 N', '600 N', '480 N', '588 N'],
            correctAnswer: 0,
            explanation: 'Apparent weight = $m(g + a) = 60(10 + 2) = 720$ N. Accelerating up increases apparent weight; accelerating down decreases it.'
          }
        ]
      }
    },
    {
      id: 'pm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $F_{net} = ma$: always draw a free body diagram first!
- Incline: $mg\\sin\\theta$ along the plane, $mg\\cos\\theta$ perpendicular
- Elevator problems: apparent weight = $m(g \\pm a)$
- Static friction is a maximum ($f_s \\le \\mu_s N$); kinetic friction is exact ($f_k = \\mu_k N$)`
    }
  ]
};
"""

    parts[3] = r"""export const mcatPhysMechPart3Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm3-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 3 of 7 — Work, Energy & Power**

### Work-Energy Theorem

$$W_{net} = \\Delta KE = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$$

$$W = Fd\\cos\\theta$$

### Conservation of Energy

$$KE_i + PE_i = KE_f + PE_f \\quad (\\text{if no non-conservative forces})$$

- Kinetic energy: $KE = \\frac{1}{2}mv^2$
- Gravitational PE: $PE = mgh$
- Spring PE: $PE = \\frac{1}{2}kx^2$

### Power

$$P = \\frac{W}{t} = Fv$$

Units: Watts (W) = J/s`
    },
    {
      id: 'pm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Work & Energy** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball is dropped from 5 m. Its speed just before hitting the ground is ($g = 10\\;\\text{m/s}^2$):',
            options: ['10 m/s', '5 m/s', '100 m/s', '7.07 m/s'],
            correctAnswer: 0,
            explanation: 'Conservation of energy: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10$ m/s. Mass cancels!'
          },
          {
            question: 'A force of 100 N pushes a box 5 m at a 60° angle to the displacement. The work done is:',
            options: ['250 J', '500 J', '433 J', '0 J'],
            correctAnswer: 0,
            explanation: '$W = Fd\\cos\\theta = 100(5)\\cos 60° = 500(0.5) = 250$ J.'
          }
        ]
      }
    },
    {
      id: 'pm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $W = Fd\\cos\\theta$: only the component of force parallel to displacement does work
- Conservation of energy: $KE + PE = \\text{constant}$ (no friction/air resistance)
- $v = \\sqrt{2gh}$ for an object dropped from height $h$ — memorize this shortcut
- Power = Work/time = Force $\\times$ velocity`
    }
  ]
};
"""

    parts[4] = r"""export const mcatPhysMechPart4Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 4 of 7 — Momentum & Collisions**

### Linear Momentum

$$\\vec{p} = m\\vec{v}$$

### Impulse-Momentum Theorem

$$\\vec{J} = \\vec{F}\\Delta t = \\Delta\\vec{p}$$

### Conservation of Momentum

$$m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$$

Always conserved in the absence of external forces!

### Collision Types

| Type | Momentum | Kinetic Energy |
|------|----------|---------------|
| Elastic | Conserved | Conserved |
| Inelastic | Conserved | NOT conserved (some lost to heat/deformation) |
| Perfectly inelastic | Conserved | Maximum KE loss (objects stick together) |

For perfectly inelastic: $m_1v_1 + m_2v_2 = (m_1 + m_2)v_f$`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Momentum** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 1000 kg car at 20 m/s collides with a stationary 2000 kg truck. They stick together. The final velocity is:',
            options: ['6.67 m/s', '10 m/s', '20 m/s', '3.33 m/s'],
            correctAnswer: 0,
            explanation: 'Perfectly inelastic: $m_1v_1 = (m_1 + m_2)v_f$. $1000(20) = 3000 \\cdot v_f \\implies v_f = 20{,}000/3000 \\approx 6.67$ m/s.'
          }
        ]
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Momentum is ALWAYS conserved in collisions (absent external forces)
- KE is ONLY conserved in elastic collisions
- Perfectly inelastic = objects stick together = maximum KE loss
- Impulse ($F\\Delta t$) = change in momentum — explains why airbags work (increase $\\Delta t$)`
    }
  ]
};
"""

    parts[5] = r"""export const mcatPhysMechPart5Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 5 of 7 — Fluids (ULTRA HIGH YIELD)**

### Density & Pressure

$$\\rho = \\frac{m}{V} \\qquad P = \\frac{F}{A}$$

### Hydrostatic Pressure

$$P = P_0 + \\rho g h$$

where $P_0$ = atmospheric pressure (1 atm = 101,325 Pa)

### Pascal's Principle

Pressure applied to a confined fluid is transmitted equally: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$

### Archimedes' Principle (Buoyancy)

$$F_b = \\rho_{fluid} \\cdot V_{displaced} \\cdot g$$

Object floats if $\\rho_{object} < \\rho_{fluid}$

### Bernoulli's Equation (Conservation of Energy for Fluids)

$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$

### Continuity Equation

$$A_1 v_1 = A_2 v_2$$

Narrower pipe → faster flow → lower pressure (Venturi effect)`
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Fluids** 🎯',
      exercise: {
        questions: [
          {
            question: 'Blood flows through an artery that narrows. In the narrow section, compared to the wide section:',
            options: ['Velocity increases and pressure decreases', 'Both velocity and pressure increase', 'Velocity decreases and pressure increases', 'Both decrease'],
            correctAnswer: 0,
            explanation: 'By continuity ($A_1v_1 = A_2v_2$): smaller area → faster flow. By Bernoulli: faster flow → lower pressure. This is the Venturi effect and explains how aneurysms can expand (wider → slower → higher pressure on walls).'
          },
          {
            question: 'A block of wood ($\\rho = 600\\;\\text{kg/m}^3$) floats in water ($\\rho = 1000\\;\\text{kg/m}^3$). What fraction is submerged?',
            options: ['60%', '40%', '100%', '50%'],
            correctAnswer: 0,
            explanation: 'For floating: $\\rho_{object}/\\rho_{fluid} = V_{submerged}/V_{total} = 600/1000 = 0.60$. So 60% is submerged.'
          }
        ]
      }
    },
    {
      id: 'pm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Bernoulli: faster flow → lower pressure (explains aneurysms, airplane lift)
- Continuity: $A_1v_1 = A_2v_2$ (incompressible fluid)
- Buoyancy: object floats when $\\rho_{object} < \\rho_{fluid}$
- Hydrostatic pressure increases with depth: $P = P_0 + \\rho gh$`
    }
  ]
};
"""

    parts[6] = r"""export const mcatPhysMechPart6Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm6-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 6 of 7 — Torque, Equilibrium & Simple Machines**

### Torque

$$\\tau = rF\\sin\\theta$$

- $r$ = distance from pivot (lever arm)
- Counterclockwise = positive (by convention)

### Equilibrium Conditions

For static equilibrium: $\\sum F = 0$ AND $\\sum \\tau = 0$

### Center of Mass

$$x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i}$$

### Simple Machines

- **Lever**: $F_1 d_1 = F_2 d_2$ (mechanical advantage)
- **Pulley**: redirects force; compound pulleys multiply force
- **Inclined plane**: reduces force needed but increases distance

**Key Principle**: Machines reduce force but NEVER reduce work ($W = Fd$ is constant).`
    },
    {
      id: 'pm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Torque & Equilibrium** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 3 m uniform beam (mass 10 kg) is supported at one end. A 20 kg mass hangs from the other end. The torque about the support point is ($g = 10\\;\\text{m/s}^2$):',
            options: ['750 N$\\cdot$m', '600 N$\\cdot$m', '450 N$\\cdot$m', '300 N$\\cdot$m'],
            correctAnswer: 0,
            explanation: 'Beam weight acts at center of mass (1.5 m from support): $\\tau_1 = 10(10)(1.5) = 150$ N$\\cdot$m. Hanging mass: $\\tau_2 = 20(10)(3) = 600$ N$\\cdot$m. Total: $150 + 600 = 750$ N$\\cdot$m.'
          }
        ]
      }
    },
    {
      id: 'pm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Torque = $rF\\sin\\theta$; maximum when force is perpendicular to lever arm
- Equilibrium: $\\sum F = 0$ AND $\\sum \\tau = 0$ (choose any pivot point!)
- Simple machines trade force for distance; work is conserved
- MCAT loves beam/seesaw problems — practice them!`
    }
  ]
};
"""

    parts[7] = r"""export const mcatPhysMechPart7Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm7-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 7 of 7 — Waves & Sound**

### Wave Properties

$$v = f\\lambda \\qquad T = \\frac{1}{f}$$

- **Transverse**: oscillation perpendicular to propagation (light, string waves)
- **Longitudinal**: oscillation parallel to propagation (sound)

### Sound

- Speed in air: $\\approx 340\\;\\text{m/s}$ (faster in denser media)
- **Intensity**: $I = \\frac{P}{4\\pi r^2}$ (inverse square law)
- **Decibels**: $\\beta = 10\\log(I/I_0)$ where $I_0 = 10^{-12}\\;\\text{W/m}^2$
- Every 10 dB increase = 10× intensity

### Doppler Effect

$$f' = f\\frac{v \\pm v_{observer}}{v \\mp v_{source}}$$

- Source approaching → higher frequency (pitch)
- Source receding → lower frequency

### Standing Waves

- **Both ends fixed**: $\\lambda_n = \\frac{2L}{n}$, $f_n = n\\frac{v}{2L}$
- **One end open**: $\\lambda_n = \\frac{4L}{n}$ (odd harmonics only: $n = 1, 3, 5...$)`
    },
    {
      id: 'pm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Waves & Sound** 🎯',
      exercise: {
        questions: [
          {
            question: 'An ambulance siren produces sound at 500 Hz. As it approaches you at 34 m/s (speed of sound = 340 m/s), you hear:',
            options: ['~556 Hz (higher pitch)', '~450 Hz', '500 Hz', '~600 Hz'],
            correctAnswer: 0,
            explanation: 'Source approaching: $f\' = f \\cdot v/(v - v_s) = 500(340)/(340 - 34) = 500(340/306) \\approx 556$ Hz. Higher frequency = higher pitch.'
          },
          {
            question: 'Increasing sound intensity by a factor of 100 increases the decibel level by:',
            options: ['20 dB', '10 dB', '100 dB', '2 dB'],
            correctAnswer: 0,
            explanation: '$\\Delta\\beta = 10\\log(100) = 10(2) = 20$ dB. Each factor of 10 in intensity = +10 dB.'
          }
        ]
      }
    },
    {
      id: 'pm7-summary',
      type: 'text' as const,
      content: `### Physics Mechanics — Complete! ✅

Key formulas: $v = f\\lambda$, Doppler effect, inverse square law for intensity. Sound travels faster in denser media (opposite of light!). Standing wave harmonics depend on boundary conditions.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-physics-mechanics-mcat-part{i}.ts', parts[i])


###############################################################################
# PHYSICS: ELECTRICITY & OPTICS (7 parts)
###############################################################################

def gen_phys_elec():
    parts = {}
    parts[1] = r"""export const mcatPhysElecPart1Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe1-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 1 of 7 — Electrostatics**

### Coulomb's Law

$$F = k\\frac{q_1 q_2}{r^2} \\qquad k = 8.99 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$$

- Like charges repel, opposite charges attract
- Force is proportional to $1/r^2$ (inverse square law)

### Electric Field

$$\\vec{E} = \\frac{F}{q} = k\\frac{Q}{r^2}$$

- Points AWAY from positive charges, TOWARD negative charges
- Units: N/C or V/m

### Electric Potential (Voltage)

$$V = k\\frac{Q}{r} \\qquad \\Delta V = -\\int \\vec{E}\\cdot d\\vec{r}$$

### Electric Potential Energy

$$U = k\\frac{q_1 q_2}{r} = qV$$

- Positive charges move from high V to low V spontaneously
- Negative charges move from low V to high V spontaneously`
    },
    {
      id: 'pe1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Electrostatics** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the distance between two charges is tripled, the electrostatic force becomes:',
            options: ['1/9 of the original (inverse square law)', '1/3 of the original', '3 times the original', '9 times the original'],
            correctAnswer: 0,
            explanation: 'Coulomb\\'s law: $F \\propto 1/r^2$. If $r \\to 3r$: $F \\to F/(3^2) = F/9$.'
          },
          {
            question: 'The electric field between two large parallel plates (capacitor) is:',
            options: ['Uniform (same magnitude everywhere between plates)', 'Stronger near the positive plate', 'Zero', 'Inversely proportional to distance'],
            correctAnswer: 0,
            explanation: 'Between parallel plates, $E = V/d$ is uniform. This is why parallel plate capacitors are used in many MCAT problems — the uniform field simplifies calculations.'
          }
        ]
      }
    },
    {
      id: 'pe1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Coulomb's law: $F \\propto q_1 q_2/r^2$, same form as gravity
- E-field points away from +, toward −
- $V = kQ/r$ (scalar, not vector — easier to calculate!)
- Potential energy: $U = kq_1q_2/r = qV$`
    }
  ]
};
"""

    parts[2] = r"""export const mcatPhysElecPart2Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe2-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 2 of 7 — Circuits (HIGH YIELD)**

### Ohm's Law

$$V = IR$$

### Kirchhoff's Laws

1. **Junction Rule**: Current in = current out ($\\sum I_{in} = \\sum I_{out}$)
2. **Loop Rule**: Total voltage around a loop = 0 ($\\sum V = 0$)

### Series vs. Parallel Resistors

| Configuration | Resistance | Current | Voltage |
|--------------|-----------|---------|---------|
| Series | $R_T = R_1 + R_2 + ...$ | Same through each | Divides |
| Parallel | $\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$ | Divides | Same across each |

### Power

$$P = IV = I^2R = \\frac{V^2}{R}$$

### Capacitors

$$C = \\frac{Q}{V} \\qquad U = \\frac{1}{2}CV^2$$

- Series: $\\frac{1}{C_T} = \\frac{1}{C_1} + \\frac{1}{C_2}$ (OPPOSITE of resistors!)
- Parallel: $C_T = C_1 + C_2$ `
    },
    {
      id: 'pe2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Circuits** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two resistors ($3\\;\\Omega$ and $6\\;\\Omega$) are in parallel. The equivalent resistance is:',
            options: ['$2\\;\\Omega$', '$9\\;\\Omega$', '$4.5\\;\\Omega$', '$1.5\\;\\Omega$'],
            correctAnswer: 0,
            explanation: '$1/R_T = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2$. So $R_T = 2\\;\\Omega$. Parallel resistance is always LESS than the smallest individual resistor.'
          },
          {
            question: 'A 12 V battery drives 2 A through a circuit. The total power dissipated is:',
            options: ['24 W', '6 W', '144 W', '48 W'],
            correctAnswer: 0,
            explanation: '$P = IV = 2(12) = 24$ W. Could also use $P = I^2R$ or $V^2/R$ if you know the resistance.'
          }
        ]
      }
    },
    {
      id: 'pe2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Series: same current, voltages add, $R_{total}$ increases
- Parallel: same voltage, currents add, $R_{total}$ decreases
- Capacitors add OPPOSITE to resistors! (parallel: $C$ adds; series: $1/C$ adds)
- $P = IV = I^2R = V^2/R$ — know all three forms`
    }
  ]
};
"""

    parts[3] = r"""export const mcatPhysElecPart3Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe3-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 3 of 7 — Magnetism**

### Magnetic Force on a Moving Charge

$$F = qvB\\sin\\theta$$

- Direction: Right-hand rule (fingers from $\\vec{v}$ to $\\vec{B}$, thumb = $\\vec{F}$)
- Force is PERPENDICULAR to both velocity and field
- Stationary charges feel NO magnetic force

### Circular Motion in a Magnetic Field

$$qvB = \\frac{mv^2}{r} \\implies r = \\frac{mv}{qB}$$

### Force on a Current-Carrying Wire

$$F = ILB\\sin\\theta$$

### Electromagnetic Induction (Faraday's Law)

$$\\varepsilon = -\\frac{d\\Phi_B}{dt}$$

- Changing magnetic flux induces an EMF (voltage)
- **Lenz's Law**: Induced current opposes the change that caused it`
    },
    {
      id: 'pe3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Magnetism** 🎯',
      exercise: {
        questions: [
          {
            question: 'A proton moves parallel to a magnetic field. The magnetic force on it is:',
            options: ['Zero ($\\sin 0° = 0$)', 'Maximum', 'Equal to $qvB$', 'Depends on speed only'],
            correctAnswer: 0,
            explanation: '$F = qvB\\sin\\theta$. When $\\vec{v}$ is parallel to $\\vec{B}$, $\\theta = 0°$, and $\\sin 0° = 0$. The charge must have a velocity component PERPENDICULAR to $\\vec{B}$ to feel a force.'
          }
        ]
      }
    },
    {
      id: 'pe3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Magnetic force: $F = qvB\\sin\\theta$ (zero when parallel!)
- Magnetic force does NO work (always perpendicular to velocity)
- Right-hand rule for direction: point fingers from $\\vec{v}$ to $\\vec{B}$
- Faraday: changing flux → induced EMF; Lenz: opposes the change`
    }
  ]
};
"""

    parts[4] = r"""export const mcatPhysElecPart4Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe4-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 4 of 7 — Optics: Reflection & Refraction**

### Law of Reflection

$$\\theta_{incident} = \\theta_{reflected}$$

(Angles measured from the normal!)

### Snell's Law (Refraction)

$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$

- $n$ = index of refraction ($n = c/v$, always $\\ge 1$)
- Light bends TOWARD normal when entering denser medium ($n_2 > n_1$)
- Light bends AWAY from normal when entering less dense medium

### Total Internal Reflection

$$\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)$$

- Only occurs when going from denser to less dense medium
- Angle of incidence must exceed the critical angle
- Applications: fiber optics, diamond sparkle`
    },
    {
      id: 'pe4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Optics: Refraction** 🎯',
      exercise: {
        questions: [
          {
            question: 'Light passes from water ($n = 1.33$) into air ($n = 1.00$). The critical angle for total internal reflection is approximately:',
            options: ['49° ($\\sin^{-1}(1/1.33) \\approx 49°$)', '90°', '33°', '75°'],
            correctAnswer: 0,
            explanation: '$\\sin\\theta_c = n_2/n_1 = 1.00/1.33 = 0.75$. $\\theta_c = \\sin^{-1}(0.75) \\approx 49°$. Any light hitting the water-air surface at $> 49°$ from normal undergoes total internal reflection.'
          }
        ]
      }
    },
    {
      id: 'pe4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Snell's law: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$
- Entering denser medium → bend toward normal (slower speed)
- Total internal reflection: only denser → less dense, beyond critical angle
- All angles measured from the NORMAL, not the surface!`
    }
  ]
};
"""

    parts[5] = r"""export const mcatPhysElecPart5Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe5-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 5 of 7 — Lenses & Mirrors**

### Thin Lens / Mirror Equation

$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

### Magnification

$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

- $|m| > 1$: enlarged; $|m| < 1$: reduced
- $m > 0$: upright; $m < 0$: inverted

### Sign Conventions

| Quantity | Positive | Negative |
|----------|----------|----------|
| $d_o$ | Object on same side as incoming light | (Virtual object) |
| $d_i$ | Image on opposite side (real) | Same side as object (virtual) |
| $f$ | Converging (convex lens/concave mirror) | Diverging (concave lens/convex mirror) |

### MCAT Must-Know

- **Concave mirror / Convex lens**: Converging, $f > 0$
- **Convex mirror / Concave lens**: Diverging, $f < 0$, always produces virtual, upright, reduced image`
    },
    {
      id: 'pe5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Lenses & Mirrors** 🎯',
      exercise: {
        questions: [
          {
            question: 'An object is placed 30 cm from a converging lens with $f = 20$ cm. The image distance is:',
            options: ['60 cm (real, inverted)', '12 cm', '-60 cm', '10 cm'],
            correctAnswer: 0,
            explanation: '$1/f = 1/d_o + 1/d_i \\implies 1/20 = 1/30 + 1/d_i \\implies 1/d_i = 1/20 - 1/30 = 3/60 - 2/60 = 1/60$. So $d_i = 60$ cm (positive = real image, on opposite side of lens).'
          },
          {
            question: 'A convex mirror always produces images that are:',
            options: ['Virtual, upright, and reduced', 'Real, inverted, and enlarged', 'Virtual, inverted, and reduced', 'Real, upright, and enlarged'],
            correctAnswer: 0,
            explanation: 'Diverging optical elements (convex mirror, concave lens) ALWAYS produce virtual, upright, reduced images regardless of object position. This is a must-memorize fact.'
          }
        ]
      }
    },
    {
      id: 'pe5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $1/f = 1/d_o + 1/d_i$ — works for both lenses and mirrors
- Diverging elements ($f < 0$): always virtual, upright, reduced
- Sign of $d_i$ tells you real (+) vs virtual (−)
- Sign of $m$ tells you inverted (−) vs upright (+)`
    }
  ]
};
"""

    parts[6] = r"""export const mcatPhysElecPart6Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe6-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 6 of 7 — Electromagnetic Spectrum & Light**

### The EM Spectrum (increasing frequency/decreasing wavelength)

Radio → Microwave → Infrared → **Visible** → Ultraviolet → X-ray → Gamma

$$c = f\\lambda = 3 \\times 10^8\\;\\text{m/s}$$

### Visible Light

Red (700 nm) → Orange → Yellow → Green → Blue → Violet (400 nm)

$$E = hf = \\frac{hc}{\\lambda}$$

- Higher frequency = higher energy = shorter wavelength

### Photoelectric Effect

$$KE_{max} = hf - \\phi$$

- $\\phi$ = work function (minimum energy to eject electron)
- Below threshold frequency: NO electrons ejected, regardless of intensity
- Above threshold: intensity affects NUMBER of electrons, not their energy

### Diffraction & Interference

- **Constructive**: $d\\sin\\theta = n\\lambda$ (bright fringes)
- **Destructive**: $d\\sin\\theta = (n + \\frac{1}{2})\\lambda$ (dark fringes)`
    },
    {
      id: 'pe6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Light & Quantum** 🎯',
      exercise: {
        questions: [
          {
            question: 'In the photoelectric effect, increasing the intensity of light above the threshold frequency:',
            options: ['Increases the number of ejected electrons (more photons hitting surface)', 'Increases the kinetic energy of ejected electrons', 'Decreases the work function', 'Has no effect'],
            correctAnswer: 0,
            explanation: 'Intensity = number of photons per unit time. More photons → more electrons ejected. The KE of each electron depends only on frequency ($KE = hf - \\phi$), not intensity.'
          }
        ]
      }
    },
    {
      id: 'pe6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- $E = hf = hc/\\lambda$: higher frequency = higher energy
- Photoelectric effect: threshold frequency matters, not intensity
- EM spectrum order: Radio < Micro < IR < Visible < UV < X-ray < Gamma
- Double-slit: demonstrates wave nature of light (interference pattern)`
    }
  ]
};
"""

    parts[7] = r"""export const mcatPhysElecPart7Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe7-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 7 of 7 — Atomic & Nuclear Physics**

### Atomic Models on the MCAT

- **Bohr model**: Electrons in quantized orbits. $E_n = -13.6/n^2$ eV (for hydrogen).
- Photon emitted when electron drops levels: $E = hf = E_{high} - E_{low}$

### Nuclear Physics

$$^A_Z X \\qquad A = \\text{mass number}, Z = \\text{atomic number}$$

### Radioactive Decay Types

| Type | Particle | Change in $A$ | Change in $Z$ |
|------|----------|--------------|--------------|
| Alpha ($\\alpha$) | $^4_2\\text{He}$ | $-4$ | $-2$ |
| Beta$^-$ ($\\beta^-$) | Electron | $0$ | $+1$ |
| Beta$^+$ ($\\beta^+$) | Positron | $0$ | $-1$ |
| Gamma ($\\gamma$) | Photon | $0$ | $0$ |

### Half-Life

$$N = N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

After $n$ half-lives: $N = N_0/2^n$`
    },
    {
      id: 'pe7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Nuclear Physics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radioactive sample has a half-life of 8 days. After 24 days, what fraction remains?',
            options: ['$1/8$ (3 half-lives: $1/2^3$)', '$1/4$', '$1/16$', '$1/3$'],
            correctAnswer: 0,
            explanation: 'Number of half-lives = $24/8 = 3$. Remaining = $(1/2)^3 = 1/8$.'
          },
          {
            question: '$^{238}_{92}\\text{U}$ undergoes alpha decay. The daughter nucleus is:',
            options: ['$^{234}_{90}\\text{Th}$ ($A - 4$, $Z - 2$)', '$^{238}_{93}\\text{Np}$', '$^{234}_{92}\\text{U}$', '$^{238}_{90}\\text{Th}$'],
            correctAnswer: 0,
            explanation: 'Alpha decay emits $^4_2\\text{He}$: $A$ decreases by 4 (238→234) and $Z$ decreases by 2 (92→90). Element 90 = Thorium.'
          }
        ]
      }
    },
    {
      id: 'pe7-summary',
      type: 'text' as const,
      content: `### Physics E&M/Optics — Complete! ✅

Master circuits, optics (lens/mirror equation), and nuclear decay. These are the most tested physics topics. Remember: the MCAT is more conceptual than computational — understand WHY, not just how to calculate.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-physics-electricity-mcat-part{i}.ts', parts[i])


# Run all generators
print("=== MCAT Batch 2: Physics - Mechanics ===")
gen_phys_mech()
print("\n=== MCAT Batch 2: Physics - Electricity & Optics ===")
gen_phys_elec()
print(f"\nBatch 2 complete! Total files: 14")
