import type { SlideLoop } from './index'

/**
 * Circuits Part 1: Current & Resistance (mcat-physics-electricity-dc-circuits-mcat)
 * looping slide animations (owner, Nov 2026: "incorporate the clips /
 * animations into the slides … to improve the live section of the class").
 *
 * Silent Manim loops, 1600 × 736 at 30 fps, in public/slide-media/circuits-1/.
 * Sources: ~/StudyMondo-Video/_manim/slide_loops/circuits1_part{1,2}_loops.py
 * (the picture-without-words versions of the YouTube clips). Where a section
 * already had a drawn figure the loop plays in its place; the rest get a
 * full-width animation slide in front of the section (mode 'lead').
 */
export const circuits1Loops: SlideLoop[] = [
  // ── Lesson part 1 ──
  {
    at: 'Charge and Current',
    name: 'circ1-counting-gate',
    alt: 'Positive one-coulomb charges stream past a counting gate on a wire while a counter reaches 8 C and a stopwatch reaches 4.0 s, giving I = ΔQ/Δt = 2 A.',
    caption: 'Count the charge that passes one point and time it: 8 C in 4 s is $I = \\Delta Q/\\Delta t = 2$ A.',
  },
  {
    at: 'Conventional Current vs. Electron Drift',
    name: 'circ1-current-vs-drift',
    alt: 'A battery and lamp loop: purple current arrows run clockwise out of the positive terminal while yellow electrons circulate the opposite way; a magnified wire shows electrons drifting left as current points right.',
  },
  {
    at: 'Metallic vs. Electrolytic Conduction',
    name: 'circ1-electrolyte',
    mode: 'lead',
    blocks: [],
    alt: 'Left, a metal: electrons drift left past fixed ion cores while current points right. Right, saline between electrodes: Na+ drifts toward the negative electrode and Cl- toward the positive, and their contributions join into one current arrow.',
  },
  {
    // Second animation for the section, behind its table (the Heating row).
    at: 'Metallic vs. Electrolytic Conduction',
    name: 'circ1-heating',
    mode: 'after',
    add: true,
    alt: 'A thermometer rises and falls between two panels: in a metal the vibrating lattice scatters drifting electrons more as it heats, so resistivity rises and conductivity falls; in saline the ions move faster as it warms, so conductivity rises.',
    caption: 'Heat both: the hotter metal lattice scatters electrons, so $\\sigma$ FALLS; warmer ions move faster through the solution, so $\\sigma$ RISES.',
  },
  {
    at: 'Voltage — Energy per Charge',
    name: 'circ1-energy-staircase',
    alt: 'A positive charge laps a 9 V loop with two resistors while a potential-versus-position graph traces up 9 V through the battery, flat along wires, down 4 V across R1 and 5 V across R2.',
  },
  {
    at: 'Ground and Reference Points',
    name: 'circ1-ground-shift',
    alt: 'A loop with colour-coded wires at 9, 5 and 0 V; the ground symbol moves to the middle wire and the labels become 4, 0 and −5 V while every voltage difference (9, 4 and 5 V) stays the same.',
    caption: 'Move ground and every potential shifts by the same amount; every voltage DIFFERENCE stays the same.',
  },
  {
    at: 'Open vs. Closed Circuits',
    name: 'circ1-open-switch',
    alt: 'A 9 V series loop with two bulbs: when the switch opens, the charges stop, both bulbs go dark, and voltmeters read 9 V across the open gap and 0 V across a bulb; then the switch closes again.',
    caption: 'Open the switch: current stops everywhere, both bulbs go dark, and the full 9 V appears across the gap (0 V across each bulb).',
  },
  // ── Lesson part 2 ──
  {
    at: 'Resistance and Ohm',
    name: 'circ1-ohms-law',
    alt: 'A 4 Ω resistor with an ammeter and a voltmeter: the battery ramps from 2 V to 12 V and back while the current follows from 0.5 A to 3 A and a point slides along a straight I–V line.',
    caption: 'Hold $R$ fixed at 4 Ω: as $V$ ramps from 2 to 12 V the current follows, $I = V/R$, and the I–V graph stays a straight line.',
  },
  {
    at: 'Resistivity and Wire Geometry',
    name: 'circ1-wire-stretch',
    alt: 'A wire under R = ρL/A: doubling its length doubles R, doubling its diameter makes the area four times larger and R a quarter, and stretching it to twice the length at constant volume makes R four times larger.',
    caption: '$R = \\rho L/A$: twice the length doubles $R$, twice the diameter quarters it, and stretching to 2× at constant volume makes $R$ four times larger.',
  },
  {
    // Behind the section's "Temperature dependence" paragraph.
    at: 'Resistivity and Wire Geometry',
    name: 'circ1-heating',
    mode: 'after',
    add: true,
    alt: 'A thermometer rises and falls: in a metal the vibrating lattice scatters drifting electrons more as it heats, so resistivity rises; in saline the ions move faster, so conductivity rises instead.',
    caption: 'Metals: resistivity RISES with temperature, because the hotter lattice scatters electrons more often. Electrolytes go the other way.',
  },
  {
    at: 'Ohmic vs. Non-Ohmic',
    name: 'circ1-iv-curves',
    alt: 'I–V axes with a straight ohmic line; a dot climbs a filament curve that bends over as the bulb glows brighter and its resistance V/I rises from 3 Ω to about 8.4 Ω.',
  },
  {
    at: 'Series vs. Parallel Resistors',
    name: 'circ1-series-parallel',
    mode: 'lead',
    blocks: [],
    alt: 'Left, R and 2R in series with one slow flow everywhere; right, R and 2R in parallel between pink and teal nodes, the R branch flowing twice as fast as the 2R branch and the two merging into a faster flow on the shared wire.',
  },
  {
    at: 'Short Circuits and Open Branches',
    name: 'circ1-short-circuit',
    alt: 'Two bulbs in series glow equally; a plain wire drops across bulb 1, which goes dark as the current takes the wire, and bulb 2 brightens; then the wire lifts away.',
    caption: 'A wire across bulb 1 holds both its ends at one potential: no current goes through it, so it goes dark and bulb 2 carries more current.',
  },
]
