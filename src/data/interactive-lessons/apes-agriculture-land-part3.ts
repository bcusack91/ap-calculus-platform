export const apesAgricultureLandPart3Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesagri3-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 3 of 7 — Meat Production, Fishing and Aquaculture**

---

| Section |
|---------|
| 📖 Two Ways to Raise Meat: Feedlots and Grazing |
| Inside a CAFO: Inputs, Wastes and Antibiotics |
| Grazing Done Well and Done Badly |
| Livestock Calculations |
| Overfishing |
| Aquaculture |

> 🔑 **Key Concept:** Animal foods come from two very different systems on land (confined feedlots and grazing) and from the sea (wild catch and fish farming). The 2026–27 CED expands topic 5.7 to compare CAFOs with rotational and free-range grazing, including overgrazing, desertification and antibiotic use. This part covers CED 5.7, 5.8 and 5.16.
      `
    },
    {
      id: 'apesagri3-systems',
      type: 'text' as const,
      content: `
## 📖 Two Ways to Raise Meat: Feedlots and Grazing

Meat is an inefficient way to turn crops into food calories. The CED's benchmark is that producing the same calories from meat takes **about 20 times more land** than producing them from plants. (Ecosystem Structure Part 3 explains the energy reason: most of the energy an animal eats is lost as heat.)

| | **Concentrated animal feeding operation (CAFO), or feedlot** | **Free-range and rotational grazing** |
|---|---|---|
| What the animals eat | Grain (corn, soy) grown elsewhere and trucked in | Grass and forage on the pasture itself |
| Space | Thousands of animals crowded in pens or barns | Animals spread across large pastures |
| Speed to market | Fast weight gain; animals reach slaughter weight quickly | Slower weight gain |
| Land use | Little land at the site, but large areas of cropland grow the feed | Large areas of pasture |
| Waste | Huge amounts of manure concentrated in one place | Manure spread across the pasture, where it fertilizes the soil |
| Drugs | Antibiotics given to prevent disease in crowded conditions; growth hormones (cattle) | Antibiotics generally not needed for prevention |
| Cost of meat | Lower | Higher |
| Main environmental risk | Water pollution from manure; antibiotic resistance | **Overgrazing** if too many animals use the land |

**Rotational grazing** moves livestock regularly between fenced pastures (paddocks), so each pasture rests and regrows before the animals return. **Free-range grazing** lets animals roam and graze outdoors for their whole lives. Both avoid the confinement of a CAFO; rotational grazing adds active management to prevent overgrazing.
      `
    },
    {
      id: 'apesagri3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why are antibiotics used far more heavily in CAFOs than on pastures?',
            options: [
              'Crowding lets disease spread quickly among the animals',
              'Grain feed contains bacteria that grass does not carry',
              'Grazing animals are naturally immune to most infections',
              'Antibiotics are required by law before animals are moved'
            ],
            correctAnswer: 0,
            explanation: 'Thousands of animals in close contact make it easy for infections to spread, so CAFOs give antibiotics to prevent outbreaks. Animals spread out on pasture have far less contact with one another.'
          },
          {
            question: 'A CAFO occupies only a few hectares, yet it is linked to large land use. What explains this?',
            options: [
              'Its grain feed is grown on cropland somewhere else',
              'Its animals are moved out to graze for half the year',
              'Its buildings must be surrounded by wide empty buffer zones',
              'Its manure must be stored for decades on nearby ground'
            ],
            correctAnswer: 0,
            explanation: 'The animals eat corn and soy grown on large areas of cropland elsewhere. That land, plus the fertilizer, water and fuel used to grow and ship the feed, belongs to the CAFO\'s footprint.'
          },
          {
            question: 'What distinguishes rotational grazing from simply leaving animals on one pasture year-round?',
            options: [
              'Pastures rest and regrow between visits',
              'Animals are fed grain in pens each night',
              'Animals receive daily antibiotic doses',
              'Pastures are plowed and replanted each spring'
            ],
            correctAnswer: 0,
            explanation: 'Moving the herd among paddocks gives each one time to regrow, which keeps plant cover and roots intact and prevents overgrazing.'
          }
        ]
      }
    },
    {
      id: 'apesagri3-cafo',
      type: 'text' as const,
      content: `
## Inside a CAFO: Inputs, Wastes and Antibiotics

| Problem | How it happens | Consequence |
|---|---|---|
| **Manure runoff** | Manure is stored in open lagoons or spread on nearby fields faster than crops can use it; lagoons can leak or overflow in floods | Nitrogen and phosphorus cause eutrophication; fecal bacteria such as *E. coli* contaminate surface water and groundwater |
| **Antibiotic resistance** | Routine low doses kill susceptible bacteria and leave resistant ones to multiply | Resistant bacteria can reach people through meat, manure and water, making infections harder to treat |
| **Greenhouse gases** | Cattle digestion and stored manure produce methane; manure also releases nitrous oxide | Contributes to climate change |
| **Air quality** | Ammonia and hydrogen sulfide from manure | Odor and respiratory problems for nearby residents |
| **Feed production** | Fertilizer, pesticides, irrigation and fuel to grow corn and soy | All the impacts of Part 2, carried by the animals' diet |

A CAFO's advantage is efficiency at the site: meat is cheap, animals grow fast, and less land is needed **at the farm** than for grazing. That is why CAFOs supply most meat in industrialized countries.

## Grazing Done Well and Done Badly

### Overgrazing and desertification

**Overgrazing** happens when too many animals feed on an area for too long, so plants are eaten faster than they regrow. In dry regions it can lead to **desertification**, in which productive land degrades into desert-like land.

1. Animals eat plants down to the roots, and plant cover falls.
2. Hooves **compact** the bare soil, so less water infiltrates and more runs off.
3. Wind and water **erode** the unprotected topsoil.
4. Fewer plants can grow on the thin, dry soil, so even fewer remain the next season.

This is a positive feedback loop: each step makes the next one worse. It is a classic outcome of the **tragedy of the commons** (Part 5) when many herders share one open range.

### Why well-managed grazing can be sustainable

Grazing land is often too dry, steep or rocky for crops. When the number of animals stays within what the pasture can regrow, and the herd is rotated, grasslands keep their cover, manure returns nutrients to the soil, and no feed crops or antibiotics are needed. The trade-off is that grazing needs **much more land per kilogram of meat** and produces meat more slowly and at higher cost. Clearing forest to make new pasture, as in parts of the Amazon, is a major cause of deforestation.

## Livestock Calculations

### Worked Example 1: Feed Conversion Ratio (illustrative data)

A feedlot steer eats **9 kg** of feed per day and gains **1.5 kg** per day.

$$\\text{Feed conversion ratio} = \\frac{9\\ \\text{kg feed}}{1.5\\ \\text{kg gain}} = 6\\ \\text{kg feed per kg of weight gained}$$

Over a 150-day finishing period, the steer gains $1.5 \\times 150 = 225$ kg and eats $9 \\times 150 = 1{,}350$ kg of feed. Approximate ratios are about 2 for chicken, about 3 for pork and about 6 or more for feedlot beef, which is why beef has the largest land and water footprint per kilogram.

### Worked Example 2: Stocking Rate (illustrative data)

A pasture can sustainably support **1 cow per 2 ha**. A rancher keeps **200 cows** on **300 ha**.

- Sustainable herd: $300 \\div 2 = 150$ cows
- Overstock: $\\frac{200 - 150}{150} \\times 100 \\approx 33\\%$ above the sustainable number

The rancher should reduce the herd to 150 or add 100 ha of pasture ($200 \\times 2 = 400$ ha needed).

### Worked Example 3: Manure Output (illustrative data)

A feedlot holds **5,000 cattle**, each producing about **25 kg** of manure per day.

$$5{,}000 \\times 25 = 125{,}000\\ \\text{kg/day} = 125\\ \\text{t/day}$$
$$125\\ \\text{t/day} \\times 365\\ \\text{days} \\approx 45{,}600\\ \\text{t/yr}$$

That is roughly $4.6 \\times 10^{4}$ tonnes a year from one site, far more than nearby fields can absorb.
      `
    },
    {
      id: 'apesagri3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A pig gains 0.8 kg per day while eating 2.4 kg of feed per day. What is its feed conversion ratio?

2) A 600-ha range can sustainably support 1 cow per 4 ha. How many cows can it support?

3) A rancher keeps 210 cows on that same range. By what percent does the herd exceed the sustainable number?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '150', '40'],
        hint1: 'Feed eaten ÷ weight gained.',
        hint2: 'Total hectares ÷ hectares needed per cow.',
        hint3: '(210 − 150) ÷ 150 × 100.',
        explanation: '1) 2.4 ÷ 0.8 = 3 kg of feed per kg of gain. 2) 600 ÷ 4 = 150 cows. 3) 60 ÷ 150 × 100 = 40 percent overstocked.'
      }
    },
    {
      id: 'apesagri3-fishing',
      type: 'text' as const,
      content: `
## Overfishing

**Overfishing** removes fish faster than the population can reproduce. It reduces aquatic biodiversity and harms the people who depend on fish for food and income (CED 5.8).

| Practice | What it is | Impact |
|---|---|---|
| **Bottom trawling** | Dragging a weighted net along the seafloor | Destroys seafloor habitat such as corals and sponges; high bycatch |
| **Drift nets and longlines** | Huge nets or lines with thousands of hooks | Catch sea turtles, seabirds, sharks and dolphins |
| **Bycatch** | Unintended species caught and usually discarded dead | Kills non-target and endangered species |
| **Fishing down the food web** | As large predators are depleted, fleets target smaller species | Food webs lose their top predators |

### Case: the Grand Banks cod collapse

Atlantic cod off Newfoundland supported a fishery for centuries. Industrial trawlers in the 1960s–1980s caught cod faster than they could reproduce, and by the early 1990s the stock had collapsed. Canada closed the fishery in **1992**, and tens of thousands of people lost their jobs. Cod recovered very slowly, because the food web had changed while they were gone.

### Managing fisheries

Solutions include catch limits and quotas, closed seasons, protected areas where fishing is banned, gear rules (turtle excluder devices, larger net mesh), and limits on bycatch.

> 🔑 **AP Connection:** The highest sustainable harvest from a logistic population is taken when it is near **half of carrying capacity**, where it grows fastest (Population Ecology Part 1). Fishing a stock below that level shrinks future catches.

## Aquaculture

**Aquaculture** is the farming of fish, shellfish or seaweed in tanks, ponds or ocean pens (CED 5.16).

| Advantages | Disadvantages |
|---|---|
| Highly efficient: much food from a small area of water | Wastewater with feces, uneaten feed and chemicals pollutes surrounding water |
| Uses little fuel compared with fishing fleets | Crowded fish get diseases and parasites that can spread to wild fish |
| Reduces pressure on wild stocks for some species | Escaped fish can compete or interbreed with wild fish |
| Reliable, year-round supply | Carnivorous species (salmon, shrimp) are fed fishmeal made from wild-caught fish |
| | Coastal mangroves have been cleared for shrimp ponds |
      `
    },
    {
      id: 'apesagri3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A hurricane floods a region with many hog CAFOs. Which water-quality change downstream is most likely in the following weeks?',
            options: [
              'Higher fecal bacteria counts and lower dissolved oxygen',
              'Lower nitrate levels because floodwater dilutes all of it',
              'Lower turbidity as floodwater settles the suspended sediment',
              'Higher dissolved oxygen as algae are washed out to sea'
            ],
            correctAnswer: 0,
            explanation: 'Overflowing manure lagoons release fecal bacteria and nutrients. The nutrients feed algal growth, and decomposition of the algae and manure lowers dissolved oxygen.'
          },
          {
            question: 'In a dry grassland, hooves compact the bare soil after heavy grazing. How does this help drive desertification?',
            options: [
              'Less water soaks in, so fewer plants regrow',
              'Compacted soil traps more water near the roots of new grasses',
              'Compacted soil adds organic matter that later blows away',
              'Hard soil stops seeds from being eaten by small rodents'
            ],
            correctAnswer: 0,
            explanation: 'Compaction reduces infiltration, so rain runs off, carrying topsoil, and less water reaches roots. With fewer plants, more soil is exposed, which feeds the cycle of degradation.'
          },
          {
            question: 'A salmon farm keeps thousands of fish in an open net pen in a coastal bay. Which is a disadvantage specific to this kind of aquaculture?',
            options: [
              'Sea lice from the crowded enclosure can spread to wild fish nearby',
              'Large fuel use by fleets that travel far offshore to catch them',
              'Bottom trawls that destroy the seafloor where the fish are caught',
              'Bycatch of sea turtles in the drift nets used to harvest the pens'
            ],
            correctAnswer: 0,
            explanation: 'Dense pens breed parasites such as sea lice and diseases that spread to wild fish swimming past. Fuel use, trawl damage and drift-net bycatch are costs of wild-capture fishing, not of farming fish in pens.'
          }
        ]
      }
    },
    {
      id: 'apesagri3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Meat vs plants | About 20 times more land for the same calories from meat |
| CAFOs | Cheap, fast and space-efficient at the site; manure runoff, *E. coli*, antibiotic resistance, methane |
| Free-range and rotational grazing | No feed crops or routine antibiotics; more land, slower and costlier; rotation prevents overgrazing |
| Overgrazing | Plant loss → compaction → erosion → desertification (positive feedback) |
| Feed conversion | Feed ÷ gain: about 2 chicken, 3 pork, 6+ feedlot beef |
| Overfishing | Bycatch, trawling damage, Grand Banks cod collapse and 1992 closure |
| Aquaculture | Efficient, little fuel; wastewater, disease, escapes, fishmeal |

**Next:** Part 4 returns to the field: how pests evolve resistance, how IPM works, and which practices keep soil productive.
      `
    }
  ]
};
