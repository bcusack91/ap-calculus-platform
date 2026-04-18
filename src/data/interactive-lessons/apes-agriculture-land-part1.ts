export const apesAgricultureLandPart1Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesal1-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 1 of 7 — Farming Practices and Environmental Impacts**

---

## Agricultural Revolution Timeline

| Revolution | Period | Key Changes |
|-----------|--------|------------|
| **First Agricultural Revolution** | ~10,000 years ago | Shift from hunter-gatherer to farming; domestication of plants and animals |
| **Second (Industrial)** | 1700s-1800s | Mechanization; seed drill, crop rotation, selective breeding |
| **Green Revolution** | 1960s-1970s | High-yield crop varieties, synthetic fertilizers, pesticides, irrigation |

---

## Farming Methods

| Method | Description | Environmental Impact |
|--------|-----------|---------------------|
| **Monoculture** | Growing one crop over large area | Depletes soil nutrients; vulnerable to pests; requires more pesticides |
| **Polyculture** | Growing multiple crops together | Better pest control; maintains soil health; more resilient |
| **No-till farming** | Seeds planted without plowing | Reduces soil erosion; preserves soil structure |
| **Contour plowing** | Plowing along hillside contours | Reduces water runoff and soil erosion |
| **Terracing** | Cutting flat steps into hillsides | Prevents erosion on steep slopes |
| **Crop rotation** | Alternating crops seasonally | Restores soil nutrients; breaks pest cycles |
| **Cover crops** | Planting non-harvest crops between seasons | Prevents erosion; adds nitrogen (legumes) |
| **Integrated Pest Management (IPM)** | Combines biological, cultural, chemical controls | Reduces pesticide use; targets pests precisely |
      `
    },
    {
      id: 'apesal1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Green Revolution increased crop yields primarily through:',
            options: [
              'Organic farming methods and traditional seed saving',
              'High-yield crop varieties, synthetic fertilizers, and pesticides',
              'Genetically modified organisms only',
              'Switching from agriculture to hunting and gathering'
            ],
            correctAnswer: 1,
            explanation: 'The Green Revolution (1960s-70s) used high-yield varieties (especially wheat and rice), synthetic fertilizers, pesticides, and irrigation to dramatically increase food production in developing nations.'
          },
          {
            question: 'Which soil conservation method involves plowing along the natural contour of a hillside rather than up and down?',
            options: [
              'Terracing',
              'Contour plowing',
              'No-till farming',
              'Strip cropping'
            ],
            correctAnswer: 1,
            explanation: 'Contour plowing follows the natural curves of the terrain, creating ridges that slow water runoff and reduce soil erosion on slopes.'
          }
        ]
      }
    },
    {
      id: 'apesal1-content',
      type: 'text' as const,
      content: `
## Environmental Impacts of Agriculture

| Impact | Cause | Consequence |
|--------|-------|------------|
| **Soil erosion** | Plowing, deforestation, overgrazing | Loss of topsoil; sedimentation in waterways |
| **Salinization** | Irrigation in arid areas | Salt buildup makes soil infertile |
| **Waterlogging** | Over-irrigation | Roots suffocate; soil becomes compacted |
| **Desertification** | Overgrazing, deforestation, poor farming | Fertile land becomes desert |
| **Eutrophication** | Fertilizer runoff (N and P) | Algal blooms; dead zones in water |
| **Pesticide resistance** | Overuse of pesticides | Pests evolve resistance; requires more chemicals |
| **Bioaccumulation** | Persistent pesticides (DDT) | Toxins concentrate up the food chain |

## Genetically Modified Organisms (GMOs)

| Pros | Cons |
|------|------|
| Higher yields | Potential biodiversity loss |
| Pest resistance (Bt crops) | Gene flow to wild relatives |
| Drought tolerance | Corporate seed dependency |
| Reduced pesticide use for some crops | Consumer health concerns (debated) |
| Nutrient enhancement (Golden Rice) | May encourage monoculture |
      `
    },
    {
      id: 'apesal1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Growing a single crop over a large area is called _______, which depletes soil nutrients and increases pest vulnerability.

2) Salt buildup in soil from irrigation in arid climates is called _______.

3) The practice that combines biological, cultural, and limited chemical controls to manage pests is called _______ Pest Management.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['monoculture', 'salinization', 'Integrated'],
        hint1: 'Mono = one type of crop.',
        hint2: 'Water evaporates, leaving salt behind.',
        hint3: 'IPM stands for...',
        explanation: 'Monoculture = one crop. Salinization = salt buildup from irrigation. IPM = Integrated Pest Management.'
      }
    },
    {
      id: 'apesal1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A farmer plants clover (a legume) between corn seasons to restore nitrogen. This is ___',
            options: ['Using cover crops and crop rotation', 'Monoculture farming', 'Slash-and-burn agriculture', 'Hydroponics']
          },
          {
            label: 'DDT concentrating in bald eagle tissues at higher levels than in their fish prey is ___',
            options: ['Bioaccumulation/biomagnification', 'Eutrophication', 'Salinization', 'Desertification']
          },
          {
            label: 'Cutting flat terraces into steep hillsides to farm without erosion is ___',
            options: ['Terracing', 'Contour plowing', 'No-till farming', 'Strip mining']
          }
        ],
        correctAnswers: ['Using cover crops and crop rotation', 'Bioaccumulation/biomagnification', 'Terracing'],
        hint1: 'Legumes fix nitrogen; planting between seasons.',
        hint2: 'Toxins concentrate as you move up trophic levels.',
        hint3: 'Creating flat steps on slopes.',
        explanation: 'Clover between corn = cover crop/rotation. DDT in eagles = bioaccumulation. Flat steps on hillsides = terracing.'
      }
    },
    {
      id: 'apesal1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Agriculture

- Know specific soil conservation practices and what problem each one addresses
- **Green Revolution trade-offs** are commonly tested: increased yield but increased environmental impact
- Understand IPM as the preferred approach over heavy pesticide use
- Salinization and waterlogging are caused by IRRIGATION (a common FRQ topic)
- Bioaccumulation vs biomagnification: bioaccumulation = within one organism; biomagnification = increasing concentration up food chain
      `
    },
    {
      id: 'apesal1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A region in sub-Saharan Africa experiences overgrazing and drought. Over time, the grassland turns into barren, unproductive land. This process is called:',
            options: [
              'Eutrophication',
              'Salinization',
              'Desertification',
              'Bioaccumulation'
            ],
            correctAnswer: 2,
            explanation: 'Desertification is the degradation of drylands into desert-like conditions, caused by overgrazing, deforestation, and poor agricultural practices combined with drought.'
          },
          {
            question: 'A farmer practicing IPM would FIRST:',
            options: [
              'Apply broad-spectrum pesticides across all fields',
              'Monitor pest populations and use biological controls before resorting to targeted pesticide application',
              'Plant genetically identical monoculture crops',
              'Eliminate all insects from the farm'
            ],
            correctAnswer: 1,
            explanation: 'IPM prioritizes monitoring and prevention: biological controls (natural predators), habitat manipulation, and resistant varieties before using targeted (not broad-spectrum) pesticides as a last resort.'
          }
        ]
      }
    }
  ]
};
