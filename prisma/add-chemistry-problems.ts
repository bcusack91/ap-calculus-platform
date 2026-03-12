import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Chemistry topics...')

  // Topic 1: Moles and Molar Mass
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'moles-molar-mass' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A sample contains 2.50 moles of calcium carbonate (CaCO₃). (a) Calculate the mass of this sample in grams. (b) How many formula units of CaCO₃ are present? (c) How many total atoms are in this sample?`,
          solution: `**Solution:**

(a) **Mass calculation:**
- Molar mass of CaCO₃ = Ca + C + 3(O) = 40.08 + 12.01 + 3(16.00) = 100.09 g/mol
- Mass = moles × molar mass = 2.50 mol × 100.09 g/mol = **250 g**

(b) **Formula units:**
- Use Avogadro's number: 6.022 × 10²³ formula units/mol
- Formula units = 2.50 mol × 6.022 × 10²³ = **1.51 × 10²⁴ formula units**

(c) **Total atoms:**
- Each CaCO₃ has 5 atoms (1 Ca + 1 C + 3 O)
- Total atoms = 1.51 × 10²⁴ × 5 = **7.53 × 10²⁴ atoms**`,
        },
        {
          topicId: topic1.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A chemist has 45.0 g of hydrated copper(II) sulfate (CuSO₄·5H₂O). (a) Calculate the number of moles of the hydrated compound. (b) How many moles of water molecules are in the sample? (c) What mass of anhydrous CuSO₄ would remain if all the water were removed?`,
          solution: `**Solution:**

(a) **Moles of hydrated compound:**
- Molar mass of CuSO₄·5H₂O = 63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72 g/mol
- Moles = 45.0 g ÷ 249.72 g/mol = **0.180 mol**

(b) **Moles of water:**
- Each formula unit has 5 water molecules
- Moles of H₂O = 0.180 mol × 5 = **0.900 mol**

(c) **Mass of anhydrous CuSO₄:**
- Molar mass of CuSO₄ = 63.55 + 32.07 + 4(16.00) = 159.62 g/mol
- Mass = 0.180 mol × 159.62 g/mol = **28.7 g**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Moles and Molar Mass')
  }

  // Topic 2: Electron Configuration
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'electron-configuration' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `(a) Write the complete electron configuration for iron (Fe, atomic number 26). (b) Write the noble gas notation for Fe. (c) How many unpaired electrons does Fe have in its ground state? (d) Which orbital subshell is being filled in the transition metals?`,
          solution: `**Solution:**

(a) **Complete configuration:**
- Fe (Z=26): **1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶**

(b) **Noble gas notation:**
- Previous noble gas is Ar (Z=18)
- Fe: **[Ar] 4s² 3d⁶**

(c) **Unpaired electrons:**
- 4s²: 2 paired electrons
- 3d⁶: ↑↓ ↑ ↑ ↑ ↑ (following Hund's rule)
- **4 unpaired electrons** in the 3d subshell

(d) **Subshell being filled:**
- Transition metals fill the **d subshell** (specifically the (n-1)d subshell)`,
        },
        {
          topicId: topic2.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `(a) Write the electron configuration for Cu²⁺ (copper ion). (b) Explain why copper's electron configuration is [Ar] 4s¹ 3d¹⁰ rather than the expected [Ar] 4s² 3d⁹. (c) Which electrons are removed first when forming the Cu²⁺ ion?`,
          solution: `**Solution:**

(a) **Cu²⁺ configuration:**
- Cu is [Ar] 4s¹ 3d¹⁰
- Remove 2 electrons from highest energy levels
- Cu²⁺: **[Ar] 3d⁹**

(b) **Copper's anomalous configuration:**
- Expected: [Ar] 4s² 3d⁹
- Actual: [Ar] 4s¹ 3d¹⁰
- **Explanation:** A completely filled d¹⁰ subshell is more stable than d⁹ due to exchange energy. The extra stability from having a filled d subshell outweighs the energy cost of promoting an electron from 4s to 3d.

(c) **Electron removal:**
- When forming ions, **electrons are removed from the highest n value first** (4s before 3d)
- Even though Cu fills 3d last, the 4s¹ electron is removed first, then one 3d electron
- This is why Cu²⁺ is [Ar] 3d⁹, not [Ar] 4s¹ 3d⁸`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Electron Configuration')
  }

  // Topic 3: Periodic Trends
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'periodic-trends' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Arrange the following elements in order of increasing atomic radius: O, S, Se, Te. Explain the trend you observe.`,
          solution: `**Solution:**

**Order of increasing atomic radius: O < S < Se < Te**

**Explanation:**
- All four elements are in Group 16 (oxygen family)
- Going down a group, atomic radius increases
- Each successive element adds a new electron shell
- O (period 2): 2 shells
- S (period 3): 3 shells
- Se (period 4): 4 shells
- Te (period 5): 5 shells

Although nuclear charge increases down the group, the effect of additional electron shells (increased shielding) dominates, resulting in larger atomic radii.`,
        },
        {
          topicId: topic3.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Consider the species: Na, Na⁺, Mg, Mg²⁺, Al, Al³⁺. (a) Which species has the largest radius? (b) Which has the smallest radius? (c) Explain why Na⁺, Mg²⁺, and Al³⁺ are all isoelectronic but have different radii.`,
          solution: `**Solution:**

(a) **Largest radius: Na** (neutral sodium atom)

(b) **Smallest radius: Al³⁺** (aluminum cation)

(c) **Isoelectronic species explanation:**
- Na⁺, Mg²⁺, and Al³⁺ are all isoelectronic (10 electrons each, configuration: 1s² 2s² 2p⁶)

**Nuclear charge comparison:**
- Na⁺: 11 protons pulling on 10 electrons → radius ≈ 102 pm
- Mg²⁺: 12 protons pulling on 10 electrons → radius ≈ 72 pm
- Al³⁺: 13 protons pulling on 10 electrons → radius ≈ 54 pm

**Conclusion:** For isoelectronic species, the one with more protons (higher nuclear charge) has a smaller radius because the electrons are pulled more tightly toward the nucleus. Order of decreasing radius: **Na⁺ > Mg²⁺ > Al³⁺**`,
        },
        {
          topicId: topic3.id,
          order: 3,
          difficulty: 'MEDIUM' as Difficulty,
          question: `(a) Explain why the first ionization energy of oxygen is less than that of nitrogen, even though oxygen is to the right of nitrogen in the periodic table. (b) Compare the first ionization energies of Na, Mg, and Al.`,
          solution: `**Solution:**

(a) **Oxygen vs. Nitrogen ionization energy:**
- N: 1s² 2s² 2p³ (half-filled p subshell, all unpaired)
- O: 1s² 2s² 2p⁴ (one paired electrons in p subshell)

**Explanation:** Nitrogen has a half-filled 2p³ configuration which is particularly stable. Oxygen's fourth 2p electron must pair up, creating electron-electron repulsion. This repulsion makes it slightly easier to remove one electron from oxygen than from nitrogen's stable half-filled configuration.

- N: IE₁ = 1402 kJ/mol
- O: IE₁ = 1314 kJ/mol (slightly less)

(b) **Na, Mg, Al comparison:**
- Na: [Ne] 3s¹ → IE₁ = 496 kJ/mol
- Mg: [Ne] 3s² → IE₁ = 738 kJ/mol
- Al: [Ne] 3s² 3p¹ → IE₁ = 578 kJ/mol

**Trend:** Mg > Al > Na

Magnesium has the highest because removing an electron from a filled 3s² is difficult. Aluminum's drop is because its 3p¹ electron is in a higher energy orbital and experiences more shielding from the 3s² electrons.`,
        },
      ]
    })
    console.log('✓ Added 3 problems to: Periodic Trends')
  }

  // Topic 4: Types of Chemical Bonds
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'types-of-chemical-bonds' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Classify each of the following compounds as ionic, polar covalent, or nonpolar covalent: (a) NaCl, (b) H₂O, (c) Cl₂, (d) NH₃, (e) MgO. Explain your reasoning.`,
          solution: `**Solution:**

(a) **NaCl - Ionic**
- Na (metal, EN = 0.93) + Cl (nonmetal, EN = 3.16)
- ΔEN = 2.23 (>1.7 typically indicates ionic)
- Complete electron transfer from Na to Cl

(b) **H₂O - Polar covalent**
- H (EN = 2.20) + O (EN = 3.44)
- ΔEN = 1.24 (between 0.5 and 1.7)
- Unequal sharing of electrons, bent shape creates dipole moment

(c) **Cl₂ - Nonpolar covalent**
- Cl (EN = 3.16) + Cl (EN = 3.16)
- ΔEN = 0 (identical atoms)
- Equal sharing of electrons, symmetric molecule

(d) **NH₃ - Polar covalent**
- N (EN = 3.04) + H (EN = 2.20)
- ΔEN = 0.84
- Unequal sharing, trigonal pyramidal shape creates dipole

(e) **MgO - Ionic**
- Mg (metal, EN = 1.31) + O (nonmetal, EN = 3.44)
- ΔEN = 2.13 (>1.7)
- Complete electron transfer from Mg to O`,
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `(a) Explain why ionic compounds have high melting points while covalent compounds generally have low melting points. (b) Why does diamond have an extremely high melting point (~3550°C) despite being a covalent compound?`,
          solution: `**Solution:**

(a) **Melting point comparison:**

**Ionic compounds (high MP):**
- Strong electrostatic attractions between oppositely charged ions
- These ionic bonds extend throughout the crystal lattice (lattice energy)
- Requires large amounts of energy to overcome these attractions
- Example: NaCl melts at 801°C

**Molecular covalent compounds (low MP):**
- Strong covalent bonds WITHIN molecules
- Weak intermolecular forces BETWEEN molecules (dipole-dipole, London dispersion)
- Only need to overcome weak IMFs to melt
- Example: H₂O melts at 0°C, CH₄ melts at -182°C

(b) **Diamond's exception:**
Diamond is a **network covalent (atomic) solid**, not a molecular covalent compound.

**Structure:** Each carbon atom is sp³ hybridized and covalently bonded to 4 other carbons in a tetrahedral arrangement, creating a 3D network extending throughout the crystal.

**Why high MP:** To melt diamond, you must break strong C-C covalent bonds (not just weak IMFs). The entire crystal is essentially one giant molecule held together by covalent bonds.

Other examples of network covalent solids: SiO₂ (quartz), SiC (silicon carbide), graphite`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Types of Chemical Bonds')
  }

  // Topic 5: Lewis Structures and Formal Charge
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'lewis-structures-formal-charge' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Draw the Lewis structure for sulfate ion (SO₄²⁻). (a) Calculate the formal charge on each atom. (b) Does this structure obey the octet rule? (c) Why might resonance structures be important for this ion?`,
          solution: `**Solution:**

(a) **Lewis structure and formal charges:**

Central S with 4 O atoms:
- S: 6 valence electrons
- 4 O: 4 × 6 = 24 valence electrons
- Charge: -2 (add 2 electrons)
- Total: 6 + 24 + 2 = 32 valence electrons

Structure: O=S(=O)(-O⁻)(-O⁻) with double bonds to 2 oxygens, single bonds to 2 oxygens

**Formal charge = V - (L + B/2)**
where V = valence e⁻, L = lone pair e⁻, B = bonding e⁻

- S: FC = 6 - (0 + 12/2) = 0
- O (double bonded): FC = 6 - (4 + 4/2) = 0
- O (single bonded): FC = 6 - (6 + 2/2) = -1

(b) **Octet rule:**
Yes, all atoms satisfy the octet rule:
- Each O has 8 electrons
- S has 8 electrons (can expand octet to 12 using d orbitals)

(c) **Resonance:**
SO₄²⁻ has **6 resonance structures**. The double bonds can be on any 2 of the 4 oxygen atoms. Resonance delocalizes the negative charge equally over all 4 oxygens, making all S-O bonds equivalent with bond order of 1.5.`,
        },
        {
          topicId: topic5.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `For the cyanate ion (OCN⁻), three possible Lewis structures can be drawn with different atom arrangements: [O-C≡N]⁻, [O=C=N]⁻, and [O≡C-N]⁻. Use formal charge to determine which structure is most likely to contribute to the actual bonding.`,
          solution: `**Solution:**

Total valence electrons: O(6) + C(4) + N(5) + 1(charge) = 16 electrons

**Structure 1: [O-C≡N]⁻**
- O: FC = 6 - (6 + 2/2) = -1
- C: FC = 4 - (0 + 8/2) = 0
- N: FC = 5 - (2 + 6/2) = 0
Sum of |FC| = 1

**Structure 2: [:O=C=N:]⁻**
- O: FC = 6 - (4 + 4/2) = 0
- C: FC = 4 - (0 + 8/2) = 0
- N: FC = 5 - (4 + 4/2) = -1
Sum of |FC| = 1

**Structure 3: [O≡C-N:]²⁻**
- O: FC = 6 - (2 + 6/2) = +1
- C: FC = 4 - (0 + 8/2) = 0
- N: FC = 5 - (6 + 2/2) = -2
Sum of |FC| = 3

**Best structure: Structure 1 or 2** (tie based on formal charge magnitudes)

**However, Structure 1 is slightly preferred** because:
1. The negative charge is on oxygen (more electronegative than nitrogen)
2. In Structure 2, the less electronegative N bears the negative charge

**Answer: [O-C≡N]⁻ is the best Lewis structure**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Lewis Structures and Formal Charge')
  }

  // Topic 6: VSEPR and Molecular Geometry
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'vsepr-molecular-geometry' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the molecule XeF₄ (xenon tetrafluoride): (a) Draw the Lewis structure. (b) Determine the electron geometry and molecular geometry. (c) Predict the F-Xe-F bond angles. (d) Is the molecule polar or nonpolar?`,
          solution: `**Solution:**

(a) **Lewis structure:**
- Xe: 8 valence electrons (noble gas)
- 4 F: 4 × 7 = 28 valence electrons
- Total: 36 electrons

Xe in center with 4 F atoms bonded, plus 2 lone pairs on Xe

(b) **Geometries:**
- Electron pairs around Xe: 4 bonding + 2 lone = **6 electron pairs**
- **Electron geometry: Octahedral**
- The 2 lone pairs occupy opposite positions (180° apart to minimize repulsion)
- **Molecular geometry: Square planar**

(c) **Bond angles:**
- F-Xe-F (adjacent): **90°**
- F-Xe-F (opposite): **180°**

(d) **Polarity:**
**Nonpolar** - Despite having polar Xe-F bonds, the square planar geometry is perfectly symmetric. The bond dipoles cancel out (4 F atoms arranged symmetrically around Xe in a plane), resulting in no net dipole moment.`,
        },
        {
          topicId: topic6.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Compare and explain the bond angles in the following molecules: (a) CH₄ (109.5°), (b) NH₃ (107°), (c) H₂O (104.5°). All have 4 electron pairs around the central atom - why are the angles different?`,
          solution: `**Solution:**

All three molecules have **tetrahedral electron geometry** (4 electron pairs), but different molecular geometries:

**(a) CH₄ - Tetrahedral, 109.5°**
- 4 bonding pairs, 0 lone pairs
- All electron pairs are equivalent
- Perfect tetrahedral angle: **109.5°**

**(b) NH₃ - Trigonal pyramidal, 107°**
- 3 bonding pairs, 1 lone pair
- Lone pairs occupy more space than bonding pairs (electrons closer to nucleus)
- Lone pair-bonding pair repulsion > bonding pair-bonding pair repulsion
- Lone pair pushes bonding pairs together: **107°** (smaller than 109.5°)

**(c) H₂O - Bent, 104.5°**
- 2 bonding pairs, 2 lone pairs
- Two lone pairs create even more repulsion
- Both lone pairs push bonding pairs together
- Even smaller angle: **104.5°**

**VSEPR Repulsion Order:**
Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair

**Summary:** As lone pairs replace bonding pairs, the bond angle decreases because lone pairs exert greater repulsive forces.

**Angle trend: CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°)**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: VSEPR and Molecular Geometry')
  }

  // Topic 7: Types of Intermolecular Forces
  const topic7 = await prisma.topic.findUnique({
    where: { slug: 'types-intermolecular-forces' }
  })

  if (topic7) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic7.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For each pair of substances, predict which one has the higher boiling point and explain your reasoning: (a) CH₄ vs. CH₃CH₃ (ethane), (b) CH₃OH vs. CH₃SH, (c) HF vs. HCl.`,
          solution: `**Solution:**

(a) **CH₄ vs. CH₃CH₃**

**Higher BP: CH₃CH₃** (ethane: -89°C vs. methane: -162°C)

Both are nonpolar molecules with only London dispersion forces. Ethane has more electrons (18 vs. 10) and greater surface area, leading to stronger dispersion forces.

(b) **CH₃OH vs. CH₃SH**

**Higher BP: CH₃OH** (methanol: 65°C vs. methanethiol: 6°C)

Both have similar structures, but:
- CH₃OH can hydrogen bond (O-H bonds)
- CH₃SH has dipole-dipole forces only (S-H cannot H-bond effectively because S is not electronegative enough)
- Hydrogen bonding >> dipole-dipole forces

(c) **HF vs. HCl**

**Higher BP: HF** (19.5°C vs. HCl: -85°C)

Despite HCl having more electrons (18 vs. 10):
- HF exhibits strong hydrogen bonding (F is highly electronegative)
- HCl has dipole-dipole forces only
- The hydrogen bonding in HF is so strong it overcomes HCl's larger dispersion forces

**Key concept:** Hydrogen bonding (when present) usually dominates other IMF effects.`,
        },
        {
          topicId: topic7.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Explain why water (H₂O, molar mass 18 g/mol) has a much higher boiling point (100°C) than hydrogen sulfide (H₂S, molar mass 34 g/mol, BP: -60°C), even though H₂S has nearly twice the molar mass.`,
          solution: `**Solution:**

**Key factors:**

**H₂O - Boiling point: 100°C**
- Can form hydrogen bonds (H bonded to highly electronegative O)
- Each water molecule can form up to 4 H-bonds (2 as donor via H atoms, 2 as acceptor via O lone pairs)
- Creates extensive 3D network of H-bonds
- O-H···O hydrogen bonds are very strong (~20 kJ/mol each)

**H₂S - Boiling point: -60°C**
- Cannot form hydrogen bonds (S is not electronegative enough)
- Only dipole-dipole forces and London dispersion
- Although H₂S has more electrons (34 vs. 18) → stronger dispersion forces
- S-H bonds are much less polar than O-H bonds → weaker dipole-dipole

**Electronegativity values:**
- O: 3.44 (highly electronegative, strong H-bonding)
- S: 2.58 (not electronegative enough for effective H-bonding)

**Conclusion:** The extensive hydrogen bonding network in water requires much more energy to break than the dipole-dipole and dispersion forces in H₂S. Hydrogen bonding is so strong it overcomes the mass/size advantage of H₂S.

**ΔH_vap values:**
- H₂O: 40.7 kJ/mol (much higher)
- H₂S: 18.7 kJ/mol`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Types of Intermolecular Forces')
  }

  // Topic 8: Ideal Gas Law
  const topic8 = await prisma.topic.findUnique({
    where: { slug: 'ideal-gas-law' }
  })

  if (topic8) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic8.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A sample of nitrogen gas occupies 5.00 L at 25°C and 1.50 atm. (a) How many moles of N₂ are present? (b) What is the mass of the nitrogen gas? (c) If the temperature is increased to 100°C at constant pressure, what will be the new volume?`,
          solution: `**Solution:**

Given: V = 5.00 L, T = 25°C = 298 K, P = 1.50 atm, R = 0.08206 L·atm/(mol·K)

(a) **Moles using PV = nRT:**
n = PV/(RT) = (1.50 atm)(5.00 L) / [(0.08206)(298 K)]
n = 7.50 / 24.45 = **0.307 mol N₂**

(b) **Mass:**
Molar mass of N₂ = 2(14.01) = 28.02 g/mol
Mass = 0.307 mol × 28.02 g/mol = **8.60 g**

(c) **New volume (Charles's Law at constant P):**
V₁/T₁ = V₂/T₂
T₂ = 100°C = 373 K
V₂ = V₁(T₂/T₁) = 5.00 L × (373 K / 298 K)
V₂ = **6.25 L**`,
        },
        {
          topicId: topic8.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A mixture of gases contains 0.500 mol N₂, 0.300 mol O₂, and 0.200 mol CO₂ in a 10.0 L container at 27°C. (a) Calculate the total pressure. (b) Calculate the partial pressure of each gas. (c) What is the mole fraction of oxygen?`,
          solution: `**Solution:**

Given: n_N₂ = 0.500 mol, n_O₂ = 0.300 mol, n_CO₂ = 0.200 mol
V = 10.0 L, T = 27°C = 300 K, R = 0.08206 L·atm/(mol·K)

(a) **Total pressure (Dalton's Law):**
n_total = 0.500 + 0.300 + 0.200 = 1.00 mol

P_total = n_total RT/V = (1.00)(0.08206)(300) / 10.0
P_total = **2.46 atm**

(b) **Partial pressures:**
Using P_i = (n_i/n_total) × P_total or P_i = n_i RT/V

P_N₂ = (0.500/1.00) × 2.46 = **1.23 atm**
P_O₂ = (0.300/1.00) × 2.46 = **0.738 atm**
P_CO₂ = (0.200/1.00) × 2.46 = **0.492 atm**

Check: 1.23 + 0.738 + 0.492 = 2.46 atm ✓

(c) **Mole fraction of oxygen:**
χ_O₂ = n_O₂ / n_total = 0.300 / 1.00 = **0.300**

Note: χ_O₂ = P_O₂ / P_total = 0.738 / 2.46 = 0.300 ✓`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Ideal Gas Law')
  }

  // Topic 9: Stoichiometry and Limiting Reactants
  const topic9 = await prisma.topic.findUnique({
    where: { slug: 'stoichiometry-limiting-reactants' }
  })

  if (topic9) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic9.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Consider the reaction: 2 Al + 3 Cl₂ → 2 AlCl₃. If 5.40 g of Al reacts with 8.00 g of Cl₂, (a) identify the limiting reactant, (b) calculate the mass of AlCl₃ produced, and (c) determine how much of the excess reactant remains.`,
          solution: `**Solution:**

Molar masses: Al = 26.98 g/mol, Cl₂ = 70.90 g/mol, AlCl₃ = 133.34 g/mol

(a) **Identify limiting reactant:**

Moles of Al = 5.40 g / 26.98 g/mol = 0.200 mol
Moles of Cl₂ = 8.00 g / 70.90 g/mol = 0.113 mol

Using stoichiometry (2 Al : 3 Cl₂):
- If Al is limiting: needs 0.200 mol Al × (3 Cl₂/2 Al) = 0.300 mol Cl₂ (we only have 0.113) ✗
- If Cl₂ is limiting: needs 0.113 mol Cl₂ × (2 Al/3 Cl₂) = 0.0753 mol Al (we have 0.200) ✓

**Limiting reactant: Cl₂**

(b) **Mass of AlCl₃ produced:**
Moles AlCl₃ = 0.113 mol Cl₂ × (2 AlCl₃/3 Cl₂) = 0.0753 mol
Mass AlCl₃ = 0.0753 mol × 133.34 g/mol = **10.0 g**

(c) **Excess Al remaining:**
Al consumed = 0.113 mol Cl₂ × (2 Al/3 Cl₂) = 0.0753 mol
Al remaining = 0.200 - 0.0753 = 0.125 mol = **3.37 g**`,
        },
        {
          topicId: topic9.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Aspirin (C₉H₈O₄) is synthesized from salicylic acid (C₇H₆O₃) and acetic anhydride (C₄H₆O₃): C₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + C₂H₄O₂. If 20.0 g of salicylic acid reacts with 15.0 g of acetic anhydride and produces 18.5 g of aspirin, calculate the percent yield.`,
          solution: `**Solution:**

Molar masses:
- C₇H₆O₃ (salicylic acid) = 138.12 g/mol
- C₄H₆O₃ (acetic anhydride) = 102.09 g/mol
- C₉H₈O₄ (aspirin) = 180.16 g/mol

**Step 1: Find limiting reactant**

Moles salicylic acid = 20.0 g / 138.12 g/mol = 0.145 mol
Moles acetic anhydride = 15.0 g / 102.09 g/mol = 0.147 mol

Stoichiometry is 1:1, so we have nearly equal moles, but salicylic acid (0.145 mol) is slightly less.

**Limiting reactant: Salicylic acid**

**Step 2: Theoretical yield**
Since stoichiometry is 1:1:1:1, moles of aspirin = 0.145 mol

Theoretical mass = 0.145 mol × 180.16 g/mol = **26.1 g**

**Step 3: Percent yield**
Actual yield = 18.5 g
Percent yield = (actual/theoretical) × 100%
Percent yield = (18.5 g / 26.1 g) × 100% = **70.9%**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Stoichiometry and Limiting Reactants')
  }

  // Topic 10: Reaction Rates and Rate Laws
  const topic10 = await prisma.topic.findUnique({
    where: { slug: 'reaction-rates-and-rate-laws' }
  })

  if (topic10) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic10.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the reaction A + 2B → C, the following initial rate data were obtained:

| Experiment | [A] (M) | [B] (M) | Initial Rate (M/s) |
|------------|---------|---------|-------------------|
| 1          | 0.10    | 0.10    | 0.015            |
| 2          | 0.20    | 0.10    | 0.030            |
| 3          | 0.10    | 0.20    | 0.060            |

(a) Determine the rate law. (b) Calculate the rate constant k with units. (c) What is the overall order of the reaction?`,
          solution: `**Solution:**

(a) **Rate law:** Rate = k[A]^m[B]^n

Find m (order with respect to A):
Compare Experiments 1 and 2 ([B] constant):
- [A] doubles: 0.10 → 0.20
- Rate doubles: 0.015 → 0.030
- Therefore: 2^m = 2, so **m = 1**

Find n (order with respect to B):
Compare Experiments 1 and 3 ([A] constant):
- [B] doubles: 0.10 → 0.20
- Rate quadruples: 0.015 → 0.060
- Therefore: 2^n = 4, so **n = 2**

**Rate law: Rate = k[A][B]²**

(b) **Rate constant:**
Using Experiment 1:
0.015 = k(0.10)(0.10)²
0.015 = k(0.0010)
k = **15 M⁻²s⁻¹**

(c) **Overall order:**
m + n = 1 + 2 = **3rd order** (first order in A, second order in B)`,
        },
        {
          topicId: topic10.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A reaction is found to be first order in A and second order in B. (a) Write the rate law. (b) By what factor does the rate increase if [A] is tripled and [B] is doubled? (c) What are the units of the rate constant?`,
          solution: `**Solution:**

(a) **Rate law:**
**Rate = k[A]¹[B]²** or Rate = k[A][B]²

(b) **Rate change factor:**
Initial rate: Rate₁ = k[A]₁[B]₁²
New rate: Rate₂ = k[A]₂[B]₂²

Where: [A]₂ = 3[A]₁ and [B]₂ = 2[B]₁

Rate₂ = k(3[A]₁)(2[B]₁)²
Rate₂ = k(3[A]₁)(4[B]₁²)
Rate₂ = 12k[A]₁[B]₁²
Rate₂ = 12 × Rate₁

**The rate increases by a factor of 12**

(c) **Units of k:**
From Rate = k[A][B]²
M/s = k × M × M²
M/s = k × M³
k = M/s ÷ M³ = **M⁻²s⁻¹**

General pattern for units:
- 0th order: M/s
- 1st order: s⁻¹
- 2nd order: M⁻¹s⁻¹
- 3rd order: M⁻²s⁻¹`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Reaction Rates and Rate Laws')
  }

  // Topic 11: Enthalpy and Calorimetry
  const topic11 = await prisma.topic.findUnique({
    where: { slug: 'enthalpy-calorimetry' }
  })

  if (topic11) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic11.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 50.0 g sample of aluminum is heated from 20.0°C to 95.0°C. (a) Calculate the heat absorbed by the aluminum (specific heat of Al = 0.900 J/g°C). (b) If this heat came from burning methane (CH₄), which releases 890 kJ/mol, how many grams of methane were burned?`,
          solution: `**Solution:**

(a) **Heat absorbed by aluminum:**
q = mcΔT
where m = mass, c = specific heat, ΔT = temperature change

q = (50.0 g)(0.900 J/g°C)(95.0 - 20.0)°C
q = (50.0)(0.900)(75.0)
q = **3,375 J = 3.38 kJ**

(b) **Mass of methane burned:**
Energy from CH₄: 890 kJ/mol

Moles of CH₄ = 3.38 kJ / 890 kJ/mol = 0.00380 mol

Molar mass of CH₄ = 12.01 + 4(1.008) = 16.04 g/mol
Mass = 0.00380 mol × 16.04 g/mol = **0.0609 g**`,
        },
        {
          topicId: topic11.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Given the following thermochemical equations:
- C(s) + O₂(g) → CO₂(g)     ΔH° = -393.5 kJ
- H₂(g) + ½O₂(g) → H₂O(l)   ΔH° = -285.8 kJ
- 2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(l)   ΔH° = -3119.6 kJ

Use Hess's Law to calculate ΔH°_f for C₂H₆(g).`,
          solution: `**Solution:**

We want: 2C(s) + 3H₂(g) → C₂H₆(g)   ΔH°_f = ?

**Strategy:** Manipulate given equations to get target equation.

From equation 3:
4CO₂(g) + 6H₂O(l) → 2C₂H₆(g) + 7O₂(g)   ΔH = +3119.6 kJ (reversed)

From equation 1 (×4):
4C(s) + 4O₂(g) → 4CO₂(g)   ΔH = 4(-393.5) = -1574.0 kJ

From equation 2 (×6):
6H₂(g) + 3O₂(g) → 6H₂O(l)   ΔH = 6(-285.8) = -1714.8 kJ

**Adding all three:**
4CO₂ + 6H₂O → 2C₂H₆ + 7O₂         +3119.6 kJ
4C + 4O₂ → 4CO₂                   -1574.0 kJ
6H₂ + 3O₂ → 6H₂O                  -1714.8 kJ
_____________________________________________
4C + 6H₂ → 2C₂H₆                   -169.2 kJ

For 1 mole of C₂H₆:
2C(s) + 3H₂(g) → C₂H₆(g)   ΔH°_f = -169.2 kJ / 2 = **-84.6 kJ/mol**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Enthalpy and Calorimetry')
  }

  // Topic 12: Gibbs Free Energy
  const topic12 = await prisma.topic.findUnique({
    where: { slug: 'gibbs-free-energy' }
  })

  if (topic12) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic12.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For a reaction at 298 K, ΔH° = -92.3 kJ and ΔS° = -198 J/K. (a) Calculate ΔG° and determine if the reaction is spontaneous. (b) At what temperature does the reaction become non-spontaneous?`,
          solution: `**Solution:**

(a) **Calculate ΔG°:**
ΔG° = ΔH° - TΔS°

Convert ΔS° to kJ/K: -198 J/K = -0.198 kJ/K

ΔG° = -92.3 kJ - (298 K)(-0.198 kJ/K)
ΔG° = -92.3 kJ + 59.0 kJ
ΔG° = **-33.3 kJ**

Since ΔG° < 0, the reaction is **spontaneous** at 298 K.

(b) **Temperature where reaction becomes non-spontaneous:**
At equilibrium: ΔG° = 0
0 = ΔH° - TΔS°
T = ΔH° / ΔS°

T = -92.3 kJ / (-0.198 kJ/K) = **466 K** (or 193°C)

Above 466 K, ΔG° > 0 (non-spontaneous)
Below 466 K, ΔG° < 0 (spontaneous)

**Note:** This reaction has ΔH° < 0 and ΔS° < 0, so it's spontaneous at low temperatures but non-spontaneous at high temperatures.`,
        },
        {
          topicId: topic12.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Consider the relationship between ΔG° and K (equilibrium constant): ΔG° = -RT ln K. For a reaction at 25°C with K = 5.0 × 10⁴, (a) calculate ΔG°, and (b) explain what this tells you about the position of equilibrium.`,
          solution: `**Solution:**

Given: K = 5.0 × 10⁴, T = 25°C = 298 K, R = 8.314 J/(mol·K)

(a) **Calculate ΔG°:**
ΔG° = -RT ln K
ΔG° = -(8.314 J/(mol·K))(298 K) ln(5.0 × 10⁴)
ΔG° = -(2477.6) ln(50,000)
ΔG° = -(2477.6)(10.82)
ΔG° = **-26,800 J/mol = -26.8 kJ/mol**

(b) **Interpretation:**

**ΔG° < 0 and K >> 1** means:
- The reaction is product-favored (spontaneous in forward direction)
- At equilibrium, products predominate over reactants
- K = 50,000 means [products]/[reactants] ≈ 50,000

**Relationship summary:**
- K > 1 → ΔG° < 0 (product-favored)
- K = 1 → ΔG° = 0 (equal products and reactants)
- K < 1 → ΔG° > 0 (reactant-favored)

The large value of K (5.0 × 10⁴) indicates the reaction goes nearly to completion under standard conditions.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Gibbs Free Energy')
  }

  // Topic 13: Intro to Equilibrium
  const topic13 = await prisma.topic.findUnique({
    where: { slug: 'intro-equilibrium' }
  })

  if (topic13) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic13.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), at equilibrium the concentrations are: [N₂] = 0.50 M, [H₂] = 0.20 M, and [NH₃] = 0.40 M. Calculate the equilibrium constant Kc.`,
          solution: `**Solution:**

**Equilibrium expression:**
K_c = [NH₃]² / ([N₂][H₂]³)

**Calculate K_c:**
K_c = (0.40)² / [(0.50)(0.20)³]
K_c = 0.16 / [(0.50)(0.008)]
K_c = 0.16 / 0.004
K_c = **40**

**Interpretation:** K_c > 1 means the equilibrium favors products (ammonia formation).`,
        },
        {
          topicId: topic13.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), K_p = 3.0 × 10⁴ at 700 K. Calculate K_c for this reaction at the same temperature. (R = 0.08206 L·atm/(mol·K))`,
          solution: `**Solution:**

**Relationship between K_p and K_c:**
K_p = K_c(RT)^Δn

where Δn = (moles of gaseous products) - (moles of gaseous reactants)

**Calculate Δn:**
Products: 2 moles SO₃
Reactants: 2 moles SO₂ + 1 mole O₂ = 3 moles
Δn = 2 - 3 = **-1**

**Solve for K_c:**
K_c = K_p / (RT)^Δn
K_c = K_p × (RT)^(-Δn)
K_c = 3.0 × 10⁴ × [(0.08206)(700)]^(1)
K_c = 3.0 × 10⁴ × 57.4
K_c = **1.7 × 10⁶**

**Note:** K_c > K_p when Δn < 0`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Intro to Equilibrium')
  }

  // Topic 14: Le Chatelier's Principle
  const topic14 = await prisma.topic.findUnique({
    where: { slug: 'reaction-quotient-le-chatelier' }
  })

  if (topic14) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic14.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the exothermic reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat. Predict how the equilibrium will shift (and explain) when: (a) N₂ is added, (b) NH₃ is removed, (c) pressure is increased, (d) temperature is increased.`,
          solution: `**Solution:**

(a) **Adding N₂ (reactant):**
- Equilibrium shifts **right** (toward products)
- System consumes added N₂ to re-establish equilibrium
- More NH₃ is produced

(b) **Removing NH₃ (product):**
- Equilibrium shifts **right** (toward products)
- System produces more NH₃ to replace what was removed
- More N₂ and H₂ are consumed

(c) **Increasing pressure:**
- Count gas molecules: Reactants = 4 moles (1 N₂ + 3 H₂), Products = 2 moles NH₃
- Equilibrium shifts toward **fewer gas molecules** (right, toward products)
- This reduces pressure by decreasing total moles of gas

(d) **Increasing temperature:**
- Reaction is exothermic (heat is a product)
- Adding heat shifts equilibrium **left** (toward reactants)
- Think of heat as a product: adding a product shifts left
- K decreases as temperature increases for exothermic reactions`,
        },
        {
          topicId: topic14.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) with K_c = 0.042 at 250°C, a mixture is prepared with [PCl₅] = 0.20 M, [PCl₃] = 0.10 M, and [Cl₂] = 0.10 M. (a) Calculate Q and determine which direction the reaction will proceed. (b) Calculate the equilibrium concentrations.`,
          solution: `**Solution:**

(a) **Calculate Q and compare to K:**
Q = [PCl₃][Cl₂] / [PCl₅]
Q = (0.10)(0.10) / 0.20 = 0.010 / 0.20 = **0.050**

Compare: Q = 0.050 vs K_c = 0.042
Q > K, so reaction shifts **left** (toward reactants)

(b) **Calculate equilibrium concentrations:**

Let x = change in concentration

|          | PCl₅  | PCl₃  | Cl₂   |
|----------|-------|-------|-------|
| Initial  | 0.20  | 0.10  | 0.10  |
| Change   | +x    | -x    | -x    |
| Equil.   | 0.20+x| 0.10-x| 0.10-x|

K_c = (0.10-x)(0.10-x) / (0.20+x) = 0.042

(0.10-x)² = 0.042(0.20+x)
0.010 - 0.20x + x² = 0.0084 + 0.042x
x² - 0.242x + 0.0016 = 0

Using quadratic formula: x = 0.0068 M

**Equilibrium concentrations:**
[PCl₅] = 0.20 + 0.0068 = **0.21 M**
[PCl₃] = 0.10 - 0.0068 = **0.093 M**
[Cl₂] = 0.10 - 0.0068 = **0.093 M**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Reaction Quotient and Le Chatelier')
  }

  // Topic 15: Acid-Base Theories and pH
  const topic15 = await prisma.topic.findUnique({
    where: { slug: 'acid-base-theories-ph' }
  })

  if (topic15) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic15.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `(a) Calculate the pH of a solution with [H⁺] = 2.5 × 10⁻⁴ M. (b) Calculate the pOH. (c) Is this solution acidic, basic, or neutral?`,
          solution: `**Solution:**

(a) **Calculate pH:**
pH = -log[H⁺]
pH = -log(2.5 × 10⁻⁴)
pH = **3.60**

(b) **Calculate pOH:**
pH + pOH = 14.00
pOH = 14.00 - 3.60 = **10.40**

(c) **Acidic, basic, or neutral?**
pH < 7, so the solution is **acidic**`,
        },
        {
          topicId: topic15.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Calculate the pH of a 0.025 M HCl solution. Assume HCl is a strong acid that completely dissociates.`,
          solution: `**Solution:**

**HCl dissociation:**
HCl → H⁺ + Cl⁻

Since HCl is a strong acid, it completely dissociates:
[H⁺] = 0.025 M

**Calculate pH:**
pH = -log[H⁺]
pH = -log(0.025)
pH = -log(2.5 × 10⁻²)
pH = **1.60**

**Note:** For strong acids (HCl, HNO₃, H₂SO₄, HBr, HI, HClO₄), pH calculation is straightforward because [H⁺] = initial acid concentration.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Acid-Base Theories and pH')
  }

  // Topic 16: Weak Acids and Bases
  const topic16 = await prisma.topic.findUnique({
    where: { slug: 'weak-acids-bases-ka-kb' }
  })

  if (topic16) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic16.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Calculate the pH of a 0.10 M solution of acetic acid (CH₃COOH) given K_a = 1.8 × 10⁻⁵.`,
          solution: `**Solution:**

**Equilibrium:**
CH₃COOH ⇌ H⁺ + CH₃COO⁻

**ICE table:**
|          | CH₃COOH | H⁺  | CH₃COO⁻ |
|----------|---------|-----|---------|
| Initial  | 0.10    | 0   | 0       |
| Change   | -x      | +x  | +x      |
| Equil.   | 0.10-x  | x   | x       |

**K_a expression:**
K_a = [H⁺][CH₃COO⁻] / [CH₃COOH]
1.8 × 10⁻⁵ = x² / (0.10 - x)

**Simplification:** Assume x << 0.10, so 0.10 - x ≈ 0.10
1.8 × 10⁻⁵ = x² / 0.10
x² = 1.8 × 10⁻⁶
x = 1.34 × 10⁻³ M = [H⁺]

**Check assumption:** 1.34 × 10⁻³ / 0.10 = 0.0134 = 1.34% < 5% ✓

**Calculate pH:**
pH = -log(1.34 × 10⁻³) = **2.87**`,
        },
        {
          topicId: topic16.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Calculate the pH of a 0.50 M solution of ammonia (NH₃) given K_b = 1.8 × 10⁻⁵.`,
          solution: `**Solution:**

**Equilibrium:**
NH₃ + H₂O ⇌ NH₄⁺ + OH⁻

**ICE table:**
|          | NH₃   | NH₄⁺ | OH⁻  |
|----------|-------|------|------|
| Initial  | 0.50  | 0    | 0    |
| Change   | -x    | +x   | +x   |
| Equil.   | 0.50-x| x    | x    |

**K_b expression:**
K_b = [NH₄⁺][OH⁻] / [NH₃]
1.8 × 10⁻⁵ = x² / (0.50 - x)

**Assume x << 0.50:**
1.8 × 10⁻⁵ = x² / 0.50
x² = 9.0 × 10⁻⁶
x = 3.0 × 10⁻³ M = [OH⁻]

**Check:** 3.0 × 10⁻³ / 0.50 = 0.006 = 0.6% < 5% ✓

**Calculate pOH:**
pOH = -log(3.0 × 10⁻³) = 2.52

**Calculate pH:**
pH = 14.00 - 2.52 = **11.48**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Weak Acids and Bases (Ka/Kb)')
  }

  // Topic 17: Galvanic Cells
  const topic17 = await prisma.topic.findUnique({
    where: { slug: 'galvanic-cells-potentials' }
  })

  if (topic17) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic17.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A galvanic cell is constructed with a zinc electrode in 1.0 M Zn²⁺ solution and a copper electrode in 1.0 M Cu²⁺ solution. Given: E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V. (a) Write the half-reactions and overall cell reaction. (b) Calculate E°_cell. (c) Which electrode is the anode?`,
          solution: `**Solution:**

(a) **Half-reactions:**

**Oxidation (anode):** Zn(s) → Zn²⁺(aq) + 2e⁻   E° = -0.76 V
**Reduction (cathode):** Cu²⁺(aq) + 2e⁻ → Cu(s)  E° = +0.34 V

**Overall:** Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

(b) **Calculate E°_cell:**
E°_cell = E°_cathode - E°_anode
E°_cell = 0.34 V - (-0.76 V)
E°_cell = **+1.10 V**

(Positive E°_cell confirms spontaneous reaction)

(c) **Anode identification:**
**Zinc is the anode** (oxidation occurs here)
Copper is the cathode (reduction occurs here)

**Mnemonic:** "An Ox" (Anode = Oxidation), "Red Cat" (Reduction = Cathode)`,
        },
        {
          topicId: topic17.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `For the reaction: 2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s) with E°_cell = +2.00 V at 25°C. Calculate ΔG° for this reaction.`,
          solution: `**Solution:**

**Relationship between ΔG° and E°_cell:**
ΔG° = -nFE°_cell

where:
- n = moles of electrons transferred
- F = Faraday constant = 96,485 C/mol
- E°_cell = standard cell potential

**Determine n:**
From balanced equation:
- Al → Al³⁺ + 3e⁻ (×2) = 6 electrons
- Cu²⁺ + 2e⁻ → Cu (×3) = 6 electrons
**n = 6**

**Calculate ΔG°:**
ΔG° = -(6 mol)(96,485 C/mol)(2.00 V)
ΔG° = -1,157,820 J
ΔG° = **-1158 kJ** or **-1.16 × 10³ kJ**

**Interpretation:** Large negative ΔG° confirms the reaction is highly spontaneous and product-favored.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Galvanic Cells and Potentials')
  }

  console.log('\n✅ Successfully added example problems to Chemistry topics!')
  console.log('Total: 34 example problems added to 17 AP Chemistry topics')
  console.log('Coverage: Atomic structure, bonding, IMF, gases, stoichiometry, kinetics, thermodynamics, equilibrium, acids/bases, electrochemistry')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
