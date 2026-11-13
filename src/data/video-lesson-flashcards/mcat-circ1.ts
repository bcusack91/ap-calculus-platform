import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Circuits Part 1 video lesson (lesson key
 * `mcat-circ1`): one deck per source video, offered before that video's
 * "Remember" section. Each deck holds the equations and key facts of the
 * sections that come before the recap, so the student can memorize them
 * before the recap questions. Concept videos (odd) carry the ideas; worked-
 * example videos (even) carry the method and the equations it uses.
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · Current: Charge on the Move
  1: [
    { front: r`What is the elementary charge, $e$?`, back: r`$e = 1.6 \times 10^{-19}$ C. Every charge is a whole multiple of $e$, and one coulomb is about $6.25 \times 10^{18}$ elementary charges.` },
    { front: r`Write current as an equation, with its unit.`, back: r`$I = \dfrac{\Delta Q}{\Delta t}$. Current is a rate: $1\ \text{A} = 1\ \text{C/s}$.` },
    { front: r`Rearrange $I = \Delta Q/\Delta t$ for the charge that passes in a time $\Delta t$.`, back: r`$\Delta Q = I\,\Delta t$` },
    { front: r`How many carriers make up a charge $\Delta Q$?`, back: r`$N = \dfrac{\Delta Q}{q}$, where $q$ is the charge on ONE carrier: $e$ for an electron, Na⁺ or K⁺, and $2e$ for Ca²⁺.` },
    { front: r`Which way does conventional current point?`, back: r`The way positive charge would move: out of the + terminal, around the circuit, and back to the − terminal. Electrons in a metal drift the opposite way.` },
    { front: r`A negative charge moves to the left. Which way does the current point?`, back: r`To the right. A negative charge moving left is the same current as a positive charge moving right.` },
    { front: r`Electrons drift slowly. Why does a lamp light the instant the switch closes?`, back: r`The wire is already full of carriers, and the electric field sets them all moving at once. Nothing has to travel from the battery to the lamp.` },
    { front: r`In a salt solution, Na⁺ drifts one way and Cl⁻ drifts the other. Do their currents cancel?`, back: r`No, they add. Positive charge moving right and negative charge moving left are both current to the right.` },
    { front: r`How does heating change conduction in a metal, and in an electrolyte solution?`, back: r`A metal conducts worse when hot. An electrolyte conducts better when warm, because its ions move faster.` },
  ],
  // 2 · Current: Worked Examples
  2: [
    { front: r`What is the first step in any charge-counting problem?`, back: r`Convert to base units: $1\ \text{mA} = 10^{-3}$ A, $1\ \text{pA} = 10^{-12}$ A, $1\ \text{ms} = 10^{-3}$ s.` },
    { front: r`Which equation turns a current and a time into a charge?`, back: r`$\Delta Q = I\,\Delta t$, in coulombs.` },
    { front: r`Which equation turns a charge into a number of carriers?`, back: r`$N = \dfrac{\Delta Q}{q}$, where $q$ is the charge on one carrier.` },
    { front: r`What is the charge on one electron, one K⁺ ion and one Ca²⁺ ion?`, back: r`Electron and K⁺: $e = 1.6 \times 10^{-19}$ C each (in size). Ca²⁺: $2e = 3.2 \times 10^{-19}$ C.` },
    { front: r`The same current is carried by Ca²⁺ instead of K⁺. How does the number of ions change?`, back: r`It halves. Each Ca²⁺ carries $2e$, so $N = \Delta Q/2e$.` },
    { front: r`Your last line is in coulombs, but the question asks "how many electrons?" What is missing?`, back: r`Divide by the charge on one carrier. Coulombs are an amount of charge, not a count.` },
  ],
  // 3 · Voltage: Energy per Charge
  3: [
    { front: r`Write voltage as an equation, with its unit.`, back: r`$\Delta V = \dfrac{W}{q}$: energy per charge. $1\ \text{V} = 1\ \text{J/C}$, so a 9 V battery gives every coulomb 9 J.` },
    { front: r`What is the change in potential energy of a charge $q$ that moves through $\Delta V$?`, back: r`$\Delta U = q\,\Delta V$, with the signs of both $q$ and $\Delta V$ kept.` },
    { front: r`Which way do positive and negative charges move on their own?`, back: r`Positive charges move from high to low potential; negative charges move from low to high. Both LOSE potential energy.` },
    { front: r`What is one electron-volt?`, back: r`The energy one elementary charge gains or loses crossing 1 V: $1\ \text{eV} = 1.6 \times 10^{-19}$ J.` },
    { front: r`What is "ground" in a circuit?`, back: r`The point declared 0 V. Voltage is always a difference, so moving the ground shifts every potential equally and changes no difference.` },
    { front: r`How much voltage drops along an ideal wire?`, back: r`None. An ideal wire is at one potential, so drops happen only across elements.` },
    { front: r`Does a bulb use up current?`, back: r`No. The same current leaves a bulb as enters it. What drops across the bulb is the energy per charge (the voltage).` },
    { front: r`A switch opens in a single loop. What is the current, and what is the voltage across the gap?`, back: r`The current is zero everywhere in the loop, and the whole source voltage appears across the open gap.` },
    { front: r`In the water analogy, what stands for the battery, the voltage, the current and a resistor?`, back: r`Battery = pump. Voltage = pressure difference. Current = flow rate. Resistor = narrow pipe.` },
  ],
  // 4 · Voltage: Worked Examples
  4: [
    { front: r`How do you find the energy a battery delivers in a time $\Delta t$?`, back: r`Charge first, $\Delta Q = I\,\Delta t$, then $W = qV$.` },
    { front: r`What does $IV$ give: energy or power?`, back: r`Power, in watts. Energy needs the time as well: $W = IV\,\Delta t = qV$.` },
    { front: r`How much energy does one elementary charge carry across $V$ volts, in electron-volts?`, back: r`$V$ electron-volts: an electron crossing 9 V carries 9 eV. A doubly charged ion carries $2V$ eV.` },
    { front: r`How do you convert electron-volts to joules?`, back: r`Multiply by $1.6 \times 10^{-19}$ J/eV.` },
    { front: r`In $\Delta U = q\,\Delta V$, how are the signs set?`, back: r`$\Delta V = V_{\text{final}} - V_{\text{initial}}$, and $q$ is negative for an electron or an anion. A negative $\Delta U$ means the charge loses potential energy.` },
    { front: r`About how large is a resting membrane potential?`, back: r`About $-70$ mV, inside relative to outside, so ion energies are fractions of an eV.` },
  ],
  // 5 · Resistance and Ohm's Law
  5: [
    { front: r`State Ohm's law and the unit of resistance.`, back: r`$V = IR$, with $1\ \Omega = 1\ \text{V/A}$.` },
    { front: r`What is conductance?`, back: r`$G = \dfrac{1}{R}$, in siemens: the current per volt.` },
    { front: r`Read $V = IR$ three ways: fixed $R$, fixed $V$, fixed $I$.`, back: r`Fixed $R$: $I \propto V$. Fixed $V$: $I \propto 1/R$. Fixed $I$ (one series path): $V \propto R$.` },
    { front: r`What does the $I$–$V$ graph of an ohmic element look like (current on the vertical axis)?`, back: r`A straight line through the origin, with slope $1/R$.` },
    { front: r`Why is a filament bulb not ohmic?`, back: r`Its resistance rises as it heats, so its $I$–$V$ curve flattens instead of staying a straight line.` },
    { front: r`Write the resistance of a wire in terms of its material and shape.`, back: r`$R = \dfrac{\rho L}{A}$. The resistivity $\rho$ belongs to the material; longer wires resist more and fatter wires resist less.` },
    { front: r`A wire's diameter doubles. What happens to its resistance?`, back: r`It falls to one quarter. Area goes as diameter squared, and $R \propto 1/A$.` },
    { front: r`A wire is stretched to $n$ times its length at constant volume. What happens to its resistance?`, back: r`It is multiplied by $n^2$: the length is $n$ times larger and the area is $n$ times smaller.` },
    { front: r`How does heating a metal change its resistance?`, back: r`The resistance rises: a hotter lattice scatters the electrons more often.` },
    { front: r`How does an axon's internal resistance per length depend on its radius?`, back: r`As $1/r^2$ (through the area), not the $1/r^4$ of fluid flow. Wider axons conduct faster.` },
  ],
  // 6 · Resistance: Worked Examples
  6: [
    { front: r`Which equation rescales a wire's resistance?`, back: r`$R = \dfrac{\rho L}{A}$` },
    { front: r`How do you rescale a resistance with factors?`, back: r`New $R$ = old $R$ × (length factor) ÷ (area factor), where the area factor = (diameter factor)².` },
    { front: r`A wire is stretched to 3 times its length at constant volume. By what factor does $R$ change?`, back: r`By $3^2 = 9$. The length triples and the area falls to one third.` },
    { front: r`How do you read the resistance at one point of an $I$–$V$ graph?`, back: r`$R = V/I$ at that point. It is not the slope between two points.` },
    { front: r`How does $V/I$ behave along an ohmic line, and along a filament curve?`, back: r`Ohmic: the same $V/I$ at every point. Filament: $V/I$ grows as the filament heats.` },
  ],
  // 7 · Series vs. Parallel Resistors
  7: [
    { front: r`In series, what is the same for every element, and what adds?`, back: r`The current is the same; the voltages add.` },
    { front: r`What is the equivalent resistance of resistors in series?`, back: r`$R_{eq} = R_1 + R_2 + \cdots$, always larger than the largest resistor.` },
    { front: r`In parallel, what is the same for every element, and what adds?`, back: r`The voltage is the same; the currents add.` },
    { front: r`What is the equivalent resistance of resistors in parallel?`, back: r`$\dfrac{1}{R_{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \cdots$, always smaller than the smallest branch.` },
    { front: r`What is the shortcut for two resistors in parallel?`, back: r`Product over sum: $R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$.` },
    { front: r`What do $n$ identical resistors $R$ give in series, and in parallel?`, back: r`Series: $nR$. Parallel: $R/n$.` },
    { front: r`A branch is added in parallel. What happens to $R_{eq}$ and to the total current?`, back: r`$R_{eq}$ falls and the total current rises.` },
    { front: r`How do you tell series from parallel?`, back: r`By nodes and current paths, never by how the figure is drawn. Parallel: both ends join the same two nodes. Series: one path with no junction between.` },
    { front: r`What do a short (a bare wire across an element) and an open branch do?`, back: r`A shorted element has both ends at the same potential, so it carries no current and drops out. An open branch carries no current and can be erased.` },
  ],
  // 8 · Series vs. Parallel: Worked Examples
  8: [
    { front: r`What is the recipe for a series string?`, back: r`Add the resistances, find $I = V/R_{eq}$, then each drop is $IR$. The drops add back to the battery voltage.` },
    { front: r`What is the recipe for resistors in parallel across a battery?`, back: r`Every branch has the battery voltage, so each branch current is $V/R$. The branch currents add to the total, which matches $V/R_{eq}$.` },
    { front: r`What is the shortcut for two resistors in parallel?`, back: r`Product over sum: $R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$.` },
    { front: r`After adding $1/R_1 + 1/R_2 + \cdots$, what is the last step?`, back: r`Invert it. The sum is $1/R_{eq}$, not $R_{eq}$.` },
    { front: r`What quick check catches a wrong $R_{eq}$?`, back: r`Parallel: $R_{eq}$ must be smaller than the smallest branch. Series: $R_{eq}$ must be larger than the largest resistor.` },
    { front: r`Do series resistors split the battery voltage equally?`, back: r`Only if they are equal. Each drop is $IR$, so the larger resistor takes the larger share.` },
  ],
}
