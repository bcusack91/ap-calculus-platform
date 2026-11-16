import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-magnetism-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What field does a straight current-carrying wire produce?`]: {
    question: r`Several small compasses are placed in a ring on a horizontal card, with a vertical current-carrying wire passing through the center of the ring. Ignoring Earth's field, the needles point:`,
    options: [
      r`radially outward, each one directly away from the wire`,
      r`radially inward, each one directly toward the wire`,
      r`along the ring, each one tangent to a circle about the wire`,
      r`vertically, each one parallel to the current in the wire`,
    ],
    correctAnswer: 2,
    explanation: r`A straight wire's field forms circles around the wire, so each needle lies tangent to the ring, head to tail around it. Radial patterns describe the electric field of a line of charge, not the magnetic field of a current. The field is perpendicular to the current, so the needles cannot point along the wire.`,
  },
  [r`What path does a charge take entering a uniform $B$ field perpendicular?`]: {
    question: r`An electron enters a uniform magnetic field moving perpendicular to the field lines. Why is its path a circle rather than the parabola it would follow in a uniform electric field?`,
    options: [
      r`The magnetic force keeps turning to stay perpendicular to v`,
      r`The magnetic force keeps a fixed direction as the path bends`,
      r`The magnetic force steadily shrinks as the electron slows`,
      r`The magnetic force points along v and so speeds it around`,
    ],
    correctAnswer: 0,
    explanation: r`The magnetic force is always perpendicular to the velocity, so it rotates with the velocity and acts as a constant centripetal force, giving a circle at constant speed. A force of fixed direction is what gives a parabola. The electron does not slow down, and the force is never along the velocity.`,
  },
  [r`Why do magnetic field lines form closed loops?`]: {
    question: r`An imaginary closed box is drawn around just the north end of a bar magnet, cutting through the magnet's middle. What is the net magnetic flux through the surface of the box?`,
    options: [
      r`Positive, since the north pole is a source of field lines`,
      r`Negative, since field lines return into the magnet there`,
      r`Positive, since more lines leave the end than the middle`,
      r`Zero, since every line leaving the box also enters it`,
    ],
    correctAnswer: 3,
    explanation: r`Magnetic field lines are closed loops with no starting point, because there are no magnetic monopoles. Every line that leaves the box through the north end comes back in through the cut face inside the magnet, so the net flux is zero. Treating the north pole as a source or sink of lines confuses it with an electric charge.`,
  },
  [r`Give the magnetic force on a moving charge.`]: {
    question: r`A charged particle moves perpendicular to a uniform magnetic field. Its speed is then doubled and its direction changed so that its velocity makes a 30° angle with the field (sin 30° = 0.5). The magnetic force on it:`,
    options: [r`doubles`, r`is unchanged`, r`is halved`, r`quadruples`],
    correctAnswer: 1,
    explanation: r`The force is qvB sin θ. Doubling v multiplies it by 2, and going from sin 90° = 1 to sin 30° = 0.5 multiplies it by one half, so the two changes cancel. Doubling ignores the angle, halving ignores the speed, and quadrupling treats the angle factor as another doubling.`,
  },
  [r`Why does the magnetic force do no work?`]: {
    question: r`A magnetic force of constant magnitude 3 × 10⁻¹⁵ N bends an ion along a curved path 2 m long in a uniform field. How much work does the magnetic force do on the ion?`,
    options: [
      r`0 J, since the force is perpendicular to every step`,
      r`6 × 10⁻¹⁵ J, since work is force times path length`,
      r`1.5 × 10⁻¹⁵ J, since work is force over path length`,
      r`−6 × 10⁻¹⁵ J, since the force opposes the motion`,
    ],
    correctAnswer: 0,
    explanation: r`Work counts only the force component along the displacement, and the magnetic force is always perpendicular to the velocity, so it does zero work however long the path. Multiplying force by path length assumes the force lies along the motion. The negative answer treats the force like friction, and dividing force by distance is not work at all.`,
  },
  [r`The magnetic field inside a long straight wire's center is:`]: {
    question: r`A thick straight wire of radius R carries a steady current spread uniformly over its cross-section. At which of these locations is the magnetic field weakest?`,
    options: [
      r`At the wire's surface, a distance R from the axis`,
      r`Halfway out, a distance R/2 from the central axis`,
      r`On the central axis, at the very middle of the wire`,
      r`Just outside the surface, slightly beyond distance R`,
    ],
    correctAnswer: 2,
    explanation: r`On the axis the contributions from current on all sides cancel by symmetry, so the field there is exactly zero. Moving outward, more current is enclosed and the field grows, reaching its largest value at the surface. Just outside the surface it is only slightly below that maximum.`,
  },
  [r`The strength of a wire's magnetic field varies with distance as:`]: {
    question: r`A sensor mounted 2 cm from a long straight power cable reads 40 μT. With the cable current unchanged, how far from the cable must the sensor be moved for its reading to drop to 10 μT?`,
    options: [r`4 cm`, r`0.5 cm`, r`16 cm`, r`8 cm`],
    correctAnswer: 3,
    explanation: r`The field of a long wire falls as 1/r, so one quarter of the field needs four times the distance: 8 cm. The 4 cm answer assumes an inverse-square law, as for a point charge. The 0.5 cm answer moves closer, where the field is stronger, and 16 cm applies the factor of four twice.`,
  },
  [r`A magnetic field cannot change a particle's:`]: {
    question: r`An ion crosses a region containing only a uniform magnetic field and leaves traveling in a new direction. Comparing the ion before and after the region:`,
    options: [
      r`its velocity and its kinetic energy have both changed`,
      r`its velocity has changed but its kinetic energy has not`,
      r`its kinetic energy has changed but its velocity has not`,
      r`its speed has changed but its momentum vector has not`,
    ],
    correctAnswer: 1,
    explanation: r`The magnetic force is perpendicular to the velocity, so it turns the ion without doing work: direction, and therefore velocity and momentum, change, while speed and kinetic energy stay the same. A change in kinetic energy would need a force component along the motion. A new direction means the velocity and momentum vectors cannot be unchanged.`,
  },
  [r`Magnetic force is maximum when velocity and field are:`]: {
    question: r`A uniform magnetic field points north. An ion gun can fire identical ions at the same speed in any direction. Which firing direction gives the largest magnetic force?`,
    options: [
      r`Due north, along the field lines`,
      r`Straight up, at 90° to the field`,
      r`Due south, against the field lines`,
      r`Northeast, at 45° to the field`,
    ],
    correctAnswer: 1,
    explanation: r`The force is qvB sin θ, largest when the velocity is perpendicular to the field, as for an ion fired straight up through a northward field. Firing north or south gives sin θ = 0 and no force at all. At 45° the force is only about 71% of the maximum.`,
  },
  [r`How do you determine which end of a solenoid is its north pole?`]: {
    question: r`You look straight at one end of a solenoid and see the current in its loops circulating counterclockwise. The end facing you is the solenoid's:`,
    options: [
      r`north pole, with field lines emerging toward you`,
      r`south pole, with field lines emerging toward you`,
      r`north pole, with field lines entering away from you`,
      r`south pole, with field lines entering away from you`,
    ],
    correctAnswer: 0,
    explanation: r`Curl the right hand's fingers counterclockwise with the current and the thumb points toward you, so the field emerges from this end, and field lines leave a coil at its north pole. A clockwise current would make this end the south pole, with lines entering. The two remaining answers pair a pole with the wrong direction of field lines.`,
  },
  [r`How does Earth's magnetic field compare in strength with a clinical MRI field?`]: {
    question: r`A wire segment carrying a fixed current feels a 3 N force when held perpendicular to a 1.5 T MRI field. Held the same way in Earth's field of about 5 × 10⁻⁵ T, the same wire feels about:`,
    options: [r`1 × 10⁻⁵ N`, r`9 × 10⁴ N`, r`1 × 10⁻⁴ N`, r`2.5 × 10⁻⁵ N`],
    correctAnswer: 2,
    explanation: r`Force on a wire is proportional to field strength, and Earth's field is 1.5 / (5 × 10⁻⁵) = 3 × 10⁴ times weaker, so the force is 3 N / (3 × 10⁴) = 1 × 10⁻⁴ N. The 9 × 10⁴ N answer inverts the ratio, as if Earth's field were the stronger one. The other two come from arithmetic slips with the powers of ten or with which number is divided.`,
  },
  [r`A charge moving perpendicular to a uniform field travels in a circle of radius $r =$ {{c1::$mv/(qB)$}}.`]: {
    question: r`An ion circles with a radius of 10 cm in a uniform magnetic field. The field is then made four times stronger and the ion's speed is doubled. Its new radius is:`,
    options: [r`20 cm`, r`80 cm`, r`2.5 cm`, r`5 cm`],
    correctAnswer: 3,
    explanation: r`Radius is $mv/(qB)$, proportional to speed and inversely proportional to field, so it changes by 2/4 = one half, to 5 cm. The 20 cm answer inverts both dependences, 80 cm multiplies by both factors, and 2.5 cm accounts for the field but forgets the doubled speed.`,
  },
  [r`For a negative charge, the magnetic force points {{c1::opposite}} to the direction given by the right-hand rule.`]: {
    question: r`A chloride ion, Cl⁻, moves toward the right across a page while a uniform magnetic field points toward the top of the page. The magnetic force on the ion points:`,
    options: [r`into the page`, r`out of the page`, r`down the page`, r`to the left`],
    correctAnswer: 0,
    explanation: r`Fingers to the right along the velocity, curled toward the top of the page, put the thumb out of the page: that is the force on a positive charge. Chloride is negative, so its force is reversed, into the page. Forces down the page or to the left would lie along the field or the velocity, and the magnetic force is perpendicular to both.`,
  },
  [r`A proton moves east through a magnetic field pointing north. Which way is the magnetic force?`]: {
    question: r`A proton travels vertically upward through a region where the magnetic field is horizontal and points north. The magnetic force on the proton points:`,
    options: [r`East`, r`South`, r`West`, r`Downward`],
    correctAnswer: 2,
    explanation: r`Point the right hand's fingers up along the velocity and curl them toward north: the thumb points west, and a proton is positive so that is the force. East is the result for a negative charge or a left hand. South and downward lie along the line of the field or of the velocity, and the force must be perpendicular to both.`,
  },
  [r`A proton moves exactly parallel to a magnetic field. What magnetic force does it experience?`]: {
    question: r`A proton is fired due south at speed v through a uniform magnetic field B that points due north. The magnetic force on the proton is:`,
    options: [
      r`qvB, directed toward the east`,
      r`qvB, directed toward the west`,
      r`qvB, directed vertically upward`,
      r`zero, with no deflection at all`,
    ],
    correctAnswer: 3,
    explanation: r`The velocity is antiparallel to the field, so the angle is 180° and sin 180° = 0: no component of the velocity crosses the field, and there is no force. A force of qvB applies only when the velocity is perpendicular to the field. Moving against the field lines is no different from moving along them.`,
  },
  [r`A molecule such as $O_2$ with unpaired electrons is {{c1::paramagnetic}} and is drawn into a magnetic field.`]: {
    question: r`Liquid nitrogen (N₂, all electrons paired) and liquid oxygen (O₂, two unpaired electrons) are each poured between the poles of a strong magnet. What is observed?`,
    options: [
      r`Nitrogen clings between the poles; oxygen runs through`,
      r`Oxygen clings between the poles; nitrogen runs through`,
      r`Both liquids cling between the poles of the magnet`,
      r`Both liquids run through, since neither contains iron`,
    ],
    correctAnswer: 1,
    explanation: r`Unpaired electrons make O₂ paramagnetic, so it is drawn into the field and held between the poles. N₂ has every electron paired, is diamagnetic, and pours straight through. Attraction to a magnet does not require iron, only unpaired electrons.`,
  },
  [r`In a cyclotron, why is the orbital period of a charged particle independent of its speed?`]: {
    question: r`In a cyclotron, a proton's speed is doubled between two moments while the magnetic field stays fixed. Comparing its orbit at the later moment with the earlier one:`,
    options: [
      r`the period is halved and the radius is unchanged`,
      r`the period is doubled and the radius is doubled`,
      r`the period is unchanged and the radius is doubled`,
      r`the period is unchanged and the radius is halved`,
    ],
    correctAnswer: 2,
    explanation: r`The period $T = 2\pi m/(qB)$ contains no speed, because a faster proton travels a proportionally larger circle: radius $mv/(qB)$ doubles while the time per orbit stays the same. A halved period assumes the circle keeps its size, a doubled period ignores the higher speed, and a halved radius inverts the radius relation.`,
  },
  [r`Inside a long solenoid the field is $B =$ {{c1::$\mu_0 nI$}}, uniform and directed along the axis.`]: {
    question: r`Solenoid P has 500 turns wound evenly along 0.5 m. Solenoid Q has 500 turns wound evenly along 0.25 m and has twice the radius of P. Both carry the same current. The field inside Q is:`,
    options: [
      r`twice that inside P, since Q has twice the turns per meter`,
      r`equal to that inside P, since both have 500 turns in total`,
      r`half that inside P, since Q's larger radius spreads the field`,
      r`four times that inside P, since both length and radius count`,
    ],
    correctAnswer: 0,
    explanation: r`The field is $\mu_0 nI$, where n is turns per unit length: P has 1000 turns per meter and Q has 2000, so Q's field is twice as large. Total turns do not set the field, only their density along the axis. The radius does not appear in the formula at all, so it neither weakens nor strengthens the field.`,
  },
  [r`A charged particle enters a field at an angle between $0$ and $90$ degrees. What path does it follow?`]: {
    question: r`An ion enters a uniform magnetic field with a velocity component of 3 × 10⁵ m/s along the field and 4 × 10⁵ m/s perpendicular to it. Which describes its motion in the field?`,
    options: [
      r`It circles at 5 × 10⁵ m/s and does not drift along the field at all`,
      r`It circles at 3 × 10⁵ m/s while drifting along the field at 4 × 10⁵ m/s`,
      r`It moves in a straight line at 5 × 10⁵ m/s, undeflected by the field`,
      r`It circles at 4 × 10⁵ m/s while drifting along the field at 3 × 10⁵ m/s`,
    ],
    correctAnswer: 3,
    explanation: r`Only the perpendicular component feels a force, so the ion circles at 4 × 10⁵ m/s, while the parallel component of 3 × 10⁵ m/s carries on unchanged: together they make a helix. Swapping the two components puts the circular motion in the wrong one. Pure circling ignores the parallel part, and a straight line ignores the force on the perpendicular part.`,
  },
  [r`How do paramagnetic and diamagnetic materials differ at the electron level?`]: {
    question: r`Cu²⁺ has one unpaired electron, while Zn²⁺ has all of its electrons paired. When samples of their salts are placed near a strong magnet:`,
    options: [
      r`the zinc salt is weakly attracted and the copper salt weakly repelled`,
      r`the copper salt is weakly attracted and the zinc salt weakly repelled`,
      r`both salts are weakly attracted, since both contain metal ions`,
      r`both salts stay magnetized after the magnet is taken away`,
    ],
    correctAnswer: 1,
    explanation: r`An unpaired electron makes the copper ion paramagnetic, weakly attracted into a field, while fully paired electrons make the zinc ion diamagnetic, weakly repelled. Being a metal ion does not decide the behavior: electron pairing does. Keeping magnetization after the field is removed is a property of ferromagnets, not of either salt.`,
  },
  [r`Why does deoxygenated blood change the MRI signal in functional imaging?`]: {
    question: r`A brain region becomes active and receives more oxygenated blood than it consumes. In that region, what happens to the deoxyhemoglobin fraction and to the MRI signal?`,
    options: [
      r`Deoxyhemoglobin falls, the field is distorted less, and signal rises`,
      r`Deoxyhemoglobin rises, the field is distorted more, and signal rises`,
      r`Deoxyhemoglobin falls, the field is distorted less, and signal falls`,
      r`Deoxyhemoglobin rises, the field is distorted more, and signal falls`,
    ],
    correctAnswer: 0,
    explanation: r`Deoxyhemoglobin is paramagnetic and distorts the local field, which makes nearby protons dephase faster and weakens the signal. The oversupply of oxygenated blood dilutes it, so the distortion drops and the signal rises. The answers with deoxyhemoglobin rising assume activity uses up more oxygen than is delivered, and a fall in distortion cannot lower the signal.`,
  },
  [r`A vertical wire carries current straight upward. You stand east of it. Which way does its magnetic field point at your position?`]: {
    question: r`A vertical cable in a mine shaft carries current straight downward. A surveyor stands due north of the cable. At the surveyor's position, the cable's magnetic field points:`,
    options: [r`North`, r`West`, r`Downward`, r`East`],
    correctAnswer: 3,
    explanation: r`With the right thumb pointing down along the current, the fingers curl clockwise as seen from above, and on the north side of the cable that curl is heading east. West is the answer for an upward current. The field circles the cable, so it cannot point along the current or straight away from the cable toward the north.`,
  },
  [r`Ferromagnets stay magnetized after the external field is removed because their aligned {{c1::domains}} persist.`]: {
    question: r`A steel needle stroked with a magnet still picks up pins a week later. An aluminum rod (paramagnetic) treated the same way picks up nothing once the magnet is removed. The difference arises because:`,
    options: [
      r`steel has unpaired electrons, while aluminum has none at all`,
      r`steel is a better conductor, so induced currents keep flowing`,
      r`steel's aligned domains persist, while aluminum's moments randomize`,
      r`steel is repelled by fields, while aluminum is drawn into them`,
    ],
    correctAnswer: 2,
    explanation: r`In a ferromagnet such as steel, whole domains of aligned atomic moments stay aligned after the external field is gone. A paramagnet's moments line up only while the field is on and randomize as soon as it is removed. Aluminum does have unpaired electrons, lasting magnetism is not an induced current, and neither material is repelled by a field.`,
  },
}
