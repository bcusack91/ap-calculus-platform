export const chemVseprMolecularGeometryPart5Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-5-1',
      type: 'text',
      title: 'The Step-by-Step Method',
      content: `# 🧭 Predicting Molecular Geometry

**Part 5 of 7 — From Lewis Structure to 3D Shape**

Follow this systematic process to predict the geometry of any molecule:

### Step 1: Draw the Lewis Structure
- Count total valence electrons
- Place bonds and lone pairs
- Check octets (and expanded octets for Period 3+)

### Step 2: Identify the Central Atom
- Usually the least electronegative atom
- Usually the atom that can form the most bonds
- Hydrogen and fluorine are NEVER central atoms

### Step 3: Count Electron Domains on the Central Atom
- Count each bond (single, double, or triple) as ONE domain
- Count each lone pair as ONE domain
- Sum = **steric number**

### Step 4: Determine Electron Domain Geometry
| Steric # | Electron Domain Geometry |
|----------|--------------------------|
| 2 | Linear |
| 3 | Trigonal planar |
| 4 | Tetrahedral |
| 5 | Trigonal bipyramidal |
| 6 | Octahedral |

### Step 5: Determine Molecular Geometry
- Remove lone pairs from the picture
- The remaining atom positions define the molecular geometry
- Name the shape based on atom positions only`
    },
    {
      id: 'vg-5-2',
      type: 'text',
      title: 'Worked Example: SO₂',
      content: `## Worked Example: SO₂ (Sulfur Dioxide)

### Step 1: Lewis Structure
- Total valence electrons: S(6) + 2 × O(6) = 18
- Sulfur is central; each O is bonded to S
- Best structure: S has one double bond to each O and one lone pair
- (Resonance structures exist, but the electron domain count is the same)

### Step 2: Central Atom
- Sulfur (least electronegative, most bonds)

### Step 3: Count Electron Domains
- 2 bonds (each double bond = 1 domain) + 1 lone pair = **3 electron domains**

### Step 4: Electron Domain Geometry
- Steric number 3 → **Trigonal planar**

### Step 5: Molecular Geometry
- 3 electron domains minus 1 lone pair = 2 bonding positions visible
- Molecular geometry: **Bent**
- Bond angle: slightly less than 120° (lone pair compression)

### Summary

$$\\text{SO}_2: \\quad \\text{3 e⁻ domains} \\to \\text{trigonal planar (ED)} \\to \\text{bent (molecular)}$$`
    },
    {
      id: 'vg-5-3',
      type: 'text',
      title: 'Worked Example: XeF₄',
      content: `## Worked Example: XeF₄ (Xenon Tetrafluoride)

### Step 1: Lewis Structure
- Total valence electrons: Xe(8) + 4 × F(7) = 36
- Xenon is central
- Xe forms 4 bonds to F, using 8 electrons
- Xe has 2 lone pairs (4 remaining electrons)
- Each F has 3 lone pairs

### Step 2: Central Atom
- Xenon

### Step 3: Count Electron Domains
- 4 bonds + 2 lone pairs = **6 electron domains**

### Step 4: Electron Domain Geometry
- Steric number 6 → **Octahedral**

### Step 5: Molecular Geometry
- 2 lone pairs placed **trans** (opposite, 180° apart) to minimize repulsion
- 4 F atoms form a flat square
- Molecular geometry: **Square planar**
- Bond angles: 90°

### Summary

$$\\text{XeF}_4: \\quad \\text{6 e⁻ domains} \\to \\text{octahedral (ED)} \\to \\text{square planar (molecular)}$$`
    },
    {
      id: 'vg-5-4',
      type: 'multiple-choice',
      title: 'Predict the Geometry',
      content: 'Apply the step-by-step method to predict molecular geometries.',
      exercise: {
        questions: [
          {
            question: 'What is the molecular geometry of PF₃? (P has 5 valence e⁻, each F has 7. P has 3 bonds and 1 lone pair.)',
            options: ['Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Bent'],
            correctAnswer: 2,
            explanation: 'P has 3 bonds + 1 lone pair = steric number 4 → tetrahedral ED geometry. With 1 lone pair removed, molecular geometry = trigonal pyramidal.'
          },
          {
            question: 'What is the molecular geometry of ICl₃? (I has 7 valence e⁻, uses 3 for bonds, has 2 lone pairs.)',
            options: ['Trigonal planar', 'Trigonal pyramidal', 'T-shaped', 'Seesaw'],
            correctAnswer: 2,
            explanation: 'I has 3 bonds + 2 lone pairs = steric number 5 → trigonal bipyramidal ED geometry. With 2 lone pairs in equatorial positions, molecular geometry = T-shaped.'
          },
          {
            question: 'What is the molecular geometry of BrF₅? (Br has 7 valence e⁻, uses 5 for bonds, has 1 lone pair.)',
            options: ['Trigonal bipyramidal', 'Octahedral', 'Square pyramidal', 'Square planar'],
            correctAnswer: 2,
            explanation: 'Br has 5 bonds + 1 lone pair = steric number 6 → octahedral ED geometry. With 1 lone pair, molecular geometry = square pyramidal.'
          }
        ]
      }
    },
    {
      id: 'vg-5-5',
      type: 'input-boxes',
      title: 'Steric Number and Lone Pair Drill',
      content: 'For each molecule, determine the requested value. Use the Lewis structure to find bonds and lone pairs on the central atom.',
      exercise: {
        inputs: [
          {
            label: 'Steric number of S in H₂S',
            correctAnswer: '4',
            explanation: 'Sulfur in H₂S has 2 bonds + 2 lone pairs = steric number of 4.'
          },
          {
            label: 'Number of lone pairs on iodine in IF₅',
            correctAnswer: '1',
            explanation: 'Iodine has 7 valence electrons. 5 are used for bonds, leaving 2 electrons = 1 lone pair.'
          },
          {
            label: 'Steric number of N in NO₂⁻',
            correctAnswer: '3',
            explanation: 'Nitrogen in NO₂⁻ has 2 bonds (or resonance structures with one double and one single bond, still 2 domains) + 1 lone pair = steric number 3.'
          },
          {
            label: 'Number of lone pairs on Cl in ClF₃',
            correctAnswer: '2',
            explanation: 'Chlorine has 7 valence electrons. 3 are used in bonds to F, leaving 4 electrons = 2 lone pairs.'
          }
        ]
      }
    },
    {
      id: 'vg-5-6',
      type: 'text',
      title: 'The Complete Molecular Geometry Chart',
      content: `## Master Reference Chart

| Steric # | Lone Pairs | Bonding Pairs | ED Geometry | Molecular Geometry | Example |
|----------|-----------|--------------|-------------|-------------------|---------|
| 2 | 0 | 2 | Linear | Linear | CO₂ |
| 3 | 0 | 3 | Trig. planar | Trigonal planar | BF₃ |
| 3 | 1 | 2 | Trig. planar | Bent | SO₂ |
| 4 | 0 | 4 | Tetrahedral | Tetrahedral | CH₄ |
| 4 | 1 | 3 | Tetrahedral | Trigonal pyramidal | NH₃ |
| 4 | 2 | 2 | Tetrahedral | Bent | H₂O |
| 5 | 0 | 5 | Trig. bipyramidal | Trigonal bipyramidal | PCl₅ |
| 5 | 1 | 4 | Trig. bipyramidal | Seesaw | SF₄ |
| 5 | 2 | 3 | Trig. bipyramidal | T-shaped | ClF₃ |
| 5 | 3 | 2 | Trig. bipyramidal | Linear | XeF₂ |
| 6 | 0 | 6 | Octahedral | Octahedral | SF₆ |
| 6 | 1 | 5 | Octahedral | Square pyramidal | BrF₅ |
| 6 | 2 | 4 | Octahedral | Square planar | XeF₄ |

This chart is essential for the AP exam — memorize it!`
    },
    {
      id: 'vg-5-7',
      type: 'dropdown-select',
      title: 'Molecular Geometry Prediction',
      content: 'Select the correct molecular geometry for each molecule.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-5-7-dd1',
            label: 'Molecular geometry of SnCl₂',
            options: ['Trigonal planar', 'Bent', 'Linear', 'Trigonal pyramidal'],
            correctIndex: 1,
            explanation: 'SnCl₂ (Sn has 2 bonds + 1 lone pair) → steric number 3, trigonal planar ED, bent molecular geometry.'
          },
          {
            id: 'vg-5-7-dd2',
            label: 'Molecular geometry of TeCl₄',
            options: ['Tetrahedral', 'Seesaw', 'Square planar', 'Trigonal bipyramidal'],
            correctIndex: 1,
            explanation: 'TeCl₄ has 4 bonds + 1 lone pair on Te → steric number 5, trigonal bipyramidal ED, seesaw molecular geometry.'
          },
          {
            id: 'vg-5-7-dd3',
            label: 'Molecular geometry of IF₅',
            options: ['Square pyramidal', 'Octahedral', 'Trigonal bipyramidal', 'Square planar'],
            correctIndex: 0,
            explanation: 'IF₅ has 5 bonds + 1 lone pair on I → steric number 6, octahedral ED, square pyramidal molecular geometry.'
          }
        ]
      }
    },
    {
      id: 'vg-5-8',
      type: 'multiple-choice',
      title: 'Part 5 Exit Quiz',
      content: 'Test the full prediction method.',
      exercise: {
        questions: [
          {
            question: 'SeF₄ has 34 total valence electrons. Selenium is the central atom with 4 bonds to F and 1 lone pair. What is the molecular geometry?',
            options: ['Tetrahedral', 'Square planar', 'Seesaw', 'Trigonal bipyramidal'],
            correctAnswer: 2,
            explanation: 'Se has 4 bonds + 1 lone pair = steric number 5. ED geometry = trigonal bipyramidal. With 1 lone pair in an equatorial position, molecular geometry = seesaw.'
          },
          {
            question: 'Which step in the VSEPR prediction process directly determines the electron domain geometry?',
            options: [
              'Drawing the Lewis structure',
              'Identifying the central atom',
              'Calculating the steric number',
              'Counting lone pairs only'
            ],
            correctAnswer: 2,
            explanation: 'The steric number (total electron domains) directly determines the electron domain geometry. The steric number maps to one of the five base geometries: linear, trigonal planar, tetrahedral, trigonal bipyramidal, or octahedral.'
          }
        ]
      }
    }
  ]
};
