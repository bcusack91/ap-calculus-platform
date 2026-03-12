import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Kinetics (Consolidated Part 3)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Kinetics category
  const kineticsCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Kinetics'
    }
  });

  if (!kineticsCategory) {
    throw new Error('Kinetics category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: kineticsCategory.id }
  });

  // Topic 3: Activation Energy and Temperature Effects
  const arrheniusTopic = await prisma.topic.create({
    data: {
      title: 'Activation Energy and Temperature Effects',
      slug: 'activation-energy-arrhenius',
      description: 'Understand activation energy, collision theory, the Arrhenius equation, and how temperature affects reaction rates.',
      order: existingTopics + 1,
      categoryId: kineticsCategory.id,
      isPremium: false,
      textContent: `
# Activation Energy and Temperature Effects

## Collision Theory

**For reaction to occur, particles must:**
1. **Collide** with proper orientation
2. Have **sufficient energy** to break bonds

**Not all collisions lead to reaction:**
- Most collisions lack enough energy
- Wrong orientation → no reaction

## Activation Energy (Ea)

**Activation energy:** Minimum energy needed for reaction

**Energy diagram:**
- Reactants at lower energy
- Transition state (activated complex) at peak
- Products at final energy
- Ea = barrier height from reactants

**Key points:**
- Higher Ea → slower reaction
- Lower Ea → faster reaction
- Catalysts lower Ea

## Arrhenius Equation

**Temperature dependence of k:**

$$k = Ae^{-E_a/RT}$$

**Where:**
- k = rate constant
- A = frequency factor (collision frequency × orientation factor)
- Ea = activation energy (J/mol)
- R = 8.314 J/(mol·K)
- T = temperature (Kelvin)

**Linear form:**

$$\\ln k = \\ln A - \\frac{E_a}{RT}$$

**Plot ln(k) vs 1/T:** Straight line, slope = -Ea/R

## Two-Point Form

**Compare k at two temperatures:**

$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

**Useful for:**
- Finding Ea from two k values at different T
- Predicting k at new temperature

## Temperature Effects

**General rule:** Rate roughly doubles for every 10°C increase

**Why higher T increases rate:**
1. More collisions (faster molecules)
2. More energetic collisions (more exceed Ea)
3. Effect 2 dominates

**Exponential dependence:** Small T change → large k change

## Energy Diagrams

**Exothermic reaction:**
- Products lower than reactants
- Releases energy
- ΔH < 0

**Endothermic reaction:**
- Products higher than reactants
- Absorbs energy
- ΔH > 0

**Both have Ea barrier:**
- Ea,forward for reactants → products
- Ea,reverse for products → reactants
- Ea,forward + ΔH = Ea,reverse (endothermic)
- Ea,forward - ΔH = Ea,reverse (exothermic)

## Catalysts

**Catalyst:** Substance that increases rate without being consumed

**How catalysts work:**
- Provide alternative pathway with lower Ea
- Does NOT change ΔH
- Does NOT change equilibrium position
- Increases both forward and reverse rates equally

**Types:**
- **Homogeneous:** Same phase as reactants
- **Heterogeneous:** Different phase (often solid surface)
- **Enzymes:** Biological catalysts

**Example:** Decomposition of H₂O₂
- Uncatalyzed: slow
- With MnO₂: fast
- With catalase (enzyme): very fast
`,
      exampleProblems: {
        create: [
          {
            question: 'A reaction has Ea = 75 kJ/mol. At 300 K, k = 2.0 × 10⁻³ s⁻¹. What is k at 350 K?',
            solution: `**Given:**
- Ea = 75 kJ/mol = 75,000 J/mol
- T₁ = 300 K, k₁ = 2.0 × 10⁻³ s⁻¹
- T₂ = 350 K, k₂ = ?
- R = 8.314 J/(mol·K)

**Use two-point Arrhenius:**

$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

**Calculate 1/T₁ - 1/T₂:**

$$\\frac{1}{300} - \\frac{1}{350} = 0.003333 - 0.002857 = 0.000476 \\text{ K}^{-1}$$

**Calculate Ea/R:**

$$\\frac{E_a}{R} = \\frac{75000}{8.314} = 9020 \\text{ K}$$

**Calculate ln(k₂/k₁):**

$$\\ln\\left(\\frac{k_2}{k_1}\\right) = 9020 \\times 0.000476 = 4.29$$

**Solve for k₂:**

$$\\frac{k_2}{k_1} = e^{4.29} = 73.0$$

$$k_2 = 73.0 \\times k_1 = 73.0 \\times (2.0 \\times 10^{-3})$$

$$k_2 = 0.146 \\text{ s}^{-1} = 1.5 \\times 10^{-1} \\text{ s}^{-1}$$

**Answer:** k₂ = 0.15 s⁻¹

**Interpretation:** 50°C increase → rate constant increased 73-fold!`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'For a reaction, k = 3.2 × 10⁻⁴ s⁻¹ at 500 K and k = 1.5 × 10⁻² s⁻¹ at 600 K. Calculate (a) Ea and (b) the frequency factor A.',
            solution: `**Given:**
- T₁ = 500 K, k₁ = 3.2 × 10⁻⁴ s⁻¹
- T₂ = 600 K, k₂ = 1.5 × 10⁻² s⁻¹
- R = 8.314 J/(mol·K)

---

**(a) Calculate Ea**

**Use two-point form:**

$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

**Calculate ln(k₂/k₁):**

$$\\frac{k_2}{k_1} = \\frac{1.5 \\times 10^{-2}}{3.2 \\times 10^{-4}} = 46.9$$

$$\\ln(46.9) = 3.85$$

**Calculate 1/T₁ - 1/T₂:**

$$\\frac{1}{500} - \\frac{1}{600} = 0.00200 - 0.00167 = 0.000333 \\text{ K}^{-1}$$

**Solve for Ea:**

$$3.85 = \\frac{E_a}{8.314} \\times 0.000333$$

$$E_a = \\frac{3.85 \\times 8.314}{0.000333} = 96,100 \\text{ J/mol}$$

$$E_a = 96 \\text{ kJ/mol}$$

**Answer (a):** Ea = 96 kJ/mol

---

**(b) Calculate A**

**Use Arrhenius equation at either temperature (use T₁ = 500 K):**

$$k_1 = Ae^{-E_a/RT_1}$$

$$A = k_1 e^{E_a/RT_1}$$

**Calculate Ea/(RT₁):**

$$\\frac{E_a}{RT_1} = \\frac{96100}{8.314 \\times 500} = \\frac{96100}{4157} = 23.1$$

**Calculate A:**

$$A = (3.2 \\times 10^{-4}) \\times e^{23.1}$$

$$e^{23.1} = 1.1 \\times 10^{10}$$

$$A = 3.5 \\times 10^6 \\text{ s}^{-1}$$

**Answer (b):** A = 3.5 × 10⁶ s⁻¹

**Check with T₂:**
k₂ = (3.5 × 10⁶)e^(-96100/(8.314×600)) = (3.5 × 10⁶)e^(-19.25) 
= (3.5 × 10⁶)(4.3 × 10⁻⁹) = 1.5 × 10⁻² ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Draw and label an energy diagram for an exothermic reaction with Ea = 80 kJ/mol and ΔH = -50 kJ/mol. What is the activation energy for the reverse reaction?',
            solution: `**Given:**
- Exothermic: ΔH = -50 kJ/mol
- Ea(forward) = 80 kJ/mol

---

**Energy Diagram:**

\`\`\`
Energy
  ↑
  |    Transition State
  |         ↗ ↘
  |      ↗     ↘  Ea(reverse) = 130 kJ
  |   ↗           ↘
  |  ↗  Ea(fwd)     ↘
  | ↗   80 kJ        ↘
Reactants              Products
  |                    ↓ ΔH = -50 kJ
  |___________________
  |__________________|
  
  Reaction Progress →
\`\`\`

**Key points:**
1. **Reactants** start at reference level
2. **Transition state** is 80 kJ above reactants
3. **Products** are 50 kJ below reactants (exothermic)

---

**Calculate Ea(reverse):**

**Relationship for exothermic:**

$$E_{a,\\text{reverse}} = E_{a,\\text{forward}} - \\Delta H$$

But ΔH = -50 kJ (negative), so:

$$E_{a,\\text{reverse}} = 80 - (-50) = 80 + 50 = 130 \\text{ kJ/mol}$$

**Or think of it as:**
- Forward: reactants → transition state = +80 kJ
- Total drop: reactants → products = -50 kJ
- Reverse: products → transition state = +130 kJ

**Answer:** Ea(reverse) = 130 kJ/mol

---

**General relationships:**

**Exothermic (ΔH < 0):**
- Ea,reverse > Ea,forward
- Ea,reverse = Ea,forward + |ΔH|

**Endothermic (ΔH > 0):**
- Ea,forward > Ea,reverse  
- Ea,forward = Ea,reverse + ΔH

**Always:**
$$E_{a,\\text{forward}} - E_{a,\\text{reverse}} = \\Delta H$$

---

**If catalyst added:**
- Both Ea,forward and Ea,reverse decrease by same amount
- ΔH unchanged (path doesn't affect thermodynamics)
- Transition state lower, but products/reactants same`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', arrheniusTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: arrheniusTopic.id,
        front: 'What is activation energy (Ea) and how does it affect reaction rate?',
        back: 'Ea is minimum energy needed for reaction to occur. Higher Ea → slower reaction (fewer molecules have enough energy). Lower Ea → faster reaction. Catalysts work by lowering Ea.'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'What is the Arrhenius equation and what does each term represent?',
        back: 'k = Ae^(-Ea/RT). k = rate constant, A = frequency factor, Ea = activation energy, R = 8.314 J/(mol·K), T = temperature (K). Shows exponential dependence of k on T.'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'What is the two-point Arrhenius equation and when is it used?',
        back: 'ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂). Used to: 1) Find Ea from k at two temperatures, 2) Predict k at new temperature. Very useful for calculations.'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'How do you determine Ea graphically using the Arrhenius equation?',
        back: 'Linear form: ln(k) = ln(A) - Ea/R × (1/T). Plot ln(k) vs 1/T gives straight line with slope = -Ea/R. From slope, Ea = -slope × R.'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'What is the relationship between Ea(forward), Ea(reverse), and ΔH?',
        back: 'Ea(forward) - Ea(reverse) = ΔH. For exothermic (ΔH < 0): Ea(reverse) > Ea(forward). For endothermic (ΔH > 0): Ea(forward) > Ea(reverse).'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'How does a catalyst affect a reaction and what does it NOT change?',
        back: 'Catalyst provides alternative pathway with lower Ea → faster rate. Does NOT change: ΔH, equilibrium position, or nature of products. Increases both forward and reverse rates equally.'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'According to collision theory, what two conditions must be met for reaction to occur?',
        back: '1) Particles must collide with sufficient energy (≥ Ea), 2) Particles must have proper orientation. Not all collisions lead to reaction - most lack energy or wrong orientation.'
      },
      {
        topicId: arrheniusTopic.id,
        front: 'Why does increasing temperature dramatically increase reaction rate?',
        back: 'Exponential effect from Arrhenius equation. Higher T → more molecules have E ≥ Ea. Rule of thumb: rate doubles for every 10°C increase. Effect on energy distribution more important than collision frequency.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', arrheniusTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Kinetics (Part 3)!');
  console.log('   Topics: 1');
  console.log('   Examples: 3');
  console.log('   Flashcards: 8');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
