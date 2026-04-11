#!/usr/bin/env python3
"""Generate AP Physics C interactive lesson files for new topics."""
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     'src', 'data', 'interactive-lessons')

# Existing topics (6): Newton's Laws, Work-Energy, Rotational Dynamics,
# Coulomb's Law, Gauss's Law, Capacitors & Dielectrics
# Need: ~9 more to cover full AP Physics C (Mechanics + E&M)

TOPICS = [
    # MECHANICS
    {
        'slug': 'momentum-impulse-physics-c',
        'exportPrefix': 'physCMomentum',
        'parts': [
            ('Linear Momentum', """# 🎯 Linear Momentum

**Part 1 of 7 — Momentum and Its Conservation**

---

### What Is Momentum?

$$\\\\vec{p} = m\\\\vec{v}$$

| Quantity | Symbol | Units |
|----------|--------|-------|
| Momentum | $\\\\vec{p}$ | kg·m/s |
| Mass | $m$ | kg |
| Velocity | $\\\\vec{v}$ | m/s |

> 🔑 Momentum is a **vector** — it has both magnitude and direction.

---

### Newton's Second Law in Terms of Momentum

$$\\\\vec{F}_{\\\\text{net}} = \\\\frac{d\\\\vec{p}}{dt}$$

For constant mass: $\\\\vec{F} = m\\\\vec{a} = m\\\\frac{d\\\\vec{v}}{dt} = \\\\frac{d(m\\\\vec{v})}{dt}$

This more general form handles cases where mass changes (like rockets).

---

### Conservation of Momentum

When no external forces act on a system:

$$\\\\vec{p}_{\\\\text{initial}} = \\\\vec{p}_{\\\\text{final}}$$

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

> This is valid for **any** collision or interaction within an isolated system.""",
            [
                {'q': 'A 2 kg ball moving at 3 m/s has momentum:', 'opts': ['$2$ kg·m/s', '$3$ kg·m/s', '$5$ kg·m/s', '$6$ kg·m/s'], 'ans': 3, 'exp': '$p = mv = 2(3) = 6$ kg·m/s.'},
                {'q': 'Momentum is conserved when:', 'opts': ['Energy is conserved', 'No external net force acts', 'Objects are elastic', 'Mass is constant'], 'ans': 1, 'exp': 'Conservation of momentum requires zero net external force on the system.'},
                {'q': '$\\\\vec{F} = d\\\\vec{p}/dt$ is the most general form of:', 'opts': ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", 'Conservation of energy'], 'ans': 1, 'exp': "Newton's Second Law in its most general form relates force to the rate of change of momentum."},
            ]),
            ('Impulse', """# 💥 Impulse

**Part 2 of 7 — Impulse-Momentum Theorem**

---

### Impulse Defined

$$\\\\vec{J} = \\\\int_{t_1}^{t_2} \\\\vec{F} \\, dt = \\\\Delta \\\\vec{p}$$

| Variable | Meaning |
|----------|---------|
| $\\\\vec{J}$ | Impulse (N·s = kg·m/s) |
| $\\\\vec{F}$ | Force (may vary with time) |
| $\\\\Delta\\\\vec{p}$ | Change in momentum |

For constant force: $\\\\vec{J} = \\\\vec{F} \\\\cdot \\\\Delta t$

---

### Impulse-Momentum Theorem

$$\\\\vec{J} = \\\\vec{p}_f - \\\\vec{p}_i = m\\\\vec{v}_f - m\\\\vec{v}_i$$

**Example:** A 0.15 kg baseball at 40 m/s is hit and leaves at 50 m/s in the opposite direction.

$J = m(v_f - v_i) = 0.15(50 - (-40)) = 0.15(90) = 13.5$ N·s

> 🔑 The area under the $F$ vs. $t$ curve equals the impulse.""",
            [
                {'q': 'Impulse has the same units as:', 'opts': ['Force', 'Energy', 'Momentum', 'Power'], 'ans': 2, 'exp': 'Impulse = change in momentum. Both have units of kg·m/s (or equivalently N·s).'},
                {'q': 'A 5 N force acts for 3 seconds. The impulse is:', 'opts': ['$1.67$ N·s', '$5$ N·s', '$8$ N·s', '$15$ N·s'], 'ans': 3, 'exp': '$J = F \\\\Delta t = 5(3) = 15$ N·s.'},
            ]),
            ('Collisions in 1D', """# 💫 Collisions in One Dimension

**Part 3 of 7 — Elastic and Inelastic Collisions**

---

### Types of Collisions

| Type | Momentum Conserved? | KE Conserved? |
|------|---------------------|--------------|
| **Elastic** | ✅ Yes | ✅ Yes |
| **Inelastic** | ✅ Yes | ❌ No |
| **Perfectly Inelastic** | ✅ Yes | ❌ No (maximum KE loss) |

---

### Perfectly Inelastic Collision

Objects stick together after collision:
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f$$
$$v_f = \\\\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$

---

### Elastic Collision

Both momentum AND kinetic energy are conserved. For 1D elastic:

$$v_{1f} = \\\\frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \\\\frac{2m_2}{m_1 + m_2} v_{2i}$$

$$v_{2f} = \\\\frac{2m_1}{m_1 + m_2} v_{1i} + \\\\frac{m_2 - m_1}{m_1 + m_2} v_{2i}$$

> 🔑 In an elastic collision between equal masses with one at rest, the first stops and the second moves with the original velocity.""",
            [
                {'q': 'In a perfectly inelastic collision, the objects:', 'opts': ['Bounce apart', 'Stick together', 'Exchange velocities', 'Both stop'], 'ans': 1, 'exp': 'Perfectly inelastic = objects stick together, maximum KE loss.'},
                {'q': 'A 3 kg ball at 4 m/s collides perfectly inelastically with a 1 kg ball at rest. $v_f =$', 'opts': ['$1$ m/s', '$2$ m/s', '$3$ m/s', '$4$ m/s'], 'ans': 2, 'exp': '$v_f = (3×4 + 1×0)/(3+1) = 12/4 = 3$ m/s.'},
            ]),
            ('Collisions in 2D', """# 🎱 Collisions in Two Dimensions

**Part 4 of 7 — Vector Conservation of Momentum**

---

### 2D Momentum Conservation

Momentum is conserved independently in each direction:

$$\\\\text{x-direction:} \\quad m_1 v_{1xi} + m_2 v_{2xi} = m_1 v_{1xf} + m_2 v_{2xf}$$
$$\\\\text{y-direction:} \\quad m_1 v_{1yi} + m_2 v_{2yi} = m_1 v_{1yf} + m_2 v_{2yf}$$

---

### Strategy for 2D Collision Problems

1. Choose a coordinate system
2. Resolve all velocities into $x$ and $y$ components
3. Apply conservation of momentum in each direction independently
4. If elastic, also apply conservation of KE

> 🔑 Treat each dimension separately — just like projectile motion.""",
            [
                {'q': 'In 2D collisions, momentum is conserved:', 'opts': ['Only in x', 'Only in y', 'In each direction independently', 'Only for elastic'], 'ans': 2, 'exp': 'Momentum is a vector; it is conserved independently in each component direction.'},
            ]),
            ('Center of Mass', """# ⚖️ Center of Mass

**Part 5 of 7 — Center of Mass Motion**

---

### Center of Mass Position

For discrete masses:
$$x_{\\\\text{cm}} = \\\\frac{\\\\sum m_i x_i}{\\\\sum m_i} = \\\\frac{m_1 x_1 + m_2 x_2 + \\\\cdots}{m_1 + m_2 + \\\\cdots}$$

For continuous mass distributions:
$$x_{\\\\text{cm}} = \\\\frac{1}{M} \\\\int x \\, dm$$

---

### Center of Mass Velocity

$$v_{\\\\text{cm}} = \\\\frac{\\\\sum m_i v_i}{M} = \\\\frac{p_{\\\\text{total}}}{M}$$

> 🔑 The center of mass of an isolated system moves at constant velocity (even during collisions).""",
            [
                {'q': 'Two masses: 2 kg at $x=0$ and 4 kg at $x=6$ m. $x_{\\\\text{cm}} =$', 'opts': ['$2$ m', '$3$ m', '$4$ m', '$5$ m'], 'ans': 2, 'exp': '$x_{cm} = (2(0) + 4(6))/(2+4) = 24/6 = 4$ m.'},
                {'q': 'The center of mass of an isolated system:', 'opts': ['Accelerates', 'Moves at constant velocity', 'Is always at rest', 'Changes direction'], 'ans': 1, 'exp': 'No net external force → $v_{cm}$ is constant (even during internal interactions).'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ Momentum Workshop

**Part 6 of 7 — AP Physics C Problem Strategies**

---

### Types of Momentum Problems on AP Physics C

| Problem Type | Key Approach |
|-------------|-------------|
| Impulse calculation | $J = \\\\int F \\, dt$ or $J = \\\\Delta p$ |
| Collision (1D) | Conservation of $p$; check if elastic |
| Collision (2D) | Separate $x$ and $y$ components |
| Explosion | Reverse collision — one object splits |
| Variable mass | $F = dp/dt$ with changing $m$ |
| Center of mass | $x_{cm} = \\\\Sigma m_i x_i / M$ |

---

### Worked Example: Ballistic Pendulum

A bullet (mass $m = 0.01$ kg, speed $v_0 = 400$ m/s) embeds in a block (mass $M = 2$ kg) hanging from strings. How high does the block+bullet swing?

**Step 1 (Conservation of momentum during collision):**
$$mv_0 = (m + M)V$$
$$V = \\\\frac{0.01 \\\\times 400}{2.01} \\\\approx 1.99 \\\\text{ m/s}$$

**Step 2 (Conservation of energy during swing):**
$$\\\\frac{1}{2}(m+M)V^2 = (m+M)gh$$
$$h = \\\\frac{V^2}{2g} = \\\\frac{(1.99)^2}{2(9.8)} \\\\approx 0.20 \\\\text{ m}$$""",
            [
                {'q': 'In a ballistic pendulum, which is conserved during the collision?', 'opts': ['Kinetic energy', 'Momentum', 'Both KE and momentum', 'Neither'], 'ans': 1, 'exp': 'The collision is perfectly inelastic (bullet embeds), so only momentum is conserved. KE is lost.'},
            ]),
            ('Review & Applications', """# 📋 Momentum Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas

| Formula | Name |
|---------|------|
| $\\\\vec{p} = m\\\\vec{v}$ | Momentum |
| $\\\\vec{J} = \\\\int \\\\vec{F} \\, dt = \\\\Delta\\\\vec{p}$ | Impulse-momentum theorem |
| $\\\\vec{p}_i = \\\\vec{p}_f$ | Conservation of momentum |
| $x_{cm} = \\\\frac{\\\\sum m_i x_i}{M}$ | Center of mass |
| Elastic: $KE_i = KE_f$ | Kinetic energy conserved |
| Inelastic: $KE_i > KE_f$ | KE lost to deformation/heat |""",
            [
                {'q': 'Which quantity is ALWAYS conserved in collisions (with no external forces)?', 'opts': ['Kinetic energy', 'Momentum', 'Speed', 'Force'], 'ans': 1, 'exp': 'Momentum is always conserved in an isolated system. KE is only conserved in elastic collisions.'},
                {'q': 'A rocket in space expels gas backward. The rocket:', 'opts': ['Violates conservation of momentum', 'Accelerates forward', 'Stays in place', 'Decelerates'], 'ans': 1, 'exp': 'Gas goes backward, rocket goes forward. Total momentum of system remains constant.'},
            ]),
        ]
    },
    {
        'slug': 'oscillations-physics-c',
        'exportPrefix': 'physCOscillations',
        'parts': [
            ('Simple Harmonic Motion', """# 🔄 Simple Harmonic Motion

**Part 1 of 7 — Springs and Pendulums**

---

### Defining SHM

Simple harmonic motion occurs when the restoring force is **proportional to displacement**:

$$F = -kx$$

This leads to the differential equation:
$$m\\\\frac{d^2x}{dt^2} = -kx$$

**Solution:** $x(t) = A\\\\cos(\\\\omega t + \\\\phi)$

---

### Key Quantities

| Quantity | Formula | Units |
|----------|---------|-------|
| Angular frequency | $\\\\omega = \\\\sqrt{k/m}$ | rad/s |
| Period | $T = 2\\\\pi/\\\\omega = 2\\\\pi\\\\sqrt{m/k}$ | s |
| Frequency | $f = 1/T = \\\\omega/(2\\\\pi)$ | Hz |
| Amplitude | $A$ | m |

---

### Energy in SHM

$$E = \\\\frac{1}{2}kA^2 = \\\\frac{1}{2}kx^2 + \\\\frac{1}{2}mv^2$$

| At | PE | KE |
|----|----|----|
| $x = \\\\pm A$ | Maximum | Zero |
| $x = 0$ | Zero | Maximum |

> 🔑 Total mechanical energy is constant in SHM (no friction).""",
            [
                {'q': 'Doubling the mass on a spring will change the period by a factor of:', 'opts': ['$2$', '$\\\\sqrt{2}$', '$4$', '$1/\\\\sqrt{2}$'], 'ans': 1, 'exp': '$T = 2\\\\pi\\\\sqrt{m/k}$. Doubling $m$ multiplies $T$ by $\\\\sqrt{2}$.'},
                {'q': 'At the equilibrium position in SHM:', 'opts': ['KE is maximum', 'PE is maximum', 'Speed is zero', 'Acceleration is maximum'], 'ans': 0, 'exp': 'At equilibrium ($x=0$), all energy is kinetic → maximum speed.'},
                {'q': 'The restoring force in SHM is:', 'opts': ['Constant', 'Proportional to displacement', 'Proportional to velocity', 'Zero'], 'ans': 1, 'exp': '$F = -kx$ — the force is proportional to displacement and directed toward equilibrium.'},
            ]),
            ('Kinematics of SHM', """# 📐 SHM Kinematics

**Part 2 of 7 — Position, Velocity, Acceleration**

---

### The Three Equations

$$x(t) = A\\\\cos(\\\\omega t + \\\\phi)$$

$$v(t) = \\\\frac{dx}{dt} = -A\\\\omega\\\\sin(\\\\omega t + \\\\phi)$$

$$a(t) = \\\\frac{dv}{dt} = -A\\\\omega^2\\\\cos(\\\\omega t + \\\\phi) = -\\\\omega^2 x$$

---

### Key Relationships

| Quantity | Maximum Value |
|----------|--------------|
| Position | $|x|_{\\\\text{max}} = A$ |
| Velocity | $|v|_{\\\\text{max}} = A\\\\omega$ |
| Acceleration | $|a|_{\\\\text{max}} = A\\\\omega^2$ |

> 🔑 Velocity leads position by $\\\\pi/2$. Acceleration leads velocity by $\\\\pi/2$. Acceleration is $\\\\pi$ out of phase with position.""",
            [
                {'q': 'Maximum acceleration in SHM occurs when:', 'opts': ['$x = 0$', '$x = A$ or $x = -A$', '$v$ is maximum', 'Energy is all kinetic'], 'ans': 1, 'exp': '$a = -\\\\omega^2 x$, so $|a|$ is maximum when $|x|$ is maximum, i.e., at the turning points.'},
                {'q': 'The maximum speed in SHM is:', 'opts': ['$A/\\\\omega$', '$A\\\\omega$', '$A\\\\omega^2$', '$\\\\omega/A$'], 'ans': 1, 'exp': '$v_{max} = A\\\\omega$, occurring at the equilibrium position.'},
            ]),
            ('Pendulums', """# 🕐 Pendulums

**Part 3 of 7 — Simple and Physical Pendulums**

---

### Simple Pendulum (small angle)

For small angles ($\\\\theta < 15°$):

$$T = 2\\\\pi\\\\sqrt{\\\\frac{L}{g}}$$

Note: Period is **independent of mass** and **independent of amplitude** (for small angles).

---

### Physical Pendulum

Any rigid body oscillating about a pivot:

$$T = 2\\\\pi\\\\sqrt{\\\\frac{I}{mgd}}$$

where $I$ = moment of inertia about pivot, $d$ = distance from pivot to center of mass.

---

### Torsional Oscillator

$$T = 2\\\\pi\\\\sqrt{\\\\frac{I}{\\\\kappa}}$$

where $\\\\kappa$ is the torsional constant (restoring torque = $-\\\\kappa\\\\theta$).""",
            [
                {'q': 'Doubling the length of a simple pendulum changes the period by:', 'opts': ['$2$', '$\\\\sqrt{2}$', '$4$', '$1/2$'], 'ans': 1, 'exp': '$T = 2\\\\pi\\\\sqrt{L/g}$. Doubling $L$ multiplies $T$ by $\\\\sqrt{2}$.'},
                {'q': 'A simple pendulum’s period does NOT depend on:', 'opts': ['Length', 'Gravity', 'Mass', 'All of these'], 'ans': 2, 'exp': '$T = 2\\\\pi\\\\sqrt{L/g}$ — mass does not appear. Period depends only on $L$ and $g$.'},
            ]),
            ('Damped Oscillations', """# 📉 Damped Oscillations

**Part 4 of 7 — Friction and Decay**

---

### Damping Force

$$F_{\\\\text{damp}} = -b\\\\frac{dx}{dt}$$

The equation of motion becomes:
$$m\\\\frac{d^2x}{dt^2} + b\\\\frac{dx}{dt} + kx = 0$$

---

### Solution: Underdamped Case

$$x(t) = Ae^{-\\\\gamma t}\\\\cos(\\\\omega' t + \\\\phi)$$

where $\\\\gamma = b/(2m)$ and $\\\\omega' = \\\\sqrt{\\\\omega_0^2 - \\\\gamma^2}$

---

### Three Damping Regimes

| Regime | Condition | Behavior |
|--------|-----------|----------|
| **Underdamped** | $\\\\gamma < \\\\omega_0$ | Oscillates with decaying amplitude |
| **Critically damped** | $\\\\gamma = \\\\omega_0$ | Returns to equilibrium fastest, no oscillation |
| **Overdamped** | $\\\\gamma > \\\\omega_0$ | Slow return, no oscillation |

> 🔑 Critical damping is used in car suspensions — fastest return to equilibrium without overshooting.""",
            [
                {'q': 'In underdamped oscillation, the amplitude:', 'opts': ['Stays constant', 'Decreases exponentially', 'Increases', 'Drops to zero instantly'], 'ans': 1, 'exp': 'The $e^{-\\\\gamma t}$ factor causes exponential decay of the amplitude.'},
            ]),
            ('Driven Oscillations & Resonance', """# 🔊 Driven Oscillations & Resonance

**Part 5 of 7 — Forced Vibrations**

---

### Driven Oscillation

Apply a periodic driving force: $F(t) = F_0 \\\\cos(\\\\omega_d t)$

$$m\\\\frac{d^2x}{dt^2} + b\\\\frac{dx}{dt} + kx = F_0 \\\\cos(\\\\omega_d t)$$

Steady-state solution: $x(t) = A(\\\\omega_d)\\\\cos(\\\\omega_d t - \\\\delta)$

---

### Resonance

$$A(\\\\omega_d) = \\\\frac{F_0/m}{\\\\sqrt{(\\\\omega_0^2 - \\\\omega_d^2)^2 + (b\\\\omega_d/m)^2}}$$

Maximum amplitude occurs near $\\\\omega_d = \\\\omega_0$ (natural frequency).

> 🔑 **Resonance** = driving frequency matches natural frequency → maximum energy transfer.""",
            [
                {'q': 'Resonance occurs when the driving frequency:', 'opts': ['Is zero', 'Equals the natural frequency', 'Is twice the natural frequency', 'Is very high'], 'ans': 1, 'exp': 'Maximum amplitude occurs when $\\\\omega_d \\\\approx \\\\omega_0$, the natural frequency.'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ Oscillations Workshop

**Part 6 of 7 — AP Physics C Strategies**

---

### Oscillation Problem Types

| Type | Key Formula |
|------|------------|
| Mass-spring period | $T = 2\\\\pi\\\\sqrt{m/k}$ |
| Simple pendulum | $T = 2\\\\pi\\\\sqrt{L/g}$ |
| Physical pendulum | $T = 2\\\\pi\\\\sqrt{I/(mgd)}$ |
| Energy in SHM | $E = \\\\frac{1}{2}kA^2$ |
| Max speed | $v_{max} = A\\\\omega$ |
| Max acceleration | $a_{max} = A\\\\omega^2$ |

---

### Worked Example

A 0.5 kg mass on a spring ($k = 200$ N/m) is pulled 0.1 m and released.

$\\\\omega = \\\\sqrt{200/0.5} = 20$ rad/s

$T = 2\\\\pi/20 = 0.314$ s

$v_{max} = 0.1 \\\\times 20 = 2$ m/s

$E = \\\\frac{1}{2}(200)(0.1)^2 = 1$ J""",
            [
                {'q': 'A spring ($k = 50$ N/m) with 0.2 kg mass has $\\\\omega =$', 'opts': ['$5$ rad/s', '$\\\\sqrt{250}$ rad/s', '$10$ rad/s', '$250$ rad/s'], 'ans': 1, 'exp': '$\\\\omega = \\\\sqrt{k/m} = \\\\sqrt{50/0.2} = \\\\sqrt{250} \\\\approx 15.8$ rad/s.'},
            ]),
            ('Review & Applications', """# 📋 Oscillations Review

**Part 7 of 7 — Comprehensive Summary**

---

### Master Formula Sheet

| Concept | Formula |
|---------|---------|
| SHM position | $x(t) = A\\\\cos(\\\\omega t + \\\\phi)$ |
| Angular frequency | $\\\\omega = \\\\sqrt{k/m}$ (spring), $\\\\omega = \\\\sqrt{g/L}$ (pendulum) |
| Total energy | $E = \\\\frac{1}{2}kA^2$ |
| Damped SHM | $x(t) = Ae^{-\\\\gamma t}\\\\cos(\\\\omega' t)$ |
| Resonance | Max amplitude at $\\\\omega_d \\\\approx \\\\omega_0$ |

> 🔑 SHM = any system with $F \\\\propto -x$. Recognize the pattern, then apply the formulas.""",
            [
                {'q': 'Which is NOT an example of SHM?', 'opts': ['Mass on spring', 'Simple pendulum (small angle)', 'Bouncing ball', 'Torsional oscillator'], 'ans': 2, 'exp': 'A bouncing ball does not have a restoring force proportional to displacement — it is not SHM.'},
                {'q': 'If you take a pendulum to the Moon (gravity $g/6$), the period:', 'opts': ['Decreases by 6', 'Increases by $\\\\sqrt{6}$', 'Stays the same', 'Doubles'], 'ans': 1, 'exp': '$T = 2\\\\pi\\\\sqrt{L/g}$. Reducing $g$ by 6 multiplies $T$ by $\\\\sqrt{6}$.'},
            ]),
        ]
    },
    {
        'slug': 'gravitation-physics-c',
        'exportPrefix': 'physCGravitation',
        'parts': [
            ('Universal Gravitation', """# 🌍 Newton’s Law of Universal Gravitation

**Part 1 of 7 — The Gravitational Force**

---

### The Law

$$F = G\\\\frac{m_1 m_2}{r^2}$$

| Constant | Value |
|----------|-------|
| $G$ | $6.674 \\\\times 10^{-11}$ N·m²/kg² |

---

### Gravitational Field

$$\\\\vec{g} = -\\\\frac{GM}{r^2}\\\\hat{r}$$

At Earth’s surface: $g \\\\approx 9.8$ m/s²

> 🔑 Gravity is always attractive. The force is along the line connecting the two masses.""",
            [
                {'q': 'If the distance between two masses is tripled, the gravitational force:', 'opts': ['Triples', 'Is reduced by 1/3', 'Is reduced by 1/9', 'Is unchanged'], 'ans': 2, 'exp': '$F \\\\propto 1/r^2$. Tripling $r$ → $F$ decreases by factor $3^2 = 9$.'},
                {'q': 'The gravitational field has units of:', 'opts': ['N', 'N/kg', 'kg·m/s²', 'J/kg'], 'ans': 1, 'exp': 'Gravitational field = force per unit mass = N/kg = m/s².'},
            ]),
            ('Gravitational PE & Orbits', """# 🛸 Gravitational Potential Energy & Orbits

**Part 2 of 7 — Energy in Gravitational Systems**

---

### Gravitational Potential Energy

$$U = -\\\\frac{GMm}{r}$$

Note the negative sign — $U = 0$ at $r = \\\\infty$.

---

### Circular Orbits

For a satellite in circular orbit:
$$\\\\frac{GMm}{r^2} = \\\\frac{mv^2}{r}$$

$$v_{\\\\text{orbit}} = \\\\sqrt{\\\\frac{GM}{r}}$$

$$T = 2\\\\pi\\\\sqrt{\\\\frac{r^3}{GM}}$$ (Kepler’s Third Law)

---

### Escape Velocity

$$v_{\\\\text{escape}} = \\\\sqrt{\\\\frac{2GM}{r}} = \\\\sqrt{2} \\\\cdot v_{\\\\text{orbit}}$$

> 🔑 Escape velocity is $\\\\sqrt{2}$ times orbital velocity at the same radius.""",
            [
                {'q': 'As a satellite moves to a higher orbit:', 'opts': ['Speed increases', 'Speed decreases', 'Speed stays constant', 'Period decreases'], 'ans': 1, 'exp': '$v = \\\\sqrt{GM/r}$. Larger $r$ → smaller $v$.'},
                {'q': 'Escape velocity from Earth’s surface is approximately:', 'opts': ['$7.9$ km/s', '$11.2$ km/s', '$3.0 \\\\times 10^8$ m/s', '$299$ m/s'], 'ans': 1, 'exp': '$v_{esc} \\\\approx 11.2$ km/s for Earth.'},
            ]),
            ('Kepler’s Laws', """# 🪐 Kepler’s Laws

**Part 3 of 7 — Planetary Motion**

---

### Kepler’s Three Laws

| Law | Statement |
|-----|-----------|
| **First** | Orbits are ellipses with the Sun at one focus |
| **Second** | Equal areas are swept in equal times (conservation of angular momentum) |
| **Third** | $T^2 \\\\propto r^3$: $T^2 = \\\\frac{4\\\\pi^2}{GM} r^3$ |

---

### Kepler’s Third Law (Detailed)

$$\\\\frac{T_1^2}{T_2^2} = \\\\frac{r_1^3}{r_2^3}$$

**Example:** Earth orbits at 1 AU with $T = 1$ year. Mars at 1.52 AU:
$$T_{\\\\text{Mars}} = \\\\left(\\\\frac{1.52}{1}\\\\right)^{3/2} \\\\approx 1.87 \\\\text{ years}$$""",
            [
                {'q': 'Kepler’s Second Law is a consequence of conservation of:', 'opts': ['Energy', 'Momentum', 'Angular momentum', 'Mass'], 'ans': 2, 'exp': 'Equal areas in equal times = constant areal velocity = conservation of angular momentum.'},
            ]),
            ('Gravitational Potential', """# ⚡ Gravitational Potential

**Part 4 of 7 — Potential and Field**

---

### Gravitational Potential (per unit mass)

$$V = -\\\\frac{GM}{r}$$

Relationship to field:
$$\\\\vec{g} = -\\\\nabla V = -\\\\frac{dV}{dr}\\\\hat{r}$$

---

### Shell Theorem

| Location | Result |
|----------|--------|
| Outside a uniform sphere | Behaves as if all mass is at center |
| Inside a uniform shell | Zero gravitational field |

> 🔑 Only the mass at radii smaller than your position matters (for spherical symmetry).""",
            [
                {'q': 'Inside a uniform spherical shell of mass $M$:', 'opts': ['$g = GM/r^2$', '$g = 0$', '$g = GM/R^2$', '$g$ depends on position'], 'ans': 1, 'exp': 'The Shell Theorem: the gravitational field inside a uniform spherical shell is zero.'},
            ]),
            ('Satellite Energy', """# 🛰️ Energy of Orbiting Bodies

**Part 5 of 7 — Total Energy in Orbits**

---

### Energy Summary for Circular Orbits

$$KE = \\\\frac{1}{2}mv^2 = \\\\frac{GMm}{2r}$$

$$PE = -\\\\frac{GMm}{r}$$

$$E_{\\\\text{total}} = KE + PE = -\\\\frac{GMm}{2r}$$

> 🔑 Total energy is **negative** for bound orbits. $E = 0$ at the boundary (parabolic trajectory = escape).""",
            [
                {'q': 'A bound orbital system has total energy that is:', 'opts': ['Positive', 'Zero', 'Negative', 'Depends on speed'], 'ans': 2, 'exp': 'Bound orbits have $E < 0$. Unbound trajectories have $E \\\\geq 0$.'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ Gravitation Workshop

**Part 6 of 7 — Strategies and Practice**

---

### Common Problem Types

| Type | Key Approach |
|------|-------------|
| Force between objects | $F = GMm/r^2$ |
| Orbital speed | $v = \\\\sqrt{GM/r}$ |
| Orbital period | $T = 2\\\\pi\\\\sqrt{r^3/(GM)}$ |
| Escape velocity | $v_{esc} = \\\\sqrt{2GM/r}$ |
| Energy to change orbit | $\\\\Delta E = -GMm/(2r_f) + GMm/(2r_i)$ |
| Kepler’s Third Law | $T^2/r^3 = \\\\text{const}$ |""",
            [
                {'q': 'To move a satellite to a higher orbit, you must:', 'opts': ['Remove energy', 'Add energy', 'Add no energy (it moves naturally)', 'Reduce mass'], 'ans': 1, 'exp': '$E = -GMm/(2r)$. Higher $r$ → less negative $E$ → must add energy (do work on satellite).'},
            ]),
            ('Review & Applications', """# 📋 Gravitation Review

**Part 7 of 7 — Master Summary**

---

### Essential Formulas

| Formula | Use |
|---------|-----|
| $F = GMm/r^2$ | Force between two masses |
| $U = -GMm/r$ | Gravitational PE |
| $v = \\\\sqrt{GM/r}$ | Orbital speed |
| $v_{esc} = \\\\sqrt{2GM/r}$ | Escape velocity |
| $T^2 = (4\\\\pi^2/GM)r^3$ | Orbital period |
| Shell theorem | Field inside shell = 0 |""",
            [
                {'q': 'At what fraction of escape velocity is orbital velocity?', 'opts': ['$1/2$', '$1/\\\\sqrt{2}$', '$\\\\sqrt{2}$', '$2$'], 'ans': 1, 'exp': '$v_{orbit} = \\\\sqrt{GM/r}$, $v_{esc} = \\\\sqrt{2GM/r} = \\\\sqrt{2} \\\\cdot v_{orbit}$. So $v_{orbit}/v_{esc} = 1/\\\\sqrt{2}$.'},
            ]),
        ]
    },
    # E&M TOPICS
    {
        'slug': 'electric-potential-physics-c-em',
        'exportPrefix': 'physCEMPotential',
        'parts': [
            ('Electric Potential Energy', """# ⚡ Electric Potential Energy

**Part 1 of 7 — Work and Energy in Electric Fields**

---

### Potential Energy of Point Charges

$$U = k\\\\frac{q_1 q_2}{r} = \\\\frac{1}{4\\\\pi\\\\epsilon_0}\\\\frac{q_1 q_2}{r}$$

| Sign | Interpretation |
|------|---------------|
| $U > 0$ | Like charges (repulsive) — energy stored |
| $U < 0$ | Unlike charges (attractive) — energy released |

---

### Work-Energy Theorem

$$W_{\\\\text{electric}} = -\\\\Delta U = -(U_f - U_i)$$

The electric force is conservative, so we can define potential energy.

> 🔑 Work done by the electric field = decrease in PE. Positive charges naturally move from high PE to low PE.""",
            [
                {'q': 'Two positive charges are brought closer together. The PE:', 'opts': ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'], 'ans': 0, 'exp': 'Like charges: $U = kq_1q_2/r > 0$. As $r$ decreases, $U$ increases (takes work).'},
                {'q': 'Work done by the electric force on a charge moving in an electric field is:', 'opts': ['$W = qEd$', '$W = -\\\\Delta U$', '$W = \\\\Delta KE$', 'All of the above can be correct'], 'ans': 3, 'exp': 'All three expressions are valid ways to compute the work done by the electric force.'},
            ]),
            ('Electric Potential (Voltage)', """# 🔋 Electric Potential (Voltage)

**Part 2 of 7 — Potential = Energy per Charge**

---

### Definition

$$V = \\\\frac{U}{q} = \\\\frac{kQ}{r}$$

Units: Volts (V) = Joules per Coulomb (J/C)

---

### Potential Difference

$$\\\\Delta V = V_B - V_A = -\\\\int_A^B \\\\vec{E} \\\\cdot d\\\\vec{l}$$

$$W = q\\\\Delta V = q(V_B - V_A)$$

---

### Equipotential Surfaces

- Surfaces where $V$ is constant
- Always **perpendicular** to electric field lines
- No work is done moving a charge along an equipotential

> 🔑 Electric field points from high potential to low potential (for positive charges).""",
            [
                {'q': 'The potential at a distance $r$ from a charge $+Q$ is:', 'opts': ['$kQ/r^2$', '$kQ/r$', '$kQr$', '$kQ/r^3$'], 'ans': 1, 'exp': '$V = kQ/r$ for a point charge.'},
                {'q': 'Moving a charge along an equipotential surface requires:', 'opts': ['Maximum work', 'Zero work', 'Negative work', 'Depends on direction'], 'ans': 1, 'exp': 'On an equipotential, $\\\\Delta V = 0$, so $W = q\\\\Delta V = 0$.'},
            ]),
            ('Potential and Field Relationship', """# 🔗 Potential and Electric Field

**Part 3 of 7 — $\\\\vec{E}$ from $V$ and $V$ from $\\\\vec{E}$**

---

### Finding E from V

$$E_x = -\\\\frac{\\\\partial V}{\\\\partial x}, \\quad E_y = -\\\\frac{\\\\partial V}{\\\\partial y}, \\quad E_z = -\\\\frac{\\\\partial V}{\\\\partial z}$$

$$\\\\vec{E} = -\\\\nabla V$$

For spherical symmetry: $E = -dV/dr$

---

### Finding V from E

$$V(r) - V(\\\\infty) = -\\\\int_{\\\\infty}^{r} \\\\vec{E} \\\\cdot d\\\\vec{l}$$

> 🔑 $\\\\vec{E}$ points in the direction of steepest decrease in $V$.""",
            [
                {'q': 'If $V = 3x^2 + 2y$, then $E_x =$', 'opts': ['$3x^2$', '$-6x$', '$6x$', '$2$'], 'ans': 1, 'exp': '$E_x = -\\\\partial V/\\\\partial x = -6x$.'},
                {'q': 'The electric field is related to potential by:', 'opts': ['$E = V/d$', '$E = -dV/dr$', '$E = V \\\\cdot r$', '$E = V^2$'], 'ans': 1, 'exp': 'The field is the negative gradient of the potential.'},
            ]),
            ('Potential of Charge Distributions', """# 🔢 Potential of Charge Distributions

**Part 4 of 7 — Superposition of Potentials**

---

### Superposition Principle

For multiple point charges:
$$V = \\\\sum \\\\frac{kq_i}{r_i}$$

> 🔑 Unlike electric field, potential is a **scalar** — no vector addition needed!

---

### Continuous Distributions

$$V = \\\\int \\\\frac{k \\, dq}{r}$$

Common results:
| Distribution | Potential |
|-------------|-----------|
| Point charge | $V = kQ/r$ |
| Conducting sphere | $V = kQ/R$ (surface), $V = kQ/r$ (outside) |
| Ring (on axis) | $V = kQ/\\\\sqrt{R^2 + x^2}$ |
| Disk (on axis) | $V = \\\\frac{\\\\sigma}{2\\\\epsilon_0}(\\\\sqrt{R^2+x^2} - x)$ |""",
            [
                {'q': 'The advantage of using potential (vs. field) for multiple charges is:', 'opts': ['Potential is always positive', 'Potential is a scalar (no vectors)', 'Potential is always zero', 'No calculation needed'], 'ans': 1, 'exp': 'Potential is a scalar — you add numbers, not vectors. Much simpler for complex configurations.'},
            ]),
            ('Conductors and Potential', """# 🔲 Conductors and Potential

**Part 5 of 7 — Electrostatics of Conductors**

---

### Key Facts About Conductors

| Property | Explanation |
|----------|------------|
| $\\\\vec{E} = 0$ inside | Charges rearrange until field is zero |
| $V$ = constant throughout | $E = 0 \\\\Rightarrow \\\\Delta V = 0$ everywhere inside |
| Charge on surface only | No net charge inside a conductor |
| $\\\\vec{E}$ perpendicular to surface | Otherwise charges would move along surface |

---

### Charge Distribution on Conductors

- Charge concentrates at **sharp points** (small radius of curvature)
- Field is strongest near sharp points
- This is the principle behind lightning rods

> 🔑 A conductor is a single equipotential. The entire surface (and interior) is at the same voltage.""",
            [
                {'q': 'Inside a charged conductor, the electric field is:', 'opts': ['Maximum', 'Constant but nonzero', 'Zero', 'Depends on shape'], 'ans': 2, 'exp': 'In electrostatic equilibrium, $E = 0$ everywhere inside a conductor.'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ Electric Potential Workshop

**Part 6 of 7 — Strategies and Practice**

---

### Problem-Solving Framework

1. **Identify** the charge configuration
2. **Choose** between $V$ from $E$ (integration) or $V$ from charges (superposition)
3. **Calculate** potential at points of interest
4. **Use** $\\\\Delta V$ to find work, KE changes, or $\\\\vec{E}$

### Key Relationships

$$W = q\\\\Delta V \\quad | \\quad KE = q(V_i - V_f) \\quad | \\quad E = -dV/dr$$""",
            [
                {'q': 'An electron moves from $V=100$ V to $V=50$ V. Its KE:', 'opts': ['Decreases by 50 eV', 'Increases by 50 eV', 'Stays the same', 'Depends on path'], 'ans': 0, 'exp': '$\\\\Delta KE = q\\\\Delta V = (-e)(50-100) = (-e)(-50) = 50$ eV increase... Wait: $q = -e$, $\\\\Delta V = -50$, so $W = q\\\\Delta V = (-e)(-50) = +50$ eV. KE increases by 50 eV.'},
            ]),
            ('Review & Applications', """# 📋 Electric Potential Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $V = kQ/r$ | Potential from point charge |
| $\\\\Delta V = -\\\\int \\\\vec{E} \\\\cdot d\\\\vec{l}$ | Potential from field |
| $\\\\vec{E} = -\\\\nabla V$ | Field from potential |
| $W = q\\\\Delta V$ | Work on a charge |
| $U = kq_1q_2/r$ | PE of two charges |""",
            [
                {'q': 'The SI unit of electric potential is:', 'opts': ['Newton', 'Coulomb', 'Volt', 'Ampere'], 'ans': 2, 'exp': 'Electric potential is measured in Volts (V) = Joules per Coulomb.'},
            ]),
        ]
    },
    {
        'slug': 'dc-circuits-physics-c-em',
        'exportPrefix': 'physCEMCircuits',
        'parts': [
            ('Current and Resistance', """# ⚡ Current and Resistance

**Part 1 of 7 — Fundamentals of DC Circuits**

---

### Electric Current

$$I = \\\\frac{dQ}{dt}$$

Units: Amperes (A) = Coulombs/second

---

### Ohm’s Law

$$V = IR$$

| Quantity | Symbol | Unit |
|----------|--------|------|
| Voltage | $V$ | Volts (V) |
| Current | $I$ | Amperes (A) |
| Resistance | $R$ | Ohms ($\\\\Omega$) |

---

### Resistivity

$$R = \\\\rho \\\\frac{L}{A}$$

where $\\\\rho$ is resistivity, $L$ is length, $A$ is cross-sectional area.

---

### Power

$$P = IV = I^2R = \\\\frac{V^2}{R}$$

> 🔑 Current flows from high potential to low potential (conventional current).""",
            [
                {'q': 'Doubling the length of a wire while halving its cross-sectional area multiplies resistance by:', 'opts': ['$2$', '$4$', '$1/2$', '$1$'], 'ans': 1, 'exp': '$R = \\\\rho L/A$. Doubling $L$ and halving $A$: $R \\\\to \\\\rho(2L)/(A/2) = 4\\\\rho L/A = 4R$.'},
                {'q': 'If current through a resistor doubles, the power dissipated:', 'opts': ['Doubles', 'Quadruples', 'Halves', 'Stays the same'], 'ans': 1, 'exp': '$P = I^2R$. Doubling $I$ → $P \\\\to (2I)^2 R = 4I^2R = 4P$.'},
            ]),
            ('Series and Parallel Circuits', """# 🔌 Series and Parallel Circuits

**Part 2 of 7 — Combining Resistors**

---

### Series Resistors

$$R_{\\\\text{eq}} = R_1 + R_2 + R_3 + \\\\cdots$$

- Same current through each resistor
- Voltages add: $V = V_1 + V_2 + V_3$

---

### Parallel Resistors

$$\\\\frac{1}{R_{\\\\text{eq}}} = \\\\frac{1}{R_1} + \\\\frac{1}{R_2} + \\\\frac{1}{R_3} + \\\\cdots$$

For two resistors: $R_{\\\\text{eq}} = \\\\frac{R_1 R_2}{R_1 + R_2}$

- Same voltage across each resistor
- Currents add: $I = I_1 + I_2 + I_3$

> 🔑 Series: current same, voltage divides. Parallel: voltage same, current divides.""",
            [
                {'q': 'Three 6Ω resistors in parallel have equivalent resistance:', 'opts': ['$18\\\\Omega$', '$6\\\\Omega$', '$2\\\\Omega$', '$3\\\\Omega$'], 'ans': 2, 'exp': '$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$. So $R_{eq} = 2\\\\Omega$.'},
                {'q': 'In a series circuit, if one resistor is removed:', 'opts': ['Current increases', 'Current stops', 'Nothing changes', 'Voltage drops'], 'ans': 1, 'exp': 'Series circuit = one path. Removing a resistor breaks the circuit.'},
            ]),
            ('Kirchhoff’s Rules', """# 🔄 Kirchhoff’s Rules

**Part 3 of 7 — Analyzing Complex Circuits**

---

### Junction Rule (KCL)

$$\\\\sum I_{\\\\text{in}} = \\\\sum I_{\\\\text{out}}$$

Conservation of charge at any junction.

---

### Loop Rule (KVL)

$$\\\\sum \\\\Delta V = 0$$

Around any closed loop, the total voltage change is zero.

**Sign Conventions:**
| Element | Direction | $\\\\Delta V$ |
|---------|-----------|-------------|
| Battery | − to + | $+\\\\mathcal{E}$ |
| Battery | + to − | $-\\\\mathcal{E}$ |
| Resistor | With current | $-IR$ |
| Resistor | Against current | $+IR$ |

> 🔑 Write enough equations (junction + loop) to solve for all unknowns.""",
            [
                {'q': 'Kirchhoff’s junction rule is based on conservation of:', 'opts': ['Energy', 'Charge', 'Momentum', 'Mass'], 'ans': 1, 'exp': 'The junction rule says charge in = charge out. Conservation of charge.'},
                {'q': 'Kirchhoff’s loop rule is based on conservation of:', 'opts': ['Charge', 'Mass', 'Energy', 'Momentum'], 'ans': 2, 'exp': 'The loop rule says total voltage changes around a loop = 0. Conservation of energy.'},
            ]),
            ('RC Circuits', """# ⏱️ RC Circuits

**Part 4 of 7 — Charging and Discharging Capacitors**

---

### Charging an RC Circuit

$$q(t) = C\\\\mathcal{E}(1 - e^{-t/RC})$$

$$I(t) = \\\\frac{\\\\mathcal{E}}{R}e^{-t/RC}$$

$$V_C(t) = \\\\mathcal{E}(1 - e^{-t/RC})$$

---

### Discharging an RC Circuit

$$q(t) = Q_0 e^{-t/RC}$$

$$I(t) = -\\\\frac{Q_0}{RC}e^{-t/RC}$$

---

### Time Constant

$$\\\\tau = RC$$

| Time | Charge (charging) | Charge (discharging) |
|------|-------------------|---------------------|
| $t = \\\\tau$ | 63.2% of max | 36.8% remaining |
| $t = 2\\\\tau$ | 86.5% of max | 13.5% remaining |
| $t = 5\\\\tau$ | 99.3% of max | ≈ 0% remaining |

> 🔑 After 5 time constants, the circuit is essentially at steady state.""",
            [
                {'q': 'The time constant $\\\\tau$ of an RC circuit is:', 'opts': ['$R/C$', '$RC$', '$R + C$', '$1/(RC)$'], 'ans': 1, 'exp': '$\\\\tau = RC$. This has units of seconds: $\\\\Omega \\\\cdot F = (V/A)(C/V) = C/A = s$.'},
                {'q': 'After one time constant of charging, the capacitor is at:', 'opts': ['37% of max', '50% of max', '63% of max', '100% of max'], 'ans': 2, 'exp': '$q(\\\\tau) = C\\\\mathcal{E}(1 - e^{-1}) = C\\\\mathcal{E}(1 - 0.368) = 0.632 C\\\\mathcal{E}$, or 63.2%.'},
            ]),
            ('EMF and Internal Resistance', """# 🔋 EMF and Internal Resistance

**Part 5 of 7 — Real Batteries**

---

### Electromotive Force (EMF)

EMF ($\\\\mathcal{E}$) is the voltage a battery provides with no current flowing.

With internal resistance $r$:

$$V_{\\\\text{terminal}} = \\\\mathcal{E} - Ir$$

---

### Power Delivered

$$P_{\\\\text{delivered}} = I^2 R_{\\\\text{external}}$$

$$P_{\\\\text{wasted}} = I^2 r$$

Maximum power transfer occurs when $R_{\\\\text{ext}} = r$.

> 🔑 Internal resistance means the terminal voltage drops under load.""",
            [
                {'q': 'A battery with $\\\\mathcal{E} = 12$ V and $r = 2\\\\Omega$ drives $I = 2$ A. Terminal voltage:', 'opts': ['$12$ V', '$8$ V', '$16$ V', '$4$ V'], 'ans': 1, 'exp': '$V = \\\\mathcal{E} - Ir = 12 - 2(2) = 8$ V.'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ DC Circuits Workshop

**Part 6 of 7 — Strategies**

---

### Circuit Analysis Steps

1. **Simplify** — combine series/parallel resistors where possible
2. **Label** — assign current directions and loop directions
3. **Apply Kirchhoff’s rules** — write junction and loop equations
4. **Solve** — system of equations for unknowns
5. **Check** — verify signs and units

For RC circuits: identify charging vs. discharging, find $\\\\tau = RC$.""",
            [
                {'q': 'In a circuit with two loops and three unknowns, you need:', 'opts': ['1 equation', '2 equations', '3 equations', '4 equations'], 'ans': 2, 'exp': 'Three unknowns require three independent equations (combination of junction and loop rules).'},
            ]),
            ('Review & Applications', """# 📋 DC Circuits Review

**Part 7 of 7 — Summary**

---

### Essential Formulas

| Formula | Use |
|---------|-----|
| $V = IR$ | Ohm’s law |
| $R_s = R_1 + R_2$ | Series resistance |
| $1/R_p = 1/R_1 + 1/R_2$ | Parallel resistance |
| $P = IV = I^2R = V^2/R$ | Power |
| $\\\\tau = RC$ | Time constant |
| $q(t) = Q_0 e^{-t/RC}$ | Discharge |
| $V_{term} = \\\\mathcal{E} - Ir$ | Real battery |""",
            [
                {'q': 'Which combination gives the smallest equivalent resistance?', 'opts': ['$10\\\\Omega$ and $10\\\\Omega$ in series', '$10\\\\Omega$ and $10\\\\Omega$ in parallel', '$5\\\\Omega$ alone', 'All are equal'], 'ans': 1, 'exp': 'Series: 20Ω. Parallel: 5Ω. Single 5Ω. The parallel combination gives 5Ω, same as the single resistor.'},
            ]),
        ]
    },
    {
        'slug': 'magnetic-fields-physics-c-em',
        'exportPrefix': 'physCEMMagFields',
        'parts': [
            ('Magnetic Force on Charges', """# 🧲 Magnetic Force on Moving Charges

**Part 1 of 7 — The Lorentz Force**

---

### Magnetic Force

$$\\\\vec{F} = q\\\\vec{v} \\\\times \\\\vec{B}$$

Magnitude: $F = qvB\\\\sin\\\\theta$

| Fact | Detail |
|------|--------|
| Direction | Right-hand rule (cross product) |
| Perpendicular | Force ⊥ velocity AND ⊥ B |
| No work | Magnetic force does NO work ($\\\\vec{F} \\\\perp \\\\vec{v}$) |

---

### Circular Motion in B Field

$$qvB = \\\\frac{mv^2}{r}$$

$$r = \\\\frac{mv}{qB}$$

$$\\\\omega = \\\\frac{qB}{m}$$ (cyclotron frequency)

> 🔑 A charged particle in a uniform $\\\\vec{B}$ moves in a circle (or helix). The magnetic force provides centripetal acceleration.""",
            [
                {'q': 'A magnetic force does _____ work on a charged particle.', 'opts': ['Positive', 'Negative', 'Zero', 'Variable'], 'ans': 2, 'exp': '$\\\\vec{F} \\\\perp \\\\vec{v}$ always, so $W = \\\\vec{F} \\\\cdot \\\\vec{v} \\\\, dt = 0$. No work done.'},
                {'q': 'Doubling the speed of a charged particle in a magnetic field:', 'opts': ['Doubles the radius', 'Halves the radius', 'No effect on radius', 'Quadruples the radius'], 'ans': 0, 'exp': '$r = mv/(qB)$. Doubling $v$ doubles $r$.'},
            ]),
            ('Force on Current-Carrying Wires', """# 🔌 Force on Current-Carrying Wires

**Part 2 of 7 — Wires in Magnetic Fields**

---

### Force on a Wire

$$\\\\vec{F} = I\\\\vec{L} \\\\times \\\\vec{B}$$

Magnitude: $F = BIL\\\\sin\\\\theta$

where $L$ is the length of wire in the field.

---

### Torque on a Current Loop

$$\\\\vec{\\\\tau} = \\\\vec{\\\\mu} \\\\times \\\\vec{B}$$

where $\\\\vec{\\\\mu} = NIA\\\\hat{n}$ is the magnetic dipole moment.

$|\\\\tau| = NIAB\\\\sin\\\\theta$

> 🔑 This is the principle behind electric motors — a current loop in a magnetic field experiences a torque.""",
            [
                {'q': 'A 2 m wire carrying 3 A is perpendicular to a 0.5 T field. $F =$', 'opts': ['$1$ N', '$3$ N', '$1.5$ N', '$6$ N'], 'ans': 1, 'exp': '$F = BIL\\\\sin(90°) = 0.5(3)(2)(1) = 3$ N.'},
            ]),
            ('Biot-Savart Law', """# 🔬 Biot-Savart Law

**Part 3 of 7 — Magnetic Field from Current**

---

### The Biot-Savart Law

$$d\\\\vec{B} = \\\\frac{\\\\mu_0}{4\\\\pi} \\\\frac{I \\, d\\\\vec{l} \\\\times \\\\hat{r}}{r^2}$$

---

### Common Results

| Configuration | $B$ at Center/Point |
|--------------|-------------------|
| Long straight wire | $B = \\\\frac{\\\\mu_0 I}{2\\\\pi r}$ |
| Center of circular loop | $B = \\\\frac{\\\\mu_0 I}{2R}$ |
| On axis of loop | $B = \\\\frac{\\\\mu_0 IR^2}{2(R^2+x^2)^{3/2}}$ |

$\\\\mu_0 = 4\\\\pi \\\\times 10^{-7}$ T·m/A

> 🔑 Right-hand rule: curl fingers in direction of current → thumb points in direction of $\\\\vec{B}$.""",
            [
                {'q': 'The magnetic field of a long straight wire falls off as:', 'opts': ['$1/r$', '$1/r^2$', '$1/r^3$', 'Constant'], 'ans': 0, 'exp': '$B = \\\\mu_0 I/(2\\\\pi r)$. Field decreases as $1/r$.'},
            ]),
            ('Ampere’s Law', """# 🔁 Ampere’s Law

**Part 4 of 7 — Symmetry and Magnetic Fields**

---

### Ampere’s Law

$$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l} = \\\\mu_0 I_{\\\\text{enc}}$$

---

### When to Use Ampere’s Law

Use when there is sufficient symmetry to simplify $\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l}$:

| Configuration | Amperian Loop | Result |
|--------------|---------------|--------|
| Long straight wire | Circular loop (radius $r$) | $B = \\\\mu_0 I/(2\\\\pi r)$ |
| Solenoid | Rectangle (length $L$) | $B = \\\\mu_0 n I$ |
| Toroid | Circular loop inside | $B = \\\\mu_0 NI/(2\\\\pi r)$ |

> 🔑 Ampere's law is the magnetic analog of Gauss's law — use symmetry!""",
            [
                {'q': 'Inside an ideal solenoid, the magnetic field is:', 'opts': ['Zero', 'Uniform ($B = \\\\mu_0 nI$)', 'Depends on position', 'Infinite'], 'ans': 1, 'exp': 'Inside an ideal solenoid, $B = \\\\mu_0 nI$ — uniform and parallel to the axis.'},
                {'q': 'Ampere’s law is most useful when:', 'opts': ['No current flows', 'Current distribution has high symmetry', 'The field is zero', 'Charges are stationary'], 'ans': 1, 'exp': "Like Gauss's law, Ampere's law is most useful with high symmetry (infinite wire, solenoid, toroid)."},
            ]),
            ('Magnetic Flux', """# 🌀 Magnetic Flux

**Part 5 of 7 — Flux Through Surfaces**

---

### Magnetic Flux

$$\\\\Phi_B = \\\\int \\\\vec{B} \\\\cdot d\\\\vec{A}$$

For uniform $B$ through flat surface: $\\\\Phi_B = BA\\\\cos\\\\theta$

Units: Weber (Wb) = T·m²

---

### Gauss’s Law for Magnetism

$$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{A} = 0$$

> 🔑 No magnetic monopoles — field lines have no beginning or end. Total flux through any closed surface is zero.""",
            [
                {'q': 'The net magnetic flux through any closed surface is:', 'opts': ['Positive', 'Negative', 'Zero', 'Depends on the surface'], 'ans': 2, 'exp': "Gauss's law for magnetism: $\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{A} = 0$. No magnetic monopoles."},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ Magnetic Fields Workshop

**Part 6 of 7 — Strategies**

---

### Choosing the Right Law

| Situation | Use |
|-----------|-----|
| Field from a short wire segment | Biot-Savart |
| Field with high symmetry | Ampere’s law |
| Force on a moving charge | $\\\\vec{F} = q\\\\vec{v} \\\\times \\\\vec{B}$ |
| Force on a current-carrying wire | $\\\\vec{F} = I\\\\vec{L} \\\\times \\\\vec{B}$ |
| Torque on a loop | $\\\\tau = NIAB\\\\sin\\\\theta$ |""",
            [
                {'q': 'To find the field near a finite curved wire, use:', 'opts': ["Ampere's law", 'Biot-Savart law', "$Coulomb's law$", 'Faraday’s law'], 'ans': 1, 'exp': 'Biot-Savart works for any current configuration. Ampere’s law needs symmetry.'},
            ]),
            ('Review & Applications', """# 📋 Magnetic Fields Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $\\\\vec{F} = q\\\\vec{v} \\\\times \\\\vec{B}$ | Force on charge |
| $r = mv/(qB)$ | Cyclotron radius |
| $B = \\\\mu_0 I/(2\\\\pi r)$ | Long wire |
| $B = \\\\mu_0 nI$ | Solenoid |
| $\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l} = \\\\mu_0 I_{enc}$ | Ampere’s law |
| $\\\\Phi_B = BA\\\\cos\\\\theta$ | Flux |""",
            [
                {'q': '$\\\\mu_0$ is called:', 'opts': ['Permittivity of free space', 'Permeability of free space', 'Magnetic flux', 'Susceptibility'], 'ans': 1, 'exp': '$\\\\mu_0$ is the permeability of free space ($4\\\\pi \\\\times 10^{-7}$ T·m/A).'},
            ]),
        ]
    },
    {
        'slug': 'em-induction-physics-c-em',
        'exportPrefix': 'physCEMInduction',
        'parts': [
            ('Faraday’s Law', """# ⚡ Faraday’s Law of Induction

**Part 1 of 7 — Changing Flux Creates EMF**

---

### Faraday’s Law

$$\\\\mathcal{E} = -\\\\frac{d\\\\Phi_B}{dt}$$

For $N$ loops: $\\\\mathcal{E} = -N\\\\frac{d\\\\Phi_B}{dt}$

---

### Lenz’s Law

The induced current flows in a direction that **opposes** the change in flux that caused it.

> 🔑 The negative sign in Faraday's law encodes Lenz's law. Nature resists changes in magnetic flux.

---

### Ways to Change Flux

$\\\\Phi_B = BA\\\\cos\\\\theta$ can change by changing:
1. **$B$** — changing the field strength
2. **$A$** — changing the area of the loop
3. **$\\\\theta$** — rotating the loop""",
            [
                {'q': 'Lenz’s law ensures that the induced EMF:', 'opts': ['Enhances the flux change', 'Opposes the flux change', 'Is always zero', 'Is always positive'], 'ans': 1, 'exp': 'Lenz’s law: induced EMF opposes the change that produced it (conservation of energy).'},
                {'q': 'A loop in a uniform, constant $B$ field has induced EMF:', 'opts': ['$EMF = BA$', '$EMF = B/A$', '$EMF = 0$', '$EMF = BA\\\\cos\\\\theta$'], 'ans': 2, 'exp': 'If $B$, $A$, and $\\\\theta$ are all constant, $d\\\\Phi/dt = 0$, so EMF = 0.'},
            ]),
            ('Motional EMF', """# 🚂 Motional EMF

**Part 2 of 7 — Moving Conductors in Fields**

---

### EMF in a Moving Rod

A rod of length $L$ moving at velocity $v$ perpendicular to $\\\\vec{B}$:

$$\\\\mathcal{E} = BLv$$

---

### Derivation from Faraday’s Law

As the rod moves, the area of the circuit changes:
$$\\\\frac{d\\\\Phi}{dt} = B\\\\frac{dA}{dt} = BL\\\\frac{dx}{dt} = BLv$$

---

### Motional EMF and Force

The current in the circuit: $I = BLv/R$

The force on the rod: $F = BIL = B^2L^2v/R$

> 🔑 The magnetic braking force opposes the motion — this is the principle behind magnetic braking.""",
            [
                {'q': 'A 0.5 m rod moves at 2 m/s in a 0.3 T field. The motional EMF is:', 'opts': ['$0.15$ V', '$0.3$ V', '$0.6$ V', '$1.0$ V'], 'ans': 1, 'exp': '$\\\\mathcal{E} = BLv = 0.3(0.5)(2) = 0.3$ V.'},
            ]),
            ('Inductance', """# 🔗 Inductance

**Part 3 of 7 — Self and Mutual Inductance**

---

### Self-Inductance

$$\\\\mathcal{E} = -L\\\\frac{dI}{dt}$$

where $L$ is the inductance. Units: Henry (H)

For a solenoid: $L = \\\\mu_0 n^2 Al$

---

### Mutual Inductance

$$\\\\mathcal{E}_2 = -M\\\\frac{dI_1}{dt}$$

Two coils that share magnetic flux have mutual inductance $M$.

---

### Energy in an Inductor

$$U = \\\\frac{1}{2}LI^2$$

Energy density: $u = \\\\frac{B^2}{2\\\\mu_0}$

> 🔑 An inductor stores energy in its magnetic field, just as a capacitor stores energy in its electric field.""",
            [
                {'q': 'The energy stored in an inductor is:', 'opts': ['$LI$', '$LI^2$', '$\\\\frac{1}{2}LI^2$', '$\\\\frac{1}{2}LI$'], 'ans': 2, 'exp': '$U = \\\\frac{1}{2}LI^2$, analogous to $\\\\frac{1}{2}CV^2$ for a capacitor.'},
            ]),
            ('RL Circuits', """# ⏱️ RL Circuits

**Part 4 of 7 — Inductors in DC Circuits**

---

### Current Growth (RL circuit with battery)

$$I(t) = \\\\frac{\\\\mathcal{E}}{R}(1 - e^{-t/\\\\tau})$$

where $\\\\tau = L/R$

---

### Current Decay

$$I(t) = I_0 e^{-t/\\\\tau}$$

---

### Comparison with RC Circuits

| Property | RC | RL |
|----------|----|----|
| Time constant | $\\\\tau = RC$ | $\\\\tau = L/R$ |
| Charging | $q = C\\\\mathcal{E}(1-e^{-t/\\\\tau})$ | $I = (\\\\mathcal{E}/R)(1-e^{-t/\\\\tau})$ |
| Discharging | $q = Q_0 e^{-t/\\\\tau}$ | $I = I_0 e^{-t/\\\\tau}$ |

> 🔑 Inductors resist changes in current, just as capacitors resist changes in voltage.""",
            [
                {'q': 'The time constant of an RL circuit is:', 'opts': ['$LR$', '$L/R$', '$R/L$', '$\\\\sqrt{LR}$'], 'ans': 1, 'exp': '$\\\\tau = L/R$. Note that larger $L$ means a longer time constant (more resistance to change).'},
            ]),
            ('LC Circuits & EM Oscillations', """# 🔁 LC Circuits & Electromagnetic Oscillations

**Part 5 of 7 — Energy Oscillations**

---

### LC Circuit

Energy oscillates between the capacitor (electric field) and inductor (magnetic field):

$$q(t) = Q_0 \\\\cos(\\\\omega t + \\\\phi)$$

$$\\\\omega = \\\\frac{1}{\\\\sqrt{LC}}$$

$$T = 2\\\\pi\\\\sqrt{LC}$$

---

### Energy Exchange

$$U_C = \\\\frac{q^2}{2C}, \\quad U_L = \\\\frac{1}{2}LI^2$$

$$U_{\\\\text{total}} = \\\\frac{Q_0^2}{2C} = \\\\text{constant}$$

> 🔑 LC oscillation is the electromagnetic analog of SHM in mechanics. Charge ↔ position, current ↔ velocity, $L$ ↔ mass, $1/C$ ↔ spring constant.""",
            [
                {'q': 'The resonant frequency of an LC circuit is:', 'opts': ['$\\\\omega = LC$', '$\\\\omega = 1/\\\\sqrt{LC}$', '$\\\\omega = \\\\sqrt{L/C}$', '$\\\\omega = 1/(LC)$'], 'ans': 1, 'exp': '$\\\\omega = 1/\\\\sqrt{LC}$ — the natural frequency of LC oscillation.'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ EM Induction Workshop

**Part 6 of 7 — Practice Strategies**

---

### Problem Types

| Type | Key Approach |
|------|-------------|
| Changing $B$ field in loop | $\\\\mathcal{E} = -d\\\\Phi_B/dt$ |
| Moving rod | $\\\\mathcal{E} = BLv$ |
| Rotating coil | $\\\\mathcal{E} = NBA\\\\omega\\\\sin(\\\\omega t)$ |
| RL circuit | $\\\\tau = L/R$, exponential growth/decay |
| LC circuit | $\\\\omega = 1/\\\\sqrt{LC}$, energy oscillation |
| Lenz’s law direction | Oppose the change in flux |""",
            [
                {'q': 'A generator works by:', 'opts': ['Chemical reaction', 'Rotating a coil in a magnetic field', 'Static electricity', 'Thermoelectric effect'], 'ans': 1, 'exp': 'A generator produces EMF by rotating a coil in a magnetic field (changing $\\\\theta$ in $\\\\Phi = BA\\\\cos\\\\theta$).'},
            ]),
            ('Review & Applications', """# 📋 EM Induction Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $\\\\mathcal{E} = -d\\\\Phi_B/dt$ | Faraday’s law |
| $\\\\mathcal{E} = BLv$ | Motional EMF |
| $L = \\\\mu_0 n^2 Al$ | Solenoid inductance |
| $U = \\\\frac{1}{2}LI^2$ | Inductor energy |
| $\\\\tau_{RL} = L/R$ | RL time constant |
| $\\\\omega_{LC} = 1/\\\\sqrt{LC}$ | LC frequency |""",
            [
                {'q': 'Faraday’s law says EMF is proportional to:', 'opts': ['Magnetic flux', 'Rate of change of magnetic flux', 'Magnetic field strength', 'Current'], 'ans': 1, 'exp': '$\\\\mathcal{E} = -d\\\\Phi_B/dt$ — EMF is induced by the rate of change of flux, not the flux itself.'},
            ]),
        ]
    },
    {
        'slug': 'maxwell-equations-physics-c-em',
        'exportPrefix': 'physCEMMaxwell',
        'parts': [
            ('Maxwell’s Equations Overview', """# 🌐 Maxwell’s Equations

**Part 1 of 7 — The Four Laws of Electromagnetism**

---

### The Four Equations

| # | Name | Integral Form |
|---|------|--------------|
| 1 | Gauss’s Law (E) | $\\\\oint \\\\vec{E} \\\\cdot d\\\\vec{A} = Q_{enc}/\\\\epsilon_0$ |
| 2 | Gauss’s Law (B) | $\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{A} = 0$ |
| 3 | Faraday’s Law | $\\\\oint \\\\vec{E} \\\\cdot d\\\\vec{l} = -d\\\\Phi_B/dt$ |
| 4 | Ampere-Maxwell | $\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l} = \\\\mu_0(I + \\\\epsilon_0 d\\\\Phi_E/dt)$ |

---

### Physical Meaning

| Equation | Says... |
|----------|---------|
| Gauss (E) | Electric charges create electric fields |
| Gauss (B) | No magnetic monopoles |
| Faraday | Changing B creates E |
| Ampere-Maxwell | Currents AND changing E create B |

> 🔑 Maxwell’s equations unify electricity and magnetism and predict electromagnetic waves.""",
            [
                {'q': 'Which Maxwell equation says there are no magnetic monopoles?', 'opts': ["Gauss's Law for E", "Gauss's Law for B", "Faraday's Law", 'Ampere-Maxwell'], 'ans': 1, 'exp': "$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{A} = 0$ — no net magnetic charge exists."},
                {'q': 'Maxwell’s addition to Ampere’s law was:', 'opts': ['Magnetic current', 'Displacement current ($\\\\epsilon_0 d\\\\Phi_E/dt$)', 'Gravitational term', 'Quantum correction'], 'ans': 1, 'exp': 'Maxwell added the displacement current term $\\\\epsilon_0 d\\\\Phi_E/dt$ to account for changing electric flux.'},
            ]),
            ('Displacement Current', """# 🔄 Displacement Current

**Part 2 of 7 — Maxwell’s Key Insight**

---

### The Problem with Ampere’s Law

Consider a charging capacitor — current flows in the wire but not between the plates. Ampere’s law gives different answers depending on which surface you choose!

---

### Maxwell’s Fix: Displacement Current

$$I_d = \\\\epsilon_0 \\\\frac{d\\\\Phi_E}{dt}$$

This changing electric flux acts like a current for purposes of producing a magnetic field.

$$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l} = \\\\mu_0(I + I_d)$$

> 🔑 Between capacitor plates, there is no real current — but the changing $\\\\vec{E}$ creates a magnetic field just as if there were current.""",
            [
                {'q': 'Displacement current is proportional to:', 'opts': ['Electric field', 'Rate of change of electric flux', 'Magnetic flux', 'Charge density'], 'ans': 1, 'exp': '$I_d = \\\\epsilon_0 d\\\\Phi_E/dt$ — it is the rate of change of electric flux.'},
            ]),
            ('Electromagnetic Waves', """# 🌊 Electromagnetic Waves

**Part 3 of 7 — Light as an EM Wave**

---

### EM Wave Properties

$$c = \\\\frac{1}{\\\\sqrt{\\\\mu_0 \\\\epsilon_0}} = 3.0 \\\\times 10^8 \\\\text{ m/s}$$

| Property | Value |
|----------|-------|
| Speed | $c = 3 \\\\times 10^8$ m/s (in vacuum) |
| $\\\\vec{E} \\\\perp \\\\vec{B}$ | E and B are perpendicular |
| $\\\\vec{E} \\\\perp \\\\vec{v}$ | Transverse wave |
| $E/B = c$ | Ratio of field amplitudes |

---

### Energy in EM Waves

Energy density: $u = \\\\epsilon_0 E^2 = B^2/\\\\mu_0$

Intensity: $I = \\\\frac{1}{2}c\\\\epsilon_0 E_0^2$

Poynting vector: $\\\\vec{S} = \\\\frac{1}{\\\\mu_0}\\\\vec{E} \\\\times \\\\vec{B}$

> 🔑 Light is an electromagnetic wave — predicted by Maxwell’s equations before experimentally confirmed by Hertz.""",
            [
                {'q': 'The speed of light in vacuum equals:', 'opts': ['$\\\\sqrt{\\\\mu_0 \\\\epsilon_0}$', '$\\\\mu_0/\\\\epsilon_0$', '$1/\\\\sqrt{\\\\mu_0 \\\\epsilon_0}$', '$\\\\epsilon_0/\\\\mu_0$'], 'ans': 2, 'exp': '$c = 1/\\\\sqrt{\\\\mu_0\\\\epsilon_0}$. This was Maxwell’s great prediction.'},
            ]),
            ('EM Spectrum', """# 🌈 The Electromagnetic Spectrum

**Part 4 of 7 — Types of EM Radiation**

---

### The Spectrum

| Type | Wavelength | Frequency |
|------|-----------|-----------|
| Radio | > 1 m | < 300 MHz |
| Microwave | 1 mm – 1 m | 300 MHz – 300 GHz |
| Infrared | 700 nm – 1 mm | |
| Visible | 400 – 700 nm | |
| Ultraviolet | 10 – 400 nm | |
| X-ray | 0.01 – 10 nm | |
| Gamma | < 0.01 nm | > $10^{19}$ Hz |

All travel at $c = f\\\\lambda$ in vacuum.

> 🔑 All electromagnetic waves are the same phenomenon — oscillating $\\\\vec{E}$ and $\\\\vec{B}$ fields. They differ only in frequency.""",
            [
                {'q': 'All EM waves travel at the same speed in vacuum because:', 'opts': ['They have the same frequency', 'They have the same wavelength', 'Maxwell’s equations predict a unique speed', 'They are all visible'], 'ans': 2, 'exp': '$c = 1/\\\\sqrt{\\\\mu_0\\\\epsilon_0}$ depends only on constants of nature, not on frequency or wavelength.'},
            ]),
            ('Energy & Momentum of EM Waves', """# 💡 Energy and Momentum of EM Waves

**Part 5 of 7 — Poynting Vector and Radiation Pressure**

---

### Poynting Vector

$$\\\\vec{S} = \\\\frac{1}{\\\\mu_0}\\\\vec{E} \\\\times \\\\vec{B}$$

$|\\\\vec{S}|$ = power per unit area (W/m²)

Average intensity: $I = \\\\frac{1}{2}c\\\\epsilon_0 E_0^2 = \\\\frac{E_0 B_0}{2\\\\mu_0}$

---

### Radiation Pressure

| Surface | Pressure |
|---------|----------|
| Perfect absorber | $P = I/c$ |
| Perfect reflector | $P = 2I/c$ |

EM waves carry momentum: $p = U/c$ (for absorbed radiation)

> 🔑 Light exerts pressure — this is the basis of solar sails and laser propulsion.""",
            [
                {'q': 'EM radiation pressure on a perfect reflector is:', 'opts': ['$I/c$', '$2I/c$', '$I/c^2$', 'Zero'], 'ans': 1, 'exp': 'Reflected light transfers twice the momentum → pressure $= 2I/c$.'},
            ]),
            ('Problem-Solving Workshop', """# 🛠️ Maxwell Workshop

**Part 6 of 7 — Practice**

---

### AP Physics C E&M: Maxwell Topics

| Concept | What to Know |
|---------|-------------|
| Identify which equation applies | Match to symmetry and context |
| Displacement current | $I_d = \\\\epsilon_0 d\\\\Phi_E/dt$ |
| EM wave speed | $c = 1/\\\\sqrt{\\\\mu_0\\\\epsilon_0}$ |
| E/B ratio | $E = cB$ |
| Poynting vector | Direction of energy flow |
| Radiation pressure | $P = I/c$ (absorber), $2I/c$ (reflector) |""",
            [
                {'q': 'In an EM wave, $\\\\vec{E}$ and $\\\\vec{B}$ are:', 'opts': ['Parallel', 'Anti-parallel', 'Perpendicular', 'At 45°'], 'ans': 2, 'exp': 'In an EM wave, $\\\\vec{E} \\\\perp \\\\vec{B}$ and both are perpendicular to the direction of propagation.'},
            ]),
            ('Review & Applications', """# 📋 Maxwell’s Equations Review

**Part 7 of 7 — Final Summary**

---

### The Big Picture

Maxwell’s four equations describe ALL of classical electromagnetism:

1. **Gauss (E):** Charges → E fields
2. **Gauss (B):** No magnetic monopoles
3. **Faraday:** Changing B → E
4. **Ampere-Maxwell:** Currents + changing E → B

Together they predict EM waves traveling at $c = 1/\\\\sqrt{\\\\mu_0\\\\epsilon_0}$.

> 🔑 "Maxwell’s equations are the most beautiful equations in physics." — Richard Feynman""",
            [
                {'q': 'How many Maxwell’s equations are there?', 'opts': ['2', '3', '4', '5'], 'ans': 2, 'exp': 'There are exactly four Maxwell’s equations, covering all of classical electromagnetism.'},
            ]),
        ]
    },
]


def esc(s):
    """Escape single quotes for TypeScript strings."""
    return s.replace("'", "’")


def format_mcqs(questions):
    items = []
    for q in questions:
        opts_str = ', '.join(f"'{esc(o)}'" for o in q['opts'])
        items.append(f"""          {{
            question: '{esc(q["q"])}',
            options: [{opts_str}],
            correctAnswer: {q['ans']},
            explanation: '{esc(q["exp"])}'
          }}""")
    return ',\n'.join(items)


def generate_lesson(topic, part_idx):
    part = topic['parts'][part_idx]
    part_num = part_idx + 1
    title = part[0]
    content_text = part[1]
    mcqs = part[2] if len(part) > 2 else []
    
    export_name = f"{topic['exportPrefix']}Part{part_num}Data"
    slug = topic['slug']
    short = slug.replace('-physics-c', '').replace('-physics-c-em', '')
    sid = f"physicsc-{short}-p{part_num}"
    
    sections = [f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `{content_text}`
    }}"""]
    
    if mcqs:
        mcq_str = format_mcqs(mcqs)
        sections.append(f"""    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {{
        questions: [
{mcq_str}
        ]
      }}
    }}""")
    
    sections_str = ',\n'.join(sections)
    
    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{sections_str}
  ]
}};
"""


def main():
    print("=== Generating AP Physics C Lessons ===\n")
    count = 0
    
    for topic in TOPICS:
        print(f"Topic: {topic['slug']}")
        for i in range(len(topic['parts'])):
            part_num = i + 1
            content = generate_lesson(topic, i)
            short = topic['slug'].replace('-physics-c', '').replace('-physics-c-em', '')
            filename = f"physicsc-{short}-part{part_num}.ts"
            filepath = os.path.join(BASE, filename)
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"  Created: {filename}")
            count += 1
    
    print(f"\n✅ Generated {count} lesson files")


if __name__ == '__main__':
    main()
