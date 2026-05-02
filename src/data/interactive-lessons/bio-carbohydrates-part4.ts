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
2. **α vs β linkage** — α coils for storage (starch, glycogen); β straightens for structure (cellulose, chitin).
3. **Function follows structure** — branching (glycogen, amylopectin) speeds energy release; straight β-fibers (cellulose) supply tensile strength.
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
              'It is rapidly hydrolyzed by amylase',
              'It forms tough fibers and resists enzymatic digestion in the digestive tract',
              'It tastes sweet on the tongue'
            ],
            correctAnswer: 2,
            explanation: 'Structural polysaccharides like cellulose form rigid fibers and resist hydrolysis (β-linkages). Quick solubility and amylase digestion are storage hallmarks.'
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
          { label: 'Cellulose forms straight chains because of ___ linkages', options: ['α-1,4', 'β-1,4', 'α-1,6', 'peptide'] },
          { label: 'Joining 50 glucose monomers releases ___ water molecules', options: ['49', '50', '51', '25'] }
        ],
        correctAnswers: ['glycogen', 'β-1,4', '49'],
        hint1: 'Animal storage polysaccharide.',
        hint2: 'Beta = straight = strong.',
        hint3: 'n − 1 bonds for n monomers.',
        explanation: 'Glycogen stores glucose in mammalian liver/muscle. β-1,4 linkages give cellulose its straight, structural character. n monomers → (n − 1) bonds → (n − 1) waters released.'
      }
    }
  ]
}
