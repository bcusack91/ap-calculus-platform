export const bioLipidsPart4Data = {
  topicSlug: 'lipids',
  sections: [
    {
      id: 'lip4-review',
      type: 'text' as const,
      content: `
## 🎯 AP Review: Lipids

### Must-know synthesis points

1. **Lipids are not true polymers** — TGs, phospholipids, and steroids share hydrophobicity, not a repeating monomer.
2. **Saturation determines packing** — saturated tails = straight = solid; unsaturated tails = kinked = liquid; this also drives membrane fluidity.
3. **Phospholipid amphipathicity** (hydrophilic head + hydrophobic tails) is the engineering basis of every cell membrane.
4. **Cholesterol is a fluidity buffer** — restricts movement at high temp, prevents stiffening at low temp.
5. **Steroid hormones** (cortisol, estrogen, testosterone) are lipid-soluble and cross membranes directly to bind intracellular receptors.
      `
    },
    {
      id: 'lip4-workshop',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'Researchers compare two membrane samples. Sample A has more unsaturated phospholipids; Sample B has more saturated phospholipids. At 4 °C, which sample is more likely to remain fluid and functional?',
            options: ['Sample A — more kinks → less tight packing → more fluid', 'Sample B — straight tails fold flat at low temp', 'Both equally fluid', 'Neither — both freeze solid below 10 °C'],
            correctAnswer: 0,
            explanation: 'Unsaturated kinks prevent tight packing, preserving fluidity at low temperatures — a known cold-adaptation strategy in fish and arctic plants.'
          }
        ]
      }
    },
    {
      id: 'lip4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'Steroid hormones such as testosterone bind intracellular receptors because they:',
            options: [
              'Are positively charged at physiological pH',
              'Are large enough to require active transport',
              'Are hydrophobic and cross the plasma membrane directly',
              'Bind to cell-surface ATPases'
            ],
            correctAnswer: 2,
            explanation: 'Steroid hormones are lipid-soluble. Their hydrophobic backbone allows them to diffuse across the phospholipid bilayer and bind cytoplasmic or nuclear receptors directly.'
          }
        ]
      }
    },
    {
      id: 'lip4-dropdown',
      type: 'dropdown-select' as const,
      content: `**AP Synthesis** 🔬`,
      exercise: {
        dropdowns: [
          { label: 'A triglyceride contains 1 glycerol and ___ fatty acids', options: ['1', '2', '3', '4'] },
          { label: 'Membrane fluidity at low temperature is preserved by ___ fatty acid tails', options: ['saturated', 'unsaturated', 'cyclic', 'aromatic'] },
          { label: 'Cell membranes form ___ in water', options: ['monolayers', 'bilayers', 'crystals', 'micelles only'] }
        ],
        correctAnswers: ['3', 'unsaturated', 'bilayers'],
        hint1: 'Tri = three.',
        hint2: 'Kinks prevent solidifying.',
        hint3: 'Two leaflets, heads out.',
        explanation: 'Triglyceride = glycerol + 3 fatty acids. Unsaturated tails resist freezing. Phospholipids in water self-assemble into bilayers — the foundation of every cell membrane.'
      }
    }
  ]
}
