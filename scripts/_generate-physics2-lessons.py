#!/usr/bin/env python3
"""Generate 8 new AP Physics 2 lesson files (Topics 20-27)."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons')

TOPICS = [
    {
        'slug': 'electromagnetic-waves',
        'filePrefix': 'physics2-em-waves',
        'exportPrefix': 'physics2EmWaves',
        'parts': [
            {
                'title': 'EM Wave Properties',
                'content': """# \u2728 Electromagnetic Waves

**Part 1 of 7 \u2014 EM Wave Properties**

---

### What Are Electromagnetic Waves?

Electromagnetic waves are self-propagating oscillations of **electric** and **magnetic** fields that travel through space at the speed of light.

### Key Properties

| Property | Value/Description |
|----------|-------------------|
| Speed in vacuum | $c = 3 \\\\times 10^8$ m/s |
| Relationship | $c = f\\\\lambda$ |
| Type | Transverse wave |
| Medium required? | No \u2014 travels through vacuum |

---

### E and B Field Relationship

The electric field $\\\\vec{E}$ and magnetic field $\\\\vec{B}$ oscillate **perpendicular** to each other and perpendicular to the direction of propagation.

$$\\\\frac{E}{B} = c$$

> \U0001f511 **Key:** EM waves carry energy and momentum. The energy is shared equally between the electric and magnetic fields.

---

### The Electromagnetic Spectrum

| Region | Wavelength | Frequency |
|--------|-----------|-----------|
| Radio | > 1 m | < $3 \\\\times 10^8$ Hz |
| Microwave | 1 mm \u2013 1 m | $3 \\\\times 10^8$ \u2013 $3 \\\\times 10^{11}$ Hz |
| Infrared | 700 nm \u2013 1 mm | $3 \\\\times 10^{11}$ \u2013 $4.3 \\\\times 10^{14}$ Hz |
| Visible | 400 \u2013 700 nm | $4.3 \\\\times 10^{14}$ \u2013 $7.5 \\\\times 10^{14}$ Hz |
| Ultraviolet | 10 \u2013 400 nm | $7.5 \\\\times 10^{14}$ \u2013 $3 \\\\times 10^{16}$ Hz |
| X-ray | 0.01 \u2013 10 nm | $3 \\\\times 10^{16}$ \u2013 $3 \\\\times 10^{19}$ Hz |
| Gamma | < 0.01 nm | > $3 \\\\times 10^{19}$ Hz |

All travel at speed $c$ in vacuum!""",
                'mcqs': [
                    ('Electromagnetic waves are:',
                     ['Longitudinal waves', 'Transverse waves', 'Both longitudinal and transverse', 'Neither'],
                     1, 'EM waves have E and B fields oscillating perpendicular to propagation \u2014 transverse.'),
                    ('If an EM wave has $\\\\lambda = 500$ nm, its frequency is approximately:',
                     ['$6 \\\\times 10^{14}$ Hz', '$6 \\\\times 10^{11}$ Hz', '$1.5 \\\\times 10^{11}$ Hz', '$6 \\\\times 10^{17}$ Hz'],
                     0, '$f = c/\\\\lambda = (3 \\\\times 10^8)/(500 \\\\times 10^{-9}) = 6 \\\\times 10^{14}$ Hz.'),
                    ('In an EM wave, E and B fields are:',
                     ['Parallel to each other', 'Perpendicular to each other and to propagation direction', 'In the same direction as propagation', 'Only E oscillates'],
                     1, 'E \u22a5 B \u22a5 direction of travel. They form a right-hand system.')
                ],
                'inputs': {
                    'prompt': """**EM Wave Calculations** \U0001f9ee

**1)** Wavelength of a 100 MHz radio wave? (in meters)

**2)** If $E_{max} = 600$ V/m, find $B_{max}$ in Tesla. (use scientific notation like 2e-6)

**3)** What region of the EM spectrum has $\\\\lambda = 0.5$ nm?""",
                    'boxes': 3,
                    'answers': ['3', '2e-6', 'x-ray'],
                    'hints': ['$\\\\lambda = c/f = 3 \\\\times 10^8 / 10^8$', '$B = E/c = 600/(3 \\\\times 10^8)$', '0.01\u201310 nm range'],
                    'explanation': '1) $3 \\\\times 10^8 / 10^8 = 3$ m. 2) $600/(3 \\\\times 10^8) = 2 \\\\times 10^{-6}$ T. 3) X-ray (0.01\u201310 nm).'
                }
            },
            {
                'title': 'Energy & Intensity',
                'content': """# \u26a1 Energy & Intensity of EM Waves

**Part 2 of 7 \u2014 Power and Intensity**

---

### Intensity

Intensity is the power per unit area carried by the wave:

$$I = \\\\frac{P}{A} = \\\\frac{P}{4\\\\pi r^2}$$

For a point source radiating uniformly, intensity follows the **inverse-square law**.

### Energy Density

$$u = \\\\frac{1}{2}\\\\epsilon_0 E^2 + \\\\frac{1}{2\\\\mu_0}B^2 = \\\\epsilon_0 E^2$$

The electric and magnetic field energies are equal!

### Intensity and Field Amplitudes

$$I = \\\\frac{c\\\\epsilon_0 E_0^2}{2} = \\\\frac{E_0 B_0}{2\\\\mu_0}$$

---

### Radiation Pressure

Light exerts pressure on surfaces:
- **Absorbed:** $P_{rad} = I/c$
- **Reflected:** $P_{rad} = 2I/c$""",
                'mcqs': [
                    ('If you double the distance from a point source, intensity:',
                     ['Doubles', 'Halves', 'Quarters', 'Stays the same'],
                     2, 'Inverse-square law: $I \\\\propto 1/r^2$. Double $r$ \u2192 $I/4$.'),
                    ('Radiation pressure is greater for:',
                     ['Absorbed light', 'Reflected light', 'Both are equal', 'Neither exerts pressure'],
                     1, 'Reflected light: $P = 2I/c$ (double momentum change). Absorbed: $P = I/c$.'),
                    ('The energy in an EM wave is carried:',
                     ['Only by the electric field', 'Only by the magnetic field', 'Equally by both E and B fields', 'By neither \u2014 it travels separately'],
                     2, 'Electric and magnetic field energies are equal: $u_E = u_B$.')
                ],
                'inputs': {
                    'prompt': """**Intensity Calculations** \U0001f9ee

A 100 W light bulb radiates uniformly.

**1)** Intensity at 2 m distance? (in W/m\u00b2, round to 1 decimal)

**2)** At what distance is intensity 1 W/m\u00b2? (in meters, round to 1 decimal)

**3)** If intensity is 500 W/m\u00b2 and light is absorbed, radiation pressure? (answer in scientific notation like 1.67e-6)""",
                    'boxes': 3,
                    'answers': ['1.99', '2.8', '1.67e-6'],
                    'hints': ['$I = P/(4\\\\pi r^2) = 100/(4\\\\pi \\\\cdot 4)$', '$r = \\\\sqrt{P/(4\\\\pi I)}$', '$P_{rad} = I/c$'],
                    'explanation': '1) $100/(16\\\\pi) \\\\approx 1.99$ W/m\u00b2. 2) $\\\\sqrt{100/(4\\\\pi)} \\\\approx 2.8$ m. 3) $500/(3 \\\\times 10^8) \\\\approx 1.67 \\\\times 10^{-6}$ Pa.'
                }
            },
            {
                'title': 'Polarization',
                'content': """# \U0001f576\ufe0f Polarization

**Part 3 of 7 \u2014 Polarization of Light**

---

### Unpolarized vs Polarized Light

- **Unpolarized:** E field oscillates in all directions perpendicular to propagation
- **Linearly polarized:** E field oscillates in only one plane

### Malus\u2019s Law

When polarized light passes through a polarizer at angle $\\\\theta$ to the transmission axis:

$$I = I_0 \\\\cos^2\\\\theta$$

### Special Cases
| Angle | Result |
|-------|--------|
| $\\\\theta = 0\u00b0$ | $I = I_0$ (full transmission) |
| $\\\\theta = 90\u00b0$ | $I = 0$ (complete block) |
| $\\\\theta = 45\u00b0$ | $I = I_0/2$ |

### Unpolarized Through One Polarizer

$$I = \\\\frac{I_0}{2}$$

Always halved, regardless of polarizer orientation.""",
                'mcqs': [
                    ('Unpolarized light passes through a polarizer. The transmitted intensity is:',
                     ['$I_0$', '$I_0/2$', '$I_0/4$', 'Zero'],
                     1, 'Unpolarized through one polarizer always gives $I_0/2$.'),
                    ('Polarized light at 60\u00b0 to a polarizer: transmitted intensity?',
                     ['$I_0/2$', '$I_0/4$', '$3I_0/4$', '$I_0 \\\\cos 60\u00b0$'],
                     1, '$I = I_0 \\\\cos^2(60\u00b0) = I_0(1/2)^2 = I_0/4$.'),
                    ('Two crossed polarizers (90\u00b0) transmit:',
                     ['Half the light', 'Quarter of the light', 'No light', 'All the light'],
                     2, '$I = I_0 \\\\cos^2(90\u00b0) = 0$. Crossed polarizers block all light.')
                ],
                'inputs': {
                    'prompt': """**Polarization Problems** \U0001f9ee

Unpolarized light with $I_0 = 200$ W/m\u00b2 passes through two polarizers.

First polarizer: transmits in vertical direction.
Second polarizer: at 30\u00b0 from vertical.

**1)** Intensity after first polarizer? (W/m\u00b2)

**2)** Intensity after second polarizer? (W/m\u00b2)

**3)** What angle between polarizers gives zero transmission?""",
                    'boxes': 3,
                    'answers': ['100', '75', '90'],
                    'hints': ['Unpolarized \u2192 $I_0/2$', '$100 \\\\cos^2(30\u00b0) = 100(3/4)$', '$\\\\cos^2(\\\\theta) = 0$ when?'],
                    'explanation': '1) $200/2 = 100$ W/m\u00b2. 2) $100 \\\\cos^2(30\u00b0) = 100(0.75) = 75$ W/m\u00b2. 3) 90\u00b0 (crossed polarizers).'
                }
            },
            {
                'title': 'EM Wave Generation',
                'content': """# \U0001f4e1 EM Wave Generation & Applications

**Part 4 of 7 \u2014 How EM Waves Are Produced**

---

### Sources of EM Waves

Any **accelerating charge** produces electromagnetic radiation.

| Source | Mechanism |
|--------|-----------|
| Antenna | Oscillating current in conductor |
| Hot objects | Thermal vibration of charges |
| Atomic transitions | Electrons jumping energy levels |
| Nuclear decay | Nuclear rearrangement |

### Antenna Basics

An oscillating voltage drives charges back and forth in an antenna, creating oscillating E and B fields that propagate outward.

- **Frequency** of radiation = frequency of oscillation
- **Dipole antenna** radiates most strongly perpendicular to its length

---

### Maxwell\u2019s Key Insight

A changing electric field creates a magnetic field (displacement current), and a changing magnetic field creates an electric field (Faraday\u2019s law). Together, they sustain a self-propagating wave.""",
                'mcqs': [
                    ('EM waves are produced by:',
                     ['Stationary charges', 'Charges moving at constant velocity', 'Accelerating charges', 'Magnetic monopoles'],
                     2, 'Only accelerating charges radiate EM waves.'),
                    ('Maxwell\u2019s displacement current describes:',
                     ['Current in a wire', 'A changing electric field acting like a current', 'Magnetic current', 'Current through a capacitor plate'],
                     1, 'Displacement current = $\\\\epsilon_0 d\\\\Phi_E/dt$. A changing E field produces B, just like a real current.'),
                    ('A dipole antenna radiates most strongly:',
                     ['Along its length', 'Perpendicular to its length', 'In all directions equally', 'Only upward'],
                     1, 'Maximum radiation is perpendicular to the antenna axis; zero along the axis.')
                ],
                'inputs': {
                    'prompt': """**EM Wave Sources** \U0001f9ee

**1)** What produces visible light from a light bulb? (thermal/antenna/nuclear)

**2)** An FM radio station at 98.5 MHz broadcasts EM waves. Wavelength? (round to 1 decimal, in meters)

**3)** Does a charge moving at constant velocity radiate EM waves? (yes/no)""",
                    'boxes': 3,
                    'answers': ['thermal', '3.0', 'no'],
                    'hints': ['Hot filament = thermal radiation', '$\\\\lambda = c/f$', 'Only accelerating charges radiate'],
                    'explanation': '1) Thermal vibration of charges in the hot filament. 2) $3 \\\\times 10^8 / 98.5 \\\\times 10^6 \\\\approx 3.0$ m. 3) No \u2014 only acceleration produces radiation.'
                }
            },
            {
                'title': 'Doppler Effect for Light',
                'content': """# \U0001f680 Doppler Effect for EM Waves

**Part 5 of 7 \u2014 Frequency Shifts**

---

### Doppler Effect for Light

When source and observer move relative to each other:

**Approaching (blueshift):** frequency increases, wavelength decreases
**Receding (redshift):** frequency decreases, wavelength increases

### For speeds much less than $c$:

$$\\\\frac{\\\\Delta f}{f} \\\\approx \\\\frac{v}{c}$$

$$f_{observed} \\\\approx f_{source}\\\\left(1 \\\\pm \\\\frac{v}{c}\\\\right)$$

- **+** for approaching
- **\u2212** for receding

---

### Applications

| Application | How It Works |
|-------------|-------------|
| **Redshift of galaxies** | Light from distant galaxies shifted to longer wavelengths |
| **Radar guns** | Measure frequency shift of reflected microwaves |
| **Medical Doppler** | Measure blood flow velocity using ultrasound |""",
                'mcqs': [
                    ('A star moving away from Earth shows:',
                     ['Blueshift', 'Redshift', 'No shift', 'Greenshift'],
                     1, 'Receding source \u2192 lower frequency \u2192 longer wavelength \u2192 redshift.'),
                    ('The Doppler shift $\\\\Delta f/f \\\\approx v/c$ requires:',
                     ['$v \\\\gg c$', '$v \\\\ll c$', '$v = c$', 'No restriction'],
                     1, 'This is the low-speed approximation, valid when $v$ is much less than $c$.'),
                    ('A galaxy shows its hydrogen line at 660 nm instead of 656 nm. It is:',
                     ['Approaching', 'Receding', 'Stationary', 'Cannot determine'],
                     1, 'Wavelength increased (656 \u2192 660 nm) = redshift = moving away.')
                ],
                'inputs': {
                    'prompt': """**Doppler Calculations** \U0001f9ee

A source emits light at $f = 5 \\\\times 10^{14}$ Hz. It moves toward you at $v = 3 \\\\times 10^6$ m/s.

**1)** $v/c = ?$ (as a decimal)

**2)** $\\\\Delta f \\\\approx ?$ (in Hz, scientific notation like 5e12)

**3)** Is the observed frequency higher or lower than emitted?""",
                    'boxes': 3,
                    'answers': ['0.01', '5e12', 'higher'],
                    'hints': ['$3 \\\\times 10^6 / 3 \\\\times 10^8$', '$\\\\Delta f = f \\\\times v/c$', 'Approaching = blueshift'],
                    'explanation': '1) $0.01$. 2) $5 \\\\times 10^{14} \\\\times 0.01 = 5 \\\\times 10^{12}$ Hz. 3) Higher (blueshift from approaching source).'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### Strategy for EM Wave Problems

1. **Identify** wave properties: $c = f\\\\lambda$, $E/B = c$
2. **Apply** Malus\u2019s law for polarization: $I = I_0\\\\cos^2\\\\theta$
3. **Use** inverse-square law for intensity: $I = P/(4\\\\pi r^2)$
4. **Calculate** Doppler shifts: $\\\\Delta f/f = v/c$

### Common AP Mistakes
- Forgetting unpolarized light is halved by first polarizer
- Using $\\\\cos\\\\theta$ instead of $\\\\cos^2\\\\theta$ in Malus\u2019s law
- Not using inverse-square for intensity vs distance""",
                'mcqs': [
                    ('Light passes through 3 polarizers: unpolarized \u2192 vertical \u2192 45\u00b0 \u2192 90\u00b0. Final intensity (fraction of original)?',
                     ['0', '$I_0/8$', '$I_0/4$', '$I_0/16$'],
                     1, '$I_0/2 \\\\times \\\\cos^2(45\u00b0) \\\\times \\\\cos^2(45\u00b0) = I_0/2 \\\\times 1/2 \\\\times 1/2 = I_0/8$.'),
                    ('An EM wave in vacuum has $\\\\lambda = 0.1$ m. Its frequency is:',
                     ['$3 \\\\times 10^7$ Hz', '$3 \\\\times 10^9$ Hz', '$3 \\\\times 10^{10}$ Hz', '$3 \\\\times 10^6$ Hz'],
                     1, '$f = c/\\\\lambda = 3 \\\\times 10^8/0.1 = 3 \\\\times 10^9$ Hz (microwave).'),
                    ('The Poynting vector $\\\\vec{S}$ points in the direction of:',
                     ['The electric field', 'The magnetic field', 'Energy propagation', 'The source'],
                     2, '$\\\\vec{S} = \\\\vec{E} \\\\times \\\\vec{B}/\\\\mu_0$ points in the direction of energy flow.')
                ],
                'inputs': {
                    'prompt': """**AP Practice** \U0001f9ee

A laser has power 5 mW and beam diameter 2 mm.

**1)** Beam area in m\u00b2? (use scientific notation like 3.14e-6)

**2)** Intensity of beam? (in W/m\u00b2, round to nearest integer)

**3)** $E_{max}$ if $I = c\\\\epsilon_0 E_0^2/2$? (in V/m, round to nearest integer. $\\\\epsilon_0 = 8.85 \\\\times 10^{-12}$)""",
                    'boxes': 3,
                    'answers': ['3.14e-6', '1592', '1095'],
                    'hints': ['$A = \\\\pi r^2 = \\\\pi(0.001)^2$', '$I = P/A$', '$E_0 = \\\\sqrt{2I/(c\\\\epsilon_0)}$'],
                    'explanation': '1) $\\\\pi(10^{-3})^2 \\\\approx 3.14 \\\\times 10^{-6}$ m\u00b2. 2) $0.005/3.14 \\\\times 10^{-6} \\\\approx 1592$ W/m\u00b2. 3) $\\\\sqrt{2(1592)/(3 \\\\times 10^8 \\\\times 8.85 \\\\times 10^{-12})} \\\\approx 1095$ V/m.'
                }
            },
            {
                'title': 'Synthesis & AP Review',
                'content': """# \U0001f4dd Synthesis & AP Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Key Equations Summary

| Concept | Equation |
|---------|----------|
| Wave speed | $c = f\\\\lambda = 3 \\\\times 10^8$ m/s |
| E-B relation | $E = cB$ |
| Intensity | $I = P/(4\\\\pi r^2)$ |
| Malus\u2019s law | $I = I_0\\\\cos^2\\\\theta$ |
| Doppler | $\\\\Delta f/f \\\\approx v/c$ |
| Radiation pressure (absorbed) | $P = I/c$ |
| Radiation pressure (reflected) | $P = 2I/c$ |

### What to Remember for the AP Exam
- All EM waves travel at $c$ in vacuum
- EM waves are transverse
- E and B are perpendicular and in phase
- Intensity follows inverse-square law for point sources""",
                'mcqs': [
                    ('Which EM property changes when light enters glass from vacuum?',
                     ['Frequency', 'Wavelength and speed', 'All of the above', 'None \u2014 EM waves are unaffected by medium'],
                     1, 'Frequency stays constant; speed decreases ($v = c/n$) and wavelength decreases ($\\\\lambda = \\\\lambda_0/n$).'),
                    ('Three polarizers at 0\u00b0, 30\u00b0, 60\u00b0. Unpolarized light enters. What fraction emerges?',
                     ['$9/32$', '$3/8$', '$3/32$', '$27/128$'],
                     0, '$I_0/2 \\\\times \\\\cos^2(30\u00b0) \\\\times \\\\cos^2(30\u00b0) = I_0/2 \\\\times 3/4 \\\\times 3/4 = 9I_0/32$.'),
                    ('A source at 4 m has intensity 100 W/m\u00b2. At 8 m, intensity is:',
                     ['50 W/m\u00b2', '25 W/m\u00b2', '200 W/m\u00b2', '12.5 W/m\u00b2'],
                     1, 'Inverse-square: double distance \u2192 1/4 intensity. $100/4 = 25$ W/m\u00b2.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

**1)** Wavelength of green light ($f = 5.5 \\\\times 10^{14}$ Hz)? (in nm, round to nearest integer)

**2)** After passing through two polarizers (unpolarized, then at 60\u00b0 to first), what fraction of original intensity remains? (give as a fraction like 1/8)

**3)** EM wave speed in glass ($n = 1.5$)? (in m/s, like 2e8)""",
                    'boxes': 3,
                    'answers': ['545', '1/8', '2e8'],
                    'hints': ['$\\\\lambda = c/f$, then convert to nm', '$I_0/2 \\\\times \\\\cos^2(60\u00b0) = I_0/2 \\\\times 1/4$', '$v = c/n$'],
                    'explanation': '1) $3 \\\\times 10^8/5.5 \\\\times 10^{14} \\\\approx 545$ nm. 2) $1/2 \\\\times 1/4 = 1/8$. 3) $3 \\\\times 10^8/1.5 = 2 \\\\times 10^8$ m/s.'
                }
            }
        ]
    },
    {
        'slug': 'thermodynamic-processes',
        'filePrefix': 'physics2-thermo-processes',
        'exportPrefix': 'physics2ThermoProc',
        'parts': [
            {
                'title': 'PV Diagrams',
                'content': """# \U0001f525 Thermodynamic Processes

**Part 1 of 7 \u2014 PV Diagrams**

---

### The Four Thermodynamic Processes

| Process | What\u2019s Constant | PV Diagram | Work |
|---------|---------------------|------------|------|
| **Isobaric** | Pressure ($P$) | Horizontal line | $W = P\\\\Delta V$ |
| **Isochoric** (Isovolumetric) | Volume ($V$) | Vertical line | $W = 0$ |
| **Isothermal** | Temperature ($T$) | Hyperbola ($PV = nRT$) | $W = nRT\\\\ln(V_f/V_i)$ |
| **Adiabatic** | No heat transfer ($Q = 0$) | Steeper than isothermal | $W = -\\\\Delta U$ |

---

### First Law of Thermodynamics

$$\\\\Delta U = Q - W$$

- $\\\\Delta U$: change in internal energy (depends only on $T$ for ideal gas)
- $Q$: heat added to the system
- $W$: work done BY the system

> \U0001f511 **Work = area under the curve** on a PV diagram. Clockwise cycles do net positive work (engines). Counterclockwise cycles require net work input (refrigerators).

---

### Sign Conventions

| Quantity | Positive | Negative |
|----------|----------|----------|
| $Q$ | Heat flows IN | Heat flows OUT |
| $W$ | Gas EXPANDS | Gas COMPRESSES |
| $\\\\Delta U$ | Temperature RISES | Temperature DROPS |""",
                'mcqs': [
                    ('In an isochoric process, work done by the gas is:',
                     ['$P\\\\Delta V$', 'Zero', '$nRT\\\\ln(V_f/V_i)$', 'Negative'],
                     1, 'Isochoric = constant volume. $W = P\\\\Delta V = 0$ since $\\\\Delta V = 0$.'),
                    ('On a PV diagram, a horizontal line represents:',
                     ['Isothermal process', 'Adiabatic process', 'Isobaric process', 'Isochoric process'],
                     2, 'Constant pressure = horizontal line on PV diagram.'),
                    ('In an adiabatic expansion:',
                     ['$Q > 0$', '$Q = 0$ and gas cools', '$Q = 0$ and gas heats up', 'Temperature is constant'],
                     1, 'Adiabatic: $Q = 0$. Expansion does work ($W > 0$), so $\\\\Delta U < 0$ and temperature drops.')
                ],
                'inputs': {
                    'prompt': """**First Law Practice** \U0001f9ee

A gas undergoes an isobaric expansion at $P = 2 \\\\times 10^5$ Pa from $V_i = 0.01$ m\u00b3 to $V_f = 0.03$ m\u00b3.

**1)** Work done by gas? (in joules)

**2)** If $Q = 10000$ J, find $\\\\Delta U$? (in joules)

**3)** Did the temperature increase, decrease, or stay the same?""",
                    'boxes': 3,
                    'answers': ['4000', '6000', 'increase'],
                    'hints': ['$W = P\\\\Delta V = 2 \\\\times 10^5 (0.02)$', '$\\\\Delta U = Q - W = 10000 - 4000$', 'Positive $\\\\Delta U$ means...'],
                    'explanation': '1) $W = 2 \\\\times 10^5 \\\\times 0.02 = 4000$ J. 2) $\\\\Delta U = 10000 - 4000 = 6000$ J. 3) Increase ($\\\\Delta U > 0$).'
                }
            },
            {
                'title': 'Isothermal & Adiabatic',
                'content': """# \U0001f321\ufe0f Isothermal & Adiabatic Processes

**Part 2 of 7 \u2014 Constant Temperature & No Heat Transfer**

---

### Isothermal Process ($T$ = constant)

For an ideal gas at constant temperature:
$$PV = nRT = \\\\text{constant}$$

$$W = nRT\\\\ln\\\\frac{V_f}{V_i}$$

Since $T$ is constant: $\\\\Delta U = 0$, so $Q = W$.

All heat absorbed goes directly to work!

---

### Adiabatic Process ($Q = 0$)

$$PV^\\\\gamma = \\\\text{constant}$$

where $\\\\gamma = C_p/C_v$ (ratio of specific heats)

| Gas Type | $\\\\gamma$ |
|----------|------------|
| Monatomic (He, Ar) | 5/3 \\\\approx 1.67 |
| Diatomic (N\u2082, O\u2082) | 7/5 = 1.4 |

Since $Q = 0$: $\\\\Delta U = -W$
- Adiabatic expansion: gas does work and cools
- Adiabatic compression: work is done on gas and it heats up""",
                'mcqs': [
                    ('In an isothermal expansion of an ideal gas:',
                     ['$\\\\Delta U > 0$', '$\\\\Delta U < 0$', '$\\\\Delta U = 0$', 'Cannot determine'],
                     2, 'Isothermal: constant $T$ \u2192 $\\\\Delta U = 0$ for ideal gas.'),
                    ('An adiabatic curve on a PV diagram is:',
                     ['The same as isothermal', 'Steeper than isothermal', 'Flatter than isothermal', 'A straight line'],
                     1, 'Adiabatic curves drop more steeply because temperature also changes.'),
                    ('In adiabatic compression, temperature:',
                     ['Decreases', 'Stays constant', 'Increases', 'Depends on the gas'],
                     2, '$Q = 0$ and $W < 0$ (work done on gas), so $\\\\Delta U > 0$ \u2192 temperature increases.')
                ],
                'inputs': {
                    'prompt': """**Process Identification** \U0001f9ee

An ideal gas expands slowly while in contact with a heat reservoir at 300 K.

**1)** What type of process? (isothermal/adiabatic/isobaric/isochoric)

**2)** $\\\\Delta U = ?$ (number)

**3)** If $W = 500$ J, how much heat flows in? (in joules)""",
                    'boxes': 3,
                    'answers': ['isothermal', '0', '500'],
                    'hints': ['Heat reservoir maintains constant temperature', '$\\\\Delta U$ for constant T ideal gas?', '$Q = \\\\Delta U + W$'],
                    'explanation': '1) Isothermal \u2014 constant temperature with heat reservoir. 2) $\\\\Delta U = 0$ (constant T). 3) $Q = 0 + 500 = 500$ J.'
                }
            },
            {
                'title': 'Heat Engines & Efficiency',
                'content': """# \u2699\ufe0f Heat Engines & Efficiency

**Part 3 of 7 \u2014 Engines and Refrigerators**

---

### Heat Engine

A heat engine converts thermal energy to mechanical work by operating in a cycle.

$$W_{net} = Q_H - Q_C$$

### Efficiency

$$e = \\\\frac{W_{net}}{Q_H} = 1 - \\\\frac{Q_C}{Q_H}$$

### Carnot Efficiency (Maximum Possible)

$$e_{Carnot} = 1 - \\\\frac{T_C}{T_H}$$

> \u26a0\ufe0f Temperatures MUST be in Kelvin!

---

### Refrigerators & Heat Pumps

A refrigerator runs the engine cycle in reverse, using work to move heat from cold to hot.

**Coefficient of Performance:**
$$COP = \\\\frac{Q_C}{W} = \\\\frac{Q_C}{Q_H - Q_C}$$""",
                'mcqs': [
                    ('A heat engine takes in 1000 J from the hot reservoir and exhausts 600 J. Its efficiency is:',
                     ['60%', '40%', '166%', '37.5%'],
                     1, '$e = 1 - Q_C/Q_H = 1 - 600/1000 = 0.40 = 40\\\\%$.'),
                    ('The maximum efficiency of an engine operating between 600 K and 300 K is:',
                     ['100%', '50%', '25%', '75%'],
                     1, '$e_{Carnot} = 1 - 300/600 = 0.50 = 50\\\\%$.'),
                    ('Why can no real engine achieve Carnot efficiency?',
                     ['It requires reversible processes with no friction or dissipation', 'Carnot was wrong', 'Only applies to steam engines', 'Temperature must be in Celsius'],
                     0, 'Carnot efficiency requires perfectly reversible processes \u2014 impossible in practice.')
                ],
                'inputs': {
                    'prompt': """**Engine Calculations** \U0001f9ee

A Carnot engine operates between $T_H = 500$ K and $T_C = 300$ K, absorbing $Q_H = 2000$ J per cycle.

**1)** Carnot efficiency? (as a decimal)

**2)** Work done per cycle? (in joules)

**3)** Heat rejected per cycle? (in joules)""",
                    'boxes': 3,
                    'answers': ['0.40', '800', '1200'],
                    'hints': ['$e = 1 - T_C/T_H$', '$W = eQ_H$', '$Q_C = Q_H - W$'],
                    'explanation': '1) $1 - 300/500 = 0.40$. 2) $0.40 \\\\times 2000 = 800$ J. 3) $2000 - 800 = 1200$ J.'
                }
            },
            {
                'title': 'Entropy & Second Law',
                'content': """# \U0001f300 Entropy & the Second Law

**Part 4 of 7 \u2014 Disorder and Irreversibility**

---

### Entropy

$$\\\\Delta S = \\\\frac{Q_{rev}}{T}$$

Entropy is a measure of the number of microscopic arrangements (microstates) consistent with a macroscopic state.

### Second Law of Thermodynamics

> For any spontaneous process, the total entropy of the universe increases:
> $$\\\\Delta S_{universe} \\\\geq 0$$

- Reversible process: $\\\\Delta S_{universe} = 0$
- Irreversible process: $\\\\Delta S_{universe} > 0$

---

### Consequences

1. Heat flows spontaneously from hot to cold, never cold to hot
2. No engine can be 100% efficient
3. The entropy of an isolated system never decreases

### Statistical Interpretation

$$S = k_B \\\\ln \\\\Omega$$

where $\\\\Omega$ is the number of microstates and $k_B = 1.38 \\\\times 10^{-23}$ J/K.""",
                'mcqs': [
                    ('The entropy of the universe:',
                     ['Always decreases', 'Always increases or stays the same', 'Can increase or decrease', 'Is always zero'],
                     1, 'Second Law: $\\\\Delta S_{universe} \\\\geq 0$. Total entropy never decreases.'),
                    ('A reversible process has:',
                     ['$\\\\Delta S_{universe} = 0$', '$\\\\Delta S_{universe} > 0$', '$\\\\Delta S_{universe} < 0$', '$\\\\Delta S_{system} = 0$'],
                     0, 'Reversible processes are the limiting case where $\\\\Delta S_{universe} = 0$.'),
                    ('Is it possible for the entropy of a system to decrease?',
                     ['No, never', 'Yes, but the surroundings must increase by at least as much', 'Yes, with no restrictions', 'Only at absolute zero'],
                     1, 'System entropy can decrease, but total (system + surroundings) must not decrease.')
                ],
                'inputs': {
                    'prompt': """**Entropy Calculations** \U0001f9ee

500 J of heat flows from a reservoir at 400 K to one at 300 K.

**1)** Entropy change of hot reservoir? (in J/K, include sign)

**2)** Entropy change of cold reservoir? (in J/K)

**3)** Total entropy change? (in J/K) Is this process spontaneous?""",
                    'boxes': 3,
                    'answers': ['-1.25', '1.67', '0.42'],
                    'hints': ['$\\\\Delta S_H = -Q/T_H = -500/400$', '$\\\\Delta S_C = Q/T_C = 500/300$', 'Add them. Positive = spontaneous.'],
                    'explanation': '1) $-500/400 = -1.25$ J/K. 2) $500/300 \\\\approx 1.67$ J/K. 3) $-1.25 + 1.67 = 0.42$ J/K > 0 \u2192 spontaneous.'
                }
            },
            {
                'title': 'Ideal Gas Law & Kinetic Theory',
                'content': """# \U0001f4a8 Ideal Gas & Kinetic Theory

**Part 5 of 7 \u2014 Connecting Micro to Macro**

---

### Ideal Gas Law

$$PV = nRT = Nk_BT$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $P$ | Pressure | Pa |
| $V$ | Volume | m\u00b3 |
| $n$ | Moles | mol |
| $R$ | Gas constant | 8.314 J/(mol\u00b7K) |
| $N$ | Number of molecules | - |
| $k_B$ | Boltzmann constant | $1.38 \\\\times 10^{-23}$ J/K |

### Kinetic Theory

Average kinetic energy per molecule:
$$\\\\overline{KE} = \\\\frac{3}{2}k_BT$$

RMS speed:
$$v_{rms} = \\\\sqrt{\\\\frac{3k_BT}{m}} = \\\\sqrt{\\\\frac{3RT}{M}}$$

### Internal Energy of Ideal Gas

| Gas Type | Degrees of Freedom | $U$ |
|----------|-------------------|-----|
| Monatomic | 3 | $\\\\frac{3}{2}nRT$ |
| Diatomic | 5 | $\\\\frac{5}{2}nRT$ |""",
                'mcqs': [
                    ('Doubling the temperature of an ideal gas (at constant V) will:',
                     ['Double the pressure', 'Halve the pressure', 'Quadruple the pressure', 'Not change the pressure'],
                     0, '$P = nRT/V$. Double $T$ at constant $V$ \u2192 double $P$.'),
                    ('Average kinetic energy of a gas molecule depends on:',
                     ['Pressure only', 'Volume only', 'Temperature only', 'Mass of the molecule'],
                     2, '$\\\\overline{KE} = \\\\frac{3}{2}k_BT$ depends only on temperature.'),
                    ('Heavier gas molecules at the same temperature have:',
                     ['Higher rms speed', 'Lower rms speed', 'Same rms speed', 'Lower temperature'],
                     1, '$v_{rms} = \\\\sqrt{3k_BT/m}$. Larger $m$ \u2192 smaller $v_{rms}$.')
                ],
                'inputs': {
                    'prompt': """**Kinetic Theory** \U0001f9ee

Helium gas ($M = 4$ g/mol) at $T = 300$ K.

**1)** Average KE per molecule? (in J, scientific notation like 6.21e-21)

**2)** $v_{rms}$ of helium? (in m/s, round to nearest integer; $R = 8.314$)

**3)** If temperature doubles, by what factor does $v_{rms}$ change? (round to 2 decimals)""",
                    'boxes': 3,
                    'answers': ['6.21e-21', '1369', '1.41'],
                    'hints': ['$\\\\frac{3}{2}k_BT = \\\\frac{3}{2}(1.38 \\\\times 10^{-23})(300)$', '$\\\\sqrt{3(8.314)(300)/0.004}$', '$v_{rms} \\\\propto \\\\sqrt{T}$'],
                    'explanation': '1) $\\\\frac{3}{2}(1.38 \\\\times 10^{-23})(300) = 6.21 \\\\times 10^{-21}$ J. 2) $\\\\sqrt{3(8.314)(300)/0.004} \\\\approx 1369$ m/s. 3) $\\\\sqrt{2} \\\\approx 1.41$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### Thermodynamics Problem Strategy

1. **Identify** the process type (isobaric, isochoric, isothermal, adiabatic)
2. **Apply** the First Law: $\\\\Delta U = Q - W$
3. **Calculate** work from PV diagrams (area under curve)
4. **Use** Carnot efficiency for engine problems
5. **Check** signs: expanding gas does positive work""",
                'mcqs': [
                    ('A gas expands adiabatically. $Q = ?$, $\\\\Delta U = ?$',
                     ['$Q > 0$, $\\\\Delta U > 0$', '$Q = 0$, $\\\\Delta U < 0$', '$Q = 0$, $\\\\Delta U > 0$', '$Q < 0$, $\\\\Delta U = 0$'],
                     1, 'Adiabatic: $Q = 0$. Expansion: $W > 0$, so $\\\\Delta U = -W < 0$.'),
                    ('A Carnot refrigerator uses 200 J of work to remove 600 J from cold reservoir. $Q_H = ?$',
                     ['400 J', '600 J', '800 J', '1200 J'],
                     2, '$Q_H = Q_C + W = 600 + 200 = 800$ J.'),
                    ('In a complete thermodynamic cycle, $\\\\Delta U = ?$',
                     ['$Q_H$', '$Q_C$', '$W_{net}$', '0'],
                     3, 'After a complete cycle, the system returns to its initial state, so $\\\\Delta U = 0$.')
                ],
                'inputs': {
                    'prompt': """**Cycle Analysis** \U0001f9ee

A heat engine cycle: $Q_H = 5000$ J, $e = 0.30$.

**1)** Work output per cycle?

**2)** Heat rejected per cycle?

**3)** If this engine runs at 10 cycles/second, what is its power output? (in watts)""",
                    'boxes': 3,
                    'answers': ['1500', '3500', '15000'],
                    'hints': ['$W = eQ_H$', '$Q_C = Q_H - W$', 'Power = Work \u00d7 frequency'],
                    'explanation': '1) $0.30 \\\\times 5000 = 1500$ J. 2) $5000 - 1500 = 3500$ J. 3) $1500 \\\\times 10 = 15000$ W = 15 kW.'
                }
            },
            {
                'title': 'Synthesis & AP Review',
                'content': """# \U0001f4dd Synthesis & AP Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Key Equations

| Concept | Equation |
|---------|----------|
| First Law | $\\\\Delta U = Q - W$ |
| Isobaric Work | $W = P\\\\Delta V$ |
| Isothermal Work | $W = nRT\\\\ln(V_f/V_i)$ |
| Carnot Efficiency | $e = 1 - T_C/T_H$ |
| Entropy | $\\\\Delta S = Q_{rev}/T$ |
| KE per molecule | $\\\\overline{KE} = \\\\frac{3}{2}k_BT$ |

### AP Exam Tips
- Always identify the process type first
- PV diagram area = work (positive if clockwise for engines)
- For Carnot: temperatures MUST be in Kelvin
- $\\\\Delta U = 0$ for complete cycles and isothermal processes""",
                'mcqs': [
                    ('Which process has the steepest curve on a PV diagram?',
                     ['Isothermal', 'Adiabatic', 'Isobaric', 'They are the same'],
                     1, 'Adiabatic curves are steeper because $PV^\\\\gamma$ falls faster than $PV$ (isothermal).'),
                    ('An ideal gas at constant pressure absorbs 1000 J. It does 400 J of work. $\\\\Delta U = ?$',
                     ['1400 J', '600 J', '400 J', '1000 J'],
                     1, '$\\\\Delta U = Q - W = 1000 - 400 = 600$ J.'),
                    ('The entropy of a system can decrease if:',
                     ['The system is isolated', 'Heat flows out of the system', 'The universe\u2019s entropy decreases', 'It never decreases'],
                     1, 'System entropy can decrease (e.g., cooling), but surroundings entropy must increase more.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

2 moles of monatomic ideal gas at 300 K.

**1)** Internal energy? (in joules, $R = 8.314$)

**2)** After isochoric heating to 600 K, $\\\\Delta U = ?$ (in joules)

**3)** Heat added during this isochoric process? (in joules)""",
                    'boxes': 3,
                    'answers': ['7483', '7483', '7483'],
                    'hints': ['$U = \\\\frac{3}{2}nRT$', '$\\\\Delta U = \\\\frac{3}{2}nR\\\\Delta T$', 'Isochoric: $W = 0$, so $Q = \\\\Delta U$'],
                    'explanation': '1) $\\\\frac{3}{2}(2)(8.314)(300) = 7482.6 \\\\approx 7483$ J. 2) $\\\\frac{3}{2}(2)(8.314)(300) = 7483$ J. 3) Isochoric: $W = 0$, $Q = \\\\Delta U = 7483$ J.'
                }
            }
        ]
    }
]

# Skeleton topics (detailed Part 1, formulaic remaining parts)
MORE_TOPICS = [
    {
        'slug': 'resistivity-circuits-advanced',
        'filePrefix': 'physics2-resistivity-circuits',
        'exportPrefix': 'physics2ResCirc',
        'parts': [
            'Resistivity & Temperature Dependence',
            'Power in Circuits',
            'RC Circuits',
            'Ammeter & Voltmeter Design',
            'Non-Ohmic Devices',
            'Problem-Solving Workshop',
            'Synthesis & AP Review'
        ]
    },
    {
        'slug': 'magnetic-induction',
        'filePrefix': 'physics2-magnetic-induction',
        'exportPrefix': 'physics2MagInduct',
        'parts': [
            'Magnetic Flux',
            'Faraday\u2019s Law',
            'Lenz\u2019s Law',
            'Motional EMF',
            'Inductors & RL Circuits',
            'Problem-Solving Workshop',
            'Synthesis & AP Review'
        ]
    },
    {
        'slug': 'geometric-optics-mirrors',
        'filePrefix': 'physics2-geometric-optics',
        'exportPrefix': 'physics2GeomOptics',
        'parts': [
            'Reflection & Plane Mirrors',
            'Concave Mirrors',
            'Convex Mirrors',
            'Mirror Equation & Magnification',
            'Ray Diagrams',
            'Problem-Solving Workshop',
            'Synthesis & AP Review'
        ]
    },
    {
        'slug': 'thin-film-interference',
        'filePrefix': 'physics2-thin-film',
        'exportPrefix': 'physics2ThinFilm',
        'parts': [
            'Path Length Difference',
            'Phase Shifts at Boundaries',
            'Constructive & Destructive Conditions',
            'Thin Film Applications',
            'Anti-Reflective Coatings',
            'Problem-Solving Workshop',
            'Synthesis & AP Review'
        ]
    },
    {
        'slug': 'nuclear-reactions',
        'filePrefix': 'physics2-nuclear-reactions',
        'exportPrefix': 'physics2Nuclear',
        'parts': [
            'Nuclear Structure & Binding Energy',
            'Radioactive Decay Types',
            'Half-Life & Decay Rate',
            'Nuclear Fission',
            'Nuclear Fusion',
            'Problem-Solving Workshop',
            'Synthesis & AP Review'
        ]
    },
    {
        'slug': 'quantum-phenomena',
        'filePrefix': 'physics2-quantum',
        'exportPrefix': 'physics2Quantum',
        'parts': [
            'Photoelectric Effect',
            'Photon Energy & Momentum',
            'de Broglie Wavelength',
            'Energy Levels & Spectra',
            'Wave-Particle Duality',
            'Problem-Solving Workshop',
            'Synthesis & AP Review'
        ]
    }
]

CONTENT_MAP = {
    'resistivity-circuits-advanced': """# \u26a1 Resistivity & Advanced Circuits

**Part 1 of 7 \u2014 Resistivity & Temperature Dependence**

---

### Resistivity

$$R = \\\\frac{\\\\rho L}{A}$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $R$ | Resistance | \u03a9 |
| $\\\\rho$ | Resistivity | \u03a9\u00b7m |
| $L$ | Length | m |
| $A$ | Cross-sectional area | m\u00b2 |

### Temperature Dependence

$$\\\\rho(T) = \\\\rho_0[1 + \\\\alpha(T - T_0)]$$

For metals, resistivity **increases** with temperature ($\\\\alpha > 0$).
For semiconductors, resistivity **decreases** with temperature.

---

### Typical Resistivities

| Material | $\\\\rho$ (\u03a9\u00b7m) | Type |
|----------|---------------------|------|
| Copper | $1.7 \\\\times 10^{-8}$ | Conductor |
| Silicon | $6.4 \\\\times 10^{2}$ | Semiconductor |
| Glass | $10^{10} - 10^{14}$ | Insulator |""",

    'magnetic-induction': """# \U0001f9f2 Electromagnetic Induction

**Part 1 of 7 \u2014 Magnetic Flux**

---

### Magnetic Flux

$$\\\\Phi_B = BA\\\\cos\\\\theta$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $\\\\Phi_B$ | Magnetic flux | Wb (webers) |
| $B$ | Magnetic field | T |
| $A$ | Area | m\u00b2 |
| $\\\\theta$ | Angle between $\\\\vec{B}$ and area normal | rad |

---

### Changing Flux Induces EMF

Faraday\u2019s Law:
$$\\\\mathcal{E} = -\\\\frac{d\\\\Phi_B}{dt} = -N\\\\frac{\\\\Delta\\\\Phi_B}{\\\\Delta t}$$

Ways to change flux:
1. Change $B$ (turn magnet on/off)
2. Change $A$ (expand/contract loop)
3. Change $\\\\theta$ (rotate loop)
4. Move into/out of field region

> \U0001f511 The negative sign is **Lenz\u2019s Law**: the induced current opposes the change in flux.""",

    'geometric-optics-mirrors': """# \U0001f52d Geometric Optics \u2014 Mirrors

**Part 1 of 7 \u2014 Reflection & Plane Mirrors**

---

### Law of Reflection

$$\\\\theta_i = \\\\theta_r$$

Both angles measured from the **normal** to the surface.

---

### Plane Mirrors

| Property | Description |
|----------|-------------|
| Image distance | Equal to object distance ($d_i = -d_o$) |
| Image type | Virtual, upright, same size |
| Magnification | $m = 1$ |
| Left-right reversal | Yes |

### Mirror Equation (for curved mirrors)

$$\\\\frac{1}{d_o} + \\\\frac{1}{d_i} = \\\\frac{1}{f} = \\\\frac{2}{R}$$

### Magnification

$$m = -\\\\frac{d_i}{d_o} = \\\\frac{h_i}{h_o}$$

| $m$ | Image |
|-----|-------|
| $m > 0$ | Upright (virtual) |
| $m < 0$ | Inverted (real) |
| $|m| > 1$ | Enlarged |
| $|m| < 1$ | Reduced |""",

    'thin-film-interference': """# \U0001f308 Thin Film Interference

**Part 1 of 7 \u2014 Path Length Difference**

---

### How Thin Film Interference Works

When light hits a thin film, reflections occur at both the **top** and **bottom** surfaces. These two reflected waves interfere.

### Path Length Difference

The wave reflecting from the bottom surface travels an extra distance:

$$\\\\Delta = 2nt$$

where $n$ = index of refraction of the film and $t$ = thickness.

---

### Phase Shifts

A phase shift of $\\\\lambda/2$ (180\u00b0) occurs when light reflects from a surface of **higher** refractive index.

| Boundary | Phase Shift? |
|----------|-------------|
| Low $n$ \u2192 High $n$ | Yes (180\u00b0) |
| High $n$ \u2192 Low $n$ | No |

### Conditions for Constructive/Destructive

Depend on whether there are 0, 1, or 2 phase shifts at the surfaces.""",

    'nuclear-reactions': """# \u2622\ufe0f Nuclear Physics

**Part 1 of 7 \u2014 Nuclear Structure & Binding Energy**

---

### Nuclear Notation

$$^A_Z X$$

| Symbol | Meaning |
|--------|---------|
| $A$ | Mass number (protons + neutrons) |
| $Z$ | Atomic number (protons) |
| $N = A - Z$ | Number of neutrons |

### Binding Energy

The energy required to completely separate all nucleons:

$$E_b = (\\\\Delta m)c^2$$

$$\\\\Delta m = [Zm_p + Nm_n] - m_{\\\\text{nucleus}}$$

### Binding Energy per Nucleon

The **binding energy per nucleon** ($E_b/A$) peaks near iron-56:
- Elements lighter than Fe-56: **fusion** releases energy
- Elements heavier than Fe-56: **fission** releases energy

> \U0001f511 This curve explains why both fusion (in stars) and fission (in reactors) release energy.""",

    'quantum-phenomena': """# \u2728 Quantum Phenomena

**Part 1 of 7 \u2014 Photoelectric Effect**

---

### The Photoelectric Effect

When light shines on a metal surface, electrons may be ejected.

### Key Equation

$$E_{photon} = hf = \\\\phi + KE_{max}$$

$$KE_{max} = hf - \\\\phi$$

| Symbol | Meaning |
|--------|---------|
| $h$ | Planck\u2019s constant = $6.63 \\\\times 10^{-34}$ J\u00b7s |
| $f$ | Frequency of light |
| $\\\\phi$ | Work function (minimum energy to eject electron) |
| $KE_{max}$ | Maximum kinetic energy of ejected electron |

---

### Threshold Frequency

$$f_0 = \\\\frac{\\\\phi}{h}$$

Below this frequency, **no electrons are ejected** regardless of intensity.

### Key Observations
- Increasing intensity \u2192 more electrons (higher current), NOT more KE
- Increasing frequency \u2192 higher $KE_{max}$
- Below threshold: no emission at any intensity

> \U0001f511 The photoelectric effect proved light has particle properties (photons)."""
}


def esc(s):
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


def generate_rich_lesson(topic, part_idx, part):
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-', '')

    sections = []
    sections.append(f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(part['content'])}`
    }}""")

    if 'mcqs' in part:
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
{format_mcqs(part['mcqs'])}
        ]
      }}
    }}""")

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


def generate_skeleton_lesson(topic, part_idx):
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    title = topic['parts'][part_idx]
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-', '')

    if pn == 1 and slug in CONTENT_MAP:
        text_content = CONTENT_MAP[slug]
    else:
        text_content = f"""# {title}

**Part {pn} of 7 \u2014 {title}**

---

This section covers key concepts and techniques related to {title.lower()} in AP Physics 2.

Understanding these ideas is essential for both the multiple-choice and free-response sections of the AP exam."""

    sections = f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(text_content)}`
    }},
    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
          {{
            question: 'Which best describes {esc(title.lower())}?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: '{esc(title)} is a fundamental concept tested on the AP Physics 2 exam.'
          }}
        ]
      }}
    }}"""

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{sections}
  ]
}};
"""


def main():
    os.makedirs(BASE, exist_ok=True)
    count = 0

    for topic in TOPICS:
        for i, part in enumerate(topic['parts']):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_rich_lesson(topic, i, part)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")

    for topic in MORE_TOPICS:
        for i in range(7):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_skeleton_lesson(topic, i)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")

    print(f"\nTotal: {count} files created")


if __name__ == '__main__':
    main()
