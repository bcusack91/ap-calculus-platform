export const apesBiogeochemicalCyclesPart5Data = {
  topicSlug: 'apes-biogeochemical-cycles',
  sections: [
    {
      id: 'apesbiog5-intro',
      type: 'text' as const,
      content: `
# 🔄 Biogeochemical Cycles

**Part 5 of 7 — Reading Cycle Data and Avoiding Misconceptions**

---

| Section |
|---------|
| The Keeling Curve |
| Dissolved Oxygen During Eutrophication |
| Limiting-Nutrient Experiments |
| Percent Change and the Rule of 70 |
| Common Misconceptions |

> 🔑 **Key Concept:** The AP exam rarely asks you to recite a cycle. It shows you a graph or a data table and asks what it means. This part practices reading the three data sets that appear most often with biogeochemical cycles, then fixes the misconceptions that cost students points.
      `
    },
    {
      id: 'apesbiog5-keeling',
      type: 'text' as const,
      content: `
## The Keeling Curve

Since 1958, scientists have measured atmospheric $CO_{2}$ continuously at the Mauna Loa Observatory in Hawaii. The record, called the **Keeling curve** after the scientist who started it, has two features.

### Feature 1: the long-term upward trend

Picture the graph: time on the horizontal axis from 1958 to today, $CO_{2}$ in ppm on the vertical axis. The line climbs from about 315 ppm to above 420 ppm, and it curves **upward**: the yearly increase has grown from under 1 ppm per year in the early 1960s to roughly 2 to 3 ppm per year recently. The cause is the burning of fossil fuels plus deforestation.

### Feature 2: the yearly sawtooth

On top of the trend, the line rises and falls by about 6 ppm each year.

| Time of year (Northern Hemisphere) | What dominates | Effect on $CO_{2}$ |
|---|---|---|
| Spring and summer | Photosynthesis by leafing-out plants exceeds respiration and decomposition | Falls, reaching a low around September or October |
| Fall and winter | Respiration and decomposition of fallen leaves exceed photosynthesis | Rises, reaching a peak around May |

The Northern Hemisphere controls the pattern because it has far more land and vegetation than the Southern Hemisphere. Stations near the South Pole show a much smaller seasonal swing.

### Worked Example: Separating trend from season

To measure the trend without the seasonal swing, compare the **same month** in different years. Suppose the May reading at a station is 412 ppm in one year and 427 ppm six years later.

1. Change: $427 - 412 = 15$ ppm
2. Rate: $\\dfrac{15 \\text{ ppm}}{6 \\text{ yr}} = 2.5$ ppm per year

Comparing May with October of the same year would mix the seasonal drop into the answer and give a misleading result.

> 🔑 **AP Connection:** If asked to explain the oscillation, name the process **and** the season: "Northern Hemisphere photosynthesis removes $CO_{2}$ in the growing season; respiration and decomposition release it when plants are dormant." Saying only "seasons change" earns nothing.
      `
    },
    {
      id: 'apesbiog5-oxygen',
      type: 'text' as const,
      content: `
## Dissolved Oxygen During Eutrophication

Dissolved oxygen (DO) is measured in milligrams per liter (mg/L). Useful reference points:

| DO level | Meaning |
|---|---|
| Above about 6 mg/L | Healthy for most fish, including trout |
| Below about 5 mg/L | Stressful for many fish |
| Below 2 mg/L | **Hypoxic**: most fish leave or die |
| Near 0 mg/L | **Anoxic**: only anaerobic microbes thrive |

### Illustrative data: a lake after a fertilizer pulse

| Week | Algae (chlorophyll, µg/L) | Bottom-water DO (mg/L) |
|---|---|---|
| 0 | 5 | 8.0 |
| 2 | 40 (bloom) | 7.5 |
| 4 | 25 (algae dying) | 4.0 |
| 6 | 10 | 1.5 |
| 8 | 8 | 2.0 |

### How to read it

1. **Weeks 0-2:** nutrients feed an algal bloom. Surface DO can actually rise during the day because the algae photosynthesize.
2. **Weeks 2-6:** algae die and sink. Aerobic bacteria decompose them, and their respiration uses up oxygen. Bottom DO falls steadily.
3. **Week 6:** DO is below 2 mg/L, so the bottom water is hypoxic and fish kills are likely.

The oxygen crash **lags** the bloom because it is driven by decomposition of dead algae, not by the living bloom itself.

**Percent change in bottom-water DO from week 0 to week 6:** $\\dfrac{1.5 - 8.0}{8.0} \\times 100 = \\dfrac{-6.5}{8.0} \\times 100 \\approx -81\\%$

Two other patterns appear on DO graphs. Over a single day, DO is highest in late afternoon (after hours of photosynthesis) and lowest just before dawn (after a night of respiration only). In summer, warm surface water floats on cold bottom water, so the bottom layer cannot mix with the oxygen-rich surface, which is why hypoxia usually starts at the bottom.
      `
    },
    {
      id: 'apesbiog5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Read the Data** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Keeling curve rises and falls by several ppm within each year. What causes this seasonal oscillation?',
            options: [
              'Northern Hemisphere vegetation absorbs more carbon in summer than in winter',
              'Fossil fuel use drops sharply each summer as heating demand falls',
              'Warm summer oceans absorb more carbon than cold winter oceans do',
              'Volcanic eruptions on Hawaii release extra gas during the winter'
            ],
            correctAnswer: 0,
            explanation: 'The Northern Hemisphere holds most of the land plants, so its summer photosynthesis pulls $CO_{2}$ down and its winter decomposition releases it again. Warm water actually holds less dissolved gas than cold water, and the swing would not track plant growth if it came from heating fuel or volcanoes.'
          },
          {
            question: 'In a lake receiving fertilizer runoff, bottom-water dissolved oxygen drops sharply about two weeks after an algal bloom peaks. What accounts for the delay?',
            options: [
              'Oxygen demand surges once bacteria decompose the dying algae',
              'Algae consume dissolved oxygen fastest while the bloom is growing',
              'Fertilizer reacts with oxygen once it settles to the bottom',
              'Cold bottom water loses its oxygen to the atmosphere'
            ],
            correctAnswer: 0,
            explanation: 'The oxygen crash follows the bloom because aerobic decomposers use oxygen as they break down dead algae. A growing bloom adds oxygen by photosynthesis, and bottom water is cut off from the atmosphere rather than losing oxygen to it.'
          },
          {
            question: 'Bottles of lake water were enriched and algae measured after one week (chlorophyll, µg/L): control 4, nitrogen added 5, phosphorus added 16, nitrogen and phosphorus added 38. Which conclusion is best supported?',
            options: [
              'Phosphorus is the primary limiting nutrient in this lake',
              'Nitrogen is the primary limiting nutrient in this lake',
              'Neither nutrient limits algal growth in this lake',
              'Nitrogen and phosphorus limit growth to exactly the same degree'
            ],
            correctAnswer: 0,
            explanation: 'Adding phosphorus alone quadrupled algae while nitrogen alone barely changed it, so phosphorus is the primary limit. The larger jump with both nutrients shows nitrogen becomes limiting once phosphorus is supplied, not that the two limit growth equally.'
          }
        ]
      }
    },
    {
      id: 'apesbiog5-experiments',
      type: 'text' as const,
      content: `
## Limiting-Nutrient Experiments

The bottle data in the last question follow a standard design. Fill identical containers with water from the same lake, add nothing to one (the **control**), add a single nutrient to others, and add combinations to the rest. Then measure algal growth.

| Treatment | Chlorophyll (µg/L) | Interpretation |
|---|---|---|
| Control | 4 | Baseline growth |
| + Nitrogen | 5 | Almost no response, so nitrogen is not the first limit |
| + Phosphorus | 16 | Large response, so phosphorus is the primary limiting nutrient |
| + Nitrogen and phosphorus | 38 | Even larger: once phosphorus is supplied, nitrogen becomes the next limit |

### Worked Example: Percent change from the control

1. Phosphorus treatment: $\\dfrac{16 - 4}{4} \\times 100 = 300\\%$ increase
2. Nitrogen treatment: $\\dfrac{5 - 4}{4} \\times 100 = 25\\%$ increase
3. Both nutrients: $\\dfrac{38 - 4}{4} \\times 100 = 850\\%$ increase

Good experimental design points to mention on an FRQ: a **control**, only **one variable changed** per treatment, **replicate** bottles for each treatment, and identical light and temperature.

## Percent Change and the Rule of 70

**Percent change** compares a change to the starting value:

$$\\text{percent change} = \\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100$$

A negative answer is a decrease. Always divide by the **initial** value.

When something grows by a steady percentage each period (exponential growth), the **rule of 70** estimates how long it takes to double:

$$\\text{doubling time} \\approx \\frac{70}{\\text{percent growth rate}}$$

The 70 comes from the natural log of 2 (about 0.693). The time unit of the answer matches the time unit of the rate.

### Worked Example 1: An algal population

Algae in a nutrient-rich pond grow 14% per day.

1. Doubling time $\\approx \\dfrac{70}{14} = 5$ days
2. In 15 days the population doubles $\\dfrac{15}{5} = 3$ times: $2 \\times 2 \\times 2 = 8$ times its starting size

### Worked Example 2: Fertilizer use in a region

Fertilizer use in a region grows 2% per year.

1. Doubling time $\\approx \\dfrac{70}{2} = 35$ years

### Worked Example 3: Working backward

A town's nitrogen load to a river doubles every 14 years. What is the annual growth rate?

1. Rearrange: growth rate $\\approx \\dfrac{70}{\\text{doubling time}}$
2. Substitute: $\\dfrac{70}{14} = 5\\%$ per year

> 🔑 **AP Connection:** Enter the rate as a **percent**, not a decimal. A growth rate of 0.05 means 5%, so the doubling time is $70 \\div 5 = 14$, not $70 \\div 0.05 = 1{,}400$.
      `
    },
    {
      id: 'apesbiog5-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Phytoplankton in a eutrophic bay grow 10% per day. Using the rule of 70, about how many days does the population take to double?

**2)** Nitrate concentration in a river rose from 1.2 mg/L to 3.0 mg/L. What is the percent change?

**3)** The phosphorus load from a city's wastewater doubles every 20 years. What is the approximate annual percent growth rate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '150', '3.5'],
        hint1: 'Doubling time ≈ 70 ÷ percent growth rate.',
        hint2: 'Subtract the initial value from the final value, then divide by the initial value of 1.2.',
        hint3: 'Rearrange the rule of 70: growth rate ≈ 70 ÷ doubling time.',
        explanation: '1) $70 \\div 10 = 7$ days. 2) $\\frac{3.0 - 1.2}{1.2} \\times 100 = \\frac{1.8}{1.2} \\times 100 = 150\\%$. 3) $70 \\div 20 = 3.5\\%$ per year.'
      }
    },
    {
      id: 'apesbiog5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correction |
|---|---|
| "Nitrogen fixation and nitrification are the same thing." | **Fixation** turns $N_{2}$ gas into ammonia or ammonium. **Nitrification** turns ammonium into nitrite and then nitrate. Fixation brings nitrogen into ecosystems; nitrification only changes its form. |
| "Phosphorus cycles through the air like nitrogen." | Phosphorus has **no significant gas phase**. It moves through rock, soil, water and organisms, and through the air only as dust particles. |
| "Denitrification is a form of pollution." | Denitrification returns nitrate to the air as harmless $N_{2}$, which is why wetlands clean polluted water. Its byproduct $N_{2}O$ is the concern. |
| "Carbon sinks store carbon permanently." | Sinks can weaken or reverse. Forests burn or die from drought and pests, warming soils and thawing permafrost release carbon, and warmer, more acidic surface water absorbs $CO_{2}$ less readily. |
| "Wood is carbon neutral, so burning it adds no $CO_{2}$." | Burning wood releases $CO_{2}$ at the smokestack just like coal. The difference is the source: wood carbon was removed from the air recently and regrowing trees can take it back up over decades, while fossil carbon was locked away for millions of years and adds new carbon to the fast cycle. |
| "The ocean absorbs $CO_{2}$, so emissions there do no harm." | Ocean uptake slows warming but causes acidification, lowering the carbonate ions that shell-building organisms need. |
| "Respiration is the opposite of the carbon cycle." | Respiration **is** part of the carbon cycle; it is the reverse of photosynthesis, returning $CO_{2}$ to the air. |

> 🔑 **AP Connection:** The phrase "carbon neutral" often appears in Unit 6 (energy) questions about biomass. A full-credit answer says biomass is **closer** to carbon neutral **if** the harvested plants are regrown, and explains why: the carbon released was recently taken from the atmosphere.
      `
    },
    {
      id: 'apesbiog5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these carbon stores is most likely to switch from storing carbon to releasing it as the climate warms over the coming decades?',
            options: [
              'Permafrost soils',
              'Limestone bedrock',
              'Deep-sea sediments',
              'Buried coal seams'
            ],
            correctAnswer: 0,
            explanation: 'Thawing permafrost lets microbes decompose organic matter that had been frozen for thousands of years, releasing $CO_{2}$ and methane. Limestone, deep-sea sediments and unmined coal belong to the slow cycle and are not released by a few decades of warming.'
          },
          {
            question: 'A power plant switches from coal to wood pellets from fast-growing plantations. Why is the wood considered closer to carbon neutral than the coal?',
            options: [
              'Its carbon came from the air recently and regrowth can recapture it',
              'Burning wood releases no carbon dioxide at the smokestack at all',
              'Wood ash returns all of the carbon to the soil after burning',
              'Trees store carbon permanently, even after they are burned for fuel'
            ],
            correctAnswer: 0,
            explanation: 'Wood carbon was in the atmosphere only years or decades ago, and replanted trees can absorb a similar amount again, while coal adds carbon that was locked away for millions of years. Burning wood still releases $CO_{2}$ at the stack, and most of its carbon leaves as gas rather than staying in the ash.'
          },
          {
            question: 'A student claims the ocean will keep absorbing about a quarter of human $CO_{2}$ emissions indefinitely. Which response best corrects this claim?',
            options: [
              'As surface water warms and its carbonate is used up, uptake can weaken',
              'The ocean already releases more carbon than it takes up each year',
              'Ocean uptake stops completely once pH reaches about 7.0',
              'Dissolved carbon escapes back to the air every winter season'
            ],
            correctAnswer: 0,
            explanation: 'Warm water holds less dissolved gas, and as carbonate ions are used up the water buffers less $CO_{2}$, so the sink can weaken over time. The ocean is currently a net sink rather than a source, and its uptake does not switch off at a single pH value.'
          }
        ]
      }
    }
  ]
};
