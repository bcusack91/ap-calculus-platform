import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-atomic-structure-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Define effective nuclear charge ($Z_{eff}$).`]: {
    question: r`Potassium ($Z = 19$) and calcium ($Z = 20$) each have 18 core electrons beneath a 4s valence shell. Treating only the core electrons as shielding, whose valence electrons are held more tightly, and what net charge do they feel?`,
    options: [r`potassium's, feeling about +1 against +2`, r`calcium's, feeling about +20 against +19`, r`calcium's, feeling about +2 against +1`, r`neither, as both feel a charge of about +18`],
    correctAnswer: 2,
    explanation: r`$Z_{eff} = Z - S$ gives $19 - 18 = +1$ for K and $20 - 18 = +2$ for Ca, so calcium's valence electrons feel the larger pull and are held more tightly. Choosing potassium treats the smaller effective charge as the stronger hold. +20 and +19 are the full nuclear charges with no shielding, and +18 is the shielding $S$ itself, not what is left over.`,
  },
  [r`State Hund's rule.`]: {
    question: r`Ground-state phosphorus ends in $3p^3$ and ground-state sulfur ends in $3p^4$. Which atom has more unpaired electrons?`,
    options: [r`P, with 3 unpaired against 2 for S`, r`S, with 4 unpaired against 3 for P`, r`P, with 3 unpaired against 0 for S`, r`S, with 2 unpaired against 1 for P`],
    correctAnswer: 0,
    explanation: r`Three p electrons go one into each of the three 3p orbitals, so P has 3 unpaired. Sulfur's fourth electron must pair in one orbital, leaving 2 unpaired. Counting 4 for S forgets there are only three p orbitals, 0 for S pairs electrons that have an empty orbital available, and 1 for P pairs two electrons before every orbital is singly filled.`,
  },
  [r`State the Pauli exclusion principle.`]: {
    question: r`One electron in an atom has the quantum numbers $(n, l, m_l, m_s) = (3, 2, -1, +\tfrac{1}{2})$. Which set could belong to a second electron in the same orbital of that atom?`,
    options: [r`$(3, 2, -1, +\tfrac{1}{2})$`, r`$(3, 2, 0, -\tfrac{1}{2})$`, r`$(3, 1, -1, -\tfrac{1}{2})$`, r`$(3, 2, -1, -\tfrac{1}{2})$`],
    correctAnswer: 3,
    explanation: r`The same orbital means the same $n$, $l$ and $m_l$, so the second electron can differ only in spin: $m_s = -\tfrac{1}{2}$. Repeating all four numbers is exactly what the exclusion principle forbids. Changing $m_l$ to 0 puts the electron in a different 3d orbital, and changing $l$ to 1 puts it in a 3p orbital.`,
  },
  [r`How does atomic radius trend across a period and down a group?`]: {
    question: r`Sulfur and chlorine are neighbors in Period 3 (S, then Cl), and selenium sits directly below sulfur. Which ranks the three atoms from smallest to largest radius?`,
    options: [r`S < Cl < Se`, r`Cl < S < Se`, r`Se < S < Cl`, r`Se < Cl < S`],
    correctAnswer: 1,
    explanation: r`Chlorine is to the right of sulfur, so its higher effective nuclear charge makes it smaller, and selenium has one more shell than sulfur, so it is larger: Cl < S < Se. Putting S below Cl reverses the across-a-period trend. The two rankings that start with Se reverse the down-a-group trend.`,
  },
  [r`Which has the larger radius: $Na$ or $Na^{+}$?`]: {
    question: r`Which ranks an iron atom and its two common ions from largest to smallest radius?`,
    options: [r`Fe³⁺ > Fe²⁺ > Fe`, r`Fe > Fe²⁺ > Fe³⁺`, r`Fe²⁺ > Fe > Fe³⁺`, r`Fe > Fe³⁺ > Fe²⁺`],
    correctAnswer: 1,
    explanation: r`Each electron removed leaves the same 26 protons pulling on fewer electrons, so the radius shrinks at every step: Fe > Fe²⁺ > Fe³⁺. The fully reversed order treats a higher positive charge as a bigger ion. The other two orders each put one ion out of place, although more electrons lost always means a smaller ion.`,
  },
  [r`What do the four quantum numbers describe?`]: {
    question: r`Two electrons in an atom have the quantum numbers $(2, 1, -1, +\tfrac{1}{2})$ and $(2, 1, +1, +\tfrac{1}{2})$, written as $(n, l, m_l, m_s)$. In what way do the two electrons differ?`,
    options: [r`only in the shape of their two orbitals`, r`only in the direction of their spins`, r`only in the energy shell they occupy`, r`only in the orientation of their orbitals`],
    correctAnswer: 3,
    explanation: r`The two sets differ only in $m_l$, which labels the orientation of the orbital, so these are two 2p orbitals pointing along different axes. Shape is set by $l$, which is 1 for both. Spin is $m_s$, which is $+\tfrac{1}{2}$ for both, and the shell is $n$, which is 2 for both.`,
  },
  [r`Why do Cr and Cu have anomalous electron configurations?`]: {
    question: r`Silver ($Z = 47$) sits directly below copper and shows the same kind of exception to the simple filling order. What is silver's ground-state configuration?`,
    options: [r`[Kr] 5s¹ 4d¹⁰`, r`[Kr] 5s² 4d⁹`, r`[Kr] 5s² 4d¹⁰`, r`[Kr] 5s¹ 4d⁹`],
    correctAnswer: 0,
    explanation: r`Like copper, silver moves one s electron into the d subshell to complete it, giving [Kr] 5s¹ 4d¹⁰ with 11 electrons beyond krypton. [Kr] 5s² 4d⁹ is the simple filling order that the extra stability of a full d subshell overrides. The other two configurations hold 12 and 10 electrons beyond krypton, so they are not neutral silver.`,
  },
  [r`Which orbital has the highest energy in a multi-electron atom?`]: {
    question: r`Using the $n + l$ rule, which of these subshells lies highest in energy in a multi-electron atom?`,
    options: [r`6s`, r`4d`, r`5d`, r`5s`],
    correctAnswer: 2,
    explanation: r`The sums are 5s = 5, 4d = 6, 6s = 6 and 5d = 5 + 2 = 7, so 5d is highest. Choosing 6s assumes the largest $n$ always means the highest energy, which ignores $l$. 4d and 5s have smaller sums and fill earlier.`,
  },
  [r`Which quantum number determines the shape of an orbital?`]: {
    question: r`An electron in a sodium atom is promoted from the 3s orbital to a 3p orbital. Which statement about its quantum numbers must be true?`,
    options: [r`$l$ goes from 0 to 1, which changes the orbital shape`, r`$l$ goes from 1 to 2, which changes the orbital shape`, r`$m_l$ goes from 0 to 1, which changes the orbital shape`, r`$n$ goes from 3 to 4, which changes the orbital shape`],
    correctAnswer: 0,
    explanation: r`An s orbital has $l = 0$ (spherical) and a p orbital has $l = 1$ (dumbbell), so $l$ changes from 0 to 1 and the shape changes with it. Going from 1 to 2 would be p to d. $m_l$ sets orientation, not shape, and need not change at all, and $n$ stays 3 because the electron remains in the third shell.`,
  },
  [r`Electron configuration of $Fe^{2+}$ (Z=26)?`]: {
    question: r`A transition-metal ion carries a 2+ charge and has the ground state [Ar] 3d⁵. The neutral atoms are Cr [Ar] 4s¹ 3d⁵, Mn [Ar] 4s² 3d⁵, Fe [Ar] 4s² 3d⁶ and Co [Ar] 4s² 3d⁷. Which metal formed the ion?`,
    options: [r`Co`, r`Cr`, r`Mn`, r`Fe`],
    correctAnswer: 2,
    explanation: r`Transition metals lose their 4s electrons first, so Mn, [Ar] 4s² 3d⁵, becomes [Ar] 3d⁵ as Mn²⁺. Co would give 3d⁵ only if both electrons were wrongly taken from 3d, leaving 4s². Cr has 3d⁵ as a neutral atom, not as a 2+ ion, and Fe reaches 3d⁵ only as Fe³⁺.`,
  },
  [r`Maximum electrons in the $n=3$ shell?`]: {
    question: r`What is the largest number of electrons in one atom that can have the principal quantum number $n = 4$?`,
    options: [r`16`, r`32`, r`18`, r`8`],
    correctAnswer: 1,
    explanation: r`A shell holds $2n^2 = 2(4)^2 = 32$ electrons (4s, 4p, 4d and 4f: 2 + 6 + 10 + 14). 16 is $n^2$, the number of orbitals rather than electrons. 18 is the capacity of the $n = 3$ shell, and 8 counts only the 4s and 4p subshells.`,
  },
  [r`How do you recognize an excited-state electron configuration?`]: {
    question: r`Each configuration below is for a neutral atom. Which one is an excited state rather than a ground state?`,
    options: [r`1s² 2s² 2p⁶ 3s¹`, r`1s² 2s² 2p⁶ 3s² 3p¹`, r`1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹`, r`1s² 2s² 2p⁵ 3s¹`],
    correctAnswer: 3,
    explanation: r`In 1s² 2s² 2p⁵ 3s¹ the 2p subshell is one short while 3s is occupied, so it is excited neon (ground state 1s² 2s² 2p⁶). The 3s¹ and 3p¹ configurations are ground-state sodium and aluminum, with every lower subshell full. The one ending in 4s¹ is ground-state potassium, because 4s fills before 3d.`,
  },
  [r`Quantum number {{c1::n}} sets energy and size, {{c2::l}} sets subshell shape, $m_l$ sets orientation, $m_s$ sets spin.`]: {
    question: r`How do a 2p orbital and a 3p orbital of the same atom compare?`,
    options: [r`same shape, but the 3p is smaller and lower in energy`, r`same size, but the 3p has a more complex overall shape`, r`same energy, but the 3p has a different kind of shape`, r`same shape, but the 3p is larger and higher in energy`],
    correctAnswer: 3,
    explanation: r`Both have $l = 1$, so both are dumbbell shaped, and the larger $n$ of the 3p makes it bigger and higher in energy. Calling the 3p smaller and lower reverses what $n$ does. The last two choices give the shape to $n$, but shape is set by $l$, and they wrongly keep size or energy fixed when $n$ changes.`,
  },
  [r`State Hund's rule and the observable property it explains.`]: {
    question: r`Beams of ground-state nitrogen atoms ($2p^3$) and zinc atoms ($3d^{10} 4s^2$) are each passed through a strong magnetic field. How do the two kinds of atom respond?`,
    options: [r`N is diamagnetic and Zn is paramagnetic`, r`N is paramagnetic and Zn is diamagnetic`, r`both N and Zn are paramagnetic atoms`, r`both N and Zn are diamagnetic atoms`],
    correctAnswer: 1,
    explanation: r`By Hund's rule nitrogen's three 2p electrons sit one per orbital with parallel spins, so it has unpaired electrons and is paramagnetic. Every electron in zinc is paired, so zinc is diamagnetic. Reversing the labels swaps the two terms, and treating both alike ignores that only one of them has unpaired electrons.`,
  },
  [r`Effective nuclear charge is about {{c1::$Z - S$}}, where core electrons shield {{c2::well}} but same-shell electrons shield poorly.`]: {
    question: r`From sodium to chlorine the nuclear charge rises by 6 while the valence shell stays the same. How does the effective nuclear charge on a valence electron change, and why?`,
    options: [r`it stays level, as each new electron shields fully`, r`it falls, as the added electrons increase shielding`, r`it rises, as same-shell electrons shield poorly`, r`it rises, as the number of core electrons decreases`],
    correctAnswer: 2,
    explanation: r`Each step adds a proton and an electron in the same shell, and same-shell electrons shield poorly, so $Z_{eff}$ climbs across the period. Saying it stays level assumes each added electron cancels a whole proton. Saying it falls overrates same-shell shielding even more, and the core stays at 10 electrons for all of Period 3, so it does not shrink.`,
  },
  [r`How do isotopes of one element differ, and how does that affect chemistry?`]: {
    question: r`Samples of pure chlorine-35 and pure chlorine-37 are each reacted with sodium metal. How do the two products compare?`,
    options: [r`same formula, NaCl, but different molar masses`, r`same formula, NaCl, and identical molar masses`, r`different formulas, as Cl-37 gains two electrons`, r`different formulas, as Cl-37 has more protons`],
    correctAnswer: 0,
    explanation: r`Isotopes have the same protons and electrons, so both form NaCl, but the two extra neutrons in Cl-37 make its NaCl about 2 g/mol heavier. Identical molar masses ignores the neutron difference. Different formulas would need different electron behavior, yet both isotopes have 17 protons and gain one electron.`,
  },
  [r`A configuration ending in {{c1::$ns^2 np^6$}} is a noble gas, which is why ions form to reach it.`]: {
    question: r`Aluminum ($Z = 13$) has the valence configuration $3s^2 3p^1$. Which ion does it form in its ionic compounds, and which noble-gas configuration does that ion have?`,
    options: [r`Al³⁺, matching argon`, r`Al³⁺, matching neon`, r`Al⁺, matching neon`, r`Al⁵⁻, matching argon`],
    correctAnswer: 1,
    explanation: r`Losing the three valence electrons leaves 10 electrons, the $2s^2 2p^6$ configuration of neon, so the ion is Al³⁺. Al³⁺ has 10 electrons, not argon's 18. Al⁺ loses only the 3p electron and still has $3s^2$, and a metal does not gain five electrons to reach argon when losing three reaches neon.`,
  },
  [r`Which has the higher ionization energy, $Na$ or $Na^{+}$, and why?`]: {
    question: r`Which of these species needs the most energy to have one electron removed in the gas phase? (K: $Z = 19$, [Ar] 4s¹; Ca: $Z = 20$, [Ar] 4s².)`,
    options: [r`Ca⁺`, r`Ca`, r`K`, r`K⁺`],
    correctAnswer: 3,
    explanation: r`K⁺ already has the argon configuration, so the next electron must come out of the tightly held noble-gas core, which costs far more than removing any 4s electron. Ca⁺ still has one 4s electron to lose, so it is harder to ionize than Ca but much easier than K⁺. Neutral K and Ca lose a shielded 4s electron most easily of all.`,
  },
  [r`Why is chlorine's atomic mass 35.45 rather than a whole number?`]: {
    question: r`Bromine has two stable isotopes, Br-79 and Br-81, and an atomic mass of 79.90 u. What must a natural sample of bromine contain?`,
    options: [r`roughly equal amounts of Br-79 and Br-81`, r`almost entirely Br-79 with a trace of Br-81`, r`almost entirely Br-81 with a trace of Br-79`, r`mostly atoms that each have a mass of 79.90`],
    correctAnswer: 0,
    explanation: r`Atomic mass is the abundance-weighted average, and 79.90 is almost exactly midway between 79 and 81, so the two isotopes are about equally common. Mostly Br-79 would give an average near 79, and mostly Br-81 an average near 81. No single bromine atom has a mass of 79.90 u; that number is only an average.`,
  },
  [r`Write the electron configuration of $Fe^{2+}$ and explain the removal order.`]: {
    question: r`Titanium is [Ar] 4s² 3d². Which describes the Ti²⁺ ion in its ground state?`,
    options: [r`[Ar] 4s², with no unpaired electrons`, r`[Ar] 3d², with no unpaired electrons`, r`[Ar] 3d², with two unpaired electrons`, r`[Ar] 4s¹ 3d¹, with two unpaired electrons`],
    correctAnswer: 2,
    explanation: r`The two 4s electrons leave first because they have the highest principal quantum number, giving [Ar] 3d², and the two d electrons occupy separate orbitals unpaired. [Ar] 4s² removes the 3d electrons instead. Pairing the two d electrons breaks Hund's rule, and [Ar] 4s¹ 3d¹ removes one electron from each subshell.`,
  },
  [r`What does an orbital actually represent, and how many radial nodes does it have?`]: {
    question: r`How many radial nodes does a 4p orbital have?`,
    options: [r`1`, r`3`, r`2`, r`4`],
    correctAnswer: 2,
    explanation: r`Radial nodes number $n - l - 1 = 4 - 1 - 1 = 2$. An answer of 1 is the value of $l$, which counts the angular nodes. 3 is $n - 1$, the total number of nodes of both kinds, and 4 is simply $n$.`,
  },
  [r`How many orbitals and electrons does a subshell of quantum number l hold?`]: {
    question: r`A subshell has angular momentum quantum number $l = 2$. How many orbitals does it contain, and how many electrons can it hold?`,
    options: [r`5 orbitals holding 10 electrons`, r`3 orbitals holding 6 electrons`, r`4 orbitals holding 8 electrons`, r`5 orbitals holding 5 electrons`],
    correctAnswer: 0,
    explanation: r`There are $2l + 1 = 5$ orbitals ($m_l$ from −2 to +2), each holding 2 electrons, for 10 in all: a d subshell. 3 orbitals and 6 electrons is a p subshell ($l = 1$). 4 orbitals uses $2l$ and forgets $m_l = 0$, and 5 electrons forgets that each orbital holds two.`,
  },
  [r`Why does the 4s subshell fill before 3d?`]: {
    question: r`Apply the $n + l$ rule to the 5s and 4d subshells of a Period 5 transition metal. Which subshell fills first in the neutral atom, and which loses electrons first when the atom is ionized?`,
    options: [r`4d fills first, and 5s electrons are lost first`, r`5s fills first, and 4d electrons are lost first`, r`4d fills first, and 4d electrons are lost first`, r`5s fills first, and 5s electrons are lost first`],
    correctAnswer: 3,
    explanation: r`5s has $n + l = 5$ and 4d has 6, so 5s fills first, just as 4s fills before 3d. Once the d subshell is occupied it drops below the s subshell, so the 5s electrons, with the higher $n$, are removed first. Filling 4d first reads the rule backward, and removing 4d electrons first assumes the last subshell filled is the first emptied.`,
  },
  [r`Cr and Cu each promote {{c1::one 4s electron}} into 3d to reach a {{c2::half-filled or completely filled}} d subshell.`]: {
    question: r`Molybdenum sits directly below chromium, and its ground state is [Kr] 5s¹ 4d⁵ rather than [Kr] 5s² 4d⁴. Compared with the simple filling order, what has happened?`,
    options: [r`two 5s electrons moved, giving a half-filled 4d`, r`one 5s electron moved, giving a half-filled 4d`, r`one 5s electron moved, giving a fully filled 4d`, r`one 4d electron moved, giving a half-filled 5s`],
    correctAnswer: 1,
    explanation: r`Going from 5s² 4d⁴ to 5s¹ 4d⁵ moves one s electron into the d subshell, and five electrons in five d orbitals is a half-filled subshell. Two electrons moving would leave 5s empty with 4d⁶. A fully filled d subshell needs ten electrons, as in copper and silver, and the electron moves from 5s into 4d, not the other way.`,
  },
  [r`IE dips from Be to B because {{c1::the p electron is higher in energy}} and from N to O because {{c2::of pairing repulsion in a p orbital}}.`]: {
    question: r`Across Period 3, from Na to Ar, first ionization energy generally rises. Between which pairs of neighbors does it fall instead?`,
    options: [r`Na to Mg, and P to S`, r`Mg to Al, and S to Cl`, r`Na to Mg, and Si to P`, r`Mg to Al, and P to S`],
    correctAnswer: 3,
    explanation: r`Aluminum's outermost electron is the first 3p electron, higher in energy than magnesium's 3s electrons, and sulfur's fourth 3p electron is paired and repelled by its partner, so both are easier to remove. Na to Mg, Si to P and S to Cl are ordinary rises, with no new subshell started and no first pairing in a p orbital.`,
  },
  [r`What does a sudden jump in successive ionization energies reveal?`]: {
    question: r`An element X has successive ionization energies of 578, 1,817, 2,745, 11,577 and 14,842 kJ/mol. What is the most likely formula of its chloride?`,
    options: [r`XCl₂`, r`XCl₃`, r`XCl₄`, r`XCl`],
    correctAnswer: 1,
    explanation: r`The big jump comes between the third and fourth values (2,745 to 11,577), so X has three valence electrons, forms X³⁺ and gives XCl₃. XCl₄ counts the removal after the jump as a valence electron, and XCl₂ stops one short of it. XCl would need the jump to come right after the first value.`,
  },
  [r`Compare electron affinity for halogens, noble gases, and group 2 metals.`]: {
    question: r`One electron is added to each of the gaseous atoms Cl, Ar and Mg. For which of them does the addition release energy?`,
    options: [r`for Cl and Ar, but not for Mg`, r`for Ar, but not for Cl or Mg`, r`for Cl, but not for Ar or Mg`, r`for Cl and Mg, but not for Ar`],
    correctAnswer: 2,
    explanation: r`Chlorine's added electron completes the 3p subshell, so energy is released. Argon ($3p^6$) and magnesium ($3s^2$) already have full subshells, so the electron must go into a higher subshell and the process is unfavorable. Including Ar confuses a stable atom with one that wants an electron, and including Mg ignores its full 3s subshell.`,
  },
  [r`Why do the s, p, d, and f subshells of one shell differ in energy in a multielectron atom?`]: {
    question: r`The ion He⁺ has a single electron. How does the energy of its 2s orbital compare with that of its 2p orbitals?`,
    options: [r`equal, as one electron has nothing to shield it`, r`2s is lower, as it penetrates closer to the nucleus`, r`2p is lower, as it penetrates closer to the nucleus`, r`2s is lower, as the nuclear charge is now doubled`],
    correctAnswer: 0,
    explanation: r`Subshells of one shell split in energy only because electrons that penetrate better are shielded less by the other electrons. He⁺ has no other electrons, so 2s and 2p are degenerate, as in hydrogen. Putting 2s lower by penetration applies the multi-electron result where there is no shielding, 2p never penetrates better than 2s, and a larger nuclear charge lowers both orbitals equally.`,
  },
  [r`Adding a second electron to an anion is always {{c1::endothermic}}.`]: {
    question: r`Adding an electron to a gaseous sulfur atom to form S⁻ releases 200 kJ/mol. What is the sign of the energy change for adding another electron to S⁻ to form S²⁻, and why?`,
    options: [r`positive, as the electron is added to a negative ion`, r`negative, as the electron completes the 3p subshell`, r`negative, as sulfur attracts electrons strongly`, r`positive, as the electron must enter a new shell`],
    correctAnswer: 0,
    explanation: r`The second electron is pushed onto an ion that is already negative, so Coulomb repulsion makes the step endothermic. Completing the octet does not make the isolated step favorable; S²⁻ is stabilized only in a lattice or in solution. Sulfur's attraction for electrons describes the first addition, and the electron enters the existing 3p subshell, not a new shell.`,
  },
  [r`Ionization energy, electron affinity, and electronegativity are three distinct quantities. What does each one measure?`]: {
    question: r`Which equation shows the process whose energy change is the electron affinity of chlorine?`,
    options: [r`Cl(g) → Cl⁺(g) + e⁻`, r`Cl⁻(g) + e⁻ → Cl²⁻(g)`, r`Cl(g) + e⁻ → Cl⁻(g)`, r`Cl₂(g) + 2e⁻ → 2Cl⁻(aq)`],
    correctAnswer: 2,
    explanation: r`Electron affinity is the energy change when a gaseous atom gains one electron: Cl(g) + e⁻ → Cl⁻(g). Cl(g) → Cl⁺(g) + e⁻ is the first ionization energy, the opposite kind of process. The equation starting from Cl⁻ adds a second electron to an ion, not a first electron to an atom, and the one with Cl₂ and aqueous ions is a reduction in solution, not a gas-phase atomic property.`,
  },
  [r`Isotopes are chemically near-identical, which is exactly what makes {{c1::density labeling}} experiments such as Meselson-Stahl work.`]: {
    question: r`A researcher feeds cells amino acids made with carbon-13 in place of carbon-12 in order to follow newly made protein. Why does this labeling work?`,
    options: [r`the label reacts the same way but is told apart by charge`, r`the label reacts the same way but is told apart by mass`, r`the label reacts differently and is told apart by mass`, r`the label reacts differently and is told apart by charge`],
    correctAnswer: 1,
    explanation: r`Isotopes have the same electrons, so the cell handles carbon-13 amino acids just like normal ones, but the extra neutron makes the labeled protein heavier and so detectable by mass or density. Isotopes do not differ in charge, since proton and electron counts are the same. If the label reacted differently it would not report on normal protein synthesis.`,
  },
  [r`Distinguish mass number, atomic mass, and molar mass.`]: {
    question: r`The periodic-table entry for copper reads 63.55. Which statement about copper follows from that number?`,
    options: [r`one atom of natural copper has a mass of 63.55 g`, r`each copper nucleus holds 63.55 nucleons in all`, r`the commonest copper nuclide has A equal to 63.55`, r`one mole of natural copper has a mass of 63.55 g`],
    correctAnswer: 3,
    explanation: r`63.55 is the abundance-weighted average atomic mass in u, and the same number in grams is the mass of one mole. A single atom has a mass of about 63 or 65 u, nowhere near 63.55 g. Nucleon counts and mass numbers are whole numbers for a specific nuclide (63 or 65 for copper), so neither can be 63.55.`,
  },
}
