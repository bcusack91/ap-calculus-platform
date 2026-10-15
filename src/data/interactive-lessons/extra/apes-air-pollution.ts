import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Air Pollution & Smog (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-air-pollution'.
 * 7 parts, rewritten Oct 2026 to the 2026-27 APES CED (May 2027 exam). Written to
 * complement, not repeat, the core APES topics apes-atmospheric-pollution,
 * apes-water-resources and apes-atmosphere-climate. LaTeX uses DOUBLED backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
// ───────────────────────── PART 1 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap1-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 1 of 7 — Pollutants, Sources and How They Form**

---

| Section |
|---------|
| 📖 Where the Emissions Come From |
| Primary and Secondary: Following the Molecules |
| Point, Nonpoint and Mobile Sources |

> 🔑 **Key Concept:** Every air-quality problem starts with an **emission inventory**: which pollutants are released, by whom, and in what amounts. This part reads an inventory, traces how emitted gases turn into new pollutants in the air, and sorts sources by how they can be regulated (CED 7.1). The six criteria pollutants and the basic smog types are introduced in Atmospheric Pollution, Part 1; this topic builds on them.`,
    },
    {
      id: 'apeap1-inventory',
      type: 'text' as const,
      content: `## 📖 Where the Emissions Come From

An **emission inventory** lists how much of each pollutant each kind of source releases in a year. Regulators use it to decide where controls will do the most good.

| Pollutant | Largest human sources | Notable natural sources |
|---|---|---|
| Carbon monoxide (CO) | Motor vehicles and other engines (incomplete combustion) | Wildfires |
| Nitrogen oxides $(NO_{x})$ | Motor vehicles, power plants, industrial boilers | Lightning, soil bacteria |
| Sulfur dioxide $(SO_{2})$ | Coal-burning power plants, metal smelters, refineries | Volcanoes |
| Particulate matter (PM) | Combustion, residential wood burning, construction and road dust | Dust storms, wildfires, sea spray, pollen |
| Volatile organic compounds (VOCs) | Gasoline vapor, solvents, paints, industry | Trees and other plants |
| Lead (Pb) | Piston-engine aircraft fuel, metal smelting | Minor |

### Coal: one fuel, many pollutants

The CED singles out coal. Burning it releases **carbon dioxide, sulfur dioxide, toxic metals such as mercury, and particulates**, plus $NO_{x}$. The sulfur and mercury come from impurities in the coal itself, so the amount released depends on where the coal was mined.

### Worked Example: Reading an Inventory (illustrative data)

A state's annual $NO_{x}$ inventory:

| Source | $NO_{x}$ (thousand tonnes per year) |
|---|---|
| On-road vehicles | 96 |
| Off-road engines (construction, farm, rail, ships) | 54 |
| Power plants | 30 |
| Industry | 20 |
| **Total** | **200** |

Share from all engines (on-road plus off-road):

$$\\frac{96 + 54}{200} \\times 100 = 75\\%$$

Three quarters of this state's $NO_{x}$ comes from engines, so a rule that only targets power plants could cut at most 15 percent of the total ($30 \\div 200$).`,
    },
    {
      id: 'apeap1-q-inventory',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which set of pollutants does the CED list as released by burning coal?',
            options: [
              'Carbon dioxide, sulfur dioxide, toxic metals and particulates',
              'Carbon monoxide, radon, ground-level ozone and chlorofluorocarbons',
              'Methane, ammonia, formaldehyde and fibers of asbestos insulation',
              'Ozone, peroxyacyl nitrates, nitric acid and sulfuric acid droplets',
            ],
            correctAnswer: 0,
            explanation: 'Coal combustion releases carbon dioxide, sulfur dioxide, toxic metals such as mercury, and particulates. Ozone, PANs and the two acids form later in the air, so they are not released by the stack itself.',
          },
          {
            question: 'In the illustrative state inventory, what is the largest percentage of total nitrogen oxide emissions that a rule aimed only at power plants could remove?',
            options: ['15 percent', '30 percent', '25 percent', '75 percent'],
            correctAnswer: 0,
            explanation: 'Power plants emit 30 of the 200 thousand tonnes, which is 15 percent; even removing all of it leaves the engine emissions untouched. Thirty is the tonnage, not the percentage, and 75 percent is the share from engines.',
          },
          {
            question: 'A forested county with almost no industry still records high VOC emissions in summer. What best explains the reading?',
            options: [
              'Volcanic gas carried from far-off ranges',
              'Hydrocarbons released by the trees in heat',
              'Sulfur dioxide drifting from distant cities',
              'Lightning strikes during summer storms',
            ],
            correctAnswer: 1,
            explanation: 'Trees and other plants are a large natural source of VOCs, and they release more in hot weather. Lightning makes nitrogen oxides, and sulfur dioxide and volcanic gas are not VOCs.',
          },
        ],
      },
    },
    {
      id: 'apeap1-pathways',
      type: 'text' as const,
      content: `## Primary and Secondary: Following the Molecules

A **primary pollutant** is emitted directly from a source. A **secondary pollutant** forms in the atmosphere when primary pollutants react with each other, with oxygen or water, or under sunlight. Many of the most harmful pollutants are secondary.

| Primary pollutant(s) | What happens in the air | Secondary pollutant(s) |
|---|---|---|
| $SO_{2}$ | Oxidized, then dissolves in water | Sulfuric acid $(H_{2}SO_{4})$ and sulfate particles |
| $NO$ | Oxidized to $NO_{2}$, then reacts with water | Nitric acid $(HNO_{3})$ and nitrate particles |
| $NO_{x}$ + VOCs | React in sunlight and heat | Ground-level ozone $(O_{3})$, peroxyacyl nitrates (PANs) |
| Ammonia $(NH_{3})$ from farms + the acids above | Neutralization | Ammonium sulfate and ammonium nitrate particles |

### Why this matters: secondary particulates

A large share of the fine particulate matter (PM2.5) in the eastern United States has been **secondary**: sulfate and nitrate particles built from $SO_{2}$ and $NO_{x}$ emitted hundreds of kilometers away. That is why cutting power-plant $SO_{2}$ also cut haze and PM2.5 in places with no power plant nearby.

> 🔑 **AP Connection:** To classify a pollutant, ask whether it came **out of a pipe** or was **built in the air**. Ozone, sulfuric acid and nitric acid are always secondary. $NO_{2}$ is a special case: most of it forms when emitted NO is oxidized.`,
    },
    {
      id: 'apeap1-dd-precursors',
      type: 'dropdown-select' as const,
      content: `**Trace the Precursor** 🔽

Choose the emitted (primary) pollutant that each secondary pollutant is mainly built from.`,
      exercise: {
        dropdowns: [
          { label: 'Sulfate particles that haze a national park:', options: ['Sulfur dioxide', 'Carbon monoxide', 'Nitrogen oxides plus VOCs', 'Lead'] },
          { label: 'Nitric acid in rain:', options: ['Carbon monoxide', 'Nitrogen oxides', 'Sulfur dioxide', 'Lead'] },
          { label: 'Ground-level ozone on a summer afternoon:', options: ['Sulfur dioxide', 'Carbon monoxide', 'Nitrogen oxides plus VOCs', 'Lead'] },
          { label: 'Ammonium nitrate particles downwind of farmland:', options: ['Ammonia plus nitric acid', 'Carbon monoxide plus soot', 'Sulfur dioxide plus ozone', 'Lead plus dust'] },
        ],
        correctAnswers: ['Sulfur dioxide', 'Nitrogen oxides', 'Nitrogen oxides plus VOCs', 'Ammonia plus nitric acid'],
        hint1: 'Sulfur-containing products come from the sulfur-containing gas.',
        hint2: 'Ozone needs two families of precursors plus sunlight.',
        hint3: 'Ammonium salts form when farm ammonia neutralizes an acid made from an emitted gas.',
        explanation: 'Sulfate comes from sulfur dioxide, nitric acid from nitrogen oxides, ozone from nitrogen oxides plus VOCs in sunlight, and ammonium nitrate from ammonia neutralizing nitric acid.',
      },
    },
    {
      id: 'apeap1-sources',
      type: 'text' as const,
      content: `## Point, Nonpoint and Mobile Sources

| Source type | Description | Examples | How it is usually controlled |
|---|---|---|---|
| **Point (stationary)** | A single, identifiable outlet | Power-plant or smelter smokestack | Permits, emission limits, scrubbers and precipitators, continuous stack monitors |
| **Nonpoint (area)** | Many small, scattered outlets, each too small to permit one by one | Home wood stoves, dry cleaners, paint fumes, dust from fields | Product standards (low-VOC paint), burn bans, best practices |
| **Mobile** | Engines that move | Cars, trucks, ships, aircraft, construction equipment | Vehicle and fuel standards, catalytic converters, inspection programs, transit |

A point source can be measured at the stack and held to a limit. Nonpoint and mobile sources must be managed through rules on **products, fuels and behavior**, because there is no single outlet to fit with a control device.

### Worked Example: Per-Capita Emissions (illustrative data)

A metro area of **2.5 million** people has vehicles that emit **40,000 t** of $NO_{x}$ a year.

$$\\frac{40{,}000\\ \\text{t}}{2{,}500{,}000\\ \\text{people}} = 0.016\\ \\text{t per person} = 16\\ \\text{kg per person per year}$$

Converting to a per-person figure lets regulators compare cities of different sizes and track whether cleaner cars are outpacing population growth.`,
    },
    {
      id: 'apeap1-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A county emits 8,000 t of $SO_{2}$ a year, of which 6,800 t comes from one smelter. What percent comes from the smelter?

2) A city of 400,000 people emits 2,000 t of VOCs a year. How many kilograms per person is that? (1 t = 1,000 kg)

3) A state's on-road vehicles emit 120 thousand tonnes of $NO_{x}$ out of a 300 thousand tonne total. If cleaner cars cut the vehicle emissions in half, what percent of the original total is removed?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['85', '5', '20'],
        hint1: 'Divide the smelter tonnage by the county total, then multiply by 100.',
        hint2: 'Convert 2,000 t to kilograms first, then divide by the population.',
        hint3: 'Half of 120 is the amount removed; compare it with 300.',
        explanation: '1) 6,800 ÷ 8,000 × 100 = 85 percent. 2) 2,000,000 kg ÷ 400,000 people = 5 kg per person. 3) Half of 120 is 60 thousand tonnes; 60 ÷ 300 × 100 = 20 percent of the total.',
      },
    },
    {
      id: 'apeap1-q-sources',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A valley town\'s winter particulate problem comes mostly from thousands of household wood stoves. Which approach fits this kind of source?',
            options: [
              'Fitting each stove with a stack scrubber',
              'Burn bans and certified cleaner-burning stoves',
              'An emissions permit for the largest chimney',
              'Moving the power plant farther upwind',
            ],
            correctAnswer: 1,
            explanation: 'Wood stoves are a nonpoint (area) source: many small outlets, none worth permitting alone. They are managed with product standards and burn bans, not industrial devices or single permits.',
          },
          {
            question: 'Sulfate haze in a rural national park dropped after power plants 300 km away installed scrubbers. Which statement best explains why?',
            options: [
              'Sulfate is a secondary particle formed from distant plants\' sulfur dioxide',
              'Scrubbers release limestone dust that settles out the haze over the park',
              'The plants had been emitting sulfate particles directly into the park air',
              'The scrubbers also captured the VOCs given off by the park\'s forests',
            ],
            correctAnswer: 0,
            explanation: 'Sulfate particles form in the air from emitted sulfur dioxide, often far downwind, so cutting the gas at the source removed the haze. Forest VOCs are untouched by scrubbers.',
          },
          {
            question: 'Why are mobile sources usually regulated through vehicle and fuel standards rather than through individual permits?',
            options: [
              'Their emissions do not contribute to smog or to acid deposition',
              'Their pollutants are all secondary and cannot be measured at all',
              'Vehicles produce far less pollution in total than smokestacks',
              'There are millions of small outlets moving from place to place',
            ],
            correctAnswer: 3,
            explanation: 'There are too many vehicles, each a small moving outlet, to permit one by one, so rules set how cars and fuels are built. Vehicles are a major source of nitrogen oxides, CO and VOCs, and their emissions are measured routinely.',
          },
        ],
      },
    },
    {
      id: 'apeap1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Idea | Key fact |
|---|---|
| Emission inventory | Lists each pollutant by source; shows where controls pay off |
| Coal combustion | Releases $CO_{2}$, $SO_{2}$, toxic metals (mercury), particulates and $NO_{x}$ |
| Primary pollutant | Emitted directly: CO, $SO_{2}$, NO, VOCs, much PM, Pb |
| Secondary pollutant | Formed in air: $O_{3}$, PANs, $H_{2}SO_{4}$, $HNO_{3}$, sulfate and nitrate particles |
| Source types | Point (stacks), nonpoint/area (many small outlets), mobile (engines) |
| Calculations | Percent share = part ÷ total × 100; per-capita = total ÷ population |

**Next:** Part 2 compares the two kinds of smog through the cities that made them famous: London and Los Angeles.`,
    },
  ],
},

// ───────────────────────── PART 2 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap2-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 2 of 7 — Two Kinds of Smog: London and Los Angeles**

---

| Section |
|---------|
| 📖 Industrial Smog: London, 1952 |
| Photochemical Smog: Los Angeles |
| Side by Side |
| Why Ozone Peaks Downwind |
| Smog in Today's Megacities |

> 🔑 **Key Concept:** The two smogs have different fuels, chemistry, seasons and colors, and each was named for the city where it was first understood. Reading their histories shows why the solutions differ: industrial smog yields to cleaner fuel for heating and power, photochemical smog to cleaner engines and fuels (CED 7.1 and 7.2). The step-by-step ozone reactions and the hourly smog curve are in Atmospheric Pollution, Part 2.`,
    },
    {
      id: 'apeap2-london',
      type: 'text' as const,
      content: `## 📖 Industrial Smog: London, 1952

**Industrial smog** (also called gray smog or sulfurous smog) forms when **coal** smoke meets cold, damp, still air. Its ingredients are soot and other particulates plus **sulfur dioxide**. In fog, $SO_{2}$ dissolves in the water droplets and is oxidized to **sulfuric acid**, so people breathe acid mist along with soot.

On **5 December 1952**, a high-pressure system parked over London. The air went still, a thermal inversion formed, and fog settled over a city where millions of homes burned coal for heat and power stations burned more. For five days the smoke had nowhere to go.

### Reading the record (illustrative data based on the 1952 pattern)

| Date | Smoke (mg/m³) | Deaths that day in Greater London |
|---|---|---|
| 3 Dec | 0.4 | 280 |
| 5 Dec | 1.8 | 350 |
| 7 Dec | 4.0 | 650 |
| 8 Dec | 4.2 | 900 |
| 10 Dec | 1.0 | 700 |
| 14 Dec | 0.4 | 400 |

### Worked Example: Excess Deaths

The usual December toll was about **280 deaths per day**. On 8 December:

$$900 - 280 = 620\\ \\text{excess deaths in one day}$$

$$\\frac{900}{280} \\approx 3.2\\ \\text{times the normal daily toll}$$

Notice that deaths **lagged** the smoke: they stayed high on 10 December after smoke had fallen, because people already injured by the exposure kept dying. About 4,000 excess deaths were counted in the first weeks, and later studies put the total near 12,000. The disaster led to the United Kingdom's **Clean Air Act of 1956**, which created smoke-control zones and moved homes away from burning raw coal.`,
    },
    {
      id: 'apeap2-q-london',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which combination produced London\'s 1952 smog?',
            options: [
              'Coal smoke and sulfur dioxide held down in cold foggy air',
              'Car exhaust and gasoline vapor reacting in strong summer sunlight',
              'Volcanic ash and desert dust carried in on a dry southerly wind',
              'Radon and carbon monoxide seeping out of sealed coal cellars',
            ],
            correctAnswer: 0,
            explanation: 'Industrial smog is coal smoke and sulfur dioxide held near the ground by a cold, still inversion; fog droplets turn the sulfur dioxide into sulfuric acid. Exhaust reacting in summer sun describes photochemical smog.',
          },
          {
            question: 'In the illustrative 1952 table, deaths stayed high on 10 December even though smoke had fallen. What best explains the lag?',
            options: [
              'A second wave of smoke arrived from factories in other towns',
              'The death records were filled in several days after the fact',
              'People harmed during the peak kept dying in the days after it',
              'Sulfuric acid stays in the air for weeks after soot settles out',
            ],
            correctAnswer: 2,
            explanation: 'Health effects trail exposure: people whose lungs and hearts were damaged at the peak continued to die afterward. The table shows smoke falling, not a second wave.',
          },
        ],
      },
    },
    {
      id: 'apeap2-la',
      type: 'text' as const,
      content: `## Photochemical Smog: Los Angeles

In the 1940s, Los Angeles residents suffered stinging eyes and a brown haze on sunny days, even though the city burned little coal. In the early 1950s, the Caltech chemist **Arie Haagen-Smit** showed that the haze formed when **hydrocarbons (VOCs) and nitrogen oxides from car exhaust reacted in sunlight** to make ozone. The problem was not smoke but chemistry.

| Factor | Why it favored smog in Los Angeles |
|---|---|
| Traffic | Millions of cars supplied $NO_{x}$ and VOCs |
| Sunshine | Strong, frequent sun drove the reactions |
| Warmth | Heat speeds the reactions and evaporates VOCs |
| Mountains | Ranges on three sides blocked the air from moving inland |
| Inversions | Sinking air over the coast formed a warm lid on many days |

The fixes targeted vehicles: **California** set the first U.S. tailpipe standards in the 1960s, and **catalytic converters** became standard on new U.S. cars in the 1975 model year. Los Angeles still has some of the highest ozone in the country, but its peaks are a small fraction of what they were in the 1950s even though the region has many more cars.`,
    },
    {
      id: 'apeap2-compare',
      type: 'text' as const,
      content: `## Side by Side

| Feature | Industrial (gray) smog | Photochemical (brown) smog |
|---|---|---|
| Main fuel | Coal | Gasoline and diesel in vehicles |
| Key pollutants | Soot, $SO_{2}$, sulfuric acid droplets | $NO_{x}$, VOCs, ozone, PANs |
| Needs sunlight? | No | Yes |
| Typical season and time | Winter, any time of day, worst in fog | Summer, worst in the afternoon |
| Color | Gray | Brown (from $NO_{2}$) |
| Classic example | London 1952; Donora, Pennsylvania 1948 | Los Angeles |
| Main fix | Cleaner heating and power fuels, particulate and $SO_{2}$ controls | Cleaner engines and fuels, fewer vehicle miles, VOC controls |

> 🔑 **AP Connection:** A free-response question may describe conditions and ask you to **identify** the smog type. Use the clues: sunlight, heat and traffic point to photochemical smog; coal, cold, damp, still air point to industrial smog.`,
    },
    {
      id: 'apeap2-dd-smog',
      type: 'dropdown-select' as const,
      content: `**Which Smog?** 🔽

Identify the smog type, or the feature, that each clue points to.`,
      exercise: {
        dropdowns: [
          { label: 'A sunny July afternoon in a car-dependent desert city:', options: ['Photochemical smog', 'Industrial smog', 'Acid fog only', 'No smog can form'] },
          { label: 'A foggy January morning in a coal-heated river town:', options: ['Photochemical smog', 'Industrial smog', 'Ozone layer loss', 'No smog can form'] },
          { label: 'The gas that gives photochemical smog its brown tint:', options: ['Nitrogen dioxide', 'Sulfur dioxide', 'Carbon monoxide', 'Ozone'] },
          { label: 'The fix that worked best against Los Angeles smog:', options: ['Cleaner vehicles and fuels', 'Smokeless heating zones', 'Taller smokestacks', 'Liming nearby lakes'] },
        ],
        correctAnswers: ['Photochemical smog', 'Industrial smog', 'Nitrogen dioxide', 'Cleaner vehicles and fuels'],
        hint1: 'Sunlight plus traffic means one type; coal plus cold fog means the other.',
        hint2: 'Ozone is colorless; the brown gas is an oxide of nitrogen.',
        hint3: 'Los Angeles burned little coal, so the fix had to target cars.',
        explanation: 'Sun and traffic make photochemical smog; coal in cold fog makes industrial smog. Nitrogen dioxide gives the brown tint, and cleaner vehicles and fuels cut Los Angeles smog. Smokeless zones were London\'s fix.',
      },
    },
    {
      id: 'apeap2-downwind',
      type: 'text' as const,
      content: `## Why Ozone Peaks Downwind

You might expect ozone to be worst where the traffic is. Often it is not. Fresh exhaust contains **NO**, which destroys ozone $(NO + O_{3} \\rightarrow NO_{2} + O_{2})$. Downtown, the steady supply of NO keeps ozone in check, especially at night. As the air mass drifts downwind over several hours of sunshine, the reactions keep making ozone while fresh NO is scarce.

### Worked Example: Two Monitors (illustrative data)

| Monitor | Afternoon peak $O_{3}$ (ppb) | Overnight low $O_{3}$ (ppb) |
|---|---|---|
| Downtown, beside a highway | 62 | 4 |
| Farm town 60 km downwind | 84 | 38 |

$$\\frac{84 - 62}{62} \\times 100 \\approx 35\\%\\ \\text{higher downwind}$$

The downwind town has **higher** afternoon ozone and keeps much more ozone overnight, because no traffic there destroys it after sunset. This is why rural counties with clean local air can still violate the ozone standard, and why ozone damages **crops and forests** far from cities.`,
    },
    {
      id: 'apeap2-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A city normally records 150 deaths a day. During a smog episode, one day records 420. How many excess deaths occurred that day?

2) For the same day, how many times the normal daily toll is 420? (enter a decimal)

3) A downtown monitor peaks at 50 ppb of ozone and a monitor 40 km downwind peaks at 70 ppb. By what percent is the downwind peak higher?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['270', '2.8', '40'],
        hint1: 'Excess = observed − normal.',
        hint2: 'Divide the observed toll by the normal toll.',
        hint3: '(70 − 50) ÷ 50 × 100.',
        explanation: '1) 420 − 150 = 270 excess deaths. 2) 420 ÷ 150 = 2.8 times the normal toll. 3) 20 ÷ 50 × 100 = 40 percent higher downwind.',
      },
    },
    {
      id: 'apeap2-megacities',
      type: 'text' as const,
      content: `## Smog in Today's Megacities

Many fast-growing cities now face **both** smogs at once:

| City | Winter problem | Summer problem |
|---|---|---|
| Delhi, India | Particulates from vehicles, industry, household fuel and crop-residue burning in nearby states, trapped by winter inversions | Ozone from traffic emissions in strong sun |
| Beijing, China | Coal heating and industry produced severe particulate episodes; a national action plan from 2013 cut coal use and PM2.5 fell sharply | Ozone rose as particulates fell, because $NO_{x}$ and VOCs from traffic remained |
| Mexico City | Basin ringed by mountains, high altitude and frequent inversions | Photochemical ozone from heavy traffic |

The lesson from London and Los Angeles applies: match the control to the chemistry. Cutting coal fixes the gray smog; cutting $NO_{x}$ and VOCs fixes the brown smog.`,
    },
    {
      id: 'apeap2-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A rural county with little traffic or industry violates the ozone standard every summer. What is the most likely explanation?',
            options: [
              'Its farm soils release ozone directly whenever they are plowed',
              'Precursors from an upwind city keep reacting as the air drifts in',
              'Winter coal burning leaves ozone that lingers into the summer',
              'Its cold, damp nights convert local fog into ground-level ozone',
            ],
            correctAnswer: 1,
            explanation: 'Ozone is secondary: city nitrogen oxides and VOCs keep reacting in sunlight as the air moves downwind, and little fresh NO is present to destroy the ozone. Soils and fog do not produce ozone directly.',
          },
          {
            question: 'Beijing\'s PM2.5 fell sharply after coal use was cut, yet summer ozone rose. Which reasoning best accounts for this?',
            options: [
              'Cutting coal raised sulfur dioxide, which reacts to form ozone',
              'Less coal smoke means more sun reaching precursors from traffic',
              'Natural gas boilers emit ozone directly instead of particulates',
              'Ozone forms only in cold air, so fewer winter episodes raised it',
            ],
            correctAnswer: 1,
            explanation: 'Removing particulates lets more sunlight drive the reactions, and traffic nitrogen oxides and VOCs remained, so ozone could rise. Ozone forms in warm, sunny conditions and is not emitted directly by boilers.',
          },
          {
            question: 'Which policy most directly addressed the cause of London\'s 1952 disaster?',
            options: [
              'Requiring catalytic converters on new cars',
              'Installing vapor recovery at gas pumps',
              'Banning raw coal burning in smoke-control zones',
              'Setting an eight-hour ozone standard',
            ],
            correctAnswer: 2,
            explanation: 'The 1952 smog came from coal smoke and sulfur dioxide, so the 1956 Clean Air Act created smoke-control zones that ended burning of raw coal. The other policies target vehicle exhaust, VOCs and ozone.',
          },
        ],
      },
    },
    {
      id: 'apeap2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Idea | Key fact |
|---|---|
| Industrial smog | Coal smoke + $SO_{2}$ in cold, still, foggy air; gray; London 1952 led to the UK Clean Air Act of 1956 |
| Photochemical smog | $NO_{x}$ + VOCs + sunlight + heat → ozone and PANs; brown; Los Angeles |
| Who explained it | Haagen-Smit linked Los Angeles smog to car exhaust in sunlight in the early 1950s |
| Downwind ozone | Fresh NO destroys ozone downtown, so peaks are often higher downwind and in rural areas |
| Megacities | Often face both smogs; match the fix to the chemistry |
| Calculations | Excess = observed − baseline; ratio = observed ÷ baseline; percent difference |

**Next:** Part 3 looks at the weather and landforms that decide whether emissions disperse or pile up.`,
    },
  ],
},

// ───────────────────────── PART 3 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap3-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 3 of 7 — Weather, Terrain and Pollution Episodes**

---

| Section |
|---------|
| 📖 The Box Model: Why Wind and Depth Matter |
| Weather That Cleans the Air, and Weather That Doesn't |
| Seasons and Landforms |
| Pollution That Travels |
| Forecasting Bad Air Days |

> 🔑 **Key Concept:** A city's emissions change little from one day to the next, yet its air quality swings from clean to hazardous. The difference is the volume of air available to dilute the pollution and how quickly that air is replaced (CED 7.3). The types of thermal inversion and how to read a temperature profile are in Atmospheric Pollution, Part 2; this part puts numbers on dilution and follows pollution across regions.`,
    },
    {
      id: 'apeap3-box',
      type: 'text' as const,
      content: `## 📖 The Box Model: Why Wind and Depth Matter

Picture the air over a city as a box. Pollution enters from the ground; wind carries it out the downwind side. The box is as wide as the city $(W)$, as tall as the **mixing height** $(H)$ (the depth of air that churns freely, capped by an inversion or stable layer), and air flows through at wind speed $u$.

$$C = \\frac{E}{u \\times W \\times H}$$

| Symbol | Meaning | Units |
|---|---|---|
| $C$ | Average concentration in the box | g/m³ |
| $E$ | Emission rate | g/s |
| $u$ | Wind speed | m/s |
| $W$ | Width of the city across the wind | m |
| $H$ | Mixing height | m |

The product $u \\times H$ is called the **ventilation**: how much air sweeps over each meter of city width per second.

### Worked Example: A Breezy Afternoon Versus a Still Night (illustrative data)

A city 20 km wide $(W = 20{,}000$ m) emits particulates at $E = 2{,}000$ g/s.

**Afternoon:** $u = 5$ m/s and $H = 1{,}000$ m.

$$u \\times W \\times H = 5 \\times 20{,}000 \\times 1{,}000 = 1 \\times 10^{8}\\ \\text{m}^{3}/\\text{s}$$

$$C = \\frac{2{,}000}{1 \\times 10^{8}} = 2 \\times 10^{-5}\\ \\text{g/m}^{3} = 20\\ \\text{µg/m}^{3}$$

**Still night under an inversion:** $u = 1$ m/s and $H = 200$ m.

$$1 \\times 20{,}000 \\times 200 = 4 \\times 10^{6}\\ \\text{m}^{3}/\\text{s} \\quad\\Rightarrow\\quad C = \\frac{2{,}000}{4 \\times 10^{6}} = 5 \\times 10^{-4}\\ \\text{g/m}^{3} = 500\\ \\text{µg/m}^{3}$$

The emissions did not change at all, yet the concentration rose **25-fold**: the wind slowed by a factor of 5 and the box became 5 times shallower, and $5 \\times 5 = 25$. (1 g = 1,000,000 µg.)`,
    },
    {
      id: 'apeap3-input-box',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) Using the box model, a city emits the same pollution every day. On Monday the wind is 6 m/s and the mixing height 1,200 m. On Tuesday the wind is 2 m/s and the mixing height 400 m. How many times higher is Tuesday's concentration?

2) A town 10 km wide $(W = 10{,}000$ m) emits CO at 500 g/s. The wind is 5 m/s and the mixing height is 1,000 m. What is the concentration in µg/m³?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['9', '10'],
        hint1: 'Concentration is inversely proportional to $u \\times H$. Compare $6 \\times 1{,}200$ with $2 \\times 400$.',
        hint2: 'Multiply $u \\times W \\times H$ first, divide $E$ by it, then multiply grams per m³ by 1,000,000.',
        hint3: '$5 \\times 10{,}000 \\times 1{,}000 = 5 \\times 10^{7}$; then $500 \\div (5 \\times 10^{7}) = 1 \\times 10^{-5}$ g/m³.',
        explanation: '1) Monday ventilation 6 × 1,200 = 7,200; Tuesday 2 × 400 = 800; 7,200 ÷ 800 = 9 times higher. 2) 500 ÷ (5 × 10⁷) = 1 × 10⁻⁵ g/m³ = 10 µg/m³.',
      },
    },
    {
      id: 'apeap3-weather',
      type: 'text' as const,
      content: `## Weather That Cleans the Air, and Weather That Doesn't

| Weather feature | Effect on pollution near the ground | Why |
|---|---|---|
| Strong wind | Lowers it | Raises $u$, so more air dilutes each gram |
| Deep mixing on sunny afternoons | Lowers primary pollutants | Sun-warmed ground drives rising air, raising $H$ |
| Rain and snow | Lowers particulates and soluble gases | Drops capture particles and dissolve gases (washout), carrying them down as wet deposition |
| Passing cold front | Lowers it | Brings wind and fresh air that flush the region |
| Stalled high-pressure system | Raises it | Sinking, warming air forms an inversion aloft and winds go calm (stagnation) |
| Fog | Raises harm from $SO_{2}$ | Droplets turn $SO_{2}$ into sulfuric acid mist |
| Strong sun and heat | Raises **ozone** | Drives photochemistry, even while deep mixing dilutes primary pollutants |

Notice the last row: the same sunny afternoon that **dilutes** CO and NO can **build** ozone, because ozone is made in the air rather than emitted.

> 🔑 **AP Connection:** Rain removes pollutants from the air, but it does not destroy them. The washed-out sulfate and nitrate land in lakes and soils as acid deposition (Part 4). On an FRQ, follow the pollutant to where it ends up.`,
    },
    {
      id: 'apeap3-q-weather',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A city\'s traffic is the same on two weekdays, but carbon monoxide is four times higher on the second. Which change in weather best explains this?',
            options: [
              'A cold front brought strong winds through',
              'A long, steady rain fell through the day',
              'Calm winds under a low, stable air layer',
              'Bright sunshine heated the ground all day',
            ],
            correctAnswer: 2,
            explanation: 'Calm wind and a shallow mixing layer shrink the volume of air available to dilute the same emissions. Fronts, rain and strong surface heating all increase mixing or remove pollutants.',
          },
          {
            question: 'On a hot, sunny afternoon, a monitor shows carbon monoxide falling while ozone rises. Which statement explains both trends?',
            options: [
              'Deeper mixing dilutes CO, and sunlight drives ozone formation',
              'Afternoon traffic shifts from gasoline to diesel fuel in most cities',
              'Carbon monoxide reacts directly with sunlight to become ozone gas',
              'Ozone is emitted mostly by power plants that run in the afternoon',
            ],
            correctAnswer: 0,
            explanation: 'Sun-warmed ground deepens the mixing layer, diluting directly emitted CO, while the same sunlight drives the reactions that make ozone from nitrogen oxides and VOCs. Ozone is secondary and is not emitted by power plants.',
          },
          {
            question: 'After a day of steady rain, fine particulate levels drop sharply. Where did most of the particles go?',
            options: [
              'Sunlight broke them down into carbon dioxide and water vapor',
              'Raindrops carried them to the ground as wet deposition',
              'Rising air lifted them above the clouds into the stratosphere',
              'Ozone reacted with them to form harmless oxygen and nitrogen',
            ],
            correctAnswer: 1,
            explanation: 'Raindrops capture particles and dissolve soluble gases, carrying them down to soils and water. The pollution is moved, not destroyed, which is how sulfate and nitrate reach lakes as acid deposition.',
          },
        ],
      },
    },
    {
      id: 'apeap3-seasons',
      type: 'text' as const,
      content: `## Seasons and Landforms

### Two pollutants, two seasons (illustrative data for a mid-latitude city)

| Month | Ozone, monthly mean of daily peaks (ppb) | PM2.5, monthly mean (µg/m³) |
|---|---|---|
| January | 32 | 18 |
| April | 48 | 10 |
| July | 68 | 9 |
| October | 40 | 12 |

Ozone peaks in **summer**, when sunlight and heat drive photochemistry. Fine particulates peak in **winter**, when long nights produce frequent ground-level inversions and homes burn more fuel for heat.

### Landforms that trap air

| Setting | What happens | Examples |
|---|---|---|
| Valleys and basins | Cold air drains down slopes and pools; ridges block wind | Salt Lake City, Mexico City, Santiago |
| Coastal cities | A daytime sea breeze pushes polluted air inland; at night a land breeze can carry it back out over the water, and the next day's sea breeze returns it | Los Angeles, Houston |
| Large-lake shores | Lake breezes trap ozone in a narrow band along the shoreline | Cities on Lake Michigan |`,
    },
    {
      id: 'apeap3-transport',
      type: 'text' as const,
      content: `## Pollution That Travels

Some pollutants stay in the air for days to weeks, long enough to cross states, countries and oceans.

| Pollutant | Typical journey |
|---|---|
| $SO_{2}$ and sulfate from tall stacks | Hundreds of kilometers downwind before falling as acid deposition |
| Wildfire smoke | In June 2023, smoke from fires in Quebec pushed New York City's Air Quality Index into the hazardous range, above 300, more than 500 km from the fires |
| Desert dust | Saharan dust crosses the Atlantic to the Caribbean and Florida; Asian dust reaches western North America |
| Mercury | Emitted from coal burning, travels globally, then deposits and enters aquatic food chains |

Long-range transport is why air quality is a **regional and international** problem: a state can meet every local limit and still violate a standard because of upwind emissions.

## Forecasting Bad Air Days

Agencies combine weather forecasts with emission data to predict the **Air Quality Index (AQI)** for the next day. The AQI turns each pollutant's concentration into a number from 0 to 500, and the day's AQI is the **highest** of the individual pollutant values.

| AQI | Category |
|---|---|
| 0–50 | Good |
| 51–100 | Moderate |
| 101–150 | Unhealthy for sensitive groups |
| 151–200 | Unhealthy |
| 201–300 | Very unhealthy |
| 301 and above | Hazardous |

On a forecast bad-air day, cities issue alerts so sensitive people stay indoors, and some ask residents to drive less, refuel after dark and postpone mowing to cut ozone precursors.`,
    },
    {
      id: 'apeap3-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Monitors on one day read an ozone AQI of 128, a PM2.5 AQI of 64 and a CO AQI of 12. What AQI does the agency report for the day?',
            options: [
              'Report 68, the average of the three',
              'Report 204, the sum of all three',
              'Report 128, the highest single value',
              'Report 64, the median of the three values',
            ],
            correctAnswer: 2,
            explanation: 'The reported AQI is the highest individual value, so the ozone reading of 128 sets the day in the "unhealthy for sensitive groups" range. Averaging or adding would hide or exaggerate the worst pollutant.',
          },
          {
            question: 'A state with no large smokestacks fails the ozone standard on summer days when winds blow from a neighboring state. Which response best fits the cause?',
            options: [
              'Adding taller stacks to the few factories inside the state',
              'Liming the state\'s lakes to offset the extra acid deposition',
              'Regional limits on nitrogen oxides and VOCs in upwind states',
              'Lowering the state\'s speed limits only on rainy winter days',
            ],
            correctAnswer: 2,
            explanation: 'The ozone forms from precursors carried in from upwind, so regional cuts in nitrogen oxides and VOCs address the cause. Taller stacks export pollution, liming treats a different problem, and rainy winter days are not ozone days.',
          },
          {
            question: 'Why does a mountain basin such as Salt Lake City suffer its worst particulate episodes in winter rather than summer?',
            options: [
              'Snow cover releases particulates as it melts during warm spells',
              'Long nights over snow build inversions that hold cold air for days',
              'Summer sunlight turns particulates into harmless gases each day',
              'Winter winds are stronger in basins and push dust into the city',
            ],
            correctAnswer: 1,
            explanation: 'Long nights and snow-covered ground chill the air at the surface, so cold air pools in the basin under a warm layer for days, trapping particulates. Stronger winds would dilute pollution, not concentrate it.',
          },
        ],
      },
    },
    {
      id: 'apeap3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Idea | Key fact |
|---|---|
| Box model | $C = E \\div (u \\times W \\times H)$: concentration falls with more wind and a deeper mixing layer |
| Ventilation | $u \\times H$; halving both quadruples the concentration |
| Cleaning weather | Wind, fronts, rain (washout), deep afternoon mixing |
| Trapping weather | Calm high pressure, inversions, fog; heat and sun build ozone |
| Seasons | Ozone peaks in summer; PM2.5 often peaks in winter |
| Landforms | Basins, valleys, sea and lake breezes trap or recirculate air |
| Long-range transport | Sulfate, wildfire smoke, dust and mercury cross borders |
| AQI | 0–500; the day's value is the highest single-pollutant value |

**Next:** Part 4 follows sulfur and nitrogen to the ground as acid deposition and asks why some regions recover so slowly.`,
    },
  ],
},

// ───────────────────────── PART 4 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap4-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 4 of 7 — Acid Deposition: Long-Term Records and Slow Recovery**

---

| Section |
|---------|
| 📖 How Acid Rain Was Discovered and Tracked |
| Reading a Deposition Record |
| Why Some Watersheds Cannot Neutralize Acid |
| Soils Remember: The Recovery Lag |
| Acid Pulses and the Nitrogen Shift |

> 🔑 **Key Concept:** Emissions of sulfur dioxide in the United States have fallen by more than 90 percent since 1990, and the rain is far less acidic. Yet many lakes, streams and forests are still recovering. Long-term records show why: acid deposition drained nutrients from soils that take decades to rebuild (CED 7.7). The pH scale, the effects table, liming and the control devices are in Atmospheric Pollution, Part 4.`,
    },
    {
      id: 'apeap4-discovery',
      type: 'text' as const,
      content: `## 📖 How Acid Rain Was Discovered and Tracked

| When | What happened |
|---|---|
| 1850s–1870s | The British chemist Robert Angus Smith measured acidic rain around industrial Manchester and coined the term "acid rain" |
| 1960s | Swedish scientists linked acidifying lakes and dying fish in Scandinavia to emissions from Britain and central Europe |
| 1963 onward | Scientists at the **Hubbard Brook Experimental Forest** in New Hampshire began collecting and analyzing every rain and snow sample, a record that continues today |
| Early 1970s | Hubbard Brook researchers reported that rain in the northeastern United States was strongly acidic, often near pH 4 |
| 1978 onward | The **National Atmospheric Deposition Program (NADP)** set up a nationwide network that measures precipitation chemistry weekly at hundreds of sites |
| 1990 | The Clean Air Act Amendments created the Acid Rain Program to cap power-plant $SO_{2}$ |

Long, consistent records like these are what let scientists separate a real trend from year-to-year noise, and test whether a policy worked.

> 🔑 **AP Connection:** FRQ 1 asks you to **design an investigation**. A deposition network is a model: fixed sites, the same collection method every week, the same lab tests, and a long time series, so that the only thing changing is the variable of interest.`,
    },
    {
      id: 'apeap4-record',
      type: 'text' as const,
      content: `## Reading a Deposition Record

### Wet deposition at a northeastern forest site (illustrative data in the pattern of long-term records)

| Year | Sulfate deposition (kg/ha/yr) | Nitrate deposition (kg/ha/yr) | Mean precipitation pH |
|---|---|---|---|
| 1985 | 28 | 18 | 4.2 |
| 1995 | 22 | 17 | 4.4 |
| 2005 | 15 | 13 | 4.6 |
| 2015 | 7 | 8 | 5.0 |
| 2020 | 5 | 6 | 5.2 |

### Worked Example 1: Percent Change in Sulfate

$$\\frac{5 - 28}{28} \\times 100 \\approx -82\\%$$

Sulfate deposition fell by about **82 percent** from 1985 to 2020.

### Worked Example 2: How Much Less Acidic?

From pH 4.2 to pH 5.2 is a change of 1.0 unit. Because pH is logarithmic:

$$10^{5.2 - 4.2} = 10^{1} = 10$$

Rain in 2020 had **one-tenth** the hydrogen ion concentration of rain in 1985. It is still more acidic than unpolluted rain (about pH 5.6), so recovery is not complete.

### Worked Example 3: The Nitrogen Shift

Nitrate's share of the two acid-forming ions (by mass) changed from

$$\\frac{18}{28 + 18} \\times 100 \\approx 39\\%\\ \\text{in 1985} \\quad\\text{to}\\quad \\frac{6}{5 + 6} \\times 100 \\approx 55\\%\\ \\text{in 2020}$$

Sulfate fell faster than nitrate, so nitrogen now makes up the larger share of what falls.`,
    },
    {
      id: 'apeap4-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) Sulfate deposition at a site fell from 30 kg/ha/yr to 9 kg/ha/yr. What is the percent decrease?

2) Precipitation pH at the same site rose from 4.3 to 4.8. By what factor did the hydrogen ion concentration fall? (Round to the nearest whole number.)

3) In one year a site received 8 kg/ha of sulfate and 12 kg/ha of nitrate. What percent of the total was nitrate?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '3', '60'],
        hint1: '(30 − 9) ÷ 30 × 100.',
        hint2: 'The change is 0.5 pH units, so the factor is $10^{0.5}$.',
        hint3: 'Nitrate ÷ (sulfate + nitrate) × 100.',
        explanation: '1) 21 ÷ 30 × 100 = 70 percent decrease. 2) 10 to the power 0.5 is about 3.2, so the concentration fell about 3-fold. 3) 12 ÷ 20 × 100 = 60 percent nitrate.',
      },
    },
    {
      id: 'apeap4-q-record',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the illustrative record, pH rose from 4.2 to 5.2. Which statement about the change is correct?',
            options: [
              'Acidity fell by about 24 percent, the same as the change in pH',
              'The hydrogen ion concentration fell to one-tenth of its 1985 value',
              'The rain is now neutral, since its pH is above the natural 5.0',
              'The rain became 1.2 times less acidic, the ratio of the two values',
            ],
            correctAnswer: 1,
            explanation: 'Each pH unit is a factor of 10 in hydrogen ion concentration, so a 1.0-unit rise means one-tenth the concentration. Dividing pH values ignores the logarithm, and pH 5.2 is still below unpolluted rain at about 5.6.',
          },
          {
            question: 'Why do long-term monitoring networks collect samples at the same sites with the same methods for decades?',
            options: [
              'So a real trend can be told apart from year-to-year variation',
              'Because changing a method is forbidden under the Clean Air Act',
              'So each site can be compared only with sites in other nations',
              'Because rainfall chemistry does not vary from one year to the next',
            ],
            correctAnswer: 0,
            explanation: 'Keeping sites and methods constant means a change in the data reflects a change in the environment, not in how it was measured, and a long series reveals trends hidden by yearly noise.',
          },
        ],
      },
    },
    {
      id: 'apeap4-anc',
      type: 'text' as const,
      content: `## Why Some Watersheds Cannot Neutralize Acid

A lake's ability to resist acid is measured as its **acid-neutralizing capacity (ANC)**: the amount of dissolved bicarbonate and carbonate available to react with incoming acid. ANC comes from **weathering** of rock and soil in the watershed.

| Watershed feature | ANC | Result |
|---|---|---|
| Limestone bedrock, deep soils | High | Acid is neutralized before it reaches the lake |
| Granite or other slow-weathering rock, thin glacial soils, steep slopes | Low | Little contact time and few carbonate minerals; lakes acidify |
| High elevation | Usually low | Thin soils, more precipitation, and frequent contact with acidic cloud water |

That is why the **Adirondack Mountains** of New York and parts of New England, Ontario and Scandinavia were hit hardest, even though they were far from the emission sources.

## Soils Remember: The Recovery Lag

Acid deposition does slow damage that outlasts the emissions:

1. Acid moving through soil swaps hydrogen ions for **calcium and magnesium** held on soil particles, and those nutrients wash away.
2. Once the stored calcium is gone, acid releases **aluminum** from soil minerals, which damages tree roots and, in streams, fish gills.
3. Calcium is replenished only by slow rock weathering and small inputs from dust, so the soil's reserve takes **decades** to rebuild.

A field test showed the cause and effect. In **1999**, researchers spread a calcium mineral (wollastonite) over an entire small watershed at Hubbard Brook to replace the calcium lost to acid rain. In the years that followed, sugar maples in the treated watershed were healthier and regenerated better than in an untreated reference watershed.

Recovery runs in order: **water chemistry first, then sensitive invertebrates, then fish.** Some Adirondack lakes improved within a decade of the 1990 cuts; others with depleted soils remain too acidic for brook trout.`,
    },
    {
      id: 'apeap4-dd-recovery',
      type: 'dropdown-select' as const,
      content: `**Predict the Recovery** 🔽

For each watershed, choose the best prediction or explanation.`,
      exercise: {
        dropdowns: [
          { label: 'A lake on thick limestone soils receives acid rain for decades:', options: ['Stays near neutral', 'Acidifies quickly', 'Gains calcium from the rain', 'Loses all its bicarbonate'] },
          { label: 'A granite-basin lake after sulfate deposition falls:', options: ['Recovers within a year', 'Recovers slowly over decades', 'Never changes at all', 'Becomes alkaline at once'] },
          { label: 'The first thing to improve as deposition falls:', options: ['Fish populations', 'Old-growth tree growth', 'Water chemistry', 'Soil calcium stores'] },
          { label: 'Why soils in acid-hit forests recover so slowly:', options: ['Calcium returns only by slow weathering', 'Aluminum keeps adding acid to rain', 'Snow blocks all new deposition', 'Trees stop taking up calcium'] },
        ],
        correctAnswers: ['Stays near neutral', 'Recovers slowly over decades', 'Water chemistry', 'Calcium returns only by slow weathering'],
        hint1: 'Carbonate rock supplies bicarbonate that neutralizes acid.',
        hint2: 'Living things respond only after the chemistry they depend on improves.',
        hint3: 'Lost calcium is rebuilt mainly from rock weathering, which is slow.',
        explanation: 'Limestone watersheds have high acid-neutralizing capacity and stay near neutral. Low-ANC granite lakes recover slowly, water chemistry improves before organisms do, and soil calcium returns only by slow weathering.',
      },
    },
    {
      id: 'apeap4-pulses',
      type: 'text' as const,
      content: `## Acid Pulses and the Nitrogen Shift

### Spring snowmelt

Acids that fall as snow are stored in the snowpack all winter. The first meltwater in spring carries a large share of those acids at once, so streams can drop sharply in pH for days or weeks. This **episodic acidification** often coincides with the time fish eggs hatch and young fish are most sensitive, so a lake that looks acceptable on average can still lose its young fish each spring.

### Nitrogen now matters more

$SO_{2}$ emissions fell faster than $NO_{x}$, and **ammonia** from fertilizer and livestock is largely unregulated. Deposited ammonium is converted to nitric acid by soil bacteria, so it acidifies too. Nitrogen deposition also acts as a **fertilizer**: it shifts plant communities toward species that thrive on nitrogen and adds to the nutrient load that drives eutrophication in coastal waters such as the Chesapeake Bay. Further recovery from acid deposition now depends heavily on cutting nitrogen, from vehicles and power plants **and** from farms.`,
    },
    {
      id: 'apeap4-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two lakes receive the same acid deposition. Lake 1 sits on granite with thin soils; Lake 2 sits on limestone. Which prediction is best supported?',
            options: [
              'Lake 2 will acidify faster, since limestone dissolves into acid',
              'Both will acidify at the same rate, given equal deposition',
              'Lake 1 will acidify more, since it has little buffering',
              'Lake 1 will stay neutral because granite releases bicarbonate',
            ],
            correctAnswer: 2,
            explanation: 'Limestone weathers to bicarbonate that neutralizes acid, so the limestone lake resists change, while the granite lake has little acid-neutralizing capacity and acidifies. Equal deposition does not mean equal effect.',
          },
          {
            question: 'A stream\'s average pH is 6.2, yet surveys find almost no young trout each spring. What best explains this?',
            options: [
              'Trout lay their eggs only in streams with a pH near 4.0',
              'Snowmelt releases a pulse of stored acid at hatching time',
              'Summer algae blooms use up the stream\'s dissolved calcium',
              'Spring rain is always neutral and dilutes the trout\'s food',
            ],
            correctAnswer: 1,
            explanation: 'Acids stored in the snowpack wash out in the first meltwater, causing a short, sharp pH drop that coincides with the most sensitive life stages. An average value hides the episode.',
          },
          {
            question: 'Sulfate deposition in a region has fallen by 80 percent, but streams are still acidic. Which next step would most help recovery?',
            options: [
              'Building taller stacks at the remaining coal plants',
              'Cutting nitrogen oxides and farm ammonia emissions',
              'Replacing the remaining scrubbers with precipitators',
              'Removing the remaining limestone from the stream beds',
            ],
            correctAnswer: 1,
            explanation: 'Nitrate and ammonium now make up a growing share of acid deposition, so cutting nitrogen emissions addresses what is still falling. Taller stacks spread pollution farther, precipitators do not remove sulfur dioxide, and limestone buffers acid.',
          },
        ],
      },
    },
    {
      id: 'apeap4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Idea | Key fact |
|---|---|
| Long-term records | Hubbard Brook (since 1963) and the NADP network show the trend and test policy |
| Trend | Sulfate deposition and rain acidity fell sharply after the 1990 Clean Air Act Amendments |
| Acid-neutralizing capacity | Bicarbonate from weathering; high on limestone, low on granite and thin soils |
| Recovery lag | Leached calcium and magnesium return only by slow weathering; aluminum harms roots and gills |
| Recovery order | Water chemistry → invertebrates → fish |
| Snowmelt pulses | Episodic acidification hits at fish hatching time |
| Nitrogen shift | Nitrate and ammonium are now a larger share; they acidify and over-fertilize |
| Calculations | Percent change; $10^{\\Delta pH}$; share = part ÷ total × 100 |

**Next:** Part 5 compares the tools for cutting air pollution and noise: laws, markets, technology and prevention.`,
    },
  ],
},

// ───────────────────────── PART 5 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap5-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 5 of 7 — Reducing Air Pollution and Noise: Tools and Trade-offs**

---

| Section |
|---------|
| 📖 The Policy Toolbox |
| The Clean Air Act Over Time |
| Prevention Versus End-of-Pipe |
| Comparing Options: Cost per Tonne |
| Reducing Noise |

> 🔑 **Key Concept:** The CED groups ways to reduce air pollution into **regulatory practices, conservation practices and alternative fuels**, plus control technology. Every option has costs and side effects. This part compares the options the way an agency or a power company must, and applies the same thinking to noise (CED 7.6 and 7.8). How each control device works, removal-efficiency math and the mechanics of $SO_{2}$ allowance trading are in Atmospheric Pollution, Part 4.`,
    },
    {
      id: 'apeap5-toolbox',
      type: 'text' as const,
      content: `## 📖 The Policy Toolbox

| Approach | How it works | Air-quality example | Strength | Weakness |
|---|---|---|---|---|
| **Command and control** | The law sets a limit or requires a technology | National Ambient Air Quality Standards; required catalytic converters | Certain, enforceable results | Same rule for every firm, even where cuts are costly |
| **Market-based** | Puts a price on pollution and lets firms choose how to cut | $SO_{2}$ cap-and-trade (1990); emission fees | Cuts happen where they are cheapest | Local hot spots can persist near plants that buy allowances |
| **Incentives** | Pays or rewards cleaner choices | Tax credits for electric vehicles; programs that replace old diesel engines | Speeds adoption of new technology | Costs public money; benefits may go to people who would have switched anyway |
| **Information** | Makes pollution data public | Air Quality Index alerts; Toxics Release Inventory | Cheap; pressures polluters and protects the public | Does not itself require any cut |
| **Conservation** | Reduces the activity that pollutes | Public transit, carpooling, efficient buildings | Cuts many pollutants at once | Depends on behavior and infrastructure |

> 🔑 **AP Connection:** When an FRQ asks you to **propose a solution**, name a specific practice (for example, "require vapor recovery nozzles at gas pumps") and **explain** how it reduces the pollutant. "Pass a law" or "use less" earns nothing unless you say what the law or practice does.`,
    },
    {
      id: 'apeap5-caa',
      type: 'text' as const,
      content: `## The Clean Air Act Over Time

| Year | Law | What it added |
|---|---|---|
| 1963 | Clean Air Act | Federal research and support for state programs |
| 1970 | Clean Air Act (major rewrite) | National Ambient Air Quality Standards for criteria pollutants; national limits on new vehicles and new industrial sources; enforcement by the newly created EPA |
| 1977 | Amendments | Rules for areas that fail a standard (**nonattainment areas**) and protection for clean areas such as national parks |
| 1990 | Amendments | $SO_{2}$ cap-and-trade (Acid Rain Program); controls on 189 hazardous air pollutants (air toxics); cleaner gasoline; phase-out of ozone-depleting chemicals |

Each state writes a **State Implementation Plan** describing how it will meet the national standards. An area that fails a standard is labeled **nonattainment** and must adopt tighter measures, such as vehicle inspection programs or stricter permits for new factories.

### Was it worth it?

The EPA's 2011 study of the 1990 amendments estimated that by 2020 they would deliver about **\\$2 trillion** a year in benefits, mostly from avoided premature deaths, against about **\\$65 billion** a year in costs.

$$\\frac{\\$2{,}000\\ \\text{billion}}{\\$65\\ \\text{billion}} \\approx 31$$

Benefits were estimated at roughly **30 times** the costs.`,
    },
    {
      id: 'apeap5-q-policy',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A city must lower its ozone. Which measure is a market-based approach rather than command and control?',
            options: [
              'A fee charged for each tonne of VOCs a refinery releases',
              'A rule that every gas pump must have a vapor recovery nozzle',
              'A national limit on ozone in outdoor air averaged over 8 hours',
              'A requirement that new cars carry working catalytic converters',
            ],
            correctAnswer: 0,
            explanation: 'An emission fee puts a price on each tonne and lets the refinery decide how much to cut. Required equipment and fixed limits are command-and-control rules.',
          },
          {
            question: 'Residents near one coal plant complain that their air did not improve under a cap-and-trade program, even though national emissions fell. What weakness of the program does this illustrate?',
            options: [
              'Caps allow total national emissions to rise over time',
              'A plant that buys allowances can keep polluting locally',
              'Trading only works for pollutants that are not toxic',
              'Market programs forbid plants from installing scrubbers',
            ],
            correctAnswer: 1,
            explanation: 'Cap-and-trade fixes the total, not the location of emissions, so a plant that buys allowances can remain a local hot spot. The cap itself keeps national totals from rising.',
          },
          {
            question: 'What happens when an area is designated nonattainment for a criteria pollutant?',
            options: [
              'The EPA closes the largest polluting factories in the area',
              'The area must adopt stronger measures to meet the standard',
              'The standard is relaxed until the area can afford to meet it',
              'Residents are moved to an area that meets the standard',
            ],
            correctAnswer: 1,
            explanation: 'Nonattainment triggers tighter requirements in the state plan, such as vehicle inspections or stricter permits for new sources. The standard is not relaxed, and closures or relocations are not automatic.',
          },
        ],
      },
    },
    {
      id: 'apeap5-prevention',
      type: 'text' as const,
      content: `## Prevention Versus End-of-Pipe

**End-of-pipe** controls capture pollution after it forms. **Prevention** stops it from forming. Both are needed, and each has side effects.

| Option | What it cuts | Side effects and trade-offs |
|---|---|---|
| Wet limestone scrubber | 90% or more of $SO_{2}$ | Uses energy and water; makes tonnes of sludge or gypsum (some is sold for wallboard); the reaction releases $CO_{2}$: $CaCO_{3} + SO_{2} \\rightarrow CaSO_{3} + CO_{2}$ |
| Switching to **low-sulfur coal** | $SO_{2}$ | Coal hauled long distances; no cut in $CO_{2}$ |
| Fluidized bed combustion | $SO_{2}$ and $NO_{x}$ | Needs a new or rebuilt boiler |
| Switching coal to **natural gas** | Nearly all $SO_{2}$, most particulates and mercury, much of the $NO_{x}$, and about half the $CO_{2}$ per kWh | Methane leaks from wells and pipelines offset part of the climate gain |
| Wind or solar power | All combustion pollutants | Intermittent; needs storage or backup |
| Taller smokestacks | Local ground-level concentrations only | **Exports** pollution downwind, worsening regional acid deposition |
| Conservation (efficiency, transit) | Everything tied to the avoided fuel | Depends on behavior and investment |

Many U.S. power plants met the first phase of the 1990 $SO_{2}$ cap by switching to low-sulfur coal rather than by building scrubbers, because it was cheaper. Later, retiring coal plants in favor of natural gas and renewables cut emissions further.`,
    },
    {
      id: 'apeap5-cost',
      type: 'text' as const,
      content: `## Comparing Options: Cost per Tonne

Agencies and companies compare options by **cost-effectiveness**:

$$\\text{Cost per tonne removed} = \\frac{\\text{annual cost}}{\\text{tonnes removed per year}}$$

### Worked Example: Three Ways to Cut $SO_{2}$ (illustrative data)

A coal plant emits **25,000 t** of $SO_{2}$ a year.

| Option | Annual cost | Emissions after |
|---|---|---|
| A. Wet scrubber | \\$36 million | 2,500 t |
| B. Low-sulfur coal | \\$12 million | 13,000 t |
| C. Convert to natural gas | \\$60 million | 50 t |

**Tonnes removed:** A: $25{,}000 - 2{,}500 = 22{,}500$; B: $25{,}000 - 13{,}000 = 12{,}000$; C: $25{,}000 - 50 = 24{,}950$.

**Cost per tonne:**

$$\\text{A: } \\frac{\\$36{,}000{,}000}{22{,}500} = \\$1{,}600 \\qquad \\text{B: } \\frac{\\$12{,}000{,}000}{12{,}000} = \\$1{,}000 \\qquad \\text{C: } \\frac{\\$60{,}000{,}000}{24{,}950} \\approx \\$2{,}405$$

Option B is cheapest per tonne but leaves the most $SO_{2}$. Option C costs the most per tonne of $SO_{2}$, but it also cuts particulates, mercury, $NO_{x}$ and about half the $CO_{2}$, benefits this single-pollutant calculation leaves out. The "best" choice depends on how much must be removed and which other pollutants count.`,
    },
    {
      id: 'apeap5-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A plant emits 40,000 t of $SO_{2}$ a year. A scrubber costing \\$45 million a year cuts emissions to 4,000 t. What is the cost per tonne removed, in dollars?

2) A fuel switch costing \\$9 million a year cuts the same plant's emissions from 40,000 t to 22,000 t. What is its cost per tonne removed, in dollars?

3) A highway's traffic noise is 78 dB at a nearby school. A sound wall lowers it by 10 dB. What fraction of the original sound intensity reaches the school? (enter a decimal)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1250', '500', '0.1'],
        hint1: 'Tonnes removed = 40,000 − 4,000. Divide the cost by that.',
        hint2: 'Tonnes removed = 40,000 − 22,000.',
        hint3: 'Each 10 dB is a factor of 10 in intensity.',
        explanation: '1) \\$45,000,000 ÷ 36,000 t = \\$1,250 per tonne. 2) \\$9,000,000 ÷ 18,000 t = \\$500 per tonne. 3) A 10 dB drop cuts intensity by a factor of 10, so 0.1 of the original reaches the school.',
      },
    },
    {
      id: 'apeap5-noise',
      type: 'text' as const,
      content: `## Reducing Noise

**Noise pollution** is sound loud enough to cause physiological stress or hearing loss. Its sources are **transportation, construction, and domestic and industrial activity**, and in ecosystems it causes stress, masks the sounds animals use to communicate or hunt, damages hearing and can change migratory routes. (The decibel scale and these effects are introduced in Atmospheric Pollution, Part 3.) In the United States, the **Noise Control Act of 1972** gave the EPA authority to set noise limits for products such as trucks and equipment.

### Decibels add on a log scale

Two equal sources do **not** double the decibel reading. Doubling the intensity adds about **3 dB**:

$$10 \\log_{10}(2) \\approx 3\\ \\text{dB}$$

So two identical 80 dB machines together give about **83 dB**, not 160 dB. The other direction matters for solutions: cutting traffic in half lowers the level by only about 3 dB, while a well-built wall that blocks the line of sight can cut 5 to 10 dB or more.

| Strategy | Example | Typical effect |
|---|---|---|
| Quieter sources | Low-noise tires and road surfaces, quieter aircraft engines, electric vehicles at low speed | Cuts noise where it starts |
| Barriers | Highway sound walls, earth berms | Blocks the path; 5–10 dB or more |
| Distance and zoning | Buffers between airports or highways and homes, schools, wildlife areas | Keeps people and animals away from the loudest areas |
| Timing | Construction hours, night flight limits, seasonal closures during breeding | Protects sleep and sensitive life stages |
| Ships | Slower speeds in key whale habitat (for example, voluntary slowdowns in waters off Vancouver, Canada) | Less underwater noise masking whale calls |`,
    },
    {
      id: 'apeap5-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A utility installs a wet limestone scrubber at its coal plant. Which outcome is a trade-off of this choice?',
            options: [
              'Its sulfur dioxide output rises as the slurry ages',
              'It produces solid waste and releases some carbon dioxide',
              'It increases the plant\'s emissions of fine particulates',
              'It converts the captured sulfur into ground-level ozone',
            ],
            correctAnswer: 1,
            explanation: 'Limestone scrubbing turns sulfur dioxide into calcium sulfite or gypsum solids, and the reaction releases carbon dioxide. It lowers sulfur dioxide and does not create particulates or ozone.',
          },
          {
            question: 'A factory adds a second machine identical to one already running at 85 dB. About what level will a worker hear?',
            options: ['170 dB', '88 dB', '95 dB', '85 dB'],
            correctAnswer: 1,
            explanation: 'Doubling the intensity adds about 3 dB on the logarithmic scale, giving about 88 dB. Adding the two readings treats the scale as linear, adding 10 dB would mean ten times the intensity, and the level does rise when a second source starts.',
          },
          {
            question: 'In the three-option cost table, which statement best explains why an agency might choose the natural gas conversion despite its higher cost per tonne of sulfur dioxide?',
            options: [
              'It removes the fewest tonnes of sulfur dioxide of the three',
              'It cuts other pollutants besides sulfur dioxide as well',
              'It is the only option that does not need a federal permit',
              'It costs the least per year of the three available options',
            ],
            correctAnswer: 1,
            explanation: 'The per-tonne figure counts only sulfur dioxide; switching from coal to gas also cuts several other pollutants and about half the carbon dioxide. It actually costs the most per year and removes the most sulfur dioxide.',
          },
        ],
      },
    },
    {
      id: 'apeap5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Idea | Key fact |
|---|---|
| CED categories | Regulatory practices, conservation practices, alternative fuels, plus control technology |
| Policy tools | Command and control, market-based, incentives, information, conservation |
| Clean Air Act | 1970 standards and EPA enforcement; 1977 nonattainment rules; 1990 cap-and-trade, air toxics, cleaner fuels |
| Trade-offs | Scrubbers make sludge and $CO_{2}$; tall stacks export pollution; gas still leaks methane |
| Cost-effectiveness | Annual cost ÷ tonnes removed; ignores co-benefits for other pollutants |
| Noise | Sources: transportation, construction, domestic and industrial activity |
| Decibel math | Doubling intensity adds about 3 dB; each 10 dB is a factor of 10 |
| Noise fixes | Quieter sources, barriers, distance and zoning, timing, slower ships |

**Next:** Part 6 puts these ideas to work on AP-style free-response questions.`,
    },
  ],
},

// ───────────────────────── PART 6 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap6-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 FRQ 1 Practice: Particulates Near a Highway |
| FRQ 2 Practice: Twenty Years of Bad Air Days |
| FRQ 3 Practice: Electrifying a Bus Fleet |

> 🔑 **Key Concept:** The APES exam has three free-response questions: **Design an investigation**, **Analyze and interpret quantitative data**, and **Analyze an environmental problem doing calculations**. This part works one of each on air pollution, with model answers. Different scenarios (a basin city's ozone and a coal plant upwind of lakes) are worked in Atmospheric Pollution, Part 6.`,
    },
    {
      id: 'apeap6-frq1',
      type: 'text' as const,
      content: `## 📋 FRQ 1 Practice: Particulates Near a Highway

A school district plans a new elementary school beside an interstate highway. Parents worry about fine particulate matter (PM2.5) from diesel trucks. A science class will use four identical portable PM2.5 monitors to study the problem.

**(a)** Write a testable hypothesis.
**(b)** Identify the independent variable and the dependent variable.
**(c)** Describe a method for collecting the data, including two variables that must be held constant.
**(d)** Explain one reason the class should collect data on many different days.
**(e)** Propose one design feature for the school that would reduce students' exposure, and explain how it works.

### Model Answers

**(a)** PM2.5 concentration will decrease as distance from the highway increases.

**(b)** Independent variable: distance from the edge of the highway. Dependent variable: PM2.5 concentration (µg/m³).

**(c)** Place monitors at 25 m, 100 m, 200 m and 400 m from the highway along a line on the **downwind** side, all at the same height (about 1.5 m, a child's breathing height). Record hourly averages from 7 am to 4 pm on school days. Hold constant: the **monitor model and calibration**, the **sampling height**, and the **time of day**. Record wind direction and discard or separate days when the wind blows from the school toward the road.

**(d)** Wind speed and direction, rain and inversions change PM2.5 from day to day. Repeating the measurements over many days averages out weather and shows whether the pattern with distance is consistent.

**(e)** Place the classrooms and playground on the side of the site **farthest** from the highway, with a vegetation barrier or wall between, and use **high-efficiency (MERV 13 or HEPA) filters** on the air intake. Distance and barriers lower outdoor exposure; filtration removes particles from incoming air.

> 🔑 **AP Connection:** Design questions reward specific, measurable choices: numbers for distances, units for the measurement, a named control. "Measure pollution at different places" earns little.`,
    },
    {
      id: 'apeap6-q-design',
      type: 'multiple-choice' as const,
      content: `**Check the Design** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why should the four monitors in the highway study be placed on the downwind side of the road?',
            options: [
              'So the measurements capture the particles the traffic emits',
              'So the monitors are shaded and stay at a constant temperature',
              'So the wind can blow road dust away from the instruments',
              'So the monitors avoid detecting particles from diesel trucks',
            ],
            correctAnswer: 0,
            explanation: 'Emissions are carried downwind, so monitors on that side measure how the traffic\'s particles change with distance. Upwind monitors would mostly record background air.',
          },
          {
            question: 'The class records 38 µg/m³ at 25 m and 12 µg/m³ at 400 m. A classmate claims the highway causes the difference. What additional data would most strengthen that claim?',
            options: [
              'Readings from a single afternoon with a strong wind',
              'Readings from one more monitor placed at 1,000 m',
              'Readings on days when the wind blew from the other side',
              'Readings of carbon dioxide at each of the four sites',
            ],
            correctAnswer: 2,
            explanation: 'If the gradient disappears or reverses when the wind blows the other way, the road is the likely source rather than some other feature of the sites. A single afternoon or a CO2 reading does not test the cause.',
          },
        ],
      },
    },
    {
      id: 'apeap6-frq2',
      type: 'text' as const,
      content: `## FRQ 2 Practice: Twenty Years of Bad Air Days

The table shows the number of days each year on which a western city's AQI exceeded 100, and the pollutant responsible on most of those days (illustrative data).

| Year | Days with AQI above 100 | Main pollutant on those days |
|---|---|---|
| 2000 | 48 | Ozone |
| 2005 | 40 | Ozone |
| 2010 | 29 | Ozone |
| 2015 | 18 | Ozone |
| 2020 | 31 | PM2.5 |

**(a)** Describe the trend from 2000 to 2015.
**(b)** Calculate the average rate of change in days per year from 2000 to 2015.
**(c)** Calculate the percent change from 2000 to 2015.
**(d)** Propose an explanation for the 2020 value that is consistent with the data.
**(e)** Identify one policy that could explain the trend in part (a), and explain how it works.

### Model Answers

**(a)** The number of days above AQI 100 **decreased steadily**, from 48 to 18.

**(b)**

$$\\frac{18 - 48}{2015 - 2000} = \\frac{-30}{15} = -2\\ \\text{days per year}$$

**(c)**

$$\\frac{18 - 48}{48} \\times 100 = -62.5\\%$$

**(d)** The main pollutant changed from ozone to PM2.5, which points to a new particle source such as **wildfire smoke** carried into the city, rather than a reversal in vehicle emissions.

**(e)** Stricter vehicle emission standards (catalytic converters and cleaner fuels) reduced $NO_{x}$ and VOCs, the precursors of ozone, so fewer days reached unhealthy ozone levels.`,
    },
    {
      id: 'apeap6-q-data',
      type: 'multiple-choice' as const,
      content: `**Check the Data Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student writes "the 2020 value proves vehicle standards stopped working." What is the strongest objection based on the table?',
            options: [
              'The 2020 count is still lower than the count recorded in 2000',
              'The main pollutant changed to PM2.5, pointing to a new source',
              'Ozone cannot be measured in a year with many wildfires',
              'Vehicle standards affect only carbon monoxide, not ozone',
            ],
            correctAnswer: 1,
            explanation: 'The rise came with a switch to particulates, which points to a different source such as smoke, not to a failure of the ozone controls. Lower-than-2000 is true but does not address the cause.',
          },
          {
            question: 'Which statement correctly describes the change from 2000 to 2015?',
            options: [
              'A decrease of 30 days, or about 63 percent',
              'A decrease of 30 days, or about 30 percent',
              'A decrease of 2 days, or about 2 percent',
              'A decrease of 18 days, or about 38 percent',
            ],
            correctAnswer: 0,
            explanation: 'The count fell from 48 to 18, a change of 30 days; 30 ÷ 48 × 100 is about 63 percent. Two days per year is the rate, not the total change.',
          },
        ],
      },
    },
    {
      id: 'apeap6-frq3',
      type: 'text' as const,
      content: `## FRQ 3 Practice: Electrifying a Bus Fleet

A city runs **200** diesel buses. Each travels **60,000 km** per year and emits **5 g** of $NO_{x}$ per km. The city plans to replace them with electric buses that use **1.5 kWh** per km. The power plants serving the city emit **0.1 g** of $NO_{x}$ per kWh generated.

**(a)** Calculate the total distance the fleet travels per year.
**(b)** Calculate the diesel fleet's annual $NO_{x}$ emissions in metric tonnes (1 t = 1,000,000 g).
**(c)** Calculate the electric fleet's annual $NO_{x}$ emissions (from power generation) in tonnes.
**(d)** Calculate the percent reduction in $NO_{x}$.
**(e)** Explain one reason the switch might improve air quality in the city even more than the percent suggests.

### Model Answers

**(a)** $200 \\times 60{,}000\\ \\text{km} = 12{,}000{,}000\\ \\text{km per year}$

**(b)** $12{,}000{,}000\\ \\text{km} \\times 5\\ \\text{g/km} = 60{,}000{,}000\\ \\text{g} = 60\\ \\text{t}$

**(c)** $12{,}000{,}000\\ \\text{km} \\times 1.5\\ \\text{kWh/km} = 18{,}000{,}000\\ \\text{kWh}$; $\\ 18{,}000{,}000 \\times 0.1\\ \\text{g} = 1{,}800{,}000\\ \\text{g} = 1.8\\ \\text{t}$

**(d)** $\\dfrac{60 - 1.8}{60} \\times 100 = 97\\%$

**(e)** The remaining emissions happen at power plants that may be **outside the city**, while bus exhaust is released at street level where people breathe it. Electric buses also emit no diesel particulates from tailpipes.`,
    },
    {
      id: 'apeap6-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

A town runs 50 diesel buses, each traveling 40,000 km a year and emitting 4 g of $NO_{x}$ per km.

1) What is the fleet's total distance per year, in km?

2) What are the fleet's annual $NO_{x}$ emissions, in tonnes? (1 t = 1,000,000 g)

3) Electric replacements cause 0.2 g of $NO_{x}$ per km at the power plant. What is the percent reduction?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2000000', '8', '95'],
        hint1: 'Buses × km per bus.',
        hint2: 'Total km × 4 g/km gives grams; divide by 1,000,000.',
        hint3: 'Compare 0.2 g/km with 4 g/km: (4 − 0.2) ÷ 4 × 100.',
        explanation: '1) 50 × 40,000 = 2,000,000 km. 2) 2,000,000 × 4 = 8,000,000 g = 8 t. 3) (4 − 0.2) ÷ 4 × 100 = 95 percent reduction.',
      },
    },
    {
      id: 'apeap6-tips',
      type: 'text' as const,
      content: `## Point-Earning Habits

| Habit | Why it matters |
|---|---|
| Show the setup, with units, on every line | Calculation points require shown work |
| Convert units before combining (g to t, ppm to ppb) | Most lost calculation points are unit errors |
| Answer the verb: **identify** (name it), **describe** (give details), **explain** (give the how or why) | An identification does not earn an explanation point |
| Tie solutions to the pollutant and the mechanism | "Electric buses remove tailpipe $NO_{x}$ at street level" beats "use cleaner buses" |
| Use the data you are given | Quote numbers from the table when you describe a trend |

## Part 6 Summary

| FRQ | Skill practiced here |
|---|---|
| 1. Design an investigation | Hypothesis, variables, controls, repeated trials, a specific solution |
| 2. Analyze data | Trend description, rate of change, percent change, explaining an outlier with the data |
| 3. Calculations | Multi-step unit conversions and percent reduction for a fleet change |

**Next:** Part 7 ties the topic together with a final review.`,
    },
  ],
},

// ───────────────────────── PART 7 ─────────────────────────
{
  topicSlug: 'apes-air-pollution',
  sections: [
    {
      id: 'apeap7-intro',
      type: 'text' as const,
      content: `# 🏭 Air Pollution & Smog

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 From Source to Solution |
| Misconceptions to Avoid |
| Calculation Toolkit |
| Final Check |

> 🔑 **Key Concept:** Every air pollution question follows one chain: **a source emits a primary pollutant → weather and chemistry move or transform it → it harms people or ecosystems → a control or policy breaks the chain.** This review walks the chain for each major pollutant and gathers the calculations from Parts 1–6.`,
    },
    {
      id: 'apeap7-chain',
      type: 'text' as const,
      content: `## 📖 From Source to Solution

| Primary pollutant and main source | What happens in the air | Main harm | Ways to break the chain |
|---|---|---|---|
| $SO_{2}$ from coal power plants and smelters | Oxidized to sulfuric acid and sulfate particles; travels hundreds of km | Industrial smog, acid deposition, haze, PM2.5 | Scrubbers, low-sulfur coal, fuel switching, cap-and-trade |
| $NO_{x}$ from vehicles and power plants | Forms ozone with VOCs in sunlight; forms nitric acid and nitrate particles | Photochemical smog, acid deposition, coastal nutrient loading | Catalytic converters, cleaner engines, transit, fuel switching |
| VOCs from fuel vapor, solvents and trees | Join $NO_{x}$ in ozone formation | Photochemical smog | Vapor recovery nozzles, low-VOC products |
| Particulates from combustion, dust and fires | Trapped by inversions; washed out by rain | Lung and heart disease, haze | Electrostatic precipitators, baghouses, burn bans, cleaner stoves |
| CO from incomplete combustion | Accumulates in still air near traffic | Reduces oxygen delivery in the blood | Catalytic converters, engine maintenance |
| Noise from traffic, construction and industry | Spreads from the source; masks natural sounds | Stress, hearing loss, disrupted animal communication and migration | Quieter sources, barriers, zoning, timing, slower ships |

### Weather and place decide the dose

The same emissions can produce clean or hazardous air depending on **wind speed, mixing height, inversions, sunlight, rain and terrain** (Part 3). Long-range transport makes sulfate, ozone, smoke and mercury **regional or international** problems.`,
    },
    {
      id: 'apeap7-q-mixed',
      type: 'multiple-choice' as const,
      content: `**Mixed Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which conditions most favor the formation of photochemical smog?',
            options: [
              'Cloudy, rainy nights with light traffic',
              'Cold, foggy mornings in coal towns',
              'Hot, sunny days with heavy traffic',
              'Dry, windy days after a cold front',
            ],
            correctAnswer: 2,
            explanation: 'Photochemical smog needs sunlight and heat acting on traffic emissions. Industrial smog forms from coal smoke in cold, damp, still air; windy days after a front clean the air.',
          },
          {
            question: 'A region cut sulfur dioxide emissions by 90 percent, but its lakes are still acidic. Which factor most likely explains the lag?',
            options: [
              'Sulfur dioxide stays in the air for decades before falling',
              'Watershed soils lost calcium that rebuilds only slowly',
              'Lakes store acid permanently in their deepest layers',
              'Scrubbers release acid directly into nearby streams',
            ],
            correctAnswer: 1,
            explanation: 'Decades of acid deposition leached calcium and magnesium from soils, and those reserves return only through slow weathering, so lake chemistry recovers slowly. Sulfur dioxide falls out within days.',
          },
          {
            question: 'Which statement about the Air Quality Index is correct?',
            options: [
              'It averages all six criteria pollutants into one number',
              'It is reported only for pollutants that are secondary',
              'It is set each day by the highest single-pollutant value',
              'It measures only carbon dioxide and ground-level ozone',
            ],
            correctAnswer: 2,
            explanation: 'Each pollutant gets its own index value and the day\'s AQI is the highest of them, so the worst pollutant is never hidden. Carbon dioxide is not part of the AQI.',
          },
          {
            question: 'A state builds 300-meter smokestacks on its coal plants. What is the most likely result?',
            options: [
              'Cleaner local air but more acid deposition downwind',
              'Both local air and air in downwind states get much cleaner',
              'Total sulfur dioxide emissions fall by about 90 percent',
              'Ozone high in the stratosphere is destroyed more quickly',
            ],
            correctAnswer: 0,
            explanation: 'Tall stacks release the same pollution higher, where winds carry it farther, so local ground-level levels fall but downwind regions receive more acid deposition. Stacks do not reduce total emissions.',
          },
        ],
      },
    },
    {
      id: 'apeap7-misconceptions',
      type: 'text' as const,
      content: `## Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "Ozone comes out of tailpipes." | Ozone is **secondary**; tailpipes emit the $NO_{x}$ and VOCs that form it |
| "Ozone is always worst downtown." | Fresh NO destroys ozone near traffic; peaks are often **downwind** |
| "Rain cleans pollution away." | Rain moves pollutants to soils and water as wet deposition |
| "Taller smokestacks reduce pollution." | They spread it farther; total emissions are unchanged |
| "Acid rain is solved." | Rain is far less acidic, but soils and some lakes are still recovering, and nitrogen now dominates |
| "Two 80 dB sources make 160 dB." | Doubling intensity adds about 3 dB: about 83 dB |
| "Cap-and-trade lets pollution rise." | The **cap** fixes the total; trading decides only where cuts happen |
| "Carbon dioxide is a criteria pollutant." | The six criteria pollutants are CO, Pb, $NO_{2}$, $O_{3}$, PM and $SO_{2}$ |`,
    },
    {
      id: 'apeap7-dd',
      type: 'dropdown-select' as const,
      content: `**Match the Solution to the Problem** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'VOC vapor escaping while cars are refueled:', options: ['Vapor recovery nozzle', 'Electrostatic precipitator', 'Wet limestone scrubber', 'Highway sound wall'] },
          { label: 'Fine soot from a coal plant\'s stack:', options: ['Catalytic converter', 'Electrostatic precipitator', 'Vapor recovery nozzle', 'Low-VOC paint'] },
          { label: 'Ship noise masking whale calls:', options: ['Taller smokestacks', 'Slower ship speeds', 'Liming the bay', 'Catalytic converters'] },
          { label: 'Hundreds of home wood stoves in a valley town:', options: ['Burn bans and certified stoves', 'A single stack permit', 'Wet limestone scrubbers', 'Vapor recovery nozzles'] },
        ],
        correctAnswers: ['Vapor recovery nozzle', 'Electrostatic precipitator', 'Slower ship speeds', 'Burn bans and certified stoves'],
        hint1: 'Gasoline fumes at the pump are captured at the nozzle.',
        hint2: 'Particulates in flue gas are charged and collected on plates.',
        hint3: 'Many small household sources need product rules and bans, not industrial devices.',
        explanation: 'Vapor recovery nozzles capture fumes at the pump; electrostatic precipitators remove stack particulates; slower ships make less underwater noise; burn bans and certified stoves address a nonpoint source of wood smoke.',
      },
    },
    {
      id: 'apeap7-toolkit',
      type: 'text' as const,
      content: `## Calculation Toolkit

| Calculation | Formula | Part |
|---|---|---|
| Percent share | part ÷ total × 100 | 1, 4 |
| Per-capita emissions | total ÷ population | 1 |
| Percent change | (new − old) ÷ old × 100 | 2, 4, 6 |
| Excess deaths | observed − baseline | 2 |
| Box model | $C = E \\div (u \\times W \\times H)$ | 3 |
| Hydrogen ion ratio | $10^{\\Delta pH}$ | 4 |
| Cost per tonne removed | annual cost ÷ tonnes removed | 5 |
| Decibels | each 10 dB = 10× intensity; doubling intensity = +3 dB | 5 |
| Fleet emissions | vehicles × distance × grams per km, then g → t | 6 |

### Worked Example: One Change, Several Numbers (illustrative data)

A city's 400 taxis each drive 50,000 km a year and emit 0.5 g of $NO_{x}$ per km.

$$400 \\times 50{,}000 \\times 0.5 = 10{,}000{,}000\\ \\text{g} = 10\\ \\text{t of } NO_{x}$$

If hybrid taxis cut emissions to 0.2 g/km:

$$\\frac{0.5 - 0.2}{0.5} \\times 100 = 60\\%\\ \\text{reduction} \\quad\\Rightarrow\\quad 10\\ \\text{t} \\times 0.40 = 4\\ \\text{t remaining}$$`,
    },
    {
      id: 'apeap7-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A city's wind speed drops from 4 m/s to 2 m/s and its mixing height drops from 800 m to 400 m, with no change in emissions. How many times higher is the pollutant concentration?

2) Rain at a site changes from pH 4.4 to pH 5.4. By what factor does the hydrogen ion concentration fall?

3) A control program costs \\$8 million a year and removes 3,200 t of $NO_{x}$. What is the cost per tonne, in dollars?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '10', '2500'],
        hint1: 'Concentration is inversely proportional to wind speed × mixing height.',
        hint2: 'A 1.0 pH-unit change is a factor of $10^{1}$.',
        hint3: 'Divide \\$8,000,000 by 3,200 t.',
        explanation: '1) 4 × 800 = 3,200 versus 2 × 400 = 800, so the concentration is 3,200 ÷ 800 = 4 times higher. 2) A rise of 1.0 pH unit is a 10-fold drop in hydrogen ions. 3) \\$8,000,000 ÷ 3,200 = \\$2,500 per tonne.',
      },
    },
    {
      id: 'apeap7-q-final',
      type: 'multiple-choice' as const,
      content: `**Final Check** ✅`,
      exercise: {
        questions: [
          {
            question: 'Which pollutant is primary when it leaves the source and helps form both acid deposition and ground-level ozone?',
            options: ['Nitrogen oxides', 'Sulfur dioxide', 'Carbon monoxide', 'Particulate lead'],
            correctAnswer: 0,
            explanation: 'Nitrogen oxides are emitted directly, react with water to make nitric acid, and react with VOCs in sunlight to make ozone. Sulfur dioxide forms acid but is not an ozone precursor.',
          },
          {
            question: 'A town\'s particulate pollution is worst on calm, clear winter nights. Which explanation best fits?',
            options: [
              'Strong sunlight drives particle-forming reactions at night',
              'Rain on winter nights releases particles from the ground',
              'Cold air pooled under warmer air traps the smoke',
              'Winter winds carry dust in from distant deserts after dark',
            ],
            correctAnswer: 2,
            explanation: 'On clear, calm nights the ground cools quickly and chills the air above it, forming a surface inversion that traps wood smoke and exhaust. There is no sunlight at night, and rain removes particles.',
          },
          {
            question: 'Which change would most reduce both photochemical smog and acid deposition in a region?',
            options: [
              'Planting more oak trees along the highways',
              'Cutting nitrogen oxides from cars and power plants',
              'Adding lime to the region\'s lakes and streams',
              'Raising the smokestacks at the region\'s plants',
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen oxides are a precursor of both ozone and nitric acid, so cutting them addresses both problems. Oak trees emit VOCs, liming treats symptoms in water only, and taller stacks spread pollution.',
          },
        ],
      },
    },
    {
      id: 'apeap7-summary',
      type: 'text' as const,
      content: `## Topic Summary

| Part | Big idea |
|---|---|
| 1 | Emission inventories; primary vs secondary formation; point, nonpoint and mobile sources |
| 2 | Industrial smog (London 1952) vs photochemical smog (Los Angeles); ozone peaks downwind |
| 3 | Box model: wind and mixing height set concentration; seasons, landforms, long-range transport, AQI |
| 4 | Acid deposition records, acid-neutralizing capacity, soil calcium loss, slow recovery, nitrogen shift |
| 5 | Policy tools, Clean Air Act history, prevention vs end-of-pipe trade-offs, cost per tonne, noise |
| 6 | FRQ practice: investigation design, data analysis, fleet calculations |
| 7 | Source → transformation → harm → solution, for every pollutant |`,
    },
  ],
},
]
