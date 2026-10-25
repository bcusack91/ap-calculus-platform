export const asvabGsLifeSciencePart4Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl4-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 4 of 7 — Human Body Systems, Nutrition and Health**

### The Body Systems Chart

Anatomy questions are the single biggest group of life science items. Learn this chart and you can answer most of them.

| System | Main organs and parts | Main job |
|:---|:---|:---|
| **Circulatory** | Heart, arteries, veins, capillaries, blood | Carries oxygen, nutrients and wastes around the body |
| **Respiratory** | Nose, trachea, lungs, **alveoli**, diaphragm | Takes in oxygen, gets rid of carbon dioxide |
| **Digestive** | Mouth, esophagus, stomach, small and large intestine, liver, pancreas | Breaks food down and absorbs nutrients |
| **Nervous** | Brain, spinal cord, nerves (**neurons**) | Senses, thinks and sends signals |
| **Skeletal** | **206 bones** (adult), cartilage, ligaments | Support, protection, makes blood cells in marrow |
| **Muscular** | Skeletal, smooth and cardiac muscle; tendons | Movement |
| **Endocrine** | Glands: pituitary, thyroid, adrenal, pancreas | Sends chemical messages (**hormones**) |
| **Excretory (urinary)** | **Kidneys**, bladder | Filters wastes out of the blood as urine |
| **Immune / lymphatic** | White blood cells, lymph nodes, spleen | Fights infection |
| **Integumentary** | **Skin** (the largest organ), hair, nails | Protective barrier, temperature control |
| **Reproductive** | Ovaries, testes | Produces offspring |

### Organ facts that get tested

- **Heart:** four chambers (two **atria** on top receive blood, two **ventricles** below pump it out). The **left ventricle** pumps blood to the whole body, so it has the thickest wall.
- **Arteries** carry blood **away** from the heart (**A** for **A**way); **veins** return it; **capillaries** are the tiny vessels where exchange happens.
- **Alveoli:** tiny air sacs in the lungs where oxygen enters the blood and carbon dioxide leaves.
- **Small intestine:** where **most** digestion finishes and **most nutrients are absorbed**. The **large intestine** mainly absorbs **water**.
- **Liver:** makes **bile** (stored in the gallbladder) to break up fats, and cleans toxins from the blood.
- **Pancreas:** makes digestive enzymes and the hormone **insulin**, which lowers blood sugar.
- **Muscle and bone links:** **tendons** join muscle to bone; **ligaments** join bone to bone.`
    },
    {
      id: 'gsl4-blood',
      type: 'text' as const,
      content: `## Blood, Digestion and Breathing in Order

### The parts of blood

| Part | Job |
|:---|:---|
| **Red blood cells** | Carry oxygen using **hemoglobin** (contains **iron**) |
| **White blood cells** | Fight infection |
| **Platelets** | Help blood **clot** |
| **Plasma** | The liquid part (mostly water) that carries everything |

### The path of food

$$\\text{mouth} \\rightarrow \\text{esophagus} \\rightarrow \\text{stomach} \\rightarrow \\text{small intestine} \\rightarrow \\text{large intestine}$$

Digestion **starts in the mouth** (chewing, and saliva begins breaking down starch). The stomach uses acid to break down protein.

### The path of air

$$\\text{nose or mouth} \\rightarrow \\text{trachea} \\rightarrow \\text{bronchi} \\rightarrow \\text{lungs} \\rightarrow \\text{alveoli}$$

The **diaphragm**, a dome-shaped muscle under the lungs, contracts to pull air in.

### Worked example

**Question:** A soldier's blood test shows a low platelet count. Which problem is most likely?

**Reasoning:** Platelets clot the blood. Too few platelets means cuts **bleed longer** and bruises form easily. (Low red cells would cause tiredness from too little oxygen; low white cells would mean more infections.)`
    },
    {
      id: 'gsl4-nutrition',
      type: 'text' as const,
      content: `## Nutrition and Disease

### The six nutrients

| Nutrient | Main job | Energy per gram |
|:---|:---|:---:|
| **Carbohydrates** (sugars, starch) | The body's main, quickest energy source | **4 Calories** |
| **Proteins** (built from **amino acids**) | Build and repair tissue, muscle | **4 Calories** |
| **Fats** (lipids) | Stored energy, insulation | **9 Calories** |
| **Vitamins** | Help body processes run | 0 |
| **Minerals** | Build bones and blood (calcium, iron) | 0 |
| **Water** | Most of your body mass; carries everything | 0 |

**Fiber** (from plants) is a carbohydrate you can't digest; it keeps digestion moving.

### Deficiency diseases

| Missing | Result |
|:---|:---|
| **Vitamin C** | **Scurvy** (bleeding gums), the old sailors' disease |
| **Vitamin D** (made in skin in sunlight) | **Rickets** (soft, bent bones) |
| **Vitamin A** | Night blindness |
| **Vitamin K** | Blood that doesn't clot well |
| **Iron** | **Anemia** (too little hemoglobin, tiredness) |
| **Calcium** | Weak bones and teeth |

### What causes disease

| Cause | Examples | Treated by |
|:---|:---|:---|
| **Bacteria** (living cells) | Strep throat, tetanus, food poisoning from salmonella | **Antibiotics** |
| **Viruses** (not cells; must invade a host cell) | Common cold, flu, measles, COVID-19 | **Not** antibiotics; vaccines prevent many |
| **Fungi** | Athlete's foot, ringworm | Antifungal medicine |
| **Protists** | Malaria (spread by mosquitoes) | Antimalarial drugs |

A **vaccine** contains a weakened, killed or partial form of a germ, so the immune system learns to make **antibodies** before a real infection arrives.

> **Key Fact:** Antibiotics kill **bacteria** and do nothing against **viruses**. That makes "antibiotics cure the flu" one of the most common wrong answers on any science test.`
    },
    {
      id: 'gsl4-mc',
      type: 'multiple-choice' as const,
      content: '**Body systems.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In which organ are most nutrients from food absorbed into the blood?',
            options: ['Small intestine', 'Stomach', 'Large intestine', 'Esophagus'],
            correctAnswer: 0,
            explanation: 'The long, folded small intestine finishes digestion and absorbs most nutrients. The stomach breaks food down with acid, the large intestine mainly absorbs water, and the esophagus only moves food to the stomach.'
          },
          {
            question: 'Which organ filters wastes out of the blood to form urine?',
            options: ['Kidney', 'Liver', 'Spleen', 'Pancreas'],
            correctAnswer: 0,
            explanation: 'The kidneys filter the blood and send wastes and extra water to the bladder as urine. The liver cleans toxins and makes bile, the spleen filters old blood cells as part of the immune system, and the pancreas makes insulin and enzymes.'
          },
          {
            question: 'Which type of blood vessel carries blood away from the heart?',
            options: ['Artery', 'Vein', 'Capillary', 'Lymph vessel'],
            correctAnswer: 0,
            explanation: 'Arteries carry blood Away from the heart. Veins return blood to the heart, capillaries connect the two and exchange materials with cells, and lymph vessels carry lymph, not blood.'
          },
          {
            question: 'A doctor prescribes an antibiotic. Which illness is it meant to treat?',
            options: ['Strep throat', 'The flu', 'The common cold', 'Measles'],
            correctAnswer: 0,
            explanation: 'Strep throat is caused by bacteria, which antibiotics kill. The flu, the common cold and measles are viral, and antibiotics have no effect on viruses.'
          },
          {
            question: 'Which gland releases insulin, the hormone that lowers blood sugar?',
            options: ['Pancreas', 'Thyroid', 'Pituitary', 'Adrenal gland'],
            correctAnswer: 0,
            explanation: 'Insulin comes from the pancreas; diabetes involves a problem with insulin. The thyroid controls the body\'s rate of using energy, the pituitary is the "master gland" that directs other glands, and the adrenal glands release adrenaline.'
          }
        ]
      }
    },
    {
      id: 'gsl4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the nutrient fact.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A shortage of vitamin C causes:',
            options: ['Scurvy', 'Rickets', 'Anemia', 'Night blindness'],
            correctAnswer: 0
          },
          {
            label: 'The nutrient that supplies the most Calories per gram is:',
            options: ['Fat', 'Protein', 'Carbohydrate', 'Fiber'],
            correctAnswer: 0
          },
          {
            label: 'Proteins are built from smaller units called:',
            options: ['Amino acids', 'Simple sugars', 'Fatty acids', 'Minerals'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Scurvy', 'Fat', 'Amino acids'],
        hint1: 'Sailors on long voyages without fruit got this disease.',
        hint2: 'Compare 9 Calories per gram with 4.',
        hint3: 'Protein building blocks have "acid" in their name.',
        explanation: 'Vitamin C deficiency causes scurvy (rickets comes from too little vitamin D, anemia from too little iron, night blindness from too little vitamin A). Fat provides 9 Calories per gram, more than twice the 4 Calories of protein or carbohydrate. Proteins are chains of amino acids.'
      }
    },
    {
      id: 'gsl4-input',
      type: 'input-boxes' as const,
      content: `**Count the Calories.** ✍️ A snack bar contains $10$ g of fat, $20$ g of carbohydrate and $5$ g of protein.

**1)** How many Calories come from the fat?

**2)** How many Calories come from the carbohydrate and protein together?

**3)** How many Calories are in the whole bar?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['90', '100', '190'],
        hint1: 'Fat has 9 Calories per gram.',
        hint2: 'Carbohydrate and protein each have 4 Calories per gram.',
        hint3: 'Add the two totals.',
        explanation: '(1) $10 \\times 9 = 90$ Calories from fat. (2) $(20 + 5) \\times 4 = 25 \\times 4 = 100$ Calories. (3) $90 + 100 = 190$ Calories. Notice that the fat is less than a third of the bar\'s mass but supplies almost half its Calories.'
      }
    },
    {
      id: 'gsl4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Know each **system's main organs and job**: circulatory, respiratory, digestive, nervous, skeletal, muscular, endocrine, excretory, immune, integumentary, reproductive
- **Arteries** go **away** from the heart; **alveoli** exchange gases; **kidneys** make urine; **skin** is the largest organ; adults have **206 bones**
- **Small intestine** absorbs most nutrients; **large intestine** absorbs water; **pancreas** makes **insulin**
- Blood: **red cells** carry O₂ (hemoglobin, iron), **white cells** fight infection, **platelets** clot
- **Fat 9, carbohydrate 4, protein 4** Calories per gram
- Vitamin C → **scurvy**, vitamin D → **rickets**, iron → **anemia**
- **Antibiotics kill bacteria, not viruses**; vaccines train the immune system to make antibodies

> **Up Next:** Part 5 — plants, ecosystems and how energy flows through a food chain.`
    }
  ]
};
