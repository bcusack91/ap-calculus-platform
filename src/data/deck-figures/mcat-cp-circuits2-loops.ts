import type { SlideLoop } from './index'

/**
 * Circuits Part 2: Kirchhoff's Rules & Power (mcat-physics-electricity-kirchhoff-power-mcat)
 * looping slide animations (Nov 2026). Files: public/slide-media/circuits-2/.
 * Sources: ~/StudyMondo-Video/_manim/slide_loops/circuits2_loops.py.
 */
export const circuits2Loops: SlideLoop[] = [
  {
    at: 'Kirchhoff',
    name: 'circ2-junction',
    alt: 'Wires carrying 1 A and 2 A merge at a junction into one wire carrying 3 A, whose charges move three times as fast: the current in equals the current out.',
  },
  {
    at: "Kirchhoff's Rules",
    name: 'circ2-loop-rule',
    mode: 'after',
    add: true,
    alt: 'A positive charge laps a 30 V loop through 3, 5 and 7 Ω resistors at 2 A while a potential trace rises 30 V in the battery and drops 6, 10 and 14 V, summing to zero.',
    caption: 'The loop rule: around any closed loop the rises equal the drops, $+30 - 6 - 10 - 14 = 0$.',
  },
  {
    at: 'Voltage Dividers and Current Dividers',
    name: 'circ2-dividers',
    alt: 'The same 1 Ω and 3 Ω resistors in series split the voltage 1 : 3, and in parallel split the current 3 : 1, with the faster flow through the smaller resistor.',
  },
  {
    at: 'What Changes When the Circuit Changes',
    name: 'circ2-circuit-change',
    alt: 'A 12 V circuit with 2 Ω in series with 6 Ω parallel to 3 Ω: the 6 Ω branch opens, its flow stops, and the readouts change in order — R_eq 4 to 5 Ω, I 3 to 2.4 A, V across 2 Ω 6 to 4.8 V, V across 3 Ω 6 to 7.2 V.',
    caption: 'Open one branch: $R_{eq}$ rises, the total current falls, the series drop falls and the remaining branch gets MORE voltage.',
  },
  {
    at: 'Electrical Power',
    name: 'circ2-power-swap',
    alt: 'Bulbs R and 2R on the same supply: in series they share one current and the 2R bulb glows brighter; in parallel the R branch carries twice the current and the R bulb glows brighter.',
  },
  {
    at: 'Electrical Power',
    name: 'circ2-power-ramp',
    add: true,
    alt: 'One bulb on an adjustable source: as the voltage doubles the current doubles, the glow grows four times, and a dot rides the P-versus-V parabola.',
    caption: 'For one resistor, double $V$ and you double $I$, so the power goes up four times: $P = IV = I^2R = V^2/R$.',
  },
  {
    at: 'Energy, the Kilowatt-Hour and Joule Heating',
    name: 'circ2-kwh-meter',
    alt: 'A 1000 W heater glows while a clock sweeps one hour and an energy meter climbs to 1.00 kWh, or 3.6 × 10⁶ J.',
    caption: 'Energy is power × time: $(1000\;\\text{W})(3600\;\\text{s}) = 1\;\\text{kWh} = 3.6 \\times 10^6\;\\text{J}$.',
  },
  {
    at: 'When a Bulb Burns Out or One Is Added',
    name: 'circ2-burnout',
    alt: 'Three bulbs in series and three in parallel: when one burns out, the whole series string goes dark, while the other parallel bulbs keep glowing and only the supply current drops.',
  },
  {
    at: 'Electricity and the Body',
    name: 'circ2-body',
    alt: 'A person touches 120 V and a grounded pipe; the current runs hand to hand across the chest, about 1.2 mA with dry skin and about 120 mA, a hundred times more, with wet skin.',
  },
]
