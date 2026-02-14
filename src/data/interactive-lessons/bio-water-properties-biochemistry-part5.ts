export const bioWaterPropertiesPart5Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate5-ice',
      type: 'text' as const,
      content: `
# ## Ice Floats — And That's Critical

Unlike most substances, water is **less dense as a solid** than as a liquid.

### Why Ice Floats

- In liquid water, hydrogen bonds constantly break and reform
- When water freezes, hydrogen bonds become fixed in a **crystalline lattice**
- This lattice is more spread out (less dense) than liquid water
- Ice density: 0.917 g/mL vs. liquid water: 1.00 g/mL

### Biological Significance

1. **Insulation** — Ice forms on the surface of lakes and ponds, insulating the liquid water below
2. **Aquatic survival** — Fish and other organisms survive winter beneath the ice
3. **Prevents solid freezing** — If ice sank, bodies of water would freeze from the bottom up, killing most aquatic life
4. **Seasonal mixing** — Ice melting in spring creates currents that distribute nutrients
      `
    },
    {
      id: 'wate5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does ice float on liquid water?',
            options: [
              'Ice has more hydrogen bonds per molecule',
              'The hydrogen bond lattice in ice is more spread out',
              'Ice molecules move faster',
              'Liquid water has more dissolved gases'
            ],
            correctAnswer: 1,
            explanation: 'In ice, hydrogen bonds lock water molecules into a crystalline lattice that is more spread out (less dense) than the dynamic arrangement in liquid water.'
          }
        ]
      }
    },
    {
      id: 'wate5-summary',
      type: 'text' as const,
      content: `
# ## Summary of Water's Properties

| Property | Cause | Biological Importance |
|----------|-------|----------------------|
| **Cohesion** | H-bonds between water molecules | Surface tension, capillary action |
| **Adhesion** | H-bonds to other polar surfaces | Water transport in plants |
| **High specific heat** | H-bonds absorb heat energy | Temperature regulation |
| **High heat of vaporization** | Energy needed to break H-bonds | Evaporative cooling |
| **Ice is less dense** | H-bond lattice in ice | Insulation of aquatic habitats |
| **Universal solvent** | Polarity | Biochemical reactions in solution |

All of these properties trace back to one feature: **hydrogen bonding** between polar water molecules.
      `
    },
    {
      id: 'wate5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If ice sank instead of floating, what would happen?',
            options: [
              'Lakes would freeze from the bottom up, killing aquatic life',
              'Water would become more acidic',
              'Evaporation would increase dramatically',
              'Surface tension would disappear'
            ],
            correctAnswer: 0,
            explanation: 'If ice were denser than liquid water, it would sink to the bottom. Lakes would freeze solid from the bottom up, making aquatic life impossible in cold climates.'
          }
        ]
      }
    },
    {
      id: 'wate5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The density of ice is about ___ g/mL',
            options: ['0.50', '0.917', '1.00', '1.25']
          },
          {
            label: 'All of water\'s unique properties are due to ___',
            options: ['covalent bonds', 'hydrogen bonds', 'ionic bonds', 'van der Waals forces']
          },
          {
            label: 'Ice insulates aquatic habitats by forming on the ___',
            options: ['bottom', 'surface', 'middle', 'sides']
          }
        ],
        correctAnswers: ['0.917', 'hydrogen bonds', 'surface'],
        hint1: 'Ice is about 9% less dense than liquid water.',
        hint2: 'The one feature that explains everything...',
        hint3: 'Ice is less dense so it rises.',
        explanation: 'Ice has a density of 0.917 g/mL. All of water\'s unique properties stem from hydrogen bonding. Ice floats on the surface, insulating the water below.'
      }
    }
  ]
}
