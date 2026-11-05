import type { SlideLoop } from './index'

/**
 * Circuits Part 4: Capacitor Networks & Bioelectricity (mcat-physics-electricity-rc-circuits-mcat)
 * looping slide animations (Nov 2026). Files: public/slide-media/circuits-4/.
 * Sources: ~/StudyMondo-Video/_manim/slide_loops/circuits4_loops.py. Each one
 * plays in place of the section's drawn figure.
 */
export const circuits4Loops: SlideLoop[] = [
  {
    at: 'Capacitor Networks',
    name: 'circ4-cap-networks',
    alt: '3 µF and 6 µF capacitors on 12 V: in parallel both get 12 V and C_eq = 9 µF; in series both get the same 24 µC, the 3 µF takes 8 V and the 6 µF takes 4 V, and C_eq = 2 µF.',
  },
  {
    at: 'The Time Constant',
    name: 'circ4-time-constant',
    alt: 'An RC circuit charges, with q and V_C rising to 63 percent of their final value at one time constant and essentially full by 5τ while the current falls from ε/R; then it discharges, with charge falling to 37 percent at τ and the current reversed.',
  },
  {
    at: 'The Cell Membrane Is an RC Circuit',
    name: 'circ4-membrane-rc',
    alt: 'A membrane patch beside its circuit, a capacitor C_m in parallel with a resistor R_m: injected current first charges the membrane and then leaks through channels, so the membrane potential rises to 63 percent at τ = R_mC_m and decays back afterward.',
  },
  {
    at: 'Myelin and Conduction Speed',
    name: 'circ4-myelin',
    alt: 'Two axons side by side: in the unmyelinated one the signal creeps along with current leaking everywhere; in the myelinated one the signal jumps node to node and reaches the end about three times sooner.',
  },
  {
    at: 'Defibrillators and Capacitor Discharge',
    name: 'circ4-defibrillator',
    alt: 'A defibrillator charges a 100 µF capacitor slowly at about 40 W for 5 s to store 200 J, then dumps it through a 50 Ω chest in about 10 ms as a spike near 8 × 10⁴ W.',
  },
]
