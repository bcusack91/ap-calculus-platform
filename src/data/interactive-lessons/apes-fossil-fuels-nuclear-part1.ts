export const apesFossilFuelsNuclearPart1Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfn1-intro',
      type: 'text' as const,
      content: `
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 1 of 7 — Formation, Extraction, and Environmental Impacts**

---

## Fossil Fuel Formation

| Fuel | Formed From | Conditions | Time Scale |
|------|-----------|-----------|-----------|
| **Coal** | Ancient swamp plants compressed | Heat + pressure over millions of years | 300+ million years |
| **Oil (petroleum)** | Marine microorganisms buried in sediment | Heat + pressure; trapped in porous rock | 60-250 million years |
| **Natural gas** | Same as oil; lighter hydrocarbons | Higher heat/pressure than oil | 60-250 million years |

---

## Extraction Methods

| Method | Fuel | Environmental Concerns |
|--------|------|----------------------|
| **Surface mining (strip mining)** | Coal | Habitat destruction, acid mine drainage, erosion |
| **Mountaintop removal** | Coal | Destroys mountain ecosystems; valley fill |
| **Underground mining** | Coal | Subsidence, methane explosions, black lung disease |
| **Conventional drilling** | Oil/gas | Oil spills, habitat fragmentation, water contamination |
| **Hydraulic fracturing (fracking)** | Natural gas/oil | Water contamination, induced earthquakes, methane leaks |
| **Offshore drilling** | Oil/gas | Oil spill risk (Deepwater Horizon 2010) |

> 🔑 **Natural gas burns cleaner than coal** (less CO₂, no SO₂, less PM) but methane leaks during extraction reduce this advantage. Methane is 80x more potent as a GHG than CO₂ over 20 years.
      `
    },
    {
      id: 'apesfn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Fossil fuels are considered non-renewable because:',
            options: [
              'They can never form again under any conditions',
              'They form over millions of years, far slower than human consumption rates',
              'There are no fossil fuels remaining on Earth',
              'They are only found on other planets'
            ],
            correctAnswer: 1,
            explanation: 'Fossil fuels technically can form again, but the process takes tens to hundreds of millions of years — effectively non-renewable on human time scales.'
          },
          {
            question: 'A major environmental concern with hydraulic fracturing (fracking) is:',
            options: [
              'It produces more CO₂ than coal mining',
              'Potential groundwater contamination and induced seismic activity',
              'It only works in tropical climates',
              'It completely depletes all underground water'
            ],
            correctAnswer: 1,
            explanation: 'Fracking injects high-pressure fluid underground to fracture rock and release gas/oil. Concerns include chemical contamination of groundwater, methane migration, and small earthquakes from injection wells.'
          }
        ]
      }
    },
    {
      id: 'apesfn1-content',
      type: 'text' as const,
      content: `
## Nuclear Energy

| Aspect | Detail |
|--------|--------|
| **Fuel** | Uranium-235 (U-235) |
| **Process** | Nuclear fission: splitting atoms releases enormous energy |
| **Electricity share** | ~10% of global electricity; ~20% in the US |
| **CO₂ emissions** | Near-zero during operation |
| **Waste** | Highly radioactive; remains dangerous for thousands of years |
| **Accidents** | Chernobyl (1986), Fukushima (2011), Three Mile Island (1979) |

### Nuclear Pros and Cons

| Pros | Cons |
|------|------|
| Very low CO₂ emissions | Radioactive waste storage (10,000+ years) |
| High energy density | Risk of catastrophic accidents |
| Reliable baseload power | High construction costs |
| Small land footprint | Uranium mining environmental impacts |
| Energy independence | Nuclear weapons proliferation risk |

## Comparing Fossil Fuels

| Fuel | CO₂ per kWh | SO₂ | PM | Other Issues |
|------|------------|-----|----|----|
| **Coal** | ~1,000 g | High | High | Ash, acid rain, mercury |
| **Oil** | ~840 g | Moderate | Moderate | Oil spills, habitat loss |
| **Natural gas** | ~490 g | Very low | Very low | Methane leaks, fracking concerns |
      `
    },
    {
      id: 'apesfn1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Nuclear power plants generate electricity through nuclear _______ (splitting uranium atoms).

2) The fossil fuel that produces the MOST CO₂ per unit of energy is _______.

3) The 1986 nuclear disaster in Ukraine is known as the _______ accident.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fission', 'coal', 'Chernobyl'],
        hint1: 'Splitting atoms apart (not fusion).',
        hint2: 'The dirtiest fossil fuel.',
        hint3: 'A city in northern Ukraine.',
        explanation: 'Nuclear fission = splitting atoms. Coal = highest CO₂/kWh (~1,000g). Chernobyl = worst nuclear disaster (1986).'
      }
    },
    {
      id: 'apesfn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Source** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An energy source that produces near-zero CO₂ during operation but creates radioactive waste is ___',
            options: ['Nuclear fission', 'Coal combustion', 'Natural gas', 'Solar photovoltaic']
          },
          {
            label: 'Injecting high-pressure fluid into rock to release trapped gas is ___',
            options: ['Hydraulic fracturing (fracking)', 'Mountaintop removal', 'Surface mining', 'Offshore drilling']
          },
          {
            label: 'Coal mining can cause acidic water to drain from mines into streams. This is called ___',
            options: ['Acid mine drainage', 'Eutrophication', 'Thermal pollution', 'Ocean acidification']
          }
        ],
        correctAnswers: ['Nuclear fission', 'Hydraulic fracturing (fracking)', 'Acid mine drainage'],
        hint1: 'Uranium-based, low carbon, waste concerns.',
        hint2: 'High-pressure fluid fractures underground rock.',
        hint3: 'Sulfuric acid from exposed minerals in mine sites.',
        explanation: 'Nuclear = low CO₂ + radioactive waste. Fracking = high-pressure fluid extraction. Acid mine drainage = acid from exposed coal mine minerals.'
      }
    },
    {
      id: 'apesfn1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Fossil Fuels & Nuclear

- Know the relative CO₂ emissions: coal > oil > natural gas
- Understand the trade-offs of **each** energy source — AP FRQs often ask for pros AND cons
- Nuclear: emphasize low CO₂ BUT radioactive waste problem
- **Fracking** is a hot topic — know the water contamination and seismic concerns
- Coal mining methods: surface (strip), mountaintop removal, underground — know impacts of each
- Be able to compare natural gas to coal (cleaner burning but methane leaks offset some benefits)
      `
    },
    {
      id: 'apesfn1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country wants to reduce CO₂ emissions while maintaining reliable baseload electricity. Which strategy would be MOST effective?',
            options: [
              'Building more coal power plants with carbon capture',
              'Replacing coal plants with nuclear power plants',
              'Increasing oil consumption for electricity',
              'Eliminating all electricity generation'
            ],
            correctAnswer: 1,
            explanation: 'Nuclear produces near-zero CO₂ during operation and provides reliable 24/7 baseload power, making it effective for replacing coal. However, waste disposal and safety remain challenges.'
          },
          {
            question: 'Switching from coal to natural gas for electricity generation reduces CO₂ emissions by approximately:',
            options: [
              '5-10%',
              '50% per kWh',
              '90% per kWh',
              '0% — they produce the same emissions'
            ],
            correctAnswer: 1,
            explanation: 'Natural gas produces ~490 g CO₂/kWh vs. coal at ~1,000 g CO₂/kWh — roughly a 50% reduction. However, methane leaks during extraction can reduce this climate benefit.'
          }
        ]
      }
    }
  ]
};
