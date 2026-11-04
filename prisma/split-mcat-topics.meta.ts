/**
 * Topic-page description + summary (Topic.textContent) for every topic of the
 * split MCAT families (src/lib/mcat-topic-split.ts). prisma/split-mcat-topics.ts
 * writes these when it creates a row and keeps existing rows in step.
 */
export const SUCCESSOR_META: Record<string, { description: string; textContent: string }> = {
  'mcat-physics-electricity-dc-circuits-mcat': {
    description: "Current, voltage, conduction, Ohm's law, resistivity, and series and parallel resistors",
    textContent: `# Circuits Part 1: Current & Resistance

## Current and Voltage
Current is charge flow per time, $I = \\Delta Q/\\Delta t$; conventional current points the way positive charge moves. Metals conduct with electrons, body fluids with ions moving both ways. Voltage is energy per charge: $\\Delta U = q\\Delta V$.

## Resistance
$$V = IR \\qquad R = \\rho\\frac{L}{A}$$
Series resistors share one current and add; parallel resistors share one voltage and combine reciprocally, so the equivalent is below the smallest branch.

## Key Takeaways
- Current is a rate; count carriers by the charge each one carries.
- Longer or thinner wires resist more.
- Series: same current. Parallel: same voltage.`,
  },
  'mcat-physics-electricity-kirchhoff-power-mcat': {
    description: "Kirchhoff's rules, network reduction, dividers, circuit changes, power, bulbs, and electrical safety",
    textContent: `# Circuits Part 2: Kirchhoff's Rules & Power

## Kirchhoff's Rules
The junction rule conserves charge (current in = current out); the loop rule conserves energy (gains = drops around any loop). Collapse a network from the inside out, then walk back out for branch values. A series divider shares voltage in proportion to resistance; a parallel divider sends more current down the smaller resistance.

## Power
$$P = IV = I^2R = \\frac{V^2}{R}$$
In series the larger resistor dissipates more; in parallel the smaller one does. Brightness is power. Current, not voltage, does the harm in a shock.

## Key Takeaways
- Charge and energy are conserved at every junction and around every loop.
- Pick the power form that holds the known quantity constant.
- Adding a parallel branch lowers total resistance and raises total current.`,
  },
  'mcat-physics-electricity-emf-capacitors-mcat': {
    description: 'EMF and internal resistance, meters, capacitance, dielectrics, and stored energy',
    textContent: `# Circuits Part 3: EMF & Capacitance

## Real Batteries and Meters
A real battery is an ideal EMF in series with an internal resistance: $V_{terminal} = \\varepsilon - Ir$ while it supplies current. Ammeters go in series with almost no resistance; voltmeters go in parallel with very high resistance.

## Capacitors
$$C = \\frac{Q}{V} \\qquad C = \\kappa\\varepsilon_0\\frac{A}{d} \\qquad U = \\tfrac{1}{2}CV^2$$
A dielectric raises capacitance. With the battery connected, voltage is fixed; disconnected, charge is fixed.

## Key Takeaways
- Terminal voltage is below the EMF whenever a battery supplies current.
- Decide whether Q or V is held constant before choosing an energy formula.`,
  },
  'mcat-physics-electricity-rc-circuits-mcat': {
    description: 'Capacitor networks, RC circuits, the membrane as an RC circuit, myelin, and defibrillators',
    textContent: `# Circuits Part 4: Capacitor Networks & Bioelectricity

## Capacitor Networks and RC Circuits
Capacitors combine opposite to resistors: directly in parallel, reciprocally in series. An uncharged capacitor acts like a wire the instant a switch closes and like a break once charged. The time constant $\\tau = RC$ sets the pace: about 63% after one $\\tau$, essentially done after about $5\\tau$.

## Bioelectricity
The cell membrane is a capacitor (the bilayer) in parallel with resistors (the ion channels). Myelin lowers membrane capacitance and raises membrane resistance, speeding conduction. A defibrillator charges a capacitor slowly and releases its energy in a brief pulse.

## Key Takeaways
- Capacitor combination rules are the reverse of resistor rules.
- Steady state: no current through a capacitor branch.`,
  },
  'mcat-physics-mechanics-fluids-mcat': {
    description: "Density, hydrostatic pressure, Pascal's principle, buoyancy, and surface tension",
    textContent: `# Fluids at Rest

## Pressure
Pressure in a static fluid grows with depth, not container shape:
$$P = P_0 + \\rho gh$$
Gauge pressure leaves out the atmosphere; absolute pressure includes it. Pascal's principle transmits a pressure change undiminished, so a hydraulic lift multiplies force by the area ratio.

## Buoyancy and Surface Tension
The buoyant force equals the weight of the fluid displaced, $F_b = \\rho_{fluid}V_{sub}g$. An object floats when its average density is below the fluid's, and the submerged fraction equals the density ratio. Cohesion at a surface gives surface tension; adhesion to the walls drives capillary rise.

## Key Takeaways
- Depth, not shape, sets static pressure.
- Buoyancy depends on the fluid displaced, not on the object's weight.`,
  },
  'mcat-physics-mechanics-fluid-dynamics-mcat': {
    description: 'Continuity, Bernoulli, viscosity, Poiseuille flow, and blood flow',
    textContent: `# Fluids in Motion

## Ideal Flow
Continuity, $A_1v_1 = A_2v_2$, makes a fluid speed up where a pipe narrows. Bernoulli's equation,
$$P + \\tfrac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$$
is energy conservation for ideal flow: faster means lower pressure.

## Real Flow and the Circulation
Viscous flow obeys Poiseuille's law: flow scales with $r^4$, so small changes in vessel radius control blood flow. Blood is slowest in the capillaries, where the total cross-sectional area is largest, and the biggest pressure drop is across the arterioles.

## Key Takeaways
- Narrower means faster means lower pressure (ideal flow).
- Halving a vessel's radius cuts flow 16-fold (viscous flow).`,
  },
  'mcat-physics-waves-interference-mcat': {
    description: 'Periodic motion, simple harmonic motion, wave speed, superposition, beats, standing waves, and resonance',
    textContent: `# Waves & Interference

## Periodic Motion and Waves
Period and frequency are reciprocals, $f = 1/T$. A mass on a spring has $T = 2\\pi\\sqrt{m/k}$ and a pendulum $T = 2\\pi\\sqrt{L/g}$; neither depends on the amplitude. Every wave obeys $v = f\\lambda$: the medium sets the speed, the source sets the frequency.

## Interference and Standing Waves
Overlapping waves add. A path difference of a whole number of wavelengths interferes constructively; an odd number of half-wavelengths, destructively. Two close frequencies beat at $|f_1 - f_2|$. A string fixed at both ends, or a pipe open at both ends, supports every harmonic, $f_n = nv/2L$; a pipe closed at one end supports only odd harmonics, $f_n = nv/4L$.

## Key Takeaways
- Medium sets speed; source sets frequency.
- Path difference, in wavelengths, decides the interference.
- Closed-end pipes: odd harmonics only.`,
  },
  'mcat-physics-waves-sound-mcat': {
    description: 'Sound intensity and decibels, the Doppler effect, ultrasound, and shock waves',
    textContent: `# Sound, Doppler & Ultrasound

## Sound Intensity
Intensity falls with the square of distance from a point source. Sound level is logarithmic:
$$\\beta = 10\\log\\frac{I}{I_0}$$
so each 10 dB step is a tenfold change in intensity.

## Doppler and Ultrasound
Approach raises the observed frequency and recession lowers it. Ultrasound finds depth from echo timing, $d = vt/2$, and Doppler ultrasound measures blood speed from the frequency shift. A source faster than sound piles its wavefronts into a shock wave.

## Key Takeaways
- +10 dB means 10 times the intensity.
- Relative approach raises pitch.`,
  },
  // Nov 2026 part splits (MCAT_PART_SPLITS): both halves of each split topic.
  'mcat-general-chemistry-atomic-structure-mcat': {
    description: "Quantum numbers, electron configurations and their exceptions, isotopes, and periodic trends in radius, ionization energy and electronegativity",
    textContent: `# Atomic Structure & Periodic Trends

## Quantum Numbers and Configurations
Four quantum numbers describe each electron: $n$ (shell), $\\ell$ from $0$ to $n-1$ (subshell shape), $m_\\ell$ from $-\\ell$ to $+\\ell$ (orientation) and $m_s = \\pm\\tfrac{1}{2}$. Electrons fill by Aufbau ($4s$ before $3d$), Pauli (two opposite spins per orbital) and Hund (singly first). Cations lose the highest-$n$ electrons first; Cr and Cu promote one $4s$ electron to reach a half-filled or filled $d$ set. Isotopes share $Z$ and chemistry but differ in mass.

## Periodic Trends
Effective nuclear charge, $Z_{\\text{eff}} \\approx Z - S$, drives every trend. Radius grows toward the bottom-left; ionization energy and electronegativity grow toward the top-right. Cations are smaller and anions larger than their atoms, and a big jump in successive ionization energies marks the start of the core.

## Key Takeaways
- Check $\\ell \\leq n-1$ and $|m_\\ell| \\leq \\ell$ before trusting a set of quantum numbers.
- $\\text{IE}_1$ dips from Mg to Al and from P to S.
- The group is the number of electrons removed before the big IE jump.`,
  },
  'mcat-general-chemistry-spectra-nuclear-mcat': {
    description: "Bohr model and emission spectra, the photoelectric effect, photoelectron spectroscopy, de Broglie waves, radioactive decay, half-life and nuclear medicine",
    textContent: `# Atomic Spectra & Nuclear Chemistry

## Spectra and Photoelectron Spectroscopy
In hydrogen $E_n = -13.6/n^2$ eV; an electron falling between levels emits a photon of energy $|\\Delta E| = hf = hc/\\lambda$, and absorbing the same energy lifts it back. Lyman lines end at $n = 1$ (UV), Balmer at $n = 2$ (visible). The photoelectric effect, $KE_{\\max} = hf - \\Phi$, shows light is quantized: intensity changes how many electrons leave, not how fast. In PES, peak position is a subshell's binding energy and peak area counts its electrons.

## Nuclear Chemistry
Alpha decay lowers $A$ by 4 and $Z$ by 2; $\\beta^-$ raises $Z$ by 1; $\\beta^+$ and electron capture lower it by 1; gamma changes neither. Decay is first order, so $N = N_0(1/2)^{t/t_{1/2}}$. Mass defect is binding energy, $E = \\Delta m c^2$. Imaging uses short-lived gamma emitters such as $^{99m}\\text{Tc}$.

## Key Takeaways
- Levels crowd together at high $n$, so $6 \\to 5$ emits far less than $3 \\to 2$.
- Conserve $A$ and $Z$ in every decay, one step of a chain at a time.
- Each half-life halves what is left.`,
  },
  'mcat-general-chemistry-stoichiometry-mcat': {
    description: "Moles, molar mass, percent composition, empirical and molecular formulas, limiting reagent, percent yield, and reaction types",
    textContent: `# Stoichiometry: Moles & Reactions

## Moles and Formulas
The mole is the hub: 1 mol $= 6.022 \\times 10^{23}$ particles $=$ the molar mass in grams $=$ 22.4 L of ideal gas at STP. Percent composition is $n \\times M_{\\text{element}}/M_{\\text{compound}} \\times 100$. For an empirical formula, convert mass percents to moles and divide by the smallest; scale by $M_{\\text{molecular}}/M_{\\text{empirical}}$ for the molecular formula. Grams → moles → mole ratio → grams solves every conversion.

## Limiting Reagent and Yield
Divide each reactant's moles by its coefficient; the smallest result is the limiting reagent, and it sets the theoretical yield. Percent yield $=$ actual / theoretical $\\times 100$. Reactions are classed as combination, decomposition, single and double displacement, and combustion; burning $\\text{C}_x\\text{H}_y$ needs $x + y/4$ mol $\\text{O}_2$.

## Key Takeaways
- Masses never convert directly between substances; only the mole ratio bridges them.
- Compare moles ÷ coefficient, not raw grams or moles, to find the limiting reagent.
- Theoretical yield goes on the bottom of the percent-yield fraction.`,
  },
  'mcat-general-chemistry-solutions-gases-mcat': {
    description: "Molarity, dilution, solution stoichiometry, colligative properties, net ionic equations, gas laws, effusion, real gases, and Faraday's law",
    textContent: `# Solutions, Gases & Electrolysis

## Solutions
Molarity is $M = n/V$ with $V$ in litres; molality is moles per kilogram of solvent. Dilution keeps the moles fixed, so $M_1V_1 = M_2V_2$. In solution stoichiometry, $n = MV$ gives moles to carry across the balanced equation. Colligative properties ($\\Delta T_b = K_b m i$, $\\Delta T_f = K_f m i$, $\\Pi = iMRT$) depend on particle count, not identity. Net ionic equations drop the spectator ions, and a precipitate forms when $Q > K_{sp}$.

## Gases and Electrolysis
$PV = nRT$ with $R = 0.0821$ L·atm/mol·K and $T$ in kelvin. Partial pressures add to the total (Dalton), and the lighter gas effuses faster, $\\text{rate}_A/\\text{rate}_B = \\sqrt{M_B/M_A}$ (Graham). Real gases deviate most at high pressure and low temperature. In electrolysis, mol $e^- = It/F$; divide by the electrons each ion gains to get moles of product.

## Key Takeaways
- Convert mL to L before using $n = MV$, and °C to K before any gas law.
- Multiply by the van 't Hoff factor $i$: NaCl gives 2 particles, $\\text{CaCl}_2$ gives 3.
- Subtract water's vapor pressure for a gas collected over water.`,
  },
  'mcat-general-chemistry-kinetics-mcat': {
    description: "Reaction rates, rate laws and orders from initial-rate data, units of k, integrated rate laws, and zero-, first- and second-order half-lives",
    textContent: `# Kinetics: Rate Laws & Half-Lives

## Rate Laws and Order
A rate law has the form rate $= k[\\text{A}]^m[\\text{B}]^n$, and the orders come from experiment, not from the balanced equation: compare initial-rate runs in which only one concentration changes, so the rate factor equals the concentration ratio raised to the order. The overall order is the sum of the exponents, and the units of $k$ reveal it ($\\text{s}^{-1}$ for first order, $\\text{M}^{-1}\\text{s}^{-1}$ for second). Concentration changes the rate but never $k$. A zero-order rate is independent of concentration, as when an enzyme is saturated.

## Integrated Rate Laws and Half-Life
The straight-line plot names the order: $[\\text{A}]$ vs $t$ for zero order, $\\ln[\\text{A}]$ vs $t$ for first order, $1/[\\text{A}]$ vs $t$ for second order. First-order half-life, $t_{1/2} = 0.693/k$, is constant, so $(1/2)^n$ remains after $n$ half-lives; radioactive decay and most drug elimination work this way. Zero-order half-lives grow with $[\\text{A}]_0$ and second-order half-lives shrink with it.

## Key Takeaways
- Orders come from data: initial-rate ratios, the linear plot, or the units of $k$.
- Only first order has a constant half-life.
- Two half-lives leave 1/4, not zero.`,
  },
  'mcat-general-chemistry-energy-mechanisms-mcat': {
    description: "Activation energy, reaction-coordinate diagrams, the Arrhenius equation, collision theory, mechanisms and the rate-determining step, catalysis, and enzyme kinetics",
    textContent: `# Kinetics: Energy, Catalysis & Mechanisms

## Activation Energy and Arrhenius
The activation energy $E_a$ is the barrier from the reactant valley to the transition state, and $\\Delta H = E_a(\\text{fwd}) - E_a(\\text{rev})$. In $k = Ae^{-E_a/RT}$ the exponential is the fraction of collisions energetic enough to react, and $A$ carries collision frequency and orientation, so higher $T$ or lower $E_a$ raises $k$; an Arrhenius plot of $\\ln k$ vs $1/T$ has slope $-E_a/R$. A transition state is a peak that cannot be isolated; an intermediate sits in a valley.

## Mechanisms and Catalysis
The slowest elementary step sets the rate law; an intermediate in it is replaced using a fast pre-equilibrium. Intermediates are made then used up, catalysts used then remade. A catalyst lowers $E_a$ in both directions, leaving $\\Delta H$ and $K$ unchanged. Enzymes follow Michaelis-Menten kinetics: $K_m$ is the [S] giving $V_{\\text{max}}/2$; competitive inhibitors raise $K_m$, noncompetitive inhibitors lower $V_{\\text{max}}$.

## Key Takeaways
- Barriers set the speed; $\\Delta G$ and $\\Delta H$ do not.
- The rate-determining step sets the rate law.
- A catalyst changes kinetics, never equilibrium.`,
  },
  'mcat-general-chemistry-acid-base-equilibrium-mcat': {
    description: "Acid-base definitions, pH and pOH, strong vs. weak acids and bases, Ka and Kb, Henderson-Hasselbalch, percent dissociation, buffers, and blood pH",
    textContent: `# Acids, Bases & Buffers

## pH, Ka and Kb
$\\text{pH} = -\\log[\\text{H}^+]$ and $\\text{pH} + \\text{pOH} = 14$ at 25 °C. Strong acids dissociate completely, so $[\\text{H}^+]$ equals their concentration; a weak acid needs $K_a$, with $[\\text{H}^+] \\approx \\sqrt{K_a C}$ when dissociation is small. For a conjugate pair $K_a K_b = K_w$, so $\\text{p}K_a + \\text{p}K_b = 14$. Diluting a weak acid raises its pH but increases its percent dissociation.

## Buffers
A buffer pairs a weak acid with its conjugate base: $\\text{A}^-$ absorbs added $\\text{H}^+$ and HA absorbs added $\\text{OH}^-$. $\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$, so a buffer works within about one unit of its $\\text{p}K_a$, and its capacity grows with total concentration. Blood's bicarbonate buffer ($\\text{p}K_a \\approx 6.1$) holds pH at 7.35–7.45; lungs set $\\text{CO}_2$ and kidneys set $\\text{HCO}_3^-$.

## Key Takeaways
- A lower $\\text{p}K_a$ means a stronger acid and a weaker conjugate base.
- The $\\text{p}K_a$ sets where a buffer works; concentration sets how much it absorbs.
- Hyperventilation blows off $\\text{CO}_2$ and causes respiratory alkalosis.`,
  },
  'mcat-general-chemistry-titrations-equilibrium-mcat': {
    description: "Titration curves, equivalence and half-equivalence points, indicators, polyprotic titrations, Kc and Kp, Le Chatelier's principle, Ksp, and the common-ion effect",
    textContent: `# Titrations, Equilibrium & Solubility

## Titrations
At equivalence, moles of acid equal moles of base ($M_aV_a = M_bV_b$ for 1:1). Halfway there, $[\\text{HA}] = [\\text{A}^-]$ and $\\text{pH} = \\text{p}K_a$. The equivalence pH follows the salt: 7.00 for strong + strong, above 7 for a weak acid, below 7 for a weak base. Choose an indicator whose range brackets the equivalence pH; a polyprotic acid shows one equivalence point per ionizable proton.

## Equilibrium and Solubility
$K$ omits pure solids and liquids, and $K_p = K_c(RT)^{\\Delta n}$. $Q < K$ shifts right and $Q > K$ left. Concentration and pressure move the position; only temperature changes $K$, and catalysts change neither. For a salt, $K_{sp}$ follows stoichiometry ($\\text{CaF}_2$: $K_{sp} = 4s^3$), a precipitate forms when $Q_{sp} > K_{sp}$, and a common ion lowers solubility.

## Key Takeaways
- Half-equivalence: $\\text{pH} = \\text{p}K_a$; equivalence is the steepest point.
- Only temperature changes $K$.
- A shared ion makes a salt LESS soluble.`,
  },
  'mcat-lab-methods-mcat': {
    description: "Chromatography and R_f, extraction, distillation, recrystallization, and electrophoresis: SDS-PAGE, native gels, isoelectric focusing and 2D gels",
    textContent: `# Lab Methods: Separations & Electrophoresis

## Chromatography and Purification
Every chromatography method partitions a mixture between a stationary and a mobile phase: the more a compound binds the stationary phase, the slower it moves. On normal-phase silica TLC, polar compounds travel least, and $R_f$ = spot distance / solvent-front distance. Size-exclusion elutes large molecules first, ion exchange binds opposite charge, and affinity columns bind one specific ligand. Extraction moves a compound between immiscible layers by changing its charge with pH; distillation separates by boiling point, and recrystallization by solubility versus temperature.

## Electrophoresis
Migration scales with $qE/f$: charge and field speed a molecule, size and a dense gel slow it. SDS-PAGE coats proteins in uniform negative charge, so it sorts by size alone, and DNA always runs to the anode. Above its pI a protein is net negative; isoelectric focusing stops each protein where pH = pI, and a 2D gel adds SDS-PAGE to separate by pI and size.

## Key Takeaways
- A lower band traveled farther, so it is the smaller molecule.
- Use bicarbonate for a carboxylic acid and NaOH for a phenol; acid pulls out an amine.
- Two 2D-gel spots at one height share a size but differ in pI.`,
  },
  'mcat-lab-methods-spectroscopy-assays-mcat': {
    description: "Centrifugation and Svedberg units, UV-Vis, IR, NMR and mass spectrometry, Beer's law, and the blots, PCR and ELISA",
    textContent: `# Lab Methods: Centrifugation, Spectroscopy & Assays

## Centrifugation and Spectroscopy
Larger and denser particles sediment faster. Differential centrifugation pellets nuclei, then mitochondria, then microsomes, then ribosomes as speed rises; an isopycnic gradient bands each particle at its own density. Report force in $\\times g$, since RCF grows with rotor radius and RPM squared. UV-Vis reads electronic transitions and conjugation, IR finds functional groups (C=O near 1700 cm$^{-1}$), NMR maps H environments, and mass spectrometry gives molecular weight. Beer's law, $A = \\varepsilon l c$, turns absorbance into concentration.

## Molecular Assays
Southern blots detect DNA, Northern blots RNA, and Western blots protein. PCR doubles the target each denature-anneal-extend cycle, so copies $= N_0 \\times 2^n$; RT-PCR starts from RNA. A sandwich ELISA reads antigen amount as color, quantified against a standard curve.

## Key Takeaways
- Svedberg values are not additive: 50S + 30S makes a 70S ribosome.
- Beyond about $A = 1$ the Beer's-law line bends; dilute and remeasure.
- Measure mRNA with RT-qPCR or a Northern blot, protein with a Western or ELISA.`,
  },
  'mcat-microbiology-genetics-mcat': {
    description: "The bacterial genome and plasmids, mutation and selection, replica plating and the Ames test, and horizontal gene transfer by transformation, transduction and conjugation",
    textContent: `# Bacterial Genetics & Gene Transfer

## The Bacterial Genome, Mutation & Selection
A bacterium carries one circular chromosome in one copy, so a recessive mutation shows its phenotype at once. Plasmids add optional genes: the F plasmid makes a conjugation donor, and R plasmids carry resistance genes. Selection kills everything except the cells sought (antibiotic or minimal plates); screening lets all grow and marks the ones sought. Replica plating and the fluctuation test showed resistance mutations arise before the drug arrives, and the Ames test scores reversion of a histidine auxotroph.

## Horizontal Gene Transfer
Transformation takes up naked DNA (stopped by DNase); transduction carries host DNA in a phage coat (resists DNase, crosses filters); conjugation passes DNA through a pilus bridge (needs contact). An F+ donor makes F+ recipients; an Hfr, with F integrated, sends chromosome in map order, so interrupted mating maps genes in minutes; an F′ makes a merodiploid.

## Key Takeaways
- One copy of each gene: no allele masks a recessive mutation.
- DNase stops only transformation; a filter stops only conjugation.
- Hfr recipients stay F−; entry time maps gene order.`,
  },
  'mcat-microbiology-genetics-regulation-mcat': {
    description: "Transposons, restriction-modification and CRISPR, lac and trp operon genetics, prophages, Hershey-Chase, complementation, and viral mutation, recombination and reassortment",
    textContent: `# Mobile Elements, Gene Regulation & Viral Genetics

## Mobile DNA, Defense & Operons
Transposons move DNA within one cell; a composite transposon carries cargo such as resistance between two IS elements, and an insertion can knock out a gene or silence those downstream of it. Restriction enzymes cut unmethylated copies of their site (innate defense); CRISPR stores spacers from past invaders and guides Cas to cut them (adaptive, heritable). Lac is inducible: allolactose releases the repressor, and CAP-cAMP activates it when glucose is low. Trp is repressible: tryptophan is the corepressor. Repressors act in trans; operators act in cis.

## Viral Genetics
DNA damage destroys the phage repressor and induces a prophage. Hershey-Chase showed DNA, not protein, enters and is inherited. Complementation in nearly every co-infected cell places mutations in different genes; rare heritable wild type is recombination. Unproofread RNA copying drives antigenic drift; swapping whole segments (reassortment) drives antigenic shift.

## Key Takeaways
- Transposition is a within-cell move; plasmids move genes between cells.
- Proteins act in trans, DNA sites in cis.
- Only segmented viruses such as influenza can shift.`,
  },
  'mcat-anatomy-physiology-embryology-mcat': {
    description: "Fertilization and polyspermy blocks, cleavage, the blastocyst and implantation, twinning, gastrulation, germ-layer derivatives, neurulation, and neural crest",
    textContent: `# Early Embryology: Fertilization to Germ Layers

## Fertilization to Implantation
Fertilization happens in the ampulla of the fallopian tube; the acrosome reaction lets the sperm through the zona pellucida, and fast (depolarization) and slow (cortical reaction) blocks stop polyspermy. Cleavage divides the zygote without growth, so cells shrink as their number rises. The morula becomes a blastocyst: the inner cell mass forms the embryo and the trophoblast forms the chorion and fetal placenta, secreting hCG as it implants about a week after fertilization. Monozygotic twins come from one embryo splitting; dizygotic twins from two eggs.

## Gastrulation and Neurulation
Epiblast cells move in through the primitive streak to form endoderm, then mesoderm; the rest stays ectoderm. Ectoderm makes skin, lens and the nervous system; mesoderm makes muscle, bone, blood, kidneys and gonads; endoderm lines the gut and airway and buds the liver and pancreas. The notochord induces the neural plate, which folds into the neural tube; failed closure causes spina bifida, made less likely by folate. Neural crest cells migrate out to form PNS ganglia, Schwann cells, melanocytes, the adrenal medulla and facial bones.

## Key Takeaways
- The inner cell mass makes the embryo; the trophoblast makes the placenta and hCG.
- Endoderm lines tubes; mesoderm wraps them.
- The adrenal medulla is neural crest, but the adrenal cortex is mesoderm.`,
  },
  'mcat-anatomy-physiology-organogenesis-mcat': {
    description: "Extraembryonic membranes, the placenta, umbilical vessels and fetal shunts, HbF, teratogens, potency, induction, morphogens, and experimental embryology",
    textContent: `# Organogenesis, Fetal Circulation & Developmental Mechanisms

## Membranes, Placenta and Fetal Circulation
The amnion cushions the embryo, the chorion forms the fetal placenta and makes hCG, the yolk sac makes the first blood cells and germ cells, and the allantois becomes the umbilical vessels. Placental villi exchange gases and nutrients without maternal and fetal blood mixing, and only IgG crosses. The single umbilical vein carries oxygenated blood to the fetus. Three shunts reroute it: the ductus venosus bypasses the liver, and the foramen ovale and ductus arteriosus bypass the lungs until the first breath reverses atrial pressures. HbF binds 2,3-BPG poorly, so it holds O$_2$ more tightly than HbA. Weeks 3-8 of organogenesis are the window for teratogen damage.

## How Cells Choose Their Fates
Potency only narrows: the zygote is totipotent, inner cell mass and ES cells are pluripotent, and adult stem cells are multipotent. Determination (invisible commitment) comes before differentiation. In induction one tissue signals a competent neighbor, as the dorsal lip of the blastopore (the organizer) recruits host cells into a second body axis. A morphogen such as Shh sets fate by concentration. Transplantation tests determination, ablation tests necessity, and lineage tracing shows fate but not potency.

## Key Takeaways
- Umbilical vessels are named for the fetal heart: the vein carries oxygenated blood.
- ES cells cannot make placenta, so they are pluripotent, not totipotent.
- Ablation shows a tissue is necessary, never that it is sufficient.`,
  },
  'mcat-sociology-groups-interaction-mcat': {
    description: "Statuses and roles, role strain and conflict, group types and size, conformity, obedience, compliance, presence effects, and group decision pathologies",
    textContent: `# Groups, Roles & Social Influence

## Statuses, Roles and Groups
A status is a social position, ascribed or achieved; a master status overrides the rest. A role is the behavior a status carries: role strain is tension within one status, role conflict a clash between two, and role exit rebuilds the self after a central role ends. Primary groups are intimate and build the self, secondary groups are impersonal and goal-directed, and reference groups set the standard people measure themselves against. A dyad is intimate but fragile; a third member brings coalitions and mediation.

## How Groups Bend Individuals
Normative conformity seeks acceptance and informational conformity seeks accuracy under ambiguity (Asch was normative). Obedience depends on the authority's legitimacy and proximity (Milgram). Foot-in-the-door runs small then large; door-in-the-face runs large-and-refused, then moderate. An audience strengthens the dominant response (social facilitation), pooled effort invites social loafing, and anonymity plus arousal deindividuates. Groupthink silences dissent into a bad consensus; group polarization amplifies a shared lean.

## Key Takeaways
- Count the statuses: one status with clashing demands is strain, two is conflict.
- Observers help practiced tasks and hurt novel ones.
- A unanimous verdict alone never diagnoses groupthink; dissent must have been silenced.`,
  },
  'mcat-sociology-interaction-organizations-mcat': {
    description: "Dramaturgy and impression management, emotional labor, social networks, bureaucracy and formal organizations, stereotypes, prejudice, discrimination, and reading interaction experiments",
    textContent: `# Social Interaction, Organizations & Discrimination

## The Interaction Order
Goffman treats interaction as performance: impression management runs on the front stage, and the back stage, defined relative to an audience, is for rehearsal and repair. Feeling rules script emotion at work, and a chronic gap between felt and paid-for emotion predicts burnout. Strong ties are dense and redundant; weak ties bridge clusters and carry novel information such as job leads. Weber's bureaucracy (division of labor, hierarchy, written rules, impersonality, merit hiring) buys predictability but breeds goal displacement, and Michels's iron law says large organizations drift toward rule by a few.

## Prejudice and Discrimination
A stereotype is a belief, prejudice an attitude and discrimination a behavior, and each can occur without the others. Institutional discrimination lives in rules and procedures, so it persists even when no individual is prejudiced. Contact reduces prejudice only with equal status, common goals, cooperation and institutional support. Stereotype threat is situational and reversible, and a self-fulfilling prophecy makes an expectation real by changing how people are treated. In an audit study, random assignment, not sample size, makes the group cue the only difference.

## Key Takeaways
- Back stage is relative to an audience, not a fixed place.
- Goal displacement is structural: staff follow the rules and the system still defeats its goal.
- Behavior in a randomized audit outranks self-reported attitudes.`,
  },
  // Magnetism part split (owner decision 2026-11-04): both halves.
  'mcat-physics-electricity-magnetism-mcat': {
    description: 'Magnetic fields and their sources, tesla and gauss, magnetic materials, the force on a moving charge, the right-hand rule, and circular motion in a field',
    textContent: `# Magnetism Part 1: Fields & Forces on Charges

## Magnetic Fields and Their Sources
All magnetism comes from moving charge. Field strength is measured in tesla ($1\\;\\text{G} = 10^{-4}\\;\\text{T}$; Earth's field is about 0.5 G, an MRI magnet 1.5 to 3 T). There are no magnetic monopoles, so every field line is a closed loop. A long straight wire's field circles it, $B = \\mu_0 I/2\\pi r$, falling off as $1/r$ (not inverse-square), with its sense from the right-hand curl rule; loops act as dipoles and a solenoid gives a strong, uniform interior field. Ferromagnets stay magnetized, paramagnets (unpaired electrons, deoxyhemoglobin) are weakly attracted while a field is on, and diamagnets (paired electrons, water, oxyhemoglobin) are weakly repelled.

## Forces on Moving Charges
$$F = qvB\\sin\\theta$$
The force is zero on a charge at rest or moving along the field and greatest when the velocity is perpendicular to it. The right-hand rule (fingers along $\\vec{v}$, curl toward $\\vec{B}$, thumb gives the force on a positive charge; flip it for a negative one) sets the direction. Because the force is always perpendicular to the velocity it does no work: a magnetic field steers a charge but never changes its speed. Perpendicular entry gives a circle with $r = mv/qB$ and a speed-independent period $T = 2\\pi m/qB$; oblique entry gives a helix.

## Key Takeaways
- A wire's field falls off as $1/r$; a point charge's field as $1/r^2$.
- Only an electric field changes a charge's kinetic energy.
- Faster or heavier means a wider circle; a stronger field or a bigger charge means a tighter one.`,
  },
  'mcat-physics-electricity-induction-mcat': {
    description: "Force on a current-carrying wire, parallel wires, the velocity selector and mass spectrometer, magnetic flux, Faraday's and Lenz's laws, and the MRI passage",
    textContent: `# Magnetism Part 2: Wires, Spectrometers & Induction

## Wires, Selectors and the Mass Spectrometer
A current-carrying wire feels $F = BIL\\sin\\theta$, zero when it lies along the field and greatest when perpendicular; parallel currents attract and antiparallel currents repel. Crossed electric and magnetic fields pass only the speed $v = E/B$, whatever the particle's mass or charge (the velocity selector). In the analyzer field that follows, $r = mv/qB$ turns mass into radius; strictly the spectrometer sorts ions by $m/q$.

## Induction
Magnetic flux is $\\Phi = BA\\cos\\theta$ in webers, with $\\theta$ measured from the loop's normal. Faraday's law, $|\\varepsilon| = N\\,\\Delta\\Phi/\\Delta t$, says only a CHANGING flux induces an EMF, by changing $B$, $A$ or $\\theta$ (a sliding rod gives $\\varepsilon = BLv$; a rotating loop is a generator). Lenz's law is the minus sign: the induced current opposes the change in flux, which is energy conservation. An MRI scanner is a superconducting solenoid whose steady field induces nothing; its switched gradient coils do, which is why implanted wires are a hazard.

## Key Takeaways
- Parallel currents attract, the reverse of like charges.
- A velocity selector picks a speed; the radius in the analyzer reads $m/q$.
- A steady flux, however large, induces no EMF; multiply by the turns $N$.`,
  },
}
