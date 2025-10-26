import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Chemical Reactions (Part 4)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Chemical Reactions category
  const reactionsCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Chemical Reactions'
    }
  });

  if (!reactionsCategory) {
    throw new Error('Chemical Reactions category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: reactionsCategory.id }
  });

  // Topic 4: Oxidation-Reduction Reactions
  const redoxTopic = await prisma.topic.create({
    data: {
      title: 'Oxidation-Reduction (Redox) Reactions',
      slug: 'oxidation-reduction-reactions',
      description: 'Master oxidation states, identify oxidation and reduction, balance redox equations using half-reaction method, and understand electron transfer in chemical reactions.',
      order: existingTopics + 1,
      categoryId: reactionsCategory.id,
      isPremium: false,
      textContent: `
# Oxidation-Reduction (Redox) Reactions

## Introduction

**Redox reactions:** Chemical reactions involving transfer of electrons

**Two complementary processes:**
- **Oxidation:** Loss of electrons
- **Reduction:** Gain of electrons

**Key principle:** Oxidation and reduction ALWAYS occur together
- Electrons lost by one species are gained by another
- Cannot have oxidation without reduction

**Mnemonic:** **OIL RIG**
- **O**xidation **I**s **L**oss (of electrons)
- **R**eduction **I**s **G**ain (of electrons)

**Alternative mnemonic:** **LEO GER**
- **L**ose **E**lectrons = **O**xidation
- **G**ain **E**lectrons = **R**eduction

## Oxidation States (Oxidation Numbers)

**Oxidation state:** Charge an atom would have if compound were ionic

**Used to:**
- Track electron transfer
- Identify what's oxidized/reduced
- Balance redox equations

### Rules for Assigning Oxidation States

**Apply in order (earlier rules take precedence):**

**1. Free elements:** Oxidation state = 0
- Examples: Na(s), O₂(g), Cl₂(g), S₈(s), Fe(s)
- All atoms in elemental form = 0

**2. Monatomic ions:** Oxidation state = ionic charge
- Na⁺ = +1
- Cl⁻ = -1
- Ca²⁺ = +2
- O²⁻ = -2
- Al³⁺ = +3

**3. Oxygen in compounds:** Usually -2
- **Exceptions:**
  - Peroxides (H₂O₂, Na₂O₂): O = -1
  - Superoxides (KO₂): O = -½
  - Bonded to F (OF₂): O = +2

**4. Hydrogen in compounds:** Usually +1
- **Exception:** Metal hydrides (NaH, CaH₂): H = -1

**5. Fluorine:** Always -1 (most electronegative)

**6. Group 1 metals (Li, Na, K, etc.):** Always +1

**7. Group 2 metals (Mg, Ca, Ba, etc.):** Always +2

**8. Aluminum:** Usually +3

**9. Sum of oxidation states:**
- **Neutral molecule:** Sum = 0
- **Polyatomic ion:** Sum = ion charge

### Examples of Assigning Oxidation States

**Example 1: H₂O**

- H: +1 (rule 4)
- O: -2 (rule 3)
- Check: 2(+1) + (-2) = 0 ✓

**Example 2: H₂SO₄**

- H: +1
- O: -2
- S: ?

Sum must = 0:
2(+1) + S + 4(-2) = 0
2 + S - 8 = 0
S = +6

**Example 3: MnO₄⁻ (permanganate ion)**

- O: -2
- Mn: ?

Sum must = -1:
Mn + 4(-2) = -1
Mn - 8 = -1
Mn = +7

**Example 4: Cr₂O₇²⁻ (dichromate ion)**

- O: -2
- Cr: ?

Sum must = -2:
2(Cr) + 7(-2) = -2
2Cr - 14 = -2
2Cr = 12
Cr = +6

**Example 5: NH₃**

- H: +1
- N: ?

Sum must = 0:
N + 3(+1) = 0
N = -3

**Example 6: Fe₃O₄ (magnetite)**

- O: -2
- Fe: ?

Sum must = 0:
3(Fe) + 4(-2) = 0
3Fe - 8 = 0
3Fe = 8
Fe = +8/3 (average)

**Actually:** Mixed oxidation states
- 1 Fe³⁺ and 2 Fe²⁺
- Average: (1×3 + 2×2)/3 = 7/3... wait
- Correct: FeO·Fe₂O₃ has Fe²⁺ and Fe³⁺

## Identifying Oxidation and Reduction

**Oxidation:** Increase in oxidation state (becomes more positive)
- Atom loses electrons
- Example: Fe → Fe²⁺ (0 → +2, oxidized)

**Reduction:** Decrease in oxidation state (becomes more negative)
- Atom gains electrons
- Example: Cl₂ → 2Cl⁻ (0 → -1, reduced)

### Example: Zn + Cu²⁺ → Zn²⁺ + Cu

**Assign oxidation states:**

**Reactants:**
- Zn(s): 0 (free element)
- Cu²⁺: +2 (ion charge)

**Products:**
- Zn²⁺: +2
- Cu(s): 0

**What changed?**

**Zn:** 0 → +2
- Increase in oxidation state
- Lost 2 electrons
- **Zn is oxidized**

**Cu:** +2 → 0
- Decrease in oxidation state
- Gained 2 electrons
- **Cu²⁺ is reduced**

### Oxidizing and Reducing Agents

**Oxidizing agent (oxidant):** Species that causes oxidation
- Gets reduced itself
- Gains electrons
- Example: Cu²⁺ (causes Zn to be oxidized)

**Reducing agent (reductant):** Species that causes reduction
- Gets oxidized itself
- Loses electrons
- Example: Zn (causes Cu²⁺ to be reduced)

**Summary for Zn + Cu²⁺ → Zn²⁺ + Cu:**
- **Oxidized:** Zn
- **Reduced:** Cu²⁺
- **Oxidizing agent:** Cu²⁺
- **Reducing agent:** Zn

**Memory aid:**
- Oxidizing agent gets **reduced** (gains electrons)
- Reducing agent gets **oxidized** (loses electrons)
- They do the **opposite** of what their name suggests!

## Types of Redox Reactions

### 1. Combination (Synthesis)

**Element + element → compound**

$$\\ce{2Mg(s) + O2(g) -> 2MgO(s)}$$

- Mg: 0 → +2 (oxidized)
- O: 0 → -2 (reduced)

### 2. Decomposition

**Compound → elements**

$$\\ce{2H2O(l) -> 2H2(g) + O2(g)}$$

- H: +1 → 0 (reduced)
- O: -2 → 0 (oxidized)

### 3. Single Replacement

**Metal displacing metal:**

$$\\ce{Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)}$$

- Zn: 0 → +2 (oxidized)
- Cu: +2 → 0 (reduced)

**Halogen displacing halogen:**

$$\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}$$

- Cl: 0 → -1 (reduced)
- Br: -1 → 0 (oxidized)

### 4. Combustion

**Always redox reactions**

$$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$$

- C: -4 → +4 (oxidized)
- O: 0 → -2 (reduced)

### 5. Disproportionation

**Same element both oxidized and reduced**

$$\\ce{Cl2(g) + 2OH-(aq) -> Cl-(aq) + ClO-(aq) + H2O(l)}$$

- One Cl: 0 → -1 (reduced)
- Other Cl: 0 → +1 (oxidized)

## Balancing Redox Equations

### Half-Reaction Method

**Most reliable method for complex redox equations**

**Steps:**

**1. Assign oxidation states**
- Identify what's oxidized and reduced

**2. Write two half-reactions**
- Oxidation half-reaction (electrons as product)
- Reduction half-reaction (electrons as reactant)

**3. Balance atoms in each half-reaction**
- Balance all atoms except H and O
- Balance O by adding H₂O
- Balance H by adding H⁺ (acidic) or OH⁻ (basic)

**4. Balance charges**
- Add electrons to balance charge

**5. Equalize electrons**
- Multiply half-reactions so electrons cancel

**6. Add half-reactions**
- Cancel electrons and any common terms

**7. Check balance**
- Atoms and charges must balance

### Example: Acidic Solution

**Balance:** MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic solution)

**Step 1: Oxidation states**

- Mn: +7 → +2 (reduced)
- Fe: +2 → +3 (oxidized)

**Step 2: Half-reactions**

**Reduction:**
$$\\ce{MnO4- -> Mn^{2+}}$$

**Oxidation:**
$$\\ce{Fe^{2+} -> Fe^{3+}}$$

**Step 3: Balance atoms**

**Reduction half:**
- Mn balanced ✓
- Add 4 H₂O to right (for 4 O):

$$\\ce{MnO4- -> Mn^{2+} + 4H2O}$$

- Add 8 H⁺ to left (for 8 H):

$$\\ce{MnO4- + 8H+ -> Mn^{2+} + 4H2O}$$

**Oxidation half:**
- Fe balanced ✓ (already done)

**Step 4: Balance charges**

**Reduction:**
- Left: -1 + 8(+1) = +7
- Right: +2
- Add 5e⁻ to left:

$$\\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}$$

**Check:** -1 + 8 - 5 = +2 ✓

**Oxidation:**
- Left: +2
- Right: +3
- Add 1e⁻ to right:

$$\\ce{Fe^{2+} -> Fe^{3+} + e-}$$

**Check:** +2 = +3 - 1 ✓

**Step 5: Equalize electrons**

**Reduction uses 5e⁻, oxidation produces 1e⁻**

Multiply oxidation by 5:

$$\\ce{5Fe^{2+} -> 5Fe^{3+} + 5e-}$$

**Step 6: Add half-reactions**

$$\\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}$$
$$\\ce{5Fe^{2+} -> 5Fe^{3+} + 5e-}$$

Cancel 5e⁻:

$$\\boxed{\\ce{MnO4- + 8H+ + 5Fe^{2+} -> Mn^{2+} + 5Fe^{3+} + 4H2O}}$$

**Step 7: Check**

**Atoms:**
- Mn: 1, 1 ✓
- O: 4, 4 ✓
- H: 8, 8 ✓
- Fe: 5, 5 ✓

**Charge:**
- Left: -1 + 8 + 5(+2) = +17
- Right: +2 + 5(+3) = +17 ✓

### Example: Basic Solution

**Balance:** Cr₂O₇²⁻ + Cl⁻ → Cr³⁺ + Cl₂ (basic solution)

**Steps 1-4: Same as acidic, but use H⁺ first**

**Reduction:**
$$\\ce{Cr2O7^{2-} + 14H+ + 6e- -> 2Cr^{3+} + 7H2O}$$

**Oxidation:**
$$\\ce{2Cl- -> Cl2 + 2e-}$$

**Multiply oxidation by 3:**
$$\\ce{6Cl- -> 3Cl2 + 6e-}$$

**Add:**
$$\\ce{Cr2O7^{2-} + 14H+ + 6Cl- -> 2Cr^{3+} + 3Cl2 + 7H2O}$$

**Now convert to basic:**

**Step 5: Add OH⁻ to neutralize H⁺**

Add 14 OH⁻ to both sides:

$$\\ce{Cr2O7^{2-} + 14H+ + 14OH- + 6Cl- -> 2Cr^{3+} + 3Cl2 + 7H2O + 14OH-}$$

**Step 6: Combine H⁺ + OH⁻ → H₂O**

14 H⁺ + 14 OH⁻ = 14 H₂O (left side)

$$\\ce{Cr2O7^{2-} + 14H2O + 6Cl- -> 2Cr^{3+} + 3Cl2 + 7H2O + 14OH-}$$

**Step 7: Cancel water**

14 H₂O - 7 H₂O = 7 H₂O (left side)

$$\\boxed{\\ce{Cr2O7^{2-} + 7H2O + 6Cl- -> 2Cr^{3+} + 3Cl2 + 14OH-}}$$

**Check charge:**
- Left: -2 + 0 + 6(-1) = -8
- Right: 2(+3) + 0 + 14(-1) = 6 - 14 = -8 ✓

## Common Oxidizing and Reducing Agents

### Strong Oxidizing Agents

**Accept electrons readily:**

- **MnO₄⁻** (permanganate) - strong, purple color
- **Cr₂O₇²⁻** (dichromate) - orange color
- **H₂O₂** (hydrogen peroxide)
- **O₂** (oxygen gas)
- **Halogens:** F₂ > Cl₂ > Br₂ > I₂
- **Concentrated H₂SO₄, HNO₃**

### Strong Reducing Agents

**Donate electrons readily:**

- **Active metals:** Li, K, Na, Ca, Mg
- **H₂** (hydrogen gas)
- **Carbon** (C)
- **Sn²⁺** (can be oxidized to Sn⁴⁺)
- **Fe²⁺** (can be oxidized to Fe³⁺)

## Spontaneity of Redox Reactions

**Activity series predicts which redox reactions occur spontaneously**

**More active metal:**
- Loses electrons more easily (better reducing agent)
- Displaces less active metal from solution

**Activity series (metals, strongest to weakest):**

Li > K > Ba > Ca > Na > Mg > Al > Zn > Cr > Fe > Ni > Sn > Pb > H > Cu > Ag > Au

**Rule:** Metal can reduce ions of any metal below it

**Example:**
- Zn can reduce Cu²⁺ (Zn above Cu) ✓
- Cu cannot reduce Zn²⁺ (Cu below Zn) ✗

**Halogen activity series:**

F₂ > Cl₂ > Br₂ > I₂

**Rule:** Halogen can oxidize ions of any halogen below it

**Example:**
- Cl₂ can oxidize Br⁻ to Br₂ ✓
- Br₂ cannot oxidize Cl⁻ ✗

## Applications of Redox Reactions

### Batteries and Electrochemical Cells

**Convert chemical energy to electrical energy**
- Based on spontaneous redox reactions
- Oxidation at anode (negative)
- Reduction at cathode (positive)

### Corrosion

**Unwanted oxidation of metals**
- Rusting: 4Fe + 3O₂ → 2Fe₂O₃
- Fe oxidized: 0 → +3

### Metallurgy

**Extracting metals from ores**
- Reduction of metal oxides
- Example: Fe₂O₃ + 3CO → 2Fe + 3CO₂

### Bleaching

**Oxidation of colored compounds**
- H₂O₂, Cl₂ used as oxidizing agents

### Cellular Respiration

**Glucose oxidized to CO₂**
- C₆H₁₂O₆ + O₂ → CO₂ + H₂O + energy
- C: -1 → +4 (oxidized)

### Photosynthesis

**CO₂ reduced to glucose**
- Reverse of respiration
- C: +4 → -1 (reduced)

## Summary

**Key concepts:**

1. **Redox = electron transfer**
   - Oxidation = loss of e⁻
   - Reduction = gain of e⁻

2. **Oxidation states track electrons**
   - Increase = oxidation
   - Decrease = reduction

3. **Complementary processes**
   - Oxidizing agent gets reduced
   - Reducing agent gets oxidized

4. **Half-reaction method**
   - Balance atoms (except H, O)
   - Add H₂O for O
   - Add H⁺ for H (acidic) or OH⁻ (basic)
   - Balance charge with e⁻
   - Equalize and add

5. **Activity series predicts spontaneity**
   - Active metals displace less active
   - Active halogens oxidize less active
`,
      exampleProblems: {
        create: [
          {
            question: 'Assign oxidation states to all atoms in the following compounds: (a) KMnO₄, (b) H₂SO₄, (c) NH₄⁺, (d) Cr₂O₇²⁻',
            solution: `**Solution:**

## **(a) KMnO₄ (Potassium permanganate)**

**Apply oxidation state rules:**

**K:** Group 1 metal
- **K = +1** (rule 6)

**O:** Oxygen in compound
- **O = -2** (rule 3, no exceptions here)

**Mn:** Unknown, calculate from sum

**Sum rule for neutral compound:**

Total oxidation states = 0

**Set up equation:**

$$\\text{K} + \\text{Mn} + 4(\\text{O}) = 0$$

$$+1 + \\text{Mn} + 4(-2) = 0$$

$$+1 + \\text{Mn} - 8 = 0$$

$$\\text{Mn} - 7 = 0$$

$$\\text{Mn} = +7$$

**Answer (a):**

$$\\boxed{\\text{K} = +1, \\text{Mn} = +7, \\text{O} = -2}$$

**Verification:**
- (+1) + (+7) + 4(-2) = 1 + 7 - 8 = 0 ✓

**Note:** Mn⁺⁷ is manganese in its highest oxidation state, making MnO₄⁻ a strong oxidizing agent (purple color).

---

## **(b) H₂SO₄ (Sulfuric acid)**

**Apply rules:**

**H:** Hydrogen in compound
- **H = +1** (rule 4)

**O:** Oxygen in compound
- **O = -2** (rule 3)

**S:** Calculate from sum

**Sum = 0 (neutral molecule):**

$$2(\\text{H}) + \\text{S} + 4(\\text{O}) = 0$$

$$2(+1) + \\text{S} + 4(-2) = 0$$

$$+2 + \\text{S} - 8 = 0$$

$$\\text{S} - 6 = 0$$

$$\\text{S} = +6$$

**Answer (b):**

$$\\boxed{\\text{H} = +1, \\text{S} = +6, \\text{O} = -2}$$

**Verification:**
- 2(+1) + (+6) + 4(-2) = 2 + 6 - 8 = 0 ✓

**Note:** S⁺⁶ is sulfur in its highest common oxidation state. Concentrated H₂SO₄ is an oxidizing agent.

---

## **(c) NH₄⁺ (Ammonium ion)**

**Apply rules:**

**H:** +1 (rule 4)

**N:** Calculate

**Sum = +1 (charge on ion):**

$$\\text{N} + 4(\\text{H}) = +1$$

$$\\text{N} + 4(+1) = +1$$

$$\\text{N} + 4 = +1$$

$$\\text{N} = +1 - 4$$

$$\\text{N} = -3$$

**Answer (c):**

$$\\boxed{\\text{N} = -3, \\text{H} = +1}$$

**Verification:**
- (-3) + 4(+1) = -3 + 4 = +1 ✓

**Note:** Nitrogen in NH₄⁺ has same oxidation state as in NH₃ (-3). The positive charge comes from the extra H⁺, not from N oxidation state.

---

## **(d) Cr₂O₇²⁻ (Dichromate ion)**

**Apply rules:**

**O:** -2 (rule 3)

**Cr:** Calculate (note: 2 Cr atoms!)

**Sum = -2 (charge on ion):**

$$2(\\text{Cr}) + 7(\\text{O}) = -2$$

$$2(\\text{Cr}) + 7(-2) = -2$$

$$2(\\text{Cr}) - 14 = -2$$

$$2(\\text{Cr}) = -2 + 14$$

$$2(\\text{Cr}) = +12$$

$$\\text{Cr} = +6$$

**Answer (d):**

$$\\boxed{\\text{Cr} = +6, \\text{O} = -2}$$

**Verification:**
- 2(+6) + 7(-2) = 12 - 14 = -2 ✓

**Note:** Both Cr atoms have same oxidation state (+6). Cr₂O₇²⁻ is orange and a strong oxidizing agent.

---

## **Summary Table**

| Compound | Formula | Oxidation States | Sum Check |
|----------|---------|------------------|-----------|
| **(a)** | KMnO₄ | K: +1, Mn: +7, O: -2 | 1 + 7 + 4(-2) = 0 ✓ |
| **(b)** | H₂SO₄ | H: +1, S: +6, O: -2 | 2(+1) + 6 + 4(-2) = 0 ✓ |
| **(c)** | NH₄⁺ | N: -3, H: +1 | -3 + 4(+1) = +1 ✓ |
| **(d)** | Cr₂O₇²⁻ | Cr: +6, O: -2 | 2(+6) + 7(-2) = -2 ✓ |

---

## **Additional Insights**

### **Common oxidation states to recognize:**

**Permanganate (MnO₄⁻):**
- Mn: +7 (maximum for Mn)
- Strong oxidizer, purple
- Reduced to Mn²⁺ (pale pink) in acidic solution

**Sulfate (SO₄²⁻) and Sulfuric acid (H₂SO₄):**
- S: +6 (maximum for S)
- Concentrated H₂SO₄ is oxidizing acid

**Ammonium (NH₄⁺) and Ammonia (NH₃):**
- N: -3 (same in both)
- Low oxidation state, can be oxidized

**Dichromate (Cr₂O₇²⁻):**
- Cr: +6 (high oxidation state)
- Strong oxidizer, orange
- Reduced to Cr³⁺ (green) in acidic solution

---

## **Why these are important:**

**1. Identify oxidizing agents:**
- High oxidation states (Mn⁺⁷, Cr⁺⁶, S⁺⁶) indicate strong oxidizers
- Can accept electrons, get reduced

**2. Predict reactions:**
- KMnO₄ and Cr₂O₇²⁻ commonly used in redox titrations
- Strong enough to oxidize many organic compounds

**3. Color changes:**
- MnO₄⁻ (purple) → Mn²⁺ (pale pink/colorless)
- Cr₂O₇²⁻ (orange) → Cr³⁺ (green)
- Useful visual indicators in titrations

**4. Maximum oxidation states:**
- Mn can go up to +7
- Cr and S commonly +6
- These are in highest oxidation states, can only be reduced

---

## **Practice tip:**

**When calculating oxidation states:**
1. ✓ Start with elements that have fixed values (Group 1, 2, F, O, H)
2. ✓ Use sum rule (= 0 for compounds, = charge for ions)
3. ✓ Solve for unknown element
4. ✓ Always verify by checking sum
5. ✓ Watch for multiple atoms of same element (×2 for Cr₂, H₂, etc.)

**Common mistakes to avoid:**
- ✗ Forgetting to multiply by number of atoms
- ✗ Using wrong sum (0 vs ionic charge)
- ✗ Forgetting peroxide exception (O = -1 in H₂O₂)`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'For the reaction: Sn²⁺(aq) + 2Fe³⁺(aq) → Sn⁴⁺(aq) + 2Fe²⁺(aq), identify: (a) what is oxidized, (b) what is reduced, (c) the oxidizing agent, (d) the reducing agent. Then (e) write the balanced half-reactions.',
            solution: `**Solution:**

**Given reaction:**

$$\\ce{Sn^{2+}(aq) + 2Fe^{3+}(aq) -> Sn^{4+}(aq) + 2Fe^{2+}(aq)}$$

**Task:** Identify redox components and write half-reactions

---

## **(a) What is oxidized?**

**Oxidation = increase in oxidation state**

**Examine each species:**

**Sn²⁺ → Sn⁴⁺:**
- Oxidation state: +2 → +4
- **Increase** from +2 to +4
- Change: +2

**Fe³⁺ → Fe²⁺:**
- Oxidation state: +3 → +2
- Decrease from +3 to +2
- Change: -1

**Answer (a):**

$$\\boxed{\\text{Sn}^{2+} \\text{ is oxidized}}$$

**Explanation:**
- Sn²⁺ loses 2 electrons to become Sn⁴⁺
- Oxidation state increases: +2 → +4
- **Loss of electrons = oxidation** (OIL)

---

## **(b) What is reduced?**

**Reduction = decrease in oxidation state**

**From our analysis above:**

**Fe³⁺ → Fe²⁺:**
- Oxidation state: +3 → +2
- **Decrease** from +3 to +2

**Answer (b):**

$$\\boxed{\\text{Fe}^{3+} \\text{ is reduced}}$$

**Explanation:**
- Fe³⁺ gains 1 electron to become Fe²⁺
- Oxidation state decreases: +3 → +2
- **Gain of electrons = reduction** (RIG)
- Note: 2 Fe³⁺ ions reduced (coefficient of 2)

---

## **(c) The oxidizing agent**

**Oxidizing agent:**
- Species that causes oxidation
- Gets reduced itself
- Accepts electrons

**What gets reduced?** Fe³⁺

**Answer (c):**

$$\\boxed{\\text{Fe}^{3+} \\text{ is the oxidizing agent}}$$

**Explanation:**
- Fe³⁺ accepts electrons (gets reduced)
- By accepting electrons, it causes Sn²⁺ to lose electrons (oxidize)
- **Oxidizing agent = gets reduced**

---

## **(d) The reducing agent**

**Reducing agent:**
- Species that causes reduction
- Gets oxidized itself
- Donates electrons

**What gets oxidized?** Sn²⁺

**Answer (d):**

$$\\boxed{\\text{Sn}^{2+} \\text{ is the reducing agent}}$$

**Explanation:**
- Sn²⁺ donates electrons (gets oxidized)
- By donating electrons, it causes Fe³⁺ to gain electrons (reduce)
- **Reducing agent = gets oxidized**

---

## **(e) Balanced half-reactions**

**Half-reactions show electron transfer explicitly**

### **Oxidation half-reaction:**

**Sn²⁺ is oxidized (loses electrons)**

**Change:** Sn²⁺ → Sn⁴⁺

**Balance atoms:** Already balanced (1 Sn on each side)

**Balance charges:** 
- Left: +2
- Right: +4
- Need to add 2e⁻ to right side

**Oxidation half-reaction:**

$$\\boxed{\\ce{Sn^{2+}(aq) -> Sn^{4+}(aq) + 2e-}}$$

**Check:**
- Atoms: 1 Sn = 1 Sn ✓
- Charge: +2 = +4 + 2(-1) = +2 ✓

**Interpretation:**
- Sn²⁺ loses 2 electrons
- Electrons shown as products (lost)
- This is oxidation

---

### **Reduction half-reaction:**

**Fe³⁺ is reduced (gains electrons)**

**Change:** Fe³⁺ → Fe²⁺

**Balance atoms:** Already balanced (1 Fe on each side)

**Balance charges:**
- Left: +3
- Right: +2
- Need to add 1e⁻ to left side

**Reduction half-reaction:**

$$\\boxed{\\ce{Fe^{3+}(aq) + e- -> Fe^{2+}(aq)}}$$

**Check:**
- Atoms: 1 Fe = 1 Fe ✓
- Charge: +3 + (-1) = +2 ✓

**Interpretation:**
- Fe³⁺ gains 1 electron
- Electrons shown as reactant (gained)
- This is reduction

---

## **Verify overall reaction:**

**To reconstruct original equation from half-reactions:**

**Oxidation:** Sn²⁺ → Sn⁴⁺ + 2e⁻

**Reduction:** Fe³⁺ + e⁻ → Fe²⁺

**Equalize electrons:**
- Oxidation produces 2e⁻
- Reduction consumes 1e⁻
- Need to multiply reduction by 2:

**Oxidation (×1):** Sn²⁺ → Sn⁴⁺ + 2e⁻

**Reduction (×2):** 2Fe³⁺ + 2e⁻ → 2Fe²⁺

**Add half-reactions:**

$$\\ce{Sn^{2+} + 2Fe^{3+} + 2e- -> Sn^{4+} + 2Fe^{2+} + 2e-}$$

**Cancel electrons:**

$$\\ce{Sn^{2+} + 2Fe^{3+} -> Sn^{4+} + 2Fe^{2+}}$$

**This matches the original equation!** ✓

---

## **Summary Table**

| Question | Answer | Reasoning |
|----------|---------|-----------|
| **(a) Oxidized** | Sn²⁺ | Oxidation state: +2 → +4 (increase) |
| **(b) Reduced** | Fe³⁺ | Oxidation state: +3 → +2 (decrease) |
| **(c) Oxidizing agent** | Fe³⁺ | Gets reduced, accepts electrons |
| **(d) Reducing agent** | Sn²⁺ | Gets oxidized, donates electrons |
| **(e) Oxidation half** | Sn²⁺ → Sn⁴⁺ + 2e⁻ | Shows electron loss |
| **(e) Reduction half** | Fe³⁺ + e⁻ → Fe²⁺ | Shows electron gain |

---

## **Electron flow visualization:**

**Electron transfer:**

$$\\ce{Sn^{2+} ->[\\text{loses 2e⁻}] Sn^{4+}}$$

$$\\ce{2Fe^{3+} ->[\\text{gain 2e⁻ total}] 2Fe^{2+}}$$

**Electrons transferred:**
- Source: Sn²⁺ (2 electrons released)
- Destination: 2 Fe³⁺ (2 electrons accepted, 1 per Fe³⁺)

**Net effect:**
- 2 electrons transferred from Sn²⁺ to 2 Fe³⁺
- Sn²⁺ oxidized, Fe³⁺ reduced
- Complementary processes

---

## **Memory aids:**

**OIL RIG:**
- **O**xidation **I**s **L**oss (Sn²⁺ loses e⁻)
- **R**eduction **I**s **G**ain (Fe³⁺ gains e⁻)

**Oxidizing vs Reducing agents:**
- **Oxidizing agent** does **opposite** (gets reduced)
- **Reducing agent** does **opposite** (gets oxidized)

**Think of it as:**
- Oxidizing agent "causes" oxidation by "accepting" electrons
- Reducing agent "causes" reduction by "donating" electrons

---

## **Real-world context:**

**This reaction is an example of:**

**1. Ion-electron transfer in solution**
- Common in analytical chemistry
- Used in redox titrations

**2. Tin chemistry**
- Sn can exist as Sn²⁺ (stannous) or Sn⁴⁺ (stannic)
- Sn²⁺ is good reducing agent (readily oxidized)

**3. Iron chemistry**
- Fe commonly exists as Fe²⁺ or Fe³⁺
- Fe³⁺/Fe²⁺ couple used in many biological systems

**Applications:**
- Analytical determination of Sn²⁺ or Fe³⁺ concentrations
- Understanding corrosion (iron oxidation)
- Biological electron transport chains (similar Fe³⁺/Fe²⁺ reactions)

---

## **Practice tip:**

**To identify redox components:**

1. ✓ Assign oxidation states to all species
2. ✓ Find what increases (oxidized) and decreases (reduced)
3. ✓ Remember: oxidizing agent gets **reduced**, reducing agent gets **oxidized**
4. ✓ Write half-reactions showing explicit electron transfer
5. ✓ Verify: electrons lost = electrons gained`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Balance the following redox equation in acidic solution using the half-reaction method: MnO₄⁻(aq) + C₂O₄²⁻(aq) → Mn²⁺(aq) + CO₂(g). Show all steps clearly.',
            solution: `**Solution:**

**Given unbalanced equation:**

$$\\ce{MnO4-(aq) + C2O4^{2-}(aq) -> Mn^{2+}(aq) + CO2(g)}$$

**Condition:** Acidic solution

**Method:** Half-reaction method

---

## **Step 1: Assign oxidation states**

**Identify what's oxidized and reduced**

### **MnO₄⁻ → Mn²⁺**

**MnO₄⁻:**
- O: -2 (4 oxygen)
- Mn: ?

Sum = -1:
Mn + 4(-2) = -1
Mn = +7

**Mn²⁺:**
- Mn: +2

**Manganese change:** +7 → +2
- **Decrease** (gains 5 electrons)
- **Reduction**

### **C₂O₄²⁻ → CO₂**

**C₂O₄²⁻ (oxalate ion):**
- O: -2 (4 oxygen)
- C: ?

Sum = -2:
2(C) + 4(-2) = -2
2C = +6
C = +3

**CO₂:**
- O: -2 (2 oxygen)
- C: ?

Sum = 0:
C + 2(-2) = 0
C = +4

**Carbon change:** +3 → +4
- **Increase** (loses 1 electron per C, 2 total)
- **Oxidation**

**Summary:**
- **Reduction:** MnO₄⁻ → Mn²⁺ (Mn: +7 → +2)
- **Oxidation:** C₂O₄²⁻ → CO₂ (C: +3 → +4)

---

## **Step 2: Write two half-reactions**

**Reduction half-reaction:**

$$\\ce{MnO4- -> Mn^{2+}}$$

**Oxidation half-reaction:**

$$\\ce{C2O4^{2-} -> CO2}$$

---

## **Step 3: Balance reduction half-reaction**

$$\\ce{MnO4- -> Mn^{2+}}$$

### **Balance atoms (except H and O):**

**Mn:** 1 on left, 1 on right ✓

### **Balance oxygen:**

**Left:** 4 O in MnO₄⁻
**Right:** 0 O

**Add 4 H₂O to right:**

$$\\ce{MnO4- -> Mn^{2+} + 4H2O}$$

**Now:** 4 O on both sides ✓

### **Balance hydrogen:**

**In acidic solution: use H⁺**

**Left:** 0 H
**Right:** 8 H (in 4 H₂O)

**Add 8 H⁺ to left:**

$$\\ce{MnO4- + 8H+ -> Mn^{2+} + 4H2O}$$

**Now:** 8 H on both sides ✓

### **Balance charge:**

**Left:** -1 + 8(+1) = +7
**Right:** +2

**Add electrons to more positive side (left):**

Need to go from +7 to +2 → add 5e⁻ to left

$$\\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}$$

**Check charge:**
- Left: -1 + 8 - 5 = +2
- Right: +2 ✓

**Balanced reduction half-reaction:**

$$\\boxed{\\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}}$$

---

## **Step 4: Balance oxidation half-reaction**

$$\\ce{C2O4^{2-} -> CO2}$$

### **Balance atoms (except H and O):**

**C:** 2 on left, 1 on right

**Add coefficient 2 to CO₂:**

$$\\ce{C2O4^{2-} -> 2CO2}$$

**Now:** 2 C on both sides ✓

### **Balance oxygen:**

**Left:** 4 O
**Right:** 4 O (in 2 CO₂) ✓

**Already balanced!**

### **Balance hydrogen:**

**Left:** 0 H
**Right:** 0 H ✓

**No H to balance!**

### **Balance charge:**

**Left:** -2
**Right:** 0

**Add electrons to more positive side (right):**

Need to go from -2 to 0 → add 2e⁻ to right

$$\\ce{C2O4^{2-} -> 2CO2 + 2e-}$$

**Check charge:**
- Left: -2
- Right: 0 - 2 = -2 ✓

**Balanced oxidation half-reaction:**

$$\\boxed{\\ce{C2O4^{2-} -> 2CO2 + 2e-}}$$

---

## **Step 5: Equalize electrons**

**Reduction:** 5e⁻ consumed
**Oxidation:** 2e⁻ produced

**Find LCM of 5 and 2:** LCM = 10

**Multiply reduction by 2:**

$$\\ce{2MnO4- + 16H+ + 10e- -> 2Mn^{2+} + 8H2O}$$

**Multiply oxidation by 5:**

$$\\ce{5C2O4^{2-} -> 10CO2 + 10e-}$$

**Now both involve 10 electrons** ✓

---

## **Step 6: Add half-reactions**

**Reduction (×2):**
$$\\ce{2MnO4- + 16H+ + 10e- -> 2Mn^{2+} + 8H2O}$$

**Oxidation (×5):**
$$\\ce{5C2O4^{2-} -> 10CO2 + 10e-}$$

**Add them:**

$$\\ce{2MnO4- + 16H+ + 10e- + 5C2O4^{2-} -> 2Mn^{2+} + 8H2O + 10CO2 + 10e-}$$

**Cancel 10e⁻ from both sides:**

$$\\boxed{\\ce{2MnO4- + 16H+ + 5C2O4^{2-} -> 2Mn^{2+} + 8H2O + 10CO2}}$$

---

## **Step 7: Verify the balanced equation**

### **Check atoms:**

**Manganese:**
- Left: 2 (in 2 MnO₄⁻)
- Right: 2 (in 2 Mn²⁺) ✓

**Carbon:**
- Left: 10 (in 5 C₂O₄²⁻, each has 2 C)
- Right: 10 (in 10 CO₂) ✓

**Oxygen:**
- Left: 8 (in 2 MnO₄⁻) + 20 (in 5 C₂O₄²⁻) = 28
- Right: 8 (in 8 H₂O) + 20 (in 10 CO₂) = 28 ✓

**Hydrogen:**
- Left: 16 (in 16 H⁺)
- Right: 16 (in 8 H₂O) ✓

**All atoms balanced!** ✓

### **Check charge:**

**Left side:**
- 2 MnO₄⁻: 2(-1) = -2
- 16 H⁺: 16(+1) = +16
- 5 C₂O₄²⁻: 5(-2) = -10
- **Total:** -2 + 16 - 10 = **+4**

**Right side:**
- 2 Mn²⁺: 2(+2) = +4
- 8 H₂O: 0
- 10 CO₂: 0
- **Total:** **+4**

**Charges balanced!** ✓

---

## **Final Answer:**

$$\\boxed{\\ce{2MnO4-(aq) + 16H+(aq) + 5C2O4^{2-}(aq) -> 2Mn^{2+}(aq) + 8H2O(l) + 10CO2(g)}}$$

---

## **Summary of the reaction:**

**What happens:**
- **MnO₄⁻** (purple) reduced to **Mn²⁺** (pale pink/colorless)
- **C₂O₄²⁻** (oxalate) oxidized to **CO₂** (gas)

**Observations:**
- Purple color fades (MnO₄⁻ consumed)
- Bubbles form (CO₂ gas produced)
- Solution becomes colorless or pale pink

**Electron transfer:**
- Each MnO₄⁻ gains 5e⁻
- Each C₂O₄²⁻ loses 2e⁻
- Need 2 MnO₄⁻ and 5 C₂O₄²⁻ for electron balance

---

## **Step-by-step summary:**

| Step | Action | Result |
|------|--------|--------|
| 1 | Assign oxidation states | Mn: +7→+2 (reduced), C: +3→+4 (oxidized) |
| 2 | Write half-reactions | MnO₄⁻ → Mn²⁺, C₂O₄²⁻ → CO₂ |
| 3 | Balance reduction half | MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O |
| 4 | Balance oxidation half | C₂O₄²⁻ → 2CO₂ + 2e⁻ |
| 5 | Equalize electrons | ×2 and ×5 to get 10e⁻ each |
| 6 | Add and cancel e⁻ | 2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 8H₂O + 10CO₂ |
| 7 | Verify | Atoms and charges balanced ✓ |

---

## **Applications:**

**This reaction is used in:**

**1. Analytical chemistry:**
- Redox titration to determine oxalate concentration
- MnO₄⁻ is self-indicating (purple → colorless at endpoint)
- Standard method for analyzing calcium oxalate

**2. Quantitative analysis:**
- Can determine C₂O₄²⁻ by titrating with standard KMnO₄
- Can determine Ca²⁺ by precipitating as CaC₂O₄, then titrating

**3. Teaching tool:**
- Classic example of complex redox balancing
- Shows importance of half-reaction method
- Demonstrates color change in redox reactions

---

## **Key insights:**

**Why this method works:**
1. **Separates complex reaction** into manageable parts
2. **Balances atoms systematically** (metals, O with H₂O, H with H⁺)
3. **Balances charge with electrons** explicitly
4. **Equalizes electron transfer** ensures conservation
5. **Combines half-reactions** gives complete balanced equation

**Common student mistakes to avoid:**
- ✗ Forgetting to multiply coefficients when equalizing electrons
- ✗ Not checking final atom and charge balance
- ✗ Adding electrons to wrong side
- ✗ Forgetting to balance oxygen before hydrogen

**This is a challenging problem that demonstrates:**
- Complete half-reaction method
- Multi-step balancing procedure
- Verification importance
- Real-world application in analytical chemistry`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', redoxTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: redoxTopic.id,
        front: 'What are oxidation and reduction? What is the OIL RIG mnemonic?',
        back: 'Oxidation: loss of electrons (increase in oxidation state). Reduction: gain of electrons (decrease in oxidation state). OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons.'
      },
      {
        topicId: redoxTopic.id,
        front: 'What are the key rules for assigning oxidation states?',
        back: 'Free elements = 0. Monatomic ions = charge. O usually -2 (except peroxides -1). H usually +1 (except metal hydrides -1). F always -1. Group 1 = +1, Group 2 = +2. Sum = 0 (molecule) or charge (ion).'
      },
      {
        topicId: redoxTopic.id,
        front: 'What are oxidizing and reducing agents, and what happens to them?',
        back: 'Oxidizing agent: causes oxidation, gets reduced itself (gains electrons). Reducing agent: causes reduction, gets oxidized itself (loses electrons). They do opposite of their name!'
      },
      {
        topicId: redoxTopic.id,
        front: 'What are the steps in the half-reaction method for balancing redox equations?',
        back: '1) Assign oxidation states, 2) Write half-reactions, 3) Balance atoms (except H,O), 4) Balance O with H₂O, 5) Balance H with H⁺ (acidic), 6) Balance charge with e⁻, 7) Equalize electrons, 8) Add and cancel.'
      },
      {
        topicId: redoxTopic.id,
        front: 'How do you balance a redox equation in acidic solution? What species do you add?',
        back: 'Balance atoms except H and O. Add H₂O to balance O. Add H⁺ to balance H. Add electrons to balance charge. Equalize electrons between half-reactions, then add and cancel.'
      },
      {
        topicId: redoxTopic.id,
        front: 'How do you convert a balanced redox equation from acidic to basic solution?',
        back: 'Balance in acidic first (using H⁺). Add OH⁻ to both sides to neutralize all H⁺. Combine H⁺ + OH⁻ → H₂O. Cancel water molecules that appear on both sides.'
      },
      {
        topicId: redoxTopic.id,
        front: 'What are common strong oxidizing agents and strong reducing agents?',
        back: 'Strong oxidizing: MnO₄⁻, Cr₂O₇²⁻, H₂O₂, O₂, halogens (F₂ > Cl₂ > Br₂ > I₂). Strong reducing: active metals (Li, K, Na, Ca, Mg), H₂, C, Sn²⁺, Fe²⁺.'
      },
      {
        topicId: redoxTopic.id,
        front: 'How does the activity series predict spontaneous redox reactions?',
        back: 'More active metals displace less active metals from compounds. Metal can reduce ions of any metal below it. Li > K > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Ag > Au.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', redoxTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Chemical Reactions (Part 4)!');
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
