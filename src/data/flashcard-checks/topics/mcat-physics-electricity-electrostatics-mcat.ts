import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-electrostatics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`State Coulomb's law and what it predicts about the force between two charges.`]: {
    question: r`A +q charge and a −q charge attract each other with a force of 18 N when they are a distance d apart. They are then moved until they are 3d apart. What is the force between them now?`,
    options: [r`6 N, still attractive`, r`162 N, still attractive`, r`2 N, still attractive`, r`2 N, now repulsive`],
    correctAnswer: 2,
    explanation: r`Coulomb's force is inverse-square, so tripling the separation divides the force by 9, giving 2 N, and opposite charges still attract. 6 N comes from dividing by 3 instead of 9, 162 N comes from multiplying by 9, and distance never changes attraction into repulsion.`,
  },
  [r`Two point charges of +2 μC and -4 μC are separated by 0.3 m. Is the force attractive or repulsive, and what is its magnitude? (k = $9 \times 10^{9}$ $N\cdot m^{2}/C^{2}$)`]: {
    question: r`A +5 nC charge and a −2 nC charge are fixed 0.03 m apart. Taking k = 9 × 10⁹ N·m²/C², what is the direction and size of the force between them?`,
    options: [r`Repulsive, 1 × 10⁻⁴ N`, r`Attractive, 1 × 10⁻⁴ N`, r`Attractive, 3 × 10⁻⁶ N`, r`Repulsive, 3 × 10⁻⁶ N`],
    correctAnswer: 1,
    explanation: r`F = k|q₁q₂|/r² = (9 × 10⁹)(10 × 10⁻¹⁸)/(9 × 10⁻⁴) = 1 × 10⁻⁴ N, and opposite charges attract. The 3 × 10⁻⁶ N values divide by r instead of r², and the repulsive answers treat the pair as like charges.`,
  },
  [r`Like charges ___ and opposite charges ___:`]: {
    question: r`Three small charged spheres X, Y and Z each carry a net charge. X repels Y, and Y attracts Z. If X is negative, what are the signs of Y and Z?`,
    options: [r`Y is negative and Z is positive`, r`Y is positive and Z is negative`, r`Y is negative and Z is negative`, r`Y is positive and Z is positive`],
    correctAnswer: 0,
    explanation: r`X repels Y, so Y has the same sign as X: negative. Y attracts Z, so Z has the opposite sign to Y: positive. The other answers come from reversing one or both rules, treating repulsion as a sign of opposite charges or attraction as a sign of like charges.`,
  },
  [r`Charge is always:`]: {
    question: r`Two identical metal spheres carry +6 nC and −2 nC. They are touched together briefly and then separated, with no charge lost to the surroundings. What charge is on each sphere afterward?`,
    options: [r`+2 nC on each sphere`, r`+4 nC on each sphere`, r`+8 nC on each sphere`, r`0 nC on each sphere`],
    correctAnswer: 0,
    explanation: r`Charge is conserved, so the total of +6 + (−2) = +4 nC is shared equally by identical spheres: +2 nC each. +4 nC forgets to split the total, +8 nC adds the magnitudes and ignores the sign, and 0 nC assumes that opposite charges always cancel completely.`,
  },
  [r`One charge is tripled and the separation is doubled. By what factor does the Coulomb force change?`]: {
    question: r`Two charges exert a force F on each other. One charge is cut to half its value, and the separation is also cut in half. What is the new force?`,
    options: [r`F`, r`2F`, r`F/8`, r`4F`],
    correctAnswer: 1,
    explanation: r`Halving one charge multiplies the force by ½, and halving the separation multiplies it by 2² = 4, so the result is 2F. F treats the distance dependence as 1/r, F/8 puts the distance factor upside down, and 4F forgets the change in charge.`,
  },
  [r`Because Coulomb's law is an inverse-square law, halving the separation multiplies the force by {{c1::4}}.`]: {
    question: r`Two ions repel each other with a force of 5 pN when they are 6 nm apart. What is the force when they are 3 nm apart?`,
    options: [r`20 pN`, r`10 pN`, r`2.5 pN`, r`1.25 pN`],
    correctAnswer: 0,
    explanation: r`Halving the separation multiplies an inverse-square force by 4, so the force becomes 20 pN. 10 pN treats the force as proportional to 1/r, and 2.5 pN and 1.25 pN make the force weaker even though the ions moved closer together.`,
  },
  [r`Compare Coulomb's law with Newton's law of gravitation.`]: {
    question: r`Two protons are a distance r apart, and the electric force between them is about 10³⁶ times the gravitational force between them. The protons are then moved to a distance 2r. About how large is the ratio of the two forces now?`,
    options: [r`About 4 × 10³⁶, since gravity weakens faster`, r`About 2.5 × 10³⁵, since gravity weakens slower`, r`About 10³⁶, since both forces fall off as 1/r²`, r`About 2 × 10³⁶, since only gravity depends on r`],
    correctAnswer: 2,
    explanation: r`Coulomb's law and the law of gravitation both vary as 1/r², so doubling the distance cuts each force to one quarter and leaves their ratio at about 10³⁶. The other answers give the two forces different distance dependences, which is the one feature the two laws share; they differ in strength and in that gravity only attracts.`,
  },
  [r`Two $1$ C charges sit $1$ m apart. What force results, and what does the answer teach you?`]: {
    question: r`Two small spheres each carry 1 mC of charge and sit 1 m apart. Taking k = 9 × 10⁹ N·m²/C², what force does each exert on the other?`,
    options: [r`9 × 10⁶ N`, r`9 × 10³ N`, r`9 × 10⁻³ N`, r`9 × 10⁹ N`],
    correctAnswer: 1,
    explanation: r`F = kq₁q₂/r² = (9 × 10⁹)(10⁻³)(10⁻³)/1² = 9 × 10³ N, still about the weight of a small car. 9 × 10⁶ N applies the milli prefix to only one charge, 9 × 10⁻³ N treats the charges as microcoulombs, and 9 × 10⁹ N is the force for a full coulomb each.`,
  },
  [r`Why do ions cross the membrane through protein channels rather than dissolving through the lipid bilayer?`]: {
    question: r`A researcher wants bare K⁺ ions to cross an artificial lipid membrane more easily. Which change would lower the electrostatic energy cost of crossing the most?`,
    options: [r`Lining a pore through it with polar groups`, r`Packing its core with longer nonpolar tails`, r`Stripping the ions' water shells beforehand`, r`Lowering the core's dielectric constant`],
    correctAnswer: 0,
    explanation: r`The cost comes from putting a bare charge in the low-dielectric hydrocarbon core. Polar groups lining a pore stand in for the ion's water shell, which is how channels work. Longer nonpolar tails and a lower dielectric constant raise the cost, and removing the water shell is the costly step itself.`,
  },
  [r`Water's dielectric constant of about {{c1::80}} weakens the Coulomb attraction between dissolved ions by roughly that factor.`]: {
    question: r`Two ions attract each other with a force of 8 × 10⁻¹⁰ N in a vacuum. They are placed at the same separation in pure water. About what is the force now?`,
    options: [r`1 × 10⁻¹¹ N`, r`6.4 × 10⁻⁸ N`, r`9 × 10⁻¹¹ N`, r`1.25 × 10⁻¹³ N`],
    correctAnswer: 0,
    explanation: r`Water's dielectric constant is about 80, and the Coulomb force is divided by it: (8 × 10⁻¹⁰)/80 = 1 × 10⁻¹¹ N. 6.4 × 10⁻⁸ N multiplies by 80, 9 × 10⁻¹¹ N divides by the square root of 80, and 1.25 × 10⁻¹³ N divides by 80².`,
  },
  [r`Why does a salt bridge buried in a protein's core stabilize the fold more than the same pair on the surface?`]: {
    question: r`An ion pair sits at the same separation in two places: on a protein's surface, where water gives a dielectric constant of 80, and in the protein's core, where the dielectric constant is 4. How does the attraction in the core compare with that on the surface?`,
    options: [r`20 times weaker`, r`20 times stronger`, r`76 times stronger`, r`320 times stronger`],
    correctAnswer: 1,
    explanation: r`The Coulomb force is inversely proportional to the dielectric constant, so the core force is 80/4 = 20 times the surface force. That is why a buried salt bridge stabilizes the fold more. 20 times weaker inverts the dependence, 76 subtracts the constants, and 320 multiplies them.`,
  },
  [r`Coulomb's constant is $k = 1/(4\pi\epsilon_0) = 9\times 10^9$, with permittivity of free space $\epsilon_0 =$ {{c1::$8.85\times 10^{-12}$}} in SI units.`]: {
    question: r`A parallel-plate capacitor has plates of area 1.0 m² separated by 8.85 mm of vacuum. Using C = ε₀A/d, what is its capacitance?`,
    options: [r`1.0 × 10⁻¹² F`, r`1.0 × 10¹² F`, r`7.8 × 10⁻¹⁴ F`, r`1.0 × 10⁻⁹ F`],
    correctAnswer: 3,
    explanation: r`ε₀ = 8.85 × 10⁻¹² in SI units, so C = (8.85 × 10⁻¹²)(1.0)/(8.85 × 10⁻³) = 1.0 × 10⁻⁹ F. 1.0 × 10⁻¹² F leaves the gap in millimeters, 1.0 × 10¹² F uses Coulomb's constant 9 × 10⁹ in place of ε₀, and 7.8 × 10⁻¹⁴ F multiplies by the gap instead of dividing.`,
  },
  [r`A plastic comb picks up $2.0 \times 10^{10}$ extra electrons. What is its net charge? ($e = 1.6 \times 10^{-19}$ C)`]: {
    question: r`An initially neutral glass bead ends with a charge of +4.8 × 10⁻¹² C after it is rubbed with a cloth. What happened to the bead? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`It gained 3.0 × 10⁷ electrons`, r`It gained 3.0 × 10⁷ protons`, r`It lost 3.0 × 10⁷ protons`, r`It lost 3.0 × 10⁷ electrons`],
    correctAnswer: 3,
    explanation: r`n = |q|/e = (4.8 × 10⁻¹²)/(1.6 × 10⁻¹⁹) = 3.0 × 10⁷, and a positive charge means electrons are missing. Gaining electrons would make the bead negative, and protons are locked in nuclei, so rubbing never moves them in either direction.`,
  },
  [r`A neutral rubber rod is rubbed with neutral fur and ends with $-5$ nC. The fur ends with {{c1::$+5$ nC}}, because charge is moved, never created.`]: {
    question: r`Three neutral objects X, Y and Z are isolated from everything else and rubbed against one another. Afterward X carries +7 nC and Y carries −4 nC. What is the charge on Z?`,
    options: [r`+3 nC`, r`−11 nC`, r`−3 nC`, r`0 nC`],
    correctAnswer: 2,
    explanation: r`The three objects started with zero total charge and are isolated, so the total must still be zero: +7 − 4 + q = 0 gives q = −3 nC. +3 nC has the sign backwards, −11 nC adds the two magnitudes, and 0 nC would leave a total of +3 nC created from nothing.`,
  },
  [r`A negatively charged rod is used to charge a neutral metal sphere. What sign does the sphere end with by conduction, and what sign by induction?`]: {
    question: r`A metal sphere on an insulating stand is charged with a positively charged glass rod. In trial 1 the rod touches the sphere. In trial 2 the rod is only held nearby while the sphere is briefly grounded. What sign does the sphere end with in each trial?`,
    options: [r`Negative in trial 1 and positive in trial 2`, r`Positive in trial 1 and positive in trial 2`, r`Negative in trial 1 and negative in trial 2`, r`Positive in trial 1 and negative in trial 2`],
    correctAnswer: 3,
    explanation: r`Touching shares the rod's own charge, so conduction leaves the same sign as the rod: positive. Induction pulls electrons up from the ground, leaving the opposite sign: negative. The other answers reverse the two rules or apply a single rule to both trials.`,
  },
  [r`A positive rod is held near a metal sphere that is connected to ground. Which way do electrons flow in the ground wire, and which is removed first, the wire or the rod?`]: {
    question: r`The metal knob of an electroscope is joined to ground by a wire while a positively charged rod is held close to it, without touching. The wire is cut, and only then is the rod taken away. What charge is the knob left with, and where did that charge come from?`,
    options: [r`Positive, because electrons drained into the ground`, r`Positive, because protons crossed over from the rod`, r`Negative, because electrons jumped across from the rod`, r`Negative, because electrons came up from the ground`],
    correctAnswer: 3,
    explanation: r`The positive rod attracts electrons, so they flow up the wire from the ground onto the knob. Cutting the wire first traps them there, and the knob stays negative after the rod leaves. Electrons would drain into the ground only for a negative rod, nothing crosses from a rod that never touches, and protons do not move through metals.`,
  },
  [r`Why does a charged rod attract a neutral scrap of paper?`]: {
    question: r`A positively charged rod is brought close to an empty, neutral aluminum can lying on its side on a table, without touching it. What does the can do?`,
    options: [r`Rolls away from the rod, as its near side turns positive`, r`Stays put, as a neutral object feels no electric force`, r`Rolls toward the rod, as its near side turns negative`, r`Rolls toward the rod, as it gains a net negative charge`],
    correctAnswer: 2,
    explanation: r`Electrons in the metal shift toward the rod, so the near side is negative and the far side positive. The nearer opposite charge is pulled harder than the farther like charge is pushed, giving a net attraction. The can stays neutral overall, since nothing touched it, and its near side cannot turn positive next to a positive rod.`,
  },
  [r`A charged object attracts both oppositely charged objects and neutral ones, so only {{c1::repulsion}} proves that two objects are both charged.`]: {
    question: r`A negatively charged rod is brought near two hanging foil balls in turn. Ball P swings toward the rod and ball Q swings away from it. What can be concluded about the balls?`,
    options: [r`Q is negative; P has to be positive`, r`Q is negative; P is positive or neutral`, r`Q is positive; P has to be negative`, r`Q is neutral; P is positive or neutral`],
    correctAnswer: 1,
    explanation: r`Q is repelled, which needs a charge of the same sign as the rod, so Q is negative. P is attracted, which happens for a positive ball and also for a neutral ball that is polarized, so P cannot be pinned down. A neutral or positive Q would be attracted, not repelled.`,
  },
  [r`Two identical metal spheres carry $-10$ nC and $+2$ nC. They touch and are separated. What is the charge on each?`]: {
    question: r`Two identical metal spheres touch and are separated, and each is then found to carry −3 μC. Before the contact, one of them carried +5 μC. What did the other one carry?`,
    options: [r`−8 μC`, r`−6 μC`, r`−11 μC`, r`−1 μC`],
    correctAnswer: 2,
    explanation: r`Each sphere ends with half the total, so the total was −6 μC, and +5 + q = −6 gives q = −11 μC. −8 μC subtracts 5 from −3 without doubling first, −6 μC is the total and ignores the first sphere's own charge, and −1 μC adds 5 to the total when it should be subtracted.`,
  },
  [r`How do conductors and insulators differ, and which one is a cell membrane?`]: {
    question: r`An aluminum rod and a rubber rod of the same size each hang from dry silk threads. One end of each rod is touched briefly with a charged object, so that end gains extra electrons. A few seconds later, which rod carries excess charge at its far end?`,
    options: [r`Only the rubber rod, because its charge is free to move`, r`Both rods, because like charges always repel apart`, r`Neither rod, because charge stays where it is placed`, r`Only the aluminum rod, because its charge is free to move`],
    correctAnswer: 3,
    explanation: r`Aluminum is a conductor, so the added electrons repel one another and spread over the whole surface, reaching the far end. Rubber is an insulator, so its extra electrons stay at the end that was touched. Naming the rubber rod swaps the two materials, and the answers that treat both rods alike ignore the difference between a conductor and an insulator.`,
  },
  [r`A $+8$ μC charge pushes a $+1$ μC charge with a force of $6$ N. The force that the $+1$ μC charge exerts on the $+8$ μC charge is {{c1::$6$ N}}.`]: {
    question: r`A +2 nC bead and a −6 nC bead are released from rest near each other. The −6 nC bead has three times the mass of the other. Compared with the +2 nC bead, the −6 nC bead has:`,
    options: [r`The same force on it and one third of the acceleration`, r`Three times the force on it and the same acceleration`, r`One third of the force on it and one ninth the acceleration`, r`The same force on it and the same size of acceleration`],
    correctAnswer: 0,
    explanation: r`The two beads exert forces of equal size on each other, whatever their charges. With the same force and three times the mass, a = F/m is one third as large. Tripling or cutting the force comes from tying the force to each bead's own charge, and equal accelerations would need equal masses.`,
  },
  [r`To make the Coulomb force between two charges $9$ times larger by changing only the distance, the separation must become {{c1::one third}} of its original value.`]: {
    question: r`Two ions a distance r apart attract with force F. One ion is swapped for an ion with four times the charge. How must the separation change for the force to stay equal to F?`,
    options: [r`It must be raised to 4r`, r`It must be doubled, to 2r`, r`It must be halved, to r/2`, r`It must be raised to 16r`],
    correctAnswer: 1,
    explanation: r`Four times the charge multiplies the force by 4, so the distance must supply a factor of 1/4, and since F goes as 1/r², that means doubling r. Going to 4r treats the force as 1/r and would cut it to F/4, 16r squares the wrong way, and halving r would raise the force to 16F.`,
  },
  [r`A charge feels a $5.0$ N force along $+x$ from one neighbor and a $12$ N force along $+y$ from another. What is the size of the net force on it?`]: {
    question: r`A +1 μC charge at the origin is attracted with 9 N by a negative charge located on the +x axis and repelled with 12 N by a positive charge located on the +y axis. What is the net force on it?`,
    options: [r`21 N, pointing between +x and −y`, r`15 N, pointing between +x and +y`, r`15 N, pointing between +x and −y`, r`3 N, pointing along the −y axis`],
    correctAnswer: 2,
    explanation: r`The attraction points along +x and the repulsion points along −y, away from the charge on the +y axis. These are perpendicular, so the size is √(9² + 12²) = 15 N, directed between +x and −y. 21 N adds the magnitudes, 3 N subtracts them, and a direction toward +y treats the repulsion as an attraction.`,
  },
  [r`Four equal positive charges sit at the corners of a square. What net force does a charge at the exact center feel, and why?`]: {
    question: r`Three equal positive charges are fixed at the corners of an equilateral triangle. A fourth positive charge is placed at the midpoint of one side. In which direction is the net force on it?`,
    options: [r`Straight toward the opposite corner`, r`Along the side, toward one of its ends`, r`No direction: the net force is zero`, r`Straight away from the opposite corner`],
    correctAnswer: 3,
    explanation: r`The two charges at the ends of that side are equally far away and push in opposite directions, so they cancel. That leaves the charge at the opposite corner, which repels the fourth charge straight away from itself. Toward the corner would be an attraction, and the net force would be zero only at the triangle's center.`,
  },
  [r`Charges of $+1.0$ μC and $+4.0$ μC are fixed $0.60$ m apart. Where does a third charge feel zero net force?`]: {
    question: r`Two fixed positive charges, +2.0 nC and +18 nC, sit 0.80 m apart. A bead carrying −5 nC is free to slide along the straight line joining them. How far from the +2.0 nC charge does the bead feel zero net force?`,
    options: [r`0.20 m`, r`0.60 m`, r`0.080 m`, r`0.40 m`],
    correctAnswer: 0,
    explanation: r`Balance needs |q₁|/r₁² = |q₂|/r₂², so 2.0/r₁² = 18/r₂² and r₂ = 3r₁. With r₁ + r₂ = 0.80 m, r₁ = 0.20 m, nearer the smaller charge; the bead's own charge cancels out. 0.60 m is the distance from the larger charge, 0.080 m splits the gap in the ratio 1 to 9 without the square root, and 0.40 m is the midpoint, which only works for equal charges.`,
  },
}
