export const bioCarbohydratesPart4Data = {
  topicSlug: 'carbohydrates',
  sections: [
    {
      id: 'carb4-review',
      type: 'text' as const,
      content: `
## 🎯 AP Review: Carbohydrates

### Must-know synthesis points

1. **Monomer/polymer relationship** — monosaccharides → glycosidic bond (dehydration synthesis) → di/polysaccharides; polymers split by **hydrolysis**.
2. **Storage vs structure** — storage polymers coil and branch (starch, glycogen); structural polymers form straight, unbranched fibers (cellulose, chitin). Same glucose monomer, different arrangement.
3. **Function follows structure** — branching (glycogen, amylopectin) speeds energy release; straight fibers (cellulose) supply tensile strength.
4. **Cell-surface sugars (glycocalyx)** — recognition, signaling, immunity, blood typing.

### High-yield FRQ traps

- Don't confuse **glycogen** (animal storage) with **glucagon** (a hormone — also raises blood sugar but is a peptide).
- **Lactose intolerance** is a missing **lactase enzyme**, not a sugar shortage.
- **Glycemic load** is a behavioral concept; AP wants the **biochemistry**.
      `
    },
    {
      id: 'carb4-workshop',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'A scientist links 200 glucose monomers into a single starch chain. How many water molecules are released?',
            options: ['200', '199', '201', '100'],
            correctAnswer: 1,
            explanation: 'Each glycosidic bond releases one water; n monomers form (n − 1) bonds. So 200 glucose units form 199 bonds → 199 waters released.'
          }
        ]
      }
    },
    {
      id: 'carb4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'Which experimental result would best support the hypothesis that a polysaccharide is a structural rather than storage polymer?',
            options: [
              'It dissolves quickly in cold water',
              'It is rapidly hydrolyzed by amylase into glucose',
              'It forms tough fibers and resists digestive enzymes',
              'It is stored in large amounts in liver cells'
            ],
            correctAnswer: 2,
            explanation: 'Structural polysaccharides like cellulose form rigid fibers and resist hydrolysis by digestive enzymes. Quick solubility and amylase digestion are storage hallmarks.'
          }
        ]
      }
    },
    {
      id: 'carb4-dropdown',
      type: 'dropdown-select' as const,
      content: `**AP Synthesis** 🔬`,
      exercise: {
        dropdowns: [
          { label: 'Excess blood glucose in mammals is stored as ___ in the liver', options: ['starch', 'glycogen', 'cellulose', 'maltose'] },
          { label: 'When energy is needed, starch and glycogen are hydrolyzed into ___ monomers', options: ['glucose', 'amino acid', 'nucleotide', 'fatty acid'] },
          { label: 'Joining 50 glucose monomers releases ___ water molecules', options: ['49', '50', '51', '25'] }
        ],
        correctAnswers: ['glycogen', 'glucose', '49'],
        hint1: 'Animal storage polysaccharide.',
        hint2: 'Both storage polymers are built from one sugar.',
        hint3: 'n − 1 bonds for n monomers.',
        explanation: 'Glycogen stores glucose in mammalian liver/muscle. Starch and glycogen are broken down into glucose for respiration. n monomers → (n − 1) bonds → (n − 1) waters released.'
      }
    }
  ]
}
