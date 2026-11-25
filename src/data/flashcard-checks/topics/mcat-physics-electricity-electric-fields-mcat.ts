import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-electric-fields-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How is electric field defined, and what field does a point charge produce?`]: {
    question: r`A charged oil droplet carrying 4.0 × 10⁻¹⁸ C hangs motionless in air because an upward electric force of 8.0 × 10⁻¹⁴ N balances its weight. How strong is the electric field at the droplet?`,
    options: [r`2.0 × 10⁴ N/C`, r`5.0 × 10⁻⁵ N/C`, r`3.2 × 10⁻³¹ N/C`, r`2.0 × 10⁻⁴ N/C`],
    correctAnswer: 0,
    explanation: r`By definition E = F/q = (8.0 × 10⁻¹⁴)/(4.0 × 10⁻¹⁸) = 2.0 × 10⁴ N/C. 5.0 × 10⁻⁵ divides the charge by the force, 3.2 × 10⁻³¹ multiplies the force by the charge, and 2.0 × 10⁻⁴ gets the sign of the exponent wrong when dividing the powers of ten.`,
  },
  [r`Charge concentrates most at what part of an irregular conductor?`]: {
    question: r`A solid metal object shaped like a teardrop, with one broad rounded end and one pointed tip, is given excess charge and left isolated. Where is the charge per unit area greatest?`,
    options: [r`At the broad rounded end of it`, r`Around its widest middle section`, r`At the pointed tip of the teardrop`, r`Nowhere, as it is spread evenly`],
    correctAnswer: 2,
    explanation: r`Charge on a conductor crowds onto the most sharply curved parts, so the charge per unit area is greatest at the pointed tip. The broad end and the wide middle are gently curved and hold less charge per unit area, and an even spread only happens on a sphere.`,
  },
  [r`Electric field lines never:`]: {
    question: r`A student sketches the electric field of a +Q charge placed near a −Q charge. Which feature of the sketch must be an error?`,
    options: [r`Two lines crossing between the charges`, r`Lines ending on the negative charge`, r`Lines crowding close to each charge`, r`Lines starting on the positive charge`],
    correctAnswer: 0,
    explanation: r`Field lines can never cross, because the field at the crossing point would have two different directions at once. The other features are all correct: lines start on positive charge, end on negative charge, and crowd together near the charges where the field is strongest.`,
  },
  [r`Excess charge on an isolated conductor resides:`]: {
    question: r`A hollow copper ball with an empty cavity inside is isolated and given 5 nC of excess electrons. Once the charge stops moving, where are the excess electrons?`,
    options: [r`On the inner cavity wall only`, r`On the outer surface only`, r`Evenly through the copper`, r`Split between both surfaces`],
    correctAnswer: 1,
    explanation: r`The excess electrons repel one another and move as far apart as they can, which puts all of them on the outer surface. None stay in the bulk metal, and with no charge inside the cavity there is nothing to hold any of them on the inner wall.`,
  },
  [r`An electric dipole moment points from:`]: {
    question: r`In a diagram of HCl, the hydrogen atom (partial positive) is drawn on the left and the chlorine atom (partial negative) on the right. In the physics convention, which way does the molecule's dipole moment point?`,
    options: [r`Left, toward the hydrogen atom`, r`Right, toward the chlorine atom`, r`Up, at right angles to the bond`, r`Nowhere, as it has no direction`],
    correctAnswer: 0,
    explanation: r`The physics convention points the dipole moment from the negative charge to the positive charge, so here it points left toward hydrogen. Pointing it toward chlorine is the chemistry convention. A dipole moment is a vector along the line joining the charges, so it is neither perpendicular to the bond nor directionless.`,
  },
  [r`Why is the peptide bond described as having a dipole, and what does that mean physically?`]: {
    question: r`A Ca²⁺ ion drifts close to a peptide bond in a protein backbone. Which atom of the peptide group attracts it most strongly, and why?`,
    options: [r`Amide nitrogen, the partially negative end`, r`Carbonyl oxygen, the partially negative end`, r`Carbonyl carbon, the partially negative end`, r`Amide hydrogen, the partially negative end`],
    correctAnswer: 1,
    explanation: r`Unequal electron sharing leaves the carbonyl oxygen partially negative, so a positive ion is drawn to it. The amide nitrogen and its hydrogen sit at the partially positive end of the peptide dipole, and the carbonyl carbon loses electron density to the oxygen rather than gaining it.`,
  },
  [r`How does the field outside a uniformly charged sphere compare with that of a point charge?`]: {
    question: r`A ball of radius 0.10 m carries +4.0 nC spread uniformly through it. Taking k = 9 × 10⁹ N·m²/C², what is the electric field at a point 0.20 m from the ball's center?`,
    options: [r`3600 N/C`, r`180 N/C`, r`900 N/C`, r`450 N/C`],
    correctAnswer: 2,
    explanation: r`Outside a uniformly charged sphere the field is that of a point charge at the center, so E = kQ/r² = 36/(0.20)² = 900 N/C. 3600 N/C measures the distance from the surface (0.10 m) instead of the center, 180 comes from kQ/r, which is the potential, and 450 N/C has no basis in the point-charge formula.`,
  },
  [r`By Gauss-law reasoning, the net electric flux through a closed surface depends only on the {{c1::enclosed charge}}.`]: {
    question: r`A closed imaginary surface surrounds a +3 nC charge and a −1 nC charge. A +5 nC charge sits just outside the surface. The net electric flux through the surface is the same as if the surface enclosed a single charge of:`,
    options: [r`+7 nC`, r`+4 nC`, r`+2 nC`, r`+5 nC`],
    correctAnswer: 2,
    explanation: r`Net flux depends only on the enclosed charge: +3 + (−1) = +2 nC. The outside charge sends as much flux in as out. +7 nC wrongly counts the outside charge, +4 nC adds the enclosed magnitudes without the sign, and +5 nC counts only the outside charge.`,
  },
  [r`How does field magnitude vary with distance for a long charged line versus a large charged sheet?`]: {
    question: r`The electric field 2 cm from a very long, uniformly charged wire is 600 N/C. What is the field 6 cm from the wire?`,
    options: [r`200 N/C`, r`67 N/C`, r`600 N/C`, r`1800 N/C`],
    correctAnswer: 0,
    explanation: r`A long line of charge gives a field proportional to 1/r, so tripling the distance cuts the field to one third: 200 N/C. 67 N/C uses the point-charge 1/r² rule, 600 N/C uses the distance-independent rule for a large sheet, and 1800 N/C inverts the relationship.`,
  },
  [r`An electron is placed in an electric field pointing east. Which way does it accelerate and why?`]: {
    question: r`A beam of electrons passes through a region of uniform electric field and is deflected toward the north. Which way does the electric field in the region point?`,
    options: [r`South, opposite the electrons' deflection`, r`North, along the electrons' deflection`, r`East, at a right angle to the deflection`, r`West, at a right angle to the deflection`],
    correctAnswer: 0,
    explanation: r`Field direction is defined by the force on a positive charge, and F = qE reverses for the negative electron. A northward force on electrons therefore means a field pointing south. A northward field would push electrons south, and an electric force is never perpendicular to the field.`,
  },
  [r`Two equal positive charges sit $10$ cm apart. What is the electric field at the midpoint?`]: {
    question: r`Four identical +2 nC charges are fixed at the four corners of a square. At the exact center of the square, what are the electric field and the electric potential (taking V = 0 far away)?`,
    options: [r`The field is zero and the potential is zero`, r`The field is nonzero and the potential is zero`, r`The field is nonzero and the potential is positive`, r`The field is zero and the potential is positive`],
    correctAnswer: 3,
    explanation: r`At the center the field vectors from opposite corners are equal and opposite, so they cancel in pairs and the field is zero. Potential is a scalar, so four positive contributions add to a positive total. A zero potential would need charges of both signs, and a nonzero field would need an asymmetry.`,
  },
  [r`Why does a dipole feel a net force in a nonuniform field but not in a uniform one?`]: {
    question: r`A water molecule sits near a dissolved Na⁺ ion with its partially negative oxygen end turned toward the ion. What net electric force does the neutral molecule feel?`,
    options: [r`A push from the ion, as the far end is in the stronger field`, r`No net force, as the molecule carries no net charge at all`, r`A pull toward the ion, as the near end is in the stronger field`, r`No net force, as the forces on its two ends cancel exactly`],
    correctAnswer: 2,
    explanation: r`The ion's field is nonuniform and weakens with distance. The nearer negative end is attracted more strongly than the farther positive end is repelled, so there is a net pull toward the ion. Exact cancellation happens only in a uniform field, and zero net charge does not mean zero net force.`,
  },
  [r`How does a dipole's field fall off with distance compared with a point charge's?`]: {
    question: r`Far from a small electric dipole, the electric field at distance r along its axis has magnitude E. What is the field magnitude at distance 2r along the same axis?`,
    options: [r`E/8`, r`E/4`, r`E/2`, r`E/16`],
    correctAnswer: 0,
    explanation: r`A dipole's field falls off as 1/r³, so doubling the distance divides the field by 2³ = 8. E/4 uses the 1/r² rule for a single point charge, E/2 uses 1/r, which is the rule for a long line of charge, and E/16 uses 1/r⁴.`,
  },
  [r`Two fields of $300$ N/C each act at right angles at a point. What is the net field?`]: {
    question: r`One source produces an electric field of 50 N/C at point P. A second source is then switched on that by itself would produce 120 N/C at P, at right angles to the first field. By how much does the magnitude of the field at P increase?`,
    options: [r`120 N/C`, r`80 N/C`, r`70 N/C`, r`130 N/C`],
    correctAnswer: 1,
    explanation: r`Perpendicular fields combine by Pythagoras: √(50² + 120²) = 130 N/C, which is 80 N/C more than the original 50 N/C. 120 N/C adds the second field as if it were parallel to the first, 70 N/C is the difference of the two magnitudes, and 130 N/C is the new net field, not the increase.`,
  },
  [r`What do the starting points, ending points, and spacing of field lines tell you?`]: {
    question: r`In a field-line diagram, all the lines point to the right and they spread farther apart from left to right. A proton is moved from the left side of the diagram to the right side. How does the electric force on it change?`,
    options: [r`It gets stronger and still points right`, r`It gets weaker and still points right`, r`It gets weaker and now points left`, r`It gets stronger and now points left`],
    correctAnswer: 1,
    explanation: r`Line spacing shows field strength, so lines that spread apart mean a weaker field and a weaker force on the right. The lines still point right, and a positive charge is pushed along them. The stronger answers read wide spacing as a strong field, and the leftward answers would apply to a negative charge.`,
  },
  [r`How do field lines look between two large, oppositely charged parallel plates?`]: {
    question: r`Two large horizontal plates are charged, with the positive plate on top and the negative plate below. Which description fits the electric field lines in the middle of the gap?`,
    options: [r`Vertical, pointing down, evenly spaced`, r`Vertical, pointing up, evenly spaced`, r`Vertical, pointing down, denser on top`, r`Horizontal, parallel, evenly spaced`],
    correctAnswer: 0,
    explanation: r`Between large plates the lines are straight, perpendicular to the plates and evenly spaced, and they run from the positive plate to the negative one: downward here. Upward lines reverse the direction, lines denser on top would mean a non-uniform field, and horizontal lines would run along the plates instead of between them.`,
  },
  [r`Define the electric dipole moment and give its magnitude for charges $\pm q$ separated by $d$.`]: {
    question: r`A +3 nC charge and a −3 nC charge are held 2 mm apart. What are the magnitude and the physics-convention direction of the pair's dipole moment?`,
    options: [r`6 × 10⁻¹² C·m, toward the −3 nC charge`, r`1.5 × 10⁻⁶ C/m, toward the +3 nC charge`, r`6 × 10⁻¹² C·m, toward the +3 nC charge`, r`1.5 × 10⁻⁶ C/m, toward the −3 nC charge`],
    correctAnswer: 2,
    explanation: r`p = qd = (3 × 10⁻⁹)(2 × 10⁻³) = 6 × 10⁻¹² C·m, pointing from the negative charge toward the positive one. The answers with 1.5 × 10⁻⁶ C/m divide the charge by the separation, and the answers pointing toward the negative charge use the chemistry arrow convention.`,
  },
  [r`If one charge has three times the magnitude of another, it has {{c1::three times}} as many field lines drawn on it.`]: {
    question: r`A field-line diagram shows 8 lines leaving a +2 nC charge. In the same diagram, how should the lines at a −6 nC charge be drawn?`,
    options: [r`24 lines, all leaving the charge`, r`24 lines, all ending on the charge`, r`8 lines, all ending on the charge`, r`72 lines, all ending on the charge`],
    correctAnswer: 1,
    explanation: r`The number of lines is proportional to the size of the charge, so three times the charge gets 3 × 8 = 24 lines, and lines end on a negative charge. Lines leaving belong to a positive charge, 8 lines ignores the larger charge, and 72 scales the count with the square of the charge ratio.`,
  },
  [r`The electric field everywhere inside a uniformly charged spherical shell is {{c1::zero}}.`]: {
    question: r`A thin hollow spherical shell of radius 0.30 m carries +6.0 nC spread uniformly over it. Taking k = 9 × 10⁹ N·m²/C², what is the electric field 0.10 m from the center of the shell?`,
    options: [r`600 N/C`, r`5400 N/C`, r`540 N/C`, r`0 N/C`],
    correctAnswer: 3,
    explanation: r`The point is inside the shell, where a Gaussian sphere encloses no charge, so the field is zero. 5400 N/C treats the shell as a point charge and uses kQ/r² at 0.10 m, 600 N/C is the field at the shell's surface, and 540 comes from kQ/r at 0.10 m.`,
  },
  [r`A charged particle enters a uniform field moving perpendicular to it. Describe its trajectory.`]: {
    question: r`A proton travels horizontally at speed v and enters a region where a uniform electric field points straight down. While it is in the field, what happens to its horizontal velocity component and what shape is its path?`,
    options: [r`It stays at v, and the path is a circular arc`, r`It rises above v, and the path is a parabola`, r`It stays at v, and the path is a parabola`, r`It drops below v, and the path is a straight line`],
    correctAnswer: 2,
    explanation: r`The force is constant and vertical, so the horizontal component stays at v while the proton accelerates downward, giving a parabola just like a projectile. A circular arc needs a force that stays perpendicular to the velocity, as in a magnetic field, and a vertical force cannot change the horizontal speed.`,
  },
  [r`The field of a point charge is $E =$ {{c1::$kQ/r^2$}}, with units written either N/C or V/m.`]: {
    question: r`A small charged bead produces a field of magnitude E at a sensor. The bead's charge is then doubled, and the sensor is moved to twice its original distance from the bead. What does the sensor read now?`,
    options: [r`E`, r`E/4`, r`2E`, r`E/2`],
    correctAnswer: 3,
    explanation: r`E = kQ/r², so doubling the charge multiplies the field by 2 and doubling the distance divides it by 4, giving E/2. An answer of E treats the field as proportional to 1/r, E/4 ignores the larger charge, and 2E ignores the larger distance.`,
  },
  [r`A dipole in a uniform field feels zero net force but a torque $\tau =$ {{c1::$pE\sin\theta$}}.`]: {
    question: r`A molecule with dipole moment 6.0 × 10⁻³⁰ C·m sits in a uniform field of 1.0 × 10⁵ N/C, with its dipole moment at 30° to the field (sin 30° = 0.50, cos 30° = 0.87). What torque acts on it?`,
    options: [r`6.0 × 10⁻²⁵ N·m`, r`5.2 × 10⁻²⁵ N·m`, r`3.0 × 10⁻²⁵ N·m`, r`1.2 × 10⁻²⁴ N·m`],
    correctAnswer: 2,
    explanation: r`τ = pE sin θ = (6.0 × 10⁻³⁰)(1.0 × 10⁵)(0.50) = 3.0 × 10⁻²⁵ N·m. 6.0 × 10⁻²⁵ leaves out the sine, 5.2 × 10⁻²⁵ uses the cosine, and 1.2 × 10⁻²⁴ divides by the sine instead of multiplying by it.`,
  },
  [r`Each ECG lead records the {{c1::projection}} of the heart's dipole vector onto that lead's axis, so a deflection inverts when the vector points away.`]: {
    question: r`At one instant during the heartbeat, the heart's dipole vector points exactly perpendicular to the axis of a particular ECG lead. What does that lead record at that instant?`,
    options: [r`Flat, because the projection on its axis is zero`, r`Maximal upward, because the vector is full length`, r`Maximal downward, because the vector points away`, r`Half-height upward, because half the vector counts`],
    correctAnswer: 0,
    explanation: r`A lead records the projection of the dipole vector onto its own axis, and a vector perpendicular to the axis has zero projection, so the trace is flat. The largest deflections occur when the vector lies along the axis, toward or away from the positive electrode, and no rule gives half the vector at 90°.`,
  },
  [r`Why does SDS-PAGE separate proteins essentially by size alone?`]: {
    question: r`Two proteins are run on the same SDS-PAGE gel: one of 20 kDa whose native net charge is +5, and one of 80 kDa whose native net charge is −12. Which is found farther from the wells at the end of the run, and why?`,
    options: [r`The 80 kDa one, and both move toward the anode`, r`The 20 kDa one, as it alone moves to the cathode`, r`The 80 kDa one, as it alone moves to the anode`, r`The 20 kDa one, and both move toward the anode`],
    correctAnswer: 3,
    explanation: r`SDS coats both proteins with negative charge in proportion to their mass, so native charge no longer matters: both run toward the positive electrode and the gel sieves them by size, with the smaller one moving farther. The other answers let native charge set the direction or let the larger charge win.`,
  },
  [r`Does a charged particle always travel along an electric field line?`]: {
    question: r`In which of these cases does the charged particle's path follow a single electric field line?`,
    options: [r`A proton released from rest between parallel plates`, r`A proton fired sideways between the parallel plates`, r`An electron fired at an angle between parallel plates`, r`An ion released from rest where the field lines curve`],
    correctAnswer: 0,
    explanation: r`A particle traces a field line only if it starts from rest in a field whose lines are straight, as between parallel plates. A particle fired across the field keeps its sideways velocity and follows a parabola that crosses lines, and where lines curve the particle's inertia carries it off the line it started on.`,
  },
  [r`The field just outside a conductor is proportional to the local {{c1::surface charge density}}, which peaks where the surface curves most sharply.`]: {
    question: r`On a charged, isolated conductor, the surface charge density at a flat region is σ and the field just outside that region is E. At a sharp ridge on the same conductor the surface charge density is 4σ. What is the field just outside the ridge?`,
    options: [r`2E`, r`16E`, r`E`, r`4E`],
    correctAnswer: 3,
    explanation: r`The field just outside a conductor is proportional to the local surface charge density, so four times the density gives 4E. 2E takes a square root, 16E squares the factor, and E assumes the field is the same everywhere on the surface, which is true of the potential but not of the field.`,
  },
  [r`Between large parallel plates the field is {{c1::uniform}}, so a test charge feels the same force near either plate.`]: {
    question: r`Two large parallel plates are 10 mm apart. An ion feels an electric force of 2 pN when it is 1 mm from the positive plate. What force does it feel when it is 9 mm from the positive plate?`,
    options: [r`18 pN`, r`2 pN`, r`0.22 pN`, r`0.025 pN`],
    correctAnswer: 1,
    explanation: r`The field between large plates is uniform, so the force qE is the same everywhere in the gap: 2 pN. 18 pN and 0.22 pN scale the force with distance from a plate, and 0.025 pN applies the inverse-square rule of a point charge. Only the potential changes with position.`,
  },
  [r`In isoelectric focusing a protein stops migrating where the pH equals its {{c1::pI}}, because net charge and therefore $F = qE$ go to zero.`]: {
    question: r`A protein with a pI of 6 is loaded at the pH 9 position of an isoelectric focusing gel. What is its net charge there, and where does it go?`,
    options: [r`Positive; it drifts to the cathode and stops at pH 6`, r`Negative; it drifts to the anode and stops at pH 6`, r`Negative; it drifts to the cathode and stops at pH 9`, r`Positive; it drifts to the anode and stops at pH 6`],
    correctAnswer: 1,
    explanation: r`Above its pI a protein has lost protons and is net negative, so it drifts toward the positive electrode, the anode, until it reaches pH 6, where its net charge and the force qE are zero. Positive charge applies below the pI, and a negative protein does not move toward the cathode or stay where it still has charge.`,
  },
  [r`How does electrospray ionization use an electric field to prepare a sample for mass spectrometry?`]: {
    question: r`In electrospray ionization, a charged droplet keeps its charge while its solvent evaporates. Why does the shrinking droplet eventually release charged analyte ions?`,
    options: [r`Repulsion among its charges falls until surface tension wins out`, r`Repulsion among its charges rises until it beats surface tension`, r`Attraction among its charges rises until the droplet collapses`, r`Its total charge leaks away until the analyte is left neutral`],
    correctAnswer: 1,
    explanation: r`The same charge is squeezed onto a smaller droplet, so Coulomb repulsion grows until it exceeds the surface tension holding the droplet together, and charged ions are expelled. Repulsion cannot fall as like charges crowd closer, like charges do not attract, and a neutral analyte could not be detected by the mass spectrometer.`,
  },
  [r`For two charges of opposite sign and unequal size, the electric field is zero only {{c1::outside the pair, beyond the smaller charge}}.`]: {
    question: r`A probe that reads electric field strength is slid along the straight line that passes through a +8 nC bead and a −2 nC bead, including the stretches outside the pair. Where does the probe read zero?`,
    options: [r`At one spot between the beads, nearer the −2 nC bead`, r`At one spot outside the pair, beyond the +8 nC bead`, r`At two spots, one outside the pair on each side of it`, r`At one spot outside the pair, beyond the −2 nC bead`],
    correctAnswer: 3,
    explanation: r`Between opposite charges both fields point toward the negative bead, so they add and cannot cancel. Beyond the +8 nC bead that bead is both nearer and larger, so its field always wins. Only beyond the −2 nC bead can being nearer make up for having less charge, so there is exactly one null spot, on that side.`,
  },
  [r`Charges $+9Q$ and $+Q$ are fixed a distance $d$ apart. Where is the electric field zero?`]: {
    question: r`On the line between two positive charges A and B, the electric field is zero at a point that is 2 cm from A and 6 cm from B. How do the two charges compare?`,
    options: [r`q_B = 3q_A`, r`q_B = q_A/3`, r`q_B = q_A/9`, r`q_B = 9q_A`],
    correctAnswer: 3,
    explanation: r`At the null point kq_A/r_A² = kq_B/r_B², so q_B/q_A = (6/2)² = 9: the farther charge must be the larger one, by the square of the distance ratio. A factor of 3 forgets to square the distance ratio, and the two fractions put the larger charge nearer the null point.`,
  },
  [r`Swapping a positive test charge for a negative one reverses the force on it, but the electric field at that point is {{c1::unchanged}}.`]: {
    question: r`A +3 nC test charge at point P feels an electric force of 6 μN directed north. It is removed and a −9 nC charge is placed at P. What are the field at P and the force on the new charge?`,
    options: [r`2000 N/C south; 18 μN south`, r`6000 N/C south; 18 μN north`, r`2000 N/C north; 18 μN south`, r`2000 N/C north; 6 μN south`],
    correctAnswer: 2,
    explanation: r`E = F/q = (6 × 10⁻⁶)/(3 × 10⁻⁹) = 2000 N/C, north, along the force on a positive charge, and it does not change with the test charge. The −9 nC charge feels F = |q|E = 18 μN against the field, south. A field that flips to the south or triples treats the field as belonging to the test charge, and 6 μN ignores the larger charge.`,
  },
  [r`An ion with charge $3.2 \times 10^{-19}$ C and mass $6.4 \times 10^{-27}$ kg is in a uniform field of $2.0 \times 10^{3}$ N/C. What is its acceleration?`]: {
    question: r`A dust grain of mass 2.0 × 10⁻⁹ kg carries a charge of 4.0 × 10⁻¹² C and sits in a uniform horizontal electric field of 5.0 × 10³ N/C. What horizontal acceleration does the field give it?`,
    options: [r`0.10 m/s²`, r`2.0 × 10⁻⁸ m/s²`, r`4.0 × 10⁻¹⁷ m/s²`, r`10 m/s²`],
    correctAnswer: 3,
    explanation: r`a = qE/m = (4.0 × 10⁻¹²)(5.0 × 10³)/(2.0 × 10⁻⁹) = (2.0 × 10⁻⁸)/(2.0 × 10⁻⁹) = 10 m/s². The value 2.0 × 10⁻⁸ is the force in newtons, not yet divided by the mass, 0.10 comes from dividing the mass by the force, and 4.0 × 10⁻¹⁷ multiplies by the mass.`,
  },
  [r`In gel electrophoresis, toward which electrode does DNA migrate, and which fragments travel farthest?`]: {
    question: r`A student loads DNA samples into wells cut at the end of a gel next to the POSITIVE electrode, then switches on the field. What happens to the DNA fragments?`,
    options: [r`They move the length of the gel toward the negative electrode`, r`They move toward the nearby positive electrode, out of the gel`, r`They stay in the wells, since the field is zero at that end`, r`Only the short ones move, toward the negative electrode`],
    correctAnswer: 1,
    explanation: r`DNA is negatively charged, so the field pushes it toward the positive electrode. With the wells at that end, the fragments leave the gel within a short distance and are never separated. Running toward the negative electrode would need positive molecules, and the field is uniform along the gel, not zero at one end.`,
  },
}
