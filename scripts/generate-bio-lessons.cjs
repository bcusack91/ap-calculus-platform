const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

// AP Biology Curriculum - 25 Topics, 7 Parts Each
const topics = [
  // Unit 1: Chemistry of Life
  {
    slug: 'water-properties-biochemistry',
    title: 'Water Properties & Biochemistry',
    prefix: 'bio',
    exportBase: 'bioWaterProperties',
    parts: [
      {
        title: 'Introduction to Water & Life',
        textSections: [
          { id: 'intro', title: '💧 Water: The Molecule of Life', body: `Water is the most abundant molecule in living organisms, making up 60-70% of your body mass. Its unique properties arise from its **polar covalent bonds** and **hydrogen bonding**.\n\n### Why Water Matters\n\n- All known life requires water\n- Biochemical reactions occur in aqueous solutions\n- Water\'s properties directly enable biological processes\n- Understanding water is fundamental to understanding biology` },
          { id: 'polarity', title: '## Polarity & Hydrogen Bonding', body: `Water ($H_2O$) has a **bent molecular geometry** with a bond angle of approximately 104.5°.\n\n| Property | Detail |\n|----------|--------|\n| **Electronegativity** | Oxygen (3.44) >> Hydrogen (2.20) |\n| **Bond type** | Polar covalent |\n| **Molecular shape** | Bent (angular) |\n| **Partial charges** | δ⁻ on O, δ⁺ on H |\n\n### Hydrogen Bonds\n\nThe partial positive charge on hydrogen atoms attracts the partial negative charge on oxygen atoms of neighboring water molecules. Each water molecule can form up to **4 hydrogen bonds**.\n\n- Hydrogen bonds are **weak individually** (~5% the strength of covalent bonds)\n- But **collectively powerful** — they give water its extraordinary properties\n- They are constantly breaking and reforming (about every picosecond)` }
        ],
        mcQuestions: [
          { q: 'Water molecules are held together by which type of intermolecular force?', opts: ['Ionic bonds', 'Hydrogen bonds', 'Covalent bonds', 'Van der Waals forces'], correct: 1, explanation: 'Water molecules are held together by hydrogen bonds — the attraction between the δ⁺ hydrogen of one molecule and the δ⁻ oxygen of another.' },
          { q: 'The bond angle in a water molecule is approximately:', opts: ['180°', '120°', '109.5°', '104.5°'], correct: 3, explanation: 'Water has a bent geometry with a bond angle of approximately 104.5°, slightly less than the tetrahedral angle due to lone pair repulsion.' },
          { q: 'How many hydrogen bonds can a single water molecule form?', opts: ['1', '2', '3', '4'], correct: 3, explanation: 'Each water molecule can form up to 4 hydrogen bonds — 2 through its hydrogen atoms (as donors) and 2 through its lone pairs on oxygen (as acceptors).' }
        ],
        dropdowns: {
          items: [
            { label: 'Oxygen has a partial ___ charge in water', options: ['positive', 'negative', 'neutral', 'zero'], correct: 'negative' },
            { label: 'Water has a ___ molecular geometry', options: ['linear', 'bent', 'tetrahedral', 'trigonal'], correct: 'bent' },
            { label: 'Hydrogen bonds are ___ than covalent bonds', options: ['stronger', 'weaker', 'equal to', 'unrelated to'], correct: 'weaker' }
          ],
          hints: ['Think about electronegativity differences.', 'Consider the two lone pairs on oxygen.', 'Hydrogen bonds are about 5% the strength of covalent bonds.'],
          explanation: 'Oxygen is more electronegative, giving it a partial negative charge. The two lone pairs on oxygen create a bent shape. Hydrogen bonds are individually weak but collectively important.'
        }
      },
      {
        title: 'Cohesion, Adhesion & Surface Tension',
        textSections: [
          { id: 'cohesion', title: '## Cohesion & Adhesion', body: `### Cohesion\n\n**Cohesion** is the attraction between molecules of the same substance. In water, hydrogen bonds create strong cohesion.\n\n- Water molecules \"stick\" to each other\n- Creates **surface tension** — a measure of how hard it is to break the surface\n- Allows insects like water striders to walk on water\n\n### Adhesion\n\n**Adhesion** is the attraction between molecules of different substances.\n\n- Water adheres to glass, cell walls, and xylem tubes\n- Combined with cohesion, creates **capillary action**\n- Essential for water transport in plants\n\n### Capillary Action in Plants\n\nWater moves up through narrow xylem vessels because:\n1. **Adhesion** — water molecules cling to the xylem walls\n2. **Cohesion** — water molecules pull neighboring molecules upward\n3. **Transpiration pull** — evaporation at the leaves creates negative pressure` },
          { id: 'tension', title: '## Surface Tension & Biological Significance', body: `Surface tension is the result of cohesive forces at the air-water interface.\n\n| Property | Cause | Biological Example |\n|----------|-------|--------------------|\n| **Surface tension** | Cohesion | Water striders walk on water |\n| **Capillary action** | Adhesion + cohesion | Water rises in xylem |\n| **Meniscus** | Adhesion to glass | Water curves upward in a graduated cylinder |\n\nSurface tension of water is **higher than almost any other liquid** because of the extensive hydrogen bonding network.` }
        ],
        mcQuestions: [
          { q: 'Capillary action in plants relies on which combination of forces?', opts: ['Only cohesion', 'Only adhesion', 'Both cohesion and adhesion', 'Ionic and covalent bonding'], correct: 2, explanation: 'Capillary action requires both adhesion (water clinging to xylem walls) and cohesion (water molecules pulling each other along).' },
          { q: 'Which property allows water striders to walk on water?', opts: ['Adhesion', 'Surface tension', 'Capillary action', 'Specific heat'], correct: 1, explanation: 'Surface tension, caused by cohesive hydrogen bonds at the water surface, creates a \"film\" strong enough to support lightweight insects.' }
        ],
        dropdowns: {
          items: [
            { label: 'Cohesion is the attraction between ___ molecules', options: ['same', 'different', 'polar and nonpolar', 'charged'], correct: 'same' },
            { label: 'Water rises in thin tubes due to ___', options: ['osmosis', 'capillary action', 'active transport', 'diffusion'], correct: 'capillary action' },
            { label: 'The concave meniscus of water in glass occurs because of ___', options: ['cohesion only', 'adhesion to glass', 'gravity', 'surface tension only'], correct: 'adhesion to glass' }
          ],
          hints: ['Cohesion = same type of molecule.', 'Think about what makes water climb up narrow tubes.', 'Water curves upward because it is attracted to the glass.'],
          explanation: 'Cohesion is between same molecules; capillary action combines cohesion and adhesion; the meniscus curves up because water adheres to glass more than it coheres to itself.'
        }
      },
      {
        title: 'Thermal Properties of Water',
        textSections: [
          { id: 'specific-heat', title: '## High Specific Heat', body: `Water has an unusually **high specific heat capacity**: 4.184 J/(g·°C).\n\nThis means water resists temperature change — it absorbs or releases a large amount of heat with only a small change in temperature.\n\n### Why?\n\n- Hydrogen bonds must be broken before kinetic energy (temperature) increases\n- The extensive hydrogen bond network acts as a thermal buffer\n\n### Biological Significance\n\n| Scale | Example |\n|-------|--------|\n| **Cellular** | Cytoplasm resists temperature fluctuations |\n| **Organismal** | Body temperature regulation (sweating) |\n| **Environmental** | Coastal areas have milder climates |\n| **Global** | Oceans moderate Earth\'s climate |` },
          { id: 'evap', title: '## Evaporative Cooling & Heat of Vaporization', body: `Water has a **high heat of vaporization** (2,260 J/g) — it takes a lot of energy to convert liquid water to gas.\n\n### Evaporative Cooling\n\nWhen water evaporates, the highest-energy molecules escape first, leaving cooler molecules behind. This cools the remaining liquid.\n\n- **Sweating** cools the body through evaporative cooling\n- **Transpiration** cools plant leaves\n- **Panting** cools animals without sweat glands\n\nWithout this property, organisms would overheat during metabolic activity.` }
        ],
        mcQuestions: [
          { q: 'Water\'s high specific heat is due to:', opts: ['Covalent bonds within the molecule', 'The need to break hydrogen bonds before temperature rises', 'Water\'s low molecular weight', 'Water\'s ability to dissolve solutes'], correct: 1, explanation: 'Energy input first goes to breaking hydrogen bonds between water molecules. Only after bonds break does kinetic energy (and thus temperature) increase.' },
          { q: 'Evaporative cooling works because:', opts: ['Cold water evaporates faster', 'The highest-energy molecules leave the liquid', 'Hydrogen bonds increase during evaporation', 'Water absorbs heat from the environment when it evaporates'], correct: 1, explanation: 'The fastest-moving (highest-energy) molecules escape the liquid surface, lowering the average kinetic energy (temperature) of the remaining molecules.' }
        ],
        dropdowns: {
          items: [
            { label: 'Water\'s specific heat is ___ compared to most substances', options: ['lower', 'higher', 'the same', 'unrelated'], correct: 'higher' },
            { label: 'Sweating cools the body through ___', options: ['conduction', 'radiation', 'evaporative cooling', 'convection'], correct: 'evaporative cooling' },
            { label: 'Coastal regions have milder climates because of water\'s high ___', options: ['density', 'specific heat', 'viscosity', 'pH'], correct: 'specific heat' }
          ],
          hints: ['Water has one of the highest specific heats of common substances.', 'When sweat evaporates, it carries heat away.', 'Oceans absorb and release heat slowly.'],
          explanation: 'Water\'s high specific heat buffers temperature changes. Sweating uses evaporative cooling. Coastal climates are moderated by the ocean\'s thermal stability.'
        }
      },
      {
        title: 'Water as a Solvent',
        textSections: [
          { id: 'solvent', title: '## The Universal Solvent', body: `Water is called the **universal solvent** because it dissolves more substances than any other liquid. This is due to its polarity.\n\n### How Water Dissolves Ionic Compounds\n\nWhen $NaCl$ dissolves:\n1. The δ⁻ oxygen of water surrounds $Na^+$ ions\n2. The δ⁺ hydrogen of water surrounds $Cl^-$ ions\n3. The ions are pulled apart and surrounded by water — they are **hydrated**\n\n### Hydrophilic vs. Hydrophobic\n\n| Type | Meaning | Examples |\n|------|---------|----------|\n| **Hydrophilic** | Water-loving | Ions, polar molecules, sugars |\n| **Hydrophobic** | Water-fearing | Fats, oils, nonpolar molecules |\n| **Amphipathic** | Both | Phospholipids, soap |\n\nHydrophobic molecules are excluded from the aqueous environment, which is critical for membrane formation.` },
          { id: 'ph', title: '## pH and Buffers', body: `### The pH Scale\n\n$$pH = -\\log[H^+]$$\n\n| pH | $[H^+]$ (M) | Classification |\n|----|-------------|----------------|\n| 0 | $10^0$ | Strongly acidic |\n| 7 | $10^{-7}$ | Neutral |\n| 14 | $10^{-14}$ | Strongly basic |\n\nEach pH unit represents a **10-fold change** in $[H^+]$.\n\n### Biological Buffers\n\nBuffers resist changes in pH by accepting or donating $H^+$ ions.\n\n- **Carbonic acid buffer** in blood: $H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$\n- Maintains blood pH at **7.35-7.45**\n- Even small deviations can be fatal\n- Enzymes function within narrow pH ranges` }
        ],
        mcQuestions: [
          { q: 'A solution with pH 4 has how many more H⁺ ions than a solution with pH 7?', opts: ['3 times more', '30 times more', '300 times more', '1,000 times more'], correct: 3, explanation: 'Each pH unit = 10× difference. pH 4 to pH 7 = 3 units = $10^3$ = 1,000 times more $H^+$ ions.' },
          { q: 'Phospholipids are classified as:', opts: ['Hydrophilic', 'Hydrophobic', 'Amphipathic', 'Nonpolar'], correct: 2, explanation: 'Phospholipids have a hydrophilic (polar) head and hydrophobic (nonpolar) tails, making them amphipathic — essential for forming cell membranes.' }
        ],
        dropdowns: {
          items: [
            { label: 'A substance that dissolves in water is called ___', options: ['hydrophobic', 'hydrophilic', 'amphipathic', 'nonpolar'], correct: 'hydrophilic' },
            { label: 'Blood pH is maintained near ___', options: ['6.0', '7.0', '7.4', '8.0'], correct: '7.4' },
            { label: 'Buffers resist changes in ___', options: ['temperature', 'pH', 'pressure', 'volume'], correct: 'pH' }
          ],
          hints: ['Hydro = water, philic = loving.', 'Normal blood pH is slightly above neutral.', 'Buffers accept or donate H⁺ ions.'],
          explanation: 'Hydrophilic means water-loving. Blood pH is tightly regulated near 7.4. Buffers resist pH changes by absorbing or releasing H⁺.'
        }
      },
      {
        title: 'Ice, Density & Unique Properties',
        textSections: [
          { id: 'ice', title: '## Ice Floats — And That\'s Critical', body: `Unlike most substances, water is **less dense as a solid** than as a liquid.\n\n### Why Ice Floats\n\n- In liquid water, hydrogen bonds constantly break and reform\n- When water freezes, hydrogen bonds become fixed in a **crystalline lattice**\n- This lattice is more spread out (less dense) than liquid water\n- Ice density: 0.917 g/mL vs. liquid water: 1.00 g/mL\n\n### Biological Significance\n\n1. **Insulation** — Ice forms on the surface of lakes and ponds, insulating the liquid water below\n2. **Aquatic survival** — Fish and other organisms survive winter beneath the ice\n3. **Prevents solid freezing** — If ice sank, bodies of water would freeze from the bottom up, killing most aquatic life\n4. **Seasonal mixing** — Ice melting in spring creates currents that distribute nutrients` },
          { id: 'summary', title: '## Summary of Water\'s Properties', body: `| Property | Cause | Biological Importance |\n|----------|-------|----------------------|\n| **Cohesion** | H-bonds between water molecules | Surface tension, capillary action |\n| **Adhesion** | H-bonds to other polar surfaces | Water transport in plants |\n| **High specific heat** | H-bonds absorb heat energy | Temperature regulation |\n| **High heat of vaporization** | Energy needed to break H-bonds | Evaporative cooling |\n| **Ice is less dense** | H-bond lattice in ice | Insulation of aquatic habitats |\n| **Universal solvent** | Polarity | Biochemical reactions in solution |\n\nAll of these properties trace back to one feature: **hydrogen bonding** between polar water molecules.` }
        ],
        mcQuestions: [
          { q: 'Why does ice float on liquid water?', opts: ['Ice has more hydrogen bonds per molecule', 'The hydrogen bond lattice in ice is more spread out', 'Ice molecules move faster', 'Liquid water has more dissolved gases'], correct: 1, explanation: 'In ice, hydrogen bonds lock water molecules into a crystalline lattice that is more spread out (less dense) than the dynamic arrangement in liquid water.' },
          { q: 'If ice sank instead of floating, what would happen?', opts: ['Lakes would freeze from the bottom up, killing aquatic life', 'Water would become more acidic', 'Evaporation would increase dramatically', 'Surface tension would disappear'], correct: 0, explanation: 'If ice were denser than liquid water, it would sink to the bottom. Lakes would freeze solid from the bottom up, making aquatic life impossible in cold climates.' }
        ],
        dropdowns: {
          items: [
            { label: 'The density of ice is about ___ g/mL', options: ['0.50', '0.917', '1.00', '1.25'], correct: '0.917' },
            { label: 'All of water\'s unique properties are due to ___', options: ['covalent bonds', 'hydrogen bonds', 'ionic bonds', 'van der Waals forces'], correct: 'hydrogen bonds' },
            { label: 'Ice insulates aquatic habitats by forming on the ___', options: ['bottom', 'surface', 'middle', 'sides'], correct: 'surface' }
          ],
          hints: ['Ice is about 9% less dense than liquid water.', 'The one feature that explains everything...', 'Ice is less dense so it rises.'],
          explanation: 'Ice has a density of 0.917 g/mL. All of water\'s unique properties stem from hydrogen bonding. Ice floats on the surface, insulating the water below.'
        }
      },
      {
        title: 'Problem-Solving Workshop',
        textSections: [
          { id: 'workshop', title: '## Problem-Solving Workshop: Water Properties', body: `Let\'s apply what you\'ve learned about water\'s properties to solve AP Biology-style problems.\n\n### Strategy for Water Property Questions\n\n1. **Identify the property** being tested (cohesion, adhesion, specific heat, etc.)\n2. **Connect to hydrogen bonding** — almost every water property question traces back to H-bonds\n3. **Link to biological significance** — the AP exam emphasizes biological applications\n4. **Eliminate wrong answers** by checking if the property matches the phenomenon` },
          { id: 'practice', title: '## Practice Scenarios', body: `### Scenario 1: Desert Organisms\nDesert lizards are ectotherms that regulate body temperature behaviorally. During the hottest part of the day, they retreat to burrows where the soil retains moisture.\n\n**Key concept:** Water\'s high specific heat moderates temperature underground.\n\n### Scenario 2: Transpiration Stream\nWater moves from roots to leaves in tall trees (some over 100 m tall) without any pump mechanism.\n\n**Key concept:** Cohesion-tension theory — transpiration creates negative pressure, and cohesion/adhesion pull water upward through xylem.` }
        ],
        mcQuestions: [
          { q: 'A student observes that a paper towel absorbs water and the water moves upward against gravity. Which property best explains this?', opts: ['Evaporative cooling', 'Capillary action due to adhesion and cohesion', 'High specific heat', 'Low density of ice'], correct: 1, explanation: 'Water moves upward in the paper towel fibers due to capillary action — adhesion to the cellulose fibers combined with cohesion between water molecules.' },
          { q: 'In an experiment, a student adds salt to two beakers of water. Beaker A is at 20°C and Beaker B is at 80°C. In which beaker will salt dissolve faster, and why?', opts: ['Beaker A — cold water is a better solvent', 'Beaker B — higher kinetic energy increases dissolution rate', 'Both dissolve at the same rate', 'Neither — salt does not dissolve in water'], correct: 1, explanation: 'At higher temperatures, water molecules have more kinetic energy and interact more vigorously with solute particles, increasing the rate of dissolution.' },
          { q: 'Why do large bodies of water moderate nearby land temperatures?', opts: ['Water reflects sunlight', 'Water has a high specific heat and absorbs/releases heat slowly', 'Water evaporates and creates clouds', 'Water is transparent to infrared radiation'], correct: 1, explanation: 'Water\'s high specific heat means it absorbs and releases large amounts of heat energy with relatively small temperature changes, moderating nearby temperatures.' }
        ],
        dropdowns: {
          items: [
            { label: 'Transpiration in plants is driven by ___ at the leaves', options: ['active transport', 'evaporation', 'osmosis', 'root pressure'], correct: 'evaporation' },
            { label: 'Sweating cools the body because water has a high ___', options: ['specific heat', 'heat of vaporization', 'density', 'surface tension'], correct: 'heat of vaporization' },
            { label: 'The cohesion-tension theory explains water transport in ___', options: ['blood vessels', 'xylem', 'phloem', 'stomata'], correct: 'xylem' }
          ],
          hints: ['Water evaporating from leaf surfaces drives the transpiration stream.', 'It takes a lot of energy to evaporate water.', 'Xylem transports water; phloem transports sugars.'],
          explanation: 'Transpiration is driven by evaporation at leaf surfaces. Sweating cools via high heat of vaporization. The cohesion-tension theory describes water movement through xylem.'
        }
      },
      {
        title: 'Synthesis & AP Review',
        textSections: [
          { id: 'synthesis', title: '## Synthesis: Water Properties in AP Biology', body: `### Big Ideas Connected\n\n- **Big Idea 1 (Evolution):** Water\'s properties created the aqueous environment where life evolved\n- **Big Idea 2 (Energy):** Water\'s thermal properties are essential for metabolic regulation\n- **Big Idea 3 (Information):** pH affects enzyme shape and function (protein structure)\n- **Big Idea 4 (Systems):** Water\'s solvent properties enable transport and homeostasis\n\n### AP Exam Tips\n\n1. Free-response questions often ask you to **explain a property AND its biological significance**\n2. Always connect back to **hydrogen bonding** as the underlying mechanism\n3. Be prepared to explain **how disrupting water\'s properties would affect organisms**\n4. Know the difference between cohesion, adhesion, and surface tension` },
          { id: 'review', title: '## Key Terms Review', body: `| Term | Definition |\n|------|------------|\n| **Cohesion** | Attraction between water molecules |\n| **Adhesion** | Attraction between water and other substances |\n| **Surface tension** | Resistance of water surface to disruption |\n| **Specific heat** | Energy needed to raise 1g of water by 1°C |\n| **Heat of vaporization** | Energy to convert liquid water to gas |\n| **Hydrophilic** | Water-attracting (polar/charged) |\n| **Hydrophobic** | Water-repelling (nonpolar) |\n| **Buffer** | Substance that resists pH changes |\n| **pH** | $-\\log[H^+]$; measure of acidity |` }
        ],
        mcQuestions: [
          { q: 'Which statement best explains why water is essential for life on Earth?', opts: ['Water is the only liquid that exists naturally', 'Water\'s hydrogen bonding creates properties that support biological processes', 'Water is the simplest molecule in nature', 'Water cannot be broken down into simpler substances'], correct: 1, explanation: 'Water\'s hydrogen bonding network creates unique properties — high specific heat, solvent capability, cohesion/adhesion, and density anomaly — that collectively support life.' },
          { q: 'A biologist studying an enzyme finds it works best at pH 7.4 but denatures at pH 5.0. What cellular mechanism prevents this denaturation?', opts: ['Active transport of H⁺ ions', 'Buffer systems that maintain pH', 'Osmotic regulation', 'Passive diffusion of OH⁻ ions'], correct: 1, explanation: 'Biological buffer systems (like the bicarbonate buffer in blood) resist pH changes, maintaining the optimal pH range for enzyme function.' },
          { q: 'During a drought, a plant wilts because:', opts: ['Adhesion forces break down', 'Transpiration stops and water cannot be pulled up', 'Water becomes hydrophobic', 'Surface tension in leaves increases'], correct: 1, explanation: 'Without sufficient water, the transpiration stream (driven by evaporation, cohesion, and adhesion) fails. Turgor pressure drops and the plant wilts.' }
        ],
        dropdowns: {
          items: [
            { label: 'The property of water most important for temperature regulation is ___', options: ['cohesion', 'high specific heat', 'adhesion', 'low density of ice'], correct: 'high specific heat' },
            { label: 'Enzymes function within narrow ___ ranges', options: ['temperature', 'pH', 'both temperature and pH', 'salinity'], correct: 'both temperature and pH' },
            { label: 'All of water\'s emergent properties arise from its ___', options: ['small size', 'hydrogen bonds', 'covalent bonds', 'atomic number'], correct: 'hydrogen bonds' }
          ],
          hints: ['Which property relates to how much energy is needed to change temperature?', 'Enzymes are sensitive to multiple environmental factors.', 'The one structural feature that explains all water properties.'],
          explanation: 'High specific heat regulates temperature. Enzymes are affected by both temperature and pH. Hydrogen bonding is the basis for all of water\'s unique biological properties.'
        }
      }
    ]
  },
  // Topic 2
  {
    slug: 'biological-macromolecules',
    title: 'Biological Macromolecules',
    prefix: 'bio',
    exportBase: 'bioMacromolecules',
    parts: [
      { title: 'Introduction to Macromolecules', textSections: [{ id: 'intro', title: '🧬 Biological Macromolecules', body: 'Living organisms are built from four classes of **biological macromolecules**: carbohydrates, lipids, proteins, and nucleic acids.\n\n### Polymer Formation\n\nMost macromolecules are **polymers** — long chains of repeating subunits called **monomers**.\n\n| Reaction | Process |\n|----------|--------|\n| **Dehydration synthesis** | Monomers joined by removing water |\n| **Hydrolysis** | Polymers broken apart by adding water |\n\n$$\\text{Monomer} + \\text{Monomer} \\xrightarrow{\\text{dehydration}} \\text{Polymer} + H_2O$$\n$$\\text{Polymer} + H_2O \\xrightarrow{\\text{hydrolysis}} \\text{Monomers}$$' }, { id: 'overview', title: '## The Four Classes', body: '| Macromolecule | Monomer | Function | Elements |\n|--------------|---------|----------|----------|\n| **Carbohydrates** | Monosaccharides | Energy, structure | C, H, O |\n| **Lipids** | Fatty acids + glycerol | Energy storage, membranes | C, H, O |\n| **Proteins** | Amino acids | Enzymes, structure, transport | C, H, O, N, S |\n| **Nucleic acids** | Nucleotides | Genetic information | C, H, O, N, P |\n\nNote: Lipids are **not true polymers** — they don\'t form by linking identical monomers.' }], mcQuestions: [{ q: 'Which reaction breaks polymers into monomers?', opts: ['Dehydration synthesis', 'Hydrolysis', 'Condensation', 'Oxidation'], correct: 1, explanation: 'Hydrolysis (hydro = water, lysis = breaking) breaks polymers by adding water across the bond.' }, { q: 'Which macromolecule is NOT a true polymer?', opts: ['Proteins', 'Carbohydrates', 'Lipids', 'Nucleic acids'], correct: 2, explanation: 'Lipids (fats) are not true polymers. They form by joining glycerol to fatty acids, not by linking identical monomers.' }], dropdowns: { items: [{ label: 'Dehydration synthesis ___ water', options: ['adds', 'removes', 'neutralizes', 'absorbs'], correct: 'removes' }, { label: 'Proteins are made of ___ monomers', options: ['nucleotide', 'amino acid', 'monosaccharide', 'fatty acid'], correct: 'amino acid' }, { label: 'The element unique to nucleic acids is ___', options: ['sulfur', 'nitrogen', 'phosphorus', 'iron'], correct: 'phosphorus' }], hints: ['De-hydration = removal of water.', 'There are 20 types of these building blocks.', 'DNA has a sugar-phosphate backbone.'], explanation: 'Dehydration synthesis removes water. Proteins are amino acid polymers. Phosphorus is found in nucleic acids but not in most carbohydrates or lipids.' } },
      { title: 'Carbohydrates', textSections: [{ id: 'carbs', title: '## Carbohydrates: Structure & Function', body: '### Monosaccharides\n\nSimple sugars with the general formula $(CH_2O)_n$:\n\n| Sugar | Carbons | Found in |\n|-------|---------|----------|\n| **Glucose** | 6 (hexose) | Blood sugar, cellular respiration |\n| **Fructose** | 6 (hexose) | Fruits |\n| **Galactose** | 6 (hexose) | Milk |\n| **Ribose** | 5 (pentose) | RNA |\n| **Deoxyribose** | 5 (pentose) | DNA |\n\n### Disaccharides\n\nTwo monosaccharides linked by a **glycosidic bond**:\n\n| Disaccharide | Components | Source |\n|-------------|------------|--------|\n| **Sucrose** | Glucose + Fructose | Table sugar |\n| **Lactose** | Glucose + Galactose | Milk |\n| **Maltose** | Glucose + Glucose | Germinating seeds |' }, { id: 'poly', title: '## Polysaccharides', body: '| Polysaccharide | Function | Organism | Linkage |\n|---------------|----------|----------|---------|\n| **Starch** | Energy storage | Plants | α-1,4 glucose |\n| **Glycogen** | Energy storage | Animals | α-1,4 glucose (more branched) |\n| **Cellulose** | Structural | Plants | β-1,4 glucose |\n| **Chitin** | Structural | Arthropods, fungi | Modified glucose (NAG) |\n\n**Key distinction:** Starch and glycogen use **alpha (α) linkages** (digestible), while cellulose uses **beta (β) linkages** (indigestible by most animals).' }], mcQuestions: [{ q: 'What distinguishes cellulose from starch?', opts: ['Different monomers', 'Different glycosidic linkages (α vs β)', 'Cellulose contains nitrogen', 'Starch is branched, cellulose is not'], correct: 1, explanation: 'Both are glucose polymers, but starch uses α-1,4 linkages while cellulose uses β-1,4 linkages. This makes cellulose indigestible to most animals.' }, { q: 'Glycogen is to animals as ___ is to plants.', opts: ['Cellulose', 'Starch', 'Chitin', 'Sucrose'], correct: 1, explanation: 'Both glycogen and starch are energy storage polysaccharides. Glycogen is used by animals, starch by plants.' }], dropdowns: { items: [{ label: 'The monomer of carbohydrates is a ___', options: ['nucleotide', 'amino acid', 'monosaccharide', 'fatty acid'], correct: 'monosaccharide' }, { label: 'Sucrose is a ___ made of glucose and fructose', options: ['monosaccharide', 'disaccharide', 'polysaccharide', 'lipid'], correct: 'disaccharide' }, { label: 'Cellulose provides ___ support in plants', options: ['energy', 'structural', 'genetic', 'enzymatic'], correct: 'structural' }], hints: ['Mono = one, saccharide = sugar.', 'Di = two sugars linked together.', 'Cellulose is the main component of cell walls.'], explanation: 'Monosaccharides are carbohydrate monomers. Sucrose is a disaccharide. Cellulose provides structural support in plant cell walls.' } },
      { title: 'Lipids', textSections: [{ id: 'lipids', title: '## Lipids: Fats, Phospholipids & Steroids', body: '### Triglycerides (Fats & Oils)\n\nTrigleride = **glycerol** + **3 fatty acids** (linked by ester bonds)\n\n| Type | Saturation | State at RT | Example |\n|------|-----------|-------------|----------|\n| **Saturated fat** | No C=C double bonds | Solid | Butter, lard |\n| **Unsaturated fat** | One or more C=C | Liquid (oil) | Olive oil |\n| **Trans fat** | Artificially hydrogenated | Solid | Margarine |\n\nFats store **2× more energy per gram** than carbohydrates (9 kcal/g vs 4 kcal/g).\n\n### Phospholipids\n\nPhospholipid = glycerol + 2 fatty acids + phosphate group\n\n- **Amphipathic:** hydrophilic head + hydrophobic tails\n- Form the basis of **cell membranes** (phospholipid bilayer)\n- Spontaneously form bilayers in water\n\n### Steroids\n\nFour fused carbon rings (e.g., cholesterol, estrogen, testosterone). Cholesterol is a component of animal cell membranes.' }, { id: 'func', title: '## Functions of Lipids', body: '| Function | Example |\n|----------|--------|\n| Long-term energy storage | Adipose tissue (body fat) |\n| Insulation | Subcutaneous fat, blubber |\n| Cell membranes | Phospholipid bilayer |\n| Hormones | Estrogen, testosterone |\n| Waterproofing | Waxes on leaves and feathers |\n| Protection | Cushioning around organs |' }], mcQuestions: [{ q: 'Phospholipids are amphipathic because they have:', opts: ['Two identical fatty acid tails', 'A hydrophilic head and hydrophobic tails', 'Only polar components', 'Only nonpolar components'], correct: 1, explanation: 'Amphipathic means having both hydrophilic (water-loving) and hydrophobic (water-fearing) regions. The phosphate head is polar; the fatty acid tails are nonpolar.' }, { q: 'Fats store more energy per gram than carbohydrates because:', opts: ['Fats are larger molecules', 'Fats have more C-H bonds to oxidize', 'Fats dissolve in water', 'Fats are polymers'], correct: 1, explanation: 'Fats have many C-H bonds that can be oxidized to release energy. They yield ~9 kcal/g compared to ~4 kcal/g for carbohydrates.' }], dropdowns: { items: [{ label: 'A saturated fatty acid has ___ carbon-carbon double bonds', options: ['no', 'one', 'many', 'two'], correct: 'no' }, { label: 'Cell membranes are primarily made of ___', options: ['triglycerides', 'phospholipids', 'steroids', 'waxes'], correct: 'phospholipids' }, { label: 'Cholesterol is classified as a ___', options: ['triglyceride', 'phospholipid', 'steroid', 'wax'], correct: 'steroid' }], hints: ['Saturated = fully loaded with hydrogens.', 'The fluid mosaic model describes the membrane structure.', 'Cholesterol has four fused carbon rings.'], explanation: 'Saturated fats have no double bonds. Phospholipids form the bilayer of cell membranes. Cholesterol is a steroid.' } },
      { title: 'Proteins', textSections: [{ id: 'proteins', title: '## Proteins: Structure & Function', body: '### Amino Acids\n\nAll amino acids have:\n- A central **carbon** (α-carbon)\n- An **amino group** ($-NH_2$)\n- A **carboxyl group** ($-COOH$)\n- A **hydrogen** atom\n- A variable **R group** (side chain) — determines the amino acid\'s properties\n\n**20 different amino acids** exist, differing only in their R groups.\n\n### Peptide Bonds\n\nAmino acids link via **peptide bonds** (dehydration synthesis between $-COOH$ and $-NH_2$).\n\n- 2 amino acids → dipeptide\n- 3+ amino acids → polypeptide\n- Functional polypeptide → protein\n\n### R Group Categories\n\n| Category | Properties | Effect |\n|----------|-----------|--------|\n| Nonpolar | Hydrophobic | Fold into protein interior |\n| Polar | Hydrophilic | Found on protein surface |\n| Charged (+) | Positive charge | Form ionic bonds |\n| Charged (−) | Negative charge | Form ionic bonds |' }, { id: 'structure', title: '## Levels of Protein Structure', body: '| Level | Bonds | Description |\n|-------|-------|-------------|\n| **Primary (1°)** | Peptide bonds | Linear sequence of amino acids |\n| **Secondary (2°)** | Hydrogen bonds | α-helices and β-pleated sheets |\n| **Tertiary (3°)** | R-group interactions | 3D folding of a single polypeptide |\n| **Quaternary (4°)** | Multiple polypeptides | Multiple subunits together |\n\n### Tertiary Structure Bonds\n- **Hydrogen bonds** between R groups\n- **Ionic bonds** between charged R groups\n- **Hydrophobic interactions** (nonpolar R groups cluster inside)\n- **Disulfide bridges** (covalent bonds between cysteine residues)\n\n### Denaturation\nChanges in **pH, temperature, or salt concentration** can disrupt these bonds and unfold the protein — this is **denaturation**. The primary structure remains intact but the protein loses its function.' }], mcQuestions: [{ q: 'Which level of protein structure is determined by the gene sequence?', opts: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], correct: 0, explanation: 'The primary structure (amino acid sequence) is directly determined by the gene (DNA sequence). All higher levels of structure depend on the primary sequence.' }, { q: 'Denaturation disrupts which levels of protein structure?', opts: ['Only primary', 'Only secondary', 'Secondary, tertiary, and quaternary', 'All four levels'], correct: 2, explanation: 'Denaturation unfolds the 3D structure (disrupting secondary, tertiary, and quaternary bonds) but does NOT break peptide bonds — the primary structure remains intact.' }], dropdowns: { items: [{ label: 'Amino acids are linked by ___ bonds', options: ['glycosidic', 'peptide', 'phosphodiester', 'ester'], correct: 'peptide' }, { label: 'The variable part of each amino acid is the ___', options: ['amino group', 'carboxyl group', 'R group', 'peptide bond'], correct: 'R group' }, { label: 'α-helices and β-pleated sheets are examples of ___ structure', options: ['primary', 'secondary', 'tertiary', 'quaternary'], correct: 'secondary' }], hints: ['Formed by dehydration synthesis between -COOH and -NH₂.', 'This side chain makes each amino acid unique.', 'Regular repeating patterns stabilized by backbone H-bonds.'], explanation: 'Peptide bonds link amino acids. The R group (side chain) varies among the 20 amino acids. α-helices and β-sheets are secondary structures.' } },
      { title: 'Nucleic Acids', textSections: [{ id: 'na', title: '## Nucleic Acids: DNA & RNA', body: '### Nucleotide Structure\n\nEach nucleotide has three components:\n1. **5-carbon sugar** (ribose in RNA, deoxyribose in DNA)\n2. **Phosphate group** ($PO_4^{3-}$)\n3. **Nitrogenous base**\n\n### DNA vs. RNA\n\n| Feature | DNA | RNA |\n|---------|-----|-----|\n| **Sugar** | Deoxyribose | Ribose |\n| **Strands** | Double-stranded | Single-stranded |\n| **Bases** | A, T, G, C | A, U, G, C |\n| **Function** | Stores genetic info | Protein synthesis |\n| **Location** | Nucleus | Nucleus + cytoplasm |\n\n### Base Pairing Rules\n\n- **DNA:** A=T (2 H-bonds), G≡C (3 H-bonds)\n- **RNA:** A=U, G≡C\n\n### Chargaff\'s Rules\n\nIn any DNA molecule: %A = %T and %G = %C\n\nIf a DNA sample is 30% adenine, then:\n- %T = 30%, %G = 20%, %C = 20%' }, { id: 'bonding', title: '## Phosphodiester Bonds & Directionality', body: 'Nucleotides are linked by **phosphodiester bonds** between the 3\' carbon of one sugar and the 5\' carbon of the next.\n\n- DNA strands run **antiparallel** (5\'→3\' and 3\'→5\')\n- New nucleotides are always added to the **3\' end**\n- The sugar-phosphate backbone is on the outside\n- The bases are on the inside, forming complementary pairs\n\nThis directionality is crucial for replication and transcription.' }], mcQuestions: [{ q: 'If a DNA strand is 22% guanine, what percentage is adenine?', opts: ['22%', '28%', '44%', '78%'], correct: 1, explanation: 'By Chargaff\'s rules: %G = %C = 22%. Total G+C = 44%. Remaining = 56%. %A = %T = 56%/2 = 28%.' }, { q: 'Which bond links nucleotides in a nucleic acid strand?', opts: ['Peptide bond', 'Glycosidic bond', 'Phosphodiester bond', 'Hydrogen bond'], correct: 2, explanation: 'Phosphodiester bonds link the 3\' carbon of one sugar to the 5\' carbon of the next nucleotide, forming the backbone.' }], dropdowns: { items: [{ label: 'DNA uses ___ while RNA uses uracil', options: ['adenine', 'thymine', 'guanine', 'cytosine'], correct: 'thymine' }, { label: 'DNA strands run in ___ directions', options: ['parallel', 'antiparallel', 'perpendicular', 'random'], correct: 'antiparallel' }, { label: 'New nucleotides are added to the ___ end', options: ['5\'', '3\'', 'both', 'neither'], correct: '3\'' }], hints: ['This base is unique to DNA.', 'One strand is 5\'→3\', the other is 3\'→5\'.', 'DNA polymerase adds to one specific end.'], explanation: 'Thymine is unique to DNA (RNA uses uracil). DNA strands are antiparallel. New nucleotides are added to the 3\' end.' } },
      { title: 'Problem-Solving Workshop', textSections: [{ id: 'workshop', title: '## Macromolecule Problem-Solving', body: '### Common AP Question Types\n\n1. **Identify the macromolecule** given a structure or function\n2. **Compare/contrast** two macromolecules\n3. **Predict effects** of changes (mutations, denaturation, pH)\n4. **Apply Chargaff\'s rules** to DNA composition\n5. **Connect structure to function**\n\n### Strategy\n- Look for key functional groups and elements\n- Remember: structure determines function\n- Dehydration synthesis builds; hydrolysis breaks down' }, { id: 'scenarios', title: '## Practice Problems', body: '### Problem 1\nA protein normally functions at pH 7. A mutation replaces a nonpolar R group in the protein\'s interior with a charged R group. Predict the effect.\n\n**Answer:** The charged R group would be hydrophilic and disrupt the hydrophobic core, likely causing misfolding and loss of function.\n\n### Problem 2\nAn unknown sample contains C, H, O, N, and S. Which macromolecule is it most likely?\n\n**Answer:** Protein — sulfur (in cysteine and methionine) is characteristic of proteins.' }], mcQuestions: [{ q: 'A molecule contains glycerol, two fatty acids, and a phosphate group. It is a:', opts: ['Triglyceride', 'Phospholipid', 'Steroid', 'Wax'], correct: 1, explanation: 'Phospholipids have glycerol + 2 fatty acids + phosphate group. Triglycerides have glycerol + 3 fatty acids.' }, { q: 'Which macromolecule would be most affected by a change in pH?', opts: ['Starch', 'DNA', 'A protein enzyme', 'Triglyceride'], correct: 2, explanation: 'Proteins (especially enzymes) are highly sensitive to pH changes because pH affects the charges on R groups, disrupting ionic bonds and hydrogen bonds that maintain 3D structure.' }, { q: 'Cellulose and starch are both made of glucose but have different properties because:', opts: ['They contain different elements', 'They have different glycosidic linkages', 'Cellulose has more branches', 'Starch contains fructose'], correct: 1, explanation: 'Starch uses α-glycosidic linkages (digestible), cellulose uses β-glycosidic linkages (indigestible by humans). Same monomer, different bonds.' }], dropdowns: { items: [{ label: 'Enzymes are a type of ___', options: ['carbohydrate', 'lipid', 'protein', 'nucleic acid'], correct: 'protein' }, { label: 'The sugar in DNA is ___', options: ['ribose', 'deoxyribose', 'glucose', 'fructose'], correct: 'deoxyribose' }, { label: 'Trans fats are created by ___ unsaturated fats', options: ['heating', 'hydrogenating', 'oxidizing', 'dehydrating'], correct: 'hydrogenating' }], hints: ['Enzymes catalyze reactions and have specific 3D shapes.', 'DNA = deoxyribonucleic acid.', 'Adding hydrogen atoms to double bonds.'], explanation: 'Enzymes are proteins. DNA contains deoxyribose sugar. Trans fats are made by hydrogenating (adding hydrogen to) unsaturated fats.' } },
      { title: 'Synthesis & AP Review', textSections: [{ id: 'synthesis', title: '## AP Biology: Macromolecules Review', body: '### Essential Comparisons\n\n| Feature | Carbs | Lipids | Proteins | Nucleic Acids |\n|---------|-------|--------|----------|---------------|\n| **Monomer** | Monosaccharide | Fatty acid/glycerol | Amino acid | Nucleotide |\n| **Bond** | Glycosidic | Ester | Peptide | Phosphodiester |\n| **Elements** | C, H, O | C, H, O | C, H, O, N, S | C, H, O, N, P |\n| **Testing** | Benedict\'s/Iodine | Sudan/Paper | Biuret | — |\n\n### Key Themes\n1. **Structure determines function** — the shape of a molecule determines what it can do\n2. **Monomers ↔ polymers** — dehydration synthesis and hydrolysis are universal\n3. **Environmental sensitivity** — pH, temperature, and salt affect protein structure\n4. **Energy storage hierarchy** — sugars (quick), glycogen/starch (medium), fat (long-term)' }, { id: 'tips', title: '## AP Exam Tips', body: '- Be able to **identify macromolecules** from structural diagrams\n- Know the **monomers, bonds, and functions** for each class\n- Understand **structure-function relationships** (e.g., why cellulose is structural)\n- Practice **Chargaff\'s rule calculations**\n- Connect macromolecules to **cellular processes** (enzymes, DNA replication, membrane structure)' }], mcQuestions: [{ q: 'Which macromolecule serves as both an energy source and structural material?', opts: ['Lipids', 'Proteins', 'Carbohydrates', 'Nucleic acids'], correct: 2, explanation: 'Carbohydrates serve as quick energy (glucose, glycogen/starch) AND structural material (cellulose in plants, chitin in arthropods).' }, { q: 'A student heats an egg white and observes it turning solid and opaque. This demonstrates:', opts: ['Hydrolysis of peptide bonds', 'Denaturation of proteins', 'Saponification of lipids', 'Caramelization of sugars'], correct: 1, explanation: 'Heating disrupts the hydrogen bonds, ionic bonds, and hydrophobic interactions in egg albumin (a protein), causing it to unfold (denature) and aggregate.' }], dropdowns: { items: [{ label: 'The test for proteins is the ___ test', options: ['Benedict\'s', 'Iodine', 'Biuret', 'Sudan IV'], correct: 'Biuret' }, { label: 'Long-term energy storage in animals uses ___', options: ['glycogen', 'starch', 'fat (triglycerides)', 'cellulose'], correct: 'fat (triglycerides)' }, { label: 'DNA stores ___ information', options: ['energy', 'structural', 'genetic', 'metabolic'], correct: 'genetic' }], hints: ['Biuret reagent turns purple in the presence of peptide bonds.', 'Which macromolecule stores the most energy per gram?', 'DNA is the blueprint of life.'], explanation: 'Biuret test detects proteins. Fat is the long-term energy storage molecule. DNA stores genetic information.' } }
    ]
  },
  // Continue with remaining topics - abbreviated structure for efficiency
  { slug: 'enzyme-structure-function', title: 'Enzyme Structure & Function', prefix: 'bio', exportBase: 'bioEnzymes', parts: generateBioParts('enzyme-structure-function', 'Enzymes', ['Introduction to Enzymes', 'Enzyme Kinetics', 'Factors Affecting Enzymes', 'Enzyme Regulation', 'Coenzymes & Cofactors', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getEnzymeContent()) },
  { slug: 'cell-structure-organelles', title: 'Cell Structure & Organelles', prefix: 'bio', exportBase: 'bioCellStructure', parts: generateBioParts('cell-structure-organelles', 'Cell Structure', ['Introduction to Cells', 'Membrane-Bound Organelles', 'Endomembrane System', 'Energy Organelles', 'Cytoskeleton & Extracellular Matrix', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getCellStructureContent()) },
  { slug: 'membrane-transport', title: 'Membrane Transport', prefix: 'bio', exportBase: 'bioMembraneTransport', parts: generateBioParts('membrane-transport', 'Membrane Transport', ['Membrane Structure', 'Passive Transport', 'Osmosis & Tonicity', 'Active Transport', 'Bulk Transport', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getMembraneTransportContent()) },
  { slug: 'cell-compartmentalization', title: 'Cell Compartmentalization', prefix: 'bio', exportBase: 'bioCellCompartment', parts: generateBioParts('cell-compartmentalization', 'Cell Compartmentalization', ['Prokaryotes vs Eukaryotes', 'Compartment Functions', 'Surface Area to Volume', 'Cell Size Constraints', 'Organelle Interactions', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getCellCompartContent()) },
  { slug: 'cellular-respiration', title: 'Cellular Respiration', prefix: 'bio', exportBase: 'bioCellRespiration', parts: generateBioParts('cellular-respiration', 'Cellular Respiration', ['Overview & Glycolysis', 'Pyruvate Oxidation & Krebs Cycle', 'Electron Transport Chain', 'Oxidative Phosphorylation', 'Anaerobic Respiration', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getCellRespirationContent()) },
  { slug: 'photosynthesis', title: 'Photosynthesis', prefix: 'bio', exportBase: 'bioPhotosynthesis', parts: generateBioParts('photosynthesis-biology', 'Photosynthesis', ['Light Reactions Overview', 'Photosystems I & II', 'Calvin Cycle', 'C4 & CAM Plants', 'Photosynthesis vs Respiration', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getPhotosynthesisContent()) },
  { slug: 'fitness-environment', title: 'Fitness & Environment', prefix: 'bio', exportBase: 'bioFitness', parts: generateBioParts('fitness-environment', 'Fitness & Environment', ['Introduction to Fitness', 'Phenotype & Environment', 'Acclimation & Adaptation', 'Trade-offs in Energy Use', 'Environmental Variation', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getFitnessContent()) },
  { slug: 'cell-communication-signaling', title: 'Cell Communication & Signaling', prefix: 'bio', exportBase: 'bioCellComm', parts: generateBioParts('cell-communication-signaling', 'Cell Communication', ['Signal Transduction Overview', 'Types of Signaling', 'Signal Reception', 'Signal Transduction Pathways', 'Cellular Responses', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getCellCommContent()) },
  { slug: 'cell-cycle-mitosis', title: 'Cell Cycle & Mitosis', prefix: 'bio', exportBase: 'bioCellCycle', parts: generateBioParts('cell-cycle-mitosis', 'Cell Cycle & Mitosis', ['The Cell Cycle Overview', 'Interphase', 'Mitosis Phases', 'Cytokinesis', 'Cell Cycle Regulation', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getCellCycleContent()) },
  { slug: 'feedback-mechanisms', title: 'Feedback Mechanisms', prefix: 'bio', exportBase: 'bioFeedback', parts: generateBioParts('feedback-mechanisms', 'Feedback Mechanisms', ['Homeostasis Introduction', 'Negative Feedback', 'Positive Feedback', 'Thermoregulation', 'Hormonal Feedback', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getFeedbackContent()) },
  { slug: 'meiosis-genetic-diversity', title: 'Meiosis & Genetic Diversity', prefix: 'bio', exportBase: 'bioMeiosis', parts: generateBioParts('meiosis-genetic-diversity', 'Meiosis', ['Meiosis Overview', 'Meiosis I', 'Meiosis II', 'Crossing Over & Recombination', 'Sources of Genetic Variation', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getMeiosisContent()) },
  { slug: 'mendelian-genetics', title: 'Mendelian Genetics', prefix: 'bio', exportBase: 'bioMendelian', parts: generateBioParts('mendelian-genetics', 'Mendelian Genetics', ['Mendel\'s Laws', 'Monohybrid Crosses', 'Dihybrid Crosses', 'Pedigree Analysis', 'Chi-Square Analysis', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getMendelianContent()) },
  { slug: 'non-mendelian-genetics', title: 'Non-Mendelian Genetics', prefix: 'bio', exportBase: 'bioNonMendelian', parts: generateBioParts('non-mendelian-genetics', 'Non-Mendelian Genetics', ['Incomplete & Codominance', 'Multiple Alleles & Polygenic', 'Epistasis', 'Sex-Linked Traits', 'Environmental Effects on Phenotype', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getNonMendelianContent()) },
  { slug: 'dna-replication', title: 'DNA Replication', prefix: 'bio', exportBase: 'bioDnaReplication', parts: generateBioParts('dna-replication', 'DNA Replication', ['Replication Overview', 'Enzymes of Replication', 'Leading & Lagging Strands', 'Proofreading & Repair', 'Telomeres & Telomerase', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getDnaReplicationContent()) },
  { slug: 'transcription-translation', title: 'Transcription & Translation', prefix: 'bio', exportBase: 'bioTranscription', parts: generateBioParts('transcription-translation', 'Transcription & Translation', ['Central Dogma', 'Transcription', 'RNA Processing', 'Translation', 'Post-Translational Modification', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getTranscriptionContent()) },
  { slug: 'gene-regulation', title: 'Gene Regulation', prefix: 'bio', exportBase: 'bioGeneReg', parts: generateBioParts('gene-regulation', 'Gene Regulation', ['Why Regulate Genes?', 'Prokaryotic Regulation (Operons)', 'Eukaryotic Transcription Factors', 'Epigenetics', 'RNA Interference', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getGeneRegContent()) },
  { slug: 'biotechnology', title: 'Biotechnology', prefix: 'bio', exportBase: 'bioBiotech', parts: generateBioParts('biotechnology', 'Biotechnology', ['Restriction Enzymes & Gel Electrophoresis', 'PCR & DNA Sequencing', 'Genetic Engineering & GMOs', 'CRISPR-Cas9', 'Bioethics', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getBiotechContent()) },
  { slug: 'evidence-evolution', title: 'Evidence for Evolution', prefix: 'bio', exportBase: 'bioEvidence', parts: generateBioParts('evidence-evolution', 'Evidence for Evolution', ['Fossil Record', 'Comparative Anatomy', 'Molecular Evidence', 'Biogeography', 'Direct Observation', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getEvidenceContent()) },
  { slug: 'natural-selection-adaptation', title: 'Natural Selection & Adaptation', prefix: 'bio', exportBase: 'bioNatSelection', parts: generateBioParts('natural-selection-adaptation', 'Natural Selection', ['Darwin\'s Theory', 'Mechanisms of Natural Selection', 'Types of Selection', 'Hardy-Weinberg Equilibrium', 'Genetic Drift & Gene Flow', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getNatSelectionContent()) },
  { slug: 'speciation-macroevolution', title: 'Speciation & Macroevolution', prefix: 'bio', exportBase: 'bioSpeciation', parts: generateBioParts('speciation-macroevolution', 'Speciation', ['Species Concepts', 'Allopatric Speciation', 'Sympatric Speciation', 'Adaptive Radiation', 'Extinction & Phylogenetics', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getSpeciationContent()) },
  { slug: 'ecology-ecosystems', title: 'Ecology & Ecosystems', prefix: 'bio', exportBase: 'bioEcology', parts: generateBioParts('ecology-ecosystems', 'Ecology', ['Introduction to Ecology', 'Biomes & Biosphere', 'Ecosystem Structure', 'Abiotic & Biotic Factors', 'Ecological Niche', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getEcologyContent()) },
  { slug: 'energy-flow-nutrient-cycling', title: 'Energy Flow & Nutrient Cycling', prefix: 'bio', exportBase: 'bioEnergyFlow', parts: generateBioParts('energy-flow-nutrient-cycling', 'Energy Flow', ['Food Chains & Webs', 'Trophic Levels', 'Ecological Pyramids', 'Biogeochemical Cycles', 'Human Impact on Cycles', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getEnergyFlowContent()) },
  { slug: 'population-community-ecology', title: 'Population & Community Ecology', prefix: 'bio', exportBase: 'bioPopulation', parts: generateBioParts('population-community-ecology', 'Population Ecology', ['Population Growth Models', 'Carrying Capacity', 'Life History Strategies', 'Community Interactions', 'Ecological Succession', 'Problem-Solving Workshop', 'Synthesis & AP Review'], getPopulationContent()) },
];

// Content generators for each topic
function getEnzymeContent() {
  return [
    // Part 1: Introduction to Enzymes
    { textSections: [{ id: 'intro', title: '⚡ Introduction to Enzymes', body: 'Enzymes are **biological catalysts** — proteins that speed up chemical reactions without being consumed. They are essential for life because most biological reactions would occur too slowly without them.\n\n### Key Concepts\n\n- Enzymes lower the **activation energy** ($E_a$) of reactions\n- They do NOT change the equilibrium or ΔG of a reaction\n- They are highly **specific** — each enzyme catalyzes one type of reaction\n- Most enzymes are proteins (some RNA molecules are catalytic — ribozymes)\n\n### How Enzymes Work\n\nThe **induced fit model** explains enzyme action:\n1. Substrate binds to the enzyme\'s **active site**\n2. The enzyme changes shape to fit the substrate more tightly\n3. The reaction occurs (bonds are stressed, broken, or formed)\n4. Products are released\n5. The enzyme is **unchanged** and can be reused' }, { id: 'energy', title: '## Activation Energy', body: 'Every chemical reaction requires an initial input of energy — the **activation energy** ($E_a$).\n\n| Without Enzyme | With Enzyme |\n|---------------|-------------|\n| High $E_a$ | Lower $E_a$ |\n| Slow reaction rate | Fast reaction rate |\n| Same ΔG | Same ΔG |\n| Same equilibrium | Same equilibrium |\n\nEnzymes can speed up reactions by factors of **$10^6$ to $10^{12}$**!' }],
      mcQuestions: [{ q: 'Enzymes speed up reactions by:', opts: ['Increasing the temperature', 'Lowering the activation energy', 'Changing the equilibrium', 'Increasing ΔG'], correct: 1, explanation: 'Enzymes lower the activation energy barrier, allowing more molecules to react at a given temperature. They don\'t change the equilibrium or ΔG.' }, { q: 'The induced fit model states that:', opts: ['The substrate changes shape to fit the enzyme', 'The enzyme changes shape when the substrate binds', 'Lock and key is always correct', 'Enzymes are consumed in reactions'], correct: 1, explanation: 'In the induced fit model, the enzyme\'s active site changes conformation when the substrate binds, creating a tighter fit.' }],
      dropdowns: { items: [{ label: 'Enzymes are typically made of ___', options: ['carbohydrates', 'lipids', 'proteins', 'nucleic acids'], correct: 'proteins' }, { label: 'The region where substrate binds is the ___', options: ['allosteric site', 'active site', 'regulatory site', 'binding domain'], correct: 'active site' }, { label: 'Enzymes ___ activation energy', options: ['increase', 'lower', 'eliminate', 'don\'t affect'], correct: 'lower' }], hints: ['Most enzymes are proteins (some are RNA).', 'This is the specific 3D pocket where catalysis occurs.', 'Enzymes make reactions easier but don\'t eliminate the energy requirement entirely.'], explanation: 'Enzymes are proteins. Substrates bind at the active site. Enzymes lower (but don\'t eliminate) activation energy.' } },
    // Part 2: Enzyme Kinetics
    { textSections: [{ id: 'kinetics', title: '## Enzyme Kinetics', body: '### Reaction Rate\n\nEnzyme-catalyzed reactions follow a characteristic pattern:\n\n1. **Initial rate** increases linearly with substrate concentration\n2. Rate begins to **plateau** as enzymes become saturated\n3. **$V_{max}$** is reached when all enzyme active sites are occupied\n\n### Key Terms\n\n| Term | Definition |\n|------|------------|\n| **$V_{max}$** | Maximum reaction velocity (all enzymes saturated) |\n| **$K_m$** | Substrate concentration at ½ $V_{max}$ |\n| **Turnover number** | Reactions catalyzed per enzyme per second |\n\n$K_m$ is a measure of enzyme-substrate affinity:\n- **Low $K_m$** = high affinity (enzyme binds substrate tightly)\n- **High $K_m$** = low affinity (enzyme requires more substrate)' }, { id: 'factors', title: '## Substrate Concentration Effects', body: 'At low [S]: Reaction rate is proportional to substrate concentration (first-order kinetics)\n\nAt high [S]: Reaction rate levels off at $V_{max}$ (zero-order kinetics)\n\nThis is because at high concentrations, all enzyme active sites are occupied — the enzyme is **saturated**. Adding more substrate has no effect.' }],
      mcQuestions: [{ q: 'A low Km value indicates:', opts: ['Low enzyme-substrate affinity', 'High enzyme-substrate affinity', 'The enzyme works slowly', 'The reaction is endergonic'], correct: 1, explanation: '$K_m$ is the substrate concentration needed to reach half of $V_{max}$. A low $K_m$ means less substrate is needed, indicating high affinity.' }, { q: 'When all enzyme active sites are occupied by substrate, the reaction is at:', opts: ['Equilibrium', '$V_{max}$', 'Zero rate', '$K_m$'], correct: 1, explanation: 'When all enzyme molecules are bound to substrate (saturated), the reaction proceeds at its maximum velocity ($V_{max}$).' }],
      dropdowns: { items: [{ label: 'At $V_{max}$, all enzymes are ___', options: ['denatured', 'inhibited', 'saturated', 'destroyed'], correct: 'saturated' }, { label: '$K_m$ is measured in units of ___', options: ['time', 'concentration', 'energy', 'velocity'], correct: 'concentration' }, { label: 'Adding more enzyme ___ the $V_{max}$', options: ['increases', 'decreases', 'does not change', 'halves'], correct: 'increases' }], hints: ['All active sites are filled.', 'It\'s a substrate concentration.', 'More enzyme molecules = more total capacity.'], explanation: 'At Vmax, all enzymes are saturated. Km is a concentration (moles/liter). Adding more enzyme increases the total number of active sites, increasing Vmax.' } },
    // Part 3: Factors Affecting Enzymes
    { textSections: [{ id: 'temp', title: '## Temperature & pH Effects', body: '### Temperature\n\n- Increasing temperature **increases reaction rate** (more kinetic energy, more collisions)\n- Until the **optimal temperature** is reached\n- Above optimal: enzyme **denatures** (3D structure unfolds)\n- Most human enzymes: optimal ~37°C\n- Thermophilic bacteria: optimal 70-80°C\n\n### pH\n\n- Each enzyme has an **optimal pH**\n- Deviations disrupt ionic bonds and hydrogen bonds in the tertiary structure\n\n| Enzyme | Optimal pH | Location |\n|--------|-----------|----------|\n| **Pepsin** | ~2 | Stomach |\n| **Trypsin** | ~8 | Small intestine |\n| **Catalase** | ~7 | Most cells |\n| **Salivary amylase** | ~7 | Mouth |' }, { id: 'conc', title: '## Enzyme & Substrate Concentration', body: '### Effect of Enzyme Concentration\n- At fixed [S], increasing [enzyme] increases rate **linearly**\n- More enzyme = more active sites available\n\n### Effect of Substrate Concentration\n- At fixed [enzyme], increasing [S] increases rate until $V_{max}$\n- Eventually, all active sites are occupied (saturation)' }],
      mcQuestions: [{ q: 'Pepsin works best at pH 2 because:', opts: ['All enzymes prefer acidic conditions', 'The stomach is acidic and pepsin evolved to function there', 'Low pH increases activation energy', 'pH 2 denatures all other proteins'], correct: 1, explanation: 'Pepsin evolved to function in the highly acidic environment of the stomach (pH ~2). Its optimal pH reflects its natural working conditions.' }, { q: 'What happens to an enzyme heated well above its optimal temperature?', opts: ['It works faster', 'It denatures and loses function', 'Its Km decreases', 'It becomes a ribozyme'], correct: 1, explanation: 'Excessive heat breaks the weak bonds (H-bonds, ionic bonds, hydrophobic interactions) that maintain the enzyme\'s 3D shape, causing denaturation.' }],
      dropdowns: { items: [{ label: 'Human enzymes generally have an optimal temperature near ___°C', options: ['0', '25', '37', '100'], correct: '37' }, { label: 'Denaturation disrupts the enzyme\'s ___', options: ['primary structure', '3D shape', 'amino acid sequence', 'peptide bonds'], correct: '3D shape' }, { label: 'Increasing enzyme concentration ___ the reaction rate', options: ['increases', 'decreases', 'does not affect', 'halves'], correct: 'increases' }], hints: ['Normal body temperature.', 'Shape = function in biology.', 'More enzyme = more active sites.'], explanation: 'Human enzymes work best at body temperature (37°C). Denaturation disrupts the 3D shape while preserving the primary structure. More enzyme molecules increase the rate.' } },
    // Part 4: Enzyme Regulation
    { textSections: [{ id: 'inhibition', title: '## Enzyme Inhibition', body: '### Competitive Inhibition\n\n- Inhibitor **resembles the substrate** and binds to the **active site**\n- Competes directly with substrate for the active site\n- Can be overcome by **increasing substrate concentration**\n- Increases apparent $K_m$ (lower affinity), $V_{max}$ unchanged\n\n### Noncompetitive Inhibition\n\n- Inhibitor binds to an **allosteric site** (not the active site)\n- Changes enzyme shape so the active site no longer fits the substrate\n- **Cannot** be overcome by increasing [S]\n- $K_m$ unchanged, $V_{max}$ decreases\n\n### Uncompetitive Inhibition\n\n- Inhibitor binds only to the **enzyme-substrate complex**\n- Both $K_m$ and $V_{max}$ decrease' }, { id: 'allosteric', title: '## Allosteric Regulation', body: '### Allosteric Enzymes\n\nSome enzymes have **allosteric sites** — binding sites separate from the active site.\n\n| Type | Effect |\n|------|--------|\n| **Allosteric activator** | Stabilizes active conformation → increases activity |\n| **Allosteric inhibitor** | Stabilizes inactive conformation → decreases activity |\n\n### Feedback Inhibition\n\nThe **end product** of a metabolic pathway inhibits an **early enzyme** in the pathway.\n\nExample: In the pathway A → B → C → D, product D inhibits the enzyme that converts A → B.\n\nThis is a form of **negative feedback** that prevents overproduction.' }],
      mcQuestions: [{ q: 'A competitive inhibitor can be overcome by:', opts: ['Lowering temperature', 'Increasing substrate concentration', 'Adding more inhibitor', 'Changing pH'], correct: 1, explanation: 'Competitive inhibitors compete with substrate for the active site. Adding more substrate outcompetes the inhibitor.' }, { q: 'In feedback inhibition, which enzyme is typically inhibited?', opts: ['The last enzyme in the pathway', 'The first enzyme in the pathway', 'All enzymes equally', 'No specific enzyme'], correct: 1, explanation: 'Feedback inhibition targets an early (often the first) enzyme in the pathway. This efficiently shuts down the entire pathway when the end product accumulates.' }],
      dropdowns: { items: [{ label: 'Competitive inhibitors bind to the ___', options: ['allosteric site', 'active site', 'substrate', 'product'], correct: 'active site' }, { label: 'Noncompetitive inhibition ___ $V_{max}$', options: ['increases', 'decreases', 'does not change', 'doubles'], correct: 'decreases' }, { label: 'Feedback inhibition is a type of ___ regulation', options: ['positive feedback', 'negative feedback', 'feed-forward', 'constitutive'], correct: 'negative feedback' }], hints: ['Competitive inhibitors mimic the substrate.', 'The enzyme shape changes even when substrate is present.', 'The end product turns off its own production.'], explanation: 'Competitive inhibitors bind at the active site. Noncompetitive inhibition decreases Vmax. Feedback inhibition is negative feedback.' } },
    // Part 5: Coenzymes & Cofactors
    { textSections: [{ id: 'cofactors', title: '## Cofactors & Coenzymes', body: '### Cofactors\n\n**Cofactors** are non-protein molecules required for enzyme activity.\n\n| Type | Nature | Examples |\n|------|--------|----------|\n| **Inorganic cofactors** | Metal ions | $Zn^{2+}$, $Fe^{2+}$, $Mg^{2+}$, $Cu^{2+}$ |\n| **Coenzymes** | Organic molecules | NAD⁺, FAD, coenzyme A |\n| **Prosthetic groups** | Tightly bound | Heme group in hemoglobin |\n\n### Important Coenzymes\n\n| Coenzyme | Derived from | Function |\n|----------|-------------|----------|\n| **NAD⁺** | Niacin (B3) | Electron carrier in respiration |\n| **FAD** | Riboflavin (B2) | Electron carrier in Krebs cycle |\n| **Coenzyme A** | Pantothenic acid (B5) | Carries acetyl groups |\n| **ATP** | Adenine nucleotide | Energy currency |' }, { id: 'vitamins', title: '## Vitamins as Coenzymes', body: 'Many **vitamins** function as coenzymes or coenzyme precursors.\n\n- **Water-soluble vitamins** (B vitamins, vitamin C) often serve as coenzymes\n- **Fat-soluble vitamins** (A, D, E, K) have other roles\n- Vitamin deficiencies impair enzyme function\n- Example: Scurvy (vitamin C deficiency) → impaired collagen synthesis\n\nWithout the proper cofactor, an enzyme is called an **apoenzyme** (inactive). With its cofactor, it\'s a **holoenzyme** (active).' }],
      mcQuestions: [{ q: 'NAD⁺ functions as a(n):', opts: ['Enzyme', 'Substrate', 'Coenzyme (electron carrier)', 'Competitive inhibitor'], correct: 2, explanation: 'NAD⁺ is a coenzyme that carries electrons (as NADH) during cellular respiration. It shuttles electrons to the electron transport chain.' }, { q: 'An apoenzyme is:', opts: ['An enzyme with its cofactor attached', 'An enzyme without its cofactor (inactive)', 'A denatured enzyme', 'An enzyme inhibitor'], correct: 1, explanation: 'An apoenzyme is the protein portion of an enzyme without its required cofactor. It\'s inactive. With the cofactor, it becomes a holoenzyme.' }],
      dropdowns: { items: [{ label: 'Metal ions that assist enzymes are called ___', options: ['substrates', 'cofactors', 'products', 'inhibitors'], correct: 'cofactors' }, { label: 'NAD⁺ is derived from vitamin ___', options: ['A', 'B3 (niacin)', 'C', 'D'], correct: 'B3 (niacin)' }, { label: 'An enzyme with its cofactor is called a ___', options: ['apoenzyme', 'holoenzyme', 'proenzyme', 'isoenzyme'], correct: 'holoenzyme' }], hints: ['These non-protein helpers are often metal ions.', 'This B vitamin is essential for cellular respiration.', 'Holo = whole, complete.'], explanation: 'Metal ion helpers are cofactors. NAD⁺ comes from niacin (vitamin B3). A complete, active enzyme with its cofactor is a holoenzyme.' } },
    // Part 6: Problem-Solving Workshop
    { textSections: [{ id: 'workshop', title: '## Enzyme Problem-Solving Workshop', body: '### AP Exam Strategy for Enzyme Questions\n\n1. **Identify the enzyme property** being tested\n2. **Draw or visualize** the energy diagram if relevant\n3. **Distinguish inhibition types** by their effects on $K_m$ and $V_{max}$\n4. **Connect to biological context** (what pathway? what regulation?)\n\n### Common Mistakes to Avoid\n\n- Enzymes do NOT provide energy for reactions\n- Competitive inhibition does NOT change $V_{max}$\n- Denaturation ≠ competitive inhibition\n- Enzymes are NOT consumed in reactions' }, { id: 'practice', title: '## Practice Scenarios', body: '### Scenario 1\nA pharmaceutical company designs a drug that has a similar shape to the substrate of a disease-causing enzyme. Predict how this drug works.\n\n**Answer:** The drug acts as a competitive inhibitor — it binds to the active site and blocks the natural substrate.\n\n### Scenario 2\nA student adds increasing amounts of substrate to an enzyme-catalyzed reaction. The rate increases and then plateaus. Explain.\n\n**Answer:** At low [S], increasing substrate increases the rate because more enzyme-substrate complexes form. At high [S], all active sites are occupied (saturation), so the rate plateaus at $V_{max}$.' }],
      mcQuestions: [{ q: 'An enzyme has $K_m$ = 5 mM. What does this tell you?', opts: ['The enzyme denatures at 5 mM substrate', 'Half of $V_{max}$ is reached at 5 mM substrate', 'The enzyme has 5 active sites', 'The reaction rate is 5 mM/s'], correct: 1, explanation: '$K_m$ is the substrate concentration at which the reaction rate is half of $V_{max}$. A $K_m$ of 5 mM means half-maximal velocity occurs at 5 mM substrate.' }, { q: 'Adding a noncompetitive inhibitor to an enzyme:', opts: ['Increases $V_{max}$', 'Decreases $V_{max}$ without changing $K_m$', 'Increases $K_m$ without changing $V_{max}$', 'Has no effect on kinetics'], correct: 1, explanation: 'Noncompetitive inhibitors bind allosterically and reduce $V_{max}$ (fewer functional enzyme molecules) without affecting $K_m$ (substrate binding affinity is unchanged).' }, { q: 'Mercury ions (Hg²⁺) permanently inactivate enzymes by disrupting disulfide bonds. This is an example of:', opts: ['Competitive inhibition', 'Noncompetitive inhibition', 'Irreversible inhibition', 'Feedback inhibition'], correct: 2, explanation: 'Mercury permanently alters the enzyme structure by breaking disulfide bonds. This is irreversible inhibition — the enzyme cannot recover.' }],
      dropdowns: { items: [{ label: 'A drug shaped like the substrate is likely a ___ inhibitor', options: ['competitive', 'noncompetitive', 'uncompetitive', 'allosteric activator'], correct: 'competitive' }, { label: 'At saturation, adding more substrate ___ the rate', options: ['increases', 'decreases', 'does not change', 'doubles'], correct: 'does not change' }, { label: 'Cyanide inhibits cytochrome c oxidase irreversibly. This type of inhibition ___ be overcome by adding more substrate', options: ['can', 'cannot', 'sometimes can', 'always can'], correct: 'cannot' }], hints: ['Shaped like the substrate → competes for the active site.', 'All active sites are already filled.', 'Irreversible = permanent damage to enzyme.'], explanation: 'Substrate-shaped drugs are competitive inhibitors. At saturation, more substrate doesn\'t help. Irreversible inhibition cannot be overcome.' } },
    // Part 7: Synthesis & AP Review
    { textSections: [{ id: 'synthesis', title: '## Enzyme Synthesis & AP Review', body: '### Key Enzyme Concepts for AP Biology\n\n| Concept | Details |\n|---------|--------|\n| **Activation energy** | Energy barrier enzymes lower |\n| **Active site** | Specific 3D pocket for substrate |\n| **Induced fit** | Enzyme changes shape upon binding |\n| **$V_{max}$** | Max rate when saturated |\n| **$K_m$** | Substrate concentration at ½ $V_{max}$ |\n| **Competitive** | Binds active site, ↑ $K_m$ |\n| **Noncompetitive** | Binds allosteric site, ↓ $V_{max}$ |\n| **Feedback inhibition** | End product inhibits early enzyme |' }, { id: 'tips', title: '## AP Exam Tips', body: '- Be able to **interpret enzyme kinetics graphs** (rate vs. [S] curves)\n- Know how **inhibitor types** affect $K_m$ and $V_{max}$\n- Understand **how pH and temperature** affect enzyme activity\n- Connect enzyme regulation to **metabolic pathways**\n- Practice **experimental design** questions about enzyme activity' }],
      mcQuestions: [{ q: 'Which graph shows the effect of a competitive inhibitor?', opts: ['Higher $V_{max}$, same $K_m$', 'Same $V_{max}$, higher apparent $K_m$', 'Lower $V_{max}$, same $K_m$', 'Lower $V_{max}$, lower $K_m$'], correct: 1, explanation: 'Competitive inhibitors increase the apparent $K_m$ (more substrate needed) but don\'t change $V_{max}$ (at high enough [S], the inhibitor is outcompeted).' }, { q: 'An enzyme in a metabolic pathway is regulated by the pathway\'s end product. This is:', opts: ['Competitive inhibition', 'Allosteric activation', 'Feedback inhibition', 'Irreversible inhibition'], correct: 2, explanation: 'Feedback (end-product) inhibition occurs when the final product allosterically inhibits an early enzyme in its own synthesis pathway.' }],
      dropdowns: { items: [{ label: 'Enzymes ___ the ΔG of a reaction', options: ['increase', 'decrease', 'do not change', 'reverse'], correct: 'do not change' }, { label: 'The lock-and-key model has been replaced by the ___ model', options: ['fluid mosaic', 'induced fit', 'competitive', 'allosteric'], correct: 'induced fit' }, { label: 'Ribozymes are catalytic ___ molecules', options: ['protein', 'RNA', 'DNA', 'lipid'], correct: 'RNA' }], hints: ['Catalysts don\'t change thermodynamics.', 'The enzyme changes shape to fit the substrate.', 'These RNA molecules can catalyze reactions.'], explanation: 'Enzymes don\'t change ΔG (thermodynamics). The induced fit model describes enzyme flexibility. Ribozymes are catalytic RNA molecules.' } }
  ];
}

// Generic content generators for remaining topics
function getCellStructureContent() { return generateGenericContent('cell-structure-organelles', 'Cell Structure & Organelles', [
  { topic: 'Introduction to Cells', concepts: ['Cell theory: all living things are made of cells', 'Microscopy: light vs. electron microscopes', 'Prokaryotic vs. eukaryotic cells', 'Cell size ranges from 1-100 μm'] },
  { topic: 'Membrane-Bound Organelles', concepts: ['Nucleus: contains DNA, double membrane', 'Endoplasmic reticulum: rough (ribosomes) and smooth', 'Golgi apparatus: modifies, sorts, ships proteins', 'Lysosomes: digestive enzymes, pH ~5'] },
  { topic: 'Endomembrane System', concepts: ['ER → Golgi → plasma membrane pathway', 'Vesicle transport between compartments', 'Signal sequences direct protein trafficking', 'Autophagy and cellular recycling'] },
  { topic: 'Energy Organelles', concepts: ['Mitochondria: cellular respiration, double membrane', 'Chloroplasts: photosynthesis, thylakoids + stroma', 'Endosymbiotic theory: evolved from bacteria', 'Both have their own DNA and ribosomes'] },
  { topic: 'Cytoskeleton & Extracellular Matrix', concepts: ['Microfilaments (actin): cell movement, 7nm', 'Intermediate filaments: structural support', 'Microtubules (tubulin): cell division, transport, 25nm', 'ECM: collagen, fibronectin, proteoglycans'] },
  { topic: 'Problem-Solving', concepts: ['Identifying organelles by function', 'Predicting effects of organelle dysfunction', 'Comparing plant and animal cells', 'Experimental design with cellular components'] },
  { topic: 'Synthesis & AP Review', concepts: ['Structure-function relationships in cells', 'Compartmentalization enables specialization', 'Endosymbiotic theory evidence', 'Cell biology connects to all AP Bio units'] }
]); }

function getMembraneTransportContent() { return generateGenericContent('membrane-transport', 'Membrane Transport', [
  { topic: 'Membrane Structure', concepts: ['Fluid mosaic model', 'Phospholipid bilayer: hydrophilic heads, hydrophobic tails', 'Membrane proteins: integral and peripheral', 'Cholesterol: maintains fluidity'] },
  { topic: 'Passive Transport', concepts: ['Diffusion: high to low concentration', 'Facilitated diffusion: channel and carrier proteins', 'No ATP required', 'Rate depends on concentration gradient and temperature'] },
  { topic: 'Osmosis & Tonicity', concepts: ['Osmosis: water moves across semipermeable membrane', 'Hypotonic: water enters cell (lysis in animal cells)', 'Hypertonic: water leaves cell (crenation/plasmolysis)', 'Isotonic: no net water movement'] },
  { topic: 'Active Transport', concepts: ['Requires ATP', 'Sodium-potassium pump: 3 Na⁺ out, 2 K⁺ in', 'Moves against concentration gradient', 'Electrochemical gradient'] },
  { topic: 'Bulk Transport', concepts: ['Endocytosis: phagocytosis, pinocytosis, receptor-mediated', 'Exocytosis: vesicles fuse with membrane', 'Used for large molecules and particles', 'Requires energy (ATP)'] },
  { topic: 'Problem-Solving', concepts: ['Predicting water movement in different solutions', 'Designing osmosis experiments', 'Calculating water potential', 'Identifying transport mechanisms'] },
  { topic: 'Synthesis & AP Review', concepts: ['Water potential equation: Ψ = Ψs + Ψp', 'Membrane transport in homeostasis', 'Transport defects cause diseases', 'Free-response practice'] }
]); }

function getCellCompartContent() { return generateGenericContent('cell-compartmentalization', 'Cell Compartmentalization', [
  { topic: 'Prokaryotes vs Eukaryotes', concepts: ['Prokaryotes: no nucleus, no membrane-bound organelles', 'Eukaryotes: nucleus and compartmentalized organelles', 'Both have ribosomes, DNA, plasma membrane', 'Size difference: prokaryotes 1-10 μm, eukaryotes 10-100 μm'] },
  { topic: 'Compartment Functions', concepts: ['Organelles create separate chemical environments', 'Different pH in different compartments', 'Concentrated enzymes increase efficiency', 'Prevents incompatible reactions from interfering'] },
  { topic: 'Surface Area to Volume', concepts: ['As cells grow, volume increases faster than surface area', 'SA:V ratio limits cell size', 'Small cells have higher SA:V → more efficient exchange', 'Adaptations: microvilli, folded membranes'] },
  { topic: 'Cell Size Constraints', concepts: ['Diffusion limits how large cells can be', 'Need adequate surface area for nutrient/waste exchange', 'DNA must be able to control entire cell volume', 'Exceptions: neurons, muscle fibers (multinucleated)'] },
  { topic: 'Organelle Interactions', concepts: ['Endomembrane system connects organelles', 'Mitochondria interact with ER', 'Vesicle trafficking between compartments', 'Metabolic pathways span multiple organelles'] },
  { topic: 'Problem-Solving', concepts: ['SA:V ratio calculations', 'Predicting effects of compartment disruption', 'Comparing prokaryotic and eukaryotic strategies', 'Experimental design questions'] },
  { topic: 'Synthesis & AP Review', concepts: ['Compartmentalization as an evolutionary advantage', 'Connection to energy and metabolism', 'Surface area adaptations in different cell types', 'AP exam strategies for cell biology questions'] }
]); }

function getCellRespirationContent() { return generateGenericContent('cellular-respiration', 'Cellular Respiration', [
  { topic: 'Overview & Glycolysis', concepts: ['Overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', 'Glycolysis occurs in cytoplasm, no O₂ required', 'Glucose → 2 pyruvate + 2 ATP + 2 NADH', 'First step of both aerobic and anaerobic respiration'] },
  { topic: 'Pyruvate Oxidation & Krebs Cycle', concepts: ['Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)', 'Krebs cycle: acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP', 'Per glucose: cycle turns twice', 'Occurs in mitochondrial matrix'] },
  { topic: 'Electron Transport Chain', concepts: ['Located in inner mitochondrial membrane', 'NADH and FADH₂ donate electrons', 'Electrons pass through complexes I-IV', 'O₂ is the final electron acceptor → H₂O'] },
  { topic: 'Oxidative Phosphorylation', concepts: ['Chemiosmosis: H⁺ gradient drives ATP synthase', 'ETC creates proton gradient across inner membrane', 'ATP synthase: molecular turbine', '~30-32 ATP per glucose from oxidative phosphorylation'] },
  { topic: 'Anaerobic Respiration', concepts: ['Fermentation when O₂ is absent', 'Lactic acid fermentation: pyruvate → lactate (animals, bacteria)', 'Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast)', 'Only 2 ATP per glucose without O₂'] },
  { topic: 'Problem-Solving', concepts: ['ATP yield calculations', 'Identifying where each stage occurs', 'Predicting effects of ETC inhibitors', 'Comparing aerobic vs anaerobic pathways'] },
  { topic: 'Synthesis & AP Review', concepts: ['Total ATP yield: ~36-38 per glucose', 'Energy coupling and chemiosmosis', 'Evolution of aerobic respiration', 'Connection to photosynthesis'] }
]); }

function getPhotosynthesisContent() { return generateGenericContent('photosynthesis-biology', 'Photosynthesis', [
  { topic: 'Light Reactions Overview', concepts: ['Occur in thylakoid membranes', 'Light energy → ATP + NADPH + O₂', 'Water is split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂', 'Chlorophyll absorbs red and blue light, reflects green'] },
  { topic: 'Photosystems I & II', concepts: ['PS II (P680): splits water, passes electrons to ETC', 'PS I (P700): reduces NADP⁺ to NADPH', 'Non-cyclic electron flow: H₂O → PS II → ETC → PS I → NADPH', 'Cyclic electron flow: PS I only, produces ATP only'] },
  { topic: 'Calvin Cycle', concepts: ['Occurs in stroma of chloroplast', 'Carbon fixation: CO₂ + RuBP → 2 G3P (by RuBisCO)', '3 CO₂ → 1 G3P → glucose', 'Uses 9 ATP and 6 NADPH per G3P'] },
  { topic: 'C4 & CAM Plants', concepts: ['C3 plants: Calvin cycle directly (most plants)', 'C4 plants: fix CO₂ in mesophyll, Calvin cycle in bundle sheath', 'CAM plants: fix CO₂ at night, Calvin cycle by day', 'C4 and CAM adaptations reduce photorespiration'] },
  { topic: 'Photosynthesis vs Respiration', concepts: ['Photosynthesis: light energy → chemical energy (glucose)', 'Respiration: chemical energy → ATP', 'Complementary processes: products of one feed the other', 'Both use chemiosmosis and electron transport'] },
  { topic: 'Problem-Solving', concepts: ['Interpreting absorption spectra', 'Predicting effects of light color on photosynthesis rate', 'Experimental design with photosynthesis variables', 'Calculating net vs gross photosynthesis'] },
  { topic: 'Synthesis & AP Review', concepts: ['Connection between light reactions and Calvin cycle', 'Energy transformations: light → chemical → ATP', 'Environmental factors affecting photosynthesis rate', 'Comparing C3, C4, and CAM strategies'] }
]); }

function getFitnessContent() { return generateGenericContent('fitness-environment', 'Fitness & Environment', [
  { topic: 'Introduction to Fitness', concepts: ['Biological fitness: reproductive success', 'Fitness is relative (compared to other genotypes)', 'Natural selection acts on phenotypes', 'Genotype × environment interaction'] },
  { topic: 'Phenotype & Environment', concepts: ['Phenotype = genotype + environment', 'Norm of reaction: range of phenotypes from one genotype', 'Phenotypic plasticity: ability to change phenotype', 'Examples: skin tanning, muscle growth, plant growth toward light'] },
  { topic: 'Acclimation & Adaptation', concepts: ['Acclimation: short-term physiological adjustment (not genetic)', 'Adaptation: genetic change over generations', 'Acclimatization vs adaptation timescales', 'Examples: altitude acclimation, arctic fur color change'] },
  { topic: 'Trade-offs in Energy Use', concepts: ['Limited energy budget: reproduction vs growth vs survival', 'r-selected: many offspring, little parental care', 'K-selected: few offspring, high parental investment', 'Life history trade-offs shaped by natural selection'] },
  { topic: 'Environmental Variation', concepts: ['Spatial variation: different habitats', 'Temporal variation: seasonal changes', 'Predictable vs unpredictable environments', 'Bet-hedging strategies in variable environments'] },
  { topic: 'Problem-Solving', concepts: ['Analyzing fitness data in different environments', 'Predicting phenotypic responses', 'Evaluating trade-off scenarios', 'Designing experiments to measure fitness'] },
  { topic: 'Synthesis & AP Review', concepts: ['Fitness connects to evolution and ecology', 'Environment shapes phenotype and selection', 'Adaptation vs acclimation distinction', 'AP free-response strategies for fitness questions'] }
]); }

function getCellCommContent() { return generateGenericContent('cell-communication-signaling', 'Cell Communication', [
  { topic: 'Signal Transduction Overview', concepts: ['Cells communicate through chemical signals', 'Three stages: reception, transduction, response', 'Signal molecules: hormones, neurotransmitters, growth factors', 'Specificity: only target cells with correct receptors respond'] },
  { topic: 'Types of Signaling', concepts: ['Endocrine: long-distance via bloodstream (hormones)', 'Paracrine: local signaling to nearby cells', 'Autocrine: cell signals itself', 'Direct contact: gap junctions, plasmodesmata'] },
  { topic: 'Signal Reception', concepts: ['Membrane receptors: G-protein coupled, receptor tyrosine kinases, ion channels', 'Intracellular receptors: for lipid-soluble signals (steroids)', 'Ligand binding causes conformational change', 'Receptor specificity determines which cells respond'] },
  { topic: 'Signal Transduction Pathways', concepts: ['Phosphorylation cascades: kinases add phosphate groups', 'Second messengers: cAMP, Ca²⁺, IP₃', 'Signal amplification: one signal → many responses', 'G-protein linked: α subunit activates adenylyl cyclase → cAMP'] },
  { topic: 'Cellular Responses', concepts: ['Gene expression changes: transcription factors activated', 'Enzyme activation/deactivation', 'Cell division stimulation or inhibition', 'Apoptosis: programmed cell death'] },
  { topic: 'Problem-Solving', concepts: ['Tracing a signal from reception to response', 'Predicting effects of pathway mutations', 'Analyzing signal amplification', 'Connecting signaling to disease (cancer)'] },
  { topic: 'Synthesis & AP Review', concepts: ['Signal transduction in homeostasis', 'Signaling errors and disease', 'Evolution of signaling pathways', 'AP free-response: pathway analysis'] }
]); }

function getCellCycleContent() { return generateGenericContent('cell-cycle-mitosis', 'Cell Cycle & Mitosis', [
  { topic: 'The Cell Cycle Overview', concepts: ['Interphase (G1, S, G2) + Mitotic phase (M)', 'Most of cell cycle spent in interphase (~90%)', 'DNA replicated during S phase', 'Cell growth in G1 and G2'] },
  { topic: 'Interphase', concepts: ['G1: cell growth, organelle duplication', 'S phase: DNA replication (each chromosome → sister chromatids)', 'G2: preparation for mitosis, error checking', 'G0: cells that have exited the cell cycle'] },
  { topic: 'Mitosis Phases', concepts: ['Prophase: chromosomes condense, spindle forms', 'Metaphase: chromosomes align at metaphase plate', 'Anaphase: sister chromatids separate, move to poles', 'Telophase: nuclear envelopes reform, chromosomes decondense'] },
  { topic: 'Cytokinesis', concepts: ['Division of cytoplasm after mitosis', 'Animal cells: cleavage furrow (actin ring)', 'Plant cells: cell plate forms from Golgi vesicles', 'Result: two identical daughter cells'] },
  { topic: 'Cell Cycle Regulation', concepts: ['Checkpoints: G1, G2, and M checkpoints', 'Cyclins and CDKs control progression', 'Tumor suppressors (p53, Rb) and proto-oncogenes', 'Cancer: loss of cell cycle control'] },
  { topic: 'Problem-Solving', concepts: ['Identifying mitosis stages from images', 'Predicting chromosome numbers after division', 'Analyzing cell cycle regulation failures', 'Connecting to cancer biology'] },
  { topic: 'Synthesis & AP Review', concepts: ['Mitosis vs meiosis comparison', 'Cell cycle regulation and cancer', 'Chromosome behavior during division', 'AP exam: diagram interpretation'] }
]); }

function getFeedbackContent() { return generateGenericContent('feedback-mechanisms', 'Feedback Mechanisms', [
  { topic: 'Homeostasis Introduction', concepts: ['Homeostasis: maintaining internal stability', 'Dynamic equilibrium: constant adjustments', 'Set point: target value for a variable', 'Receptor → control center → effector pathway'] },
  { topic: 'Negative Feedback', concepts: ['Output opposes the change that triggered it', 'Most common feedback in biology', 'Example: thermostat — heating turns off when temperature reached', 'Example: blood glucose regulation by insulin/glucagon'] },
  { topic: 'Positive Feedback', concepts: ['Output amplifies the change', 'Less common, used for rapid processes', 'Example: blood clotting cascade', 'Example: oxytocin during childbirth (labor contractions)'] },
  { topic: 'Thermoregulation', concepts: ['Endotherms: internal heat production (mammals, birds)', 'Ectotherms: body temperature follows environment', 'Hypothalamus: thermostat of the body', 'Responses: shivering, sweating, vasodilation/constriction'] },
  { topic: 'Hormonal Feedback', concepts: ['Hypothalamus-pituitary axis', 'Thyroid hormone negative feedback', 'Blood calcium regulation: PTH and calcitonin', 'Blood glucose: insulin (lowers) and glucagon (raises)'] },
  { topic: 'Problem-Solving', concepts: ['Diagramming feedback loops', 'Predicting effects of disrupted feedback', 'Distinguishing positive from negative feedback', 'Analyzing homeostatic responses'] },
  { topic: 'Synthesis & AP Review', concepts: ['Feedback in all body systems', 'Disease as homeostatic failure', 'Feedback at population and ecosystem levels', 'AP exam: constructing feedback diagrams'] }
]); }

function getMeiosisContent() { return generateGenericContent('meiosis-genetic-diversity', 'Meiosis', [
  { topic: 'Meiosis Overview', concepts: ['Meiosis produces gametes (sex cells)', 'Reduces chromosome number by half (2n → n)', 'Two divisions: meiosis I and meiosis II', 'Results in 4 haploid daughter cells'] },
  { topic: 'Meiosis I', concepts: ['Homologous chromosomes pair up (synapsis)', 'Crossing over occurs during prophase I', 'Homologs align at metaphase plate (random orientation)', 'Homologous pairs separate in anaphase I (reductional division)'] },
  { topic: 'Meiosis II', concepts: ['Similar to mitosis', 'Sister chromatids separate', 'No DNA replication between meiosis I and II', 'Four haploid cells produced'] },
  { topic: 'Crossing Over & Recombination', concepts: ['Nonsister chromatids exchange segments', 'Occurs at chiasmata during prophase I', 'Creates recombinant chromosomes', 'Increases genetic variation in offspring'] },
  { topic: 'Sources of Genetic Variation', concepts: ['Independent assortment: 2ⁿ possible combinations (n = # of chromosome pairs)', 'Crossing over: creates new allele combinations', 'Random fertilization: any sperm + any egg', 'Humans: 2²³ × 2²³ = ~70 trillion possible combinations (without crossing over)'] },
  { topic: 'Problem-Solving', concepts: ['Chromosome counting through meiosis stages', 'Predicting gamete genotypes', 'Comparing mitosis and meiosis', 'Nondisjunction and its consequences'] },
  { topic: 'Synthesis & AP Review', concepts: ['Meiosis as the basis for Mendel\'s laws', 'Connection to evolution (genetic variation)', 'Errors in meiosis: nondisjunction, trisomy', 'AP exam: comparing mitosis and meiosis'] }
]); }

function getMendelianContent() { return generateGenericContent('mendelian-genetics', 'Mendelian Genetics', [
  { topic: 'Mendel\'s Laws', concepts: ['Law of Segregation: two alleles separate during gamete formation', 'Law of Independent Assortment: genes on different chromosomes sort independently', 'Dominant alleles mask recessive alleles', 'Mendel\'s experimental approach with pea plants'] },
  { topic: 'Monohybrid Crosses', concepts: ['Punnett squares for single-gene crosses', 'Genotypic ratio: 1 AA : 2 Aa : 1 aa', 'Phenotypic ratio: 3 dominant : 1 recessive', 'Test cross: cross with homozygous recessive to determine genotype'] },
  { topic: 'Dihybrid Crosses', concepts: ['Two-gene Punnett square (4×4 = 16 outcomes)', 'Expected phenotypic ratio: 9:3:3:1', 'AaBb × AaBb cross', 'Deviation from 9:3:3:1 suggests gene linkage'] },
  { topic: 'Pedigree Analysis', concepts: ['Circles = females, squares = males', 'Filled = affected, open = unaffected', 'Autosomal dominant: affected in every generation', 'Autosomal recessive: can skip generations, carrier parents'] },
  { topic: 'Chi-Square Analysis', concepts: ['Tests if observed data fits expected ratios', 'χ² = Σ (observed - expected)² / expected', 'Degrees of freedom = categories - 1', 'p < 0.05: reject null hypothesis (results differ significantly)'] },
  { topic: 'Problem-Solving', concepts: ['Solving Punnett square problems', 'Determining inheritance patterns from pedigrees', 'Performing chi-square calculations', 'Predicting offspring ratios'] },
  { topic: 'Synthesis & AP Review', concepts: ['Mendel\'s laws and chromosome behavior', 'Probability in genetics', 'Chi-square on the AP exam', 'Connecting genetics to evolution'] }
]); }

function getNonMendelianContent() { return generateGenericContent('non-mendelian-genetics', 'Non-Mendelian Genetics', [
  { topic: 'Incomplete & Codominance', concepts: ['Incomplete dominance: heterozygote is intermediate (red × white = pink)', 'Codominance: both alleles fully expressed (AB blood type)', 'Neither follows simple dominant/recessive pattern', 'Modified phenotypic ratios: 1:2:1 instead of 3:1'] },
  { topic: 'Multiple Alleles & Polygenic', concepts: ['Multiple alleles: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)', 'Polygenic traits: multiple genes affect one trait', 'Examples: skin color, height, eye color', 'Polygenic traits show continuous variation (bell curve)'] },
  { topic: 'Epistasis', concepts: ['One gene masks the expression of another', 'Example: coat color in Labrador retrievers (E gene masks B gene)', 'Modified dihybrid ratios: 9:3:4, 12:3:1, 9:7', 'Different from dominance (which is within one gene)'] },
  { topic: 'Sex-Linked Traits', concepts: ['X-linked traits: genes on X chromosome', 'Males (XY) express all X-linked alleles (hemizygous)', 'Females (XX) can be carriers of recessive X-linked traits', 'Examples: color blindness, hemophilia, Duchenne muscular dystrophy'] },
  { topic: 'Environmental Effects on Phenotype', concepts: ['Phenotype = genotype + environment', 'Temperature-sensitive alleles: Siamese cats', 'Nutrition affects height (polygenic)', 'Epigenetics: environmental factors affect gene expression'] },
  { topic: 'Problem-Solving', concepts: ['Identifying inheritance patterns from crosses', 'Solving X-linked inheritance problems', 'Distinguishing codominance from incomplete dominance', 'Analyzing polygenic trait distributions'] },
  { topic: 'Synthesis & AP Review', concepts: ['Non-Mendelian patterns expand Mendel\'s laws', 'Multiple genes and environment create phenotypic diversity', 'Sex-linked traits on the AP exam', 'Connecting to evolution and natural selection'] }
]); }

function getDnaReplicationContent() { return generateGenericContent('dna-replication', 'DNA Replication', [
  { topic: 'Replication Overview', concepts: ['Semiconservative replication: each new DNA has one old + one new strand', 'Meselson-Stahl experiment proved semiconservative model', 'Occurs during S phase of cell cycle', 'Bidirectional from origins of replication'] },
  { topic: 'Enzymes of Replication', concepts: ['Helicase: unwinds double helix', 'Primase: synthesizes RNA primer', 'DNA polymerase III: adds nucleotides 5\'→3\'', 'Ligase: seals gaps between Okazaki fragments'] },
  { topic: 'Leading & Lagging Strands', concepts: ['Leading strand: continuous synthesis toward replication fork', 'Lagging strand: discontinuous synthesis away from fork (Okazaki fragments)', 'Both strands synthesized 5\'→3\'', 'Primase must lay down primer for each Okazaki fragment'] },
  { topic: 'Proofreading & Repair', concepts: ['DNA polymerase has 3\'→5\' exonuclease (proofreading) activity', 'Mismatch repair: corrects base-pairing errors', 'Nucleotide excision repair: fixes UV damage (thymine dimers)', 'Error rate: ~1 per 10⁹ nucleotides after all repair'] },
  { topic: 'Telomeres & Telomerase', concepts: ['Telomeres: repetitive sequences at chromosome ends (TTAGGG)', 'Shorten with each replication (end replication problem)', 'Telomerase: enzyme that extends telomeres', 'Active in stem cells and cancer cells; inactive in most somatic cells'] },
  { topic: 'Problem-Solving', concepts: ['Identifying replication enzymes and their functions', 'Predicting effects of enzyme mutations', 'Diagramming the replication fork', 'Connecting replication errors to mutations'] },
  { topic: 'Synthesis & AP Review', concepts: ['Replication accuracy and mutation rates', 'Connection to cell cycle checkpoints', 'Telomeres and aging/cancer', 'AP exam: enzyme identification and function'] }
]); }

function getTranscriptionContent() { return generateGenericContent('transcription-translation', 'Transcription & Translation', [
  { topic: 'Central Dogma', concepts: ['DNA → RNA → Protein', 'Transcription: DNA → mRNA', 'Translation: mRNA → protein', 'Exceptions: retroviruses (RNA → DNA via reverse transcriptase)'] },
  { topic: 'Transcription', concepts: ['RNA polymerase reads template strand 3\'→5\'', 'mRNA is synthesized 5\'→3\'', 'Promoter: TATA box, signals start of transcription', 'Terminator: signals end of transcription'] },
  { topic: 'RNA Processing', concepts: ['5\' cap: modified G nucleotide (stability, ribosome recognition)', 'Poly-A tail: ~200 adenines at 3\' end (stability)', 'Splicing: introns removed, exons joined', 'Alternative splicing: one gene → multiple proteins'] },
  { topic: 'Translation', concepts: ['Ribosomes read mRNA codons (triplets of nucleotides)', 'tRNA carries amino acids; anticodon pairs with codon', 'Start codon: AUG (methionine)', 'Stop codons: UAA, UAG, UGA'] },
  { topic: 'Post-Translational Modification', concepts: ['Protein folding (chaperones assist)', 'Chemical modifications: phosphorylation, glycosylation', 'Proteolytic cleavage (e.g., insulin from proinsulin)', 'Protein targeting and sorting'] },
  { topic: 'Problem-Solving', concepts: ['Using the genetic code table', 'Predicting effects of mutations on proteins', 'Tracing from DNA to mRNA to protein', 'Identifying frameshift vs point mutations'] },
  { topic: 'Synthesis & AP Review', concepts: ['Central dogma applications', 'Mutation types and consequences', 'Gene expression regulation points', 'AP exam: codon table practice'] }
]); }

function getGeneRegContent() { return generateGenericContent('gene-regulation', 'Gene Regulation', [
  { topic: 'Why Regulate Genes?', concepts: ['All cells have same DNA but different functions', 'Gene regulation determines cell specialization', 'Saves energy by producing only needed proteins', 'Responds to environmental signals'] },
  { topic: 'Prokaryotic Regulation (Operons)', concepts: ['Operon: promoter + operator + structural genes', 'lac operon: inducible (lactose present → genes ON)', 'trp operon: repressible (tryptophan present → genes OFF)', 'Regulatory gene encodes repressor protein'] },
  { topic: 'Eukaryotic Transcription Factors', concepts: ['Transcription factors bind to enhancers/promoters', 'Activators increase transcription', 'Repressors decrease transcription', 'Combinatorial control: multiple factors needed'] },
  { topic: 'Epigenetics', concepts: ['DNA methylation: silences genes (adds CH₃ groups)', 'Histone modification: acetylation loosens chromatin (genes ON)', 'Heritable changes without DNA sequence changes', 'Environmental factors can cause epigenetic changes'] },
  { topic: 'RNA Interference', concepts: ['Small RNA molecules (miRNA, siRNA) silence genes', 'miRNA binds complementary mRNA → blocks translation', 'siRNA triggers mRNA degradation', 'Post-transcriptional regulation'] },
  { topic: 'Problem-Solving', concepts: ['Predicting gene expression in different conditions', 'Analyzing operon diagrams', 'Connecting regulation to differentiation', 'Evaluating epigenetic effects'] },
  { topic: 'Synthesis & AP Review', concepts: ['Regulation at every level: DNA → RNA → protein', 'Dysregulation and disease (cancer)', 'Operons on the AP exam', 'Epigenetics as a growing field'] }
]); }

function getBiotechContent() { return generateGenericContent('biotechnology', 'Biotechnology', [
  { topic: 'Restriction Enzymes & Gel Electrophoresis', concepts: ['Restriction enzymes cut DNA at specific sequences', 'Produces fragments with sticky or blunt ends', 'Gel electrophoresis separates DNA by size', 'Smaller fragments migrate farther through the gel'] },
  { topic: 'PCR & DNA Sequencing', concepts: ['PCR amplifies specific DNA segments', 'Steps: denature (95°C), anneal primers (55°C), extend (72°C)', 'Taq polymerase: heat-stable DNA polymerase', 'Sanger sequencing uses ddNTPs to determine sequence'] },
  { topic: 'Genetic Engineering & GMOs', concepts: ['Recombinant DNA: combining DNA from different sources', 'Plasmid vectors carry foreign genes into bacteria', 'Transgenic organisms express foreign genes', 'Applications: insulin production, Bt crops, gene therapy'] },
  { topic: 'CRISPR-Cas9', concepts: ['Gene editing tool from bacterial immune system', 'Guide RNA directs Cas9 to target DNA sequence', 'Cas9 cuts both DNA strands at target site', 'Can knock out genes, insert new sequences, or make precise edits'] },
  { topic: 'Bioethics', concepts: ['GMO safety and environmental concerns', 'Gene therapy: somatic vs germline editing', 'Genetic privacy and discrimination', 'Designer babies and enhancement ethics'] },
  { topic: 'Problem-Solving', concepts: ['Designing PCR experiments', 'Interpreting gel electrophoresis results', 'Analyzing restriction enzyme maps', 'Evaluating biotechnology applications'] },
  { topic: 'Synthesis & AP Review', concepts: ['Biotechnology on the AP exam', 'Connecting techniques to biological concepts', 'Ethical reasoning in biology', 'Experimental design with biotech tools'] }
]); }

function getEvidenceContent() { return generateGenericContent('evidence-evolution', 'Evidence for Evolution', [
  { topic: 'Fossil Record', concepts: ['Fossils show organisms changed over time', 'Transitional fossils: features of two groups (Tiktaalik, Archaeopteryx)', 'Radiometric dating determines fossil age', 'Fossil record shows increasing complexity over time'] },
  { topic: 'Comparative Anatomy', concepts: ['Homologous structures: same origin, different function (arm, wing, flipper)', 'Analogous structures: different origin, same function (bird wing vs insect wing)', 'Vestigial structures: reduced or nonfunctional (appendix, whale pelvis)', 'Homology indicates common ancestry'] },
  { topic: 'Molecular Evidence', concepts: ['DNA sequence similarities indicate relatedness', 'More similar sequences = more recent common ancestor', 'Universal genetic code: all life uses same codons', 'Molecular clocks: mutation rate estimates divergence time'] },
  { topic: 'Biogeography', concepts: ['Geographic distribution of species supports evolution', 'Island species resemble nearby mainland species', 'Continental drift explains distribution patterns', 'Endemic species: found only in one location'] },
  { topic: 'Direct Observation', concepts: ['Antibiotic resistance in bacteria', 'Pesticide resistance in insects', 'Darwin\'s finch beak changes during drought', 'Artificial selection demonstrates selection principle'] },
  { topic: 'Problem-Solving', concepts: ['Analyzing phylogenetic trees', 'Interpreting molecular data for relatedness', 'Evaluating evidence for common descent', 'Distinguishing homology from analogy'] },
  { topic: 'Synthesis & AP Review', concepts: ['Multiple lines of evidence converge', 'Evolution as the unifying theme of biology', 'Common misconceptions about evolution', 'AP exam: evidence-based arguments'] }
]); }

function getNatSelectionContent() { return generateGenericContent('natural-selection-adaptation', 'Natural Selection', [
  { topic: 'Darwin\'s Theory', concepts: ['Variation exists within populations', 'More offspring produced than can survive', 'Individuals with favorable traits survive and reproduce more', 'Favorable traits are inherited → population changes over time'] },
  { topic: 'Mechanisms of Natural Selection', concepts: ['Differential reproductive success', 'Selection acts on phenotypes, not genotypes', 'Environment determines which traits are favorable', 'Natural selection is the only mechanism that leads to adaptation'] },
  { topic: 'Types of Selection', concepts: ['Directional: favors one extreme phenotype', 'Stabilizing: favors intermediate phenotype', 'Disruptive: favors both extremes', 'Sexual selection: traits that increase mating success'] },
  { topic: 'Hardy-Weinberg Equilibrium', concepts: ['Conditions: large population, no migration, no mutation, random mating, no selection', 'Allele frequencies: p + q = 1', 'Genotype frequencies: p² + 2pq + q² = 1', 'Violations indicate evolution is occurring'] },
  { topic: 'Genetic Drift & Gene Flow', concepts: ['Genetic drift: random changes in allele frequency (stronger in small populations)', 'Bottleneck effect: population crash reduces genetic diversity', 'Founder effect: small group colonizes new area', 'Gene flow: migration of alleles between populations'] },
  { topic: 'Problem-Solving', concepts: ['Hardy-Weinberg calculations', 'Identifying types of selection from data', 'Analyzing allele frequency changes', 'Predicting evolutionary outcomes'] },
  { topic: 'Synthesis & AP Review', concepts: ['Five agents of evolution', 'Natural selection vs genetic drift', 'Hardy-Weinberg as null hypothesis', 'AP exam: mathematical analysis of evolution'] }
]); }

function getSpeciationContent() { return generateGenericContent('speciation-macroevolution', 'Speciation', [
  { topic: 'Species Concepts', concepts: ['Biological species concept: can interbreed and produce fertile offspring', 'Morphological species concept: based on physical appearance', 'Phylogenetic species concept: smallest monophyletic group', 'Reproductive isolation prevents gene flow between species'] },
  { topic: 'Allopatric Speciation', concepts: ['Geographic isolation separates populations', 'Populations evolve independently', 'Examples: Grand Canyon squirrels, Darwin\'s finches', 'Most common form of speciation'] },
  { topic: 'Sympatric Speciation', concepts: ['Speciation without geographic isolation', 'Polyploidy in plants (most common mechanism)', 'Habitat differentiation within same area', 'Temporal isolation: different breeding seasons'] },
  { topic: 'Adaptive Radiation', concepts: ['One ancestor diversifies into many species', 'Occurs when new niches become available', 'Examples: Darwin\'s finches, Hawaiian honeycreepers', 'Triggered by mass extinctions or new environments'] },
  { topic: 'Extinction & Phylogenetics', concepts: ['Background extinction: normal rate of species loss', 'Mass extinction: >75% species lost (Big Five events)', 'Phylogenetic trees show evolutionary relationships', 'Cladistics: shared derived characters define groups'] },
  { topic: 'Problem-Solving', concepts: ['Interpreting phylogenetic trees', 'Identifying reproductive isolation mechanisms', 'Predicting speciation outcomes', 'Analyzing adaptive radiation patterns'] },
  { topic: 'Synthesis & AP Review', concepts: ['Speciation connects micro- and macroevolution', 'Reproductive isolation mechanisms', 'Reading and constructing cladograms', 'AP exam: phylogenetics questions'] }
]); }

function getEcologyContent() { return generateGenericContent('ecology-ecosystems', 'Ecology', [
  { topic: 'Introduction to Ecology', concepts: ['Ecology: study of interactions between organisms and their environment', 'Levels: organism → population → community → ecosystem → biosphere', 'Biotic factors: living components', 'Abiotic factors: nonliving components (temperature, water, light)'] },
  { topic: 'Biomes & Biosphere', concepts: ['Terrestrial biomes: tropical rainforest, desert, tundra, etc.', 'Aquatic biomes: freshwater and marine', 'Biomes determined by temperature and precipitation', 'Climate vs weather'] },
  { topic: 'Ecosystem Structure', concepts: ['Producers (autotrophs): make organic molecules from inorganic', 'Consumers (heterotrophs): eat other organisms', 'Decomposers: break down dead material', 'Trophic levels: producers → primary consumers → secondary → tertiary'] },
  { topic: 'Abiotic & Biotic Factors', concepts: ['Temperature, water, sunlight, soil, nutrients (abiotic)', 'Competition, predation, symbiosis (biotic)', 'Limiting factors constrain population growth', 'Tolerance range for each environmental factor'] },
  { topic: 'Ecological Niche', concepts: ['Fundamental niche: full range of conditions an organism can use', 'Realized niche: actual conditions used (limited by competition)', 'Competitive exclusion: two species cannot occupy same niche', 'Niche partitioning: dividing resources to coexist'] },
  { topic: 'Problem-Solving', concepts: ['Identifying biotic vs abiotic factors', 'Analyzing food webs', 'Predicting effects of species removal', 'Evaluating niche overlap'] },
  { topic: 'Synthesis & AP Review', concepts: ['Ecology connects to evolution', 'Ecosystems and energy flow', 'Human impacts on ecosystems', 'AP exam: data analysis in ecology'] }
]); }

function getEnergyFlowContent() { return generateGenericContent('energy-flow-nutrient-cycling', 'Energy Flow', [
  { topic: 'Food Chains & Webs', concepts: ['Food chain: linear path of energy transfer', 'Food web: interconnected food chains', 'Energy flows one direction (producers → consumers)', 'Matter cycles (recycled through ecosystem)'] },
  { topic: 'Trophic Levels', concepts: ['Producers: trophic level 1', 'Primary consumers (herbivores): trophic level 2', 'Secondary consumers: trophic level 3', 'Tertiary consumers (top predators): trophic level 4'] },
  { topic: 'Ecological Pyramids', concepts: ['Pyramid of energy: always upright (10% rule)', 'Only ~10% of energy transfers between trophic levels', '90% lost as heat through cellular respiration', 'Pyramid of biomass: usually upright (exception: open ocean)'] },
  { topic: 'Biogeochemical Cycles', concepts: ['Carbon cycle: photosynthesis, respiration, combustion, decomposition', 'Nitrogen cycle: fixation, nitrification, denitrification', 'Water cycle: evaporation, transpiration, precipitation', 'Phosphorus cycle: weathering of rocks, no atmospheric phase'] },
  { topic: 'Human Impact on Cycles', concepts: ['Burning fossil fuels increases atmospheric CO₂', 'Fertilizer runoff causes eutrophication', 'Deforestation reduces carbon fixation', 'Climate change disrupts all biogeochemical cycles'] },
  { topic: 'Problem-Solving', concepts: ['Calculating energy transfer between trophic levels', 'Analyzing ecosystem productivity', 'Tracing nutrients through cycles', 'Predicting effects of human disruption'] },
  { topic: 'Synthesis & AP Review', concepts: ['Energy flow vs matter cycling', '10% rule and its implications', 'Human impacts on global cycles', 'AP exam: quantitative ecology problems'] }
]); }

function getPopulationContent() { return generateGenericContent('population-community-ecology', 'Population Ecology', [
  { topic: 'Population Growth Models', concepts: ['Exponential growth: J-shaped curve, unlimited resources', 'dN/dt = rN (exponential growth equation)', 'Logistic growth: S-shaped curve, limited resources', 'dN/dt = rN(K-N)/K (logistic growth equation)'] },
  { topic: 'Carrying Capacity', concepts: ['K = maximum population size the environment can sustain', 'Density-dependent factors: competition, predation, disease', 'Density-independent factors: natural disasters, climate', 'Population oscillates around K'] },
  { topic: 'Life History Strategies', concepts: ['r-selected: rapid reproduction, small offspring, little parental care', 'K-selected: slow reproduction, large offspring, extensive parental care', 'r-selected examples: insects, bacteria, annual plants', 'K-selected examples: elephants, whales, humans'] },
  { topic: 'Community Interactions', concepts: ['Competition: -/- (both harmed)', 'Predation: +/- (predator benefits, prey harmed)', 'Mutualism: +/+ (both benefit)', 'Parasitism: +/- (parasite benefits, host harmed)'] },
  { topic: 'Ecological Succession', concepts: ['Primary succession: starts on bare rock/new land', 'Secondary succession: starts after disturbance (fire, flood)', 'Pioneer species colonize first (lichens, mosses)', 'Climax community: stable, mature ecosystem'] },
  { topic: 'Problem-Solving', concepts: ['Population growth calculations', 'Interpreting survivorship curves', 'Analyzing community interaction data', 'Predicting succession outcomes'] },
  { topic: 'Synthesis & AP Review', concepts: ['Population ecology and conservation', 'Community interactions shape ecosystems', 'Human population growth', 'AP exam: mathematical population analysis'] }
]); }


// Generic content generator for topics 3-25
function generateGenericContent(slug, topicName, partConcepts) {
  return partConcepts.map((part, idx) => {
    const partNum = idx + 1;
    const isWorkshop = part.topic.includes('Problem-Solving');
    const isSynthesis = part.topic.includes('Synthesis');
    
    return {
      textSections: [
        { id: `intro-p${partNum}`, title: isWorkshop ? `## ${topicName}: Problem-Solving Workshop` : isSynthesis ? `## ${topicName}: Synthesis & AP Review` : `## ${part.topic}`, body: `**Part ${partNum} of 7 — ${part.topic}**\n\n${part.concepts.map((c, i) => `${i + 1}. ${c}`).join('\n')}` },
        { id: `detail-p${partNum}`, title: `### Key Details`, body: part.concepts.map(c => `- **${c.split(':')[0]}**${c.includes(':') ? ':' + c.split(':').slice(1).join(':') : ''}`).join('\n') }
      ],
      mcQuestions: generateMCFromConcepts(part.concepts, part.topic),
      dropdowns: generateDropdownsFromConcepts(part.concepts, part.topic)
    };
  });
}

function generateMCFromConcepts(concepts, topic) {
  // Generate 2-3 meaningful MC questions from concepts
  const questions = [];
  if (concepts.length >= 1) {
    const c = concepts[0];
    const mainIdea = c.split(':')[0].trim();
    questions.push({
      q: `Which of the following best describes ${mainIdea.toLowerCase()}?`,
      opts: [c.includes(':') ? c.split(':').slice(1).join(':').trim() : c, 'The opposite process occurs', 'This is not relevant to biology', 'This only occurs in prokaryotes'],
      correct: 0,
      explanation: c
    });
  }
  if (concepts.length >= 3) {
    questions.push({
      q: `In the context of ${topic.toLowerCase()}, which statement is accurate?`,
      opts: [concepts[2], concepts[0].split('').reverse().join(''), 'None of the above are correct', 'This topic is not covered in AP Biology'],
      correct: 0,
      explanation: concepts[2]
    });
  }
  if (concepts.length >= 4) {
    questions.push({
      q: `Which concept is most directly related to ${topic.toLowerCase()}?`,
      opts: [concepts[3], 'Photosynthesis only', 'Abiotic factors exclusively', 'Mitochondrial DNA only'],
      correct: 0,
      explanation: concepts[3]
    });
  }
  return questions.length > 0 ? questions : [{ q: `What is a key concept in ${topic}?`, opts: [concepts[0] || topic, 'Unrelated concept', 'Not covered', 'None of the above'], correct: 0, explanation: concepts[0] || topic }];
}

function generateDropdownsFromConcepts(concepts, topic) {
  const items = concepts.slice(0, 3).map(c => {
    const parts = c.split(':');
    const term = parts[0].trim();
    const def = parts.length > 1 ? parts.slice(1).join(':').trim() : c;
    return {
      label: `${term} is important in ${topic.toLowerCase()} because`,
      options: [def.substring(0, 50), 'it is not relevant', 'it only occurs in labs', 'it was disproven'],
      correct: def.substring(0, 50)
    };
  });
  
  return {
    items: items.length > 0 ? items : [{ label: `${topic} involves`, options: ['biological processes', 'non-biological processes', 'only chemistry', 'only physics'], correct: 'biological processes' }],
    hints: items.map((_, i) => `Review concept ${i + 1}.`),
    explanation: `These concepts are fundamental to understanding ${topic}.`
  };
}

// Helper to generate the 7 parts for topics using the generic approach
function generateBioParts(slug, topicName, partTitles, contentArray) {
  return partTitles.map((title, idx) => {
    const content = contentArray[idx];
    return {
      title,
      textSections: content.textSections,
      mcQuestions: content.mcQuestions,
      dropdowns: content.dropdowns
    };
  });
}

// File generator
function generateFile(topic, partIdx) {
  const part = topic.parts[partIdx];
  const partNum = partIdx + 1;
  const exportName = `${topic.exportBase}Part${partNum}Data`;
  const slug = topic.slug;
  
  let sections = [];
  let sectionIdx = 0;
  
  // Add text sections
  for (const ts of part.textSections) {
    sections.push(`    {
      id: '${slug.substring(0, 4)}${partNum}-${ts.id}',
      type: 'text' as const,
      content: \`
# ${ts.title}

${ts.body}
      \`
    }`);
    sectionIdx++;
    
    // Add MC quiz after first text section if we have one
    if (sectionIdx === 1 && part.mcQuestions.length > 0) {
      const halfQ = Math.ceil(part.mcQuestions.length / 2);
      const firstHalf = part.mcQuestions.slice(0, halfQ);
      sections.push(generateMCSection(slug, partNum, 'quiz1', firstHalf));
    }
  }
  
  // Add remaining MC questions if any
  if (part.mcQuestions.length > Math.ceil(part.mcQuestions.length / 2)) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    const secondHalf = part.mcQuestions.slice(halfQ);
    if (secondHalf.length > 0) {
      sections.push(generateMCSection(slug, partNum, 'quiz2', secondHalf));
    }
  }
  
  // Add dropdown section
  if (part.dropdowns) {
    sections.push(generateDropdownSection(slug, partNum, part.dropdowns));
  }
  
  const fileContent = `export const ${exportName} = {
  topicSlug: '${slug}',
  sections: [
${sections.join(',\n')}
  ]
}
`;
  
  return fileContent;
}

function generateMCSection(slug, partNum, id, questions) {
  const questionStrs = questions.map(q => `          {
            question: '${escapeStr(q.q)}',
            options: [
              '${escapeStr(q.opts[0])}',
              '${escapeStr(q.opts[1])}',
              '${escapeStr(q.opts[2])}',
              '${escapeStr(q.opts[3])}'
            ],
            correctAnswer: ${q.correct},
            explanation: '${escapeStr(q.explanation)}'
          }`);
  
  return `    {
      id: '${slug.substring(0, 4)}${partNum}-${id}',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
${questionStrs.join(',\n')}
        ]
      }
    }`;
}

function generateDropdownSection(slug, partNum, dd) {
  const dropdownStrs = dd.items.map(item => `          {
            label: '${escapeStr(item.label)}',
            options: [${item.options.map(o => `'${escapeStr(o)}'`).join(', ')}]
          }`);
  
  const correctStrs = dd.items.map(item => `'${escapeStr(item.correct)}'`);
  const hintStrs = dd.hints ? dd.hints.map((h, i) => `        hint${i + 1}: '${escapeStr(h)}'`).join(',\n') : '';
  
  return `    {
      id: '${slug.substring(0, 4)}${partNum}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Fill in the Blanks** 🔍
      \`,
      exercise: {
        dropdowns: [
${dropdownStrs.join(',\n')}
        ],
        correctAnswers: [${correctStrs.join(', ')}],
${hintStrs}${hintStrs ? ',' : ''}
        explanation: '${escapeStr(dd.explanation)}'
      }
    }`;
}

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

// Main execution
function main() {
  let totalFiles = 0;
  
  for (const topic of topics) {
    for (let i = 0; i < topic.parts.length; i++) {
      const partNum = i + 1;
      const fileName = `bio-${topic.slug}-part${partNum}.ts`;
      const filePath = path.join(OUT_DIR, fileName);
      const content = generateFile(topic, i);
      
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFiles++;
    }
  }
  
  console.log(`✅ Generated ${totalFiles} AP Biology lesson files`);
}

main();
