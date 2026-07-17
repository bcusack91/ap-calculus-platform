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

- Larger and DENSER particles sediment faster.
- A particle stops moving when its density equals the surrounding medium's density (isopycnic point).

### Two Major Techniques

| Technique | Gradient | Separates by | Result |
|-----------|----------|--------------|--------|
| **Differential** | None (uniform medium) | Size (then density) | Sequential pellets at increasing speed |
| **Density-gradient (isopycnic)** | CsCl or sucrose gradient | **Density only** | Bands at matching buoyant density |

### Differential Centrifugation of a Cell Lysate (Order of Pelleting)

$$\\text{Low speed} \\to \\text{nuclei} \\to \\text{mitochondria} \\to \\text{microsomes/ER} \\to \\text{ribosomes (ultracentrifuge)}$$

- Increase speed in steps; pellet the largest organelles first, re-spin the supernatant faster.

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
            options: [`Nuclei`, `Ribosomes`, `Microsomes`, `Soluble cytosolic proteins`],
            correctAnswer: 0,
            explanation: `Sedimentation rate rises with size and density. Nuclei are the largest, densest organelles, so they pellet at the lowest centrifugal force. Successively higher speeds then pellet mitochondria, then microsomes, and finally ribosomes require an ultracentrifuge.`
          },
          {
            question: `A 50S and a 30S ribosomal subunit assemble into a complete prokaryotic ribosome of:`,
            options: [`70S, because Svedberg units are not additive`, `80S`, `70S, by simple addition`, `40S`],
            correctAnswer: 0,
            explanation: `Svedberg units measure sedimentation behavior, which depends on shape, density, and mass together — they do NOT add arithmetically. The assembled prokaryotic ribosome is 70S even though 50 + 30 = 80, because the combined particle is more compact than the sum of its parts.`
          },
          {
            question: `In isopycnic (density-gradient) centrifugation, a particle migrates until it reaches the position where:`,
            options: [`Its buoyant density equals the density of the surrounding medium`, `It hits the bottom of the tube`, `The medium is most viscous`, `Its size matches the gradient`],
            correctAnswer: 0,
            explanation: `In a density gradient (e.g., CsCl), each particle moves until the medium's density equals the particle's own buoyant density. At that point the net sedimenting force is zero and the particle bands there — regardless of size. This is how DNA of different GC content or densities is resolved.`
          }
        ]
      }
    },
    {
      id: 'lm3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Centrifugation

<details>
<summary><b>Example 1: Calculate relative centrifugal force</b></summary>

**Question:** A rotor has radius $r = 8$ cm and spins at 10,000 RPM. Find the RCF (in × g).

**Solution:**
$$\\text{RCF} = 1.118 \\times 10^{-5} \\times r \\times (\\text{RPM})^2 = 1.118 \\times 10^{-5} \\times 8 \\times (10000)^2$$
$$= 1.118 \\times 10^{-5} \\times 8 \\times 10^{8} = 8944 \\times g \\approx 8.9 \\times 10^{3} \\; g \\checkmark$$

**MCAT note:** RCF scales with the SQUARE of RPM — doubling RPM quadruples the force. Always report g-force, not RPM, because RPM alone is meaningless without the radius.
</details>

<details>
<summary><b>Example 2: Design a differential-centrifugation scheme</b></summary>

**Question:** You want to isolate mitochondria from liver cells without nuclear contamination. Outline the spin scheme.

**Solution:**
1. Homogenize cells in isotonic buffer (preserve organelles).
2. **Low-speed spin (~1000 g):** pellets NUCLEI and debris → discard the pellet, keep the supernatant. ✓
3. **Medium-speed spin (~10,000 g)** of that supernatant: pellets MITOCHONDRIA → keep the pellet. ✓
4. The remaining supernatant holds microsomes and cytosol.

**Key logic:** Remove the biggest contaminant (nuclei) first at low force, then collect your target at the next-higher force.
</details>

<details>
<summary><b>Example 3: Interpret a density-gradient (Meselson–Stahl) result</b></summary>

**Question:** DNA labeled with heavy $ {}^{15}N$ is shifted to $ {}^{14}N$ medium. After one round of replication, a CsCl gradient shows a single band of intermediate density. What does this rule out?

**Solution:**
1. CsCl gradient bands DNA by buoyant density (isopycnic). ✓
2. A single INTERMEDIATE band means every duplex is half-heavy/half-light → each daughter has one old and one new strand.
3. This rules out **conservative** replication (which would give two bands: one fully heavy, one fully light) and supports **semiconservative** replication. ✓

**Why it matters:** Density-gradient centrifugation provided the classic experimental proof of semiconservative DNA replication.
</details>`
    },
    {
      id: 'lm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- RCF = $1.118\\times 10^{-5}$ · r · $RPM^{2}$; force scales with $RPM^{2}$. Report g, not RPM.
- Sedimentation rises with particle size and (density − medium density).
- Differential centrifugation: increasing speeds pellet nuclei → mitochondria → microsomes → ribosomes.
- Isopycnic/density-gradient: particle bands where its buoyant density = medium density (size-independent). Svedberg units are NOT additive (50S + 30S = 70S).`
    }
  ]
};
