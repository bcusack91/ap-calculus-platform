import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-electric-potential-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the electric potential energy of two point charges, and what does its sign mean?`]: {
    question: r`Two protons held a distance r apart have an electric potential energy of +6 eV. One proton is replaced by an electron, and the separation is increased to 3r. What is the potential energy of the pair now?`,
    options: [r`+2 eV`, r`−18 eV`, r`−0.67 eV`, r`−2 eV`],
    correctAnswer: 3,
    explanation: r`U = kq₁q₂/r. Replacing a proton with an electron flips the sign of the product of the charges, and tripling r divides the size of U by 3: −2 eV. +2 eV keeps the sign of like charges, −18 eV multiplies by 3 instead of dividing, and −0.67 eV divides by 9, the 1/r² rule that belongs to the force.`,
  },
  [r`The electric field between two parallel plates separated by 2 cm with a potential difference of 200 V is:`]: {
    question: r`An electrophoresis gel is 25 cm long, and a power supply holds 100 V across its two ends. Treating the electric field in the gel as uniform, what is its strength?`,
    options: [r`25 V/m`, r`400 V/m`, r`4.0 V/m`, r`0.0025 V/m`],
    correctAnswer: 1,
    explanation: r`E = V/d = 100/0.25 = 400 V/m. 4.0 V/m divides by 25 without converting centimeters to meters, 25 V/m multiplies the voltage by the length instead of dividing, and 0.0025 V/m divides the length by the voltage.`,
  },
  [r`What is the energy stored in a 10 μF capacitor charged to 100 V?`]: {
    question: r`A 4 μF capacitor is charged until the voltage across it is 50 V. How much energy does it store?`,
    options: [r`1 × 10⁻² J`, r`1 × 10⁻⁴ J`, r`2 × 10⁻⁴ J`, r`5 × 10⁻³ J`],
    correctAnswer: 3,
    explanation: r`U = ½CV² = ½(4 × 10⁻⁶)(50)² = ½(4 × 10⁻⁶)(2500) = 5 × 10⁻³ J. 1 × 10⁻² J leaves out the factor of ½, 1 × 10⁻⁴ J forgets to square the voltage, and 2 × 10⁻⁴ is CV, the charge in coulombs rather than the energy.`,
  },
  [r`Capacitance of a parallel-plate capacitor increases when:`]: {
    question: r`A parallel-plate capacitor is connected to a battery. Which single change would increase its capacitance?`,
    options: [r`Pulling the plates farther apart`, r`Sliding a glass sheet into the gap`, r`Doubling the battery's voltage`, r`Trimming the plates' overlap area`],
    correctAnswer: 1,
    explanation: r`C = κε₀A/d, so filling the gap with a dielectric such as glass raises κ and raises C. A wider gap raises d and a smaller overlap lowers A, both of which lower C. Raising the voltage puts more charge on the plates but leaves the ratio Q/V unchanged.`,
  },
  [r`What does the Nernst equilibrium potential for an ion represent?`]: {
    question: r`In a certain neuron the equilibrium (Nernst) potential for K⁺ is −90 mV. The membrane is held at −60 mV while K⁺ channels are open. Which way is the net movement of K⁺?`,
    options: [r`Into the cell, since the interior is negative`, r`No net flow, since the channels are balanced`, r`Out of the cell, since −60 mV cannot hold K⁺ in`, r`Into the cell, since −60 mV is above −90 mV`],
    correctAnswer: 2,
    explanation: r`The electrical pull balances the K⁺ concentration gradient only at −90 mV. At −60 mV the interior is not negative enough to hold K⁺ against its gradient, so K⁺ leaves. The inward answers ignore the outward concentration gradient, and zero net flow happens only at the equilibrium potential itself.`,
  },
  [r`Myelin speeds conduction largely by {{c1::decreasing membrane capacitance}} and increasing membrane resistance.`]: {
    question: r`A disease strips the myelin from a stretch of axon. Compared with the healthy myelinated stretch, what happens to the membrane capacitance and to conduction along that stretch?`,
    options: [r`Capacitance rises and conduction slows`, r`Capacitance rises and conduction speeds up`, r`Capacitance falls and conduction slows`, r`Capacitance falls and conduction speeds up`],
    correctAnswer: 0,
    explanation: r`Myelin speeds conduction by lowering membrane capacitance, so losing it raises capacitance. More charge is then needed to change the local voltage, and the signal slows. The answers with falling capacitance have myelin's effect backward, and higher capacitance cannot speed conduction.`,
  },
  [r`How much work does the field do moving charge $q$ a distance $d$ along a uniform field $E$?`]: {
    question: r`A uniform electric field of 2000 N/C points to the right. An ion with charge +3.2 × 10⁻¹⁹ C moves 0.050 m to the right, along the field. How much work does the field do on the ion?`,
    options: [r`3.2 × 10⁻¹⁷ J`, r`6.4 × 10⁻¹⁶ J`, r`1.3 × 10⁻¹⁴ J`, r`1.0 × 10² J`],
    correctAnswer: 0,
    explanation: r`W = qEd = (3.2 × 10⁻¹⁹)(2000)(0.050) = 3.2 × 10⁻¹⁷ J. 6.4 × 10⁻¹⁶ is only qE, the force in newtons; 1.3 × 10⁻¹⁴ divides that force by the distance instead of multiplying; and 1.0 × 10² is Ed, the potential difference in volts, with the charge left out.`,
  },
  [r`A charge is carried in a circle around a fixed point charge at constant radius. How much work is done?`]: {
    question: r`A bead with charge +2 μC is slid once all the way around a ring of radius 0.10 m centered on a fixed +5 μC charge. An identical bead is slid straight outward from 0.10 m to 0.20 m from the same fixed charge. On which trip does the electric force do net work on the bead?`,
    options: [r`On both trips, because a force acts all the way`, r`Only on the outward trip, because r changes`, r`Only on the ring trip, because it is longer`, r`On neither trip, because the force is constant`],
    correctAnswer: 1,
    explanation: r`On the ring the bead stays the same distance from the fixed charge, so it moves along an equipotential with the force always perpendicular to its motion: zero work. Moving outward changes r, so the potential energy changes and the field does work. A force acting is not enough for work, path length does not matter, and the force on the outward trip is not constant anyway.`,
  },
  [r`A charge accelerated from rest through potential difference $V$ reaches a speed proportional to {{c1::the square root of $V$}}.`]: {
    question: r`A mass spectrometer speeds ions up from rest across a voltage V, and they emerge at speed v. What voltage would make identical ions emerge at speed 3v?`,
    options: [r`3V`, r`√3 V`, r`6V`, r`9V`],
    correctAnswer: 3,
    explanation: r`From qV = ½mv², speed is proportional to the square root of the voltage, so the voltage is proportional to v². Tripling the speed needs 3² = 9 times the voltage. 3V assumes speed is proportional to voltage, √3 V applies the square root the wrong way round, and 6V doubles instead of squaring.`,
  },
  [r`The electric force is conservative, so the work it does moving a charge between two points is {{c1::independent of path}}.`]: {
    question: r`The electric field does 6 μJ of work on a charge that moves from point A to point B along a straight line. The same charge is then taken from A to B along a zigzag route twice as long. How much work does the field do this time?`,
    options: [r`12 μJ`, r`3 μJ`, r`0 μJ`, r`6 μJ`],
    correctAnswer: 3,
    explanation: r`The electric force is conservative, so the work depends only on the endpoints A and B, not on the route: 6 μJ again. 12 μJ and 3 μJ assume the work scales with path length, and 0 μJ is the result for a closed loop that returns to its starting point.`,
  },
  [r`Along the perpendicular bisector of a dipole, the electric potential is {{c1::zero}} but the field is not.`]: {
    question: r`A dipole consists of charges +q and −q a small distance apart. An ion is brought slowly from far away to a point that is equally distant from the two charges. How much net work does this take, and does the ion feel an electric force once it is there?`,
    options: [r`Zero net work, and no force at that point`, r`Nonzero net work, and no force at that point`, r`Zero net work, but a nonzero force at that point`, r`Nonzero net work, and a nonzero force at that point`],
    correctAnswer: 2,
    explanation: r`At a point equally far from +q and −q the two potentials are equal and opposite and cancel as scalars, so V = 0 there, the same as far away, and the net work qΔV is zero. The two field vectors do not cancel: they add to a resultant parallel to the dipole axis, so the ion feels a force. The other answers treat zero potential and zero field as the same thing.`,
  },
  [r`Why is the electric field across a neuron's membrane enormous despite only $70$ mV?`]: {
    question: r`An artificial lipid membrane is 4 nm thick and breaks down when the electric field inside it exceeds 3 × 10⁷ V/m. Treating the field as uniform, what is the largest voltage the membrane can hold across it?`,
    options: [r`0.12 mV`, r`120 mV`, r`120 V`, r`7.5 × 10¹⁵ V`],
    correctAnswer: 1,
    explanation: r`V = Ed = (3 × 10⁷)(4 × 10⁻⁹) = 0.12 V = 120 mV: because the membrane is so thin, a tiny voltage already means an enormous field. 0.12 mV and 120 V come from taking a nanometer as 10⁻¹² m or 10⁻⁶ m, and 7.5 × 10¹⁵ V divides the field by the thickness instead of multiplying.`,
  },
  [r`A resting membrane potential of $-70$ mV means the {{c1::inside}} of the cell is negative relative to the outside.`]: {
    question: r`A microelectrode amplifier reports a membrane potential of −85 mV for a muscle fiber. The two inputs are then swapped by mistake, so the amplifier reports the outside relative to the inside. What does it display for the same fiber?`,
    options: [r`−85 mV, since the outside is negative relative to inside`, r`0 mV, since the two sides of a resting cell are neutral`, r`+85 mV, since the outside is positive relative to inside`, r`−85 mV, since swapping the inputs cannot change a reading`],
    correctAnswer: 2,
    explanation: r`A membrane potential is stated as inside relative to outside, so −85 mV means the inside is 85 mV lower than the outside. Measured the other way round, the outside is 85 mV higher than the inside: +85 mV. Keeping −85 mV assigns the negative side to the outside or ignores which way the difference is taken, and 0 mV denies that there is a difference at all.`,
  },
  [r`Does establishing a resting potential require moving a large fraction of the cell's ions?`]: {
    question: r`A cell's membrane potential goes from 0 mV to −70 mV as K⁺ leaks out through open channels. How does the K⁺ concentration inside the cell compare with its value before the leak?`,
    options: [r`Roughly halved, since half the K⁺ needed to cross`, r`Nearly depleted, since most K⁺ needed to cross`, r`Almost unchanged, since few ions needed to cross`, r`Clearly higher, since K⁺ entered to build charge`],
    correctAnswer: 2,
    explanation: r`The membrane's capacitance is tiny, so separating only a very small number of ions sets up the full −70 mV, and the bulk concentration is essentially unchanged. The halved and depleted answers assume a large fraction of ions must move, and K⁺ leaving the cell cannot raise its internal concentration.`,
  },
  [r`Moving membrane potential from $-70$ mV toward $0$ is {{c1::depolarization}}, while going more negative is hyperpolarization.`]: {
    question: r`A stimulus changes a neuron's membrane potential from −70 mV to −55 mV. What is this change called, and which ion movement could produce it?`,
    options: [r`Depolarization, from K⁺ leaving the cell`, r`Hyperpolarization, from Na⁺ entering the cell`, r`Depolarization, from Na⁺ entering the cell`, r`Hyperpolarization, from K⁺ leaving the cell`],
    correctAnswer: 2,
    explanation: r`Moving from −70 mV toward 0 is depolarization, and positive charge entering the cell, such as Na⁺ influx, makes the inside less negative. K⁺ leaving removes positive charge and makes the inside more negative, and hyperpolarization means moving below −70 mV, not above it.`,
  },
  [r`Why does a larger axon diameter increase conduction velocity?`]: {
    question: r`Axon X has twice the diameter of axon Y and the same axoplasm resistivity. Compared with Y, what is X's internal (longitudinal) resistance per unit length, and what does that do to conduction?`,
    options: [r`One half as large, so X conducts faster`, r`Twice as large, so X conducts more slowly`, r`Four times as large, so X conducts more slowly`, r`One quarter as large, so X conducts faster`],
    correctAnswer: 3,
    explanation: r`R = ρL/A, and doubling the diameter multiplies the cross-sectional area by 4, so the resistance per length falls to one quarter and current spreads farther along the axon. One half treats area as proportional to diameter, and the larger-resistance answers invert the dependence on area.`,
  },
  [r`Only potential {{c1::differences}} are physically measurable; the location where $V = 0$ is a chosen reference.`]: {
    question: r`For a lone point charge, V is usually set to zero very far away. A student instead sets V = 0 at a point 1 m from the charge. Compared with the usual choice, what happens to the potential assigned to a point 2 m away, and to the work the field does on an ion moved from the 1 m point to the 2 m point?`,
    options: [r`The assigned potential changes; the work does not`, r`The assigned potential and the work both change`, r`The work changes; the assigned potential does not`, r`Neither the assigned potential nor the work changes`],
    correctAnswer: 0,
    explanation: r`Moving the zero shifts every potential by the same amount, so the number assigned to the 2 m point changes. The work depends only on the potential difference between the two points, which the shift leaves untouched. Saying the work changes treats the reference as physical, and saying nothing changes forgets that the assigned numbers depend on the reference.`,
  },
  [r`In a voltage clamp experiment, why does the recorded current directly report channel opening?`]: {
    question: r`In a voltage clamp experiment the membrane is held at a fixed voltage. When a drug is added, the recorded membrane current doubles. What has the drug done?`,
    options: [r`Doubled the membrane's resistance`, r`Doubled the membrane's capacitance`, r`Doubled the membrane's driving voltage`, r`Doubled the membrane's conductance`],
    correctAnswer: 3,
    explanation: r`With the voltage fixed, I = V/R means the current tracks conductance, 1/R, so twice the current means twice the conductance: more channels are open. Twice the resistance would halve the current, the clamp keeps the voltage from changing, and capacitance carries no steady current at fixed voltage.`,
  },
  [r`Myelin increases the effective separation between the conducting fluids. What does that do to membrane capacitance?`]: {
    question: r`Myelin wrapping makes the effective separation between the conducting fluids 50 times larger, with area and dielectric constant unchanged. What happens to the membrane capacitance C and to the charge needed to change the membrane voltage by 10 mV?`,
    options: [r`C rises 50 times and so does the charge`, r`C falls to 1/50 and so does the charge`, r`C falls to 1/50 but the charge is fixed`, r`C rises 50 times but the charge is fixed`],
    correctAnswer: 1,
    explanation: r`C = κε₀A/d, so a separation 50 times larger gives 1/50 of the capacitance, and Q = CV means the charge for a given voltage change falls by the same factor. The rising answers put d in the numerator, and a fixed charge ignores Q = CV.`,
  },
  [r`How much energy does it take to move one $Na^+$ ion across a $70$ mV membrane?`]: {
    question: r`A pump moves one Ca²⁺ ion across a membrane against a potential difference of 50 mV. How much electrical work does this take? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`8.0 × 10⁻²¹ J`, r`1.6 × 10⁻²⁰ J`, r`1.6 × 10⁻¹⁷ J`, r`6.4 × 10⁻¹⁸ J`],
    correctAnswer: 1,
    explanation: r`W = qV with q = 2e = 3.2 × 10⁻¹⁹ C and V = 0.050 V, so W = 1.6 × 10⁻²⁰ J. 8.0 × 10⁻²¹ J uses a charge of only e, 1.6 × 10⁻¹⁷ J leaves the 50 mV as 50 V, and 6.4 × 10⁻¹⁸ J divides the charge by the voltage instead of multiplying.`,
  },
  [r`Why are defibrillator paddles large and pressed firmly against gel-coated skin?`]: {
    question: r`A defibrillator delivers the same total current through a paddle with four times the contact area of an older paddle. What happens to the current density at the skin, and to the risk of burns?`,
    options: [r`It falls to one half, so burns are less likely`, r`It stays the same, so burn risk does not change`, r`It rises fourfold, so burns are more likely`, r`It falls to one quarter, so burns are less likely`],
    correctAnswer: 3,
    explanation: r`Current density is current divided by area, so four times the area with the same current gives one quarter of the density and less local heating of the skin. One half takes a square root with no basis, an unchanged density confuses density with total current, and a fourfold rise inverts the relationship.`,
  },
  [r`Released from rest, which way does a positive charge move in terms of potential? Which way does a negative charge move? What happens to the potential energy of each?`]: {
    question: r`Point A is at +300 V and point B is at −100 V. An electron is released from rest midway between them. Which way does it move, and what happens to its potential energy?`,
    options: [r`Toward A, and its potential energy decreases`, r`Toward A, and its potential energy increases`, r`Toward B, and its potential energy decreases`, r`Toward B, and its potential energy increases`],
    correctAnswer: 0,
    explanation: r`A negative charge moves toward higher potential, so the electron heads for A, and U = qV becomes more negative as V rises. Every charge released from rest loses potential energy, so an increase is never right here. Moving toward B, the lower potential, is what a positive charge would do.`,
  },
  [r`An electron moves from a point at $+20$ V to a point at $+50$ V. What is the change in its potential energy? ($e = 1.6 \times 10^{-19}$ C)`]: {
    question: r`A dust grain carrying −3.0 nC drifts from a point where the potential is +200 V to a point where it is −100 V. What is the change in the grain's electric potential energy?`,
    options: [r`+9.0 × 10⁻⁷ J`, r`−9.0 × 10⁻⁷ J`, r`+3.0 × 10⁻⁷ J`, r`−3.0 × 10⁻⁷ J`],
    correctAnswer: 0,
    explanation: r`ΔV = −100 − 200 = −300 V, and ΔU = qΔV = (−3.0 × 10⁻⁹)(−300) = +9.0 × 10⁻⁷ J: a negative charge gains potential energy when it goes to lower potential. The negative answer drops the sign of the charge, and the 3.0 × 10⁻⁷ values use a potential change of 100 V by adding the two potentials.`,
  },
  [r`Point P is $0.30$ m from a $+6.0$ nC charge and $0.30$ m from a $-2.0$ nC charge. What is the potential at P? ($k = 9.0 \times 10^{9}$ N·m$^2$/C$^2$)`]: {
    question: r`A charge +Q alone produces a potential of +60 V at point P. A second charge, −2Q, is then fixed twice as far from P as the first charge is. Taking V = 0 far away, what is the potential at P now?`,
    options: [r`0 V`, r`+30 V`, r`−60 V`, r`+120 V`],
    correctAnswer: 0,
    explanation: r`V = kq/r, so the second charge contributes k(−2Q)/(2r) = −60 V, and potentials add as signed numbers: 60 − 60 = 0 V. +30 V uses 1/r² for the second charge, −60 V ignores its greater distance, and +120 V adds the magnitudes and drops the negative sign.`,
  },
  [r`At a point where $V = -100$ V, a $+2.0$ nC charge has a potential energy of {{c1::$-2.0 \times 10^{-7}$ J}}.`]: {
    question: r`Near a charged plate there is a spot where the potential is −250 V. A pollen grain carrying −4.0 nC rests at that spot. What is the electric potential energy of the grain?`,
    options: [r`−1.0 × 10⁻⁶ J`, r`+1.0 × 10⁻³ J`, r`+1.0 × 10⁻⁶ J`, r`−1.0 × 10⁻³ J`],
    correctAnswer: 2,
    explanation: r`U = qV = (−4.0 × 10⁻⁹)(−250) = +1.0 × 10⁻⁶ J: both signs are kept, and two negatives give a positive energy. The negative answers drop one of the signs, and the answers with 10⁻³ treat nanocoulombs as microcoulombs.`,
  },
  [r`The electric field always points toward {{c1::lower}} potential, and it crosses every equipotential at right angles.`]: {
    question: r`In a region of space the potential is 100 V everywhere on the plane x = 0 and 40 V everywhere on the plane x = 0.20 m, changing steadily in between. What is the electric field in that region?`,
    options: [r`300 V/m, in the +x direction`, r`300 V/m, in the −x direction`, r`12 V/m, in the +x direction`, r`300 V/m, parallel to the planes`],
    correctAnswer: 0,
    explanation: r`|E| = |ΔV/Δr| = 60 V / 0.20 m = 300 V/m, and the field points from high potential to low, which is +x here. The −x answer points uphill in potential, 12 V/m multiplies 60 V by 0.20 m, and a field along the planes would lie in an equipotential, which is impossible.`,
  },
  [r`An electron accelerated from rest through $250$ V gains a kinetic energy of $250$ eV, which is {{c1::$4.0 \times 10^{-17}$ J}}.`]: {
    question: r`An alpha particle (charge +2e) starts from rest and falls through a potential difference of 3000 V. How much kinetic energy does it gain? (1 eV = 1.6 × 10⁻¹⁹ J)`,
    options: [r`3000 eV, which is 4.8 × 10⁻¹⁶ J`, r`6000 eV, which is 9.6 × 10⁻¹⁶ J`, r`6000 eV, which is 3.8 × 10²² J`, r`1500 eV, which is 2.4 × 10⁻¹⁶ J`],
    correctAnswer: 1,
    explanation: r`In electron-volts the energy is the charge in units of e times the volts: 2 × 3000 = 6000 eV, and 6000 × 1.6 × 10⁻¹⁹ = 9.6 × 10⁻¹⁶ J. 3000 eV forgets the charge of +2e, 1500 eV divides by the charge, and 3.8 × 10²² J divides by 1.6 × 10⁻¹⁹ when converting.`,
  },
}
