import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Physics 2 formula & concept flashcards...\n');

  const topicSlugs = [
    'temperature-thermal-expansion',
    'heat-specific-heat',
    'phase-changes-latent-heat',
    'laws-of-thermodynamics',
    'density-and-pressure',
    'buoyancy-archimedes-principle',
    'fluid-dynamics-continuity',
    'bernoullis-equation',
    'electric-charge-coulombs-law',
    'electric-fields-potential',
    'current-resistance-ohms-law',
    'series-parallel-circuits',
    'kirchhoffs-laws',
    'magnetic-fields-forces',
    'electromagnetic-induction',
    'reflection-refraction',
    'lenses',
    'interference-diffraction',
    'photons-atomic-nuclear',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`⚠ Topic not found: ${slug}`);
      continue;
    }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  // Temperature & Thermal Expansion
  const t1 = await prisma.topic.findFirst({ where: { slug: 'temperature-thermal-expansion' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'How do you convert between Celsius and Kelvin?', back: '$T_K = T_C + 273.15$. Kelvin is the SI unit for temperature. Zero Kelvin (absolute zero) is the lowest possible temperature — all molecular motion effectively stops.', hint: 'Just add 273.' },
        { topicId: t1.id, front: 'What is the linear thermal expansion formula?', back: '$\\Delta L = \\alpha L_0 \\Delta T$, where $\\alpha$ is the coefficient of linear expansion, $L_0$ is original length, and $\\Delta T$ is the temperature change.', hint: 'Materials expand when heated.' },
      ],
    });
    console.log('✅ Temperature & Thermal Expansion flashcards');
  }

  // Heat & Specific Heat
  const t2 = await prisma.topic.findFirst({ where: { slug: 'heat-specific-heat' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is the specific heat formula?', back: '$Q = mc\\Delta T$, where $Q$ is heat transferred, $m$ is mass, $c$ is specific heat capacity, and $\\Delta T$ is the temperature change. Units: $Q$ in Joules.', hint: 'Heat = mass × specific heat × temperature change.' },
        { topicId: t2.id, front: 'What does a high specific heat mean?', back: 'A substance with high specific heat (like water, $c = 4186$ J/kg·°C) requires more energy to change its temperature. Water heats up and cools down slowly compared to metals.', hint: 'Water has one of the highest specific heats.' },
      ],
    });
    console.log('✅ Heat & Specific Heat flashcards');
  }

  // Phase Changes & Latent Heat
  const t3 = await prisma.topic.findFirst({ where: { slug: 'phase-changes-latent-heat' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is latent heat?', back: '$Q = mL$, where $L$ is the latent heat. $L_f$ = latent heat of fusion (melting/freezing). $L_v$ = latent heat of vaporization (boiling/condensing). Temperature stays constant during phase changes.', hint: 'Energy for phase change without temperature change.' },
        { topicId: t3.id, front: 'Why does temperature remain constant during a phase change?', back: 'The energy goes into breaking or forming intermolecular bonds rather than increasing kinetic energy of particles. Temperature only changes when kinetic energy changes.', hint: 'Energy breaks bonds, not increases speed.' },
      ],
    });
    console.log('✅ Phase Changes & Latent Heat flashcards');
  }

  // Laws of Thermodynamics
  const t4 = await prisma.topic.findFirst({ where: { slug: 'laws-of-thermodynamics' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'State the First Law of Thermodynamics.', back: '$\\Delta U = Q - W$ (or $\\Delta U = Q + W$ depending on sign convention). The change in internal energy equals heat added to the system minus work done by the system. Energy is conserved.', hint: 'Conservation of energy for thermal systems.' },
        { topicId: t4.id, front: 'State the Second Law of Thermodynamics.', back: 'In any natural process, the total entropy of an isolated system always increases (or stays the same): $\\Delta S_{\\text{total}} \\ge 0$. Heat flows spontaneously from hot to cold, never the reverse.', hint: 'Entropy always increases. Heat flows hot → cold.' },
        { topicId: t4.id, front: 'What is the ideal gas law?', back: '$PV = nRT$ or $PV = Nk_BT$, where $P$ = pressure, $V$ = volume, $n$ = moles, $R = 8.314$ J/(mol·K), $N$ = number of molecules, $k_B = 1.38 \\times 10^{-23}$ J/K.', hint: 'PV = nRT — relates pressure, volume, temperature.' },
      ],
    });
    console.log('✅ Laws of Thermodynamics flashcards');
  }

  // Density and Pressure
  const t5 = await prisma.topic.findFirst({ where: { slug: 'density-and-pressure' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is pressure and what are its units?', back: '$P = \\frac{F}{A}$, force per unit area. SI unit: Pascal (Pa) = N/m². 1 atm = $1.013 \\times 10^5$ Pa = 760 mmHg.', hint: 'Force over area. 1 atm ≈ 10⁵ Pa.' },
        { topicId: t5.id, front: 'What is the formula for pressure at depth in a fluid?', back: '$P = P_0 + \\rho g h$, where $P_0$ is the surface pressure, $\\rho$ is fluid density, $g$ is gravitational acceleration, and $h$ is the depth below the surface.', hint: 'Pressure increases linearly with depth.' },
      ],
    });
    console.log('✅ Density and Pressure flashcards');
  }

  // Buoyancy & Archimedes' Principle
  const t6 = await prisma.topic.findFirst({ where: { slug: 'buoyancy-archimedes-principle' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: "State Archimedes' Principle.", back: 'The buoyant force on a submerged or partially submerged object equals the weight of the displaced fluid: $F_b = \\rho_{\\text{fluid}} V_{\\text{displaced}} g$.', hint: 'Buoyant force = weight of displaced fluid.' },
        { topicId: t6.id, front: 'When does an object float?', back: 'An object floats when its average density is less than the fluid density ($\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$). At equilibrium, the buoyant force equals the weight: $\\rho_f V_{\\text{disp}} g = \\rho_{\\text{obj}} V_{\\text{obj}} g$.', hint: 'Less dense than the fluid → floats.' },
      ],
    });
    console.log("✅ Buoyancy & Archimedes' Principle flashcards");
  }

  // Fluid Dynamics & Continuity
  const t7 = await prisma.topic.findFirst({ where: { slug: 'fluid-dynamics-continuity' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'State the Continuity Equation.', back: '$A_1 v_1 = A_2 v_2$ for incompressible fluids. The flow rate $Q = Av$ is constant throughout a pipe. Smaller cross-section → faster flow.', hint: 'What flows in must flow out — conservation of mass.' },
      ],
    });
    console.log('✅ Fluid Dynamics & Continuity flashcards');
  }

  // Bernoulli's Equation
  const t8 = await prisma.topic.findFirst({ where: { slug: 'bernoullis-equation' } });
  if (t8) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t8.id, front: "State Bernoulli's Equation.", back: "$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$ along a streamline. It's conservation of energy for flowing fluids: pressure energy + kinetic energy + potential energy per unit volume.", hint: 'Higher speed → lower pressure.' },
        { topicId: t8.id, front: "What is the Venturi effect?", back: "When fluid flows through a constriction, speed increases and pressure decreases (from Bernoulli's equation). This explains airplane lift, Venturi meters, and atomizer spray bottles.", hint: 'Narrow → fast → low pressure.' },
      ],
    });
    console.log("✅ Bernoulli's Equation flashcards");
  }

  // Electric Charge & Coulomb's Law
  const t9 = await prisma.topic.findFirst({ where: { slug: 'electric-charge-coulombs-law' } });
  if (t9) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t9.id, front: "State Coulomb's Law.", back: "$F = k\\frac{|q_1 q_2|}{r^2}$, where $k = 8.99 \\times 10^9$ N·m²/C². Like charges repel, opposite charges attract. Inverse-square law, like gravity.", hint: 'Same structure as Newton\'s gravitational law but with charges.' },
        { topicId: t9.id, front: 'What is the elementary charge?', back: '$e = 1.6 \\times 10^{-19}$ C. Protons have charge $+e$, electrons have charge $-e$. Charge is quantized — always a multiple of $e$.', hint: '1.6 × 10⁻¹⁹ Coulombs.' },
        { topicId: t9.id, front: 'What is conservation of electric charge?', back: 'The total electric charge in an isolated system is always conserved. Charge can be transferred between objects but cannot be created or destroyed.', hint: 'Charge is neither created nor destroyed.' },
      ],
    });
    console.log("✅ Electric Charge & Coulomb's Law flashcards");
  }

  // Electric Fields & Potential
  const t10 = await prisma.topic.findFirst({ where: { slug: 'electric-fields-potential' } });
  if (t10) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t10.id, front: 'What is the electric field due to a point charge?', back: '$E = k\\frac{|q|}{r^2}$. Direction: away from positive charges, toward negative charges. The field is the force per unit positive test charge: $\\vec{E} = \\frac{\\vec{F}}{q_0}$.', hint: 'Force per unit charge — points away from + charges.' },
        { topicId: t10.id, front: 'What is electric potential (voltage)?', back: '$V = k\\frac{q}{r}$ for a point charge. Electric potential energy per unit charge: $V = \\frac{U}{q}$. Units: Volts (V) = J/C. Positive charges create positive V; negative create negative V.', hint: 'Energy per unit charge. Scalar, not vector.' },
        { topicId: t10.id, front: 'What is the relationship between electric field and potential?', back: '$E = -\\frac{\\Delta V}{\\Delta x}$ (uniform field). The electric field points from high to low potential. Equipotential lines are perpendicular to field lines.', hint: 'E field points downhill in potential.' },
      ],
    });
    console.log('✅ Electric Fields & Potential flashcards');
  }

  // Current, Resistance, Ohm's Law
  const t11 = await prisma.topic.findFirst({ where: { slug: 'current-resistance-ohms-law' } });
  if (t11) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t11.id, front: "State Ohm's Law.", back: '$V = IR$, where $V$ is voltage (V), $I$ is current (A), and $R$ is resistance (Ω). Current flows from high to low potential. Conventional current is opposite to electron flow.', hint: 'V = IR. Voltage drives current through resistance.' },
        { topicId: t11.id, front: 'What is electric power?', back: '$P = IV = I^2R = \\frac{V^2}{R}$. Power is the rate of energy dissipation. Units: Watts (W). Three equivalent forms from combining $P = IV$ with $V = IR$.', hint: 'P = IV, or substitute using Ohm\'s Law.' },
        { topicId: t11.id, front: 'What determines the resistance of a wire?', back: '$R = \\frac{\\rho L}{A}$, where $\\rho$ is resistivity (material property), $L$ is length, and $A$ is cross-sectional area. Longer wire → more R; thicker wire → less R.', hint: 'Resistance ∝ length, inversely ∝ area.' },
      ],
    });
    console.log("✅ Current, Resistance, Ohm's Law flashcards");
  }

  // Series & Parallel Circuits
  const t12 = await prisma.topic.findFirst({ where: { slug: 'series-parallel-circuits' } });
  if (t12) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t12.id, front: 'How do resistors combine in series?', back: '$R_{\\text{total}} = R_1 + R_2 + R_3 + \\ldots$ Same current through each resistor. Voltage divides among resistors.', hint: 'Series: same current, voltages add, resistances add.' },
        { topicId: t12.id, front: 'How do resistors combine in parallel?', back: '$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots$ Same voltage across each resistor. Current divides among branches. Total R is always less than the smallest individual R.', hint: 'Parallel: same voltage, currents add, reciprocals add.' },
        { topicId: t12.id, front: 'How do capacitors combine in series vs. parallel?', back: 'Opposite of resistors! Series: $\\frac{1}{C_{\\text{total}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\ldots$ Parallel: $C_{\\text{total}} = C_1 + C_2 + \\ldots$', hint: 'Capacitors: parallel adds directly, series adds reciprocals.' },
      ],
    });
    console.log('✅ Series & Parallel Circuits flashcards');
  }

  // Kirchhoff's Laws
  const t13 = await prisma.topic.findFirst({ where: { slug: 'kirchhoffs-laws' } });
  if (t13) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t13.id, front: "State Kirchhoff's Junction Rule.", back: 'The sum of currents entering a junction equals the sum leaving: $\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$. Based on conservation of charge.', hint: 'Charge in = charge out.' },
        { topicId: t13.id, front: "State Kirchhoff's Loop Rule.", back: 'The sum of voltage changes around any closed loop is zero: $\\sum \\Delta V = 0$. Based on conservation of energy. Voltage rises across batteries, drops across resistors.', hint: 'What goes up must come down — energy conservation.' },
      ],
    });
    console.log("✅ Kirchhoff's Laws flashcards");
  }

  // Magnetic Fields & Forces
  const t14 = await prisma.topic.findFirst({ where: { slug: 'magnetic-fields-forces' } });
  if (t14) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t14.id, front: 'What is the magnetic force on a moving charge?', back: '$F = qvB\\sin\\theta$. Direction given by the right-hand rule: point fingers in $\\vec{v}$ direction, curl toward $\\vec{B}$, thumb points in $\\vec{F}$ direction (for positive charge).', hint: 'F = qvBsinθ — perpendicular to both v and B.' },
        { topicId: t14.id, front: 'What is the force on a current-carrying wire in a magnetic field?', back: '$F = BIL\\sin\\theta$, where $B$ is the magnetic field, $I$ is the current, $L$ is the wire length, and $\\theta$ is the angle between the wire and field.', hint: 'F = BILsinθ — force on the wire, not individual charges.' },
        { topicId: t14.id, front: 'What path does a charged particle follow in a uniform magnetic field?', back: 'A circle (if $\\vec{v} \\perp \\vec{B}$) or a helix (if $\\vec{v}$ has a component along $\\vec{B}$). The magnetic force provides centripetal force: $qvB = \\frac{mv^2}{r}$, so $r = \\frac{mv}{qB}$.', hint: 'Circular motion: F is always perpendicular to v.' },
      ],
    });
    console.log('✅ Magnetic Fields & Forces flashcards');
  }

  // Electromagnetic Induction
  const t15 = await prisma.topic.findFirst({ where: { slug: 'electromagnetic-induction' } });
  if (t15) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t15.id, front: "State Faraday's Law of Electromagnetic Induction.", back: "$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$, where $\\Phi_B = BA\\cos\\theta$ is magnetic flux. A changing magnetic flux through a loop induces an EMF (voltage).", hint: 'Changing flux → induced EMF.' },
        { topicId: t15.id, front: "State Lenz's Law.", back: "The induced current flows in a direction that opposes the change in flux that caused it. This is the reason for the negative sign in Faraday's Law. It's conservation of energy applied to induction.", hint: 'Induced current opposes the change — nature resists.' },
      ],
    });
    console.log('✅ Electromagnetic Induction flashcards');
  }

  // Reflection & Refraction
  const t16 = await prisma.topic.findFirst({ where: { slug: 'reflection-refraction' } });
  if (t16) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t16.id, front: "State Snell's Law.", back: '$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$, where $n$ is the index of refraction and $\\theta$ is the angle from the normal. Light bends toward the normal when entering a denser medium.', hint: 'n₁sinθ₁ = n₂sinθ₂.' },
        { topicId: t16.id, front: 'What is total internal reflection?', back: 'When light travels from a denser to a less dense medium ($n_1 > n_2$) and the angle of incidence exceeds the critical angle $\\theta_c = \\sin^{-1}(n_2/n_1)$, all light is reflected. No refracted ray exists.', hint: 'Only from dense → less dense, and only above the critical angle.' },
        { topicId: t16.id, front: 'What is the index of refraction?', back: '$n = \\frac{c}{v}$, where $c$ is the speed of light in vacuum and $v$ is the speed in the medium. Always $n \\ge 1$. Water: $n \\approx 1.33$; glass: $n \\approx 1.5$.', hint: 'n = c/v — larger n means slower light.' },
      ],
    });
    console.log('✅ Reflection & Refraction flashcards');
  }

  // Lenses
  const t17 = await prisma.topic.findFirst({ where: { slug: 'lenses' } });
  if (t17) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t17.id, front: 'What is the thin lens equation?', back: '$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$, where $f$ is focal length, $d_o$ is object distance, $d_i$ is image distance. Sign convention: real images have positive $d_i$; virtual images have negative $d_i$.', hint: '1/f = 1/do + 1/di.' },
        { topicId: t17.id, front: 'What is magnification?', back: '$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$. $|m| > 1$: enlarged; $|m| < 1$: reduced. $m > 0$: upright; $m < 0$: inverted.', hint: 'Negative ratio of image to object distance.' },
      ],
    });
    console.log('✅ Lenses flashcards');
  }

  // Interference & Diffraction
  const t18 = await prisma.topic.findFirst({ where: { slug: 'interference-diffraction' } });
  if (t18) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t18.id, front: "What is the double-slit interference formula (Young's experiment)?", back: 'Bright fringes (constructive): $d\\sin\\theta = m\\lambda$ ($m = 0, 1, 2, \\ldots$). Dark fringes (destructive): $d\\sin\\theta = (m + \\frac{1}{2})\\lambda$. Where $d$ is slit spacing and $\\lambda$ is wavelength.', hint: 'Constructive: path difference = whole wavelengths.' },
        { topicId: t18.id, front: 'What is single-slit diffraction?', back: 'Dark fringes (minima): $a\\sin\\theta = m\\lambda$ ($m = \\pm 1, \\pm 2, \\ldots$), where $a$ is slit width. Note: the central maximum is twice as wide as the other maxima. Wider slit → narrower pattern.', hint: 'Central max is brightest and widest.' },
      ],
    });
    console.log('✅ Interference & Diffraction flashcards');
  }

  // Photons, Atomic & Nuclear Physics
  const t19 = await prisma.topic.findFirst({ where: { slug: 'photons-atomic-nuclear' } });
  if (t19) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t19.id, front: 'What is the energy of a photon?', back: "$E = hf = \\frac{hc}{\\lambda}$, where $h = 6.63 \\times 10^{-34}$ J·s is Planck's constant, $f$ is frequency, and $\\lambda$ is wavelength. Photon energy is quantized.", hint: 'E = hf — higher frequency = more energy.' },
        { topicId: t19.id, front: 'What is the photoelectric effect?', back: 'Light hitting a metal surface ejects electrons if $hf \\ge \\phi$ (work function). Maximum kinetic energy: $KE_{\\max} = hf - \\phi$. Increasing intensity increases number of electrons, not their energy.', hint: 'Frequency determines if electrons are ejected; intensity determines how many.' },
        { topicId: t19.id, front: 'What is the de Broglie wavelength?', back: '$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$. All matter has wave-like properties. Larger momentum → shorter wavelength. This is significant only for very small particles (electrons, protons).', hint: 'Wave-particle duality: λ = h/p.' },
      ],
    });
    console.log('✅ Photons, Atomic & Nuclear Physics flashcards');
  }

  console.log('\n🎉 All AP Physics 2 flashcards added successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
