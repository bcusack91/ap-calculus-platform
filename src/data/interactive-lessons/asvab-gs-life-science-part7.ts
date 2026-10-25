export const asvabGsLifeSciencePart7Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl7-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 7 of 7 — Mixed Mastery Set**

### How to Use This Set

These questions mix every part of the lesson, in the same short, single-fact or one-step style the CAT-ASVAB uses. Treat it like the real thing:

- Aim for about **48 seconds** per question, and most should take far less.
- Commit to an answer before you look at the explanation; on the CAT you can't go back.
- When you miss one, note **which part** it came from and reread that part's table.

| Part | What it covered |
|:---:|:---|
| 2 | Cells, organelles, osmosis, mitosis and meiosis |
| 3 | DNA, Punnett squares, classification, animal groups |
| 4 | Body systems, blood, nutrition, disease |
| 5 | Photosynthesis, plant parts, food chains, symbiosis, cycles |

> **Key Fact:** A score of 10 or more out of 12 means you are ready for life science on test day. Below that, the Key Takeaways at the end of each part are your fastest review.`
    },
    {
      id: 'gsl7-mc',
      type: 'multiple-choice' as const,
      content: '**Mastery set.** 🎯 Ten mixed questions.',
      exercise: {
        questions: [
          {
            question: 'Which organelle builds proteins by following instructions copied from DNA?',
            options: ['Ribosome', 'Lysosome', 'Vacuole', 'Cell membrane'],
            correctAnswer: 0,
            explanation: 'Ribosomes are the cell\'s protein builders. Lysosomes break down wastes, vacuoles store materials, and the cell membrane controls what enters and leaves.'
          },
          {
            question: 'Perfume sprayed in one corner of a still room is soon smelled across the room. Which process explains this?',
            options: ['Diffusion', 'Osmosis', 'Active transport', 'Transpiration'],
            correctAnswer: 0,
            explanation: 'The perfume particles spread from where they are concentrated to where they are not: diffusion. Osmosis is specifically water crossing a membrane, active transport uses cell energy, and transpiration is water loss from leaves.'
          },
          {
            question: 'Two parents both have dimples, a dominant trait, but their child has no dimples. What must be true of the parents?',
            options: ['Both are heterozygous for the trait', 'Both are homozygous dominant for the trait', 'One parent is homozygous recessive', 'The child carries a new mutation'],
            correctAnswer: 0,
            explanation: 'The child shows the recessive trait, so it received a recessive allele from each parent. Each parent shows the dominant trait, so each must carry one dominant and one recessive allele: heterozygous. Homozygous dominant parents could not pass on a recessive allele, and a homozygous recessive parent would have no dimples.'
          },
          {
            question: 'Two animals belong to the same family. They must also belong to the same:',
            options: ['Order', 'Genus', 'Species', 'Population'],
            correctAnswer: 0,
            explanation: 'Classification groups are nested, so every member of a family also shares the broader levels above it: order, class, phylum, kingdom and domain. Genus and species are narrower than family, so two family members may differ there. A population is an ecology term, not a classification level.'
          },
          {
            question: 'Tendons connect:',
            options: ['Muscle to bone', 'Bone to bone', 'Muscle to muscle', 'Nerve to muscle'],
            correctAnswer: 0,
            explanation: 'Tendons attach muscles to bones so that a contracting muscle moves the bone. Ligaments connect bone to bone at joints.'
          },
          {
            question: 'Which part of the nervous system carries signals between the brain and the nerves of the body?',
            options: ['Spinal cord', 'Cerebellum', 'Esophagus', 'Pituitary gland'],
            correctAnswer: 0,
            explanation: 'The spinal cord runs down the back inside the spine and relays signals between the brain and the body. The cerebellum is the part of the brain that coordinates balance, the esophagus is part of the digestive system and the pituitary is an endocrine gland.'
          },
          {
            question: 'A child who rarely goes outdoors and gets little vitamin D in food is at greatest risk of which condition?',
            options: ['Rickets', 'Scurvy', 'Anemia', 'Night blindness'],
            correctAnswer: 0,
            explanation: 'Skin makes vitamin D in sunlight, and vitamin D is needed to build strong bones; without it, children develop soft, bent bones (rickets). Scurvy comes from too little vitamin C, anemia from too little iron and night blindness from too little vitamin A.'
          },
          {
            question: 'All the largemouth bass living in one lake make up a:',
            options: ['Population', 'Community', 'Ecosystem', 'Biome'],
            correctAnswer: 0,
            explanation: 'A population is all the members of one species in one area. A community would include every species in the lake, an ecosystem adds the water, rocks and other nonliving parts, and a biome is a large region with a typical climate.'
          },
          {
            question: 'Farmers often plant soybeans in a field before planting corn there. How do the soybeans help the next crop?',
            options: ['Root bacteria add usable nitrogen to the soil', 'Their leaves add extra oxygen to the soil', 'Their roots absorb carbon dioxide from the soil', 'Their flowers attract insects that eat corn pests'],
            correctAnswer: 0,
            explanation: 'Soybeans are legumes with root nodules full of nitrogen-fixing bacteria, which turn nitrogen from the air into a form plants can use. Corn then grows in nitrogen-richer soil. Leaves release oxygen into the air, not the soil, and the other two options describe nothing soybeans are known for.'
          },
          {
            question: 'If every decomposer in a forest suddenly disappeared, what would happen over time?',
            options: ['Dead matter would pile up and soil nutrients would run low', 'Producers would grow faster because they face less competition', 'Herbivores would starve within a few days for lack of food', 'The forest would produce more oxygen than before'],
            correctAnswer: 0,
            explanation: 'Decomposers break down dead plants and animals and return their nutrients to the soil. Without them, dead material accumulates and the nutrients stay locked up, so plants eventually suffer. Decomposers don\'t compete with producers, herbivores don\'t eat decomposers, and oxygen output would not rise.'
          }
        ]
      }
    },
    {
      id: 'gsl7-input',
      type: 'input-boxes' as const,
      content: `**Two quick numbers.** ✍️

**1)** How many chambers does the human heart have?

**2)** A serving of turkey has $15$ g of protein and no fat or carbohydrate. How many Calories does the protein supply?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['4', '60'],
        hint1: 'Two atria and two ventricles.',
        hint2: 'Protein supplies 4 Calories per gram.',
        hint3: 'Multiply grams by Calories per gram.',
        explanation: '(1) The heart has $4$ chambers: two atria on top and two ventricles below. (2) $15 \\times 4 = 60$ Calories.'
      }
    },
    {
      id: 'gsl7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- **Cells:** ribosomes build proteins; diffusion spreads particles from high to low concentration
- **Genetics:** two dominant-trait parents with a recessive-trait child are both **heterozygous**; classification groups are **nested**
- **Body:** tendons join muscle to bone; the spinal cord links brain and body; the heart has **4 chambers**
- **Nutrition:** vitamin D → rickets; protein and carbohydrate 4 Calories per gram, fat 9
- **Ecology:** a population is one species; **legume bacteria fix nitrogen**; decomposers recycle nutrients

> **Next step:** Take the exit quiz for this topic. A missed question points you back to the part that teaches it.`
    }
  ]
};
