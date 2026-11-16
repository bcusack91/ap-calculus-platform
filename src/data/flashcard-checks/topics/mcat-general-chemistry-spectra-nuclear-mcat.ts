import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-spectra-nuclear-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What does the photoelectric effect demonstrate?`]: {
    question: r`A wave picture of light predicts that any color of light, if bright enough, will eventually shake electrons loose from a metal. Which observation contradicts that prediction and points to photons instead?`,
    options: [r`Very bright light above a cutoff frequency ejects more electrons`, r`Light of a higher frequency is bent more by a glass prism`, r`Very bright light below a cutoff frequency ejects no electrons`, r`Electrons leaving the metal are deflected by a magnetic field`],
    correctAnswer: 2,
    explanation: r`If energy arrived as a continuous wave, bright low-frequency light would eventually free electrons. It never does, because each photon carries only hf and a single photon must beat the work function. More electrons from brighter light fits either picture, and prism bending and magnetic deflection say nothing about how light delivers energy.`,
  },
  [r`The Heisenberg uncertainty principle states you cannot simultaneously know:`]: {
    question: r`Chemists describe a hydrogen 1s electron with a probability cloud rather than a circular orbit of fixed radius and speed. Which statement explains why the orbit picture fails?`,
    options: [r`A fixed orbit would specify exact position and momentum together`, r`A fixed orbit would specify exact energy and exact charge together`, r`A fixed orbit would require the electron to have no kinetic energy`, r`A fixed orbit is correct, but electrons move too fast to be tracked`],
    correctAnswer: 0,
    explanation: r`An orbit of known radius and speed gives the electron an exact position and an exact momentum at the same time, which the uncertainty principle forbids. Energy and charge are not the restricted pair. The limit is built into nature, so it is not a matter of instruments being too slow.`,
  },
  [r`A photon ejects an electron only above a threshold frequency. This shows:`]: {
    question: r`A metal ejects electrons only for light of wavelength shorter than 500 nm. A dim 400 nm lamp and a very bright 600 nm lamp are each aimed at it. Which lamp ejects electrons?`,
    options: [r`Only the 600 nm lamp, since its beam delivers more power`, r`Both lamps, since each one delivers energy to the metal`, r`Neither lamp, since neither wavelength is exactly 500 nm`, r`Only the 400 nm lamp, since each photon has enough energy`],
    correctAnswer: 3,
    explanation: r`Photon energy is hc/λ, so a shorter wavelength means a more energetic photon, and only the 400 nm photons exceed the threshold. Brightness adds more photons but does not raise the energy of any one of them, so the 600 nm lamp ejects nothing. The threshold is a minimum energy, not a single exact wavelength.`,
  },
  [r`An emission spectrum line results from an electron:`]: {
    question: r`Hydrogen atoms in a discharge tube are excited by collisions and then glow red at 656 nm. The red light is produced at the moment an electron:`,
    options: [r`rises from n = 2 to n = 3 and releases a photon`, r`falls from n = 3 to n = 2 and releases a photon`, r`falls from n = 3 to n = 2 and absorbs a photon`, r`rises from n = 2 to n = 3 and absorbs a photon`],
    correctAnswer: 1,
    explanation: r`Light is emitted when an electron drops to a lower level and gives up the energy difference as a photon. The collision that raised the electron is the excitation step, not the emission. An electron cannot release a photon while moving up, and a falling electron does not absorb one.`,
  },
  [r`Why is a first-order half-life independent of starting amount, unlike a zero-order one?`]: {
    question: r`An 80 g sample of a radioactive isotope takes 6 days to fall to 40 g. How long does it take to fall from 40 g to 20 g, and how long would that step take if the decay were zero order instead?`,
    options: [r`6 days; a zero-order process would take 3 days`, r`3 days; a zero-order process would take 6 days`, r`6 days; a zero-order process would take 6 days`, r`12 days; a zero-order process would take 6 days`],
    correctAnswer: 0,
    explanation: r`Decay is first order, so every halving takes the same 6 days whatever the starting mass. A zero-order process loses a fixed 40 g per 6 days, so losing the next 20 g would take only 3 days. The other choices swap the two behaviors or make the first-order half-life change with the amount.`,
  },
  [r`What is mass defect and how does it relate to nuclear binding energy?`]: {
    question: r`In a fusion reaction, the products have 0.020 u less mass than the reactants. Using 1 u = 930 MeV, what happens to energy in this reaction?`,
    options: [r`About 19 MeV is absorbed`, r`About 0.020 MeV is released`, r`About 19 MeV is released`, r`About 930 MeV is absorbed`],
    correctAnswer: 2,
    explanation: r`The missing mass is converted to energy by E = mc², and 0.020 u × 930 MeV/u ≈ 19 MeV. Because the products are lighter, the energy is released, not absorbed. The 0.020 MeV value treats mass units as energy units, and 930 MeV is the energy of a whole mass unit.`,
  },
  [r`The strong nuclear force is {{c1::powerful but very short-range}}, which is why {{c2::large}} nuclei become unstable.`]: {
    question: r`Light stable nuclei have about one neutron per proton, but heavy stable nuclei need about 1.5 neutrons per proton. Which statement explains the trend?`,
    options: [r`Proton attraction acts across the nucleus; the strong force only repels neighbors`, r`Neutron repulsion acts across the nucleus; the strong force only reaches protons`, r`Gravity between nucleons acts across the nucleus; the strong force fades with mass`, r`Proton repulsion acts across the nucleus; the strong force only reaches neighbors`],
    correctAnswer: 3,
    explanation: r`Every proton repels every other proton, so repulsion grows quickly with size, while the short-range strong force binds only adjacent nucleons. Extra neutrons add strong-force attraction and spacing without adding repulsion. Protons do not attract each other electrically, neutrons carry no charge to repel with, and gravity is negligible in a nucleus.`,
  },
  [r`The Bohr model is quantitatively correct only for {{c1::one-electron systems}} such as H and $He^{+}$.`]: {
    question: r`For which of these species does the Bohr model give quantitatively correct energy levels?`,
    options: [r`Li⁺`, r`Li²⁺`, r`He`, r`H⁻`],
    correctAnswer: 1,
    explanation: r`The Bohr model works only when a single electron orbits the nucleus, and Li²⁺ has 3 protons and just 1 electron. Li⁺, He and H⁻ each have 2 electrons, so electron-electron repulsion and shielding spoil the simple energy formula for them.`,
  },
  [r`Gamma emission changes {{c1::neither Z nor A}}.`]: {
    question: r`Cobalt-60 undergoes beta-minus decay to an excited nickel nucleus, $^{60}_{28}\text{Ni}^*$, which then emits two gamma rays. What nucleus is left after the gamma rays are emitted?`,
    options: [r`$^{60}_{29}\text{Cu}$`, r`$^{58}_{28}\text{Ni}$`, r`$^{60}_{28}\text{Ni}$`, r`$^{56}_{26}\text{Fe}$`],
    correctAnswer: 2,
    explanation: r`A gamma ray is a photon, so emitting it changes neither the atomic number nor the mass number, and the nucleus simply relaxes to ground-state nickel-60. Raising Z to 29 treats gamma emission like another beta decay. Losing mass number treats each gamma ray as a particle with nucleons, such as a neutron or an alpha particle.`,
  },
  [r`After n half-lives the fraction of a sample remaining is {{c1::$(1/2)^n$}}.`]: {
    question: r`A waste isotope with a half-life of 8 days may be discarded once less than 1% of it remains. What is the shortest storage time, counted in whole half-lives, that meets this rule?`,
    options: [r`56 days`, r`48 days`, r`16 days`, r`80 days`],
    correctAnswer: 0,
    explanation: r`The fraction left after n half-lives is (1/2)ⁿ. Six half-lives leave 1/64, about 1.6%, which is still too much, while seven leave 1/128, about 0.8%, so 7 × 8 = 56 days. Two half-lives leave 25%, and ten half-lives (80 days) work but are not the shortest time.`,
  },
  [r`How do fission and fusion differ in the nuclei involved?`]: {
    question: r`Reaction 1 is ²H + ³H → ⁴He + n. Reaction 2 is ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n. How should they be classified?`,
    options: [r`1 is fission and 2 is fusion; both release energy`, r`1 is fusion and 2 is fission; both release energy`, r`1 is fusion and 2 is fission; only 2 releases energy`, r`1 is fusion and 2 is fission; only 1 releases energy`],
    correctAnswer: 1,
    explanation: r`Reaction 1 joins two very light nuclei, which is fusion, and reaction 2 splits a heavy nucleus into mid-sized fragments, which is fission. Both move the products toward the binding-energy peak near iron, so both release energy. The other choices swap the labels or claim only one direction is favorable.`,
  },
  [r`Relate photon wavelength, frequency, and energy for an atomic transition.`]: {
    question: r`An atom emits photon A at 1500 nm and photon B at 500 nm. How do the energy and frequency of photon B compare with those of photon A?`,
    options: [r`One third the energy and one third the frequency`, r`Three times the energy and one third the frequency`, r`One third the energy and three times the frequency`, r`Three times the energy and three times the frequency`],
    correctAnswer: 3,
    explanation: r`E = hf = hc/λ, so energy and frequency both rise as wavelength falls. Photon B has one third the wavelength, so it has three times the frequency and three times the energy. The mixed choices break the direct link between energy and frequency, and the remaining one treats energy as proportional to wavelength.`,
  },
  [r`Compare the penetrating and ionizing power of alpha, beta, and gamma radiation.`]: {
    question: r`A detector reading from an unknown source is unchanged when a sheet of paper is placed in front of the source, but it drops to nearly zero behind a few millimeters of aluminum. What is the radiation?`,
    options: [r`Beta, with intermediate ionizing power`, r`Alpha, with the highest ionizing power`, r`Gamma, with the lowest ionizing power`, r`Alpha, with the lowest ionizing power`],
    correctAnswer: 0,
    explanation: r`Alpha particles would be stopped by the paper, and gamma rays would pass through thin aluminum and need lead or concrete. Radiation that passes paper but not a thin metal sheet is beta, which sits in the middle for both penetrating and ionizing power. Alpha is the most ionizing, not the least.`,
  },
  [r`State the photoelectric effect equation and explain the threshold frequency.`]: {
    question: r`A metal has a threshold frequency of $5.0 \times 10^{14}$ Hz. It is lit with light of frequency $8.0 \times 10^{14}$ Hz. Using $h = 6.6 \times 10^{-34}$ J·s, what is the maximum kinetic energy of the ejected electrons?`,
    options: [r`$5.3 \times 10^{-19}$ J`, r`$3.3 \times 10^{-19}$ J`, r`$2.0 \times 10^{-19}$ J`, r`$8.6 \times 10^{-19}$ J`],
    correctAnswer: 2,
    explanation: r`The work function is $hf_0$, so $KE_{max} = hf - hf_0 = h(f - f_0) = (6.6 \times 10^{-34})(3.0 \times 10^{14}) \approx 2.0 \times 10^{-19}$ J. The $5.3 \times 10^{-19}$ J value is the whole photon energy, and $3.3 \times 10^{-19}$ J is the work function itself. Adding the two instead of subtracting gives $8.6 \times 10^{-19}$ J.`,
  },
  [r`An electron dropping to a lower level {{c1::emits}} a photon whose energy equals {{c2::the gap between the two levels}}.`]: {
    question: r`An atom has an electron level at −6.0 eV and another at −2.5 eV. An electron in the lower level absorbs a photon, jumps to the upper level, and later falls back. What photon energies are involved?`,
    options: [r`It absorbs 3.5 eV and later emits 2.5 eV`, r`It absorbs 3.5 eV and later emits 3.5 eV`, r`It absorbs 6.0 eV and later emits 2.5 eV`, r`It absorbs 8.5 eV and later emits 8.5 eV`],
    correctAnswer: 1,
    explanation: r`The photon energy must equal the gap between the levels, 6.0 − 2.5 = 3.5 eV, for the jump up and again for the fall back down. The values 6.0 eV and 2.5 eV are the level energies themselves, not a gap. The 8.5 eV value adds the two magnitudes instead of subtracting.`,
  },
  [r`Alpha decay ejects {{c1::a helium-4 nucleus}}, lowering Z by {{c2::2}} and A by 4.`]: {
    question: r`A nucleus undergoes alpha decay and the daughter is lead-206, $^{206}_{82}\text{Pb}$. What was the parent nucleus?`,
    options: [r`$^{202}_{80}\text{Hg}$`, r`$^{210}_{80}\text{Hg}$`, r`$^{208}_{84}\text{Po}$`, r`$^{210}_{84}\text{Po}$`],
    correctAnswer: 3,
    explanation: r`Alpha decay removes a helium-4 nucleus, so the parent had 2 more protons and 4 more mass units than the daughter: Z = 84 and A = 210, which is polonium-210. Mercury-202 subtracts again as if the decay ran forward from lead. The other two apply the changes of 2 and 4 with a wrong sign or to the wrong number.`,
  },
  [r`Compare positron emission and electron capture.`]: {
    question: r`Beryllium-7, $^{7}_{4}\text{Be}$, decays by electron capture. What is the daughter nucleus, and is a positron emitted?`,
    options: [r`$^{7}_{3}\text{Li}$, and no positron is emitted`, r`$^{7}_{3}\text{Li}$, and a positron is emitted`, r`$^{7}_{5}\text{B}$, and no positron is emitted`, r`$^{6}_{3}\text{Li}$, and a positron is emitted`],
    correctAnswer: 0,
    explanation: r`Electron capture pulls an inner-shell electron into the nucleus and turns a proton into a neutron, so Z drops from 4 to 3 while A stays 7. No positron leaves; that would be positron emission, which gives the same daughter by a different route. Raising Z to 5 describes beta-minus decay, and the mass number does not change.`,
  },
  [r`In beta-minus decay a {{c1::neutron}} converts to a proton, so Z {{c2::increases by 1}} while A is unchanged.`]: {
    question: r`Phosphorus-32, $^{32}_{15}\text{P}$, undergoes beta-minus decay. How many protons and neutrons does the daughter nucleus have?`,
    options: [r`14 protons and 18 neutrons`, r`16 protons and 17 neutrons`, r`16 protons and 16 neutrons`, r`15 protons and 16 neutrons`],
    correctAnswer: 2,
    explanation: r`Phosphorus-32 has 15 protons and 17 neutrons. Beta-minus decay turns one neutron into a proton, giving 16 protons and 16 neutrons, with A still 32. Going to 14 and 18 runs the conversion backward, 16 and 17 adds a proton without removing a neutron, and 15 and 16 loses a neutron without making a proton.`,
  },
  [r`Raising light intensity raises {{c1::the number of ejected electrons}} but not {{c2::their kinetic energy}}.`]: {
    question: r`A photocell under an ultraviolet lamp gives a photocurrent of 2.0 μA, and its fastest electrons leave with 1.0 eV of kinetic energy. The lamp is moved closer so that the intensity triples while the frequency stays the same. What are the new readings?`,
    options: [r`About 2.0 μA and 3.0 eV`, r`About 6.0 μA and 1.0 eV`, r`About 6.0 μA and 3.0 eV`, r`About 2.0 μA and 1.0 eV`],
    correctAnswer: 1,
    explanation: r`Tripling the intensity triples the photons arriving each second, so about three times as many electrons leave and the current triples to 6.0 μA. Each photon still carries the same energy hf, so the fastest electrons still have 1.0 eV. The other choices let brightness raise the energy of each electron or leave the electron count unchanged.`,
  },
  [r`Why are atomic emission spectra discrete lines rather than a continuum?`]: {
    question: r`A gas of atoms has electrons excited among only three energy levels, $E_1 < E_2 < E_3$, with unequal spacing. What does its emission spectrum look like?`,
    options: [r`At most 2 lines, one for each excited level`, r`At most 6 lines, two for each pair of levels`, r`A continuous band from the lowest to the highest energy`, r`At most 3 lines, one for each pair of levels`],
    correctAnswer: 3,
    explanation: r`Each line is a photon whose energy equals the gap between two levels, and three levels give three possible downward jumps: 3 to 2, 3 to 1 and 2 to 1. Counting one line per excited level misses the 3 to 2 drop. Upward jumps absorb light instead of emitting it, so pairs are not counted twice, and quantized levels cannot give a continuum.`,
  },
  [r`A neutron-rich nucleus decays by {{c1::beta-minus emission}}; a neutron-poor one uses {{c2::positron emission or electron capture}}.`]: {
    question: r`Nitrogen's stable isotopes are nitrogen-14 and nitrogen-15. How are the unstable isotopes nitrogen-13 and nitrogen-16 expected to decay?`,
    options: [r`N-13 by beta-minus emission; N-16 by positron emission`, r`N-13 by beta-minus emission; N-16 by beta-minus emission`, r`N-13 by positron emission; N-16 by beta-minus emission`, r`N-13 by positron emission; N-16 by electron capture`],
    correctAnswer: 2,
    explanation: r`Nitrogen-13 has too few neutrons, so it turns a proton into a neutron by positron emission. Nitrogen-16 has too many neutrons, so it turns a neutron into a proton by beta-minus emission. Swapping the modes would push each nuclide further from stability, and electron capture would make neutron-rich nitrogen-16 even more neutron-rich.`,
  },
  [r`On a photoelectron spectrum, peak position gives {{c1::a subshell's binding energy}} and peak height gives {{c2::how many electrons it holds}}.`]: {
    question: r`Lithium has the configuration 1s² 2s¹. How does the 1s peak compare with the 2s peak in its photoelectron spectrum?`,
    options: [r`The 1s peak is at higher binding energy and is twice as tall`, r`The 1s peak is at lower binding energy and is twice as tall`, r`The 1s peak is at higher binding energy and is half as tall`, r`The 1s peak is at lower binding energy and is half as tall`],
    correctAnswer: 0,
    explanation: r`Core 1s electrons are held far more tightly than the 2s valence electron, so their peak lies at higher binding energy. Peak height tracks the number of electrons, and 1s holds two electrons to the one in 2s, so it is twice as tall. The other choices reverse the energy order, the height ratio, or both.`,
  },
  [r`Why is a gamma emitter chosen for imaging but an alpha or beta emitter for therapy?`]: {
    question: r`A technician proposes a pure alpha emitter as the tracer for a bone scan that is read by a camera outside the body. Why would this scan fail?`,
    options: [r`Alpha particles pass through tissue too easily to be registered`, r`Alpha particles stop within the tissue, so none reach the camera`, r`Alpha particles ionize too weakly to produce a detector signal`, r`Alpha particles carry no charge, so the camera cannot see them`],
    correctAnswer: 1,
    explanation: r`Alpha particles are strongly ionizing and travel only a very short distance, so they deposit their energy in nearby cells and never leave the body. Imaging needs penetrating, weakly ionizing gamma photons. Describing alpha as penetrating or weakly ionizing gives it gamma's properties, and an alpha particle carries a 2+ charge.`,
  },
  [r`Radioactive decay rate is unaffected by {{c1::temperature, pressure, and chemical bonding}}, unlike a chemical reaction rate.`]: {
    question: r`Tritium has a half-life of about 12 years. A tritium sample is built into water molecules and warmed from 20°C to 40°C, a change that would roughly quadruple the rate of a typical chemical reaction. What is its half-life now?`,
    options: [r`About 3 years, since the decay rate quadruples`, r`About 6 years, since the atoms are now bonded`, r`About 48 years, since bonding steadies nuclei`, r`About 12 years, since decay is a nuclear process`],
    correctAnswer: 3,
    explanation: r`Radioactive decay depends only on the nucleus, so neither temperature nor chemical bonding changes the half-life. Shortening it to 3 years applies chemical kinetics to a nuclear process. The 6 year and 48 year values assume bonding speeds up or slows down decay, which it does not.`,
  },
  [r`In a labeling experiment, $^{35}S$ selectively tags {{c1::protein}} while $^{32}P$ tags {{c2::nucleic acid}}.`]: {
    question: r`A researcher wants radioactivity to appear in a newly made enzyme but not in the mRNA that encodes it. Which label should be added to the cells?`,
    options: [r`³⁵S-methionine, since proteins contain sulfur but RNA does not`, r`³²P-phosphate, since proteins contain phosphorus but RNA does not`, r`³⁵S-methionine, since RNA contains sulfur but proteins do not`, r`³²P-phosphate, since proteins and RNA both contain phosphorus`],
    correctAnswer: 0,
    explanation: r`Sulfur occurs in methionine and cysteine but not in nucleic acids, so ³⁵S marks protein only. Phosphorus sits in the nucleic acid backbone and not in the standard amino acids, so ³²P would label the mRNA instead of the enzyme. The other choices assign sulfur or phosphorus to the wrong class of molecule.`,
  },
  [r`How do you tell an absorption spectrum from an emission spectrum, and why do their lines line up?`]: {
    question: r`White light from a hot filament passes through a cool cloud of sodium vapor and then into a spectroscope. What does the observer see?`,
    options: [r`A dark field with bright lines at sodium's emission wavelengths`, r`A rainbow with dark lines at slightly longer wavelengths`, r`A rainbow with dark lines at sodium's emission wavelengths`, r`A dark field with bright lines at slightly longer wavelengths`],
    correctAnswer: 2,
    explanation: r`The cool atoms absorb exactly the photon energies that match their level gaps, removing those wavelengths from the continuous background and leaving dark lines. The gaps are the same going up as coming down, so the dark lines sit at the emission wavelengths, not shifted ones. Bright lines on a dark field would be the emission spectrum of the hot gas alone.`,
  },
  [r`Photon shortcut: energy in eV equals {{c1::1240}} divided by wavelength in nm.`]: {
    question: r`A laser emits light of wavelength 620 nm. What is the energy of each photon?`,
    options: [r`0.50 eV`, r`2.0 eV`, r`1.24 eV`, r`6.2 eV`],
    correctAnswer: 1,
    explanation: r`Photon energy in eV is 1240 divided by the wavelength in nm, so 1240/620 = 2.0 eV, which fits red-orange visible light. Dividing the other way round gives 0.50 eV. The values 1.24 eV and 6.2 eV just move the decimal point of one of the given numbers.`,
  },
  [r`Hydrogen's levels are $E_n = -13.6/n^2$ eV, so ionizing a ground-state H atom costs {{c1::13.6 eV}}.`]: {
    question: r`A hydrogen atom in its ground state ($E_1 = -13.6$ eV) absorbs a 15.0 eV photon. What is the result?`,
    options: [r`The electron rises to n = 2 with 1.4 eV of energy left over`, r`The electron leaves the atom with 15.0 eV of kinetic energy`, r`The electron leaves the atom with 28.6 eV of kinetic energy`, r`The electron leaves the atom with 1.4 eV of kinetic energy`],
    correctAnswer: 3,
    explanation: r`Ionizing ground-state hydrogen costs 13.6 eV, so a 15.0 eV photon frees the electron and the extra 15.0 − 13.6 = 1.4 eV becomes its kinetic energy. Reaching n = 2 takes only 10.2 eV and a bound jump cannot keep leftover energy. Keeping all 15.0 eV ignores the ionization cost, and 28.6 eV adds it instead of subtracting.`,
  },
  [r`Energy levels are negative, but an emitted photon carries {{c1::the absolute value of $\Delta E$}}.`]: {
    question: r`For an electron dropping between two levels of a sodium atom, a student calculates $\Delta E = E_{final} - E_{initial} = -2.1$ eV. What should the student report for the photon involved?`,
    options: [r`A 2.1 eV photon is emitted`, r`A −2.1 eV photon is emitted`, r`A 2.1 eV photon is absorbed`, r`A −2.1 eV photon is absorbed`],
    correctAnswer: 0,
    explanation: r`The negative sign belongs to the electron, which lost 2.1 eV by dropping to a lower level. That energy leaves as an emitted photon carrying the absolute value, 2.1 eV. A photon can never have negative energy, and absorption would raise the electron's energy and make its change positive.`,
  },
  [r`De Broglie says $\lambda = h/p$, so a particle's wavelength is {{c1::inversely proportional to its momentum}}.`]: {
    question: r`The speed of the electrons in an electron microscope beam is tripled (still far below the speed of light). What happens to their de Broglie wavelength and to the detail the microscope can resolve?`,
    options: [r`The wavelength triples, so finer detail can now be resolved`, r`The wavelength falls to one third, so finer detail is resolved`, r`The wavelength falls to one third, so only coarser detail shows`, r`The wavelength falls to one ninth, so finer detail is resolved`],
    correctAnswer: 1,
    explanation: r`λ = h/p and p = mv, so tripling the speed triples the momentum and cuts the wavelength to one third. A shorter wavelength resolves smaller structures. Tripling the wavelength treats λ as proportional to momentum, and one ninth wrongly squares the speed.`,
  },
  [r`In PET, an emitted positron annihilates with an electron to give {{c1::two 511 keV photons}} traveling {{c2::in opposite directions}}.`]: {
    question: r`During a PET scan, two detectors on opposite sides of the patient each register a 511 keV photon at the same instant. Where did the positron annihilation take place?`,
    options: [r`Only at the exact midpoint between the two detectors`, r`Somewhere on a line at right angles to the detector pair`, r`Somewhere on the straight line between the two detectors`, r`Anywhere in the body, as the two directions are unrelated`],
    correctAnswer: 2,
    explanation: r`The two annihilation photons leave in opposite directions, so the event must lie on the line joining the detectors that caught them. A single pair fixes the line but not the point on it, so the midpoint is not required; many crossing lines build the image. Photons at right angles or in unrelated directions would not conserve momentum.`,
  },
  [r`Technetium-99m dominates nuclear imaging because it emits {{c1::gamma rays only}} with a half-life of about {{c2::6 hours}}.`]: {
    question: r`A patient is injected with 400 MBq of technetium-99m at 8 a.m. Ignoring excretion, about how much activity remains at 8 p.m. the same day?`,
    options: [r`200 MBq`, r`50 MBq`, r`67 MBq`, r`100 MBq`],
    correctAnswer: 3,
    explanation: r`Technetium-99m has a half-life of about 6 hours, so 12 hours is two half-lives and 400 → 200 → 100 MBq. Stopping at 200 MBq counts only one half-life, and 50 MBq counts three. The 67 MBq value divides 400 by 6 as if the decay were a straight-line drop.`,
  },
  [r`Iodine-131 treats thyroid disease because it is a {{c1::beta emitter}} and the thyroid {{c2::concentrates iodine}}.`]: {
    question: r`A new beta-emitting compound is proposed for destroying a liver tumor in the way iodine-131 destroys overactive thyroid tissue. What must be true for it to work the same way?`,
    options: [r`Tumor cells must take up the compound far more than other tissue`, r`The compound must emit gamma rays that pass out of the body`, r`Its beta particles must travel through the whole of the body`, r`The isotope must have a half-life of several thousand years`],
    correctAnswer: 0,
    explanation: r`Iodine-131 is selective because the thyroid concentrates iodide, and its beta particles travel only millimeters, so the dose stays where the isotope collects. A new agent needs the same biological targeting. Escaping gamma rays suit imaging, long-range particles would harm healthy tissue, and a very long half-life would deliver almost no dose.`,
  },
  [r`Carbon-14 dating works on once-living material because $^{14}C$ has a half-life of about {{c1::5730 years}}.`]: {
    question: r`Which of these samples can be dated reliably with carbon-14?`,
    options: [r`A flint spear point shaped 9,000 years ago`, r`A wooden spear shaft about 9,000 years old`, r`A fossil bone about 20 million years old`, r`A layer of volcanic ash 9,000 years old`],
    correctAnswer: 1,
    explanation: r`Wood was once alive, and 9,000 years is under two half-lives of 5,730 years, so plenty of carbon-14 remains to measure. Flint and volcanic ash never exchanged carbon with the atmosphere as living tissue does. After 20 million years, thousands of half-lives have passed and essentially no carbon-14 is left.`,
  },
  [r`The {{c1::Balmer}} series is visible because it ends at $n=2$, while the {{c2::Lyman}} series ends at $n=1$ and is ultraviolet.`]: {
    question: r`A hydrogen spectrum contains one line from the $n = 4$ to $n = 1$ transition and another from the $n = 4$ to $n = 2$ transition. How are the two lines classified?`,
    options: [r`4 → 1 is Balmer (visible); 4 → 2 is Lyman (ultraviolet)`, r`4 → 1 is Lyman (visible); 4 → 2 is Balmer (ultraviolet)`, r`4 → 1 is Lyman (ultraviolet); 4 → 2 is Balmer (visible)`, r`4 → 1 is Lyman (ultraviolet); 4 → 2 is Paschen (infrared)`],
    correctAnswer: 2,
    explanation: r`A series is named by the level where the electron lands: n = 1 is Lyman, in the ultraviolet, and n = 2 is Balmer, in the visible. Starting at n = 4 does not decide the series. Paschen lines end at n = 3, so neither of these transitions belongs to it.`,
  },
}
