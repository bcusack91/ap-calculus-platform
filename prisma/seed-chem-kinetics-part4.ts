import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Kinetics (Consolidated Part 4)...');

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

  // Topic 4: Reaction Mechanisms
  const mechanismsTopic = await prisma.topic.create({
    data: {
      title: 'Reaction Mechanisms and Intermediates',
      slug: 'reaction-mechanisms',
      description: 'Understand multi-step mechanisms, rate-determining steps, intermediates, and how mechanisms relate to observed rate laws.',
      order: existingTopics + 1,
      categoryId: kineticsCategory.id,
      isPremium: false,
      textContent: `
# Reaction Mechanisms and Intermediates

## What is a Mechanism?

**Reaction mechanism:** Step-by-step sequence showing how reaction occurs

**Why mechanisms matter:**
- Explain HOW reactants become products
- Predict rate laws
- Identify intermediates
- Guide catalyst design

**Most reactions are multi-step:**
- Elementary steps add to give overall equation
- Each step has its own rate

## Elementary Steps

**Elementary step:** Single molecular event

**Molecularity:** Number of molecules participating

**Types:**
- **Unimolecular:** A → products (rate = k[A])
- **Bimolecular:** A + B → products (rate = k[A][B])
- **Termolecular:** A + B + C → products (very rare!)

**Key rule:** For elementary steps ONLY, exponents = coefficients

## Intermediates vs Catalysts

**Intermediate:**
- Formed in one step, consumed in later step
- Appears in mechanism but NOT overall equation
- Short-lived species

**Catalyst:**
- Consumed in one step, regenerated in later step
- Appears in mechanism but NOT overall equation
- Speeds reaction, not consumed overall

**Product:**
- Formed and remains
- Appears in overall equation

## Rate-Determining Step

**Rate-determining step (RDS):** Slowest step in mechanism

**Analogy:** Traffic bottleneck - slowest lane determines overall flow

**Key points:**
- Controls overall reaction rate
- Rate law comes from RDS (with modifications)
- Like slowest step on assembly line

**If RDS is first step:**
- Overall rate law = rate law of first step
- Straightforward

**If RDS is later step:**
- May involve intermediates
- Must substitute from fast equilibrium

## Deriving Rate Laws from Mechanisms

### Case 1: RDS is First Step

**Mechanism:**
1. A + B → C (slow)
2. C + D → E (fast)

**Overall:** A + B + D → E

**Rate law:** Rate = k[A][B] (from slow step)

### Case 2: RDS is Second Step

**Mechanism:**
1. A + B ⇌ C (fast equilibrium)
2. C + D → E (slow)

**Overall:** A + B + D → E

**Can't use C in rate law (intermediate!)**

**From equilibrium:**
$$K_{eq} = \\frac{[C]}{[A][B]}$$
$$[C] = K_{eq}[A][B]$$

**Rate law from RDS:**
$$\\text{Rate} = k_2[C][D] = k_2K_{eq}[A][B][D]$$

**Overall:** Rate = k[A][B][D] where k = k₂K_{eq}

## Writing Valid Mechanisms

**Requirements:**
1. **Sum to overall equation** - elementary steps must add up
2. **Rate law must match** - mechanism must give observed rate law
3. **Reasonable steps** - mostly uni- or bimolecular
4. **Energy profile** - intermediates at local minima

**Note:** Can't prove mechanism, only support or disprove

## Common Mechanism Patterns

### Two-Step with Fast Equilibrium

**Example:** 2NO + O₂ → 2NO₂

**Mechanism:**
1. NO + NO ⇌ N₂O₂ (fast equilibrium)
2. N₂O₂ + O₂ → 2NO₂ (slow)

**Rate = k[NO]²[O₂]** (matches experimental!)

### Pre-Equilibrium Approximation

**When first step is fast equilibrium:**
- Forward and reverse rates equal
- Can use K_{eq} to express intermediate concentration
- Substitute into RDS rate law

### Steady-State Approximation

**For complex mechanisms:**
- Intermediate concentration stays roughly constant
- Production rate ≈ consumption rate
- Advanced technique

## Catalysis Mechanisms

### Homogeneous Catalyst

**Example:** I⁻ catalyzing H₂O₂ decomposition

1. H₂O₂ + I⁻ → H₂O + IO⁻ (slow)
2. H₂O₂ + IO⁻ → H₂O + O₂ + I⁻ (fast)

**Overall:** 2H₂O₂ → 2H₂O + O₂

**I⁻ consumed then regenerated** → catalyst

### Heterogeneous Catalyst

**Surface mechanism (typical):**
1. Reactant adsorbs onto surface
2. Reaction occurs on surface (lower Ea)
3. Product desorbs from surface

**Example:** Hydrogenation with Pt catalyst

## Analyzing Mechanisms - Practice Strategy

**Given mechanism, can:**
1. Identify intermediates (formed then consumed)
2. Identify catalysts (consumed then reformed)
3. Write overall equation (cancel intermediates)
4. Determine rate law (from RDS + fast equilibrium)

**Given rate law, can:**
1. Propose mechanism consistent with rate law
2. Multiple mechanisms may fit - can't prove which is correct
`,
      exampleProblems: {
        create: [
          {
            question: 'Given mechanism: (1) NO₂ + NO₂ → NO₃ + NO (slow), (2) NO₃ + CO → NO₂ + CO₂ (fast). Find: (a) overall equation, (b) intermediates, (c) rate law.',
            solution: `**Given mechanism:**
1. NO₂ + NO₂ → NO₃ + NO (slow)
2. NO₃ + CO → NO₂ + CO₂ (fast)

---

**(a) Overall equation**

**Add the two steps:**

Step 1: NO₂ + NO₂ → NO₃ + NO
Step 2: NO₃ + CO → NO₂ + CO₂

**Sum:** NO₂ + NO₂ + NO₃ + CO → NO₃ + NO + NO₂ + CO₂

**Cancel species on both sides:**
- NO₃ appears on both sides → cancel
- One NO₂ appears on both sides → cancel (2 on left, 1 on right leaves 1 on left)

**Overall:** NO₂ + CO → NO + CO₂

---

**(b) Identify intermediates**

**Intermediate:** Formed in one step, consumed in another

**NO₃:**
- Formed in step 1 (product)
- Consumed in step 2 (reactant)
- **NO₃ is intermediate**

**Check other species:**
- NO₂: reactant (overall)
- CO: reactant (overall)
- NO: product (overall)
- CO₂: product (overall)

**Answer:** NO₃ is the only intermediate

---

**(c) Rate law**

**Rate-determining step (RDS):** Step 1 (slow)

**For elementary step:** exponents = coefficients

**Step 1:** NO₂ + NO₂ → NO₃ + NO

**Rate law:** Rate = k[NO₂]²

**Answer:** Rate = k[NO₂]²

**Note:** 
- Step 1 is RDS and first step → rate law directly from it
- No intermediates in RDS → no substitution needed
- CO doesn't appear because step 2 is fast (not rate-determining)`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'The reaction 2NO + Br₂ → 2NOBr has rate law: Rate = k[NO]²[Br₂]. Propose a mechanism consistent with this rate law.',
            solution: `**Given:**
- Overall: 2NO + Br₂ → 2NOBr
- Observed rate law: Rate = k[NO]²[Br₂]

**Need:** Mechanism that gives this rate law

---

**Strategy:**
- Rate law is third order: second in NO, first in Br₂
- Suggests RDS involves 2 NO and 1 Br₂
- Or RDS after fast equilibrium

---

**Proposed Mechanism (Option 1):**

**Step 1:** NO + Br₂ → NOBr₂ (fast equilibrium)
**Step 2:** NOBr₂ + NO → 2NOBr (slow)

**Check overall:**
NO + Br₂ → NOBr₂
NOBr₂ + NO → 2NOBr
**Sum:** 2NO + Br₂ → 2NOBr ✓

**Check rate law:**

From step 2 (RDS): Rate = k₂[NOBr₂][NO]

But NOBr₂ is intermediate - express using step 1 equilibrium:

$$K_1 = \\frac{[NOBr_2]}{[NO][Br_2]}$$

$$[NOBr_2] = K_1[NO][Br_2]$$

Substitute:
$$\\text{Rate} = k_2K_1[NO][Br_2][NO] = k_2K_1[NO]^2[Br_2]$$

Let k = k₂K₁:
$$\\text{Rate} = k[NO]^2[Br_2]$$ ✓

**This mechanism works!**

---

**Alternative Mechanism (Option 2):**

**Step 1:** NO + NO → N₂O₂ (fast equilibrium)
**Step 2:** N₂O₂ + Br₂ → 2NOBr (slow)

**Check overall:**
2NO → N₂O₂
N₂O₂ + Br₂ → 2NOBr
**Sum:** 2NO + Br₂ → 2NOBr ✓

**Check rate law:**

From step 2: Rate = k₂[N₂O₂][Br₂]

From step 1 equilibrium:
$$[N_2O_2] = K_1[NO]^2$$

Substitute:
$$\\text{Rate} = k_2K_1[NO]^2[Br_2]$$ ✓

**This also works!**

---

**Key insight:** 
- Multiple mechanisms can give same rate law
- Can't prove which is correct from rate law alone
- Need additional evidence (detect intermediates, isotope studies, etc.)`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'For mechanism: (1) A ⇌ B (fast, K₁), (2) B + C ⇌ D (fast, K₂), (3) D + E → F (slow, k₃). Derive the rate law in terms of A, C, and E only.',
            solution: `**Given mechanism:**
1. A ⇌ B (fast equilibrium, K₁)
2. B + C ⇌ D (fast equilibrium, K₂)
3. D + E → F (slow, k₃)

**Goal:** Rate law in terms of A, C, E (not intermediates B or D)

---

**Step 1: Identify RDS**

Step 3 is slow → rate-determining step

**Initial rate law:** Rate = k₃[D][E]

**Problem:** D is intermediate (can't appear in final rate law)

---

**Step 2: Express D using equilibrium**

**From step 2 equilibrium:**

$$K_2 = \\frac{[D]}{[B][C]}$$

$$[D] = K_2[B][C]$$

**Still have B (also intermediate!)**

---

**Step 3: Express B using equilibrium**

**From step 1 equilibrium:**

$$K_1 = \\frac{[B]}{[A]}$$

$$[B] = K_1[A]$$

---

**Step 4: Substitute back**

**Substitute [B] into [D] expression:**

$$[D] = K_2[B][C] = K_2(K_1[A])[C] = K_1K_2[A][C]$$

---

**Step 5: Write final rate law**

**Substitute [D] into RDS rate law:**

$$\\text{Rate} = k_3[D][E] = k_3(K_1K_2[A][C])[E]$$

$$\\text{Rate} = k_3K_1K_2[A][C][E]$$

**Define overall rate constant:**

$$k_{\\text{overall}} = k_3K_1K_2$$

**Final answer:**

$$\\boxed{\\text{Rate} = k[A][C][E]}$$

**where k = k₃K₁K₂**

---

**Analysis:**

**Reaction orders:**
- First order in A
- First order in C
- First order in E
- Third order overall

**Physical meaning:**
- All three species participate in determining rate
- Even though RDS only involves D + E
- Pre-equilibria affect concentrations of intermediates

---

**Verification strategy:**

1. ✓ No intermediates in final rate law (B, D eliminated)
2. ✓ Only species in overall equation (A, C, E)
3. ✓ Consistent with RDS being rate-determining
4. ✓ Used equilibrium expressions properly

**General approach for complex mechanisms:**
1. Start with RDS rate law
2. Identify intermediates
3. Work backwards through fast equilibria
4. Substitute until only reactants remain`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', mechanismsTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: mechanismsTopic.id,
        front: 'What is a reaction mechanism and what are elementary steps?',
        back: 'Mechanism: step-by-step sequence showing how reaction occurs. Elementary step: single molecular event. Molecularity: unimolecular (A→), bimolecular (A+B→), rarely termolecular. For elementary steps ONLY: exponents = coefficients.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'What is an intermediate and how does it differ from a catalyst?',
        back: 'Intermediate: formed in one step, consumed in later step. Catalyst: consumed in one step, regenerated in later step. Both appear in mechanism but NOT in overall equation. Neither is a final product.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'What is the rate-determining step (RDS) and how does it affect the rate law?',
        back: 'RDS: slowest step in mechanism, controls overall rate (like bottleneck). If RDS is first: rate law directly from it. If RDS is later: use fast equilibrium to substitute intermediates. Rate law comes from RDS.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'How do you derive a rate law when the RDS is the second step?',
        back: 'Rate law from RDS contains intermediate. Use fast equilibrium from first step: K = [intermediate]/[reactants]. Solve for [intermediate]. Substitute into RDS rate law. Final: Rate = k[reactants] where k combines rate and equilibrium constants.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'What are the requirements for a valid reaction mechanism?',
        back: '1) Elementary steps sum to overall equation, 2) Mechanism gives observed rate law, 3) Reasonable steps (mostly uni/bimolecular), 4) Energy profile makes sense. Note: Cannot prove mechanism correct, only support or disprove.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'How do you find the overall equation from a mechanism?',
        back: 'Add all elementary steps. Cancel species appearing on both sides (intermediates). What remains is overall equation. Intermediates disappear; reactants and products remain.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'What is the difference between homogeneous and heterogeneous catalysis?',
        back: 'Homogeneous: catalyst same phase as reactants (e.g., I⁻ in solution). Heterogeneous: catalyst different phase (e.g., solid Pt surface). Heterogeneous: reactants adsorb, react on surface, products desorb.'
      },
      {
        topicId: mechanismsTopic.id,
        front: 'Can you determine the correct mechanism from the rate law alone?',
        back: 'No! Multiple mechanisms can give same rate law. Rate law can support or disprove proposed mechanism, but cannot prove which is correct. Need additional evidence: detect intermediates, isotope studies, computational modeling.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', mechanismsTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Kinetics (Part 4)!');
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
