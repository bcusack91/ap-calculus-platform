/**
 * Topic-page description + summary (Topic.textContent) for every topic of the
 * split MCAT families (src/lib/mcat-topic-split.ts). prisma/split-mcat-topics.ts
 * writes these when it creates a row and keeps existing rows in step.
 */
export const SUCCESSOR_META: Record<string, { description: string; textContent: string }> = {
  'mcat-physics-electricity-dc-circuits-mcat': {
    description: "Current, voltage, conduction, Ohm's law, resistivity, and series and parallel resistors",
    textContent: `# Circuits Part 1: Current & Resistance

## Current and Voltage
Current is charge flow per time, $I = \\Delta Q/\\Delta t$; conventional current points the way positive charge moves. Metals conduct with electrons, body fluids with ions moving both ways. Voltage is energy per charge: $\\Delta U = q\\Delta V$.

## Resistance
$$V = IR \\qquad R = \\rho\\frac{L}{A}$$
Series resistors share one current and add; parallel resistors share one voltage and combine reciprocally, so the equivalent is below the smallest branch.

## Key Takeaways
- Current is a rate; count carriers by the charge each one carries.
- Longer or thinner wires resist more.
- Series: same current. Parallel: same voltage.`,
  },
  'mcat-physics-electricity-kirchhoff-power-mcat': {
    description: "Kirchhoff's rules, network reduction, dividers, circuit changes, power, bulbs, and electrical safety",
    textContent: `# Circuits Part 2: Kirchhoff's Rules & Power

## Kirchhoff's Rules
The junction rule conserves charge (current in = current out); the loop rule conserves energy (gains = drops around any loop). Collapse a network from the inside out, then walk back out for branch values. A series divider shares voltage in proportion to resistance; a parallel divider sends more current down the smaller resistance.

## Power
$$P = IV = I^2R = \\frac{V^2}{R}$$
In series the larger resistor dissipates more; in parallel the smaller one does. Brightness is power. Current, not voltage, does the harm in a shock.

## Key Takeaways
- Charge and energy are conserved at every junction and around every loop.
- Pick the power form that holds the known quantity constant.
- Adding a parallel branch lowers total resistance and raises total current.`,
  },
  'mcat-physics-electricity-emf-capacitors-mcat': {
    description: 'EMF and internal resistance, meters, capacitance, dielectrics, and stored energy',
    textContent: `# Circuits Part 3: EMF & Capacitance

## Real Batteries and Meters
A real battery is an ideal EMF in series with an internal resistance: $V_{terminal} = \\varepsilon - Ir$ while it supplies current. Ammeters go in series with almost no resistance; voltmeters go in parallel with very high resistance.

## Capacitors
$$C = \\frac{Q}{V} \\qquad C = \\kappa\\varepsilon_0\\frac{A}{d} \\qquad U = \\tfrac{1}{2}CV^2$$
A dielectric raises capacitance. With the battery connected, voltage is fixed; disconnected, charge is fixed.

## Key Takeaways
- Terminal voltage is below the EMF whenever a battery supplies current.
- Decide whether Q or V is held constant before choosing an energy formula.`,
  },
  'mcat-physics-electricity-rc-circuits-mcat': {
    description: 'Capacitor networks, RC circuits, the membrane as an RC circuit, myelin, and defibrillators',
    textContent: `# Circuits Part 4: Capacitor Networks & Bioelectricity

## Capacitor Networks and RC Circuits
Capacitors combine opposite to resistors: directly in parallel, reciprocally in series. An uncharged capacitor acts like a wire the instant a switch closes and like a break once charged. The time constant $\\tau = RC$ sets the pace: about 63% after one $\\tau$, essentially done after about $5\\tau$.

## Bioelectricity
The cell membrane is a capacitor (the bilayer) in parallel with resistors (the ion channels). Myelin lowers membrane capacitance and raises membrane resistance, speeding conduction. A defibrillator charges a capacitor slowly and releases its energy in a brief pulse.

## Key Takeaways
- Capacitor combination rules are the reverse of resistor rules.
- Steady state: no current through a capacitor branch.`,
  },
  'mcat-physics-mechanics-fluids-mcat': {
    description: "Density, hydrostatic pressure, Pascal's principle, buoyancy, and surface tension",
    textContent: `# Fluids at Rest

## Pressure
Pressure in a static fluid grows with depth, not container shape:
$$P = P_0 + \\rho gh$$
Gauge pressure leaves out the atmosphere; absolute pressure includes it. Pascal's principle transmits a pressure change undiminished, so a hydraulic lift multiplies force by the area ratio.

## Buoyancy and Surface Tension
The buoyant force equals the weight of the fluid displaced, $F_b = \\rho_{fluid}V_{sub}g$. An object floats when its average density is below the fluid's, and the submerged fraction equals the density ratio. Cohesion at a surface gives surface tension; adhesion to the walls drives capillary rise.

## Key Takeaways
- Depth, not shape, sets static pressure.
- Buoyancy depends on the fluid displaced, not on the object's weight.`,
  },
  'mcat-physics-mechanics-fluid-dynamics-mcat': {
    description: 'Continuity, Bernoulli, viscosity, Poiseuille flow, and blood flow',
    textContent: `# Fluids in Motion

## Ideal Flow
Continuity, $A_1v_1 = A_2v_2$, makes a fluid speed up where a pipe narrows. Bernoulli's equation,
$$P + \\tfrac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$$
is energy conservation for ideal flow: faster means lower pressure.

## Real Flow and the Circulation
Viscous flow obeys Poiseuille's law: flow scales with $r^4$, so small changes in vessel radius control blood flow. Blood is slowest in the capillaries, where the total cross-sectional area is largest, and the biggest pressure drop is across the arterioles.

## Key Takeaways
- Narrower means faster means lower pressure (ideal flow).
- Halving a vessel's radius cuts flow 16-fold (viscous flow).`,
  },
  'mcat-physics-waves-periodic-motion-mcat': {
    description: 'Period and frequency, simple harmonic motion, and wave speed',
    textContent: `# Periodic Motion & Waves

## Periodic Motion
Period and frequency are reciprocals, $f = 1/T$. A mass on a spring has $T = 2\\pi\\sqrt{m/k}$ and a pendulum $T = 2\\pi\\sqrt{L/g}$; neither depends on the amplitude.

## Waves
Every wave obeys $v = f\\lambda$. The medium sets the speed, the source sets the frequency, and the frequency stays the same when a wave crosses into a new medium. Sound is longitudinal and travels fastest in solids.

## Key Takeaways
- Medium sets speed; source sets frequency.
- Amplitude does not change a spring's or a pendulum's period.`,
  },
  'mcat-physics-waves-interference-mcat': {
    description: 'Superposition, beats, standing waves in strings and pipes, and resonance',
    textContent: `# Interference & Standing Waves

## Superposition
Overlapping waves add. A path difference of a whole number of wavelengths interferes constructively; an odd number of half-wavelengths, destructively. Two close frequencies beat at $|f_1 - f_2|$.

## Standing Waves
A string fixed at both ends, or a pipe open at both ends, supports every harmonic, $f_n = nv/2L$; a pipe closed at one end supports only odd harmonics, $f_n = nv/4L$. Driving a system at its natural frequency makes it resonate.

## Key Takeaways
- Path difference, in wavelengths, decides the interference.
- Closed-end pipes: odd harmonics only.`,
  },
  'mcat-physics-waves-sound-mcat': {
    description: 'Sound intensity and decibels, the Doppler effect, ultrasound, and shock waves',
    textContent: `# Sound, Doppler & Ultrasound

## Sound Intensity
Intensity falls with the square of distance from a point source. Sound level is logarithmic:
$$\\beta = 10\\log\\frac{I}{I_0}$$
so each 10 dB step is a tenfold change in intensity.

## Doppler and Ultrasound
Approach raises the observed frequency and recession lowers it. Ultrasound finds depth from echo timing, $d = vt/2$, and Doppler ultrasound measures blood speed from the frequency shift. A source faster than sound piles its wavefronts into a shock wave.

## Key Takeaways
- +10 dB means 10 times the intensity.
- Relative approach raises pitch.`,
  },
}
