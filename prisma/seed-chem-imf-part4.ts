import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Intermolecular Forces and Properties (Part 4)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Intermolecular Forces category
  const imfCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Intermolecular Forces and Properties'
    }
  });

  if (!imfCategory) {
    throw new Error('Intermolecular Forces and Properties category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: imfCategory.id }
  });

  // Topic 4: Ideal Gas Law
  const gasLawTopic = await prisma.topic.create({
    data: {
      title: 'Ideal Gas Law and Gas Properties',
      slug: 'ideal-gas-law',
      description: 'Master the ideal gas law, gas law calculations, partial pressures, kinetic molecular theory, and real gas behavior.',
      order: existingTopics + 1,
      categoryId: imfCategory.id,
      isPremium: false,
      textContent: `
# Ideal Gas Law and Gas Properties

## The Ideal Gas Law

**The most important equation in gas chemistry:**

$$PV = nRT$$

Where:
- $P$ = pressure (usually atm, but can be kPa, mmHg, torr)
- $V$ = volume (usually L)
- $n$ = number of moles
- $R$ = ideal gas constant
- $T$ = temperature (**must be in Kelvin!**)

### Gas Constant (R) Values

**Most common:**

$$R = 0.0821 \\frac{\\text{L·atm}}{\\text{mol·K}}$$

**Other values (less common):**

$$R = 8.314 \\frac{\\text{J}}{\\text{mol·K}} = 8.314 \\frac{\\text{kPa·L}}{\\text{mol·K}}$$

$$R = 62.4 \\frac{\\text{L·mmHg}}{\\text{mol·K}}$$

**Choose R based on units of pressure and volume!**

### Standard Temperature and Pressure (STP)

**Definition:**
- **Temperature:** 0°C = 273.15 K
- **Pressure:** 1 atm = 101.3 kPa = 760 mmHg = 760 torr

**At STP, one mole of any ideal gas occupies:**

$$V = 22.4 \\text{ L}$$

**This is a useful conversion factor!**

### Using PV = nRT

**The ideal gas law connects all four variables**

**If you know any 3, you can find the 4th:**

**Example problems:**
1. Know P, V, T → find n (moles)
2. Know n, T, P → find V (volume)
3. Know n, V, P → find T (temperature)
4. Know n, V, T → find P (pressure)

**Key conversions:**
- Temperature: °C + 273.15 = K
- Pressure: 1 atm = 760 mmHg = 101.3 kPa
- Volume: Usually given in L (if not, convert!)

## Gas Density and Molar Mass

**Density of a gas can be related to molar mass**

**Starting with PV = nRT:**

$$n = \\frac{m}{M}$$

Where:
- $m$ = mass (g)
- $M$ = molar mass (g/mol)

**Substitute into ideal gas law:**

$$PV = \\frac{m}{M}RT$$

**Rearrange for density:**

$$\\frac{m}{V} = \\frac{PM}{RT}$$

$$d = \\frac{PM}{RT}$$

**Key relationships:**
- **Higher molar mass → Higher density** (at same T and P)
- **Higher temperature → Lower density** (at same P and M)
- **Higher pressure → Higher density** (at same T and M)

**Why this is useful:**
- Calculate molar mass from density measurements
- Predict relative densities of different gases
- Explain why hot air rises (lower density)

## Combined Gas Law

**When amount of gas (n) is constant:**

$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$$

**This combines:**
- Boyle's Law: $P_1V_1 = P_2V_2$ (constant T and n)
- Charles's Law: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ (constant P and n)
- Gay-Lussac's Law: $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ (constant V and n)

**Use when:**
- Gas undergoes change in conditions
- Amount of gas stays the same
- Need to find final state from initial state

**Special cases:**

**Constant temperature (isothermal):**

$$P_1V_1 = P_2V_2$$ (Boyle's Law)

**Constant pressure (isobaric):**

$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$ (Charles's Law)

**Constant volume (isochoric):**

$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$ (Gay-Lussac's Law)

## Dalton's Law of Partial Pressures

**In a mixture of gases, each gas exerts pressure independently**

**Total pressure = Sum of partial pressures:**

$$P_{total} = P_1 + P_2 + P_3 + ...$$

**For each gas in the mixture:**

$$P_i = \\chi_i \\cdot P_{total}$$

Where:
- $P_i$ = partial pressure of gas i
- $\\chi_i$ = mole fraction of gas i
- $P_{total}$ = total pressure

**Mole fraction:**

$$\\chi_i = \\frac{n_i}{n_{total}}$$

**Key concept:** Each gas behaves as if it alone occupies the entire volume

### Application: Collecting Gas Over Water

**Common lab technique:**
- Gas produced in reaction bubbles through water
- Collected gas is mixture of desired gas + water vapor

**Pressure relationship:**

$$P_{total} = P_{gas} + P_{H_2O}$$

Where:
- $P_{total}$ = atmospheric pressure
- $P_{gas}$ = partial pressure of collected gas
- $P_{H_2O}$ = vapor pressure of water (depends on temperature)

**To find amount of dry gas:**

$$P_{gas} = P_{total} - P_{H_2O}$$

**Then use ideal gas law with $P_{gas}$:**

$$n_{gas} = \\frac{P_{gas}V}{RT}$$

**Water vapor pressure at common temperatures:**

| Temp (°C) | P(H₂O) mmHg |
|-----------|-------------|
| 20 | 17.5 |
| 25 | 23.8 |
| 30 | 31.8 |
| 35 | 42.2 |

## Kinetic Molecular Theory (KMT)

**Model explaining ideal gas behavior**

### Five Postulates

**1. Gas particles are in constant, random motion**
- Particles move in straight lines until collision
- Collisions are perfectly elastic (no energy lost)

**2. Gas particles have negligible volume**
- Volume of particles << volume of container
- Most of gas volume is empty space

**3. No attractive or repulsive forces between particles**
- Particles don't interact except during collisions
- Move independently

**4. Average kinetic energy proportional to absolute temperature**

$$KE_{avg} = \\frac{3}{2}RT$$

**Or for a single molecule:**

$$KE = \\frac{1}{2}mv^2 = \\frac{3}{2}k_BT$$

Where:
- $m$ = mass of particle
- $v$ = velocity
- $k_B$ = Boltzmann constant = $R/N_A$

**Higher temperature → Higher average KE → Faster particles**

**5. Collisions are perfectly elastic**
- Total kinetic energy conserved
- Energy transferred between particles
- No energy lost to heat, sound, etc.

### Implications of KMT

**Temperature and KE:**
- At same T, all gases have same average KE
- Lighter gases move faster (same KE, less mass)

**Root-mean-square speed:**

$$v_{rms} = \\sqrt{\\frac{3RT}{M}}$$

Where:
- $R$ = 8.314 J/(mol·K)
- $T$ = temperature (K)
- $M$ = molar mass (kg/mol)

**Relationships:**
- $v_{rms} \\propto \\sqrt{T}$ (higher T → faster)
- $v_{rms} \\propto \\frac{1}{\\sqrt{M}}$ (lighter → faster)

**At same temperature:**
- He atoms move faster than O₂ molecules
- All have same average KE

### Maxwell-Boltzmann Distribution

**Not all particles have same speed!**

**Distribution of molecular speeds:**
- Some particles very slow
- Most particles near average
- Some particles very fast
- Shape depends on temperature and molar mass

**Effects of temperature:**
- Higher T → distribution shifts right (faster average)
- Higher T → distribution broadens (wider range)
- Peak becomes lower and flatter

**Effects of molar mass:**
- Lower M → distribution shifts right (faster)
- Lower M → distribution broadens

## Effusion and Diffusion

### Graham's Law of Effusion

**Effusion:** Gas escapes through tiny hole into vacuum

**Rate of effusion inversely proportional to square root of molar mass:**

$$\\frac{\\text{rate}_1}{\\text{rate}_2} = \\sqrt{\\frac{M_2}{M_1}}$$

**Lighter gases effuse faster**

**Example:** He effuses faster than N₂

$$\\frac{\\text{rate}_{He}}{\\text{rate}_{N_2}} = \\sqrt{\\frac{28}{4}} = \\sqrt{7} \\approx 2.65$$

**Helium effuses 2.65 times faster than nitrogen**

### Diffusion

**Diffusion:** Gas spreads through space or through another gas

**Also follows Graham's Law (approximately):**
- Lighter gases diffuse faster
- Same mathematical relationship

**Example:** Smell of perfume spreading across room

**Why faster with lighter gases?**
- Lighter → higher average velocity (from KMT)
- Higher velocity → spreads faster

## Real Gases vs. Ideal Gases

### When Do Real Gases Deviate from Ideal Behavior?

**Ideal gas law assumes:**
1. No volume (particles are points)
2. No intermolecular forces

**Real gases deviate when:**

**1. High pressure**
- Gas particles forced close together
- Volume of particles becomes significant
- $V_{real} > V_{ideal}$

**2. Low temperature**
- Particles move slowly
- IMFs have more effect
- Particles attracted to each other
- $P_{real} < P_{ideal}$

**General rule:**

**Real gases behave most ideally at:**
- **Low pressure** (particles far apart)
- **High temperature** (high KE overcomes IMFs)

**Real gases deviate most at:**
- **High pressure** (particles close)
- **Low temperature** (IMFs significant)

### Van der Waals Equation

**Correction to ideal gas law for real gases:**

$$\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$$

**Pressure correction:** $\\frac{an^2}{V^2}$
- Accounts for attractive forces
- Reduces effective pressure
- $a$ = strength of IMFs (larger for polar molecules)

**Volume correction:** $nb$
- Accounts for volume of particles
- Reduces available volume
- $b$ = size of particles (larger for bigger molecules)

**Constants a and b:**
- Specific to each gas
- Larger a → stronger IMFs
- Larger b → larger molecules

**When van der Waals ≈ Ideal:**
- Low pressure (correction terms become small)
- High temperature (KE >> IMFs)

## Gas Stoichiometry

**Using ideal gas law in chemical reactions**

### Mole Relationships

**For reactions involving gases:**

$$\\ce{aA(g) + bB(g) -> cC(g) + dD(g)}$$

**Mole ratios from balanced equation:**
- At same T and P, volume ratios = mole ratios
- This is **Avogadro's Law**

**Example:**

$$\\ce{2H2(g) + O2(g) -> 2H2O(g)}$$

**At same T and P:**
- 2 volumes H₂ + 1 volume O₂ → 2 volumes H₂O
- 2 moles H₂ + 1 mole O₂ → 2 moles H₂O

### Problem-Solving Strategy

**Given:** Conditions of gas (P, V, T) and reaction

**Steps:**
1. **Use PV = nRT** to find moles of given gas
2. **Use stoichiometry** (mole ratios) to find moles of desired gas
3. **Use PV = nRT** to find conditions of desired gas

**Or use directly:**

$$\\frac{P_1V_1}{n_1T_1} = \\frac{P_2V_2}{n_2T_2}$$

With $\\frac{n_1}{n_2}$ from stoichiometry

## Summary of Gas Laws

| Law | Equation | Constant | Relationship |
|-----|----------|----------|--------------|
| Boyle's | $P_1V_1 = P_2V_2$ | T, n | Inverse (P↑V↓) |
| Charles's | $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ | P, n | Direct (T↑V↑) |
| Gay-Lussac's | $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ | V, n | Direct (T↑P↑) |
| Avogadro's | $\\frac{V_1}{n_1} = \\frac{V_2}{n_2}$ | P, T | Direct (n↑V↑) |
| Combined | $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$ | n | - |
| Ideal | $PV = nRT$ | - | All variables |
| Dalton's | $P_T = P_1 + P_2 + ...$ | - | Partial pressures |
| Graham's | $\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$ | - | Effusion rate |

## Key Problem-Solving Tips

**Always convert:**
- Temperature to **Kelvin** (K = °C + 273.15)
- Pressure to match R (usually atm)
- Volume to match R (usually L)

**Choose correct R:**
- Match units to pressure and volume
- Most common: 0.0821 L·atm/(mol·K)

**Partial pressures:**
- Use mole fractions
- Account for water vapor when collecting gas

**Real vs ideal:**
- Real gases → use at low P, high T
- Deviations at high P, low T

**Gas stoiometry:**
- Convert to moles first
- Use mole ratios
- Convert back to gas conditions
`,
      exampleProblems: {
        create: [
          {
            question: 'A sample of nitrogen gas occupies 5.00 L at 25°C and 1.50 atm. How many moles of nitrogen are present?',
            solution: `**Solution:**

**Given:**
- Volume (V) = 5.00 L
- Temperature (T) = 25°C
- Pressure (P) = 1.50 atm

**Find:** Number of moles (n)

**Step 1: Convert temperature to Kelvin**

$$T(K) = T(°C) + 273.15$$

$$T = 25 + 273.15 = 298.15 \\text{ K}$$

**Can round to 298 K for calculations**

**Step 2: Identify the appropriate gas constant**

**Units we have:**
- P in atm ✓
- V in L ✓
- T in K ✓

**Use:** $R = 0.0821 \\frac{\\text{L·atm}}{\\text{mol·K}}$

**Step 3: Apply ideal gas law**

$$PV = nRT$$

**Solve for n:**

$$n = \\frac{PV}{RT}$$

**Step 4: Substitute values**

$$n = \\frac{(1.50 \\text{ atm})(5.00 \\text{ L})}{(0.0821 \\frac{\\text{L·atm}}{\\text{mol·K}})(298 \\text{ K})}$$

$$n = \\frac{7.50}{24.5}$$

$$n = 0.306 \\text{ mol}$$

**Answer:**

$$\\boxed{n = 0.306 \\text{ mol N}_2}$$

**Or:** $\\boxed{0.31 \\text{ mol}}$ (2 sig figs)

**Check reasonableness:**

**At STP (1 atm, 273 K):**
- 1 mole occupies 22.4 L
- Our conditions: Higher P (1.50 atm) and higher T (298 K)

**Higher P → compressed → less volume per mole**
**Higher T → expanded → more volume per mole**

**Net effect:** Roughly 0.3 mol in 5 L seems reasonable

**Alternative check using proportions:**

At STP: 1 mol in 22.4 L

Our gas: $\\frac{5.00 \\text{ L}}{22.4 \\text{ L/mol}} \\approx 0.22$ mol at STP

But P is 1.5× higher → compress → more moles fit
And T is ~1.09× higher → expand → fewer moles fit

Net: $0.22 \\times 1.5 / 1.09 \\approx 0.30$ mol ✓

**Units check:**

$$\\frac{\\text{atm} \\cdot \\text{L}}{\\frac{\\text{L·atm}}{\\text{mol·K}} \\cdot \\text{K}} = \\frac{\\text{atm} \\cdot \\text{L} \\cdot \\text{mol·K}}{\\text{L·atm} \\cdot \\text{K}} = \\text{mol}$$ ✓

**Key concepts:**
1. Always convert temperature to Kelvin
2. Match R units to given units
3. Use PV = nRT when relating P, V, T, and n
4. Check reasonableness against STP values`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A mixture of gases contains 2.00 mol He, 3.00 mol Ne, and 5.00 mol Ar at a total pressure of 800 mmHg. Calculate: (a) the mole fraction of each gas, (b) the partial pressure of each gas.',
            solution: `**Solution:**

**Given:**
- $n_{He}$ = 2.00 mol
- $n_{Ne}$ = 3.00 mol
- $n_{Ar}$ = 5.00 mol
- $P_{total}$ = 800 mmHg

**Find:** (a) Mole fractions, (b) Partial pressures

---

**Part (a): Calculate mole fractions**

**Step 1: Find total moles**

$$n_{total} = n_{He} + n_{Ne} + n_{Ar}$$

$$n_{total} = 2.00 + 3.00 + 5.00 = 10.00 \\text{ mol}$$

**Step 2: Calculate mole fraction of each gas**

**Mole fraction formula:**

$$\\chi_i = \\frac{n_i}{n_{total}}$$

**For helium:**

$$\\chi_{He} = \\frac{2.00 \\text{ mol}}{10.00 \\text{ mol}} = 0.200$$

**For neon:**

$$\\chi_{Ne} = \\frac{3.00 \\text{ mol}}{10.00 \\text{ mol}} = 0.300$$

**For argon:**

$$\\chi_{Ar} = \\frac{5.00 \\text{ mol}}{10.00 \\text{ mol}} = 0.500$$

**Check:** Sum of mole fractions should equal 1

$$\\chi_{He} + \\chi_{Ne} + \\chi_{Ar} = 0.200 + 0.300 + 0.500 = 1.000$$ ✓

**Answer (a):**

$$\\boxed{\\chi_{He} = 0.200, \\quad \\chi_{Ne} = 0.300, \\quad \\chi_{Ar} = 0.500}$$

---

**Part (b): Calculate partial pressures**

**Step 3: Use Dalton's Law of Partial Pressures**

**Relationship between mole fraction and partial pressure:**

$$P_i = \\chi_i \\cdot P_{total}$$

**For helium:**

$$P_{He} = \\chi_{He} \\cdot P_{total}$$

$$P_{He} = (0.200)(800 \\text{ mmHg})$$

$$P_{He} = 160 \\text{ mmHg}$$

**For neon:**

$$P_{Ne} = \\chi_{Ne} \\cdot P_{total}$$

$$P_{Ne} = (0.300)(800 \\text{ mmHg})$$

$$P_{Ne} = 240 \\text{ mmHg}$$

**For argon:**

$$P_{Ar} = \\chi_{Ar} \\cdot P_{total}$$

$$P_{Ar} = (0.500)(800 \\text{ mmHg})$$

$$P_{Ar} = 400 \\text{ mmHg}$$

**Check:** Sum of partial pressures should equal total pressure

$$P_{total} = P_{He} + P_{Ne} + P_{Ar}$$

$$P_{total} = 160 + 240 + 400 = 800 \\text{ mmHg}$$ ✓

**Answer (b):**

$$\\boxed{P_{He} = 160 \\text{ mmHg}, \\quad P_{Ne} = 240 \\text{ mmHg}, \\quad P_{Ar} = 400 \\text{ mmHg}}$$

---

**Summary Table:**

| Gas | Moles | Mole Fraction | Partial Pressure |
|-----|-------|---------------|------------------|
| He | 2.00 mol | 0.200 (20%) | 160 mmHg |
| Ne | 3.00 mol | 0.300 (30%) | 240 mmHg |
| Ar | 5.00 mol | 0.500 (50%) | 400 mmHg |
| **Total** | **10.00 mol** | **1.000** | **800 mmHg** |

**Key insights:**

1. **Mole fraction = fraction of total moles**
   - Dimensionless (no units)
   - Always between 0 and 1
   - Sum = 1.000

2. **Partial pressure proportional to mole fraction**
   - Gas with most moles → highest partial pressure
   - Ar has 50% of moles → 50% of pressure

3. **Each gas behaves independently** (Dalton's Law)
   - He exerts 160 mmHg as if alone in container
   - Ne exerts 240 mmHg as if alone in container
   - Ar exerts 400 mmHg as if alone in container
   - Total = sum of all partial pressures

**Conceptual understanding:**

**Why does this work?**

From ideal gas law for each gas:

$$P_i = \\frac{n_iRT}{V}$$

Total pressure:

$$P_{total} = \\frac{n_{total}RT}{V}$$

Ratio:

$$\\frac{P_i}{P_{total}} = \\frac{n_i}{n_{total}} = \\chi_i$$

Therefore: $P_i = \\chi_i \\cdot P_{total}$

**This is Dalton's Law!**`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Hydrogen gas is collected over water at 25°C and 745 mmHg atmospheric pressure. The volume of gas collected is 250.0 mL. The vapor pressure of water at 25°C is 23.8 mmHg. (a) What is the partial pressure of the dry hydrogen gas? (b) How many moles of H₂ were collected? (c) What mass of H₂ was collected?',
            solution: `**Solution:**

**Given:**
- Temperature = 25°C
- Total pressure (atmospheric) = 745 mmHg
- Volume collected = 250.0 mL
- Vapor pressure of H₂O at 25°C = 23.8 mmHg

**Find:** (a) Partial pressure of H₂, (b) Moles of H₂, (c) Mass of H₂

---

**Part (a): Partial pressure of dry H₂**

**Step 1: Understand the situation**

**Gas collected over water contains:**
- H₂ gas (what we want)
- H₂O vapor (from evaporation)

**Total pressure = sum of partial pressures (Dalton's Law):**

$$P_{total} = P_{H_2} + P_{H_2O}$$

**Step 2: Solve for partial pressure of H₂**

$$P_{H_2} = P_{total} - P_{H_2O}$$

$$P_{H_2} = 745 \\text{ mmHg} - 23.8 \\text{ mmHg}$$

$$P_{H_2} = 721.2 \\text{ mmHg}$$

**Answer (a):**

$$\\boxed{P_{H_2} = 721.2 \\text{ mmHg} = 721 \\text{ mmHg}}$$

**This is the pressure of the DRY hydrogen gas**

---

**Part (b): Moles of H₂**

**Step 3: Convert units for ideal gas law**

**Temperature:**

$$T = 25°C + 273.15 = 298.15 \\text{ K} \\approx 298 \\text{ K}$$

**Pressure:** Convert mmHg to atm

$$P_{H_2} = 721.2 \\text{ mmHg} \\times \\frac{1 \\text{ atm}}{760 \\text{ mmHg}}$$

$$P_{H_2} = 0.9489 \\text{ atm}$$

**Volume:** Convert mL to L

$$V = 250.0 \\text{ mL} \\times \\frac{1 \\text{ L}}{1000 \\text{ mL}} = 0.2500 \\text{ L}$$

**Step 4: Apply ideal gas law**

$$PV = nRT$$

$$n = \\frac{PV}{RT}$$

**Use:** $R = 0.0821 \\frac{\\text{L·atm}}{\\text{mol·K}}$

**Step 5: Calculate moles**

$$n_{H_2} = \\frac{(0.9489 \\text{ atm})(0.2500 \\text{ L})}{(0.0821 \\frac{\\text{L·atm}}{\\text{mol·K}})(298 \\text{ K})}$$

$$n_{H_2} = \\frac{0.2372}{24.46}$$

$$n_{H_2} = 0.00970 \\text{ mol}$$

**Answer (b):**

$$\\boxed{n_{H_2} = 0.00970 \\text{ mol} = 9.70 \\times 10^{-3} \\text{ mol}}$$

**Or:** $\\boxed{0.0097 \\text{ mol}}$ (2 sig figs)

---

**Part (c): Mass of H₂**

**Step 6: Convert moles to mass**

**Molar mass of H₂:**

$$M_{H_2} = 2 \\times 1.008 = 2.016 \\text{ g/mol}$$

**Mass formula:**

$$m = n \\times M$$

$$m_{H_2} = (0.00970 \\text{ mol})(2.016 \\text{ g/mol})$$

$$m_{H_2} = 0.0196 \\text{ g}$$

$$m_{H_2} = 19.6 \\text{ mg}$$

**Answer (c):**

$$\\boxed{m_{H_2} = 0.0196 \\text{ g} = 19.6 \\text{ mg}}$$

**Or:** $\\boxed{0.020 \\text{ g}}$ (2 sig figs)

---

**Summary of Results:**

| Quantity | Value |
|----------|-------|
| (a) Partial pressure H₂ | 721 mmHg (0.949 atm) |
| (b) Moles H₂ | 0.00970 mol |
| (c) Mass H₂ | 0.0196 g (19.6 mg) |

---

**Key Concepts and Explanations:**

**1. Why subtract water vapor pressure?**

When collecting gas over water:
- Water evaporates into collection container
- Total pressure includes both H₂ and H₂O vapor
- Must subtract P(H₂O) to get P(dry gas)

**Diagram of setup:**
- Gas bubbles through water
- Collected in inverted tube over water
- Total P = P(H₂) + P(H₂O vapor)

**2. Water vapor pressure depends on temperature**

| Temperature | P(H₂O) |
|-------------|--------|
| 20°C | 17.5 mmHg |
| 25°C | 23.8 mmHg |
| 30°C | 31.8 mmHg |

**Higher temperature → more evaporation → higher vapor pressure**

**3. Why use P(H₂) not P(total) in ideal gas law?**

**Ideal gas law for H₂ only:**

$$P_{H_2}V = n_{H_2}RT$$

**If we used P(total):**
- Would calculate moles of (H₂ + H₂O)
- Wrong answer!

**Must use partial pressure of H₂ alone**

**4. Common mistakes to avoid:**

❌ Using P(total) instead of P(H₂)
❌ Forgetting to convert °C to K
❌ Forgetting to convert mL to L
❌ Using wrong vapor pressure for temperature

**5. Check reasonableness:**

**At STP:** 1 mol H₂ = 22.4 L

**Our conditions:** ~0.01 mol in 0.25 L

**Expected:** $\\frac{0.01 \\text{ mol}}{0.25 \\text{ L}} = 0.04$ mol/L

**At STP:** $\\frac{1 \\text{ mol}}{22.4 \\text{ L}} = 0.045$ mol/L

**Close! ✓** (Our P slightly lower, T slightly higher than STP)

**Mass check:**
- 0.01 mol × 2 g/mol = 0.02 g
- Our answer: 0.0196 g ✓

**Everything checks out!**

**Application:** This is how chemists measure amount of gas produced in reactions (like H₂ from metal + acid).`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', gasLawTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: gasLawTopic.id,
        front: 'What is the ideal gas law equation and what does each variable represent?',
        back: 'PV = nRT. P = pressure (atm), V = volume (L), n = moles, R = 0.0821 L·atm/(mol·K), T = temperature (MUST be Kelvin). At STP, 1 mole = 22.4 L.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'What is Dalton\'s Law of Partial Pressures?',
        back: 'P(total) = P₁ + P₂ + P₃ + ... Each gas in a mixture exerts pressure independently. Partial pressure: Pᵢ = χᵢ·P(total) where χᵢ = mole fraction.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'What are the key postulates of Kinetic Molecular Theory?',
        back: '1) Constant random motion, 2) Negligible particle volume, 3) No IMFs between particles, 4) Average KE ∝ T, 5) Elastic collisions. Explains ideal gas behavior.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'What is Graham\'s Law of Effusion?',
        back: 'rate₁/rate₂ = √(M₂/M₁). Lighter gases effuse (escape through tiny hole) faster. Rate is inversely proportional to square root of molar mass.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'When do real gases deviate most from ideal behavior?',
        back: 'HIGH PRESSURE (particles close, volume matters) and LOW TEMPERATURE (slow particles, IMFs matter). Behave most ideally at low P and high T.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'How do you calculate moles of gas collected over water?',
        back: 'P(gas) = P(total) - P(H₂O vapor). Subtract water vapor pressure from atmospheric pressure, then use PV = nRT with P(gas). Vapor pressure depends on temperature.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'What is the relationship between gas density and molar mass?',
        back: 'd = PM/RT. Higher molar mass → higher density (at same T, P). Higher T → lower density. Higher P → higher density. Use to find unknown molar masses.'
      },
      {
        topicId: gasLawTopic.id,
        front: 'What does KMT say about temperature and molecular speed?',
        back: 'Average KE = (3/2)RT. At same T, all gases have same average KE. v(rms) = √(3RT/M). Lighter gases move faster at same temperature (H₂ faster than O₂).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', gasLawTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Intermolecular Forces and Properties (Part 4)!');
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
