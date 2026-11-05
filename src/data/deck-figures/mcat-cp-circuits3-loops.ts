import type { SlideLoop } from './index'

/**
 * Circuits Part 3: EMF & Capacitance (mcat-physics-electricity-emf-capacitors-mcat)
 * looping slide animations (Nov 2026). Files: public/slide-media/circuits-3/.
 * Sources: ~/StudyMondo-Video/_manim/slide_loops/circuits3_loops.py.
 */
export const circuits3Loops: SlideLoop[] = [
  {
    at: 'What EMF Means',
    name: 'circ3-emf-pump',
    alt: 'Positive charges circulate as the battery pumps each one from the low-potential wire up to the high-potential wire; a counter shows 9 J of work for every coulomb, so ε = W/q = 9.0 V.',
    caption: 'EMF is the work the source does per coulomb it pumps "uphill": $\\varepsilon = W/q$, so 9 J per coulomb is 9.0 V.',
  },
  {
    at: 'EMF vs. Terminal Voltage',
    name: 'circ3-terminal-voltage',
    alt: 'A battery with EMF 9.0 V and internal resistance r: with the switch open the voltmeter reads 9.0 V; as the load current grows the terminal voltage falls by Ir, reaching 0 V at the short-circuit current of 18 A, while a dot rides the falling V-versus-I line.',
  },
  {
    at: 'Batteries in Series and Parallel',
    name: 'circ3-cells',
    alt: 'Four 1.5 V cells in series raise a charge 6.0 V; flipping one makes its step −1.5 V and the total 3.0 V. Two 1.5 V cells in parallel each supply half the current, and the load still sees 1.5 V.',
  },
  {
    at: 'Meters',
    name: 'circ3-meters',
    alt: 'Wired correctly, an ammeter sits in series and a voltmeter across the bulb. Wired wrong, an ammeter across the bulb shorts it so the bulb goes dark, and a voltmeter in series stops the current and reads about the full 9.0 V.',
  },
  {
    at: 'Capacitance',
    name: 'circ3-capacitance',
    alt: 'A 2.0 µF capacitor on a source stepped from 0 to 50 to 100 V and back: electrons move from one plate to the other, the plate charges build, and the point on a Q-versus-V line climbs to 200 µC while C stays 2.0 µF.',
    caption: 'Raise $V$ and $Q$ rises in proportion; the ratio $C = Q/V$ belongs to the capacitor and does not change.',
  },
  {
    at: 'The Parallel-Plate Capacitor',
    name: 'circ3-parallel-plate',
    alt: 'Parallel plates with a uniform field: doubling the gap halves C, doubling the area doubles C, and sliding in a κ = 3 slab triples C, with the matching factor of C = κε₀A/d highlighted each time.',
  },
  {
    at: 'Dielectrics',
    name: 'circ3-dielectric',
    alt: 'A slab slides between charged plates and its molecules turn so their negative ends face the positive plate; induced surface charge cancels part of the field, so E falls to E₀/κ, V falls to V₀/κ and C rises to κC₀ while Q stays the same.',
  },
  {
    at: 'Stored Energy',
    name: 'circ3-stored-energy',
    alt: 'A 2.0 µF capacitor at 100 V gets a κ = 4 slab: still connected to the battery, C, Q and U all rise four times; disconnected, Q stays fixed while V, E and U fall to a quarter, shown with each V-Q triangle.',
  },
]
