import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Water Pollution (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-water-pollution'.
 * 7 parts, rewritten Oct 2026 to the 2026-27 APES CED (May 2027 exam). Written to
 * complement, not repeat, the core APES topics apes-atmospheric-pollution,
 * apes-water-resources and apes-atmosphere-climate. LaTeX uses DOUBLED backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
// ───────────────────────── PART 1 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp1-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 1 of 7 — Sources and Measures of Water Quality**

---

| Section |
|---------|
| 📖 Why the Source Type Decides the Remedy |
| Reading a Water-Quality Report |
| Worked Example: Percent Oxygen Saturation |
| Living Indicators: Macroinvertebrates |
| Worked Example: A Biotic Index Score |

> 🔑 **Key Concept:** The point/nonpoint split and the list of major pollutants are covered in Water Resources, Part 1. This topic goes one level deeper. Part 1 asks two practical questions: **who can be held responsible** for each kind of source (CED 8.1), and **how scientists actually measure** whether a stream is healthy, using chemical tests and living indicator species (CED 8.2).`,
    },
    {
      id: 'apewp1-sources',
      type: 'text' as const,
      content: `## 📖 Why the Source Type Decides the Remedy

A **point source** discharges from one identifiable place, so it can be given a permit, sampled at the pipe and fined. A **nonpoint source** is spread across a landscape, so there is no single pipe to sample and no single owner to fine.

| | Point source | Nonpoint source |
|---|---|---|
| How it is controlled in the U.S. | A discharge **permit** under the Clean Water Act (the NPDES program) sets limits for each pollutant | Mostly **best management practices** (BMPs), state programs, incentives and cost-sharing |
| Where it is measured | At the outfall pipe | In the receiving stream, after everything has mixed |
| Typical fix | Treat the water before it leaves the pipe | Keep the pollutant on the land: buffer strips, cover crops, no-till farming, timed fertilizer use, retention ponds |
| Track record since 1972 | Large improvements as factories and sewage plants installed treatment | Slower progress; now the leading cause of impaired U.S. rivers and lakes |

### The gray zone

Some sources do not fit neatly, and the exam likes them:

| Case | Why it is tricky |
|---|---|
| Large **concentrated animal feeding operations (CAFOs)** | A farm, yet the Clean Water Act legally treats large CAFOs that discharge as **point sources** because their manure lagoons and outlets are identifiable |
| **Storm drains** in a city | The runoff is nonpoint in origin (streets, roofs, lawns), but it leaves through a pipe, so cities need stormwater permits |
| **Mercury** falling in rain | Released by distant smokestacks (point sources), but it reaches a lake from the whole sky and watershed, so for the lake it acts as a nonpoint input |

> 🔑 **AP Connection:** When an FRQ asks you to classify a source, use the test "can you point to **one** discharge location?" Then add the consequence: a point source can be permitted and treated at the pipe, while a nonpoint source needs land-management practices across the watershed.`,
    },
    {
      id: 'apewp1-q-sources',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Since 1972, U.S. factory and sewage-plant discharges have improved far more than farm runoff. What best explains the difference?',
            options: [
              'The Clean Water Act exempted all farms from any water-quality programs',
              'Farm runoff contains pollutants that no available technology can remove',
              'Factories release smaller volumes of water than farms do in a typical year',
              'A single pipe can be permitted and sampled, but thousands of fields cannot'
            ],
            correctAnswer: 3,
            explanation: 'Point sources have one outfall that can be given discharge limits and checked, so regulation forced treatment. Nonpoint runoff has no single pipe, so it depends on voluntary or incentive-based land practices, which have moved more slowly.',
          },
          {
            question: 'A county wants to cut phosphorus washing off cornfields into a reservoir. Which approach matches how nonpoint sources are usually controlled?',
            options: [
              'Pay farmers to plant cover crops and buffers',
              'Install a treatment unit at every field edge',
              'Issue each field a permit limiting its outflow',
              'Sample the reservoir and fine the nearest farm'
            ],
            correctAnswer: 0,
            explanation: 'Nonpoint pollution is controlled with best management practices that keep soil and nutrients on the land, often supported by cost-sharing. Fields have no single outfall to permit or treat, and the reservoir sample cannot show which farm the phosphorus came from.',
          },
          {
            question: 'A 5,000-head cattle feedlot drains its manure lagoon into a creek through a ditch. How does U.S. law treat this source?',
            options: [
              'As a nonpoint source, because it is a farm',
              'As a natural source, because manure is organic',
              'As a point source that needs a discharge permit',
              'As an exempt source, because it is agriculture'
            ],
            correctAnswer: 2,
            explanation: 'Large CAFOs that discharge are defined as point sources under the Clean Water Act, because the lagoon and its outlet are identifiable. Being a farm does not make a source nonpoint when the discharge comes from one place.',
          },
        ],
      },
    },
    {
      id: 'apewp1-indicators',
      type: 'text' as const,
      content: `## Reading a Water-Quality Report

Field kits and probes measure a handful of **chemical and physical indicators**. Each one points toward a likely cause. (Ranges are typical guides; exact standards vary by state and by type of water body.)

| Indicator | Typical healthy stream | A warning value | What it usually signals |
|---|---|---|---|
| **Dissolved oxygen (DO)** | Above about 6 mg/L | Below about 2 mg/L (hypoxic) | Organic waste or algal decay using up oxygen; warm water |
| **Biochemical oxygen demand (BOD)** | About 1–2 mg/L | Above about 10 mg/L | Large load of sewage, manure or food-processing waste |
| **Temperature** | Near the natural, shaded value | Several °C above upstream | Thermal discharge, loss of shade trees, hot pavement runoff |
| **pH** | About 6.5–8.5 | Below about 5.5 | Acid deposition or acid mine drainage |
| **Turbidity** | Clear; low reading | Cloudy; high reading | Sediment from erosion, or dense algae |
| **Nitrate** ($NO_{3}^{-}$) | Well under 1 mg/L as N | 10 mg/L as N (U.S. drinking-water limit) | Fertilizer, manure, septic systems |
| **Phosphate** ($PO_{4}^{3-}$) | Very low | Around 0.1 mg/L can already feed blooms in a lake | Fertilizer, manure, sewage, eroded soil |
| **Fecal coliform / *E. coli*** | Few or none | Hundreds per 100 mL | Sewage or animal waste, so disease-causing organisms may be present |

Two habits make these numbers useful:

1. **Compare upstream with downstream.** A single reading means little; a drop in DO or a jump in *E. coli* between two sites brackets the source.
2. **Look for the matching pair.** High BOD with low DO points to organic waste. High nitrate and phosphate with very high daytime DO points to an algal bloom. High turbidity after a storm points to erosion.

## Worked Example: Percent Oxygen Saturation

How much oxygen water **can** hold depends on temperature (the solubility table is in Water Resources, Part 3). Comparing what is measured with what the water could hold gives **percent saturation**:

$$\\text{percent saturation} = \\frac{\\text{measured DO}}{\\text{DO at saturation}} \\times 100$$

**Site A** (illustrative data): water at 20 °C, where saturation is 9.1 mg/L. Measured DO is 6.4 mg/L.
$$\\frac{6.4}{9.1} \\times 100 \\approx 70\\%$$
Decomposers are using oxygen faster than it diffuses in from the air.

**Site B** (illustrative data): a lake at 10 °C, where saturation is 11.3 mg/L. At 3 p.m. the measured DO is 13.0 mg/L.
$$\\frac{13.0}{11.3} \\times 100 \\approx 115\\%$$
Water above 100% is **supersaturated**. That happens when a dense algal bloom photosynthesizes in sunlight. The same lake can fall far below 100% before dawn, when the algae only respire. A big day-night swing is itself a sign of eutrophication (Part 2).`,
    },
    {
      id: 'apewp1-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only, without units. Saturation values: 0 °C = 14.6 mg/L, 15 °C = 10.1 mg/L, 30 °C = 7.6 mg/L.

**1)** A pond at 30 °C has a measured DO of 5.7 mg/L. What is its percent saturation?

**2)** An ice-covered lake at 0 °C has a measured DO of 7.3 mg/L. What is its percent saturation?

**3)** A trout stream at 15 °C reads 101% saturation. What is its measured DO, in mg/L, to the nearest tenth?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['75', '50', '10.2'],
        hint1: 'Divide the measured DO by the saturation value for that temperature, then multiply by 100.',
        hint2: 'For the ice-covered lake, 7.3 is exactly half of 14.6.',
        hint3: 'Work backward: measured DO = saturation × percent ÷ 100 = 10.1 × 1.01.',
        explanation: '1) 5.7 ÷ 7.6 × 100 = 75%. 2) 7.3 ÷ 14.6 × 100 = 50%; ice blocks oxygen from entering while decomposers keep using it. 3) 10.1 × 1.01 ≈ 10.2 mg/L.',
      },
    },
    {
      id: 'apewp1-macro',
      type: 'text' as const,
      content: `## Living Indicators: Macroinvertebrates

Every species has a **range of tolerance** for oxygen, temperature and pollutants (the tolerance curve is covered in Water Resources, Part 4). Species with a **narrow** range for oxygen make good **indicator species**: if they are present, the water has been clean for a long time.

Stream **macroinvertebrates** (insect larvae, crustaceans, snails and worms large enough to see) are the standard choice because they live in one stretch of stream for months to years and cannot swim away from a pollution pulse.

| Group | Tolerance of low DO and pollution | Examples |
|---|---|---|
| **1. Sensitive** | Low; need high, steady oxygen | Stonefly nymphs, mayfly nymphs, caddisfly larvae, water pennies, gilled snails |
| **2. Somewhat tolerant** | Moderate | Dragonfly and damselfly nymphs, crayfish, scuds, clams and mussels, crane fly larvae |
| **3. Tolerant** | High; survive near-hypoxic water | Aquatic worms, leeches, midge larvae, lunged (pouch) snails, black fly larvae |

**Why use animals at all?** A chemical test is a **snapshot** of one moment, and a short pollution pulse at night can be missed. The animal community **integrates** conditions over months, so a missing group of sensitive insects records past events the probe never saw.

### Worked Example: A Biotic Index Score

One common volunteer method gives each **type** of organism found (not each individual) a weight: Group 1 = 3 points, Group 2 = 2 points, Group 3 = 1 point. On that scale, a total above 22 is excellent, 17–22 good, 11–16 fair and below 11 poor.

Kick-net sample from a creek (illustrative data):

| Types found | Group | Points |
|---|---|---|
| Mayfly nymphs, caddisfly larvae | 1 | $2 \\times 3 = 6$ |
| Crayfish, dragonfly nymphs, clams | 2 | $3 \\times 2 = 6$ |
| Midge larvae, aquatic worms, leeches | 3 | $3 \\times 1 = 3$ |
| **Total** | | **15 (fair)** |

Notice that the creek still had sensitive types, but **no stoneflies**, which need the most oxygen, and three tolerant types. A sample with 400 midges and nothing else would score just **1**, even though it contains many animals: diversity of sensitive types matters, not abundance.

> 🔑 **AP Connection:** For an FRQ that gives a macroinvertebrate table, state the trend and the mechanism in one sentence: "Below the outfall, sensitive stoneflies and mayflies disappear and tolerant worms and midges increase, because organic waste lowers dissolved oxygen."`,
    },
    {
      id: 'apewp1-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A stream sample shows BOD of 18 mg/L and DO of 2.5 mg/L just below a pipe. Which source is most consistent with these two readings?',
            options: [
              'A mine releasing acid water with dissolved iron',
              'A meat-processing plant releasing organic waste',
              'A power plant releasing clean cooling water',
              'A quarry releasing fine clay into the current'
            ],
            correctAnswer: 1,
            explanation: 'High BOD means a large supply of organic matter for decomposers, and their respiration pulls DO down. Acid drainage lowers pH, sediment raises turbidity, and warm cooling water lowers DO without adding organic matter to raise BOD.',
          },
          {
            question: 'Monthly probe readings at a creek were always normal, yet stonefly and mayfly nymphs are absent and midge larvae are abundant. What is the best interpretation?',
            options: [
              'The probe proves the creek is healthy',
              'Brief low-oxygen events were missed',
              'Midge larvae are eating every stonefly',
              'Stoneflies need water with a lower pH'
            ],
            correctAnswer: 1,
            explanation: 'Macroinvertebrates live in the stream for months and integrate conditions over that time, so the loss of sensitive types records low-oxygen events that monthly snapshots missed. Midges are tolerant, not predators that eliminate stoneflies.',
          },
          {
            question: 'Two sites have the same number of animals. Site 1 has 8 types including 4 from the sensitive group; Site 2 has 2 tolerant types. Which statement about their index scores is correct?',
            options: [
              'Equal scores, since both sites hold the same number of animals',
              'Site 2 is higher, since tolerant types reach larger numbers',
              'Neither can be scored until the water is tested chemically',
              'Site 1 is higher, since its intolerant types earn more points'
            ],
            correctAnswer: 3,
            explanation: 'The index counts types and weights them by tolerance, so several sensitive types raise the score while abundance does not. The biological index stands on its own, though chemical tests help explain it.',
          },
        ],
      },
    },
    {
      id: 'apewp1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Idea | Key fact |
|---|---|
| Point sources | Permitted and sampled at the pipe (Clean Water Act, NPDES) |
| Nonpoint sources | Controlled with best management practices; now the leading cause of impaired U.S. waters |
| Gray-zone cases | Large CAFOs and city storm drains are regulated as point sources |
| Indicator pairs | High BOD + low DO = organic waste; high nutrients + supersaturated daytime DO = bloom |
| Percent saturation | Measured DO ÷ saturation DO × 100; above 100% means intense photosynthesis |
| Indicator species | Narrow tolerance; their presence means long-term clean conditions |
| Macroinvertebrate groups | Sensitive (stoneflies, mayflies, caddisflies) → tolerant (worms, leeches, midges) |
| Biotic index | Counts weighted types, not individuals; integrates conditions over months |

**Next:** Part 2 follows the most common cause of low oxygen, excess nutrients, from a farm field to a toxic algal bloom and a coastal dead zone.`,
    },
  ],
},

// ───────────────────────── PART 2 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp2-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 2 of 7 — Eutrophication and Hypoxia in Depth**

---

| Section |
|---------|
| 📖 Which Nutrient Limits Growth? |
| Why the Bottom Runs Out of Oxygen |
| Harmful Algal Blooms: Lake Erie |
| The Gulf of Mexico Hypoxic Zone |
| Worked Example: Nutrient Load |
| Cutting Nutrients at the Source |

> 🔑 **Key Concept:** The basic cascade (nutrients → bloom → die-off → decomposition → low oxygen) and the oligotrophic/eutrophic contrast are covered in Water Resources, Part 3. This part explains **why** the cascade happens where it does: which nutrient controls growth, why oxygen loss is concentrated in **bottom water**, and how two of the best-studied cases, Lake Erie and the Gulf of Mexico, were measured and managed (CED 8.5).`,
    },
    {
      id: 'apewp2-limiting',
      type: 'text' as const,
      content: `## 📖 Which Nutrient Limits Growth?

Algae need many elements, but their growth is capped by the one in **shortest supply relative to need**: the **limiting nutrient**. Adding more of any other nutrient changes little; adding the limiting one triggers a bloom.

| Water body | Usual limiting nutrient | Why |
|---|---|---|
| **Lakes and rivers (fresh water)** | **Phosphorus** | Phosphorus has no gas phase in its cycle, so no atmospheric supply; it binds tightly to soil particles and is naturally scarce |
| **Estuaries and coastal oceans** | **Nitrogen** | Seawater and sediments supply phosphorus, while nitrogen is removed by bacteria that turn nitrate into $N_{2}$ gas |

**The classic evidence.** In the 1970s, researchers at Canada's Experimental Lakes Area split one small lake in two with a plastic curtain. Both halves received carbon and nitrogen; only one half also received **phosphorus**. By late summer that half had turned bright green with algae, and the other half stayed clear. Results like this supported **limits on phosphate in laundry detergents** in Canada and many U.S. states.

> 🔑 **AP Connection:** If a question asks which nutrient to reduce to stop blooms in a **lake**, the answer is phosphorus; for a **coastal dead zone**, it is nitrogen. In practice managers cut both, because water flows from rivers (P-limited) to the coast (N-limited).

## Why the Bottom Runs Out of Oxygen

In summer, sunlight warms the surface of a deep lake. Warm water is less dense, so the lake **stratifies** into layers that do not mix:

| Layer | Temperature | Oxygen supply |
|---|---|---|
| **Epilimnion** (surface) | Warm | Mixed by wind and refilled from the air; algae photosynthesize here |
| **Thermocline** | Drops quickly with depth | Acts as a barrier to mixing |
| **Hypolimnion** (bottom) | Cold | **No resupply**: too dark for photosynthesis and cut off from the air |

Dead algae sink into the hypolimnion, and decomposers there use up its fixed supply of oxygen. Bottom oxygen falls all summer until **fall turnover**, when the surface cools, the layers reach the same density, and wind mixes oxygen back down.

### Worked Example: Reading a DO Depth Profile (illustrative data)

A eutrophic lake in August:

| Depth (m) | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|---|
| Temperature (°C) | 25 | 25 | 24 | 16 | 10 | 9 | 9 |
| DO (mg/L) | 9.8 | 9.5 | 8.9 | 4.1 | 1.3 | 0.5 | 0.2 |

1. **Find the thermocline:** temperature drops 8 °C between 4 and 6 m, far more than elsewhere, so the thermocline is at about 4–6 m.
2. **Find the hypoxic layer:** DO is below 2 mg/L from about 8 m down. Fish are squeezed into the warm surface layer, which is a problem for cold-water species such as trout.
3. **Percent change from surface to bottom:** $\\frac{0.2 - 9.8}{9.8} \\times 100 \\approx -98\\%$.

**A feedback loop.** When bottom water loses its oxygen, phosphorus that was locked in the sediments is released back into the water (**internal loading**). At turnover that phosphorus mixes upward and feeds the next bloom, which is why lakes can stay eutrophic for years after outside inputs are cut.`,
    },
    {
      id: 'apewp2-q-mech',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Adding nitrogen to a small lake causes no bloom, but adding phosphorus does. What does this show?',
            options: [
              'Phosphorus is the limiting nutrient in that lake',
              'Nitrogen is toxic to the algae living in that lake',
              'The algae there fix all their phosphorus from the air',
              'Nitrogen is the limiting nutrient in that lake'
            ],
            correctAnswer: 0,
            explanation: 'Growth responds only to the nutrient in shortest supply, so a bloom after adding phosphorus identifies it as limiting. Phosphorus has no gas phase, so algae cannot take it from the air.',
          },
          {
            question: 'Why does oxygen in the bottom layer of a stratified lake keep falling through the summer?',
            options: [
              'Warm bottom water holds very little dissolved gas in summer',
              'Fish crowd into the bottom water to escape the heat',
              'It is too dark to photosynthesize and sealed off from the air',
              'Algae at the bottom use the oxygen in photosynthesis'
            ],
            correctAnswer: 2,
            explanation: 'The hypolimnion receives no oxygen from photosynthesis or from the air while the thermocline blocks mixing, yet decomposers keep using oxygen as dead algae sink. Bottom water in summer is cold, not warm, and photosynthesis releases oxygen rather than using it.',
          },
          {
            question: 'A town stopped its sewage discharge to a lake in 2010, yet blooms continued for years. Which process best explains this delay?',
            options: [
              'Turnover removing every nutrient from the lake each autumn',
              'Nitrogen gas from the air dissolving into the surface water',
              'Phosphorus released from the oxygen-poor bottom sediment',
              'Algae evolving to bloom without any nutrients in the lake'
            ],
            correctAnswer: 2,
            explanation: 'Years of inputs stored phosphorus in the sediments, and hypoxic bottom water releases it each summer (internal loading). Turnover mixes nutrients upward rather than removing them.',
          },
        ],
      },
    },
    {
      id: 'apewp2-cases',
      type: 'text' as const,
      content: `## Harmful Algal Blooms: Lake Erie

Some blooms are dominated by **cyanobacteria** such as *Microcystis*, which make **microcystin**, a toxin that damages the liver. These **harmful algal blooms (HABs)** threaten drinking water and pets as well as fish.

| Stage | What happened |
|---|---|
| **1960s** | Lake Erie, the shallowest and warmest Great Lake, had huge blooms and low-oxygen bottom water; the press called it "dead" |
| **1972 onward** | The U.S.–Canada **Great Lakes Water Quality Agreement** set phosphorus targets; sewage plants added phosphorus removal and detergent phosphate was limited. The lake recovered by the 1980s |
| **Mid-1990s onward** | Blooms returned, now driven mainly by **dissolved phosphorus washing off farmland** in the Maumee River watershed, a nonpoint source |
| **August 2014** | Microcystin entered the water supply of **Toledo, Ohio**; more than 400,000 people were told not to drink tap water for about three days |
| **2016** | The two countries set a goal of a **40% cut** in spring phosphorus loads to western Lake Erie, compared with 2008 |

The lesson: point-source controls fixed the first crisis, but the second came from nonpoint runoff, which is far harder to control (Part 1). Wet springs, which wash more fertilizer into the river, produce the largest summer blooms.

## The Gulf of Mexico Hypoxic Zone

The **Mississippi–Atchafalaya River basin** drains about 40% of the lower 48 states, including the Corn Belt. Its nitrogen (mostly nitrate from fertilizer and manure) reaches the Gulf each spring.

- **Fresh river water floats on top of denser salt water**, and summer warming strengthens the layering, so the bottom water is cut off from the air, just like a lake's hypolimnion.
- The zone is mapped each summer and defined as bottom water with DO **below 2 mg/L**.
- Its size swings with spring river flow. The largest measured zone was about **22,700 km²** (2017), roughly the size of New Jersey. The federal–state task force goal is a five-year average of about **5,000 km²** by 2035.
- Fish and shrimp swim away; slow bottom animals die. Shrimp boats must travel farther, raising costs.

Hypoxic zone area in late July (illustrative data, within the measured range):

| Year | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Spring river flow | Low | High | Average | High | Low |
| Hypoxic area (km²) | 8,000 | 20,000 | 15,000 | 22,000 | 10,000 |

Reading it: the two largest zones follow the two high-flow springs, because more runoff carries more nitrate. The five-year mean is $\\frac{8 + 20 + 15 + 22 + 10}{5} = 15$ thousand km², three times the 5,000 km² goal.`,
    },
    {
      id: 'apewp2-load',
      type: 'text' as const,
      content: `## Worked Example: Nutrient Load

Managers track **load**, the mass of nutrient a river delivers per unit time, not just its concentration. A dilute river with a huge flow can deliver more than a concentrated creek.

$$\\text{load} = \\text{concentration} \\times \\text{flow}$$

A shortcut: **1 mg/L is the same as 1 g/m³**, because 1 m³ holds 1,000 L.

A river carries total phosphorus at **0.4 mg/L** with a flow of **100 m³/s** (illustrative data).

1. Concentration in g/m³: $0.4\\ \\text{mg/L} = 0.4\\ \\text{g/m}^3$
2. Load per second: $0.4\\ \\text{g/m}^3 \\times 100\\ \\text{m}^3\\text{/s} = 40\\ \\text{g/s}$
3. Load per day: $40\\ \\text{g/s} \\times 86{,}400\\ \\text{s/day} = 3{,}456{,}000\\ \\text{g} \\approx 3{,}500\\ \\text{kg/day}$

A 40% reduction target means cutting this to $3{,}456 \\times 0.6 \\approx 2{,}070$ kg/day.`,
    },
    {
      id: 'apewp2-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only, without units or commas.

**1)** A creek carries phosphorus at 0.5 mg/L with a flow of 20 m³/s. What is its load in grams per second?

**2)** Using your answer to 1), what is the load in kilograms per day? (There are 86,400 seconds in a day.)

**3)** A hypoxic zone shrinks from 20,000 km² to 5,000 km². By what percent did it shrink?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '864', '75'],
        hint1: '0.5 mg/L = 0.5 g/m³. Multiply by the flow in m³/s.',
        hint2: 'Multiply grams per second by 86,400, then divide by 1,000 to get kilograms.',
        hint3: '(20,000 − 5,000) ÷ 20,000 × 100.',
        explanation: '1) 0.5 g/m³ × 20 m³/s = 10 g/s. 2) 10 × 86,400 = 864,000 g = 864 kg per day. 3) 15,000 ÷ 20,000 × 100 = 75%.',
      },
    },
    {
      id: 'apewp2-solutions',
      type: 'text' as const,
      content: `## Cutting Nutrients at the Source

| Source | Practice | How it reduces nutrients |
|---|---|---|
| Cropland | **Right rate and timing** of fertilizer (not before heavy spring rain) | Less unused fertilizer is left to wash away |
| Cropland | **Cover crops** planted after harvest | Roots take up leftover nitrate and hold soil over winter |
| Stream banks | **Riparian buffer strips** of grass and trees | Slow runoff so sediment and attached phosphorus settle out |
| Drained farmland | **Restored or constructed wetlands** | Bacteria in waterlogged soil convert nitrate to $N_{2}$ gas (denitrification) |
| Livestock | Covered **manure storage** and spreading limits | Keeps manure off frozen or saturated ground |
| Cities | **Tertiary treatment** at sewage plants | Removes nitrogen and phosphorus before discharge |
| Homes | Phosphate-free detergents and lawn fertilizers | Removes household phosphorus sources |

> 🔑 **AP Connection:** A strong FRQ solution names **one practice, its mechanism and a drawback**: "Planting cover crops after harvest takes up leftover nitrate before spring rains wash it away, but it adds seed and labor costs for the farmer."`,
    },
    {
      id: 'apewp2-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Lake Erie recovered in the 1980s but developed large toxic blooms again after the mid-1990s. Which change best explains the return of the blooms?',
            options: [
              'Sewage plants stopped removing phosphorus',
              'More dissolved phosphorus washed off farms',
              'The lake grew deeper and much colder',
              'Detergents with phosphate were reintroduced'
            ],
            correctAnswer: 1,
            explanation: 'The renewed blooms were driven mainly by dissolved phosphorus in agricultural runoff from the Maumee watershed, a nonpoint source. Point-source controls stayed in place, and Lake Erie remains the shallowest, warmest Great Lake.',
          },
          {
            question: 'Which practice would most directly shrink the Gulf of Mexico hypoxic zone?',
            options: [
              'Adding phosphorus removal to Gulf Coast sewage plants',
              'Banning shrimp trawling inside the low-oxygen area',
              'Pumping air into the bottom water along the Gulf',
              'Restoring wetlands that remove nitrate in the basin'
            ],
            correctAnswer: 3,
            explanation: 'The Gulf zone is nitrogen-limited and fed by nitrate from across the Mississippi basin, and wetlands convert nitrate to nitrogen gas before it reaches the coast. Aerating an area that large is impractical, and trawling bans do not address the cause.',
          },
          {
            question: 'River A carries 2 mg/L nitrate-N at 10 m³/s. River B carries 0.5 mg/L at 100 m³/s. Which delivers more nitrogen per second?',
            options: [
              'River B, at 50 g/s versus 20 g/s',
              'River A, at 20 g/s compared with 5 g/s',
              'Both rivers, at the same 20 g/s each',
              'River A, at its fourfold concentration'
            ],
            correctAnswer: 0,
            explanation: 'Load is concentration times flow: River A delivers 2 g/m³ × 10 m³/s = 20 g/s, and River B delivers 0.5 g/m³ × 100 m³/s = 50 g/s. A large, dilute river can carry more total nutrient than a concentrated small one.',
          },
        ],
      },
    },
    {
      id: 'apewp2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Idea | Key fact |
|---|---|
| Limiting nutrient | Phosphorus in fresh water; nitrogen in coastal water |
| Stratification | Warm surface layer over cold bottom layer; thermocline blocks mixing |
| Bottom hypoxia | Hypolimnion gets no new oxygen while decomposers consume it; ends at fall turnover |
| Internal loading | Hypoxic sediments release stored phosphorus, prolonging eutrophication |
| HABs | Cyanobacteria make toxins such as microcystin; Toledo 2014 tap-water ban |
| Lake Erie | Recovered after point-source P controls; blooms returned from farm runoff |
| Gulf hypoxic zone | Mississippi basin nitrate; DO below 2 mg/L; size tracks spring river flow |
| Load | Concentration × flow; 1 mg/L = 1 g/m³ |
| Solutions | Fertilizer timing, cover crops, buffers, wetlands, tertiary treatment |

**Next:** Part 3 turns from chemical overload to physical pollutants: oil, heat and sediment.`,
    },
  ],
},

// ───────────────────────── PART 3 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp3-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 3 of 7 — Oil, Heat and Sediment: Physical Pollutants**

---

| Section |
|---------|
| 📖 Two Spills Compared |
| Cleanup Methods and Their Trade-offs |
| Oil in Marshes, Mangroves and Reefs |
| Cooling Systems and Thermal Shock |
| Measuring Sediment |

> 🔑 **Key Concept:** How oil, heat and sediment harm organisms (oiled feathers, lower dissolved oxygen, blocked light) is covered in Water Resources, Part 3. This part works through **real cases and engineering choices**: what made two famous oil spills different, why every cleanup method has a cost, how power plants choose a cooling system, and how sediment is measured (CED 8.2, 8.4, 8.6).`,
    },
    {
      id: 'apewp3-spills',
      type: 'text' as const,
      content: `## 📖 Two Spills Compared

| | **Exxon Valdez** | **Deepwater Horizon** |
|---|---|---|
| Date and place | March 1989, Prince William Sound, Alaska | April 2010, Gulf of Mexico, off Louisiana |
| What happened | A loaded tanker ran aground on a reef and its hull tore open | A drilling rig exploded (11 workers died) and the well on the seafloor, about 1,500 m down, flowed for 87 days |
| Oil released (approximate) | About 11 million gallons | About 3.2 million barrels, or about 134 million gallons |
| Environment | Cold water, rocky shores, slow natural breakdown | Warm water, deep-sea plumes, Louisiana salt marshes |
| Wildlife harmed (estimates) | Hundreds of thousands of seabirds; about 2,800 sea otters | Seabirds, dolphins, sea turtles, deep-sea corals, marsh life |
| Main policy result | **Oil Pollution Act of 1990**: double-hulled tankers phased in, spill-response plans required | Stricter offshore drilling safety rules; a multibillion-dollar restoration settlement |

**Units.** Oil is measured in **barrels**, and 1 barrel = 42 gallons. Converting the Deepwater Horizon release:
$$3.2 \\times 10^{6}\\ \\text{barrels} \\times 42\\ \\frac{\\text{gal}}{\\text{barrel}} \\approx 1.34 \\times 10^{8}\\ \\text{gal}$$
That is about $134 \\div 11 \\approx 12$ times the Exxon Valdez spill. Yet the Exxon Valdez is remembered as severe because **cold water slows evaporation and microbial breakdown**, and oil lingered under the beach gravel for decades.

## Cleanup Methods and Their Trade-offs

| Method | How it works | Main drawback |
|---|---|---|
| **Booms** | Floating barriers that corral a slick | Fail in waves and strong currents |
| **Skimmers** | Collect oil from the surface inside booms | Recover only a small share of a large spill |
| **Sorbents** | Pads and pillows soak up oil | Practical only for small spills; become oily waste |
| **Dispersants** | Detergent-like chemicals break oil into tiny droplets that mix into the water, where bacteria degrade them faster | Move oil into the water column, where it can harm plankton, fish eggs and larvae; long-term effects are uncertain |
| **In-situ burning** | Thick, fresh oil is corralled and set on fire | Smoke adds soot and other air pollutants |
| **Bioremediation** | Adding nitrogen and phosphorus fertilizer speeds up oil-eating bacteria (used on Exxon Valdez beaches) | Slow; the added nutrients can feed algae |
| **Hot-water washing** | High-pressure hot water blasts oil off rocks | Kills the intertidal organisms it is meant to protect; some washed Alaska beaches recovered more slowly than oiled ones left alone |

### Worked Example: Where did the oil go? (federal estimate, August 2010)

| Fate of the Deepwater Horizon oil | Percent |
|---|---|
| Captured directly at the wellhead | 17 |
| Burned on the surface | 5 |
| Skimmed | 3 |
| Chemically dispersed | 8 |
| Naturally dispersed | 16 |
| Evaporated or dissolved | 25 |
| Remaining (on the surface, ashore or in sediments) | 26 |

Oil physically **removed** by people: $17 + 5 + 3 = 25\\%$. Three quarters of the oil was dispersed, evaporated, dissolved or left in the environment. Later studies revised some of these shares, but the conclusion holds: **prevention beats cleanup**.`,
    },
    {
      id: 'apewp3-q-oil',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Responders sprayed dispersants on Deepwater Horizon oil before it reached the marshes. What was the main environmental trade-off?',
            options: [
              'Less oil hit the shoreline, but more of it entered the water where plankton and larvae live',
              'The dispersants removed the oil from the Gulf completely, but they made the surface water warmer',
              'More oil was burned on the surface, but the smoke from the fires drifted inland over cities',
              'The marshes were protected, but the dispersants added phosphorus that caused a dead zone'
            ],
            correctAnswer: 0,
            explanation: 'Dispersants break oil into droplets that mix down into the water column, sparing birds and shorelines but exposing plankton, fish eggs and larvae. They do not remove oil from the ecosystem.',
          },
          {
            question: 'Why did oil from the Exxon Valdez persist on Alaska beaches for decades?',
            options: [
              'No cleanup of any kind was attempted on those beaches',
              'Its total volume was larger than any spill since',
              'Cold water slowed evaporation and microbial breakdown',
              'The oil was lighter and seeped deeper into the rock'
            ],
            correctAnswer: 2,
            explanation: 'Low temperatures slow both evaporation and the bacteria that degrade oil, so oil trapped under beach gravel lingered. Deepwater Horizon released about twelve times more oil, and the Alaska beaches were heavily cleaned.',
          },
          {
            question: 'Which change did the Oil Pollution Act of 1990 require in response to the Exxon Valdez spill?',
            options: [
              'A ban on all oil drilling in U.S. waters',
              'Double hulls on oil tankers in U.S. waters',
              'Dispersant use at every spill in U.S. waters',
              'A tax on gasoline sold in coastal U.S. states'
            ],
            correctAnswer: 1,
            explanation: 'The act phased in double-hulled tankers, so a tear in the outer hull does not release cargo, and required spill-response plans. It did not ban drilling or mandate dispersants.',
          },
        ],
      },
    },
    {
      id: 'apewp3-habitats',
      type: 'text' as const,
      content: `## Oil in Marshes, Mangroves and Reefs

Coastal wetlands and reefs are where oil does its longest-lasting damage (CED 8.2, 8.4).

| Habitat | How oil harms it | Why it matters |
|---|---|---|
| **Salt marshes** | Oil coats marsh grass and kills the roots that hold the soil | Dead marsh edges erode into open water, so the marsh loses its flood and storm protection |
| **Mangroves** | Oil coats the above-ground breathing roots, so the trees suffocate | Mangroves are nursery habitat for fish and buffer coasts from storm surge |
| **Coral reefs** | Oil and dispersed droplets are toxic to coral larvae; sediment smothers polyps | Reefs need clear, clean water for the photosynthetic algae living in coral tissue |

Cleanup in these habitats is especially hard: trampling and digging can do more damage than the oil, so responders often protect them with booms and then let natural breakdown work.`,
    },
    {
      id: 'apewp3-thermal',
      type: 'text' as const,
      content: `## Cooling Systems and Thermal Shock

Steam power plants (coal, gas and nuclear) must condense their steam with cooling water. There are two basic designs:

| | **Once-through cooling** | **Closed-loop cooling (cooling tower)** |
|---|---|---|
| How it works | Draws river, lake or ocean water through the condenser and returns it warmer | Recirculates the same water; heat leaves through evaporation in a tower |
| Water withdrawn | Very large | Far less, often more than 90% less |
| Water consumed (lost by evaporation) | Small | Larger, because the tower evaporates water |
| Effect on the water body | Warm plume lowers DO; intake screens trap adult fish and suck in eggs and larvae | Little heat added to the river |
| Cost | Cheaper to build | More expensive; uses some of the plant's power |

**Thermal shock** is harm from a **sudden** temperature change. Fish that gather in a warm plume in winter can die of cold shock if the plant shuts down. In Florida, manatees cluster at power-plant outflows in winter, so utilities plan for their warm water when plants close.

### Worked Example: Mixing a Warm Discharge (illustrative data)

A river flowing at **50 m³/s** and **18 °C** receives a discharge of **10 m³/s** at **30 °C**. Once fully mixed, the temperature is a flow-weighted average:

$$T_{\\text{mix}} = \\frac{(50 \\times 18) + (10 \\times 30)}{50 + 10} = \\frac{900 + 300}{60} = 20\\ \\text{°C}$$

A 2 °C rise sounds small, but near the outfall, before mixing, fish meet water close to 30 °C, where saturated water holds only about 7.6 mg/L of oxygen.

## Measuring Sediment

| Measure | How it is taken | What it tells you |
|---|---|---|
| **Turbidity** | A meter shines light through a sample and reads how much is scattered (units: NTU) | How cloudy the water is |
| **Secchi depth** | A black-and-white disk is lowered until it disappears | How far light penetrates; a shallower reading means murkier water |
| **Total suspended solids** | A sample is filtered, dried and weighed (mg/L) | Mass of sediment carried; times flow gives the sediment load |

Sediment does more than cloud water. Soil particles carry **attached phosphorus and pesticides** into streams, and dams trap sediment that would otherwise rebuild deltas and beaches downstream.`,
    },
    {
      id: 'apewp3-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only, without units or commas.

**1)** A spill releases 50,000 barrels of crude oil. How many gallons is that? (1 barrel = 42 gallons)

**2)** A river flowing at 90 m³/s and 16 °C receives a 10 m³/s discharge at 26 °C. What is the fully mixed temperature, in °C?

**3)** Using the August 2010 table, what percent of the Deepwater Horizon oil was captured, burned or skimmed?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2100000', '17', '25'],
        hint1: 'Multiply barrels by 42.',
        hint2: 'Weighted average: (90 × 16 + 10 × 26) ÷ (90 + 10).',
        hint3: 'Add the three rows where people physically removed oil.',
        explanation: '1) 50,000 × 42 = 2,100,000 gallons. 2) (1,440 + 260) ÷ 100 = 17 °C. 3) 17 + 5 + 3 = 25%.',
      },
    },
    {
      id: 'apewp3-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A utility must replace once-through cooling at a river plant. Which statement correctly compares cooling towers with once-through cooling?',
            options: [
              'Towers add more heat to the river, but they protect fish at the intake',
              'Towers withdraw more water but return it to the river at a cooler level',
              'Towers remove the need for any water, but they release more $CO_{2}$',
              'Towers withdraw less water and add less heat, but evaporate more of it'
            ],
            correctAnswer: 3,
            explanation: 'Closed-loop towers recirculate water, so withdrawals and heat discharge fall sharply and fewer fish are drawn into the intake. The cost is higher water consumption by evaporation and a higher building cost.',
          },
          {
            question: 'Fish in a power-plant outflow die suddenly during a January shutdown. Which term describes this?',
            options: [
              'Eutrophication',
              'Bioaccumulation',
              'Stratification',
              'Thermal shock'
            ],
            correctAnswer: 3,
            explanation: 'Thermal shock is harm from a sudden temperature change; fish acclimated to the warm plume cannot adjust when the discharge stops. The other terms describe nutrient enrichment, toxin build-up and lake layering.',
          },
          {
            question: 'Secchi depth in a reservoir drops from 3.0 m to 0.8 m after upstream forest clearing. Which effect on the reservoir is most likely?',
            options: [
              'Producers decline, since less light reaches deeper water',
              'Algae increase, since murky water holds more light energy',
              'Dissolved oxygen rises, since sediment releases oxygen gas',
              'Water temperature falls, since sediment absorbs no sunlight'
            ],
            correctAnswer: 0,
            explanation: 'A shallower Secchi reading means suspended sediment blocks light, so rooted plants and algae below the surface photosynthesize less. Sediment does not release oxygen, and dark particles absorb sunlight and can warm the surface water.',
          },
        ],
      },
    },
    {
      id: 'apewp3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Idea | Key fact |
|---|---|
| Exxon Valdez (1989) | About 11 million gallons in cold Alaska water; led to the Oil Pollution Act of 1990 and double hulls |
| Deepwater Horizon (2010) | About 3.2 million barrels (134 million gallons) from a seafloor well over 87 days |
| Units | 1 barrel = 42 gallons |
| Cleanup | Booms, skimmers, sorbents, dispersants, burning, bioremediation; each has a cost; most oil is never recovered |
| Wetlands and reefs | Oil kills marsh roots and suffocates mangroves; sediment and oil harm corals |
| Cooling | Once-through: big withdrawals and warm plume; towers: less withdrawal, more evaporation |
| Thermal shock | Harm from a sudden temperature change |
| Mixing | Flow-weighted average temperature |
| Sediment | Measured as turbidity, Secchi depth and suspended solids; carries attached P and pesticides |

**Next:** Part 4 follows chemicals that do not break down, through case studies of mercury, PCBs, DDT and hormone mimics.`,
    },
  ],
},

// ───────────────────────── PART 4 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp4-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 4 of 7 — Persistent Toxins: Case Studies**

---

| Section |
|---------|
| 📖 Minamata: Mercury in a Fishing Town |
| PCBs in the Great Lakes and the Hudson |
| Worked Example: A PCB Food Web |
| DDT, Eagles and a Global Treaty |
| Global Distillation and Hormone Mimics |
| Worked Example: How Much Fish Is Safe? |

> 🔑 **Key Concept:** The definitions of endocrine disruptors, POPs, bioaccumulation and biomagnification, and the mercury and DDT basics, are covered in Water Resources, Part 4. This part tests those ideas against **real cases**: what happened, how the cause was traced, what policy followed, and how fish advisories turn concentrations into safe meal limits (CED 8.3, 8.7, 8.8).`,
    },
    {
      id: 'apewp4-minamata',
      type: 'text' as const,
      content: `## 📖 Minamata: Mercury in a Fishing Town

| Stage | What happened |
|---|---|
| **1932–1968** | A chemical factory in Minamata, Japan, released wastewater containing **methylmercury** into Minamata Bay |
| **Early 1950s** | Cats in fishing villages began convulsing and dying; seabirds fell from the sky |
| **1956** | Doctors officially reported a new nerve disease among fishing families: numbness, loss of coordination, tremors, and damage to speech, sight and hearing |
| **Late 1950s** | Babies were born with severe disabilities even when their mothers showed few symptoms, because methylmercury **crosses the placenta** |
| **1968** | The Japanese government officially linked the disease to the factory's discharge |
| **2013** | The **Minamata Convention on Mercury**, a global treaty to cut mercury use and emissions, was signed |

Why the town was hit so hard: methylmercury **biomagnified** from plankton to fish and shellfish, and fishing families ate seafood at almost every meal. More than 2,000 people were officially recognized as patients, and many more were affected.

**Mercury today.** Factories no longer dump methylmercury directly. Most human emissions now come from **small-scale gold mining** (miners use mercury to separate gold) and **burning coal**. Inorganic mercury falls into lakes and wetlands, where **bacteria in low-oxygen sediments** convert it to methylmercury, the form that enters food webs.

## PCBs in the Great Lakes and the Hudson

**PCBs** (polychlorinated biphenyls) were used as insulating fluids in electrical transformers and capacitors because they do not burn or break down, the same property that makes them persistent. U.S. production ended in **1979**.

- From the late 1940s to the late 1970s, two capacitor plants on the **Hudson River** in New York released an estimated **1.3 million pounds** of PCBs. The river became a Superfund site, and contaminated sediment was dredged out from 2009 to 2015.
- In the **Great Lakes**, PCBs still sit in bottom sediments. States issue **fish consumption advisories** that limit meals of large, fatty, long-lived fish such as lake trout and salmon.

### Worked Example: A PCB Food Web

PCB concentrations in a Great Lakes food web (rounded from a classic study; treat as illustrative):

| Level | PCBs (ppm) |
|---|---|
| Lake water | 0.000002 |
| Phytoplankton | 0.0025 |
| Zooplankton | 0.12 |
| Rainbow smelt | 1.0 |
| Lake trout | 4.8 |
| Herring gull eggs | 124 |

**Factor from water to gull eggs:**
$$\\frac{124}{0.000002} = \\frac{1.24 \\times 10^{2}}{2 \\times 10^{-6}} = 0.62 \\times 10^{8} = 6.2 \\times 10^{7}$$

The eggs carry about **62 million times** the concentration in the water. The gulls are at the top of a long aquatic chain, and each step concentrates the fat-soluble PCBs again.`,
    },
    {
      id: 'apewp4-q-cases',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In Minamata, babies were born with nerve damage even when their mothers seemed healthy. What best explains this?',
            options: [
              'Mothers stopped eating fish while pregnant, so the babies were malnourished',
              'Mercury in the bay water was absorbed through the babies\' skin at birth',
              'Mercury crosses the placenta, and a growing brain is most sensitive',
              'The factory released a different toxin only during their mothers\' pregnancies'
            ],
            correctAnswer: 2,
            explanation: 'Methylmercury passes from the mother\'s blood to the fetus, and a developing nervous system is damaged by doses that cause few symptoms in an adult. That is why fish advisories target pregnant women and young children.',
          },
          {
            question: 'The same property made PCBs useful in transformers and harmful in rivers. Which property?',
            options: [
              'They dissolve readily in water',
              'They resist burning and breakdown',
              'They evaporate quickly into the air',
              'They are made from natural plant oils'
            ],
            correctAnswer: 1,
            explanation: 'PCBs are chemically stable, so they do not burn in electrical equipment and do not break down in sediments or bodies. They are fat-soluble rather than water-soluble, which is why they build up in fish.',
          },
          {
            question: 'Inorganic mercury from coal plants falls on a remote lake. In what form does it become most dangerous to fish-eaters, and how?',
            options: [
              'As mercury vapor released from the surface during summer',
              'As methylmercury made by bacteria in low-oxygen sediments',
              'As mercury dust absorbed directly by shoreline trees',
              'As acid rain formed when mercury reacts with water'
            ],
            correctAnswer: 1,
            explanation: 'Bacteria in oxygen-poor sediments and wetlands convert inorganic mercury into methylmercury, which is absorbed by organisms and biomagnifies up the food chain. Mercury does not form acid rain; sulfur and nitrogen oxides do.',
          },
        ],
      },
    },
    {
      id: 'apewp4-ddt',
      type: 'text' as const,
      content: `## DDT, Eagles and a Global Treaty

**The recovery data.** U.S. Fish and Wildlife Service estimates of bald eagle nesting pairs in the lower 48 states:

| Year | Nesting pairs | Event |
|---|---|---|
| 1963 | About 417 | Low point; DDT in wide use |
| 1972 | | U.S. bans most uses of DDT |
| 2006 | About 9,800 | Recovery; eagle removed from the endangered list in 2007 |

$$\\frac{9{,}800}{417} \\approx 23$$

The population grew about **23-fold**. The DDT ban removed the main cause of eggshell thinning, while **Endangered Species Act** protection of nests and habitat also helped: real recoveries usually have more than one cause.

**The global response.** The **Stockholm Convention on Persistent Organic Pollutants** (adopted 2001, in force 2004) began with twelve POPs, including DDT, PCBs, dioxins and several pesticides, and has added more since. It contains a deliberate exception: countries may still use **DDT indoors to control malaria-carrying mosquitoes**, because for some regions the disease risk outweighs the environmental risk. (The United States signed the treaty but has not ratified it.)

## Global Distillation and Hormone Mimics

**Global distillation (the "grasshopper effect").** Many POPs evaporate in warm regions, travel on winds and **condense in cold regions**, hopping poleward over years. Arctic food webs are long and rich in fat (seal blubber), so some Arctic communities that eat traditional foods carry some of the highest PCB levels measured in people, far from any factory or farm that used them.

**Endocrine disruptors in the field:**

| Case | Finding |
|---|---|
| **Lake Apopka, Florida** | After a 1980 pesticide spill (dicofol contaminated with DDT), young male alligators had abnormal sex-hormone levels and reproductive organs, and egg hatching fell |
| **Rivers below wastewater outfalls** | Male fish producing egg proteins or carrying eggs in their testes ("intersex" fish), linked to estrogen-like chemicals, including synthetic hormones from medications |

These cases show why endocrine disruptors are hard to regulate: effects can appear at very low doses, show up in the **next generation**, and come from mixtures rather than one chemical.`,
    },
    {
      id: 'apewp4-safe',
      type: 'text' as const,
      content: `## Worked Example: How Much Fish Is Safe?

Health agencies set a **reference dose**, the daily intake judged safe over a lifetime. For methylmercury, the U.S. EPA reference dose is **0.1 micrograms (µg) per kilogram of body mass per day**. In fish, 1 ppm is the same as 1 µg of mercury per gram of fish.

A **60 kg** adult chooses between two fish (illustrative mercury levels):

1. **Safe weekly intake:** $0.1\\ \\frac{\\mu\\text{g}}{\\text{kg} \\cdot \\text{day}} \\times 60\\ \\text{kg} \\times 7\\ \\text{days} = 42\\ \\mu\\text{g}$ per week
2. **Mercury in one 120 g serving of tuna at 0.35 ppm:** $120\\ \\text{g} \\times 0.35\\ \\frac{\\mu\\text{g}}{g} = 42\\ \\mu\\text{g}$
3. **Mercury in one 120 g serving of salmon at 0.02 ppm:** $120 \\times 0.02 = 2.4\\ \\mu\\text{g}$

**Interpretation:** one tuna serving uses the whole week's allowance, while the same person could eat salmon at every meal. That is why advisories favor small, short-lived fish low on the food chain over large predators.`,
    },
    {
      id: 'apewp4-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only, without units or commas.

**1)** Using the PCB food-web table, by what factor does the concentration increase from rainbow smelt to lake trout?

**2)** Using the EPA reference dose of 0.1 µg per kg per day, what is the safe daily methylmercury intake, in µg, for a 50 kg teenager?

**3)** How many micrograms of mercury are in a 150 g serving of swordfish at 0.4 ppm?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.8', '5', '60'],
        hint1: 'Divide the lake trout value by the smelt value.',
        hint2: 'Multiply 0.1 by the body mass in kilograms.',
        hint3: '0.4 ppm means 0.4 µg of mercury per gram of fish.',
        explanation: '1) 4.8 ÷ 1.0 = 4.8. 2) 0.1 × 50 = 5 µg per day. 3) 150 g × 0.4 µg/g = 60 µg, more than the teenager\'s safe intake for a whole week (35 µg).',
      },
    },
    {
      id: 'apewp4-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An Arctic village that never used PCBs has residents with high PCB levels in their blood. Which explanation is best?',
            options: [
              'Arctic animals produce PCBs in their blubber to survive the cold, so people eating them take in the chemical',
              'PCBs formed naturally in Arctic sea ice as it melted each summer and then entered the drinking water supply',
              'Residents absorbed PCBs from cold air during the long winter, since PCBs dissolve most readily in cold water',
              'PCBs evaporated in warmer regions and condensed in the cold Arctic, then biomagnified in fatty marine food webs'
            ],
            correctAnswer: 3,
            explanation: 'Global distillation carries POPs poleward through repeated evaporation and condensation, and long, fat-rich Arctic food webs concentrate them in top predators eaten by people. PCBs are synthetic, so neither ice nor animals make them.',
          },
          {
            question: 'Why does the Stockholm Convention still allow some countries to use DDT?',
            options: [
              'To control mosquitoes that spread malaria',
              'To restore populations of fish-eating birds',
              'To replace PCBs in electrical transformers',
              'To fertilize crops in nutrient-poor tropical soils'
            ],
            correctAnswer: 0,
            explanation: 'The treaty exempts indoor DDT spraying against malaria-carrying mosquitoes, weighing human health against environmental harm. DDT is an insecticide, not a fertilizer or electrical fluid, and it harmed fish-eating birds.',
          },
          {
            question: 'Bald eagle pairs rose from about 417 in 1963 to about 9,800 in 2006. Which conclusion is best supported?',
            options: [
              'The DDT ban alone caused the entire recovery',
              'Eagles adapted to DDT through natural selection',
              'Removing DDT and protecting nests both likely helped',
              'Eagles recovered because the DDT biomagnified less'
            ],
            correctAnswer: 2,
            explanation: 'The recovery followed both the 1972 DDT ban and legal protection of nests and habitat, so attributing it to one cause overstates the data. DDT persisted in the environment for years after the ban, and no evidence shows eagles evolved resistance.',
          },
        ],
      },
    },
    {
      id: 'apewp4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Idea | Key fact |
|---|---|
| Minamata (1932–1968 discharges) | Factory methylmercury biomagnified in seafood; nerve damage, including in babies; Minamata Convention 2013 |
| Mercury today | Small-scale gold mining and coal; bacteria in low-oxygen sediments make methylmercury |
| PCBs | Stable transformer fluids banned in 1979; Hudson River Superfund dredging; Great Lakes fish advisories |
| PCB food web | Water to gull eggs ≈ 62 million-fold |
| DDT and eagles | About 417 pairs (1963) to about 9,800 (2006); ban plus habitat protection |
| Stockholm Convention | 2001 POPs treaty; DDT allowed for malaria control |
| Global distillation | POPs move poleward and concentrate in Arctic food webs |
| Endocrine disruptors | Lake Apopka alligators; intersex fish below outfalls |
| Safe servings | Reference dose × body mass = safe intake; fish ppm = µg per g |

**Next:** Part 5 asks how scientists decide how much of a toxin is too much: dose-response curves, safety margins and risk assessment.`,
    },
  ],
},

// ───────────────────────── PART 5 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp5-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 5 of 7 — Dose, Response and Risk**

---

| Section |
|---------|
| 📖 "The Dose Makes the Poison" |
| Comparing Two Dose-Response Curves |
| LC50: Toxicity Tests for Water |
| Acute, Chronic and Mixed Exposures |
| From Toxicity to Risk |
| Worked Example: Is This Well Water Safe? |

> 🔑 **Key Concept:** The definitions of LD50, ED50 and threshold, and how to read one LD50 from a table, are covered in Water Resources, Part 4. This part goes further: comparing whole curves, the aquatic **LC50** test, safety margins, chemical mixtures, and the **risk assessment** steps that turn a lab result into a drinking-water decision (CED 8.12, 8.13, 8.14).`,
    },
    {
      id: 'apewp5-curves',
      type: 'text' as const,
      content: `## 📖 "The Dose Makes the Poison"

Nearly any substance is harmful at a high enough dose, and many are harmless at a low one. Approximate oral LD50 values in rats show the range:

| Substance | Approximate LD50 (mg/kg) | How much for a 70 kg person, at the same mg/kg |
|---|---|---|
| Table salt | 3,000 | About 210 g |
| Caffeine | 190 | About 13 g |
| Nicotine | 50 | About 3.5 g |

The right-hand column multiplies the LD50 by 70 kg. It is only a rough scale: species differ, which is why lab results carry **uncertainty** when applied to people.

## Comparing Two Dose-Response Curves

The LD50 is one point on a curve. The **shape** of the whole curve matters too. Percent of test fish showing a harmful effect (illustrative data):

| Dose (mg/kg) | 0 | 5 | 10 | 20 | 40 | 80 |
|---|---|---|---|---|---|---|
| Chemical P (%) | 0 | 0 | 10 | 50 | 90 | 100 |
| Chemical Q (%) | 0 | 15 | 25 | 40 | 55 | 70 |

**Reading the curves:**

1. **ED50:** P reaches 50% at **20 mg/kg**. Q passes 50% between 20 and 40 mg/kg, so its ED50 is about **30–35 mg/kg**. At the 50% point, P is the more potent chemical.
2. **Threshold:** P has none of its effect at 5 mg/kg, so it has a **threshold** between 5 and 10 mg/kg. Q already affects 15% at 5 mg/kg, so it shows **no clear threshold**.
3. **Slope:** P's curve is steep (10% to 90% between 10 and 40 mg/kg), so a small increase in dose sharply raises harm. Q's is shallow.
4. **Low doses:** at 5 mg/kg, Q harms more fish than P. A chemical with a **higher** ED50 can still be the bigger concern at the low doses found in the environment.

Regulators often assume that **carcinogens have no threshold**: any dose carries some risk, scaled to the dose. For many other toxins they assume a threshold and set limits below it.

### Margin of safety

For a drug or pesticide, compare the dose that does the intended job with the dose that kills:
$$\\text{margin of safety} = \\frac{\\text{LD50}}{\\text{ED50}}$$
A sedative with ED50 = 2 mg/kg and LD50 = 200 mg/kg has a margin of $200 \\div 2 = 100$. A pesticide with ED50 (for killing the target insect) close to the LD50 for birds would be dangerous to use near wildlife.`,
    },
    {
      id: 'apewp5-q-curves',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Using the table above, why might Chemical Q be the greater concern in a stream where exposures are low?',
            options: [
              'Q has a lower ED50 than P',
              'Q reaches 100% at 80 mg/kg',
              'Q harms some fish at 5 mg/kg',
              'Q has the steeper curve overall'
            ],
            correctAnswer: 2,
            explanation: 'Q affects 15% of fish at the lowest tested dose, where P has no effect, and it shows no clear threshold. Q actually has the higher ED50 and the shallower curve, and it reaches only 70% at 80 mg/kg.',
          },
          {
            question: 'Drug X has an ED50 of 10 mg/kg and an LD50 of 50 mg/kg. Drug Y has an ED50 of 10 mg/kg and an LD50 of 1,000 mg/kg. Which statement is correct?',
            options: [
              'X is safer, as its margin of safety is 5',
              'Y is safer, as its margin of safety is 100',
              'X and Y are equally safe, with one ED50',
              'Y is safer, as its margin of safety is 1,000'
            ],
            correctAnswer: 1,
            explanation: 'Margin of safety is LD50 ÷ ED50: 50 ÷ 10 = 5 for X and 1,000 ÷ 10 = 100 for Y. A larger margin means the effective dose is far below the lethal dose.',
          },
          {
            question: 'Why do regulators often assume a cancer-causing chemical has no threshold?',
            options: [
              'Lab animals never get cancer from any dose',
              'Cancer always appears within days of exposure',
              'Carcinogens are harmless below the ED50 value',
              'Even a tiny dose may add some risk'
            ],
            correctAnswer: 3,
            explanation: 'Because damage to DNA can in principle start from a small exposure, carcinogens are usually modeled with risk rising from zero dose. Cancers often appear years after exposure, not days.',
          },
        ],
      },
    },
    {
      id: 'apewp5-lc50',
      type: 'text' as const,
      content: `## LC50: Toxicity Tests for Water

For aquatic organisms the dose is the **concentration in the water**, not a mass swallowed. The **LC50** (lethal concentration 50%) is the concentration that kills half the test organisms over a set time, often **96 hours** for fish or 48 hours for water fleas (*Daphnia*).

96-hour test of an industrial solvent on minnows, 20 fish per tank (illustrative data):

| Concentration (mg/L) | 0 | 1 | 2 | 4 | 8 | 16 |
|---|---|---|---|---|---|---|
| Fish dead after 96 h | 0 | 0 | 2 | 6 | 14 | 20 |
| Percent dead | 0 | 0 | 10 | 30 | 70 | 100 |

The LC50 lies between 4 mg/L (30%) and 8 mg/L (70%). Since 50% is halfway between 30% and 70%, the LC50 is about $\\frac{4 + 8}{2} = 6$ mg/L. The **0 mg/L tank is the control**: it shows that handling and tank conditions alone did not kill fish.

Discharge permits often require that a pipe's effluent be **diluted well below** the LC50 for local species, because an LC50 still kills half the population and sublethal harm (slower growth, fewer eggs) begins at lower concentrations.

## Acute, Chronic and Mixed Exposures

| Term | Meaning | Water example |
|---|---|---|
| **Acute** | A large dose over a short time, with effects soon after | A pesticide spill that kills fish within hours |
| **Chronic** | Small doses over a long time, with effects that build slowly | Years of drinking water with low levels of arsenic |
| **Additive** | Combined effect equals the sum of the separate effects | Two similar pesticides in one stream |
| **Synergistic** | Combined effect is **greater** than the sum | Smoking plus asbestos exposure raises lung-cancer risk far more than either alone |
| **Antagonistic** | One substance **reduces** the effect of another | Selenium in the diet can lessen some effects of mercury |

Standard tests examine one chemical at a time, but real streams carry mixtures. Synergism is one reason safe limits include extra caution.`,
    },
    {
      id: 'apewp5-dd',
      type: 'dropdown-select' as const,
      content: `**Classify the Exposure** 🔽

Choose the term that fits each situation.`,
      exercise: {
        dropdowns: [
          { label: 'A truck spills a herbicide into a creek, and fish die by evening:', options: ['Acute toxicity', 'Chronic toxicity', 'Antagonism', 'Synergism'] },
          { label: 'Two chemicals that each kill 10% of test fish together kill 60%:', options: ['Acute toxicity', 'Chronic toxicity', 'Antagonism', 'Synergism'] },
          { label: 'Villagers drink well water with low arsenic for 20 years and develop skin lesions:', options: ['Acute toxicity', 'Chronic toxicity', 'Antagonism', 'Synergism'] },
          { label: 'Adding a second chemical cuts the deaths caused by the first from 40% to 10%:', options: ['Acute toxicity', 'Chronic toxicity', 'Antagonism', 'Synergism'] },
        ],
        correctAnswers: ['Acute toxicity', 'Synergism', 'Chronic toxicity', 'Antagonism'],
        hint1: 'Acute means a short, large exposure; chronic means long and low.',
        hint2: 'If the combination is worse than the sum, it is synergism; if it is milder, it is antagonism.',
        hint3: '10% + 10% would be 20% if additive, so 60% is far more than the sum.',
        explanation: 'The spill is acute toxicity and the 20 years of arsenic exposure is chronic. A combined 60% far exceeds the 20% expected from adding the two effects, which is synergism, and a second chemical that lowers deaths is antagonism.',
      },
    },
    {
      id: 'apewp5-risk',
      type: 'text' as const,
      content: `## From Toxicity to Risk

A toxic chemical is a **hazard**. **Risk** depends on how toxic it is **and** how much people are actually exposed to. Agencies follow four steps:

| Step | Question it answers | Example for a solvent found in a town's wells |
|---|---|---|
| 1. **Hazard identification** | Can this chemical cause harm at all? | Animal studies and worker records link it to liver damage |
| 2. **Dose-response assessment** | How does harm change with dose? | Find the threshold, then divide by safety factors to set a **reference dose** |
| 3. **Exposure assessment** | How much do people actually take in? | Measure concentrations, how much water people drink, and for how long |
| 4. **Risk characterization** | What is the likely harm, and how certain is it? | Compare exposure with the reference dose and state the uncertainties |

Then comes **risk management**, a policy decision that also weighs cost, technology and fairness: set a drinking-water limit, install treatment, or supply other water.

**Why cause and effect is hard to prove** (CED 8.14; the core examples are in Water Resources, Part 5):

- **Toxicology** doses lab animals in controlled experiments, so it can show cause, but results must be extrapolated to people.
- **Epidemiology** studies patterns of disease in human populations. It deals with real people but finds **correlations**, which can be confounded by smoking, diet, income or other exposures.
- **Latency:** some diseases appear decades after exposure (mesothelioma typically 20 or more years after asbestos), so the cause may be long gone.
- People are exposed to **many chemicals at once**, and deliberately dosing people with a suspected toxin would be unethical.

## Worked Example: Is This Well Water Safe?

The daily dose from drinking water, in mg per kg of body mass:
$$\\text{dose} = \\frac{\\text{concentration (mg/L)} \\times \\text{water drunk (L/day)}}{\\text{body mass (kg)}}$$

A well contains a solvent at **0.35 mg/L**. An adult of **70 kg** drinks **2 L/day**. The reference dose is **0.005 mg/kg per day** (illustrative data).

1. Dose: $\\frac{0.35 \\times 2}{70} = \\frac{0.70}{70} = 0.01$ mg/kg per day
2. **Hazard quotient** = dose ÷ reference dose $= 0.01 \\div 0.005 = 2$
3. A hazard quotient **above 1** means exposure exceeds the level judged safe, so the town should act: treat the water or switch sources.

> 🔑 **AP Connection:** In FRQ calculations, carry the units: (mg/L × L/day) ÷ kg gives mg/kg per day. The units cancel only if every number is in the right form, which is how graders check your setup.`,
    },
    {
      id: 'apewp5-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only, without units or commas.

**1)** A 20 kg child drinks 1 L/day of water containing 0.1 mg/L of a contaminant. What is the child's daily dose, in mg/kg per day?

**2)** The contaminant's reference dose is 0.01 mg/kg per day. What is the child's hazard quotient?

**3)** A pesticide's LD50 is 300 mg/kg and its ED50 is 15 mg/kg. What is its margin of safety?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.005', '0.5', '20'],
        hint1: 'Multiply concentration by liters per day, then divide by body mass.',
        hint2: 'Hazard quotient = dose ÷ reference dose.',
        hint3: 'Margin of safety = LD50 ÷ ED50.',
        explanation: '1) (0.1 × 1) ÷ 20 = 0.005 mg/kg per day. 2) 0.005 ÷ 0.01 = 0.5, below 1, so this exposure is within the safe level. 3) 300 ÷ 15 = 20.',
      },
    },
    {
      id: 'apewp5-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A study finds that towns with more farm wells have higher rates of a rare cancer. Why does this alone not prove that well water causes the cancer?',
            options: [
              'Farm areas may also differ in jobs, pesticide use and income',
              'Cancer is never linked to any chemical found in groundwater',
              'Farm wells are tested more often than city water supplies',
              'Studies of human populations cannot measure cancer rates'
            ],
            correctAnswer: 0,
            explanation: 'Epidemiology finds correlations, and other factors that differ between towns (confounders) could explain the pattern. Showing cause needs supporting evidence such as measured exposures, dose-response patterns and toxicology.',
          },
          {
            question: 'In a 96-hour test, the control tank with no added chemical has 30% of its fish die. What should the researchers conclude?',
            options: [
              'Something besides the chemical killed fish',
              'The LC50 is lower than the tested range',
              'The chemical is more toxic than expected',
              'The fish developed a tolerance to the chemical'
            ],
            correctAnswer: 0,
            explanation: 'The control shows deaths from handling, disease or tank conditions, so deaths in the treated tanks cannot be blamed on the chemical alone. The test should be repeated with healthy conditions in the control.',
          },
          {
            question: 'In which step of risk assessment do scientists measure how much contaminated water residents actually drink and for how long?',
            options: [
              'Hazard identification',
              'Dose-response assessment',
              'Exposure assessment',
              'Risk characterization'
            ],
            correctAnswer: 2,
            explanation: 'Exposure assessment estimates how much of the chemical people take in, by what route and for how long. Hazard identification asks whether harm is possible, dose-response relates dose to harm, and risk characterization combines them.',
          },
        ],
      },
    },
    {
      id: 'apewp5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Idea | Key fact |
|---|---|
| Dose makes the poison | Even salt has an LD50; compare substances in mg/kg |
| Curve shape | Threshold vs no threshold; steep vs shallow slope; low-dose effects can matter most |
| Carcinogens | Usually modeled with no threshold |
| Margin of safety | LD50 ÷ ED50; larger is safer |
| LC50 | Concentration in water killing 50% in a set time (often 96 h for fish); needs a control |
| Acute vs chronic | Large and short vs small and long |
| Interactions | Additive, synergistic (more than the sum), antagonistic (less) |
| Risk assessment | Hazard identification → dose-response → exposure → risk characterization |
| Dose from water | mg/L × L/day ÷ kg; hazard quotient above 1 = concern |
| Proving cause | Toxicology shows cause in animals; epidemiology shows correlation in people |

**Next:** Part 6 follows sewage beyond the treatment plant, into septic systems, combined sewers and the laws that protect water.`,
    },
  ],
},

// ───────────────────────── PART 6 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp6-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 6 of 7 — Sewage, Septic Systems and Water Law**

---

| Section |
|---------|
| 📖 When the Sewer Overflows |
| Septic Systems: Treatment in the Backyard |
| Waterborne Pathogens and Indicator Bacteria |
| Worked Example: Is the Beach Open? |
| The Clean Water Act and the Safe Drinking Water Act |
| Case Study: Flint, Michigan |

> 🔑 **Key Concept:** The stages inside a treatment plant (primary, secondary, tertiary, disinfection) and the CED's disease list are covered in Water Resources, Part 5. This part looks at what happens **outside** the plant: overflowing sewers in storms, the septic systems that serve rural homes, how health officials test for pathogens, and the two federal laws that set the rules (CED 8.11, 8.14, 8.15).`,
    },
    {
      id: 'apewp6-cso',
      type: 'text' as const,
      content: `## 📖 When the Sewer Overflows

Many older cities, mostly in the Northeast and Great Lakes region, built **combined sewer systems**: one pipe carries both household sewage and storm runoff to the treatment plant. In dry weather this works. In heavy rain, the flow exceeds what the pipes and plant can handle, and the system is designed to spill the excess, **untreated sewage mixed with stormwater**, straight into the nearest river or harbor. This is a **combined sewer overflow (CSO)**.

| Fix | How it works | Drawback |
|---|---|---|
| **Separate the pipes** | Build a second pipe so storm runoff never reaches the sewage line | Very expensive; requires digging up city streets |
| **Storage tunnels** | Huge underground tunnels hold the overflow until the plant can treat it after the storm | Cost in the billions for a large city |
| **Green infrastructure** | Rain gardens, green roofs and permeable pavement soak up rain before it enters the sewer | Each project handles only a small area |

**What happens to the sludge?** The solids removed at the plant are often digested by **anaerobic bacteria**, which produce methane-rich **biogas** that can power the plant. Treated sludge (**biosolids**) may be spread on farmland as fertilizer if it meets limits for pathogens and heavy metals; otherwise it is landfilled or incinerated.

### Worked Example: How Much Overflow? (illustrative data)

A storm drops **2 cm** of rain on a **5 km²** combined-sewer district, and **60%** of the rain runs off into the sewers.

1. Convert units: $2\\ \\text{cm} = 0.02\\ \\text{m}$ and $5\\ \\text{km}^2 = 5 \\times 10^{6}\\ \\text{m}^2$
2. Rain volume: $0.02\\ \\text{m} \\times 5 \\times 10^{6}\\ \\text{m}^2 = 1 \\times 10^{5}\\ \\text{m}^3$
3. Runoff: $1 \\times 10^{5} \\times 0.60 = 6 \\times 10^{4}\\ \\text{m}^3 = 60{,}000\\ \\text{m}^3$
4. If the plant can accept **20,000 m³** during the storm, the overflow is $60{,}000 - 20{,}000 = 40{,}000\\ \\text{m}^3$ of untreated, diluted sewage.

## Septic Systems: Treatment in the Backyard

About one in five U.S. homes, mostly rural, is not connected to a sewer. They use a **septic system**:

| Part | What happens |
|---|---|
| **Septic tank** (buried) | Solids settle to the bottom as sludge, grease floats as scum, and **anaerobic bacteria** partly digest the waste |
| **Drain field** (leach field) | Liquid flows through perforated pipes into gravel trenches and soaks into the soil |
| **Soil** | Filters particles; soil microbes break down organic matter and kill many pathogens |
| **Maintenance** | The tank must be pumped every few years, or sludge clogs the drain field |

A septic system fails when the soil cannot finish the treatment: a **high water table**, **saturated or very sandy soil**, an overloaded or unpumped tank, or a drain field too close to a well or lake. Then **nitrate and pathogens reach groundwater**, and nutrients seep into nearby lakes. Dense lakeside cottages on septic systems are a classic nonpoint source of lake phosphorus.`,
    },
    {
      id: 'apewp6-q-systems',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Swimming beaches in an older city close for two days after every heavy rain but stay open in dry weather. What is the most likely cause?',
            options: [
              'Rain washes fertilizer from city lawns',
              'Combined sewers release raw sewage',
              'Rain lowers the temperature of the lake',
              'Storms stir up oil from the lake bottom'
            ],
            correctAnswer: 1,
            explanation: 'In a combined system, heavy rain overloads the pipes and the overflow, sewage mixed with stormwater, enters the water, so pathogen levels spike after storms. Fertilizer causes algal growth, not a sudden health closure.',
          },
          {
            question: 'Which site is best suited for a septic drain field?',
            options: [
              'Sandy soil just above a shallow water table, near a well',
              'Thin soil over cracked limestone bedrock near a spring',
              'Waterlogged clay soil on the shore of a small lake',
              'Deep loam well above the water table and far from wells'
            ],
            correctAnswer: 3,
            explanation: 'A drain field needs enough unsaturated soil for filtering and microbial treatment before water reaches groundwater, plus distance from wells. Shallow water tables, saturated soil and cracked bedrock let pathogens and nitrate pass through untreated.',
          },
          {
            question: 'A treatment plant installs an anaerobic digester for its sludge. What useful product does the digester make?',
            options: [
              'Chlorine gas for disinfecting the final water',
              'Phosphate fertilizer free of any heavy metals',
              'Pure oxygen for the aeration tanks of the plant',
              'Methane-rich biogas that is burned for energy'
            ],
            correctAnswer: 3,
            explanation: 'Anaerobic bacteria break sludge down into methane-rich biogas, which plants burn to make heat and electricity. Biosolids can be used as fertilizer only if they pass limits for metals and pathogens, so they are not automatically free of metals.',
          },
        ],
      },
    },
    {
      id: 'apewp6-pathogens',
      type: 'text' as const,
      content: `## Waterborne Pathogens and Indicator Bacteria

| Disease | Pathogen type | Notes |
|---|---|---|
| **Cholera** | Bacterium | Severe watery diarrhea and dehydration; spreads where sewage reaches drinking water |
| **Typhoid fever** | Bacterium | High fever; spread through food or water contaminated with feces |
| **Dysentery** | Bacterium or amoeba | Bloody diarrhea; linked to untreated sewage in streams and rivers |
| **Giardiasis** | Protozoan | Diarrhea; a risk from drinking untreated stream water while hiking |
| **Cryptosporidiosis** | Protozoan | Its tough outer shell resists chlorine, so it must be filtered out |
| **Hepatitis A** | Virus | Liver infection spread by the fecal-oral route |

**Two landmark cases**

- **London, 1854.** Physician John Snow mapped cholera deaths and found them clustered around one public water pump on Broad Street. He persuaded local officials to remove the pump handle, and the outbreak, already waning, ended. His map is a founding example of **epidemiology**, decades before scientists identified the cholera bacterium.
- **Milwaukee, 1993.** *Cryptosporidium* passed through one of the city's water treatment plants, and an estimated **400,000 people** became ill, the largest documented waterborne outbreak in U.S. history. Utilities nationwide improved filtration and monitoring afterward.

**Indicator bacteria.** Testing water for every pathogen would be slow and expensive. Instead, labs test for **fecal coliform bacteria** or ***E. coli***, harmless gut bacteria that are always present in feces. Finding them means sewage or manure is present, so pathogens **may** be too.

| Water use | Typical standard |
|---|---|
| Drinking water | No coliform bacteria in a sample |
| Swimming (EPA recommended criterion) | A geometric mean of no more than about **126 *E. coli* per 100 mL** |

## Worked Example: Is the Beach Open?

A technician filters **10 mL** of lake water and grows **19** *E. coli* colonies on the plate. Counts are reported per 100 mL:
$$19\\ \\text{colonies} \\times \\frac{100\\ \\text{mL}}{10\\ \\text{mL}} = 190\\ \\text{per 100 mL}$$
That exceeds about 126 per 100 mL, so the beach would get an advisory until follow-up samples come back clean.`,
    },
    {
      id: 'apewp6-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only, without units or commas.

**1)** A storm drops 3 cm of rain on a 2 km² combined-sewer district, and half of it runs off into the sewers. How many cubic meters of runoff enter the sewers?

**2)** The treatment plant can accept 12,000 m³ during the storm. How many cubic meters overflow?

**3)** A 25 mL beach sample grows 40 *E. coli* colonies. What is the count per 100 mL?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['30000', '18000', '160'],
        hint1: 'Convert 3 cm to 0.03 m and 2 km² to 2,000,000 m², multiply, then take half.',
        hint2: 'Overflow = runoff − what the plant can accept.',
        hint3: '100 mL is four times 25 mL, so multiply the colony count by 4.',
        explanation: '1) 0.03 m × 2,000,000 m² = 60,000 m³ of rain, and half runs off: 30,000 m³. 2) 30,000 − 12,000 = 18,000 m³. 3) 40 × 4 = 160 per 100 mL, above the swimming guideline.',
      },
    },
    {
      id: 'apewp6-law',
      type: 'text' as const,
      content: `## The Clean Water Act and the Safe Drinking Water Act

By the late 1960s, some U.S. rivers were so polluted that the oily **Cuyahoga River** in Cleveland caught fire (1969, not for the first time). Congress responded with two laws that divide the work:

| | **Clean Water Act (1972)** | **Safe Drinking Water Act (1974)** |
|---|---|---|
| Protects | Rivers, lakes, wetlands and coastal waters (surface water) | Water delivered by **public water systems** to taps |
| Main tools | Discharge **permits** for point sources; federal grants that built sewage treatment plants; permits to fill wetlands | **Maximum contaminant levels (MCLs)** for contaminants, plus treatment and testing rules |
| Example standard | A factory's permit limits its BOD and metals | Nitrate MCL of 10 mg/L as N; arsenic MCL of 0.010 mg/L |
| Goal or gap | Goal of "fishable and swimmable" waters; weak on nonpoint runoff | Does **not** cover private household wells, which owners must test themselves |

## Case Study: Flint, Michigan

| Date | Event |
|---|---|
| **April 2014** | To save money, Flint switched its water source from treated Detroit water (from Lake Huron) to the **Flint River** |
| **2014–2015** | The new water was not treated with a **corrosion control** chemical, so it corroded the city's old lead service pipes |
| **2015** | Independent testing found high lead in tap water, and a local pediatrician showed the share of children with elevated blood lead had roughly doubled |
| **October 2015** | The city switched back to Detroit water; pipe replacement took years |

**Why it matters:** lead is a **neurotoxin**; health agencies state that **no safe blood-lead level** in children has been identified. Lead reached the tap not from the river itself but from **the pipes**, because the water chemistry changed. Flint is a majority-Black city with high poverty, and residents' complaints were dismissed for months, so it is also a central **environmental justice** case.

> 🔑 **AP Connection:** Match the law to the water. Pollution entering a **river** from a pipe is a Clean Water Act issue; contamination in water **from a public tap** is a Safe Drinking Water Act issue.`,
    },
    {
      id: 'apewp6-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why do labs test beach water for E. coli instead of for each disease-causing organism?',
            options: [
              'It signals feces, so pathogens may be present',
              'E. coli is the only pathogen found in sewage',
              'E. coli causes every waterborne disease',
              'Other pathogens cannot survive in lake water'
            ],
            correctAnswer: 0,
            explanation: 'Most E. coli strains are harmless gut bacteria that are always present in feces, so they are a cheap, reliable indicator that sewage or manure, and possibly pathogens, has entered the water. Testing for every pathogen would be slow and costly.',
          },
          {
            question: 'In Flint, where did most of the lead in residents\' tap water come from?',
            options: [
              'Industrial waste dumped directly into the Flint River',
              'Leaded gasoline washing off city streets into the reservoir',
              'Old lead pipes corroded once corrosion control was skipped',
              'Lead dissolved from rocks in the deep Lake Huron basin'
            ],
            correctAnswer: 2,
            explanation: 'The new source water was not treated to control corrosion, so it dissolved lead from aging service lines between the plant and the tap. The problem was the pipe chemistry, not lead in the river itself.',
          },
          {
            question: 'A family\'s private well has nitrate above 10 mg/L as N. Which statement about federal law is accurate?',
            options: [
              'The Clean Water Act requires the county to treat the well',
              'The Safe Drinking Water Act sets limits only for public systems',
              'The well must be closed under the Clean Water Act permit rules',
              'The water utility must replace the well at its own expense'
            ],
            correctAnswer: 1,
            explanation: 'The Safe Drinking Water Act\'s maximum contaminant levels apply to public water systems, so private well owners must test and treat their own water. The Clean Water Act governs discharges into surface waters, not household wells.',
          },
        ],
      },
    },
    {
      id: 'apewp6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Idea | Key fact |
|---|---|
| Combined sewer overflow | One pipe for sewage and stormwater; heavy rain sends untreated sewage into rivers |
| CSO fixes | Separate pipes, storage tunnels, green infrastructure |
| Sludge | Anaerobic digestion makes biogas; biosolids used on fields only if they meet limits |
| Septic systems | Tank (settling, anaerobic digestion) + drain field (soil treatment); fail in wet or sandy soils near wells |
| Pathogens | Cholera, typhoid, dysentery (bacteria); Giardia, Cryptosporidium (protozoa); hepatitis A (virus) |
| Landmark cases | Snow's Broad Street pump (1854); Milwaukee Cryptosporidium (1993) |
| Indicator bacteria | Fecal coliform or E. coli signal sewage; about 126 per 100 mL swimming criterion |
| Clean Water Act (1972) | Surface waters; point-source permits; funded sewage plants |
| Safe Drinking Water Act (1974) | Public tap water; MCLs; private wells not covered |
| Flint | Corrosive water leached lead from pipes; neurotoxin; environmental justice |

**Next:** Part 7 puts the whole topic together in AP exam-style practice.`,
    },
  ],
},

// ───────────────────────── PART 7 ─────────────────────────
{
  topicSlug: 'apes-water-pollution',
  sections: [
    {
      id: 'apewp7-intro',
      type: 'text' as const,
      content: `# 💧 Water Pollution

**Part 7 of 7 — AP Exam Practice and Synthesis**

---

| Section |
|---------|
| 📋 FRQ 2 Practice: A Stream Survey |
| Model Answers for FRQ 2 |
| 📋 FRQ 3 Practice: A Nutrient Reduction Plan |
| Model Answers for FRQ 3 |
| Misconceptions to Avoid |
| Mixed Review |

> 🔑 **Key Concept:** The APES exam has three free-response questions: **FRQ 1** designs an investigation, **FRQ 2** analyzes data, and **FRQ 3** solves an environmental problem with calculations. Water Resources, Part 6 practiced FRQ 1 and FRQ 3 with thermal pollution and irrigation. This part practices **FRQ 2** with a stream survey and **FRQ 3** with a nutrient-reduction budget, drawing on Parts 1–6 of this topic.`,
    },
    {
      id: 'apewp7-frq2',
      type: 'text' as const,
      content: `## 📋 FRQ 2 Practice: A Stream Survey

A county surveyed four sites along a creek on the same August morning. Site B is just below a dairy farm's manure lagoon outlet; Site C is just below a small town's sewage plant, which uses primary and secondary treatment only. (Illustrative data.)

| Site | A: 1 km upstream | B: below dairy | C: below sewage plant | D: 15 km downstream |
|---|---|---|---|---|
| DO (mg/L) | 9.0 | 4.5 | 3.6 | 7.2 |
| BOD (mg/L) | 1.5 | 12 | 9 | 3 |
| Nitrate (mg/L as N) | 0.5 | 4.0 | 6.0 | 3.0 |
| *E. coli* (per 100 mL) | 40 | 1,600 | 300 | 90 |
| Biotic index score | 24 | 9 | 8 | 16 |

**Questions**

(a) **Identify** the site that serves as the reference (control) and **explain** why.

(b) **Calculate** the percent decrease in DO from Site A to Site C.

(c) **Describe** the trend in the biotic index from Site A to Site D, and **explain** it using the DO data.

(d) **Explain** why Site B has the highest *E. coli* count but Site C has the highest nitrate.

(e) **Explain** why DO recovers by Site D.

(f) **Propose** one practice at the dairy farm that would reduce its impact, and **describe** how it works.`,
    },
    {
      id: 'apewp7-calc1',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Use the FRQ 2 table. Enter numbers only.

**1)** (b) Percent decrease in DO from Site A to Site C:

**2)** By how many points does the biotic index fall from Site A to Site C?

**3)** How many times higher is the *E. coli* count at Site B than at Site A?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '16', '40'],
        hint1: '(9.0 − 3.6) ÷ 9.0 × 100.',
        hint2: 'Subtract the Site C score from the Site A score.',
        hint3: 'Divide 1,600 by 40.',
        explanation: '1) 5.4 ÷ 9.0 × 100 = 60%. 2) 24 − 8 = 16 points, from excellent to poor. 3) 1,600 ÷ 40 = 40 times higher.',
      },
    },
    {
      id: 'apewp7-model2',
      type: 'text' as const,
      content: `## Model Answers for FRQ 2

**(a)** **Site A**, upstream of both discharges. It shows the creek's condition without the farm or the sewage plant, so changes at the other sites can be attributed to those sources.

**(b)** $\\frac{9.0 - 3.6}{9.0} \\times 100 = \\frac{5.4}{9.0} \\times 100 = 60\\%$ decrease.

**(c)** The index falls from 24 (excellent) at A to 9 and 8 (poor) at B and C, then partly recovers to 16 (fair) at D. Organic waste raises BOD, decomposers use up oxygen, and DO falls to 3.6–4.5 mg/L, too low for sensitive insects such as stoneflies and mayflies; only tolerant worms and midges remain.

**(d)** Manure enters Site B **untreated**, so it carries large numbers of fecal bacteria. The sewage plant **disinfects** its effluent, which cuts *E. coli*, but secondary treatment does **not** remove most nitrogen, so dissolved nitrogen, much of it as nitrate, passes through. (Tertiary treatment would remove it.)

**(e)** Over 15 km, decomposers use up most of the organic matter (BOD falls to 3 mg/L), so oxygen demand drops while oxygen keeps dissolving from the air and from photosynthesis. This is the recovery zone of the oxygen sag curve.

**(f)** Any one, with its mechanism: a **vegetated buffer strip** between the lagoon and the creek slows runoff so solids and bacteria settle and are filtered; **covered manure storage** keeps rain from overflowing the lagoon; **spreading manure only on dry, unfrozen fields** at crop-uptake rates keeps nutrients on the land; **fencing cattle out of the creek** stops direct manure input.

> 🔑 **AP Connection:** FRQ 2 rewards answers that **cite the data**. Write "DO falls from 9.0 to 3.6 mg/L" instead of "DO goes down".`,
    },
    {
      id: 'apewp7-frq3',
      type: 'text' as const,
      content: `## 📋 FRQ 3 Practice: A Nutrient Reduction Plan

A river basin delivers **1,200 metric tons of nitrogen per year** to a coastal bay with a summer dead zone. Cropland contributes **70%**, sewage plants **20%** and other sources **10%**. The state's goal is to cut the total load by **30%**. (Illustrative data.)

Two practices are available:

- **Upgrade sewage plants to tertiary treatment:** removes **75%** of the nitrogen in their effluent, at a cost of **\\$18 million per year**.
- **Pay farmers to plant cover crops:** each hectare keeps **20 kg** of nitrogen out of the river, at a cost of **\\$100 per hectare per year**.

**Questions**

(a) **Calculate** how many metric tons of nitrogen per year must be removed to meet the goal.

(b) **Calculate** how many metric tons per year the sewage plant upgrade would remove.

(c) **Calculate** how many hectares of cover crops are needed to remove the rest of the target.

(d) **Calculate** the cost per kilogram of nitrogen removed for each practice, and **identify** which is cheaper.

(e) **Explain** one reason the cover crop estimate might fall short in a given year.

(f) **Describe** one benefit of the cover crops other than reducing nitrogen.`,
    },
    {
      id: 'apewp7-calc2',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Use the FRQ 3 information. Enter numbers only, without units or commas.

**1)** (a) Metric tons of nitrogen per year that must be removed:

**2)** (b) Metric tons per year removed by the sewage plant upgrade:

**3)** (c) Hectares of cover crops needed for the rest of the target:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['360', '180', '9000'],
        hint1: '30% of 1,200 t.',
        hint2: 'Sewage plants deliver 20% of 1,200 t; the upgrade removes 75% of that.',
        hint3: 'Remaining target in kg (1 t = 1,000 kg) ÷ 20 kg per hectare.',
        explanation: '1) 0.30 × 1,200 = 360 t. 2) 0.20 × 1,200 = 240 t, and 0.75 × 240 = 180 t. 3) 360 − 180 = 180 t = 180,000 kg, and 180,000 ÷ 20 = 9,000 ha.',
      },
    },
    {
      id: 'apewp7-model3',
      type: 'text' as const,
      content: `## Model Answers for FRQ 3

**(a)** $0.30 \\times 1{,}200\\ \\text{t} = 360\\ \\text{t}$ per year.

**(b)** Sewage plants deliver $0.20 \\times 1{,}200 = 240$ t; the upgrade removes $0.75 \\times 240 = 180$ t per year.

**(c)** Remaining: $360 - 180 = 180\\ \\text{t} = 180{,}000\\ \\text{kg}$. Hectares: $\\frac{180{,}000\\ \\text{kg}}{20\\ \\text{kg/ha}} = 9{,}000\\ \\text{ha}$.

**(d)** Sewage upgrade: $\\frac{\\$18{,}000{,}000}{180{,}000\\ \\text{kg}} = \\$100$ per kg. Cover crops: $\\frac{\\$100\\ \\text{per ha}}{20\\ \\text{kg per ha}} = \\$5$ per kg. Cover crops are **20 times cheaper** per kilogram, which is why nonpoint programs are attractive even though they are harder to guarantee.

**(e)** The program is voluntary, so fewer farmers may enroll; a wet spring can wash out more nitrate than the crops capture; or a late harvest leaves too little time for the cover crop to grow.

**(f)** Cover crop roots **hold soil against erosion**, which also keeps sediment and attached phosphorus out of the river; they add organic matter that improves soil fertility and water infiltration.

## Misconceptions to Avoid

| Misconception | Correct idea |
|---|---|
| "Nutrients poison the fish in a dead zone." | Fish die from **low oxygen** used up by decomposers, not from nitrate itself |
| "A dilute river carries less pollution." | Load = concentration × flow; a big dilute river can deliver more |
| "Nonpoint means unregulated by any law." | Large CAFOs and storm drains are permitted as point sources; other runoff is managed by BMPs |
| "A higher LD50 means more toxic." | A **lower** LD50 means more toxic; also check the curve's shape and threshold |
| "Cleanup removes most spilled oil." | Even in a massive response, people physically removed only about a quarter of the Deepwater Horizon oil |
| "*E. coli* in a sample proves people will get sick." | It is an **indicator** that feces, and possibly pathogens, are present |
| "Thermal pollution adds a chemical." | It adds **heat**, which lowers DO and raises organisms' oxygen demand |
| "The Safe Drinking Water Act protects all drinking water." | It covers **public** systems; private wells are the owner's responsibility |`,
    },
    {
      id: 'apewp7-q-mixed',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A lake has daytime DO of 125% saturation and pre-dawn DO of 30% saturation. What is the most likely explanation?',
            options: [
              'A warm-water discharge heats the lake every afternoon',
              'Algae photosynthesize by day and respire at night',
              'A sediment plume blocks light from reaching the algae',
              'An oil slick seals the lake surface off at night'
            ],
            correctAnswer: 1,
            explanation: 'Supersaturation by day and a deep pre-dawn low are the signature of heavy algal growth: photosynthesis adds oxygen in sunlight, and respiration by algae and decomposers removes it in the dark. Warming and sediment would lower daytime DO instead.',
          },
          {
            question: 'Which pairing of pollutant and main harm is correct?',
            options: [
              'Phosphorus in a lake: direct poisoning of fish',
              'Fecal coliform: eggshell thinning in birds of prey',
              'Heated cooling water: higher dissolved oxygen',
              'Methylmercury: damage to developing nervous systems'
            ],
            correctAnswer: 3,
            explanation: 'Methylmercury is a neurotoxin that biomagnifies and harms fetuses and children most. Phosphorus harms through eutrophication rather than poisoning, warm water lowers DO, and eggshell thinning came from DDT.',
          },
          {
            question: 'A town finds a solvent in its wells at a hazard quotient of 4. Which response best follows from this result?',
            options: [
              'Treat the water or switch sources to reduce exposure',
              'Take no action, since the quotient is well below 10',
              'Repeat the LD50 test on rats to confirm it is toxic',
              'Raise the reference dose so the quotient falls below 1'
            ],
            correctAnswer: 0,
            explanation: 'A hazard quotient above 1 means people take in more than the dose judged safe, so managers should cut exposure by treatment or a new source. Changing the reference dose to fit the data is not science-based risk management.',
          },
          {
            question: 'Which source would be regulated with a Clean Water Act discharge permit?',
            options: [
              'Fertilizer runoff from many small corn farms',
              'Mercury falling in rain over a mountain lake',
              'A city storm-drain system emptying into a bay',
              'Salt washing off rural roads in a snowmelt'
            ],
            correctAnswer: 2,
            explanation: 'Urban storm drains collect runoff and release it through outfall pipes, so cities need stormwater permits. Scattered farm runoff, atmospheric deposition and rural road salt have no single permitted discharge point.',
          },
        ],
      },
    },
    {
      id: 'apewp7-dd',
      type: 'dropdown-select' as const,
      content: `**Match the Evidence to the Problem** 🔽

Choose the pollution problem that best explains each set of data.`,
      exercise: {
        dropdowns: [
          { label: 'High BOD, low DO and tolerant worms below a food-processing plant:', options: ['Organic waste', 'Thermal pollution', 'Sediment', 'Persistent toxins'] },
          { label: 'Clear water, normal DO, but PCB levels rising from fish to gull eggs:', options: ['Organic waste', 'Thermal pollution', 'Sediment', 'Persistent toxins'] },
          { label: 'Normal BOD, lower DO and water 9 °C warmer than upstream below a power plant:', options: ['Organic waste', 'Thermal pollution', 'Sediment', 'Persistent toxins'] },
          { label: 'Secchi depth falls from 3 m to 0.5 m after a highway is built upstream:', options: ['Organic waste', 'Thermal pollution', 'Sediment', 'Persistent toxins'] },
        ],
        correctAnswers: ['Organic waste', 'Persistent toxins', 'Thermal pollution', 'Sediment'],
        hint1: 'High BOD means a lot of material for decomposers to eat.',
        hint2: 'Rising concentration up a food chain is biomagnification of a persistent chemical.',
        hint3: 'Lower DO without high BOD points to heat; a shallower Secchi depth means cloudier water.',
        explanation: 'High BOD with low DO signals organic waste. Biomagnifying PCBs are a persistent toxin even in clear water. Lower DO with normal BOD and warm water points to thermal pollution, and a falling Secchi depth after construction points to sediment.',
      },
    },
    {
      id: 'apewp7-summary',
      type: 'text' as const,
      content: `## Part 7 Summary

| Part | Big idea | Key tool |
|---|---|---|
| 1. Sources and measures | Point sources are permitted at the pipe; nonpoint needs land practices | Percent DO saturation; biotic index |
| 2. Eutrophication | P limits lakes, N limits coasts; stratified bottom water goes hypoxic | Load = concentration × flow |
| 3. Oil, heat, sediment | Spills differ by setting; cleanup recovers little; cooling design matters | Barrels × 42; flow-weighted mixing |
| 4. Persistent toxins | Minamata, PCBs, DDT, global distillation, hormone mimics | Biomagnification factor; safe servings |
| 5. Dose and risk | Curve shape, LC50, interactions, four-step risk assessment | Dose from water; hazard quotient; LD50 ÷ ED50 |
| 6. Sewage and law | CSOs, septic systems, indicator bacteria, CWA vs SDWA, Flint | Runoff volume; colonies per 100 mL |
| 7. Exam practice | Cite the data; link pollutant → mechanism → organism | Percent change; cost per kg |

> 🔑 **AP Connection:** Across every water-pollution question, the winning sentence has three links: **source → mechanism → effect on organisms**. "Manure from the feedlot adds organic matter, decomposers use up dissolved oxygen, and sensitive stoneflies disappear."`,
    },
  ],
},
]
