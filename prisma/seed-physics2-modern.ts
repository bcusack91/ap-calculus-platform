import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Modern Physics...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const modernCategory = await prisma.category.upsert({
    where: { slug: 'modern-physics' },
    update: {},
    create: {
      slug: 'modern-physics',
      name: 'Modern Physics',
      description: 'Photons, photoelectric effect, atomic models, nuclear physics, quantum mechanics',
      order: 6,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Created category: Modern Physics')

  // ============================================
  // TOPIC: Photons and Atomic Physics
  // ============================================
  const modernPhysics = await prisma.topic.upsert({
    where: { slug: 'photons-atomic-nuclear' },
    update: {},
    create: {
      slug: 'photons-atomic-nuclear',
      title: 'Photons and Atomic Physics',
      description: 'Photoelectric effect, photons, atomic models, energy levels, nuclear physics',
      order: 1,
      categoryId: modernCategory.id,
      isPremium: false,
      textContent: `
# ⚛️ Photons and Atomic Physics

## Wave-Particle Duality

**Light exhibits both wave and particle properties!**

**Wave properties:**
- Interference
- Diffraction
- Polarization

**Particle properties:**
- Photoelectric effect
- Compton scattering
- Discrete energy packets

> **💡 Quantum mechanics**: Nature is fundamentally probabilistic, not deterministic!

---

## Photons

**Photon** = particle of light (quantum of electromagnetic energy)

**Energy of photon:**
$$E = hf = \\frac{hc}{\\lambda}$$

where:
- h = Planck's constant = $6.626 \\times 10^{-34}$ J·s
- f = frequency (Hz)
- c = speed of light
- λ = wavelength

**Higher frequency → higher energy**
- Gamma rays: Very high E
- Radio waves: Very low E

---

## Photoelectric Effect

**Light shining on metal can eject electrons!**

### Key Observations:
1. **Threshold frequency** $f_0$: Below this, NO electrons (even intense light!)
2. **Instantaneous**: Electrons ejected immediately
3. **KE depends on f**, not intensity
4. **Intensity** affects number of electrons, not their energy

**Cannot be explained by classical wave theory!**

---

## Einstein's Photoelectric Equation

$$KE_{max} = hf - \\phi$$

where:
- $KE_{max}$ = maximum kinetic energy of ejected electron
- $hf$ = photon energy
- $\\phi$ = work function (minimum energy to eject electron)

At threshold: $hf_0 = \\phi$ (just enough to eject, KE = 0)

**Stopping potential** $V_s$:
$$eV_s = KE_{max}$$

Voltage needed to stop most energetic electrons.

> **💡 Won Nobel Prize 1921!** Not for relativity, but photoelectric effect.

---

## De Broglie Wavelength

**Particles can behave like waves!**

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

**Matter waves** confirmed by electron diffraction experiments!

**Larger mass → smaller wavelength**
- Electron: λ ~ nm (measurable!)
- Baseball: λ ~ 10⁻³⁴ m (unmeasurable)

---

## Atomic Models

### Rutherford Model (1911):
- Nucleus: tiny, massive, positive
- Electrons orbit (like planets)
- **Problem**: Accelerating charges radiate → atom should collapse!

### Bohr Model (1913):
- Electrons in **discrete energy levels** (orbits)
- Only certain radii allowed: $r_n = n^2 a_0$ where $a_0 = 0.529$ Å
- **Quantized angular momentum**: $L = n\\hbar$ where $\\hbar = h/2\\pi$

**Energy levels** (hydrogen):
$$E_n = -\\frac{13.6 \\text{ eV}}{n^2}$$

where n = 1, 2, 3, ... (principal quantum number)

- n = 1: Ground state, E = -13.6 eV
- n = ∞: Ionization, E = 0

**Negative energy** means bound (need energy to remove electron).

---

## Atomic Transitions

Electron jumps between levels → photon absorbed or emitted!

**Energy of photon:**
$$E_{photon} = |E_f - E_i| = hf$$

**Emission** (high → low): Photon out
**Absorption** (low → high): Photon in

**Emission spectrum**: Discrete lines (fingerprint of element!)

### Hydrogen Series:
- **Lyman** (UV): n → 1
- **Balmer** (visible): n → 2
- **Paschen** (IR): n → 3

---

## Heisenberg Uncertainty Principle

**Cannot know position and momentum simultaneously with perfect precision!**

$$\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}$$

Also for energy and time:
$$\\Delta E \\Delta t \\geq \\frac{\\hbar}{2}$$

**Not limitation of measurement, but fundamental nature of reality!**

> **💡 Key**: More certain about position → less certain about momentum

---

## Nuclear Physics

### Nucleus Composition:
- **Protons**: Z (atomic number), charge +e
- **Neutrons**: N, charge 0
- **Mass number**: A = Z + N

**Isotopes**: Same Z, different N (different A)

Example: $^{12}\\text{C}$ vs $^{14}\\text{C}$

---

## Mass-Energy Equivalence

**Einstein's most famous equation:**

$$E = mc^2$$

**Mass and energy are interchangeable!**

**Atomic mass unit**: 1 u = $1.66 \\times 10^{-27}$ kg = 931.5 MeV/c²

**Binding energy**: Mass of separated nucleons > mass of nucleus
$$\\Delta m = \\text{(mass of parts)} - \\text{(mass of whole)}$$
$$BE = \\Delta m c^2$$

**More binding energy → more stable**

---

## Nuclear Reactions

### Fission:
- Heavy nucleus splits → lighter nuclei
- Releases energy (BE/nucleon increases)
- Used in nuclear power plants
- Example: $^{235}\\text{U}$ + neutron → fission fragments + neutrons + energy

### Fusion:
- Light nuclei combine → heavier nucleus
- Releases enormous energy
- Powers the sun!
- Example: $^2\\text{H}$ + $^3\\text{H}$ → $^4\\text{He}$ + neutron + 17.6 MeV

**Fusion releases MORE energy per nucleon than fission!**

---

## Radioactive Decay

Unstable nuclei decay spontaneously:

**Types:**
- **Alpha (α)**: $^4\\text{He}$ nucleus, A↓4, Z↓2
- **Beta (β⁻)**: Electron, neutron→proton, A same, Z↑1
- **Gamma (γ)**: High-energy photon, A and Z same

**Half-life** $t_{1/2}$:
$$N(t) = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

After one half-life: 50% remain
After two: 25% remain
After three: 12.5% remain

---

## Conservation Laws

All nuclear reactions must conserve:
1. **Mass-energy**: Total E (including mc²) conserved
2. **Charge**: Total Z conserved
3. **Mass number**: Total A conserved
4. **Momentum**: Total p conserved

---

## Problem-Solving Strategy

**Photoelectric:**
1. Find photon energy: $E = hf$ or $E = hc/\\lambda$
2. Apply: $KE_{max} = hf - \\phi$
3. Check threshold: if $f < f_0$, no electrons!

**Atomic transitions:**
1. Find energy levels: $E_n = -13.6/n^2$ eV
2. Energy difference: $\\Delta E = |E_f - E_i|$
3. Photon: $\\lambda = hc/\\Delta E$

**Nuclear:**
1. Check conservation (A and Z)
2. Calculate mass defect: Δm
3. Energy: $E = \\Delta m c^2$

---

## Common Mistakes

❌ Using wavelength in meters with h in J·s (watch units!)
❌ Thinking intensity affects electron KE (only frequency does!)
❌ Forgetting negative sign in atomic energy levels
❌ Not converting eV to Joules (or vice versa): 1 eV = 1.60×10⁻¹⁹ J
❌ Confusing emission (high→low) with absorption (low→high)
❌ Using half-life formula incorrectly (power is t/t_1/2, not just t!)
`,
    },
  })

  console.log('✓ Created topic: Photons and Atomic Physics')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: modernPhysics.id,
        question: 'Find the energy of a photon with wavelength 500 nm. Express in both Joules and eV.',
        solution: `**Given:**
- Wavelength: $\\lambda = 500$ nm $= 5.00 \\times 10^{-7}$ m
- Planck's constant: $h = 6.626 \\times 10^{-34}$ J·s
- Speed of light: $c = 3.00 \\times 10^8$ m/s

**Solution:**

Photon energy:
$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^8)}{5.00 \\times 10^{-7}}$$
$$E = \\frac{1.988 \\times 10^{-25}}{5.00 \\times 10^{-7}} = 3.98 \\times 10^{-19} \\text{ J}$$

Convert to eV:
$$E = \\frac{3.98 \\times 10^{-19}}{1.60 \\times 10^{-19}} = 2.49 \\text{ eV}$$

**Answer:**
- E = **3.98 × 10⁻¹⁹ J**
- E = **2.49 eV** (green light)`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: modernPhysics.id,
        question: 'Light with wavelength 400 nm strikes a metal surface with work function 2.0 eV. Find (a) maximum kinetic energy of ejected electrons, (b) stopping potential.',
        solution: `**Given:**
- Wavelength: $\\lambda = 400$ nm $= 4.00 \\times 10^{-7}$ m
- Work function: $\\phi = 2.0$ eV $= 3.20 \\times 10^{-19}$ J

**Part (a):** Maximum kinetic energy

First, find photon energy:
$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^8)}{4.00 \\times 10^{-7}}$$
$$E = 4.97 \\times 10^{-19} \\text{ J} = 3.11 \\text{ eV}$$

Einstein's photoelectric equation:
$$KE_{max} = hf - \\phi = 3.11 - 2.0 = 1.11 \\text{ eV}$$

In Joules:
$$KE_{max} = (1.11)(1.60 \\times 10^{-19}) = 1.78 \\times 10^{-19} \\text{ J}$$

**Part (b):** Stopping potential

$$eV_s = KE_{max}$$
$$V_s = \\frac{KE_{max}}{e} = 1.11 \\text{ V}$$

**Answer:**
- **(a)** KE_max = **1.11 eV** = **1.78 × 10⁻¹⁹ J**
- **(b)** V_s = **1.11 V**`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: modernPhysics.id,
        question: 'A hydrogen atom electron transitions from n=3 to n=2. Find (a) energy of emitted photon, (b) wavelength of light.',
        solution: `**Given:**
- Initial state: $n_i = 3$
- Final state: $n_f = 2$
- Hydrogen energy levels: $E_n = -13.6/n^2$ eV

**Part (a):** Photon energy

Energy levels:
$$E_3 = -\\frac{13.6}{3^2} = -\\frac{13.6}{9} = -1.51 \\text{ eV}$$
$$E_2 = -\\frac{13.6}{2^2} = -\\frac{13.6}{4} = -3.40 \\text{ eV}$$

Photon energy (emission, so high → low):
$$E_{photon} = E_3 - E_2 = -1.51 - (-3.40) = 1.89 \\text{ eV}$$

In Joules:
$$E = (1.89)(1.60 \\times 10^{-19}) = 3.02 \\times 10^{-19} \\text{ J}$$

**Part (b):** Wavelength

$$\\lambda = \\frac{hc}{E} = \\frac{(6.626 \\times 10^{-34})(3.00 \\times 10^8)}{3.02 \\times 10^{-19}}$$
$$\\lambda = 6.56 \\times 10^{-7} \\text{ m} = 656 \\text{ nm}$$

**Answer:**
- **(a)** E_photon = **1.89 eV**
- **(b)** λ = **656 nm** (red light, Balmer series!)

This is the famous H-alpha line in hydrogen spectrum.`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: modernPhysics.id,
        front: 'What is wave-particle duality?',
        back: 'Light and matter exhibit BOTH wave and particle properties. Light: interference (wave) + photoelectric effect (particle). Matter: trajectory (particle) + diffraction (wave). Fundamental to quantum mechanics.',
      },
      {
        topicId: modernPhysics.id,
        front: 'Give the formula for photon energy.',
        back: 'E = hf = hc/λ, where h = 6.626×10⁻³⁴ J·s (Planck\'s constant). Higher frequency → higher energy. Gamma rays: high E. Radio: low E.',
      },
      {
        topicId: modernPhysics.id,
        front: "State Einstein's photoelectric equation.",
        back: 'KE_max = hf - φ, where φ is work function (minimum energy to eject electron). Below threshold frequency f_0: NO electrons regardless of intensity! At threshold: hf_0 = φ.',
      },
      {
        topicId: modernPhysics.id,
        front: 'What are key observations of photoelectric effect unexplained by classical physics?',
        back: '1) Threshold frequency exists 2) Instantaneous (no time delay) 3) KE depends on f, not intensity 4) Intensity affects number of electrons, not energy. Proves photon (particle) nature!',
      },
      {
        topicId: modernPhysics.id,
        front: 'What is de Broglie wavelength?',
        back: 'λ = h/p = h/(mv). Particles have wave nature! Confirmed by electron diffraction. Larger mass → smaller λ. Electron: λ~nm (measurable). Baseball: λ~10⁻³⁴m (unmeasurable).',
      },
      {
        topicId: modernPhysics.id,
        front: 'Give the formula for hydrogen atom energy levels.',
        back: 'E_n = -13.6 eV/n² (n = 1,2,3...). Ground state (n=1): -13.6 eV. Ionization (n=∞): 0 eV. Negative = bound. Transition: photon E = |E_f - E_i|.',
      },
      {
        topicId: modernPhysics.id,
        front: 'State the Heisenberg Uncertainty Principle.',
        back: 'Δx·Δp ≥ ℏ/2. Cannot know position and momentum simultaneously with perfect precision. Also ΔE·Δt ≥ ℏ/2. Not measurement limitation, but fundamental reality! More certain about x → less about p.',
      },
      {
        topicId: modernPhysics.id,
        front: 'What is mass-energy equivalence? Give the formula.',
        back: 'E = mc². Mass and energy are interchangeable! Atomic mass: 1 u = 931.5 MeV/c². Binding energy: BE = Δm·c². More BE → more stable nucleus.',
      },
      {
        topicId: modernPhysics.id,
        front: 'Compare nuclear fission and fusion.',
        back: 'Fission: heavy nucleus splits (²³⁵U), used in power plants. Fusion: light nuclei combine (²H+³H→⁴He), powers sun, MORE energy/nucleon. Both release energy because BE/nucleon increases.',
      },
      {
        topicId: modernPhysics.id,
        front: 'What are the three types of radioactive decay?',
        back: 'Alpha (α): ⁴He nucleus, A↓4, Z↓2. Beta (β⁻): electron, n→p, A same, Z↑1. Gamma (γ): photon, A and Z same. Half-life: N(t) = N₀(1/2)^(t/t_1/2).',
      },
      {
        topicId: modernPhysics.id,
        front: 'What is conserved in nuclear reactions?',
        back: 'Must conserve: 1) Mass-energy (total E including mc²) 2) Charge (total Z) 3) Mass number (total A) 4) Momentum. Check all four when balancing nuclear equations!',
      },
      {
        topicId: modernPhysics.id,
        front: 'What are the hydrogen spectral series?',
        back: 'Lyman (UV): transitions to n=1. Balmer (visible): to n=2. Paschen (IR): to n=3. Each element has unique emission spectrum (fingerprint). E_photon = |E_f - E_i|.',
      },
    ],
  })

  console.log('✓ Created 12 flashcards for Photons and Atomic Physics')

  console.log('\n✅ Successfully seeded AP Physics 2 - Modern Physics!')
  console.log('   Topics: 1')
  console.log('   Examples: 3')
  console.log('   Flashcards: 12')

  console.log('\n🎉 ALL AP PHYSICS 2 SEED FILES CREATED!')
  console.log('   Total files: 14')
  console.log('   Total categories: 7')
  console.log('   Total topics: ~20')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
