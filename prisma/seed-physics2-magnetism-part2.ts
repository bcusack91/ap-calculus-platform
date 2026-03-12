import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Magnetism Part 2...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const magnetismCategory = await prisma.category.upsert({
    where: { slug: 'magnetism' },
    update: {},
    create: {
      slug: 'magnetism',
      name: 'Magnetism',
      description: 'Magnetic fields, forces on charges and currents, electromagnetic induction',
      order: 4,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Found category: Magnetism')

  // ============================================
  // TOPIC: Electromagnetic Induction
  // ============================================
  const emInduction = await prisma.topic.upsert({
    where: { slug: 'electromagnetic-induction' },
    update: {},
    create: {
      slug: 'electromagnetic-induction',
      title: 'Electromagnetic Induction',
      description: "Faraday's law, Lenz's law, motional EMF, generators, transformers",
      order: 2,
      categoryId: magnetismCategory.id,
      isPremium: false,
      textContent: `
# ⚡ Electromagnetic Induction

## Magnetic Flux

**Magnetic flux** $\\Phi_B$ through a surface:

$$\\Phi_B = \\vec{B} \\cdot \\vec{A} = BA \\cos\\theta$$

where:
- B = magnetic field strength (T)
- A = area (m²)
- $\\theta$ = angle between B and normal to surface

Unit: **Weber (Wb)** = T·m²

**Maximum flux**: B perpendicular to surface ($\\theta = 0°$, $\\Phi = BA$)
**Zero flux**: B parallel to surface ($\\theta = 90°$)

---

## Faraday's Law

**Changing magnetic flux induces EMF (voltage)!**

$$\\mathcal{E} = -N\\frac{\\Delta \\Phi_B}{\\Delta t}$$

where:
- $\\mathcal{E}$ = induced EMF (V)
- N = number of turns in coil
- $\\Delta \\Phi_B$ = change in magnetic flux

**Three ways to change flux:**
1. Change B (vary field strength)
2. Change A (vary area)
3. Change θ (rotate coil)

> **💡 This is how generators work!** Motion → changing flux → induced voltage

---

## Lenz's Law

**The direction of induced current opposes the change that caused it.**

Negative sign in Faraday's Law represents this!

### To find direction:
1. Determine if flux is increasing or decreasing
2. Induced current creates B field to **oppose this change**
3. Use right-hand rule to find current direction

**Increasing flux**: Induced B field opposes (points opposite)
**Decreasing flux**: Induced B field reinforces (points same way)

> **💡 Conservation of energy!** If induced current helped the change, you'd get free energy (perpetual motion).

---

## Motional EMF

Conductor moving through B field:

$$\\mathcal{E} = BLv$$

where:
- B = field strength
- L = length of conductor
- v = velocity perpendicular to B

**Physical picture:**
- Moving conductor → charges inside move
- Magnetic force on charges: F = qvB
- Charges separate → voltage (EMF)!

**Direction**: Use right-hand rule for F = qv × B

---

## Applications: Electric Generator

1. **Rotate coil** in magnetic field
2. **Flux changes**: $\\Phi(t) = BA \\cos(\\omega t)$
3. **Induced EMF**: $\\mathcal{E}(t) = NBA\\omega \\sin(\\omega t)$

**AC generator**: Produces alternating current (sinusoidal)

**DC generator**: Uses commutator to rectify current (one direction)

**Maximum EMF**: $\\mathcal{E}_{max} = NBA\\omega$

---

## Eddy Currents

Induced currents in **solid conductors**:
- Swirling currents (like water eddies)
- Dissipate energy as heat
- Create magnetic braking force

**Applications:**
- Braking systems (trains)
- Metal detectors
- Induction cooktops

**Reduce eddy currents**: Use laminated (layered) cores

---

## Transformers

**Step-up/step-down voltage** using induction!

$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$$

where:
- $V_p$, $N_p$ = primary voltage, turns
- $V_s$, $N_s$ = secondary voltage, turns

**Power conservation** (ideal transformer):
$$P_p = P_s$$
$$V_p I_p = V_s I_s$$

So: $\\frac{I_s}{I_p} = \\frac{V_p}{V_s} = \\frac{N_p}{N_s}$

**Step-up** (N_s > N_p): Voltage increases, current decreases
**Step-down** (N_s < N_p): Voltage decreases, current increases

> **💡 Only works with AC!** Need changing flux.

---

## Self-Inductance

Changing current in coil induces EMF in **same coil**!

$$\\mathcal{E} = -L\\frac{\\Delta I}{\\Delta t}$$

where L is **inductance** (unit: Henry, H = Wb/A = V·s/A)

**For solenoid:**
$$L = \\mu_0 n^2 A \\ell = \\mu_0 \\frac{N^2 A}{\\ell}$$

**Opposes change in current** (like inertia for current!)

---

## Energy in Magnetic Field

Energy stored in inductor:
$$U_B = \\frac{1}{2}LI^2$$

Energy density in B field:
$$u_B = \\frac{B^2}{2\\mu_0}$$

---

## RL Circuits

Inductor in circuit with resistor:

**Growth of current** (switch closed):
$$I(t) = I_{max}(1 - e^{-t/\\tau})$$

where $\\tau = L/R$ is **time constant**

**Decay of current** (switch opened):
$$I(t) = I_0 e^{-t/\\tau}$$

After time τ: Current reaches 63% of maximum (or decays to 37%)

---

## Maxwell's Addition to Ampère's Law

**Changing electric field creates magnetic field!**

Just as changing B creates E (Faraday), changing E creates B.

This led to prediction of **electromagnetic waves**!

$$c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = 3.0 \\times 10^8 \\text{ m/s}$$

Speed of light emerges from electric and magnetic constants!

---

## Problem-Solving Strategy

1. **Find initial and final flux**: $\\Phi = BA \\cos\\theta$
2. **Calculate change**: $\\Delta \\Phi$
3. **Apply Faraday's Law**: $\\mathcal{E} = -N\\Delta\\Phi/\\Delta t$
4. **Use Lenz's Law** for direction
5. **For motional EMF**: $\\mathcal{E} = BLv$

---

## Common Mistakes

❌ Forgetting cos θ in flux calculation
❌ Wrong sign/direction from Lenz's Law
❌ Using Faraday's Law when flux is constant (ΔΦ = 0 → ε = 0!)
❌ Confusing transformers (works with AC only!)
❌ Thinking V increases → I increases in transformer (opposite!)
❌ Not using perpendicular component of velocity
`,
    },
  })

  console.log('✓ Created topic: Electromagnetic Induction')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: emInduction.id,
        question: 'A circular coil with 50 turns and radius 10 cm is perpendicular to a 0.80 T magnetic field. The field decreases to zero in 0.20 s. What is the induced EMF?',
        solution: `**Given:**
- Number of turns: $N = 50$
- Radius: $r = 10$ cm $= 0.10$ m
- Initial field: $B_i = 0.80$ T
- Final field: $B_f = 0$ T
- Time: $\\Delta t = 0.20$ s
- Perpendicular: $\\theta = 0°$

**Solution:**

Step 1: Find area.
$$A = \\pi r^2 = \\pi (0.10)^2 = 0.0314 \\text{ m}^2$$

Step 2: Find change in flux.
$$\\Phi_i = B_i A \\cos\\theta = (0.80)(0.0314)(1) = 0.0251 \\text{ Wb}$$
$$\\Phi_f = 0$$
$$\\Delta \\Phi = \\Phi_f - \\Phi_i = -0.0251 \\text{ Wb}$$

Step 3: Apply Faraday's Law.
$$|\\mathcal{E}| = N\\frac{|\\Delta \\Phi|}{\\Delta t} = (50)\\frac{0.0251}{0.20}$$
$$|\\mathcal{E}| = 6.3 \\text{ V}$$

**Answer:** Induced EMF = **6.3 V**

Direction: By Lenz's Law, induced current creates B field in same direction as original (to oppose the decrease).`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: emInduction.id,
        question: 'A metal rod of length 0.50 m moves at 4.0 m/s perpendicular to a 0.30 T magnetic field. What is the motional EMF?',
        solution: `**Given:**
- Length: $L = 0.50$ m
- Velocity: $v = 4.0$ m/s
- B field: $B = 0.30$ T
- Perpendicular motion

**Solution:**

Motional EMF:
$$\\mathcal{E} = BLv = (0.30)(0.50)(4.0) = 0.60 \\text{ V}$$

**Physical picture:**
- Rod moves through B field
- Free electrons in metal experience F = qvB
- Electrons accumulate at one end
- Creates potential difference (EMF)!

**Answer:** Motional EMF = **0.60 V**

Direction: Use right-hand rule for F = qv × B (remembering q is negative for electrons).`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: emInduction.id,
        question: 'An ideal transformer steps 120 V AC down to 12 V. The primary has 100 turns. (a) How many turns in secondary? (b) If secondary supplies 5.0 A, what is primary current?',
        solution: `**Given:**
- Primary voltage: $V_p = 120$ V
- Secondary voltage: $V_s = 12$ V
- Primary turns: $N_p = 100$
- Secondary current: $I_s = 5.0$ A

**Part (a):** Secondary turns

$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$$
$$N_s = N_p \\frac{V_s}{V_p} = (100)\\frac{12}{120} = 10 \\text{ turns}$$

**Part (b):** Primary current

Power conservation:
$$V_p I_p = V_s I_s$$
$$I_p = I_s \\frac{V_s}{V_p} = (5.0)\\frac{12}{120} = 0.50 \\text{ A}$$

Check: Voltage down by factor of 10, so current up by factor of 10! ✓

**Answer:**
- **(a)** N_s = **10 turns** (step-down transformer)
- **(b)** I_p = **0.50 A**

Note: Lower voltage → higher current for same power.`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: emInduction.id,
        front: 'What is magnetic flux? Give the formula and unit.',
        back: 'Φ_B = BA cosθ, where θ is angle between B and normal to surface. Unit: Weber (Wb) = T·m². Max flux when B ⊥ surface (θ=0°), zero when B ∥ surface.',
      },
      {
        topicId: emInduction.id,
        front: "State Faraday's Law of electromagnetic induction.",
        back: 'ε = -N(ΔΦ_B/Δt). Changing magnetic flux induces EMF. Three ways to change flux: vary B, vary A, rotate (change θ). Negative sign from Lenz\'s Law.',
      },
      {
        topicId: emInduction.id,
        front: "State Lenz's Law and explain its physical basis.",
        back: 'Induced current\'s magnetic field OPPOSES the change in flux that caused it. Based on energy conservation - if it helped the change, you\'d get perpetual motion!',
      },
      {
        topicId: emInduction.id,
        front: 'What is motional EMF?',
        back: 'ε = BLv. EMF induced in conductor moving through B field. Magnetic force on charges separates them, creating voltage. Must move perpendicular to B for maximum EMF.',
      },
      {
        topicId: emInduction.id,
        front: 'How does an AC generator work?',
        back: 'Rotate coil in B field → flux changes → induced EMF by Faraday. EMF(t) = NBAω sin(ωt). Max EMF = NBAω. Produces sinusoidal AC voltage.',
      },
      {
        topicId: emInduction.id,
        front: 'What is a transformer? Give the voltage and current relationships.',
        back: 'Device using induction to change voltage. V_s/V_p = N_s/N_p (voltage ratio = turns ratio). Power conserved: I_s/I_p = N_p/N_s (inverse!). Only works with AC.',
      },
      {
        topicId: emInduction.id,
        front: 'What are eddy currents?',
        back: 'Swirling induced currents in solid conductors when flux changes. Dissipate energy as heat. Create magnetic braking. Used in brakes, metal detectors, induction cooking. Reduce with laminated cores.',
      },
      {
        topicId: emInduction.id,
        front: 'What is self-inductance?',
        back: 'ε = -L(ΔI/Δt). Changing current in coil induces EMF in same coil! L = inductance (Henry, H). Opposes current change (like inertia). For solenoid: L = μ₀n²Aℓ.',
      },
      {
        topicId: emInduction.id,
        front: 'What is the time constant for an RL circuit?',
        back: 'τ = L/R. Current growth: I = I_max(1 - e^(-t/τ)). Decay: I = I₀e^(-t/τ). After τ: 63% of max (or 37% remaining). Energy stored: U = ½LI².',
      },
      {
        topicId: emInduction.id,
        front: 'What did Maxwell add to electromagnetic theory?',
        back: 'Changing electric field creates magnetic field (just as changing B creates E). Led to electromagnetic waves! Speed: c = 1/√(μ₀ε₀) = 3×10⁸ m/s emerges from E&M constants!',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Electromagnetic Induction')

  console.log('\n✅ Successfully seeded AP Physics 2 - Magnetism Part 2!')
  console.log('   Topics: 1')
  console.log('   Examples: 3')
  console.log('   Flashcards: 10')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
