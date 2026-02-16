import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Biology topics...')

  // Topic 1: Water Properties
  const waterTopic = await prisma.topic.findUnique({
    where: { slug: 'water-properties' }
  })

  if (waterTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: waterTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Explain why ice floats on water and describe the biological significance of this property for aquatic ecosystems during winter.',
          solution: `**Why Ice Floats:**

Water has maximum density at 4°C. When water freezes at 0°C, it forms a crystalline structure with hydrogen bonds holding molecules in fixed positions, creating more space between molecules.

**Key Points:**
- Ice has lower density (0.92 g/cm³) than liquid water (1.0 g/cm³)
- Hydrogen bonds in ice create hexagonal lattice structure
- This structure is less dense than liquid water's arrangement

**Biological Significance:**

1. **Insulation:** Ice layer on top insulates water below, keeping it liquid
2. **Habitat preservation:** Aquatic organisms can survive in liquid water under ice
3. **Temperature moderation:** Water below ice stays near 4°C (maximum density)
4. **Prevents complete freezing:** Lakes freeze from top down, not bottom up

**Ecological Impact:**

Without this property, lakes and ponds would freeze solid from the bottom up, killing most aquatic life. The ice layer acts as an insulating blanket, allowing fish, plants, and other organisms to survive winter in the liquid water below.

$$\\boxed{\\text{Ice floats because hydrogen bonding creates a less dense crystalline structure}}$$`
        },
        {
          topicId: waterTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A plant cell is placed in a hypotonic solution. Using your knowledge of water\'s properties, explain: (a) what happens to the cell, (b) why water moves into the cell, and (c) what prevents the cell from bursting.',
          solution: `**Given:** Plant cell in hypotonic solution (lower solute concentration outside)

**(a) What happens to the cell:**

Water moves **into** the cell by osmosis. The cell swells and becomes **turgid** (firm).

**(b) Why water moves into the cell:**

**Osmosis:** Water moves from high water concentration (low solute) to low water concentration (high solute) across a selectively permeable membrane.

- Outside: hypotonic (more water molecules, fewer solutes)
- Inside: hypertonic relative to outside (less water, more solutes)
- Water potential: $\\Psi_{outside} > \\Psi_{inside}$

Water moves down its concentration gradient into the cell.

**Mechanism:**
- Water is polar (partial charges due to bent shape and O-H bonds)
- Moves through aquaporins (water channel proteins)
- Follows concentration gradient until equilibrium

**(c) What prevents bursting:**

**Cell wall** provides structural support!

- Made of cellulose (rigid polysaccharide)
- Prevents excessive expansion
- Creates **turgor pressure** (pressure of cell contents against wall)
- Turgor pressure eventually equals osmotic pressure → equilibrium

**Comparison to animal cells:**
- Animal cells lack cell walls
- Would lyse (burst) in hypotonic solution
- Plant cells become turgid but don't burst

$$\\boxed{\\text{Cell wall prevents bursting; turgor pressure maintains plant rigidity}}$$`
        },
        {
          topicId: waterTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'Calculate the water potential (Ψ) of a plant cell with a solute potential (Ψ_s) of -0.5 MPa and a pressure potential (Ψ_p) of 0.3 MPa. If this cell is placed in a solution with Ψ = -0.3 MPa, will water move into or out of the cell? Show your work.',
          solution: `**Given:**
- Cell solute potential: Ψ_s = -0.5 MPa
- Cell pressure potential: Ψ_p = 0.3 MPa
- Solution water potential: Ψ_solution = -0.3 MPa

**Step 1: Calculate cell water potential**

$$\\Psi_{cell} = \\Psi_s + \\Psi_p$$

$$\\Psi_{cell} = (-0.5) + (0.3)$$

$$\\boxed{\\Psi_{cell} = -0.2 \\text{ MPa}}$$

**Step 2: Determine direction of water movement**

Water moves from **higher** (less negative) to **lower** (more negative) water potential.

Compare:
- $\\Psi_{cell} = -0.2$ MPa
- $\\Psi_{solution} = -0.3$ MPa

Since $-0.2 > -0.3$:

$$\\boxed{\\text{Water moves OUT of the cell into the solution}}$$

**Step 3: Explanation**

The cell has a higher (less negative) water potential than the surrounding solution, so water flows out by osmosis.

**What happens to the cell:**
- Water exits the cell
- Cell becomes **flaccid** (loses turgor)
- May undergo **plasmolysis** (membrane pulls away from cell wall)
- Ψ_p decreases as cell loses water
- Eventually reaches equilibrium when $\\Psi_{cell} = \\Psi_{solution}$

**Key Concept:**
Water always flows from high Ψ to low Ψ. More negative = lower water potential = less "free" water available.

$$\\text{Direction: Cell} \\xrightarrow{\\text{water}} \\text{Solution}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Water Properties')
  }

  // Topic 2: Carbohydrates
  const carbsTopic = await prisma.topic.findUnique({
    where: { slug: 'carbohydrates' }
  })

  if (carbsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: carbsTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Compare and contrast starch, glycogen, and cellulose in terms of: (a) monomer composition, (b) type of glycosidic linkages, (c) structure, and (d) biological function.',
          solution: `**Comparison of Polysaccharides:**

**(a) Monomer Composition:**

All three are polymers of **glucose** (C₆H₁₂O₆)
- Starch: α-glucose
- Glycogen: α-glucose
- Cellulose: β-glucose

**(b) Glycosidic Linkages:**

**Starch:**
- Amylose: α-1,4 glycosidic bonds (unbranched)
- Amylopectin: α-1,4 bonds with α-1,6 branches every 24-30 glucose units

**Glycogen:**
- α-1,4 bonds with α-1,6 branches every 8-12 glucose units (highly branched)

**Cellulose:**
- β-1,4 glycosidic bonds (linear, unbranched)

**(c) Structure:**

**Starch:** Helical coils (amylose) and branched structure (amylopectin)

**Glycogen:** Highly branched, compact globular structure

**Cellulose:** Long, straight, unbranched chains that form hydrogen bonds with adjacent chains → microfibrils

**(d) Biological Function:**

**Starch:**
- **Energy storage in plants**
- Found in roots, tubers, seeds
- Easily digestible by amylase enzymes

**Glycogen:**
- **Energy storage in animals**
- Stored in liver and muscle cells
- Highly branched for rapid glucose release

**Cellulose:**
- **Structural support in plant cell walls**
- Provides rigidity and strength
- Most humans cannot digest (lack cellulase enzyme)
- Dietary fiber in human nutrition

$$\\boxed{\\text{Storage: starch/glycogen (α-glucose); Structural: cellulose (β-glucose)}}$$`
        },
        {
          topicId: carbsTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'Explain the process of dehydration synthesis (condensation reaction) in forming a disaccharide. Use the formation of sucrose from glucose and fructose as an example. Include the molecular formula and type of bond formed.',
          solution: `**Dehydration Synthesis (Condensation Reaction):**

Formation of **sucrose** from glucose + fructose

**Reactants:**
- Glucose: C₆H₁₂O₆ (α-glucose, 6-carbon aldose)
- Fructose: C₆H₁₂O₆ (β-fructose, 6-carbon ketose)

**Process:**

1. **Hydroxyl groups (-OH) from each monosaccharide approach**
   - OH from C1 of glucose
   - OH from C2 of fructose

2. **Dehydration occurs:**
   - One monosaccharide loses H
   - Other monosaccharide loses OH
   - These combine to form H₂O (water)

3. **Bond formation:**
   - Oxygen links the two monosaccharides
   - Forms **glycosidic bond** (C-O-C)
   - Specifically: α-1,2 glycosidic linkage

**Equation:**

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + \\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{enzyme}} \\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O}$$

$$\\text{Glucose} + \\text{Fructose} \\rightarrow \\text{Sucrose} + \\text{Water}$$

**Key Features:**
- **Anabolic reaction** (builds larger molecules)
- **Endergonic** (requires energy input, usually ATP)
- **Enzyme-catalyzed** (sucrase in reverse, or sucrose synthase)
- **Reversible** via hydrolysis

**Bond Formed:**
$$\\boxed{\\text{Glycosidic bond (α-1,2 linkage)}}$$

**Reverse Reaction (Hydrolysis):**
Adding water breaks the glycosidic bond, releasing glucose and fructose. This is how we digest disaccharides.

**Note:** Sucrose is "table sugar" - the primary transport sugar in plants (phloem sap).`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Carbohydrates')
  }

  // Topic 3: Lipids
  const lipidsTopic = await prisma.topic.findUnique({
    where: { slug: 'lipids' }
  })

  if (lipidsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: lipidsTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Compare saturated and unsaturated fatty acids: (a) describe the structural difference, (b) explain how this affects physical properties, and (c) discuss health implications in human diet.',
          solution: `**Fatty Acid Comparison:**

**(a) Structural Differences:**

**Saturated Fatty Acids:**
- No C=C double bonds
- All carbon-carbon bonds are single (C-C)
- General formula: CH₃(CH₂)ₙCOOH
- Maximum number of hydrogens ("saturated" with H)
- Example: Palmitic acid (16:0), Stearic acid (18:0)

**Unsaturated Fatty Acids:**
- One or more C=C double bonds
- **Monounsaturated:** 1 double bond (oleic acid, 18:1)
- **Polyunsaturated:** 2+ double bonds (linoleic acid, 18:2)
- Each double bond creates a "kink" in the chain

**(b) Physical Properties:**

**Saturated:**
- Straight chains pack tightly together
- Strong van der Waals forces between molecules
- **Higher melting point** → solid at room temperature
- Examples: butter, lard, coconut oil

**Unsaturated:**
- Kinked chains prevent tight packing
- Weaker intermolecular forces
- **Lower melting point** → liquid at room temperature
- Examples: olive oil, fish oil, vegetable oils

**(c) Health Implications:**

**Saturated Fats:**
- ⚠️ Raise LDL ("bad") cholesterol
- Associated with increased cardiovascular disease risk
- Recommendation: limit to <10% of daily calories

**Unsaturated Fats:**
- ✓ Lower LDL cholesterol, raise HDL ("good") cholesterol
- **Omega-3 fatty acids** (EPA, DHA): anti-inflammatory, heart-protective
- **Omega-6 fatty acids** (linoleic): essential, but balance with omega-3
- Recommendation: replace saturated with unsaturated fats

**Trans Fats (Special Case):**
- Artificially saturated (hydrogenation)
- Worst for health: raise LDL, lower HDL
- Should be avoided completely

$$\\boxed{\\text{Unsaturated (kinked) → liquid, healthier; Saturated (straight) → solid, limit intake}}$$`
        },
        {
          topicId: lipidsTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'Draw and explain the structure of a phospholipid. Describe how phospholipids spontaneously form a bilayer in aqueous solution. What properties make this arrangement thermodynamically favorable?',
          solution: `**Phospholipid Structure:**

**Components:**
1. **Hydrophilic "head":**
   - Glycerol backbone
   - Phosphate group (PO₄³⁻) - negatively charged
   - Often additional molecule (choline, serine, ethanolamine)
   - **Polar** → attracted to water

2. **Hydrophobic "tails":**
   - Two fatty acid chains (usually 14-18 carbons)
   - One typically saturated (straight)
   - One typically unsaturated (kinked)
   - **Nonpolar** → repelled by water

**Structure Diagram:**
\`\`\`
        Choline
           |
    Phosphate group  ←  Hydrophilic head
           |              (polar, charged)
        Glycerol
          / \\
    Fatty acid chains  ←  Hydrophobic tails
         |   |            (nonpolar)
         |   |
         |   | (kinked if unsaturated)
\`\`\`

**Bilayer Formation:**

In aqueous solution, phospholipids **spontaneously** arrange into a bilayer:

1. **Hydrophilic heads** face outward toward water
2. **Hydrophobic tails** face inward, away from water
3. Forms continuous **lipid bilayer** membrane

**Cross-section:**
\`\`\`
Water | ○○○○○○○○ | ← Heads (exterior)
      | ~~~~~~~~ |
      | ~~~~~~~~ | ← Tails (interior)
      | ~~~~~~~~ |
      | ~~~~~~~~ | ← Tails (interior)
      | ○○○○○○○○ | ← Heads (interior/exterior)
Water
\`\`\`

**Thermodynamic Favorability:**

**Entropy-driven process:**

1. **Hydrophobic effect:**
   - Water molecules form ordered "cages" around nonpolar tails
   - Decreases entropy (unfavorable)
   - Bilayer minimizes water-tail contact
   - Releases ordered water → **increases entropy** ✓

2. **Hydrogen bonding:**
   - Polar heads interact with water via H-bonds
   - Maximizes favorable interactions

3. **Van der Waals forces:**
   - Tails interact with each other in bilayer interior
   - Stabilizes structure

4. **Self-sealing:**
   - Exposed edges are unfavorable
   - Bilayer spontaneously forms closed vesicles (liposomes)
   - Minimizes edge effects

**Gibbs Free Energy:**

$$\\Delta G = \\Delta H - T\\Delta S$$

- ΔS is positive (entropy increases) → large negative TΔS term
- ΔG < 0 → **spontaneous** process

$$\\boxed{\\text{Bilayer formation is spontaneous due to hydrophobic effect (entropy-driven)}}$$

**Biological Significance:**
- Forms basis of all cell membranes
- Selectively permeable barrier
- Fluid mosaic model: proteins embedded in fluid lipid bilayer
- ~50% of membrane mass in typical cell`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Lipids')
  }

  // Topic 4: Proteins
  const proteinsTopic = await prisma.topic.findUnique({
    where: { slug: 'proteins' }
  })

  if (proteinsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: proteinsTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Describe the four levels of protein structure (primary, secondary, tertiary, quaternary). For each level, identify: (a) the type of bonds or interactions involved, and (b) give a specific example.',
          solution: `**Four Levels of Protein Structure:**

**1. Primary Structure**

**(a) Bonds:** Peptide bonds (covalent) linking amino acids

- Sequence of amino acids in polypeptide chain
- Written N-terminus to C-terminus
- Determined by DNA sequence (gene)

**(b) Example:** Insulin A-chain: 21 amino acids starting with Gly-Ile-Val-Glu...

**2. Secondary Structure**

**(a) Bonds/Interactions:** Hydrogen bonds between backbone atoms (C=O and N-H)

**Two main types:**

- **α-helix:** Coiled structure, H-bonds between every 4th amino acid
- **β-pleated sheet:** Extended strands, H-bonds between adjacent strands (parallel or antiparallel)

**(b) Example:**
- α-helix: Keratin in hair, myoglobin
- β-sheet: Silk fibroin (antiparallel)

**3. Tertiary Structure**

**(a) Bonds/Interactions:**

- **Hydrophobic interactions:** Nonpolar R-groups cluster in interior
- **Hydrogen bonds:** Between R-groups
- **Ionic bonds (salt bridges):** Between charged R-groups (+ and -)
- **Disulfide bridges (S-S):** Covalent bonds between cysteine residues
- **van der Waals forces:** Weak attractions

Overall 3D shape of single polypeptide

**(b) Example:**
- Lysozyme (enzyme): specific 3D shape creates active site
- Myoglobin: globular protein with heme group

**4. Quaternary Structure**

**(a) Bonds/Interactions:** Same as tertiary (H-bonds, ionic, hydrophobic, van der Waals)

- Multiple polypeptide subunits associate
- Not all proteins have quaternary structure
- Functional protein complex

**(b) Example:**
- **Hemoglobin:** 4 subunits (2α, 2β chains), each with heme
- **Collagen:** 3 polypeptide helices twisted together (triple helix)

**Summary Table:**

| Level | Bond/Interaction | Example |
|-------|-----------------|---------|
| 1° | Peptide bonds | Amino acid sequence |
| 2° | H-bonds (backbone) | α-helix, β-sheet |
| 3° | Multiple (R-groups) | Myoglobin (3D fold) |
| 4° | Multiple (subunits) | Hemoglobin (4 subunits) |

$$\\boxed{\\text{1°: sequence, 2°: local folds, 3°: 3D shape, 4°: multiple chains}}$$

**Key Concept:** Structure determines function! Denaturation (loss of 3D structure) → loss of function.`
        },
        {
          topicId: proteinsTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'An enzyme has optimal activity at pH 7.0 and temperature 37°C. Predict and explain what happens to enzyme activity when: (a) pH is changed to 3.0, (b) temperature is increased to 80°C, and (c) a competitive inhibitor is added. Include discussion of protein structure changes.',
          solution: `**Enzyme Conditions:** Optimal at pH 7.0 and 37°C

**(a) pH changed to 3.0 (strongly acidic):**

**Prediction:** ⚠️ **Enzyme activity greatly reduced or eliminated**

**Explanation:**

1. **Protonation of amino acids:**
   - Acidic pH adds excess H⁺ ions
   - Amino acid R-groups become protonated
   - Charged residues (Asp⁻, Glu⁻) become neutral (AspH, GluH)
   - Basic residues (His, Lys, Arg) become more positive

2. **Disruption of ionic bonds:**
   - Salt bridges (electrostatic interactions) break
   - Changes in charge distribution

3. **Tertiary structure denaturation:**
   - 3D shape distorts
   - Active site changes shape
   - Substrate can no longer bind properly

4. **Result:** Loss of catalytic activity (may be reversible if pH restored quickly)

**(b) Temperature increased to 80°C (far above optimum):**

**Prediction:** ⚠️ **Enzyme denatured, activity lost permanently**

**Explanation:**

1. **Increased kinetic energy:**
   - Molecules vibrate more vigorously
   - Weak bonds break (H-bonds, ionic, hydrophobic)

2. **Progressive unfolding:**
   - Secondary structure disrupted (α-helices, β-sheets unfold)
   - Tertiary structure lost
   - Protein unfolds into random coil

3. **Permanent denaturation:**
   - Polypeptide chains may aggregate
   - Disulfide bonds may scramble
   - **Irreversible** damage

4. **Activity-Temperature Relationship:**
   \`\`\`
   Activity
     ^
     |     /\\
     |    /  \\
     |   /    \\_____ (denaturation)
     |  /
     |_/________________> Temperature
         37°C  80°C
   \`\`\`

**Why irreversible:** Unlike pH change, heat breaks so many bonds simultaneously that protein cannot refold to native state.

**(c) Competitive inhibitor added:**

**Prediction:** 🔽 **Enzyme activity reduced but NOT eliminated**

**Explanation:**

1. **Competitive inhibition mechanism:**
   - Inhibitor structurally similar to substrate
   - Competes for same active site
   - Reversibly binds to enzyme

2. **Effect on protein structure:**
   - **No structural change to enzyme!**
   - Enzyme remains properly folded
   - Active site unchanged

3. **Kinetic effects:**
   - ↑ K_m (apparent affinity for substrate decreases)
   - V_max unchanged (can be overcome with excess substrate)

4. **Equation:**

   $$v = \\frac{V_{max}[S]}{K_m(1 + [I]/K_i) + [S]}$$

   where [I] = inhibitor concentration, K_i = inhibitor constant

5. **Key difference:**
   - Can be overcome by **increasing substrate concentration**
   - At high [S], substrate outcompetes inhibitor
   - Eventually reaches V_max

**Comparison:**

| Condition | Structure Change | Activity | Reversible? |
|-----------|-----------------|----------|-------------|
| Low pH | Tertiary disrupted | Very low | Yes (if quick) |
| High temp | Complete denaturation | Zero | No |
| Competitive inh. | None | Reduced | Yes (↑ substrate) |

$$\\boxed{\\text{(a) Denatures (reversible), (b) Denatures (irreversible), (c) Active site blocked (reversible)}}$$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Proteins')
  }

  // Topic 5: Nucleic Acids
  const nucleicAcidsTopic = await prisma.topic.findUnique({
    where: { slug: 'nucleic-acids' }
  })

  if (nucleicAcidsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: nucleicAcidsTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Compare DNA and RNA in terms of: (a) sugar component, (b) nitrogenous bases, (c) structure, and (d) primary biological functions.',
          solution: `**DNA vs RNA Comparison:**

**(a) Sugar Component:**

**DNA:** Deoxyribose (lacks OH on 2' carbon)
- Formula: C₅H₁₀O₄
- 2'-H (hydrogen at position 2)

**RNA:** Ribose (has OH on 2' carbon)
- Formula: C₅H₁₀O₅
- 2'-OH makes RNA more chemically reactive

**(b) Nitrogenous Bases:**

**DNA:**
- **Purines:** Adenine (A), Guanine (G)
- **Pyrimidines:** Cytosine (C), **Thymine (T)**

**RNA:**
- **Purines:** Adenine (A), Guanine (G)
- **Pyrimidines:** Cytosine (C), **Uracil (U)**

**Key difference:** Thymine (DNA) vs Uracil (RNA)
- Thymine = methylated uracil (extra -CH₃ group)

**(c) Structure:**

**DNA:**
- Double-stranded (double helix)
- Antiparallel strands (5'→3' and 3'→5')
- Base pairing: A-T (2 H-bonds), G-C (3 H-bonds)
- Very stable, long-term storage
- Width: ~2 nm, 10 bp per turn

**RNA:**
- Usually single-stranded
- Can fold into secondary structures (hairpins, loops)
- Some regions may base pair (A-U, G-C)
- More flexible, temporary

**(d) Primary Biological Functions:**

**DNA:**
1. **Long-term genetic storage**
   - Contains hereditary information
   - Passed from parent to offspring
   
2. **Template for replication**
   - Makes identical copies during cell division
   
3. **Template for transcription**
   - Genes transcribed into RNA

**RNA:**
1. **mRNA (messenger RNA):**
   - Carries genetic information from DNA to ribosomes
   - Template for protein synthesis
   
2. **rRNA (ribosomal RNA):**
   - Structural and catalytic component of ribosomes
   - Catalyzes peptide bond formation
   
3. **tRNA (transfer RNA):**
   - Brings amino acids to ribosome during translation
   - Has anticodon that pairs with mRNA codon

4. **Other RNAs:**
   - miRNA, siRNA (gene regulation)
   - snRNA (splicing)
   - Ribozymes (catalytic RNA)

**Summary Table:**

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose |
| Bases | A, T, G, C | A, U, G, C |
| Strands | Double | Usually single |
| Stability | Very stable | Less stable |
| Function | Storage | Protein synthesis, regulation |

$$\\boxed{\\text{DNA: stable storage (T, deoxyribose); RNA: functional (U, ribose)}}$$`
        },
        {
          topicId: nucleicAcidsTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A segment of DNA has the sequence 5\'-ATGCGATACG-3\' on one strand. (a) Write the complementary strand with proper directionality, (b) explain Chargaff\'s rules and verify they apply to this double-stranded segment, and (c) calculate the percentage of G-C base pairs.',
          solution: `**Given:** 5'-ATGCGATACG-3'

**(a) Complementary strand:**

**Rules:**
- Strands are antiparallel
- A pairs with T (2 H-bonds)
- G pairs with C (3 H-bonds)

Original:     5'-ATGCGATACG-3'
Complement:   3'-TACGCTATGC-5'

Or written in conventional 5' to 3' direction:

$$\\boxed{\\text{Complement: } 5\\text{'-CGTATCGCAT-}3'}$$

**(b) Chargaff's Rules:**

**Statement:**
In double-stranded DNA:
1. Amount of adenine (A) = Amount of thymine (T)
2. Amount of guanine (G) = Amount of cytosine (C)
3. Amount of purines (A+G) = Amount of pyrimidines (T+C)
4. The ratio (A+T)/(G+C) varies by species but is constant within species

**Verification for this segment:**

Count bases in both strands:

Original strand:  A=3, T=2, G=3, C=2
Complement:       A=2, T=3, G=2, C=3

**Total (double-stranded):**
- A = 3 + 2 = 5
- T = 2 + 3 = 5  ✓ (A = T)
- G = 3 + 2 = 5
- C = 2 + 3 = 5  ✓ (G = C)
- Purines (A+G) = 5 + 5 = 10
- Pyrimidines (T+C) = 5 + 5 = 10  ✓

$$\\boxed{\\text{Chargaff's rules verified: A=T=5, G=C=5}}$$

**(c) Percentage of G-C base pairs:**

Total base pairs = 10 bp (double-stranded segment)

G-C base pairs = 5

$$\\%GC = \\frac{\\text{G-C pairs}}{\\text{Total pairs}} \\times 100\\%$$

$$\\%GC = \\frac{5}{10} \\times 100\\%$$

$$\\boxed{\\%GC = 50\\%}$$

**Biological Significance:**

- G-C content affects DNA stability
- 3 H-bonds (G-C) vs 2 H-bonds (A-T)
- Higher GC% → higher melting temperature (T_m)
- This segment: 50% GC = moderate stability

**Calculation for melting temperature:**
$$T_m \\approx 81.5 + 0.41(\\%GC)$$
$$T_m \\approx 81.5 + 0.41(50) = 102°C$$

(For longer DNA; short oligos use different formula)`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Nucleic Acids')
  }

  // Topic 6: Prokaryotic and Eukaryotic Cells
  const prokEukTopic = await prisma.topic.findUnique({
    where: { slug: 'prokaryotic-eukaryotic-cells' }
  })

  if (prokEukTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: prokEukTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Create a comparison table of prokaryotic and eukaryotic cells, addressing: (a) presence of membrane-bound organelles, (b) DNA organization, (c) cell size, and (d) examples of organisms in each category.',
          solution: `**Prokaryotic vs Eukaryotic Cells:**

| Feature | Prokaryotic | Eukaryotic |
|---------|-------------|------------|
| **Nucleus** | No true nucleus | Membrane-bound nucleus |
| **DNA organization** | Circular DNA in nucleoid region | Linear DNA in chromosomes, wrapped around histones |
| **Membrane-bound organelles** | Absent | Present (mitochondria, ER, Golgi, etc.) |
| **Ribosomes** | 70S (smaller) | 80S (larger) in cytoplasm; 70S in mitochondria/chloroplasts |
| **Cell size** | 0.1-5.0 μm (smaller) | 10-100 μm (larger) |
| **Cell division** | Binary fission | Mitosis/meiosis |
| **Cytoskeleton** | Simple (some have) | Complex (microtubules, microfilaments) |
| **Cell wall** | Peptidoglycan (bacteria) | Cellulose (plants), chitin (fungi), or absent (animals) |

**(a) Membrane-bound organelles:**

**Prokaryotic:** ✗ No compartmentalization
- All reactions occur in cytoplasm
- Plasma membrane folds may increase surface area (mesosomes)

**Eukaryotic:** ✓ Extensive compartmentalization
- Nucleus, mitochondria, ER, Golgi, lysosomes, peroxisomes
- Allows specialized functions in separate compartments

**(b) DNA organization:**

**Prokaryotic:**
- Single circular chromosome in nucleoid
- No histones (except Archaea)
- Plasmids (small circular DNA) common
- Genes lack introns (continuous coding)

**Eukaryotic:**
- Multiple linear chromosomes
- DNA wrapped around histone proteins → chromatin
- Genes contain introns and exons
- Much more DNA (genome size 1000x larger typically)

**(c) Cell size:**

**Prokaryotic:** 0.1-5.0 μm
- E. coli: ~2 μm long
- Small size = high surface area to volume ratio
- Efficient nutrient uptake

**Eukaryotic:** 10-100 μm
- Human cell: ~10-30 μm
- Larger, more complex
- Require internal membrane systems

**(d) Examples:**

**Prokaryotic:**
- **Bacteria:** E. coli, Streptococcus, Cyanobacteria
- **Archaea:** Methanogens, Halophiles, Thermophiles

**Eukaryotic:**
- **Protists:** Amoeba, Paramecium, Euglena
- **Fungi:** Yeast, mushrooms
- **Plants:** All plants
- **Animals:** All animals

$$\\boxed{\\text{Prokaryotes: simple, no nucleus; Eukaryotes: complex, membrane-bound organelles}}$$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Prokaryotic and Eukaryotic Cells')
  }

  // Topic 7: Cell Organelles
  const organellesTopic = await prisma.topic.findUnique({
    where: { slug: 'cell-organelles' }
  })

  if (organellesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: organellesTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Describe the structure and function of: (a) mitochondria, (b) chloroplasts, and (c) explain the endosymbiotic theory and evidence supporting it.',
          solution: `**(a) Mitochondria:**

**Structure:**
- Double membrane:
  * Outer membrane: smooth, permeable
  * Inner membrane: highly folded into **cristae** (increases surface area)
- **Matrix:** fluid-filled interior space
  * Contains enzymes for Krebs cycle
  * Own circular DNA (mtDNA)
  * 70S ribosomes
- Size: 1-10 μm

**Function:**
- **Cellular respiration** → ATP production
- Krebs cycle (matrix)
- Electron transport chain (inner membrane)
- ATP synthase in cristae
- ~36-38 ATP per glucose molecule

**(b) Chloroplasts:**

**Structure:**
- Double membrane (outer and inner)
- **Thylakoids:** flattened membrane sacs
  * Stack to form **grana** (singular: granum)
  * Contains chlorophyll and photosystems
- **Stroma:** fluid-filled space surrounding thylakoids
  * Contains enzymes for Calvin cycle
  * Own circular DNA
  * 70S ribosomes
- Size: 5-10 μm

**Function:**
- **Photosynthesis** → glucose production
- Light reactions (thylakoid membrane)
- Calvin cycle (stroma)
- Converts light energy to chemical energy (glucose)

**(c) Endosymbiotic Theory:**

**Hypothesis:**
Mitochondria and chloroplasts originated as free-living prokaryotes that were engulfed by ancestral eukaryotic cells in an endosymbiotic relationship.

**Timeline:**
1. ~2 billion years ago: aerobic bacterium engulfed → **mitochondria**
2. ~1.5 billion years ago: photosynthetic cyanobacterium engulfed → **chloroplasts**

**Evidence Supporting Theory:**

1. **Double membrane:**
   - Inner membrane from original prokaryote
   - Outer membrane from host cell's food vacuole
   
2. **Own DNA:**
   - Circular DNA (like bacteria)
   - No histones (prokaryotic feature)
   - Can replicate independently

3. **70S ribosomes:**
   - Same size as bacterial ribosomes
   - Different from eukaryotic 80S ribosomes
   - Similar rRNA sequences to bacteria

4. **Binary fission:**
   - Divide independently of cell
   - Similar to bacterial reproduction

5. **Gene similarity:**
   - mtDNA similar to α-proteobacteria
  - Chloroplast DNA similar to cyanobacteria

6. **Double membrane structure:**
   - Consistent with phagocytosis model

$$\\boxed{\\text{Endosymbiotic theory: organelles = former prokaryotes}}$$

**Modern examples:** Corals with zooxanthellae, paramecium with algae show similar relationships.`
        },
        {
          topicId: organellesTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'Trace the pathway of a secreted protein from synthesis to export: (a) list each organelle involved in order, (b) describe what happens at each step, and (c) explain the role of vesicles in this process.',
          solution: `**Protein Secretion Pathway (Endomembrane System):**

**(a) Organelles in order:**

1. **Ribosome** (on rough ER)
2. **Rough Endoplasmic Reticulum (RER)**
3. **Transport vesicle**
4. **Golgi apparatus** (cis → medial → trans)
5. **Secretory vesicle**
6. **Plasma membrane**

**(b) Step-by-step process:**

**Step 1: Translation begins (Ribosome)**
- mRNA binds to free ribosome in cytoplasm
- **Signal sequence** (first amino acids) synthesized
- Begins: NH₂-Met-...signal peptide...

**Step 2: ER targeting (Signal Recognition)**
- **Signal Recognition Particle (SRP)** recognizes signal sequence
- SRP binds to ribosome, pauses translation
- SRP-ribosome complex binds to SRP receptor on RER

**Step 3: Synthesis in RER**
- Ribosome docks on ER membrane
- Polypeptide fed through translocon channel into ER lumen
- Translation resumes
- **Signal peptidase** cleaves signal sequence
- Protein folds in ER lumen with help of **chaperones**
- **Glycosylation** begins (adds carbohydrate groups)

**Step 4: Quality control**
- Properly folded proteins continue
- Misfolded proteins → ER-associated degradation (ERAD)

**Step 5: Vesicle formation**
- **COPII-coated vesicles** bud from ER
- Carry proteins toward Golgi
- Vesicles fuse to form vesicular-tubular clusters

**Step 6: Golgi processing**
- **Cis face** (receiving side): vesicles fuse
- Proteins move through Golgi stack:
  * Cis → medial → trans cisternae
- **Modifications:**
  * Further glycosylation
  * Phosphorylation
  * Proteolytic cleavage
  * Sorting signals added

**Step 7: Sorting at Trans Golgi Network (TGN)**
- Proteins sorted by destination
- Packaged into specific vesicles
- Molecular tags determine fate

**Step 8: Secretory vesicle**
- **Clathrin-coated** or other vesicles bud from TGN
- Move along cytoskeleton (microtubules) using motor proteins
- Approach plasma membrane

**Step 9: Exocytosis**
- Vesicle fuses with plasma membrane
- **v-SNARE** (vesicle) + **t-SNARE** (target) proteins mediate fusion
- Protein released outside cell
- Vesicle membrane becomes part of plasma membrane

**(c) Role of vesicles:**

**Functions:**
1. **Transport:** Move proteins between organelles
2. **Protection:** Shield proteins from cytoplasm
3. **Compartmentalization:** Maintain separation
4. **Membrane expansion:** Add membrane to plasma membrane
5. **Regulation:** Allow controlled, timed secretion

**Types of secretion:**

**Constitutive secretion:**
- Continuous, unregulated
- Default pathway
- Example: antibodies from plasma cells

**Regulated secretion:**
- Stored in vesicles until signal received
- Triggered by Ca²⁺ or other signals
- Example: insulin from pancreatic β-cells, neurotransmitters

**Vesicle formation mechanisms:**
- **Coat proteins** (COPII, COPI, clathrin) deform membrane
- Cargo receptors select specific proteins
- Vesicles pinch off using dynamin (GTPase)
- Coats removed before fusion

$$\\boxed{\\text{Ribosome → RER → vesicle → Golgi → vesicle → plasma membrane → EXPORT}}$$

**Time:** Entire process takes ~30-120 minutes depending on protein and cell type.`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Cell Organelles')
  }

  // Topic 8: Cell Membrane and Transport
  const membraneTopic = await prisma.topic.findUnique({
    where: { slug: 'cell-membrane-transport' }
  })

  if (membraneTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: membraneTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Compare and contrast the following transport mechanisms: (a) simple diffusion, (b) facilitated diffusion, and (c) active transport. Include examples and whether each requires energy.',
          solution: `**Membrane Transport Mechanisms:**

**(a) Simple Diffusion:**

**Mechanism:**
- Molecules move directly through lipid bilayer
- Down concentration gradient (high → low)
- No protein required

**Requirements:**
- ✗ No energy (ATP) needed - **passive**
- ✗ No transport protein needed
- Molecules must be small and/or nonpolar

**Rate factors:**
- Concentration gradient
- Temperature
- Molecular size
- Lipid solubility

**Examples:**
- O₂, CO₂ (respiratory gases)
- N₂
- Small nonpolar molecules (ethanol, glycerol)
- Lipid-soluble substances (steroid hormones)

**Equation (Fick's Law):**
$$\\text{Rate} \\propto \\frac{\\Delta C \\cdot A}{\\Delta x}$$

**(b) Facilitated Diffusion:**

**Mechanism:**
- Molecules move through **channel proteins** or **carrier proteins**
- Down concentration gradient (high → low)
- Protein-mediated

**Requirements:**
- ✗ No energy (ATP) needed - **passive**
- ✓ Requires specific transport protein
- Selective based on protein specificity

**Types:**

**1. Channel proteins:**
- Aquaporins (water)
- Ion channels (Na⁺, K⁺, Ca²⁺, Cl⁻)
- Can be gated (open/close in response to signal)

**2. Carrier proteins:**
- Bind substrate
- Change conformation
- Release on other side
- Example: GLUT1 (glucose transporter)

**Characteristics:**
- Shows **saturation kinetics** (max rate at high [S])
- Specific for certain molecules
- Faster than simple diffusion for large/polar molecules

**Examples:**
- Glucose into cells (GLUT transporters)
- Amino acids
- Ions through channels
- Water through aquaporins

**(c) Active Transport:**

**Mechanism:**
- Molecules pumped **against** concentration gradient (low → high)
- Requires energy input (ATP)
- Uses carrier proteins (pumps)

**Requirements:**
- ✓ Energy (ATP) required - **active**
- ✓ Requires specific pump protein
- Can create concentration gradients

**Types:**

**1. Primary active transport:**
- ATP directly powers transport
- Example: **Na⁺/K⁺-ATPase pump**
  * 3 Na⁺ out, 2 K⁺ in
  * Maintains electrochemical gradient
  * ~30% of cell's ATP used!

**2. Secondary active transport (cotransport):**
- Uses gradient created by primary transport
- **Symport:** both move same direction (Na⁺-glucose)
- **Antiport:** move opposite directions (Na⁺/Ca²⁺ exchanger)

**Examples:**
- Na⁺/K⁺ pump (all animal cells)
- Ca²⁺ pumps (muscle cells)
- H⁺ pumps (stomach acid, plant roots)
- Na⁺-glucose cotransporter (intestine)

**Comparison Table:**

| Feature | Simple Diffusion | Facilitated Diffusion | Active Transport |
|---------|------------------|----------------------|------------------|
| Energy? | No (passive) | No (passive) | Yes (ATP) |
| Protein? | No | Yes | Yes |
| Direction | Down gradient | Down gradient | Against gradient |
| Saturation? | No | Yes | Yes |
| Examples | O₂, CO₂ | Glucose, ions (channels) | Na⁺/K⁺ pump |
| Speed | Slow for large/polar | Faster than simple | Variable |

$$\\boxed{\\text{Passive (down gradient): simple/facilitated; Active (against gradient): requires ATP}}$$

**Energetics:**
- Passive: $\\Delta G < 0$ (spontaneous)
- Active: $\\Delta G > 0$ (requires energy input from ATP hydrolysis)`
        },
        {
          topicId: membraneTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'Explain how the Na⁺/K⁺-ATPase pump works: (a) describe the step-by-step mechanism, (b) explain why this is electrogenic, and (c) discuss how this pump enables secondary active transport (use glucose absorption as an example).',
          solution: `**Na⁺/K⁺-ATPase Pump:**

**(a) Step-by-step mechanism:**

**Cycle has 6 main steps:**

**Step 1: Binding (Cytoplasmic side)**
- 3 Na⁺ ions bind to pump from inside cell
- Pump in "E₁" conformation (open to cytoplasm)
- High affinity for Na⁺ in this state

**Step 2: Phosphorylation**
- ATP binds to pump
- ATP hydrolyzed: ATP → ADP + Pi
- Phosphate (Pi) covalently attached to aspartate residue
- Pump now "energized"

$$\\text{E}_1\\text{-ATP} \\rightarrow \\text{E}_1\\text{-P} + \\text{ADP}$$

**Step 3: Conformational change**
- Phosphorylation causes shape change
- Pump switches to "E₂" conformation (open to extracellular)
- Na⁺ binding sites now face outside
- Affinity for Na⁺ decreases

**Step 4: Na⁺ release**
- 3 Na⁺ released to extracellular fluid
- Pump still phosphorylated

**Step 5: K⁺ binding**
- 2 K⁺ bind from outside
- E₂ conformation has high affinity for K⁺
- K⁺ binding triggers dephosphorylation

**Step 6: Dephosphorylation and return**
- Phosphate released from pump
- Pump returns to E₁ conformation
- K⁺ binding sites now face cytoplasm
- Affinity for K⁺ decreases
- 2 K⁺ released into cytoplasm
- Cycle repeats

**Net Result:**
$$\\text{3 Na}^+ \\text{ (out)} + \\text{2 K}^+ \\text{ (in)} + \\text{ATP} \\rightarrow \\text{3 Na}^+ \\text{ (out)} + \\text{2 K}^+ \\text{ (in)} + \\text{ADP} + \\text{P}_i$$

**(b) Why is this electrogenic?**

**Electrogenic = generates electrical potential**

**Charge imbalance:**
- 3 positive charges (Na⁺) pumped OUT
- 2 positive charges (K⁺) pumped IN
- **Net:** 1 positive charge removed per cycle

**Result:**
- Creates **membrane potential**
- Inside becomes more negative relative to outside
- Typical: -70 mV (inside negative)

**Contribution to resting potential:**
- Direct: ~-10 mV from pump itself
- Indirect: ~-60 mV from K⁺ leak channels (enabled by gradient)
- Total: ~-70 mV

$$\\Delta V = \\frac{RT}{F}\\ln\\frac{[K^+]_{out}}{[K^+]_{in}}$$

**(c) Secondary active transport - glucose absorption:**

**Primary transport creates gradient:**

Na⁺/K⁺ pump → low [Na⁺] inside, high [Na⁺] outside

**Secondary transport exploits gradient:**

**SGLT1 (Sodium-Glucose Linked Transporter)** in intestinal epithelium:

**Mechanism:**
1. SGLT1 binds 2 Na⁺ + 1 glucose from intestinal lumen
2. Na⁺ moving down gradient (high → low) provides energy
3. Energy used to move glucose against its gradient (low → high)
4. Both released into cytoplasm

**This is SYMPORT** (both move same direction)

**Energy source:**
- NOT directly ATP
- Uses Na⁺ gradient (created by Na⁺/K⁺ pump using ATP)
- **Indirect** use of ATP

**Complete pathway for glucose absorption:**

\`\`\`
Intestinal Lumen → Epithelial Cell → Blood

Step 1: SGLT1 (apical membrane)
   Glucose + 2Na⁺  →  into cell
   (secondary active, symport)

Step 2: GLUT2 (basolateral membrane)
   Glucose  →  out to blood
   (facilitated diffusion, down gradient)

Step 3: Na⁺/K⁺ pump (basolateral membrane)
   Maintains low [Na⁺] inside
   (primary active transport)
\`\`\`

**Why this works:**
- Na⁺ gradient provides "free" energy for glucose transport
- One ATP → multiple glucose molecules transported
- More efficient than direct ATP use for each glucose

**Energetics:**

Primary active: $\\Delta G_{ATP} = -30.5$ kJ/mol
Drives: [Na⁺] gradient = +10-12 kJ/mol
Used for: glucose uptake against gradient = +5-8 kJ/mol

$$\\boxed{\\text{Pump creates Na}^+ \\text{ gradient → SGLT1 uses gradient → glucose absorbed}}$$

**Clinical relevance:**
- Oral rehydration therapy (ORT) uses this!
- Na⁺ + glucose solution
- Glucose absorption drives Na⁺ and water absorption
- Treats dehydration from diarrhea`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Cell Membrane and Transport')
  }

  // Topic 9: Enzymes and Metabolism
  const enzymesTopic = await prisma.topic.findUnique({
    where: { slug: 'enzymes-metabolism' }
  })

  if (enzymesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: enzymesTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Explain enzyme kinetics: (a) describe how substrate concentration affects reaction rate and sketch a Michaelis-Menten curve, (b) define Km and Vmax, and (c) explain what it means if an enzyme has a low Km vs. high Km.',
          solution: `**Enzyme Kinetics:**

**(a) Effect of substrate concentration:**

**At low [S]:**
- Few substrate molecules
- Many active sites available
- Increasing [S] sharply increases rate
- **First-order kinetics** (rate ∝ [S])

**At intermediate [S]:**
- Some active sites occupied
- Rate increases but less steeply
- **Mixed-order kinetics**

**At high [S]:**
- All active sites saturated
- Maximum rate achieved
- Further ↑[S] has no effect
- **Zero-order kinetics** (rate independent of [S])

**Michaelis-Menten Curve:**

\`\`\`
Velocity (v)
    ^
Vmax|_ _ _ _ _ _ _ _ _ ___________
    |                  /
    |                 /
Vmax|_ _ _ _ _ _ _   /
 2  |             \\ /
    |              X  ← Km
    |            / |
    |          /   |
    |        /     |
    |      /       |
    |____/____|____|_____________> [S]
              Km
\`\`\`

**(b) Definitions:**

**Vmax (Maximum velocity):**
- Rate when enzyme is saturated with substrate
- All active sites occupied
- Cannot go faster (limited by enzyme concentration)
- Units: μmol/min, mM/s, etc.

**Km (Michaelis constant):**
- Substrate concentration at **half-maximal velocity** (Vmax/2)
- **Measure of affinity:**
  * Low Km = high affinity (reaches Vmax quickly)
  * High Km = low affinity (needs more substrate)
- Units: mM, μM, nM

**Michaelis-Menten equation:**

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

**At [S] = Km:**
$$v = \\frac{V_{max} \\cdot K_m}{K_m + K_m} = \\frac{V_{max}}{2}$$

**(c) Interpretation of Km values:**

**Low Km (e.g., 0.01 mM):**
- ✓ **High affinity** for substrate
- Enzyme binds substrate tightly
- Reaches Vmax at low [S]
- Efficient at low substrate concentrations
- Example: Hexokinase for glucose (Km ~ 0.1 mM)
  * Works well even when blood glucose is normal (5 mM)

**High Km (e.g., 10 mM):**
- ✗ **Low affinity** for substrate
- Enzyme binds substrate weakly
- Needs high [S] to reach Vmax
- Only efficient when substrate abundant
- Example: Glucokinase in liver (Km ~ 10 mM)
  * Only active when blood glucose is high (after meal)
  * Acts as "glucose sensor"

**Comparison:**

| Enzyme | Km | Affinity | Function |
|--------|-----|---------|----------|
| Hexokinase | 0.1 mM | High | Glucose uptake (all cells) |
| Glucokinase | 10 mM | Low | Glucose sensing (liver) |

**Physiological significance:**

- Hexokinase: active even at low glucose → ensures cells get energy
- Glucokinase: only active at high glucose → liver stores excess as glycogen

$$\\boxed{\\text{Low } K_m = \\text{ high affinity; High } K_m = \\text{ low affinity}}$$

**Lineweaver-Burk plot (double reciprocal):**

$$\\frac{1}{v} = \\frac{K_m}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}$$

Linearizes data:
- y-intercept = 1/Vmax
- x-intercept = -1/Km
- slope = Km/Vmax`
        },
        {
          topicId: enzymesTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A researcher studies two inhibitors of enzyme X. Inhibitor A increases Km but doesn\'t change Vmax. Inhibitor B decreases Vmax but doesn\'t change Km. (a) Identify each type of inhibition, (b) explain the mechanism of each, and (c) sketch Lineweaver-Burk plots for both.',
          solution: `**Enzyme Inhibition Analysis:**

**(a) Identification:**

**Inhibitor A:** ↑ Km, Vmax unchanged
$$\\boxed{\\text{Competitive inhibition}}$$

**Inhibitor B:** ↓ Vmax, Km unchanged
$$\\boxed{\\text{Non-competitive inhibition}}$$

**(b) Mechanisms:**

**Competitive Inhibition (Inhibitor A):**

**Mechanism:**
- Inhibitor structurally similar to substrate
- Competes for same active site
- Binds reversibly to free enzyme (E)
- E + I ⇌ EI (inactive)

**Effect:**
- **Km increases** (apparent affinity decreases)
  * Need more substrate to outcompete inhibitor
  * K_m(app) = Km(1 + [I]/Ki)
- **Vmax unchanged**
  * Can still reach max rate with enough substrate
  * High [S] outcompetes inhibitor

**Example:** Malonate inhibits succinate dehydrogenase
- Malonate similar to succinate
- Competes for active site in Krebs cycle

**Equation:**
$$v = \\frac{V_{max}[S]}{K_m(1 + [I]/K_i) + [S]}$$

**Overcoming:** ↑ substrate concentration

**Non-competitive Inhibition (Inhibitor B):**

**Mechanism:**
- Inhibitor binds to allosteric site (not active site)
- Can bind to E or ES complex
- E + I ⇌ EI, ES + I ⇌ ESI
- Changes enzyme conformation → reduces activity

**Effect:**
- **Vmax decreases** (fewer functional enzyme molecules)
  * V_max(app) = Vmax/(1 + [I]/Ki)
  * Essentially reduces [E]_total
- **Km unchanged**
  * Affinity for substrate not affected
  * Substrate still binds normally to unaffected enzymes

**Example:** Heavy metals (Pb²⁺, Hg²⁺) bind to sulfhydryl groups
- Distort protein shape
- Reduce activity

**Equation:**
$$v = \\frac{V_{max}[S]}{(K_m + [S])(1 + [I]/K_i)}$$

**Overcoming:** CANNOT overcome with ↑ [S]

**(c) Lineweaver-Burk Plots:**

**Competitive Inhibition:**

\`\`\`
1/v  ^
     |    \\  +Inhibitor (slope ↑)
     |     \\
     |  \\   \\
     |   \\   \\
     | No inh.\\
     |     \\   \\
     |______\\___\\_________> 1/[S]
     |       \\   \\
     |        \\   \\
             -1/Km(app)
              ↑         -1/Km
        (shifts left)   (no inhibitor)
\`\`\`

**Key features:**
- Same y-intercept (1/Vmax unchanged)
- **Different x-intercepts** (Km changes)
- **Different slopes** (steeper with inhibitor)
- Lines converge on y-axis

**Non-competitive Inhibition:**

\`\`\`
1/v  ^
     |
     |    +Inhibitor (higher y-int)
     |___________________
     |    \\
     |     \\ No inhibitor
     |      \\____________
     |       \\
     |________\\___________> 1/[S]
              |
            -1/Km
        (same x-intercept)
\`\`\`

**Key features:**
- **Different y-intercepts** (1/Vmax changes)
- Same x-intercept (-1/Km unchanged)
- **Different slopes**
- Lines converge on x-axis (if pure non-competitive)

**Comparison Table:**

| Type | Active site? | Km | Vmax | Overcome with ↑[S]? |
|------|--------------|-----|------|---------------------|
| Competitive | Yes (competes) | ↑ | Same | Yes |
| Non-competitive | No (allosteric) | Same | ↓ | No |
| Uncompetitive | ES complex only | ↓ | ↓ | No |

**Mixed inhibition (bonus):**
- Both Km and Vmax change
- Can bind E or ES with different affinities
- Lines intersect above or below x-axis

$$\\boxed{\\text{Competitive: } \\uparrow K_m; \\text{ Non-competitive: } \\downarrow V_{max}}$$

**Clinical relevance:**
- **Statins:** competitive inhibitors of HMG-CoA reductase (cholesterol synthesis)
- **Aspirin:** irreversible inhibitor of COX enzyme (anti-inflammatory)
- **Methotrexate:** competitive inhibitor of dihydrofolate reductase (cancer treatment)`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Enzymes and Metabolism')
  }

  // Topic 10: Cellular Respiration
  const respirationTopic = await prisma.topic.findUnique({
    where: { slug: 'cellular-respiration' }
  })

  if (respirationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: respirationTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Outline the four stages of cellular respiration: (a) name each stage, (b) state where each occurs in the cell, (c) identify the main products of each stage, and (d) calculate the total ATP yield from one glucose molecule.',
          solution: `**Cellular Respiration Overview:**

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP}$$

**(a) Four stages:**

1. **Glycolysis**
2. **Pyruvate Oxidation** (transition reaction)
3. **Krebs Cycle** (Citric Acid Cycle)
4. **Electron Transport Chain + Oxidative Phosphorylation**

**(b) Locations:**

**1. Glycolysis:**
- Location: **Cytoplasm** (cytosol)
- Anaerobic (doesn't require O₂)

**2. Pyruvate Oxidation:**
- Location: **Mitochondrial matrix**
- Entry into mitochondria

**3. Krebs Cycle:**
- Location: **Mitochondrial matrix**
- Aerobic (requires O₂ indirectly)

**4. Electron Transport Chain:**
- Location: **Inner mitochondrial membrane** (cristae)
- Requires O₂ as final electron acceptor

**(c) Products of each stage:**

**1. Glycolysis** (glucose → 2 pyruvate):
- **ATP:** 2 net (4 produced - 2 invested)
- **NADH:** 2
- **Pyruvate:** 2

**2. Pyruvate Oxidation** (2 pyruvate → 2 acetyl-CoA):
- **NADH:** 2
- **CO₂:** 2
- **Acetyl-CoA:** 2

**3. Krebs Cycle** (2 turns, one per acetyl-CoA):
- **ATP (GTP):** 2
- **NADH:** 6
- **FADH₂:** 2
- **CO₂:** 4

**4. Electron Transport Chain:**
- **ATP:** ~34 (from NADH and FADH₂)
- **H₂O:** 6 (O₂ reduced)

**(d) Total ATP yield:**

**From NADH:**
- Glycolysis: 2 NADH × 2.5 ATP = 5 ATP
- Pyruvate oxidation: 2 NADH × 2.5 ATP = 5 ATP  
- Krebs: 6 NADH × 2.5 ATP = 15 ATP
- **Subtotal:** 25 ATP

(Note: Glycolysis NADH may yield only 1.5 ATP each if using glycerol phosphate shuttle = 3 ATP total)

**From FADH₂:**
- Krebs: 2 FADH₂ × 1.5 ATP = 3 ATP

**From substrate-level phosphorylation:**
- Glycolysis: 2 ATP
- Krebs: 2 ATP (or GTP)
- **Subtotal:** 4 ATP

**Total (using malate-aspartate shuttle):**
$$\\text{Total} = 25 + 3 + 4 = 32 \\text{ ATP}$$

**Total (using glycerol phosphate shuttle):**
$$\\text{Total} = 23 + 3 + 4 = 30 \\text{ ATP}$$

$$\\boxed{\\text{Total ATP: 30-32 per glucose (most commonly cited: 30-38)}}$$

**Note:** Older textbooks cite 36-38 ATP using 3 ATP/NADH and 2 ATP/FADH₂. Modern estimates (accounting for proton leak and ATP/ADP transport) are lower: ~30-32 ATP.

**Summary Table:**

| Stage | Location | ATP | NADH | FADH₂ | CO₂ |
|-------|----------|-----|------|-------|-----|
| Glycolysis | Cytoplasm | 2 | 2 | 0 | 0 |
| Pyruvate ox. | Matrix | 0 | 2 | 0 | 2 |
| Krebs | Matrix | 2 | 6 | 2 | 4 |
| ETC | Inner membrane | ~26 | 0 | 0 | 0 |
| **TOTAL** | | **~30** | | | **6** |

**Efficiency:**
- Glucose: 686 kcal/mol
- ATP: 7.3 kcal/mol
- Efficiency: (30 × 7.3) / 686 = ~32%
- Rest lost as heat (maintains body temperature)`
        },
        {
          topicId: respirationTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'Explain the chemiosmotic theory of ATP synthesis: (a) describe how the electron transport chain creates a proton gradient, (b) explain how ATP synthase uses this gradient to make ATP, and (c) calculate how many H⁺ must flow through ATP synthase to make one ATP.',
          solution: `**Chemiosmotic Theory (Peter Mitchell, 1961):**

**(a) Electron Transport Chain - Creating the gradient:**

**Overview:**
ETC pumps H⁺ from matrix to intermembrane space, creating electrochemical gradient

**Four protein complexes + 2 mobile carriers:**

**Complex I (NADH dehydrogenase):**
- Accepts: 2e⁻ from NADH
- Passes to: Ubiquinone (CoQ)
- **Pumps:** 4 H⁺ out
- NADH → NAD⁺ + H⁺ + 2e⁻

**Complex II (Succinate dehydrogenase):**
- Accepts: 2e⁻ from FADH₂ (from Krebs cycle)
- Passes to: CoQ
- **Pumps:** 0 H⁺ (no pumping!)
- Lower entry point → less ATP

**Ubiquinone (CoQ):**
- Mobile carrier in membrane
- Carries electrons from Complex I/II to Complex III
- Also picks up H⁺ from matrix

**Complex III (Cytochrome bc₁ complex):**
- Accepts: 2e⁻ from CoQ
- Passes to: Cytochrome c
- **Pumps:** 4 H⁺ out
- Q-cycle mechanism

**Cytochrome c:**
- Mobile carrier (peripheral protein)
- Carries electrons from Complex III to Complex IV

**Complex IV (Cytochrome oxidase):**
- Accepts: 2e⁻ from cytochrome c
- Passes to: O₂ (final electron acceptor)
- **Pumps:** 2 H⁺ out
- Reaction: ½O₂ + 2H⁺ + 2e⁻ → H₂O

**Total H⁺ pumped:**
- Per NADH: 4 + 4 + 2 = **10 H⁺**
- Per FADH₂: 0 + 4 + 2 = **6 H⁺**

**Electrochemical gradient created:**
- **Chemical gradient (ΔpH):** ~0.5-1 pH units
  * Matrix pH ~8, intermembrane space pH ~7
- **Electrical gradient (ΔΨ):** ~180 mV (matrix negative)
- **Proton-motive force (PMF):**

$$\\Delta p = \\Delta\\Psi - \\frac{2.3RT}{F}\\Delta pH$$

At 37°C:
$$\\Delta p \\approx 180 - 60(1) = 220 \\text{ mV}$$

**(b) ATP Synthase - Using the gradient:**

**Structure:**

**F₀ portion (membrane-embedded):**
- c-ring: 8-15 subunits forming rotor
- Proton channel through a-subunit
- Anchored in membrane

**F₁ portion (matrix-facing):**
- 3α and 3β subunits (catalytic)
- γ-subunit (central stalk/rotor)
- Extends into matrix

**Mechanism (rotary catalysis):**

**Step 1:** H⁺ enters channel in F₀
- H⁺ binds to c-ring subunit
- Neutralizes negative charge (Asp/Glu residue)

**Step 2:** Rotation
- Binding of H⁺ causes c-ring to rotate
- Each H⁺ binding causes ~30° rotation (for 12-subunit c-ring)

**Step 3:** H⁺ release
- c-ring rotation brings H⁺ to exit channel
- H⁺ released into matrix
- c-ring subunit returns to start

**Step 4:** Mechanical energy → chemical energy
- γ-subunit (connected to c-ring) rotates
- Rotation changes conformation of β-subunits
- 3 β-subunits cycle through 3 states:

  1. **Open (O):** ADP + Pi bind
  2. **Loose (L):** Binding stimulated
  3. **Tight (T):** ATP formed and released

**Binding change mechanism:**
- All three β-subunits in different states simultaneously
- 120° rotation changes: O → L → T → O
- ATP formed spontaneously when in T state
- Energy used to RELEASE ATP, not form it!

**(c) H⁺ per ATP calculation:**

**Depends on c-ring size:**

Most organisms: **c-ring with 8-15 subunits**

**Complete rotation (360°):**
- c-ring: 10 subunits (common in mitochondria)
- 1 full rotation = 10 H⁺ through F₀
- 1 full rotation = 3 ATP made (3 β-subunits × 1 ATP each)

$$\\frac{\\text{H}^+}{\\text{ATP}} = \\frac{10}{3} \\approx 3.3 \\text{ H}^+\\text{/ATP}$$

**For different c-ring sizes:**
- 8 subunits: 8/3 = 2.7 H⁺/ATP
- 10 subunits: 10/3 = 3.3 H⁺/ATP
- 12 subunits: 12/3 = 4.0 H⁺/ATP
- 15 subunits: 15/3 = 5.0 H⁺/ATP

$$\\boxed{\\text{Approximately 3-4 H}^+ \\text{ per ATP (depends on organism)}}$$

**ATP yield from NADH:**

NADH → 10 H⁺ pumped

At 3.3 H⁺/ATP:
$$\\text{ATP} = \\frac{10}{3.3} \\approx 3 \\text{ ATP/NADH}$$

Modern estimates (accounting for ATP/ADP translocase):
$$\\text{ATP} \\approx 2.5 \\text{ ATP/NADH}$$

**FADH₂:**
$$\\text{ATP} = \\frac{6}{3.3} \\approx 1.8 \\approx 1.5 \\text{ ATP/FADH}_2$$

**Energy coupling:**
$$\\Delta G_{pmf} = n\\Delta p = (3.3)(220 \\text{ mV}) = 726 \\text{ mV}$$

Enough to drive ATP synthesis:
$$\\text{ADP} + \\text{P}_i \\rightarrow \\text{ATP} + \\text{H}_2\\text{O} \\quad \\Delta G = +30.5 \\text{ kJ/mol}$$

**Uncouplers:**
- DNP (2,4-dinitrophenol): carries H⁺ across membrane
- Bypasses ATP synthase
- Energy dissipated as heat (thermogenesis)
- Brown fat uses UCP1 (uncoupling protein) naturally`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Cellular Respiration')
  }

  // Topic 11: Photosynthesis
  const photoTopic = await prisma.topic.findUnique({
    where: { slug: 'photosynthesis' }
  })

  if (photoTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: photoTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Compare the light-dependent reactions and Calvin cycle: (a) where each occurs, (b) inputs and outputs of each, (c) the role of ATP and NADPH, and (d) why both are necessary for photosynthesis.',
          solution: `**Photosynthesis Overview:**

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light energy} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

**Two stages:** Light reactions + Calvin cycle

**(a) Locations:**

**Light-Dependent Reactions:**
- Location: **Thylakoid membrane** (and lumen)
- Requires: Light
- Part of chloroplast: grana (stacked thylakoids)

**Calvin Cycle (Light-Independent Reactions):**
- Location: **Stroma** (fluid-filled space around thylakoids)
- Doesn't require: Direct light (but needs ATP/NADPH from light reactions)
- Also called "dark reactions" (misleading - actually occur during day)

**(b) Inputs and Outputs:**

**Light-Dependent Reactions:**

**Inputs:**
- Light energy (photons)
- H₂O (12 molecules)
- ADP + Pi
- NADP⁺

**Outputs:**
- O₂ (6 molecules) - from water splitting
- ATP (18 molecules)
- NADPH (12 molecules)
- H⁺ gradient (powers ATP synthesis)

**Key reactions:**
1. **Photosystem II:** H₂O → O₂ + 4H⁺ + 4e⁻
2. **Electron transport:** Creates H⁺ gradient
3. **ATP synthase:** ADP + Pi → ATP
4. **Photosystem I:** NADP⁺ + H⁺ + 2e⁻ → NADPH

**Calvin Cycle (1 turn makes ½ glucose):**

**Inputs:**
- CO₂ (3 molecules per turn, 6 for glucose)
- ATP (9 molecules per turn, 18 for glucose)
- NADPH (6 molecules per turn, 12 for glucose)

**Outputs:**
- G3P (glyceraldehyde-3-phosphate) - 1 per turn, 2 for glucose
- ADP + Pi
- NADP⁺

**Net for 1 glucose:**
$$6\\text{CO}_2 + 18\\text{ATP} + 12\\text{NADPH} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 18\\text{ADP} + 18\\text{P}_i + 12\\text{NADP}^+$$

**(c) Role of ATP and NADPH:**

**In Light Reactions:**

**ATP:**
- Produced by chemiosmosis
- H⁺ gradient (lumen → stroma) drives ATP synthase
- Provides energy currency

**NADPH:**
- Produced by Photosystem I
- Electron carrier (reducing power)
- Carries high-energy electrons

**In Calvin Cycle:**

**ATP:**
- **Phase 2 (Reduction):** Phosphorylates 3-PGA → 1,3-bisphosphoglycerate
- **Phase 3 (Regeneration):** Phosphorylates RuMP → RuBP
- Provides energy for endergonic reactions
- 3 ATP per CO₂ fixed

**NADPH:**
- **Phase 2 (Reduction):** Reduces 1,3-BPG → G3P
- Donates electrons (and H⁺)
- Reduces CO₂ to carbohydrate level
- 2 NADPH per CO₂ fixed

**Ratio:** 3 ATP : 2 NADPH (per CO₂)

**(d) Why both are necessary:**

**Light Reactions provide energy:**
- Cannot make glucose without energy input
- ATP provides chemical energy
- NADPH provides reducing power (electrons + H⁺)

**Calvin Cycle fixes carbon:**
- Light reactions produce O₂, not carbohydrates
- Calvin cycle incorporates CO₂ into organic molecules
- Builds glucose from CO₂

**Interdependence:**

\`\`\`
Light Reactions  →  ATP + NADPH  →  Calvin Cycle
                                        ↓
                    ADP + NADP⁺  ←  G3P (glucose)
\`\`\`

**Cannot function independently:**

1. **Without light reactions:**
   - No ATP or NADPH
   - Calvin cycle stops
   - No glucose produced

2. **Without Calvin cycle:**
   - ATP and NADPH accumulate
   - Feedback inhibition
   - Light reactions slow/stop
   - No regeneration of NADP⁺, ADP

**Both needed for complete photosynthesis:**
$$\\boxed{\\text{Light reactions: energy capture → Calvin cycle: carbon fixation}}$$

**Summary Table:**

| Feature | Light Reactions | Calvin Cycle |
|---------|----------------|--------------|
| Location | Thylakoid membrane | Stroma |
| Needs light? | Yes (directly) | No (indirectly) |
| Input | H₂O, ADP, NADP⁺ | CO₂, ATP, NADPH |
| Output | O₂, ATP, NADPH | G3P (glucose) |
| Purpose | Capture light energy | Fix carbon |

**3 phases of Calvin Cycle:**
1. **Carbon fixation:** CO₂ + RuBP → 2(3-PGA) (via RuBisCO)
2. **Reduction:** 3-PGA → G3P (uses ATP + NADPH)
3. **Regeneration:** G3P → RuBP (uses ATP)`
        },
        {
          topicId: photoTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'Explain C4 and CAM photosynthesis as adaptations to hot, dry environments: (a) describe the problem with photorespiration in C3 plants, (b) explain how C4 plants avoid photorespiration (include anatomy and biochemistry), and (c) explain how CAM plants avoid water loss.',
          solution: `**Photosynthetic Adaptations:**

**(a) Photorespiration problem in C3 plants:**

**RuBisCO's dual function:**

Ribulose-1,5-bisphosphate carboxylase/oxygenase (RuBisCO) can catalyze two reactions:

**1. Carboxylation (desired):**
$$\\text{RuBP} + \\text{CO}_2 \\xrightarrow{\\text{RuBisCO}} 2 \\text{ 3-PGA}$$
→ Enters Calvin cycle → Makes glucose

**2. Oxygenation (wasteful):**
$$\\text{RuBP} + \\text{O}_2 \\xrightarrow{\\text{RuBisCO}} \\text{3-PGA} + \\text{2-phosphoglycolate}$$
→ Photorespiration pathway → Wastes energy

**Problem in hot, dry conditions:**
- Stomata close to prevent water loss
- CO₂ levels drop inside leaf
- O₂ levels rise (from light reactions)
- RuBisCO binds O₂ instead of CO₂
- **Photorespiration increases**

**Consequences:**
- No sugar produced from photorespiration
- Consumes ATP and releases CO₂
- Reduces photosynthetic efficiency by up to 50%
- Evolution of C₄ and CAM as solutions

**Photorespiration pathway:**
1. 2-phosphoglycolate → peroxisome
2. Converted to glycine → mitochondria
3. 2 glycine → 1 serine + CO₂
4. Serine → 3-PGA (back to Calvin cycle)
5. Net: Wastes 1 CO₂, uses 1 ATP

**(b) C4 Photosynthesis - Spatial separation:**

**Anatomy - Kranz anatomy:**

Two cell types in concentric rings:

**1. Mesophyll cells (outer):**
- Exposed to air spaces
- High CO₂ concentration maintained
- Contains PEP carboxylase

**2. Bundle-sheath cells (inner):**
- Surround vascular tissue
- Site of Calvin cycle
- Contains RuBisCO
- Low O₂, high CO₂ environment

**Biochemistry:**

**Step 1: CO₂ fixation in mesophyll cells**

**PEP carboxylase** (not RuBisCO!) fixes CO₂:

$$\\text{PEP} + \\text{CO}_2 \\xrightarrow{\\text{PEP carboxylase}} \\text{Oxaloacetate (4C)}$$

**Key advantage:**
- PEP carboxylase has **NO oxygenase activity**
- High affinity for CO₂ (works even at low [CO₂])
- Not inhibited by O₂

Oxaloacetate → Malate or Aspartate (4-carbon compounds)

**Step 2: Transport to bundle-sheath cells**

Malate diffuses through plasmodesmata

**Step 3: CO₂ release in bundle-sheath**

$$\\text{Malate} \\xrightarrow{\\text{decarboxylase}} \\text{Pyruvate (3C)} + \\text{CO}_2$$

**Step 4: Calvin cycle**

Released CO₂ enters Calvin cycle:
- High [CO₂] around RuBisCO
- Low [O₂] (thick bundle-sheath walls)
- Photorespiration minimized

**Step 5: Regeneration**

Pyruvate returns to mesophyll → regenerates PEP

**Energy cost:**
- C₃: 18 ATP per glucose
- C₄: 30 ATP per glucose (extra 12 ATP for PEP regeneration)
- Worth it in hot/dry environments!

**C4 plants:**
- Corn (maize), sugarcane, sorghum
- Crabgrass, many tropical grasses
- ~3% of plant species, but ~25% of terrestrial photosynthesis!

**(c) CAM Photosynthesis - Temporal separation:**

**Crassulacean Acid Metabolism (CAM):**

**Temporal separation** instead of spatial:
- Open stomata at **night** (cooler, less water loss)
- Close stomata during **day** (hot, dry)

**Night (stomata open):**

**Step 1:** CO₂ uptake
$$\\text{PEP} + \\text{CO}_2 \\xrightarrow{\\text{PEP carboxylase}} \\text{Oxaloacetate}$$

**Step 2:** Store as malate
$$\\text{Oxaloacetate} + \\text{NADH} \\rightarrow \\text{Malate}$$

**Step 3:** Accumulate in vacuole
- Malate stored as malic acid
- Vacuole becomes acidic (pH drops)
- Reaches high concentrations

**Day (stomata closed):**

**Step 4:** Release malate from vacuole

**Step 5:** Decarboxylation
$$\\text{Malate} \\rightarrow \\text{Pyruvate} + \\text{CO}_2$$

**Step 6:** Calvin cycle
- Released CO₂ enters Calvin cycle
- Uses light energy from light reactions
- High [CO₂] minimizes photorespiration

**Step 7:** Regenerate PEP
- Pyruvate → PEP (for night)

**Advantages:**
- Stomata closed during day → **minimal water loss**
- CO₂ fixed at night when cooler
- Can survive extreme drought

**Disadvantages:**
- Slower growth rate
- Large vacuoles needed for malate storage
- Limited by vacuole capacity

**CAM plants:**
- Cacti, succulents (jade plant)
- Pineapple, agave
- Some orchids
- ~10% of plant species

**Comparison:**

| Feature | C3 | C4 | CAM |
|---------|-------|-------|-------|
| CO₂ fixation | RuBisCO | PEP carboxylase | PEP carboxylase |
| Separation | None | Spatial (cells) | Temporal (day/night) |
| Photorespiration | High | Low | Low |
| Water use efficiency | Low | Medium | **High** |
| Energy cost | 18 ATP | 30 ATP | 30 ATP |
| Growth rate | Fast | Fast | Slow |
| Examples | Rice, wheat, oak | Corn, sugarcane | Cactus, pineapple |
| % of species | 85% | 3% | 10% |

$$\\boxed{\\text{C4: spatial separation; CAM: temporal separation; Both minimize photorespiration}}$$

**Optimal conditions:**
- **C3:** Cool, moist, normal light
- **C4:** Hot, sunny, moderate water
- **CAM:** Very hot, very dry, desert conditions`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Photosynthesis')
  }

  // Topic 12: Cell Signaling
  const signalingTopic = await prisma.topic.findUnique({
    where: { slug: 'cell-signaling' }
  })

  if (signalingTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: signalingTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Describe the three stages of cell signaling: (a) reception, (b) transduction, and (c) response. Use the epinephrine (adrenaline) signaling pathway as a specific example, explaining signal amplification.',
          solution: `**Cell Signaling - Three Stages:**

**(a) Reception:**

**Definition:** Signal molecule binds to receptor protein

**Epinephrine example:**
- **Signal molecule:** Epinephrine (hormone)
- **Receptor:** G-protein-coupled receptor (GPCR) on liver cell membrane
- **Location:** Extracellular surface of plasma membrane
- Epinephrine cannot cross membrane (hydrophilic)

**Specificity:**
- Only cells with epinephrine receptors respond
- Different receptors (α, β) → different responses

**(b) Transduction:**

**Definition:** Signal converted to form that brings about cellular response

**Epinephrine pathway (simplified):**

**Step 1:** Epinephrine binds → receptor changes shape

**Step 2:** Activated receptor activates **G protein**
- G protein exchanges GDP for GTP
- G protein dissociates, activated

**Step 3:** G protein activates **adenylyl cyclase** (enzyme in membrane)

**Step 4:** Adenylyl cyclase converts ATP → **cAMP** (second messenger)
$$\\text{ATP} \\xrightarrow{\\text{adenylyl cyclase}} \\text{cAMP} + \\text{PP}_i$$

**Step 5:** cAMP activates **protein kinase A (PKA)**
- PKA normally inactive (regulatory + catalytic subunits)
- cAMP binds regulatory subunits → releases catalytic subunits
- Active PKA phosphorylates target proteins

**Step 6:** PKA activates **phosphorylase kinase**

**Step 7:** Phosphorylase kinase activates **glycogen phosphorylase**

**(c) Response:**

**Definition:** Transduced signal triggers specific cellular response

**Epinephrine response:**

**Final enzyme:** Glycogen phosphorylase
$$\\text{Glycogen} \\xrightarrow{\\text{phosphorylase}} \\text{Glucose-1-phosphate} \\rightarrow \\text{Glucose}$$

**Cellular response:**
- Glycogen breakdown increases
- Glucose released into bloodstream
- Energy available for "fight or flight"

**Signal Amplification:**

**Cascade effect** - each step amplifies signal:

\`\`\`
1 epinephrine molecule
    ↓
~100 G proteins activated
    ↓
~1,000 adenylyl cyclase molecules activated
    ↓
~10,000 cAMP molecules produced
    ↓
~10,000 PKA activated
    ↓
~100,000 phosphorylase kinase activated
    ↓
~1,000,000 glycogen phosphorylase activated
    ↓
~100,000,000 glucose molecules released!
\`\`\`

**Amplification factor:** ~10⁸-fold (100 million)!

$$\\boxed{\\text{1 signal molecule} \\rightarrow 10^8 \\text{ response molecules}}$$

**Termination:**
- cAMP broken down by phosphodiesterase
- Removes second messenger
- PKA inactivated
- Signal stops

**Why amplification matters:**
- Small amount of hormone → large response
- Efficient use of signal molecules
- Allows rapid, massive cellular response

**Other examples:**
- **Insulin:** Promotes glucose uptake (tyrosine kinase receptor)
- **Growth factors:** Cell division (receptor tyrosine kinases)
- **Neurotransmitters:** Nerve impulse transmission (ligand-gated ion channels)`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Cell Signaling')
  }

  // Topic 13: Cell Cycle and Mitosis
  const mitosisTopic = await prisma.topic.findUnique({
    where: { slug: 'cell-cycle-mitosis' }
  })

  if (mitosisTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: mitosisTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Describe the cell cycle phases: (a) name and describe each phase of interphase, (b) outline the stages of mitosis (M phase), and (c) explain the role of checkpoints in regulating the cell cycle.',
          solution: `**Cell Cycle Overview:**

**Interphase (90% of cycle) + M phase (10%)**

**(a) Interphase Phases:**

**G₁ Phase (Gap 1):**
- **Duration:** Variable (hours to years)
- **Activities:**
  * Cell growth (increases in size)
  * Accumulates nutrients
  * Produces organelles, proteins
  * Normal metabolic activity
- **Commitment:** Decides whether to divide
- **G₁/S checkpoint** - "restriction point" or "start"

**Some cells exit to G₀:**
- **G₀ (Gap 0):** Non-dividing state
- Examples: Neurons (permanent), liver cells (can re-enter)

**S Phase (Synthesis):**
- **Duration:** 6-8 hours (typical)
- **Key event:** **DNA replication**
  * Each chromosome duplicated
  * Sister chromatids joined at centromere
  * 2n → still 2n (number of chromosomes) but DNA amount doubles
- Histone synthesis
- Centrosome duplication begins

**G₂ Phase (Gap 2):**
- **Duration:** 2-5 hours
- **Activities:**
  * Continued growth
  * Protein synthesis (especially for mitosis)
  * Centrosome duplication completes
  * Cell prepares for mitosis
- **G₂/M checkpoint**

**(b) M Phase (Mitosis + Cytokinesis):**

**Mitosis - Nuclear division (5 stages):**

**1. Prophase:**
- Chromatin condenses → visible chromosomes
- Each chromosome = 2 sister chromatids
- Centrosomes move to opposite poles
- Mitotic spindle begins forming
- Nuclear envelope starts fragmenting

**2. Prometaphase:**
- Nuclear envelope completely fragments
- Kinetochores form at centromeres
- Spindle microtubules attach to kinetochores
- Chromosomes begin moving

**3. Metaphase:**
- Chromosomes align at **metaphase plate** (cell equator)
- Kinetochores of sister chromatids attached to opposite poles
- **M checkpoint** (spindle checkpoint)
- All chromosomes must be attached before proceeding

**4. Anaphase:**
- Sister chromatids separate
- Move to opposite poles
- Spindle microtubules shorten
- Cell elongates
- Now have 2n chromosomes at each pole

**5. Telophase:**
- Nuclear envelopes re-form around each set
- Chromosomes decondense
- Spindle disassembles
- Cleavage furrow begins (animals) or cell plate forms (plants)

**Cytokinesis - Cytoplasmic division:**
- **Animals:** Contractile ring of actin/myosin → cleavage furrow
- **Plants:** Cell plate forms from Golgi vesicles → new cell wall

**Result:** 2 identical daughter cells (2n each if diploid parent)

**(c) Cell Cycle Checkpoints:**

**Purpose:** Ensure proper cell division, prevent errors

**G₁/S Checkpoint (Restriction Point):**
- **Location:** End of G₁, before S
- **Checks:**
  * Is cell large enough?
  * Adequate nutrients?
  * Growth signals present?
  * DNA damage?
- **Decision:**
  * ✓ Pass → Enter S phase (committed to divide)
  * ✗ Fail → Enter G₀ or undergo apoptosis

**Regulation:**
- **CDKs (cyclin-dependent kinases)** + **cyclins**
- p53 protein ("guardian of genome") - detects DNA damage
- Rb protein (retinoblastoma) - prevents S phase entry

**G₂/M Checkpoint:**
- **Location:** End of G₂, before mitosis
- **Checks:**
  * Is DNA fully replicated?
  * Any DNA damage?
  * Cell large enough?
- **Decision:**
  * ✓ Pass → Enter mitosis
  * ✗ Fail → Repair DNA or apoptosis

**M Checkpoint (Spindle Checkpoint):**
- **Location:** Metaphase
- **Checks:**
  * All chromosomes attached to spindle?
  * Kinetochores properly attached to opposite poles?
  * Proper tension on spindle fibers?
- **Decision:**
  * ✓ Pass → Anaphase proceeds (APC activated)
  * ✗ Fail → Wait until all attached

**Molecular control:**

**MPF (Maturation-Promoting Factor):**
- Cyclin + CDK complex
- Triggers entry into M phase
- Phosphorylates proteins needed for mitosis

**Cyclin levels fluctuate:**
\`\`\`
Cyclin
 level
   ^     /\\         /\\
   |    /  \\       /  \\
   |   /    \\     /    \\
   |  /      \\   /      \\
   |_/________\\_/_________> Time
     G1  S  G2 M  G1  S  G2 M
\`\`\`

**Cancer connection:**
- Mutations in checkpoint genes → uncontrolled division
- p53 mutations: ~50% of cancers
- Rb mutations: retinoblastoma, other cancers

$$\\boxed{\\text{Checkpoints ensure: DNA integrity, proper replication, correct chromosome attachment}}$$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Cell Cycle and Mitosis')
  }

  // Topic 14: Meiosis
  const meiosisTopic = await prisma.topic.findUnique({
    where: { slug: 'meiosis' }
  })

  if (meiosisTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: meiosisTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Compare mitosis and meiosis: (a) create a table comparing number of divisions, number of daughter cells, chromosome number, and genetic variation, (b) explain how crossing over and independent assortment create genetic diversity, and (c) calculate possible gamete combinations for an organism with n=3.',
          solution: `**Mitosis vs Meiosis:**

**(a) Comparison Table:**

| Feature | Mitosis | Meiosis |
|---------|---------|---------|
| **Purpose** | Growth, repair, asexual reproduction | Sexual reproduction (gamete formation) |
| **Number of divisions** | 1 | 2 (Meiosis I + II) |
| **Daughter cells produced** | 2 | 4 |
| **Chromosome number** | Diploid (2n) → 2 diploid (2n) | Diploid (2n) → 4 haploid (n) |
| **Genetic variation** | Identical to parent (clones) | Genetically unique |
| **Homologous pairing** | No synapsis | Yes (Prophase I) |
| **Crossing over** | No | Yes (Prophase I) |
| **Where occurs** | Somatic cells (body) | Germ cells (gonads) |
| **In humans** | 2n=46 → 2 cells with 46 | 2n=46 → 4 cells with 23 |

**(b) Sources of Genetic Diversity:**

**1. Crossing Over (Recombination):**

**When:** Prophase I of meiosis I

**Process:**
- Homologous chromosomes pair up (**synapsis**)
- Form **tetrads** (4 chromatids total, 2 per chromosome)
- **Chiasmata** form - points where chromatids cross
- Non-sister chromatids exchange DNA segments
- Chromatids break and rejoin at same position

**Result:**
- **Recombinant chromosomes** with new allele combinations
- Mix of maternal and paternal genes on same chromosome
- Occurs multiple times per chromosome pair (1-3 crossovers typical)

**Example:**
\`\`\`
Before crossing over:
Maternal: A---B---C
Paternal: a---b---c

After crossing over:
Recombinant 1: A---b---c  (maternal-paternal mix)
Recombinant 2: a---B---C  (paternal-maternal mix)
\`\`\`

**Frequency:**
- Genes far apart → more likely to cross over
- Genes close together → less likely (linked genes)
- Used to create genetic maps

**2. Independent Assortment:**

**When:** Metaphase I of meiosis I

**Process:**
- Homologous pairs line up randomly at metaphase plate
- Maternal and paternal chromosomes orient independently
- Each pair's orientation independent of other pairs
- Random which homolog goes to which pole

**Number of combinations:**

$$\\text{Possible combinations} = 2^n$$

where n = haploid number

**Example (n=3):**
- 3 homologous pairs
- Each pair can orient 2 ways
- Total: 2³ = 8 different gamete combinations

**Visualization:**
\`\`\`
Pair 1: M₁ or P₁
Pair 2: M₂ or P₂  
Pair 3: M₃ or P₃

Possible gametes (8 total):
1. M₁M₂M₃  (all maternal)
2. M₁M₂P₃
3. M₁P₂M₃
4. M₁P₂P₃
5. P₁M₂M₃
6. P₁M₂P₃
7. P₁P₂M₃
8. P₁P₂P₃  (all paternal)
\`\`\`

**3. Random Fertilization:**

**Additional diversity:**
- Any male gamete can fuse with any female gamete
- For humans (n=23):
  * Male: 2²³ = 8.4 million possible sperm
  * Female: 2²³ = 8.4 million possible eggs
  * Combinations: (2²³)² = 70 trillion possible zygotes!

**Without crossing over!** With crossing over → essentially infinite variation

**(c) Calculation for n=3:**

**From independent assortment alone:**

$$\\text{Gamete types} = 2^n = 2^3 = 8$$

$$\\boxed{8 \\text{ different gamete types possible}}$$

**From one parent:** 8 types
**From both parents (after fertilization):**

$$\\text{Zygote combinations} = 2^n \\times 2^n = 2^{2n}$$

$$\\text{Combinations} = 2^6 = 64$$

$$\\boxed{64 \\text{ possible genetic combinations in offspring}}$$

**This is WITHOUT crossing over!**

**With crossing over:**
- Each homologous pair can undergo recombination
- Effectively infinite combinations
- No two siblings identical (except identical twins)

**Total genetic diversity formula:**

$$\\text{Diversity} = 2^n \\text{ (assortment)} \\times \\text{(crossovers per pair)}^{\\text{number of pairs}} \\times 2^n \\text{ (mate)}$$

**Why sexual reproduction evolved:**
- Genetic variation → adaptation → evolution
- Different combinations → some survive changing environments
- Eliminates harmful mutations more efficiently (genetic load)

$$\\boxed{\\text{Meiosis creates variation via crossing over + independent assortment}}$$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Meiosis')
  }

  // Topic 15: Mendelian Genetics
  const mendelianTopic = await prisma.topic.findUnique({
    where: { slug: 'mendelian-genetics' }
  })

  if (mendelianTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: mendelianTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'In pea plants, tall (T) is dominant over short (t), and yellow seeds (Y) are dominant over green seeds (y). Cross a heterozygous tall, heterozygous yellow plant (TtYy) with a short, green plant (ttyy). (a) Set up a Punnett square, (b) determine the phenotypic ratio, and (c) calculate the probability of getting a tall plant with green seeds.',
          solution: `**Given:**
- Parent 1: TtYy (tall, yellow - heterozygous for both)
- Parent 2: ttyy (short, green - homozygous recessive)
- T = tall (dominant), t = short
- Y = yellow (dominant), y = green

**(a) Punnett Square Setup:**

**Testcross** (heterozygote × homozygous recessive)

**Parent 1 gametes (TtYy):** TY, Ty, tY, ty (4 types)
**Parent 2 gametes (ttyy):** ty only (1 type)

**Punnett Square:**

\`\`\`
         |  ty
    -----|--------
    TY   | TtYy (tall, yellow)
    -----|--------
    Ty   | Ttyy (tall, green)
    -----|--------
    tY   | ttYy (short, yellow)
    -----|--------
    ty   | ttyy (short, green)
\`\`\`

**Offspring genotypes:**
- TtYy: tall, yellow
- Ttyy: tall, green
- ttYy: short, yellow
- ttyy: short, green

**(b) Phenotypic Ratio:**

Count each phenotype:
- Tall, yellow: 1 (TtYy)
- Tall, green: 1 (Ttyy)
- Short, yellow: 1 (ttYy)
- Short, green: 1 (ttyy)

$$\\boxed{\\text{Phenotypic ratio: } 1:1:1:1}$$

Or grouped:
- Tall: 2 (50%)
- Short: 2 (50%)
- Yellow: 2 (50%)
- Green: 2 (50%)

**(c) Probability of tall with green seeds:**

**Phenotype:** Tall, green
**Genotype:** Ttyy

From Punnett square: 1 out of 4 offspring

$$P(\\text{tall, green}) = \\frac{1}{4}$$

$$\\boxed{\\text{Probability} = 25\\% \\text{ or } 0.25}$$

**Alternative calculation (using multiplication rule):**

$$P(\\text{tall}) = P(T-) = \\frac{1}{2}$$
$$P(\\text{green}) = P(yy) = \\frac{1}{2}$$

Since traits assort independently:
$$P(\\text{tall AND green}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

**Key Concept - Testcross:**
- Crossing with homozygous recessive reveals genotype of unknown
- Used to determine if organism is homozygous or heterozygous
- Mendel used this to confirm his laws

**Mendel's Laws Applied:**
1. **Law of Segregation:** Each gamete gets one allele per gene
2. **Law of Independent Assortment:** T/t segregates independently of Y/y`
        },
        {
          topicId: mendelianTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'In a dihybrid cross (AaBb × AaBb), where both traits show complete dominance: (a) determine the phenotypic ratio of offspring, (b) calculate the probability of offspring being homozygous for both traits, and (c) what fraction of the dominant phenotype offspring are homozygous dominant for at least one trait?',
          solution: `**Given:** AaBb × AaBb (dihybrid cross)
- Both traits show complete dominance
- A and B are dominant alleles

**(a) Phenotypic Ratio:**

**Classic 16-square Punnett square:**

Gametes from each parent: AB, Ab, aB, ab (each ¼ probability)

\`\`\`
        AB      Ab      aB      ab
   |-------|-------|-------|-------|
AB | AABB  | AABb  | AaBB  | AaBb  |
   | A-B-  | A-B-  | A-B-  | A-B-  |
   |-------|-------|-------|-------|
Ab | AABb  | AAbb  | AaBb  | Aabb  |
   | A-B-  | A-bb  | A-B-  | A-bb  |
   |-------|-------|-------|-------|
aB | AaBB  | AaBb  | aaBB  | aaBb  |
   | A-B-  | A-B-  | aaB-  | aaB-  |
   |-------|-------|-------|-------|
ab | AaBb  | Aabb  | aaBb  | aabb  |
   | A-B-  | A-bb  | aaB-  | aabb  |
\`\`\`

**Phenotype counts:**
- A-B- (both dominant): 9
- A-bb (A dominant, b recessive): 3
- aaB- (a recessive, B dominant): 3
- aabb (both recessive): 1

$$\\boxed{\\text{Phenotypic ratio: } 9:3:3:1}$$

This is Mendel's classic dihybrid ratio!

**(b) Probability of homozygous for both traits:**

**Homozygous for both** means: AABB or AAbb or aaBB or aabb

From Punnett square:
- AABB: 1/16
- AAbb: 1/16
- aaBB: 1/16
- aabb: 1/16

$$P(\\text{homozygous both}) = \\frac{1}{16} + \\frac{1}{16} + \\frac{1}{16} + \\frac{1}{16}$$

$$\\boxed{P = \\frac{4}{16} = \\frac{1}{4} = 25\\%}$$

**Alternative method:**

$$P(\\text{homozygous for A}) = P(AA) + P(aa) = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$

$$P(\\text{homozygous for B}) = P(BB) + P(bb) = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$

$$P(\\text{both}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

**(c) Fraction of A-B- that are homozygous dominant for ≥1 trait:**

**Step 1:** Identify A-B- offspring (9 total)

From Punnett square, A-B- genotypes:
1. AABB (1) - homozygous for BOTH
2. AABb (2) - homozygous for A only
3. AaBB (2) - homozygous for B only
4. AaBb (4) - heterozygous for both

**Step 2:** Which are homozygous dominant for ≥1 trait?

- AABB: homozygous dominant AA and BB ✓
- AABb: homozygous dominant AA ✓
- AaBB: homozygous dominant BB ✓
- AaBb: neither ✗

**Count:** 1 + 2 + 2 = 5 out of 9

$$\\boxed{\\text{Fraction} = \\frac{5}{9} \\approx 55.6\\%}$$

**Verification:**

Total A-B-: 9
- Homozygous dominant (AA or BB): 5
- Heterozygous for both (AaBb): 4
- Check: 5 + 4 = 9 ✓

**Key Insights:**

**Genotypic ratio (9:3:3:1 expansion):**
- AABB: 1
- AABb: 2
- AaBB: 2
- AaBb: 4
- AAbb: 1
- Aabb: 2
- aaBB: 1
- aaBb: 2
- aabb: 1
**Total:** 16 (ratio 1:2:1:2:4:2:1:2:1)

**Probabilities for independent traits:**
- Each trait alone: 3:1 ratio (¾ dominant : ¼ recessive)
- Combined: (¾)² : (¾)(¼) : (¼)(¾) : (¼)² = 9/16 : 3/16 : 3/16 : 1/16`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Mendelian Genetics')
  }

  // Topic 16: Non-Mendelian Genetics
  const nonMendelianTopic = await prisma.topic.findUnique({
    where: { slug: 'non-mendelian-genetics' }
  })

  if (nonMendelianTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: nonMendelianTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'Explain three types of non-Mendelian inheritance: (a) incomplete dominance (use snapdragons as example), (b) codominance (use human ABO blood types), and (c) polygenic inheritance (use human skin color). Include genotypes, phenotypes, and ratios.',
          solution: `**Non-Mendelian Inheritance Patterns:**

**(a) Incomplete Dominance:**

**Definition:** Heterozygote shows INTERMEDIATE phenotype between two homozygotes

**Example: Snapdragon flower color**

**Alleles:**
- C^R = red allele
- C^W = white allele
- Neither is fully dominant

**Genotypes and Phenotypes:**
- C^R C^R : Red flowers
- C^R C^W : **Pink flowers** (intermediate!)
- C^W C^W : White flowers

**Cross: Pink × Pink (C^R C^W × C^R C^W)**

\`\`\`
         C^R     C^W
    |--------|--------|
C^R | C^R C^R| C^R C^W|
    |  Red   |  Pink  |
    |--------|--------|
C^W | C^R C^W| C^W C^W|
    |  Pink  | White  |
\`\`\`

**Phenotypic ratio:** 1 red : 2 pink : 1 white

**Key difference from complete dominance:**
- Phenotypic ratio = Genotypic ratio (1:2:1)
- In complete dominance: 3:1 phenotypic, but 1:2:1 genotypic

**Other examples:**
- Wavy hair in humans (straight × curly → wavy)
- Hypercholesterolemia (heterozygotes have intermediate cholesterol)

**(b) Codominance:**

**Definition:** BOTH alleles fully expressed in heterozygote (no blending)

**Example: ABO Blood Types**

**Alleles:**
- I^A = produces A antigens (dominant)
- I^B = produces B antigens (dominant)
- i = produces no antigens (recessive)
- I^A and I^B are **codominant** to each other

**Genotypes and Phenotypes:**

| Genotype | Phenotype | Antigens | Can receive from |
|----------|-----------|----------|------------------|
| I^A I^A or I^A i | Type A | A | A, O |
| I^B I^B or I^B i | Type B | B | B, O |
| I^A I^B | **Type AB** | **A and B** | A, B, AB, O |
| ii | Type O | None | O only |

**Cross: Type A (I^A i) × Type B (I^B i)**

\`\`\`
         I^A      i
    |--------|--------|
I^B | I^A I^B|  I^B i |
    | Type AB| Type B |
    |--------|--------|
 i  |  I^A i |   ii   |
    | Type A | Type O |
\`\`\`

**Phenotypic ratio:** 1 AB : 1 A : 1 B : 1 O

$$\\boxed{\\text{All 4 blood types possible from this cross!}}$$

**Codominance vs Incomplete Dominance:**
- **Codominance:** Both traits visible (AB has A AND B antigens)
- **Incomplete:** Blended trait (pink is blend of red and white)

**Other codominant examples:**
- MN blood groups (M, N, MN)
- Roan coat color in cattle (red + white hairs = roan)

**(c) Polygenic Inheritance:**

**Definition:** Multiple genes control ONE trait; produces continuous variation

**Example: Human Skin Color**

**Model (simplified):**
- At least 3 genes involved (A, B, C), each with 2 alleles
- Capital letters (A, B, C) = adds melanin (dark)
- Lowercase (a, b, c) = less melanin (light)
- Each capital letter has **additive effect**

**Possible genotypes:**
- Darkest: AABBCC (6 capital letters)
- Lightest: aabbcc (0 capital letters)
- Intermediate: Various combinations (1-5 capital letters)

**Number of capital letters → skin tone:**
- 0: Very light
- 1: Light
- 2: Light-medium
- 3: Medium
- 4: Medium-dark
- 5: Dark
- 6: Very dark

**Cross: AaBbCc × AaBbCc**

**Offspring distribution (simplified):**

Using probability:
- Each gene acts independently
- Aa × Aa: ¼ AA, ½ Aa, ¼ aa

**Distribution of phenotypes:**
- 0 capitals: 1/64 (very light)
- 1 capital: 6/64
- 2 capitals: 15/64
- 3 capitals: 20/64 (most common - **bell curve peak**)
- 4 capitals: 15/64
- 5 capitals: 6/64
- 6 capitals: 1/64 (very dark)

**Bell curve distribution:**
\`\`\`
Frequency
    ^        ***
    |       *   *
    |      *     *
    |     *       *
    |    *         *
    |___*___________*___> Skin color
    Light  Medium  Dark
\`\`\`

**Characteristics:**
- **Continuous variation** (not discrete categories)
- **Bell-shaped curve** (normal distribution)
- **Environmental factors** also contribute (sun exposure)
- Most offspring near middle (average of parents)

**Other polygenic traits:**
- Height (100+ genes!)
- Eye color (multiple genes, not just one)
- Intelligence (many genes + environment)
- Fingerprint patterns

**Summary Comparison:**

| Pattern | Heterozygote | Example | Ratio |
|---------|-------------|---------|-------|
| Complete dominance | Like dominant | Pea plants | 3:1 |
| Incomplete dominance | Intermediate | Snapdragons | 1:2:1 |
| Codominance | Both expressed | ABO blood | Varies |
| Polygenic | Continuous variation | Height, skin color | Bell curve |

$$\\boxed{\\text{Non-Mendelian: incomplete dominance, codominance, polygenic inheritance}}$$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Non-Mendelian Genetics')
  }

  // Topic 17: DNA Replication
  const dnaRepTopic = await prisma.topic.findUnique({
    where: { slug: 'dna-replication' }
  })

  if (dnaRepTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: dnaRepTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'Describe the process of DNA replication in detail: (a) explain why replication is semiconservative, (b) list the key enzymes involved and their functions, (c) explain the leading vs lagging strand synthesis, and (d) describe how Okazaki fragments are processed.',
          solution: `**DNA Replication - Detailed Process:**

**(a) Semiconservative Replication:**

**Definition:** Each new DNA molecule contains one original (parental) strand and one newly synthesized strand

**Meselson-Stahl Experiment (1958):**

Proved semiconservative model vs conservative or dispersive

**Process:**
1. Parent DNA: both strands are "old"
2. After replication: each daughter DNA has:
   - One parental (template) strand
   - One newly synthesized strand

**Why "semiconservative":**
- Each strand serves as template
- Base pairing (A-T, G-C) ensures accurate copying
- Original information conserved in each new molecule

$$\\boxed{\\text{Parent DNA} \\xrightarrow{\\text{replication}} \\text{2 hybrid DNAs (old + new strands)}}$$

**(b) Key Enzymes and Functions:**

**1. Helicase:**
- **Function:** Unwinds double helix
- Breaks hydrogen bonds between base pairs
- Creates replication fork (Y-shaped structure)
- Uses ATP energy

**2. Single-Strand Binding Proteins (SSB):**
- **Function:** Bind to separated DNA strands
- Prevent strands from re-annealing
- Protect single-stranded DNA from nucleases
- Keep strands straight for replication

**3. Topoisomerase (DNA Gyrase):**
- **Function:** Relieves tension ahead of replication fork
- Cuts, untwists, and rejoins DNA
- Prevents supercoiling
- Without it: DNA would get too twisted and break

**4. Primase:**
- **Function:** Synthesizes RNA primers
- RNA polymerase (doesn't need primer itself)
- Makes short RNA sequences (~10 nucleotides)
- Provides 3'-OH for DNA polymerase to start

**5. DNA Polymerase III (main enzyme in prokaryotes):**
- **Function:** Synthesizes new DNA strand
- Adds nucleotides in 5' → 3' direction ONLY
- Requires 3'-OH group (needs primer)
- Has 3' → 5' exonuclease (proofreading)
- ~1000 nucleotides/second!

**6. DNA Polymerase I:**
- **Function:** Removes RNA primers
- Fills in gaps with DNA
- 5' → 3' exonuclease activity (removes primers)
- 5' → 3' polymerase activity (fills gaps)

**7. DNA Ligase:**
- **Function:** Seals nicks in sugar-phosphate backbone
- Joins Okazaki fragments
- Forms phosphodiester bonds
- Creates continuous strand

**(c) Leading vs Lagging Strand:**

**Replication fork structure:**
\`\`\`
        5' ←——————— 3'  (parental)
       /              \\
      /                \\
    3' —————————————→ 5'  (parental)
   
   Leading strand →
   ← Lagging strand (Okazaki fragments)
\`\`\`

**Leading Strand:**
- Synthesized **continuously** in 5' → 3' direction
- Same direction as replication fork movement
- Only ONE primer needed (at origin)
- DNA Pol III adds nucleotides smoothly
- No interruptions

**Lagging Strand:**
- Synthesized **discontinuously** in 5' → 3' direction
- Opposite direction to fork movement
- Requires MULTIPLE primers
- Made in short segments (Okazaki fragments)
  * Prokaryotes: 1000-2000 nucleotides
  * Eukaryotes: 100-200 nucleotides

**Why the difference?**
- DNA polymerase can ONLY synthesize 5' → 3'
- Two parental strands are antiparallel
- Fork moves in one direction
- Leading strand "lucky" - goes with fork
- Lagging strand "unlucky" - goes against fork, must be made backwards in chunks

**(d) Processing Okazaki Fragments:**

**Step-by-step:**

**Step 1: Primase makes RNA primer**
- Primase synthesizes short RNA primer (~10 nt)
- Provides 3'-OH for DNA Pol III

**Step 2: DNA Pol III synthesizes Okazaki fragment**
- Extends from primer in 5' → 3' direction
- Adds ~1000-2000 nucleotides (bacteria)
- Stops when it reaches previous primer

**Step 3: DNA Pol I removes primer and fills gap**
- 5' → 3' exonuclease removes RNA primer ahead
- Simultaneously fills gap with DNA
- "Nick translation" process

**Step 4: DNA ligase seals nick**
- Catalyzes phosphodiester bond formation
- Links 3'-OH of one fragment to 5'-phosphate of next
- ATP required (in eukaryotes) or NAD+ (in prokaryotes)
- Creates continuous strand

**Detailed view:**
\`\`\`
Before processing:
5'—DNA—3' [RNA primer] 5'—DNA—3' [RNA primer] 5'—DNA—3'
                ↓
DNA Pol I removes primers:
5'—DNA—3'      5'—DNA—3'      5'—DNA—3'
        [gap]          [gap]
                ↓
DNA Pol I fills gaps:
5'—DNA—DNA—3'  5'—DNA—DNA—3'  5'—DNA—DNA—3'
           [nick]         [nick]
                ↓
DNA Ligase seals:
5'—DNA—DNA—DNA—DNA—DNA—DNA—DNA—DNA—3'
(continuous strand!)
\`\`\`

**Summary Table:**

| Feature | Leading | Lagging |
|---------|---------|---------|
| Synthesis | Continuous | Discontinuous |
| Direction | Toward fork | Away from fork |
| Primers | 1 | Many |
| Fragments | None | Okazaki fragments |
| Processing | Simple | Complex (remove primers, ligate) |

**Proofreading and Error Rate:**

**3' → 5' exonuclease (proofreading):**
- DNA Pol III checks each nucleotide added
- If mismatch: removes it, tries again
- Reduces errors from 1/10^5 to 1/10^7

**Mismatch repair (post-replication):**
- Separate system checks after replication
- Further reduces errors to 1/10^10
- Incredibly accurate!

$$\\boxed{\\text{Replication: bidirectional, semiconservative, highly accurate (error rate } < 10^{-10})}$$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: DNA Replication')
  }

  // Topic 18: Transcription and Translation
  const transcriptionTopic = await prisma.topic.findUnique({
    where: { slug: 'transcription-rna-processing' }
  })

  if (transcriptionTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: transcriptionTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A gene has the following DNA template strand: 3\'-TACGCAATGCGA-5\'. (a) Write the mRNA sequence transcribed from this template, (b) identify the start and stop codons, and (c) write the amino acid sequence that would be translated (use the genetic code).',
          solution: `**Given:** Template strand: 3'-TACGCAATGCGA-5'

**(a) mRNA sequence:**

**Transcription rules:**
- RNA polymerase reads template 3' → 5'
- Synthesizes mRNA 5' → 3' (antiparallel)
- Uses complementary base pairing:
  * A (DNA) → U (RNA)
  * T (DNA) → A (RNA)
  * G (DNA) → C (RNA)
  * C (DNA) → G (RNA)

**Step-by-step:**

\`\`\`
Template (3'→5'):  3'- T A C G C A A T G C G A -5'
                        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
mRNA (5'→3'):      5'- A U G C G U U A C G C U -3'
\`\`\`

$$\\boxed{\\text{mRNA: } 5\\text{'-AUGCGUUACGCU-}3'}$$

**(b) Start and stop codons:**

**Start codon:** AUG
- Position: First codon (nucleotides 1-3)
- Codes for: Methionine (Met)
- Signals: Translation start
- All proteins begin with Met (often removed later)

**Looking for stop codons:**
- UAA, UAG, UGA = stop codons
- Check the sequence: AUG CGU UAC GCU
- **No stop codon present** in this sequence!

Note: This appears to be partial gene sequence. A real gene would have:
- Promoter (before start)
- Start codon (AUG) ✓
- Coding sequence
- Stop codon (UAA, UAG, or UGA)
- Terminator

$$\\boxed{\\text{Start: AUG (position 1-3); Stop: none in this sequence}}$$

**(c) Amino acid sequence:**

**Translation using genetic code:**

Divide mRNA into codons (3-nucleotide groups):

\`\`\`
mRNA:    5'- AUG  CGU  UAC  GCU -3'
Codons:      ↓    ↓    ↓    ↓
\`\`\`

**Using genetic code table:**

| Codon | Amino Acid | Abbreviation |
|-------|------------|--------------|
| AUG | Methionine | Met (M) |
| CGU | Arginine | Arg (R) |
| UAC | Tyrosine | Tyr (Y) |
| GCU | Alanine | Ala (A) |

**Polypeptide:**

$$\\boxed{\\text{Met-Arg-Tyr-Ala}}$$

Or using single-letter code: **MRYA**

**Complete picture:**

\`\`\`
DNA coding strand:    5'-ATGCGTTACGCT-3' (not given, but complementary to template)
DNA template strand:  3'-TACGCAATGCGA-5' (given)
                           ↓ Transcription
mRNA:                 5'-AUGCGUUACGCU-3'
                           ↓ Translation
Polypeptide:          Met-Arg-Tyr-Ala (N-terminus → C-terminus)
\`\`\`

**Key Concepts:**

**Genetic Code Properties:**
1. **Triplet code:** 3 nucleotides = 1 amino acid
2. **Degenerate:** Multiple codons for same amino acid
   - CGU, CGC, CGA, CGG all code for Arg
3. **Universal:** Same code in nearly all organisms
4. **Unambiguous:** Each codon specifies only ONE amino acid
5. **Non-overlapping:** Codons read in sequence, no overlap

**Reading frame:**
- AUG sets the reading frame
- Must read in correct groups of 3
- Frameshift mutation → wrong amino acids!

**Example if we shift by +1:**
- Normal: AUG CGU UAC GCU
- +1 shift: A UGC GUU ACG CU → different amino acids!

**Why AUG is special:**
- Only start codon (in eukaryotes)
- Also codes for Met in middle of protein
- Context determines if it's start or internal Met`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Transcription and RNA Processing')
  }

  // Topic 19: Translation
  const translationTopic = await prisma.topic.findUnique({
    where: { slug: 'translation' }
  })

  if (translationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: translationTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'Describe the three stages of translation: (a) initiation - including the role of the ribosome, mRNA, and initiator tRNA, (b) elongation - including the roles of aminoacyl-tRNA, peptidyl transferase, and translocation, and (c) termination - including release factors.',
          solution: `**Translation - Protein Synthesis:**

**Overview:** mRNA → Protein (requires ribosomes, tRNAs, amino acids, energy)

**(a) Initiation:**

**Goal:** Assemble ribosome on mRNA at start codon

**Components needed:**
- mRNA with 5' cap and start codon (AUG)
- Small ribosomal subunit (40S in eukaryotes)
- Large ribosomal subunit (60S in eukaryotes)
- Initiator tRNA (Met-tRNA^Met)
- Initiation factors (IF1, IF2, IF3 in prokaryotes; eIFs in eukaryotes)
- GTP

**Step-by-step (Eukaryotes):**

**Step 1:** Small subunit binds to 5' cap of mRNA
- With help of initiation factors
- Scans along mRNA for start codon (5' → 3' direction)

**Step 2:** Small subunit finds AUG
- Kozak sequence helps identify correct AUG
- Usually first AUG after 5' cap

**Step 3:** Initiator tRNA (with Met) binds
- Anticodon (UAC) pairs with start codon (AUG)
- Located in **P site** of ribosome
- GTP hydrolysis provides energy

**Step 4:** Large subunit joins
- Creates complete 80S ribosome
- Forms three binding sites:
  * **A site** (aminoacyl-tRNA): incoming tRNA
  * **P site** (peptidyl-tRNA): holds growing chain
  * **E site** (exit): departing tRNA

**Ribosome structure after initiation:**
\`\`\`
        Large subunit (60S)
    [E site][P site][A site]
           [Met-tRNA]  [empty]
    ————————————————————————————
        5'...AUG NNN NNN...3' (mRNA)
        Small subunit (40S)
\`\`\`

**(b) Elongation:**

**Goal:** Add amino acids one by one to growing polypeptide

**Cycle repeats for each codon:**

**Step 1: Aminoacyl-tRNA binding (Codon Recognition)**

- **Aminoacyl-tRNA** (charged tRNA with amino acid) enters **A site**
- Codon-anticodon pairing checked
- **EF-Tu** (elongation factor) escorts tRNA with GTP
- Correct pairing → GTP hydrolysis → EF-Tu released
- Wrong pairing → tRNA rejected (proofreading!)

**Step 2: Peptide bond formation**

- **Peptidyl transferase** (ribozyme in large subunit rRNA!)
- Catalyzes peptide bond between:
  * Amino acid in P site (attached to growing chain)
  * Amino acid in A site (new amino acid)
- **Nucleophilic attack:** amino group of A-site aa on carbonyl of P-site aa
- Growing polypeptide now attached to A-site tRNA
- P-site tRNA now "deacylated" (no amino acid)

**Chemical reaction:**
\`\`\`
P site: tRNA—[Met-Arg-Tyr-]
                    +
A site: tRNA—[Ala]
        ↓ peptidyl transferase
P site: tRNA (empty)
A site: tRNA—[Met-Arg-Tyr-Ala]
\`\`\`

**Step 3: Translocation**

- **EF-G** (elongation factor G) with GTP binds
- Ribosome moves exactly **3 nucleotides** (1 codon) in 5' → 3' direction
- **tRNA movements:**
  * A-site tRNA (with polypeptide) → **P site**
  * P-site tRNA (empty) → **E site**
  * E-site tRNA → released
  * A site now empty for next aminoacyl-tRNA
- GTP hydrolysis powers movement

**After one cycle:**
\`\`\`
    [E site][P site][A site]
     [empty][tRNA—chain][empty]
    ————————————————————————————
    5'...AUG ARG TYR ALA SER...3'
              (next codon ready)
\`\`\`

**Elongation repeats** until stop codon reaches A site

**Speed:** ~20 amino acids/second in eukaryotes, ~60/second in prokaryotes!

**(c) Termination:**

**Goal:** Release completed polypeptide when stop codon reached

**Stop codons:** UAA, UAG, UGA (no tRNA matches these!)

**Step 1: Recognition**
- Stop codon enters **A site**
- No tRNA with matching anticodon
- **Release factor (RF)** recognizes stop codon
  * Prokaryotes: RF1 (UAA, UAG) or RF2 (UAA, UGA)
  * Eukaryotes: eRF1 (all three stop codons)

**Step 2: Hydrolysis**
- Release factor binds in A site (mimics tRNA structure!)
- Activates **peptidyl transferase**
- Instead of forming peptide bond, **hydrolyzes** bond between:
  * Polypeptide and tRNA in P site
- Adds H₂O instead of amino acid
- Polypeptide released with C-terminus carboxyl group (-COOH)

**Chemical reaction:**
\`\`\`
tRNA—[polypeptide] + H₂O → tRNA + polypeptide-COOH
\`\`\`

**Step 3: Ribosome dissociation**
- **RF3** (prokaryotes) or **eRF3** (eukaryotes) with GTP
- GTP hydrolysis
- Ribosomal subunits separate
- mRNA released
- Deacylated tRNA released
- Components recycled for next round

**Post-translational processing:**
- Initial Met often removed
- Protein folding (chaperones help)
- Chemical modifications:
  * Phosphorylation
  * Glycosylation
  * Acetylation
  * Disulfide bonds
- Protein targeting to destination

**Summary Table:**

| Stage | Key Events | Factors | Energy |
|-------|-----------|---------|--------|
| **Initiation** | Ribosome assembly at AUG | IFs | GTP |
| **Elongation** | Amino acid addition (cycle) | EF-Tu, EF-G | GTP (2 per aa) |
| **Termination** | Release at stop codon | RFs | GTP |

**Energy cost:**
- ~4 ATP equivalents per amino acid:
  * 2 GTP for elongation (EF-Tu + EF-G)
  * 1 ATP to charge tRNA (aminoacyl-tRNA synthetase)
  * 1 GTP for initiation/termination (amortized)

**Accuracy:**
- Codon-anticodon pairing checked twice
- Error rate: ~1 in 10,000 amino acids
- Proofreading by aminoacyl-tRNA synthetases
- Induced fit mechanism

$$\\boxed{\\text{Translation: Initiation (start) → Elongation (add aa) → Termination (stop)}}$$

**Polyribosome (Polysome):**
- Multiple ribosomes on same mRNA simultaneously
- Increases protein production efficiency
- Each ribosome at different position
- Makes many copies of same protein at once`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Translation')
  }

  // Topic 20: Gene Regulation
  const geneRegTopic = await prisma.topic.findUnique({
    where: { slug: 'gene-regulation' }
  })

  if (geneRegTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: geneRegTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'Explain the lac operon in E. coli: (a) describe the components (genes, regulatory sequences), (b) explain how it functions in the absence of lactose, (c) explain how it functions in the presence of lactose, and (d) describe the role of CAP-cAMP in glucose repression.',
          solution: `**Lac Operon - Classic Gene Regulation Model:**

**(a) Components:**

**Structural genes (transcribed together):**
- **lacZ:** Codes for β-galactosidase (cleaves lactose → glucose + galactose)
- **lacY:** Codes for permease (transports lactose into cell)
- **lacA:** Codes for transacetylase (modifies lactose metabolites)

**Regulatory sequences:**
- **Promoter (P):** RNA polymerase binding site
- **Operator (O):** Repressor binding site (overlaps promoter)
- **CAP-cAMP binding site:** Positive control element

**Regulatory gene:**
- **lacI:** Codes for lac repressor protein (located upstream, has own promoter)

**Structure:**
\`\`\`
    lacI gene         CAP site  P    O      lacZ    lacY    lacA
5'—————[——]—————————[——][——][——]———[——]———[——]———[——]———3'
         ↓                                   ↓       ↓       ↓
    Repressor                          β-gal   Permease  Acetylase
\`\`\`

**(b) Absence of Lactose (Operon OFF):**

**Situation:** No lactose available, don't need lac enzymes

**Step 1:** lacI gene constitutively expressed
- lac repressor protein continuously made
- Repressor is **active** (no lactose to inactivate it)

**Step 2:** Repressor binds to operator
- Blocks RNA polymerase from transcribing
- Steric hindrance - polymerase can't proceed
- **Negative control** (repressor blocks transcription)

**Step 3:** No transcription of structural genes
- lacZ, lacY, lacA not transcribed
- No β-galactosidase, permease, or transacetylase made
- Cell doesn't waste energy making unneeded enzymes

**State:** **Repressed** (OFF)

\`\`\`
         Repressor (active)
              ↓ binds
    P    [O]  lacZ  lacY  lacA
————[——][🛑]————————————————
         ↑
    RNA pol blocked
    
Result: NO TRANSCRIPTION
\`\`\`

**(c) Presence of Lactose (Operon ON):**

**Situation:** Lactose available, need enzymes to metabolize it

**Step 1:** Lactose enters cell (basal permease)
- Small amount of permease always present
- Lactose converted to **allolactose** (by basal β-gal)

**Step 2:** Allolactose binds repressor
- Acts as **inducer**
- Causes conformational change in repressor
- Repressor can no longer bind operator
- **Inactivates** repressor

**Step 3:** Operator is free
- RNA polymerase can now bind promoter
- Transcription proceeds

**Step 4:** Structural genes transcribed
- Single **polycistronic mRNA** produced
- Contains all three genes (lacZ, lacY, lacA)

**Step 5:** Translation
- β-galactosidase: breaks down lactose
- Permease: imports more lactose
- Transacetylase: detoxifies metabolites

**State:** **Induced** (ON)

\`\`\`
Lactose → Allolactose
                ↓ binds
         Repressor (inactive)
                      
    P    O   lacZ  lacY  lacA
————[——][——]———————————————
    ↓
RNA pol transcribes
    ↓
mRNA → Proteins

Result: ACTIVE TRANSCRIPTION
\`\`\`

**(d) CAP-cAMP and Glucose Repression:**

**Concept:** Even with lactose, operon works poorly if glucose present

**Why?** Glucose is preferred carbon source
- **Catabolite repression** (glucose effect)
- Cell prefers glucose over lactose (more efficient)

**Mechanism - Positive Control:**

**When glucose is LOW:**

**Step 1:** cAMP levels **increase**
- Glucose inhibits adenylyl cyclase
- No glucose → enzyme active → more cAMP

**Step 2:** cAMP binds CAP (Catabolite Activator Protein)
- CAP = CRP (cAMP Receptor Protein)
- CAP-cAMP complex forms

**Step 3:** CAP-cAMP binds near promoter
- Enhances RNA polymerase binding
- Bends DNA, helps position RNA pol correctly
- **Positive regulation** (stimulates transcription)

**Step 4:** Strong transcription
- With lactose (repressor off) AND CAP-cAMP (enhancer on)
- **Maximum expression** of lac operon

**When glucose is HIGH:**

**Step 1:** cAMP levels **decrease**
- Glucose present → adenylyl cyclase inhibited

**Step 2:** Little CAP-cAMP complex
- CAP without cAMP doesn't bind DNA well

**Step 3:** Weak transcription
- Even if lactose present (repressor off)
- RNA polymerase binds poorly without CAP-cAMP
- **Low expression** of lac operon

**Four States:**

| Glucose | Lactose | CAP-cAMP | Repressor | Transcription |
|---------|---------|----------|-----------|---------------|
| High | Absent | No | Bound | **None** (OFF) |
| High | Present | No | Off | **Low** (weak ON) |
| Low | Absent | Yes | Bound | **None** (OFF) |
| Low | Present | Yes | Off | **High** (strong ON) |

**Logical operation:**
$$\\text{Transcription} = \\text{(NOT repressor)} \\land \\text{CAP-cAMP}$$

**Complete regulation diagram:**

\`\`\`
LOW GLUCOSE + LACTOSE PRESENT = MAXIMUM TRANSCRIPTION

         cAMP (high)
            ↓
         CAP-cAMP (forms)
            ↓ binds
    [CAP site]  P    O   lacZ
————[——✓——]—[——][——]———————
                 ↑
        Repressor OFF (lactose bound it)
        RNA pol binds strongly
        ↓
    Strong transcription +++

HIGH GLUCOSE (even with lactose) = LOW TRANSCRIPTION

         cAMP (low)
            ↓
    [CAP site]  P    O   lacZ  
————[——✗——]—[——][——]———————
                 ↑
        Repressor OFF (lactose bound it)
        RNA pol binds weakly
        ↓
    Weak transcription +
\`\`\`

**Key Concepts:**

**Negative control:** Repressor blocks (default OFF)
**Positive control:** CAP-cAMP enhances (booster)

**Inducible operon:** Turned ON by substrate (lactose)
- Makes sense: only make enzymes when substrate available

**Contrast with repressible operon (trp):**
- Turned OFF by end product (tryptophan)
- Makes sense: don't make enzymes when product abundant

$$\\boxed{\\text{lac operon: Induced by lactose, enhanced by low glucose (CAP-cAMP)}}$$

**Evolutionary advantage:**
- Saves energy (only make what's needed)
- Adapts to environment quickly
- Coordinate regulation of related genes`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Gene Regulation')
  }

  console.log('\n✅ Successfully added MORE problems to Biology topics!')
  console.log('Total: 34 example problems added to AP Biology course')
  console.log('Coverage expanded: Added Heredity, Gene Expression, and more!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
