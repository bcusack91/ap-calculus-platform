export const mcatLabMethodsPart3Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm3-intro',
      type: 'text' as const,
      content: `# Laboratory Methods & Separations

**Part 3 of 5 — Centrifugation (Separating by Density & Size)**

Centrifugation spins samples to generate a force that drives denser/larger particles outward (to the bottom = pellet). The rest stays in the **supernatant**.

$$\\text{RCF} = 1.118 \\times 10^{-5} \\; r \\; (\\text{RPM})^2$$

RCF (relative centrifugal force, in × g) depends on rotor radius $r$ (cm) and rotation speed.

### Sedimentation Logic

$$v_{sed} \\;\\propto\\; (\\rho_{particle} - \\rho_{medium}) \\, r_{particle}^2 \\, \\omega^2$$

where $\\omega$ is the rotor's angular speed (proportional to RPM).

- Larger and DENSER particles sediment faster.
- A particle stops moving when its density equals the surrounding medium's density (isopycnic point).

### Two Major Techniques

| Technique | Gradient | Separates by | Result |
|-----------|----------|--------------|--------|
| **Differential** | None (uniform medium) | Size (then density) | Sequential pellets at increasing speed |
| **Density gradient: isopycnic** | Steep CsCl gradient, spun to equilibrium | **Density only** | Each particle bands where its buoyant density matches the medium's |
| **Density gradient: rate-zonal** | Shallow sucrose gradient, stopped before equilibrium | Size and shape (S value) | Bands move down at rates set by their S values |

### Differential Centrifugation of a Cell Lysate (Order of Pelleting)

$$\\text{Low speed} \\to \\text{nuclei} \\to \\text{mitochondria} \\to \\text{microsomes/ER} \\to \\text{ribosomes (ultracentrifuge)}$$

- Increase speed in steps; pellet the largest organelles first, re-spin the supernatant faster.
- **Microsomes** are small vesicles formed from fragments of the ER when the cells are homogenized.

### Svedberg Units (S)

- S is a sedimentation coefficient — it is **NOT additive** because it depends on shape and density, not mass alone.
- Example: the 70S prokaryotic ribosome = 50S + 30S subunits (70 ≠ 50 + 30).`
    },
    {
      id: 'lm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Centrifugation** 🎯`,
      exercise: {
        questions: [
          {
            question: `In differential centrifugation of a cell homogenate, which organelle pellets FIRST (lowest speed)?`,
            options: [`Nuclei`, `Ribosomes`, `Microsomes`, `Mitochondria`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Sedimentation rate rises with size and density. Nuclei are the largest, densest organelles, so they pellet at the lowest centrifugal force. Successively higher speeds then pellet mitochondria, then microsomes, and finally ribosomes require an ultracentrifuge.`
          },
          {
            question: `A 50S and a 30S ribosomal subunit assemble into a complete prokaryotic ribosome of:`,
            options: [`70S, since Svedberg units are not additive`, `80S, the sum of the two subunit values`, `40S, like the eukaryotic small subunit`, `60S, like the eukaryotic large subunit`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Svedberg units measure sedimentation behavior, which depends on mass, density and shape together — they do NOT add arithmetically. The assembled prokaryotic ribosome is 70S even though 50 + 30 = 80, because joining the subunits adds mass but also adds frictional drag, so the sedimentation coefficient grows by less than the sum. The 40S and 60S values belong to eukaryotic subunits, which assemble into an 80S eukaryotic ribosome.`
          },
          {
            question: `In isopycnic (density-gradient) centrifugation, a particle migrates until it reaches the position where:`,
            options: [`Its buoyant density matches the density of the medium`, `It reaches the bottom, where centrifugal force is greatest`, `The medium is most viscous and friction halts its motion`, `Its size matches the local pore size of the gradient`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `In a density gradient (e.g., CsCl), each particle moves until the density of the surrounding medium equals the particle's own buoyant density. At that point the net sedimenting force is zero and the particle bands there — regardless of size. This is how DNA of different GC content or densities is resolved. A particle reaches the bottom only if it is denser than every layer of the gradient; viscosity slows motion but does not set the final position; and a gradient has no pores — sieving by size is gel filtration.`
          }
        ]
      }
    },
    {
      id: 'lm3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Centrifugation

**Problem 1.** You want to isolate mitochondria from liver cells without nuclear contamination, using differential centrifugation.

- **(a)** How should the cells be broken open?
- **(b)** What should the first, low-speed spin remove, and which fraction do you keep?
- **(c)** How do you then collect the mitochondria?
- **(d)** What is left in the final supernatant?

**(a) Homogenize.** Homogenize the cells in isotonic buffer, which preserves the organelles.

**(b) Low-speed spin (~1000 g).** It pellets the NUCLEI and debris, the biggest contaminant: discard that pellet and keep the supernatant.

**(c) Medium-speed spin (~10,000 g).** Spinning the post-nuclear supernatant from (b) faster pellets the MITOCHONDRIA: keep this pellet. The logic: remove the biggest contaminant first at low force, then collect the target at the next-higher force.

**(d) What remains.** The remaining supernatant holds the microsomes (ER fragments) and the cytosol.

**Problem 2.** In the Meselson–Stahl experiment, DNA labeled with heavy $ {}^{15}N$ is shifted to $ {}^{14}N$ medium. After one round of replication, a CsCl gradient shows a single band of intermediate density.

- **(a)** What property does a CsCl gradient separate DNA by?
- **(b)** What does a single intermediate band say about each duplex?
- **(c)** Which replication model does this result rule out?
- **(d)** Does this one result prove semiconservative replication?

**(a) Buoyant density.** A CsCl gradient is isopycnic: each DNA duplex bands where its buoyant density matches the medium's.

**(b) Half heavy, half light.** A single INTERMEDIATE band means every duplex has the same density, halfway between heavy and light, as if each held one old and one new strand.

**(c) Conservative is out.** Conservative replication would give two bands, one fully heavy and one fully light, so a single intermediate band rules it out and fits **semiconservative** replication.

**(d) Not on its own.** Dispersive replication would also give one intermediate band after one round. The second round, with one intermediate and one light band, rules dispersive out; together the two results are the classic density-gradient proof of semiconservative replication.

**Problem 3.** A rotor of radius $r = 8$ cm spins at 10,000 RPM. Use $\\text{RCF} = 1.118 \\times 10^{-5}\\, r\\, (\\text{RPM})^2$.

- **(a)** What is the RCF, in × g?
- **(b)** What happens to the RCF if the speed doubles to 20,000 RPM?
- **(c)** Why should a protocol quote the force in × g rather than the RPM?

**(a) RCF.** $\\text{RCF} = 1.118 \\times 10^{-5} \\times 8 \\times (10000)^2 = 1.118 \\times 10^{-5} \\times 8 \\times 10^{8}$

$$= 8944 \\times g \\approx 8.9 \\times 10^{3} \\; g$$

**(b) Doubling the speed.** RCF scales with the SQUARE of RPM, so doubling the RPM quadruples the force: $4 \\times 8944 \\approx 35{,}776 \\times g$.

**(c) Quote g.** The same RPM gives a different force on a rotor of a different radius, so RPM alone is meaningless; the g-force is what reproduces the spin.`
    },
    {
      id: 'lm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Sedimentation rate.** Larger particles, and particles denser than the medium, sediment faster.
- **Differential pelleting order.** Rising speeds pellet nuclei, then mitochondria, then microsomes, then ribosomes.
- **Isopycnic vs. rate-zonal.** In a CsCl gradient each particle bands at its own density; a sucrose rate-zonal run sorts by S value.
- **RCF ∝ r · RPM².** A passage supplies the constant; RCF grows with rotor radius and RPM², so doubling RPM quadruples it.

**Common traps**

- **Quoting RPM.** RPM means nothing without the rotor radius; report the force in × g.
- **Adding Svedberg units.** S values are not additive: 50S and 30S subunits form a 70S ribosome, not 80S.
- **Size sets the band.** In an isopycnic gradient a band's position depends on density only, not on size.
- **Keeping the wrong fraction.** To isolate mitochondria, discard the low-speed nuclear pellet and re-spin its supernatant faster.`
    }
  ]
};
